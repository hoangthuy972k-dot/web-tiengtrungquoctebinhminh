// ══════════════════════════════════════════
// DATA — HSK6 Bài 21: 未来商店 (Cửa hàng tương lai)
// 第六单元 趣味世界 · Nguồn: HSK标准教程6下 (tr. 14–22)
// Bài khoá: 未来商店 (897 chữ) — 改编自《北京晚报》文章《未来商店什么样》
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'急剧',py:'jíjù',pos:'Tính từ',vn:'nhanh, nhanh chóng và mạnh (biến đổi đột ngột)',hv:'cấp kịch',em:'📈',lesson:1,
   explain:['Chỉ sự thay đổi diễn ra RẤT NHANH và DỮ DỘI trong thời gian ngắn: 急 = gấp, 剧 = mạnh, dữ dội. Thường làm trạng ngữ trước động từ chỉ biến đổi: 急剧增加 / 下降 / 变化 / 上升.','Văn viết, hay gặp trong tin tức, báo cáo số liệu. Khác 迅速 (nhanh nói chung, cả hành động): 急剧 nhấn sự biến đổi đột ngột về số lượng, mức độ.'],
   usage:'急剧 + 增加 / 减少 / 上升 / 下降 / 变化; (情况 / 数量) + 发生了急剧的变化. Câu mở đầu bài khoá: 如今喜欢网络购物的人急剧增加.',
   collo:['急剧增加','急剧下降','急剧变化','急剧上升'],
   ex_zh:'如今喜欢网络购物的人急剧增加。',ex_py:'Rújīn xǐhuan wǎngluò gòuwù de rén jíjù zēngjiā.',ex_vn:'Ngày nay số người thích mua sắm qua mạng tăng lên nhanh chóng.',
   exList:[
     {zh:'如今喜欢网络购物的人急剧增加，实体店的顾客却越来越少。',py:'Rújīn xǐhuan wǎngluò gòuwù de rén jíjù zēngjiā, shítǐdiàn de gùkè què yuè lái yuè shǎo.',vn:'Ngày nay số người thích mua sắm trực tuyến tăng vọt, còn khách của cửa hàng truyền thống thì ngày càng ít.'},
     {zh:'入冬以后，气温急剧下降，不少人都感冒了。',py:'Rù dōng yǐhòu, qìwēn jíjù xiàjiàng, bù shǎo rén dōu gǎnmào le.',vn:'Sau khi vào đông, nhiệt độ giảm mạnh, khá nhiều người bị cảm.'},
     {zh:'最近几十年，这座城市发生了急剧的变化，老街区几乎都认不出来了。',py:'Zuìjìn jǐ shí nián, zhè zuò chéngshì fāshēngle jíjù de biànhuà, lǎo jiēqū jīhū dōu rèn bu chūlái le.',vn:'Mấy chục năm gần đây, thành phố này thay đổi chóng mặt, các khu phố cũ gần như không nhận ra nữa.'}
   ],
   colloFull:[
     {zh:'急剧增加',py:'jíjù zēngjiā',vn:'tăng nhanh, tăng vọt'},
     {zh:'急剧下降',py:'jíjù xiàjiàng',vn:'giảm mạnh, tụt nhanh'},
     {zh:'急剧变化',py:'jíjù biànhuà',vn:'biến đổi nhanh chóng'},
     {zh:'急剧上升',py:'jíjù shàngshēng',vn:'tăng vọt, leo thang nhanh'},
     {zh:'急剧的变化',py:'jíjù de biànhuà',vn:'sự thay đổi chóng mặt'}
   ],
   patterns:[
     {s:'急剧 + 增加 / 减少 / 上升 / 下降',m:'(Số lượng, mức độ) tăng / giảm nhanh và mạnh'},
     {s:'发生了急剧的变化',m:'Đã xảy ra sự thay đổi chóng mặt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi mở trang web, lượng đơn hàng của cửa hàng tăng vọt, nhân viên bận tối mắt tối mũi.',answer:'自从开了网站，店里的订单急剧增加，店员们忙得不得了。',answerPy:'Zìcóng kāile wǎngzhàn, diàn li de dìngdān jíjù zēngjiā, diànyuánmen máng de bùdéliǎo.',
      note:'自从…… mốc thời gian bắt đầu; Adj + 得不得了 bổ ngữ mức độ (ôn HSK 4).',pair:'自从'},
     {promptLang:'vi',prompt:'Vì thời tiết thay đổi đột ngột, số người đi khám bệnh tăng lên nhanh chóng.',answer:'由于天气急剧变化，看病的人急剧增加了。',answerPy:'Yóuyú tiānqì jíjù biànhuà, kàn bìng de rén jíjù zēngjiā le.',
      note:'由于…… nêu nguyên nhân (văn viết, ôn HSK 4); 急剧 làm trạng ngữ trước động từ biến đổi.',pair:'由于'}
   ]},

  {n:2,zh:'川流不息',py:'chuānliú-bùxī',pos:'Thành ngữ',vn:'qua lại nườm nượp, (người, xe) nối nhau không dứt',hv:'xuyên lưu bất tức',em:'🚶',lesson:1,
   explain:['Nghĩa đen: dòng sông chảy mãi không ngừng (川 = sông, 息 = ngừng). Nghĩa dùng: người, xe cộ qua lại liên tục, đông đúc như nước chảy.','Hay làm vị ngữ (车辆川流不息) hoặc định ngữ (川流不息的人群). Không dùng cho vật tĩnh hay cho một người.'],
   usage:'(人 / 车 / 游客) + 川流不息; 川流不息的 + 人群 / 车辆; 在川流不息的人群中 + V (bài khoá: 在川流不息的人群中奔走).',
   collo:['川流不息的人群','车辆川流不息','游客川流不息','川流不息的车流'],
   ex_zh:'买东西不用在川流不息的人群中奔走。',ex_py:'Mǎi dōngxi búyòng zài chuānliú-bùxī de rénqún zhōng bēnzǒu.',ex_vn:'Mua đồ không cần phải chạy ngược chạy xuôi giữa dòng người nườm nượp.',
   exList:[
     {zh:'买东西不用在川流不息的人群中奔走，仅需登录网站就行了。',py:'Mǎi dōngxi búyòng zài chuānliú-bùxī de rénqún zhōng bēnzǒu, jǐn xū dēnglù wǎngzhàn jiù xíng le.',vn:'Mua sắm không cần chen chúc giữa dòng người nườm nượp, chỉ cần đăng nhập trang web là xong.'},
     {zh:'国庆节期间，故宫门口的游客川流不息。',py:'Guóqìng Jié qījiān, Gùgōng ménkǒu de yóukè chuānliú-bùxī.',vn:'Trong dịp Quốc khánh, du khách trước cổng Cố Cung nườm nượp không ngớt.'},
     {zh:'站在天桥上，看着脚下川流不息的车辆，我不由得想起了家乡安静的小路。',py:'Zhàn zài tiānqiáo shang, kànzhe jiǎoxià chuānliú-bùxī de chēliàng, wǒ bùyóude xiǎngqǐle jiāxiāng ānjìng de xiǎolù.',vn:'Đứng trên cầu vượt, nhìn dòng xe cộ nối đuôi nhau không dứt dưới chân, tôi bất giác nhớ tới con đường nhỏ yên tĩnh ở quê.'}
   ],
   colloFull:[
     {zh:'川流不息的人群',py:'chuānliú-bùxī de rénqún',vn:'dòng người nườm nượp'},
     {zh:'车辆川流不息',py:'chēliàng chuānliú-bùxī',vn:'xe cộ qua lại không ngớt'},
     {zh:'游客川流不息',py:'yóukè chuānliú-bùxī',vn:'du khách nườm nượp'},
     {zh:'川流不息的车流',py:'chuānliú-bùxī de chēliú',vn:'dòng xe nối đuôi không dứt'},
     {zh:'在川流不息的人群中',py:'zài chuānliú-bùxī de rénqún zhōng',vn:'giữa dòng người qua lại tấp nập'}
   ],
   patterns:[
     {s:'N (人 / 车 / 游客) + 川流不息',m:'… qua lại nườm nượp'},
     {s:'川流不息的 + 人群 / 车辆',m:'Dòng người / dòng xe không ngớt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy dòng người trên phố nườm nượp, nhưng cậu ấy vẫn nhận ra mẹ ngay từ cái nhìn đầu tiên.',answer:'虽然街上的人川流不息，但他还是一眼就认出了妈妈。',answerPy:'Suīrán jiē shang de rén chuānliú-bùxī, dàn tā háishi yì yǎn jiù rènchūle māma.',
      note:'虽然……但……还是……; 一眼就 + V (ôn HSK 4).',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Siêu thị lúc nào cũng khách ra vào tấp nập, nên phải thuê thêm mấy nhân viên.',answer:'超市里的顾客总是川流不息，所以不得不多请几个店员。',answerPy:'Chāoshì li de gùkè zǒngshì chuānliú-bùxī, suǒyǐ bùdébù duō qǐng jǐ ge diànyuán.',
      note:'不得不 + V = buộc phải (ôn HSK 4); 川流不息 làm vị ngữ.',pair:'不得不'}
   ]},

  {n:3,zh:'登录',py:'dēnglù',pos:'Động từ',vn:'đăng nhập (vào trang web, tài khoản)',hv:'đăng lục',em:'🔐',lesson:1,
   explain:['Nhập tài khoản, mật khẩu để vào một trang web, ứng dụng, hệ thống: 登录网站 / 账号 / 邮箱. Trái nghĩa: 退出 (thoát).','Cũng viết 登陆 trong một số văn bản, nhưng 登陆 nghĩa gốc là "đổ bộ lên bờ" (台风登陆). Chuẩn cho mạng là 登录.'],
   usage:'登录 + 网站 / 账号 / 系统 / 邮箱; 登录到 + nơi chốn ảo (登录到虚拟设计室); 用……登录.',
   collo:['登录网站','登录账号','登录到虚拟设计室','重新登录'],
   ex_zh:'仅需登录网站，动几下手指，就可以把东西买回家。',ex_py:'Jǐn xū dēnglù wǎngzhàn, dòng jǐ xià shǒuzhǐ, jiù kěyǐ bǎ dōngxi mǎi huí jiā.',ex_vn:'Chỉ cần đăng nhập trang web, động vài ngón tay là có thể mua đồ mang về nhà.',
   exList:[
     {zh:'你登录到虚拟设计室，进入设计过程，对颜色、外观等进行投票。',py:'Nǐ dēnglù dào xūnǐ shèjìshì, jìnrù shèjì guòchéng, duì yánsè, wàiguān děng jìnxíng tóupiào.',vn:'Bạn đăng nhập vào phòng thiết kế ảo, bước vào quá trình thiết kế, bỏ phiếu cho màu sắc, kiểu dáng….'},
     {zh:'密码输错了三次，账号就登录不了了，只好打客服电话。',py:'Mìmǎ shūcuòle sān cì, zhànghào jiù dēnglù bu liǎo le, zhǐhǎo dǎ kèfú diànhuà.',vn:'Nhập sai mật khẩu ba lần, tài khoản không đăng nhập được nữa, đành phải gọi tổng đài chăm sóc khách hàng.'},
     {zh:'用公共电脑登录邮箱以后，千万别忘了退出。',py:'Yòng gōnggòng diànnǎo dēnglù yóuxiāng yǐhòu, qiānwàn bié wàngle tuìchū.',vn:'Sau khi đăng nhập email trên máy tính công cộng, nhất định đừng quên đăng xuất.'}
   ],
   colloFull:[
     {zh:'登录网站',py:'dēnglù wǎngzhàn',vn:'đăng nhập trang web'},
     {zh:'登录账号',py:'dēnglù zhànghào',vn:'đăng nhập tài khoản'},
     {zh:'登录到虚拟设计室',py:'dēnglù dào xūnǐ shèjìshì',vn:'đăng nhập vào phòng thiết kế ảo'},
     {zh:'重新登录',py:'chóngxīn dēnglù',vn:'đăng nhập lại'},
     {zh:'登录不了',py:'dēnglù bu liǎo',vn:'không đăng nhập được'}
   ],
   patterns:[
     {s:'登录 + 网站 / 账号 / 系统',m:'Đăng nhập vào …'},
     {s:'登录到 + nơi (ảo)',m:'Đăng nhập vào (một không gian trên mạng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần đăng nhập trang web của trường là có thể tra được điểm thi.',answer:'只要登录学校的网站，就可以查到考试成绩。',answerPy:'Zhǐyào dēnglù xuéxiào de wǎngzhàn, jiù kěyǐ chádào kǎoshì chéngjì.',
      note:'只要……就…… điều kiện đủ (ôn HSK 4); 查到 bổ ngữ kết quả.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi thử mấy lần rồi mà vẫn không đăng nhập được, có phải mạng có vấn đề không?',answer:'我试了好几次还是登录不了，是不是网络出问题了？',answerPy:'Wǒ shìle hǎo jǐ cì háishi dēnglù bu liǎo, shì bu shì wǎngluò chū wèntí le?',
      note:'V + 不了 bổ ngữ khả năng; 是不是 hỏi phỏng đoán (ôn HSK 3–4).',pair:'V不了'}
   ]},

  {n:4,zh:'指令',py:'zhǐlìng',pos:'Danh từ',vn:'mệnh lệnh, lệnh (cho máy móc hoặc cấp dưới)',hv:'chỉ lệnh',em:'⌨️',lesson:1,
   explain:['Lệnh, chỉ thị để máy tính / máy móc thực hiện một thao tác: 输入指令, 下指令, 执行指令. Trong bài khoá: 下几道指令 = ra vài lệnh (thao tác mua hàng).','Cũng chỉ mệnh lệnh của cấp trên trong quân đội, công việc (上级的指令). Lượng từ: 道, 条, 个.'],
   usage:'下 / 发出 / 输入 + 指令; 执行 / 接到 + 指令; 根据 + 指令 + V; 几道指令.',
   collo:['下几道指令','输入指令','执行指令','根据指令'],
   ex_zh:'动几下手指，下几道指令，就可以把东西买回家。',ex_py:'Dòng jǐ xià shǒuzhǐ, xià jǐ dào zhǐlìng, jiù kěyǐ bǎ dōngxi mǎi huí jiā.',ex_vn:'Động vài ngón tay, ra vài lệnh là có thể mua đồ về nhà.',
   exList:[
     {zh:'动几下手指，下几道指令，就可以把东西买回家。',py:'Dòng jǐ xià shǒuzhǐ, xià jǐ dào zhǐlìng, jiù kěyǐ bǎ dōngxi mǎi huí jiā.',vn:'Động vài ngón tay, ra vài lệnh là có thể mua đồ mang về nhà.'},
     {zh:'你只要对智能音箱说出指令，它就会帮你播放音乐。',py:'Nǐ zhǐyào duì zhìnéng yīnxiāng shuōchū zhǐlìng, tā jiù huì bāng nǐ bōfàng yīnyuè.',vn:'Bạn chỉ cần nói lệnh với loa thông minh, nó sẽ phát nhạc giúp bạn.'},
     {zh:'士兵们接到指令后，立刻出发了。',py:'Shìbīngmen jiēdào zhǐlìng hòu, lìkè chūfā le.',vn:'Các chiến sĩ nhận được lệnh xong lập tức xuất phát.'}
   ],
   colloFull:[
     {zh:'下几道指令',py:'xià jǐ dào zhǐlìng',vn:'ra vài lệnh'},
     {zh:'输入指令',py:'shūrù zhǐlìng',vn:'nhập lệnh'},
     {zh:'执行指令',py:'zhíxíng zhǐlìng',vn:'thực hiện lệnh'},
     {zh:'根据指令',py:'gēnjù zhǐlìng',vn:'theo lệnh, theo chỉ dẫn'},
     {zh:'接到指令',py:'jiēdào zhǐlìng',vn:'nhận được lệnh'}
   ],
   patterns:[
     {s:'下 / 发出 / 输入 + 指令',m:'Ra / phát / nhập lệnh'},
     {s:'根据 + 指令 + V',m:'Làm theo lệnh, theo hướng dẫn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Robot này rất thông minh, bạn ra lệnh gì nó liền làm cái đó.',answer:'这个机器人很聪明，你下什么指令，它就做什么。',answerPy:'Zhège jīqìrén hěn cōngming, nǐ xià shénme zhǐlìng, tā jiù zuò shénme.',
      note:'Đại từ nghi vấn dùng phiếm chỉ: 什么……就……什么 (ôn HSK 4–5).',pair:'什么……就……什么'},
     {promptLang:'vi',prompt:'Chưa nhận được lệnh của cấp trên thì ai cũng không được tự ý hành động.',answer:'没有接到上级的指令，谁也不许随便行动。',answerPy:'Méiyǒu jiēdào shàngjí de zhǐlìng, shéi yě bù xǔ suíbiàn xíngdòng.',
      note:'谁也不…… phủ định toàn bộ; 不许 = không được phép (ôn HSK 4).',pair:'谁也不……'}
   ]},

  {n:5,zh:'根深蒂固',py:'gēnshēn-dìgù',pos:'Thành ngữ',vn:'thâm căn cố đế, ăn sâu bén rễ',hv:'căn thâm đế cố',em:'🌳',lesson:1,
   explain:['Nghĩa đen: rễ cắm sâu, cuống bám chặt (蒂 = cuống hoa quả). Nghĩa dùng: thói quen, quan niệm, thế lực… đã hình thành từ lâu, rất khó thay đổi.','Thường nói về 观念, 习惯, 思想, 偏见; làm định ngữ (根深蒂固的习惯) hoặc vị ngữ (这种观念根深蒂固). Tiếng Việt có sẵn "thâm căn cố đế".'],
   usage:'根深蒂固的 + 习惯 / 观念 / 偏见; (观念) + 根深蒂固 / 在……心中根深蒂固. Bài khoá: 人类根深蒂固的购物习惯正在改变.',
   collo:['根深蒂固的习惯','根深蒂固的观念','根深蒂固的偏见','思想根深蒂固'],
   ex_zh:'人类根深蒂固的购物习惯正在改变。',ex_py:'Rénlèi gēnshēn-dìgù de gòuwù xíguàn zhèngzài gǎibiàn.',ex_vn:'Thói quen mua sắm ăn sâu bén rễ của loài người đang thay đổi.',
   exList:[
     {zh:'网络购物越来越方便，人类根深蒂固的购物习惯正在改变。',py:'Wǎngluò gòuwù yuè lái yuè fāngbiàn, rénlèi gēnshēn-dìgù de gòuwù xíguàn zhèngzài gǎibiàn.',vn:'Mua sắm qua mạng ngày càng tiện, thói quen mua sắm ăn sâu bén rễ của con người đang thay đổi.'},
     {zh:'“重男轻女”的观念在一些老人心中根深蒂固，很难改变。',py:'“Zhòng nán qīng nǚ” de guānniàn zài yìxiē lǎorén xīnzhōng gēnshēn-dìgù, hěn nán gǎibiàn.',vn:'Quan niệm "trọng nam khinh nữ" đã thâm căn cố đế trong lòng một số người già, rất khó thay đổi.'},
     {zh:'他熬夜的坏习惯已经根深蒂固了，说了多少次都没用。',py:'Tā áoyè de huài xíguàn yǐjīng gēnshēn-dìgù le, shuōle duōshao cì dōu méi yòng.',vn:'Thói quen xấu thức khuya của cậu ấy đã ăn sâu rồi, nói bao nhiêu lần cũng vô ích.'}
   ],
   colloFull:[
     {zh:'根深蒂固的习惯',py:'gēnshēn-dìgù de xíguàn',vn:'thói quen ăn sâu bén rễ'},
     {zh:'根深蒂固的观念',py:'gēnshēn-dìgù de guānniàn',vn:'quan niệm thâm căn cố đế'},
     {zh:'根深蒂固的偏见',py:'gēnshēn-dìgù de piānjiàn',vn:'định kiến cố hữu'},
     {zh:'思想根深蒂固',py:'sīxiǎng gēnshēn-dìgù',vn:'tư tưởng đã ăn sâu'},
     {zh:'在心中根深蒂固',py:'zài xīnzhōng gēnshēn-dìgù',vn:'ăn sâu trong lòng'}
   ],
   patterns:[
     {s:'根深蒂固的 + 习惯 / 观念 / 偏见',m:'Thói quen / quan niệm / định kiến ăn sâu bén rễ'},
     {s:'……在……心中根深蒂固',m:'… đã ăn sâu trong lòng ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thay đổi quan niệm đã ăn sâu bén rễ này, không phải chuyện một sớm một chiều.',answer:'要改变这种根深蒂固的观念，并不是一朝一夕的事。',answerPy:'Yào gǎibiàn zhè zhǒng gēnshēn-dìgù de guānniàn, bìng bú shì yìzhāo-yìxī de shì.',
      note:'并不是…… phủ định nhấn mạnh (并非, ôn HSK 6 bài 7); 一朝一夕 = một sớm một chiều.',pair:'并不是'},
     {promptLang:'vi',prompt:'Dù thói quen ăn uống của ông nội đã ăn sâu, ông vẫn chịu nghe lời bác sĩ.',answer:'尽管爷爷的饮食习惯已经根深蒂固，他还是愿意听医生的话。',answerPy:'Jǐnguǎn yéye de yǐnshí xíguàn yǐjīng gēnshēn-dìgù, tā háishi yuànyì tīng yīshēng de huà.',
      note:'尽管……还是…… nhượng bộ sự thật (ôn HSK 5); 饮食 ôn HSK 6 bài 10.',pair:'尽管……还是……'}
   ]},

  {n:6,zh:'不免',py:'bùmiǎn',pos:'Phó từ',vn:'không tránh được, khó tránh khỏi',hv:'bất miễn',em:'😅',lesson:1,
   explain:['Biểu thị trong một tình huống nào đó thì TỰ NHIÊN sinh ra một kết quả, khách quan khó tránh: 第一次上台，不免有些紧张. Phía trước thường nêu NGUYÊN NHÂN / hoàn cảnh.','Chỉ đi với dạng KHẲNG ĐỊNH (不免紧张, 不免会生气), không đi với phủ định (không nói 不免不高兴). Phân biệt với 未免 (bình luận, không tán thành) — xem phần 词语辨析.'],
   usage:'(nguyên nhân / hoàn cảnh)，+ 主语 + 不免 + (有些 / 会 / 要) + V / Adj. Bài khoá: 我们不免要问：…….',
   collo:['不免要问','不免有些紧张','不免会生气','不免想起往事'],
   ex_zh:'网上购物如此方便，我们不免要问：未来实体商店还会存在吗？',ex_py:'Wǎngshàng gòuwù rúcǐ fāngbiàn, wǒmen bùmiǎn yào wèn: wèilái shítǐ shāngdiàn hái huì cúnzài ma?',ex_vn:'Mua sắm trên mạng tiện lợi như thế, chúng ta không khỏi phải hỏi: cửa hàng truyền thống trong tương lai liệu còn tồn tại không?',
   exList:[
     {zh:'网上购物如此方便，我们不免要问：未来实体商店还会存在吗？',py:'Wǎngshàng gòuwù rúcǐ fāngbiàn, wǒmen bùmiǎn yào wèn: wèilái shítǐ shāngdiàn hái huì cúnzài ma?',vn:'Mua sắm trên mạng tiện lợi như vậy, chúng ta không khỏi phải hỏi: tương lai cửa hàng truyền thống còn tồn tại không?'},
     {zh:'他刚参加工作，不免会犯错误，你别对他太严厉了。',py:'Tā gāng cānjiā gōngzuò, bùmiǎn huì fàn cuòwù, nǐ bié duì tā tài yánlì le.',vn:'Cậu ấy mới đi làm, khó tránh khỏi mắc lỗi, anh đừng nghiêm khắc với cậu ấy quá.'},
     {zh:'第一次在全校同学面前演讲，我不免有些紧张。',py:'Dì-yī cì zài quánxiào tóngxué miànqián yǎnjiǎng, wǒ bùmiǎn yǒuxiē jǐnzhāng.',vn:'Lần đầu diễn thuyết trước toàn trường, tôi không tránh khỏi hơi hồi hộp.'}
   ],
   colloFull:[
     {zh:'不免要问',py:'bùmiǎn yào wèn',vn:'không khỏi phải hỏi'},
     {zh:'不免有些紧张',py:'bùmiǎn yǒuxiē jǐnzhāng',vn:'khó tránh khỏi hơi căng thẳng'},
     {zh:'不免会生气',py:'bùmiǎn huì shēngqì',vn:'khó tránh khỏi sẽ giận'},
     {zh:'不免想起往事',py:'bùmiǎn xiǎngqǐ wǎngshì',vn:'không khỏi nhớ lại chuyện xưa'},
     {zh:'不免会犯错误',py:'bùmiǎn huì fàn cuòwù',vn:'khó tránh khỏi mắc lỗi'}
   ],
   patterns:[
     {s:'nguyên nhân，+ S + 不免 + (有些 / 会) + V / Adj',m:'Vì …, nên khó tránh khỏi …'},
     {s:'不免 + 要 + V',m:'Không khỏi phải …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lâu lắm rồi mới về quê, nhìn thấy trường cũ, tôi không khỏi nhớ lại những ngày tháng hồi nhỏ.',answer:'好久没回老家了，看到以前的学校，我不免想起了小时候的日子。',answerPy:'Hǎojiǔ méi huí lǎojiā le, kàndào yǐqián de xuéxiào, wǒ bùmiǎn xiǎngqǐle xiǎoshíhou de rìzi.',
      note:'好久没……了 = lâu lắm rồi không …; 想起 bổ ngữ xu hướng nghĩa mở rộng (ôn HSK 4).',pair:'好久没……了'},
     {promptLang:'vi',prompt:'Bị bạn thân hiểu lầm, trong lòng cô ấy khó tránh khỏi hơi buồn.',answer:'被好朋友误会了，她心里不免有些难过。',answerPy:'Bèi hǎo péngyou wùhuì le, tā xīnli bùmiǎn yǒuxiē nánguò.',
      note:'Câu bị động 被 nêu nguyên nhân; 不免 + 有些 + Adj (dạng khẳng định).',pair:'被'}
   ]},

  {n:7,zh:'预言',py:'yùyán',pos:'Động từ / Danh từ',vn:'tiên đoán, dự đoán; lời tiên đoán',hv:'dự ngôn',em:'🔮',lesson:1,
   explain:['Động từ: nói trước điều sẽ xảy ra trong tương lai (thường dựa trên phân tích hoặc mang màu sắc tiên tri): 有人这样预言：…….','Danh từ: lời tiên đoán — 他的预言实现了 / 成真了. So với 预测 (dự báo dựa vào số liệu, khoa học), 预言 mang tính nhận định lớn, dài hạn.'],
   usage:'有人 / 专家 + 预言 + 小句; 预言 + 实现 / 成真 / 落空; 做出预言.',
   collo:['有人这样预言','专家预言','预言成真','他的预言实现了'],
   ex_zh:'有人这样预言：实体商店若想存在，必须进行根本性的革命。',ex_py:'Yǒu rén zhèyàng yùyán: shítǐ shāngdiàn ruò xiǎng cúnzài, bìxū jìnxíng gēnběnxìng de gémìng.',ex_vn:'Có người tiên đoán thế này: cửa hàng truyền thống nếu muốn tồn tại thì phải tiến hành một cuộc cách mạng tận gốc.',
   exList:[
     {zh:'有人这样预言：实体商店若想存在，必须进行根本性的革命，而不是改良。',py:'Yǒu rén zhèyàng yùyán: shítǐ shāngdiàn ruò xiǎng cúnzài, bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì gǎiliáng.',vn:'Có người tiên đoán: cửa hàng truyền thống nếu muốn tồn tại phải tiến hành cách mạng tận gốc chứ không phải cải tiến.'},
     {zh:'二十年前就有专家预言，手机会代替钱包，没想到这么快就成真了。',py:'Èrshí nián qián jiù yǒu zhuānjiā yùyán, shǒujī huì dàitì qiánbāo, méi xiǎngdào zhème kuài jiù chéng zhēn le.',vn:'Hai mươi năm trước đã có chuyên gia tiên đoán điện thoại sẽ thay thế ví tiền, không ngờ lại thành sự thật nhanh đến vậy.'},
     {zh:'老师的预言实现了，那个调皮的孩子后来真的成了一名科学家。',py:'Lǎoshī de yùyán shíxiàn le, nàge tiáopí de háizi hòulái zhēn de chéngle yì míng kēxuéjiā.',vn:'Lời tiên đoán của thầy đã thành hiện thực, cậu bé nghịch ngợm ấy sau này thật sự trở thành nhà khoa học.'}
   ],
   colloFull:[
     {zh:'有人这样预言',py:'yǒu rén zhèyàng yùyán',vn:'có người tiên đoán thế này'},
     {zh:'专家预言',py:'zhuānjiā yùyán',vn:'chuyên gia tiên đoán'},
     {zh:'预言成真',py:'yùyán chéng zhēn',vn:'lời tiên đoán thành sự thật'},
     {zh:'他的预言实现了',py:'tā de yùyán shíxiàn le',vn:'lời tiên đoán của anh ấy đã thành hiện thực'},
     {zh:'做出预言',py:'zuòchū yùyán',vn:'đưa ra lời tiên đoán'}
   ],
   patterns:[
     {s:'有人 / 专家 + 预言：+ 小句',m:'Có người / chuyên gia tiên đoán rằng …'},
     {s:'……的预言 + 实现了 / 成真了',m:'Lời tiên đoán của … đã thành sự thật'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ai ngờ rằng lời tiên đoán mười năm trước của ông ấy lại thành sự thật.',answer:'谁也没想到，他十年前的预言竟然成真了。',answerPy:'Shéi yě méi xiǎngdào, tā shí nián qián de yùyán jìngrán chéng zhēn le.',
      note:'竟然 = vậy mà (bất ngờ, ôn HSK 4–5); 谁也没…… phủ định toàn bộ.',pair:'竟然'},
     {promptLang:'vi',prompt:'Chuyên gia tiên đoán rằng, trong tương lai càng ngày càng nhiều công việc sẽ do máy móc hoàn thành.',answer:'专家预言，未来越来越多的工作将由机器来完成。',answerPy:'Zhuānjiā yùyán, wèilái yuè lái yuè duō de gōngzuò jiāng yóu jīqì lái wánchéng.',
      note:'将 = sẽ (văn viết); 由……来 + V chỉ người / vật thực hiện (ôn HSK 5).',pair:'由……来……'}
   ]},

  {n:8,zh:'革命',py:'gémìng',pos:'Động từ / Danh từ',vn:'cách mạng; cải cách triệt để',hv:'cách mạng',em:'⚡',lesson:1,
   explain:['Nghĩa gốc: cuộc cách mạng chính trị, xã hội. Nghĩa mở rộng dùng nhiều hơn ở HSK 6: sự thay đổi CĂN BẢN, triệt để trong một lĩnh vực (技术革命, 产业革命, 一场购物革命).','Trong bài khoá, 革命 đối lập với 改良: 革命 = thay đổi tận gốc, 改良 = sửa đổi cho tốt hơn một phần. Hay đi với 进行 / 发生 / 一场.'],
   usage:'进行 + 根本性的革命; 一场 + (技术 / 产业 / 信息) + 革命; 引起 / 带来 + 革命.',
   collo:['进行根本性的革命','一场技术革命','产业革命','革命性的变化'],
   ex_zh:'实体商店若想存在，必须进行根本性的革命，而不是改良。',ex_py:'Shítǐ shāngdiàn ruò xiǎng cúnzài, bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì gǎiliáng.',ex_vn:'Cửa hàng truyền thống nếu muốn tồn tại thì phải tiến hành một cuộc cách mạng tận gốc, chứ không phải chỉ cải tiến.',
   exList:[
     {zh:'实体商店若想存在，必须进行根本性的革命，而不是改良。',py:'Shítǐ shāngdiàn ruò xiǎng cúnzài, bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì gǎiliáng.',vn:'Cửa hàng truyền thống nếu muốn tồn tại thì phải cách mạng tận gốc, chứ không phải cải tiến.'},
     {zh:'智能手机的出现，给人们的生活带来了一场革命。',py:'Zhìnéng shǒujī de chūxiàn, gěi rénmen de shēnghuó dàilái le yì chǎng gémìng.',vn:'Sự xuất hiện của điện thoại thông minh đã mang lại một cuộc cách mạng cho đời sống con người.'},
     {zh:'这项新技术让农业生产发生了革命性的变化。',py:'Zhè xiàng xīn jìshù ràng nóngyè shēngchǎn fāshēngle gémìngxìng de biànhuà.',vn:'Kỹ thuật mới này khiến sản xuất nông nghiệp có sự thay đổi mang tính cách mạng.'}
   ],
   colloFull:[
     {zh:'进行根本性的革命',py:'jìnxíng gēnběnxìng de gémìng',vn:'tiến hành cuộc cách mạng tận gốc'},
     {zh:'一场技术革命',py:'yì chǎng jìshù gémìng',vn:'một cuộc cách mạng kỹ thuật'},
     {zh:'产业革命',py:'chǎnyè gémìng',vn:'cách mạng công nghiệp'},
     {zh:'革命性的变化',py:'gémìngxìng de biànhuà',vn:'sự thay đổi mang tính cách mạng'},
     {zh:'带来一场革命',py:'dàilái yì chǎng gémìng',vn:'mang lại một cuộc cách mạng'}
   ],
   patterns:[
     {s:'进行 + (根本性的) + 革命',m:'Tiến hành cuộc cách mạng (tận gốc)'},
     {s:'给……带来了一场革命',m:'Mang lại một cuộc cách mạng cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Internet không chỉ thay đổi cách chúng ta học tập, mà còn mang lại một cuộc cách mạng cho cách mua sắm.',answer:'互联网不仅改变了我们学习的方式，而且给购物方式带来了一场革命。',answerPy:'Hùliánwǎng bùjǐn gǎibiànle wǒmen xuéxí de fāngshì, érqiě gěi gòuwù fāngshì dàiláile yì chǎng gémìng.',
      note:'不仅……而且…… tăng tiến (ôn HSK 4); 给……带来…….',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Nếu công ty không tiến hành cải cách triệt để thì rất khó tồn tại tiếp.',answer:'如果公司不进行根本性的革命，就很难继续生存下去。',answerPy:'Rúguǒ gōngsī bú jìnxíng gēnběnxìng de gémìng, jiù hěn nán jìxù shēngcún xiàqù.',
      note:'如果……就…… giả thiết; V + 下去 tiếp tục (ôn HSK 4); 生存 ôn HSK 6 bài 13.',pair:'V下去'}
   ]},

  {n:9,zh:'改良',py:'gǎiliáng',pos:'Động từ',vn:'cải tiến, cải thiện, sửa đổi cho tốt hơn',hv:'cải lương',em:'🔧',lesson:1,
   explain:['Sửa bỏ một phần khuyết điểm để sự vật tốt hơn, nhưng KHÔNG thay đổi bản chất: 改良品种, 改良土壤, 改良工具. Đối lập với 革命 (thay đổi tận gốc).','Chú ý: tiếng Việt "cải lương" còn là tên một loại hình sân khấu — không liên quan. Nghĩa trong tiếng Trung chỉ là "cải tiến".'],
   usage:'改良 + 品种 / 土壤 / 工具 / 技术 / 设计; 经过改良; 改良后的 + N; ……而不是改良 (bài khoá).',
   collo:['改良品种','改良土壤','经过改良','改良后的产品'],
   ex_zh:'必须进行根本性的革命，而不是改良。',ex_py:'Bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì gǎiliáng.',ex_vn:'Phải tiến hành cuộc cách mạng tận gốc, chứ không phải là cải tiến.',
   exList:[
     {zh:'实体商店若想存在，必须进行根本性的革命，而不是改良。',py:'Shítǐ shāngdiàn ruò xiǎng cúnzài, bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì gǎiliáng.',vn:'Cửa hàng truyền thống nếu muốn tồn tại thì phải cách mạng tận gốc, chứ không phải cải tiến.'},
     {zh:'经过科学家多年的改良，这种水稻的产量提高了一倍。',py:'Jīngguò kēxuéjiā duō nián de gǎiliáng, zhè zhǒng shuǐdào de chǎnliàng tígāole yí bèi.',vn:'Qua nhiều năm cải tiến của các nhà khoa học, sản lượng của giống lúa này đã tăng gấp đôi.'},
     {zh:'改良后的旗袍既保留了传统的美，又更方便日常穿着。',py:'Gǎiliáng hòu de qípáo jì bǎoliúle chuántǒng de měi, yòu gèng fāngbiàn rìcháng chuānzhuó.',vn:'Chiếc sườn xám sau khi cải tiến vừa giữ được nét đẹp truyền thống, vừa tiện mặc hằng ngày hơn.'}
   ],
   colloFull:[
     {zh:'改良品种',py:'gǎiliáng pǐnzhǒng',vn:'cải tạo giống'},
     {zh:'改良土壤',py:'gǎiliáng tǔrǎng',vn:'cải tạo đất'},
     {zh:'经过改良',py:'jīngguò gǎiliáng',vn:'qua cải tiến'},
     {zh:'改良后的产品',py:'gǎiliáng hòu de chǎnpǐn',vn:'sản phẩm sau khi cải tiến'},
     {zh:'改良工具',py:'gǎiliáng gōngjù',vn:'cải tiến công cụ'}
   ],
   patterns:[
     {s:'改良 + 品种 / 工具 / 技术',m:'Cải tiến giống / công cụ / kỹ thuật'},
     {s:'是革命，而不是改良',m:'Là thay đổi tận gốc, không phải sửa một phần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua mấy lần cải tiến, chiếc máy này không những nhẹ hơn mà còn rẻ hơn.',answer:'经过几次改良，这台机器不但更轻了，而且更便宜了。',answerPy:'Jīngguò jǐ cì gǎiliáng, zhè tái jīqì búdàn gèng qīng le, érqiě gèng piányi le.',
      note:'经过 + quá trình; 不但……而且…… (ôn HSK 4).',pair:'经过'},
     {promptLang:'vi',prompt:'Cái chúng ta cần là thay đổi tận gốc, chứ không phải sửa chữa đôi chút.',answer:'我们需要的是根本性的改变，而不是一点点改良。',answerPy:'Wǒmen xūyào de shì gēnběnxìng de gǎibiàn, ér bú shì yìdiǎndiǎn gǎiliáng.',
      note:'是……，而不是…… khẳng định A phủ định B (ôn HSK 5).',pair:'是……而不是……'}
   ]},

  {n:10,zh:'欣欣向荣',py:'xīnxīn-xiàngróng',pos:'Thành ngữ',vn:'thịnh vượng, phát đạt, phồn vinh',hv:'hân hân hướng vinh',em:'🌸',lesson:1,
   explain:['Nghĩa đen: cây cỏ xanh tốt tươi, vươn lên (欣欣 = tươi tốt, 荣 = nở rộ). Nghĩa dùng: sự nghiệp, kinh tế, đất nước… phát triển mạnh, hưng thịnh.','Làm vị ngữ (经济欣欣向荣), định ngữ (欣欣向荣的景象) hoặc danh từ hoá như bài khoá: 实体店昔日的欣欣向荣 = sự phồn thịnh ngày xưa của cửa hàng truyền thống.'],
   usage:'(经济 / 市场 / 城市 / 事业) + 欣欣向荣; 一片欣欣向荣的景象; 昔日的欣欣向荣.',
   collo:['欣欣向荣的景象','经济欣欣向荣','昔日的欣欣向荣','一片欣欣向荣'],
   ex_zh:'否则实体店昔日的欣欣向荣终将一去不复还。',ex_py:'Fǒuzé shítǐdiàn xīrì de xīnxīn-xiàngróng zhōng jiāng yí qù bú fù huán.',ex_vn:'Nếu không, sự phồn thịnh ngày xưa của cửa hàng truyền thống cuối cùng sẽ một đi không trở lại.',
   exList:[
     {zh:'实体商店若不进行革命，昔日的欣欣向荣终将一去不复还。',py:'Shítǐ shāngdiàn ruò bú jìnxíng gémìng, xīrì de xīnxīn-xiàngróng zhōng jiāng yí qù bú fù huán.',vn:'Cửa hàng truyền thống nếu không cách mạng thì sự phồn thịnh ngày xưa cuối cùng sẽ một đi không trở lại.'},
     {zh:'改革开放以后，这个小渔村变成了一座欣欣向荣的城市。',py:'Gǎigé kāifàng yǐhòu, zhège xiǎo yúcūn biànchéngle yí zuò xīnxīn-xiàngróng de chéngshì.',vn:'Sau cải cách mở cửa, làng chài nhỏ này đã trở thành một thành phố phồn vinh.'},
     {zh:'春天来了，公园里到处都是一片欣欣向荣的景象。',py:'Chūntiān lái le, gōngyuán li dàochù dōu shì yí piàn xīnxīn-xiàngróng de jǐngxiàng.',vn:'Mùa xuân đến, khắp công viên là một cảnh tượng tươi tốt, tràn đầy sức sống.'}
   ],
   colloFull:[
     {zh:'欣欣向荣的景象',py:'xīnxīn-xiàngróng de jǐngxiàng',vn:'cảnh tượng phồn vinh / tươi tốt'},
     {zh:'经济欣欣向荣',py:'jīngjì xīnxīn-xiàngróng',vn:'kinh tế phồn thịnh'},
     {zh:'昔日的欣欣向荣',py:'xīrì de xīnxīn-xiàngróng',vn:'sự phồn thịnh ngày xưa'},
     {zh:'一片欣欣向荣',py:'yí piàn xīnxīn-xiàngróng',vn:'một vùng phồn vinh, tươi tốt'},
     {zh:'欣欣向荣的城市',py:'xīnxīn-xiàngróng de chéngshì',vn:'thành phố phồn vinh'}
   ],
   patterns:[
     {s:'N (经济 / 事业 / 城市) + 欣欣向荣',m:'… phát triển thịnh vượng'},
     {s:'一片欣欣向荣的景象',m:'Một cảnh tượng phồn vinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ phát triển du lịch, thị trấn nhỏ vốn nghèo khó này ngày càng phồn thịnh.',answer:'由于发展了旅游业，这个原本贫穷的小镇变得越来越欣欣向荣。',answerPy:'Yóuyú fāzhǎnle lǚyóuyè, zhège yuánběn pínqióng de xiǎozhèn biàn de yuè lái yuè xīnxīn-xiàngróng.',
      note:'由于…… nêu nguyên nhân; 变得 + 越来越 + Adj (ôn HSK 4).',pair:'越来越'},
     {promptLang:'vi',prompt:'Con phố này trước kia rất phồn thịnh, nhưng giờ thì vắng tanh.',answer:'这条街以前一片欣欣向荣，可是现在冷冷清清的。',answerPy:'Zhè tiáo jiē yǐqián yí piàn xīnxīn-xiàngróng, kěshì xiànzài lěnglěngqīngqīng de.',
      note:'Đối lập 以前……，可是现在……; láy AABB 冷冷清清 (ôn HSK 5).',pair:'AABB 重叠'}
   ]},

  {n:11,zh:'仓库',py:'cāngkù',pos:'Danh từ',vn:'kho, nhà kho',hv:'thương khố',em:'🏭',lesson:1,
   explain:['Nhà, phòng dùng để chứa hàng hoá, vật tư: 仓库管理, 货物仓库, 粮食仓库. 仓 và 库 đều là "kho".','Nghĩa mở rộng: kho dữ liệu, kho kiến thức (知识的仓库). Lượng từ: 个, 座, 间.'],
   usage:'仓库 + 货物 / 管理; 把……放进 / 存入仓库; 从仓库里 + V (取 / 运出).',
   collo:['仓库货物储备管理','仓库管理','存入仓库','一座大仓库'],
   ex_zh:'那里的仓库货物储备管理，全部实现电子化。',ex_py:'Nàli de cāngkù huòwù chǔbèi guǎnlǐ, quánbù shíxiàn diànzǐhuà.',ex_vn:'Việc quản lý dự trữ hàng hoá trong kho ở đó được điện tử hoá toàn bộ.',
   exList:[
     {zh:'那里的仓库货物储备管理、销售结算等，全部实现电子化。',py:'Nàli de cāngkù huòwù chǔbèi guǎnlǐ, xiāoshòu jiésuàn děng, quánbù shíxiàn diànzǐhuà.',vn:'Ở đó, việc quản lý dự trữ hàng trong kho, thanh toán bán hàng… đều được điện tử hoá toàn bộ.'},
     {zh:'双十一前，网店的仓库里堆满了等着发出的包裹。',py:'Shuāng Shíyī qián, wǎngdiàn de cāngkù li duīmǎnle děngzhe fāchū de bāoguǒ.',vn:'Trước ngày 11/11, kho của cửa hàng online chất đầy những bưu kiện đang chờ gửi đi.'},
     {zh:'书是知识的仓库，读书越多，懂得的道理就越多。',py:'Shū shì zhīshi de cāngkù, dú shū yuè duō, dǒngde de dàoli jiù yuè duō.',vn:'Sách là kho tri thức, đọc càng nhiều thì hiểu càng nhiều lẽ phải.'}
   ],
   colloFull:[
     {zh:'仓库货物储备管理',py:'cāngkù huòwù chǔbèi guǎnlǐ',vn:'quản lý dự trữ hàng hoá trong kho'},
     {zh:'仓库管理',py:'cāngkù guǎnlǐ',vn:'quản lý kho'},
     {zh:'存入仓库',py:'cúnrù cāngkù',vn:'nhập kho'},
     {zh:'一座大仓库',py:'yí zuò dà cāngkù',vn:'một nhà kho lớn'},
     {zh:'知识的仓库',py:'zhīshi de cāngkù',vn:'kho tri thức'}
   ],
   patterns:[
     {s:'把 + hàng + 存入 / 运进 + 仓库',m:'Đưa hàng vào kho'},
     {s:'仓库里 + 堆满了 / 放着 + N',m:'Trong kho chất đầy / để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công nhân đã chuyển hết số hàng này vào kho rồi.',answer:'工人们已经把这批货物都运进仓库了。',answerPy:'Gōngrénmen yǐjīng bǎ zhè pī huòwù dōu yùnjìn cāngkù le.',
      note:'Câu 把 + bổ ngữ xu hướng 进 + nơi chốn (ôn HSK 4); lượng từ 批 = lô.',pair:'把字句'},
     {promptLang:'vi',prompt:'Kho lớn thế này, nếu không có máy tính quản lý thì tìm một món hàng cũng khó.',answer:'这么大的仓库，要是没有电脑管理，找一件货都很难。',answerPy:'Zhème dà de cāngkù, yàoshi méiyǒu diànnǎo guǎnlǐ, zhǎo yí jiàn huò dōu hěn nán.',
      note:'要是……(就)…… giả thiết khẩu ngữ; 连 / 都 nhấn mạnh (一件……都很难).',pair:'要是'}
   ]},

  {n:12,zh:'储备',py:'chǔbèi',pos:'Động từ / Danh từ',vn:'dự trữ, trữ sẵn; lượng dự trữ',hv:'trữ bị',em:'📦',lesson:1,
   explain:['Động từ: cất giữ vật tư, tiền, lương thực… để dùng khi cần: 储备粮食, 储备物资. Danh từ: lượng / nguồn dự trữ — 外汇储备, 人才储备.','Gần 储存 (ôn HSK 6 bài 11) nhưng 储备 nhấn MỤC ĐÍCH "để sẵn phòng khi cần", còn 储存 chỉ việc cất giữ.'],
   usage:'储备 + 粮食 / 物资 / 资金 / 人才 / 知识; 货物储备管理 (bài khoá); 有 / 缺少 + 储备.',
   collo:['货物储备管理','储备粮食','人才储备','储备知识'],
   ex_zh:'那里的仓库货物储备管理，全部实现电子化。',ex_py:'Nàli de cāngkù huòwù chǔbèi guǎnlǐ, quánbù shíxiàn diànzǐhuà.',ex_vn:'Ở đó, việc quản lý dự trữ hàng hoá trong kho đều được điện tử hoá toàn bộ.',
   exList:[
     {zh:'那里的仓库货物储备管理，全部实现电子化。',py:'Nàli de cāngkù huòwù chǔbèi guǎnlǐ, quánbù shíxiàn diànzǐhuà.',vn:'Ở đó, việc quản lý dự trữ hàng hoá trong kho đều được điện tử hoá toàn bộ.'},
     {zh:'为了应对台风，很多家庭提前储备了食物和饮用水。',py:'Wèile yìngduì táifēng, hěn duō jiātíng tíqián chǔbèile shíwù hé yǐnyòngshuǐ.',vn:'Để đối phó với bão, nhiều gia đình đã dự trữ sẵn thức ăn và nước uống từ trước.'},
     {zh:'大学四年是储备知识的好时候，千万别浪费了。',py:'Dàxué sì nián shì chǔbèi zhīshi de hǎo shíhou, qiānwàn bié làngfèi le.',vn:'Bốn năm đại học là thời điểm tốt để tích luỹ kiến thức, nhất định đừng lãng phí.'}
   ],
   colloFull:[
     {zh:'货物储备管理',py:'huòwù chǔbèi guǎnlǐ',vn:'quản lý dự trữ hàng hoá'},
     {zh:'储备粮食',py:'chǔbèi liángshi',vn:'dự trữ lương thực'},
     {zh:'人才储备',py:'réncái chǔbèi',vn:'nguồn nhân tài dự bị'},
     {zh:'储备知识',py:'chǔbèi zhīshi',vn:'tích luỹ kiến thức'},
     {zh:'提前储备',py:'tíqián chǔbèi',vn:'dự trữ trước'}
   ],
   patterns:[
     {s:'(提前) 储备 + 物资 / 粮食 / 知识',m:'Dự trữ … (trước)'},
     {s:'N + 储备 (人才储备 / 外汇储备)',m:'Nguồn dự trữ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhân lúc còn trẻ hãy tích luỹ nhiều kiến thức, đợi đến lúc cần dùng thì đã muộn.',answer:'趁年轻多储备一些知识，等到要用的时候就晚了。',answerPy:'Chèn niánqīng duō chǔbèi yìxiē zhīshi, děngdào yào yòng de shíhou jiù wǎn le.',
      note:'趁 + thời cơ = nhân lúc (ôn HSK 5); 等到……的时候就…….',pair:'趁'},
     {promptLang:'vi',prompt:'Mùa đông sắp đến, người dân ở đây đều bắt đầu trữ củi.',answer:'冬天快到了，这里的人们都开始储备木柴了。',answerPy:'Dōngtiān kuài dào le, zhèli de rénmen dōu kāishǐ chǔbèi mùchái le.',
      note:'快……了 sắp …; 开始 + V + 了 (ôn HSK 3–4).',pair:'快……了'}
   ]},

  {n:13,zh:'结算',py:'jiésuàn',pos:'Động từ',vn:'kết toán, thanh toán (tính tổng tiền, trả tiền)',hv:'kết toán',em:'🧾',lesson:1,
   explain:['Tính toán và thanh toán toàn bộ khoản tiền giao dịch: 销售结算, 结算工资, 结算中心. Văn phong thương mại, ngân hàng.','Gần 结账 (tính tiền, trả tiền khi mua / ăn — khẩu ngữ) nhưng 结算 trang trọng hơn, dùng cho doanh nghiệp, hệ thống: 按月结算, 用美元结算.'],
   usage:'销售 / 工资 / 费用 + 结算; 按月 / 按天 + 结算; 用 + tiền tệ + 结算; 结算方式.',
   collo:['销售结算','结算工资','按月结算','结算方式'],
   ex_zh:'那里的仓库货物储备管理、销售结算、客户关系管理等，全部实现电子化。',ex_py:'Nàli de cāngkù huòwù chǔbèi guǎnlǐ, xiāoshòu jiésuàn, kèhù guānxi guǎnlǐ děng, quánbù shíxiàn diànzǐhuà.',ex_vn:'Ở đó việc quản lý dự trữ hàng trong kho, thanh toán bán hàng, quản lý quan hệ khách hàng… đều được điện tử hoá toàn bộ.',
   exList:[
     {zh:'那里的销售结算、客户关系管理等，全部实现电子化。',py:'Nàli de xiāoshòu jiésuàn, kèhù guānxi guǎnlǐ děng, quánbù shíxiàn diànzǐhuà.',vn:'Ở đó việc thanh toán bán hàng, quản lý quan hệ khách hàng… đều được điện tử hoá.'},
     {zh:'我们公司的工资是按月结算的，每个月十号发。',py:'Wǒmen gōngsī de gōngzī shì àn yuè jiésuàn de, měi ge yuè shí hào fā.',vn:'Lương ở công ty chúng tôi được thanh toán theo tháng, mùng 10 hằng tháng thì trả.'},
     {zh:'这笔生意用人民币结算，还是用美元结算？',py:'Zhè bǐ shēngyi yòng rénmínbì jiésuàn, háishi yòng měiyuán jiésuàn?',vn:'Thương vụ này thanh toán bằng nhân dân tệ hay bằng đô la Mỹ?'}
   ],
   colloFull:[
     {zh:'销售结算',py:'xiāoshòu jiésuàn',vn:'thanh toán bán hàng'},
     {zh:'结算工资',py:'jiésuàn gōngzī',vn:'thanh toán tiền lương'},
     {zh:'按月结算',py:'àn yuè jiésuàn',vn:'thanh toán theo tháng'},
     {zh:'结算方式',py:'jiésuàn fāngshì',vn:'phương thức thanh toán'},
     {zh:'用美元结算',py:'yòng měiyuán jiésuàn',vn:'thanh toán bằng đô la Mỹ'}
   ],
   patterns:[
     {s:'按 + 天 / 月 / 年 + 结算',m:'Thanh toán theo ngày / tháng / năm'},
     {s:'用 + tiền tệ + 结算',m:'Thanh toán bằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm thêm ở quán này thì lương được tính theo ngày, làm xong là nhận tiền ngay.',answer:'在这家店打工，工资是按天结算的，干完就能拿到钱。',answerPy:'Zài zhè jiā diàn dǎgōng, gōngzī shì àn tiān jiésuàn de, gànwán jiù néng nádào qián.',
      note:'是……的 nhấn mạnh cách thức (ôn HSK 3–4); V完就…….',pair:'是……的'},
     {promptLang:'vi',prompt:'Hệ thống thanh toán đột nhiên gặp sự cố, khách hàng chỉ đành xếp hàng chờ.',answer:'结算系统突然出了故障，顾客们只好排队等着。',answerPy:'Jiésuàn xìtǒng tūrán chūle gùzhàng, gùkèmen zhǐhǎo páiduì děngzhe.',
      note:'只好 + V = đành phải (ôn HSK 4); 出故障 = gặp sự cố.',pair:'只好'}
   ]},

  {n:14,zh:'模式',py:'móshì',pos:'Danh từ',vn:'mô hình, kiểu, mẫu (cách thức vận hành chuẩn)',hv:'mô thức',em:'🧩',lesson:1,
   explain:['Kiểu mẫu, phương thức chuẩn mà người ta có thể làm theo: 商业模式 (mô hình kinh doanh), 教学模式, 管理模式. Bài khoá: 一种全新的商业模式.','Trong thiết bị: chế độ — 开机模式, 飞行模式 (chế độ máy bay), 静音模式. Chú ý 模 đọc mó (không đọc mú như 模样).'],
   usage:'商业 / 管理 / 教学 / 发展 + 模式; 一种全新的模式; 改变 / 采用 / 探索 + 模式; 手机的 + 飞行 / 静音 + 模式.',
   collo:['全新的商业模式','管理模式','开机模式','飞行模式'],
   ex_zh:'未来商店实行的将是一种全新的商业模式。',ex_py:'Wèilái shāngdiàn shíxíng de jiāng shì yì zhǒng quánxīn de shāngyè móshì.',ex_vn:'Cái mà cửa hàng tương lai áp dụng sẽ là một mô hình kinh doanh hoàn toàn mới.',
   exList:[
     {zh:'未来商店实行的将是一种全新的商业模式。',py:'Wèilái shāngdiàn shíxíng de jiāng shì yì zhǒng quánxīn de shāngyè móshì.',vn:'Cửa hàng tương lai sẽ áp dụng một mô hình kinh doanh hoàn toàn mới.'},
     {zh:'这台电脑有多种开机模式可供选择，用起来很方便。',py:'Zhè tái diànnǎo yǒu duō zhǒng kāijī móshì kě gōng xuǎnzé, yòng qǐlái hěn fāngbiàn.',vn:'Chiếc máy tính này có nhiều chế độ khởi động để lựa chọn, dùng rất tiện.'},
     {zh:'上飞机以后，请把手机调成飞行模式。',py:'Shàng fēijī yǐhòu, qǐng bǎ shǒujī tiáochéng fēixíng móshì.',vn:'Sau khi lên máy bay, xin hãy chuyển điện thoại sang chế độ máy bay.'}
   ],
   colloFull:[
     {zh:'全新的商业模式',py:'quánxīn de shāngyè móshì',vn:'mô hình kinh doanh hoàn toàn mới'},
     {zh:'管理模式',py:'guǎnlǐ móshì',vn:'mô hình quản lý'},
     {zh:'开机模式',py:'kāijī móshì',vn:'chế độ khởi động'},
     {zh:'飞行模式',py:'fēixíng móshì',vn:'chế độ máy bay'},
     {zh:'教学模式',py:'jiàoxué móshì',vn:'mô hình giảng dạy'}
   ],
   patterns:[
     {s:'N (商业 / 管理 / 教学) + 模式',m:'Mô hình …'},
     {s:'把手机调成 + 静音 / 飞行 + 模式',m:'Chuyển điện thoại sang chế độ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mô hình giảng dạy mới này không chỉ để học sinh chủ động hơn, mà còn khiến lớp học sinh động hơn.',answer:'这种新的教学模式不仅让学生更主动，还让课堂更生动。',answerPy:'Zhè zhǒng xīn de jiàoxué móshì bùjǐn ràng xuésheng gèng zhǔdòng, hái ràng kètáng gèng shēngdòng.',
      note:'不仅……还…… tăng tiến; câu kiêm ngữ 让 + người + Adj (ôn HSK 4).',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Trong giờ học xin mọi người chuyển điện thoại sang chế độ im lặng.',answer:'上课的时候，请大家把手机调成静音模式。',answerPy:'Shàngkè de shíhou, qǐng dàjiā bǎ shǒujī tiáochéng jìngyīn móshì.',
      note:'Câu 把 + V成 (biến thành) (ôn HSK 4).',pair:'把……V成……'}
   ]},

  {n:15,zh:'把手',py:'bǎshou',pos:'Danh từ',vn:'tay cầm, quai xách, tay nắm',hv:'bả thủ',em:'🛒',lesson:1,
   explain:['Bộ phận để tay cầm, nắm trên đồ vật: 门把手 (tay nắm cửa), 购物车把手, 自行车把手 (ghi-đông). 把 = cầm, nắm.','Đọc bǎshou (手 thanh nhẹ). Phân biệt 把手 (danh từ) với 把手 + V trong câu 把 (把手洗干净 = rửa tay sạch — 把 là giới từ).'],
   usage:'门 / 购物车 / 自行车 / 抽屉 + 把手; 把手上 + 装有 / 挂着 + N; 握住 / 抓住 + 把手.',
   collo:['购物车把手','门把手','握住把手','把手上装有'],
   ex_zh:'未来商店的购物车把手上装有购物助手。',ex_py:'Wèilái shāngdiàn de gòuwùchē bǎshou shang zhuāng yǒu gòuwù zhùshǒu.',ex_vn:'Trên tay cầm xe đẩy của cửa hàng tương lai có gắn trợ lý mua sắm.',
   exList:[
     {zh:'未来商店的购物车把手上装有购物助手——一个可随意装卸的无线电脑工具。',py:'Wèilái shāngdiàn de gòuwùchē bǎshou shang zhuāng yǒu gòuwù zhùshǒu——yí ge kě suíyì zhuāngxiè de wúxiàn diànnǎo gōngjù.',vn:'Trên tay cầm xe đẩy của cửa hàng tương lai có gắn trợ lý mua sắm — một thiết bị máy tính không dây có thể lắp tháo tuỳ ý.'},
     {zh:'门把手坏了，怎么拧也打不开门。',py:'Mén bǎshou huài le, zěnme nǐng yě dǎ bu kāi mén.',vn:'Tay nắm cửa hỏng rồi, vặn thế nào cũng không mở được cửa.'},
     {zh:'公交车上人很多，请握紧把手，注意安全。',py:'Gōngjiāochē shang rén hěn duō, qǐng wòjǐn bǎshou, zhùyì ānquán.',vn:'Trên xe buýt đông người, xin hãy nắm chặt tay vịn, chú ý an toàn.'}
   ],
   colloFull:[
     {zh:'购物车把手',py:'gòuwùchē bǎshou',vn:'tay cầm xe đẩy mua hàng'},
     {zh:'门把手',py:'mén bǎshou',vn:'tay nắm cửa'},
     {zh:'握住把手',py:'wòzhù bǎshou',vn:'nắm lấy tay cầm'},
     {zh:'把手上装有',py:'bǎshou shang zhuāng yǒu',vn:'trên tay cầm có gắn'},
     {zh:'自行车把手',py:'zìxíngchē bǎshou',vn:'ghi-đông xe đạp'}
   ],
   patterns:[
     {s:'N (门 / 车) + 把手',m:'Tay nắm / tay cầm của …'},
     {s:'把手上 + 装有 / 挂着 + N',m:'Trên tay cầm có gắn / treo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù tay nắm cửa đã rất cũ, ông nội vẫn không nỡ thay.',answer:'虽然门把手已经很旧了，爷爷还是舍不得换。',answerPy:'Suīrán mén bǎshou yǐjīng hěn jiù le, yéye háishi shěbude huàn.',
      note:'舍不得 + V = không nỡ (ôn HSK 5); 虽然……还是…….',pair:'舍不得'},
     {promptLang:'vi',prompt:'Trên tay cầm xe đẩy treo đầy túi, đẩy lên nặng lắm.',answer:'购物车把手上挂满了袋子，推起来很重。',answerPy:'Gòuwùchē bǎshou shang guàmǎnle dàizi, tuī qǐlái hěn zhòng.',
      note:'Câu tồn hiện: nơi chốn + V满了 + N; V起来 + Adj = khi làm thấy … (ôn HSK 4).',pair:'V起来'}
   ]},

  {n:16,zh:'装卸',py:'zhuāngxiè',pos:'Động từ',vn:'bốc dỡ; lắp ráp, tháo lắp',hv:'trang tá',em:'🔩',lesson:1,
   explain:['Nghĩa 1: xếp hàng lên và dỡ hàng xuống (xe, tàu): 装卸货物, 装卸工. Nghĩa 2: lắp vào và tháo ra (thiết bị, bộ phận): 可随意装卸 = có thể lắp tháo tuỳ ý.','装 = lắp, chất lên; 卸 = tháo, dỡ xuống. Hai chữ trái nghĩa ghép lại chỉ cả quá trình.'],
   usage:'装卸 + 货物 / 零件; 可随意装卸; 装卸工 (công nhân bốc xếp); 装卸方便.',
   collo:['可随意装卸','装卸货物','装卸工','装卸方便'],
   ex_zh:'购物助手是一个可随意装卸的无线电脑工具。',ex_py:'Gòuwù zhùshǒu shì yí ge kě suíyì zhuāngxiè de wúxiàn diànnǎo gōngjù.',ex_vn:'Trợ lý mua sắm là một thiết bị máy tính không dây có thể lắp tháo tuỳ ý.',
   exList:[
     {zh:'购物助手是一个可随意装卸的无线电脑工具。',py:'Gòuwù zhùshǒu shì yí ge kě suíyì zhuāngxiè de wúxiàn diànnǎo gōngjù.',vn:'Trợ lý mua sắm là một thiết bị máy tính không dây có thể lắp tháo tuỳ ý.'},
     {zh:'码头上，工人们正在忙着装卸货物。',py:'Mǎtou shang, gōngrénmen zhèngzài mángzhe zhuāngxiè huòwù.',vn:'Trên bến cảng, công nhân đang tất bật bốc dỡ hàng hoá.'},
     {zh:'这种书架装卸方便，搬家的时候拆开就能带走。',py:'Zhè zhǒng shūjià zhuāngxiè fāngbiàn, bānjiā de shíhou chāikāi jiù néng dàizǒu.',vn:'Loại giá sách này lắp tháo tiện lợi, khi chuyển nhà tháo ra là mang đi được.'}
   ],
   colloFull:[
     {zh:'可随意装卸',py:'kě suíyì zhuāngxiè',vn:'có thể lắp tháo tuỳ ý'},
     {zh:'装卸货物',py:'zhuāngxiè huòwù',vn:'bốc dỡ hàng hoá'},
     {zh:'装卸工',py:'zhuāngxiègōng',vn:'công nhân bốc xếp'},
     {zh:'装卸方便',py:'zhuāngxiè fāngbiàn',vn:'lắp tháo tiện lợi'},
     {zh:'装卸零件',py:'zhuāngxiè língjiàn',vn:'lắp tháo linh kiện'}
   ],
   patterns:[
     {s:'装卸 + 货物 / 零件',m:'Bốc dỡ hàng / lắp tháo linh kiện'},
     {s:'可 (以) + 随意 / 方便地 + 装卸',m:'Có thể lắp tháo tuỳ ý / dễ dàng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hàng vừa đến cảng là công nhân liền bắt tay vào bốc dỡ.',answer:'货物一到码头，工人们就开始装卸了。',answerPy:'Huòwù yí dào mǎtou, gōngrénmen jiù kāishǐ zhuāngxiè le.',
      note:'一……就…… (ôn HSK 3–4); 码头 ôn HSK 6 bài 13.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Pin của máy ảnh này có thể lắp tháo tuỳ ý, rất tiện khi đi du lịch.',answer:'这台相机的电池可以随意装卸，旅行的时候很方便。',answerPy:'Zhè tái xiàngjī de diànchí kěyǐ suíyì zhuāngxiè, lǚxíng de shíhou hěn fāngbiàn.',
      note:'随意 + V = tuỳ ý (ôn HSK 5 随意); ……的时候.',pair:'随意'}
   ]},

  {n:17,zh:'屏幕',py:'píngmù',pos:'Danh từ',vn:'màn hình',hv:'bình mạc',em:'🖥️',lesson:1,
   explain:['Mặt phẳng hiển thị hình ảnh của điện thoại, máy tính, ti vi, rạp chiếu phim: 手机屏幕, 电脑屏幕, 大屏幕. Rút gọn: 屏 (触摸屏 = màn hình cảm ứng, 显示屏).','屏 = tấm che, 幕 = màn → "màn hình". Lượng từ: 块, 个.'],
   usage:'(手机 / 电脑) + 屏幕; 屏幕上 + 显示 / 出现 + N; 屏幕 + 大 / 碎了 / 亮了; 盯着屏幕.',
   collo:['小屏幕','屏幕上显示','手机屏幕','盯着屏幕'],
   ex_zh:'消费者想买哪种商品，小屏幕上就会显示商品所在的位置。',ex_py:'Xiāofèizhě xiǎng mǎi nǎ zhǒng shāngpǐn, xiǎo píngmù shang jiù huì xiǎnshì shāngpǐn suǒzài de wèizhi.',ex_vn:'Người tiêu dùng muốn mua loại hàng nào, trên màn hình nhỏ sẽ hiện vị trí của món hàng đó.',
   exList:[
     {zh:'消费者想买哪种商品，小屏幕上就会显示商品所在的位置。',py:'Xiāofèizhě xiǎng mǎi nǎ zhǒng shāngpǐn, xiǎo píngmù shang jiù huì xiǎnshì shāngpǐn suǒzài de wèizhi.',vn:'Người tiêu dùng muốn mua loại hàng nào, màn hình nhỏ sẽ hiện vị trí của hàng đó.'},
     {zh:'手机摔到地上，屏幕碎了，只好拿去修。',py:'Shǒujī shuāidào dì shang, píngmù suì le, zhǐhǎo náqù xiū.',vn:'Điện thoại rơi xuống đất, vỡ màn hình, đành mang đi sửa.'},
     {zh:'整天盯着电脑屏幕，眼睛很容易疲劳。',py:'Zhěngtiān dīngzhe diànnǎo píngmù, yǎnjing hěn róngyì píláo.',vn:'Cả ngày dán mắt vào màn hình máy tính, mắt rất dễ mỏi.'}
   ],
   colloFull:[
     {zh:'小屏幕',py:'xiǎo píngmù',vn:'màn hình nhỏ'},
     {zh:'屏幕上显示',py:'píngmù shang xiǎnshì',vn:'trên màn hình hiện ra'},
     {zh:'手机屏幕',py:'shǒujī píngmù',vn:'màn hình điện thoại'},
     {zh:'盯着屏幕',py:'dīngzhe píngmù',vn:'dán mắt vào màn hình'},
     {zh:'屏幕碎了',py:'píngmù suì le',vn:'vỡ màn hình'}
   ],
   patterns:[
     {s:'屏幕上 + 显示 / 出现 + N',m:'Trên màn hình hiện ra …'},
     {s:'盯着 + (电脑 / 手机) 屏幕',m:'Dán mắt vào màn hình'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Màn hình của chiếc máy tính này vừa to vừa nét, xem phim rất đã.',answer:'这台电脑的屏幕又大又清晰，看电影特别过瘾。',answerPy:'Zhè tái diànnǎo de píngmù yòu dà yòu qīngxī, kàn diànyǐng tèbié guòyǐn.',
      note:'又……又…… (ôn HSK 3); 清晰 ôn HSK 6 bài 10.',pair:'又……又……'},
     {promptLang:'vi',prompt:'Bạn cứ dán mắt vào màn hình mãi như thế, thị lực sớm muộn gì cũng giảm.',answer:'你老这样盯着屏幕，视力迟早会下降的。',answerPy:'Nǐ lǎo zhèyàng dīngzhe píngmù, shìlì chízǎo huì xiàjiàng de.',
      note:'迟早 = sớm muộn; 会……的 khẳng định khả năng (ôn HSK 5); 视力 ôn HSK 6 bài 17.',pair:'会……的'}
   ]},

  {n:18,zh:'相应',py:'xiāngyìng',pos:'Động từ',vn:'tương ứng, phù hợp với',hv:'tương ứng',em:'🔗',lesson:1,
   explain:['Phù hợp, ăn khớp với nhau; cái này thay đổi / có thì cái kia cũng thay đổi / có theo: 相应的货架 = kệ hàng tương ứng (đúng kệ của món hàng đó).','Hay làm định ngữ (相应的 + N) hoặc trạng ngữ (相应地 + V): 收入增加了，消费也相应地增加了. 应 đọc yìng (thanh 4).'],
   usage:'相应的 + 措施 / 位置 / 网站 / 变化; 相应地 + V; 与……相应 / 和……相应.',
   collo:['相应货架','相应的措施','相应的网站','相应地提高'],
   ex_zh:'当消费者走到相应货架时，仪器会发出提示音。',ex_py:'Dāng xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn.',ex_vn:'Khi người tiêu dùng đi tới kệ hàng tương ứng, thiết bị sẽ phát ra âm báo.',
   exList:[
     {zh:'当消费者走到相应货架时，仪器会发出提示音。',py:'Dāng xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn.',vn:'Khi người tiêu dùng đi tới kệ hàng tương ứng, thiết bị sẽ phát ra âm báo.'},
     {zh:'选民们只需登录相应的网站，根据指令投票即可。',py:'Xuǎnmínmen zhǐ xū dēnglù xiāngyìng de wǎngzhàn, gēnjù zhǐlìng tóupiào jí kě.',vn:'Cử tri chỉ cần đăng nhập trang web tương ứng, bỏ phiếu theo hướng dẫn là được.'},
     {zh:'物价上涨了，工资也应该相应地提高。',py:'Wùjià shàngzhǎng le, gōngzī yě yīnggāi xiāngyìng de tígāo.',vn:'Vật giá tăng lên thì tiền lương cũng nên tăng tương ứng.'}
   ],
   colloFull:[
     {zh:'相应货架',py:'xiāngyìng huòjià',vn:'kệ hàng tương ứng'},
     {zh:'相应的措施',py:'xiāngyìng de cuòshī',vn:'biện pháp tương ứng'},
     {zh:'相应的网站',py:'xiāngyìng de wǎngzhàn',vn:'trang web tương ứng'},
     {zh:'相应地提高',py:'xiāngyìng de tígāo',vn:'nâng lên tương ứng'},
     {zh:'与此相应',py:'yǔ cǐ xiāngyìng',vn:'tương ứng với điều đó'}
   ],
   patterns:[
     {s:'相应的 + N (措施 / 位置 / 变化)',m:'… tương ứng'},
     {s:'A 变了，B 也相应地 + V',m:'A thay đổi thì B cũng … theo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vấn đề đã xuất hiện thì phải kịp thời đưa ra biện pháp tương ứng.',answer:'既然问题已经出现了，就要及时采取相应的措施。',answerPy:'Jìrán wèntí yǐjīng chūxiàn le, jiù yào jíshí cǎiqǔ xiāngyìng de cuòshī.',
      note:'既然……就…… (ôn HSK 4–5); 采取措施 cụm cố định.',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Theo đà người dùng tăng lên, số nhân viên chăm sóc khách hàng cũng tăng tương ứng.',answer:'随着用户的增加，客服人员也相应地增加了。',answerPy:'Suízhe yònghù de zēngjiā, kèfú rényuán yě xiāngyìng de zēngjiā le.',
      note:'随着……，……也…… (ôn HSK 4–5); 用户 ôn HSK 6 bài 16.',pair:'随着'}
   ]},

  {n:19,zh:'仪器',py:'yíqì',pos:'Danh từ',vn:'máy móc, thiết bị (đo lường, kiểm tra)',hv:'nghi khí',em:'🔬',lesson:1,
   explain:['Thiết bị tương đối tinh vi dùng để đo, kiểm tra, quan sát, thí nghiệm: 医疗仪器, 实验仪器, 精密仪器. Lượng từ: 台, 件.','Trong bài khoá, 仪器 chỉ chiếc "trợ lý mua sắm" gắn trên xe đẩy. Khác 机器 (máy móc nói chung, làm ra sản phẩm, sức lao động).'],
   usage:'医疗 / 实验 / 精密 + 仪器; 仪器 + 发出 / 显示 / 检测; 操作 / 使用 + 仪器.',
   collo:['仪器发出提示音','医疗仪器','精密仪器','操作仪器'],
   ex_zh:'当消费者走到相应货架时，仪器会发出提示音。',ex_py:'Dāng xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn.',ex_vn:'Khi người tiêu dùng đi tới kệ hàng tương ứng, thiết bị sẽ phát ra âm báo.',
   exList:[
     {zh:'当消费者走到相应货架时，仪器会发出提示音，以免消费者错过商品。',py:'Dāng xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn, yǐmiǎn xiāofèizhě cuòguò shāngpǐn.',vn:'Khi người tiêu dùng đi tới kệ hàng tương ứng, thiết bị sẽ phát âm báo, để khỏi bỏ lỡ món hàng.'},
     {zh:'这家医院新买了一批先进的医疗仪器。',py:'Zhè jiā yīyuàn xīn mǎile yì pī xiānjìn de yīliáo yíqì.',vn:'Bệnh viện này mới mua một lô thiết bị y tế hiện đại.'},
     {zh:'实验室的仪器都很精密，没有老师的指导，不许随便操作。',py:'Shíyànshì de yíqì dōu hěn jīngmì, méiyǒu lǎoshī de zhǐdǎo, bù xǔ suíbiàn cāozuò.',vn:'Thiết bị trong phòng thí nghiệm đều rất tinh vi, không có thầy cô hướng dẫn thì không được tuỳ tiện thao tác.'}
   ],
   colloFull:[
     {zh:'仪器发出提示音',py:'yíqì fāchū tíshìyīn',vn:'thiết bị phát âm báo'},
     {zh:'医疗仪器',py:'yīliáo yíqì',vn:'thiết bị y tế'},
     {zh:'精密仪器',py:'jīngmì yíqì',vn:'thiết bị tinh vi / chính xác cao'},
     {zh:'操作仪器',py:'cāozuò yíqì',vn:'vận hành thiết bị'},
     {zh:'实验仪器',py:'shíyàn yíqì',vn:'dụng cụ thí nghiệm'}
   ],
   patterns:[
     {s:'医疗 / 实验 / 精密 + 仪器',m:'Thiết bị y tế / thí nghiệm / tinh vi'},
     {s:'仪器 + 显示 / 发出 + N',m:'Thiết bị hiển thị / phát ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thiết bị này đắt lắm, lúc dùng nhất định phải làm theo hướng dẫn.',answer:'这台仪器很贵，使用的时候一定要按照说明操作。',answerPy:'Zhè tái yíqì hěn guì, shǐyòng de shíhou yídìng yào ànzhào shuōmíng cāozuò.',
      note:'按照 + quy định / hướng dẫn + V (ôn HSK 4); 操作 ôn HSK 6 bài 11.',pair:'按照'},
     {promptLang:'vi',prompt:'Chỉ cần thiết bị phát hiện chỗ bất thường là nó sẽ lập tức báo động.',answer:'只要仪器发现异常，就会马上发出警报。',answerPy:'Zhǐyào yíqì fāxiàn yìcháng, jiù huì mǎshàng fāchū jǐngbào.',
      note:'只要……就…… điều kiện đủ; 异常 ôn HSK 6 bài 1.',pair:'只要……就……'}
   ]},

  {n:20,zh:'以免',py:'yǐmiǎn',pos:'Liên từ',vn:'để tránh, kẻo, để khỏi',hv:'dĩ miễn',em:'🛡️',lesson:1,
   explain:['Liên từ, biểu thị việc làm ở vế trước là để TRÁNH xảy ra một tình huống không mong muốn ở vế sau. Thường đứng ĐẦU phân câu sau. Văn viết (xem Ngữ pháp 1).','Gần 免得 (ôn HSK 6 bài 14 — khẩu ngữ hơn) và đối lập mục đích với 以便 (bài 16: để thuận tiện làm điều tốt). Sau 以免 là điều XẤU cần tránh.'],
   usage:'(việc cần làm)，以免 + (điều không mong muốn). Bài khoá: 仪器会发出提示音，以免消费者错过商品.',
   collo:['以免错过商品','以免发生事故','以免传染别人','以免耽误'],
   ex_zh:'仪器会发出提示音，以免消费者错过商品。',ex_py:'Yíqì huì fāchū tíshìyīn, yǐmiǎn xiāofèizhě cuòguò shāngpǐn.',ex_vn:'Thiết bị sẽ phát ra âm báo để người tiêu dùng khỏi bỏ lỡ món hàng.',
   exList:[
     {zh:'重要的是，要学会从失败中吸取教训，以免今后再发生类似的问题。',py:'Zhòngyào de shì, yào xuéhuì cóng shībài zhōng xīqǔ jiàoxùn, yǐmiǎn jīnhòu zài fāshēng lèisì de wèntí.',vn:'Điều quan trọng là phải học cách rút kinh nghiệm từ thất bại, để sau này khỏi xảy ra vấn đề tương tự.'},
     {zh:'感冒时应尽量少去公共场所，必须去的话，最好戴上口罩，以免传染别人。',py:'Gǎnmào shí yīng jǐnliàng shǎo qù gōnggòng chǎngsuǒ, bìxū qù dehuà, zuìhǎo dàishang kǒuzhào, yǐmiǎn chuánrǎn biérén.',vn:'Khi bị cảm nên hạn chế đến nơi công cộng, nếu buộc phải đi thì tốt nhất đeo khẩu trang, để tránh lây cho người khác.'},
     {zh:'他前一天晚上定好了闹钟，以免耽误第二天的考试。',py:'Tā qián yì tiān wǎnshang dìnghǎole nàozhōng, yǐmiǎn dānwu dì-èr tiān de kǎoshì.',vn:'Tối hôm trước cậu ấy đã đặt sẵn đồng hồ báo thức, để khỏi lỡ buổi thi hôm sau.'}
   ],
   colloFull:[
     {zh:'以免错过商品',py:'yǐmiǎn cuòguò shāngpǐn',vn:'để khỏi bỏ lỡ hàng'},
     {zh:'以免发生事故',py:'yǐmiǎn fāshēng shìgù',vn:'để tránh xảy ra tai nạn'},
     {zh:'以免传染别人',py:'yǐmiǎn chuánrǎn biérén',vn:'để tránh lây cho người khác'},
     {zh:'以免耽误',py:'yǐmiǎn dānwu',vn:'để khỏi lỡ việc'},
     {zh:'以免丢失',py:'yǐmiǎn diūshī',vn:'để tránh bị mất'}
   ],
   patterns:[
     {s:'A，以免 + B (điều không mong muốn)',m:'Làm A để tránh B'},
     {s:'最好 / 应该 + V，以免……',m:'Tốt nhất / nên … kẻo …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ra khỏi nhà nhớ khoá cửa, kẻo bị trộm.',answer:'出门记得锁好门，以免被偷。',answerPy:'Chūmén jìde suǒhǎo mén, yǐmiǎn bèi tōu.',
      note:'记得 + V = nhớ làm …; 以免 + bị động 被 (ôn HSK 4).',pair:'被'},
     {promptLang:'vi',prompt:'Chúng ta nên xuất phát sớm một chút để khỏi bị kẹt xe dọc đường.',answer:'我们应该早点儿出发，以免在路上堵车。',answerPy:'Wǒmen yīnggāi zǎo diǎnr chūfā, yǐmiǎn zài lù shang dǔchē.',
      note:'Adj + 点儿 + V (早点儿出发); 以免 đứng đầu vế sau.',pair:'Adj + 点儿 + V'}
   ]},

  {n:21,zh:'嫌',py:'xián',pos:'Động từ',vn:'chê, ghét, không thích (vì thấy … không vừa ý)',hv:'hiềm',em:'😒',lesson:1,
   explain:['Biểu thị KHÔNG THÍCH, KHÔNG HÀI LÒNG vì một đặc điểm nào đó: 嫌腥 = ngại mùi tanh, 嫌麻烦 = ngại phiền. Khuôn thường gặp: 嫌 + danh từ / tính từ / mệnh đề (xem Ngữ pháp 2).','Hay dùng dạng 嫌 + 人 + Adj (嫌他太吵), 从不嫌 / 不嫌 (không ngại). Khác 讨厌 (ghét nói chung): 嫌 luôn gắn với LÝ DO chê.'],
   usage:'嫌 + N / Adj / 小句: 嫌腥, 嫌贵, 嫌麻烦, 嫌衣服款式过时; 从不嫌 + Adj; 嫌 + 人 + Adj.',
   collo:['又嫌腥','嫌麻烦','嫌贵','从不嫌累'],
   ex_zh:'如果你想吃鲜鱼，又嫌腥，不愿自己加工，可以在触摸屏上留言。',ex_py:'Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, bú yuàn zìjǐ jiāgōng, kěyǐ zài chùmōpíng shang liúyán.',ex_vn:'Nếu bạn muốn ăn cá tươi mà lại ngại tanh, không muốn tự làm, thì có thể để lại lời nhắn trên màn hình cảm ứng.',
   exList:[
     {zh:'如果你想吃鲜鱼，又嫌腥，不愿自己加工，可以在触摸屏上留言。',py:'Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, bú yuàn zìjǐ jiāgōng, kěyǐ zài chùmōpíng shang liúyán.',vn:'Nếu bạn muốn ăn cá tươi mà lại ngại tanh, không muốn tự sơ chế, có thể để lại lời nhắn trên màn hình cảm ứng.'},
     {zh:'我从来没嫌你，也没嫌过孩子哭。',py:'Wǒ cónglái méi xián nǐ, yě méi xiánguo háizi kū.',vn:'Tôi chưa bao giờ chê anh, cũng chưa từng khó chịu vì con khóc.'},
     {zh:'大家都嫌这个旅行计划不够合理，几个最值得去的地方都不在计划之内。',py:'Dàjiā dōu xián zhège lǚxíng jìhuà bú gòu hélǐ, jǐ ge zuì zhíde qù de dìfang dōu bú zài jìhuà zhī nèi.',vn:'Mọi người đều chê kế hoạch du lịch này chưa hợp lý, mấy nơi đáng đi nhất đều không có trong kế hoạch.'}
   ],
   colloFull:[
     {zh:'又嫌腥',py:'yòu xián xīng',vn:'lại ngại tanh'},
     {zh:'嫌麻烦',py:'xián máfan',vn:'ngại phiền'},
     {zh:'嫌贵',py:'xián guì',vn:'chê đắt'},
     {zh:'从不嫌累',py:'cóng bù xián lèi',vn:'chưa bao giờ ngại mệt'},
     {zh:'嫌他太吵',py:'xián tā tài chǎo',vn:'chê anh ta ồn quá'}
   ],
   patterns:[
     {s:'嫌 + N / Adj / 小句',m:'Chê / ngại vì …'},
     {s:'从不 / 不 + 嫌 + Adj',m:'Không (bao giờ) ngại …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy chê căn phòng này quá nhỏ, nên cuối cùng không thuê.',answer:'她嫌这个房间太小，所以最后没租。',answerPy:'Tā xián zhège fángjiān tài xiǎo, suǒyǐ zuìhòu méi zū.',
      note:'嫌 + mệnh đề (这个房间太小) nêu lý do không hài lòng; 所以 kết quả.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Chỉ cần có thể giúp được mọi người, anh ấy chưa bao giờ ngại phiền.',answer:'只要能帮上大家的忙，他从来不嫌麻烦。',answerPy:'Zhǐyào néng bāngshang dàjiā de máng, tā cónglái bù xián máfan.',
      note:'帮……的忙 (li hợp từ, ôn HSK 4); 从来不 + V.',pair:'帮……的忙'}
   ]},

  {n:22,zh:'腥',py:'xīng',pos:'Tính từ',vn:'tanh',hv:'tinh',em:'🐟',lesson:1,
   explain:['Chỉ mùi tanh của cá, hải sản, thịt sống: 鱼很腥, 腥味儿. Bộ 月 (thịt) + 星.','Hay đi với 嫌腥 (ngại tanh), 去腥 (khử tanh — dùng gừng, rượu nấu ăn), 腥味儿. Không nhầm với 星 (xīng, ngôi sao) cùng âm.'],
   usage:'(鱼 / 虾) + 很腥; 嫌腥; 去腥; 一股腥味儿.',
   collo:['嫌腥','去腥','腥味儿','一股腥味'],
   ex_zh:'如果你想吃鲜鱼，又嫌腥，不愿自己加工……',ex_py:'Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, bú yuàn zìjǐ jiāgōng……',ex_vn:'Nếu bạn muốn ăn cá tươi, lại ngại tanh, không muốn tự sơ chế…',
   exList:[
     {zh:'如果你想吃鲜鱼，又嫌腥，不愿自己加工，可以请店员帮你清理。',py:'Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, bú yuàn zìjǐ jiāgōng, kěyǐ qǐng diànyuán bāng nǐ qīnglǐ.',vn:'Nếu bạn muốn ăn cá tươi mà ngại tanh, không muốn tự sơ chế, có thể nhờ nhân viên làm sạch giúp.'},
     {zh:'做鱼的时候放几片姜，可以去腥。',py:'Zuò yú de shíhou fàng jǐ piàn jiāng, kěyǐ qù xīng.',vn:'Khi nấu cá cho vài lát gừng thì có thể khử mùi tanh.'},
     {zh:'一走进海鲜市场，就闻到一股腥味儿。',py:'Yì zǒujìn hǎixiān shìchǎng, jiù wéndào yì gǔ xīngwèir.',vn:'Vừa bước vào chợ hải sản đã ngửi thấy một mùi tanh.'}
   ],
   colloFull:[
     {zh:'嫌腥',py:'xián xīng',vn:'ngại tanh'},
     {zh:'去腥',py:'qù xīng',vn:'khử mùi tanh'},
     {zh:'腥味儿',py:'xīngwèir',vn:'mùi tanh'},
     {zh:'一股腥味',py:'yì gǔ xīngwèi',vn:'một mùi tanh'},
     {zh:'鱼太腥了',py:'yú tài xīng le',vn:'cá tanh quá'}
   ],
   patterns:[
     {s:'N (鱼 / 虾) + 很 / 太 + 腥',m:'… rất / quá tanh'},
     {s:'放 + 姜 / 料酒 + 去腥',m:'Cho gừng / rượu nấu ăn để khử tanh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con cá này hơi tanh, cho thêm mấy lát gừng thì sẽ đỡ hơn nhiều.',answer:'这条鱼有点儿腥，多放几片姜就会好多了。',answerPy:'Zhè tiáo yú yǒudiǎnr xīng, duō fàng jǐ piàn jiāng jiù huì hǎo duō le.',
      note:'有点儿 + Adj (không hài lòng, ôn HSK 3); Adj + 多了 so sánh mức độ.',pair:'有点儿'},
     {promptLang:'vi',prompt:'Em gái tôi ngại tanh, nên chẳng bao giờ ăn hải sản.',answer:'我妹妹嫌腥，所以从来不吃海鲜。',answerPy:'Wǒ mèimei xián xīng, suǒyǐ cónglái bù chī hǎixiān.',
      note:'嫌 + Adj; 从来不 + V = chưa bao giờ (ôn HSK 4).',pair:'从来不'}
   ]},

  {n:23,zh:'清理',py:'qīnglǐ',pos:'Động từ',vn:'dọn dẹp, làm sạch, thanh lý (sắp xếp gọn và loại bỏ cái thừa)',hv:'thanh lý',em:'🧹',lesson:1,
   explain:['Dọn dẹp cho sạch sẽ, gọn gàng và bỏ đi những thứ không cần: 清理房间, 清理垃圾, 清理手机内存. Trong bài khoá: 把鱼清理好 = làm sạch cá (đánh vảy, bỏ ruột).','Còn nghĩa kiểm kê, xử lý dứt điểm: 清理账目, 清理旧货. Chú ý: "thanh lý" trong tiếng Việt thường là bán rẻ đồ cũ — tiếng Trung là 处理 / 甩卖; 清理 chủ yếu là DỌN DẸP.'],
   usage:'清理 + 房间 / 垃圾 / 桌面 / 内存 / 鱼; 把……清理干净 / 清理好; 清理一下.',
   collo:['把鱼清理好','清理垃圾','清理房间','清理干净'],
   ex_zh:'等店员把鱼清理好后，再去领取，不必排队等候。',ex_py:'Děng diànyuán bǎ yú qīnglǐ hǎo hòu, zài qù lǐngqǔ, búbì páiduì děnghòu.',ex_vn:'Đợi nhân viên làm sạch cá xong rồi hẵng đến lấy, không cần xếp hàng chờ.',
   exList:[
     {zh:'你可以在触摸屏上留言，等店员把鱼清理好后，再去领取。',py:'Nǐ kěyǐ zài chùmōpíng shang liúyán, děng diànyuán bǎ yú qīnglǐ hǎo hòu, zài qù lǐngqǔ.',vn:'Bạn có thể để lại lời nhắn trên màn hình cảm ứng, đợi nhân viên làm sạch cá xong rồi đến lấy.'},
     {zh:'手机内存不够了，得清理一下没用的照片。',py:'Shǒujī nèicún bú gòu le, děi qīnglǐ yíxià méi yòng de zhàopiàn.',vn:'Bộ nhớ điện thoại không đủ rồi, phải dọn bớt mấy tấm ảnh vô dụng.'},
     {zh:'活动结束后，志愿者们把广场上的垃圾清理得干干净净。',py:'Huódòng jiéshù hòu, zhìyuànzhěmen bǎ guǎngchǎng shang de lājī qīnglǐ de gāngānjìngjìng.',vn:'Sau khi hoạt động kết thúc, các tình nguyện viên đã dọn sạch sẽ rác trên quảng trường.'}
   ],
   colloFull:[
     {zh:'把鱼清理好',py:'bǎ yú qīnglǐ hǎo',vn:'làm sạch cá xong'},
     {zh:'清理垃圾',py:'qīnglǐ lājī',vn:'dọn rác'},
     {zh:'清理房间',py:'qīnglǐ fángjiān',vn:'dọn dẹp phòng'},
     {zh:'清理干净',py:'qīnglǐ gānjìng',vn:'dọn sạch'},
     {zh:'清理内存',py:'qīnglǐ nèicún',vn:'dọn bộ nhớ'}
   ],
   patterns:[
     {s:'把 + N + 清理 + 好 / 干净',m:'Dọn dẹp / làm sạch … xong'},
     {s:'清理一下 + N',m:'Dọn dẹp … một chút'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi chuyển nhà, chúng tôi đã dọn hết đồ cũ không dùng tới.',answer:'搬家以前，我们把用不着的旧东西都清理掉了。',answerPy:'Bānjiā yǐqián, wǒmen bǎ yòng bu zháo de jiù dōngxi dōu qīnglǐ diào le.',
      note:'V + 不着 bổ ngữ khả năng (用不着); V + 掉 = mất đi, bỏ đi (ôn HSK 4–5).',pair:'V掉'},
     {promptLang:'vi',prompt:'Chỉ khi dọn sạch bàn học thì tôi mới tập trung làm bài được.',answer:'只有把书桌清理干净了，我才能专心做作业。',answerPy:'Zhǐyǒu bǎ shūzhuō qīnglǐ gānjìng le, wǒ cái néng zhuānxīn zuò zuòyè.',
      note:'只有……才…… điều kiện duy nhất (ôn HSK 4); câu 把.',pair:'只有……才……'}
   ]},

  {n:24,zh:'等候',py:'děnghòu',pos:'Động từ',vn:'đợi, chờ (trang trọng)',hv:'đẳng hậu',em:'⏳',lesson:1,
   explain:['Chờ đợi (người, tin tức, lượt…) — sắc thái trang trọng hơn 等, hay dùng ở nơi công cộng: 请在此等候, 排队等候, 耐心等候.','Gần 等待 (văn viết, thường chờ một thời cơ / kết quả trừu tượng: 等待机会). 等候 thường chờ người, lượt cụ thể, thời gian ngắn.'],
   usage:'排队 / 耐心 / 在门口 + 等候; 等候 + 通知 / 消息 / 客人; 请在此等候.',
   collo:['排队等候','耐心等候','等候通知','请在此等候'],
   ex_zh:'等店员把鱼清理好后，再去领取，不必排队等候。',ex_py:'Děng diànyuán bǎ yú qīnglǐ hǎo hòu, zài qù lǐngqǔ, búbì páiduì děnghòu.',ex_vn:'Đợi nhân viên làm sạch cá xong rồi hẵng đến lấy, không cần xếp hàng chờ.',
   exList:[
     {zh:'等店员把鱼清理好后，再去领取，不必排队等候。',py:'Děng diànyuán bǎ yú qīnglǐ hǎo hòu, zài qù lǐngqǔ, búbì páiduì děnghòu.',vn:'Đợi nhân viên làm sạch cá xong rồi hẵng đến lấy, không cần xếp hàng chờ.'},
     {zh:'医生正在做手术，家属请在门外耐心等候。',py:'Yīshēng zhèngzài zuò shǒushù, jiāshǔ qǐng zài mén wài nàixīn děnghòu.',vn:'Bác sĩ đang phẫu thuật, người nhà xin vui lòng kiên nhẫn chờ ngoài cửa.'},
     {zh:'面试结束了，请大家回去等候通知。',py:'Miànshì jiéshù le, qǐng dàjiā huíqù děnghòu tōngzhī.',vn:'Buổi phỏng vấn đã kết thúc, mời mọi người về chờ thông báo.'}
   ],
   colloFull:[
     {zh:'排队等候',py:'páiduì děnghòu',vn:'xếp hàng chờ'},
     {zh:'耐心等候',py:'nàixīn děnghòu',vn:'kiên nhẫn chờ'},
     {zh:'等候通知',py:'děnghòu tōngzhī',vn:'chờ thông báo'},
     {zh:'请在此等候',py:'qǐng zài cǐ děnghòu',vn:'xin chờ ở đây'},
     {zh:'无需排队等候',py:'wú xū páiduì děnghòu',vn:'không cần xếp hàng chờ'}
   ],
   patterns:[
     {s:'排队 / 耐心 + 等候',m:'Xếp hàng / kiên nhẫn chờ'},
     {s:'等候 + 通知 / 消息 / 客人',m:'Chờ thông báo / tin tức / khách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu đặt trước trên mạng thì đến nơi không cần xếp hàng chờ nữa.',answer:'如果在网上提前预约，到了就不用再排队等候了。',answerPy:'Rúguǒ zài wǎngshàng tíqián yùyuē, dàole jiù búyòng zài páiduì děnghòu le.',
      note:'如果……就…… giả thiết; 不用再……了 = không cần … nữa.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Đã đợi cả tiếng đồng hồ rồi mà vẫn chưa đến lượt tôi.',answer:'已经等候了一个多小时了，还没轮到我。',answerPy:'Yǐjīng děnghòule yí ge duō xiǎoshí le, hái méi lúndào wǒ.',
      note:'V + 了 + thời lượng + 了 (việc vẫn đang tiếp diễn, ôn HSK 4); 轮到 = đến lượt.',pair:'V了……了'}
   ]},

  {n:25,zh:'性能',py:'xìngnéng',pos:'Danh từ',vn:'tính năng, chức năng (của máy móc, sản phẩm)',hv:'tính năng',em:'⚙️',lesson:1,
   explain:['Khả năng, đặc tính làm việc của máy móc, sản phẩm, vật liệu: 性能好, 性能稳定, 安全性能. Dùng khi đánh giá chất lượng kỹ thuật.','Tiếng Việt "tính năng" hay dùng như "chức năng" (功能). Trong tiếng Trung: 功能 = làm được VIỆC GÌ (chụp ảnh, định vị); 性能 = làm TỐT đến mức nào (nhanh, bền, ổn định).'],
   usage:'性能 + 好 / 稳定 / 可靠 / 优越; 安全 / 技术 + 性能; ……的性能 + 更适合……',
   collo:['性能很好','性能稳定','安全性能','性能更适合自己'],
   ex_zh:'如果想买手机，又不了解哪一款性能更适合自己，也无须烦恼。',ex_py:'Rúguǒ xiǎng mǎi shǒujī, yòu bù liǎojiě nǎ yì kuǎn xìngnéng gèng shìhé zìjǐ, yě wúxū fánnǎo.',ex_vn:'Nếu muốn mua điện thoại mà không biết mẫu nào có tính năng hợp với mình hơn thì cũng chẳng cần phiền não.',
   exList:[
     {zh:'如果想买手机，又不了解哪一款性能更适合自己，也无须烦恼。',py:'Rúguǒ xiǎng mǎi shǒujī, yòu bù liǎojiě nǎ yì kuǎn xìngnéng gèng shìhé zìjǐ, yě wúxū fánnǎo.',vn:'Nếu muốn mua điện thoại mà không rõ mẫu nào tính năng hợp với mình hơn thì cũng chẳng cần phiền não.'},
     {zh:'最近我买了一台性能很好的电脑，运算速度超级快。',py:'Zuìjìn wǒ mǎile yì tái xìngnéng hěn hǎo de diànnǎo, yùnsuàn sùdù chāojí kuài.',vn:'Gần đây tôi mua một chiếc máy tính có tính năng rất tốt, tốc độ xử lý siêu nhanh.'},
     {zh:'买车的时候，安全性能是最重要的，价格倒在其次。',py:'Mǎi chē de shíhou, ānquán xìngnéng shì zuì zhòngyào de, jiàgé dào zài qícì.',vn:'Khi mua xe, tính năng an toàn là quan trọng nhất, giá cả mới là thứ yếu.'}
   ],
   colloFull:[
     {zh:'性能很好',py:'xìngnéng hěn hǎo',vn:'tính năng rất tốt'},
     {zh:'性能稳定',py:'xìngnéng wěndìng',vn:'hoạt động ổn định'},
     {zh:'安全性能',py:'ānquán xìngnéng',vn:'tính năng an toàn'},
     {zh:'性能更适合自己',py:'xìngnéng gèng shìhé zìjǐ',vn:'tính năng hợp với mình hơn'},
     {zh:'性能优越',py:'xìngnéng yōuyuè',vn:'tính năng vượt trội'}
   ],
   patterns:[
     {s:'性能 + 好 / 稳定 / 可靠',m:'Tính năng tốt / ổn định / đáng tin cậy'},
     {s:'性能 + 很好的 + N',m:'… có tính năng rất tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc điện thoại này tuy giá không cao, nhưng tính năng không hề kém.',answer:'这款手机虽然价格不高，但性能一点儿也不差。',answerPy:'Zhè kuǎn shǒujī suīrán jiàgé bù gāo, dàn xìngnéng yìdiǎnr yě bú chà.',
      note:'一点儿也不 + Adj phủ định tuyệt đối (ôn HSK 4); lượng từ 款.',pair:'一点儿也不'},
     {promptLang:'vi',prompt:'Trước khi mua, tốt nhất nên so sánh tính năng của mấy mẫu máy.',answer:'买之前，最好比较一下几款机器的性能。',answerPy:'Mǎi zhīqián, zuìhǎo bǐjiào yíxià jǐ kuǎn jīqì de xìngnéng.',
      note:'……之前 = trước khi …; 最好 + V = tốt nhất nên (ôn HSK 4).',pair:'最好'}
   ]},

  {n:26,zh:'便利',py:'biànlì',pos:'Tính từ',vn:'tiện lợi, thuận tiện',hv:'tiện lợi',em:'🏪',lesson:1,
   explain:['Thuận tiện, dễ dùng, đỡ tốn công: 交通便利, 生活便利. Trang trọng hơn 方便 một chút; bài khoá liệt kê 轻松、快捷、便利.','Còn làm động từ "tạo thuận lợi cho": 便利群众. Từ ghép thường gặp: 便利店 (cửa hàng tiện lợi), 电子便利站 (trạm tiện ích điện tử, trong bài khoá).'],
   usage:'交通 / 生活 + 便利; 便利店; 电子便利站; 为……提供便利; 轻松、快捷、便利.',
   collo:['电子便利站','交通便利','便利店','提供便利'],
   ex_zh:'电子便利站会为你把关。',ex_py:'Diànzǐ biànlìzhàn huì wèi nǐ bǎ guān.',ex_vn:'Trạm tiện ích điện tử sẽ kiểm định giúp bạn.',
   exList:[
     {zh:'如果不知道哪一款手机更适合自己，电子便利站会为你把关。',py:'Rúguǒ bù zhīdào nǎ yì kuǎn shǒujī gèng shìhé zìjǐ, diànzǐ biànlìzhàn huì wèi nǐ bǎ guān.',vn:'Nếu không biết mẫu điện thoại nào hợp với mình hơn, trạm tiện ích điện tử sẽ tư vấn, kiểm định giúp bạn.'},
     {zh:'努力使整个购物过程轻松、快捷、便利，是未来商店每一项设计的宗旨。',py:'Nǔlì shǐ zhěnggè gòuwù guòchéng qīngsōng, kuàijié, biànlì, shì wèilái shāngdiàn měi yí xiàng shèjì de zōngzhǐ.',vn:'Cố gắng làm cho cả quá trình mua sắm nhẹ nhàng, nhanh gọn, tiện lợi là tôn chỉ của mọi thiết kế trong cửa hàng tương lai.'},
     {zh:'这个小区交通便利，楼下就有便利店，生活特别方便。',py:'Zhège xiǎoqū jiāotōng biànlì, lóu xià jiù yǒu biànlìdiàn, shēnghuó tèbié fāngbiàn.',vn:'Khu nhà này giao thông thuận tiện, ngay dưới tầng có cửa hàng tiện lợi, sinh hoạt rất tiện.'}
   ],
   colloFull:[
     {zh:'电子便利站',py:'diànzǐ biànlìzhàn',vn:'trạm tiện ích điện tử'},
     {zh:'交通便利',py:'jiāotōng biànlì',vn:'giao thông thuận tiện'},
     {zh:'便利店',py:'biànlìdiàn',vn:'cửa hàng tiện lợi'},
     {zh:'提供便利',py:'tígōng biànlì',vn:'tạo thuận lợi'},
     {zh:'轻松、快捷、便利',py:'qīngsōng, kuàijié, biànlì',vn:'nhẹ nhàng, nhanh gọn, tiện lợi'}
   ],
   patterns:[
     {s:'N (交通 / 生活) + 便利',m:'… thuận tiện'},
     {s:'为 + 人 + 提供便利',m:'Tạo thuận lợi cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính vì giao thông thuận tiện nên giá nhà ở đây mới đắt như vậy.',answer:'正是因为交通便利，这里的房价才这么贵。',answerPy:'Zhèng shì yīnwèi jiāotōng biànlì, zhèli de fángjià cái zhème guì.',
      note:'正是因为……才…… nhấn mạnh nguyên nhân (ôn HSK 5).',pair:'正是因为……才……'},
     {promptLang:'vi',prompt:'Thanh toán bằng điện thoại đã mang lại rất nhiều tiện lợi cho cuộc sống của chúng ta.',answer:'手机支付给我们的生活提供了很多便利。',answerPy:'Shǒujī zhīfù gěi wǒmen de shēnghuó tígōngle hěn duō biànlì.',
      note:'给……提供便利; 便利 dùng như danh từ (sự tiện lợi).',pair:'给……提供……'}
   ]},

  {n:27,zh:'把关',py:'bǎ guān',pos:'Động từ (li hợp)',vn:'kiểm định, kiểm soát, gác cửa (bảo đảm chất lượng)',hv:'bả quan',em:'✅',lesson:1,
   explain:['Nghĩa gốc: canh giữ cửa ải (把 = giữ, 关 = cửa ải). Nghĩa dùng: kiểm tra nghiêm ngặt, bảo đảm không có sai sót, chất lượng đạt chuẩn: 为你把关 = kiểm tra, chọn lựa giúp bạn.','Là động từ li hợp: 把好质量关 (giữ vững khâu chất lượng), 把一下关. Không mang tân ngữ trực tiếp: nói 为……把关 / 给……把关.'],
   usage:'为 / 给 + 人 / việc + 把关; 严格把关; 把好 + (质量) + 关.',
   collo:['为你把关','严格把关','把好质量关','帮我把把关'],
   ex_zh:'电子便利站会为你把关。',ex_py:'Diànzǐ biànlìzhàn huì wèi nǐ bǎ guān.',ex_vn:'Trạm tiện ích điện tử sẽ kiểm định giúp bạn.',
   exList:[
     {zh:'不了解哪一款性能更适合自己，也无须烦恼，电子便利站会为你把关。',py:'Bù liǎojiě nǎ yì kuǎn xìngnéng gèng shìhé zìjǐ, yě wúxū fánnǎo, diànzǐ biànlìzhàn huì wèi nǐ bǎ guān.',vn:'Không rõ mẫu nào tính năng hợp với mình hơn cũng chẳng cần phiền não, trạm tiện ích điện tử sẽ kiểm định giúp bạn.'},
     {zh:'食品安全关系到每个人的健康，必须严格把关。',py:'Shípǐn ānquán guānxi dào měi ge rén de jiànkāng, bìxū yángé bǎ guān.',vn:'An toàn thực phẩm liên quan đến sức khoẻ của mọi người, phải kiểm soát nghiêm ngặt.'},
     {zh:'这篇作文你帮我把把关吧，看看有没有错别字。',py:'Zhè piān zuòwén nǐ bāng wǒ bǎba guān ba, kànkan yǒu méiyǒu cuòbiézì.',vn:'Bài văn này cậu xem giúp mình một chút nhé, xem có lỗi chính tả không.'}
   ],
   colloFull:[
     {zh:'为你把关',py:'wèi nǐ bǎ guān',vn:'kiểm định giúp bạn'},
     {zh:'严格把关',py:'yángé bǎ guān',vn:'kiểm soát nghiêm ngặt'},
     {zh:'把好质量关',py:'bǎhǎo zhìliàng guān',vn:'giữ vững khâu chất lượng'},
     {zh:'帮我把把关',py:'bāng wǒ bǎba guān',vn:'xem giúp tôi một chút'},
     {zh:'层层把关',py:'céngcéng bǎ guān',vn:'kiểm tra qua nhiều khâu'}
   ],
   patterns:[
     {s:'为 / 给 / 帮 + 人 + 把关',m:'Kiểm tra, kiểm định giúp ai'},
     {s:'把好 + N + 关',m:'Giữ vững khâu …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có bố kiểm tra giúp, bản kế hoạch này chắc sẽ không có vấn đề gì lớn.',answer:'有爸爸帮你把关，这份计划应该不会有什么大问题。',answerPy:'Yǒu bàba bāng nǐ bǎ guān, zhè fèn jìhuà yīnggāi bú huì yǒu shénme dà wèntí.',
      note:'应该 = chắc là (phỏng đoán); 什么 phiếm chỉ trong câu phủ định (ôn HSK 4–5).',pair:'不会有什么……'},
     {promptLang:'vi',prompt:'Để đảm bảo chất lượng, mỗi sản phẩm đều phải qua kiểm tra nhiều khâu.',answer:'为了保证质量，每件产品都要经过层层把关。',answerPy:'Wèile bǎozhèng zhìliàng, měi jiàn chǎnpǐn dōu yào jīngguò céngcéng bǎ guān.',
      note:'为了…… mục đích; láy lượng từ 层层 = từng tầng (ôn HSK 6 bài 14 数量短语重叠).',pair:'为了'}
   ]},

  {n:28,zh:'人工',py:'réngōng',pos:'Danh từ / Tính từ',vn:'sức người, nhân công; nhân tạo',hv:'nhân công',em:'🙋',lesson:1,
   explain:['Danh từ: sức lao động của con người, trái với máy móc: 人工过秤 = người cân hàng bằng tay, 人工服务 (dịch vụ có người trực). Còn là tiền công / công lao động: 人工费.','Tính từ: do con người làm ra, nhân tạo: 人工湖, 人工智能 (trí tuệ nhân tạo). Trái nghĩa: 天然, 自然.'],
   usage:'人工 + V (过秤 / 操作 / 服务); 人工 + N (湖 / 智能 / 降雨); 无须人工 + V; 转人工 (chuyển sang nhân viên trực).',
   collo:['无须人工过秤','人工服务','人工智能','人工湖'],
   ex_zh:'购物完毕，该结账了，未来商店无须人工过秤。',ex_py:'Gòuwù wánbì, gāi jiézhàng le, wèilái shāngdiàn wúxū réngōng guò chèng.',ex_vn:'Mua sắm xong, đến lúc tính tiền, cửa hàng tương lai không cần người cân hàng.',
   exList:[
     {zh:'购物完毕，该结账了，未来商店无须人工过秤。',py:'Gòuwù wánbì, gāi jiézhàng le, wèilái shāngdiàn wúxū réngōng guò chèng.',vn:'Mua sắm xong, đến lúc tính tiền, cửa hàng tương lai không cần người cân hàng.'},
     {zh:'电话里的机器人听不懂我的问题，我只好转人工服务。',py:'Diànhuà li de jīqìrén tīng bu dǒng wǒ de wèntí, wǒ zhǐhǎo zhuǎn réngōng fúwù.',vn:'Robot trong điện thoại nghe không hiểu câu hỏi của tôi, tôi đành chuyển sang nhân viên trực.'},
     {zh:'人工智能发展得这么快，很多简单的工作可能会被淘汰。',py:'Réngōng zhìnéng fāzhǎn de zhème kuài, hěn duō jiǎndān de gōngzuò kěnéng huì bèi táotài.',vn:'Trí tuệ nhân tạo phát triển nhanh như vậy, nhiều công việc đơn giản có thể sẽ bị đào thải.'}
   ],
   colloFull:[
     {zh:'无须人工过秤',py:'wúxū réngōng guò chèng',vn:'không cần người cân hàng'},
     {zh:'人工服务',py:'réngōng fúwù',vn:'dịch vụ có người trực'},
     {zh:'人工智能',py:'réngōng zhìnéng',vn:'trí tuệ nhân tạo'},
     {zh:'人工湖',py:'réngōnghú',vn:'hồ nhân tạo'},
     {zh:'节省人工',py:'jiéshěng réngōng',vn:'tiết kiệm nhân công'}
   ],
   patterns:[
     {s:'人工 + V (过秤 / 操作)',m:'Làm bằng sức người'},
     {s:'人工 + N (湖 / 智能)',m:'… nhân tạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những việc này trước kia đều phải làm bằng tay, bây giờ máy móc có thể tự động hoàn thành.',answer:'这些工作以前都要靠人工完成，现在机器可以自动完成了。',answerPy:'Zhèxiē gōngzuò yǐqián dōu yào kào réngōng wánchéng, xiànzài jīqì kěyǐ zìdòng wánchéng le.',
      note:'靠 + phương tiện + V = dựa vào … mà làm; 以前……，现在……了 đối chiếu.',pair:'靠'},
     {promptLang:'vi',prompt:'Hồ này không phải hồ tự nhiên mà là hồ nhân tạo đào từ năm mươi năm trước.',answer:'这个湖不是天然的，而是五十年前挖的人工湖。',answerPy:'Zhège hú bú shì tiānrán de, ér shì wǔshí nián qián wā de réngōnghú.',
      note:'不是……而是…… (ôn HSK 5); 的-cụm làm định ngữ (五十年前挖的).',pair:'不是……而是……'}
   ]},

  {n:29,zh:'秤',py:'chèng',pos:'Danh từ',vn:'cái cân',hv:'xứng',em:'⚖️',lesson:1,
   explain:['Dụng cụ để cân trọng lượng: 电子秤, 体重秤, 杆秤 (cân đòn). Cụm 过秤 = đặt lên cân để cân (khi mua bán).','Chữ 秤 (bộ 禾 lúa + 平 bằng) — cân cho bằng. Lượng từ: 台, 杆. Động từ "cân" là 称 (chēng): 称一称. Không nhầm 秤 (cái cân) với 称 (cân / gọi).'],
   usage:'过秤; 电子秤 / 体重秤; 用秤称一称; 秤不准 (cân không chuẩn).',
   collo:['人工过秤','电子秤','体重秤','秤不准'],
   ex_zh:'未来商店无须人工过秤。',ex_py:'Wèilái shāngdiàn wúxū réngōng guò chèng.',ex_vn:'Cửa hàng tương lai không cần người cân hàng.',
   exList:[
     {zh:'未来商店无须人工过秤，结账系统可以识别商品的重量和体积。',py:'Wèilái shāngdiàn wúxū réngōng guò chèng, jiézhàng xìtǒng kěyǐ shíbié shāngpǐn de zhòngliàng hé tǐjī.',vn:'Cửa hàng tương lai không cần người cân hàng, hệ thống thanh toán có thể nhận diện trọng lượng và thể tích của hàng hoá.'},
     {zh:'我怀疑那个卖水果的秤不准，回家一称，果然少了半斤。',py:'Wǒ huáiyí nàge mài shuǐguǒ de chèng bù zhǔn, huí jiā yì chēng, guǒrán shǎole bàn jīn.',vn:'Tôi nghi cân của người bán hoa quả kia không chuẩn, về nhà cân lại, quả nhiên thiếu nửa cân.'},
     {zh:'她每天早上都要站到体重秤上看看自己有没有胖。',py:'Tā měitiān zǎoshang dōu yào zhàndào tǐzhòngchèng shang kànkan zìjǐ yǒu méiyǒu pàng.',vn:'Sáng nào cô ấy cũng đứng lên cân xem mình có béo lên không.'}
   ],
   colloFull:[
     {zh:'人工过秤',py:'réngōng guò chèng',vn:'người cân hàng'},
     {zh:'电子秤',py:'diànzǐchèng',vn:'cân điện tử'},
     {zh:'体重秤',py:'tǐzhòngchèng',vn:'cân sức khoẻ'},
     {zh:'秤不准',py:'chèng bù zhǔn',vn:'cân không chuẩn'},
     {zh:'过秤',py:'guò chèng',vn:'đặt lên cân'}
   ],
   patterns:[
     {s:'把 + N + 放到秤上 / 过秤',m:'Đặt … lên cân'},
     {s:'秤 + 准 / 不准',m:'Cân chuẩn / không chuẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cân này không chuẩn, cân gì cũng nặng hơn nửa cân.',answer:'这台秤不准，称什么都多半斤。',answerPy:'Zhè tái chèng bù zhǔn, chēng shénme dōu duō bàn jīn.',
      note:'什么……都…… phiếm chỉ (ôn HSK 4); phân biệt 秤 chèng (cái cân) và 称 chēng (cân).',pair:'什么……都……'},
     {promptLang:'vi',prompt:'Rau này mua theo túi, không cần cân.',answer:'这种菜是按袋卖的，不用过秤。',answerPy:'Zhè zhǒng cài shì àn dài mài de, búyòng guò chèng.',
      note:'是……的 nhấn mạnh cách thức; 按 + đơn vị + V.',pair:'按'}
   ]},

  {n:30,zh:'运算',py:'yùnsuàn',pos:'Động từ',vn:'tính toán, vận toán, xử lý (số liệu)',hv:'vận toán',em:'🧮',lesson:1,
   explain:['Thực hiện phép tính theo quy tắc toán học: 运算速度 (tốc độ xử lý của máy tính), 数学运算. Dùng nhiều cho máy tính, hệ thống.','Khác 计算 (tính toán nói chung, cả nghĩa "tính kế"): 运算 thiên về thao tác tính của máy / phép toán; 算 là chữ chung.'],
   usage:'迅速 + 运算; 运算 + 速度 / 能力 / 过程; 进行运算.',
   collo:['迅速运算','运算速度','运算能力','进行运算'],
   ex_zh:'结账系统可以识别商品的重量和体积，迅速运算。',ex_py:'Jiézhàng xìtǒng kěyǐ shíbié shāngpǐn de zhòngliàng hé tǐjī, xùnsù yùnsuàn.',ex_vn:'Hệ thống thanh toán có thể nhận diện trọng lượng và thể tích hàng hoá rồi tính toán nhanh chóng.',
   exList:[
     {zh:'带有摄像头的结账系统可以识别商品的重量和体积，迅速运算。',py:'Dài yǒu shèxiàngtóu de jiézhàng xìtǒng kěyǐ shíbié shāngpǐn de zhòngliàng hé tǐjī, xùnsù yùnsuàn.',vn:'Hệ thống thanh toán có camera có thể nhận diện trọng lượng và thể tích hàng hoá, tính toán nhanh chóng.'},
     {zh:'这台电脑屏幕很大，运算速度超级快。',py:'Zhè tái diànnǎo píngmù hěn dà, yùnsuàn sùdù chāojí kuài.',vn:'Máy tính này màn hình rất to, tốc độ xử lý siêu nhanh.'},
     {zh:'这个孩子的运算能力特别强，心算比计算器还快。',py:'Zhège háizi de yùnsuàn nénglì tèbié qiáng, xīnsuàn bǐ jìsuànqì hái kuài.',vn:'Khả năng tính toán của đứa trẻ này đặc biệt giỏi, tính nhẩm còn nhanh hơn máy tính bỏ túi.'}
   ],
   colloFull:[
     {zh:'迅速运算',py:'xùnsù yùnsuàn',vn:'tính toán nhanh chóng'},
     {zh:'运算速度',py:'yùnsuàn sùdù',vn:'tốc độ xử lý / tính toán'},
     {zh:'运算能力',py:'yùnsuàn nénglì',vn:'khả năng tính toán'},
     {zh:'进行运算',py:'jìnxíng yùnsuàn',vn:'tiến hành tính toán'},
     {zh:'数学运算',py:'shùxué yùnsuàn',vn:'phép toán'}
   ],
   patterns:[
     {s:'运算 + 速度 / 能力',m:'Tốc độ / khả năng tính toán'},
     {s:'对 + 数据 + 进行运算',m:'Tính toán, xử lý dữ liệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tốc độ tính toán của máy tính ngày nay nhanh hơn trước kia không biết bao nhiêu lần.',answer:'现在电脑的运算速度比以前快了不知多少倍。',answerPy:'Xiànzài diànnǎo de yùnsuàn sùdù bǐ yǐqián kuàile bù zhī duōshao bèi.',
      note:'比……快了 + bổ ngữ số lượng (倍) (ôn HSK 4–5).',pair:'比……+ Adj + 数量补语'},
     {promptLang:'vi',prompt:'Dù đề toán này phải tính rất nhiều bước, cậu ấy vẫn làm xong trong năm phút.',answer:'尽管这道题需要运算很多步，他还是五分钟就做完了。',answerPy:'Jǐnguǎn zhè dào tí xūyào yùnsuàn hěn duō bù, tā háishi wǔ fēnzhōng jiù zuòwán le.',
      note:'尽管……还是……; thời lượng + 就 + V (nhanh, sớm).',pair:'……就……（早、快）'}
   ]},

  {n:31,zh:'总和',py:'zǒnghé',pos:'Danh từ',vn:'tổng số, tổng cộng',hv:'tổng hoà',em:'➕',lesson:1,
   explain:['Kết quả cộng tất cả lại; toàn bộ gộp lại: 消费钱数的总和 = tổng số tiền đã tiêu. Có thể dùng cho số liệu hoặc nghĩa trừu tượng (各种因素的总和).','Khẩu ngữ hay nói 一共 / 加起来; 总和 là danh từ văn viết, làm tân ngữ / chủ ngữ: 给出总和, 总和是…….'],
   usage:'……的总和; 给出 / 算出 + 总和; 总和 + 是 / 为 + số; A 和 B 的总和.',
   collo:['消费钱数的总和','给出总和','算出总和','……的总和'],
   ex_zh:'迅速运算，之后给出消费钱数的总和。',ex_py:'Xùnsù yùnsuàn, zhīhòu gěichū xiāofèi qiánshù de zǒnghé.',ex_vn:'Tính toán nhanh chóng, sau đó đưa ra tổng số tiền đã tiêu.',
   exList:[
     {zh:'结账系统迅速运算，之后给出消费钱数的总和。',py:'Jiézhàng xìtǒng xùnsù yùnsuàn, zhīhòu gěichū xiāofèi qiánshù de zǒnghé.',vn:'Hệ thống thanh toán tính nhanh, sau đó đưa ra tổng số tiền đã tiêu.'},
     {zh:'这个月的水费、电费和网费的总和，比上个月多了一百块。',py:'Zhège yuè de shuǐfèi, diànfèi hé wǎngfèi de zǒnghé, bǐ shàng ge yuè duōle yìbǎi kuài.',vn:'Tổng tiền nước, tiền điện và tiền mạng tháng này nhiều hơn tháng trước một trăm tệ.'},
     {zh:'三角形三个内角的总和是一百八十度。',py:'Sānjiǎoxíng sān ge nèijiǎo de zǒnghé shì yìbǎi bāshí dù.',vn:'Tổng ba góc trong của một tam giác là 180 độ.'}
   ],
   colloFull:[
     {zh:'消费钱数的总和',py:'xiāofèi qiánshù de zǒnghé',vn:'tổng số tiền đã tiêu'},
     {zh:'给出总和',py:'gěichū zǒnghé',vn:'đưa ra tổng số'},
     {zh:'算出总和',py:'suànchū zǒnghé',vn:'tính ra tổng'},
     {zh:'……的总和',py:'…… de zǒnghé',vn:'tổng của …'},
     {zh:'总和是',py:'zǒnghé shì',vn:'tổng là'}
   ],
   patterns:[
     {s:'A 和 B 的总和 + 是 / 为 + số',m:'Tổng của A và B là …'},
     {s:'算出 / 给出 + 总和',m:'Tính ra / đưa ra tổng số'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cộng tất cả các khoản chi tiêu lại, tổng số còn chưa tới năm trăm tệ.',answer:'把所有的花费加起来，总和还不到五百块。',answerPy:'Bǎ suǒyǒu de huāfèi jiā qǐlái, zǒnghé hái bú dào wǔbǎi kuài.',
      note:'V + 起来 (gộp lại); 还不到 + số = còn chưa tới (ôn HSK 4).',pair:'加起来'},
     {promptLang:'vi',prompt:'Chỉ cần nhập giá cả, máy sẽ tự động tính ra tổng số.',answer:'只要输入价格，机器就会自动算出总和。',answerPy:'Zhǐyào shūrù jiàgé, jīqì jiù huì zìdòng suànchū zǒnghé.',
      note:'只要……就…… điều kiện đủ; V出 (bổ ngữ kết quả).',pair:'只要……就……'}
   ]},

  {n:32,zh:'着重',py:'zhuózhòng',pos:'Động từ',vn:'nhấn mạnh, chú trọng',hv:'trước trọng',em:'🎯',lesson:1,
   explain:['Đặt trọng tâm, đặc biệt coi trọng một điểm nào đó: 着重强调, 着重推荐, 着重介绍. Thường đứng trước động từ khác làm trạng ngữ.','Chú ý đọc zhuó (không đọc zháo / zhe). Gần 重点 + V (重点强调); 着重 văn viết, thường dùng trong báo cáo, hội nghị.'],
   usage:'着重 + 强调 / 推荐 / 介绍 / 讨论 / 指出; 着重于 + N; ……着重推荐的服务.',
   collo:['着重推荐','着重强调','着重介绍','着重于'],
   ex_zh:'消费者加入设计队伍，是未来商店着重推荐的服务。',ex_py:'Xiāofèizhě jiārù shèjì duìwu, shì wèilái shāngdiàn zhuózhòng tuījiàn de fúwù.',ex_vn:'Người tiêu dùng tham gia vào đội ngũ thiết kế là dịch vụ mà cửa hàng tương lai đặc biệt giới thiệu.',
   exList:[
     {zh:'消费者加入设计队伍，是未来商店着重推荐的服务。',py:'Xiāofèizhě jiārù shèjì duìwu, shì wèilái shāngdiàn zhuózhòng tuījiàn de fúwù.',vn:'Người tiêu dùng tham gia đội ngũ thiết kế là dịch vụ mà cửa hàng tương lai đặc biệt giới thiệu.'},
     {zh:'今天的会议上，总经理着重强调了以下几个问题。',py:'Jīntiān de huìyì shang, zǒngjīnglǐ zhuózhòng qiángdiàole yǐxià jǐ ge wèntí.',vn:'Trong cuộc họp hôm nay, tổng giám đốc đã đặc biệt nhấn mạnh mấy vấn đề sau.'},
     {zh:'这节课老师着重讲了“以免”和“免得”的区别。',py:'Zhè jié kè lǎoshī zhuózhòng jiǎngle “yǐmiǎn” hé “miǎnde” de qūbié.',vn:'Tiết này thầy giáo tập trung giảng sự khác nhau giữa 以免 và 免得.'}
   ],
   colloFull:[
     {zh:'着重推荐',py:'zhuózhòng tuījiàn',vn:'đặc biệt giới thiệu'},
     {zh:'着重强调',py:'zhuózhòng qiángdiào',vn:'đặc biệt nhấn mạnh'},
     {zh:'着重介绍',py:'zhuózhòng jièshào',vn:'giới thiệu trọng điểm'},
     {zh:'着重于',py:'zhuózhòng yú',vn:'chú trọng vào'},
     {zh:'着重指出',py:'zhuózhòng zhǐchū',vn:'đặc biệt chỉ ra'}
   ],
   patterns:[
     {s:'着重 + V (强调 / 推荐 / 介绍)',m:'Đặc biệt / tập trung …'},
     {s:'着重于 + N',m:'Chú trọng vào …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong bài phát biểu, hiệu trưởng đặc biệt nhấn mạnh tầm quan trọng của an toàn.',answer:'在讲话中，校长着重强调了安全的重要性。',answerPy:'Zài jiǎnghuà zhōng, xiàozhǎng zhuózhòng qiángdiàole ānquán de zhòngyàoxìng.',
      note:'在……中 phạm vi; 重要性 danh từ hoá bằng 性.',pair:'在……中'},
     {promptLang:'vi',prompt:'Cuốn sách này không những giới thiệu lịch sử, mà còn tập trung phân tích văn hoá.',answer:'这本书不但介绍了历史，而且着重分析了文化。',answerPy:'Zhè běn shū búdàn jièshàole lìshǐ, érqiě zhuózhòng fēnxīle wénhuà.',
      note:'不但……而且…… (ôn HSK 4).',pair:'不但……而且……'}
   ]},

  {n:33,zh:'虚拟',py:'xūnǐ',pos:'Tính từ',vn:'ảo, hư cấu, giả định',hv:'hư nghĩ',em:'🥽',lesson:1,
   explain:['Không có thật, do tưởng tượng hoặc do máy tính mô phỏng ra: 虚拟设计室 (phòng thiết kế ảo), 虚拟世界, 虚拟现实 (thực tế ảo, VR).','Trái nghĩa: 真实 / 现实. Trong văn học: 虚拟的人物 = nhân vật hư cấu. Từ ngoài đề cương (*) nhưng rất thông dụng trong thời đại số.'],
   usage:'虚拟 + 设计室 / 世界 / 现实 / 货币 / 人物; 登录到虚拟……; 在虚拟世界里.',
   collo:['虚拟设计室','虚拟世界','虚拟现实','虚拟人物'],
   ex_zh:'你登录到虚拟设计室，进入设计过程。',ex_py:'Nǐ dēnglù dào xūnǐ shèjìshì, jìnrù shèjì guòchéng.',ex_vn:'Bạn đăng nhập vào phòng thiết kế ảo, bước vào quá trình thiết kế.',
   exList:[
     {zh:'你登录到虚拟设计室，进入设计过程，对颜色、外观等设计内容进行投票。',py:'Nǐ dēnglù dào xūnǐ shèjìshì, jìnrù shèjì guòchéng, duì yánsè, wàiguān děng shèjì nèiróng jìnxíng tóupiào.',vn:'Bạn đăng nhập vào phòng thiết kế ảo, bước vào quá trình thiết kế, bỏ phiếu cho màu sắc, kiểu dáng….'},
     {zh:'有些孩子沉迷于虚拟世界，在现实生活中反而不会跟人交流。',py:'Yǒuxiē háizi chénmí yú xūnǐ shìjiè, zài xiànshí shēnghuó zhōng fǎn\'ér bú huì gēn rén jiāoliú.',vn:'Có những đứa trẻ đắm chìm vào thế giới ảo, trong đời thực ngược lại không biết giao tiếp với người khác.'},
     {zh:'戴上这副眼镜，你就能体验虚拟现实带来的乐趣。',py:'Dàishang zhè fù yǎnjìng, nǐ jiù néng tǐyàn xūnǐ xiànshí dàilái de lèqù.',vn:'Đeo cặp kính này vào, bạn có thể trải nghiệm niềm vui mà thực tế ảo mang lại.'}
   ],
   colloFull:[
     {zh:'虚拟设计室',py:'xūnǐ shèjìshì',vn:'phòng thiết kế ảo'},
     {zh:'虚拟世界',py:'xūnǐ shìjiè',vn:'thế giới ảo'},
     {zh:'虚拟现实',py:'xūnǐ xiànshí',vn:'thực tế ảo (VR)'},
     {zh:'虚拟人物',py:'xūnǐ rénwù',vn:'nhân vật hư cấu'},
     {zh:'虚拟货币',py:'xūnǐ huòbì',vn:'tiền ảo'}
   ],
   patterns:[
     {s:'虚拟 + N (世界 / 现实 / 人物)',m:'… ảo / hư cấu'},
     {s:'在虚拟世界里 + V',m:'Làm gì trong thế giới ảo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn bè trong thế giới ảo dù nhiều đến đâu cũng không thay thế được bạn bè ngoài đời thực.',answer:'虚拟世界里的朋友再多，也代替不了现实中的朋友。',answerPy:'Xūnǐ shìjiè li de péngyou zài duō, yě dàitì bu liǎo xiànshí zhōng de péngyou.',
      note:'再 + Adj + 也…… = dù … đến mấy cũng (ôn HSK 5); V不了.',pair:'再……也……'},
     {promptLang:'vi',prompt:'Nhân vật trong tiểu thuyết là hư cấu, cậu đừng coi là thật.',answer:'小说里的人物是虚拟的，你别当真。',answerPy:'Xiǎoshuō li de rénwù shì xūnǐ de, nǐ bié dàngzhēn.',
      note:'是……的 miêu tả tính chất; 当真 = coi là thật.',pair:'别……'}
   ]},

  {n:34,zh:'投票',py:'tóu piào',pos:'Động từ (li hợp)',vn:'bỏ phiếu, biểu quyết',hv:'đầu phiếu',em:'🗳️',lesson:1,
   explain:['Bỏ phiếu để bày tỏ ý kiến, lựa chọn trong bầu cử, bình chọn: 投票选举, 网上投票. Là động từ li hợp: 投了一票, 投他一票.','Đối tượng được bầu chọn dùng 给 / 为 / 对: 给他投票, 对……进行投票 (bài khoá). Danh từ liên quan: 投票站 (điểm bỏ phiếu), 选民 (cử tri).'],
   usage:'对 + N + 进行投票; 给 / 为 + 人 + 投票; 投 + 人 + 一票; 网上投票; 投票站.',
   collo:['进行投票','投票选举','网上投票','投了一票'],
   ex_zh:'对颜色、外观等设计内容进行投票，这样设计出来的衣服保管你满意。',ex_py:'Duì yánsè, wàiguān děng shèjì nèiróng jìnxíng tóupiào, zhèyàng shèjì chūlái de yīfu bǎoguǎn nǐ mǎnyì.',ex_vn:'Bỏ phiếu cho các nội dung thiết kế như màu sắc, kiểu dáng…, quần áo thiết kế ra như vậy đảm bảo bạn hài lòng.',
   exList:[
     {zh:'你登录到虚拟设计室，对颜色、外观等设计内容进行投票。',py:'Nǐ dēnglù dào xūnǐ shèjìshì, duì yánsè, wàiguān děng shèjì nèiróng jìnxíng tóupiào.',vn:'Bạn đăng nhập vào phòng thiết kế ảo, bỏ phiếu cho màu sắc, kiểu dáng và các nội dung thiết kế khác.'},
     {zh:'现在改为网络选举了，选民们只需登录相应的网站，根据指令投票即可。',py:'Xiànzài gǎiwéi wǎngluò xuǎnjǔ le, xuǎnmínmen zhǐ xū dēnglù xiāngyìng de wǎngzhàn, gēnjù zhǐlìng tóupiào jí kě.',vn:'Bây giờ đã chuyển sang bầu cử qua mạng, cử tri chỉ cần đăng nhập trang web tương ứng, bỏ phiếu theo hướng dẫn là được.'},
     {zh:'选班长的时候，我投了小王一票，因为他做事最认真。',py:'Xuǎn bānzhǎng de shíhou, wǒ tóule Xiǎo Wáng yí piào, yīnwèi tā zuò shì zuì rènzhēn.',vn:'Lúc bầu lớp trưởng, tôi bỏ cho Tiểu Vương một phiếu, vì cậu ấy làm việc chăm chỉ nhất.'}
   ],
   colloFull:[
     {zh:'进行投票',py:'jìnxíng tóupiào',vn:'tiến hành bỏ phiếu'},
     {zh:'投票选举',py:'tóupiào xuǎnjǔ',vn:'bỏ phiếu bầu cử'},
     {zh:'网上投票',py:'wǎngshàng tóupiào',vn:'bỏ phiếu trên mạng'},
     {zh:'投了一票',py:'tóule yí piào',vn:'đã bỏ một phiếu'},
     {zh:'投票站',py:'tóupiàozhàn',vn:'điểm bỏ phiếu'}
   ],
   patterns:[
     {s:'对 + N + 进行投票',m:'Bỏ phiếu về / cho …'},
     {s:'投 + 人 + 一票',m:'Bỏ cho ai một phiếu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiết mục này hay nhất, không ít người đều bỏ phiếu cho nó.',answer:'这个节目最精彩，不少人都给它投了票。',answerPy:'Zhège jiémù zuì jīngcǎi, bù shǎo rén dōu gěi tā tóule piào.',
      note:'Li hợp từ: 投 + 了 + 票; 给 + đối tượng + 投票.',pair:'离合词'},
     {promptLang:'vi',prompt:'Chuyện có tổ chức dã ngoại hay không, chúng ta hãy biểu quyết xem sao.',answer:'要不要去郊游，我们投票决定吧。',answerPy:'Yào bu yào qù jiāoyóu, wǒmen tóupiào juédìng ba.',
      note:'Câu hỏi chính phản (要不要) làm chủ đề; 投票 + 决定 (liên động).',pair:'正反疑问'}
   ]},

  {n:35,zh:'保管',py:'bǎoguǎn',pos:'Động từ / Phó từ',vn:'bảo đảm, cam đoan; cất giữ, bảo quản',hv:'bảo quản',em:'🤝',lesson:1,
   explain:['Phó từ / động từ (khẩu ngữ): CAM ĐOAN, chắc chắn — 保管你满意 = đảm bảo bạn hài lòng. Nghĩa này gần 保证 / 一定, dùng để hứa hẹn, khẳng định chắc nịch.','Động từ: cất giữ, trông giữ đồ cho khỏi mất, hỏng — 保管行李, 保管好自己的财物. Chú ý: "bảo quản" tiếng Việt chủ yếu là giữ gìn; nghĩa "cam đoan" là cái mới của bài này.'],
   usage:'保管 + (你) + Adj / V (保管你满意, 保管没问题); 保管 + đồ vật; 把……保管好; 替 / 帮 + 人 + 保管.',
   collo:['保管你满意','保管没问题','保管好财物','帮我保管'],
   ex_zh:'这样设计出来的衣服保管你满意。',ex_py:'Zhèyàng shèjì chūlái de yīfu bǎoguǎn nǐ mǎnyì.',ex_vn:'Quần áo được thiết kế ra như vậy đảm bảo bạn hài lòng.',
   exList:[
     {zh:'对颜色、外观等进行投票，这样设计出来的衣服保管你满意。',py:'Duì yánsè, wàiguān děng jìnxíng tóupiào, zhèyàng shèjì chūlái de yīfu bǎoguǎn nǐ mǎnyì.',vn:'Bỏ phiếu cho màu sắc, kiểu dáng…, quần áo thiết kế ra như vậy đảm bảo bạn hài lòng.'},
     {zh:'这是一家百年老店了，饭菜保管让你满意。',py:'Zhè shì yì jiā bǎi nián lǎodiàn le, fàncài bǎoguǎn ràng nǐ mǎnyì.',vn:'Đây là quán lâu năm cả trăm năm rồi, món ăn đảm bảo làm bạn hài lòng.'},
     {zh:'在公共场合，一定要注意保管好自己的财物。',py:'Zài gōnggòng chǎnghé, yídìng yào zhùyì bǎoguǎn hǎo zìjǐ de cáiwù.',vn:'Ở nơi công cộng, nhất định phải chú ý giữ gìn tài sản của mình.'}
   ],
   colloFull:[
     {zh:'保管你满意',py:'bǎoguǎn nǐ mǎnyì',vn:'đảm bảo bạn hài lòng'},
     {zh:'保管没问题',py:'bǎoguǎn méi wèntí',vn:'cam đoan không có vấn đề'},
     {zh:'保管好财物',py:'bǎoguǎn hǎo cáiwù',vn:'giữ kỹ tài sản'},
     {zh:'帮我保管',py:'bāng wǒ bǎoguǎn',vn:'giữ giúp tôi'},
     {zh:'保管行李',py:'bǎoguǎn xíngli',vn:'giữ hành lý'}
   ],
   patterns:[
     {s:'保管 + (人) + 满意 / 没问题 / 喜欢',m:'Cam đoan (ai) hài lòng / không vấn đề / thích'},
     {s:'把 + đồ + 保管好',m:'Cất giữ kỹ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cậu làm theo cách tớ nói, đảm bảo không có vấn đề gì.',answer:'只要你按我说的方法做，保管没问题。',answerPy:'Zhǐyào nǐ àn wǒ shuō de fāngfǎ zuò, bǎoguǎn méi wèntí.',
      note:'只要……(就)……; 保管 = cam đoan (khẩu ngữ).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi đi vệ sinh một lát, phiền cậu giữ giúp hành lý nhé.',answer:'我去一下洗手间，麻烦你帮我保管一下行李。',answerPy:'Wǒ qù yíxià xǐshǒujiān, máfan nǐ bāng wǒ bǎoguǎn yíxià xíngli.',
      note:'麻烦你 + V = phiền bạn … (lời nhờ lịch sự); V + 一下.',pair:'麻烦你……'}
   ]},

  {n:36,zh:'新颖',py:'xīnyǐng',pos:'Tính từ',vn:'mới mẻ, mới lạ, độc đáo',hv:'tân dĩnh',em:'✨',lesson:1,
   explain:['Mới và khác thường, không giống cái cũ, tạo cảm giác lạ mắt: 样式新颖, 构思新颖, 观点新颖. 颖 = ngọn lúa nhọn → nổi bật.','Khác 新 (mới nói chung, về thời gian): 新颖 nhấn sự SÁNG TẠO, độc đáo. Hay dùng khen thiết kế, ý tưởng, đề tài.'],
   usage:'样式 / 设计 / 构思 / 题材 / 观点 + 新颖; 新颖的 + N; 形式新颖.',
   collo:['样式新颖','构思新颖','新颖的设计','题材新颖'],
   ex_zh:'不管你是想买样式新颖的羽绒服、旗袍……',ex_py:'Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo……',ex_vn:'Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ…',
   exList:[
     {zh:'不管你是想买样式新颖的羽绒服、旗袍，还是想买几枚纽扣儿，都能得到反馈。',py:'Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo, háishi xiǎng mǎi jǐ méi niǔkòur, dōu néng dédào fǎnkuì.',vn:'Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ hay chỉ vài chiếc cúc áo, đều có thể nhận được phản hồi.'},
     {zh:'这篇作文构思新颖，老师把它当作范文读给全班听。',py:'Zhè piān zuòwén gòusī xīnyǐng, lǎoshī bǎ tā dàngzuò fànwén dú gěi quán bān tīng.',vn:'Bài văn này có ý tưởng độc đáo, thầy giáo lấy nó làm bài mẫu đọc cho cả lớp nghe.'},
     {zh:'这家店的装修很新颖，吸引了不少年轻人来拍照。',py:'Zhè jiā diàn de zhuāngxiū hěn xīnyǐng, xīyǐnle bù shǎo niánqīngrén lái pāizhào.',vn:'Cách trang trí của quán này rất mới lạ, thu hút không ít người trẻ đến chụp ảnh.'}
   ],
   colloFull:[
     {zh:'样式新颖',py:'yàngshì xīnyǐng',vn:'kiểu dáng mới lạ'},
     {zh:'构思新颖',py:'gòusī xīnyǐng',vn:'ý tưởng độc đáo'},
     {zh:'新颖的设计',py:'xīnyǐng de shèjì',vn:'thiết kế mới mẻ'},
     {zh:'题材新颖',py:'tícái xīnyǐng',vn:'đề tài mới lạ'},
     {zh:'观点新颖',py:'guāndiǎn xīnyǐng',vn:'quan điểm mới mẻ'}
   ],
   patterns:[
     {s:'N (样式 / 构思 / 设计) + 新颖',m:'… mới lạ, độc đáo'},
     {s:'样式新颖的 + N',m:'… có kiểu dáng mới lạ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc áo này tuy kiểu dáng mới lạ, nhưng mặc không thoải mái lắm.',answer:'这件衣服样式虽然新颖，但是穿起来不太舒服。',answerPy:'Zhè jiàn yīfu yàngshì suīrán xīnyǐng, dànshì chuān qǐlái bú tài shūfu.',
      note:'虽然 có thể đứng sau chủ ngữ; V起来 + Adj đánh giá cảm nhận.',pair:'V起来'},
     {promptLang:'vi',prompt:'Ý tưởng của cậu ấy độc đáo đến mức ban giám khảo ai cũng khen.',answer:'他的构思新颖得让评委们个个都称赞。',answerPy:'Tā de gòusī xīnyǐng de ràng píngwěimen gègè dōu chēngzàn.',
      note:'Adj + 得 + 让…… bổ ngữ trình độ; láy lượng từ 个个 = ai nấy (ôn bài 14).',pair:'Adj得让……'}
   ]},

  {n:37,zh:'羽绒服',py:'yǔróngfú',pos:'Danh từ',vn:'áo lông vũ, áo phao lông',hv:'vũ nhung phục',em:'🧥',lesson:1,
   explain:['Áo khoác mùa đông nhồi lông vũ (lông tơ của vịt, ngỗng): 羽 = lông chim, 绒 = lông tơ, 服 = quần áo. Rất ấm và nhẹ.','Lượng từ: 件. Người Việt hay gọi "áo phao". Các từ cùng họ 服: 西服, 运动服, 校服.'],
   usage:'一件 + 羽绒服; 穿 / 脱 + 羽绒服; 羽绒服 + 很暖和 / 很轻.',
   collo:['样式新颖的羽绒服','一件羽绒服','穿上羽绒服','羽绒服很暖和'],
   ex_zh:'不管你是想买样式新颖的羽绒服、旗袍……',ex_py:'Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo……',ex_vn:'Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ…',
   exList:[
     {zh:'不管你是想买样式新颖的羽绒服、旗袍，还是想买你中意的音响，都可以在网上查询。',py:'Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo, háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, dōu kěyǐ zài wǎngshàng cháxún.',vn:'Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ hay chiếc loa bạn ưng ý, đều có thể tra trên mạng.'},
     {zh:'北方的冬天特别冷，出门不穿羽绒服可不行。',py:'Běifāng de dōngtiān tèbié lěng, chūmén bù chuān yǔróngfú kě bù xíng.',vn:'Mùa đông miền Bắc Trung Quốc lạnh lắm, ra ngoài không mặc áo lông vũ thì không được đâu.'},
     {zh:'这件羽绒服又轻又暖和，穿上一点儿也不觉得冷。',py:'Zhè jiàn yǔróngfú yòu qīng yòu nuǎnhuo, chuānshang yìdiǎnr yě bù juéde lěng.',vn:'Chiếc áo lông vũ này vừa nhẹ vừa ấm, mặc vào chẳng thấy lạnh chút nào.'}
   ],
   colloFull:[
     {zh:'样式新颖的羽绒服',py:'yàngshì xīnyǐng de yǔróngfú',vn:'áo lông vũ kiểu dáng mới lạ'},
     {zh:'一件羽绒服',py:'yí jiàn yǔróngfú',vn:'một chiếc áo lông vũ'},
     {zh:'穿上羽绒服',py:'chuānshang yǔróngfú',vn:'mặc áo lông vũ vào'},
     {zh:'羽绒服很暖和',py:'yǔróngfú hěn nuǎnhuo',vn:'áo lông vũ rất ấm'},
     {zh:'长款羽绒服',py:'chángkuǎn yǔróngfú',vn:'áo lông vũ dáng dài'}
   ],
   patterns:[
     {s:'一件 + (Adj 的) + 羽绒服',m:'Một chiếc áo lông vũ …'},
     {s:'穿上 / 脱下 + 羽绒服',m:'Mặc vào / cởi ra áo lông vũ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời lạnh như thế này, không mặc áo lông vũ thì chắc chắn sẽ bị cảm.',answer:'天这么冷，不穿羽绒服的话，肯定会感冒的。',answerPy:'Tiān zhème lěng, bù chuān yǔróngfú dehuà, kěndìng huì gǎnmào de.',
      note:'……的话 giả thiết (ôn HSK 4); 肯定会……的.',pair:'……的话'},
     {promptLang:'vi',prompt:'Chiếc áo lông vũ mẹ mua cho tôi vừa nhẹ vừa ấm.',answer:'妈妈给我买的羽绒服又轻又暖和。',answerPy:'Māma gěi wǒ mǎi de yǔróngfú yòu qīng yòu nuǎnhuo.',
      note:'Cụm 的 làm định ngữ (妈妈给我买的); 又……又…….',pair:'又……又……'}
   ]},

  {n:38,zh:'旗袍',py:'qípáo',pos:'Danh từ',vn:'sườn xám (áo dài truyền thống của phụ nữ Trung Quốc)',hv:'kỳ bào',em:'👘',lesson:1,
   explain:['Loại áo liền thân, cổ đứng, xẻ tà, ôm dáng của phụ nữ Trung Quốc; nguồn gốc từ trang phục của người Mãn (旗人 = người thuộc Bát Kỳ), nên gọi là 旗袍.','Lượng từ: 件. Tiếng Việt quen gọi "sườn xám". Hay đi với 穿旗袍, 改良旗袍 (sườn xám cách tân).'],
   usage:'一件 + 旗袍; 穿 + 旗袍; 改良 / 传统 + 旗袍; 定做 + 旗袍.',
   collo:['一件旗袍','穿旗袍','改良旗袍','传统旗袍'],
   ex_zh:'不管你是想买样式新颖的羽绒服、旗袍……',ex_py:'Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo……',ex_vn:'Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ…',
   exList:[
     {zh:'不管你是想买样式新颖的羽绒服、旗袍，还是只想买几枚纽扣儿，都能在网上找到。',py:'Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo, háishi zhǐ xiǎng mǎi jǐ méi niǔkòur, dōu néng zài wǎngshàng zhǎodào.',vn:'Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ hay chỉ vài chiếc cúc, đều tìm được trên mạng.'},
     {zh:'毕业典礼那天，她穿了一件红色的旗袍，显得特别有气质。',py:'Bìyè diǎnlǐ nà tiān, tā chuānle yí jiàn hóngsè de qípáo, xiǎnde tèbié yǒu qìzhì.',vn:'Hôm lễ tốt nghiệp, cô ấy mặc một chiếc sườn xám đỏ, trông đặc biệt có khí chất.'},
     {zh:'改良后的旗袍更适合日常穿着，很受年轻人欢迎。',py:'Gǎiliáng hòu de qípáo gèng shìhé rìcháng chuānzhuó, hěn shòu niánqīngrén huānyíng.',vn:'Sườn xám cách tân hợp mặc hằng ngày hơn, rất được giới trẻ ưa chuộng.'}
   ],
   colloFull:[
     {zh:'一件旗袍',py:'yí jiàn qípáo',vn:'một chiếc sườn xám'},
     {zh:'穿旗袍',py:'chuān qípáo',vn:'mặc sườn xám'},
     {zh:'改良旗袍',py:'gǎiliáng qípáo',vn:'sườn xám cách tân'},
     {zh:'传统旗袍',py:'chuántǒng qípáo',vn:'sườn xám truyền thống'},
     {zh:'定做旗袍',py:'dìngzuò qípáo',vn:'đặt may sườn xám'}
   ],
   patterns:[
     {s:'穿 + 一件 + (màu) + 旗袍',m:'Mặc một chiếc sườn xám …'},
     {s:'改良 / 传统 + 旗袍',m:'Sườn xám cách tân / truyền thống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nói đến trang phục truyền thống của Trung Quốc, người ta sẽ không khỏi nghĩ đến sườn xám.',answer:'说到中国的传统服装，人们不免会想到旗袍。',answerPy:'Shuōdào Zhōngguó de chuántǒng fúzhuāng, rénmen bùmiǎn huì xiǎngdào qípáo.',
      note:'说到…… = nhắc đến …; 不免 + 会 + V (từ mới bài này).',pair:'不免'},
     {promptLang:'vi',prompt:'Chiếc sườn xám này là bà ngoại đặt may cho mẹ năm mẹ kết hôn.',answer:'这件旗袍是妈妈结婚那年外婆给她定做的。',answerPy:'Zhè jiàn qípáo shì māma jiéhūn nà nián wàipó gěi tā dìngzuò de.',
      note:'是……的 nhấn mạnh thời gian, người làm (ôn HSK 3–4).',pair:'是……的'}
   ]},

  {n:39,zh:'中意',py:'zhòng yì',pos:'Động từ (li hợp)',vn:'ưng ý, vừa ý, hợp ý',hv:'trúng ý',em:'😍',lesson:1,
   explain:['Hợp với ý mình, ưng ý: 你中意的音响 = chiếc loa bạn ưng. 中 đọc zhòng (trúng — xem bài 17: 看中, 选中).','Khẩu ngữ, nhất là miền Nam Trung Quốc; tương đương 满意 / 看中 / 喜欢. Li hợp: 中我的意 (hợp ý tôi), 不中意. Từ ngoài đề cương (*).'],
   usage:'(人) + 中意 + N; 中意的 + N; 不太中意; 中 + 人 + 的意.',
   collo:['你中意的音响','很中意','不太中意','中他的意'],
   ex_zh:'还是想买你中意的音响、收音机、水龙头……',ex_py:'Háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, shōuyīnjī, shuǐlóngtóu……',ex_vn:'Hay muốn mua chiếc loa, chiếc radio, vòi nước mà bạn ưng ý…',
   exList:[
     {zh:'不管你是想买新颖的旗袍，还是想买你中意的音响、收音机，只要把照片发送到专门的网站就行。',py:'Bùguǎn nǐ shì xiǎng mǎi xīnyǐng de qípáo, háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, shōuyīnjī, zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn jiù xíng.',vn:'Bất kể bạn muốn mua sườn xám mới lạ hay chiếc loa, chiếc radio mà bạn ưng ý, chỉ cần gửi ảnh lên trang web chuyên dụng là được.'},
     {zh:'逛了一整天，也没看到一件中意的衣服。',py:'Guàngle yì zhěng tiān, yě méi kàndào yí jiàn zhòngyì de yīfu.',vn:'Đi dạo cả ngày trời mà chẳng thấy bộ quần áo nào ưng ý.'},
     {zh:'这套房子离公司近，价格也合适，他很中意。',py:'Zhè tào fángzi lí gōngsī jìn, jiàgé yě héshì, tā hěn zhòngyì.',vn:'Căn nhà này gần công ty, giá cả cũng hợp lý, anh ấy rất ưng.'}
   ],
   colloFull:[
     {zh:'你中意的音响',py:'nǐ zhòngyì de yīnxiǎng',vn:'chiếc loa bạn ưng ý'},
     {zh:'很中意',py:'hěn zhòngyì',vn:'rất ưng ý'},
     {zh:'不太中意',py:'bú tài zhòngyì',vn:'không ưng lắm'},
     {zh:'中他的意',py:'zhòng tā de yì',vn:'hợp ý anh ấy'},
     {zh:'中意的衣服',py:'zhòngyì de yīfu',vn:'bộ quần áo ưng ý'}
   ],
   patterns:[
     {s:'中意的 + N',m:'… ưng ý'},
     {s:'中 + 人 + 的意',m:'Hợp ý ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có cái nào ưng ý thì thà không mua còn hơn.',answer:'如果没有中意的，宁可不买。',answerPy:'Rúguǒ méiyǒu zhòngyì de, nìngkě bù mǎi.',
      note:'宁可 + phương án chấp nhận = thà … (ôn HSK 5); 中意的 làm danh từ.',pair:'宁可'},
     {promptLang:'vi',prompt:'Cậu ấy chọn tới chọn lui, cuối cùng cũng mua được chiếc điện thoại ưng ý.',answer:'他挑来挑去，终于买到了一部中意的手机。',answerPy:'Tā tiāo lái tiāo qù, zhōngyú mǎidàole yí bù zhòngyì de shǒujī.',
      note:'V来V去 hành động lặp lại (ôn HSK 5); 终于 = cuối cùng.',pair:'V来V去'}
   ]},

  {n:40,zh:'音响',py:'yīnxiǎng',pos:'Danh từ',vn:'dàn loa, dàn âm thanh',hv:'âm hưởng',em:'🔊',lesson:1,
   explain:['Thiết bị phát âm thanh (loa, bộ khuếch đại…): 一套音响, 家庭音响, 音响效果. Lượng từ: 套, 台, 个.','Nghĩa gốc: âm thanh, tiếng vang (音响效果 = hiệu quả âm thanh). Chú ý "âm hưởng" trong tiếng Việt là dư âm — khác nghĩa; 音响 thường là dàn loa.'],
   usage:'一套 + 音响; 音响 + 效果 / 设备; 打开 / 关掉 + 音响; 音响的声音.',
   collo:['你中意的音响','一套音响','音响效果','音响设备'],
   ex_zh:'还是想买你中意的音响、收音机……',ex_py:'Háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, shōuyīnjī……',ex_vn:'Hay muốn mua chiếc loa, chiếc radio mà bạn ưng ý…',
   exList:[
     {zh:'你想买中意的音响，只要把照片发送到专门的网站，就能得到反馈。',py:'Nǐ xiǎng mǎi zhòngyì de yīnxiǎng, zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì.',vn:'Bạn muốn mua dàn loa ưng ý, chỉ cần gửi ảnh lên trang web chuyên dụng là sẽ nhận được phản hồi.'},
     {zh:'这个电影院的音响效果特别好，看动作片很过瘾。',py:'Zhège diànyǐngyuàn de yīnxiǎng xiàoguǒ tèbié hǎo, kàn dòngzuòpiàn hěn guòyǐn.',vn:'Âm thanh của rạp chiếu phim này đặc biệt tốt, xem phim hành động rất đã.'},
     {zh:'邻居把音响开得太大了，吵得我没法儿复习。',py:'Línjū bǎ yīnxiǎng kāi de tài dà le, chǎo de wǒ méi fǎr fùxí.',vn:'Hàng xóm mở loa to quá, ồn đến mức tôi không ôn bài được.'}
   ],
   colloFull:[
     {zh:'你中意的音响',py:'nǐ zhòngyì de yīnxiǎng',vn:'dàn loa bạn ưng ý'},
     {zh:'一套音响',py:'yí tào yīnxiǎng',vn:'một dàn loa'},
     {zh:'音响效果',py:'yīnxiǎng xiàoguǒ',vn:'hiệu quả âm thanh'},
     {zh:'音响设备',py:'yīnxiǎng shèbèi',vn:'thiết bị âm thanh'},
     {zh:'把音响开得太大',py:'bǎ yīnxiǎng kāi de tài dà',vn:'mở loa quá to'}
   ],
   patterns:[
     {s:'一套 + 音响 / 音响设备',m:'Một dàn loa / bộ thiết bị âm thanh'},
     {s:'把音响 + 开 / 调 + 得 + Adj',m:'Mở / chỉnh loa …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã khuya rồi, cậu vặn nhỏ loa lại đi, kẻo làm phiền hàng xóm.',answer:'已经很晚了，你把音响调小一点儿，以免影响邻居。',answerPy:'Yǐjīng hěn wǎn le, nǐ bǎ yīnxiǎng tiáo xiǎo yìdiǎnr, yǐmiǎn yǐngxiǎng línjū.',
      note:'Câu 把 + V + Adj + 一点儿; 以免 (từ mới) đứng đầu vế sau.',pair:'以免'},
     {promptLang:'vi',prompt:'Hiệu quả âm thanh của dàn loa này tốt hơn dàn cũ nhiều.',answer:'这套音响的效果比原来那套好多了。',answerPy:'Zhè tào yīnxiǎng de xiàoguǒ bǐ yuánlái nà tào hǎo duō le.',
      note:'比……Adj + 多了 (ôn HSK 4).',pair:'比……多了'}
   ]},

  {n:41,zh:'收音机',py:'shōuyīnjī',pos:'Danh từ',vn:'máy thu thanh, máy radio',hv:'thu âm cơ',em:'📻',lesson:1,
   explain:['Máy thu sóng phát thanh để nghe đài: 收 = thu, 音 = âm, 机 = máy. Lượng từ: 台, 个.','Hay đi với 听收音机, 打开收音机, 调频道 (dò kênh). Ngày nay ít dùng, nhưng vẫn gắn với ký ức của người lớn tuổi.'],
   usage:'一台 + 收音机; 听 / 打开 / 关上 + 收音机; 收音机里 + 播放 / 传来.',
   collo:['一台收音机','听收音机','打开收音机','收音机里传来'],
   ex_zh:'还是想买你中意的音响、收音机、水龙头……',ex_py:'Háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, shōuyīnjī, shuǐlóngtóu……',ex_vn:'Hay muốn mua chiếc loa, chiếc radio, vòi nước mà bạn ưng ý…',
   exList:[
     {zh:'不管是想买音响、收音机，还是想买水龙头，只要发送照片就能得到反馈。',py:'Bùguǎn shì xiǎng mǎi yīnxiǎng, shōuyīnjī, háishi xiǎng mǎi shuǐlóngtóu, zhǐyào fāsòng zhàopiàn jiù néng dédào fǎnkuì.',vn:'Dù muốn mua loa, radio hay vòi nước, chỉ cần gửi ảnh là nhận được phản hồi.'},
     {zh:'爷爷每天早上都要打开收音机，一边听新闻一边喝茶。',py:'Yéye měitiān zǎoshang dōu yào dǎkāi shōuyīnjī, yìbiān tīng xīnwén yìbiān hē chá.',vn:'Sáng nào ông nội cũng bật radio, vừa nghe thời sự vừa uống trà.'},
     {zh:'突然，收音机里传来了一首熟悉的老歌。',py:'Tūrán, shōuyīnjī li chuánláile yì shǒu shúxī de lǎo gē.',vn:'Bỗng nhiên, từ radio vang lên một bài hát cũ quen thuộc.'}
   ],
   colloFull:[
     {zh:'一台收音机',py:'yì tái shōuyīnjī',vn:'một chiếc radio'},
     {zh:'听收音机',py:'tīng shōuyīnjī',vn:'nghe radio'},
     {zh:'打开收音机',py:'dǎkāi shōuyīnjī',vn:'bật radio'},
     {zh:'收音机里传来',py:'shōuyīnjī li chuánlái',vn:'từ radio vang lên'},
     {zh:'老式收音机',py:'lǎoshì shōuyīnjī',vn:'radio kiểu cũ'}
   ],
   patterns:[
     {s:'打开 / 关上 + 收音机',m:'Bật / tắt radio'},
     {s:'收音机里 + 传来 / 播放 + N',m:'Từ radio vang lên / phát …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi trước nhà ông bà chỉ có một chiếc radio, cả nhà quây quần nghe cùng nhau.',answer:'以前爷爷奶奶家只有一台收音机，全家人围在一起听。',answerPy:'Yǐqián yéye nǎinai jiā zhǐyǒu yì tái shōuyīnjī, quánjiārén wéi zài yìqǐ tīng.',
      note:'只有 + số lượng; 围在一起 + V (liên động).',pair:'V在一起'},
     {promptLang:'vi',prompt:'Ông nội vừa nghe radio vừa tưới hoa ngoài ban công.',answer:'爷爷一边听收音机，一边在阳台上浇花。',answerPy:'Yéye yìbiān tīng shōuyīnjī, yìbiān zài yángtái shang jiāo huā.',
      note:'一边……一边…… hai hành động đồng thời (ôn HSK 3).',pair:'一边……一边……'}
   ]},

  {n:42,zh:'水龙头',py:'shuǐlóngtóu',pos:'Danh từ',vn:'vòi nước',hv:'thuỷ long đầu',em:'🚰',lesson:1,
   explain:['Van, vòi để mở / khoá nước: 打开 / 关上水龙头, 水龙头漏水 (vòi rỉ nước). Nghĩa đen: "đầu con rồng nước".','Lượng từ: 个. Chú ý cách nói tiết kiệm nước: 随手关紧水龙头 (tiện tay khoá chặt vòi nước).'],
   usage:'打开 / 关上 / 关紧 + 水龙头; 水龙头 + 漏水 / 坏了; 换 + 水龙头.',
   collo:['关紧水龙头','打开水龙头','水龙头漏水','换水龙头'],
   ex_zh:'还是想买你中意的音响、收音机、水龙头……',ex_py:'Háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, shōuyīnjī, shuǐlóngtóu……',ex_vn:'Hay muốn mua chiếc loa, radio, vòi nước mà bạn ưng ý…',
   exList:[
     {zh:'不管你想买收音机、水龙头，还是只买一个插座，都能在网上查到哪家店有售。',py:'Bùguǎn nǐ xiǎng mǎi shōuyīnjī, shuǐlóngtóu, háishi zhǐ mǎi yí ge chāzuò, dōu néng zài wǎngshàng chádào nǎ jiā diàn yǒu shòu.',vn:'Dù bạn muốn mua radio, vòi nước hay chỉ một chiếc ổ cắm, đều tra được trên mạng xem cửa hàng nào có bán.'},
     {zh:'洗完手记得随手关紧水龙头，节约用水。',py:'Xǐwán shǒu jìde suíshǒu guānjǐn shuǐlóngtóu, jiéyuē yòng shuǐ.',vn:'Rửa tay xong nhớ tiện tay khoá chặt vòi nước, tiết kiệm nước.'},
     {zh:'厨房的水龙头一直漏水，得赶快找人来修。',py:'Chúfáng de shuǐlóngtóu yìzhí lòu shuǐ, děi gǎnkuài zhǎo rén lái xiū.',vn:'Vòi nước trong bếp cứ rỉ nước mãi, phải mau tìm người đến sửa.'}
   ],
   colloFull:[
     {zh:'关紧水龙头',py:'guānjǐn shuǐlóngtóu',vn:'khoá chặt vòi nước'},
     {zh:'打开水龙头',py:'dǎkāi shuǐlóngtóu',vn:'mở vòi nước'},
     {zh:'水龙头漏水',py:'shuǐlóngtóu lòu shuǐ',vn:'vòi nước bị rỉ'},
     {zh:'换水龙头',py:'huàn shuǐlóngtóu',vn:'thay vòi nước'},
     {zh:'随手关水龙头',py:'suíshǒu guān shuǐlóngtóu',vn:'tiện tay khoá vòi nước'}
   ],
   patterns:[
     {s:'打开 / 关紧 + 水龙头',m:'Mở / khoá chặt vòi nước'},
     {s:'水龙头 + 漏水 / 坏了',m:'Vòi nước rỉ / hỏng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu vòi nước không khoá chặt, mỗi ngày sẽ lãng phí rất nhiều nước.',answer:'如果水龙头没关紧，每天会浪费很多水。',answerPy:'Rúguǒ shuǐlóngtóu méi guānjǐn, měitiān huì làngfèi hěn duō shuǐ.',
      note:'如果…… giả thiết; bổ ngữ kết quả 紧 (关紧), phủ định bằng 没.',pair:'V + 结果补语'},
     {promptLang:'vi',prompt:'Vòi nước hỏng đã một tuần mà vẫn chưa có ai đến sửa.',answer:'水龙头坏了一个星期了，还没有人来修。',answerPy:'Shuǐlóngtóu huàile yí ge xīngqī le, hái méiyǒu rén lái xiū.',
      note:'V了 + thời lượng + 了 (trạng thái kéo dài đến nay); 还没有…….',pair:'V了……了'}
   ]},

  {n:43,zh:'枚',py:'méi',pos:'Lượng từ',vn:'cái, tấm, chiếc (vật nhỏ, tròn hoặc dẹt)',hv:'mai',em:'🪙',lesson:1,
   explain:['Lượng từ cho vật nhỏ, thường tròn hoặc dẹt: 一枚纽扣儿, 一枚硬币 (đồng xu), 一枚戒指 (nhẫn), 一枚奖牌 (huy chương), 一枚邮票 (tem).','Văn viết hơn 个. Chú ý: 枚 dùng được cho huy chương (一枚金牌), rất hay gặp trong tin tức thể thao.'],
   usage:'数词 + 枚 + 纽扣儿 / 硬币 / 戒指 / 奖牌 / 邮票; 几枚.',
   collo:['几枚纽扣儿','一枚硬币','一枚金牌','一枚戒指'],
   ex_zh:'或者只是几枚纽扣儿、一个插座。',ex_py:'Huòzhě zhǐ shì jǐ méi niǔkòur, yí ge chāzuò.',ex_vn:'Hoặc chỉ là vài chiếc cúc áo, một cái ổ cắm.',
   exList:[
     {zh:'不管你想买的是音响、水龙头，或者只是几枚纽扣儿，都能得到反馈。',py:'Bùguǎn nǐ xiǎng mǎi de shì yīnxiǎng, shuǐlóngtóu, huòzhě zhǐ shì jǐ méi niǔkòur, dōu néng dédào fǎnkuì.',vn:'Dù thứ bạn muốn mua là dàn loa, vòi nước hay chỉ vài chiếc cúc áo, đều nhận được phản hồi.'},
     {zh:'在这届运动会上，他一个人就拿了三枚金牌。',py:'Zài zhè jiè yùndònghuì shang, tā yí ge rén jiù nále sān méi jīnpái.',vn:'Tại đại hội thể thao lần này, một mình anh ấy đã giành được ba tấm huy chương vàng.'},
     {zh:'他往许愿池里扔了一枚硬币，许了个愿。',py:'Tā wǎng xǔyuànchí li rēngle yì méi yìngbì, xǔle ge yuàn.',vn:'Anh ấy ném một đồng xu vào hồ ước nguyện rồi ước một điều.'}
   ],
   colloFull:[
     {zh:'几枚纽扣儿',py:'jǐ méi niǔkòur',vn:'vài chiếc cúc áo'},
     {zh:'一枚硬币',py:'yì méi yìngbì',vn:'một đồng xu'},
     {zh:'一枚金牌',py:'yì méi jīnpái',vn:'một tấm huy chương vàng'},
     {zh:'一枚戒指',py:'yì méi jièzhi',vn:'một chiếc nhẫn'},
     {zh:'一枚邮票',py:'yì méi yóupiào',vn:'một con tem'}
   ],
   patterns:[
     {s:'số + 枚 + 纽扣儿 / 硬币 / 戒指',m:'… chiếc cúc / đồng xu / chiếc nhẫn'},
     {s:'获得 / 拿了 + số + 枚 + 奖牌',m:'Giành … tấm huy chương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội tuyển nước ta tổng cộng giành được năm tấm huy chương vàng, nhiều hơn kỳ trước hai tấm.',answer:'我国代表队一共获得了五枚金牌，比上届多了两枚。',answerPy:'Wǒ guó dàibiǎoduì yígòng huòdéle wǔ méi jīnpái, bǐ shàng jiè duōle liǎng méi.',
      note:'比……多了 + số lượng (ôn HSK 4); lượng từ 届 = kỳ, khoá.',pair:'比……多 + 数量'},
     {promptLang:'vi',prompt:'Chiếc nhẫn này tuy không đắt, nhưng đối với bà nội lại vô cùng quý giá.',answer:'这枚戒指虽然不贵，但对奶奶来说却非常珍贵。',answerPy:'Zhè méi jièzhi suīrán bú guì, dàn duì nǎinai lái shuō què fēicháng zhēnguì.',
      note:'对……来说 (ôn HSK 4); 但……却…… nhấn mạnh tương phản.',pair:'对……来说'}
   ]},

  {n:44,zh:'纽扣儿',py:'niǔkòur',pos:'Danh từ',vn:'cúc áo, nút áo',hv:'nữu khấu nhi',em:'🔘',lesson:1,
   explain:['Cúc áo, khuy áo: 扣纽扣儿 (cài cúc), 解开纽扣儿 (cởi cúc), 掉了一颗纽扣儿 (rơi một chiếc cúc). Cũng nói 扣子 (khẩu ngữ).','Lượng từ: 颗, 个, 枚. Thành ngữ: "第一颗纽扣儿扣错了，后面就全错了" — ví việc khởi đầu quan trọng.'],
   usage:'扣 / 解开 + 纽扣儿; 掉了 / 缝上 + 一颗纽扣儿; 几枚纽扣儿.',
   collo:['几枚纽扣儿','扣纽扣儿','掉了一颗纽扣儿','缝纽扣儿'],
   ex_zh:'或者只是几枚纽扣儿、一个插座……',ex_py:'Huòzhě zhǐ shì jǐ méi niǔkòur, yí ge chāzuò……',ex_vn:'Hoặc chỉ là vài chiếc cúc áo, một chiếc ổ cắm…',
   exList:[
     {zh:'哪怕你只是想买几枚纽扣儿、一个插座，也能在网上查到哪家店有售。',py:'Nǎpà nǐ zhǐ shì xiǎng mǎi jǐ méi niǔkòur, yí ge chāzuò, yě néng zài wǎngshàng chádào nǎ jiā diàn yǒu shòu.',vn:'Dù bạn chỉ muốn mua vài chiếc cúc áo, một chiếc ổ cắm, cũng tra được trên mạng xem cửa hàng nào có bán.'},
     {zh:'我的外套掉了一颗纽扣儿，妈妈帮我缝上了。',py:'Wǒ de wàitào diàole yì kē niǔkòur, māma bāng wǒ féngshang le.',vn:'Áo khoác của tôi rơi mất một chiếc cúc, mẹ đã khâu lại giúp tôi.'},
     {zh:'人生的第一颗纽扣儿一定要扣好。',py:'Rénshēng de dì-yī kē niǔkòur yídìng yào kòuhǎo.',vn:'Chiếc cúc đầu tiên của đời người nhất định phải cài cho đúng (khởi đầu phải đúng đắn).'}
   ],
   colloFull:[
     {zh:'几枚纽扣儿',py:'jǐ méi niǔkòur',vn:'vài chiếc cúc áo'},
     {zh:'扣纽扣儿',py:'kòu niǔkòur',vn:'cài cúc'},
     {zh:'掉了一颗纽扣儿',py:'diàole yì kē niǔkòur',vn:'rơi mất một chiếc cúc'},
     {zh:'缝纽扣儿',py:'féng niǔkòur',vn:'khâu cúc'},
     {zh:'解开纽扣儿',py:'jiěkāi niǔkòur',vn:'cởi cúc'}
   ],
   patterns:[
     {s:'扣上 / 解开 + 纽扣儿',m:'Cài / cởi cúc'},
     {s:'掉了 / 缝上 + 一颗纽扣儿',m:'Rơi / khâu một chiếc cúc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vội quá, đến cúc áo cũng cài lệch.',answer:'他太着急了，连纽扣儿都扣错了。',answerPy:'Tā tài zháojí le, lián niǔkòur dōu kòucuò le.',
      note:'连……都…… nhấn mạnh (ôn HSK 4); bổ ngữ kết quả 错.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chiếc cúc này rơi mất rồi, cậu có thể khâu giúp tôi được không?',answer:'这颗纽扣儿掉了，你能帮我缝上吗？',answerPy:'Zhè kē niǔkòur diào le, nǐ néng bāng wǒ féngshang ma?',
      note:'Bổ ngữ xu hướng 上 (gắn vào); 帮 + người + V.',pair:'V上'}
   ]},

  {n:45,zh:'插座',py:'chāzuò',pos:'Danh từ',vn:'ổ điện, ổ cắm',hv:'sáp toạ',em:'🔌',lesson:1,
   explain:['Thiết bị gắn trên tường hoặc dây nối để cắm phích điện: 墙上的插座, 多孔插座 (ổ nhiều lỗ), 插座没电. 插 = cắm, 座 = đế.','Phân biệt: 插头 (phích cắm, đầu cắm) cắm vào 插座 (ổ cắm). Lượng từ: 个.'],
   usage:'一个 + 插座; 把插头插进插座; 插座 + 没电 / 坏了; 墙上的插座.',
   collo:['一个插座','墙上的插座','插座没电','多孔插座'],
   ex_zh:'或者只是几枚纽扣儿、一个插座……',ex_py:'Huòzhě zhǐ shì jǐ méi niǔkòur, yí ge chāzuò……',ex_vn:'Hoặc chỉ là vài chiếc cúc áo, một cái ổ cắm…',
   exList:[
     {zh:'不管你想买的是水龙头、几枚纽扣儿，还是一个插座，只要发送照片，就能得到反馈。',py:'Bùguǎn nǐ xiǎng mǎi de shì shuǐlóngtóu, jǐ méi niǔkòur, háishi yí ge chāzuò, zhǐyào fāsòng zhàopiàn, jiù néng dédào fǎnkuì.',vn:'Dù thứ bạn muốn mua là vòi nước, vài chiếc cúc hay một ổ cắm, chỉ cần gửi ảnh là nhận được phản hồi.'},
     {zh:'宿舍里只有一个插座，大家只好轮流给手机充电。',py:'Sùshè li zhǐyǒu yí ge chāzuò, dàjiā zhǐhǎo lúnliú gěi shǒujī chōngdiàn.',vn:'Trong ký túc xá chỉ có một ổ cắm, mọi người đành thay phiên nhau sạc điện thoại.'},
     {zh:'家里有小孩子，插座最好装上保护盖，以免发生危险。',py:'Jiā li yǒu xiǎo háizi, chāzuò zuìhǎo zhuāngshang bǎohùgài, yǐmiǎn fāshēng wēixiǎn.',vn:'Nhà có trẻ nhỏ thì ổ cắm tốt nhất nên lắp nắp bảo vệ, để tránh xảy ra nguy hiểm.'}
   ],
   colloFull:[
     {zh:'一个插座',py:'yí ge chāzuò',vn:'một cái ổ cắm'},
     {zh:'墙上的插座',py:'qiáng shang de chāzuò',vn:'ổ cắm trên tường'},
     {zh:'插座没电',py:'chāzuò méi diàn',vn:'ổ cắm không có điện'},
     {zh:'多孔插座',py:'duō kǒng chāzuò',vn:'ổ cắm nhiều lỗ'},
     {zh:'插进插座',py:'chājìn chāzuò',vn:'cắm vào ổ'}
   ],
   patterns:[
     {s:'把插头 + 插进 + 插座',m:'Cắm phích vào ổ'},
     {s:'插座 + 没电 / 坏了',m:'Ổ cắm không có điện / hỏng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy tính không lên nguồn, hoá ra là ổ cắm không có điện.',answer:'电脑开不了机，原来是插座没电了。',answerPy:'Diànnǎo kāi bu liǎo jī, yuánlái shì chāzuò méi diàn le.',
      note:'原来 = hoá ra (phát hiện nguyên nhân, ôn HSK 4); V不了.',pair:'原来'},
     {promptLang:'vi',prompt:'Đi ngủ trước hãy nhớ rút phích cắm ra khỏi ổ điện.',answer:'睡觉前记得把插头从插座上拔下来。',answerPy:'Shuìjiào qián jìde bǎ chātóu cóng chāzuò shang bá xiàlái.',
      note:'Câu 把 + 从……上 + V下来 (bổ ngữ xu hướng kép).',pair:'V下来'}
   ]},

  {n:46,zh:'勘探',py:'kāntàn',pos:'Động từ',vn:'thăm dò (để tìm quặng, khoáng sản)',hv:'khám thám',em:'⛏️',lesson:1,
   explain:['Khảo sát, thăm dò địa chất để tìm và xác định trữ lượng khoáng sản, dầu mỏ…: 勘探矿产, 石油勘探, 勘探队. 勘 = khảo sát, 探 = dò tìm.','Từ chuyên ngành, văn viết. Gần 考察 (khảo sát nói chung, ôn HSK 6 bài 14), nhưng 勘探 chuyên về địa chất, khoáng sản.'],
   usage:'勘探 + 矿产 / 石油 / 天然气; 勘探 + 工具 / 队 / 工作; 进行勘探.',
   collo:['勘探矿产','勘探工具','石油勘探','勘探队'],
   ex_zh:'再或者是勘探矿产的工具，你只要把照片发送到专门的网站，就能得到反馈。',ex_py:'Zài huòzhě shì kāntàn kuàngchǎn de gōngjù, nǐ zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì.',ex_vn:'Hoặc nữa là dụng cụ thăm dò khoáng sản, bạn chỉ cần gửi ảnh lên trang web chuyên dụng là sẽ nhận được phản hồi.',
   exList:[
     {zh:'再或者是勘探矿产的工具，你只要把照片发送到专门的网站，就能得到反馈。',py:'Zài huòzhě shì kāntàn kuàngchǎn de gōngjù, nǐ zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì.',vn:'Hoặc nữa là dụng cụ thăm dò khoáng sản, bạn chỉ cần gửi ảnh lên trang web chuyên dụng là nhận được phản hồi.'},
     {zh:'勘探队在这片沙漠里工作了三年，终于找到了石油。',py:'Kāntànduì zài zhè piàn shāmò li gōngzuòle sān nián, zhōngyú zhǎodàole shíyóu.',vn:'Đội thăm dò làm việc ở vùng sa mạc này ba năm, cuối cùng đã tìm thấy dầu mỏ.'},
     {zh:'为了勘探矿产，他们走遍了附近的每一座山。',py:'Wèile kāntàn kuàngchǎn, tāmen zǒubiànle fùjìn de měi yí zuò shān.',vn:'Để thăm dò khoáng sản, họ đã đi khắp mọi ngọn núi quanh đó.'}
   ],
   colloFull:[
     {zh:'勘探矿产',py:'kāntàn kuàngchǎn',vn:'thăm dò khoáng sản'},
     {zh:'勘探工具',py:'kāntàn gōngjù',vn:'dụng cụ thăm dò'},
     {zh:'石油勘探',py:'shíyóu kāntàn',vn:'thăm dò dầu mỏ'},
     {zh:'勘探队',py:'kāntànduì',vn:'đội thăm dò'},
     {zh:'进行勘探',py:'jìnxíng kāntàn',vn:'tiến hành thăm dò'}
   ],
   patterns:[
     {s:'勘探 + 矿产 / 石油',m:'Thăm dò khoáng sản / dầu mỏ'},
     {s:'对 + nơi + 进行勘探',m:'Tiến hành thăm dò ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công việc thăm dò rất vất vả, nhưng anh ấy chưa bao giờ oán thán.',answer:'虽然勘探工作非常辛苦，但他从来没有埋怨过。',answerPy:'Suīrán kāntàn gōngzuò fēicháng xīnkǔ, dàn tā cónglái méiyǒu mányuànguo.',
      note:'从来没有 + V过 (ôn HSK 4); 埋怨 ôn HSK 6 bài 2.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Nhờ công nghệ mới, việc thăm dò khoáng sản trở nên an toàn hơn trước nhiều.',answer:'由于新技术的出现，勘探矿产变得比以前安全多了。',answerPy:'Yóuyú xīn jìshù de chūxiàn, kāntàn kuàngchǎn biàn de bǐ yǐqián ānquán duō le.',
      note:'由于…… nguyên nhân; 变得 + 比……Adj多了.',pair:'由于'}
   ]},

  {n:47,zh:'矿产',py:'kuàngchǎn',pos:'Danh từ',vn:'khoáng sản',hv:'khoáng sản',em:'💎',lesson:1,
   explain:['Tài nguyên khoáng vật có giá trị khai thác trong lòng đất: than, sắt, vàng, dầu mỏ…: 矿产资源, 丰富的矿产. 矿 = mỏ, quặng; 产 = sản vật.','Trùng khít với tiếng Việt "khoáng sản". Hay đi với 资源, 丰富, 开采 (khai thác), 勘探 (thăm dò).'],
   usage:'矿产 + 资源; 丰富的矿产; 开采 / 勘探 + 矿产.',
   collo:['矿产资源','勘探矿产','丰富的矿产','开采矿产'],
   ex_zh:'再或者是勘探矿产的工具……',ex_py:'Zài huòzhě shì kāntàn kuàngchǎn de gōngjù……',ex_vn:'Hoặc nữa là dụng cụ thăm dò khoáng sản…',
   exList:[
     {zh:'不管你想买的是生活用品，还是勘探矿产的工具，都能得到网站的反馈。',py:'Bùguǎn nǐ xiǎng mǎi de shì shēnghuó yòngpǐn, háishi kāntàn kuàngchǎn de gōngjù, dōu néng dédào wǎngzhàn de fǎnkuì.',vn:'Dù thứ bạn muốn mua là đồ dùng sinh hoạt hay dụng cụ thăm dò khoáng sản, đều nhận được phản hồi từ trang web.'},
     {zh:'这个地区矿产资源丰富，但是交通很不便利。',py:'Zhège dìqū kuàngchǎn zīyuán fēngfù, dànshì jiāotōng hěn bú biànlì.',vn:'Vùng này tài nguyên khoáng sản phong phú, nhưng giao thông rất bất tiện.'},
     {zh:'矿产是不可再生的资源，开采时必须有计划。',py:'Kuàngchǎn shì bù kě zàishēng de zīyuán, kāicǎi shí bìxū yǒu jìhuà.',vn:'Khoáng sản là tài nguyên không thể tái tạo, khi khai thác phải có kế hoạch.'}
   ],
   colloFull:[
     {zh:'矿产资源',py:'kuàngchǎn zīyuán',vn:'tài nguyên khoáng sản'},
     {zh:'勘探矿产',py:'kāntàn kuàngchǎn',vn:'thăm dò khoáng sản'},
     {zh:'丰富的矿产',py:'fēngfù de kuàngchǎn',vn:'khoáng sản phong phú'},
     {zh:'开采矿产',py:'kāicǎi kuàngchǎn',vn:'khai thác khoáng sản'},
     {zh:'保护矿产资源',py:'bǎohù kuàngchǎn zīyuán',vn:'bảo vệ tài nguyên khoáng sản'}
   ],
   patterns:[
     {s:'(地区) + 矿产资源 + 丰富',m:'(Vùng nào đó) giàu tài nguyên khoáng sản'},
     {s:'开采 / 勘探 + 矿产',m:'Khai thác / thăm dò khoáng sản'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không những khoáng sản ở đây phong phú, mà phong cảnh còn rất đẹp.',answer:'这里不但矿产丰富，而且风景也很美。',answerPy:'Zhèli búdàn kuàngchǎn fēngfù, érqiě fēngjǐng yě hěn měi.',
      note:'不但……而且……也…… (cùng chủ ngữ, 不但 đặt sau chủ ngữ).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Nếu khai thác khoáng sản bừa bãi thì môi trường ắt sẽ bị phá hoại.',answer:'如果随意开采矿产，环境势必会受到破坏。',answerPy:'Rúguǒ suíyì kāicǎi kuàngchǎn, huánjìng shìbì huì shòudào pòhuài.',
      note:'势必 = ắt sẽ (kết quả bất lợi, ôn HSK 6 bài 17); 受到破坏.',pair:'势必'}
   ]},

  {n:48,zh:'反馈',py:'fǎnkuì',pos:'Động từ / Danh từ',vn:'phản hồi',hv:'phản quỹ',em:'💬',lesson:1,
   explain:['Thông tin, ý kiến được gửi ngược trở lại cho người / nơi đã đưa ra: 得到反馈, 反馈意见, 用户反馈. Làm được cả động từ (把意见反馈给公司) lẫn danh từ.','Chữ 馈 (kuì) = biếu, đưa tặng — 反馈 = "đưa ngược lại". Âm Hán Việt "phản quỹ" ít dùng; tiếng Việt nói "phản hồi".'],
   usage:'得到 / 收到 + 反馈; 反馈 + 意见 / 信息; 把……反馈给……; 用户 / 顾客 + 反馈.',
   collo:['得到反馈','反馈意见','及时反馈','用户反馈'],
   ex_zh:'你只要把照片发送到专门的网站，就能得到反馈。',ex_py:'Nǐ zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì.',ex_vn:'Bạn chỉ cần gửi ảnh lên trang web chuyên dụng là sẽ nhận được phản hồi.',
   exList:[
     {zh:'你只要把照片发送到专门的网站，就能得到反馈：“您查询的商品在某某店有售。”',py:'Nǐ zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì: “Nín cháxún de shāngpǐn zài mǒumǒu diàn yǒu shòu.”',vn:'Bạn chỉ cần gửi ảnh lên trang web chuyên dụng là nhận được phản hồi: "Món hàng quý khách tra cứu có bán ở cửa hàng X."'},
     {zh:'整个过程是否公正合理，最后还能在电脑上看到反馈意见。',py:'Zhěnggè guòchéng shìfǒu gōngzhèng hélǐ, zuìhòu hái néng zài diànnǎo shang kàndào fǎnkuì yìjiàn.',vn:'Toàn bộ quá trình có công bằng hợp lý hay không, cuối cùng còn có thể xem ý kiến phản hồi trên máy tính.'},
     {zh:'根据用户的反馈，我们对这款软件进行了改良。',py:'Gēnjù yònghù de fǎnkuì, wǒmen duì zhè kuǎn ruǎnjiàn jìnxíngle gǎiliáng.',vn:'Dựa vào phản hồi của người dùng, chúng tôi đã cải tiến phần mềm này.'}
   ],
   colloFull:[
     {zh:'得到反馈',py:'dédào fǎnkuì',vn:'nhận được phản hồi'},
     {zh:'反馈意见',py:'fǎnkuì yìjiàn',vn:'ý kiến phản hồi'},
     {zh:'及时反馈',py:'jíshí fǎnkuì',vn:'phản hồi kịp thời'},
     {zh:'用户反馈',py:'yònghù fǎnkuì',vn:'phản hồi của người dùng'},
     {zh:'反馈给公司',py:'fǎnkuì gěi gōngsī',vn:'phản hồi cho công ty'}
   ],
   patterns:[
     {s:'得到 / 收到 + (N 的) 反馈',m:'Nhận được phản hồi (của …)'},
     {s:'把 + 意见 + 反馈给 + 人',m:'Phản hồi ý kiến cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Có ý kiến gì thì mời mọi người kịp thời phản hồi cho chúng tôi, để chúng tôi cải tiến.',answer:'有什么意见请大家及时反馈给我们，以便我们改进。',answerPy:'Yǒu shénme yìjiàn qǐng dàjiā jíshí fǎnkuì gěi wǒmen, yǐbiàn wǒmen gǎijìn.',
      note:'以便 = để tiện (mục đích tốt, ôn HSK 6 bài 16) — so với 以免 (tránh điều xấu).',pair:'以便'},
     {promptLang:'vi',prompt:'Theo phản hồi của khách hàng, món mới này không được ưa chuộng lắm.',answer:'从顾客的反馈来看，这道新菜不太受欢迎。',answerPy:'Cóng gùkè de fǎnkuì lái kàn, zhè dào xīn cài bú tài shòu huānyíng.',
      note:'从……来看 = xét từ … (ôn HSK 5); 受欢迎.',pair:'从……来看'}
   ]},

  {n:49,zh:'款式',py:'kuǎnshì',pos:'Danh từ',vn:'kiểu dáng, kiểu, mẫu mã',hv:'khoản thức',em:'👗',lesson:1,
   explain:['Kiểu dáng, mẫu thiết kế của quần áo, đồ dùng, xe cộ…: 款式新颖, 多种款式, 款式过时. Lượng từ riêng 款: 这款手机, 几款衣服.','Gần 样式 (kiểu dáng nói chung). 款式 hay dùng trong mua bán, thời trang, sản phẩm có nhiều "mẫu".'],
   usage:'多种 / 各种 + 款式; 款式 + 新颖 / 时尚 / 过时; 款式 + 供……选购.',
   collo:['多种款式','款式新颖','款式过时','款式时尚'],
   ex_zh:'那里有多种款式供您选购。',ex_py:'Nàli yǒu duō zhǒng kuǎnshì gōng nín xuǎngòu.',ex_vn:'Ở đó có nhiều kiểu dáng để quý khách chọn mua.',
   exList:[
     {zh:'“您查询的商品在某某店有售，那里有多种款式供您选购。”',py:'“Nín cháxún de shāngpǐn zài mǒumǒu diàn yǒu shòu, nàli yǒu duō zhǒng kuǎnshì gōng nín xuǎngòu.”',vn:'"Món hàng quý khách tra cứu có bán ở cửa hàng X, ở đó có nhiều kiểu dáng để quý khách chọn mua."'},
     {zh:'他嫌衣服款式过时，衣服送来以后就放在那儿，一次都没穿过。',py:'Tā xián yīfu kuǎnshì guòshí, yīfu sònglái yǐhòu jiù fàng zài nàr, yí cì dōu méi chuānguo.',vn:'Anh ấy chê kiểu quần áo lỗi mốt, quần áo mang tới rồi cứ để đó, chưa mặc lần nào.'},
     {zh:'这家店的鞋款式很多，可惜没有我的号。',py:'Zhè jiā diàn de xié kuǎnshì hěn duō, kěxī méiyǒu wǒ de hào.',vn:'Giày ở cửa hàng này rất nhiều mẫu, tiếc là không có cỡ của tôi.'}
   ],
   colloFull:[
     {zh:'多种款式',py:'duō zhǒng kuǎnshì',vn:'nhiều kiểu dáng'},
     {zh:'款式新颖',py:'kuǎnshì xīnyǐng',vn:'kiểu dáng mới lạ'},
     {zh:'款式过时',py:'kuǎnshì guòshí',vn:'kiểu dáng lỗi mốt'},
     {zh:'款式时尚',py:'kuǎnshì shíshàng',vn:'kiểu dáng thời thượng'},
     {zh:'供您选购',py:'gōng nín xuǎngòu',vn:'để quý khách chọn mua'}
   ],
   patterns:[
     {s:'有 + 多种款式 + 供 + 人 + 选购 / 选择',m:'Có nhiều mẫu cho ai lựa chọn'},
     {s:'款式 + 新颖 / 过时 / 时尚',m:'Kiểu dáng mới lạ / lỗi mốt / thời thượng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc áo này kiểu dáng hơi lỗi mốt, nhưng chất liệu thì rất tốt.',answer:'这件衣服的款式有点儿过时，不过质量挺好的。',answerPy:'Zhè jiàn yīfu de kuǎnshì yǒudiǎnr guòshí, búguò zhìliàng tǐng hǎo de.',
      note:'有点儿 + Adj (không hài lòng); 不过 = nhưng (nhẹ); 挺……的.',pair:'挺……的'},
     {promptLang:'vi',prompt:'Mẫu mã càng nhiều thì khách hàng càng khó chọn.',answer:'款式越多，顾客反而越难选择。',answerPy:'Kuǎnshì yuè duō, gùkè fǎn\'ér yuè nán xuǎnzé.',
      note:'越……越…… (ôn HSK 4); 反而 = ngược lại (trái mong đợi, ôn HSK 5).',pair:'越……越……'}
   ]},

  {n:50,zh:'关怀',py:'guānhuái',pos:'Động từ / Danh từ',vn:'quan tâm, chăm sóc (ân cần, thường từ trên xuống)',hv:'quan hoài',em:'🤗',lesson:1,
   explain:['Quan tâm, chăm lo ân cần: 对……的关怀, 关怀老人, 关怀备至. Thường dùng cho tổ chức, cấp trên, xã hội đối với người dưới, người yếu thế; sắc thái trang trọng, ấm áp.','So với 关心 (quan tâm nói chung, dùng được mọi quan hệ, cả việc — 关心国家大事): 关怀 trang trọng hơn, đối tượng thường là NGƯỜI, không nói 关怀考试成绩.'],
   usage:'对 + 人 + 的关怀; 关怀 + 老人 / 孩子 / 员工; 得到 / 感受到 + 关怀; 关怀备至.',
   collo:['对消费者的关怀','关怀老人','感受到关怀','人文关怀'],
   ex_zh:'未来商店对消费者的关怀可谓无微不至。',ex_py:'Wèilái shāngdiàn duì xiāofèizhě de guānhuái kěwèi wúwēi-búzhì.',ex_vn:'Sự quan tâm của cửa hàng tương lai đối với người tiêu dùng có thể nói là chu đáo từng li từng tí.',
   exList:[
     {zh:'未来商店对消费者的关怀可谓无微不至。',py:'Wèilái shāngdiàn duì xiāofèizhě de guānhuái kěwèi wúwēi-búzhì.',vn:'Sự quan tâm của cửa hàng tương lai đối với người tiêu dùng có thể nói là chu đáo từng li từng tí.'},
     {zh:'在老师和同学们的关怀下，她很快就适应了新学校的生活。',py:'Zài lǎoshī hé tóngxuémen de guānhuái xià, tā hěn kuài jiù shìyìngle xīn xuéxiào de shēnghuó.',vn:'Dưới sự quan tâm của thầy cô và bạn bè, cô ấy nhanh chóng thích nghi với cuộc sống ở trường mới.'},
     {zh:'社会应该多关怀那些独自生活的老人。',py:'Shèhuì yīnggāi duō guānhuái nàxiē dúzì shēnghuó de lǎorén.',vn:'Xã hội nên quan tâm nhiều hơn đến những người già sống một mình.'}
   ],
   colloFull:[
     {zh:'对消费者的关怀',py:'duì xiāofèizhě de guānhuái',vn:'sự quan tâm đối với người tiêu dùng'},
     {zh:'关怀老人',py:'guānhuái lǎorén',vn:'quan tâm người già'},
     {zh:'感受到关怀',py:'gǎnshòu dào guānhuái',vn:'cảm nhận được sự quan tâm'},
     {zh:'人文关怀',py:'rénwén guānhuái',vn:'sự quan tâm mang tính nhân văn'},
     {zh:'在……的关怀下',py:'zài …… de guānhuái xià',vn:'dưới sự quan tâm của …'}
   ],
   patterns:[
     {s:'对 + 人 + 的关怀',m:'Sự quan tâm đối với ai'},
     {s:'在 + 人 + 的关怀下，……',m:'Dưới sự quan tâm của ai, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính nhờ sự quan tâm của mọi người mà tôi mới vượt qua được quãng thời gian khó khăn nhất.',answer:'正是因为大家的关怀，我才度过了最困难的那段时间。',answerPy:'Zhèng shì yīnwèi dàjiā de guānhuái, wǒ cái dùguòle zuì kùnnan de nà duàn shíjiān.',
      note:'正是因为……才……; 度过 + thời gian.',pair:'正是因为……才……'},
     {promptLang:'vi',prompt:'Dưới sự quan tâm của công ty, những nhân viên mới rất nhanh đã hoà nhập với tập thể.',answer:'在公司的关怀下，新员工们很快就融入了集体。',answerPy:'Zài gōngsī de guānhuái xià, xīn yuángōngmen hěn kuài jiù róngrùle jítǐ.',
      note:'在……下 điều kiện, hoàn cảnh (ôn HSK 5); 很快就…….',pair:'在……下'}
   ]},

  {n:51,zh:'无微不至',py:'wúwēi-búzhì',pos:'Thành ngữ',vn:'tỉ mỉ chu đáo, từng li từng tí',hv:'vô vi bất chí',em:'💝',lesson:1,
   explain:['Nghĩa đen: không có chỗ nhỏ nhặt nào mà không đến (微 = nhỏ, 至 = đến). Nghĩa dùng: quan tâm, chăm sóc cực kỳ chu đáo, chi tiết tới từng điều nhỏ.','Hay đi với 关怀 / 照顾 / 关心 / 服务: 无微不至的关怀, 照顾得无微不至. Làm định ngữ, vị ngữ, bổ ngữ trình độ.'],
   usage:'无微不至的 + 关怀 / 照顾 / 服务; (关怀) + 可谓无微不至; V + 得 + 无微不至.',
   collo:['无微不至的关怀','照顾得无微不至','可谓无微不至','无微不至的服务'],
   ex_zh:'未来商店对消费者的关怀可谓无微不至。',ex_py:'Wèilái shāngdiàn duì xiāofèizhě de guānhuái kěwèi wúwēi-búzhì.',ex_vn:'Sự quan tâm của cửa hàng tương lai đối với người tiêu dùng có thể nói là chu đáo từng li từng tí.',
   exList:[
     {zh:'未来商店对消费者的关怀可谓无微不至。',py:'Wèilái shāngdiàn duì xiāofèizhě de guānhuái kěwèi wúwēi-búzhì.',vn:'Sự quan tâm của cửa hàng tương lai với người tiêu dùng có thể nói là chu đáo từng li từng tí.'},
     {zh:'他们无微不至的服务让顾客有回家的感觉。',py:'Tāmen wúwēi-búzhì de fúwù ràng gùkè yǒu huí jiā de gǎnjué.',vn:'Sự phục vụ chu đáo từng li từng tí của họ khiến khách hàng có cảm giác như về nhà.'},
     {zh:'我生病住院的那些天，妈妈把我照顾得无微不至。',py:'Wǒ shēngbìng zhùyuàn de nàxiē tiān, māma bǎ wǒ zhàogù de wúwēi-búzhì.',vn:'Những ngày tôi ốm nằm viện, mẹ chăm sóc tôi chu đáo từng li từng tí.'}
   ],
   colloFull:[
     {zh:'无微不至的关怀',py:'wúwēi-búzhì de guānhuái',vn:'sự quan tâm chu đáo từng li từng tí'},
     {zh:'照顾得无微不至',py:'zhàogù de wúwēi-búzhì',vn:'chăm sóc hết sức chu đáo'},
     {zh:'可谓无微不至',py:'kěwèi wúwēi-búzhì',vn:'có thể nói là chu đáo từng li'},
     {zh:'无微不至的服务',py:'wúwēi-búzhì de fúwù',vn:'dịch vụ chu đáo tận tình'},
     {zh:'关心得无微不至',py:'guānxīn de wúwēi-búzhì',vn:'quan tâm hết mực'}
   ],
   patterns:[
     {s:'无微不至的 + 关怀 / 照顾 / 服务',m:'Sự quan tâm / chăm sóc / phục vụ chu đáo'},
     {s:'把 + 人 + 照顾得无微不至',m:'Chăm sóc ai hết sức chu đáo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù y tá chăm sóc bà chu đáo từng li từng tí, bà vẫn nhớ nhà.',answer:'尽管护士对奶奶照顾得无微不至，奶奶还是很想家。',answerPy:'Jǐnguǎn hùshi duì nǎinai zhàogù de wúwēi-búzhì, nǎinai háishi hěn xiǎng jiā.',
      note:'尽管……还是……; bổ ngữ trình độ V得 + thành ngữ.',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Khách sạn này nổi tiếng nhờ dịch vụ chu đáo từng li từng tí.',answer:'这家酒店以无微不至的服务而出名。',answerPy:'Zhè jiā jiǔdiàn yǐ wúwēi-búzhì de fúwù ér chūmíng.',
      note:'以……而…… = nhờ / vì … mà … (văn viết, ôn HSK 5).',pair:'以……而……'}
   ]},

  {n:52,zh:'需求',py:'xūqiú',pos:'Danh từ',vn:'nhu cầu',hv:'nhu cầu',em:'🛍️',lesson:1,
   explain:['Sự đòi hỏi, mong muốn cần được thoả mãn (đặc biệt về hàng hoá, dịch vụ trên thị trường): 消费者的需求, 市场需求, 满足需求.','Chỉ là DANH TỪ. Khác 需要 (vừa là động từ "cần", vừa là danh từ): không nói 我需求你的帮助. Trùng khít với tiếng Việt "nhu cầu".'],
   usage:'满足 / 把握 / 了解 + 需求; 市场 / 消费者 / 客户 + 需求; 需求 + 增加 / 减少 / 大.',
   collo:['把握消费者的需求','满足需求','市场需求','多方面的需求'],
   ex_zh:'他们根据消费者的个人生活习惯，把握消费者的需求。',ex_py:'Tāmen gēnjù xiāofèizhě de gèrén shēnghuó xíguàn, bǎwò xiāofèizhě de xūqiú.',ex_vn:'Họ căn cứ vào thói quen sinh hoạt cá nhân của người tiêu dùng để nắm bắt nhu cầu của người tiêu dùng.',
   exList:[
     {zh:'他们根据消费者的个人生活习惯，把握消费者的需求。',py:'Tāmen gēnjù xiāofèizhě de gèrén shēnghuó xíguàn, bǎwò xiāofèizhě de xūqiú.',vn:'Họ căn cứ vào thói quen sinh hoạt cá nhân của người tiêu dùng để nắm bắt nhu cầu của họ.'},
     {zh:'这台电脑性能很好，满足了我多方面的需求。',py:'Zhè tái diànnǎo xìngnéng hěn hǎo, mǎnzúle wǒ duō fāngmiàn de xūqiú.',vn:'Chiếc máy tính này tính năng rất tốt, đáp ứng nhu cầu nhiều mặt của tôi.'},
     {zh:'随着老人越来越多，养老服务的需求也急剧增加。',py:'Suízhe lǎorén yuè lái yuè duō, yǎnglǎo fúwù de xūqiú yě jíjù zēngjiā.',vn:'Theo đà người già ngày càng nhiều, nhu cầu về dịch vụ dưỡng lão cũng tăng vọt.'}
   ],
   colloFull:[
     {zh:'把握消费者的需求',py:'bǎwò xiāofèizhě de xūqiú',vn:'nắm bắt nhu cầu người tiêu dùng'},
     {zh:'满足需求',py:'mǎnzú xūqiú',vn:'đáp ứng nhu cầu'},
     {zh:'市场需求',py:'shìchǎng xūqiú',vn:'nhu cầu thị trường'},
     {zh:'多方面的需求',py:'duō fāngmiàn de xūqiú',vn:'nhu cầu nhiều mặt'},
     {zh:'需求增加',py:'xūqiú zēngjiā',vn:'nhu cầu tăng'}
   ],
   patterns:[
     {s:'满足 / 把握 + (人的) 需求',m:'Đáp ứng / nắm bắt nhu cầu (của ai)'},
     {s:'N + 的需求 + 增加 / 减少',m:'Nhu cầu về … tăng / giảm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có hiểu rõ nhu cầu của khách hàng thì mới làm ăn tốt được.',answer:'只有了解客户的需求，才能把生意做好。',answerPy:'Zhǐyǒu liǎojiě kèhù de xūqiú, cái néng bǎ shēngyi zuòhǎo.',
      note:'只有……才…… điều kiện duy nhất; 把生意做好.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Sản phẩm này bán chạy như vậy là vì nó đáp ứng được nhu cầu của người trẻ.',answer:'这种产品之所以这么畅销，是因为它满足了年轻人的需求。',answerPy:'Zhè zhǒng chǎnpǐn zhīsuǒyǐ zhème chàngxiāo, shì yīnwèi tā mǎnzúle niánqīngrén de xūqiú.',
      note:'之所以……是因为…… (ôn HSK 5); 畅销 ôn HSK 6 bài 16.',pair:'之所以……是因为……'}
   ]},

  {n:53,zh:'主导',py:'zhǔdǎo',pos:'Danh từ / Động từ',vn:'vai trò chủ đạo; người / yếu tố giữ vai trò chủ đạo; chi phối',hv:'chủ đạo',em:'🧭',lesson:1,
   explain:['Danh từ: cái / người giữ vai trò dẫn dắt, quyết định toàn cục: 以消费者为主导 = lấy người tiêu dùng làm chủ đạo. Hay đi với khuôn 以……为主导 (ôn 以……为…… HSK 6 bài 11).','Động từ / tính từ: dẫn dắt, chi phối — 主导地位 (vị trí chủ đạo), 主导作用, 由……主导. Tiếng Việt "chủ đạo" trùng nghĩa.'],
   usage:'以……为主导; 占 + 主导地位; 起 + 主导作用; 由 + 人 + 主导.',
   collo:['以消费者为主导','主导地位','主导作用','占主导'],
   ex_zh:'将商店变为以消费者为主导的店铺。',ex_py:'Jiāng shāngdiàn biànwéi yǐ xiāofèizhě wéi zhǔdǎo de diànpù.',ex_vn:'Biến cửa hàng thành cửa hiệu lấy người tiêu dùng làm chủ đạo.',
   exList:[
     {zh:'他们把握消费者的需求，将商店变为以消费者为主导的店铺。',py:'Tāmen bǎwò xiāofèizhě de xūqiú, jiāng shāngdiàn biànwéi yǐ xiāofèizhě wéi zhǔdǎo de diànpù.',vn:'Họ nắm bắt nhu cầu người tiêu dùng, biến cửa hàng thành cửa hiệu lấy người tiêu dùng làm chủ đạo.'},
     {zh:'在这次讨论中，学生是主导，老师只是在旁边引导。',py:'Zài zhè cì tǎolùn zhōng, xuésheng shì zhǔdǎo, lǎoshī zhǐ shì zài pángbiān yǐndǎo.',vn:'Trong buổi thảo luận này, học sinh giữ vai trò chủ đạo, giáo viên chỉ hướng dẫn bên cạnh.'},
     {zh:'网络购物已经在年轻人的消费方式中占了主导地位。',py:'Wǎngluò gòuwù yǐjīng zài niánqīngrén de xiāofèi fāngshì zhōng zhànle zhǔdǎo dìwèi.',vn:'Mua sắm qua mạng đã chiếm vị trí chủ đạo trong cách tiêu dùng của người trẻ.'}
   ],
   colloFull:[
     {zh:'以消费者为主导',py:'yǐ xiāofèizhě wéi zhǔdǎo',vn:'lấy người tiêu dùng làm chủ đạo'},
     {zh:'主导地位',py:'zhǔdǎo dìwèi',vn:'vị trí chủ đạo'},
     {zh:'主导作用',py:'zhǔdǎo zuòyòng',vn:'vai trò chủ đạo'},
     {zh:'占主导',py:'zhàn zhǔdǎo',vn:'chiếm vai trò chủ đạo'},
     {zh:'由学生主导',py:'yóu xuésheng zhǔdǎo',vn:'do học sinh dẫn dắt'}
   ],
   patterns:[
     {s:'以 + A + 为主导',m:'Lấy A làm chủ đạo'},
     {s:'占 + 主导地位 / 起 + 主导作用',m:'Chiếm vị trí / giữ vai trò chủ đạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lớp học này lấy học sinh làm chủ đạo, vì vậy ai cũng rất tích cực.',answer:'这门课以学生为主导，因此每个人都很积极。',answerPy:'Zhè mén kè yǐ xuésheng wéi zhǔdǎo, yīncǐ měi ge rén dōu hěn jījí.',
      note:'以……为…… (ôn HSK 6 bài 11); 因此 = vì vậy (văn viết).',pair:'以……为……'},
     {promptLang:'vi',prompt:'Tuy máy móc ngày càng thông minh, nhưng con người vẫn phải giữ vai trò chủ đạo.',answer:'虽然机器越来越智能，但人还是应该起主导作用。',answerPy:'Suīrán jīqì yuè lái yuè zhìnéng, dàn rén háishi yīnggāi qǐ zhǔdǎo zuòyòng.',
      note:'虽然……但……还是……; 智能 làm tính từ (ôn HSK 6 bài 9).',pair:'虽然……但……'}
   ]},

  {n:54,zh:'兴隆',py:'xīnglóng',pos:'Tính từ',vn:'phát đạt, hưng thịnh (buôn bán)',hv:'hưng long',em:'💰',lesson:1,
   explain:['Thịnh vượng, phát đạt, dùng nhiều nhất cho việc buôn bán: 生意兴隆 (làm ăn phát đạt). Câu chúc khai trương quen thuộc: 祝您生意兴隆!','Văn viết, mang sắc thái cát tường. So với 欣欣向荣 (thịnh vượng nói chung, cả đất nước, cây cỏ): 兴隆 chủ yếu cho CỬA HÀNG, VIỆC KINH DOANH. 兴 đọc xīng (không đọc xìng).'],
   usage:'生意 + 兴隆; 祝 + 人 + 生意兴隆; 怎么能不生意兴隆呢 (câu hỏi tu từ trong bài khoá).',
   collo:['生意兴隆','祝您生意兴隆','买卖兴隆','日益兴隆'],
   ex_zh:'试想，这样的商店怎么能不生意兴隆呢！',ex_py:'Shìxiǎng, zhèyàng de shāngdiàn zěnme néng bù shēngyi xīnglóng ne!',ex_vn:'Thử nghĩ xem, một cửa hàng như vậy làm sao có thể không làm ăn phát đạt cho được!',
   exList:[
     {zh:'试想，这样的商店怎么能不生意兴隆呢！',py:'Shìxiǎng, zhèyàng de shāngdiàn zěnme néng bù shēngyi xīnglóng ne!',vn:'Thử nghĩ xem, một cửa hàng như vậy làm sao có thể không làm ăn phát đạt!'},
     {zh:'新店开张那天，朋友们都来祝他生意兴隆。',py:'Xīn diàn kāizhāng nà tiān, péngyoumen dōu lái zhù tā shēngyi xīnglóng.',vn:'Hôm cửa hàng mới khai trương, bạn bè đều đến chúc anh ấy buôn bán phát đạt.'},
     {zh:'这家饭馆的菜又好吃又实惠，所以生意一直很兴隆。',py:'Zhè jiā fànguǎn de cài yòu hǎochī yòu shíhuì, suǒyǐ shēngyi yìzhí hěn xīnglóng.',vn:'Món ăn ở quán này vừa ngon vừa đáng tiền, nên việc buôn bán luôn rất phát đạt.'}
   ],
   colloFull:[
     {zh:'生意兴隆',py:'shēngyi xīnglóng',vn:'làm ăn phát đạt'},
     {zh:'祝您生意兴隆',py:'zhù nín shēngyi xīnglóng',vn:'chúc quý vị buôn bán phát đạt'},
     {zh:'买卖兴隆',py:'mǎimai xīnglóng',vn:'mua bán thịnh vượng'},
     {zh:'日益兴隆',py:'rìyì xīnglóng',vn:'ngày càng hưng thịnh'},
     {zh:'生意一直很兴隆',py:'shēngyi yìzhí hěn xīnglóng',vn:'làm ăn luôn phát đạt'}
   ],
   patterns:[
     {s:'生意 / 买卖 + 兴隆',m:'Làm ăn phát đạt'},
     {s:'怎么能不 + 生意兴隆呢',m:'Sao có thể không phát đạt được (câu hỏi tu từ = chắc chắn phát đạt)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phục vụ chu đáo như thế, cửa hàng này làm sao có thể không phát đạt được chứ!',answer:'服务这么周到，这家店怎么能不生意兴隆呢！',answerPy:'Fúwù zhème zhōudào, zhè jiā diàn zěnme néng bù shēngyi xīnglóng ne!',
      note:'Câu phản vấn 怎么能不……呢 = chắc chắn sẽ … (ôn HSK 5 反问句).',pair:'反问句'},
     {promptLang:'vi',prompt:'Từ khi mở bán trên mạng, việc kinh doanh của cửa hàng nhỏ ngày càng phát đạt.',answer:'自从开始在网上销售，小店的生意日益兴隆。',answerPy:'Zìcóng kāishǐ zài wǎngshàng xiāoshòu, xiǎo diàn de shēngyi rìyì xīnglóng.',
      note:'自从……; 日益 + Adj = ngày càng (văn viết, ôn HSK 6 bài 7).',pair:'日益'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 15–17), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 未来商店',
   preQuiz:[
     {q:'如今喜欢网络购物的人怎么样了？',opts:['急剧增加','慢慢减少','没有变化'],ans:0},
     {q:'有人预言，实体商店若想存在，必须怎么做？',opts:['进行一些改良','进行根本性的革命','降低商品的价格'],ans:1},
     {q:'在未来商店里，哪些工作全部实现了电子化？',opts:['只有销售结算','只有客户关系管理','货物储备管理、销售结算、客户关系管理等'],ans:2},
     {q:'未来商店的购物助手装在哪儿？',opts:['商店门口','购物车把手上','顾客的手机里'],ans:1},
     {q:'当消费者走到相应货架时，仪器会做什么？',opts:['发出提示音','自动把商品放进购物车','显示商品的价格'],ans:0},
     {q:'想吃鲜鱼又嫌腥的顾客可以怎么做？',opts:['自己在家加工','排队等店员清理','在触摸屏上留言，等清理好后再去领取'],ans:2},
     {q:'不了解哪款手机更适合自己时，谁会为你把关？',opts:['店员','电子便利站','朋友'],ans:1},
     {q:'未来商店的结账系统是怎么工作的？',opts:['识别商品的重量和体积，迅速运算，给出总和','由店员人工过秤','让顾客自己计算'],ans:0},
     {q:'未来商店着重推荐的服务是什么？',opts:['送货上门','免费修理','消费者加入设计队伍'],ans:2},
     {q:'顾客把商品照片发送到专门的网站后，会得到什么？',opts:['一张优惠券','商品在哪家店有售的反馈','商家的电话号码'],ans:1},
     {q:'未来商店把商店变成了什么样的店铺？',opts:['以消费者为主导的店铺','以商家为主导的店铺','只卖电子产品的店铺'],ans:0},
     {q:'未来商店每一项设计的宗旨是什么？',opts:['价格便宜','商品种类多','使整个购物过程轻松、快捷、便利'],ans:2}
   ],
   lines:[
    {sp:0,zh:'如今喜欢网络购物的人急剧增加，买东西不用在川流不息的人群中奔走，仅需登录网站，动几下手指，下几道指令就可以把东西买回家，人类根深蒂固的购物习惯正在改变。我们不免要问：网上购物如此方便，未来实体商店还会存在吗？有人这样预言：实体商店若想存在，必须进行根本性的革命，而不是改良，否则实体店昔日的欣欣向荣终将一去不复还。',
     py:'Rújīn xǐhuan wǎngluò gòuwù de rén jíjù zēngjiā, mǎi dōngxi búyòng zài chuānliú-bùxī de rénqún zhōng bēnzǒu, jǐn xū dēnglù wǎngzhàn, dòng jǐ xià shǒuzhǐ, xià jǐ dào zhǐlìng jiù kěyǐ bǎ dōngxi mǎi huí jiā, rénlèi gēnshēn-dìgù de gòuwù xíguàn zhèngzài gǎibiàn. Wǒmen bùmiǎn yào wèn: wǎngshàng gòuwù rúcǐ fāngbiàn, wèilái shítǐ shāngdiàn hái huì cúnzài ma? Yǒu rén zhèyàng yùyán: shítǐ shāngdiàn ruò xiǎng cúnzài, bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì gǎiliáng, fǒuzé shítǐdiàn xīrì de xīnxīn-xiàngróng zhōng jiāng yí qù bú fù huán.',
     vn:'Ngày nay số người thích mua sắm qua mạng tăng lên nhanh chóng. Mua đồ không cần phải chạy ngược chạy xuôi giữa dòng người nườm nượp, chỉ cần đăng nhập trang web, động vài ngón tay, ra vài lệnh là có thể mua đồ mang về nhà; thói quen mua sắm đã ăn sâu bén rễ của loài người đang thay đổi. Chúng ta không khỏi phải hỏi: mua sắm trên mạng tiện lợi như thế, trong tương lai cửa hàng truyền thống liệu còn tồn tại không? Có người tiên đoán thế này: cửa hàng truyền thống nếu muốn tồn tại thì phải tiến hành một cuộc cách mạng tận gốc, chứ không phải cải tiến, nếu không thì sự phồn thịnh ngày xưa của cửa hàng truyền thống cuối cùng sẽ một đi không trở lại.'},
    {sp:0,zh:'有人这样描述未来商店：那里的仓库货物储备管理、销售结算、客户关系管理等，全部实现电子化。在那儿几乎见不到工作人员，顾客可以自己动手完成整个购物过程。未来商店实行的将是一种全新的商业模式。',
     py:'Yǒu rén zhèyàng miáoshù wèilái shāngdiàn: nàli de cāngkù huòwù chǔbèi guǎnlǐ, xiāoshòu jiésuàn, kèhù guānxi guǎnlǐ děng, quánbù shíxiàn diànzǐhuà. Zài nàr jīhū jiàn bu dào gōngzuò rényuán, gùkè kěyǐ zìjǐ dòng shǒu wánchéng zhěnggè gòuwù guòchéng. Wèilái shāngdiàn shíxíng de jiāng shì yì zhǒng quánxīn de shāngyè móshì.',
     vn:'Có người miêu tả cửa hàng tương lai như sau: ở đó, việc quản lý dự trữ hàng hoá trong kho, thanh toán bán hàng, quản lý quan hệ khách hàng… đều được điện tử hoá toàn bộ. Ở đó hầu như không thấy nhân viên, khách hàng có thể tự tay hoàn thành cả quá trình mua sắm. Cái mà cửa hàng tương lai áp dụng sẽ là một mô hình kinh doanh hoàn toàn mới.'},
    {sp:0,zh:'未来商店的购物车把手上装有购物助手——一个可随意装卸的无线电脑工具。消费者想买哪种商品，小屏幕上就会显示商品所在的位置，当消费者走到相应货架时，仪器会发出提示音，以免消费者错过商品。如果你想吃鲜鱼，又嫌腥，不愿自己加工，可以在触摸屏上留言，等店员把鱼清理好后，再去领取，不必排队等候。如果想买手机，又不了解哪一款性能更适合自己，也无须烦恼，电子便利站会为你把关，在那儿一系列选择题会为你提供决策支持和购买建议。',
     py:'Wèilái shāngdiàn de gòuwùchē bǎshou shang zhuāng yǒu gòuwù zhùshǒu——yí ge kě suíyì zhuāngxiè de wúxiàn diànnǎo gōngjù. Xiāofèizhě xiǎng mǎi nǎ zhǒng shāngpǐn, xiǎo píngmù shang jiù huì xiǎnshì shāngpǐn suǒzài de wèizhi, dāng xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn, yǐmiǎn xiāofèizhě cuòguò shāngpǐn. Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, bú yuàn zìjǐ jiāgōng, kěyǐ zài chùmōpíng shang liúyán, děng diànyuán bǎ yú qīnglǐ hǎo hòu, zài qù lǐngqǔ, búbì páiduì děnghòu. Rúguǒ xiǎng mǎi shǒujī, yòu bù liǎojiě nǎ yì kuǎn xìngnéng gèng shìhé zìjǐ, yě wúxū fánnǎo, diànzǐ biànlìzhàn huì wèi nǐ bǎ guān, zài nàr yí xìliè xuǎnzétí huì wèi nǐ tígōng juécè zhīchí hé gòumǎi jiànyì.',
     vn:'Trên tay cầm xe đẩy của cửa hàng tương lai có gắn một "trợ lý mua sắm" — một thiết bị máy tính không dây có thể lắp tháo tuỳ ý. Người tiêu dùng muốn mua loại hàng nào, trên màn hình nhỏ sẽ hiện ra vị trí của món hàng đó; khi người tiêu dùng đi tới kệ hàng tương ứng, thiết bị sẽ phát ra âm báo để khỏi bỏ lỡ món hàng. Nếu bạn muốn ăn cá tươi mà lại ngại tanh, không muốn tự sơ chế, bạn có thể để lại lời nhắn trên màn hình cảm ứng, đợi nhân viên làm sạch cá xong rồi hẵng đến lấy, không cần xếp hàng chờ. Nếu muốn mua điện thoại mà không biết mẫu nào có tính năng hợp với mình hơn, cũng chẳng cần phiền não: trạm tiện ích điện tử sẽ kiểm định giúp bạn, ở đó một loạt câu hỏi lựa chọn sẽ hỗ trợ bạn ra quyết định và đưa ra gợi ý mua hàng.'},
    {sp:0,zh:'购物完毕，该结账了，未来商店无须人工过秤，带有摄像头的结账系统可以识别商品的重量和体积，迅速运算，之后给出消费钱数的总和，自动收款机则可接受现金和刷卡支付。',
     py:'Gòuwù wánbì, gāi jiézhàng le, wèilái shāngdiàn wúxū réngōng guò chèng, dài yǒu shèxiàngtóu de jiézhàng xìtǒng kěyǐ shíbié shāngpǐn de zhòngliàng hé tǐjī, xùnsù yùnsuàn, zhīhòu gěichū xiāofèi qiánshù de zǒnghé, zìdòng shōukuǎnjī zé kě jiēshòu xiànjīn hé shuākǎ zhīfù.',
     vn:'Mua sắm xong, đến lúc tính tiền. Cửa hàng tương lai không cần người cân hàng: hệ thống thanh toán có gắn camera có thể nhận diện trọng lượng và thể tích của hàng hoá, tính toán nhanh chóng rồi đưa ra tổng số tiền đã tiêu; còn máy thu tiền tự động thì nhận cả tiền mặt lẫn quẹt thẻ.'},
    {sp:0,zh:'消费者加入设计队伍，是未来商店着重推荐的服务，譬如，你想买衣服，可是你觉得市场上的几款都不太满意，那就参与设计吧。你登录到虚拟设计室，进入设计过程，对颜色、外观等设计内容进行投票，这样设计出来的衣服保管你满意。',
     py:'Xiāofèizhě jiārù shèjì duìwu, shì wèilái shāngdiàn zhuózhòng tuījiàn de fúwù, pìrú, nǐ xiǎng mǎi yīfu, kěshì nǐ juéde shìchǎng shang de jǐ kuǎn dōu bú tài mǎnyì, nà jiù cānyù shèjì ba. Nǐ dēnglù dào xūnǐ shèjìshì, jìnrù shèjì guòchéng, duì yánsè, wàiguān děng shèjì nèiróng jìnxíng tóupiào, zhèyàng shèjì chūlái de yīfu bǎoguǎn nǐ mǎnyì.',
     vn:'Người tiêu dùng tham gia vào đội ngũ thiết kế là dịch vụ mà cửa hàng tương lai đặc biệt giới thiệu. Chẳng hạn, bạn muốn mua quần áo nhưng thấy mấy mẫu trên thị trường đều không vừa ý lắm, vậy thì hãy tham gia thiết kế đi. Bạn đăng nhập vào phòng thiết kế ảo, bước vào quá trình thiết kế, bỏ phiếu cho các nội dung thiết kế như màu sắc, kiểu dáng…; quần áo được thiết kế ra như thế đảm bảo bạn sẽ hài lòng.'},
    {sp:0,zh:'在未来商店，商家和消费者的互动非常活跃。不管你是想买样式新颖的羽绒服、旗袍，还是想买你中意的音响、收音机、水龙头或者只是几枚纽扣儿、一个插座，再或者是勘探矿产的工具，你只要把照片发送到专门的网站，就能得到反馈：“您查询的商品在某某店有售，那里有多种款式供您选购。”这样的互动方便了顾客，也为商家带来了生意。',
     py:'Zài wèilái shāngdiàn, shāngjiā hé xiāofèizhě de hùdòng fēicháng huóyuè. Bùguǎn nǐ shì xiǎng mǎi yàngshì xīnyǐng de yǔróngfú, qípáo, háishi xiǎng mǎi nǐ zhòngyì de yīnxiǎng, shōuyīnjī, shuǐlóngtóu huòzhě zhǐ shì jǐ méi niǔkòur, yí ge chāzuò, zài huòzhě shì kāntàn kuàngchǎn de gōngjù, nǐ zhǐyào bǎ zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì: “Nín cháxún de shāngpǐn zài mǒumǒu diàn yǒu shòu, nàli yǒu duō zhǒng kuǎnshì gōng nín xuǎngòu.” Zhèyàng de hùdòng fāngbiànle gùkè, yě wèi shāngjiā dàiláile shēngyi.',
     vn:'Ở cửa hàng tương lai, sự tương tác giữa người bán và người tiêu dùng rất sôi nổi. Bất kể bạn muốn mua áo lông vũ, sườn xám kiểu dáng mới lạ, hay muốn mua dàn loa, chiếc radio, vòi nước mà bạn ưng ý, hoặc chỉ là vài chiếc cúc áo, một cái ổ cắm, hay thậm chí là dụng cụ thăm dò khoáng sản, bạn chỉ cần gửi ảnh lên trang web chuyên dụng là sẽ nhận được phản hồi: "Món hàng quý khách tra cứu có bán ở cửa hàng X, ở đó có nhiều kiểu dáng để quý khách chọn mua." Sự tương tác như vậy vừa thuận tiện cho khách hàng, vừa mang lại mối làm ăn cho người bán.'},
    {sp:0,zh:'未来商店对消费者的关怀可谓无微不至，他们根据消费者的个人生活习惯，把握消费者的需求，将商店变为以消费者为主导的店铺。努力使整个购物过程轻松、快捷、便利，是未来商店每一项设计的宗旨。',
     py:'Wèilái shāngdiàn duì xiāofèizhě de guānhuái kěwèi wúwēi-búzhì, tāmen gēnjù xiāofèizhě de gèrén shēnghuó xíguàn, bǎwò xiāofèizhě de xūqiú, jiāng shāngdiàn biànwéi yǐ xiāofèizhě wéi zhǔdǎo de diànpù. Nǔlì shǐ zhěnggè gòuwù guòchéng qīngsōng, kuàijié, biànlì, shì wèilái shāngdiàn měi yí xiàng shèjì de zōngzhǐ.',
     vn:'Sự quan tâm của cửa hàng tương lai đối với người tiêu dùng có thể nói là chu đáo từng li từng tí: họ căn cứ vào thói quen sinh hoạt cá nhân của người tiêu dùng, nắm bắt nhu cầu của người tiêu dùng, biến cửa hàng thành cửa hiệu lấy người tiêu dùng làm chủ đạo. Cố gắng làm cho cả quá trình mua sắm nhẹ nhàng, nhanh gọn, tiện lợi — đó là tôn chỉ của mọi thiết kế trong cửa hàng tương lai.'},
    {sp:0,zh:'试想，这样的商店怎么能不生意兴隆呢！',
     py:'Shìxiǎng, zhèyàng de shāngdiàn zěnme néng bù shēngyi xīnglóng ne!',
     vn:'Thử nghĩ xem, một cửa hàng như thế làm sao có thể không làm ăn phát đạt cho được! (Cải biên từ bài "Cửa hàng tương lai sẽ ra sao" trên báo Bắc Kinh Vãn báo.)'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 不免—未免 lấy từ sách (tr. 18–19, 做一做: 判断正误); 需求—需要, 关怀—关心 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'不免 — 未免',
   same:'Đều là phó từ, đều có nghĩa "không tránh được" (不能避免).',
   sameEx:{zh:'这样教学，不免／未免误人子弟。',vn:'Dạy học kiểu này thì khó tránh khỏi làm hỏng con em người ta.'},
   items:[
     {word:'不免',points:[
       'Biểu thị KHÁCH QUAN khó tránh: trong hoàn cảnh nào đó thì TỰ NHIÊN sinh ra kết quả nào đó.',
       'Phía trước PHẢI nêu nguyên nhân dẫn tới kết quả (他刚参加工作，不免会犯错误).',
       'Phía sau CHỈ đi với dạng khẳng định (不免会生气 ✓, 不免不高兴 ✗).'
     ],ex:[{zh:'他刚参加工作，不免会犯错误。',vn:'Cậu ấy mới đi làm, khó tránh khỏi mắc lỗi.'},
          {zh:'网上购物如此方便，我们不免要问：未来实体商店还会存在吗？',vn:'Mua sắm trên mạng tiện như vậy, chúng ta không khỏi phải hỏi: cửa hàng truyền thống tương lai còn tồn tại không?'}]},
     {word:'未免',points:[
       'Biểu thị KHÔNG TÁN THÀNH, thiên về ĐÁNH GIÁ, có nghĩa "không thể không nói là …" (thật là hơi …).',
       'Phía trước có thể KHÔNG cần nêu nguyên nhân (你这么做，未免太过分).',
       'Phía sau đi được cả khẳng định lẫn phủ định (未免太晚了 ✓, 未免不礼貌 ✓). Ôn HSK 6 bài 4.'
     ],ex:[{zh:'你现在才来，未免太晚了。',vn:'Bây giờ cậu mới đến thì cũng muộn quá rồi đấy.'},
          {zh:'他这样对待客人，未免不礼貌。',vn:'Anh ta đối xử với khách như vậy thì thật là bất lịch sự.'}]}
   ],
   quiz:[
     {sentence:'第一次一个人出国，她心里＿＿有些紧张。',options:['不免','未免'],answer:0,
      why:'Nêu hoàn cảnh (lần đầu ra nước ngoài một mình) → kết quả tự nhiên khó tránh (hồi hộp) → 不免.'},
     {sentence:'为这点儿小事就发这么大的火，你＿＿太小气了吧？',options:['不免','未免'],answer:1,
      why:'Đánh giá, chê trách (không tán thành) → 未免 + 太 + Adj.'},
     {sentence:'他这样说，人家＿＿不高兴。',options:['不免','未免'],answer:1,
      why:'Phía sau là dạng PHỦ ĐỊNH (不高兴) → chỉ 未免; 不免 chỉ đi với khẳng định (sách: 不免不高兴 ✗).'},
     {sentence:'多年没见的老同学聚在一起，大家＿＿想起了中学时代。',options:['不免','未免'],answer:0,
      why:'Có nguyên nhân (gặp lại bạn cũ) → tự nhiên nhớ lại → 不免. Đây không phải lời chê.'}
   ],
   sgk:{
     chung:{t:'都是副词，都有不能避免的意思。',vn:'Đều là phó từ, đều có nghĩa không thể tránh được.',vd:'这样教学，不免／未免误人子弟。',vdVn:'Dạy học kiểu này thì khó tránh khỏi làm hỏng con em người ta.'},
     khac:[
       {a:{t:'表示客观上不容易避免，在某种情况下自然产生某种结果，前面应该叙述产生这一结果的原因。',vn:'Biểu thị về khách quan không dễ tránh, trong tình huống nào đó thì tự nhiên sinh ra kết quả nào đó; phía trước phải nêu nguyên nhân sinh ra kết quả này.',vd:'*他不免会犯错误。（×）　他刚参加工作，不免会犯错误。（√）',vdVn:'Câu 1 sai vì thiếu nguyên nhân; câu 2 đúng: "Cậu ấy mới đi làm, khó tránh khỏi mắc lỗi."'},
        b:{t:'表示对某种情况不赞同，侧重在评价，有“不能不说是……”的意思。前面可以不叙述原因。',vn:'Biểu thị không tán thành với tình huống nào đó, thiên về đánh giá, có nghĩa "không thể không nói là …". Phía trước có thể không nêu nguyên nhân.',vd:'你这么做，未免太过分。（√）',vdVn:'Cậu làm như vậy thì thật là quá đáng.'}},
       {a:{t:'后面只能跟肯定式，不能跟否定式。',vn:'Phía sau chỉ đi với dạng khẳng định, không đi với dạng phủ định.',vd:'他这样说，人家不免会生气。（√）　*他这样说，人家不免不高兴。（×）',vdVn:'"Anh ta nói vậy, người ta khó tránh khỏi giận" — đúng; "…不免不高兴" — sai.'},
        b:{t:'后面能跟肯定式和否定式。',vn:'Phía sau đi được cả dạng khẳng định lẫn phủ định.',vd:'你现在才来，未免太晚了。（√）　他这样对待客人，未免不礼貌。（√）',vdVn:'"Bây giờ cậu mới đến, thật là muộn quá" — đúng; "Anh ta đối xử với khách như vậy, thật là bất lịch sự" — đúng.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'旧地重游，感慨万千，让人不免想起往事。',dap:[true,false],
        giai:'ĐÚNG. Có nguyên nhân (旧地重游，感慨万千) → tự nhiên nhớ lại chuyện xưa; phía sau là khẳng định (想起往事) → 不免 dùng đúng.'},
       {s:'真是的，他未免太不会关心人了，干脆分手算了。',dap:[true,false],
        giai:'ĐÚNG. Lời chê trách, đánh giá không tán thành → 未免; 未免 đi được với dạng phủ định (太不会关心人).'},
       {s:'星期天，我不免有些闷闷不乐。',dap:[true,false],
        giai:'ĐÚNG (theo đáp án sách). 不免 + 有些 + Adj dạng khẳng định (闷闷不乐 là thành ngữ khẳng định "buồn bực"); ngữ cảnh ngày Chủ nhật (một mình, rảnh rỗi) ngầm là nguyên nhân.'},
       {s:'听到老师表扬他，他未免高兴起来，手舞足蹈的。',dap:[false,true],
        giai:'SAI. Được khen → tự nhiên vui (kết quả tự nhiên, không phải lời chê) → phải dùng 不免: 听到老师表扬他，他不免高兴起来，手舞足蹈的。'}
     ]
   }},

  {pair:'需求 — 需要',
   same:'Đều có thể làm danh từ, chỉ điều mà con người mong muốn, cần có; đều đi với 满足: 满足……的需求／需要.',
   sameEx:{zh:'这台电脑满足了我多方面的需求／需要。',vn:'Chiếc máy tính này đáp ứng nhu cầu nhiều mặt của tôi.'},
   items:[
     {word:'需求',points:[
       'CHỈ là danh từ; không mang tân ngữ (không nói 我需求你的帮助).',
       'Hay dùng trong kinh tế, thị trường: 市场需求, 消费者的需求, 需求量.',
       'Văn viết, trang trọng; bài khoá: 把握消费者的需求.'
     ],ex:[{zh:'他们根据消费者的个人生活习惯，把握消费者的需求。',vn:'Họ căn cứ vào thói quen sinh hoạt cá nhân để nắm bắt nhu cầu của người tiêu dùng.'}]},
     {word:'需要',points:[
       'Chủ yếu là ĐỘNG TỪ: cần (需要帮助, 需要时间, 需要你来一趟).',
       'Cũng làm danh từ (工作需要, 生活需要) và trợ động từ "cần phải" (你不需要这么着急).',
       'Dùng được cả khẩu ngữ lẫn văn viết.'
     ],ex:[{zh:'这件事需要大家一起商量。',vn:'Việc này cần mọi người cùng bàn bạc.'}]}
   ],
   quiz:[
     {sentence:'这次比赛我们＿＿你的帮助。',options:['需求','需要'],answer:1,
      why:'Mang tân ngữ (你的帮助) → phải là động từ 需要; 需求 chỉ là danh từ.'},
     {sentence:'随着老人越来越多，养老服务的市场＿＿急剧增加。',options:['需求','需要'],answer:0,
      why:'Thuật ngữ kinh tế 市场需求 (nhu cầu thị trường) → 需求.'},
     {sentence:'时间还早，你不＿＿这么着急。',options:['需求','需要'],answer:1,
      why:'Dùng như trợ động từ "không cần phải" → chỉ 需要.'},
     {sentence:'这款手机满足了年轻人多方面的＿＿。',options:['需求','需要'],answer:0,both:true,
      why:'Làm tân ngữ của 满足 → cả hai đều được; 需求 hợp văn phong giới thiệu sản phẩm hơn.'}
   ]},

  {pair:'关怀 — 关心',
   same:'Đều là động từ (cũng dùng như danh từ), đều chỉ sự quan tâm, để ý chăm lo cho người khác.',
   sameEx:{zh:'在老师和同学们的关怀／关心下，她很快就适应了新学校的生活。',vn:'Nhờ sự quan tâm của thầy cô và bạn bè, cô ấy nhanh chóng thích nghi với trường mới.'},
   items:[
     {word:'关怀',points:[
       'Trang trọng, ấm áp; thường là tổ chức, xã hội, người trên đối với người dưới, người yếu thế.',
       'Đối tượng thường là NGƯỜI; cụm cố định: 人文关怀, 关怀备至, 临终关怀.',
       'Bài khoá: 未来商店对消费者的关怀可谓无微不至.'
     ],ex:[{zh:'社会应该多关怀那些独自生活的老人。',vn:'Xã hội nên quan tâm nhiều hơn tới những người già sống một mình.'}]},
     {word:'关心',points:[
       'Dùng rộng rãi trong mọi quan hệ (bạn bè, vợ chồng, cha mẹ con cái…), khẩu ngữ lẫn văn viết.',
       'Đối tượng có thể là người hoặc SỰ VIỆC: 关心国家大事, 关心考试成绩.',
       'Có thể nói 很关心 / 不关心 / 太不关心 tự nhiên.'
     ],ex:[{zh:'他从小就很关心国家大事，每天都看新闻。',vn:'Từ nhỏ cậu ấy đã rất quan tâm đến chuyện đại sự, ngày nào cũng xem thời sự.'}]}
   ],
   quiz:[
     {sentence:'爸爸最＿＿的就是我的考试成绩。',options:['关怀','关心'],answer:1,
      why:'Đối tượng là SỰ VIỆC (成绩), quan hệ gia đình thân mật → 关心.'},
     {sentence:'这家商店特设老人专区，体现了对老人的人文＿＿。',options:['关怀','关心'],answer:0,
      why:'Cụm cố định 人文关怀 (sự quan tâm mang tính nhân văn) → chỉ 关怀.'},
     {sentence:'你别光顾着工作，也要＿＿一下自己的身体。',options:['关怀','关心'],answer:1,
      why:'Lời khuyên thân mật trong đời thường → 关心; 关怀 quá trang trọng.'},
     {sentence:'在社会各界的＿＿下，这些孩子重新回到了学校。',options:['关怀','关心'],answer:0,both:true,
      why:'Xã hội đối với trẻ em khó khăn, văn phong trang trọng → 关怀 tự nhiên nhất; 关心 cũng được.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'革命',hv:'cách mạng',vn:'cách mạng',note:'Trùng khít; nghĩa mở rộng "thay đổi tận gốc": 技术革命 = cách mạng kỹ thuật.'},
    {zh:'相应',hv:'tương ứng',vn:'tương ứng',note:'Trùng khít: 相应的措施 = biện pháp tương ứng.'},
    {zh:'矿产',hv:'khoáng sản',vn:'khoáng sản',note:'Trùng khít: 矿产资源 = tài nguyên khoáng sản.'},
    {zh:'需求',hv:'nhu cầu',vn:'nhu cầu',note:'Trùng khít, nhưng tiếng Trung 需求 chỉ là danh từ (không nói 我需求……).'},
    {zh:'主导',hv:'chủ đạo',vn:'chủ đạo',note:'Trùng khít: 主导地位 = vị trí chủ đạo.'},
    {zh:'便利',hv:'tiện lợi',vn:'tiện lợi',note:'Trùng khít; 便利店 = cửa hàng tiện lợi.'},
    {zh:'性能',hv:'tính năng',vn:'tính năng',note:'Gần như trùng khít; tiếng Trung 性能 nhấn "làm tốt đến mức nào" (khác 功能 = chức năng).'},
    {zh:'人工',hv:'nhân công',vn:'sức người; nhân tạo',note:'"Nhân công" = sức người; còn nghĩa "nhân tạo": 人工智能 = trí tuệ nhân tạo.'},
    {zh:'投票',hv:'đầu phiếu',vn:'bỏ phiếu',note:'Tiếng Việt có "đầu phiếu" (quyền đầu phiếu); nói thường là "bỏ phiếu".'},
    {zh:'结算',hv:'kết toán',vn:'kết toán, thanh toán',note:'Như tiếng Việt "kết toán" trong kế toán; mua bán thường dịch "thanh toán".'},
    {zh:'模式',hv:'mô thức',vn:'mô hình, chế độ',note:'Tiếng Việt ít nói "mô thức" — dịch "mô hình" (商业模式) hoặc "chế độ" (飞行模式).'}
  ],
  idiom:[
    {zh:'根深蒂固',hv:'căn thâm đế cố',vn:'thâm căn cố đế, ăn sâu bén rễ',note:'Tiếng Việt đảo thành "thâm căn cố đế" — cùng bốn chữ, nghĩa y hệt.'},
    {zh:'川流不息',hv:'xuyên lưu bất tức',vn:'nườm nượp, nối nhau không dứt',note:'"Xuyên" = sông, "tức" = ngừng → như dòng sông chảy mãi không ngừng.'},
    {zh:'欣欣向荣',hv:'hân hân hướng vinh',vn:'phồn vinh, thịnh vượng',note:'"Hân hân" = tươi tốt, "vinh" = tươi tốt, rực rỡ → cây cỏ vươn lên xanh tốt.'},
    {zh:'无微不至',hv:'vô vi bất chí',vn:'chu đáo từng li từng tí',note:'"Vi" = nhỏ, "chí" = đến → không có chỗ nhỏ nào không tới.'}
  ],
  trap:[
    {zh:'改良',hv:'cải lương',vn:'cải tiến, cải tạo',
     warn:'BẪY: "cải lương" trong tiếng Việt thường là tên loại hình sân khấu. 改良 tiếng Trung chỉ là CẢI TIẾN (改良品种 = cải tạo giống).'},
    {zh:'保管',hv:'bảo quản',vn:'cam đoan, đảm bảo; cất giữ',
     warn:'Ngoài nghĩa "cất giữ", 保管 trong khẩu ngữ còn là CAM ĐOAN: 保管你满意 = đảm bảo bạn hài lòng — không dịch "bảo quản bạn hài lòng".'},
    {zh:'清理',hv:'thanh lý',vn:'dọn dẹp, làm sạch',
     warn:'"Thanh lý" tiếng Việt thường là bán rẻ đồ cũ. 清理 chủ yếu là DỌN DẸP: 把鱼清理好 = làm sạch cá.'},
    {zh:'音响',hv:'âm hưởng',vn:'dàn loa, thiết bị âm thanh',
     warn:'"Âm hưởng" tiếng Việt là dư âm, âm điệu. 音响 thường chỉ DÀN LOA: 一套音响.'},
    {zh:'总和',hv:'tổng hoà',vn:'tổng số',
     warn:'"Tổng hoà" tiếng Việt là sự kết hợp hài hoà nhiều yếu tố. 总和 = TỔNG SỐ cộng lại: 消费钱数的总和.'},
    {zh:'反馈',hv:'phản quỹ',vn:'phản hồi',
     warn:'Không nói "phản quỹ". 馈 = đưa tặng → 反馈 = đưa ngược lại = PHẢN HỒI.'},
    {zh:'把关',hv:'bả quan',vn:'kiểm định, kiểm soát',
     warn:'Không dịch từng chữ; 把关 = giữ cửa ải → kiểm tra, bảo đảm chất lượng: 为你把关 = kiểm định giúp bạn.'},
    {zh:'着重',hv:'trước trọng',vn:'nhấn mạnh, chú trọng',
     warn:'着 đọc zhuó; không nhầm với "trọng" đơn thuần. 着重推荐 = đặc biệt giới thiệu.'},
    {zh:'新颖',hv:'tân dĩnh',vn:'mới lạ, độc đáo',
     warn:'Không có "tân dĩnh" trong tiếng Việt; 新颖 = mới mẻ, độc đáo (样式新颖).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'网络购物的人',right:'急剧增加'},
  {left:'川流不息的',right:'人群'},
  {left:'登录',right:'网站'},
  {left:'下几道',right:'指令'},
  {left:'根深蒂固的',right:'购物习惯'},
  {left:'进行根本性的',right:'革命'},
  {left:'昔日的',right:'欣欣向荣'},
  {left:'仓库货物',right:'储备管理'},
  {left:'全新的',right:'商业模式'},
  {left:'购物车',right:'把手'},
  {left:'可随意装卸的',right:'无线电脑工具'},
  {left:'发出',right:'提示音'},
  {left:'把鱼',right:'清理好'},
  {left:'不必排队',right:'等候'},
  {left:'电子便利站',right:'为你把关'},
  {left:'无须人工',right:'过秤'},
  {left:'识别商品的',right:'重量和体积'},
  {left:'消费钱数的',right:'总和'},
  {left:'着重推荐的',right:'服务'},
  {left:'样式新颖的',right:'羽绒服'},
  {left:'勘探',right:'矿产'},
  {left:'得到',right:'反馈'},
  {left:'把握消费者的',right:'需求'},
  {left:'生意',right:'兴隆'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'入冬以后，气温',blank:'急剧',post:'下降，医院里感冒的病人明显多了。',hint:'(nhanh và mạnh)',ans:'急剧'},
  {pre:'节假日的步行街上，游客',blank:'川流不息',post:'，热闹极了。',hint:'(nườm nượp)',ans:'川流不息'},
  {pre:'密码输错了三次，账号就',blank:'登录',post:'不了了。',hint:'(đăng nhập)',ans:'登录'},
  {pre:'只要对智能音箱说出',blank:'指令',post:'，它就会自动播放音乐。',hint:'(lệnh)',ans:'指令'},
  {pre:'“重男轻女”的观念在有些地方仍然',blank:'根深蒂固',post:'。',hint:'(ăn sâu bén rễ)',ans:'根深蒂固'},
  {pre:'第一次在全校同学面前演讲，我',blank:'不免',post:'有些紧张。',hint:'(khó tránh khỏi)',ans:'不免'},
  {pre:'二十年前就有专家',blank:'预言',post:'，手机会代替钱包。',hint:'(tiên đoán)',ans:'预言'},
  {pre:'智能手机的出现，给人们的生活带来了一场',blank:'革命',post:'。',hint:'(cách mạng)',ans:'革命'},
  {pre:'经过科学家多年的',blank:'改良',post:'，这种水稻的产量提高了一倍。',hint:'(cải tiến)',ans:'改良'},
  {pre:'改革开放以后，这个小渔村变成了一座',blank:'欣欣向荣',post:'的城市。',hint:'(phồn vinh)',ans:'欣欣向荣'},
  {pre:'双十一前，网店的',blank:'仓库',post:'里堆满了等着发出的包裹。',hint:'(kho)',ans:'仓库'},
  {pre:'为了应对台风，很多家庭提前',blank:'储备',post:'了食物和饮用水。',hint:'(dự trữ)',ans:'储备'},
  {pre:'在这家店打工，工资是按天',blank:'结算',post:'的。',hint:'(thanh toán)',ans:'结算'},
  {pre:'上飞机以后，请把手机调成飞行',blank:'模式',post:'。',hint:'(chế độ)',ans:'模式'},
  {pre:'公交车上人很多，请握紧',blank:'把手',post:'，注意安全。',hint:'(tay vịn, tay cầm)',ans:'把手'},
  {pre:'码头上，工人们正在忙着',blank:'装卸',post:'货物。',hint:'(bốc dỡ)',ans:'装卸'},
  {pre:'整天盯着电脑',blank:'屏幕',post:'，眼睛很容易疲劳。',hint:'(màn hình)',ans:'屏幕'},
  {pre:'物价上涨了，工资也应该',blank:'相应',post:'地提高。',hint:'(tương ứng)',ans:'相应'},
  {pre:'实验室的',blank:'仪器',post:'都很精密，没有老师的指导，不许随便操作。',hint:'(thiết bị)',ans:'仪器'},
  {pre:'感冒时最好戴上口罩，',blank:'以免',post:'传染别人。',hint:'(để tránh)',ans:'以免'},
  {pre:'她',blank:'嫌',post:'宿舍条件太差，决定搬出去住。',hint:'(chê)',ans:'嫌'},
  {pre:'做鱼的时候放几片姜，可以去',blank:'腥',post:'。',hint:'(tanh)',ans:'腥'},
  {pre:'手机内存不够了，得',blank:'清理',post:'一下没用的照片。',hint:'(dọn dẹp)',ans:'清理'},
  {pre:'面试结束了，请大家回去',blank:'等候',post:'通知。',hint:'(chờ)',ans:'等候'},
  {pre:'这款手机虽然便宜，但是',blank:'性能',post:'一点儿也不差。',hint:'(tính năng)',ans:'性能'},
  {pre:'这个小区交通',blank:'便利',post:'，楼下就有超市和地铁站。',hint:'(thuận tiện)',ans:'便利'},
  {pre:'食品安全关系到每个人的健康，必须严格',blank:'把关',post:'。',hint:'(kiểm soát, kiểm định)',ans:'把关'},
  {pre:'电话里的机器人听不懂我的问题，我只好转',blank:'人工',post:'服务。',hint:'(nhân viên trực, sức người)',ans:'人工'},
  {pre:'我怀疑那个卖水果的',blank:'秤',post:'不准，回家一称，果然少了半斤。',hint:'(cái cân)',ans:'秤'},
  {pre:'这台电脑的',blank:'运算',post:'速度超级快，玩游戏一点儿也不卡。',hint:'(tính toán, xử lý)',ans:'运算'},
  {pre:'三角形三个内角的',blank:'总和',post:'是一百八十度。',hint:'(tổng)',ans:'总和'},
  {pre:'今天的会议上，总经理',blank:'着重',post:'强调了安全问题。',hint:'(đặc biệt, chú trọng)',ans:'着重'},
  {pre:'有些孩子沉迷于',blank:'虚拟',post:'世界，在现实中反而不会跟人交流。',hint:'(ảo)',ans:'虚拟'},
  {pre:'现在改为网络选举了，选民们只需登录网站，根据指令',blank:'投票',post:'即可。',hint:'(bỏ phiếu)',ans:'投票'},
  {pre:'这是一家百年老店了，饭菜',blank:'保管',post:'让你满意。',hint:'(cam đoan)',ans:'保管'},
  {pre:'这篇作文构思',blank:'新颖',post:'，老师把它当作范文读给全班听。',hint:'(mới lạ, độc đáo)',ans:'新颖'},
  {pre:'北方的冬天特别冷，出门不穿',blank:'羽绒服',post:'可不行。',hint:'(áo lông vũ)',ans:'羽绒服'},
  {pre:'毕业典礼那天，她穿了一件红色的',blank:'旗袍',post:'，显得特别有气质。',hint:'(sườn xám)',ans:'旗袍'},
  {pre:'逛了一整天，也没看到一件',blank:'中意',post:'的衣服。',hint:'(ưng ý)',ans:'中意'},
  {pre:'邻居把',blank:'音响',post:'开得太大了，吵得我没法儿复习。',hint:'(dàn loa)',ans:'音响'},
  {pre:'爷爷每天早上都要打开',blank:'收音机',post:'，一边听新闻一边喝茶。',hint:'(radio)',ans:'收音机'},
  {pre:'洗完手记得随手关紧',blank:'水龙头',post:'，节约用水。',hint:'(vòi nước)',ans:'水龙头'},
  {pre:'在这届运动会上，他一个人就拿了三',blank:'枚',post:'金牌。',hint:'(lượng từ: tấm, chiếc)',ans:'枚'},
  {pre:'我的外套掉了一颗',blank:'纽扣儿',post:'，妈妈帮我缝上了。',hint:'(cúc áo)',ans:'纽扣儿'},
  {pre:'宿舍里只有一个',blank:'插座',post:'，大家只好轮流给手机充电。',hint:'(ổ cắm)',ans:'插座'},
  {pre:'',blank:'勘探',post:'队在沙漠里工作了三年，终于找到了石油。',hint:'(thăm dò)',ans:'勘探'},
  {pre:'这个地区',blank:'矿产',post:'资源丰富，但是交通很不便利。',hint:'(khoáng sản)',ans:'矿产'},
  {pre:'根据用户的',blank:'反馈',post:'，我们对这款软件进行了改良。',hint:'(phản hồi)',ans:'反馈'},
  {pre:'这家店的鞋',blank:'款式',post:'很多，可惜没有我的号。',hint:'(kiểu dáng, mẫu)',ans:'款式'},
  {pre:'社会应该多',blank:'关怀',post:'那些独自生活的老人。',hint:'(quan tâm, chăm lo)',ans:'关怀'},
  {pre:'我生病住院的那些天，妈妈把我照顾得',blank:'无微不至',post:'。',hint:'(chu đáo từng li từng tí)',ans:'无微不至'},
  {pre:'这台电脑性能很好，满足了我多方面的',blank:'需求',post:'。',hint:'(nhu cầu)',ans:'需求'},
  {pre:'网络购物已经在年轻人的消费方式中占了',blank:'主导',post:'地位。',hint:'(chủ đạo)',ans:'主导'},
  {pre:'新店开张那天，朋友们都来祝他生意',blank:'兴隆',post:'。',hint:'(phát đạt)',ans:'兴隆'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (以免 · 嫌 · 省略) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['仪器','会','发出','提示音','，','以免','消费者','错过商品','。'],ans:'仪器会发出提示音，以免消费者错过商品。',audio:'仪器会发出提示音，以免消费者错过商品。'},
  {words:['他','前一天晚上','定好了','闹钟','，','以免','耽误','第二天的考试','。'],ans:'他前一天晚上定好了闹钟，以免耽误第二天的考试。',audio:'他前一天晚上定好了闹钟，以免耽误第二天的考试。'},
  {words:['使用电脑时','要经常','保存文件','，','以免','丢失','。'],ans:'使用电脑时要经常保存文件，以免丢失。',audio:'使用电脑时要经常保存文件，以免丢失。'},
  {words:['如果','你想吃鲜鱼','，','又','嫌','腥','，','可以','在触摸屏上','留言','。'],ans:'如果你想吃鲜鱼，又嫌腥，可以在触摸屏上留言。',audio:'如果你想吃鲜鱼，又嫌腥，可以在触摸屏上留言。'},
  {words:['我','嫌','食堂的饭菜','太油腻','，','所以','自己动手做饭','。'],ans:'我嫌食堂的饭菜太油腻，所以自己动手做饭。',audio:'我嫌食堂的饭菜太油腻，所以自己动手做饭。'},
  {words:['她','喜欢','为大家做事','，','从不','嫌','麻烦','。'],ans:'她喜欢为大家做事，从不嫌麻烦。',audio:'她喜欢为大家做事，从不嫌麻烦。'},
  {words:['你','登录到','虚拟设计室','，','进入','设计过程','，','对颜色','进行投票','。'],ans:'你登录到虚拟设计室，进入设计过程，对颜色进行投票。',audio:'你登录到虚拟设计室，进入设计过程，对颜色进行投票。'},
  {words:['他们','先从学校','去了车站','，','然后','坐了','6个小时的火车','到了林县','。'],ans:'他们先从学校去了车站，然后坐了6个小时的火车到了林县。',audio:'他们先从学校去了车站，然后坐了6个小时的火车到了林县。'},
  {words:['我们','不免','要问','：','未来实体商店','还会','存在吗','？'],ans:'我们不免要问：未来实体商店还会存在吗？',audio:'我们不免要问：未来实体商店还会存在吗？'},
  {words:['电子便利站','会','为你','把关','。'],ans:'电子便利站会为你把关。',audio:'电子便利站会为你把关。'},
  {words:['这样','设计出来的','衣服','保管','你','满意','。'],ans:'这样设计出来的衣服保管你满意。',audio:'这样设计出来的衣服保管你满意。'},
  {words:['未来商店','对消费者的','关怀','可谓','无微不至','。'],ans:'未来商店对消费者的关怀可谓无微不至。',audio:'未来商店对消费者的关怀可谓无微不至。'},
  {words:['这样的商店','怎么能','不','生意兴隆','呢','！'],ans:'这样的商店怎么能不生意兴隆呢！',audio:'这样的商店怎么能不生意兴隆呢！'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'过马路时要看清红绿灯，____发生交通事故。',opts:['以免','以便','何况','从而'],ans:0,
   exp:'Vế sau là điều XẤU cần tránh (交通事故) → 以免. 以便 = để tiện (mục đích tốt); 何况 = huống chi; 从而 = từ đó (kết quả).'},
  {wrong:'他这样说，人家____会生气。',opts:['未免','不免','以便','以免'],ans:1,
   exp:'Có nguyên nhân (他这样说) → kết quả tự nhiên khó tránh, phía sau khẳng định → 不免. 未免 thiên về đánh giá chê trách; 以免 là liên từ đứng đầu vế sau.'},
  {wrong:'你现在才来，____太晚了吧？',opts:['不免','以免','未免','免得'],ans:2,
   exp:'Lời chê trách, đánh giá không tán thành → 未免 + 太 + Adj. 不免 cần nguyên nhân và chỉ kết quả tự nhiên.'},
  {wrong:'我想吃鱼，又____腥，所以一般只在饭馆吃。',opts:['爱','盼','嫌','求'],ans:2,
   exp:'嫌腥 = ngại tanh (cụm trong bài khoá): 嫌 + đặc điểm mình không thích. 爱 = yêu, 盼 = mong, 求 = cầu — đều trái nghĩa với vế sau (只在饭馆吃).'},
  {wrong:'如今喜欢网络购物的人____增加，实体店的生意越来越难做。',opts:['兴隆','新颖','便利','急剧'],ans:3,
   exp:'急剧增加 = tăng vọt. 兴隆 dùng cho 生意; 新颖 cho kiểu dáng; 便利 cho giao thông, cuộc sống.'},
  {wrong:'只要对着智能音箱说出____，它就会帮你关灯。',opts:['指令','反馈','需求','模式'],ans:0,
   exp:'Nói ra LỆNH cho máy thực hiện → 指令. 反馈 = phản hồi; 需求 = nhu cầu; 模式 = chế độ, mô hình.'},
  {wrong:'这种观念已经____，想改变可不容易。',opts:['欣欣向荣','根深蒂固','川流不息','无微不至'],ans:1,
   exp:'Quan niệm đã ăn sâu, khó đổi → 根深蒂固. 欣欣向荣 = phồn vinh; 川流不息 = nườm nượp; 无微不至 = chu đáo.'},
  {wrong:'实体店若想存在，必须进行根本性的____，而不是改良。',opts:['革命','预言','运算','投票'],ans:0,
   exp:'Đối lập với 改良 (cải tiến một phần) là 革命 (thay đổi tận gốc).'},
  {wrong:'等店员把鱼____好后，你再去领取。',opts:['清理','储备','结算','装卸'],ans:0,
   exp:'清理好 = làm sạch xong (cá). 储备 = dự trữ; 结算 = thanh toán; 装卸 = bốc dỡ, lắp tháo.'},
  {wrong:'买手机时不了解哪款____更适合自己，可以请专家把关。',opts:['款式','屏幕','总和','性能'],ans:3,
   exp:'"Mẫu nào … hợp với mình hơn" về mặt kỹ thuật → 性能 (tính năng). 款式 là kiểu dáng; 屏幕 màn hình; 总和 tổng số.'},
  {wrong:'结账系统迅速运算，之后给出消费钱数的____。',opts:['需求','主导','总和','模式'],ans:2,
   exp:'消费钱数的总和 = tổng số tiền tiêu. Các từ khác không đi với 钱数.'},
  {wrong:'消费者加入设计队伍，是未来商店____推荐的服务。',opts:['保管','相应','虚拟','着重'],ans:3,
   exp:'着重推荐 = đặc biệt giới thiệu. 保管 = cam đoan / cất giữ; 相应 = tương ứng; 虚拟 = ảo.'},
  {wrong:'对颜色、外观进行投票，这样设计出来的衣服____你满意。',opts:['保管','把关','关怀','等候'],ans:0,
   exp:'保管你满意 = cam đoan bạn hài lòng. 把关 = kiểm định (không mang tân ngữ kiểu này); 关怀 = quan tâm; 等候 = chờ.'},
  {wrong:'当消费者走到____货架时，仪器会发出提示音。',opts:['新颖','相应','急剧','虚拟'],ans:1,
   exp:'相应货架 = kệ hàng tương ứng (đúng kệ của món hàng). Các từ khác không hợp nghĩa.'},
  {wrong:'我的外套掉了一颗____，你能帮我缝上吗？',opts:['插座','水龙头','纽扣儿','收音机'],ans:2,
   exp:'Áo khoác rơi một chiếc cúc, khâu lại → 纽扣儿. 插座 = ổ cắm; 水龙头 = vòi nước; 收音机 = radio.'},
  {wrong:'在这届运动会上，她一个人就拿了三____金牌。',opts:['道','把','台','枚'],ans:3,
   exp:'Huy chương dùng lượng từ 枚 (一枚金牌). 道 cho lệnh / đề; 把 cho vật có cán; 台 cho máy móc.'},
  {wrong:'未来商店对消费者的____可谓无微不至。',opts:['需求','反馈','主导','关怀'],ans:3,
   exp:'……的关怀可谓无微不至 = sự quan tâm chu đáo từng li. 需求, 反馈, 主导 không đi với 无微不至.'},
  {wrong:'商店把握消费者的需求，将商店变为以消费者为____的店铺。',opts:['主导','主意','主张','主人'],ans:0,
   exp:'以……为主导 = lấy … làm chủ đạo. 主意 = ý kiến; 主张 = chủ trương; 主人 = chủ nhân.'},
  {wrong:'勘探队走遍了附近的每一座山，终于找到了丰富的____。',opts:['仓库','仪器','矿产','屏幕'],ans:2,
   exp:'勘探 (thăm dò) → tìm thấy 矿产 (khoáng sản). Các từ khác không phải thứ được thăm dò.'},
  {wrong:'服务这么周到，这家店怎么能不生意____呢！',opts:['欣欣向荣','兴隆','便利','新颖'],ans:1,
   exp:'生意兴隆 = làm ăn phát đạt (cụm cố định). 欣欣向荣 không đi sau 生意; 便利, 新颖 không hợp.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 21 + ôn từ HSK 6 bài 1–17 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trước khi ra khỏi nhà nhớ dọn lại cặp sách, để giấy báo dự thi ở chỗ dễ thấy nhất, kẻo đến phòng thi mới phát hiện ra quên mang.',zh:'出门前记得清理一下书包，把准考证放在最显眼的地方，以免到了考场才发现忘带。',py:'Chūmén qián jìde qīnglǐ yíxià shūbāo, bǎ zhǔnkǎozhèng fàng zài zuì xiǎnyǎn de dìfang, yǐmiǎn dàole kǎochǎng cái fāxiàn wàng dài.',goiY:['清理','以免','把……放在……'],giai:'以免 đứng ĐẦU vế cuối, sau nó là điều không mong muốn (quên mang giấy báo); ba vế cùng chủ ngữ "bạn" nên tỉnh lược chủ ngữ (篇章: 省略). 才 = "mới" (muộn).'},
  {vi:'Tôi chê đồ ăn căng tin nhiều dầu mỡ quá, nên mua đồ ở cửa hàng tiện lợi dưới ký túc xá về tự nấu, vừa tiết kiệm vừa lành mạnh.',zh:'我嫌食堂的饭菜太油腻，就在宿舍楼下的便利店买菜自己做，既省钱又健康。',py:'Wǒ xián shítáng de fàncài tài yóunì, jiù zài sùshè lóu xià de biànlìdiàn mǎi cài zìjǐ zuò, jì shěng qián yòu jiànkāng.',goiY:['嫌','便利店','既……又……'],giai:'嫌 + mệnh đề (食堂的饭菜太油腻) nêu lý do không hài lòng; 就 nối kết quả; 既……又…… liệt kê hai lợi ích. "Chê" ở đây không dịch 批评.'},
  {vi:'Mẫu điện thoại này tuy kiểu dáng mới lạ, nhưng tính năng không ổn định lắm, mình khuyên cậu nên cân nhắc thêm rồi hẵng mua.',zh:'这款手机虽然款式新颖，但性能不太稳定，我劝你还是权衡一下再买吧。',py:'Zhè kuǎn shǒujī suīrán kuǎnshì xīnyǐng, dàn xìngnéng bú tài wěndìng, wǒ quàn nǐ háishi quánhéng yíxià zài mǎi ba.',goiY:['虽然……但……','新颖','性能','权衡'],giai:'款式 (kiểu dáng) ≠ 性能 (tính năng kỹ thuật); 权衡 (ôn HSK 6 bài 5) = cân nhắc; 还是……吧 = tốt hơn là ….'},
  {vi:'Chỉ cần đăng nhập trang web của trường, nhập số báo danh là tra được điểm, không cần đến văn phòng xếp hàng chờ nữa.',zh:'只要登录学校的网站，输入准考证号，就能查到成绩，不必再去办公室排队等候了。',py:'Zhǐyào dēnglù xuéxiào de wǎngzhàn, shūrù zhǔnkǎozhèng hào, jiù néng chádào chéngjì, búbì zài qù bàngōngshì páiduì děnghòu le.',goiY:['只要……就……','登录','等候'],giai:'只要……就…… điều kiện đủ; các vế sau tỉnh lược chủ ngữ (你) vì đã rõ; 不必再……了 = không cần … nữa.'},
  {vi:'Thói quen thức khuya của cậu ấy đã ăn sâu bén rễ, nói bao nhiêu lần cũng vô ích, bố mẹ không khỏi có phần sốt ruột.',zh:'他熬夜的习惯已经根深蒂固，说了多少次都没用，父母不免有些着急。',py:'Tā áoyè de xíguàn yǐjīng gēnshēn-dìgù, shuōle duōshao cì dōu méi yòng, fùmǔ bùmiǎn yǒuxiē zháojí.',goiY:['根深蒂固','不免','……都……'],giai:'Hai vế đầu là NGUYÊN NHÂN → vế sau dùng 不免 (kết quả tự nhiên khó tránh), phía sau là khẳng định 有些着急. 熬夜 ôn HSK 6 bài 2.'},
  {vi:'Dù cậu muốn mua sách tham khảo hay đồ dùng học tập mình ưng ý, chỉ cần gửi ảnh lên trang web này là lập tức nhận được phản hồi.',zh:'不管你想买参考书还是中意的文具，只要把照片发到这个网站，马上就能得到反馈。',py:'Bùguǎn nǐ xiǎng mǎi cānkǎoshū háishi zhòngyì de wénjù, zhǐyào bǎ zhàopiàn fā dào zhège wǎngzhàn, mǎshàng jiù néng dédào fǎnkuì.',goiY:['不管……还是……','中意','反馈'],giai:'不管 A 还是 B + 都 / 就 — kết quả không đổi; 中意的 + N = … ưng ý; 得到反馈 = nhận được phản hồi.'},
  {vi:'Sự quan tâm của thầy chủ nhiệm dành cho chúng tôi có thể nói là chu đáo từng li từng tí, đến cả chuyện ai hôm nay chưa ăn sáng thầy cũng để tâm.',zh:'班主任对我们的关怀可谓无微不至，连谁今天没吃早饭他都惦记着。',py:'Bānzhǔrèn duì wǒmen de guānhuái kěwèi wúwēi-búzhì, lián shéi jīntiān méi chī zǎofàn tā dōu diànjizhe.',goiY:['关怀','无微不至','连……都……'],giai:'对……的关怀可谓无微不至 (khuôn bài khoá); 连……都…… nhấn mạnh chi tiết nhỏ nhất; 惦记 ôn HSK 6 bài 3.'},
  {vi:'Theo đà số người mua hàng trên mạng tăng vọt, không ít cửa hàng truyền thống buộc phải thay đổi mô hình kinh doanh, nếu không thì rất khó tồn tại tiếp.',zh:'随着网购人数急剧增加，不少实体店不得不改变经营模式，否则很难生存下去。',py:'Suízhe wǎnggòu rénshù jíjù zēngjiā, bù shǎo shítǐdiàn bùdébù gǎibiàn jīngyíng móshì, fǒuzé hěn nán shēngcún xiàqù.',goiY:['随着','急剧','模式','否则'],giai:'随着…… nêu bối cảnh thay đổi; 不得不 = buộc phải; 否则 = nếu không thì (giả thiết ngược); 生存 ôn HSK 6 bài 13.'},
  {vi:'Trước khi dùng thiết bị trong phòng thí nghiệm phải đọc kỹ hướng dẫn, làm từng bước theo lệnh của thầy cô, để tránh làm hỏng thiết bị hoặc xảy ra nguy hiểm.',zh:'使用实验室的仪器以前，要先仔细阅读说明，按照老师的指令一步一步操作，以免损坏仪器或者发生危险。',py:'Shǐyòng shíyànshì de yíqì yǐqián, yào xiān zǐxì yuèdú shuōmíng, ànzhào lǎoshī de zhǐlìng yí bù yí bù cāozuò, yǐmiǎn sǔnhuài yíqì huòzhě fāshēng wēixiǎn.',goiY:['仪器','指令','以免','按照'],giai:'Chuỗi hành động (先……，按照……) rồi 以免 nêu hai điều cần tránh nối bằng 或者; toàn câu tỉnh lược chủ ngữ (các em). 操作 ôn HSK 6 bài 11.'},
  {vi:'Điều hội học sinh đặc biệt nhấn mạnh là để toàn thể học sinh bỏ phiếu quyết định, chứ không phải vài cán bộ lớp tự quyết; kết quả có được như vậy đảm bảo mọi người đều hài lòng.',zh:'学生会着重强调的是让全体同学投票决定，而不是由几个班干部做主，这样得出的结果保管大家满意。',py:'Xuéshēnghuì zhuózhòng qiángdiào de shì ràng quántǐ tóngxué tóupiào juédìng, ér bú shì yóu jǐ ge bān gànbù zuò zhǔ, zhèyàng déchū de jiéguǒ bǎoguǎn dàjiā mǎnyì.',goiY:['着重','投票','是……而不是……','保管'],giai:'……的是 A，而不是 B: khẳng định A, phủ định B; 保管 + người + 满意 = cam đoan ai hài lòng (khẩu ngữ, như bài khoá); 做主 ôn HSK 6 bài 7.'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Ngày nay số người thích mua sắm qua mạng tăng vọt, mua đồ không còn phải chen chúc giữa dòng người nườm nượp nữa.',zh:'如今喜欢网络购物的人急剧增加，买东西不用在川流不息的人群中奔走。',py:'Rújīn xǐhuan wǎngluò gòuwù de rén jíjù zēngjiā, mǎi dōngxi búyòng zài chuānliú-bùxī de rénqún zhōng bēnzǒu.',goiY:['急剧 = nhanh và mạnh (tăng vọt)','川流不息 = nườm nượp','奔走 = chạy ngược chạy xuôi'],giai:'急剧增加 dịch "tăng vọt" cho gọn; 在……中奔走 chuyển thành "chen chúc giữa …" cho tự nhiên.'},
  {vi:'Mua sắm trên mạng đã tiện lợi đến thế, người ta không khỏi phải hỏi: tương lai cửa hàng truyền thống còn cần thiết tồn tại nữa không?',zh:'网上购物既然如此便利，人们不免要问：实体商店将来还有存在的必要吗？',py:'Wǎngshàng gòuwù jìrán rúcǐ biànlì, rénmen bùmiǎn yào wèn: shítǐ shāngdiàn jiānglái hái yǒu cúnzài de bìyào ma?',goiY:['既然 = đã … thì','不免 = không khỏi','便利 = tiện lợi'],giai:'不免要问 = "không khỏi phải hỏi"; 实体商店 = cửa hàng truyền thống / cửa hàng thực (đối lập với cửa hàng online).'},
  {vi:'Cửa hàng truyền thống nếu muốn tồn tại thì phải tiến hành một cuộc cách mạng tận gốc, chứ không phải chỉ cải tiến qua loa.',zh:'实体店若想生存，必须进行根本性的革命，而不是简单的改良。',py:'Shítǐdiàn ruò xiǎng shēngcún, bìxū jìnxíng gēnběnxìng de gémìng, ér bú shì jiǎndān de gǎiliáng.',goiY:['若 = nếu (văn viết)','革命 = cách mạng, thay đổi tận gốc','改良 = cải tiến'],giai:'改良 KHÔNG dịch "cải lương"; 简单的改良 = "cải tiến qua loa, đơn giản". 若 văn viết = 如果.'},
  {vi:'Khi người tiêu dùng đi tới kệ hàng tương ứng, thiết bị sẽ phát ra âm báo, để họ khỏi bỏ lỡ món hàng muốn mua.',zh:'当消费者走到相应货架时，仪器会发出提示音，以免他们错过想买的商品。',py:'Dāng xiāofèizhě zǒudào xiāngyìng huòjià shí, yíqì huì fāchū tíshìyīn, yǐmiǎn tāmen cuòguò xiǎng mǎi de shāngpǐn.',goiY:['相应 = tương ứng','仪器 = thiết bị','以免 = để khỏi, kẻo'],giai:'当……时 = "khi …"; 以免 dịch "để … khỏi / để tránh"; 仪器 ở đây là chiếc "trợ lý mua sắm", dịch "thiết bị".'},
  {vi:'Nếu bạn muốn ăn cá tươi nhưng lại ngại tanh, có thể nhờ nhân viên làm sạch cá, đến lúc đó chỉ việc tới lấy là xong.',zh:'如果你想吃鲜鱼，又嫌腥，可以请店员把鱼清理好，到时候直接去领取就行了。',py:'Rúguǒ nǐ xiǎng chī xiānyú, yòu xián xīng, kěyǐ qǐng diànyuán bǎ yú qīnglǐ hǎo, dào shíhou zhíjiē qù lǐngqǔ jiù xíng le.',goiY:['嫌腥 = ngại tanh','清理 = làm sạch','到时候 = đến lúc đó'],giai:'又 ở đây mang ý "lại, nhưng lại" (mâu thuẫn); các vế sau tỉnh lược 你 — tiếng Việt cũng tỉnh lược được.'},
  {vi:'Cửa hàng tương lai không cần người cân hàng, hệ thống thanh toán có thể tính toán nhanh chóng rồi đưa ra tổng số tiền đã tiêu.',zh:'未来商店无须人工过秤，结账系统能迅速运算，并给出消费钱数的总和。',py:'Wèilái shāngdiàn wúxū réngōng guò chèng, jiézhàng xìtǒng néng xùnsù yùnsuàn, bìng gěichū xiāofèi qiánshù de zǒnghé.',goiY:['无须 = không cần','人工过秤 = người cân hàng','总和 = tổng số'],giai:'总和 KHÔNG dịch "tổng hoà" mà là "tổng số"; 并 nối hai hành động (văn viết) → "rồi, và".'},
  {vi:'Nếu bạn không ưng mẫu nào trên thị trường, chi bằng đăng nhập vào phòng thiết kế ảo, tự mình tham gia thiết kế.',zh:'要是你对市场上的款式都不满意，不妨登录虚拟设计室，亲自参与设计。',py:'Yàoshi nǐ duì shìchǎng shang de kuǎnshì dōu bù mǎnyì, bùfáng dēnglù xūnǐ shèjìshì, qīnzì cānyù shèjì.',goiY:['不妨 = cứ thử, chẳng ngại gì','虚拟 = ảo','登录 = đăng nhập'],giai:'不妨 (ôn HSK 6 bài 12) dịch "chi bằng / cứ thử"; 对……都不满意 = "không ưng … nào cả".'},
  {vi:'Khách hàng chỉ cần gửi ảnh món hàng lên trang web chuyên dụng là nhận được phản hồi, biết cửa hàng nào có nhiều mẫu để chọn mua.',zh:'顾客只要把商品照片发送到专门的网站，就能得到反馈，知道哪家店有多种款式可供选购。',py:'Gùkè zhǐyào bǎ shāngpǐn zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì, zhīdào nǎ jiā diàn yǒu duō zhǒng kuǎnshì kě gōng xuǎngòu.',goiY:['只要……就…… = chỉ cần … là …','反馈 = phản hồi','可供选购 = để chọn mua'],giai:'Vế 3 tỉnh lược chủ ngữ 顾客 (篇章: 省略); 供 + V = "để (ai) …"; 专门的网站 = "trang web chuyên dụng".'},
  {vi:'Họ căn cứ vào thói quen sinh hoạt của người tiêu dùng để nắm bắt nhu cầu, biến cửa hàng thành nơi lấy người tiêu dùng làm chủ đạo.',zh:'他们根据消费者的生活习惯把握其需求，将商店变为以消费者为主导的店铺。',py:'Tāmen gēnjù xiāofèizhě de shēnghuó xíguàn bǎwò qí xūqiú, jiāng shāngdiàn biànwéi yǐ xiāofèizhě wéi zhǔdǎo de diànpù.',goiY:['需求 = nhu cầu','将……变为…… = biến … thành …','以……为主导 = lấy … làm chủ đạo'],giai:'其 = 他们的 (văn viết); 将……变为…… = biến … thành …; 以……为…… ôn HSK 6 bài 11.'},
  {vi:'Cửa hàng tương lai quan tâm khách hàng chu đáo từng li từng tí, mọi thiết kế đều lấy sự nhẹ nhàng, tiện lợi làm tôn chỉ — cửa hàng như vậy sao có thể không phát đạt được?',zh:'未来商店对顾客的关怀无微不至，一切设计都以轻松、便利为宗旨，这样的商店怎么能不生意兴隆呢？',py:'Wèilái shāngdiàn duì gùkè de guānhuái wúwēi-búzhì, yíqiè shèjì dōu yǐ qīngsōng, biànlì wéi zōngzhǐ, zhèyàng de shāngdiàn zěnme néng bù shēngyi xīnglóng ne?',goiY:['无微不至 = chu đáo từng li','以……为宗旨 = lấy … làm tôn chỉ','怎么能不……呢 = sao có thể không …'],giai:'Câu phản vấn 怎么能不……呢 = khẳng định mạnh "chắc chắn sẽ phát đạt"; 宗旨 ôn HSK 6 bài 13.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 22): 缩写课文 350 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:350,
  de:'这篇课文给我们描述了未来商店的运行模式，与传统购物方式相比，未来商店在购物过程、与顾客的互动、满足顾客需求等方面都有更多的优越性。请参考练习5，把课文缩写成350字左右的短文。',
  prompt:'Bài khoá miêu tả cho chúng ta mô hình vận hành của cửa hàng tương lai: so với cách mua sắm truyền thống, cửa hàng tương lai có nhiều ưu thế hơn về quá trình mua sắm, sự tương tác với khách hàng, việc đáp ứng nhu cầu của khách hàng… Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn khoảng 350 chữ.',
  dan:[
    {hoi:'传统购物方式与网络购物方式的区别',goiY:'①传统购物方式　②网络购物方式'},
    {hoi:'未来商店的特点',goiY:'①电子化　②工作人员'},
    {hoi:'未来商店的购物模式——购物助手',goiY:'①显示商品位置　②触摸屏留言　③便利站把关'},
    {hoi:'未来商店的购物模式——结账',goiY:'①结账系统识别　②自动收款机'},
    {hoi:'未来商店的购物模式——参与设计',goiY:'登录、进入设计过程、投票'},
    {hoi:'未来商店的购物模式——互动',goiY:'发送照片、得到反馈'},
    {hoi:'未来商店的设计主旨',goiY:'轻松、快捷、便利'}
  ],
  tuNen:['急剧','川流不息','以免','嫌','把关','着重','保管','反馈','无微不至','兴隆'],
  cauTruc:[
    {ten:'A……，而 B 只需……就……', nhan:'而', vd:'传统的购物方式要在川流不息的人群中奔走，而网络购物只需登录网站，就能把东西买回家。', khi:'MỞ ĐẦU: đối chiếu cách mua sắm truyền thống và mua sắm qua mạng (dòng 1 bảng 练习5).'},
    {ten:'……的特点是……', nhan:'特点是', vd:'未来商店的特点是全部实现电子化，几乎见不到工作人员。', khi:'Nêu khái quát đặc điểm trước khi đi vào chi tiết (dòng 2).'},
    {ten:'……，以免……', nhan:'以免', vd:'走到相应货架时，仪器会发出提示音，以免顾客错过商品。', khi:'Giải thích MỤC ĐÍCH của một chức năng (dòng 3 — trợ lý mua sắm).'},
    {ten:'想……又嫌……的人，可以……', nhan:'嫌', vd:'想吃鲜鱼又嫌腥的顾客，可以在触摸屏上留言。', khi:'Nêu một nhu cầu cụ thể và cách cửa hàng đáp ứng (dòng 3).'},
    {ten:'……无须……，……能……', nhan:'无须', vd:'结账时无须人工过秤，结账系统能迅速算出总和。', khi:'So sánh với cách thanh toán cũ (dòng 4).'},
    {ten:'只要……，就能……', nhan:'只要', vd:'顾客只要把商品照片发送到专门的网站，就能得到反馈。', khi:'Miêu tả thao tác đơn giản — kết quả tiện lợi (dòng 5, 6).'},
    {ten:'……怎么能不……呢？', nhan:'怎么能不', vd:'这样的商店，生意怎么能不兴隆呢？', khi:'KẾT BÀI bằng câu phản vấn, khẳng định mạnh (dòng 7).'}
  ],
  checklist:[
    'Bài tóm tắt có đi đủ 7 ý theo bảng bài tập 5 (khác biệt truyền thống / online → đặc điểm → trợ lý mua sắm → thanh toán → tham gia thiết kế → tương tác → tôn chỉ thiết kế) chưa?',
    'Phần "trợ lý mua sắm" có nêu đủ ba chức năng: hiện vị trí hàng, để lại lời nhắn trên màn hình cảm ứng, trạm tiện ích kiểm định giúp chưa?',
    'Có dùng đúng 以免 (đầu vế sau, điều cần tránh) và 嫌 (+ đặc điểm không thích) ít nhất một lần chưa?',
    'Đã dùng được ít nhất 6 từ / cấu trúc của bài (急剧, 川流不息, 把关, 着重, 保管, 反馈, 无微不至, 兴隆…) chưa?',
    'Bài dài khoảng 350 chữ Hán (300–400), viết bằng lời của mình, các vế cùng chủ ngữ đã tỉnh lược chủ ngữ cho gọn (篇章: 省略) chưa?'
  ],
  model:{
    zh:'如今，喜欢网络购物的人急剧增加。传统的购物方式要在川流不息的人群中奔走，而网络购物只需登录网站、下几道指令，就能把东西买回家。有人预言，实体商店必须进行根本性的革命，否则就会被淘汰。未来商店的特点是全部实现电子化，几乎见不到工作人员，顾客可以自己动手完成购物。未来商店的购物车把手上装有购物助手，屏幕上会显示商品的位置，走到相应货架时，仪器还会发出提示音，以免顾客错过商品。想吃鲜鱼又嫌腥的顾客，可以在触摸屏上留言，等鱼清理好后再去领取。不知道买哪款手机，电子便利站会为你把关。结账时无须人工过秤，结账系统能识别商品，迅速算出总和，自动收款机可以接受现金和刷卡。消费者参与设计是未来商店着重推荐的服务：登录虚拟设计室，进入设计过程，对颜色、外观进行投票，设计出来的衣服保管你满意。此外，顾客只要把商品照片发送到专门的网站，就能得到反馈，知道哪家店有售。未来商店对顾客的关怀无微不至，它的设计宗旨是让购物轻松、快捷、便利。这样的商店，生意怎么能不兴隆呢？',
    py:'Rújīn, xǐhuan wǎngluò gòuwù de rén jíjù zēngjiā. Chuántǒng de gòuwù fāngshì yào zài chuānliú-bùxī de rénqún zhōng bēnzǒu, ér wǎngluò gòuwù zhǐ xū dēnglù wǎngzhàn, xià jǐ dào zhǐlìng, jiù néng bǎ dōngxi mǎi huí jiā. Yǒu rén yùyán, shítǐ shāngdiàn bìxū jìnxíng gēnběnxìng de gémìng, fǒuzé jiù huì bèi táotài. Wèilái shāngdiàn de tèdiǎn shì quánbù shíxiàn diànzǐhuà, jīhū jiàn bu dào gōngzuò rényuán, gùkè kěyǐ zìjǐ dòng shǒu wánchéng gòuwù. Wèilái shāngdiàn de gòuwùchē bǎshou shang zhuāng yǒu gòuwù zhùshǒu, píngmù shang huì xiǎnshì shāngpǐn de wèizhi, zǒudào xiāngyìng huòjià shí, yíqì hái huì fāchū tíshìyīn, yǐmiǎn gùkè cuòguò shāngpǐn. Xiǎng chī xiānyú yòu xián xīng de gùkè, kěyǐ zài chùmōpíng shang liúyán, děng yú qīnglǐ hǎo hòu zài qù lǐngqǔ. Bù zhīdào mǎi nǎ kuǎn shǒujī, diànzǐ biànlìzhàn huì wèi nǐ bǎ guān. Jiézhàng shí wúxū réngōng guò chèng, jiézhàng xìtǒng néng shíbié shāngpǐn, xùnsù suànchū zǒnghé, zìdòng shōukuǎnjī kěyǐ jiēshòu xiànjīn hé shuākǎ. Xiāofèizhě cānyù shèjì shì wèilái shāngdiàn zhuózhòng tuījiàn de fúwù: dēnglù xūnǐ shèjìshì, jìnrù shèjì guòchéng, duì yánsè, wàiguān jìnxíng tóupiào, shèjì chūlái de yīfu bǎoguǎn nǐ mǎnyì. Cǐwài, gùkè zhǐyào bǎ shāngpǐn zhàopiàn fāsòng dào zhuānmén de wǎngzhàn, jiù néng dédào fǎnkuì, zhīdào nǎ jiā diàn yǒu shòu. Wèilái shāngdiàn duì gùkè de guānhuái wúwēi-búzhì, tā de shèjì zōngzhǐ shì ràng gòuwù qīngsōng, kuàijié, biànlì. Zhèyàng de shāngdiàn, shēngyi zěnme néng bù xīnglóng ne?',
    vn:'Ngày nay, số người thích mua sắm qua mạng tăng lên nhanh chóng. Cách mua sắm truyền thống phải chạy ngược chạy xuôi giữa dòng người nườm nượp, còn mua sắm qua mạng chỉ cần đăng nhập trang web, ra vài lệnh là có thể mua đồ về nhà. Có người tiên đoán, cửa hàng truyền thống phải tiến hành một cuộc cách mạng tận gốc, nếu không sẽ bị đào thải. Đặc điểm của cửa hàng tương lai là điện tử hoá toàn bộ, hầu như không thấy nhân viên, khách hàng có thể tự mình hoàn thành việc mua sắm. Trên tay cầm xe đẩy của cửa hàng tương lai có gắn trợ lý mua sắm: màn hình sẽ hiện vị trí món hàng, khi đi tới kệ tương ứng, thiết bị còn phát ra âm báo để khách khỏi bỏ lỡ món hàng. Khách muốn ăn cá tươi mà ngại tanh có thể để lại lời nhắn trên màn hình cảm ứng, đợi cá được làm sạch xong rồi đến lấy. Không biết nên mua mẫu điện thoại nào thì trạm tiện ích điện tử sẽ kiểm định giúp bạn. Khi thanh toán không cần người cân hàng, hệ thống thanh toán có thể nhận diện hàng hoá, nhanh chóng tính ra tổng số tiền, máy thu tiền tự động nhận cả tiền mặt lẫn quẹt thẻ. Người tiêu dùng tham gia thiết kế là dịch vụ mà cửa hàng tương lai đặc biệt giới thiệu: đăng nhập phòng thiết kế ảo, bước vào quá trình thiết kế, bỏ phiếu cho màu sắc, kiểu dáng; quần áo thiết kế ra như thế đảm bảo bạn hài lòng. Ngoài ra, khách hàng chỉ cần gửi ảnh món hàng lên trang web chuyên dụng là sẽ nhận được phản hồi, biết cửa hàng nào có bán. Cửa hàng tương lai quan tâm khách hàng chu đáo từng li từng tí, tôn chỉ thiết kế của nó là làm cho việc mua sắm nhẹ nhàng, nhanh gọn, tiện lợi. Một cửa hàng như vậy, làm sao việc buôn bán có thể không phát đạt?'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng (dòng "未来商店的购物模式" trong sách có 4 ô nhỏ — ở đây tách thành 4 câu). Bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 急剧 · 川流不息 · 以免 · 嫌 · 把关 · 着重 · 保管 · 反馈 · 无微不至.',
  questions:[
    {q_zh:'传统购物方式与网络购物方式的区别',
     q_vn:'Sự khác biệt giữa cách mua sắm truyền thống và mua sắm qua mạng',
     hint:'①传统购物方式　②网络购物方式',
     sample:'传统购物方式要在川流不息的人群中奔走，又累又浪费时间；而网络购物只需登录网站，动几下手指，下几道指令，就能把东西买回家。所以喜欢网络购物的人急剧增加。',
     sample_vn:'Cách mua sắm truyền thống phải chạy ngược chạy xuôi giữa dòng người nườm nượp, vừa mệt vừa tốn thời gian; còn mua sắm qua mạng chỉ cần đăng nhập trang web, động vài ngón tay, ra vài lệnh là mua được đồ về nhà. Vì thế số người thích mua sắm qua mạng tăng vọt.',
     note:'Đối chiếu bằng A……，而 B……; kết luận bằng 所以……急剧增加.'},
    {q_zh:'未来商店的特点',
     q_vn:'Đặc điểm của cửa hàng tương lai',
     hint:'①电子化　②工作人员',
     sample:'未来商店的仓库货物储备管理、销售结算、客户关系管理等全部实现了电子化。在那儿几乎见不到工作人员，顾客可以自己动手完成整个购物过程。',
     sample_vn:'Ở cửa hàng tương lai, việc quản lý dự trữ hàng trong kho, thanh toán bán hàng, quản lý quan hệ khách hàng… đều được điện tử hoá toàn bộ. Ở đó hầu như không thấy nhân viên, khách hàng có thể tự tay hoàn thành cả quá trình mua sắm.',
     note:'Liệt kê bằng dấu 、 rồi tổng kết bằng 等全部……; 几乎见不到 = hầu như không thấy.'},
    {q_zh:'未来商店的购物模式——购物助手',
     q_vn:'Mô hình mua sắm của cửa hàng tương lai — trợ lý mua sắm',
     hint:'①显示商品位置　②触摸屏留言　③便利站把关',
     sample:'购物车把手上装有购物助手。想买什么，屏幕上就会显示商品的位置，走到相应货架时，仪器还会发出提示音，以免你错过商品。想吃鲜鱼又嫌腥，可以在触摸屏上留言，等店员清理好再去拿。不知道买哪款手机，电子便利站会为你把关。',
     sample_vn:'Trên tay cầm xe đẩy có gắn trợ lý mua sắm. Muốn mua gì, màn hình sẽ hiện vị trí món hàng; đi tới kệ tương ứng, thiết bị còn phát âm báo để bạn khỏi bỏ lỡ. Muốn ăn cá tươi mà ngại tanh thì để lại lời nhắn trên màn hình cảm ứng, đợi nhân viên làm sạch xong rồi đến lấy. Không biết mua điện thoại nào thì trạm tiện ích điện tử sẽ kiểm định giúp bạn.',
     note:'Ba ý ①②③ — mỗi ý một câu; dùng 以免 (mục đích), 嫌 (ngại) và 为你把关.'},
    {q_zh:'未来商店的购物模式——结账',
     q_vn:'Mô hình mua sắm của cửa hàng tương lai — thanh toán',
     hint:'①结账系统识别　②自动收款机',
     sample:'结账的时候无须人工过秤，带有摄像头的结账系统能识别商品的重量和体积，迅速运算，给出消费钱数的总和。自动收款机既能收现金，也能刷卡。',
     sample_vn:'Khi thanh toán không cần người cân hàng, hệ thống thanh toán có camera nhận diện được trọng lượng và thể tích hàng hoá, tính toán nhanh chóng rồi đưa ra tổng số tiền. Máy thu tiền tự động vừa nhận tiền mặt vừa quẹt thẻ được.',
     note:'无须 + V (không cần); chuỗi động từ 识别……，迅速运算，给出…… (tỉnh lược chủ ngữ).'},
    {q_zh:'未来商店的购物模式——参与设计',
     q_vn:'Mô hình mua sắm của cửa hàng tương lai — tham gia thiết kế',
     hint:'登录、进入设计过程、投票',
     sample:'消费者加入设计队伍是未来商店着重推荐的服务。如果你对市场上的衣服不太满意，可以登录虚拟设计室，进入设计过程，对颜色、外观等进行投票，这样设计出来的衣服保管你满意。',
     sample_vn:'Người tiêu dùng tham gia đội ngũ thiết kế là dịch vụ cửa hàng tương lai đặc biệt giới thiệu. Nếu bạn không ưng quần áo trên thị trường, có thể đăng nhập phòng thiết kế ảo, bước vào quá trình thiết kế, bỏ phiếu cho màu sắc, kiểu dáng…; quần áo thiết kế ra như vậy đảm bảo bạn hài lòng.',
     note:'Ba động tác theo thứ tự 登录 → 进入 → 投票 (cùng chủ ngữ, tỉnh lược 你); kết bằng 保管你满意.'},
    {q_zh:'未来商店的购物模式——互动',
     q_vn:'Mô hình mua sắm của cửa hàng tương lai — tương tác',
     hint:'发送照片、得到反馈',
     sample:'在未来商店，商家和消费者的互动非常活跃。不管你想买什么，只要把照片发送到专门的网站，就能得到反馈，知道哪家店有售、有哪些款式。这样既方便了顾客，也给商家带来了生意。',
     sample_vn:'Ở cửa hàng tương lai, sự tương tác giữa người bán và người mua rất sôi nổi. Dù bạn muốn mua gì, chỉ cần gửi ảnh lên trang web chuyên dụng là nhận được phản hồi, biết cửa hàng nào có bán, có những kiểu nào. Như vậy vừa tiện cho khách, vừa mang lại mối làm ăn cho người bán.',
     note:'不管……，只要……就……; 既……也…… nêu lợi ích hai bên.'},
    {q_zh:'未来商店的设计主旨',
     q_vn:'Tôn chỉ thiết kế của cửa hàng tương lai',
     hint:'轻松、快捷、便利',
     sample:'未来商店对消费者的关怀可谓无微不至，它把握消费者的需求，以消费者为主导。每一项设计的宗旨都是让购物过程轻松、快捷、便利。这样的商店怎么能不生意兴隆呢？',
     sample_vn:'Sự quan tâm của cửa hàng tương lai đối với người tiêu dùng có thể nói là chu đáo từng li từng tí; nó nắm bắt nhu cầu và lấy người tiêu dùng làm chủ đạo. Tôn chỉ của mọi thiết kế là làm cho việc mua sắm nhẹ nhàng, nhanh gọn, tiện lợi. Cửa hàng như vậy sao có thể không làm ăn phát đạt?',
     note:'以……为主导; ……的宗旨是……; kết bằng câu phản vấn 怎么能不……呢.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 21.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 21',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'这件羽绒服样式挺新颖的，你怎么不买？'},
            {sp:'男',zh:'我嫌它颜色太浅了，冬天穿容易脏。'}],
     q:'男的为什么不买这件羽绒服？',qvn:'Vì sao người đàn ông không mua chiếc áo lông vũ này?',
     opts:['样式太旧','价格太贵','颜色太浅','太厚了'],ans:2,
     why:'我嫌它颜色太浅了 → chê màu quá nhạt. 样式挺新颖的 là lời người phụ nữ khen, nên "kiểu cũ" sai.',
     words:['羽绒服','新颖','嫌']},

    {n:2,
     lines:[{sp:'男',zh:'我把钥匙放在门口的盒子里，你到了自己拿吧。'},
            {sp:'女',zh:'好的，你最好再发个短信提醒我一下，以免我忘了。'}],
     q:'女的让男的做什么？',qvn:'Người phụ nữ bảo người đàn ông làm gì?',
     opts:['发短信提醒她','把钥匙交给邻居','在门口等她','换一把新钥匙'],ans:0,
     why:'你最好再发个短信提醒我一下，以免我忘了 → nhắn tin nhắc cô ấy, để khỏi quên.',
     words:['以免']},

    {n:3,
     lines:[{sp:'女',zh:'网上说这款电脑性能很好，你觉得怎么样？'},
            {sp:'男',zh:'运算速度是挺快的，就是屏幕有点儿小，看久了眼睛累。'}],
     q:'男的觉得这款电脑有什么缺点？',qvn:'Người đàn ông thấy máy tính này có nhược điểm gì?',
     opts:['运算速度慢','价格太高','太重了','屏幕小'],ans:3,
     why:'就是屏幕有点儿小 — 就是 dẫn ra điểm chưa hài lòng. 运算速度是挺快的 là ưu điểm.',
     words:['性能','运算','屏幕']},

    {n:4,
     lines:[{sp:'男',zh:'周末去超市买东西，排队结账排了半个小时。'},
            {sp:'女',zh:'你试试那种自动收款机吧，扫一下就能结算，根本不用等候。'}],
     q:'女的建议男的怎么做？',qvn:'Người phụ nữ gợi ý người đàn ông làm thế nào?',
     opts:['换一家超市','用自动收款机结账','周末别去超市','在网上买东西'],ans:1,
     why:'你试试那种自动收款机吧……根本不用等候 → dùng máy thu tiền tự động.',
     words:['结算','等候']},

    {n:5,
     lines:[{sp:'女',zh:'这个水龙头又漏水了，要不要叫人来修？'},
            {sp:'男',zh:'不用，我在网上查过了，换个零件就行，保管不会再漏。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['必须叫人来修','他自己能修好','要买新水龙头','水龙头没有坏'],ans:1,
     why:'换个零件就行，保管不会再漏 → anh ấy tự thay linh kiện, cam đoan không rỉ nữa. 保管 = cam đoan.',
     words:['水龙头','保管']},

    {n:6,
     lines:[{sp:'男',zh:'听说新开的那家店服务特别好？'},
            {sp:'女',zh:'是啊，店员对老人的关怀可谓无微不至，难怪生意那么兴隆。'}],
     q:'关于那家店，下列哪项正确？',qvn:'Về cửa hàng đó, điều nào dưới đây đúng?',
     opts:['店员态度不好','老人不喜欢去','价格很便宜','生意很好'],ans:3,
     why:'难怪生意那么兴隆 → làm ăn rất phát đạt. 无微不至 nói dịch vụ chu đáo, nên "thái độ không tốt" sai.',
     words:['关怀','无微不至','兴隆']},

    {n:7,
     lines:[{sp:'女',zh:'这次班服的款式，大家意见不一样，怎么办？'},
            {sp:'男',zh:'在班级群里投票吧，票数最多的就是最终款式。'}],
     q:'他们打算怎样决定班服的款式？',qvn:'Họ định quyết định kiểu áo lớp bằng cách nào?',
     opts:['投票决定','由老师决定','由班长决定','抽签决定'],ans:0,
     why:'在班级群里投票吧，票数最多的就是最终款式 → bỏ phiếu trong nhóm lớp.',
     words:['款式','投票']},

    {n:8,
     lines:[{sp:'男',zh:'近年来，网上购物的人数急剧增加，很多实体店的生意受到了影响。不过，也有一些实体店抓住了机会：它们根据顾客的反馈改良服务，比如提供试穿、现场维修、送货上门等网上买不到的体验。专家预言，未来实体店不会消失，但必须以顾客为主导，满足顾客网上满足不了的需求。'}],
     q:'根据这段话，专家认为未来实体店应该怎么做？',qvn:'Theo đoạn này, chuyên gia cho rằng cửa hàng truyền thống tương lai nên làm gì?',
     opts:['降低商品价格','全部改成网店','满足顾客网上满足不了的需求','减少工作人员'],ans:2,
     why:'Câu then chốt: 必须以顾客为主导，满足顾客网上满足不了的需求. Không nhắc tới hạ giá hay giảm nhân viên; "không biến mất" → không phải chuyển hết sang online.',
     words:['急剧','反馈','改良','预言','主导','需求']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Mẹ nhờ em ra chợ mua cá, nhưng em rất ngại mùi tanh.',
     a:{sp:'Mẹ',zh:'你去市场买条鱼回来吧，今天晚上做红烧鱼。',vn:'Con ra chợ mua con cá về nhé, tối nay làm cá kho.'},
     need:['Dùng 嫌','Đưa ra một cách giải quyết'],
     sample:'妈，我嫌鱼太腥了，不想自己处理。我在网上下单，让店员把鱼清理好再送来，行吗？',
     samplePy:'Mā, wǒ xián yú tài xīng le, bù xiǎng zìjǐ chǔlǐ. Wǒ zài wǎngshàng xià dān, ràng diànyuán bǎ yú qīnglǐ hǎo zài sònglái, xíng ma?',
     sampleVn:'Mẹ ơi, con ngại cá tanh quá, không muốn tự làm. Con đặt trên mạng, nhờ người bán làm sạch cá rồi giao tới, được không ạ?',
     tip:'嫌 + N + 太 + Adj; 让 + người + 把……V好 + 再…….'},

    {scene:'Bạn cùng phòng định ra ngoài mà không mang ô, trong khi dự báo chiều nay có mưa.',
     a:{sp:'Bạn cùng phòng',zh:'我出去一下，一会儿就回来。',vn:'Tớ ra ngoài một lát, lát nữa về ngay.'},
     need:['Dùng 以免','Nhắc bạn một việc'],
     sample:'天气预报说下午有雨，你还是带把伞吧，以免被淋湿了。',
     samplePy:'Tiānqì yùbào shuō xiàwǔ yǒu yǔ, nǐ háishi dài bǎ sǎn ba, yǐmiǎn bèi línshī le.',
     sampleVn:'Dự báo thời tiết nói chiều nay có mưa, cậu mang theo cái ô đi, kẻo bị ướt.',
     tip:'还是……吧 = tốt hơn là; 以免 đứng đầu vế sau, sau nó là điều muốn tránh; 淋 ôn HSK 6 bài 11.'},

    {scene:'Em họ đang phân vân không biết mua mẫu điện thoại nào.',
     a:{sp:'Em họ',zh:'这两款手机我都挺喜欢的，不知道哪款更好。',vn:'Hai mẫu điện thoại này em đều khá thích, không biết mẫu nào tốt hơn.'},
     need:['Dùng 性能 và 款式','Dùng 把关'],
     sample:'别光看款式，性能更重要。我哥是做这行的，让他帮你把把关吧。',
     samplePy:'Bié guāng kàn kuǎnshì, xìngnéng gèng zhòngyào. Wǒ gē shì zuò zhè háng de, ràng tā bāng nǐ bǎba guān ba.',
     sampleVn:'Đừng chỉ nhìn kiểu dáng, tính năng quan trọng hơn. Anh tớ làm nghề này, để anh ấy xem giúp em nhé.',
     tip:'别光 + V = đừng chỉ …; 把把关 (li hợp từ lặp lại = xem giúp một chút).'},

    {scene:'Chủ quán ăn mới mở hỏi em thấy món ăn thế nào; em rất hài lòng.',
     a:{sp:'Chủ quán',zh:'我们的店刚开张，你觉得菜的味道怎么样？',vn:'Quán chúng tôi mới khai trương, em thấy mùi vị món ăn thế nào?'},
     need:['Dùng 无微不至 hoặc 保管','Chúc quán dùng 兴隆'],
     sample:'菜做得很地道，服务也无微不至。我保管以后常来，祝你们生意兴隆！',
     samplePy:'Cài zuò de hěn dìdao, fúwù yě wúwēi-búzhì. Wǒ bǎoguǎn yǐhòu cháng lái, zhù nǐmen shēngyi xīnglóng!',
     sampleVn:'Món ăn nấu rất chuẩn vị, phục vụ cũng chu đáo từng li. Cháu đảm bảo sau này sẽ hay đến, chúc quán làm ăn phát đạt!',
     tip:'祝 + người + 生意兴隆 — câu chúc khai trương; 保管 = cam đoan (khẩu ngữ).'},

    {scene:'Cô giáo hỏi cả lớp nên chọn kiểu áo đồng phục lớp như thế nào.',
     a:{sp:'Cô giáo',zh:'班服的款式，大家都有自己的想法，你看怎么定比较好？',vn:'Kiểu áo lớp mỗi em có ý riêng, em thấy nên quyết thế nào thì tốt?'},
     need:['Dùng 投票','Dùng 以……为主导 hoặc 需求'],
     sample:'我觉得应该让大家投票，以同学们的意见为主导，这样选出来的款式才能满足大家的需求。',
     samplePy:'Wǒ juéde yīnggāi ràng dàjiā tóupiào, yǐ tóngxuémen de yìjiàn wéi zhǔdǎo, zhèyàng xuǎn chūlái de kuǎnshì cái néng mǎnzú dàjiā de xūqiú.',
     sampleVn:'Em nghĩ nên để mọi người bỏ phiếu, lấy ý kiến của các bạn làm chủ đạo, như vậy kiểu áo chọn ra mới đáp ứng được nhu cầu của mọi người.',
     tip:'让 + người + 投票; 以……为主导; ……才能满足……的需求.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Thông báo trên màn hình của một siêu thị.',
     a:'请顾客将商品放在结算台上，系统将自动识别并计算总价。',b:'你把东西放那儿就行，机器自己会算钱的。',better:'a',
     why:'Thông báo nơi công cộng cần trang trọng, rõ ràng: 请顾客, 将 (= 把), 结算台, 自动识别. Câu b là lời nói miệng thân mật.'},

    {scene:'Em nhắn tin cho bạn thân rủ đi mua sắm cuối tuần.',
     a:'周末有空吗？陪我去逛逛街呗，我想买件羽绒服。',b:'本人拟于周末前往商场选购羽绒服一件，诚邀阁下同行。',better:'a',
     why:'Nhắn tin với bạn thân dùng khẩu ngữ (逛逛街, 呗). Câu b (本人, 拟于, 诚邀阁下) giống thư mời trang trọng, nghe rất buồn cười.'},

    {scene:'Bài báo kinh tế phân tích xu hướng tiêu dùng.',
     a:'近年来，网络购物人数急剧增加，实体商店面临着前所未有的挑战。',b:'现在在网上买东西的人多得不得了，实体店都快撑不下去了。',better:'a',
     why:'Văn phong báo chí cần từ ngữ văn viết: 近年来, 急剧增加, 面临, 前所未有的挑战. Câu b (多得不得了, 撑不下去) là khẩu ngữ.'},

    {scene:'Nhân viên cửa hàng trả lời khách hàng hỏi còn hàng không.',
     a:'没了没了，卖完了，你去别家看看吧。',b:'不好意思，这款暂时缺货，您可以留下联系方式，到货后我们第一时间通知您。',better:'b',
     why:'Nhân viên phục vụ nên lịch sự, dùng 您, 暂时缺货, 第一时间通知. Câu a cộc lốc, dễ làm mất khách.'},

    {scene:'Em viết bài giới thiệu một sản phẩm công nghệ cho tạp chí của trường.',
     a:'这款电脑性能稳定，运算速度快，能满足学生多方面的学习需求。',b:'这电脑挺好使的，跑得贼快，干啥都行。',better:'a',
     why:'Bài viết đăng tạp chí nên dùng thuật ngữ chuẩn: 性能稳定, 运算速度, 满足……需求. Câu b (好使, 贼快, 干啥) là khẩu ngữ phương ngữ phương Bắc.'},

    {scene:'Ông nội hỏi em cách tra thông tin mua hàng trên điện thoại.',
     a:'爷爷，您把东西拍张照片，发到这个网站上，一会儿就有人告诉您哪儿有卖的。',b:'请您将商品照片发送至指定网站，系统将及时反馈相关信息。',better:'a',
     why:'Nói với người thân lớn tuổi nên dùng lời giản dị, dễ hiểu (拍张照片, 一会儿就有人告诉您) nhưng vẫn lễ phép (您). Câu b như hướng dẫn sử dụng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'传统购物方式与网络购物方式的区别', cue:'①传统购物方式　②网络购物方式', words:['急剧','川流不息','登录','指令','根深蒂固','不免','预言','革命','改良','欣欣向荣']},
    {step:'未来商店的特点', cue:'①电子化　②工作人员', words:['仓库','储备','结算','模式']},
    {step:'未来商店的购物模式——购物助手', cue:'①显示商品位置　②触摸屏留言　③便利站把关', words:['把手','装卸','屏幕','相应','仪器','以免','嫌','腥','清理','等候','性能','便利','把关']},
    {step:'未来商店的购物模式——结账', cue:'①结账系统识别　②自动收款机', words:['人工','秤','运算','总和']},
    {step:'未来商店的购物模式——参与设计', cue:'登录、进入设计过程、投票', words:['着重','虚拟','登录','投票','保管']},
    {step:'未来商店的购物模式——互动', cue:'发送照片、得到反馈', words:['新颖','羽绒服','旗袍','中意','音响','收音机','水龙头','枚','纽扣儿','插座','勘探','矿产','反馈','款式']},
    {step:'未来商店的设计主旨', cue:'轻松、快捷、便利', words:['关怀','无微不至','需求','主导','便利','兴隆']}
  ],
  checklist: [
    'Kể đủ 7 ý theo đúng thứ tự bảng chưa (khác biệt truyền thống / online → đặc điểm → trợ lý mua sắm → thanh toán → tham gia thiết kế → tương tác → tôn chỉ thiết kế)?',
    'Ý 1 có đối chiếu được hai cách mua sắm và nhắc tới lời tiên đoán "phải cách mạng, không phải cải tiến" không?',
    'Ý 3 có nói đủ ba chức năng ①②③ và dùng được 以免, 嫌, 把关 không?',
    'Ý 5 – 6 có kể theo trình tự thao tác (登录 → 进入设计过程 → 投票; 发送照片 → 得到反馈) và tỉnh lược chủ ngữ cho gọn không?',
    'Có kết bằng câu phản vấn 这样的商店怎么能不生意兴隆呢 hoặc câu tương tự, kể bằng LỜI MÌNH không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 17–21) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“以免”完成句子（注释1 · 练一练）', vn:'Dùng 以免 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'机动车和非机动车应该各行其道，以免＿＿。', tu:'以免', dap:'机动车和非机动车应该各行其道，以免发生交通事故。',
      giai:'Xe cơ giới và xe thô sơ đi đúng làn đường của mình → để tránh tai nạn giao thông. Sau 以免 là điều KHÔNG mong muốn.'},
     {s:'使用电脑工作时，不要忘了经常保存你的文件，以免＿＿。', tu:'以免', dap:'使用电脑工作时，不要忘了经常保存你的文件，以免丢失。',
      giai:'Thường xuyên lưu tệp → để khỏi bị mất (丢失). Vế sau 以免 có thể rất ngắn, chủ ngữ (文件) được tỉnh lược.'},
     {s:'我们必须不断地看书、学习、充实自己，以免＿＿。', tu:'以免', dap:'我们必须不断地看书、学习、充实自己，以免被社会淘汰。',
      giai:'Không ngừng học hỏi → để tránh bị xã hội đào thải. 被 + 淘汰 (ôn HSK 6 bài 12).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'完成句子（注释2 · 练一练）', vn:'Hoàn thành câu với 嫌 (Chú thích 2 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'她喜欢为大家做事，从不嫌＿＿。', tu:'嫌', dap:'她喜欢为大家做事，从不嫌麻烦。',
      giai:'从不嫌 + Adj = chưa bao giờ ngại … (麻烦 = phiền, 累 = mệt cũng được).'},
     {s:'他嫌＿＿，衣服送来以后就放在那儿，一次都没穿过。', tu:'嫌', dap:'他嫌衣服款式过时，衣服送来以后就放在那儿，一次都没穿过。',
      giai:'嫌 + mệnh đề (衣服款式过时) nêu lý do không hài lòng → nên không mặc lần nào.'},
     {s:'她嫌＿＿，决定搬出学校，和朋友一块儿在外面合租房子。', tu:'嫌', dap:'她嫌宿舍条件太差，决定搬出学校，和朋友一块儿在外面合租房子。',
      giai:'Chê điều kiện ký túc xá kém → dọn ra ngoài thuê chung. 嫌 + N + 太 + Adj.'}
   ]},

  {kieu:'bc', de:'篇章修辞 · 篇章（1）省略 · 练一练：指出下列句子的问题并改正', vn:'Tu từ văn bản · Tỉnh lược (1) · Luyện tập: chỉ ra vấn đề của các câu dưới đây và sửa lại — đáp án theo sách',
   cau:[
     {s:'新年的临近给全家带来了节日的气氛，全家人又打扫卫生，全家人又擦玻璃，还买来了花瓶，插上了鲜花。', sai:'全家人又擦玻璃', loai:'主语重复',
      dap:'新年的临近给全家带来了节日的气氛，全家人又打扫卫生，又擦玻璃，还买来了花瓶，插上了鲜花。',
      giai:'Các phân câu sau cùng chủ ngữ 全家人 đã nêu ở trước → bỏ 全家人 lặp lại; giữ khung 又……，又……，还…….'},
     {s:'他八岁起就喜欢上了足球，他天天在球场上一直泡到天黑，后来他终于进了国家队。', sai:'他天天在球场上一直泡到天黑，后来他终于', loai:'主语重复',
      dap:'他八岁起就喜欢上了足球，天天在球场上一直泡到天黑，后来终于进了国家队。',
      giai:'Ba phân câu cùng chủ ngữ 他 → chỉ giữ ở phân câu đầu, bỏ 他 trước 天天 và trước 终于.'},
     {s:'那是一只黄色的小猫，它只比我的手掌大一点儿，我给它起了个名字叫宝宝。我在前面走，它在后面跟着，它两只大眼睛看着我，它眼中充满无知、天真、信任和快乐。', sai:'它两只大眼睛看着我，它眼中', loai:'主语重复',
      dap:'那是一只黄色的小猫，只比我的手掌大一点儿，我给它起了个名字叫宝宝。我在前面走，它在后面跟着，两只大眼睛看着我，眼中充满无知、天真、信任和快乐。',
      giai:'Bỏ 它 thừa ở ba chỗ: 它只比……, 它两只大眼睛……, 它眼中……. Giữ 它 trong "它在后面跟着" vì câu trước chủ ngữ là 我 (chủ ngữ đổi thì phải nêu lại).'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'预言', chu:'预', ds:['预测','预防','预报','预计']},
   cau:[
     {tu:'改良', chu:'改', dap:['改正','更改','改错','整改'], them:['改变','修改','改进','改善','改革','改造','改写'],
      giai:'改 = sửa, thay đổi (改正 = sửa cho đúng, 更改 = thay đổi, 整改 = chấn chỉnh). 改良 = sửa cho tốt hơn.'},
     {tu:'储备', chu:'备', dap:['完备','准备','备份','设备'], them:['预备','配备','具备','必备','备用','后备','储备'],
      giai:'备 = chuẩn bị sẵn, đầy đủ (准备, 备份 = sao lưu dự phòng, 设备 = thiết bị, 完备 = đầy đủ).'},
     {tu:'结算', chu:'算', dap:['计算','算数','算式','清算'], them:['运算','预算','估算','核算','算术','换算','打算'],
      giai:'算 = tính (计算, 算式 = phép tính, 清算 = tính sổ). 运算 và 预算 (ôn HSK 6 bài 13) cũng cùng nghĩa.'},
     {tu:'装卸', chu:'装', dap:['装饰','服装','装修','装模作样'], them:['包装','安装','装载','装箱','假装','西装','装运'],
      giai:'Đáp án sách mở rộng các nghĩa của 装: trang trí (装饰, 装修), quần áo (服装), giả vờ (装模作样). Nghĩa trong 装卸 là "chất lên, lắp vào": 装载, 装箱, 安装.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'最近几十年，世界人口快速增加，给地球造成了巨大压力。', tu:'急剧', dap:'最近几十年，世界人口急剧增加，给地球造成了巨大压力。',
      giai:'快速增加 → 急剧增加: nhấn sự tăng nhanh và mạnh (văn viết).'},
     {s:'为了不耽误第二天的考试，他前一天晚上定好了闹钟。', tu:'以免', dap:'他前一天晚上定好了闹钟，以免耽误第二天的考试。',
      giai:'为了不 + V đặt đầu câu → 以免 + V đặt ĐẦU VẾ SAU: đổi trật tự hai vế.'},
     {s:'我觉得食堂的饭菜太油腻，所以自己动手做饭。', tu:'嫌', dap:'我嫌食堂的饭菜太油腻，所以自己动手做饭。',
      giai:'觉得……太油腻 (nhận xét không hài lòng) → 嫌 + mệnh đề: gọn và rõ thái độ chê.'},
     {s:'今天的会议上，总经理重点强调了以下几个问题。', tu:'着重', dap:'今天的会议上，总经理着重强调了以下几个问题。',
      giai:'重点强调 → 着重强调 (đặc biệt nhấn mạnh).'},
     {s:'这是一家百年老店了，饭菜一定让你满意。', tu:'保管', dap:'这是一家百年老店了，饭菜保管让你满意。',
      giai:'一定 (chắc chắn) → 保管 (cam đoan, khẩu ngữ).'},
     {s:'他们细心周到的服务让顾客有回家的感觉。', tu:'无微不至', dap:'他们无微不至的服务让顾客有回家的感觉。',
      giai:'细心周到的 → 无微不至的 (chu đáo từng li từng tí) làm định ngữ cho 服务.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['模式','性能','运算','屏幕','需求'],
   cau:[
     {s:'最近我买了一台＿＿很好的电脑。＿＿很大，＿＿速度超级快，还有多种开机＿＿可供选择，满足了我多方面的＿＿，我对它爱不释手。',
      dap:['性能','屏幕','运算','模式','需求']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['川流不息','相应','反馈','等候','指令'],
   cau:[
     {s:'以前，每到选举的日子，投票站里参加选举的人总是＿＿，需要很多人手来维持秩序。现在改为网络选举了，选民们只需登录＿＿的网站，根据＿＿投票即可，无需排队＿＿，整个过程是否公正合理，最后还能在电脑上看到＿＿意见。',
      dap:['川流不息','相应','指令','等候','反馈']}
   ]},

  {kieu:'ab', de:'朗读下面几段话，请补充出省略的主语', vn:'Đọc to các đoạn văn dưới đây, bổ sung chủ ngữ bị tỉnh lược (bài tập 4) — đáp án theo sách',
   cau:[
     {s:'从前有一个男孩，和我们年纪一样大，当然也和我们一样有很多想法，比如想上一所理想的大学，想周游世界，想做一些令人瞩目的事。按道理，只要努力，这些想法中至少有一些能实现。（省略的主语是：＿＿）',
      opts:['他（男孩）','我们','我','人们'], ans:0,
      giai:'Sau khi giới thiệu 一个男孩, các phân câu sau cùng nói về cậu bé: （他）和我们年纪一样大，（他）当然也……有很多想法，比如（他）想上……，（他）想周游世界，（他）想做……. 我们 chỉ là đối tượng so sánh.'},
     {s:'他到了就业的年龄，没有找工作，一天到晚四处闲逛，结果，因为一次合伙抢劫，被判了五年。（省略的主语是：＿＿）',
      opts:['我','他','他们','你'], ans:1,
      giai:'Chủ ngữ 他 nêu một lần ở đầu: （他）没有找工作，（他）一天到晚四处闲逛，结果，（他）因为一次合伙抢劫，（他）被判了五年.'},
     {s:'作为演员，我非常渴望观众的掌声，把它看作是对我演艺事业最高的奖赏。但是，掌声是不能强求的，只有尊重观众的情感，让他们真正感到快乐，才能得到他们发自内心的真正的掌声。（省略的主语是：＿＿）',
      opts:['观众','他们','我','掌声'], ans:2,
      giai:'（我）把它看作是……；只有（我）尊重观众的情感，（我）让他们真正感到快乐，（我）才能得到……掌声. 他们 / 观众 là người vỗ tay, không phải chủ thể hành động.'},
     {s:'后来，我在大学里获得了足球奖学金，由此获得了接受教育的机会；在全美国的后卫球员中，两次被公众认可，并且在美国国家足球联盟队员的挑选赛中，排在第七位。（省略的主语是：＿＿）',
      opts:['他','我们','大学','我'], ans:3,
      giai:'（我）由此获得了……机会；在全美国的后卫球员中，（我）两次被公众认可，并且（我）在……挑选赛中，（我）排在第七位. Chủ ngữ 我 xuyên suốt đoạn.'}
   ]}
];
