// ══════════════════════════════════════════
// DATA — HSK5 Bài 7: 成语故事两则 (Hai câu chuyện thành ngữ)
// Unit 3 倾听故事 · Nguồn: HSK标准教程5上 (tr. 66–74) + sách bài tập bài 7
// Hai bài khoá: 课文一 盲人摸象 · 课文二 精诚所至，金石为开
// ══════════════════════════════════════════

var vocabData = [
  // ───────── 课文一 · 盲人摸象 ─────────
  {n:1,zh:'成语',py:'chéngyǔ',pos:'Danh từ',vn:'thành ngữ',hv:'thành ngữ',em:'📜',lesson:1,
   explain:['Cụm từ cố định (thường 4 chữ), phần lớn có nguồn gốc từ truyện cổ, sách xưa; mỗi thành ngữ gói một bài học hay một đạo lý.'],
   usage:'Lượng từ: 一个成语. Hay gặp: 成语故事, 用成语, 这个成语的意思是…….',
   collo:['成语故事','一个成语','用成语','学成语'],
   ex_zh:'我最喜欢听爷爷讲成语故事。',ex_py:'Wǒ zuì xǐhuan tīng yéye jiǎng chéngyǔ gùshi.',ex_vn:'Tôi thích nhất là nghe ông kể chuyện thành ngữ.',
   exList:[
     {zh:'我最喜欢听爷爷讲成语故事。',py:'Wǒ zuì xǐhuan tīng yéye jiǎng chéngyǔ gùshi.',vn:'Tôi thích nhất là nghe ông kể chuyện thành ngữ.'},
     {zh:'“精诚所至，金石为开”这一成语也便由此流传下来。',py:'"Jīngchéng suǒ zhì, jīnshí wéi kāi" zhè yì chéngyǔ yě biàn yóucǐ liúchuán xiàlái.',vn:'Thành ngữ "lòng thành cảm động cả đá vàng" cũng từ đó mà lưu truyền đến nay.'},
     {zh:'写作文的时候用几个成语，文章会更生动。',py:'Xiě zuòwén de shíhou yòng jǐ ge chéngyǔ, wénzhāng huì gèng shēngdòng.',vn:'Khi viết văn dùng vài thành ngữ thì bài văn sẽ sinh động hơn.'}
   ],
   colloFull:[
     {zh:'成语故事',py:'chéngyǔ gùshi',vn:'truyện thành ngữ'},
     {zh:'一个成语',py:'yí ge chéngyǔ',vn:'một thành ngữ'},
     {zh:'用成语',py:'yòng chéngyǔ',vn:'dùng thành ngữ'},
     {zh:'学成语',py:'xué chéngyǔ',vn:'học thành ngữ'},
     {zh:'成语的意思',py:'chéngyǔ de yìsi',vn:'nghĩa của thành ngữ'}
   ],
   patterns:[
     {s:'“……”这个成语的意思是……',m:'Giải thích nghĩa của một thành ngữ'},
     {s:'用 + 成语 + 来 + V',m:'Dùng thành ngữ để … (用成语来说明道理)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần hiểu câu chuyện thì sẽ nhớ được thành ngữ này.',answer:'只要听懂了这个故事，就能记住这个成语。',answerPy:'Zhǐyào tīngdǒngle zhège gùshi, jiù néng jìzhù zhège chéngyǔ.',
      note:'只要 đứng đầu vế điều kiện, 就 đứng trước động từ vế sau; 记住 là động từ + bổ ngữ kết quả.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi học tiếng Trung được ba năm, càng ngày càng thích thành ngữ.',answer:'我学了三年汉语，越来越喜欢成语了。',answerPy:'Wǒ xuéle sān nián Hànyǔ, yuè lái yuè xǐhuan chéngyǔ le.',
      note:'越来越 + động từ tâm lý/tính từ, cuối câu thường có 了 báo sự thay đổi.',pair:'越来越'}
   ]},

  {n:2,zh:'则',py:'zé',pos:'Lượng từ',vn:'mẩu, bản (tin, truyện)',hv:'tắc',em:'📰',lesson:1,
   explain:['Lượng từ cho những đoạn văn có đầu có cuối, tự thành một đoạn hay một mục: truyện ngắn, tin tức, quảng cáo, nhật ký.','Mang sắc thái VĂN VIẾT; khẩu ngữ hay dùng 个/条/篇.'],
   usage:'两则成语故事, 一则新闻, 一则广告, 一则日记. Không dùng cho người hay đồ vật cụ thể.',
   collo:['两则故事','一则新闻','一则广告','一则日记'],
   ex_zh:'今天我们学习两则成语故事。',ex_py:'Jīntiān wǒmen xuéxí liǎng zé chéngyǔ gùshi.',ex_vn:'Hôm nay chúng ta học hai mẩu chuyện thành ngữ.',
   exList:[
     {zh:'今天我们学习两则成语故事。',py:'Jīntiān wǒmen xuéxí liǎng zé chéngyǔ gùshi.',vn:'Hôm nay chúng ta học hai mẩu chuyện thành ngữ.'},
     {zh:'我在报纸上看到了一则有意思的新闻。',py:'Wǒ zài bàozhǐ shang kàndàole yì zé yǒu yìsi de xīnwén.',vn:'Tôi đọc được một mẩu tin thú vị trên báo.'},
     {zh:'这则广告是谁写的？连我奶奶都记住了。',py:'Zhè zé guǎnggào shì shéi xiě de? Lián wǒ nǎinai dōu jìzhù le.',vn:'Mẩu quảng cáo này ai viết thế? Đến bà tôi cũng nhớ.'}
   ],
   colloFull:[
     {zh:'两则故事',py:'liǎng zé gùshi',vn:'hai mẩu chuyện'},
     {zh:'一则新闻',py:'yì zé xīnwén',vn:'một mẩu tin'},
     {zh:'一则广告',py:'yì zé guǎnggào',vn:'một mẩu quảng cáo'},
     {zh:'一则日记',py:'yì zé rìjì',vn:'một trang nhật ký'},
     {zh:'一则寓言',py:'yì zé yùyán',vn:'một truyện ngụ ngôn'}
   ],
   patterns:[
     {s:'Số từ + 则 + 故事 / 新闻 / 广告 / 日记',m:'Đếm những đoạn văn tự thành một mục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẩu tin này là tôi đọc được trên mạng.',answer:'这则新闻是我在网上看到的。',answerPy:'Zhè zé xīnwén shì wǒ zài wǎng shang kàndào de.',
      note:'则 đếm mẩu tin; 是……的 nhấn mạnh nơi chốn của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Hai mẩu chuyện này đến em trai tôi cũng hiểu.',answer:'这两则故事连我弟弟都看得懂。',answerPy:'Zhè liǎng zé gùshi lián wǒ dìdi dōu kàn de dǒng.',
      note:'Tân ngữ 这两则故事 đưa lên đầu câu; 连……都 nhấn mạnh "đến cả".',pair:'连……都……'}
   ]},

  {n:3,zh:'盲人',py:'mángrén',pos:'Danh từ',vn:'người mù',hv:'manh nhân',em:'🦯',lesson:1,
   explain:['Người không nhìn thấy. 盲 (manh – mù) + 人. Cách nói trung tính, lịch sự hơn 瞎子.'],
   usage:'Hay gặp: 盲人摸象 (thầy bói xem voi), 盲人朋友, 帮助盲人. Lượng từ 个/位.',
   collo:['盲人摸象','一位盲人','帮助盲人','盲人朋友'],
   ex_zh:'国王叫盲人们去摸一摸大象。',ex_py:'Guówáng jiào mángrénmen qù mō yi mō dàxiàng.',ex_vn:'Nhà vua bảo những người mù đi sờ thử con voi.',
   exList:[
     {zh:'国王叫盲人们去摸一摸大象。',py:'Guówáng jiào mángrénmen qù mō yi mō dàxiàng.',vn:'Nhà vua bảo những người mù đi sờ thử con voi.'},
     {zh:'过马路的时候，他扶着一位盲人慢慢地走。',py:'Guò mǎlù de shíhou, tā fúzhe yí wèi mángrén mànmàn de zǒu.',vn:'Khi qua đường, cậu ấy dìu một người mù đi chầm chậm.'},
     {zh:'只看到一点就下结论，就像盲人摸象一样。',py:'Zhǐ kàndào yìdiǎn jiù xià jiélùn, jiù xiàng mángrén mō xiàng yíyàng.',vn:'Mới thấy một chút đã kết luận thì chẳng khác gì thầy bói xem voi.'}
   ],
   colloFull:[
     {zh:'盲人摸象',py:'mángrén mō xiàng',vn:'thầy bói xem voi'},
     {zh:'一位盲人',py:'yí wèi mángrén',vn:'một người mù'},
     {zh:'帮助盲人',py:'bāngzhù mángrén',vn:'giúp đỡ người mù'},
     {zh:'盲人朋友',py:'mángrén péngyou',vn:'những người bạn khiếm thị'}
   ],
   patterns:[
     {s:'……，就像盲人摸象一样',m:'Nhìn phiến diện, như thầy bói xem voi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người mù được binh lính đưa đến trước mặt nhà vua.',answer:'盲人被士兵带到了国王面前。',answerPy:'Mángrén bèi shìbīng dàidàole guówáng miànqián.',
      note:'Câu bị động 被 + người làm + động từ + 到 + nơi chốn.',pair:'被'},
     {promptLang:'vi',prompt:'Người mù nào cũng cho rằng mình đúng, đến nhà vua cũng phải bật cười.',answer:'每个盲人都认为自己是对的，连国王都笑了。',answerPy:'Měi ge mángrén dōu rènwéi zìjǐ shì duì de, lián guówáng dōu xiào le.',
      note:'每个……都……; 连 + người + 都 nhấn mạnh "đến cả".',pair:'连……都……'}
   ]},

  {n:4,zh:'摸',py:'mō',pos:'Động từ',vn:'sờ, mò',hv:'mô',em:'✋',lesson:1,
   explain:['Dùng tay chạm nhẹ hoặc xoa lên vật gì đó.','Nghĩa mở rộng: mò, dò tìm (摸钥匙, 摸不着头脑 – chẳng hiểu mô tê gì).'],
   usage:'摸 + tân ngữ; hay đi với bổ ngữ: 摸到, 摸出(来), 摸一摸. Theo sách: 摸到……/摸出(来)…….',
   collo:['摸一摸','摸到','摸出来','摸头'],
   ex_zh:'摸到尾巴的盲人说，“它像一条绳子。”',ex_py:'Mōdào wěiba de mángrén shuō, "Tā xiàng yì tiáo shéngzi."',ex_vn:'Người mù sờ trúng cái đuôi nói: "Nó giống một sợi dây thừng."',
   exList:[
     {zh:'摸到尾巴的盲人说，“它像一条绳子。”',py:'Mōdào wěiba de mángrén shuō, "Tā xiàng yì tiáo shéngzi."',vn:'Người mù sờ trúng cái đuôi nói: "Nó giống một sợi dây thừng."'},
     {zh:'他在口袋里摸了半天，才摸出一把钥匙。',py:'Tā zài kǒudai li mōle bàntiān, cái mō chū yì bǎ yàoshi.',vn:'Anh ấy mò trong túi hồi lâu mới lôi ra được một chiếc chìa khoá.'},
     {zh:'妈妈摸了摸我的头，说：“别担心。”',py:'Māma mōle mō wǒ de tóu, shuō: "Bié dānxīn."',vn:'Mẹ xoa đầu tôi, nói: "Đừng lo."'}
   ],
   colloFull:[
     {zh:'摸一摸',py:'mō yi mō',vn:'sờ thử'},
     {zh:'摸到',py:'mōdào',vn:'sờ trúng, sờ thấy'},
     {zh:'摸出来',py:'mō chūlái',vn:'mò ra, lôi ra'},
     {zh:'摸头',py:'mō tóu',vn:'xoa đầu'},
     {zh:'摸不着头脑',py:'mō bu zháo tóunǎo',vn:'chẳng hiểu đầu đuôi ra sao'}
   ],
   patterns:[
     {s:'摸 + 到 + N',m:'Sờ trúng … (摸到了大象的耳朵)'},
     {s:'从 + nơi + 摸出(来) + N',m:'Mò lấy ra … từ đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người mù vừa sờ vào tai voi đã nói nó giống cái quạt.',answer:'盲人一摸到大象的耳朵，就说它像一把扇子。',answerPy:'Mángrén yì mōdào dàxiàng de ěrduo, jiù shuō tā xiàng yì bǎ shànzi.',
      note:'一……就……: vừa … là …; 摸到 = sờ trúng.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi mò khắp túi mà chẳng mò ra được gì.',answer:'我把口袋摸了个遍，什么也没摸出来。',answerPy:'Wǒ bǎ kǒudai mōle ge biàn, shénme yě méi mō chūlái.',
      note:'Câu 把: 把 + 口袋 + 摸了个遍; 什么也没 + V: không … gì cả.',pair:'把'}
   ]},

  {n:5,zh:'大象',py:'dàxiàng',pos:'Danh từ',vn:'con voi',hv:'đại tượng',em:'🐘',lesson:1,
   explain:['Loài thú lớn nhất trên cạn, vòi dài, tai to. Sách ghi (大)象: nói 象 hay 大象 đều được, khẩu ngữ hay nói 大象.'],
   usage:'Lượng từ hay dùng: 一头大象 (khẩu ngữ cũng nói 一只大象). Thành ngữ: 盲人摸象.',
   collo:['一头大象','大象的鼻子','大象的耳朵','摸大象'],
   ex_zh:'他让士兵们去找一头大象。',ex_py:'Tā ràng shìbīngmen qù zhǎo yì tóu dàxiàng.',ex_vn:'Ông sai binh lính đi tìm một con voi.',
   exList:[
     {zh:'他让士兵们去找一头大象。',py:'Tā ràng shìbīngmen qù zhǎo yì tóu dàxiàng.',vn:'Ông sai binh lính đi tìm một con voi.'},
     {zh:'大象的耳朵又大又薄，像一把扇子。',py:'Dàxiàng de ěrduo yòu dà yòu báo, xiàng yì bǎ shànzi.',vn:'Tai voi vừa to vừa mỏng, giống một chiếc quạt.'},
     {zh:'在动物园里，孩子们最喜欢看大象。',py:'Zài dòngwùyuán li, háizimen zuì xǐhuan kàn dàxiàng.',vn:'Ở vườn bách thú, bọn trẻ thích xem voi nhất.'}
   ],
   colloFull:[
     {zh:'一头大象',py:'yì tóu dàxiàng',vn:'một con voi'},
     {zh:'大象的鼻子',py:'dàxiàng de bízi',vn:'vòi voi'},
     {zh:'大象的耳朵',py:'dàxiàng de ěrduo',vn:'tai voi'},
     {zh:'摸大象',py:'mō dàxiàng',vn:'sờ voi'}
   ],
   patterns:[
     {s:'一头 + 大象 / 牛',m:'Lượng từ 头 cho gia súc, thú lớn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ sờ vào voi thật.',answer:'我从来没摸过真的大象。',answerPy:'Wǒ cónglái méi mōguo zhēn de dàxiàng.',
      note:'从来没 + V + 过: chưa từng bao giờ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Con voi này không chỉ to mà còn rất hiền.',answer:'这头大象不仅很大，也很温和。',answerPy:'Zhè tóu dàxiàng bùjǐn hěn dà, yě hěn wēnhé.',
      note:'Lượng từ 头 cho voi; 不仅……也……: không những … mà còn ….',pair:'不仅……也……'}
   ]},

  {n:6,zh:'智慧',py:'zhìhuì',pos:'Danh từ',vn:'trí tuệ, sự sáng suốt',hv:'trí tuệ',em:'💡',lesson:1,
   explain:['Khả năng hiểu biết, phân tích và giải quyết vấn đề một cách sáng suốt.','Âm Hán–Việt "trí tuệ" trùng nghĩa tiếng Việt.'],
   usage:'很有智慧, 人民的智慧, 充满智慧. Làm định ngữ: 智慧的国王. Không dùng 很智慧 (thiếu 有).',
   collo:['很有智慧','充满智慧','人民的智慧','智慧的人'],
   ex_zh:'很久以前，有一个很有智慧的国王。',ex_py:'Hěn jiǔ yǐqián, yǒu yí ge hěn yǒu zhìhuì de guówáng.',ex_vn:'Ngày xửa ngày xưa, có một vị vua rất sáng suốt.',
   exList:[
     {zh:'很久以前，有一个很有智慧的国王。',py:'Hěn jiǔ yǐqián, yǒu yí ge hěn yǒu zhìhuì de guówáng.',vn:'Ngày xửa ngày xưa, có một vị vua rất sáng suốt.'},
     {zh:'成语里充满了古人的智慧。',py:'Chéngyǔ li chōngmǎnle gǔrén de zhìhuì.',vn:'Trong thành ngữ chứa đầy trí tuệ của người xưa.'},
     {zh:'遇到困难不要抱怨，要用智慧去解决。',py:'Yùdào kùnnan búyào bàoyuàn, yào yòng zhìhuì qù jiějué.',vn:'Gặp khó khăn đừng than phiền, hãy dùng trí tuệ để giải quyết.'}
   ],
   colloFull:[
     {zh:'很有智慧',py:'hěn yǒu zhìhuì',vn:'rất sáng suốt, rất thông thái'},
     {zh:'充满智慧',py:'chōngmǎn zhìhuì',vn:'đầy trí tuệ'},
     {zh:'人民的智慧',py:'rénmín de zhìhuì',vn:'trí tuệ của nhân dân'},
     {zh:'智慧的人',py:'zhìhuì de rén',vn:'người thông thái'},
     {zh:'用智慧解决',py:'yòng zhìhuì jiějué',vn:'dùng trí tuệ giải quyết'}
   ],
   patterns:[
     {s:'很 / 非常 + 有 + 智慧',m:'Rất sáng suốt (智慧 là danh từ nên cần 有)'},
     {s:'用 + 智慧 + V',m:'Dùng trí tuệ để …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà vua tuy không nói nhiều nhưng rất sáng suốt.',answer:'国王虽然话不多，但是很有智慧。',answerPy:'Guówáng suīrán huà bù duō, dànshì hěn yǒu zhìhuì.',
      note:'智慧 là danh từ: phải nói 很有智慧, không nói 很智慧.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Càng đọc nhiều sách, con người càng có trí tuệ.',answer:'书读得越多，人就越有智慧。',answerPy:'Shū dú de yuè duō, rén jiù yuè yǒu zhìhuì.',
      note:'越……越……: càng … càng …; 有智慧 làm vị ngữ.',pair:'越来越'}
   ]},

  {n:7,zh:'士兵',py:'shìbīng',pos:'Danh từ',vn:'binh lính',hv:'sĩ binh',em:'💂',lesson:1,
   explain:['Người lính trong quân đội. Văn viết dùng 士兵, khẩu ngữ hay nói 兵 / 当兵.'],
   usage:'一名士兵, 士兵们. Lượng từ trang trọng là 名.',
   collo:['一名士兵','士兵们','带着士兵','保护士兵'],
   ex_zh:'士兵们分别去不同地方寻找。',ex_py:'Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo.',ex_vn:'Binh lính chia nhau đi tìm ở những nơi khác nhau.',
   exList:[
     {zh:'士兵们分别去不同地方寻找。',py:'Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo.',vn:'Binh lính chia nhau đi tìm ở những nơi khác nhau.'},
     {zh:'士兵们都紧张地围了上来，想要保护他。',py:'Shìbīngmen dōu jǐnzhāng de wéile shànglái, xiǎng yào bǎohù tā.',vn:'Binh lính đều căng thẳng vây lại, muốn bảo vệ ông.'},
     {zh:'我哥哥是一名士兵，每年只能回家一次。',py:'Wǒ gēge shì yì míng shìbīng, měi nián zhǐ néng huí jiā yí cì.',vn:'Anh tôi là một người lính, mỗi năm chỉ về nhà được một lần.'}
   ],
   colloFull:[
     {zh:'一名士兵',py:'yì míng shìbīng',vn:'một người lính'},
     {zh:'士兵们',py:'shìbīngmen',vn:'các binh lính'},
     {zh:'带着士兵',py:'dàizhe shìbīng',vn:'dẫn theo binh lính'},
     {zh:'保护士兵',py:'bǎohù shìbīng',vn:'bảo vệ binh lính'}
   ],
   patterns:[
     {s:'一名 + 士兵 / 学生 / 医生',m:'Lượng từ trang trọng 名 cho người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà vua bảo binh lính mang con voi về.',answer:'国王让士兵们把大象带回来。',answerPy:'Guówáng ràng shìbīngmen bǎ dàxiàng dài huílái.',
      note:'Câu kiêm ngữ 让 + người + V lồng câu 把: 把 + 大象 + 带回来.',pair:'把'},
     {promptLang:'vi',prompt:'Binh lính vừa thấy con hổ liền vây lại.',answer:'士兵们一看到老虎，就围了上来。',answerPy:'Shìbīngmen yí kàndào lǎohǔ, jiù wéile shànglái.',
      note:'一……就……; 围上来 là bổ ngữ xu hướng.',pair:'一……就……'}
   ]},

  {n:8,zh:'瞎',py:'xiā',pos:'Động từ / Phó từ',vn:'bị mù; (làm) bừa, bậy, vô ích',hv:'hạt',em:'🙈',lesson:1,
   explain:['Động từ: mắt không nhìn thấy (眼睛瞎了).','Phó từ (khẩu ngữ): làm việc gì KHÔNG có lý do, không căn cứ hoặc không có tác dụng — 瞎说 (nói bậy), 瞎担心 (lo hão), 瞎忙 (bận vô ích). Đây là điểm ngữ pháp của bài.'],
   usage:'Động từ: 眼睛瞎了. Phó từ: 瞎 + động từ (瞎说, 瞎猜, 瞎担心, 瞎着急). Phó từ 瞎 mang sắc thái KHẨU NGỮ, hơi chê trách.',
   collo:['眼睛瞎了','瞎说','瞎担心','瞎猜'],
   ex_zh:'他让士兵们去找一些出生时眼睛就瞎了的人回来。',ex_py:'Tā ràng shìbīngmen qù zhǎo yìxiē chūshēng shí yǎnjing jiù xiā le de rén huílái.',ex_vn:'Ông sai binh lính đi tìm về mấy người bị mù từ lúc mới sinh.',
   exList:[
     {zh:'他让士兵们去找一些出生时眼睛就瞎了的人回来。',py:'Tā ràng shìbīngmen qù zhǎo yìxiē chūshēng shí yǎnjing jiù xiā le de rén huílái.',vn:'Ông sai binh lính đi tìm về mấy người bị mù từ lúc mới sinh.'},
     {zh:'别听他瞎说，不用害怕。',py:'Bié tīng tā xiā shuō, búyòng hàipà.',vn:'Đừng nghe cậu ta nói bậy, không cần sợ.'},
     {zh:'他自己的问题，他会想办法的，你就别替他瞎担心了。',py:'Tā zìjǐ de wèntí, tā huì xiǎng bànfǎ de, nǐ jiù bié tì tā xiā dānxīn le.',vn:'Chuyện của cậu ấy thì cậu ấy sẽ tự tìm cách, cậu đừng lo hão thay cậu ấy nữa.'}
   ],
   colloFull:[
     {zh:'眼睛瞎了',py:'yǎnjing xiā le',vn:'mắt bị mù'},
     {zh:'瞎说',py:'xiā shuō',vn:'nói bậy, nói bừa'},
     {zh:'瞎担心',py:'xiā dānxīn',vn:'lo hão'},
     {zh:'瞎猜',py:'xiā cāi',vn:'đoán mò'},
     {zh:'瞎着急',py:'xiā zháojí',vn:'sốt ruột vô ích'}
   ],
   patterns:[
     {s:'别 + 瞎 + V (了)',m:'Đừng … bừa / … vô ích (别瞎说, 别瞎担心了)'},
     {s:'N + 瞎了',m:'(Mắt) bị mù'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng đoán mò nữa, kết quả thi là do thầy công bố.',answer:'别瞎猜了，考试结果是老师公布的。',answerPy:'Bié xiā cāi le, kǎoshì jiéguǒ shì lǎoshī gōngbù de.',
      note:'Phó từ 瞎 đứng trước động từ 猜; 是……的 nhấn mạnh người làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy mắt bị mù nhưng ông ấy nghe rất giỏi.',answer:'虽然他的眼睛瞎了，但是耳朵特别灵。',answerPy:'Suīrán tā de yǎnjing xiā le, dànshì ěrduo tèbié líng.',
      note:'瞎 ở đây là động từ (bị mù), sau nó có 了.',pair:'虽然……但是……'}
   ]},

  {n:9,zh:'分别',py:'fēnbié',pos:'Phó từ / Động từ / Danh từ',vn:'riêng rẽ, từng người; chia tay; sự khác biệt',hv:'phân biệt',em:'🔀',lesson:1,
   explain:['Phó từ: mỗi người/mỗi bên làm riêng (分别去不同地方); hoặc liệt kê lần lượt từng cái (分别是茶、可乐和咖啡).','Động từ: chia tay, xa nhau (分别了二十年). Danh từ: chỗ khác nhau (有什么分别).','BẪY Hán–Việt: "phân biệt" tiếng Việt là phân biệt đối xử / nhận ra chỗ khác — tiếng Trung nói 区别/分辨.'],
   usage:'Phó từ đứng trước động từ: 分别找, 分别是. Động từ: 跟……分别. Danh từ: 有/没有分别.',
   collo:['分别去','分别是','分别占','跟朋友分别','没有分别'],
   ex_zh:'士兵们分别去不同地方寻找。',ex_py:'Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo.',ex_vn:'Binh lính chia nhau đi tìm ở những nơi khác nhau.',
   exList:[
     {zh:'士兵们分别去不同地方寻找。',py:'Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo.',vn:'Binh lính chia nhau đi tìm ở những nơi khác nhau.'},
     {zh:'一张桌子上放着三瓶饮料，分别是茶、可乐和咖啡。',py:'Yì zhāng zhuōzi shang fàngzhe sān píng yǐnliào, fēnbié shì chá, kělè hé kāfēi.',vn:'Trên bàn có ba chai đồ uống, lần lượt là trà, cô-ca và cà phê.'},
     {zh:'分别是暂时的，我们以后一定会再见。',py:'Fēnbié shì zànshí de, wǒmen yǐhòu yídìng huì zài jiàn.',vn:'Chia tay chỉ là tạm thời, sau này chúng ta nhất định sẽ gặp lại.'}
   ],
   colloFull:[
     {zh:'分别去',py:'fēnbié qù',vn:'chia nhau đi'},
     {zh:'分别是',py:'fēnbié shì',vn:'lần lượt là'},
     {zh:'分别占',py:'fēnbié zhàn',vn:'lần lượt chiếm'},
     {zh:'跟朋友分别',py:'gēn péngyou fēnbié',vn:'chia tay bạn bè'},
     {zh:'没有分别',py:'méiyǒu fēnbié',vn:'không có gì khác nhau'}
   ],
   patterns:[
     {s:'A 和 B + 分别 + V',m:'A và B mỗi người làm riêng …'},
     {s:'……，分别是 X、Y 和 Z',m:'Liệt kê lần lượt từng thứ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi lần lượt hỏi hai người về chuyện này, lời họ nói đều giống nhau.',answer:'我分别找两个人打听了这件事，他们的说法都是一样的。',answerPy:'Wǒ fēnbié zhǎo liǎng ge rén dǎtingle zhè jiàn shì, tāmen de shuōfǎ dōu shì yíyàng de.',
      note:'Phó từ 分别 đứng trước động từ 找; câu lấy từ phần chú thích của sách.',pair:'是……的'},
     {promptLang:'vi',prompt:'Từ khi tốt nghiệp đến giờ chúng tôi đã xa nhau 20 năm, chưa từng liên lạc.',answer:'从毕业到现在，我们已经分别二十年了，从来没联系过。',answerPy:'Cóng bìyè dào xiànzài, wǒmen yǐjīng fēnbié èrshí nián le, cónglái méi liánxìguo.',
      note:'分别 là động từ (xa nhau), thời lượng đặt sau: 分别二十年了.',pair:'从来没……过'}
   ]},

  {n:10,zh:'寻找',py:'xúnzhǎo',pos:'Động từ',vn:'tìm, tìm kiếm',hv:'tầm trảo',em:'🔎',lesson:1,
   explain:['= 找 nhưng trang trọng, thiên về văn viết; thường tìm thứ khó tìm, mất nhiều công sức hoặc trừu tượng (cơ hội, thông tin, người thân).'],
   usage:'Tân ngữ theo sách: 寻找机会 / 信息 / 亲人 / 人才. Giọng trang trọng nên không dùng trong câu khẩu ngữ ngắn kiểu 找一下; kết quả tìm được có thể nói 寻找到 (寻找到最终的结论).',
   collo:['寻找机会','寻找信息','寻找亲人','寻找人才'],
   ex_zh:'士兵们分别去不同地方寻找。',ex_py:'Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo.',ex_vn:'Binh lính chia nhau đi tìm ở những nơi khác nhau.',
   exList:[
     {zh:'士兵们分别去不同地方寻找。',py:'Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo.',vn:'Binh lính chia nhau đi tìm ở những nơi khác nhau.'},
     {zh:'他在四处寻找，但至今仍然没有结果。',py:'Tā zài sìchù xúnzhǎo, dàn zhìjīn réngrán méiyǒu jiéguǒ.',vn:'Anh ấy tìm khắp nơi nhưng đến giờ vẫn chưa có kết quả.'},
     {zh:'很多年轻人来大城市寻找机会。',py:'Hěn duō niánqīngrén lái dà chéngshì xúnzhǎo jīhuì.',vn:'Nhiều người trẻ lên thành phố lớn tìm kiếm cơ hội.'}
   ],
   colloFull:[
     {zh:'寻找机会',py:'xúnzhǎo jīhuì',vn:'tìm kiếm cơ hội'},
     {zh:'寻找信息',py:'xúnzhǎo xìnxī',vn:'tìm kiếm thông tin'},
     {zh:'寻找亲人',py:'xúnzhǎo qīnrén',vn:'tìm người thân'},
     {zh:'寻找人才',py:'xúnzhǎo réncái',vn:'tìm kiếm nhân tài'},
     {zh:'四处寻找',py:'sìchù xúnzhǎo',vn:'tìm khắp nơi'}
   ],
   patterns:[
     {s:'寻找 + 机会 / 信息 / 亲人 / 人才',m:'Tìm kiếm thứ khó tìm, trừu tượng'},
     {s:'到处 / 四处 + 寻找',m:'Tìm khắp nơi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì tìm kiếm thì nhất định sẽ tìm thấy cơ hội.',answer:'只要坚持寻找，就一定能找到机会。',answerPy:'Zhǐyào jiānchí xúnzhǎo, jiù yídìng néng zhǎodào jīhuì.',
      note:'寻找 dùng cho quá trình tìm; kết quả tìm được dùng 找到.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy đã tìm con gái hai mươi năm, nhưng ông ấy chưa từng bỏ cuộc.',answer:'虽然他寻找女儿找了二十年，但是从来没放弃过。',answerPy:'Suīrán tā xúnzhǎo nǚ\'ér zhǎole èrshí nián, dànshì cónglái méi fàngqìguo.',
      note:'Động từ có tân ngữ + thời lượng: lặp động từ (寻找女儿找了二十年).',pair:'虽然……但是……'}
   ]},

  {n:11,zh:'牙齿',py:'yáchǐ',pos:'Danh từ',vn:'răng',hv:'nha xỉ',em:'🦷',lesson:1,
   explain:['Răng (từ đầy đủ, hơi trang trọng); khẩu ngữ hay nói 牙. Trong bài: "răng" của voi chính là cái ngà.'],
   usage:'一颗牙齿, 刷牙, 保护牙齿, 牙齿很白.',
   collo:['一颗牙齿','保护牙齿','牙齿很白','摸到牙齿'],
   ex_zh:'摸到牙齿的盲人说：“我觉得像一个角。”',ex_py:'Mōdào yáchǐ de mángrén shuō: "Wǒ juéde xiàng yí ge jiǎo."',ex_vn:'Người mù sờ trúng cái ngà nói: "Tôi thấy nó giống một cái sừng."',
   exList:[
     {zh:'摸到牙齿的盲人说：“我觉得像一个角。”',py:'Mōdào yáchǐ de mángrén shuō: "Wǒ juéde xiàng yí ge jiǎo."',vn:'Người mù sờ trúng cái ngà nói: "Tôi thấy nó giống một cái sừng."'},
     {zh:'少吃糖，才能保护好牙齿。',py:'Shǎo chī táng, cái néng bǎohù hǎo yáchǐ.',vn:'Ăn ít đường thì mới bảo vệ tốt được răng.'},
     {zh:'你这颗牙连牙根都坏了，平时难道不疼吗？',py:'Nǐ zhè kē yá lián yágēn dōu huài le, píngshí nándào bù téng ma?',vn:'Cái răng này của cậu hỏng đến tận chân răng rồi, bình thường không đau à?'}
   ],
   colloFull:[
     {zh:'一颗牙齿',py:'yì kē yáchǐ',vn:'một cái răng'},
     {zh:'保护牙齿',py:'bǎohù yáchǐ',vn:'bảo vệ răng'},
     {zh:'牙齿很白',py:'yáchǐ hěn bái',vn:'răng rất trắng'},
     {zh:'摸到牙齿',py:'mōdào yáchǐ',vn:'sờ trúng răng (ngà)'}
   ],
   patterns:[
     {s:'一颗 + 牙齿',m:'Lượng từ 颗 cho răng, hạt nhỏ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Răng bà tôi càng ngày càng kém.',answer:'我奶奶的牙齿越来越不好了。',answerPy:'Wǒ nǎinai de yáchǐ yuè lái yuè bù hǎo le.',
      note:'越来越 + 不好: càng ngày càng kém; 了 cuối câu báo thay đổi.',pair:'越来越'},
     {promptLang:'vi',prompt:'Bác sĩ đã nhổ cái răng hỏng đó rồi.',answer:'医生把那颗坏牙齿拔掉了。',answerPy:'Yīshēng bǎ nà kē huài yáchǐ bádiào le.',
      note:'Câu 把: 把 + 那颗坏牙齿 + 拔掉了.',pair:'把'}
   ]},

  {n:12,zh:'胡说',py:'húshuō',pos:'Động từ',vn:'nói bậy, nói bừa',hv:'hồ thuyết',em:'🤥',lesson:1,
   explain:['Nói điều không có căn cứ, không đúng sự thật. Thường dùng một mình như câu cảm thán: 胡说！ (Nói bậy!) — giọng mạnh, có thể thiếu lịch sự.'],
   usage:'胡说！ / 别胡说 / 胡说八道 (nói nhảm). Gần nghĩa 瞎说 nhưng 胡说 nặng hơn.',
   collo:['别胡说','胡说八道','不要胡说'],
   ex_zh:'“胡说！”摸到尾巴的盲人说。',ex_py:'"Húshuō!" Mōdào wěiba de mángrén shuō.',ex_vn:'"Nói bậy!" người mù sờ trúng cái đuôi nói.',
   exList:[
     {zh:'“胡说！”摸到尾巴的盲人说。',py:'"Húshuō!" Mōdào wěiba de mángrén shuō.',vn:'"Nói bậy!" người mù sờ trúng cái đuôi nói.'},
     {zh:'没有证据的话，你不要胡说。',py:'Méiyǒu zhèngjù de huà, nǐ búyào húshuō.',vn:'Không có bằng chứng thì cậu đừng có nói bừa.'},
     {zh:'他在网上胡说八道，被很多人批评了。',py:'Tā zài wǎng shang húshuō bādào, bèi hěn duō rén pīpíng le.',vn:'Anh ta nói nhảm trên mạng, bị rất nhiều người phê bình.'}
   ],
   colloFull:[
     {zh:'别胡说',py:'bié húshuō',vn:'đừng nói bậy'},
     {zh:'胡说八道',py:'húshuō bādào',vn:'nói nhảm nhí'},
     {zh:'不要胡说',py:'búyào húshuō',vn:'không được nói bừa'},
     {zh:'简直是胡说',py:'jiǎnzhí shì húshuō',vn:'đúng là nói láo'}
   ],
   patterns:[
     {s:'胡说！',m:'Câu cảm thán phản bác mạnh: Nói bậy!'},
     {s:'别 / 不要 + 胡说',m:'Đừng nói bừa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này đến cậu còn không biết, đừng nói bừa.',answer:'这件事连你都不知道，别胡说。',answerPy:'Zhè jiàn shì lián nǐ dōu bù zhīdào, bié húshuō.',
      note:'连……都 nhấn mạnh; 别胡说 = đừng nói bậy.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Anh ta vì nói bậy mà bị thầy phê bình.',answer:'他因为胡说被老师批评了。',answerPy:'Tā yīnwèi húshuō bèi lǎoshī pīpíng le.',
      note:'Câu bị động 被 + người + V + 了.',pair:'被'}
   ]},

  {n:13,zh:'尾巴',py:'wěiba',pos:'Danh từ',vn:'cái đuôi',hv:'vĩ ba',em:'🐕',lesson:1,
   explain:['Phần mọc ở cuối thân động vật. 巴 đọc nhẹ (thanh nhẹ).'],
   usage:'Lượng từ theo sách: 一根/一条尾巴. Động từ hay đi kèm: 摇尾巴 (vẫy đuôi).',
   collo:['一条尾巴','摇尾巴','摸到尾巴','长长的尾巴'],
   ex_zh:'摸到尾巴的盲人说，“它像一条绳子。”',ex_py:'Mōdào wěiba de mángrén shuō, "Tā xiàng yì tiáo shéngzi."',ex_vn:'Người mù sờ trúng cái đuôi nói: "Nó giống một sợi dây thừng."',
   exList:[
     {zh:'摸到尾巴的盲人说，“它像一条绳子。”',py:'Mōdào wěiba de mángrén shuō, "Tā xiàng yì tiáo shéngzi."',vn:'Người mù sờ trúng cái đuôi nói: "Nó giống một sợi dây thừng."'},
     {zh:'每天我一回家，可爱的小狗就摇着尾巴冲我跑过来。',py:'Měi tiān wǒ yì huí jiā, kě\'ài de xiǎogǒu jiù yáozhe wěiba chòng wǒ pǎo guòlái.',vn:'Ngày nào tôi vừa về nhà là chú chó nhỏ đáng yêu lại vẫy đuôi chạy về phía tôi.'},
     {zh:'这只猫的尾巴又长又软。',py:'Zhè zhī māo de wěiba yòu cháng yòu ruǎn.',vn:'Đuôi con mèo này vừa dài vừa mềm.'}
   ],
   colloFull:[
     {zh:'一条尾巴',py:'yì tiáo wěiba',vn:'một cái đuôi'},
     {zh:'一根尾巴',py:'yì gēn wěiba',vn:'một cái đuôi'},
     {zh:'摇尾巴',py:'yáo wěiba',vn:'vẫy đuôi'},
     {zh:'摸到尾巴',py:'mōdào wěiba',vn:'sờ trúng đuôi'},
     {zh:'长长的尾巴',py:'chángcháng de wěiba',vn:'cái đuôi dài thượt'}
   ],
   patterns:[
     {s:'摇着尾巴 + V',m:'Vẫy đuôi làm gì (摇着尾巴跑过来)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chú chó vừa thấy tôi là vẫy đuôi.',answer:'小狗一看见我就摇尾巴。',answerPy:'Xiǎogǒu yí kànjiàn wǒ jiù yáo wěiba.',
      note:'一……就……; 摇尾巴 = vẫy đuôi (không dùng 摸).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đuôi con mèo bị cửa kẹp phải.',answer:'猫的尾巴被门夹住了。',answerPy:'Māo de wěiba bèi mén jiāzhù le.',
      note:'Bị động 被 + 门 + 夹住了.',pair:'被'}
   ]},

  {n:14,zh:'绳子',py:'shéngzi',pos:'Danh từ',vn:'dây thừng, sợi dây',hv:'thằng tử',em:'🪢',lesson:1,
   explain:['Sợi dây bện bằng sợi, rơm, ni-lông… dùng để buộc, trói.'],
   usage:'Lượng từ theo sách: 一根/一条绳子. Động từ: 拉绳子, 用绳子绑.',
   collo:['一条绳子','一根绳子','用绳子','拉绳子'],
   ex_zh:'它像一条绳子。',ex_py:'Tā xiàng yì tiáo shéngzi.',ex_vn:'Nó giống một sợi dây thừng.',
   exList:[
     {zh:'它像一条绳子。',py:'Tā xiàng yì tiáo shéngzi.',vn:'Nó giống một sợi dây thừng.'},
     {zh:'摸到尾巴的盲人说大象像一根绳子。',py:'Mōdào wěiba de mángrén shuō dàxiàng xiàng yì gēn shéngzi.',vn:'Người mù sờ trúng đuôi nói con voi giống một sợi dây thừng.'},
     {zh:'这么美丽的图画竟然是用绳子做的！',py:'Zhème měilì de túhuà jìngrán shì yòng shéngzi zuò de!',vn:'Bức tranh đẹp thế này lại được làm bằng dây thừng!'}
   ],
   colloFull:[
     {zh:'一条绳子',py:'yì tiáo shéngzi',vn:'một sợi dây'},
     {zh:'一根绳子',py:'yì gēn shéngzi',vn:'một sợi dây'},
     {zh:'用绳子',py:'yòng shéngzi',vn:'dùng dây'},
     {zh:'拉绳子',py:'lā shéngzi',vn:'kéo dây'}
   ],
   patterns:[
     {s:'用 + 绳子 + 把 + N + 绑起来',m:'Dùng dây buộc … lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy dùng một sợi dây buộc đống sách lại.',answer:'他用一根绳子把书绑起来了。',answerPy:'Tā yòng yì gēn shéngzi bǎ shū bǎng qǐlái le.',
      note:'Lượng từ 根 cho vật dài mảnh; câu 把 + 绑起来.',pair:'把'},
     {promptLang:'vi',prompt:'Bức tranh này là làm bằng dây thừng.',answer:'这幅画是用绳子做的。',answerPy:'Zhè fú huà shì yòng shéngzi zuò de.',
      note:'是……的 nhấn mạnh chất liệu/cách thức: 是用绳子做的.',pair:'是……的'}
   ]},

  {n:15,zh:'平',py:'píng',pos:'Tính từ',vn:'bằng phẳng',hv:'bình',em:'📏',lesson:1,
   explain:['Mặt không lồi lõm, không nghiêng (路很平, 桌面很平).','Còn có nghĩa ngang bằng, hoà: 打平 (hoà trận).'],
   usage:'又高又平的墙, 路很平, 把……弄平 / 放平.',
   collo:['又高又平','路很平','放平','平平的'],
   ex_zh:'我觉得像一面又高又平的墙。',ex_py:'Wǒ juéde xiàng yí miàn yòu gāo yòu píng de qiáng.',ex_vn:'Tôi thấy nó giống một bức tường vừa cao vừa phẳng.',
   exList:[
     {zh:'我觉得像一面又高又平的墙。',py:'Wǒ juéde xiàng yí miàn yòu gāo yòu píng de qiáng.',vn:'Tôi thấy nó giống một bức tường vừa cao vừa phẳng.'},
     {zh:'这条新修的路又宽又平，骑车特别舒服。',py:'Zhè tiáo xīn xiū de lù yòu kuān yòu píng, qí chē tèbié shūfu.',vn:'Con đường mới làm này vừa rộng vừa phẳng, đạp xe cực kỳ dễ chịu.'},
     {zh:'请把纸放平，别折了。',py:'Qǐng bǎ zhǐ fàngpíng, bié zhé le.',vn:'Hãy đặt tờ giấy cho phẳng, đừng gập lại.'}
   ],
   colloFull:[
     {zh:'又高又平',py:'yòu gāo yòu píng',vn:'vừa cao vừa phẳng'},
     {zh:'路很平',py:'lù hěn píng',vn:'đường rất bằng'},
     {zh:'放平',py:'fàngpíng',vn:'đặt cho phẳng'},
     {zh:'平平的',py:'píngpíng de',vn:'phẳng lì'}
   ],
   patterns:[
     {s:'又 + A1 + 又 + 平',m:'Vừa … vừa phẳng'},
     {s:'把 + N + V + 平',m:'Làm cho … phẳng (把纸放平)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy đặt cuốn sách cho phẳng rồi hẵng viết.',answer:'请把书放平再写。',answerPy:'Qǐng bǎ shū fàngpíng zài xiě.',
      note:'平 làm bổ ngữ kết quả trong câu 把: 把书放平.',pair:'把'},
     {promptLang:'vi',prompt:'Con đường này không chỉ rộng mà còn rất phẳng.',answer:'这条路不仅很宽，也很平。',answerPy:'Zhè tiáo lù bùjǐn hěn kuān, yě hěn píng.',
      note:'平 làm vị ngữ tính từ, cần 很.',pair:'不仅……也……'}
   ]},

  {n:16,zh:'墙',py:'qiáng',pos:'Danh từ',vn:'(bức) tường',hv:'tường',em:'🧱',lesson:1,
   explain:['Bức tường ngăn nhà, bao quanh sân vườn. Âm Hán–Việt "tường" trùng nghĩa.'],
   usage:'Lượng từ: 一面墙 / 一堵墙. Hay gặp: 墙上挂着……, 靠在墙上.',
   collo:['一面墙','墙上','靠着墙','又高又平的墙'],
   ex_zh:'我觉得像一面又高又平的墙。',ex_py:'Wǒ juéde xiàng yí miàn yòu gāo yòu píng de qiáng.',ex_vn:'Tôi thấy nó giống một bức tường vừa cao vừa phẳng.',
   exList:[
     {zh:'我觉得像一面又高又平的墙。',py:'Wǒ juéde xiàng yí miàn yòu gāo yòu píng de qiáng.',vn:'Tôi thấy nó giống một bức tường vừa cao vừa phẳng.'},
     {zh:'教室的墙上挂着一张中国地图。',py:'Jiàoshì de qiáng shang guàzhe yì zhāng Zhōngguó dìtú.',vn:'Trên tường lớp học treo một tấm bản đồ Trung Quốc.'},
     {zh:'他累得靠在墙上就睡着了。',py:'Tā lèi de kào zài qiáng shang jiù shuìzháo le.',vn:'Cậu ấy mệt đến nỗi tựa vào tường là ngủ luôn.'}
   ],
   colloFull:[
     {zh:'一面墙',py:'yí miàn qiáng',vn:'một bức tường'},
     {zh:'墙上',py:'qiáng shang',vn:'trên tường'},
     {zh:'靠着墙',py:'kàozhe qiáng',vn:'tựa vào tường'},
     {zh:'又高又平的墙',py:'yòu gāo yòu píng de qiáng',vn:'bức tường vừa cao vừa phẳng'}
   ],
   patterns:[
     {s:'墙上 + V + 着 + N',m:'Câu tồn hiện: trên tường có … (墙上挂着地图)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tấm ảnh gia đình trên tường là bố tôi treo.',answer:'墙上的全家福是我爸爸挂的。',answerPy:'Qiáng shang de quánjiāfú shì wǒ bàba guà de.',
      note:'墙上 = trên tường; 是……的 nhấn mạnh người làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Bức tường bị bọn trẻ vẽ bẩn hết rồi.',answer:'墙被孩子们画脏了。',answerPy:'Qiáng bèi háizimen huàzāng le.',
      note:'被 + người + V + bổ ngữ kết quả (画脏).',pair:'被'}
   ]},

  {n:17,zh:'扇子',py:'shànzi',pos:'Danh từ',vn:'(cái) quạt',hv:'phiến tử',em:'🪭',lesson:1,
   explain:['Cái quạt cầm tay. 扇 đọc shàn khi là danh từ; đọc shān khi là động từ "quạt" (扇扇子 shān shànzi).'],
   usage:'Lượng từ: 一把扇子. Động từ: 扇扇子 (quạt).',
   collo:['一把扇子','扇扇子','像一把扇子'],
   ex_zh:'不，你们都错了，应该是像一把扇子。',ex_py:'Bù, nǐmen dōu cuò le, yīnggāi shì xiàng yì bǎ shànzi.',ex_vn:'Không, các anh đều sai rồi, phải là giống một chiếc quạt.',
   exList:[
     {zh:'不，你们都错了，应该是像一把扇子。',py:'Bù, nǐmen dōu cuò le, yīnggāi shì xiàng yì bǎ shànzi.',vn:'Không, các anh đều sai rồi, phải là giống một chiếc quạt.'},
     {zh:'停电了，奶奶拿着扇子给孙子扇风。',py:'Tíngdiàn le, nǎinai názhe shànzi gěi sūnzi shān fēng.',vn:'Mất điện, bà cầm quạt quạt cho cháu.'},
     {zh:'这把扇子是我从杭州买回来的。',py:'Zhè bǎ shànzi shì wǒ cóng Hángzhōu mǎi huílái de.',vn:'Chiếc quạt này là tôi mua từ Hàng Châu về.'}
   ],
   colloFull:[
     {zh:'一把扇子',py:'yì bǎ shànzi',vn:'một chiếc quạt'},
     {zh:'扇扇子',py:'shān shànzi',vn:'phe phẩy quạt'},
     {zh:'像一把扇子',py:'xiàng yì bǎ shànzi',vn:'giống một chiếc quạt'},
     {zh:'拿着扇子',py:'názhe shànzi',vn:'cầm quạt'}
   ],
   patterns:[
     {s:'一把 + 扇子 / 椅子 / 钥匙',m:'Lượng từ 把 cho đồ vật có tay cầm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc quạt này là bà tặng tôi.',answer:'这把扇子是奶奶送给我的。',answerPy:'Zhè bǎ shànzi shì nǎinai sòng gěi wǒ de.',
      note:'Lượng từ 把; 是……的 nhấn mạnh người tặng.',pair:'是……的'},
     {promptLang:'vi',prompt:'Trời càng ngày càng nóng, ai cũng cầm quạt.',answer:'天气越来越热，大家都拿着扇子。',answerPy:'Tiānqì yuè lái yuè rè, dàjiā dōu názhe shànzi.',
      note:'越来越 + tính từ; 拿着 + N: đang cầm.',pair:'越来越'}
   ]},

  {n:18,zh:'片面',py:'piànmiàn',pos:'Tính từ',vn:'phiến diện',hv:'phiến diện',em:'🧩',lesson:1,
   explain:['Chỉ nhìn thấy một phía, một phần, không toàn diện. Trái nghĩa: 全面. Âm Hán–Việt "phiến diện" trùng nghĩa.'],
   usage:'Làm định ngữ: 片面的认识/看法. Làm trạng ngữ (theo sách): 片面(地) + 看 / 认为.',
   collo:['片面的认识','片面的看法','片面地看问题','很片面'],
   ex_zh:'只有片面的认识是不能下结论的。',ex_py:'Zhǐyǒu piànmiàn de rènshi shì bù néng xià jiélùn de.',ex_vn:'Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận được.',
   exList:[
     {zh:'只有片面的认识是不能下结论的。',py:'Zhǐyǒu piànmiàn de rènshi shì bù néng xià jiélùn de.',vn:'Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận được.'},
     {zh:'不能这样片面地看问题，而要多方面地考虑。',py:'Bù néng zhèyàng piànmiàn de kàn wèntí, ér yào duō fāngmiàn de kǎolǜ.',vn:'Không thể nhìn vấn đề phiến diện như vậy, mà phải suy xét nhiều mặt.'},
     {zh:'只看一次考试成绩就说他不努力，这太片面了。',py:'Zhǐ kàn yí cì kǎoshì chéngjì jiù shuō tā bù nǔlì, zhè tài piànmiàn le.',vn:'Chỉ nhìn điểm một lần thi đã bảo cậu ấy không chăm, thế thì phiến diện quá.'}
   ],
   colloFull:[
     {zh:'片面的认识',py:'piànmiàn de rènshi',vn:'nhận thức phiến diện'},
     {zh:'片面的看法',py:'piànmiàn de kànfǎ',vn:'cách nhìn phiến diện'},
     {zh:'片面地看问题',py:'piànmiàn de kàn wèntí',vn:'nhìn vấn đề phiến diện'},
     {zh:'片面地认为',py:'piànmiàn de rènwéi',vn:'cho rằng một cách phiến diện'},
     {zh:'很片面',py:'hěn piànmiàn',vn:'rất phiến diện'}
   ],
   patterns:[
     {s:'片面(地) + 看 / 认为',m:'Nhìn nhận / cho rằng một cách phiến diện'},
     {s:'这太片面了',m:'Như thế phiến diện quá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nhìn vấn đề phiến diện là sẽ đưa ra kết luận sai.',answer:'只要片面地看问题，就会下错误的结论。',answerPy:'Zhǐyào piànmiàn de kàn wèntí, jiù huì xià cuòwù de jiélùn.',
      note:'片面地 làm trạng ngữ trước động từ 看.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy cách nhìn của cậu ấy hơi phiến diện nhưng cũng có chỗ đúng.',answer:'虽然他的看法有点儿片面，但是也有对的地方。',answerPy:'Suīrán tā de kànfǎ yǒudiǎnr piànmiàn, dànshì yě yǒu duì de dìfang.',
      note:'有点儿 + tính từ mang nghĩa tiêu cực: 有点儿片面.',pair:'虽然……但是……'}
   ]},

  {n:19,zh:'结论',py:'jiélùn',pos:'Danh từ',vn:'kết luận',hv:'kết luận',em:'✅',lesson:1,
   explain:['Nhận định cuối cùng rút ra sau khi suy xét, nghiên cứu. Âm Hán–Việt trùng nghĩa.'],
   usage:'Động từ đi kèm: 下结论 (đưa ra kết luận — KHÔNG nói 做结论 theo lối tiếng Việt "làm kết luận"), 得出结论, 最终的结论.',
   collo:['下结论','得出结论','最终的结论','研究结论'],
   ex_zh:'只有片面的认识是不能下结论的。',ex_py:'Zhǐyǒu piànmiàn de rènshi shì bù néng xià jiélùn de.',ex_vn:'Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận được.',
   exList:[
     {zh:'只有片面的认识是不能下结论的。',py:'Zhǐyǒu piànmiàn de rènshi shì bù néng xià jiélùn de.',vn:'Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận được.'},
     {zh:'相信你一定能寻找到最终的结论。',py:'Xiāngxìn nǐ yídìng néng xúnzhǎo dào zuìzhōng de jiélùn.',vn:'Tin rằng bạn nhất định sẽ tìm ra kết luận cuối cùng.'},
     {zh:'事情还没调查清楚，先别急着下结论。',py:'Shìqing hái méi diàochá qīngchu, xiān bié jízhe xià jiélùn.',vn:'Sự việc còn chưa điều tra rõ, khoan hãy vội kết luận.'}
   ],
   colloFull:[
     {zh:'下结论',py:'xià jiélùn',vn:'đưa ra kết luận'},
     {zh:'得出结论',py:'déchū jiélùn',vn:'rút ra kết luận'},
     {zh:'最终的结论',py:'zuìzhōng de jiélùn',vn:'kết luận cuối cùng'},
     {zh:'研究结论',py:'yánjiū jiélùn',vn:'kết luận nghiên cứu'}
   ],
   patterns:[
     {s:'(别急着 / 不能) + 下结论',m:'(Đừng vội / không thể) kết luận'},
     {s:'得出 + ……的结论',m:'Rút ra kết luận rằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy vừa nghe được một nửa đã đưa ra kết luận.',answer:'他一听了一半，就下了结论。',answerPy:'Tā yì tīngle yíbàn, jiù xiàle jiélùn.',
      note:'下结论 là cụm cố định; 一……就…… diễn tả vội vàng.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Kết luận này là các nhà khoa học rút ra sau mười năm.',answer:'这个结论是科学家们用了十年才得出的。',answerPy:'Zhège jiélùn shì kēxuéjiāmen yòngle shí nián cái déchū de.',
      note:'得出结论 = rút ra kết luận; 是……的 nhấn mạnh cách thức/thời gian.',pair:'是……的'}
   ]},

  // ───────── 课文二 · 精诚所至，金石为开 ─────────
  {n:20,zh:'精诚所至，金石为开',py:'jīngchéng suǒ zhì, jīnshí wéi kāi',pos:'Thành ngữ',vn:'lòng thành cảm động đá vàng; có công mài sắt có ngày nên kim',hv:'tinh thành sở chí, kim thạch vi khai',em:'💎',lesson:1,
   explain:['Nghĩa đen: lòng chân thành đến đâu thì đá, kim loại cũng phải nứt ra. Nghĩa bóng: chỉ cần thành tâm, dốc hết sức thì việc khó mấy cũng làm được.','Gần với tục ngữ Việt "có công mài sắt có ngày nên kim", "lòng thành thấu tới trời".'],
   usage:'Thường dùng làm câu độc lập hoặc sau 真是: 真是精诚所至，金石为开！',
   collo:['真是精诚所至，金石为开','这就叫精诚所至，金石为开'],
   ex_zh:'“精诚所至，金石为开”这一成语也便由此流传下来。',ex_py:'"Jīngchéng suǒ zhì, jīnshí wéi kāi" zhè yì chéngyǔ yě biàn yóucǐ liúchuán xiàlái.',ex_vn:'Thành ngữ "lòng thành cảm động đá vàng" cũng từ đó mà lưu truyền.',
   exList:[
     {zh:'“精诚所至，金石为开”这一成语也便由此流传下来。',py:'"Jīngchéng suǒ zhì, jīnshí wéi kāi" zhè yì chéngyǔ yě biàn yóucǐ liúchuán xiàlái.',vn:'Thành ngữ "lòng thành cảm động đá vàng" cũng từ đó mà lưu truyền.'},
     {zh:'他去了五次，老教授终于答应了，真是精诚所至，金石为开。',py:'Tā qùle wǔ cì, lǎo jiàoshòu zhōngyú dāying le, zhēn shì jīngchéng suǒ zhì, jīnshí wéi kāi.',vn:'Anh ấy đến năm lần, vị giáo sư già cuối cùng cũng đồng ý — đúng là lòng thành cảm động cả đá vàng.'},
     {zh:'只要你用心去做，精诚所至，金石为开，没有做不到的事。',py:'Zhǐyào nǐ yòngxīn qù zuò, jīngchéng suǒ zhì, jīnshí wéi kāi, méiyǒu zuò bu dào de shì.',vn:'Chỉ cần em dốc lòng làm, lòng thành thì đá cũng mở, chẳng có việc gì không làm được.'}
   ],
   colloFull:[
     {zh:'真是精诚所至，金石为开',py:'zhēn shì jīngchéng suǒ zhì, jīnshí wéi kāi',vn:'đúng là lòng thành cảm động đá vàng'},
     {zh:'这就叫精诚所至，金石为开',py:'zhè jiù jiào jīngchéng suǒ zhì, jīnshí wéi kāi',vn:'thế mới gọi là lòng thành thấu đá vàng'},
     {zh:'相信精诚所至，金石为开',py:'xiāngxìn jīngchéng suǒ zhì, jīnshí wéi kāi',vn:'tin rằng lòng thành sẽ lay động được đá vàng'}
   ],
   patterns:[
     {s:'……，真是精诚所至，金石为开',m:'Kể việc khó thành công nhờ chân thành rồi kết bằng thành ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần thành tâm thì việc khó mấy cũng làm được — lòng thành cảm động đá vàng.',answer:'只要有诚心，再难的事也能做到，精诚所至，金石为开。',answerPy:'Zhǐyào yǒu chéngxīn, zài nán de shì yě néng zuòdào, jīngchéng suǒ zhì, jīnshí wéi kāi.',
      note:'Thành ngữ làm câu kết cho ý "chân thành thì thành công".',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Đến ông chủ khó tính nhất cũng bị anh ấy làm cho cảm động, đúng là lòng thành thấu đá vàng.',answer:'连最难说话的老板都被他打动了，真是精诚所至，金石为开。',answerPy:'Lián zuì nán shuōhuà de lǎobǎn dōu bèi tā dǎdòng le, zhēn shì jīngchéng suǒ zhì, jīnshí wéi kāi.',
      note:'连……都 + 被 + người + 打动了; 真是 + thành ngữ ở cuối.',pair:'连……都……'}
   ]},

  {n:21,zh:'将军',py:'jiāngjūn',pos:'Danh từ',vn:'tướng quân, vị tướng',hv:'tướng quân',em:'🎖️',lesson:1,
   explain:['Người chỉ huy cấp cao trong quân đội. Lưu ý 将 đọc jiāng (thanh 1) trong từ này.'],
   usage:'一位将军, 著名的将军, 将军 + tên / tên + 将军 (李将军).',
   collo:['一位将军','著名的将军','飞将军','当将军'],
   ex_zh:'西汉时期有一位著名的将军叫李广。',ex_py:'Xī Hàn shíqī yǒu yí wèi zhùmíng de jiāngjūn jiào Lǐ Guǎng.',ex_vn:'Thời Tây Hán có một vị tướng nổi tiếng tên là Lý Quảng.',
   exList:[
     {zh:'西汉时期有一位著名的将军叫李广。',py:'Xī Hàn shíqī yǒu yí wèi zhùmíng de jiāngjūn jiào Lǐ Guǎng.',vn:'Thời Tây Hán có một vị tướng nổi tiếng tên là Lý Quảng.'},
     {zh:'他善于骑马射箭，作战勇敢，被称为“飞将军”。',py:'Tā shànyú qí mǎ shè jiàn, zuòzhàn yǒnggǎn, bèi chēngwéi "Fēi Jiāngjūn".',vn:'Ông giỏi cưỡi ngựa bắn cung, đánh trận dũng cảm, được gọi là "Phi tướng quân".'},
     {zh:'小时候，弟弟的理想是当一名将军。',py:'Xiǎo shíhou, dìdi de lǐxiǎng shì dāng yì míng jiāngjūn.',vn:'Hồi nhỏ, ước mơ của em trai tôi là làm một vị tướng.'}
   ],
   colloFull:[
     {zh:'一位将军',py:'yí wèi jiāngjūn',vn:'một vị tướng'},
     {zh:'著名的将军',py:'zhùmíng de jiāngjūn',vn:'vị tướng nổi tiếng'},
     {zh:'飞将军',py:'fēi jiāngjūn',vn:'phi tướng quân (tướng bay)'},
     {zh:'当将军',py:'dāng jiāngjūn',vn:'làm tướng'}
   ],
   patterns:[
     {s:'有一位 + 将军 + 叫 + tên',m:'Mở đầu truyện: có một vị tướng tên là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vị tướng này được binh lính gọi là "Phi tướng quân".',answer:'这位将军被士兵们称为“飞将军”。',answerPy:'Zhè wèi jiāngjūn bèi shìbīngmen chēngwéi "Fēi Jiāngjūn".',
      note:'被 + người + 称为 + danh hiệu.',pair:'被'},
     {promptLang:'vi',prompt:'Vị tướng ấy không những dũng cảm mà còn rất yêu thương binh lính.',answer:'那位将军不仅很勇敢，也很爱护士兵。',answerPy:'Nà wèi jiāngjūn bùjǐn hěn yǒnggǎn, yě hěn àihù shìbīng.',
      note:'Ôn 爱护 (bài 1); 不仅……也…….',pair:'不仅……也……'}
   ]},

  {n:22,zh:'善于',py:'shànyú',pos:'Động từ',vn:'giỏi về, có sở trường',hv:'thiện ư',em:'🏅',lesson:1,
   explain:['Có khả năng làm tốt việc gì. Phía sau PHẢI là động từ / cụm động từ (善于骑马射箭, 善于交流), không đi thẳng với danh từ.'],
   usage:'善于 + V: 善于表达, 善于处理, 善于教育. Mức độ: 很 / 非常 + 善于 (她很善于教育学生). Phủ định: 不善于 / 不太善于.',
   collo:['善于骑马射箭','善于表达','善于处理问题','不善于交流'],
   ex_zh:'他善于骑马射箭，作战勇敢。',ex_py:'Tā shànyú qí mǎ shè jiàn, zuòzhàn yǒnggǎn.',ex_vn:'Ông giỏi cưỡi ngựa bắn cung, đánh trận dũng cảm.',
   exList:[
     {zh:'他善于骑马射箭，作战勇敢。',py:'Tā shànyú qí mǎ shè jiàn, zuòzhàn yǒnggǎn.',vn:'Ông giỏi cưỡi ngựa bắn cung, đánh trận dũng cảm.'},
     {zh:'她很爱护学生，也很善于教育他们。',py:'Tā hěn àihù xuésheng, yě hěn shànyú jiàoyù tāmen.',vn:'Cô ấy rất yêu thương học trò, cũng rất giỏi dạy dỗ các em.'},
     {zh:'我不太善于表达，但我说的都是真心话。',py:'Wǒ bú tài shànyú biǎodá, dàn wǒ shuō de dōu shì zhēnxīn huà.',vn:'Tôi không giỏi diễn đạt lắm, nhưng những gì tôi nói đều là thật lòng.'}
   ],
   colloFull:[
     {zh:'善于骑马射箭',py:'shànyú qí mǎ shè jiàn',vn:'giỏi cưỡi ngựa bắn cung'},
     {zh:'善于表达',py:'shànyú biǎodá',vn:'giỏi diễn đạt'},
     {zh:'善于处理问题',py:'shànyú chǔlǐ wèntí',vn:'giỏi xử lý vấn đề'},
     {zh:'不善于交流',py:'bú shànyú jiāoliú',vn:'không giỏi giao tiếp'},
     {zh:'善于学习',py:'shànyú xuéxí',vn:'giỏi học hỏi'}
   ],
   patterns:[
     {s:'Chủ ngữ + (不)善于 + V',m:'(Không) giỏi làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy không giỏi ăn nói nhưng làm việc rất nghiêm túc.',answer:'虽然他不善于说话，但是做事非常认真。',answerPy:'Suīrán tā bú shànyú shuōhuà, dànshì zuòshì fēicháng rènzhēn.',
      note:'善于 + động từ (说话), phủ định 不善于.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần giỏi học hỏi thì sẽ ngày càng tiến bộ.',answer:'只要善于学习，就会越来越进步。',answerPy:'Zhǐyào shànyú xuéxí, jiù huì yuè lái yuè jìnbù.',
      note:'善于 + 学习; kết hợp 只要……就…… và 越来越.',pair:'只要……就……'}
   ]},

  {n:23,zh:'称',py:'chēng',pos:'Động từ',vn:'gọi là, tôn xưng',hv:'xưng',em:'🏷️',lesson:1,
   explain:['Gọi ai/cái gì bằng một cái tên, danh hiệu. Hay đi thành 称为 / 称作 / 被称为.','Chữ này còn đọc chèn trong 称心 / 对称 — khác nghĩa, chưa cần học ở bài này.'],
   usage:'A 称 B 为 C / A 被称为 C / 人们称他为…….',
   collo:['被称为','称他为','人称','自称'],
   ex_zh:'他作战勇敢，被称为“飞将军”。',ex_py:'Tā zuòzhàn yǒnggǎn, bèi chēngwéi "Fēi Jiāngjūn".',ex_vn:'Ông đánh trận dũng cảm, được gọi là "Phi tướng quân".',
   exList:[
     {zh:'他作战勇敢，被称为“飞将军”。',py:'Tā zuòzhàn yǒnggǎn, bèi chēngwéi "Fēi Jiāngjūn".',vn:'Ông đánh trận dũng cảm, được gọi là "Phi tướng quân".'},
     {zh:'大家都称他为“活字典”，因为他什么都知道。',py:'Dàjiā dōu chēng tā wéi "huó zìdiǎn", yīnwèi tā shénme dōu zhīdào.',vn:'Mọi người đều gọi cậu ấy là "từ điển sống", vì cái gì cậu ấy cũng biết.'},
     {zh:'长城被称为世界七大奇迹之一。',py:'Chángchéng bèi chēngwéi shìjiè qī dà qíjì zhī yī.',vn:'Vạn Lý Trường Thành được gọi là một trong bảy kỳ quan thế giới.'}
   ],
   colloFull:[
     {zh:'被称为',py:'bèi chēngwéi',vn:'được gọi là'},
     {zh:'称他为',py:'chēng tā wéi',vn:'gọi anh ấy là'},
     {zh:'人称',py:'rénchēng',vn:'người ta gọi là'},
     {zh:'自称',py:'zìchēng',vn:'tự xưng'}
   ],
   patterns:[
     {s:'A + 被称为 + B',m:'A được gọi là B'},
     {s:'人们 + 称 + A + 为 + B',m:'Mọi người gọi A là B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hàng Châu được gọi là "thiên đường trần gian".',answer:'杭州被称为“人间天堂”。',answerPy:'Hángzhōu bèi chēngwéi "rénjiān tiāntáng".',
      note:'被称为 + danh hiệu; không nói 被称叫.',pair:'被'},
     {promptLang:'vi',prompt:'Vì cô ấy hát rất hay nên bạn bè gọi cô ấy là "chim hoạ mi".',answer:'因为她唱歌特别好听，所以朋友们称她为“百灵鸟”。',answerPy:'Yīnwèi tā chànggē tèbié hǎotīng, suǒyǐ péngyoumen chēng tā wéi "bǎilíngniǎo".',
      note:'Cấu trúc 称 + người + 为 + tên gọi.',pair:'因为……所以……'}
   ]},

  {n:24,zh:'打猎',py:'dǎ liè',pos:'Động từ',vn:'đi săn',hv:'đả liệp',em:'🏹',lesson:1,
   explain:['Săn bắt thú rừng. Là động từ LY HỢP: 打过猎, 打了一天猎.'],
   usage:'去打猎, 在山中打猎. Không mang tân ngữ trực tiếp: KHÔNG nói 打猎老虎 (phải nói 打老虎 / 猎老虎).',
   collo:['去打猎','在山中打猎','打过猎','打猎的人'],
   ex_zh:'一天傍晚，他正带着士兵们在山中打猎。',ex_py:'Yì tiān bàngwǎn, tā zhèng dàizhe shìbīngmen zài shān zhōng dǎ liè.',ex_vn:'Một chiều nọ, ông đang dẫn binh lính đi săn trong núi.',
   exList:[
     {zh:'一天傍晚，他正带着士兵们在山中打猎。',py:'Yì tiān bàngwǎn, tā zhèng dàizhe shìbīngmen zài shān zhōng dǎ liè.',vn:'Một chiều nọ, ông đang dẫn binh lính đi săn trong núi.'},
     {zh:'古时候，很多人靠打猎生活。',py:'Gǔ shíhou, hěn duō rén kào dǎ liè shēnghuó.',vn:'Thời xưa, rất nhiều người sống nhờ săn bắn.'},
     {zh:'爷爷年轻时打过猎，现在最爱护小动物。',py:'Yéye niánqīng shí dǎguo liè, xiànzài zuì àihù xiǎo dòngwù.',vn:'Hồi trẻ ông tôi từng đi săn, giờ lại là người thương động vật nhỏ nhất.'}
   ],
   colloFull:[
     {zh:'去打猎',py:'qù dǎ liè',vn:'đi săn'},
     {zh:'在山中打猎',py:'zài shān zhōng dǎ liè',vn:'săn trong núi'},
     {zh:'打过猎',py:'dǎguo liè',vn:'từng đi săn'},
     {zh:'靠打猎生活',py:'kào dǎ liè shēnghuó',vn:'sống nhờ săn bắn'},
     {zh:'打猎的人',py:'dǎ liè de rén',vn:'người đi săn'}
   ],
   patterns:[
     {s:'打 + 过 / 了 + 猎',m:'Ly hợp từ: 过/了 chen vào giữa'},
     {s:'靠 + 打猎 + 生活',m:'Sống nhờ săn bắn (ôn 靠 – bài 1)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng đi săn bao giờ.',answer:'我从来没打过猎。',answerPy:'Wǒ cónglái méi dǎguo liè.',
      note:'Ly hợp từ: 过 chen vào giữa 打 và 猎 (không nói 打猎过).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Họ vừa vào núi là bắt đầu đi săn.',answer:'他们一进山就开始打猎。',answerPy:'Tāmen yí jìn shān jiù kāishǐ dǎ liè.',
      note:'一……就……; 开始 + 打猎.',pair:'一……就……'}
   ]},

  {n:25,zh:'忽然',py:'hūrán',pos:'Phó từ',vn:'bỗng nhiên, thình lình',hv:'hốt nhiên',em:'⚡',lesson:1,
   explain:['Việc xảy ra rất nhanh, ngoài dự liệu. CHỈ là phó từ: đứng trước động từ hoặc trước cả mệnh đề.','Khác 突然: 突然 còn là tính từ (太突然了, 突然的变化) — xem phần Phân biệt từ.'],
   usage:'忽然 + V / 忽然 + mệnh đề. Không nói 太忽然了, 忽然的变化.',
   collo:['忽然发现','忽然想起','忽然下起雨来','忽然站了起来'],
   ex_zh:'他正带着士兵们在山中打猎，忽然发现远处蹲着一只大老虎。',ex_py:'Tā zhèng dàizhe shìbīngmen zài shān zhōng dǎ liè, hūrán fāxiàn yuǎnchù dūnzhe yì zhī dà lǎohǔ.',ex_vn:'Ông đang dẫn binh lính đi săn trong núi, bỗng phát hiện đằng xa có một con hổ lớn đang ngồi.',
   exList:[
     {zh:'他正带着士兵们在山中打猎，忽然发现远处蹲着一只大老虎。',py:'Tā zhèng dàizhe shìbīngmen zài shān zhōng dǎ liè, hūrán fāxiàn yuǎnchù dūnzhe yì zhī dà lǎohǔ.',vn:'Ông đang dẫn binh lính đi săn trong núi, bỗng phát hiện đằng xa có một con hổ lớn đang ngồi.'},
     {zh:'我们正在上课，他忽然站了起来。',py:'Wǒmen zhèngzài shàngkè, tā hūrán zhànle qǐlái.',vn:'Chúng tôi đang học thì cậu ấy bỗng đứng bật dậy.'},
     {zh:'刚才还是晴天，忽然就下起大雨来了。',py:'Gāngcái hái shì qíngtiān, hūrán jiù xià qǐ dàyǔ lái le.',vn:'Vừa nãy còn nắng, bỗng nhiên đổ mưa to.'}
   ],
   colloFull:[
     {zh:'忽然发现',py:'hūrán fāxiàn',vn:'bỗng phát hiện'},
     {zh:'忽然想起',py:'hūrán xiǎngqǐ',vn:'chợt nhớ ra'},
     {zh:'忽然下起雨来',py:'hūrán xià qǐ yǔ lái',vn:'bỗng đổ mưa'},
     {zh:'忽然站了起来',py:'hūrán zhànle qǐlái',vn:'bỗng đứng bật dậy'}
   ],
   patterns:[
     {s:'正在 / 正 + V……，忽然 + V',m:'Đang làm gì thì bỗng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa ra khỏi cửa thì chợt nhớ ra chưa mang chìa khoá.',answer:'我刚出门，忽然想起没带钥匙。',answerPy:'Wǒ gāng chūmén, hūrán xiǎngqǐ méi dài yàoshi.',
      note:'忽然 đứng trước động từ 想起.',pair:'刚 + V'},
     {promptLang:'vi',prompt:'Nửa đêm cậu ấy đang ngủ thì bỗng ngồi bật dậy, làm tôi giật mình.',answer:'半夜他睡着睡着忽然坐了起来，把我吓了一跳。',answerPy:'Bànyè tā shuìzhe shuìzhe hūrán zuòle qǐlái, bǎ wǒ xiàle yí tiào.',
      note:'V着V着 + 忽然 + V; 把我吓了一跳 (câu 把).',pair:'把'}
   ]},

  {n:26,zh:'蹲',py:'dūn',pos:'Động từ',vn:'ngồi xổm',hv:'tồn',em:'🧎',lesson:1,
   explain:['Co chân, hạ thấp người nhưng mông không chạm đất. Trong bài dùng cho con hổ đang thu mình ngồi.'],
   usage:'蹲下(来), 蹲着 + V, nơi chốn + 蹲着 + N (câu tồn hiện: 远处蹲着一只老虎).',
   collo:['蹲下来','蹲着','远处蹲着','蹲在地上'],
   ex_zh:'他忽然发现远处蹲着一只大老虎。',ex_py:'Tā hūrán fāxiàn yuǎnchù dūnzhe yì zhī dà lǎohǔ.',ex_vn:'Ông bỗng phát hiện đằng xa có một con hổ lớn đang ngồi rình.',
   exList:[
     {zh:'他忽然发现远处蹲着一只大老虎。',py:'Tā hūrán fāxiàn yuǎnchù dūnzhe yì zhī dà lǎohǔ.',vn:'Ông bỗng phát hiện đằng xa có một con hổ lớn đang ngồi rình.'},
     {zh:'你蹲下来点儿，别让他发现你了。',py:'Nǐ dūn xiàlái diǎnr, bié ràng tā fāxiàn nǐ le.',vn:'Cậu ngồi thấp xuống chút, đừng để anh ta phát hiện ra.'},
     {zh:'小男孩蹲在地上看蚂蚁搬家。',py:'Xiǎo nánhái dūn zài dìshang kàn mǎyǐ bānjiā.',vn:'Cậu bé ngồi xổm dưới đất xem kiến tha mồi về tổ.'}
   ],
   colloFull:[
     {zh:'蹲下来',py:'dūn xiàlái',vn:'ngồi thụp xuống'},
     {zh:'蹲着',py:'dūnzhe',vn:'đang ngồi xổm'},
     {zh:'远处蹲着',py:'yuǎnchù dūnzhe',vn:'đằng xa có … ngồi'},
     {zh:'蹲在地上',py:'dūn zài dìshang',vn:'ngồi xổm dưới đất'}
   ],
   patterns:[
     {s:'Nơi chốn + 蹲着 + số lượng + N',m:'Câu tồn hiện: ở đâu có … đang ngồi'},
     {s:'蹲在 + nơi chốn',m:'Ngồi xổm ở đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cửa ra vào có một con mèo đang ngồi.',answer:'门口蹲着一只猫。',answerPy:'Ménkǒu dūnzhe yì zhī māo.',
      note:'Câu tồn hiện: nơi chốn + 蹲着 + 一只猫.',pair:'Câu tồn hiện (V + 着)'},
     {promptLang:'vi',prompt:'Ngồi xổm lâu quá, chân tôi càng ngày càng tê.',answer:'蹲的时间太长了，我的腿越来越麻。',answerPy:'Dūn de shíjiān tài cháng le, wǒ de tuǐ yuè lái yuè má.',
      note:'蹲 làm định ngữ trong 蹲的时间; 越来越 + tính từ.',pair:'越来越'}
   ]},

  {n:27,zh:'摇',py:'yáo',pos:'Động từ',vn:'lắc, vẫy',hv:'dao',em:'🙅',lesson:1,
   explain:['Làm cho vật chuyển động qua lại: 摇头 (lắc đầu), 摇尾巴 (vẫy đuôi), 摇手 (xua tay).'],
   usage:'摇 + 头 / 手 / 尾巴 / 扇子. Hay lặp: 摇摇头, 摇了摇头.',
   collo:['摇头','摇摇头','摇尾巴','摇手'],
   ex_zh:'李广摇摇头，表示不要紧。',ex_py:'Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn.',ex_vn:'Lý Quảng lắc đầu, ra ý không sao cả.',
   exList:[
     {zh:'李广摇摇头，表示不要紧。',py:'Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn.',vn:'Lý Quảng lắc đầu, ra ý không sao cả.'},
     {zh:'每天我一回家，可爱的小狗就摇着尾巴冲我跑过来。',py:'Měi tiān wǒ yì huí jiā, kě\'ài de xiǎogǒu jiù yáozhe wěiba chòng wǒ pǎo guòlái.',vn:'Ngày nào tôi vừa về nhà, chú chó nhỏ đáng yêu lại vẫy đuôi chạy về phía tôi.'},
     {zh:'我问他去不去，他摇了摇头。',py:'Wǒ wèn tā qù bu qù, tā yáole yáo tóu.',vn:'Tôi hỏi cậu ấy có đi không, cậu ấy lắc đầu.'}
   ],
   colloFull:[
     {zh:'摇头',py:'yáo tóu',vn:'lắc đầu'},
     {zh:'摇摇头',py:'yáoyao tóu',vn:'lắc lắc đầu'},
     {zh:'摇尾巴',py:'yáo wěiba',vn:'vẫy đuôi'},
     {zh:'摇手',py:'yáo shǒu',vn:'xua tay'}
   ],
   patterns:[
     {s:'摇摇头 / 摇了摇头，表示……',m:'Lắc đầu tỏ ý …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa hỏi, anh ấy liền lắc đầu.',answer:'我一问，他就摇了摇头。',answerPy:'Wǒ yí wèn, tā jiù yáole yáo tóu.',
      note:'Lặp động từ có 了: 摇了摇头.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy ông ấy lắc đầu nhưng trong lòng đã đồng ý rồi.',answer:'虽然他摇了摇头，但是心里已经同意了。',answerPy:'Suīrán tā yáole yáo tóu, dànshì xīnli yǐjīng tóngyì le.',
      note:'摇头 = không đồng ý bằng cử chỉ; 点头 thì ngược lại.',pair:'虽然……但是……'}
   ]},

  {n:28,zh:'不要紧',py:'bú yàojǐn',pos:'Tính từ',vn:'không sao, không hề gì',hv:'bất yếu khẩn',em:'👌',lesson:1,
   explain:['Không nghiêm trọng, không có vấn đề gì. Dùng để trấn an người khác.','Theo sách hay làm vị ngữ: 这件事情/他的伤 + 不要紧.'],
   usage:'……不要紧 / 不要紧，…… Chú ý biến điệu: 不 đọc bú vì 要 thanh 4.',
   collo:['伤不要紧','这件事情不要紧','不要紧的','表示不要紧'],
   ex_zh:'李广摇摇头，表示不要紧。',ex_py:'Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn.',ex_vn:'Lý Quảng lắc đầu, ra ý không sao cả.',
   exList:[
     {zh:'李广摇摇头，表示不要紧。',py:'Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn.',vn:'Lý Quảng lắc đầu, ra ý không sao cả.'},
     {zh:'我们班有个同学被车撞了，还好伤得不重，不要紧。',py:'Wǒmen bān yǒu ge tóngxué bèi chē zhuàng le, hái hǎo shāng de bú zhòng, bú yàojǐn.',vn:'Lớp tôi có một bạn bị xe đụng, may là bị thương không nặng, không sao.'},
     {zh:'不要紧，我这边正好有棵树挡着呢。',py:'Bú yàojǐn, wǒ zhèbiān zhènghǎo yǒu kē shù dǎngzhe ne.',vn:'Không sao, bên tôi vừa khéo có cái cây che rồi.'}
   ],
   colloFull:[
     {zh:'伤不要紧',py:'shāng bú yàojǐn',vn:'vết thương không sao'},
     {zh:'这件事情不要紧',py:'zhè jiàn shìqing bú yàojǐn',vn:'chuyện này không quan trọng'},
     {zh:'不要紧的',py:'bú yàojǐn de',vn:'không sao đâu'},
     {zh:'表示不要紧',py:'biǎoshì bú yàojǐn',vn:'tỏ ý không sao'}
   ],
   patterns:[
     {s:'Chủ ngữ + 不要紧',m:'… không sao cả (他的伤不要紧)'},
     {s:'不要紧，……',m:'Mở đầu câu trấn an'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không sao, chỉ cần nghỉ vài ngày là khỏi.',answer:'不要紧，只要休息几天就好了。',answerPy:'Bú yàojǐn, zhǐyào xiūxi jǐ tiān jiù hǎo le.',
      note:'不要紧 mở đầu câu trấn an.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chân cậu ấy bị cửa kẹp nhưng không sao cả.',answer:'他的脚被门夹了一下，不过不要紧。',answerPy:'Tā de jiǎo bèi mén jiāle yíxià, búguò bú yàojǐn.',
      note:'被 + người/vật + V; 不要紧 làm vị ngữ.',pair:'被'}
   ]},

  {n:29,zh:'支',py:'zhī',pos:'Lượng từ',vn:'cây, cái (vật dài, cứng)',hv:'chi',em:'✏️',lesson:1,
   explain:['Lượng từ cho vật dài, mảnh, CỨNG (không uốn cong được): 一支箭, 一支笔, 一支烟, 一支花 (một cành hoa).','Còn dùng cho đội ngũ, bài hát: 一支队伍, 一支歌.'],
   usage:'Theo sách: 一支 + 笔 / 花 / 烟. Trong bài: 一支箭, 一整支箭.',
   collo:['一支箭','一支笔','一支花','一支烟'],
   ex_zh:'只见他从箭袋里取出一支箭。',ex_py:'Zhǐ jiàn tā cóng jiàndài li qǔchū yì zhī jiàn.',ex_vn:'Chỉ thấy ông rút từ ống tên ra một mũi tên.',
   exList:[
     {zh:'只见他从箭袋里取出一支箭。',py:'Zhǐ jiàn tā cóng jiàndài li qǔchū yì zhī jiàn.',vn:'Chỉ thấy ông rút từ ống tên ra một mũi tên.'},
     {zh:'一整支箭几乎全都射到石头中去了！',py:'Yì zhěng zhī jiàn jīhū quán dōu shèdào shítou zhōng qù le!',vn:'Cả mũi tên gần như cắm ngập vào trong tảng đá!'},
     {zh:'你能借我一支笔吗？我的忘带了。',py:'Nǐ néng jiè wǒ yì zhī bǐ ma? Wǒ de wàng dài le.',vn:'Cậu cho tớ mượn một cây bút được không? Tớ quên mang rồi.'}
   ],
   colloFull:[
     {zh:'一支箭',py:'yì zhī jiàn',vn:'một mũi tên'},
     {zh:'一支笔',py:'yì zhī bǐ',vn:'một cây bút'},
     {zh:'一支花',py:'yì zhī huā',vn:'một cành hoa'},
     {zh:'一支烟',py:'yì zhī yān',vn:'một điếu thuốc'},
     {zh:'一支队伍',py:'yì zhī duìwu',vn:'một đội ngũ'}
   ],
   patterns:[
     {s:'一支 + 笔 / 花 / 烟 / 箭',m:'Vật dài, cứng'},
     {s:'一根 / 一条 + 绳子 / 尾巴',m:'So sánh: vật dài, MỀM dùng 根/条'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy liên tiếp bắn năm sáu mũi tên.',answer:'他连续射了五六支箭。',answerPy:'Tā liánxù shèle wǔ liù zhī jiàn.',
      note:'Câu 书写 29 của sách bài tập; 连续 + V; lượng từ 支 cho tên.',pair:'V + 了 + số lượng'},
     {promptLang:'vi',prompt:'Cây bút này là cô giáo tặng tôi.',answer:'这支笔是老师送给我的。',answerPy:'Zhè zhī bǐ shì lǎoshī sòng gěi wǒ de.',
      note:'这支笔; 是……的 nhấn mạnh người tặng.',pair:'是……的'}
   ]},

  {n:30,zh:'摆',py:'bǎi',pos:'Động từ',vn:'bày, sắp đặt; lấy (tư thế)',hv:'bãi',em:'🧘',lesson:1,
   explain:['Đặt, bày đồ vật theo một trật tự nhất định (摆桌子, 摆好碗筷).','Làm ra một tư thế, dáng vẻ: 摆好姿势, 摆造型.'],
   usage:'摆好, 摆满, 摆在 + nơi chốn. Hay gặp: 摆好姿势 (vào tư thế).',
   collo:['摆好姿势','摆好碗筷','摆在桌子上','摆满了'],
   ex_zh:'他从箭袋里取出一支箭，摆好姿势。',ex_py:'Tā cóng jiàndài li qǔchū yì zhī jiàn, bǎihǎo zīshì.',ex_vn:'Ông rút ra một mũi tên, vào tư thế.',
   exList:[
     {zh:'他从箭袋里取出一支箭，摆好姿势。',py:'Tā cóng jiàndài li qǔchū yì zhī jiàn, bǎihǎo zīshì.',vn:'Ông rút ra một mũi tên, vào tư thế.'},
     {zh:'妈妈把碗筷摆好，叫我们来吃饭。',py:'Māma bǎ wǎnkuài bǎihǎo, jiào wǒmen lái chīfàn.',vn:'Mẹ bày bát đũa xong rồi gọi chúng tôi vào ăn cơm.'},
     {zh:'他的书桌上摆满了各种各样的书。',py:'Tā de shūzhuō shang bǎimǎnle gèzhǒng gèyàng de shū.',vn:'Trên bàn học của cậu ấy bày đầy đủ loại sách.'}
   ],
   colloFull:[
     {zh:'摆好姿势',py:'bǎihǎo zīshì',vn:'vào tư thế'},
     {zh:'摆好碗筷',py:'bǎihǎo wǎnkuài',vn:'bày sẵn bát đũa'},
     {zh:'摆在桌子上',py:'bǎi zài zhuōzi shang',vn:'bày trên bàn'},
     {zh:'摆满了',py:'bǎimǎn le',vn:'bày đầy'}
   ],
   patterns:[
     {s:'把 + N + 摆好 / 摆在……',m:'Bày … cho ngay ngắn / bày ở đâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy bày những bông hoa này lên bàn.',answer:'请把这些花摆在桌子上。',answerPy:'Qǐng bǎ zhèxiē huā bǎi zài zhuōzi shang.',
      note:'Câu 把 + 摆在 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Mọi người vừa vào tư thế xong là thợ ảnh bấm máy.',answer:'大家一摆好姿势，摄影师就拍了。',answerPy:'Dàjiā yì bǎihǎo zīshì, shèyǐngshī jiù pāi le.',
      note:'摆好姿势 = vào tư thế; 一……就…….',pair:'一……就……'}
   ]},

  {n:31,zh:'姿势',py:'zīshì',pos:'Danh từ',vn:'tư thế',hv:'tư thế',em:'🕴️',lesson:1,
   explain:['Dáng người khi đứng, ngồi, làm động tác. Âm Hán–Việt "tư thế" trùng nghĩa.'],
   usage:'摆好姿势, 姿势正确/不对, 坐的姿势, 换个姿势.',
   collo:['摆好姿势','姿势正确','坐的姿势','换个姿势'],
   ex_zh:'他摆好姿势，全神贯注，用尽全力向老虎射去。',ex_py:'Tā bǎihǎo zīshì, quánshén guànzhù, yòngjìn quánlì xiàng lǎohǔ shè qù.',ex_vn:'Ông vào tư thế, dồn hết tinh thần, dùng toàn lực bắn về phía con hổ.',
   exList:[
     {zh:'他摆好姿势，全神贯注，用尽全力向老虎射去。',py:'Tā bǎihǎo zīshì, quánshén guànzhù, yòngjìn quánlì xiàng lǎohǔ shè qù.',vn:'Ông vào tư thế, dồn hết tinh thần, dùng toàn lực bắn về phía con hổ.'},
     {zh:'写字的时候姿势要正确，不然眼睛会越来越差。',py:'Xiě zì de shíhou zīshì yào zhèngquè, bùrán yǎnjing huì yuè lái yuè chà.',vn:'Khi viết chữ phải ngồi đúng tư thế, không thì mắt sẽ ngày càng kém.'},
     {zh:'坐累了就换个姿势吧。',py:'Zuò lèi le jiù huàn ge zīshì ba.',vn:'Ngồi mỏi rồi thì đổi tư thế đi.'}
   ],
   colloFull:[
     {zh:'摆好姿势',py:'bǎihǎo zīshì',vn:'vào tư thế'},
     {zh:'姿势正确',py:'zīshì zhèngquè',vn:'tư thế đúng'},
     {zh:'坐的姿势',py:'zuò de zīshì',vn:'tư thế ngồi'},
     {zh:'换个姿势',py:'huàn ge zīshì',vn:'đổi tư thế'}
   ],
   patterns:[
     {s:'V + 的 + 姿势',m:'Tư thế khi làm gì (坐的姿势, 跑步的姿势)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy vừa sửa tư thế cho tôi là tôi bắn trúng ngay.',answer:'老师一帮我改了姿势，我就射中了。',answerPy:'Lǎoshī yì bāng wǒ gǎile zīshì, wǒ jiù shèzhòng le.',
      note:'改姿势 = sửa tư thế; 射中 = bắn trúng.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần tư thế đúng thì chạy sẽ không mệt lắm.',answer:'只要姿势正确，跑步就不会太累。',answerPy:'Zhǐyào zīshì zhèngquè, pǎobù jiù bú huì tài lèi.',
      note:'姿势 + 正确 làm vế điều kiện.',pair:'只要……就……'}
   ]},

  {n:32,zh:'全神贯注',py:'quánshén guànzhù',pos:'Thành ngữ',vn:'tập trung cao độ, dồn hết tinh thần',hv:'toàn thần quán chú',em:'🎯',lesson:1,
   explain:['Dồn toàn bộ tinh thần vào một việc, không để ý chuyện khác.'],
   usage:'Làm vị ngữ hoặc trạng ngữ: 全神贯注地听/看/做. Không thêm 很 phía trước.',
   collo:['全神贯注地听','全神贯注地看','全神贯注地工作'],
   ex_zh:'他摆好姿势，全神贯注，用尽全力向老虎射去。',ex_py:'Tā bǎihǎo zīshì, quánshén guànzhù, yòngjìn quánlì xiàng lǎohǔ shè qù.',ex_vn:'Ông vào tư thế, dồn hết tinh thần, dùng toàn lực bắn về phía con hổ.',
   exList:[
     {zh:'他摆好姿势，全神贯注，用尽全力向老虎射去。',py:'Tā bǎihǎo zīshì, quánshén guànzhù, yòngjìn quánlì xiàng lǎohǔ shè qù.',vn:'Ông vào tư thế, dồn hết tinh thần, dùng toàn lực bắn về phía con hổ.'},
     {zh:'同学们都在全神贯注地听老师讲成语故事。',py:'Tóngxuémen dōu zài quánshén guànzhù de tīng lǎoshī jiǎng chéngyǔ gùshi.',vn:'Các bạn đều đang chăm chú lắng nghe cô kể chuyện thành ngữ.'},
     {zh:'他全神贯注地打游戏，连妈妈叫他都没听见。',py:'Tā quánshén guànzhù de dǎ yóuxì, lián māma jiào tā dōu méi tīngjiàn.',vn:'Cậu ấy dồn hết tâm trí vào chơi game, đến mẹ gọi cũng không nghe thấy.'}
   ],
   colloFull:[
     {zh:'全神贯注地听',py:'quánshén guànzhù de tīng',vn:'chăm chú lắng nghe'},
     {zh:'全神贯注地看',py:'quánshén guànzhù de kàn',vn:'chăm chú nhìn'},
     {zh:'全神贯注地工作',py:'quánshén guànzhù de gōngzuò',vn:'làm việc hết sức tập trung'},
     {zh:'全神贯注地学习',py:'quánshén guànzhù de xuéxí',vn:'học hết sức tập trung'}
   ],
   patterns:[
     {s:'全神贯注 + 地 + V',m:'Làm gì một cách hết sức tập trung'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy học tập trung đến mức đến tôi vào phòng cũng không biết.',answer:'他全神贯注地学习，连我进房间都不知道。',answerPy:'Tā quánshén guànzhù de xuéxí, lián wǒ jìn fángjiān dōu bù zhīdào.',
      note:'Thành ngữ làm trạng ngữ + 地; 连……都.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần dồn hết tâm trí thì không có bài nào không làm được.',answer:'只要全神贯注，就没有做不出来的题。',answerPy:'Zhǐyào quánshén guànzhù, jiù méiyǒu zuò bu chūlái de tí.',
      note:'Thành ngữ làm vị ngữ, không thêm 很.',pair:'只要……就……'}
   ]},

  {n:33,zh:'尽力',py:'jìnlì',pos:'Động từ',vn:'gắng hết sức, cố hết sức',hv:'tận lực',em:'💪',lesson:1,
   explain:['Dốc hết sức lực, khả năng để làm việc gì. Sách ghi 尽(力): 尽 = dùng hết; trong bài có cụm 用尽全力 (dùng hết toàn lực).','尽 ở đây đọc jìn (thanh 4); khác 尽管 jǐnguǎn.'],
   usage:'尽力 + V / 已经尽力了 / 尽力而为. 尽 đứng một mình: 用尽全力, 尽全力.',
   collo:['尽力帮助','已经尽力了','尽力而为','用尽全力'],
   ex_zh:'别难过了，虽然成绩不理想，但你已经尽力了。',ex_py:'Bié nánguò le, suīrán chéngjì bù lǐxiǎng, dàn nǐ yǐjīng jìnlì le.',ex_vn:'Đừng buồn nữa, tuy kết quả không như ý nhưng em đã cố hết sức rồi.',
   exList:[
     {zh:'别难过了，虽然成绩不理想，但你已经尽力了。',py:'Bié nánguò le, suīrán chéngjì bù lǐxiǎng, dàn nǐ yǐjīng jìnlì le.',vn:'Đừng buồn nữa, tuy kết quả không như ý nhưng em đã cố hết sức rồi.'},
     {zh:'只见他摆好姿势，全神贯注，用尽全力向老虎射去。',py:'Zhǐ jiàn tā bǎihǎo zīshì, quánshén guànzhù, yòngjìn quánlì xiàng lǎohǔ shè qù.',vn:'Chỉ thấy ông vào tư thế, dồn hết tinh thần, dùng toàn lực bắn về phía con hổ.'},
     {zh:'你放心，这件事我一定尽力帮你。',py:'Nǐ fàngxīn, zhè jiàn shì wǒ yídìng jìnlì bāng nǐ.',vn:'Cậu yên tâm, việc này tớ nhất định sẽ cố hết sức giúp cậu.'}
   ],
   colloFull:[
     {zh:'尽力帮助',py:'jìnlì bāngzhù',vn:'hết sức giúp đỡ'},
     {zh:'已经尽力了',py:'yǐjīng jìnlì le',vn:'đã cố hết sức rồi'},
     {zh:'尽力而为',py:'jìnlì ér wéi',vn:'làm hết sức mình'},
     {zh:'用尽全力',py:'yòngjìn quánlì',vn:'dùng hết toàn lực'},
     {zh:'尽力保护',py:'jìnlì bǎohù',vn:'hết sức bảo vệ'}
   ],
   patterns:[
     {s:'尽力 + V',m:'Cố hết sức làm gì'},
     {s:'(已经) + 尽力了',m:'Đã cố hết sức (an ủi người khác)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần đã cố hết sức thì đừng hối hận.',answer:'只要尽力了，就不要后悔。',answerPy:'Zhǐyào jìnlì le, jiù búyào hòuhuǐ.',
      note:'尽力 làm vị ngữ, sau có 了.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy đã cố hết sức nhưng chúng tôi vẫn thua trận.',answer:'虽然我们尽力了，但是还是输了比赛。',answerPy:'Suīrán wǒmen jìnlì le, dànshì háishi shūle bǐsài.',
      note:'尽力了 + 但是 + kết quả không như ý.',pair:'虽然……但是……'}
   ]},

  {n:34,zh:'反应',py:'fǎnyìng',pos:'Động từ / Danh từ',vn:'phản ứng; sự phản ứng',hv:'phản ứng',em:'⚡',lesson:1,
   explain:['Sự đáp lại khi gặp một kích thích, tình huống (人/动物/身体 có phản ứng).','Dễ nhầm với 反映 (phản ánh — nói lại tình hình cho cấp trên; thể hiện ra) — xem phần Phân biệt từ.'],
   usage:'没什么反应, 反应很快/很慢, 做出反应, 反应过来. Theo sách: 反应 + 很快.',
   collo:['没什么反应','反应很快','做出反应','反应过来'],
   ex_zh:'过了一会儿，老虎没什么反应。',ex_py:'Guòle yíhuìr, lǎohǔ méi shénme fǎnyìng.',ex_vn:'Một lúc sau, con hổ chẳng có phản ứng gì.',
   exList:[
     {zh:'过了一会儿，老虎没什么反应。',py:'Guòle yíhuìr, lǎohǔ méi shénme fǎnyìng.',vn:'Một lúc sau, con hổ chẳng có phản ứng gì.'},
     {zh:'对我们提出的意见，老板还没有做出反应。',py:'Duì wǒmen tíchū de yìjiàn, lǎobǎn hái méiyǒu zuòchū fǎnyìng.',vn:'Với ý kiến chúng tôi đưa ra, ông chủ vẫn chưa có phản hồi.'},
     {zh:'他说这话的时候，我完全没有反应过来。',py:'Tā shuō zhè huà de shíhou, wǒ wánquán méiyǒu fǎnyìng guòlái.',vn:'Lúc anh ấy nói câu đó, tôi hoàn toàn chưa kịp phản ứng.'}
   ],
   colloFull:[
     {zh:'没什么反应',py:'méi shénme fǎnyìng',vn:'không có phản ứng gì'},
     {zh:'反应很快',py:'fǎnyìng hěn kuài',vn:'phản ứng rất nhanh'},
     {zh:'做出反应',py:'zuòchū fǎnyìng',vn:'đưa ra phản ứng'},
     {zh:'反应过来',py:'fǎnyìng guòlái',vn:'kịp hiểu ra, kịp phản ứng'}
   ],
   patterns:[
     {s:'对…… + 做出反应',m:'Có phản ứng đối với …'},
     {s:'(没有) + 反应过来',m:'(Chưa) kịp hiểu ra'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy phản ứng càng ngày càng nhanh.',answer:'他的反应越来越快了。',answerPy:'Tā de fǎnyìng yuè lái yuè kuài le.',
      note:'反应 làm danh từ chủ ngữ, vị ngữ 快.',pair:'越来越'},
     {promptLang:'vi',prompt:'Đến lúc tôi kịp hiểu ra thì anh ấy đã đi rồi.',answer:'等我反应过来的时候，他已经走了。',answerPy:'Děng wǒ fǎnyìng guòlái de shíhou, tā yǐjīng zǒu le.',
      note:'反应过来 = kịp phản ứng, kịp hiểu.',pair:'……的时候'}
   ]},

  {n:35,zh:'确定',py:'quèdìng',pos:'Động từ',vn:'xác định, khẳng định chắc chắn',hv:'xác định',em:'📌',lesson:1,
   explain:['Làm cho rõ ràng, chắc chắn (确定时间); hoặc biết chắc một điều (你确定……吗?).'],
   usage:'Theo sách: 确定 + 时间 / 地点 / 人选. Hỏi lại: 你确定……吗? Chưa chắc: 还不确定.',
   collo:['确定时间','确定地点','确定人选','你确定吗'],
   ex_zh:'士兵们小心地走上前去，想确定它是不是死了。',ex_py:'Shìbīngmen xiǎoxīn de zǒu shàng qián qù, xiǎng quèdìng tā shì bu shì sǐ le.',ex_vn:'Binh lính thận trọng bước tới, muốn xác định xem nó đã chết chưa.',
   exList:[
     {zh:'士兵们小心地走上前去，想确定它是不是死了。',py:'Shìbīngmen xiǎoxīn de zǒu shàng qián qù, xiǎng quèdìng tā shì bu shì sǐ le.',vn:'Binh lính thận trọng bước tới, muốn xác định xem nó đã chết chưa.'},
     {zh:'你确定他就是我们要找的那位英雄吗？',py:'Nǐ quèdìng tā jiù shì wǒmen yào zhǎo de nà wèi yīngxióng ma?',vn:'Cậu chắc chắn anh ấy chính là vị anh hùng chúng ta cần tìm chứ?'},
     {zh:'聚会的时间和地点还没确定，确定了我就告诉你。',py:'Jùhuì de shíjiān hé dìdiǎn hái méi quèdìng, quèdìngle wǒ jiù gàosu nǐ.',vn:'Thời gian và địa điểm buổi họp mặt chưa chốt, chốt rồi tớ sẽ báo cậu.'}
   ],
   colloFull:[
     {zh:'确定时间',py:'quèdìng shíjiān',vn:'chốt thời gian'},
     {zh:'确定地点',py:'quèdìng dìdiǎn',vn:'chốt địa điểm'},
     {zh:'确定人选',py:'quèdìng rénxuǎn',vn:'chọn xong người'},
     {zh:'你确定吗',py:'nǐ quèdìng ma',vn:'cậu chắc chứ'},
     {zh:'还不确定',py:'hái bú quèdìng',vn:'vẫn chưa chắc'}
   ],
   patterns:[
     {s:'确定 + 是不是 / 有没有 + ……',m:'Xác định xem có … hay không'},
     {s:'你确定 + mệnh đề + 吗？',m:'Cậu chắc chắn là … chứ?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời gian vừa chốt xong là tôi báo cho mọi người ngay.',answer:'时间一确定，我就马上通知大家。',answerPy:'Shíjiān yí quèdìng, wǒ jiù mǎshàng tōngzhī dàjiā.',
      note:'确定 + 时间 hoặc 时间 + 确定; 一……就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Người được chọn đã được chốt là cậu ấy.',answer:'人选已经被确定了，是他。',answerPy:'Rénxuǎn yǐjīng bèi quèdìng le, shì tā.',
      note:'Câu bị động 被确定.',pair:'被'}
   ]},

  {n:36,zh:'石头',py:'shítou',pos:'Danh từ',vn:'đá, hòn đá',hv:'thạch đầu',em:'🪨',lesson:1,
   explain:['Đá (vật liệu, hòn đá). 头 đọc nhẹ. Văn viết hay dùng 石.'],
   usage:'一块石头, 大石头, 石头做的. Thành ngữ trong bài: 金石为开 (金 = kim loại, 石 = đá).',
   collo:['一块石头','大石头','石头做的','像石头一样硬'],
   ex_zh:'被射中的竟不是老虎，而是一块形状很像老虎的大石头。',ex_py:'Bèi shèzhòng de jìng bú shì lǎohǔ, ér shì yí kuài xíngzhuàng hěn xiàng lǎohǔ de dà shítou.',ex_vn:'Thứ bị bắn trúng hoá ra không phải hổ, mà là một tảng đá lớn có hình dáng rất giống hổ.',
   exList:[
     {zh:'被射中的竟不是老虎，而是一块形状很像老虎的大石头。',py:'Bèi shèzhòng de jìng bú shì lǎohǔ, ér shì yí kuài xíngzhuàng hěn xiàng lǎohǔ de dà shítou.',vn:'Thứ bị bắn trúng hoá ra không phải hổ, mà là một tảng đá lớn có hình dáng rất giống hổ.'},
     {zh:'大石头一点儿变化也没有。',py:'Dà shítou yìdiǎnr biànhuà yě méiyǒu.',vn:'Tảng đá lớn không hề thay đổi chút nào.'},
     {zh:'这座桥是用石头建成的，已经有几百年了。',py:'Zhè zuò qiáo shì yòng shítou jiànchéng de, yǐjīng yǒu jǐ bǎi nián le.',vn:'Cây cầu này được xây bằng đá, đã có mấy trăm năm rồi.'}
   ],
   colloFull:[
     {zh:'一块石头',py:'yí kuài shítou',vn:'một hòn đá'},
     {zh:'大石头',py:'dà shítou',vn:'tảng đá lớn'},
     {zh:'石头做的',py:'shítou zuò de',vn:'làm bằng đá'},
     {zh:'像石头一样硬',py:'xiàng shítou yíyàng yìng',vn:'cứng như đá'}
   ],
   patterns:[
     {s:'一块 + 石头',m:'Lượng từ 块 cho khối, cục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé ném hòn đá xuống sông.',answer:'小男孩把石头扔进了河里。',answerPy:'Xiǎo nánhái bǎ shítou rēngjìnle hé li.',
      note:'Câu 把 + 扔进 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Tảng đá này nặng đến mức ba người cũng không nhấc nổi.',answer:'这块石头重得连三个人都搬不动。',answerPy:'Zhè kuài shítou zhòng de lián sān ge rén dōu bān bu dòng.',
      note:'Bổ ngữ trình độ 得 + 连……都…….',pair:'连……都……'}
   ]},

  {n:37,zh:'连续',py:'liánxù',pos:'Động từ',vn:'liên tục, liên tiếp',hv:'liên tục',em:'🔁',lesson:1,
   explain:['Nối tiếp nhau không gián đoạn. Thường làm trạng ngữ: 连续 + V (+ số lượng).','Dễ nhầm với 继续 (tiếp tục một việc đang làm dở) — xem phần Phân biệt từ.'],
   usage:'Theo sách: 连续 + 工作 / 驾驶 / 发生 / 演出. Hay kèm số lượng: 连续三天, 连续换了几根箭.',
   collo:['连续工作','连续驾驶','连续发生','连续演出','连续三天'],
   ex_zh:'这次他连续换了几根箭，都没能再射进去。',ex_py:'Zhè cì tā liánxù huànle jǐ gēn jiàn, dōu méi néng zài shè jìnqù.',ex_vn:'Lần này ông liên tiếp thay mấy mũi tên mà đều không bắn ngập vào được nữa.',
   exList:[
     {zh:'这次他连续换了几根箭，都没能再射进去。',py:'Zhè cì tā liánxù huànle jǐ gēn jiàn, dōu méi néng zài shè jìnqù.',vn:'Lần này ông liên tiếp thay mấy mũi tên mà đều không bắn ngập vào được nữa.'},
     {zh:'我真的需要休息了，我已经连续工作20个小时了。',py:'Wǒ zhēn de xūyào xiūxi le, wǒ yǐjīng liánxù gōngzuò èrshí ge xiǎoshí le.',vn:'Tôi thật sự cần nghỉ rồi, tôi đã làm liên tục 20 tiếng rồi.'},
     {zh:'最多的一次你连续抢答了六道题呢！',py:'Zuì duō de yí cì nǐ liánxù qiǎngdále liù dào tí ne!',vn:'Lần nhiều nhất cậu giành trả lời liền sáu câu đấy!'}
   ],
   colloFull:[
     {zh:'连续工作',py:'liánxù gōngzuò',vn:'làm việc liên tục'},
     {zh:'连续驾驶',py:'liánxù jiàshǐ',vn:'lái xe liên tục'},
     {zh:'连续发生',py:'liánxù fāshēng',vn:'xảy ra liên tiếp'},
     {zh:'连续演出',py:'liánxù yǎnchū',vn:'biểu diễn liên tục'},
     {zh:'连续三天',py:'liánxù sān tiān',vn:'liền ba ngày'}
   ],
   patterns:[
     {s:'连续 + V + 了 + số lượng',m:'Làm liên tiếp bao nhiêu lần/bao lâu'},
     {s:'连续 + số lượng + 时间 + V',m:'Liền … ngày/tháng làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuần này trời mưa liền năm ngày.',answer:'这个星期连续下了五天雨。',answerPy:'Zhège xīngqī liánxù xiàle wǔ tiān yǔ.',
      note:'连续 + V + 了 + thời lượng + tân ngữ.',pair:'V + 了 + thời lượng'},
     {promptLang:'vi',prompt:'Tài xế không được lái xe liên tục quá bốn tiếng.',answer:'司机连续驾驶不能超过四个小时。',answerPy:'Sījī liánxù jiàshǐ bù néng chāoguò sì ge xiǎoshí.',
      note:'Cụm 连续驾驶 trong bảng 词语搭配 của sách.',pair:'不能 + V'}
   ]},

  {n:38,zh:'根',py:'gēn',pos:'Danh từ / Lượng từ',vn:'rễ, gốc, chân; (lượng từ) cây, sợi',hv:'căn',em:'🌱',lesson:1,
   explain:['Danh từ: rễ cây (树根); nghĩa bóng: gốc rễ, nền tảng (从根上解决).','Lượng từ: cho vật DÀI, MẢNH: 一根绳子, 一根箭, 一根筷子, 一根香蕉. Đây là điểm ngữ pháp của bài.'],
   usage:'Danh từ: 树根, 牙根, 从根上. Lượng từ: 一根 + 绳子/尾巴/筷子/头发.',
   collo:['树的根','从根上解决','一根绳子','一根筷子'],
   ex_zh:'可是，这次他连续换了几根箭，都没能再射进去。',ex_py:'Kěshì, zhè cì tā liánxù huànle jǐ gēn jiàn, dōu méi néng zài shè jìnqù.',ex_vn:'Thế nhưng lần này ông liên tiếp thay mấy mũi tên mà đều không bắn ngập vào được nữa.',
   exList:[
     {zh:'可是，这次他连续换了几根箭，都没能再射进去。',py:'Kěshì, zhè cì tā liánxù huànle jǐ gēn jiàn, dōu méi néng zài shè jìnqù.',vn:'Thế nhưng lần này ông liên tiếp thay mấy mũi tên mà đều không bắn ngập vào được nữa.'},
     {zh:'这棵树的根又粗又长。',py:'Zhè kē shù de gēn yòu cū yòu cháng.',vn:'Rễ của cái cây này vừa to vừa dài.'},
     {zh:'这件事还是得从根上解决，只解决表面问题是不行的。',py:'Zhè jiàn shì háishi děi cóng gēn shang jiějué, zhǐ jiějué biǎomiàn wèntí shì bù xíng de.',vn:'Việc này vẫn phải giải quyết tận gốc, chỉ giải quyết bề mặt là không được.'}
   ],
   colloFull:[
     {zh:'树的根',py:'shù de gēn',vn:'rễ cây'},
     {zh:'从根上解决',py:'cóng gēn shang jiějué',vn:'giải quyết tận gốc'},
     {zh:'一根绳子',py:'yì gēn shéngzi',vn:'một sợi dây'},
     {zh:'一根筷子',py:'yì gēn kuàizi',vn:'một chiếc đũa'},
     {zh:'一根头发',py:'yì gēn tóufa',vn:'một sợi tóc'}
   ],
   patterns:[
     {s:'一根 + 绳子 / 尾巴 / 筷子 / 香蕉',m:'Lượng từ cho vật dài, mảnh'},
     {s:'从根上 + V',m:'Làm gì từ gốc rễ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi mới dùng đũa lần đầu, một chiếc đũa bị tôi làm rơi xuống đất.',answer:'我第一次用筷子，一根筷子被我掉到地上了。',answerPy:'Wǒ dì-yī cì yòng kuàizi, yì gēn kuàizi bèi wǒ diàodào dìshang le.',
      note:'Lượng từ 根 cho đũa (vật dài mảnh); câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Cây sống nhờ rễ hút nước.',answer:'植物是靠根吸水生活的。',answerPy:'Zhíwù shì kào gēn xī shuǐ shēnghuó de.',
      note:'根 là danh từ; ôn 靠 (bài 1) và 是……的.',pair:'是……的'}
   ]},

  {n:39,zh:'碎',py:'suì',pos:'Động từ / Tính từ',vn:'vỡ; vụn vặt',hv:'toái',em:'💥',lesson:1,
   explain:['Động từ: vỡ thành nhiều mảnh (箭头碎了). Thường làm bổ ngữ kết quả: 打碎, 撞碎, 撕碎.','Tính từ: vụn, lặt vặt (碎纸, 说话很碎 – nói lắm chuyện vụn vặt).'],
   usage:'Theo sách: 打 / 撞 / 撕 + 碎. N + 碎了.',
   collo:['打碎','撞碎','撕碎','碎了'],
   ex_zh:'有的箭头碎了，有的箭杆断了。',ex_py:'Yǒude jiàntóu suì le, yǒude jiàngǎn duàn le.',ex_vn:'Có mũi thì đầu tên vỡ nát, có mũi thì cán tên gãy.',
   exList:[
     {zh:'有的箭头碎了，有的箭杆断了。',py:'Yǒude jiàntóu suì le, yǒude jiàngǎn duàn le.',vn:'Có mũi thì đầu tên vỡ nát, có mũi thì cán tên gãy.'},
     {zh:'是谁把玻璃打碎了？',py:'Shì shéi bǎ bōli dǎsuì le?',vn:'Ai làm vỡ kính thế?'},
     {zh:'他生气地把信撕碎了。',py:'Tā shēngqì de bǎ xìn sīsuì le.',vn:'Anh ấy tức giận xé nát lá thư.'}
   ],
   colloFull:[
     {zh:'打碎',py:'dǎsuì',vn:'đánh vỡ'},
     {zh:'撞碎',py:'zhuàngsuì',vn:'đâm vỡ'},
     {zh:'撕碎',py:'sīsuì',vn:'xé vụn'},
     {zh:'碎了',py:'suì le',vn:'vỡ rồi'}
   ],
   patterns:[
     {s:'把 + N + 打 / 撞 / 撕 + 碎 (了)',m:'Làm … vỡ / nát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cốc bị em trai làm vỡ rồi.',answer:'杯子被弟弟打碎了。',answerPy:'Bēizi bèi dìdi dǎsuì le.',
      note:'碎 làm bổ ngữ kết quả sau 打; câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Đừng xé tờ giấy này, trên đó có số điện thoại.',answer:'别把这张纸撕碎，上面有电话号码。',answerPy:'Bié bǎ zhè zhāng zhǐ sīsuì, shàngmiàn yǒu diànhuà hàomǎ.',
      note:'Câu 把 phủ định dạng mệnh lệnh: 别把……撕碎.',pair:'把'}
   ]},

  {n:40,zh:'杆',py:'gǎn',pos:'Danh từ',vn:'cán, báng, thân (vật dài)',hv:'can',em:'🥢',lesson:1,
   explain:['Phần thân dài, thẳng của một vật: 箭杆 (cán tên), 笔杆 (thân bút), 枪杆 (báng súng). Đọc gǎn (thanh 3).'],
   usage:'Hay ghép: 箭杆, 笔杆, 杆子. Trong bài: 有的箭杆断了.',
   collo:['箭杆','笔杆','箭杆断了'],
   ex_zh:'有的箭头碎了，有的箭杆断了。',ex_py:'Yǒude jiàntóu suì le, yǒude jiàngǎn duàn le.',ex_vn:'Có mũi thì đầu tên vỡ nát, có mũi thì cán tên gãy.',
   exList:[
     {zh:'有的箭头碎了，有的箭杆断了。',py:'Yǒude jiàntóu suì le, yǒude jiàngǎn duàn le.',vn:'Có mũi thì đầu tên vỡ nát, có mũi thì cán tên gãy.'},
     {zh:'这支笔的笔杆是木头做的。',py:'Zhè zhī bǐ de bǐgǎn shì mùtou zuò de.',vn:'Thân cây bút này làm bằng gỗ.'}
   ],
   colloFull:[
     {zh:'箭杆',py:'jiàngǎn',vn:'cán tên'},
     {zh:'笔杆',py:'bǐgǎn',vn:'thân bút'},
     {zh:'箭杆断了',py:'jiàngǎn duàn le',vn:'cán tên gãy rồi'},
     {zh:'木头杆',py:'mùtou gǎn',vn:'cán gỗ'}
   ],
   patterns:[
     {s:'N + 杆',m:'Phần thân dài của … (箭杆, 笔杆)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cán tên bị anh ấy bẻ gãy.',answer:'箭杆被他折断了。',answerPy:'Jiàngǎn bèi tā zhéduàn le.',
      note:'被 + người + 折断.',pair:'被'},
     {promptLang:'vi',prompt:'Thân cây bút này là làm bằng tre.',answer:'这支笔的笔杆是用竹子做的。',answerPy:'Zhè zhī bǐ de bǐgǎn shì yòng zhúzi zuò de.',
      note:'是用……做的 nhấn mạnh chất liệu.',pair:'是……的'}
   ]},

  {n:41,zh:'哎',py:'āi',pos:'Thán từ',vn:'ái chà, ơ kìa, này',hv:'ai',em:'😲',lesson:1,
   explain:['Thán từ biểu thị NGẠC NHIÊN hoặc KHÔNG HÀI LÒNG (哎，怎么会这样？); cũng dùng để gọi, nhắc người khác chú ý (哎，我想到了一个办法).','Đọc thanh 1 āi. Khác 唉 (thở dài).'],
   usage:'Đứng đầu câu, sau có dấu phẩy: 哎，……',
   collo:['哎，怎么会这样','哎，你看','哎，等一下'],
   ex_zh:'“哎，怎么会这样？”士兵奇怪地你看我，我看你。',ex_py:'"Āi, zěnme huì zhèyàng?" Shìbīng qíguài de nǐ kàn wǒ, wǒ kàn nǐ.',ex_vn:'"Ơ, sao lại thế này?" Binh lính ngạc nhiên nhìn nhau.',
   exList:[
     {zh:'“哎，怎么会这样？”士兵奇怪地你看我，我看你。',py:'"Āi, zěnme huì zhèyàng?" Shìbīng qíguài de nǐ kàn wǒ, wǒ kàn nǐ.',vn:'"Ơ, sao lại thế này?" Binh lính ngạc nhiên nhìn nhau.'},
     {zh:'哎，我想到了一个办法，你们看看行不行。',py:'Āi, wǒ xiǎngdàole yí ge bànfǎ, nǐmen kànkan xíng bu xíng.',vn:'Này, tớ nghĩ ra một cách, các cậu xem có được không.'},
     {zh:'哎，你怎么又忘带作业了？',py:'Āi, nǐ zěnme yòu wàng dài zuòyè le?',vn:'Ơ kìa, sao cậu lại quên mang bài tập nữa thế?'}
   ],
   colloFull:[
     {zh:'哎，怎么会这样',py:'āi, zěnme huì zhèyàng',vn:'ơ, sao lại thế này'},
     {zh:'哎，你看',py:'āi, nǐ kàn',vn:'này, cậu xem'},
     {zh:'哎，等一下',py:'āi, děng yíxià',vn:'này, đợi chút'}
   ],
   patterns:[
     {s:'哎，+ câu hỏi / câu nhắc',m:'Ngạc nhiên hoặc gọi người khác chú ý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ơ, sao cửa lại bị ai mở ra thế?',answer:'哎，门怎么被人打开了？',answerPy:'Āi, mén zěnme bèi rén dǎkāi le?',
      note:'哎 biểu thị ngạc nhiên; câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Này, cậu vừa đi là thầy đến ngay.',answer:'哎，你刚走，老师就来了。',answerPy:'Āi, nǐ gāng zǒu, lǎoshī jiù lái le.',
      note:'哎 dùng để gọi, báo tin; 刚……就…….',pair:'一……就……'}
   ]},

  {n:42,zh:'唉',py:'ài',pos:'Thán từ',vn:'ôi, than ôi, chao ôi (thở dài)',hv:'ai',em:'😔',lesson:1,
   explain:['Thán từ biểu thị THƯƠNG CẢM, TIẾC NUỐI, BẤT LỰC — tiếng thở dài. Trong bài đọc ài (thanh 4).','Khác 哎 (ngạc nhiên / gọi người).'],
   usage:'Đứng đầu câu: 唉！/ 唉，…… Hay đi với câu than thở: 唉，真没办法.',
   collo:['唉，真没办法','唉，太可惜了','唉，我不够用心'],
   ex_zh:'“唉！大概是我不够用心了吧！”李广也无奈地说。',ex_py:'"Ài! Dàgài shì wǒ bú gòu yòngxīn le ba!" Lǐ Guǎng yě wúnài de shuō.',ex_vn:'"Chao ôi! Có lẽ là ta chưa đủ tâm huyết rồi!" Lý Quảng cũng bất lực nói.',
   exList:[
     {zh:'“唉！大概是我不够用心了吧！”李广也无奈地说。',py:'"Ài! Dàgài shì wǒ bú gòu yòngxīn le ba!" Lǐ Guǎng yě wúnài de shuō.',vn:'"Chao ôi! Có lẽ là ta chưa đủ tâm huyết rồi!" Lý Quảng cũng bất lực nói.'},
     {zh:'唉，我最近确实不够用心。',py:'Ài, wǒ zuìjìn quèshí bú gòu yòngxīn.',vn:'Haiz, dạo này tớ đúng là chưa đủ chăm chỉ.'},
     {zh:'唉，就差一分，太可惜了！',py:'Ài, jiù chà yì fēn, tài kěxī le!',vn:'Ôi, chỉ thiếu một điểm thôi, tiếc quá!'}
   ],
   colloFull:[
     {zh:'唉，真没办法',py:'ài, zhēn méi bànfǎ',vn:'haiz, thật hết cách'},
     {zh:'唉，太可惜了',py:'ài, tài kěxī le',vn:'ôi, tiếc quá'},
     {zh:'唉，我不够用心',py:'ài, wǒ bú gòu yòngxīn',vn:'haiz, tôi chưa đủ tâm huyết'}
   ],
   patterns:[
     {s:'唉，+ câu than thở / tiếc nuối',m:'Thở dài vì bất lực hoặc tiếc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Haiz, tuy đã cố hết sức nhưng vẫn không qua.',answer:'唉，虽然尽力了，但是还是没通过。',answerPy:'Ài, suīrán jìnlì le, dànshì háishi méi tōngguò.',
      note:'唉 = thở dài tiếc nuối (không dùng 哎).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Ôi, đến cậu cũng không biết thì tớ càng không biết.',answer:'唉，连你都不知道，我就更不知道了。',answerPy:'Ài, lián nǐ dōu bù zhīdào, wǒ jiù gèng bù zhīdào le.',
      note:'唉 bất lực; 连……都…….',pair:'连……都……'}
   ]},

  {n:43,zh:'金属',py:'jīnshǔ',pos:'Danh từ',vn:'kim loại',hv:'kim thuộc',em:'🔩',lesson:1,
   explain:['Các chất như sắt, đồng, vàng, bạc… cứng, dẫn điện. Hán–Việt "kim thuộc" — tiếng Việt nói "kim loại".'],
   usage:'金属材料, 金属做的, 像金属那样硬. 属 đọc shǔ.',
   collo:['金属材料','金属做的','像金属那样硬'],
   ex_zh:'如果诚心实意，即使像金属和石头那样硬的东西也会被打动。',ex_py:'Rúguǒ chéngxīn shíyì, jíshǐ xiàng jīnshǔ hé shítou nàyàng yìng de dōngxi yě huì bèi dǎdòng.',ex_vn:'Nếu thành tâm thật lòng thì dù là thứ cứng như kim loại và đá cũng sẽ bị lay động.',
   exList:[
     {zh:'如果诚心实意，即使像金属和石头那样硬的东西也会被打动。',py:'Rúguǒ chéngxīn shíyì, jíshǐ xiàng jīnshǔ hé shítou nàyàng yìng de dōngxi yě huì bèi dǎdòng.',vn:'Nếu thành tâm thật lòng thì dù là thứ cứng như kim loại và đá cũng sẽ bị lay động.'},
     {zh:'这个花盆是金属做的，比塑料的结实多了。',py:'Zhège huāpén shì jīnshǔ zuò de, bǐ sùliào de jiēshi duō le.',vn:'Chậu hoa này làm bằng kim loại, chắc hơn loại bằng nhựa nhiều.'},
     {zh:'金属在冬天摸起来很凉。',py:'Jīnshǔ zài dōngtiān mō qǐlái hěn liáng.',vn:'Kim loại mùa đông sờ vào rất lạnh.'}
   ],
   colloFull:[
     {zh:'金属材料',py:'jīnshǔ cáiliào',vn:'vật liệu kim loại'},
     {zh:'金属做的',py:'jīnshǔ zuò de',vn:'làm bằng kim loại'},
     {zh:'像金属那样硬',py:'xiàng jīnshǔ nàyàng yìng',vn:'cứng như kim loại'},
     {zh:'金属门',py:'jīnshǔ mén',vn:'cửa kim loại'}
   ],
   patterns:[
     {s:'像 + 金属 + 那样 + Adj',m:'(Cứng) như kim loại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cửa này là làm bằng kim loại, không dễ hỏng.',answer:'这扇门是金属做的，不容易坏。',answerPy:'Zhè shàn mén shì jīnshǔ zuò de, bù róngyì huài.',
      note:'是 + chất liệu + 做的.',pair:'是……的'},
     {promptLang:'vi',prompt:'Giá kim loại càng ngày càng cao.',answer:'金属的价格越来越高了。',answerPy:'Jīnshǔ de jiàgé yuè lái yuè gāo le.',
      note:'越来越 + tính từ + 了.',pair:'越来越'}
   ]},

  {n:44,zh:'硬',py:'yìng',pos:'Tính từ',vn:'cứng, rắn',hv:'ngạnh',em:'🧱',lesson:1,
   explain:['Chắc, khó làm biến dạng. Trái nghĩa: 软 (mềm).','Nghĩa bóng: cứng rắn, cứng cỏi (态度很硬); phó từ khẩu ngữ "cố, gượng" (硬撑).'],
   usage:'很硬, 又硬又……, 像……那样硬. Làm bổ ngữ: 冻硬了.',
   collo:['很硬','那样硬','硬的东西','又冷又硬'],
   ex_zh:'即使像金属和石头那样硬的东西也会被打动。',ex_py:'Jíshǐ xiàng jīnshǔ hé shítou nàyàng yìng de dōngxi yě huì bèi dǎdòng.',ex_vn:'Dù là thứ cứng như kim loại và đá cũng sẽ bị lay động.',
   exList:[
     {zh:'即使像金属和石头那样硬的东西也会被打动。',py:'Jíshǐ xiàng jīnshǔ hé shítou nàyàng yìng de dōngxi yě huì bèi dǎdòng.',vn:'Dù là thứ cứng như kim loại và đá cũng sẽ bị lay động.'},
     {zh:'这个面包放了三天，已经硬得咬不动了。',py:'Zhège miànbāo fàngle sān tiān, yǐjīng yìng de yǎo bu dòng le.',vn:'Cái bánh mì này để ba ngày rồi, cứng đến mức cắn không nổi.'},
     {zh:'这张床太硬了，我睡不着。',py:'Zhè zhāng chuáng tài yìng le, wǒ shuì bu zháo.',vn:'Cái giường này cứng quá, tôi ngủ không được.'}
   ],
   colloFull:[
     {zh:'很硬',py:'hěn yìng',vn:'rất cứng'},
     {zh:'那样硬',py:'nàyàng yìng',vn:'cứng như thế'},
     {zh:'硬的东西',py:'yìng de dōngxi',vn:'đồ cứng'},
     {zh:'又冷又硬',py:'yòu lěng yòu yìng',vn:'vừa lạnh vừa cứng'}
   ],
   patterns:[
     {s:'像 A 那样 + 硬',m:'Cứng như A'},
     {s:'硬 + 得 + bổ ngữ',m:'Cứng đến mức …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tảng đá này cứng đến mức đến búa cũng không đập vỡ được.',answer:'这块石头硬得连锤子都打不碎。',answerPy:'Zhè kuài shítou yìng de lián chuízi dōu dǎ bu suì.',
      note:'硬得 + 连……都 + V不碎 (ôn 碎).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Để ngoài trời một đêm, cái bánh bị đông cứng lại.',answer:'在外面放了一夜，面包被冻硬了。',answerPy:'Zài wàimiàn fàngle yí yè, miànbāo bèi dòngyìng le.',
      note:'硬 làm bổ ngữ kết quả: 冻硬.',pair:'被'}
   ]},

  {n:45,zh:'便',py:'biàn',pos:'Phó từ',vn:'thì, liền, bèn, là (= 就, văn viết)',hv:'tiện',em:'➡️',lesson:1,
   explain:['Phó từ, nghĩa như 就, chỉ việc xảy ra một cách tự nhiên trong điều kiện/hoàn cảnh nào đó. Dùng trong VĂN VIẾT.','Đứng sau chủ ngữ, trước động từ: 这一成语也便由此流传下来. Đây là điểm ngữ pháp của bài.'],
   usage:'Chủ ngữ + 便 + V. Hay đi với: 一……便……, 只要……便……, 如果……便…….',
   collo:['便由此流传下来','一……便……','便可以','便开始'],
   ex_zh:'“精诚所至，金石为开”这一成语也便由此流传下来。',ex_py:'"Jīngchéng suǒ zhì, jīnshí wéi kāi" zhè yì chéngyǔ yě biàn yóucǐ liúchuán xiàlái.',ex_vn:'Thành ngữ "lòng thành cảm động đá vàng" cũng từ đó mà lưu truyền.',
   exList:[
     {zh:'“精诚所至，金石为开”这一成语也便由此流传下来。',py:'"Jīngchéng suǒ zhì, jīnshí wéi kāi" zhè yì chéngyǔ yě biàn yóucǐ liúchuán xiàlái.',vn:'Thành ngữ "lòng thành cảm động đá vàng" cũng từ đó mà lưu truyền.'},
     {zh:'楼上新买了一架钢琴，我们家便多了一些不安静。',py:'Lóu shàng xīn mǎile yí jià gāngqín, wǒmen jiā biàn duōle yìxiē bù ānjìng.',vn:'Nhà tầng trên mới mua một cây đàn piano, nhà chúng tôi thế là bớt yên tĩnh hẳn.'},
     {zh:'很多时候，仅仅是换一种心情，换一个角度，便可以从困境中走出来。',py:'Hěn duō shíhou, jǐnjǐn shì huàn yì zhǒng xīnqíng, huàn yí ge jiǎodù, biàn kěyǐ cóng kùnjìng zhōng zǒu chūlái.',vn:'Nhiều khi chỉ cần đổi tâm trạng, đổi góc nhìn là có thể bước ra khỏi khốn cảnh.'}
   ],
   colloFull:[
     {zh:'便由此流传下来',py:'biàn yóucǐ liúchuán xiàlái',vn:'thế là từ đó lưu truyền'},
     {zh:'一……便……',py:'yī……biàn……',vn:'vừa … liền …'},
     {zh:'便可以',py:'biàn kěyǐ',vn:'thì có thể'},
     {zh:'便开始',py:'biàn kāishǐ',vn:'liền bắt đầu'}
   ],
   patterns:[
     {s:'Chủ ngữ + 便 + V (= 就, văn viết)',m:'… thì / liền …'},
     {s:'一 + V1，便 + V2',m:'Vừa … liền … (văn viết của 一……就……)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy vừa ra khỏi cửa thì phát hiện không mang chìa khoá, liền quay lại lấy. (dùng 便)',answer:'他一出门，发现没带钥匙，便转身回去拿。',answerPy:'Tā yì chūmén, fāxiàn méi dài yàoshi, biàn zhuǎnshēn huíqù ná.',
      note:'便 thay 就 trong văn viết; đứng trước động từ 转身.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần chịu khó luyện, thì có thể nói tiếng Trung ngày càng lưu loát. (dùng 便)',answer:'只要肯练习，便能把汉语说得越来越流利。',answerPy:'Zhǐyào kěn liànxí, biàn néng bǎ Hànyǔ shuō de yuè lái yuè liúlì.',
      note:'只要……便…… = 只要……就…… (văn viết); lồng câu 把 + 越来越.',pair:'只要……就……'}
   ]},

  // ───────── 专有名词 ─────────
  {n:46,zh:'西汉',py:'Xī Hàn',pos:'Danh từ riêng',vn:'nhà Tây Hán (206 TCN – 25 SCN)',hv:'Tây Hán',em:'🏯',lesson:1,
   explain:['Triều đại Tây Hán (206 TCN – 25 SCN), kinh đô ở Trường An. Nửa sau của nhà Hán gọi là Đông Hán (东汉).'],
   usage:'西汉时期 (thời Tây Hán), 西汉的…….',
   collo:['西汉时期','西汉的将军'],
   ex_zh:'西汉时期有一位著名的将军叫李广。',ex_py:'Xī Hàn shíqī yǒu yí wèi zhùmíng de jiāngjūn jiào Lǐ Guǎng.',ex_vn:'Thời Tây Hán có một vị tướng nổi tiếng tên là Lý Quảng.',
   exList:[
     {zh:'西汉时期有一位著名的将军叫李广。',py:'Xī Hàn shíqī yǒu yí wèi zhùmíng de jiāngjūn jiào Lǐ Guǎng.',vn:'Thời Tây Hán có một vị tướng nổi tiếng tên là Lý Quảng.'},
     {zh:'这个成语故事发生在西汉。',py:'Zhège chéngyǔ gùshi fāshēng zài Xī Hàn.',vn:'Câu chuyện thành ngữ này xảy ra vào thời Tây Hán.'}
   ],
   colloFull:[
     {zh:'西汉时期',py:'Xī Hàn shíqī',vn:'thời Tây Hán'},
     {zh:'西汉的将军',py:'Xī Hàn de jiāngjūn',vn:'tướng quân thời Tây Hán'},
     {zh:'西汉的学者',py:'Xī Hàn de xuézhě',vn:'học giả thời Tây Hán'}
   ],
   patterns:[
     {s:'Triều đại + 时期',m:'Thời … (西汉时期, 唐朝时期)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này là xảy ra vào thời Tây Hán.',answer:'这个故事是在西汉时期发生的。',answerPy:'Zhège gùshi shì zài Xī Hàn shíqī fāshēng de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Thời Tây Hán không chỉ có Lý Quảng mà còn có Dương Hùng.',answer:'西汉时期不仅有李广，也有扬雄。',answerPy:'Xī Hàn shíqī bùjǐn yǒu Lǐ Guǎng, yě yǒu Yáng Xióng.',
      note:'不仅……也…… nối hai nhân vật.',pair:'不仅……也……'}
   ]},

  {n:47,zh:'李广',py:'Lǐ Guǎng',pos:'Danh từ riêng',vn:'Lý Quảng (? – 119 TCN)',hv:'Lý Quảng',em:'🏹',lesson:1,
   explain:['Danh tướng thời Tây Hán, giỏi cưỡi ngựa bắn cung, được quân Hung Nô gọi là "飞将军" (Phi tướng quân).'],
   usage:'Tên riêng, dùng như danh từ: 李广将军, 李广射石.',
   collo:['李广将军','李广射石'],
   ex_zh:'李广摇摇头，表示不要紧。',ex_py:'Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn.',ex_vn:'Lý Quảng lắc đầu, ra ý không sao cả.',
   exList:[
     {zh:'李广摇摇头，表示不要紧。',py:'Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn.',vn:'Lý Quảng lắc đầu, ra ý không sao cả.'},
     {zh:'连李广自己都不相信他能有这么大的力气。',py:'Lián Lǐ Guǎng zìjǐ dōu bù xiāngxìn tā néng yǒu zhème dà de lìqi.',vn:'Đến chính Lý Quảng cũng không tin mình lại có sức mạnh lớn đến thế.'}
   ],
   colloFull:[
     {zh:'李广将军',py:'Lǐ Guǎng jiāngjūn',vn:'tướng quân Lý Quảng'},
     {zh:'李广射石',py:'Lǐ Guǎng shè shí',vn:'Lý Quảng bắn đá'},
     {zh:'飞将军李广',py:'Fēi Jiāngjūn Lǐ Guǎng',vn:'Phi tướng quân Lý Quảng'}
   ],
   patterns:[
     {s:'连 + 李广自己 + 都 + ……',m:'Đến chính Lý Quảng cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lý Quảng được gọi là "Phi tướng quân".',answer:'李广被称为“飞将军”。',answerPy:'Lǐ Guǎng bèi chēngwéi "Fēi Jiāngjūn".',
      note:'被称为 + danh hiệu.',pair:'被'},
     {promptLang:'vi',prompt:'Lý Quảng vừa thấy con hổ liền rút tên ra.',answer:'李广一看到老虎，就取出了一支箭。',answerPy:'Lǐ Guǎng yí kàndào lǎohǔ, jiù qǔchūle yì zhī jiàn.',
      note:'一……就……; lượng từ 支 cho tên.',pair:'一……就……'}
   ]},

  {n:48,zh:'扬雄',py:'Yáng Xióng',pos:'Danh từ riêng',vn:'Dương Hùng (53 TCN – 18 SCN)',hv:'Dương Hùng',em:'📚',lesson:1,
   explain:['Học giả, nhà văn nổi tiếng cuối thời Tây Hán. Trong bài, ông giải thích chuyện Lý Quảng bắn đá bằng câu "精诚所至，金石为开".'],
   usage:'Tên riêng: 学者扬雄, 扬雄回答说…….',
   collo:['学者扬雄','扬雄回答说'],
   ex_zh:'人们就去问当时最有影响力的学者扬雄。',ex_py:'Rénmen jiù qù wèn dāngshí zuì yǒu yǐngxiǎnglì de xuézhě Yáng Xióng.',ex_vn:'Người ta bèn đi hỏi học giả có ảnh hưởng nhất lúc bấy giờ là Dương Hùng.',
   exList:[
     {zh:'人们就去问当时最有影响力的学者扬雄。',py:'Rénmen jiù qù wèn dāngshí zuì yǒu yǐngxiǎnglì de xuézhě Yáng Xióng.',vn:'Người ta bèn đi hỏi học giả có ảnh hưởng nhất lúc bấy giờ là Dương Hùng.'},
     {zh:'扬雄回答说：“如果诚心实意，即使像金属和石头那样硬的东西也会被打动。”',py:'Yáng Xióng huídá shuō: "Rúguǒ chéngxīn shíyì, jíshǐ xiàng jīnshǔ hé shítou nàyàng yìng de dōngxi yě huì bèi dǎdòng."',vn:'Dương Hùng đáp: "Nếu thành tâm thật lòng thì dù là thứ cứng như kim loại và đá cũng sẽ bị lay động."'}
   ],
   colloFull:[
     {zh:'学者扬雄',py:'xuézhě Yáng Xióng',vn:'học giả Dương Hùng'},
     {zh:'扬雄回答说',py:'Yáng Xióng huídá shuō',vn:'Dương Hùng trả lời'},
     {zh:'去问扬雄',py:'qù wèn Yáng Xióng',vn:'đi hỏi Dương Hùng'}
   ],
   patterns:[
     {s:'Chức danh + tên (学者扬雄)',m:'Đặt chức danh trước tên riêng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu trả lời này là Dương Hùng đưa ra.',answer:'这个回答是扬雄给出的。',answerPy:'Zhège huídá shì Yáng Xióng gěichū de.',
      note:'是……的 nhấn mạnh người nói.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy mọi người thấy khó hiểu chuyện này, nhưng Dương Hùng giải thích rất rõ.',answer:'虽然大家对这件事感到不解，但是扬雄解释得很清楚。',answerPy:'Suīrán dàjiā duì zhè jiàn shì gǎndào bùjiě, dànshì Yáng Xióng jiěshì de hěn qīngchu.',
      note:'虽然……但是…… nối hai vế đối lập.',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — hai câu chuyện, mỗi truyện một file nghe (dlg-1 / dlg-2)
// Chép nguyên văn sách, mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文一 · 盲人摸象',
   preQuiz:[
     {q:'国王是一个什么样的人？',opts:['很年轻的人','很有智慧的人','很害怕动物的人'],ans:1},
     {q:'国王让士兵们去找什么样的人？',opts:['出生时眼睛就瞎了的人','会骑马的人','会讲故事的人'],ans:0},
     {q:'士兵们是怎么寻找的？',opts:['大家一起去一个地方','请别人帮忙寻找','分别去不同地方寻找'],ans:2},
     {q:'摸到牙齿的盲人觉得大象像什么？',opts:['一条绳子','一个角','一面墙'],ans:1},
     {q:'摸到尾巴的盲人觉得大象像什么？',opts:['一条绳子','一把扇子','一个角'],ans:0},
     {q:'谁觉得大象像一面又高又平的墙？',opts:['摸到耳朵的盲人','摸到牙齿的盲人','摸到大象身子的盲人'],ans:2},
     {q:'说大象“像一把扇子”的盲人摸到了哪儿？',opts:['尾巴','耳朵','牙齿'],ans:1},
     {q:'听了盲人们的话，国王怎么样了？',opts:['笑了起来','生气了','哭了起来'],ans:0},
     {q:'国王认为盲人们的问题是什么？',opts:['说话太快','眼睛看不见','每个人都只摸到了一点'],ans:2},
     {q:'这个故事告诉我们什么道理？',opts:['只有片面的认识是不能下结论的','大象是一种很大的动物','盲人不应该去摸大象'],ans:0}
   ],
   lines:[
    {sp:0,zh:'很久以前，有一个很有智慧的国王。一天，他让士兵们去找一头大象和一些出生时眼睛就瞎了的人回来。士兵们分别去不同地方寻找，把找到的大象和盲人带到他面前。',
     py:'Hěn jiǔ yǐqián, yǒu yí ge hěn yǒu zhìhuì de guówáng. Yì tiān, tā ràng shìbīngmen qù zhǎo yì tóu dàxiàng hé yìxiē chūshēng shí yǎnjing jiù xiā le de rén huílái. Shìbīngmen fēnbié qù bù tóng dìfang xúnzhǎo, bǎ zhǎodào de dàxiàng hé mángrén dàidào tā miànqián.',
     vn:'Ngày xửa ngày xưa, có một vị vua rất sáng suốt. Một hôm, ông sai binh lính đi tìm về một con voi và mấy người bị mù từ lúc mới sinh. Binh lính chia nhau đi tìm ở những nơi khác nhau, rồi đưa con voi và những người mù tìm được đến trước mặt vua.'},
    {sp:0,zh:'国王叫盲人们去摸一摸大象，问他们：“你们觉得大象是什么样的呢？”摸到牙齿的盲人说：“我觉得像一个角。”“胡说！”摸到尾巴的盲人说，“它像一条绳子。”摸到大象身子的盲人说：“我觉得像一面又高又平的墙。”“不，你们都错了，应该是像一把扇子。”这个盲人摸到了大象的耳朵。',
     py:'Guówáng jiào mángrénmen qù mō yi mō dàxiàng, wèn tāmen: "Nǐmen juéde dàxiàng shì shénme yàng de ne?" Mōdào yáchǐ de mángrén shuō: "Wǒ juéde xiàng yí ge jiǎo." "Húshuō!" Mōdào wěiba de mángrén shuō, "Tā xiàng yì tiáo shéngzi." Mōdào dàxiàng shēnzi de mángrén shuō: "Wǒ juéde xiàng yí miàn yòu gāo yòu píng de qiáng." "Bù, nǐmen dōu cuò le, yīnggāi shì xiàng yì bǎ shànzi." Zhège mángrén mōdàole dàxiàng de ěrduo.',
     vn:'Nhà vua bảo những người mù đi sờ thử con voi, rồi hỏi họ: "Các ngươi thấy con voi trông thế nào?" Người mù sờ trúng cái ngà nói: "Tôi thấy nó giống một cái sừng." "Nói bậy!" người mù sờ trúng cái đuôi nói, "Nó giống một sợi dây thừng." Người mù sờ trúng thân voi nói: "Tôi thấy nó giống một bức tường vừa cao vừa phẳng." "Không, các anh đều sai cả rồi, phải là giống một chiếc quạt." Người mù này sờ trúng tai voi.'},
    {sp:0,zh:'国王笑了起来：“你们每个人都只摸到了一点，就认为自己了解全部了吗？只有片面的认识是不能下结论的。”',
     py:'Guówáng xiàole qǐlái: "Nǐmen měi ge rén dōu zhǐ mōdàole yìdiǎn, jiù rènwéi zìjǐ liǎojiě quánbù le ma? Zhǐyǒu piànmiàn de rènshi shì bù néng xià jiélùn de."',
     vn:'Nhà vua bật cười: "Mỗi người các ngươi chỉ sờ được một chút mà đã cho rằng mình hiểu hết toàn bộ rồi sao? Chỉ có nhận thức phiến diện thì không thể đưa ra kết luận được."'}
   ]},

  {scene:'课文二 · 精诚所至，金石为开',
   preQuiz:[
     {q:'李广是哪个时期的人？',opts:['东汉','西汉','唐朝'],ans:1},
     {q:'李广为什么被称为“飞将军”？',opts:['他善于骑马射箭，作战勇敢','他会飞','他跑步跑得最快'],ans:0},
     {q:'李广打猎的时候发现了什么？',opts:['一头大象','一群士兵','远处蹲着一只大老虎'],ans:2},
     {q:'士兵们为什么紧张地围了上来？',opts:['想要保护李广','想看看老虎','想一起射箭'],ans:0},
     {q:'李广摇摇头是什么意思？',opts:['他很害怕','表示不要紧','他不想打猎了'],ans:1},
     {q:'李广射箭的时候是什么样子？',opts:['一边说话一边射','闭着眼睛射','全神贯注，用尽全力'],ans:2},
     {q:'士兵们小心地走上前去，想做什么？',opts:['确定老虎是不是死了','把箭拿回来','把老虎带回家'],ans:0},
     {q:'被射中的其实是什么？',opts:['一只死老虎','一块形状很像老虎的大石头','一棵大树'],ans:1},
     {q:'李广再射的时候，结果怎么样？',opts:['射得更深了','射中了一只真老虎','都没能再射进去'],ans:2},
     {q:'李广自己觉得这是为什么？',opts:['大概是自己不够用心了','箭太旧了','石头太大了'],ans:0},
     {q:'扬雄认为，在什么情况下，金属和石头也会被打动？',opts:['力气很大的时候','诚心实意的时候','士兵很多的时候'],ans:1}
   ],
   lines:[
    {sp:0,zh:'西汉时期有一位著名的将军叫李广，他善于骑马射箭，作战勇敢，被称为“飞将军”。一天傍晚，他正带着士兵们在山中打猎，忽然发现远处蹲着一只大老虎。士兵们都紧张地围了上来，想要保护他。李广摇摇头，表示不要紧。只见他从箭袋里取出一支箭，摆好姿势，全神贯注，用尽全力向老虎射去。',
     py:'Xī Hàn shíqī yǒu yí wèi zhùmíng de jiāngjūn jiào Lǐ Guǎng, tā shànyú qí mǎ shè jiàn, zuòzhàn yǒnggǎn, bèi chēngwéi "Fēi Jiāngjūn". Yì tiān bàngwǎn, tā zhèng dàizhe shìbīngmen zài shān zhōng dǎ liè, hūrán fāxiàn yuǎnchù dūnzhe yì zhī dà lǎohǔ. Shìbīngmen dōu jǐnzhāng de wéile shànglái, xiǎng yào bǎohù tā. Lǐ Guǎng yáoyao tóu, biǎoshì bú yàojǐn. Zhǐ jiàn tā cóng jiàndài li qǔchū yì zhī jiàn, bǎihǎo zīshì, quánshén guànzhù, yòngjìn quánlì xiàng lǎohǔ shè qù.',
     vn:'Thời Tây Hán có một vị tướng nổi tiếng tên là Lý Quảng, ông giỏi cưỡi ngựa bắn cung, đánh trận dũng cảm, được gọi là "Phi tướng quân". Một chiều nọ, ông đang dẫn binh lính đi săn trong núi thì bỗng phát hiện đằng xa có một con hổ lớn đang ngồi. Binh lính đều căng thẳng vây lại, muốn bảo vệ ông. Lý Quảng lắc đầu, ra ý không sao cả. Chỉ thấy ông rút từ ống tên ra một mũi tên, vào tư thế, dồn hết tinh thần, dùng toàn lực bắn về phía con hổ.'},
    {sp:0,zh:'过了一会儿，老虎没什么反应，士兵们小心地走上前去，想确定它是不是死了。没想到仔细一看，被射中的竟不是老虎，而是一块形状很像老虎的大石头，而且一整支箭几乎全都射到石头中去了！大家都很吃惊，连李广自己都不相信他能有这么大的力气，于是他想再试试。可是，这次他连续换了几根箭，都没能再射进去，有的箭头碎了，有的箭杆断了，而大石头一点儿变化也没有。“哎，怎么会这样？”士兵奇怪地你看我，我看你。“唉！大概是我不够用心了吧！”李广也无奈地说。',
     py:'Guòle yíhuìr, lǎohǔ méi shénme fǎnyìng, shìbīngmen xiǎoxīn de zǒu shàng qián qù, xiǎng quèdìng tā shì bu shì sǐ le. Méi xiǎngdào zǐxì yí kàn, bèi shèzhòng de jìng bú shì lǎohǔ, ér shì yí kuài xíngzhuàng hěn xiàng lǎohǔ de dà shítou, érqiě yì zhěng zhī jiàn jīhū quán dōu shèdào shítou zhōng qù le! Dàjiā dōu hěn chījīng, lián Lǐ Guǎng zìjǐ dōu bù xiāngxìn tā néng yǒu zhème dà de lìqi, yúshì tā xiǎng zài shìshi. Kěshì, zhè cì tā liánxù huànle jǐ gēn jiàn, dōu méi néng zài shè jìnqù, yǒude jiàntóu suì le, yǒude jiàngǎn duàn le, ér dà shítou yìdiǎnr biànhuà yě méiyǒu. "Āi, zěnme huì zhèyàng?" Shìbīng qíguài de nǐ kàn wǒ, wǒ kàn nǐ. "Ài! Dàgài shì wǒ bú gòu yòngxīn le ba!" Lǐ Guǎng yě wúnài de shuō.',
     vn:'Một lúc sau, con hổ chẳng có phản ứng gì, binh lính thận trọng bước tới, muốn xác định xem nó đã chết chưa. Không ngờ nhìn kỹ lại, thứ bị bắn trúng hoá ra không phải hổ, mà là một tảng đá lớn có hình dáng rất giống hổ, hơn nữa cả mũi tên gần như cắm ngập vào trong đá! Mọi người đều rất kinh ngạc, đến chính Lý Quảng cũng không tin mình lại có sức mạnh lớn đến thế, thế là ông muốn thử lại. Nhưng lần này ông liên tiếp thay mấy mũi tên mà đều không bắn ngập vào được nữa, có mũi thì đầu tên vỡ nát, có mũi thì cán tên gãy, còn tảng đá thì chẳng suy suyển chút nào. "Ơ, sao lại thế này?" Binh lính ngạc nhiên nhìn nhau. "Chao ôi! Có lẽ là ta chưa đủ dốc lòng rồi!" Lý Quảng cũng bất lực nói.'},
    {sp:0,zh:'人们对这件事情感到很不解，就去问当时最有影响力的学者扬雄。扬雄回答说：“如果诚心实意，即使像金属和石头那样硬的东西也会被打动。”“精诚所至，金石为开”这一成语也便由此流传下来。',
     py:'Rénmen duì zhè jiàn shìqing gǎndào hěn bùjiě, jiù qù wèn dāngshí zuì yǒu yǐngxiǎnglì de xuézhě Yáng Xióng. Yáng Xióng huídá shuō: "Rúguǒ chéngxīn shíyì, jíshǐ xiàng jīnshǔ hé shítou nàyàng yìng de dōngxi yě huì bèi dǎdòng." "Jīngchéng suǒ zhì, jīnshí wéi kāi" zhè yì chéngyǔ yě biàn yóucǐ liúchuán xiàlái.',
     vn:'Mọi người thấy chuyện này rất khó hiểu, bèn đi hỏi Dương Hùng — học giả có ảnh hưởng nhất thời bấy giờ. Dương Hùng đáp: "Nếu thành tâm thật lòng thì dù là thứ cứng như kim loại và đá cũng sẽ bị lay động." Thành ngữ "Tinh thành sở chí, kim thạch vi khai" (lòng thành cảm động đá vàng) cũng từ đó mà lưu truyền lại.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析
// Cặp 忽然—突然 lấy từ sách (tr. 71–72); 反应—反映, 连续—继续 lấy từ 练习 2 của sách
// ══════════════════════════════════════════
var synonymData = [
  {pair:'忽然 — 突然',
   same:'Đều đứng TRƯỚC động từ, biểu thị việc xảy ra rất nhanh, không ngờ tới. Ở vị trí trước động từ thì thay nhau được.',
   sameEx:{zh:'我们正在上课，他忽然／突然站了起来。',vn:'Chúng tôi đang học thì cậu ấy bỗng đứng bật dậy.'},
   items:[
     {word:'忽然',points:[
       'CHỈ là phó từ.',
       'Chỉ đứng trước động từ hoặc trước một mệnh đề ngắn (chỗ này thay bằng 突然 được).',
       'KHÔNG làm vị ngữ, bổ ngữ, định ngữ: không nói 太忽然了, 忽然的变化.'
     ],ex:[{zh:'一天傍晚，他正带着士兵们在山中打猎，忽然发现远处的草丛中蹲着一只大老虎。',vn:'Một chiều nọ, ông đang dẫn binh lính đi săn trong núi thì bỗng phát hiện trong bụi cỏ đằng xa có một con hổ lớn đang ngồi.'}]},
     {word:'突然',points:[
       'Vừa là phó từ, vừa là TÍNH TỪ.',
       'Làm vị ngữ: 这件事太突然了！',
       'Làm bổ ngữ (发生得太突然了) và định ngữ (突然的变化).'
     ],ex:[{zh:'这件事太突然了！',vn:'Chuyện này đột ngột quá!'},
          {zh:'这件事发生得太突然了！',vn:'Chuyện này xảy ra đột ngột quá!'},
          {zh:'这突然的一声喊叫吓了我一跳。',vn:'Tiếng hét bất thình lình ấy làm tôi giật mình.'}]}
   ],
   quiz:[
     {sentence:'他抱着小狗走到门口，＿＿想起妈妈不允许他在家里养小动物。',options:['忽然','突然'],answer:0,both:true,
      why:'Đứng trước động từ 想起 — cả hai đều dùng được.'},
     {sentence:'消息来得太＿＿了，我完全没有准备。',options:['忽然','突然'],answer:1,
      why:'Làm BỔ NGỮ sau 得 (来得太…了) — chỉ tính từ 突然 làm được.'},
     {sentence:'这是一个＿＿的变化，我们谁也没想到。',options:['忽然','突然'],answer:1,
      why:'Làm ĐỊNH NGỮ trước 的变化 — chỉ 突然 (tính từ).'},
     {sentence:'有个铁路工人＿＿就辞了职，买帆船出海了，你听说了吗？',options:['忽然','突然'],answer:0,both:true,
      why:'Đứng trước động từ (就辞了职) — cả hai đều được.'}
   ],
   sgk:{
     chung:{t:'都可用在动词前，表示很快发生、没想到的意思。',vn:'Đều dùng được trước động từ, biểu thị việc xảy ra rất nhanh, không ngờ tới.',vd:'我们正在上课，他忽然／突然站了起来。',vdVn:'Chúng tôi đang học thì cậu ấy bỗng đứng bật dậy.'},
     khac:[
       {a:{t:'是副词，只能用在动词或小句前（可以替换成“突然”）。',vn:'Là phó từ, chỉ dùng trước động từ hoặc mệnh đề ngắn (có thể thay bằng 突然).',vd:'一天傍晚，他正带着士兵们在山中打猎，忽然发现远处的草丛中蹲着一只大老虎。',vdVn:'Một chiều nọ, ông đang dẫn binh lính đi săn trong núi thì bỗng phát hiện trong bụi cỏ đằng xa có một con hổ lớn đang ngồi.'},
        b:{t:'是副词，也是形容词，可做谓语、补语、定语。',vn:'Là phó từ, cũng là tính từ, làm được vị ngữ, bổ ngữ, định ngữ.',vd:'这件事太突然了！（形容词，谓语）　这件事发生得太突然了！（补语）　这突然的一声喊叫吓了我一跳。（形容词，定语）',vdVn:'Chuyện này đột ngột quá! (vị ngữ) · Chuyện này xảy ra đột ngột quá! (bổ ngữ) · Tiếng hét bất thình lình ấy làm tôi giật mình. (định ngữ)'}}
     ],
     lamThu:[
       {s:'他抱着小狗走到门口，＿＿想起妈妈不允许他在家里养小动物。',dap:[true,true],mau:true,
        giai:'Đứng trước động từ 想起 — cả 忽然 và 突然 đều dùng được.'},
       {s:'消息来得太＿＿了，我完全没有准备。',dap:[false,true],
        giai:'Vị trí bổ ngữ sau 得 — chỉ tính từ 突然; 忽然 là phó từ, không làm bổ ngữ.'},
       {s:'这是一个＿＿的变化，我们谁也没想到。',dap:[false,true],
        giai:'Làm định ngữ (＿＿的变化) — chỉ 突然.'},
       {s:'有个铁路工人＿＿就辞了职，买帆船出海了，你听说了吗？',dap:[true,true],
        giai:'Đứng trước cụm động từ 就辞了职 — cả hai đều được.'}
     ]
   }},

  {pair:'反应 — 反映',
   same:'Đọc GIỐNG HỆT nhau (fǎnyìng), đều làm được động từ và danh từ — nhưng nghĩa KHÁC HẲN, không thay nhau được.',
   sameEx:{zh:'他反应很快，马上向经理反映了这个问题。',vn:'Anh ấy phản ứng rất nhanh, lập tức báo vấn đề này lên giám đốc.'},
   items:[
     {word:'反应',points:[
       'PHẢN ỨNG: đáp lại khi gặp một tình huống, kích thích.',
       'Chủ thể là người, động vật, cơ thể, thuốc…',
       'Hay gặp: 没什么反应, 反应很快, 做出反应, 反应过来.'
     ],ex:[{zh:'过了一会儿，老虎没什么反应。',vn:'Một lúc sau, con hổ chẳng có phản ứng gì.'},
          {zh:'对我们提出的意见，老板还没有做出反应。',vn:'Với ý kiến chúng tôi đưa ra, ông chủ vẫn chưa có phản hồi.'}]},
     {word:'反映',points:[
       'PHẢN ÁNH: thể hiện ra bản chất, hiện thực (电影反映生活).',
       'Trình bày tình hình, ý kiến LÊN cấp trên: 向……反映.',
       'Không dùng cho phản ứng tức thời của cơ thể.'
     ],ex:[{zh:'这本小说反映了当时人们的生活。',vn:'Cuốn tiểu thuyết này phản ánh cuộc sống của con người thời đó.'},
          {zh:'有问题可以向班主任反映。',vn:'Có vấn đề gì có thể phản ánh với giáo viên chủ nhiệm.'}]}
   ],
   quiz:[
     {sentence:'对我们提出的意见，老板还没有做出＿＿。',options:['反应','反映'],answer:0,why:'做出反应 = có phản ứng/phản hồi trước một việc. 反映 không đi với 做出.'},
     {sentence:'这部电影＿＿了九十年代农村的生活。',options:['反应','反映'],answer:1,why:'Tác phẩm thể hiện hiện thực → 反映 (phản ánh).'},
     {sentence:'他的＿＿特别快，一下子就接住了球。',options:['反应','反映'],answer:0,why:'Phản xạ nhanh của cơ thể → 反应.'},
     {sentence:'食堂的菜太咸了，我们应该向学校＿＿一下。',options:['反应','反映'],answer:1,why:'Trình bày ý kiến với cấp trên: 向……反映.'}
   ]},

  {pair:'连续 — 继续',
   same:'Đều liên quan đến việc "không dừng", đều đứng trước động từ làm trạng ngữ.',
   sameEx:{zh:'他连续工作了十个小时，休息了一会儿又继续工作。',vn:'Anh ấy làm liền mười tiếng, nghỉ một lát lại tiếp tục làm.'},
   items:[
     {word:'连续',points:[
       'Nhiều lần / nhiều ngày NỐI LIỀN nhau, không gián đoạn.',
       'Thường có SỐ LƯỢNG đi kèm: 连续三天, 连续换了几根箭.',
       'Không mang nghĩa "làm tiếp sau khi dừng".'
     ],ex:[{zh:'我已经连续工作20个小时了。',vn:'Tôi đã làm việc liên tục 20 tiếng rồi.'},
          {zh:'这次他连续换了几根箭，都没能再射进去。',vn:'Lần này ông liên tiếp thay mấy mũi tên mà đều không bắn ngập vào được nữa.'}]},
     {word:'继续',points:[
       'TIẾP TỤC một việc đang làm hoặc đã dừng giữa chừng.',
       'Thường không đi với số lần: 继续学习, 继续努力, 继续说下去.',
       'Có thể đứng một mình: 请继续！'
     ],ex:[{zh:'休息十分钟，然后继续上课。',vn:'Nghỉ mười phút rồi tiếp tục học.'},
          {zh:'虽然失败了，但他还想继续试。',vn:'Tuy thất bại nhưng anh ấy vẫn muốn tiếp tục thử.'}]}
   ],
   quiz:[
     {sentence:'我真的需要休息了，我已经＿＿工作20个小时了。',options:['连续','继续'],answer:0,why:'20 tiếng liền không nghỉ, có số lượng → 连续.'},
     {sentence:'休息一下，我们＿＿讨论吧。',options:['连续','继续'],answer:1,why:'Dừng rồi làm tiếp → 继续.'},
     {sentence:'这个月已经＿＿下了十天雨了。',options:['连续','继续'],answer:0,why:'Mười ngày liền nhau → 连续.'},
     {sentence:'别停下来，请你＿＿说下去。',options:['连续','继续'],answer:1,why:'Nói tiếp phần đang dở → 继续……下去.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'成语',hv:'thành ngữ',vn:'thành ngữ',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'智慧',hv:'trí tuệ',vn:'trí tuệ, sáng suốt',note:'Trùng khít.'},
    {zh:'片面',hv:'phiến diện',vn:'phiến diện',note:'Trùng khít, cả nghĩa lẫn cách dùng.'},
    {zh:'结论',hv:'kết luận',vn:'kết luận',note:'Trùng khít — nhưng nhớ động từ đi kèm là 下结论.'},
    {zh:'姿势',hv:'tư thế',vn:'tư thế',note:'Trùng khít.'},
    {zh:'反应',hv:'phản ứng',vn:'phản ứng',note:'Trùng khít. Cẩn thận chữ 映 trong 反映 (phản ánh).'},
    {zh:'确定',hv:'xác định',vn:'xác định, chốt',note:'Trùng khít.'},
    {zh:'连续',hv:'liên tục',vn:'liên tục, liên tiếp',note:'Trùng khít.'},
    {zh:'将军',hv:'tướng quân',vn:'vị tướng',note:'"Tướng quân" trong truyện kiếm hiệp.'},
    {zh:'金属',hv:'kim thuộc',vn:'kim loại',note:'"Kim" = kim loại, "thuộc" = loài → loài kim = kim loại.'},
    {zh:'盲人',hv:'manh nhân',vn:'người mù',note:'"Manh" như trong "manh động" (hành động mù quáng).'}
  ],
  idiom:[
    {zh:'精诚所至，金石为开',hv:'tinh thành sở chí, kim thạch vi khai',vn:'lòng thành cảm động cả đá vàng',note:'Gần với "có công mài sắt có ngày nên kim", "lòng thành thấu tới trời".'},
    {zh:'全神贯注',hv:'toàn thần quán chú',vn:'dồn hết tinh thần',note:'"Toàn thần" = toàn bộ tinh thần, "quán chú" = rót vào → dồn hết tâm trí.'},
    {zh:'盲人摸象',hv:'manh nhân mô tượng',vn:'thầy bói xem voi',note:'Tiếng Việt có sẵn thành ngữ tương đương: "thầy bói xem voi".'}
  ],
  trap:[
    {zh:'分别',hv:'phân biệt',vn:'riêng rẽ, lần lượt; chia tay',
     warn:'BẪY: "phân biệt" tiếng Việt là nhận ra chỗ khác / phân biệt đối xử. 分别 tiếng Trung chủ yếu là "mỗi người làm riêng", "lần lượt là", hoặc "chia tay". Muốn nói "phân biệt" dùng 区别/区分.'},
    {zh:'善于',hv:'thiện ư',vn:'giỏi về',
     warn:'"Thiện" ở đây không phải "hiền lành, lương thiện" mà là "giỏi, khéo" (như "thiện xạ" = bắn giỏi).'},
    {zh:'便',hv:'tiện',vn:'thì, liền, bèn',
     warn:'Không phải "tiện lợi" (方便). Trong bài 便 là phó từ = 就, đọc biàn.'},
    {zh:'石头',hv:'thạch đầu',vn:'hòn đá',
     warn:'头 chỉ là hậu tố (đọc nhẹ), không có nghĩa "cái đầu" — giống 木头 (gỗ).'},
    {zh:'胡说',hv:'hồ thuyết',vn:'nói bậy',
     warn:'"Hồ" ở đây = bừa bãi (胡乱), không liên quan "hồ nước". Là lời mắng mạnh, cẩn thận khi dùng với người lớn.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy bảng 词语搭配 của giáo trình (tr. 71) + cụm trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'寻找',right:'机会'},
  {left:'确定',right:'时间'},
  {left:'片面地',right:'看问题'},
  {left:'连续',right:'工作'},
  {left:'摸到',right:'大象的耳朵'},
  {left:'打',right:'碎'},
  {left:'一支',right:'笔'},
  {left:'一根',right:'绳子'},
  {left:'他的伤',right:'不要紧'},
  {left:'反应',right:'很快'},
  {left:'摇摇',right:'头'},
  {left:'摆好',right:'姿势'},
  {left:'全神贯注地',right:'听'},
  {left:'善于',right:'骑马射箭'},
  {left:'被称为',right:'“飞将军”'},
  {left:'下',right:'结论'},
  {left:'一头',right:'大象'},
  {left:'一面',right:'墙'},
  {left:'一把',right:'扇子'},
  {left:'用尽',right:'全力'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'他在四处',blank:'寻找',post:'，但至今仍然没有结果。',hint:'(tìm kiếm)',ans:'寻找'},
  {pre:'国王叫',blank:'盲人',post:'们去摸一摸大象。',hint:'(người mù)',ans:'盲人'},
  {pre:'我最喜欢听爷爷讲',blank:'成语',post:'故事。',hint:'(thành ngữ)',ans:'成语'},
  {pre:'今天我们学习两',blank:'则',post:'成语故事。',hint:'(lượng từ: mẩu, bản)',ans:'则'},
  {pre:'很久以前，有一个很有',blank:'智慧',post:'的国王。',hint:'(trí tuệ, sáng suốt)',ans:'智慧'},
  {pre:'国王的',blank:'士兵',post:'们分别去不同地方寻找。',hint:'(binh lính)',ans:'士兵'},
  {pre:'摸到',blank:'牙齿',post:'的盲人说：“我觉得像一个角。”',hint:'(răng, ngà)',ans:'牙齿'},
  {pre:'可爱的小狗摇着',blank:'尾巴',post:'冲我跑过来。',hint:'(cái đuôi)',ans:'尾巴'},
  {pre:'摸到尾巴的盲人说：“它像一条',blank:'绳子',post:'。”',hint:'(dây thừng)',ans:'绳子'},
  {pre:'我觉得像一面又高又',blank:'平',post:'的墙。',hint:'(bằng phẳng)',ans:'平'},
  {pre:'教室的',blank:'墙',post:'上挂着一张中国地图。',hint:'(bức tường)',ans:'墙'},
  {pre:'大象的耳朵又大又薄，像一把',blank:'扇子',post:'。',hint:'(cái quạt)',ans:'扇子'},
  {pre:'只有片面的认识是不能下',blank:'结论',post:'的。',hint:'(kết luận)',ans:'结论'},
  {pre:'西汉时期有一位著名的',blank:'将军',post:'叫李广。',hint:'(vị tướng)',ans:'将军'},
  {pre:'他作战勇敢，被',blank:'称',post:'为“飞将军”。',hint:'(gọi là)',ans:'称'},
  {pre:'一天傍晚，他正带着士兵们在山中',blank:'打猎',post:'。',hint:'(đi săn)',ans:'打猎'},
  {pre:'他忽然发现远处',blank:'蹲',post:'着一只大老虎。',hint:'(ngồi xổm, thu mình ngồi)',ans:'蹲'},
  {pre:'只见他从箭袋里取出一',blank:'支',post:'箭。',hint:'(lượng từ cho vật dài, cứng)',ans:'支'},
  {pre:'他',blank:'摆',post:'好姿势，用尽全力向老虎射去。',hint:'(bày, lấy tư thế)',ans:'摆'},
  {pre:'写字的时候',blank:'姿势',post:'要正确，不然眼睛会越来越差。',hint:'(tư thế)',ans:'姿势'},
  {pre:'同学们都在',blank:'全神贯注',post:'地听老师讲成语故事。',hint:'(dồn hết tinh thần)',ans:'全神贯注'},
  {pre:'过了一会儿，老虎没什么',blank:'反应',post:'。',hint:'(phản ứng)',ans:'反应'},
  {pre:'士兵们小心地走上前去，想',blank:'确定',post:'它是不是死了。',hint:'(xác định)',ans:'确定'},
  {pre:'被射中的竟不是老虎，而是一块大',blank:'石头',post:'。',hint:'(hòn đá)',ans:'石头'},
  {pre:'这次他',blank:'连续',post:'换了几根箭，都没能再射进去。',hint:'(liên tiếp)',ans:'连续'},
  {pre:'是谁把玻璃打',blank:'碎',post:'了？',hint:'(vỡ)',ans:'碎'},
  {pre:'这支笔的笔',blank:'杆',post:'是木头做的。',hint:'(thân, cán)',ans:'杆'},
  {pre:'即使像',blank:'金属',post:'和石头那样硬的东西也会被打动。',hint:'(kim loại)',ans:'金属'},
  {pre:'这个面包放了三天，已经',blank:'硬',post:'得咬不动了。',hint:'(cứng)',ans:'硬'},
  {pre:'“精诚所至，金石为开”这一成语也',blank:'便',post:'由此流传下来。',hint:'(thì, liền — văn viết)',ans:'便'},
  {pre:'这个成语故事发生在',blank:'西汉',post:'时期。',hint:'(nhà Tây Hán)',ans:'西汉'},
  {pre:'“飞将军”指的是西汉的名将',blank:'李广',post:'。',hint:'(Lý Quảng)',ans:'李广'},
  {pre:'人们去问当时最有影响力的学者',blank:'扬雄',post:'。',hint:'(Dương Hùng)',ans:'扬雄'},
  {pre:'别难过了，虽然成绩不理想，但你已经',blank:'尽力',post:'了。',hint:'(cố hết sức)',ans:'尽力'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (瞎 · 分别 · 根 · 便) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['你','就','别','替他','瞎担心','了','。'],ans:'你就别替他瞎担心了。',audio:'你就别替他瞎担心了。'},
  {words:['他','出生时','眼睛','就','瞎了','。'],ans:'他出生时眼睛就瞎了。',audio:'他出生时眼睛就瞎了。'},
  {words:['士兵们','分别','去','不同地方','寻找','。'],ans:'士兵们分别去不同地方寻找。',audio:'士兵们分别去不同地方寻找。'},
  {words:['我们','已经','分别','二十年','了','。'],ans:'我们已经分别二十年了。',audio:'我们已经分别二十年了。'},
  {words:['他','连续','换了','几根','箭','。'],ans:'他连续换了几根箭。',audio:'他连续换了几根箭。'},
  {words:['摸到尾巴的盲人','说','大象','像','一根绳子','。'],ans:'摸到尾巴的盲人说大象像一根绳子。',audio:'摸到尾巴的盲人说大象像一根绳子。'},
  {words:['这一成语','也','便','由此','流传下来','。'],ans:'这一成语也便由此流传下来。',audio:'这一成语也便由此流传下来。'},
  {words:['他','一','出门','便','发现','没带钥匙','。'],ans:'他一出门便发现没带钥匙。',audio:'他一出门便发现没带钥匙。'},
  {words:['国王','叫','盲人们','去','摸一摸','大象','。'],ans:'国王叫盲人们去摸一摸大象。',audio:'国王叫盲人们去摸一摸大象。'},
  {words:['他','善于','骑马射箭','，','被称为','“飞将军”','。'],ans:'他善于骑马射箭，被称为“飞将军”。',audio:'他善于骑马射箭，被称为“飞将军”。'},
  {words:['远处','蹲着','一只','大老虎','。'],ans:'远处蹲着一只大老虎。',audio:'远处蹲着一只大老虎。'},
  {words:['只有片面的认识','是','不能','下结论','的','。'],ans:'只有片面的认识是不能下结论的。',audio:'只有片面的认识是不能下结论的。'},
  {words:['连','李广自己','都','不相信','。'],ans:'连李广自己都不相信。',audio:'连李广自己都不相信。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'国王叫盲人们去____一摸大象。',opts:['摸','摇','摆','蹲'],ans:0,
   exp:'Dùng tay chạm vào để biết hình dáng → 摸 (lặp: 摸一摸). 摇 là lắc, 摆 là bày/sắp đặt, 蹲 là ngồi xổm — không mang tân ngữ 大象 theo nghĩa này.'},
  {wrong:'他让士兵们去找一头____。',opts:['大象','扇子','绳子','石头'],ans:0,
   exp:'Lượng từ 头 dùng cho thú lớn như voi, bò → 一头大象. Quạt dùng 把 (一把扇子); dây dùng 根/条; đá dùng 块 — và binh lính cũng không cần "tìm" những thứ này để thử người mù.'},
  {wrong:'别听他____说，不用害怕。',opts:['瞎','盲','平','硬'],ans:0,
   exp:'瞎 làm phó từ: làm việc không có căn cứ → 瞎说 (nói bậy). 盲 không làm phó từ như vậy; 平, 硬 là tính từ, không đi với 说 theo nghĩa này.'},
  {wrong:'他自己的问题，他会想办法的，你就别替他____担心了。',opts:['瞎','胡说','片面','分别'],ans:0,
   exp:'瞎 + động từ = làm vô ích, không có lý do → 瞎担心 (lo hão). 胡说 là động từ, không đứng trước 担心; 片面, 分别 không mang nghĩa "vô ích".'},
  {wrong:'士兵们____去不同地方寻找。',opts:['分别','区别','特别','告别'],ans:0,
   exp:'Mỗi người đi một nơi → phó từ 分别 (riêng rẽ). 区别 là danh từ/động từ "khác biệt"; 特别 là "đặc biệt"; 告别 là "từ biệt", không làm phó từ trước 去.'},
  {wrong:'一张桌子上放着三瓶饮料，____是茶、可乐和咖啡。',opts:['分别','各自','一起','连续'],ans:0,
   exp:'Liệt kê lần lượt từng thứ → 分别是……. 各自 là đại từ "ai nấy", không dùng liệt kê; 一起 là "cùng nhau"; 连续 là "liên tiếp".'},
  {wrong:'“____！”摸到尾巴的盲人说，“它像一条绳子。”',opts:['胡说','瞎','唉','便'],ans:0,
   exp:'Câu cảm thán phản bác "Nói bậy!" → 胡说！ 瞎 là phó từ, không đứng một mình thành câu; 唉 là tiếng thở dài, không mang nghĩa phản bác; 便 là phó từ "thì, liền".'},
  {wrong:'不能这样____地看问题，而要多方面地考虑。',opts:['片面','全面','平','硬'],ans:0,
   exp:'Vế sau đối lập với "nhiều mặt" → vế trước phải là 片面 (phiến diện). 全面 trái nghĩa, mâu thuẫn với câu; 平, 硬 không làm trạng ngữ cho 看问题.'},
  {wrong:'她很爱护学生，也很____教育他们。',opts:['善于','对于','关于','由于'],ans:0,
   exp:'Giỏi làm việc gì → 善于 + động từ (善于教育). 对于, 关于 là giới từ; 由于 là liên từ chỉ nguyên nhân — không đứng trước động từ theo nghĩa "giỏi".'},
  {wrong:'刚才还是晴天，____就下起大雨来了。',opts:['忽然','当然','既然','仍然'],ans:0,
   exp:'Việc xảy ra rất nhanh, bất ngờ → 忽然. 当然 = dĩ nhiên; 既然 = đã … thì …; 仍然 = vẫn như cũ.'},
  {wrong:'每天我一回家，可爱的小狗就____着尾巴冲我跑过来。',opts:['摇','摸','摆','蹲'],ans:0,
   exp:'Vẫy đuôi → 摇尾巴 (câu trong 练习 2 của sách). 摸 là sờ; 摆 là bày; 蹲 là ngồi xổm — đều không kết hợp với 尾巴 theo nghĩa vẫy.'},
  {wrong:'我们班有个同学被车撞了，还好伤得不重，____。',opts:['不要紧','不耐烦','不得了','不客气'],ans:0,
   exp:'Vết thương không nặng, không sao → 不要紧. 不耐烦 (bài 1) là mất kiên nhẫn; 不得了 là ghê gớm, nghiêm trọng — ngược nghĩa; 不客气 là "đừng khách sáo".'},
  {wrong:'这件事还是得从____上解决，只解决表面问题是不行的。',opts:['根','杆','墙','尾巴'],ans:0,
   exp:'根 là danh từ "gốc rễ", nghĩa bóng là nền tảng → 从根上解决 (giải quyết tận gốc). 杆 là cán, 墙 là tường, 尾巴 là đuôi — không hợp nghĩa.'},
  {wrong:'可是，这次他连续换了几____箭，都没能再射进去。',opts:['根','头','把','面'],ans:0,
   exp:'根 là lượng từ cho vật dài, mảnh → 几根箭 (câu trong bài). 头 dùng cho thú lớn; 把 cho đồ có tay cầm; 面 cho vật phẳng như tường, gương.'},
  {wrong:'____，我想到了一个办法，你们看看行不行。',opts:['哎','唉','便','瞎'],ans:0,
   exp:'Gọi người khác chú ý để nói một ý mới → 哎 (āi). 唉 (ài) là tiếng thở dài buồn bã, không hợp với tin vui "nghĩ ra cách"; 便, 瞎 là phó từ, không đứng một mình đầu câu.'},
  {wrong:'____！就差一分，太可惜了！',opts:['唉','哎','胡说','不要紧'],ans:0,
   exp:'Tiếc nuối, thở dài → 唉 (ài). 哎 thiên về ngạc nhiên hoặc gọi người; 胡说 là mắng người nói bậy; 不要紧 (không sao) mâu thuẫn với 太可惜了.'},
  {wrong:'他去了五次，老教授终于答应了，真是____。',opts:['精诚所至，金石为开','盲人摸象','全神贯注','胡说八道'],ans:0,
   exp:'Kiên trì, chân thành nên việc khó đã thành → 精诚所至，金石为开. 盲人摸象 là nhìn phiến diện; 全神贯注 là tập trung; 胡说八道 là nói nhảm.'},
  {wrong:'我真的需要休息了，我已经____工作20个小时了。',opts:['连续','继续','陆续','手续'],ans:0,
   exp:'Làm liền 20 tiếng không nghỉ, có số lượng → 连续 (câu trong 练习 2 của sách). 继续 là làm tiếp sau khi dừng; 陆续 là lần lượt (nhiều người/vật); 手续 là thủ tục (danh từ).'},
  {wrong:'对我们提出的意见，老板还没有做出____。',opts:['反应','反映','反对','反而'],ans:0,
   exp:'做出反应 = có phản ứng/phản hồi (câu trong 练习 2). 反映 là phản ánh/trình bày lên trên, không đi với 做出; 反对 là phản đối (động từ); 反而 là liên từ "ngược lại".'},
  {wrong:'你____他就是我们要找的那位英雄吗？',opts:['确定','确实','一定','决定'],ans:0,
   exp:'Hỏi xem người nghe có CHẮC CHẮN không → 你确定……吗？ 确实 là phó từ "quả thật"; 一定 là "nhất định", không làm động từ chính mang mệnh đề; 决定 là "quyết định" làm gì.'},
  {wrong:'这件事我一定____帮你，你放心吧。',opts:['尽力','尽管','力气','全力'],ans:0,
   exp:'Hứa cố hết sức làm gì → 尽力 + động từ. 尽管 (jǐnguǎn) là liên từ "mặc dù" hoặc phó từ "cứ việc", không mang nghĩa cố hết sức; 力气, 全力 là danh từ, không đứng trước động từ 帮.'},
  {wrong:'如果诚心实意，即使像金属和石头那样____的东西也会被打动。',opts:['硬','平','碎','软'],ans:0,
   exp:'Kim loại và đá có đặc điểm chung là cứng → 硬. 平 là phẳng; 碎 là vỡ vụn; 软 là mềm — trái nghĩa.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Đã chưa biết chắc điểm thi thế nào thì cậu đừng ngồi đây lo hão nữa.',zh:'既然考试成绩还没确定，你就别在这儿瞎担心了。',py:'Jìrán kǎoshì chéngjì hái méi quèdìng, nǐ jiù bié zài zhèr xiā dānxīn le.',goiY:['既然……就……','确定','瞎担心'],giai:'既然 + sự thật đã biết, 就 + lời khuyên; 瞎 + động từ = làm bừa, vô ích (瞎担心 = lo hão), không dịch “lo mù”.'},
  {vi:'Tuy em đã cố hết sức nhưng ba lần thi thử liên tiếp điểm đều không được như ý.',zh:'虽然我已经尽力了，但是连续三次模拟考试的成绩都不太理想。',py:'Suīrán wǒ yǐjīng jìnlì le, dànshì liánxù sān cì mónǐ kǎoshì de chéngjì dōu bú tài lǐxiǎng.',goiY:['虽然……但是……','尽力','连续'],giai:'虽然……但是…… nối hai ý trái ngược; 连续 đứng trước số lượng: 连续三次 (ba lần liên tiếp), không nói 三次连续.'},
  {vi:'Chỉ cần trong giờ học tập trung cao độ nghe giảng thì em không cần ngày nào cũng thức khuya ôn bài.',zh:'只要上课全神贯注地听讲，你便不需要每天熬夜复习。',py:'Zhǐyào shàngkè quánshénguànzhù de tīngjiǎng, nǐ biàn bù xūyào měi tiān áoyè fùxí.',goiY:['只要……便……','全神贯注','熬夜'],giai:'只要 + điều kiện, 便 + kết quả; 便 = 就 nhưng trang trọng hơn và đứng sau chủ ngữ (你便…), không đặt trước chủ ngữ.'},
  {vi:'Cô giáo bảo bốn đứa chúng tôi mỗi người tìm hiểu một vấn đề, sau đó đem kết luận của từng người ra thảo luận chung.',zh:'老师让我们四个人分别调查一个问题，然后再把各自的结论放在一起讨论。',py:'Lǎoshī ràng wǒmen sì ge rén fēnbié diàochá yí ge wèntí, ránhòu zài bǎ gèzì de jiélùn fàng zài yìqǐ tǎolùn.',goiY:['分别','然后','各自','结论'],giai:'Chủ ngữ số nhiều + 分别 + V = mỗi người làm riêng phần mình; 然后 nối bước tiếp theo. “Kết luận của từng người” = 各自的结论.'},
  {vi:'Cậu mới xem một bài đăng của người ta đã vội kết luận thì phiến diện quá, huống hồ hai người vốn chẳng thân nhau.',zh:'你只看了他的一条朋友圈就下结论，未免太片面了，何况你们根本不熟。',py:'Nǐ zhǐ kàn le tā de yì tiáo péngyouquān jiù xià jiélùn, wèimiǎn tài piànmiàn le, hékuàng nǐmen gēnběn bù shú.',goiY:['下结论','片面','何况'],giai:'何况 = huống hồ, thêm một lý do mạnh hơn ở vế cuối; “vội kết luận” = 就下结论 (động từ đi với 结论 là 下).'},
  {vi:'Học kém thì phải tìm nguyên nhân từ gốc rễ; thay vì ngày nào cũng bận rộn vô ích, chi bằng củng cố nền tảng cho vững trước đã.',zh:'学习成绩不好，要从根上找原因；与其每天瞎忙，不如先把基础打扎实。',py:'Xuéxí chéngjì bù hǎo, yào cóng gēn shang zhǎo yuányīn; yǔqí měi tiān xiā máng, bùrú xiān bǎ jīchǔ dǎ zhāshi.',goiY:['从根上','与其……不如……','瞎忙'],giai:'与其 A，不如 B = thay vì A thì chi bằng B (người nói chọn B); 从根上 + V = (giải quyết) từ gốc rễ. 瞎忙 = bận rộn mà vô ích.'},
  {vi:'Dù trong tay chỉ có một sợi dây, những đứa trẻ giỏi tưởng tượng cũng có thể nghĩ ra mấy kiểu chơi khác nhau.',zh:'哪怕手里只有一根绳子，善于想象的孩子也能想出好几种玩法来。',py:'Nǎpà shǒu li zhǐ yǒu yì gēn shéngzi, shànyú xiǎngxiàng de háizi yě néng xiǎng chū hǎo jǐ zhǒng wánfǎ lái.',goiY:['哪怕……也……','一根绳子','善于'],giai:'哪怕 + giả thiết (điều kiện rất ít ỏi), 也 + kết quả vẫn không đổi; 根 là lượng từ cho vật dài mảnh (一根绳子), không dùng 个.'},
  {vi:'Cậu ta vậy mà ba ngày liền lên mạng đăng bài nói bậy bạ; sở dĩ tôi vẫn chưa phản ứng gì là vì không muốn làm to chuyện.',zh:'他居然连续三天在网上发帖胡说八道，我之所以一直没有反应，是因为不想把事情闹大。',py:'Tā jūrán liánxù sān tiān zài wǎng shang fā tiě húshuō bādào, wǒ zhīsuǒyǐ yìzhí méiyǒu fǎnyìng, shì yīnwèi bù xiǎng bǎ shìqing nào dà.',goiY:['居然','之所以……是因为……','胡说','反应'],giai:'之所以 + kết quả, 是因为 + nguyên nhân: nêu kết quả trước, giải thích sau; 居然 (vậy mà) đặt trước cụm 连续三天, không đặt cuối câu.'},
  {vi:'Ôi, em lỡ tay làm vỡ cái cốc bà tặng, vốn sợ bà giận, không ngờ bà lại cười bảo không sao.',zh:'唉，我不小心把奶奶送的杯子摔碎了，本来担心她会生气，没想到她反而笑着说不要紧。',py:'Āi, wǒ bù xiǎoxīn bǎ nǎinai sòng de bēizi shuāi suì le, běnlái dānxīn tā huì shēngqì, méi xiǎngdào tā fǎn\'ér xiàozhe shuō bú yàojǐn.',goiY:['摔碎','反而','不要紧'],giai:'反而 = trái lại, dùng khi kết quả ngược với điều mình lo/đoán ở vế trước; 摔碎 = làm rơi vỡ (động từ + bổ ngữ kết quả 碎), cần 把 + tân ngữ đặt trước.'},
  {vi:'Một khi đã quen gặp chuyện gì cũng đoán mò, em sẽ rất dễ giống mấy ông thầy bói xem voi, chỉ dựa vào chút thông tin phiến diện là vội đưa ra kết luận.',zh:'一旦养成了遇事瞎猜的习惯，你就很容易像摸象的盲人那样，只凭一点片面的信息便得出结论。',py:'Yídàn yǎngchéng le yù shì xiā cāi de xíguàn, nǐ jiù hěn róngyì xiàng mō xiàng de mángrén nàyàng, zhǐ píng yìdiǎn piànmiàn de xìnxī biàn déchū jiélùn.',goiY:['一旦……就……','瞎猜','片面','便'],giai:'一旦 + điều kiện (chưa xảy ra), 就 + hậu quả; vế cuối dùng 便 thay 就 cho khỏi lặp. “Thầy bói xem voi” là cách nói của người Việt, tiếng Trung là 盲人摸象.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Nhà vua sai binh lính tìm về một con voi, rồi mời mấy người mù, mỗi người tự đến sờ.',zh:'国王让士兵们找来一头大象，然后请几个盲人分别去摸。',py:'Guówáng ràng shìbīngmen zhǎo lái yì tóu dàxiàng, ránhòu qǐng jǐ ge mángrén fēnbié qù mō.',goiY:['然后 = sau đó, rồi','分别 = mỗi người (làm) riêng'],giai:'分别 đứng trước động từ, chủ ngữ số nhiều → dịch “mỗi người/từng người… riêng”, không dịch là “chia tay”.'},
  {vi:'Người mù sờ trúng ngà voi thì nói con voi giống củ cải, còn người sờ trúng đuôi lại bảo nó giống sợi dây thừng.',zh:'摸到牙齿的盲人说大象像一根萝卜，摸到尾巴的却说大象像一根绳子。',py:'Mō dào yáchǐ de mángrén shuō dàxiàng xiàng yì gēn luóbo, mō dào wěiba de què shuō dàxiàng xiàng yì gēn shéngzi.',goiY:['却 = lại (trái ngược)','一根 = một (vật dài, mảnh)'],giai:'却 đứng sau chủ ngữ, trước động từ, nối hai vế đối lập → “còn… lại…”; 根 là lượng từ, dịch theo danh từ (củ, sợi).'},
  {vi:'Vì mỗi người mù chỉ sờ được một phần thân con voi nên kết luận họ đưa ra đều rất phiến diện.',zh:'由于每个盲人都只摸到了大象身体的一部分，所以他们得出的结论都很片面。',py:'Yóuyú měi ge mángrén dōu zhǐ mō dào le dàxiàng shēntǐ de yí bùfen, suǒyǐ tāmen déchū de jiélùn dōu hěn piànmiàn.',goiY:['由于……所以…… = vì… nên…','片面 = phiến diện'],giai:'由于 trang trọng hơn 因为, vẫn đi với 所以; 得出的结论 = kết luận rút ra, dịch gọn “kết luận họ đưa ra”.'},
  {vi:'Mấy người mù tranh nhau nói mình đúng, chẳng ai chịu ai, có người còn sốt ruột mắng người khác nói bậy.',zh:'盲人们争着说自己对，谁也不服谁，有的甚至不耐烦地骂别人胡说。',py:'Mángrénmen zhēngzhe shuō zìjǐ duì, shéi yě bù fú shéi, yǒude shènzhì bú nàifán de mà biérén húshuō.',goiY:['甚至 = thậm chí, còn','不耐烦 = mất kiên nhẫn','胡说 = nói bậy'],giai:'甚至 đưa ra mức độ cao hơn ở vế cuối; 谁也不服谁 = chẳng ai chịu ai, không dịch từng chữ “ai cũng không phục ai”.'},
  {vi:'Câu thành ngữ này cho ta biết nhìn vấn đề không thể chỉ nhìn một mặt, nếu không sẽ giống thầy bói xem voi mà rút ra kết luận sai.',zh:'这则成语告诉我们，看问题不能只看一个方面，否则就会像盲人摸象一样得出错误的结论。',py:'Zhè zé chéngyǔ gàosu wǒmen, kàn wèntí bù néng zhǐ kàn yí ge fāngmiàn, fǒuzé jiù huì xiàng mángrén mō xiàng yíyàng déchū cuòwù de jiélùn.',goiY:['则 = (lượng từ) câu, mẩu','否则 = nếu không thì'],giai:'否则 nêu hậu quả khi không làm theo vế trước → “nếu không thì”; 则 ở đây là lượng từ cho thành ngữ/tin tức, không phải “thì”.'},
  {vi:'Tướng quân Lý Quảng thời Tây Hán không những giỏi cưỡi ngựa mà tài bắn cung còn đặc biệt cao, vì thế người đời gọi ông là “Phi tướng quân”.',zh:'西汉将军李广不但善于骑马，而且射箭的本领特别高，因此人们称他为“飞将军”。',py:'Xī Hàn jiāngjūn Lǐ Guǎng búdàn shànyú qí mǎ, érqiě shè jiàn de běnlǐng tèbié gāo, yīncǐ rénmen chēng tā wéi “Fēi Jiāngjūn”.',goiY:['不但……而且…… = không những… mà còn…','善于 = giỏi về','称……为…… = gọi… là…'],giai:'不但……而且…… tăng tiến, 因此 nêu kết quả; 称 A 为 B = gọi A là B (văn viết), dịch “gọi ông là…”.'},
  {vi:'Một lần Lý Quảng đi săn, bỗng thấy trong bụi cỏ hình như có con hổ đang rình, thế là ông lập tức tập trung cao độ giương cung bắn một mũi tên.',zh:'有一次李广去打猎，忽然看见草丛里好像蹲着一只老虎，于是立刻全神贯注地拉弓射了一箭。',py:'Yǒu yí cì Lǐ Guǎng qù dǎliè, hūrán kànjiàn cǎocóng li hǎoxiàng dūnzhe yì zhī lǎohǔ, yúshì lìkè quánshénguànzhù de lā gōng shè le yí jiàn.',goiY:['忽然 = bỗng nhiên','于是 = thế là','全神贯注 = tập trung cao độ'],giai:'于是 nối hành động xảy ra ngay sau, do vế trước gây nên; 蹲着 tả tư thế nằm rình của con hổ, dịch linh hoạt, không cần “ngồi xổm”.'},
  {vi:'Lại gần nhìn, ông mới biết chắc đó không phải con hổ mà là một tảng đá lớn, vậy mà mũi tên lại cắm sâu vào trong đá.',zh:'走近一看，他才确定那不是老虎，而是一块大石头，可是箭居然深深地射进了石头里。',py:'Zǒu jìn yí kàn, tā cái quèdìng nà bú shì lǎohǔ, ér shì yí kuài dà shítou, kěshì jiàn jūrán shēnshēn de shè jìn le shítou li.',goiY:['不是……而是…… = không phải… mà là…','居然 = vậy mà (bất ngờ)','确定 = biết chắc'],giai:'不是 A 而是 B phủ định A, khẳng định B; 居然 diễn tả điều ngoài dự đoán → “vậy mà/thế mà”.'},
  {vi:'Lý Quảng lại vào tư thế, bắn liên tiếp mấy mũi tên, nhưng hễ chạm vào đá là tên vỡ vụn, không mũi nào cắm vào được.',zh:'李广又摆好姿势连续射了几箭，可是箭一碰到石头便碎了，连一支也没射进去。',py:'Lǐ Guǎng yòu bǎi hǎo zīshì liánxù shè le jǐ jiàn, kěshì jiàn yí pèng dào shítou biàn suì le, lián yì zhī yě méi shè jìnqu.',goiY:['一……便…… = hễ… là…','连……也…… = ngay cả… cũng…','摆好姿势 = vào tư thế'],giai:'一 + V1，便 + V2 = vừa/hễ V1 là V2 ngay (便 = 就, văn viết); 连一支也没… = không một mũi nào…, dịch thành câu phủ định.'},
  {vi:'Dương Hùng cho rằng sở dĩ Lý Quảng bắn được tên vào đá là vì ông tưởng tảng đá là hổ nên dốc hết sức; đó chính là đạo lý “lòng thành cảm động cả đá vàng”.',zh:'扬雄认为，李广之所以能把箭射进石头，是因为他把石头当成了老虎，尽了全力，这正是“精诚所至，金石为开”的道理。',py:'Yáng Xióng rènwéi, Lǐ Guǎng zhīsuǒyǐ néng bǎ jiàn shè jìn shítou, shì yīnwèi tā bǎ shítou dàngchéng le lǎohǔ, jìn le quánlì, zhè zhèng shì “jīngchéng suǒ zhì, jīnshí wéi kāi” de dàolǐ.',goiY:['之所以……是因为…… = sở dĩ… là vì…','精诚所至，金石为开 = lòng thành cảm động cả đá vàng'],giai:'之所以 nêu kết quả trước, 是因为 giải thích sau → “sở dĩ… là vì…”; 把 A 当成 B = tưởng A là B, coi A như B.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// Chủ đề theo phần 运用 của sách: 凡事应有的放矢 — thái độ và mục tiêu khi làm việc
// ══════════════════════════════════════════
var writingData = {
  words:['确定','连续','全神贯注','尽力','精诚所至，金石为开'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể một lần em đặt mục tiêu và cố gắng đạt được nó, qua đó nói lên thái độ khi làm việc quan trọng thế nào.',
  outline:[
    'Câu mở: em đã đặt ra mục tiêu gì (dùng 确定).',
    'Thân: em đã cố gắng thế nào — liên tục, tập trung (dùng 连续, 全神贯注).',
    'Kết quả: em đã cố hết sức, kết quả ra sao (dùng 尽力).',
    'Kết: rút ra bài học, kết bằng thành ngữ 精诚所至，金石为开.'
  ],
  model:{
    zh:'上个学期，我给自己确定了一个目标：期末汉语考试考到九十分。为了这个目标，我每天晚上都全神贯注地复习一个小时，连续坚持了三个月。考试那天，我尽力了，最后考了九十二分。这件事让我明白，只要目标合适，态度认真，就一定能成功，真是精诚所至，金石为开。',
    py:'Shàng ge xuéqī, wǒ gěi zìjǐ quèdìngle yí ge mùbiāo: qīmò Hànyǔ kǎoshì kǎodào jiǔshí fēn. Wèile zhège mùbiāo, wǒ měi tiān wǎnshang dōu quánshén guànzhù de fùxí yí ge xiǎoshí, liánxù jiānchíle sān ge yuè. Kǎoshì nà tiān, wǒ jìnlì le, zuìhòu kǎole jiǔshí\'èr fēn. Zhè jiàn shì ràng wǒ míngbai, zhǐyào mùbiāo héshì, tàidu rènzhēn, jiù yídìng néng chénggōng, zhēn shì jīngchéng suǒ zhì, jīnshí wéi kāi.',
    vn:'Học kỳ trước, tôi đặt cho mình một mục tiêu: bài thi tiếng Trung cuối kỳ đạt chín mươi điểm. Vì mục tiêu này, tối nào tôi cũng tập trung ôn bài một tiếng, kiên trì liền ba tháng. Hôm thi, tôi đã cố hết sức, cuối cùng được chín mươi hai điểm. Chuyện này giúp tôi hiểu rằng chỉ cần mục tiêu phù hợp, thái độ nghiêm túc thì nhất định sẽ thành công — đúng là lòng thành cảm động cả đá vàng.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa (thành ngữ phải viết đủ cả hai vế)?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có ít nhất một câu ghép (只要……就…… / 虽然……但是…… / 因为……所以……) chưa?',
    'Có nói rõ MỤC TIÊU và THÁI ĐỘ — đúng yêu cầu của đề — chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈做事情时态度和目标的重要性。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  tuDung:[
    {tu:'确定', loai:'động từ', cach:'确定目标 / 时间 / 地点 · 你确定……吗？',
     sai:[{re:'确定(?=去|要|来|学|买|参加|报名)', sua:'决定 + động từ', giai:'"Quyết định LÀM gì" là 决定 (我决定去中国留学). 确定 là xác định/chốt cho chắc: 确定目标, 确定时间.'}]},
    {tu:'连续', loai:'động từ (làm trạng ngữ)', cach:'连续 + V + 了 + thời lượng · 连续三天',
     sai:[{re:'(休息|停)[^。！？]*连续', sua:'……再继续……', giai:'Dừng/nghỉ rồi làm TIẾP là 继续, không phải 连续. 连续 chỉ những lần nối liền không gián đoạn.'},
          {re:'连续(?=努力|加油|下去)', sua:'继续努力 / 继续下去', giai:'Không nói 连续努力/连续下去 để cổ vũ — dùng 继续努力, 坚持下去.', nhe:true}]},
    {tu:'全神贯注', loai:'thành ngữ (trạng ngữ / vị ngữ)', cach:'全神贯注地 + V',
     sai:[{re:'(很|非常|十分|特别|太)全神贯注', sua:'全神贯注地……', giai:'Thành ngữ đã đủ nghĩa "hết sức tập trung", không thêm 很/非常 phía trước.'},
          {re:'全神贯注(?=复习|学习|听|看|做|写|工作|练)', sua:'全神贯注地 + V', giai:'Thành ngữ làm trạng ngữ trước động từ nên có 地: 全神贯注地复习.', nhe:true}]},
    {tu:'尽力', loai:'động từ', cach:'尽力 + V · 已经尽力了',
     sai:[{re:'尽力(?=这|那|工作|考试|比赛|学习)', sua:'尽力做好…… / 为……尽力', giai:'尽力 không mang thẳng tân ngữ danh từ. Nói 尽力做好这件事 hoặc 为考试尽力.'}]},
    {tu:'精诚所至，金石为开', loai:'thành ngữ', cach:'……，真是精诚所至，金石为开。',
     sai:[{re:'精诚所至(?!，金石为开|,金石为开)', sua:'精诚所至，金石为开', giai:'Thành ngữ hai vế phải viết ĐỦ: 精诚所至，金石为开. Chỉ viết nửa đầu là thiếu.'},
          {re:'(很|非常|十分|特别)精诚所至', sua:'真是精诚所至，金石为开', giai:'Không thêm 很/非常 trước thành ngữ; dùng 真是 để dẫn vào.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 3–4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'给自己确定 + 目标', nhan:'确定', vd:'上个学期，我给自己确定了一个目标。', khi:'Câu MỞ: nêu mục tiêu rõ ràng.'},
    {ten:'连续 + V + 了 + thời lượng', nhan:'连续', vd:'我连续坚持了三个月。', khi:'Nhấn mạnh sự kiên trì liền mạch.'},
    {ten:'全神贯注地 + V', nhan:'全神贯注', vd:'我每天晚上都全神贯注地复习一个小时。', khi:'Tả THÁI ĐỘ tập trung khi làm việc.'},
    {ten:'只要……就……', nhan:'只要', vd:'只要目标合适，态度认真，就一定能成功。', khi:'Câu KẾT: rút ra điều kiện để thành công.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然有时候很累，但是我从来没放弃过。', khi:'Nêu khó khăn rồi lật lại — thân đoạn.'},
    {ten:'……，便……', nhan:'便', vd:'目标一确定，我便开始每天复习。', khi:'Văn viết: thay 就 bằng 便 cho trang trọng.'},
    {ten:'这件事让我明白……', nhan:'让我明白', vd:'这件事让我明白，态度和目标一样重要。', khi:'Câu KẾT — rút ra bài học.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 1–3 lấy từ đáp án 书写 29–31 sách bài tập)
  sapXep:[
    {manh:['五六支箭','我','射了','连续'],
     dap:'我连续射了五六支箭。',
     vn:'Tôi bắn liền năm sáu mũi tên.',
     giai:'连续 làm trạng ngữ đứng TRƯỚC động từ 射; số lượng + lượng từ 支 + 箭 làm tân ngữ đứng sau.'},
    {manh:['一定能','相信你','寻找到','最终的结论'],
     dap:'相信你一定能寻找到最终的结论。',
     vn:'Tin rằng bạn nhất định sẽ tìm ra kết luận cuối cùng.',
     giai:'相信 + mệnh đề; trong mệnh đề: 一定能 + 寻找到 + tân ngữ 最终的结论.'},
    {manh:['我完全','反应过来','他说这话的时候','没有'],
     dap:'他说这话的时候，我完全没有反应过来。',
     vn:'Lúc anh ấy nói câu đó, tôi hoàn toàn chưa kịp phản ứng.',
     giai:'Trạng ngữ thời gian (……的时候) đứng đầu câu; 完全 + 没有 + 反应过来.'},
    {manh:['被称为','李广','“飞将军”','作战勇敢'],
     dap:'李广作战勇敢，被称为“飞将军”。',
     vn:'Lý Quảng đánh trận dũng cảm, được gọi là "Phi tướng quân".',
     giai:'Chủ ngữ 李广 → nguyên nhân 作战勇敢 → kết quả 被称为 + danh hiệu (ôn câu 被).'},
    {manh:['片面地','看问题','不能','我们'],
     dap:'我们不能片面地看问题。',
     vn:'Chúng ta không thể nhìn vấn đề phiến diện.',
     giai:'Trật tự trạng ngữ: động từ năng nguyện 不能 → trạng ngữ cách thức 片面地 → động từ 看.'},
    {manh:['瞎担心','你就别','替他','了'],
     dap:'你就别替他瞎担心了。',
     vn:'Cậu đừng lo hão thay cậu ấy nữa.',
     giai:'别 → giới từ 替他 → phó từ 瞎 + động từ 担心 → 了 cuối câu.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 凡事应有的放矢
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 确定 · 全神贯注 · 尽力 · 片面 · 结论 · 精诚所至，金石为开.',
  questions:[
    {q_zh:'你学习过射箭吗？应该怎么做才能更容易射中目标？',
     q_vn:'Em đã học bắn cung chưa? Phải làm thế nào mới dễ bắn trúng đích hơn?',
     hint:'Dùng 摆好姿势 + 全神贯注',
     sample:'我没学过射箭，但我觉得要先摆好姿势，然后全神贯注地看着目标，不能着急。',
     sample_vn:'Tôi chưa học bắn cung, nhưng tôi nghĩ trước hết phải vào đúng tư thế, sau đó dồn hết tinh thần nhìn vào mục tiêu, không được vội.',
     note:'Chưa làm bao giờ cũng không sao — nói "tôi chưa… nhưng tôi nghĩ…" vẫn trả lời được trọn câu.'},
    {q_zh:'在学习、工作或者生活中，我们同样需要有目标，你的目标是什么？',
     q_vn:'Trong học tập, công việc hay cuộc sống, chúng ta cũng cần có mục tiêu. Mục tiêu của em là gì?',
     hint:'Dùng 给自己确定了…… + 为了……',
     sample:'我给自己确定了一个目标：明年通过HSK五级。为了这个目标，我每天都尽力学习一个小时。',
     sample_vn:'Tôi đặt cho mình một mục tiêu: sang năm thi đỗ HSK 5. Vì mục tiêu đó, ngày nào tôi cũng cố học một tiếng.',
     note:'Mục tiêu phải CỤ THỂ (con số, thời hạn) thì câu trả lời mới có sức thuyết phục.'},
    {q_zh:'你觉得给自己确定什么样的目标才是最合适的？',
     q_vn:'Em thấy nên đặt cho mình mục tiêu như thế nào mới là phù hợp nhất?',
     hint:'Nêu tiêu chí + lý do, dùng 如果……就……',
     sample:'我觉得目标不能太远，也不能太近。如果目标太远，就像箭射不到太远的地方一样，再努力也没用。',
     sample_vn:'Tôi thấy mục tiêu không được quá xa, cũng không được quá gần. Nếu mục tiêu quá xa thì giống như mũi tên không bắn tới chỗ quá xa, cố mấy cũng vô ích.',
     note:'Liên hệ với phần 背景分析 của sách (tầm bắn của mũi tên có giới hạn) sẽ rất ghi điểm.'},
    {q_zh:'“盲人摸象”的故事告诉我们什么道理？你有没有过类似的经历？',
     q_vn:'Câu chuyện "thầy bói xem voi" cho chúng ta đạo lý gì? Em đã từng có trải nghiệm tương tự chưa?',
     hint:'Dùng 片面 + 下结论, kể một việc cụ thể',
     sample:'这个故事告诉我们，不能片面地看问题。以前我只见过新同学一次，就觉得他不友好，后来才发现我错了。',
     sample_vn:'Câu chuyện cho chúng ta biết không được nhìn vấn đề phiến diện. Trước đây tôi mới gặp bạn mới một lần đã cho rằng cậu ấy không thân thiện, về sau mới biết mình sai.',
     note:'Nêu đạo lý xong phải có VÍ DỤ của bản thân — thiếu ví dụ là câu trả lời bị "rỗng".'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 7.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5上·练习册》第7课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'这位先生，请你说说你摸到的大象是什么样的？'},
            {sp:'男',zh:'我觉得它像一根绳子。'}],
     q:'这个盲人最可能摸到了大象身体的哪个部位？',qvn:'Người mù này nhiều khả năng đã sờ vào bộ phận nào của con voi?',
     opts:['尾巴','牙齿','耳朵','身子'],ans:0,
     why:'"Giống một sợi dây" — trong bài khoá, người sờ trúng ĐUÔI nói 它像一条绳子. Ngà → cái sừng, tai → cái quạt, thân → bức tường.',
     words:['摸','大象','根','绳子']},

    {n:2,
     lines:[{sp:'男',zh:'是谁把玻璃打碎了？'},
            {sp:'女',zh:'不是我们，窗户外面忽然飞进来一只足球。'}],
     q:'他们现在在哪儿？',qvn:'Họ hiện đang ở đâu?',
     opts:['足球场上','房间里','公园里','汽车上'],ans:1,
     why:'Quả bóng bay vào từ NGOÀI cửa sổ → họ đang ở trong phòng. Nghe thấy 足球 dễ chọn nhầm "sân bóng".',
     words:['碎','忽然']},

    {n:3,
     lines:[{sp:'女',zh:'我认为自己很适合贵公司的这个职位。'},
            {sp:'男',zh:'那请你说说，如果来我们公司，你最善于处理哪方面的业务？'}],
     q:'对话最可能发生在什么时候？',qvn:'Cuộc hội thoại nhiều khả năng diễn ra khi nào?',
     opts:['开会时','面试时','上课时','购物时'],ans:1,
     why:'贵公司的这个职位 (vị trí ở quý công ty) + 你最善于处理哪方面的业务 (bạn giỏi xử lý mảng nào nhất) — câu hỏi điển hình khi PHỎNG VẤN.',
     words:['善于']},

    {n:4,
     lines:[{sp:'男',zh:'就买这个花盆怎么样？'},
            {sp:'女',zh:'我不太想要塑料的，还是找找有没有木头的吧。'}],
     q:'女的想买什么材料的花盆？',qvn:'Người phụ nữ muốn mua chậu hoa bằng chất liệu gì?',
     opts:['塑料的','玻璃的','木头的','金属的'],ans:2,
     why:'不太想要塑料的 → loại nhựa bị gạt; 还是找找有没有木头的 → muốn loại bằng GỖ. Nghe thấy 塑料 trước nên dễ chọn nhầm.',
     words:[]},

    {n:5,
     lines:[{sp:'女',zh:'你蹲下来点儿，别让他发现你了。'},
            {sp:'男',zh:'不要紧，我这边正好有棵树挡着呢。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['他蹲不下去','他想站起来','他已经被发现了','对方看不见他'],ans:3,
     why:'不要紧 (không sao) + 有棵树挡着 (có cái cây che) → người kia sẽ không nhìn thấy anh ấy, không cần ngồi thấp xuống.',
     words:['蹲','不要紧']},

    {n:6,
     lines:[{sp:'男',zh:'我还没说完你就急着插嘴，能听我说完吗？'},
            {sp:'女',zh:'你能有什么好主意？'}],
     q:'女的是什么态度？',qvn:'Người phụ nữ có thái độ gì?',
     opts:['支持','感谢','不信任','着急'],ans:2,
     why:'Câu hỏi tu từ 你能有什么好主意？ = "Cậu thì có ý hay gì được?" → coi thường, KHÔNG TIN. Dạng câu hỏi thái độ (态度) rất hay gặp ở HSK 5.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'你以前考试都是前三名，这次成绩怎么下滑得这么厉害？'},
            {sp:'男',zh:'唉，我最近确实不够用心。'},
            {sp:'女',zh:'考前没好好复习吗？'},
            {sp:'男',zh:'昨天熬夜看书了，但已经来不及了。'}],
     q:'男的为什么成绩下滑？',qvn:'Vì sao thành tích của cậu con trai sa sút?',
     opts:['考试时生病了','最近不够用心','题目太难了','考前一点儿也没复习'],ans:1,
     why:'Cậu ấy tự nhận 我最近确实不够用心 — giống hệt lời Lý Quảng trong bài: 大概是我不够用心了. Cậu có ôn (熬夜看书) nên phương án "hoàn toàn không ôn" sai.',
     words:['唉']},

    {n:8,
     lines:[{sp:'男',zh:'咱们把空调打开吧。'},
            {sp:'女',zh:'空调太费电了，开个电风扇就行。'},
            {sp:'男',zh:'天这么热，电扇不管用。'},
            {sp:'女',zh:'有这么热吗？心静自然凉。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['快把空调打开','没必要开空调','电扇坏了','她觉得很热'],ans:1,
     why:'Cô ấy chê điều hoà tốn điện, hỏi lại 有这么热吗 và nói 心静自然凉 (lòng tĩnh thì tự mát) → KHÔNG CẦN bật điều hoà.',
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
    {scene:'Bạn thân lo lắng cho một bạn khác sắp thi.',
     a:{sp:'Bạn',zh:'小王明天就要考试了，我真担心他考不好。',vn:'Mai Tiểu Vương thi rồi, tớ lo cậu ấy thi không tốt quá.'},
     need:['Dùng 瞎 (phó từ)','Đưa ra một lý do để trấn an'],
     sample:'他复习得那么认真，你就别替他瞎担心了。',
     samplePy:'Tā fùxí de nàme rènzhēn, nǐ jiù bié tì tā xiā dānxīn le.',
     sampleVn:'Cậu ấy ôn bài chăm thế, cậu đừng lo hão thay cậu ấy nữa.',
     tip:'瞎 phó từ đứng NGAY TRƯỚC động từ: 别瞎担心, 别瞎说. Không nói 瞎别担心.'},

    {scene:'Em bị ngã trong giờ thể dục, bạn chạy lại hỏi.',
     a:{sp:'Bạn',zh:'你没事吧？流血了！',vn:'Cậu không sao chứ? Chảy máu rồi kìa!'},
     need:['Dùng 不要紧','Nói rõ tình trạng của mình'],
     sample:'不要紧，只是擦破了一点儿皮，休息一下就好了。',
     samplePy:'Bú yàojǐn, zhǐshì cāpòle yìdiǎnr pí, xiūxi yíxià jiù hǎo le.',
     sampleVn:'Không sao, chỉ trầy chút da thôi, nghỉ một lát là khỏi.',
     tip:'不要紧 đọc bú yàojǐn (biến điệu 不). Dùng để TRẤN AN, đặt ở đầu câu.'},

    {scene:'Bạn vội vàng kết luận về một bạn cùng lớp.',
     a:{sp:'Bạn',zh:'他今天又没来上课，肯定是不想学了。',vn:'Hôm nay cậu ấy lại không đi học, chắc chắn là không muốn học nữa rồi.'},
     need:['Dùng 片面 hoặc 下结论','Đề nghị một cách làm hợp lý hơn'],
     sample:'你这样想太片面了，还是先问问他是怎么回事再下结论吧。',
     samplePy:'Nǐ zhèyàng xiǎng tài piànmiàn le, háishi xiān wènwen tā shì zěnme huí shì zài xià jiélùn ba.',
     sampleVn:'Cậu nghĩ vậy phiến diện quá, hay là hỏi xem cậu ấy bị sao đã rồi hẵng kết luận.',
     tip:'Đây chính là bài học "thầy bói xem voi": chỉ thấy một phần thì đừng vội 下结论.'},

    {scene:'Cô giáo hỏi kế hoạch nghỉ đông của hai chị em.',
     a:{sp:'Cô',zh:'快放寒假了，你们假期有什么打算？',vn:'Sắp nghỉ đông rồi, kỳ nghỉ các em có dự định gì?'},
     need:['Dùng 分别 (phó từ: mỗi người làm riêng)','Nói rõ hai việc khác nhau'],
     sample:'我和妹妹打算分别去爷爷家和外婆家住一个星期。',
     samplePy:'Wǒ hé mèimei dǎsuàn fēnbié qù yéye jiā hé wàipó jiā zhù yí ge xīngqī.',
     sampleVn:'Em và em gái định mỗi người về ở nhà ông nội và nhà bà ngoại một tuần.',
     tip:'分别 phó từ cần chủ ngữ SỐ NHIỀU (我和妹妹, 他们) và đứng trước động từ.'},

    {scene:'Bạn thấy em mắt thâm quầng.',
     a:{sp:'Bạn',zh:'你怎么看起来这么累？',vn:'Sao trông cậu mệt thế?'},
     need:['Dùng 连续','Có số lượng thời gian cụ thể'],
     sample:'为了准备比赛，我已经连续三天熬夜了。',
     samplePy:'Wèile zhǔnbèi bǐsài, wǒ yǐjīng liánxù sān tiān áoyè le.',
     sampleVn:'Để chuẩn bị cho cuộc thi, tớ đã thức khuya liền ba đêm rồi.',
     tip:'连续 + số lượng + V: 连续三天熬夜. Đừng nhầm với 继续 (làm tiếp).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài văn kể chuyện nộp cho cô giáo.',
     a:'他一出门，便发现自己没带钥匙。',b:'他一出门，就发现自己没带钥匙。',better:'a',
     why:'便 = 就 nhưng mang sắc thái VĂN VIẾT. Trong bài văn kể chuyện, 便 làm câu văn trang nhã hơn; nói chuyện hằng ngày thì dùng 就.'},

    {scene:'Em trấn an bạn thân đang lo lắng.',
     a:'你别瞎担心了，没事儿的。',b:'你不必过于担心，一切都会好的。',better:'a',
     why:'瞎担心 là khẩu ngữ thân mật, hợp khi nói với bạn. Câu b đúng nhưng trịnh trọng như thư từ, nói với bạn thân nghe xa cách.'},

    {scene:'Thầy giáo nói một điều em cho là chưa đúng.',
     a:'胡说！不是这样的。',b:'老师，我觉得可能不是这样的。',better:'b',
     why:'胡说 là lời phản bác rất MẠNH, thậm chí thô lỗ. Với thầy cô, người lớn phải dùng cách nói mềm: 我觉得可能…….'},

    {scene:'Em viết báo cáo góp ý cho một bản kế hoạch ở công ty.',
     a:'这个结论有点儿片面，建议多方面地考虑。',b:'你这是瞎说。',better:'a',
     why:'Văn bản công việc cần khách quan, lịch sự: 片面 + 建议 là cách góp ý chuẩn. 瞎说 là khẩu ngữ, mang tính chê trách.'},

    {scene:'Em xác nhận lại lịch hẹn với khách hàng.',
     a:'您确定是明天上午十点吗？',b:'你没记错吧？',better:'a',
     why:'Với khách hàng dùng 您 và 确定 để hỏi lại lịch sự. 你没记错吧 nghe như nghi ngờ người ta nhớ nhầm.'},

    {scene:'Em thi trượt, nhắn tin than với bạn.',
     a:'唉，又没考好。',b:'哎，又没考好。',better:'a',
     why:'Than thở, tiếc nuối → 唉 (ài, tiếng thở dài). 哎 (āi) thiên về ngạc nhiên hoặc gọi người, không diễn tả nỗi buồn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Theo 练习 4 của sách: 根据下面的提示词复述课文内容
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong sách: <b>根据下面的提示词复述课文内容</b> — kể lại HAI câu chuyện bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể mỗi truyện khoảng 1 phút.',
  outline: [
    {step:'Truyện 1 · Mở đầu', cue:'很久以前，一个很有智慧的国王让士兵们……', words:['智慧','士兵','瞎','分别','寻找']},
    {step:'Truyện 1 · Sờ voi', cue:'摸到牙齿的…… 摸到尾巴的…… 摸到身子的…… 摸到耳朵的……', words:['摸','牙齿','尾巴','绳子','墙','扇子']},
    {step:'Truyện 1 · Bài học', cue:'国王笑着说，每个人都只摸到了一点……', words:['片面','结论']},
    {step:'Truyện 2 · Gặp hổ', cue:'西汉时期的李广…… 一天打猎的时候，忽然……', words:['将军','称','打猎','忽然','蹲','不要紧']},
    {step:'Truyện 2 · Mũi tên', cue:'他取出一支箭…… 士兵们走上前去一看……', words:['支','全神贯注','确定','石头']},
    {step:'Truyện 2 · Thử lại', cue:'他连续换了几根箭，可是……', words:['连续','根','碎','硬']},
    {step:'Truyện 2 · Kết', cue:'扬雄说…… 这个成语便……', words:['精诚所至，金石为开','便']}
  ],
  checklist: [
    'Kể đủ cả HAI câu chuyện chưa, hay bỏ mất phần nào?',
    'Truyện 1 có dùng 瞎、分别、摸、片面、结论 không (từ khoá sách yêu cầu)?',
    'Truyện 2 có dùng 称、忽然、不要紧、确定、连续、硬、便 không?',
    'Có nói được ĐẠO LÝ của mỗi truyện ở câu cuối không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 72–73) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['尽力','片面','确定','善于','寻找','不要紧'],
   cau:[
     {s:'他在四处＿＿，但至今仍然没有结果。', dap:['寻找']},
     {s:'不能这样＿＿地看问题，而要多方面地考虑。', dap:['片面']},
     {s:'你＿＿他就是我们要找的那位英雄吗？', dap:['确定']},
     {s:'我们班有个同学被车撞了，还好伤得不重，＿＿。', dap:['不要紧']},
     {s:'她很爱护学生，也很＿＿教育他们。', dap:['善于']},
     {s:'别难过了，虽然成绩不理想，但你已经＿＿了。', dap:['尽力']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'每天我一回家，可爱的小狗就＿＿着尾巴冲我跑过来。', opts:['摸','摇'], ans:1, giai:'Vẫy đuôi → 摇尾巴. 摸 là sờ bằng tay, chó không "sờ" đuôi được.'},
     {s:'对我们提出的意见，老板还没有做出＿＿。', opts:['反应','反映'], ans:0, giai:'做出反应 = có phản ứng/phản hồi. 反映 là phản ánh, trình bày tình hình lên cấp trên, không đi với 做出.'},
     {s:'我真的需要休息了，我已经＿＿工作20个小时了。', opts:['继续','连续'], ans:1, giai:'Làm liền 20 tiếng không nghỉ, có số lượng → 连续. 继续 là làm tiếp sau khi dừng.'},
     {s:'＿＿，我想到了一个办法，你们看看行不行。', opts:['唉','哎'], ans:1, giai:'Gọi mọi người chú ý để báo ý mới → 哎 (āi). 唉 (ài) là tiếng thở dài buồn bã, bất lực.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'他A没回家，肯定是B公司有事，你C着什么D急！', tu:'瞎', ans:'C', giai:'瞎 phó từ đứng trước động từ: 瞎着急 → 你瞎着什么急 (cậu cuống lên vô ích làm gì).'},
     {s:'A半夜里，B他C睡着睡着D坐了起来。', tu:'忽然', ans:'D', giai:'忽然 là phó từ, đứng ngay trước động từ 坐: 他睡着睡着忽然坐了起来.'},
     {s:'这么A美丽的B图画竟然是用C绳子D做的！', tu:'根', ans:'C', giai:'根 là lượng từ cho vật dài mảnh, đứng trước danh từ 绳子: 用（一）根绳子做的.'},
     {s:'他们A去两个B不同的城市做社会调查，想了解C南方和北方D不同的风俗！', tu:'分别', ans:'A', giai:'分别 phó từ (mỗi người đi một nơi), đứng sau chủ ngữ 他们, trước động từ 去.'}
   ]}
];
