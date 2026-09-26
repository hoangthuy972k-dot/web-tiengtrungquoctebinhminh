// ══════════════════════════════════════════
// DATA — HSK5 Bài 5: 济南的泉水 (Nước suối Tế Nam)
// Unit 2 谈古说今 · Nguồn: HSK标准教程5上 (tr. 46–54) + sách bài tập bài 5
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'悠久',py:'yōujiǔ',pos:'Tính từ',vn:'lâu đời',hv:'du cửu',em:'🏛️',lesson:1,
   explain:['Kéo dài từ rất xa xưa đến nay. Dùng cho lịch sử, văn hoá, truyền thống — không dùng cho khoảng thời gian cụ thể của một người.'],
   usage:'历史/文化/传统 + 悠久; 悠久的 + 历史/文化/传统. Không nói 我等了很悠久 (phải nói 我等了很久).',
   collo:['历史悠久','悠久的文化','悠久的传统'],
   ex_zh:'济南的泉水，历史悠久，最早的文字记载可以推到3000多年前。',ex_py:'Jǐnán de quánshuǐ, lìshǐ yōujiǔ, zuì zǎo de wénzì jìzǎi kěyǐ tuīdào sānqiān duō nián qián.',ex_vn:'Nước suối Tế Nam có lịch sử lâu đời, ghi chép bằng chữ sớm nhất có thể truy về hơn 3000 năm trước.',
   exList:[
     {zh:'济南的泉水，历史悠久，最早的文字记载可以推到3000多年前。',py:'Jǐnán de quánshuǐ, lìshǐ yōujiǔ, zuì zǎo de wénzì jìzǎi kěyǐ tuīdào sānqiān duō nián qián.',vn:'Nước suối Tế Nam có lịch sử lâu đời, ghi chép bằng chữ sớm nhất có thể truy về hơn 3000 năm trước.'},
     {zh:'越南是一个有着悠久历史的国家。',py:'Yuènán shì yí ge yǒuzhe yōujiǔ lìshǐ de guójiā.',vn:'Việt Nam là một đất nước có lịch sử lâu đời.'},
     {zh:'我们学校的历史虽然不太悠久，但是很有特色。',py:'Wǒmen xuéxiào de lìshǐ suīrán bú tài yōujiǔ, dànshì hěn yǒu tèsè.',vn:'Lịch sử trường mình tuy không lâu đời lắm nhưng rất có nét riêng.'}
   ],
   colloFull:[
     {zh:'历史悠久',py:'lìshǐ yōujiǔ',vn:'lịch sử lâu đời'},
     {zh:'悠久的文化',py:'yōujiǔ de wénhuà',vn:'nền văn hoá lâu đời'},
     {zh:'悠久的传统',py:'yōujiǔ de chuántǒng',vn:'truyền thống lâu đời'},
     {zh:'悠久的历史',py:'yōujiǔ de lìshǐ',vn:'lịch sử lâu đời'}
   ],
   patterns:[
     {s:'N + 历史悠久',m:'… có lịch sử lâu đời'},
     {s:'有着 + 悠久的 + 历史 / 文化 / 传统',m:'Có nền … lâu đời (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hà Nội không những có lịch sử lâu đời mà còn có rất nhiều món ăn ngon.',answer:'河内不仅历史悠久，而且有很多好吃的菜。',answerPy:'Hénèi bùjǐn lìshǐ yōujiǔ, érqiě yǒu hěn duō hǎochī de cài.',
      note:'历史悠久 làm vị ngữ; 不仅……而且…… nối hai ý tăng tiến.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Ngôi chùa có lịch sử lâu đời này được xây từ hơn một nghìn năm trước.',answer:'这座历史悠久的寺庙是一千多年前建的。',answerPy:'Zhè zuò lìshǐ yōujiǔ de sìmiào shì yìqiān duō nián qián jiàn de.',
      note:'历史悠久的 + danh từ làm định ngữ; 是……的 nhấn mạnh thời gian của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:2,zh:'文字',py:'wénzì',pos:'Danh từ',vn:'chữ viết, văn tự',hv:'văn tự',em:'✍️',lesson:1,
   explain:['Hệ thống ký hiệu dùng để ghi lại ngôn ngữ (chữ viết); cũng chỉ phần chữ trong một văn bản, một bức ảnh.'],
   usage:'文字记载 (ghi chép bằng chữ), 文字说明 (lời chú thích). Khác với 字 — một chữ cụ thể.',
   collo:['文字记载','中国的文字','文字说明'],
   ex_zh:'汉字是世界上最古老的文字之一。',ex_py:'Hànzì shì shìjiè shang zuì gǔlǎo de wénzì zhī yī.',ex_vn:'Chữ Hán là một trong những hệ chữ viết cổ nhất thế giới.',
   exList:[
     {zh:'汉字是世界上最古老的文字之一。',py:'Hànzì shì shìjiè shang zuì gǔlǎo de wénzì zhī yī.',vn:'Chữ Hán là một trong những hệ chữ viết cổ nhất thế giới.'},
     {zh:'济南泉水最早的文字记载可以推到3000多年前。',py:'Jǐnán quánshuǐ zuì zǎo de wénzì jìzǎi kěyǐ tuīdào sānqiān duō nián qián.',vn:'Ghi chép bằng chữ sớm nhất về suối Tế Nam có thể truy về hơn 3000 năm trước.'},
     {zh:'这张图片下面还有一段文字说明，你看懂了吗？',py:'Zhè zhāng túpiàn xiàmiàn hái yǒu yí duàn wénzì shuōmíng, nǐ kàndǒng le ma?',vn:'Dưới bức ảnh này còn có một đoạn chú thích, bạn đọc hiểu chưa?'}
   ],
   colloFull:[
     {zh:'文字记载',py:'wénzì jìzǎi',vn:'ghi chép bằng chữ viết'},
     {zh:'中国的文字',py:'Zhōngguó de wénzì',vn:'chữ viết của Trung Quốc'},
     {zh:'文字说明',py:'wénzì shuōmíng',vn:'lời chú thích bằng chữ'},
     {zh:'古老的文字',py:'gǔlǎo de wénzì',vn:'chữ viết cổ'},
     {zh:'一段文字',py:'yí duàn wénzì',vn:'một đoạn chữ'}
   ],
   patterns:[
     {s:'文字 + 记载 / 说明',m:'Ghi chép / chú thích bằng chữ'},
     {s:'……是一种文字',m:'… là một loại chữ viết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loại chữ viết này được người xưa dùng để ghi lại lịch sử.',answer:'这种文字被古人用来记载历史。',answerPy:'Zhè zhǒng wénzì bèi gǔrén yònglái jìzǎi lìshǐ.',
      note:'Câu bị động: 被 + người làm + 用来 + động từ.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần đọc đoạn chú thích này là bạn sẽ hiểu cách dùng.',answer:'只要看一下这段文字说明，你就会明白怎么用了。',answerPy:'Zhǐyào kàn yíxià zhè duàn wénzì shuōmíng, nǐ jiù huì míngbai zěnme yòng le.',
      note:'文字说明 = lời chú thích; lượng từ 段 cho một đoạn chữ.',pair:'只要……就……'}
   ]},

  {n:3,zh:'记载',py:'jìzǎi',pos:'Động từ',vn:'ghi chép, ghi lại',hv:'ký tải',em:'📜',lesson:1,
   explain:['Ghi lại bằng chữ viết (sự việc, lịch sử) — thiên về văn viết.','Cũng dùng như danh từ: bản ghi chép, tư liệu ghi lại (文字记载, 最早的记载).'],
   usage:'Sách / sử sách + 记载了 + nội dung; 据……记载 (theo ghi chép của …). Việc ghi chép hằng ngày (bài giảng, số điện thoại) dùng 记, không dùng 记载.',
   collo:['文字记载','史书记载','据记载','最早的记载'],
   ex_zh:'据记载，这座桥已经有八百多年的历史了。',ex_py:'Jù jìzǎi, zhè zuò qiáo yǐjīng yǒu bābǎi duō nián de lìshǐ le.',ex_vn:'Theo ghi chép, cây cầu này đã có hơn tám trăm năm lịch sử.',
   exList:[
     {zh:'据记载，这座桥已经有八百多年的历史了。',py:'Jù jìzǎi, zhè zuò qiáo yǐjīng yǒu bābǎi duō nián de lìshǐ le.',vn:'Theo ghi chép, cây cầu này đã có hơn tám trăm năm lịch sử.'},
     {zh:'书上记载了很多关于泉水的传说。',py:'Shū shang jìzǎile hěn duō guānyú quánshuǐ de chuánshuō.',vn:'Sách ghi lại rất nhiều truyền thuyết về suối nước.'},
     {zh:'这本书详细地记载了越南的历史。',py:'Zhè běn shū xiángxì de jìzǎile Yuènán de lìshǐ.',vn:'Cuốn sách này ghi chép tỉ mỉ lịch sử Việt Nam.'}
   ],
   colloFull:[
     {zh:'文字记载',py:'wénzì jìzǎi',vn:'ghi chép bằng chữ'},
     {zh:'史书记载',py:'shǐshū jìzǎi',vn:'sử sách ghi lại'},
     {zh:'据记载',py:'jù jìzǎi',vn:'theo ghi chép'},
     {zh:'最早的记载',py:'zuì zǎo de jìzǎi',vn:'ghi chép sớm nhất'},
     {zh:'详细地记载',py:'xiángxì de jìzǎi',vn:'ghi chép tỉ mỉ'}
   ],
   patterns:[
     {s:'据 + (N) + 记载，……',m:'Theo ghi chép (của …), …'},
     {s:'N + 记载了 + nội dung',m:'… ghi lại …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những câu chuyện này đều được ghi lại trong sách cổ.',answer:'这些故事都被记载在古书里。',answerPy:'Zhèxiē gùshi dōu bèi jìzǎi zài gǔshū li.',
      note:'被 + 记载 + 在 + nơi chốn: được ghi lại ở đâu.',pair:'被'},
     {promptLang:'vi',prompt:'Tuy sách không ghi lại tên anh ấy nhưng người dân đều nhớ anh ấy.',answer:'虽然书上没有记载他的名字，但是老百姓都记得他。',answerPy:'Suīrán shū shang méiyǒu jìzǎi tā de míngzi, dànshì lǎobǎixìng dōu jìde tā.',
      note:'记载 (ghi lại bằng chữ) khác 记得 (nhớ). 老百姓 là từ cùng bài.',pair:'虽然……但是……'}
   ]},

  {n:4,zh:'形状',py:'xíngzhuàng',pos:'Danh từ',vn:'hình dạng',hv:'hình trạng',em:'🔷',lesson:1,
   explain:['Hình dáng bên ngoài của sự vật: tròn, vuông, dài, giống con gì…'],
   usage:'……的形状; 形状 + 很特别 / 像……; 各种形状的……; 以形状命名 (đặt tên theo hình dạng).',
   collo:['各种形状','形状很特别','以形状命名'],
   ex_zh:'这块石头的形状像一只小猫。',ex_py:'Zhè kuài shítou de xíngzhuàng xiàng yì zhī xiǎo māo.',ex_vn:'Hòn đá này có hình dạng giống một con mèo nhỏ.',
   exList:[
     {zh:'这块石头的形状像一只小猫。',py:'Zhè kuài shítou de xíngzhuàng xiàng yì zhī xiǎo māo.',vn:'Hòn đá này có hình dạng giống một con mèo nhỏ.'},
     {zh:'许多文人都对它的声音、颜色、形状、味道进行过描写。',py:'Xǔduō wénrén dōu duì tā de shēngyīn, yánsè, xíngzhuàng, wèidao jìnxíngguo miáoxiě.',vn:'Nhiều văn nhân từng miêu tả âm thanh, màu sắc, hình dạng, mùi vị của nó.'},
     {zh:'妈妈做的饼干有各种形状，孩子们都很喜欢。',py:'Māma zuò de bǐnggān yǒu gè zhǒng xíngzhuàng, háizimen dōu hěn xǐhuan.',vn:'Bánh quy mẹ làm có đủ loại hình dạng, bọn trẻ đều rất thích.'}
   ],
   colloFull:[
     {zh:'各种形状',py:'gè zhǒng xíngzhuàng',vn:'đủ loại hình dạng'},
     {zh:'形状很特别',py:'xíngzhuàng hěn tèbié',vn:'hình dạng rất đặc biệt'},
     {zh:'以形状命名',py:'yǐ xíngzhuàng mìngmíng',vn:'đặt tên theo hình dạng'},
     {zh:'独特的形状',py:'dútè de xíngzhuàng',vn:'hình dạng độc đáo'},
     {zh:'形状像……',py:'xíngzhuàng xiàng……',vn:'hình dạng giống …'}
   ],
   patterns:[
     {s:'N + 的形状 + 像……',m:'Hình dạng của … giống …'},
     {s:'以 + 形状 + 命名',m:'Đặt tên theo hình dạng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hình dạng của hòn đảo này càng nhìn càng giống một con rồng.',answer:'这个岛的形状越看越像一条龙。',answerPy:'Zhège dǎo de xíngzhuàng yuè kàn yuè xiàng yì tiáo lóng.',
      note:'越 + V + 越 + …: càng … càng …; lượng từ của 龙 là 条.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Suối Trân Châu được đặt tên theo hình dạng.',answer:'珍珠泉是以形状命名的。',answerPy:'Zhēnzhūquán shì yǐ xíngzhuàng mìngmíng de.',
      note:'以 + căn cứ + 命名: đặt tên theo …; 是……的 nhấn mạnh cách thức.',pair:'是……的'}
   ]},

  {n:5,zh:'描写',py:'miáoxiě',pos:'Động từ',vn:'miêu tả',hv:'miêu tả',em:'🖋️',lesson:1,
   explain:['Dùng lời văn để vẽ lại hình ảnh, tính cách, cảnh vật, tâm trạng… — hay dùng trong văn chương, bài viết.'],
   usage:'描写 + 人物/风景/生活; 生动地/正确地/认真地 + 描写; 对……进行描写. Kể lại sự việc thì dùng 叙述, không dùng 描写.',
   collo:['生动地描写','描写风景','对……进行描写','描写人物'],
   ex_zh:'这篇文章生动地描写了济南的泉水。',ex_py:'Zhè piān wénzhāng shēngdòng de miáoxiěle Jǐnán de quánshuǐ.',ex_vn:'Bài văn này miêu tả sinh động nước suối Tế Nam.',
   exList:[
     {zh:'这篇文章生动地描写了济南的泉水。',py:'Zhè piān wénzhāng shēngdòng de miáoxiěle Jǐnán de quánshuǐ.',vn:'Bài văn này miêu tả sinh động nước suối Tế Nam.'},
     {zh:'这首诗主要描写了一对年轻人的恋爱经历。',py:'Zhè shǒu shī zhǔyào miáoxiěle yí duì niánqīngrén de liàn\'ài jīnglì.',vn:'Bài thơ này chủ yếu miêu tả chuyện tình của một đôi trẻ.'},
     {zh:'老师让我们写一篇作文，描写一下自己的家乡。',py:'Lǎoshī ràng wǒmen xiě yì piān zuòwén, miáoxiě yíxià zìjǐ de jiāxiāng.',vn:'Thầy bảo chúng tôi viết một bài văn miêu tả quê hương mình.'}
   ],
   colloFull:[
     {zh:'生动地描写',py:'shēngdòng de miáoxiě',vn:'miêu tả sinh động'},
     {zh:'描写风景',py:'miáoxiě fēngjǐng',vn:'tả cảnh'},
     {zh:'对……进行描写',py:'duì…… jìnxíng miáoxiě',vn:'miêu tả về …'},
     {zh:'描写人物',py:'miáoxiě rénwù',vn:'tả nhân vật'},
     {zh:'正确地描写',py:'zhèngquè de miáoxiě',vn:'miêu tả chính xác'}
   ],
   patterns:[
     {s:'Trạng ngữ + 地 + 描写 + N',m:'Miêu tả … một cách …'},
     {s:'对 + N + 进行(过)描写',m:'Miêu tả về … (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài thơ này không những miêu tả phong cảnh đẹp mà còn ca ngợi người lao động.',answer:'这首诗不仅描写了美丽的风景，而且赞美了劳动人民。',answerPy:'Zhè shǒu shī bùjǐn miáoxiěle měilì de fēngjǐng, érqiě zànměile láodòng rénmín.',
      note:'描写 và 赞美 đều là động từ của bài, mang tân ngữ trực tiếp.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Nhân vật trong câu chuyện này được tác giả miêu tả rất sinh động.',answer:'这个故事里的人物被作者描写得很生动。',answerPy:'Zhège gùshi li de rénwù bèi zuòzhě miáoxiě de hěn shēngdòng.',
      note:'被 + người + 描写得 + bổ ngữ trạng thái.',pair:'被'}
   ]},

  {n:6,zh:'赞美',py:'zànměi',pos:'Động từ',vn:'ca ngợi, ca tụng',hv:'tán mỹ',em:'👏',lesson:1,
   explain:['Ca ngợi cái đẹp, cái tốt bằng lời lẽ trang trọng, hay gặp trong thơ văn, bài hát. Khen hành vi cụ thể của một người (nhất là trẻ em, cấp dưới) thì dùng 表扬.'],
   usage:'赞美 + 家乡/大自然/母亲/泉水; 赞美……的诗文; 受到……的赞美.',
   collo:['赞美泉水','赞美家乡','受到赞美','赞美的诗'],
   ex_zh:'许多诗人都写过赞美泉水的诗。',ex_py:'Xǔduō shīrén dōu xiěguo zànměi quánshuǐ de shī.',ex_vn:'Nhiều nhà thơ từng viết thơ ca ngợi nước suối.',
   exList:[
     {zh:'许多诗人都写过赞美泉水的诗。',py:'Xǔduō shīrén dōu xiěguo zànměi quánshuǐ de shī.',vn:'Nhiều nhà thơ từng viết thơ ca ngợi nước suối.'},
     {zh:'这首歌赞美了母亲伟大的爱。',py:'Zhè shǒu gē zànměile mǔqīn wěidà de ài.',vn:'Bài hát này ca ngợi tình mẹ vĩ đại.'},
     {zh:'她的善良受到了大家的赞美。',py:'Tā de shànliáng shòudàole dàjiā de zànměi.',vn:'Lòng tốt của cô ấy được mọi người ca ngợi.'}
   ],
   colloFull:[
     {zh:'赞美泉水',py:'zànměi quánshuǐ',vn:'ca ngợi nước suối'},
     {zh:'赞美家乡',py:'zànměi jiāxiāng',vn:'ca ngợi quê hương'},
     {zh:'受到赞美',py:'shòudào zànměi',vn:'được ca ngợi'},
     {zh:'赞美的诗',py:'zànměi de shī',vn:'bài thơ ca ngợi'},
     {zh:'赞美大自然',py:'zànměi dà zìrán',vn:'ca ngợi thiên nhiên'}
   ],
   patterns:[
     {s:'赞美 + N',m:'Ca ngợi …'},
     {s:'受到 + (người) + 的赞美',m:'Được … ca ngợi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả người nước ngoài cũng ca ngợi phong cảnh ở đây.',answer:'连外国人都赞美这里的风景。',answerPy:'Lián wàiguórén dōu zànměi zhèli de fēngjǐng.',
      note:'连 + đối tượng bất ngờ + 都 + động từ.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Bài hát ca ngợi quê hương này là do một học sinh viết.',answer:'这首赞美家乡的歌是一个学生写的。',answerPy:'Zhè shǒu zànměi jiāxiāng de gē shì yí ge xuésheng xiě de.',
      note:'赞美家乡 làm định ngữ cho 歌; 是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:7,zh:'诗',py:'shī',pos:'Danh từ',vn:'thơ',hv:'thi',em:'📖',lesson:1,
   explain:['Thơ, bài thơ. Lượng từ: 首. Từ ghép hay gặp: 诗文 (thơ văn), 诗人 (nhà thơ), 唐诗 (thơ Đường).'],
   usage:'一首诗, 写诗, 背诗, 诗人, 诗文.',
   collo:['一首诗','写诗','背诗','诗文'],
   ex_zh:'我从小就会背很多唐诗。',ex_py:'Wǒ cóngxiǎo jiù huì bèi hěn duō Tángshī.',ex_vn:'Từ nhỏ tôi đã thuộc rất nhiều thơ Đường.',
   exList:[
     {zh:'我从小就会背很多唐诗。',py:'Wǒ cóngxiǎo jiù huì bèi hěn duō Tángshī.',vn:'Từ nhỏ tôi đã thuộc rất nhiều thơ Đường.'},
     {zh:'许多文人留下了许多赞美泉水的诗文。',py:'Xǔduō wénrén liúxiàle xǔduō zànměi quánshuǐ de shīwén.',vn:'Nhiều văn nhân để lại rất nhiều thơ văn ca ngợi nước suối.'},
     {zh:'这首诗描写了一对年轻人的爱情。',py:'Zhè shǒu shī miáoxiěle yí duì niánqīngrén de àiqíng.',vn:'Bài thơ này miêu tả tình yêu của một đôi trẻ.'}
   ],
   colloFull:[
     {zh:'一首诗',py:'yì shǒu shī',vn:'một bài thơ'},
     {zh:'写诗',py:'xiě shī',vn:'làm thơ'},
     {zh:'背诗',py:'bèi shī',vn:'đọc thuộc thơ'},
     {zh:'诗文',py:'shīwén',vn:'thơ văn'},
     {zh:'诗人',py:'shīrén',vn:'nhà thơ'}
   ],
   patterns:[
     {s:'一首 + 诗',m:'Lượng từ của 诗 là 首'},
     {s:'写 / 背 / 读 + 诗',m:'Làm / thuộc / đọc thơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài thơ này tôi vừa đọc là thuộc ngay.',answer:'这首诗我一读就会背了。',answerPy:'Zhè shǒu shī wǒ yì dú jiù huì bèi le.',
      note:'一 + V1 + 就 + V2: vừa … là …; 背诗 = thuộc thơ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi chưa từng làm thơ bao giờ.',answer:'我从来没写过诗。',answerPy:'Wǒ cónglái méi xiěguo shī.',
      note:'"Làm thơ" tiếng Trung nói 写诗, không nói 做诗 trong câu thường.',pair:'从来没……过'}
   ]},

  {n:8,zh:'老百姓',py:'lǎobǎixìng',pos:'Danh từ',vn:'người dân, thường dân',hv:'lão bách tính',em:'👨‍👩‍👧',lesson:1,
   explain:['Người dân bình thường (không phải quan chức, người nổi tiếng). Sắc thái khẩu ngữ, gần gũi.'],
   usage:'普通老百姓, 当地的老百姓, 老百姓的生活. Văn bản trang trọng thường dùng 百姓 hoặc 人民.',
   collo:['普通老百姓','当地的老百姓','老百姓的生活'],
   ex_zh:'济南的老百姓住在泉边，喝着这甜美的泉水。',ex_py:'Jǐnán de lǎobǎixìng zhù zài quán biān, hēzhe zhè tiánměi de quánshuǐ.',ex_vn:'Người dân Tế Nam sống bên suối, uống thứ nước suối ngọt lành này.',
   exList:[
     {zh:'济南的老百姓住在泉边，喝着这甜美的泉水。',py:'Jǐnán de lǎobǎixìng zhù zài quán biān, hēzhe zhè tiánměi de quánshuǐ.',vn:'Người dân Tế Nam sống bên suối, uống thứ nước suối ngọt lành này.'},
     {zh:'我们都是普通老百姓，过的是简单的生活。',py:'Wǒmen dōu shì pǔtōng lǎobǎixìng, guò de shì jiǎndān de shēnghuó.',vn:'Chúng tôi đều là dân thường, sống cuộc sống giản dị.'},
     {zh:'这条新路让当地老百姓的生活方便多了。',py:'Zhè tiáo xīn lù ràng dāngdì lǎobǎixìng de shēnghuó fāngbiàn duō le.',vn:'Con đường mới này khiến cuộc sống của người dân địa phương thuận tiện hơn nhiều.'}
   ],
   colloFull:[
     {zh:'普通老百姓',py:'pǔtōng lǎobǎixìng',vn:'người dân bình thường'},
     {zh:'当地的老百姓',py:'dāngdì de lǎobǎixìng',vn:'người dân địa phương'},
     {zh:'老百姓的生活',py:'lǎobǎixìng de shēnghuó',vn:'cuộc sống của người dân'},
     {zh:'为老百姓服务',py:'wèi lǎobǎixìng fúwù',vn:'phục vụ nhân dân'}
   ],
   patterns:[
     {s:'普通 / 当地的 + 老百姓',m:'Người dân bình thường / địa phương'},
     {s:'老百姓 + 的 + 生活 / 愿望',m:'Cuộc sống / mong muốn của người dân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giá rau càng ngày càng đắt, người dân đều rất lo lắng.',answer:'菜价越来越贵，老百姓都很担心。',answerPy:'Càijià yuè lái yuè guì, lǎobǎixìng dōu hěn dānxīn.',
      note:'越来越 + tính từ; 老百姓 làm chủ ngữ, đi với 都.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần là việc có lợi cho người dân thì chúng tôi sẽ làm.',answer:'只要是对老百姓有好处的事，我们就去做。',answerPy:'Zhǐyào shì duì lǎobǎixìng yǒu hǎochù de shì, wǒmen jiù qù zuò.',
      note:'对……有好处: có lợi cho …; 就 đứng sau chủ ngữ vế sau.',pair:'只要……就……'}
   ]},

  {n:9,zh:'充满',py:'chōngmǎn',pos:'Động từ',vn:'tràn đầy, chan chứa',hv:'sung mãn',em:'🌟',lesson:1,
   explain:['Tràn đầy, đầy khắp — dùng được cho thứ cụ thể (ánh nắng, tiếng cười) lẫn cảm xúc trừu tượng (hy vọng, niềm tin, lòng biết ơn).'],
   usage:'充满 + 阳光/力量/希望/欢乐/信心; 对……充满……; Nơi chốn + 充满了…….',
   collo:['充满阳光','充满希望','充满信心','充满感激之情'],
   ex_zh:'老百姓对泉水充满感激之情。',ex_py:'Lǎobǎixìng duì quánshuǐ chōngmǎn gǎnjī zhī qíng.',ex_vn:'Người dân chan chứa lòng biết ơn đối với nước suối.',
   exList:[
     {zh:'老百姓对泉水充满感激之情。',py:'Lǎobǎixìng duì quánshuǐ chōngmǎn gǎnjī zhī qíng.',vn:'Người dân chan chứa lòng biết ơn đối với nước suối.'},
     {zh:'新产品很受顾客欢迎，使我对公司的未来充满信心。',py:'Xīn chǎnpǐn hěn shòu gùkè huānyíng, shǐ wǒ duì gōngsī de wèilái chōngmǎn xìnxīn.',vn:'Sản phẩm mới rất được khách hàng ưa chuộng, khiến tôi tràn đầy niềm tin vào tương lai công ty.'},
     {zh:'开学第一天，教室里充满了欢乐的笑声。',py:'Kāixué dì-yī tiān, jiàoshì li chōngmǎnle huānlè de xiàoshēng.',vn:'Ngày đầu khai giảng, lớp học tràn ngập tiếng cười vui vẻ.'}
   ],
   colloFull:[
     {zh:'充满阳光',py:'chōngmǎn yángguāng',vn:'tràn ngập ánh nắng'},
     {zh:'充满力量',py:'chōngmǎn lìliang',vn:'tràn đầy sức mạnh'},
     {zh:'充满希望',py:'chōngmǎn xīwàng',vn:'tràn đầy hy vọng'},
     {zh:'充满欢乐',py:'chōngmǎn huānlè',vn:'tràn ngập niềm vui'},
     {zh:'充满信心',py:'chōngmǎn xìnxīn',vn:'tràn đầy niềm tin'},
     {zh:'充满感激之情',py:'chōngmǎn gǎnjī zhī qíng',vn:'chan chứa lòng biết ơn'}
   ],
   patterns:[
     {s:'对 + N + 充满 + 信心 / 希望 / 感激',m:'Tràn đầy … đối với …'},
     {s:'Nơi chốn + 充满了 + N',m:'Nơi … tràn ngập …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi lên cấp ba, tôi càng ngày càng tự tin vào bản thân.',answer:'上高中以后，我对自己越来越充满信心了。',answerPy:'Shàng gāozhōng yǐhòu, wǒ duì zìjǐ yuè lái yuè chōngmǎn xìnxīn le.',
      note:'对 + người/vật + 充满信心; 越来越 đứng trước cụm động từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tuy công việc rất vất vả nhưng ngày nào anh ấy cũng tràn đầy sức sống.',answer:'虽然工作很辛苦，但是他每天都充满活力。',answerPy:'Suīrán gōngzuò hěn xīnkǔ, dànshì tā měi tiān dōu chōngmǎn huólì.',
      note:'充满 + danh từ trừu tượng (活力 sức sống).',pair:'虽然……但是……'}
   ]},

  {n:10,zh:'感激',py:'gǎnjī',pos:'Động từ',vn:'cảm kích, biết ơn',hv:'cảm kích',em:'🙏',lesson:1,
   explain:['Biết ơn sâu sắc vì được người khác giúp đỡ — cảm xúc mạnh, trang trọng hơn 感谢. Thiên về TÂM TRẠNG trong lòng; nói lời cảm ơn thì dùng 感谢.'],
   usage:'感激 + người; 对……很感激; 感激之情; 心存感激. Cụm cố định "bày tỏ lời cảm ơn" là 表示感谢.',
   collo:['感激之情','非常感激','对……很感激'],
   ex_zh:'你帮了我这么大的忙，我真不知道该怎么感激你。',ex_py:'Nǐ bāngle wǒ zhème dà de máng, wǒ zhēn bù zhīdào gāi zěnme gǎnjī nǐ.',ex_vn:'Bạn giúp tôi nhiều như vậy, tôi thật không biết nên đền ơn bạn thế nào.',
   exList:[
     {zh:'你帮了我这么大的忙，我真不知道该怎么感激你。',py:'Nǐ bāngle wǒ zhème dà de máng, wǒ zhēn bù zhīdào gāi zěnme gǎnjī nǐ.',vn:'Bạn giúp tôi nhiều như vậy, tôi thật không biết nên đền ơn bạn thế nào.'},
     {zh:'老百姓自然对泉水充满感激之情。',py:'Lǎobǎixìng zìrán duì quánshuǐ chōngmǎn gǎnjī zhī qíng.',vn:'Người dân tất nhiên chan chứa lòng biết ơn đối với nước suối.'},
     {zh:'我对小学时的老师一直心存感激。',py:'Wǒ duì xiǎoxué shí de lǎoshī yìzhí xīn cún gǎnjī.',vn:'Tôi luôn mang lòng biết ơn thầy cô thời tiểu học.'}
   ],
   colloFull:[
     {zh:'感激之情',py:'gǎnjī zhī qíng',vn:'lòng biết ơn'},
     {zh:'非常感激',py:'fēicháng gǎnjī',vn:'vô cùng biết ơn'},
     {zh:'对……很感激',py:'duì…… hěn gǎnjī',vn:'rất biết ơn …'},
     {zh:'心存感激',py:'xīn cún gǎnjī',vn:'mang lòng biết ơn'},
     {zh:'感激不尽',py:'gǎnjī bú jìn',vn:'biết ơn khôn xiết'}
   ],
   patterns:[
     {s:'对 + người + 很感激 / 充满感激之情',m:'Rất biết ơn ai'},
     {s:'感激 + người + 的 + 帮助',m:'Biết ơn sự giúp đỡ của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả ông bà tôi cũng rất biết ơn thầy giáo này.',answer:'连我爷爷奶奶都很感激这位老师。',answerPy:'Lián wǒ yéye nǎinai dōu hěn gǎnjī zhè wèi lǎoshī.',
      note:'感激 mang thẳng tân ngữ chỉ người; 连……都 nhấn mạnh.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cô ấy vừa nhận được thư là trong lòng tràn đầy biết ơn.',answer:'她一收到信，心里就充满了感激。',answerPy:'Tā yì shōudào xìn, xīnli jiù chōngmǎnle gǎnjī.',
      note:'充满 + 感激: hai từ cùng bài đi với nhau như trong bài khoá.',pair:'一……就……'}
   ]},

  {n:11,zh:'从而',py:'cóng\'ér',pos:'Liên từ',vn:'do đó, nhờ vậy, từ đó',hv:'tòng nhi',em:'➡️',lesson:1,
   explain:['Liên từ đứng đầu vế sau: vế trước nêu nguyên nhân / cách làm, vế sau nêu KẾT QUẢ hoặc MỤC ĐÍCH đạt được nhờ đó. Thiên về văn viết.'],
   usage:'A (cách làm / nguyên nhân)，从而 + B (kết quả). Vế sau thường tiếp nối chủ ngữ của vế trước và không có chủ ngữ riêng; không đặt 从而 ở đầu câu thứ nhất.',
   collo:['从而取得成功','从而提高……','从而产生……'],
   ex_zh:'在学习过程中及时复习，可以尽早发现和解决问题，从而取得更好的成绩。',ex_py:'Zài xuéxí guòchéng zhōng jíshí fùxí, kěyǐ jǐnzǎo fāxiàn hé jiějué wèntí, cóng\'ér qǔdé gèng hǎo de chéngjì.',ex_vn:'Trong quá trình học, ôn tập kịp thời giúp sớm phát hiện và giải quyết vấn đề, nhờ đó đạt kết quả tốt hơn.',
   exList:[
     {zh:'在学习过程中及时复习，可以尽早发现和解决问题，从而取得更好的成绩。',py:'Zài xuéxí guòchéng zhōng jíshí fùxí, kěyǐ jǐnzǎo fāxiàn hé jiějué wèntí, cóng\'ér qǔdé gèng hǎo de chéngjì.',vn:'Trong quá trình học, ôn tập kịp thời giúp sớm phát hiện và giải quyết vấn đề, nhờ đó đạt kết quả tốt hơn.'},
     {zh:'老百姓对泉水充满感激之情，从而也产生了许多关于泉水的美丽传说。',py:'Lǎobǎixìng duì quánshuǐ chōngmǎn gǎnjī zhī qíng, cóng\'ér yě chǎnshēngle xǔduō guānyú quánshuǐ de měilì chuánshuō.',vn:'Người dân chan chứa lòng biết ơn nước suối, từ đó cũng ra đời nhiều truyền thuyết đẹp về suối.'},
     {zh:'每天早上跑步可以锻炼身体，从而提高学习效率。',py:'Měi tiān zǎoshang pǎobù kěyǐ duànliàn shēntǐ, cóng\'ér tígāo xuéxí xiàolǜ.',vn:'Chạy bộ mỗi sáng giúp rèn luyện sức khoẻ, từ đó nâng cao hiệu quả học tập.'}
   ],
   colloFull:[
     {zh:'从而取得成功',py:'cóng\'ér qǔdé chénggōng',vn:'nhờ đó giành thành công'},
     {zh:'从而提高……',py:'cóng\'ér tígāo……',vn:'từ đó nâng cao …'},
     {zh:'从而产生……',py:'cóng\'ér chǎnshēng……',vn:'từ đó nảy sinh …'},
     {zh:'从而减少……',py:'cóng\'ér jiǎnshǎo……',vn:'từ đó giảm bớt …'}
   ],
   patterns:[
     {s:'A（cách làm / nguyên nhân），从而 + B（kết quả / mục đích）',m:'Làm A, nhờ đó đạt B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày nhớ mười từ mới là có thể tích luỹ vốn từ, từ đó nâng cao trình độ tiếng Trung.',answer:'只要每天记十个生词，就能积累词汇，从而提高汉语水平。',answerPy:'Zhǐyào měi tiān jì shí ge shēngcí, jiù néng jīlěi cíhuì, cóng\'ér tígāo Hànyǔ shuǐpíng.',
      note:'从而 mở vế kết quả cuối cùng; vế đó không cần chủ ngữ riêng.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Anh ấy không những học chăm mà phương pháp còn đúng, nhờ đó đạt thành tích tốt.',answer:'他不仅学习努力，而且方法正确，从而取得了好成绩。',answerPy:'Tā bùjǐn xuéxí nǔlì, érqiě fāngfǎ zhèngquè, cóng\'ér qǔdéle hǎo chéngjì.',
      note:'Hai vế đầu là nguyên nhân, 从而 dẫn kết quả 取得了好成绩.',pair:'不仅……而且……'}
   ]},

  {n:12,zh:'产生',py:'chǎnshēng',pos:'Động từ',vn:'nảy sinh, sinh ra',hv:'sản sinh',em:'🌱',lesson:1,
   explain:['Từ cái đã có mà sinh ra cái mới. Tân ngữ thường là danh từ TRỪU TƯỢNG: ảnh hưởng, hứng thú, vấn đề, tình cảm, hiểu lầm, truyền thuyết.'],
   usage:'产生 + 影响/兴趣/问题/感情/误会; 对……产生……. Không dùng cho sinh con (生孩子) hay làm ra sản phẩm (生产).',
   collo:['产生影响','产生兴趣','产生传说','产生问题'],
   ex_zh:'我担心长期吃这种药会对身体产生不好的影响。',ex_py:'Wǒ dānxīn chángqī chī zhè zhǒng yào huì duì shēntǐ chǎnshēng bù hǎo de yǐngxiǎng.',ex_vn:'Tôi lo uống loại thuốc này lâu dài sẽ gây ảnh hưởng xấu cho cơ thể.',
   exList:[
     {zh:'我担心长期吃这种药会对身体产生不好的影响。',py:'Wǒ dānxīn chángqī chī zhè zhǒng yào huì duì shēntǐ chǎnshēng bù hǎo de yǐngxiǎng.',vn:'Tôi lo uống loại thuốc này lâu dài sẽ gây ảnh hưởng xấu cho cơ thể.'},
     {zh:'看了这部电影以后，我对中国历史产生了很大的兴趣。',py:'Kànle zhè bù diànyǐng yǐhòu, wǒ duì Zhōngguó lìshǐ chǎnshēngle hěn dà de xìngqù.',vn:'Xem bộ phim này xong, tôi nảy sinh hứng thú lớn với lịch sử Trung Quốc.'},
     {zh:'从而也产生了许多关于泉水的美丽传说。',py:'Cóng\'ér yě chǎnshēngle xǔduō guānyú quánshuǐ de měilì chuánshuō.',vn:'Từ đó cũng ra đời nhiều truyền thuyết đẹp về nước suối.'}
   ],
   colloFull:[
     {zh:'产生影响',py:'chǎnshēng yǐngxiǎng',vn:'gây ảnh hưởng'},
     {zh:'产生兴趣',py:'chǎnshēng xìngqù',vn:'nảy sinh hứng thú'},
     {zh:'产生传说',py:'chǎnshēng chuánshuō',vn:'ra đời truyền thuyết'},
     {zh:'产生问题',py:'chǎnshēng wèntí',vn:'nảy sinh vấn đề'},
     {zh:'产生误会',py:'chǎnshēng wùhuì',vn:'nảy sinh hiểu lầm'}
   ],
   patterns:[
     {s:'对 + N + 产生 + 影响 / 兴趣',m:'Gây ảnh hưởng / nảy sinh hứng thú với …'},
     {s:'✗ 产生一个孩子 → ✓ 生了一个孩子',m:'产生 không dùng cho việc sinh con'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa nghe cô giáo kể truyền thuyết này là đã có hứng thú với Tế Nam.',answer:'我一听老师讲这个传说，就对济南产生了兴趣。',answerPy:'Wǒ yì tīng lǎoshī jiǎng zhège chuánshuō, jiù duì Jǐnán chǎnshēngle xìngqù.',
      note:'对 + N + 产生兴趣: nảy sinh hứng thú với …',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy chỉ là một chuyện nhỏ nhưng lại gây ra ảnh hưởng rất lớn.',answer:'虽然只是一件小事，但是产生了很大的影响。',answerPy:'Suīrán zhǐ shì yí jiàn xiǎo shì, dànshì chǎnshēngle hěn dà de yǐngxiǎng.',
      note:'产生 + 影响 là kết hợp cố định; không nói 发生影响.',pair:'虽然……但是……'}
   ]},

  {n:13,zh:'传说',py:'chuánshuō',pos:'Danh từ',vn:'truyền thuyết',hv:'truyền thuyết',em:'📚',lesson:1,
   explain:['Câu chuyện được truyền miệng từ đời này sang đời khác, thường có yếu tố kỳ lạ, thần tiên.','Cũng làm động từ "tương truyền, nghe đồn": 传说…… — trong bài có từ cùng nghĩa 相传.'],
   usage:'一个传说, 美丽的传说, 民间传说, 关于……的传说, 传说中的…….',
   collo:['美丽的传说','民间传说','关于……的传说','传说中的……'],
   ex_zh:'这里流传着许多美丽的传说。',ex_py:'Zhèli liúchuánzhe xǔduō měilì de chuánshuō.',ex_vn:'Ở đây lưu truyền rất nhiều truyền thuyết đẹp.',
   exList:[
     {zh:'这里流传着许多美丽的传说。',py:'Zhèli liúchuánzhe xǔduō měilì de chuánshuō.',vn:'Ở đây lưu truyền rất nhiều truyền thuyết đẹp.'},
     {zh:'关于还剑湖，越南有一个很有名的传说。',py:'Guānyú Huánjiàn Hú, Yuènán yǒu yí ge hěn yǒumíng de chuánshuō.',vn:'Về Hồ Gươm, Việt Nam có một truyền thuyết rất nổi tiếng.'},
     {zh:'传说中的龙王住在东海里。',py:'Chuánshuō zhōng de Lóngwáng zhù zài Dōnghǎi li.',vn:'Long vương trong truyền thuyết sống ở biển Đông.'}
   ],
   colloFull:[
     {zh:'美丽的传说',py:'měilì de chuánshuō',vn:'truyền thuyết đẹp'},
     {zh:'民间传说',py:'mínjiān chuánshuō',vn:'truyền thuyết dân gian'},
     {zh:'关于……的传说',py:'guānyú…… de chuánshuō',vn:'truyền thuyết về …'},
     {zh:'传说中的……',py:'chuánshuō zhōng de……',vn:'… trong truyền thuyết'},
     {zh:'一个传说',py:'yí ge chuánshuō',vn:'một truyền thuyết'}
   ],
   patterns:[
     {s:'关于 + N + 的传说',m:'Truyền thuyết về …'},
     {s:'传说中的 + N',m:'… trong truyền thuyết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Truyền thuyết này là do bà tôi kể cho tôi nghe.',answer:'这个传说是我奶奶讲给我听的。',answerPy:'Zhège chuánshuō shì wǒ nǎinai jiǎng gěi wǒ tīng de.',
      note:'Kể truyền thuyết: 讲传说; 是……的 nhấn mạnh người kể.',pair:'是……的'},
     {promptLang:'vi',prompt:'Truyền thuyết Sơn Tinh Thuỷ Tinh thì ngay cả trẻ con cũng biết.',answer:'山精水精的传说连小孩子都知道。',answerPy:'Shānjīng Shuǐjīng de chuánshuō lián xiǎo háizi dōu zhīdào.',
      note:'Tân ngữ đưa lên đầu câu làm chủ đề, sau đó 连……都…….',pair:'连……都……'}
   ]},

  {n:14,zh:'善良',py:'shànliáng',pos:'Tính từ',vn:'lương thiện, tốt bụng',hv:'thiện lương',em:'💗',lesson:1,
   explain:['Tốt bụng, có lòng tốt, không có ý xấu với ai. Dùng cho người, trái tim, tính cách.'],
   usage:'善良的人/心/性格; 心地善良; 美丽善良; 很善良.',
   collo:['善良的青年','心地善良','善良的性格','一颗善良的心'],
   ex_zh:'相传很久以前，济南城里有个善良的青年，名叫鲍全。',ex_py:'Xiāngchuán hěn jiǔ yǐqián, Jǐnán chéng li yǒu ge shànliáng de qīngnián, míng jiào Bào Quán.',ex_vn:'Tương truyền rất lâu trước kia, trong thành Tế Nam có một chàng trai tốt bụng tên là Bào Toàn.',
   exList:[
     {zh:'相传很久以前，济南城里有个善良的青年，名叫鲍全。',py:'Xiāngchuán hěn jiǔ yǐqián, Jǐnán chéng li yǒu ge shànliáng de qīngnián, míng jiào Bào Quán.',vn:'Tương truyền rất lâu trước kia, trong thành Tế Nam có một chàng trai tốt bụng tên là Bào Toàn.'},
     {zh:'她有一颗美丽善良的心。',py:'Tā yǒu yì kē měilì shànliáng de xīn.',vn:'Cô ấy có một trái tim đẹp và lương thiện.'},
     {zh:'我的同桌心地善良，经常帮助别人。',py:'Wǒ de tóngzhuō xīndì shànliáng, jīngcháng bāngzhù biérén.',vn:'Bạn cùng bàn của tôi tốt bụng, thường giúp đỡ người khác.'}
   ],
   colloFull:[
     {zh:'善良的青年',py:'shànliáng de qīngnián',vn:'chàng trai lương thiện'},
     {zh:'心地善良',py:'xīndì shànliáng',vn:'tấm lòng lương thiện'},
     {zh:'善良的性格',py:'shànliáng de xìnggé',vn:'tính cách lương thiện'},
     {zh:'一颗善良的心',py:'yì kē shànliáng de xīn',vn:'một trái tim lương thiện'},
     {zh:'善良的人',py:'shànliáng de rén',vn:'người tốt bụng'}
   ],
   patterns:[
     {s:'心地 + 善良',m:'Tấm lòng lương thiện'},
     {s:'善良的 + 人 / 心 / 性格',m:'… lương thiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy tuy ít nói nhưng là một người rất tốt bụng.',answer:'他虽然话不多，但是是一个很善良的人。',answerPy:'Tā suīrán huà bù duō, dànshì shì yí ge hěn shànliáng de rén.',
      note:'虽然 đứng sau chủ ngữ khi hai vế cùng chủ ngữ.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cô bé tốt bụng này ngay cả con mèo bên đường cũng chăm sóc.',answer:'这个善良的小女孩连路边的小猫都照顾。',answerPy:'Zhège shànliáng de xiǎo nǚhái lián lù biān de xiǎo māo dōu zhàogù.',
      note:'善良的 làm định ngữ; 连 + tân ngữ + 都 + động từ.',pair:'连……都……'}
   ]},

  {n:15,zh:'救',py:'jiù',pos:'Động từ',vn:'cứu, cứu giúp',hv:'cứu',em:'🆘',lesson:1,
   explain:['Giúp người hay vật thoát khỏi nguy hiểm, cái chết, bệnh tật.'],
   usage:'救 + người; 救人, 救命; bổ ngữ hay gặp: 救活 / 救起 / 救出 / 救过来.',
   collo:['救人','救活','救出','救过来'],
   ex_zh:'他学习医术，救了很多人。',ex_py:'Tā xuéxí yīshù, jiùle hěn duō rén.',ex_vn:'Anh học y thuật, cứu được rất nhiều người.',
   exList:[
     {zh:'他学习医术，救了很多人。',py:'Tā xuéxí yīshù, jiùle hěn duō rén.',vn:'Anh học y thuật, cứu được rất nhiều người.'},
     {zh:'医生们努力了三个小时，终于把他救过来了。',py:'Yīshēngmen nǔlìle sān ge xiǎoshí, zhōngyú bǎ tā jiù guòlai le.',vn:'Các bác sĩ cố gắng suốt ba tiếng, cuối cùng đã cứu tỉnh anh ấy.'},
     {zh:'消防员从大火里救出了两个孩子。',py:'Xiāofángyuán cóng dà huǒ li jiùchūle liǎng ge háizi.',vn:'Lính cứu hoả cứu hai đứa trẻ ra khỏi đám cháy lớn.'}
   ],
   colloFull:[
     {zh:'救人',py:'jiù rén',vn:'cứu người'},
     {zh:'救活',py:'jiùhuó',vn:'cứu sống'},
     {zh:'救起',py:'jiùqǐ',vn:'cứu lên (khỏi nước)'},
     {zh:'救出',py:'jiùchū',vn:'cứu ra'},
     {zh:'救过来',py:'jiù guòlai',vn:'cứu tỉnh lại'}
   ],
   patterns:[
     {s:'救 + 活 / 起 / 出 / 过来',m:'Cứu sống / cứu lên / cứu ra / cứu tỉnh'},
     {s:'把 + người + 救 + bổ ngữ',m:'Cứu ai đó (câu 把)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé rơi xuống nước đã được một người qua đường cứu lên.',answer:'掉进水里的小男孩被一个路人救起来了。',answerPy:'Diàojìn shuǐ li de xiǎo nánhái bèi yí ge lùrén jiù qǐlai le.',
      note:'被 + người cứu + 救起来了.',pair:'被'},
     {promptLang:'vi',prompt:'Bác sĩ cuối cùng đã cứu sống ông cụ.',answer:'医生终于把老人救活了。',answerPy:'Yīshēng zhōngyú bǎ lǎorén jiùhuó le.',
      note:'把 + tân ngữ + 救活: động từ phải có bổ ngữ kết quả.',pair:'把'}
   ]},

  {n:16,zh:'晕',py:'yūn',pos:'Động từ',vn:'ngất, bất tỉnh; choáng váng',hv:'vựng',em:'😵',lesson:1,
   explain:['Mất tri giác, ngất đi (晕倒, 晕过去); cũng chỉ cảm giác choáng, chóng mặt (头晕). Chú ý: 晕车 (say xe) đọc yùn.'],
   usage:'晕倒, 晕过去, 头晕, 打晕.',
   collo:['晕倒','晕过去','头晕'],
   ex_zh:'他在路边救了一位晕倒的老人。',ex_py:'Tā zài lù biān jiùle yí wèi yūndǎo de lǎorén.',ex_vn:'Anh cứu một cụ già ngất xỉu bên đường.',
   exList:[
     {zh:'他在路边救了一位晕倒的老人。',py:'Tā zài lù biān jiùle yí wèi yūndǎo de lǎorén.',vn:'Anh cứu một cụ già ngất xỉu bên đường.'},
     {zh:'天气太热了，有个同学在操场上晕倒了。',py:'Tiānqì tài rè le, yǒu ge tóngxué zài cāochǎng shang yūndǎo le.',vn:'Trời nóng quá, có một bạn ngất trên sân thể dục.'},
     {zh:'我今天没吃早饭，现在有点儿头晕。',py:'Wǒ jīntiān méi chī zǎofàn, xiànzài yǒudiǎnr tóu yūn.',vn:'Hôm nay tôi không ăn sáng, giờ hơi chóng mặt.'}
   ],
   colloFull:[
     {zh:'晕倒',py:'yūndǎo',vn:'ngất xỉu'},
     {zh:'晕过去',py:'yūn guòqu',vn:'ngất đi'},
     {zh:'头晕',py:'tóu yūn',vn:'chóng mặt'},
     {zh:'被打晕',py:'bèi dǎyūn',vn:'bị đánh ngất'}
   ],
   patterns:[
     {s:'晕 + 倒 / 过去',m:'Ngất xỉu / ngất đi'},
     {s:'头 + 晕',m:'Chóng mặt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy vừa đứng dậy là thấy chóng mặt.',answer:'他一站起来就觉得头晕。',answerPy:'Tā yí zhàn qǐlai jiù juéde tóu yūn.',
      note:'头晕 là cụm chủ–vị, đứng sau 觉得.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Hôm qua có một cô gái bị nắng làm ngất trên đường.',answer:'昨天有个女孩在路上被晒晕了。',answerPy:'Zuótiān yǒu ge nǚhái zài lù shang bèi shàiyūn le.',
      note:'晒晕 = phơi nắng đến ngất; 晕 làm bổ ngữ kết quả.',pair:'被'}
   ]},

  {n:17,zh:'龙',py:'lóng',pos:'Danh từ',vn:'rồng',hv:'long',em:'🐉',lesson:1,
   explain:['Con rồng — con vật trong truyền thuyết, tượng trưng cho sức mạnh và may mắn ở cả Trung Quốc lẫn Việt Nam. Lượng từ: 条.'],
   usage:'一条龙, 龙王 (Long vương), 龙年 (năm Thìn), 舞龙 (múa rồng).',
   collo:['一条龙','龙王','龙年'],
   ex_zh:'在中国和越南的文化里，龙都代表着好运。',ex_py:'Zài Zhōngguó hé Yuènán de wénhuà li, lóng dōu dàibiǎozhe hǎoyùn.',ex_vn:'Trong văn hoá Trung Quốc và Việt Nam, rồng đều tượng trưng cho may mắn.',
   exList:[
     {zh:'在中国和越南的文化里，龙都代表着好运。',py:'Zài Zhōngguó hé Yuènán de wénhuà li, lóng dōu dàibiǎozhe hǎoyùn.',vn:'Trong văn hoá Trung Quốc và Việt Nam, rồng đều tượng trưng cho may mắn.'},
     {zh:'鲍全从龙王那儿求到了治病救人的白玉壶。',py:'Bào Quán cóng Lóngwáng nàr qiúdàole zhì bìng jiù rén de báiyù hú.',vn:'Bào Toàn xin được từ Long vương chiếc bình ngọc trắng chữa bệnh cứu người.'},
     {zh:'我弟弟是龙年出生的。',py:'Wǒ dìdi shì lóngnián chūshēng de.',vn:'Em trai tôi sinh năm Thìn.'}
   ],
   colloFull:[
     {zh:'一条龙',py:'yì tiáo lóng',vn:'một con rồng'},
     {zh:'龙王',py:'Lóngwáng',vn:'Long vương'},
     {zh:'龙年',py:'lóngnián',vn:'năm Thìn'},
     {zh:'舞龙',py:'wǔ lóng',vn:'múa rồng'}
   ],
   patterns:[
     {s:'一条 + 龙',m:'Lượng từ của 龙 là 条'},
     {s:'龙 + 王 / 年 / 舟',m:'Long vương / năm Thìn / thuyền rồng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Truyền thuyết về rồng này là do ông kể cho tôi nghe.',answer:'这个关于龙的传说是爷爷讲给我听的。',answerPy:'Zhège guānyú lóng de chuánshuō shì yéye jiǎng gěi wǒ tīng de.',
      note:'关于 + 龙 + 的传说; 是……的 nhấn mạnh người kể.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tết năm nay ngay cả ngoài phố cũng có múa rồng.',answer:'今年过年，连街上都有舞龙表演。',answerPy:'Jīnnián guònián, lián jiē shang dōu yǒu wǔ lóng biǎoyǎn.',
      note:'舞龙 = múa rồng; 连 + nơi chốn + 都 + 有.',pair:'连……都……'}
   ]},

  {n:18,zh:'治',py:'zhì',pos:'Động từ',vn:'chữa (bệnh), điều trị — 治（疗）',hv:'trị',em:'💊',lesson:1,
   explain:['Chữa bệnh, điều trị. Sách ghi 治（疗）: 治 là dạng một âm tiết, hay đi trong cụm cố định (治病, 治好, 治病救人); 治疗 zhìliáo là dạng hai âm tiết, trang trọng hơn (接受治疗, 感冒的治疗).'],
   usage:'治 + 病 / 好; 治病救人; 治疗 + bệnh; ……的治疗.',
   collo:['治病','治好','治病救人','接受治疗'],
   ex_zh:'这种药能治感冒。',ex_py:'Zhè zhǒng yào néng zhì gǎnmào.',ex_vn:'Loại thuốc này chữa được cảm.',
   exList:[
     {zh:'这种药能治感冒。',py:'Zhè zhǒng yào néng zhì gǎnmào.',vn:'Loại thuốc này chữa được cảm.'},
     {zh:'鲍全从龙王那儿求到了治病救人的白玉壶。',py:'Bào Quán cóng Lóngwáng nàr qiúdàole zhì bìng jiù rén de báiyù hú.',vn:'Bào Toàn xin được từ Long vương chiếc bình ngọc trắng chữa bệnh cứu người.'},
     {zh:'这种药主要用于感冒的治疗。',py:'Zhè zhǒng yào zhǔyào yòng yú gǎnmào de zhìliáo.',vn:'Loại thuốc này chủ yếu dùng để điều trị cảm.'}
   ],
   colloFull:[
     {zh:'治病',py:'zhì bìng',vn:'chữa bệnh'},
     {zh:'治好',py:'zhìhǎo',vn:'chữa khỏi'},
     {zh:'治病救人',py:'zhì bìng jiù rén',vn:'chữa bệnh cứu người'},
     {zh:'接受治疗',py:'jiēshòu zhìliáo',vn:'được điều trị'},
     {zh:'治疗感冒',py:'zhìliáo gǎnmào',vn:'điều trị cảm'}
   ],
   patterns:[
     {s:'治 + 病 / 好',m:'Chữa bệnh / chữa khỏi'},
     {s:'用于 + ……的治疗',m:'Dùng để điều trị … (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bệnh của bà tôi đã được một bác sĩ trẻ chữa khỏi.',answer:'我奶奶的病被一位年轻医生治好了。',answerPy:'Wǒ nǎinai de bìng bèi yí wèi niánqīng yīshēng zhìhǎo le.',
      note:'治好 = chữa khỏi (động từ + bổ ngữ kết quả).',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần kiên trì điều trị là bệnh này sẽ khỏi.',answer:'只要坚持治疗，这种病就会好的。',answerPy:'Zhǐyào jiānchí zhìliáo, zhè zhǒng bìng jiù huì hǎo de.',
      note:'坚持治疗 dùng dạng hai âm tiết 治疗.',pair:'只要……就……'}
   ]},

  {n:19,zh:'玉',py:'yù',pos:'Danh từ',vn:'ngọc, ngọc thạch',hv:'ngọc',em:'💎',lesson:1,
   explain:['Ngọc — loại đá quý, đẹp và bóng. 白玉 = ngọc trắng. Người Trung Quốc xưa coi ngọc là biểu tượng của phẩm chất tốt đẹp.'],
   usage:'白玉, 玉石, 玉壶, 一块玉 (lượng từ 块).',
   collo:['白玉','一块玉','白玉壶'],
   ex_zh:'奶奶送给我一块玉，说能带来好运。',ex_py:'Nǎinai sòng gěi wǒ yí kuài yù, shuō néng dàilái hǎoyùn.',ex_vn:'Bà tặng tôi một miếng ngọc, nói có thể đem lại may mắn.',
   exList:[
     {zh:'奶奶送给我一块玉，说能带来好运。',py:'Nǎinai sòng gěi wǒ yí kuài yù, shuō néng dàilái hǎoyùn.',vn:'Bà tặng tôi một miếng ngọc, nói có thể đem lại may mắn.'},
     {zh:'通过老人的介绍，鲍全从龙王那儿求到了治病救人的白玉壶。',py:'Tōngguò lǎorén de jièshào, Bào Quán cóng Lóngwáng nàr qiúdàole zhì bìng jiù rén de báiyù hú.',vn:'Nhờ ông cụ giới thiệu, Bào Toàn xin được từ Long vương chiếc bình ngọc trắng chữa bệnh cứu người.'},
     {zh:'这个手镯是用玉做的，非常贵。',py:'Zhège shǒuzhuó shì yòng yù zuò de, fēicháng guì.',vn:'Chiếc vòng tay này làm bằng ngọc, rất đắt.'}
   ],
   colloFull:[
     {zh:'白玉',py:'báiyù',vn:'ngọc trắng'},
     {zh:'一块玉',py:'yí kuài yù',vn:'một miếng ngọc'},
     {zh:'白玉壶',py:'báiyù hú',vn:'bình ngọc trắng'},
     {zh:'玉石',py:'yùshí',vn:'ngọc thạch'}
   ],
   patterns:[
     {s:'一块 + 玉',m:'Lượng từ của 玉 là 块'},
     {s:'玉 + 壶 / 石 / 器',m:'Bình ngọc / ngọc thạch / đồ ngọc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc bình ngọc này là do ông để lại.',answer:'这个玉壶是爷爷留下来的。',answerPy:'Zhège yù hú shì yéye liú xiàlai de.',
      note:'玉壶 = bình ngọc; 留下来 = để lại (cho đời sau).',pair:'是……的'},
     {promptLang:'vi',prompt:'Miếng ngọc này bị em trai tôi làm rơi vỡ rồi.',answer:'这块玉被我弟弟摔坏了。',answerPy:'Zhè kuài yù bèi wǒ dìdi shuāihuài le.',
      note:'Lượng từ 块; 摔坏 = làm rơi hỏng.',pair:'被'}
   ]},

  {n:20,zh:'壶',py:'hú',pos:'Danh từ',vn:'ấm, bình',hv:'hồ',em:'🫖',lesson:1,
   explain:['Ấm, bình — đồ đựng chất lỏng có quai và vòi. Cũng làm lượng từ: 一壶茶 (một ấm trà), 一壶水 (một bình nước).'],
   usage:'茶壶, 水壶, 一把壶 (lượng từ 把), 一壶茶.',
   collo:['茶壶','水壶','一壶茶','白玉壶'],
   ex_zh:'爷爷每天早上都要泡一壶茶。',ex_py:'Yéye měi tiān zǎoshang dōu yào pào yì hú chá.',ex_vn:'Sáng nào ông cũng pha một ấm trà.',
   exList:[
     {zh:'爷爷每天早上都要泡一壶茶。',py:'Yéye měi tiān zǎoshang dōu yào pào yì hú chá.',vn:'Sáng nào ông cũng pha một ấm trà.'},
     {zh:'他把壶埋入地下藏了起来。',py:'Tā bǎ hú máirù dìxià cángle qǐlai.',vn:'Anh chôn chiếc bình xuống đất giấu đi.'},
     {zh:'去爬山的时候别忘了带水壶。',py:'Qù páshān de shíhou bié wàngle dài shuǐhú.',vn:'Khi đi leo núi đừng quên mang bình nước.'}
   ],
   colloFull:[
     {zh:'茶壶',py:'cháhú',vn:'ấm trà'},
     {zh:'水壶',py:'shuǐhú',vn:'bình nước'},
     {zh:'一壶茶',py:'yì hú chá',vn:'một ấm trà'},
     {zh:'白玉壶',py:'báiyù hú',vn:'bình ngọc trắng'},
     {zh:'一把壶',py:'yì bǎ hú',vn:'một cái ấm'}
   ],
   patterns:[
     {s:'一把 + 壶',m:'Lượng từ của 壶 là 把'},
     {s:'一壶 + 茶 / 水',m:'壶 làm lượng từ: một ấm trà / một bình nước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đặt ấm trà lên bàn.',answer:'他把茶壶放在桌子上。',answerPy:'Tā bǎ cháhú fàng zài zhuōzi shang.',
      note:'把 + 茶壶 + 放在 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Ấm trà mới mua đã bị con mèo làm vỡ rồi.',answer:'新买的茶壶被猫打碎了。',answerPy:'Xīn mǎi de cháhú bèi māo dǎsuì le.',
      note:'打碎 = làm vỡ; chủ ngữ là vật chịu tác động.',pair:'被'}
   ]},

  {n:21,zh:'抢',py:'qiǎng',pos:'Động từ',vn:'cướp, cướp đoạt; tranh giành',hv:'thương',em:'🏃',lesson:1,
   explain:['Dùng sức lấy đồ của người khác (cướp); cũng chỉ tranh nhau, giành làm trước (抢着说, 抢着回答).'],
   usage:'抢走, 抢钱, 被……抢走; bổ ngữ 抢光 (giành hết sạch); 抢着 + V (tranh nhau làm).',
   collo:['抢走','被抢走','抢光','抢着做'],
   ex_zh:'为了不被坏人抢走，他把壶埋入地下藏了起来。',ex_py:'Wèile bú bèi huàirén qiǎngzǒu, tā bǎ hú máirù dìxià cángle qǐlai.',ex_vn:'Để không bị kẻ xấu cướp mất, anh chôn chiếc bình xuống đất giấu đi.',
   exList:[
     {zh:'为了不被坏人抢走，他把壶埋入地下藏了起来。',py:'Wèile bú bèi huàirén qiǎngzǒu, tā bǎ hú máirù dìxià cángle qǐlai.',vn:'Để không bị kẻ xấu cướp mất, anh chôn chiếc bình xuống đất giấu đi.'},
     {zh:'商店一打折，东西很快就被抢光了。',py:'Shāngdiàn yì dǎzhé, dōngxi hěn kuài jiù bèi qiǎngguāng le.',vn:'Cửa hàng vừa giảm giá, hàng đã nhanh chóng bị giành mua hết sạch.'},
     {zh:'老师一提问，同学们都抢着回答。',py:'Lǎoshī yì tíwèn, tóngxuémen dōu qiǎngzhe huídá.',vn:'Thầy vừa hỏi, cả lớp tranh nhau trả lời.'}
   ],
   colloFull:[
     {zh:'抢走',py:'qiǎngzǒu',vn:'cướp mất'},
     {zh:'被抢走',py:'bèi qiǎngzǒu',vn:'bị cướp mất'},
     {zh:'抢光',py:'qiǎngguāng',vn:'giành hết sạch'},
     {zh:'抢着做',py:'qiǎngzhe zuò',vn:'tranh nhau làm'},
     {zh:'抢钱',py:'qiǎng qián',vn:'cướp tiền'}
   ],
   patterns:[
     {s:'被 + (người) + 抢走 / 抢光',m:'Bị cướp mất / bị giành hết'},
     {s:'抢着 + V',m:'Tranh nhau làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vé buổi hoà nhạc vừa mở bán đã bị giành mua hết sạch.',answer:'音乐会的票一开卖就被抢光了。',answerPy:'Yīnyuèhuì de piào yì kāimài jiù bèi qiǎngguāng le.',
      note:'抢光 = giành hết sạch; 一……就…… chỉ việc xảy ra liền ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Túi của cô ấy bị một thanh niên cướp mất.',answer:'她的包被一个年轻人抢走了。',answerPy:'Tā de bāo bèi yí ge niánqīngrén qiǎngzǒu le.',
      note:'抢走 = cướp mất; câu bị động với 被.',pair:'被'}
   ]},

  {n:22,zh:'埋',py:'mái',pos:'Động từ',vn:'chôn, vùi',hv:'mai',em:'⛏️',lesson:1,
   explain:['Chôn, vùi xuống đất hoặc dưới vật gì đó. Chú ý: trong 埋怨 (trách móc) chữ này đọc mán.'],
   usage:'埋入地下, 埋在……里/下, 把……埋起来.',
   collo:['埋入地下','埋在土里','埋起来'],
   ex_zh:'他把壶埋入地下藏了起来。',ex_py:'Tā bǎ hú máirù dìxià cángle qǐlai.',ex_vn:'Anh chôn chiếc bình xuống đất giấu đi.',
   exList:[
     {zh:'他把壶埋入地下藏了起来。',py:'Tā bǎ hú máirù dìxià cángle qǐlai.',vn:'Anh chôn chiếc bình xuống đất giấu đi.'},
     {zh:'小狗把骨头埋在了花园里。',py:'Xiǎo gǒu bǎ gǔtou mái zàile huāyuán li.',vn:'Chú chó con chôn khúc xương trong vườn.'},
     {zh:'那座古城被埋在地下一千多年了。',py:'Nà zuò gǔchéng bèi mái zài dìxià yìqiān duō nián le.',vn:'Toà thành cổ đó đã bị vùi dưới đất hơn một nghìn năm.'}
   ],
   colloFull:[
     {zh:'埋入地下',py:'máirù dìxià',vn:'chôn xuống đất'},
     {zh:'埋在土里',py:'mái zài tǔ li',vn:'chôn trong đất'},
     {zh:'埋起来',py:'mái qǐlai',vn:'chôn đi'},
     {zh:'被埋在……',py:'bèi mái zài……',vn:'bị vùi ở …'}
   ],
   patterns:[
     {s:'把 + N + 埋 + 在 / 入 + nơi chốn',m:'Chôn cái gì ở đâu'},
     {s:'埋 mái (chôn) ≠ 埋怨 mányuàn (trách móc)',m:'Hai cách đọc của 埋'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chôn chiếc bình dưới gốc cây.',answer:'他把壶埋在了树下。',answerPy:'Tā bǎ hú mái zàile shù xià.',
      note:'把 + tân ngữ + 埋在 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Những đồng tiền cổ này là bị người ta chôn ở đây từ một nghìn năm trước.',answer:'这些古钱是一千年前被人埋在这里的。',answerPy:'Zhèxiē gǔqián shì yìqiān nián qián bèi rén mái zài zhèli de.',
      note:'是……的 nhấn mạnh thời gian; bên trong dùng 被人埋在…….',pair:'是……的'}
   ]},

  {n:23,zh:'藏',py:'cáng',pos:'Động từ',vn:'giấu, cất; ẩn nấp — （躲）藏',hv:'tàng',em:'🙈',lesson:1,
   explain:['Giấu, cất đi để người khác không thấy (藏钱, 藏起来). Sách ghi （躲）藏: 躲藏 duǒcáng = trốn, ẩn nấp (người hay vật tự giấu mình).'],
   usage:'把……藏起来; 藏在……里/下; 躲藏在……. Bổ ngữ 起来 ở đây biểu thị từ chỗ lộ ra thành giấu kín.',
   collo:['藏起来','藏在……里','躲藏'],
   ex_zh:'妹妹把我的生日礼物藏在了床下。',ex_py:'Mèimei bǎ wǒ de shēngrì lǐwù cáng zàile chuáng xià.',ex_vn:'Em gái giấu quà sinh nhật của tôi dưới gầm giường.',
   exList:[
     {zh:'妹妹把我的生日礼物藏在了床下。',py:'Mèimei bǎ wǒ de shēngrì lǐwù cáng zàile chuáng xià.',vn:'Em gái giấu quà sinh nhật của tôi dưới gầm giường.'},
     {zh:'为了不被坏人抢走，他把壶埋入地下藏了起来。',py:'Wèile bú bèi huàirén qiǎngzǒu, tā bǎ hú máirù dìxià cángle qǐlai.',vn:'Để không bị kẻ xấu cướp mất, anh chôn chiếc bình xuống đất giấu đi.'},
     {zh:'小猫躲藏在沙发后面，谁也找不到它。',py:'Xiǎo māo duǒcáng zài shāfā hòumiàn, shéi yě zhǎo bu dào tā.',vn:'Con mèo con trốn sau ghế sofa, không ai tìm thấy nó.'}
   ],
   colloFull:[
     {zh:'藏起来',py:'cáng qǐlai',vn:'giấu đi'},
     {zh:'藏在……里',py:'cáng zài…… li',vn:'giấu trong …'},
     {zh:'躲藏',py:'duǒcáng',vn:'ẩn nấp'},
     {zh:'藏钱',py:'cáng qián',vn:'giấu tiền'}
   ],
   patterns:[
     {s:'把 + N + 藏 + 起来 / 在……',m:'Giấu cái gì đi / giấu ở đâu'},
     {s:'躲藏 + 在 + nơi chốn',m:'Trốn ở đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em trai vừa thấy mẹ về là giấu điện thoại đi.',answer:'弟弟一看见妈妈回来，就把手机藏起来了。',answerPy:'Dìdi yí kànjiàn māma huílai, jiù bǎ shǒujī cáng qǐlai le.',
      note:'藏起来 = giấu đi (起来 chỉ từ lộ ra thành giấu kín).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chìa khoá bị bố giấu trong ngăn kéo rồi.',answer:'钥匙被爸爸藏在抽屉里了。',answerPy:'Yàoshi bèi bàba cáng zài chōuti li le.',
      note:'被 + người + 藏在 + nơi chốn.',pair:'被'}
   ]},

  {n:24,zh:'如今',py:'rújīn',pos:'Danh từ',vn:'ngày nay, bây giờ',hv:'như kim',em:'📅',lesson:1,
   explain:['Ngày nay, thời nay — dùng khi ĐỐI CHIẾU với quá khứ đã qua khá lâu. Không dùng cho một thời điểm cụ thể như giờ giấc; khi đó dùng 现在.'],
   usage:'如今 + chủ ngữ + ……; 如今的 + N; 到如今. Không nói 如今是五点 (phải nói 现在是五点).',
   collo:['如今的济南','到如今','如今的年轻人'],
   ex_zh:'如今的济南市区内，分布着大大小小七百多个天然泉。',ex_py:'Rújīn de Jǐnán shìqū nèi, fēnbùzhe dàdàxiǎoxiǎo qībǎi duō ge tiānrán quán.',ex_vn:'Trong nội thành Tế Nam ngày nay phân bố hơn bảy trăm suối tự nhiên lớn nhỏ.',
   exList:[
     {zh:'如今的济南市区内，分布着大大小小七百多个天然泉。',py:'Rújīn de Jǐnán shìqū nèi, fēnbùzhe dàdàxiǎoxiǎo qībǎi duō ge tiānrán quán.',vn:'Trong nội thành Tế Nam ngày nay phân bố hơn bảy trăm suối tự nhiên lớn nhỏ.'},
     {zh:'十年前这里还是农村，如今已经变成了一个热闹的城市。',py:'Shí nián qián zhèli hái shì nóngcūn, rújīn yǐjīng biànchéngle yí ge rènao de chéngshì.',vn:'Mười năm trước nơi đây còn là nông thôn, nay đã thành một thành phố nhộn nhịp.'},
     {zh:'如今的年轻人都离不开手机。',py:'Rújīn de niánqīngrén dōu lí bu kāi shǒujī.',vn:'Giới trẻ ngày nay đều không rời được điện thoại.'}
   ],
   colloFull:[
     {zh:'如今的济南',py:'rújīn de Jǐnán',vn:'Tế Nam ngày nay'},
     {zh:'到如今',py:'dào rújīn',vn:'đến tận bây giờ'},
     {zh:'如今的年轻人',py:'rújīn de niánqīngrén',vn:'giới trẻ ngày nay'},
     {zh:'事到如今',py:'shì dào rújīn',vn:'sự việc đã đến nước này'}
   ],
   patterns:[
     {s:'过去 / 以前……，如今……',m:'Trước kia …, ngày nay … (đối chiếu)'},
     {s:'如今的 + N',m:'… ngày nay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước kia nhà tôi rất nghèo, ngày nay cuộc sống càng ngày càng tốt.',answer:'以前我家很穷，如今生活越来越好了。',answerPy:'Yǐqián wǒ jiā hěn qióng, rújīn shēnghuó yuè lái yuè hǎo le.',
      note:'如今 đối lập với 以前 — đúng cách dùng của từ này.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Con đường nhỏ ngày xưa, ngày nay ngay cả xe buýt cũng chạy được.',answer:'以前的小路，如今连公共汽车都能开了。',answerPy:'Yǐqián de xiǎo lù, rújīn lián gōnggòng qìchē dōu néng kāi le.',
      note:'如今 đứng đầu vế sau, trước 连……都.',pair:'连……都……'}
   ]},

  {n:25,zh:'分布',py:'fēnbù',pos:'Động từ',vn:'phân bố',hv:'phân bố',em:'🗺️',lesson:1,
   explain:['Rải ra, có mặt ở nhiều chỗ trong một khu vực nhất định.'],
   usage:'Nơi chốn + 分布着 + số lượng + N (câu tồn hiện); N + 分布在 + nơi chốn; 分布很广.',
   collo:['分布着','分布在','分布很广'],
   ex_zh:'越南的少数民族主要分布在北部山区。',ex_py:'Yuènán de shǎoshù mínzú zhǔyào fēnbù zài běibù shānqū.',ex_vn:'Các dân tộc thiểu số ở Việt Nam chủ yếu phân bố ở vùng núi phía Bắc.',
   exList:[
     {zh:'越南的少数民族主要分布在北部山区。',py:'Yuènán de shǎoshù mínzú zhǔyào fēnbù zài běibù shānqū.',vn:'Các dân tộc thiểu số ở Việt Nam chủ yếu phân bố ở vùng núi phía Bắc.'},
     {zh:'济南市区内，分布着大大小小七百多个天然泉。',py:'Jǐnán shìqū nèi, fēnbùzhe dàdàxiǎoxiǎo qībǎi duō ge tiānrán quán.',vn:'Trong nội thành Tế Nam phân bố hơn bảy trăm suối tự nhiên lớn nhỏ.'},
     {zh:'我们学校的图书馆分布在三栋楼里。',py:'Wǒmen xuéxiào de túshūguǎn fēnbù zài sān dòng lóu li.',vn:'Thư viện trường tôi nằm rải ở ba toà nhà.'}
   ],
   colloFull:[
     {zh:'分布着',py:'fēnbùzhe',vn:'có … phân bố'},
     {zh:'分布在',py:'fēnbù zài',vn:'phân bố ở'},
     {zh:'分布很广',py:'fēnbù hěn guǎng',vn:'phân bố rộng'},
     {zh:'分布均匀',py:'fēnbù jūnyún',vn:'phân bố đều'}
   ],
   patterns:[
     {s:'Nơi chốn + 分布着 + số lượng + N',m:'Ở … có … phân bố (câu tồn hiện)'},
     {s:'N + 分布在 + nơi chốn',m:'… phân bố ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Suối ở Tế Nam không những nhiều mà còn phân bố rất rộng.',answer:'济南的泉水不仅多，而且分布很广。',answerPy:'Jǐnán de quánshuǐ bùjǐn duō, érqiě fēnbù hěn guǎng.',
      note:'分布很广 = phân bố rộng.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Thành phố này tuy không lớn nhưng có hơn một trăm công viên phân bố khắp nơi.',answer:'这个城市虽然不大，但是分布着一百多个公园。',answerPy:'Zhège chéngshì suīrán bú dà, dànshì fēnbùzhe yìbǎi duō ge gōngyuán.',
      note:'分布着 + số lượng + danh từ: câu tồn hiện.',pair:'虽然……但是……'}
   ]},

  {n:26,zh:'天然',py:'tiānrán',pos:'Tính từ',vn:'tự nhiên, (thuộc) thiên nhiên',hv:'thiên nhiên',em:'🌿',lesson:1,
   explain:['Có sẵn trong tự nhiên, không do con người làm ra. Thường làm định ngữ đứng ngay trước danh từ: 天然泉, 天然气.','Khác 自然: 自然 còn là danh từ "thiên nhiên" và phó từ "đương nhiên" (自然对它充满感激之情); 天然 chỉ là tính từ.'],
   usage:'天然 + 泉/气/材料/食品; 天然的 + N.',
   collo:['天然泉','天然气','天然的泉水','天然食品'],
   ex_zh:'你喝过天然的泉水吗？',ex_py:'Nǐ hēguo tiānrán de quánshuǐ ma?',ex_vn:'Bạn từng uống nước suối tự nhiên chưa?',
   exList:[
     {zh:'你喝过天然的泉水吗？',py:'Nǐ hēguo tiānrán de quánshuǐ ma?',vn:'Bạn từng uống nước suối tự nhiên chưa?'},
     {zh:'这在国内外城市中是极为少有的：一个城市里有七百多个天然泉。',py:'Zhè zài guónèiwài chéngshì zhōng shì jíwéi shǎoyǒu de: yí ge chéngshì li yǒu qībǎi duō ge tiānrán quán.',vn:'Điều này cực kỳ hiếm có trong các thành phố trong và ngoài nước: một thành phố có hơn bảy trăm suối tự nhiên.'},
     {zh:'妈妈只买天然食品，不买加了很多东西的饮料。',py:'Māma zhǐ mǎi tiānrán shípǐn, bù mǎi jiāle hěn duō dōngxi de yǐnliào.',vn:'Mẹ chỉ mua thực phẩm tự nhiên, không mua đồ uống cho thêm nhiều thứ.'}
   ],
   colloFull:[
     {zh:'天然泉',py:'tiānrán quán',vn:'suối tự nhiên'},
     {zh:'天然气',py:'tiānránqì',vn:'khí thiên nhiên'},
     {zh:'天然的泉水',py:'tiānrán de quánshuǐ',vn:'nước suối tự nhiên'},
     {zh:'天然食品',py:'tiānrán shípǐn',vn:'thực phẩm tự nhiên'},
     {zh:'天然材料',py:'tiānrán cáiliào',vn:'nguyên liệu tự nhiên'}
   ],
   patterns:[
     {s:'天然 + N',m:'… tự nhiên (có sẵn trong thiên nhiên)'},
     {s:'✗ 他天然地笑了 → ✓ 他自然地笑了',m:'"Một cách tự nhiên" dùng 自然, không dùng 天然'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loại mỹ phẩm này làm bằng nguyên liệu tự nhiên.',answer:'这种化妆品是用天然材料做的。',answerPy:'Zhè zhǒng huàzhuāngpǐn shì yòng tiānrán cáiliào zuò de.',
      note:'是 + 用……做的: nhấn mạnh chất liệu.',pair:'是……的'},
     {promptLang:'vi',prompt:'Mọi người càng ngày càng thích thực phẩm tự nhiên.',answer:'人们越来越喜欢天然食品了。',answerPy:'Rénmen yuè lái yuè xǐhuan tiānrán shípǐn le.',
      note:'天然 đứng thẳng trước danh từ, không cần 的.',pair:'越来越……'}
   ]},

  {n:27,zh:'优美',py:'yōuměi',pos:'Tính từ',vn:'đẹp đẽ, thanh nhã',hv:'ưu mỹ',em:'🌸',lesson:1,
   explain:['Đẹp, thanh nhã — nhấn mạnh CẢM GIÁC đẹp mà động tác, hình ảnh, âm thanh, lời văn, phong cảnh đem lại. Dùng được cho cảm nhận không bằng mắt (tiếng hát, ngôn ngữ).'],
   usage:'风景/环境/动作/歌声/语言 + 优美; 优美的 + N. Không dùng để khen dung mạo, trang phục (dùng 美丽/漂亮).',
   collo:['风景优美','优美的歌声','动作优美','语言优美'],
   ex_zh:'演员们的动作十分优美。',ex_py:'Yǎnyuánmen de dòngzuò shífēn yōuměi.',ex_vn:'Động tác của các diễn viên vô cùng đẹp mắt.',
   exList:[
     {zh:'演员们的动作十分优美。',py:'Yǎnyuánmen de dòngzuò shífēn yōuměi.',vn:'Động tác của các diễn viên vô cùng đẹp mắt.'},
     {zh:'济南泉水的优美，还可从那独特的名字上反映出来。',py:'Jǐnán quánshuǐ de yōuměi, hái kě cóng nà dútè de míngzi shang fǎnyìng chūlai.',vn:'Vẻ đẹp của suối Tế Nam còn được thể hiện qua những cái tên độc đáo.'},
     {zh:'这篇文章的语言生动优美。',py:'Zhè piān wénzhāng de yǔyán shēngdòng yōuměi.',vn:'Ngôn ngữ của bài văn này sinh động và trau chuốt.'}
   ],
   colloFull:[
     {zh:'风景优美',py:'fēngjǐng yōuměi',vn:'phong cảnh đẹp'},
     {zh:'优美的歌声',py:'yōuměi de gēshēng',vn:'tiếng hát hay'},
     {zh:'动作优美',py:'dòngzuò yōuměi',vn:'động tác đẹp'},
     {zh:'语言优美',py:'yǔyán yōuměi',vn:'ngôn ngữ trau chuốt'},
     {zh:'环境优美',py:'huánjìng yōuměi',vn:'môi trường đẹp'}
   ],
   patterns:[
     {s:'风景 / 动作 / 语言 / 歌声 + 优美',m:'… đẹp (cả thị giác lẫn thính giác)'},
     {s:'✗ 她长得很优美 → ✓ 她长得很美丽',m:'Không khen dung mạo bằng 优美'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vịnh Hạ Long không những phong cảnh đẹp mà hải sản cũng rất ngon.',answer:'下龙湾不仅风景优美，而且海鲜也很好吃。',answerPy:'Xiàlóng Wān bùjǐn fēngjǐng yōuměi, érqiě hǎixiān yě hěn hǎochī.',
      note:'风景优美 làm vị ngữ cho 下龙湾.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Tôi vừa vào sân đã nghe thấy tiếng hát hay của Lệ Lệ.',answer:'我一进院子就听到了丽丽那优美的歌声。',answerPy:'Wǒ yí jìn yuànzi jiù tīngdàole Lìli nà yōuměi de gēshēng.',
      note:'优美 tả âm thanh — cảm nhận không bằng mắt, 美丽 không dùng được ở đây.',pair:'一……就……'}
   ]},

  {n:28,zh:'独特',py:'dútè',pos:'Tính từ',vn:'độc đáo, riêng biệt',hv:'độc đặc',em:'✨',lesson:1,
   explain:['Độc đáo, riêng có, không giống cái khác — nhấn mạnh nét RIÊNG chỉ nơi đó, người đó mới có. Không làm phó từ chỉ mức độ như 特别 ("rất").'],
   usage:'独特的 + 位置/看法/形状/建筑/味道/风格; 很独特. Không nói 独特漂亮 (phải nói 特别漂亮).',
   collo:['独特的名字','独特的味道','独特的看法','独特的建筑'],
   ex_zh:'这家小店的牛肉面有一种独特的味道。',ex_py:'Zhè jiā xiǎo diàn de niúròumiàn yǒu yì zhǒng dútè de wèidao.',ex_vn:'Mì bò của quán nhỏ này có một hương vị rất riêng.',
   exList:[
     {zh:'这家小店的牛肉面有一种独特的味道。',py:'Zhè jiā xiǎo diàn de niúròumiàn yǒu yì zhǒng dútè de wèidao.',vn:'Mì bò của quán nhỏ này có một hương vị rất riêng.'},
     {zh:'济南泉水的优美，还可从那独特的名字上反映出来。',py:'Jǐnán quánshuǐ de yōuměi, hái kě cóng nà dútè de míngzi shang fǎnyìng chūlai.',vn:'Vẻ đẹp của suối Tế Nam còn được thể hiện qua những cái tên độc đáo.'},
     {zh:'他对这个问题有自己独特的看法。',py:'Tā duì zhège wèntí yǒu zìjǐ dútè de kànfǎ.',vn:'Anh ấy có cách nhìn riêng về vấn đề này.'}
   ],
   colloFull:[
     {zh:'独特的名字',py:'dútè de míngzi',vn:'cái tên độc đáo'},
     {zh:'独特的味道',py:'dútè de wèidao',vn:'hương vị riêng'},
     {zh:'独特的看法',py:'dútè de kànfǎ',vn:'cách nhìn riêng'},
     {zh:'独特的建筑',py:'dútè de jiànzhù',vn:'kiến trúc độc đáo'},
     {zh:'独特的位置',py:'dútè de wèizhì',vn:'vị trí đặc biệt'},
     {zh:'独特的形状',py:'dútè de xíngzhuàng',vn:'hình dạng độc đáo'}
   ],
   patterns:[
     {s:'独特的 + 位置 / 看法 / 形状 / 建筑',m:'… độc đáo, riêng biệt'},
     {s:'✗ 独特漂亮 → ✓ 特别漂亮',m:'独特 không làm phó từ chỉ mức độ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả người nước ngoài cũng thích hương vị độc đáo của phở Việt Nam.',answer:'连外国人都喜欢越南河粉独特的味道。',answerPy:'Lián wàiguórén dōu xǐhuan Yuènán héfěn dútè de wèidao.',
      note:'独特的 + 味道 là kết hợp rất hay gặp.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cô ấy tuy không đặc biệt xinh đẹp nhưng có phong cách riêng.',answer:'她虽然不是特别漂亮，但是有自己独特的风格。',answerPy:'Tā suīrán bú shì tèbié piàoliang, dànshì yǒu zìjǐ dútè de fēnggé.',
      note:'特别 làm phó từ (特别漂亮), 独特 làm định ngữ (独特的风格) — đừng đổi chỗ.',pair:'虽然……但是……'}
   ]},

  {n:29,zh:'反映',py:'fǎnyìng',pos:'Động từ',vn:'phản ánh, thể hiện',hv:'phản ánh',em:'🪞',lesson:1,
   explain:['Thể hiện ra bản chất, tình hình bên trong của sự vật (反映生活, 反映水平).','Cũng có nghĩa báo cáo, trình bày ý kiến với cấp trên: 向老师反映情况.'],
   usage:'反映 + 生活/水平/情况/能力; 从……上反映出来; 向 + người + 反映 + 问题.',
   collo:['反映生活','反映水平','反映情况','反映能力'],
   ex_zh:'一个人的字能反映出他的性格。',ex_py:'Yí ge rén de zì néng fǎnyìng chū tā de xìnggé.',ex_vn:'Chữ viết của một người có thể phản ánh tính cách của họ.',
   exList:[
     {zh:'一个人的字能反映出他的性格。',py:'Yí ge rén de zì néng fǎnyìng chū tā de xìnggé.',vn:'Chữ viết của một người có thể phản ánh tính cách của họ.'},
     {zh:'济南泉水的优美，还可从那独特的名字上反映出来。',py:'Jǐnán quánshuǐ de yōuměi, hái kě cóng nà dútè de míngzi shang fǎnyìng chūlai.',vn:'Vẻ đẹp của suối Tế Nam còn được thể hiện qua những cái tên độc đáo.'},
     {zh:'这部电影反映了农村老百姓的生活。',py:'Zhè bù diànyǐng fǎnyìngle nóngcūn lǎobǎixìng de shēnghuó.',vn:'Bộ phim này phản ánh cuộc sống của người dân nông thôn.'}
   ],
   colloFull:[
     {zh:'反映生活',py:'fǎnyìng shēnghuó',vn:'phản ánh cuộc sống'},
     {zh:'反映水平',py:'fǎnyìng shuǐpíng',vn:'phản ánh trình độ'},
     {zh:'反映情况',py:'fǎnyìng qíngkuàng',vn:'phản ánh tình hình'},
     {zh:'反映能力',py:'fǎnyìng nénglì',vn:'phản ánh năng lực'},
     {zh:'反映出来',py:'fǎnyìng chūlai',vn:'thể hiện ra'}
   ],
   patterns:[
     {s:'从 + N + 上 + 反映出来',m:'Được thể hiện qua …'},
     {s:'向 + người + 反映 + 情况 / 问题',m:'Phản ánh tình hình / vấn đề với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này tuy nhỏ nhưng đã phản ánh tính cách của anh ấy.',answer:'这件事虽然很小，但是反映出了他的性格。',answerPy:'Zhè jiàn shì suīrán hěn xiǎo, dànshì fǎnyìng chūle tā de xìnggé.',
      note:'反映出 + tân ngữ: thể hiện ra điều gì.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Các bạn học sinh đã phản ánh vấn đề này với thầy hiệu trưởng.',answer:'学生们把这个问题反映给了校长。',answerPy:'Xuéshengmen bǎ zhège wèntí fǎnyìng gěile xiàozhǎng.',
      note:'把 + vấn đề + 反映给 + người; cũng nói 向校长反映了这个问题.',pair:'把'}
   ]},

  {n:30,zh:'珍珠',py:'zhēnzhū',pos:'Danh từ',vn:'ngọc trai, trân châu',hv:'trân châu',em:'🦪',lesson:1,
   explain:['Ngọc trai — hạt tròn, bóng, sinh ra trong con trai, rất quý. Trà sữa trân châu tiếng Trung là 珍珠奶茶.'],
   usage:'一颗珍珠 (lượng từ 颗), 珍珠项链, 珍珠泉, 珍珠奶茶.',
   collo:['一颗珍珠','珍珠项链','珍珠奶茶','珍珠泉'],
   ex_zh:'妈妈生日那天，爸爸送了她一条珍珠项链。',ex_py:'Māma shēngrì nà tiān, bàba sòngle tā yì tiáo zhēnzhū xiàngliàn.',ex_vn:'Hôm sinh nhật mẹ, bố tặng mẹ một chuỗi vòng ngọc trai.',
   exList:[
     {zh:'妈妈生日那天，爸爸送了她一条珍珠项链。',py:'Māma shēngrì nà tiān, bàba sòngle tā yì tiáo zhēnzhū xiàngliàn.',vn:'Hôm sinh nhật mẹ, bố tặng mẹ một chuỗi vòng ngọc trai.'},
     {zh:'以人名命名的舜泉，以动物命名的黑虎泉，以形状命名的珍珠泉，等等。',py:'Yǐ rénmíng mìngmíng de Shùnquán, yǐ dòngwù mìngmíng de Hēihǔquán, yǐ xíngzhuàng mìngmíng de Zhēnzhūquán, děngděng.',vn:'Suối Thuấn đặt theo tên người, suối Hắc Hổ đặt theo tên con vật, suối Trân Châu đặt theo hình dạng, v.v.'},
     {zh:'放学以后，我们常去学校门口买珍珠奶茶。',py:'Fàngxué yǐhòu, wǒmen cháng qù xuéxiào ménkǒu mǎi zhēnzhū nǎichá.',vn:'Tan học, chúng tôi hay ra cổng trường mua trà sữa trân châu.'}
   ],
   colloFull:[
     {zh:'一颗珍珠',py:'yì kē zhēnzhū',vn:'một viên ngọc trai'},
     {zh:'珍珠项链',py:'zhēnzhū xiàngliàn',vn:'vòng cổ ngọc trai'},
     {zh:'珍珠奶茶',py:'zhēnzhū nǎichá',vn:'trà sữa trân châu'},
     {zh:'珍珠泉',py:'Zhēnzhūquán',vn:'suối Trân Châu'}
   ],
   patterns:[
     {s:'一颗 + 珍珠',m:'Lượng từ của 珍珠 là 颗'},
     {s:'珍珠 + 项链 / 奶茶',m:'Vòng ngọc trai / trà sữa trân châu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trà sữa trân châu càng ngày càng được học sinh ưa chuộng.',answer:'珍珠奶茶越来越受学生欢迎了。',answerPy:'Zhēnzhū nǎichá yuè lái yuè shòu xuésheng huānyíng le.',
      note:'受 + người + 欢迎: được ai ưa chuộng.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chuỗi vòng ngọc trai này là mẹ mua ở Hạ Long.',answer:'这条珍珠项链是妈妈在下龙湾买的。',answerPy:'Zhè tiáo zhēnzhū xiàngliàn shì māma zài Xiàlóng Wān mǎi de.',
      note:'Lượng từ của 项链 là 条; 是……的 nhấn mạnh nơi mua.',pair:'是……的'}
   ]},

  {n:31,zh:'形成',py:'xíngchéng',pos:'Động từ',vn:'hình thành',hv:'hình thành',em:'🏔️',lesson:1,
   explain:['Dần dần sinh ra, tạo thành một sự vật, một hiện tượng hoặc một thói quen, đặc điểm.'],
   usage:'形成 + 习惯/特点/风格/泉水; 自然/逐渐 + 形成; ……是如何形成的.',
   collo:['逐渐形成','自然形成','形成习惯','是如何形成的'],
   ex_zh:'这么多、这么好的泉水是如何形成的呢？',ex_py:'Zhème duō, zhème hǎo de quánshuǐ shì rúhé xíngchéng de ne?',ex_vn:'Nước suối nhiều như thế, tốt như thế, đã hình thành ra sao?',
   exList:[
     {zh:'这么多、这么好的泉水是如何形成的呢？',py:'Zhème duō, zhème hǎo de quánshuǐ shì rúhé xíngchéng de ne?',vn:'Nước suối nhiều như thế, tốt như thế, đã hình thành ra sao?'},
     {zh:'地下水就冲出地表，形成了众多的泉水。',py:'Dìxiàshuǐ jiù chōngchū dìbiǎo, xíngchéngle zhòngduō de quánshuǐ.',vn:'Nước ngầm liền xông ra khỏi mặt đất, tạo thành vô số dòng suối.'},
     {zh:'我从小就形成了早睡早起的好习惯。',py:'Wǒ cóngxiǎo jiù xíngchéngle zǎo shuì zǎo qǐ de hǎo xíguàn.',vn:'Từ nhỏ tôi đã hình thành thói quen tốt ngủ sớm dậy sớm.'}
   ],
   colloFull:[
     {zh:'逐渐形成',py:'zhújiàn xíngchéng',vn:'dần dần hình thành'},
     {zh:'自然形成',py:'zìrán xíngchéng',vn:'hình thành tự nhiên'},
     {zh:'形成习惯',py:'xíngchéng xíguàn',vn:'hình thành thói quen'},
     {zh:'是如何形成的',py:'shì rúhé xíngchéng de',vn:'đã hình thành ra sao'},
     {zh:'形成对比',py:'xíngchéng duìbǐ',vn:'tạo thành sự đối lập'}
   ],
   patterns:[
     {s:'逐渐 / 自然 + 形成',m:'Dần dần / tự nhiên hình thành'},
     {s:'……是如何形成的？',m:'… hình thành như thế nào? (ôn 如何 bài 1)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thói quen tốt này là tôi hình thành từ hồi tiểu học.',answer:'这个好习惯是我上小学时形成的。',answerPy:'Zhège hǎo xíguàn shì wǒ shàng xiǎoxué shí xíngchéng de.',
      note:'形成 + 习惯; 是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần kiên trì hai mươi mốt ngày là có thể hình thành một thói quen mới.',answer:'只要坚持二十一天，就能形成一个新习惯。',answerPy:'Zhǐyào jiānchí èrshíyī tiān, jiù néng xíngchéng yí ge xīn xíguàn.',
      note:'形成 đi với danh từ trừu tượng 习惯.',pair:'只要……就……'}
   ]},

  {n:32,zh:'于',py:'yú',pos:'Giới từ',vn:'ở, tại, từ, vào, đối với, hơn',hv:'vu',em:'📍',lesson:1,
   explain:['Giới từ của VĂN VIẾT, tương đương 在 / 从 / 对 / 向 / 比 tuỳ ngữ cảnh: chỉ thời gian, nơi chốn, phạm vi, đối tượng, so sánh. Thường đứng SAU động từ hoặc tính từ: 成立于, 来自于, 有助于, 高于.'],
   usage:'V + 于 + thời gian / nơi chốn (成立于1997年, 毕业于北京大学); 用于, 有助于, 求助于, 来自于; Adj + 于 (高于, 低于) = so sánh.',
   collo:['来自于','毕业于','有助于','高于'],
   ex_zh:'济南的泉水，来自于济南市以南的广大山区。',ex_py:'Jǐnán de quánshuǐ, láizì yú Jǐnán shì yǐ nán de guǎngdà shānqū.',ex_vn:'Nước suối Tế Nam đến từ vùng núi rộng lớn phía nam thành phố Tế Nam.',
   exList:[
     {zh:'济南的泉水，来自于济南市以南的广大山区。',py:'Jǐnán de quánshuǐ, láizì yú Jǐnán shì yǐ nán de guǎngdà shānqū.',vn:'Nước suối Tế Nam đến từ vùng núi rộng lớn phía nam thành phố Tế Nam.'},
     {zh:'这家公司成立于1997年。',py:'Zhè jiā gōngsī chénglì yú yī jiǔ jiǔ qī nián.',vn:'Công ty này được thành lập năm 1997.'},
     {zh:'运动有助于健康。',py:'Yùndòng yǒuzhù yú jiànkāng.',vn:'Vận động có ích cho sức khoẻ.'}
   ],
   colloFull:[
     {zh:'来自于',py:'láizì yú',vn:'đến từ'},
     {zh:'毕业于',py:'bìyè yú',vn:'tốt nghiệp (trường …)'},
     {zh:'有助于',py:'yǒuzhù yú',vn:'có ích cho'},
     {zh:'高于',py:'gāo yú',vn:'cao hơn'},
     {zh:'成立于',py:'chénglì yú',vn:'thành lập vào'}
   ],
   patterns:[
     {s:'V + 于 + thời gian / nơi chốn',m:'… vào lúc / tại / từ …'},
     {s:'Adj + 于 + N',m:'… hơn … (so sánh, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy tuy tốt nghiệp Đại học Bắc Kinh nhưng không hề kiêu ngạo.',answer:'他虽然毕业于北京大学，但是一点儿也不骄傲。',answerPy:'Tā suīrán bìyè yú Běijīng Dàxué, dànshì yìdiǎnr yě bù jiāo\'ào.',
      note:'毕业于 + trường: văn viết của 从……毕业.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Đọc nhiều sách không những có ích cho việc học mà còn có ích cho cuộc sống.',answer:'多读书不仅有助于学习，而且有助于生活。',answerPy:'Duō dú shū bùjǐn yǒuzhù yú xuéxí, érqiě yǒuzhù yú shēnghuó.',
      note:'有助于 + N = có ích cho …',pair:'不仅……而且……'}
   ]},

  {n:33,zh:'广大',py:'guǎngdà',pos:'Tính từ',vn:'rộng lớn; đông đảo',hv:'quảng đại',em:'🌄',lesson:1,
   explain:['Rộng lớn về diện tích (广大山区, 广大农村); đứng trước danh từ chỉ người thì nghĩa là ĐÔNG ĐẢO (广大观众, 广大学生).'],
   usage:'广大(的) + 山区/农村/地区; 广大 + 观众/读者/学生 (không cần 的).',
   collo:['广大山区','广大的农村','广大观众','广大地区'],
   ex_zh:'这个节目受到了广大观众的欢迎。',ex_py:'Zhège jiémù shòudàole guǎngdà guānzhòng de huānyíng.',ex_vn:'Chương trình này được đông đảo khán giả yêu thích.',
   exList:[
     {zh:'这个节目受到了广大观众的欢迎。',py:'Zhège jiémù shòudàole guǎngdà guānzhòng de huānyíng.',vn:'Chương trình này được đông đảo khán giả yêu thích.'},
     {zh:'济南的泉水来自于济南市以南的广大山区。',py:'Jǐnán de quánshuǐ láizì yú Jǐnán shì yǐ nán de guǎngdà shānqū.',vn:'Nước suối Tế Nam đến từ vùng núi rộng lớn phía nam thành phố.'},
     {zh:'他大学毕业后，回到了广大的农村。',py:'Tā dàxué bìyè hòu, huídàole guǎngdà de nóngcūn.',vn:'Tốt nghiệp đại học, anh ấy trở về vùng nông thôn rộng lớn.'}
   ],
   colloFull:[
     {zh:'广大山区',py:'guǎngdà shānqū',vn:'vùng núi rộng lớn'},
     {zh:'广大的农村',py:'guǎngdà de nóngcūn',vn:'vùng nông thôn rộng lớn'},
     {zh:'广大观众',py:'guǎngdà guānzhòng',vn:'đông đảo khán giả'},
     {zh:'广大地区',py:'guǎngdà dìqū',vn:'khu vực rộng lớn'},
     {zh:'广大学生',py:'guǎngdà xuésheng',vn:'đông đảo học sinh'}
   ],
   patterns:[
     {s:'广大(的) + 山区 / 农村 / 地区',m:'Vùng … rộng lớn'},
     {s:'广大 + 观众 / 读者 / 学生',m:'Đông đảo khán giả / độc giả / học sinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoạt động này ngay cả đông đảo phụ huynh cũng rất ủng hộ.',answer:'这个活动连广大家长都很支持。',answerPy:'Zhège huódòng lián guǎngdà jiāzhǎng dōu hěn zhīchí.',
      note:'广大 + danh từ chỉ người = đông đảo ….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chương trình này càng ngày càng được đông đảo khán giả yêu thích.',answer:'这个节目越来越受广大观众的欢迎了。',answerPy:'Zhège jiémù yuè lái yuè shòu guǎngdà guānzhòng de huānyíng le.',
      note:'受……的欢迎: được … yêu thích.',pair:'越来越……'}
   ]},

  {n:34,zh:'岩石',py:'yánshí',pos:'Danh từ',vn:'đá, nham thạch',hv:'nham thạch',em:'🪨',lesson:1,
   explain:['Đá, khối đá tạo nên vỏ trái đất — từ dùng trong khoa học, địa lý. Khẩu ngữ hằng ngày thường dùng 石头.'],
   usage:'一块岩石, 地下岩石, 岩石层.',
   collo:['一块岩石','地下岩石','岩石层'],
   ex_zh:'这些山区的岩石是大约四亿年前形成的一层厚厚的石灰岩。',ex_py:'Zhèxiē shānqū de yánshí shì dàyuē sìyì nián qián xíngchéng de yì céng hòuhòu de shíhuīyán.',ex_vn:'Đá ở những vùng núi này là một lớp đá vôi dày hình thành khoảng bốn trăm triệu năm trước.',
   exList:[
     {zh:'这些山区的岩石是大约四亿年前形成的一层厚厚的石灰岩。',py:'Zhèxiē shānqū de yánshí shì dàyuē sìyì nián qián xíngchéng de yì céng hòuhòu de shíhuīyán.',vn:'Đá ở những vùng núi này là một lớp đá vôi dày hình thành khoảng bốn trăm triệu năm trước.'},
     {zh:'济南市区的地下岩石变为了火成岩。',py:'Jǐnán shìqū de dìxià yánshí biànwéile huǒchéngyán.',vn:'Đá dưới lòng đất nội thành Tế Nam đã biến thành đá mác-ma.'},
     {zh:'海边有很多形状奇特的岩石。',py:'Hǎi biān yǒu hěn duō xíngzhuàng qítè de yánshí.',vn:'Bờ biển có rất nhiều tảng đá hình thù kỳ lạ.'}
   ],
   colloFull:[
     {zh:'一块岩石',py:'yí kuài yánshí',vn:'một tảng đá'},
     {zh:'地下岩石',py:'dìxià yánshí',vn:'đá dưới lòng đất'},
     {zh:'岩石层',py:'yánshícéng',vn:'tầng đá'},
     {zh:'坚硬的岩石',py:'jiānyìng de yánshí',vn:'đá cứng'}
   ],
   patterns:[
     {s:'一块 + 岩石',m:'Lượng từ của 岩石 là 块'},
     {s:'岩石 (khoa học) ≈ 石头 (khẩu ngữ)',m:'Hai từ cùng nghĩa, khác ngữ thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tảng đá này hình thành từ mấy triệu năm trước.',answer:'这块岩石是几百万年前形成的。',answerPy:'Zhè kuài yánshí shì jǐ bǎi wàn nián qián xíngchéng de.',
      note:'岩石 + 形成: hai từ cùng bài; 是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Những tảng đá này đã bị nước biển đánh cho nhẵn bóng.',answer:'这些岩石被海水冲得很光滑。',answerPy:'Zhèxiē yánshí bèi hǎishuǐ chōng de hěn guānghuá.',
      note:'被 + tác nhân + V + 得 + bổ ngữ trạng thái; 冲 cũng là từ của bài.',pair:'被'}
   ]},

  {n:35,zh:'亿',py:'yì',pos:'Số từ',vn:'một trăm triệu',hv:'ức',em:'🔢',lesson:1,
   explain:['Một trăm triệu (100.000.000 = 一亿). Tiếng Trung đếm theo 万 (vạn) và 亿 (ức): 一万万 = 一亿. Chú ý quy đổi: 十亿 = 1 tỷ, 十四亿 = 1,4 tỷ.'],
   usage:'四亿年, 十四亿人, 几亿; 亿 đứng ngay sau số từ.',
   collo:['四亿年前','十四亿人','几亿'],
   ex_zh:'这些山区的岩石是大约四亿年前形成的。',ex_py:'Zhèxiē shānqū de yánshí shì dàyuē sìyì nián qián xíngchéng de.',ex_vn:'Đá ở những vùng núi này hình thành khoảng bốn trăm triệu năm trước.',
   exList:[
     {zh:'这些山区的岩石是大约四亿年前形成的。',py:'Zhèxiē shānqū de yánshí shì dàyuē sìyì nián qián xíngchéng de.',vn:'Đá ở những vùng núi này hình thành khoảng bốn trăm triệu năm trước.'},
     {zh:'中国有十四亿多人口。',py:'Zhōngguó yǒu shísì yì duō rénkǒu.',vn:'Trung Quốc có hơn 1,4 tỷ dân.'},
     {zh:'越南大约有一亿人口。',py:'Yuènán dàyuē yǒu yí yì rénkǒu.',vn:'Việt Nam có khoảng một trăm triệu dân.'}
   ],
   colloFull:[
     {zh:'四亿年前',py:'sìyì nián qián',vn:'bốn trăm triệu năm trước'},
     {zh:'十四亿人',py:'shísì yì rén',vn:'1,4 tỷ người'},
     {zh:'几亿',py:'jǐ yì',vn:'vài trăm triệu'},
     {zh:'一亿人口',py:'yí yì rénkǒu',vn:'một trăm triệu dân'}
   ],
   patterns:[
     {s:'Số + 亿',m:'… trăm triệu (十亿 = 1 tỷ)'},
     {s:'一万万 = 一亿',m:'Mười nghìn vạn = một ức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dân số Việt Nam càng ngày càng đông, đã vượt quá một trăm triệu rồi.',answer:'越南的人口越来越多，已经超过一亿了。',answerPy:'Yuènán de rénkǒu yuè lái yuè duō, yǐjīng chāoguò yí yì le.',
      note:'一亿 = 100 triệu; 一 trước 亿 (thanh 4) đọc yí.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Ngay cả người lớn cũng khó tưởng tượng bốn trăm triệu năm dài bao lâu.',answer:'连大人都很难想象四亿年有多长。',answerPy:'Lián dàrén dōu hěn nán xiǎngxiàng sìyì nián yǒu duō cháng.',
      note:'四亿 = 400 triệu; 有多长 = dài bao lâu.',pair:'连……都……'}
   ]},

  {n:36,zh:'石灰岩',py:'shíhuīyán',pos:'Danh từ',vn:'đá vôi',hv:'thạch hôi nham',em:'⛰️',lesson:1,
   explain:['Đá vôi — loại đá nhiều khe nứt nên nước trên mặt đất dễ thấm xuống lòng đất. Các vùng núi đá vôi nổi tiếng ở Việt Nam: Hạ Long, Ninh Bình, Phong Nha.'],
   usage:'一层石灰岩, 石灰岩地区, 石灰岩层.',
   collo:['一层石灰岩','石灰岩地区','石灰岩层'],
   ex_zh:'在这种石灰岩地区，陆地表面的水很容易进入地下。',ex_py:'Zài zhè zhǒng shíhuīyán dìqū, lùdì biǎomiàn de shuǐ hěn róngyì jìnrù dìxià.',ex_vn:'Ở vùng đá vôi như thế này, nước trên bề mặt đất liền rất dễ thấm xuống lòng đất.',
   exList:[
     {zh:'在这种石灰岩地区，陆地表面的水很容易进入地下。',py:'Zài zhè zhǒng shíhuīyán dìqū, lùdì biǎomiàn de shuǐ hěn róngyì jìnrù dìxià.',vn:'Ở vùng đá vôi như thế này, nước trên bề mặt đất liền rất dễ thấm xuống lòng đất.'},
     {zh:'山区的石灰岩层，以大约三十度的角度，由南向北斜。',py:'Shānqū de shíhuīyán céng, yǐ dàyuē sānshí dù de jiǎodù, yóu nán xiàng běi xié.',vn:'Tầng đá vôi ở vùng núi nghiêng từ nam sang bắc một góc khoảng ba mươi độ.'},
     {zh:'下龙湾的岛大多是石灰岩形成的。',py:'Xiàlóng Wān de dǎo dàduō shì shíhuīyán xíngchéng de.',vn:'Các đảo ở vịnh Hạ Long phần lớn do đá vôi tạo thành.'}
   ],
   colloFull:[
     {zh:'一层石灰岩',py:'yì céng shíhuīyán',vn:'một lớp đá vôi'},
     {zh:'石灰岩地区',py:'shíhuīyán dìqū',vn:'vùng đá vôi'},
     {zh:'石灰岩层',py:'shíhuīyán céng',vn:'tầng đá vôi'},
     {zh:'厚厚的石灰岩',py:'hòuhòu de shíhuīyán',vn:'lớp đá vôi dày'}
   ],
   patterns:[
     {s:'一层 + 石灰岩',m:'Lượng từ 层 (lớp, tầng)'},
     {s:'石灰岩 + 地区 / 层',m:'Vùng / tầng đá vôi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở vùng đá vôi, nước mưa vừa rơi xuống là thấm ngay vào lòng đất.',answer:'在石灰岩地区，雨水一落下来就进入地下了。',answerPy:'Zài shíhuīyán dìqū, yǔshuǐ yí luò xiàlai jiù jìnrù dìxià le.',
      note:'石灰岩地区 = vùng đá vôi; 一……就…… diễn tả việc xảy ra liền ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Những hang động này là hình thành trong đá vôi.',answer:'这些山洞是在石灰岩里形成的。',answerPy:'Zhèxiē shāndòng shì zài shíhuīyán li xíngchéng de.',
      note:'是……的 nhấn mạnh nơi chốn: 是在……形成的.',pair:'是……的'}
   ]},

  {n:37,zh:'地区',py:'dìqū',pos:'Danh từ',vn:'khu vực, vùng',hv:'địa khu',em:'🗾',lesson:1,
   explain:['Một vùng đất có phạm vi nhất định: vùng núi, vùng ven biển, khu vực phía Bắc…'],
   usage:'沿海地区, 北方地区, 这个地区, 石灰岩地区.',
   collo:['石灰岩地区','沿海地区','这个地区','北方地区'],
   ex_zh:'这个地区一年四季都很温暖。',ex_py:'Zhège dìqū yì nián sì jì dōu hěn wēnnuǎn.',ex_vn:'Vùng này bốn mùa trong năm đều ấm áp.',
   exList:[
     {zh:'这个地区一年四季都很温暖。',py:'Zhège dìqū yì nián sì jì dōu hěn wēnnuǎn.',vn:'Vùng này bốn mùa trong năm đều ấm áp.'},
     {zh:'在这种石灰岩地区，陆地表面的水很容易进入地下。',py:'Zài zhè zhǒng shíhuīyán dìqū, lùdì biǎomiàn de shuǐ hěn róngyì jìnrù dìxià.',vn:'Ở vùng đá vôi như thế này, nước trên bề mặt đất liền rất dễ thấm xuống lòng đất.'},
     {zh:'沿海地区的经济发展得比较快。',py:'Yánhǎi dìqū de jīngjì fāzhǎn de bǐjiào kuài.',vn:'Kinh tế vùng ven biển phát triển tương đối nhanh.'}
   ],
   colloFull:[
     {zh:'石灰岩地区',py:'shíhuīyán dìqū',vn:'vùng đá vôi'},
     {zh:'沿海地区',py:'yánhǎi dìqū',vn:'vùng ven biển'},
     {zh:'这个地区',py:'zhège dìqū',vn:'khu vực này'},
     {zh:'北方地区',py:'běifāng dìqū',vn:'khu vực phía Bắc'},
     {zh:'缺水地区',py:'quē shuǐ dìqū',vn:'vùng thiếu nước'}
   ],
   patterns:[
     {s:'Tính chất / phương hướng + 地区',m:'Vùng … (沿海地区, 北方地区)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa đông ở vùng này không những lạnh mà còn rất khô.',answer:'这个地区的冬天不仅冷，而且很干。',answerPy:'Zhège dìqū de dōngtiān bùjǐn lěng, érqiě hěn gān.',
      note:'这个地区的 + danh từ làm chủ ngữ.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Vùng này tuy rất xa nhưng phong cảnh vô cùng đẹp.',answer:'这个地区虽然很远，但是风景非常优美。',answerPy:'Zhège dìqū suīrán hěn yuǎn, dànshì fēngjǐng fēicháng yōuměi.',
      note:'风景优美 — kết hợp của từ 优美 cùng bài.',pair:'虽然……但是……'}
   ]},

  {n:38,zh:'表面',py:'biǎomiàn',pos:'Danh từ',vn:'bề mặt, bề ngoài',hv:'biểu diện',em:'🌊',lesson:1,
   explain:['Mặt ngoài của vật (陆地表面, 地球表面).','Nghĩa bóng: vẻ bề ngoài, trái với bản chất bên trong (表面上……，其实……).'],
   usage:'陆地表面, 地球表面; 表面上……，其实…….',
   collo:['陆地表面','地球表面','表面上'],
   ex_zh:'地球表面大约百分之七十是水。',ex_py:'Dìqiú biǎomiàn dàyuē bǎi fēn zhī qīshí shì shuǐ.',ex_vn:'Khoảng bảy mươi phần trăm bề mặt Trái Đất là nước.',
   exList:[
     {zh:'地球表面大约百分之七十是水。',py:'Dìqiú biǎomiàn dàyuē bǎi fēn zhī qīshí shì shuǐ.',vn:'Khoảng bảy mươi phần trăm bề mặt Trái Đất là nước.'},
     {zh:'在这种石灰岩地区，陆地表面的水很容易进入地下。',py:'Zài zhè zhǒng shíhuīyán dìqū, lùdì biǎomiàn de shuǐ hěn róngyì jìnrù dìxià.',vn:'Ở vùng đá vôi như thế này, nước trên bề mặt đất liền rất dễ thấm xuống lòng đất.'},
     {zh:'他表面上很平静，其实心里非常紧张。',py:'Tā biǎomiàn shang hěn píngjìng, qíshí xīnli fēicháng jǐnzhāng.',vn:'Bề ngoài anh ấy rất bình tĩnh, thực ra trong lòng vô cùng căng thẳng.'}
   ],
   colloFull:[
     {zh:'陆地表面',py:'lùdì biǎomiàn',vn:'bề mặt đất liền'},
     {zh:'地球表面',py:'dìqiú biǎomiàn',vn:'bề mặt Trái Đất'},
     {zh:'表面上',py:'biǎomiàn shang',vn:'bề ngoài thì'},
     {zh:'水的表面',py:'shuǐ de biǎomiàn',vn:'mặt nước'}
   ],
   patterns:[
     {s:'N + (的) + 表面',m:'Bề mặt của …'},
     {s:'表面上……，其实……',m:'Bề ngoài …, thực ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy tuy bề ngoài không nói gì nhưng thực ra rất quan tâm đến bạn.',answer:'他虽然表面上什么也不说，但是其实很关心你。',answerPy:'Tā suīrán biǎomiàn shang shénme yě bù shuō, dànshì qíshí hěn guānxīn nǐ.',
      note:'表面上 (bề ngoài) đối lập với 其实 (thực ra).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Mặt bàn bị em gái vẽ bẩn hết rồi.',answer:'桌子的表面被妹妹画脏了。',answerPy:'Zhuōzi de biǎomiàn bèi mèimei huàzāng le.',
      note:'表面 = mặt ngoài của vật.',pair:'被'}
   ]},

  {n:39,zh:'角度',py:'jiǎodù',pos:'Danh từ',vn:'góc, độ của góc; góc độ',hv:'giác độ',em:'📐',lesson:1,
   explain:['Độ lớn của một góc (三十度的角度).','Nghĩa bóng: góc nhìn, cách nhìn nhận vấn đề (换一个角度考虑, 从……的角度看).'],
   usage:'以……度的角度; 从……的角度 + 看/考虑; 换一个角度.',
   collo:['三十度的角度','换一个角度','从……的角度看'],
   ex_zh:'换一个角度考虑，也许正好就能发现问题的关键。',ex_py:'Huàn yí ge jiǎodù kǎolǜ, yěxǔ zhènghǎo jiù néng fāxiàn wèntí de guānjiàn.',ex_vn:'Suy nghĩ từ một góc độ khác, có lẽ vừa hay sẽ phát hiện ra mấu chốt của vấn đề.',
   exList:[
     {zh:'换一个角度考虑，也许正好就能发现问题的关键。',py:'Huàn yí ge jiǎodù kǎolǜ, yěxǔ zhènghǎo jiù néng fāxiàn wèntí de guānjiàn.',vn:'Suy nghĩ từ một góc độ khác, có lẽ vừa hay sẽ phát hiện ra mấu chốt của vấn đề.'},
     {zh:'山区的石灰岩层，以大约三十度的角度，由南向北斜。',py:'Shānqū de shíhuīyán céng, yǐ dàyuē sānshí dù de jiǎodù, yóu nán xiàng běi xié.',vn:'Tầng đá vôi ở vùng núi nghiêng từ nam sang bắc một góc khoảng ba mươi độ.'},
     {zh:'从父母的角度看，他们只是希望你安全。',py:'Cóng fùmǔ de jiǎodù kàn, tāmen zhǐshì xīwàng nǐ ānquán.',vn:'Nhìn từ góc độ của bố mẹ, họ chỉ mong con được an toàn.'}
   ],
   colloFull:[
     {zh:'三十度的角度',py:'sānshí dù de jiǎodù',vn:'góc ba mươi độ'},
     {zh:'换一个角度',py:'huàn yí ge jiǎodù',vn:'đổi một góc độ'},
     {zh:'从……的角度看',py:'cóng…… de jiǎodù kàn',vn:'nhìn từ góc độ …'},
     {zh:'不同的角度',py:'bùtóng de jiǎodù',vn:'những góc độ khác nhau'}
   ],
   patterns:[
     {s:'以 + số + 度的角度 + V',m:'Theo một góc … độ'},
     {s:'从 + người / N + 的角度 + 看 / 考虑',m:'Nhìn / cân nhắc từ góc độ của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần đổi một góc độ suy nghĩ là bạn sẽ thấy vấn đề không khó như vậy.',answer:'只要换一个角度想，你就会发现问题没那么难。',answerPy:'Zhǐyào huàn yí ge jiǎodù xiǎng, nǐ jiù huì fāxiàn wèntí méi nàme nán.',
      note:'换一个角度 + 想/考虑: nghĩa bóng của 角度.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Bức ảnh này là chụp từ góc độ này.',answer:'这张照片是从这个角度拍的。',answerPy:'Zhè zhāng zhàopiàn shì cóng zhège jiǎodù pāi de.',
      note:'从 + 角度 + 拍; 是……的 nhấn mạnh cách thức.',pair:'是……的'}
   ]},

  {n:40,zh:'斜',py:'xié',pos:'Tính từ',vn:'xiên, nghiêng',hv:'tà',em:'↗️',lesson:1,
   explain:['Nghiêng, lệch, không thẳng đứng cũng không nằm ngang. Cũng dùng như động từ: nghiêng về một phía (由南向北斜).'],
   usage:'由……向……斜; 斜着 + V; V + 得 + (有点儿)斜; 挂斜了.',
   collo:['由南向北斜','斜着','有点儿斜'],
   ex_zh:'这幅画挂得有点儿斜，你帮我扶正吧。',ex_py:'Zhè fú huà guà de yǒudiǎnr xié, nǐ bāng wǒ fúzhèng ba.',ex_vn:'Bức tranh này treo hơi lệch, bạn giúp tôi chỉnh lại cho thẳng nhé.',
   exList:[
     {zh:'这幅画挂得有点儿斜，你帮我扶正吧。',py:'Zhè fú huà guà de yǒudiǎnr xié, nǐ bāng wǒ fúzhèng ba.',vn:'Bức tranh này treo hơi lệch, bạn giúp tôi chỉnh lại cho thẳng nhé.'},
     {zh:'山区的石灰岩层，以大约三十度的角度，由南向北斜。',py:'Shānqū de shíhuīyán céng, yǐ dàyuē sānshí dù de jiǎodù, yóu nán xiàng běi xié.',vn:'Tầng đá vôi ở vùng núi nghiêng từ nam sang bắc một góc khoảng ba mươi độ.'},
     {zh:'他斜着身子坐在椅子上看手机。',py:'Tā xiézhe shēnzi zuò zài yǐzi shang kàn shǒujī.',vn:'Cậu ấy ngồi nghiêng người trên ghế xem điện thoại.'}
   ],
   colloFull:[
     {zh:'由南向北斜',py:'yóu nán xiàng běi xié',vn:'nghiêng từ nam sang bắc'},
     {zh:'斜着',py:'xiézhe',vn:'nghiêng, xiên'},
     {zh:'有点儿斜',py:'yǒudiǎnr xié',vn:'hơi lệch'},
     {zh:'挂斜了',py:'guàxié le',vn:'treo lệch rồi'}
   ],
   patterns:[
     {s:'由 + A + 向 + B + 斜',m:'Nghiêng từ A về phía B'},
     {s:'V + 得 + (有点儿) + 斜',m:'… bị lệch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức tranh bị em trai treo lệch rồi.',answer:'这幅画被弟弟挂斜了。',answerPy:'Zhè fú huà bèi dìdi guàxié le.',
      note:'斜 làm bổ ngữ kết quả: 挂斜 = treo lệch.',pair:'被'},
     {promptLang:'vi',prompt:'Anh ấy dựng tấm bảng nghiêng tựa vào tường.',answer:'他把黑板斜着靠在墙上。',answerPy:'Tā bǎ hēibǎn xiézhe kào zài qiáng shang.',
      note:'斜着 chỉ tư thế; 靠在……上 ôn từ bài 1.',pair:'把'}
   ]},

  {n:41,zh:'为',py:'wéi',pos:'Động từ',vn:'thành, trở thành; làm, là',hv:'vi',em:'🔄',lesson:1,
   explain:['Động từ, nghĩa "thành, trở thành": thường đứng sau động từ khác làm bổ ngữ (变为, 改为, 选为).','Cũng có nghĩa "làm, coi là" trong 以 A 为 B (lấy A làm B), 称 A 为 B (gọi A là B). Đọc wéi — khác 为 wèi (vì, cho).'],
   usage:'变为 / 改为 / 选为 + N; 以 A 为 B; 称 A 为 B.',
   collo:['变为','改为','以……为……','称……为……'],
   ex_zh:'而济南市区的地下岩石变为了火成岩。',ex_py:'Ér Jǐnán shìqū de dìxià yánshí biànwéile huǒchéngyán.',ex_vn:'Còn đá dưới lòng đất nội thành Tế Nam đã biến thành đá mác-ma.',
   exList:[
     {zh:'而济南市区的地下岩石变为了火成岩。',py:'Ér Jǐnán shìqū de dìxià yánshí biànwéile huǒchéngyán.',vn:'Còn đá dưới lòng đất nội thành Tế Nam đã biến thành đá mác-ma.'},
     {zh:'每个人都会遇到各种压力，可是，压力也可以变为动力。',py:'Měi ge rén dōu huì yùdào gè zhǒng yālì, kěshì, yālì yě kěyǐ biànwéi dònglì.',vn:'Ai cũng gặp đủ loại áp lực, nhưng áp lực cũng có thể biến thành động lực.'},
     {zh:'在他看来，没有工作的生活就不能称其为生活。',py:'Zài tā kànlái, méiyǒu gōngzuò de shēnghuó jiù bù néng chēng qí wéi shēnghuó.',vn:'Theo anh ấy, cuộc sống không có công việc thì không thể gọi là cuộc sống.'}
   ],
   colloFull:[
     {zh:'变为',py:'biànwéi',vn:'biến thành'},
     {zh:'改为',py:'gǎiwéi',vn:'đổi thành'},
     {zh:'以……为……',py:'yǐ…… wéi……',vn:'lấy … làm …'},
     {zh:'称……为……',py:'chēng…… wéi……',vn:'gọi … là …'},
     {zh:'选为',py:'xuǎnwéi',vn:'bầu làm'}
   ],
   patterns:[
     {s:'V (变 / 改 / 选 / 称) + 为 + N',m:'… thành / làm / là …'},
     {s:'以 A 为 B',m:'Lấy A làm B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy được cả lớp bầu làm lớp trưởng.',answer:'他被全班同学选为班长。',answerPy:'Tā bèi quán bān tóngxué xuǎnwéi bānzhǎng.',
      note:'选为 = bầu làm; 为 đọc wéi.',pair:'被'},
     {promptLang:'vi',prompt:'Thầy giáo đã đổi giờ thi sang thứ Sáu.',answer:'老师把考试时间改为星期五了。',answerPy:'Lǎoshī bǎ kǎoshì shíjiān gǎiwéi xīngqīwǔ le.',
      note:'把 + N + 改为 + N: đổi cái gì thành cái gì.',pair:'把'}
   ]},

  {n:42,zh:'火成岩',py:'huǒchéngyán',pos:'Danh từ',vn:'đá phun trào, đá mác-ma',hv:'hoả thành nham',em:'🌋',lesson:1,
   explain:['Đá do dung nham (mác-ma) nóng chảy nguội lại mà thành — rất cứng, nước khó thấm qua. Trong bài, lớp 火成岩 chặn đường nước ngầm nên nước dồn lại rồi phun lên thành suối.'],
   usage:'变为火成岩, 碰到火成岩, 火成岩挡住了路.',
   collo:['变为火成岩','碰到火成岩','火成岩层'],
   ex_zh:'地下水流到这里，碰到火成岩挡住了路，就积蓄起来。',ex_py:'Dìxiàshuǐ liúdào zhèli, pèngdào huǒchéngyán dǎngzhùle lù, jiù jīxù qǐlai.',ex_vn:'Nước ngầm chảy tới đây, gặp đá mác-ma chắn đường, liền tích tụ lại.',
   exList:[
     {zh:'地下水流到这里，碰到火成岩挡住了路，就积蓄起来。',py:'Dìxiàshuǐ liúdào zhèli, pèngdào huǒchéngyán dǎngzhùle lù, jiù jīxù qǐlai.',vn:'Nước ngầm chảy tới đây, gặp đá mác-ma chắn đường, liền tích tụ lại.'},
     {zh:'济南市区的地下岩石变为了火成岩。',py:'Jǐnán shìqū de dìxià yánshí biànwéile huǒchéngyán.',vn:'Đá dưới lòng đất nội thành Tế Nam đã biến thành đá mác-ma.'},
     {zh:'火成岩很硬，水很难进入。',py:'Huǒchéngyán hěn yìng, shuǐ hěn nán jìnrù.',vn:'Đá mác-ma rất cứng, nước khó thấm vào.'}
   ],
   colloFull:[
     {zh:'变为火成岩',py:'biànwéi huǒchéngyán',vn:'biến thành đá mác-ma'},
     {zh:'碰到火成岩',py:'pèngdào huǒchéngyán',vn:'gặp phải đá mác-ma'},
     {zh:'火成岩层',py:'huǒchéngyán céng',vn:'tầng đá mác-ma'},
     {zh:'坚硬的火成岩',py:'jiānyìng de huǒchéngyán',vn:'đá mác-ma cứng'}
   ],
   patterns:[
     {s:'火 + 成 + 岩',m:'Đá do lửa (mác-ma nóng chảy) tạo thành'},
     {s:'石灰岩 (nước thấm qua) ≠ 火成岩 (chặn nước)',m:'Hai loại đá trong bài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước ngầm vừa gặp đá mác-ma là bị chặn lại.',answer:'地下水一碰到火成岩就被挡住了。',answerPy:'Dìxiàshuǐ yí pèngdào huǒchéngyán jiù bèi dǎngzhù le.',
      note:'碰到, 挡住, 火成岩 — ba từ cùng bài trong một câu.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đá mác-ma không những rất cứng mà nước cũng không thấm vào được.',answer:'火成岩不仅很硬，而且水也进不去。',answerPy:'Huǒchéngyán bùjǐn hěn yìng, érqiě shuǐ yě jìn bu qù.',
      note:'进不去 = bổ ngữ khả năng dạng phủ định.',pair:'不仅……而且……'}
   ]},

  {n:43,zh:'碰',py:'pèng',pos:'Động từ',vn:'đụng, chạm; gặp phải',hv:'bính',em:'💥',lesson:1,
   explain:['Va, chạm vào (碰到桌子); cũng có nghĩa tình cờ gặp (碰见老同学, 碰到问题).'],
   usage:'碰到, 碰见, 碰上, 碰倒, 碰伤; 别碰! (đừng động vào).',
   collo:['碰到','碰见','碰上','碰倒'],
   ex_zh:'我昨天在超市碰见了小学同学。',ex_py:'Wǒ zuótiān zài chāoshì pèngjiànle xiǎoxué tóngxué.',ex_vn:'Hôm qua tôi tình cờ gặp bạn tiểu học ở siêu thị.',
   exList:[
     {zh:'我昨天在超市碰见了小学同学。',py:'Wǒ zuótiān zài chāoshì pèngjiànle xiǎoxué tóngxué.',vn:'Hôm qua tôi tình cờ gặp bạn tiểu học ở siêu thị.'},
     {zh:'地下水流到这里，碰到火成岩挡住了路，就积蓄起来。',py:'Dìxiàshuǐ liúdào zhèli, pèngdào huǒchéngyán dǎngzhùle lù, jiù jīxù qǐlai.',vn:'Nước ngầm chảy tới đây, gặp đá mác-ma chắn đường, liền tích tụ lại.'},
     {zh:'小心，别把桌上的杯子碰倒了。',py:'Xiǎoxīn, bié bǎ zhuō shang de bēizi pèngdǎo le.',vn:'Cẩn thận, đừng làm đổ cái cốc trên bàn.'}
   ],
   colloFull:[
     {zh:'碰到',py:'pèngdào',vn:'đụng phải, gặp phải'},
     {zh:'碰见',py:'pèngjiàn',vn:'tình cờ gặp'},
     {zh:'碰上',py:'pèngshang',vn:'gặp phải'},
     {zh:'碰倒',py:'pèngdǎo',vn:'làm đổ'},
     {zh:'碰伤',py:'pèngshāng',vn:'va bị thương'}
   ],
   patterns:[
     {s:'碰 + 到 / 见 / 上',m:'Gặp phải, tình cờ gặp'},
     {s:'把 + N + 碰 + 倒 / 伤',m:'Va làm đổ / làm bị thương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cốc bị con mèo làm đổ rồi.',answer:'杯子被猫碰倒了。',answerPy:'Bēizi bèi māo pèngdǎo le.',
      note:'碰倒 = va làm đổ.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi vừa ra khỏi nhà là gặp ngay cô chủ nhiệm.',answer:'我一出门就碰见了班主任。',answerPy:'Wǒ yì chūmén jiù pèngjiànle bānzhǔrèn.',
      note:'碰见 = tình cờ gặp (không hẹn trước).',pair:'一……就……'}
   ]},

  {n:44,zh:'挡',py:'dǎng',pos:'Động từ',vn:'chặn, cản; che',hv:'đáng',em:'🚧',lesson:1,
   explain:['Chặn, cản lại không cho đi qua (挡住路); che chắn (挡风, 挡太阳).'],
   usage:'挡住 + 路/视线/光; 挡风, 挡雨; 被……挡住.',
   collo:['挡住了路','挡风','被……挡住'],
   ex_zh:'前面的人太高了，挡住了我的视线。',ex_py:'Qiánmiàn de rén tài gāo le, dǎngzhùle wǒ de shìxiàn.',ex_vn:'Người phía trước cao quá, che mất tầm nhìn của tôi.',
   exList:[
     {zh:'前面的人太高了，挡住了我的视线。',py:'Qiánmiàn de rén tài gāo le, dǎngzhùle wǒ de shìxiàn.',vn:'Người phía trước cao quá, che mất tầm nhìn của tôi.'},
     {zh:'地下水碰到火成岩挡住了路，就积蓄起来。',py:'Dìxiàshuǐ pèngdào huǒchéngyán dǎngzhùle lù, jiù jīxù qǐlai.',vn:'Nước ngầm gặp đá mác-ma chắn đường liền tích tụ lại.'},
     {zh:'妈妈用身体为孩子挡住了风雨。',py:'Māma yòng shēntǐ wèi háizi dǎngzhùle fēngyǔ.',vn:'Người mẹ dùng thân mình che mưa gió cho con.'}
   ],
   colloFull:[
     {zh:'挡住了路',py:'dǎngzhùle lù',vn:'chắn mất đường'},
     {zh:'挡风',py:'dǎng fēng',vn:'chắn gió'},
     {zh:'被……挡住',py:'bèi…… dǎngzhù',vn:'bị … chặn lại'},
     {zh:'挡住视线',py:'dǎngzhù shìxiàn',vn:'che tầm nhìn'},
     {zh:'挡太阳',py:'dǎng tàiyáng',vn:'che nắng'}
   ],
   patterns:[
     {s:'挡住 + 路 / 视线 / 光',m:'Chắn đường / che tầm nhìn / che ánh sáng'},
     {s:'被 + N + 挡住',m:'Bị … chặn lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đường bị một cái cây đổ chặn mất rồi.',answer:'路被一棵倒下的树挡住了。',answerPy:'Lù bèi yì kē dǎoxià de shù dǎngzhù le.',
      note:'挡住 = chặn lại (住 chỉ kết quả cố định).',pair:'被'},
     {promptLang:'vi',prompt:'Cậu ấy giơ cặp sách lên che nắng.',answer:'他把书包举起来挡太阳。',answerPy:'Tā bǎ shūbāo jǔ qǐlai dǎng tàiyáng.',
      note:'挡 + 太阳 / 风 / 雨: che nắng / chắn gió / che mưa.',pair:'把'}
   ]},

  {n:45,zh:'地势',py:'dìshì',pos:'Danh từ',vn:'địa thế',hv:'địa thế',em:'🏞️',lesson:1,
   explain:['Độ cao thấp, dốc hay bằng của mặt đất ở một vùng (地势高 / 地势低 / 地势平坦).'],
   usage:'地势 + 高/低/平坦/险要; 地势低的地方.',
   collo:['地势低','地势高','地势平坦'],
   ex_zh:'越南的地势西北高，东南低。',ex_py:'Yuènán de dìshì xīběi gāo, dōngnán dī.',ex_vn:'Địa thế Việt Nam cao ở tây bắc, thấp ở đông nam.',
   exList:[
     {zh:'越南的地势西北高，东南低。',py:'Yuènán de dìshì xīběi gāo, dōngnán dī.',vn:'Địa thế Việt Nam cao ở tây bắc, thấp ở đông nam.'},
     {zh:'济南旧城一带，地势低，有的地方甚至低过了地下水的水面。',py:'Jǐnán jiùchéng yídài, dìshì dī, yǒu de dìfang shènzhì dīguòle dìxiàshuǐ de shuǐmiàn.',vn:'Khu phố cổ Tế Nam địa thế thấp, có chỗ thậm chí thấp hơn cả mặt nước ngầm.'},
     {zh:'这里地势平坦，很适合骑自行车。',py:'Zhèli dìshì píngtǎn, hěn shìhé qí zìxíngchē.',vn:'Nơi đây địa thế bằng phẳng, rất hợp để đạp xe.'}
   ],
   colloFull:[
     {zh:'地势低',py:'dìshì dī',vn:'địa thế thấp'},
     {zh:'地势高',py:'dìshì gāo',vn:'địa thế cao'},
     {zh:'地势平坦',py:'dìshì píngtǎn',vn:'địa thế bằng phẳng'},
     {zh:'地势险要',py:'dìshì xiǎnyào',vn:'địa thế hiểm yếu'}
   ],
   patterns:[
     {s:'地势 + 高 / 低 / 平坦',m:'Địa thế cao / thấp / bằng phẳng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỗ này địa thế thấp, trời vừa mưa là đọng nước.',answer:'这里地势低，一下雨就积水。',answerPy:'Zhèli dìshì dī, yí xià yǔ jiù jīshuǐ.',
      note:'地势低 làm vị ngữ; 一下雨就…… = hễ mưa là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Địa thế ở đây tuy rất cao nhưng đi lên không hề khó.',answer:'这里的地势虽然很高，但是上去并不难。',answerPy:'Zhèli de dìshì suīrán hěn gāo, dànshì shàngqu bìng bù nán.',
      note:'并不 nhấn mạnh phủ định: không hề.',pair:'虽然……但是……'}
   ]},

  {n:46,zh:'冲',py:'chōng',pos:'Động từ',vn:'xông lên, lao ra; dội (nước)',hv:'xung',em:'💨',lesson:1,
   explain:['Xông thẳng, lao mạnh về phía trước hoặc lên trên (冲出地表, 冲进教室); nước chảy mạnh cuốn đi (被水冲走).','Còn nghĩa dội, xả nước (冲厕所). Chú ý: 冲 chòng (冲着 = hướng về) là cách đọc khác.'],
   usage:'冲出 / 冲进 / 冲上 + nơi chốn; 被水冲走.',
   collo:['冲出地表','冲进','冲上去','被水冲走'],
   ex_zh:'下课铃一响，同学们就冲出了教室。',ex_py:'Xiàkè líng yì xiǎng, tóngxuémen jiù chōngchūle jiàoshì.',ex_vn:'Chuông tan học vừa reo, các bạn đã lao ra khỏi lớp.',
   exList:[
     {zh:'下课铃一响，同学们就冲出了教室。',py:'Xiàkè líng yì xiǎng, tóngxuémen jiù chōngchūle jiàoshì.',vn:'Chuông tan học vừa reo, các bạn đã lao ra khỏi lớp.'},
     {zh:'地下水就冲出地表，形成了众多的泉水。',py:'Dìxiàshuǐ jiù chōngchū dìbiǎo, xíngchéngle zhòngduō de quánshuǐ.',vn:'Nước ngầm liền xông lên khỏi mặt đất, tạo thành vô số dòng suối.'},
     {zh:'大雨把路边的小车都冲走了。',py:'Dàyǔ bǎ lù biān de xiǎo chē dōu chōngzǒu le.',vn:'Mưa lớn cuốn trôi cả những chiếc xe nhỏ bên đường.'}
   ],
   colloFull:[
     {zh:'冲出地表',py:'chōngchū dìbiǎo',vn:'xông lên khỏi mặt đất'},
     {zh:'冲进',py:'chōngjìn',vn:'lao vào'},
     {zh:'冲上去',py:'chōng shàngqu',vn:'xông lên'},
     {zh:'被水冲走',py:'bèi shuǐ chōngzǒu',vn:'bị nước cuốn trôi'},
     {zh:'冲出教室',py:'chōngchū jiàoshì',vn:'lao ra khỏi lớp'}
   ],
   patterns:[
     {s:'冲 + 出 / 进 / 上 + nơi chốn',m:'Lao ra / lao vào / xông lên …'},
     {s:'被 + 水 + 冲走',m:'Bị nước cuốn trôi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây cầu nhỏ đã bị nước lũ cuốn trôi.',answer:'小桥被大水冲走了。',answerPy:'Xiǎo qiáo bèi dàshuǐ chōngzǒu le.',
      note:'冲走 = cuốn trôi đi.',pair:'被'},
     {promptLang:'vi',prompt:'Em trai vừa về đến nhà là lao ngay vào bếp.',answer:'弟弟一回家就冲进了厨房。',answerPy:'Dìdi yì huíjiā jiù chōngjìnle chúfáng.',
      note:'冲进 + nơi chốn = lao vào ….',pair:'一……就……'}
   ]},

  // ── 专有名词 (Danh từ riêng) ──
  {n:47,zh:'济南',py:'Jǐnán',pos:'Danh từ riêng',vn:'Tế Nam (thủ phủ tỉnh Sơn Đông)',hv:'Tế Nam',em:'🏙️',lesson:1,
   explain:['Tế Nam — thủ phủ tỉnh Sơn Đông (山东), nổi tiếng với hơn bảy trăm dòng suối tự nhiên nên được gọi là 泉城 (Thành phố suối).'],
   usage:'济南市, 济南的泉水, 泉城济南.',
   collo:['济南市','泉城济南','济南的泉水'],
   ex_zh:'济南被人们称为“泉城”。',ex_py:'Jǐnán bèi rénmen chēngwéi “Quánchéng”.',ex_vn:'Tế Nam được mọi người gọi là “Thành phố suối”.',
   exList:[
     {zh:'济南被人们称为“泉城”。',py:'Jǐnán bèi rénmen chēngwéi “Quánchéng”.',vn:'Tế Nam được mọi người gọi là “Thành phố suối”.'},
     {zh:'济南的泉水，历史悠久。',py:'Jǐnán de quánshuǐ, lìshǐ yōujiǔ.',vn:'Nước suối Tế Nam có lịch sử lâu đời.'},
     {zh:'济南是山东省的省会。',py:'Jǐnán shì Shāndōng Shěng de shěnghuì.',vn:'Tế Nam là thủ phủ tỉnh Sơn Đông.'}
   ],
   colloFull:[
     {zh:'济南市',py:'Jǐnán shì',vn:'thành phố Tế Nam'},
     {zh:'泉城济南',py:'Quánchéng Jǐnán',vn:'Tế Nam – thành phố suối'},
     {zh:'济南的泉水',py:'Jǐnán de quánshuǐ',vn:'nước suối Tế Nam'},
     {zh:'济南旧城',py:'Jǐnán jiùchéng',vn:'phố cổ Tế Nam'}
   ],
   patterns:[
     {s:'济南 = 泉城',m:'Tế Nam được gọi là Thành phố suối'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tế Nam không những có nhiều suối mà còn có lịch sử lâu đời.',answer:'济南不仅泉水多，而且历史悠久。',answerPy:'Jǐnán bùjǐn quánshuǐ duō, érqiě lìshǐ yōujiǔ.',
      note:'Hai vị ngữ chủ–vị: 泉水多, 历史悠久.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Tế Nam được mọi người gọi là “Thành phố suối”.',answer:'济南被人们称为“泉城”。',answerPy:'Jǐnán bèi rénmen chēngwéi “Quánchéng”.',
      note:'被……称为…… = được … gọi là …; 为 đọc wéi.',pair:'被'}
   ]},

  {n:48,zh:'鲍全',py:'Bào Quán',pos:'Danh từ riêng',vn:'Bào Toàn (tên người)',hv:'Bào Toàn',em:'👨',lesson:1,
   explain:['Bào Toàn — chàng trai tốt bụng trong truyền thuyết về suối Báo Đột: học y thuật cứu người, được Long vương cho bình ngọc trắng chữa bệnh.'],
   usage:'Tên riêng; 名叫鲍全 (tên là Bào Toàn).',
   collo:['名叫鲍全','善良的鲍全','鲍全的传说'],
   ex_zh:'鲍全学习医术，救了很多人。',ex_py:'Bào Quán xuéxí yīshù, jiùle hěn duō rén.',ex_vn:'Bào Toàn học y thuật, cứu được rất nhiều người.',
   exList:[
     {zh:'鲍全学习医术，救了很多人。',py:'Bào Quán xuéxí yīshù, jiùle hěn duō rén.',vn:'Bào Toàn học y thuật, cứu được rất nhiều người.'},
     {zh:'济南城里有个善良的青年，名叫鲍全。',py:'Jǐnán chéng li yǒu ge shànliáng de qīngnián, míng jiào Bào Quán.',vn:'Trong thành Tế Nam có một chàng trai tốt bụng, tên là Bào Toàn.'},
     {zh:'鲍全把白玉壶埋入了地下。',py:'Bào Quán bǎ báiyù hú máirùle dìxià.',vn:'Bào Toàn chôn chiếc bình ngọc trắng xuống đất.'}
   ],
   colloFull:[
     {zh:'名叫鲍全',py:'míng jiào Bào Quán',vn:'tên là Bào Toàn'},
     {zh:'善良的鲍全',py:'shànliáng de Bào Quán',vn:'chàng Bào Toàn tốt bụng'},
     {zh:'鲍全的传说',py:'Bào Quán de chuánshuō',vn:'truyền thuyết về Bào Toàn'}
   ],
   patterns:[
     {s:'名叫 + tên người',m:'Tên là … (lối kể chuyện)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bào Toàn đã chôn chiếc bình ngọc xuống đất.',answer:'鲍全把玉壶埋入了地下。',answerPy:'Bào Quán bǎ yù hú máirùle dìxià.',
      note:'把 + 玉壶 + 埋入 + 地下.',pair:'把'},
     {promptLang:'vi',prompt:'Chiếc bình ngọc trắng là Bào Toàn xin được từ chỗ Long vương.',answer:'白玉壶是鲍全从龙王那儿求到的。',answerPy:'Báiyù hú shì Bào Quán cóng Lóngwáng nàr qiúdào de.',
      note:'从 + người + 那儿: từ chỗ ai; 求到 = xin được.',pair:'是……的'}
   ]},

  {n:49,zh:'东海龙王',py:'Dōnghǎi Lóngwáng',pos:'Danh từ riêng',vn:'Đông Hải Long vương',hv:'Đông Hải Long vương',em:'🐲',lesson:1,
   explain:['Vua rồng cai quản biển Đông trong thần thoại Trung Quốc. Trong bài, ông cụ mà Bào Toàn cứu chính là anh trai của Đông Hải Long vương.'],
   usage:'东海龙王的哥哥; 从龙王那儿求到…….',
   collo:['东海龙王的哥哥','龙王那儿','东海龙王的传说'],
   ex_zh:'这老人其实是东海龙王的哥哥。',ex_py:'Zhè lǎorén qíshí shì Dōnghǎi Lóngwáng de gēge.',ex_vn:'Ông cụ này thực ra là anh trai của Đông Hải Long vương.',
   exList:[
     {zh:'这老人其实是东海龙王的哥哥。',py:'Zhè lǎorén qíshí shì Dōnghǎi Lóngwáng de gēge.',vn:'Ông cụ này thực ra là anh trai của Đông Hải Long vương.'},
     {zh:'在《西游记》里，孙悟空从东海龙王那儿拿到了金箍棒。',py:'Zài 《Xīyóu Jì》 li, Sūn Wùkōng cóng Dōnghǎi Lóngwáng nàr nádàole jīngūbàng.',vn:'Trong Tây Du Ký, Tôn Ngộ Không lấy được gậy Như Ý từ chỗ Đông Hải Long vương.'},
     {zh:'传说东海龙王住在海底的宫殿里。',py:'Chuánshuō Dōnghǎi Lóngwáng zhù zài hǎidǐ de gōngdiàn li.',vn:'Tương truyền Đông Hải Long vương sống trong cung điện dưới đáy biển.'}
   ],
   colloFull:[
     {zh:'东海龙王的哥哥',py:'Dōnghǎi Lóngwáng de gēge',vn:'anh trai của Đông Hải Long vương'},
     {zh:'龙王那儿',py:'Lóngwáng nàr',vn:'chỗ Long vương'},
     {zh:'东海龙王的传说',py:'Dōnghǎi Lóngwáng de chuánshuō',vn:'truyền thuyết về Đông Hải Long vương'}
   ],
   patterns:[
     {s:'从 + người + 那儿 + V',m:'Làm gì từ chỗ ai (从龙王那儿求到)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông cụ được cứu hoá ra là anh trai của Đông Hải Long vương.',answer:'被救的老人原来是东海龙王的哥哥。',answerPy:'Bèi jiù de lǎorén yuánlái shì Dōnghǎi Lóngwáng de gēge.',
      note:'被救的 + N = … được cứu; 原来 = hoá ra.',pair:'被'},
     {promptLang:'vi',prompt:'Câu chuyện Đông Hải Long vương thì ngay cả em trai tôi cũng biết.',answer:'东海龙王的故事连我弟弟都知道。',answerPy:'Dōnghǎi Lóngwáng de gùshi lián wǒ dìdi dōu zhīdào.',
      note:'Chủ đề đưa lên đầu câu, sau đó 连……都…….',pair:'连……都……'}
   ]},

  {n:50,zh:'趵突泉',py:'Bàotūquán',pos:'Danh từ riêng',vn:'suối Báo Đột (tên dòng suối)',hv:'Báo Đột tuyền',em:'⛲',lesson:1,
   explain:['Suối Báo Đột — dòng suối nổi tiếng nhất Tế Nam, có mỹ danh “天下第一泉” (Đệ nhất tuyền thiên hạ). 趵突 tả dòng nước phun mạnh lên từ lòng đất.'],
   usage:'趵突泉公园; “天下第一泉”趵突泉.',
   collo:['天下第一泉','趵突泉公园','去趵突泉'],
   ex_zh:'于是就变成了今天有“天下第一泉”美名的趵突泉。',ex_py:'Yúshì jiù biànchéngle jīntiān yǒu “tiānxià dì-yī quán” měimíng de Bàotūquán.',ex_vn:'Thế là nơi đó trở thành suối Báo Đột ngày nay mang mỹ danh “Đệ nhất tuyền thiên hạ”.',
   exList:[
     {zh:'于是就变成了今天有“天下第一泉”美名的趵突泉。',py:'Yúshì jiù biànchéngle jīntiān yǒu “tiānxià dì-yī quán” měimíng de Bàotūquán.',vn:'Thế là nơi đó trở thành suối Báo Đột ngày nay mang mỹ danh “Đệ nhất tuyền thiên hạ”.'},
     {zh:'2003年，趵突泉终于再次流出了甜美的泉水。',py:'Èr líng líng sān nián, Bàotūquán zhōngyú zàicì liúchūle tiánměi de quánshuǐ.',vn:'Năm 2003, suối Báo Đột cuối cùng lại chảy ra dòng nước ngọt lành.'},
     {zh:'去济南旅游，一定要去看看趵突泉。',py:'Qù Jǐnán lǚyóu, yídìng yào qù kànkan Bàotūquán.',vn:'Đi du lịch Tế Nam nhất định phải đến xem suối Báo Đột.'}
   ],
   colloFull:[
     {zh:'天下第一泉',py:'tiānxià dì-yī quán',vn:'đệ nhất tuyền thiên hạ'},
     {zh:'趵突泉公园',py:'Bàotūquán gōngyuán',vn:'công viên suối Báo Đột'},
     {zh:'去趵突泉',py:'qù Bàotūquán',vn:'đi suối Báo Đột'}
   ],
   patterns:[
     {s:'有 + “……” + 美名的 + N',m:'… mang mỹ danh “…”'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Suối Báo Đột được mọi người gọi là “Đệ nhất tuyền thiên hạ”.',answer:'趵突泉被人们称为“天下第一泉”。',answerPy:'Bàotūquán bèi rénmen chēngwéi “tiānxià dì-yī quán”.',
      note:'称 A 为 B → bị động: A 被称为 B.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi vừa đến Tế Nam là đi xem suối Báo Đột ngay.',answer:'我一到济南就去看了趵突泉。',answerPy:'Wǒ yí dào Jǐnán jiù qù kànle Bàotūquán.',
      note:'一 trước 到 (thanh 4) đọc yí.',pair:'一……就……'}
   ]},

  {n:51,zh:'舜',py:'Shùn',pos:'Danh từ riêng',vn:'vua Thuấn (vị vua trong truyền thuyết cổ đại Trung Hoa)',hv:'Thuấn',em:'👑',lesson:1,
   explain:['Vua Thuấn — vị vua hiền trong truyền thuyết cổ đại Trung Hoa. Suối 舜泉 ở Tế Nam đặt theo tên ông: ví dụ cho cách 以人名命名 (đặt tên theo tên người).'],
   usage:'舜泉 (suối Thuấn), 尧舜 (vua Nghiêu và vua Thuấn).',
   collo:['舜泉','以人名命名的舜泉','尧舜'],
   ex_zh:'舜泉是以人名命名的。',ex_py:'Shùnquán shì yǐ rénmíng mìngmíng de.',ex_vn:'Suối Thuấn được đặt theo tên người.',
   exList:[
     {zh:'舜泉是以人名命名的。',py:'Shùnquán shì yǐ rénmíng mìngmíng de.',vn:'Suối Thuấn được đặt theo tên người.'},
     {zh:'舜是中国古代传说中的一位好帝王。',py:'Shùn shì Zhōngguó gǔdài chuánshuō zhōng de yí wèi hǎo dìwáng.',vn:'Thuấn là một vị vua hiền trong truyền thuyết cổ đại Trung Quốc.'},
     {zh:'越南人也常用“尧舜”来比喻太平的时代。',py:'Yuènánrén yě cháng yòng “Yáo Shùn” lái bǐyù tàipíng de shídài.',vn:'Người Việt cũng hay dùng “Nghiêu Thuấn” để ví thời thái bình.'}
   ],
   colloFull:[
     {zh:'舜泉',py:'Shùnquán',vn:'suối Thuấn'},
     {zh:'以人名命名的舜泉',py:'yǐ rénmíng mìngmíng de Shùnquán',vn:'suối Thuấn đặt theo tên người'},
     {zh:'尧舜',py:'Yáo Shùn',vn:'vua Nghiêu và vua Thuấn'}
   ],
   patterns:[
     {s:'以 + 人名 + 命名',m:'Đặt tên theo tên người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Suối Thuấn là được đặt theo tên của vua Thuấn.',answer:'舜泉是以舜的名字命名的。',answerPy:'Shùnquán shì yǐ Shùn de míngzi mìngmíng de.',
      note:'以……命名: đặt tên theo …; 是……的 nhấn mạnh cách thức.',pair:'是……的'},
     {promptLang:'vi',prompt:'Câu chuyện về vua Thuấn thì ngay cả trẻ con Trung Quốc cũng biết.',answer:'舜的故事连中国的小孩子都知道。',answerPy:'Shùn de gùshi lián Zhōngguó de xiǎo háizi dōu zhīdào.',
      note:'连 + đối tượng + 都: ngay cả … cũng ….',pair:'连……都……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — một bài liền (file nghe 05-1 đọc liền cả bài), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 济南的泉水',
  preQuiz:[
    {q:'济南泉水最早的文字记载可以推到什么时候？',opts:['3000多年前','300多年前','四亿年前'],ans:0},
    {q:'许多文人留下了什么？',opts:['许多地图','许多赞美泉水的诗文','许多白玉壶'],ans:1},
    {q:'老百姓为什么对泉水充满感激之情？',opts:['泉水能卖很多钱','泉水治好了龙王的病','他们住在泉边，喝着甜美的泉水'],ans:2},
    {q:'鲍全是一个什么样的人？',opts:['善良的青年，学习医术救人','有钱的商人','东海龙王的哥哥'],ans:0},
    {q:'鲍全在路边救了谁？',opts:['一个迷路的小孩','一位晕倒的老人','一条受伤的龙'],ans:1},
    {q:'鲍全为什么把白玉壶埋入地下？',opts:['壶太重了，拿不动','龙王让他这么做','为了不被坏人抢走'],ans:2},
    {q:'如今济南市区内有多少个天然泉？',opts:['七百多个','七十多个','三千多个'],ans:0},
    {q:'黑虎泉是以什么命名的？',opts:['人名','动物','形状'],ans:1},
    {q:'济南的泉水来自哪里？',opts:['东海','济南市以北的平原','济南市以南的广大山区'],ans:2},
    {q:'在石灰岩地区，陆地表面的水怎么样？',opts:['很容易进入地下','很难进入地下','会变成火成岩'],ans:0},
    {q:'地下水碰到火成岩以后怎么样？',opts:['马上变少了','被挡住了路，积蓄起来','流回了山区'],ans:1},
    {q:'地下水为什么能冲出地表？',opts:['因为下了很多大雨','因为鲍全在那儿埋了壶','因为旧城一带地势低，有的地方低过了地下水的水面'],ans:2}
  ],
  lines:[
    {sp:0,zh:'济南的泉水，历史悠久，最早的文字记载可以推到3000多年前。许多文人都对它的声音、颜色、形状、味道进行过描写，留下了许多赞美泉水的诗文。而济南的老百姓住在泉边，喝着这甜美的泉水，自然对它充满感激之情，从而也产生了许多关于泉水的美丽传说。',
     py:'Jǐnán de quánshuǐ, lìshǐ yōujiǔ, zuì zǎo de wénzì jìzǎi kěyǐ tuīdào sānqiān duō nián qián. Xǔduō wénrén dōu duì tā de shēngyīn, yánsè, xíngzhuàng, wèidao jìnxíngguo miáoxiě, liúxiàle xǔduō zànměi quánshuǐ de shīwén. Ér Jǐnán de lǎobǎixìng zhù zài quán biān, hēzhe zhè tiánměi de quánshuǐ, zìrán duì tā chōngmǎn gǎnjī zhī qíng, cóng\'ér yě chǎnshēngle xǔduō guānyú quánshuǐ de měilì chuánshuō.',
     vn:'Nước suối Tế Nam có lịch sử lâu đời, ghi chép bằng chữ viết sớm nhất có thể truy về hơn 3000 năm trước. Nhiều văn nhân từng miêu tả âm thanh, màu sắc, hình dạng, mùi vị của nó, để lại rất nhiều thơ văn ca ngợi nước suối. Còn người dân Tế Nam sống bên suối, uống thứ nước suối ngọt lành này, tự nhiên chan chứa lòng biết ơn đối với nó, từ đó cũng ra đời nhiều truyền thuyết đẹp về nước suối.'},
    {sp:0,zh:'相传很久以前，济南城里有个善良的青年，名叫鲍全，他学习医术，救了很多人。一次，他在路边救了一位晕倒的老人，并把老人接回家照顾。这老人其实是东海龙王的哥哥。通过老人的介绍，鲍全从龙王那儿求到了治病救人的白玉壶。为了不被坏人抢走，他把壶埋入地下藏了起来，于是就变成了今天有“天下第一泉”美名的趵突泉。',
     py:'Xiāngchuán hěn jiǔ yǐqián, Jǐnán chéng li yǒu ge shànliáng de qīngnián, míng jiào Bào Quán, tā xuéxí yīshù, jiùle hěn duō rén. Yí cì, tā zài lù biān jiùle yí wèi yūndǎo de lǎorén, bìng bǎ lǎorén jiē huí jiā zhàogù. Zhè lǎorén qíshí shì Dōnghǎi Lóngwáng de gēge. Tōngguò lǎorén de jièshào, Bào Quán cóng Lóngwáng nàr qiúdàole zhì bìng jiù rén de báiyù hú. Wèile bú bèi huàirén qiǎngzǒu, tā bǎ hú máirù dìxià cángle qǐlai, yúshì jiù biànchéngle jīntiān yǒu “tiānxià dì-yī quán” měimíng de Bàotūquán.',
     vn:'Tương truyền rất lâu trước kia, trong thành Tế Nam có một chàng trai tốt bụng tên là Bào Toàn; chàng học y thuật, cứu được rất nhiều người. Một lần, chàng cứu một cụ già ngất xỉu bên đường, rồi đưa cụ về nhà chăm sóc. Ông cụ này thực ra là anh trai của Đông Hải Long vương. Nhờ ông cụ giới thiệu, Bào Toàn xin được từ Long vương chiếc bình ngọc trắng chữa bệnh cứu người. Để không bị kẻ xấu cướp mất, chàng chôn chiếc bình xuống đất giấu đi, thế là nơi ấy trở thành suối Báo Đột ngày nay mang mỹ danh “Đệ nhất tuyền thiên hạ”.'},
    {sp:0,zh:'如今的济南市区内，分布着大大小小七百多个天然泉，这在国内外城市中是极为少有的。有如此之多的泉，名字当然也少不了。济南泉水的优美，还可从那独特的名字上反映出来，如：以人名命名的舜泉，以动物命名的黑虎泉，以形状命名的珍珠泉，等等。',
     py:'Rújīn de Jǐnán shìqū nèi, fēnbùzhe dàdàxiǎoxiǎo qībǎi duō ge tiānrán quán, zhè zài guónèiwài chéngshì zhōng shì jíwéi shǎoyǒu de. Yǒu rúcǐ zhī duō de quán, míngzi dāngrán yě shǎo bu liǎo. Jǐnán quánshuǐ de yōuměi, hái kě cóng nà dútè de míngzi shang fǎnyìng chūlai, rú: yǐ rénmíng mìngmíng de Shùnquán, yǐ dòngwù mìngmíng de Hēihǔquán, yǐ xíngzhuàng mìngmíng de Zhēnzhūquán, děngděng.',
     vn:'Trong nội thành Tế Nam ngày nay phân bố hơn bảy trăm suối tự nhiên lớn nhỏ, điều này cực kỳ hiếm có trong các thành phố trong và ngoài nước. Có nhiều suối đến thế thì tên gọi đương nhiên cũng không thể thiếu. Vẻ đẹp của suối Tế Nam còn thể hiện qua những cái tên độc đáo, như: suối Thuấn đặt theo tên người, suối Hắc Hổ đặt theo tên con vật, suối Trân Châu đặt theo hình dạng, v.v.'},
    {sp:0,zh:'说到这里，您也许要问，这么多、这么好的泉水是如何形成的呢？济南的泉水，来自于济南市以南的广大山区，这些山区的岩石是大约四亿年前形成的一层厚厚的石灰岩。在这种石灰岩地区，陆地表面的水很容易进入地下。山区的石灰岩层，以大约三十度的角度，由南向北斜，因此大量的地下水向济南运动。而济南市区的地下岩石变为了火成岩，地下水流到这里，碰到火成岩挡住了路，就积蓄起来，越积越多。它无处可流，就得另找出路。济南旧城一带，地势低，有的地方甚至低过了地下水的水面，地下水就冲出地表，形成了众多的泉水。这就是济南“泉城”美名得来的原因。',
     py:'Shuōdào zhèli, nín yěxǔ yào wèn, zhème duō, zhème hǎo de quánshuǐ shì rúhé xíngchéng de ne? Jǐnán de quánshuǐ, láizì yú Jǐnán shì yǐ nán de guǎngdà shānqū, zhèxiē shānqū de yánshí shì dàyuē sìyì nián qián xíngchéng de yì céng hòuhòu de shíhuīyán. Zài zhè zhǒng shíhuīyán dìqū, lùdì biǎomiàn de shuǐ hěn róngyì jìnrù dìxià. Shānqū de shíhuīyán céng, yǐ dàyuē sānshí dù de jiǎodù, yóu nán xiàng běi xié, yīncǐ dàliàng de dìxiàshuǐ xiàng Jǐnán yùndòng. Ér Jǐnán shìqū de dìxià yánshí biànwéile huǒchéngyán, dìxiàshuǐ liúdào zhèli, pèngdào huǒchéngyán dǎngzhùle lù, jiù jīxù qǐlai, yuè jī yuè duō. Tā wú chù kě liú, jiù děi lìng zhǎo chūlù. Jǐnán jiùchéng yídài, dìshì dī, yǒu de dìfang shènzhì dīguòle dìxiàshuǐ de shuǐmiàn, dìxiàshuǐ jiù chōngchū dìbiǎo, xíngchéngle zhòngduō de quánshuǐ. Zhè jiù shì Jǐnán “Quánchéng” měimíng délái de yuányīn.',
     vn:'Nói đến đây, có lẽ bạn sẽ hỏi: nước suối nhiều như thế, tốt như thế đã hình thành ra sao? Nước suối Tế Nam đến từ vùng núi rộng lớn phía nam thành phố Tế Nam; đá ở những vùng núi này là một lớp đá vôi dày hình thành khoảng bốn trăm triệu năm trước. Ở vùng đá vôi như thế, nước trên bề mặt đất liền rất dễ thấm xuống lòng đất. Tầng đá vôi ở vùng núi nghiêng từ nam sang bắc một góc khoảng ba mươi độ, vì thế một lượng lớn nước ngầm chảy về phía Tế Nam. Còn đá dưới lòng đất nội thành Tế Nam đã biến thành đá mác-ma; nước ngầm chảy tới đây, gặp đá mác-ma chắn đường liền tích tụ lại, càng tích càng nhiều. Không còn chỗ nào để chảy, nó đành phải tìm lối thoát khác. Vùng phố cổ Tế Nam địa thế thấp, có chỗ thậm chí thấp hơn cả mặt nước ngầm, thế là nước ngầm xông lên khỏi mặt đất, tạo thành vô số dòng suối. Đó chính là lý do Tế Nam có mỹ danh “Thành phố suối”.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析
// Cặp 1 lấy đúng bảng 词语辨析 của sách (tr. 51–52); cặp 2–3 là cặp dễ nhầm trong bài
// ══════════════════════════════════════════
var synonymData = [
  {pair:'美丽 — 优美',
   same:'Đều là tính từ, đều tả được phong cảnh, môi trường. Ở chỗ tả phong cảnh thì thay cho nhau được.',
   sameEx:{zh:'济南是一座风景美丽／优美的城市。',vn:'Tế Nam là một thành phố phong cảnh tươi đẹp.'},
   items:[
     {word:'美丽',points:[
       'Hay dùng tả DUNG MẠO, dáng vẻ, cách ăn mặc đẹp.',
       'Thường là cảm nhận bằng MẮT (thị giác).',
       'Có nghĩa tu từ: tốt đẹp, cao quý (美丽善良的心, 美丽的传说).'
     ],ex:[{zh:'她有一双美丽的大眼睛。',vn:'Cô ấy có một đôi mắt to đẹp.'},
          {zh:'雨后天空中出现了一道美丽的彩虹。',vn:'Sau mưa, trên trời xuất hiện một cầu vồng tuyệt đẹp.'},
          {zh:'她有一颗美丽善良的心。',vn:'Cô ấy có một trái tim đẹp và lương thiện.'}]},
     {word:'优美',points:[
       'Nhấn mạnh CẢM GIÁC đẹp mà động tác, hình tượng đem lại.',
       'Tả được cả cảm nhận KHÔNG bằng mắt: tiếng hát, ngôn ngữ, âm nhạc.',
       'Không có nghĩa tu từ "tốt đẹp, cao quý" như 美丽.'
     ],ex:[{zh:'演员们的动作十分优美。',vn:'Động tác của các diễn viên vô cùng đẹp mắt.'},
          {zh:'一进院子就听到了丽丽那优美的歌声。',vn:'Vừa vào sân đã nghe thấy tiếng hát hay của Lệ Lệ.'}]}
   ],
   quiz:[
     {sentence:'这篇文章的语言生动＿＿。',options:['美丽','优美'],answer:1,
      why:'Ngôn ngữ là cảm nhận KHÔNG bằng mắt — chỉ 优美 dùng được.'},
     {sentence:'心也像窗户一样，如果不打开，就看不到外面的＿＿和热闹。',options:['美丽','优美'],answer:0,
      why:'"Vẻ đẹp" nhìn thấy bên ngoài khung cửa — cảm nhận bằng mắt, dùng 美丽.'},
     {sentence:'这里流传着许多＿＿的传说。',options:['美丽','优美'],answer:0,
      why:'Nghĩa tu từ "tốt đẹp" — 美丽的传说 (bài khoá: 美丽传说). 优美 không có cách dùng này.'},
     {sentence:'当地＿＿的自然风景吸引了很多中外游客。',options:['美丽','优美'],answer:0,both:true,
      why:'Tả phong cảnh — điểm chung của hai từ, dùng từ nào cũng được.'}
   ],
   sgk:{
     chung:{t:'都是形容词，都可以形容风景、环境等。',vn:'Đều là tính từ, đều tả được phong cảnh, môi trường.',vd:'济南是一座风景美丽／优美的城市。',vdVn:'Tế Nam là một thành phố phong cảnh tươi đẹp.'},
     khac:[
       {a:{t:'多用于形容长相、样子、打扮等好看。',vn:'Hay dùng tả dung mạo, dáng vẻ, cách ăn mặc đẹp.',vd:'她有一双美丽的大眼睛。',vdVn:'Cô ấy có một đôi mắt to đẹp.'},
        b:{t:'侧重形容动作、形象等给人美好的感受。',vn:'Nhấn mạnh cảm giác đẹp mà động tác, hình tượng đem lại.',vd:'演员们的动作十分优美。',vdVn:'Động tác của các diễn viên vô cùng đẹp mắt.'}},
       {a:{t:'一般多形容视觉的感受。',vn:'Thường tả cảm nhận bằng mắt.',vd:'雨后天空中出现了一道美丽的彩虹。',vdVn:'Sau mưa, trên trời xuất hiện một cầu vồng tuyệt đẹp.'},
        b:{t:'还可形容非视觉的感受。',vn:'Còn tả được cảm nhận không bằng mắt.',vd:'一进院子就听到了丽丽那优美的歌声。',vdVn:'Vừa vào sân đã nghe thấy tiếng hát hay của Lệ Lệ.'}},
       {a:{t:'有修辞的用法，有美好、高尚的意思。',vn:'Có cách dùng tu từ, mang nghĩa tốt đẹp, cao quý.',vd:'她有一颗美丽善良的心。',vdVn:'Cô ấy có một trái tim đẹp và lương thiện.'},
        b:{t:'没有这种用法。',vn:'Không có cách dùng này.'}}
     ],
     lamThu:[
       {s:'这篇文章的语言生动＿＿。',dap:[false,true],mau:true,
        giai:'Ngôn ngữ — cảm nhận không bằng mắt → chỉ 优美.'},
       {s:'心也像窗户一样，如果不打开，就看不到外面的＿＿和热闹。',dap:[true,false],
        giai:'Vẻ đẹp nhìn thấy bên ngoài (cảm nhận bằng mắt), đi cùng 热闹 → 美丽.'},
       {s:'这里流传着许多＿＿的传说。',dap:[true,false],
        giai:'Nghĩa tu từ "tốt đẹp" → 美丽的传说; 优美 không có cách dùng này.'},
       {s:'当地＿＿的自然风景吸引了很多中外游客。',dap:[true,true],
        giai:'Tả phong cảnh — điểm chung, cả hai đều dùng được.'}
     ]
   }},

  {pair:'如今 — 现在',
   same:'Đều chỉ thời hiện tại: "bây giờ, ngày nay".',
   sameEx:{zh:'如今／现在的年轻人都离不开手机。',vn:'Giới trẻ bây giờ đều không rời được điện thoại.'},
   items:[
     {word:'如今',points:[
       'Chỉ "ngày nay" trong thế ĐỐI CHIẾU với quá khứ đã qua khá lâu.',
       'KHÔNG chỉ thời điểm cụ thể (giờ, phút, "ngay lúc này").',
       'Thiên về văn viết, lối kể chuyện; có cụm cố định 事到如今.'
     ],ex:[{zh:'十年前这里还是农村，如今已经变成了城市。',vn:'Mười năm trước nơi đây còn là nông thôn, nay đã thành thành phố.'}]},
     {word:'现在',points:[
       'Chỉ được cả "ngay lúc này" lẫn "thời nay".',
       'Dùng cho thời điểm cụ thể: 现在是五点.',
       'Khẩu ngữ, dùng được trong mọi hoàn cảnh.'
     ],ex:[{zh:'现在是五点，再过一刻钟小明就放学了。',vn:'Bây giờ là năm giờ, mười lăm phút nữa Tiểu Minh tan học.'},
          {zh:'你现在有空吗？',vn:'Bây giờ bạn có rảnh không?'}]}
   ],
   quiz:[
     {sentence:'＿＿是五点，再过一刻钟小明就放学了。',options:['如今','现在'],answer:1,
      why:'Giờ giấc cụ thể → chỉ 现在. 如今 không nói giờ.'},
     {sentence:'你＿＿有空吗？我想请你帮个忙。',options:['如今','现在'],answer:1,
      why:'"Ngay lúc này" khi đang nói chuyện → 现在.'},
     {sentence:'三十年前这里只有几户人家，＿＿已经是一个热闹的小城了。',options:['如今','现在'],answer:0,both:true,
      why:'Đối chiếu với quá khứ xa — 如今 hợp nhất (lối kể), 现在 cũng đúng.'},
     {sentence:'事到＿＿，后悔也没有用了。',options:['如今','现在'],answer:0,
      why:'事到如今 là cụm cố định ("sự đã đến nước này") — không thay bằng 现在.'}
   ]},

  {pair:'感激 — 感谢',
   same:'Đều bày tỏ lòng biết ơn với người đã giúp mình.',
   sameEx:{zh:'我非常感激／感谢你的帮助。',vn:'Tôi vô cùng biết ơn sự giúp đỡ của bạn.'},
   items:[
     {word:'感激',points:[
       'Nhấn mạnh TÌNH CẢM biết ơn sâu sắc ở trong lòng.',
       'Hay đi với 充满, 心存, ……之情: 充满感激之情.',
       'Ít dùng làm lời cảm ơn xã giao.'
     ],ex:[{zh:'老百姓对泉水充满感激之情。',vn:'Người dân chan chứa lòng biết ơn nước suối.'}]},
     {word:'感谢',points:[
       'Nhấn mạnh HÀNH ĐỘNG nói lời cảm ơn, bày tỏ ra ngoài.',
       'Cụm cố định: 表示感谢, 感谢信, 感谢大家.',
       'Dùng được cả khi trang trọng lẫn thường ngày.'
     ],ex:[{zh:'我这次来是想当面向你表示感谢的。',vn:'Lần này tôi đến là muốn trực tiếp bày tỏ lời cảm ơn với bạn.'},
          {zh:'感谢大家的支持！',vn:'Cảm ơn sự ủng hộ của mọi người!'}]}
   ],
   quiz:[
     {sentence:'我这次来是想当面向你表示＿＿的。',options:['感激','感谢'],answer:1,
      why:'表示感谢 là cụm cố định — bày tỏ lời cảm ơn ra ngoài.'},
     {sentence:'老百姓对泉水充满＿＿之情。',options:['感激','感谢'],answer:0,
      why:'充满……之情 nói về tình cảm trong lòng → 感激之情.'},
     {sentence:'＿＿大家今天来参加我的生日会！',options:['感激','感谢'],answer:1,
      why:'Lời cảm ơn nói ra với mọi người → 感谢.'},
     {sentence:'他救了我的命，我心里一直对他很＿＿。',options:['感激','感谢'],answer:0,both:true,
      why:'Lòng biết ơn sâu trong lòng (心里) → 感激 hợp hơn; 很感谢 cũng nói được.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'传说',hv:'truyền thuyết',vn:'truyền thuyết',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'分布',hv:'phân bố',vn:'phân bố',note:'Trùng khít.'},
    {zh:'形成',hv:'hình thành',vn:'hình thành',note:'Trùng khít.'},
    {zh:'反映',hv:'phản ánh',vn:'phản ánh',note:'Trùng khít, cả nghĩa "phản ánh ý kiến lên cấp trên".'},
    {zh:'描写',hv:'miêu tả',vn:'miêu tả',note:'Trùng khít.'},
    {zh:'感激',hv:'cảm kích',vn:'biết ơn',note:'"Cảm kích" tiếng Việt cũng là biết ơn sâu sắc.'},
    {zh:'地势',hv:'địa thế',vn:'địa thế',note:'Trùng khít.'},
    {zh:'岩石',hv:'nham thạch',vn:'đá, nham thạch',note:'"Nham thạch" tiếng Việt thường chỉ dung nham — trong tiếng Trung 岩石 là đá nói chung.'},
    {zh:'珍珠',hv:'trân châu',vn:'ngọc trai',note:'"Trà sữa trân châu" = 珍珠奶茶.'},
    {zh:'善良',hv:'thiện lương',vn:'lương thiện',note:'Đảo thứ tự: tiếng Việt nói "lương thiện".'},
    {zh:'天然',hv:'thiên nhiên',vn:'tự nhiên, có sẵn',note:'"Khí thiên nhiên" = 天然气.'},
    {zh:'地区',hv:'địa khu',vn:'khu vực',note:'Đảo thứ tự: tiếng Việt nói "khu vực".'}
  ],
  idiom:[
    {zh:'治病救人',hv:'trị bệnh cứu nhân',vn:'chữa bệnh cứu người',note:'Tiếng Việt nói "chữa bệnh cứu người" — gần như y nguyên.'},
    {zh:'天下第一泉',hv:'thiên hạ đệ nhất tuyền',vn:'dòng suối số một thiên hạ',note:'Mỹ danh của suối Báo Đột; "thiên hạ đệ nhất" người Việt quen từ truyện kiếm hiệp.'},
    {zh:'如此之多',hv:'như thử chi đa',vn:'nhiều đến thế',note:'Lối văn viết: 如此 = như thế, 之 nối, 多 = nhiều.'}
  ],
  trap:[
    {zh:'老百姓',hv:'lão bách tính',vn:'người dân thường',
     warn:'BẪY: 老 ở đây KHÔNG có nghĩa là già. 老百姓 là người dân bình thường nói chung, cả người trẻ.'},
    {zh:'表面',hv:'biểu diện',vn:'bề mặt, bề ngoài',
     warn:'Đừng nhầm với "biểu diễn" (表演). 表面 = bề mặt, bề ngoài.'},
    {zh:'独特',hv:'độc đặc',vn:'độc đáo, riêng biệt',
     warn:'"Độc đặc" không có trong tiếng Việt; nghĩa là ĐỘC ĐÁO. Không làm phó từ "rất" như 特别.'},
    {zh:'广大',hv:'quảng đại',vn:'rộng lớn; đông đảo',
     warn:'"Quảng đại quần chúng" = đông đảo quần chúng — đúng một nghĩa. Nhưng 广大山区 lại là "vùng núi RỘNG LỚN".'},
    {zh:'如今',hv:'như kim',vn:'ngày nay',
     warn:'Âm Hán–Việt không gợi nghĩa. 如今 = ngày nay (đối chiếu với xưa), không dùng cho giờ giấc: không nói 如今是五点.'},
    {zh:'为',hv:'vi',vn:'thành, làm',
     warn:'Trong bài đọc wéi (变为 = biến thành), khác 为 wèi (vì, cho) đã học ở HSK 3.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP CỤM — bảng 词语搭配 (tr. 51) + bài 3 画线连接 (tr. 53)
// ══════════════════════════════════════════
var matchData = [
  {left:'充满',right:'希望'},
  {left:'反映',right:'生活水平'},
  {left:'悠久的',right:'历史'},
  {left:'独特的',right:'建筑'},
  {left:'生动地',right:'描写'},
  {left:'逐渐',right:'形成'},
  {left:'晕',right:'过去'},
  {left:'救',right:'活'},
  {left:'碰',right:'见'},
  {left:'抢',right:'光'},
  {left:'打',right:'晕'},
  {left:'善良的',right:'性格'},
  {left:'广大的',right:'农村'},
  {left:'埋入',right:'地下'},
  {left:'由南向北',right:'斜'},
  {left:'挡住了',right:'路'},
  {left:'冲出',right:'地表'},
  {left:'变为',right:'火成岩'},
  {left:'赞美',right:'家乡'},
  {left:'心存',right:'感激'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'越南是一个有着',blank:'悠久',post:'历史的国家。',hint:'(lâu đời)',ans:'悠久'},
  {pre:'汉字是世界上最古老的',blank:'文字',post:'之一。',hint:'(chữ viết)',ans:'文字'},
  {pre:'据',blank:'记载',post:'，这座桥已经有八百多年的历史了。',hint:'(ghi chép)',ans:'记载'},
  {pre:'这块石头的',blank:'形状',post:'像一只小猫。',hint:'(hình dạng)',ans:'形状'},
  {pre:'这首诗主要',blank:'描写',post:'了一对年轻人的恋爱经历。',hint:'(miêu tả)',ans:'描写'},
  {pre:'这首',blank:'诗',post:'我一读就会背了。',hint:'(bài thơ)',ans:'诗'},
  {pre:'济南的',blank:'老百姓',post:'住在泉边，喝着这甜美的泉水。',hint:'(người dân)',ans:'老百姓'},
  {pre:'新产品很受顾客欢迎，使我对公司的未来',blank:'充满',post:'信心。',hint:'(tràn đầy)',ans:'充满'},
  {pre:'换一个角度考虑，也许正好就能发现问题的关键，',blank:'从而',post:'找到解决问题的答案。',hint:'(nhờ đó, từ đó)',ans:'从而'},
  {pre:'我担心长期吃这种药会对身体',blank:'产生',post:'不好的影响。',hint:'(gây ra, nảy sinh)',ans:'产生'},
  {pre:'关于还剑湖，越南有一个很有名的',blank:'传说',post:'。',hint:'(truyền thuyết)',ans:'传说'},
  {pre:'我的同桌心地',blank:'善良',post:'，经常帮助别人。',hint:'(lương thiện)',ans:'善良'},
  {pre:'医生们努力了三个小时，终于把他',blank:'救',post:'过来了。',hint:'(cứu)',ans:'救'},
  {pre:'天气太热了，有个同学在操场上',blank:'晕',post:'倒了。',hint:'(ngất)',ans:'晕'},
  {pre:'在中国和越南的文化里，',blank:'龙',post:'都代表着好运。',hint:'(con rồng)',ans:'龙'},
  {pre:'爷爷每天早上都要泡一',blank:'壶',post:'茶。',hint:'(ấm)',ans:'壶'},
  {pre:'小狗把骨头',blank:'埋',post:'在了花园里。',hint:'(chôn)',ans:'埋'},
  {pre:'弟弟一看见妈妈回来，就把手机',blank:'藏',post:'起来了。',hint:'(giấu)',ans:'藏'},
  {pre:'越南的少数民族主要',blank:'分布',post:'在北部山区。',hint:'(phân bố)',ans:'分布'},
  {pre:'妈妈只买',blank:'天然',post:'食品，不买加了很多东西的饮料。',hint:'(tự nhiên)',ans:'天然'},
  {pre:'一个人的字能',blank:'反映',post:'出他的性格。',hint:'(phản ánh)',ans:'反映'},
  {pre:'妈妈生日那天，爸爸送了她一条',blank:'珍珠',post:'项链。',hint:'(ngọc trai)',ans:'珍珠'},
  {pre:'我从小就',blank:'形成',post:'了早睡早起的好习惯。',hint:'(hình thành)',ans:'形成'},
  {pre:'刘经理毕业',blank:'于',post:'北京大学经济学院。',hint:'(từ — giới từ văn viết)',ans:'于'},
  {pre:'这个节目受到了',blank:'广大',post:'观众的欢迎。',hint:'(đông đảo)',ans:'广大'},
  {pre:'越南大约有一',blank:'亿',post:'人口。',hint:'(một trăm triệu)',ans:'亿'},
  {pre:'沿海',blank:'地区',post:'的经济发展得比较快。',hint:'(khu vực, vùng)',ans:'地区'},
  {pre:'从父母的',blank:'角度',post:'看，他们只是希望你安全。',hint:'(góc độ)',ans:'角度'},
  {pre:'这幅画挂得有点儿',blank:'斜',post:'，你帮我扶正吧。',hint:'(lệch, nghiêng)',ans:'斜'},
  {pre:'办公室让我通知你明天下午的活动改',blank:'为',post:'下周一了。',hint:'(thành — đọc wéi)',ans:'为'},
  {pre:'我昨天在超市',blank:'碰',post:'见了小学同学。',hint:'(tình cờ gặp)',ans:'碰'},
  {pre:'前面的人太高了，',blank:'挡',post:'住了我的视线。',hint:'(che, chắn)',ans:'挡'},
  {pre:'下课铃一响，同学们就',blank:'冲',post:'出了教室。',hint:'(lao ra)',ans:'冲'},
  {pre:'这里',blank:'地势',post:'平坦，很适合骑自行车。',hint:'(địa thế)',ans:'地势'},
  {pre:'海边有很多形状奇特的',blank:'岩石',post:'。',hint:'(đá)',ans:'岩石'},
  {pre:'地球',blank:'表面',post:'大约百分之七十是水。',hint:'(bề mặt)',ans:'表面'},
  {pre:'',blank:'济南',post:'被人们称为“泉城”。',hint:'(Tế Nam)',ans:'济南'},
  {pre:'相传很久以前，济南城里有个善良的青年，名叫',blank:'鲍全',post:'。',hint:'(Bào Toàn)',ans:'鲍全'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (起来 · 于 · 从而 · 为) ít nhất hai câu
// ══════════════════════════════════════════
var sortData = [
  {words:['他','把','壶','埋入地下','藏了','起来','。'],ans:'他把壶埋入地下藏了起来。',audio:'他把壶埋入地下藏了起来。'},
  {words:['地下水','被','火成岩','挡住了路','，','就','积蓄起来了','。'],ans:'地下水被火成岩挡住了路，就积蓄起来了。',audio:'地下水被火成岩挡住了路，就积蓄起来了。'},
  {words:['济南的泉水','来自于','济南市以南的','广大山区','。'],ans:'济南的泉水来自于济南市以南的广大山区。',audio:'济南的泉水来自于济南市以南的广大山区。'},
  {words:['多运动','有助于','身体健康','。'],ans:'多运动有助于身体健康。',audio:'多运动有助于身体健康。'},
  {words:['这家公司','成立','于','1997年','。'],ans:'这家公司成立于1997年。',audio:'这家公司成立于1997年。'},
  {words:['他','每天','坚持','复习','，','从而','取得了','好成绩','。'],ans:'他每天坚持复习，从而取得了好成绩。',audio:'他每天坚持复习，从而取得了好成绩。'},
  {words:['老百姓','对泉水','充满感激之情','，','从而','产生了','许多传说','。'],ans:'老百姓对泉水充满感激之情，从而产生了许多传说。',audio:'老百姓对泉水充满感激之情，从而产生了许多传说。'},
  {words:['济南市区的','地下岩石','变为了','火成岩','。'],ans:'济南市区的地下岩石变为了火成岩。',audio:'济南市区的地下岩石变为了火成岩。'},
  {words:['办公室','把','报名时间','改为了','下周一','。'],ans:'办公室把报名时间改为了下周一。',audio:'办公室把报名时间改为了下周一。'},
  {words:['他','被','同学们','选为','班长','。'],ans:'他被同学们选为班长。',audio:'他被同学们选为班长。'},
  {words:['济南市区内','分布着','七百多个','天然泉','。'],ans:'济南市区内分布着七百多个天然泉。',audio:'济南市区内分布着七百多个天然泉。'},
  {words:['地下水','冲出','地表','，','形成了','众多的泉水','。'],ans:'地下水冲出地表，形成了众多的泉水。',audio:'地下水冲出地表，形成了众多的泉水。'},
  {words:['这里','流传着','许多','美丽的','传说','。'],ans:'这里流传着许多美丽的传说。',audio:'这里流传着许多美丽的传说。'},
  {words:['她','有','一颗','美丽善良的','心','。'],ans:'她有一颗美丽善良的心。',audio:'她有一颗美丽善良的心。'},
  {words:['这么多','泉水','是','如何','形成的','？'],ans:'这么多泉水是如何形成的？',audio:'这么多泉水是如何形成的？'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'她的善良受到了大家的____。',opts:['赞美','描写','感激','反映'],ans:0,
   exp:'受到……的赞美 = được … ca ngợi. 描写 (miêu tả) và 反映 (phản ánh) không đi với 受到 theo nghĩa này; 感激 là lòng biết ơn của người được giúp, không phải lời khen.'},
  {wrong:'你帮了我这么大的忙，我真不知道该怎么____你。',opts:['感激','感动','充满','赞美'],ans:0,
   exp:'感激 + người = biết ơn, đền ơn ai. 感动 là "cảm động" (让我很感动), không mang nghĩa đền ơn; 充满 phải có tân ngữ trừu tượng (充满信心); 赞美 là ca ngợi, không hợp tình huống được giúp đỡ.'},
  {wrong:'十年前这里还是农村，____已经变成了一个热闹的城市。',opts:['如今','当时','从前','将来'],ans:0,
   exp:'Đối chiếu quá khứ (十年前) với hiện tại → 如今 (ngày nay). 当时 và 从前 chỉ quá khứ; 将来 là tương lai, không đi với 已经.'},
  {wrong:'演员们的动作十分____。',opts:['优美','美丽','善良','天然'],ans:0,
   exp:'Động tác đem lại cảm giác đẹp → 优美. 美丽 thiên về vẻ ngoài nhìn thấy (dung mạo, cảnh vật), sách ghi rõ động tác dùng 优美; 善良 tả lòng tốt; 天然 là "có sẵn trong tự nhiên".'},
  {wrong:'这家小店的牛肉面有一种____的味道，别的地方吃不到。',opts:['独特','优美','善良','广大'],ans:0,
   exp:'Hương vị riêng, chỗ khác không có → 独特的味道. 优美 không tả mùi vị; 善良 tả con người; 广大 là rộng lớn / đông đảo.'},
  {wrong:'奶奶送给我一块____，说能带来好运。',opts:['玉','壶','龙','诗'],ans:0,
   exp:'Lượng từ 块 + vật quý đem lại may mắn → 玉 (ngọc). 壶 dùng lượng từ 把; 龙 dùng 条; 诗 dùng 首.'},
  {wrong:'商店一打折，东西很快就被____光了。',opts:['抢','救','埋','藏'],ans:0,
   exp:'抢光 = tranh nhau mua hết sạch. 救 (cứu), 埋 (chôn), 藏 (giấu) đều không kết hợp với 光 trong ngữ cảnh mua sắm.'},
  {wrong:'这种药能____感冒。',opts:['治','救','碰','挡'],ans:0,
   exp:'治 + bệnh = chữa bệnh (治感冒, 治病). 救 đi với người (救人), không nói 救感冒; 碰 (chạm) và 挡 (chắn) không hợp nghĩa.'},
  {wrong:'在这种____地区，陆地表面的水很容易进入地下。',opts:['石灰岩','火成岩','珍珠','天然'],ans:0,
   exp:'Nước thấm xuống dễ dàng là đặc điểm của đá vôi → 石灰岩地区. 火成岩 lại CHẶN nước; 珍珠 là ngọc trai; 天然地区 không phải cụm từ.'},
  {wrong:'地下水流到这里，碰到____挡住了路，就积蓄起来。',opts:['火成岩','石灰岩','地势','表面'],ans:0,
   exp:'Thứ chặn đường nước ngầm là đá mác-ma cứng → 火成岩. 石灰岩 cho nước thấm qua; 地势 (địa thế) và 表面 (bề mặt) không "chặn đường" được.'},
  {wrong:'鲍全救的那位老人其实是____的哥哥。',opts:['东海龙王','鲍全','舜','济南'],ans:0,
   exp:'Theo bài khoá: 这老人其实是东海龙王的哥哥. 鲍全 là chính người cứu; 舜 là vua Thuấn (tên suối 舜泉); 济南 là tên thành phố.'},
  {wrong:'被称为“天下第一泉”的是____。',opts:['趵突泉','珍珠泉','黑虎泉','舜泉'],ans:0,
   exp:'Mỹ danh 天下第一泉 thuộc về 趵突泉 (suối Báo Đột). Ba suối còn lại là ví dụ về cách đặt tên: theo hình dạng, con vật, tên người.'},
  {wrong:'以人名命名的泉水是____泉。',opts:['舜','珍珠','黑虎','趵突'],ans:0,
   exp:'舜泉 đặt theo tên vua Thuấn (人名). 珍珠泉 đặt theo hình dạng, 黑虎泉 theo con vật, 趵突泉 tả nước phun lên.'},
  {wrong:'为了不被坏人抢走，他把壶埋入地下藏了____。',opts:['起来','下去','出来','过去'],ans:0,
   exp:'V + 起来 biểu thị từ chỗ lộ ra thành chỗ kín (藏起来, 躲起来) — điểm ngữ pháp của bài. 出来 ngược lại (lộ ra); 下去, 过去 không đi với 藏 theo nghĩa này.'},
  {wrong:'比赛前做好思想准备可以减少运动员的压力，____取得比赛的成功。',opts:['从而','因为','虽然','而且'],ans:0,
   exp:'Vế trước là cách làm, vế sau là kết quả đạt được nhờ đó → 从而. 因为 nêu nguyên nhân, 虽然 nêu nhượng bộ; 而且 chỉ tăng tiến, không nêu kết quả.'},
  {wrong:'这家公司成立____1997年。',opts:['于','在于','对于','关于'],ans:0,
   exp:'V + 于 + thời gian: 成立于1997年 (văn viết của 在1997年成立). 在于 = "nằm ở, do ở"; 对于, 关于 đứng đầu câu/cụm, không đứng sau động từ.'},
  {wrong:'每个人都会遇到各种压力，可是，压力也可以变____动力。',opts:['为','成为','给','于'],ans:0,
   exp:'变为 = biến thành (为 đọc wéi, làm bổ ngữ sau động từ). "变成为" thừa chữ; 给 và 于 không mang nghĩa "trở thành".'},
  {wrong:'____是五点，再过一刻钟小明就放学了。',opts:['现在','如今','以来','当时'],ans:0,
   exp:'Nói giờ giấc cụ thể → 现在. 如今 chỉ "ngày nay" đối chiếu với xưa, không dùng cho giờ; 以来 đứng sau mốc thời gian (bài 2); 当时 là "lúc đó" trong quá khứ.'},
  {wrong:'我这次来是想当面向你表示____的。',opts:['感谢','感激','赞美','充满'],ans:0,
   exp:'表示感谢 là cụm cố định — bày tỏ lời cảm ơn. 感激 nhấn mạnh tình cảm trong lòng, ít đi với 表示; 赞美 là ca ngợi; 充满 không làm tân ngữ của 表示.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nước suối Tế Nam có lịch sử lâu đời.',zh:'济南的泉水历史悠久。',py:'Jǐnán de quánshuǐ lìshǐ yōujiǔ.'},
  {vi:'Tôi lo uống loại thuốc này lâu dài sẽ gây ảnh hưởng xấu cho cơ thể.',zh:'我担心长期吃这种药会对身体产生不好的影响。',py:'Wǒ dānxīn chángqī chī zhè zhǒng yào huì duì shēntǐ chǎnshēng bù hǎo de yǐngxiǎng.'},
  {vi:'Công ty này được thành lập năm 1997.',zh:'这家公司成立于1997年。',py:'Zhè jiā gōngsī chénglì yú yī jiǔ jiǔ qī nián.'},
  {vi:'Áp lực cũng có thể biến thành động lực.',zh:'压力也可以变为动力。',py:'Yālì yě kěyǐ biànwéi dònglì.'},
  {vi:'Ôn tập kịp thời giúp sớm phát hiện vấn đề, nhờ đó đạt kết quả tốt hơn.',zh:'及时复习可以尽早发现问题，从而取得更好的成绩。',py:'Jíshí fùxí kěyǐ jǐnzǎo fāxiàn wèntí, cóng\'ér qǔdé gèng hǎo de chéngjì.'},
  {vi:'Lưu Lệ biết mình làm sai nên trốn đi không dám gặp tôi.',zh:'刘丽知道自己做得不对，躲起来不敢见我。',py:'Liú Lì zhīdào zìjǐ zuò de bú duì, duǒ qǐlai bù gǎn jiàn wǒ.'},
  {vi:'Động tác của các diễn viên vô cùng đẹp mắt.',zh:'演员们的动作十分优美。',py:'Yǎnyuánmen de dòngzuò shífēn yōuměi.'},
  {vi:'Để không bị kẻ xấu cướp mất, anh ấy chôn chiếc bình xuống đất giấu đi.',zh:'为了不被坏人抢走，他把壶埋入地下藏了起来。',py:'Wèile bú bèi huàirén qiǎngzǒu, tā bǎ hú máirù dìxià cángle qǐlai.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Trong nội thành Tế Nam ngày nay phân bố hơn bảy trăm suối tự nhiên lớn nhỏ.',zh:'如今的济南市区内，分布着大大小小七百多个天然泉。',py:'Rújīn de Jǐnán shìqū nèi, fēnbùzhe dàdàxiǎoxiǎo qībǎi duō ge tiānrán quán.'},
  {vi:'Anh ấy cứu một cụ già ngất xỉu bên đường.',zh:'他在路边救了一位晕倒的老人。',py:'Tā zài lù biān jiùle yí wèi yūndǎo de lǎorén.'},
  {vi:'Vẻ đẹp của suối Tế Nam còn được thể hiện qua những cái tên độc đáo.',zh:'济南泉水的优美，还可从那独特的名字上反映出来。',py:'Jǐnán quánshuǐ de yōuměi, hái kě cóng nà dútè de míngzi shang fǎnyìng chūlai.'},
  {vi:'Vận động có ích cho sức khoẻ.',zh:'运动有助于健康。',py:'Yùndòng yǒuzhù yú jiànkāng.'},
  {vi:'Ở vùng đá vôi như thế này, nước trên bề mặt đất liền rất dễ thấm xuống lòng đất.',zh:'在这种石灰岩地区，陆地表面的水很容易进入地下。',py:'Zài zhè zhǒng shíhuīyán dìqū, lùdì biǎomiàn de shuǐ hěn róngyì jìnrù dìxià.'},
  {vi:'Các đội viên đều cho rằng trình độ của đối phương cao hơn mình rất nhiều.',zh:'队员们都认为对方的水平远远高于自己。',py:'Duìyuánmen dōu rènwéi duìfāng de shuǐpíng yuǎnyuǎn gāo yú zìjǐ.'},
  {vi:'Nước ngầm gặp đá mác-ma chắn đường liền tích tụ lại, càng tích càng nhiều.',zh:'地下水碰到火成岩挡住了路，就积蓄起来，越积越多。',py:'Dìxiàshuǐ pèngdào huǒchéngyán dǎngzhùle lù, jiù jīxù qǐlai, yuè jī yuè duō.'},
  {vi:'Cô ấy có một trái tim đẹp và lương thiện.',zh:'她有一颗美丽善良的心。',py:'Tā yǒu yì kē měilì shànliáng de xīn.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// (chủ đề lấy từ 命题写作 của sách: “节约每一滴水”)
// ══════════════════════════════════════════
var writingData = {
  words:['天然','充满','感激','从而','如今'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề “Tiết kiệm từng giọt nước” (节约每一滴水) — đề 命题写作 ở phần 运用 của sách.',
  outline:[
    'Câu mở: nước quý giá thế nào với cuộc sống (dùng 天然).',
    'Thân 1: đối chiếu xưa – nay, nêu một hiện tượng lãng phí nước (dùng 充满, 如今).',
    'Thân 2: cách làm cụ thể để tiết kiệm nước và kết quả của nó (dùng 从而).',
    'Kết: bày tỏ lòng biết ơn với nước, kêu gọi mọi người (dùng 感激).'
  ],
  model:{
    zh:'水是大自然送给我们的天然礼物。以前，我家附近的小河里充满了干净的水。如今，河水越来越少了，可是很多人还在浪费水。节约用水并不难：洗菜的水可以用来浇花，刷牙时要关上水龙头，从而节约每一滴水。我们应该对水心存感激，保护好它。',
    py:'Shuǐ shì dà zìrán sòng gěi wǒmen de tiānrán lǐwù. Yǐqián, wǒ jiā fùjìn de xiǎo hé li chōngmǎnle gānjìng de shuǐ. Rújīn, héshuǐ yuè lái yuè shǎo le, kěshì hěn duō rén hái zài làngfèi shuǐ. Jiéyuē yòng shuǐ bìng bù nán: xǐ cài de shuǐ kěyǐ yònglái jiāo huā, shuāyá shí yào guānshang shuǐlóngtóu, cóng\'ér jiéyuē měi yì dī shuǐ. Wǒmen yīnggāi duì shuǐ xīn cún gǎnjī, bǎohù hǎo tā.',
    vn:'Nước là món quà tự nhiên mà thiên nhiên tặng cho chúng ta. Ngày trước, con sông nhỏ gần nhà tôi đầy ắp nước trong. Ngày nay nước sông ngày càng ít, vậy mà nhiều người vẫn đang lãng phí nước. Tiết kiệm nước không hề khó: nước rửa rau có thể dùng để tưới hoa, khi đánh răng phải khoá vòi nước, nhờ đó tiết kiệm được từng giọt nước. Chúng ta nên mang lòng biết ơn với nước và bảo vệ nó thật tốt.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có câu đối chiếu 以前……，如今…… và một câu 从而 nêu kết quả chưa?',
    'Có ít nhất một cấu trúc HSK 3–4 (越来越 / 只要……就 / 把) chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是“节约每一滴水”。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'天然', loai:'tính từ (làm định ngữ)', cach:'天然 + danh từ: 天然的礼物 · 天然泉水 · 天然食品',
     sai:[{re:'天然地', sua:'自然地', giai:'"Một cách tự nhiên" dùng 自然地; 天然 không làm trạng ngữ.'},
          {re:'(很|非常|十分|特别)天然', sua:'很自然', giai:'天然 là tính từ phân loại (có sẵn trong tự nhiên), thường không đi sau 很; muốn nói "rất tự nhiên" dùng 很自然.', nhe:true}]},
    {tu:'充满', loai:'động từ', cach:'充满 + danh từ: 充满了干净的水 · 对……充满信心 / 感激',
     sai:[{re:'充满(?=[。，！？,.!?]|$)', sua:'充满了……', giai:'充满 phải có tân ngữ theo sau (充满希望, 充满了水), không đứng cuối câu.'},
          {re:'(很|非常|十分)充满', sua:'充满', giai:'充满 là động từ, không đi sau 很/非常.'}]},
    {tu:'感激', loai:'động từ', cach:'对 + N + 心存感激 / 充满感激之情 · 感激 + người',
     sai:[{re:'感激给', sua:'感激……', giai:'Không nói 感激给 ai; 感激 mang thẳng tân ngữ (感激你) hoặc dùng 对你很感激.'},
          {re:'表示感激', sua:'表示感谢', giai:'Cụm cố định là 表示感谢; 感激 thiên về tình cảm trong lòng.', nhe:true}]},
    {tu:'从而', loai:'liên từ', cach:'(cách làm / nguyên nhân)，从而 + kết quả',
     sai:[{re:'(^|[。！？])从而', sua:'……，从而……', giai:'从而 nối hai vế trong CÙNG một câu, đứng đầu vế sau sau dấu phẩy — không mở đầu câu mới.'},
          {re:'从而(?=我们|你们|他们|大家|我|你|他|她)', sua:'……，从而 + động từ', giai:'Vế sau 从而 thường không có chủ ngữ riêng — dùng chung chủ ngữ với vế trước.', nhe:true}]},
    {tu:'如今', loai:'danh từ thời gian', cach:'以前……，如今…… · 如今的 + N',
     sai:[{re:'如今是[0-9一二三四五六七八九十两]+点', sua:'现在是……点', giai:'Nói giờ giấc dùng 现在; 如今 chỉ "ngày nay" đối chiếu với xưa.'},
          {re:'如今以来', sua:'如今 / ……以来', giai:'如今 đã có nghĩa "ngày nay", không ghép với 以来 (bài 2).', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'V + 起来 (gom lại / cất đi)', nhan:'起来', vd:'我们把洗菜的水收集起来，用来浇花。', khi:'Tả hành động gom, cất giữ — rất hợp đề tiết kiệm nước.'},
    {ten:'……，从而……', nhan:'从而', vd:'大家都随手关好水龙头，从而节约了很多水。', khi:'Nối cách làm với kết quả — thân đoạn.'},
    {ten:'V / Adj + 于 + N', nhan:'于', vd:'节约用水有助于保护环境。', khi:'Nêu tác dụng bằng giọng văn viết.'},
    {ten:'A 变为 B', nhan:'变为', vd:'如果不节约，清水也会变为脏水。', khi:'Tả sự biến đổi (为 đọc wéi).'},
    {ten:'以前……，如今……', nhan:'如今', vd:'以前河水很干净，如今却越来越脏了。', khi:'Đối chiếu xưa – nay, mở thân đoạn.'},
    {ten:'越来越 + Adj', nhan:'越来越', vd:'地球上的干净水越来越少。', khi:'Nhấn mạnh xu hướng — ôn HSK 3–4.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要每个人都节约一点儿，就能省下很多水。', khi:'Câu KẾT — lời kêu gọi.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['藏了','他把壶','起来','埋入地下'],
     dap:'他把壶埋入地下藏了起来。',
     vn:'Anh ấy chôn chiếc bình xuống đất giấu đi.',
     giai:'Câu 把: 他把壶 + 埋入地下 + 藏了起来. V + 起来 biểu thị từ lộ ra thành giấu kín.'},
    {manh:['济南市以南的','来自于','广大山区','济南的泉水'],
     dap:'济南的泉水来自于济南市以南的广大山区。',
     vn:'Nước suối Tế Nam đến từ vùng núi rộng lớn phía nam thành phố Tế Nam.',
     giai:'Chủ ngữ 济南的泉水 → động từ 来自于 → định ngữ 济南市以南的 → danh từ trung tâm 广大山区. 于 đứng ngay sau động từ.'},
    {manh:['从而','提高了产品质量','加强管理','公司通过'],
     dap:'公司通过加强管理，从而提高了产品质量。',
     vn:'Công ty thông qua tăng cường quản lý, nhờ đó nâng cao chất lượng sản phẩm.',
     giai:'通过 + cách làm ở vế trước; 从而 mở vế kết quả ở sau. 从而 không bao giờ đứng đầu câu.'},
    {manh:['可以','变为动力','压力','也'],
     dap:'压力也可以变为动力。',
     vn:'Áp lực cũng có thể biến thành động lực.',
     giai:'Chủ ngữ 压力 → 也可以 (phó từ + động từ năng nguyện) → 变为 + 动力. 为 đọc wéi, làm bổ ngữ sau 变.'},
    {manh:['充满','对未来','他','信心'],
     dap:'他对未来充满信心。',
     vn:'Anh ấy tràn đầy niềm tin vào tương lai.',
     giai:'对 + đối tượng đứng TRƯỚC động từ: 他 + 对未来 + 充满 + 信心.'},
    {manh:['分布着','七百多个','济南市区内','天然泉'],
     dap:'济南市区内分布着七百多个天然泉。',
     vn:'Trong nội thành Tế Nam phân bố hơn bảy trăm suối tự nhiên.',
     giai:'Câu tồn hiện: Nơi chốn + 分布着 + số lượng + danh từ. Nơi chốn đứng đầu câu, không cần 在.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论: 水与我们的生活 (tr. 54) + một câu về quê hương
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (ba câu đầu là 话题讨论 “水与我们的生活” của sách). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 天然 · 充满 · 从而 · 如今 · 传说 · 优美 · 独特.',
  questions:[
    {q_zh:'在我们的生活中，哪些事是离不开水的？',
     q_vn:'Trong cuộc sống của chúng ta, những việc nào không thể thiếu nước?',
     hint:'Liệt kê ít nhất 3 việc, dùng 连……都……',
     sample:'做饭、洗衣服、洗澡都离不开水。其实，连我们的身体都离不开水，一个人几天不喝水就会有生命危险。',
     sample_vn:'Nấu cơm, giặt quần áo, tắm rửa đều không thể thiếu nước. Thật ra ngay cả cơ thể chúng ta cũng không thể thiếu nước, một người mấy ngày không uống nước là sẽ nguy hiểm đến tính mạng.',
     note:'Liệt kê xong phải có một câu NÂNG Ý (连……都……) — câu trả lời sẽ có chiều sâu hơn.'},
    {q_zh:'地球上有些地方遇到了缺水的问题，你了解这方面的情况吗？',
     q_vn:'Một số nơi trên Trái Đất đang gặp vấn đề thiếu nước, em có biết tình hình này không?',
     hint:'Nêu một nơi cụ thể + nguyên nhân + ảnh hưởng, dùng 越来越',
     sample:'我知道越南湄公河三角洲有时候会缺水。天气越来越热，河水越来越少，老百姓的生活受到了很大的影响。',
     sample_vn:'Tôi biết đồng bằng sông Cửu Long có lúc bị thiếu nước. Trời ngày càng nóng, nước sông ngày càng ít, cuộc sống của người dân bị ảnh hưởng rất lớn.',
     note:'Nói về Việt Nam giúp em có nội dung cụ thể — giám khảo chấm cao phần có dẫn chứng.'},
    {q_zh:'你觉得哪些做法是对水的浪费？怎样可以减少这种浪费？',
     q_vn:'Em thấy những cách làm nào là lãng phí nước? Làm thế nào để giảm sự lãng phí đó?',
     hint:'Hai phần: lãng phí gì + cách giải quyết, dùng 只要……就…… hoặc 从而',
     sample:'刷牙的时候一直开着水龙头就是一种浪费。我们可以把洗菜的水收集起来浇花，从而减少浪费。',
     sample_vn:'Khi đánh răng mà để vòi nước chảy mãi chính là một kiểu lãng phí. Chúng ta có thể gom nước rửa rau lại để tưới hoa, nhờ đó giảm lãng phí.',
     note:'Câu hỏi có HAI vế — trả lời thiếu một vế là mất nửa điểm.'},
    {q_zh:'你的家乡有没有美丽的传说或者有名的风景？请介绍一下。',
     q_vn:'Quê em có truyền thuyết đẹp hay phong cảnh nổi tiếng nào không? Hãy giới thiệu một chút.',
     hint:'Mở bằng 相传……, kể theo trình tự thời gian',
     sample:'我的家乡是河内。相传很久以前，一位国王从湖里的神龟那儿借了一把宝剑，打败敌人以后，又把剑还给了神龟。所以这个湖叫“还剑湖”。',
     sample_vn:'Quê tôi là Hà Nội. Tương truyền rất lâu trước kia, một vị vua mượn thanh gươm báu từ Rùa thần dưới hồ, đánh thắng giặc rồi lại trả gươm cho Rùa thần. Vì thế hồ này tên là “Hồ Hoàn Kiếm”.',
     note:'Kể lại truyền thuyết giống hệt cách bài khoá kể về 趵突泉 — tận dụng 相传, 从……那儿, 把…….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại 1–8 lấy từ sách bài tập 《HSK标准教程5·练习册》bài 5.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án:
// 1–6 CDB BAB · 7–8 CD).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第5课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'你是要提醒我整理阳台吗？我没忘。'},
            {sp:'女',zh:'那你抓紧时间弄，今天太阳好，我想洗洗衣服。'}],
     q:'男的今天要做什么？',qvn:'Hôm nay người đàn ông phải làm gì?',
     opts:['洗衣服','晒被子','整理阳台','出去买东西'],ans:2,
     why:'Người đàn ông nói 你是要提醒我整理阳台吗？我没忘 — việc của anh là dọn ban công. 洗衣服 là việc NGƯỜI PHỤ NỮ muốn làm — bẫy chuyển vai quen thuộc của HSK.',
     words:[]},

    {n:2,
     lines:[{sp:'男',zh:'你感冒了，要多休息，这擦地的活儿我来干吧。'},
            {sp:'女',zh:'这点儿病算得了什么？再说了，我总觉得你擦得不干净。'}],
     q:'根据对话，可以知道什么？',qvn:'Theo đoạn hội thoại, có thể biết điều gì?',
     opts:['男的感冒了','女的病得很重','男的擦地擦得很干净','女的不想让男的擦地'],ans:3,
     why:'这点儿病算得了什么 (bệnh cỏn con có đáng gì) + 我总觉得你擦得不干净 → cô không muốn để chồng lau nhà. Người bị cảm là người phụ nữ, và bệnh không nặng.',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'暑假我打算带孩子去北京，那儿的名胜古迹多，风景也不错。'},
            {sp:'女',zh:'我哥哥家就在那儿，等我打个电话让他招待你们。'}],
     q:'女的为什么给哥哥打电话？',qvn:'Vì sao người phụ nữ gọi điện cho anh trai?',
     opts:['问哥哥身体怎么样','请哥哥招待男的一家','让哥哥来北京玩儿','告诉哥哥她要去旅游'],ans:1,
     why:'让他招待你们 = nhờ anh ấy tiếp đón các anh. Người đi Bắc Kinh là người đàn ông cùng con, không phải cô.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'国庆节你打算去哪儿玩儿？'},
            {sp:'女',zh:'去杭州，我大学同学结婚，我要去参加婚礼。回来路过苏州再玩儿两天。'}],
     q:'女的去苏州做什么？',qvn:'Người phụ nữ đến Tô Châu làm gì?',
     opts:['参加婚礼','旅游','看同学','工作'],ans:1,
     why:'Đi Hàng Châu (杭州) dự đám cưới; lúc về qua Tô Châu thì 再玩儿两天 — đi chơi. Bẫy: 参加婚礼 là việc ở Hàng Châu, không phải Tô Châu.',
     words:[]},

    {n:5,
     lines:[{sp:'男',zh:'这次去北京收获不小吧？'},
            {sp:'女',zh:'没错。长城、颐和园的风景真美，胡同也很特别，给我留下印象最深的还是北京烤鸭，味道棒极了。'}],
     q:'女的对北京的什么印象最深刻？',qvn:'Người phụ nữ ấn tượng sâu sắc nhất với cái gì ở Bắc Kinh?',
     opts:['北京烤鸭','长城','颐和园','胡同'],ans:0,
     why:'给我留下印象最深的还是北京烤鸭 — 还是 đánh dấu lựa chọn cuối cùng. Trường Thành, Di Hoà Viên, ngõ hẻm chỉ được khen qua — đều là bẫy vì được nhắc trước.',
     words:[]},

    {n:6,
     lines:[{sp:'男',zh:'苏州有个叫山塘的地方，不知你这次有没有去看看？'},
            {sp:'女',zh:'当然，我还坐了那里的游船，体会了一下“小桥流水人家”的感觉，很有味道。'}],
     q:'女的觉得山塘怎么样？',qvn:'Người phụ nữ thấy Sơn Đường thế nào?',
     opts:['人太多了','很有味道','没什么特别的','交通不方便'],ans:1,
     why:'很有味道 = rất có nét riêng, rất có "hồn". 小桥流水人家 là câu thơ tả cảnh sông nước Giang Nam — nghe câu thơ để đoán thái độ KHEN.',
     words:[]},

    {n:7,
     lines:[{sp:'男',zh:'你来中国留学两年了，利用假期去过不少地方了吧？'},
            {sp:'女',zh:'中国的名胜古迹很多，风景优美的地方太多了。'},
            {sp:'男',zh:'那你最喜欢的地方是哪里？'},
            {sp:'女',zh:'我觉得四川的黄龙风景最美，到了那儿，真像是到了童话世界。'}],
     q:'女的觉得四川的黄龙怎么样？',qvn:'Người phụ nữ thấy Hoàng Long ở Tứ Xuyên thế nào?',
     opts:['名胜古迹很多','交通很方便','风景特别美','历史很悠久'],ans:2,
     why:'黄龙风景最美，像是到了童话世界 — phong cảnh đẹp như thế giới cổ tích. 名胜古迹很多 là cô nói về Trung Quốc nói chung, không riêng Hoàng Long.',
     words:['优美']},

    {n:8,
     lines:[{sp:'男',zh:'姥姥，您来了些日子了，今天正好有空儿，我陪您去故宫转转？'},
            {sp:'女',zh:'故宫人太多，我这腿脚又不方便，还是别去了。'},
            {sp:'男',zh:'那我陪您看电影去吧？'},
            {sp:'女',zh:'好哇！我最爱看电影了！'}],
     q:'关于姥姥，从对话中可以知道什么？',qvn:'Về bà ngoại, từ đoạn hội thoại có thể biết điều gì?',
     opts:['刚来北京一天','很想去故宫','身体很健康','喜欢看电影'],ans:3,
     why:'我最爱看电影了 → thích xem phim. 来了些日子了 (đến được mấy hôm rồi) loại A; 还是别去了 loại B; 腿脚不方便 loại C.',
     words:[]}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Một bạn nước ngoài hỏi em về quê hương.',
     a:{sp:'Bạn',zh:'你的家乡有什么好玩儿的地方吗？',vn:'Quê cậu có chỗ nào hay không?'},
     need:['Dùng 历史悠久 hoặc 风景优美','Nêu một điểm ĐỘC ĐÁO (dùng 独特)'],
     sample:'我的家乡有一座历史悠久的古城，那里的建筑很独特，风景也很优美。',
     samplePy:'Wǒ de jiāxiāng yǒu yí zuò lìshǐ yōujiǔ de gǔchéng, nàli de jiànzhù hěn dútè, fēngjǐng yě hěn yōuměi.',
     sampleVn:'Quê tôi có một phố cổ lâu đời, kiến trúc ở đó rất độc đáo, phong cảnh cũng rất đẹp.',
     tip:'悠久 chỉ dùng cho lịch sử, văn hoá, truyền thống — đừng nói 风景很悠久.'},

    {scene:'Bạn cùng lớp thắc mắc vì sao Tế Nam lại có nhiều suối như vậy.',
     a:{sp:'Bạn',zh:'济南为什么有那么多泉水？',vn:'Sao Tế Nam lại có nhiều suối thế?'},
     need:['Dùng 从而 hoặc 形成','Giải thích ít nhất HAI nguyên nhân'],
     sample:'因为地下水被火成岩挡住了路，积蓄起来，旧城一带地势又低，地下水就冲出地表，从而形成了众多的泉水。',
     samplePy:'Yīnwèi dìxiàshuǐ bèi huǒchéngyán dǎngzhùle lù, jīxù qǐlai, jiùchéng yídài dìshì yòu dī, dìxiàshuǐ jiù chōngchū dìbiǎo, cóng\'ér xíngchéngle zhòngduō de quánshuǐ.',
     sampleVn:'Vì nước ngầm bị đá mác-ma chắn đường nên tích tụ lại, mà khu phố cổ địa thế lại thấp, nước ngầm liền xông lên khỏi mặt đất, nhờ đó tạo thành vô số dòng suối.',
     tip:'从而 dẫn KẾT QUẢ cuối cùng — đặt ở vế sau cùng, không đặt đầu câu.'},

    {scene:'Hôm trước em bị ngất, bác hàng xóm đưa em đi viện. Hôm nay em sang cảm ơn.',
     a:{sp:'Bác hàng xóm',zh:'哎呀，你怎么还专门来一趟？',vn:'Ôi, sao cháu còn cất công sang tận đây?'},
     need:['Dùng 表示感谢 hoặc 感激','Nói rõ bác đã giúp gì'],
     sample:'那天我晕倒了，是您把我送到医院的。我这次来是想当面向您表示感谢，我们全家都很感激您。',
     samplePy:'Nà tiān wǒ yūndǎo le, shì nín bǎ wǒ sòngdào yīyuàn de. Wǒ zhè cì lái shì xiǎng dāngmiàn xiàng nín biǎoshì gǎnxiè, wǒmen quán jiā dōu hěn gǎnjī nín.',
     sampleVn:'Hôm đó cháu bị ngất, là bác đưa cháu đến bệnh viện. Lần này cháu sang là muốn trực tiếp cảm ơn bác, cả nhà cháu đều rất biết ơn bác.',
     tip:'表示感谢 là cụm cố định (nói ra lời cảm ơn); 感激 nói tình cảm trong lòng. Với người lớn tuổi xưng 您.'},

    {scene:'Mẹ thấy em để vòi nước chảy mãi khi đánh răng.',
     a:{sp:'Mẹ',zh:'刷牙的时候别一直开着水龙头！',vn:'Đánh răng thì đừng để vòi nước chảy mãi!'},
     need:['Nhận lỗi','Dùng 起来 hoặc 从而 để nói cách tiết kiệm'],
     sample:'对不起，妈妈。以后我先用杯子把水接起来再刷牙，从而节约用水。',
     samplePy:'Duìbuqǐ, māma. Yǐhòu wǒ xiān yòng bēizi bǎ shuǐ jiē qǐlai zài shuāyá, cóng\'ér jiéyuē yòng shuǐ.',
     sampleVn:'Con xin lỗi mẹ. Sau này con sẽ hứng nước vào cốc trước rồi mới đánh răng, như vậy tiết kiệm được nước.',
     tip:'接起来 = hứng lại, gom lại — 起来 ở đây biểu thị "từ phân tán thành tập trung", đúng điểm ngữ pháp của bài.'},

    {scene:'Bạn Trung Quốc hỏi em về truyền thuyết của Việt Nam.',
     a:{sp:'Bạn',zh:'越南有没有什么美丽的传说？',vn:'Việt Nam có truyền thuyết nào đẹp không?'},
     need:['Dùng 传说 hoặc 相传','Kể ngắn 2–3 câu theo đúng trình tự'],
     sample:'有啊。相传很久以前，一位国王从湖里的神龟那儿借了一把宝剑，打败敌人以后又把剑还给了神龟，所以那个湖就叫“还剑湖”。',
     samplePy:'Yǒu a. Xiāngchuán hěn jiǔ yǐqián, yí wèi guówáng cóng hú li de shénguī nàr jièle yì bǎ bǎojiàn, dǎbài dírén yǐhòu yòu bǎ jiàn huán gěile shénguī, suǒyǐ nàge hú jiù jiào “Huánjiàn Hú”.',
     sampleVn:'Có chứ. Tương truyền rất lâu trước kia, một vị vua mượn thanh gươm báu từ Rùa thần dưới hồ, đánh thắng giặc rồi lại trả gươm cho Rùa thần, vì thế hồ đó tên là “Hồ Hoàn Kiếm”.',
     tip:'相传很久以前…… là câu mở truyền thuyết y như bài khoá. 从 + người + 那儿 = từ chỗ ai.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// Hai câu đều đúng ngữ pháp — chọn câu PHÙ HỢP HƠN với hoàn cảnh.
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Bài này có nhiều từ văn viết (于, 为, 从而, 如今) — rất hợp để luyện cảm giác "văn viết hay khẩu ngữ".',
  items: [
    {scene:'Em viết bài giới thiệu du lịch đăng trên trang web của trường.',
     a:'济南的泉水来自于济南市以南的广大山区。',b:'济南的泉水是从济南南边的山里来的。',better:'a',
     why:'来自于, 广大山区 là văn viết, hợp bài giới thiệu. Câu b không sai nhưng nghe như đang nói chuyện.'},

    {scene:'Em giải thích cho em trai học lớp 3.',
     a:'这些泉水是从南边的山里来的，流到城里就冒出来了。',b:'这些泉水来自于南部山区，流至市区后冲出地表。',better:'a',
     why:'Nói với trẻ nhỏ phải dùng khẩu ngữ đơn giản; 来自于, 流至, 冲出地表 quá sách vở với em lớp 3.'},

    {scene:'Em viết bài văn so sánh quê hương xưa và nay để nộp cho cô.',
     a:'以前这里是一片农田，如今已经变为热闹的小城了。',b:'以前这里是一片农田，现在变成热闹的小城了。',better:'a',
     why:'Bài văn nên dùng 如今, 变为 — giọng văn viết. Câu b đúng nhưng khẩu ngữ hơn.'},

    {scene:'Em nhắn tin cảm ơn bạn thân đã cho mượn vở.',
     a:'谢谢你啊，帮了我大忙！',b:'对于你的帮助，我充满感激之情。',better:'a',
     why:'Với bạn thân, câu b quá trang trọng, nghe như thư cảm ơn chính thức — lại thành xa cách.'},

    {scene:'Cả nhà em viết thư cảm ơn bác sĩ đã cứu ông.',
     a:'谢谢你啊，医生！',b:'对于您的救治，我们全家充满感激之情。',better:'b',
     why:'Thư cảm ơn gửi bác sĩ là văn bản trang trọng: xưng 您, dùng 充满感激之情. Câu a hợp nói miệng hơn.'},

    {scene:'Em thuyết trình trước lớp về cách suối Tế Nam hình thành.',
     a:'地下水积蓄起来以后，从地势低的地方冲出地表，从而形成了泉水。',b:'地下的水越来越多，就从低的地方冒出来了，就有了泉水。',better:'a',
     why:'Thuyết trình khoa học cần từ chính xác: 积蓄, 地势, 冲出地表, 从而形成. Câu b đúng nhưng khẩu ngữ, lại lặp 就.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Theo bài tập 4 của sách: 根据下面的提示词复述课文内容 (tr. 53)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong sách: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở', cue:'济南的泉水，历史……，最早的文字记载……', words:['悠久','文字','记载']},
    {step:'Suối được yêu mến', cue:'文人们对泉水进行过……，留下了……；老百姓对泉水……', words:['描写','赞美','诗','老百姓','充满','感激','传说']},
    {step:'Truyền thuyết “天下第一泉”', cue:'相传鲍全……救了……从龙王那儿求到……为了不被……', words:['鲍全','善良','救','晕','东海龙王','玉','壶','抢','埋','藏','趵突泉']},
    {step:'Những cái tên đẹp', cue:'如今济南市区内分布着……；名字很独特，如……', words:['如今','分布','天然','优美','独特','反映','舜','珍珠']},
    {step:'Hình thành (1)', cue:'泉水来自于……山区的岩石是……石灰岩层以……的角度……', words:['于','广大','岩石','亿','石灰岩','地区','表面','角度','斜']},
    {step:'Hình thành (2)', cue:'地下岩石变为……碰到……挡住……旧城一带地势低……冲出地表……', words:['为','火成岩','碰','挡','地势','冲','形成','济南']}
  ],
  checklist: [
    'Kể đủ ba phần: vẻ đẹp – truyền thuyết – nguyên nhân hình thành chưa?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Phần nguyên nhân có đúng trình tự: đá vôi → nghiêng → đá mác-ma chặn → địa thế thấp → phun lên không?',
    'Có dùng 起来 / 于 / 从而 / 为 ít nhất hai lần không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 52) + 扩展 · 做一做 (tr. 54)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['于','为','充满','从而','产生','描写'],
   cau:[
     {s:'这首诗主要＿＿了一对年轻人的恋爱经历。', dap:['描写']},
     {s:'新产品很受顾客欢迎，使我对公司的未来＿＿信心。', dap:['充满']},
     {s:'我担心长期吃这种药会对身体＿＿不好的影响。', dap:['产生']},
     {s:'办公室让我通知你明天下午的活动改＿＿下周一了。', dap:['为']},
     {s:'刘经理毕业＿＿北京大学经济学院。', dap:['于']},
     {s:'换一个角度考虑，也许正好就能发现问题的关键，＿＿找到解决问题的答案。', dap:['从而']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'＿＿是五点，再过一刻钟小明就放学了。', opts:['如今','现在'], ans:1, giai:'Nói giờ giấc cụ thể → 现在. 如今 chỉ "ngày nay" đối chiếu với quá khứ, không dùng cho giờ.'},
     {s:'严芳长得不是＿＿漂亮，但仔细看却很有味道。', opts:['特别','独特'], ans:0, giai:'Cần phó từ chỉ mức độ đứng trước tính từ 漂亮 → 特别. 独特 là tính từ "độc đáo", không bổ nghĩa cho tính từ khác.'},
     {s:'我这次来是想当面向你表示＿＿的。', opts:['感谢','感激'], ans:0, giai:'表示感谢 là cụm cố định (bày tỏ lời cảm ơn). 感激 nhấn mạnh tình cảm trong lòng, hay đi với 充满/心存.'},
     {s:'护士小姐＿＿女儿很勇敢，本来很怕打针的她这次竟然没哭。', opts:['赞美','表扬'], ans:1, giai:'Khen hành vi cụ thể của một đứa trẻ → 表扬. 赞美 là ca ngợi trang trọng (phong cảnh, phẩm chất lớn lao), không hợp ở đây.'}
   ]},
  {kieu:'kho', de:'从上表中选择合适的词语填空（扩展 · 文学）', vn:'Chọn từ trong bảng từ vựng chủ đề “Văn học” để điền vào chỗ trống',
   tu:['作品','诗','传说','神话','戏剧','风格','形象','魅力','生动'],
   cau:[
     {s:'这个电视剧取材于一个＿＿传说。', dap:['神话']},
     {s:'咱家的装修＿＿搭配这样的家具很合适。', dap:['风格']},
     {s:'作者正是以这座大山为背景，写下了这个＿＿感人的神话故事。', dap:['生动']},
     {s:'嗓音直接影响着别人对我们的印象，好听的嗓音会让一个人更有＿＿。', dap:['魅力']}
   ]}
];
