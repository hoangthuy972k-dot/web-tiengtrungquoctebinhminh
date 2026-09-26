// ══════════════════════════════════════════
// DATA — HSK5 Bài 25: 给自己加满水 (Bơm nước vào tàu)
// Unit 9 感受人生 · Nguồn: HSK标准教程5下 (tr. 64–70) + sách bài tập bài 25
// Bài khoá: 给自己加满水 (改编自《小故事大道理》，作者：汪胜战)
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'返航',py:'fǎnháng',pos:'Động từ',vn:'trở về nơi xuất phát (tàu, máy bay)',hv:'phản hàng',em:'🚢',lesson:1,
   explain:['Tàu thuyền, máy bay quay trở về nơi xuất phát: 返 = trở về, 航 = đi tàu, bay.','Khác 回来 (dùng cho mọi thứ): 返航 chỉ dùng cho tàu thuyền, máy bay, tàu vũ trụ; sắc thái văn viết, hay gặp trong tin tức.'],
   usage:'返航 không mang tân ngữ. Hay gặp: 一次返航中, 返航途中, 紧急返航, 被迫返航, 安全返航.',
   collo:['返航途中','紧急返航','被迫返航','安全返航'],
   ex_zh:'有一位经验丰富的老船长，一次返航中，天气恶劣，他们的船遇到了可怕的巨大风浪。',ex_py:'Yǒu yí wèi jīngyàn fēngfù de lǎo chuánzhǎng, yí cì fǎnháng zhōng, tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',ex_vn:'Có một ông thuyền trưởng già giàu kinh nghiệm, một lần trên đường trở về, thời tiết xấu, con tàu của họ gặp phải sóng gió khổng lồ đáng sợ.',
   exList:[
     {zh:'有一位经验丰富的老船长，一次返航中，天气恶劣，他们的船遇到了可怕的巨大风浪。',py:'Yǒu yí wèi jīngyàn fēngfù de lǎo chuánzhǎng, yí cì fǎnháng zhōng, tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',vn:'Có một ông thuyền trưởng già giàu kinh nghiệm, một lần trên đường trở về, thời tiết xấu, con tàu của họ gặp phải sóng gió khổng lồ đáng sợ.'},
     {zh:'因为天气突然变坏，飞机起飞半个小时后被迫返航。',py:'Yīnwèi tiānqì tūrán biàn huài, fēijī qǐfēi bàn ge xiǎoshí hòu bèipò fǎnháng.',vn:'Vì thời tiết đột nhiên xấu đi, máy bay cất cánh được nửa tiếng thì buộc phải quay về.'},
     {zh:'渔船在返航途中遇到了大风，幸亏大家都平安回来了。',py:'Yúchuán zài fǎnháng túzhōng yùdàole dàfēng, xìngkuī dàjiā dōu píng\'ān huílai le.',vn:'Tàu cá gặp gió lớn trên đường trở về, may mà mọi người đều về bình an.'}
   ],
   colloFull:[
     {zh:'返航途中',py:'fǎnháng túzhōng',vn:'trên đường trở về'},
     {zh:'紧急返航',py:'jǐnjí fǎnháng',vn:'khẩn cấp quay về'},
     {zh:'被迫返航',py:'bèipò fǎnháng',vn:'buộc phải quay về'},
     {zh:'安全返航',py:'ānquán fǎnháng',vn:'quay về an toàn'},
     {zh:'一次返航中',py:'yí cì fǎnháng zhōng',vn:'trong một lần trở về'}
   ],
   patterns:[
     {s:'因为……，飞机 / 船 + 被迫返航',m:'Nói lý do tàu, máy bay phải quay về'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì thời tiết xấu, con tàu vừa ra khơi đã phải quay về.',answer:'因为天气不好，船一出海就返航了。',answerPy:'Yīnwèi tiānqì bù hǎo, chuán yì chū hǎi jiù fǎnháng le.',
      note:'一 + V1, 就 + V2: vừa … đã …; 一 trước thanh 1 (出) đọc yì.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi chưa từng gặp chuyện máy bay phải quay về bao giờ.',answer:'我从来没遇到过飞机返航的情况。',answerPy:'Wǒ cónglái méi yùdàoguo fēijī fǎnháng de qíngkuàng.',
      note:'从来没 + V + 过: chưa từng bao giờ; 过 đứng ngay sau 遇到.',pair:'从来没……过'}
   ]},

  {n:2,zh:'恶劣',py:'èliè',pos:'Tính từ',vn:'tồi tệ, rất xấu',hv:'ác liệt',em:'⛈️',lesson:1,
   explain:['Rất xấu, tồi tệ — dùng cho thời tiết, môi trường, điều kiện, thái độ, hành vi, ảnh hưởng. Sắc thái mạnh, hay dùng trong văn viết.','BẪY Hán–Việt: "ác liệt" tiếng Việt là dữ dội (trận đánh ác liệt); 恶劣 tiếng Trung là XẤU, tệ hại (天气恶劣, 态度恶劣).'],
   usage:'Bảng 词语搭配: 恶劣的 + 天气/态度/关系/条件/影响/表现. Làm vị ngữ: 天气恶劣, 影响恶劣, 行为恶劣.',
   collo:['天气恶劣','恶劣的态度','恶劣的条件','影响恶劣'],
   ex_zh:'一次返航中，天气恶劣，他们的船遇到了可怕的巨大风浪。',ex_py:'Yí cì fǎnháng zhōng, tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',ex_vn:'Một lần trên đường trở về, thời tiết xấu, tàu của họ gặp phải sóng gió khổng lồ đáng sợ.',
   exList:[
     {zh:'一次返航中，天气恶劣，他们的船遇到了可怕的巨大风浪。',py:'Yí cì fǎnháng zhōng, tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',vn:'Một lần trên đường trở về, thời tiết xấu, tàu của họ gặp phải sóng gió khổng lồ đáng sợ.'},
     {zh:'小林这件事影响恶劣，我们对他一定要严肃批评。',py:'Xiǎo Lín zhè jiàn shì yǐngxiǎng èliè, wǒmen duì tā yídìng yào yánsù pīpíng.',vn:'Chuyện này của Tiểu Lâm gây ảnh hưởng rất xấu, chúng ta nhất định phải phê bình nghiêm túc cậu ấy.'},
     {zh:'在那么恶劣的条件下，他们还是坚持完成了任务。',py:'Zài nàme èliè de tiáojiàn xià, tāmen háishi jiānchí wánchéngle rènwu.',vn:'Trong điều kiện khắc nghiệt như thế, họ vẫn kiên trì hoàn thành nhiệm vụ.'}
   ],
   colloFull:[
     {zh:'天气恶劣',py:'tiānqì èliè',vn:'thời tiết xấu'},
     {zh:'恶劣的态度',py:'èliè de tàidu',vn:'thái độ tồi tệ'},
     {zh:'恶劣的条件',py:'èliè de tiáojiàn',vn:'điều kiện khắc nghiệt'},
     {zh:'影响恶劣',py:'yǐngxiǎng èliè',vn:'ảnh hưởng rất xấu'},
     {zh:'恶劣的表现',py:'èliè de biǎoxiàn',vn:'biểu hiện tồi tệ'}
   ],
   patterns:[
     {s:'在……恶劣的条件下，……',m:'Nhấn mạnh hoàn cảnh khó khăn'},
     {s:'天气 / 态度 / 影响 + 恶劣',m:'恶劣 làm vị ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thời tiết rất xấu nhưng máy bay vẫn cất cánh đúng giờ.',answer:'虽然天气很恶劣，但是飞机还是按时起飞了。',answerPy:'Suīrán tiānqì hěn èliè, dànshì fēijī háishi ànshí qǐfēi le.',
      note:'虽然 + tình huống bất lợi, 但是 + (还是) kết quả ngược kỳ vọng.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Thái độ của anh ta càng ngày càng tệ.',answer:'他的态度越来越恶劣了。',answerPy:'Tā de tàidu yuè lái yuè èliè le.',
      note:'越来越 + tính từ; 了 cuối câu báo sự thay đổi.',pair:'越来越'}
   ]},

  {n:3,zh:'可怕',py:'kěpà',pos:'Tính từ',vn:'đáng sợ, khủng khiếp',hv:'khả phạ',em:'😱',lesson:1,
   explain:['Khiến người ta sợ: 可 = đáng, 怕 = sợ. Dùng cho sự vật, hiện tượng, hậu quả, con người.','Đừng nhầm với 恐怕 (phó từ "e rằng, có lẽ"): 恐怕 không có nghĩa "đáng sợ" — xem bài tập 2 của sách.'],
   usage:'Làm định ngữ (可怕的风浪), vị ngữ (太可怕了), tân ngữ của 觉得. Hay gặp: 可怕的后果, 真可怕, 最可怕的是…….',
   collo:['可怕的风浪','可怕的后果','太可怕了','最可怕的是'],
   ex_zh:'天气恶劣，他们的船遇到了可怕的巨大风浪。',ex_py:'Tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',ex_vn:'Thời tiết xấu, tàu của họ gặp phải sóng gió khổng lồ đáng sợ.',
   exList:[
     {zh:'天气恶劣，他们的船遇到了可怕的巨大风浪。',py:'Tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',vn:'Thời tiết xấu, tàu của họ gặp phải sóng gió khổng lồ đáng sợ.'},
     {zh:'昨晚的风实在太大了，对面楼上的广告牌都被刮下来了，太可怕了！',py:'Zuówǎn de fēng shízài tài dà le, duìmiàn lóu shang de guǎnggàopái dōu bèi guā xiàlai le, tài kěpà le!',vn:'Gió đêm qua to quá, biển quảng cáo trên toà nhà đối diện cũng bị thổi rơi xuống, đáng sợ thật!'},
     {zh:'考试不可怕，可怕的是不努力。',py:'Kǎoshì bù kěpà, kěpà de shì bù nǔlì.',vn:'Thi cử không đáng sợ, đáng sợ là không chịu cố gắng.'}
   ],
   colloFull:[
     {zh:'可怕的风浪',py:'kěpà de fēnglàng',vn:'sóng gió đáng sợ'},
     {zh:'可怕的后果',py:'kěpà de hòuguǒ',vn:'hậu quả khủng khiếp'},
     {zh:'太可怕了',py:'tài kěpà le',vn:'đáng sợ quá'},
     {zh:'最可怕的是',py:'zuì kěpà de shì',vn:'đáng sợ nhất là'},
     {zh:'一点儿也不可怕',py:'yìdiǎnr yě bù kěpà',vn:'chẳng đáng sợ chút nào'}
   ],
   patterns:[
     {s:'A 不可怕，可怕的是 B',m:'Nhấn mạnh điều thật sự đáng lo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến bố tôi cũng thấy bộ phim này rất đáng sợ.',answer:'连我爸爸都觉得这部电影很可怕。',answerPy:'Lián wǒ bàba dōu juéde zhè bù diànyǐng hěn kěpà.',
      note:'连……都…… nhấn mạnh người ít ai ngờ nhất (bố) mà cũng thấy vậy.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Con tàu bị con sóng lớn đáng sợ đánh lật.',answer:'船被可怕的大浪打翻了。',answerPy:'Chuán bèi kěpà de dà làng dǎfān le.',
      note:'被 + tác nhân (可怕的大浪) + V + bổ ngữ kết quả 翻.',pair:'被'}
   ]},

  {n:4,zh:'风浪',py:'fēnglàng',pos:'Danh từ',vn:'sóng gió',hv:'phong lãng',em:'🌊',lesson:1,
   explain:['Gió và sóng trên mặt nước: 风浪很大, 遇到风浪.','Nghĩa bóng giống tiếng Việt "sóng gió": khó khăn, thử thách trong cuộc đời — 经历过大风浪.'],
   usage:'Hay gặp: 遇到风浪, 风浪很大, 巨大的风浪, 经得起风浪, 人生的风浪.',
   collo:['遇到风浪','风浪很大','巨大的风浪','经得起风浪'],
   ex_zh:'他们的船遇到了可怕的巨大风浪。',ex_py:'Tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',ex_vn:'Tàu của họ gặp phải sóng gió khổng lồ đáng sợ.',
   exList:[
     {zh:'他们的船遇到了可怕的巨大风浪。',py:'Tāmen de chuán yùdàole kěpà de jùdà fēnglàng.',vn:'Tàu của họ gặp phải sóng gió khổng lồ đáng sợ.'},
     {zh:'今天海上风浪很大，渔船都不敢出海。',py:'Jīntiān hǎi shang fēnglàng hěn dà, yúchuán dōu bù gǎn chū hǎi.',vn:'Hôm nay trên biển sóng gió rất lớn, tàu cá đều không dám ra khơi.'},
     {zh:'爷爷一辈子经历过不少风浪，什么困难都不怕。',py:'Yéye yíbèizi jīnglìguo bù shǎo fēnglàng, shénme kùnnan dōu bú pà.',vn:'Ông cả đời đã trải qua không ít sóng gió, khó khăn nào cũng không sợ.'}
   ],
   colloFull:[
     {zh:'遇到风浪',py:'yùdào fēnglàng',vn:'gặp sóng gió'},
     {zh:'风浪很大',py:'fēnglàng hěn dà',vn:'sóng gió lớn'},
     {zh:'巨大的风浪',py:'jùdà de fēnglàng',vn:'sóng gió khổng lồ'},
     {zh:'经得起风浪',py:'jīng de qǐ fēnglàng',vn:'chịu được sóng gió'},
     {zh:'人生的风浪',py:'rénshēng de fēnglàng',vn:'sóng gió cuộc đời'}
   ],
   patterns:[
     {s:'经历过 / 经得起 + 风浪',m:'Nghĩa bóng: từng trải, chịu được thử thách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người không hoảng loạn là có thể vượt qua trận sóng gió này.',answer:'只要大家不慌张，就能渡过这场风浪。',answerPy:'Zhǐyào dàjiā bù huāngzhāng, jiù néng dùguò zhè chǎng fēnglàng.',
      note:'只要 + điều kiện, 就 + kết quả; lượng từ của 风浪 (một trận) là 场.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ông ấy gặp sóng gió là vào một lần trở về năm ngoái.',answer:'他是在去年的一次返航中遇到风浪的。',answerPy:'Tā shì zài qùnián de yí cì fǎnháng zhōng yùdào fēnglàng de.',
      note:'是……的 nhấn mạnh THỜI GIAN của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:5,zh:'慌张',py:'huāngzhāng',pos:'Tính từ',vn:'luống cuống, hoảng hốt',hv:'hoảng trương',em:'😰',lesson:1,
   explain:['Vội vàng, luống cuống vì sợ hãi hoặc gặp chuyện bất ngờ; mất bình tĩnh thể hiện RA NGOÀI bằng hành động.','Khác 紧张 (căng thẳng, hồi hộp trong lòng; còn tả công việc, tình hình gấp gáp). Dạng lặp: 慌慌张张.'],
   usage:'Làm vị ngữ (他很慌张), trạng ngữ (慌张地跑出去), có bổ ngữ (慌张得不知如何是好). Bảng 词语搭配: 神情/表情/眼神/动作 + 慌张.',
   collo:['神情慌张','慌张地跑','慌慌张张','别慌张'],
   ex_zh:'正当水手们慌张得不知如何是好时，老船长命令水手们立刻打开货舱。',ex_py:'Zhèng dāng shuǐshǒumen huāngzhāng de bù zhī rúhé shì hǎo shí, lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng.',ex_vn:'Đúng lúc các thủy thủ luống cuống không biết phải làm sao, ông thuyền trưởng già ra lệnh cho họ lập tức mở khoang hàng.',
   exList:[
     {zh:'正当水手们慌张得不知如何是好时，老船长命令水手们立刻打开货舱。',py:'Zhèng dāng shuǐshǒumen huāngzhāng de bù zhī rúhé shì hǎo shí, lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng.',vn:'Đúng lúc các thủy thủ luống cuống không biết phải làm sao, ông thuyền trưởng già ra lệnh cho họ lập tức mở khoang hàng.'},
     {zh:'李岩之所以那么慌张地返回北京，是因为得知了这个坏消息。',py:'Lǐ Yán zhīsuǒyǐ nàme huāngzhāng de fǎnhuí Běijīng, shì yīnwèi dézhīle zhège huài xiāoxi.',vn:'Sở dĩ Lý Nham vội vã quay về Bắc Kinh như thế là vì biết được tin dữ này.'},
     {zh:'他慌慌张张地跑进教室，才发现忘了带书包。',py:'Tā huānghuāngzhāngzhāng de pǎojìn jiàoshì, cái fāxiàn wàngle dài shūbāo.',vn:'Cậu ấy hớt hải chạy vào lớp, lúc đó mới phát hiện quên mang cặp.'}
   ],
   colloFull:[
     {zh:'神情慌张',py:'shénqíng huāngzhāng',vn:'vẻ mặt hốt hoảng'},
     {zh:'慌张地跑',py:'huāngzhāng de pǎo',vn:'chạy cuống cuồng'},
     {zh:'慌慌张张',py:'huānghuāngzhāngzhāng',vn:'hớt ha hớt hải'},
     {zh:'别慌张',py:'bié huāngzhāng',vn:'đừng hoảng'},
     {zh:'动作慌张',py:'dòngzuò huāngzhāng',vn:'động tác luống cuống'}
   ],
   patterns:[
     {s:'慌张得不知如何是好',m:'Luống cuống đến mức không biết làm sao (câu trong bài)'},
     {s:'慌慌张张地 + V',m:'Dạng lặp AABB làm trạng ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe thấy tiếng chuông, cậu ấy đã cuống cuồng chạy ra ngoài.',answer:'他一听到铃声，就慌慌张张地跑了出去。',answerPy:'Tā yì tīngdào língshēng, jiù huānghuāngzhāngzhāng de pǎole chūqu.',
      note:'一……就……; dạng lặp 慌慌张张 + 地 làm trạng ngữ trước động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đừng hoảng, trước hết tìm hộ chiếu ra đã.',answer:'别慌张，先把护照找出来。',answerPy:'Bié huāngzhāng, xiān bǎ hùzhào zhǎo chūlai.',
      note:'把 + tân ngữ (护照) + V + bổ ngữ xu hướng 出来.',pair:'把'}
   ]},

  {n:6,zh:'舱',py:'cāng',pos:'Danh từ',vn:'khoang, buồng (tàu, máy bay)',hv:'thương',em:'🛳️',lesson:1,
   explain:['Khoang, buồng bên trong tàu thuyền, máy bay để chở người hoặc hàng hoá: 货舱 (khoang hàng), 船舱, 机舱.','Thường ghép với chữ khác, ít đứng một mình: 头等舱 (khoang hạng nhất), 经济舱 (hạng phổ thông).'],
   usage:'Hay gặp: 货舱, 船舱, 机舱, 经济舱, 头等舱, 打开货舱.',
   collo:['货舱','船舱','经济舱','打开货舱'],
   ex_zh:'老船长命令水手们立刻打开货舱，使劲儿朝里面放水。',ex_py:'Lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.',ex_vn:'Ông thuyền trưởng già ra lệnh cho các thủy thủ lập tức mở khoang hàng, ra sức xả nước vào trong.',
   exList:[
     {zh:'老船长命令水手们立刻打开货舱，使劲儿朝里面放水。',py:'Lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.',vn:'Ông thuyền trưởng già ra lệnh cho các thủy thủ lập tức mở khoang hàng, ra sức xả nước vào trong.'},
     {zh:'随着货舱里的水位越升越高，船一点一点地下沉。',py:'Suízhe huòcāng li de shuǐwèi yuè shēng yuè gāo, chuán yìdiǎn yìdiǎn de xiàchén.',vn:'Mực nước trong khoang hàng càng lúc càng dâng cao, con tàu chìm xuống từng chút một.'},
     {zh:'为了省钱，我们这次买的是经济舱的机票。',py:'Wèile shěng qián, wǒmen zhè cì mǎi de shì jīngjìcāng de jīpiào.',vn:'Để tiết kiệm, lần này chúng tôi mua vé hạng phổ thông.'}
   ],
   colloFull:[
     {zh:'货舱',py:'huòcāng',vn:'khoang hàng'},
     {zh:'船舱',py:'chuáncāng',vn:'khoang tàu'},
     {zh:'经济舱',py:'jīngjìcāng',vn:'hạng phổ thông (máy bay)'},
     {zh:'打开货舱',py:'dǎkāi huòcāng',vn:'mở khoang hàng'},
     {zh:'头等舱',py:'tóuděngcāng',vn:'khoang hạng nhất'}
   ],
   patterns:[
     {s:'货 / 船 / 机 / 头等 / 经济 + 舱',m:'舱 làm hậu tố chỉ loại khoang'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước trong khoang tàu càng ngày càng nhiều.',answer:'船舱里的水越来越多了。',answerPy:'Chuáncāng li de shuǐ yuè lái yuè duō le.',
      note:'越来越 + tính từ 多; cuối câu có 了.',pair:'越来越'},
     {promptLang:'vi',prompt:'Hành lý đã được đưa vào khoang hàng rồi.',answer:'行李已经被放进货舱了。',answerPy:'Xíngli yǐjīng bèi fàngjìn huòcāng le.',
      note:'Câu bị động 被 (lược tác nhân); 已经 đứng trước 被.',pair:'被'}
   ]},

  {n:7,zh:'使劲',py:'shǐ jìn(r)',pos:'Động từ',vn:'cố sức, dùng sức, gắng sức',hv:'sử kình',em:'💪',lesson:1,
   explain:['Dùng nhiều sức, ra sức: 使 = dùng, 劲(儿) = sức. Khẩu ngữ hay nói 使劲儿.','Là động từ li hợp: chen được thành phần vào giữa — 使了很大的劲儿, 没使多大的劲儿. Hay làm trạng ngữ trực tiếp trước động từ: 使劲儿推, 使劲儿拉.'],
   usage:'使劲(儿) + V: 使劲儿推门, 使劲儿敲门, 使劲儿点头. Tách đôi: 使了很大的劲儿, 使不上劲.',
   collo:['使劲儿推','使劲儿拉','使劲儿点头','使了很大的劲儿'],
   ex_zh:'老船长命令水手们立刻打开货舱，使劲儿朝里面放水。',ex_py:'Lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.',ex_vn:'Ông thuyền trưởng già ra lệnh cho các thủy thủ lập tức mở khoang hàng, ra sức xả nước vào trong.',
   exList:[
     {zh:'老船长命令水手们立刻打开货舱，使劲儿朝里面放水。',py:'Lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.',vn:'Ông thuyền trưởng già ra lệnh cho các thủy thủ lập tức mở khoang hàng, ra sức xả nước vào trong.'},
     {zh:'以后你盖上时，别太使劲儿了。',py:'Yǐhòu nǐ gàishang shí, bié tài shǐjìnr le.',vn:'Lần sau anh đậy nắp thì đừng vặn mạnh quá.'},
     {zh:'听到这个好消息，他使劲儿地点了点头。',py:'Tīngdào zhège hǎo xiāoxi, tā shǐjìnr de diǎnle diǎn tóu.',vn:'Nghe tin vui này, anh ấy gật đầu lia lịa.'}
   ],
   colloFull:[
     {zh:'使劲儿推',py:'shǐjìnr tuī',vn:'đẩy mạnh'},
     {zh:'使劲儿拉',py:'shǐjìnr lā',vn:'kéo mạnh'},
     {zh:'使劲儿点头',py:'shǐjìnr diǎn tóu',vn:'gật đầu lia lịa'},
     {zh:'使了很大的劲儿',py:'shǐle hěn dà de jìnr',vn:'dùng rất nhiều sức'},
     {zh:'别太使劲儿',py:'bié tài shǐjìnr',vn:'đừng dùng sức quá'}
   ],
   patterns:[
     {s:'使劲儿 + V',m:'Làm trạng ngữ: ra sức làm gì'},
     {s:'使了 + (很大的 / 多大的) + 劲儿',m:'Tách đôi động từ li hợp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy dùng sức đẩy cửa ra.',answer:'他使劲儿把门推开了。',answerPy:'Tā shǐjìnr bǎ mén tuīkāi le.',
      note:'使劲儿 làm trạng ngữ đứng trước 把; 把 + 门 + 推开 (bổ ngữ kết quả).',pair:'把'},
     {promptLang:'vi',prompt:'Tuy tôi đã dùng rất nhiều sức nhưng vẫn không mở được cái lọ.',answer:'虽然我使了很大的劲儿，但是还是打不开瓶子。',answerPy:'Suīrán wǒ shǐle hěn dà de jìnr, dànshì háishi dǎ bu kāi píngzi.',
      note:'使 + 了 + 很大的 + 劲儿: tách đôi động từ li hợp; 打不开 là bổ ngữ khả năng.',pair:'虽然……但是……'}
   ]},

  {n:8,zh:'朝',py:'cháo',pos:'Giới từ',vn:'về phía, hướng về',hv:'triều',em:'➡️',lesson:1,
   explain:['GIỚI TỪ: chỉ phương hướng của động tác — 朝里面放水, 朝我们走来. ĐỘNG TỪ: quay mặt về phía — 坐西朝东, 脸朝里.','Khác 向: 朝 KHÔNG làm bổ ngữ sau động từ (nói 走向未来, không nói 走朝未来).'],
   usage:'朝 + phương hướng / người + V: 朝前走, 朝他笑了笑, 朝里面放水. Động từ: 朝南, 坐北朝南.',
   collo:['朝里面','朝前走','朝他笑','坐北朝南'],
   ex_zh:'我仿佛看到胜利正朝我们走来。',ex_py:'Wǒ fǎngfú kàndào shènglì zhèng cháo wǒmen zǒulai.',ex_vn:'Tôi như thấy chiến thắng đang tiến về phía chúng ta.',
   exList:[
     {zh:'我仿佛看到胜利正朝我们走来。',py:'Wǒ fǎngfú kàndào shènglì zhèng cháo wǒmen zǒulai.',vn:'Tôi như thấy chiến thắng đang tiến về phía chúng ta.'},
     {zh:'我们学校的正门坐西朝东。',py:'Wǒmen xuéxiào de zhèngmén zuò xī cháo dōng.',vn:'Cổng chính trường chúng tôi quay mặt về hướng đông.'},
     {zh:'老船长命令水手们使劲儿朝里面放水。',py:'Lǎo chuánzhǎng mìnglìng shuǐshǒumen shǐjìnr cháo lǐmiàn fàng shuǐ.',vn:'Ông thuyền trưởng già ra lệnh cho các thủy thủ ra sức xả nước vào trong.'}
   ],
   colloFull:[
     {zh:'朝里面',py:'cháo lǐmiàn',vn:'vào phía trong'},
     {zh:'朝前走',py:'cháo qián zǒu',vn:'đi về phía trước'},
     {zh:'朝他笑',py:'cháo tā xiào',vn:'cười với anh ấy'},
     {zh:'坐北朝南',py:'zuò běi cháo nán',vn:'(nhà) hướng nam'},
     {zh:'脸朝里',py:'liǎn cháo lǐ',vn:'mặt quay vào trong'}
   ],
   patterns:[
     {s:'朝 + hướng / người + V',m:'Giới từ chỉ hướng động tác'},
     {s:'N + 朝 + phương hướng',m:'Động từ: quay mặt về phía'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nhìn thấy tôi, cô bé đã cười với tôi.',answer:'小女孩一看见我，就朝我笑了笑。',answerPy:'Xiǎo nǚhái yí kànjiàn wǒ, jiù cháo wǒ xiàole xiào.',
      note:'一 trước thanh 4 (看) đọc yí; cụm 朝我 đứng TRƯỚC động từ 笑.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Phòng ngủ của tôi hướng nam, không những sáng sủa mà cũng ấm áp.',answer:'我的卧室朝南，不仅很亮，也很暖和。',answerPy:'Wǒ de wòshì cháo nán, bùjǐn hěn liàng, yě hěn nuǎnhuo.',
      note:'朝 là động từ (quay về hướng nam); 不仅……也…… nối hai ưu điểm.',pair:'不仅……也……'}
   ]},

  {n:9,zh:'简直',py:'jiǎnzhí',pos:'Phó từ',vn:'quả là, thật là, gần như',hv:'giản trực',em:'🤯',lesson:1,
   explain:['Phó từ: gần như hoàn toàn là như vậy (thực ra chưa hẳn), mang giọng PHÓNG ĐẠI, nhấn mạnh.','Hay đi với 是 / 像 / 太……了 / 不敢…… / 没法……: 简直是疯了, 简直像换了个人, 简直太厉害了. Không dùng cùng 很 / 非常.'],
   usage:'简直 + (是 / 像) + N / Adj / V; đứng sau chủ ngữ, trước vị ngữ. Không dùng cho câu kể khách quan, bình thản.',
   collo:['简直是疯了','简直不敢相信','简直像换了个人','简直太厉害了'],
   ex_zh:'船长简直是疯了，这样做只会增加船的压力，船就会下沉得更快。',ex_py:'Chuánzhǎng jiǎnzhí shì fēng le, zhèyàng zuò zhǐ huì zēngjiā chuán de yālì, chuán jiù huì xiàchén de gèng kuài.',ex_vn:'Thuyền trưởng đúng là điên rồi, làm thế này chỉ tăng thêm sức ép cho tàu, tàu sẽ chìm nhanh hơn.',
   exList:[
     {zh:'船长简直是疯了，这样做只会增加船的压力，船就会下沉得更快。',py:'Chuánzhǎng jiǎnzhí shì fēng le, zhèyàng zuò zhǐ huì zēngjiā chuán de yālì, chuán jiù huì xiàchén de gèng kuài.',vn:'Thuyền trưởng đúng là điên rồi, làm thế này chỉ tăng thêm sức ép cho tàu, tàu sẽ chìm nhanh hơn.'},
     {zh:'听到刘方离婚的消息时，我简直不敢相信自己的耳朵。',py:'Tīngdào Liú Fāng líhūn de xiāoxi shí, wǒ jiǎnzhí bù gǎn xiāngxìn zìjǐ de ěrduo.',vn:'Khi nghe tin Lưu Phương ly hôn, tôi quả thực không dám tin vào tai mình.'},
     {zh:'这次张小姐变得格外客气、礼貌，与从前相比，简直像换了个人。',py:'Zhè cì Zhāng xiǎojiě biàn de géwài kèqi, lǐmào, yǔ cóngqián xiāngbǐ, jiǎnzhí xiàng huànle ge rén.',vn:'Lần này cô Trương trở nên đặc biệt khách sáo, lịch sự, so với trước kia cứ như biến thành người khác.'}
   ],
   colloFull:[
     {zh:'简直是疯了',py:'jiǎnzhí shì fēng le',vn:'đúng là điên rồi'},
     {zh:'简直不敢相信',py:'jiǎnzhí bù gǎn xiāngxìn',vn:'quả thật không dám tin'},
     {zh:'简直像换了个人',py:'jiǎnzhí xiàng huànle ge rén',vn:'cứ như biến thành người khác'},
     {zh:'简直太厉害了',py:'jiǎnzhí tài lìhai le',vn:'quá giỏi luôn'},
     {zh:'简直没法儿比',py:'jiǎnzhí méi fǎr bǐ',vn:'chẳng thể nào so được'}
   ],
   patterns:[
     {s:'简直 + 是 / 像 + ……',m:'So sánh phóng đại'},
     {s:'简直 + 太 + Adj + 了',m:'Cảm thán mạnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến mẹ cậu ấy cũng không nhận ra, cậu ấy cứ như biến thành người khác.',answer:'连他妈妈都认不出他了，他简直像换了个人。',answerPy:'Lián tā māma dōu rèn bu chū tā le, tā jiǎnzhí xiàng huànle ge rén.',
      note:'连……都…… nhấn mạnh; 简直像…… là so sánh phóng đại.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tiếng Trung của cậu ấy càng ngày càng giỏi, quả thực như người Trung Quốc.',answer:'他的汉语越来越好，简直像中国人一样。',answerPy:'Tā de Hànyǔ yuè lái yuè hǎo, jiǎnzhí xiàng Zhōngguórén yíyàng.',
      note:'越来越 + Adj; 简直像 + N + 一样.',pair:'越来越'}
   ]},

  {n:10,zh:'沉',py:'chén',pos:'Động từ',vn:'chìm, lặn',hv:'trầm',em:'⚓',lesson:1,
   explain:['Chìm xuống nước, rơi xuống dưới: 船沉了, 沉到水底. Trái nghĩa: 浮 (fú, nổi). Hay ghép: 下沉 (chìm xuống).','Khẩu ngữ còn là tính từ "nặng": 这个箱子很沉. BẪY: "trầm" tiếng Việt gợi trầm lặng, giọng trầm; 沉 ở đây là CHÌM.'],
   usage:'Hay gặp: 船沉了, 下沉, 沉下去, 沉到水底, 下沉得更快. Tính từ: 很沉 = rất nặng.',
   collo:['下沉','沉下去','沉到水底','箱子很沉'],
   ex_zh:'这样做只会增加船的压力，船就会下沉得更快。',ex_py:'Zhèyàng zuò zhǐ huì zēngjiā chuán de yālì, chuán jiù huì xiàchén de gèng kuài.',ex_vn:'Làm như vậy chỉ tăng thêm sức ép cho tàu, tàu sẽ chìm nhanh hơn.',
   exList:[
     {zh:'这样做只会增加船的压力，船就会下沉得更快。',py:'Zhèyàng zuò zhǐ huì zēngjiā chuán de yālì, chuán jiù huì xiàchén de gèng kuài.',vn:'Làm như vậy chỉ tăng thêm sức ép cho tàu, tàu sẽ chìm nhanh hơn.'},
     {zh:'石头扔进河里，很快就沉下去了。',py:'Shítou rēngjìn hé li, hěn kuài jiù chén xiàqu le.',vn:'Hòn đá ném xuống sông, chẳng mấy chốc đã chìm xuống.'},
     {zh:'你的箱子怎么这么沉？里面放了什么？',py:'Nǐ de xiāngzi zěnme zhème chén? Lǐmiàn fàngle shénme?',vn:'Vali của cậu sao nặng thế? Bên trong để gì vậy?'}
   ],
   colloFull:[
     {zh:'下沉',py:'xiàchén',vn:'chìm xuống'},
     {zh:'沉下去',py:'chén xiàqu',vn:'chìm xuống'},
     {zh:'沉到水底',py:'chéndào shuǐdǐ',vn:'chìm xuống đáy nước'},
     {zh:'箱子很沉',py:'xiāngzi hěn chén',vn:'vali rất nặng'},
     {zh:'船沉了',py:'chuán chén le',vn:'tàu chìm rồi'}
   ],
   patterns:[
     {s:'沉 + 下去 / 到 + nơi chốn',m:'Bổ ngữ xu hướng / nơi chốn sau 沉'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc thuyền nhỏ bị sóng lớn đánh chìm rồi.',answer:'小船被大浪打沉了。',answerPy:'Xiǎochuán bèi dà làng dǎchén le.',
      note:'被 + tác nhân + V + bổ ngữ kết quả 沉.',pair:'被'},
     {promptLang:'vi',prompt:'Hòn đá vừa ném xuống nước đã chìm ngay.',answer:'石头一扔进水里，就沉下去了。',answerPy:'Shítou yì rēngjìn shuǐ li, jiù chén xiàqu le.',
      note:'一 trước thanh 1 (扔) đọc yì; 一……就…… diễn tả hai việc nối tiếp ngay.',pair:'一……就……'}
   ]},

  {n:11,zh:'严肃',py:'yánsù',pos:'Tính từ',vn:'nghiêm túc, nghiêm nghị, trang nghiêm',hv:'nghiêm túc',em:'😐',lesson:1,
   explain:['(Nét mặt, không khí) nghiêm nghị, trang nghiêm, khiến người ta vừa kính vừa sợ: 表情严肃, 气氛严肃.','(Tác phong, thái độ) nghiêm túc, không qua loa: 严肃批评, 严肃对待. Khác 严格 (nghiêm khắc khi tuân thủ quy định, tiêu chuẩn) — xem phần 词语辨析.'],
   usage:'Bảng 词语搭配: 表情/态度/气氛/内容 + 严肃. Hay gặp: 严肃的表情, 严肃地说, 严肃对待, 严肃批评.',
   collo:['严肃的表情','气氛严肃','严肃对待','严肃批评'],
   ex_zh:'看着船长严肃的表情，水手们还是照做了。',ex_py:'Kànzhe chuánzhǎng yánsù de biǎoqíng, shuǐshǒumen háishi zhàozuò le.',ex_vn:'Nhìn vẻ mặt nghiêm nghị của thuyền trưởng, các thủy thủ vẫn làm theo.',
   exList:[
     {zh:'看着船长严肃的表情，水手们还是照做了。',py:'Kànzhe chuánzhǎng yánsù de biǎoqíng, shuǐshǒumen háishi zhàozuò le.',vn:'Nhìn vẻ mặt nghiêm nghị của thuyền trưởng, các thủy thủ vẫn làm theo.'},
     {zh:'刘教授很有学问，分析问题也很透彻，就是有点儿严肃。',py:'Liú jiàoshòu hěn yǒu xuéwen, fēnxī wèntí yě hěn tòuchè, jiùshì yǒudiǎnr yánsù.',vn:'Giáo sư Lưu rất uyên bác, phân tích vấn đề cũng thấu đáo, chỉ là hơi nghiêm.'},
     {zh:'一句幽默的笑话可以让紧张严肃的气氛变得轻松愉快。',py:'Yí jù yōumò de xiàohua kěyǐ ràng jǐnzhāng yánsù de qìfēn biàn de qīngsōng yúkuài.',vn:'Một câu đùa hóm hỉnh có thể khiến bầu không khí căng thẳng, nghiêm trang trở nên thoải mái vui vẻ.'}
   ],
   colloFull:[
     {zh:'严肃的表情',py:'yánsù de biǎoqíng',vn:'vẻ mặt nghiêm nghị'},
     {zh:'气氛严肃',py:'qìfēn yánsù',vn:'bầu không khí nghiêm trang'},
     {zh:'严肃对待',py:'yánsù duìdài',vn:'đối xử (xem xét) nghiêm túc'},
     {zh:'严肃批评',py:'yánsù pīpíng',vn:'phê bình nghiêm túc'},
     {zh:'态度严肃',py:'tàidu yánsù',vn:'thái độ nghiêm túc'}
   ],
   patterns:[
     {s:'看着……严肃的表情，……',m:'Tả phản ứng trước vẻ mặt nghiêm nghị'},
     {s:'严肃 + 对待 / 批评 / 处理',m:'Làm trạng ngữ: xử lý nghiêm túc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo tuy trông rất nghiêm nhưng thực ra rất thân thiện.',answer:'老师虽然看上去很严肃，但是其实很友善。',answerPy:'Lǎoshī suīrán kàn shàngqu hěn yánsù, dànshì qíshí hěn yǒushàn.',
      note:'虽然 đứng sau chủ ngữ 老师; vế sau 但是 lật lại ấn tượng bề ngoài.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Vừa thấy vẻ mặt nghiêm nghị của bố, tôi liền không dám nói gì nữa.',answer:'我一看到爸爸严肃的表情，就不敢说话了。',answerPy:'Wǒ yí kàndào bàba yánsù de biǎoqíng, jiù bù gǎn shuōhuà le.',
      note:'一 trước thanh 4 (看) đọc yí; 严肃的 làm định ngữ cho 表情.',pair:'一……就……'}
   ]},

  {n:12,zh:'猛烈',py:'měngliè',pos:'Tính từ',vn:'mạnh, dữ dội',hv:'mãnh liệt',em:'🌪️',lesson:1,
   explain:['Sức mạnh lớn, thế dữ dội: 风浪猛烈, 猛烈的暴风雨, 猛烈地撞击.','Tiếng Việt "mãnh liệt" hay dùng cho tình cảm (yêu mãnh liệt); 猛烈 tiếng Trung chủ yếu tả gió, mưa, lửa, tấn công, va chạm. Tình cảm mạnh nói 强烈.'],
   usage:'Hay gặp: 风浪猛烈, 猛烈的暴风雨, 火势猛烈, 猛烈地撞, 猛烈的进攻.',
   collo:['风浪猛烈','猛烈的暴风雨','火势猛烈','猛烈地撞'],
   ex_zh:'狂风巨浪依然猛烈，对船的威胁却减小了。',ex_py:'Kuángfēng jùlàng yīrán měngliè, duì chuán de wēixié què jiǎnxiǎo le.',ex_vn:'Gió dữ sóng lớn vẫn dữ dội, nhưng mối đe dọa với con tàu lại giảm đi.',
   exList:[
     {zh:'狂风巨浪依然猛烈，对船的威胁却减小了。',py:'Kuángfēng jùlàng yīrán měngliè, duì chuán de wēixié què jiǎnxiǎo le.',vn:'Gió dữ sóng lớn vẫn dữ dội, nhưng mối đe dọa với con tàu lại giảm đi.'},
     {zh:'一场猛烈的暴风雨过后，路边的很多树都倒了。',py:'Yì chǎng měngliè de bàofēngyǔ guòhòu, lù biān de hěn duō shù dōu dǎo le.',vn:'Sau một trận mưa bão dữ dội, nhiều cây ven đường đều đổ.'},
     {zh:'火势十分猛烈，消防员花了三个小时才把火扑灭。',py:'Huǒshì shífēn měngliè, xiāofángyuán huāle sān ge xiǎoshí cái bǎ huǒ pūmiè.',vn:'Thế lửa rất dữ dội, lính cứu hỏa mất ba tiếng mới dập tắt được.'}
   ],
   colloFull:[
     {zh:'风浪猛烈',py:'fēnglàng měngliè',vn:'sóng gió dữ dội'},
     {zh:'猛烈的暴风雨',py:'měngliè de bàofēngyǔ',vn:'mưa bão dữ dội'},
     {zh:'火势猛烈',py:'huǒshì měngliè',vn:'thế lửa dữ dội'},
     {zh:'猛烈地撞',py:'měngliè de zhuàng',vn:'đâm mạnh'},
     {zh:'猛烈的进攻',py:'měngliè de jìngōng',vn:'cuộc tấn công dữ dội'}
   ],
   patterns:[
     {s:'……依然猛烈，……却……',m:'Đối lập: hoàn cảnh vẫn dữ dội nhưng kết quả đã khác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gió càng lúc càng mạnh.',answer:'风越来越猛烈了。',answerPy:'Fēng yuè lái yuè měngliè le.',
      note:'越来越 + tính từ; 了 báo sự thay đổi.',pair:'越来越'},
     {promptLang:'vi',prompt:'Chiếc xe đó bị một chiếc xe tải lớn đâm mạnh một cái.',answer:'那辆车被一辆大卡车猛烈地撞了一下。',answerPy:'Nà liàng chē bèi yí liàng dà kǎchē měngliè de zhuàngle yíxià.',
      note:'被 + tác nhân + 猛烈地 (trạng ngữ) + V; 一下 trước thanh 4 đọc yíxià.',pair:'被'}
   ]},

  {n:13,zh:'狂',py:'kuáng',pos:'Tính từ',vn:'mạnh, điên cuồng, dữ dội',hv:'cuồng',em:'🌀',lesson:1,
   explain:['Dữ dội, mãnh liệt quá mức: 狂风 (gió dữ), 狂风巨浪, 狂奔 (chạy như điên).','Còn nghĩa: điên, ngông cuồng (他太狂了 = quá ngông); cực kỳ (khẩu ngữ): 狂欢, 狂喜.'],
   usage:'Thường làm ngữ tố đứng trước: 狂风, 狂欢, 狂奔, 发狂. Làm vị ngữ: 他很狂 (ngạo mạn).',
   collo:['狂风','狂风巨浪','狂欢','狂奔'],
   ex_zh:'船一点一点地下沉，狂风巨浪依然猛烈。',ex_py:'Chuán yìdiǎn yìdiǎn de xiàchén, kuángfēng jùlàng yīrán měngliè.',ex_vn:'Con tàu chìm xuống từng chút một, gió dữ sóng lớn vẫn dữ dội.',
   exList:[
     {zh:'船一点一点地下沉，狂风巨浪依然猛烈。',py:'Chuán yìdiǎn yìdiǎn de xiàchén, kuángfēng jùlàng yīrán měngliè.',vn:'Con tàu chìm xuống từng chút một, gió dữ sóng lớn vẫn dữ dội.'},
     {zh:'往往一场人生的狂风巨浪便会把他们彻底地打翻在地。',py:'Wǎngwǎng yì chǎng rénshēng de kuángfēng jùlàng biàn huì bǎ tāmen chèdǐ de dǎfān zài dì.',vn:'Thường thì chỉ một trận cuồng phong sóng dữ của cuộc đời là đủ quật ngã họ hoàn toàn.'},
     {zh:'考试一结束，同学们就去海边狂欢了一整天。',py:'Kǎoshì yì jiéshù, tóngxuémen jiù qù hǎibiān kuánghuānle yì zhěng tiān.',vn:'Thi vừa xong, các bạn liền ra biển vui chơi thả ga cả ngày.'}
   ],
   colloFull:[
     {zh:'狂风',py:'kuángfēng',vn:'gió dữ'},
     {zh:'狂风巨浪',py:'kuángfēng jùlàng',vn:'gió dữ sóng lớn'},
     {zh:'狂欢',py:'kuánghuān',vn:'vui chơi thả ga'},
     {zh:'狂奔',py:'kuángbēn',vn:'chạy như bay'},
     {zh:'发狂',py:'fākuáng',vn:'phát điên'}
   ],
   patterns:[
     {s:'狂 + N / V (狂风, 狂欢, 狂奔)',m:'狂 làm ngữ tố chỉ mức độ dữ dội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe tin này, cậu ấy chạy như bay về nhà.',answer:'一听到这个消息，他就狂奔回家了。',answerPy:'Yì tīngdào zhège xiāoxi, tā jiù kuángbēn huí jiā le.',
      note:'一 trước thanh 1 (听) đọc yì; 就 đứng sau chủ ngữ 他.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Gió dữ đã thổi đổ cả cái cây to trước cửa.',answer:'狂风把门前的大树都刮倒了。',answerPy:'Kuángfēng bǎ mén qián de dà shù dōu guādǎo le.',
      note:'把 + tân ngữ + V + bổ ngữ kết quả 倒.',pair:'把'}
   ]},

  {n:14,zh:'威胁',py:'wēixié',pos:'Động từ',vn:'uy hiếp, đe dọa',hv:'uy hiếp',em:'⚠️',lesson:1,
   explain:['Dùng sức mạnh hoặc lời lẽ để đe dọa người khác: 威胁别人.','Gây nguy hiểm cho: 威胁健康, 威胁安全. Làm danh từ: 对……的威胁, 受到威胁.'],
   usage:'Bảng 词语搭配: 威胁 + 人类/安全/健康/和平/生命. Danh từ: 对……的威胁, 受到……威胁, 威胁减小了.',
   collo:['威胁健康','威胁生命','受到威胁','对……的威胁'],
   ex_zh:'狂风巨浪依然猛烈，对船的威胁却减小了。',ex_py:'Kuángfēng jùlàng yīrán měngliè, duì chuán de wēixié què jiǎnxiǎo le.',ex_vn:'Gió dữ sóng lớn vẫn dữ dội, nhưng mối đe dọa với con tàu lại giảm đi.',
   exList:[
     {zh:'狂风巨浪依然猛烈，对船的威胁却减小了。',py:'Kuángfēng jùlàng yīrán měngliè, duì chuán de wēixié què jiǎnxiǎo le.',vn:'Gió dữ sóng lớn vẫn dữ dội, nhưng mối đe dọa với con tàu lại giảm đi.'},
     {zh:'在人口压力面前，经济发展、社会进步都受到了巨大威胁。',py:'Zài rénkǒu yālì miànqián, jīngjì fāzhǎn, shèhuì jìnbù dōu shòudàole jùdà wēixié.',vn:'Trước áp lực dân số, phát triển kinh tế và tiến bộ xã hội đều bị đe dọa nghiêm trọng.'},
     {zh:'吸烟不仅威胁自己的健康，也威胁别人的健康。',py:'Xīyān bùjǐn wēixié zìjǐ de jiànkāng, yě wēixié biérén de jiànkāng.',vn:'Hút thuốc không chỉ đe dọa sức khỏe bản thân mà còn đe dọa sức khỏe người khác.'}
   ],
   colloFull:[
     {zh:'威胁健康',py:'wēixié jiànkāng',vn:'đe dọa sức khỏe'},
     {zh:'威胁生命',py:'wēixié shēngmìng',vn:'đe dọa tính mạng'},
     {zh:'受到威胁',py:'shòudào wēixié',vn:'bị đe dọa'},
     {zh:'对……的威胁',py:'duì……de wēixié',vn:'mối đe dọa đối với …'},
     {zh:'威胁人类',py:'wēixié rénlèi',vn:'đe dọa loài người'}
   ],
   patterns:[
     {s:'A 对 B 的威胁',m:'Danh từ hóa: mối đe dọa của A với B'},
     {s:'受到 + (巨大的) + 威胁',m:'Bị đe dọa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ô nhiễm không khí không những đe dọa sức khỏe mà cũng ảnh hưởng tâm trạng.',answer:'空气污染不仅威胁健康，也影响心情。',answerPy:'Kōngqì wūrǎn bùjǐn wēixié jiànkāng, yě yǐngxiǎng xīnqíng.',
      note:'Cùng chủ ngữ: 不仅 đứng sau chủ ngữ; vế sau dùng 也.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Anh ta đã bị người ta đe dọa.',answer:'他被人威胁了。',answerPy:'Tā bèi rén wēixié le.',
      note:'被 + 人 (tác nhân chung chung) + V + 了.',pair:'被'}
   ]},

  {n:15,zh:'平衡',py:'pínghéng',pos:'Tính từ',vn:'thăng bằng, cân bằng',hv:'bình hành',em:'🤸',lesson:1,
   explain:['Hai bên (hoặc các bên) ngang nhau, cân đối, không nghiêng lệch.','Dùng như danh từ, động từ: 保持平衡, 失去平衡, 平衡工作和生活. Tiếng Việt nói "cân bằng, thăng bằng"; âm Hán–Việt "bình hành" ít dùng.'],
   usage:'Hay gặp: 保持平衡, 失去平衡, 取得平衡, 营养平衡, 心理不平衡.',
   collo:['保持平衡','失去平衡','取得平衡','心理不平衡'],
   ex_zh:'对船的威胁却减小了，船也渐渐取得了平衡。',ex_py:'Duì chuán de wēixié què jiǎnxiǎo le, chuán yě jiànjiàn qǔdéle pínghéng.',ex_vn:'Mối đe dọa với con tàu lại giảm đi, con tàu cũng dần lấy lại được thăng bằng.',
   exList:[
     {zh:'对船的威胁却减小了，船也渐渐取得了平衡。',py:'Duì chuán de wēixié què jiǎnxiǎo le, chuán yě jiànjiàn qǔdéle pínghéng.',vn:'Mối đe dọa với con tàu lại giảm đi, con tàu cũng dần lấy lại được thăng bằng.'},
     {zh:'初学骑自行车最重要的是注意保持平衡。',py:'Chūxué qí zìxíngchē zuì zhòngyào de shì zhùyì bǎochí pínghéng.',vn:'Mới tập đi xe đạp, quan trọng nhất là chú ý giữ thăng bằng.'},
     {zh:'早上起来时，他突然感觉脑子特别晕，身体一下子失去平衡就摔倒了。',py:'Zǎoshang qǐlai shí, tā tūrán gǎnjué nǎozi tèbié yūn, shēntǐ yíxiàzi shīqù pínghéng jiù shuāidǎo le.',vn:'Sáng dậy, ông ấy bỗng thấy đầu choáng váng, người mất thăng bằng rồi ngã xuống.'}
   ],
   colloFull:[
     {zh:'保持平衡',py:'bǎochí pínghéng',vn:'giữ thăng bằng'},
     {zh:'失去平衡',py:'shīqù pínghéng',vn:'mất thăng bằng'},
     {zh:'取得平衡',py:'qǔdé pínghéng',vn:'lấy lại (đạt được) cân bằng'},
     {zh:'心理不平衡',py:'xīnlǐ bù pínghéng',vn:'tâm lý không cân bằng (thấy bất công)'},
     {zh:'营养平衡',py:'yíngyǎng pínghéng',vn:'dinh dưỡng cân bằng'}
   ],
   patterns:[
     {s:'保持 / 失去 / 取得 + 平衡',m:'Ba động từ hay đi với 平衡'},
     {s:'在 A 和 B 之间保持平衡',m:'Cân bằng giữa hai việc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa mất thăng bằng là cậu ấy ngã.',answer:'他一失去平衡，就摔倒了。',answerPy:'Tā yì shīqù pínghéng, jiù shuāidǎo le.',
      note:'一 trước thanh 1 (失) đọc yì; 一……就…… hai việc liền nhau.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần dinh dưỡng cân bằng thì không cần uống thuốc bổ.',answer:'只要营养平衡，就不用吃补药。',answerPy:'Zhǐyào yíngyǎng pínghéng, jiù búyòng chī bǔyào.',
      note:'只要 + điều kiện đủ, 就 + kết quả; 不用 đọc búyòng.',pair:'只要……就……'}
   ]},

  {n:16,zh:'吨',py:'dūn',pos:'Lượng từ',vn:'tấn',hv:'đốn',em:'🚛',lesson:1,
   explain:['Đơn vị đo trọng lượng: 1 吨 = 1000 公斤 (kg). Thuộc nhóm 度量单位 trong phần 扩展 (cùng 厘米, 克, 平方).','Đứng sau số từ: 一吨, 几万吨; bảng 词语搭配: 一吨 + 货物/钢铁/粮食.'],
   usage:'Số + 吨 + (的) + N: 五吨货物, 几万吨的巨轮. Hỏi: 多少吨?',
   collo:['一吨货物','几万吨','一吨钢铁','一吨粮食'],
   ex_zh:'几万吨的钢铁巨轮很少有被打翻的。',ex_py:'Jǐ wàn dūn de gāngtiě jùlún hěn shǎo yǒu bèi dǎfān de.',ex_vn:'Những con tàu thép khổng lồ nặng mấy vạn tấn rất ít khi bị lật.',
   exList:[
     {zh:'几万吨的钢铁巨轮很少有被打翻的。',py:'Jǐ wàn dūn de gāngtiě jùlún hěn shǎo yǒu bèi dǎfān de.',vn:'Những con tàu thép khổng lồ nặng mấy vạn tấn rất ít khi bị lật.'},
     {zh:'这辆卡车最多能装五吨货物。',py:'Zhè liàng kǎchē zuì duō néng zhuāng wǔ dūn huòwù.',vn:'Chiếc xe tải này chở được nhiều nhất năm tấn hàng.'},
     {zh:'今年这个村子一共收了两百多吨粮食。',py:'Jīnnián zhège cūnzi yígòng shōule liǎngbǎi duō dūn liángshi.',vn:'Năm nay làng này thu hoạch tổng cộng hơn hai trăm tấn lương thực.'}
   ],
   colloFull:[
     {zh:'一吨货物',py:'yì dūn huòwù',vn:'một tấn hàng'},
     {zh:'几万吨',py:'jǐ wàn dūn',vn:'mấy vạn tấn'},
     {zh:'一吨钢铁',py:'yì dūn gāngtiě',vn:'một tấn sắt thép'},
     {zh:'一吨粮食',py:'yì dūn liángshi',vn:'một tấn lương thực'},
     {zh:'多少吨',py:'duōshao dūn',vn:'bao nhiêu tấn'}
   ],
   patterns:[
     {s:'số + 吨 + 的 + N',m:'Tả trọng tải: 几万吨的巨轮'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Số hàng này là được chở đến bằng tàu, tổng cộng mười tấn.',answer:'这些货物是用船运来的，一共十吨。',answerPy:'Zhèxiē huòwù shì yòng chuán yùnlái de, yígòng shí dūn.',
      note:'是……的 nhấn mạnh CÁCH THỨC (用船); 一共 đọc yígòng.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chiếc xe này không những chở được năm tấn hàng mà cũng chạy rất nhanh.',answer:'这辆车不仅能装五吨货物，也跑得很快。',answerPy:'Zhè liàng chē bùjǐn néng zhuāng wǔ dūn huòwù, yě pǎo de hěn kuài.',
      note:'不仅……也…… cùng một chủ ngữ 这辆车.',pair:'不仅……也……'}
   ]},

  {n:17,zh:'钢铁',py:'gāngtiě',pos:'Danh từ',vn:'sắt thép',hv:'cương thiết',em:'🔩',lesson:1,
   explain:['Thép và sắt, nói chung là kim loại cứng: 钢 = thép, 铁 = sắt.','Nghĩa bóng: cứng rắn, kiên cường như thép — 钢铁般的意志 (ý chí sắt đá).'],
   usage:'Làm định ngữ: 钢铁巨轮, 钢铁工业, 钢铁公司; nghĩa bóng: 钢铁般的意志.',
   collo:['钢铁巨轮','钢铁工业','钢铁般的意志','生产钢铁'],
   ex_zh:'几万吨的钢铁巨轮很少有被打翻的，被打翻的常常是根基很轻的小船。',ex_py:'Jǐ wàn dūn de gāngtiě jùlún hěn shǎo yǒu bèi dǎfān de, bèi dǎfān de chángcháng shì gēnjī hěn qīng de xiǎochuán.',ex_vn:'Tàu thép khổng lồ mấy vạn tấn rất ít khi bị lật, cái bị lật thường là thuyền nhỏ có phần đáy rất nhẹ.',
   exList:[
     {zh:'几万吨的钢铁巨轮很少有被打翻的，被打翻的常常是根基很轻的小船。',py:'Jǐ wàn dūn de gāngtiě jùlún hěn shǎo yǒu bèi dǎfān de, bèi dǎfān de chángcháng shì gēnjī hěn qīng de xiǎochuán.',vn:'Tàu thép khổng lồ mấy vạn tấn rất ít khi bị lật, cái bị lật thường là thuyền nhỏ có phần đáy rất nhẹ.'},
     {zh:'这座城市以前主要靠钢铁工业发展经济。',py:'Zhè zuò chéngshì yǐqián zhǔyào kào gāngtiě gōngyè fāzhǎn jīngjì.',vn:'Thành phố này trước kia chủ yếu dựa vào công nghiệp gang thép để phát triển kinh tế.'},
     {zh:'运动员们靠钢铁般的意志坚持跑完了全程。',py:'Yùndòngyuánmen kào gāngtiě bān de yìzhì jiānchí pǎowánle quánchéng.',vn:'Các vận động viên dựa vào ý chí sắt đá, kiên trì chạy hết toàn bộ quãng đường.'}
   ],
   colloFull:[
     {zh:'钢铁巨轮',py:'gāngtiě jùlún',vn:'tàu thép khổng lồ'},
     {zh:'钢铁工业',py:'gāngtiě gōngyè',vn:'công nghiệp gang thép'},
     {zh:'钢铁般的意志',py:'gāngtiě bān de yìzhì',vn:'ý chí sắt đá'},
     {zh:'生产钢铁',py:'shēngchǎn gāngtiě',vn:'sản xuất sắt thép'},
     {zh:'钢铁公司',py:'gāngtiě gōngsī',vn:'công ty gang thép'}
   ],
   patterns:[
     {s:'钢铁般的 + N (意志 / 身体)',m:'Nghĩa bóng: cứng rắn như thép (ôn 般 bài 19)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây cầu này được xây bằng sắt thép.',answer:'这座桥是用钢铁建成的。',answerPy:'Zhè zuò qiáo shì yòng gāngtiě jiànchéng de.',
      note:'是……的 nhấn mạnh CHẤT LIỆU / cách thức (用钢铁).',pair:'是……的'},
     {promptLang:'vi',prompt:'Đến cả con tàu thép khổng lồ như thế này cũng bị lật.',answer:'连这么大的钢铁巨轮都被打翻了。',answerPy:'Lián zhème dà de gāngtiě jùlún dōu bèi dǎfān le.',
      note:'连……都…… kết hợp câu bị động 被 (lược tác nhân).',pair:'连……都……'}
   ]},

  {n:18,zh:'根基',py:'gēnjī',pos:'Danh từ',vn:'nền tảng, nền móng',hv:'căn cơ',em:'🧱',lesson:1,
   explain:['Phần nền móng dưới cùng của công trình, của vật; nghĩa rộng: cơ sở, nền tảng của sự việc, con người.','BẪY Hán–Việt: "căn cơ" tiếng Việt là tằn tiện, tiết kiệm; 根基 tiếng Trung là NỀN MÓNG, gốc rễ. Gần nghĩa: 基础 (thường dùng hơn).'],
   usage:'Hay gặp: 根基很轻 / 很稳, 打好根基, 根基不稳, 动摇根基.',
   collo:['根基很轻','打好根基','根基不稳','动摇根基'],
   ex_zh:'被打翻的常常是根基很轻的小船。',ex_py:'Bèi dǎfān de chángcháng shì gēnjī hěn qīng de xiǎochuán.',ex_vn:'Cái bị lật thường là những chiếc thuyền nhỏ có phần đáy rất nhẹ.',
   exList:[
     {zh:'被打翻的常常是根基很轻的小船。',py:'Bèi dǎfān de chángcháng shì gēnjī hěn qīng de xiǎochuán.',vn:'Cái bị lật thường là những chiếc thuyền nhỏ có phần đáy rất nhẹ.'},
     {zh:'学外语要先打好根基，发音和基本语法都很重要。',py:'Xué wàiyǔ yào xiān dǎhǎo gēnjī, fāyīn hé jīběn yǔfǎ dōu hěn zhòngyào.',vn:'Học ngoại ngữ phải xây chắc nền móng trước, phát âm và ngữ pháp cơ bản đều rất quan trọng.'},
     {zh:'这座老房子的根基不稳，住在里面很危险。',py:'Zhè zuò lǎo fángzi de gēnjī bù wěn, zhù zài lǐmiàn hěn wēixiǎn.',vn:'Nền móng ngôi nhà cũ này không vững, ở trong đó rất nguy hiểm.'}
   ],
   colloFull:[
     {zh:'根基很轻',py:'gēnjī hěn qīng',vn:'phần đáy (nền) rất nhẹ'},
     {zh:'打好根基',py:'dǎhǎo gēnjī',vn:'xây chắc nền móng'},
     {zh:'根基不稳',py:'gēnjī bù wěn',vn:'nền móng không vững'},
     {zh:'动摇根基',py:'dòngyáo gēnjī',vn:'làm lung lay nền tảng'},
     {zh:'根基很深',py:'gēnjī hěn shēn',vn:'nền tảng sâu vững'}
   ],
   patterns:[
     {s:'……要先打好根基',m:'Khuyên xây nền tảng trước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần xây chắc nền móng thì sau này sẽ học nhẹ nhàng hơn.',answer:'只要打好根基，以后就会学得更轻松。',answerPy:'Zhǐyào dǎhǎo gēnjī, yǐhòu jiù huì xué de gèng qīngsōng.',
      note:'只要 + điều kiện, (以后) 就 + kết quả; 就 đứng sau trạng ngữ thời gian.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nền móng ngôi nhà bị nước mưa làm hỏng rồi.',answer:'房子的根基被雨水冲坏了。',answerPy:'Fángzi de gēnjī bèi yǔshuǐ chōnghuài le.',
      note:'被 + tác nhân (雨水) + V + bổ ngữ kết quả 坏.',pair:'被'}
   ]},

  {n:19,zh:'重量',py:'zhòngliàng',pos:'Danh từ',vn:'trọng lượng',hv:'trọng lượng',em:'⚖️',lesson:1,
   explain:['Độ nặng của vật: 重量是多少, 有一定重量.','Trùng khít tiếng Việt "trọng lượng". Khẩu ngữ hỏi nặng bao nhiêu thường nói 多重.'],
   usage:'Hay gặp: 有一定重量, 减轻重量, 承受重量, 重量超过……, 重量很轻.',
   collo:['有一定重量','减轻重量','承受重量','重量超过'],
   ex_zh:'船在有一定重量的时候是最安全的，在空的时候则是最危险的。',ex_py:'Chuán zài yǒu yídìng zhòngliàng de shíhou shì zuì ānquán de, zài kōng de shíhou zé shì zuì wēixiǎn de.',ex_vn:'Con tàu khi có một trọng lượng nhất định là an toàn nhất, còn khi trống rỗng lại là nguy hiểm nhất.',
   exList:[
     {zh:'船在有一定重量的时候是最安全的，在空的时候则是最危险的。',py:'Chuán zài yǒu yídìng zhòngliàng de shíhou shì zuì ānquán de, zài kōng de shíhou zé shì zuì wēixiǎn de.',vn:'Con tàu khi có một trọng lượng nhất định là an toàn nhất, còn khi trống rỗng lại là nguy hiểm nhất.'},
     {zh:'行李的重量超过了二十公斤，要另外交钱。',py:'Xíngli de zhòngliàng chāoguòle èrshí gōngjīn, yào lìngwài jiāo qián.',vn:'Trọng lượng hành lý vượt quá 20 kg, phải nộp thêm tiền.'},
     {zh:'这座桥最多能承受三十吨的重量。',py:'Zhè zuò qiáo zuì duō néng chéngshòu sānshí dūn de zhòngliàng.',vn:'Cây cầu này chịu được trọng lượng tối đa 30 tấn.'}
   ],
   colloFull:[
     {zh:'有一定重量',py:'yǒu yídìng zhòngliàng',vn:'có trọng lượng nhất định'},
     {zh:'减轻重量',py:'jiǎnqīng zhòngliàng',vn:'giảm trọng lượng'},
     {zh:'承受重量',py:'chéngshòu zhòngliàng',vn:'chịu trọng lượng'},
     {zh:'重量超过',py:'zhòngliàng chāoguò',vn:'trọng lượng vượt quá'},
     {zh:'重量很轻',py:'zhòngliàng hěn qīng',vn:'trọng lượng rất nhẹ'}
   ],
   patterns:[
     {s:'N 的重量 + 超过 / 是 + số + 公斤 / 吨',m:'Nói trọng lượng cụ thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu lấy bớt mấy quyển sách ra, giảm trọng lượng vali đi.',answer:'你把几本书拿出来，减轻一下箱子的重量吧。',answerPy:'Nǐ bǎ jǐ běn shū ná chūlai, jiǎnqīng yíxià xiāngzi de zhòngliàng ba.',
      note:'把 + tân ngữ + V + bổ ngữ xu hướng 出来; 一下 đọc yíxià.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy trọng lượng của nó rất nhẹ nhưng rất chắc.',answer:'虽然它的重量很轻，但是非常结实。',answerPy:'Suīrán tā de zhòngliàng hěn qīng, dànshì fēicháng jiēshi.',
      note:'虽然……但是…… nối hai đặc điểm tưởng như trái ngược.',pair:'虽然……但是……'}
   ]},

  {n:20,zh:'相似',py:'xiāngsì',pos:'Tính từ',vn:'tương tự, giống nhau',hv:'tương tự',em:'👯',lesson:1,
   explain:['Giống nhau, gần giống nhau (không hoàn toàn như nhau): 相似的故事, 两个人长得很相似.','Mẫu: A 与 / 和 B 相似; A 有与 B 相似的 + N (câu 30 sách bài tập).'],
   usage:'Bảng 词语搭配: 相似的 + 情况/爱好/观点/看法. Hay gặp: 与……相似, 非常相似, 相似之处.',
   collo:['相似的故事','相似的经历','与……相似','相似的看法'],
   ex_zh:'另一个相似的故事发生在某一著名风景区。',ex_py:'Lìng yí ge xiāngsì de gùshi fāshēng zài mǒu yí zhùmíng fēngjǐngqū.',ex_vn:'Một câu chuyện tương tự khác xảy ra ở một khu thắng cảnh nổi tiếng nọ.',
   exList:[
     {zh:'另一个相似的故事发生在某一著名风景区。',py:'Lìng yí ge xiāngsì de gùshi fāshēng zài mǒu yí zhùmíng fēngjǐngqū.',vn:'Một câu chuyện tương tự khác xảy ra ở một khu thắng cảnh nổi tiếng nọ.'},
     {zh:'陈工程师也有与老人相似的经历。',py:'Chén gōngchéngshī yě yǒu yǔ lǎorén xiāngsì de jīnglì.',vn:'Kỹ sư Trần cũng có trải nghiệm tương tự ông cụ.'},
     {zh:'您选的这两套房子户型很相似，只是面积相差了二十多平米。',py:'Nín xuǎn de zhè liǎng tào fángzi hùxíng hěn xiāngsì, zhǐshì miànjī xiāngchàle èrshí duō píngmǐ.',vn:'Hai căn nhà anh chọn có kiểu bố trí rất giống nhau, chỉ là diện tích chênh nhau hơn hai mươi mét vuông.'}
   ],
   colloFull:[
     {zh:'相似的故事',py:'xiāngsì de gùshi',vn:'câu chuyện tương tự'},
     {zh:'相似的经历',py:'xiāngsì de jīnglì',vn:'trải nghiệm tương tự'},
     {zh:'与……相似',py:'yǔ……xiāngsì',vn:'giống với …'},
     {zh:'相似的看法',py:'xiāngsì de kànfǎ',vn:'cách nhìn giống nhau'},
     {zh:'非常相似',py:'fēicháng xiāngsì',vn:'rất giống nhau'}
   ],
   patterns:[
     {s:'A 与 / 和 B 相似',m:'So sánh hai sự vật giống nhau'},
     {s:'A 也有与 B 相似的 + N',m:'Câu 30 sách bài tập'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai chị em không những ngoại hình giống nhau mà sở thích cũng giống nhau.',answer:'姐妹俩不仅长得很相似，爱好也很相似。',answerPy:'Jiěmèi liǎ bùjǐn zhǎng de hěn xiāngsì, àihào yě hěn xiāngsì.',
      note:'不仅……也……; vế sau đổi chủ ngữ phụ (爱好) nên 也 đứng sau 爱好.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tôi chưa từng nghe câu chuyện tương tự bao giờ.',answer:'我从来没听过相似的故事。',answerPy:'Wǒ cónglái méi tīngguo xiāngsì de gùshi.',
      note:'从来没 + V + 过 + tân ngữ.',pair:'从来没……过'}
   ]},

  {n:21,zh:'风景',py:'fēngjǐng',pos:'Danh từ',vn:'phong cảnh, cảnh vật',hv:'phong cảnh',em:'🏞️',lesson:1,
   explain:['Cảnh đẹp thiên nhiên hoặc cảnh vật để ngắm: 风景很美, 看风景.','风景区 = khu thắng cảnh; 风景如画 = cảnh đẹp như tranh.'],
   usage:'Hay gặp: 风景区, 风景优美, 欣赏风景, 风景如画, 看风景.',
   collo:['风景区','风景优美','欣赏风景','风景如画'],
   ex_zh:'另一个相似的故事发生在某一著名风景区。',ex_py:'Lìng yí ge xiāngsì de gùshi fāshēng zài mǒu yí zhùmíng fēngjǐngqū.',ex_vn:'Một câu chuyện tương tự khác xảy ra ở một khu thắng cảnh nổi tiếng nọ.',
   exList:[
     {zh:'另一个相似的故事发生在某一著名风景区。',py:'Lìng yí ge xiāngsì de gùshi fāshēng zài mǒu yí zhùmíng fēngjǐngqū.',vn:'Một câu chuyện tương tự khác xảy ra ở một khu thắng cảnh nổi tiếng nọ.'},
     {zh:'我们运气真好，海面风平浪静，风景多美啊！',py:'Wǒmen yùnqi zhēn hǎo, hǎimiàn fēngpíng-làngjìng, fēngjǐng duō měi a!',vn:'Chúng ta may thật, mặt biển sóng yên gió lặng, phong cảnh đẹp biết bao!'},
     {zh:'下龙湾风景如画，每年吸引很多外国游客。',py:'Xiàlóng Wān fēngjǐng rú huà, měi nián xīyǐn hěn duō wàiguó yóukè.',vn:'Vịnh Hạ Long cảnh đẹp như tranh, mỗi năm thu hút rất nhiều du khách nước ngoài.'}
   ],
   colloFull:[
     {zh:'风景区',py:'fēngjǐngqū',vn:'khu thắng cảnh'},
     {zh:'风景优美',py:'fēngjǐng yōuměi',vn:'phong cảnh tươi đẹp'},
     {zh:'欣赏风景',py:'xīnshǎng fēngjǐng',vn:'thưởng ngoạn phong cảnh'},
     {zh:'风景如画',py:'fēngjǐng rú huà',vn:'cảnh đẹp như tranh'},
     {zh:'看风景',py:'kàn fēngjǐng',vn:'ngắm cảnh'}
   ],
   patterns:[
     {s:'……风景如画 / 风景优美',m:'Khen cảnh đẹp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phong cảnh ở đây càng ngày càng đẹp.',answer:'这里的风景越来越美了。',answerPy:'Zhèlǐ de fēngjǐng yuè lái yuè měi le.',
      note:'越来越 + tính từ 美; 了 báo sự thay đổi.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy leo núi rất mệt nhưng phong cảnh trên đỉnh núi rất đẹp.',answer:'虽然爬山很累，但是山顶的风景非常美。',answerPy:'Suīrán pá shān hěn lèi, dànshì shāndǐng de fēngjǐng fēicháng měi.',
      note:'虽然 + cái giá phải trả, 但是 + điều bù lại.',pair:'虽然……但是……'}
   ]},

  {n:22,zh:'窄',py:'zhǎi',pos:'Tính từ',vn:'chật, hẹp',hv:'trách',em:'↔️',lesson:1,
   explain:['Chiều ngang nhỏ, hẹp: 路很窄, 窄窄的小巷. Trái nghĩa: 宽 (rộng).','Nghĩa bóng: 心眼儿窄 = hẹp hòi, hay để bụng.'],
   usage:'Hay gặp: 山路很窄, 又窄又长, 窄窄的小巷, 心眼儿窄. Trái nghĩa: 宽.',
   collo:['山路很窄','又窄又长','窄窄的小巷','心眼儿窄'],
   ex_zh:'山路非常窄，两边是万丈深渊。',ex_py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.',ex_vn:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.',
   exList:[
     {zh:'山路非常窄，两边是万丈深渊。',py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.',vn:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.'},
     {zh:'有些地方山路非常窄，吓得我腿直发抖。',py:'Yǒuxiē dìfang shānlù fēicháng zhǎi, xià de wǒ tuǐ zhí fādǒu.',vn:'Có chỗ đường núi cực hẹp, sợ đến mức chân tôi run cầm cập.'},
     {zh:'这条小巷又窄又长，汽车根本开不进去。',py:'Zhè tiáo xiǎoxiàng yòu zhǎi yòu cháng, qìchē gēnběn kāi bu jìnqu.',vn:'Con ngõ này vừa hẹp vừa dài, ô tô hoàn toàn không đi vào được.'}
   ],
   colloFull:[
     {zh:'山路很窄',py:'shānlù hěn zhǎi',vn:'đường núi hẹp'},
     {zh:'又窄又长',py:'yòu zhǎi yòu cháng',vn:'vừa hẹp vừa dài'},
     {zh:'窄窄的小巷',py:'zhǎizhǎi de xiǎoxiàng',vn:'con ngõ hẹp'},
     {zh:'心眼儿窄',py:'xīnyǎnr zhǎi',vn:'hẹp hòi'},
     {zh:'路太窄了',py:'lù tài zhǎi le',vn:'đường hẹp quá'}
   ],
   patterns:[
     {s:'又窄又 + Adj',m:'Tả hai đặc điểm cùng lúc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đường càng ngày càng hẹp, xe không đi qua được nữa.',answer:'路越来越窄，车开不过去了。',answerPy:'Lù yuè lái yuè zhǎi, chē kāi bu guòqu le.',
      note:'越来越 + Adj; 开不过去 là bổ ngữ khả năng phủ định.',pair:'越来越'},
     {promptLang:'vi',prompt:'Con đường này hẹp đến mức đến xe đạp cũng không qua được.',answer:'这条路窄得连自行车都过不去。',answerPy:'Zhè tiáo lù zhǎi de lián zìxíngchē dōu guò bu qù.',
      note:'Adj + 得 + 连……都…… tả mức độ cực điểm.',pair:'连……都……'}
   ]},

  {n:23,zh:'万丈',py:'wànzhàng',pos:'Số lượng từ',vn:'cao ngất, muôn trượng',hv:'vạn trượng',em:'🏔️',lesson:1,
   explain:['Vạn trượng (丈 là đơn vị đo chiều dài cổ, khoảng 3,3 m) — cách nói phóng đại: rất cao hoặc rất sâu.','Hay gặp trong cụm cố định: 万丈深渊 (vực sâu vạn trượng), 光芒万丈 (hào quang rực rỡ), 万丈高楼平地起 (nhà cao vạn trượng cũng xây từ mặt đất).'],
   usage:'Không đứng độc lập; đi với danh từ / trong cụm cố định: 万丈深渊, 光芒万丈, 万丈高楼.',
   collo:['万丈深渊','光芒万丈','万丈高楼','怒火万丈'],
   ex_zh:'山路非常窄，两边是万丈深渊。',ex_py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.',ex_vn:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.',
   exList:[
     {zh:'山路非常窄，两边是万丈深渊。',py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.',vn:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.'},
     {zh:'万丈高楼平地起，学习也要一步一步来。',py:'Wànzhàng gāolóu píngdì qǐ, xuéxí yě yào yí bù yí bù lái.',vn:'Nhà cao vạn trượng cũng xây từ mặt đất, học tập cũng phải từng bước một.'},
     {zh:'太阳升起来了，光芒万丈，照亮了整个海面。',py:'Tàiyáng shēng qǐlai le, guāngmáng wànzhàng, zhàoliàngle zhěnggè hǎimiàn.',vn:'Mặt trời lên, hào quang rực rỡ chiếu sáng cả mặt biển.'}
   ],
   colloFull:[
     {zh:'万丈深渊',py:'wànzhàng shēnyuān',vn:'vực sâu vạn trượng'},
     {zh:'光芒万丈',py:'guāngmáng wànzhàng',vn:'hào quang rực rỡ'},
     {zh:'万丈高楼',py:'wànzhàng gāolóu',vn:'nhà cao vạn trượng'},
     {zh:'怒火万丈',py:'nùhuǒ wànzhàng',vn:'lửa giận ngút trời'},
     {zh:'万丈悬崖',py:'wànzhàng xuányá',vn:'vách đá cao vạn trượng'}
   ],
   patterns:[
     {s:'两边是万丈深渊',m:'Tả địa hình cực kỳ nguy hiểm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nhìn thấy vực sâu vạn trượng phía dưới, chân tôi đã run.',answer:'我一看到下面的万丈深渊，腿就发抖。',answerPy:'Wǒ yí kàndào xiàmiàn de wànzhàng shēnyuān, tuǐ jiù fādǒu.',
      note:'Hai vế khác chủ ngữ (我 / 腿): 就 đứng sau chủ ngữ vế sau.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy hai bên là vực sâu vạn trượng nhưng người dân địa phương không sợ chút nào.',answer:'虽然两边是万丈深渊，但是当地人一点儿也不怕。',answerPy:'Suīrán liǎngbiān shì wànzhàng shēnyuān, dànshì dāngdìrén yìdiǎnr yě bú pà.',
      note:'虽然……但是……; 一点儿也不 + V: không … chút nào.',pair:'虽然……但是……'}
   ]},

  {n:24,zh:'深渊',py:'shēnyuān',pos:'Danh từ',vn:'vực sâu, vực thẳm',hv:'thâm uyên',em:'🕳️',lesson:1,
   explain:['Vực nước rất sâu, hố sâu không thấy đáy.','Nghĩa bóng: tình cảnh cực kỳ nguy hiểm, khốn khổ — 陷入……的深渊.'],
   usage:'Hay gặp: 万丈深渊, 掉进深渊, 陷入深渊, 痛苦的深渊, 走向深渊.',
   collo:['万丈深渊','掉进深渊','陷入深渊','痛苦的深渊'],
   ex_zh:'山路非常窄，两边是万丈深渊。',ex_py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.',ex_vn:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.',
   exList:[
     {zh:'山路非常窄，两边是万丈深渊。',py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.',vn:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.'},
     {zh:'一不小心，他的手机就掉进了深渊。',py:'Yí bù xiǎoxīn, tā de shǒujī jiù diàojìnle shēnyuān.',vn:'Chỉ sơ ý một chút, điện thoại của anh ấy đã rơi xuống vực sâu.'},
     {zh:'沉迷网络游戏，可能会让一个学生陷入失败的深渊。',py:'Chénmí wǎngluò yóuxì, kěnéng huì ràng yí ge xuésheng xiànrù shībài de shēnyuān.',vn:'Nghiện game online có thể khiến một học sinh rơi vào vực thẳm thất bại.'}
   ],
   colloFull:[
     {zh:'万丈深渊',py:'wànzhàng shēnyuān',vn:'vực sâu vạn trượng'},
     {zh:'掉进深渊',py:'diàojìn shēnyuān',vn:'rơi xuống vực'},
     {zh:'陷入深渊',py:'xiànrù shēnyuān',vn:'rơi vào vực thẳm'},
     {zh:'痛苦的深渊',py:'tòngkǔ de shēnyuān',vn:'vực thẳm đau khổ'},
     {zh:'走向深渊',py:'zǒuxiàng shēnyuān',vn:'đi đến vực thẳm'}
   ],
   patterns:[
     {s:'陷入 / 掉进 + (……的) + 深渊',m:'Nghĩa bóng: rơi vào tình cảnh tồi tệ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mũ của anh ấy bị gió thổi rơi xuống vực sâu.',answer:'他的帽子被风吹进了深渊。',answerPy:'Tā de màozi bèi fēng chuījìnle shēnyuān.',
      note:'被 + tác nhân (风) + V + bổ ngữ xu hướng 进.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần đi cẩn thận thì sẽ không rơi xuống vực.',answer:'只要小心走，就不会掉进深渊。',answerPy:'Zhǐyào xiǎoxīn zǒu, jiù bú huì diàojìn shēnyuān.',
      note:'只要……就……; 不会 đọc bú huì.',pair:'只要……就……'}
   ]},

  {n:25,zh:'游览',py:'yóulǎn',pos:'Động từ',vn:'tham quan, dạo chơi',hv:'du lãm',em:'🗺️',lesson:1,
   explain:['Đi tham quan, ngắm cảnh đẹp, danh lam thắng cảnh: 游览长城, 游览名胜古迹.','Khác 旅游 (đi du lịch nói chung, không mang tân ngữ nơi chốn trực tiếp): 游览 nhấn mạnh việc đi xem một nơi cụ thể, mang tân ngữ được.'],
   usage:'Hay gặp: 游览名胜, 游览长城, 带队游览, 游览路线, 游览车.',
   collo:['游览名胜','游览长城','带队游览','游览路线'],
   ex_zh:'每当导游们带队来这里游览时，一定要让游客们背点或者拿点什么东西。',ex_py:'Měi dāng dǎoyóumen dài duì lái zhèlǐ yóulǎn shí, yídìng yào ràng yóukèmen bēi diǎn huòzhě ná diǎn shénme dōngxi.',ex_vn:'Mỗi khi các hướng dẫn viên dẫn đoàn đến đây tham quan, họ nhất định bắt du khách đeo hoặc cầm thứ gì đó.',
   exList:[
     {zh:'每当导游们带队来这里游览时，一定要让游客们背点或者拿点什么东西。',py:'Měi dāng dǎoyóumen dài duì lái zhèlǐ yóulǎn shí, yídìng yào ràng yóukèmen bēi diǎn huòzhě ná diǎn shénme dōngxi.',vn:'Mỗi khi các hướng dẫn viên dẫn đoàn đến đây tham quan, họ nhất định bắt du khách đeo hoặc cầm thứ gì đó.'},
     {zh:'到了北京，我们先去游览了长城和故宫。',py:'Dàole Běijīng, wǒmen xiān qù yóulǎnle Chángchéng hé Gùgōng.',vn:'Đến Bắc Kinh, chúng tôi đi tham quan Vạn Lý Trường Thành và Cố Cung trước.'},
     {zh:'趁着暑假，我和家人去游览了很多名胜古迹。',py:'Chènzhe shǔjià, wǒ hé jiārén qù yóulǎnle hěn duō míngshèng gǔjì.',vn:'Nhân kỳ nghỉ hè, tôi và gia đình đi tham quan rất nhiều danh lam thắng cảnh.'}
   ],
   colloFull:[
     {zh:'游览名胜',py:'yóulǎn míngshèng',vn:'tham quan danh thắng'},
     {zh:'游览长城',py:'yóulǎn Chángchéng',vn:'tham quan Trường Thành'},
     {zh:'带队游览',py:'dài duì yóulǎn',vn:'dẫn đoàn tham quan'},
     {zh:'游览路线',py:'yóulǎn lùxiàn',vn:'lộ trình tham quan'},
     {zh:'游览车',py:'yóulǎnchē',vn:'xe tham quan'}
   ],
   patterns:[
     {s:'去 / 来 + nơi chốn + 游览',m:'Đi đến đâu tham quan'},
     {s:'游览 + danh lam cụ thể',m:'Mang tân ngữ trực tiếp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần trước đi Hạ Long là bố dẫn tôi đi tham quan.',answer:'上次去下龙湾是爸爸带我去游览的。',answerPy:'Shàng cì qù Xiàlóng Wān shì bàba dài wǒ qù yóulǎn de.',
      note:'是……的 nhấn mạnh NGƯỜI thực hiện (爸爸).',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa từng tham quan Cố Cung bao giờ.',answer:'我从来没游览过故宫。',answerPy:'Wǒ cónglái méi yóulǎnguo Gùgōng.',
      note:'从来没 + V + 过 + nơi chốn.',pair:'从来没……过'}
   ]},

  {n:26,zh:'发抖',py:'fādǒu',pos:'Động từ',vn:'run, run rẩy',hv:'phát đẩu',em:'🥶',lesson:1,
   explain:['Cơ thể run lên vì lạnh, sợ hãi hoặc tức giận: 冷得发抖, 吓得发抖, 气得发抖.','Là động từ không mang tân ngữ; hay làm bổ ngữ sau 得: 冻得直发抖.'],
   usage:'Hay gặp: 两腿发抖, 冷得发抖, 吓得直发抖, 声音发抖, 浑身发抖.',
   collo:['两腿发抖','冷得发抖','吓得直发抖','声音发抖'],
   ex_zh:'这么危险的地方，我不拿东西两腿都发抖。',ex_py:'Zhème wēixiǎn de dìfang, wǒ bù ná dōngxi liǎng tuǐ dōu fādǒu.',ex_vn:'Chỗ nguy hiểm thế này, tôi không cầm gì hai chân cũng đã run rồi.',
   exList:[
     {zh:'这么危险的地方，我不拿东西两腿都发抖。',py:'Zhème wēixiǎn de dìfang, wǒ bù ná dōngxi liǎng tuǐ dōu fādǒu.',vn:'Chỗ nguy hiểm thế này, tôi không cầm gì hai chân cũng đã run rồi.'},
     {zh:'外面下着大雪，小猫冻得浑身发抖。',py:'Wàimiàn xiàzhe dà xuě, xiǎomāo dòng de húnshēn fādǒu.',vn:'Bên ngoài tuyết rơi dày, con mèo nhỏ lạnh run cả người.'},
     {zh:'第一次上台演讲时，我紧张得声音都发抖了。',py:'Dì-yī cì shàng tái yǎnjiǎng shí, wǒ jǐnzhāng de shēngyīn dōu fādǒu le.',vn:'Lần đầu lên sân khấu diễn thuyết, tôi hồi hộp đến mức giọng run cả lên.'}
   ],
   colloFull:[
     {zh:'两腿发抖',py:'liǎng tuǐ fādǒu',vn:'hai chân run'},
     {zh:'冷得发抖',py:'lěng de fādǒu',vn:'lạnh run'},
     {zh:'吓得直发抖',py:'xià de zhí fādǒu',vn:'sợ run bắn'},
     {zh:'声音发抖',py:'shēngyīn fādǒu',vn:'giọng run'},
     {zh:'浑身发抖',py:'húnshēn fādǒu',vn:'run khắp người'}
   ],
   patterns:[
     {s:'Adj / V + 得 + (直) + 发抖',m:'Bổ ngữ trạng thái: run vì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé bị dọa đến run cả người.',answer:'小男孩被吓得浑身发抖。',answerPy:'Xiǎo nánhái bèi xià de húnshēn fādǒu.',
      note:'被 + V + 得 + bổ ngữ trạng thái (浑身发抖).',pair:'被'},
     {promptLang:'vi',prompt:'Vừa lên sân khấu là chân tôi run.',answer:'我一上台，腿就发抖。',answerPy:'Wǒ yí shàng tái, tuǐ jiù fādǒu.',
      note:'一 trước thanh 4 (上) đọc yí; vế sau đổi chủ ngữ (腿).',pair:'一……就……'}
   ]},

  {n:27,zh:'负重',py:'fùzhòng',pos:'Động từ',vn:'vác nặng, mang vật nặng',hv:'phụ trọng',em:'🎒',lesson:1,
   explain:['Mang, vác vật nặng trên người: 负 = mang, gánh; 重 = vật nặng. Sắc thái văn viết.','Nghĩa bóng: gánh vác trách nhiệm nặng nề — 负重前行, 忍辱负重 (nhẫn nhục gánh vác).'],
   usage:'Hay gặp: 负重前行, 负重训练, 负重跑, 负重爬山.',
   collo:['负重前行','负重训练','负重跑','负重爬山'],
   ex_zh:'再负重前行，那不是更容易摔倒吗？',ex_py:'Zài fùzhòng qiánxíng, nà bú shì gèng róngyì shuāidǎo ma?',ex_vn:'Lại còn mang nặng mà đi, thế chẳng phải càng dễ ngã hơn sao?',
   exList:[
     {zh:'再负重前行，那不是更容易摔倒吗？',py:'Zài fùzhòng qiánxíng, nà bú shì gèng róngyì shuāidǎo ma?',vn:'Lại còn mang nặng mà đi, thế chẳng phải càng dễ ngã hơn sao?'},
     {zh:'假如你感觉到了有风险，谨慎地负重前行，反而会更安全。',py:'Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán.',vn:'Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn.'},
     {zh:'士兵们每天都要进行负重训练。',py:'Shìbīngmen měi tiān dōu yào jìnxíng fùzhòng xùnliàn.',vn:'Các binh sĩ ngày nào cũng phải tập luyện mang vác nặng.'}
   ],
   colloFull:[
     {zh:'负重前行',py:'fùzhòng qiánxíng',vn:'mang nặng mà tiến bước'},
     {zh:'负重训练',py:'fùzhòng xùnliàn',vn:'tập mang vác nặng'},
     {zh:'负重跑',py:'fùzhòng pǎo',vn:'chạy mang tạ'},
     {zh:'负重爬山',py:'fùzhòng pá shān',vn:'vác nặng leo núi'},
     {zh:'忍辱负重',py:'rěnrǔ-fùzhòng',vn:'nhẫn nhục gánh vác'}
   ],
   patterns:[
     {s:'负重前行',m:'Mang nặng mà đi — nghĩa bóng: gánh trách nhiệm mà tiến lên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cẩn thận một chút, mang nặng mà đi sẽ không nguy hiểm.',answer:'只要小心一点儿，负重前行就不会有危险。',answerPy:'Zhǐyào xiǎoxīn yìdiǎnr, fùzhòng qiánxíng jiù bú huì yǒu wēixiǎn.',
      note:'只要……就……; 就 đứng sau chủ ngữ vế sau (负重前行).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy vác nặng leo núi rất mệt nhưng chúng tôi vẫn leo tới đỉnh.',answer:'虽然负重爬山很累，但是我们还是爬到了山顶。',answerPy:'Suīrán fùzhòng pá shān hěn lèi, dànshì wǒmen háishi pádàole shāndǐng.',
      note:'虽然……但是……还是……: dù khó vẫn làm được.',pair:'虽然……但是……'}
   ]},

  {n:28,zh:'摔倒',py:'shuāidǎo',pos:'Động từ',vn:'ngã, té',hv:'suất đảo',em:'🤕',lesson:1,
   explain:['Mất thăng bằng mà ngã xuống đất: 摔 = ngã, 倒 = đổ.','摔 còn có nghĩa "đánh rơi, làm vỡ": 摔碎, 摔坏. Bảng 词语搭配: 摔 + 倒/伤/碎/下去.'],
   usage:'Hay gặp: 摔倒在地, 不小心摔倒了, 容易摔倒, 差点儿摔倒. Mở rộng: 摔伤, 摔碎, 摔下去.',
   collo:['摔倒在地','容易摔倒','差点儿摔倒','不小心摔倒'],
   ex_zh:'再负重前行，那不是更容易摔倒吗？',ex_py:'Zài fùzhòng qiánxíng, nà bú shì gèng róngyì shuāidǎo ma?',ex_vn:'Lại còn mang nặng mà đi, thế chẳng phải càng dễ ngã hơn sao?',
   exList:[
     {zh:'再负重前行，那不是更容易摔倒吗？',py:'Zài fùzhòng qiánxíng, nà bú shì gèng róngyì shuāidǎo ma?',vn:'Lại còn mang nặng mà đi, thế chẳng phải càng dễ ngã hơn sao?'},
     {zh:'下雨天路滑，奶奶出门时差点儿摔倒。',py:'Xiàyǔ tiān lù huá, nǎinai chūmén shí chàdiǎnr shuāidǎo.',vn:'Trời mưa đường trơn, bà ra ngoài suýt nữa bị ngã.'},
     {zh:'他踢球时摔倒了，腿也摔伤了。',py:'Tā tī qiú shí shuāidǎo le, tuǐ yě shuāishāng le.',vn:'Cậu ấy ngã khi đá bóng, chân cũng bị thương.'}
   ],
   colloFull:[
     {zh:'摔倒在地',py:'shuāidǎo zài dì',vn:'ngã xuống đất'},
     {zh:'容易摔倒',py:'róngyì shuāidǎo',vn:'dễ ngã'},
     {zh:'差点儿摔倒',py:'chàdiǎnr shuāidǎo',vn:'suýt ngã'},
     {zh:'不小心摔倒',py:'bù xiǎoxīn shuāidǎo',vn:'sơ ý bị ngã'},
     {zh:'摔伤',py:'shuāishāng',vn:'ngã bị thương'}
   ],
   patterns:[
     {s:'……，那不是更容易摔倒吗？',m:'Câu hỏi tu từ để phản bác'},
     {s:'摔 + 倒 / 伤 / 碎 / 下去',m:'Bổ ngữ sau 摔'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đường trơn quá, đến bố tôi cũng bị ngã.',answer:'路太滑了，连我爸爸都摔倒了。',answerPy:'Lù tài huá le, lián wǒ bàba dōu shuāidǎo le.',
      note:'连……都…… nhấn mạnh người ít ai ngờ (bố).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Bà vừa ra khỏi cửa đã ngã.',answer:'奶奶一出门就摔倒了。',answerPy:'Nǎinai yì chūmén jiù shuāidǎo le.',
      note:'一 trước thanh 1 (出) đọc yì.',pair:'一……就……'}
   ]},

  {n:29,zh:'妇女',py:'fùnǚ',pos:'Danh từ',vn:'phụ nữ',hv:'phụ nữ',em:'👩',lesson:1,
   explain:['Phụ nữ đã trưởng thành nói chung: 妇女节 (ngày Phụ nữ 8/3), 妇女儿童.','Sắc thái trang trọng, hay dùng trong văn viết, tin tức; khẩu ngữ hay nói 女的, lịch sự nói 女士.'],
   usage:'Hay gặp: 一位妇女, 三八妇女节, 妇女儿童, 中年妇女, 农村妇女.',
   collo:['一位妇女','三八妇女节','妇女儿童','中年妇女'],
   ex_zh:'“那不是更容易摔倒吗？”一位妇女不解地问。',ex_py:'"Nà bú shì gèng róngyì shuāidǎo ma?" Yí wèi fùnǚ bù jiě de wèn.',ex_vn:'"Thế chẳng phải càng dễ ngã hơn sao?" một người phụ nữ khó hiểu hỏi.',
   exList:[
     {zh:'“那不是更容易摔倒吗？”一位妇女不解地问。',py:'"Nà bú shì gèng róngyì shuāidǎo ma?" Yí wèi fùnǚ bù jiě de wèn.',vn:'"Thế chẳng phải càng dễ ngã hơn sao?" một người phụ nữ khó hiểu hỏi.'},
     {zh:'三八妇女节那天，我给妈妈买了一束花。',py:'Sān-Bā Fùnǚ Jié nà tiān, wǒ gěi māma mǎile yí shù huā.',vn:'Ngày Quốc tế Phụ nữ 8/3, tôi mua tặng mẹ một bó hoa.'},
     {zh:'这个组织专门帮助农村的妇女和儿童。',py:'Zhège zǔzhī zhuānmén bāngzhù nóngcūn de fùnǚ hé értóng.',vn:'Tổ chức này chuyên giúp đỡ phụ nữ và trẻ em ở nông thôn.'}
   ],
   colloFull:[
     {zh:'一位妇女',py:'yí wèi fùnǚ',vn:'một người phụ nữ'},
     {zh:'三八妇女节',py:'Sān-Bā Fùnǚ Jié',vn:'ngày Quốc tế Phụ nữ 8/3'},
     {zh:'妇女儿童',py:'fùnǚ értóng',vn:'phụ nữ và trẻ em'},
     {zh:'中年妇女',py:'zhōngnián fùnǚ',vn:'phụ nữ trung niên'},
     {zh:'农村妇女',py:'nóngcūn fùnǚ',vn:'phụ nữ nông thôn'}
   ],
   patterns:[
     {s:'一位 + 妇女 + ……地问 / 说',m:'Giới thiệu nhân vật trong câu chuyện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món quà Ngày Phụ nữ này là tôi tự làm cho mẹ.',answer:'这份妇女节的礼物是我自己给妈妈做的。',answerPy:'Zhè fèn Fùnǚ Jié de lǐwù shì wǒ zìjǐ gěi māma zuò de.',
      note:'是……的 nhấn mạnh người làm (我自己).',pair:'是……的'},
     {promptLang:'vi',prompt:'Người phụ nữ ấy được mọi người đưa đến bệnh viện.',answer:'那位妇女被大家送到了医院。',answerPy:'Nà wèi fùnǚ bèi dàjiā sòngdàole yīyuàn.',
      note:'被 + tác nhân (大家) + V + 到 + nơi chốn.',pair:'被'}
   ]},

  {n:30,zh:'起',py:'qǐ',pos:'Lượng từ',vn:'vụ (việc)',hv:'khởi',em:'📋',lesson:1,
   explain:['Lượng từ dùng cho sự việc, sự cố, vụ việc: 一起意外 (một vụ tai nạn), 好几起交通事故.','Thường dùng cho việc xấu, bất ngờ, hay gặp trong tin tức. Đừng nhầm với 一起 (yìqǐ, cùng nhau).'],
   usage:'Số + 起 + 意外 / 事故 / 案件 / 火灾. Bảng 词语搭配: 一起 + 意外.',
   collo:['一起意外','好几起意外','一起交通事故','两起火灾'],
   ex_zh:'这里以前发生过好几起意外。',ex_py:'Zhèlǐ yǐqián fāshēngguo hǎo jǐ qǐ yìwài.',ex_vn:'Ở đây trước kia từng xảy ra mấy vụ tai nạn.',
   exList:[
     {zh:'这里以前发生过好几起意外。',py:'Zhèlǐ yǐqián fāshēngguo hǎo jǐ qǐ yìwài.',vn:'Ở đây trước kia từng xảy ra mấy vụ tai nạn.'},
     {zh:'今天早上这条路上发生了一起交通事故。',py:'Jīntiān zǎoshang zhè tiáo lù shang fāshēngle yì qǐ jiāotōng shìgù.',vn:'Sáng nay trên con đường này xảy ra một vụ tai nạn giao thông.'},
     {zh:'今年冬天，这个小区已经发生了两起火灾。',py:'Jīnnián dōngtiān, zhège xiǎoqū yǐjīng fāshēngle liǎng qǐ huǒzāi.',vn:'Mùa đông năm nay khu dân cư này đã xảy ra hai vụ cháy.'}
   ],
   colloFull:[
     {zh:'一起意外',py:'yì qǐ yìwài',vn:'một vụ tai nạn'},
     {zh:'好几起意外',py:'hǎo jǐ qǐ yìwài',vn:'mấy vụ tai nạn'},
     {zh:'一起交通事故',py:'yì qǐ jiāotōng shìgù',vn:'một vụ tai nạn giao thông'},
     {zh:'两起火灾',py:'liǎng qǐ huǒzāi',vn:'hai vụ hỏa hoạn'},
     {zh:'一起案件',py:'yì qǐ ànjiàn',vn:'một vụ án'}
   ],
   patterns:[
     {s:'发生了 + số + 起 + 意外 / 事故',m:'Thông báo sự cố'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con đường này chưa từng xảy ra vụ tai nạn nào.',answer:'这条路上从来没发生过一起事故。',answerPy:'Zhè tiáo lù shang cónglái méi fāshēngguo yì qǐ shìgù.',
      note:'从来没 + V + 过 + 一起 + N: nhấn mạnh "không một vụ nào".',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Vụ tai nạn giao thông này là xảy ra hôm qua.',answer:'这起交通事故是昨天发生的。',answerPy:'Zhè qǐ jiāotōng shìgù shì zuótiān fāshēng de.',
      note:'是……的 nhấn mạnh thời gian; 这起 = vụ này.',pair:'是……的'}
   ]},

  {n:31,zh:'丝毫',py:'sīháo',pos:'Tính từ',vn:'chút nào, tí nào, mảy may',hv:'ti hào',em:'🤏',lesson:1,
   explain:['Cực kỳ nhỏ, một chút xíu (丝, 毫 là đơn vị rất nhỏ). Thường dùng trong câu PHỦ ĐỊNH: 丝毫没有, 丝毫不…….','Tiếng Việt có "mảy may", "tơ hào": 丝毫不差 = không sai mảy may. Làm định ngữ (没有丝毫的变化) hoặc trạng ngữ (丝毫不怕).'],
   usage:'丝毫 + 没有 / 不 + V / Adj; 没有 + 丝毫 + (的) + N. Hay gặp: 丝毫不差, 丝毫没有感觉到, 没有丝毫变化.',
   collo:['丝毫没有','丝毫不怕','丝毫不差','没有丝毫变化'],
   ex_zh:'都是迷路的游客在丝毫没有感觉到压力的情况下，一不小心滚下去的。',ex_py:'Dōu shì mílù de yóukè zài sīháo méiyǒu gǎnjué dào yālì de qíngkuàng xià, yí bù xiǎoxīn gǔn xiàqu de.',ex_vn:'Đều là những du khách lạc đường, trong lúc chẳng hề cảm thấy chút áp lực nào, sơ ý một cái mà lăn xuống.',
   exList:[
     {zh:'都是迷路的游客在丝毫没有感觉到压力的情况下，一不小心滚下去的。',py:'Dōu shì mílù de yóukè zài sīháo méiyǒu gǎnjué dào yālì de qíngkuàng xià, yí bù xiǎoxīn gǔn xiàqu de.',vn:'Đều là những du khách lạc đường, trong lúc chẳng hề cảm thấy chút áp lực nào, sơ ý một cái mà lăn xuống.'},
     {zh:'这么多年过去了，他的样子丝毫没有变。',py:'Zhème duō nián guòqu le, tā de yàngzi sīháo méiyǒu biàn.',vn:'Bao năm trôi qua, dáng vẻ của ông ấy chẳng thay đổi chút nào.'},
     {zh:'面对困难，她丝毫不怕，反而越来越有信心。',py:'Miànduì kùnnan, tā sīháo bú pà, fǎn\'ér yuè lái yuè yǒu xìnxīn.',vn:'Đối mặt khó khăn, cô ấy chẳng sợ chút nào, trái lại càng lúc càng tự tin.'}
   ],
   colloFull:[
     {zh:'丝毫没有',py:'sīháo méiyǒu',vn:'không hề có chút nào'},
     {zh:'丝毫不怕',py:'sīháo bú pà',vn:'chẳng sợ chút nào'},
     {zh:'丝毫不差',py:'sīháo bú chà',vn:'không sai mảy may'},
     {zh:'没有丝毫变化',py:'méiyǒu sīháo biànhuà',vn:'không thay đổi chút nào'},
     {zh:'丝毫不在乎',py:'sīháo bú zàihu',vn:'chẳng bận tâm chút nào'}
   ],
   patterns:[
     {s:'丝毫 + 不 / 没有 + ……',m:'Phủ định tuyệt đối'},
     {s:'没有 + 丝毫 + (的) + N',m:'Không có mảy may …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy thi không tốt nhưng cậu ấy chẳng buồn chút nào.',answer:'虽然考试没考好，但是他丝毫不难过。',answerPy:'Suīrán kǎoshì méi kǎohǎo, dànshì tā sīháo bù nánguò.',
      note:'丝毫 + 不 + tính từ; 丝毫 luôn đi với phủ định.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Đến một chút áp lực anh ấy cũng không cảm thấy.',answer:'他连丝毫的压力都没感觉到。',answerPy:'Tā lián sīháo de yālì dōu méi gǎnjué dào.',
      note:'连 + (丝毫的 + N) + 都 + 没 + V: nhấn mạnh phủ định tuyệt đối.',pair:'连……都……'}
   ]},

  {n:32,zh:'滚',py:'gǔn',pos:'Động từ',vn:'lăn, lộn',hv:'cổn',em:'🎳',lesson:1,
   explain:['Lăn (vật tròn hoặc người) trên mặt đất, lăn xuống dốc: 球滚走了, 滚下去.','Khẩu ngữ thô lỗ: 滚! = cút đi! — không nên dùng. Nghĩa khác: nước sôi sùng sục (水滚了).'],
   usage:'Hay gặp: 滚下去, 滚下山, 滚到……, 滚来滚去. Rất hay đi với bổ ngữ xu hướng / nơi chốn.',
   collo:['滚下去','滚下山','滚到床下','滚来滚去'],
   ex_zh:'这里以前发生过好几起意外，都是游客一不小心滚下去的。',ex_py:'Zhèlǐ yǐqián fāshēngguo hǎo jǐ qǐ yìwài, dōu shì yóukè yí bù xiǎoxīn gǔn xiàqu de.',ex_vn:'Ở đây trước kia từng xảy ra mấy vụ tai nạn, đều là du khách sơ ý mà lăn xuống.',
   exList:[
     {zh:'这里以前发生过好几起意外，都是游客一不小心滚下去的。',py:'Zhèlǐ yǐqián fāshēngguo hǎo jǐ qǐ yìwài, dōu shì yóukè yí bù xiǎoxīn gǔn xiàqu de.',vn:'Ở đây trước kia từng xảy ra mấy vụ tai nạn, đều là du khách sơ ý mà lăn xuống.'},
     {zh:'我说口红哪儿去了，怎么滚到电视柜下面去了。',py:'Wǒ shuō kǒuhóng nǎr qù le, zěnme gǔndào diànshìguì xiàmiàn qù le.',vn:'Thảo nào không thấy thỏi son đâu, sao lại lăn vào tận dưới kệ tivi thế này.'},
     {zh:'足球滚到马路上了，你快去捡回来。',py:'Zúqiú gǔndào mǎlù shang le, nǐ kuài qù jiǎn huílai.',vn:'Quả bóng lăn ra đường rồi, cậu mau đi nhặt về.'}
   ],
   colloFull:[
     {zh:'滚下去',py:'gǔn xiàqu',vn:'lăn xuống'},
     {zh:'滚下山',py:'gǔn xià shān',vn:'lăn xuống núi'},
     {zh:'滚到床下',py:'gǔndào chuáng xià',vn:'lăn vào gầm giường'},
     {zh:'滚来滚去',py:'gǔn lái gǔn qù',vn:'lăn qua lăn lại'},
     {zh:'滚到马路上',py:'gǔndào mǎlù shang',vn:'lăn ra đường'}
   ],
   patterns:[
     {s:'滚 + 下去 / 到 + nơi chốn',m:'Bổ ngữ xu hướng / nơi chốn sau 滚'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quả bóng vừa rơi xuống đất đã lăn vào gầm giường.',answer:'球一掉在地上，就滚到床下去了。',answerPy:'Qiú yí diào zài dì shang, jiù gǔndào chuáng xià qù le.',
      note:'一 trước thanh 4 (掉) đọc yí; 滚到 + nơi chốn + 去.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Thỏi son là lăn vào dưới kệ tivi.',answer:'口红是滚到电视柜下面去的。',answerPy:'Kǒuhóng shì gǔndào diànshìguì xiàmiàn qù de.',
      note:'是……的 nhấn mạnh CÁCH / nơi việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:33,zh:'风险',py:'fēngxiǎn',pos:'Danh từ',vn:'rủi ro, sự mạo hiểm, sự nguy hiểm',hv:'phong hiểm',em:'🎲',lesson:1,
   explain:['Khả năng xảy ra nguy hiểm, thiệt hại: 有风险, 冒风险 (chấp nhận rủi ro), 风险很大.','Khác 危险 (nguy hiểm — tình trạng nguy hiểm trước mắt, là tính từ/danh từ): 风险 là KHẢ NĂNG thiệt hại, hay dùng trong kinh doanh, đầu tư.'],
   usage:'Hay gặp: 冒风险, 有风险, 风险很大, 考虑到风险, 降低风险, 投资风险. Bài tập 3: 冒 + 风险.',
   collo:['冒风险','有风险','降低风险','投资风险'],
   ex_zh:'假如你感觉到了有风险，谨慎地负重前行，反而会更安全。',ex_py:'Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán.',ex_vn:'Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn.',
   exList:[
     {zh:'假如你感觉到了有风险，谨慎地负重前行，反而会更安全。',py:'Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán.',vn:'Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn.'},
     {zh:'你决定在海外投资，有没有考虑到风险？',py:'Nǐ juédìng zài hǎiwài tóuzī, yǒu méiyǒu kǎolǜ dào fēngxiǎn?',vn:'Anh quyết định đầu tư ở nước ngoài, đã tính đến rủi ro chưa?'},
     {zh:'做生意总是有风险的，不能只想着赚钱。',py:'Zuò shēngyi zǒngshì yǒu fēngxiǎn de, bù néng zhǐ xiǎngzhe zhuàn qián.',vn:'Làm ăn luôn có rủi ro, không thể chỉ nghĩ đến kiếm tiền.'}
   ],
   colloFull:[
     {zh:'冒风险',py:'mào fēngxiǎn',vn:'chấp nhận rủi ro'},
     {zh:'有风险',py:'yǒu fēngxiǎn',vn:'có rủi ro'},
     {zh:'降低风险',py:'jiàngdī fēngxiǎn',vn:'giảm rủi ro'},
     {zh:'投资风险',py:'tóuzī fēngxiǎn',vn:'rủi ro đầu tư'},
     {zh:'风险很大',py:'fēngxiǎn hěn dà',vn:'rủi ro rất lớn'}
   ],
   patterns:[
     {s:'冒着……的风险 + V',m:'Chấp nhận rủi ro để làm gì'},
     {s:'有没有考虑到风险？',m:'Nhắc người khác cân nhắc rủi ro'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đầu tư có rủi ro nhưng anh ấy vẫn quyết định thử.',answer:'虽然投资有风险，但是他还是决定试一试。',answerPy:'Suīrán tóuzī yǒu fēngxiǎn, dànshì tā háishi juédìng shì yi shì.',
      note:'虽然……但是……还是……; 试一试: 一 ở giữa động từ lặp đọc nhẹ.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần tính trước rủi ro thì sẽ không hoảng.',answer:'只要提前考虑到风险，就不会慌张。',answerPy:'Zhǐyào tíqián kǎolǜ dào fēngxiǎn, jiù bú huì huāngzhāng.',
      note:'只要……就……; ôn luôn 慌张 của bài.',pair:'只要……就……'}
   ]},

  {n:34,zh:'谨慎',py:'jǐnshèn',pos:'Tính từ',vn:'cẩn thận, thận trọng',hv:'cẩn thận',em:'🧐',lesson:1,
   explain:['Rất chú ý đến lời nói, việc làm để tránh sai sót, bất lợi: 做事谨慎, 谨慎对待.','So với 小心 (khẩu ngữ, cẩn thận tránh nguy hiểm cụ thể): 谨慎 trang trọng hơn, nhấn mạnh suy nghĩ kỹ trước khi làm; hay đi với việc lớn (投资, 选择, 决定).'],
   usage:'Bảng 词语搭配: 谨慎地 + 对待/处理/工作/从事/打开. Hay gặp: 做事谨慎, 说话谨慎, 谨慎驾驶.',
   collo:['谨慎地对待','谨慎地处理','做事谨慎','说话谨慎'],
   ex_zh:'假如你感觉到了有风险，谨慎地负重前行，反而会更安全。',ex_py:'Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán.',ex_vn:'Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn.',
   exList:[
     {zh:'假如你感觉到了有风险，谨慎地负重前行，反而会更安全。',py:'Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán.',vn:'Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn.'},
     {zh:'这毕竟是高考择校，我们必须谨慎对待。',py:'Zhè bìjìng shì gāokǎo zé xiào, wǒmen bìxū jǐnshèn duìdài.',vn:'Dù sao đây cũng là chọn trường thi đại học, chúng ta phải thận trọng.'},
     {zh:'爸爸做事一向很谨慎，从来不乱花钱。',py:'Bàba zuòshì yíxiàng hěn jǐnshèn, cónglái bú luàn huā qián.',vn:'Bố làm việc xưa nay rất thận trọng, chưa bao giờ tiêu tiền bừa bãi.'}
   ],
   colloFull:[
     {zh:'谨慎地对待',py:'jǐnshèn de duìdài',vn:'đối xử thận trọng'},
     {zh:'谨慎地处理',py:'jǐnshèn de chǔlǐ',vn:'xử lý thận trọng'},
     {zh:'做事谨慎',py:'zuòshì jǐnshèn',vn:'làm việc cẩn thận'},
     {zh:'说话谨慎',py:'shuōhuà jǐnshèn',vn:'ăn nói thận trọng'},
     {zh:'谨慎驾驶',py:'jǐnshèn jiàshǐ',vn:'lái xe cẩn thận'}
   ],
   patterns:[
     {s:'谨慎(地) + 对待 / 处理 / 选择',m:'Làm trạng ngữ'},
     {s:'做事 / 说话 + 谨慎',m:'Làm vị ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin hãy xử lý việc này một cách thận trọng.',answer:'请把这件事谨慎地处理好。',answerPy:'Qǐng bǎ zhè jiàn shì jǐnshèn de chǔlǐ hǎo.',
      note:'把 + tân ngữ + trạng ngữ (谨慎地) + V + bổ ngữ 好.',pair:'把'},
     {promptLang:'vi',prompt:'Bố tôi làm việc càng ngày càng thận trọng.',answer:'爸爸做事越来越谨慎了。',answerPy:'Bàba zuòshì yuè lái yuè jǐnshèn le.',
      note:'越来越 + tính từ; 了 cuối câu.',pair:'越来越'}
   ]},

  {n:35,zh:'效应',py:'xiàoyìng',pos:'Danh từ',vn:'tác động, ảnh hưởng, hiệu ứng',hv:'hiệu ứng',em:'🔁',lesson:1,
   explain:['Phản ứng, kết quả do một sự việc, hiện tượng gây ra: 压力效应, 名人效应, 温室效应.','Trùng khít tiếng Việt "hiệu ứng"; hay dùng trong khoa học, kinh tế, tâm lý học.'],
   usage:'Hay gặp: 压力效应, 温室效应, 名人效应, 产生效应, 蝴蝶效应.',
   collo:['压力效应','温室效应','名人效应','产生效应'],
   ex_zh:'这就是“压力效应”。',ex_py:'Zhè jiù shì "yālì xiàoyìng".',ex_vn:'Đây chính là "hiệu ứng áp lực".',
   exList:[
     {zh:'这就是“压力效应”。',py:'Zhè jiù shì "yālì xiàoyìng".',vn:'Đây chính là "hiệu ứng áp lực".'},
     {zh:'温室效应让地球的气温越来越高。',py:'Wēnshì xiàoyìng ràng dìqiú de qìwēn yuè lái yuè gāo.',vn:'Hiệu ứng nhà kính khiến nhiệt độ trái đất ngày càng cao.'},
     {zh:'很多商家请明星做广告，就是想利用名人效应。',py:'Hěn duō shāngjiā qǐng míngxīng zuò guǎnggào, jiù shì xiǎng lìyòng míngrén xiàoyìng.',vn:'Nhiều doanh nghiệp mời ngôi sao quảng cáo chính là muốn tận dụng hiệu ứng người nổi tiếng.'}
   ],
   colloFull:[
     {zh:'压力效应',py:'yālì xiàoyìng',vn:'hiệu ứng áp lực'},
     {zh:'温室效应',py:'wēnshì xiàoyìng',vn:'hiệu ứng nhà kính'},
     {zh:'名人效应',py:'míngrén xiàoyìng',vn:'hiệu ứng người nổi tiếng'},
     {zh:'产生效应',py:'chǎnshēng xiàoyìng',vn:'tạo ra hiệu ứng'},
     {zh:'蝴蝶效应',py:'húdié xiàoyìng',vn:'hiệu ứng cánh bướm'}
   ],
   patterns:[
     {s:'这就是“……效应”',m:'Gọi tên hiện tượng để tổng kết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do hiệu ứng nhà kính, mùa hè càng ngày càng nóng.',answer:'由于温室效应，夏天越来越热了。',answerPy:'Yóuyú wēnshì xiàoyìng, xiàtiān yuè lái yuè rè le.',
      note:'由于 + nguyên nhân; 越来越 + Adj + 了.',pair:'越来越'},
     {promptLang:'vi',prompt:'Hiệu ứng này là do một nhà tâm lý học phát hiện.',answer:'这个效应是一位心理学家发现的。',answerPy:'Zhège xiàoyìng shì yí wèi xīnlǐxuéjiā fāxiàn de.',
      note:'是……的 nhấn mạnh người phát hiện.',pair:'是……的'}
   ]},

  {n:36,zh:'胸',py:'xiōng',pos:'Danh từ',vn:'ngực, lòng',hv:'hung',em:'🫁',lesson:1,
   explain:['Ngực (phần thân trước, từ cổ đến bụng): 胸口, 挺胸 (ưỡn ngực).','Nghĩa bóng: tấm lòng, tâm tư — 胸怀 (mang trong lòng; tấm lòng), 心胸开阔 (lòng dạ rộng rãi).'],
   usage:'Hay gặp: 胸口, 挺胸抬头, 胸怀理想 (mang lý tưởng trong lòng), 心胸开阔.',
   collo:['胸口','挺胸抬头','胸怀理想','心胸开阔'],
   ex_zh:'那些胸怀理想、肩上有责任感的人，才能承受住压力。',ex_py:'Nàxiē xiōnghuái lǐxiǎng, jiān shang yǒu zérèngǎn de rén, cái néng chéngshòu zhù yālì.',ex_vn:'Những người mang lý tưởng trong lòng, có tinh thần trách nhiệm trên vai, mới chịu đựng được áp lực.',
   exList:[
     {zh:'那些胸怀理想、肩上有责任感的人，才能承受住压力。',py:'Nàxiē xiōnghuái lǐxiǎng, jiān shang yǒu zérèngǎn de rén, cái néng chéngshòu zhù yālì.',vn:'Những người mang lý tưởng trong lòng, có tinh thần trách nhiệm trên vai, mới chịu đựng được áp lực.'},
     {zh:'跑完步以后，我觉得胸口有点儿疼。',py:'Pǎowán bù yǐhòu, wǒ juéde xiōngkǒu yǒudiǎnr téng.',vn:'Chạy bộ xong, tôi thấy ngực hơi đau.'},
     {zh:'站的时候要挺胸抬头，别总低着头看手机。',py:'Zhàn de shíhou yào tǐng xiōng tái tóu, bié zǒng dīzhe tóu kàn shǒujī.',vn:'Khi đứng phải ưỡn ngực ngẩng đầu, đừng lúc nào cũng cúi đầu xem điện thoại.'}
   ],
   colloFull:[
     {zh:'胸口',py:'xiōngkǒu',vn:'giữa ngực'},
     {zh:'挺胸抬头',py:'tǐng xiōng tái tóu',vn:'ưỡn ngực ngẩng đầu'},
     {zh:'胸怀理想',py:'xiōnghuái lǐxiǎng',vn:'mang lý tưởng trong lòng'},
     {zh:'心胸开阔',py:'xīnxiōng kāikuò',vn:'lòng dạ rộng rãi'},
     {zh:'胸前',py:'xiōng qián',vn:'trước ngực'}
   ],
   patterns:[
     {s:'胸怀 + 理想 / 大志',m:'Văn viết: mang hoài bão trong lòng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa chạy xong là ngực tôi đau.',answer:'我一跑完步，胸口就疼。',answerPy:'Wǒ yì pǎowán bù, xiōngkǒu jiù téng.',
      note:'一 trước thanh 3 (跑) đọc yì; vế sau đổi chủ ngữ (胸口).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Người lòng dạ rộng rãi không những ít phiền muộn mà cũng dễ kết bạn.',answer:'心胸开阔的人不仅烦恼少，也容易交朋友。',answerPy:'Xīnxiōng kāikuò de rén bùjǐn fánnǎo shǎo, yě róngyì jiāo péngyou.',
      note:'不仅……也…… cùng chủ ngữ 心胸开阔的人.',pair:'不仅……也……'}
   ]},

  {n:37,zh:'承受',py:'chéngshòu',pos:'Động từ',vn:'chịu đựng, chấp nhận',hv:'thừa thụ',em:'🏋️',lesson:1,
   explain:['Chịu đựng, gánh chịu (áp lực, trọng lượng, đau khổ, thử thách): 承受压力, 承受不了.','Khác 接受 (tiếp nhận, nhận lấy — quà, ý kiến, lời mời): 承受 nhấn mạnh CHỊU ĐỰNG điều nặng nề. Bài tập 2: 不敢接受礼物, không nói 承受礼物.'],
   usage:'Bảng 词语搭配: 承受 + 压力/重量/痛苦/寂寞/挑战; 承受 + 住/不起/得了.',
   collo:['承受压力','承受住','承受不了','承受痛苦'],
   ex_zh:'那些胸怀理想、肩上有责任感的人，才能承受住压力。',ex_py:'Nàxiē xiōnghuái lǐxiǎng, jiān shang yǒu zérèngǎn de rén, cái néng chéngshòu zhù yālì.',ex_vn:'Những người mang lý tưởng trong lòng, có tinh thần trách nhiệm trên vai, mới chịu đựng được áp lực.',
   exList:[
     {zh:'那些胸怀理想、肩上有责任感的人，才能承受住压力。',py:'Nàxiē xiōnghuái lǐxiǎng, jiān shang yǒu zérèngǎn de rén, cái néng chéngshòu zhù yālì.',vn:'Những người mang lý tưởng trong lòng, có tinh thần trách nhiệm trên vai, mới chịu đựng được áp lực.'},
     {zh:'大的是好，就是这个价格我有点儿承受不了。',py:'Dà de shì hǎo, jiùshì zhège jiàgé wǒ yǒudiǎnr chéngshòu bu liǎo.',vn:'Căn to thì tốt thật, chỉ là giá này tôi hơi không kham nổi.'},
     {zh:'高三学生每天都要承受很大的学习压力。',py:'Gāo-sān xuésheng měi tiān dōu yào chéngshòu hěn dà de xuéxí yālì.',vn:'Học sinh lớp 12 ngày nào cũng phải chịu áp lực học tập rất lớn.'}
   ],
   colloFull:[
     {zh:'承受压力',py:'chéngshòu yālì',vn:'chịu áp lực'},
     {zh:'承受住',py:'chéngshòu zhù',vn:'chịu đựng được'},
     {zh:'承受不了',py:'chéngshòu bu liǎo',vn:'không chịu nổi'},
     {zh:'承受痛苦',py:'chéngshòu tòngkǔ',vn:'chịu đau khổ'},
     {zh:'承受重量',py:'chéngshòu zhòngliàng',vn:'chịu trọng lượng'}
   ],
   patterns:[
     {s:'承受 + 住 / 不起 / 得了 / 不了',m:'Bổ ngữ khả năng: chịu được hay không'},
     {s:'承受 + 压力 / 痛苦 / 挑战',m:'Tân ngữ là điều nặng nề'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Áp lực học tập càng ngày càng lớn, có lúc tôi thật sự không chịu nổi.',answer:'学习压力越来越大，有时候我真的承受不了。',answerPy:'Xuéxí yālì yuè lái yuè dà, yǒu shíhou wǒ zhēn de chéngshòu bu liǎo.',
      note:'越来越 + Adj; 承受不了 là bổ ngữ khả năng phủ định.',pair:'越来越'},
     {promptLang:'vi',prompt:'Chỉ cần có lý tưởng thì có thể chịu đựng được áp lực.',answer:'只要有理想，就能承受住压力。',answerPy:'Zhǐyào yǒu lǐxiǎng, jiù néng chéngshòu zhù yālì.',
      note:'只要……就……; 承受住 = chịu đựng được (bổ ngữ kết quả 住).',pair:'只要……就……'}
   ]},

  {n:38,zh:'和尚',py:'héshang',pos:'Danh từ',vn:'hòa thượng, nhà sư',hv:'hòa thượng',em:'🧘',lesson:1,
   explain:['Nhà sư (nam) đạo Phật. Âm tiết sau đọc nhẹ: héshang.','Tục ngữ 做一天和尚撞一天钟: làm hòa thượng ngày nào gõ chuông ngày ấy — làm việc cầm chừng, qua loa cho xong, không có chí hướng.'],
   usage:'Hay gặp: 老和尚, 小和尚, 做一天和尚撞一天钟, 三个和尚没水喝.',
   collo:['老和尚','小和尚','做一天和尚撞一天钟','三个和尚没水喝'],
   ex_zh:'而那些没有理想，没有一点压力，做一天和尚撞一天钟的人，就像一艘风暴中的空船。',ex_py:'Ér nàxiē méiyǒu lǐxiǎng, méiyǒu yìdiǎn yālì, zuò yì tiān héshang zhuàng yì tiān zhōng de rén, jiù xiàng yì sōu fēngbào zhōng de kōngchuán.',ex_vn:'Còn những người không có lý tưởng, không chút áp lực, làm ngày nào hay ngày ấy, thì giống như con tàu rỗng giữa cơn bão.',
   exList:[
     {zh:'而那些没有理想，没有一点压力，做一天和尚撞一天钟的人，就像一艘风暴中的空船。',py:'Ér nàxiē méiyǒu lǐxiǎng, méiyǒu yìdiǎn yālì, zuò yì tiān héshang zhuàng yì tiān zhōng de rén, jiù xiàng yì sōu fēngbào zhōng de kōngchuán.',vn:'Còn những người không có lý tưởng, không chút áp lực, làm ngày nào hay ngày ấy, thì giống như con tàu rỗng giữa cơn bão.'},
     {zh:'山上的寺庙里住着一个老和尚和一个小和尚。',py:'Shān shang de sìmiào li zhùzhe yí ge lǎo héshang hé yí ge xiǎo héshang.',vn:'Trong ngôi chùa trên núi có một lão hòa thượng và một chú tiểu.'},
     {zh:'一个和尚挑水喝，三个和尚没水喝——人多了反而没人愿意干活。',py:'Yí ge héshang tiāo shuǐ hē, sān ge héshang méi shuǐ hē——rén duō le fǎn\'ér méi rén yuànyì gàn huó.',vn:'Một sư gánh nước uống, ba sư không có nước uống — người đông trái lại chẳng ai chịu làm.'}
   ],
   colloFull:[
     {zh:'老和尚',py:'lǎo héshang',vn:'lão hòa thượng'},
     {zh:'小和尚',py:'xiǎo héshang',vn:'chú tiểu'},
     {zh:'做一天和尚撞一天钟',py:'zuò yì tiān héshang zhuàng yì tiān zhōng',vn:'làm ngày nào hay ngày ấy (làm cầm chừng)'},
     {zh:'三个和尚没水喝',py:'sān ge héshang méi shuǐ hē',vn:'ba sư không có nước uống (đông người đùn đẩy)'},
     {zh:'当和尚',py:'dāng héshang',vn:'đi tu'}
   ],
   patterns:[
     {s:'做一天和尚撞一天钟',m:'Phê phán thái độ làm việc cầm chừng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta làm việc cầm chừng, đến ông chủ cũng không hài lòng.',answer:'他做一天和尚撞一天钟，连老板都不满意。',answerPy:'Tā zuò yì tiān héshang zhuàng yì tiān zhōng, lián lǎobǎn dōu bù mǎnyì.',
      note:'一天: 一 trước thanh 1 (天) đọc yì; 连……都…… nhấn mạnh.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tôi chưa từng gặp hòa thượng bao giờ.',answer:'我从来没见过和尚。',answerPy:'Wǒ cónglái méi jiànguo héshang.',
      note:'从来没 + V + 过; 和尚 đọc nhẹ âm sau.',pair:'从来没……过'}
   ]},

  {n:39,zh:'钟',py:'zhōng',pos:'Danh từ',vn:'chuông',hv:'chung',em:'🔔',lesson:1,
   explain:['Chuông: vật bằng kim loại, gõ vào phát ra tiếng — 撞钟 (đánh chuông chùa), 敲钟, 钟声.','Còn là đồng hồ (treo tường, để bàn): 闹钟 (đồng hồ báo thức); và chỉ giờ, phút: 三点钟, 十分钟.'],
   usage:'Chuông: 撞钟, 敲钟, 钟声. Đồng hồ: 闹钟, 挂钟. Thời gian: 几点钟, 五分钟.',
   collo:['撞钟','钟声','闹钟','敲钟'],
   ex_zh:'做一天和尚撞一天钟的人，就像一艘风暴中的空船。',ex_py:'Zuò yì tiān héshang zhuàng yì tiān zhōng de rén, jiù xiàng yì sōu fēngbào zhōng de kōngchuán.',ex_vn:'Người làm ngày nào hay ngày ấy giống như con tàu rỗng giữa cơn bão.',
   exList:[
     {zh:'做一天和尚撞一天钟的人，就像一艘风暴中的空船。',py:'Zuò yì tiān héshang zhuàng yì tiān zhōng de rén, jiù xiàng yì sōu fēngbào zhōng de kōngchuán.',vn:'Người làm ngày nào hay ngày ấy giống như con tàu rỗng giữa cơn bão.'},
     {zh:'新年的钟声响起来了，大家都高兴地欢呼起来。',py:'Xīnnián de zhōngshēng xiǎng qǐlai le, dàjiā dōu gāoxìng de huānhū qǐlai.',vn:'Tiếng chuông năm mới vang lên, mọi người vui mừng reo hò.'},
     {zh:'我每天早上都被闹钟吵醒。',py:'Wǒ měi tiān zǎoshang dōu bèi nàozhōng chǎoxǐng.',vn:'Sáng nào tôi cũng bị đồng hồ báo thức đánh thức.'}
   ],
   colloFull:[
     {zh:'撞钟',py:'zhuàng zhōng',vn:'đánh chuông'},
     {zh:'钟声',py:'zhōngshēng',vn:'tiếng chuông'},
     {zh:'闹钟',py:'nàozhōng',vn:'đồng hồ báo thức'},
     {zh:'敲钟',py:'qiāo zhōng',vn:'gõ chuông'},
     {zh:'十分钟',py:'shí fēnzhōng',vn:'mười phút'}
   ],
   patterns:[
     {s:'撞 / 敲 + 钟',m:'Động từ đi với "chuông"'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe tiếng chuông, các bạn học sinh đã chạy ra sân.',answer:'一听到钟声，同学们就跑到了操场上。',answerPy:'Yì tīngdào zhōngshēng, tóngxuémen jiù pǎodàole cāochǎng shang.',
      note:'Chủ ngữ 同学们 đứng trước 就; 一 trước thanh 1 đọc yì.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tôi bị đồng hồ báo thức đánh thức.',answer:'我被闹钟吵醒了。',answerPy:'Wǒ bèi nàozhōng chǎoxǐng le.',
      note:'被 + tác nhân (闹钟) + V + bổ ngữ kết quả 醒.',pair:'被'}
   ]},

  {n:40,zh:'彻底',py:'chèdǐ',pos:'Tính từ',vn:'triệt để, hoàn toàn',hv:'triệt để',em:'💯',lesson:1,
   explain:['Đến tận cùng, hoàn toàn, không còn sót: 彻 = xuyên suốt, 底 = đáy.','Khác 完全 (đầy đủ, trọn vẹn về mức độ, phạm vi: 完全同意): 彻底 nhấn mạnh làm đến cùng, hay đi với động từ thay đổi / giải quyết: 彻底改变, 彻底解决.'],
   usage:'Bảng 词语搭配: 彻底 + 放弃/检查/改正/改变/解决. Làm bổ ngữ: 好得不彻底; làm vị ngữ: 很彻底.',
   collo:['彻底改变','彻底解决','彻底放弃','彻底检查'],
   ex_zh:'往往一场人生的狂风巨浪便会把他们彻底地打翻在地。',ex_py:'Wǎngwǎng yì chǎng rénshēng de kuángfēng jùlàng biàn huì bǎ tāmen chèdǐ de dǎfān zài dì.',ex_vn:'Thường thì chỉ một trận cuồng phong sóng dữ của cuộc đời là đủ quật ngã họ hoàn toàn.',
   exList:[
     {zh:'往往一场人生的狂风巨浪便会把他们彻底地打翻在地。',py:'Wǎngwǎng yì chǎng rénshēng de kuángfēng jùlàng biàn huì bǎ tāmen chèdǐ de dǎfān zài dì.',vn:'Thường thì chỉ một trận cuồng phong sóng dữ của cuộc đời là đủ quật ngã họ hoàn toàn.'},
     {zh:'一个偶然的机会彻底改变了他的命运。',py:'Yí ge ǒurán de jīhuì chèdǐ gǎibiànle tā de mìngyùn.',vn:'Một cơ hội tình cờ đã thay đổi hoàn toàn số phận của anh ấy.'},
     {zh:'你的病好得不彻底，还应该再休息几天。',py:'Nǐ de bìng hǎo de bú chèdǐ, hái yīnggāi zài xiūxi jǐ tiān.',vn:'Bệnh của cậu chưa khỏi hẳn, còn nên nghỉ thêm vài ngày.'}
   ],
   colloFull:[
     {zh:'彻底改变',py:'chèdǐ gǎibiàn',vn:'thay đổi hoàn toàn'},
     {zh:'彻底解决',py:'chèdǐ jiějué',vn:'giải quyết triệt để'},
     {zh:'彻底放弃',py:'chèdǐ fàngqì',vn:'từ bỏ hoàn toàn'},
     {zh:'彻底检查',py:'chèdǐ jiǎnchá',vn:'kiểm tra kỹ toàn bộ'},
     {zh:'不彻底',py:'bú chèdǐ',vn:'không triệt để'}
   ],
   patterns:[
     {s:'彻底(地) + 改变 / 解决 / 放弃',m:'Làm trạng ngữ: làm đến cùng'},
     {s:'V + 得 + (不) + 彻底',m:'Làm bổ ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đã sửa bỏ hoàn toàn thói quen xấu.',answer:'他把坏习惯彻底改掉了。',answerPy:'Tā bǎ huài xíguàn chèdǐ gǎidiào le.',
      note:'把 + tân ngữ + 彻底 (trạng ngữ) + V + bổ ngữ 掉.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần kiểm tra kỹ toàn bộ một lượt là có thể tìm ra vấn đề.',answer:'只要彻底检查一遍，就能找到问题。',answerPy:'Zhǐyào chèdǐ jiǎnchá yí biàn, jiù néng zhǎodào wèntí.',
      note:'只要……就……; 一遍 đọc yí biàn.',pair:'只要……就……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 25-1), 8 đoạn như sách
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 给自己加满水',
  preQuiz:[
    {q:'老船长的船是在什么时候遇到风浪的？',opts:['出发的时候','返航的时候','到港以后'],ans:1},
    {q:'遇到风浪时，水手们怎么样？',opts:['很慌张，不知道怎么办','很冷静','马上跳进了海里'],ans:0},
    {q:'老船长命令水手们做什么？',opts:['把货物扔进海里','马上开回港口','打开货舱往里面放水'],ans:2},
    {q:'年轻的水手为什么骂船长？',opts:['他觉得放水会让船沉得更快','他想早点儿回家','船长不让他休息'],ans:0},
    {q:'货舱里的水位升高以后，船怎么样了？',opts:['很快就沉了','渐渐取得了平衡','被风浪打翻了'],ans:1},
    {q:'根据船长的话，船在什么时候最危险？',opts:['有几万吨重的时候','有一定重量的时候','空的时候'],ans:2},
    {q:'“鬼谷”是一段什么样的路？',opts:['又宽又平的路','山路很窄，两边是万丈深渊','游客最喜欢的路'],ans:1},
    {q:'导游们带队经过“鬼谷”时，要求游客做什么？',opts:['背点或者拿点东西','手拉着手走','闭上眼睛走'],ans:0},
    {q:'那位妇女为什么不理解导游的要求？',opts:['她不想花钱','她害怕导游','她觉得负重更容易摔倒'],ans:2},
    {q:'以前在这里出事的是什么人？',opts:['背着东西的当地人','没有感觉到压力的游客','导游'],ans:1},
    {q:'当地人每天背着东西走这条路，结果怎么样？',opts:['从来没人出事','常常摔倒','不敢再走了'],ans:0},
    {q:'作者认为，什么样的人才能承受住压力？',opts:['没有一点压力的人','做一天和尚撞一天钟的人','胸怀理想、有责任感的人'],ans:2},
    {q:'课文中“风暴中的空船”比喻什么样的人？',opts:['没有理想、没有压力的人','经验丰富的人','喜欢旅游的人'],ans:0}
  ],
  lines:[
    {sp:0,zh:'有一位经验丰富的老船长，一次返航中，天气恶劣，他们的船遇到了可怕的巨大风浪。正当水手们慌张得不知如何是好时，老船长命令水手们立刻打开货舱，使劲儿朝里面放水。',
     py:'Yǒu yí wèi jīngyàn fēngfù de lǎo chuánzhǎng, yí cì fǎnháng zhōng, tiānqì èliè, tāmen de chuán yùdàole kěpà de jùdà fēnglàng. Zhèng dāng shuǐshǒumen huāngzhāng de bù zhī rúhé shì hǎo shí, lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.',
     vn:'Có một ông thuyền trưởng già giàu kinh nghiệm. Một lần trên đường trở về, thời tiết xấu, tàu của họ gặp phải sóng gió khổng lồ đáng sợ. Đúng lúc các thủy thủ luống cuống không biết phải làm sao, ông thuyền trưởng già ra lệnh cho họ lập tức mở khoang hàng, ra sức xả nước vào trong.'},
    {sp:0,zh:'“船长简直是疯了，这样做只会增加船的压力，船就会下沉得更快，这不是找死吗？”一个年轻的水手骂道。',
     py:'"Chuánzhǎng jiǎnzhí shì fēng le, zhèyàng zuò zhǐ huì zēngjiā chuán de yālì, chuán jiù huì xiàchén de gèng kuài, zhè bú shì zhǎo sǐ ma?" Yí ge niánqīng de shuǐshǒu mà dào.',
     vn:'"Thuyền trưởng đúng là điên rồi, làm thế chỉ tăng thêm sức ép cho tàu, tàu sẽ chìm nhanh hơn, thế chẳng phải là tự tìm đường chết sao?" một thủy thủ trẻ chửi.'},
    {sp:0,zh:'看着船长严肃的表情，水手们还是照做了。随着货舱里的水位越升越高，船一点一点地下沉，狂风巨浪依然猛烈，对船的威胁却减小了，船也渐渐取得了平衡。',
     py:'Kànzhe chuánzhǎng yánsù de biǎoqíng, shuǐshǒumen háishi zhàozuò le. Suízhe huòcāng li de shuǐwèi yuè shēng yuè gāo, chuán yìdiǎn yìdiǎn de xiàchén, kuángfēng jùlàng yīrán měngliè, duì chuán de wēixié què jiǎnxiǎo le, chuán yě jiànjiàn qǔdéle pínghéng.',
     vn:'Nhìn vẻ mặt nghiêm nghị của thuyền trưởng, các thủy thủ vẫn làm theo. Mực nước trong khoang hàng càng lúc càng dâng cao, con tàu chìm xuống từng chút một; gió dữ sóng lớn vẫn dữ dội, nhưng mối đe dọa với con tàu lại giảm đi, con tàu cũng dần lấy lại được thăng bằng.'},
    {sp:0,zh:'船长望着松了一口气的水手们说：“几万吨的钢铁巨轮很少有被打翻的，被打翻的常常是根基很轻的小船。船在有一定重量的时候是最安全的，在空的时候则是最危险的。”',
     py:'Chuánzhǎng wàngzhe sōngle yì kǒu qì de shuǐshǒumen shuō: "Jǐ wàn dūn de gāngtiě jùlún hěn shǎo yǒu bèi dǎfān de, bèi dǎfān de chángcháng shì gēnjī hěn qīng de xiǎochuán. Chuán zài yǒu yídìng zhòngliàng de shíhou shì zuì ānquán de, zài kōng de shíhou zé shì zuì wēixiǎn de."',
     vn:'Thuyền trưởng nhìn các thủy thủ vừa thở phào nhẹ nhõm và nói: "Những con tàu thép khổng lồ nặng mấy vạn tấn rất ít khi bị lật; cái bị lật thường là những chiếc thuyền nhỏ có phần đáy rất nhẹ. Con tàu khi có một trọng lượng nhất định là an toàn nhất, còn khi trống rỗng lại là nguy hiểm nhất."'},
    {sp:0,zh:'另一个相似的故事发生在某一著名风景区，那里有一段被当地人称为“鬼谷”的最危险的路段，山路非常窄，两边是万丈深渊。每当导游们带队来这里游览时，一定要让游客们背点或者拿点什么东西。',
     py:'Lìng yí ge xiāngsì de gùshi fāshēng zài mǒu yí zhùmíng fēngjǐngqū, nàlǐ yǒu yí duàn bèi dāngdìrén chēngwéi "Guǐgǔ" de zuì wēixiǎn de lùduàn, shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān. Měi dāng dǎoyóumen dài duì lái zhèlǐ yóulǎn shí, yídìng yào ràng yóukèmen bēi diǎn huòzhě ná diǎn shénme dōngxi.',
     vn:'Một câu chuyện tương tự khác xảy ra ở một khu thắng cảnh nổi tiếng nọ. Ở đó có một đoạn đường nguy hiểm nhất, được người địa phương gọi là "Thung lũng Quỷ": đường núi rất hẹp, hai bên là vực sâu vạn trượng. Mỗi khi các hướng dẫn viên dẫn đoàn đến đây tham quan, họ nhất định bắt du khách phải đeo hoặc cầm theo thứ gì đó.'},
    {sp:0,zh:'“这么危险的地方，我不拿东西两腿都发抖，再负重前行，那不是更容易摔倒吗？”一位妇女不解地问。',
     py:'"Zhème wēixiǎn de dìfang, wǒ bù ná dōngxi liǎng tuǐ dōu fādǒu, zài fùzhòng qiánxíng, nà bú shì gèng róngyì shuāidǎo ma?" Yí wèi fùnǚ bù jiě de wèn.',
     vn:'"Chỗ nguy hiểm thế này, tôi không cầm gì hai chân đã run rồi, lại còn mang nặng mà đi, thế chẳng phải càng dễ ngã hơn sao?" một người phụ nữ khó hiểu hỏi.'},
    {sp:0,zh:'导游小姐解释道：“这里以前发生过好几起意外，都是迷路的游客在丝毫没有感觉到压力的情况下，一不小心滚下去的。当地人每天都从这条路上背着东西来来往往，却从来没人出事。假如你感觉到了有风险，谨慎地负重前行，反而会更安全。”',
     py:'Dǎoyóu xiǎojiě jiěshì dào: "Zhèlǐ yǐqián fāshēngguo hǎo jǐ qǐ yìwài, dōu shì mílù de yóukè zài sīháo méiyǒu gǎnjué dào yālì de qíngkuàng xià, yí bù xiǎoxīn gǔn xiàqu de. Dāngdìrén měi tiān dōu cóng zhè tiáo lù shang bēizhe dōngxi láiláiwǎngwǎng, què cónglái méi rén chū shì. Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán."',
     vn:'Cô hướng dẫn viên giải thích: "Ở đây trước kia từng xảy ra mấy vụ tai nạn, đều là những du khách lạc đường, trong lúc chẳng hề cảm thấy chút áp lực nào, sơ ý một cái là lăn xuống vực. Người địa phương ngày nào cũng mang vác đồ qua lại con đường này, vậy mà chưa từng có ai gặp chuyện. Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn."'},
    {sp:0,zh:'这就是“压力效应”。那些胸怀理想、肩上有责任感的人，才能承受住压力，从历史的风雨中走过“鬼谷”；而那些没有理想，没有一点压力，做一天和尚撞一天钟的人，就像一艘风暴中的空船，往往一场人生的狂风巨浪便会把他们彻底地打翻在地。',
     py:'Zhè jiù shì "yālì xiàoyìng". Nàxiē xiōnghuái lǐxiǎng, jiān shang yǒu zérèngǎn de rén, cái néng chéngshòu zhù yālì, cóng lìshǐ de fēngyǔ zhōng zǒuguò "Guǐgǔ"; ér nàxiē méiyǒu lǐxiǎng, méiyǒu yìdiǎn yālì, zuò yì tiān héshang zhuàng yì tiān zhōng de rén, jiù xiàng yì sōu fēngbào zhōng de kōngchuán, wǎngwǎng yì chǎng rénshēng de kuángfēng jùlàng biàn huì bǎ tāmen chèdǐ de dǎfān zài dì.',
     vn:'Đó chính là "hiệu ứng áp lực". Những người mang lý tưởng trong lòng, có tinh thần trách nhiệm trên vai mới chịu đựng được áp lực, bước qua "Thung lũng Quỷ" giữa mưa gió của lịch sử; còn những người không có lý tưởng, không chút áp lực, sống kiểu "làm ngày nào hay ngày ấy", thì giống như con tàu rỗng giữa cơn bão, thường chỉ một trận cuồng phong sóng dữ của cuộc đời là đủ quật ngã họ hoàn toàn.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 严肃/严格 lấy từ sách (tr. 68)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'严肃 — 严格',
   same:'Đều là tính từ, đều biểu thị nghiêm túc, không lơi lỏng; nhưng phạm vi dùng khác nhau khá nhiều, không thay thế cho nhau được.',
   sameEx:{zh:'王老师上课时很严肃，对学生的要求也很严格。',vn:'Thầy Vương khi lên lớp rất nghiêm nghị, yêu cầu với học sinh cũng rất nghiêm khắc.'},
   items:[
     {word:'严肃',points:[
       'Nhấn mạnh NGHIÊM TÚC về tác phong, thái độ: 严肃批评, 严肃对待, 严肃地思考.',
       'Tả nét mặt, bầu không khí khiến người ta vừa kính vừa sợ: 表情严肃, 气氛严肃.',
       'Chủ ngữ hay gặp: 表情, 态度, 气氛, 内容, con người (看上去很严肃).'
     ],ex:[{zh:'小林这件事影响恶劣，我们对他一定要严肃批评。',vn:'Chuyện này của Tiểu Lâm gây ảnh hưởng rất xấu, chúng ta nhất định phải phê bình nghiêm túc cậu ấy.'},
          {zh:'一句幽默的笑话可以让紧张严肃的气氛变得轻松愉快。',vn:'Một câu đùa hóm hỉnh có thể khiến bầu không khí căng thẳng, nghiêm trang trở nên thoải mái vui vẻ.'}]},
     {word:'严格',points:[
       'NGHIÊM KHẮC, chặt chẽ khi tuân thủ chế độ, quy định hoặc nắm vững tiêu chuẩn.',
       'Hay đi với: 要求, 管理, 控制, 执行, 遵守, 教育 — 严格要求, 严格遵守.',
       'Không tả nét mặt hay bầu không khí: không nói 表情很严格.'
     ],ex:[{zh:'小华妈妈，平时对孩子教育很严格。',vn:'Mẹ Tiểu Hoa bình thường dạy con rất nghiêm khắc.'},
          {zh:'实验过程中，温度、水分等条件都要严格地控制。',vn:'Trong quá trình thí nghiệm, nhiệt độ, độ ẩm… đều phải được kiểm soát nghiêm ngặt.'}]}
   ],
   quiz:[
     {sentence:'刘老师虽然看上去很＿＿，但其实对人很友善。',options:['严肃','严格'],answer:0,
      why:'Tả vẻ ngoài, nét mặt → 严肃 (câu mẫu của sách).'},
     {sentence:'学校对考试纪律要求非常＿＿。',options:['严肃','严格'],answer:1,
      why:'Yêu cầu tuân thủ kỷ luật, quy định → 严格.'},
     {sentence:'会议的气氛很＿＿，谁都不敢大声说话。',options:['严肃','严格'],answer:0,
      why:'Bầu không khí trang nghiêm khiến người ta e dè → 严肃.'},
     {sentence:'司机必须＿＿遵守交通规则。',options:['严肃','严格'],answer:1,
      why:'Tuân thủ quy tắc → 严格遵守.'}
   ],
   sgk:{
     chung:{t:'都是形容词，都表示认真、不放松，但适用范围相差较大，不能替换。',vn:'Đều là tính từ, đều biểu thị nghiêm túc, không lơi lỏng, nhưng phạm vi dùng khác nhau khá nhiều, không thay thế cho nhau được.'},
     khac:[
       {a:{t:'强调在作风、态度等方面认真。',vn:'Nhấn mạnh nghiêm túc về tác phong, thái độ.',vd:'小林这件事影响恶劣，我们对他一定要严肃批评。',vdVn:'Chuyện này của Tiểu Lâm gây ảnh hưởng rất xấu, chúng ta nhất định phải phê bình nghiêm túc cậu ấy.'},
        b:{t:'表示在遵守制度或掌握标准时认真、不放松。',vn:'Biểu thị nghiêm túc, không lơi lỏng khi tuân thủ chế độ hoặc nắm vững tiêu chuẩn.',vd:'小华妈妈，平时对孩子教育很严格。',vdVn:'Mẹ Tiểu Hoa bình thường dạy con rất nghiêm khắc.'}},
       {a:{t:'表示神情、气氛等使人感到既尊重又害怕。',vn:'Biểu thị nét mặt, bầu không khí… khiến người ta vừa kính trọng vừa e sợ.',vd:'一句幽默的笑话可以让紧张严肃的气氛变得轻松愉快。',vdVn:'Một câu đùa hóm hỉnh có thể khiến bầu không khí căng thẳng, nghiêm trang trở nên thoải mái vui vẻ.'},
        b:{t:'没有这种意思。',vn:'Không có nghĩa này.'}}
     ],
     lamThu:[
       {s:'刘老师虽然看上去很＿＿，但其实对人很友善。',dap:[true,false],mau:true,
        giai:'Tả vẻ ngoài, nét mặt khiến người ta e dè → 严肃 (câu mẫu của sách).'},
       {s:'这是一个决定公司发展的重大问题，应引起高度重视，＿＿对待。',dap:[true,false],
        giai:'Thái độ nghiêm túc trước một vấn đề trọng đại → 严肃对待 (như 严肃批评).'},
       {s:'实验过程中，温度、水分等条件都要＿＿地控制。',dap:[false,true],
        giai:'Kiểm soát theo đúng tiêu chuẩn, quy định → 严格地控制.'},
       {s:'每次读到这段历史都会让我＿＿地思考。',dap:[true,false],
        giai:'Thái độ nghiêm túc, trang nghiêm khi suy ngẫm → 严肃地思考. Không có tiêu chuẩn, quy định nào để 严格.'}
     ]
   }},

  {pair:'慌张 — 紧张',
   same:'Đều là tính từ chỉ trạng thái tâm lý không bình tĩnh khi gặp chuyện.',
   sameEx:{zh:'第一次上台表演，他有点儿紧张／慌张。',vn:'Lần đầu lên sân khấu biểu diễn, cậu ấy hơi hồi hộp / luống cuống.'},
   items:[
     {word:'慌张',points:[
       'Luống cuống, hốt hoảng THỂ HIỆN RA NGOÀI bằng hành động vội vàng, rối loạn.',
       'Hay làm trạng ngữ: 慌张地跑, 慌慌张张地…; chủ ngữ: 神情, 动作, 眼神.',
       'Không dùng tả tình hình, công việc, quan hệ.'
     ],ex:[{zh:'李岩之所以那么慌张地返回北京，是因为得知了这个坏消息。',vn:'Sở dĩ Lý Nham vội vã quay về Bắc Kinh như thế là vì biết được tin dữ này.'},
          {zh:'正当水手们慌张得不知如何是好时，老船长命令水手们立刻打开货舱。',vn:'Đúng lúc các thủy thủ luống cuống không biết làm sao, thuyền trưởng già ra lệnh mở ngay khoang hàng.'}]},
     {word:'紧张',points:[
       'Căng thẳng, hồi hộp TRONG LÒNG (trước kỳ thi, khi lên sân khấu).',
       'Còn tả tình hình, công việc, thời gian gấp gáp, khan hiếm: 工作紧张, 时间紧张, 关系紧张.',
       'Hay làm bổ ngữ tâm lý: 紧张得睡不着.'
     ],ex:[{zh:'考试前一天晚上，我紧张得睡不着觉。',vn:'Tối hôm trước ngày thi, tôi hồi hộp đến mất ngủ.'},
          {zh:'最近工作很紧张，我每天都要加班。',vn:'Dạo này công việc rất gấp, ngày nào tôi cũng phải làm thêm giờ.'}]}
   ],
   quiz:[
     {sentence:'李岩之所以那么＿＿地返回北京，是因为得知了这个坏消息。',options:['慌张','紧张'],answer:0,
      why:'Hành động vội vã, cuống cuồng quay về → 慌张地返回 (bài tập 2 của sách).'},
     {sentence:'最近工作很＿＿，我每天都要加班。',options:['慌张','紧张'],answer:1,
      why:'Công việc bận rộn, gấp gáp → 紧张. 慌张 không tả công việc.'},
     {sentence:'他神色＿＿地跑进来，好像出了什么大事。',options:['慌张','紧张'],answer:0,
      why:'Hốt hoảng lộ ra nét mặt và hành động chạy vội → 神色慌张.'},
     {sentence:'明天就要考试了，我＿＿得睡不着觉。',options:['慌张','紧张'],answer:1,
      why:'Hồi hộp trong lòng trước kỳ thi → 紧张.'}
   ]},

  {pair:'彻底 — 完全',
   same:'Đều có nghĩa "hoàn toàn", làm được trạng ngữ đứng trước động từ.',
   sameEx:{zh:'这次旅行彻底／完全改变了我对他的看法。',vn:'Chuyến đi này đã thay đổi hoàn toàn cách nhìn của tôi về anh ấy.'},
   items:[
     {word:'彻底',points:[
       'Nhấn mạnh làm đến TẬN CÙNG, triệt để, không còn sót — hay đi với 改变, 解决, 检查, 放弃, 改正.',
       'Làm bổ ngữ, vị ngữ được: 好得不彻底, 打扫得很彻底.',
       'Ít đi với động từ tâm lý (không nói 彻底同意).'
     ],ex:[{zh:'你的病好得不彻底，还应该再休息几天。',vn:'Bệnh của cậu chưa khỏi hẳn, còn nên nghỉ thêm vài ngày.'},
          {zh:'一个偶然的机会彻底改变了他的命运。',vn:'Một cơ hội tình cờ đã thay đổi hoàn toàn số phận của anh ấy.'}]},
     {word:'完全',points:[
       'Nhấn mạnh ĐẦY ĐỦ, trọn vẹn về phạm vi, mức độ: 完全同意, 完全正确, 完全不懂.',
       'Hay đi với tính từ, động từ tâm lý và phủ định: 完全不同, 完全没有.',
       'Không làm bổ ngữ kiểu 好得不完全 cho nghĩa "khỏi hẳn".'
     ],ex:[{zh:'我完全同意你的看法。',vn:'Tôi hoàn toàn đồng ý với quan điểm của bạn.'},
          {zh:'这两个词的意思完全不同。',vn:'Nghĩa của hai từ này khác hẳn nhau.'}]}
   ],
   quiz:[
     {sentence:'你的病好得不＿＿，还应该再休息几天。',options:['彻底','完全'],answer:0,
      why:'Bổ ngữ "khỏi chưa dứt điểm" → 好得不彻底 (bài tập 2 của sách).'},
     {sentence:'我＿＿同意你的看法。',options:['彻底','完全'],answer:1,
      why:'Đồng ý trọn vẹn (động từ tâm lý) → 完全同意.'},
     {sentence:'这个问题必须＿＿解决，不能每次都只解决一半。',options:['彻底','完全'],answer:0,
      why:'Giải quyết đến tận gốc → 彻底解决.'},
     {sentence:'这两个词的意思＿＿不同。',options:['彻底','完全'],answer:1,
      why:'完全不同 = khác hẳn nhau (nói mức độ).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'猛烈',hv:'mãnh liệt',vn:'dữ dội',note:'Gần trùng; nhưng tiếng Trung dùng cho gió, lửa, tấn công — tình cảm mãnh liệt nói 强烈.'},
    {zh:'威胁',hv:'uy hiếp',vn:'đe dọa, uy hiếp',note:'Trùng khít: 威胁生命 = uy hiếp tính mạng.'},
    {zh:'相似',hv:'tương tự',vn:'tương tự, giống nhau',note:'Trùng khít.'},
    {zh:'风景',hv:'phong cảnh',vn:'phong cảnh',note:'Trùng khít: 风景区 = khu thắng cảnh.'},
    {zh:'重量',hv:'trọng lượng',vn:'trọng lượng',note:'Trùng khít.'},
    {zh:'妇女',hv:'phụ nữ',vn:'phụ nữ',note:'Trùng khít: 妇女节 = ngày Phụ nữ.'},
    {zh:'谨慎',hv:'cẩn thận',vn:'cẩn thận, thận trọng',note:'Trùng âm "cẩn thận"; sắc thái trang trọng hơn 小心.'},
    {zh:'效应',hv:'hiệu ứng',vn:'hiệu ứng',note:'Trùng khít: 温室效应 = hiệu ứng nhà kính.'},
    {zh:'彻底',hv:'triệt để',vn:'triệt để, hoàn toàn',note:'Trùng khít: 彻底解决 = giải quyết triệt để.'},
    {zh:'和尚',hv:'hòa thượng',vn:'nhà sư',note:'Tiếng Việt "hòa thượng" là bậc sư cao; tiếng Trung 和尚 chỉ nhà sư nam nói chung.'},
    {zh:'严肃',hv:'nghiêm túc',vn:'nghiêm túc, nghiêm nghị',note:'Trùng âm; tiếng Trung còn tả nét mặt, bầu không khí nghiêm trang.'}
  ],
  idiom:[
    {zh:'万丈深渊',hv:'vạn trượng thâm uyên',vn:'vực sâu vạn trượng',note:'Tiếng Việt dùng y nguyên "vực sâu vạn trượng".'},
    {zh:'狂风巨浪',hv:'cuồng phong cự lãng',vn:'gió dữ sóng lớn',note:'"Cuồng phong" tiếng Việt vẫn dùng; "cự" = to lớn.'},
    {zh:'负重前行',hv:'phụ trọng tiền hành',vn:'mang nặng mà tiến bước',note:'"Phụ" = mang vác (như "phụ trách"), "tiền hành" = đi về phía trước.'},
    {zh:'做一天和尚撞一天钟',hv:'tố nhất thiên hòa thượng chàng nhất thiên chung',vn:'làm ngày nào hay ngày ấy',note:'Làm sư ngày nào thì gõ chuông ngày ấy — làm việc cầm chừng, không chí hướng.'}
  ],
  trap:[
    {zh:'恶劣',hv:'ác liệt',vn:'tồi tệ, rất xấu',
     warn:'BẪY: "ác liệt" tiếng Việt là DỮ DỘI (trận đánh ác liệt). 恶劣 tiếng Trung là XẤU, tệ hại: 天气恶劣, 态度恶劣. Dữ dội nói 激烈 / 猛烈.'},
    {zh:'根基',hv:'căn cơ',vn:'nền móng, nền tảng',
     warn:'BẪY: "căn cơ" tiếng Việt là tằn tiện, biết tiết kiệm. 根基 tiếng Trung là NỀN MÓNG: 打好根基.'},
    {zh:'简直',hv:'giản trực',vn:'quả là, thật là',
     warn:'Không liên quan "giản dị" hay "chính trực". 简直 là phó từ PHÓNG ĐẠI: 简直是疯了 = đúng là điên rồi.'},
    {zh:'承受',hv:'thừa thụ',vn:'chịu đựng',
     warn:'"Thừa" không phải "thừa thãi" mà là "nhận" (thừa kế). 承受 = chịu đựng điều nặng nề; nhận quà nói 接受.'},
    {zh:'风险',hv:'phong hiểm',vn:'rủi ro',
     warn:'Tiếng Việt không có từ "phong hiểm". 风险 là RỦI RO (投资风险); nguy hiểm trước mắt nói 危险.'},
    {zh:'沉',hv:'trầm',vn:'chìm; nặng',
     warn:'"Trầm" tiếng Việt gợi trầm lặng, giọng trầm. 沉 tiếng Trung trước hết là CHÌM (船沉了), khẩu ngữ còn là NẶNG (箱子很沉).'},
    {zh:'起',hv:'khởi',vn:'vụ (lượng từ)',
     warn:'Ngoài nghĩa "dậy, bắt đầu", 起 còn là LƯỢNG TỪ cho sự cố: 一起意外 = một vụ tai nạn. Đừng nhầm với 一起 (yìqǐ) = cùng nhau.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 67) + luyện tập 3 (tr. 69) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'冒',right:'风险'},
  {left:'游览',right:'名胜'},
  {left:'承受',right:'压力'},
  {left:'威胁',right:'生命'},
  {left:'形状',right:'相似'},
  {left:'气候',right:'恶劣'},
  {left:'营养',right:'平衡'},
  {left:'态度',right:'严肃'},
  {left:'彻底',right:'解决'},
  {left:'谨慎地',right:'处理'},
  {left:'摔',right:'碎'},
  {left:'一吨',right:'粮食'},
  {left:'一起',right:'意外'},
  {left:'神情',right:'慌张'},
  {left:'打开',right:'货舱'},
  {left:'万丈',right:'深渊'},
  {left:'狂风',right:'巨浪'},
  {left:'温室',right:'效应'},
  {left:'两腿',right:'发抖'},
  {left:'做一天和尚',right:'撞一天钟'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'因为天气突然变坏，飞机起飞半个小时后被迫',blank:'返航',post:'。',hint:'(quay về nơi xuất phát)',ans:'返航'},
  {pre:'考试不',blank:'可怕',post:'，可怕的是不努力。',hint:'(đáng sợ)',ans:'可怕'},
  {pre:'今天海上',blank:'风浪',post:'很大，渔船都不敢出海。',hint:'(sóng gió)',ans:'风浪'},
  {pre:'为了省钱，我们这次买的是经济',blank:'舱',post:'的机票。',hint:'(khoang, hạng ghế)',ans:'舱'},
  {pre:'这个瓶子我',blank:'使劲',post:'儿拧了半天也打不开。',hint:'(dùng sức)',ans:'使劲'},
  {pre:'小女孩一看见我，就',blank:'朝',post:'我笑了笑。',hint:'(về phía)',ans:'朝'},
  {pre:'石头扔进河里，很快就',blank:'沉',post:'下去了。',hint:'(chìm)',ans:'沉'},
  {pre:'一场',blank:'猛烈',post:'的暴风雨过后，路边的很多树都倒了。',hint:'(dữ dội)',ans:'猛烈'},
  {pre:'',blank:'狂',post:'风把门前的大树都刮倒了。',hint:'(dữ, điên cuồng)',ans:'狂'},
  {pre:'这辆卡车最多能装五',blank:'吨',post:'货物。',hint:'(tấn)',ans:'吨'},
  {pre:'运动员们靠',blank:'钢铁',post:'般的意志坚持跑完了全程。',hint:'(sắt thép)',ans:'钢铁'},
  {pre:'学外语要先打好',blank:'根基',post:'，发音和基本语法都很重要。',hint:'(nền móng)',ans:'根基'},
  {pre:'行李的',blank:'重量',post:'超过了二十公斤，要另外交钱。',hint:'(trọng lượng)',ans:'重量'},
  {pre:'下龙湾',blank:'风景',post:'如画，每年吸引很多外国游客。',hint:'(phong cảnh)',ans:'风景'},
  {pre:'这条小巷又',blank:'窄',post:'又长，汽车根本开不进去。',hint:'(hẹp)',ans:'窄'},
  {pre:'山路非常窄，两边是',blank:'万丈',post:'深渊。',hint:'(vạn trượng)',ans:'万丈'},
  {pre:'沉迷网络游戏，可能会让一个学生陷入失败的',blank:'深渊',post:'。',hint:'(vực thẳm)',ans:'深渊'},
  {pre:'到了北京，我们先去',blank:'游览',post:'了长城和故宫。',hint:'(tham quan)',ans:'游览'},
  {pre:'外面下着大雪，小猫冻得浑身',blank:'发抖',post:'。',hint:'(run rẩy)',ans:'发抖'},
  {pre:'士兵们每天都要进行',blank:'负重',post:'训练。',hint:'(mang vác nặng)',ans:'负重'},
  {pre:'下雨天路滑，奶奶出门时差点儿',blank:'摔倒',post:'。',hint:'(ngã)',ans:'摔倒'},
  {pre:'三八',blank:'妇女',post:'节那天，我给妈妈买了一束花。',hint:'(phụ nữ)',ans:'妇女'},
  {pre:'今天早上这条路上发生了一',blank:'起',post:'交通事故。',hint:'(lượng từ: vụ)',ans:'起'},
  {pre:'这么多年过去了，他的样子',blank:'丝毫',post:'没有变。',hint:'(chút nào)',ans:'丝毫'},
  {pre:'足球',blank:'滚',post:'到马路上了，你快去捡回来。',hint:'(lăn)',ans:'滚'},
  {pre:'温室',blank:'效应',post:'让地球的气温越来越高。',hint:'(hiệu ứng)',ans:'效应'},
  {pre:'站的时候要挺',blank:'胸',post:'抬头，别总低着头看手机。',hint:'(ngực)',ans:'胸'},
  {pre:'山上的寺庙里住着一个老',blank:'和尚',post:'和一个小和尚。',hint:'(hòa thượng)',ans:'和尚'},
  {pre:'新年的',blank:'钟',post:'声响起来了，大家都高兴地欢呼起来。',hint:'(chuông)',ans:'钟'},
  {pre:'高三学生每天都要',blank:'承受',post:'很大的学习压力。',hint:'(chịu đựng)',ans:'承受'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (朝 · 简直) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我们学校的','正门','坐西','朝东','。'],ans:'我们学校的正门坐西朝东。',audio:'我们学校的正门坐西朝东。'},
  {words:['我仿佛','看到','胜利','正朝我们','走来','。'],ans:'我仿佛看到胜利正朝我们走来。',audio:'我仿佛看到胜利正朝我们走来。'},
  {words:['小女孩','朝我','笑了笑','。'],ans:'小女孩朝我笑了笑。',audio:'小女孩朝我笑了笑。'},
  {words:['船长','简直','是','疯了','。'],ans:'船长简直是疯了。',audio:'船长简直是疯了。'},
  {words:['我','简直','不敢相信','自己的耳朵','。'],ans:'我简直不敢相信自己的耳朵。',audio:'我简直不敢相信自己的耳朵。'},
  {words:['李老师的书房','简直','就是','一个小图书馆','。'],ans:'李老师的书房简直就是一个小图书馆。',audio:'李老师的书房简直就是一个小图书馆。'},
  {words:['一个偶然的机会','彻底','改变了','他的命运','。'],ans:'一个偶然的机会彻底改变了他的命运。',audio:'一个偶然的机会彻底改变了他的命运。'},
  {words:['陈工程师','也有','与老人','相似的','经历','。'],ans:'陈工程师也有与老人相似的经历。',audio:'陈工程师也有与老人相似的经历。'},
  {words:['船','在有一定重量的时候','是','最安全的','。'],ans:'船在有一定重量的时候是最安全的。',audio:'船在有一定重量的时候是最安全的。'},
  {words:['狂风巨浪','依然猛烈','，','对船的威胁','却','减小了','。'],ans:'狂风巨浪依然猛烈，对船的威胁却减小了。',audio:'狂风巨浪依然猛烈，对船的威胁却减小了。'},
  {words:['那些','有责任感的人','才能','承受住','压力','。'],ans:'那些有责任感的人才能承受住压力。',audio:'那些有责任感的人才能承受住压力。'},
  {words:['我们','必须','谨慎地','对待','这个问题','。'],ans:'我们必须谨慎地对待这个问题。',audio:'我们必须谨慎地对待这个问题。'},
  {words:['看着','船长严肃的表情','，','水手们','还是','照做了','。'],ans:'看着船长严肃的表情，水手们还是照做了。',audio:'看着船长严肃的表情，水手们还是照做了。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'一次返航中，天气____，他们的船遇到了巨大风浪。',opts:['恶劣','猛烈','严肃','相似'],ans:0,
   exp:'Thời tiết xấu → 天气恶劣 (bảng 词语搭配: 恶劣的天气). 猛烈 tả sức gió, sóng (风浪猛烈), không nói 天气猛烈; 严肃 tả nét mặt; 相似 sai nghĩa.'},
  {wrong:'对这种行为____的队员只能让他离开球队。',opts:['恶劣','严格','谨慎','彻底'],ans:0,
   exp:'Hành vi tồi tệ → 行为恶劣 (bài tập 1 của sách). 严格, 谨慎 là nghĩa tốt; 彻底 không tả hành vi.'},
  {wrong:'李岩之所以那么____地返回北京，是因为得知了这个坏消息。',opts:['慌张','紧张','严肃','谨慎'],ans:0,
   exp:'Hành động vội vã, cuống cuồng → 慌张地返回 (bài tập 2 của sách). 紧张 là hồi hộp trong lòng, không tả dáng vẻ vội vàng khi đi.'},
  {wrong:'明天就要考试了，我____得睡不着觉。',opts:['紧张','慌张','恶劣','猛烈'],ans:0,
   exp:'Hồi hộp trong lòng trước kỳ thi → 紧张得睡不着. 慌张 thiên về hành động luống cuống bên ngoài.'},
  {wrong:'昨晚的比赛太精彩了，林丹____太厉害了！',opts:['简直','几乎','完全','差不多'],ans:0,
   exp:'简直 + 太……了: giọng phóng đại, cảm thán (bài tập 1 của sách). 几乎, 差不多 chỉ "gần như" trung tính, không đi với 太……了.'},
  {wrong:'听到这个消息时，我____不敢相信自己的耳朵。',opts:['简直','彻底','丝毫','谨慎'],ans:0,
   exp:'简直不敢相信 — phóng đại cảm xúc. 丝毫 phải đi với 不/没 và mang nghĩa "chút nào", ở đây không hợp.'},
  {wrong:'看着船长____的表情，水手们还是照做了。',opts:['严肃','严格','猛烈','恶劣'],ans:0,
   exp:'Nét mặt nghiêm nghị → 严肃的表情 (bảng 词语搭配). 严格 không tả nét mặt.'},
  {wrong:'实验过程中，温度、水分等条件都要____地控制。',opts:['严格','严肃','慌张','相似'],ans:0,
   exp:'Kiểm soát theo đúng tiêu chuẩn → 严格地控制 (做一做 của sách).'},
  {wrong:'在人口压力面前，经济发展、社会进步都受到了巨大____。',opts:['威胁','风险','效应','根基'],ans:0,
   exp:'受到威胁 = bị đe dọa (bài tập 1 của sách). 风险 không đi với 受到; 效应, 根基 sai nghĩa.'},
  {wrong:'初学骑自行车最重要的是注意保持____。',opts:['平衡','平安','重量','相似'],ans:0,
   exp:'保持平衡 = giữ thăng bằng (bài tập 1 của sách). 平安 là bình an, không đi với 保持 trong nghĩa này.'},
  {wrong:'陈工程师也有与老人____的经历。',opts:['相似','平衡','彻底','严肃'],ans:0,
   exp:'与……相似的经历 = trải nghiệm tương tự (câu 30 sách bài tập).'},
  {wrong:'你决定在海外投资，有没有考虑到____？',opts:['风险','危险','冒险','威胁'],ans:0,
   exp:'Đầu tư thì nói RỦI RO → 风险 (bài tập 1 của sách). 危险 là nguy hiểm trước mắt; 冒险 là động từ "mạo hiểm"; 威胁 là đe dọa.'},
  {wrong:'这毕竟是高考择校，我们必须____对待。',opts:['谨慎','慌张','丝毫','猛烈'],ans:0,
   exp:'谨慎对待 = thận trọng (bài tập 1 của sách).'},
  {wrong:'你的病好得不____，还应该再休息几天。',opts:['彻底','完全','简直','丝毫'],ans:0,
   exp:'Bổ ngữ "khỏi chưa dứt điểm" → 好得不彻底 (bài tập 2 của sách). 完全 không làm bổ ngữ sau 得 kiểu này.'},
  {wrong:'我____同意你的看法。',opts:['完全','彻底','简直','丝毫'],ans:0,
   exp:'Đồng ý trọn vẹn → 完全同意. 彻底 đi với động từ thay đổi, giải quyết; 丝毫 chỉ dùng trong phủ định.'},
  {wrong:'我实在不敢____这么贵重的礼物。',opts:['接受','承受','享受','感受'],ans:0,
   exp:'Nhận quà → 接受 (bài tập 2 của sách). 承受 là chịu đựng điều nặng nề (压力, 痛苦).'},
  {wrong:'不是你努力得不够，____是努力的方向错了。',opts:['恐怕','可怕','害怕','怕'],ans:0,
   exp:'恐怕 (phó từ) = e rằng, có lẽ — đứng trước nhận định (bài tập 2 của sách). 可怕 là tính từ "đáng sợ".'},
  {wrong:'我仿佛看到胜利正____我们走来。',opts:['朝','对','给','跟'],ans:0,
   exp:'朝 + người / hướng + 走来: chỉ phương hướng chuyển động (注释 1). 对 chỉ đối tượng của thái độ (对我很好); 给, 跟 sai nghĩa.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Thuyền trưởng đúng là điên rồi!',zh:'船长简直是疯了！',py:'Chuánzhǎng jiǎnzhí shì fēng le!'},
  {vi:'Cổng chính trường chúng tôi quay về hướng nam.',zh:'我们学校的正门朝南。',py:'Wǒmen xuéxiào de zhèngmén cháo nán.'},
  {vi:'Cô ấy thay đổi nhiều quá, cứ như biến thành người khác.',zh:'她变化太大了，简直像换了个人。',py:'Tā biànhuà tài dà le, jiǎnzhí xiàng huànle ge rén.'},
  {vi:'Mới tập đi xe đạp, quan trọng nhất là giữ thăng bằng.',zh:'初学骑自行车，最重要的是保持平衡。',py:'Chūxué qí zìxíngchē, zuì zhòngyào de shì bǎochí pínghéng.'},
  {vi:'Đầu tư ở nước ngoài, bạn đã tính đến rủi ro chưa?',zh:'在海外投资，你考虑到风险了吗？',py:'Zài hǎiwài tóuzī, nǐ kǎolǜ dào fēngxiǎn le ma?'},
  {vi:'Học sinh lớp 12 phải chịu áp lực rất lớn.',zh:'高三学生要承受很大的压力。',py:'Gāo-sān xuésheng yào chéngshòu hěn dà de yālì.'},
  {vi:'Một cơ hội tình cờ đã thay đổi hoàn toàn số phận của anh ấy.',zh:'一个偶然的机会彻底改变了他的命运。',py:'Yí ge ǒurán de jīhuì chèdǐ gǎibiànle tā de mìngyùn.'},
  {vi:'Đường núi rất hẹp, hai bên là vực sâu vạn trượng.',zh:'山路非常窄，两边是万丈深渊。',py:'Shānlù fēicháng zhǎi, liǎngbiān shì wànzhàng shēnyuān.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Thuyền trưởng già ra lệnh cho các thủy thủ lập tức mở khoang hàng, ra sức xả nước vào trong.',zh:'老船长命令水手们立刻打开货舱，使劲儿朝里面放水。',py:'Lǎo chuánzhǎng mìnglìng shuǐshǒumen lìkè dǎkāi huòcāng, shǐjìnr cháo lǐmiàn fàng shuǐ.'},
  {vi:'Mực nước càng dâng cao, con tàu cũng dần lấy lại thăng bằng.',zh:'随着水位越升越高，船也渐渐取得了平衡。',py:'Suízhe shuǐwèi yuè shēng yuè gāo, chuán yě jiànjiàn qǔdéle pínghéng.'},
  {vi:'Tàu thép khổng lồ nặng mấy vạn tấn rất ít khi bị lật.',zh:'几万吨的钢铁巨轮很少有被打翻的。',py:'Jǐ wàn dūn de gāngtiě jùlún hěn shǎo yǒu bèi dǎfān de.'},
  {vi:'Con tàu khi trống rỗng là nguy hiểm nhất.',zh:'船在空的时候是最危险的。',py:'Chuán zài kōng de shíhou shì zuì wēixiǎn de.'},
  {vi:'Chỗ nguy hiểm thế này, tôi không cầm gì hai chân cũng đã run.',zh:'这么危险的地方，我不拿东西两腿都发抖。',py:'Zhème wēixiǎn de dìfang, wǒ bù ná dōngxi liǎng tuǐ dōu fādǒu.'},
  {vi:'Nếu bạn cảm thấy có rủi ro, thận trọng mang nặng mà đi, trái lại sẽ an toàn hơn.',zh:'假如你感觉到了有风险，谨慎地负重前行，反而会更安全。',py:'Jiǎrú nǐ gǎnjué dàole yǒu fēngxiǎn, jǐnshèn de fùzhòng qiánxíng, fǎn\'ér huì gèng ānquán.'},
  {vi:'Đây chính là "hiệu ứng áp lực".',zh:'这就是“压力效应”。',py:'Zhè jiù shì "yālì xiàoyìng".'},
  {vi:'Người làm ngày nào hay ngày ấy giống như con tàu rỗng giữa cơn bão.',zh:'做一天和尚撞一天钟的人，就像一艘风暴中的空船。',py:'Zuò yì tiān héshang zhuàng yì tiān zhōng de rén, jiù xiàng yì sōu fēngbào zhōng de kōngchuán.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['承受','简直','彻底','谨慎','平衡'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về áp lực học tập của em và cách em đối mặt với nó.',
  outline:[
    'Câu mở: áp lực lớn nhất của em hiện nay đến từ đâu, nặng đến mức nào (dùng 简直).',
    'Thân 1: có lúc em cảm thấy không chịu nổi (dùng 承受).',
    'Thân 2: em đã thay đổi cách học, cách lập kế hoạch thế nào (dùng 彻底, 谨慎).',
    'Kết: em học được cách cân bằng giữa học và nghỉ; rút ra bài học (dùng 平衡).'
  ],
  model:{
    zh:'上高三以后，作业和考试多得简直让我喘不过气来。有一段时间，我觉得自己快承受不了了，每天晚上都睡不好。后来，我彻底改变了学习方法：先谨慎地制订计划，再一步一步完成。我还学会了在学习和休息之间保持平衡。现在我明白了，有压力才会有动力。',
    py:'Shàng gāo-sān yǐhòu, zuòyè hé kǎoshì duō de jiǎnzhí ràng wǒ chuǎn bu guò qì lái. Yǒu yí duàn shíjiān, wǒ juéde zìjǐ kuài chéngshòu bu liǎo le, měi tiān wǎnshang dōu shuì bu hǎo. Hòulái, wǒ chèdǐ gǎibiànle xuéxí fāngfǎ: xiān jǐnshèn de zhìdìng jìhuà, zài yí bù yí bù wánchéng. Wǒ hái xuéhuìle zài xuéxí hé xiūxi zhījiān bǎochí pínghéng. Xiànzài wǒ míngbai le, yǒu yālì cái huì yǒu dònglì.',
    vn:'Lên lớp 12, bài tập và bài kiểm tra nhiều đến mức tôi gần như không thở nổi. Có một thời gian, tôi thấy mình sắp không chịu nổi nữa, tối nào cũng ngủ không ngon. Về sau, tôi thay đổi hoàn toàn cách học: trước hết thận trọng lập kế hoạch, rồi hoàn thành từng bước một. Tôi còn học được cách giữ cân bằng giữa học và nghỉ. Giờ tôi đã hiểu: có áp lực mới có động lực.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '简直 có mang giọng phóng đại (简直 + 像 / 是 / 让… / 太……了) không, và KHÔNG đi cùng 很 / 非常?',
    '承受 có đi với điều nặng nề (压力, 痛苦) hoặc bổ ngữ 住 / 不了 không — nhận quà, ý kiến phải dùng 接受?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你是怎样面对学习压力的。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'承受', loai:'động từ', cach:'承受压力 · 承受住 · 承受不了 · 承受痛苦',
     sai:[{re:'承受(了)?(这份|他的|你的|我的)?(礼物|意见|建议|邀请)', sua:'接受礼物 / 接受意见', giai:'Nhận quà, ý kiến, lời mời → 接受. 承受 là CHỊU ĐỰNG điều nặng nề (压力, 痛苦).'},
          {re:'承受得不了', sua:'承受不了', giai:'Bổ ngữ khả năng phủ định là V + 不了, không chen 得.'}]},
    {tu:'简直', loai:'phó từ', cach:'简直 + 是 / 像 …… · 简直 + 太 + Adj + 了 · 简直不敢相信',
     sai:[{re:'简直(很|非常|十分|比较)', sua:'简直太……了', giai:'简直 đã mang giọng phóng đại, không đi cùng phó từ mức độ 很 / 非常 / 十分. Viết 简直太……了 hoặc bỏ 简直.'},
          {re:'简直一样', sua:'简直一模一样 / 简直像……一样', giai:'Cần vế phóng đại rõ ràng: 简直一模一样, 简直像……一样.', nhe:true}]},
    {tu:'彻底', loai:'tính từ', cach:'彻底改变 · 彻底解决 · 彻底放弃 · 好得不彻底',
     sai:[{re:'彻底(同意|相信|喜欢|明白)', sua:'完全同意 / 完全相信', giai:'Mức độ trọn vẹn của thái độ, tâm lý → 完全. 彻底 đi với động từ thay đổi, giải quyết, từ bỏ.'},
          {re:'改变彻底了', sua:'彻底改变了', giai:'彻底 làm trạng ngữ phải đứng TRƯỚC động từ: 彻底改变了.'}]},
    {tu:'谨慎', loai:'tính từ', cach:'谨慎地对待 · 谨慎地处理 · 做事谨慎 · 说话谨慎',
     sai:[{re:'谨慎(你的|自己的)?身体', sua:'注意身体', giai:'谨慎 là tính từ, không mang tân ngữ như động từ. Nói 注意身体 / 小心.'},
          {re:'谨慎的(对待|处理|选择|制订)', sua:'谨慎地对待', giai:'Trạng ngữ đứng trước động từ dùng 地: 谨慎地对待.'}]},
    {tu:'平衡', loai:'tính từ / danh từ', cach:'保持平衡 · 失去平衡 · 取得平衡 · 在 A 和 B 之间保持平衡',
     sai:[{re:'保持平安', sua:'保持平衡', giai:'Giữ cân bằng, thăng bằng → 保持平衡. 平安 là bình an.', nhe:true},
          {re:'(很|非常)平衡(学习|工作|生活)', sua:'在学习和生活之间保持平衡', giai:'Muốn nói "cân bằng việc A và B", viết 在 A 和 B 之间保持平衡 cho tự nhiên.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'简直 + 是 / 像 / 让……', nhan:'简直', vd:'作业和考试多得简直让我喘不过气来。', khi:'Phóng đại để tả áp lực, cảm xúc mạnh.'},
    {ten:'朝(着) + mục tiêu / hướng + V', nhan:'朝', vd:'我每天都朝着自己的目标努力。', khi:'Nói về phương hướng, mục tiêu phấn đấu.'},
    {ten:'承受 + 住 / 不了 + (压力)', nhan:'承受', vd:'有一段时间，我觉得自己快承受不了了。', khi:'Tả giai đoạn khó khăn nhất.'},
    {ten:'彻底 + 改变 / 解决', nhan:'彻底', vd:'后来，我彻底改变了学习方法。', khi:'Kể bước ngoặt thay đổi.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要计划做得好，压力就没那么可怕。', khi:'Nêu điều kiện đủ (ôn HSK 4).'},
    {ten:'不仅……，而且……', nhan:'不仅', vd:'压力不仅让我更努力，而且让我更了解自己。', khi:'Nêu hai mặt tích cực của áp lực.'},
    {ten:'假如……，反而……', nhan:'反而', vd:'假如一点压力都没有，人反而容易放松自己。', khi:'Lập luận ngược như bài khoá.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 lấy từ sách bài tập)
  sapXep:[
    {manh:['彻底改变了','一个偶然的机会','他的命运'],
     dap:'一个偶然的机会彻底改变了他的命运。',
     vn:'Một cơ hội tình cờ đã thay đổi hoàn toàn số phận của anh ấy.',
     giai:'Chủ ngữ 一个偶然的机会 → trạng ngữ 彻底 + động từ 改变了 → tân ngữ 他的命运. (Câu 29 sách bài tập)'},
    {manh:['与老人','陈工程师','相似的经历','也有'],
     dap:'陈工程师也有与老人相似的经历。',
     vn:'Kỹ sư Trần cũng có trải nghiệm tương tự ông cụ.',
     giai:'Chủ ngữ 陈工程师 + 也有 + định ngữ 与老人相似的 + 经历. (Câu 30 sách bài tập)'},
    {manh:['简直就是','李老师的书房','一个小图书馆'],
     dap:'李老师的书房简直就是一个小图书馆。',
     vn:'Phòng đọc của thầy Lý quả thực là một thư viện nhỏ.',
     giai:'Chủ ngữ 李老师的书房 + 简直就是 + tân ngữ; 简直 đứng trước 就是. (Câu 31 sách bài tập)'},
    {manh:['正朝我们','我仿佛看到','走来','胜利'],
     dap:'我仿佛看到胜利正朝我们走来。',
     vn:'Tôi như thấy chiến thắng đang tiến về phía chúng ta.',
     giai:'我仿佛看到 + mệnh đề tân ngữ (胜利 + 正朝我们 + 走来); cụm 朝我们 đứng TRƯỚC động từ.'},
    {manh:['承受住','有责任感的人','压力','才能'],
     dap:'有责任感的人才能承受住压力。',
     vn:'Người có tinh thần trách nhiệm mới chịu đựng được áp lực.',
     giai:'Chủ ngữ + 才能 + 承受住 (bổ ngữ kết quả 住) + tân ngữ 压力.'},
    {manh:['谨慎地','这个问题','我们必须','对待'],
     dap:'我们必须谨慎地对待这个问题。', chap:['这个问题我们必须谨慎地对待。'],
     vn:'Chúng ta phải thận trọng xử lý vấn đề này.',
     giai:'谨慎地 là trạng ngữ đứng trước 对待; tân ngữ 这个问题 đặt sau động từ (hoặc đảo lên đầu câu làm chủ đề).'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 热身 và 话题讨论 của sách: 如何面对压力
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (如何面对压力 · áp lực và động lực). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 承受 · 简直 · 彻底 · 谨慎 · 平衡 · 风险 · 慌张 · 严肃.',
  questions:[
    {q_zh:'目前，你遇到的最大的压力来自哪方面？说说你的情况。',
     q_vn:'Hiện nay, áp lực lớn nhất em gặp phải đến từ đâu? Hãy kể về tình hình của em.',
     hint:'Nói nguồn áp lực + mức độ; dùng 简直, 承受',
     sample:'我现在最大的压力来自高考。每天的作业和考试多得简直让我喘不过气来，有时候我觉得自己快承受不了了。',
     sample_vn:'Áp lực lớn nhất của tôi bây giờ đến từ kỳ thi đại học. Bài tập và kiểm tra mỗi ngày nhiều đến mức tôi gần như không thở nổi, có lúc tôi thấy mình sắp không chịu nổi nữa.',
     note:'Câu hỏi có hai ý: nguồn áp lực và tình hình cụ thể — nói đủ cả hai.'},
    {q_zh:'你觉得压力给你带来了什么影响？有什么好处和坏处？',
     q_vn:'Em thấy áp lực đã ảnh hưởng đến em thế nào? Có mặt tốt và mặt xấu gì?',
     hint:'Dùng 一方面……，另一方面……; 不仅……而且……',
     sample:'压力的影响有两方面。一方面，它让我更努力，学习效率也提高了；另一方面，压力太大的时候，我会慌张，晚上也睡不好。',
     sample_vn:'Ảnh hưởng của áp lực có hai mặt. Một mặt, nó khiến tôi cố gắng hơn, hiệu quả học tập cũng tăng; mặt khác, khi áp lực quá lớn, tôi hay luống cuống, tối cũng ngủ không ngon.',
     note:'Hỏi "tốt và xấu" → dùng 一方面……，另一方面…… cho bố cục rõ ràng.'},
    {q_zh:'如果你觉得压力过大时，你有什么好的减轻压力的办法吗？',
     q_vn:'Khi thấy áp lực quá lớn, em có cách gì hay để giảm áp lực không?',
     hint:'Liệt kê 2–3 cách; dùng 先……，再……; 保持平衡',
     sample:'压力太大的时候，我先出去跑跑步，再听听音乐。我还会谨慎地安排时间，在学习和休息之间保持平衡。',
     sample_vn:'Khi áp lực quá lớn, tôi ra ngoài chạy bộ trước, rồi nghe nhạc. Tôi còn thận trọng sắp xếp thời gian, giữ cân bằng giữa học và nghỉ.',
     note:'Nêu cách cụ thể, có từ nối trình tự — người chấm đánh giá cao hơn câu chung chung.'},
    {q_zh:'你听说过“有压力才会有动力”这句话吗？你是否同意这种观点？为什么？',
     q_vn:'Em đã nghe câu "có áp lực mới có động lực" chưa? Em có đồng ý không? Vì sao?',
     hint:'Nêu quan điểm → lý do → ví dụ từ bài khoá (船 / 鬼谷)',
     sample:'我同意。就像课文里的船一样，有一定重量的时候才最安全。没有一点压力的人，就像风暴中的空船，反而容易被打翻。',
     sample_vn:'Tôi đồng ý. Giống như con tàu trong bài khoá, khi có trọng lượng nhất định mới an toàn nhất. Người không có chút áp lực nào giống con tàu rỗng giữa cơn bão, trái lại dễ bị lật.',
     note:'Câu hỏi quan điểm: nói rõ ĐỒNG Ý hay KHÔNG trước, rồi mới giải thích.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 25.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第25课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'听说你去爬华山了？够刺激吧？'},
            {sp:'女',zh:'没错，有些地方山路非常窄，吓得我腿直发抖。'}],
     q:'女的爬山时感觉怎么样？',qvn:'Người phụ nữ khi leo núi cảm thấy thế nào?',
     opts:['很害怕','很轻松','很无聊','很累'],ans:0,
     why:'吓得我腿直发抖 — sợ đến run chân. Bẫy: 够刺激吧 là người đàn ông đoán; 刺激 không phải 轻松.',
     words:['窄','发抖']},

    {n:2,
     lines:[{sp:'女',zh:'刘教授的讲座是明天下午几点？'},
            {sp:'男',zh:'本来定的是两点半，临时又通知说改在三点了。'}],
     q:'关于那个讲座，下列哪项正确？',qvn:'Về buổi tọa đàm đó, phương án nào đúng?',
     opts:['在两点半开始','时间改了','被取消了','在今天下午'],ans:1,
     why:'本来……两点半，临时……改在三点 → giờ đã đổi. Bẫy: 两点半 là giờ CŨ; buổi tọa đàm vào ngày mai.',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'我们运气真好，海面风平浪静，风景多美啊！'},
            {sp:'女',zh:'是啊，临出门时，我还担心会晕船呢。'}],
     q:'关于女的，可以知道什么？',qvn:'Về người phụ nữ, có thể biết được điều gì?',
     opts:['不喜欢看风景','现在晕船了','出门前担心晕船','觉得运气不好'],ans:2,
     why:'临出门时，我还担心会晕船 — trước khi ra khỏi nhà cô lo say sóng. Biển lặng nên giờ không say.',
     words:['风景']},

    {n:4,
     lines:[{sp:'男',zh:'早上起来时，突然感觉脑子特别晕，身体一下子失去平衡就摔倒了。'},
            {sp:'女',zh:'那后来怎么样了？您这个毛病可得好好查查了。'}],
     q:'男的为什么摔倒了？',qvn:'Vì sao người đàn ông bị ngã?',
     opts:['头晕，失去了平衡','地上太滑','被人撞了一下','跑得太快'],ans:0,
     why:'脑子特别晕 → 失去平衡 → 摔倒. Không có chi tiết đường trơn hay bị va phải.',
     words:['平衡','摔倒']},

    {n:5,
     lines:[{sp:'女',zh:'老师让你把作文再检查一下，上面还有标点错误。'},
            {sp:'男',zh:'好的，我现在就看。'}],
     q:'老师觉得作文还有什么问题？',qvn:'Cô giáo thấy bài văn còn vấn đề gì?',
     opts:['字数不够','内容太少','有错别字','标点有错误'],ans:3,
     why:'上面还有标点错误 — lỗi dấu câu. Không nhắc đến số chữ, nội dung hay chữ viết sai.',
     words:[]},

    {n:6,
     lines:[{sp:'女',zh:'听说你选刘宏老师做你的导师了？'},
            {sp:'男',zh:'是的，刘教授很有学问，分析问题也很透彻，就是有点儿严肃。'}],
     q:'男的觉得刘教授怎么样？',qvn:'Người đàn ông thấy giáo sư Lưu thế nào?',
     opts:['不太有学问','有点儿严肃','很幽默','分析问题不透彻'],ans:1,
     why:'就是有点儿严肃 — 就是 đưa ra nhược điểm duy nhất. Hai ý 有学问, 透彻 đều là khen.',
     words:['严肃']},

    {n:7,
     lines:[{sp:'男',zh:'您选的这两套房子户型很相似，只是面积相差了二十多平米。'},
            {sp:'女',zh:'房屋质量怎么样？'},
            {sp:'男',zh:'这个绝对有保证，我建议您买大一点儿的那套，住着更舒服。'},
            {sp:'女',zh:'大的是好，就是这个价格我有点儿承受不了。'}],
     q:'女的觉得男的推荐的房子怎么样？',qvn:'Người phụ nữ thấy căn nhà người đàn ông giới thiệu thế nào?',
     opts:['质量没有保证','面积太小','户型不好','价格太高'],ans:3,
     why:'价格我有点儿承受不了 — giá cao quá sức. Căn được giới thiệu là căn TO; chất lượng 绝对有保证.',
     words:['相似','承受']},

    {n:8,
     lines:[{sp:'男',zh:'昨晚的风实在太大了，顶着风都走不动路了。'},
            {sp:'女',zh:'我们家对面楼上的广告牌都让风给刮下来了。'},
            {sp:'男',zh:'太可怕了，没砸着人吧？'},
            {sp:'女',zh:'幸亏没有人，不过，警察、消防都来了。'}],
     q:'关于昨晚的风，从对话中可以知道什么？',qvn:'Về cơn gió đêm qua, có thể biết điều gì từ đoạn hội thoại?',
     opts:['砸伤了人','没人报警','把广告牌刮下来了','风不太大'],ans:2,
     why:'广告牌都让风给刮下来了 (让 = 被). Bẫy: 幸亏没有人 — không ai bị thương; cảnh sát, cứu hỏa đều đến.',
     words:['可怕']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp than phiền vì sắp thi mà bài vở quá nhiều.',
     a:{sp:'Bạn',zh:'下周就要考试了，作业还这么多，我快受不了了！',vn:'Tuần sau thi rồi mà bài tập còn nhiều thế này, tớ sắp chịu hết nổi rồi!'},
     need:['Dùng 简直','Đồng cảm với bạn'],
     sample:'我也是，这几天的作业简直多得做不完，我们一起想想办法吧。',
     samplePy:'Wǒ yě shì, zhè jǐ tiān de zuòyè jiǎnzhí duō de zuò bu wán, wǒmen yìqǐ xiǎngxiang bànfǎ ba.',
     sampleVn:'Tớ cũng thế, bài tập mấy hôm nay nhiều đến mức làm không hết, mình cùng nghĩ cách đi.',
     tip:'简直 + phóng đại; không viết 简直很多.'},

    {scene:'Em trai hỏi em đường đến thư viện trong khu phố.',
     a:{sp:'Em trai',zh:'图书馆怎么走啊？',vn:'Thư viện đi đường nào hả anh/chị?'},
     need:['Dùng 朝','Chỉ đường rõ ràng'],
     sample:'出了小区大门，你朝东走，过两个路口就到了。',
     samplePy:'Chūle xiǎoqū dàmén, nǐ cháo dōng zǒu, guò liǎng ge lùkǒu jiù dào le.',
     sampleVn:'Ra khỏi cổng khu nhà, em đi về hướng đông, qua hai ngã tư là tới.',
     tip:'朝 + hướng + 走 — cụm 朝东 đứng TRƯỚC động từ.'},

    {scene:'Bạn định dồn hết tiền tiết kiệm để mua một đôi giày rất đắt.',
     a:{sp:'Bạn',zh:'这双鞋太好看了，我想把存的钱都拿出来买！',vn:'Đôi giày này đẹp quá, tớ định lấy hết tiền tiết kiệm ra mua!'},
     need:['Dùng 谨慎','Khuyên bạn suy nghĩ kỹ'],
     sample:'花这么多钱，你还是谨慎一点儿吧，想清楚了再买也不迟。',
     samplePy:'Huā zhème duō qián, nǐ háishi jǐnshèn yìdiǎnr ba, xiǎng qīngchu le zài mǎi yě bù chí.',
     sampleVn:'Tiêu nhiều tiền thế, cậu nên thận trọng một chút, nghĩ kỹ rồi mua cũng chưa muộn.',
     tip:'谨慎 là tính từ: 谨慎一点儿 / 谨慎地考虑.'},

    {scene:'Bạn hỏi vì sao em bỏ hẳn thói quen thức khuya chơi game.',
     a:{sp:'Bạn',zh:'你以前每天玩游戏到半夜，现在怎么不玩了？',vn:'Trước cậu ngày nào cũng chơi game đến nửa đêm, giờ sao không chơi nữa?'},
     need:['Dùng 彻底','Nói lý do thay đổi'],
     sample:'上次考试没考好，我下决心彻底改掉这个坏习惯了。',
     samplePy:'Shàng cì kǎoshì méi kǎohǎo, wǒ xià juéxīn chèdǐ gǎidiào zhège huài xíguàn le.',
     sampleVn:'Lần thi trước làm bài không tốt, tớ quyết tâm bỏ hẳn thói quen xấu này rồi.',
     tip:'彻底 + 改掉 / 改变 — đứng trước động từ.'},

    {scene:'Mẹ lo em học quá sức, không chịu nghỉ ngơi.',
     a:{sp:'Mẹ',zh:'你天天学到这么晚，身体受得了吗？',vn:'Ngày nào con cũng học khuya thế, sức khỏe có chịu nổi không?'},
     need:['Dùng 承受 hoặc 平衡','Trấn an mẹ'],
     sample:'妈，您放心，我能承受住。我会在学习和休息之间保持平衡的。',
     samplePy:'Mā, nín fàngxīn, wǒ néng chéngshòu zhù. Wǒ huì zài xuéxí hé xiūxi zhījiān bǎochí pínghéng de.',
     sampleVn:'Mẹ yên tâm, con chịu được mà. Con sẽ giữ cân bằng giữa học và nghỉ.',
     tip:'承受住 = chịu được; 在 A 和 B 之间保持平衡.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Bản tin thời tiết trên truyền hình.',
     a:'明天海上风浪很大，大家别出海了啊。',b:'受恶劣天气影响，明天海上风浪较大，渔船请勿出海。',better:'b',
     why:'Bản tin dùng giọng văn viết, trang trọng: 受……影响, 较大, 请勿. Câu a là lời dặn miệng.'},

    {scene:'Em nhắn tin rủ bạn thân đi leo núi cuối tuần.',
     a:'周末去爬山吧？听说那儿风景特别美！',b:'兹定于周末组织游览活动，敬请准时参加。',better:'a',
     why:'Với bạn thân, câu khẩu ngữ tự nhiên. Câu b như thông báo của cơ quan.'},

    {scene:'Em viết bài văn nghị luận về áp lực nộp cô giáo.',
     a:'压力嘛，有点儿也挺好的。',b:'那些胸怀理想、有责任感的人，才能承受住压力。',better:'b',
     why:'Văn nghị luận cần câu văn viết, có hình ảnh và lập luận: 胸怀理想, 承受住. Câu a là khẩu ngữ.'},

    {scene:'Bạn vừa ngã xe đạp, em chạy đến hỏi han.',
     a:'你没事吧？摔着哪儿了？',b:'请问您是否因失去平衡而摔倒？',better:'a',
     why:'Tình huống gấp, thân mật → câu ngắn, khẩu ngữ. Câu b cứng nhắc như biên bản.'},

    {scene:'Hướng dẫn viên nhắc đoàn khách trước đoạn đường nguy hiểm.',
     a:'前面路段较窄，请大家谨慎通行，注意安全。',b:'前面的路窄死了，小心点儿啊！',better:'a',
     why:'Hướng dẫn viên nói với khách cần lịch sự, rõ ràng: 请大家, 谨慎通行. Câu b quá suồng sã (窄死了).'},

    {scene:'Em an ủi em gái đang rất hoảng vì làm mất chìa khóa.',
     a:'别慌张，我们先想想你今天去过哪儿。',b:'遇事应保持冷静，切勿慌张。',better:'a',
     why:'Nói với em nhỏ đang hoảng → câu gần gũi, kèm gợi ý cụ thể. Câu b như khẩu hiệu, văn viết (切勿).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 69)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Gặp sóng gió', cue:'一位老船长在返航中遇到了……，水手们……', words:['返航','恶劣','可怕','风浪','慌张']},
    {step:'Lệnh lạ', cue:'船长命令水手们打开……，朝里面……；年轻水手骂道……', words:['舱','使劲','朝','简直','沉']},
    {step:'Tàu thăng bằng', cue:'水位越升越高，……对船的威胁却……', words:['严肃','狂','猛烈','威胁','平衡']},
    {step:'Lời thuyền trưởng', cue:'几万吨的……很少被打翻，船在有一定……的时候最安全', words:['吨','钢铁','根基','重量']},
    {step:'“Thung lũng Quỷ”', cue:'另一个相似的故事：山路很窄，两边是……，导游让游客……', words:['相似','风景','窄','万丈','深渊','游览']},
    {step:'Lời hướng dẫn viên', cue:'一位妇女不解……；导游解释：出事的游客都是……', words:['发抖','负重','摔倒','妇女','起','丝毫','滚','风险','谨慎']},
    {step:'Hiệu ứng áp lực', cue:'这就是“压力效应”：有理想、有责任感的人才能……', words:['效应','胸','承受','和尚','钟','彻底']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: chuyện trên tàu → chuyện "Thung lũng Quỷ" → hiệu ứng áp lực?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng đúng 朝 (朝里面放水) và 简直 (简直是疯了) không?',
    'Có nói được ý nghĩa: vì sao tàu có nước lại an toàn, vì sao mang nặng lại an toàn?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 68–69) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 25 không có dạng 给括号里的词选择适当的位置)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['风险','谨慎','平衡','威胁','简直','恶劣'],
   cau:[
     {s:'对这种行为＿＿的队员只能让他离开球队。', dap:['恶劣']},
     {s:'在人口压力面前，经济发展、社会进步都受到了巨大＿＿。', dap:['威胁']},
     {s:'这毕竟是高考择校，我们必须＿＿对待。', dap:['谨慎']},
     {s:'初学骑自行车最重要的是注意保持＿＿。', dap:['平衡']},
     {s:'你决定在海外投资，有没有考虑到＿＿？', dap:['风险']},
     {s:'昨晚的比赛太精彩了，林丹＿＿太厉害了！', dap:['简直']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'不是你努力得不够，＿＿是努力的方向错了。', opts:['可怕','恐怕'], ans:1, giai:'恐怕 (phó từ) = e rằng, có lẽ — đứng trước một nhận định. 可怕 là tính từ "đáng sợ", không hợp.'},
     {s:'李岩之所以那么＿＿地返回北京，是因为得知了这个坏消息。', opts:['慌张','紧张'], ans:0, giai:'慌张地 + hành động: vội vã, cuống cuồng thể hiện ra ngoài. 紧张 là căng thẳng trong lòng, ít làm trạng ngữ cho hành động di chuyển.'},
     {s:'你的病好得不＿＿，还应该再休息几天。', opts:['彻底','完全'], ans:0, giai:'Bổ ngữ 好得不彻底 = khỏi chưa dứt điểm. 完全 không dùng làm bổ ngữ sau 得 như vậy.'},
     {s:'我实在不敢＿＿这么贵重的礼物。', opts:['承受','接受'], ans:1, giai:'Nhận quà → 接受. 承受 là chịu đựng điều nặng nề (压力, 痛苦).'}
   ]}
];
