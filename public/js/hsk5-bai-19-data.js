// ══════════════════════════════════════════
// DATA — HSK5 Bài 19: 家乡的萝卜饼 (Bánh củ cải quê nhà)
// Unit 7 交流文化 · Nguồn: HSK标准教程5下 (tr. 14–21) + sách bài tập bài 19
// Bài khoá: 家乡的萝卜饼 (改编自《中国电视报》，作者：李星涛)
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'家乡',py:'jiāxiāng',pos:'Danh từ',vn:'quê nhà, quê hương',hv:'gia hương',em:'🏡',lesson:1,
   explain:['Nơi mình sinh ra và lớn lên, nơi gia đình sinh sống lâu đời. Sắc thái hơi trang trọng hơn 老家 (khẩu ngữ).'],
   usage:'Hay gặp: 我的家乡, 家乡菜, 回家乡, 离开家乡, 想念家乡. Khẩu ngữ thường nói 老家.',
   collo:['我的家乡','家乡菜','回家乡','离开家乡'],
   ex_zh:'家乡的众多美食中，萝卜饼是最让我怀念的。',ex_py:'Jiāxiāng de zhòngduō měishí zhōng, luóbobǐng shì zuì ràng wǒ huáiniàn de.',ex_vn:'Trong vô vàn món ngon của quê nhà, bánh củ cải là món khiến tôi hoài niệm nhất.',
   exList:[
     {zh:'家乡的众多美食中，萝卜饼是最让我怀念的。',py:'Jiāxiāng de zhòngduō měishí zhōng, luóbobǐng shì zuì ràng wǒ huáiniàn de.',vn:'Trong vô vàn món ngon của quê nhà, bánh củ cải là món khiến tôi hoài niệm nhất.'},
     {zh:'我的家乡在越南中部，那儿的海特别漂亮。',py:'Wǒ de jiāxiāng zài Yuènán zhōngbù, nàr de hǎi tèbié piàoliang.',vn:'Quê tôi ở miền Trung Việt Nam, biển ở đó đẹp lắm.'},
     {zh:'离开家乡以后，我越来越想念妈妈做的菜。',py:'Líkāi jiāxiāng yǐhòu, wǒ yuè lái yuè xiǎngniàn māma zuò de cài.',vn:'Rời quê rồi, tôi càng ngày càng nhớ những món mẹ nấu.'}
   ],
   colloFull:[
     {zh:'我的家乡',py:'wǒ de jiāxiāng',vn:'quê tôi'},
     {zh:'家乡菜',py:'jiāxiāngcài',vn:'món ăn quê nhà'},
     {zh:'回家乡',py:'huí jiāxiāng',vn:'về quê'},
     {zh:'离开家乡',py:'líkāi jiāxiāng',vn:'rời quê'},
     {zh:'建设家乡',py:'jiànshè jiāxiāng',vn:'xây dựng quê hương'}
   ],
   patterns:[
     {s:'我的家乡在……，那儿……',m:'Giới thiệu quê: vị trí + đặc điểm'},
     {s:'家乡的 + N (美食 / 风景 / 特产)',m:'Nói về thứ đặc trưng của quê'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quê tôi tuy không lớn nhưng rất đẹp.',answer:'我的家乡虽然不大，但是很漂亮。',answerPy:'Wǒ de jiāxiāng suīrán bú dà, dànshì hěn piàoliang.',
      note:'虽然 đứng sau chủ ngữ (hoặc đầu câu); vế sau dùng 但是 để lật lại.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tôi chưa từng rời quê bao giờ.',answer:'我从来没离开过家乡。',answerPy:'Wǒ cónglái méi líkāiguo jiāxiāng.',
      note:'从来没 + V + 过: chưa từng bao giờ; 过 đứng ngay sau động từ, trước tân ngữ.',pair:'从来没……过'}
   ]},

  {n:2,zh:'萝卜',py:'luóbo',pos:'Danh từ',vn:'củ cải',hv:'la bặc',em:'🥕',lesson:1,
   explain:['Củ cải: loại rau củ mọc dưới đất, có nhiều màu (trắng, xanh, đỏ, tím). Chữ 卜 đọc nhẹ bo.','胡萝卜 (húluóbo) là cà rốt — thêm 胡 ở trước.'],
   usage:'Lượng từ: 一个 / 一根萝卜. Hay gặp: 萝卜饼, 萝卜丝, 白萝卜, 胡萝卜.',
   collo:['萝卜饼','萝卜丝','白萝卜','胡萝卜'],
   ex_zh:'萝卜饼就是用这三种颜色的萝卜做成的。',ex_py:'Luóbobǐng jiù shì yòng zhè sān zhǒng yánsè de luóbo zuòchéng de.',ex_vn:'Bánh củ cải chính là được làm từ củ cải ba màu này.',
   exList:[
     {zh:'萝卜饼就是用这三种颜色的萝卜做成的。',py:'Luóbobǐng jiù shì yòng zhè sān zhǒng yánsè de luóbo zuòchéng de.',vn:'Bánh củ cải chính là được làm từ củ cải ba màu này.'},
     {zh:'研究发现，常吃胡萝卜能起到保护眼睛的效果。',py:'Yánjiū fāxiàn, cháng chī húluóbo néng qǐdào bǎohù yǎnjing de xiàoguǒ.',vn:'Nghiên cứu phát hiện, thường xuyên ăn cà rốt có tác dụng bảo vệ mắt.'},
     {zh:'奶奶把萝卜切成丝，做了一盘凉菜。',py:'Nǎinai bǎ luóbo qiēchéng sī, zuòle yì pán liángcài.',vn:'Bà thái củ cải thành sợi, làm một đĩa món nguội.'}
   ],
   colloFull:[
     {zh:'萝卜饼',py:'luóbobǐng',vn:'bánh củ cải'},
     {zh:'萝卜丝',py:'luóbosī',vn:'sợi củ cải'},
     {zh:'白萝卜',py:'bái luóbo',vn:'củ cải trắng'},
     {zh:'胡萝卜',py:'húluóbo',vn:'cà rốt'},
     {zh:'切萝卜',py:'qiē luóbo',vn:'thái củ cải'}
   ],
   patterns:[
     {s:'用 + 萝卜 + 做成 + N',m:'Làm món gì từ củ cải'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bà đã thái củ cải thành sợi.',answer:'奶奶把萝卜切成了丝。',answerPy:'Nǎinai bǎ luóbo qiēchéngle sī.',
      note:'把 + tân ngữ + V + 成 + kết quả: tác động làm vật đổi thành hình dạng mới.',pair:'把'},
     {promptLang:'vi',prompt:'Đến em trai tôi cũng thích ăn bánh củ cải.',answer:'连我弟弟都喜欢吃萝卜饼。',answerPy:'Lián wǒ dìdi dōu xǐhuan chī luóbobǐng.',
      note:'连……都…… nhấn mạnh trường hợp khó xảy ra nhất (em trai kén ăn) mà cũng vậy.',pair:'连……都……'}
   ]},

  {n:3,zh:'怀念',py:'huáiniàn',pos:'Động từ',vn:'tưởng nhớ, hoài niệm',hv:'hoài niệm',em:'💭',lesson:1,
   explain:['Thường xuyên nhớ lại, không quên được người hoặc quãng thời gian đã qua. Sắc thái VĂN VIẾT, trang trọng.','Hay dùng với người đã mất hoặc hoàn cảnh không thể quay lại (tuổi thơ, thời đi học, cuộc sống ngày xưa).'],
   usage:'Làm được danh từ: 对……的怀念. Hay gặp: 怀念过去, 怀念童年, 怀念那段生活, 最让我怀念的是…….',
   collo:['怀念过去','怀念童年','怀念那段生活','对……的怀念'],
   ex_zh:'刘教授非常怀念年轻时在国外留学的那段生活。',ex_py:'Liú jiàoshòu fēicháng huáiniàn niánqīng shí zài guówài liúxué de nà duàn shēnghuó.',ex_vn:'Giáo sư Lưu vô cùng hoài niệm quãng thời gian du học ở nước ngoài hồi trẻ.',
   exList:[
     {zh:'刘教授非常怀念年轻时在国外留学的那段生活。',py:'Liú jiàoshòu fēicháng huáiniàn niánqīng shí zài guówài liúxué de nà duàn shēnghuó.',vn:'Giáo sư Lưu vô cùng hoài niệm quãng thời gian du học ở nước ngoài hồi trẻ.'},
     {zh:'从文章中我们读到了先生对去世的母亲的怀念。',py:'Cóng wénzhāng zhōng wǒmen dúdàole xiānsheng duì qùshì de mǔqīn de huáiniàn.',vn:'Qua bài văn, chúng ta đọc được nỗi tưởng nhớ của ông đối với người mẹ đã khuất.'},
     {zh:'毕业以后，我常常怀念高中三年的生活。',py:'Bìyè yǐhòu, wǒ chángcháng huáiniàn gāozhōng sān nián de shēnghuó.',vn:'Tốt nghiệp rồi, tôi thường hoài niệm ba năm cấp ba.'}
   ],
   colloFull:[
     {zh:'怀念过去',py:'huáiniàn guòqù',vn:'hoài niệm quá khứ'},
     {zh:'怀念童年',py:'huáiniàn tóngnián',vn:'nhớ tuổi thơ'},
     {zh:'怀念那段生活',py:'huáiniàn nà duàn shēnghuó',vn:'nhớ quãng đời ấy'},
     {zh:'对……的怀念',py:'duì……de huáiniàn',vn:'nỗi tưởng nhớ về …'},
     {zh:'深深地怀念',py:'shēnshēn de huáiniàn',vn:'tưởng nhớ sâu sắc'}
   ],
   patterns:[
     {s:'最让我怀念的是……',m:'Nêu điều khiến mình nhớ nhất'},
     {s:'A 对 B 的怀念',m:'Danh từ hoá: nỗi tưởng nhớ của A về B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi càng ngày càng hoài niệm cuộc sống thời cấp ba.',answer:'我越来越怀念高中的生活了。',answerPy:'Wǒ yuè lái yuè huáiniàn gāozhōng de shēnghuó le.',
      note:'越来越 + động từ tâm lý (怀念, 喜欢…); cuối câu có 了 báo sự thay đổi.',pair:'越来越'},
     {promptLang:'vi',prompt:'Bài văn này là bà viết để tưởng nhớ ông.',answer:'这篇文章是奶奶为了怀念爷爷写的。',answerPy:'Zhè piān wénzhāng shì nǎinai wèile huáiniàn yéye xiě de.',
      note:'是……的 nhấn mạnh người làm và mục đích của việc đã xảy ra; 为了 + mục đích đứng trước động từ 写.',pair:'是……的'}
   ]},

  {n:4,zh:'色彩',py:'sècǎi',pos:'Danh từ',vn:'màu sắc, sắc thái',hv:'sắc thái',em:'🎨',lesson:1,
   explain:['Màu sắc của vật, nói chung; mang sắc thái văn viết hơn 颜色: 色彩丰富, 色彩鲜艳.','Nghĩa bóng: sắc thái tư tưởng, tình cảm: 感情色彩, 民族色彩, 喜剧色彩.'],
   usage:'色彩 hay đi với 丰富 / 鲜艳 / 明显 / 强烈 (bảng 词语搭配 của sách). KHÔNG nói 一个色彩, 什么色彩的衣服 — hỏi màu quần áo dùng 颜色.',
   collo:['色彩丰富','色彩鲜艳','感情色彩','民族色彩'],
   ex_zh:'它那丰富的色彩、微甜的口感，至今仍让我十分想念。',ex_py:'Tā nà fēngfù de sècǎi, wēi tián de kǒugǎn, zhìjīn réng ràng wǒ shífēn xiǎngniàn.',ex_vn:'Màu sắc phong phú, vị ngọt nhẹ của nó đến nay vẫn khiến tôi vô cùng nhớ.',
   exList:[
     {zh:'它那丰富的色彩、微甜的口感，至今仍让我十分想念。',py:'Tā nà fēngfù de sècǎi, wēi tián de kǒugǎn, zhìjīn réng ràng wǒ shífēn xiǎngniàn.',vn:'Màu sắc phong phú, vị ngọt nhẹ của nó đến nay vẫn khiến tôi vô cùng nhớ.'},
     {zh:'尽管这话里感情色彩很重，但也不是没有道理。',py:'Jǐnguǎn zhè huà li gǎnqíng sècǎi hěn zhòng, dàn yě bú shì méiyǒu dàolǐ.',vn:'Tuy câu này mang nặng màu sắc cảm xúc, nhưng cũng không phải không có lý.'},
     {zh:'这幅画色彩鲜艳，连小孩子都喜欢看。',py:'Zhè fú huà sècǎi xiānyàn, lián xiǎo háizi dōu xǐhuan kàn.',vn:'Bức tranh này màu sắc tươi tắn, đến trẻ con cũng thích xem.'}
   ],
   colloFull:[
     {zh:'色彩丰富',py:'sècǎi fēngfù',vn:'màu sắc phong phú'},
     {zh:'色彩鲜艳',py:'sècǎi xiānyàn',vn:'màu sắc tươi tắn'},
     {zh:'感情色彩',py:'gǎnqíng sècǎi',vn:'sắc thái cảm xúc'},
     {zh:'民族色彩',py:'mínzú sècǎi',vn:'màu sắc dân tộc'},
     {zh:'神秘的色彩',py:'shénmì de sècǎi',vn:'màu sắc huyền bí'}
   ],
   patterns:[
     {s:'N + 色彩 + 丰富 / 鲜艳 / 明显',m:'Miêu tả màu sắc'},
     {s:'带有 + ……色彩',m:'Mang sắc thái …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn này không chỉ màu sắc phong phú mà mùi vị cũng rất ngon.',answer:'这道菜不仅色彩丰富，味道也很好。',answerPy:'Zhè dào cài bùjǐn sècǎi fēngfù, wèidao yě hěn hǎo.',
      note:'不仅 đứng sau chủ ngữ chung 这道菜; vế sau: chủ ngữ phụ 味道 + 也.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Bức tranh này màu sắc tươi tắn, đến em trai tôi cũng ngắm rất lâu.',answer:'这幅画色彩鲜艳，连我弟弟都看了很久。',answerPy:'Zhè fú huà sècǎi xiānyàn, lián wǒ dìdi dōu kànle hěn jiǔ.',
      note:'连 + người khó ngờ nhất + 都 + V; thời lượng 很久 đứng sau động từ.',pair:'连……都……'}
   ]},

  {n:5,zh:'想念',py:'xiǎngniàn',pos:'Động từ',vn:'nhớ',hv:'tưởng niệm',em:'🥺',lesson:1,
   explain:['Nhớ người hoặc nơi chốn mà mình mong được gặp lại. Sắc thái KHẨU NGỮ, dùng nhiều với người còn sống, nơi có thể quay về.','Bẫy Hán–Việt: "tưởng niệm" tiếng Việt là tưởng nhớ người đã khuất — nghĩa đó gần 怀念 / 纪念 hơn; 想念 chỉ là "nhớ" bình thường.'],
   usage:'想念 + người / nơi chốn. Thêm được 很 / 十分 / 格外: 很想念你. Hay gặp: 想念家人, 想念家乡, 想念朋友.',
   collo:['想念家人','想念家乡','想念朋友','格外想念'],
   ex_zh:'女儿告诉我，她很想念出差的爸爸。',ex_py:'Nǚ\'ér gàosu wǒ, tā hěn xiǎngniàn chūchāi de bàba.',ex_vn:'Con gái bảo tôi, nó rất nhớ bố đang đi công tác.',
   exList:[
     {zh:'女儿告诉我，她很想念出差的爸爸。',py:'Nǚ\'ér gàosu wǒ, tā hěn xiǎngniàn chūchāi de bàba.',vn:'Con gái bảo tôi, nó rất nhớ bố đang đi công tác.'},
     {zh:'每到春节，我就格外想念家乡的一草一木。',py:'Měi dào Chūnjié, wǒ jiù géwài xiǎngniàn jiāxiāng de yì cǎo yí mù.',vn:'Mỗi dịp Tết đến, tôi lại đặc biệt nhớ từng ngọn cỏ, cành cây ở quê.'},
     {zh:'在国外工作的那段时间，他时时刻刻都在想念着家人。',py:'Zài guówài gōngzuò de nà duàn shíjiān, tā shíshí-kèkè dōu zài xiǎngniànzhe jiārén.',vn:'Thời gian làm việc ở nước ngoài, lúc nào anh ấy cũng nhớ gia đình.'}
   ],
   colloFull:[
     {zh:'想念家人',py:'xiǎngniàn jiārén',vn:'nhớ gia đình'},
     {zh:'想念家乡',py:'xiǎngniàn jiāxiāng',vn:'nhớ quê'},
     {zh:'想念朋友',py:'xiǎngniàn péngyou',vn:'nhớ bạn bè'},
     {zh:'格外想念',py:'géwài xiǎngniàn',vn:'đặc biệt nhớ'},
     {zh:'十分想念',py:'shífēn xiǎngniàn',vn:'vô cùng nhớ'}
   ],
   patterns:[
     {s:'很 / 十分 / 格外 + 想念 + người / nơi',m:'Nhớ ai, nhớ nơi nào'},
     {s:'一……就想念……',m:'Hễ … là nhớ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ đến Tết là tôi lại nhớ quê.',answer:'一到春节，我就想念家乡。',answerPy:'Yí dào Chūnjié, wǒ jiù xiǎngniàn jiāxiāng.',
      note:'一 + V (điều kiện), (chủ ngữ) + 就 + kết quả; 一 trước thanh 4 (到) đọc yí.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần nghe bài hát này là tôi nhớ các bạn cấp hai.',answer:'只要听到这首歌，我就想念初中的同学。',answerPy:'Zhǐyào tīngdào zhè shǒu gē, wǒ jiù xiǎngniàn chūzhōng de tóngxué.',
      note:'只要 + điều kiện đủ, vế sau 就 đứng sau chủ ngữ 我.',pair:'只要……就……'}
   ]},

  {n:6,zh:'青',py:'qīng',pos:'Tính từ',vn:'xanh',hv:'thanh',em:'🟢',lesson:1,
   explain:['Màu xanh (xanh lá hoặc xanh lam), đôi khi chỉ màu đen. Thường dùng trong từ ghép và văn viết: 青菜, 青山, 青草.','Trong bài: 青的 = loại củ cải màu xanh.'],
   usage:'青 ít đứng một mình làm vị ngữ; khẩu ngữ nói 绿 hoặc 蓝. Hay gặp: 青菜, 青山绿水, 青的.',
   collo:['青菜','青山','青草','青的'],
   ex_zh:'青的甜中带点儿辣，红的辣中带着甜。',ex_py:'Qīng de tián zhōng dài diǎnr là, hóng de là zhōng dàizhe tián.',ex_vn:'Củ xanh ngọt mà thoảng chút cay, củ đỏ cay mà vẫn có vị ngọt.',
   exList:[
     {zh:'青的甜中带点儿辣，红的辣中带着甜。',py:'Qīng de tián zhōng dài diǎnr là, hóng de là zhōng dàizhe tián.',vn:'Củ xanh ngọt mà thoảng chút cay, củ đỏ cay mà vẫn có vị ngọt.'},
     {zh:'鱼生火，肉生痰，青菜萝卜保平安。',py:'Yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān.',vn:'Cá sinh nóng, thịt sinh đờm, rau xanh củ cải giữ bình an.'},
     {zh:'我的家乡青山绿水，风景特别美。',py:'Wǒ de jiāxiāng qīngshān lǜshuǐ, fēngjǐng tèbié měi.',vn:'Quê tôi non xanh nước biếc, phong cảnh cực đẹp.'}
   ],
   colloFull:[
     {zh:'青菜',py:'qīngcài',vn:'rau xanh'},
     {zh:'青山',py:'qīngshān',vn:'núi xanh'},
     {zh:'青草',py:'qīngcǎo',vn:'cỏ xanh'},
     {zh:'青的',py:'qīng de',vn:'loại màu xanh'},
     {zh:'青山绿水',py:'qīngshān lǜshuǐ',vn:'non xanh nước biếc'}
   ],
   patterns:[
     {s:'青、红、紫 + 三种',m:'Liệt kê màu: giữa các màu dùng dấu 、'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ đã rửa sạch rau xanh rồi.',answer:'妈妈已经把青菜洗干净了。',answerPy:'Māma yǐjīng bǎ qīngcài xǐ gānjìng le.',
      note:'已经 đứng trước 把; 把 + tân ngữ + V + bổ ngữ kết quả 干净 + 了.',pair:'把'},
     {promptLang:'vi',prompt:'Rau xanh không chỉ rẻ mà còn tốt cho sức khoẻ.',answer:'青菜不仅便宜，对身体也很好。',answerPy:'Qīngcài bùjǐn piányi, duì shēntǐ yě hěn hǎo.',
      note:'Cùng một chủ ngữ 青菜: 不仅 + đặc điểm 1, (对身体) + 也 + đặc điểm 2.',pair:'不仅……也……'}
   ]},

  {n:7,zh:'紫',py:'zǐ',pos:'Tính từ',vn:'tím',hv:'tử',em:'🟣',lesson:1,
   explain:['Màu tím (pha giữa đỏ và xanh lam). Hay nói 紫色, 紫的.'],
   usage:'Hay gặp: 紫色, 紫的, 紫葡萄, 紫萝卜. Có thể lặp để miêu tả: 紫紫的.',
   collo:['紫色','紫的','紫葡萄','紫萝卜'],
   ex_zh:'紫的像山泉般清淡可口。',ex_py:'Zǐ de xiàng shānquán bān qīngdàn kěkǒu.',ex_vn:'Củ tím thanh mát, ngon miệng như nước suối trên núi.',
   exList:[
     {zh:'紫的像山泉般清淡可口。',py:'Zǐ de xiàng shānquán bān qīngdàn kěkǒu.',vn:'Củ tím thanh mát, ngon miệng như nước suối trên núi.'},
     {zh:'家乡的萝卜有青、红、紫三种。',py:'Jiāxiāng de luóbo yǒu qīng, hóng, zǐ sān zhǒng.',vn:'Củ cải quê tôi có ba loại: xanh, đỏ và tím.'},
     {zh:'她穿了一条紫色的裙子，特别好看。',py:'Tā chuānle yì tiáo zǐsè de qúnzi, tèbié hǎokàn.',vn:'Cô ấy mặc một chiếc váy màu tím, rất đẹp.'}
   ],
   colloFull:[
     {zh:'紫色',py:'zǐsè',vn:'màu tím'},
     {zh:'紫的',py:'zǐ de',vn:'loại màu tím'},
     {zh:'紫葡萄',py:'zǐ pútao',vn:'nho tím'},
     {zh:'紫萝卜',py:'zǐ luóbo',vn:'củ cải tím'},
     {zh:'紫色的裙子',py:'zǐsè de qúnzi',vn:'váy màu tím'}
   ],
   patterns:[
     {s:'紫色的 + N',m:'N màu tím'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc váy tím đó là mẹ mua cho tôi.',answer:'那条紫色的裙子是妈妈给我买的。',answerPy:'Nà tiáo zǐsè de qúnzi shì māma gěi wǒ mǎi de.',
      note:'是……的 nhấn mạnh người mua (việc đã xảy ra); 给我 đứng trước động từ 买.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa từng thấy củ cải màu tím bao giờ.',answer:'我从来没见过紫色的萝卜。',answerPy:'Wǒ cónglái méi jiànguo zǐsè de luóbo.',
      note:'从来没 + 见过: chưa từng thấy; không dùng 不 với 过.',pair:'从来没……过'}
   ]},

  {n:8,zh:'赏心悦目',py:'shǎngxīn-yuèmù',pos:'Thành ngữ',vn:'sướng mắt đẹp lòng',hv:'thưởng tâm duyệt mục',em:'😍',lesson:1,
   explain:['Cảnh vật, đồ vật đẹp khiến lòng vui, mắt thích. 赏心 = lòng vui, 悦目 = mắt thích.','Thường làm vị ngữ hoặc định ngữ: 看起来赏心悦目, 赏心悦目的风景.'],
   usage:'Không thêm 很 phía trước; hay nói 让人赏心悦目, 令人赏心悦目, 看起来赏心悦目.',
   collo:['看起来赏心悦目','让人赏心悦目','赏心悦目的风景','令人赏心悦目'],
   ex_zh:'三种萝卜看起来赏心悦目。',ex_py:'Sān zhǒng luóbo kàn qǐlái shǎngxīn-yuèmù.',ex_vn:'Ba loại củ cải nhìn thật đẹp mắt, vui lòng.',
   exList:[
     {zh:'三种萝卜看起来赏心悦目。',py:'Sān zhǒng luóbo kàn qǐlái shǎngxīn-yuèmù.',vn:'Ba loại củ cải nhìn thật đẹp mắt, vui lòng.'},
     {zh:'公园里的花都开了，让人赏心悦目。',py:'Gōngyuán li de huā dōu kāi le, ràng rén shǎngxīn-yuèmù.',vn:'Hoa trong công viên nở hết rồi, ai nhìn cũng thấy vui mắt.'},
     {zh:'她把房间收拾得干干净净，看起来赏心悦目。',py:'Tā bǎ fángjiān shōushi de gāngānjìngjìng, kàn qǐlái shǎngxīn-yuèmù.',vn:'Cô ấy dọn phòng sạch tinh tươm, nhìn thật dễ chịu.'}
   ],
   colloFull:[
     {zh:'看起来赏心悦目',py:'kàn qǐlái shǎngxīn-yuèmù',vn:'nhìn đẹp mắt'},
     {zh:'让人赏心悦目',py:'ràng rén shǎngxīn-yuèmù',vn:'khiến người ta vui mắt'},
     {zh:'赏心悦目的风景',py:'shǎngxīn-yuèmù de fēngjǐng',vn:'phong cảnh đẹp mắt'},
     {zh:'令人赏心悦目',py:'lìng rén shǎngxīn-yuèmù',vn:'khiến người ta thích mắt (văn viết)'},
     {zh:'赏心悦目的颜色',py:'shǎngxīn-yuèmù de yánsè',vn:'màu sắc dễ chịu'}
   ],
   patterns:[
     {s:'N + 看起来 + 赏心悦目',m:'Nhìn vào thấy đẹp mắt, vui lòng'},
     {s:'让 / 令 + 人 + 赏心悦目',m:'Khiến người ta vui mắt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy dọn phòng rất sạch, nhìn thật dễ chịu.',answer:'她把房间收拾得很干净，看起来赏心悦目。',answerPy:'Tā bǎ fángjiān shōushi de hěn gānjìng, kàn qǐlái shǎngxīn-yuèmù.',
      note:'把 + tân ngữ + V + 得 + bổ ngữ trạng thái; thành ngữ làm vị ngữ sau 看起来.',pair:'把'},
     {promptLang:'vi',prompt:'Hoa trong công viên ngày càng nhiều, nhìn rất vui mắt.',answer:'公园里的花越来越多，让人赏心悦目。',answerPy:'Gōngyuán li de huā yuè lái yuè duō, ràng rén shǎngxīn-yuèmù.',
      note:'越来越 + tính từ 多; vế sau 让人 + thành ngữ, không thêm 很.',pair:'越来越'}
   ]},

  {n:9,zh:'般',py:'bān',pos:'Trợ từ',vn:'giống như, tựa như',hv:'ban',em:'🪞',lesson:1,
   explain:['Trợ từ, nghĩa là "一样, 似的" (giống như). Đứng SAU danh từ, tạo thành cụm làm định ngữ hoặc trạng ngữ.','Thường có 像 / 如 phía trước: 像山泉般, 如……般. Sắc thái văn viết, giàu hình ảnh.'],
   usage:'N + 般 (的) + N: 阳光般的笑容. N + 般 (地) + V / Adj: 雨点般不停地往下掉. Đã có 般 thì không thêm 一样 (thừa).',
   collo:['像山泉般','阳光般的笑容','雨点般','雪片般'],
   ex_zh:'紫的像山泉般清淡可口。',ex_py:'Zǐ de xiàng shānquán bān qīngdàn kěkǒu.',ex_vn:'Củ tím thanh mát, ngon miệng như nước suối trên núi.',
   exList:[
     {zh:'紫的像山泉般清淡可口。',py:'Zǐ de xiàng shānquán bān qīngdàn kěkǒu.',vn:'Củ tím thanh mát, ngon miệng như nước suối trên núi.'},
     {zh:'说起那段往事，她的脸上露出了阳光般的笑容。',py:'Shuōqǐ nà duàn wǎngshì, tā de liǎn shang lùchūle yángguāng bān de xiàoróng.',vn:'Nhắc lại chuyện xưa, trên mặt cô ấy nở nụ cười rạng rỡ như ánh nắng.'},
     {zh:'望着爸爸远去的背影，我的眼泪雨点般不停地往下掉。',py:'Wàngzhe bàba yuǎnqù de bèiyǐng, wǒ de yǎnlèi yǔdiǎn bān bù tíng de wǎng xià diào.',vn:'Nhìn theo bóng lưng bố xa dần, nước mắt tôi rơi không ngừng như mưa.'}
   ],
   colloFull:[
     {zh:'像山泉般',py:'xiàng shānquán bān',vn:'như nước suối trên núi'},
     {zh:'阳光般的笑容',py:'yángguāng bān de xiàoróng',vn:'nụ cười như ánh nắng'},
     {zh:'雨点般',py:'yǔdiǎn bān',vn:'như hạt mưa'},
     {zh:'雪片般',py:'xuěpiàn bān',vn:'như bông tuyết'},
     {zh:'金子般宝贵',py:'jīnzi bān bǎoguì',vn:'quý như vàng'}
   ],
   patterns:[
     {s:'(像 / 如) + N + 般 + 的 + N',m:'Định ngữ so sánh: 阳光般的笑容'},
     {s:'(像 / 如) + N + 般 + (地) + V / Adj',m:'Trạng ngữ / vị ngữ so sánh: 雨点般往下掉, 像山泉般清淡'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi bị nụ cười rạng rỡ như ánh nắng của cô ấy làm cảm động.',answer:'我被她阳光般的笑容打动了。',answerPy:'Wǒ bèi tā yángguāng bān de xiàoróng dǎdòng le.',
      note:'被 + tác nhân (她阳光般的笑容) + V + bổ ngữ; 阳光般的 làm định ngữ cho 笑容.',pair:'被'},
     {promptLang:'vi',prompt:'Vừa nhắc đến con gái, trên mặt ông ấy đã nở nụ cười rạng rỡ như ánh nắng.',answer:'一说起女儿，他的脸上就露出了阳光般的笑容。',answerPy:'Yì shuōqǐ nǚ\'ér, tā de liǎn shang jiù lùchūle yángguāng bān de xiàoróng.',
      note:'一……就…… nối hai việc xảy ra liền nhau; 露 trong 露出 đọc lù.',pair:'一……就……'}
   ]},

  {n:10,zh:'清淡',py:'qīngdàn',pos:'Tính từ',vn:'nhẹ, thanh đạm, dễ tiêu',hv:'thanh đạm',em:'🥗',lesson:1,
   explain:['(Món ăn) ít dầu mỡ, ít gia vị, vị nhẹ, dễ tiêu. Trái nghĩa: 油腻, 口味重.','Cũng dùng cho màu sắc, mùi hương nhạt, nhẹ nhàng: 清淡的花香.'],
   usage:'Hay gặp: 饭菜清淡, 吃得清淡一点儿, 口味清淡, 清淡的菜, 清淡可口.',
   collo:['饭菜清淡','口味清淡','吃得清淡','清淡的菜'],
   ex_zh:'饭菜很清淡、很平常，却给我留下了极深的印象。',ex_py:'Fàncài hěn qīngdàn, hěn píngcháng, què gěi wǒ liúxiàle jí shēn de yìnxiàng.',ex_vn:'Cơm canh rất thanh đạm, rất bình thường nhưng lại để lại cho tôi ấn tượng vô cùng sâu sắc.',
   exList:[
     {zh:'饭菜很清淡、很平常，却给我留下了极深的印象。',py:'Fàncài hěn qīngdàn, hěn píngcháng, què gěi wǒ liúxiàle jí shēn de yìnxiàng.',vn:'Cơm canh rất thanh đạm, rất bình thường nhưng lại để lại cho tôi ấn tượng vô cùng sâu sắc.'},
     {zh:'医生说我最近要吃得清淡一点儿。',py:'Yīshēng shuō wǒ zuìjìn yào chī de qīngdàn yìdiǎnr.',vn:'Bác sĩ bảo dạo này tôi phải ăn nhạt một chút.'},
     {zh:'我奶奶口味清淡，不喜欢吃辣的。',py:'Wǒ nǎinai kǒuwèi qīngdàn, bù xǐhuan chī là de.',vn:'Bà tôi ăn nhạt, không thích ăn cay.'}
   ],
   colloFull:[
     {zh:'饭菜清淡',py:'fàncài qīngdàn',vn:'cơm canh thanh đạm'},
     {zh:'口味清淡',py:'kǒuwèi qīngdàn',vn:'khẩu vị nhạt'},
     {zh:'吃得清淡',py:'chī de qīngdàn',vn:'ăn nhạt'},
     {zh:'清淡的菜',py:'qīngdàn de cài',vn:'món ăn thanh đạm'},
     {zh:'清淡可口',py:'qīngdàn kěkǒu',vn:'thanh đạm mà ngon miệng'}
   ],
   patterns:[
     {s:'V + 得 + 清淡 + 一点儿',m:'Khuyên ăn / nấu nhạt hơn'},
     {s:'清淡 + 可口',m:'Cặp tính từ khen món ăn nhẹ mà ngon'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món này tuy thanh đạm nhưng rất ngon.',answer:'这个菜虽然很清淡，但是很好吃。',answerPy:'Zhège cài suīrán hěn qīngdàn, dànshì hěn hǎochī.',
      note:'虽然 đứng sau chủ ngữ 这个菜; vế sau 但是 lật lại ý.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần ăn nhạt một chút là dạ dày sẽ dễ chịu hơn.',answer:'只要吃得清淡一点儿，胃就会舒服一些。',answerPy:'Zhǐyào chī de qīngdàn yìdiǎnr, wèi jiù huì shūfu yìxiē.',
      note:'只要 + điều kiện; vế sau: chủ ngữ 胃 + 就 + 会.',pair:'只要……就……'}
   ]},

  {n:11,zh:'可口',py:'kěkǒu',pos:'Tính từ',vn:'ngon, ngon miệng',hv:'khả khẩu',em:'😋',lesson:1,
   explain:['(Đồ ăn, thức uống) ngon miệng, hợp khẩu vị. 可 = hợp, 口 = miệng.','Hay đi đôi: 清淡可口, 香甜可口, 味香可口.'],
   usage:'Chỉ dùng cho đồ ăn, thức uống, không dùng cho người. Thường làm vị ngữ: 这道菜很可口; định ngữ: 可口的饭菜.',
   collo:['清淡可口','香甜可口','可口的饭菜','味香可口'],
   ex_zh:'此菜的特点是色彩美观，咸鲜滑嫩，味香可口，营养丰富。',ex_py:'Cǐ cài de tèdiǎn shì sècǎi měiguān, xián xiān huá nèn, wèi xiāng kěkǒu, yíngyǎng fēngfù.',ex_vn:'Đặc điểm của món này là màu sắc đẹp mắt, đậm đà mềm mượt, thơm ngon hợp miệng, giàu dinh dưỡng.',
   exList:[
     {zh:'此菜的特点是色彩美观，咸鲜滑嫩，味香可口，营养丰富。',py:'Cǐ cài de tèdiǎn shì sècǎi měiguān, xián xiān huá nèn, wèi xiāng kěkǒu, yíngyǎng fēngfù.',vn:'Đặc điểm của món này là màu sắc đẹp mắt, đậm đà mềm mượt, thơm ngon hợp miệng, giàu dinh dưỡng.'},
     {zh:'妈妈做的饭菜又便宜又可口。',py:'Māma zuò de fàncài yòu piányi yòu kěkǒu.',vn:'Cơm mẹ nấu vừa rẻ vừa ngon.'},
     {zh:'这家饭馆的菜清淡可口，我来过好几次了。',py:'Zhè jiā fànguǎn de cài qīngdàn kěkǒu, wǒ láiguo hǎo jǐ cì le.',vn:'Món ở quán này thanh đạm dễ ăn, tôi đến mấy lần rồi.'}
   ],
   colloFull:[
     {zh:'清淡可口',py:'qīngdàn kěkǒu',vn:'thanh đạm dễ ăn'},
     {zh:'香甜可口',py:'xiāngtián kěkǒu',vn:'thơm ngọt ngon miệng'},
     {zh:'可口的饭菜',py:'kěkǒu de fàncài',vn:'cơm canh ngon miệng'},
     {zh:'味香可口',py:'wèi xiāng kěkǒu',vn:'thơm ngon hợp miệng'},
     {zh:'十分可口',py:'shífēn kěkǒu',vn:'rất ngon miệng'}
   ],
   patterns:[
     {s:'N (món ăn) + 清淡 / 香甜 + 可口',m:'Khen món ăn ngon'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn ở quán này không chỉ ngon miệng mà cũng không đắt.',answer:'这家饭馆的菜不仅可口，也不贵。',answerPy:'Zhè jiā fànguǎn de cài bùjǐn kěkǒu, yě bú guì.',
      note:'不仅 + ưu điểm 1, 也 + ưu điểm 2 (cùng chủ ngữ 菜).',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Những món ăn ngon miệng này đều là bố nấu.',answer:'这些可口的饭菜都是爸爸做的。',answerPy:'Zhèxiē kěkǒu de fàncài dōu shì bàba zuò de.',
      note:'是……的 nhấn mạnh người làm; 都 đứng trước 是.',pair:'是……的'}
   ]},

  {n:12,zh:'夸',py:'kuā',pos:'Động từ',vn:'khen ngợi; khoe',hv:'khoa',em:'👍',lesson:1,
   explain:['Khen, khen ngợi (khẩu ngữ, = 称赞): 夸孩子聪明.','Còn có nghĩa khoác lác, nói quá: 夸口, 夸张.'],
   usage:'夸 + người + tính từ / cụm: 老师夸他聪明. Bị động: 被老师夸了. 夸奖 là từ đầy đủ, trang trọng hơn.',
   collo:['夸孩子','被老师夸','夸他聪明','夸个不停'],
   ex_zh:'父老乡亲们夸它说：“橘子、葡萄、梨，比不上咱的萝卜皮。”',ex_py:'Fùlǎo xiāngqīnmen kuā tā shuō: "Júzi, pútao, lí, bǐ bu shàng zán de luóbo pí."',ex_vn:'Bà con cô bác quê tôi khen nó rằng: "Quýt, nho hay lê, chẳng bằng vỏ củ cải quê ta."',
   exList:[
     {zh:'父老乡亲们夸它说：“橘子、葡萄、梨，比不上咱的萝卜皮。”',py:'Fùlǎo xiāngqīnmen kuā tā shuō: "Júzi, pútao, lí, bǐ bu shàng zán de luóbo pí."',vn:'Bà con cô bác quê tôi khen nó rằng: "Quýt, nho hay lê, chẳng bằng vỏ củ cải quê ta."'},
     {zh:'今天我被老师夸了，特别开心。',py:'Jīntiān wǒ bèi lǎoshī kuā le, tèbié kāixīn.',vn:'Hôm nay tôi được cô khen, vui lắm.'},
     {zh:'大家都夸他汉字写得漂亮。',py:'Dàjiā dōu kuā tā Hànzì xiě de piàoliang.',vn:'Mọi người đều khen cậu ấy viết chữ Hán đẹp.'}
   ],
   colloFull:[
     {zh:'夸孩子',py:'kuā háizi',vn:'khen con'},
     {zh:'被老师夸',py:'bèi lǎoshī kuā',vn:'được thầy cô khen'},
     {zh:'夸他聪明',py:'kuā tā cōngmíng',vn:'khen cậu ấy thông minh'},
     {zh:'夸个不停',py:'kuā ge bù tíng',vn:'khen không ngớt'},
     {zh:'夸奖',py:'kuājiǎng',vn:'khen ngợi'}
   ],
   patterns:[
     {s:'夸 + người + (V 得) + Adj',m:'Khen ai đó thế nào'},
     {s:'被 + người + 夸 (了)',m:'Được ai khen'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay tôi được cô giáo khen.',answer:'今天我被老师夸了。',answerPy:'Jīntiān wǒ bèi lǎoshī kuā le.',
      note:'被 + người khen + 夸 + 了; động từ đơn tiết sau 被 cần có 了 đi kèm.',pair:'被'},
     {promptLang:'vi',prompt:'Đến ông nội ít nói cũng khen cái bánh này ngon.',answer:'连不爱说话的爷爷都夸这个饼好吃。',answerPy:'Lián bú ài shuōhuà de yéye dōu kuā zhège bǐng hǎochī.',
      note:'连 + người ít khi khen nhất + 都 + 夸; 不 trước 爱 (thanh 4) đọc bú.',pair:'连……都……'}
   ]},

  {n:13,zh:'橘子',py:'júzi',pos:'Danh từ',vn:'quả quýt',hv:'quất tử',em:'🍊',lesson:1,
   explain:['Quả quýt: vỏ màu cam, dễ bóc, múi ngọt hơi chua.'],
   usage:'Lượng từ: 一个橘子, 一斤橘子. Hay gặp: 剥橘子, 橘子皮, 橘子汁.',
   collo:['剥橘子','橘子皮','橘子汁','一斤橘子'],
   ex_zh:'橘子、葡萄、梨，比不上咱的萝卜皮。',ex_py:'Júzi, pútao, lí, bǐ bu shàng zán de luóbo pí.',ex_vn:'Quýt, nho hay lê, chẳng bằng vỏ củ cải quê ta.',
   exList:[
     {zh:'橘子、葡萄、梨，比不上咱的萝卜皮。',py:'Júzi, pútao, lí, bǐ bu shàng zán de luóbo pí.',vn:'Quýt, nho hay lê, chẳng bằng vỏ củ cải quê ta.'},
     {zh:'过年的时候，家里总是摆着一盘橘子。',py:'Guònián de shíhou, jiā li zǒngshì bǎizhe yì pán júzi.',vn:'Dịp Tết, trong nhà lúc nào cũng bày một đĩa quýt.'},
     {zh:'我帮奶奶剥了一个橘子。',py:'Wǒ bāng nǎinai bāole yí ge júzi.',vn:'Tôi bóc giúp bà một quả quýt.'}
   ],
   colloFull:[
     {zh:'剥橘子',py:'bāo júzi',vn:'bóc quýt'},
     {zh:'橘子皮',py:'júzi pí',vn:'vỏ quýt'},
     {zh:'橘子汁',py:'júzizhī',vn:'nước quýt'},
     {zh:'一斤橘子',py:'yì jīn júzi',vn:'một cân quýt'},
     {zh:'酸甜的橘子',py:'suāntián de júzi',vn:'quýt chua ngọt'}
   ],
   patterns:[
     {s:'Số từ + 个 / 斤 + 橘子',m:'Đếm, cân quýt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em trai đã ăn hết quýt rồi.',answer:'弟弟把橘子都吃完了。',answerPy:'Dìdi bǎ júzi dōu chīwán le.',
      note:'把 + tân ngữ xác định (橘子) + 都 + V + bổ ngữ kết quả 完 + 了.',pair:'把'},
     {promptLang:'vi',prompt:'Quýt càng ngày càng đắt.',answer:'橘子越来越贵了。',answerPy:'Júzi yuè lái yuè guì le.',
      note:'越来越 + tính từ, không thêm 很; cuối câu 了 báo thay đổi.',pair:'越来越'}
   ]},

  {n:14,zh:'梨',py:'lí',pos:'Danh từ',vn:'quả lê',hv:'lê',em:'🍐',lesson:1,
   explain:['Quả lê: thịt trắng, nhiều nước, ngọt mát.','Kiêng kỵ: người Trung Quốc tránh bổ đôi quả lê để chia nhau (分梨 đồng âm 分离 — chia lìa).'],
   usage:'Lượng từ: 一个梨. Hay gặp: 削梨 (gọt lê), 梨汁, 又甜又脆的梨.',
   collo:['削梨','一个梨','梨汁','又甜又脆的梨'],
   ex_zh:'妈妈给我削了一个梨。',ex_py:'Māma gěi wǒ xiāole yí ge lí.',ex_vn:'Mẹ gọt cho tôi một quả lê.',
   exList:[
     {zh:'妈妈给我削了一个梨。',py:'Māma gěi wǒ xiāole yí ge lí.',vn:'Mẹ gọt cho tôi một quả lê.'},
     {zh:'橘子、葡萄、梨，比不上咱的萝卜皮。',py:'Júzi, pútao, lí, bǐ bu shàng zán de luóbo pí.',vn:'Quýt, nho hay lê, chẳng bằng vỏ củ cải quê ta.'},
     {zh:'这种梨又甜又脆，水分特别多。',py:'Zhè zhǒng lí yòu tián yòu cuì, shuǐfèn tèbié duō.',vn:'Loại lê này vừa ngọt vừa giòn, rất nhiều nước.'}
   ],
   colloFull:[
     {zh:'削梨',py:'xiāo lí',vn:'gọt lê'},
     {zh:'一个梨',py:'yí ge lí',vn:'một quả lê'},
     {zh:'梨汁',py:'lízhī',vn:'nước ép lê'},
     {zh:'又甜又脆的梨',py:'yòu tián yòu cuì de lí',vn:'lê vừa ngọt vừa giòn'},
     {zh:'分梨',py:'fēn lí',vn:'bổ đôi lê (kiêng kỵ)'}
   ],
   patterns:[
     {s:'给 + người + 削 + 一个梨',m:'Gọt lê cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỗ lê này là bà ngoại mang từ quê lên.',answer:'这些梨是外婆从老家带来的。',answerPy:'Zhèxiē lí shì wàipó cóng lǎojiā dàilái de.',
      note:'是……的 nhấn mạnh người và nơi xuất phát của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa từng ăn loại lê ngọt thế này.',answer:'我从来没吃过这么甜的梨。',answerPy:'Wǒ cónglái méi chīguo zhème tián de lí.',
      note:'从来没 + V + 过 + tân ngữ; 这么甜的 làm định ngữ cho 梨.',pair:'从来没……过'}
   ]},

  {n:15,zh:'炒',py:'chǎo',pos:'Động từ',vn:'xào, rang',hv:'sao',em:'🍳',lesson:1,
   explain:['Xào / rang: cho thức ăn vào chảo nóng (thường có dầu), đảo liên tục cho chín: 炒菜, 炒鸡蛋, 炒饭. Tiếng Việt cũng có "sao" (sao chè, sao thuốc) = rang.','Nghĩa bóng (khẩu ngữ): 炒股 (lướt sóng cổ phiếu), 炒鱿鱼 (đuổi việc).'],
   usage:'炒 + món: 炒菜, 炒肉丝. Bổ ngữ: 炒好, 炒熟, 炒糊. 炒菜 còn có nghĩa chung là "nấu ăn".',
   collo:['炒菜','炒鸡蛋','炒肉丝','炒熟'],
   ex_zh:'萝卜饼的做法极其简单，既不必炒或煮，也不用油炸。',ex_py:'Luóbobǐng de zuòfǎ jíqí jiǎndān, jì búbì chǎo huò zhǔ, yě búyòng yóuzhá.',ex_vn:'Cách làm bánh củ cải cực kỳ đơn giản, không cần xào hay nấu, cũng không phải chiên dầu.',
   exList:[
     {zh:'萝卜饼的做法极其简单，既不必炒或煮，也不用油炸。',py:'Luóbobǐng de zuòfǎ jíqí jiǎndān, jì búbì chǎo huò zhǔ, yě búyòng yóuzhá.',vn:'Cách làm bánh củ cải cực kỳ đơn giản, không cần xào hay nấu, cũng không phải chiên dầu.'},
     {zh:'我会做的第一个菜是西红柿炒鸡蛋。',py:'Wǒ huì zuò de dì-yī ge cài shì xīhóngshì chǎo jīdàn.',vn:'Món đầu tiên tôi biết nấu là trứng xào cà chua.'},
     {zh:'肉丝要炒熟了才能放辣椒。',py:'Ròusī yào chǎoshú le cái néng fàng làjiāo.',vn:'Thịt thái sợi phải xào chín rồi mới cho ớt.'}
   ],
   colloFull:[
     {zh:'炒菜',py:'chǎo cài',vn:'xào rau; nấu ăn'},
     {zh:'炒鸡蛋',py:'chǎo jīdàn',vn:'trứng xào'},
     {zh:'炒肉丝',py:'chǎo ròusī',vn:'thịt thái sợi xào'},
     {zh:'炒熟',py:'chǎoshú',vn:'xào chín'},
     {zh:'炒饭',py:'chǎofàn',vn:'cơm rang'}
   ],
   patterns:[
     {s:'A 炒 B (西红柿炒鸡蛋)',m:'Tên món: nguyên liệu A xào với B'},
     {s:'炒 + 好 / 熟 / 糊',m:'Bổ ngữ kết quả sau 炒'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã xào chín thịt rồi.',answer:'我已经把肉炒熟了。',answerPy:'Wǒ yǐjīng bǎ ròu chǎoshú le.',
      note:'已经 đứng trước 把; 把 + tân ngữ + V + bổ ngữ kết quả 熟.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi vừa học được cách xào rau là ngày nào cũng nấu cho mẹ ăn.',answer:'我一学会炒菜，就天天做给妈妈吃。',answerPy:'Wǒ yì xuéhuì chǎo cài, jiù tiāntiān zuò gěi māma chī.',
      note:'一 + V (việc trước), 就 + V (việc tiếp ngay sau); 一 trước thanh 2 (学) đọc yì.',pair:'一……就……'}
   ]},

  {n:16,zh:'煮',py:'zhǔ',pos:'Động từ',vn:'nấu, đun, luộc',hv:'chử',em:'🍲',lesson:1,
   explain:['Cho thức ăn vào nước rồi đun sôi cho chín: 煮饺子, 煮鸡蛋, 煮面条. Khác 炒 (xào trong chảo, ít nước) và 油炸 (chiên ngập dầu).','Đun sôi nước, cà phê cũng dùng 煮: 煮咖啡, 煮开水.'],
   usage:'煮 + món ăn; bổ ngữ hay gặp: 煮熟, 煮开, 煮烂, 煮好 (bảng 词语搭配: 炒/煮/炸 + 好/熟/烂/透).',
   collo:['煮饺子','煮鸡蛋','煮面条','煮熟'],
   ex_zh:'萝卜饼的做法极其简单，既不必炒或煮，也不用油炸。',ex_py:'Luóbobǐng de zuòfǎ jíqí jiǎndān, jì búbì chǎo huò zhǔ, yě búyòng yóuzhá.',ex_vn:'Cách làm bánh củ cải cực kỳ đơn giản, không cần xào hay nấu, cũng không phải chiên dầu.',
   exList:[
     {zh:'萝卜饼的做法极其简单，既不必炒或煮，也不用油炸。',py:'Luóbobǐng de zuòfǎ jíqí jiǎndān, jì búbì chǎo huò zhǔ, yě búyòng yóuzhá.',vn:'Cách làm bánh củ cải cực kỳ đơn giản, không cần xào hay nấu, cũng không phải chiên dầu.'},
     {zh:'饺子煮熟后要趁热吃才好。',py:'Jiǎozi zhǔshú hòu yào chèn rè chī cái hǎo.',vn:'Sủi cảo luộc chín rồi phải ăn lúc còn nóng mới ngon.'},
     {zh:'妈妈每天早上都给我煮一个鸡蛋。',py:'Māma měi tiān zǎoshang dōu gěi wǒ zhǔ yí ge jīdàn.',vn:'Sáng nào mẹ cũng luộc cho tôi một quả trứng.'}
   ],
   colloFull:[
     {zh:'煮饺子',py:'zhǔ jiǎozi',vn:'luộc sủi cảo'},
     {zh:'煮鸡蛋',py:'zhǔ jīdàn',vn:'luộc trứng; trứng luộc'},
     {zh:'煮面条',py:'zhǔ miàntiáo',vn:'nấu mì'},
     {zh:'煮熟',py:'zhǔshú',vn:'nấu chín'},
     {zh:'煮咖啡',py:'zhǔ kāfēi',vn:'pha (đun) cà phê'}
   ],
   patterns:[
     {s:'煮 + 熟 / 开 / 烂 / 好',m:'Bổ ngữ kết quả sau 煮'},
     {s:'既不必炒或煮，也不用……',m:'Liệt kê các cách nấu không cần dùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đun sôi nước trước, rồi hẵng cho mì vào.',answer:'你先把水煮开，再放面条。',answerPy:'Nǐ xiān bǎ shuǐ zhǔkāi, zài fàng miàntiáo.',
      note:'把 + 水 + 煮开 (bổ ngữ kết quả); 先……再…… nối hai bước nấu.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi chưa từng tự nấu cơm bao giờ.',answer:'我从来没自己煮过饭。',answerPy:'Wǒ cónglái méi zìjǐ zhǔguo fàn.',
      note:'从来没 + (自己) + V + 过; 过 bám ngay sau 煮.',pair:'从来没……过'}
   ]},

  {n:17,zh:'油炸',py:'yóuzhá',pos:'Động từ',vn:'chiên (ngập dầu)',hv:'du tạc',em:'🍟',lesson:1,
   explain:['Cho thức ăn vào nhiều dầu nóng để chiên cho chín giòn. 油 = dầu, 炸 = chiên.','Hay dùng làm định ngữ: 油炸食品 (đồ chiên rán) — thường bị coi là không tốt cho sức khoẻ.'],
   usage:'油炸 + N: 油炸食品, 油炸鸡翅. Riêng động từ đơn 炸 cũng dùng: 炸鸡, 炸薯条, 炸好. Chú ý 炸 ở đây đọc zhá (thanh 2), khác 爆炸 bàozhà.',
   collo:['油炸食品','油炸鸡翅','不用油炸','油炸的东西'],
   ex_zh:'油炸食品不健康，少吃一点儿就行了。',ex_py:'Yóuzhá shípǐn bú jiànkāng, shǎo chī yìdiǎnr jiù xíng le.',ex_vn:'Đồ chiên rán không tốt cho sức khoẻ, ăn ít đi một chút là được.',
   exList:[
     {zh:'萝卜饼既不必炒或煮，也不用油炸。',py:'Luóbobǐng jì búbì chǎo huò zhǔ, yě búyòng yóuzhá.',vn:'Bánh củ cải không cần xào hay nấu, cũng không phải chiên dầu.'},
     {zh:'油炸食品不健康，少吃一点儿就行了。',py:'Yóuzhá shípǐn bú jiànkāng, shǎo chī yìdiǎnr jiù xíng le.',vn:'Đồ chiên rán không tốt cho sức khoẻ, ăn ít đi một chút là được.'},
     {zh:'学校门口那家店的油炸鸡翅特别受学生欢迎。',py:'Xuéxiào ménkǒu nà jiā diàn de yóuzhá jīchì tèbié shòu xuésheng huānyíng.',vn:'Cánh gà chiên của quán trước cổng trường rất được học sinh ưa chuộng.'}
   ],
   colloFull:[
     {zh:'油炸食品',py:'yóuzhá shípǐn',vn:'đồ chiên rán'},
     {zh:'油炸鸡翅',py:'yóuzhá jīchì',vn:'cánh gà chiên'},
     {zh:'不用油炸',py:'búyòng yóuzhá',vn:'không cần chiên dầu'},
     {zh:'油炸的东西',py:'yóuzhá de dōngxi',vn:'đồ chiên'},
     {zh:'炸薯条',py:'zhá shǔtiáo',vn:'khoai tây chiên'}
   ],
   patterns:[
     {s:'油炸 + N (食品 / 鸡翅 / 花生)',m:'Món chiên ngập dầu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đồ chiên rán tuy ngon nhưng không tốt cho sức khoẻ.',answer:'油炸食品虽然好吃，但是对身体不好。',answerPy:'Yóuzhá shípǐn suīrán hǎochī, dànshì duì shēntǐ bù hǎo.',
      note:'虽然 đứng sau chủ ngữ 油炸食品; vế sau 但是 lật ý.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Người trẻ ăn đồ chiên rán ngày càng nhiều.',answer:'吃油炸食品的年轻人越来越多了。',answerPy:'Chī yóuzhá shípǐn de niánqīngrén yuè lái yuè duō le.',
      note:'Cụm 吃油炸食品的 làm định ngữ cho 年轻人; 越来越 + 多 + 了.',pair:'越来越'}
   ]},

  {n:18,zh:'切',py:'qiē',pos:'Động từ',vn:'cắt, thái',hv:'thiết',em:'🔪',lesson:1,
   explain:['Dùng dao cắt vật thành từng phần: 切菜, 切肉, 切蛋糕.','Chú ý: đọc qiē khi là động từ "cắt"; đọc qiè trong 一切 (tất cả), 亲切, 切实.'],
   usage:'切 + 成 + hình dạng: 切成块, 切成丝, 切成片. 把 + N + 切成…… là mẫu câu rất hay gặp khi nấu ăn.',
   collo:['切菜','切肉','切蛋糕','切成块'],
   ex_zh:'最后用刀切成块状，饼便做好了。',ex_py:'Zuìhòu yòng dāo qiēchéng kuàizhuàng, bǐng biàn zuòhǎo le.',ex_vn:'Cuối cùng dùng dao cắt thành miếng, thế là bánh đã làm xong.',
   exList:[
     {zh:'先把三色萝卜洗净切丝，放入油、盐等。',py:'Xiān bǎ sān sè luóbo xǐjìng qiē sī, fàngrù yóu, yán děng.',vn:'Trước tiên rửa sạch củ cải ba màu, thái sợi, cho dầu, muối… vào.'},
     {zh:'最后用刀切成块状，饼便做好了。',py:'Zuìhòu yòng dāo qiēchéng kuàizhuàng, bǐng biàn zuòhǎo le.',vn:'Cuối cùng dùng dao cắt thành miếng, thế là bánh đã làm xong.'},
     {zh:'你帮我把生日蛋糕切成八块吧。',py:'Nǐ bāng wǒ bǎ shēngrì dàngāo qiēchéng bā kuài ba.',vn:'Bạn giúp tôi cắt bánh sinh nhật thành tám miếng nhé.'}
   ],
   colloFull:[
     {zh:'切菜',py:'qiē cài',vn:'thái rau'},
     {zh:'切肉',py:'qiē ròu',vn:'thái thịt'},
     {zh:'切蛋糕',py:'qiē dàngāo',vn:'cắt bánh ngọt'},
     {zh:'切成块',py:'qiēchéng kuài',vn:'cắt thành miếng'},
     {zh:'切丝',py:'qiē sī',vn:'thái sợi'}
   ],
   patterns:[
     {s:'把 + N + 切成 + 块 / 丝 / 片',m:'Thái cái gì thành hình dạng gì'},
     {s:'用刀切',m:'Dùng dao cắt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy cắt cái bánh này thành tám miếng.',answer:'请把这个蛋糕切成八块。',answerPy:'Qǐng bǎ zhège dàngāo qiēchéng bā kuài.',
      note:'把 + tân ngữ xác định + 切成 + số lượng; 成 là bổ ngữ chỉ kết quả biến đổi.',pair:'把'},
     {promptLang:'vi',prompt:'Ngón tay tôi bị dao cứa rách rồi.',answer:'我的手指被刀切破了。',answerPy:'Wǒ de shǒuzhǐ bèi dāo qiēpò le.',
      note:'被 + công cụ/tác nhân (刀) + 切破 + 了 — việc không mong muốn.',pair:'被'}
   ]},

  {n:19,zh:'丝',py:'sī',pos:'Danh từ',vn:'sợi (thứ thái mảnh như sợi)',hv:'ti',em:'🧵',lesson:1,
   explain:['Sợi tơ; mở rộng ra chỉ mọi thứ mảnh như sợi: 萝卜丝, 土豆丝, 肉丝. Khẩu ngữ hay nhi hoá: 丝儿.','Còn làm lượng từ chỉ lượng rất nhỏ: 一丝笑容 (một nụ cười thoáng qua), 一丝希望.'],
   usage:'N + 丝: 萝卜丝, 肉丝, 土豆丝. 切丝 / 切成丝 = thái sợi. 一丝 + N trừu tượng = một chút xíu.',
   collo:['萝卜丝','土豆丝','肉丝','切丝'],
   ex_zh:'拌好的萝卜丝儿铺到饼上后，得再折叠两三次。',ex_py:'Bànhǎo de luóbosīr pūdào bǐng shang hòu, děi zài zhédié liǎng-sān cì.',ex_vn:'Sau khi rải sợi củ cải đã trộn lên bánh, còn phải gấp lại hai ba lần.',
   exList:[
     {zh:'拌好的萝卜丝儿铺到饼上后，得再折叠两三次。',py:'Bànhǎo de luóbosīr pūdào bǐng shang hòu, děi zài zhédié liǎng-sān cì.',vn:'Sau khi rải sợi củ cải đã trộn lên bánh, còn phải gấp lại hai ba lần.'},
     {zh:'我教你啊，把肉切丝，辣椒、土豆也都一样。',py:'Wǒ jiāo nǐ a, bǎ ròu qiē sī, làjiāo, tǔdòu yě dōu yíyàng.',vn:'Để tôi chỉ cho: thái thịt thành sợi, ớt và khoai tây cũng vậy.'},
     {zh:'我最爱吃妈妈炒的土豆丝。',py:'Wǒ zuì ài chī māma chǎo de tǔdòusī.',vn:'Tôi thích nhất món khoai tây sợi xào mẹ làm.'}
   ],
   colloFull:[
     {zh:'萝卜丝',py:'luóbosī',vn:'sợi củ cải'},
     {zh:'土豆丝',py:'tǔdòusī',vn:'khoai tây sợi'},
     {zh:'肉丝',py:'ròusī',vn:'thịt thái sợi'},
     {zh:'切丝',py:'qiē sī',vn:'thái sợi'},
     {zh:'一丝笑容',py:'yì sī xiàoróng',vn:'một nụ cười thoáng qua'}
   ],
   patterns:[
     {s:'把 + N + 切(成)丝',m:'Thái cái gì thành sợi'},
     {s:'一丝 + 希望 / 笑容',m:'Một chút xíu (trừu tượng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã thái khoai tây thành sợi rồi.',answer:'我已经把土豆切成丝了。',answerPy:'Wǒ yǐjīng bǎ tǔdòu qiēchéng sī le.',
      note:'已经 đứng trước 把; 把 + 土豆 + 切成丝 + 了.',pair:'把'},
     {promptLang:'vi',prompt:'Đĩa khoai tây sợi này là tôi tự xào đấy.',answer:'这盘土豆丝是我自己炒的。',answerPy:'Zhè pán tǔdòusī shì wǒ zìjǐ chǎo de.',
      note:'是……的 nhấn mạnh người làm (我自己) của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:20,zh:'搅拌',py:'jiǎobàn',pos:'Động từ',vn:'khuấy, trộn',hv:'giảo bạn',em:'🥣',lesson:1,
   explain:['Dùng đũa, thìa… đảo đi đảo lại cho các thứ hoà đều vào nhau.','Bảng 词语搭配: 搅拌 / 翻炒 + 均匀 — trộn đều, đảo đều.'],
   usage:'搅拌 + 均匀 / 一下; 用筷子 / 勺子搅拌. 拌 đơn lẻ cũng dùng: 拌好的萝卜丝, 凉拌黄瓜.',
   collo:['搅拌均匀','用筷子搅拌','搅拌一下','不停地搅拌'],
   ex_zh:'用筷子搅拌均匀，萝卜饼的原料便做成了。',ex_py:'Yòng kuàizi jiǎobàn jūnyún, luóbobǐng de yuánliào biàn zuòchéng le.',ex_vn:'Dùng đũa trộn đều, thế là nguyên liệu bánh củ cải đã xong.',
   exList:[
     {zh:'用筷子搅拌均匀，萝卜饼的原料便做成了。',py:'Yòng kuàizi jiǎobàn jūnyún, luóbobǐng de yuánliào biàn zuòchéng le.',vn:'Dùng đũa trộn đều, thế là nguyên liệu bánh củ cải đã xong.'},
     {zh:'做蛋糕的时候，要把鸡蛋和面粉搅拌在一起。',py:'Zuò dàngāo de shíhou, yào bǎ jīdàn hé miànfěn jiǎobàn zài yìqǐ.',vn:'Khi làm bánh ngọt phải trộn trứng với bột mì vào nhau.'},
     {zh:'咖啡里放了糖，你搅拌一下再喝。',py:'Kāfēi li fàngle táng, nǐ jiǎobàn yíxià zài hē.',vn:'Cà phê cho đường rồi, bạn khuấy một chút rồi hẵng uống.'}
   ],
   colloFull:[
     {zh:'搅拌均匀',py:'jiǎobàn jūnyún',vn:'trộn đều'},
     {zh:'用筷子搅拌',py:'yòng kuàizi jiǎobàn',vn:'trộn bằng đũa'},
     {zh:'搅拌一下',py:'jiǎobàn yíxià',vn:'khuấy một chút'},
     {zh:'不停地搅拌',py:'bù tíng de jiǎobàn',vn:'khuấy liên tục'},
     {zh:'搅拌机',py:'jiǎobànjī',vn:'máy xay, máy trộn'}
   ],
   patterns:[
     {s:'用 + 工具 + 搅拌均匀',m:'Dùng gì để trộn đều'},
     {s:'把 A 和 B 搅拌在一起',m:'Trộn A với B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy trộn đều trứng và đường.',answer:'请把鸡蛋和糖搅拌均匀。',answerPy:'Qǐng bǎ jīdàn hé táng jiǎobàn jūnyún.',
      note:'把 + tân ngữ + 搅拌 + bổ ngữ 均匀 (bảng 词语搭配).',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần trộn đều thì bánh sẽ rất ngon.',answer:'只要搅拌均匀，饼就会很好吃。',answerPy:'Zhǐyào jiǎobàn jūnyún, bǐng jiù huì hěn hǎochī.',
      note:'只要 + điều kiện; vế sau chủ ngữ 饼 + 就 + 会.',pair:'只要……就……'}
   ]},

  {n:21,zh:'均匀',py:'jūnyún',pos:'Tính từ',vn:'đều, đều đặn',hv:'quân quân',em:'⚖️',lesson:1,
   explain:['Phân bố hoặc diễn ra đều nhau, không chỗ nhiều chỗ ít, không lúc nhanh lúc chậm: 呼吸均匀, 分布均匀.','Làm bổ ngữ (搅拌均匀), trạng ngữ (均匀地浇), vị ngữ (雨水分布很均匀).'],
   usage:'Khác 平均: 平均 là "bình quân / chia đều" (平均分数, 平均分配); 均匀 là trạng thái đều đặn (呼吸均匀). Không nói 呼吸很平均.',
   collo:['搅拌均匀','呼吸均匀','分布均匀','均匀地'],
   ex_zh:'女儿安静地睡在她身旁，呼吸也很均匀。',ex_py:'Nǚ\'ér ānjìng de shuì zài tā shēnpáng, hūxī yě hěn jūnyún.',ex_vn:'Con gái lặng lẽ ngủ bên cạnh cô, hơi thở cũng rất đều.',
   exList:[
     {zh:'用筷子搅拌均匀，萝卜饼的原料便做成了。',py:'Yòng kuàizi jiǎobàn jūnyún, luóbobǐng de yuánliào biàn zuòchéng le.',vn:'Dùng đũa trộn đều, thế là nguyên liệu bánh củ cải đã xong.'},
     {zh:'女儿安静地睡在她身旁，呼吸也很均匀。',py:'Nǚ\'ér ānjìng de shuì zài tā shēnpáng, hūxī yě hěn jūnyún.',vn:'Con gái lặng lẽ ngủ bên cạnh cô, hơi thở cũng rất đều.'},
     {zh:'最后，我们用酱油、白糖等做成汁，均匀地浇在鸡肉上就做好了。',py:'Zuìhòu, wǒmen yòng jiàngyóu, báitáng děng zuòchéng zhī, jūnyún de jiāo zài jīròu shang jiù zuòhǎo le.',vn:'Cuối cùng, chúng ta dùng xì dầu, đường… làm thành nước sốt, rưới đều lên thịt gà là xong.'}
   ],
   colloFull:[
     {zh:'搅拌均匀',py:'jiǎobàn jūnyún',vn:'trộn đều'},
     {zh:'呼吸均匀',py:'hūxī jūnyún',vn:'hơi thở đều'},
     {zh:'分布均匀',py:'fēnbù jūnyún',vn:'phân bố đều'},
     {zh:'均匀地',py:'jūnyún de',vn:'một cách đều đặn'},
     {zh:'翻炒均匀',py:'fānchǎo jūnyún',vn:'đảo đều'}
   ],
   patterns:[
     {s:'V (搅拌 / 翻炒) + 均匀',m:'Làm cho đều'},
     {s:'均匀地 + V',m:'Làm việc gì một cách đều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con phải rắc muối đều một chút.',answer:'你要把盐撒得均匀一点儿。',answerPy:'Nǐ yào bǎ yán sǎ de jūnyún yìdiǎnr.',
      note:'把 + 盐 + V + 得 + 均匀一点儿 (bổ ngữ trạng thái).',pair:'把'},
     {promptLang:'vi',prompt:'Vùng này tuy mưa không nhiều nhưng phân bố rất đều.',answer:'这个地区的雨水虽然不多，但是分布很均匀。',answerPy:'Zhège dìqū de yǔshuǐ suīrán bù duō, dànshì fēnbù hěn jūnyún.',
      note:'虽然 sau chủ ngữ 雨水; 分布 + 均匀 là cặp chủ–vị trong bảng 词语搭配.',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'原料',py:'yuánliào',pos:'Danh từ',vn:'nguyên liệu',hv:'nguyên liệu',em:'🧺',lesson:1,
   explain:['Vật liệu ban đầu dùng để làm ra món ăn hoặc sản phẩm. Trùng khít với tiếng Việt "nguyên liệu".'],
   usage:'Hay gặp: 主要原料, 准备原料, 原料简单, 原料价格. Nguyên liệu nấu ăn khẩu ngữ còn gọi 材料 / 食材.',
   collo:['主要原料','准备原料','原料简单','原料价格'],
   ex_zh:'用筷子搅拌均匀，萝卜饼的原料便做成了。',ex_py:'Yòng kuàizi jiǎobàn jūnyún, luóbobǐng de yuánliào biàn zuòchéng le.',ex_vn:'Dùng đũa trộn đều, thế là nguyên liệu bánh củ cải đã xong.',
   exList:[
     {zh:'用筷子搅拌均匀，萝卜饼的原料便做成了。',py:'Yòng kuàizi jiǎobàn jūnyún, luóbobǐng de yuánliào biàn zuòchéng le.',vn:'Dùng đũa trộn đều, thế là nguyên liệu bánh củ cải đã xong.'},
     {zh:'做这道菜的原料很简单，只有鸡蛋和西红柿。',py:'Zuò zhè dào cài de yuánliào hěn jiǎndān, zhǐ yǒu jīdàn hé xīhóngshì.',vn:'Nguyên liệu làm món này rất đơn giản, chỉ có trứng và cà chua.'},
     {zh:'最近原料价格上涨了，饭馆的菜也贵了。',py:'Zuìjìn yuánliào jiàgé shàngzhǎng le, fànguǎn de cài yě guì le.',vn:'Gần đây giá nguyên liệu tăng, món ở quán cũng đắt lên.'}
   ],
   colloFull:[
     {zh:'主要原料',py:'zhǔyào yuánliào',vn:'nguyên liệu chính'},
     {zh:'准备原料',py:'zhǔnbèi yuánliào',vn:'chuẩn bị nguyên liệu'},
     {zh:'原料简单',py:'yuánliào jiǎndān',vn:'nguyên liệu đơn giản'},
     {zh:'原料价格',py:'yuánliào jiàgé',vn:'giá nguyên liệu'},
     {zh:'新鲜的原料',py:'xīnxiān de yuánliào',vn:'nguyên liệu tươi'}
   ],
   patterns:[
     {s:'做 + N 的原料 + 是 / 有……',m:'Giới thiệu nguyên liệu làm món gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỗ nguyên liệu này là hôm qua mua từ chợ về.',answer:'这些原料是昨天从市场买来的。',answerPy:'Zhèxiē yuánliào shì zuótiān cóng shìchǎng mǎilái de.',
      note:'是……的 nhấn mạnh thời gian (昨天) và nơi (从市场) của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Món này không chỉ nguyên liệu đơn giản mà cách làm cũng không khó.',answer:'这道菜不仅原料简单，做法也不难。',answerPy:'Zhè dào cài bùjǐn yuánliào jiǎndān, zuòfǎ yě bù nán.',
      note:'Chủ ngữ chung 这道菜 đứng trước 不仅; hai vế là hai chủ–vị nhỏ.',pair:'不仅……也……'}
   ]},

  {n:23,zh:'擀',py:'gǎn',pos:'Động từ',vn:'cán (bột)',hv:'cán',em:'🫓',lesson:1,
   explain:['Dùng cây cán bột (擀面杖) lăn đi lăn lại cho bột dẹt và mỏng: 擀面, 擀饺子皮.','Trong bài: 最关键的功夫是擀面 — khâu quan trọng nhất là cán bột.'],
   usage:'擀 + 面 / 皮; bổ ngữ: 擀薄, 擀平, 擀得薄如白纸. Chữ có bộ 扌 (tay) — việc làm bằng tay.',
   collo:['擀面','擀饺子皮','擀得很薄','擀面杖'],
   ex_zh:'高手往往把面擀得薄如白纸。',ex_py:'Gāoshǒu wǎngwǎng bǎ miàn gǎn de báo rú báizhǐ.',ex_vn:'Người giỏi thường cán bột mỏng như tờ giấy trắng.',
   exList:[
     {zh:'最关键的功夫是擀面。',py:'Zuì guānjiàn de gōngfu shì gǎn miàn.',vn:'Khâu cần tay nghề nhất là cán bột.'},
     {zh:'高手往往把面擀得薄如白纸。',py:'Gāoshǒu wǎngwǎng bǎ miàn gǎn de báo rú báizhǐ.',vn:'Người giỏi thường cán bột mỏng như tờ giấy trắng.'},
     {zh:'包饺子的时候，奶奶擀皮，我来包。',py:'Bāo jiǎozi de shíhou, nǎinai gǎn pí, wǒ lái bāo.',vn:'Khi gói sủi cảo, bà cán vỏ, tôi gói.'}
   ],
   colloFull:[
     {zh:'擀面',py:'gǎn miàn',vn:'cán bột'},
     {zh:'擀饺子皮',py:'gǎn jiǎozi pí',vn:'cán vỏ sủi cảo'},
     {zh:'擀得很薄',py:'gǎn de hěn báo',vn:'cán rất mỏng'},
     {zh:'擀面杖',py:'gǎnmiànzhàng',vn:'cây cán bột'},
     {zh:'擀平',py:'gǎnpíng',vn:'cán phẳng'}
   ],
   patterns:[
     {s:'把 + 面 + 擀得 + Adj',m:'Cán bột thế nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bà cán bột rất mỏng.',answer:'奶奶把面擀得很薄。',answerPy:'Nǎinai bǎ miàn gǎn de hěn báo.',
      note:'把 + 面 + 擀得 + 很薄 — câu 把 có bổ ngữ trạng thái.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi chưa từng cán vỏ sủi cảo bao giờ.',answer:'我从来没擀过饺子皮。',answerPy:'Wǒ cónglái méi gǎnguo jiǎozi pí.',
      note:'从来没 + 擀过 + tân ngữ.',pair:'从来没……过'}
   ]},

  {n:24,zh:'薄',py:'báo',pos:'Tính từ',vn:'mỏng',hv:'bạc',em:'📄',lesson:1,
   explain:['Mỏng, độ dày nhỏ — trái nghĩa với 厚 (dày): 薄饼, 薄衣服.','Đọc báo khi đứng một mình (khẩu ngữ); đọc bó trong từ ghép văn viết: 薄弱, 单薄, 淡薄.'],
   usage:'薄如白纸 = mỏng như giấy (văn viết); 薄得跟纸似的 (khẩu ngữ). Lặp: 薄薄的一层.',
   collo:['薄如白纸','薄薄的','擀得很薄','薄衣服'],
   ex_zh:'这萝卜饼的饼皮薄得跟纸似的。',ex_py:'Zhè luóbobǐng de bǐngpí báo de gēn zhǐ shìde.',ex_vn:'Vỏ bánh củ cải này mỏng như giấy vậy.',
   exList:[
     {zh:'高手往往把面擀得薄如白纸。',py:'Gāoshǒu wǎngwǎng bǎ miàn gǎn de báo rú báizhǐ.',vn:'Người giỏi thường cán bột mỏng như tờ giấy trắng.'},
     {zh:'这萝卜饼的饼皮薄得跟纸似的。',py:'Zhè luóbobǐng de bǐngpí báo de gēn zhǐ shìde.',vn:'Vỏ bánh củ cải này mỏng như giấy vậy.'},
     {zh:'天冷了，别穿那么薄的衣服出门。',py:'Tiān lěng le, bié chuān nàme báo de yīfu chūmén.',vn:'Trời lạnh rồi, đừng mặc áo mỏng thế ra ngoài.'}
   ],
   colloFull:[
     {zh:'薄如白纸',py:'báo rú báizhǐ',vn:'mỏng như giấy trắng'},
     {zh:'薄薄的',py:'báobáo de',vn:'mong mỏng'},
     {zh:'擀得很薄',py:'gǎn de hěn báo',vn:'cán rất mỏng'},
     {zh:'薄衣服',py:'báo yīfu',vn:'quần áo mỏng'},
     {zh:'薄饼',py:'báobǐng',vn:'bánh mỏng'}
   ],
   patterns:[
     {s:'薄如 + N / 薄得跟 + N + 似的',m:'Mỏng như cái gì'},
     {s:'薄薄的一层 + N',m:'Một lớp mỏng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời càng ngày càng lạnh, đừng mặc áo mỏng như vậy nữa.',answer:'天气越来越冷了，别穿这么薄的衣服了。',answerPy:'Tiānqì yuè lái yuè lěng le, bié chuān zhème báo de yīfu le.',
      note:'越来越 + 冷 + 了; vế sau 别……了 khuyên dừng việc đang làm.',pair:'越来越'},
     {promptLang:'vi',prompt:'Anh ấy cán vỏ bánh mỏng như giấy.',answer:'他把饼皮擀得像纸一样薄。',answerPy:'Tā bǎ bǐngpí gǎn de xiàng zhǐ yíyàng báo.',
      note:'把 + 饼皮 + 擀得 + 像……一样 + 薄; 一 trước 样 (thanh 4) đọc yí.',pair:'把'}
   ]},

  {n:25,zh:'折叠',py:'zhédié',pos:'Động từ',vn:'gấp, gập',hv:'chiết điệp',em:'🗂️',lesson:1,
   explain:['Gập một phần của vật lại, chồng lên phần kia: 折叠衣服, 折叠两三次.','Hay làm định ngữ cho đồ dùng gập được: 折叠椅, 折叠自行车, 折叠伞.'],
   usage:'折叠 + số lần (两三次); 折叠好; 可以折叠. Khẩu ngữ gấp quần áo hay nói 叠衣服.',
   collo:['折叠两三次','折叠椅','折叠自行车','折叠好'],
   ex_zh:'拌好的萝卜丝儿铺到饼上后，得再折叠两三次。',ex_py:'Bànhǎo de luóbosīr pūdào bǐng shang hòu, děi zài zhédié liǎng-sān cì.',ex_vn:'Sau khi rải sợi củ cải đã trộn lên bánh, còn phải gấp lại hai ba lần.',
   exList:[
     {zh:'拌好的萝卜丝儿铺到饼上后，得再折叠两三次。',py:'Bànhǎo de luóbosīr pūdào bǐng shang hòu, děi zài zhédié liǎng-sān cì.',vn:'Sau khi rải sợi củ cải đã trộn lên bánh, còn phải gấp lại hai ba lần.'},
     {zh:'这把椅子可以折叠，放在车里很方便。',py:'Zhè bǎ yǐzi kěyǐ zhédié, fàng zài chē li hěn fāngbiàn.',vn:'Cái ghế này gập lại được, để trong xe rất tiện.'},
     {zh:'她把衣服折叠好，放进了箱子里。',py:'Tā bǎ yīfu zhédié hǎo, fàngjìnle xiāngzi li.',vn:'Cô ấy gấp quần áo gọn gàng rồi cho vào vali.'}
   ],
   colloFull:[
     {zh:'折叠两三次',py:'zhédié liǎng-sān cì',vn:'gấp hai ba lần'},
     {zh:'折叠椅',py:'zhédiéyǐ',vn:'ghế gấp'},
     {zh:'折叠自行车',py:'zhédié zìxíngchē',vn:'xe đạp gấp'},
     {zh:'折叠好',py:'zhédié hǎo',vn:'gấp gọn'},
     {zh:'折叠衣服',py:'zhédié yīfu',vn:'gấp quần áo'}
   ],
   patterns:[
     {s:'把 + N + 折叠好',m:'Gấp gọn cái gì'},
     {s:'折叠 + N (椅 / 伞 / 自行车)',m:'Đồ dùng gập được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy gấp chăn gọn gàng.',answer:'请把被子折叠好。',answerPy:'Qǐng bǎ bèizi zhédié hǎo.',
      note:'把 + 被子 + 折叠 + 好 (bổ ngữ kết quả).',pair:'把'},
     {promptLang:'vi',prompt:'Loại xe đạp này không chỉ gập được mà còn rất nhẹ.',answer:'这种自行车不仅可以折叠，也很轻。',answerPy:'Zhè zhǒng zìxíngchē bùjǐn kěyǐ zhédié, yě hěn qīng.',
      note:'Cùng chủ ngữ: 不仅 + đặc điểm 1, 也 + đặc điểm 2.',pair:'不仅……也……'}
   ]},

  {n:26,zh:'透明',py:'tòumíng',pos:'Tính từ',vn:'trong suốt',hv:'thấu minh',em:'🫙',lesson:1,
   explain:['Ánh sáng xuyên qua được, nhìn thấu được vật phía sau: 透明的玻璃. 透 = xuyên qua, 明 = sáng.','Nghĩa bóng: công khai, minh bạch: 价格透明, 管理透明.'],
   usage:'Hay làm định ngữ / vị ngữ: 透明的塑料袋, 表皮是透明的. Luyện tập 3 của sách: 玻璃 — 透明.',
   collo:['透明的玻璃','表皮透明','透明的塑料袋','价格透明'],
   ex_zh:'要求饼熟之后表皮是透明的，能透过表皮看见萝卜丝儿。',ex_py:'Yāoqiú bǐng shú zhīhòu biǎopí shì tòumíng de, néng tòuguò biǎopí kànjiàn luóbosīr.',ex_vn:'Yêu cầu là bánh chín rồi thì lớp vỏ phải trong suốt, nhìn xuyên qua vỏ thấy được sợi củ cải.',
   exList:[
     {zh:'要求饼熟之后表皮是透明的，能透过表皮看见萝卜丝儿。',py:'Yāoqiú bǐng shú zhīhòu biǎopí shì tòumíng de, néng tòuguò biǎopí kànjiàn luóbosīr.',vn:'Yêu cầu là bánh chín rồi thì lớp vỏ phải trong suốt, nhìn xuyên qua vỏ thấy được sợi củ cải.'},
     {zh:'玻璃是透明的，所以鸟儿常常撞到窗户上。',py:'Bōli shì tòumíng de, suǒyǐ niǎor chángcháng zhuàngdào chuānghu shang.',vn:'Kính trong suốt nên chim hay đâm vào cửa sổ.'},
     {zh:'这家饭馆的价格很透明，菜单上写得清清楚楚。',py:'Zhè jiā fànguǎn de jiàgé hěn tòumíng, càidān shang xiě de qīngqīngchǔchǔ.',vn:'Giá ở quán này rất minh bạch, trên thực đơn ghi rõ ràng.'}
   ],
   colloFull:[
     {zh:'透明的玻璃',py:'tòumíng de bōli',vn:'kính trong suốt'},
     {zh:'表皮透明',py:'biǎopí tòumíng',vn:'lớp vỏ trong suốt'},
     {zh:'透明的塑料袋',py:'tòumíng de sùliàodài',vn:'túi ni-lông trong'},
     {zh:'价格透明',py:'jiàgé tòumíng',vn:'giá cả minh bạch'},
     {zh:'半透明',py:'bàn tòumíng',vn:'mờ, nửa trong suốt'}
   ],
   patterns:[
     {s:'N + 是透明的',m:'Cái gì trong suốt'},
     {s:'透过 + N + 看见……',m:'Nhìn xuyên qua cái gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cốc trong suốt này là tôi mua trên mạng.',answer:'这个透明的杯子是我在网上买的。',answerPy:'Zhège tòumíng de bēizi shì wǒ zài wǎng shang mǎi de.',
      note:'是……的 nhấn mạnh nơi mua (在网上); 透明的 làm định ngữ.',pair:'是……的'},
     {promptLang:'vi',prompt:'Loại giấy này tuy rất mỏng nhưng không trong suốt.',answer:'这种纸虽然很薄，但是不透明。',answerPy:'Zhè zhǒng zhǐ suīrán hěn báo, dànshì bú tòumíng.',
      note:'虽然……但是……; 不 trước 透 (thanh 4) đọc bú.',pair:'虽然……但是……'}
   ]},

  {n:27,zh:'淋',py:'lín',pos:'Động từ',vn:'rưới, rảy; dầm (mưa)',hv:'lâm',em:'🌧️',lesson:1,
   explain:['Cho chất lỏng chảy từ trên xuống, rưới lên: 淋一圈油, 淋上酱汁.','Bị nước mưa xối ướt: 被雨淋湿了, 淋雨.'],
   usage:'淋 + số lượng + chất lỏng: 淋一圈油; 被雨淋 + 湿 / 透. 淋浴 = tắm vòi sen.',
   collo:['淋一圈油','被雨淋湿','淋上酱汁','淋雨'],
   ex_zh:'接下来，拿一个平底锅，先在锅里淋一圈油。',ex_py:'Jiē xiàlái, ná yí ge píngdǐguō, xiān zài guō li lín yì quān yóu.',ex_vn:'Tiếp theo, lấy một cái chảo đáy phẳng, trước hết rưới một vòng dầu vào chảo.',
   exList:[
     {zh:'接下来，拿一个平底锅，先在锅里淋一圈油。',py:'Jiē xiàlái, ná yí ge píngdǐguō, xiān zài guō li lín yì quān yóu.',vn:'Tiếp theo, lấy một cái chảo đáy phẳng, trước hết rưới một vòng dầu vào chảo.'},
     {zh:'我今天没带伞，被雨淋湿了。',py:'Wǒ jīntiān méi dài sǎn, bèi yǔ línshī le.',vn:'Hôm nay tôi không mang ô, bị mưa làm ướt hết.'},
     {zh:'出锅前在菜上淋一点儿香油，会更香。',py:'Chū guō qián zài cài shang lín yìdiǎnr xiāngyóu, huì gèng xiāng.',vn:'Trước khi bắc ra, rưới một chút dầu mè lên món ăn sẽ thơm hơn.'}
   ],
   colloFull:[
     {zh:'淋一圈油',py:'lín yì quān yóu',vn:'rưới một vòng dầu'},
     {zh:'被雨淋湿',py:'bèi yǔ línshī',vn:'bị mưa làm ướt'},
     {zh:'淋上酱汁',py:'línshàng jiàngzhī',vn:'rưới nước sốt lên'},
     {zh:'淋雨',py:'lín yǔ',vn:'dầm mưa'},
     {zh:'淋浴',py:'línyù',vn:'tắm vòi sen'}
   ],
   patterns:[
     {s:'在 + N + 上 / 里 + 淋 + (一圈 / 一点儿) + 油',m:'Rưới dầu vào đâu'},
     {s:'被雨淋 + 湿 / 透',m:'Bị mưa làm ướt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không mang ô, quần áo đều bị mưa làm ướt.',answer:'我没带伞，衣服都被雨淋湿了。',answerPy:'Wǒ méi dài sǎn, yīfu dōu bèi yǔ línshī le.',
      note:'被 + 雨 + 淋湿 + 了; 都 đứng trước 被.',pair:'被'},
     {promptLang:'vi',prompt:'Hễ dầm mưa là cậu ấy bị cảm.',answer:'他一淋雨就感冒。',answerPy:'Tā yì lín yǔ jiù gǎnmào.',
      note:'一 + V……就……: hễ … là …; 一 trước thanh 2 (淋) đọc yì.',pair:'一……就……'}
   ]},

  {n:28,zh:'圈',py:'quān',pos:'Danh từ',vn:'vòng',hv:'khuyên',em:'⭕',lesson:1,
   explain:['Hình tròn, vòng: 围成一个圈. Cũng làm lượng từ đếm số vòng: 跑三圈, 淋一圈油.','Nghĩa mở rộng: phạm vi, giới: 朋友圈 (vòng bạn bè; mục khoảnh khắc trên WeChat).'],
   usage:'Số từ + 圈 (lượng từ động lượng): 跑了五圈, 转了一圈. 围成一个圈 = xếp thành vòng tròn.',
   collo:['一圈油','跑三圈','围成一个圈','转了一圈'],
   ex_zh:'先在锅里淋一圈油。',ex_py:'Xiān zài guō li lín yì quān yóu.',ex_vn:'Trước hết rưới một vòng dầu vào chảo.',
   exList:[
     {zh:'先在锅里淋一圈油，待油锅烫手时，将萝卜饼放进锅里。',py:'Xiān zài guō li lín yì quān yóu, dài yóuguō tàng shǒu shí, jiāng luóbobǐng fàngjìn guō li.',vn:'Trước hết rưới một vòng dầu vào chảo, đợi chảo dầu nóng rát tay thì cho bánh củ cải vào.'},
     {zh:'我每天晚上绕着操场跑五圈。',py:'Wǒ měi tiān wǎnshang ràozhe cāochǎng pǎo wǔ quān.',vn:'Tối nào tôi cũng chạy năm vòng quanh sân vận động.'},
     {zh:'大家围成一个圈，开始做游戏。',py:'Dàjiā wéichéng yí ge quān, kāishǐ zuò yóuxì.',vn:'Mọi người đứng thành một vòng tròn, bắt đầu chơi trò chơi.'}
   ],
   colloFull:[
     {zh:'一圈油',py:'yì quān yóu',vn:'một vòng dầu'},
     {zh:'跑三圈',py:'pǎo sān quān',vn:'chạy ba vòng'},
     {zh:'围成一个圈',py:'wéichéng yí ge quān',vn:'xếp thành vòng tròn'},
     {zh:'转了一圈',py:'zhuànle yì quān',vn:'đi một vòng'},
     {zh:'朋友圈',py:'péngyouquān',vn:'vòng bạn bè; khoảnh khắc (WeChat)'}
   ],
   patterns:[
     {s:'V + số từ + 圈',m:'Làm bao nhiêu vòng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày chạy năm vòng, sức khoẻ sẽ tốt lên.',answer:'只要每天跑五圈，身体就会好起来。',answerPy:'Zhǐyào měi tiān pǎo wǔ quān, shēntǐ jiù huì hǎo qǐlai.',
      note:'只要 + điều kiện; 身体 + 就 + 会; 好起来 = tốt dần lên.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi chưa từng chạy một mạch mười vòng bao giờ.',answer:'我从来没一口气跑过十圈。',answerPy:'Wǒ cónglái méi yìkǒuqì pǎoguo shí quān.',
      note:'从来没 + (一口气) + 跑过 + số vòng.',pair:'从来没……过'}
   ]},

  {n:29,zh:'烫',py:'tàng',pos:'Động từ / Tính từ',vn:'làm bỏng, hâm, ủi; nóng (bỏng)',hv:'thãng',em:'🔥',lesson:1,
   explain:['Động từ: bị vật rất nóng làm bỏng (烫手, 烫伤); dùng nhiệt làm nóng hoặc làm phẳng (烫衣服 là ủi quần áo, 烫头发 là uốn tóc).','Tính từ: rất nóng, nóng bỏng: 汤很烫.'],
   usage:'Bảng 词语搭配: 烫 + 红 / 熟 / 软 / 破. 烫手 = nóng rát tay. Khác 热: 热 là nóng nói chung; 烫 là nóng đến mức chạm vào bị bỏng.',
   collo:['烫手','烫红','很烫','烫头发'],
   ex_zh:'待油锅烫手时，将切好的萝卜饼一块一块地放进锅里。',ex_py:'Dài yóuguō tàng shǒu shí, jiāng qiēhǎo de luóbobǐng yí kuài yí kuài de fàngjìn guō li.',ex_vn:'Đợi chảo dầu nóng rát tay thì cho từng miếng bánh củ cải đã cắt vào chảo.',
   exList:[
     {zh:'待油锅烫手时，将切好的萝卜饼一块一块地放进锅里。',py:'Dài yóuguō tàng shǒu shí, jiāng qiēhǎo de luóbobǐng yí kuài yí kuài de fàngjìn guō li.',vn:'Đợi chảo dầu nóng rát tay thì cho từng miếng bánh củ cải đã cắt vào chảo.'},
     {zh:'汤太烫了，等一会儿再喝吧。',py:'Tāng tài tàng le, děng yíhuìr zài hē ba.',vn:'Canh nóng quá, đợi một lát rồi hẵng uống.'},
     {zh:'我的手被开水烫红了。',py:'Wǒ de shǒu bèi kāishuǐ tànghóng le.',vn:'Tay tôi bị nước sôi làm bỏng đỏ lên.'}
   ],
   colloFull:[
     {zh:'烫手',py:'tàng shǒu',vn:'nóng rát tay'},
     {zh:'烫红',py:'tànghóng',vn:'bỏng đỏ'},
     {zh:'很烫',py:'hěn tàng',vn:'rất nóng'},
     {zh:'烫头发',py:'tàng tóufa',vn:'uốn tóc'},
     {zh:'烫衣服',py:'tàng yīfu',vn:'ủi quần áo'}
   ],
   patterns:[
     {s:'被 + 开水 / 油 + 烫 + 红 / 破 / 伤 + 了',m:'Bị bỏng vì cái gì'},
     {s:'N + 太烫了',m:'Cái gì nóng quá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tay tôi bị nước sôi làm bỏng đỏ lên.',answer:'我的手被开水烫红了。',answerPy:'Wǒ de shǒu bèi kāishuǐ tànghóng le.',
      note:'被 + 开水 + 烫红 (bổ ngữ kết quả) + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Bát canh này tuy rất nóng nhưng cực kỳ ngon.',answer:'这碗汤虽然很烫，但是特别好喝。',answerPy:'Zhè wǎn tāng suīrán hěn tàng, dànshì tèbié hǎohē.',
      note:'烫 làm tính từ vị ngữ; 虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:30,zh:'盖',py:'gài',pos:'Động từ / Danh từ',vn:'đậy; nắp',hv:'cái',em:'🍯',lesson:1,
   explain:['Động từ: đậy, che lên trên: 盖锅, 盖被子. Còn nghĩa "xây": 盖房子, 盖楼.','Danh từ: nắp, vung: 锅盖, 壶盖儿, 盖子.'],
   usage:'Bảng 词语搭配: 盖 + 好 / 严 / 紧 / 上 (盖子). 盖上盖子 = đậy nắp lại.',
   collo:['盖锅','盖好','盖上盖子','锅盖'],
   ex_zh:'盖锅前须放进一些温水，预防糊底。',ex_py:'Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ.',ex_vn:'Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy.',
   exList:[
     {zh:'盖锅前须放进一些温水，预防糊底。',py:'Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ.',vn:'Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy.'},
     {zh:'他把壶盖儿打开，闻了闻，原来是酒。',py:'Tā bǎ húgàir dǎkāi, wénle wén, yuánlái shì jiǔ.',vn:'Anh ấy mở nắp bình ra, ngửi ngửi, hoá ra là rượu.'},
     {zh:'睡觉时要把被子盖好，别着凉了。',py:'Shuìjiào shí yào bǎ bèizi gàihǎo, bié zháoliáng le.',vn:'Khi ngủ phải đắp chăn cẩn thận, đừng để bị lạnh.'}
   ],
   colloFull:[
     {zh:'盖锅',py:'gài guō',vn:'đậy vung'},
     {zh:'盖好',py:'gàihǎo',vn:'đậy kín, đắp cẩn thận'},
     {zh:'盖上盖子',py:'gàishàng gàizi',vn:'đậy nắp lại'},
     {zh:'锅盖',py:'guōgài',vn:'vung nồi'},
     {zh:'盖被子',py:'gài bèizi',vn:'đắp chăn'}
   ],
   patterns:[
     {s:'把 + N + 盖 + 好 / 严 / 紧',m:'Đậy / đắp cái gì cho kín'},
     {s:'盖上 + 盖子',m:'Đậy nắp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi ngủ nhớ đắp chăn cẩn thận.',answer:'睡觉的时候要把被子盖好。',answerPy:'Shuìjiào de shíhou yào bǎ bèizi gàihǎo.',
      note:'把 + 被子 + 盖好; 要 đứng trước 把.',pair:'把'},
     {promptLang:'vi',prompt:'Vừa đậy vung lại là phải vặn nhỏ lửa.',answer:'一盖上锅盖，就要把火关小。',answerPy:'Yí gàishàng guōgài, jiù yào bǎ huǒ guānxiǎo.',
      note:'一……就……: hai việc nối tiếp ngay; 一 trước thanh 4 (盖) đọc yí.',pair:'一……就……'}
   ]},

  {n:31,zh:'预防',py:'yùfáng',pos:'Động từ',vn:'đề phòng, phòng ngừa',hv:'dự phòng',em:'🛡️',lesson:1,
   explain:['Làm trước để điều xấu (bệnh tật, tai nạn, thiên tai) không xảy ra. Trùng với tiếng Việt "dự phòng / phòng ngừa".','Bảng 词语搭配: 预防 + 中毒 / 疾病 / 感冒 / 灾害.'],
   usage:'预防 + điều xấu; 起到预防……的作用 / 效果. Khác 防止: 防止 nhấn mạnh ngăn một việc cụ thể sắp xảy ra (防止火灾发生).',
   collo:['预防感冒','预防疾病','预防近视','预防中毒'],
   ex_zh:'研究发现，常吃胡萝卜能起到保护眼睛、预防近视的效果。',ex_py:'Yánjiū fāxiàn, cháng chī húluóbo néng qǐdào bǎohù yǎnjing, yùfáng jìnshì de xiàoguǒ.',ex_vn:'Nghiên cứu phát hiện, thường ăn cà rốt có tác dụng bảo vệ mắt, phòng ngừa cận thị.',
   exList:[
     {zh:'盖锅前须放进一些温水，预防糊底。',py:'Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ.',vn:'Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy.'},
     {zh:'研究发现，常吃胡萝卜能起到保护眼睛、预防近视的效果。',py:'Yánjiū fāxiàn, cháng chī húluóbo néng qǐdào bǎohù yǎnjing, yùfáng jìnshì de xiàoguǒ.',vn:'Nghiên cứu phát hiện, thường ăn cà rốt có tác dụng bảo vệ mắt, phòng ngừa cận thị.'},
     {zh:'天冷了，多洗手可以预防感冒。',py:'Tiān lěng le, duō xǐ shǒu kěyǐ yùfáng gǎnmào.',vn:'Trời lạnh rồi, rửa tay nhiều có thể phòng cảm cúm.'}
   ],
   colloFull:[
     {zh:'预防感冒',py:'yùfáng gǎnmào',vn:'phòng cảm cúm'},
     {zh:'预防疾病',py:'yùfáng jíbìng',vn:'phòng bệnh'},
     {zh:'预防近视',py:'yùfáng jìnshì',vn:'phòng cận thị'},
     {zh:'预防中毒',py:'yùfáng zhòngdú',vn:'phòng ngộ độc'},
     {zh:'预防灾害',py:'yùfáng zāihài',vn:'phòng chống thiên tai'}
   ],
   patterns:[
     {s:'起到 + 预防 + N + 的效果 / 作用',m:'Có tác dụng phòng ngừa gì'},
     {s:'……，预防 + điều xấu',m:'Làm gì để phòng điều gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần thường xuyên rửa tay là có thể phòng được nhiều bệnh.',answer:'只要经常洗手，就能预防很多疾病。',answerPy:'Zhǐyào jīngcháng xǐ shǒu, jiù néng yùfáng hěn duō jíbìng.',
      note:'只要 + điều kiện, 就 + 能 + 预防 + tân ngữ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Vận động không chỉ giúp giảm cân mà còn phòng được bệnh.',answer:'运动不仅能减肥，也能预防疾病。',answerPy:'Yùndòng bùjǐn néng jiǎnféi, yě néng yùfáng jíbìng.',
      note:'Chủ ngữ chung 运动; 不仅 + 能…, 也 + 能….',pair:'不仅……也……'}
   ]},

  {n:32,zh:'糊',py:'hú',pos:'Động từ',vn:'khét, cháy (thức ăn)',hv:'hồ',em:'💨',lesson:1,
   explain:['Thức ăn bị nấu quá lửa đến cháy đen, có mùi khét: 饭糊了, 炒糊了.','Trong bài: 糊底 = cháy đáy (phần dưới bánh dính chảo bị khét).'],
   usage:'V + 糊: 炒糊, 烧糊, 煮糊, 烤糊. Khác 焦: 焦 là cháy vàng giòn (có thể còn ngon: 外焦里嫩); 糊 là cháy khét, hỏng.',
   collo:['糊底','炒糊了','烧糊了','饭糊了'],
   ex_zh:'盖锅前须放进一些温水，预防糊底。',ex_py:'Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ.',ex_vn:'Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy.',
   exList:[
     {zh:'盖锅前须放进一些温水，预防糊底。',py:'Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ.',vn:'Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy.'},
     {zh:'我光顾着看手机，锅里的菜都炒糊了。',py:'Wǒ guāng gùzhe kàn shǒujī, guō li de cài dōu chǎohú le.',vn:'Tôi mải xem điện thoại, rau trong chảo xào cháy khét hết rồi.'},
     {zh:'你闻闻，是不是什么东西烧糊了？',py:'Nǐ wénwen, shì bu shì shénme dōngxi shāohú le?',vn:'Bạn ngửi xem, có phải cái gì bị cháy khét không?'}
   ],
   colloFull:[
     {zh:'糊底',py:'hú dǐ',vn:'cháy đáy'},
     {zh:'炒糊了',py:'chǎohú le',vn:'xào cháy rồi'},
     {zh:'烧糊了',py:'shāohú le',vn:'đun cháy rồi'},
     {zh:'饭糊了',py:'fàn hú le',vn:'cơm cháy khét rồi'},
     {zh:'煮糊',py:'zhǔhú',vn:'nấu cháy'}
   ],
   patterns:[
     {s:'V (炒 / 烧 / 煮) + 糊 + 了',m:'Nấu đến cháy khét'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cơm bị tôi nấu cháy khét rồi.',answer:'米饭被我煮糊了。',answerPy:'Mǐfàn bèi wǒ zhǔhú le.',
      note:'被 + người gây ra + 煮糊 + 了 — kết quả không mong muốn.',pair:'被'},
     {promptLang:'vi',prompt:'Cậu ấy vừa xem điện thoại là món ăn bị cháy.',answer:'他一看手机，菜就炒糊了。',answerPy:'Tā yí kàn shǒujī, cài jiù chǎohú le.',
      note:'Hai chủ ngữ khác nhau: 他 + 一 + V, 菜 + 就 + V; 一 trước thanh 4 đọc yí.',pair:'一……就……'}
   ]},

  {n:33,zh:'文火',py:'wénhuǒ',pos:'Danh từ',vn:'lửa nhỏ, lửa riu riu',hv:'văn hỏa',em:'🕯️',lesson:1,
   explain:['Lửa nhỏ và đều khi nấu ăn. Trái nghĩa: 武火 / 大火 (lửa to).','文 ở đây mang nghĩa "nhẹ nhàng, ôn hoà", không liên quan đến văn chương.'],
   usage:'用文火 + V; 先用大火烧开，再改用文火. Khẩu ngữ hay nói 小火.',
   collo:['用文火','文火慢煮','改用文火','文火炖'],
   ex_zh:'火最好用文火，等能闻到香味时，便可开锅了。',ex_py:'Huǒ zuìhǎo yòng wénhuǒ, děng néng wéndào xiāngwèi shí, biàn kě kāi guō le.',ex_vn:'Lửa tốt nhất nên để nhỏ, đợi khi ngửi thấy mùi thơm là có thể mở vung.',
   exList:[
     {zh:'火最好用文火，等能闻到香味时，便可开锅了。',py:'Huǒ zuìhǎo yòng wénhuǒ, děng néng wéndào xiāngwèi shí, biàn kě kāi guō le.',vn:'Lửa tốt nhất nên để nhỏ, đợi khi ngửi thấy mùi thơm là có thể mở vung.'},
     {zh:'这锅鸡汤要用文火慢慢煮两个小时。',py:'Zhè guō jītāng yào yòng wénhuǒ mànmàn zhǔ liǎng ge xiǎoshí.',vn:'Nồi canh gà này phải ninh lửa nhỏ từ từ hai tiếng.'},
     {zh:'先用大火把水烧开，再改用文火。',py:'Xiān yòng dàhuǒ bǎ shuǐ shāokāi, zài gǎiyòng wénhuǒ.',vn:'Trước dùng lửa to đun sôi nước, rồi chuyển sang lửa nhỏ.'}
   ],
   colloFull:[
     {zh:'用文火',py:'yòng wénhuǒ',vn:'dùng lửa nhỏ'},
     {zh:'文火慢煮',py:'wénhuǒ màn zhǔ',vn:'ninh nhỏ lửa'},
     {zh:'改用文火',py:'gǎiyòng wénhuǒ',vn:'chuyển sang lửa nhỏ'},
     {zh:'文火炖',py:'wénhuǒ dùn',vn:'hầm lửa nhỏ'},
     {zh:'大火烧开',py:'dàhuǒ shāokāi',vn:'đun sôi bằng lửa to'}
   ],
   patterns:[
     {s:'先用大火……，再改用文火……',m:'Trình tự lửa khi nấu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần ninh nhỏ lửa từ từ, canh sẽ rất thơm.',answer:'只要用文火慢慢煮，汤就会很香。',answerPy:'Zhǐyào yòng wénhuǒ mànmàn zhǔ, tāng jiù huì hěn xiāng.',
      note:'只要 + cách làm; 汤 + 就 + 会 + kết quả.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Dùng lửa nhỏ tuy chậm nhưng bánh không dễ bị khét.',answer:'用文火虽然慢，但是饼不容易糊。',answerPy:'Yòng wénhuǒ suīrán màn, dànshì bǐng bù róngyì hú.',
      note:'Cụm động từ 用文火 làm chủ ngữ; 虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:34,zh:'闻',py:'wén',pos:'Động từ',vn:'ngửi',hv:'văn',em:'👃',lesson:1,
   explain:['Động từ: dùng mũi cảm nhận mùi: 闻到香味, 闻一闻. Chú ý: tiếng Việt "văn" = nghe, nhưng 闻 động từ hiện đại là NGỬI; "nghe" là 听.','Làm ngữ tố: nghe thấy, tin tức — 新闻, 百闻不如一见, 见闻, 闻声赶来.'],
   usage:'闻到 + mùi (闻到香味); 闻着 + tính từ (闻着很香); lặp: 闻一闻 / 闻了闻. Mùi đi với lượng từ 股: 一股香味.',
   collo:['闻到香味','闻一闻','新闻','百闻不如一见'],
   ex_zh:'火最好用文火，等能闻到香味时，便可开锅了。',ex_py:'Huǒ zuìhǎo yòng wénhuǒ, děng néng wéndào xiāngwèi shí, biàn kě kāi guō le.',ex_vn:'Lửa tốt nhất nên để nhỏ, đợi khi ngửi thấy mùi thơm là có thể mở vung.',
   exList:[
     {zh:'火最好用文火，等能闻到香味时，便可开锅了。',py:'Huǒ zuìhǎo yòng wénhuǒ, děng néng wéndào xiāngwèi shí, biàn kě kāi guō le.',vn:'Lửa tốt nhất nên để nhỏ, đợi khi ngửi thấy mùi thơm là có thể mở vung.'},
     {zh:'我一进门就闻到一股扑鼻的香味。',py:'Wǒ yí jìn mén jiù wéndào yì gǔ pūbí de xiāngwèi.',vn:'Tôi vừa vào cửa đã ngửi thấy một mùi thơm xộc vào mũi.'},
     {zh:'你们到各地去旅游，老话说：百闻不如一见。',py:'Nǐmen dào gè dì qù lǚyóu, lǎohuà shuō: bǎi wén bùrú yí jiàn.',vn:'Các bạn đi du lịch khắp nơi, người xưa nói: trăm nghe không bằng một thấy.'}
   ],
   colloFull:[
     {zh:'闻到香味',py:'wéndào xiāngwèi',vn:'ngửi thấy mùi thơm'},
     {zh:'闻一闻',py:'wén yi wén',vn:'ngửi thử'},
     {zh:'新闻',py:'xīnwén',vn:'tin tức'},
     {zh:'百闻不如一见',py:'bǎi wén bùrú yí jiàn',vn:'trăm nghe không bằng một thấy'},
     {zh:'闻着很香',py:'wénzhe hěn xiāng',vn:'ngửi thấy rất thơm'}
   ],
   patterns:[
     {s:'闻到 + 一股 + mùi',m:'Ngửi thấy mùi gì'},
     {s:'N + 闻着 / 闻起来 + Adj',m:'Ngửi thấy thế nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa vào cửa đã ngửi thấy mùi thơm.',answer:'我一进门就闻到了香味。',answerPy:'Wǒ yí jìn mén jiù wéndàole xiāngwèi.',
      note:'一……就…… (câu 31 sách bài tập); 一 trước thanh 4 (进) đọc yí.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi chưa từng ngửi thấy chiếc bánh nào thơm như vậy.',answer:'我从来没闻过这么香的饼。',answerPy:'Wǒ cónglái méi wénguo zhème xiāng de bǐng.',
      note:'从来没 + 闻过 + tân ngữ.',pair:'从来没……过'}
   ]},

  {n:35,zh:'趁',py:'chèn',pos:'Giới từ',vn:'nhân (lúc), thừa (dịp)',hv:'sấn',em:'⏳',lesson:1,
   explain:['Giới từ: tận dụng thời gian, cơ hội, điều kiện đang có để làm việc gì (= 利用时间、机会).','Sau 趁 có thể là danh từ (趁这个机会), cụm động từ (趁电影还没开始), tính từ (趁热), hoặc mệnh đề nhỏ. Có thể nói 趁着.'],
   usage:'趁 + thời cơ + V. Mẫu hay gặp: 趁热吃, 趁年轻, 趁早, 趁(着)这几天休息. 趁 đứng TRƯỚC động từ chính, không đặt cuối câu.',
   collo:['趁热吃','趁年轻','趁着','趁这个机会'],
   ex_zh:'萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。',ex_py:'Luóbobǐng yào chèn rè chī, xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',ex_vn:'Bánh củ cải phải ăn lúc còn nóng, ai thích vị đậm thì có thể thêm chút xì dầu và giấm.',
   exList:[
     {zh:'萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。',py:'Luóbobǐng yào chèn rè chī, xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',vn:'Bánh củ cải phải ăn lúc còn nóng, ai thích vị đậm thì có thể thêm chút xì dầu và giấm.'},
     {zh:'趁着这几天休息，我们去看看房子吧。',py:'Chènzhe zhè jǐ tiān xiūxi, wǒmen qù kànkan fángzi ba.',vn:'Nhân mấy hôm nay được nghỉ, chúng ta đi xem nhà đi.'},
     {zh:'趁电影还没开始，我去买两瓶矿泉水。',py:'Chèn diànyǐng hái méi kāishǐ, wǒ qù mǎi liǎng píng kuàngquánshuǐ.',vn:'Nhân lúc phim chưa chiếu, tôi đi mua hai chai nước khoáng.'}
   ],
   colloFull:[
     {zh:'趁热吃',py:'chèn rè chī',vn:'ăn lúc còn nóng'},
     {zh:'趁年轻',py:'chèn niánqīng',vn:'nhân lúc còn trẻ'},
     {zh:'趁着',py:'chènzhe',vn:'nhân lúc, thừa dịp'},
     {zh:'趁这个机会',py:'chèn zhège jīhuì',vn:'nhân cơ hội này'},
     {zh:'趁早',py:'chènzǎo',vn:'sớm (kẻo muộn)'}
   ],
   patterns:[
     {s:'趁 (着) + N / VP / Adj / mệnh đề + V',m:'Nhân lúc … làm gì'},
     {s:'趁 + 热 / 早 / 年轻',m:'Cụm cố định rất hay dùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nhân lúc còn trẻ học nhiều một chút thì sẽ không hối hận.',answer:'只要趁年轻多学一点儿，就不会后悔。',answerPy:'Zhǐyào chèn niánqīng duō xué yìdiǎnr, jiù bú huì hòuhuǐ.',
      note:'趁年轻 đứng trước động từ 学; 不 trước 会 (thanh 4) đọc bú.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nhân lúc trời chưa tối, mau cất quần áo vào đi.',answer:'趁天还没黑，快把衣服收进来吧。',answerPy:'Chèn tiān hái méi hēi, kuài bǎ yīfu shōu jìnlai ba.',
      note:'趁 + mệnh đề nhỏ (天还没黑); vế sau câu 把 + bổ ngữ xu hướng 进来.',pair:'把'}
   ]},

  {n:36,zh:'口味',py:'kǒuwèi',pos:'Danh từ',vn:'khẩu vị, hương vị',hv:'khẩu vị',em:'👅',lesson:1,
   explain:['Sở thích về mùi vị món ăn của một người: 口味重 (thích đậm), 口味清淡 (thích nhạt), 合口味.','Cũng chỉ hương vị của món ăn: 地方口味, 各种口味的冰激凌.'],
   usage:'Không nói 口味很好吃 — món ngon nói 味道很好. Hay gặp: 合 (你的) 口味, 口味重 / 淡, 换换口味.',
   collo:['口味重','口味清淡','合口味','地方口味'],
   ex_zh:'萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。',ex_py:'Luóbobǐng yào chèn rè chī, xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',ex_vn:'Bánh củ cải phải ăn lúc còn nóng, ai thích vị đậm thì có thể thêm chút xì dầu và giấm.',
   exList:[
     {zh:'萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。',py:'Luóbobǐng yào chèn rè chī, xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',vn:'Bánh củ cải phải ăn lúc còn nóng, ai thích vị đậm thì có thể thêm chút xì dầu và giấm.'},
     {zh:'怎么你今天吃得这么少？是不是这些菜不合你的口味？',py:'Zěnme nǐ jīntiān chī de zhème shǎo? Shì bu shì zhèxiē cài bù hé nǐ de kǒuwèi?',vn:'Sao hôm nay bạn ăn ít thế? Có phải mấy món này không hợp khẩu vị bạn?'},
     {zh:'一个人最难改变的就是他的口味。',py:'Yí ge rén zuì nán gǎibiàn de jiù shì tā de kǒuwèi.',vn:'Điều khó thay đổi nhất ở một người chính là khẩu vị.'}
   ],
   colloFull:[
     {zh:'口味重',py:'kǒuwèi zhòng',vn:'ăn đậm'},
     {zh:'口味清淡',py:'kǒuwèi qīngdàn',vn:'ăn nhạt'},
     {zh:'合口味',py:'hé kǒuwèi',vn:'hợp khẩu vị'},
     {zh:'地方口味',py:'dìfāng kǒuwèi',vn:'hương vị địa phương'},
     {zh:'换换口味',py:'huànhuan kǒuwèi',vn:'đổi món, đổi khẩu vị'}
   ],
   patterns:[
     {s:'(不)合 + 某人的 + 口味',m:'(Không) hợp khẩu vị ai'},
     {s:'口味 + 重 / 清淡',m:'Thích ăn đậm / nhạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai anh em chúng tôi tuy là anh em nhưng khẩu vị hoàn toàn khác nhau.',answer:'我们俩虽然是兄弟，但是口味完全不一样。',answerPy:'Wǒmen liǎ suīrán shì xiōngdì, dànshì kǒuwèi wánquán bù yíyàng.',
      note:'虽然……但是……; 不一样: 不 đọc bù, 一 trước 样 đọc yí.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Khẩu vị của ông ấy ngày càng đậm.',answer:'他的口味越来越重了。',answerPy:'Tā de kǒuwèi yuè lái yuè zhòng le.',
      note:'口味 + 越来越 + 重 + 了.',pair:'越来越'}
   ]},

  {n:37,zh:'少许',py:'shǎoxǔ',pos:'Tính từ',vn:'một chút, một ít',hv:'thiểu hứa',em:'🧂',lesson:1,
   explain:['Một lượng nhỏ, một chút (văn viết). Rất hay gặp trong công thức nấu ăn: 加少许盐.'],
   usage:'少许 + N (không cần lượng từ): 少许盐, 少许酱油. Khẩu ngữ nói 一点儿. Không nói 很少许.',
   collo:['少许盐','加少许','少许酱油','放入少许'],
   ex_zh:'喜欢口味重的，还可以加少许酱油和醋。',ex_py:'Xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',ex_vn:'Ai thích vị đậm thì có thể thêm chút xì dầu và giấm.',
   exList:[
     {zh:'喜欢口味重的，还可以加少许酱油和醋。',py:'Xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',vn:'Ai thích vị đậm thì có thể thêm chút xì dầu và giấm.'},
     {zh:'鸡蛋炒好以后，最后放入少许盐就可以了。',py:'Jīdàn chǎohǎo yǐhòu, zuìhòu fàngrù shǎoxǔ yán jiù kěyǐ le.',vn:'Trứng xào xong, cuối cùng cho một chút muối là được.'},
     {zh:'汤里加少许糖，味道会更鲜。',py:'Tāng li jiā shǎoxǔ táng, wèidao huì gèng xiān.',vn:'Thêm chút đường vào canh, vị sẽ ngọt hơn.'}
   ],
   colloFull:[
     {zh:'少许盐',py:'shǎoxǔ yán',vn:'một chút muối'},
     {zh:'加少许',py:'jiā shǎoxǔ',vn:'thêm một chút'},
     {zh:'少许酱油',py:'shǎoxǔ jiàngyóu',vn:'một ít xì dầu'},
     {zh:'放入少许',py:'fàngrù shǎoxǔ',vn:'cho vào một ít'},
     {zh:'少许糖',py:'shǎoxǔ táng',vn:'một chút đường'}
   ],
   patterns:[
     {s:'加 / 放入 + 少许 + gia vị',m:'Cách viết công thức nấu ăn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần thêm một chút muối, vị sẽ ngon hơn nhiều.',answer:'只要加少许盐，味道就好多了。',answerPy:'Zhǐyào jiā shǎoxǔ yán, wèidao jiù hǎo duō le.',
      note:'只要 + 加少许盐; 味道 + 就 + 好多了.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Món này chỉ cho một chút dầu, không chỉ tốt cho sức khoẻ mà vị cũng rất ngon.',answer:'这道菜只放了少许油，不仅健康，味道也很好。',answerPy:'Zhè dào cài zhǐ fàngle shǎoxǔ yóu, bùjǐn jiànkāng, wèidao yě hěn hǎo.',
      note:'不仅 + ưu điểm 1, (味道) + 也 + ưu điểm 2.',pair:'不仅……也……'}
   ]},

  {n:38,zh:'酱油',py:'jiàngyóu',pos:'Danh từ',vn:'nước tương, xì dầu',hv:'tương du',em:'🍶',lesson:1,
   explain:['Nước tương làm từ đậu nành lên men, màu nâu đen, vị mặn — gia vị cơ bản của món Trung Quốc.','Có trong bảng 扩展 饮食2 của bài.'],
   usage:'放 / 加 / 少放酱油; 一瓶酱油; 蘸酱油 (chấm xì dầu). Chú ý: 酱油 là xì dầu, không phải "tương ớt" (辣椒酱).',
   collo:['放酱油','一瓶酱油','少放酱油','酱油和醋'],
   ex_zh:'我教你啊，把肉切丝，炒的时候，少放酱油。',ex_py:'Wǒ jiāo nǐ a, bǎ ròu qiē sī, chǎo de shíhou, shǎo fàng jiàngyóu.',ex_vn:'Để tôi chỉ cho: thái thịt thành sợi, lúc xào cho ít xì dầu thôi.',
   exList:[
     {zh:'喜欢口味重的，还可以加少许酱油和醋。',py:'Xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',vn:'Ai thích vị đậm thì có thể thêm chút xì dầu và giấm.'},
     {zh:'最后，我们用酱油、白糖、味精等做成汁。',py:'Zuìhòu, wǒmen yòng jiàngyóu, báitáng, wèijīng děng zuòchéng zhī.',vn:'Cuối cùng, chúng ta dùng xì dầu, đường trắng, bột ngọt… làm thành nước sốt.'},
     {zh:'我教你啊，把肉切丝，炒的时候，少放酱油。',py:'Wǒ jiāo nǐ a, bǎ ròu qiē sī, chǎo de shíhou, shǎo fàng jiàngyóu.',vn:'Để tôi chỉ cho: thái thịt thành sợi, lúc xào cho ít xì dầu thôi.'}
   ],
   colloFull:[
     {zh:'放酱油',py:'fàng jiàngyóu',vn:'cho xì dầu'},
     {zh:'一瓶酱油',py:'yì píng jiàngyóu',vn:'một chai xì dầu'},
     {zh:'少放酱油',py:'shǎo fàng jiàngyóu',vn:'cho ít xì dầu'},
     {zh:'酱油和醋',py:'jiàngyóu hé cù',vn:'xì dầu và giấm'},
     {zh:'蘸酱油',py:'zhàn jiàngyóu',vn:'chấm xì dầu'}
   ],
   patterns:[
     {s:'少放 / 多放 + 酱油',m:'Điều chỉnh gia vị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn đưa chai xì dầu cho tôi được không?',answer:'你把酱油递给我好吗？',answerPy:'Nǐ bǎ jiàngyóu dì gěi wǒ hǎo ma?',
      note:'把 + 酱油 + 递给 + người — chuyển vật cho ai.',pair:'把'},
     {promptLang:'vi',prompt:'Chai xì dầu bị em trai làm đổ rồi.',answer:'酱油瓶被弟弟打翻了。',answerPy:'Jiàngyóu píng bèi dìdi dǎfān le.',
      note:'被 + 弟弟 + 打翻 + 了 — việc không mong muốn.',pair:'被'}
   ]},

  {n:39,zh:'醋',py:'cù',pos:'Danh từ',vn:'giấm',hv:'thố',em:'🫗',lesson:1,
   explain:['Giấm: gia vị có vị chua. Người miền Bắc Trung Quốc ăn sủi cảo hay chấm giấm.','Thành ngữ khẩu ngữ: 吃醋 = ghen (thường trong chuyện tình cảm).'],
   usage:'放醋, 蘸醋, 一瓶醋; 酱油和醋 hay đi thành cặp. 吃醋 không phải "ăn giấm" mà là "ghen".',
   collo:['放醋','蘸醋','吃醋','酱油和醋'],
   ex_zh:'喜欢口味重的，还可以加少许酱油和醋。',ex_py:'Xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',ex_vn:'Ai thích vị đậm thì có thể thêm chút xì dầu và giấm.',
   exList:[
     {zh:'喜欢口味重的，还可以加少许酱油和醋。',py:'Xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù.',vn:'Ai thích vị đậm thì có thể thêm chút xì dầu và giấm.'},
     {zh:'北方人吃饺子的时候喜欢蘸一点儿醋。',py:'Běifāngrén chī jiǎozi de shíhou xǐhuan zhàn yìdiǎnr cù.',vn:'Người miền Bắc ăn sủi cảo thích chấm một chút giấm.'},
     {zh:'看到女朋友跟别的男生聊天，他有点儿吃醋了。',py:'Kàndào nǚpéngyou gēn bié de nánshēng liáotiān, tā yǒudiǎnr chīcù le.',vn:'Thấy bạn gái nói chuyện với bạn nam khác, cậu ấy hơi ghen.'}
   ],
   colloFull:[
     {zh:'放醋',py:'fàng cù',vn:'cho giấm'},
     {zh:'蘸醋',py:'zhàn cù',vn:'chấm giấm'},
     {zh:'吃醋',py:'chīcù',vn:'ghen'},
     {zh:'酱油和醋',py:'jiàngyóu hé cù',vn:'xì dầu và giấm'},
     {zh:'一瓶醋',py:'yì píng cù',vn:'một chai giấm'}
   ],
   patterns:[
     {s:'蘸 + 醋 / 酱油',m:'Chấm gia vị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giấm tuy chua nhưng có lợi cho sức khoẻ.',answer:'醋虽然很酸，但是对身体有好处。',answerPy:'Cù suīrán hěn suān, dànshì duì shēntǐ yǒu hǎochù.',
      note:'虽然 sau chủ ngữ 醋; 对 + N + 有好处.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Anh ấy rất thích ăn giấm, đến ăn mì cũng cho nhiều giấm.',answer:'他特别爱吃醋，连吃面条都要放很多。',answerPy:'Tā tèbié ài chī cù, lián chī miàntiáo dōu yào fàng hěn duō.',
      note:'连 + trường hợp + 都…; ở đây 吃醋 theo nghĩa đen (ăn giấm).',pair:'连……都……'}
   ]},

  {n:40,zh:'焦',py:'jiāo',pos:'Tính từ',vn:'cháy, sém (vàng giòn)',hv:'tiêu',em:'🥮',lesson:1,
   explain:['Bị nướng, rán đến vàng sẫm, giòn hoặc hơi cháy: 外焦里嫩 (ngoài giòn trong mềm), 烤焦.','Còn là ngữ tố trong 焦急 (sốt ruột), 焦点 (tiêu điểm).'],
   usage:'外焦里嫩 là cụm cố định khen món rán. 烤焦 / 烧焦 = bị cháy sém (thường là hỏng). So với 糊: 糊 nhấn mạnh cháy khét, có mùi.',
   collo:['外焦里嫩','烤焦','烧焦','焦黄'],
   ex_zh:'刚出锅的萝卜饼，香味扑鼻，外焦里嫩。',ex_py:'Gāng chū guō de luóbobǐng, xiāngwèi pūbí, wài jiāo lǐ nèn.',ex_vn:'Bánh củ cải vừa ra chảo thơm xộc vào mũi, ngoài giòn trong mềm.',
   exList:[
     {zh:'刚出锅的萝卜饼，香味扑鼻，外焦里嫩。',py:'Gāng chū guō de luóbobǐng, xiāngwèi pūbí, wài jiāo lǐ nèn.',vn:'Bánh củ cải vừa ra chảo thơm xộc vào mũi, ngoài giòn trong mềm.'},
     {zh:'面包烤焦了，不能吃了。',py:'Miànbāo kǎojiāo le, bù néng chī le.',vn:'Bánh mì nướng cháy rồi, không ăn được nữa.'},
     {zh:'饼的两面都煎得焦黄，特别香。',py:'Bǐng de liǎng miàn dōu jiān de jiāohuáng, tèbié xiāng.',vn:'Hai mặt bánh đều rán vàng sém, thơm lắm.'}
   ],
   colloFull:[
     {zh:'外焦里嫩',py:'wài jiāo lǐ nèn',vn:'ngoài giòn trong mềm'},
     {zh:'烤焦',py:'kǎojiāo',vn:'nướng cháy'},
     {zh:'烧焦',py:'shāojiāo',vn:'đốt cháy sém'},
     {zh:'焦黄',py:'jiāohuáng',vn:'vàng sém'},
     {zh:'焦急',py:'jiāojí',vn:'sốt ruột'}
   ],
   patterns:[
     {s:'外焦里嫩',m:'Khen món rán: ngoài giòn, trong mềm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bánh mì bị tôi nướng cháy rồi.',answer:'面包被我烤焦了。',answerPy:'Miànbāo bèi wǒ kǎojiāo le.',
      note:'被 + 我 + 烤焦 + 了.',pair:'被'},
     {promptLang:'vi',prompt:'Miếng bánh này tuy hơi cháy nhưng rất thơm.',answer:'这块饼虽然有点儿焦，但是很香。',answerPy:'Zhè kuài bǐng suīrán yǒudiǎnr jiāo, dànshì hěn xiāng.',
      note:'有点儿 + tính từ mang ý không hài lòng (焦); 虽然……但是…….',pair:'虽然……但是……'}
   ]},

  {n:41,zh:'嫩',py:'nèn',pos:'Tính từ',vn:'mềm, non',hv:'nộn',em:'🌱',lesson:1,
   explain:['(Thức ăn) mềm, dễ nhai: 牛肉很嫩, 外焦里嫩.','(Cây cỏ) non, mới mọc: 嫩叶, 嫩绿. Nói người: còn non nớt, thiếu kinh nghiệm (khẩu ngữ).'],
   usage:'Có trong bảng 扩展 饮食2. Trái nghĩa: 老 (thịt dai: 肉炒老了). 鲜嫩, 滑嫩 dùng khen món ăn.',
   collo:['外焦里嫩','很嫩','嫩叶','鲜嫩'],
   ex_zh:'刚出锅的萝卜饼，香味扑鼻，外焦里嫩。',ex_py:'Gāng chū guō de luóbobǐng, xiāngwèi pūbí, wài jiāo lǐ nèn.',ex_vn:'Bánh củ cải vừa ra chảo thơm xộc vào mũi, ngoài giòn trong mềm.',
   exList:[
     {zh:'刚出锅的萝卜饼，香味扑鼻，外焦里嫩。',py:'Gāng chū guō de luóbobǐng, xiāngwèi pūbí, wài jiāo lǐ nèn.',vn:'Bánh củ cải vừa ra chảo thơm xộc vào mũi, ngoài giòn trong mềm.'},
     {zh:'此菜的特点是色彩美观，咸鲜滑嫩，味香可口，营养丰富。',py:'Cǐ cài de tèdiǎn shì sècǎi měiguān, xián xiān huá nèn, wèi xiāng kěkǒu, yíngyǎng fēngfù.',vn:'Đặc điểm món này là màu sắc đẹp mắt, đậm đà mềm mượt, thơm ngon hợp miệng, giàu dinh dưỡng.'},
     {zh:'春天到了，树上长出了嫩绿的叶子。',py:'Chūntiān dào le, shù shang zhǎngchūle nènlǜ de yèzi.',vn:'Mùa xuân đến, trên cây mọc ra những chiếc lá xanh non.'}
   ],
   colloFull:[
     {zh:'外焦里嫩',py:'wài jiāo lǐ nèn',vn:'ngoài giòn trong mềm'},
     {zh:'很嫩',py:'hěn nèn',vn:'rất mềm'},
     {zh:'嫩叶',py:'nènyè',vn:'lá non'},
     {zh:'鲜嫩',py:'xiānnèn',vn:'tươi mềm'},
     {zh:'嫩绿',py:'nènlǜ',vn:'xanh non'}
   ],
   patterns:[
     {s:'N (肉 / 鱼) + 很嫩',m:'Khen thịt, cá mềm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần không nấu quá lâu thì thịt gà sẽ rất mềm.',answer:'只要不煮太久，鸡肉就很嫩。',answerPy:'Zhǐyào bù zhǔ tài jiǔ, jīròu jiù hěn nèn.',
      note:'只要 + điều kiện phủ định; 鸡肉 + 就 + 很嫩.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Con cá mềm thế này là mua ở đâu vậy?',answer:'这么嫩的鱼是在哪儿买的？',answerPy:'Zhème nèn de yú shì zài nǎr mǎi de?',
      note:'是……的 hỏi nơi chốn của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:42,zh:'特色',py:'tèsè',pos:'Danh từ',vn:'đặc điểm, đặc trưng, nét đặc sắc',hv:'đặc sắc',em:'⭐',lesson:1,
   explain:['Nét riêng nổi bật, khác hẳn cái khác của một sự vật, món ăn, vùng đất: 特色菜, 地方特色.','Bảng 词语搭配: 中国的 / 作品的 / 共同的 / 基本的 / 主要的 + 特色.'],
   usage:'Khác 特点: 特点 dùng rộng, cả cho người (他的特点是胆大); 特色 thường dùng cho sự vật, nơi chốn, mang ý khen. Nói 很有特色, không nói 很特色.',
   collo:['特色菜','地方特色','中国特色','具有特色'],
   ex_zh:'请你给我们推荐几个你们这儿的特色菜吧。',ex_py:'Qǐng nǐ gěi wǒmen tuījiàn jǐ ge nǐmen zhèr de tèsè cài ba.',ex_vn:'Anh giới thiệu cho chúng tôi vài món đặc sản ở đây nhé.',
   exList:[
     {zh:'他们不仅要观色、闻香、尝味、赏形，而且还要求食物具有养生方面的特色。',py:'Tāmen bùjǐn yào guān sè, wén xiāng, cháng wèi, shǎng xíng, érqiě hái yāoqiú shíwù jùyǒu yǎngshēng fāngmiàn de tèsè.',vn:'Họ không chỉ muốn ngắm màu, ngửi hương, nếm vị, thưởng hình, mà còn đòi hỏi món ăn có đặc điểm dưỡng sinh.'},
     {zh:'请你给我们推荐几个你们这儿的特色菜吧。',py:'Qǐng nǐ gěi wǒmen tuījiàn jǐ ge nǐmen zhèr de tèsè cài ba.',vn:'Anh giới thiệu cho chúng tôi vài món đặc sản ở đây nhé.'},
     {zh:'怎么样，好吃吧？这饼可是我们家乡的特色美食。',py:'Zěnmeyàng, hǎochī ba? Zhè bǐng kě shì wǒmen jiāxiāng de tèsè měishí.',vn:'Sao, ngon chứ? Bánh này là món ngon đặc trưng của quê tôi đấy.'}
   ],
   colloFull:[
     {zh:'特色菜',py:'tèsè cài',vn:'món đặc sản'},
     {zh:'地方特色',py:'dìfāng tèsè',vn:'nét đặc trưng địa phương'},
     {zh:'中国特色',py:'Zhōngguó tèsè',vn:'đặc sắc Trung Quốc'},
     {zh:'具有特色',py:'jùyǒu tèsè',vn:'có nét đặc sắc'},
     {zh:'很有特色',py:'hěn yǒu tèsè',vn:'rất đặc sắc'}
   ],
   patterns:[
     {s:'很有 / 具有 + 特色',m:'Có nét đặc sắc'},
     {s:'N (地方) + 的特色 + 菜 / 美食',m:'Món đặc sản của đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món đặc sản này là do đầu bếp tự sáng tạo ra.',answer:'这道特色菜是厨师自己发明的。',answerPy:'Zhè dào tèsè cài shì chúshī zìjǐ fāmíng de.',
      note:'是……的 nhấn mạnh người tạo ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Món ở quán này không chỉ đặc sắc mà giá cũng không đắt.',answer:'这家饭馆的菜不仅有特色，价格也不贵。',answerPy:'Zhè jiā fànguǎn de cài bùjǐn yǒu tèsè, jiàgé yě bú guì.',
      note:'有特色 (không nói 很特色); 不仅……也…….',pair:'不仅……也……'}
   ]},

  {n:43,zh:'痰',py:'tán',pos:'Danh từ',vn:'đờm',hv:'đàm',em:'🤧',lesson:1,
   explain:['Chất nhầy tiết ra trong họng, phổi khi bị ho, cảm.','Trong bài: câu tục ngữ 鱼生火，肉生痰，青菜萝卜保平安 — cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an.'],
   usage:'生痰, 有痰, 吐痰, 随地吐痰 (khạc nhổ bừa bãi — hành vi bị cấm nơi công cộng).',
   collo:['生痰','吐痰','有痰','随地吐痰'],
   ex_zh:'鱼生火，肉生痰，青菜萝卜保平安。',ex_py:'Yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān.',ex_vn:'Cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an.',
   exList:[
     {zh:'鱼生火，肉生痰，青菜萝卜保平安。',py:'Yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān.',vn:'Cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an.'},
     {zh:'感冒以后，他嗓子里总是有痰。',py:'Gǎnmào yǐhòu, tā sǎngzi li zǒngshì yǒu tán.',vn:'Sau khi bị cảm, trong họng anh ấy lúc nào cũng có đờm.'},
     {zh:'公共场所请不要随地吐痰。',py:'Gōnggòng chǎngsuǒ qǐng búyào suídì tǔ tán.',vn:'Nơi công cộng xin đừng khạc nhổ bừa bãi.'}
   ],
   colloFull:[
     {zh:'生痰',py:'shēng tán',vn:'sinh đờm'},
     {zh:'吐痰',py:'tǔ tán',vn:'khạc đờm'},
     {zh:'有痰',py:'yǒu tán',vn:'có đờm'},
     {zh:'随地吐痰',py:'suídì tǔ tán',vn:'khạc nhổ bừa bãi'},
     {zh:'化痰',py:'huà tán',vn:'tiêu đờm'}
   ],
   patterns:[
     {s:'N + 生痰',m:'Thứ gì sinh đờm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy tuy đã hạ sốt nhưng vẫn còn đờm.',answer:'他的烧虽然退了，但是还有痰。',answerPy:'Tā de shāo suīrán tuì le, dànshì hái yǒu tán.',
      note:'虽然……但是……还……: vẫn còn.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần uống nhiều nước thì đờm sẽ ít đi.',answer:'只要多喝水，痰就会少一些。',answerPy:'Zhǐyào duō hē shuǐ, tán jiù huì shǎo yìxiē.',
      note:'只要 + điều kiện; 痰 + 就 + 会 + 少一些.',pair:'只要……就……'}
   ]},

  {n:44,zh:'平安',py:'píng\'ān',pos:'Tính từ',vn:'bình an, an toàn',hv:'bình an',em:'🙏',lesson:1,
   explain:['Không gặp nguy hiểm, tai nạn; yên ổn. Trùng khít với tiếng Việt "bình an".','Hay dùng trong lời chúc: 一路平安, 平平安安.'],
   usage:'平安地 + V (平安地度过); 保平安; 平安到达. Chú ý pinyin viết có dấu cách âm: píng\'ān.',
   collo:['一路平安','平平安安','保平安','平安地度过'],
   ex_zh:'鱼生火，肉生痰，青菜萝卜保平安。',ex_py:'Yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān.',ex_vn:'Cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an.',
   exList:[
     {zh:'鱼生火，肉生痰，青菜萝卜保平安。',py:'Yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān.',vn:'Cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an.'},
     {zh:'也许是药物的作用，这一夜他平安地度过了。',py:'Yěxǔ shì yàowù de zuòyòng, zhè yí yè tā píng\'ān de dùguò le.',vn:'Có lẽ nhờ tác dụng của thuốc, đêm nay anh ấy đã qua khỏi an toàn.'},
     {zh:'祝你一路平安，到了给我打个电话。',py:'Zhù nǐ yílù píng\'ān, dàole gěi wǒ dǎ ge diànhuà.',vn:'Chúc bạn thượng lộ bình an, đến nơi gọi cho tôi nhé.'}
   ],
   colloFull:[
     {zh:'一路平安',py:'yílù píng\'ān',vn:'thượng lộ bình an'},
     {zh:'平平安安',py:'píngpíng\'ān\'ān',vn:'bình bình an an'},
     {zh:'保平安',py:'bǎo píng\'ān',vn:'giữ bình an'},
     {zh:'平安地度过',py:'píng\'ān de dùguò',vn:'trải qua an toàn'},
     {zh:'平安到达',py:'píng\'ān dàodá',vn:'đến nơi an toàn'}
   ],
   patterns:[
     {s:'祝 + người + 一路平安',m:'Lời chúc lên đường'},
     {s:'平安地 + V',m:'Làm gì một cách an toàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cả nhà bình an, tôi đã mãn nguyện rồi.',answer:'只要家人平平安安，我就很满足了。',answerPy:'Zhǐyào jiārén píngpíng\'ān\'ān, wǒ jiù hěn mǎnzú le.',
      note:'只要……，我 + 就…… (就 đứng sau chủ ngữ).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Trên đường tuy mưa to nhưng chúng tôi đã về nhà an toàn.',answer:'路上虽然下了大雨，但是我们平安到家了。',answerPy:'Lù shang suīrán xiàle dà yǔ, dànshì wǒmen píng\'ān dào jiā le.',
      note:'虽然……但是……; 平安 làm trạng ngữ trước 到家.',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 19-1), 5 đoạn như sách
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 家乡的萝卜饼',
  preQuiz:[
    {q:'家乡的美食中，最让作者怀念的是什么？',opts:['萝卜饼','饺子','橘子'],ans:0},
    {q:'作者家乡的萝卜有哪几种颜色？',opts:['白、红、绿','青、红、紫','黄、白、紫'],ans:1},
    {q:'紫色的萝卜吃起来怎么样？',opts:['辣中带着甜','甜中带点儿辣','像山泉般清淡可口'],ans:2},
    {q:'父老乡亲们说“橘子、葡萄、梨，比不上咱的萝卜皮”，意思是什么？',opts:['家乡的萝卜特别好吃','家乡没有水果','萝卜皮比萝卜好吃'],ans:0},
    {q:'做萝卜饼需要怎么处理萝卜？',opts:['放进锅里煮','洗净切丝，放油、盐搅拌均匀','用油炸'],ans:1},
    {q:'做萝卜饼最关键的功夫是什么？',opts:['切萝卜','放调料','擀面'],ans:2},
    {q:'饼熟之后，表皮应该是什么样的？',opts:['透明的，能看见萝卜丝儿','焦黄的','红红绿绿的'],ans:0},
    {q:'什么时候把萝卜饼放进锅里？',opts:['水开的时候','油锅烫手的时候','闻到香味的时候'],ans:1},
    {q:'盖锅前为什么要放进一些温水？',opts:['让饼更甜','让饼更透明','预防糊底'],ans:2},
    {q:'什么时候可以开锅？',opts:['能闻到香味时','水烧干时','饼变成紫色时'],ans:0},
    {q:'刚出锅的萝卜饼有什么特点？',opts:['又咸又辣','外焦里嫩，香味扑鼻','凉了才好吃'],ans:1},
    {q:'如今美食家们对食物还有什么要求？',opts:['价格便宜','做法简单','具有养生方面的特色'],ans:2},
    {q:'什么让作者更加喜爱萝卜饼了？',opts:['它养生的功能','它的价格','它的名字'],ans:0}
  ],
  lines:[
    {sp:0,zh:'家乡的众多美食中，萝卜饼是最让我怀念的。它那丰富的色彩、微甜的口感，至今仍让我十分想念。',
     py:'Jiāxiāng de zhòngduō měishí zhōng, luóbobǐng shì zuì ràng wǒ huáiniàn de. Tā nà fēngfù de sècǎi, wēi tián de kǒugǎn, zhìjīn réng ràng wǒ shífēn xiǎngniàn.',
     vn:'Trong vô vàn món ngon của quê nhà, bánh củ cải là món khiến tôi hoài niệm nhất. Màu sắc phong phú, vị ngọt nhẹ của nó đến nay vẫn khiến tôi nhớ da diết.'},
    {sp:0,zh:'家乡的萝卜有青、红、紫三种。三种萝卜看起来赏心悦目，吃起来，青的甜中带点儿辣，红的辣中带着甜，紫的像山泉般清淡可口。父老乡亲们夸它说：“橘子、葡萄、梨，比不上咱的萝卜皮。”而萝卜饼就是用这三种颜色的萝卜做成的。',
     py:'Jiāxiāng de luóbo yǒu qīng, hóng, zǐ sān zhǒng. Sān zhǒng luóbo kàn qǐlái shǎngxīn-yuèmù, chī qǐlái, qīng de tián zhōng dài diǎnr là, hóng de là zhōng dàizhe tián, zǐ de xiàng shānquán bān qīngdàn kěkǒu. Fùlǎo xiāngqīnmen kuā tā shuō: "Júzi, pútao, lí, bǐ bu shàng zán de luóbo pí." Ér luóbobǐng jiù shì yòng zhè sān zhǒng yánsè de luóbo zuòchéng de.',
     vn:'Củ cải quê tôi có ba loại: xanh, đỏ và tím. Ba loại củ cải nhìn thật đẹp mắt vui lòng; ăn vào thì củ xanh ngọt mà thoảng chút cay, củ đỏ cay mà vẫn có vị ngọt, củ tím thanh mát ngon miệng như nước suối trên núi. Bà con cô bác quê tôi khen nó rằng: "Quýt, nho hay lê, chẳng bằng vỏ củ cải quê ta." Và bánh củ cải chính là được làm từ củ cải ba màu này.'},
    {sp:0,zh:'萝卜饼的做法极其简单，既不必炒或煮，也不用油炸。先把三色萝卜洗净切丝，放入油、盐等，用筷子搅拌均匀，萝卜饼的原料便做成了。最关键的功夫是擀面。高手往往把面擀得薄如白纸，拌好的萝卜丝儿铺到饼上后，得再折叠两三次，要求饼熟之后表皮是透明的，能透过表皮看见萝卜丝儿。最后用刀切成块状，饼便做好了。',
     py:'Luóbobǐng de zuòfǎ jíqí jiǎndān, jì búbì chǎo huò zhǔ, yě búyòng yóuzhá. Xiān bǎ sān sè luóbo xǐjìng qiē sī, fàngrù yóu, yán děng, yòng kuàizi jiǎobàn jūnyún, luóbobǐng de yuánliào biàn zuòchéng le. Zuì guānjiàn de gōngfu shì gǎn miàn. Gāoshǒu wǎngwǎng bǎ miàn gǎn de báo rú báizhǐ, bànhǎo de luóbosīr pūdào bǐng shang hòu, děi zài zhédié liǎng-sān cì, yāoqiú bǐng shú zhīhòu biǎopí shì tòumíng de, néng tòuguò biǎopí kànjiàn luóbosīr. Zuìhòu yòng dāo qiēchéng kuàizhuàng, bǐng biàn zuòhǎo le.',
     vn:'Cách làm bánh củ cải cực kỳ đơn giản, không cần xào hay nấu, cũng không phải chiên dầu. Trước tiên rửa sạch củ cải ba màu, thái sợi, cho dầu, muối… vào, dùng đũa trộn đều, thế là nguyên liệu bánh đã xong. Khâu cần tay nghề nhất là cán bột. Người giỏi thường cán bột mỏng như tờ giấy trắng; rải sợi củ cải đã trộn lên bánh xong, còn phải gấp lại hai ba lần, yêu cầu là bánh chín rồi thì lớp vỏ phải trong suốt, nhìn xuyên qua vỏ thấy được sợi củ cải. Cuối cùng dùng dao cắt thành miếng, thế là bánh đã làm xong.'},
    {sp:0,zh:'接下来，拿一个平底锅，先在锅里淋一圈油，待油锅烫手时，将切好的萝卜饼一块一块地放进锅里。盖锅前须放进一些温水，预防糊底。火最好用文火，等能闻到香味时，便可开锅了。萝卜饼要趁热吃，喜欢口味重的，还可以加少许酱油和醋。刚出锅的萝卜饼，香味扑鼻，外焦里嫩，吃上一口，便让人永远忘不了。',
     py:'Jiē xiàlái, ná yí ge píngdǐguō, xiān zài guō li lín yì quān yóu, dài yóuguō tàng shǒu shí, jiāng qiēhǎo de luóbobǐng yí kuài yí kuài de fàngjìn guō li. Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ. Huǒ zuìhǎo yòng wénhuǒ, děng néng wéndào xiāngwèi shí, biàn kě kāi guō le. Luóbobǐng yào chèn rè chī, xǐhuan kǒuwèi zhòng de, hái kěyǐ jiā shǎoxǔ jiàngyóu hé cù. Gāng chū guō de luóbobǐng, xiāngwèi pūbí, wài jiāo lǐ nèn, chī shàng yì kǒu, biàn ràng rén yǒngyuǎn wàng bu liǎo.',
     vn:'Tiếp theo, lấy một cái chảo đáy phẳng, trước hết rưới một vòng dầu vào chảo, đợi chảo dầu nóng rát tay thì cho từng miếng bánh củ cải đã cắt vào. Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy. Lửa tốt nhất để nhỏ, đợi khi ngửi thấy mùi thơm là có thể mở vung. Bánh củ cải phải ăn lúc còn nóng, ai thích vị đậm thì có thể thêm chút xì dầu và giấm. Bánh củ cải vừa ra chảo thơm xộc vào mũi, ngoài giòn trong mềm, ăn một miếng là nhớ mãi không quên.'},
    {sp:0,zh:'如今，美食家们对吃提出了更高的要求。他们不仅要观色、闻香、尝味、赏形，而且还要求食物具有养生方面的特色。我想，家乡的萝卜饼完全具备这几个方面的条件，人们不是常说吗——“鱼生火，肉生痰，青菜萝卜保平安”，养生的功能，让我更加喜爱它了。',
     py:'Rújīn, měishíjiāmen duì chī tíchūle gèng gāo de yāoqiú. Tāmen bùjǐn yào guān sè, wén xiāng, cháng wèi, shǎng xíng, érqiě hái yāoqiú shíwù jùyǒu yǎngshēng fāngmiàn de tèsè. Wǒ xiǎng, jiāxiāng de luóbobǐng wánquán jùbèi zhè jǐ ge fāngmiàn de tiáojiàn, rénmen bú shì cháng shuō ma——"yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān", yǎngshēng de gōngnéng, ràng wǒ gèngjiā xǐ\'ài tā le.',
     vn:'Ngày nay, những người sành ăn đặt ra yêu cầu cao hơn với chuyện ăn uống. Họ không chỉ muốn ngắm màu, ngửi hương, nếm vị, thưởng hình, mà còn đòi hỏi món ăn phải có đặc điểm dưỡng sinh. Tôi nghĩ, bánh củ cải quê tôi hội đủ mọi điều kiện ấy; chẳng phải người ta vẫn thường nói "cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an" đó sao — công dụng dưỡng sinh ấy khiến tôi càng thêm yêu nó.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — 怀念/想念 lấy từ sách (tr. 18–19)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'怀念 — 想念',
   same:'Đều là động từ, đều diễn tả không quên được người hoặc nơi chốn, có ý nhớ nhung.',
   sameEx:{zh:'每当回忆起小学时代的学习生活，我最怀念／想念的人就是刘老师。',vn:'Mỗi khi nhớ lại những năm tháng học tiểu học, người tôi nhớ nhất chính là thầy Lưu.'},
   items:[
     {word:'怀念',points:[
       'Hay dùng trong VĂN VIẾT, nhấn mạnh thường xuyên nhớ lại, không quên được.',
       'Hay dùng với người ĐÃ KHUẤT hoặc hoàn cảnh KHÔNG THỂ gặp lại (tuổi thơ, quãng đời đã qua).',
       'Danh từ hoá được: 对……的怀念.'
     ],ex:[{zh:'刘教授非常怀念年轻时在国外留学的那段生活。',vn:'Giáo sư Lưu vô cùng hoài niệm quãng thời gian du học ở nước ngoài hồi trẻ.'},
          {zh:'从文章中我们读到了先生对去世的母亲的怀念。',vn:'Qua bài văn, chúng ta đọc được nỗi tưởng nhớ của ông với người mẹ đã khuất.'}]},
     {word:'想念',points:[
       'Hay dùng trong KHẨU NGỮ, nhấn mạnh MONG ĐƯỢC GẶP LẠI ai đó.',
       'Hay dùng với người CÒN SỐNG hoặc nơi chốn CÓ THỂ quay về.',
       'Đi được với 很 / 十分 / 格外: 很想念你.'
     ],ex:[{zh:'女儿告诉我，她很想念出差的爸爸。',vn:'Con gái bảo tôi, nó rất nhớ bố đang đi công tác.'},
          {zh:'每到春节，我就格外想念家乡的一草一木。',vn:'Mỗi dịp Tết đến, tôi lại đặc biệt nhớ từng ngọn cỏ, cành cây ở quê.'}]}
   ],
   quiz:[
     {sentence:'在南方的时候，我总是＿＿北方雪花飘飘的美景。',options:['怀念','想念'],answer:1,
      why:'Cảnh tuyết phương Bắc vẫn có thể quay lại ngắm → 想念 (câu mẫu của sách).'},
     {sentence:'在国外工作的那段时间，他时时刻刻都在＿＿着家人。',options:['怀念','想念'],answer:1,
      why:'Người thân còn sống, mong được gặp lại → 想念.'},
     {sentence:'在楼房里住了十多年后，老李却开始＿＿起住在四合院里的生活。',options:['怀念','想念'],answer:0,
      why:'Cuộc sống trong tứ hợp viện đã qua, không quay lại được → 怀念.'},
     {sentence:'奶奶去世已经五年了，我们都很＿＿她。',options:['怀念','想念'],answer:0,
      why:'Người đã khuất → 怀念.'}
   ],
   sgk:{
     chung:{t:'都是动词，都表示对人或环境不能忘记，有思念的意思。',vn:'Đều là động từ, đều diễn tả không quên được người hoặc nơi chốn, có ý nhớ nhung.',vd:'每当回忆起小学时代的学习生活，我最怀念／想念的人就是刘老师。',vdVn:'Mỗi khi nhớ lại những năm tháng học tiểu học, người tôi nhớ nhất chính là thầy Lưu.'},
     khac:[
       {a:{t:'多用于书面语，语义强调常常想起，不能忘记。',vn:'Hay dùng trong văn viết, nhấn mạnh thường xuyên nhớ lại, không quên được.',vd:'刘教授非常怀念年轻时在国外留学的那段生活。',vdVn:'Giáo sư Lưu vô cùng hoài niệm quãng thời gian du học ở nước ngoài hồi trẻ.'},
        b:{t:'多用于口语，语义强调希望见到某人。',vn:'Hay dùng trong khẩu ngữ, nhấn mạnh mong được gặp ai đó.',vd:'女儿告诉我，她很想念出差的爸爸。',vdVn:'Con gái bảo tôi, nó rất nhớ bố đang đi công tác.'}},
       {a:{t:'多用于已去世的人或不能再见到的环境。',vn:'Hay dùng với người đã khuất hoặc hoàn cảnh không thể gặp lại.',vd:'从文章中我们读到了先生对去世的母亲的怀念。',vdVn:'Qua bài văn, chúng ta đọc được nỗi tưởng nhớ của ông với người mẹ đã khuất.'},
        b:{t:'多用于活着的人或能再见到的环境。',vn:'Hay dùng với người còn sống hoặc nơi chốn có thể gặp lại.',vd:'每到春节，我就格外想念家乡的一草一木。',vdVn:'Mỗi dịp Tết đến, tôi lại đặc biệt nhớ từng ngọn cỏ, cành cây ở quê.'}}
     ],
     lamThu:[
       {s:'在南方的时候，我总是＿＿北方雪花飘飘的美景。',dap:[false,true],mau:true,
        giai:'Cảnh tuyết phương Bắc vẫn có thể quay lại ngắm, mang ý mong được thấy lại → 想念 (câu mẫu của sách).'},
       {s:'在国外工作的那段时间，他时时刻刻都在＿＿着家人。',dap:[false,true],
        giai:'Người thân còn sống, mong được gặp → 想念.'},
       {s:'一阵清风送来桂花的清香，令我＿＿起自己的家乡。',dap:[false,true],
        giai:'Quê hương là nơi còn có thể quay về, lòng mong được trở về → 想念 (như câu 每到春节，我就格外想念家乡).'},
       {s:'在楼房里住了十多年后，老李却开始＿＿起住在四合院里的生活。',dap:[true,false],
        giai:'Cuộc sống trong tứ hợp viện đã là quá khứ, không quay lại được → 怀念.'}
     ]
   }},

  {pair:'色彩 — 颜色',
   same:'Đều chỉ MÀU SẮC của sự vật.',
   sameEx:{zh:'这幅画的色彩／颜色很丰富。',vn:'Màu sắc của bức tranh này rất phong phú.'},
   items:[
     {word:'色彩',points:[
       'Sắc thái VĂN VIẾT, chỉ màu sắc nói chung, tổng thể: 色彩丰富, 色彩鲜艳.',
       'Có nghĩa bóng: sắc thái tư tưởng, tình cảm — 感情色彩, 民族色彩, 喜剧色彩.',
       'Không đi với số lượng cụ thể: không nói 三种色彩的萝卜.'
     ],ex:[{zh:'尽管这话里感情色彩很重，但也不是没有道理。',vn:'Tuy câu này mang nặng màu sắc cảm xúc, nhưng cũng không phải không có lý.'},
          {zh:'它那丰富的色彩、微甜的口感，至今仍让我十分想念。',vn:'Màu sắc phong phú, vị ngọt nhẹ của nó đến nay vẫn khiến tôi nhớ da diết.'}]},
     {word:'颜色',points:[
       'Từ thường dùng, KHẨU NGỮ, chỉ từng màu cụ thể: 红颜色, 什么颜色.',
       'Đếm được: 三种颜色, 一种颜色.',
       'Không có nghĩa "sắc thái tình cảm".'
     ],ex:[{zh:'而萝卜饼就是用这三种颜色的萝卜做成的。',vn:'Và bánh củ cải chính là được làm từ củ cải ba màu này.'},
          {zh:'你喜欢什么颜色的衣服？',vn:'Bạn thích quần áo màu gì?'}]}
   ],
   quiz:[
     {sentence:'尽管这话里感情＿＿很重，但也不是没有道理。',options:['色彩','颜色'],answer:0,
      why:'Nghĩa bóng "sắc thái cảm xúc" → chỉ 色彩 (câu của sách).'},
     {sentence:'你最喜欢什么＿＿？',options:['色彩','颜色'],answer:1,
      why:'Hỏi một màu cụ thể, khẩu ngữ → 颜色.'},
     {sentence:'萝卜饼是用三种＿＿的萝卜做成的。',options:['色彩','颜色'],answer:1,
      why:'Có số lượng cụ thể (三种) → 颜色.'},
     {sentence:'这部电影带有浓厚的民族＿＿。',options:['色彩','颜色'],answer:0,
      why:'民族色彩 = màu sắc dân tộc (nghĩa bóng) → 色彩.'}
   ]},

  {pair:'特色 — 特点',
   same:'Đều chỉ nét RIÊNG, khác biệt của sự vật.',
   sameEx:{zh:'这家饭馆的菜很有特色／特点。',vn:'Món ăn ở quán này rất có nét riêng.'},
   items:[
     {word:'特色',points:[
       'Nét ĐẶC SẮC, nổi bật và mang ý KHEN — thường dùng cho món ăn, vùng đất, tác phẩm.',
       'Hay gặp: 特色菜, 地方特色, 中国特色, 很有特色.',
       'Ít dùng để nói tính cách con người.'
     ],ex:[{zh:'请你给我们推荐几个你们这儿的特色菜吧。',vn:'Anh giới thiệu cho chúng tôi vài món đặc sản ở đây nhé.'}]},
     {word:'特点',points:[
       'Đặc điểm nói chung, TRUNG TÍNH (tốt hay xấu đều được).',
       'Dùng được cho cả người: 他的特点是胆大.',
       'Hay gặp: 最大的特点, 有……的特点, 特点是…….'
     ],ex:[{zh:'了解李阳的人都说，李阳最大的特点就是胆大、敢干。',vn:'Ai hiểu Lý Dương đều nói, đặc điểm lớn nhất của anh ấy là gan dạ, dám làm.'}]}
   ],
   quiz:[
     {sentence:'了解李阳的人都说，李阳最大的＿＿就是胆大、敢干。',options:['特色','特点'],answer:1,
      why:'Nói về tính cách con người → 特点 (bài tập 2 của sách).'},
     {sentence:'请你给我们推荐几个你们这儿的＿＿菜吧。',options:['特色','特点'],answer:0,
      why:'Cụm cố định 特色菜 (món đặc sản).'},
     {sentence:'此菜的＿＿是色彩美观，味香可口。',options:['特色','特点'],answer:1,both:true,
      why:'Mẫu 此菜的特点是…… (câu của sách). Dùng 特色 cũng hiểu được nhưng 特点是 + liệt kê là cách nói chuẩn.'},
     {sentence:'这个小镇的建筑很有地方＿＿。',options:['特色','特点'],answer:0,
      why:'地方特色 = nét đặc trưng địa phương, mang ý khen → 特色.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'家乡',hv:'gia hương',vn:'quê nhà, quê hương',note:'"Gia" = nhà, "hương" = làng quê (như "quê hương", "đồng hương").'},
    {zh:'怀念',hv:'hoài niệm',vn:'hoài niệm, tưởng nhớ',note:'Trùng khít — và cũng mang sắc thái văn viết như tiếng Việt.'},
    {zh:'清淡',hv:'thanh đạm',vn:'thanh đạm, nhạt',note:'Tiếng Việt "bữa cơm thanh đạm" — đúng nghĩa ăn nhẹ, ít dầu mỡ.'},
    {zh:'原料',hv:'nguyên liệu',vn:'nguyên liệu',note:'Trùng khít.'},
    {zh:'预防',hv:'dự phòng',vn:'phòng ngừa',note:'"Dự phòng" = phòng trước; tiếng Việt hay nói "phòng ngừa".'},
    {zh:'口味',hv:'khẩu vị',vn:'khẩu vị',note:'Trùng khít: "hợp khẩu vị" = 合口味.'},
    {zh:'特色',hv:'đặc sắc',vn:'nét đặc sắc, đặc trưng',note:'Tiếng Việt "đặc sắc" là tính từ; 特色 tiếng Trung chủ yếu là DANH TỪ: 很有特色.'},
    {zh:'平安',hv:'bình an',vn:'bình an',note:'Trùng khít: 一路平安 = thượng lộ bình an.'},
    {zh:'透明',hv:'thấu minh',vn:'trong suốt; minh bạch',note:'"Thấu" = xuyên qua (thấu hiểu, thẩm thấu), "minh" = sáng → ánh sáng xuyên qua được.'},
    {zh:'痰',hv:'đàm',vn:'đờm',note:'"Đàm" chính là "đờm" (ho có đàm).'}
  ],
  idiom:[
    {zh:'赏心悦目',hv:'thưởng tâm duyệt mục',vn:'đẹp mắt vui lòng',note:'"Thưởng tâm" = lòng vui, "duyệt mục" = mắt thích (duyệt như "hỉ duyệt").'},
    {zh:'外焦里嫩',hv:'ngoại tiêu lý nộn',vn:'ngoài giòn trong mềm',note:'"Ngoại" ngoài, "lý" trong, "tiêu" cháy sém, "nộn" non mềm.'},
    {zh:'百闻不如一见',hv:'bách văn bất như nhất kiến',vn:'trăm nghe không bằng một thấy',note:'Tiếng Việt dùng y nguyên. Ở đây 闻 = NGHE — nghĩa cổ của chữ 闻.'},
    {zh:'父老乡亲',hv:'phụ lão hương thân',vn:'bà con cô bác quê nhà',note:'Cách gọi thân mật những người cùng quê.'}
  ],
  trap:[
    {zh:'想念',hv:'tưởng niệm',vn:'nhớ',
     warn:'BẪY: "tưởng niệm" tiếng Việt là tưởng nhớ người đã khuất (lễ tưởng niệm = 纪念). 想念 chỉ là NHỚ bình thường, hay dùng với người còn sống: 我很想念你.'},
    {zh:'色彩',hv:'sắc thái',vn:'màu sắc; sắc thái',
     warn:'"Sắc thái" tiếng Việt thường là nghĩa bóng (sắc thái nghĩa). 色彩 trước hết là MÀU SẮC thật: 色彩丰富; nghĩa bóng chỉ trong 感情色彩, 民族色彩.'},
    {zh:'闻',hv:'văn',vn:'ngửi',
     warn:'BẪY: "văn" (nghe) trong "kiến văn". Động từ 闻 hiện đại là NGỬI: 闻到香味. Muốn nói "nghe" dùng 听.'},
    {zh:'文火',hv:'văn hỏa',vn:'lửa nhỏ',
     warn:'Không liên quan văn chương. 文 ở đây là "nhẹ nhàng" — 文火 = lửa nhỏ, đối lập 武火 (lửa to).'},
    {zh:'夸',hv:'khoa',vn:'khen',
     warn:'"Khoa trương" tiếng Việt là phô trương. 夸 tiếng Trung trước hết là KHEN: 老师夸他聪明.'},
    {zh:'酱油',hv:'tương du',vn:'xì dầu, nước tương',
     warn:'Không phải "tương ớt" (辣椒酱) hay "dầu" ăn. 酱油 là xì dầu (nước tương đậu nành).'},
    {zh:'可口',hv:'khả khẩu',vn:'ngon miệng',
     warn:'"Khả" ở đây = hợp, vừa (không phải "có thể"). 可口 chỉ dùng cho đồ ăn uống.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 18) + luyện tập 3 (tr. 20) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'切',right:'蛋糕'},
  {left:'预防',right:'感冒'},
  {left:'民族',right:'色彩'},
  {left:'中国的',right:'特色'},
  {left:'搅拌',right:'均匀'},
  {left:'烫',right:'手'},
  {left:'盖上',right:'盖子'},
  {left:'煮',right:'饺子'},
  {left:'炒',right:'肉丝'},
  {left:'闻',right:'味道'},
  {left:'口味',right:'清淡'},
  {left:'色彩',right:'丰富'},
  {left:'玻璃',right:'透明'},
  {left:'特色',right:'明显'},
  {left:'呼吸',right:'均匀'},
  {left:'赏心',right:'悦目'},
  {left:'外焦',right:'里嫩'},
  {left:'一路',right:'平安'},
  {left:'淋一圈',right:'油'},
  {left:'趁热',right:'吃'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我的',blank:'家乡',post:'在越南中部，那儿的海特别漂亮。',hint:'(quê nhà)',ans:'家乡'},
  {pre:'研究发现，常吃胡',blank:'萝卜',post:'能起到保护眼睛的效果。',hint:'(củ cải)',ans:'萝卜'},
  {pre:'家乡的萝卜有',blank:'青',post:'、红、紫三种。',hint:'(xanh)',ans:'青'},
  {pre:'她穿了一条',blank:'紫',post:'色的裙子，特别好看。',hint:'(tím)',ans:'紫'},
  {pre:'公园里的花都开了，让人',blank:'赏心悦目',post:'。',hint:'(đẹp mắt vui lòng)',ans:'赏心悦目'},
  {pre:'说起那段往事，她的脸上露出了阳光',blank:'般',post:'的笑容。',hint:'(giống như)',ans:'般'},
  {pre:'医生说我最近要吃得',blank:'清淡',post:'一点儿。',hint:'(nhạt, thanh đạm)',ans:'清淡'},
  {pre:'妈妈做的饭菜又便宜又',blank:'可口',post:'。',hint:'(ngon miệng)',ans:'可口'},
  {pre:'今天我被老师',blank:'夸',post:'了，特别开心。',hint:'(khen)',ans:'夸'},
  {pre:'过年的时候，家里总是摆着一盘',blank:'橘子',post:'。',hint:'(quả quýt)',ans:'橘子'},
  {pre:'妈妈给我削了一个',blank:'梨',post:'。',hint:'(quả lê)',ans:'梨'},
  {pre:'我会做的第一个菜是西红柿',blank:'炒',post:'鸡蛋。',hint:'(xào)',ans:'炒'},
  {pre:'饺子',blank:'煮',post:'熟后要趁热吃才好。',hint:'(luộc, nấu)',ans:'煮'},
  {pre:'',blank:'油炸',post:'食品不健康，少吃一点儿就行了。',hint:'(chiên ngập dầu)',ans:'油炸'},
  {pre:'你帮我把生日蛋糕',blank:'切',post:'成八块吧。',hint:'(cắt)',ans:'切'},
  {pre:'我最爱吃妈妈炒的土豆',blank:'丝',post:'。',hint:'(sợi)',ans:'丝'},
  {pre:'咖啡里放了糖，你',blank:'搅拌',post:'一下再喝。',hint:'(khuấy)',ans:'搅拌'},
  {pre:'做这道菜的',blank:'原料',post:'很简单，只有鸡蛋和西红柿。',hint:'(nguyên liệu)',ans:'原料'},
  {pre:'包饺子的时候，奶奶',blank:'擀',post:'皮，我来包。',hint:'(cán bột)',ans:'擀'},
  {pre:'天冷了，别穿那么',blank:'薄',post:'的衣服出门。',hint:'(mỏng)',ans:'薄'},
  {pre:'这把椅子可以',blank:'折叠',post:'，放在车里很方便。',hint:'(gập lại)',ans:'折叠'},
  {pre:'我今天没带伞，被雨',blank:'淋',post:'湿了。',hint:'(dầm, xối)',ans:'淋'},
  {pre:'我每天晚上绕着操场跑五',blank:'圈',post:'。',hint:'(vòng)',ans:'圈'},
  {pre:'睡觉时要把被子',blank:'盖',post:'好，别着凉了。',hint:'(đắp, đậy)',ans:'盖'},
  {pre:'这锅鸡汤要用',blank:'文火',post:'慢慢煮两个小时。',hint:'(lửa nhỏ)',ans:'文火'},
  {pre:'鸡蛋炒好以后，最后放入',blank:'少许',post:'盐就可以了。',hint:'(một chút)',ans:'少许'},
  {pre:'炒的时候，少放',blank:'酱油',post:'，颜色会更好看。',hint:'(xì dầu)',ans:'酱油'},
  {pre:'北方人吃饺子的时候喜欢蘸一点儿',blank:'醋',post:'。',hint:'(giấm)',ans:'醋'},
  {pre:'感冒以后，他嗓子里总是有',blank:'痰',post:'。',hint:'(đờm)',ans:'痰'},
  {pre:'你们到各地去旅游，老话说：百',blank:'闻',post:'不如一见。',hint:'(nghe — nghĩa ngữ tố)',ans:'闻'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (般 · 闻 · 趁) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['紫的','像','山泉','般','清淡','可口','。'],ans:'紫的像山泉般清淡可口。',audio:'紫的像山泉般清淡可口。'},
  {words:['她的脸上','露出了','阳光般的','笑容','。'],ans:'她的脸上露出了阳光般的笑容。',audio:'她的脸上露出了阳光般的笑容。'},
  {words:['我的眼泪','雨点般','不停地','往下掉','。'],ans:'我的眼泪雨点般不停地往下掉。',audio:'我的眼泪雨点般不停地往下掉。'},
  {words:['我','一进门','就','闻到了','一股香味','。'],ans:'我一进门就闻到了一股香味。',audio:'我一进门就闻到了一股香味。'},
  {words:['他','把壶盖儿','打开','，','闻了闻','。'],ans:'他把壶盖儿打开，闻了闻。',audio:'他把壶盖儿打开，闻了闻。'},
  {words:['萝卜饼','要','趁热','吃','。'],ans:'萝卜饼要趁热吃。',audio:'萝卜饼要趁热吃。'},
  {words:['趁着','这几天','休息','，','我们','去看看房子吧','。'],ans:'趁着这几天休息，我们去看看房子吧。',audio:'趁着这几天休息，我们去看看房子吧。'},
  {words:['趁','电影','还没开始','，','我','去买','两瓶水','。'],ans:'趁电影还没开始，我去买两瓶水。',audio:'趁电影还没开始，我去买两瓶水。'},
  {words:['高手','往往','把面','擀得','薄如白纸','。'],ans:'高手往往把面擀得薄如白纸。',audio:'高手往往把面擀得薄如白纸。'},
  {words:['先','把萝卜','洗净','切丝','，','再','搅拌均匀','。'],ans:'先把萝卜洗净切丝，再搅拌均匀。',audio:'先把萝卜洗净切丝，再搅拌均匀。'},
  {words:['盖锅前','须','放进','一些温水','，','预防','糊底','。'],ans:'盖锅前须放进一些温水，预防糊底。',audio:'盖锅前须放进一些温水，预防糊底。'},
  {words:['三种萝卜','看起来','赏心悦目','。'],ans:'三种萝卜看起来赏心悦目。',audio:'三种萝卜看起来赏心悦目。'},
  {words:['萝卜饼','是','最','让我','怀念的','。'],ans:'萝卜饼是最让我怀念的。',audio:'萝卜饼是最让我怀念的。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'奶奶去世已经五年了，我们都很____她。',opts:['怀念','想念','想起','想法'],ans:0,
   exp:'Người đã khuất → 怀念 (văn viết, không thể gặp lại). 想念 dùng với người còn sống, mong gặp lại; 想起 là "nhớ ra"; 想法 là danh từ "ý nghĩ".'},
  {wrong:'女儿告诉我，她很____出差的爸爸。',opts:['想念','怀念','纪念','念书'],ans:0,
   exp:'Bố đi công tác sẽ về, con mong gặp lại → 想念 (khẩu ngữ). 怀念 dùng cho người đã khuất / quá khứ; 纪念 là kỷ niệm; 念书 là đi học.'},
  {wrong:'尽管这话里感情____很重，但也不是没有道理。',opts:['色彩','颜色','特色','口味'],ans:0,
   exp:'感情色彩 = sắc thái cảm xúc (nghĩa bóng) → chỉ 色彩. 颜色 là màu cụ thể; 特色, 口味 sai nghĩa.'},
  {wrong:'女儿安静地睡在她身旁，呼吸也很____。',opts:['均匀','平均','平安','透明'],ans:0,
   exp:'Hơi thở đều → 呼吸均匀. 平均 là "bình quân" (平均分数), không tả hơi thở; 平安, 透明 sai nghĩa.'},
  {wrong:'饼熟之后表皮是____的，能透过表皮看见萝卜丝儿。',opts:['透明','清淡','均匀','可口'],ans:0,
   exp:'Nhìn xuyên qua được → 透明 (trong suốt).'},
  {wrong:'汤太____了，等一会儿再喝吧。',opts:['烫','焦','糊','嫩'],ans:0,
   exp:'Nóng đến mức uống vào bị bỏng → 烫. 焦, 糊 là cháy; 嫩 là mềm.'},
  {wrong:'研究发现，常吃胡萝卜能起到保护眼睛、____近视的效果。',opts:['预防','防止','保护','预报'],ans:0,
   exp:'Phòng ngừa bệnh tật → 预防近视 (câu của sách). 防止 nhấn mạnh chặn một việc cụ thể sắp xảy ra; 保护 đã dùng cho 眼睛; 预报 là dự báo.'},
  {wrong:'我光顾着看手机，锅里的菜都炒____了。',opts:['糊','嫩','淋','薄'],ans:0,
   exp:'Nấu quá lửa đến cháy khét → 炒糊了. 嫩 (mềm), 淋 (rưới), 薄 (mỏng) không làm bổ ngữ ở đây.'},
  {wrong:'火最好用文火，等能____到香味时，便可开锅了。',opts:['闻','听','看','尝'],ans:0,
   exp:'Cảm nhận mùi bằng mũi → 闻到香味. Người Việt hay nhầm vì "văn" = nghe; nghe là 听.'},
  {wrong:'萝卜饼要____热吃，喜欢口味重的，还可以加少许酱油和醋。',opts:['趁','等','在','从'],ans:0,
   exp:'Tận dụng lúc bánh còn nóng → 趁热吃. 等热 là "đợi nóng" — ngược nghĩa.'},
  {wrong:'____我们从天津回来时，才听说她出国的事。',opts:['等','趁','把','被'],ans:0,
   exp:'"Đợi đến khi … mới …" → 等……时，才……. 趁 là tận dụng cơ hội để làm việc gì, không hợp với 才听说 (bài tập 2 của sách).'},
  {wrong:'怎么你今天吃得这么少？是不是这些菜不合你的____？',opts:['口味','口感','味道','特色'],ans:0,
   exp:'合口味 = hợp khẩu vị (cụm cố định). 口感 là cảm giác khi nhai; không nói 合味道, 合特色.'},
  {wrong:'刚出锅的萝卜饼，香味扑鼻，外____里嫩。',opts:['焦','糊','烫','薄'],ans:0,
   exp:'Cụm cố định 外焦里嫩 — ngoài vàng giòn, trong mềm. 糊 là cháy khét (hỏng), không dùng để khen.'},
  {wrong:'这块牛肉做得很____，老人也咬得动。',opts:['嫩','焦','透明','清淡'],ans:0,
   exp:'Thịt mềm, dễ nhai → 嫩. 焦 là cháy; 透明 là trong suốt; 清淡 là nhạt, không nói độ mềm.'},
  {wrong:'请你给我们推荐几个你们这儿的____菜吧。',opts:['特色','特点','色彩','口味'],ans:0,
   exp:'特色菜 = món đặc sản (cụm cố định). Không nói 特点菜.'},
  {wrong:'了解李阳的人都说，李阳最大的____就是胆大、敢干。',opts:['特点','特色','色彩','口味'],ans:0,
   exp:'Nói tính cách con người → 特点. 特色 dùng cho món ăn, vùng đất, tác phẩm (bài tập 2 của sách).'},
  {wrong:'也许是药物的作用，这一夜他____地度过了。',opts:['平安','平均','均匀','清淡'],ans:0,
   exp:'Qua đêm an toàn, không có chuyện gì → 平安地度过 (bài tập 1 của sách).'},
  {wrong:'萝卜饼就是用这三种____的萝卜做成的。',opts:['颜色','色彩','特色','口感'],ans:0,
   exp:'Có số lượng cụ thể (三种) → 颜色. 色彩 chỉ màu sắc tổng thể, không đếm theo 种 như vậy.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Món ăn khiến tôi hoài niệm nhất là bánh củ cải của quê nhà.',zh:'最让我怀念的美食是家乡的萝卜饼。',py:'Zuì ràng wǒ huáiniàn de měishí shì jiāxiāng de luóbobǐng.'},
  {vi:'Mỗi dịp Tết đến, tôi lại đặc biệt nhớ quê.',zh:'每到春节，我就格外想念家乡。',py:'Měi dào Chūnjié, wǒ jiù géwài xiǎngniàn jiāxiāng.'},
  {vi:'Cô ấy nở nụ cười rạng rỡ như ánh nắng.',zh:'她露出了阳光般的笑容。',py:'Tā lùchūle yángguāng bān de xiàoróng.'},
  {vi:'Nhân lúc phim chưa chiếu, tôi đi mua hai chai nước.',zh:'趁电影还没开始，我去买两瓶水。',py:'Chèn diànyǐng hái méi kāishǐ, wǒ qù mǎi liǎng píng shuǐ.'},
  {vi:'Tôi vừa vào cửa đã ngửi thấy một mùi thơm.',zh:'我一进门就闻到了一股香味。',py:'Wǒ yí jìn mén jiù wéndàole yì gǔ xiāngwèi.'},
  {vi:'Đồ chiên rán tuy ngon nhưng không tốt cho sức khoẻ.',zh:'油炸食品虽然好吃，但是对身体不好。',py:'Yóuzhá shípǐn suīrán hǎochī, dànshì duì shēntǐ bù hǎo.'},
  {vi:'Bạn giới thiệu cho chúng tôi vài món đặc sản ở đây nhé.',zh:'请你给我们推荐几个你们这儿的特色菜吧。',py:'Qǐng nǐ gěi wǒmen tuījiàn jǐ ge nǐmen zhèr de tèsè cài ba.'},
  {vi:'Thường ăn cà rốt có thể phòng ngừa cận thị.',zh:'常吃胡萝卜可以预防近视。',py:'Cháng chī húluóbo kěyǐ yùfáng jìnshì.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Ba loại củ cải nhìn thật đẹp mắt.',zh:'三种萝卜看起来赏心悦目。',py:'Sān zhǒng luóbo kàn qǐlái shǎngxīn-yuèmù.'},
  {vi:'Củ tím thanh mát, ngon miệng như nước suối trên núi.',zh:'紫的像山泉般清淡可口。',py:'Zǐ de xiàng shānquán bān qīngdàn kěkǒu.'},
  {vi:'Cách làm bánh củ cải không cần xào hay nấu, cũng không phải chiên dầu.',zh:'萝卜饼既不必炒或煮，也不用油炸。',py:'Luóbobǐng jì búbì chǎo huò zhǔ, yě búyòng yóuzhá.'},
  {vi:'Người giỏi thường cán bột mỏng như tờ giấy trắng.',zh:'高手往往把面擀得薄如白纸。',py:'Gāoshǒu wǎngwǎng bǎ miàn gǎn de báo rú báizhǐ.'},
  {vi:'Trước khi đậy vung phải cho vào một ít nước ấm để phòng cháy đáy.',zh:'盖锅前须放进一些温水，预防糊底。',py:'Gài guō qián xū fàngjìn yìxiē wēnshuǐ, yùfáng hú dǐ.'},
  {vi:'Bánh củ cải phải ăn lúc còn nóng.',zh:'萝卜饼要趁热吃。',py:'Luóbobǐng yào chèn rè chī.'},
  {vi:'Bánh vừa ra chảo ngoài giòn trong mềm.',zh:'刚出锅的饼外焦里嫩。',py:'Gāng chū guō de bǐng wài jiāo lǐ nèn.'},
  {vi:'Cá làm nóng trong, thịt sinh đờm, rau xanh củ cải giữ bình an.',zh:'鱼生火，肉生痰，青菜萝卜保平安。',py:'Yú shēng huǒ, ròu shēng tán, qīngcài luóbo bǎo píng\'ān.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['怀念','特色','口味','清淡','趁'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ giới thiệu một món ăn quê em mà em nhớ nhất.',
  outline:[
    'Câu mở: quê em ở đâu, món ăn đặc sắc nhất là gì (dùng 特色).',
    'Thân 1: món ăn ấy được làm / có hương vị thế nào (dùng 口味, 清淡).',
    'Thân 2: một kỷ niệm với món ăn ấy — ai nấu, ăn thế nào (dùng 趁).',
    'Kết: bây giờ xa quê, cảm xúc của em ra sao (dùng 怀念).'
  ],
  model:{
    zh:'我的家乡在越南北部，那儿最有特色的美食是牛肉河粉。河粉的汤要用文火煮好几个小时，口味清淡，可是香味扑鼻。小时候，妈妈常常让我趁热吃一大碗。现在我在外地上学，虽然也能吃到河粉，但是总觉得没有家乡的好吃。我越来越怀念那碗河粉了。',
    py:'Wǒ de jiāxiāng zài Yuènán běibù, nàr zuì yǒu tèsè de měishí shì niúròu héfěn. Héfěn de tāng yào yòng wénhuǒ zhǔ hǎo jǐ ge xiǎoshí, kǒuwèi qīngdàn, kěshì xiāngwèi pūbí. Xiǎoshíhou, māma chángcháng ràng wǒ chèn rè chī yí dà wǎn. Xiànzài wǒ zài wàidì shàngxué, suīrán yě néng chīdào héfěn, dànshì zǒng juéde méiyǒu jiāxiāng de hǎochī. Wǒ yuè lái yuè huáiniàn nà wǎn héfěn le.',
    vn:'Quê tôi ở miền Bắc Việt Nam, món ngon đặc sắc nhất ở đó là phở bò. Nước dùng phở phải ninh lửa nhỏ mấy tiếng liền, vị thanh nhẹ mà thơm nức mũi. Hồi nhỏ, mẹ hay bắt tôi ăn một bát to lúc còn nóng. Giờ tôi đi học xa nhà, tuy vẫn ăn được phở nhưng luôn thấy không ngon bằng ở quê. Tôi càng ngày càng hoài niệm bát phở ấy.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '趁 có đứng TRƯỚC động từ chính không (趁热吃, không viết 吃趁热)?',
    'Nói "rất đặc sắc" đã viết 很有特色 chưa (không viết 很特色)?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，介绍一道你最怀念的家乡菜。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'怀念', loai:'động từ', cach:'怀念过去 · 怀念那段生活 · 最让我怀念的是…… · 对……的怀念',
     sai:[{re:'(很|非常|十分)怀念(你|您|爸爸|妈妈|朋友|同学)[。！，]', sua:'很想念你 / 很想念爸爸', giai:'Nhớ người CÒN SỐNG, mong gặp lại → 想念 (khẩu ngữ). 怀念 dùng cho người đã khuất hoặc quãng thời gian không quay lại.', nhe:true},
          {re:'怀念(明天|以后|将来|未来)', sua:'期待……', giai:'怀念 hướng về QUÁ KHỨ. Mong chờ tương lai dùng 期待 / 盼望.'}]},
    {tu:'特色', loai:'danh từ', cach:'很有特色 · 特色菜 · 地方特色 · 最有特色的……',
     sai:[{re:'(很|非常|十分|特别)特色', sua:'很有特色', giai:'特色 là DANH TỪ, không đứng ngay sau 很/非常. Viết 很有特色.'},
          {re:'(他|她|我|你)(最大)?的特色是', sua:'他的特点是……', giai:'Nói tính cách con người dùng 特点. 特色 dùng cho món ăn, vùng đất, tác phẩm.'}]},
    {tu:'口味', loai:'danh từ', cach:'口味清淡 · 口味重 · 合……的口味',
     sai:[{re:'口味(很|非常|特别|真)?(好吃|好喝|香)', sua:'味道很好 / 很好吃', giai:'口味 là sở thích / kiểu vị (đậm, nhạt), không nói 口味很好吃. Khen ngon: 味道很好.'}]},
    {tu:'清淡', loai:'tính từ', cach:'口味清淡 · 吃得清淡一点儿 · 清淡可口',
     sai:[{re:'吃(的|地)清淡', sua:'吃得清淡', giai:'Bổ ngữ trạng thái sau động từ dùng 得: 吃得清淡.'},
          {re:'清淡的(颜色|衣服|人)', sua:'淡淡的颜色 / 素一点儿的衣服', giai:'清淡 chủ yếu tả món ăn, mùi hương. Màu nhạt nói 淡 / 浅.', nhe:true}]},
    {tu:'趁', loai:'giới từ', cach:'趁热吃 · 趁年轻…… · 趁(着)……的机会',
     sai:[{re:'[吃喝做看买]趁', sua:'趁热吃', giai:'趁 + thời cơ đứng TRƯỚC động từ: 趁热吃, không viết 吃趁热.'},
          {re:'趁热的时候', sua:'趁热', giai:'趁热 đã đủ nghĩa "lúc còn nóng", không cần thêm 的时候.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'(像) N 般 + Adj / 的 N', nhan:'般', vd:'河粉的汤像山泉般清淡，却又香味扑鼻。', khi:'So sánh giàu hình ảnh khi tả món ăn.'},
    {ten:'趁 + 热 / 年轻 / 机会 + V', nhan:'趁', vd:'小时候，妈妈常常让我趁热吃一大碗。', khi:'Kể cách ăn, hoặc khuyên tận dụng cơ hội.'},
    {ten:'一……就闻到……', nhan:'闻', vd:'我一进门就闻到了扑鼻的香味。', khi:'Mở đầu sinh động bằng mùi hương.'},
    {ten:'最让我怀念的是……', nhan:'怀念', vd:'家乡的众多美食中，最让我怀念的是河粉。', khi:'Câu MỞ hoặc câu KẾT bày tỏ cảm xúc.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然也能吃到河粉，但是总觉得没有家乡的好吃。', khi:'So sánh hiện tại với quê nhà.'},
    {ten:'越来越 + V / Adj', nhan:'越来越', vd:'我越来越怀念那碗河粉了。', khi:'Câu KẾT — cảm xúc tăng dần theo thời gian.'},
    {ten:'不仅……，而且……', nhan:'不仅', vd:'河粉不仅口味清淡，而且营养丰富。', khi:'Nêu hai ưu điểm của món ăn.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 lấy từ sách bài tập)
  sapXep:[
    {manh:['趁热吃','饺子','才好','煮熟后要'],
     dap:'饺子煮熟后要趁热吃才好。',
     vn:'Sủi cảo luộc chín rồi phải ăn lúc còn nóng mới ngon.',
     giai:'Chủ ngữ 饺子 → thời gian 煮熟后 → 要 + 趁热 + 吃 → 才好 ở cuối. 趁热 đứng TRƯỚC động từ 吃.'},
    {manh:['吹来','深夜的','像刀子般地','寒风'],
     dap:'深夜的寒风像刀子般地吹来。',
     vn:'Gió lạnh đêm khuya thổi tới như dao cắt.',
     giai:'Định ngữ 深夜的 + 寒风 làm chủ ngữ; 像……般地 làm trạng ngữ đứng trước động từ 吹来.'},
    {manh:['闻到一股','就','扑鼻的香味','我一进门'],
     dap:'我一进门就闻到一股扑鼻的香味。',
     vn:'Tôi vừa vào cửa đã ngửi thấy một mùi thơm xộc vào mũi.',
     giai:'一……就……; lượng từ 一股 đứng trước định ngữ 扑鼻的 + 香味.'},
    {manh:['是','萝卜饼','怀念的','最让我'],
     dap:'萝卜饼是最让我怀念的。',
     vn:'Bánh củ cải là món khiến tôi hoài niệm nhất.',
     giai:'Chủ ngữ 萝卜饼 + 是 + 最让我怀念的 (cụm chữ 的 làm tân ngữ).'},
    {manh:['薄如白纸','高手','把面擀得','往往'],
     dap:'高手往往把面擀得薄如白纸。',
     vn:'Người giỏi thường cán bột mỏng như tờ giấy trắng.',
     giai:'Phó từ 往往 đứng trước 把; 把 + 面 + 擀得 + bổ ngữ 薄如白纸.'},
    {manh:['我们去看看房子吧','这几天休息，','趁着'],
     dap:'趁着这几天休息，我们去看看房子吧。', chap:['我们趁着这几天休息，去看看房子吧。'],
     vn:'Nhân mấy hôm nay được nghỉ, chúng ta đi xem nhà đi.',
     giai:'趁着 + thời cơ đứng đầu câu (hoặc sau chủ ngữ), vế sau nêu việc làm.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 中国菜
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (中国菜 · 家乡美食). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 口味 · 清淡 · 特色 · 趁 · 闻 · 怀念 · 切 · 炒 · 煮.',
  questions:[
    {q_zh:'你喜欢什么口味的菜？不喜欢什么味道的菜？你比较喜欢哪些中国菜？',
     q_vn:'Em thích món ăn khẩu vị thế nào? Không thích vị gì? Em thích những món Trung Quốc nào?',
     hint:'Nói khẩu vị + món không thích + 1–2 món Trung Quốc, dùng 口味, 清淡',
     sample:'我的口味比较清淡，不太喜欢太辣、太油的菜。中国菜里，我最喜欢西红柿炒鸡蛋和饺子，又好吃又简单。',
     sample_vn:'Khẩu vị tôi khá nhạt, không thích món quá cay, quá nhiều dầu mỡ. Trong các món Trung Quốc, tôi thích nhất trứng xào cà chua và sủi cảo, vừa ngon vừa đơn giản.',
     note:'Câu hỏi có BA ý — trả lời đủ cả ba, theo đúng thứ tự, người chấm sẽ đánh giá cao.'},
    {q_zh:'你学过做中国菜吗？学的是什么菜？',
     q_vn:'Em đã từng học nấu món Trung Quốc chưa? Học món gì?',
     hint:'Kể ai dạy, khi nào, món gì; dùng 是……的',
     sample:'学过。去年春节，我是跟一个中国朋友学包饺子的。一开始我擀的饺子皮又厚又不圆，后来慢慢就好多了。',
     sample_vn:'Có rồi. Tết năm ngoái, tôi học gói sủi cảo với một người bạn Trung Quốc. Lúc đầu vỏ tôi cán vừa dày vừa không tròn, sau dần dần khá hơn nhiều.',
     note:'Dùng 是……的 để nhấn mạnh thời gian, người dạy (ôn HSK 3–4).'},
    {q_zh:'你能介绍一下这个菜是怎么做的吗？',
     q_vn:'Em có thể giới thiệu món đó làm như thế nào không?',
     hint:'Dùng 先……，再……，然后……，最后……; 把 + 切 / 搅拌',
     sample:'先把西红柿切成块，把鸡蛋搅拌均匀。然后在锅里放油，先炒鸡蛋，再放西红柿。最后加少许盐和糖，就可以趁热吃了。',
     sample_vn:'Trước hết cắt cà chua thành miếng, đánh đều trứng. Sau đó cho dầu vào chảo, xào trứng trước rồi cho cà chua vào. Cuối cùng thêm chút muối và đường là có thể ăn nóng được rồi.',
     note:'Tả cách nấu phải có TỪ NỐI trình tự; câu 把 là trợ thủ đắc lực nhất.'},
    {q_zh:'你的家乡有什么特色美食？离开家乡以后，你最怀念的是什么？',
     q_vn:'Quê em có món ăn đặc sắc gì? Rời quê rồi, em hoài niệm nhất điều gì?',
     hint:'Dùng 特色, 怀念 / 想念, có thể dùng 般 để so sánh',
     sample:'我的家乡最有特色的是米粉。离开家乡以后，我最怀念的是早上一进门就能闻到妈妈煮的米粉汤的香味。',
     sample_vn:'Quê tôi đặc sắc nhất là bún. Rời quê rồi, điều tôi hoài niệm nhất là sáng sáng vừa bước vào nhà đã ngửi thấy mùi nồi nước dùng mẹ nấu.',
     note:'Chú ý phân biệt: nhớ người còn sống → 想念; nhớ quãng thời gian đã qua → 怀念.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 19.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第19课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'怎么你今天吃得这么少？是不是这些菜不合你的口味？'},
            {sp:'男',zh:'这两天有点儿不舒服，没什么胃口。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['菜不合他的口味','他已经吃饱了','他身体不舒服，不想吃','他想换个饭馆'],ans:2,
     why:'没什么胃口 = không muốn ăn, vì 有点儿不舒服. Bẫy: 不合口味 là người phụ nữ ĐOÁN, anh không xác nhận.',
     words:['口味']},

    {n:2,
     lines:[{sp:'女',zh:'这香肠的颜色怎么这样？是不是有点儿问题？'},
            {sp:'男',zh:'放在冰箱里就忘了，你赶紧看看生产日期吧。'}],
     q:'男的觉得香肠怎么了？',qvn:'Người đàn ông cho rằng xúc xích bị làm sao?',
     opts:['颜色很好看','可能过期了','味道太咸','不是他买的'],ans:1,
     why:'Để trong tủ lạnh rồi quên, bảo xem ngay ngày sản xuất → nghĩ là có thể đã QUÁ HẠN (过期 — từ trong bảng 扩展).',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'欢迎光临！对不起，现在没位子了，您在这儿坐下等一会儿可以吗？这儿准备了点心和茶水，您先用一点儿。'},
            {sp:'男',zh:'哦，谢谢！我下午跟你们订过一个包间，你查一下李先生的预订有没有？'}],
     q:'男的现在最可能在哪儿？',qvn:'Người đàn ông bây giờ nhiều khả năng đang ở đâu?',
     opts:['超市','茶馆','家里','饭馆'],ans:3,
     why:'欢迎光临, 没位子, 订过一个包间 (đặt phòng riêng) → nhà hàng. Bẫy: có 茶水 nhưng đó chỉ là nước mời khách chờ.',
     words:[]},

    {n:4,
     lines:[{sp:'女',zh:'这萝卜饼的饼皮薄得跟纸似的，萝卜颜色红红绿绿的，真好看。'},
            {sp:'男',zh:'怎么样，好吃吧？这饼可是我们家乡的特色美食。'}],
     q:'关于萝卜饼，可以知道什么？',qvn:'Về bánh củ cải, có thể biết được điều gì?',
     opts:['颜色很单一','饼皮很厚','是男的家乡的特色美食','是女的做的'],ans:2,
     why:'这饼可是我们家乡的特色美食 — người nói là người đàn ông. Vỏ 薄得跟纸似的 (mỏng), màu 红红绿绿 (nhiều màu).',
     words:['萝卜','薄','家乡','特色']},

    {n:5,
     lines:[{sp:'男',zh:'半年不见，你比以前苗条多了。怎么，最近减肥呢？'},
            {sp:'女',zh:'我比以前瘦了吗？我这几个月一直在健身，看来真有效果。'}],
     q:'关于女的，下列哪项正确？',qvn:'Về người phụ nữ, phương án nào đúng?',
     opts:['正在减肥','最近一直在健身','比以前胖了','半年没运动了'],ans:1,
     why:'我这几个月一直在健身. Bẫy: 减肥 là người đàn ông đoán; cô không nói mình giảm cân.',
     words:[]},

    {n:6,
     lines:[{sp:'女',zh:'星期六下午有个聚会，给丽丽过生日，你一定要去啊。'},
            {sp:'男',zh:'我晚点儿过去，行吗？下午正好有培训课。你们几点开始？'}],
     q:'星期六女的希望男的做什么？',qvn:'Thứ Bảy người phụ nữ mong người đàn ông làm gì?',
     opts:['去上培训课','参加丽丽的生日聚会','给丽丽买礼物','早点儿过去帮忙'],ans:1,
     why:'你一定要去啊 — mời đi dự tiệc sinh nhật Lệ Lệ. 培训课 là việc của người đàn ông, không phải mong muốn của cô.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'我看见林林又在吃零食了，你少给他买点儿这些东西吧。'},
            {sp:'男',zh:'我不是答应他考试成绩好可以满足他一个要求吗？'},
            {sp:'女',zh:'这算什么要求？你也不能不讲原则啊。'},
            {sp:'男',zh:'油炸食品不健康，这个我懂，少吃一点儿就行了。'}],
     q:'他们主要在谈什么问题？',qvn:'Họ chủ yếu đang bàn chuyện gì?',
     opts:['林林的考试成绩','孩子吃零食的问题','怎样做油炸食品','怎么教孩子讲原则'],ans:1,
     why:'Cả đoạn xoay quanh việc Lâm Lâm ăn vặt (零食, 油炸食品). Thành tích thi chỉ là lý do người bố đưa ra.',
     words:['油炸']},

    {n:8,
     lines:[{sp:'男',zh:'服务员，给我们推荐几个你们这儿的特色菜吧。'},
            {sp:'女',zh:'我们这儿是川菜馆，麻婆豆腐来的客人基本上都会点。'},
            {sp:'男',zh:'好，来一个。'},
            {sp:'女',zh:'您喜欢海鲜吗？今天的干烧黄鱼是特价。'}],
     q:'根据对话，下列哪项正确？',qvn:'Theo đoạn hội thoại, phương án nào đúng?',
     opts:['这是一家海鲜馆','男的不喜欢麻婆豆腐','麻婆豆腐今天特价','干烧黄鱼今天特价'],ans:3,
     why:'今天的干烧黄鱼是特价. Đây là quán món Tứ Xuyên (川菜馆), không phải quán hải sản; 麻婆豆腐 là món khách hay gọi chứ không phải món giảm giá.',
     words:['特色']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Mẹ vừa bưng bát canh nóng lên, em còn đang mải xem điện thoại.',
     a:{sp:'Mẹ',zh:'汤做好了，快过来吃饭！',vn:'Canh xong rồi, mau lại ăn cơm!'},
     need:['Dùng 趁','Đáp lời mẹ lễ phép'],
     sample:'来了来了！汤要趁热喝才好喝，我马上过来。',
     samplePy:'Lái le lái le! Tāng yào chèn rè hē cái hǎohē, wǒ mǎshàng guòlai.',
     sampleVn:'Con đến đây! Canh phải uống lúc nóng mới ngon, con qua ngay ạ.',
     tip:'趁 + 热 đứng trước động từ 喝. Đừng viết 喝趁热.'},

    {scene:'Bạn Trung Quốc hỏi em về món bún chả Hà Nội.',
     a:{sp:'Bạn',zh:'你们越南有什么特色菜？',vn:'Việt Nam các cậu có món gì đặc sắc?'},
     need:['Dùng 特色','Giới thiệu ngắn một món'],
     sample:'河内的烤肉米线很有特色，肉烤得外焦里嫩，再蘸上酸甜的汁，特别好吃。',
     samplePy:'Hénèi de kǎoròu mǐxiàn hěn yǒu tèsè, ròu kǎo de wài jiāo lǐ nèn, zài zhànshàng suāntián de zhī, tèbié hǎochī.',
     sampleVn:'Bún chả Hà Nội rất đặc sắc, thịt nướng ngoài giòn trong mềm, chấm thêm nước chấm chua ngọt, ngon cực.',
     tip:'很有特色, không viết 很特色. Tận dụng luôn 外焦里嫩 của bài.'},

    {scene:'Bạn hỏi vì sao em biết bánh trong lò đã chín.',
     a:{sp:'Bạn',zh:'你怎么知道饼已经好了？你又没打开看。',vn:'Sao cậu biết bánh chín rồi? Cậu có mở ra xem đâu.'},
     need:['Dùng 闻','Giải thích bằng mùi thơm'],
     sample:'我闻到香味了呀！能闻到香味，就说明饼差不多做好了。',
     samplePy:'Wǒ wéndào xiāngwèi le ya! Néng wéndào xiāngwèi, jiù shuōmíng bǐng chàbuduō zuòhǎo le.',
     sampleVn:'Tớ ngửi thấy mùi thơm mà! Ngửi được mùi thơm là chứng tỏ bánh gần xong rồi.',
     tip:'Ngửi là 闻, KHÔNG phải 听. Bổ ngữ kết quả: 闻到.'},

    {scene:'Bạn cũ nhắn tin: em đã chuyển trường một năm, có nhớ lớp cũ không.',
     a:{sp:'Bạn',zh:'你转学已经一年了，想我们吗？',vn:'Cậu chuyển trường một năm rồi, có nhớ bọn tớ không?'},
     need:['Dùng 想念 hoặc 怀念 cho đúng','Nói rõ nhớ ai / nhớ điều gì'],
     sample:'当然想念你们！我也常常怀念我们一起在食堂抢饭的日子。',
     samplePy:'Dāngrán xiǎngniàn nǐmen! Wǒ yě chángcháng huáiniàn wǒmen yìqǐ zài shítáng qiǎng fàn de rìzi.',
     sampleVn:'Tất nhiên là nhớ các cậu! Tớ cũng hay hoài niệm những ngày cùng nhau tranh cơm ở căng tin.',
     tip:'Nhớ BẠN (còn gặp lại được) → 想念; nhớ NHỮNG NGÀY đã qua → 怀念.'},

    {scene:'Em muốn tả nụ cười của cô giáo chủ nhiệm trong bài văn.',
     a:{sp:'Bạn',zh:'你们班主任是什么样的人？',vn:'Cô chủ nhiệm lớp cậu là người thế nào?'},
     need:['Dùng 般','So sánh giàu hình ảnh'],
     sample:'她特别温柔，每次看到我们，脸上总是带着阳光般的笑容。',
     samplePy:'Tā tèbié wēnróu, měi cì kàndào wǒmen, liǎn shang zǒngshì dàizhe yángguāng bān de xiàoróng.',
     sampleVn:'Cô rất dịu dàng, mỗi lần gặp chúng tớ trên mặt lúc nào cũng nở nụ cười rạng rỡ như ánh nắng.',
     tip:'N + 般的 + N làm định ngữ. Đã có 般 thì không thêm 一样 nữa.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết công thức nấu ăn để đăng lên trang web của câu lạc bộ ẩm thực.',
     a:'放点儿酱油就行，别太多啊。',b:'最后加入少许酱油，搅拌均匀即可。',better:'b',
     why:'Công thức nấu ăn dùng giọng văn viết ngắn gọn: 少许, 加入, 即可. Câu a là lời dặn miệng.'},

    {scene:'Em gọi bạn thân vào ăn bánh vừa rán xong.',
     a:'快来，趁热吃！',b:'建议您趁热食用，口感更佳。',better:'a',
     why:'Với bạn thân, câu ngắn khẩu ngữ tự nhiên. Câu b như lời trên bao bì sản phẩm, nghe khách sáo.'},

    {scene:'Em viết bài văn tả quê hương nộp cô giáo.',
     a:'我特别想家里的萝卜饼，好吃极了。',b:'家乡的众多美食中，萝卜饼是最让我怀念的。',better:'b',
     why:'Bài văn cần giọng văn viết: 众多, 怀念, cấu trúc 最让我……的. Câu a là khẩu ngữ.'},

    {scene:'Em nhắn tin cho mẹ đang đi công tác xa.',
     a:'妈妈，我好想你啊！你什么时候回来？',b:'母亲，我十分怀念您。',better:'a',
     why:'Mẹ đi công tác sẽ về → 想 / 想念 (khẩu ngữ, thân mật). 怀念 dùng cho người đã khuất — dùng ở đây rất không hợp!'},

    {scene:'Người phục vụ nhà hàng giới thiệu món với khách.',
     a:'这是我们店的特色菜，您尝尝。',b:'这个菜挺特别的，你吃吃看。',better:'a',
     why:'Phục vụ nói với khách dùng 您 và thuật ngữ 特色菜. Câu b dùng 你, nghe suồng sã.'},

    {scene:'Em giải thích với bà vì sao phải đậy vung khi rán bánh.',
     a:'奶奶，盖上锅盖，放点儿水，饼就不会糊了。',b:'盖锅前须放进温水，以预防糊底。',better:'a',
     why:'Nói chuyện với bà trong bếp, câu a dễ hiểu, gần gũi. Câu b là văn viết (须, 以) — hợp sách dạy nấu ăn, không hợp lời nói.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 20)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'家乡的美食中，最让我……的是……', words:['家乡','怀念','色彩','想念']},
    {step:'Củ cải quê', cue:'家乡的萝卜有……三种，吃起来……', words:['萝卜','青','紫','赏心悦目','般','清淡','可口','夸']},
    {step:'Làm nhân', cue:'做法很简单，不必……，先把萝卜……', words:['炒','煮','油炸','切','丝','搅拌','均匀','原料']},
    {step:'Cán bột', cue:'最关键的是……，把面擀得……', words:['擀','薄','折叠','透明']},
    {step:'Rán bánh', cue:'拿一个平底锅，先……，盖锅前……', words:['淋','圈','烫','盖','预防','糊','文火','闻']},
    {step:'Cách ăn', cue:'萝卜饼要……吃，刚出锅的……', words:['趁','口味','少许','酱油','醋','焦','嫩']},
    {step:'Ưu điểm', cue:'色、香、味、形，还有养生……', words:['特色','痰','平安']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: củ cải quê nhà → cách làm bánh → ưu điểm của bánh?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Kể cách làm có dùng từ nối trình tự (先……，然后……，最后……) không?',
    'Có dùng đúng 般 (像山泉般) và 趁 (趁热吃) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 19) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 19 không có dạng 给括号里的词选择适当的位置)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['特色','预防','色彩','平安','清淡','均匀'],
   cau:[
     {s:'也许是药物的作用，这一夜他＿＿地度过了。', dap:['平安']},
     {s:'最后，我们用酱油、白糖、味精等做成汁，＿＿地浇在鸡肉上就做好了。', dap:['均匀']},
     {s:'饭菜很＿＿、很平常，却给我留下了极深的印象。', dap:['清淡']},
     {s:'请你给我们推荐几个你们这儿的＿＿菜吧。', dap:['特色']},
     {s:'研究发现，常吃胡萝卜能起到保护眼睛、＿＿近视的效果。', dap:['预防']},
     {s:'此菜的特点是＿＿美观，咸鲜滑嫩，味香可口，营养丰富。', dap:['色彩']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'女儿安静地睡在她身旁，呼吸也很＿＿。', opts:['均匀','平均'], ans:0, giai:'Hơi thở đều đặn → 呼吸均匀. 平均 là "bình quân, chia đều" (平均分数, 平均分配), không tả hơi thở.'},
     {s:'尽管这话里感情＿＿很重，但也不是没有道理。', opts:['色彩','颜色'], ans:0, giai:'感情色彩 = sắc thái cảm xúc (nghĩa bóng) → 色彩. 颜色 chỉ màu cụ thể.'},
     {s:'＿＿我们从天津回来时，才听说她出国的事。', opts:['趁','等'], ans:1, giai:'等……时，才…… = đợi đến khi … mới …. 趁 là tận dụng cơ hội để làm gì, không đi với 才听说.'},
     {s:'了解李阳的人都说，李阳最大的＿＿就是胆大、敢干。', opts:['特色','特点'], ans:1, giai:'Nói về tính cách con người → 特点. 特色 dùng cho món ăn, vùng đất, tác phẩm.'}
   ]}
];
