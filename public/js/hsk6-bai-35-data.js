// ══════════════════════════════════════════
// DATA — HSK6 Bài 35: 走近木版年画 (Đến với tranh Tết mộc bản)
// 第九单元 古今博览 · Nguồn: HSK标准教程6下 (tr. 154–164)
// Bài khoá: 走近木版年画 (1447 chữ) — 年画的起源 · 木版年画 · 年画传人张光宁
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'起源',py:'qǐyuán',pos:'Danh từ / Động từ',vn:'căn nguyên, nguồn gốc; bắt nguồn',hv:'khởi nguyên',em:'🌱',lesson:1,
   explain:['Danh từ: nơi, lúc một sự vật bắt đầu hình thành — 生命的起源 (nguồn gốc sự sống), 年画的起源 (nguồn gốc tranh Tết). Sắc thái văn viết, hay dùng trong văn khoa học, lịch sử.','Động từ: thường đi thành cụm 起源于 + nơi chốn / thời gian = bắt nguồn từ: 年画起源于古代的门神画. Gần nghĩa 来源 nhưng 起源 nhấn "điểm khởi đầu" trong lịch sử.'],
   usage:'……的起源; 探索 / 研究 / 了解 + 起源; 起源于 + nơi / thời kỳ / sự vật.',
   collo:['年画的起源','生命的起源','起源于古代','探索起源'],
   ex_zh:'年画的起源',ex_py:'niánhuà de qǐyuán',ex_vn:'Nguồn gốc của tranh Tết',
   exList:[
     {zh:'年画是中国画的一种，它起源于古代的门神画。',py:'Niánhuà shì Zhōngguó huà de yì zhǒng, tā qǐyuán yú gǔdài de ménshén huà.',vn:'Tranh Tết là một loại tranh Trung Quốc, bắt nguồn từ tranh môn thần thời cổ.'},
     {zh:'孩子们很想了解生命的起源。',py:'Háizimen hěn xiǎng liǎojiě shēngmìng de qǐyuán.',vn:'Bọn trẻ rất muốn tìm hiểu nguồn gốc của sự sống.'},
     {zh:'关于春节的起源，民间流传着好几种不同的说法。',py:'Guānyú Chūnjié de qǐyuán, mínjiān liúchuánzhe hǎo jǐ zhǒng bù tóng de shuōfǎ.',vn:'Về nguồn gốc của Tết Nguyên đán, trong dân gian lưu truyền mấy cách giải thích khác nhau.'}
   ],
   colloFull:[
     {zh:'年画的起源',py:'niánhuà de qǐyuán',vn:'nguồn gốc tranh Tết'},
     {zh:'生命的起源',py:'shēngmìng de qǐyuán',vn:'nguồn gốc sự sống'},
     {zh:'起源于古代',py:'qǐyuán yú gǔdài',vn:'bắt nguồn từ thời cổ'},
     {zh:'探索起源',py:'tànsuǒ qǐyuán',vn:'tìm tòi nguồn gốc'},
     {zh:'文字的起源',py:'wénzì de qǐyuán',vn:'nguồn gốc chữ viết'}
   ],
   patterns:[
     {s:'A + 起源于 + B',m:'A bắt nguồn từ B (nơi chốn, thời kỳ, sự vật)'},
     {s:'关于……的起源，……',m:'Nói về nguồn gốc của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói trò chơi này bắt nguồn từ một câu chuyện dân gian.',answer:'听说这个游戏起源于一个民间故事。',answerPy:'Tīngshuō zhège yóuxì qǐyuán yú yí ge mínjiān gùshi.',
      note:'听说 + mệnh đề (ôn HSK 3–4); 起源于 + danh từ.',pair:'听说……'},
     {promptLang:'vi',prompt:'Muốn hiểu một lễ hội, trước hết phải tìm hiểu nguồn gốc của nó.',answer:'要想了解一个节日，首先要了解它的起源。',answerPy:'Yào xiǎng liǎojiě yí ge jiérì, shǒuxiān yào liǎojiě tā de qǐyuán.',
      note:'要想……，首先要…… (điều kiện – bước đầu tiên, ôn HSK 4–5).',pair:'要想……首先……'}
   ]},

  {n:2,zh:'文献',py:'wénxiàn',pos:'Danh từ',vn:'tài liệu lịch sử, văn hiến, tư liệu',hv:'văn hiến',em:'📜',lesson:1,
   explain:['Sách vở, tài liệu có giá trị lịch sử hoặc học thuật: 历史文献, 古代文献. Văn viết.','Trong nghiên cứu còn chỉ "tài liệu tham khảo": 参考文献, 查阅文献. Câu bài khoá 有文献记载 = có tài liệu ghi chép lại.'],
   usage:'有文献记载……; 查阅 / 研究 / 整理 + 文献; 历史 / 古代 / 参考 + 文献. Lượng từ: 份 / 篇 / 部.',
   collo:['有文献记载','历史文献','查阅文献','参考文献'],
   ex_zh:'有文献记载',ex_py:'yǒu wénxiàn jìzǎi',ex_vn:'Có tài liệu ghi chép',
   exList:[
     {zh:'有文献记载：传说很久以前，有一对兄弟，专门监督百鬼。',py:'Yǒu wénxiàn jìzǎi: chuánshuō hěn jiǔ yǐqián, yǒu yí duì xiōngdì, zhuānmén jiāndū bǎi guǐ.',vn:'Có tài liệu ghi chép rằng: tương truyền rất lâu về trước có hai anh em chuyên giám sát trăm loài ma quỷ.'},
     {zh:'为了写毕业论文，他在图书馆查阅了大量文献。',py:'Wèile xiě bìyè lùnwén, tā zài túshūguǎn cháyuèle dàliàng wénxiàn.',vn:'Để viết luận văn tốt nghiệp, anh ấy đã tra cứu rất nhiều tài liệu ở thư viện.'},
     {zh:'这批古代文献对研究当时的社会生活很有价值。',py:'Zhè pī gǔdài wénxiàn duì yánjiū dāngshí de shèhuì shēnghuó hěn yǒu jiàzhí.',vn:'Lô tư liệu cổ này rất có giá trị đối với việc nghiên cứu đời sống xã hội thời đó.'}
   ],
   colloFull:[
     {zh:'有文献记载',py:'yǒu wénxiàn jìzǎi',vn:'có tài liệu ghi chép'},
     {zh:'历史文献',py:'lìshǐ wénxiàn',vn:'tư liệu lịch sử'},
     {zh:'查阅文献',py:'cháyuè wénxiàn',vn:'tra cứu tài liệu'},
     {zh:'参考文献',py:'cānkǎo wénxiàn',vn:'tài liệu tham khảo'},
     {zh:'整理古代文献',py:'zhěnglǐ gǔdài wénxiàn',vn:'chỉnh lý tư liệu cổ'}
   ],
   patterns:[
     {s:'（据）文献记载，……',m:'Theo tài liệu ghi chép thì …'},
     {s:'查阅 / 研究 + ……文献',m:'Tra cứu / nghiên cứu tài liệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo tư liệu ghi chép, ngôi chùa này đã có hơn một nghìn năm lịch sử.',answer:'据文献记载，这座寺庙已经有一千多年的历史了。',answerPy:'Jù wénxiàn jìzǎi, zhè zuò sìmiào yǐjīng yǒu yìqiān duō nián de lìshǐ le.',
      note:'据…… = theo …; số + 多 + lượng từ (một nghìn năm lẻ, ôn HSK 4).',pair:'数词 + 多'},
     {promptLang:'vi',prompt:'Chỉ khi đọc thật nhiều tài liệu, cậu mới viết được bài nghiên cứu tốt.',answer:'只有多读文献，你才能写出好的研究论文。',answerPy:'Zhǐyǒu duō dú wénxiàn, nǐ cái néng xiěchū hǎo de yánjiū lùnwén.',
      note:'只有……才…… (điều kiện duy nhất, ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:3,zh:'凶恶',py:'xiōng\'è',pos:'Tính từ',vn:'hung ác, dữ tợn',hv:'hung ác',em:'👹',lesson:1,
   explain:['(Tính tình, hành vi, dáng vẻ) hung dữ, độc ác, đáng sợ: 凶恶的鬼, 凶恶的敌人, 面目凶恶.','Mạnh hơn 凶 (dữ) và 厉害; thường dùng cho kẻ thù, ác thú, ma quỷ — ít dùng để tả người bình thường nóng tính.'],
   usage:'凶恶的 + 鬼 / 敌人 / 野兽 / 目光; 面目 / 样子 + 凶恶; 十分凶恶.',
   collo:['凶恶的鬼','凶恶的敌人','面目凶恶','凶恶的目光'],
   ex_zh:'发现凶恶的鬼就捆绑起来',ex_py:'fāxiàn xiōng\'è de guǐ jiù kǔnbǎng qǐlai',ex_vn:'Phát hiện con quỷ hung ác liền trói lại',
   exList:[
     {zh:'这对兄弟发现凶恶的鬼就捆绑起来，直接去喂老虎。',py:'Zhè duì xiōngdì fāxiàn xiōng\'è de guǐ jiù kǔnbǎng qǐlai, zhíjiē qù wèi lǎohǔ.',vn:'Hai anh em này hễ phát hiện con quỷ hung ác là trói lại, đem thẳng cho hổ ăn.'},
     {zh:'门神画上的武将面目凶恶，据说是为了吓走鬼怪。',py:'Ménshén huà shang de wǔjiàng miànmù xiōng\'è, jùshuō shì wèile xiàzǒu guǐguài.',vn:'Võ tướng trên tranh môn thần mặt mũi dữ tợn, nghe nói là để doạ ma quỷ bỏ chạy.'},
     {zh:'那条狗看起来很凶恶，其实性格特别温和。',py:'Nà tiáo gǒu kàn qilai hěn xiōng\'è, qíshí xìnggé tèbié wēnhé.',vn:'Con chó đó trông rất dữ tợn, thật ra tính rất hiền.'}
   ],
   colloFull:[
     {zh:'凶恶的鬼',py:'xiōng\'è de guǐ',vn:'con quỷ hung ác'},
     {zh:'凶恶的敌人',py:'xiōng\'è de dírén',vn:'kẻ thù hung ác'},
     {zh:'面目凶恶',py:'miànmù xiōng\'è',vn:'mặt mũi dữ tợn'},
     {zh:'凶恶的目光',py:'xiōng\'è de mùguāng',vn:'ánh mắt hung dữ'},
     {zh:'凶恶的野兽',py:'xiōng\'è de yěshòu',vn:'thú dữ'}
   ],
   patterns:[
     {s:'凶恶的 + N（鬼 / 敌人 / 野兽）',m:'Kẻ / con … hung ác'},
     {s:'看起来很凶恶，其实……',m:'Trông thì dữ, thật ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con sói ấy dữ tợn đến nỗi không ai dám lại gần.',answer:'那只狼凶恶得没有人敢靠近。',answerPy:'Nà zhī láng xiōng\'è de méiyǒu rén gǎn kàojìn.',
      note:'Adj + 得 + kết quả (bổ ngữ mức độ, ôn HSK 4).',pair:'Adj + 得 + 结果'},
     {promptLang:'vi',prompt:'Tuy ông ấy trông rất dữ, nhưng thật ra rất tốt bụng.',answer:'虽然他看起来很凶恶，但其实心地很善良。',answerPy:'Suīrán tā kàn qilai hěn xiōng\'è, dàn qíshí xīndì hěn shànliáng.',
      note:'虽然……但…… + 看起来 / 其实 (ôn HSK 4).',pair:'虽然……但……'}
   ]},

  {n:4,zh:'揭露',py:'jiēlù',pos:'Động từ',vn:'vạch trần, bóc trần, phơi bày',hv:'yết lộ',em:'🔦',lesson:1,
   explain:['Làm cho điều bị che giấu (thường là điều XẤU) lộ ra: 揭露真相, 揭露罪行, 揭露恶行, 揭露骗局.','Khác 暴露 (bị lộ ra, thường không chủ ý) — 揭露 là CÓ CHỦ Ý vạch ra; khác 透露 (hé lộ tin tức, trung tính).'],
   usage:'揭露 + 真相 / 罪行 / 恶行 / 矛盾 / 阴谋; 被……揭露; 无须揭露.',
   collo:['揭露恶行','揭露真相','揭露骗局','被媒体揭露'],
   ex_zh:'无须揭露恶行',ex_py:'wúxū jiēlù èxíng',ex_vn:'Không cần vạch trần tội ác',
   exList:[
     {zh:'他们发现凶恶的鬼就捆绑起来，无须揭露恶行，直接去喂老虎。',py:'Tāmen fāxiàn xiōng\'è de guǐ jiù kǔnbǎng qǐlai, wúxū jiēlù èxíng, zhíjiē qù wèi lǎohǔ.',vn:'Họ hễ phát hiện quỷ hung ác liền trói lại, chẳng cần vạch trần tội ác, đem thẳng cho hổ ăn.'},
     {zh:'这篇报道揭露了一些商家卖假货的真相。',py:'Zhè piān bàodào jiēlùle yìxiē shāngjiā mài jiǎhuò de zhēnxiàng.',vn:'Bài phóng sự này đã vạch trần sự thật một số cửa hàng bán hàng giả.'},
     {zh:'骗子的谎言终究会被揭露的。',py:'Piànzi de huǎngyán zhōngjiū huì bèi jiēlù de.',vn:'Lời dối trá của kẻ lừa đảo rốt cuộc cũng sẽ bị vạch trần.'}
   ],
   colloFull:[
     {zh:'揭露恶行',py:'jiēlù èxíng',vn:'vạch trần việc ác'},
     {zh:'揭露真相',py:'jiēlù zhēnxiàng',vn:'phơi bày sự thật'},
     {zh:'揭露骗局',py:'jiēlù piànjú',vn:'vạch trần trò lừa'},
     {zh:'被媒体揭露',py:'bèi méitǐ jiēlù',vn:'bị truyền thông phanh phui'},
     {zh:'揭露矛盾',py:'jiēlù máodùn',vn:'bộc lộ mâu thuẫn'}
   ],
   patterns:[
     {s:'揭露 + 真相 / 罪行 / 骗局',m:'Vạch trần điều xấu bị che giấu'},
     {s:'……被（谁）揭露了',m:'… bị ai đó phanh phui'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính nhờ bài báo của cô ấy mà sự thật mới được phơi bày.',answer:'正是因为她的报道，真相才被揭露出来。',answerPy:'Zhèng shì yīnwèi tā de bàodào, zhēnxiàng cái bèi jiēlù chūlai.',
      note:'正是因为……才…… nhấn mạnh nguyên nhân; câu bị động 被 (ôn HSK 4–5).',pair:'正是因为……才……'},
     {promptLang:'vi',prompt:'Bất kể ai làm chuyện xấu, chúng ta đều nên vạch trần.',answer:'不管是谁做了坏事，我们都应该揭露出来。',answerPy:'Bùguǎn shì shéi zuòle huàishì, wǒmen dōu yīnggāi jiēlù chūlai.',
      note:'不管……都…… (ôn HSK 4).',pair:'不管……都……'}
   ]},

  {n:5,zh:'昌盛',py:'chāngshèng',pos:'Tính từ',vn:'hưng thịnh, hưng vượng',hv:'xương thịnh',em:'🏮',lesson:1,
   explain:['(Quốc gia, văn hoá, sự nghiệp) phát triển mạnh, thịnh vượng. Văn viết, trang trọng: 国家昌盛, 文化的昌盛.','Hay đi thành cặp 繁荣昌盛 (phồn vinh hưng thịnh) trong lời chúc, diễn văn. Không dùng cho việc nhỏ, cá nhân (không nói *我的生意很昌盛 — dùng 兴旺 / 红火).'],
   usage:'国家 / 民族 / 文化 + 昌盛; 繁荣昌盛; 文化的昌盛.',
   collo:['文化的昌盛','繁荣昌盛','国家昌盛','日益昌盛'],
   ex_zh:'文化的昌盛',ex_py:'wénhuà de chāngshèng',ex_vn:'Sự hưng thịnh của văn hoá',
   exList:[
     {zh:'随着经济的发展、文化的昌盛，门神画的内容得以拓展。',py:'Suízhe jīngjì de fāzhǎn, wénhuà de chāngshèng, ménshén huà de nèiróng déyǐ tuòzhǎn.',vn:'Cùng với sự phát triển kinh tế, sự hưng thịnh văn hoá, nội dung tranh môn thần được mở rộng.'},
     {zh:'新年到了，祝愿我们的祖国繁荣昌盛！',py:'Xīnnián dào le, zhùyuàn wǒmen de zǔguó fánróng chāngshèng!',vn:'Năm mới đến rồi, chúc Tổ quốc chúng ta phồn vinh hưng thịnh!'},
     {zh:'唐朝是中国历史上国力昌盛的时期之一。',py:'Tángcháo shì Zhōngguó lìshǐ shang guólì chāngshèng de shíqī zhī yī.',vn:'Nhà Đường là một trong những thời kỳ quốc lực hưng thịnh trong lịch sử Trung Quốc.'}
   ],
   colloFull:[
     {zh:'文化的昌盛',py:'wénhuà de chāngshèng',vn:'sự hưng thịnh văn hoá'},
     {zh:'繁荣昌盛',py:'fánróng chāngshèng',vn:'phồn vinh hưng thịnh'},
     {zh:'国家昌盛',py:'guójiā chāngshèng',vn:'đất nước hưng thịnh'},
     {zh:'日益昌盛',py:'rìyì chāngshèng',vn:'ngày càng hưng thịnh'},
     {zh:'民族昌盛',py:'mínzú chāngshèng',vn:'dân tộc hưng vượng'}
   ],
   patterns:[
     {s:'祝（愿）+ 国家 + 繁荣昌盛',m:'Lời chúc trang trọng'},
     {s:'随着……的昌盛，……',m:'Cùng với sự hưng thịnh của … thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cùng với sự hưng thịnh của đất nước, đời sống người dân ngày càng tốt hơn.',answer:'随着国家的昌盛，人们的生活越来越好了。',answerPy:'Suízhe guójiā de chāngshèng, rénmen de shēnghuó yuè lái yuè hǎo le.',
      note:'随着……，…… + 越来越 (ôn HSK 4).',pair:'随着……'},
     {promptLang:'vi',prompt:'Chỉ có giáo dục phát triển thì văn hoá mới có thể hưng thịnh.',answer:'只有教育发展了，文化才能昌盛。',answerPy:'Zhǐyǒu jiàoyù fāzhǎn le, wénhuà cái néng chāngshèng.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:6,zh:'题材',py:'tícái',pos:'Danh từ',vn:'đề tài, chất liệu (sáng tác)',hv:'đề tài',em:'🎨',lesson:1,
   explain:['Chất liệu đời sống, sự việc được chọn để làm nội dung tác phẩm văn học, nghệ thuật: 历史题材, 生活题材, 反映世俗生活题材的作品.','Khác 话题 (chủ đề câu chuyện đang nói) và 主题 (tư tưởng trung tâm): 题材 là "cái được viết / vẽ về".'],
   usage:'……题材的 + 作品 / 电影 / 小说; 选择 / 挖掘 + 题材; 题材 + 广泛 / 新颖.',
   collo:['世俗生活题材','历史题材的电影','题材广泛','选择题材'],
   ex_zh:'反映世俗生活题材的作品',ex_py:'fǎnyìng shìsú shēnghuó tícái de zuòpǐn',ex_vn:'Tác phẩm phản ánh đề tài đời sống thế tục',
   exList:[
     {zh:'反映世俗生活题材的作品进入了这一领域。',py:'Fǎnyìng shìsú shēnghuó tícái de zuòpǐn jìnrùle zhè yī lǐngyù.',vn:'Những tác phẩm phản ánh đề tài đời sống thế tục đã bước vào lĩnh vực này.'},
     {zh:'这位画家的作品题材广泛，花鸟、山水、人物都画得很好。',py:'Zhè wèi huàjiā de zuòpǐn tícái guǎngfàn, huāniǎo, shānshuǐ, rénwù dōu huà de hěn hǎo.',vn:'Tác phẩm của hoạ sĩ này đề tài rất rộng, hoa chim, sơn thuỷ, nhân vật đều vẽ rất đẹp.'},
     {zh:'最近历史题材的电视剧特别受欢迎。',py:'Zuìjìn lìshǐ tícái de diànshìjù tèbié shòu huānyíng.',vn:'Gần đây phim truyền hình đề tài lịch sử đặc biệt được ưa chuộng.'}
   ],
   colloFull:[
     {zh:'世俗生活题材',py:'shìsú shēnghuó tícái',vn:'đề tài đời sống thế tục'},
     {zh:'历史题材的电影',py:'lìshǐ tícái de diànyǐng',vn:'phim đề tài lịch sử'},
     {zh:'题材广泛',py:'tícái guǎngfàn',vn:'đề tài phong phú'},
     {zh:'选择题材',py:'xuǎnzé tícái',vn:'chọn đề tài'},
     {zh:'题材新颖',py:'tícái xīnyǐng',vn:'đề tài mới mẻ'}
   ],
   patterns:[
     {s:'……题材的 + 作品 / 小说 / 电影',m:'Tác phẩm về đề tài …'},
     {s:'作品 + 题材 + 广泛 / 新颖',m:'Đề tài của tác phẩm rộng / mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà văn này thích lấy chuyện làng quê làm đề tài sáng tác.',answer:'这位作家喜欢把农村的故事当作创作题材。',answerPy:'Zhè wèi zuòjiā xǐhuan bǎ nóngcūn de gùshi dàngzuò chuàngzuò tícái.',
      note:'把 A 当作 B = coi A là B (ôn HSK 5).',pair:'把……当作……'},
     {promptLang:'vi',prompt:'Bộ phim này đề tài không chỉ mới mẻ mà diễn viên cũng diễn rất đạt.',answer:'这部电影不但题材新颖，而且演员也演得很好。',answerPy:'Zhè bù diànyǐng búdàn tícái xīnyǐng, érqiě yǎnyuán yě yǎn de hěn hǎo.',
      note:'不但……而且…… (ôn HSK 4).',pair:'不但……而且……'}
   ]},

  {n:7,zh:'驱逐',py:'qūzhú',pos:'Động từ',vn:'xua đuổi, trục xuất, đuổi',hv:'khu trục',em:'🧹',lesson:1,
   explain:['Dùng sức mạnh đuổi đi, không cho ở lại: 驱逐侵略者, 驱逐出境 (trục xuất ra khỏi nước). Văn viết, sắc thái mạnh, trang trọng.','Trong bài: 驱逐祸凶 = xua đuổi tai hoạ, điều dữ — mục đích của tranh Tết. Khẩu ngữ thường nói 赶走.'],
   usage:'驱逐 + 敌人 / 侵略者 / 祸凶 / 邪气; 驱逐出境; 被驱逐.',
   collo:['驱逐祸凶','驱逐出境','驱逐侵略者','驱逐邪气'],
   ex_zh:'以驱逐祸凶为内容',ex_py:'yǐ qūzhú huòxiōng wéi nèiróng',ex_vn:'Lấy việc xua đuổi tai hoạ làm nội dung',
   exList:[
     {zh:'以驱逐祸凶、祝福新年吉祥喜庆为内容的画儿就叫年画了。',py:'Yǐ qūzhú huòxiōng, zhùfú xīnnián jíxiáng xǐqìng wéi nèiróng de huàr jiù jiào niánhuà le.',vn:'Những bức tranh lấy nội dung xua đuổi tai hoạ, chúc năm mới may mắn vui vẻ thì được gọi là tranh Tết.'},
     {zh:'古人认为放鞭炮可以驱逐邪气。',py:'Gǔrén rènwéi fàng biānpào kěyǐ qūzhú xiéqì.',vn:'Người xưa cho rằng đốt pháo có thể xua đuổi tà khí.'},
     {zh:'那名外国人因为违法被驱逐出境了。',py:'Nà míng wàiguórén yīnwèi wéifǎ bèi qūzhú chūjìng le.',vn:'Người nước ngoài đó vì phạm pháp nên đã bị trục xuất khỏi đất nước.'}
   ],
   colloFull:[
     {zh:'驱逐祸凶',py:'qūzhú huòxiōng',vn:'xua đuổi tai hoạ'},
     {zh:'驱逐出境',py:'qūzhú chūjìng',vn:'trục xuất ra khỏi nước'},
     {zh:'驱逐侵略者',py:'qūzhú qīnlüèzhě',vn:'đánh đuổi quân xâm lược'},
     {zh:'驱逐邪气',py:'qūzhú xiéqì',vn:'xua tà khí'},
     {zh:'被驱逐',py:'bèi qūzhú',vn:'bị trục xuất'}
   ],
   patterns:[
     {s:'以 + 驱逐…… + 为 + 目的 / 内容',m:'Lấy việc xua đuổi … làm mục đích / nội dung'},
     {s:'（被）驱逐出 + 境 / 国 / 场',m:'(Bị) đuổi ra khỏi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người xưa dán tranh môn thần lên cửa để xua đuổi ma quỷ.',answer:'古人把门神画贴在门上，用来驱逐鬼怪。',answerPy:'Gǔrén bǎ ménshén huà tiē zài mén shang, yònglái qūzhú guǐguài.',
      note:'把 + O + V在 + nơi chốn (ôn HSK 4); 用来 + mục đích.',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Cầu thủ đó vì đánh người nên bị đuổi khỏi sân.',answer:'那名球员因为打人而被驱逐出场。',answerPy:'Nà míng qiúyuán yīnwèi dǎ rén ér bèi qūzhú chūchǎng.',
      note:'因为……而…… (văn viết, ôn HSK 5).',pair:'因为……而……'}
   ]},

  {n:8,zh:'吉祥',py:'jíxiáng',pos:'Tính từ',vn:'may mắn, tốt lành, cát tường',hv:'cát tường',em:'🧧',lesson:1,
   explain:['Tốt lành, may mắn, điềm lành — thường dùng trong lời chúc, phong tục: 吉祥如意, 吉祥物 (linh vật), 吉祥话 (lời chúc may mắn).','Văn hoá Trung Quốc – Việt Nam: màu đỏ, con cá (年年有余), chữ 福 đều là biểu tượng 吉祥.'],
   usage:'吉祥 + 如意 / 喜庆; 吉祥 + 物 / 话 / 图案; 带来吉祥; 象征吉祥.',
   collo:['吉祥喜庆','吉祥如意','吉祥物','说吉祥话'],
   ex_zh:'祝福新年吉祥喜庆',ex_py:'zhùfú xīnnián jíxiáng xǐqìng',ex_vn:'Chúc năm mới may mắn vui vẻ',
   exList:[
     {zh:'年画的内容大多是祝福新年吉祥喜庆的。',py:'Niánhuà de nèiróng dàduō shì zhùfú xīnnián jíxiáng xǐqìng de.',vn:'Nội dung tranh Tết phần lớn là chúc năm mới may mắn, vui tươi.'},
     {zh:'过年的时候，大家见面都要说几句吉祥话。',py:'Guònián de shíhou, dàjiā jiànmiàn dōu yào shuō jǐ jù jíxiáng huà.',vn:'Dịp Tết, mọi người gặp nhau đều nói vài câu chúc may mắn.'},
     {zh:'在中国，红色象征着吉祥和幸福。',py:'Zài Zhōngguó, hóngsè xiàngzhēngzhe jíxiáng hé xìngfú.',vn:'Ở Trung Quốc, màu đỏ tượng trưng cho may mắn và hạnh phúc.'}
   ],
   colloFull:[
     {zh:'吉祥喜庆',py:'jíxiáng xǐqìng',vn:'may mắn vui tươi'},
     {zh:'吉祥如意',py:'jíxiáng rúyì',vn:'cát tường như ý'},
     {zh:'吉祥物',py:'jíxiángwù',vn:'linh vật, vật may mắn'},
     {zh:'说吉祥话',py:'shuō jíxiáng huà',vn:'nói lời chúc may mắn'},
     {zh:'象征吉祥',py:'xiàngzhēng jíxiáng',vn:'tượng trưng cho điềm lành'}
   ],
   patterns:[
     {s:'祝（你）+ 吉祥如意',m:'Lời chúc năm mới'},
     {s:'A + 象征着 + 吉祥',m:'A tượng trưng cho may mắn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúc bà năm mới cát tường như ý, sức khoẻ dồi dào!',answer:'祝奶奶新年吉祥如意，身体健康！',answerPy:'Zhù nǎinai xīnnián jíxiáng rúyì, shēntǐ jiànkāng!',
      note:'祝 + người + lời chúc (ôn HSK 3–4).',pair:'祝 + 人 + ……'},
     {promptLang:'vi',prompt:'Người ta cho rằng dán chữ Phúc lên cửa có thể mang lại may mắn.',answer:'人们认为在门上贴“福”字能带来吉祥。',answerPy:'Rénmen rènwéi zài mén shang tiē “fú” zì néng dàilái jíxiáng.',
      note:'认为 + mệnh đề; 带来 + điều tốt (ôn HSK 4).',pair:'认为……'}
   ]},

  {n:9,zh:'里程碑',py:'lǐchéngbēi',pos:'Danh từ',vn:'cột mốc, mốc lịch sử, sự kiện quan trọng',hv:'lý trình bi',em:'🪧',lesson:1,
   explain:['Nghĩa gốc: cột đá bên đường ghi số dặm (里程 = quãng đường, 碑 = bia).','Nghĩa bóng (thường dùng): sự kiện đánh dấu một bước ngoặt quan trọng trong lịch sử phát triển: 一个重要的里程碑, 具有里程碑意义.'],
   usage:'……史上 + 一个重要的里程碑; 具有里程碑意义; 成为 + 里程碑.',
   collo:['重要的里程碑','具有里程碑意义','成为里程碑','发展史上的里程碑'],
   ex_zh:'一个重要的里程碑',ex_py:'yí ge zhòngyào de lǐchéngbēi',ex_vn:'Một cột mốc quan trọng',
   exList:[
     {zh:'造纸技术的发明是人类文化发展史上一个重要的里程碑。',py:'Zàozhǐ jìshù de fāmíng shì rénlèi wénhuà fāzhǎn shǐ shang yí ge zhòngyào de lǐchéngbēi.',vn:'Việc phát minh kỹ thuật làm giấy là một cột mốc quan trọng trong lịch sử phát triển văn hoá loài người.'},
     {zh:'考上大学是我人生中的一个里程碑。',py:'Kǎoshàng dàxué shì wǒ rénshēng zhōng de yí ge lǐchéngbēi.',vn:'Đỗ đại học là một cột mốc trong đời tôi.'},
     {zh:'这次会谈具有里程碑意义，两国关系从此进入了新阶段。',py:'Zhè cì huìtán jùyǒu lǐchéngbēi yìyì, liǎng guó guānxi cóngcǐ jìnrùle xīn jiēduàn.',vn:'Cuộc hội đàm này có ý nghĩa cột mốc, quan hệ hai nước từ đó bước sang giai đoạn mới.'}
   ],
   colloFull:[
     {zh:'重要的里程碑',py:'zhòngyào de lǐchéngbēi',vn:'cột mốc quan trọng'},
     {zh:'具有里程碑意义',py:'jùyǒu lǐchéngbēi yìyì',vn:'có ý nghĩa cột mốc'},
     {zh:'成为里程碑',py:'chéngwéi lǐchéngbēi',vn:'trở thành cột mốc'},
     {zh:'发展史上的里程碑',py:'fāzhǎn shǐ shang de lǐchéngbēi',vn:'cột mốc trong lịch sử phát triển'},
     {zh:'人生的里程碑',py:'rénshēng de lǐchéngbēi',vn:'cột mốc cuộc đời'}
   ],
   patterns:[
     {s:'A + 是 + ……史上 + 一个重要的里程碑',m:'A là một cột mốc quan trọng trong lịch sử …'},
     {s:'……具有里程碑意义',m:'… mang ý nghĩa bước ngoặt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc phát minh ra máy tính được coi là một cột mốc của khoa học kỹ thuật hiện đại.',answer:'电脑的发明被看作现代科技的一个里程碑。',answerPy:'Diànnǎo de fāmíng bèi kànzuò xiàndài kējì de yí ge lǐchéngbēi.',
      note:'被看作…… = được coi là (bị động, ôn HSK 5).',pair:'被 + V + 作……'},
     {promptLang:'vi',prompt:'Nếu dự án này thành công, nó sẽ trở thành một cột mốc của công ty.',answer:'如果这个项目成功了，它将成为公司的一个里程碑。',answerPy:'Rúguǒ zhège xiàngmù chénggōng le, tā jiāng chéngwéi gōngsī de yí ge lǐchéngbēi.',
      note:'如果……，将…… (giả thiết – tương lai, ôn HSK 4).',pair:'如果……将……'}
   ]},

  {n:10,zh:'墨水儿',py:'mòshuǐr',pos:'Danh từ',vn:'mực (để viết)',hv:'mặc thuỷ (nhi)',em:'🖋️',lesson:1,
   explain:['Mực nước dùng để viết, vẽ; 墨 là thỏi mực tàu phải mài, 墨水儿 là mực đã ở dạng nước. Khẩu ngữ phía Bắc hay thêm 儿.','Nghĩa bóng khẩu ngữ: 肚子里有墨水儿 = có học thức, có chữ nghĩa.'],
   usage:'需要 / 蘸 / 灌 + 墨水儿; 一瓶墨水儿; 肚子里有墨水儿 (có học).',
   collo:['需要墨水儿','一瓶墨水儿','蘸墨水儿','肚子里有墨水儿'],
   ex_zh:'书写就需要墨水儿',ex_py:'shūxiě jiù xūyào mòshuǐr',ex_vn:'Viết chữ thì cần mực',
   exList:[
     {zh:'有了纸，书写就需要墨水儿，于是有人发明了墨。',py:'Yǒule zhǐ, shūxiě jiù xūyào mòshuǐr, yúshì yǒu rén fāmíngle mò.',vn:'Có giấy rồi, viết chữ thì cần mực, thế là có người phát minh ra mực.'},
     {zh:'钢笔没墨水儿了，你能借我一支笔吗？',py:'Gāngbǐ méi mòshuǐr le, nǐ néng jiè wǒ yì zhī bǐ ma?',vn:'Bút máy hết mực rồi, cậu cho tớ mượn một cây bút được không?'},
     {zh:'别看他年轻，肚子里可有墨水儿了。',py:'Bié kàn tā niánqīng, dùzi li kě yǒu mòshuǐr le.',vn:'Đừng thấy anh ấy trẻ mà coi thường, trong bụng đầy chữ nghĩa đấy.'}
   ],
   colloFull:[
     {zh:'需要墨水儿',py:'xūyào mòshuǐr',vn:'cần mực'},
     {zh:'一瓶墨水儿',py:'yì píng mòshuǐr',vn:'một lọ mực'},
     {zh:'蘸墨水儿',py:'zhàn mòshuǐr',vn:'chấm mực'},
     {zh:'肚子里有墨水儿',py:'dùzi li yǒu mòshuǐr',vn:'có học thức, có chữ nghĩa'},
     {zh:'墨水儿用完了',py:'mòshuǐr yòngwán le',vn:'mực dùng hết rồi'}
   ],
   patterns:[
     {s:'……没墨水儿了',m:'(Bút) hết mực rồi'},
     {s:'（某人）肚子里有墨水儿',m:'Ai đó có học thức (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lọ mực vừa mua đã bị em trai làm đổ rồi.',answer:'刚买的一瓶墨水儿被弟弟弄洒了。',answerPy:'Gāng mǎi de yì píng mòshuǐr bèi dìdi nòngsǎ le.',
      note:'Câu bị động 被 + V + bổ ngữ kết quả (ôn HSK 4).',pair:'被……V + 结果'},
     {promptLang:'vi',prompt:'Người xưa viết chữ phải mài mực trước, không tiện như bây giờ.',answer:'古人写字得先磨墨，不像现在这么方便。',answerPy:'Gǔrén xiě zì děi xiān mó mò, bú xiàng xiànzài zhème fāngbiàn.',
      note:'不像……这么…… (so sánh, ôn HSK 4).',pair:'不像……这么……'}
   ]},

  {n:11,zh:'盖章',py:'gài zhāng',pos:'Động từ (li hợp)',vn:'đóng dấu',hv:'cái chương',em:'🔖',lesson:1,
   explain:['Ấn con dấu (印章) lên giấy tờ, thư từ, tranh chữ để xác nhận. Là động từ li hợp: 盖个章, 盖了章, 盖一下章.','Trong hành chính: 签字盖章 (ký tên đóng dấu) = thủ tục xác nhận chính thức.'],
   usage:'在 + 文件 / 字画 + 上 + 盖章; 签字盖章; 盖个章; 盖上公章.',
   collo:['字画上需要盖章','签字盖章','盖个章','盖上公章'],
   ex_zh:'字画、书信上需要盖章',ex_py:'zìhuà, shūxìn shang xūyào gài zhāng',ex_vn:'Tranh chữ, thư từ cần đóng dấu',
   exList:[
     {zh:'字画、书信上需要盖章，于是印章开始流行。',py:'Zìhuà, shūxìn shang xūyào gài zhāng, yúshì yìnzhāng kāishǐ liúxíng.',vn:'Tranh chữ, thư từ cần đóng dấu, thế là con dấu bắt đầu thịnh hành.'},
     {zh:'这份证明必须由学校盖章才有效。',py:'Zhè fèn zhèngmíng bìxū yóu xuéxiào gài zhāng cái yǒuxiào.',vn:'Giấy chứng nhận này phải do nhà trường đóng dấu mới có hiệu lực.'},
     {zh:'麻烦您在这儿签个字，再盖个章。',py:'Máfan nín zài zhèr qiān ge zì, zài gài ge zhāng.',vn:'Phiền anh ký tên ở đây, rồi đóng dấu giúp.'}
   ],
   colloFull:[
     {zh:'字画上需要盖章',py:'zìhuà shang xūyào gài zhāng',vn:'tranh chữ cần đóng dấu'},
     {zh:'签字盖章',py:'qiān zì gài zhāng',vn:'ký tên đóng dấu'},
     {zh:'盖个章',py:'gài ge zhāng',vn:'đóng cái dấu'},
     {zh:'盖上公章',py:'gàishang gōngzhāng',vn:'đóng dấu cơ quan'},
     {zh:'由学校盖章',py:'yóu xuéxiào gài zhāng',vn:'do nhà trường đóng dấu'}
   ],
   patterns:[
     {s:'在 + N + 上 + 盖章',m:'Đóng dấu lên …'},
     {s:'由 + 单位 + 盖章 + 才有效',m:'Phải do đơn vị nào đóng dấu mới có hiệu lực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hợp đồng phải được hai bên ký tên đóng dấu thì mới có hiệu lực.',answer:'合同要双方签字盖章以后才有效。',answerPy:'Hétong yào shuāngfāng qiān zì gài zhāng yǐhòu cái yǒuxiào.',
      note:'……以后才…… (điều kiện thời gian, ôn HSK 4).',pair:'……以后才……'},
     {promptLang:'vi',prompt:'Tôi đi ba lần mà vẫn chưa đóng được dấu.',answer:'我跑了三趟，还是没盖上章。',answerPy:'Wǒ pǎole sān tàng, háishi méi gàishang zhāng.',
      note:'Động từ li hợp chen bổ ngữ: 盖上章; 还是没…… (ôn HSK 4–5).',pair:'离合词 V + 补语 + O'}
   ]},

  {n:12,zh:'联想',py:'liánxiǎng',pos:'Động từ',vn:'liên tưởng, nghĩ đến',hv:'liên tưởng',em:'💡',lesson:1,
   explain:['Từ một người, sự vật, khái niệm mà nghĩ tới người, sự vật, khái niệm khác có liên quan: 联想到……, 由 A 联想到 B.','Cũng làm danh từ: 丰富的联想 (trí liên tưởng phong phú). Trùng khít với "liên tưởng" tiếng Việt.'],
   usage:'（由 / 从 A）联想到 + B; 让人联想起……; 引起联想; 丰富的联想.',
   collo:['联想到','让人联想起','由此联想到','丰富的联想'],
   ex_zh:'于是有人联想到',ex_py:'yúshì yǒu rén liánxiǎng dào',ex_vn:'Thế là có người liên tưởng đến',
   exList:[
     {zh:'碑刻、拓印技术被广泛运用，于是有人联想到：这些技术结合起来，不就能印出书来吗！',py:'Bēikè, tàyìn jìshù bèi guǎngfàn yùnyòng, yúshì yǒu rén liánxiǎng dào: zhèxiē jìshù jiéhé qilai, bú jiù néng yìnchū shū lai ma!',vn:'Kỹ thuật khắc bia, in dập được dùng rộng rãi, thế là có người nghĩ ra: kết hợp các kỹ thuật này lại chẳng phải in được sách sao!'},
     {zh:'看到此情此景，我的脑海里联想起许多往事。',py:'Kàndào cǐ qíng cǐ jǐng, wǒ de nǎohǎi li liánxiǎng qǐ xǔduō wǎngshì.',vn:'Nhìn cảnh này tình này, trong đầu tôi liên tưởng đến bao chuyện cũ.'},
     {zh:'一看到红灯笼，人们就会联想到春节。',py:'Yí kàndào hóng dēnglong, rénmen jiù huì liánxiǎng dào Chūnjié.',vn:'Vừa thấy đèn lồng đỏ, người ta sẽ nghĩ ngay đến Tết.'}
   ],
   colloFull:[
     {zh:'联想到',py:'liánxiǎng dào',vn:'liên tưởng đến'},
     {zh:'让人联想起',py:'ràng rén liánxiǎng qǐ',vn:'khiến người ta nhớ đến'},
     {zh:'由此联想到',py:'yóu cǐ liánxiǎng dào',vn:'từ đó liên tưởng đến'},
     {zh:'丰富的联想',py:'fēngfù de liánxiǎng',vn:'sự liên tưởng phong phú'},
     {zh:'引起联想',py:'yǐnqǐ liánxiǎng',vn:'gợi liên tưởng'}
   ],
   patterns:[
     {s:'一 + V + A，就 + 联想到 + B',m:'Hễ … A là nghĩ ngay đến B'},
     {s:'由 A + 联想到 + B',m:'Từ A liên tưởng đến B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùi hương này khiến tôi nhớ đến căn bếp của bà ngoại.',answer:'这个味道让我联想起了外婆的厨房。',answerPy:'Zhège wèidao ràng wǒ liánxiǎng qǐle wàipó de chúfáng.',
      note:'让 + người + V (câu kiêm ngữ, ôn HSK 4).',pair:'让 + 人 + V'},
     {promptLang:'vi',prompt:'Vừa nghe bài hát này, tôi liền nghĩ đến những ngày cấp ba.',answer:'一听到这首歌，我就联想到了高中的日子。',answerPy:'Yì tīngdào zhè shǒu gē, wǒ jiù liánxiǎng dàole gāozhōng de rìzi.',
      note:'一……就…… (hễ … là, ôn HSK 4).',pair:'一……就……'}
   ]},

  {n:13,zh:'涂抹',py:'túmǒ',pos:'Động từ',vn:'tô, quét lên, bôi lên; bôi quệt',hv:'đồ mạt',em:'🖌️',lesson:1,
   explain:['Quét, bôi (sơn, mực, thuốc, kem…) lên bề mặt: 在版上涂抹上墨, 涂抹药膏.','Nghĩa phụ: vẽ / viết nguệch ngoạc, tuỳ tiện: 随便涂抹 (练习3: 从开始的随便涂抹 = từ lúc đầu vẽ nguệch ngoạc).'],
   usage:'在 + N + 上 + 涂抹 + 墨 / 颜料 / 药; 随便 / 乱 + 涂抹; 涂抹均匀.',
   collo:['涂抹上墨','随便涂抹','涂抹药膏','涂抹均匀'],
   ex_zh:'在版上涂抹上墨',ex_py:'zài bǎn shang túmǒ shang mò',ex_vn:'Quét mực lên bản khắc',
   exList:[
     {zh:'把书的内容刻在版上，在版上涂抹上墨，再把纸铺到上面。',py:'Bǎ shū de nèiróng kè zài bǎn shang, zài bǎn shang túmǒ shang mò, zài bǎ zhǐ pū dào shàngmian.',vn:'Khắc nội dung sách lên bản, quét mực lên bản rồi trải giấy lên trên.'},
     {zh:'儿子从开始的随便涂抹，到现在能画出神态逼真的动物。',py:'Érzi cóng kāishǐ de suíbiàn túmǒ, dào xiànzài néng huàchū shéntài bīzhēn de dòngwù.',vn:'Con trai từ lúc đầu vẽ nguệch ngoạc, đến nay đã vẽ được những con vật thần thái sống động.'},
     {zh:'这种药膏每天涂抹两次，一周左右就能好。',py:'Zhè zhǒng yàogāo měi tiān túmǒ liǎng cì, yì zhōu zuǒyòu jiù néng hǎo.',vn:'Loại thuốc mỡ này mỗi ngày bôi hai lần, khoảng một tuần là khỏi.'}
   ],
   colloFull:[
     {zh:'涂抹上墨',py:'túmǒ shang mò',vn:'quét mực lên'},
     {zh:'随便涂抹',py:'suíbiàn túmǒ',vn:'vẽ nguệch ngoạc'},
     {zh:'涂抹药膏',py:'túmǒ yàogāo',vn:'bôi thuốc mỡ'},
     {zh:'涂抹均匀',py:'túmǒ jūnyún',vn:'bôi đều'},
     {zh:'在墙上乱涂抹',py:'zài qiáng shang luàn túmǒ',vn:'bôi vẽ bừa lên tường'}
   ],
   patterns:[
     {s:'在 + N + 上 + 涂抹（上）+ 墨 / 颜料',m:'Quét, bôi thứ gì lên bề mặt'},
     {s:'随便 / 乱 + 涂抹',m:'Vẽ, bôi nguệch ngoạc, bừa bãi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng để trẻ con vẽ bậy lên tường, nếu không sẽ rất khó lau sạch.',answer:'别让孩子在墙上乱涂抹，否则很难擦干净。',answerPy:'Bié ràng háizi zài qiáng shang luàn túmǒ, fǒuzé hěn nán cā gānjìng.',
      note:'否则 = nếu không thì (ôn HSK 5); 擦干净 bổ ngữ kết quả.',pair:'……，否则……'},
     {promptLang:'vi',prompt:'Kem chống nắng phải bôi đều mới có tác dụng.',answer:'防晒霜要涂抹均匀才有效果。',answerPy:'Fángshàishuāng yào túmǒ jūnyún cái yǒu xiàoguǒ.',
      note:'……才…… (điều kiện, ôn HSK 4).',pair:'……才……'}
   ]},

  {n:14,zh:'终究',py:'zhōngjiū',pos:'Phó từ',vn:'chung quy, xét cho cùng, cuối cùng (rồi cũng)',hv:'chung cứu',em:'🔚',lesson:1,
   explain:['① Nhấn mạnh BẢN CHẤT sự vật không thay đổi, sự thật không thể phủ nhận (≈ 毕竟): 单色印品终究不能满足人们的审美需求; 猫终究是动物.','② Đứng trước động từ năng nguyện (会 / 要 / 能…), biểu thị kết quả dự đoán / mong đợi CHẮC CHẮN sẽ xảy ra, dù thế nào cũng vậy (≈ 最后一定): 正义的事业终究会取得胜利. Đây là điểm ngữ pháp 1 của bài.'],
   usage:'S + 终究 + 是 / 不 / 会 / 要 + ……; 终究是 + N (bản chất); 终究会 + V (kết quả tất yếu).',
   collo:['终究是动物','终究会变老','终究不是好事','终究要靠自己'],
   ex_zh:'单色印品终究不能满足人们的审美需求',ex_py:'dānsè yìnpǐn zhōngjiū bù néng mǎnzú rénmen de shěnměi xūqiú',ex_vn:'Bản in một màu xét cho cùng không thể đáp ứng nhu cầu thẩm mỹ của con người',
   exList:[
     {zh:'单色印品终究不能满足人们的审美需求，之后就有了彩色套印技术。',py:'Dānsè yìnpǐn zhōngjiū bù néng mǎnzú rénmen de shěnměi xūqiú, zhīhòu jiù yǒule cǎisè tàoyìn jìshù.',vn:'Bản in một màu xét cho cùng không thể đáp ứng nhu cầu thẩm mỹ của con người, sau đó liền có kỹ thuật in chồng màu.'},
     {zh:'借住在朋友这儿终究不是长久之计，还是应该尽快租个房子。',py:'Jièzhù zài péngyou zhèr zhōngjiū bú shì chángjiǔ zhī jì, háishi yīnggāi jǐnkuài zū ge fángzi.',vn:'Ở nhờ chỗ bạn chung quy không phải kế lâu dài, vẫn nên sớm thuê một căn nhà.'},
     {zh:'如果一个人一直不愿意变老，那他就永远不会幸福，因为他终究会变老的。',py:'Rúguǒ yí ge rén yìzhí bú yuànyì biàn lǎo, nà tā jiù yǒngyuǎn bú huì xìngfú, yīnwèi tā zhōngjiū huì biàn lǎo de.',vn:'Nếu một người cứ mãi không chịu già đi thì sẽ không bao giờ hạnh phúc, vì rốt cuộc anh ta cũng sẽ già.'}
   ],
   colloFull:[
     {zh:'终究是动物',py:'zhōngjiū shì dòngwù',vn:'xét cho cùng vẫn là động vật'},
     {zh:'终究会变老',py:'zhōngjiū huì biàn lǎo',vn:'rốt cuộc rồi cũng sẽ già'},
     {zh:'终究不是好事',py:'zhōngjiū bú shì hǎoshì',vn:'chung quy không phải chuyện tốt'},
     {zh:'终究要靠自己',py:'zhōngjiū yào kào zìjǐ',vn:'cuối cùng vẫn phải dựa vào mình'},
     {zh:'终究会取得胜利',py:'zhōngjiū huì qǔdé shènglì',vn:'cuối cùng nhất định sẽ thắng lợi'}
   ],
   patterns:[
     {s:'S + 终究 + 是 / 不是 + N',m:'Xét cho cùng S vẫn là / không phải … (bản chất không đổi)'},
     {s:'S + 终究 + 会 / 要 + V',m:'Cuối cùng S nhất định sẽ … (kết quả tất yếu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù bây giờ cậu có trốn tránh thế nào, vấn đề này rốt cuộc vẫn phải giải quyết.',answer:'不管你现在怎么回避，这个问题终究是要解决的。',answerPy:'Bùguǎn nǐ xiànzài zěnme huíbì, zhège wèntí zhōngjiū shì yào jiějué de.',
      note:'不管……都 / 也…… (ôn HSK 4); 是……的 nhấn mạnh; 回避 — HSK 6 bài 29.',pair:'不管……'},
     {promptLang:'vi',prompt:'Nó tuy thông minh, nhưng xét cho cùng vẫn là trẻ con, đừng đòi hỏi quá nhiều.',answer:'他虽然聪明，但终究是个孩子，别对他要求太高。',answerPy:'Tā suīrán cōngming, dàn zhōngjiū shì ge háizi, bié duì tā yāoqiú tài gāo.',
      note:'虽然……但…… + 终究是 (bản chất không đổi); 对……要求 (ôn HSK 4).',pair:'虽然……但……'}
   ]},

  {n:15,zh:'烟花爆竹',py:'yānhuā bàozhú',pos:'Danh từ',vn:'pháo (pháo hoa và pháo nổ)',hv:'yên hoa bộc trúc',em:'🎆',lesson:1,
   explain:['Gọi chung pháo hoa (烟花) và pháo nổ (爆竹 = 鞭炮). Là vật không thể thiếu của Tết Nguyên đán truyền thống Trung Quốc.','Hiện nay nhiều thành phố 禁放烟花爆竹 (cấm đốt pháo) vì an toàn và ô nhiễm; ngữ cảnh chính thức dùng 烟花爆竹, khẩu ngữ nói 放鞭炮, 放炮.'],
   usage:'放 / 燃放 + 烟花爆竹; 禁止燃放烟花爆竹; 没有烟花爆竹就不叫过年.',
   collo:['燃放烟花爆竹','没有烟花爆竹','禁放烟花爆竹','烟花爆竹声'],
   ex_zh:'没有烟花爆竹就不叫过年',ex_py:'méiyǒu yānhuā bàozhú jiù bú jiào guònián',ex_vn:'Không có pháo thì chẳng gọi là ăn Tết',
   exList:[
     {zh:'仿佛没有年画，没有烟花爆竹，没有春联就不叫过年。',py:'Fǎngfú méiyǒu niánhuà, méiyǒu yānhuā bàozhú, méiyǒu chūnlián jiù bú jiào guònián.',vn:'Dường như không có tranh Tết, không có pháo, không có câu đối thì chẳng gọi là ăn Tết.'},
     {zh:'为了安全和环保，很多城市都禁止燃放烟花爆竹。',py:'Wèile ānquán hé huánbǎo, hěn duō chéngshì dōu jìnzhǐ ránfàng yānhuā bàozhú.',vn:'Vì an toàn và bảo vệ môi trường, nhiều thành phố đều cấm đốt pháo.'},
     {zh:'除夕夜十二点一到，到处都是烟花爆竹声。',py:'Chúxī yè shí\'èr diǎn yí dào, dàochù dōu shì yānhuā bàozhú shēng.',vn:'Đêm giao thừa vừa đến mười hai giờ, khắp nơi đều là tiếng pháo.'}
   ],
   colloFull:[
     {zh:'燃放烟花爆竹',py:'ránfàng yānhuā bàozhú',vn:'đốt pháo'},
     {zh:'没有烟花爆竹',py:'méiyǒu yānhuā bàozhú',vn:'không có pháo'},
     {zh:'禁放烟花爆竹',py:'jìnfàng yānhuā bàozhú',vn:'cấm đốt pháo'},
     {zh:'烟花爆竹声',py:'yānhuā bàozhú shēng',vn:'tiếng pháo'},
     {zh:'购买烟花爆竹',py:'gòumǎi yānhuā bàozhú',vn:'mua pháo'}
   ],
   patterns:[
     {s:'禁止 + 燃放烟花爆竹',m:'Cấm đốt pháo (văn bản, biển báo)'},
     {s:'没有 A，没有 B，就不叫……',m:'Thiếu A, thiếu B thì không còn là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thành phố cấm đốt pháo, nhưng ở quê vẫn có thể nghe thấy tiếng pháo.',answer:'虽然城里禁放烟花爆竹，但在农村还能听到烟花爆竹声。',answerPy:'Suīrán chéng li jìnfàng yānhuā bàozhú, dàn zài nóngcūn hái néng tīngdào yānhuā bàozhú shēng.',
      note:'虽然……但…… (ôn HSK 4).',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Đốt pháo phải chú ý an toàn, kẻo làm bị thương người khác.',answer:'燃放烟花爆竹要注意安全，以免伤到别人。',answerPy:'Ránfàng yānhuā bàozhú yào zhùyì ānquán, yǐmiǎn shāngdào biérén.',
      note:'以免 = để tránh, kẻo (HSK 6 bài 21).',pair:'……，以免……'}
   ]},

  {n:16,zh:'寄托',py:'jìtuō',pos:'Động từ',vn:'gửi gắm, đặt (hy vọng, tình cảm) vào',hv:'ký thác',em:'💌',lesson:1,
   explain:['Gửi gắm hy vọng, tình cảm, ước nguyện vào người hoặc vật nào đó: 把希望寄托在孩子身上, 寄托着美好愿望, 寄托思念.','Cũng làm danh từ: 精神寄托 (chỗ dựa tinh thần). Nghĩa gốc "gửi nhờ (người, vật) ở chỗ người khác" nay ít dùng.'],
   usage:'把 + 希望 / 感情 + 寄托在 + ……上; ……寄托着 + 愿望 / 思念 / 感情; 精神寄托.',
   collo:['寄托着美好愿望','把希望寄托在','寄托思念','精神寄托'],
   ex_zh:'寄托着百姓美好愿望的年画',ex_py:'jìtuōzhe bǎixìng měihǎo yuànwàng de niánhuà',ex_vn:'Tranh Tết gửi gắm ước nguyện tốt đẹp của người dân',
   exList:[
     {zh:'寄托着百姓美好愿望的年画，也为春节增添了浓浓的年味。',py:'Jìtuōzhe bǎixìng měihǎo yuànwàng de niánhuà, yě wèi Chūnjié zēngtiānle nóngnóng de niánwèir.',vn:'Tranh Tết gửi gắm ước nguyện tốt đẹp của người dân cũng làm cho Tết thêm đậm không khí.'},
     {zh:'父母把全部希望都寄托在孩子身上。',py:'Fùmǔ bǎ quánbù xīwàng dōu jìtuō zài háizi shēnshang.',vn:'Cha mẹ đặt toàn bộ hy vọng vào con cái.'},
     {zh:'对奶奶来说，养花是她退休后的精神寄托。',py:'Duì nǎinai lái shuō, yǎng huā shì tā tuìxiū hòu de jīngshén jìtuō.',vn:'Với bà, trồng hoa là chỗ dựa tinh thần sau khi nghỉ hưu.'}
   ],
   colloFull:[
     {zh:'寄托着美好愿望',py:'jìtuōzhe měihǎo yuànwàng',vn:'gửi gắm ước nguyện tốt đẹp'},
     {zh:'把希望寄托在',py:'bǎ xīwàng jìtuō zài',vn:'đặt hy vọng vào'},
     {zh:'寄托思念',py:'jìtuō sīniàn',vn:'gửi gắm nỗi nhớ'},
     {zh:'精神寄托',py:'jīngshén jìtuō',vn:'chỗ dựa tinh thần'},
     {zh:'寄托感情',py:'jìtuō gǎnqíng',vn:'gửi gắm tình cảm'}
   ],
   patterns:[
     {s:'把 + 希望 / 感情 + 寄托在 + 人 / 物 + 上',m:'Đặt hy vọng / tình cảm vào ai, cái gì'},
     {s:'A + 寄托着 + B',m:'A chứa đựng, gửi gắm B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy gửi gắm nỗi nhớ quê hương vào từng bức tranh.',answer:'他把对故乡的思念寄托在每一幅画里。',answerPy:'Tā bǎ duì gùxiāng de sīniàn jìtuō zài měi yì fú huà li.',
      note:'Câu 把 + V在 + nơi chốn (ôn HSK 4); 对……的思念.',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Đừng đặt hết hy vọng vào người khác, cuối cùng vẫn phải dựa vào bản thân.',answer:'别把希望都寄托在别人身上，终究还是要靠自己。',answerPy:'Bié bǎ xīwàng dōu jìtuō zài biérén shēnshang, zhōngjiū háishi yào kào zìjǐ.',
      note:'别 + 把…… (câu cầu khiến phủ định); 终究要…… (điểm ngữ pháp 1).',pair:'别把……'}
   ]},

  {n:17,zh:'增添',py:'zēngtiān',pos:'Động từ',vn:'tăng thêm, thêm',hv:'tăng thiêm',em:'➕',lesson:1,
   explain:['Thêm vào cái vốn có (thường là thứ trừu tượng, tích cực: 光彩, 乐趣, 气氛, 年味; hoặc người, của trong nhà): 为春节增添年味, 增添了不少口人.','Khác 增加 (tăng số lượng, trung tính, dùng rộng): 增添 văn viết hơn, hay đi với 为 / 给 + đối tượng + 增添 + điều tốt.'],
   usage:'为 / 给 + N + 增添 + 光彩 / 乐趣 / 气氛 / 年味; 增添 + 人口 / 设备; 增添麻烦.',
   collo:['增添年味','增添乐趣','增添光彩','增添麻烦'],
   ex_zh:'为春节增添了浓浓的年味',ex_py:'wèi Chūnjié zēngtiānle nóngnóng de niánwèir',ex_vn:'Làm Tết thêm đậm đà hương vị',
   exList:[
     {zh:'年画也为春节增添了浓浓的年味。',py:'Niánhuà yě wèi Chūnjié zēngtiānle nóngnóng de niánwèir.',vn:'Tranh Tết cũng làm cho Tết thêm đậm đà không khí.'},
     {zh:'随着孩子的陆续出生，家里增添了不少口人。',py:'Suízhe háizi de lùxù chūshēng, jiā li zēngtiānle bù shǎo kǒu rén.',vn:'Cùng với việc bọn trẻ lần lượt ra đời, nhà thêm không ít người.'},
     {zh:'对不起，这次给您增添麻烦了。',py:'Duìbuqǐ, zhè cì gěi nín zēngtiān máfan le.',vn:'Xin lỗi, lần này làm phiền anh thêm rồi.'}
   ],
   colloFull:[
     {zh:'增添年味',py:'zēngtiān niánwèir',vn:'thêm không khí Tết'},
     {zh:'增添乐趣',py:'zēngtiān lèqù',vn:'thêm niềm vui'},
     {zh:'增添光彩',py:'zēngtiān guāngcǎi',vn:'thêm rực rỡ, thêm vẻ vang'},
     {zh:'增添麻烦',py:'zēngtiān máfan',vn:'thêm phiền phức'},
     {zh:'增添了不少口人',py:'zēngtiānle bù shǎo kǒu rén',vn:'thêm không ít người'}
   ],
   patterns:[
     {s:'为 / 给 + N + 增添（了）+ ……',m:'Làm cho N thêm …'},
     {s:'A + 为 + B + 增添了 + 不少 + 乐趣 / 光彩',m:'A mang lại cho B nhiều niềm vui / vẻ đẹp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chú mèo con này đã mang lại cho gia đình chúng tôi rất nhiều niềm vui.',answer:'这只小猫给我们家增添了很多乐趣。',answerPy:'Zhè zhī xiǎo māo gěi wǒmen jiā zēngtiānle hěn duō lèqù.',
      note:'给 + đối tượng + V (giới từ 给, ôn HSK 3–4).',pair:'给 + 人 + V'},
     {promptLang:'vi',prompt:'Nếu dán thêm vài câu đối, căn phòng sẽ càng có không khí Tết.',answer:'要是再贴几副春联，房间就会增添更多年味。',answerPy:'Yàoshi zài tiē jǐ fù chūnlián, fángjiān jiù huì zēngtiān gèng duō niánwèir.',
      note:'要是……就…… (giả thiết, ôn HSK 4).',pair:'要是……就……'}
   ]},

  {n:18,zh:'丰收',py:'fēngshōu',pos:'Động từ',vn:'được mùa, bội thu',hv:'phong thu',em:'🌾',lesson:1,
   explain:['Thu hoạch dồi dào (nông nghiệp): 粮食丰收, 大丰收, 期盼丰收. Trái nghĩa: 歉收 (mất mùa).','Nghĩa bóng: đạt thành quả lớn — 双丰收 (thu hoạch đôi: vừa … vừa …), 获得丰收.'],
   usage:'（粮食 / 水果）+ 丰收; 获得 / 迎来 / 期盼 + 丰收; 大丰收; 丰收的季节.',
   collo:['期盼丰收','连年大丰收','丰收的季节','双丰收'],
   ex_zh:'期盼丰收',ex_py:'qīpàn fēngshōu',ex_vn:'Mong mỏi được mùa',
   exList:[
     {zh:'年画的内容从威武的门神，扩展到期盼丰收、恭喜发财的吉庆画。',py:'Niánhuà de nèiróng cóng wēiwǔ de ménshén, kuòzhǎn dào qīpàn fēngshōu, gōngxǐ fā cái de jíqìng huà.',vn:'Nội dung tranh Tết từ những vị môn thần oai vũ mở rộng sang tranh chúc mừng mong được mùa, cung hỷ phát tài.'},
     {zh:'今年雨水充足，村里的水稻又是大丰收。',py:'Jīnnián yǔshuǐ chōngzú, cūn li de shuǐdào yòu shì dà fēngshōu.',vn:'Năm nay mưa thuận, lúa trong làng lại bội thu.'},
     {zh:'这次比赛，我们队获得了成绩和友谊双丰收。',py:'Zhè cì bǐsài, wǒmen duì huòdéle chéngjì hé yǒuyì shuāng fēngshōu.',vn:'Trong cuộc thi lần này, đội chúng tôi thu hoạch cả thành tích lẫn tình bạn.'}
   ],
   colloFull:[
     {zh:'期盼丰收',py:'qīpàn fēngshōu',vn:'mong được mùa'},
     {zh:'连年大丰收',py:'liánnián dà fēngshōu',vn:'bội thu liền mấy năm'},
     {zh:'丰收的季节',py:'fēngshōu de jìjié',vn:'mùa bội thu'},
     {zh:'双丰收',py:'shuāng fēngshōu',vn:'thu hoạch đôi'},
     {zh:'粮食丰收',py:'liángshi fēngshōu',vn:'lương thực được mùa'}
   ],
   patterns:[
     {s:'（作物）+ 又是 / 获得 + 大丰收',m:'(Cây trồng) lại bội thu'},
     {s:'A 和 B + 双丰收',m:'Thu hoạch cả A lẫn B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ khoa học kỹ thuật, vùng này năm nào cũng được mùa.',answer:'由于科技的帮助，这个地区每年都丰收。',answerPy:'Yóuyú kējì de bāngzhù, zhège dìqū měi nián dōu fēngshōu.',
      note:'由于…… nêu nguyên nhân (ôn HSK 4); 每……都…….',pair:'由于……'},
     {promptLang:'vi',prompt:'Nông dân vừa đón một vụ bội thu, ai nấy đều vui mừng khôn xiết.',answer:'农民们刚迎来一个大丰收，一个个都高兴极了。',answerPy:'Nóngmínmen gāng yínglái yí ge dà fēngshōu, yí gègè dōu gāoxìng jí le.',
      note:'一个个 = ai nấy (lượng từ lặp); Adj + 极了 (ôn HSK 3–4).',pair:'Adj + 极了'}
   ]},

  {n:19,zh:'发财',py:'fā cái',pos:'Động từ (li hợp)',vn:'phát tài, kiếm được nhiều tiền',hv:'phát tài',em:'💰',lesson:1,
   explain:['Làm ra, có được nhiều tiền của. Động từ li hợp: 发了财, 发大财, 发不了财.','Lời chúc Tết quen thuộc: 恭喜发财 (cung hỷ phát tài). Tiếng Việt cũng có "phát tài".'],
   usage:'恭喜发财; 发（了）大财; 靠 + …… + 发财; 发财致富.',
   collo:['恭喜发财','发大财','发财致富','想发财'],
   ex_zh:'恭喜发财',ex_py:'gōngxǐ fā cái',ex_vn:'Cung hỷ phát tài',
   exList:[
     {zh:'年画的内容有期盼丰收、恭喜发财、连年有余的吉庆画。',py:'Niánhuà de nèiróng yǒu qīpàn fēngshōu, gōngxǐ fā cái, liánnián yǒu yú de jíqìng huà.',vn:'Nội dung tranh Tết có tranh chúc mừng mong được mùa, cung hỷ phát tài, năm nào cũng dư dả.'},
     {zh:'他做生意发了大财，回老家修了一条路。',py:'Tā zuò shēngyi fāle dà cái, huí lǎojiā xiūle yì tiáo lù.',vn:'Anh ấy làm ăn phát tài lớn, về quê làm một con đường.'},
     {zh:'想靠买彩票发财，恐怕不太现实。',py:'Xiǎng kào mǎi cǎipiào fā cái, kǒngpà bú tài xiànshí.',vn:'Muốn dựa vào mua xổ số mà phát tài e là không thực tế lắm.'}
   ],
   colloFull:[
     {zh:'恭喜发财',py:'gōngxǐ fā cái',vn:'cung hỷ phát tài'},
     {zh:'发大财',py:'fā dà cái',vn:'phát tài lớn'},
     {zh:'发财致富',py:'fā cái zhìfù',vn:'làm giàu'},
     {zh:'想发财',py:'xiǎng fā cái',vn:'muốn phát tài'},
     {zh:'发不了财',py:'fā bu liǎo cái',vn:'không giàu lên được'}
   ],
   patterns:[
     {s:'靠 + …… + 发财',m:'Nhờ … mà phát tài'},
     {s:'发了 / 发不了 + 财',m:'Li hợp: chen 了 / bổ ngữ vào giữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta chỉ nghĩ đến chuyện phát tài, chẳng quan tâm gì đến gia đình.',answer:'他一心只想发财，对家里的事一点儿也不关心。',answerPy:'Tā yìxīn zhǐ xiǎng fā cái, duì jiā li de shì yìdiǎnr yě bù guānxīn.',
      note:'一点儿也不…… (phủ định tuyệt đối, ôn HSK 4).',pair:'一点儿也不……'},
     {promptLang:'vi',prompt:'Muốn phát tài thì phải chăm chỉ, chứ không thể trông vào may rủi.',answer:'要想发财就得勤劳，而不能靠运气。',answerPy:'Yào xiǎng fā cái jiù děi qínláo, ér bù néng kào yùnqi.',
      note:'要想……就得…… (ôn HSK 4–5); 而 nối ý đối lập.',pair:'要想……就得……'}
   ]},

  {n:20,zh:'连年',py:'liánnián',pos:'Động từ',vn:'liên tiếp nhiều năm, nhiều năm liền',hv:'liên niên',em:'📅',lesson:1,
   explain:['Liên tiếp nhiều năm (接连许多年). Chỉ dùng cho thời gian tính bằng NĂM, đứng trước động từ / danh từ: 连年丰收, 连年亏损, 连年战乱. Không mang từ chỉ số lượng phía sau (không nói *连年三年).','Phân biệt với 连续 (词语辨析 của bài): 连续 dùng cho mọi đơn vị thời gian và mang được số lượng: 连续三天. Thành ngữ chúc Tết: 连年有余 (năm nào cũng dư dả — "余" đồng âm "鱼").'],
   usage:'连年 + 丰收 / 亏损 / 增长 / 干旱 / 战乱; 连年有余.',
   collo:['连年有余','连年丰收','连年亏损','连年战乱'],
   ex_zh:'连年有余的吉庆画',ex_py:'liánnián yǒu yú de jíqìng huà',ex_vn:'Tranh chúc mừng "năm nào cũng dư dả"',
   exList:[
     {zh:'年画中常有胖娃娃抱着大鲤鱼的图案，意思是连年有余。',py:'Niánhuà zhōng cháng yǒu pàng wáwa bàozhe dà lǐyú de tú\'àn, yìsi shì liánnián yǒu yú.',vn:'Trong tranh Tết thường có hình em bé bụ bẫm ôm cá chép lớn, ý là năm nào cũng dư dả.'},
     {zh:'最近几年来，由于管理混乱、经营不善，导致连年亏损。',py:'Zuìjìn jǐ nián lái, yóuyú guǎnlǐ hùnluàn, jīngyíng bú shàn, dǎozhì liánnián kuīsǔn.',vn:'Mấy năm gần đây, do quản lý lộn xộn, kinh doanh kém cỏi nên thua lỗ liên tiếp nhiều năm.'},
     {zh:'人民生活在社会动荡和连年战乱中，苦不堪言。',py:'Rénmín shēnghuó zài shèhuì dòngdàng hé liánnián zhànluàn zhōng, kǔ bù kān yán.',vn:'Nhân dân sống trong xã hội bất ổn và chiến loạn nhiều năm liền, khổ không sao kể xiết.'}
   ],
   colloFull:[
     {zh:'连年有余',py:'liánnián yǒu yú',vn:'năm nào cũng dư dả'},
     {zh:'连年丰收',py:'liánnián fēngshōu',vn:'được mùa nhiều năm liền'},
     {zh:'连年亏损',py:'liánnián kuīsǔn',vn:'thua lỗ nhiều năm liền'},
     {zh:'连年战乱',py:'liánnián zhànluàn',vn:'chiến loạn liên miên'},
     {zh:'连年增长',py:'liánnián zēngzhǎng',vn:'tăng trưởng nhiều năm liền'}
   ],
   patterns:[
     {s:'连年 + V / N（丰收 / 亏损 / 干旱）',m:'Nhiều năm liền …'},
     {s:'连年 ≠ 连续 + 数量：连续三年（✓）　连年三年（×）',m:'连年 không mang số lượng phía sau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà máy này thua lỗ nhiều năm liền, cuối cùng đành phải đóng cửa.',answer:'这家工厂连年亏损，最后只好关门了。',answerPy:'Zhè jiā gōngchǎng liánnián kuīsǔn, zuìhòu zhǐhǎo guān mén le.',
      note:'只好 = đành phải (ôn HSK 4).',pair:'只好……'},
     {promptLang:'vi',prompt:'Nhờ áp dụng kỹ thuật mới, làng này được mùa nhiều năm liền.',answer:'因为采用了新技术，这个村子连年丰收。',answerPy:'Yīnwèi cǎiyòngle xīn jìshù, zhège cūnzi liánnián fēngshōu.',
      note:'因为……，…… (nguyên nhân – kết quả, ôn HSK 3–4).',pair:'因为……'}
   ]},

  {n:21,zh:'寓言',py:'yùyán',pos:'Danh từ',vn:'truyện ngụ ngôn',hv:'ngụ ngôn',em:'🦊',lesson:1,
   explain:['Truyện ngắn dùng câu chuyện giả tưởng (thường về con vật) để gửi gắm một bài học, một đạo lý: 寓言故事, 伊索寓言 (ngụ ngôn Aesop).','Nhiều thành ngữ Trung Quốc bắt nguồn từ ngụ ngôn: 画蛇添足 (HSK 6 bài 29), 守株待兔, 自相矛盾.'],
   usage:'寓言故事; 一则 / 一个 + 寓言; 寓言 + 告诉我们 + 道理.',
   collo:['寓言和神话','寓言故事','一则寓言','伊索寓言'],
   ex_zh:'民间笑话、寓言和神话',ex_py:'mínjiān xiàohua, yùyán hé shénhuà',ex_vn:'Chuyện cười dân gian, ngụ ngôn và thần thoại',
   exList:[
     {zh:'年画的内容再到历史故事、戏曲人物、民间笑话、寓言和神话，无所不包。',py:'Niánhuà de nèiróng zài dào lìshǐ gùshi, xìqǔ rénwù, mínjiān xiàohua, yùyán hé shénhuà, wú suǒ bù bāo.',vn:'Nội dung tranh Tết còn mở đến chuyện lịch sử, nhân vật hí khúc, chuyện cười dân gian, ngụ ngôn và thần thoại, không gì không có.'},
     {zh:'“画蛇添足”这个成语就来自一则古代寓言。',py:'“Huàshé-tiānzú” zhège chéngyǔ jiù láizì yì zé gǔdài yùyán.',vn:'Thành ngữ "vẽ rắn thêm chân" bắt nguồn từ một truyện ngụ ngôn cổ.'},
     {zh:'这个寓言故事告诉我们：做事不能只看眼前的利益。',py:'Zhège yùyán gùshi gàosu wǒmen: zuò shì bù néng zhǐ kàn yǎnqián de lìyì.',vn:'Truyện ngụ ngôn này cho ta biết: làm việc không thể chỉ nhìn lợi ích trước mắt.'}
   ],
   colloFull:[
     {zh:'寓言和神话',py:'yùyán hé shénhuà',vn:'ngụ ngôn và thần thoại'},
     {zh:'寓言故事',py:'yùyán gùshi',vn:'truyện ngụ ngôn'},
     {zh:'一则寓言',py:'yì zé yùyán',vn:'một truyện ngụ ngôn'},
     {zh:'伊索寓言',py:'Yīsuǒ yùyán',vn:'ngụ ngôn Aesop'},
     {zh:'古代寓言',py:'gǔdài yùyán',vn:'ngụ ngôn cổ'}
   ],
   patterns:[
     {s:'这个寓言（故事）告诉我们：……',m:'Truyện ngụ ngôn này cho ta biết …'},
     {s:'成语 + 来自 + 一则寓言',m:'Thành ngữ bắt nguồn từ một truyện ngụ ngôn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ, mẹ thường kể cho tôi nghe truyện ngụ ngôn trước khi ngủ.',answer:'小时候，妈妈常常在睡觉前给我讲寓言故事。',answerPy:'Xiǎoshíhou, māma chángcháng zài shuìjiào qián gěi wǒ jiǎng yùyán gùshi.',
      note:'在……前 (thời gian); 给 + người + 讲 (ôn HSK 3–4).',pair:'给 + 人 + 讲'},
     {promptLang:'vi',prompt:'Tuy truyện ngụ ngôn rất ngắn nhưng đạo lý chứa trong đó lại rất sâu sắc.',answer:'寓言虽然很短，但其中的道理却很深刻。',answerPy:'Yùyán suīrán hěn duǎn, dàn qízhōng de dàolǐ què hěn shēnkè.',
      note:'虽然……但……却…… (nhượng bộ, ôn HSK 4–5).',pair:'虽然……却……'}
   ]},

  {n:22,zh:'信仰',py:'xìnyǎng',pos:'Danh từ',vn:'tín ngưỡng, niềm tin',hv:'tín ngưỡng',em:'🙏',lesson:1,
   explain:['Sự tin tưởng, tôn sùng tuyệt đối vào một tôn giáo, học thuyết, chủ nghĩa: 宗教信仰, 民间信仰, 信仰传承.','Cũng làm động từ: 信仰佛教 (theo đạo Phật). Phân biệt với 信念 (niềm tin vào điều mình theo đuổi, từ số 49 của bài) — 信仰 rộng, thường gắn tôn giáo / chủ nghĩa.'],
   usage:'宗教 / 民间 / 政治 + 信仰; 信仰 + 传承 / 自由; 有 / 失去 + 信仰; 信仰 + 佛教.',
   collo:['信仰传承','宗教信仰','民间信仰','信仰自由'],
   ex_zh:'信仰传承的载体与工具',ex_py:'xìnyǎng chuánchéng de zàitǐ yǔ gōngjù',ex_vn:'Phương tiện và công cụ truyền thừa tín ngưỡng',
   exList:[
     {zh:'年画成了文化交流、道德教育、信仰传承的载体与工具。',py:'Niánhuà chéngle wénhuà jiāoliú, dàodé jiàoyù, xìnyǎng chuánchéng de zàitǐ yǔ gōngjù.',vn:'Tranh Tết đã trở thành phương tiện và công cụ để giao lưu văn hoá, giáo dục đạo đức, truyền thừa tín ngưỡng.'},
     {zh:'我们应该尊重每个人的宗教信仰。',py:'Wǒmen yīnggāi zūnzhòng měi ge rén de zōngjiào xìnyǎng.',vn:'Chúng ta nên tôn trọng tín ngưỡng tôn giáo của mỗi người.'},
     {zh:'拜灶神是一种古老的民间信仰。',py:'Bài zàoshén shì yì zhǒng gǔlǎo de mínjiān xìnyǎng.',vn:'Cúng ông Táo là một tín ngưỡng dân gian lâu đời.'}
   ],
   colloFull:[
     {zh:'信仰传承',py:'xìnyǎng chuánchéng',vn:'truyền thừa tín ngưỡng'},
     {zh:'宗教信仰',py:'zōngjiào xìnyǎng',vn:'tín ngưỡng tôn giáo'},
     {zh:'民间信仰',py:'mínjiān xìnyǎng',vn:'tín ngưỡng dân gian'},
     {zh:'信仰自由',py:'xìnyǎng zìyóu',vn:'tự do tín ngưỡng'},
     {zh:'失去信仰',py:'shīqù xìnyǎng',vn:'mất niềm tin'}
   ],
   patterns:[
     {s:'尊重 + ……的 + 信仰',m:'Tôn trọng tín ngưỡng của …'},
     {s:'……是一种（古老的）民间信仰',m:'… là một tín ngưỡng dân gian'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất kể có tín ngưỡng hay không, chúng ta đều nên tôn trọng lẫn nhau.',answer:'无论有没有信仰，我们都应该互相尊重。',answerPy:'Wúlùn yǒu méiyǒu xìnyǎng, wǒmen dōu yīnggāi hùxiāng zūnzhòng.',
      note:'无论 + dạng khẳng định–phủ định + 都 (ôn HSK 4–5).',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Người dân vùng này phần lớn theo đạo Phật.',answer:'这个地区的老百姓大多信仰佛教。',answerPy:'Zhège dìqū de lǎobǎixìng dàduō xìnyǎng Fójiào.',
      note:'大多 = phần lớn (phó từ, ôn HSK 5); 信仰 làm động từ.',pair:'大多……'}
   ]},

  {n:23,zh:'喜闻乐见',py:'xǐwén-lèjiàn',pos:'Thành ngữ',vn:'được yêu thích, thích nghe thích xem',hv:'hỉ văn lạc kiến',em:'😊',lesson:1,
   explain:['Nguyên nghĩa: vui khi nghe, thích khi thấy → (loại hình, tác phẩm) được mọi người, đặc biệt là quần chúng, yêu thích.','Chủ ngữ thường là 老百姓 / 群众 / 观众; hay làm định ngữ: 喜闻乐见的艺术形式. Không dùng cho một người cụ thể thích một món đồ (không nói *我喜闻乐见这件衣服).'],
   usage:'（老百姓 / 群众 / 观众）+ 喜闻乐见 + 的 + 艺术形式 / 节目 / 作品; 为……所喜闻乐见.',
   collo:['喜闻乐见的艺术形式','老百姓喜闻乐见','群众喜闻乐见的节目','为人们所喜闻乐见'],
   ex_zh:'老百姓喜闻乐见的文化艺术形式',ex_py:'lǎobǎixìng xǐwén-lèjiàn de wénhuà yìshù xíngshì',ex_vn:'Loại hình văn hoá nghệ thuật được bà con yêu thích',
   exList:[
     {zh:'年画是老百姓喜闻乐见的文化艺术形式。',py:'Niánhuà shì lǎobǎixìng xǐwén-lèjiàn de wénhuà yìshù xíngshì.',vn:'Tranh Tết là loại hình văn hoá nghệ thuật được bà con yêu thích.'},
     {zh:'相声是中国观众喜闻乐见的节目。',py:'Xiàngsheng shì Zhōngguó guānzhòng xǐwén-lèjiàn de jiémù.',vn:'Tấu hài là tiết mục được khán giả Trung Quốc ưa thích.'},
     {zh:'要把科学知识写成青少年喜闻乐见的故事，并不容易。',py:'Yào bǎ kēxué zhīshi xiěchéng qīngshàonián xǐwén-lèjiàn de gùshi, bìng bù róngyì.',vn:'Viết kiến thức khoa học thành những câu chuyện thanh thiếu niên thích đọc, không hề dễ.'}
   ],
   colloFull:[
     {zh:'喜闻乐见的艺术形式',py:'xǐwén-lèjiàn de yìshù xíngshì',vn:'loại hình nghệ thuật được yêu thích'},
     {zh:'老百姓喜闻乐见',py:'lǎobǎixìng xǐwén-lèjiàn',vn:'bà con ưa thích'},
     {zh:'群众喜闻乐见的节目',py:'qúnzhòng xǐwén-lèjiàn de jiémù',vn:'tiết mục quần chúng ưa thích'},
     {zh:'为人们所喜闻乐见',py:'wéi rénmen suǒ xǐwén-lèjiàn',vn:'được mọi người yêu thích'},
     {zh:'喜闻乐见的作品',py:'xǐwén-lèjiàn de zuòpǐn',vn:'tác phẩm được ưa chuộng'}
   ],
   patterns:[
     {s:'A + 是 + （群众）+ 喜闻乐见的 + N',m:'A là … được (quần chúng) yêu thích'},
     {s:'A + 为 + B + 所喜闻乐见',m:'A được B yêu thích (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Múa rối nước là loại hình nghệ thuật được bà con Việt Nam rất yêu thích.',answer:'水上木偶戏是越南老百姓十分喜闻乐见的艺术形式。',answerPy:'Shuǐshàng mù\'ǒuxì shì Yuènán lǎobǎixìng shífēn xǐwén-lèjiàn de yìshù xíngshì.',
      note:'Định ngữ dài + 的 + danh từ trung tâm (ôn HSK 4–5).',pair:'……的 + N'},
     {promptLang:'vi',prompt:'Chỉ khi nội dung gần gũi với đời sống, chương trình mới được khán giả yêu thích.',answer:'只有内容贴近生活，节目才会被观众喜闻乐见。',answerPy:'Zhǐyǒu nèiróng tiējìn shēnghuó, jiémù cái huì bèi guānzhòng xǐwén-lèjiàn.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:24,zh:'神气',py:'shénqì',pos:'Tính từ',vn:'oai vệ, uy nghi; ra vẻ ta đây',hv:'thần khí',em:'🐯',lesson:1,
   explain:['Khen: có tinh thần, oai phong, đẹp mắt: 布老虎神气极了, 穿上军装真神气.','Chê: vênh váo, ra vẻ đắc ý: 考了第一就神气起来了; 神气什么 = vênh cái gì. Danh từ (ít dùng): thần sắc, vẻ mặt.'],
   usage:'……神气极了; 真 / 挺 + 神气; 神气起来; 神气什么（chê）; 神气十足.',
   collo:['神气极了','神气十足','神气起来','真神气'],
   ex_zh:'布老虎神气极了',ex_py:'bù lǎohǔ shénqì jí le',ex_vn:'Con hổ vải trông oai vệ vô cùng',
   exList:[
     {zh:'他的两只木版彩色套印技术做成的布老虎神气极了。',py:'Tā de liǎng zhī mùbǎn cǎisè tàoyìn jìshù zuòchéng de bù lǎohǔ shénqì jí le.',vn:'Hai con hổ vải làm bằng kỹ thuật in chồng màu mộc bản của anh ấy trông oai vệ vô cùng.'},
     {zh:'弟弟穿上新校服，显得特别神气。',py:'Dìdi chuānshang xīn xiàofú, xiǎnde tèbié shénqì.',vn:'Em trai mặc đồng phục mới trông đặc biệt oai.'},
     {zh:'才考了一次第一就神气起来了，你神气什么呀？',py:'Cái kǎole yí cì dì-yī jiù shénqì qǐlai le, nǐ shénqì shénme ya?',vn:'Mới đứng nhất một lần đã vênh váo, cậu vênh cái gì chứ?'}
   ],
   colloFull:[
     {zh:'神气极了',py:'shénqì jí le',vn:'oai vệ vô cùng'},
     {zh:'神气十足',py:'shénqì shízú',vn:'oai phong lẫm liệt'},
     {zh:'神气起来',py:'shénqì qǐlai',vn:'bắt đầu vênh váo'},
     {zh:'真神气',py:'zhēn shénqì',vn:'thật oai'},
     {zh:'神气什么',py:'shénqì shénme',vn:'vênh cái gì'}
   ],
   patterns:[
     {s:'N + 神气极了 / 显得很神气',m:'Trông oai vệ (khen)'},
     {s:'（才……就）神气起来了 / 神气什么',m:'Vênh váo, ra vẻ (chê)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các chú bộ đội mặc quân phục trông oai vệ quá!',answer:'解放军叔叔穿着军装，看起来真神气！',answerPy:'Jiěfàngjūn shūshu chuānzhe jūnzhuāng, kàn qilai zhēn shénqì!',
      note:'V + 着 chỉ trạng thái; 看起来 (ôn HSK 4).',pair:'V + 着'},
     {promptLang:'vi',prompt:'Được thầy khen một câu mà cậu ta đã vênh váo lên rồi.',answer:'老师才表扬了他一句，他就神气起来了。',answerPy:'Lǎoshī cái biǎoyángle tā yí jù, tā jiù shénqì qǐlai le.',
      note:'才……就…… (mới … đã …); 起来 chỉ bắt đầu trạng thái (ôn HSK 5).',pair:'才……就……'}
   ]},

  {n:25,zh:'翘',py:'qiào',pos:'Động từ',vn:'vểnh, vênh, cong lên',hv:'kiều',em:'🐈',lesson:1,
   explain:['(Một đầu) vểnh lên, cong lên: 翘着尾巴, 翘起嘴角, 翘二郎腿 (vắt chân chữ ngũ).','Thành ngữ khẩu ngữ: 翘尾巴 = vểnh đuôi → kiêu ngạo, tự mãn. Chú ý đọc qiào (không phải qiáo 翘首 = ngẩng đầu trông).'],
   usage:'翘着 + 尾巴 / 嘴; 翘起 + 嘴角 / 脚; 翘二郎腿; 翘尾巴 (kiêu ngạo).',
   collo:['翘着尾巴','翘起嘴角','翘二郎腿','翘尾巴'],
   ex_zh:'那虎翘着尾巴',ex_py:'nà hǔ qiàozhe wěiba',ex_vn:'Con hổ ấy vểnh đuôi',
   exList:[
     {zh:'那虎翘着尾巴，神态逼真，全身散发着喜气。',py:'Nà hǔ qiàozhe wěiba, shéntài bīzhēn, quánshēn sànfāzhe xǐqì.',vn:'Con hổ ấy vểnh đuôi, thần thái sống động, toàn thân toát lên vẻ vui tươi.'},
     {zh:'上课的时候不要翘二郎腿。',py:'Shàngkè de shíhou búyào qiào èrlángtuǐ.',vn:'Trong giờ học đừng vắt chân chữ ngũ.'},
     {zh:'取得了一点儿成绩就翘尾巴，是走不远的。',py:'Qǔdéle yìdiǎnr chéngjì jiù qiào wěiba, shì zǒu bu yuǎn de.',vn:'Mới đạt chút thành tích đã vểnh đuôi kiêu ngạo thì không đi xa được đâu.'}
   ],
   colloFull:[
     {zh:'翘着尾巴',py:'qiàozhe wěiba',vn:'vểnh đuôi'},
     {zh:'翘起嘴角',py:'qiàoqǐ zuǐjiǎo',vn:'nhếch khoé miệng'},
     {zh:'翘二郎腿',py:'qiào èrlángtuǐ',vn:'vắt chân chữ ngũ'},
     {zh:'翘尾巴',py:'qiào wěiba',vn:'kiêu ngạo, vênh váo'},
     {zh:'往上翘',py:'wǎng shàng qiào',vn:'cong lên trên'}
   ],
   patterns:[
     {s:'翘着 + 尾巴 / 腿',m:'Tư thế vểnh, cong lên'},
     {s:'（有了成绩）就翘尾巴',m:'Kiêu ngạo, tự mãn (nghĩa bóng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chú chó con vui đến mức đuôi vểnh lên cao.',answer:'小狗高兴得把尾巴翘得高高的。',answerPy:'Xiǎo gǒu gāoxìng de bǎ wěiba qiào de gāogāo de.',
      note:'Adj + 得 + kết quả; tính từ lặp 高高的 (ôn HSK 4–5).',pair:'V + 得 + AA的'},
     {promptLang:'vi',prompt:'Dù thi đỗ thủ khoa, cậu ấy cũng không hề kiêu ngạo.',answer:'即使考了第一名，他也一点儿都不翘尾巴。',answerPy:'Jíshǐ kǎole dì-yī míng, tā yě yìdiǎnr dōu bú qiào wěiba.',
      note:'即使……也…… (ôn HSK 5).',pair:'即使……也……'}
   ]},

  {n:26,zh:'神态',py:'shéntài',pos:'Danh từ',vn:'thần thái, dáng vẻ, bộ dạng',hv:'thần thái',em:'🎭',lesson:1,
   explain:['Nét mặt và dáng điệu biểu lộ tinh thần, tâm trạng: 神态逼真 (thần thái như thật), 神态自若 (điềm nhiên như không).','Hay dùng khi bình luận tranh, tượng, diễn xuất: 画出了人物的神态.'],
   usage:'神态 + 逼真 / 自然 / 安详 / 自若; 画出 / 描写 + 神态.',
   collo:['神态逼真','神态自若','神态安详','人物的神态'],
   ex_zh:'神态逼真',ex_py:'shéntài bīzhēn',ex_vn:'Thần thái sống động như thật',
   exList:[
     {zh:'那虎翘着尾巴，神态逼真。',py:'Nà hǔ qiàozhe wěiba, shéntài bīzhēn.',vn:'Con hổ ấy vểnh đuôi, thần thái sống động như thật.'},
     {zh:'到现在他能画出神态逼真的动物、盛开的花朵。',py:'Dào xiànzài tā néng huàchū shéntài bīzhēn de dòngwù, shèngkāi de huāduǒ.',vn:'Đến nay cậu ấy đã vẽ được những con vật thần thái như thật, những bông hoa nở rộ.'},
     {zh:'面对记者的提问，他神态自若，回答得很从容。',py:'Miànduì jìzhě de tíwèn, tā shéntài zìruò, huídá de hěn cóngróng.',vn:'Trước câu hỏi của phóng viên, anh ấy điềm nhiên, trả lời rất ung dung.'}
   ],
   colloFull:[
     {zh:'神态逼真',py:'shéntài bīzhēn',vn:'thần thái như thật'},
     {zh:'神态自若',py:'shéntài zìruò',vn:'điềm nhiên như không'},
     {zh:'神态安详',py:'shéntài ānxiáng',vn:'dáng vẻ an nhiên'},
     {zh:'人物的神态',py:'rénwù de shéntài',vn:'thần thái nhân vật'},
     {zh:'画出神态',py:'huàchū shéntài',vn:'vẽ ra được thần thái'}
   ],
   patterns:[
     {s:'N + 神态逼真 / 自然',m:'Thần thái của N sống động / tự nhiên'},
     {s:'面对……，S + 神态自若',m:'Trước …, S vẫn điềm nhiên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức tranh này không chỉ giống mà còn vẽ ra được thần thái của ông cụ.',answer:'这幅画不但画得像，而且画出了老人的神态。',answerPy:'Zhè fú huà búdàn huà de xiàng, érqiě huàchūle lǎorén de shéntài.',
      note:'不但……而且…… (ôn HSK 4).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Dù gặp chuyện lớn, ông ấy vẫn điềm nhiên như không.',answer:'哪怕遇到了大事，他也神态自若。',answerPy:'Nǎpà yùdàole dà shì, tā yě shéntài zìruò.',
      note:'哪怕……也…… (ôn HSK 5).',pair:'哪怕……也……'}
   ]},

  {n:27,zh:'盛开',py:'shèngkāi',pos:'Động từ',vn:'nở rộ, đua nở',hv:'thịnh khai',em:'🌸',lesson:1,
   explain:['(Hoa) nở to, nở rộ, nở đồng loạt: 盛开的花朵, 桃花盛开. Văn viết, giàu hình ảnh.','Chỉ dùng cho hoa (và nghĩa bóng như 友谊之花盛开); không mang tân ngữ.'],
   usage:'盛开的 + 花朵 / 桃花 / 牡丹; N + 盛开; 竞相盛开.',
   collo:['盛开的花朵','桃花盛开','竞相盛开','鲜花盛开'],
   ex_zh:'盛开的花朵',ex_py:'shèngkāi de huāduǒ',ex_vn:'Những bông hoa nở rộ',
   exList:[
     {zh:'老虎身上装饰着彩绘花纹和盛开的花朵，全身散发着喜气。',py:'Lǎohǔ shēnshang zhuāngshìzhe cǎihuì huāwén hé shèngkāi de huāduǒ, quánshēn sànfāzhe xǐqì.',vn:'Trên mình hổ trang trí hoa văn vẽ màu và những bông hoa nở rộ, toàn thân toát lên vẻ vui tươi.'},
     {zh:'每年三月，公园里桃花盛开，游人特别多。',py:'Měi nián sān yuè, gōngyuán li táohuā shèngkāi, yóurén tèbié duō.',vn:'Tháng ba hằng năm, hoa đào trong công viên nở rộ, du khách đặc biệt đông.'},
     {zh:'春天一到，各种鲜花竞相盛开。',py:'Chūntiān yí dào, gè zhǒng xiānhuā jìngxiāng shèngkāi.',vn:'Xuân vừa đến, trăm hoa đua nhau nở rộ.'}
   ],
   colloFull:[
     {zh:'盛开的花朵',py:'shèngkāi de huāduǒ',vn:'bông hoa nở rộ'},
     {zh:'桃花盛开',py:'táohuā shèngkāi',vn:'hoa đào nở rộ'},
     {zh:'竞相盛开',py:'jìngxiāng shèngkāi',vn:'đua nhau nở rộ'},
     {zh:'鲜花盛开',py:'xiānhuā shèngkāi',vn:'hoa tươi nở rộ'},
     {zh:'盛开的牡丹',py:'shèngkāi de mǔdan',vn:'hoa mẫu đơn nở rộ'}
   ],
   patterns:[
     {s:'（时间 / 地点）+ N花 + 盛开',m:'Ở đâu / khi nào hoa gì nở rộ'},
     {s:'盛开的 + 花朵 / 花',m:'Làm định ngữ tả hoa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tết đến, hoa mai ở miền Nam nở rộ khắp nơi.',answer:'春节一到，越南南方到处盛开着黄梅花。',answerPy:'Chūnjié yí dào, Yuènán nánfāng dàochù shèngkāizhe huángméihuā.',
      note:'Câu tồn hiện: nơi chốn + V着 + N (ôn HSK 5).',pair:'存现句'},
     {promptLang:'vi',prompt:'Chỉ cần chăm sóc cẩn thận, chậu hoa này sẽ nở rộ đúng dịp Tết.',answer:'只要细心照顾，这盆花就会在春节时盛开。',answerPy:'Zhǐyào xìxīn zhàogù, zhè pén huā jiù huì zài Chūnjié shí shèngkāi.',
      note:'只要……就…… (ôn HSK 4).',pair:'只要……就……'}
   ]},

  {n:28,zh:'散发',py:'sànfā',pos:'Động từ',vn:'toả ra, phát ra',hv:'tán phát',em:'✨',lesson:1,
   explain:['Toả ra xung quanh (mùi hương, ánh sáng, nhiệt, không khí…): 散发着香味, 散发着喜气 / 魅力.','Nghĩa khác: phát, rải (tài liệu, truyền đơn) cho nhiều người: 散发传单. Chú ý 散 đọc sàn.'],
   usage:'散发（着）+ 香味 / 气味 / 光芒 / 喜气 / 魅力; 散发 + 传单.',
   collo:['散发着喜气','散发着香味','散发光芒','散发传单'],
   ex_zh:'全身散发着喜气',ex_py:'quánshēn sànfāzhe xǐqì',ex_vn:'Toàn thân toát lên vẻ vui tươi',
   exList:[
     {zh:'那虎神态逼真，全身散发着喜气。',py:'Nà hǔ shéntài bīzhēn, quánshēn sànfāzhe xǐqì.',vn:'Con hổ ấy thần thái như thật, toàn thân toát ra vẻ vui tươi.'},
     {zh:'刚出锅的包子散发着诱人的香味。',py:'Gāng chū guō de bāozi sànfāzhe yòurén de xiāngwèi.',vn:'Bánh bao vừa ra lò toả mùi thơm hấp dẫn.'},
     {zh:'这些老照片散发着浓浓的时代气息。',py:'Zhèxiē lǎo zhàopiàn sànfāzhe nóngnóng de shídài qìxī.',vn:'Những tấm ảnh cũ này toát lên đậm đà hơi thở thời đại.'}
   ],
   colloFull:[
     {zh:'散发着喜气',py:'sànfāzhe xǐqì',vn:'toát lên vẻ vui tươi'},
     {zh:'散发着香味',py:'sànfāzhe xiāngwèi',vn:'toả hương thơm'},
     {zh:'散发光芒',py:'sànfā guāngmáng',vn:'toả ánh sáng'},
     {zh:'散发传单',py:'sànfā chuándān',vn:'phát tờ rơi'},
     {zh:'散发魅力',py:'sànfā mèilì',vn:'toát lên sức hút'}
   ],
   patterns:[
     {s:'N + 散发着 + 香味 / 气息 / 喜气',m:'N toả ra / toát lên …'},
     {s:'在街上 + 散发 + 传单',m:'Phát tờ rơi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bước vào tiệm sách cũ, mùi giấy cũ toả ra khiến tôi nhớ đến thời thơ ấu.',answer:'走进旧书店，旧纸散发出的味道让我联想到了童年。',answerPy:'Zǒujìn jiù shūdiàn, jiù zhǐ sànfā chū de wèidao ràng wǒ liánxiǎng dàole tóngnián.',
      note:'Cụm chủ–vị làm định ngữ (旧纸散发出的味道) + 让 (ôn HSK 5); 联想 — từ bài này.',pair:'让 + 人 + V'},
     {promptLang:'vi',prompt:'Cô ấy không chỉ xinh đẹp mà còn toát lên vẻ tự tin.',answer:'她不仅长得漂亮，而且散发着自信。',answerPy:'Tā bùjǐn zhǎng de piàoliang, érqiě sànfāzhe zìxìn.',
      note:'不仅……而且…… (ôn HSK 4).',pair:'不仅……而且……'}
   ]},

  {n:29,zh:'耸',py:'sǒng',pos:'Động từ',vn:'nhún (vai)',hv:'tủng',em:'🤷',lesson:1,
   explain:['Nhô lên, nhấc lên: 耸肩 / 耸耸肩 (nhún vai — tỏ ý không biết, không sao, chịu thôi).','Nghĩa khác (văn viết): cao vút — 高耸入云 (cao chọc trời); gây chú ý — 耸人听闻 (giật gân).'],
   usage:'耸耸肩 / 耸了耸肩; 高耸（入云）; 耸人听闻.',
   collo:['耸耸肩','耸了耸肩','高耸入云','耸人听闻'],
   ex_zh:'他耸耸肩',ex_py:'tā sǒngsong jiān',ex_vn:'Anh ấy nhún vai',
   exList:[
     {zh:'我问多少钱，他耸耸肩，对我说：“这是魏州虎。”',py:'Wǒ wèn duōshao qián, tā sǒngsong jiān, duì wǒ shuō: “Zhè shì Wèizhōu hǔ.”',vn:'Tôi hỏi bao nhiêu tiền, anh ấy nhún vai nói với tôi: "Đây là hổ Nguỵ Châu."'},
     {zh:'问他作业写完没有，他只是耸了耸肩，什么也没说。',py:'Wèn tā zuòyè xiěwán méiyǒu, tā zhǐshì sǒngle sǒng jiān, shénme yě méi shuō.',vn:'Hỏi nó làm xong bài tập chưa, nó chỉ nhún vai, chẳng nói gì.'},
     {zh:'市中心高耸着一座座现代化大楼。',py:'Shì zhōngxīn gāosǒngzhe yí zuòzuò xiàndàihuà dàlóu.',vn:'Trung tâm thành phố sừng sững những toà nhà hiện đại cao vút.'}
   ],
   colloFull:[
     {zh:'耸耸肩',py:'sǒngsong jiān',vn:'nhún nhún vai'},
     {zh:'耸了耸肩',py:'sǒngle sǒng jiān',vn:'nhún vai một cái'},
     {zh:'高耸入云',py:'gāosǒng rù yún',vn:'cao chọc trời'},
     {zh:'耸人听闻',py:'sǒngrén-tīngwén',vn:'giật gân'},
     {zh:'无奈地耸耸肩',py:'wúnài de sǒngsong jiān',vn:'nhún vai bất lực'}
   ],
   patterns:[
     {s:'S + 耸耸肩，说：“……”',m:'Nhún vai rồi nói'},
     {s:'S + 只是耸了耸肩，什么也没说',m:'Chỉ nhún vai, không nói gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi hỏi cậu ấy vì sao đến muộn, cậu ấy chỉ nhún vai.',answer:'我问他为什么迟到，他只是耸了耸肩。',answerPy:'Wǒ wèn tā wèi shénme chídào, tā zhǐshì sǒngle sǒng jiān.',
      note:'Động từ đơn lặp dạng V了V (耸了耸) (ôn HSK 4).',pair:'V了V'},
     {promptLang:'vi',prompt:'Nghe xong, anh ấy bất lực nhún vai, như muốn nói "tôi cũng chịu".',answer:'听完以后，他无奈地耸耸肩，好像在说“我也没办法”。',answerPy:'Tīngwán yǐhòu, tā wúnài de sǒngsong jiān, hǎoxiàng zài shuō “wǒ yě méi bànfǎ”.',
      note:'好像…… (dường như, ôn HSK 4); Adj + 地 + V.',pair:'好像……'}
   ]},

  {n:30,zh:'州',py:'zhōu',pos:'Danh từ',vn:'châu (đơn vị hành chính thời xưa); bang',hv:'châu',em:'🗺️',lesson:1,
   explain:['Đơn vị hành chính thời xưa ở Trung Quốc (lớn hơn huyện): 魏州, 杭州, 苏州 — nhiều tên thành phố ngày nay còn giữ chữ 州.','Ngày nay: 自治州 (châu tự trị); bang của một số nước: 美国加州 (bang California).'],
   usage:'地名 + 州（魏州 / 杭州）; 自治州; 美国 + ……州.',
   collo:['魏州虎','自治州','加州','州政府'],
   ex_zh:'这是魏州虎',ex_py:'zhè shì Wèizhōu hǔ',ex_vn:'Đây là hổ Nguỵ Châu',
   exList:[
     {zh:'“这是魏州虎。”言外之意是这虎可是系出名门。',py:'“Zhè shì Wèizhōu hǔ.” Yánwài zhī yì shì zhè hǔ kě shì xì chū míngmén.',vn:'"Đây là hổ Nguỵ Châu." Ý ngoài lời là con hổ này xuất thân danh môn đấy.'},
     {zh:'魏州在今天的河北省邯郸市魏县。',py:'Wèizhōu zài jīntiān de Héběi Shěng Hándān Shì Wèi Xiàn.',vn:'Nguỵ Châu nay thuộc huyện Nguỵ, thành phố Hàm Đan, tỉnh Hà Bắc.'},
     {zh:'他在美国加州读了四年大学。',py:'Tā zài Měiguó Jiāzhōu dúle sì nián dàxué.',vn:'Anh ấy học đại học bốn năm ở bang California, Mỹ.'}
   ],
   colloFull:[
     {zh:'魏州虎',py:'Wèizhōu hǔ',vn:'hổ Nguỵ Châu'},
     {zh:'自治州',py:'zìzhìzhōu',vn:'châu tự trị'},
     {zh:'加州',py:'Jiāzhōu',vn:'bang California'},
     {zh:'州政府',py:'zhōu zhèngfǔ',vn:'chính quyền bang'},
     {zh:'古代的州',py:'gǔdài de zhōu',vn:'châu thời cổ'}
   ],
   patterns:[
     {s:'古代的……州 + 在今天的 + ……',m:'Châu … thời xưa nay thuộc …'},
     {s:'美国 + ……州',m:'Bang … của Mỹ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hàng Châu từ xưa đã nổi tiếng về tơ lụa và trà.',answer:'杭州自古以来就以丝绸和茶叶闻名。',answerPy:'Hángzhōu zìgǔ yǐlái jiù yǐ sīchóu hé cháyè wénmíng.',
      note:'以……闻名 = nổi tiếng về … (ôn HSK 5); 自古以来.',pair:'以……闻名'},
     {promptLang:'vi',prompt:'Nếu không tra bản đồ, tôi cũng chẳng biết Nguỵ Châu ở đâu.',answer:'要不是查了地图，我也不知道魏州在哪儿。',answerPy:'Yàobúshì chále dìtú, wǒ yě bù zhīdào Wèizhōu zài nǎr.',
      note:'要不是…… = nếu không phải vì … (ôn HSK 5).',pair:'要不是……'}
   ]},

  {n:31,zh:'外行',py:'wàiháng',pos:'Danh từ / Tính từ',vn:'người ngoài nghề, người không chuyên; không thạo',hv:'ngoại hàng',em:'🤔',lesson:1,
   explain:['Danh từ: người không am hiểu một nghề, một lĩnh vực: 我这个外行, 外行看热闹，内行看门道.','Tính từ: không thạo, thiếu chuyên môn: 对电脑很外行; 说外行话. Trái nghĩa: 内行. Chú ý 行 đọc háng (nghề), không phải xíng.'],
   usage:'（我）这个外行; 对…… + 很外行; 说外行话; 外行看热闹，内行看门道.',
   collo:['我这个外行','对……很外行','外行话','外行看热闹'],
   ex_zh:'告诉我这个外行',ex_py:'gàosu wǒ zhège wàiháng',ex_vn:'Nói cho tôi — kẻ ngoài nghề này — biết',
   exList:[
     {zh:'言外之意是在告诉我这个外行，这虎可是系出名门。',py:'Yánwài zhī yì shì zài gàosu wǒ zhège wàiháng, zhè hǔ kě shì xì chū míngmén.',vn:'Ý ngoài lời là đang bảo tôi — một kẻ ngoại đạo — rằng con hổ này xuất thân danh môn đấy.'},
     {zh:'我对书法完全是外行，看不出这幅字好在哪儿。',py:'Wǒ duì shūfǎ wánquán shì wàiháng, kàn bu chū zhè fú zì hǎo zài nǎr.',vn:'Tôi hoàn toàn ngoại đạo về thư pháp, không nhìn ra bức chữ này đẹp ở chỗ nào.'},
     {zh:'俗话说：“外行看热闹，内行看门道。”',py:'Súhuà shuō: “Wàiháng kàn rènao, nèiháng kàn méndao.”',vn:'Tục ngữ nói: "Người ngoài nghề xem cho vui, người trong nghề xem ra cái tinh tuý."'}
   ],
   colloFull:[
     {zh:'我这个外行',py:'wǒ zhège wàiháng',vn:'kẻ ngoại đạo như tôi'},
     {zh:'对……很外行',py:'duì…… hěn wàiháng',vn:'không thạo về …'},
     {zh:'外行话',py:'wàiháng huà',vn:'lời nói của người ngoài nghề'},
     {zh:'外行看热闹',py:'wàiháng kàn rènao',vn:'người ngoài nghề xem cho vui'},
     {zh:'完全是外行',py:'wánquán shì wàiháng',vn:'hoàn toàn ngoại đạo'}
   ],
   patterns:[
     {s:'S + 对 + N + 很外行 / 是外行',m:'S không am hiểu về N'},
     {s:'我这个外行 + V',m:'Tôi — kẻ ngoại đạo — … (tự khiêm)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về máy tính tôi là người ngoài nghề, cậu đừng cười tôi nhé.',answer:'对电脑我是个外行，你可别笑话我。',answerPy:'Duì diànnǎo wǒ shì ge wàiháng, nǐ kě bié xiàohua wǒ.',
      note:'对……（来说）; 可 + 别 nhấn mạnh lời dặn (ôn HSK 4–5).',pair:'可别……'},
     {promptLang:'vi',prompt:'Chỉ nghe anh ấy nói một câu là biết ngay anh ấy là người ngoài nghề.',answer:'一听他说话，就知道他是个外行。',answerPy:'Yì tīng tā shuōhuà, jiù zhīdào tā shì ge wàiháng.',
      note:'一……就…… (ôn HSK 4).',pair:'一……就……'}
   ]},

  {n:32,zh:'推销',py:'tuīxiāo',pos:'Động từ',vn:'chào hàng, đẩy mạnh tiêu thụ',hv:'thôi tiêu',em:'📢',lesson:1,
   explain:['Tìm cách giới thiệu, mời chào để bán hàng: 推销产品, 推销员 (nhân viên bán hàng), 推销术 (nghệ thuật / mánh bán hàng).','Nghĩa bóng: quảng bá, "bán" ý tưởng, bản thân: 推销自己 (giới thiệu bản thân khi xin việc).'],
   usage:'推销 + 产品 / 商品 / 自己 / 观点; 推销员; 推销术; 上门推销.',
   collo:['推销术','推销产品','推销员','推销自己'],
   ex_zh:'这算什么推销术',ex_py:'zhè suàn shénme tuīxiāo shù',ex_vn:'Thế này mà gọi là nghệ thuật bán hàng sao',
   exList:[
     {zh:'我不知道别人也未必知道，这算什么推销术？',py:'Wǒ bù zhīdào biérén yě wèibì zhīdào, zhè suàn shénme tuīxiāo shù?',vn:'Tôi không biết thì người khác cũng chưa chắc biết, thế này thì tính là mánh bán hàng gì chứ?'},
     {zh:'那个推销员在门口站了半天，一件产品也没推销出去。',py:'Nàge tuīxiāoyuán zài ménkǒu zhànle bàntiān, yí jiàn chǎnpǐn yě méi tuīxiāo chūqu.',vn:'Anh nhân viên chào hàng đứng ở cửa cả buổi mà không bán được món nào.'},
     {zh:'面试的时候，要学会恰当地推销自己。',py:'Miànshì de shíhou, yào xuéhuì qiàdàng de tuīxiāo zìjǐ.',vn:'Khi phỏng vấn phải biết giới thiệu bản thân một cách thoả đáng.'}
   ],
   colloFull:[
     {zh:'推销术',py:'tuīxiāo shù',vn:'mánh / nghệ thuật bán hàng'},
     {zh:'推销产品',py:'tuīxiāo chǎnpǐn',vn:'chào bán sản phẩm'},
     {zh:'推销员',py:'tuīxiāoyuán',vn:'nhân viên chào hàng'},
     {zh:'推销自己',py:'tuīxiāo zìjǐ',vn:'quảng bá bản thân'},
     {zh:'上门推销',py:'shàngmén tuīxiāo',vn:'đến tận nhà chào hàng'}
   ],
   patterns:[
     {s:'把 + 产品 + 推销出去',m:'Bán được hàng ra ngoài'},
     {s:'这算什么 + N？',m:'Thế này mà cũng gọi là … à? (phản vấn, chê)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta dù nói hay đến đâu, tôi cũng sẽ không mua hàng anh ta chào.',answer:'不管他说得多好听，我也不会买他推销的东西。',answerPy:'Bùguǎn tā shuō de duō hǎotīng, wǒ yě bú huì mǎi tā tuīxiāo de dōngxi.',
      note:'不管 + 多 + Adj，也…… (ôn HSK 4–5).',pair:'不管……也……'},
     {promptLang:'vi',prompt:'Muốn chào hàng thành công, trước hết phải hiểu nhu cầu của khách.',answer:'要想推销成功，首先要了解顾客的需求。',answerPy:'Yào xiǎng tuīxiāo chénggōng, shǒuxiān yào liǎojiě gùkè de xūqiú.',
      note:'要想……首先…… (ôn HSK 4–5).',pair:'要想……首先……'}
   ]},

  {n:33,zh:'吞吞吐吐',py:'tūntūntǔtǔ',pos:'Tính từ',vn:'ấp a ấp úng, ngập ngừng',hv:'thôn thôn thổ thổ',em:'😶',lesson:1,
   explain:['Dạng lặp AABB của 吞吐 (nuốt vào – nhả ra): nói năng ngập ngừng, muốn nói lại thôi, không rõ ràng dứt khoát (vì ngại, sợ, hoặc che giấu).','Hay làm vị ngữ / trạng ngữ: 说话吞吞吐吐, 吞吞吐吐地说. Trái nghĩa: 直截了当, 痛快.'],
   usage:'说话 + 吞吞吐吐; 吞吞吐吐地 + 说 / 回答; 别吞吞吐吐的.',
   collo:['说话吞吞吐吐','吞吞吐吐地说','别吞吞吐吐的','吞吞吐吐半天'],
   ex_zh:'说话吞吞吐吐',ex_py:'shuōhuà tūntūntǔtǔ',ex_vn:'Nói năng ấp úng',
   exList:[
     {zh:'当你和他讨价还价的时候，他立刻就变得不好意思起来，说话吞吞吐吐。',py:'Dāng nǐ hé tā tǎojià-huánjià de shíhou, tā lìkè jiù biàn de bù hǎoyìsi qǐlai, shuōhuà tūntūntǔtǔ.',vn:'Khi bạn mặc cả với anh ấy, anh ấy lập tức trở nên ngượng ngùng, nói năng ấp a ấp úng.'},
     {zh:'有什么话就直说，别吞吞吐吐的。',py:'Yǒu shénme huà jiù zhí shuō, bié tūntūntǔtǔ de.',vn:'Có gì thì cứ nói thẳng, đừng ấp úng thế.'},
     {zh:'他吞吞吐吐了半天，才说出把手机弄丢了。',py:'Tā tūntūntǔtǔle bàntiān, cái shuōchū bǎ shǒujī nòngdiū le.',vn:'Nó ấp úng cả buổi mới nói ra là đã làm mất điện thoại.'}
   ],
   colloFull:[
     {zh:'说话吞吞吐吐',py:'shuōhuà tūntūntǔtǔ',vn:'nói năng ấp úng'},
     {zh:'吞吞吐吐地说',py:'tūntūntǔtǔ de shuō',vn:'ngập ngừng nói'},
     {zh:'别吞吞吐吐的',py:'bié tūntūntǔtǔ de',vn:'đừng ấp úng nữa'},
     {zh:'吞吞吐吐半天',py:'tūntūntǔtǔ bàntiān',vn:'ấp úng cả buổi'},
     {zh:'回答得吞吞吐吐',py:'huídá de tūntūntǔtǔ',vn:'trả lời ngập ngừng'}
   ],
   patterns:[
     {s:'S + 说话 + 吞吞吐吐',m:'S nói năng ấp úng'},
     {s:'S + 吞吞吐吐了半天，才……',m:'Ấp úng mãi mới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ bị cô giáo hỏi đến là nó lại ấp úng, chẳng nói được gì.',answer:'一被老师问到，他就吞吞吐吐的，什么也说不出来。',answerPy:'Yí bèi lǎoshī wèndào, tā jiù tūntūntǔtǔ de, shénme yě shuō bu chūlai.',
      note:'一……就……; 什么也 + 不 / 没 (ôn HSK 4); bổ ngữ khả năng 说不出来.',pair:'什么也……'},
     {promptLang:'vi',prompt:'Nếu cậu cứ ấp úng như vậy, người khác sẽ nghĩ cậu đang giấu điều gì đó.',answer:'要是你一直这么吞吞吐吐，别人会以为你在隐瞒什么。',answerPy:'Yàoshi nǐ yìzhí zhème tūntūntǔtǔ, biérén huì yǐwéi nǐ zài yǐnmán shénme.',
      note:'以为 = tưởng (thường sai) (ôn HSK 4–5); 隐瞒 — HSK 6.',pair:'以为……'}
   ]},

  {n:34,zh:'残次品',py:'cáncìpǐn',pos:'Danh từ',vn:'hàng bị hư hoặc lỗi, hàng khuyết tật',hv:'tàn thứ phẩm',em:'🧩',lesson:1,
   explain:['Sản phẩm bị hỏng (残品) hoặc không đạt chuẩn (次品) — gọi chung là hàng lỗi.','Trong bài: "残次品不可避免" là một lý do "làm sẵn" người bán hàng thủ công hay nói để khỏi bị mặc cả (hàng làm tay khó tránh lỗi nhỏ).'],
   usage:'残次品 + 不可避免 / 率 (tỉ lệ); 处理残次品; 挑出残次品.',
   collo:['残次品不可避免','处理残次品','残次品率','挑出残次品'],
   ex_zh:'残次品不可避免',ex_py:'cáncìpǐn bù kě bìmiǎn',ex_vn:'Hàng lỗi là không tránh khỏi',
   exList:[
     {zh:'什么“这是纯手工的”“残次品不可避免”，这些理由他一条也说不出来。',py:'Shénme “zhè shì chún shǒugōng de” “cáncìpǐn bù kě bìmiǎn”, zhèxiē lǐyóu tā yì tiáo yě shuō bu chūlai.',vn:'Nào là "đây là làm hoàn toàn bằng tay", "hàng lỗi là không tránh khỏi", những lý do ấy anh ấy chẳng nói ra được lấy một câu.'},
     {zh:'工厂把残次品集中起来，低价处理了。',py:'Gōngchǎng bǎ cáncìpǐn jízhōng qǐlai, dījià chǔlǐ le.',vn:'Nhà máy gom hàng lỗi lại, bán thanh lý giá rẻ.'},
     {zh:'引进新设备以后，残次品率降低了一半。',py:'Yǐnjìn xīn shèbèi yǐhòu, cáncìpǐn lǜ jiàngdīle yíbàn.',vn:'Sau khi nhập thiết bị mới, tỉ lệ hàng lỗi giảm một nửa.'}
   ],
   colloFull:[
     {zh:'残次品不可避免',py:'cáncìpǐn bù kě bìmiǎn',vn:'hàng lỗi không tránh khỏi'},
     {zh:'处理残次品',py:'chǔlǐ cáncìpǐn',vn:'xử lý hàng lỗi'},
     {zh:'残次品率',py:'cáncìpǐn lǜ',vn:'tỉ lệ hàng lỗi'},
     {zh:'挑出残次品',py:'tiāochū cáncìpǐn',vn:'lọc ra hàng lỗi'},
     {zh:'低价出售残次品',py:'dījià chūshòu cáncìpǐn',vn:'bán rẻ hàng lỗi'}
   ],
   patterns:[
     {s:'把 + 残次品 + 挑出来 / 处理掉',m:'Loại bỏ hàng lỗi'},
     {s:'残次品率 + 降低 / 提高',m:'Tỉ lệ hàng lỗi giảm / tăng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi xuất xưởng, nhất định phải lọc hết hàng lỗi ra.',answer:'出厂以前，一定要把残次品都挑出来。',answerPy:'Chūchǎng yǐqián, yídìng yào bǎ cáncìpǐn dōu tiāo chūlai.',
      note:'Câu 把 + V + bổ ngữ xu hướng 出来 (ôn HSK 4).',pair:'把……V出来'},
     {promptLang:'vi',prompt:'Hàng làm thủ công tuy khó tránh có hàng lỗi, nhưng mỗi món đều là độc nhất.',answer:'手工产品虽然难免有残次品，但每一件都是独一无二的。',answerPy:'Shǒugōng chǎnpǐn suīrán nánmiǎn yǒu cáncìpǐn, dàn měi yí jiàn dōu shì dúyī-wú\'èr de.',
      note:'难免 = khó tránh (ôn HSK 5); 虽然……但…….',pair:'难免……'}
   ]},

  {n:35,zh:'次品',py:'cìpǐn',pos:'Danh từ',vn:'hàng loại hai, hàng lỗi, hàng kém chất lượng',hv:'thứ phẩm',em:'🏷️',lesson:1,
   explain:['Sản phẩm không đạt tiêu chuẩn chất lượng (次 = kém, thứ yếu). Trái nghĩa: 正品 (hàng chính phẩm), 精品 (hàng tinh xảo).','Sách in 次品 như từ phụ của 残次品. 次 ở đây nghĩa "kém, loại hai" như trong 次要 (thứ yếu), 质量太次 (chất lượng quá kém).'],
   usage:'……是次品; 把次品 + 退 / 换; 以次充好 (lấy hàng kém giả làm hàng tốt).',
   collo:['买到次品','退换次品','以次充好','次品率'],
   ex_zh:'买到了次品',ex_py:'mǎidàole cìpǐn',ex_vn:'Mua phải hàng lỗi',
   exList:[
     {zh:'这台洗衣机刚买回来就坏了，肯定是次品。',py:'Zhè tái xǐyījī gāng mǎi huilai jiù huài le, kěndìng shì cìpǐn.',vn:'Cái máy giặt này vừa mua về đã hỏng, chắc chắn là hàng lỗi.'},
     {zh:'如果买到次品，七天之内可以免费退换。',py:'Rúguǒ mǎidào cìpǐn, qī tiān zhī nèi kěyǐ miǎnfèi tuìhuàn.',vn:'Nếu mua phải hàng lỗi, trong vòng bảy ngày có thể đổi trả miễn phí.'},
     {zh:'那家商店以次充好，被顾客投诉了。',py:'Nà jiā shāngdiàn yǐ cì chōng hǎo, bèi gùkè tóusù le.',vn:'Cửa hàng đó lấy hàng kém giả làm hàng tốt, bị khách hàng khiếu nại.'}
   ],
   colloFull:[
     {zh:'买到次品',py:'mǎidào cìpǐn',vn:'mua phải hàng lỗi'},
     {zh:'退换次品',py:'tuìhuàn cìpǐn',vn:'đổi trả hàng lỗi'},
     {zh:'以次充好',py:'yǐ cì chōng hǎo',vn:'lấy hàng kém giả hàng tốt'},
     {zh:'次品率',py:'cìpǐn lǜ',vn:'tỉ lệ hàng lỗi'},
     {zh:'正品和次品',py:'zhèngpǐn hé cìpǐn',vn:'hàng chuẩn và hàng lỗi'}
   ],
   patterns:[
     {s:'……肯定是次品',m:'… chắc chắn là hàng lỗi'},
     {s:'以次充好',m:'Gian lận: lấy hàng kém thay hàng tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã mua phải hàng lỗi, đành phải mang đến cửa hàng đổi.',answer:'我买到了次品，只好拿到商店去换。',answerPy:'Wǒ mǎidàole cìpǐn, zhǐhǎo nádào shāngdiàn qù huàn.',
      note:'Bổ ngữ kết quả 到 (买到); 只好 (ôn HSK 4).',pair:'V + 到'},
     {promptLang:'vi',prompt:'Hàng rẻ chưa chắc là hàng lỗi, hàng đắt cũng chưa chắc là hàng tốt.',answer:'便宜的不一定是次品，贵的也不一定是好货。',answerPy:'Piányi de bù yídìng shì cìpǐn, guì de yě bù yídìng shì hǎo huò.',
      note:'Cấu trúc 的 danh từ hoá (便宜的 = đồ rẻ); 不一定 (ôn HSK 4).',pair:'……的 + 不一定……'}
   ]},

  {n:36,zh:'现成',py:'xiànchéng',pos:'Tính từ',vn:'làm sẵn, có sẵn',hv:'hiện thành',em:'📦',lesson:1,
   explain:['Đã có sẵn, làm sẵn, không cần làm mới hoặc chuẩn bị thêm: 现成的饭 (cơm có sẵn), 现成的理由, 现成的答案.','Thường làm định ngữ (现成的 + N) hoặc vị ngữ (饭菜都是现成的). Khẩu ngữ hay đọc xiànchéngr.'],
   usage:'现成的 + 理由 / 答案 / 衣服 / 饭菜; N + 是现成的; 捡现成的 (hưởng sẵn).',
   collo:['现成的理由','现成的答案','现成的饭菜','捡现成的'],
   ex_zh:'这些现成的理由',ex_py:'zhèxiē xiànchéng de lǐyóu',ex_vn:'Những lý do có sẵn này',
   exList:[
     {zh:'这些现成的“谢绝”还价的理由他一条也说不出来。',py:'Zhèxiē xiànchéng de “xièjué” huánjià de lǐyóu tā yì tiáo yě shuō bu chūlai.',vn:'Những lý do có sẵn để "khéo từ chối" mặc cả ấy, anh ấy không nói ra được lấy một câu.'},
     {zh:'冰箱里有现成的饭菜，你热一热就能吃。',py:'Bīngxiāng li yǒu xiànchéng de fàncài, nǐ rè yi rè jiù néng chī.',vn:'Trong tủ lạnh có sẵn cơm canh, con hâm lên là ăn được.'},
     {zh:'学习没有现成的答案，要自己动脑筋去想。',py:'Xuéxí méiyǒu xiànchéng de dá\'àn, yào zìjǐ dòng nǎojīn qù xiǎng.',vn:'Học tập không có đáp án làm sẵn, phải tự động não mà nghĩ.'}
   ],
   colloFull:[
     {zh:'现成的理由',py:'xiànchéng de lǐyóu',vn:'lý do có sẵn'},
     {zh:'现成的答案',py:'xiànchéng de dá\'àn',vn:'đáp án làm sẵn'},
     {zh:'现成的饭菜',py:'xiànchéng de fàncài',vn:'cơm canh có sẵn'},
     {zh:'捡现成的',py:'jiǎn xiànchéng de',vn:'hưởng sẵn (không bỏ công)'},
     {zh:'现成的衣服',py:'xiànchéng de yīfu',vn:'quần áo may sẵn'}
   ],
   patterns:[
     {s:'（有 / 没有）+ 现成的 + N',m:'(Có / không có) … làm sẵn'},
     {s:'N + 都是现成的',m:'… đều có sẵn cả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm luận văn không thể chép đáp án có sẵn trên mạng.',answer:'写论文不能抄网上现成的答案。',answerPy:'Xiě lùnwén bù néng chāo wǎngshang xiànchéng de dá\'àn.',
      note:'Định ngữ nhiều tầng: 网上 + 现成的 + 答案 (ôn HSK 4–5).',pair:'多层定语'},
     {promptLang:'vi',prompt:'Đồ đạc trong nhà đều có sẵn, cậu chỉ cần xách vali vào ở là được.',answer:'房子里的家具都是现成的，你只要拎着箱子住进去就行了。',answerPy:'Fángzi li de jiājù dōu shì xiànchéng de, nǐ zhǐyào līnzhe xiāngzi zhù jinqu jiù xíng le.',
      note:'只要……就行了 (ôn HSK 4).',pair:'只要……就……'}
   ]},

  {n:37,zh:'谢绝',py:'xièjué',pos:'Động từ',vn:'từ chối khéo, khước từ',hv:'tạ tuyệt',em:'🙅',lesson:1,
   explain:['Từ chối một cách lịch sự, khách sáo (谢 = cảm tạ, 绝 = cự tuyệt): 谢绝参观 (miễn tham quan), 谢绝还价 (không mặc cả), 谢绝了他的好意.','Hay gặp trên biển báo, thông báo: 谢绝参观, 谢绝外带食品. Nhẹ nhàng, trang trọng hơn 拒绝.'],
   usage:'谢绝 + 参观 / 还价 / 采访 / 好意 / 邀请; 婉言谢绝.',
   collo:['谢绝还价','谢绝参观','婉言谢绝','谢绝了好意'],
   ex_zh:'“谢绝”还价的理由',ex_py:'“xièjué” huánjià de lǐyóu',ex_vn:'Lý do để từ chối mặc cả',
   exList:[
     {zh:'什么“这是纯手工的”“残次品不可避免”这些现成的“谢绝”还价的理由他一条也说不出来。',py:'Shénme “zhè shì chún shǒugōng de” “cáncìpǐn bù kě bìmiǎn” zhèxiē xiànchéng de “xièjué” huánjià de lǐyóu tā yì tiáo yě shuō bu chūlai.',vn:'Nào là "làm hoàn toàn bằng tay", "hàng lỗi khó tránh" — những lý do sẵn có để từ chối mặc cả ấy anh ấy chẳng nói ra được câu nào.'},
     {zh:'由于此地涉及国家机密，所以谢绝参观。',py:'Yóuyú cǐ dì shèjí guójiā jīmì, suǒyǐ xièjué cānguān.',vn:'Vì nơi này liên quan đến bí mật quốc gia nên miễn tham quan.'},
     {zh:'他婉言谢绝了朋友的邀请，留在家里复习。',py:'Tā wǎnyán xièjuéle péngyou de yāoqǐng, liú zài jiā li fùxí.',vn:'Anh ấy khéo léo từ chối lời mời của bạn, ở nhà ôn bài.'}
   ],
   colloFull:[
     {zh:'谢绝还价',py:'xièjué huánjià',vn:'không nhận mặc cả'},
     {zh:'谢绝参观',py:'xièjué cānguān',vn:'miễn tham quan'},
     {zh:'婉言谢绝',py:'wǎnyán xièjué',vn:'khéo léo từ chối'},
     {zh:'谢绝了好意',py:'xièjuéle hǎoyì',vn:'từ chối ý tốt'},
     {zh:'谢绝采访',py:'xièjué cǎifǎng',vn:'từ chối phỏng vấn'}
   ],
   patterns:[
     {s:'（此处）谢绝 + 参观 / 拍照',m:'Biển báo: miễn …'},
     {s:'S + 婉言谢绝了 + ……的邀请 / 好意',m:'Khéo léo từ chối …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để không làm phiền bệnh nhân, bệnh viện từ chối người nhà vào thăm sau chín giờ tối.',answer:'为了不打扰病人，医院晚上九点以后谢绝家属探望。',answerPy:'Wèile bù dǎrǎo bìngrén, yīyuàn wǎnshang jiǔ diǎn yǐhòu xièjué jiāshǔ tànwàng.',
      note:'为了…… nêu mục đích (ôn HSK 4).',pair:'为了……'},
     {promptLang:'vi',prompt:'Tuy công ty trả lương cao, anh ấy vẫn khéo léo từ chối.',answer:'尽管公司给的工资很高，他还是婉言谢绝了。',answerPy:'Jǐnguǎn gōngsī gěi de gōngzī hěn gāo, tā háishi wǎnyán xièjué le.',
      note:'尽管……还是…… (ôn HSK 5).',pair:'尽管……还是……'}
   ]},

  {n:38,zh:'故乡',py:'gùxiāng',pos:'Danh từ',vn:'quê hương, quê nhà',hv:'cố hương',em:'🏡',lesson:1,
   explain:['Nơi mình sinh ra, lớn lên (thường nói khi đã rời xa). Văn viết, giàu cảm xúc hơn 家乡, 老家.','Nghĩa bóng: nơi khởi nguồn của một sự vật: 年画的故乡 (quê hương của tranh Tết), 茶的故乡.'],
   usage:'……的故乡; 回到 / 离开 / 思念 + 故乡; 第二故乡.',
   collo:['年画的故乡','思念故乡','离开故乡','第二故乡'],
   ex_zh:'在年画的故乡出生、长大',ex_py:'zài niánhuà de gùxiāng chūshēng, zhǎngdà',ex_vn:'Sinh ra và lớn lên ở quê hương của tranh Tết',
   exList:[
     {zh:'他在年画的故乡出生、长大，从小就画年画。',py:'Tā zài niánhuà de gùxiāng chūshēng, zhǎngdà, cóngxiǎo jiù huà niánhuà.',vn:'Anh ấy sinh ra, lớn lên ở quê hương của tranh Tết, từ nhỏ đã vẽ tranh Tết.'},
     {zh:'离开故乡十几年了，他仍然常常思念那里的一草一木。',py:'Líkāi gùxiāng shí jǐ nián le, tā réngrán chángcháng sīniàn nàlǐ de yì cǎo yí mù.',vn:'Xa quê hơn mười năm rồi, ông ấy vẫn thường nhớ từng ngọn cỏ, cành cây nơi ấy.'},
     {zh:'在中国留学四年，北京已经成了我的第二故乡。',py:'Zài Zhōngguó liúxué sì nián, Běijīng yǐjīng chéngle wǒ de dì-èr gùxiāng.',vn:'Du học ở Trung Quốc bốn năm, Bắc Kinh đã trở thành quê hương thứ hai của tôi.'}
   ],
   colloFull:[
     {zh:'年画的故乡',py:'niánhuà de gùxiāng',vn:'quê hương tranh Tết'},
     {zh:'思念故乡',py:'sīniàn gùxiāng',vn:'nhớ quê'},
     {zh:'离开故乡',py:'líkāi gùxiāng',vn:'xa quê'},
     {zh:'第二故乡',py:'dì-èr gùxiāng',vn:'quê hương thứ hai'},
     {zh:'回到故乡',py:'huídào gùxiāng',vn:'trở về quê'}
   ],
   patterns:[
     {s:'A + 是 + B + 的故乡',m:'A là quê hương / nơi khởi nguồn của B'},
     {s:'离开故乡 + 时段 + 了，仍然……',m:'Xa quê bao lâu rồi mà vẫn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làng Đông Hồ được gọi là quê hương của tranh dân gian Việt Nam.',answer:'东湖村被称为越南民间版画的故乡。',answerPy:'Dōnghú Cūn bèi chēngwéi Yuènán mínjiān bǎnhuà de gùxiāng.',
      note:'被称为…… = được gọi là (bị động, ôn HSK 5).',pair:'被称为……'},
     {promptLang:'vi',prompt:'Càng xa quê lâu, tôi càng nhớ những món ăn của mẹ.',answer:'离开故乡越久，我就越想念妈妈做的菜。',answerPy:'Líkāi gùxiāng yuè jiǔ, wǒ jiù yuè xiǎngniàn māma zuò de cài.',
      note:'越……越…… (ôn HSK 4) — so với 愈……愈…… (điểm ngữ pháp 2, văn viết).',pair:'越……越……'}
   ]},

  {n:39,zh:'扎实',py:'zhāshi',pos:'Tính từ',vn:'vững chắc, chắc chắn, chắc chân',hv:'trát thực',em:'🧱',lesson:1,
   explain:['(Kiến thức, kỹ năng, công việc) vững vàng, thực chất, không qua loa: 基本功扎实, 基础扎实, 学得很扎实.','Khác 结实 (chắc, bền — nói đồ vật, thân thể): 扎实 thiên về năng lực, học vấn, cách làm. Lặp: 扎扎实实 (một cách chắc chắn).'],
   usage:'基本功 / 基础 / 知识 + 扎实; 打下扎实的基础; 扎扎实实地 + V.',
   collo:['基本功扎实','扎实的基础','扎扎实实地学','工作扎实'],
   ex_zh:'基本功扎实',ex_py:'jīběngōng zhāshi',ex_vn:'Kỹ năng cơ bản vững vàng',
   exList:[
     {zh:'他从小就画年画，基本功扎实。',py:'Tā cóngxiǎo jiù huà niánhuà, jīběngōng zhāshi.',vn:'Anh ấy từ nhỏ đã vẽ tranh Tết, nền tảng kỹ năng rất vững.'},
     {zh:'首先要确立自己的目标，给自己打下扎实的基础。',py:'Shǒuxiān yào quèlì zìjǐ de mùbiāo, gěi zìjǐ dǎxià zhāshi de jīchǔ.',vn:'Trước hết phải xác lập mục tiêu của mình, tạo cho mình nền tảng vững chắc.'},
     {zh:'学外语没有捷径，只能扎扎实实地一步一步来。',py:'Xué wàiyǔ méiyǒu jiéjìng, zhǐ néng zhāzhāshíshí de yí bù yí bù lái.',vn:'Học ngoại ngữ không có đường tắt, chỉ có thể chắc chắn từng bước một.'}
   ],
   colloFull:[
     {zh:'基本功扎实',py:'jīběngōng zhāshi',vn:'kỹ năng cơ bản vững'},
     {zh:'扎实的基础',py:'zhāshi de jīchǔ',vn:'nền tảng vững chắc'},
     {zh:'扎扎实实地学',py:'zhāzhāshíshí de xué',vn:'học một cách chắc chắn'},
     {zh:'工作扎实',py:'gōngzuò zhāshi',vn:'làm việc chắc chắn'},
     {zh:'知识扎实',py:'zhīshi zhāshi',vn:'kiến thức vững'}
   ],
   patterns:[
     {s:'给自己 / 为……打下 + 扎实的基础',m:'Tạo nền tảng vững chắc'},
     {s:'扎扎实实地 + V',m:'Làm … một cách chắc chắn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có nền tảng vững chắc thì mới học lên cao được.',answer:'只有基础扎实，才能继续往上学。',answerPy:'Zhǐyǒu jīchǔ zhāshi, cái néng jìxù wǎng shàng xué.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Thà học chậm mà chắc, còn hơn học nhanh mà quên hết.',answer:'宁可学得慢一点儿、扎实一点儿，也不要学得快却全忘了。',answerPy:'Nìngkě xué de màn yìdiǎnr, zhāshi yìdiǎnr, yě búyào xué de kuài què quán wàng le.',
      note:'宁可……也不…… (ôn HSK 5).',pair:'宁可……也不……'}
   ]},

  {n:40,zh:'塑造',py:'sùzào',pos:'Động từ',vn:'đắp nặn; xây dựng (hình tượng nghệ thuật)',hv:'tố tạo',em:'🗿',lesson:1,
   explain:['Nghĩa gốc: dùng đất, thạch cao… nặn tạo hình (塑 = nặn tượng).','Nghĩa thường dùng: dùng ngôn ngữ, đường nét, diễn xuất để xây dựng hình tượng nhân vật: 人物塑造, 塑造了一个……的形象; mở rộng: 塑造性格 (hun đúc tính cách).'],
   usage:'塑造 + 形象 / 人物 / 性格; 人物塑造; 成功地塑造了……',
   collo:['人物塑造','塑造形象','塑造性格','成功地塑造'],
   ex_zh:'人物塑造',ex_py:'rénwù sùzào',ex_vn:'Xây dựng nhân vật',
   exList:[
     {zh:'他对年画的构图创作、人物塑造、雕版手法、颜料加工等进行了广泛的研究。',py:'Tā duì niánhuà de gòutú chuàngzuò, rénwù sùzào, diāobǎn shǒufǎ, yánliào jiāgōng děng jìnxíngle guǎngfàn de yánjiū.',vn:'Anh ấy đã nghiên cứu rộng về bố cục sáng tác, xây dựng nhân vật, thủ pháp khắc bản, gia công màu vẽ của tranh Tết.'},
     {zh:'这部小说成功地塑造了一位勇敢的女英雄形象。',py:'Zhè bù xiǎoshuō chénggōng de sùzàole yí wèi yǒnggǎn de nǚ yīngxióng xíngxiàng.',vn:'Cuốn tiểu thuyết này đã xây dựng thành công hình tượng một nữ anh hùng dũng cảm.'},
     {zh:'家庭环境对孩子性格的塑造有很大影响。',py:'Jiātíng huánjìng duì háizi xìnggé de sùzào yǒu hěn dà yǐngxiǎng.',vn:'Môi trường gia đình ảnh hưởng rất lớn đến việc hình thành tính cách của trẻ.'}
   ],
   colloFull:[
     {zh:'人物塑造',py:'rénwù sùzào',vn:'xây dựng nhân vật'},
     {zh:'塑造形象',py:'sùzào xíngxiàng',vn:'xây dựng hình tượng'},
     {zh:'塑造性格',py:'sùzào xìnggé',vn:'hun đúc tính cách'},
     {zh:'成功地塑造',py:'chénggōng de sùzào',vn:'xây dựng thành công'},
     {zh:'塑造了一个……的形象',py:'sùzàole yí ge…… de xíngxiàng',vn:'xây dựng hình tượng một …'}
   ],
   patterns:[
     {s:'作品 + 塑造了 + 一个……的形象',m:'Tác phẩm xây dựng hình tượng …'},
     {s:'A + 对 + B的塑造 + 有影响',m:'A ảnh hưởng đến việc hình thành B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Diễn viên này đã xây dựng thành công hình tượng một người thầy tận tuỵ.',answer:'这位演员成功地塑造了一位尽职尽责的老师形象。',answerPy:'Zhè wèi yǎnyuán chénggōng de sùzàole yí wèi jìnzhí-jìnzé de lǎoshī xíngxiàng.',
      note:'Adj + 地 + V (trạng ngữ, ôn HSK 4).',pair:'Adj + 地 + V'},
     {promptLang:'vi',prompt:'Không chỉ nhà trường mà cả xã hội đều ảnh hưởng đến việc hình thành nhân cách của thanh thiếu niên.',answer:'不仅学校，整个社会都会影响青少年人格的塑造。',answerPy:'Bùjǐn xuéxiào, zhěnggè shèhuì dōu huì yǐngxiǎng qīngshàonián réngé de sùzào.',
      note:'不仅……（而且）都…… (ôn HSK 4–5).',pair:'不仅……'}
   ]},

  {n:41,zh:'手法',py:'shǒufǎ',pos:'Danh từ',vn:'thủ pháp, kỹ năng, kỹ xảo',hv:'thủ pháp',em:'✋',lesson:1,
   explain:['Kỹ xảo, cách thể hiện trong nghệ thuật, văn học: 雕版手法, 绘画手法, 表现手法, 修辞手法.','Còn có nghĩa xấu: mánh khoé, thủ đoạn (≈ 手段): 惯用的欺骗手法.'],
   usage:'绘画 / 雕版 / 表现 / 修辞 + 手法; 手法 + 娴熟 / 新颖 / 独特.',
   collo:['雕版手法','绘画手法','手法娴熟','修辞手法'],
   ex_zh:'雕版手法',ex_py:'diāobǎn shǒufǎ',ex_vn:'Thủ pháp khắc bản',
   exList:[
     {zh:'他对年画的雕版手法、颜料加工等进行了广泛的研究。',py:'Tā duì niánhuà de diāobǎn shǒufǎ, yánliào jiāgōng děng jìnxíngle guǎngfàn de yánjiū.',vn:'Anh ấy đã nghiên cứu rộng về thủ pháp khắc bản, gia công màu của tranh Tết.'},
     {zh:'儿子的绘画手法越来越娴熟。',py:'Érzi de huìhuà shǒufǎ yuè lái yuè xiánshú.',vn:'Kỹ thuật vẽ của con trai ngày càng thuần thục.'},
     {zh:'这首诗运用了比喻和夸张的修辞手法。',py:'Zhè shǒu shī yùnyòngle bǐyù hé kuāzhāng de xiūcí shǒufǎ.',vn:'Bài thơ này dùng biện pháp tu từ so sánh và phóng đại.'}
   ],
   colloFull:[
     {zh:'雕版手法',py:'diāobǎn shǒufǎ',vn:'thủ pháp khắc bản'},
     {zh:'绘画手法',py:'huìhuà shǒufǎ',vn:'kỹ thuật vẽ'},
     {zh:'手法娴熟',py:'shǒufǎ xiánshú',vn:'kỹ thuật thuần thục'},
     {zh:'修辞手法',py:'xiūcí shǒufǎ',vn:'biện pháp tu từ'},
     {zh:'表现手法',py:'biǎoxiàn shǒufǎ',vn:'thủ pháp biểu hiện'}
   ],
   patterns:[
     {s:'运用了 + ……的手法',m:'Sử dụng thủ pháp …'},
     {s:'……手法 + 越来越娴熟',m:'Kỹ thuật ngày càng thuần thục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài văn này dùng thủ pháp lặp lại từ khoá, khiến chủ đề ngày càng nổi bật.',answer:'这篇文章用了重复关键词的手法，使主题越来越突出。',answerPy:'Zhè piān wénzhāng yòngle chóngfù guānjiàncí de shǒufǎ, shǐ zhǔtí yuè lái yuè tūchū.',
      note:'使 + O + Adj (câu kiêm ngữ, ôn HSK 5); 篇章修辞 của bài.',pair:'使 + 人/事 + ……'},
     {promptLang:'vi',prompt:'Tuy thủ pháp của hai hoạ sĩ khác nhau, nhưng tác phẩm đều rất sống động.',answer:'两位画家的手法虽然不同，但作品都很生动。',answerPy:'Liǎng wèi huàjiā de shǒufǎ suīrán bù tóng, dàn zuòpǐn dōu hěn shēngdòng.',
      note:'虽然 đặt sau chủ ngữ (ôn HSK 4).',pair:'S + 虽然……但……'}
   ]},

  {n:42,zh:'派别',py:'pàibié',pos:'Danh từ',vn:'phe phái, trường phái',hv:'phái biệt',em:'🏳️',lesson:1,
   explain:['Nhóm người, trường phái chia ra theo quan điểm, phong cách khác nhau trong học thuật, tôn giáo, nghệ thuật, chính trị: 不分派别, 学术派别.','Gần 流派 (trường phái nghệ thuật, văn học); 派别 dùng rộng hơn và có thể mang ý "bè phái".'],
   usage:'不分派别; 各个派别; ……派别之间; 学术 / 艺术 / 宗教 + 派别.',
   collo:['不分派别','各个派别','艺术派别','派别之争'],
   ex_zh:'中国年画虽不分派别',ex_py:'Zhōngguó niánhuà suī bù fēn pàibié',ex_vn:'Tranh Tết Trung Quốc tuy không chia trường phái',
   exList:[
     {zh:'中国年画虽不分派别，但不同地区的年画各有所长。',py:'Zhōngguó niánhuà suī bù fēn pàibié, dàn bù tóng dìqū de niánhuà gè yǒu suǒ cháng.',vn:'Tranh Tết Trung Quốc tuy không chia trường phái, nhưng tranh của mỗi vùng đều có thế mạnh riêng.'},
     {zh:'这次研讨会邀请了各个派别的专家。',py:'Zhè cì yántǎohuì yāoqǐngle gègè pàibié de zhuānjiā.',vn:'Hội thảo lần này mời chuyên gia thuộc đủ các trường phái.'},
     {zh:'公司里如果派别之争太多，工作就很难开展。',py:'Gōngsī li rúguǒ pàibié zhī zhēng tài duō, gōngzuò jiù hěn nán kāizhǎn.',vn:'Trong công ty nếu tranh giành bè phái quá nhiều thì công việc rất khó triển khai.'}
   ],
   colloFull:[
     {zh:'不分派别',py:'bù fēn pàibié',vn:'không chia trường phái'},
     {zh:'各个派别',py:'gègè pàibié',vn:'các phe phái'},
     {zh:'艺术派别',py:'yìshù pàibié',vn:'trường phái nghệ thuật'},
     {zh:'派别之争',py:'pàibié zhī zhēng',vn:'tranh chấp bè phái'},
     {zh:'学术派别',py:'xuéshù pàibié',vn:'trường phái học thuật'}
   ],
   patterns:[
     {s:'A + 虽不分派别，但……',m:'A tuy không chia trường phái nhưng …'},
     {s:'各个派别的 + N',m:'… của các trường phái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù thuộc trường phái nào, chỉ cần có sở trường đều đáng để học hỏi.',answer:'无论属于哪个派别，只要有长处，都值得学习。',answerPy:'Wúlùn shǔyú nǎge pàibié, zhǐyào yǒu chángchu, dōu zhídé xuéxí.',
      note:'无论……都……; 值得 + V (ôn HSK 4–5).',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Hai trường phái này quan điểm khác nhau, thường tranh luận không ngớt.',answer:'这两个派别观点不同，常常争论个不停。',answerPy:'Zhè liǎng ge pàibié guāndiǎn bù tóng, chángcháng zhēnglùn ge bù tíng.',
      note:'V + 个 + 不停 (HSK 6 bài 28 — cấu trúc với 个).',pair:'V个不停'}
   ]},

  {n:43,zh:'借鉴',py:'jièjiàn',pos:'Động từ',vn:'lấy làm gương, tham khảo, học hỏi',hv:'tá giám',em:'🔍',lesson:1,
   explain:['Lấy kinh nghiệm, cách làm của người khác để đối chiếu, học hỏi (鉴 = gương soi): 借鉴经验, 值得借鉴, 学习借鉴.','Khác 参考 (tham khảo tài liệu, ý kiến — trung tính): 借鉴 nhấn "rút kinh nghiệm để làm tốt hơn cho mình", thường là kinh nghiệm, mô hình, cách làm.'],
   usage:'借鉴 + 经验 / 做法 / 方法 / 模式; 值得借鉴; 学习借鉴; 可供借鉴.',
   collo:['值得借鉴','借鉴经验','学习借鉴','借鉴别人的做法'],
   ex_zh:'都值得学习借鉴',ex_py:'dōu zhídé xuéxí jièjiàn',ex_vn:'Đều đáng để học hỏi',
   exList:[
     {zh:'不同地区的年画各有所长，都值得学习借鉴。',py:'Bù tóng dìqū de niánhuà gè yǒu suǒ cháng, dōu zhídé xuéxí jièjiàn.',vn:'Tranh Tết mỗi vùng đều có thế mạnh riêng, đều đáng để học hỏi.'},
     {zh:'多借鉴别人成功的经验，可以少走弯路。',py:'Duō jièjiàn biérén chénggōng de jīngyàn, kěyǐ shǎo zǒu wānlù.',vn:'Học hỏi nhiều kinh nghiệm thành công của người khác thì có thể bớt đi đường vòng.'},
     {zh:'这所学校的管理模式很有借鉴意义。',py:'Zhè suǒ xuéxiào de guǎnlǐ móshì hěn yǒu jièjiàn yìyì.',vn:'Mô hình quản lý của trường này rất có giá trị để học hỏi.'}
   ],
   colloFull:[
     {zh:'值得借鉴',py:'zhídé jièjiàn',vn:'đáng học hỏi'},
     {zh:'借鉴经验',py:'jièjiàn jīngyàn',vn:'học hỏi kinh nghiệm'},
     {zh:'学习借鉴',py:'xuéxí jièjiàn',vn:'học tập, học hỏi'},
     {zh:'借鉴别人的做法',py:'jièjiàn biérén de zuòfǎ',vn:'học cách làm của người khác'},
     {zh:'有借鉴意义',py:'yǒu jièjiàn yìyì',vn:'có giá trị tham khảo'}
   ],
   patterns:[
     {s:'……值得（我们）学习借鉴',m:'… đáng để (chúng ta) học hỏi'},
     {s:'借鉴 + ……的经验 / 做法',m:'Học hỏi kinh nghiệm / cách làm của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta có thể học hỏi cách làm của nước ngoài, nhưng không thể rập khuôn hoàn toàn.',answer:'我们可以借鉴国外的做法，但不能完全照搬。',answerPy:'Wǒmen kěyǐ jièjiàn guówài de zuòfǎ, dàn bù néng wánquán zhàobān.',
      note:'可以……，但不能…… (ôn HSK 4); 照搬 = rập khuôn.',pair:'可以……但不能……'},
     {promptLang:'vi',prompt:'Kinh nghiệm của anh ấy rất đáng để những người mới vào nghề học hỏi.',answer:'他的经验很值得刚入行的人借鉴。',answerPy:'Tā de jīngyàn hěn zhídé gāng rù háng de rén jièjiàn.',
      note:'值得 + người + V (ôn HSK 4–5).',pair:'值得……'}
   ]},

  {n:44,zh:'再接再厉',py:'zàijiē-zàilì',pos:'Thành ngữ',vn:'không ngừng cố gắng, cố gắng hơn nữa',hv:'tái tiếp tái lệ',em:'💪',lesson:1,
   explain:['Nguyên là chọi gà: mỗi lần giao đấu lại mài mỏ cho sắc (厉 = 砺, mài). Nghĩa: tiếp tục nỗ lực, cố gắng hơn nữa, không dừng lại khi đã có thành tích.','Hay dùng để động viên, khen: 希望你再接再厉！ Viết 厉, không viết *励 (lỗi chính tả thường gặp).'],
   usage:'（希望 / 请）+ 再接再厉; S + 再接再厉，……; 再接再厉，争取……',
   collo:['希望你再接再厉','他再接再厉','再接再厉，争取更好','继续再接再厉'],
   ex_zh:'他再接再厉',ex_py:'tā zàijiē-zàilì',ex_vn:'Anh ấy không ngừng cố gắng',
   exList:[
     {zh:'于是，他再接再厉，数年间走遍了全国各大年画产地。',py:'Yúshì, tā zàijiē-zàilì, shù nián jiān zǒubiànle quánguó gè dà niánhuà chǎndì.',vn:'Thế là anh ấy không ngừng cố gắng, trong vài năm đã đi khắp các vùng sản xuất tranh Tết lớn trong cả nước.'},
     {zh:'这次考得不错，希望你再接再厉，争取下次考得更好。',py:'Zhè cì kǎo de búcuò, xīwàng nǐ zàijiē-zàilì, zhēngqǔ xià cì kǎo de gèng hǎo.',vn:'Lần này thi khá tốt, mong em cố gắng hơn nữa, phấn đấu lần sau thi tốt hơn.'},
     {zh:'球队拿到了第一场胜利，大家决心再接再厉。',py:'Qiúduì nádàole dì-yī chǎng shènglì, dàjiā juéxīn zàijiē-zàilì.',vn:'Đội bóng giành chiến thắng trận đầu, mọi người quyết tâm cố gắng hơn nữa.'}
   ],
   colloFull:[
     {zh:'希望你再接再厉',py:'xīwàng nǐ zàijiē-zàilì',vn:'mong bạn cố gắng hơn nữa'},
     {zh:'他再接再厉',py:'tā zàijiē-zàilì',vn:'anh ấy không ngừng cố gắng'},
     {zh:'再接再厉，争取更好',py:'zàijiē-zàilì, zhēngqǔ gèng hǎo',vn:'cố gắng hơn nữa, phấn đấu tốt hơn'},
     {zh:'决心再接再厉',py:'juéxīn zàijiē-zàilì',vn:'quyết tâm cố gắng hơn nữa'},
     {zh:'继续再接再厉',py:'jìxù zàijiē-zàilì',vn:'tiếp tục nỗ lực'}
   ],
   patterns:[
     {s:'希望 + 你 + 再接再厉，争取……',m:'Lời động viên sau khi đạt thành tích'},
     {s:'S + 再接再厉，+ 结果',m:'S tiếp tục nỗ lực và đạt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đã đạt giải nhì, nhưng cô ấy vẫn quyết tâm cố gắng hơn nữa.',answer:'虽然已经得了二等奖，但她还是决心再接再厉。',answerPy:'Suīrán yǐjīng déle èr děng jiǎng, dàn tā háishi juéxīn zàijiē-zàilì.',
      note:'虽然……但……还是…… (ôn HSK 4).',pair:'虽然……还是……'},
     {promptLang:'vi',prompt:'Các em đã làm rất tốt, mong các em tiếp tục cố gắng, đừng kiêu ngạo.',answer:'你们做得很好，希望你们再接再厉，不要骄傲。',answerPy:'Nǐmen zuò de hěn hǎo, xīwàng nǐmen zàijiē-zàilì, búyào jiāo\'ào.',
      note:'V + 得 + 很好 (bổ ngữ trạng thái, ôn HSK 3–4).',pair:'V + 得 + ……'}
   ]},

  {n:45,zh:'心得',py:'xīndé',pos:'Danh từ',vn:'sự am hiểu, điều tâm đắc, kinh nghiệm rút ra',hv:'tâm đắc',em:'📝',lesson:1,
   explain:['Những hiểu biết, kinh nghiệm, cảm nhận rút ra được qua học tập, làm việc: 学习心得, 交流心得, 读书心得, 写心得.','BẪY Hán–Việt: tiếng Việt "tâm đắc" thường là tính từ/động từ (ưng ý, rất đồng tình); 心得 tiếng Trung là DANH TỪ "điều rút ra, bài thu hoạch".'],
   usage:'交流 / 分享 / 谈 / 写 + 心得; 学习 / 读书 / 艺术 + 心得; 心得体会.',
   collo:['交流艺术心得','分享心得','学习心得','心得体会'],
   ex_zh:'交流艺术心得',ex_py:'jiāoliú yìshù xīndé',ex_vn:'Trao đổi kinh nghiệm nghệ thuật',
   exList:[
     {zh:'走进大学和师生就相关主题进行研讨，交流艺术心得，他从不缺席。',py:'Zǒujìn dàxué hé shīshēng jiù xiāngguān zhǔtí jìnxíng yántǎo, jiāoliú yìshù xīndé, tā cóng bù quēxí.',vn:'Vào các trường đại học thảo luận với thầy trò về những chủ đề liên quan, trao đổi kinh nghiệm nghệ thuật — anh ấy chưa bao giờ vắng mặt.'},
     {zh:'他愿意与大家一起分享画画儿的心得。',py:'Tā yuànyì yǔ dàjiā yìqǐ fēnxiǎng huà huàr de xīndé.',vn:'Cậu ấy sẵn lòng chia sẻ với mọi người những điều rút ra từ việc vẽ tranh.'},
     {zh:'老师让我们读完这本书以后写一篇读书心得。',py:'Lǎoshī ràng wǒmen dúwán zhè běn shū yǐhòu xiě yì piān dúshū xīndé.',vn:'Thầy bảo chúng tôi đọc xong cuốn sách này thì viết một bài cảm nhận.'}
   ],
   colloFull:[
     {zh:'交流艺术心得',py:'jiāoliú yìshù xīndé',vn:'trao đổi kinh nghiệm nghệ thuật'},
     {zh:'分享心得',py:'fēnxiǎng xīndé',vn:'chia sẻ điều rút ra'},
     {zh:'学习心得',py:'xuéxí xīndé',vn:'kinh nghiệm học tập'},
     {zh:'心得体会',py:'xīndé tǐhuì',vn:'cảm nhận, thu hoạch'},
     {zh:'读书心得',py:'dúshū xīndé',vn:'cảm nhận khi đọc sách'}
   ],
   patterns:[
     {s:'（与 / 和 + 人）+ 分享 / 交流 + ……心得',m:'Chia sẻ / trao đổi điều rút ra'},
     {s:'写一篇 + ……心得',m:'Viết một bài thu hoạch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi thi xong, cả lớp ngồi lại chia sẻ kinh nghiệm ôn thi.',answer:'考完试以后，全班同学坐在一起分享复习心得。',answerPy:'Kǎowán shì yǐhòu, quán bān tóngxué zuò zài yìqǐ fēnxiǎng fùxí xīndé.',
      note:'V完 + O + 以后 (ôn HSK 4); 考完试 — li hợp.',pair:'V完……以后'},
     {promptLang:'vi',prompt:'Bạn có kinh nghiệm học chữ Hán gì hay không, nói cho mọi người nghe với?',answer:'你有什么学汉字的心得，给大家说说吧？',answerPy:'Nǐ yǒu shénme xué Hànzì de xīndé, gěi dàjiā shuōshuo ba?',
      note:'Động từ lặp 说说 (nhẹ nhàng), 吧 đề nghị (ôn HSK 3–4).',pair:'VV + 吧'}
   ]},

  {n:46,zh:'缺席',py:'quē xí',pos:'Động từ (li hợp)',vn:'vắng mặt (họp), nghỉ học',hv:'khuyết tịch',em:'🪑',lesson:1,
   explain:['Không có mặt ở buổi họp, lớp học, hoạt động phải tham gia (席 = chỗ ngồi): 缺席会议, 从不缺席, 缺了两次席.','Trái nghĩa: 出席 (có mặt). Văn cảnh trang trọng hơn 没来.'],
   usage:'（从不 / 很少）+ 缺席; 缺席 + 会议 / 比赛; 缺了……次席; 因病缺席.',
   collo:['从不缺席','缺席会议','因病缺席','缺席的人'],
   ex_zh:'他从不缺席',ex_py:'tā cóng bù quēxí',ex_vn:'Anh ấy chưa bao giờ vắng mặt',
   exList:[
     {zh:'参加民俗文化巡展，交流艺术心得，他从不缺席。',py:'Cānjiā mínsú wénhuà xúnzhǎn, jiāoliú yìshù xīndé, tā cóng bù quēxí.',vn:'Tham gia triển lãm lưu động văn hoá dân gian, trao đổi kinh nghiệm nghệ thuật — anh ấy không bao giờ vắng mặt.'},
     {zh:'小王因病缺席了今天的会议。',py:'Xiǎo Wáng yīn bìng quēxíle jīntiān de huìyì.',vn:'Tiểu Vương vì ốm nên vắng mặt cuộc họp hôm nay.'},
     {zh:'这学期他一次课都没缺过席。',py:'Zhè xuéqī tā yí cì kè dōu méi quēguo xí.',vn:'Học kỳ này cậu ấy chưa nghỉ buổi học nào.'}
   ],
   colloFull:[
     {zh:'从不缺席',py:'cóng bù quēxí',vn:'chưa bao giờ vắng mặt'},
     {zh:'缺席会议',py:'quēxí huìyì',vn:'vắng mặt cuộc họp'},
     {zh:'因病缺席',py:'yīn bìng quēxí',vn:'vắng mặt vì ốm'},
     {zh:'缺席的人',py:'quēxí de rén',vn:'người vắng mặt'},
     {zh:'没缺过席',py:'méi quēguo xí',vn:'chưa từng vắng mặt'}
   ],
   patterns:[
     {s:'S + 从不 / 很少 + 缺席',m:'S không bao giờ / ít khi vắng mặt'},
     {s:'S + 因 + 原因 + 缺席了 + ……',m:'S vắng mặt … vì lý do …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không có lý do đặc biệt, không ai được vắng mặt buổi họp phụ huynh.',answer:'如果没有特殊原因，谁都不能缺席家长会。',answerPy:'Rúguǒ méiyǒu tèshū yuányīn, shéi dōu bù néng quēxí jiāzhǎnghuì.',
      note:'谁都不…… (đại từ nghi vấn phiếm chỉ, ôn HSK 4).',pair:'谁都……'},
     {promptLang:'vi',prompt:'Dù bận đến đâu, buổi luyện tập hằng tuần cô ấy cũng chưa từng vắng mặt.',answer:'不管多忙，每周的训练她都没缺过席。',answerPy:'Bùguǎn duō máng, měi zhōu de xùnliàn tā dōu méi quēguo xí.',
      note:'Li hợp: 缺 + 过 + 席; 不管……都…….',pair:'不管……都……'}
   ]},

  {n:47,zh:'干劲',py:'gànjìn',pos:'Danh từ',vn:'tinh thần hăng hái, sự hăng say',hv:'cán kình',em:'🔥',lesson:1,
   explain:['Tinh thần hăng hái, nhiệt tình khi làm việc (干 = làm, 劲 = sức): 干劲十足, 干劲很大, 鼓足干劲.','劲 đọc jìn. Hay đi với 十足 / 冲天 / 很大 / 鼓足.'],
   usage:'干劲 + 十足 / 很大 / 冲天; 鼓足干劲; 有 / 没有 + 干劲.',
   collo:['干劲十足','鼓足干劲','干劲很大','没有干劲'],
   ex_zh:'他总是干劲十足',ex_py:'tā zǒngshì gànjìn shízú',ex_vn:'Anh ấy lúc nào cũng hăng say',
   exList:[
     {zh:'张光宁一年到头真够忙的，可他总是干劲十足。',py:'Zhāng Guāngníng yì nián dào tóu zhēn gòu máng de, kě tā zǒngshì gànjìn shízú.',vn:'Trương Quang Ninh quanh năm suốt tháng bận rộn thật, vậy mà lúc nào cũng hăng say.'},
     {zh:'新来的年轻人干劲很大，什么活儿都抢着干。',py:'Xīn lái de niánqīngrén gànjìn hěn dà, shénme huór dōu qiǎngzhe gàn.',vn:'Những người trẻ mới đến rất hăng hái, việc gì cũng tranh làm.'},
     {zh:'离考试只剩一个月了，大家要鼓足干劲。',py:'Lí kǎoshì zhǐ shèng yí ge yuè le, dàjiā yào gǔzú gànjìn.',vn:'Chỉ còn một tháng nữa là thi, mọi người phải dốc hết sức.'}
   ],
   colloFull:[
     {zh:'干劲十足',py:'gànjìn shízú',vn:'hăng say hết mức'},
     {zh:'鼓足干劲',py:'gǔzú gànjìn',vn:'dốc hết nhiệt huyết'},
     {zh:'干劲很大',py:'gànjìn hěn dà',vn:'rất hăng hái'},
     {zh:'没有干劲',py:'méiyǒu gànjìn',vn:'không có hứng làm'},
     {zh:'干劲冲天',py:'gànjìn chōngtiān',vn:'khí thế ngút trời'}
   ],
   patterns:[
     {s:'S + （总是）+ 干劲十足',m:'S lúc nào cũng hăng say'},
     {s:'（大家）要 + 鼓足干劲，……',m:'Phải dốc hết nhiệt huyết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công việc rất vất vả, nhưng nghĩ đến mục tiêu là anh ấy lại hăng say hẳn lên.',answer:'虽然工作很辛苦，但一想到目标，他就干劲十足。',answerPy:'Suīrán gōngzuò hěn xīnkǔ, dàn yì xiǎngdào mùbiāo, tā jiù gànjìn shízú.',
      note:'虽然……但……; 一……就…… (ôn HSK 4).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Làm việc mình thích thì càng làm càng hăng say.',answer:'做自己喜欢的事，越做越有干劲。',answerPy:'Zuò zìjǐ xǐhuan de shì, yuè zuò yuè yǒu gànjìn.',
      note:'越 V 越…… (ôn HSK 4).',pair:'越……越……'}
   ]},

  {n:48,zh:'占据',py:'zhànjù',pos:'Động từ',vn:'chiếm, chiếm giữ',hv:'chiếm cứ',em:'📍',lesson:1,
   explain:['Dùng sức lực / điều kiện để chiếm lấy và giữ (vùng đất, vị trí, thị trường…): 占据市场, 占据有利地位.','Nghĩa bóng: chiếm trọn (thời gian, tâm trí, cuộc đời): 年画占据了我生命的全部. Khác 占 (chiếm, đơn giản, dùng rộng: 占座位, 占百分之三十).'],
   usage:'占据 + 市场 / 地位 / 位置 / 空间; 占据了……的全部; 被……占据.',
   collo:['占据了生命的全部','占据市场','占据有利地位','占据空间'],
   ex_zh:'年画占据了我生命的全部',ex_py:'niánhuà zhànjùle wǒ shēngmìng de quánbù',ex_vn:'Tranh Tết chiếm trọn cuộc đời tôi',
   exList:[
     {zh:'“年画占据了我生命的全部，我喜欢它，热爱它，靠它生活。”',py:'“Niánhuà zhànjùle wǒ shēngmìng de quánbù, wǒ xǐhuan tā, rè\'ài tā, kào tā shēnghuó.”',vn:'"Tranh Tết chiếm trọn cuộc đời tôi, tôi thích nó, yêu nó, sống nhờ nó."'},
     {zh:'这个品牌的手机占据了国内市场的三分之一。',py:'Zhège pǐnpái de shǒujī zhànjùle guónèi shìchǎng de sān fēn zhī yī.',vn:'Điện thoại của hãng này chiếm một phần ba thị trường trong nước.'},
     {zh:'网络游戏占据了他大部分的业余时间。',py:'Wǎngluò yóuxì zhànjùle tā dà bùfen de yèyú shíjiān.',vn:'Game online chiếm phần lớn thời gian rảnh của cậu ấy.'}
   ],
   colloFull:[
     {zh:'占据了生命的全部',py:'zhànjùle shēngmìng de quánbù',vn:'chiếm trọn cuộc đời'},
     {zh:'占据市场',py:'zhànjù shìchǎng',vn:'chiếm lĩnh thị trường'},
     {zh:'占据有利地位',py:'zhànjù yǒulì dìwèi',vn:'chiếm vị thế có lợi'},
     {zh:'占据空间',py:'zhànjù kōngjiān',vn:'chiếm chỗ'},
     {zh:'被……占据',py:'bèi…… zhànjù',vn:'bị … chiếm'}
   ],
   patterns:[
     {s:'A + 占据了 + B的 + 全部 / 大部分',m:'A chiếm trọn / phần lớn B'},
     {s:'A + 占据 + 市场 / 地位',m:'A chiếm lĩnh thị trường / vị thế'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi lên cấp ba, bài tập gần như chiếm hết thời gian của tôi.',answer:'自从上了高中，作业几乎占据了我所有的时间。',answerPy:'Zìcóng shàngle gāozhōng, zuòyè jīhū zhànjùle wǒ suǒyǒu de shíjiān.',
      note:'自从…… (ôn HSK 4); 几乎 = gần như.',pair:'自从……'},
     {promptLang:'vi',prompt:'Muốn chiếm lĩnh thị trường thì sản phẩm phải vừa rẻ vừa tốt.',answer:'要想占据市场，产品就得既便宜又好用。',answerPy:'Yào xiǎng zhànjù shìchǎng, chǎnpǐn jiù děi jì piányi yòu hǎoyòng.',
      note:'既……又…… (ôn HSK 4).',pair:'既……又……'}
   ]},

  {n:49,zh:'确立',py:'quèlì',pos:'Động từ',vn:'xác lập, thiết lập, định rõ',hv:'xác lập',em:'🎯',lesson:1,
   explain:['Xác định và lập ra một cách vững chắc (目标, 地位, 关系, 制度, 信念…): 确立目标, 确立地位.','Trang trọng hơn 定 / 定下; khác 建立 (xây dựng, gây dựng: 建立关系, 建立公司).'],
   usage:'确立 + 目标 / 方向 / 地位 / 制度 / 关系; 已确立; 被确立为…….',
   collo:['确立目标','确立地位','确立方向','确立关系'],
   ex_zh:'他已确立了自己的目标',ex_py:'tā yǐ quèlìle zìjǐ de mùbiāo',ex_vn:'Anh ấy đã xác lập mục tiêu của mình',
   exList:[
     {zh:'他已确立了自己的目标——传播他喜爱的这一民俗文化。',py:'Tā yǐ quèlìle zìjǐ de mùbiāo — chuánbō tā xǐ\'ài de zhè yī mínsú wénhuà.',vn:'Anh ấy đã xác lập mục tiêu của mình — truyền bá nét văn hoá dân gian mà anh yêu thích.'},
     {zh:'想要成就一番事业，首先要确立自己的目标。',py:'Xiǎng yào chéngjiù yì fān shìyè, shǒuxiān yào quèlì zìjǐ de mùbiāo.',vn:'Muốn làm nên sự nghiệp, trước hết phải xác lập mục tiêu của mình.'},
     {zh:'这部作品确立了他在文学界的地位。',py:'Zhè bù zuòpǐn quèlìle tā zài wénxuéjiè de dìwèi.',vn:'Tác phẩm này đã xác lập vị trí của ông trong giới văn học.'}
   ],
   colloFull:[
     {zh:'确立目标',py:'quèlì mùbiāo',vn:'xác lập mục tiêu'},
     {zh:'确立地位',py:'quèlì dìwèi',vn:'xác lập vị trí'},
     {zh:'确立方向',py:'quèlì fāngxiàng',vn:'xác định phương hướng'},
     {zh:'确立关系',py:'quèlì guānxi',vn:'xác lập quan hệ'},
     {zh:'确立制度',py:'quèlì zhìdù',vn:'thiết lập chế độ'}
   ],
   patterns:[
     {s:'首先要 + 确立 + 目标 / 方向',m:'Trước hết phải xác định mục tiêu'},
     {s:'A + 确立了 + B + 在……的地位',m:'A xác lập vị trí của B trong …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi xác lập rõ mục tiêu, cậu mới biết nên cố gắng theo hướng nào.',answer:'只有确立了目标，你才知道该往哪个方向努力。',answerPy:'Zhǐyǒu quèlìle mùbiāo, nǐ cái zhīdào gāi wǎng nǎge fāngxiàng nǔlì.',
      note:'只有……才…… (ôn HSK 4).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Lên lớp mười một, cô ấy đã xác định hướng đi của mình là học ngành y.',answer:'上了高二，她已经确立了自己的方向：学医。',answerPy:'Shàngle gāo\'èr, tā yǐjīng quèlìle zìjǐ de fāngxiàng: xué yī.',
      note:'已经……了 (ôn HSK 3–4).',pair:'已经……了'}
   ]},

  {n:50,zh:'信念',py:'xìnniàn',pos:'Danh từ',vn:'niềm tin, lòng tin, tín niệm',hv:'tín niệm',em:'🕯️',lesson:1,
   explain:['Quan điểm, suy nghĩ mà mình tin chắc là đúng và kiên trì theo đuổi: 他的信念就是……, 必胜的信念, 坚定信念.','Khác 信仰 (từ số 22 — tín ngưỡng, thường gắn tôn giáo, chủ nghĩa) và 信心 (lòng tự tin vào khả năng làm được một việc cụ thể).'],
   usage:'……的信念就是……; 抱着 / 坚持 / 坚定 + 信念; 必胜的信念; 信念 + 坚定.',
   collo:['必胜的信念','坚定信念','抱着信念','他的信念就是'],
   ex_zh:'他的信念就是拓展年画的内容',ex_py:'tā de xìnniàn jiù shì tuòzhǎn niánhuà de nèiróng',ex_vn:'Niềm tin của anh ấy là mở rộng nội dung tranh Tết',
   exList:[
     {zh:'他的信念就是拓展年画的内容，使其雅俗共赏。',py:'Tā de xìnniàn jiù shì tuòzhǎn niánhuà de nèiróng, shǐ qí yǎsú-gòngshǎng.',vn:'Niềm tin của anh ấy chính là mở rộng nội dung tranh Tết, khiến nó ai cũng thưởng thức được.'},
     {zh:'抱着必胜的信念坚持下去，最后的胜利一定属于你。',py:'Bàozhe bìshèng de xìnniàn jiānchí xiàqu, zuìhòu de shènglì yídìng shǔyú nǐ.',vn:'Mang niềm tin tất thắng mà kiên trì, chiến thắng cuối cùng nhất định thuộc về bạn.'},
     {zh:'无论遇到多大的困难，他的信念从来没有动摇过。',py:'Wúlùn yùdào duō dà de kùnnan, tā de xìnniàn cónglái méiyǒu dòngyáo guo.',vn:'Dù gặp khó khăn lớn đến đâu, niềm tin của anh ấy chưa bao giờ lung lay.'}
   ],
   colloFull:[
     {zh:'必胜的信念',py:'bìshèng de xìnniàn',vn:'niềm tin tất thắng'},
     {zh:'坚定信念',py:'jiāndìng xìnniàn',vn:'niềm tin vững chắc'},
     {zh:'抱着信念',py:'bàozhe xìnniàn',vn:'mang niềm tin'},
     {zh:'他的信念就是',py:'tā de xìnniàn jiù shì',vn:'niềm tin của anh ấy là'},
     {zh:'信念动摇',py:'xìnniàn dòngyáo',vn:'niềm tin lung lay'}
   ],
   patterns:[
     {s:'S的信念就是 + ……',m:'Niềm tin của S chính là …'},
     {s:'抱着 + ……的信念 + V',m:'Mang niềm tin … mà làm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính niềm tin ấy đã giúp anh vượt qua những ngày khó khăn nhất.',answer:'正是这个信念，帮助他度过了最困难的日子。',answerPy:'Zhèng shì zhège xìnniàn, bāngzhù tā dùguòle zuì kùnnan de rìzi.',
      note:'正是…… nhấn mạnh (ôn HSK 5); 度过 + thời gian.',pair:'正是……'},
     {promptLang:'vi',prompt:'Chỉ cần niềm tin không lung lay, sớm muộn gì cậu cũng sẽ thành công.',answer:'只要信念不动摇，你迟早会成功的。',answerPy:'Zhǐyào xìnniàn bú dòngyáo, nǐ chízǎo huì chénggōng de.',
      note:'只要……就 / 会…… ; 迟早 = sớm muộn (ôn HSK 5).',pair:'只要……'}
   ]},

  {n:51,zh:'任重道远',py:'rènzhòng-dàoyuǎn',pos:'Thành ngữ',vn:'gánh nặng đường xa, trách nhiệm nặng nề mà chặng đường còn dài',hv:'nhậm trọng đạo viễn',em:'🏔️',lesson:1,
   explain:['Xuất xứ 《论语》: "gánh thì nặng mà đường thì xa" → nhiệm vụ lớn, trách nhiệm nặng, phải phấn đấu lâu dài.','Thường làm vị ngữ, hay đi với 虽然……但…… để nêu quyết tâm: 虽然任重道远，但……'],
   usage:'（任务 / 工作 / 我们）+ 任重道远; 虽然任重道远，但……',
   collo:['虽然任重道远','任重道远的任务','深感任重道远','可谓任重道远'],
   ex_zh:'虽然任重道远',ex_py:'suīrán rènzhòng-dàoyuǎn',ex_vn:'Tuy gánh nặng đường xa',
   exList:[
     {zh:'虽然任重道远，也不会一帆风顺，但他一定会坚持下去。',py:'Suīrán rènzhòng-dàoyuǎn, yě bú huì yìfān-fēngshùn, dàn tā yídìng huì jiānchí xiàqu.',vn:'Tuy trách nhiệm nặng nề, đường còn dài, cũng sẽ không thuận buồm xuôi gió, nhưng anh ấy nhất định sẽ kiên trì.'},
     {zh:'保护传统文化任重道远，需要一代又一代人的努力。',py:'Bǎohù chuántǒng wénhuà rènzhòng-dàoyuǎn, xūyào yí dài yòu yí dài rén de nǔlì.',vn:'Bảo vệ văn hoá truyền thống là gánh nặng đường xa, cần nỗ lực của thế hệ này nối tiếp thế hệ khác.'},
     {zh:'刚当上班长，我深感任重道远。',py:'Gāng dāngshang bānzhǎng, wǒ shēn gǎn rènzhòng-dàoyuǎn.',vn:'Vừa làm lớp trưởng, tôi cảm thấy sâu sắc trách nhiệm nặng nề.'}
   ],
   colloFull:[
     {zh:'虽然任重道远',py:'suīrán rènzhòng-dàoyuǎn',vn:'tuy gánh nặng đường xa'},
     {zh:'任重道远的任务',py:'rènzhòng-dàoyuǎn de rènwu',vn:'nhiệm vụ nặng nề lâu dài'},
     {zh:'深感任重道远',py:'shēn gǎn rènzhòng-dàoyuǎn',vn:'thấm thía trách nhiệm nặng nề'},
     {zh:'可谓任重道远',py:'kěwèi rènzhòng-dàoyuǎn',vn:'có thể nói là gánh nặng đường xa'},
     {zh:'环保任重道远',py:'huánbǎo rènzhòng-dàoyuǎn',vn:'bảo vệ môi trường còn nhiều gian nan'}
   ],
   patterns:[
     {s:'虽然任重道远，但 + 决心',m:'Tuy gian nan, nhưng quyết tâm …'},
     {s:'（事业）+ 任重道远，需要……',m:'Sự nghiệp còn dài, cần …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học tiếng Trung tốt là con đường dài, cần kiên trì mỗi ngày.',answer:'学好汉语任重道远，需要每天坚持。',answerPy:'Xuéhǎo Hànyǔ rènzhòng-dàoyuǎn, xūyào měi tiān jiānchí.',
      note:'Cụm động từ làm chủ ngữ (学好汉语) (ôn HSK 4–5).',pair:'动词短语作主语'},
     {promptLang:'vi',prompt:'Dù chặng đường còn dài, chúng ta cũng không được bỏ cuộc.',answer:'即使任重道远，我们也不能放弃。',answerPy:'Jíshǐ rènzhòng-dàoyuǎn, wǒmen yě bù néng fàngqì.',
      note:'即使……也…… (ôn HSK 5).',pair:'即使……也……'}
   ]},

  {n:52,zh:'一帆风顺',py:'yìfān-fēngshùn',pos:'Thành ngữ',vn:'thuận buồm xuôi gió',hv:'nhất phàm phong thuận',em:'⛵',lesson:1,
   explain:['Thuyền căng buồm gặp gió thuận → mọi việc suôn sẻ, không gặp trở ngại. Tiếng Việt có đúng thành ngữ "thuận buồm xuôi gió".','Hay dùng trong lời chúc (祝你一路顺风、一帆风顺) và ở dạng phủ định để nói việc lớn phải gian nan: 不会一帆风顺, 人生不可能一帆风顺. Biến điệu: 一 + fān (thanh 1) → yì.'],
   usage:'祝……一帆风顺; 不会 / 不可能 + 一帆风顺; 一帆风顺地 + V.',
   collo:['不会一帆风顺','祝你一帆风顺','人生不可能一帆风顺','一帆风顺地完成'],
   ex_zh:'也不会一帆风顺',ex_py:'yě bú huì yìfān-fēngshùn',ex_vn:'Cũng sẽ không thuận buồm xuôi gió',
   exList:[
     {zh:'想要成就一番事业，无论选择哪条路，都不会一帆风顺的。',py:'Xiǎng yào chéngjiù yì fān shìyè, wúlùn xuǎnzé nǎ tiáo lù, dōu bú huì yìfān-fēngshùn de.',vn:'Muốn làm nên sự nghiệp, dù chọn con đường nào cũng sẽ không thuận buồm xuôi gió.'},
     {zh:'祝你在新的一年里工作顺利，一帆风顺！',py:'Zhù nǐ zài xīn de yì nián li gōngzuò shùnlì, yìfān-fēngshùn!',vn:'Chúc bạn năm mới công việc thuận lợi, thuận buồm xuôi gió!'},
     {zh:'人生不可能一帆风顺，遇到挫折是很正常的。',py:'Rénshēng bù kěnéng yìfān-fēngshùn, yùdào cuòzhé shì hěn zhèngcháng de.',vn:'Đời người không thể thuận buồm xuôi gió mãi, gặp trắc trở là chuyện bình thường.'}
   ],
   colloFull:[
     {zh:'不会一帆风顺',py:'bú huì yìfān-fēngshùn',vn:'sẽ không suôn sẻ'},
     {zh:'祝你一帆风顺',py:'zhù nǐ yìfān-fēngshùn',vn:'chúc bạn thuận buồm xuôi gió'},
     {zh:'人生不可能一帆风顺',py:'rénshēng bù kěnéng yìfān-fēngshùn',vn:'đời người không thể mãi suôn sẻ'},
     {zh:'一帆风顺地完成',py:'yìfān-fēngshùn de wánchéng',vn:'hoàn thành suôn sẻ'},
     {zh:'事业一帆风顺',py:'shìyè yìfān-fēngshùn',vn:'sự nghiệp suôn sẻ'}
   ],
   patterns:[
     {s:'……不会 / 不可能 + 一帆风顺（的）',m:'… không thể suôn sẻ (phải gian nan)'},
     {s:'祝 + 人 + 一帆风顺',m:'Lời chúc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc gì cũng không thể suôn sẻ ngay từ đầu, gặp khó khăn đừng nản lòng.',answer:'什么事都不可能一开始就一帆风顺，遇到困难别灰心。',answerPy:'Shénme shì dōu bù kěnéng yì kāishǐ jiù yìfān-fēngshùn, yùdào kùnnan bié huīxīn.',
      note:'什么……都…… (phiếm chỉ); 一开始就…… (ôn HSK 4).',pair:'什么……都……'},
     {promptLang:'vi',prompt:'Chúc các bạn trong kỳ thi đại học thuận buồm xuôi gió, đỗ vào trường mơ ước!',answer:'祝你们高考一帆风顺，考上理想的大学！',answerPy:'Zhù nǐmen gāokǎo yìfān-fēngshùn, kǎoshang lǐxiǎng de dàxué!',
      note:'祝 + người + lời chúc; bổ ngữ 考上 (ôn HSK 4).',pair:'祝……'}
   ]}
];



// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn (mỗi đoạn một dòng; ba tiểu mục tách riêng)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 走近木版年画',
   preQuiz:[
     {q:'年画始于什么？',opts:['古代的门神画','唐宋的山水画','清朝的书法'],ans:0},
     {q:'传说中的那对兄弟专门做什么？',opts:['画门神画','监督百鬼','喂养老虎'],ans:1},
     {q:'人们为什么在门上画那对兄弟的像？',opts:['为了纪念他们','为了装饰房子','用以防鬼'],ans:2},
     {q:'“年画”一词是什么时候正式使用的？',opts:['唐朝','宋朝','清朝'],ans:2},
     {q:'课文说什么是人类文化发展史上一个重要的里程碑？',opts:['造纸技术的发明','墨的发明','印章的流行'],ans:0},
     {q:'最早的雕版印刷是怎么来的？',opts:['有人把碑刻、拓印等技术结合起来','有人从外国学来','是清朝学者发明的'],ans:0},
     {q:'雕版印刷的优越性是什么？',opts:['不需要人工和材料','一经开印，效率高、印刷量大','可以印出彩色的画'],ans:1},
     {q:'为什么后来有了彩色套印技术？',opts:['因为墨太贵了','因为单色印品不能满足人们的审美需求','因为年画要卖到国外'],ans:1},
     {q:'木版年画是在哪两个朝代从问世走向成熟的？',opts:['唐、宋','宋、明','明、清'],ans:1},
     {q:'“我”第一次见到张光宁的木版年画是在哪儿？',opts:['大学的展览上','他的家乡','春节庙会上'],ans:2},
     {q:'张光宁给“我”留下的第二印象是什么？',opts:['不像个商人','很会推销','说话很痛快'],ans:0},
     {q:'张光宁的信念是什么？',opts:['把年画卖到全国各地','拓展年画的内容，使其雅俗共赏','开一家大的年画工厂'],ans:1}
   ],
   lines:[
    {sp:0,zh:'年画的起源',
     py:'Niánhuà de qǐyuán',
     vn:'Nguồn gốc của tranh Tết'},
    {sp:0,zh:'年画是中国画的一种，始于古代的门神画。',
     py:'Niánhuà shì Zhōngguó huà de yì zhǒng, shǐ yú gǔdài de ménshén huà.',
     vn:'Tranh Tết là một loại tranh Trung Quốc, bắt đầu từ tranh môn thần (thần giữ cửa) thời cổ.'},
    {sp:0,zh:'有文献记载：传说很久以前，有一对兄弟，专门监督百鬼，发现凶恶的鬼就捆绑起来，无须揭露恶行，直接去喂老虎。于是有人在门上画上他们兄弟二人的像，用以防鬼，这就是最早的门神画。',
     py:'Yǒu wénxiàn jìzǎi: chuánshuō hěn jiǔ yǐqián, yǒu yí duì xiōngdì, zhuānmén jiāndū bǎi guǐ, fāxiàn xiōng\'è de guǐ jiù kǔnbǎng qǐlai, wúxū jiēlù èxíng, zhíjiē qù wèi lǎohǔ. Yúshì yǒu rén zài mén shang huàshang tāmen xiōngdì èr rén de xiàng, yòngyǐ fáng guǐ, zhè jiù shì zuì zǎo de ménshén huà.',
     vn:'Có tài liệu ghi chép: tương truyền rất lâu về trước có hai anh em chuyên giám sát trăm loài ma quỷ, hễ phát hiện con quỷ hung ác nào liền trói lại, chẳng cần vạch trần tội ác, đem thẳng cho hổ ăn. Thế là có người vẽ hình hai anh em họ lên cửa để trừ ma quỷ, đó chính là tranh môn thần sớm nhất.'},
    {sp:0,zh:'随着唐宋两朝经济的发展，文化的昌盛以及民间绘画水平的提高，门神画的内容得以拓展，反映世俗生活题材的作品进入了这一领域。之后，有清朝学者在论述这类画作时正式使用了“年画”一词，自此，以驱逐祸凶、祝福新年吉祥喜庆为内容的画儿就叫年画了。',
     py:'Suízhe Táng Sòng liǎng cháo jīngjì de fāzhǎn, wénhuà de chāngshèng yǐjí mínjiān huìhuà shuǐpíng de tígāo, ménshén huà de nèiróng déyǐ tuòzhǎn, fǎnyìng shìsú shēnghuó tícái de zuòpǐn jìnrùle zhè yī lǐngyù. Zhīhòu, yǒu Qīngcháo xuézhě zài lùnshù zhè lèi huàzuò shí zhèngshì shǐyòngle “niánhuà” yì cí, zìcǐ, yǐ qūzhú huòxiōng, zhùfú xīnnián jíxiáng xǐqìng wéi nèiróng de huàr jiù jiào niánhuà le.',
     vn:'Cùng với sự phát triển kinh tế của hai triều Đường, Tống, sự hưng thịnh của văn hoá và trình độ hội hoạ dân gian được nâng cao, nội dung tranh môn thần được mở rộng, những tác phẩm phản ánh đề tài đời sống thế tục đã bước vào lĩnh vực này. Về sau, có học giả đời Thanh khi luận bàn về loại tranh này đã chính thức dùng từ "年画" (tranh Tết); từ đó, những bức tranh lấy nội dung xua đuổi tai hoạ, chúc năm mới may mắn vui tươi thì được gọi là tranh Tết. (Chú thích của sách: 唐宋 — tên triều đại; Đường: năm 618–907, Tống: năm 960–1279. 清朝 — tên triều đại, sách ghi năm 1616–1911.)'},
    {sp:0,zh:'木版年画',
     py:'Mùbǎn niánhuà',
     vn:'Tranh Tết mộc bản (in khắc gỗ)'},
    {sp:0,zh:'造纸技术的发明是人类文化发展史上一个重要的里程碑。',
     py:'Zàozhǐ jìshù de fāmíng shì rénlèi wénhuà fāzhǎn shǐ shang yí ge zhòngyào de lǐchéngbēi.',
     vn:'Việc phát minh kỹ thuật làm giấy là một cột mốc quan trọng trong lịch sử phát triển văn hoá loài người.'},
    {sp:0,zh:'有了纸，书写就需要墨水儿，于是有人发明了墨；字画、书信上需要盖章，于是印章开始流行；碑刻、拓印技术被广泛运用，于是有人联想到：这些技术结合起来，不就能印出书来吗！人们尝试把印章扩大成一张纸那么大，叫作“版”，然后把书的内容刻在版上，在版上涂抹上墨，把纸铺到上面，用刷子均匀地刷印，最后将纸揭起，印品就出来了，这就是最早的雕版印刷。虽然雕版印刷中雕刻版面需要大量的人工和材料，但雕版完成后一经开印，就显示出空前的高效率和印刷量大的优越性。',
     py:'Yǒule zhǐ, shūxiě jiù xūyào mòshuǐr, yúshì yǒu rén fāmíngle mò; zìhuà, shūxìn shang xūyào gài zhāng, yúshì yìnzhāng kāishǐ liúxíng; bēikè, tàyìn jìshù bèi guǎngfàn yùnyòng, yúshì yǒu rén liánxiǎng dào: zhèxiē jìshù jiéhé qilai, bú jiù néng yìnchū shū lai ma! Rénmen chángshì bǎ yìnzhāng kuòdà chéng yì zhāng zhǐ nàme dà, jiàozuò “bǎn”, ránhòu bǎ shū de nèiróng kè zài bǎn shang, zài bǎn shang túmǒ shang mò, bǎ zhǐ pū dào shàngmian, yòng shuāzi jūnyún de shuāyìn, zuìhòu jiāng zhǐ jiēqǐ, yìnpǐn jiù chūlai le, zhè jiù shì zuì zǎo de diāobǎn yìnshuā. Suīrán diāobǎn yìnshuā zhōng diāokè bǎnmiàn xūyào dàliàng de réngōng hé cáiliào, dàn diāobǎn wánchéng hòu yì jīng kāiyìn, jiù xiǎnshì chū kōngqián de gāo xiàolǜ hé yìnshuāliàng dà de yōuyuèxìng.',
     vn:'Có giấy rồi, viết chữ thì cần mực, thế là có người phát minh ra mực; tranh chữ, thư từ cần đóng dấu, thế là con dấu bắt đầu thịnh hành; kỹ thuật khắc bia, in dập được dùng rộng rãi, thế là có người nghĩ ra: kết hợp những kỹ thuật này lại chẳng phải in được sách sao! Người ta thử phóng con dấu to bằng cả một tờ giấy, gọi là "bản", rồi khắc nội dung sách lên bản, quét mực lên bản, trải giấy lên trên, dùng bàn chải chải in đều tay, cuối cùng bóc tờ giấy lên là có bản in, đó chính là in khắc bản sớm nhất. Tuy trong in khắc bản, việc khắc mặt bản cần rất nhiều nhân công và vật liệu, nhưng khắc xong bản, một khi bắt đầu in thì liền cho thấy ưu thế hiệu suất cao chưa từng có và số lượng in lớn.'},
    {sp:0,zh:'单色印品终究不能满足人们的审美需求，之后就有了彩色套印技术。人们把这种技术运用到年画制作上，木版彩色套印年画就此诞生。',
     py:'Dānsè yìnpǐn zhōngjiū bù néng mǎnzú rénmen de shěnměi xūqiú, zhīhòu jiù yǒule cǎisè tàoyìn jìshù. Rénmen bǎ zhè zhǒng jìshù yùnyòng dào niánhuà zhìzuò shang, mùbǎn cǎisè tàoyìn niánhuà jiùcǐ dànshēng.',
     vn:'Bản in một màu xét cho cùng không thể đáp ứng nhu cầu thẩm mỹ của con người, sau đó liền có kỹ thuật in chồng màu. Người ta áp dụng kỹ thuật này vào làm tranh Tết, tranh Tết mộc bản in chồng màu từ đó ra đời.'},
    {sp:0,zh:'宋明两代，木版年画从问世走向成熟，之后走进了百姓生活，以至过年贴年画成为了一种风尚，仿佛没有年画，没有烟花爆竹，没有春联就不叫过年，而寄托着百姓美好愿望的年画，也为春节增添了浓浓的年味。当时的另一盛况是，家族式的年画印制场所遍及全国各地。这期间，年画的内容也从威武的门神，扩展到期盼丰收、恭喜发财、连年有余的吉庆画，再到历史故事、戏曲人物、民间笑话、寓言和神话，内容无所不包。年画成了文化交流、道德教育、信仰传承的载体与工具，是老百姓喜闻乐见的文化艺术形式。',
     py:'Sòng Míng liǎng dài, mùbǎn niánhuà cóng wènshì zǒuxiàng chéngshú, zhīhòu zǒujìnle bǎixìng shēnghuó, yǐzhì guònián tiē niánhuà chéngwéile yì zhǒng fēngshàng, fǎngfú méiyǒu niánhuà, méiyǒu yānhuā bàozhú, méiyǒu chūnlián jiù bú jiào guònián, ér jìtuōzhe bǎixìng měihǎo yuànwàng de niánhuà, yě wèi Chūnjié zēngtiānle nóngnóng de niánwèir. Dāngshí de lìng yī shèngkuàng shì, jiāzúshì de niánhuà yìnzhì chǎngsuǒ biànjí quánguó gè dì. Zhè qījiān, niánhuà de nèiróng yě cóng wēiwǔ de ménshén, kuòzhǎn dào qīpàn fēngshōu, gōngxǐ fā cái, liánnián yǒu yú de jíqìng huà, zài dào lìshǐ gùshi, xìqǔ rénwù, mínjiān xiàohua, yùyán hé shénhuà, nèiróng wú suǒ bù bāo. Niánhuà chéngle wénhuà jiāoliú, dàodé jiàoyù, xìnyǎng chuánchéng de zàitǐ yǔ gōngjù, shì lǎobǎixìng xǐwén-lèjiàn de wénhuà yìshù xíngshì.',
     vn:'Qua hai đời Tống, Minh, tranh Tết mộc bản từ lúc ra đời đi đến chín muồi, sau đó đi vào đời sống người dân, đến mức dán tranh Tết khi ăn Tết trở thành một phong tục, dường như không có tranh Tết, không có pháo, không có câu đối thì chẳng gọi là ăn Tết; còn tranh Tết gửi gắm ước nguyện tốt đẹp của người dân cũng làm cho ngày Tết thêm đậm đà hương vị. Một cảnh thịnh vượng khác thời ấy là các xưởng in tranh Tết kiểu gia tộc có mặt khắp nơi trong cả nước. Trong thời kỳ này, nội dung tranh Tết cũng từ những vị môn thần oai vũ, mở rộng sang tranh chúc mừng mong được mùa, cung hỷ phát tài, năm nào cũng dư dả, rồi đến chuyện lịch sử, nhân vật hí khúc, chuyện cười dân gian, ngụ ngôn và thần thoại — nội dung không gì không có. Tranh Tết trở thành phương tiện và công cụ cho giao lưu văn hoá, giáo dục đạo đức, truyền thừa tín ngưỡng, là loại hình văn hoá nghệ thuật được bà con yêu thích. (Chú thích của sách: 明 — tên triều đại, năm 1368–1644.)'},
    {sp:0,zh:'年画传人张光宁',
     py:'Niánhuà chuánrén Zhāng Guāngníng',
     vn:'Người truyền nhân tranh Tết Trương Quang Ninh'},
    {sp:0,zh:'第一次见到张光宁的木版年画，是在春节庙会上。在众多摊位中，他的两只木版彩色套印技术做成的布老虎神气极了。那虎翘着尾巴，神态逼真，身上装饰着彩绘花纹和盛开的花朵，全身散发着喜气。我问多少钱，他耸耸肩，对我说：“这是魏州虎。”言外之意是在告诉我这个外行，这虎可是系出名门。我心想：“魏州是哪儿？我不知道别人也未必知道，这算什么推销术？”这是他给我留下的第一印象。',
     py:'Dì-yī cì jiàndào Zhāng Guāngníng de mùbǎn niánhuà, shì zài Chūnjié miàohuì shang. Zài zhòngduō tānwèi zhōng, tā de liǎng zhī mùbǎn cǎisè tàoyìn jìshù zuòchéng de bù lǎohǔ shénqì jí le. Nà hǔ qiàozhe wěiba, shéntài bīzhēn, shēnshang zhuāngshìzhe cǎihuì huāwén hé shèngkāi de huāduǒ, quánshēn sànfāzhe xǐqì. Wǒ wèn duōshao qián, tā sǒngsong jiān, duì wǒ shuō: “Zhè shì Wèizhōu hǔ.” Yánwài zhī yì shì zài gàosu wǒ zhège wàiháng, zhè hǔ kě shì xì chū míngmén. Wǒ xīn xiǎng: “Wèizhōu shì nǎr? Wǒ bù zhīdào biérén yě wèibì zhīdào, zhè suàn shénme tuīxiāo shù?” Zhè shì tā gěi wǒ liúxià de dì-yī yìnxiàng.',
     vn:'Lần đầu tiên nhìn thấy tranh Tết mộc bản của Trương Quang Ninh là ở hội chùa dịp Tết. Giữa rất nhiều gian hàng, hai con hổ vải làm bằng kỹ thuật in chồng màu mộc bản của anh ấy trông oai vệ vô cùng. Con hổ ấy vểnh đuôi, thần thái như thật, trên mình trang trí hoa văn vẽ màu và những bông hoa nở rộ, toàn thân toát lên vẻ vui tươi. Tôi hỏi bao nhiêu tiền, anh ấy nhún vai nói với tôi: "Đây là hổ Nguỵ Châu." Ý ngoài lời là đang bảo tôi — kẻ ngoại đạo — rằng con hổ này xuất thân danh môn đấy. Tôi thầm nghĩ: "Nguỵ Châu là ở đâu? Tôi không biết thì người khác cũng chưa chắc biết, thế này thì tính là mánh chào hàng gì?" Đó là ấn tượng đầu tiên anh ấy để lại cho tôi. (Chú thích của sách: 魏州 — địa danh, nay thuộc huyện Nguỵ, thành phố Hàm Đan, tỉnh Hà Bắc; kỹ nghệ nhuộm dệt vải hoa truyền thống ở đó đến nay vẫn mang phong cách riêng.)'},
    {sp:0,zh:'“这个卖年画的不像个商人”，这是他给我留下的第二印象。当你和他讨价还价的时候，他立刻就变得不好意思起来，说话吞吞吐吐。什么“这是纯手工的”“残次品不可避免”这些现成的“谢绝”还价的理由他一条也说不出来，相反却唠唠叨叨地总想和你讨论木版年画中深厚的文化底蕴。',
     py:'“Zhège mài niánhuà de bú xiàng ge shāngrén”, zhè shì tā gěi wǒ liúxià de dì-èr yìnxiàng. Dāng nǐ hé tā tǎojià-huánjià de shíhou, tā lìkè jiù biàn de bù hǎoyìsi qǐlai, shuōhuà tūntūntǔtǔ. Shénme “zhè shì chún shǒugōng de” “cáncìpǐn bù kě bìmiǎn” zhèxiē xiànchéng de “xièjué” huánjià de lǐyóu tā yì tiáo yě shuō bu chūlai, xiāngfǎn què láoláodāodāo de zǒng xiǎng hé nǐ tǎolùn mùbǎn niánhuà zhōng shēnhòu de wénhuà dǐyùn.',
     vn:'"Người bán tranh Tết này chẳng giống dân buôn chút nào" — đó là ấn tượng thứ hai anh ấy để lại cho tôi. Khi bạn mặc cả với anh ấy, anh ấy lập tức trở nên ngượng ngùng, nói năng ấp a ấp úng. Nào là "đây là hàng làm hoàn toàn bằng tay", "hàng lỗi là không tránh khỏi" — những lý do có sẵn để "khéo từ chối" mặc cả ấy anh ấy chẳng nói ra được câu nào, trái lại cứ lải nhải mãi muốn cùng bạn bàn về chiều sâu văn hoá trong tranh Tết mộc bản.'},
    {sp:0,zh:'相识久了才知道，他在年画的故乡出生、长大，从小就画年画，基本功扎实，后来又对年画的构图创作、人物塑造、雕版手法、颜料加工等进行了广泛的研究。当他的作品逐步被市场认可后，他又不满足了，中国年画虽不分派别，但不同地区的年画各有所长，都值得学习借鉴。于是，他再接再厉，数年间走遍了全国各大年画产地，与同行进行广泛的交流。不仅如此，参加民俗文化巡展，走进大学和师生就相关主题进行研讨，交流艺术心得，他从不缺席。',
     py:'Xiāngshí jiǔ le cái zhīdào, tā zài niánhuà de gùxiāng chūshēng, zhǎngdà, cóngxiǎo jiù huà niánhuà, jīběngōng zhāshi, hòulái yòu duì niánhuà de gòutú chuàngzuò, rénwù sùzào, diāobǎn shǒufǎ, yánliào jiāgōng děng jìnxíngle guǎngfàn de yánjiū. Dāng tā de zuòpǐn zhúbù bèi shìchǎng rènkě hòu, tā yòu bù mǎnzú le, Zhōngguó niánhuà suī bù fēn pàibié, dàn bù tóng dìqū de niánhuà gè yǒu suǒ cháng, dōu zhídé xuéxí jièjiàn. Yúshì, tā zàijiē-zàilì, shù nián jiān zǒubiànle quánguó gè dà niánhuà chǎndì, yǔ tóngháng jìnxíng guǎngfàn de jiāoliú. Bùjǐn rúcǐ, cānjiā mínsú wénhuà xúnzhǎn, zǒujìn dàxué hé shīshēng jiù xiāngguān zhǔtí jìnxíng yántǎo, jiāoliú yìshù xīndé, tā cóng bù quēxí.',
     vn:'Quen lâu rồi mới biết, anh ấy sinh ra và lớn lên ở quê hương của tranh Tết, từ nhỏ đã vẽ tranh Tết, kỹ năng cơ bản rất vững, sau này lại nghiên cứu rộng về bố cục sáng tác, xây dựng nhân vật, thủ pháp khắc bản, gia công màu vẽ… của tranh Tết. Khi tác phẩm của anh dần được thị trường công nhận, anh lại không thoả mãn: tranh Tết Trung Quốc tuy không chia trường phái, nhưng tranh Tết mỗi vùng mỗi có thế mạnh riêng, đều đáng để học hỏi. Thế là anh không ngừng cố gắng, trong vài năm đi khắp các vùng sản xuất tranh Tết lớn trong cả nước, giao lưu rộng rãi với người cùng nghề. Không chỉ vậy, tham gia triển lãm lưu động văn hoá dân gian, vào các trường đại học thảo luận với thầy trò về những chủ đề liên quan, trao đổi kinh nghiệm nghệ thuật — anh chưa bao giờ vắng mặt.'},
    {sp:0,zh:'张光宁一年到头真够忙的，可他总是干劲十足。他曾真诚地说：“年画占据了我生命的全部，我喜欢它，热爱它，靠它生活，也在努力探索它、发展它。”是啊，愈是经营年画久了，他对年画就愈是热爱。他已确立了自己的目标——传播他喜爱的这一民俗文化。他的信念就是拓展年画的内容，使其雅俗共赏，为更多民众所喜爱，虽然任重道远，也不会一帆风顺，但他一定会坚持下去。',
     py:'Zhāng Guāngníng yì nián dào tóu zhēn gòu máng de, kě tā zǒngshì gànjìn shízú. Tā céng zhēnchéng de shuō: “Niánhuà zhànjùle wǒ shēngmìng de quánbù, wǒ xǐhuan tā, rè\'ài tā, kào tā shēnghuó, yě zài nǔlì tànsuǒ tā, fāzhǎn tā.” Shì a, yù shì jīngyíng niánhuà jiǔ le, tā duì niánhuà jiù yù shì rè\'ài. Tā yǐ quèlìle zìjǐ de mùbiāo — chuánbō tā xǐ\'ài de zhè yī mínsú wénhuà. Tā de xìnniàn jiù shì tuòzhǎn niánhuà de nèiróng, shǐ qí yǎsú-gòngshǎng, wéi gèng duō mínzhòng suǒ xǐ\'ài, suīrán rènzhòng-dàoyuǎn, yě bú huì yìfān-fēngshùn, dàn tā yídìng huì jiānchí xiàqu.',
     vn:'Trương Quang Ninh quanh năm suốt tháng bận rộn thật, vậy mà lúc nào cũng hăng say. Anh từng chân thành nói: "Tranh Tết chiếm trọn cuộc đời tôi, tôi thích nó, yêu nó, sống nhờ nó, và cũng đang cố gắng tìm tòi nó, phát triển nó." Đúng vậy, càng kinh doanh tranh Tết lâu, anh càng yêu tranh Tết. Anh đã xác lập mục tiêu của mình — truyền bá nét văn hoá dân gian mà anh yêu thích này. Niềm tin của anh chính là mở rộng nội dung tranh Tết, khiến nó người sang kẻ bình dân đều thưởng thức được, được nhiều người hơn nữa yêu thích; tuy gánh nặng đường xa, cũng sẽ chẳng thuận buồm xuôi gió, nhưng anh nhất định sẽ kiên trì đến cùng.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 连年—连续 lấy từ sách (tr. 160, 做一做 chọn từ điền trống theo đáp án sách); 扎实—结实, 借鉴—参考 tự thêm (扎实, 借鉴 là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'连年 — 连续',
   same:'Đều có nghĩa "liên tiếp không ngắt quãng" (接连不断).',
   sameEx:{zh:'他们连年／连续创造了高产纪录。',vn:'Họ liên tiếp nhiều năm lập kỷ lục năng suất cao.'},
   items:[
     {word:'连年',points:[
       'Nghĩa là LIÊN TIẾP NHIỀU NĂM — chỉ dùng cho thời gian tính bằng "năm", không có nghĩa nào khác: 连年大丰收, 连年亏损, 连年战乱.',
       'Phía sau KHÔNG mang từ chỉ số lượng (không nói *连年三年).',
       'Thành ngữ chúc Tết: 连年有余 (năm nào cũng dư dả).'
     ],ex:[{zh:'这几年风调雨顺，村里连年大丰收。',vn:'Mấy năm nay mưa thuận gió hoà, làng được mùa lớn nhiều năm liền.'},
          {zh:'由于经营不善，这家公司连年亏损。',vn:'Do kinh doanh kém, công ty này thua lỗ nhiều năm liền.'}]},
     {word:'连续',points:[
       'Một cái nối một cái — dùng cho MỌI khoảng thời gian (giờ, ngày, tuần, năm…) và cả sự việc: 连续下了三天雨, 连续工作了15个小时.',
       'Phía sau MANG ĐƯỢC từ chỉ số lượng: 连续三天没吃东西, 连续两次获得冠军.',
       'Còn làm định ngữ: 连续剧 (phim bộ), 连续性.'
     ],ex:[{zh:'他已经连续三天没吃东西了。',vn:'Anh ấy đã ba ngày liền không ăn gì.'},
          {zh:'他们连续工作了15个小时。',vn:'Họ làm việc liền 15 tiếng.'}]}
   ],
   quiz:[
     {sentence:'这支球队＿＿两次获得了冠军。',options:['连年','连续'],answer:1,
      why:'Có số lượng phía sau (两次) → chỉ dùng 连续; 连年 không mang số lượng.'},
     {sentence:'这个地区＿＿干旱，农民的日子很不好过。',options:['连年','连续'],answer:0,both:true,
      why:'Hạn hán nhiều năm liền → 连年 (chuẩn nhất); 连续干旱 cũng nói được nhưng không rõ là nhiều năm.'},
     {sentence:'昨天晚上他＿＿看了五集电视剧。',options:['连年','连续'],answer:1,
      why:'Đơn vị không phải năm (tập phim) + có số lượng → 连续.'},
     {sentence:'年画上画着胖娃娃抱鲤鱼，寓意＿＿有余。',options:['连年','连续'],answer:0,
      why:'Thành ngữ cố định 连年有余 (năm nào cũng dư dả).'}
   ],
   sgk:{
     chung:{t:'都有“接连不断”的意思。',vn:'Đều có nghĩa "liên tiếp không ngắt quãng".',vd:'他们连年／连续创造了高产纪录。',vdVn:'Họ liên tiếp nhiều năm lập kỷ lục năng suất cao.'},
     khac:[
       {a:{t:'接连许多年，只能用于表示“年”的时间，没有其他意思。',vn:'Liên tiếp nhiều năm, chỉ có thể dùng để biểu thị thời gian là "năm", không có nghĩa nào khác.',vd:'连年大丰收',vdVn:'Nhiều năm liền được mùa lớn'},
        b:{t:'一个接一个，可以表示任何时间段内的连续。',vn:'Cái này nối cái kia, có thể biểu thị sự liên tục trong bất kỳ khoảng thời gian nào.',vd:'① 连续下了三天雨。② 他们连续工作了15个小时。',vdVn:'① Mưa liền ba ngày. ② Họ làm việc liền 15 tiếng.'}},
       {a:{t:'“连年”后面不带数量词语。',vn:'Sau "连年" không mang từ ngữ chỉ số lượng.',vd:''},
        b:{t:'“连续”后面可带数量词语。',vn:'Sau "连续" có thể mang từ ngữ chỉ số lượng.',vd:'他已经连续三天没吃东西了。',vdVn:'Anh ấy đã ba ngày liền không ăn gì.'}}
     ],
     deLam:'选择“连年”或“连续”填空 — Chọn 连年 hay 连续 điền vào chỗ trống',
     lamThu:[
       {s:'用同样的方法＿＿念下去，直到不看卡片，念十遍不出错为止。',dap:[false,true],
        giai:'连续 (đáp án sách): đọc liền một mạch nhiều lần — đơn vị không phải "năm" → chỉ dùng 连续.'},
       {s:'人民生活在社会动荡和＿＿战乱中，苦不堪言。',dap:[true,false],
        giai:'连年 (đáp án sách): chiến loạn kéo dài nhiều năm liền; 连年战乱 là cách kết hợp quen thuộc.'},
       {s:'屏幕上会＿＿出现几个数字，你要迅速记住它们。',dap:[false,true],
        giai:'连续 (đáp án sách): các con số hiện ra nối tiếp nhau trong vài giây → không liên quan đến "năm" → 连续.'},
       {s:'最近几年来，由于管理混乱、经营不善，导致＿＿亏损。',dap:[true,false],
        giai:'连年 (đáp án sách): "mấy năm gần đây" → thua lỗ nhiều năm liền → 连年亏损.'}
     ]
   }},

  {pair:'扎实 — 结实',
   same:'Đều là tính từ, đều có nghĩa "chắc, vững"; đều lặp được dạng AABB (扎扎实实 / 结结实实).',
   sameEx:{zh:'这张桌子做得很扎实／结实。',vn:'Cái bàn này đóng rất chắc chắn.'},
   items:[
     {word:'扎实',points:[
       'Chủ yếu nói KIẾN THỨC, KỸ NĂNG, CÁCH LÀM VIỆC vững vàng, thực chất, không qua loa: 基本功扎实, 基础扎实, 工作扎实.',
       'Hay đi với 打下扎实的基础; làm trạng ngữ: 扎扎实实地学习.',
       '扎 đọc zhā, 实 đọc nhẹ.'
     ],ex:[{zh:'他从小就画年画，基本功扎实。',vn:'Anh ấy vẽ tranh Tết từ nhỏ, kỹ năng cơ bản rất vững.'}]},
     {word:'结实',points:[
       'Chủ yếu nói ĐỒ VẬT bền, chắc, khó hỏng: 这双鞋很结实, 绳子捆得很结实.',
       'Nói THÂN THỂ khoẻ mạnh, rắn chắc: 身体结实, 长得很结实.',
       'Không dùng cho kiến thức (không nói *基础很结实 khi nói về học vấn — dùng 扎实).'
     ],ex:[{zh:'爷爷七十多岁了，身体还很结实。',vn:'Ông nội hơn bảy mươi tuổi rồi mà người vẫn còn rắn chắc.'}]}
   ],
   quiz:[
     {sentence:'学外语一定要打下＿＿的基础。',options:['扎实','结实'],answer:0,
      why:'Nền tảng kiến thức → 扎实的基础.'},
     {sentence:'这个箱子很＿＿，用了十年都没坏。',options:['扎实','结实'],answer:1,
      why:'Đồ vật bền chắc → 结实.'},
     {sentence:'他每天锻炼，身体越来越＿＿了。',options:['扎实','结实'],answer:1,
      why:'Thân thể khoẻ, rắn chắc → 结实.'},
     {sentence:'王老师上课讲得很＿＿，每个知识点都讲得清清楚楚。',options:['扎实','结实'],answer:0,
      why:'Cách dạy, kiến thức vững vàng, thực chất → 扎实.'}
   ]},

  {pair:'借鉴 — 参考',
   same:'Đều là động từ, đều có nghĩa dựa vào cái của người khác (tài liệu, cách làm) để giúp việc của mình.',
   sameEx:{zh:'写这篇论文时，我借鉴／参考了不少前人的研究。',vn:'Khi viết luận văn này, tôi đã tham khảo không ít nghiên cứu của người đi trước.'},
   items:[
     {word:'借鉴',points:[
       'Lấy kinh nghiệm, cách làm, mô hình của người khác làm GƯƠNG để học hỏi, rút kinh nghiệm cho mình: 借鉴经验, 借鉴做法.',
       'Hay đi với 值得借鉴, 学习借鉴, 有借鉴意义; đối tượng thường là kinh nghiệm thành công / thất bại.',
       'Văn viết, trang trọng.'
     ],ex:[{zh:'不同地区的年画各有所长，都值得学习借鉴。',vn:'Tranh Tết mỗi vùng mỗi có thế mạnh riêng, đều đáng để học hỏi.'}]},
     {word:'参考',points:[
       'Xem, đối chiếu tài liệu, ý kiến để tham khảo khi làm việc gì: 参考资料, 参考答案, 参考书.',
       'Làm được định ngữ / danh từ: 参考书, 仅供参考 (chỉ để tham khảo).',
       'Dùng rộng, trung tính, cả khẩu ngữ lẫn văn viết.'
     ],ex:[{zh:'请参考练习5，把课文缩写成300字左右的短文。',vn:'Hãy tham khảo bài tập 5, tóm tắt bài khoá thành đoạn văn khoảng 300 chữ.'}]}
   ],
   quiz:[
     {sentence:'这些数据仅供＿＿，具体情况还要再调查。',options:['借鉴','参考'],answer:1,
      why:'Cụm cố định 仅供参考 = chỉ để tham khảo.'},
     {sentence:'这家企业的成功经验很值得我们＿＿。',options:['借鉴','参考'],answer:0,
      why:'Học hỏi kinh nghiệm thành công → 借鉴经验, 值得借鉴.'},
     {sentence:'做完练习以后，可以看看书后的＿＿答案。',options:['借鉴','参考'],answer:1,
      why:'参考答案 = đáp án tham khảo (định ngữ).'},
     {sentence:'我们要＿＿别人失败的教训，少走弯路。',options:['借鉴','参考'],answer:0,
      why:'Lấy bài học thất bại của người khác làm gương → 借鉴.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'起源',hv:'khởi nguyên',vn:'nguồn gốc, khởi nguyên',note:'Trùng khít: 起源于 = khởi nguyên từ, bắt nguồn từ.'},
    {zh:'文献',hv:'văn hiến',vn:'tài liệu, tư liệu',note:'Tiếng Việt "văn hiến" thiên về truyền thống văn hoá (nước văn hiến); 文献 tiếng Trung = TÀI LIỆU, tư liệu: 参考文献 = tài liệu tham khảo.'},
    {zh:'凶恶',hv:'hung ác',vn:'hung ác, dữ tợn',note:'Trùng khít.'},
    {zh:'昌盛',hv:'xương thịnh',vn:'hưng thịnh',note:'"Xương" = thịnh vượng; 繁荣昌盛 = phồn vinh hưng thịnh.'},
    {zh:'题材',hv:'đề tài',vn:'đề tài',note:'Trùng khít: 历史题材 = đề tài lịch sử.'},
    {zh:'吉祥',hv:'cát tường',vn:'may mắn, cát tường',note:'Trùng khít: 吉祥如意 = cát tường như ý.'},
    {zh:'联想',hv:'liên tưởng',vn:'liên tưởng',note:'Trùng khít.'},
    {zh:'寄托',hv:'ký thác',vn:'gửi gắm',note:'"Ký thác" tiếng Việt cũng = gửi gắm (ký thác tâm sự).'},
    {zh:'增添',hv:'tăng thiêm',vn:'tăng thêm',note:'"Thiêm" = thêm (thiêm thiếp).'},
    {zh:'发财',hv:'phát tài',vn:'phát tài',note:'Trùng khít: 恭喜发财 = cung hỷ phát tài.'},
    {zh:'寓言',hv:'ngụ ngôn',vn:'truyện ngụ ngôn',note:'Trùng khít.'},
    {zh:'信仰',hv:'tín ngưỡng',vn:'tín ngưỡng',note:'Trùng khít: 宗教信仰 = tín ngưỡng tôn giáo.'},
    {zh:'神态',hv:'thần thái',vn:'thần thái',note:'Trùng khít: 神态逼真 = thần thái như thật.'},
    {zh:'故乡',hv:'cố hương',vn:'quê hương',note:'Trùng khít, văn chương.'},
    {zh:'手法',hv:'thủ pháp',vn:'thủ pháp',note:'Trùng khít: 修辞手法 = biện pháp / thủ pháp tu từ.'},
    {zh:'派别',hv:'phái biệt',vn:'phe phái, trường phái',note:'"Phái" = phe, trường phái.'},
    {zh:'确立',hv:'xác lập',vn:'xác lập',note:'Trùng khít: 确立目标 = xác lập mục tiêu.'},
    {zh:'信念',hv:'tín niệm',vn:'niềm tin',note:'Tiếng Việt có "tín niệm" (ít dùng); dịch tự nhiên là "niềm tin".'},
    {zh:'占据',hv:'chiếm cứ',vn:'chiếm, chiếm giữ',note:'"Chiếm cứ" tiếng Việt = chiếm giữ (chiếm cứ một vùng).'}
  ],
  idiom:[
    {zh:'烟花爆竹',hv:'yên hoa bộc trúc',vn:'pháo (pháo hoa, pháo nổ)',note:'"Bộc trúc" = ống tre nổ — pháo xưa làm bằng ống tre đốt cho nổ.'},
    {zh:'喜闻乐见',hv:'hỉ văn lạc kiến',vn:'được yêu thích',note:'Vui khi nghe (văn), thích khi thấy (kiến).'},
    {zh:'吞吞吐吐',hv:'thôn thôn thổ thổ',vn:'ấp a ấp úng',note:'"Thôn" = nuốt, "thổ" = nhả → nuốt vào nhả ra, nói không thành lời.'},
    {zh:'再接再厉',hv:'tái tiếp tái lệ',vn:'không ngừng cố gắng',note:'"Lệ" (厉 = 砺) = mài; chọi gà mỗi lần giao đấu lại mài mỏ.'},
    {zh:'任重道远',hv:'nhậm trọng đạo viễn',vn:'gánh nặng đường xa',note:'Tiếng Việt dùng đúng câu "gánh nặng đường xa".'},
    {zh:'一帆风顺',hv:'nhất phàm phong thuận',vn:'thuận buồm xuôi gió',note:'Tiếng Việt có đúng thành ngữ "thuận buồm xuôi gió".'},
    {zh:'里程碑',hv:'lý trình bi',vn:'cột mốc',note:'"Lý trình" = quãng đường tính bằng dặm, "bi" = bia đá → cột mốc.'}
  ],
  trap:[
    {zh:'心得',hv:'tâm đắc',vn:'điều rút ra, kinh nghiệm',
     warn:'BẪY LỚN: "tâm đắc" tiếng Việt = rất ưng ý, đồng tình (câu này rất tâm đắc). 心得 tiếng Trung là DANH TỪ = điều học được, bài thu hoạch: 交流心得, 写读书心得.'},
    {zh:'外行',hv:'ngoại hàng',vn:'người ngoài nghề',
     warn:'行 đọc háng (nghề), không phải xíng (đi). 外行 = NGƯỜI NGOẠI ĐẠO, không chuyên; trái nghĩa 内行.'},
    {zh:'揭露',hv:'yết lộ',vn:'vạch trần',
     warn:'"Yết lộ" không dùng trong tiếng Việt; dịch "vạch trần, phanh phui" — thường đi với điều XẤU (真相, 罪行).'},
    {zh:'驱逐',hv:'khu trục',vn:'xua đuổi, trục xuất',
     warn:'"Khu trục" tiếng Việt gợi "tàu khu trục" (quân sự). 驱逐 = ĐUỔI ĐI, TRỤC XUẤT: 驱逐出境.'},
    {zh:'借鉴',hv:'tá giám',vn:'học hỏi, lấy làm gương',
     warn:'Không có "tá giám" trong tiếng Việt; 鉴 = gương → mượn gương người khác để soi mình = HỌC HỎI KINH NGHIỆM.'},
    {zh:'干劲',hv:'cán kình',vn:'sự hăng say',
     warn:'干 ở đây đọc gàn (làm), không phải gān (khô). 干劲十足 = hăng say hết mức.'},
    {zh:'扎实',hv:'trát thực',vn:'vững chắc',
     warn:'"Trát thực" vô nghĩa với người Việt; 扎实 = VỮNG VÀNG (kiến thức, kỹ năng). Đừng nhầm với 结实 (bền, khoẻ).'},
    {zh:'现成',hv:'hiện thành',vn:'có sẵn, làm sẵn',
     warn:'Không phải "hiện thành / hiện tại thành". 现成的理由 = lý do CÓ SẴN, không phải nghĩ.'},
    {zh:'谢绝',hv:'tạ tuyệt',vn:'từ chối khéo',
     warn:'谢 ở đây KHÔNG phải "cảm ơn" đơn thuần: 谢绝参观 = MIỄN tham quan (không cho vào), không phải "cảm ơn đã tham quan".'},
    {zh:'神气',hv:'thần khí',vn:'oai vệ; vênh váo',
     warn:'"Thần khí" tiếng Việt thiên về khí chất tinh thần. 神气 tiếng Trung là TÍNH TỪ: oai vệ (khen) hoặc vênh váo (chê) — xem ngữ cảnh.'},
    {zh:'塑造',hv:'tố tạo',vn:'xây dựng (hình tượng)',
     warn:'塑 đọc sù (không phải suò). 塑造人物 = XÂY DỰNG NHÂN VẬT trong tác phẩm, không chỉ "nặn tượng".'},
    {zh:'残次品',hv:'tàn thứ phẩm',vn:'hàng lỗi',
     warn:'"Tàn thứ phẩm" không dùng; 次 = kém (thứ yếu) → 次品 = HÀNG KÉM CHẤT LƯỢNG; dịch "hàng lỗi".'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'有文献',right:'记载'},
  {left:'发现凶恶的鬼就',right:'捆绑起来'},
  {left:'无须揭露',right:'恶行'},
  {left:'文化的',right:'昌盛'},
  {left:'反映世俗生活',right:'题材'},
  {left:'驱逐',right:'祸凶'},
  {left:'祝福新年',right:'吉祥喜庆'},
  {left:'一个重要的',right:'里程碑'},
  {left:'书信上需要',right:'盖章'},
  {left:'在版上涂抹上',right:'墨'},
  {left:'满足人们的',right:'审美需求'},
  {left:'寄托着百姓',right:'美好愿望'},
  {left:'为春节增添了',right:'浓浓的年味'},
  {left:'期盼',right:'丰收'},
  {left:'恭喜',right:'发财'},
  {left:'连年',right:'有余'},
  {left:'老百姓',right:'喜闻乐见'},
  {left:'那虎翘着',right:'尾巴'},
  {left:'全身散发着',right:'喜气'},
  {left:'他耸耸',right:'肩'},
  {left:'说话',right:'吞吞吐吐'},
  {left:'基本功',right:'扎实'},
  {left:'交流艺术',right:'心得'},
  {left:'他总是干劲',right:'十足'},
  {left:'虽然任重',right:'道远'},
  {left:'也不会一帆',right:'风顺'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu (fill + chọn từ)
// ══════════════════════════════════════════
var fillData = [
  {pre:'关于春节的',blank:'起源',post:'，民间流传着好几种不同的说法。',hint:'(nguồn gốc)',ans:'起源'},
  {pre:'为了写毕业论文，他在图书馆查阅了大量',blank:'文献',post:'。',hint:'(tài liệu, tư liệu)',ans:'文献'},
  {pre:'门神画上的武将面目',blank:'凶恶',post:'，据说是为了吓走鬼怪。',hint:'(hung ác, dữ tợn)',ans:'凶恶'},
  {pre:'过年的时候，大家见面都要说几句',blank:'吉祥',post:'话。',hint:'(may mắn)',ans:'吉祥'},
  {pre:'考上大学是我人生中的一个',blank:'里程碑',post:'。',hint:'(cột mốc)',ans:'里程碑'},
  {pre:'钢笔没',blank:'墨水儿',post:'了，你能借我一支笔吗？',hint:'(mực)',ans:'墨水儿'},
  {pre:'这份证明必须由学校',blank:'盖章',post:'才有效。',hint:'(đóng dấu)',ans:'盖章'},
  {pre:'一看到红灯笼，人们就会',blank:'联想',post:'到春节。',hint:'(liên tưởng)',ans:'联想'},
  {pre:'别让孩子在墙上乱',blank:'涂抹',post:'，否则很难擦干净。',hint:'(bôi vẽ)',ans:'涂抹'},
  {pre:'借住在朋友这儿',blank:'终究',post:'不是长久之计，还是应该尽快租个房子。',hint:'(chung quy, xét cho cùng)',ans:'终究'},
  {pre:'为了安全和环保，很多城市都禁止燃放',blank:'烟花爆竹',post:'。',hint:'(pháo)',ans:'烟花爆竹'},
  {pre:'今年雨水充足，村里的水稻又是大',blank:'丰收',post:'。',hint:'(được mùa)',ans:'丰收'},
  {pre:'想靠买彩票',blank:'发财',post:'，恐怕不太现实。',hint:'(phát tài)',ans:'发财'},
  {pre:'由于经营不善，这家工厂',blank:'连年',post:'亏损，最后只好关门了。',hint:'(nhiều năm liền)',ans:'连年'},
  {pre:'“画蛇添足”这个成语就来自一则古代',blank:'寓言',post:'。',hint:'(truyện ngụ ngôn)',ans:'寓言'},
  {pre:'我们应该尊重每个人的宗教',blank:'信仰',post:'。',hint:'(tín ngưỡng)',ans:'信仰'},
  {pre:'相声是中国观众',blank:'喜闻乐见',post:'的节目。',hint:'(được yêu thích)',ans:'喜闻乐见'},
  {pre:'弟弟穿上新校服，显得特别',blank:'神气',post:'。',hint:'(oai vệ)',ans:'神气'},
  {pre:'小猫高兴地',blank:'翘',post:'着尾巴，在屋子里走来走去。',hint:'(vểnh)',ans:'翘'},
  {pre:'每年三月，公园里桃花',blank:'盛开',post:'，游人特别多。',hint:'(nở rộ)',ans:'盛开'},
  {pre:'问他作业写完没有，他什么也没说，只是',blank:'耸',post:'了耸肩。',hint:'(nhún vai)',ans:'耸'},
  {pre:'魏',blank:'州',post:'在今天的河北省邯郸市魏县。',hint:'(châu — đơn vị hành chính xưa)',ans:'州'},
  {pre:'我对书法完全是',blank:'外行',post:'，看不出这幅字好在哪儿。',hint:'(người ngoài nghề)',ans:'外行'},
  {pre:'有什么话就直说，别',blank:'吞吞吐吐',post:'的。',hint:'(ấp úng)',ans:'吞吞吐吐'},
  {pre:'引进新设备以后，',blank:'残次品',post:'率降低了一半。',hint:'(hàng lỗi, hỏng)',ans:'残次品'},
  {pre:'这台洗衣机刚买回来就坏了，肯定是',blank:'次品',post:'。',hint:'(hàng kém chất lượng)',ans:'次品'},
  {pre:'冰箱里有',blank:'现成',post:'的饭菜，你热一热就能吃。',hint:'(có sẵn)',ans:'现成'},
  {pre:'在中国留学四年，北京已经成了我的第二',blank:'故乡',post:'。',hint:'(quê hương)',ans:'故乡'},
  {pre:'这首诗运用了比喻和夸张的修辞',blank:'手法',post:'。',hint:'(thủ pháp, biện pháp)',ans:'手法'},
  {pre:'中国年画虽不分',blank:'派别',post:'，但不同地区的年画各有所长。',hint:'(trường phái)',ans:'派别'},
  {pre:'这次考得不错，希望你',blank:'再接再厉',post:'，争取下次考得更好。',hint:'(cố gắng hơn nữa)',ans:'再接再厉'},
  {pre:'小王因病',blank:'缺席',post:'了今天的会议。',hint:'(vắng mặt)',ans:'缺席'},
  {pre:'离考试只剩一个月了，大家要鼓足',blank:'干劲',post:'。',hint:'(nhiệt huyết, sự hăng say)',ans:'干劲'},
  {pre:'保护传统文化',blank:'任重道远',post:'，需要一代又一代人的努力。',hint:'(gánh nặng đường xa)',ans:'任重道远'},
  {pre:'人生不可能',blank:'一帆风顺',post:'，遇到挫折是很正常的。',hint:'(thuận buồm xuôi gió)',ans:'一帆风顺'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (终究 · 愈……愈…… · 重复关键词) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['单色印品','终究','不能满足','人们的','审美需求','。'],ans:'单色印品终究不能满足人们的审美需求。',audio:'单色印品终究不能满足人们的审美需求。'},
  {words:['猫','终究','是动物','，','动物急了','咬人','也是正常的','。'],ans:'猫终究是动物，动物急了咬人也是正常的。',audio:'猫终究是动物，动物急了咬人也是正常的。'},
  {words:['正义的事业','终究','会','取得胜利','。'],ans:'正义的事业终究会取得胜利。',audio:'正义的事业终究会取得胜利。'},
  {words:['一个人的力量','终究','是有限的','，','还是','团结力量大','。'],ans:'一个人的力量终究是有限的，还是团结力量大。',audio:'一个人的力量终究是有限的，还是团结力量大。'},
  {words:['愈是','经营年画','久了','，','他对年画','就愈是','热爱','。'],ans:'愈是经营年画久了，他对年画就愈是热爱。',audio:'愈是经营年画久了，他对年画就愈是热爱。'},
  {words:['情况','愈','紧急','，','愈','需要','沉着冷静','。'],ans:'情况愈紧急，愈需要沉着冷静。',audio:'情况愈紧急，愈需要沉着冷静。'},
  {words:['市场竞争','愈','激烈','愈是','如此','。'],ans:'市场竞争愈激烈愈是如此。',audio:'市场竞争愈激烈愈是如此。'},
  {words:['一个家庭','，','愈重视教育','，','教育的投入','愈多','。'],ans:'一个家庭，愈重视教育，教育的投入愈多。',audio:'一个家庭，愈重视教育，教育的投入愈多。'},
  {words:['路近的送','，','路远的','也送','；','晴天送','，','雨天','也送','。'],ans:'路近的送，路远的也送；晴天送，雨天也送。',audio:'路近的送，路远的也送；晴天送，雨天也送。'},
  {words:['这泪水','，','是激动的泪水','，','兴奋的泪水','，','收获的泪水','。'],ans:'这泪水，是激动的泪水，兴奋的泪水，收获的泪水。',audio:'这泪水，是激动的泪水，兴奋的泪水，收获的泪水。'},
  {words:['年画','寄托着','百姓','美好的','愿望','。'],ans:'年画寄托着百姓美好的愿望。',audio:'年画寄托着百姓美好的愿望。'},
  {words:['不同地区的年画','各有所长','，','都值得','学习借鉴','。'],ans:'不同地区的年画各有所长，都值得学习借鉴。',audio:'不同地区的年画各有所长，都值得学习借鉴。'},
  {words:['虽然','任重道远','，','但','他','一定会','坚持下去','。'],ans:'虽然任重道远，但他一定会坚持下去。',audio:'虽然任重道远，但他一定会坚持下去。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这篇报道____了一些商家卖假货的真相。',opts:['揭露','透露','暴露','流露'],ans:0,
   exp:'揭露真相 = chủ động vạch trần sự thật (điều xấu bị che giấu). 透露 = hé lộ tin tức; 暴露 = bị lộ ra (không chủ ý); 流露 = bộc lộ (tình cảm).'},
  {wrong:'新年到了，祝愿我们的祖国繁荣____！',opts:['茂盛','昌盛','旺盛','丰盛'],ans:1,
   exp:'繁荣昌盛 là cụm cố định (đất nước phồn vinh hưng thịnh). 茂盛 = (cây cỏ) tươi tốt; 旺盛 = (sức sống) dồi dào; 丰盛 = (bữa ăn) thịnh soạn.'},
  {wrong:'最近历史____的电视剧特别受欢迎。',opts:['话题','主题','题材','题目'],ans:2,
   exp:'历史题材 = đề tài lịch sử (chất liệu sáng tác). 话题 = chủ đề câu chuyện; 主题 = tư tưởng chủ đạo; 题目 = đầu bài, nhan đề.'},
  {wrong:'那名外国人因为违法被____出境了。',opts:['驱赶','赶走','驱散','驱逐'],ans:3,
   exp:'驱逐出境 = trục xuất khỏi nước (cụm cố định, trang trọng). 驱赶 = xua (gia súc, ruồi); 驱散 = giải tán (đám đông, sương mù); 赶走 khẩu ngữ, không đi với 出境.'},
  {wrong:'父母把全部希望都____在孩子身上。',opts:['寄托','寄存','委托','托付'],ans:0,
   exp:'把希望寄托在…… = đặt hy vọng vào (gửi gắm tình cảm, hy vọng). 寄存 = gửi giữ đồ; 委托 = uỷ thác công việc; 托付 = phó thác (người, việc) cho ai.'},
  {wrong:'这只小猫给我们家____了很多乐趣。',opts:['增加','增添','增长','添加'],ans:1,
   exp:'增添乐趣 = thêm niềm vui (thứ trừu tượng, tích cực). 增加 thiên về số lượng; 增长 = tăng trưởng (số liệu); 添加 = cho thêm (vật cụ thể: 添加剂).'},
  {wrong:'屏幕上会____出现几个数字，你要迅速记住它们。',opts:['连年','连忙','连续','连同'],ans:2,
   exp:'连续出现 = xuất hiện nối tiếp (không phải đơn vị năm → không dùng 连年 — đáp án 做一做 của sách). 连忙 = vội vàng; 连同 = cùng với.'},
  {wrong:'这幅画把老人的____画得非常逼真。',opts:['形态','状态','心态','神态'],ans:3,
   exp:'神态逼真 = thần thái như thật (nét mặt, dáng điệu biểu lộ tinh thần). 形态 = hình thái; 状态 = trạng thái; 心态 = tâm thái, thái độ tâm lý.'},
  {wrong:'刚出锅的包子____着诱人的香味。',opts:['散发','发散','发表','发挥'],ans:0,
   exp:'散发着香味 = toả hương thơm. 发散 = phát tán (tư duy phân kỳ, ánh sáng); 发表 = đăng, phát biểu; 发挥 = phát huy.'},
  {wrong:'那个____员在门口站了半天，一件产品也没卖出去。',opts:['推广','推销','推荐','推动'],ans:1,
   exp:'推销员 = nhân viên chào hàng (cụm cố định). 推广 = phổ biến rộng; 推荐 = giới thiệu, tiến cử; 推动 = thúc đẩy.'},
  {wrong:'由于此地涉及国家机密，所以____参观。',opts:['拒绝','谢谢','谢绝','杜绝'],ans:2,
   exp:'谢绝参观 = miễn tham quan (lời thông báo lịch sự, 练习2 của sách). 拒绝 quá cứng khi viết biển báo; 杜绝 = chấm dứt hẳn (hiện tượng xấu).'},
  {wrong:'学外语一定要打下____的基础。',opts:['结实','坚固','牢固','扎实'],ans:3,
   exp:'打下扎实的基础 = tạo nền tảng vững chắc (kiến thức). 结实 = bền, khoẻ (đồ vật, thân thể); 坚固 = kiên cố (công trình); 牢固 thường đi 牢固地掌握, 基础牢固 cũng có nhưng 打下扎实的基础 là cụm của bài.'},
  {wrong:'这部小说成功地____了一位勇敢的女英雄形象。',opts:['塑造','制造','创造','建造'],ans:0,
   exp:'塑造形象 = xây dựng hình tượng (nghệ thuật). 制造 = chế tạo (sản phẩm); 创造 = sáng tạo (kỷ lục, của cải); 建造 = xây (nhà cửa).'},
  {wrong:'多____别人成功的经验，可以少走弯路。',opts:['参加','借鉴','借用','鉴定'],ans:1,
   exp:'借鉴经验 = học hỏi kinh nghiệm. 借用 = mượn dùng (đồ vật, từ ngữ); 鉴定 = giám định; 参加 = tham gia.'},
  {wrong:'网络游戏____了他大部分的业余时间。',opts:['占领','据说','占据','根据'],ans:2,
   exp:'占据时间 = chiếm (thời gian, vị trí). 占领 thường dùng cho lãnh thổ bằng vũ lực (占领城市); 据说, 根据 không cùng nghĩa.'},
  {wrong:'想要成就一番事业，首先要____自己的目标。',opts:['建立','设立','成立','确立'],ans:3,
   exp:'确立目标 = xác lập mục tiêu (练习3 của sách). 建立 = xây dựng (quan hệ, cơ sở); 设立 = đặt ra (cơ quan, giải thưởng); 成立 = thành lập (tổ chức).'},
  {wrong:'抱着必胜的____坚持下去，最后的胜利一定属于你。',opts:['信念','信心','信任','信用'],ans:0,
   exp:'必胜的信念 = niềm tin tất thắng (练习3 của sách). 信心 = sự tự tin (对……有信心); 信任 = tín nhiệm; 信用 = uy tín, tín dụng.'},
  {wrong:'老师让我们读完这本书以后写一篇读书____。',opts:['心情','心得','心意','心理'],ans:1,
   exp:'读书心得 = bài cảm nhận, thu hoạch sau khi đọc. 心情 = tâm trạng; 心意 = tấm lòng; 心理 = tâm lý.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 35 + ôn từ HSK 6 bài 1–29 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy đã đỗ đại học, nhưng cậu ấy không hề kiêu ngạo mà quyết tâm cố gắng hơn nữa, vì cậu biết con đường phía trước vẫn là gánh nặng đường xa.',zh:'虽然已经考上了大学，但他没有骄傲，而是决心再接再厉，因为他知道前面的路任重道远。',py:'Suīrán yǐjīng kǎoshangle dàxué, dàn tā méiyǒu jiāo\'ào, ér shì juéxīn zàijiē-zàilì, yīnwèi tā zhīdào qiánmian de lù rènzhòng-dàoyuǎn.',goiY:['虽然……但……','没有……，而是……','再接再厉','任重道远'],giai:'Ba vế: nhượng bộ (虽然……但……) → đối lập 没有 A 而是 B (không A mà là B) → nguyên nhân 因为. 再接再厉 viết 厉 (không phải 励).'},
  {vi:'Càng tìm hiểu nguồn gốc của tranh Tết, tôi càng cảm thấy nó gửi gắm biết bao ước nguyện tốt đẹp của người dân.',zh:'愈是了解年画的起源，我就愈觉得它寄托着老百姓许多美好的愿望。',py:'Yù shì liǎojiě niánhuà de qǐyuán, wǒ jiù yù juéde tā jìtuōzhe lǎobǎixìng xǔduō měihǎo de yuànwàng.',goiY:['愈是……就愈……','起源','寄托'],giai:'愈……愈…… = 越……越…… nhưng văn viết (điểm ngữ pháp 2); vế sau có chủ ngữ riêng (我) thì 就 đứng sau chủ ngữ, trước 愈. 寄托着 + 愿望 = gửi gắm ước nguyện.'},
  {vi:'Dù bây giờ cậu có trốn tránh thế nào, sự thật rốt cuộc cũng sẽ bị vạch trần; thay vì như vậy, chi bằng sớm nói ra.',zh:'不管你现在怎么回避，真相终究会被揭露的，与其这样，不如早点儿说出来。',py:'Bùguǎn nǐ xiànzài zěnme huíbì, zhēnxiàng zhōngjiū huì bèi jiēlù de, yǔqí zhèyàng, bùrú zǎo diǎnr shuō chulai.',goiY:['不管……','终究','揭露','与其……不如……'],giai:'终究会…… = kết quả tất yếu sẽ xảy ra (nghĩa ② của 终究); 会……的 khẳng định. 回避 — HSK 6 bài 29; 与其 A 不如 B = thay vì A chi bằng B.'},
  {vi:'Những bức tranh Tết này đều là tư liệu lịch sử quý giá; để bảo vệ chúng, bảo tàng không cho du khách chụp ảnh, kẻo làm hỏng tranh.',zh:'这些年画都是珍贵的历史文献，为了保护它们，博物馆谢绝游客拍照，以免损坏。',py:'Zhèxiē niánhuà dōu shì zhēnguì de lìshǐ wénxiàn, wèile bǎohù tāmen, bówùguǎn xièjué yóukè pāizhào, yǐmiǎn sǔnhuài.',goiY:['文献','为了……','谢绝','以免'],giai:'谢绝 + V = lịch sự không cho phép (văn thông báo); 以免 = để tránh (HSK 6 bài 21) đặt ở vế cuối; 损坏 — HSK 6 bài 29.'},
  {vi:'Tranh Tết không chỉ làm cho ngày Tết thêm đậm đà không khí, mà còn là loại hình nghệ thuật được bà con yêu thích.',zh:'年画不仅为春节增添了浓浓的年味，而且是老百姓喜闻乐见的艺术形式。',py:'Niánhuà bùjǐn wèi Chūnjié zēngtiānle nóngnóng de niánwèir, érqiě shì lǎobǎixìng xǐwén-lèjiàn de yìshù xíngshì.',goiY:['不仅……而且……','为……增添','喜闻乐见'],giai:'为 + đối tượng + 增添 + điều tốt; 喜闻乐见 làm định ngữ, chủ thể là 老百姓 / 群众.'},
  {vi:'Chỉ khi nền tảng vững chắc, lại học hỏi thêm kinh nghiệm của người khác, thì em mới vẽ được những tác phẩm có thần thái như thật.',zh:'只有基本功扎实，再多借鉴别人的经验，你才能画出神态逼真的作品。',py:'Zhǐyǒu jīběngōng zhāshi, zài duō jièjiàn biérén de jīngyàn, nǐ cái néng huàchū shéntài bīzhēn de zuòpǐn.',goiY:['只有……才……','扎实','借鉴','神态'],giai:'只有……才…… (điều kiện duy nhất); 借鉴经验 = học hỏi kinh nghiệm (khác 参考 tài liệu); 神态逼真 làm định ngữ cho 作品.'},
  {vi:'Hễ mặc cả với anh ấy là anh ấy lại ấp úng, một lý do có sẵn cũng không nói ra được, đúng là chẳng giống dân buôn chút nào.',zh:'一跟他讨价还价，他就吞吞吐吐的，一条现成的理由也说不出来，真不像个商人。',py:'Yì gēn tā tǎojià-huánjià, tā jiù tūntūntǔtǔ de, yì tiáo xiànchéng de lǐyóu yě shuō bu chūlai, zhēn bú xiàng ge shāngrén.',goiY:['一……就……','吞吞吐吐','现成','一……也不……'],giai:'一 + lượng từ + N + 也 + 不 / 没 = phủ định tuyệt đối ("một … cũng không"); 说不出来 bổ ngữ khả năng. 不像个商人 — 个 thêm sắc thái khẩu ngữ.'},
  {vi:'Đồ làm thủ công khó tránh khỏi có hàng lỗi, nhưng xét cho cùng mỗi món đều là độc nhất vô nhị, vì vậy anh ấy chưa bao giờ hạ giá.',zh:'手工做的东西难免有残次品，但每一件终究都是独一无二的，所以他从来不降价。',py:'Shǒugōng zuò de dōngxi nánmiǎn yǒu cáncìpǐn, dàn měi yí jiàn zhōngjiū dōu shì dúyī-wú\'èr de, suǒyǐ tā cónglái bú jiàngjià.',goiY:['难免','残次品','终究','所以'],giai:'终究是…… = bản chất không thay đổi (nghĩa ① của 终究, ≈ 毕竟); 难免 = khó tránh (HSK 5). Ba vế: nhượng bộ → đánh giá → kết quả.'},
  {vi:'Từ nhỏ anh ấy đã xác lập mục tiêu của mình; cho dù con đường không thuận buồm xuôi gió, anh ấy cũng chưa từng đánh mất niềm tin.',zh:'他从小就确立了自己的目标，即使道路并不一帆风顺，他也从来没有失去过信念。',py:'Tā cóngxiǎo jiù quèlìle zìjǐ de mùbiāo, jíshǐ dàolù bìng bú yìfān-fēngshùn, tā yě cónglái méiyǒu shīqùguo xìnniàn.',goiY:['确立','即使……也……','一帆风顺','信念'],giai:'即使……也…… (giả thiết nhượng bộ); 并不 nhấn mạnh phủ định; 从来没有 + V过 = chưa từng. Chú ý biến điệu 一帆 → yì fān.'},
  {vi:'Ông ấy quanh năm bận rộn, nhưng hễ nói đến tranh Tết là lại hăng say hẳn lên, các buổi giao lưu kinh nghiệm thì chưa bao giờ vắng mặt.',zh:'他一年到头都很忙，可是一说起年画就干劲十足，交流心得的活动他从不缺席。',py:'Tā yì nián dào tóu dōu hěn máng, kěshì yì shuōqǐ niánhuà jiù gànjìn shízú, jiāoliú xīndé de huódòng tā cóng bù quēxí.',goiY:['一年到头','一……就……','干劲','心得','缺席'],giai:'Câu có tân ngữ đưa lên đầu (交流心得的活动他从不缺席) để nhấn mạnh — giống câu bài khoá. 心得 = điều rút ra (đừng hiểu theo "tâm đắc" tiếng Việt).'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Tranh Tết bắt nguồn từ tranh môn thần thời cổ; tương truyền có hai anh em chuyên giám sát trăm loài quỷ, người ta vẽ hình họ lên cửa để trừ ma quỷ.',zh:'年画始于古代的门神画，传说有一对兄弟专门监督百鬼，人们把他们的像画在门上用以防鬼。',py:'Niánhuà shǐ yú gǔdài de ménshén huà, chuánshuō yǒu yí duì xiōngdì zhuānmén jiāndū bǎi guǐ, rénmen bǎ tāmen de xiàng huà zài mén shang yòngyǐ fáng guǐ.',goiY:['始于 = bắt đầu từ','监督 = giám sát','用以 = dùng để'],giai:'始于 = 从……开始 (văn viết); 用以 + V = dùng để …; 把……画在门上 là câu 把 chỉ vị trí.'},
  {vi:'Cùng với sự phát triển kinh tế và sự hưng thịnh văn hoá, nội dung tranh môn thần được mở rộng, các tác phẩm phản ánh đề tài đời sống thế tục cũng bước vào lĩnh vực này.',zh:'随着经济的发展和文化的昌盛，门神画的内容得以拓展，反映世俗生活题材的作品也进入了这一领域。',py:'Suízhe jīngjì de fāzhǎn hé wénhuà de chāngshèng, ménshén huà de nèiróng déyǐ tuòzhǎn, fǎnyìng shìsú shēnghuó tícái de zuòpǐn yě jìnrùle zhè yī lǐngyù.',goiY:['昌盛 = hưng thịnh','得以 = được, có thể','题材 = đề tài'],giai:'得以 + V = nhờ điều kiện trên mà (được) … (văn viết); định ngữ dài 反映世俗生活题材的 bổ nghĩa cho 作品.'},
  {vi:'Có giấy rồi thì viết chữ cần mực, thế là có người phát minh ra mực; tranh chữ, thư từ cần đóng dấu, thế là con dấu bắt đầu thịnh hành.',zh:'有了纸，书写就需要墨水儿，于是有人发明了墨；字画、书信上需要盖章，于是印章开始流行。',py:'Yǒule zhǐ, shūxiě jiù xūyào mòshuǐr, yúshì yǒu rén fāmíngle mò; zìhuà, shūxìn shang xūyào gài zhāng, yúshì yìnzhāng kāishǐ liúxíng.',goiY:['墨水儿 = mực','于是 = thế là','盖章 = đóng dấu'],giai:'Chuỗi "nhu cầu → 于是 → phát minh" lặp lại — chính là thủ pháp 重复关键词 (篇章修辞 của bài).'},
  {vi:'Tuy khắc bản cần rất nhiều nhân công và vật liệu, nhưng một khi bắt đầu in thì liền cho thấy hiệu suất cao chưa từng có.',zh:'虽然雕版需要大量的人工和材料，但一经开印，就显示出空前的高效率。',py:'Suīrán diāobǎn xūyào dàliàng de réngōng hé cáiliào, dàn yì jīng kāiyìn, jiù xiǎnshì chū kōngqián de gāo xiàolǜ.',goiY:['一经……就…… = một khi … thì liền','空前 = chưa từng có'],giai:'一经……就…… (văn viết) = chỉ cần trải qua một lần … là lập tức …; 空前 = trước đây chưa từng có.'},
  {vi:'Bản in một màu xét cho cùng không thể đáp ứng nhu cầu thẩm mỹ của con người, thế là kỹ thuật in chồng màu được áp dụng vào việc làm tranh Tết.',zh:'单色印品终究不能满足人们的审美需求，于是彩色套印技术运用到了年画制作上。',py:'Dānsè yìnpǐn zhōngjiū bù néng mǎnzú rénmen de shěnměi xūqiú, yúshì cǎisè tàoyìn jìshù yùnyòng dàole niánhuà zhìzuò shang.',goiY:['终究 = xét cho cùng','审美 = thẩm mỹ','套印 = in chồng màu'],giai:'终究 ở đây là nghĩa ① (bản chất không đổi, ≈ 毕竟); dịch "xét cho cùng / dù sao cũng".'},
  {vi:'Nội dung tranh Tết từ các vị môn thần oai vũ mở rộng sang tranh chúc mừng mong được mùa, cung hỷ phát tài, rồi đến chuyện lịch sử và ngụ ngôn, không gì không có.',zh:'年画的内容从威武的门神扩展到期盼丰收、恭喜发财的吉庆画，再到历史故事和寓言，无所不包。',py:'Niánhuà de nèiróng cóng wēiwǔ de ménshén kuòzhǎn dào qīpàn fēngshōu, gōngxǐ fā cái de jíqìng huà, zài dào lìshǐ gùshi hé yùyán, wú suǒ bù bāo.',goiY:['丰收 = được mùa','发财 = phát tài','寓言 = ngụ ngôn','无所不包 = không gì không có'],giai:'从 A 扩展到 B，再到 C = từ A mở rộng sang B, rồi đến C (liệt kê theo trình tự).'},
  {vi:'Con hổ ấy vểnh đuôi, thần thái như thật, toàn thân toát lên vẻ vui tươi; tôi hỏi bao nhiêu tiền, anh ấy chỉ nhún vai.',zh:'那虎翘着尾巴，神态逼真，全身散发着喜气，我问多少钱，他只是耸耸肩。',py:'Nà hǔ qiàozhe wěiba, shéntài bīzhēn, quánshēn sànfāzhe xǐqì, wǒ wèn duōshao qián, tā zhǐshì sǒngsong jiān.',goiY:['翘 = vểnh','神态 = thần thái','散发 = toả ra','耸肩 = nhún vai'],giai:'Chuỗi vị ngữ miêu tả (翘着……，神态……，散发着……) — V着 chỉ trạng thái duy trì.'},
  {vi:'Khi bạn mặc cả với anh ấy, anh ấy lập tức trở nên ngượng ngùng, nói năng ấp a ấp úng.',zh:'当你和他讨价还价的时候，他立刻变得不好意思起来，说话吞吞吐吐。',py:'Dāng nǐ hé tā tǎojià-huánjià de shíhou, tā lìkè biàn de bù hǎoyìsi qǐlai, shuōhuà tūntūntǔtǔ.',goiY:['讨价还价 = mặc cả','起来 = bắt đầu (trạng thái)','吞吞吐吐 = ấp úng'],giai:'变得 + Adj + 起来 = trở nên … (trạng thái bắt đầu xuất hiện); 当……的时候 = khi ….'},
  {vi:'Tranh Tết Trung Quốc tuy không chia trường phái, nhưng mỗi vùng có thế mạnh riêng; thế là anh ấy không ngừng cố gắng, đi khắp các vùng sản xuất tranh Tết lớn trong cả nước.',zh:'中国年画虽不分派别，但不同地区的年画各有所长，于是他再接再厉，走遍了全国各大年画产地。',py:'Zhōngguó niánhuà suī bù fēn pàibié, dàn bù tóng dìqū de niánhuà gè yǒu suǒ cháng, yúshì tā zàijiē-zàilì, zǒubiànle quánguó gè dà niánhuà chǎndì.',goiY:['派别 = trường phái','各有所长 = mỗi bên có sở trường','再接再厉 = không ngừng cố gắng'],giai:'虽……但…… (虽 văn viết = 虽然); V + 遍 = làm khắp (走遍全国).'},
  {vi:'Càng kinh doanh tranh Tết lâu, anh ấy càng yêu tranh Tết; tuy gánh nặng đường xa, nhưng anh ấy nhất định sẽ kiên trì đến cùng.',zh:'愈是经营年画久了，他对年画就愈是热爱；虽然任重道远，但他一定会坚持下去。',py:'Yù shì jīngyíng niánhuà jiǔ le, tā duì niánhuà jiù yù shì rè\'ài; suīrán rènzhòng-dàoyuǎn, dàn tā yídìng huì jiānchí xiàqu.',goiY:['愈是……就愈是…… = càng … càng …','任重道远 = gánh nặng đường xa'],giai:'愈……愈…… = 越……越…… (văn viết); câu gốc của bài khoá. V + 下去 = tiếp tục làm.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 163): viết về một loại hình hội hoạ và hoạ sĩ của nước mình, ≥ 400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'本课介绍了中国的木版年画以及年画传人张光宁。从年画的起源讲到了年画的发展历程，同时给我们描述了一个热爱年画艺术，为年画艺术追求不止，有着远大理想和信念的年画传人。在你们的国家，一定也有具有自己民族特色的绘画艺术和具有代表性的画家，请以“我们的……艺术”为题写一种绘画艺术形式及画家的故事，字数不少于400字。',
  prompt:'Bài khoá giới thiệu tranh Tết mộc bản của Trung Quốc và người truyền nhân tranh Tết Trương Quang Ninh. Từ nguồn gốc tranh Tết nói đến quá trình phát triển của nó, đồng thời khắc hoạ một người truyền nhân yêu nghệ thuật tranh Tết, không ngừng theo đuổi nghệ thuật ấy, có lý tưởng và niềm tin lớn lao. Ở đất nước em chắc chắn cũng có loại hình hội hoạ mang đặc sắc dân tộc và những hoạ sĩ tiêu biểu. Hãy lấy "我们的……艺术" (Nghệ thuật … của chúng tôi) làm nhan đề, viết về một loại hình hội hoạ và câu chuyện về hoạ sĩ, không dưới 400 chữ.',
  dan:[
    {hoi:'题目：我们的……艺术（你要写哪一种绘画艺术？）',goiY:'①题目：我们的……艺术（如：我们的东湖画艺术）　②开头：……是越南民间绘画的一种，起源于……，已经有……年的历史了'},
    {hoi:'起源：这种绘画艺术是怎么产生的？',goiY:'①传说 / 有文献记载：…… ②人们……，用来驱逐……，祝福……吉祥 ③随着……，……的内容得以拓展；自此，……成了一种风尚'},
    {hoi:'制作和特点：它是怎么做出来的？有什么特色？',goiY:'①先……，然后在版上涂抹上……，再……，最后…… ②题材：期盼丰收的、恭喜发财的、民间故事和寓言……，无所不包 ③神态逼真，散发着喜气，是老百姓喜闻乐见的……'},
    {hoi:'画家：有代表性的画家是谁？他有什么故事？',goiY:'①他在……的故乡出生、长大，从小就……，基本功扎实 ②后来……，他却再接再厉，…… ③愈是……，他就愈是……'},
    {hoi:'目标和信念：这种艺术将来会怎样？你有什么希望？',goiY:'①他确立了……的目标，他的信念就是…… ②虽然任重道远，也不会一帆风顺，但…… ③……终究会……'}
  ],
  tuNen:['起源','驱逐','吉祥','涂抹','题材','喜闻乐见','扎实','再接再厉','愈是……就愈是……','信念','任重道远','一帆风顺','终究'],
  cauTruc:[
    {ten:'以“我们的……艺术”为题', nhan:'Nhan đề', vd:'我们的东湖画艺术', khi:'Đặt đúng nhan đề đề bài yêu cầu, chỗ …… là tên loại hình hội hoạ em chọn (tranh Đông Hồ, tranh Hàng Trống, tranh sơn mài, tranh lụa…).'},
    {ten:'A 是……的一种，起源于……', nhan:'Mở bài — giới thiệu', vd:'东湖画是越南民间绘画的一种，起源于北宁省的东湖村。', khi:'Bắt chước câu mở đầu của bài khoá (年画是中国画的一种，始于……).'},
    {ten:'随着……，……得以拓展；自此，……', nhan:'Quá trình phát triển', vd:'随着民间绘画水平的提高，东湖画的内容得以拓展。', khi:'Nói sự thay đổi theo thời gian như đoạn 3 của bài khoá.'},
    {ten:'先……，然后……，再……，最后……', nhan:'Quy trình làm tranh', vd:'画家先把画刻在木版上，然后在版上涂抹上颜料，再把纸铺上去，最后将纸揭起。', khi:'Tả cách làm tranh theo trình tự — như đoạn tả in khắc bản của bài khoá.'},
    {ten:'从……扩展到……，再到……，无所不包', nhan:'Đề tài phong phú', vd:'题材从期盼丰收的吉庆画扩展到民间故事，再到寓言，无所不包。', khi:'Liệt kê đề tài theo trình tự, kết bằng 无所不包.'},
    {ten:'愈是……，就愈是……', nhan:'Tình cảm của hoạ sĩ', vd:'愈是研究东湖画，他就愈是热爱。', khi:'Dùng điểm ngữ pháp 2 (văn viết) khi nói tình cảm tăng dần của nhân vật.'},
    {ten:'虽然任重道远，……，但……终究会……', nhan:'Kết bài', vd:'虽然任重道远，但我相信，东湖画终究会被更多的人所喜爱。', khi:'Kết bằng niềm tin về tương lai — dùng 终究 (điểm ngữ pháp 1) nghĩa "cuối cùng nhất định sẽ".'}
  ],
  checklist:[
    'Đã đặt nhan đề dạng "我们的……艺术" và viết đủ ít nhất 400 chữ Hán chưa?',
    'Có đủ hai phần đề yêu cầu: MỘT loại hình hội hoạ (nguồn gốc, cách làm, đặc sắc) VÀ câu chuyện về một hoạ sĩ tiêu biểu chưa?',
    'Phần hoạ sĩ có nêu được lý tưởng, niềm tin của người đó (như Trương Quang Ninh: 确立目标, 信念) chứ không chỉ kể tiểu sử chưa?',
    'Đã dùng đúng 终究 và 愈……愈…… (hai điểm ngữ pháp của bài) và ít nhất 6 từ mới (起源, 题材, 扎实, 再接再厉, 任重道远…) chưa?',
    'Có lặp lại từ khoá (tên loại tranh) một cách có chủ ý để đẩy chủ đề đi tới (篇章修辞 · 重复关键词) mà không lặp thừa không?'
  ],
  model:{
    zh:'我们的东湖画艺术\n东湖画是越南民间绘画的一种，起源于北宁省的东湖村，已经有四百多年的历史了。传说古时候，村里的人春节前把画贴在门上，用来驱逐祸凶，祝福新年吉祥如意。随着民间绘画水平的提高，东湖画的内容得以拓展。自此，过年贴东湖画就成了越南老百姓的一种风尚。\n东湖画是木版画。画家先把画刻在木版上，然后在版上涂抹上颜料，再把纸铺到上面，一种颜色印一次，最后将纸揭起，一幅画就完成了。它的纸和颜色都很特别：纸上涂着贝壳磨成的粉，颜色都来自树叶、花朵和竹叶烧成的炭。东湖画的题材十分广泛，有期盼丰收的，有恭喜发财的，也有民间故事和寓言，比如《老鼠娶亲》，内容无所不包。一幅幅画神态逼真，散发着喜气，是老百姓喜闻乐见的艺术形式。\n说到东湖画，就不能不说老艺人阮登制。他在东湖画的故乡出生、长大，从小就跟着父亲画画儿，基本功扎实。后来，买画的人愈来愈少，很多人都不画了，他却再接再厉，走遍各地，收集了几百块老木版，还把自己的心得教给年轻人。愈是研究东湖画，他就愈是热爱。他的信念就是让更多的人了解这门艺术。\n虽然保护传统艺术任重道远，也不会一帆风顺，但我相信，东湖画终究会被更多的人所喜爱。',
    py:'Wǒmen de Dōnghú Huà Yìshù\nDōnghú huà shì Yuènán mínjiān huìhuà de yì zhǒng, qǐyuán yú Běiníng Shěng de Dōnghú Cūn, yǐjīng yǒu sìbǎi duō nián de lìshǐ le. Chuánshuō gǔ shíhou, cūn li de rén Chūnjié qián bǎ huà tiē zài mén shang, yònglái qūzhú huòxiōng, zhùfú xīnnián jíxiáng rúyì. Suízhe mínjiān huìhuà shuǐpíng de tígāo, Dōnghú huà de nèiróng déyǐ tuòzhǎn. Zìcǐ, guònián tiē Dōnghú huà jiù chéngle Yuènán lǎobǎixìng de yì zhǒng fēngshàng.\nDōnghú huà shì mùbǎn huà. Huàjiā xiān bǎ huà kè zài mùbǎn shang, ránhòu zài bǎn shang túmǒ shang yánliào, zài bǎ zhǐ pū dào shàngmian, yì zhǒng yánsè yìn yí cì, zuìhòu jiāng zhǐ jiēqǐ, yì fú huà jiù wánchéng le. Tā de zhǐ hé yánsè dōu hěn tèbié: zhǐ shang túzhe bèiké mó chéng de fěn, yánsè dōu láizì shùyè, huāduǒ hé zhúyè shāo chéng de tàn. Dōnghú huà de tícái shífēn guǎngfàn, yǒu qīpàn fēngshōu de, yǒu gōngxǐ fā cái de, yě yǒu mínjiān gùshi hé yùyán, bǐrú 《Lǎoshǔ Qǔqīn》, nèiróng wú suǒ bù bāo. Yì fúfú huà shéntài bīzhēn, sànfāzhe xǐqì, shì lǎobǎixìng xǐwén-lèjiàn de yìshù xíngshì.\nShuōdào Dōnghú huà, jiù bù néng bù shuō lǎo yìrén Ruǎn Dēngzhì. Tā zài Dōnghú huà de gùxiāng chūshēng, zhǎngdà, cóngxiǎo jiù gēnzhe fùqin huà huàr, jīběngōng zhāshi. Hòulái, mǎi huà de rén yù lái yù shǎo, hěn duō rén dōu bú huà le, tā què zàijiē-zàilì, zǒubiàn gè dì, shōujíle jǐ bǎi kuài lǎo mùbǎn, hái bǎ zìjǐ de xīndé jiāo gěi niánqīngrén. Yù shì yánjiū Dōnghú huà, tā jiù yù shì rè\'ài. Tā de xìnniàn jiù shì ràng gèng duō de rén liǎojiě zhè mén yìshù.\nSuīrán bǎohù chuántǒng yìshù rènzhòng-dàoyuǎn, yě bú huì yìfān-fēngshùn, dàn wǒ xiāngxìn, Dōnghú huà zhōngjiū huì bèi gèng duō de rén suǒ xǐ\'ài.',
    vn:'Nghệ thuật tranh Đông Hồ của chúng tôi\nTranh Đông Hồ là một loại tranh dân gian Việt Nam, bắt nguồn từ làng Đông Hồ, tỉnh Bắc Ninh, đã có hơn bốn trăm năm lịch sử. Tương truyền ngày xưa, người trong làng dán tranh lên cửa trước Tết để xua đuổi điều dữ, chúc năm mới cát tường như ý. Cùng với trình độ hội hoạ dân gian được nâng cao, nội dung tranh Đông Hồ được mở rộng. Từ đó, dán tranh Đông Hồ ngày Tết đã trở thành một nét phong tục của người dân Việt Nam.\nTranh Đông Hồ là tranh khắc gỗ. Người thợ trước hết khắc hình lên bản gỗ, rồi quét màu lên bản, sau đó trải giấy lên trên, mỗi màu in một lần, cuối cùng bóc tờ giấy lên là xong một bức tranh. Giấy và màu của nó đều rất đặc biệt: trên giấy quét bột vỏ sò (điệp) nghiền nhỏ, màu sắc đều lấy từ lá cây, hoa và than lá tre. Đề tài tranh Đông Hồ vô cùng phong phú: có tranh mong được mùa, có tranh chúc phát tài, lại có chuyện dân gian và ngụ ngôn như "Đám cưới chuột" — nội dung không gì không có. Mỗi bức tranh đều có thần thái sống động, toát lên vẻ vui tươi, là loại hình nghệ thuật được bà con yêu thích.\nNói đến tranh Đông Hồ thì không thể không nhắc đến nghệ nhân Nguyễn Đăng Chế. Ông sinh ra và lớn lên ở quê hương của tranh Đông Hồ, từ nhỏ đã theo cha vẽ tranh, nền tảng rất vững. Về sau, người mua tranh ngày càng ít, nhiều người bỏ nghề, nhưng ông vẫn không ngừng cố gắng, đi khắp nơi sưu tầm được mấy trăm bản khắc gỗ cũ, còn truyền lại kinh nghiệm của mình cho lớp trẻ. Càng nghiên cứu tranh Đông Hồ, ông càng yêu nó. Niềm tin của ông là để nhiều người hơn nữa hiểu về môn nghệ thuật này.\nTuy việc bảo tồn nghệ thuật truyền thống là gánh nặng đường xa, cũng sẽ chẳng thuận buồm xuôi gió, nhưng tôi tin rằng tranh Đông Hồ rồi sẽ được nhiều người yêu thích hơn nữa.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (年画的起源 1 dòng · 木版年画 3 dòng · 年画传人张光宁 4 dòng). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách (dòng "彩色套印" sách để trống). Bấm loa nghe câu hỏi, nhìn gợi ý, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 起源 · 驱逐 · 吉祥 · 盖章 · 联想 · 涂抹 · 终究 · 寄托 · 增添 · 喜闻乐见 · 推销 · 吞吞吐吐 · 扎实 · 再接再厉 · 确立 · 信念.',
  questions:[
    {q_zh:'年画的起源',
     q_vn:'Nguồn gốc của tranh Tết',
     hint:'门神画；兄弟二人；唐宋，门神画内容拓展；清朝，使用“年画”一词',
     sample:'年画始于古代的门神画。传说有兄弟二人专门监督百鬼，人们就把他们的像画在门上，用来防鬼。唐宋时期，随着经济和文化的发展，门神画的内容得以拓展。到了清朝，有学者正式使用了“年画”一词，从此，以驱逐祸凶、祝福新年吉祥为内容的画儿就叫年画了。',
     sample_vn:'Tranh Tết bắt đầu từ tranh môn thần thời cổ. Tương truyền có hai anh em chuyên giám sát trăm loài quỷ, người ta liền vẽ hình họ lên cửa để trừ ma. Thời Đường, Tống, cùng với sự phát triển kinh tế và văn hoá, nội dung tranh môn thần được mở rộng. Đến đời Thanh, có học giả chính thức dùng từ "年画"; từ đó, tranh lấy nội dung xua đuổi tai hoạ, chúc năm mới may mắn được gọi là tranh Tết.',
     note:'Đi theo trình tự thời gian: 古代 → 唐宋 → 清朝; dùng 始于 / 得以拓展 / 从此.'},
    {q_zh:'木版年画 · 雕版的发明',
     q_vn:'Tranh Tết mộc bản · Sự ra đời của in khắc bản',
     hint:'墨→印章→碑刻、拓印→扩大印章→在版上刷印',
     sample:'有了纸，书写需要墨水儿，于是有人发明了墨；书信上需要盖章，于是印章开始流行；后来碑刻、拓印技术被广泛运用，有人就联想到把这些技术结合起来印书。人们把印章扩大成一张纸那么大，把内容刻在版上，涂抹上墨，铺上纸，均匀地刷印，这就是最早的雕版印刷。',
     sample_vn:'Có giấy rồi, viết chữ cần mực, thế là có người phát minh ra mực; thư từ cần đóng dấu, thế là con dấu thịnh hành; sau đó kỹ thuật khắc bia, in dập được dùng rộng rãi, có người liền nghĩ đến việc kết hợp các kỹ thuật ấy để in sách. Người ta phóng con dấu to bằng một tờ giấy, khắc nội dung lên bản, quét mực, trải giấy, chải in thật đều — đó là in khắc bản sớm nhất.',
     note:'Chuỗi mũi tên của gợi ý = chuỗi 于是……；于是……；于是…… (lặp từ khoá — 篇章修辞 của bài).'},
    {q_zh:'木版年画 · 彩色套印',
     q_vn:'Tranh Tết mộc bản · In chồng màu',
     hint:'（表中此栏无提示，可参考课文：单色印品终究……，之后就有了……，木版彩色套印年画就此……）',
     sample:'单色印品终究不能满足人们的审美需求，之后就有了彩色套印技术。人们把这种技术运用到年画制作上，木版彩色套印年画就此诞生了。',
     sample_vn:'Bản in một màu xét cho cùng không đáp ứng được nhu cầu thẩm mỹ của con người, sau đó liền có kỹ thuật in chồng màu. Người ta áp dụng kỹ thuật này vào làm tranh Tết, tranh Tết mộc bản in chồng màu từ đó ra đời.',
     note:'Ô gợi ý của dòng này trong sách để TRỐNG — tự tóm từ đoạn 6 của bài khoá; nhớ dùng 终究 (điểm ngữ pháp 1).'},
    {q_zh:'木版年画 · 年画走进百姓生活',
     q_vn:'Tranh Tết mộc bản · Tranh Tết đi vào đời sống người dân',
     hint:'过年贴年画，年画印制场所，年画内容，年画成了……的载体与工具',
     sample:'宋明两代，木版年画走向成熟，走进了百姓生活，过年贴年画成了一种风尚，年画也为春节增添了浓浓的年味。当时，家族式的年画印制场所遍及全国。年画的内容从门神扩展到期盼丰收、恭喜发财的吉庆画，再到历史故事、寓言和神话，无所不包。年画成了文化交流、道德教育、信仰传承的载体与工具。',
     sample_vn:'Qua hai đời Tống, Minh, tranh Tết mộc bản đi đến chín muồi và đi vào đời sống người dân; dán tranh Tết thành phong tục, tranh cũng làm cho Tết thêm đậm không khí. Khi đó, xưởng in tranh kiểu gia tộc có mặt khắp cả nước. Nội dung tranh từ môn thần mở rộng sang tranh chúc được mùa, phát tài, rồi chuyện lịch sử, ngụ ngôn, thần thoại — không gì không có. Tranh Tết trở thành phương tiện, công cụ để giao lưu văn hoá, giáo dục đạo đức, truyền thừa tín ngưỡng.',
     note:'Nói đủ 4 ý của gợi ý theo thứ tự; dùng 从……扩展到……，再到……，无所不包.'},
    {q_zh:'年画传人张光宁 · 初次认识',
     q_vn:'Người truyền nhân Trương Quang Ninh · Lần đầu gặp gỡ',
     hint:'春节庙会，布老虎，推销',
     sample:'“我”第一次见到张光宁的木版年画是在春节庙会上。他做的布老虎神气极了，翘着尾巴，神态逼真。我问多少钱，他耸耸肩说：“这是魏州虎。”我心想：魏州是哪儿？这算什么推销术？',
     sample_vn:'"Tôi" lần đầu thấy tranh Tết mộc bản của Trương Quang Ninh là ở hội chùa ngày Tết. Con hổ vải anh làm trông oai vệ vô cùng, vểnh đuôi, thần thái như thật. Tôi hỏi giá, anh nhún vai nói: "Đây là hổ Nguỵ Châu." Tôi thầm nghĩ: Nguỵ Châu ở đâu? Thế này mà gọi là chào hàng sao?',
     note:'Kể ngắn, có lời thoại trực tiếp; 这算什么……？ = câu phản vấn chê.'},
    {q_zh:'年画传人张光宁 · 第二印象',
     q_vn:'Người truyền nhân Trương Quang Ninh · Ấn tượng thứ hai',
     hint:'不像商人，讨论……',
     sample:'第二印象是他不像个商人。你和他讨价还价，他就不好意思，说话吞吞吐吐，连“残次品不可避免”这样现成的理由都说不出来，却总想和你讨论木版年画中深厚的文化底蕴。',
     sample_vn:'Ấn tượng thứ hai là anh chẳng giống dân buôn. Bạn mặc cả với anh là anh ngượng ngùng, nói ấp úng, ngay cả lý do có sẵn như "hàng lỗi khó tránh" cũng không nói ra được, lại cứ muốn bàn với bạn về chiều sâu văn hoá trong tranh Tết mộc bản.',
     note:'连……都…… nhấn mạnh; 却 chuyển ý đối lập (不会推销 ↔ 爱讨论文化).'},
    {q_zh:'年画传人张光宁 · 相识久了',
     q_vn:'Người truyền nhân Trương Quang Ninh · Quen lâu rồi',
     hint:'出生，长大，从小……，后来……，再接再厉……，不仅如此，……',
     sample:'相识久了才知道，他在年画的故乡出生、长大，从小就画年画，基本功扎实，后来又研究了构图、人物塑造、雕版手法等。作品被市场认可后，他再接再厉，走遍了全国各大年画产地，与同行交流。不仅如此，民俗文化巡展、大学里的研讨，他都从不缺席。',
     sample_vn:'Quen lâu rồi mới biết, anh sinh ra, lớn lên ở quê hương tranh Tết, từ nhỏ đã vẽ tranh, nền tảng vững vàng, sau đó lại nghiên cứu bố cục, xây dựng nhân vật, thủ pháp khắc bản… Khi tác phẩm được thị trường công nhận, anh không ngừng cố gắng, đi khắp các vùng tranh Tết lớn trong nước giao lưu với đồng nghiệp. Không chỉ vậy, triển lãm lưu động văn hoá dân gian hay hội thảo ở đại học, anh đều chưa từng vắng mặt.',
     note:'Bám đúng khung gợi ý: 出生、长大 → 从小…… → 后来…… → 再接再厉…… → 不仅如此…….'},
    {q_zh:'年画传人张光宁 · 目标和信念',
     q_vn:'Người truyền nhân Trương Quang Ninh · Mục tiêu và niềm tin',
     hint:'传播……，拓展……',
     sample:'张光宁总是干劲十足，愈是经营年画久了，他就愈是热爱年画。他确立了自己的目标：传播年画这一民俗文化。他的信念是拓展年画的内容，使其雅俗共赏。虽然任重道远，但他一定会坚持下去。',
     sample_vn:'Trương Quang Ninh lúc nào cũng hăng say; càng làm tranh Tết lâu, anh càng yêu nó. Anh đã xác lập mục tiêu: truyền bá nét văn hoá dân gian là tranh Tết. Niềm tin của anh là mở rộng nội dung tranh Tết để ai cũng thưởng thức được. Tuy gánh nặng đường xa, nhưng anh nhất định sẽ kiên trì.',
     note:'Dùng 愈……愈…… (điểm ngữ pháp 2) và cặp 目标 — 信念 như bài khoá.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 35.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 35',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你家门上贴的这两幅画是什么？看起来挺凶的。'},
            {sp:'男',zh:'这是门神画，是我爷爷贴的。老人们说，门神能驱逐祸凶，保佑全家平安。'}],
     q:'关于门神画，可以知道什么？',qvn:'Về tranh môn thần, có thể biết điều gì?',
     opts:['是用来驱逐祸凶的','是男的自己画的','只在庙会上卖','是现代才有的'],ans:0,
     why:'门神能驱逐祸凶，保佑全家平安 → dùng để xua đuổi điều dữ. Tranh do ông nội dán, không phải anh ấy vẽ.',
     words:['驱逐','凶恶']},

    {n:2,
     lines:[{sp:'男',zh:'这块手表才戴了一个星期就不走了。'},
            {sp:'女',zh:'肯定是次品。你带着发票去商店，要求他们给你换一块吧。'}],
     q:'女的建议男的怎么做？',qvn:'Người phụ nữ khuyên người đàn ông làm gì?',
     opts:['自己修一修','再买一块新的','拿着发票去换','给厂家打电话'],ans:2,
     why:'你带着发票去商店，要求他们给你换一块 → mang hoá đơn đi đổi.',
     words:['次品']},

    {n:3,
     lines:[{sp:'女',zh:'你们在这儿拍照可不行，门口写着“谢绝拍照”呢。'},
            {sp:'男',zh:'哎呀，真不好意思，我们没注意，这就把照片删了。'}],
     q:'男的接下来会做什么？',qvn:'Người đàn ông sẽ làm gì tiếp theo?',
     opts:['继续拍照','删掉照片','去门口看看','买一张门票'],ans:1,
     why:'这就把照片删了 → sẽ xoá ảnh ngay. 谢绝拍照 = không cho chụp ảnh.',
     words:['谢绝']},

    {n:4,
     lines:[{sp:'男',zh:'听说你的画在比赛中得了二等奖，祝贺你！'},
            {sp:'女',zh:'谢谢！不过我的基本功还不够扎实，人物的神态总是画不好，还得再接再厉。'}],
     q:'女的认为自己哪方面还不够好？',qvn:'Người phụ nữ cho rằng mình còn kém ở mặt nào?',
     opts:['颜色用得不好','画得太慢','没有参加比赛','人物的神态画不好'],ans:3,
     why:'人物的神态总是画不好 → vẽ thần thái nhân vật chưa tốt. Cô ấy đã đạt giải nhì.',
     words:['扎实','神态','再接再厉']},

    {n:5,
     lines:[{sp:'女',zh:'你怎么什么都没买就回来了？'},
            {sp:'男',zh:'那个卖东西的说话吞吞吐吐的，问他产品有什么问题，他也说不清楚，我不太放心。'}],
     q:'男的为什么没买东西？',qvn:'Vì sao người đàn ông không mua gì?',
     opts:['东西太贵了','商店关门了','卖东西的人说话不清楚，他不放心','他忘了带钱'],ans:2,
     why:'说话吞吞吐吐的……说不清楚，我不太放心 → người bán ấp úng, anh không yên tâm.',
     words:['吞吞吐吐']},

    {n:6,
     lines:[{sp:'男',zh:'王教授这学期每次讲座都来得特别早。'},
            {sp:'女',zh:'是啊，他七十多岁了还干劲十足，学校的研讨会他从来不缺席。'}],
     q:'关于王教授，下列哪项正确？',qvn:'Về giáo sư Vương, điều nào dưới đây đúng?',
     opts:['工作很有干劲','常常缺席研讨会','刚刚退休','讲座经常迟到'],ans:0,
     why:'七十多岁了还干劲十足……从来不缺席 → rất hăng say, không bao giờ vắng mặt.',
     words:['干劲','缺席']},

    {n:7,
     lines:[{sp:'女',zh:'小李，你为什么要去学雕版呢？这可不是容易的事。'},
            {sp:'男',zh:'我知道任重道远，也不会一帆风顺。可我觉得这门手艺终究不能在我们这一代失传。'}],
     q:'男的为什么要学雕版？',qvn:'Vì sao người đàn ông muốn học khắc bản?',
     opts:['因为很容易学','因为能发大财','因为父母要求他','因为不想让这门手艺失传'],ans:3,
     why:'这门手艺终究不能在我们这一代失传 → không muốn nghề này thất truyền. Anh biết là khó (任重道远).',
     words:['任重道远','一帆风顺','终究']},

    {n:8,
     lines:[{sp:'男',zh:'年画是中国传统的民间艺术，它起源于古代的门神画。到了宋明两代，木版年画走向成熟，过年贴年画成了一种风尚。年画的内容非常丰富，有期盼丰收的，有恭喜发财的，还有历史故事和寓言。可以说，年画寄托着老百姓对美好生活的愿望，是老百姓喜闻乐见的艺术形式。'}],
     q:'这段话主要谈的是什么？',qvn:'Đoạn nói chủ yếu bàn về điều gì?',
     opts:['门神的传说','年画的起源、发展和意义','怎样制作年画','春节的风俗'],ans:1,
     why:'Nói nguồn gốc (起源于门神画) → phát triển (宋明走向成熟) → nội dung và ý nghĩa (寄托愿望, 喜闻乐见). Môn thần chỉ là một chi tiết.',
     words:['起源','丰收','发财','寓言','寄托','喜闻乐见']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn người Trung Quốc sang Việt Nam dịp Tết, thấy tranh Đông Hồ treo trong nhà em và hỏi đó là gì.',
     a:{sp:'Bạn',zh:'你家墙上这幅画真有意思，是什么画？',vn:'Bức tranh trên tường nhà cậu thú vị quá, là tranh gì vậy?'},
     need:['Dùng 起源于','Dùng 寄托'],
     sample:'这是东湖画，是越南的一种民间木版画，起源于北宁省的东湖村。画上的小猪、公鸡都寄托着人们对新年的美好愿望。',
     samplePy:'Zhè shì Dōnghú huà, shì Yuènán de yì zhǒng mínjiān mùbǎn huà, qǐyuán yú Běiníng Shěng de Dōnghú Cūn. Huà shang de xiǎo zhū, gōngjī dōu jìtuōzhe rénmen duì xīnnián de měihǎo yuànwàng.',
     sampleVn:'Đây là tranh Đông Hồ, một loại tranh khắc gỗ dân gian Việt Nam, bắt nguồn từ làng Đông Hồ tỉnh Bắc Ninh. Những chú lợn, con gà trên tranh đều gửi gắm ước nguyện tốt đẹp của mọi người cho năm mới.',
     tip:'Giới thiệu văn hoá: tên → loại hình → nguồn gốc (起源于) → ý nghĩa (寄托着……愿望).'},

    {scene:'Em đi chợ Tết, người bán hàng nói giá bức tranh là 500 nghìn, em muốn mặc cả nhưng anh ta nhất quyết không bớt.',
     a:{sp:'Người bán',zh:'这是纯手工的，一分钱也不能少。',vn:'Đây là hàng thủ công hoàn toàn, không bớt một xu.'},
     need:['Dùng 终究','Mặc cả lịch sự'],
     sample:'我知道是纯手工的，不过这幅画角上有点儿脏，终究不是完美的，您能不能便宜一点儿？',
     samplePy:'Wǒ zhīdào shì chún shǒugōng de, búguò zhè fú huà jiǎo shang yǒudiǎnr zāng, zhōngjiū bú shì wánměi de, nín néng bu néng piányi yìdiǎnr?',
     sampleVn:'Tôi biết là hàng thủ công, nhưng góc bức tranh hơi bẩn, xét cho cùng thì không hoàn hảo, anh bớt cho tôi một chút được không?',
     tip:'终究 nghĩa ① (bản chất không đổi) — nhấn mạnh một sự thật để thuyết phục.'},

    {scene:'Bạn thân vừa được giải nhất cuộc thi vẽ của trường, đến khoe với em.',
     a:{sp:'Bạn',zh:'我得了学校绘画比赛一等奖！',vn:'Tớ được giải nhất cuộc thi vẽ của trường rồi!'},
     need:['Dùng 再接再厉','Dùng 愈……愈……'],
     sample:'太棒了，祝贺你！你愈画愈好了，希望你再接再厉，明年去参加全市的比赛！',
     samplePy:'Tài bàng le, zhùhè nǐ! Nǐ yù huà yù hǎo le, xīwàng nǐ zàijiē-zàilì, míngnián qù cānjiā quán shì de bǐsài!',
     sampleVn:'Tuyệt quá, chúc mừng cậu! Cậu vẽ càng ngày càng đẹp, mong cậu cố gắng hơn nữa, sang năm đi thi cấp thành phố!',
     tip:'Lời chúc mừng + động viên: 祝贺你 → 希望你再接再厉.'},

    {scene:'Em trai hỏi em có nên bỏ lớp học vẽ vì thấy khó quá không.',
     a:{sp:'Em trai',zh:'画画儿太难了，我想放弃，你觉得呢？',vn:'Vẽ khó quá, em muốn bỏ, chị thấy sao?'},
     need:['Dùng 一帆风顺','Dùng 扎实'],
     sample:'学什么都不会一帆风顺的。你现在觉得难，是因为基本功还不够扎实，再坚持一段时间就好了。',
     samplePy:'Xué shénme dōu bú huì yìfān-fēngshùn de. Nǐ xiànzài juéde nán, shì yīnwèi jīběngōng hái bú gòu zhāshi, zài jiānchí yí duàn shíjiān jiù hǎo le.',
     sampleVn:'Học gì cũng không thuận buồm xuôi gió đâu. Bây giờ em thấy khó là vì nền tảng còn chưa vững, cố thêm một thời gian là ổn.',
     tip:'Khuyên nhủ: nêu chân lý chung (不会一帆风顺) → giải thích nguyên nhân (是因为……) → lời khuyên.'},

    {scene:'Thầy chủ nhiệm hỏi vì sao hôm qua em không đến buổi sinh hoạt câu lạc bộ mỹ thuật.',
     a:{sp:'Thầy',zh:'昨天美术社的活动你怎么没来？',vn:'Hôm qua sao em không đến buổi sinh hoạt câu lạc bộ mỹ thuật?'},
     need:['Dùng 缺席','Dùng 心得'],
     sample:'老师，对不起，我昨天发烧了，只好缺席。听说大家交流了画画儿的心得，您能把记录发给我看看吗？',
     samplePy:'Lǎoshī, duìbuqǐ, wǒ zuótiān fāshāo le, zhǐhǎo quēxí. Tīngshuō dàjiā jiāoliúle huà huàr de xīndé, nín néng bǎ jìlù fā gěi wǒ kànkan ma?',
     sampleVn:'Thưa thầy, em xin lỗi, hôm qua em bị sốt nên đành vắng mặt. Nghe nói mọi người đã trao đổi kinh nghiệm vẽ, thầy có thể gửi em xem biên bản được không ạ?',
     tip:'Xin lỗi → lý do (只好缺席) → hỏi bù phần đã lỡ; 心得 = kinh nghiệm rút ra (không phải "tâm đắc").'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Tấm biển đặt ở cửa phòng trưng bày tranh cổ của bảo tàng.',
     a:'这儿的画很旧了，大家别拍照啊！',b:'展厅内文物珍贵，谢绝拍照。',better:'b',
     why:'Biển báo nơi công cộng dùng văn viết ngắn gọn, lịch sự: 谢绝拍照. Câu a (大家别……啊) là lời nói miệng.'},

    {scene:'Em nhắn tin kể cho bạn thân về con hổ vải mua ở hội chợ.',
     a:'我买了个布老虎，翘着尾巴，可神气了！',b:'本人购得布老虎一只，其神态逼真，装饰精美。',better:'a',
     why:'Nhắn tin bạn bè dùng khẩu ngữ (买了个, 可神气了). Câu b (本人购得, 其) như văn bản thông báo, rất gượng.'},

    {scene:'Em viết bài giới thiệu tranh Tết trên báo tường của trường.',
     a:'年画挺好玩儿的，老百姓都特喜欢。',b:'年画是老百姓喜闻乐见的艺术形式，寄托着人们的美好愿望。',better:'b',
     why:'Bài viết giới thiệu văn hoá cần văn viết: 喜闻乐见, 寄托着. Câu a (挺好玩儿的, 特喜欢) là khẩu ngữ.'},

    {scene:'Thầy hiệu trưởng phát biểu khen thưởng học sinh đoạt giải.',
     a:'希望同学们戒骄戒躁，再接再厉，取得更好的成绩。',b:'你们别骄傲啊，接着好好干！',better:'a',
     why:'Lời phát biểu trang trọng dùng thành ngữ 戒骄戒躁, 再接再厉. Câu b hợp nói riêng với học trò thân.'},

    {scene:'Em trò chuyện với ông bà về lý do ông chưa bao giờ bỏ nghề làm tranh.',
     a:'爷爷，您为什么一直不放弃画年画呀？',b:'请问您坚持年画创作的信念是什么？',better:'a',
     why:'Nói chuyện với ông trong nhà dùng lời thân mật (爷爷, 呀). Câu b giống phóng viên phỏng vấn, quá khách sáo.'},

    {scene:'Em viết đơn xin phép vắng mặt buổi họp lớp gửi cô chủ nhiệm.',
     a:'老师，明天我不来了哈。',b:'老师您好，因家中有事，我明天无法参加班会，特此请假，望您批准。',better:'b',
     why:'Đơn xin phép cần lịch sự, nêu lý do (因……), dùng 特此请假, 望您批准. Câu a quá cộc lốc, không nêu lý do.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Bảng có 3 phần: 年画的起源 (1 dòng), 木版年画 (3 dòng), 年画传人张光宁 (4 dòng). Bấm ghi âm rồi kể khoảng 3 phút.',
  outline: [
    {step:'年画的起源', cue:'门神画；兄弟二人；唐宋，门神画内容拓展；清朝，使用“年画”一词', words:['起源','文献','凶恶','揭露','昌盛','题材','驱逐','吉祥']},
    {step:'木版年画 · 雕版的发明', cue:'墨→印章→碑刻、拓印→扩大印章→在版上刷印', words:['里程碑','墨水儿','盖章','联想','涂抹']},
    {step:'木版年画 · 彩色套印', cue:'（表中此栏无提示）单色印品终究……，彩色套印技术……', words:['终究']},
    {step:'木版年画 · 年画走进百姓生活', cue:'过年贴年画，年画印制场所，年画内容，年画成了……的载体与工具', words:['烟花爆竹','寄托','增添','丰收','发财','连年','寓言','信仰','喜闻乐见']},
    {step:'年画传人张光宁 · 初次认识', cue:'春节庙会，布老虎，推销', words:['神气','翘','神态','盛开','散发','耸','州','外行','推销']},
    {step:'年画传人张光宁 · 第二印象', cue:'不像商人，讨论……', words:['吞吞吐吐','残次品','现成','谢绝']},
    {step:'年画传人张光宁 · 相识久了', cue:'出生，长大，从小……，后来……，再接再厉……，不仅如此，……', words:['故乡','扎实','塑造','手法','派别','借鉴','再接再厉','心得','缺席']},
    {step:'年画传人张光宁 · 目标和信念', cue:'传播……，拓展……', words:['干劲','占据','确立','信念','任重道远','一帆风顺']}
  ],
  checklist: [
    'Kể đủ 8 ý theo đúng thứ tự bảng chưa (nguồn gốc → in khắc bản → in chồng màu → tranh vào đời sống → bốn ý về Trương Quang Ninh)?',
    'Ý 1 có nói được mốc thời gian: cổ đại (门神画) → Đường Tống (内容拓展) → đời Thanh (使用“年画”一词) không?',
    'Ý 2 có kể đúng chuỗi 墨 → 印章 → 碑刻、拓印 → 扩大印章 → 在版上刷印 (nối bằng 于是) không?',
    'Phần Trương Quang Ninh có nêu được hai ấn tượng (推销术 kỳ lạ, 不像商人) và mục tiêu – niềm tin của anh không?',
    'Có dùng 终究 và 愈……愈…… và kể bằng LỜI MÌNH (không đọc thuộc nguyên văn) không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 159–164) — đáp án theo đáp án sách
// (热身 không đưa vào; 练习5 đã thành luyện nói / kể lại / luyện viết;
//  注释2 · 练一练 "把6个小句组合成3个连贯的语段" → kho (cho sẵn vế đầu, chọn vế đi tiếp), như bài 28;
//  篇章修辞 · 篇章(6) 重复关键词，推进主题 · 练一练 (điền từ) → gx;
//  练习4 của bài này là 找出语段中重复的关键词 (không phải 模仿造句) → ab;
//  扩展 · 词汇 "熟悉下列词语的语素义" chỉ để làm quen → kho; bài này không có phần 病句)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“终究”改写句子（注释1 · 练一练）', vn:'Dùng 终究 viết lại câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'如果一个人一直不愿意变老，那他就永远不会幸福，因为他最后是一定会变老的。', tu:'终究', dap:'如果一个人一直不愿意变老，那他就永远不会幸福，因为他终究会变老的。',
      giai:'最后是一定会…… → 终究会……: nghĩa ② của 终究 — kết quả tất yếu, dù thế nào cũng sẽ xảy ra; đứng trước động từ năng nguyện 会.'},
     {s:'借住在朋友这儿当然不是长久之计，还是应该尽快租个房子。', tu:'终究', dap:'借住在朋友这儿终究不是长久之计，还是应该尽快租个房子。',
      giai:'当然 → 终究: nghĩa ① — nhấn mạnh bản chất sự việc không đổi, sự thật không thể phủ nhận (ở nhờ xét cho cùng không phải kế lâu dài).'},
     {s:'失败毕竟不是好事，但只要从失败中吸取经验教训，坏事也可以变成好事。', tu:'终究', dap:'失败终究不是好事，但只要从失败中吸取经验教训，坏事也可以变成好事。',
      giai:'毕竟 → 终究: hai từ gần nghĩa ở nghĩa ① (xét cho cùng); vế sau 但只要……也…… giữ nguyên.'}
   ]},

  {kieu:'kho',
   de:'请把下列6个小句组合成3个连贯的语段（注释2 · 愈……愈…… · 练一练）',
   vn:'Ghép 6 vế câu A–F thành 3 đoạn liền mạch (Chú thích 2 · 愈……愈…… · Luyện tập). Mỗi câu cho sẵn vế đầu (A, B, D) — chọn vế đi tiếp theo (E, C, F) trong khung. Đáp án sách: (1) A E　(2) B C　(3) D F',
   tu:['家庭成员的文化水平就愈高，综合素质也就愈高','经营活动愈是会受到完备的法规约束，从而，在法制的框架内展开充分的公平竞争','愈要为自己设定更高的目标'],
   cau:[
     {s:'（1）A. 一个家庭，愈重视教育，教育的投入愈多，＿＿。',dap:['家庭成员的文化水平就愈高，综合素质也就愈高'],giai:'A nói "gia đình càng coi trọng giáo dục, đầu tư càng nhiều" → E nêu kết quả "trình độ văn hoá, tố chất tổng hợp càng cao" — chuỗi 愈……愈……，就愈…… cùng chủ đề giáo dục gia đình. Đáp án sách: A E.'},
     {s:'（2）B. 市场经济是法制经济，愈是发达的市场经济，＿＿。',dap:['经营活动愈是会受到完备的法规约束，从而，在法制的框架内展开充分的公平竞争'],giai:'B nói "kinh tế thị trường là kinh tế pháp chế" → C "hoạt động kinh doanh càng bị pháp quy ràng buộc, từ đó cạnh tranh công bằng trong khuôn khổ pháp luật" — cùng chủ đề pháp chế. Đáp án sách: B C.'},
     {s:'（3）D. 他生就一副挑战式性格，愈是面对成功，＿＿。',dap:['愈要为自己设定更高的目标'],giai:'D "tính cách thích thử thách, càng đối mặt thành công" → F "càng phải đặt cho mình mục tiêu cao hơn". Đáp án sách: D F.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'篇章修辞 · 篇章（6）重复关键词，推进主题 · 练一练：根据文意，填上合适的词语', vn:'Tu từ văn bản · Chương pháp (6) LẶP LẠI TỪ KHOÁ, ĐẨY CHỦ ĐỀ ĐI TỚI (重复关键词 — cố ý lặp lại từ quan trọng nhất để làm nổi bật thông tin, khiến đoạn văn liền mạch, câu chữ trôi chảy) · Luyện tập: dựa vào ý đoạn văn, điền từ thích hợp vào 4 chỗ trống — đáp án theo sách',
   cau:[
     {s:'小张的花店跟别人不一样的地方是免费送花，只要是有这种需求的，路近的送，路远的＿＿；大花篮、大花束送，一支两支＿＿；晴天送，雨天＿＿；即使人手不够，小李亲自骑自行车＿＿。', tu:'送',
      dap:'小张的花店跟别人不一样的地方是免费送花，只要是有这种需求的，路近的送，路远的也送；大花篮、大花束送，一支两支也送；晴天送，雨天也送；即使人手不够，小李亲自骑自行车也送。',
      giai:'Từ khoá cần lặp là 送 (giao hoa) — đáp án sách ghi 送 ở cả 4 chỗ trống. Mỗi cặp đối lập (近 — 远, 大 — 小, 晴 — 雨) đều kết bằng 送, nhấn mạnh "giao hoa bất kể điều kiện". Thêm 也 (也送) cho câu tự nhiên hơn, nhất là vế cuối có 即使……也…….'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'文献', chu:'文', ds:['文章','文学','文人','作文']},
   cau:[
     {tu:'增添', chu:'增', dap:['增加','增多','增减','增益'], them:['增长','增强','增进','递增','倍增','增产'],
      giai:'增 = thêm, tăng lên (增加 = tăng thêm, 增多 = nhiều lên, 增减 = tăng giảm, 增益 = tăng thêm lợi ích; 增强 = tăng cường, 递增 = tăng dần).'},
     {tu:'发财', chu:'财', dap:['财富','财产','财务','财经'], them:['钱财','理财','财政','财宝','贪财','生财'],
      giai:'财 = tiền của, tài sản (财富 = của cải, 财产 = tài sản, 财务 = tài vụ, 财经 = tài chính kinh tế; 理财 = quản lý tiền bạc).'},
     {tu:'外行', chu:'行', dap:['行业','行情','行规','行道'], them:['内行','同行','改行','行家','银行','各行各业'],
      giai:'行 đọc háng = nghề, ngành (行业 = ngành nghề, 行情 = tình hình thị trường, 行规 = quy tắc trong nghề; 内行 = người trong nghề, 同行 = người cùng nghề — có trong bài khoá, 改行 = đổi nghề).'},
     {tu:'故乡', chu:'乡', dap:['家乡','乡愁','乡里','乡土'], them:['同乡','老乡','乡亲','思乡','乡音','回乡'],
      giai:'乡 = quê, làng quê (家乡 = quê nhà, 乡愁 = nỗi nhớ quê, 乡里 = làng xóm, 乡土 = quê hương bản địa; 老乡 / 同乡 = người cùng quê, 乡音 = giọng quê).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'孩子们很想了解生命是怎么开始的。', tu:'起源', dap:'孩子们很想了解生命的起源。',
      giai:'Mệnh đề "生命是怎么开始的" → cụm danh từ 生命的起源 (nguồn gốc sự sống).'},
     {s:'看到此情此景，我的脑海里浮现出许多往事。', tu:'联想', dap:'看到此情此景，我的脑海里联想起许多往事。',
      giai:'浮现出 (hiện lên) → 联想起 (liên tưởng đến): từ cảnh trước mắt mà nghĩ tới chuyện cũ.'},
     {s:'一个人的力量毕竟是有限的，还是团结力量大。', tu:'终究', dap:'一个人的力量终究是有限的，还是团结力量大。',
      giai:'毕竟 → 终究 (nghĩa ①: bản chất không đổi — sức một người xét cho cùng có hạn).'},
     {s:'随着孩子的陆续出生，家里增加了不少人口。', tu:'增添', dap:'随着孩子的陆续出生，家里增添了不少口人。',
      giai:'增加……人口 → 增添了不少口人 (thêm không ít miệng ăn / người trong nhà); 口 là lượng từ chỉ người trong gia đình.'},
     {s:'由于此地涉及国家机密，所以是不允许参观的。', tu:'谢绝', dap:'由于此地涉及国家机密，所以谢绝参观。',
      giai:'是不允许参观的 → 谢绝参观 (cách nói lịch sự, văn thông báo = miễn tham quan).'},
     {s:'老师曾教导我们：“情况越紧急，越需要沉着冷静。”', tu:'愈……愈……', dap:'老师曾教导我们：“情况愈紧急，愈需要沉着冷静。”',
      giai:'越……越…… → 愈……愈……: nghĩa như nhau, 愈 dùng trong văn viết (điểm ngữ pháp 2).'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 1)', tu:['神态','手法','涂抹','心得','盛开'],
   cau:[
     {s:'儿子从小就爱画画儿，从开始的随便＿＿，到现在能画出＿＿逼真的动物，＿＿的花朵……绘画＿＿越来越娴熟。一路走来，经历了许多艰辛，也收获了许多幸福，他愿意与大家一起分享画画儿的＿＿。',
      dap:['涂抹','神态','盛开','手法','心得']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 2)', tu:['确立','一帆风顺','借鉴','信念','扎实'],
   cau:[
     {s:'想要成就一番事业，无论选择哪条路，都不会＿＿的。首先要＿＿自己的目标，给自己打下＿＿的基础，多＿＿别人成功的经验，抱着必胜的＿＿坚持下去，最后的胜利一定属于你。',
      dap:['一帆风顺','确立','扎实','借鉴','信念']}
   ]},

  {kieu:'ab', de:'请找出下列语段中重复的关键词', vn:'Tìm từ khoá được lặp lại trong mỗi đoạn dưới đây (bài tập 4 — luyện 篇章修辞 · 重复关键词). Đáp án sách: ① 泪水　② 民族　③ 点（燃）　④ 一只',
   cau:[
     {s:'这泪水，是激动的泪水，兴奋的泪水，喜悦的泪水，收获的泪水。',
      opts:['激动','泪水','兴奋','收获'], ans:1,
      giai:'泪水 xuất hiện 5 lần, mỗi lần gắn một định ngữ khác (激动的, 兴奋的, 喜悦的, 收获的) → lặp từ khoá làm nổi bật cảm xúc. Đáp án sách: 泪水.'},
     {s:'他是代表全民族的大多数，最正确、最勇敢、最坚决、最忠实、最热忱的空前的民族英雄。',
      opts:['民族','英雄','代表','正确'], ans:0,
      giai:'Đáp án sách: 民族 (全民族 — 民族英雄, nhấn mạnh tầm "dân tộc"). Lưu ý: bản đáp án in chữ 民族 lệch lên dòng của câu ①, dòng "2)" để trống — theo nội dung thì 民族 là đáp án của câu ② này. Trong câu còn có 最 lặp 5 lần (最正确、最勇敢……) — cũng là phép lặp để tăng mức độ.'},
     {s:'一根火柴，它自己熄灭了，却把别人点燃起来，点起了比自己大十倍、百倍、千倍以至数万倍的熊熊大火。',
      opts:['火柴','熄灭','点（燃）','大火'], ans:2,
      giai:'点 lặp lại: 点燃起来 → 点起了 — nhấn mạnh hành động "thắp lửa cho người khác" của que diêm. Đáp án sách: 点（燃）.'},
     {s:'他用心观察着，眼前飞过的一只雁，一只麻雀，一只蝴蝶，一只蜻蜓，他都不放过。',
      opts:['观察','一只','蝴蝶','放过'], ans:1,
      giai:'一只 lặp 4 lần (一只雁、一只麻雀、一只蝴蝶、一只蜻蜓) → nhấn mạnh anh ấy không bỏ sót con vật nào. Đáp án sách: 一只.'}
   ]},

  {kieu:'kho', de:'熟悉下列词语的语素义（扩展 · 词汇）', vn:'Làm quen nghĩa của từng hình vị (chữ) trong các từ sau (Mở rộng · Từ vựng — phần 1/2). Sách chỉ cho sẵn nghĩa để làm quen, không có đáp án riêng; ở đây che nghĩa của chữ thứ nhất để em tự nhớ lại.', tu:['还，返','使分离','请求','耍弄，使用（不正当的手段方法）','往前或往上看','得到某种结果'],
   cau:[
     {s:'回收（thu hồi）：回 = ＿＿；收 = 收回（利用）', dap:['还，返']},
     {s:'开除（đuổi, khai trừ）：开 = ＿＿；除 = 去掉', dap:['使分离']},
     {s:'请示（xin chỉ thị）：请 = ＿＿；示 = 指示', dap:['请求']},
     {s:'玩弄（đùa bỡn, giở trò）：玩 = ＿＿；弄 = 戏耍', dap:['耍弄，使用（不正当的手段方法）']},
     {s:'瞻仰（chiêm ngưỡng）：瞻 = ＿＿；仰 = 尊敬仰慕', dap:['往前或往上看']},
     {s:'落成（khánh thành, hoàn thành xây dựng）：落 = ＿＿；成 = 完成，成功', dap:['得到某种结果']}
   ]},
  {kieu:'kho', de:'熟悉下列词语的语素义（扩展 · 词汇）', vn:'Làm quen nghĩa của từng hình vị (Mở rộng · Từ vựng — phần 2/2). Che nghĩa của chữ thứ nhất.', tu:['开发','把整体分成几部分','给予（压力、影响等）','应付','把金属熔化后倒在模子里制成器物','把缺少的补上'],
   cau:[
     {s:'开采（khai thác）：开 = ＿＿；采 = 挖掘（矿物）', dap:['开发']},
     {s:'划分（phân chia）：划 = ＿＿；分 = 分开', dap:['把整体分成几部分']},
     {s:'施加（gây, tạo áp lực）：施 = ＿＿；加 = 增添', dap:['给予（压力、影响等）']},
     {s:'应酬（xã giao, tiếp khách）：应 = ＿＿；酬 = 交际往来', dap:['应付']},
     {s:'铸造（đúc）：铸 = ＿＿；造 = 制作', dap:['把金属熔化后倒在模子里制成器物']},
     {s:'配套（đồng bộ, ăn khớp thành bộ）：配 = ＿＿；套 = 同类的事物合成一组', dap:['把缺少的补上']}
   ]}
];
