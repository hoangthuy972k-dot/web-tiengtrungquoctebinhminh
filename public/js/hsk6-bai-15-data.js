// ══════════════════════════════════════════
// DATA — HSK6 Bài 15: 山脉上的雕刻 (Tác phẩm điêu khắc trên dãy núi)
// 第四单元 走遍天下 · Nguồn: HSK标准教程6上 (tr. 156–166) + đáp án sách
// Bài khoá: 山脉上的雕刻 (783字) · 47 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'山脉',py:'shānmài',pos:'Danh từ',vn:'dãy núi, rặng núi',hv:'sơn mạch',em:'🏔️',lesson:1,
   explain:['Nhiều ngọn núi nối liền nhau thành một dải dài theo một hướng nhất định.','Lượng từ: 一条山脉 / 一座山脉; hay đi với tên riêng: 喜马拉雅山脉, 长白山脉.'],
   usage:'一条 / 一座 + 山脉; 山脉 + 延伸 / 绵延 + 到……; 在……山脉上 / 中.',
   collo:['一条山脉','重重叠叠的山脉','山脉绵延','喜马拉雅山脉'],
   ex_zh:'哈尼族山民在重重叠叠的山脉上雕塑出了美丽的梯田。',ex_py:'Hānízú shānmín zài chóngchóngdiédié de shānmài shang diāosù chūle měilì de tītián.',ex_vn:'Người dân miền núi dân tộc Hà Nhì đã tạc nên những ruộng bậc thang tuyệt đẹp trên những dãy núi trùng điệp.',
   exList:[
     {zh:'哈尼族山民在重重叠叠的山脉上雕塑出了美丽的梯田。',py:'Hānízú shānmín zài chóngchóngdiédié de shānmài shang diāosù chūle měilì de tītián.',vn:'Người dân miền núi dân tộc Hà Nhì đã tạc nên những ruộng bậc thang tuyệt đẹp trên những dãy núi trùng điệp.'},
     {zh:'这条山脉从东到西绵延一千多公里。',py:'Zhè tiáo shānmài cóng dōng dào xī miányán yìqiān duō gōnglǐ.',vn:'Dãy núi này trải dài hơn một nghìn cây số từ đông sang tây.'},
     {zh:'世界上最高的山峰位于喜马拉雅山脉。',py:'Shìjiè shang zuì gāo de shānfēng wèiyú Xǐmǎlāyǎ shānmài.',vn:'Đỉnh núi cao nhất thế giới nằm trên dãy Himalaya.'}
   ],
   colloFull:[
     {zh:'一条山脉',py:'yì tiáo shānmài',vn:'một dãy núi'},
     {zh:'重重叠叠的山脉',py:'chóngchóngdiédié de shānmài',vn:'những dãy núi trùng điệp'},
     {zh:'山脉绵延',py:'shānmài miányán',vn:'dãy núi trải dài liên tiếp'},
     {zh:'喜马拉雅山脉',py:'Xǐmǎlāyǎ shānmài',vn:'dãy Himalaya'},
     {zh:'横贯东西的山脉',py:'héngguàn dōngxī de shānmài',vn:'dãy núi chạy ngang đông – tây'}
   ],
   patterns:[
     {s:'一条 + 山脉 + 延伸 / 绵延 + 到……',m:'Một dãy núi kéo dài tới …'},
     {s:'在 + 山脉 + 上 / 中 + V',m:'Làm gì trên / trong dãy núi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dãy núi này không những dài mà còn rất cao, mùa đông đỉnh núi phủ đầy tuyết.',answer:'这条山脉不但很长，而且很高，冬天山顶上盖满了雪。',answerPy:'Zhè tiáo shānmài búdàn hěn cháng, érqiě hěn gāo, dōngtiān shāndǐng shang gàimǎnle xuě.',
      note:'不但……而且……: tăng tiến; lượng từ của 山脉 là 条.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Đứng trên đỉnh núi, chúng tôi có thể nhìn thấy cả dãy núi phía xa.',answer:'站在山顶上，我们能看得见远处的整条山脉。',answerPy:'Zhàn zài shāndǐng shang, wǒmen néng kàn de jiàn yuǎnchù de zhěng tiáo shānmài.',
      note:'Bổ ngữ khả năng 看得见 (nhìn thấy được).',pair:'Bổ ngữ khả năng V得见'}
   ]},

  {n:2,zh:'雕刻',py:'diāokè',pos:'Động từ',vn:'điêu khắc, chạm trổ',hv:'điêu khắc',em:'🗿',lesson:1,
   explain:['Dùng dao, đục khắc hình, chữ, hoa văn lên gỗ, đá, ngọc, kim loại….','Cũng là danh từ: tác phẩm chạm khắc (木雕刻, 石雕刻). Nghĩa bóng: 山脉上的雕刻 — ruộng bậc thang như tác phẩm con người "khắc" lên núi.'],
   usage:'在 + vật liệu + 上 + 雕刻 + hình; 雕刻 + 出 / 成 + tác phẩm; 雕刻艺术, 雕刻家.',
   collo:['雕刻艺术','雕刻作品','在石头上雕刻','雕刻出'],
   ex_zh:'这是以大地为背景，用生命和毅力雕刻出的杰出作品。',ex_py:'Zhè shì yǐ dàdì wéi bèijǐng, yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn.',ex_vn:'Đây là tác phẩm kiệt xuất lấy mặt đất làm phông nền, được khắc nên bằng sinh mệnh và nghị lực.',
   exList:[
     {zh:'这是以大地为背景，用生命和毅力雕刻出的杰出作品。',py:'Zhè shì yǐ dàdì wéi bèijǐng, yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn.',vn:'Đây là tác phẩm kiệt xuất lấy mặt đất làm phông nền, được khắc nên bằng sinh mệnh và nghị lực.'},
     {zh:'爷爷用一块木头雕刻出了一只栩栩如生的小鸟。',py:'Yéye yòng yí kuài mùtou diāokè chūle yì zhī xǔxǔ rú shēng de xiǎoniǎo.',vn:'Ông nội dùng một khúc gỗ khắc thành một chú chim nhỏ sống động như thật.'},
     {zh:'这座古庙的门窗上都雕刻着精致的花纹。',py:'Zhè zuò gǔ miào de ménchuāng shang dōu diāokèzhe jīngzhì de huāwén.',vn:'Cửa ra vào và cửa sổ của ngôi chùa cổ này đều được chạm những hoa văn tinh xảo.'}
   ],
   colloFull:[
     {zh:'雕刻艺术',py:'diāokè yìshù',vn:'nghệ thuật điêu khắc'},
     {zh:'雕刻作品',py:'diāokè zuòpǐn',vn:'tác phẩm điêu khắc'},
     {zh:'在石头上雕刻',py:'zài shítou shang diāokè',vn:'khắc trên đá'},
     {zh:'雕刻出',py:'diāokè chū',vn:'khắc nên, tạc thành'},
     {zh:'雕刻家',py:'diāokèjiā',vn:'nhà điêu khắc'}
   ],
   patterns:[
     {s:'在 + vật liệu + 上 + 雕刻 + hình / chữ',m:'Khắc … lên …'},
     {s:'用 + vật liệu / công cụ + 雕刻出 + tác phẩm',m:'Dùng … khắc nên …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức tượng gỗ này được một người thợ già khắc suốt ba năm.',answer:'这个木雕是被一位老师傅雕刻了整整三年才完成的。',answerPy:'Zhège mùdiāo shì bèi yí wèi lǎo shīfu diāokèle zhěngzhěng sān nián cái wánchéng de.',
      note:'Câu bị động 被 + người + V; bổ ngữ thời lượng 三年 đứng sau động từ.',pair:'Câu bị động 被'},
     {promptLang:'vi',prompt:'Anh ấy khắc tên của hai người lên nhẫn.',answer:'他把两个人的名字雕刻在了戒指上。',answerPy:'Tā bǎ liǎng ge rén de míngzi diāokè zài le jièzhi shang.',
      note:'Câu 把 + V + 在 + nơi chốn: đưa vật tới vị trí mới.',pair:'Câu 把……V在……'}
   ]},

  {n:3,zh:'干旱',py:'gānhàn',pos:'Tính từ',vn:'khô hạn, hạn hán',hv:'can hạn',em:'🏜️',lesson:1,
   explain:['(Thời tiết, đất đai) lâu ngày không mưa, thiếu nước nghiêm trọng.','Dùng như danh từ: 遭遇干旱, 百年不遇的干旱; làm định ngữ: 干旱地区, 干旱的气候.'],
   usage:'遭遇 / 发生 + 干旱; 干旱 + 地区 / 季节 / 气候; 抗 + 旱 (抗旱 = chống hạn).',
   collo:['遭遇干旱','干旱地区','百年不遇的干旱','气候干旱'],
   ex_zh:'2010年中国西南遭遇百年不遇的干旱。',ex_py:'Èr líng yī líng nián Zhōngguó xīnán zāoyù bǎi nián bú yù de gānhàn.',ex_vn:'Năm 2010, vùng Tây Nam Trung Quốc gặp phải trận hạn hán trăm năm có một.',
   exList:[
     {zh:'2010年中国西南遭遇百年不遇的干旱，庄稼大面积枯萎。',py:'Èr líng yī líng nián Zhōngguó xīnán zāoyù bǎi nián bú yù de gānhàn, zhuāngjia dà miànjī kūwěi.',vn:'Năm 2010, vùng Tây Nam Trung Quốc gặp phải trận hạn hán trăm năm có một, hoa màu khô héo trên diện rộng.'},
     {zh:'这个地区气候干旱，一年到头很少下雨。',py:'Zhège dìqū qìhòu gānhàn, yì nián dào tóu hěn shǎo xià yǔ.',vn:'Vùng này khí hậu khô hạn, quanh năm rất ít mưa.'},
     {zh:'为了应对干旱，村民们想方设法从远处运水。',py:'Wèile yìngduì gānhàn, cūnmínmen xiǎngfāng-shèfǎ cóng yuǎnchù yùn shuǐ.',vn:'Để đối phó với hạn hán, dân làng tìm mọi cách chở nước từ nơi xa về.'}
   ],
   colloFull:[
     {zh:'遭遇干旱',py:'zāoyù gānhàn',vn:'gặp hạn hán'},
     {zh:'干旱地区',py:'gānhàn dìqū',vn:'vùng khô hạn'},
     {zh:'百年不遇的干旱',py:'bǎi nián bú yù de gānhàn',vn:'trận hạn trăm năm có một'},
     {zh:'气候干旱',py:'qìhòu gānhàn',vn:'khí hậu khô hạn'},
     {zh:'持续干旱',py:'chíxù gānhàn',vn:'hạn hán kéo dài'}
   ],
   patterns:[
     {s:'遭遇 / 发生 + (程度) + 的干旱',m:'Gặp phải trận hạn … (百年不遇, 严重)'},
     {s:'干旱 + 地区 / 季节',m:'Vùng / mùa khô hạn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu tiếp tục khô hạn như thế này thì hoa màu năm nay sẽ mất trắng.',answer:'要是再这样干旱下去，今年的庄稼就要绝收了。',answerPy:'Yàoshi zài zhèyàng gānhàn xiaqu, jīnnián de zhuāngjia jiù yào juéshōu le.',
      note:'要是……就……: giả thiết; V + 下去: tiếp tục; 就要……了: sắp.',pair:'要是……就…… / V下去'},
     {promptLang:'vi',prompt:'Tuy vùng này khô hạn nhưng người dân vẫn trồng được rất nhiều loại rau.',answer:'虽然这个地区很干旱，但是人们仍然种出了很多种蔬菜。',answerPy:'Suīrán zhège dìqū hěn gānhàn, dànshì rénmen réngrán zhòng chūle hěn duō zhǒng shūcài.',
      note:'虽然……但是……仍然……: nhượng bộ.',pair:'虽然……但是……'}
   ]},

  {n:4,zh:'耕地',py:'gēngdì',pos:'Danh từ',vn:'đất canh tác, đất trồng trọt',hv:'canh địa',em:'🌾',lesson:1,
   explain:['Đất đã được khai phá để trồng trọt hoa màu.','Cũng là động từ li hợp gēng dì: cày ruộng (耕了一上午地). Trong bài dùng nghĩa danh từ.'],
   usage:'耕地 + 面积; 保护 / 开垦 / 浇灌 + 耕地; 在耕地上.',
   collo:['耕地面积','保护耕地','浇灌耕地','大片耕地'],
   ex_zh:'耕地上，庄稼枯萎而死。',ex_py:'Gēngdì shang, zhuāngjia kūwěi ér sǐ.',ex_vn:'Trên đồng ruộng, hoa màu khô héo mà chết.',
   exList:[
     {zh:'干旱持续了几个月，耕地上，庄稼枯萎而死。',py:'Gānhàn chíxùle jǐ ge yuè, gēngdì shang, zhuāngjia kūwěi ér sǐ.',vn:'Hạn hán kéo dài mấy tháng, trên đồng ruộng hoa màu khô héo mà chết.'},
     {zh:'城市不断扩大，耕地面积却越来越少。',py:'Chéngshì búduàn kuòdà, gēngdì miànjī què yuè lái yuè shǎo.',vn:'Thành phố không ngừng mở rộng, diện tích đất canh tác lại ngày càng ít.'},
     {zh:'农民们想方设法从各地运水来浇灌耕地。',py:'Nóngmínmen xiǎngfāng-shèfǎ cóng gèdì yùn shuǐ lái jiāoguàn gēngdì.',vn:'Nông dân tìm mọi cách chở nước từ khắp nơi về tưới cho đồng ruộng.'}
   ],
   colloFull:[
     {zh:'耕地面积',py:'gēngdì miànjī',vn:'diện tích đất canh tác'},
     {zh:'保护耕地',py:'bǎohù gēngdì',vn:'bảo vệ đất canh tác'},
     {zh:'浇灌耕地',py:'jiāoguàn gēngdì',vn:'tưới đồng ruộng'},
     {zh:'大片耕地',py:'dàpiàn gēngdì',vn:'những cánh đồng rộng lớn'},
     {zh:'开垦耕地',py:'kāikěn gēngdì',vn:'khai hoang đất trồng'}
   ],
   patterns:[
     {s:'耕地 + 面积 + 增加 / 减少',m:'Diện tích đất canh tác tăng / giảm'},
     {s:'浇灌 / 保护 + 耕地',m:'Tưới / bảo vệ đất trồng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Diện tích đất canh tác ở đây càng ngày càng ít, vì vậy chúng ta phải bảo vệ tốt từng mảnh ruộng.',answer:'这里的耕地面积越来越少，所以我们要保护好每一块田。',answerPy:'Zhèlǐ de gēngdì miànjī yuè lái yuè shǎo, suǒyǐ wǒmen yào bǎohù hǎo měi yí kuài tián.',
      note:'越来越 + tính từ; bổ ngữ kết quả 保护好.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần có nước, mảnh đất này có thể trở thành ruộng tốt.',answer:'只要有水，这块地就能变成好耕地。',answerPy:'Zhǐyào yǒu shuǐ, zhè kuài dì jiù néng biànchéng hǎo gēngdì.',
      note:'只要……就……: điều kiện đủ.',pair:'只要……就……'}
   ]},

  {n:5,zh:'庄稼',py:'zhuāngjia',pos:'Danh từ',vn:'hoa màu, mùa màng',hv:'trang giá',em:'🌽',lesson:1,
   explain:['Các loại cây lương thực trồng ngoài đồng (lúa, ngô, lúa mì…) khi còn đang lớn trên ruộng.','稼 đọc nhẹ (jia). Khẩu ngữ, gần với 农作物 (văn viết, thuật ngữ).'],
   usage:'种庄稼 (trồng trọt); 庄稼 + 长得好 / 枯萎 / 丰收; 庄稼人 = người nông dân.',
   collo:['种庄稼','庄稼长得好','庄稼枯萎','庄稼人'],
   ex_zh:'今年雨水充足，地里的庄稼长得特别好。',ex_py:'Jīnnián yǔshuǐ chōngzú, dì li de zhuāngjia zhǎng de tèbié hǎo.',ex_vn:'Năm nay mưa đủ, hoa màu ngoài đồng mọc rất tốt.',
   exList:[
     {zh:'今年雨水充足，地里的庄稼长得特别好。',py:'Jīnnián yǔshuǐ chōngzú, dì li de zhuāngjia zhǎng de tèbié hǎo.',vn:'Năm nay mưa đủ, hoa màu ngoài đồng mọc rất tốt.'},
     {zh:'连续几个月没下雨，庄稼大面积枯萎。',py:'Liánxù jǐ ge yuè méi xià yǔ, zhuāngjia dà miànjī kūwěi.',vn:'Mấy tháng liền không mưa, hoa màu khô héo trên diện rộng.'},
     {zh:'我爷爷种了一辈子庄稼，最懂天气的变化。',py:'Wǒ yéye zhòngle yíbèizi zhuāngjia, zuì dǒng tiānqì de biànhuà.',vn:'Ông tôi làm ruộng cả đời, hiểu rõ nhất sự thay đổi của thời tiết.'}
   ],
   colloFull:[
     {zh:'种庄稼',py:'zhòng zhuāngjia',vn:'làm ruộng, trồng hoa màu'},
     {zh:'庄稼长得好',py:'zhuāngjia zhǎng de hǎo',vn:'hoa màu tươi tốt'},
     {zh:'庄稼枯萎',py:'zhuāngjia kūwěi',vn:'hoa màu khô héo'},
     {zh:'庄稼人',py:'zhuāngjiarén',vn:'người làm ruộng'},
     {zh:'庄稼丰收',py:'zhuāngjia fēngshōu',vn:'mùa màng bội thu'}
   ],
   patterns:[
     {s:'种 + 庄稼',m:'Trồng trọt, làm ruộng'},
     {s:'庄稼 + 长得 + tính từ',m:'Hoa màu mọc … (bổ ngữ trạng thái)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trận mưa lớn làm đổ cả một mảng hoa màu.',answer:'一场大雨把一大片庄稼都打倒了。',answerPy:'Yì cháng dà yǔ bǎ yí dàpiàn zhuāngjia dōu dǎdǎo le.',
      note:'Câu 把 + bổ ngữ kết quả 打倒; lượng từ 场 cho mưa.',pair:'Câu 把 + bổ ngữ kết quả'},
     {promptLang:'vi',prompt:'Hoa màu năm nay mọc tốt hơn năm ngoái nhiều.',answer:'今年的庄稼比去年长得好多了。',answerPy:'Jīnnián de zhuāngjia bǐ qùnián zhǎng de hǎo duō le.',
      note:'Câu so sánh 比 + bổ ngữ trạng thái + 多了.',pair:'Câu so sánh 比……多了'}
   ]},

  {n:6,zh:'枯萎',py:'kūwěi',pos:'Tính từ',vn:'khô héo',hv:'khô uy',em:'🥀',lesson:1,
   explain:['(Cây cỏ, hoa lá) khô đi, héo rũ vì thiếu nước hoặc già cỗi.','Nghĩa bóng: tinh thần, tình cảm tàn lụi (枯萎的心). Không mang tân ngữ.'],
   usage:'花 / 草 / 庄稼 / 叶子 + 枯萎 (了); 枯萎而死; 让 / 使 + … + 枯萎.',
   collo:['花枯萎了','枯萎而死','大面积枯萎','枯萎的叶子'],
   ex_zh:'耕地上，庄稼枯萎而死，农作物大面积绝收。',ex_py:'Gēngdì shang, zhuāngjia kūwěi ér sǐ, nóngzuòwù dà miànjī juéshōu.',ex_vn:'Trên đồng ruộng, hoa màu khô héo mà chết, cây trồng mất trắng trên diện rộng.',
   exList:[
     {zh:'耕地上，庄稼枯萎而死，农作物大面积绝收。',py:'Gēngdì shang, zhuāngjia kūwěi ér sǐ, nóngzuòwù dà miànjī juéshōu.',vn:'Trên đồng ruộng, hoa màu khô héo mà chết, cây trồng mất trắng trên diện rộng.'},
     {zh:'我出差一个星期，阳台上的花都枯萎了。',py:'Wǒ chūchāi yí ge xīngqī, yángtái shang de huā dōu kūwěi le.',vn:'Tôi đi công tác một tuần, hoa ngoài ban công héo hết cả.'},
     {zh:'秋风一吹，树上枯萎的叶子纷纷落了下来。',py:'Qiūfēng yì chuī, shù shang kūwěi de yèzi fēnfēn luòle xialai.',vn:'Gió thu vừa thổi, những chiếc lá khô héo trên cây lần lượt rơi xuống.'}
   ],
   colloFull:[
     {zh:'花枯萎了',py:'huā kūwěi le',vn:'hoa héo rồi'},
     {zh:'枯萎而死',py:'kūwěi ér sǐ',vn:'khô héo mà chết'},
     {zh:'大面积枯萎',py:'dà miànjī kūwěi',vn:'khô héo trên diện rộng'},
     {zh:'枯萎的叶子',py:'kūwěi de yèzi',vn:'lá khô héo'},
     {zh:'逐渐枯萎',py:'zhújiàn kūwěi',vn:'dần dần héo úa'}
   ],
   patterns:[
     {s:'N (cây cỏ) + 枯萎了',m:'… héo rồi (không mang tân ngữ)'},
     {s:'枯萎 + 而 + 死',m:'Khô héo mà chết (而 nối cách thức – kết quả)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì quên tưới nước nên chậu hoa mẹ tặng đã héo mất rồi.',answer:'因为忘了浇水，妈妈送的那盆花已经枯萎了。',answerPy:'Yīnwèi wàngle jiāo shuǐ, māma sòng de nà pén huā yǐjīng kūwěi le.',
      note:'因为……: nguyên nhân; 已经……了: đã xảy ra.',pair:'因为…… / 已经……了'},
     {promptLang:'vi',prompt:'Những bông hoa này héo nhanh quá, mới hai ngày đã héo cả rồi.',answer:'这些花枯萎得太快了，才两天就都枯萎了。',answerPy:'Zhèxiē huā kūwěi de tài kuài le, cái liǎng tiān jiù dōu kūwěi le.',
      note:'才……就……: mới … đã … (sớm hơn dự kiến).',pair:'才……就……'}
   ]},

  {n:7,zh:'牲畜',py:'shēngchù',pos:'Danh từ',vn:'súc vật, gia súc',hv:'sinh súc',em:'🐄',lesson:1,
   explain:['Các loài động vật do con người nuôi (trâu, bò, ngựa, dê, lợn…), nhất là con vật lớn dùng để làm việc hoặc lấy thịt.','Danh từ tập hợp, thường không dùng lượng từ đếm từng con; nói 一头牛 chứ không nói 一头牲畜 trong văn phong thường.'],
   usage:'饲养 / 放养 + 牲畜; 人和牲畜 + V; 牲畜 + 饮水 / 吃草.',
   collo:['饲养牲畜','人和牲畜','牲畜饮水','放牧牲畜'],
   ex_zh:'人和牲畜饮水都很困难。',ex_py:'Rén hé shēngchù yǐn shuǐ dōu hěn kùnnan.',ex_vn:'Cả người và gia súc đều khó khăn về nước uống.',
   exList:[
     {zh:'就在各地旱情严重、人和牲畜饮水都难的时候，梯田依旧壮丽。',py:'Jiù zài gèdì hànqíng yánzhòng, rén hé shēngchù yǐn shuǐ dōu nán de shíhou, tītián yījiù zhuànglì.',vn:'Đúng lúc hạn hán các nơi nghiêm trọng, người và gia súc đều khó có nước uống, ruộng bậc thang vẫn tráng lệ như xưa.'},
     {zh:'这里的牧民主要靠饲养牲畜为生。',py:'Zhèlǐ de mùmín zhǔyào kào sìyǎng shēngchù wéi shēng.',vn:'Dân du mục ở đây chủ yếu sống nhờ chăn nuôi gia súc.'},
     {zh:'下大雪之前，村民们把牲畜都赶回了家。',py:'Xià dàxuě zhīqián, cūnmínmen bǎ shēngchù dōu gǎnhuíle jiā.',vn:'Trước khi tuyết rơi dày, dân làng đã lùa hết gia súc về nhà.'}
   ],
   colloFull:[
     {zh:'饲养牲畜',py:'sìyǎng shēngchù',vn:'chăn nuôi gia súc'},
     {zh:'人和牲畜',py:'rén hé shēngchù',vn:'người và gia súc'},
     {zh:'牲畜饮水',py:'shēngchù yǐn shuǐ',vn:'gia súc uống nước'},
     {zh:'放牧牲畜',py:'fàngmù shēngchù',vn:'chăn thả gia súc'},
     {zh:'靠牲畜为生',py:'kào shēngchù wéi shēng',vn:'sống nhờ gia súc'}
   ],
   patterns:[
     {s:'饲养 / 放牧 + 牲畜',m:'Nuôi / chăn thả gia súc'},
     {s:'靠 + 牲畜 + 为生',m:'Sống nhờ gia súc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả gia súc cũng không có nước uống, huống hồ là tưới ruộng.',answer:'连牲畜都没有水喝，更别说浇地了。',answerPy:'Lián shēngchù dōu méiyǒu shuǐ hē, gèng bié shuō jiāo dì le.',
      note:'连……都……: ngay cả; 更别说……了: huống hồ.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Ông tôi vừa trồng trọt vừa chăn nuôi gia súc.',answer:'我爷爷既种庄稼，又饲养牲畜。',answerPy:'Wǒ yéye jì zhòng zhuāngjia, yòu sìyǎng shēngchù.',
      note:'既……又……: vừa … vừa ….',pair:'既……又……'}
   ]},

  {n:8,zh:'梯田',py:'tītián',pos:'Danh từ',vn:'ruộng bậc thang',hv:'thê điền',em:'🌄',lesson:1,
   explain:['Ruộng làm thành từng bậc trên sườn núi, nhìn như những bậc thang (梯 = cái thang).','Trong sách đánh dấu * (từ vượt đề cương). Hay gặp: 一片片梯田, 一层层梯田, 开辟梯田, 哈尼梯田.'],
   usage:'一片 / 一层 + 梯田; 开辟 / 修建 + 梯田; 把山 + 雕塑成 + 梯田.',
   collo:['一片片梯田','开辟梯田','哈尼梯田','层层梯田'],
   ex_zh:'哀牢山南部的一片片梯田壮丽依旧。',ex_py:'Āiláo Shān nánbù de yí piànpiàn tītián zhuànglì yījiù.',ex_vn:'Những thửa ruộng bậc thang ở phía nam núi Ai Lao vẫn tráng lệ như xưa.',
   exList:[
     {zh:'滇南红河哀牢山南部的一片片梯田壮丽依旧。',py:'Diān nán Hónghé Āiláo Shān nánbù de yí piànpiàn tītián zhuànglì yījiù.',vn:'Những thửa ruộng bậc thang ở phía nam núi Ai Lao, Hồng Hà, miền nam Vân Nam vẫn tráng lệ như xưa.'},
     {zh:'经过数十代人的努力，他们终于将一座座大山雕塑成了梯田。',py:'Jīngguò shù shí dài rén de nǔlì, tāmen zhōngyú jiāng yí zuòzuò dà shān diāosù chéngle tītián.',vn:'Trải qua nỗ lực của mấy chục thế hệ, cuối cùng họ đã tạc những ngọn núi lớn thành ruộng bậc thang.'},
     {zh:'每年秋天，很多游客专程到这里拍摄金黄的梯田。',py:'Měi nián qiūtiān, hěn duō yóukè zhuānchéng dào zhèlǐ pāishè jīnhuáng de tītián.',vn:'Mỗi mùa thu, rất nhiều du khách đến đây chỉ để chụp những thửa ruộng bậc thang vàng óng.'}
   ],
   colloFull:[
     {zh:'一片片梯田',py:'yí piànpiàn tītián',vn:'từng thửa ruộng bậc thang'},
     {zh:'开辟梯田',py:'kāipì tītián',vn:'khai phá ruộng bậc thang'},
     {zh:'哈尼梯田',py:'Hāní tītián',vn:'ruộng bậc thang Hà Nhì'},
     {zh:'层层梯田',py:'céngcéng tītián',vn:'ruộng bậc thang tầng tầng lớp lớp'},
     {zh:'梯田景观',py:'tītián jǐngguān',vn:'cảnh quan ruộng bậc thang'}
   ],
   patterns:[
     {s:'一片片 / 一层层 + 梯田',m:'Từng thửa / từng tầng ruộng bậc thang'},
     {s:'把 / 将 + 山 + 开辟 / 雕塑成 + 梯田',m:'Biến núi thành ruộng bậc thang'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ruộng bậc thang ở Mù Cang Chải đẹp đến mức khiến du khách không muốn rời đi.',answer:'木江界的梯田美得让游客都舍不得离开。',answerPy:'Mùjiāngjiè de tītián měi de ràng yóukè dōu shěbude líkāi.',
      note:'Tính từ + 得 + 让 + người + …: đẹp đến mức khiến ….',pair:'adj + 得 + 让……'},
     {promptLang:'vi',prompt:'Từ xa nhìn lại, những thửa ruộng bậc thang giống như từng bậc thang dẫn lên trời.',answer:'远远望去，一片片梯田像一级级通向天空的台阶。',answerPy:'Yuǎnyuǎn wàng qu, yí piànpiàn tītián xiàng yì jíjí tōngxiàng tiānkōng de táijiē.',
      note:'像……: so sánh; lượng từ lặp 一片片, 一级级 chỉ số nhiều.',pair:'So sánh 像……'}
   ]},

  {n:9,zh:'壮丽',py:'zhuànglì',pos:'Tính từ',vn:'tráng lệ, lộng lẫy, đẹp đẽ',hv:'tráng lệ',em:'🏞️',lesson:1,
   explain:['Hùng vĩ và đẹp đẽ; dùng cho cảnh vật lớn lao (núi sông, cảnh sắc, công trình) hoặc sự nghiệp vĩ đại.','Văn viết, sắc thái trang trọng; không dùng tả người hay vật nhỏ (không nói 她很壮丽).'],
   usage:'景色 / 山河 / 画面 + 壮丽; 壮丽的 + 景色 / 山河; 壮丽依旧 (vẫn tráng lệ như xưa).',
   collo:['壮丽的景色','壮丽依旧','壮丽的山河','雄伟壮丽'],
   ex_zh:'一片片梯田壮丽依旧，像一张张亮丽的油画。',ex_py:'Yí piànpiàn tītián zhuànglì yījiù, xiàng yì zhāngzhāng liànglì de yóuhuà.',ex_vn:'Những thửa ruộng bậc thang vẫn tráng lệ như xưa, giống như những bức tranh sơn dầu rực rỡ.',
   exList:[
     {zh:'一片片梯田壮丽依旧，像一张张亮丽的油画。',py:'Yí piànpiàn tītián zhuànglì yījiù, xiàng yì zhāngzhāng liànglì de yóuhuà.',vn:'Những thửa ruộng bậc thang vẫn tráng lệ như xưa, giống như những bức tranh sơn dầu rực rỡ.'},
     {zh:'站在山顶上，眼前壮丽的景色让我们久久不愿离开。',py:'Zhàn zài shāndǐng shang, yǎnqián zhuànglì de jǐngsè ràng wǒmen jiǔjiǔ bú yuàn líkāi.',vn:'Đứng trên đỉnh núi, cảnh sắc tráng lệ trước mắt khiến chúng tôi mãi không muốn rời đi.'},
     {zh:'这部纪录片展示了祖国壮丽的山河。',py:'Zhè bù jìlùpiàn zhǎnshìle zǔguó zhuànglì de shānhé.',vn:'Bộ phim tài liệu này giới thiệu non sông tráng lệ của tổ quốc.'}
   ],
   colloFull:[
     {zh:'壮丽的景色',py:'zhuànglì de jǐngsè',vn:'cảnh sắc tráng lệ'},
     {zh:'壮丽依旧',py:'zhuànglì yījiù',vn:'vẫn tráng lệ như xưa'},
     {zh:'壮丽的山河',py:'zhuànglì de shānhé',vn:'non sông tráng lệ'},
     {zh:'雄伟壮丽',py:'xióngwěi zhuànglì',vn:'hùng vĩ tráng lệ'},
     {zh:'壮丽的日出',py:'zhuànglì de rìchū',vn:'cảnh mặt trời mọc hùng vĩ'}
   ],
   patterns:[
     {s:'壮丽的 + 景色 / 山河 / 画卷',m:'… tráng lệ (định ngữ)'},
     {s:'N + 壮丽依旧',m:'… vẫn tráng lệ như xưa (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ nhìn thấy cảnh mặt trời mọc hùng vĩ như vậy.',answer:'我从来没见过这么壮丽的日出。',answerPy:'Wǒ cónglái méi jiànguo zhème zhuànglì de rìchū.',
      note:'从来没 + V + 过: chưa từng bao giờ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cảnh sắc ở đó tráng lệ đến nỗi tôi không biết dùng lời nào để miêu tả.',answer:'那里的景色壮丽得我都不知道该用什么话来形容。',answerPy:'Nàlǐ de jǐngsè zhuànglì de wǒ dōu bù zhīdào gāi yòng shénme huà lái xíngróng.',
      note:'adj + 得 + mệnh đề: bổ ngữ trình độ (đến nỗi …).',pair:'Bổ ngữ trình độ adj + 得 + mệnh đề'}
   ]},

  {n:10,zh:'依旧',py:'yījiù',pos:'Động từ',vn:'như cũ, vẫn như xưa',hv:'y cựu',em:'🔁',lesson:1,
   explain:['Động từ: vẫn giữ nguyên như trước, không thay đổi — đứng cuối câu/cụm: 壮丽依旧, 风景依旧.','Còn dùng như phó từ (= 仍然, 依然) trước động từ/tính từ: 依旧贫穷, 依旧很忙. Văn viết.'],
   usage:'N + adj + 依旧 (壮丽依旧); 依旧 + V / adj (依旧贫穷落后); 一切依旧.',
   collo:['壮丽依旧','一切依旧','风景依旧','依旧如此'],
   ex_zh:'几十年过去了，这个地方依旧贫穷落后。',ex_py:'Jǐ shí nián guòqu le, zhège dìfang yījiù pínqióng luòhòu.',ex_vn:'Mấy chục năm trôi qua, nơi này vẫn nghèo nàn lạc hậu.',
   exList:[
     {zh:'几十年过去了，这个地方依旧贫穷落后。',py:'Jǐ shí nián guòqu le, zhège dìfang yījiù pínqióng luòhòu.',vn:'Mấy chục năm trôi qua, nơi này vẫn nghèo nàn lạc hậu. (练习2 ①)'},
     {zh:'就在各地旱情严重的时候，哀牢山的梯田壮丽依旧。',py:'Jiù zài gèdì hànqíng yánzhòng de shíhou, Āiláo Shān de tītián zhuànglì yījiù.',vn:'Đúng lúc hạn hán ở các nơi nghiêm trọng, ruộng bậc thang núi Ai Lao vẫn tráng lệ như xưa.'},
     {zh:'多年后回到故乡，小河依旧，老房子却不见了。',py:'Duō nián hòu huídào gùxiāng, xiǎohé yījiù, lǎo fángzi què bú jiàn le.',vn:'Nhiều năm sau trở về quê, dòng sông nhỏ vẫn như xưa, căn nhà cũ lại không còn.'}
   ],
   colloFull:[
     {zh:'壮丽依旧',py:'zhuànglì yījiù',vn:'vẫn tráng lệ như xưa'},
     {zh:'一切依旧',py:'yíqiè yījiù',vn:'mọi thứ vẫn như cũ'},
     {zh:'风景依旧',py:'fēngjǐng yījiù',vn:'phong cảnh vẫn như xưa'},
     {zh:'依旧如此',py:'yījiù rúcǐ',vn:'vẫn như vậy'},
     {zh:'依旧贫穷',py:'yījiù pínqióng',vn:'vẫn nghèo khó'}
   ],
   patterns:[
     {s:'N + (adj) + 依旧',m:'… vẫn như cũ (động từ, đứng cuối)'},
     {s:'依旧 + V / adj',m:'Vẫn … (phó từ = 仍然)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù đã giải thích nhiều lần, cậu ấy vẫn không hiểu.',answer:'尽管我已经解释了很多次，他依旧不明白。',answerPy:'Jǐnguǎn wǒ yǐjīng jiěshìle hěn duō cì, tā yījiù bù míngbai.',
      note:'尽管……，依旧……: nhượng bộ, kết quả không đổi.',pair:'尽管……，……'},
     {promptLang:'vi',prompt:'Mười năm trôi qua, con phố này vẫn náo nhiệt như trước.',answer:'十年过去了，这条街依旧像以前一样热闹。',answerPy:'Shí nián guòqu le, zhè tiáo jiē yījiù xiàng yǐqián yíyàng rènao.',
      note:'像……一样 + adj: giống như … .',pair:'像……一样'}
   ]},

  {n:11,zh:'峡谷',py:'xiágǔ',pos:'Danh từ',vn:'khe sâu, hẻm núi',hv:'hiệp cốc',em:'🏜️',lesson:1,
   explain:['Thung lũng sâu và hẹp kẹp giữa hai vách núi cao, thường có sông suối chảy qua.','Hay gặp: 大峡谷, 峡谷间, 延伸至峡谷.'],
   usage:'由……延伸至峡谷; 峡谷 + 间 / 中 / 里; 穿过峡谷.',
   collo:['延伸至峡谷','峡谷间','大峡谷','穿过峡谷'],
   ex_zh:'梯田一层层由半山腰延伸至峡谷。',ex_py:'Tītián yì céngcéng yóu bànshānyāo yánshēn zhì xiágǔ.',ex_vn:'Ruộng bậc thang từng tầng từng tầng kéo dài từ lưng chừng núi xuống tận hẻm núi.',
   exList:[
     {zh:'梯田一片片、一层层由半山腰延伸至峡谷。',py:'Tītián yí piànpiàn, yì céngcéng yóu bànshānyāo yánshēn zhì xiágǔ.',vn:'Ruộng bậc thang từng thửa, từng tầng kéo dài từ lưng chừng núi xuống tận hẻm núi.'},
     {zh:'峡谷间闪闪发光的是小溪、泉水和瀑布。',py:'Xiágǔ jiān shǎnshǎn fāguāng de shì xiǎoxī, quánshuǐ hé pùbù.',vn:'Thứ lấp lánh giữa hẻm núi là suối nhỏ, nước suối nguồn và thác nước.'},
     {zh:'一条小河从峡谷中穿过，两边都是陡峭的山崖。',py:'Yì tiáo xiǎohé cóng xiágǔ zhōng chuānguò, liǎngbiān dōu shì dǒuqiào de shānyá.',vn:'Một con sông nhỏ chảy xuyên qua hẻm núi, hai bên đều là vách núi dựng đứng.'}
   ],
   colloFull:[
     {zh:'延伸至峡谷',py:'yánshēn zhì xiágǔ',vn:'kéo dài tới hẻm núi'},
     {zh:'峡谷间',py:'xiágǔ jiān',vn:'giữa hẻm núi'},
     {zh:'大峡谷',py:'dà xiágǔ',vn:'hẻm núi lớn'},
     {zh:'穿过峡谷',py:'chuānguò xiágǔ',vn:'xuyên qua hẻm núi'},
     {zh:'深深的峡谷',py:'shēnshēn de xiágǔ',vn:'hẻm núi sâu thẳm'}
   ],
   patterns:[
     {s:'由 + A + 延伸至 + 峡谷',m:'Kéo dài từ A tới hẻm núi (văn viết)'},
     {s:'峡谷间 / 峡谷中 + V',m:'Trong / giữa hẻm núi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi đi bộ ba tiếng mới xuống được đáy hẻm núi.',answer:'我们走了三个小时才走到峡谷底下。',answerPy:'Wǒmen zǒule sān ge xiǎoshí cái zǒudào xiágǔ dǐxia.',
      note:'Thời lượng + 才 + V: mất nhiều thời gian mới ….',pair:'……才……'},
     {promptLang:'vi',prompt:'Hẻm núi này sâu đến nỗi đứng trên đỉnh không nhìn thấy đáy.',answer:'这个峡谷深得站在山顶上都看不见底。',answerPy:'Zhège xiágǔ shēn de zhàn zài shāndǐng shang dōu kàn bu jiàn dǐ.',
      note:'Bổ ngữ trình độ + bổ ngữ khả năng phủ định 看不见.',pair:'Bổ ngữ khả năng V不见'}
   ]},

  {n:12,zh:'铺',py:'pū',pos:'Động từ',vn:'trải, rải',hv:'phô',em:'🧺',lesson:1,
   explain:['Trải, rải một vật ra cho phẳng trên một bề mặt: 铺床单, 铺地毯, 铺路.','Thành ngữ 铺天盖地: che trời phủ đất — số lượng rất nhiều, khí thế lớn. Chú ý: 铺 đọc pù là danh từ (cửa hàng, giường).'],
   usage:'铺 + đồ vật (床单 / 地毯); 把 + N + 铺在 + nơi; 铺路; 铺天盖地.',
   collo:['铺天盖地','铺床','铺路','铺地毯'],
   ex_zh:'梯田像一张张亮丽的油画，铺天盖地，席卷而至。',ex_py:'Tītián xiàng yì zhāngzhāng liànglì de yóuhuà, pūtiān-gàidì, xíjuǎn ér zhì.',ex_vn:'Ruộng bậc thang như những bức tranh sơn dầu rực rỡ, che trời phủ đất, cuộn tràn tới.',
   exList:[
     {zh:'梯田像一张张亮丽的油画，铺天盖地，席卷而至。',py:'Tītián xiàng yì zhāngzhāng liànglì de yóuhuà, pūtiān-gàidì, xíjuǎn ér zhì.',vn:'Ruộng bậc thang như những bức tranh sơn dầu rực rỡ, che trời phủ đất, cuộn tràn tới.'},
     {zh:'妈妈在地上铺了一块厚厚的地毯，免得孩子摔疼。',py:'Māma zài dì shang pūle yí kuài hòuhòu de dìtǎn, miǎnde háizi shuāiténg.',vn:'Mẹ trải một tấm thảm dày dưới sàn, kẻo con bé ngã đau.'},
     {zh:'一夜大雪过后，地上铺满了厚厚的一层雪。',py:'Yí yè dàxuě guòhòu, dì shang pūmǎnle hòuhòu de yì céng xuě.',vn:'Sau một đêm tuyết lớn, mặt đất phủ kín một lớp tuyết dày.'}
   ],
   colloFull:[
     {zh:'铺天盖地',py:'pūtiān-gàidì',vn:'che trời phủ đất, ngợp trời'},
     {zh:'铺床',py:'pū chuáng',vn:'trải giường'},
     {zh:'铺路',py:'pū lù',vn:'lát đường; mở đường (nghĩa bóng)'},
     {zh:'铺地毯',py:'pū dìtǎn',vn:'trải thảm'},
     {zh:'铺满',py:'pūmǎn',vn:'phủ kín'}
   ],
   patterns:[
     {s:'把 + N + 铺在 + nơi chốn',m:'Trải … lên …'},
     {s:'nơi chốn + 铺满了 + N',m:'… phủ kín …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai trải tấm bản đồ lên bàn rồi cẩn thận nghiên cứu tuyến đường.',answer:'哥哥把地图铺在桌子上，然后仔细研究路线。',answerPy:'Gēge bǎ dìtú pū zài zhuōzi shang, ránhòu zǐxì yánjiū lùxiàn.',
      note:'Câu 把 + V在 + nơi chốn; 然后 nối hành động kế tiếp.',pair:'Câu 把……V在……'},
     {promptLang:'vi',prompt:'Quảng cáo về sản phẩm mới tràn ngập khắp nơi, muốn không nhìn thấy cũng khó.',answer:'新产品的广告铺天盖地，想看不见都难。',answerPy:'Xīn chǎnpǐn de guǎnggào pūtiān-gàidì, xiǎng kàn bu jiàn dōu nán.',
      note:'想……都难: muốn … cũng khó (nhấn mạnh).',pair:'想……都难'}
   ]},

  {n:13,zh:'卷',py:'juǎn',pos:'Động từ',vn:'cuốn, cuộn',hv:'quyển',em:'🌀',lesson:1,
   explain:['Cuộn tròn một vật lại (卷起袖子, 把地图卷起来); hoặc (gió, nước) cuốn lấy mang đi (被风卷走).','Thành ngữ trong bài 席卷而至: như cuốn chiếu mà tràn tới — ào ạt kéo đến, phủ khắp. Đọc juàn là danh từ (quyển sách, bài thi: 试卷).'],
   usage:'卷 + 起 / 起来 (卷起袖子); 被 + 风 / 浪 + 卷走; 席卷 + nơi / 而至.',
   collo:['席卷而至','卷起袖子','被风卷走','卷起来'],
   ex_zh:'一阵大风吹来，把地上的落叶卷到了半空中。',ex_py:'Yí zhèn dà fēng chuīlai, bǎ dì shang de luòyè juǎndàole bànkōng zhōng.',ex_vn:'Một cơn gió lớn thổi tới, cuốn lá rụng dưới đất lên lưng chừng trời.',
   exList:[
     {zh:'一阵大风吹来，把地上的落叶卷到了半空中。',py:'Yí zhèn dà fēng chuīlai, bǎ dì shang de luòyè juǎndàole bànkōng zhōng.',vn:'Một cơn gió lớn thổi tới, cuốn lá rụng dưới đất lên lưng chừng trời.'},
     {zh:'梯田像一张张油画，铺天盖地，席卷而至。',py:'Tītián xiàng yì zhāngzhāng yóuhuà, pūtiān-gàidì, xíjuǎn ér zhì.',vn:'Ruộng bậc thang như những bức tranh sơn dầu, che trời phủ đất, ào ạt tràn tới.'},
     {zh:'他卷起袖子，二话不说就干了起来。',py:'Tā juǎnqǐ xiùzi, èrhuà bù shuō jiù gànle qilai.',vn:'Anh ấy xắn tay áo lên, chẳng nói chẳng rằng bắt tay vào làm ngay.'}
   ],
   colloFull:[
     {zh:'席卷而至',py:'xíjuǎn ér zhì',vn:'ào ạt tràn tới'},
     {zh:'卷起袖子',py:'juǎnqǐ xiùzi',vn:'xắn tay áo'},
     {zh:'被风卷走',py:'bèi fēng juǎnzǒu',vn:'bị gió cuốn đi'},
     {zh:'卷起来',py:'juǎn qilai',vn:'cuộn lại'},
     {zh:'席卷全球',py:'xíjuǎn quánqiú',vn:'càn quét toàn cầu'}
   ],
   patterns:[
     {s:'把 + N + 卷起来 / 卷成……',m:'Cuộn … lại / cuộn thành …'},
     {s:'N + 被 + 风 / 浪 + 卷走',m:'… bị gió / sóng cuốn đi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc mũ của tôi bị gió cuốn xuống sông mất rồi.',answer:'我的帽子被风卷到河里去了。',answerPy:'Wǒ de màozi bèi fēng juǎndào hé li qu le.',
      note:'Câu bị động 被 + V到 + nơi + 去了.',pair:'Câu bị động 被'},
     {promptLang:'vi',prompt:'Xem xong bản đồ nhớ cuộn lại rồi cất vào ngăn kéo.',answer:'看完地图以后，记得把它卷起来放进抽屉里。',answerPy:'Kànwán dìtú yǐhòu, jìde bǎ tā juǎn qilai fàngjìn chōuti li.',
      note:'Câu 把 + bổ ngữ xu hướng 起来 + động từ liên tiếp 放进.',pair:'Câu 把 + V起来'}
   ]},

  {n:14,zh:'蔚蓝',py:'wèilán',pos:'Tính từ',vn:'xanh biếc, xanh thẳm',hv:'uý lam',em:'🌌',lesson:1,
   explain:['Màu xanh lam trong trẻo, sâu thẳm — thường tả bầu trời, biển cả.','Văn viết, giàu hình ảnh; chủ yếu làm định ngữ: 蔚蓝的天空, 蔚蓝的大海.'],
   usage:'蔚蓝的 + 天空 / 大海; 一片蔚蓝.',
   collo:['蔚蓝的天空','蔚蓝的大海','一片蔚蓝','蔚蓝色'],
   ex_zh:'蔚蓝的天空，漂浮的白云，摇摆的树影，更衬托出梯田的壮美。',ex_py:'Wèilán de tiānkōng, piāofú de báiyún, yáobǎi de shùyǐng, gèng chèntuō chū tītián de zhuàngměi.',ex_vn:'Bầu trời xanh thẳm, mây trắng trôi bồng bềnh, bóng cây đung đưa càng làm nổi bật vẻ đẹp hùng tráng của ruộng bậc thang.',
   exList:[
     {zh:'蔚蓝的天空，漂浮的白云，摇摆的树影，更衬托出梯田的壮美。',py:'Wèilán de tiānkōng, piāofú de báiyún, yáobǎi de shùyǐng, gèng chèntuō chū tītián de zhuàngměi.',vn:'Bầu trời xanh thẳm, mây trắng trôi bồng bềnh, bóng cây đung đưa càng làm nổi bật vẻ đẹp hùng tráng của ruộng bậc thang.'},
     {zh:'站在海边，眼前是一望无际的蔚蓝的大海。',py:'Zhàn zài hǎibiān, yǎnqián shì yíwàng-wújì de wèilán de dàhǎi.',vn:'Đứng bên bờ biển, trước mắt là biển xanh thẳm mênh mông không bờ bến.'},
     {zh:'雨过天晴，天空又恢复了一片蔚蓝。',py:'Yǔ guò tiān qíng, tiānkōng yòu huīfùle yí piàn wèilán.',vn:'Mưa tạnh trời quang, bầu trời lại xanh biếc trở lại.'}
   ],
   colloFull:[
     {zh:'蔚蓝的天空',py:'wèilán de tiānkōng',vn:'bầu trời xanh thẳm'},
     {zh:'蔚蓝的大海',py:'wèilán de dàhǎi',vn:'biển xanh biếc'},
     {zh:'一片蔚蓝',py:'yí piàn wèilán',vn:'một màu xanh biếc'},
     {zh:'蔚蓝色',py:'wèilánsè',vn:'màu xanh thẳm'},
     {zh:'蔚蓝的海水',py:'wèilán de hǎishuǐ',vn:'nước biển xanh biếc'}
   ],
   patterns:[
     {s:'蔚蓝的 + 天空 / 大海',m:'Bầu trời / biển xanh thẳm (định ngữ)'},
     {s:'(天空 / 大海) + 一片蔚蓝',m:'Một màu xanh biếc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn bầu trời xanh thẳm, tâm trạng tôi bỗng trở nên dễ chịu hơn.',answer:'看着蔚蓝的天空，我的心情一下子变得舒服多了。',answerPy:'Kànzhe wèilán de tiānkōng, wǒ de xīnqíng yíxiàzi biàn de shūfu duō le.',
      note:'V着 làm trạng ngữ đi kèm; 变得 + adj + 多了.',pair:'V着……，……'},
     {promptLang:'vi',prompt:'Nếu không có ô nhiễm thì bầu trời thành phố cũng có thể xanh biếc như thế.',answer:'如果没有污染，城市的天空也能这么蔚蓝。',answerPy:'Rúguǒ méiyǒu wūrǎn, chéngshì de tiānkōng yě néng zhème wèilán.',
      note:'如果……也……: giả thiết.',pair:'如果……'}
   ]},

  {n:15,zh:'漂浮',py:'piāofú',pos:'Động từ',vn:'trôi, bồng bềnh',hv:'phiêu phù',em:'☁️',lesson:1,
   explain:['Nổi và trôi trên mặt nước hoặc lơ lửng trôi trong không trung.','Làm định ngữ: 漂浮的白云; vị ngữ: 漂浮在水面上. Nghĩa bóng: (tác phong) hời hợt, không thực tế (作风漂浮).'],
   usage:'漂浮 + 在 + 水面 / 空中; 漂浮的 + 白云 / 树叶.',
   collo:['漂浮的白云','漂浮在水面上','漂浮在空中','漂浮物'],
   ex_zh:'几片树叶漂浮在平静的湖面上。',ex_py:'Jǐ piàn shùyè piāofú zài píngjìng de húmiàn shang.',ex_vn:'Vài chiếc lá trôi bồng bềnh trên mặt hồ phẳng lặng.',
   exList:[
     {zh:'几片树叶漂浮在平静的湖面上。',py:'Jǐ piàn shùyè piāofú zài píngjìng de húmiàn shang.',vn:'Vài chiếc lá trôi bồng bềnh trên mặt hồ phẳng lặng.'},
     {zh:'蔚蓝的天空中漂浮着朵朵白云。',py:'Wèilán de tiānkōng zhōng piāofúzhe duǒduǒ báiyún.',vn:'Trên bầu trời xanh thẳm bồng bềnh những đám mây trắng.'},
     {zh:'河面上漂浮着很多塑料瓶，环境污染真让人担心。',py:'Hémiàn shang piāofúzhe hěn duō sùliào píng, huánjìng wūrǎn zhēn ràng rén dānxīn.',vn:'Trên mặt sông trôi nổi rất nhiều chai nhựa, ô nhiễm môi trường thật khiến người ta lo lắng.'}
   ],
   colloFull:[
     {zh:'漂浮的白云',py:'piāofú de báiyún',vn:'mây trắng bồng bềnh'},
     {zh:'漂浮在水面上',py:'piāofú zài shuǐmiàn shang',vn:'nổi trên mặt nước'},
     {zh:'漂浮在空中',py:'piāofú zài kōngzhōng',vn:'lơ lửng giữa không trung'},
     {zh:'漂浮物',py:'piāofúwù',vn:'vật trôi nổi'},
     {zh:'随风漂浮',py:'suí fēng piāofú',vn:'trôi theo gió'}
   ],
   patterns:[
     {s:'N + 漂浮在 + 水面 / 空中',m:'… trôi nổi trên / trong …'},
     {s:'nơi chốn + 漂浮着 + N',m:'Ở … trôi bồng bềnh … (câu tồn hiện)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên mặt biển trôi nổi một chiếc thuyền nhỏ, không biết là của ai.',answer:'海面上漂浮着一只小船，不知道是谁的。',answerPy:'Hǎimiàn shang piāofúzhe yì zhī xiǎochuán, bù zhīdào shì shéi de.',
      note:'Câu tồn hiện: nơi chốn + V着 + số lượng + N.',pair:'Câu tồn hiện V着'},
     {promptLang:'vi',prompt:'Những quả bóng bay vừa thả ra đã lơ lửng trên trời rồi.',answer:'刚放出去的气球已经漂浮在天上了。',answerPy:'Gāng fàng chuqu de qìqiú yǐjīng piāofú zài tiān shang le.',
      note:'Bổ ngữ xu hướng kép 放出去 làm định ngữ; 已经……了.',pair:'Bổ ngữ xu hướng kép'}
   ]},

  {n:16,zh:'摇摆',py:'yáobǎi',pos:'Động từ',vn:'đong đưa, lắc lư',hv:'dao bãi',em:'🌿',lesson:1,
   explain:['Lắc qua lắc lại, đung đưa (cành cây, sóng nước, thân người).','Nghĩa bóng: (ý kiến, thái độ) dao động, không kiên định: 在两种选择之间摇摆不定.'],
   usage:'随风摇摆; 摇摆的 + 树影 / 柳枝; 摇摆不定 (dao động không dứt khoát).',
   collo:['随风摇摆','摇摆的树影','摇摆不定','左右摇摆'],
   ex_zh:'河边的柳树随风摇摆，像在跳舞一样。',ex_py:'Hé biān de liǔshù suí fēng yáobǎi, xiàng zài tiàowǔ yíyàng.',ex_vn:'Hàng liễu bên sông đung đưa theo gió, như đang nhảy múa.',
   exList:[
     {zh:'河边的柳树随风摇摆，像在跳舞一样。',py:'Hé biān de liǔshù suí fēng yáobǎi, xiàng zài tiàowǔ yíyàng.',vn:'Hàng liễu bên sông đung đưa theo gió, như đang nhảy múa.'},
     {zh:'蔚蓝的天空，漂浮的白云，摇摆的树影，更衬托出梯田的壮美。',py:'Wèilán de tiānkōng, piāofú de báiyún, yáobǎi de shùyǐng, gèng chèntuō chū tītián de zhuàngměi.',vn:'Trời xanh thẳm, mây trắng bồng bềnh, bóng cây lay động càng tôn lên vẻ hùng tráng của ruộng bậc thang.'},
     {zh:'他在两个专业之间摇摆不定，迟迟做不了决定。',py:'Tā zài liǎng ge zhuānyè zhījiān yáobǎi bú dìng, chíchí zuò bu liǎo juédìng.',vn:'Cậu ấy phân vân giữa hai ngành, mãi vẫn chưa quyết được.'}
   ],
   colloFull:[
     {zh:'随风摇摆',py:'suí fēng yáobǎi',vn:'đung đưa theo gió'},
     {zh:'摇摆的树影',py:'yáobǎi de shùyǐng',vn:'bóng cây lay động'},
     {zh:'摇摆不定',py:'yáobǎi bú dìng',vn:'dao động, lưỡng lự'},
     {zh:'左右摇摆',py:'zuǒyòu yáobǎi',vn:'lắc qua lắc lại'},
     {zh:'轻轻摇摆',py:'qīngqīng yáobǎi',vn:'khẽ đong đưa'}
   ],
   patterns:[
     {s:'N + 随风摇摆',m:'… đung đưa theo gió'},
     {s:'在 A 和 B 之间 + 摇摆不定',m:'Dao động giữa A và B (nghĩa bóng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con thuyền lắc lư dữ quá, mấy người chúng tôi đều thấy chóng mặt.',answer:'船摇摆得太厉害了，我们几个人都觉得头晕。',answerPy:'Chuán yáobǎi de tài lìhai le, wǒmen jǐ ge rén dōu juéde tóuyūn.',
      note:'Bổ ngữ trạng thái V + 得 + 太……了.',pair:'Bổ ngữ trạng thái V得……'},
     {promptLang:'vi',prompt:'Đã chọn rồi thì đừng lưỡng lự nữa.',answer:'既然已经选好了，就不要再摇摆不定了。',answerPy:'Jìrán yǐjīng xuǎnhǎo le, jiù bú yào zài yáobǎi bú dìng le.',
      note:'既然……就……: đã … thì ….',pair:'既然……就……'}
   ]},

  {n:17,zh:'衬托',py:'chèntuō',pos:'Động từ',vn:'làm nổi lên, tôn lên',hv:'sấn thác',em:'🖼️',lesson:1,
   explain:['Dùng sự vật khác đặt bên cạnh làm nền để sự vật chính nổi bật, rõ nét hơn.','Hay gặp: 衬托出 + đặc điểm; 在……的衬托下 (được … tôn lên); 互相衬托.'],
   usage:'A + 衬托出 + B 的 + đặc điểm; 在 + A + 的衬托下，B + 显得……; 用 A 来衬托 B.',
   collo:['衬托出','在……的衬托下','互相衬托','衬托得更美'],
   ex_zh:'蔚蓝的天空、漂浮的白云更衬托出梯田的壮美。',ex_py:'Wèilán de tiānkōng, piāofú de báiyún gèng chèntuō chū tītián de zhuàngměi.',ex_vn:'Trời xanh thẳm, mây trắng bồng bềnh càng tôn lên vẻ đẹp hùng tráng của ruộng bậc thang.',
   exList:[
     {zh:'蔚蓝的天空、漂浮的白云更衬托出梯田的壮美。',py:'Wèilán de tiānkōng, piāofú de báiyún gèng chèntuō chū tītián de zhuàngměi.',vn:'Trời xanh thẳm, mây trắng bồng bềnh càng tôn lên vẻ đẹp hùng tráng của ruộng bậc thang.'},
     {zh:'在绿叶的衬托下，这朵红花显得格外鲜艳。',py:'Zài lǜyè de chèntuō xià, zhè duǒ hóng huā xiǎnde géwài xiānyàn.',vn:'Được lá xanh tôn lên, bông hoa đỏ này trông rực rỡ lạ thường.'},
     {zh:'作者用周围的安静来衬托主人公内心的不安。',py:'Zuòzhě yòng zhōuwéi de ānjìng lái chèntuō zhǔréngōng nèixīn de bù\'ān.',vn:'Tác giả dùng sự yên tĩnh xung quanh để làm nổi bật nỗi bất an trong lòng nhân vật chính.'}
   ],
   colloFull:[
     {zh:'衬托出',py:'chèntuō chū',vn:'làm nổi bật lên'},
     {zh:'在……的衬托下',py:'zài……de chèntuō xià',vn:'được … tôn lên'},
     {zh:'互相衬托',py:'hùxiāng chèntuō',vn:'tôn nhau lên'},
     {zh:'衬托得更美',py:'chèntuō de gèng měi',vn:'tôn lên càng đẹp'},
     {zh:'起衬托作用',py:'qǐ chèntuō zuòyòng',vn:'có tác dụng làm nền'}
   ],
   patterns:[
     {s:'A + 衬托出 + B 的 + đặc điểm',m:'A làm nổi bật … của B'},
     {s:'在 + A + 的衬托下，B + 显得 + adj',m:'Được A tôn lên, B trông …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Được tuyết trắng tôn lên, ngôi chùa đỏ trông càng trang nghiêm.',answer:'在白雪的衬托下，那座红色的寺庙显得更加庄重。',answerPy:'Zài báixuě de chèntuō xià, nà zuò hóngsè de sìmiào xiǎnde gèngjiā zhuāngzhòng.',
      note:'在……下 làm trạng ngữ điều kiện; 显得 + adj; 庄重 (bài 9).',pair:'在……下'},
     {promptLang:'vi',prompt:'Chiếc váy trắng làm nổi bật làn da của cô ấy.',answer:'这条白裙子把她的皮肤衬托得更好看了。',answerPy:'Zhè tiáo bái qúnzi bǎ tā de pífū chèntuō de gèng hǎokàn le.',
      note:'Câu 把 + V + 得 + bổ ngữ trạng thái.',pair:'Câu 把 + V得……'}
   ]},

  {n:18,zh:'盘旋',py:'pánxuán',pos:'Động từ',vn:'lượn vòng, đi vòng',hv:'bàn toàn',em:'🦅',lesson:1,
   explain:['Bay lượn vòng tròn (chim, máy bay) hoặc đi quanh co vòng vèo (đường núi, xe chạy).','Nghĩa bóng: (ý nghĩ) cứ quẩn quanh trong đầu: 这个问题一直在我脑子里盘旋.'],
   usage:'在 + nơi + 盘旋; 盘旋 + 而 + 上 / 行; 盘旋在 + 空中 / 脑海里.',
   collo:['盘旋而行','在空中盘旋','盘旋而上','在脑海里盘旋'],
   ex_zh:'我们的车在大山里沿着公路盘旋而行。',ex_py:'Wǒmen de chē zài dà shān li yánzhe gōnglù pánxuán ér xíng.',ex_vn:'Xe của chúng tôi men theo con đường chạy vòng vèo trong núi lớn.',
   exList:[
     {zh:'我们的车在大山里沿着公路盘旋而行。',py:'Wǒmen de chē zài dà shān li yánzhe gōnglù pánxuán ér xíng.',vn:'Xe của chúng tôi men theo con đường chạy vòng vèo trong núi lớn.'},
     {zh:'一只老鹰在山谷上空盘旋了很久。',py:'Yì zhī lǎoyīng zài shāngǔ shàngkōng pánxuánle hěn jiǔ.',vn:'Một con đại bàng lượn vòng rất lâu trên bầu trời thung lũng.'},
     {zh:'老师那句话一直在我的脑海里盘旋。',py:'Lǎoshī nà jù huà yìzhí zài wǒ de nǎohǎi li pánxuán.',vn:'Câu nói ấy của thầy cứ văng vẳng mãi trong đầu tôi.'}
   ],
   colloFull:[
     {zh:'盘旋而行',py:'pánxuán ér xíng',vn:'đi vòng vèo'},
     {zh:'在空中盘旋',py:'zài kōngzhōng pánxuán',vn:'lượn vòng trên không'},
     {zh:'盘旋而上',py:'pánxuán ér shàng',vn:'vòng vèo đi lên'},
     {zh:'在脑海里盘旋',py:'zài nǎohǎi li pánxuán',vn:'quẩn quanh trong đầu'},
     {zh:'盘旋的山路',py:'pánxuán de shānlù',vn:'đường núi quanh co'}
   ],
   patterns:[
     {s:'在 + nơi + 盘旋',m:'Lượn vòng ở …'},
     {s:'沿着 + đường + 盘旋而行 / 而上',m:'Men theo … đi vòng vèo / vòng lên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy bay lượn vòng trên sân bay nửa tiếng rồi mới hạ cánh.',answer:'飞机在机场上空盘旋了半个小时才降落。',answerPy:'Fēijī zài jīchǎng shàngkōng pánxuánle bàn ge xiǎoshí cái jiàngluò.',
      note:'Bổ ngữ thời lượng + 才: mãi mới ….',pair:'V了 + thời lượng + 才……'},
     {promptLang:'vi',prompt:'Đường núi càng đi lên càng quanh co, có người bắt đầu say xe.',answer:'山路越往上越盘旋，有人开始晕车了。',answerPy:'Shānlù yuè wǎng shàng yuè pánxuán, yǒu rén kāishǐ yùnchē le.',
      note:'越……越……: càng … càng ….',pair:'越……越……'}
   ]},

  {n:19,zh:'时而',py:'shí\'ér',pos:'Phó từ',vn:'đôi lúc, thỉnh thoảng; lúc thì … lúc thì …',hv:'thời nhi',em:'🔀',lesson:1,
   explain:['Văn viết. ① Hai (hoặc hơn) 时而 dùng liền nhau tạo câu ghép song song: các tình huống thay phiên nhau xảy ra (lúc thì…, lúc thì…).','② Dùng một 时而: hành động lặp lại không theo thời gian cố định (thỉnh thoảng lại…), hay đứng trước cụm động từ.'],
   usage:'时而 A，时而 B (时而……，时而……); 时而 + V (thỉnh thoảng lại …).',
   collo:['时而……时而……','时而下雨','时而发出叫声','时而唱歌，时而跳舞'],
   ex_zh:'我们的车时而行驶在深深的谷底，时而爬升到海拔一千多米高的山腰。',ex_py:'Wǒmen de chē shí\'ér xíngshǐ zài shēnshēn de gǔdǐ, shí\'ér páshēng dào hǎibá yìqiān duō mǐ gāo de shānyāo.',ex_vn:'Xe chúng tôi lúc thì chạy dưới đáy thung lũng sâu hun hút, lúc thì leo lên lưng chừng núi cao hơn một nghìn mét so với mặt biển.',
   exList:[
     {zh:'我们的车时而行驶在深深的谷底，时而爬升到海拔一千多米高的山腰。',py:'Wǒmen de chē shí\'ér xíngshǐ zài shēnshēn de gǔdǐ, shí\'ér páshēng dào hǎibá yìqiān duō mǐ gāo de shānyāo.',vn:'Xe chúng tôi lúc thì chạy dưới đáy thung lũng sâu hun hút, lúc thì leo lên lưng chừng núi cao hơn một nghìn mét so với mặt biển.'},
     {zh:'他们玩儿得兴高采烈，时而唱歌，时而跳舞。',py:'Tāmen wánr de xìnggāo-cǎiliè, shí\'ér chàng gē, shí\'ér tiàowǔ.',vn:'Họ chơi rất hăng say, lúc thì hát, lúc thì nhảy. (练习2 ②)'},
     {zh:'主人去世以后，那只狗一点儿东西不吃，时而发出令人伤心的叫声。',py:'Zhǔrén qùshì yǐhòu, nà zhī gǒu yìdiǎnr dōngxi bù chī, shí\'ér fāchū lìng rén shāngxīn de jiàoshēng.',vn:'Sau khi chủ mất, con chó ấy không ăn gì cả, thỉnh thoảng lại phát ra tiếng kêu khiến người ta đau lòng.'}
   ],
   colloFull:[
     {zh:'时而……时而……',py:'shí\'ér……shí\'ér……',vn:'lúc thì … lúc thì …'},
     {zh:'时而下雨',py:'shí\'ér xià yǔ',vn:'thỉnh thoảng lại mưa'},
     {zh:'时而发出叫声',py:'shí\'ér fāchū jiàoshēng',vn:'thỉnh thoảng lại kêu lên'},
     {zh:'时而唱歌，时而跳舞',py:'shí\'ér chàng gē, shí\'ér tiàowǔ',vn:'lúc hát lúc nhảy'},
     {zh:'时而晴，时而阴',py:'shí\'ér qíng, shí\'ér yīn',vn:'lúc nắng lúc râm'}
   ],
   patterns:[
     {s:'时而 + A，时而 + B',m:'Lúc thì A, lúc thì B (luân phiên)'},
     {s:'(Chủ ngữ) + 时而 + V',m:'Thỉnh thoảng lại … (không định kỳ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời tiết trên núi lúc nắng lúc mưa, vì vậy nhất định phải mang ô.',answer:'山上的天气时而晴，时而下雨，所以一定要带伞。',answerPy:'Shān shang de tiānqì shí\'ér qíng, shí\'ér xià yǔ, suǒyǐ yídìng yào dài sǎn.',
      note:'时而……时而……; 所以 nêu kết luận.',pair:'……，所以……'},
     {promptLang:'vi',prompt:'Nghe tin này, cô ấy lúc thì cười, lúc thì khóc.',answer:'听到这个消息，她时而笑，时而哭。',answerPy:'Tīngdào zhège xiāoxi, tā shí\'ér xiào, shí\'ér kū.',
      note:'Bổ ngữ kết quả 听到; hai 时而 song song.',pair:'Bổ ngữ kết quả V到'}
   ]},

  {n:20,zh:'海拔',py:'hǎibá',pos:'Danh từ',vn:'độ cao so với mặt biển',hv:'hải bạt',em:'⛰️',lesson:1,
   explain:['Độ cao của một địa điểm tính từ mực nước biển trung bình.','Cấu trúc: 海拔 + số + 米; 海拔……米高的 + nơi; 高海拔地区.'],
   usage:'海拔 + số + 米; 海拔 + 高 / 低; 爬升到海拔……的……',
   collo:['海拔一千多米','高海拔地区','海拔很高','海拔最低'],
   ex_zh:'我们的车爬升到海拔一千多米高的山腰。',ex_py:'Wǒmen de chē páshēng dào hǎibá yìqiān duō mǐ gāo de shānyāo.',ex_vn:'Xe chúng tôi leo lên lưng chừng núi cao hơn một nghìn mét so với mặt biển.',
   exList:[
     {zh:'我们的车爬升到海拔一千多米高的山腰。',py:'Wǒmen de chē páshēng dào hǎibá yìqiān duō mǐ gāo de shānyāo.',vn:'Xe chúng tôi leo lên lưng chừng núi cao hơn một nghìn mét so với mặt biển.'},
     {zh:'番西邦峰海拔三千一百多米，是越南最高的山峰。',py:'Fānxībāng Fēng hǎibá sānqiān yìbǎi duō mǐ, shì Yuènán zuì gāo de shānfēng.',vn:'Đỉnh Fansipan cao hơn 3.100 mét so với mặt biển, là đỉnh núi cao nhất Việt Nam.'},
     {zh:'高海拔地区空气稀薄，刚去的人容易头疼。',py:'Gāo hǎibá dìqū kōngqì xībó, gāng qù de rén róngyì tóuténg.',vn:'Vùng có độ cao lớn không khí loãng, người mới đến dễ bị đau đầu.'}
   ],
   colloFull:[
     {zh:'海拔一千多米',py:'hǎibá yìqiān duō mǐ',vn:'cao hơn nghìn mét so với mặt biển'},
     {zh:'高海拔地区',py:'gāo hǎibá dìqū',vn:'vùng núi cao'},
     {zh:'海拔很高',py:'hǎibá hěn gāo',vn:'độ cao lớn'},
     {zh:'海拔最低',py:'hǎibá zuì dī',vn:'thấp nhất so với mặt biển'},
     {zh:'平均海拔',py:'píngjūn hǎibá',vn:'độ cao trung bình'}
   ],
   patterns:[
     {s:'nơi + 海拔 + số + 米',m:'… cao … mét so với mặt biển'},
     {s:'海拔 + số + 米高的 + nơi',m:'Nơi cao … mét (định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng lên cao, nhiệt độ càng thấp.',answer:'海拔越高，气温就越低。',answerPy:'Hǎibá yuè gāo, qìwēn jiù yuè dī.',
      note:'越……(就)越……: càng … càng ….',pair:'越……越……'},
     {promptLang:'vi',prompt:'Đà Lạt cao khoảng 1.500 mét so với mặt biển nên mùa hè cũng rất mát mẻ.',answer:'大叻海拔一千五百米左右，所以夏天也很凉快。',answerPy:'Dàlè hǎibá yìqiān wǔbǎi mǐ zuǒyòu, suǒyǐ xiàtiān yě hěn liángkuai.',
      note:'Số + 左右: khoảng chừng; 所以 nêu kết quả.',pair:'……左右'}
   ]},

  {n:21,zh:'瀑布',py:'pùbù',pos:'Danh từ',vn:'thác nước',hv:'bộc bố',em:'💦',lesson:1,
   explain:['Dòng nước từ vách núi hay lòng sông đổ thẳng xuống từ trên cao, nhìn xa như tấm vải trắng treo (布 = vải).','Lượng từ: 一条瀑布 / 一道瀑布.'],
   usage:'一条 / 一道 + 瀑布; 瀑布 + 从……流下来 / 飞流直下; 观赏瀑布.',
   collo:['一条瀑布','瀑布飞流直下','观赏瀑布','瀑布群'],
   ex_zh:'峡谷间闪闪发光的是小溪、泉水和瀑布。',ex_py:'Xiágǔ jiān shǎnshǎn fāguāng de shì xiǎoxī, quánshuǐ hé pùbù.',ex_vn:'Thứ lấp lánh giữa hẻm núi là suối nhỏ, nước suối nguồn và thác nước.',
   exList:[
     {zh:'峡谷间闪闪发光的是小溪、泉水和瀑布。',py:'Xiágǔ jiān shǎnshǎn fāguāng de shì xiǎoxī, quánshuǐ hé pùbù.',vn:'Thứ lấp lánh giữa hẻm núi là suối nhỏ, nước suối nguồn và thác nước.'},
     {zh:'板约瀑布位于中越边境，是亚洲最大的跨国瀑布之一。',py:'Bǎnyuē Pùbù wèiyú Zhōng-Yuè biānjìng, shì Yàzhōu zuì dà de kuàguó pùbù zhī yī.',vn:'Thác Bản Giốc nằm ở biên giới Việt – Trung, là một trong những thác nước xuyên quốc gia lớn nhất châu Á.'},
     {zh:'一条瀑布从几十米高的山崖上飞流直下，场面十分壮观。',py:'Yì tiáo pùbù cóng jǐ shí mǐ gāo de shānyá shang fēi liú zhí xià, chǎngmiàn shífēn zhuàngguān.',vn:'Một dòng thác đổ thẳng xuống từ vách núi cao mấy chục mét, cảnh tượng vô cùng hùng vĩ.'}
   ],
   colloFull:[
     {zh:'一条瀑布',py:'yì tiáo pùbù',vn:'một dòng thác'},
     {zh:'瀑布飞流直下',py:'pùbù fēi liú zhí xià',vn:'thác đổ thẳng xuống'},
     {zh:'观赏瀑布',py:'guānshǎng pùbù',vn:'ngắm thác'},
     {zh:'瀑布群',py:'pùbù qún',vn:'cụm thác nước'},
     {zh:'瀑布的声音',py:'pùbù de shēngyīn',vn:'tiếng thác đổ'}
   ],
   patterns:[
     {s:'一条 / 一道 + 瀑布 + 从 + nơi + 流下来',m:'Một dòng thác đổ xuống từ …'},
     {s:'nơi + 有 + 一条瀑布',m:'Ở … có một thác nước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chưa đến gần thác nước, chúng tôi đã nghe thấy tiếng nước ầm ầm.',answer:'还没走到瀑布跟前，我们就听见了轰隆隆的水声。',answerPy:'Hái méi zǒudào pùbù gēnqián, wǒmen jiù tīngjiànle hōnglōnglōng de shuǐ shēng.',
      note:'还没……就……: chưa … đã …; 跟前 (bài 2).',pair:'还没……就……'},
     {promptLang:'vi',prompt:'Thác nước này tuy không cao nhưng rất đẹp.',answer:'这条瀑布虽然不高，但是非常漂亮。',answerPy:'Zhè tiáo pùbù suīrán bù gāo, dànshì fēicháng piàoliang.',
      note:'虽然……但是……: nhượng bộ.',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'纵横',py:'zònghéng',pos:'Tính từ',vn:'ngang dọc, ngang và dọc',hv:'tung hoành',em:'🗺️',lesson:1,
   explain:['Theo cả chiều ngang lẫn chiều dọc; đan xen chằng chịt, trải rộng khắp.','Hay gặp: 纵横万里 (trải rộng muôn dặm), 纵横交错 (đan xen chằng chịt), 老泪纵横 (nước mắt giàn giụa). Văn viết.'],
   usage:'纵横 + 万里 / 交错; 河流 / 道路 + 纵横; 纵横交错的 + N.',
   collo:['纵横万里','纵横交错','河流纵横','老泪纵横'],
   ex_zh:'村子下是如山如海、纵横万里、汹涌而来的梯田。',ex_py:'Cūnzi xià shì rú shān rú hǎi, zònghéng wàn lǐ, xiōngyǒng ér lái de tītián.',ex_vn:'Bên dưới ngôi làng là ruộng bậc thang như núi như biển, trải rộng muôn dặm, cuồn cuộn ùa tới.',
   exList:[
     {zh:'村子下是如山如海、纵横万里、汹涌而来的梯田。',py:'Cūnzi xià shì rú shān rú hǎi, zònghéng wàn lǐ, xiōngyǒng ér lái de tītián.',vn:'Bên dưới ngôi làng là ruộng bậc thang như núi như biển, trải rộng muôn dặm, cuồn cuộn ùa tới.'},
     {zh:'湄公河三角洲河流纵横，交通主要靠船。',py:'Méigōng Hé sānjiǎozhōu héliú zònghéng, jiāotōng zhǔyào kào chuán.',vn:'Đồng bằng sông Cửu Long sông ngòi chằng chịt, đi lại chủ yếu bằng thuyền.'},
     {zh:'这座古城的小巷纵横交错，外地人很容易迷路。',py:'Zhè zuò gǔchéng de xiǎoxiàng zònghéng jiāocuò, wàidì rén hěn róngyì mílù.',vn:'Ngõ nhỏ trong cổ thành này đan xen chằng chịt, người nơi khác rất dễ lạc đường.'}
   ],
   colloFull:[
     {zh:'纵横万里',py:'zònghéng wàn lǐ',vn:'trải rộng muôn dặm'},
     {zh:'纵横交错',py:'zònghéng jiāocuò',vn:'đan xen chằng chịt'},
     {zh:'河流纵横',py:'héliú zònghéng',vn:'sông ngòi chằng chịt'},
     {zh:'老泪纵横',py:'lǎo lèi zònghéng',vn:'nước mắt giàn giụa'},
     {zh:'纵横四海',py:'zònghéng sìhǎi',vn:'tung hoành bốn bể'}
   ],
   patterns:[
     {s:'N (河流 / 道路) + 纵横',m:'… chằng chịt ngang dọc'},
     {s:'纵横交错的 + N',m:'… đan xen chằng chịt (định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn từ máy bay xuống, đường sá trong thành phố ngang dọc chằng chịt như một tấm lưới.',answer:'从飞机上往下看，城市里的道路纵横交错，像一张网一样。',answerPy:'Cóng fēijī shang wǎng xià kàn, chéngshì li de dàolù zònghéng jiāocuò, xiàng yì zhāng wǎng yíyàng.',
      note:'从……往下看: nhìn từ … xuống; 像……一样.',pair:'像……一样'},
     {promptLang:'vi',prompt:'Nghe con trai nói vậy, ông cụ nước mắt giàn giụa.',answer:'听了儿子的话，老人不禁老泪纵横。',answerPy:'Tīngle érzi de huà, lǎorén bùjīn lǎo lèi zònghéng.',
      note:'V了……，……: hành động trước dẫn tới phản ứng sau; 不禁 (bài này).',pair:'V了……，……'}
   ]},

  {n:23,zh:'汹涌',py:'xiōngyǒng',pos:'Động từ',vn:'cuộn trào, dâng',hv:'hung dũng',em:'🌊',lesson:1,
   explain:['(Nước) cuồn cuộn dâng trào dữ dội; nghĩa bóng: khí thế mạnh mẽ ồ ạt kéo tới.','Hay gặp: 波涛汹涌, 汹涌而来, 汹涌澎湃. Chú ý phân biệt với "hung dũng" tiếng Việt (dũng mãnh) — ở đây là "cuộn trào".'],
   usage:'波涛 / 海浪 / 洪水 + 汹涌; 汹涌 + 而来; 汹涌澎湃.',
   collo:['汹涌而来','波涛汹涌','汹涌澎湃','汹涌的海浪'],
   ex_zh:'村子下是纵横万里、汹涌而来的梯田。',ex_py:'Cūnzi xià shì zònghéng wàn lǐ, xiōngyǒng ér lái de tītián.',ex_vn:'Bên dưới ngôi làng là ruộng bậc thang trải rộng muôn dặm, cuồn cuộn ùa tới.',
   exList:[
     {zh:'村子下是如山如海、纵横万里、汹涌而来的梯田。',py:'Cūnzi xià shì rú shān rú hǎi, zònghéng wàn lǐ, xiōngyǒng ér lái de tītián.',vn:'Bên dưới ngôi làng là ruộng bậc thang như núi như biển, trải rộng muôn dặm, cuồn cuộn ùa tới.'},
     {zh:'台风来临前，海面上波涛汹涌，渔船都回港了。',py:'Táifēng láilín qián, hǎimiàn shang bōtāo xiōngyǒng, yúchuán dōu huí gǎng le.',vn:'Trước khi bão tới, mặt biển sóng cả cuồn cuộn, thuyền đánh cá đều đã về cảng.'},
     {zh:'洪水汹涌而来，冲毁了村口的小桥。',py:'Hóngshuǐ xiōngyǒng ér lái, chōnghuǐle cūnkǒu de xiǎoqiáo.',vn:'Lũ cuồn cuộn ập đến, cuốn sập cây cầu nhỏ ở đầu làng.'}
   ],
   colloFull:[
     {zh:'汹涌而来',py:'xiōngyǒng ér lái',vn:'cuồn cuộn ùa tới'},
     {zh:'波涛汹涌',py:'bōtāo xiōngyǒng',vn:'sóng cả cuồn cuộn'},
     {zh:'汹涌澎湃',py:'xiōngyǒng péngpài',vn:'cuộn trào dữ dội'},
     {zh:'汹涌的海浪',py:'xiōngyǒng de hǎilàng',vn:'sóng biển cuộn trào'},
     {zh:'河水汹涌',py:'héshuǐ xiōngyǒng',vn:'nước sông cuồn cuộn'}
   ],
   patterns:[
     {s:'N (波涛 / 洪水) + 汹涌',m:'… cuồn cuộn'},
     {s:'汹涌 + 而来 / 而过',m:'Cuồn cuộn kéo tới / chảy qua'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy sóng biển rất dữ dội nhưng những người đánh cá vẫn ra khơi.',answer:'尽管海浪很汹涌，渔民们还是出海了。',answerPy:'Jǐnguǎn hǎilàng hěn xiōngyǒng, yúmínmen háishi chū hǎi le.',
      note:'尽管……，还是……: nhượng bộ.',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Mưa lớn mấy ngày liền khiến nước sông dâng lên cuồn cuộn.',answer:'连下了几天大雨，使河水变得非常汹涌。',answerPy:'Lián xiàle jǐ tiān dà yǔ, shǐ héshuǐ biàn de fēicháng xiōngyǒng.',
      note:'使 + N + 变得 + adj: khiến … trở nên ….',pair:'使……变得……'}
   ]},

  {n:24,zh:'目睹',py:'mùdǔ',pos:'Động từ',vn:'chứng kiến, mắt thấy',hv:'mục đổ',em:'👀',lesson:1,
   explain:['Tận mắt nhìn thấy (một sự việc, cảnh tượng). Văn viết, trang trọng hơn 亲眼看到.','Thành ngữ: 耳闻目睹 (tai nghe mắt thấy); 有目共睹 (ai cũng thấy rõ).'],
   usage:'目睹 + sự việc / cảnh tượng; 亲眼目睹; 目睹……无数次.',
   collo:['亲眼目睹','目睹这一切','目睹奇迹','有目共睹'],
   ex_zh:'尽管已目睹这奇迹无数次，但我每次身临其境，都会为之震惊。',ex_py:'Jǐnguǎn yǐ mùdǔ zhè qíjì wúshù cì, dàn wǒ měi cì shēn lín qí jìng, dōu huì wèi zhī zhènjīng.',ex_vn:'Dù đã chứng kiến kỳ tích này vô số lần, nhưng mỗi lần đặt chân đến, tôi đều sững sờ vì nó.',
   exList:[
     {zh:'尽管已目睹这奇迹无数次，但我每次身临其境，都会为之震惊。',py:'Jǐnguǎn yǐ mùdǔ zhè qíjì wúshù cì, dàn wǒ měi cì shēn lín qí jìng, dōu huì wèi zhī zhènjīng.',vn:'Dù đã chứng kiến kỳ tích này vô số lần, nhưng mỗi lần đặt chân đến, tôi đều sững sờ vì nó.'},
     {zh:'她目睹了自己的家被大火烧掉了，内心非常痛苦。',py:'Tā mùdǔle zìjǐ de jiā bèi dàhuǒ shāodiào le, nèixīn fēicháng tòngkǔ.',vn:'Cô ấy tận mắt chứng kiến ngôi nhà của mình bị lửa lớn thiêu rụi, trong lòng vô cùng đau khổ. (练习2 ⑤)'},
     {zh:'几位目睹车祸的路人主动向警察说明了情况。',py:'Jǐ wèi mùdǔ chēhuò de lùrén zhǔdòng xiàng jǐngchá shuōmíngle qíngkuàng.',vn:'Mấy người qua đường chứng kiến vụ tai nạn đã chủ động trình bày sự việc với cảnh sát.'}
   ],
   colloFull:[
     {zh:'亲眼目睹',py:'qīnyǎn mùdǔ',vn:'tận mắt chứng kiến'},
     {zh:'目睹这一切',py:'mùdǔ zhè yíqiè',vn:'chứng kiến tất cả'},
     {zh:'目睹奇迹',py:'mùdǔ qíjì',vn:'chứng kiến kỳ tích'},
     {zh:'有目共睹',py:'yǒumù-gòngdǔ',vn:'ai ai cũng thấy rõ'},
     {zh:'耳闻目睹',py:'ěrwén-mùdǔ',vn:'tai nghe mắt thấy'}
   ],
   patterns:[
     {s:'(亲眼) + 目睹 + (了) + sự việc',m:'Tận mắt chứng kiến …'},
     {s:'目睹 + sự việc + 的 + người',m:'Người chứng kiến … (định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không tận mắt chứng kiến, tôi thật không dám tin trên đời lại có cảnh đẹp như vậy.',answer:'要不是亲眼目睹，我真不敢相信世界上会有这么美的风景。',answerPy:'Yàobúshì qīnyǎn mùdǔ, wǒ zhēn bù gǎn xiāngxìn shìjiè shang huì yǒu zhème měi de fēngjǐng.',
      note:'要不是……: nếu không phải vì … (giả thiết trái sự thật).',pair:'要不是……'},
     {promptLang:'vi',prompt:'Sự tiến bộ của cậu ấy mọi người đều thấy rõ.',answer:'他的进步是大家有目共睹的。',answerPy:'Tā de jìnbù shì dàjiā yǒumù-gòngdǔ de.',
      note:'Cấu trúc 是……的 nhấn mạnh nhận định.',pair:'是……的'}
   ]},

  {n:25,zh:'重叠',py:'chóngdié',pos:'Động từ',vn:'trùng điệp, chồng chéo',hv:'trùng điệp',em:'📚',lesson:1,
   explain:['(Những vật giống nhau) chồng lên nhau từng lớp; (công việc, bộ máy) trùng lặp.','Dạng lặp AABB 重重叠叠 = trùng trùng điệp điệp, tả núi non nối tiếp nhau. 重 đọc chóng (lặp lại), không đọc zhòng.'],
   usage:'重重叠叠的 + 山 / 山脉; 互相重叠; 机构 / 内容 + 重叠.',
   collo:['重重叠叠','重叠在一起','内容重叠','机构重叠'],
   ex_zh:'哈尼族山民在这重重叠叠的山脉上雕塑出美丽的画卷。',ex_py:'Hānízú shānmín zài zhè chóngchóngdiédié de shānmài shang diāosù chū měilì de huàjuàn.',ex_vn:'Người dân miền núi Hà Nhì đã tạc nên bức hoạ tuyệt đẹp trên những dãy núi trùng điệp này.',
   exList:[
     {zh:'哈尼族山民在这重重叠叠的山脉上雕塑出美丽的画卷。',py:'Hānízú shānmín zài zhè chóngchóngdiédié de shānmài shang diāosù chū měilì de huàjuàn.',vn:'Người dân miền núi Hà Nhì đã tạc nên bức hoạ tuyệt đẹp trên những dãy núi trùng điệp này.'},
     {zh:'这两门课的内容有一部分是重叠的。',py:'Zhè liǎng mén kè de nèiróng yǒu yí bùfen shì chóngdié de.',vn:'Nội dung của hai môn học này có một phần trùng nhau.'},
     {zh:'桌上的文件重叠在一起，找了半天也没找到那一份。',py:'Zhuō shang de wénjiàn chóngdié zài yìqǐ, zhǎole bàntiān yě méi zhǎodào nà yí fèn.',vn:'Giấy tờ trên bàn chồng lên nhau, tìm mãi vẫn không thấy tờ ấy.'}
   ],
   colloFull:[
     {zh:'重重叠叠',py:'chóngchóngdiédié',vn:'trùng trùng điệp điệp'},
     {zh:'重叠在一起',py:'chóngdié zài yìqǐ',vn:'chồng lên nhau'},
     {zh:'内容重叠',py:'nèiróng chóngdié',vn:'nội dung trùng lặp'},
     {zh:'机构重叠',py:'jīgòu chóngdié',vn:'bộ máy chồng chéo'},
     {zh:'互相重叠',py:'hùxiāng chóngdié',vn:'chồng lấn lên nhau'}
   ],
   patterns:[
     {s:'重重叠叠的 + 山 / 山脉 / 云',m:'… trùng điệp (dạng lặp AABB)'},
     {s:'A 和 B + (有一部分) + 重叠',m:'A và B trùng nhau (một phần)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai cuộc họp này trùng giờ nhau, tôi chỉ có thể tham gia một cuộc.',answer:'这两个会的时间重叠了，我只能参加其中一个。',answerPy:'Zhè liǎng ge huì de shíjiān chóngdié le, wǒ zhǐ néng cānjiā qízhōng yí ge.',
      note:'其中 + số lượng: một trong số đó.',pair:'其中……'},
     {promptLang:'vi',prompt:'Từ đỉnh núi nhìn ra, núi non trùng điệp, không thấy điểm cuối.',answer:'从山顶望去，群山重重叠叠，一眼望不到头。',answerPy:'Cóng shāndǐng wàng qu, qúnshān chóngchóngdiédié, yì yǎn wàng bu dào tóu.',
      note:'Bổ ngữ khả năng 望不到: nhìn không tới.',pair:'Bổ ngữ khả năng V不到'}
   ]},

  {n:26,zh:'雕塑',py:'diāosù',pos:'Động từ / Danh từ',vn:'điêu khắc; tác phẩm điêu khắc',hv:'điêu tố',em:'🗽',lesson:1,
   explain:['Động từ: tạc, khắc, nặn thành hình khối (雕 = khắc, 塑 = nặn). Danh từ: tượng, tác phẩm điêu khắc.','Trong bài dùng nghĩa bóng: con người "tạc" núi thành ruộng bậc thang — 将大山雕塑成了梯田.'],
   usage:'雕塑 + 出 / 成 + N; 把 / 将 + A + 雕塑成 + B; 一座雕塑.',
   collo:['雕塑成','雕塑出','一座雕塑','雕塑作品'],
   ex_zh:'经过数十代人的锲而不舍，他们终于将一座座大山雕塑成了梯田。',ex_py:'Jīngguò shù shí dài rén de qiè\'érbùshě, tāmen zhōngyú jiāng yí zuòzuò dà shān diāosù chéngle tītián.',ex_vn:'Qua sự kiên trì bền bỉ của mấy chục thế hệ, cuối cùng họ đã tạc từng ngọn núi lớn thành ruộng bậc thang.',
   exList:[
     {zh:'经过数十代人的锲而不舍，他们终于将一座座大山雕塑成了梯田。',py:'Jīngguò shù shí dài rén de qiè\'érbùshě, tāmen zhōngyú jiāng yí zuòzuò dà shān diāosù chéngle tītián.',vn:'Qua sự kiên trì bền bỉ của mấy chục thế hệ, cuối cùng họ đã tạc từng ngọn núi lớn thành ruộng bậc thang.'},
     {zh:'广场中央有一座三米多高的铜雕塑。',py:'Guǎngchǎng zhōngyāng yǒu yí zuò sān mǐ duō gāo de tóng diāosù.',vn:'Giữa quảng trường có một bức tượng đồng cao hơn ba mét.'},
     {zh:'这位艺术家用废旧材料雕塑出了一只巨大的鲸鱼。',py:'Zhè wèi yìshùjiā yòng fèijiù cáiliào diāosù chūle yì zhī jùdà de jīngyú.',vn:'Nghệ sĩ này dùng vật liệu phế thải tạc nên một con cá voi khổng lồ.'}
   ],
   colloFull:[
     {zh:'雕塑成',py:'diāosù chéng',vn:'tạc thành'},
     {zh:'雕塑出',py:'diāosù chū',vn:'tạc nên'},
     {zh:'一座雕塑',py:'yí zuò diāosù',vn:'một bức tượng'},
     {zh:'雕塑作品',py:'diāosù zuòpǐn',vn:'tác phẩm điêu khắc'},
     {zh:'雕塑家',py:'diāosùjiā',vn:'nhà điêu khắc'}
   ],
   patterns:[
     {s:'把 / 将 + A + 雕塑成 + B',m:'Tạc A thành B'},
     {s:'一座 + (chất liệu) + 雕塑',m:'Một bức tượng (bằng …)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức tượng mà nhà điêu khắc ấy tạc ra sống động như thật.',answer:'那位雕塑家雕塑出的作品像真的一样。',answerPy:'Nà wèi diāosùjiā diāosù chū de zuòpǐn xiàng zhēn de yíyàng.',
      note:'Cụm động từ + 的 làm định ngữ; 像……一样.',pair:'Định ngữ V + 的'},
     {promptLang:'vi',prompt:'Người ta đã tạc tảng đá lớn này thành một con sư tử.',answer:'人们把这块大石头雕塑成了一头狮子。',answerPy:'Rénmen bǎ zhè kuài dà shítou diāosù chéngle yì tóu shīzi.',
      note:'Câu 把 + V成 + kết quả.',pair:'Câu 把……V成……'}
   ]},

  {n:27,zh:'毅力',py:'yìlì',pos:'Danh từ',vn:'nghị lực',hv:'nghị lực',em:'💪',lesson:1,
   explain:['Ý chí bền bỉ, kiên trì theo đuổi đến cùng, không lùi bước trước khó khăn.','Hay gặp: 有毅力, 靠毅力, 惊人的毅力, 缺乏毅力.'],
   usage:'有 / 缺乏 + 毅力; 靠 + 毅力 + V; 用 + 毅力 + V.',
   collo:['有毅力','惊人的毅力','靠毅力','缺乏毅力'],
   ex_zh:'这是用生命和毅力雕刻出的杰出作品。',ex_py:'Zhè shì yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn.',ex_vn:'Đây là tác phẩm kiệt xuất được khắc nên bằng sinh mệnh và nghị lực.',
   exList:[
     {zh:'这是以大地为背景，用生命和毅力雕刻出的杰出作品。',py:'Zhè shì yǐ dàdì wéi bèijǐng, yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn.',vn:'Đây là tác phẩm kiệt xuất lấy mặt đất làm phông nền, được khắc nên bằng sinh mệnh và nghị lực.'},
     {zh:'他靠着惊人的毅力，每天坚持跑步，一年瘦了二十斤。',py:'Tā kàozhe jīngrén de yìlì, měi tiān jiānchí pǎobù, yì nián shòule èrshí jīn.',vn:'Anh ấy dựa vào nghị lực đáng kinh ngạc, ngày nào cũng kiên trì chạy bộ, một năm giảm mười cân.'},
     {zh:'学外语不需要多聪明，但需要毅力。',py:'Xué wàiyǔ bù xūyào duō cōngming, dàn xūyào yìlì.',vn:'Học ngoại ngữ không cần thông minh lắm, nhưng cần có nghị lực.'}
   ],
   colloFull:[
     {zh:'有毅力',py:'yǒu yìlì',vn:'có nghị lực'},
     {zh:'惊人的毅力',py:'jīngrén de yìlì',vn:'nghị lực đáng kinh ngạc'},
     {zh:'靠毅力',py:'kào yìlì',vn:'dựa vào nghị lực'},
     {zh:'缺乏毅力',py:'quēfá yìlì',vn:'thiếu nghị lực'},
     {zh:'坚强的毅力',py:'jiānqiáng de yìlì',vn:'nghị lực kiên cường'}
   ],
   patterns:[
     {s:'靠 / 凭 + (着) + 毅力 + V',m:'Nhờ nghị lực mà …'},
     {s:'用 + 生命 / 汗水 + 和 + 毅力 + V',m:'Dùng … và nghị lực để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có dựa vào nghị lực mới có thể đi hết chặng đường dài này.',answer:'只有靠毅力，才能走完这段漫长的路。',answerPy:'Zhǐyǒu kào yìlì, cái néng zǒuwán zhè duàn màncháng de lù.',
      note:'只有……才……: điều kiện cần; 漫长 (bài 2).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Cậu ấy thông minh thì có thông minh, chỉ là thiếu chút nghị lực.',answer:'他聪明是聪明，就是缺乏一点儿毅力。',answerPy:'Tā cōngming shì cōngming, jiùshì quēfá yìdiǎnr yìlì.',
      note:'A是A，就是……: thừa nhận rồi chuyển ý.',pair:'A是A，就是……'}
   ]},

  {n:28,zh:'杰出',py:'jiéchū',pos:'Tính từ',vn:'phi thường, xuất sắc, tuyệt vời',hv:'kiệt xuất',em:'🏆',lesson:1,
   explain:['(Tài năng, thành tích, con người, tác phẩm) vượt trội hẳn so với bình thường.','Trang trọng, chủ yếu làm định ngữ: 杰出的人物 / 贡献 / 作品. Mức độ cao hơn 优秀.'],
   usage:'杰出的 + 人物 / 科学家 / 贡献 / 作品; 做出杰出贡献.',
   collo:['杰出的作品','杰出人物','杰出贡献','杰出的科学家'],
   ex_zh:'这是用生命和毅力雕刻出的杰出作品。',ex_py:'Zhè shì yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn.',ex_vn:'Đây là tác phẩm kiệt xuất được khắc nên bằng sinh mệnh và nghị lực.',
   exList:[
     {zh:'这是以大地为背景，用生命和毅力雕刻出的杰出作品。',py:'Zhè shì yǐ dàdì wéi bèijǐng, yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn.',vn:'Đây là tác phẩm kiệt xuất lấy mặt đất làm phông nền, được khắc nên bằng sinh mệnh và nghị lực.'},
     {zh:'他为国家的航天事业做出了杰出的贡献。',py:'Tā wèi guójiā de hángtiān shìyè zuòchūle jiéchū de gòngxiàn.',vn:'Ông ấy đã có những cống hiến xuất sắc cho sự nghiệp hàng không vũ trụ của đất nước.'},
     {zh:'这所学校培养了许多杰出人才。',py:'Zhè suǒ xuéxiào péiyǎngle xǔduō jiéchū réncái.',vn:'Ngôi trường này đã đào tạo rất nhiều nhân tài kiệt xuất.'}
   ],
   colloFull:[
     {zh:'杰出的作品',py:'jiéchū de zuòpǐn',vn:'tác phẩm kiệt xuất'},
     {zh:'杰出人物',py:'jiéchū rénwù',vn:'nhân vật kiệt xuất'},
     {zh:'杰出贡献',py:'jiéchū gòngxiàn',vn:'cống hiến xuất sắc'},
     {zh:'杰出的科学家',py:'jiéchū de kēxuéjiā',vn:'nhà khoa học xuất chúng'},
     {zh:'杰出人才',py:'jiéchū réncái',vn:'nhân tài kiệt xuất'}
   ],
   patterns:[
     {s:'杰出的 + 人物 / 作品 / 贡献',m:'… kiệt xuất (định ngữ)'},
     {s:'为 + … + 做出(了) + 杰出(的)贡献',m:'Có cống hiến xuất sắc cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà văn kiệt xuất này đã viết hơn năm mươi cuốn tiểu thuyết trong đời.',answer:'这位杰出的作家一生写了五十多部小说。',answerPy:'Zhè wèi jiéchū de zuòjiā yìshēng xiěle wǔshí duō bù xiǎoshuō.',
      note:'Số + 多 + lượng từ: hơn … (五十多部).',pair:'Số + 多 + lượng từ'},
     {promptLang:'vi',prompt:'Chính vì có cống hiến xuất sắc nên bà ấy được mọi người kính trọng.',answer:'正是因为做出了杰出的贡献，她才受到了大家的尊敬。',answerPy:'Zhèng shì yīnwèi zuòchūle jiéchū de gòngxiàn, tā cái shòudàole dàjiā de zūnjìng.',
      note:'正是因为……才……: chính vì … mới ….',pair:'正是因为……才……'}
   ]},

  {n:29,zh:'震撼',py:'zhènhàn',pos:'Động từ',vn:'chấn động, rung động, lay động',hv:'chấn hám',em:'⚡',lesson:1,
   explain:['Làm rung chuyển mạnh; nghĩa thường dùng: tác động mạnh vào lòng người, khiến xúc động sâu sắc.','Hay gặp: 让 / 令 + người + 震撼; 震撼人心; 受到震撼; 很震撼 (dùng như tính từ).'],
   usage:'让 / 令 + người + 震撼; 震撼 + 人心 / 世界; 受到 + (极大的) + 震撼.',
   collo:['震撼人心','让人震撼','受到震撼','震撼世界'],
   ex_zh:'它比万里长城更让我震撼。',ex_py:'Tā bǐ Wànlǐ Chángchéng gèng ràng wǒ zhènhàn.',ex_vn:'Nó còn làm tôi rung động hơn cả Vạn Lý Trường Thành.',
   exList:[
     {zh:'它比万里长城更让我震撼，它比历史悠久的宫殿更让我感动。',py:'Tā bǐ Wànlǐ Chángchéng gèng ràng wǒ zhènhàn, tā bǐ lìshǐ yōujiǔ de gōngdiàn gèng ràng wǒ gǎndòng.',vn:'Nó khiến tôi choáng ngợp hơn cả Vạn Lý Trường Thành, khiến tôi xúc động hơn cả những cung điện lịch sử lâu đời.'},
     {zh:'第一次站在大海边，我被眼前的景象深深地震撼了。',py:'Dì-yī cì zhàn zài dàhǎi biān, wǒ bèi yǎnqián de jǐngxiàng shēnshēn de zhènhàn le.',vn:'Lần đầu đứng bên bờ biển lớn, tôi bị cảnh tượng trước mắt làm cho rung động sâu sắc.'},
     {zh:'这部电影的结局非常震撼人心。',py:'Zhè bù diànyǐng de jiéjú fēicháng zhènhàn rénxīn.',vn:'Cái kết của bộ phim này vô cùng lay động lòng người.'}
   ],
   colloFull:[
     {zh:'震撼人心',py:'zhènhàn rénxīn',vn:'lay động lòng người'},
     {zh:'让人震撼',py:'ràng rén zhènhàn',vn:'khiến người ta choáng ngợp'},
     {zh:'受到震撼',py:'shòudào zhènhàn',vn:'bị chấn động'},
     {zh:'震撼世界',py:'zhènhàn shìjiè',vn:'chấn động thế giới'},
     {zh:'极大的震撼',py:'jí dà de zhènhàn',vn:'sự chấn động cực lớn'}
   ],
   patterns:[
     {s:'A + 比 + B + 更让 + người + 震撼',m:'A khiến … choáng ngợp hơn B'},
     {s:'người + 被 + N + 震撼(了)',m:'… bị … làm cho rung động'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi bị bài phát biểu của cô ấy làm cho rung động, mãi lâu không nói nên lời.',answer:'我被她的演讲震撼了，半天说不出话来。',answerPy:'Wǒ bèi tā de yǎnjiǎng zhènhàn le, bàntiān shuō bu chū huà lai.',
      note:'Câu 被; bổ ngữ khả năng 说不出话来.',pair:'Câu bị động 被'},
     {promptLang:'vi',prompt:'Không có gì khiến tôi rung động hơn tình mẹ.',answer:'没有什么比母爱更让我震撼。',answerPy:'Méiyǒu shénme bǐ mǔ\'ài gèng ràng wǒ zhènhàn.',
      note:'没有什么比……更……: không gì … hơn … (so sánh tuyệt đối).',pair:'没有什么比……更……'}
   ]},

  {n:30,zh:'宫殿',py:'gōngdiàn',pos:'Danh từ',vn:'cung điện',hv:'cung điện',em:'🏯',lesson:1,
   explain:['Toà nhà lớn, nguy nga nơi vua chúa ở hoặc làm việc; cũng chỉ công trình đồ sộ, lộng lẫy.','Lượng từ: 一座宫殿.'],
   usage:'一座 + 宫殿; 历史悠久的 / 宏伟的 + 宫殿; 宫殿式建筑.',
   collo:['一座宫殿','历史悠久的宫殿','宏伟的宫殿','古代宫殿'],
   ex_zh:'它比历史悠久的宫殿更让我感动。',ex_py:'Tā bǐ lìshǐ yōujiǔ de gōngdiàn gèng ràng wǒ gǎndòng.',ex_vn:'Nó khiến tôi xúc động hơn cả những cung điện lịch sử lâu đời.',
   exList:[
     {zh:'它比历史悠久的宫殿更让我感动。',py:'Tā bǐ lìshǐ yōujiǔ de gōngdiàn gèng ràng wǒ gǎndòng.',vn:'Nó khiến tôi xúc động hơn cả những cung điện lịch sử lâu đời.'},
     {zh:'故宫是世界上现存规模最大的古代宫殿建筑群。',py:'Gùgōng shì shìjiè shang xiàncún guīmó zuì dà de gǔdài gōngdiàn jiànzhùqún.',vn:'Cố Cung là quần thể kiến trúc cung điện cổ còn tồn tại có quy mô lớn nhất thế giới.'},
     {zh:'顺化皇城里有很多座宫殿，每一座都有自己的故事。',py:'Shùnhuà Huángchéng li yǒu hěn duō zuò gōngdiàn, měi yí zuò dōu yǒu zìjǐ de gùshi.',vn:'Trong Hoàng thành Huế có nhiều cung điện, mỗi toà đều có câu chuyện riêng.'}
   ],
   colloFull:[
     {zh:'一座宫殿',py:'yí zuò gōngdiàn',vn:'một toà cung điện'},
     {zh:'历史悠久的宫殿',py:'lìshǐ yōujiǔ de gōngdiàn',vn:'cung điện lâu đời'},
     {zh:'宏伟的宫殿',py:'hóngwěi de gōngdiàn',vn:'cung điện nguy nga'},
     {zh:'古代宫殿',py:'gǔdài gōngdiàn',vn:'cung điện cổ'},
     {zh:'宫殿建筑群',py:'gōngdiàn jiànzhùqún',vn:'quần thể cung điện'}
   ],
   patterns:[
     {s:'一座 + adj + 的宫殿',m:'Một toà cung điện …'},
     {s:'宫殿 + 里 / 前',m:'Trong / trước cung điện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cung điện này được xây từ hơn sáu trăm năm trước.',answer:'这座宫殿是六百多年前建成的。',answerPy:'Zhè zuò gōngdiàn shì liùbǎi duō nián qián jiànchéng de.',
      note:'是……的 nhấn mạnh thời gian của việc đã xảy ra.',pair:'是……的 (nhấn mạnh thời gian)'},
     {promptLang:'vi',prompt:'Cung điện ấy vừa to vừa đẹp, du khách ai cũng thích chụp ảnh ở đó.',answer:'那座宫殿又大又漂亮，游客们都喜欢在那儿拍照。',answerPy:'Nà zuò gōngdiàn yòu dà yòu piàoliang, yóukèmen dōu xǐhuan zài nàr pāizhào.',
      note:'又……又……: vừa … vừa ….',pair:'又……又……'}
   ]},

  {n:31,zh:'不禁',py:'bùjīn',pos:'Phó từ',vn:'không kìm được, không nhịn được',hv:'bất cấm',em:'😲',lesson:1,
   explain:['Nghĩa là "không tự chủ được, không kiềm chế được" — phản ứng tự nhiên bật ra khi gặp tình huống nào đó.','Sau 不禁 có thể là cụm động từ (不禁问自己), cụm chủ vị (不禁心里有些发慌), hoặc tính từ (不禁兴奋起来). Văn viết, gần nghĩa 忍不住, 不由得 (bài 2).'],
   usage:'(Tình huống), + chủ ngữ + 不禁 + V / adj / cụm chủ vị; 不禁 + V + 起来.',
   collo:['不禁问自己','不禁笑了起来','不禁流下眼泪','不禁感叹'],
   ex_zh:'我不禁问自己，这里的人为什么选择了梯田？',ex_py:'Wǒ bùjīn wèn zìjǐ, zhèlǐ de rén wèi shénme xuǎnzéle tītián?',ex_vn:'Tôi không kìm được mà tự hỏi mình: vì sao người ở đây lại chọn ruộng bậc thang?',
   exList:[
     {zh:'我不禁问自己，这里的人为什么选择了梯田？',py:'Wǒ bùjīn wèn zìjǐ, zhèlǐ de rén wèi shénme xuǎnzéle tītián?',vn:'Tôi không kìm được mà tự hỏi mình: vì sao người ở đây lại chọn ruộng bậc thang?'},
     {zh:'那是我第一次用汉语演讲，走上讲台，不禁心里有些发慌。',py:'Nà shì wǒ dì-yī cì yòng Hànyǔ yǎnjiǎng, zǒushàng jiǎngtái, bùjīn xīnli yǒuxiē fāhuāng.',vn:'Đó là lần đầu tôi diễn thuyết bằng tiếng Trung, bước lên bục, trong lòng không khỏi có chút hoảng.'},
     {zh:'听到这个消息，大家不禁兴奋起来。',py:'Tīngdào zhège xiāoxi, dàjiā bùjīn xīngfèn qilai.',vn:'Nghe tin này, mọi người không kìm được mà phấn khích hẳn lên.'}
   ],
   colloFull:[
     {zh:'不禁问自己',py:'bùjīn wèn zìjǐ',vn:'không khỏi tự hỏi'},
     {zh:'不禁笑了起来',py:'bùjīn xiàole qilai',vn:'không nhịn được cười'},
     {zh:'不禁流下眼泪',py:'bùjīn liúxià yǎnlèi',vn:'bất giác rơi nước mắt'},
     {zh:'不禁感叹',py:'bùjīn gǎntàn',vn:'không khỏi cảm thán'},
     {zh:'不禁连连点头',py:'bùjīn liánlián diǎntóu',vn:'bất giác gật đầu lia lịa'}
   ],
   patterns:[
     {s:'(Tình huống)，chủ ngữ + 不禁 + V / adj',m:'Gặp …, … không kìm được mà …'},
     {s:'不禁 + V / adj + 起来',m:'Bất giác … lên (bắt đầu một trạng thái)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn những bức ảnh cũ, bà không kìm được mà nhớ lại chuyện hồi trẻ.',answer:'看着这些老照片，奶奶不禁回忆起年轻时的事情。',answerPy:'Kànzhe zhèxiē lǎo zhàopiàn, nǎinai bùjīn huíyì qǐ niánqīng shí de shìqing.',
      note:'V着 làm trạng ngữ; 回忆起 + tân ngữ.',pair:'V着……，……'},
     {promptLang:'vi',prompt:'Vừa nghe thấy bài hát này, tôi đã không nhịn được mà hát theo.',answer:'一听到这首歌，我就不禁跟着唱了起来。',answerPy:'Yì tīngdào zhè shǒu gē, wǒ jiù bùjīn gēnzhe chàngle qilai.',
      note:'一……就……: vừa … đã ….',pair:'一……就……'}
   ]},

  {n:32,zh:'曲子',py:'qǔzi',pos:'Danh từ',vn:'ca khúc, bản nhạc',hv:'khúc tử',em:'🎵',lesson:1,
   explain:['Bài hát, bản nhạc, giai điệu. Khẩu ngữ hơn 歌曲 / 乐曲.','Lượng từ: 一首曲子 / 一支曲子. 曲 đọc qǔ (khúc nhạc); đọc qū là cong (弯曲).'],
   usage:'一首 / 一支 + 曲子; 弹 / 唱 / 吹 + 曲子; 古老的曲子.',
   collo:['一首曲子','古老的曲子','弹一首曲子','这支曲子'],
   ex_zh:'我在当地听到了一首古老的曲子。',ex_py:'Wǒ zài dāngdì tīngdàole yì shǒu gǔlǎo de qǔzi.',ex_vn:'Tôi đã nghe được một khúc hát cổ xưa ở địa phương.',
   exList:[
     {zh:'后来，我在当地听到了一首古老的曲子。',py:'Hòulái, wǒ zài dāngdì tīngdàole yì shǒu gǔlǎo de qǔzi.',vn:'Sau đó, tôi đã nghe được một khúc hát cổ xưa ở địa phương.'},
     {zh:'她在钢琴上弹了一首欢快的曲子。',py:'Tā zài gāngqín shang tánle yì shǒu huānkuài de qǔzi.',vn:'Cô ấy đàn một bản nhạc vui tươi trên đàn piano.'},
     {zh:'这支曲子我好像在哪儿听过，就是想不起名字来。',py:'Zhè zhī qǔzi wǒ hǎoxiàng zài nǎr tīngguo, jiùshì xiǎng bu qǐ míngzi lai.',vn:'Bản nhạc này hình như tôi đã nghe ở đâu rồi, chỉ là không nhớ ra tên.'}
   ],
   colloFull:[
     {zh:'一首曲子',py:'yì shǒu qǔzi',vn:'một bản nhạc'},
     {zh:'古老的曲子',py:'gǔlǎo de qǔzi',vn:'khúc hát cổ'},
     {zh:'弹一首曲子',py:'tán yì shǒu qǔzi',vn:'đàn một bản nhạc'},
     {zh:'这支曲子',py:'zhè zhī qǔzi',vn:'bản nhạc này'},
     {zh:'民间曲子',py:'mínjiān qǔzi',vn:'làn điệu dân gian'}
   ],
   patterns:[
     {s:'一首 / 一支 + adj + 的曲子',m:'Một bản nhạc …'},
     {s:'弹 / 吹 / 唱 + 曲子',m:'Đàn / thổi / hát một bản nhạc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bản nhạc này tôi đã nghe không dưới mười lần, càng nghe càng thích.',answer:'这首曲子我听了不下十遍，越听越喜欢。',answerPy:'Zhè shǒu qǔzi wǒ tīngle bú xià shí biàn, yuè tīng yuè xǐhuan.',
      note:'越……越……; 不下 + số: không dưới.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Cậu ấy không những biết hát mà còn tự viết được nhạc.',answer:'他不仅会唱歌，还能自己写曲子。',answerPy:'Tā bùjǐn huì chàng gē, hái néng zìjǐ xiě qǔzi.',
      note:'不仅……还……: tăng tiến.',pair:'不仅……还……'}
   ]},

  {n:33,zh:'采集',py:'cǎijí',pos:'Động từ',vn:'thu thập, sưu tầm, thu nhặt',hv:'thái tập',em:'🧺',lesson:1,
   explain:['Hái lượm, nhặt nhạnh (quả, thảo dược, mẫu vật); thu thập (dữ liệu, thông tin, mẫu).','采集 thiên về lấy từ tự nhiên / thực địa; 收集 thiên về gom góp (tem, tài liệu).'],
   usage:'采集 + 树果 / 草药 / 标本 / 数据 / 样本; 靠采集为生.',
   collo:['采集树果','采集草药','采集标本','采集数据'],
   ex_zh:'祖先们只靠打猎过不了日子，光靠采集树果也过不了日子。',ex_py:'Zǔxiānmen zhǐ kào dǎliè guò bu liǎo rìzi, guāng kào cǎijí shù guǒ yě guò bu liǎo rìzi.',ex_vn:'Tổ tiên chỉ dựa vào săn bắn thì không sống nổi, chỉ dựa vào hái lượm quả cây cũng không sống nổi.',
   exList:[
     {zh:'祖先们只靠打猎过不了日子，光靠采集树果也过不了日子。',py:'Zǔxiānmen zhǐ kào dǎliè guò bu liǎo rìzi, guāng kào cǎijí shù guǒ yě guò bu liǎo rìzi.',vn:'Tổ tiên chỉ dựa vào săn bắn thì không sống nổi, chỉ dựa vào hái lượm quả cây cũng không sống nổi.'},
     {zh:'生物课上，老师带我们到山上采集植物标本。',py:'Shēngwù kè shang, lǎoshī dài wǒmen dào shān shang cǎijí zhíwù biāoběn.',vn:'Trong giờ sinh học, cô giáo dẫn chúng tôi lên núi thu thập mẫu thực vật.'},
     {zh:'这个手机应用会采集用户的位置信息。',py:'Zhège shǒujī yìngyòng huì cǎijí yònghù de wèizhi xìnxī.',vn:'Ứng dụng điện thoại này sẽ thu thập thông tin vị trí của người dùng.'}
   ],
   colloFull:[
     {zh:'采集树果',py:'cǎijí shù guǒ',vn:'hái lượm quả cây'},
     {zh:'采集草药',py:'cǎijí cǎoyào',vn:'hái thảo dược'},
     {zh:'采集标本',py:'cǎijí biāoběn',vn:'thu thập mẫu vật'},
     {zh:'采集数据',py:'cǎijí shùjù',vn:'thu thập dữ liệu'},
     {zh:'采集样本',py:'cǎijí yàngběn',vn:'lấy mẫu'}
   ],
   patterns:[
     {s:'到 + nơi + 采集 + N',m:'Đến … thu thập / hái …'},
     {s:'靠 + 采集 / 打猎 + 为生',m:'Sống nhờ hái lượm / săn bắn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để hoàn thành bài báo cáo, chúng tôi đã thu thập rất nhiều số liệu.',answer:'为了完成这篇报告，我们采集了大量的数据。',answerPy:'Wèile wánchéng zhè piān bàogào, wǒmen cǎijíle dàliàng de shùjù.',
      note:'为了……: mục đích, đứng đầu câu.',pair:'为了……'},
     {promptLang:'vi',prompt:'Người xưa không chỉ săn bắn mà còn hái lượm quả dại.',answer:'古人不但打猎，而且采集野果。',answerPy:'Gǔrén búdàn dǎliè, érqiě cǎijí yěguǒ.',
      note:'不但……而且……; 打猎 (bài 4).',pair:'不但……而且……'}
   ]},

  {n:34,zh:'种子',py:'zhǒngzi',pos:'Danh từ',vn:'hạt giống',hv:'chủng tử',em:'🌱',lesson:1,
   explain:['Hạt của cây dùng để gieo trồng. 种 đọc zhǒng (giống, loại); khi là động từ "trồng" đọc zhòng (种庄稼).','Nghĩa bóng: mầm mống (希望的种子, 友谊的种子).'],
   usage:'一颗 / 一粒 + 种子; 播 / 撒 + 种子; 种子 + 发芽; 在心里种下……的种子.',
   collo:['一颗种子','播种子','种子发芽','希望的种子'],
   ex_zh:'他们发现种子和水最亲近，喝过水的种子就是金闪闪的稻谷。',ex_py:'Tāmen fāxiàn zhǒngzi hé shuǐ zuì qīnjìn, hēguo shuǐ de zhǒngzi jiù shì jīnshǎnshǎn de dàogǔ.',ex_vn:'Họ phát hiện hạt giống gần gũi với nước nhất, hạt giống đã được uống nước chính là thóc lúa vàng óng.',
   exList:[
     {zh:'他们发现种子和水最亲近，喝过水的种子就是金闪闪的稻谷。',py:'Tāmen fāxiàn zhǒngzi hé shuǐ zuì qīnjìn, hēguo shuǐ de zhǒngzi jiù shì jīnshǎnshǎn de dàogǔ.',vn:'Họ phát hiện hạt giống gần gũi với nước nhất, hạt giống đã được uống nước chính là thóc lúa vàng óng.'},
     {zh:'春天到了，农民们忙着在田里播种子。',py:'Chūntiān dào le, nóngmínmen mángzhe zài tián li bō zhǒngzi.',vn:'Mùa xuân đến, nông dân bận rộn gieo hạt ngoài đồng.'},
     {zh:'老师的一句鼓励，在他心里种下了希望的种子。',py:'Lǎoshī de yí jù gǔlì, zài tā xīnli zhòngxiàle xīwàng de zhǒngzi.',vn:'Một lời động viên của thầy đã gieo vào lòng cậu ấy hạt giống hy vọng.'}
   ],
   colloFull:[
     {zh:'一颗种子',py:'yì kē zhǒngzi',vn:'một hạt giống'},
     {zh:'播种子',py:'bō zhǒngzi',vn:'gieo hạt'},
     {zh:'种子发芽',py:'zhǒngzi fāyá',vn:'hạt nảy mầm'},
     {zh:'希望的种子',py:'xīwàng de zhǒngzi',vn:'hạt giống hy vọng'},
     {zh:'优良种子',py:'yōuliáng zhǒngzi',vn:'giống tốt'}
   ],
   patterns:[
     {s:'一颗 / 一粒 + 种子',m:'Một hạt giống'},
     {s:'在 + 心里 + 种下 + ……的种子',m:'Gieo vào lòng mầm mống … (nghĩa bóng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần tưới nước đúng giờ, mấy hạt giống này sẽ nhanh chóng nảy mầm.',answer:'只要按时浇水，这些种子很快就会发芽。',answerPy:'Zhǐyào ànshí jiāo shuǐ, zhèxiē zhǒngzi hěn kuài jiù huì fāyá.',
      note:'只要……就……: điều kiện đủ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi đã gieo hạt giống vào chậu hoa, bây giờ chỉ việc chờ nó nảy mầm.',answer:'我把种子种在花盆里了，现在就等它发芽了。',answerPy:'Wǒ bǎ zhǒngzi zhòng zài huāpén li le, xiànzài jiù děng tā fāyá le.',
      note:'Câu 把 + V在 + nơi; chú ý 种子 zhǒngzi — 种 zhòng (động từ).',pair:'Câu 把……V在……'}
   ]},

  {n:35,zh:'稻谷',py:'dàogǔ',pos:'Danh từ',vn:'hạt lúa, thóc',hv:'đạo cốc',em:'🌾',lesson:1,
   explain:['Hạt lúa còn nguyên vỏ (thóc); xay xát bỏ vỏ thành 大米 (gạo).','Hay gặp: 金黄的稻谷, 收割稻谷, 晒稻谷.'],
   usage:'金黄的 / 金闪闪的 + 稻谷; 收 / 割 / 晒 + 稻谷; 稻谷 + 成熟.',
   collo:['金闪闪的稻谷','收割稻谷','晒稻谷','稻谷成熟'],
   ex_zh:'喝过水的种子就是金闪闪的稻谷。',ex_py:'Hēguo shuǐ de zhǒngzi jiù shì jīnshǎnshǎn de dàogǔ.',ex_vn:'Hạt giống đã được uống nước chính là thóc lúa vàng óng.',
   exList:[
     {zh:'喝过水的种子就是金闪闪的稻谷，从此他们再也离不开梯田和水。',py:'Hēguo shuǐ de zhǒngzi jiù shì jīnshǎnshǎn de dàogǔ, cóngcǐ tāmen zài yě lí bu kāi tītián hé shuǐ.',vn:'Hạt giống đã uống nước chính là thóc lúa vàng óng, từ đó họ không bao giờ rời xa được ruộng bậc thang và nước.'},
     {zh:'秋天稻谷成熟了，田野里一片金黄。',py:'Qiūtiān dàogǔ chéngshú le, tiányě li yí piàn jīnhuáng.',vn:'Mùa thu lúa chín, cánh đồng một màu vàng óng.'},
     {zh:'村民们把收下来的稻谷铺在院子里晒干。',py:'Cūnmínmen bǎ shōu xialai de dàogǔ pū zài yuànzi li shàigān.',vn:'Dân làng trải thóc vừa thu hoạch ra sân phơi khô.'}
   ],
   colloFull:[
     {zh:'金闪闪的稻谷',py:'jīnshǎnshǎn de dàogǔ',vn:'thóc vàng óng ánh'},
     {zh:'收割稻谷',py:'shōugē dàogǔ',vn:'gặt lúa'},
     {zh:'晒稻谷',py:'shài dàogǔ',vn:'phơi thóc'},
     {zh:'稻谷成熟',py:'dàogǔ chéngshú',vn:'lúa chín'},
     {zh:'一袋稻谷',py:'yí dài dàogǔ',vn:'một bao thóc'}
   ],
   patterns:[
     {s:'稻谷 + 成熟了 / 丰收了',m:'Lúa chín / bội thu'},
     {s:'把 + 稻谷 + 铺在 / 晒在 + nơi',m:'Trải / phơi thóc ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Năm nay mưa thuận gió hoà, thóc thu hoạch được nhiều hơn năm ngoái.',answer:'今年风调雨顺，收的稻谷比去年多。',answerPy:'Jīnnián fēngtiáo-yǔshùn, shōu de dàogǔ bǐ qùnián duō.',
      note:'Câu so sánh A 比 B + adj.',pair:'Câu so sánh 比'},
     {promptLang:'vi',prompt:'Thóc phải phơi khô rồi mới cất vào kho được.',answer:'稻谷得晒干了才能放进仓库。',answerPy:'Dàogǔ děi shàigān le cái néng fàngjìn cāngkù.',
      note:'得 (děi) = phải; ……了才……: xong … mới ….',pair:'……了才……'}
   ]},

  {n:36,zh:'锲而不舍',py:'qiè\'érbùshě',pos:'Thành ngữ',vn:'kiên nhẫn, miệt mài',hv:'khiết nhi bất xả',em:'⛏️',lesson:1,
   explain:['Khắc mãi không buông (锲 = khắc, 舍 = bỏ) — ví với sự kiên trì bền bỉ, làm đến cùng không bỏ dở.','Dùng làm vị ngữ (做事锲而不舍), định ngữ (锲而不舍的精神) hoặc danh từ hoá (经过……的锲而不舍).'],
   usage:'经过 + … + 的锲而不舍; 锲而不舍的 + 精神 / 努力; 做事 / 学习 + 锲而不舍.',
   collo:['锲而不舍的精神','经过锲而不舍的努力','做事锲而不舍','锲而不舍地研究'],
   ex_zh:'由于小王做事锲而不舍，所以最后取得了成功。',ex_py:'Yóuyú Xiǎo Wáng zuò shì qiè\'érbùshě, suǒyǐ zuìhòu qǔdéle chénggōng.',ex_vn:'Vì Tiểu Vương làm việc kiên trì bền bỉ nên cuối cùng đã thành công. (练习2 ⑥)',
   exList:[
     {zh:'由于小王做事锲而不舍，所以最后取得了成功。',py:'Yóuyú Xiǎo Wáng zuò shì qiè\'érbùshě, suǒyǐ zuìhòu qǔdéle chénggōng.',vn:'Vì Tiểu Vương làm việc kiên trì bền bỉ nên cuối cùng đã thành công. (练习2 ⑥)'},
     {zh:'经过数十代人的锲而不舍，他们终于将一座座大山雕塑成了梯田。',py:'Jīngguò shù shí dài rén de qiè\'érbùshě, tāmen zhōngyú jiāng yí zuòzuò dà shān diāosù chéngle tītián.',vn:'Qua sự bền bỉ không ngừng của mấy chục thế hệ, cuối cùng họ đã tạc từng ngọn núi lớn thành ruộng bậc thang.'},
     {zh:'科学研究需要锲而不舍的精神，不能一遇到挫折就放弃。',py:'Kēxué yánjiū xūyào qiè\'érbùshě de jīngshén, bù néng yí yùdào cuòzhé jiù fàngqì.',vn:'Nghiên cứu khoa học cần tinh thần kiên trì bền bỉ, không thể vừa gặp vấp ngã đã bỏ cuộc.'}
   ],
   colloFull:[
     {zh:'锲而不舍的精神',py:'qiè\'érbùshě de jīngshén',vn:'tinh thần kiên trì bền bỉ'},
     {zh:'经过锲而不舍的努力',py:'jīngguò qiè\'érbùshě de nǔlì',vn:'qua nỗ lực bền bỉ'},
     {zh:'做事锲而不舍',py:'zuò shì qiè\'érbùshě',vn:'làm việc kiên trì đến cùng'},
     {zh:'锲而不舍地研究',py:'qiè\'érbùshě de yánjiū',vn:'miệt mài nghiên cứu'},
     {zh:'数十代人的锲而不舍',py:'shù shí dài rén de qiè\'érbùshě',vn:'sự bền bỉ của mấy chục thế hệ'}
   ],
   patterns:[
     {s:'做事 / 学习 + 锲而不舍',m:'Làm / học một cách kiên trì (vị ngữ)'},
     {s:'经过 + (người) + 的锲而不舍，……终于……',m:'Nhờ sự bền bỉ của …, cuối cùng … (danh từ hoá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có tinh thần kiên trì bền bỉ, không có việc gì là không làm được.',answer:'只要有锲而不舍的精神，就没有做不成的事。',answerPy:'Zhǐyào yǒu qiè\'érbùshě de jīngshén, jiù méiyǒu zuò bu chéng de shì.',
      note:'只要……就……; phủ định kép 没有做不成的事.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nhờ nhiều năm miệt mài, cuối cùng ông ấy đã tìm ra nguyên nhân của căn bệnh.',answer:'经过多年锲而不舍的研究，他终于找到了这种病的原因。',answerPy:'Jīngguò duō nián qiè\'érbùshě de yánjiū, tā zhōngyú zhǎodàole zhè zhǒng bìng de yuányīn.',
      note:'经过……，终于……: trải qua … cuối cùng ….',pair:'经过……，终于……'}
   ]},

  {n:37,zh:'开辟',py:'kāipì',pos:'Động từ',vn:'khai thác, mở mang, xây dựng',hv:'khai tịch',em:'🛤️',lesson:1,
   explain:['Mở ra, khai phá cái trước đây chưa có: đường sá, đất đai, tuyến bay, thị trường, lĩnh vực mới.','Hay gặp: 开辟梯田, 开辟新航线, 开辟新市场, 开辟新天地. Trang trọng hơn 开.'],
   usage:'开辟 + 梯田 / 道路 / 航线 / 市场 / 新领域; 为……开辟 + 道路.',
   collo:['开辟梯田','开辟新航线','开辟新市场','开辟道路'],
   ex_zh:'他们选择开辟梯田这种农耕方式，最终与大自然和谐相处。',ex_py:'Tāmen xuǎnzé kāipì tītián zhè zhǒng nónggēng fāngshì, zuìzhōng yǔ dàzìrán héxié xiāngchǔ.',ex_vn:'Họ chọn cách canh tác khai phá ruộng bậc thang, cuối cùng chung sống hài hoà với thiên nhiên.',
   exList:[
     {zh:'他们选择开辟梯田这种农耕方式，最终与大自然和谐相处。',py:'Tāmen xuǎnzé kāipì tītián zhè zhǒng nónggēng fāngshì, zuìzhōng yǔ dàzìrán héxié xiāngchǔ.',vn:'Họ chọn cách canh tác khai phá ruộng bậc thang, cuối cùng chung sống hài hoà với thiên nhiên.'},
     {zh:'这家航空公司新开辟了一条从河内到昆明的航线。',py:'Zhè jiā hángkōng gōngsī xīn kāipìle yì tiáo cóng Hénèi dào Kūnmíng de hángxiàn.',vn:'Hãng hàng không này vừa mở một tuyến bay mới từ Hà Nội đến Côn Minh.'},
     {zh:'为了开辟国外市场，公司专门成立了一个团队。',py:'Wèile kāipì guówài shìchǎng, gōngsī zhuānmén chénglìle yí ge tuánduì.',vn:'Để mở rộng thị trường nước ngoài, công ty đã lập riêng một nhóm.'}
   ],
   colloFull:[
     {zh:'开辟梯田',py:'kāipì tītián',vn:'khai phá ruộng bậc thang'},
     {zh:'开辟新航线',py:'kāipì xīn hángxiàn',vn:'mở tuyến bay mới'},
     {zh:'开辟新市场',py:'kāipì xīn shìchǎng',vn:'mở thị trường mới'},
     {zh:'开辟道路',py:'kāipì dàolù',vn:'mở đường'},
     {zh:'开辟新天地',py:'kāipì xīn tiāndì',vn:'mở ra chân trời mới'}
   ],
   patterns:[
     {s:'开辟 + 新 + 航线 / 市场 / 领域',m:'Mở ra … mới'},
     {s:'为 + … + 开辟 + 道路',m:'Mở đường cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có những người đi trước mở đường thì chúng ta đã không có ngày hôm nay.',answer:'要不是前人为我们开辟了道路，我们就不会有今天。',answerPy:'Yàobúshì qiánrén wèi wǒmen kāipìle dàolù, wǒmen jiù bú huì yǒu jīntiān.',
      note:'要不是……就……: nếu không nhờ … thì đã ….',pair:'要不是……'},
     {promptLang:'vi',prompt:'Thành phố đã mở một làn đường riêng cho xe buýt.',answer:'市里为公共汽车开辟了一条专用车道。',answerPy:'Shì li wèi gōnggòng qìchē kāipìle yì tiáo zhuānyòng chēdào.',
      note:'为 + đối tượng + V: làm gì cho ai.',pair:'为……V'}
   ]},

  {n:38,zh:'心血',py:'xīnxuè',pos:'Danh từ',vn:'tâm huyết',hv:'tâm huyết',em:'❤️',lesson:1,
   explain:['Tâm sức, trí lực và tình cảm dồn vào một việc.','Hay gặp: 花费 / 倾注 + 心血; 心血的结晶; 用心血 + V; 付出心血. Trang trọng.'],
   usage:'花 / 倾注 / 付出 + (很多) + 心血; 用心血 + V; ……是……心血的结晶.',
   collo:['花了很多心血','倾注心血','心血的结晶','付出心血'],
   ex_zh:'山民们用汗水，用心血，完成了山脉上的雕刻。',ex_py:'Shānmínmen yòng hànshuǐ, yòng xīnxuè, wánchéngle shānmài shang de diāokè.',ex_vn:'Người dân miền núi đã dùng mồ hôi, dùng tâm huyết hoàn thành tác phẩm điêu khắc trên dãy núi.',
   exList:[
     {zh:'山民们用汗水，用心血，用日复一日的辛勤劳动完成了山脉上的雕刻。',py:'Shānmínmen yòng hànshuǐ, yòng xīnxuè, yòng rì fù yí rì de xīnqín láodòng wánchéngle shānmài shang de diāokè.',vn:'Người dân miền núi đã dùng mồ hôi, dùng tâm huyết, dùng lao động cần cù ngày qua ngày để hoàn thành tác phẩm điêu khắc trên dãy núi.'},
     {zh:'这本词典是几位老教授十几年心血的结晶。',py:'Zhè běn cídiǎn shì jǐ wèi lǎo jiàoshòu shí jǐ nián xīnxuè de jiéjīng.',vn:'Cuốn từ điển này là kết tinh tâm huyết mười mấy năm của mấy vị giáo sư già.'},
     {zh:'为了把孩子培养成才，父母花了很多心血。',py:'Wèile bǎ háizi péiyǎng chéng cái, fùmǔ huāle hěn duō xīnxuè.',vn:'Để nuôi dạy con nên người, cha mẹ đã bỏ ra rất nhiều tâm huyết.'}
   ],
   colloFull:[
     {zh:'花了很多心血',py:'huāle hěn duō xīnxuè',vn:'bỏ ra nhiều tâm huyết'},
     {zh:'倾注心血',py:'qīngzhù xīnxuè',vn:'dồn hết tâm huyết'},
     {zh:'心血的结晶',py:'xīnxuè de jiéjīng',vn:'kết tinh tâm huyết'},
     {zh:'付出心血',py:'fùchū xīnxuè',vn:'bỏ công sức tâm huyết'},
     {zh:'白费心血',py:'báifèi xīnxuè',vn:'uổng công tâm huyết'}
   ],
   patterns:[
     {s:'为 + việc + 花 / 付出 + (了) + 心血',m:'Bỏ tâm huyết vì …'},
     {s:'A + 是 + … + 心血的结晶',m:'A là kết tinh tâm huyết của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu dự án này thất bại thì tâm huyết mấy năm nay của chúng ta coi như uổng phí.',answer:'如果这个项目失败了，我们这几年的心血就白费了。',answerPy:'Rúguǒ zhège xiàngmù shībài le, wǒmen zhè jǐ nián de xīnxuè jiù báifèi le.',
      note:'如果……就……: giả thiết.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Bức tranh này tuy nhỏ nhưng là tâm huyết cả một năm của cô ấy.',answer:'这幅画虽然不大，却是她一年的心血。',answerPy:'Zhè fú huà suīrán bú dà, què shì tā yì nián de xīnxuè.',
      note:'虽然……却……: nhượng bộ, 却 đứng sau chủ ngữ vế sau.',pair:'虽然……却……'}
   ]},

  {n:39,zh:'辛勤',py:'xīnqín',pos:'Tính từ',vn:'siêng năng, chăm chỉ',hv:'tân cần',em:'👩‍🌾',lesson:1,
   explain:['Cần cù, chịu thương chịu khó, vất vả mà vẫn chăm chỉ (辛 = vất vả, 勤 = siêng).','Chủ yếu làm định ngữ / trạng ngữ, sắc thái ngợi khen, trang trọng: 辛勤劳动, 辛勤的园丁 (người thầy), 辛勤地工作.'],
   usage:'辛勤 + 劳动 / 工作 / 耕耘; 辛勤的 + 汗水 / 园丁; 辛勤地 + V.',
   collo:['辛勤劳动','辛勤的汗水','辛勤的园丁','辛勤地工作'],
   ex_zh:'山民们用日复一日的辛勤劳动完成了山脉上的雕刻。',ex_py:'Shānmínmen yòng rì fù yí rì de xīnqín láodòng wánchéngle shānmài shang de diāokè.',ex_vn:'Người dân miền núi đã dùng lao động cần cù ngày qua ngày để hoàn thành tác phẩm điêu khắc trên dãy núi.',
   exList:[
     {zh:'山民们用日复一日的辛勤劳动完成了山脉上的雕刻。',py:'Shānmínmen yòng rì fù yí rì de xīnqín láodòng wánchéngle shānmài shang de diāokè.',vn:'Người dân miền núi đã dùng lao động cần cù ngày qua ngày để hoàn thành tác phẩm điêu khắc trên dãy núi.'},
     {zh:'老师们就像辛勤的园丁，培育着一代又一代的学生。',py:'Lǎoshīmen jiù xiàng xīnqín de yuándīng, péiyùzhe yí dài yòu yí dài de xuésheng.',vn:'Thầy cô giống như những người làm vườn cần mẫn, vun trồng hết thế hệ học trò này đến thế hệ khác.'},
     {zh:'经过一年的辛勤工作，他终于还清了所有的债。',py:'Jīngguò yì nián de xīnqín gōngzuò, tā zhōngyú huánqīngle suǒyǒu de zhài.',vn:'Sau một năm làm việc cật lực, cuối cùng anh ấy đã trả hết mọi khoản nợ.'}
   ],
   colloFull:[
     {zh:'辛勤劳动',py:'xīnqín láodòng',vn:'lao động cần cù'},
     {zh:'辛勤的汗水',py:'xīnqín de hànshuǐ',vn:'mồ hôi vất vả'},
     {zh:'辛勤的园丁',py:'xīnqín de yuándīng',vn:'người làm vườn cần mẫn (thầy cô)'},
     {zh:'辛勤地工作',py:'xīnqín de gōngzuò',vn:'làm việc chăm chỉ'},
     {zh:'辛勤耕耘',py:'xīnqín gēngyún',vn:'cần mẫn cày cấy, miệt mài vun đắp'}
   ],
   patterns:[
     {s:'辛勤 + 劳动 / 工作 / 耕耘',m:'Lao động / làm việc cần cù'},
     {s:'用 / 靠 + 辛勤的劳动 + V',m:'Dựa vào lao động cần cù để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc sống hạnh phúc là do chính đôi tay cần cù của họ tạo nên.',answer:'幸福的生活是靠他们自己辛勤的双手创造出来的。',answerPy:'Xìngfú de shēnghuó shì kào tāmen zìjǐ xīnqín de shuāngshǒu chuàngzào chulai de.',
      note:'是……的 nhấn mạnh cách thức; V出来.',pair:'是……的 (nhấn mạnh cách thức)'},
     {promptLang:'vi',prompt:'Dù làm việc cật lực cả năm nhưng thu nhập của họ vẫn không cao.',answer:'尽管辛勤地工作了一年，他们的收入依旧不高。',answerPy:'Jǐnguǎn xīnqín de gōngzuòle yì nián, tāmen de shōurù yījiù bù gāo.',
      note:'尽管……依旧……: nhượng bộ; 地 nối trạng ngữ.',pair:'尽管……'}
   ]},

  {n:40,zh:'阻拦',py:'zǔlán',pos:'Động từ',vn:'ngăn cản, cản trở',hv:'trở lan',em:'🚧',lesson:1,
   explain:['Chặn lại, không cho làm hoặc không cho đi tiếp (thường là ngăn người khác làm việc gì).','Hay gặp: 阻拦 + người; 谁也阻拦不了; 不顾……的阻拦. So với 阻止: 阻拦 thiên về hành động chặn lại cụ thể; 阻止 dùng rộng hơn, cả sự việc trừu tượng.'],
   usage:'阻拦 + người + (V); 阻拦不了 / 阻拦不住; 不顾 + 家人 + 的阻拦.',
   collo:['阻拦不了','不顾家人的阻拦','上前阻拦','极力阻拦'],
   ex_zh:'任何困难也阻拦不了他们。',ex_py:'Rènhé kùnnan yě zǔlán bu liǎo tāmen.',ex_vn:'Bất kỳ khó khăn nào cũng không cản nổi họ.',
   exList:[
     {zh:'山民们完成了山脉上的雕刻，任何困难也阻拦不了他们。',py:'Shānmínmen wánchéngle shānmài shang de diāokè, rènhé kùnnan yě zǔlán bu liǎo tāmen.',vn:'Người dân miền núi đã hoàn thành tác phẩm điêu khắc trên dãy núi, bất kỳ khó khăn nào cũng không cản nổi họ.'},
     {zh:'他要做的事情，谁也阻拦不了，你们就别管他了。',py:'Tā yào zuò de shìqing, shéi yě zǔlán bu liǎo, nǐmen jiù bié guǎn tā le.',vn:'Việc anh ấy đã muốn làm thì ai cũng không ngăn được, các cậu đừng can thiệp nữa. (练习2 ④)'},
     {zh:'她不顾父母的阻拦，一个人去国外留学了。',py:'Tā búgù fùmǔ de zǔlán, yí ge rén qù guówài liúxué le.',vn:'Cô ấy bất chấp sự ngăn cản của bố mẹ, một mình ra nước ngoài du học.'}
   ],
   colloFull:[
     {zh:'阻拦不了',py:'zǔlán bu liǎo',vn:'không ngăn nổi'},
     {zh:'不顾家人的阻拦',py:'búgù jiārén de zǔlán',vn:'bất chấp gia đình ngăn cản'},
     {zh:'上前阻拦',py:'shàngqián zǔlán',vn:'bước lên ngăn lại'},
     {zh:'极力阻拦',py:'jílì zǔlán',vn:'ra sức ngăn cản'},
     {zh:'阻拦他出门',py:'zǔlán tā chū mén',vn:'ngăn anh ấy ra ngoài'}
   ],
   patterns:[
     {s:'阻拦 + người + (不让 + V)',m:'Ngăn ai (không cho làm gì)'},
     {s:'谁也 / 任何……也 + 阻拦不了',m:'Không ai / không gì ngăn được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù ai ngăn cản, anh ấy cũng sẽ kiên trì đến cùng.',answer:'不管谁阻拦，他都会坚持到底。',answerPy:'Bùguǎn shéi zǔlán, tā dōu huì jiānchí dàodǐ.',
      note:'不管……都……: điều kiện bất kỳ, kết quả không đổi.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Bảo vệ ngăn chúng tôi ở cổng, không cho vào.',answer:'保安把我们阻拦在门口，不让我们进去。',answerPy:'Bǎo\'ān bǎ wǒmen zǔlán zài ménkǒu, bú ràng wǒmen jìnqu.',
      note:'Câu 把 + V在 + nơi; 不让 + người + V.',pair:'Câu 把……V在……'}
   ]},

  {n:41,zh:'生态',py:'shēngtài',pos:'Danh từ',vn:'sinh thái học; sinh thái',hv:'sinh thái',em:'🌳',lesson:1,
   explain:['Trạng thái sinh tồn, phát triển của sinh vật và mối quan hệ giữa chúng với môi trường.','Hay gặp: 生态环境, 生态平衡, 生态系统, 生态价值, 破坏生态.'],
   usage:'生态 + 环境 / 平衡 / 系统 / 价值 / 旅游; 保护 / 破坏 + 生态.',
   collo:['生态环境','生态平衡','生态价值','保护生态'],
   ex_zh:'这幅画卷以其宝贵的生态、文化和审美价值，展示着它的罕见和珍稀。',ex_py:'Zhè fú huàjuàn yǐ qí bǎoguì de shēngtài, wénhuà hé shěnměi jiàzhí, zhǎnshìzhe tā de hǎnjiàn hé zhēnxī.',ex_vn:'Bức tranh này, với những giá trị sinh thái, văn hoá và thẩm mỹ quý báu, thể hiện sự hiếm có và quý giá của nó.',
   exList:[
     {zh:'这幅画卷以其宝贵的生态、文化和审美价值，展示着它的罕见和珍稀。',py:'Zhè fú huàjuàn yǐ qí bǎoguì de shēngtài, wénhuà hé shěnměi jiàzhí, zhǎnshìzhe tā de hǎnjiàn hé zhēnxī.',vn:'Bức tranh này, với những giá trị sinh thái, văn hoá và thẩm mỹ quý báu, thể hiện sự hiếm có và quý giá của nó.'},
     {zh:'由于风景优美，生态环境良好，九寨沟获得了“世界自然遗产”的称号。',py:'Yóuyú fēngjǐng yōuměi, shēngtài huánjìng liánghǎo, Jiǔzhàigōu huòdéle “shìjiè zìrán yíchǎn” de chēnghào.',vn:'Nhờ phong cảnh đẹp, môi trường sinh thái tốt, Cửu Trại Câu đã được công nhận là "Di sản thiên nhiên thế giới".'},
     {zh:'乱砍树木会破坏生态平衡，最终伤害的是人类自己。',py:'Luàn kǎn shùmù huì pòhuài shēngtài pínghéng, zuìzhōng shānghài de shì rénlèi zìjǐ.',vn:'Chặt cây bừa bãi sẽ phá vỡ cân bằng sinh thái, rốt cuộc người bị hại chính là loài người.'}
   ],
   colloFull:[
     {zh:'生态环境',py:'shēngtài huánjìng',vn:'môi trường sinh thái'},
     {zh:'生态平衡',py:'shēngtài pínghéng',vn:'cân bằng sinh thái'},
     {zh:'生态价值',py:'shēngtài jiàzhí',vn:'giá trị sinh thái'},
     {zh:'保护生态',py:'bǎohù shēngtài',vn:'bảo vệ sinh thái'},
     {zh:'生态旅游',py:'shēngtài lǚyóu',vn:'du lịch sinh thái'}
   ],
   patterns:[
     {s:'生态 + 环境 / 平衡 / 系统',m:'Môi trường / cân bằng / hệ sinh thái'},
     {s:'保护 / 破坏 + 生态(环境)',m:'Bảo vệ / phá hoại sinh thái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn phát triển du lịch thì trước hết phải bảo vệ tốt môi trường sinh thái.',answer:'要想发展旅游业，首先得保护好生态环境。',answerPy:'Yào xiǎng fāzhǎn lǚyóuyè, shǒuxiān děi bǎohù hǎo shēngtài huánjìng.',
      note:'要想……，首先得……: muốn … thì trước hết phải ….',pair:'要想……，首先……'},
     {promptLang:'vi',prompt:'Một khi cân bằng sinh thái bị phá vỡ thì rất khó khôi phục.',answer:'生态平衡一旦被破坏，就很难恢复了。',answerPy:'Shēngtài pínghéng yídàn bèi pòhuài, jiù hěn nán huīfù le.',
      note:'一旦……就……: một khi … thì ….',pair:'一旦……就……'}
   ]},

  {n:42,zh:'审美',py:'shěnměi',pos:'Động từ',vn:'thẩm mỹ',hv:'thẩm mỹ',em:'🎨',lesson:1,
   explain:['Cảm nhận, đánh giá và thưởng thức cái đẹp.','Chủ yếu làm định ngữ: 审美价值, 审美能力, 审美观, 审美眼光; 审美标准.'],
   usage:'审美 + 价值 / 能力 / 观 / 标准 / 眼光; 具有……的审美价值.',
   collo:['审美价值','审美能力','审美观','审美标准'],
   ex_zh:'这幅画卷以其宝贵的生态、文化和审美价值，展示着它的罕见和珍稀。',ex_py:'Zhè fú huàjuàn yǐ qí bǎoguì de shēngtài, wénhuà hé shěnměi jiàzhí, zhǎnshìzhe tā de hǎnjiàn hé zhēnxī.',ex_vn:'Bức tranh này, với những giá trị sinh thái, văn hoá và thẩm mỹ quý báu, thể hiện sự hiếm có và quý giá của nó.',
   exList:[
     {zh:'除了具有很高的审美价值，九寨沟还蕴藏着丰富、珍稀的动植物资源。',py:'Chúle jùyǒu hěn gāo de shěnměi jiàzhí, Jiǔzhàigōu hái yùncángzhe fēngfù, zhēnxī de dòng-zhíwù zīyuán.',vn:'Ngoài giá trị thẩm mỹ rất cao, Cửu Trại Câu còn chứa đựng nguồn động thực vật phong phú, quý hiếm.'},
     {zh:'多参观博物馆，可以提高孩子的审美能力。',py:'Duō cānguān bówùguǎn, kěyǐ tígāo háizi de shěnměi nénglì.',vn:'Tham quan bảo tàng nhiều có thể nâng cao năng lực thẩm mỹ của trẻ.'},
     {zh:'不同时代的人，审美标准也不一样。',py:'Bùtóng shídài de rén, shěnměi biāozhǔn yě bù yíyàng.',vn:'Con người ở các thời đại khác nhau thì tiêu chuẩn thẩm mỹ cũng khác nhau.'}
   ],
   colloFull:[
     {zh:'审美价值',py:'shěnměi jiàzhí',vn:'giá trị thẩm mỹ'},
     {zh:'审美能力',py:'shěnměi nénglì',vn:'năng lực thẩm mỹ'},
     {zh:'审美观',py:'shěnměiguān',vn:'quan niệm thẩm mỹ'},
     {zh:'审美标准',py:'shěnměi biāozhǔn',vn:'tiêu chuẩn thẩm mỹ'},
     {zh:'审美眼光',py:'shěnměi yǎnguāng',vn:'con mắt thẩm mỹ'}
   ],
   patterns:[
     {s:'审美 + 价值 / 能力 / 标准',m:'Giá trị / năng lực / tiêu chuẩn thẩm mỹ'},
     {s:'具有 + (很高的) + 审美价值',m:'Có giá trị thẩm mỹ (cao)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi người có quan niệm thẩm mỹ khác nhau, vì vậy không cần ép người khác giống mình.',answer:'每个人的审美观都不同，所以没必要强迫别人跟自己一样。',answerPy:'Měi ge rén de shěnměiguān dōu bùtóng, suǒyǐ méi bìyào qiǎngpò biérén gēn zìjǐ yíyàng.',
      note:'跟……一样: giống như; 强迫 (bài 4).',pair:'跟……一样'},
     {promptLang:'vi',prompt:'Ngôi nhà cổ này vừa có giá trị lịch sử vừa có giá trị thẩm mỹ.',answer:'这座古建筑既有历史价值，又有审美价值。',answerPy:'Zhè zuò gǔ jiànzhù jì yǒu lìshǐ jiàzhí, yòu yǒu shěnměi jiàzhí.',
      note:'既……又……: vừa … vừa ….',pair:'既……又……'}
   ]},

  {n:43,zh:'罕见',py:'hǎnjiàn',pos:'Tính từ',vn:'hiếm thấy',hv:'hãn kiến',em:'🦄',lesson:1,
   explain:['Rất ít khi thấy, hiếm có (罕 = hiếm). Văn viết, mạnh hơn 少见.','Hay gặp: 罕见的疾病, 罕见的现象, 百年罕见, 世所罕见.'],
   usage:'罕见的 + 疾病 / 现象 / 天气; 十分 / 极为 + 罕见; 百年罕见.',
   collo:['罕见的疾病','十分罕见','百年罕见','罕见的现象'],
   ex_zh:'他患上了一种罕见的疾病，连最有经验的大夫都感到头疼。',ex_py:'Tā huànshàngle yì zhǒng hǎnjiàn de jíbìng, lián zuì yǒu jīngyàn de dàifu dōu gǎndào tóuténg.',ex_vn:'Anh ấy mắc một căn bệnh hiếm gặp, ngay cả bác sĩ giàu kinh nghiệm nhất cũng thấy đau đầu. (练习2 ③)',
   exList:[
     {zh:'他患上了一种罕见的疾病，连最有经验的大夫都感到头疼。',py:'Tā huànshàngle yì zhǒng hǎnjiàn de jíbìng, lián zuì yǒu jīngyàn de dàifu dōu gǎndào tóuténg.',vn:'Anh ấy mắc một căn bệnh hiếm gặp, ngay cả bác sĩ giàu kinh nghiệm nhất cũng thấy đau đầu. (练习2 ③)'},
     {zh:'这幅画卷展示着它的罕见和珍稀。',py:'Zhè fú huàjuàn zhǎnshìzhe tā de hǎnjiàn hé zhēnxī.',vn:'Bức tranh này thể hiện sự hiếm có và quý giá của nó.'},
     {zh:'南方下这么大的雪，是几十年来罕见的。',py:'Nánfāng xià zhème dà de xuě, shì jǐ shí nián lái hǎnjiàn de.',vn:'Miền Nam có tuyết lớn thế này là chuyện hiếm thấy mấy chục năm nay.'}
   ],
   colloFull:[
     {zh:'罕见的疾病',py:'hǎnjiàn de jíbìng',vn:'căn bệnh hiếm gặp'},
     {zh:'十分罕见',py:'shífēn hǎnjiàn',vn:'vô cùng hiếm thấy'},
     {zh:'百年罕见',py:'bǎi nián hǎnjiàn',vn:'trăm năm hiếm thấy'},
     {zh:'罕见的现象',py:'hǎnjiàn de xiànxiàng',vn:'hiện tượng hiếm gặp'},
     {zh:'世所罕见',py:'shì suǒ hǎnjiàn',vn:'thế gian hiếm thấy'}
   ],
   patterns:[
     {s:'罕见的 + 疾病 / 现象',m:'… hiếm gặp (định ngữ)'},
     {s:'……是 + 时间 + 来 + 罕见的',m:'… là điều hiếm thấy trong … qua'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài chim này rất hiếm gặp, ngay cả nhà khoa học cũng ít khi được thấy.',answer:'这种鸟非常罕见，连科学家都很少见到。',answerPy:'Zhè zhǒng niǎo fēicháng hǎnjiàn, lián kēxuéjiā dōu hěn shǎo jiàndào.',
      note:'连……都……: ngay cả … cũng ….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Một học sinh cấp ba mà viết được cuốn tiểu thuyết như vậy thì thật hiếm có.',answer:'一个高中生能写出这样的小说，真是罕见。',answerPy:'Yí ge gāozhōngshēng néng xiěchū zhèyàng de xiǎoshuō, zhēn shì hǎnjiàn.',
      note:'Cả mệnh đề làm chủ ngữ; bổ ngữ kết quả 写出.',pair:'Mệnh đề làm chủ ngữ'}
   ]},

  {n:44,zh:'珍稀',py:'zhēnxī',pos:'Tính từ',vn:'quý hiếm',hv:'trân hi',em:'🐼',lesson:1,
   explain:['Quý giá và hiếm có (珍 = quý, 稀 = hiếm); chủ yếu dùng cho động vật, thực vật, tài nguyên.','Hay gặp: 珍稀动物, 珍稀植物, 珍稀物种, 珍稀的动植物资源.'],
   usage:'珍稀 + 动物 / 植物 / 物种 / 资源; 丰富、珍稀的 + 资源.',
   collo:['珍稀动物','珍稀植物','珍稀物种','珍稀资源'],
   ex_zh:'九寨沟还蕴藏着丰富、珍稀的动植物资源。',ex_py:'Jiǔzhàigōu hái yùncángzhe fēngfù, zhēnxī de dòng-zhíwù zīyuán.',ex_vn:'Cửu Trại Câu còn chứa đựng nguồn động thực vật phong phú, quý hiếm.',
   exList:[
     {zh:'除了具有很高的审美价值，九寨沟还蕴藏着丰富、珍稀的动植物资源。',py:'Chúle jùyǒu hěn gāo de shěnměi jiàzhí, Jiǔzhàigōu hái yùncángzhe fēngfù, zhēnxī de dòng-zhíwù zīyuán.',vn:'Ngoài giá trị thẩm mỹ rất cao, Cửu Trại Câu còn chứa đựng nguồn động thực vật phong phú, quý hiếm.'},
     {zh:'大熊猫是中国特有的珍稀动物。',py:'Dàxióngmāo shì Zhōngguó tèyǒu de zhēnxī dòngwù.',vn:'Gấu trúc là loài động vật quý hiếm đặc hữu của Trung Quốc.'},
     {zh:'这个自然保护区里生活着很多珍稀物种。',py:'Zhège zìrán bǎohùqū li shēnghuózhe hěn duō zhēnxī wùzhǒng.',vn:'Trong khu bảo tồn thiên nhiên này có rất nhiều loài quý hiếm sinh sống.'}
   ],
   colloFull:[
     {zh:'珍稀动物',py:'zhēnxī dòngwù',vn:'động vật quý hiếm'},
     {zh:'珍稀植物',py:'zhēnxī zhíwù',vn:'thực vật quý hiếm'},
     {zh:'珍稀物种',py:'zhēnxī wùzhǒng',vn:'loài quý hiếm'},
     {zh:'珍稀资源',py:'zhēnxī zīyuán',vn:'tài nguyên quý hiếm'},
     {zh:'保护珍稀动物',py:'bǎohù zhēnxī dòngwù',vn:'bảo vệ động vật quý hiếm'}
   ],
   patterns:[
     {s:'珍稀 + 动物 / 植物 / 物种',m:'Động / thực vật / loài quý hiếm'},
     {s:'丰富、珍稀的 + 资源',m:'Tài nguyên phong phú, quý hiếm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài động vật quý hiếm này đang dần biến mất, chúng ta phải bảo vệ nó.',answer:'这种珍稀动物正在慢慢消失，我们必须保护它。',answerPy:'Zhè zhǒng zhēnxī dòngwù zhèngzài mànmàn xiāoshī, wǒmen bìxū bǎohù tā.',
      note:'正在 + V: đang tiếp diễn; 必须: bắt buộc.',pair:'正在……'},
     {promptLang:'vi',prompt:'Ở Vườn quốc gia Cúc Phương có thể nhìn thấy nhiều loài thực vật quý hiếm.',answer:'在菊芳国家公园可以看到很多珍稀植物。',answerPy:'Zài Júfāng Guójiā Gōngyuán kěyǐ kàndào hěn duō zhēnxī zhíwù.',
      note:'Bổ ngữ kết quả 看到.',pair:'Bổ ngữ kết quả V到'}
   ]},

  {n:45,zh:'陶醉',py:'táozuì',pos:'Động từ',vn:'say sưa, ngây ngất',hv:'đào tuý',em:'😌',lesson:1,
   explain:['Đắm chìm, say mê trong một cảnh giới, niềm vui hay tâm trạng nào đó đến quên cả xung quanh.','Hay gặp: 让人 / 令人陶醉; 陶醉在 / 于……之中; 自我陶醉 (tự mãn, tự say sưa — nghĩa chê).'],
   usage:'让 / 令 + người + 陶醉; 陶醉 + 在 / 于 + ……(之)中; 陶醉地 + V.',
   collo:['让人陶醉','令人陶醉','陶醉在音乐中','自我陶醉'],
   ex_zh:'哈尼梯田的美景让人陶醉。',ex_py:'Hāní tītián de měijǐng ràng rén táozuì.',ex_vn:'Cảnh đẹp của ruộng bậc thang Hà Nhì khiến người ta ngây ngất.',
   exList:[
     {zh:'哈尼梯田的美景让人陶醉，这里的一切无不体现着当地百姓的智慧。',py:'Hāní tītián de měijǐng ràng rén táozuì, zhèlǐ de yíqiè wúbù tǐxiànzhe dāngdì bǎixìng de zhìhuì.',vn:'Cảnh đẹp của ruộng bậc thang Hà Nhì khiến người ta ngây ngất, mọi thứ ở đây đều thể hiện trí tuệ của người dân địa phương.'},
     {zh:'九寨沟像一幅美丽画卷展示在人们面前，令人陶醉。',py:'Jiǔzhàigōu xiàng yì fú měilì huàjuàn zhǎnshì zài rénmen miànqián, lìng rén táozuì.',vn:'Cửu Trại Câu như một bức tranh tuyệt đẹp bày ra trước mắt mọi người, khiến ai cũng say mê.'},
     {zh:'她闭上眼睛，完全陶醉在优美的音乐中。',py:'Tā bìshàng yǎnjing, wánquán táozuì zài yōuměi de yīnyuè zhōng.',vn:'Cô ấy nhắm mắt lại, hoàn toàn đắm chìm trong tiếng nhạc du dương.'}
   ],
   colloFull:[
     {zh:'让人陶醉',py:'ràng rén táozuì',vn:'khiến người ta say mê'},
     {zh:'令人陶醉',py:'lìng rén táozuì',vn:'làm người ta ngây ngất'},
     {zh:'陶醉在音乐中',py:'táozuì zài yīnyuè zhōng',vn:'đắm chìm trong âm nhạc'},
     {zh:'自我陶醉',py:'zìwǒ táozuì',vn:'tự mãn, tự say sưa'},
     {zh:'陶醉于美景之中',py:'táozuì yú měijǐng zhī zhōng',vn:'say sưa trước cảnh đẹp'}
   ],
   patterns:[
     {s:'N + 让 / 令 + 人 + 陶醉',m:'… khiến người ta ngây ngất'},
     {s:'陶醉 + 在 / 于 + …… + 中 / 之中',m:'Đắm chìm trong …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi say sưa ngắm cảnh đến mức quên cả giờ về.',answer:'我们陶醉在美景中，连回去的时间都忘了。',answerPy:'Wǒmen táozuì zài měijǐng zhōng, lián huíqu de shíjiān dōu wàng le.',
      note:'连……都……: ngay cả … cũng.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Đừng chỉ say sưa với thành tích đã có mà phải tiếp tục cố gắng.',answer:'不要只陶醉于已有的成绩，而要继续努力。',answerPy:'Bú yào zhǐ táozuì yú yǐ yǒu de chéngjì, ér yào jìxù nǔlì.',
      note:'不要……，而要……: đừng … mà hãy ….',pair:'不要……而要……'}
   ]},

  {n:46,zh:'遗产',py:'yíchǎn',pos:'Danh từ',vn:'di sản',hv:'di sản',em:'🏛️',lesson:1,
   explain:['① Tài sản người chết để lại (继承遗产). ② Những giá trị vật chất, tinh thần mà lịch sử để lại cho đời sau: 文化遗产, 世界自然遗产.','Hay gặp: 宝贵的遗产, 世界遗产, 被列入世界遗产名录.'],
   usage:'宝贵的 / 人类的 + 遗产; 文化 / 自然 + 遗产; 继承 + 遗产; 被列入 + 世界遗产名录.',
   collo:['宝贵遗产','世界自然遗产','文化遗产','继承遗产'],
   ex_zh:'哈尼梯田是人类的宝贵遗产。',ex_py:'Hāní tītián shì rénlèi de bǎoguì yíchǎn.',ex_vn:'Ruộng bậc thang Hà Nhì là di sản quý báu của nhân loại.',
   exList:[
     {zh:'也有人说，哈尼梯田“是人类的宝贵遗产，它向我们证明人类拥有惊人的创造精神”！',py:'Yě yǒu rén shuō, Hāní tītián “shì rénlèi de bǎoguì yíchǎn, tā xiàng wǒmen zhèngmíng rénlèi yōngyǒu jīngrén de chuàngzào jīngshén”!',vn:'Cũng có người nói ruộng bậc thang Hà Nhì "là di sản quý báu của nhân loại, nó chứng minh cho chúng ta thấy con người sở hữu tinh thần sáng tạo đáng kinh ngạc"!'},
     {zh:'下龙湾早在1994年就被列入了世界自然遗产名录。',py:'Xiàlóng Wān zǎo zài yī-jiǔ-jiǔ-sì nián jiù bèi lièrùle shìjiè zìrán yíchǎn mínglù.',vn:'Vịnh Hạ Long đã được đưa vào danh sách Di sản thiên nhiên thế giới từ năm 1994.'},
     {zh:'父亲留给我们最大的遗产不是钱，而是做人的道理。',py:'Fùqīn liú gěi wǒmen zuì dà de yíchǎn bú shì qián, ér shì zuò rén de dàolǐ.',vn:'Gia tài lớn nhất cha để lại cho chúng tôi không phải tiền bạc, mà là đạo lý làm người.'}
   ],
   colloFull:[
     {zh:'宝贵遗产',py:'bǎoguì yíchǎn',vn:'di sản quý báu'},
     {zh:'世界自然遗产',py:'shìjiè zìrán yíchǎn',vn:'di sản thiên nhiên thế giới'},
     {zh:'文化遗产',py:'wénhuà yíchǎn',vn:'di sản văn hoá'},
     {zh:'继承遗产',py:'jìchéng yíchǎn',vn:'thừa kế di sản'},
     {zh:'非物质文化遗产',py:'fēi wùzhì wénhuà yíchǎn',vn:'di sản văn hoá phi vật thể'}
   ],
   patterns:[
     {s:'A + 是 + 人类 / 民族 + 的宝贵遗产',m:'A là di sản quý báu của …'},
     {s:'被列入 + 世界(自然 / 文化)遗产名录',m:'Được đưa vào danh sách di sản thế giới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhã nhạc cung đình Huế đã được UNESCO công nhận là di sản văn hoá phi vật thể.',answer:'顺化宫廷雅乐已被联合国教科文组织认定为非物质文化遗产。',answerPy:'Shùnhuà gōngtíng yǎyuè yǐ bèi Liánhéguó Jiàokēwén Zǔzhī rèndìng wéi fēi wùzhì wénhuà yíchǎn.',
      note:'Câu bị động 被 + V为: được công nhận là.',pair:'Câu bị động 被……为……'},
     {promptLang:'vi',prompt:'Di sản văn hoá không chỉ cần bảo vệ mà còn cần được truyền lại cho đời sau.',answer:'文化遗产不仅需要保护，还需要传给后代。',answerPy:'Wénhuà yíchǎn bùjǐn xūyào bǎohù, hái xūyào chuán gěi hòudài.',
      note:'不仅……还……: tăng tiến; 后代 (bài 12).',pair:'不仅……还……'}
   ]},

  {n:47,zh:'拥有',py:'yōngyǒu',pos:'Động từ',vn:'sở hữu, có',hv:'ủng hữu',em:'💎',lesson:1,
   explain:['Có, sở hữu — thiên về chiếm hữu, nắm giữ; thường là thứ nhiều, lớn, quý: đất đai, dân số, tài sản, tài nguyên, tình yêu, quyền lợi.','Khác 具有 (thiên về tồn tại, dùng với sự vật trừu tượng: 意义, 特色, 水平) — xem phần phân biệt từ.'],
   usage:'拥有 + 土地 / 人口 / 财产 / 资源 / 爱 / 权利; 拥有 + số lượng + N.',
   collo:['拥有丰富的资源','拥有大量财产','拥有……的权利','拥有惊人的创造精神'],
   ex_zh:'它向我们证明人类拥有惊人的创造精神。',ex_py:'Tā xiàng wǒmen zhèngmíng rénlèi yōngyǒu jīngrén de chuàngzào jīngshén.',ex_vn:'Nó chứng minh cho chúng ta thấy con người sở hữu tinh thần sáng tạo đáng kinh ngạc.',
   exList:[
     {zh:'哈尼梯田是人类的宝贵遗产，它向我们证明人类拥有惊人的创造精神。',py:'Hāní tītián shì rénlèi de bǎoguì yíchǎn, tā xiàng wǒmen zhèngmíng rénlèi yōngyǒu jīngrén de chuàngzào jīngshén.',vn:'Ruộng bậc thang Hà Nhì là di sản quý báu của nhân loại, nó chứng minh cho chúng ta thấy con người sở hữu tinh thần sáng tạo đáng kinh ngạc.'},
     {zh:'我国拥有丰富的水电资源。',py:'Wǒ guó yōngyǒu fēngfù de shuǐdiàn zīyuán.',vn:'Nước ta có nguồn tài nguyên thuỷ điện phong phú.'},
     {zh:'他虽然拥有大量财产，却一点儿也不快乐。',py:'Tā suīrán yōngyǒu dàliàng cáichǎn, què yìdiǎnr yě bú kuàilè.',vn:'Anh ta tuy có rất nhiều tài sản nhưng chẳng hề vui vẻ chút nào.'}
   ],
   colloFull:[
     {zh:'拥有丰富的资源',py:'yōngyǒu fēngfù de zīyuán',vn:'có nguồn tài nguyên phong phú'},
     {zh:'拥有大量财产',py:'yōngyǒu dàliàng cáichǎn',vn:'sở hữu nhiều tài sản'},
     {zh:'拥有……的权利',py:'yōngyǒu……de quánlì',vn:'có quyền …'},
     {zh:'拥有惊人的创造精神',py:'yōngyǒu jīngrén de chuàngzào jīngshén',vn:'có tinh thần sáng tạo đáng kinh ngạc'},
     {zh:'拥有一切',py:'yōngyǒu yíqiè',vn:'có tất cả'}
   ],
   patterns:[
     {s:'chủ thể + 拥有 + số lượng / adj + 的 + N',m:'… sở hữu … (thứ nhiều, lớn, quý)'},
     {s:'拥有 + 权利 / 爱 / 资源',m:'Có quyền / tình yêu / tài nguyên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việt Nam có đường bờ biển dài hơn ba nghìn cây số.',answer:'越南拥有三千多公里长的海岸线。',answerPy:'Yuènán yōngyǒu sānqiān duō gōnglǐ cháng de hǎi\'ànxiàn.',
      note:'Số + 多 + đơn vị + 长的 làm định ngữ.',pair:'Số + 多 + lượng từ'},
     {promptLang:'vi',prompt:'Chỉ khi mất đi, người ta mới biết trân trọng những gì mình từng có.',answer:'人只有失去了，才懂得珍惜曾经拥有的东西。',answerPy:'Rén zhǐyǒu shīqù le, cái dǒngde zhēnxī céngjīng yōngyǒu de dōngxi.',
      note:'只有……才……: điều kiện cần.',pair:'只有……才……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 157–159), mỗi đoạn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 山脉上的雕刻',
   preQuiz:[
     {q:'2010年中国西南遭遇了什么？',opts:['百年不遇的洪水','百年不遇的干旱','一场大地震'],ans:1},
     {q:'干旱的时候，哀牢山南部的梯田怎么样？',opts:['庄稼全都枯萎了','梯田壮丽依旧','梯田被大水冲毁了'],ans:1},
     {q:'作者用什么来比喻一片片梯田？',opts:['一张张亮丽的油画','一座座宫殿','一条条小溪'],ans:0},
     {q:'作者的车在大山里是怎么行驶的？',opts:['一直在山顶上行驶','沿着公路盘旋而行，时而在谷底，时而在山腰','一直在平坦的大路上开'],ans:1},
     {q:'半山腰上是什么？',opts:['森林','瀑布','村子'],ans:2},
     {q:'作者已经看过梯田很多次了，他现在还会震惊吗？',opts:['不会了，已经习惯了','每次身临其境都会震惊','只有第一次震惊过'],ans:1},
     {q:'作者认为梯田比什么更让他震撼？',opts:['万里长城','大海','现代化的城市'],ans:0},
     {q:'那首古老的曲子说，祖先们为什么学会了种植？',opts:['因为只靠打猎和采集过不了日子','因为政府要求他们种地','因为山上没有动物'],ans:0},
     {q:'祖先们发现什么和水最亲近？',opts:['森林','种子','牲畜'],ans:1},
     {q:'面对大山，山民们选择了什么？',opts:['对抗大山','离开大山','服从自然规律，开辟梯田'],ans:2},
     {q:'山民们用了多长时间完成了山脉上的雕刻？',opts:['一百多年','一千三百多年','三百多年'],ans:1},
     {q:'有人说哈尼梯田体现了当地百姓的什么？',opts:['与自然和谐相处的智慧','战胜自然的力量','发展工业的能力'],ans:0},
     {q:'最后一段说，哈尼梯田向我们证明了什么？',opts:['人类拥有惊人的创造精神','梯田比长城更古老','农业比工业更重要'],ans:0}
   ],
   lines:[
     {sp:0,zh:'2010年中国西南遭遇百年不遇的干旱，耕地上，庄稼枯萎而死，农作物大面积绝收。就在各地旱情严重、人和牲畜饮水都难的时候，滇南红河哀牢山南部的一片片梯田壮丽依旧，它们依山形而流转，一片片、一层层由半山腰延伸至峡谷，像一张张亮丽的油画，铺天盖地，席卷而至。蔚蓝的天空，漂浮的白云，摇摆的树影，更衬托出梯田的壮美。',
      py:'Èr líng yī líng nián Zhōngguó xīnán zāoyù bǎi nián bú yù de gānhàn, gēngdì shang, zhuāngjia kūwěi ér sǐ, nóngzuòwù dà miànjī juéshōu. Jiù zài gèdì hànqíng yánzhòng, rén hé shēngchù yǐn shuǐ dōu nán de shíhou, Diān nán Hónghé Āiláo Shān nánbù de yí piànpiàn tītián zhuànglì yījiù, tāmen yī shānxíng ér liúzhuǎn, yí piànpiàn, yì céngcéng yóu bànshānyāo yánshēn zhì xiágǔ, xiàng yì zhāngzhāng liànglì de yóuhuà, pūtiān-gàidì, xíjuǎn ér zhì. Wèilán de tiānkōng, piāofú de báiyún, yáobǎi de shùyǐng, gèng chèntuō chū tītián de zhuàngměi.',
      vn:'Năm 2010, vùng Tây Nam Trung Quốc gặp phải trận hạn hán trăm năm có một: trên đồng ruộng, hoa màu khô héo mà chết, cây trồng mất trắng trên diện rộng. Đúng lúc hạn hán ở khắp nơi đang nghiêm trọng, cả người lẫn gia súc đều khó có nước uống, thì những thửa ruộng bậc thang ở phía nam núi Ai Lao, Hồng Hà, miền nam Vân Nam vẫn tráng lệ như xưa. Chúng uốn lượn theo thế núi, từng thửa, từng tầng trải dài từ lưng chừng núi xuống tận hẻm núi, giống như những bức tranh sơn dầu rực rỡ, che trời phủ đất, ào ạt tràn tới. Bầu trời xanh thẳm, mây trắng bồng bềnh, bóng cây đung đưa lại càng tôn lên vẻ đẹp hùng tráng của ruộng bậc thang.'},
     {sp:0,zh:'我们的车在大山里沿着公路盘旋而行，时而行驶在深深的谷底，时而爬升到海拔一千多米高的山腰。遥望山顶，是大片的森林，峡谷间闪闪发光的是小溪、泉水和瀑布，半山腰是村子，村子下是如山如海、纵横万里、汹涌而来的梯田。',
      py:'Wǒmen de chē zài dà shān li yánzhe gōnglù pánxuán ér xíng, shí\'ér xíngshǐ zài shēnshēn de gǔdǐ, shí\'ér páshēng dào hǎibá yìqiān duō mǐ gāo de shānyāo. Yáowàng shāndǐng, shì dàpiàn de sēnlín, xiágǔ jiān shǎnshǎn fāguāng de shì xiǎoxī, quánshuǐ hé pùbù, bànshānyāo shì cūnzi, cūnzi xià shì rú shān rú hǎi, zònghéng wàn lǐ, xiōngyǒng ér lái de tītián.',
      vn:'Xe của chúng tôi men theo con đường vòng vèo trong núi lớn, lúc thì chạy dưới đáy thung lũng sâu hun hút, lúc thì leo lên lưng chừng núi cao hơn một nghìn mét so với mặt biển. Nhìn xa lên đỉnh núi là những cánh rừng bạt ngàn; thứ lấp lánh giữa hẻm núi là suối nhỏ, nước suối nguồn và thác nước; lưng chừng núi là làng bản; bên dưới làng là ruộng bậc thang như núi như biển, trải rộng muôn dặm, cuồn cuộn ùa tới.'},
     {sp:0,zh:'尽管已目睹这奇迹无数次，但我每次身临其境，都会为哈尼族山民们在这重重叠叠的山脉上雕塑出的美丽画卷而震惊。这是以大地为背景，用生命和毅力雕刻出的杰出作品，它比万里长城更让我震撼，它比历史悠久的宫殿更让我感动。我不禁问自己，这里的人为什么选择了梯田？后来，我在当地听到了一首古老的曲子，歌词的意思是，祖先们只靠打猎过不了日子，光靠采集树果也过不了日子，于是学会了翻地，学会了种植。他们发现种子和水最亲近，喝过水的种子就是金闪闪的稻谷，从此他们再也离不开梯田和水。经过数十代人的锲而不舍，他们终于将一座座大山，雕塑成了梯田。面对大山，山民们没有对抗，而是选择了服从——他们服从自然规律，选择开辟梯田这种农耕方式，最终与大自然和谐相处。',
      py:'Jǐnguǎn yǐ mùdǔ zhè qíjì wúshù cì, dàn wǒ měi cì shēn lín qí jìng, dōu huì wèi Hānízú shānmínmen zài zhè chóngchóngdiédié de shānmài shang diāosù chū de měilì huàjuàn ér zhènjīng. Zhè shì yǐ dàdì wéi bèijǐng, yòng shēngmìng hé yìlì diāokè chū de jiéchū zuòpǐn, tā bǐ Wànlǐ Chángchéng gèng ràng wǒ zhènhàn, tā bǐ lìshǐ yōujiǔ de gōngdiàn gèng ràng wǒ gǎndòng. Wǒ bùjīn wèn zìjǐ, zhèlǐ de rén wèi shénme xuǎnzéle tītián? Hòulái, wǒ zài dāngdì tīngdàole yì shǒu gǔlǎo de qǔzi, gēcí de yìsi shì, zǔxiānmen zhǐ kào dǎliè guò bu liǎo rìzi, guāng kào cǎijí shù guǒ yě guò bu liǎo rìzi, yúshì xuéhuìle fān dì, xuéhuìle zhòngzhí. Tāmen fāxiàn zhǒngzi hé shuǐ zuì qīnjìn, hēguo shuǐ de zhǒngzi jiù shì jīnshǎnshǎn de dàogǔ, cóngcǐ tāmen zài yě lí bu kāi tītián hé shuǐ. Jīngguò shù shí dài rén de qiè\'érbùshě, tāmen zhōngyú jiāng yí zuòzuò dà shān, diāosù chéngle tītián. Miànduì dà shān, shānmínmen méiyǒu duìkàng, ér shì xuǎnzéle fúcóng — tāmen fúcóng zìrán guīlǜ, xuǎnzé kāipì tītián zhè zhǒng nónggēng fāngshì, zuìzhōng yǔ dàzìrán héxié xiāngchǔ.',
      vn:'Dù đã chứng kiến kỳ tích này vô số lần, nhưng mỗi lần đặt chân đến tận nơi, tôi vẫn sững sờ trước bức tranh tuyệt đẹp mà người dân miền núi dân tộc Hà Nhì đã tạc nên trên những dãy núi trùng điệp này. Đây là một tác phẩm kiệt xuất lấy mặt đất làm phông nền, được khắc nên bằng sinh mệnh và nghị lực; nó khiến tôi choáng ngợp hơn cả Vạn Lý Trường Thành, khiến tôi xúc động hơn cả những cung điện có lịch sử lâu đời. Tôi không khỏi tự hỏi: vì sao người ở đây lại chọn ruộng bậc thang? Về sau, tôi được nghe ở địa phương một khúc hát cổ, lời ca có ý rằng: tổ tiên chỉ dựa vào săn bắn thì không sống nổi, chỉ dựa vào hái lượm quả cây cũng không sống nổi, thế là học cách lật đất, học cách trồng trọt. Họ phát hiện hạt giống gần gũi với nước nhất, hạt giống được uống nước sẽ thành thóc lúa vàng óng, từ đó họ không bao giờ rời xa được ruộng bậc thang và nước nữa. Qua sự bền bỉ không ngừng của mấy chục thế hệ, cuối cùng họ đã tạc từng ngọn núi lớn thành ruộng bậc thang. Đối mặt với núi lớn, người dân miền núi không chống lại, mà chọn cách thuận theo — họ thuận theo quy luật tự nhiên, chọn phương thức canh tác khai phá ruộng bậc thang, cuối cùng chung sống hài hoà với thiên nhiên.'},
     {sp:0,zh:'1300多年，山民们用汗水，用心血，用日复一日的辛勤劳动完成了山脉上的雕刻，任何困难也阻拦不了他们。这幅画卷以其宝贵的生态、文化和审美价值，展示着它的罕见和珍稀。',
      py:'Yìqiān sānbǎi duō nián, shānmínmen yòng hànshuǐ, yòng xīnxuè, yòng rì fù yí rì de xīnqín láodòng wánchéngle shānmài shang de diāokè, rènhé kùnnan yě zǔlán bu liǎo tāmen. Zhè fú huàjuàn yǐ qí bǎoguì de shēngtài, wénhuà hé shěnměi jiàzhí, zhǎnshìzhe tā de hǎnjiàn hé zhēnxī.',
      vn:'Suốt hơn 1.300 năm, người dân miền núi đã dùng mồ hôi, dùng tâm huyết, dùng lao động cần cù ngày này qua ngày khác để hoàn thành tác phẩm điêu khắc trên dãy núi; bất kỳ khó khăn nào cũng không cản nổi họ. Bức tranh này, bằng những giá trị sinh thái, văn hoá và thẩm mỹ quý báu của mình, cho thấy nó hiếm có và quý giá biết bao.'},
     {sp:0,zh:'有人说：“哈尼梯田的美景让人陶醉，这里的一切无不体现着当地百姓与自然和谐相处的智慧，体现着民众对自身文化和自然环境的尊重。它所蕴含的人与自然高度和谐发展的古老文化特征，正是21世纪人类所追求的一种精神。”',
      py:'Yǒu rén shuō: “Hāní tītián de měijǐng ràng rén táozuì, zhèlǐ de yíqiè wúbù tǐxiànzhe dāngdì bǎixìng yǔ zìrán héxié xiāngchǔ de zhìhuì, tǐxiànzhe mínzhòng duì zìshēn wénhuà hé zìrán huánjìng de zūnzhòng. Tā suǒ yùnhán de rén yǔ zìrán gāodù héxié fāzhǎn de gǔlǎo wénhuà tèzhēng, zhèng shì èrshíyī shìjì rénlèi suǒ zhuīqiú de yì zhǒng jīngshén.”',
      vn:'Có người nói: "Cảnh đẹp của ruộng bậc thang Hà Nhì khiến người ta ngây ngất; mọi thứ ở đây đều thể hiện trí tuệ chung sống hài hoà với thiên nhiên của người dân địa phương, thể hiện sự tôn trọng của họ đối với văn hoá của chính mình và môi trường tự nhiên. Đặc trưng văn hoá cổ xưa về sự phát triển hài hoà cao độ giữa con người với thiên nhiên ẩn chứa trong nó, chính là một tinh thần mà nhân loại thế kỷ 21 đang theo đuổi."'},
     {sp:0,zh:'也有人说，哈尼梯田“是人类的宝贵遗产，它向我们证明人类拥有惊人的创造精神”！',
      py:'Yě yǒu rén shuō, Hāní tītián “shì rénlèi de bǎoguì yíchǎn, tā xiàng wǒmen zhèngmíng rénlèi yōngyǒu jīngrén de chuàngzào jīngshén”!',
      vn:'Cũng có người nói ruộng bậc thang Hà Nhì "là di sản quý báu của nhân loại, nó chứng minh cho chúng ta thấy con người sở hữu tinh thần sáng tạo đáng kinh ngạc"!'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 拥有 / 具有 (sách) + 2 cặp bổ sung
// ══════════════════════════════════════════
var synonymData = [
  {pair:'拥有 — 具有',
   same:'Đều là động từ, đều mang nghĩa "có". Nhưng thông thường KHÔNG thay thế cho nhau được.',
   sameEx:{zh:'我国拥有丰富的水电资源。／我喜欢看具有民族风情的电视节目。',vn:'Nước ta có nguồn thuỷ điện phong phú. / Tôi thích xem những chương trình truyền hình mang đậm phong tình dân tộc.'},
   items:[
     {word:'拥有',
      points:['Nghĩa nghiêng về SỞ HỮU, chiếm giữ (领有).','Thường đi với thứ NHIỀU, QUÝ, cụ thể hoặc thuộc quyền sở hữu: 土地, 人口, 财产, 资源, 爱, 权利, 面积.','Chủ thể thường là người, quốc gia, tổ chức, vùng đất — "ai có cái gì".'],
      ex:[{zh:'我国拥有丰富的水电资源。',vn:'Nước ta có nguồn tài nguyên thuỷ điện phong phú.'},
          {zh:'哈尼梯田向我们证明人类拥有惊人的创造精神。',vn:'Ruộng bậc thang Hà Nhì chứng minh cho chúng ta thấy con người sở hữu tinh thần sáng tạo đáng kinh ngạc.'}]},
     {word:'具有',
      points:['Nghĩa nghiêng về TỒN TẠI (vốn mang trong mình), không phải chiếm hữu.','Chủ yếu đi với sự vật TRỪU TƯỢNG: 特色, 特点, 兴趣, 水平, 意义, 价值, 风格.','Chủ thể thường là sự vật, sự kiện, tác phẩm — "cái gì mang tính chất gì".'],
      ex:[{zh:'我喜欢看具有民族风情的电视节目。',vn:'Tôi thích xem những chương trình truyền hình mang đậm phong tình dân tộc.'},
          {zh:'除了具有很高的审美价值，九寨沟还蕴藏着丰富的资源。',vn:'Ngoài giá trị thẩm mỹ rất cao, Cửu Trại Câu còn chứa đựng tài nguyên phong phú.'}]}
   ],
   quiz:[
     {sentence:'这座城市＿＿一千多万人口。',options:['拥有','具有'],answer:0,why:'人口 là thứ "có" về số lượng, thuộc sở hữu của thành phố → 拥有.'},
     {sentence:'这部电影＿＿很强的教育意义。',options:['拥有','具有'],answer:1,why:'意义 là sự vật trừu tượng, tồn tại trong bộ phim → 具有.'},
     {sentence:'他们＿＿一片很大的土地。',options:['拥有','具有'],answer:0,why:'土地 là tài sản cụ thể, chiếm hữu → 拥有.'},
     {sentence:'这些建筑都＿＿鲜明的地方特色。',options:['拥有','具有'],answer:1,why:'特色 trừu tượng → 具有 (鲜明 — bài 10).'}
   ],
   sgk:{
     chung:{t:'都是动词，都含有“有”的意思。但一般不能换用。',vn:'Đều là động từ, đều mang nghĩa "có". Nhưng thông thường không thể thay thế cho nhau.',vd:'我国拥有丰富的水电资源。／我喜欢看具有民族风情的电视节目。',vdVn:'Nước ta có nguồn thuỷ điện phong phú. / Tôi thích xem các chương trình truyền hình mang phong tình dân tộc.'},
     khac:[
       {a:{t:'语义侧重于指领有，多指有较多的、宝贵的东西。如：土地、人口、财产、资源、爱、权利等。',vn:'Nghĩa nghiêng về sở hữu, chiếm giữ; thường chỉ việc có những thứ khá nhiều, quý giá như: đất đai, dân số, tài sản, tài nguyên, tình yêu, quyền lợi….',vd:'我国拥有丰富的水电资源。',vdVn:'Nước ta có nguồn tài nguyên thuỷ điện phong phú.'},
        b:{t:'语义侧重于存在，多用于抽象事物。如：特色、特点、兴趣、水平、意义等。',vn:'Nghĩa nghiêng về sự tồn tại; phần nhiều dùng cho sự vật trừu tượng như: đặc sắc, đặc điểm, hứng thú, trình độ, ý nghĩa….',vd:'我喜欢看具有民族风情的电视节目。',vdVn:'Tôi thích xem những chương trình truyền hình mang đậm phong tình dân tộc.'}}
     ],
     lamThu:[
       {s:'柴达木盆地＿＿22万平方公里的面积。',dap:[true,false],giai:'面积 (diện tích đất đai) là thứ vùng đất "sở hữu", số lượng lớn → 拥有.'},
       {s:'这次改革＿＿划时代的伟大意义。',dap:[false,true],giai:'意义 là sự vật trừu tượng, tồn tại trong cuộc cải cách → 具有.'},
       {s:'每个公民都＿＿选举权和被选举权。',dap:[true,false],giai:'权利 (quyền bầu cử, ứng cử) thuộc nhóm "权利" trong bảng → 拥有.'},
       {s:'这项工艺＿＿相当高的技术水准。',dap:[false,true],giai:'水准 (= 水平, trình độ) là khái niệm trừu tượng → 具有.'}
     ]
   }},

  {pair:'阻拦 — 阻止',
   same:'Đều có nghĩa "ngăn lại, không cho tiếp tục", đều là động từ, đều mang tân ngữ chỉ người.',
   sameEx:{zh:'他要做的事情，谁也阻拦／阻止不了。',vn:'Việc anh ấy đã muốn làm thì không ai ngăn được.'},
   items:[
     {word:'阻拦',
      points:['Nghiêng về hành động CHẶN LẠI cụ thể (拦 = chặn): không cho người đi qua, không cho người làm việc gì.','Tân ngữ gần như luôn là NGƯỜI (hoặc động vật, xe cộ): 阻拦他, 阻拦车辆.','Hay gặp: 上前阻拦, 不顾……的阻拦, 阻拦不住.'],
      ex:[{zh:'她不顾父母的阻拦，一个人去国外留学了。',vn:'Cô ấy bất chấp bố mẹ ngăn cản, một mình ra nước ngoài du học.'},
          {zh:'保安把他阻拦在门口，不让他进去。',vn:'Bảo vệ chặn anh ta ở cửa, không cho vào.'}]},
     {word:'阻止',
      points:['Nghĩa rộng hơn: làm cho một hành động, sự việc, xu thế DỪNG LẠI.','Tân ngữ có thể là sự việc trừu tượng: 阻止病毒传播, 阻止战争, 阻止事态发展 — 阻拦 không dùng được.','Hay gặp trong văn bản, tin tức: 采取措施阻止…….'],
      ex:[{zh:'医院采取了一切措施阻止病毒的传播。',vn:'Bệnh viện đã áp dụng mọi biện pháp để ngăn chặn virus lây lan.'},
          {zh:'我们必须阻止这种不良风气继续发展下去。',vn:'Chúng ta phải ngăn chặn thói xấu này tiếp tục lan rộng.'}]}
   ],
   quiz:[
     {sentence:'政府采取措施，＿＿了洪水的进一步扩大。',options:['阻拦','阻止'],answer:1,why:'Tân ngữ là sự việc/xu thế (洪水的扩大) → 阻止. 阻拦 chỉ chặn người/vật cụ thể.'},
     {sentence:'他正要冲进火场，被消防员上前＿＿住了。',options:['阻拦','阻止'],answer:0,why:'Hành động chặn người cụ thể, có 上前 (bước lên) → 阻拦 tự nhiên nhất.'},
     {sentence:'她不顾家人的＿＿，辞职去了山区教书。',options:['阻拦','阻止'],answer:0,both:true,why:'不顾……的阻拦 là cụm cố định hay gặp; 阻止 cũng chấp nhận được nhưng ít tự nhiên hơn.'},
     {sentence:'必须尽快＿＿这种错误做法继续下去。',options:['阻拦','阻止'],answer:1,why:'Ngăn một cách làm, một xu thế tiếp diễn → 阻止.'}
   ]},

  {pair:'珍稀 — 珍贵',
   same:'Đều có nghĩa "quý", đều là tính từ, thường làm định ngữ.',
   sameEx:{zh:'这里生活着很多珍稀／珍贵的动物。',vn:'Ở đây có rất nhiều loài động vật quý hiếm sinh sống.'},
   items:[
     {word:'珍稀',
      points:['= 珍贵 + 稀少: vừa quý vừa HIẾM.','Phạm vi hẹp: chủ yếu dùng cho động vật, thực vật, loài, tài nguyên tự nhiên: 珍稀动物, 珍稀物种.','Không dùng cho tình cảm, thời gian, kỷ niệm.'],
      ex:[{zh:'大熊猫是中国特有的珍稀动物。',vn:'Gấu trúc là loài động vật quý hiếm đặc hữu của Trung Quốc.'},
          {zh:'九寨沟蕴藏着丰富、珍稀的动植物资源。',vn:'Cửu Trại Câu chứa đựng nguồn động thực vật phong phú, quý hiếm.'}]},
     {word:'珍贵',
      points:['= có giá trị lớn, đáng quý — không nhất thiết hiếm.','Phạm vi rộng: đồ vật (礼物, 照片, 文物), cái trừu tượng (时间, 友谊, 生命, 经验).','Làm được vị ngữ với 很 / 非常: 时间非常珍贵.'],
      ex:[{zh:'这张老照片对我来说非常珍贵。',vn:'Tấm ảnh cũ này đối với tôi vô cùng quý giá.'},
          {zh:'失败给了我们珍贵的经验。',vn:'Thất bại đã cho chúng ta kinh nghiệm quý báu.'}]}
   ],
   quiz:[
     {sentence:'对高三学生来说，时间是最＿＿的。',options:['珍稀','珍贵'],answer:1,why:'时间 là cái trừu tượng, không phải loài vật/cây → 珍贵.'},
     {sentence:'这个保护区里生活着许多＿＿物种。',options:['珍稀','珍贵'],answer:0,why:'物种 (loài) + nhấn mạnh hiếm → 珍稀物种 là cụm cố định.'},
     {sentence:'朋友送给我的这份礼物很＿＿。',options:['珍稀','珍贵'],answer:1,why:'Món quà có giá trị tinh thần → 珍贵. 珍稀 không dùng cho đồ vật thường ngày.'},
     {sentence:'这种植物非常＿＿，全世界只剩下几百棵了。',options:['珍稀','珍贵'],answer:0,both:true,why:'Vế sau nhấn mạnh SỐ LƯỢNG ÍT (chỉ còn vài trăm cây) → 珍稀 là tốt nhất; 珍贵 cũng đúng ngữ pháp nhưng không nói lên ý hiếm.'}
   ]}
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'雕刻',hv:'điêu khắc',vn:'điêu khắc, chạm trổ',note:'Trùng khít. 雕刻家 = nhà điêu khắc.'},
    {zh:'壮丽',hv:'tráng lệ',vn:'tráng lệ',note:'Trùng khít — dùng cho cảnh vật lớn lao: 壮丽的山河 = non sông tráng lệ.'},
    {zh:'杰出',hv:'kiệt xuất',vn:'kiệt xuất, xuất sắc',note:'Trùng khít. 杰出人物 = nhân vật kiệt xuất.'},
    {zh:'宫殿',hv:'cung điện',vn:'cung điện',note:'Trùng khít.'},
    {zh:'毅力',hv:'nghị lực',vn:'nghị lực',note:'Trùng khít. 惊人的毅力 = nghị lực phi thường.'},
    {zh:'心血',hv:'tâm huyết',vn:'tâm huyết',note:'Trùng khít. 心血的结晶 = kết tinh tâm huyết.'},
    {zh:'生态',hv:'sinh thái',vn:'sinh thái',note:'Trùng khít. 生态平衡 = cân bằng sinh thái.'},
    {zh:'审美',hv:'thẩm mỹ',vn:'thẩm mỹ',note:'Trùng khít. 审美价值 = giá trị thẩm mỹ.'},
    {zh:'遗产',hv:'di sản',vn:'di sản',note:'Trùng khít. 世界自然遗产 = di sản thiên nhiên thế giới.'},
    {zh:'重叠',hv:'trùng điệp',vn:'trùng điệp, chồng chéo',note:'"Núi non trùng điệp" = 重重叠叠的山脉. Chú ý 重 đọc chóng.'},
    {zh:'纵横',hv:'tung hoành',vn:'ngang dọc, chằng chịt',note:'"Tung hoành" tiếng Việt thường là "vẫy vùng"; 纵横 trong bài là ngang dọc, trải rộng: 纵横万里.'},
    {zh:'山脉',hv:'sơn mạch',vn:'dãy núi',note:'"Sơn mạch" ít dùng, nhưng nhớ: 山 = núi, 脉 = mạch (nối liền) → dãy núi.'}
  ],
  idiom:[
    {zh:'锲而不舍',hv:'khiết nhi bất xả',vn:'kiên trì bền bỉ, miệt mài',note:'锲 = khắc, 舍 = bỏ: khắc mãi không buông. Gần "nước chảy đá mòn".'},
    {zh:'铺天盖地',hv:'phô thiên cái địa',vn:'che trời phủ đất, ngợp trời',note:'Chỉ số lượng rất nhiều, khí thế lớn (梯田铺天盖地, 广告铺天盖地).'},
    {zh:'身临其境',hv:'thân lâm kỳ cảnh',vn:'đặt chân đến tận nơi',note:'Tự thân có mặt ở chính cảnh ấy — cảm nhận trực tiếp.'},
    {zh:'日复一日',hv:'nhật phục nhất nhật',vn:'ngày qua ngày',note:'Lặp đi lặp lại hết ngày này sang ngày khác: 日复一日的辛勤劳动.'},
    {zh:'百年不遇',hv:'bách niên bất ngộ',vn:'trăm năm có một',note:'Trăm năm không gặp — cực kỳ hiếm: 百年不遇的干旱.'}
  ],
  trap:[
    {zh:'不禁',hv:'bất cấm',vn:'không kìm được',
     warn:'BẪY: đọc "bất cấm" dễ hiểu thành "không cấm". 禁 ở đây là "chịu đựng, kìm nén" (jīn): 不禁 = không kìm được mà …: 我不禁问自己.'},
    {zh:'牲畜',hv:'sinh súc',vn:'gia súc',
     warn:'Không liên quan tới "súc sinh" (lời chửi) trong tiếng Việt. 牲畜 chỉ đơn thuần là gia súc (trâu, bò, ngựa, dê…).'},
    {zh:'汹涌',hv:'hung dũng',vn:'cuồn cuộn, cuộn trào',
     warn:'"Hung dũng" tiếng Việt = dũng mãnh (người). 汹涌 tả NƯỚC cuộn trào: 波涛汹涌, 汹涌而来 — không dùng khen người dũng cảm.'},
    {zh:'拥有',hv:'ủng hữu',vn:'sở hữu, có',
     warn:'Dễ liên tưởng "ủng hộ" (tiếng Trung là 拥护 / 支持). 拥有 = có, sở hữu: 拥有丰富的资源.'},
    {zh:'卷',hv:'quyển',vn:'cuốn, cuộn',
     warn:'"Quyển" tiếng Việt là cuốn sách (danh từ, juàn). Trong bài 卷 đọc juǎn là ĐỘNG TỪ: cuộn, cuốn — 席卷而至, 卷起袖子.'},
    {zh:'庄稼',hv:'trang giá',vn:'hoa màu',
     warn:'Không phải "trang trại" hay "giá cả". 庄稼 = cây lương thực ngoài đồng; 种庄稼 = làm ruộng.'},
    {zh:'海拔',hv:'hải bạt',vn:'độ cao so với mặt biển',
     warn:'"Hải bạt" không dùng trong tiếng Việt. Dịch: "cao … mét so với mực nước biển": 海拔一千多米.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'遭遇百年不遇的',right:'干旱'},
  {left:'庄稼',right:'枯萎而死'},
  {left:'人和牲畜',right:'饮水困难'},
  {left:'梯田',right:'壮丽依旧'},
  {left:'由半山腰',right:'延伸至峡谷'},
  {left:'铺天盖地',right:'席卷而至'},
  {left:'蔚蓝的',right:'天空'},
  {left:'漂浮的',right:'白云'},
  {left:'更衬托出',right:'梯田的壮美'},
  {left:'沿着公路',right:'盘旋而行'},
  {left:'爬升到海拔',right:'一千多米高的山腰'},
  {left:'纵横万里、',right:'汹涌而来'},
  {left:'目睹这奇迹',right:'无数次'},
  {left:'重重叠叠的',right:'山脉'},
  {left:'用生命和毅力',right:'雕刻出的杰出作品'},
  {left:'历史悠久的',right:'宫殿'},
  {left:'一首古老的',right:'曲子'},
  {left:'采集',right:'树果'},
  {left:'金闪闪的',right:'稻谷'},
  {left:'开辟梯田这种',right:'农耕方式'},
  {left:'日复一日的',right:'辛勤劳动'},
  {left:'宝贵的生态、文化和',right:'审美价值'},
  {left:'人类的宝贵',right:'遗产'},
  {left:'拥有惊人的',right:'创造精神'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'喜马拉雅',blank:'山脉',post:'是世界上最高的山脉，绵延两千多公里。',hint:'(dãy núi)',ans:'山脉'},
  {pre:'爷爷用一块木头',blank:'雕刻',post:'出了一只栩栩如生的小鸟。',hint:'(khắc, chạm)',ans:'雕刻'},
  {pre:'2010年中国西南遭遇百年不遇的',blank:'干旱',post:'，很多地方连饮水都困难。',hint:'(hạn hán)',ans:'干旱'},
  {pre:'城市不断扩大，',blank:'耕地',post:'面积却越来越少。',hint:'(đất canh tác)',ans:'耕地'},
  {pre:'今年雨水充足，地里的',blank:'庄稼',post:'长得特别好。',hint:'(hoa màu)',ans:'庄稼'},
  {pre:'我出差一个星期没浇水，阳台上的花都',blank:'枯萎',post:'了。',hint:'(khô héo)',ans:'枯萎'},
  {pre:'这里的牧民主要靠饲养',blank:'牲畜',post:'为生。',hint:'(gia súc)',ans:'牲畜'},
  {pre:'每年秋天，很多摄影爱好者专程来拍金黄的',blank:'梯田',post:'。',hint:'(ruộng bậc thang)',ans:'梯田'},
  {pre:'站在山顶上，眼前',blank:'壮丽',post:'的景色让我们久久不愿离开。',hint:'(tráng lệ)',ans:'壮丽'},
  {pre:'一条小河从',blank:'峡谷',post:'中穿过，两边都是陡峭的山崖。',hint:'(hẻm núi)',ans:'峡谷'},
  {pre:'妈妈在地上',blank:'铺',post:'了一块厚厚的地毯，免得孩子摔疼。',hint:'(trải)',ans:'铺'},
  {pre:'一阵大风吹来，把地上的落叶',blank:'卷',post:'到了半空中。',hint:'(cuốn)',ans:'卷'},
  {pre:'站在海边，眼前是一望无际的',blank:'蔚蓝',post:'的大海。',hint:'(xanh thẳm)',ans:'蔚蓝'},
  {pre:'几片树叶',blank:'漂浮',post:'在平静的湖面上。',hint:'(trôi bồng bềnh)',ans:'漂浮'},
  {pre:'他在两个专业之间',blank:'摇摆',post:'不定，迟迟做不了决定。',hint:'(dao động, lắc lư)',ans:'摇摆'},
  {pre:'番西邦峰',blank:'海拔',post:'三千一百多米，是越南最高的山峰。',hint:'(độ cao so với mặt biển)',ans:'海拔'},
  {pre:'一条',blank:'瀑布',post:'从几十米高的山崖上飞流直下，场面十分壮观。',hint:'(thác nước)',ans:'瀑布'},
  {pre:'湄公河三角洲河流',blank:'纵横',post:'，交通主要靠船。',hint:'(chằng chịt ngang dọc)',ans:'纵横'},
  {pre:'这两门课的内容有一部分是',blank:'重叠',post:'的，可以一起复习。',hint:'(trùng lặp)',ans:'重叠'},
  {pre:'经过几代人的努力，他们终于将一座座大山',blank:'雕塑',post:'成了梯田。',hint:'(tạc, điêu khắc)',ans:'雕塑'},
  {pre:'学外语不需要多聪明，但需要',blank:'毅力',post:'，每天坚持才行。',hint:'(nghị lực)',ans:'毅力'},
  {pre:'顺化皇城里有很多座',blank:'宫殿',post:'，每一座都有自己的故事。',hint:'(cung điện)',ans:'宫殿'},
  {pre:'她在钢琴上弹了一首欢快的',blank:'曲子',post:'。',hint:'(bản nhạc)',ans:'曲子'},
  {pre:'生物课上，老师带我们到山上',blank:'采集',post:'植物标本。',hint:'(thu thập)',ans:'采集'},
  {pre:'春天到了，农民们忙着在田里播',blank:'种子',post:'。',hint:'(hạt giống)',ans:'种子'},
  {pre:'秋天',blank:'稻谷',post:'成熟了，田野里一片金黄。',hint:'(thóc lúa)',ans:'稻谷'},
  {pre:'科学研究需要',blank:'锲而不舍',post:'的精神，不能一遇到挫折就放弃。',hint:'(kiên trì bền bỉ)',ans:'锲而不舍'},
  {pre:'这本词典是几位老教授十几年',blank:'心血',post:'的结晶。',hint:'(tâm huyết)',ans:'心血'},
  {pre:'乱砍树木会破坏',blank:'生态',post:'平衡，最终伤害的是人类自己。',hint:'(sinh thái)',ans:'生态'},
  {pre:'多参观博物馆，可以提高孩子的',blank:'审美',post:'能力。',hint:'(thẩm mỹ)',ans:'审美'},
  {pre:'下龙湾早在1994年就被列入了世界自然',blank:'遗产',post:'名录。',hint:'(di sản)',ans:'遗产'},
  {pre:'看了这部纪录片，同学们',blank:'无不',post:'为哈尼人的智慧感到惊叹。',hint:'(không ai không, đều)',ans:'无不'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我们的车','时而','行驶在谷底','，','时而','爬升到山腰','。'],ans:'我们的车时而行驶在谷底，时而爬升到山腰。',audio:'我们的车时而行驶在谷底，时而爬升到山腰。'},
  {words:['他们','玩儿得','兴高采烈','，','时而唱歌','，','时而跳舞','。'],ans:'他们玩儿得兴高采烈，时而唱歌，时而跳舞。',audio:'他们玩儿得兴高采烈，时而唱歌，时而跳舞。'},
  {words:['那只狗','一点儿东西','不吃','，','时而','发出','伤心的叫声','。'],ans:'那只狗一点儿东西不吃，时而发出伤心的叫声。',audio:'那只狗一点儿东西不吃，时而发出伤心的叫声。'},
  {words:['我','不禁','问自己','，','这里的人','为什么','选择了梯田','？'],ans:'我不禁问自己，这里的人为什么选择了梯田？',audio:'我不禁问自己，这里的人为什么选择了梯田？'},
  {words:['听到','这个消息','，','大家','不禁','兴奋起来','。'],ans:'听到这个消息，大家不禁兴奋起来。',audio:'听到这个消息，大家不禁兴奋起来。'},
  {words:['走上讲台','，','我','不禁','心里','有些发慌','。'],ans:'走上讲台，我不禁心里有些发慌。',audio:'走上讲台，我不禁心里有些发慌。'},
  {words:['坏人','受到了','应有的惩罚','，','百姓','无不','拍手称快','。'],ans:'坏人受到了应有的惩罚，百姓无不拍手称快。',audio:'坏人受到了应有的惩罚，百姓无不拍手称快。'},
  {words:['这里的','一切','无不','体现着','当地百姓的','智慧','。'],ans:'这里的一切无不体现着当地百姓的智慧。',audio:'这里的一切无不体现着当地百姓的智慧。'},
  {words:['他设计的','灯具和家具','，','无不','造型新颖','。'],ans:'他设计的灯具和家具，无不造型新颖。',audio:'他设计的灯具和家具，无不造型新颖。'},
  {words:['尽管','已','目睹','这奇迹','无数次','，','但我','每次','都会','震惊','。'],ans:'尽管已目睹这奇迹无数次，但我每次都会震惊。',audio:'尽管已目睹这奇迹无数次，但我每次都会震惊。'},
  {words:['任何困难','也','阻拦','不了','他们','。'],ans:'任何困难也阻拦不了他们。',audio:'任何困难也阻拦不了他们。'},
  {words:['蔚蓝的天空','，','更','衬托出','梯田的','壮美','。'],ans:'蔚蓝的天空，更衬托出梯田的壮美。',audio:'蔚蓝的天空，更衬托出梯田的壮美。'},
  {words:['面对大山','，','山民们','没有对抗','，','而是','选择了服从','。'],ans:'面对大山，山民们没有对抗，而是选择了服从。',audio:'面对大山，山民们没有对抗，而是选择了服从。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ ĐÚNG
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我国____丰富的水电资源。',opts:['含有','带有','拥有','具有'],ans:2,
   exp:'资源 là thứ nhiều, quý, thuộc sở hữu → 拥有. 具有 đi với sự vật trừu tượng (意义, 特色); 含有 = chứa (thành phần); 带有 = mang (sắc thái, tính chất).'},
  {wrong:'山上的天气变化很快，____晴，____下雨。',opts:['经常','时而','有时候','偶尔'],ans:1,
   exp:'Hai vế song song luân phiên, văn viết → 时而……，时而……. 有时候 cũng tạo được cặp nhưng phải đủ 有时候……有时候……, và là khẩu ngữ; 偶尔, 经常 không tạo cặp song song.'},
  {wrong:'看着电影中父子情深的画面，他____流下了眼泪。',opts:['不免','不必','不止','不禁'],ans:3,
   exp:'Phản ứng tự nhiên không kìm được → 不禁. 不免 = khó tránh khỏi (kết quả tất yếu, thường không hay); 不必 = không cần; 不止 = không chỉ.'},
  {wrong:'几十年过去了，这个地方____贫穷落后。',opts:['依旧','依靠','依然是','依照'],ans:0,
   exp:'依旧 + adj = vẫn như cũ (练习2 ①). 依靠 = dựa vào; 依照 = theo; 依然是 + adj thừa 是 (không nói 依然是贫穷落后).'},
  {wrong:'他要做的事情，谁也____不了，你们就别管他了。',opts:['拦路','阻拦','阻力','障碍'],ans:1,
   exp:'阻拦不了 = không ngăn nổi (练习2 ④): động từ + bổ ngữ khả năng. 阻力 (lực cản) và 障碍 (bài 12, trở ngại) là danh từ; 拦路 là động từ li hợp đã có tân ngữ 路, không mang 不了 như vậy.'},
  {wrong:'大熊猫是中国特有的____动物。',opts:['稀少','珍惜','稀奇','珍稀'],ans:3,
   exp:'珍稀动物 = động vật quý hiếm (cụm cố định). 稀少 = thưa thớt, ít (không làm định ngữ trực tiếp kiểu này); 珍惜 = trân trọng (động từ); 稀奇 = lạ lùng.'},
  {wrong:'她____了自己的家被大火烧掉，内心非常痛苦。',opts:['注目','目标','目睹','目光'],ans:2,
   exp:'目睹 = tận mắt chứng kiến (động từ, mang tân ngữ mệnh đề). 目光 (bài 2) = ánh mắt; 注目 = chú mục, dõi theo; 目标 = mục tiêu.'},
  {wrong:'在绿叶的____下，这朵红花显得格外鲜艳。',opts:['衬托','依托','委托','拜托'],ans:0,
   exp:'在……的衬托下 = được … tôn lên. 依托 = dựa vào; 委托 = uỷ thác; 拜托 (bài 3) = nhờ vả.'},
  {wrong:'一只老鹰在山谷上空____了很久。',opts:['旋转','转弯','徘徊','盘旋'],ans:3,
   exp:'Chim bay lượn vòng trên không → 盘旋. 旋转 = xoay tròn tại chỗ (bánh xe, trái đất); 转弯 = rẽ; 徘徊 = đi đi lại lại (người, do dự).'},
  {wrong:'这家航空公司新____了一条从河内到昆明的航线。',opts:['开展','开辟','开放','开发'],ans:1,
   exp:'开辟 + 航线 / 道路 = mở ra tuyến mới. 开放 = mở cửa; 开发 = khai thác (tài nguyên, sản phẩm); 开展 = triển khai (hoạt động).'},
  {wrong:'她闭上眼睛，完全____在优美的音乐中。',opts:['沉默','麻醉','陶醉','喝醉'],ans:2,
   exp:'陶醉在……中 = đắm chìm say sưa trong …. 喝醉 = say rượu; 沉默 = im lặng; 麻醉 = gây mê.'},
  {wrong:'他患上了一种____的疾病，连最有经验的大夫都感到头疼。',opts:['罕见','看见','常见','意见'],ans:0,
   exp:'罕见的疾病 = bệnh hiếm gặp (练习2 ③). 常见 nghĩa ngược lại, không hợp với "bác sĩ giỏi nhất cũng đau đầu".'},
  {wrong:'第一次站在大海边，我被眼前的景象深深地____了。',opts:['振动','震撼','震动','地震'],ans:1,
   exp:'被……震撼 = bị … làm cho rung động, choáng ngợp (tác động tinh thần). 震动 thiên về rung chuyển vật lý hoặc gây chấn động dư luận; 振动 = dao động (vật lý).'},
  {wrong:'他为国家的航天事业做出了____的贡献。',opts:['出色地','突出了','杰作','杰出'],ans:3,
   exp:'杰出的贡献 = cống hiến kiệt xuất. 出色地 là trạng ngữ (cần động từ sau); 突出了 là động từ; 杰作 là danh từ (kiệt tác).'},
  {wrong:'老师们就像____的园丁，培育着一代又一代的学生。',opts:['辛勤','辛苦地','勤快地','勤劳地'],ans:0,
   exp:'辛勤的园丁 là cụm cố định ca ngợi thầy cô; định ngữ cần 的, không dùng dạng trạng ngữ 地. 勤劳 (bài 1) hợp với người lao động nói chung, nhưng ở đây đã thành 勤劳地 — sai.'},
  {wrong:'台风来临前，海面上波涛____，渔船都回港了。',opts:['涌现','勇敢','汹涌','拥挤'],ans:2,
   exp:'波涛汹涌 = sóng cả cuồn cuộn (cụm cố định). 拥挤 = chen chúc; 涌现 = xuất hiện ồ ạt (nhân tài, sự vật mới); 勇敢 = dũng cảm (người).'},
  {wrong:'这部电影____很强的教育意义。',opts:['拥有','占有','所有','具有'],ans:3,
   exp:'意义 là sự vật trừu tượng → 具有. 拥有 đi với thứ nhiều, quý, sở hữu được; 占有 = chiếm giữ; 所有 = tất cả / sở hữu (danh từ).'}
];

// ══════════════════════════════════════════
// LUYỆN DỊCH — câu ghép, dùng từ bài 15 + ôn từ bài trước
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy cuối tuần trời mưa to một trận, nhưng thác nước trên núi vẫn tráng lệ như xưa, chúng tôi chơi rất hăng say.',zh:'虽然周末下了一场大雨，但是山上的瀑布依旧壮丽，我们玩得兴高采烈。',py:'Suīrán zhōumò xiàle yì cháng dà yǔ, dànshì shān shang de pùbù yījiù zhuànglì, wǒmen wánr de xìnggāo-cǎiliè.',goiY:['虽然……但是……','瀑布','依旧','壮丽'],giai:'依旧 làm phó từ đứng trước tính từ (依旧壮丽 = vẫn tráng lệ như xưa); 兴高采烈 (bài 9) làm bổ ngữ trạng thái sau 玩得.'},
  {vi:'Nghe tin tôi đỗ vào trường đại học mơ ước, mẹ không kìm được mà rơi nước mắt, mấy năm nay mẹ đã dành cho tôi biết bao tâm huyết.',zh:'听说我考上了理想的大学，妈妈不禁流下了眼泪，这些年她为我花了太多心血。',py:'Tīngshuō wǒ kǎoshàngle lǐxiǎng de dàxué, māma bùjīn liúxiàle yǎnlèi, zhèxiē nián tā wèi wǒ huāle tài duō xīnxuè.',goiY:['不禁','心血','为……花了……'],giai:'不禁 đứng ngay trước động từ chỉ phản ứng tự nhiên (流下了眼泪); "dành tâm huyết cho ai" = 为 + người + 花心血, không dịch 给我心血.'},
  {vi:'Đã quyết định đi Mù Cang Chải xem ruộng bậc thang rồi thì đừng lưỡng lự nữa, chi bằng đặt vé xe ngay bây giờ đi.',zh:'既然已经决定去木江界看梯田了，就别再摇摆不定了，不妨现在就订车票吧。',py:'Jìrán yǐjīng juédìng qù Mùjiāngjiè kàn tītián le, jiù bié zài yáobǎi bú dìng le, bùfáng xiànzài jiù dìng chēpiào ba.',goiY:['既然……就……','梯田','摇摆不定','不妨'],giai:'既然……就…… nêu tiền đề đã có rồi rút ra lời khuyên; "lưỡng lự" dịch 摇摆不定 (nghĩa bóng của 摇摆); 不妨 (bài 12) = cứ thử, chẳng ngại.'},
  {vi:'Lời cô chủ nhiệm cứ quẩn quanh trong đầu tôi mấy ngày liền, tôi không khỏi tự hỏi: nếu không dốc sức học, sau này mình làm được gì?',zh:'班主任的话在我脑海里盘旋了好几天，我不禁问自己：如果不拼命学习，将来我能做什么？',py:'Bānzhǔrèn de huà zài wǒ nǎohǎi li pánxuánle hǎo jǐ tiān, wǒ bùjīn wèn zìjǐ: rúguǒ bù pīnmìng xuéxí, jiānglái wǒ néng zuò shénme?',goiY:['盘旋','不禁','如果……','拼命'],giai:'盘旋 nghĩa bóng: ý nghĩ cứ quẩn quanh (在脑海里盘旋); 不禁问自己 lấy từ bài khoá; 拼命 (bài 5) = dốc hết sức.'},
  {vi:'Cho dù nền tảng có kém một chút, chỉ cần có nghị lực kiên trì bền bỉ, em nhất định sẽ đạt được thành tích xuất sắc.',zh:'即便基础差一点儿，只要有锲而不舍的毅力，你就一定能取得杰出的成绩。',py:'Jíbiàn jīchǔ chà yìdiǎnr, zhǐyào yǒu qiè\'érbùshě de yìlì, nǐ jiù yídìng néng qǔdé jiéchū de chéngjì.',goiY:['即便……','只要……就……','锲而不舍','毅力'],giai:'即便 (bài 10) nêu giả thiết nhượng bộ, 只要……就…… nêu điều kiện đủ; 锲而不舍 làm định ngữ cho 毅力; "thành tích xuất sắc" = 杰出的成绩.'},
  {vi:'Khi lớp chúng tôi đi tham quan ruộng bậc thang Hà Nhì, bạn nào cũng say sưa trước cảnh đẹp, lúc thì chụp ảnh, lúc thì ca hát.',zh:'我们班去参观哈尼梯田时，同学们无不陶醉于眼前的美景，时而拍照，时而唱歌。',py:'Wǒmen bān qù cānguān Hāní tītián shí, tóngxuémen wúbù táozuì yú yǎnqián de měijǐng, shí\'ér pāizhào, shí\'ér chàng gē.',goiY:['无不','陶醉','时而……，时而……'],giai:'"Bạn nào cũng" = 无不 (không ai không) — chủ ngữ phải là số nhiều (同学们); 陶醉于 + đối tượng; hai 时而 tạo vế song song luân phiên.'},
  {vi:'Cuối tuần này chúng tôi không ở nhà lướt điện thoại mà theo cô giáo ra ngoại ô thu thập mẫu thực vật, còn được ngắm thác nước trong hẻm núi.',zh:'这个周末我们不是在家刷手机，而是跟老师去郊外采集植物标本，还看到了峡谷里的瀑布。',py:'Zhège zhōumò wǒmen bú shì zài jiā shuā shǒujī, ér shì gēn lǎoshī qù jiāowài cǎijí zhíwù biāoběn, hái kàndàole xiágǔ li de pùbù.',goiY:['不是……而是……','采集','峡谷','瀑布'],giai:'不是……而是…… phủ định A khẳng định B; "thu thập mẫu" = 采集标本 (采集 dùng cho thứ lấy từ tự nhiên, không dùng 收集).'},
  {vi:'Chúng ta sở dĩ phải bảo vệ môi trường sinh thái là vì Trái Đất là ngôi nhà chung mà cả nhân loại cùng có, một khi bị phá hoại thì rất khó khôi phục.',zh:'我们之所以要保护生态环境，是因为地球是全人类共同拥有的家园，一旦被破坏就很难恢复。',py:'Wǒmen zhī suǒyǐ yào bǎohù shēngtài huánjìng, shì yīnwèi dìqiú shì quán rénlèi gòngtóng yōngyǒu de jiāyuán, yídàn bèi pòhuài jiù hěn nán huīfù.',goiY:['之所以……是因为……','生态','拥有','一旦……就……'],giai:'之所以 đứng sau chủ ngữ ở vế đầu, vế sau bắt đầu bằng 是因为; "cùng có" = 共同拥有 (thứ lớn, quý, thuộc sở hữu → 拥有, không dùng 具有).'},
  {vi:'Dù ông ngoại đã chứng kiến bình minh vô số lần, nhưng mỗi lần đứng trên đỉnh núi cao hơn hai nghìn mét, ông vẫn choáng ngợp trước cảnh sắc trước mắt.',zh:'尽管外公已经目睹过无数次日出，但每次站在海拔两千多米的山顶上，他都会为眼前的景色而震撼。',py:'Jǐnguǎn wàigōng yǐjīng mùdǔguo wúshù cì rìchū, dàn měi cì zhàn zài hǎibá liǎngqiān duō mǐ de shāndǐng shang, tā dōu huì wèi yǎnqián de jǐngsè ér zhènhàn.',goiY:['尽管……但……','目睹','海拔','为……而……'],giai:'Bắt chước câu bài khoá (练习4 ①): 尽管……，但每次……都会……; 为 + nguyên nhân + 而 + phản ứng (为……而震撼); "cao … mét" = 海拔……米.'},
  {vi:'Đứng trước khó khăn, thay vì trốn tránh, chi bằng giống như người Hà Nhì dùng tâm huyết mở ra một con đường của riêng mình, như vậy mới không phụ kỳ vọng của bố mẹ.',zh:'面对困难，与其逃避，不如像哈尼人那样用心血去开辟一条自己的路，这样才不会辜负父母的期望。',py:'Miànduì kùnnan, yǔqí táobì, bùrú xiàng Hānírén nàyàng yòng xīnxuè qù kāipì yì tiáo zìjǐ de lù, zhèyàng cái bú huì gūfù fùmǔ de qīwàng.',goiY:['与其……不如……','心血','开辟','辜负'],giai:'与其 A 不如 B: chọn B thay vì A; 开辟 + 路 = mở ra con đường (nghĩa bóng); 辜负期望 (bài 3) = phụ lòng kỳ vọng — câu ba vế, 这样才…… nêu kết quả.'}
];

var translateDataRev = [
  {vi:'Năm 2010, vùng Tây Nam gặp phải trận hạn hán trăm năm có một, hoa màu khô héo trên diện rộng, cây trồng gần như mất trắng.',zh:'2010年西南地区遭遇了百年不遇的干旱，庄稼大面积枯萎，农作物几乎绝收。',py:'Èr líng yī líng nián xīnán dìqū zāoyùle bǎi nián bú yù de gānhàn, zhuāngjia dà miànjī kūwěi, nóngzuòwù jīhū juéshōu.',goiY:['干旱 = hạn hán','庄稼 = hoa màu','枯萎 = khô héo','百年不遇 = trăm năm có một'],giai:'百年不遇 dịch "trăm năm có một" (không dịch "trăm năm không gặp"); 绝收 = mất trắng, không thu hoạch được gì.'},
  {vi:'Đúng vào lúc cả người lẫn gia súc đều khó có nước uống, ruộng bậc thang ở núi Ai Lao lại vẫn tráng lệ như xưa.',zh:'就在人和牲畜饮水都困难的时候，哀牢山的梯田却依旧壮丽。',py:'Jiù zài rén hé shēngchù yǐn shuǐ dōu kùnnan de shíhou, Āiláo Shān de tītián què yījiù zhuànglì.',goiY:['牲畜 = gia súc','梯田 = ruộng bậc thang','依旧 = vẫn như xưa','却 = lại (trái ngược)'],giai:'就在……的时候 = đúng vào lúc …; 却 tạo tương phản giữa hạn hán và vẻ tráng lệ — dịch "lại vẫn …" cho rõ ý trái ngược.'},
  {vi:'Bầu trời xanh thẳm và những đám mây trắng bồng bềnh tôn lên vẻ đẹp hùng tráng của từng tầng ruộng bậc thang.',zh:'蔚蓝的天空和漂浮的白云，把一层层梯田衬托得更加壮美。',py:'Wèilán de tiānkōng hé piāofú de báiyún, bǎ yì céngcéng tītián chèntuō de gèngjiā zhuàngměi.',goiY:['蔚蓝 = xanh thẳm','漂浮 = trôi bồng bềnh','衬托 = tôn lên','把……V得……'],giai:'Câu 把 + V得 + bổ ngữ: tiếng Việt nên đổi thành "tôn lên vẻ đẹp hùng tráng của …" thay vì dịch sát "làm cho … được tôn lên càng đẹp".'},
  {vi:'Chiếc xe men theo con đường vòng vèo đi lên, lúc thì chạy dưới đáy hẻm núi, lúc thì leo lên lưng chừng núi cao hơn một nghìn mét.',zh:'汽车沿着公路盘旋而行，时而行驶在峡谷底部，时而爬升到海拔一千多米的山腰。',py:'Qìchē yánzhe gōnglù pánxuán ér xíng, shí\'ér xíngshǐ zài xiágǔ dǐbù, shí\'ér páshēng dào hǎibá yìqiān duō mǐ de shānyāo.',goiY:['盘旋而行 = đi vòng vèo','时而……，时而…… = lúc thì …, lúc thì …','峡谷 = hẻm núi','海拔 = độ cao so với mặt biển'],giai:'时而……时而…… là cặp song song luân phiên; 海拔一千多米 dịch "cao hơn một nghìn mét (so với mực nước biển)", không dịch "hải bạt".'},
  {vi:'Đỉnh núi là rừng rậm bạt ngàn, giữa hẻm núi là suối nhỏ và thác nước, còn bên dưới làng là ruộng bậc thang trải dài muôn dặm, cuồn cuộn ùa tới.',zh:'山顶是大片的森林，峡谷间是小溪和瀑布，村子下面则是纵横万里、汹涌而来的梯田。',py:'Shāndǐng shì dàpiàn de sēnlín, xiágǔ jiān shì xiǎoxī hé pùbù, cūnzi xiàmiàn zé shì zònghéng wàn lǐ, xiōngyǒng ér lái de tītián.',goiY:['瀑布 = thác nước','纵横万里 = trải rộng muôn dặm','汹涌而来 = cuồn cuộn ùa tới','则 = còn (đối chiếu)'],giai:'Ba vế liệt kê theo không gian (đỉnh — giữa — dưới); 则 đối chiếu vế cuối, dịch "còn …". 汹涌 tả nước cuộn trào — ở đây là ẩn dụ ruộng như sóng.'},
  {vi:'Dù tác giả đã chứng kiến vô số lần, nhưng mỗi lần đặt chân đến tận nơi, ông vẫn bị tác phẩm kiệt xuất này làm cho rung động sâu sắc.',zh:'尽管作者已经目睹过无数次，可每次身临其境，他都会被这件杰出的作品深深震撼。',py:'Jǐnguǎn zuòzhě yǐjīng mùdǔguo wúshù cì, kě měi cì shēn lín qí jìng, tā dōu huì bèi zhè jiàn jiéchū de zuòpǐn shēnshēn zhènhàn.',goiY:['目睹 = chứng kiến','身临其境 = đặt chân tới tận nơi','杰出 = kiệt xuất','震撼 = rung động, choáng ngợp'],giai:'尽管……可每次……都…… = dù … nhưng lần nào cũng …; câu bị động 被……震撼 có thể dịch chủ động: "tác phẩm … khiến ông choáng ngợp".'},
  {vi:'Tổ tiên phát hiện chỉ dựa vào săn bắn và hái lượm thì không sống nổi, thế là học cách trồng trọt, từ đó không bao giờ rời xa được ruộng bậc thang và nước nữa.',zh:'祖先们发现光靠打猎和采集过不了日子，于是学会了种植，从此再也离不开梯田和水。',py:'Zǔxiānmen fāxiàn guāng kào dǎliè hé cǎijí guò bu liǎo rìzi, yúshì xuéhuìle zhòngzhí, cóngcǐ zài yě lí bu kāi tītián hé shuǐ.',goiY:['光靠 = chỉ dựa vào','打猎 = săn bắn','采集 = hái lượm','从此再也…… = từ đó không bao giờ … nữa'],giai:'于是 nối hệ quả, 从此 nối mốc thời gian mới; 再也离不开 dịch "không bao giờ rời xa được nữa" — 再也 + phủ định = không bao giờ … nữa.'},
  {vi:'Người dân miền núi không chống lại núi lớn mà thuận theo quy luật tự nhiên; qua nỗ lực bền bỉ của mấy chục thế hệ, họ đã tạc núi thành ruộng bậc thang.',zh:'山民们没有与大山对抗，而是服从自然规律，经过数十代人锲而不舍的努力，把大山雕塑成了梯田。',py:'Shānmínmen méiyǒu yǔ dà shān duìkàng, ér shì fúcóng zìrán guīlǜ, jīngguò shù shí dài rén qiè\'érbùshě de nǔlì, bǎ dà shān diāosù chéngle tītián.',goiY:['没有……而是…… = không … mà …','对抗 = chống lại','锲而不舍 = kiên trì bền bỉ','雕塑成 = tạc thành'],giai:'没有 A 而是 B: phủ định A, khẳng định B (练习4 ②); 对抗 (bài 4); 数十代人 = mấy chục thế hệ (数 = vài, mấy).'},
  {vi:'Hơn một nghìn ba trăm năm qua, người dân miền núi đã dùng tâm huyết và sự lao động cần cù hoàn thành tác phẩm điêu khắc trên dãy núi, không khó khăn nào cản nổi họ.',zh:'一千三百多年来，山民们用心血和辛勤劳动完成了山脉上的雕刻，任何困难也阻拦不了他们。',py:'Yìqiān sānbǎi duō nián lái, shānmínmen yòng xīnxuè hé xīnqín láodòng wánchéngle shānmài shang de diāokè, rènhé kùnnan yě zǔlán bu liǎo tāmen.',goiY:['心血 = tâm huyết','辛勤 = cần cù','山脉 = dãy núi','阻拦不了 = không cản nổi'],giai:'任何……也…… = bất kỳ … cũng — dịch tự nhiên là "không … nào …"; 阻拦不了 là bổ ngữ khả năng phủ định.'},
  {vi:'Cảnh đẹp của ruộng bậc thang Hà Nhì khiến người ta ngây ngất; mọi thứ ở đây đều thể hiện trí tuệ chung sống hài hoà giữa người và thiên nhiên, là di sản quý báu của nhân loại.',zh:'哈尼梯田的美景让人陶醉，这里的一切无不体现着人与自然和谐相处的智慧，是人类的宝贵遗产。',py:'Hāní tītián de měijǐng ràng rén táozuì, zhèlǐ de yíqiè wúbù tǐxiànzhe rén yǔ zìrán héxié xiāngchǔ de zhìhuì, shì rénlèi de bǎoguì yíchǎn.',goiY:['陶醉 = ngây ngất','无不 = đều, không gì không','和谐 = hài hoà','遗产 = di sản'],giai:'无不 là phủ định kép = khẳng định mạnh: dịch "đều …" hoặc "không gì là không …"; 和谐相处 (和谐 — bài 10) = chung sống hài hoà.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 164)
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'这篇课文介绍了中国云南的哈尼梯田，请模仿课文以“我熟悉的……”为题介绍你所熟悉的一处名胜古迹或自然风景。内容尽量包括“地理位置、周边环境、历史变迁、人文或自然价值”等方面。写一篇不少于400字的文章。',
  prompt:'Bài khoá giới thiệu ruộng bậc thang Hà Nhì ở Vân Nam, Trung Quốc. Hãy bắt chước bài khoá, lấy "我熟悉的……" (… mà tôi quen thuộc) làm nhan đề, giới thiệu một danh lam thắng cảnh / di tích lịch sử hoặc cảnh quan thiên nhiên mà em quen thuộc. Nội dung cố gắng bao gồm các mặt: vị trí địa lý, môi trường xung quanh, đổi thay trong lịch sử, giá trị nhân văn hoặc giá trị tự nhiên. Viết một bài văn không dưới 400 chữ.',
  dan:[
    {hoi:'题目：我熟悉的……（你为什么熟悉这个地方？）',goiY:'①题目：我熟悉的…… ②开头：我的家乡在……，离……只有……，从小到大我已经去过……次了'},
    {hoi:'地理位置：它在哪儿？',goiY:'①……位于……，离……大约……公里 ②海拔…… / 面积…… / 有……座……'},
    {hoi:'周边环境：那里的风景怎么样？',goiY:'①坐车 / 坐船游览，时而……，时而…… ②……的天空，……的白云，更衬托出……的壮丽 ③……让人陶醉'},
    {hoi:'历史变迁：它有什么样的历史？有过哪些变化？',goiY:'①传说古时候…… / ……是……年建成的 ②几十年前，这里只是…… ③后来，随着……，……'},
    {hoi:'人文或自然价值：它有什么价值？',goiY:'①……不仅……，而且拥有很高的……价值 ②被列入……遗产名录；还生活着很多珍稀的…… ③每次……，我都不禁感叹：……'}
  ],
  tuNen:['壮丽','重重叠叠','蔚蓝','漂浮','衬托','时而……，时而……','陶醉','不禁','无不','珍稀','遗产','拥有'],
  cauTruc:[
    {ten:'以“我熟悉的……”为题', nhan:'Nhan đề', vd:'（题目：我熟悉的下龙湾）', khi:'Đặt đúng nhan đề đề bài yêu cầu, ghi ở dòng đầu; chỗ …… là tên địa danh em chọn.'},
    {ten:'……位于……，离……大约……公里', nhan:'Vị trí địa lý', vd:'下龙湾位于越南东北部，离首都河内大约一百七十公里。', khi:'Mở phần "地理位置": nói vùng, tỉnh, khoảng cách tới một mốc quen thuộc.'},
    {ten:'时而……，时而……', nhan:'Tả hành trình', vd:'坐船在海湾里游览，时而穿过高高的石门，时而经过安静的渔村。', khi:'Bắt chước câu 我们的车……时而……时而…… của bài khoá khi tả đường đi, cảnh vật thay đổi.'},
    {ten:'……的天空，……的白云，更衬托出……的壮丽', nhan:'Tả cảnh', vd:'蔚蓝的天空，漂浮的白云，碧绿的海水，更衬托出石岛的壮丽。', khi:'Chuỗi định ngữ song song + 衬托出 — câu tả cảnh "kinh điển" của bài khoá.'},
    {ten:'几十年前，这里只是……。后来，随着……，……', nhan:'Đổi thay lịch sử', vd:'几十年前，这里只是一个普通的渔港。后来，随着旅游业的发展，……', khi:'Phần "历史变迁": so sánh xưa – nay.'},
    {ten:'……不仅……，而且拥有很高的……价值', nhan:'Giá trị', vd:'下龙湾不仅风景壮丽，而且拥有很高的自然价值。', khi:'Mở phần "人文或自然价值"; 拥有 + giá trị / tài nguyên.'},
    {ten:'每次……，我都不禁感叹：……', nhan:'Kết bài', vd:'每次站在船头，我都不禁感叹：这是大自然送给我们的宝贵遗产。', khi:'Kết bằng cảm xúc cá nhân — dùng điểm ngữ pháp 不禁 như bài khoá.'}
  ],
  checklist:[
    'Đã đặt nhan đề dạng "我熟悉的……" chưa?',
    'Đủ ít nhất 400 chữ Hán chưa (không đếm dấu câu)?',
    'Có đủ 4 mặt đề yêu cầu: vị trí địa lý — môi trường xung quanh — đổi thay lịch sử — giá trị nhân văn / tự nhiên chưa?',
    'Đã dùng đúng 3 điểm ngữ pháp của bài (时而……时而…… / 不禁 / 无不) và ít nhất 6 từ mới chưa?',
    'Có chi tiết cụ thể, chính xác (khoảng cách, số liệu, truyền thuyết, cảm xúc của chính em) thay vì chỉ khen chung chung "rất đẹp" không?'
  ],
  model:{
    zh:'（题目：我熟悉的下龙湾）我的家乡在广宁省，离下龙湾只有几十公里，从小到大，我已经去过十几次了。下龙湾位于越南东北部，离首都河内大约一百七十公里。海湾里有将近两千座大大小小的石岛，它们重重叠叠，像一座座雕塑立在蔚蓝的海面上。下龙湾的周边环境非常优美。坐船在海湾里游览，时而穿过高高的石门，时而经过安静的渔村。蔚蓝的天空，漂浮的白云，碧绿的海水，更衬托出石岛的壮丽。岛上还有不少山洞，洞里的石头千奇百怪，让人陶醉。下龙湾的历史也很悠久。传说古时候，天上的龙飞下来帮助越南人抵抗敌人，龙吐出的珍珠变成了这些石岛，“下龙”这个名字就是这么来的。几十年前，这里只是一个普通的渔港，渔民们世世代代住在海上的船屋里。后来，随着旅游业的发展，这里建起了大桥和酒店，每年都吸引几百万中外游客。下龙湾不仅风景壮丽，而且拥有很高的自然价值。它先后两次被列入世界自然遗产名录，湾里还生活着很多珍稀的动植物。来过这里的游客无不被它的美丽打动。每次站在船头，看着眼前的美景，我都不禁感叹：这是大自然送给我们的宝贵遗产！可是，游客增多也带来了垃圾污染等问题。我希望每一个来到这里的人都能爱护环境，让下龙湾永远这么美丽。',
    py:'(Tímù: Wǒ shúxī de Xiàlóng Wān) Wǒ de jiāxiāng zài Guǎngníng Shěng, lí Xiàlóng Wān zhǐ yǒu jǐ shí gōnglǐ, cóng xiǎo dào dà, wǒ yǐjīng qùguo shí jǐ cì le. Xiàlóng Wān wèiyú Yuènán dōngběibù, lí shǒudū Hénèi dàyuē yìbǎi qīshí gōnglǐ. Hǎiwān li yǒu jiāngjìn liǎngqiān zuò dàdàxiǎoxiǎo de shídǎo, tāmen chóngchóngdiédié, xiàng yí zuòzuò diāosù lì zài wèilán de hǎimiàn shang. Xiàlóng Wān de zhōubiān huánjìng fēicháng yōuměi. Zuò chuán zài hǎiwān li yóulǎn, shí\'ér chuānguò gāogāo de shímén, shí\'ér jīngguò ānjìng de yúcūn. Wèilán de tiānkōng, piāofú de báiyún, bìlǜ de hǎishuǐ, gèng chèntuō chū shídǎo de zhuànglì. Dǎo shang hái yǒu bùshǎo shāndòng, dòng li de shítou qiānqí-bǎiguài, ràng rén táozuì. Xiàlóng Wān de lìshǐ yě hěn yōujiǔ. Chuánshuō gǔ shíhou, tiān shang de lóng fēi xialai bāngzhù Yuènánrén dǐkàng dírén, lóng tǔchū de zhēnzhū biànchéngle zhèxiē shídǎo, "Xiàlóng" zhège míngzi jiù shì zhème lái de. Jǐ shí nián qián, zhèlǐ zhǐ shì yí ge pǔtōng de yúgǎng, yúmínmen shìshì-dàidài zhù zài hǎi shang de chuánwū li. Hòulái, suízhe lǚyóuyè de fāzhǎn, zhèlǐ jiànqǐle dàqiáo hé jiǔdiàn, měi nián dōu xīyǐn jǐ bǎi wàn zhōng-wài yóukè. Xiàlóng Wān bùjǐn fēngjǐng zhuànglì, érqiě yōngyǒu hěn gāo de zìrán jiàzhí. Tā xiānhòu liǎng cì bèi lièrù shìjiè zìrán yíchǎn mínglù, wān li hái shēnghuózhe hěn duō zhēnxī de dòng-zhíwù. Láiguo zhèlǐ de yóukè wúbù bèi tā de měilì dǎdòng. Měi cì zhàn zài chuántóu, kànzhe yǎnqián de měijǐng, wǒ dōu bùjīn gǎntàn: zhè shì dàzìrán sòng gěi wǒmen de bǎoguì yíchǎn! Kěshì, yóukè zēngduō yě dàiláile lājī wūrǎn děng wèntí. Wǒ xīwàng měi yí ge láidào zhèlǐ de rén dōu néng àihù huánjìng, ràng Xiàlóng Wān yǒngyuǎn zhème měilì.',
    vn:'(Nhan đề: Vịnh Hạ Long mà tôi quen thuộc) Quê tôi ở tỉnh Quảng Ninh, cách vịnh Hạ Long chỉ vài chục cây số; từ nhỏ đến lớn tôi đã đến đó hơn chục lần. Vịnh Hạ Long nằm ở vùng Đông Bắc Việt Nam, cách thủ đô Hà Nội khoảng 170 km. Trong vịnh có gần hai nghìn hòn đảo đá lớn nhỏ, trùng trùng điệp điệp, như những bức tượng đứng sừng sững trên mặt biển xanh thẳm. Cảnh quan xung quanh vịnh Hạ Long vô cùng đẹp. Ngồi thuyền dạo quanh vịnh, lúc thì luồn qua những cổng đá cao vút, lúc thì đi ngang những làng chài yên tĩnh. Bầu trời xanh thẳm, mây trắng bồng bềnh, nước biển xanh biếc càng tôn lên vẻ tráng lệ của những đảo đá. Trên đảo còn có không ít hang động, đá trong hang muôn hình vạn trạng, khiến người ta say mê. Vịnh Hạ Long cũng có lịch sử lâu đời. Truyền thuyết kể rằng thuở xưa, rồng trên trời bay xuống giúp người Việt chống giặc, những viên ngọc rồng nhả ra biến thành các đảo đá này, cái tên "Hạ Long" (rồng đáp xuống) có từ đó. Mấy chục năm trước, nơi đây chỉ là một cảng cá bình thường, ngư dân đời này qua đời khác sống trong những nhà thuyền trên biển. Về sau, cùng với sự phát triển của ngành du lịch, nơi đây mọc lên cầu lớn, khách sạn, mỗi năm thu hút mấy triệu du khách trong và ngoài nước. Vịnh Hạ Long không chỉ phong cảnh tráng lệ mà còn có giá trị tự nhiên rất cao. Vịnh hai lần được đưa vào danh sách Di sản thiên nhiên thế giới, trong vịnh còn có rất nhiều loài động thực vật quý hiếm sinh sống. Du khách nào đã từng đến đây cũng đều bị vẻ đẹp của nó làm say lòng. Mỗi lần đứng ở mũi thuyền ngắm cảnh đẹp trước mắt, tôi đều không khỏi cảm thán: đây là di sản quý giá mà thiên nhiên ban tặng cho chúng ta! Thế nhưng, du khách tăng lên cũng kéo theo những vấn đề như rác thải, ô nhiễm. Tôi mong mỗi người đến đây đều biết giữ gìn môi trường, để vịnh Hạ Long mãi đẹp như thế này.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据课文内容回答问题
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据课文内容回答问题</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'当中国西南遭遇干旱时，哈尼梯田怎么样？',
     q_vn:'Khi vùng Tây Nam Trung Quốc gặp hạn hán, ruộng bậc thang Hà Nhì ra sao?',
     hint:'……壮丽依旧，…… ……的天空，……的白云，……的树影，更衬托出……',
     sample:'2010年中国西南遭遇百年不遇的干旱，可哈尼梯田却壮丽依旧，一片片、一层层由半山腰延伸至峡谷。蔚蓝的天空，漂浮的白云，摇摆的树影，更衬托出梯田的壮美。',
     sample_vn:'Năm 2010 vùng Tây Nam Trung Quốc gặp trận hạn hán trăm năm có một, vậy mà ruộng bậc thang Hà Nhì vẫn tráng lệ như xưa, từng thửa từng tầng trải dài từ lưng chừng núi xuống hẻm núi. Trời xanh thẳm, mây trắng bồng bềnh, bóng cây đung đưa càng tôn lên vẻ hùng tráng của ruộng bậc thang.',
     note:'Mở bằng bối cảnh hạn hán rồi đảo ý bằng 可……却……; câu tả cảnh giữ đúng chuỗi ba định ngữ 蔚蓝的 / 漂浮的 / 摇摆的 + 更衬托出.'},
    {q_zh:'描述一下坐在车上遥望梯田时看到的风景。',
     q_vn:'Hãy tả lại phong cảnh nhìn thấy khi ngồi trên xe phóng tầm mắt ngắm ruộng bậc thang.',
     hint:'山顶……，峡谷间……，半山腰……，村子下……',
     sample:'我们的车沿着公路盘旋而行，时而在谷底，时而在山腰。遥望山顶，是大片的森林；峡谷间闪闪发光的是小溪、泉水和瀑布；半山腰是村子；村子下是纵横万里、汹涌而来的梯田。',
     sample_vn:'Xe chúng tôi men theo con đường vòng vèo, lúc ở đáy thung lũng, lúc ở lưng chừng núi. Nhìn xa lên đỉnh núi là rừng rậm bạt ngàn; lấp lánh giữa hẻm núi là suối nhỏ, nước suối nguồn và thác nước; lưng chừng núi là làng bản; dưới làng là ruộng bậc thang trải rộng muôn dặm, cuồn cuộn ùa tới.',
     note:'Tả theo thứ tự không gian TỪ TRÊN XUỐNG (山顶 → 峡谷间 → 半山腰 → 村子下); mở đầu có thể thêm câu 时而……时而…….'},
    {q_zh:'为什么“我”每次目睹哈尼梯田都感到震惊？',
     q_vn:'Vì sao lần nào chứng kiến ruộng bậc thang Hà Nhì "tôi" cũng thấy sững sờ?',
     hint:'这是……的作品，它比长城……，比宫殿……',
     sample:'因为这是以大地为背景，用生命和毅力雕刻出的杰出作品。它比万里长城更让“我”震撼，比历史悠久的宫殿更让“我”感动。',
     sample_vn:'Vì đây là một tác phẩm kiệt xuất lấy mặt đất làm phông nền, được khắc nên bằng sinh mệnh và nghị lực. Nó khiến "tôi" choáng ngợp hơn cả Vạn Lý Trường Thành, xúc động hơn cả những cung điện lâu đời.',
     note:'Trả lời bằng 因为这是……的作品; hai câu so sánh song song 比……更让我震撼 / 比……更让我感动.'},
    {q_zh:'这里的人为什么选择了梯田？',
     q_vn:'Vì sao người ở đây chọn ruộng bậc thang?',
     hint:'古老的曲子：…… 经过数十代人的锲而不舍…… ……与大自然和谐相处',
     sample:'一首古老的曲子唱道，祖先们光靠打猎、采集树果过不了日子，于是学会了种植。他们发现种子和水最亲近，从此离不开梯田和水。经过数十代人的锲而不舍，他们把大山雕塑成了梯田。他们没有对抗大山，而是服从自然规律，最终与大自然和谐相处。',
     sample_vn:'Một khúc hát cổ kể rằng tổ tiên chỉ dựa vào săn bắn, hái lượm quả cây thì không sống nổi, thế là học cách trồng trọt. Họ phát hiện hạt giống gần gũi với nước nhất, từ đó không rời xa được ruộng bậc thang và nước. Qua sự bền bỉ của mấy chục thế hệ, họ đã tạc núi lớn thành ruộng bậc thang. Họ không chống lại núi mà thuận theo quy luật tự nhiên, cuối cùng chung sống hài hoà với thiên nhiên.',
     note:'Ba ý theo đúng ba dòng gợi ý: lời khúc hát (于是, 从此) → quá trình (经过……终于……) → cách chọn (没有……而是……，最终……).'},
    {q_zh:'哈尼梯田有什么价值？',
     q_vn:'Ruộng bậc thang Hà Nhì có những giá trị gì?',
     hint:'以其……，展示着……',
     sample:'哈尼梯田以其宝贵的生态、文化和审美价值，展示着它的罕见和珍稀。它是山民们一千三百多年来用汗水、心血和辛勤劳动完成的。',
     sample_vn:'Ruộng bậc thang Hà Nhì, bằng những giá trị sinh thái, văn hoá và thẩm mỹ quý báu của mình, cho thấy nó hiếm có và quý giá. Nó được người dân miền núi hoàn thành bằng mồ hôi, tâm huyết và lao động cần cù suốt hơn 1.300 năm.',
     note:'以其 + giá trị, 展示着 + đặc điểm — cấu trúc văn viết (其 = của nó); nêu đủ ba giá trị 生态、文化、审美.'},
    {q_zh:'哈尼梯田体现了什么样的智慧和精神？',
     q_vn:'Ruộng bậc thang Hà Nhì thể hiện trí tuệ và tinh thần như thế nào?',
     hint:'体现：和谐相处、对……的尊重 蕴含：人与自然、人类',
     sample:'这里的一切无不体现着当地百姓与自然和谐相处的智慧，体现着民众对自身文化和自然环境的尊重。它所蕴含的人与自然高度和谐发展的古老文化特征，正是21世纪人类所追求的精神。它还向我们证明，人类拥有惊人的创造精神。',
     sample_vn:'Mọi thứ ở đây đều thể hiện trí tuệ chung sống hài hoà với thiên nhiên của người dân địa phương, thể hiện sự tôn trọng của họ với văn hoá của chính mình và môi trường tự nhiên. Đặc trưng văn hoá cổ xưa về sự phát triển hài hoà cao độ giữa người và thiên nhiên mà nó chứa đựng chính là tinh thần mà nhân loại thế kỷ 21 theo đuổi. Nó còn chứng minh con người có tinh thần sáng tạo đáng kinh ngạc.',
     note:'Dùng điểm ngữ pháp 无不体现着……; ý "蕴含" nói bằng 它所蕴含的……，正是……所追求的…… (所 + động từ làm định ngữ).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 15',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'听说你们暑假去云南看梯田了？天气怎么样？'},
            {sp:'男',zh:'别提了，山上的天气时而晴，时而下雨，不过雨后的梯田比照片上还要壮丽。'}],
     q:'男的觉得梯田怎么样？',qvn:'Người đàn ông thấy ruộng bậc thang thế nào?',
     opts:['没有照片上漂亮','比照片上更壮丽','下雨后看不清楚','天气太好了'],ans:1,
     why:'比照片上还要壮丽 → đẹp hơn cả ảnh. 时而晴，时而下雨 là nói thời tiết thất thường, không phải "trời quá đẹp".',
     words:['梯田','时而','壮丽']},

    {n:2,
     lines:[{sp:'男',zh:'今年一直不下雨，你老家的庄稼还好吗？'},
            {sp:'女',zh:'别提多糟了，好多地都枯萎了，村里人想方设法从河里运水来浇地。'}],
     q:'女的老家现在怎么样？',qvn:'Quê người phụ nữ hiện ra sao?',
     opts:['庄稼长得很好','遭遇了干旱','发了大水','村民都搬走了'],ans:1,
     why:'一直不下雨 + 庄稼枯萎 + 运水来浇地 → quê cô ấy đang bị hạn hán.',
     words:['庄稼','枯萎']},

    {n:3,
     lines:[{sp:'女',zh:'这个峡谷里的瀑布真漂亮，你以前来过吗？'},
            {sp:'男',zh:'来过好几次了。尽管已经看过很多次，可每次站在这儿，我都不禁被它震撼。'}],
     q:'关于男的，下面哪项正确？',qvn:'Về người đàn ông, phương án nào đúng?',
     opts:['第一次来这里','已经看腻了','每次来都很震撼','不喜欢瀑布'],ans:2,
     why:'尽管已经看过很多次，可每次……都不禁被它震撼 → lần nào cũng choáng ngợp. 来过好几次了 → không phải lần đầu.',
     words:['峡谷','瀑布','不禁','震撼']},

    {n:4,
     lines:[{sp:'男',zh:'你打算大学学什么专业？'},
            {sp:'女',zh:'我想学生态保护。家人一开始都反对，不过我已经决定了，谁也阻拦不了我。'}],
     q:'女的是什么态度？',qvn:'Người phụ nữ có thái độ thế nào?',
     opts:['还在犹豫','听家人的安排','很坚决','想换个专业'],ans:2,
     why:'我已经决定了，谁也阻拦不了我 → rất kiên quyết. Gia đình phản đối nhưng cô ấy không đổi ý.',
     words:['生态','阻拦']},

    {n:5,
     lines:[{sp:'女',zh:'这个自然保护区为什么不让游客随便进去？'},
            {sp:'男',zh:'因为里面生活着很多珍稀动物，有的在世界上都很罕见，得好好保护。'}],
     q:'保护区为什么限制游客进入？',qvn:'Vì sao khu bảo tồn hạn chế du khách vào?',
     opts:['要保护珍稀动物','里面太危险','门票太贵','正在修路'],ans:0,
     why:'生活着很多珍稀动物……得好好保护 → để bảo vệ động vật quý hiếm.',
     words:['珍稀','罕见']},

    {n:6,
     lines:[{sp:'男',zh:'这座木雕真精致，是买的吗？'},
            {sp:'女',zh:'不是，是我爷爷自己雕刻的，他花了整整两年的心血呢。'}],
     q:'关于这座木雕，可以知道什么？',qvn:'Về bức tượng gỗ này, có thể biết điều gì?',
     opts:['是在商店买的','做了两个月','是别人送的','是爷爷做的'],ans:3,
     why:'是我爷爷自己雕刻的 → ông tự khắc. 花了整整两年 chứ không phải hai tháng.',
     words:['雕刻','心血']},

    {n:7,
     lines:[{sp:'女',zh:'哈尼族的祖先当初为什么要在山上开辟梯田呢？在平地种庄稼不是更方便吗？'},
            {sp:'男',zh:'那里几乎都是山，没有平地。他们没有和大山对抗，而是服从自然规律，一代一代地把大山雕塑成了梯田。'}],
     q:'哈尼人为什么选择梯田？',qvn:'Vì sao người Hà Nhì chọn ruộng bậc thang?',
     opts:['梯田的收成更好','政府要求这样做','那里没有平地，只能顺应自然','梯田更好看'],ans:2,
     why:'几乎都是山，没有平地 + 服从自然规律 → thuận theo tự nhiên. Không nói tới thu hoạch hay chính phủ.',
     words:['开辟','庄稼','雕塑']},

    {n:8,
     lines:[{sp:'男',zh:'各位游客，我们现在所在的位置海拔一千八百米。大家往下看，这一层层梯田已经有一千三百多年的历史了，二〇一三年被列入了世界文化遗产名录。它不仅拥有很高的审美价值，还向我们展示了人与自然和谐相处的智慧。请大家拍照时注意安全，不要走进田里。'}],
     q:'关于这些梯田，下面哪项正确？',qvn:'Về những thửa ruộng bậc thang này, phương án nào đúng?',
     opts:['有一百多年的历史','游客可以走进田里','是世界文化遗产','海拔一千三百米'],ans:2,
     why:'二〇一三年被列入了世界文化遗产名录 → là di sản văn hoá thế giới. 1.300 là số năm lịch sử, độ cao là 1.800 m; du khách KHÔNG được vào ruộng.',
     words:['海拔','梯田','遗产','拥有','审美']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn hỏi chuyến đi Mù Cang Chải của em ra sao.',
     a:{sp:'Bạn',zh:'你去木江界看梯田了？那边的风景怎么样？',vn:'Cậu đi Mù Cang Chải xem ruộng bậc thang rồi à? Phong cảnh bên đó thế nào?'},
     need:['Dùng 时而……，时而……','Dùng 壮丽 hoặc 陶醉'],
     sample:'太美了！我们的车在山里盘旋而行，时而开到谷底，时而爬上山腰，一层层金黄的梯田真是壮丽极了，让人陶醉。',
     samplePy:'Tài měi le! Wǒmen de chē zài shān li pánxuán ér xíng, shí\'ér kāidào gǔdǐ, shí\'ér páshàng shānyāo, yì céngcéng jīnhuáng de tītián zhēn shì zhuànglì jí le, ràng rén táozuì.',
     sampleVn:'Đẹp lắm! Xe bọn tớ chạy vòng vèo trong núi, lúc xuống đáy thung lũng, lúc leo lên lưng chừng núi, từng tầng ruộng bậc thang vàng óng thật là tráng lệ, khiến người ta ngây ngất.',
     tip:'Bắt chước câu bài khoá 我们的车……时而……时而……; kết bằng 让人陶醉.'},

    {scene:'Bạn cùng lớp kể đã xem một phim tài liệu về hạn hán.',
     a:{sp:'Bạn',zh:'昨天看了一部关于干旱的纪录片，庄稼都枯萎了，牲畜也没水喝。',vn:'Hôm qua tớ xem một phim tài liệu về hạn hán, hoa màu khô héo hết, gia súc cũng không có nước uống.'},
     need:['Dùng 不禁','Dùng 珍惜 hoặc 生态'],
     sample:'听你这么说，我不禁想到我们平时浪费了多少水。以后真得珍惜每一滴水，保护好生态环境。',
     samplePy:'Tīng nǐ zhème shuō, wǒ bùjīn xiǎngdào wǒmen píngshí làngfèile duōshao shuǐ. Yǐhòu zhēn děi zhēnxī měi yì dī shuǐ, bǎohù hǎo shēngtài huánjìng.',
     sampleVn:'Nghe cậu nói vậy, tớ không khỏi nghĩ tới việc bình thường chúng ta lãng phí biết bao nhiêu nước. Sau này thật phải trân trọng từng giọt nước, bảo vệ tốt môi trường sinh thái.',
     tip:'不禁 + động từ (想到) chỉ phản ứng tự nhiên khi nghe chuyện; 得 (děi) = phải.'},

    {scene:'Em trai định bỏ tập đàn vì thấy khó.',
     a:{sp:'Em trai',zh:'这首曲子太难了，我练了一个月还弹不好，不想学了。',vn:'Bản nhạc này khó quá, em tập một tháng rồi vẫn đàn không hay, không muốn học nữa.'},
     need:['Dùng 锲而不舍 hoặc 毅力','Dùng 只要……就……'],
     sample:'学乐器最需要的就是锲而不舍的毅力。只要你每天坚持练一个小时，就一定能弹好。',
     samplePy:'Xué yuèqì zuì xūyào de jiù shì qiè\'érbùshě de yìlì. Zhǐyào nǐ měi tiān jiānchí liàn yí ge xiǎoshí, jiù yídìng néng tánhǎo.',
     sampleVn:'Học nhạc cụ cần nhất chính là nghị lực kiên trì bền bỉ. Chỉ cần mỗi ngày em kiên trì tập một tiếng, nhất định sẽ đàn hay.',
     tip:'锲而不舍 làm định ngữ cho 毅力; 只要……就…… nêu điều kiện đủ để động viên.'},

    {scene:'Bạn người Trung Quốc hỏi Việt Nam có cảnh đẹp nào nên đi.',
     a:{sp:'Bạn Trung Quốc',zh:'我下个月去越南旅游，你觉得哪儿最值得去？',vn:'Tháng sau mình đi du lịch Việt Nam, cậu thấy đâu đáng đi nhất?'},
     need:['Dùng 遗产','Dùng 无不'],
     sample:'一定要去下龙湾！它是世界自然遗产，海上有将近两千座石岛，去过的朋友无不说那里美得像画一样。',
     samplePy:'Yídìng yào qù Xiàlóng Wān! Tā shì shìjiè zìrán yíchǎn, hǎi shang yǒu jiāngjìn liǎngqiān zuò shídǎo, qùguo de péngyou wúbù shuō nàlǐ měi de xiàng huà yíyàng.',
     sampleVn:'Nhất định phải đi vịnh Hạ Long! Đó là di sản thiên nhiên thế giới, trên biển có gần hai nghìn hòn đảo đá, bạn bè ai đã đi cũng đều nói ở đó đẹp như tranh.',
     tip:'无不 cần chủ ngữ số nhiều (去过的朋友); 美得像画一样 — bổ ngữ trình độ + so sánh.'},

    {scene:'Mẹ hỏi vì sao em quyết định tham gia câu lạc bộ bảo vệ môi trường.',
     a:{sp:'Mẹ',zh:'你学习这么忙，怎么还要参加环保社团？',vn:'Con học bận thế, sao còn tham gia câu lạc bộ bảo vệ môi trường?'},
     need:['Dùng 目睹','Dùng 之所以……是因为……'],
     sample:'我之所以参加环保社团，是因为上次去海边，我亲眼目睹了满地的塑料垃圾，心里特别难受。',
     samplePy:'Wǒ zhī suǒyǐ cānjiā huánbǎo shètuán, shì yīnwèi shàng cì qù hǎibiān, wǒ qīnyǎn mùdǔle mǎn dì de sùliào lājī, xīnli tèbié nánshòu.',
     sampleVn:'Con sở dĩ tham gia câu lạc bộ môi trường là vì lần trước ra biển, con tận mắt chứng kiến rác nhựa đầy bãi, trong lòng rất khó chịu.',
     tip:'之所以 đứng sau chủ ngữ, vế sau 是因为; 亲眼目睹 nhấn mạnh "tận mắt".'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết bài giới thiệu ruộng bậc thang cho tập san du lịch của trường.',
     a:'哈尼梯田以其宝贵的生态、文化和审美价值，展示着它的罕见和珍稀。',b:'哈尼梯田特别好看，特别少见，特别值钱。',better:'a',
     why:'Bài giới thiệu cần văn viết: 以其……展示着……, 罕见, 珍稀. Câu b (特别好看, 值钱) là khẩu ngữ, lặp từ, nghe như lời nói chuyện.'},

    {scene:'Em nhắn tin cho bạn thân ngay khi vừa leo tới đỉnh núi.',
     a:'哇，我到山顶了！太美了，你一定得来看看！',b:'本人已抵达山顶，眼前景色壮丽，建议您择日前来观赏。',better:'a',
     why:'Nhắn bạn thân dùng khẩu ngữ, cảm thán (哇, 太美了). Câu b (本人, 抵达, 择日前来) giống thông báo hành chính.'},

    {scene:'Hướng dẫn viên giới thiệu với đoàn khách tại điểm tham quan.',
     a:'各位游客，这里海拔一千八百米，眼前的梯田已有一千三百多年的历史。',b:'喂，你们看，这儿挺高的，这些田老早就有了。',better:'a',
     why:'Hướng dẫn viên nói với khách cần lịch sự, chính xác: 各位游客, số liệu cụ thể. Câu b (喂, 挺高的, 老早) quá suồng sã.'},

    {scene:'Em kể với bà về chuyến đi xem thác nước.',
     a:'奶奶，那个瀑布可大了，水声轰隆隆的，我都看呆了！',b:'该瀑布规模宏大，水声震耳，令人叹为观止。',better:'a',
     why:'Kể chuyện với bà dùng khẩu ngữ sinh động (可大了, 轰隆隆, 看呆了). Câu b (该瀑布, 叹为观止) hợp với sách hướng dẫn du lịch.'},

    {scene:'Bản tin thời tiết trên truyền hình.',
     a:'受持续干旱影响，西南部分地区农作物大面积绝收。',b:'西南那边好久没下雨，地里的东西差不多都死了。',better:'a',
     why:'Bản tin dùng từ ngữ chính thức: 受……影响, 持续干旱, 农作物, 大面积绝收. Câu b là cách kể đời thường.'},

    {scene:'Em an ủi bạn đang nản vì thi trượt đội tuyển.',
     a:'别灰心，你这么有毅力，下次肯定行！',b:'望你以锲而不舍之精神，再接再厉，争取佳绩。',better:'a',
     why:'An ủi bạn cần gần gũi, ấm áp (别灰心, 肯定行). Câu b (望你以……之精神, 争取佳绩) giống lời chúc trên giấy khen.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据课文内容回答问题</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2 phút.',
  outline: [
    {step:'当中国西南遭遇干旱时，哈尼梯田怎么样？', cue:'……壮丽依旧，…… ……的天空，……的白云，……的树影，更衬托出……', words:['干旱','庄稼','枯萎','牲畜','梯田','壮丽','依旧','峡谷','铺','卷','蔚蓝','漂浮','摇摆','衬托']},
    {step:'描述一下坐在车上遥望梯田时看到的风景。', cue:'山顶……，峡谷间……，半山腰……，村子下……', words:['盘旋','时而','海拔','峡谷','瀑布','纵横','汹涌']},
    {step:'为什么“我”每次目睹哈尼梯田都感到震惊？', cue:'这是……的作品，它比长城……，比宫殿……', words:['目睹','重叠','山脉','雕塑','毅力','雕刻','杰出','震撼','宫殿']},
    {step:'这里的人为什么选择了梯田？', cue:'古老的曲子：…… 经过数十代人的锲而不舍…… ……与大自然和谐相处', words:['不禁','曲子','采集','种子','稻谷','锲而不舍','开辟']},
    {step:'哈尼梯田有什么价值？', cue:'以其……，展示着……', words:['心血','辛勤','阻拦','生态','审美','罕见','珍稀']},
    {step:'哈尼梯田体现了什么样的智慧和精神？', cue:'体现：和谐相处、对……的尊重 蕴含：人与自然、人类', words:['陶醉','遗产','拥有']}
  ],
  checklist: [
    'Kể đủ 6 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có đảo ý "hạn hán khắp nơi — ruộng bậc thang vẫn tráng lệ" và câu tả cảnh 蔚蓝的天空…更衬托出… không?',
    'Ý 2 có tả theo thứ tự từ trên xuống (山顶 → 峡谷间 → 半山腰 → 村子下) và dùng 时而……时而…… không?',
    'Ý 4 có đủ: lời khúc hát cổ → mấy chục thế hệ kiên trì → không chống lại mà thuận theo tự nhiên không?',
    'Ý 6 có dùng 无不体现着…… và kết bằng "di sản quý báu, con người có tinh thần sáng tạo đáng kinh ngạc" không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 160–165) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'练一练：为句子选择适当的上句或下句（注释1 · 时而）', vn:'Luyện tập (chú thích 1 · 时而): Chọn vế câu trước hoặc vế câu sau thích hợp cho mỗi câu. Bấm ô trống rồi chọn một trong ba vế câu A, B, C trong khung (đáp án theo sách).',
   tu:['高低不平，延伸到看不到尽头的远方','他的语言来自民间','半天了，他还是拿不定主意'],
   cau:[
     {s:'那是一条年久失修的老路，时而土路，时而水泥道，＿＿。', dap:['高低不平，延伸到看不到尽头的远方']},
     {s:'＿＿，时而说已经想好了，就这么办，时而又犹豫不决，说还得好好想想。', dap:['半天了，他还是拿不定主意']},
     {s:'＿＿，时而朴实、自然，时而幽默、生动，有的像政论，有的像诗歌，深受读者喜爱。', dap:['他的语言来自民间']}
   ]},

  {kieu:'gx', de:'练一练：完成句子（注释2 · 不禁）', vn:'Luyện tập (chú thích 2 · 不禁): Hoàn thành câu. Sách không in đáp án — dưới đây là câu tham khảo, em viết khác mà hợp nghĩa, đúng cách dùng 不禁 vẫn được.',
   cau:[
     {s:'听他说得＿＿，大家不禁连连点头。', tu:'不禁', dap:'听他说得很有道理，大家不禁连连点头。',
      giai:'Chỗ trống là bổ ngữ trạng thái sau 说得 (很有道理 / 头头是道) — nguyên nhân khiến mọi người bất giác gật đầu.'},
     {s:'看着电影中父子情深，他不禁＿＿。', tu:'不禁', dap:'看着电影中父子情深，他不禁流下了眼泪。',
      giai:'Sau 不禁 là phản ứng tự nhiên không kìm được: 流下了眼泪 / 想起了自己的父亲.'},
     {s:'看到污染的河流，人们不禁要问：“＿＿？”', tu:'不禁', dap:'看到污染的河流，人们不禁要问：“我们的子孙后代还能喝上干净的水吗？”',
      giai:'不禁要问 + câu hỏi trực tiếp: nêu nỗi lo trước cảnh ô nhiễm; câu hỏi tu từ nên nói về hậu quả.'}
   ]},

  {kieu:'vitri', de:'练一练：为“无不”选择适当的位置（注释3 · 无不）', vn:'Luyện tập (chú thích 3 · 无不): Chọn vị trí thích hợp cho 无不 (sách không in đáp án — đây là đáp án tham khảo).',
   cau:[
     {s:'A他设计的灯具、家具B和各种装饰品，C造型新颖，D光彩照人。', tu:'无不', ans:'C',
      giai:'Chủ ngữ số nhiều (灯具、家具和各种装饰品) đã nêu xong, 无不 đứng đầu vị ngữ: ……，无不造型新颖，光彩照人 (món nào cũng kiểu dáng mới lạ).'},
     {s:'他创业其实A只有十多年，但他却能将自己的创业心得B升华，并总结成朴实易懂的语言，C但凡有一些创业体会的人，D在他一针见血的点评中了解到了创业的本质。', tu:'无不', ans:'D',
      giai:'但凡……，无不……: hễ là … thì không ai không …; 无不 đứng sau chủ ngữ 但凡有一些创业体会的人, trước vị ngữ 在……中了解到…….'},
     {s:'谈起台湾作家李敖，无论是他的敌人还是朋友，A都不得不承认他是当代文坛上的奇人！他一生不仅著作等身，B还是一位多情才子。李敖的情感经历C与他笔下那颇含激情的文章一样，D充满传奇的色彩。', tu:'无不', ans:'D',
      giai:'Chủ ngữ gộp "cuộc đời tình cảm cũng như các bài văn của ông" (số nhiều) → ……一样，无不充满传奇的色彩. Vị trí A đã có 都不得不, thêm 无不 sẽ thừa.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chứa chữ có dấu chấm, cùng nghĩa với chữ đó).',
   vd:{tu:'雕刻', chu:'雕', ds:['雕塑','雕花','雕像','石雕']},
   cau:[
     {tu:'枯萎', chu:'枯', dap:['枯燥','枯竭','干枯','海枯石烂'], them:['枯黄','枯草','枯树','枯死','枯木逢春'],
      giai:'枯 = khô, héo (cây cỏ mất hết nước): 干枯, 枯黄. Nghĩa mở rộng: cạn kiệt (枯竭), khô khan nhạt nhẽo (枯燥 — bài 7).'},
     {tu:'震撼', chu:'震', dap:['震动','震惊','震荡','地震'], them:['震耳','震怒','余震','防震','震耳欲聋'],
      giai:'震 = rung chuyển mạnh (地震, 震动), mở rộng sang chấn động tinh thần (震惊 — bài 9, 震撼).'},
     {tu:'辛勤', chu:'勤', dap:['勤劳','勤奋','勤快','出勤'], them:['勤俭','勤学','勤恳','考勤','值勤'],
      giai:'勤 = siêng năng, chịu khó (勤劳 — bài 1, 勤奋, 勤快); cũng chỉ việc có mặt làm việc đều đặn (出勤, 考勤).'},
     {tu:'珍稀', chu:'珍', dap:['珍贵','珍惜','珍爱','珍藏'], them:['珍宝','珍珠','珍品','珍视','山珍海味'],
      giai:'珍 = quý báu (珍贵, 珍宝) → coi là quý mà giữ gìn (珍惜, 珍爱, 珍藏).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu (đáp án theo sách).',
   cau:[
     {s:'几十年过去了，这个地方还是贫穷落后。', tu:'依旧', dap:'几十年过去了，这个地方依旧贫穷落后。',
      giai:'还是 (vẫn) → 依旧: cùng nghĩa "vẫn như cũ" nhưng 依旧 mang sắc thái văn viết.'},
     {s:'他们玩儿得兴高采烈，一会儿唱歌，一会儿跳舞。', tu:'时而……，时而……', dap:'他们玩儿得兴高采烈，时而唱歌，时而跳舞。',
      giai:'一会儿……，一会儿…… (khẩu ngữ) → 时而……，时而…… (văn viết): hai hoạt động luân phiên.'},
     {s:'他患上了一种非常少见的疾病，连最有经验的大夫都感到头疼。', tu:'罕见', dap:'他患上了一种罕见的疾病，连最有经验的大夫都感到头疼。',
      giai:'非常少见 → 罕见 (bản thân 罕见 đã có nghĩa "rất hiếm", nên bỏ 非常).'},
     {s:'他要做的事情，谁也拦不住，你们就别管他了。', tu:'阻拦', dap:'他要做的事情，谁也阻拦不了，你们就别管他了。',
      giai:'拦不住 → 阻拦不了: động từ hai âm tiết 阻拦 + bổ ngữ khả năng 不了.'},
     {s:'她亲眼看到自己的家被大火烧掉了，内心非常痛苦。', tu:'目睹', dap:'她目睹了自己的家被大火烧掉了，内心非常痛苦。',
      giai:'亲眼看到 → 目睹了 (目 = mắt, 睹 = thấy): 目睹 đã chứa nghĩa "tận mắt", không cần 亲眼.'},
     {s:'由于小王做事能坚持到底、不放弃，所以最后取得了成功。', tu:'锲而不舍', dap:'由于小王做事锲而不舍，所以最后取得了成功。',
      giai:'能坚持到底、不放弃 → 锲而不舍 (thành ngữ gói trọn ý "kiên trì đến cùng, không bỏ cuộc"), làm vị ngữ sau 做事.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['庄稼','牲畜','干旱','耕地','枯萎'],
   cau:[
     {s:'连续几个月没下雨，我国西部地区遭遇了几十年不遇的＿＿，＿＿大面积＿＿，人和＿＿饮水困难，旱情十分严重。但勤劳的农民们想方设法从各地运水来浇灌＿＿，使得农作物没有大面积绝收。',
      dap:['干旱','庄稼','枯萎','牲畜','耕地']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['珍稀','审美','生态','遗产','陶醉'],
   cau:[
     {s:'九寨沟是中国第一个以保护自然风景为主要目的的自然保护区。它像一幅美丽画卷展示在人们面前，令人＿＿。由于风景优美，＿＿环境良好，它获得了“世界自然＿＿”的称号。除了具有很高的＿＿价值，九寨沟还蕴藏着丰富、＿＿的动植物资源。',
      dap:['陶醉','生态','遗产','审美','珍稀']}
   ]},

  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong sách đặt trong 【】; sách không có đáp án cố định — đây là câu gợi ý).',
   cau:[
     {mau:'【尽管】已目睹这奇迹无数次，【但】我每次身临其境，【都】会为哈尼族的山民们在这重重叠叠的山脉上雕塑出的美丽画卷而震惊。',
      khung:'尽管＿＿，但＿＿，都＿＿。',
      dap:['我已经去过下龙湾很多次','我每次坐船游览','会被那里壮丽的风景深深吸引'],
      giai:'尽管 + sự thật (đã nhiều lần), 但 + 每次……都…… (vẫn không đổi): nhượng bộ — kết quả vẫn giữ nguyên, nhấn mạnh sức hấp dẫn của sự vật.'},
     {mau:'【面对】大山，山民们【没有】对抗，【而是选择】了服从——他们服从自然规律，选择开辟梯田这种农耕方式，【最终】与大自然和谐相处。',
      khung:'面对＿＿，＿＿没有＿＿，而是选择＿＿，最终＿＿。',
      dap:['高考的失败','他','灰心放弃','了重新再来——他每天坚持复习到深夜','考上了理想的大学'],
      giai:'面对 + khó khăn, chủ ngữ + 没有 A (cách phản ứng tiêu cực), 而是选择 B (cách phản ứng tích cực), 最终 + kết quả tốt.'}
   ]},

  {kieu:'bc', de:'病句类型：成分冗余 · 例句', vn:'Loại câu sai: THỪA THÀNH PHẦN — câu đã đủ cấu trúc, đủ nghĩa nhưng lại xuất hiện thêm từ ngữ không cần thiết. Các câu ví dụ trong sách (tr. 164–165), kèm phân tích của sách. Tìm chỗ thừa rồi sửa.',
   cau:[
     {s:'我们班同学，上课的时候，我们都能专心听讲，认真思考问题。', sai:'，我们都能', loai:'主语重复',
      dap:'我们班同学，上课的时候，都能专心听讲，认真思考问题。',
      giai:'Chủ ngữ lặp: 我们班同学 đã là chủ ngữ, không cần thêm 我们 lần nữa — xoá 我们 thứ hai.'},
     {s:'一想起我教过的学生，真的打心眼里舍不得离开这些学生。', sai:'这些学生', loai:'宾语重复',
      dap:'一想起我教过的学生，真的打心眼里舍不得离开他们。',
      giai:'Tân ngữ lặp: có thể xoá 这些学生 cuối câu (…舍不得离开), hoặc đổi thành 他们.'},
     {s:'那个地方谁也都不想去。', sai:'也都', loai:'副词重复',
      dap:'那个地方谁也不想去。',
      giai:'Đại từ phiếm chỉ (谁) thường đi với 也 hoặc 都, dùng cả 也都 là thừa. Sửa: 谁也不想去 hoặc 谁都不想去.'},
     {s:'我们碰到了一些困难，这个问题短时间内不可能很快得到解决。', sai:'很快', loai:'状语重复',
      dap:'我们碰到了一些困难，这个问题短时间内不可能得到解决。',
      giai:'Trạng ngữ lặp nghĩa: 短时间内 và 很快 trùng ý — bỏ một trong hai (đáp án bỏ 很快).'},
     {s:'人们如果连续看电视超过四个多小时，就会疲劳。', sai:'超过四个多小时', loai:'词义重复',
      dap:'人们如果连续看电视超过四个小时，就会疲劳。',
      giai:'超过 và 多 cùng nghĩa "hơn" — bỏ một trong hai: 超过四个小时 hoặc 四个多小时.'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议（扩展1 · 练一练）', vn:'Chỉ ra lỗi sai trong các câu dưới đây và đề xuất cách sửa (Mở rộng 1 · Luyện tập) — đáp án theo sách.',
   cau:[
     {s:'我始终不明白，他为什么要那样做的原因。', sai:'为什么要那样做的原因', loai:'成分冗余（“为什么”和“原因”重复）',
      dap:'我始终不明白，他为什么要那样做。',
      giai:'为什么 và 原因 cùng hỏi lý do — chỉ giữ một: 他为什么要那样做 hoặc 他那样做的原因 (sách chấp nhận cả hai).'},
     {s:'凡事要依靠群众，否则只靠自己，什么事也做不成。', sai:'只靠自己', loai:'词义重复',
      dap:'凡事要依靠群众，否则什么事也做不成。',
      giai:'否则 (nếu không) đã bao hàm ý "không dựa vào quần chúng / chỉ dựa vào mình", thêm 只靠自己 là lặp nghĩa.'},
     {s:'经法院审理，违约经营的张某被判赔偿原告经济损失5万多余元。', sai:'多余', loai:'“多”“余”重复',
      dap:'经法院审理，违约经营的张某被判赔偿原告经济损失5万多元。',
      giai:'多 và 余 đều = "hơn, lẻ" — chọn một: 5万多元 hoặc 5万余元 (余 trang trọng hơn).'},
     {s:'这幅画是祖上传下来的，出自于名家之手。', sai:'出自于', loai:'“出自”和“于”重复',
      dap:'这幅画是祖上传下来的，出自名家之手。',
      giai:'自 trong 出自 đã = 从 / 于 (từ), thêm 于 là lặp. Cụm cố định: 出自……之手 (do tay … làm ra).'},
     {s:'根据美国某大学研究所发布的《2013全球幸福指数报告》显示，丹麦成为世界最幸福的国家。', sai:'根据', loai:'“根据”和“显示”重复',
      dap:'美国某大学研究所发布的《2013全球幸福指数报告》显示，丹麦成为世界最幸福的国家。',
      giai:'根据…… (theo …) và ……显示 (… cho thấy) cùng nêu nguồn — chỉ dùng một: bỏ 根据, hoặc giữ 根据 và bỏ 显示 (根据……报告，丹麦成为……).'}
   ]}
];
