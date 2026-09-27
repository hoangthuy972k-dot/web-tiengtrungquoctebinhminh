// ══════════════════════════════════════════
// DATA — HSK6 Bài 26: 奇异的灯光 (Ánh sáng kỳ lạ)
// 第七单元 经典阅读 · Nguồn: HSK标准教程6下 (tr. 62–70)
// Bài khoá: 奇异的灯光 (994 chữ) — 改编自《学圣人 悟做人》文章《囊萤照读》，编著：欧阳敏
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'捧',py:'pěng',pos:'Động từ',vn:'nâng, bưng, cầm bằng hai tay',hv:'phủng',em:'🤲',lesson:1,
   explain:['Động từ: dùng HAI TAY nâng, bưng một vật lên (thường nhẹ nhàng, trân trọng): 捧起书本, 捧着一杯茶, 捧起奖杯.','Còn làm lượng từ: 一捧水 / 一捧花生 (một vốc). Nghĩa bóng (khẩu ngữ): tâng bốc, ủng hộ — 捧场 (cổ vũ), 吹捧 (tâng bốc).'],
   usage:'捧 + 起 / 着 + N (书 / 茶 / 奖杯); 双手 + 捧着 + N; 把 + N + 捧 + 到 / 给…….',
   collo:['捧起书本','双手捧着','捧起奖杯','捧场'],
   ex_zh:'每当他捧起书本就像是走进了知识的海洋。',ex_py:'Měi dāng tā pěngqǐ shūběn jiù xiàng shì zǒujìnle zhīshi de hǎiyáng.',ex_vn:'Mỗi khi cầm quyển sách lên, anh ta như bước vào biển cả tri thức.',
   exList:[
     {zh:'每当他捧起书本就像是走进了知识的海洋。',py:'Měi dāng tā pěngqǐ shūběn jiù xiàng shì zǒujìnle zhīshi de hǎiyáng.',vn:'Mỗi khi cầm quyển sách lên, anh ta như bước vào biển cả tri thức.'},
     {zh:'她双手捧着一杯热茶，慢慢地走了过来。',py:'Tā shuāngshǒu pěngzhe yì bēi rè chá, mànmàn de zǒule guòlái.',vn:'Cô ấy hai tay bưng một cốc trà nóng, chậm rãi đi tới.'},
     {zh:'比赛结束后，队长高高地捧起了奖杯。',py:'Bǐsài jiéshù hòu, duìzhǎng gāogāo de pěngqǐle jiǎngbēi.',vn:'Trận đấu kết thúc, đội trưởng nâng cao chiếc cúp.'}
   ],
   colloFull:[
     {zh:'捧起书本',py:'pěngqǐ shūběn',vn:'cầm quyển sách lên'},
     {zh:'双手捧着',py:'shuāngshǒu pěngzhe',vn:'hai tay bưng'},
     {zh:'捧起奖杯',py:'pěngqǐ jiǎngbēi',vn:'nâng cúp'},
     {zh:'捧场',py:'pěngchǎng',vn:'đến cổ vũ, ủng hộ'},
     {zh:'一捧水',py:'yì pěng shuǐ',vn:'một vốc nước'}
   ],
   patterns:[
     {s:'捧 + 起 / 着 + N',m:'Nâng lên / đang bưng …'},
     {s:'把 + N + 捧 + 到 / 给 + …',m:'Bưng … đến / đưa cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi khi cầm quyển sách lên, cô ấy liền quên hết mọi phiền muộn.',answer:'每当她捧起书，就忘了所有的烦恼。',answerPy:'Měi dāng tā pěngqǐ shū, jiù wàngle suǒyǒu de fánnǎo.',
      note:'每当……就…… = mỗi khi … thì … (ôn HSK 5).',pair:'每当……就……'},
     {promptLang:'vi',prompt:'Đứa bé dùng hai tay bưng cốc nước đến trước mặt bà.',answer:'孩子用双手把一杯水捧到奶奶面前。',answerPy:'Háizi yòng shuāngshǒu bǎ yì bēi shuǐ pěngdào nǎinai miànqián.',
      note:'Câu 把 + V + 到 + nơi chốn (ôn HSK 4).',pair:'把'}
   ]},

  {n:2,zh:'天文',py:'tiānwén',pos:'Danh từ',vn:'thiên văn (học)',hv:'thiên văn',em:'🔭',lesson:1,
   explain:['Danh từ: các hiện tượng, quy luật của thiên thể (mặt trời, mặt trăng, các vì sao…) và môn khoa học nghiên cứu chúng: 天文学, 天文台 (đài thiên văn).','天文地理 = thiên văn địa lý, chỉ kiến thức rộng (上知天文，下知地理 = trên thông thiên văn, dưới tường địa lý). 天文数字 = con số khổng lồ.'],
   usage:'对天文感兴趣; 天文 + 学 / 台 / 爱好者; 天文地理; 天文数字 (con số cực lớn).',
   collo:['天文地理','天文学','天文台','天文爱好者'],
   ex_zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',ex_py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',ex_vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.',
   exList:[
     {zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.'},
     {zh:'这个孩子从小就对天文特别感兴趣，常常用望远镜看星星。',py:'Zhège háizi cóngxiǎo jiù duì tiānwén tèbié gǎn xìngqù, chángcháng yòng wàngyuǎnjìng kàn xīngxing.',vn:'Đứa trẻ này từ nhỏ đã đặc biệt thích thiên văn, thường dùng kính viễn vọng ngắm sao.'},
     {zh:'这座城市的房价高得像天文数字，普通人根本买不起。',py:'Zhè zuò chéngshì de fángjià gāo de xiàng tiānwén shùzì, pǔtōng rén gēnběn mǎi bu qǐ.',vn:'Giá nhà ở thành phố này cao như con số thiên văn, người bình thường hoàn toàn không mua nổi.'}
   ],
   colloFull:[
     {zh:'天文地理',py:'tiānwén dìlǐ',vn:'thiên văn địa lý'},
     {zh:'天文学',py:'tiānwénxué',vn:'thiên văn học'},
     {zh:'天文台',py:'tiānwéntái',vn:'đài thiên văn'},
     {zh:'天文爱好者',py:'tiānwén àihàozhě',vn:'người yêu thích thiên văn'},
     {zh:'天文数字',py:'tiānwén shùzì',vn:'con số khổng lồ'}
   ],
   patterns:[
     {s:'对天文感兴趣',m:'Thích / quan tâm đến thiên văn'},
     {s:'上知天文，下知地理',m:'Trên thông thiên văn, dưới tường địa lý (hiểu biết rộng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tôi hiểu biết rộng, trên thông thiên văn dưới tường địa lý, cái gì cũng biết.',answer:'我爷爷知识丰富，上知天文，下知地理，什么都懂。',answerPy:'Wǒ yéye zhīshi fēngfù, shàng zhī tiānwén, xià zhī dìlǐ, shénme dōu dǒng.',
      note:'什么都 + V = cái gì cũng … (ôn HSK 3).',pair:'什么都'},
     {promptLang:'vi',prompt:'Cậu ấy mê thiên văn, tối nào cũng lên sân thượng ngắm sao.',answer:'他迷上了天文，每天晚上都到楼顶上看星星。',answerPy:'Tā míshangle tiānwén, měi tiān wǎnshang dōu dào lóudǐng shang kàn xīngxing.',
      note:'迷上 = bắt đầu mê (V + 上 chỉ kết quả, ôn HSK 4); 每天……都…….',pair:'迷上'}
   ]},

  {n:3,zh:'儒家',py:'Rújiā',pos:'Danh từ',vn:'Nho gia, đạo Nho',hv:'Nho gia',em:'📜',lesson:1,
   explain:['Danh từ: trường phái tư tưởng do Khổng Tử (孔子) sáng lập thời Xuân Thu, đề cao 仁 (nhân), 礼 (lễ), 孝 (hiếu); ảnh hưởng sâu sắc tới Trung Quốc, Việt Nam, Hàn Quốc, Nhật Bản.','儒家经典 = kinh điển Nho gia (Tứ thư, Ngũ kinh). Viết hoa khi phiên âm: Rújiā.'],
   usage:'儒家 + 经典 / 思想 / 文化 / 学说; 受儒家思想影响.',
   collo:['儒家经典','儒家思想','儒家文化','儒家学说'],
   ex_zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',ex_py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',ex_vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.',
   exList:[
     {zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.'},
     {zh:'儒家思想对越南的传统文化也有很深的影响。',py:'Rújiā sīxiǎng duì Yuènán de chuántǒng wénhuà yě yǒu hěn shēn de yǐngxiǎng.',vn:'Tư tưởng Nho gia cũng có ảnh hưởng sâu sắc tới văn hóa truyền thống Việt Nam.'},
     {zh:'孔子是儒家学派的创始人。',py:'Kǒngzǐ shì Rújiā xuépài de chuàngshǐrén.',vn:'Khổng Tử là người sáng lập trường phái Nho gia.'}
   ],
   colloFull:[
     {zh:'儒家经典',py:'Rújiā jīngdiǎn',vn:'kinh điển Nho gia'},
     {zh:'儒家思想',py:'Rújiā sīxiǎng',vn:'tư tưởng Nho gia'},
     {zh:'儒家文化',py:'Rújiā wénhuà',vn:'văn hóa Nho giáo'},
     {zh:'儒家学说',py:'Rújiā xuéshuō',vn:'học thuyết Nho gia'},
     {zh:'儒家学派',py:'Rújiā xuépài',vn:'trường phái Nho gia'}
   ],
   patterns:[
     {s:'儒家 + 思想 / 经典 / 文化',m:'Tư tưởng / kinh điển / văn hóa Nho gia'},
     {s:'受(到) + 儒家思想 + (的)影响',m:'Chịu ảnh hưởng của tư tưởng Nho gia'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khổng Tử là người sáng lập Nho gia, ảnh hưởng của ông rất sâu rộng.',answer:'孔子是儒家的创始人，他的影响非常深远。',answerPy:'Kǒngzǐ shì Rújiā de chuàngshǐrén, tā de yǐngxiǎng fēicháng shēnyuǎn.',
      note:'影响 dùng làm danh từ (ôn HSK 3); 深远 = sâu xa, lâu dài.',pair:'影响'},
     {promptLang:'vi',prompt:'Nhiều gia đình Việt Nam đến nay vẫn chịu ảnh hưởng của tư tưởng Nho gia.',answer:'很多越南家庭至今仍受儒家思想的影响。',answerPy:'Hěn duō Yuènán jiātíng zhìjīn réng shòu Rújiā sīxiǎng de yǐngxiǎng.',
      note:'受……的影响 = chịu ảnh hưởng của … (ôn HSK 4); 至今 = đến nay (HSK 5).',pair:'受……影响'}
   ]},

  {n:4,zh:'传记',py:'zhuànjì',pos:'Danh từ',vn:'truyện ký, tiểu sử',hv:'truyện ký',em:'📖',lesson:1,
   explain:['Danh từ: tác phẩm ghi lại cuộc đời, sự nghiệp của một người: 名人传记 (tiểu sử người nổi tiếng); 自传 = tự truyện.','传 ở đây đọc zhuàn (như 自传, 水浒传), KHÔNG đọc chuán (传统, 传说).'],
   usage:'名人 / 人物 + 传记; 为 + ai + 写传记; 一部 / 一本 + 传记.',
   collo:['名人传记','人物传记','写传记','传记散文'],
   ex_zh:'我爱读书，尤其是名人传记。',ex_py:'Wǒ ài dú shū, yóuqí shì míngrén zhuànjì.',ex_vn:'Tôi thích đọc sách, nhất là tiểu sử của những người nổi tiếng.',
   exList:[
     {zh:'我爱读书，尤其是名人传记。',py:'Wǒ ài dú shū, yóuqí shì míngrén zhuànjì.',vn:'Tôi thích đọc sách, nhất là tiểu sử của những người nổi tiếng.'},
     {zh:'读了这位科学家的传记，我才知道他年轻时吃过那么多苦。',py:'Dúle zhè wèi kēxuéjiā de zhuànjì, wǒ cái zhīdao tā niánqīng shí chīguo nàme duō kǔ.',vn:'Đọc tiểu sử của nhà khoa học này, tôi mới biết hồi trẻ ông đã chịu nhiều khổ cực như vậy.'},
     {zh:'他退休后打算为自己的父亲写一部传记。',py:'Tā tuìxiū hòu dǎsuan wèi zìjǐ de fùqin xiě yí bù zhuànjì.',vn:'Sau khi nghỉ hưu, ông ấy định viết một cuốn tiểu sử về cha mình.'}
   ],
   colloFull:[
     {zh:'名人传记',py:'míngrén zhuànjì',vn:'tiểu sử người nổi tiếng'},
     {zh:'人物传记',py:'rénwù zhuànjì',vn:'truyện ký nhân vật'},
     {zh:'写传记',py:'xiě zhuànjì',vn:'viết tiểu sử'},
     {zh:'传记散文',py:'zhuànjì sǎnwén',vn:'truyện ký và tản văn'},
     {zh:'传记文学',py:'zhuànjì wénxué',vn:'văn học truyện ký'}
   ],
   patterns:[
     {s:'为 + ai + 写传记',m:'Viết tiểu sử cho ai'},
     {s:'一部 / 一本 + 传记',m:'Một cuốn tiểu sử'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc tiểu sử người nổi tiếng giúp tôi hiểu rằng thành công không đến dễ dàng.',answer:'读名人传记让我明白了，成功来之不易。',answerPy:'Dú míngrén zhuànjì ràng wǒ míngbaile, chénggōng lái zhī bú yì.',
      note:'让 + người + V (ôn HSK 3); 来之不易 = có được không dễ.',pair:'让'},
     {promptLang:'vi',prompt:'Nhà văn ấy đã bỏ ra ba năm để viết tiểu sử cho mẹ mình.',answer:'那位作家花了三年时间为自己的母亲写传记。',answerPy:'Nà wèi zuòjiā huāle sān nián shíjiān wèi zìjǐ de mǔqīn xiě zhuànjì.',
      note:'花 + thời gian + V (ôn HSK 3); 为 + ai + V = làm gì cho ai.',pair:'为'}
   ]},

  {n:5,zh:'散文',py:'sǎnwén',pos:'Danh từ',vn:'tản văn, văn xuôi',hv:'tản văn',em:'✍️',lesson:1,
   explain:['Danh từ: ① (nghĩa hẹp) tản văn — thể văn ngắn, tự do (ghi chép, trữ tình, nghị luận…), phân biệt với thơ, tiểu thuyết, kịch; ② (nghĩa rộng) văn xuôi, đối lập với văn vần (韵文).','散 ở đây đọc sǎn (thanh 3), khác 散步 sànbù (thanh 4).'],
   usage:'一篇 + 散文; 散文 + 集; 写 / 读 + 散文; 抒情散文.',
   collo:['传记散文','写散文','散文集','一篇散文'],
   ex_zh:'他最喜欢读朱自清的散文，尤其是《背影》。',ex_py:'Tā zuì xǐhuan dú Zhū Zìqīng de sǎnwén, yóuqí shì 《Bèiyǐng》.',ex_vn:'Anh ấy thích nhất là đọc tản văn của Chu Tự Thanh, đặc biệt là bài "Bóng lưng".',
   exList:[
     {zh:'他最喜欢读朱自清的散文，尤其是《背影》。',py:'Tā zuì xǐhuan dú Zhū Zìqīng de sǎnwén, yóuqí shì 《Bèiyǐng》.',vn:'Anh ấy thích nhất là đọc tản văn của Chu Tự Thanh, đặc biệt là bài "Bóng lưng".'},
     {zh:'这本散文集收录了作者二十多年来写的五十篇文章。',py:'Zhè běn sǎnwénjí shōulùle zuòzhě èrshí duō nián lái xiě de wǔshí piān wénzhāng.',vn:'Tập tản văn này thu thập năm mươi bài tác giả viết trong hơn hai mươi năm.'},
     {zh:'她的散文语言优美、感情真挚，读起来像一首诗。',py:'Tā de sǎnwén yǔyán yōuměi, gǎnqíng zhēnzhì, dú qǐlái xiàng yì shǒu shī.',vn:'Tản văn của chị ấy lời lẽ đẹp, tình cảm chân thành, đọc lên như một bài thơ.'}
   ],
   colloFull:[
     {zh:'传记散文',py:'zhuànjì sǎnwén',vn:'truyện ký và tản văn'},
     {zh:'写散文',py:'xiě sǎnwén',vn:'viết tản văn'},
     {zh:'散文集',py:'sǎnwénjí',vn:'tập tản văn'},
     {zh:'一篇散文',py:'yì piān sǎnwén',vn:'một bài tản văn'},
     {zh:'抒情散文',py:'shūqíng sǎnwén',vn:'tản văn trữ tình'}
   ],
   patterns:[
     {s:'一篇 + 散文',m:'Một bài tản văn (lượng từ 篇)'},
     {s:'散文 + 集',m:'Tập tản văn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tản văn của ông ấy tuy ngắn nhưng rất cảm động.',answer:'他的散文虽然很短，但是非常感人。',answerPy:'Tā de sǎnwén suīrán hěn duǎn, dànshì fēicháng gǎnrén.',
      note:'虽然……但是…… (ôn HSK 2–4); 感人 = cảm động.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cô giáo yêu cầu chúng tôi mỗi tuần viết một bài tản văn khoảng 500 chữ.',answer:'老师要求我们每周写一篇五百字左右的散文。',answerPy:'Lǎoshī yāoqiú wǒmen měi zhōu xiě yì piān wǔbǎi zì zuǒyòu de sǎnwén.',
      note:'Số lượng + 左右 = khoảng (ôn HSK 3); lượng từ 篇.',pair:'左右'}
   ]},

  {n:6,zh:'历代',py:'lìdài',pos:'Danh từ',vn:'các đời, các triều đại',hv:'lịch đại',em:'🏯',lesson:1,
   explain:['Danh từ: các thời đại, các triều đại đã qua trong lịch sử (历 = đã trải qua, 代 = đời). Đứng trước danh từ làm định ngữ: 历代诗词, 历代名人, 历代王朝.','Văn viết; 历代以来 = từ bao đời nay. Khác 古代 (thời cổ nói chung).'],
   usage:'历代 + N (诗词 / 诗人 / 名人 / 王朝 / 帝王); 被历代……收藏 / 称赞.',
   collo:['历代诗词','历代名人','历代王朝','历代人'],
   ex_zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',ex_py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',ex_vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.',
   exList:[
     {zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.'},
     {zh:'这本书收集了历代著名诗人的作品。',py:'Zhè běn shū shōujíle lìdài zhùmíng shīrén de zuòpǐn.',vn:'Cuốn sách này sưu tập tác phẩm của các nhà thơ nổi tiếng qua các đời.'},
     {zh:'西湖的美景吸引了历代文人前来游览。',py:'Xīhú de měijǐng xīyǐnle lìdài wénrén qiánlái yóulǎn.',vn:'Cảnh đẹp Tây Hồ đã thu hút văn nhân bao đời tới du ngoạn.'}
   ],
   colloFull:[
     {zh:'历代诗词',py:'lìdài shīcí',vn:'thơ từ các đời'},
     {zh:'历代名人',py:'lìdài míngrén',vn:'danh nhân các đời'},
     {zh:'历代王朝',py:'lìdài wángcháo',vn:'các triều đại'},
     {zh:'历代人',py:'lìdài rén',vn:'người các đời'},
     {zh:'历代帝王',py:'lìdài dìwáng',vn:'các đời vua chúa'}
   ],
   patterns:[
     {s:'历代 + N (诗人 / 王朝 / 名人)',m:'… qua các đời'},
     {s:'被历代 + N + V (收藏 / 称赞)',m:'Được … các đời (cất giữ / khen ngợi)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức tranh này từng được các đời hoàng đế cất giữ, vô cùng quý giá.',answer:'这幅画曾被历代皇帝收藏，非常珍贵。',answerPy:'Zhè fú huà céng bèi lìdài huángdì shōucáng, fēicháng zhēnguì.',
      note:'Câu bị động 被 (ôn HSK 3–4); 曾 = từng (HSK 5).',pair:'被'},
     {promptLang:'vi',prompt:'Tôi rất thích đọc thơ từ các đời, nhất là thơ Đường.',answer:'我很喜欢读历代诗词，尤其是唐诗。',answerPy:'Wǒ hěn xǐhuan dú lìdài shīcí, yóuqí shì Tángshī.',
      note:'尤其是 = nhất là (ôn HSK 4).',pair:'尤其'}
   ]},

  {n:7,zh:'着迷',py:'zháo mí',pos:'Động từ',vn:'say mê, mê mẩn',hv:'trước mê',em:'😍',lesson:1,
   explain:['Động từ (ly hợp): bị cuốn hút tới mức say mê, không dứt ra được. Cấu trúc: A 使 / 让 B 着迷; B 对 A 着迷; tách ra: 着了迷.','着 ở đây đọc zháo (như 着急, 着火, 睡着), không đọc zhe / zhuó.'],
   usage:'A + 使 / 让 + 人 + 着迷; 对 + N + 着迷; V + 得 + 着了迷.',
   collo:['使人着迷','让人着迷','对……着迷','看得着迷'],
   ex_zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',ex_py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',ex_vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.',
   exList:[
     {zh:'天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。',py:'Tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí.',vn:'Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời — thứ gì cũng khiến anh ta say mê.'},
     {zh:'孩子们听故事听得着了迷，连饭都忘了吃。',py:'Háizimen tīng gùshi tīng de zháole mí, lián fàn dōu wàngle chī.',vn:'Bọn trẻ nghe kể chuyện mê mẩn đến mức quên cả ăn cơm.'},
     {zh:'他对中国书法特别着迷，每天都要练两个小时。',py:'Tā duì Zhōngguó shūfǎ tèbié zháomí, měi tiān dōu yào liàn liǎng ge xiǎoshí.',vn:'Anh ấy đặc biệt say mê thư pháp Trung Quốc, ngày nào cũng luyện hai tiếng.'}
   ],
   colloFull:[
     {zh:'使人着迷',py:'shǐ rén zháomí',vn:'khiến người ta say mê'},
     {zh:'让人着迷',py:'ràng rén zháomí',vn:'làm người ta mê mẩn'},
     {zh:'对……着迷',py:'duì…… zháomí',vn:'say mê …'},
     {zh:'看得着迷',py:'kàn de zháomí',vn:'xem say sưa'},
     {zh:'着了迷',py:'zháole mí',vn:'mê mẩn rồi'}
   ],
   patterns:[
     {s:'A + 使 / 让 + 人 + 着迷',m:'A khiến người ta say mê'},
     {s:'对 + N + 着迷',m:'Say mê …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy chơi trò chơi này mê mẩn đến mức quên cả ăn cơm.',answer:'他玩这个游戏玩得着了迷，连饭都忘了吃。',answerPy:'Tā wán zhège yóuxì wán de zháole mí, lián fàn dōu wàngle chī.',
      note:'连……都…… (ôn HSK 4); V + O + V + 得 + bổ ngữ trạng thái.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Phong cảnh ở đây đẹp đến mức khiến mọi du khách đều mê mẩn.',answer:'这里的风景美得让每一位游客都着迷。',answerPy:'Zhèlǐ de fēngjǐng měi de ràng měi yí wèi yóukè dōu zháomí.',
      note:'Adj + 得 + 让 + người + V (bổ ngữ trạng thái, ôn HSK 4).',pair:'得'}
   ]},

  {n:8,zh:'熏陶',py:'xūntáo',pos:'Động từ',vn:'hun đúc, ảnh hưởng dần',hv:'huân đào',em:'🌱',lesson:1,
   explain:['Động từ / danh từ: (tư tưởng, tính cách, sở thích…) chịu ảnh hưởng TỐT, thấm dần qua thời gian dài — như khói hun (熏) và nung gốm (陶).','Mang nghĩa tích cực, văn viết: 受到……的熏陶, 在……的熏陶下, ……的长期熏陶. Ảnh hưởng xấu thì dùng 影响 / 染上.'],
   usage:'受到 + N + 的熏陶; 在 + N + 的熏陶下; 长期 / 艺术 / 文化 + 熏陶.',
   collo:['长期熏陶','受到熏陶','艺术熏陶','文化熏陶'],
   ex_zh:'历史文化的长期熏陶，使他思维敏捷，胸怀宽广。',ex_py:'Lìshǐ wénhuà de chángqī xūntáo, shǐ tā sīwéi mǐnjié, xiōnghuái kuānguǎng.',ex_vn:'Sự hun đúc lâu dài của lịch sử văn hóa khiến anh ta tư duy nhanh nhạy, tấm lòng rộng mở.',
   exList:[
     {zh:'历史文化的长期熏陶，使他思维敏捷，胸怀宽广。',py:'Lìshǐ wénhuà de chángqī xūntáo, shǐ tā sīwéi mǐnjié, xiōnghuái kuānguǎng.',vn:'Sự hun đúc lâu dài của lịch sử văn hóa khiến anh ta tư duy nhanh nhạy, tấm lòng rộng mở.'},
     {zh:'她从小受到音乐的熏陶，五岁就开始弹钢琴。',py:'Tā cóngxiǎo shòudào yīnyuè de xūntáo, wǔ suì jiù kāishǐ tán gāngqín.',vn:'Cô ấy từ nhỏ đã được âm nhạc hun đúc, năm tuổi đã bắt đầu chơi đàn piano.'},
     {zh:'在父母的熏陶下，他养成了每天读书的好习惯。',py:'Zài fùmǔ de xūntáo xià, tā yǎngchéngle měi tiān dú shū de hǎo xíguàn.',vn:'Nhờ ảnh hưởng của bố mẹ, cậu ấy đã hình thành thói quen tốt là ngày nào cũng đọc sách.'}
   ],
   colloFull:[
     {zh:'长期熏陶',py:'chángqī xūntáo',vn:'hun đúc lâu dài'},
     {zh:'受到熏陶',py:'shòudào xūntáo',vn:'được hun đúc'},
     {zh:'艺术熏陶',py:'yìshù xūntáo',vn:'sự hun đúc của nghệ thuật'},
     {zh:'文化熏陶',py:'wénhuà xūntáo',vn:'sự hun đúc của văn hóa'},
     {zh:'家庭的熏陶',py:'jiātíng de xūntáo',vn:'ảnh hưởng của gia đình'}
   ],
   patterns:[
     {s:'受到 + N + 的熏陶',m:'Được … hun đúc'},
     {s:'在 + N + 的熏陶下',m:'Dưới sự hun đúc của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Do được gia đình hun đúc, anh ấy từ nhỏ đã yêu văn học.',answer:'由于受到家庭的熏陶，他从小就热爱文学。',answerPy:'Yóuyú shòudào jiātíng de xūntáo, tā cóngxiǎo jiù rè\'ài wénxué.',
      note:'由于…… = do … (ôn HSK 4); 从小就 nhấn "từ rất sớm".',pair:'由于'},
     {promptLang:'vi',prompt:'Dưới ảnh hưởng của ông nội, tôi dần dần thích thư pháp.',answer:'在爷爷的熏陶下，我渐渐喜欢上了书法。',answerPy:'Zài yéye de xūntáo xià, wǒ jiànjiàn xǐhuan shangle shūfǎ.',
      note:'在……下 = dưới (sự) … (ôn HSK 5); 渐渐 = dần dần (HSK 4).',pair:'在……下'}
   ]},

  {n:9,zh:'胸怀',py:'xiōnghuái',pos:'Danh từ',vn:'tấm lòng, lòng dạ, khí độ',hv:'hung hoài',em:'💗',lesson:1,
   explain:['Danh từ: tấm lòng, khí độ của con người (rộng lượng hay hẹp hòi). Hay đi với 宽广, 宽阔, 博大, 开阔.','Còn là động từ (văn viết): ôm ấp trong lòng — 胸怀大志 (ôm chí lớn), 胸怀祖国.'],
   usage:'胸怀 + 宽广 / 博大; 有 + ……的胸怀; 胸怀 + 大志 (động từ).',
   collo:['胸怀宽广','宽广的胸怀','胸怀大志','博大的胸怀'],
   ex_zh:'历史文化的长期熏陶，使他思维敏捷，胸怀宽广。',ex_py:'Lìshǐ wénhuà de chángqī xūntáo, shǐ tā sīwéi mǐnjié, xiōnghuái kuānguǎng.',ex_vn:'Sự hun đúc lâu dài của lịch sử văn hóa khiến anh ta tư duy nhanh nhạy, tấm lòng rộng mở.',
   exList:[
     {zh:'历史文化的长期熏陶，使他思维敏捷，胸怀宽广。',py:'Lìshǐ wénhuà de chángqī xūntáo, shǐ tā sīwéi mǐnjié, xiōnghuái kuānguǎng.',vn:'Sự hun đúc lâu dài của lịch sử văn hóa khiến anh ta tư duy nhanh nhạy, tấm lòng rộng mở.'},
     {zh:'一个胸怀宽广的人，不会为了一点儿小事跟别人计较。',py:'Yí ge xiōnghuái kuānguǎng de rén, bú huì wèile yìdiǎnr xiǎoshì gēn biérén jìjiào.',vn:'Người có tấm lòng rộng lượng sẽ không vì chuyện nhỏ mà so đo với người khác.'},
     {zh:'他从小就胸怀大志，立志要当一名科学家。',py:'Tā cóngxiǎo jiù xiōnghuái dàzhì, lìzhì yào dāng yì míng kēxuéjiā.',vn:'Từ nhỏ cậu ấy đã ôm chí lớn, quyết chí trở thành một nhà khoa học.'}
   ],
   colloFull:[
     {zh:'胸怀宽广',py:'xiōnghuái kuānguǎng',vn:'tấm lòng rộng lượng'},
     {zh:'宽广的胸怀',py:'kuānguǎng de xiōnghuái',vn:'tấm lòng bao dung'},
     {zh:'胸怀大志',py:'xiōnghuái dàzhì',vn:'ôm chí lớn'},
     {zh:'博大的胸怀',py:'bódà de xiōnghuái',vn:'tấm lòng bao la'},
     {zh:'开阔胸怀',py:'kāikuò xiōnghuái',vn:'mở rộng tấm lòng'}
   ],
   patterns:[
     {s:'胸怀 + 宽广 / 博大',m:'Tấm lòng rộng lớn, bao dung'},
     {s:'有 + (宽广 / 博大) + 的胸怀',m:'Có tấm lòng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một người lãnh đạo giỏi cần có tấm lòng rộng lượng.',answer:'好的领导应该有宽广的胸怀。',answerPy:'Hǎo de lǐngdǎo yīnggāi yǒu kuānguǎng de xiōnghuái.',
      note:'应该 = nên, cần (ôn HSK 3).',pair:'应该'},
     {promptLang:'vi',prompt:'Bà ngoại tôi lòng dạ rộng lượng, chưa bao giờ so đo với người khác.',answer:'我姥姥胸怀宽广，从来不跟别人计较。',answerPy:'Wǒ lǎolao xiōnghuái kuānguǎng, cónglái bù gēn biérén jìjiào.',
      note:'从来不 = chưa bao giờ (ôn HSK 4); 计较 ôn HSK 6 bài 6.',pair:'从来'}
   ]},

  {n:10,zh:'不堪',py:'bùkān',pos:'Động từ',vn:'không chịu nổi, không chịu thấu',hv:'bất kham',em:'😫',lesson:1,
   explain:['Động từ: không chịu đựng nổi, thường đi với động từ hai âm tiết: 不堪忍受, 不堪设想 (không dám nghĩ tới), 不堪重负, 不堪……的困扰.','Đứng SAU tính từ tiêu cực biểu thị mức độ cực kỳ: 疲惫不堪 (mệt rã rời), 痛苦不堪, 拥挤不堪.'],
   usage:'不堪 + V (忍受 / 设想 / 回首); 不堪 + N + 的困扰 / 骚扰; Adj (疲惫 / 痛苦 / 拥挤) + 不堪.',
   collo:['不堪忍受','不堪设想','疲惫不堪','痛苦不堪'],
   ex_zh:'冬季使人不堪忍受的严寒以及炎热夏天蚊子的骚扰都没有影响他读书的热情。',ex_py:'Dōngjì shǐ rén bùkān rěnshòu de yánhán yǐjí yánrè xiàtiān wénzi de sāorǎo dōu méiyǒu yǐngxiǎng tā dú shū de rèqíng.',ex_vn:'Cái giá rét không chịu nổi của mùa đông và sự quấy nhiễu của muỗi mùa hè nóng bức đều không ảnh hưởng tới niềm say mê đọc sách của anh ta.',
   exList:[
     {zh:'冬季使人不堪忍受的严寒以及炎热夏天蚊子的骚扰都没有影响他读书的热情。',py:'Dōngjì shǐ rén bùkān rěnshòu de yánhán yǐjí yánrè xiàtiān wénzi de sāorǎo dōu méiyǒu yǐngxiǎng tā dú shū de rèqíng.',vn:'Cái giá rét không chịu nổi của mùa đông và sự quấy nhiễu của muỗi mùa hè nóng bức đều không ảnh hưởng tới niềm say mê đọc sách của anh ta.'},
     {zh:'他们不堪北京房价过高的困扰，搬到别的城市居住了。',py:'Tāmen bùkān Běijīng fángjià guò gāo de kùnrǎo, bāndào biéde chéngshì jūzhù le.',vn:'Không chịu nổi nỗi khổ vì giá nhà ở Bắc Kinh quá cao, họ đã chuyển sang sống ở thành phố khác.'},
     {zh:'连续加了一个星期的班，大家都疲惫不堪。',py:'Liánxù jiāle yí ge xīngqī de bān, dàjiā dōu píbèi bùkān.',vn:'Tăng ca liền một tuần, ai nấy đều mệt rã rời.'}
   ],
   colloFull:[
     {zh:'不堪忍受',py:'bùkān rěnshòu',vn:'không chịu đựng nổi'},
     {zh:'不堪设想',py:'bùkān shèxiǎng',vn:'không dám nghĩ tới (hậu quả)'},
     {zh:'疲惫不堪',py:'píbèi bùkān',vn:'mệt rã rời'},
     {zh:'痛苦不堪',py:'tòngkǔ bùkān',vn:'đau khổ vô cùng'},
     {zh:'拥挤不堪',py:'yōngjǐ bùkān',vn:'chen chúc không chịu nổi'}
   ],
   patterns:[
     {s:'不堪 + V / 不堪 + N + 的困扰',m:'Không chịu nổi …'},
     {s:'Adj (tiêu cực) + 不堪',m:'… vô cùng, … hết mức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu lái xe sau khi uống rượu, hậu quả thật không dám nghĩ tới.',answer:'如果酒后开车，后果不堪设想。',answerPy:'Rúguǒ jiǔ hòu kāichē, hòuguǒ bùkān shèxiǎng.',
      note:'如果…… (ôn HSK 3); 后果不堪设想 là cụm cố định.',pair:'如果'},
     {promptLang:'vi',prompt:'Không chịu nổi tiếng ồn quấy nhiễu, anh ấy đành phải chuyển nhà.',answer:'他不堪噪音的骚扰，只好搬了家。',answerPy:'Tā bùkān zàoyīn de sāorǎo, zhǐhǎo bānle jiā.',
      note:'只好 = đành phải (ôn HSK 4); 噪音 ôn HSK 6 bài 12.',pair:'只好'}
   ]},

  {n:11,zh:'炎热',py:'yánrè',pos:'Tính từ',vn:'rất nóng, nóng nực, nóng bức',hv:'viêm nhiệt',em:'🥵',lesson:1,
   explain:['Tính từ: (thời tiết, khí hậu) rất nóng, nóng gay gắt; văn viết. Dùng cho mùa, ngày, khí hậu, vùng đất: 炎热的夏天, 天气炎热, 气候炎热.','Không dùng cho đồ vật (×炎热的水 → 热水 / 烫). Trái nghĩa: 寒冷, 严寒.'],
   usage:'天气 / 气候 + 炎热; 炎热的 + 夏天 / 中午 / 地区; 炎热难耐.',
   collo:['炎热的夏天','天气炎热','气候炎热','炎热的中午'],
   ex_zh:'炎热夏天蚊子的骚扰都没有影响他读书的热情。',ex_py:'Yánrè xiàtiān wénzi de sāorǎo dōu méiyǒu yǐngxiǎng tā dú shū de rèqíng.',ex_vn:'Sự quấy nhiễu của muỗi mùa hè nóng bức đều không ảnh hưởng tới niềm say mê đọc sách của anh ta.',
   exList:[
     {zh:'炎热夏天蚊子的骚扰都没有影响他读书的热情。',py:'Yánrè xiàtiān wénzi de sāorǎo dōu méiyǒu yǐngxiǎng tā dú shū de rèqíng.',vn:'Sự quấy nhiễu của muỗi mùa hè nóng bức đều không ảnh hưởng tới niềm say mê đọc sách của anh ta.'},
     {zh:'这里气候炎热，一年四季都可以游泳。',py:'Zhèlǐ qìhòu yánrè, yì nián sìjì dōu kěyǐ yóuyǒng.',vn:'Ở đây khí hậu nóng, bốn mùa trong năm đều có thể bơi.'},
     {zh:'炎热的中午，街上几乎看不到行人。',py:'Yánrè de zhōngwǔ, jiē shang jīhū kàn bu dào xíngrén.',vn:'Buổi trưa nóng nực, ngoài phố hầu như không thấy người đi đường.'}
   ],
   colloFull:[
     {zh:'炎热的夏天',py:'yánrè de xiàtiān',vn:'mùa hè nóng bức'},
     {zh:'天气炎热',py:'tiānqì yánrè',vn:'thời tiết nóng nực'},
     {zh:'气候炎热',py:'qìhòu yánrè',vn:'khí hậu nóng'},
     {zh:'炎热的中午',py:'yánrè de zhōngwǔ',vn:'buổi trưa nóng nực'},
     {zh:'炎热难耐',py:'yánrè nánnài',vn:'nóng không chịu nổi'}
   ],
   patterns:[
     {s:'天气 / 气候 + 炎热',m:'Thời tiết / khí hậu nóng'},
     {s:'炎热的 + 夏天 / 中午',m:'Mùa hè / buổi trưa nóng bức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời nóng nực thế này, chúng mình đừng ra ngoài thì hơn.',answer:'天气这么炎热，咱们还是别出去了。',answerPy:'Tiānqì zhème yánrè, zánmen háishi bié chūqu le.',
      note:'还是 + V = tốt hơn là … (lời khuyên, ôn HSK 3–4).',pair:'还是'},
     {promptLang:'vi',prompt:'Dù trời nóng bức, các công nhân vẫn làm việc ngoài trời.',answer:'尽管天气炎热，工人们仍然在室外工作。',answerPy:'Jǐnguǎn tiānqì yánrè, gōngrénmen réngrán zài shìwài gōngzuò.',
      note:'尽管……仍然…… = dù … vẫn … (ôn HSK 4–5).',pair:'尽管'}
   ]},

  {n:12,zh:'骚扰',py:'sāorǎo',pos:'Động từ',vn:'quấy rối, quấy nhiễu, làm phiền',hv:'tao nhiễu',em:'📵',lesson:1,
   explain:['Động từ / danh từ: quấy nhiễu khiến người ta không yên (côn trùng, cuộc gọi quảng cáo, kẻ xấu…). 骚扰电话 = cuộc gọi làm phiền; 性骚扰 = quấy rối tình dục.','Nghĩa xấu, mạnh hơn 打扰 (làm phiền, hay dùng trong lời lịch sự: 打扰一下 / 打扰您了).'],
   usage:'受到 + N + 的骚扰; 骚扰 + người; 骚扰电话 / 短信; 不堪 + 骚扰.',
   collo:['蚊子的骚扰','骚扰电话','受到骚扰','骚扰别人'],
   ex_zh:'最近我每天都接到好几个骚扰电话，烦死了。',ex_py:'Zuìjìn wǒ měi tiān dōu jiēdào hǎo jǐ ge sāorǎo diànhuà, fán sǐ le.',ex_vn:'Dạo này ngày nào tôi cũng nhận mấy cuộc gọi làm phiền, bực chết đi được.',
   exList:[
     {zh:'最近我每天都接到好几个骚扰电话，烦死了。',py:'Zuìjìn wǒ měi tiān dōu jiēdào hǎo jǐ ge sāorǎo diànhuà, fán sǐ le.',vn:'Dạo này ngày nào tôi cũng nhận mấy cuộc gọi làm phiền, bực chết đi được.'},
     {zh:'夏天晚上蚊子的骚扰让人睡不好觉。',py:'Xiàtiān wǎnshang wénzi de sāorǎo ràng rén shuì bu hǎo jiào.',vn:'Tối mùa hè, muỗi quấy nhiễu khiến người ta ngủ không ngon.'},
     {zh:'请不要在别人休息的时候去骚扰人家。',py:'Qǐng bú yào zài biérén xiūxi de shíhou qù sāorǎo rénjia.',vn:'Xin đừng đi quấy rầy người ta lúc người ta đang nghỉ ngơi.'}
   ],
   colloFull:[
     {zh:'蚊子的骚扰',py:'wénzi de sāorǎo',vn:'sự quấy nhiễu của muỗi'},
     {zh:'骚扰电话',py:'sāorǎo diànhuà',vn:'cuộc gọi làm phiền'},
     {zh:'受到骚扰',py:'shòudào sāorǎo',vn:'bị quấy rối'},
     {zh:'骚扰别人',py:'sāorǎo biérén',vn:'quấy rầy người khác'},
     {zh:'不堪骚扰',py:'bùkān sāorǎo',vn:'không chịu nổi sự quấy nhiễu'}
   ],
   patterns:[
     {s:'受到 + N + 的骚扰',m:'Bị … quấy nhiễu'},
     {s:'骚扰 + người',m:'Quấy rầy ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để không bị điện thoại làm phiền, trước khi thi tôi đã tắt điện thoại.',answer:'为了不受电话骚扰，我考试前把手机关了。',answerPy:'Wèile bú shòu diànhuà sāorǎo, wǒ kǎoshì qián bǎ shǒujī guān le.',
      note:'为了 + mục đích (ôn HSK 3); câu 把.',pair:'为了'},
     {promptLang:'vi',prompt:'Tiếng ồn ngoài phố quấy nhiễu đến mức tôi hoàn toàn không thể tập trung học.',answer:'街上的噪音骚扰得我根本没法集中精力学习。',answerPy:'Jiē shang de zàoyīn sāorǎo de wǒ gēnběn méi fǎ jízhōng jīnglì xuéxí.',
      note:'根本 + phủ định = hoàn toàn không (ôn HSK 4).',pair:'根本'}
   ]},

  {n:13,zh:'贫乏',py:'pínfá',pos:'Tính từ',vn:'nghèo nàn, thiếu thốn',hv:'bần phạp',em:'🫙',lesson:1,
   explain:['Tính từ: ① (văn viết) nghèo khó, thiếu thốn: 家境贫乏; ② (dùng nhiều hơn) thiếu, không phong phú: 知识贫乏, 资源贫乏, 内容贫乏, 语言贫乏. Trái nghĩa: 丰富.','Khác 贫困 (nghèo về KINH TẾ, đời sống): 贫乏 nhấn "thiếu, ít" và đi được với danh từ trừu tượng — xem phần phân biệt từ.'],
   usage:'N (知识 / 资源 / 内容 / 语言 / 经验) + 贫乏; 家境贫乏; 精神贫乏.',
   collo:['家境贫乏','知识贫乏','资源贫乏','内容贫乏'],
   ex_zh:'唯独让他发愁的是家境贫乏，日子过得艰难。',ex_py:'Wéidú ràng tā fāchóu de shì jiājìng pínfá, rìzi guò de jiānnán.',ex_vn:'Điều duy nhất khiến anh ta rầu rĩ là gia cảnh nghèo túng, cuộc sống gian nan.',
   exList:[
     {zh:'唯独让他发愁的是家境贫乏，日子过得艰难。',py:'Wéidú ràng tā fāchóu de shì jiājìng pínfá, rìzi guò de jiānnán.',vn:'Điều duy nhất khiến anh ta rầu rĩ là gia cảnh nghèo túng, cuộc sống gian nan.'},
     {zh:'这篇作文内容贫乏，语言也不够生动。',py:'Zhè piān zuòwén nèiróng pínfá, yǔyán yě bú gòu shēngdòng.',vn:'Bài văn này nội dung nghèo nàn, lời văn cũng chưa đủ sinh động.'},
     {zh:'这个国家自然资源贫乏，主要依靠进口。',py:'Zhège guójiā zìrán zīyuán pínfá, zhǔyào yīkào jìnkǒu.',vn:'Đất nước này tài nguyên thiên nhiên nghèo nàn, chủ yếu dựa vào nhập khẩu.'}
   ],
   colloFull:[
     {zh:'家境贫乏',py:'jiājìng pínfá',vn:'gia cảnh nghèo túng'},
     {zh:'知识贫乏',py:'zhīshi pínfá',vn:'kiến thức nghèo nàn'},
     {zh:'资源贫乏',py:'zīyuán pínfá',vn:'tài nguyên nghèo nàn'},
     {zh:'内容贫乏',py:'nèiróng pínfá',vn:'nội dung nghèo nàn'},
     {zh:'语言贫乏',py:'yǔyán pínfá',vn:'ngôn ngữ nghèo nàn'}
   ],
   patterns:[
     {s:'N (知识 / 资源 / 内容) + 贫乏',m:'… nghèo nàn, thiếu thốn'},
     {s:'贫乏 ↔ 丰富',m:'Nghèo nàn ↔ phong phú'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bài văn của em không phải quá ngắn, mà là nội dung quá nghèo nàn.',answer:'你的作文不是太短，而是内容太贫乏了。',answerPy:'Nǐ de zuòwén bú shì tài duǎn, ér shì nèiróng tài pínfá le.',
      note:'不是……而是…… = không phải … mà là … (ôn HSK 5).',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Kiến thức lịch sử của tôi còn nghèo nàn, cần đọc thêm sách.',answer:'我的历史知识还很贫乏，需要多读些书。',answerPy:'Wǒ de lìshǐ zhīshi hái hěn pínfá, xūyào duō dú xiē shū.',
      note:'多 + V + 些 + N = V thêm … (ôn HSK 3); 需要 + V.',pair:'需要'}
   ]},

  {n:14,zh:'艰难',py:'jiānnán',pos:'Tính từ',vn:'gian nan, khó khăn vất vả',hv:'gian nan',em:'⛰️',lesson:1,
   explain:['Tính từ: khó khăn, vất vả (cuộc sống, hoàn cảnh, bước đi, quyết định): 日子过得艰难, 艰难的选择, 艰难地走.','Nặng hơn 困难 và chỉ là tính từ; 困难 còn làm danh từ (克服困难), 艰难 thì không (×克服艰难).'],
   usage:'日子 / 生活 + (过得) + 艰难; 艰难的 + 岁月 / 日子 / 选择; 艰难地 + V.',
   collo:['日子艰难','生活艰难','艰难的选择','艰难地走'],
   ex_zh:'体验过以前艰难的日子，才能体会到现在的幸福。',ex_py:'Tǐyànguo yǐqián jiānnán de rìzi, cái néng tǐhuì dào xiànzài de xìngfú.',ex_vn:'Có trải qua những ngày gian khổ trước kia mới cảm nhận được hạnh phúc hôm nay.',
   exList:[
     {zh:'体验过以前艰难的日子，才能体会到现在的幸福。',py:'Tǐyànguo yǐqián jiānnán de rìzi, cái néng tǐhuì dào xiànzài de xìngfú.',vn:'Có trải qua những ngày gian khổ trước kia mới cảm nhận được hạnh phúc hôm nay.'},
     {zh:'唯独让他发愁的是家境贫乏，日子过得艰难。',py:'Wéidú ràng tā fāchóu de shì jiājìng pínfá, rìzi guò de jiānnán.',vn:'Điều duy nhất khiến anh ta rầu rĩ là gia cảnh nghèo túng, cuộc sống gian nan.'},
     {zh:'老人拄着拐杖，一步一步艰难地爬上了山顶。',py:'Lǎorén zhǔzhe guǎizhàng, yí bù yí bù jiānnán de pá shangle shāndǐng.',vn:'Ông cụ chống gậy, từng bước từng bước khó nhọc leo lên đỉnh núi.'}
   ],
   colloFull:[
     {zh:'日子艰难',py:'rìzi jiānnán',vn:'cuộc sống gian nan'},
     {zh:'生活艰难',py:'shēnghuó jiānnán',vn:'đời sống khó khăn'},
     {zh:'艰难的选择',py:'jiānnán de xuǎnzé',vn:'lựa chọn khó khăn'},
     {zh:'艰难地走',py:'jiānnán de zǒu',vn:'bước đi khó nhọc'},
     {zh:'艰难的岁月',py:'jiānnán de suìyuè',vn:'năm tháng gian khổ'}
   ],
   patterns:[
     {s:'日子 / 生活 + 过得 + 艰难',m:'Sống vất vả, khó khăn'},
     {s:'艰难地 + V',m:'Khó nhọc làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những năm đó cuộc sống rất gian nan, nhưng cả nhà chưa từng từ bỏ hy vọng.',answer:'那几年生活很艰难，可是全家人从来没有放弃希望。',answerPy:'Nà jǐ nián shēnghuó hěn jiānnán, kěshì quán jiā rén cónglái méiyǒu fàngqì xīwàng.',
      note:'从来没有 + V = chưa từng (ôn HSK 4).',pair:'从来没有'},
     {promptLang:'vi',prompt:'Đây là một lựa chọn khó khăn, tôi cần suy nghĩ thêm một chút.',answer:'这是一个艰难的选择，我需要再考虑一下。',answerPy:'Zhè shì yí ge jiānnán de xuǎnzé, wǒ xūyào zài kǎolǜ yíxià.',
      note:'再 + V + 一下 = … thêm một chút (ôn HSK 3).',pair:'再'}
   ]},

  {n:15,zh:'蜡烛',py:'làzhú',pos:'Danh từ',vn:'cây nến, đèn cầy',hv:'lạp chúc',em:'🕯️',lesson:1,
   explain:['Danh từ: cây nến (sáp + bấc); lượng từ 根 / 支. 点蜡烛 = thắp nến; 吹灭蜡烛 = thổi tắt nến.','Hình ảnh ví von quen thuộc: 老师像蜡烛，燃烧自己，照亮别人 (thầy cô như ngọn nến, đốt mình soi sáng người).'],
   usage:'点 / 吹 + 蜡烛; 一根 / 一支 + 蜡烛; 生日蜡烛.',
   collo:['点蜡烛','一根蜡烛','吹蜡烛','生日蜡烛'],
   ex_zh:'晚上看书别说蜡烛了，就是灯油也要节省着用。',ex_py:'Wǎnshang kàn shū biéshuō làzhú le, jiùshì dēngyóu yě yào jiéshěngzhe yòng.',ex_vn:'Buổi tối đọc sách, nói gì đến nến, ngay cả dầu đèn cũng phải dùng dè sẻn.',
   exList:[
     {zh:'晚上看书别说蜡烛了，就是灯油也要节省着用。',py:'Wǎnshang kàn shū biéshuō làzhú le, jiùshì dēngyóu yě yào jiéshěngzhe yòng.',vn:'Buổi tối đọc sách, nói gì đến nến, ngay cả dầu đèn cũng phải dùng dè sẻn.'},
     {zh:'停电了，妈妈点了一根蜡烛放在桌子上。',py:'Tíngdiàn le, māma diǎnle yì gēn làzhú fàng zài zhuōzi shang.',vn:'Mất điện rồi, mẹ thắp một cây nến đặt lên bàn.'},
     {zh:'许完愿后，她一口气吹灭了蛋糕上的蜡烛。',py:'Xǔwán yuàn hòu, tā yìkǒuqì chuīmièle dàngāo shang de làzhú.',vn:'Ước xong, cô ấy thổi một hơi tắt hết nến trên bánh.'}
   ],
   colloFull:[
     {zh:'点蜡烛',py:'diǎn làzhú',vn:'thắp nến'},
     {zh:'一根蜡烛',py:'yì gēn làzhú',vn:'một cây nến'},
     {zh:'吹蜡烛',py:'chuī làzhú',vn:'thổi nến'},
     {zh:'生日蜡烛',py:'shēngrì làzhú',vn:'nến sinh nhật'},
     {zh:'蜡烛的光',py:'làzhú de guāng',vn:'ánh nến'}
   ],
   patterns:[
     {s:'点 / 吹灭 + 蜡烛',m:'Thắp / thổi tắt nến'},
     {s:'一根 / 一支 + 蜡烛',m:'Một cây nến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người ta thường nói thầy cô giống như ngọn nến, đốt cháy mình để soi sáng người khác.',answer:'人们常说老师像蜡烛，燃烧自己，照亮别人。',answerPy:'Rénmen cháng shuō lǎoshī xiàng làzhú, ránshāo zìjǐ, zhàoliàng biérén.',
      note:'像 + N: so sánh ví von (比喻 — 篇章修辞 của bài này).',pair:'像'},
     {promptLang:'vi',prompt:'Mất điện rồi, may mà trong nhà vẫn còn mấy cây nến.',answer:'停电了，幸亏家里还有几根蜡烛。',answerPy:'Tíngdiàn le, xìngkuī jiāli hái yǒu jǐ gēn làzhú.',
      note:'幸亏 = may mà (HSK 5).',pair:'幸亏'}
   ]},

  {n:16,zh:'蚂蚁',py:'mǎyǐ',pos:'Danh từ',vn:'(con) kiến',hv:'mã nghĩ',em:'🐜',lesson:1,
   explain:['Danh từ: con kiến; lượng từ 只. 像有蚂蚁在爬 = như có kiến bò (ngứa ngáy khó chịu).','Thành ngữ: 热锅上的蚂蚁 = như kiến bò chảo nóng (cuống cuồng, sốt ruột); 蚂蚁搬家 = kiến tha lâu cũng đầy tổ.'],
   usage:'一只 / 一群 + 蚂蚁; 蚂蚁 + 在爬 / 搬……; 急得像热锅上的蚂蚁.',
   collo:['一只蚂蚁','蚂蚁在爬','一群蚂蚁','热锅上的蚂蚁'],
   ex_zh:'脸上痒痒的，像有蚂蚁在爬。',ex_py:'Liǎn shang yǎngyǎng de, xiàng yǒu mǎyǐ zài pá.',ex_vn:'Mặt ngứa ngáy, như có kiến bò.',
   exList:[
     {zh:'脸上痒痒的，像有蚂蚁在爬。',py:'Liǎn shang yǎngyǎng de, xiàng yǒu mǎyǐ zài pá.',vn:'Mặt ngứa ngáy, như có kiến bò.'},
     {zh:'一群蚂蚁正在搬一块比它们大好几倍的面包。',py:'Yì qún mǎyǐ zhèngzài bān yí kuài bǐ tāmen dà hǎo jǐ bèi de miànbāo.',vn:'Một đàn kiến đang tha một mẩu bánh mì to gấp mấy lần chúng.'},
     {zh:'快考试了，书还没复习完，他急得像热锅上的蚂蚁。',py:'Kuài kǎoshì le, shū hái méi fùxí wán, tā jí de xiàng rè guō shang de mǎyǐ.',vn:'Sắp thi rồi mà ôn chưa xong, cậu ấy cuống như kiến bò chảo nóng.'}
   ],
   colloFull:[
     {zh:'一只蚂蚁',py:'yì zhī mǎyǐ',vn:'một con kiến'},
     {zh:'蚂蚁在爬',py:'mǎyǐ zài pá',vn:'kiến đang bò'},
     {zh:'一群蚂蚁',py:'yì qún mǎyǐ',vn:'một đàn kiến'},
     {zh:'热锅上的蚂蚁',py:'rè guō shang de mǎyǐ',vn:'kiến bò chảo nóng'},
     {zh:'蚂蚁搬家',py:'mǎyǐ bānjiā',vn:'kiến chuyển tổ'}
   ],
   patterns:[
     {s:'像有蚂蚁在爬',m:'Ngứa ngáy như có kiến bò'},
     {s:'急得像热锅上的蚂蚁',m:'Cuống như kiến bò chảo nóng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con kiến tuy nhỏ nhưng sức lực lại không nhỏ.',answer:'蚂蚁个子虽小，力气却不小。',answerPy:'Mǎyǐ gèzi suī xiǎo, lìqi què bù xiǎo.',
      note:'虽……却…… = tuy … nhưng lại … (ôn HSK 4–5).',pair:'虽……却……'},
     {promptLang:'vi',prompt:'Mất hộ chiếu, cô ấy cuống lên như kiến bò chảo nóng.',answer:'护照丢了，她急得像热锅上的蚂蚁。',answerPy:'Hùzhào diū le, tā jí de xiàng rè guō shang de mǎyǐ.',
      note:'Adj + 得 + 像…… (bổ ngữ trạng thái kèm so sánh).',pair:'得'}
   ]},

  {n:17,zh:'颈椎',py:'jǐngzhuī',pos:'Danh từ',vn:'(các) đốt sống cổ',hv:'cảnh chùy',em:'🦴',lesson:1,
   explain:['Danh từ (y học): các đốt sống ở cổ (颈 = cổ, 椎 = đốt sống).','颈椎病 = bệnh (thoái hóa) đốt sống cổ — hay gặp ở người ngồi lâu, cúi đầu xem điện thoại. Chú ý 颈 đọc jǐng.'],
   usage:'颈椎 + 病 / 疼 / 麻木; 保护 / 活动 + 颈椎.',
   collo:['颈椎病','保护颈椎','颈椎疼','活动颈椎'],
   ex_zh:'由于坐得太久，他的颈椎有些麻木，屁股酸痛。',ex_py:'Yóuyú zuò de tài jiǔ, tā de jǐngzhuī yǒuxiē mámù, pìgu suāntòng.',ex_vn:'Vì ngồi quá lâu, cổ anh ta hơi tê, mông thì ê ẩm.',
   exList:[
     {zh:'由于坐得太久，他的颈椎有些麻木，屁股酸痛。',py:'Yóuyú zuò de tài jiǔ, tā de jǐngzhuī yǒuxiē mámù, pìgu suāntòng.',vn:'Vì ngồi quá lâu, cổ anh ta hơi tê, mông thì ê ẩm.'},
     {zh:'长时间低头看手机，很容易得颈椎病。',py:'Cháng shíjiān dītóu kàn shǒujī, hěn róngyì dé jǐngzhuībìng.',vn:'Cúi đầu xem điện thoại lâu rất dễ bị bệnh đốt sống cổ.'},
     {zh:'医生建议他每工作一个小时就活动一下颈椎。',py:'Yīshēng jiànyì tā měi gōngzuò yí ge xiǎoshí jiù huódòng yíxià jǐngzhuī.',vn:'Bác sĩ khuyên anh ấy cứ làm việc một tiếng thì vận động cổ một chút.'}
   ],
   colloFull:[
     {zh:'颈椎病',py:'jǐngzhuībìng',vn:'bệnh đốt sống cổ'},
     {zh:'保护颈椎',py:'bǎohù jǐngzhuī',vn:'bảo vệ đốt sống cổ'},
     {zh:'颈椎疼',py:'jǐngzhuī téng',vn:'đau đốt sống cổ'},
     {zh:'活动颈椎',py:'huódòng jǐngzhuī',vn:'vận động cổ'},
     {zh:'颈椎麻木',py:'jǐngzhuī mámù',vn:'cổ tê cứng'}
   ],
   patterns:[
     {s:'得 + 颈椎病',m:'Bị bệnh đốt sống cổ'},
     {s:'活动一下 + 颈椎',m:'Vận động cổ một chút'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để bảo vệ đốt sống cổ, bạn đừng cúi đầu xem điện thoại quá lâu.',answer:'为了保护颈椎，你别低头看手机看太久。',answerPy:'Wèile bǎohù jǐngzhuī, nǐ bié dītóu kàn shǒujī kàn tài jiǔ.',
      note:'别 + V (ôn HSK 2); V + O + V + 太久 (lặp động từ khi có bổ ngữ thời lượng).',pair:'别'},
     {promptLang:'vi',prompt:'Mẹ tôi suốt ngày ngồi trước máy tính, kết quả là bị bệnh đốt sống cổ.',answer:'我妈妈整天坐在电脑前，结果得了颈椎病。',answerPy:'Wǒ māma zhěngtiān zuò zài diànnǎo qián, jiéguǒ déle jǐngzhuībìng.',
      note:'结果 = kết quả là (ôn HSK 4).',pair:'结果'}
   ]},

  {n:18,zh:'揉',py:'róu',pos:'Động từ',vn:'dụi, vò, xoa bóp, nhào',hv:'nhu',em:'👐',lesson:1,
   explain:['Động từ: dùng tay xoa đi xoa lại, day, dụi: 揉眼睛, 揉肩膀, 揉了揉脖子.','Còn là nhào (bột), vò (giấy): 揉面, 把纸揉成一团. Hay dùng dạng 揉了揉 (xoa xoa một chút).'],
   usage:'揉 + (了)揉 + bộ phận cơ thể; 揉面; 把 + N + 揉成一团.',
   collo:['揉眼睛','揉了揉脖子','揉面','揉成一团'],
   ex_zh:'他晃了晃头，用手揉了揉麻木的脖子。',ex_py:'Tā huàngle huàng tóu, yòng shǒu róule róu mámù de bózi.',ex_vn:'Anh ta lắc lắc đầu, lấy tay xoa xoa cái cổ tê cứng.',
   exList:[
     {zh:'他晃了晃头，用手揉了揉麻木的脖子。',py:'Tā huàngle huàng tóu, yòng shǒu róule róu mámù de bózi.',vn:'Anh ta lắc lắc đầu, lấy tay xoa xoa cái cổ tê cứng.'},
     {zh:'孩子刚睡醒，一边揉眼睛一边叫妈妈。',py:'Háizi gāng shuìxǐng, yìbiān róu yǎnjing yìbiān jiào māma.',vn:'Đứa bé vừa ngủ dậy, vừa dụi mắt vừa gọi mẹ.'},
     {zh:'他生气地把信揉成一团，扔进了垃圾桶。',py:'Tā shēngqì de bǎ xìn róuchéng yì tuán, rēngjìnle lājītǒng.',vn:'Anh ta tức giận vò bức thư thành một cục, ném vào thùng rác.'}
   ],
   colloFull:[
     {zh:'揉眼睛',py:'róu yǎnjing',vn:'dụi mắt'},
     {zh:'揉了揉脖子',py:'róule róu bózi',vn:'xoa xoa cổ'},
     {zh:'揉面',py:'róu miàn',vn:'nhào bột'},
     {zh:'揉成一团',py:'róuchéng yì tuán',vn:'vò thành một cục'},
     {zh:'揉肩膀',py:'róu jiānbǎng',vn:'xoa bóp vai'}
   ],
   patterns:[
     {s:'揉了揉 + bộ phận cơ thể',m:'Xoa / dụi … một chút'},
     {s:'把 + N + 揉成一团',m:'Vò … thành một cục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc sách lâu quá, mắt tôi mỏi nên dụi dụi mắt.',answer:'书看得太久了，我眼睛很累，就揉了揉眼睛。',answerPy:'Shū kàn de tài jiǔ le, wǒ yǎnjing hěn lèi, jiù róule róu yǎnjing.',
      note:'V了V = làm một chút (đã xảy ra) (ôn HSK 4).',pair:'V了V'},
     {promptLang:'vi',prompt:'Bà gói bánh bao, trước hết phải nhào bột cho kỹ.',answer:'奶奶包包子，首先要把面揉好。',answerPy:'Nǎinai bāo bāozi, shǒuxiān yào bǎ miàn róuhǎo.',
      note:'首先 = trước hết (HSK 4); 把 + N + V好.',pair:'首先'}
   ]},

  {n:19,zh:'挪',py:'nuó',pos:'Động từ',vn:'xê dịch, dịch chuyển, dời',hv:'na',em:'↔️',lesson:1,
   explain:['Động từ (khẩu ngữ): dời, xê dịch vị trí một chút (người, đồ vật): 挪了挪屁股, 挪一下桌子, 把车挪开.','Nghĩa mở rộng: 挪用 = dùng (tiền, vật) sai mục đích. Văn viết tương đương: 移, 移动.'],
   usage:'挪 + 了挪 / 一下; 把 + N + 挪开 / 挪到 + nơi chốn; 往 + hướng + 挪.',
   collo:['挪了挪','挪一下','挪开','挪地方'],
   ex_zh:'他挪了挪屁股，换个姿势，顿时麻木的部位恢复了知觉。',ex_py:'Tā nuóle nuó pìgu, huàn ge zīshì, dùnshí mámù de bùwèi huīfùle zhījué.',ex_vn:'Anh ta nhích mông một chút, đổi tư thế, lập tức chỗ bị tê có lại cảm giác.',
   exList:[
     {zh:'他挪了挪屁股，换个姿势，顿时麻木的部位恢复了知觉。',py:'Tā nuóle nuó pìgu, huàn ge zīshì, dùnshí mámù de bùwèi huīfùle zhījué.',vn:'Anh ta nhích mông một chút, đổi tư thế, lập tức chỗ bị tê có lại cảm giác.'},
     {zh:'麻烦你把车挪一下，我的车出不去了。',py:'Máfan nǐ bǎ chē nuó yíxià, wǒ de chē chū bu qù le.',vn:'Phiền anh dời xe một chút, xe tôi không ra được.'},
     {zh:'这个柜子太重了，我们三个人才把它挪开。',py:'Zhège guìzi tài zhòng le, wǒmen sān ge rén cái bǎ tā nuókāi.',vn:'Cái tủ này nặng quá, ba người chúng tôi mới dời nó ra được.'}
   ],
   colloFull:[
     {zh:'挪了挪',py:'nuóle nuó',vn:'xê xê một chút'},
     {zh:'挪一下',py:'nuó yíxià',vn:'dời một chút'},
     {zh:'挪开',py:'nuókāi',vn:'dời ra'},
     {zh:'挪地方',py:'nuó dìfang',vn:'đổi chỗ'},
     {zh:'挪位置',py:'nuó wèizhi',vn:'dời vị trí'}
   ],
   patterns:[
     {s:'把 + N + 挪 + 一下 / 开',m:'Dời … một chút / ra'},
     {s:'把 + N + 挪到 + nơi chốn',m:'Dời … đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn xê cái ghế sang bên cạnh một chút được không? Tôi không đi qua được.',answer:'你能把椅子往旁边挪一下吗？我过不去了。',answerPy:'Nǐ néng bǎ yǐzi wǎng pángbiān nuó yíxià ma? Wǒ guò bu qù le.',
      note:'往 + phương hướng + V (ôn HSK 2–3); bổ ngữ khả năng 过不去.',pair:'往'},
     {promptLang:'vi',prompt:'Bàn học đặt cạnh cửa sổ nắng quá, chúng tôi dời nó vào góc tường.',answer:'书桌放在窗边太晒了，我们把它挪到了墙角。',answerPy:'Shūzhuō fàng zài chuāng biān tài shài le, wǒmen bǎ tā nuódàole qiángjiǎo.',
      note:'把 + N + V + 到 + nơi chốn (ôn HSK 4).',pair:'把'}
   ]},

  {n:20,zh:'屁股',py:'pìgu',pos:'Danh từ',vn:'mông',hv:'thí cổ',em:'🪑',lesson:1,
   explain:['Danh từ (khẩu ngữ): mông. Nghĩa mở rộng: phần đuôi, phần cuối của vật (烟屁股 = mẩu thuốc lá).','Quán ngữ: 拍拍屁股走人 = phủi mông bỏ đi (bỏ mặc, không chịu trách nhiệm). 股 đọc nhẹ: pìgu.'],
   usage:'屁股 + 酸痛 / 坐疼了 / 坐麻了; 挪了挪屁股; 打屁股; 拍拍屁股走人.',
   collo:['屁股酸痛','挪了挪屁股','拍拍屁股走人','打屁股'],
   ex_zh:'由于坐得太久，他的颈椎有些麻木，屁股酸痛。',ex_py:'Yóuyú zuò de tài jiǔ, tā de jǐngzhuī yǒuxiē mámù, pìgu suāntòng.',ex_vn:'Vì ngồi quá lâu, cổ anh ta hơi tê, mông thì ê ẩm.',
   exList:[
     {zh:'由于坐得太久，他的颈椎有些麻木，屁股酸痛。',py:'Yóuyú zuò de tài jiǔ, tā de jǐngzhuī yǒuxiē mámù, pìgu suāntòng.',vn:'Vì ngồi quá lâu, cổ anh ta hơi tê, mông thì ê ẩm.'},
     {zh:'坐了十几个小时的火车，我的屁股都坐疼了。',py:'Zuòle shí jǐ ge xiǎoshí de huǒchē, wǒ de pìgu dōu zuò téng le.',vn:'Ngồi tàu hỏa mười mấy tiếng, mông tôi đau cả rồi.'},
     {zh:'事情办砸了，他却拍拍屁股走人了，真不负责任。',py:'Shìqing bànzá le, tā què pāipai pìgu zǒu rén le, zhēn bú fù zérèn.',vn:'Việc làm hỏng rồi, anh ta lại phủi mông bỏ đi, thật vô trách nhiệm.'}
   ],
   colloFull:[
     {zh:'屁股酸痛',py:'pìgu suāntòng',vn:'mông ê ẩm'},
     {zh:'挪了挪屁股',py:'nuóle nuó pìgu',vn:'nhích mông một chút'},
     {zh:'拍拍屁股走人',py:'pāipai pìgu zǒu rén',vn:'phủi mông bỏ đi'},
     {zh:'打屁股',py:'dǎ pìgu',vn:'đánh đòn vào mông'},
     {zh:'屁股坐疼了',py:'pìgu zuò téng le',vn:'ngồi đau cả mông'}
   ],
   patterns:[
     {s:'屁股 + 都 + 坐疼 / 坐麻 + 了',m:'Ngồi đến đau / tê cả mông'},
     {s:'拍拍屁股走人',m:'Phủi mông bỏ đi (vô trách nhiệm)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ tôi nghịch quá, còn từng bị bố đánh đòn vào mông.',answer:'小时候我太调皮了，还被爸爸打过屁股。',answerPy:'Xiǎo shíhou wǒ tài tiáopí le, hái bèi bàba dǎguo pìgu.',
      note:'被 + người + V + 过 (bị động, ôn HSK 4).',pair:'被'},
     {promptLang:'vi',prompt:'Ngồi xe khách đường dài cả ngày, mông tôi tê hết cả.',answer:'坐了一整天的长途汽车，我的屁股都坐麻了。',answerPy:'Zuòle yì zhěngtiān de chángtú qìchē, wǒ de pìgu dōu zuò má le.',
      note:'都……了 = đến mức … rồi (ôn HSK 3).',pair:'都……了'}
   ]},

  {n:21,zh:'知觉',py:'zhījué',pos:'Danh từ',vn:'cảm giác, tri giác',hv:'tri giác',em:'🖐️',lesson:1,
   explain:['Danh từ: ① cảm giác của cơ thể (đau, tê, nóng lạnh…): 恢复了知觉, 失去知觉 (mất cảm giác / bất tỉnh); ② (tâm lý học) tri giác.','失去知觉 gần nghĩa 昏迷 (HSK 6 bài 8). 调动全身的知觉 = huy động mọi giác quan.'],
   usage:'恢复 / 失去 + 知觉; 没有知觉; 调动全身的知觉 + 去 + V.',
   collo:['恢复知觉','失去知觉','没有知觉','调动全身的知觉'],
   ex_zh:'他挪了挪屁股，换个姿势，顿时麻木的部位恢复了知觉。',ex_py:'Tā nuóle nuó pìgu, huàn ge zīshì, dùnshí mámù de bùwèi huīfùle zhījué.',ex_vn:'Anh ta nhích mông một chút, đổi tư thế, lập tức chỗ bị tê có lại cảm giác.',
   exList:[
     {zh:'他挪了挪屁股，换个姿势，顿时麻木的部位恢复了知觉。',py:'Tā nuóle nuó pìgu, huàn ge zīshì, dùnshí mámù de bùwèi huīfùle zhījué.',vn:'Anh ta nhích mông một chút, đổi tư thế, lập tức chỗ bị tê có lại cảm giác.'},
     {zh:'他从楼梯上摔下来，一下子失去了知觉。',py:'Tā cóng lóutī shang shuāi xiàlái, yíxiàzi shīqùle zhījué.',vn:'Anh ấy ngã từ cầu thang xuống, lập tức bất tỉnh.'},
     {zh:'天太冷了，我的手指冻得几乎没有知觉了。',py:'Tiān tài lěng le, wǒ de shǒuzhǐ dòng de jīhū méiyǒu zhījué le.',vn:'Trời lạnh quá, ngón tay tôi cóng đến gần như mất cảm giác.'}
   ],
   colloFull:[
     {zh:'恢复知觉',py:'huīfù zhījué',vn:'có lại cảm giác'},
     {zh:'失去知觉',py:'shīqù zhījué',vn:'mất cảm giác, bất tỉnh'},
     {zh:'没有知觉',py:'méiyǒu zhījué',vn:'không có cảm giác'},
     {zh:'调动全身的知觉',py:'diàodòng quánshēn de zhījué',vn:'huy động mọi giác quan'},
     {zh:'知觉麻木',py:'zhījué mámù',vn:'cảm giác tê dại'}
   ],
   patterns:[
     {s:'恢复 / 失去 + 知觉',m:'Có lại / mất cảm giác'},
     {s:'V + 得 + 没有知觉了',m:'… đến mất cảm giác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi được cấp cứu, bệnh nhân dần dần có lại cảm giác.',answer:'经过抢救，病人渐渐恢复了知觉。',answerPy:'Jīngguò qiǎngjiù, bìngrén jiànjiàn huīfùle zhījué.',
      note:'经过 + quá trình (ôn HSK 4); 抢救 ôn HSK 6 bài 14.',pair:'经过'},
     {promptLang:'vi',prompt:'Ngồi xổm lâu quá, chân tôi tê đến mất cả cảm giác.',answer:'蹲得太久了，我的腿麻得没有知觉了。',answerPy:'Dūn de tài jiǔ le, wǒ de tuǐ má de méiyǒu zhījué le.',
      note:'太……了 (ôn HSK 2); Adj + 得 + kết quả.',pair:'太……了'}
   ]},

  {n:22,zh:'挨',py:'ái',pos:'Động từ',vn:'chịu, bị (đánh, mắng, đói, rét…)',hv:'ai',em:'🤕',lesson:1,
   explain:['Động từ: phải chịu điều không hay, thường về thể xác hoặc tinh thần: 挨打, 挨骂, 挨批评, 挨饿, 挨冻, 挨了一脚, 挨了一顿棍子. Khẩu ngữ hơn 受 — xem phần phân biệt 挨—受.','Đọc ái. Chú ý chữ này còn đọc āi = kề, sát, lần lượt: 挨着, 挨个儿.'],
   usage:'挨 + V (打 / 骂 / 批 / 咬); 挨 + 了 + (người) + 一顿 + 打 / 骂; 挨饿 / 挨冻.',
   collo:['挨饿受冻','挨打','挨骂','挨批评'],
   ex_zh:'只要有书读，挨饿受冻他都不怕。',ex_py:'Zhǐyào yǒu shū dú, ái è shòu dòng tā dōu bú pà.',ex_vn:'Chỉ cần có sách đọc, chịu đói chịu rét anh ta cũng không sợ.',
   exList:[
     {zh:'只要有书读，挨饿受冻他都不怕。',py:'Zhǐyào yǒu shū dú, ái è shòu dòng tā dōu bú pà.',vn:'Chỉ cần có sách đọc, chịu đói chịu rét anh ta cũng không sợ.'},
     {zh:'因为撒谎，他挨了父亲一顿打。',py:'Yīnwèi sāhuǎng, tā áile fùqin yí dùn dǎ.',vn:'Vì nói dối, cậu ta bị bố đánh cho một trận.'},
     {zh:'上课玩手机，他又挨老师批评了。',py:'Shàngkè wán shǒujī, tā yòu ái lǎoshī pīpíng le.',vn:'Trong giờ học chơi điện thoại, cậu ấy lại bị thầy phê bình.'}
   ],
   colloFull:[
     {zh:'挨饿受冻',py:'ái è shòu dòng',vn:'chịu đói chịu rét'},
     {zh:'挨打',py:'ái dǎ',vn:'bị đánh'},
     {zh:'挨骂',py:'ái mà',vn:'bị mắng'},
     {zh:'挨批评',py:'ái pīpíng',vn:'bị phê bình'},
     {zh:'挨了一顿打',py:'áile yí dùn dǎ',vn:'bị một trận đòn'}
   ],
   patterns:[
     {s:'挨 + V (打 / 骂 / 批评)',m:'Bị đánh / mắng / phê bình'},
     {s:'挨 + 了 + người + 一顿 + V',m:'Bị ai … cho một trận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Về nhà muộn, tôi sợ bị mẹ mắng.',answer:'回家晚了，我怕挨妈妈骂。',answerPy:'Huí jiā wǎn le, wǒ pà ái māma mà.',
      note:'怕 + V = sợ … (ôn HSK 3); 挨 + người + V.',pair:'怕'},
     {promptLang:'vi',prompt:'Chỉ cần được đi học, chịu đói chịu rét cậu bé cũng không sợ.',answer:'只要能上学，挨饿受冻他都不怕。',answerPy:'Zhǐyào néng shàngxué, ái è shòu dòng tā dōu bú pà.',
      note:'只要…… (ôn HSK 4); tân ngữ 挨饿受冻 đưa lên đầu, sau có 都不怕.',pair:'只要'}
   ]},

  {n:23,zh:'美满',py:'měimǎn',pos:'Tính từ',vn:'tốt đẹp, mỹ mãn, viên mãn',hv:'mỹ mãn',em:'👨‍👩‍👧',lesson:1,
   explain:['Tính từ: tốt đẹp và trọn vẹn, không thiếu gì — thường nói về cuộc sống, gia đình, hôn nhân: 幸福美满, 美满的家庭, 婚姻美满.','Khác 完美 (hoàn hảo, không khuyết điểm — dùng cho người, việc, tác phẩm).'],
   usage:'幸福美满; 美满的 + 家庭 / 生活 / 婚姻 / 结局; 生活 / 婚姻 + 美满.',
   collo:['幸福美满','美满的家庭','婚姻美满','美满的生活'],
   ex_zh:'只要有书陪伴，他就感觉幸福、美满，像是生活在天堂。',ex_py:'Zhǐyào yǒu shū péibàn, tā jiù gǎnjué xìngfú, měimǎn, xiàng shì shēnghuó zài tiāntáng.',ex_vn:'Chỉ cần có sách bầu bạn, anh ta liền thấy hạnh phúc, viên mãn, như đang sống ở thiên đường.',
   exList:[
     {zh:'只要有书陪伴，他就感觉幸福、美满，像是生活在天堂。',py:'Zhǐyào yǒu shū péibàn, tā jiù gǎnjué xìngfú, měimǎn, xiàng shì shēnghuó zài tiāntáng.',vn:'Chỉ cần có sách bầu bạn, anh ta liền thấy hạnh phúc, viên mãn, như đang sống ở thiên đường.'},
     {zh:'祝你们新婚快乐，婚姻美满！',py:'Zhù nǐmen xīnhūn kuàilè, hūnyīn měimǎn!',vn:'Chúc hai bạn tân hôn vui vẻ, hôn nhân viên mãn!'},
     {zh:'他有一个美满的家庭，妻子温柔，孩子懂事。',py:'Tā yǒu yí ge měimǎn de jiātíng, qīzi wēnróu, háizi dǒngshì.',vn:'Anh ấy có một gia đình hạnh phúc, vợ dịu dàng, con hiểu chuyện.'}
   ],
   colloFull:[
     {zh:'幸福美满',py:'xìngfú měimǎn',vn:'hạnh phúc viên mãn'},
     {zh:'美满的家庭',py:'měimǎn de jiātíng',vn:'gia đình hạnh phúc'},
     {zh:'婚姻美满',py:'hūnyīn měimǎn',vn:'hôn nhân tốt đẹp'},
     {zh:'美满的生活',py:'měimǎn de shēnghuó',vn:'cuộc sống tốt đẹp'},
     {zh:'美满的结局',py:'měimǎn de jiéjú',vn:'kết cục tốt đẹp'}
   ],
   patterns:[
     {s:'幸福美满',m:'Hạnh phúc viên mãn'},
     {s:'美满的 + 家庭 / 生活 / 婚姻',m:'Gia đình / cuộc sống / hôn nhân tốt đẹp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy nhà không giàu, nhưng cả nhà sống rất hạnh phúc viên mãn.',answer:'虽然家里不富裕，但是一家人生活得很幸福美满。',answerPy:'Suīrán jiāli bú fùyù, dànshì yì jiā rén shēnghuó de hěn xìngfú měimǎn.',
      note:'虽然……但是…… (ôn HSK 4); 富裕 ôn HSK 6 bài 20.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chúc ông bà sức khỏe dồi dào, gia đình hạnh phúc viên mãn!',answer:'祝您身体健康，家庭幸福美满！',answerPy:'Zhù nín shēntǐ jiànkāng, jiātíng xìngfú měimǎn!',
      note:'祝 + lời chúc (ôn HSK 3).',pair:'祝'}
   ]},

  {n:24,zh:'天堂',py:'tiāntáng',pos:'Danh từ',vn:'thiên đường',hv:'thiên đường',em:'☁️',lesson:1,
   explain:['Danh từ: ① thiên đường (nơi linh hồn người tốt tới sau khi chết theo một số tôn giáo), trái nghĩa 地狱 (địa ngục);','② ví nơi sống rất sung sướng, tốt đẹp: 上有天堂，下有苏杭; 购物天堂; 儿童的天堂.'],
   usage:'像是生活在天堂; 人间天堂; 购物 / 儿童 + 的 + 天堂; 对……来说，……就是天堂.',
   collo:['生活在天堂','人间天堂','购物天堂','上天堂'],
   ex_zh:'只要有书陪伴，他就感觉幸福、美满，像是生活在天堂。',ex_py:'Zhǐyào yǒu shū péibàn, tā jiù gǎnjué xìngfú, měimǎn, xiàng shì shēnghuó zài tiāntáng.',ex_vn:'Chỉ cần có sách bầu bạn, anh ta liền thấy hạnh phúc, viên mãn, như đang sống ở thiên đường.',
   exList:[
     {zh:'只要有书陪伴，他就感觉幸福、美满，像是生活在天堂。',py:'Zhǐyào yǒu shū péibàn, tā jiù gǎnjué xìngfú, měimǎn, xiàng shì shēnghuó zài tiāntáng.',vn:'Chỉ cần có sách bầu bạn, anh ta liền thấy hạnh phúc, viên mãn, như đang sống ở thiên đường.'},
     {zh:'人们常说“上有天堂，下有苏杭”，苏州和杭州的确很美。',py:'Rénmen cháng shuō "shàng yǒu tiāntáng, xià yǒu Sū Háng", Sūzhōu hé Hángzhōu díquè hěn měi.',vn:'Người ta thường nói "trên trời có thiên đường, dưới đất có Tô Hàng", Tô Châu và Hàng Châu quả thật rất đẹp.'},
     {zh:'对孩子们来说，这个游乐园简直就是天堂。',py:'Duì háizimen lái shuō, zhège yóulèyuán jiǎnzhí jiù shì tiāntáng.',vn:'Đối với bọn trẻ, khu vui chơi này đúng là thiên đường.'}
   ],
   colloFull:[
     {zh:'生活在天堂',py:'shēnghuó zài tiāntáng',vn:'sống ở thiên đường'},
     {zh:'人间天堂',py:'rénjiān tiāntáng',vn:'thiên đường nơi trần thế'},
     {zh:'购物天堂',py:'gòuwù tiāntáng',vn:'thiên đường mua sắm'},
     {zh:'上天堂',py:'shàng tiāntáng',vn:'lên thiên đường'},
     {zh:'儿童的天堂',py:'értóng de tiāntáng',vn:'thiên đường của trẻ em'}
   ],
   patterns:[
     {s:'像是生活在天堂',m:'Như đang sống ở thiên đường'},
     {s:'对……来说，……就是天堂',m:'Đối với …, … chính là thiên đường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Với người mê sách, thư viện chính là thiên đường.',answer:'对爱书的人来说，图书馆就是天堂。',answerPy:'Duì ài shū de rén lái shuō, túshūguǎn jiù shì tiāntáng.',
      note:'对……来说 = đối với … (ôn HSK 4).',pair:'对……来说'},
     {promptLang:'vi',prompt:'Hồng Kông được gọi là thiên đường mua sắm.',answer:'香港被称为购物天堂。',answerPy:'Xiānggǎng bèi chēngwéi gòuwù tiāntáng.',
      note:'被称为 = được gọi là (HSK 5).',pair:'被称为'}
   ]},

  {n:25,zh:'熄灭',py:'xīmiè',pos:'Động từ',vn:'tắt, dập tắt',hv:'tức diệt',em:'💨',lesson:1,
   explain:['Động từ: (lửa, đèn) tắt; làm cho tắt: 灯熄灭了, 把烟头熄灭. Văn viết; khẩu ngữ: 灭了, 关灯.','Nghĩa bóng: 希望熄灭了 (hy vọng tắt lịm). Trái nghĩa: 点燃 (thắp), 亮起.'],
   usage:'灯 / 火 / 灯光 + 熄灭了; 把 + 烟头 / 火 + 熄灭; V + 就熄灭了.',
   collo:['油灯熄灭了','灯光熄灭','熄灭火焰','希望熄灭'],
   ex_zh:'忽然，油灯无力地跳了两下，无声地熄灭了。',ex_py:'Hūrán, yóudēng wúlì de tiàole liǎng xià, wúshēng de xīmiè le.',ex_vn:'Bỗng nhiên ngọn đèn dầu yếu ớt chập chờn hai cái rồi lặng lẽ tắt ngấm.',
   exList:[
     {zh:'忽然，油灯无力地跳了两下，无声地熄灭了。',py:'Hūrán, yóudēng wúlì de tiàole liǎng xià, wúshēng de xīmiè le.',vn:'Bỗng nhiên ngọn đèn dầu yếu ớt chập chờn hai cái rồi lặng lẽ tắt ngấm.'},
     {zh:'远处村子的灯光都熄灭了，只剩下星星那微弱的光芒。',py:'Yuǎnchù cūnzi de dēngguāng dōu xīmiè le, zhǐ shèngxia xīngxing nà wēiruò de guāngmáng.',vn:'Ánh đèn trong làng phía xa đều đã tắt, chỉ còn lại ánh sáng yếu ớt của những vì sao.'},
     {zh:'离开前，请一定把烟头熄灭，以免引起火灾。',py:'Líkāi qián, qǐng yídìng bǎ yāntóu xīmiè, yǐmiǎn yǐnqǐ huǒzāi.',vn:'Trước khi rời đi, nhất định phải dập tắt đầu thuốc lá để tránh gây hỏa hoạn.'}
   ],
   colloFull:[
     {zh:'油灯熄灭了',py:'yóudēng xīmiè le',vn:'đèn dầu tắt rồi'},
     {zh:'灯光熄灭',py:'dēngguāng xīmiè',vn:'ánh đèn tắt'},
     {zh:'熄灭火焰',py:'xīmiè huǒyàn',vn:'dập tắt ngọn lửa'},
     {zh:'希望熄灭',py:'xīwàng xīmiè',vn:'hy vọng tắt lịm'},
     {zh:'熄灭烟头',py:'xīmiè yāntóu',vn:'dập tắt đầu thuốc'}
   ],
   patterns:[
     {s:'N (灯 / 火) + 熄灭了',m:'Đèn / lửa tắt rồi'},
     {s:'把 + N + 熄灭',m:'Dập tắt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gió to quá, cây nến vừa thắp lên đã tắt.',answer:'风太大了，蜡烛刚点上就熄灭了。',answerPy:'Fēng tài dà le, làzhú gāng diǎnshang jiù xīmiè le.',
      note:'刚……就…… = vừa … đã … (ôn HSK 4).',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Mười giờ tối, đèn trong ký túc xá tắt hết.',answer:'晚上十点，宿舍里的灯全都熄灭了。',answerPy:'Wǎnshang shí diǎn, sùshè li de dēng quán dōu xīmiè le.',
      note:'全都 = tất cả đều (ôn HSK 4).',pair:'全都'}
   ]},

  {n:26,zh:'泄气',py:'xiè qì',pos:'Động từ',vn:'nhụt chí, nản lòng',hv:'tiết khí',em:'🎈',lesson:1,
   explain:['Động từ (ly hợp): mất tinh thần, nản chí (như quả bóng xì hơi — 泄 = thoát ra, 气 = hơi). Tách được: 泄了气. 别泄气 / 不要泄气 = đừng nản.','Khẩu ngữ còn dùng như tính từ: kém cỏi, đáng thất vọng — 真泄气!'],
   usage:'有些 / 感到 + 泄气; 别 / 不要 + 泄气; 一下子泄了气.',
   collo:['有些泄气','不要泄气','泄了气','别泄气'],
   ex_zh:'糟了，一定是灯油没有了，他有些泄气。',ex_py:'Zāo le, yídìng shì dēngyóu méiyǒu le, tā yǒuxiē xièqì.',ex_vn:'Hỏng rồi, chắc chắn là hết dầu đèn, anh ta hơi nản lòng.',
   exList:[
     {zh:'糟了，一定是灯油没有了，他有些泄气。',py:'Zāo le, yídìng shì dēngyóu méiyǒu le, tā yǒuxiē xièqì.',vn:'Hỏng rồi, chắc chắn là hết dầu đèn, anh ta hơi nản lòng.'},
     {zh:'失败了没关系，不要泄气。',py:'Shībàile méi guānxi, bú yào xièqì.',vn:'Thất bại cũng không sao, đừng nản chí.'},
     {zh:'听说比赛又输了，队员们一下子泄了气。',py:'Tīngshuō bǐsài yòu shū le, duìyuánmen yíxiàzi xièle qì.',vn:'Nghe nói trận đấu lại thua, các cầu thủ lập tức xuống tinh thần.'}
   ],
   colloFull:[
     {zh:'有些泄气',py:'yǒuxiē xièqì',vn:'hơi nản lòng'},
     {zh:'不要泄气',py:'bú yào xièqì',vn:'đừng nản chí'},
     {zh:'泄了气',py:'xièle qì',vn:'xuống tinh thần'},
     {zh:'别泄气',py:'bié xièqì',vn:'đừng nản'},
     {zh:'感到泄气',py:'gǎndào xièqì',vn:'cảm thấy nản'}
   ],
   patterns:[
     {s:'别 / 不要 + 泄气',m:'Đừng nản'},
     {s:'S + 一下子 + 泄了气',m:'… lập tức nhụt chí'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần này thi không tốt, nhưng bạn đừng nản, lần sau cố gắng là được.',answer:'这次没考好，但你别泄气，下次努力就行了。',answerPy:'Zhè cì méi kǎohǎo, dàn nǐ bié xièqì, xià cì nǔlì jiù xíng le.',
      note:'……就行了 = … là được (ôn HSK 3–4).',pair:'就行了'},
     {promptLang:'vi',prompt:'Thí nghiệm liên tiếp thất bại mấy lần, nhưng cô ấy không hề nản chí.',answer:'实验接连失败了好几次，可她一点儿也没泄气。',answerPy:'Shíyàn jiēlián shībàile hǎo jǐ cì, kě tā yìdiǎnr yě méi xièqì.',
      note:'一点儿也没 + V = không hề … (ôn HSK 4); 接连 ôn HSK 6 bài 5.',pair:'一点儿也'}
   ]},

  {n:27,zh:'眯',py:'mī',pos:'Động từ',vn:'nheo (mắt), hé nhìn',hv:'mị',em:'😑',lesson:1,
   explain:['Động từ: nheo mắt, khép hờ mắt thành một đường nhỏ (vì chói, vì cười, hoặc để nhìn cho rõ): 眯起双眼, 眯着眼睛. 笑眯眯 = cười híp mắt.','Khẩu ngữ còn có nghĩa chợp mắt một lát: 眯一会儿.'],
   usage:'眯 + 起 / 着 + 眼睛 / 双眼; 笑眯眯地 + V; 眯一会儿.',
   collo:['眯起双眼','眯着眼睛','笑眯眯','眯一会儿'],
   ex_zh:'黑暗中他眯起双眼，极力使自己尽快适应眼前的黑暗。',ex_py:'Hēi\'àn zhōng tā mīqǐ shuāngyǎn, jílì shǐ zìjǐ jǐnkuài shìyìng yǎnqián de hēi\'àn.',ex_vn:'Trong bóng tối, anh ta nheo hai mắt lại, cố hết sức để mình nhanh chóng quen với bóng tối trước mặt.',
   exList:[
     {zh:'黑暗中他眯起双眼，极力使自己尽快适应眼前的黑暗。',py:'Hēi\'àn zhōng tā mīqǐ shuāngyǎn, jílì shǐ zìjǐ jǐnkuài shìyìng yǎnqián de hēi\'àn.',vn:'Trong bóng tối, anh ta nheo hai mắt lại, cố hết sức để mình nhanh chóng quen với bóng tối trước mặt.'},
     {zh:'阳光太刺眼了，他眯着眼睛看了看远处。',py:'Yángguāng tài cìyǎn le, tā mīzhe yǎnjing kànle kàn yuǎnchù.',vn:'Nắng chói quá, anh ấy nheo mắt nhìn ra xa.'},
     {zh:'奶奶笑眯眯地看着孙子吃饭。',py:'Nǎinai xiàomīmī de kànzhe sūnzi chīfàn.',vn:'Bà cười híp mắt nhìn cháu ăn cơm.'}
   ],
   colloFull:[
     {zh:'眯起双眼',py:'mīqǐ shuāngyǎn',vn:'nheo hai mắt lại'},
     {zh:'眯着眼睛',py:'mīzhe yǎnjing',vn:'nheo mắt'},
     {zh:'笑眯眯',py:'xiàomīmī',vn:'cười híp mắt'},
     {zh:'眯一会儿',py:'mī yíhuìr',vn:'chợp mắt một lát'},
     {zh:'眯成一条缝',py:'mīchéng yì tiáo fèng',vn:'híp lại thành một đường'}
   ],
   patterns:[
     {s:'眯 + 起 / 着 + 眼睛',m:'Nheo mắt (lại)'},
     {s:'笑眯眯地 + V',m:'Cười híp mắt mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông cụ cười híp mắt kể cho chúng tôi nghe chuyện hồi trẻ.',answer:'老爷爷笑眯眯地给我们讲他年轻时的故事。',answerPy:'Lǎo yéye xiàomīmī de gěi wǒmen jiǎng tā niánqīng shí de gùshi.',
      note:'Trạng ngữ + 地 + V (ôn HSK 4); 给 + người + V.',pair:'地'},
     {promptLang:'vi',prompt:'Còn nửa tiếng nữa mới tới, cậu chợp mắt một lát đi.',answer:'还有半个小时才到，你先眯一会儿吧。',answerPy:'Hái yǒu bàn ge xiǎoshí cái dào, nǐ xiān mī yíhuìr ba.',
      note:'才 = mới (chỉ sự muộn, ôn HSK 3).',pair:'才'}
   ]},

  {n:28,zh:'绝望',py:'jué wàng',pos:'Động từ',vn:'tuyệt vọng, hết hy vọng',hv:'tuyệt vọng',em:'😞',lesson:1,
   explain:['Động từ / tính từ: mất hết hy vọng: 感到绝望, 绝望地看着. Làm danh từ: 在绝望中 (trong tuyệt vọng), 陷入绝望.','Trái nghĩa: 充满希望. 对……绝望 = tuyệt vọng về ….'],
   usage:'感到 / 陷入 + 绝望; 绝望地 + V; 在绝望中; 对 + N + 绝望.',
   collo:['感到绝望','绝望地凝视','在绝望中','陷入绝望'],
   ex_zh:'他放下灯，绝望地凝视着眼前的茫茫黑暗。',ex_py:'Tā fàngxia dēng, juéwàng de níngshìzhe yǎnqián de mángmáng hēi\'àn.',ex_vn:'Anh ta đặt đèn xuống, tuyệt vọng nhìn chằm chằm vào màn đêm mịt mùng trước mặt.',
   exList:[
     {zh:'他放下灯，绝望地凝视着眼前的茫茫黑暗。',py:'Tā fàngxia dēng, juéwàng de níngshìzhe yǎnqián de mángmáng hēi\'àn.',vn:'Anh ta đặt đèn xuống, tuyệt vọng nhìn chằm chằm vào màn đêm mịt mùng trước mặt.'},
     {zh:'他们的人生经历告诉我在绝望中也不要放弃。',py:'Tāmen de rénshēng jīnglì gàosu wǒ zài juéwàng zhōng yě bú yào fàngqì.',vn:'Trải nghiệm cuộc đời họ cho tôi biết ngay cả trong tuyệt vọng cũng đừng bỏ cuộc.'},
     {zh:'医生的话让病人的家属陷入了绝望。',py:'Yīshēng de huà ràng bìngrén de jiāshǔ xiànrùle juéwàng.',vn:'Lời bác sĩ khiến người nhà bệnh nhân rơi vào tuyệt vọng.'}
   ],
   colloFull:[
     {zh:'感到绝望',py:'gǎndào juéwàng',vn:'cảm thấy tuyệt vọng'},
     {zh:'绝望地凝视',py:'juéwàng de níngshì',vn:'tuyệt vọng nhìn chằm chằm'},
     {zh:'在绝望中',py:'zài juéwàng zhōng',vn:'trong tuyệt vọng'},
     {zh:'陷入绝望',py:'xiànrù juéwàng',vn:'rơi vào tuyệt vọng'},
     {zh:'对生活绝望',py:'duì shēnghuó juéwàng',vn:'tuyệt vọng về cuộc sống'}
   ],
   patterns:[
     {s:'绝望地 + V',m:'Tuyệt vọng mà …'},
     {s:'在绝望中 + 也 + 不要……',m:'Trong tuyệt vọng cũng đừng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù gặp khó khăn lớn đến đâu cũng đừng tuyệt vọng.',answer:'不管遇到多大的困难，都不要绝望。',answerPy:'Bùguǎn yùdào duō dà de kùnnan, dōu bú yào juéwàng.',
      note:'不管……都…… = dù … đều … (ôn HSK 4).',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Đúng lúc anh ấy sắp tuyệt vọng thì một người qua đường đã cứu anh ấy.',answer:'就在他快要绝望的时候，一个路人救了他。',answerPy:'Jiù zài tā kuàiyào juéwàng de shíhou, yí ge lùrén jiùle tā.',
      note:'快要……的时候 = lúc sắp … (ôn HSK 3–4).',pair:'快要'}
   ]},

  {n:29,zh:'凝固',py:'nínggù',pos:'Động từ',vn:'đông đặc, cứng lại',hv:'ngưng cố',em:'🧊',lesson:1,
   explain:['Động từ: (chất lỏng) đông lại thành thể rắn: 水泥凝固了, 血液凝固, 凝固成冰.','Nghĩa bóng: (không khí, nụ cười, thời gian…) như đông cứng lại, không chuyển động: 空气像是凝固了, 笑容凝固在脸上.'],
   usage:'N (水泥 / 血液 / 空气 / 笑容) + 凝固(了); 凝固成 + N.',
   collo:['空气凝固','血液凝固','水泥凝固','笑容凝固'],
   ex_zh:'屋子里闷热的空气像是凝固了。',ex_py:'Wūzi li mēnrè de kōngqì xiàng shì nínggù le.',ex_vn:'Không khí oi bức trong phòng như đông cứng lại.',
   exList:[
     {zh:'屋子里闷热的空气像是凝固了。',py:'Wūzi li mēnrè de kōngqì xiàng shì nínggù le.',vn:'Không khí oi bức trong phòng như đông cứng lại.'},
     {zh:'水泥还没完全凝固，请不要在上面走。',py:'Shuǐní hái méi wánquán nínggù, qǐng bú yào zài shàngmian zǒu.',vn:'Xi măng chưa khô cứng hẳn, xin đừng đi lên trên.'},
     {zh:'听到这个坏消息，她脸上的笑容一下子凝固了。',py:'Tīngdào zhège huài xiāoxi, tā liǎn shang de xiàoróng yíxiàzi nínggù le.',vn:'Nghe tin xấu này, nụ cười trên mặt cô ấy lập tức đông cứng lại.'}
   ],
   colloFull:[
     {zh:'空气凝固',py:'kōngqì nínggù',vn:'không khí như đông cứng'},
     {zh:'血液凝固',py:'xuèyè nínggù',vn:'máu đông lại'},
     {zh:'水泥凝固',py:'shuǐní nínggù',vn:'xi măng đông cứng'},
     {zh:'笑容凝固',py:'xiàoróng nínggù',vn:'nụ cười cứng lại'},
     {zh:'凝固成冰',py:'nínggù chéng bīng',vn:'đông thành băng'}
   ],
   patterns:[
     {s:'N + 像是 / 好像 + 凝固了',m:'… như đông cứng lại (ví von)'},
     {s:'凝固成 + N',m:'Đông lại thành …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước ở dưới 0 độ C sẽ đông lại thành băng.',answer:'水在零摄氏度以下会凝固成冰。',answerPy:'Shuǐ zài líng shèshìdù yǐxià huì nínggù chéng bīng.',
      note:'……以下 = dưới … (ôn HSK 4); 摄氏度 ôn HSK 6 bài 19.',pair:'以下'},
     {promptLang:'vi',prompt:'Lúc thầy công bố điểm thi, không khí trong lớp như đông cứng lại.',answer:'老师宣布考试成绩的时候，教室里的空气好像凝固了。',answerPy:'Lǎoshī xuānbù kǎoshì chéngjì de shíhou, jiàoshì li de kōngqì hǎoxiàng nínggù le.',
      note:'好像 + V / Adj: so sánh ví von (比喻, ôn HSK 4).',pair:'好像'}
   ]},

  {n:30,zh:'蔓延',py:'mànyán',pos:'Động từ',vn:'lan tràn, lan ra',hv:'mạn diên',em:'🌫️',lesson:1,
   explain:['Động từ: lan ra, lan rộng dần như dây leo bò (蔓 = dây leo): 火势蔓延, 疾病蔓延.','Nghĩa bóng: cảm xúc, cảm giác lan tỏa: 烦躁在身体中蔓延开来, 凉意蔓延. Hay đi với 开来, 迅速, 防止.'],
   usage:'N (火势 / 疾病 / 情绪) + 蔓延; 在 + nơi + 蔓延开来; 防止 + N + 蔓延.',
   collo:['蔓延开来','火势蔓延','疾病蔓延','迅速蔓延'],
   ex_zh:'烦躁在他身体中蔓延开来。',ex_py:'Fánzào zài tā shēntǐ zhōng mànyán kāilái.',ex_vn:'Sự bực bội lan khắp cơ thể anh ta.',
   exList:[
     {zh:'烦躁在他身体中蔓延开来。',py:'Fánzào zài tā shēntǐ zhōng mànyán kāilái.',vn:'Sự bực bội lan khắp cơ thể anh ta.'},
     {zh:'凉风吹来，丝丝凉意在身体中蔓延开来。',py:'Liángfēng chuīlái, sīsī liángyì zài shēntǐ zhōng mànyán kāilái.',vn:'Gió mát thổi tới, từng làn hơi mát lan tỏa khắp cơ thể.'},
     {zh:'消防队员及时赶到，防止了火势进一步蔓延。',py:'Xiāofáng duìyuán jíshí gǎndào, fángzhǐle huǒshì jìn yí bù mànyán.',vn:'Lính cứu hỏa đến kịp thời, ngăn không cho đám cháy lan rộng thêm.'}
   ],
   colloFull:[
     {zh:'蔓延开来',py:'mànyán kāilái',vn:'lan ra'},
     {zh:'火势蔓延',py:'huǒshì mànyán',vn:'đám cháy lan rộng'},
     {zh:'疾病蔓延',py:'jíbìng mànyán',vn:'dịch bệnh lan tràn'},
     {zh:'迅速蔓延',py:'xùnsù mànyán',vn:'lan nhanh'},
     {zh:'防止蔓延',py:'fángzhǐ mànyán',vn:'ngăn chặn lây lan'}
   ],
   patterns:[
     {s:'N + 在 + nơi + 蔓延开来',m:'… lan ra khắp …'},
     {s:'防止 + N + 蔓延',m:'Ngăn … lan rộng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để ngăn dịch bệnh lây lan, mọi người nên đeo khẩu trang.',answer:'为了防止疾病蔓延，大家应该戴口罩。',answerPy:'Wèile fángzhǐ jíbìng mànyán, dàjiā yīnggāi dài kǒuzhào.',
      note:'防止 = phòng ngừa (ôn HSK 6 bài 9); 疾病 ôn bài 12.',pair:'防止'},
     {promptLang:'vi',prompt:'Tin đồn lan ra rất nhanh trên mạng.',answer:'谣言在网上迅速蔓延开来。',answerPy:'Yáoyán zài wǎng shang xùnsù mànyán kāilái.',
      note:'V + 开来 = lan / tỏa ra (bổ ngữ xu hướng mở rộng).',pair:'开来'}
   ]},

  {n:31,zh:'克制',py:'kèzhì',pos:'Động từ',vn:'kiềm chế, nén (cảm xúc)',hv:'khắc chế',em:'🧘',lesson:1,
   explain:['Động từ: kìm nén, kiềm chế (cảm xúc, ham muốn, hành động) không để bộc lộ: 克制情绪, 克制自己, 克制不住. Tính từ: 他很克制 (rất biết kiềm chế).','Gần 控制 (khống chế, điều khiển — phạm vi rộng: 控制温度, 控制局面) và 节制 (tiết chế, HSK 6 bài 18). 克制 chủ yếu dùng cho bản thân, cảm xúc.'],
   usage:'克制 + 情绪 / 自己 / 冲动; 努力 / 尽量 + 克制; 克制不住.',
   collo:['克制情绪','克制自己','克制不住','努力克制'],
   ex_zh:'他努力克制着自己的情绪，默默地背诵着刚刚读过的古诗。',ex_py:'Tā nǔlì kèzhìzhe zìjǐ de qíngxù, mòmò de bèisòngzhe gānggāng dúguo de gǔshī.',ex_vn:'Anh ta cố kìm nén cảm xúc của mình, lặng lẽ đọc thầm bài thơ cổ vừa đọc xong.',
   exList:[
     {zh:'他努力克制着自己的情绪，默默地背诵着刚刚读过的古诗。',py:'Tā nǔlì kèzhìzhe zìjǐ de qíngxù, mòmò de bèisòngzhe gānggāng dúguo de gǔshī.',vn:'Anh ta cố kìm nén cảm xúc của mình, lặng lẽ đọc thầm bài thơ cổ vừa đọc xong.'},
     {zh:'为了不影响工作，他努力克制自己的情绪。',py:'Wèile bù yǐngxiǎng gōngzuò, tā nǔlì kèzhì zìjǐ de qíngxù.',vn:'Để không ảnh hưởng đến công việc, anh ấy cố gắng kiềm chế cảm xúc của mình.'},
     {zh:'看到这么感人的场面，她再也克制不住，哭了起来。',py:'Kàndào zhème gǎnrén de chǎngmiàn, tā zài yě kèzhì bu zhù, kūle qǐlái.',vn:'Thấy cảnh tượng cảm động như vậy, cô ấy không kìm được nữa, bật khóc.'}
   ],
   colloFull:[
     {zh:'克制情绪',py:'kèzhì qíngxù',vn:'kiềm chế cảm xúc'},
     {zh:'克制自己',py:'kèzhì zìjǐ',vn:'kiềm chế bản thân'},
     {zh:'克制不住',py:'kèzhì bu zhù',vn:'không kìm được'},
     {zh:'努力克制',py:'nǔlì kèzhì',vn:'cố gắng kiềm chế'},
     {zh:'保持克制',py:'bǎochí kèzhì',vn:'giữ bình tĩnh, kiềm chế'}
   ],
   patterns:[
     {s:'努力 / 尽量 + 克制 + 自己的情绪',m:'Cố kiềm chế cảm xúc của mình'},
     {s:'再也克制不住 + V',m:'Không kìm được nữa mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù rất tức giận, anh ấy vẫn cố hết sức kiềm chế bản thân.',answer:'尽管非常生气，他还是尽量克制自己。',answerPy:'Jǐnguǎn fēicháng shēngqì, tā háishi jǐnliàng kèzhì zìjǐ.',
      note:'尽管……还是…… = dù … vẫn … (ôn HSK 4–5); 尽量 = cố hết mức.',pair:'尽管……还是……'},
     {promptLang:'vi',prompt:'Thấy món ăn ngon như vậy, tôi không kìm được lại ăn thêm một bát.',answer:'看到这么好吃的菜，我克制不住又吃了一碗。',answerPy:'Kàndào zhème hǎochī de cài, wǒ kèzhì bu zhù yòu chīle yì wǎn.',
      note:'V + 不住 = không … nổi (bổ ngữ khả năng, ôn HSK 4).',pair:'V不住'}
   ]},

  {n:32,zh:'默默',py:'mòmò',pos:'Phó từ',vn:'thầm, lặng lẽ, âm thầm',hv:'mặc mặc',em:'🤫',lesson:1,
   explain:['Phó từ: lặng lẽ, không lên tiếng, không phô trương: 默默地背诵, 默默付出, 默默地支持. Thường có 地: 默默(地) + V.','默默无闻 = âm thầm, không ai biết đến (thường để ca ngợi người âm thầm cống hiến).'],
   usage:'默默(地) + V (背诵 / 付出 / 支持 / 流泪); 默默无闻.',
   collo:['默默地背诵','默默付出','默默无闻','默默地支持'],
   ex_zh:'他总是默默为我付出，让我很感动。',ex_py:'Tā zǒngshì mòmò wèi wǒ fùchū, ràng wǒ hěn gǎndòng.',ex_vn:'Anh ấy luôn âm thầm hy sinh vì tôi, khiến tôi rất cảm động.',
   exList:[
     {zh:'他总是默默为我付出，让我很感动。',py:'Tā zǒngshì mòmò wèi wǒ fùchū, ràng wǒ hěn gǎndòng.',vn:'Anh ấy luôn âm thầm hy sinh vì tôi, khiến tôi rất cảm động.'},
     {zh:'他努力克制着自己的情绪，默默地背诵着刚刚读过的古诗。',py:'Tā nǔlì kèzhìzhe zìjǐ de qíngxù, mòmò de bèisòngzhe gānggāng dúguo de gǔshī.',vn:'Anh ta cố kìm nén cảm xúc của mình, lặng lẽ đọc thầm bài thơ cổ vừa đọc xong.'},
     {zh:'这些年来，是妈妈一直在背后默默地支持我。',py:'Zhèxiē nián lái, shì māma yìzhí zài bèihòu mòmò de zhīchí wǒ.',vn:'Bao năm nay, chính mẹ là người luôn âm thầm ủng hộ tôi phía sau.'}
   ],
   colloFull:[
     {zh:'默默地背诵',py:'mòmò de bèisòng',vn:'đọc thầm thuộc lòng'},
     {zh:'默默付出',py:'mòmò fùchū',vn:'âm thầm hy sinh, cống hiến'},
     {zh:'默默无闻',py:'mòmò wúwén',vn:'âm thầm không ai biết'},
     {zh:'默默地支持',py:'mòmò de zhīchí',vn:'âm thầm ủng hộ'},
     {zh:'默默流泪',py:'mòmò liúlèi',vn:'lặng lẽ rơi lệ'}
   ],
   patterns:[
     {s:'默默(地) + V',m:'Lặng lẽ / âm thầm …'},
     {s:'默默无闻地 + V',m:'Âm thầm … không ai biết đến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy không nói gì cả, chỉ lặng lẽ rơi nước mắt.',answer:'她什么也没说，只是默默地流泪。',answerPy:'Tā shénme yě méi shuō, zhǐshì mòmò de liúlèi.',
      note:'什么也没 + V = không … gì cả (ôn HSK 4); 只是 = chỉ.',pair:'什么也没'},
     {promptLang:'vi',prompt:'Có rất nhiều người âm thầm làm việc vì mọi người mà không ai biết đến.',answer:'有很多人默默无闻地为大家工作着。',answerPy:'Yǒu hěn duō rén mòmò wúwén de wèi dàjiā gōngzuòzhe.',
      note:'为 + người + V (ôn HSK 3); V + 着 chỉ trạng thái kéo dài.',pair:'为'}
   ]},

  {n:33,zh:'背诵',py:'bèisòng',pos:'Động từ',vn:'đọc thuộc lòng',hv:'bối tụng',em:'🗣️',lesson:1,
   explain:['Động từ: đọc thuộc lòng, đọc lại theo trí nhớ (bài văn, bài thơ, từ vựng): 背诵古诗, 背诵课文, 把……背诵下来.','Văn viết; khẩu ngữ dùng 背 (bèi): 背单词, 背下来. 背 ở đây đọc bèi (không đọc bēi = cõng).'],
   usage:'背诵 + 古诗 / 课文 / 单词; 把 + N + 背诵下来; 能 / 会 + 背诵.',
   collo:['背诵古诗','背诵课文','默默地背诵','全文背诵'],
   ex_zh:'他默默地背诵着刚刚读过的古诗。',ex_py:'Tā mòmò de bèisòngzhe gānggāng dúguo de gǔshī.',ex_vn:'Anh ta lặng lẽ đọc thầm bài thơ cổ vừa đọc xong.',
   exList:[
     {zh:'他默默地背诵着刚刚读过的古诗。',py:'Tā mòmò de bèisòngzhe gānggāng dúguo de gǔshī.',vn:'Anh ta lặng lẽ đọc thầm bài thơ cổ vừa đọc xong.'},
     {zh:'老师要求我们把这篇课文背诵下来。',py:'Lǎoshī yāoqiú wǒmen bǎ zhè piān kèwén bèisòng xiàlái.',vn:'Thầy giáo yêu cầu chúng tôi học thuộc lòng bài khóa này.'},
     {zh:'这首诗我小时候就能背诵，到现在还记得。',py:'Zhè shǒu shī wǒ xiǎo shíhou jiù néng bèisòng, dào xiànzài hái jìde.',vn:'Bài thơ này hồi nhỏ tôi đã thuộc lòng, đến giờ vẫn còn nhớ.'}
   ],
   colloFull:[
     {zh:'背诵古诗',py:'bèisòng gǔshī',vn:'đọc thuộc thơ cổ'},
     {zh:'背诵课文',py:'bèisòng kèwén',vn:'đọc thuộc bài khóa'},
     {zh:'默默地背诵',py:'mòmò de bèisòng',vn:'lặng lẽ đọc thuộc'},
     {zh:'全文背诵',py:'quánwén bèisòng',vn:'đọc thuộc toàn bài'},
     {zh:'背诵下来',py:'bèisòng xiàlái',vn:'học thuộc (được)'}
   ],
   patterns:[
     {s:'把 + N + 背诵下来',m:'Học thuộc lòng …'},
     {s:'背诵 + 古诗 / 课文',m:'Đọc thuộc thơ / bài khóa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học ngoại ngữ, đọc thuộc lòng bài khóa là một phương pháp rất hiệu quả.',answer:'学外语，背诵课文是一个很有效的方法。',answerPy:'Xué wàiyǔ, bèisòng kèwén shì yí ge hěn yǒuxiào de fāngfǎ.',
      note:'有效 = hiệu quả (HSK 4); cụm động từ 背诵课文 làm chủ ngữ.',pair:'有效'},
     {promptLang:'vi',prompt:'Cậu ấy không những thuộc lòng bài thơ này mà còn giải thích được ý nghĩa của nó.',answer:'他不但能背诵这首诗，而且还能解释诗的意思。',answerPy:'Tā búdàn néng bèisòng zhè shǒu shī, érqiě hái néng jiěshì shī de yìsi.',
      note:'不但……而且…… (ôn HSK 3–4).',pair:'不但……而且……'}
   ]},

  {n:34,zh:'编织',py:'biānzhī',pos:'Động từ',vn:'đan, bện, dệt; thêu dệt',hv:'biên chức',em:'🧶',lesson:1,
   explain:['Động từ: đan, bện, dệt (len, tre, mây…): 编织毛衣, 编织篮子.','Nghĩa bóng: thêu dệt, xây dựng trong trí tưởng tượng (giấc mơ, hình ảnh, câu chuyện, lời nói dối): 编织梦想, 在头脑中编织画面, 编织谎言.'],
   usage:'编织 + 毛衣 / 篮子; 编织 + 梦想 / 画面 / 谎言; 用手编织的 + N.',
   collo:['编织毛衣','编织梦想','编织画面','编织篮子'],
   ex_zh:'他在头脑中编织着诗中描绘的动人画面。',ex_py:'Tā zài tóunǎo zhōng biānzhīzhe shī zhōng miáohuì de dòngrén huàmiàn.',ex_vn:'Anh ta dệt nên trong đầu những bức tranh đẹp đẽ mà bài thơ miêu tả.',
   exList:[
     {zh:'他在头脑中编织着诗中描绘的动人画面。',py:'Tā zài tóunǎo zhōng biānzhīzhe shī zhōng miáohuì de dòngrén huàmiàn.',vn:'Anh ta dệt nên trong đầu những bức tranh đẹp đẽ mà bài thơ miêu tả.'},
     {zh:'冬天快到了，奶奶正在给我编织一件毛衣。',py:'Dōngtiān kuài dào le, nǎinai zhèngzài gěi wǒ biānzhī yí jiàn máoyī.',vn:'Mùa đông sắp đến, bà đang đan cho tôi một chiếc áo len.'},
     {zh:'每个年轻人都在编织着自己的梦想。',py:'Měi ge niánqīngrén dōu zài biānzhīzhe zìjǐ de mèngxiǎng.',vn:'Người trẻ nào cũng đang dệt nên giấc mơ của riêng mình.'}
   ],
   colloFull:[
     {zh:'编织毛衣',py:'biānzhī máoyī',vn:'đan áo len'},
     {zh:'编织梦想',py:'biānzhī mèngxiǎng',vn:'dệt ước mơ'},
     {zh:'编织画面',py:'biānzhī huàmiàn',vn:'dệt nên hình ảnh'},
     {zh:'编织篮子',py:'biānzhī lánzi',vn:'đan giỏ'},
     {zh:'编织谎言',py:'biānzhī huǎngyán',vn:'thêu dệt lời nói dối'}
   ],
   patterns:[
     {s:'编织 + 毛衣 / 篮子',m:'Đan áo len / giỏ'},
     {s:'在头脑中 + 编织 + N',m:'Dệt nên … trong đầu (tưởng tượng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những chiếc giỏ này đều do người dân địa phương đan bằng tay.',answer:'这些篮子都是当地人用手编织的。',answerPy:'Zhèxiē lánzi dōu shì dāngdì rén yòng shǒu biānzhī de.',
      note:'是……的 nhấn mạnh cách thức / người làm (ôn HSK 3–4).',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ta thêu dệt một lời nói dối để lừa mọi người.',answer:'他编织了一个谎言来欺骗大家。',answerPy:'Tā biānzhīle yí ge huǎngyán lái qīpiàn dàjiā.',
      note:'V1 + 来 + V2 (mục đích); 欺骗 ôn HSK 6 bài 3.',pair:'来'}
   ]},

  {n:35,zh:'强制',py:'qiángzhì',pos:'Động từ',vn:'cưỡng chế, ép buộc',hv:'cưỡng chế',em:'⛓️',lesson:1,
   explain:['Động từ: dùng sức ép (quyền lực, pháp luật, ý chí) buộc phải làm: 强制执行, 强制措施, 强制性; bài khoá: 强制的办法 = cách tự ép mình. Trái nghĩa: 自愿.','Khác 强迫 (HSK 6 bài 4): 强迫 thường là người ép người, khẩu ngữ hơn; 强制 hay dùng cho pháp luật, chính sách, quy định.'],
   usage:'强制 + 执行 / 规定 / 休息; 强制的 + 办法 / 措施; 强制性 + N.',
   collo:['强制的办法','强制执行','强制措施','强制性'],
   ex_zh:'可这种强制的办法没有效果。',ex_py:'Kě zhè zhǒng qiángzhì de bànfǎ méiyǒu xiàoguǒ.',ex_vn:'Nhưng cách ép buộc này chẳng có hiệu quả.',
   exList:[
     {zh:'可这种强制的办法没有效果。',py:'Kě zhè zhǒng qiángzhì de bànfǎ méiyǒu xiàoguǒ.',vn:'Nhưng cách ép buộc này chẳng có hiệu quả.'},
     {zh:'如果他拒不还钱，法院将强制执行。',py:'Rúguǒ tā jù bù huán qián, fǎyuàn jiāng qiángzhì zhíxíng.',vn:'Nếu anh ta nhất quyết không trả tiền, tòa án sẽ cưỡng chế thi hành.'},
     {zh:'学习兴趣是培养出来的，不是强制出来的。',py:'Xuéxí xìngqù shì péiyǎng chūlái de, bú shì qiángzhì chūlái de.',vn:'Hứng thú học tập là do bồi dưỡng mà có, không phải do ép buộc mà ra.'}
   ],
   colloFull:[
     {zh:'强制的办法',py:'qiángzhì de bànfǎ',vn:'cách ép buộc'},
     {zh:'强制执行',py:'qiángzhì zhíxíng',vn:'cưỡng chế thi hành'},
     {zh:'强制措施',py:'qiángzhì cuòshī',vn:'biện pháp cưỡng chế'},
     {zh:'强制性',py:'qiángzhìxìng',vn:'tính bắt buộc'},
     {zh:'强制休息',py:'qiángzhì xiūxi',vn:'bắt buộc nghỉ ngơi'}
   ],
   patterns:[
     {s:'强制 + V (执行 / 规定)',m:'Cưỡng chế …, bắt buộc …'},
     {s:'强制 + người + V',m:'Ép buộc ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều nước bắt buộc trẻ em đi ô tô phải ngồi ghế an toàn.',answer:'很多国家强制规定，儿童坐车必须使用安全座椅。',answerPy:'Hěn duō guójiā qiángzhì guīdìng, értóng zuò chē bìxū shǐyòng ānquán zuòyǐ.',
      note:'必须 = bắt buộc phải (ôn HSK 3).',pair:'必须'},
     {promptLang:'vi',prompt:'Cha mẹ ép buộc con học thì hiệu quả thường không tốt.',answer:'父母强制孩子学习，效果往往不好。',answerPy:'Fùmǔ qiángzhì háizi xuéxí, xiàoguǒ wǎngwǎng bù hǎo.',
      note:'往往 = thường thường (quy luật, ôn HSK 4).',pair:'往往'}
   ]},

  {n:36,zh:'田野',py:'tiányě',pos:'Danh từ',vn:'đồng ruộng, cánh đồng',hv:'điền dã',em:'🌾',lesson:1,
   explain:['Danh từ: ruộng đồng và đồng nội, vùng đất trồng trọt rộng lớn ngoài làng: 漫步在田野中, 金黄的田野.','Văn viết, giàu hình ảnh; khẩu ngữ: 地里, 田里. 田野调查 = khảo sát thực địa.'],
   usage:'漫步 / 奔跑 + 在田野(中 / 上); 金黄的 / 广阔的 + 田野; 田野里一片 + màu.',
   collo:['漫步在田野中','金黄的田野','田野上','广阔的田野'],
   ex_zh:'他漫步在田野中，欣赏着美丽的夜景。',ex_py:'Tā mànbù zài tiányě zhōng, xīnshǎngzhe měilì de yèjǐng.',ex_vn:'Anh ta thong thả dạo bước giữa cánh đồng, ngắm cảnh đêm tươi đẹp.',
   exList:[
     {zh:'他漫步在田野中，欣赏着美丽的夜景。',py:'Tā mànbù zài tiányě zhōng, xīnshǎngzhe měilì de yèjǐng.',vn:'Anh ta thong thả dạo bước giữa cánh đồng, ngắm cảnh đêm tươi đẹp.'},
     {zh:'秋天到了，田野里一片金黄。',py:'Qiūtiān dào le, tiányě li yí piàn jīnhuáng.',vn:'Mùa thu đến rồi, cánh đồng vàng rực một màu.'},
     {zh:'粉色的花儿开遍田野。',py:'Fěnsè de huār kāibiàn tiányě.',vn:'Hoa màu hồng nở khắp cánh đồng.'}
   ],
   colloFull:[
     {zh:'漫步在田野中',py:'mànbù zài tiányě zhōng',vn:'dạo bước giữa cánh đồng'},
     {zh:'金黄的田野',py:'jīnhuáng de tiányě',vn:'cánh đồng vàng óng'},
     {zh:'田野上',py:'tiányě shang',vn:'trên cánh đồng'},
     {zh:'广阔的田野',py:'guǎngkuò de tiányě',vn:'cánh đồng bao la'},
     {zh:'田野风光',py:'tiányě fēngguāng',vn:'cảnh sắc đồng quê'}
   ],
   patterns:[
     {s:'V (漫步 / 奔跑) + 在田野中 / 上',m:'… trên cánh đồng'},
     {s:'田野里一片 + màu sắc',m:'Cánh đồng một màu …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi kỳ nghỉ hè, tôi đều thích về quê chạy nhảy trên cánh đồng.',answer:'每到暑假，我都喜欢回老家在田野上奔跑。',answerPy:'Měi dào shǔjià, wǒ dōu xǐhuan huí lǎojiā zài tiányě shang bēnpǎo.',
      note:'每到……都…… = cứ đến … là … (ôn HSK 4).',pair:'每……都……'},
     {promptLang:'vi',prompt:'Đứng trên núi nhìn xuống, cánh đồng bao la một màu xanh biếc.',answer:'站在山上往下看，广阔的田野一片碧绿。',answerPy:'Zhàn zài shān shang wǎng xià kàn, guǎngkuò de tiányě yí piàn bìlǜ.',
      note:'一片 + màu sắc (miêu tả diện rộng); 广阔 ôn HSK 6 bài 19.',pair:'一片'}
   ]},

  {n:37,zh:'情形',py:'qíngxing',pos:'Danh từ',vn:'tình hình, tình huống, cảnh tượng',hv:'tình hình',em:'👀',lesson:1,
   explain:['Danh từ: tình hình, cảnh tượng sự việc nhìn thấy hoặc đã xảy ra — cụ thể, có hình ảnh: 眼前的情形, 当时的情形.','Gần 情况 (tình hình — phạm vi rộng, trừu tượng hơn: 经济情况, 学习情况). 形 đọc nhẹ: qíngxing.'],
   usage:'眼前 / 当时 + 的情形; 这种 / 类似的 + 情形; 被……的情形吸引住.',
   collo:['眼前的情形','当时的情形','这种情形','具体情形'],
   ex_zh:'忽然他被眼前的情形吸引住了。',ex_py:'Hūrán tā bèi yǎnqián de qíngxing xīyǐn zhù le.',ex_vn:'Bỗng nhiên anh ta bị cảnh tượng trước mắt thu hút.',
   exList:[
     {zh:'忽然他被眼前的情形吸引住了。',py:'Hūrán tā bèi yǎnqián de qíngxing xīyǐn zhù le.',vn:'Bỗng nhiên anh ta bị cảnh tượng trước mắt thu hút.'},
     {zh:'我至今还记得第一次上台演讲时的情形。',py:'Wǒ zhìjīn hái jìde dì yī cì shàngtái yǎnjiǎng shí de qíngxing.',vn:'Đến giờ tôi vẫn còn nhớ cảnh lần đầu lên sân khấu diễn thuyết.'},
     {zh:'遇到这种情形，你应该先报警。',py:'Yùdào zhè zhǒng qíngxing, nǐ yīnggāi xiān bàojǐng.',vn:'Gặp tình huống như thế, bạn nên báo cảnh sát trước.'}
   ],
   colloFull:[
     {zh:'眼前的情形',py:'yǎnqián de qíngxing',vn:'cảnh tượng trước mắt'},
     {zh:'当时的情形',py:'dāngshí de qíngxing',vn:'tình hình lúc đó'},
     {zh:'这种情形',py:'zhè zhǒng qíngxing',vn:'tình huống này'},
     {zh:'具体情形',py:'jùtǐ qíngxing',vn:'tình hình cụ thể'},
     {zh:'类似的情形',py:'lèisì de qíngxing',vn:'tình huống tương tự'}
   ],
   patterns:[
     {s:'眼前 / 当时 + 的情形',m:'Cảnh tượng trước mắt / tình hình lúc ấy'},
     {s:'遇到 + 这种情形',m:'Gặp tình huống như thế'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn có thể kể cho tôi nghe tình hình lúc đó không?',answer:'你能给我讲讲当时的情形吗？',answerPy:'Nǐ néng gěi wǒ jiǎngjiang dāngshí de qíngxing ma?',
      note:'给 + người + V; lặp động từ 讲讲 cho mềm (ôn HSK 3).',pair:'给'},
     {promptLang:'vi',prompt:'Nhìn cảnh tượng trước mắt, cô ấy không nói nên lời.',answer:'看着眼前的情形，她说不出话来。',answerPy:'Kànzhe yǎnqián de qíngxing, tā shuō bu chū huà lái.',
      note:'V不出……来 = không … ra được (bổ ngữ khả năng, ôn HSK 4).',pair:'V不出来'}
   ]},

  {n:38,zh:'耀眼',py:'yàoyǎn',pos:'Tính từ',vn:'chói mắt, lóa mắt, rực rỡ',hv:'diệu nhãn',em:'✨',lesson:1,
   explain:['Tính từ: (ánh sáng) mạnh đến chói mắt: 耀眼的光芒, 阳光耀眼. Nghĩa bóng: rực rỡ, nổi bật: 耀眼的成绩, 耀眼的明星.','Gần 刺眼 (chói gây khó chịu — sắc thái tiêu cực); 耀眼 thường trung tính hoặc tích cực.'],
   usage:'耀眼的 + 光芒 / 阳光 / 成绩 / 明星; 显得 / 格外 + 耀眼.',
   collo:['耀眼的光芒','阳光耀眼','耀眼的成绩','耀眼的明星'],
   ex_zh:'萤火虫的尾巴都有亮光在闪烁，成为黑暗中唯一耀眼的光芒。',ex_py:'Yínghuǒchóng de wěiba dōu yǒu liàngguāng zài shǎnshuò, chéngwéi hēi\'àn zhōng wéiyī yàoyǎn de guāngmáng.',ex_vn:'Đuôi đom đóm đều có ánh sáng nhấp nháy, trở thành thứ ánh sáng rực rỡ duy nhất trong bóng tối.',
   exList:[
     {zh:'萤火虫的尾巴都有亮光在闪烁，成为黑暗中唯一耀眼的光芒。',py:'Yínghuǒchóng de wěiba dōu yǒu liàngguāng zài shǎnshuò, chéngwéi hēi\'àn zhōng wéiyī yàoyǎn de guāngmáng.',vn:'Đuôi đom đóm đều có ánh sáng nhấp nháy, trở thành thứ ánh sáng rực rỡ duy nhất trong bóng tối.'},
     {zh:'中午的阳光十分耀眼，我不得不戴上墨镜。',py:'Zhōngwǔ de yángguāng shífēn yàoyǎn, wǒ bùdébù dàishang mòjìng.',vn:'Nắng buổi trưa rất chói, tôi đành phải đeo kính râm.'},
     {zh:'她在这次比赛中取得了耀眼的成绩。',py:'Tā zài zhè cì bǐsài zhōng qǔdéle yàoyǎn de chéngjì.',vn:'Cô ấy đã đạt thành tích rực rỡ trong cuộc thi lần này.'}
   ],
   colloFull:[
     {zh:'耀眼的光芒',py:'yàoyǎn de guāngmáng',vn:'ánh sáng chói lọi'},
     {zh:'阳光耀眼',py:'yángguāng yàoyǎn',vn:'nắng chói chang'},
     {zh:'耀眼的成绩',py:'yàoyǎn de chéngjì',vn:'thành tích rực rỡ'},
     {zh:'耀眼的明星',py:'yàoyǎn de míngxīng',vn:'ngôi sao sáng chói'},
     {zh:'格外耀眼',py:'géwài yàoyǎn',vn:'đặc biệt chói lọi'}
   ],
   patterns:[
     {s:'耀眼的 + 光芒 / 成绩',m:'Ánh sáng chói lọi / thành tích rực rỡ'},
     {s:'显得 + 格外耀眼',m:'Trông đặc biệt rực rỡ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Viên kim cương này dưới ánh đèn trông đặc biệt lấp lánh chói mắt.',answer:'这颗钻石在灯光下显得格外耀眼。',answerPy:'Zhè kē zuànshí zài dēngguāng xià xiǎnde géwài yàoyǎn.',
      note:'显得 = trông có vẻ (HSK 5); 格外 = đặc biệt.',pair:'显得'},
     {promptLang:'vi',prompt:'Anh ấy là ngôi sao sáng chói nhất của đội bóng.',answer:'他是球队里最耀眼的明星。',answerPy:'Tā shì qiúduì li zuì yàoyǎn de míngxīng.',
      note:'最 + Adj + 的 + N (ôn HSK 2).',pair:'最'}
   ]},

  {n:39,zh:'光芒',py:'guāngmáng',pos:'Danh từ',vn:'hào quang, tia sáng, ánh sáng',hv:'quang mang',em:'🌟',lesson:1,
   explain:['Danh từ: những tia sáng tỏa ra xung quanh (芒 = tia nhọn): 太阳的光芒, 耀眼的光芒, 微弱的光芒.','Nghĩa bóng: 人性的光芒 (ánh sáng nhân tính), 智慧的光芒. Văn viết, trang trọng hơn 光 / 亮光. 光芒四射 = tỏa sáng rực rỡ.'],
   usage:'耀眼 / 微弱 / 金色 + 的光芒; 发出 / 放射 + 光芒; 光芒四射.',
   collo:['耀眼的光芒','微弱的光芒','太阳的光芒','发出光芒'],
   ex_zh:'萤火虫的尾巴都有亮光在闪烁，成为黑暗中唯一耀眼的光芒。',ex_py:'Yínghuǒchóng de wěiba dōu yǒu liàngguāng zài shǎnshuò, chéngwéi hēi\'àn zhōng wéiyī yàoyǎn de guāngmáng.',ex_vn:'Đuôi đom đóm đều có ánh sáng nhấp nháy, trở thành thứ ánh sáng rực rỡ duy nhất trong bóng tối.',
   exList:[
     {zh:'萤火虫的尾巴都有亮光在闪烁，成为黑暗中唯一耀眼的光芒。',py:'Yínghuǒchóng de wěiba dōu yǒu liàngguāng zài shǎnshuò, chéngwéi hēi\'àn zhōng wéiyī yàoyǎn de guāngmáng.',vn:'Đuôi đom đóm đều có ánh sáng nhấp nháy, trở thành thứ ánh sáng rực rỡ duy nhất trong bóng tối.'},
     {zh:'远处村子的灯光都熄灭了，只剩下星星那微弱的光芒。',py:'Yuǎnchù cūnzi de dēngguāng dōu xīmiè le, zhǐ shèngxia xīngxing nà wēiruò de guāngmáng.',vn:'Ánh đèn trong làng phía xa đều đã tắt, chỉ còn lại ánh sáng yếu ớt của những vì sao.'},
     {zh:'清晨，太阳升起，金色的光芒洒满了大地。',py:'Qīngchén, tàiyáng shēngqǐ, jīnsè de guāngmáng sǎmǎnle dàdì.',vn:'Sáng sớm, mặt trời mọc, ánh sáng vàng óng trải khắp mặt đất.'}
   ],
   colloFull:[
     {zh:'耀眼的光芒',py:'yàoyǎn de guāngmáng',vn:'ánh sáng chói lọi'},
     {zh:'微弱的光芒',py:'wēiruò de guāngmáng',vn:'ánh sáng yếu ớt'},
     {zh:'太阳的光芒',py:'tàiyáng de guāngmáng',vn:'ánh mặt trời'},
     {zh:'发出光芒',py:'fāchū guāngmáng',vn:'tỏa ra ánh sáng'},
     {zh:'光芒四射',py:'guāngmáng sìshè',vn:'tỏa sáng rực rỡ'}
   ],
   patterns:[
     {s:'Adj + 的光芒',m:'Ánh sáng … (耀眼 / 微弱 / 金色)'},
     {s:'发出 + 光芒',m:'Tỏa ra ánh sáng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ánh sáng do ngọn hải đăng phát ra chỉ đường cho tàu thuyền.',answer:'灯塔发出的光芒为船只指引方向。',answerPy:'Dēngtǎ fāchū de guāngmáng wèi chuánzhī zhǐyǐn fāngxiàng.',
      note:'为 + đối tượng + V = … cho … (ôn HSK 3).',pair:'为'},
     {promptLang:'vi',prompt:'Ánh sáng tuy yếu ớt nhưng đủ để anh ta đọc sách.',answer:'光芒虽然微弱，但足以让他看书。',answerPy:'Guāngmáng suīrán wēiruò, dàn zúyǐ ràng tā kàn shū.',
      note:'足以 = đủ để (ôn HSK 6 bài 16); 虽然……但…….',pair:'足以'}
   ]},

  {n:40,zh:'捞',py:'lāo',pos:'Động từ',vn:'vớt, mò, chụp lấy; kiếm chác',hv:'lao',em:'🎣',lesson:1,
   explain:['Động từ: vớt, mò lấy vật trong nước / chất lỏng: 捞鱼, 捞饺子, 捞起来; bài khoá dùng mở rộng: vơ, chụp lấy trong không trung (伸手一捞).','Nghĩa xấu: kiếm chác bằng cách không chính đáng — 捞好处, 捞钱. Thành ngữ: 海底捞针 = mò kim đáy bể.'],
   usage:'伸手一捞; 捞 + 鱼 / 饺子; 把 + N + 捞 + 出来 / 上来; 捞好处.',
   collo:['伸手一捞','捞鱼','捞饺子','海底捞针'],
   ex_zh:'忽然一只萤火虫飞到了眼前，他伸手一捞，把它握在了手心。',ex_py:'Hūrán yì zhī yínghuǒchóng fēidàole yǎnqián, tā shēnshǒu yì lāo, bǎ tā wò zài le shǒuxīn.',ex_vn:'Bỗng một con đom đóm bay đến trước mắt, anh ta đưa tay chụp một cái, nắm gọn nó trong lòng bàn tay.',
   exList:[
     {zh:'忽然一只萤火虫飞到了眼前，他伸手一捞，把它握在了手心。',py:'Hūrán yì zhī yínghuǒchóng fēidàole yǎnqián, tā shēnshǒu yì lāo, bǎ tā wò zài le shǒuxīn.',vn:'Bỗng một con đom đóm bay đến trước mắt, anh ta đưa tay chụp một cái, nắm gọn nó trong lòng bàn tay.'},
     {zh:'饺子煮好了，妈妈用勺子把它们捞了出来。',py:'Jiǎozi zhǔhǎo le, māma yòng sháozi bǎ tāmen lāole chūlái.',vn:'Sủi cảo luộc chín rồi, mẹ dùng muôi vớt ra.'},
     {zh:'在这么大的城市里找一个人，简直是海底捞针。',py:'Zài zhème dà de chéngshì li zhǎo yí ge rén, jiǎnzhí shì hǎidǐ lāo zhēn.',vn:'Tìm một người trong thành phố lớn thế này đúng là mò kim đáy bể.'}
   ],
   colloFull:[
     {zh:'伸手一捞',py:'shēnshǒu yì lāo',vn:'đưa tay chụp một cái'},
     {zh:'捞鱼',py:'lāo yú',vn:'vớt cá'},
     {zh:'捞饺子',py:'lāo jiǎozi',vn:'vớt sủi cảo'},
     {zh:'海底捞针',py:'hǎidǐ lāo zhēn',vn:'mò kim đáy bể'},
     {zh:'捞好处',py:'lāo hǎochu',vn:'kiếm chác lợi lộc'}
   ],
   patterns:[
     {s:'把 + N + 捞 + 出来 / 上来',m:'Vớt … ra / lên'},
     {s:'伸手一捞',m:'Đưa tay chụp một cái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điện thoại rơi xuống sông, anh ấy mò mãi vẫn không vớt lên được.',answer:'手机掉进河里了，他捞了半天也没捞上来。',answerPy:'Shǒujī diàojìn hé li le, tā lāole bàntiān yě méi lāo shànglái.',
      note:'V了半天也没…… = làm mãi cũng không … (ôn HSK 4).',pair:'半天'},
     {promptLang:'vi',prompt:'Có những người làm việc chỉ để kiếm chác lợi lộc cho bản thân.',answer:'有些人做事只是为了给自己捞好处。',answerPy:'Yǒuxiē rén zuò shì zhǐshì wèile gěi zìjǐ lāo hǎochu.',
      note:'只是为了 = chỉ là để (ôn HSK 3–4).',pair:'只是为了'}
   ]},

  {n:41,zh:'摊',py:'tān',pos:'Động từ',vn:'trải ra, mở ra; chia đều',hv:'than',em:'🖐️',lesson:1,
   explain:['Động từ: trải ra, mở ra, bày ra trên mặt phẳng: 摊开手掌, 把地图摊在桌子上; chia đều (chi phí): 平摊, 大家摊钱.','Danh từ: sạp hàng — 水果摊, 摆地摊 (bày hàng bán ven đường). Khẩu ngữ: 摊上 = gặp phải (摊上这种事).'],
   usage:'摊开 + 手掌 / 地图 / 书; 把 + N + 摊在 + nơi; 平摊 + chi phí.',
   collo:['摊开手掌','摊开地图','水果摊','摆地摊'],
   ex_zh:'他把它握在了手心，摊开手掌，哇，萤火虫还老老实实地待在那里。',ex_py:'Tā bǎ tā wò zài le shǒuxīn, tānkāi shǒuzhǎng, wa, yínghuǒchóng hái lǎolǎoshíshí de dāi zài nàlǐ.',ex_vn:'Anh ta nắm nó trong lòng bàn tay, mở tay ra — ôi chao, con đom đóm vẫn ngoan ngoãn nằm yên ở đó.',
   exList:[
     {zh:'他把它握在了手心，摊开手掌，哇，萤火虫还老老实实地待在那里。',py:'Tā bǎ tā wò zài le shǒuxīn, tānkāi shǒuzhǎng, wa, yínghuǒchóng hái lǎolǎoshíshí de dāi zài nàlǐ.',vn:'Anh ta nắm nó trong lòng bàn tay, mở tay ra — ôi chao, con đom đóm vẫn ngoan ngoãn nằm yên ở đó.'},
     {zh:'他把地图摊在桌子上，仔细研究路线。',py:'Tā bǎ dìtú tān zài zhuōzi shang, zǐxì yánjiū lùxiàn.',vn:'Anh ấy trải tấm bản đồ ra bàn, xem kỹ lộ trình.'},
     {zh:'这次聚餐一共花了六百块，我们六个人平摊，每人一百。',py:'Zhè cì jùcān yígòng huāle liùbǎi kuài, wǒmen liù ge rén píngtān, měi rén yìbǎi.',vn:'Bữa liên hoan này hết tổng cộng sáu trăm tệ, sáu người chúng tôi chia đều, mỗi người một trăm.'}
   ],
   colloFull:[
     {zh:'摊开手掌',py:'tānkāi shǒuzhǎng',vn:'mở bàn tay ra'},
     {zh:'摊开地图',py:'tānkāi dìtú',vn:'trải bản đồ ra'},
     {zh:'水果摊',py:'shuǐguǒtān',vn:'sạp hoa quả'},
     {zh:'摆地摊',py:'bǎi dìtān',vn:'bày hàng bán ven đường'},
     {zh:'平摊费用',py:'píngtān fèiyong',vn:'chia đều chi phí'}
   ],
   patterns:[
     {s:'摊开 + N (手掌 / 地图)',m:'Mở / trải … ra'},
     {s:'(几个人) + 平摊 + chi phí',m:'Chia đều tiền …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé mở lòng bàn tay ra, trong tay là một viên kẹo.',answer:'小男孩摊开手掌，手里是一块糖。',answerPy:'Xiǎo nánhái tānkāi shǒuzhǎng, shǒu li shì yí kuài táng.',
      note:'Nơi chốn + 是 + N: câu tồn tại (ôn HSK 3).',pair:'是'},
     {promptLang:'vi',prompt:'Tiền điện nước tháng này, bốn người chúng tôi chia đều.',answer:'这个月的水电费，我们四个人平摊。',answerPy:'Zhège yuè de shuǐdiànfèi, wǒmen sì ge rén píngtān.',
      note:'Đưa tân ngữ (水电费) lên đầu câu làm chủ đề (ôn HSK 4).',pair:'主题句'}
   ]},

  {n:42,zh:'哇',py:'wa',pos:'Trợ từ',vn:'ôi chao, chà, oa',hv:'oa',em:'😮',lesson:1,
   explain:['Thán từ / trợ từ: ① biểu thị ngạc nhiên, thán phục: 哇，萤火虫还老老实实地待在那里 / 哇，真漂亮!; ② trợ từ ngữ khí — biến âm của 啊 khi đứng sau âm tiết kết thúc bằng -u, -ao, -ou: 好哇, 快走哇.','Còn là tượng thanh (wā): 哇的一声哭了 = òa lên khóc. Giới trẻ hay nói 哇塞 (wāsài) = trời ơi!'],
   usage:'哇，……! (đầu câu, cảm thán); 好哇 / 走哇 / 快跑哇 (cuối câu); 哇的一声.',
   collo:['哇，真漂亮','好哇','快走哇','哇的一声'],
   ex_zh:'摊开手掌，哇，萤火虫还老老实实地待在那里。',ex_py:'Tānkāi shǒuzhǎng, wa, yínghuǒchóng hái lǎolǎoshíshí de dāi zài nàlǐ.',ex_vn:'Mở bàn tay ra — ôi chao, con đom đóm vẫn ngoan ngoãn nằm yên ở đó.',
   exList:[
     {zh:'摊开手掌，哇，萤火虫还老老实实地待在那里。',py:'Tānkāi shǒuzhǎng, wa, yínghuǒchóng hái lǎolǎoshíshí de dāi zài nàlǐ.',vn:'Mở bàn tay ra — ôi chao, con đom đóm vẫn ngoan ngoãn nằm yên ở đó.'},
     {zh:'哇，这里的风景太美了！',py:'Wa, zhèlǐ de fēngjǐng tài měi le!',vn:'Chà, phong cảnh ở đây đẹp quá!'},
     {zh:'大家快走哇，火车就要开了！',py:'Dàjiā kuài zǒu wa, huǒchē jiù yào kāi le!',vn:'Mọi người đi nhanh lên nào, tàu sắp chạy rồi!'}
   ],
   colloFull:[
     {zh:'哇，真漂亮',py:'wa, zhēn piàoliang',vn:'chà, đẹp quá'},
     {zh:'好哇',py:'hǎo wa',vn:'hay quá, được đấy'},
     {zh:'快走哇',py:'kuài zǒu wa',vn:'đi nhanh lên nào'},
     {zh:'哇的一声',py:'wā de yì shēng',vn:'òa một tiếng'},
     {zh:'哇塞',py:'wāsài',vn:'trời ơi (khẩu ngữ)'}
   ],
   patterns:[
     {s:'哇，+ câu cảm thán',m:'Chà / ôi chao, …!'},
     {s:'…u / ao / ou + 哇',m:'啊 biến thành 哇 sau âm cuối u'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chà, bạn nấu nhiều món thế này cơ à!',answer:'哇，你做了这么多菜啊！',answerPy:'Wa, nǐ zuòle zhème duō cài a!',
      note:'这么 + Adj = … thế này (ôn HSK 3).',pair:'这么'},
     {promptLang:'vi',prompt:'Hay quá! Chúng mình cùng đi nhé!',answer:'好哇！咱们一起去吧！',answerPy:'Hǎo wa! Zánmen yìqǐ qù ba!',
      note:'好 kết thúc bằng -ao nên 啊 đọc thành 哇; 吧 = đề nghị (ôn HSK 2).',pair:'吧'}
   ]},

  {n:43,zh:'毫米',py:'háomǐ',pos:'Lượng từ',vn:'mi-li-mét (mm)',hv:'hào mễ',em:'📏',lesson:1,
   explain:['Lượng từ (đơn vị đo độ dài): milimét; 1毫米 = 1/1000米. Thứ tự: 公里 (km) → 米 (m) → 厘米 (cm) → 毫米 (mm).','Bài khoá: 亮光只能用毫米计算 = đốm sáng nhỏ tới mức chỉ đo được bằng milimét. Còn dùng cho lượng mưa: 降雨量一百毫米.'],
   usage:'số + 毫米; 用毫米计算; 精确到毫米; 降雨量 + số + 毫米.',
   collo:['用毫米计算','几毫米','降雨量一百毫米','精确到毫米'],
   ex_zh:'也许那亮光只能用毫米计算，可却还算明亮。',ex_py:'Yěxǔ nà liàngguāng zhǐ néng yòng háomǐ jìsuàn, kě què hái suàn míngliàng.',ex_vn:'Có lẽ đốm sáng ấy chỉ tính được bằng milimét, nhưng vẫn còn khá sáng.',
   exList:[
     {zh:'也许那亮光只能用毫米计算，可却还算明亮。',py:'Yěxǔ nà liàngguāng zhǐ néng yòng háomǐ jìsuàn, kě què hái suàn míngliàng.',vn:'Có lẽ đốm sáng ấy chỉ tính được bằng milimét, nhưng vẫn còn khá sáng.'},
     {zh:'昨天这个地区的降雨量达到了一百毫米。',py:'Zuótiān zhège dìqū de jiàngyǔliàng dádàole yìbǎi háomǐ.',vn:'Hôm qua lượng mưa ở khu vực này lên tới một trăm milimét.'},
     {zh:'这种零件的误差不能超过零点一毫米。',py:'Zhè zhǒng língjiàn de wùchā bù néng chāoguò líng diǎn yī háomǐ.',vn:'Sai số của loại linh kiện này không được vượt quá 0,1 milimét.'}
   ],
   colloFull:[
     {zh:'用毫米计算',py:'yòng háomǐ jìsuàn',vn:'tính bằng milimét'},
     {zh:'几毫米',py:'jǐ háomǐ',vn:'vài milimét'},
     {zh:'降雨量一百毫米',py:'jiàngyǔliàng yìbǎi háomǐ',vn:'lượng mưa 100 mm'},
     {zh:'精确到毫米',py:'jīngquè dào háomǐ',vn:'chính xác đến milimét'},
     {zh:'一千毫米',py:'yìqiān háomǐ',vn:'một nghìn milimét'}
   ],
   patterns:[
     {s:'số + 毫米 + 长 / 宽 / 厚',m:'Dài / rộng / dày … mm'},
     {s:'用毫米计算',m:'Tính bằng milimét'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài côn trùng này chỉ dài vài milimét, nhìn bằng mắt thường rất khó thấy rõ.',answer:'这种虫子只有几毫米长，用肉眼很难看清楚。',answerPy:'Zhè zhǒng chóngzi zhǐ yǒu jǐ háomǐ cháng, yòng ròuyǎn hěn nán kàn qīngchu.',
      note:'只有 + số lượng = chỉ có (ôn HSK 3); 很难 + V.',pair:'只有'},
     {promptLang:'vi',prompt:'Một mét bằng một nghìn milimét.',answer:'一米等于一千毫米。',answerPy:'Yì mǐ děngyú yìqiān háomǐ.',
      note:'等于 = bằng (HSK 4).',pair:'等于'}
   ]},

  {n:44,zh:'迸发',py:'bèngfā',pos:'Động từ',vn:'tóe ra, bùng ra, nảy ra',hv:'bính phát',em:'💡',lesson:1,
   explain:['Động từ: (từ bên trong) bắn ra, bùng ra đột ngột: 火花迸发.','Nghĩa bóng (thường gặp): ý tưởng, cảm xúc, tiếng động… bùng lên, nảy ra: 头脑中迸发出一个想法, 迸发出灵感, 迸发出热烈的掌声. Văn viết; hay đi với 出.'],
   usage:'(nơi) + 迸发出 + N (想法 / 灵感 / 火花 / 掌声 / 热情).',
   collo:['迸发出想法','迸发出灵感','迸发出火花','迸发出掌声'],
   ex_zh:'瞬间，他头脑中迸发出一个想法。',ex_py:'Shùnjiān, tā tóunǎo zhōng bèngfā chū yí ge xiǎngfǎ.',ex_vn:'Trong khoảnh khắc, trong đầu anh ta nảy ra một ý tưởng.',
   exList:[
     {zh:'瞬间，他头脑中迸发出一个想法。',py:'Shùnjiān, tā tóunǎo zhōng bèngfā chū yí ge xiǎngfǎ.',vn:'Trong khoảnh khắc, trong đầu anh ta nảy ra một ý tưởng.'},
     {zh:'演出结束，观众席里迸发出热烈的掌声。',py:'Yǎnchū jiéshù, guānzhòngxí li bèngfā chū rèliè de zhǎngshēng.',vn:'Buổi biểu diễn kết thúc, khán đài bùng lên những tràng pháo tay nồng nhiệt.'},
     {zh:'在大自然中散步，常常能让人迸发出创作的灵感。',py:'Zài dàzìrán zhōng sànbù, chángcháng néng ràng rén bèngfā chū chuàngzuò de línggǎn.',vn:'Đi dạo giữa thiên nhiên thường khiến người ta bừng lên cảm hứng sáng tác.'}
   ],
   colloFull:[
     {zh:'迸发出想法',py:'bèngfā chū xiǎngfǎ',vn:'nảy ra ý tưởng'},
     {zh:'迸发出灵感',py:'bèngfā chū línggǎn',vn:'bừng lên cảm hứng'},
     {zh:'迸发出火花',py:'bèngfā chū huǒhuā',vn:'tóe ra tia lửa'},
     {zh:'迸发出掌声',py:'bèngfā chū zhǎngshēng',vn:'bùng lên tiếng vỗ tay'},
     {zh:'热情迸发',py:'rèqíng bèngfā',vn:'nhiệt huyết bùng lên'}
   ],
   patterns:[
     {s:'头脑中 + 迸发出 + 想法 / 灵感',m:'Trong đầu nảy ra ý tưởng / cảm hứng'},
     {s:'(nơi) + 迸发出 + 掌声 / 欢呼声',m:'… bùng lên tiếng vỗ tay / reo hò'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khi thảo luận, trong đầu mọi người nảy ra rất nhiều ý tưởng mới.',answer:'讨论的时候，大家的头脑中迸发出很多新想法。',answerPy:'Tǎolùn de shíhou, dàjiā de tóunǎo zhōng bèngfā chū hěn duō xīn xiǎngfǎ.',
      note:'……的时候 = khi … (ôn HSK 2).',pair:'的时候'},
     {promptLang:'vi',prompt:'Nghe tin đội nhà chiến thắng, cả sân vận động bùng lên tiếng reo hò.',answer:'听到主队获胜的消息，整个体育场迸发出一片欢呼声。',answerPy:'Tīngdào zhǔduì huòshèng de xiāoxi, zhěnggè tǐyùchǎng bèngfā chū yí piàn huānhūshēng.',
      note:'整个 = toàn bộ, cả (HSK 5); 一片 + âm thanh.',pair:'整个'}
   ]},

  {n:45,zh:'兜',py:'dōu',pos:'Danh từ',vn:'túi',hv:'đâu',em:'👝',lesson:1,
   explain:['Danh từ: túi (túi áo, túi quần, túi vải): 布兜, 裤兜, 衣兜, 兜里.','Động từ: bọc, gói lại (用衣服兜着); đi vòng — 兜圈子 (đi lòng vòng / nói vòng vo), 兜风 (đi hóng gió).'],
   usage:'布兜 / 裤兜 / 衣兜; 放在 + 兜里; 别兜圈子 (đừng vòng vo).',
   collo:['布兜','裤兜','兜里','兜圈子'],
   ex_zh:'他找了个薄布做的布兜，抓了一些萤火虫放在里面。',ex_py:'Tā zhǎole ge báo bù zuò de bùdōu, zhuāle yìxiē yínghuǒchóng fàng zài lǐmiàn.',ex_vn:'Anh ta tìm một cái túi làm bằng vải mỏng, bắt ít đom đóm bỏ vào trong.',
   exList:[
     {zh:'他找了个薄布做的布兜，抓了一些萤火虫放在里面。',py:'Tā zhǎole ge báo bù zuò de bùdōu, zhuāle yìxiē yínghuǒchóng fàng zài lǐmiàn.',vn:'Anh ta tìm một cái túi làm bằng vải mỏng, bắt ít đom đóm bỏ vào trong.'},
     {zh:'他把手机放在裤兜里，结果不小心弄丢了。',py:'Tā bǎ shǒujī fàng zài kùdōu li, jiéguǒ bù xiǎoxīn nòngdiū le.',vn:'Anh ấy để điện thoại trong túi quần, kết quả sơ ý làm mất.'},
     {zh:'有话直说，别跟我兜圈子了。',py:'Yǒu huà zhí shuō, bié gēn wǒ dōu quānzi le.',vn:'Có gì cứ nói thẳng, đừng vòng vo với tôi nữa.'}
   ],
   colloFull:[
     {zh:'布兜',py:'bùdōu',vn:'túi vải'},
     {zh:'裤兜',py:'kùdōu',vn:'túi quần'},
     {zh:'兜里',py:'dōu li',vn:'trong túi'},
     {zh:'兜圈子',py:'dōu quānzi',vn:'đi vòng vòng, nói vòng vo'},
     {zh:'兜风',py:'dōufēng',vn:'đi hóng gió'}
   ],
   patterns:[
     {s:'把 + N + 放在 + 兜里',m:'Để … trong túi'},
     {s:'别 + 兜圈子',m:'Đừng vòng vo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong túi tôi chỉ còn mười tệ, không đủ đi taxi.',answer:'我兜里只剩下十块钱了，不够打车。',answerPy:'Wǒ dōu li zhǐ shèngxia shí kuài qián le, bú gòu dǎchē.',
      note:'不够 + V = không đủ để … (ôn HSK 4).',pair:'不够'},
     {promptLang:'vi',prompt:'Anh cứ nói thẳng đi, đừng vòng vo nữa.',answer:'你就直说吧，别再兜圈子了。',answerPy:'Nǐ jiù zhí shuō ba, bié zài dōu quānzi le.',
      note:'别再……了 = đừng … nữa (ôn HSK 3).',pair:'别再……了'}
   ]},

  {n:46,zh:'灯笼',py:'dēnglong',pos:'Danh từ',vn:'đèn lồng',hv:'đăng lung',em:'🏮',lesson:1,
   explain:['Danh từ: đèn lồng (khung tre / thép bọc giấy, vải, bên trong thắp nến); lượng từ 个 / 盏. Tết Nguyên tiêu (元宵节) có tục ngắm đèn (看花灯); Trung thu trẻ em rước đèn (提灯笼).','笼 đọc nhẹ: dēnglong. Quán ngữ: 打着灯笼也找不到 = soi đèn cũng không tìm ra (cực hiếm có).'],
   usage:'挂 / 提 / 做 + 灯笼; 红灯笼; 打着灯笼也找不到.',
   collo:['挂灯笼','红灯笼','做灯笼','打着灯笼也找不到'],
   ex_zh:'他把口袋吊起来，一个“灯笼”就做成啦。',ex_py:'Tā bǎ kǒudai diào qǐlái, yí ge "dēnglong" jiù zuòchéng la.',ex_vn:'Anh ta treo cái túi lên, thế là một chiếc "đèn lồng" đã làm xong.',
   exList:[
     {zh:'他把口袋吊起来，一个“灯笼”就做成啦。',py:'Tā bǎ kǒudai diào qǐlái, yí ge "dēnglong" jiù zuòchéng la.',vn:'Anh ta treo cái túi lên, thế là một chiếc "đèn lồng" đã làm xong.'},
     {zh:'春节快到了，家家户户门口都挂起了红灯笼。',py:'Chūnjié kuài dào le, jiājiāhùhù ménkǒu dōu guàqǐle hóng dēnglong.',vn:'Tết sắp đến, trước cửa nhà nào cũng treo đèn lồng đỏ.'},
     {zh:'这么好的机会，打着灯笼也找不到，你可别错过了。',py:'Zhème hǎo de jīhuì, dǎzhe dēnglong yě zhǎo bu dào, nǐ kě bié cuòguò le.',vn:'Cơ hội tốt thế này soi đèn cũng không tìm ra, cậu đừng bỏ lỡ nhé.'}
   ],
   colloFull:[
     {zh:'挂灯笼',py:'guà dēnglong',vn:'treo đèn lồng'},
     {zh:'红灯笼',py:'hóng dēnglong',vn:'đèn lồng đỏ'},
     {zh:'做灯笼',py:'zuò dēnglong',vn:'làm đèn lồng'},
     {zh:'打着灯笼也找不到',py:'dǎzhe dēnglong yě zhǎo bu dào',vn:'soi đèn cũng không tìm ra'},
     {zh:'提灯笼',py:'tí dēnglong',vn:'cầm / rước đèn lồng'}
   ],
   patterns:[
     {s:'挂 / 提 + 灯笼',m:'Treo / cầm đèn lồng'},
     {s:'……，打着灯笼也找不到',m:'… hiếm có khó tìm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tết Trung thu, bọn trẻ cầm đèn lồng chạy tới chạy lui trong ngõ.',answer:'中秋节，孩子们提着灯笼在小巷里跑来跑去。',answerPy:'Zhōngqiū Jié, háizimen tízhe dēnglong zài xiǎoxiàng li pǎo lái pǎo qù.',
      note:'V来V去 = … tới … lui (ôn HSK 4).',pair:'V来V去'},
     {promptLang:'vi',prompt:'Người chồng tốt như anh ấy, soi đèn cũng không tìm ra.',answer:'像他这么好的丈夫，打着灯笼也找不到。',answerPy:'Xiàng tā zhème hǎo de zhàngfu, dǎzhe dēnglong yě zhǎo bu dào.',
      note:'像……这么 + Adj = … như … (ôn HSK 3–4).',pair:'像……这么'}
   ]},

  {n:47,zh:'啦',py:'la',pos:'Trợ từ',vn:'đấy, nhé, kìa, rồi',hv:'lạp',em:'🎉',lesson:1,
   explain:['Trợ từ ngữ khí: hợp âm của 了 (le) và 啊 (a) — vừa có nghĩa "rồi, đã" của 了, vừa có sắc thái cảm thán, vui vẻ, thân mật của 啊: 做成啦!, 下雪啦!, 我回来啦!.','Còn dùng khi liệt kê: 苹果啦、香蕉啦、葡萄啦…… (nào là …, nào là …).'],
   usage:'V / Adj + 啦 (cuối câu, cảm thán); N啦、N啦…… (liệt kê).',
   collo:['做成啦','下雨啦','我来啦','好啦'],
   ex_zh:'一个“灯笼”就做成啦。',ex_py:'Yí ge "dēnglong" jiù zuòchéng la.',ex_vn:'Thế là một chiếc "đèn lồng" đã làm xong rồi.',
   exList:[
     {zh:'一个“灯笼”就做成啦。',py:'Yí ge "dēnglong" jiù zuòchéng la.',vn:'Thế là một chiếc "đèn lồng" đã làm xong rồi.'},
     {zh:'快看，下雪啦！',py:'Kuài kàn, xià xuě la!',vn:'Nhìn kìa, tuyết rơi rồi!'},
     {zh:'桌上摆满了水果，苹果啦、香蕉啦、葡萄啦，应有尽有。',py:'Zhuō shang bǎimǎnle shuǐguǒ, píngguǒ la, xiāngjiāo la, pútao la, yīngyǒu-jìnyǒu.',vn:'Trên bàn bày đầy hoa quả, nào táo, nào chuối, nào nho, có đủ cả.'}
   ],
   colloFull:[
     {zh:'做成啦',py:'zuòchéng la',vn:'làm xong rồi'},
     {zh:'下雨啦',py:'xià yǔ la',vn:'mưa rồi'},
     {zh:'我来啦',py:'wǒ lái la',vn:'tôi đến rồi đây'},
     {zh:'好啦',py:'hǎo la',vn:'được rồi'},
     {zh:'……啦、……啦',py:'…… la, …… la',vn:'nào là …, nào là …'}
   ],
   patterns:[
     {s:'V / Adj + 啦!',m:'… rồi! (vui, cảm thán)'},
     {s:'N啦、N啦、N啦',m:'Nào là …, nào là … (liệt kê)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Được rồi được rồi, đừng khóc nữa, mẹ không trách con đâu.',answer:'好啦好啦，别哭了，妈妈不怪你。',answerPy:'Hǎo la hǎo la, bié kū le, māma bú guài nǐ.',
      note:'别……了 = đừng … nữa (ôn HSK 2).',pair:'别……了'},
     {promptLang:'vi',prompt:'Cuối cùng cũng thi xong rồi! Chúng mình đi chơi thôi!',answer:'终于考完啦！咱们出去玩儿吧！',answerPy:'Zhōngyú kǎowán la! Zánmen chūqu wánr ba!',
      note:'终于 = cuối cùng (ôn HSK 3).',pair:'终于'}
   ]},

  {n:48,zh:'天赋',py:'tiānfù',pos:'Danh từ',vn:'thiên phú, năng khiếu bẩm sinh',hv:'thiên phú',em:'🎁',lesson:1,
   explain:['Danh từ: tư chất, năng khiếu bẩm sinh (trời phú): 过人的天赋, 音乐天赋, 很有天赋. Động từ (văn viết): trời ban cho — 天赋人权.','Gần 天分; khác 天才 (thiên tài — tài năng xuất chúng, hoặc chỉ NGƯỜI có tài năng ấy): 他不是天才，没有过人的天赋.'],
   usage:'有 / 没有 + (过人的) + 天赋; 在……方面很有天赋; 天赋 + 很高.',
   collo:['过人的天赋','音乐天赋','很有天赋','天赋很高'],
   ex_zh:'他虽然不是天才，没有过人的天赋，但是日复一日的努力，使他的学识与日俱增。',ex_py:'Tā suīrán bú shì tiāncái, méiyǒu guòrén de tiānfù, dànshì rì fù yí rì de nǔlì, shǐ tā de xuéshí yǔrì-jùzēng.',ex_vn:'Anh ta tuy không phải thiên tài, không có năng khiếu hơn người, nhưng sự nỗ lực ngày này qua ngày khác khiến học thức của anh ta ngày một tăng.',
   exList:[
     {zh:'他虽然不是天才，没有过人的天赋，但是日复一日的努力，使他的学识与日俱增。',py:'Tā suīrán bú shì tiāncái, méiyǒu guòrén de tiānfù, dànshì rì fù yí rì de nǔlì, shǐ tā de xuéshí yǔrì-jùzēng.',vn:'Anh ta tuy không phải thiên tài, không có năng khiếu hơn người, nhưng sự nỗ lực ngày này qua ngày khác khiến học thức của anh ta ngày một tăng.'},
     {zh:'这个孩子在绘画方面很有天赋。',py:'Zhège háizi zài huìhuà fāngmiàn hěn yǒu tiānfù.',vn:'Đứa trẻ này rất có năng khiếu hội họa.'},
     {zh:'天赋固然重要，但后天的努力更重要。',py:'Tiānfù gùrán zhòngyào, dàn hòutiān de nǔlì gèng zhòngyào.',vn:'Năng khiếu tất nhiên quan trọng, nhưng sự nỗ lực sau này còn quan trọng hơn.'}
   ],
   colloFull:[
     {zh:'过人的天赋',py:'guòrén de tiānfù',vn:'năng khiếu hơn người'},
     {zh:'音乐天赋',py:'yīnyuè tiānfù',vn:'năng khiếu âm nhạc'},
     {zh:'很有天赋',py:'hěn yǒu tiānfù',vn:'rất có năng khiếu'},
     {zh:'天赋很高',py:'tiānfù hěn gāo',vn:'năng khiếu rất cao'},
     {zh:'缺乏天赋',py:'quēfá tiānfù',vn:'thiếu năng khiếu'}
   ],
   patterns:[
     {s:'在 + lĩnh vực + 方面很有天赋',m:'Rất có năng khiếu về …'},
     {s:'有 / 没有 + 过人的天赋',m:'Có / không có năng khiếu hơn người'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy rất có năng khiếu âm nhạc, ba tuổi đã hát được nhiều bài.',answer:'她很有音乐天赋，三岁就会唱很多首歌。',answerPy:'Tā hěn yǒu yīnyuè tiānfù, sān suì jiù huì chàng hěn duō shǒu gē.',
      note:'Thời gian + 就 + V = đã … (sớm) (ôn HSK 3).',pair:'就'},
     {promptLang:'vi',prompt:'Dù không có năng khiếu, chỉ cần chịu khó luyện tập cũng có thể thành công.',answer:'即使没有天赋，只要肯努力练习，也能成功。',answerPy:'Jíshǐ méiyǒu tiānfù, zhǐyào kěn nǔlì liànxí, yě néng chénggōng.',
      note:'即使……也…… (ôn HSK 4) lồng 只要…… (điều kiện).',pair:'即使……也……'}
   ]},

  {n:49,zh:'贫困',py:'pínkùn',pos:'Tính từ',vn:'nghèo túng, bần cùng',hv:'bần khốn',em:'🏚️',lesson:1,
   explain:['Tính từ: nghèo khó, thiếu thốn về KINH TẾ, cuộc sống khó khăn: 生活贫困, 贫困地区, 贫困家庭, 摆脱贫困.','Bài khoá dùng nghĩa bóng: 思想贫困、精神贫困、智慧贫困 = nghèo nàn về tư tưởng, tinh thần, trí tuệ. Gần 贫穷 (khẩu ngữ hơn), 贫乏 (thiếu — xem phần phân biệt).'],
   usage:'生活 + 贫困; 贫困 + 地区 / 家庭 / 学生; 摆脱 / 脱离 + 贫困.',
   collo:['生活贫困','贫困地区','贫困家庭','摆脱贫困'],
   ex_zh:'生活贫困并不可怕，可怕的是思想贫困、精神贫困、智慧贫困。',ex_py:'Shēnghuó pínkùn bìng bù kěpà, kěpà de shì sīxiǎng pínkùn, jīngshén pínkùn, zhìhuì pínkùn.',ex_vn:'Cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tư tưởng, về tinh thần, về trí tuệ.',
   exList:[
     {zh:'生活贫困并不可怕，可怕的是思想贫困、精神贫困、智慧贫困。',py:'Shēnghuó pínkùn bìng bù kěpà, kěpà de shì sīxiǎng pínkùn, jīngshén pínkùn, zhìhuì pínkùn.',vn:'Cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tư tưởng, về tinh thần, về trí tuệ.'},
     {zh:'这个奖学金是专门为贫困家庭的学生设立的。',py:'Zhège jiǎngxuéjīn shì zhuānmén wèi pínkùn jiātíng de xuésheng shèlì de.',vn:'Học bổng này được lập ra dành riêng cho học sinh gia đình nghèo.'},
     {zh:'经过多年的努力，这个山村终于摆脱了贫困。',py:'Jīngguò duō nián de nǔlì, zhège shāncūn zhōngyú bǎituōle pínkùn.',vn:'Sau nhiều năm nỗ lực, ngôi làng miền núi này cuối cùng đã thoát nghèo.'}
   ],
   colloFull:[
     {zh:'生活贫困',py:'shēnghuó pínkùn',vn:'cuộc sống nghèo khó'},
     {zh:'贫困地区',py:'pínkùn dìqū',vn:'vùng nghèo'},
     {zh:'贫困家庭',py:'pínkùn jiātíng',vn:'gia đình nghèo'},
     {zh:'摆脱贫困',py:'bǎituō pínkùn',vn:'thoát nghèo'},
     {zh:'精神贫困',py:'jīngshén pínkùn',vn:'nghèo nàn về tinh thần'}
   ],
   patterns:[
     {s:'贫困 + 地区 / 家庭',m:'Vùng / gia đình nghèo'},
     {s:'摆脱 + 贫困',m:'Thoát nghèo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy xuất thân từ gia đình nghèo, anh ấy chưa bao giờ oán trách số phận.',answer:'虽然出身于贫困家庭，他却从来不抱怨命运。',answerPy:'Suīrán chūshēn yú pínkùn jiātíng, tā què cónglái bú bàoyuàn mìngyùn.',
      note:'虽然……却…… (ôn HSK 4–5); 出身 ôn HSK 6 bài 14.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chính phủ đã bỏ ra rất nhiều vốn để phát triển các vùng nghèo.',answer:'政府投入了大量资金来发展贫困地区。',answerPy:'Zhèngfǔ tóurùle dàliàng zījīn lái fāzhǎn pínkùn dìqū.',
      note:'V1 + 来 + V2: V1 để V2 (mục đích).',pair:'来'}
   ]},

  {n:50,zh:'财富',py:'cáifù',pos:'Danh từ',vn:'của cải, tài sản',hv:'tài phú',em:'💰',lesson:1,
   explain:['Danh từ: của cải, tài sản có giá trị — vật chất hoặc tinh thần: 物质财富, 精神财富, 创造财富. Lượng từ: 一笔财富.','Bài khoá: 贫困的经历……可以成为财富 = trải nghiệm nghèo khó có thể trở thành vốn quý.'],
   usage:'物质 / 精神 + 财富; 一笔 + 宝贵的 + 财富; 创造 / 积累 + 财富; 成为 + 财富.',
   collo:['精神财富','物质财富','宝贵的财富','创造财富'],
   ex_zh:'贫困的经历在有些人那儿可以成为财富。',ex_py:'Pínkùn de jīnglì zài yǒuxiē rén nàr kěyǐ chéngwéi cáifù.',ex_vn:'Trải nghiệm nghèo khó, với một số người, có thể trở thành của cải quý giá.',
   exList:[
     {zh:'贫困的经历在有些人那儿可以成为财富。',py:'Pínkùn de jīnglì zài yǒuxiē rén nàr kěyǐ chéngwéi cáifù.',vn:'Trải nghiệm nghèo khó, với một số người, có thể trở thành của cải quý giá.'},
     {zh:'这成为我生命中一笔宝贵的精神财富。',py:'Zhè chéngwéi wǒ shēngmìng zhōng yì bǐ bǎoguì de jīngshén cáifù.',vn:'Điều đó trở thành một tài sản tinh thần quý báu trong cuộc đời tôi.'},
     {zh:'健康是人生最大的财富。',py:'Jiànkāng shì rénshēng zuì dà de cáifù.',vn:'Sức khỏe là tài sản lớn nhất của đời người.'}
   ],
   colloFull:[
     {zh:'精神财富',py:'jīngshén cáifù',vn:'tài sản tinh thần'},
     {zh:'物质财富',py:'wùzhì cáifù',vn:'của cải vật chất'},
     {zh:'宝贵的财富',py:'bǎoguì de cáifù',vn:'tài sản quý giá'},
     {zh:'创造财富',py:'chuàngzào cáifù',vn:'tạo ra của cải'},
     {zh:'一笔财富',py:'yì bǐ cáifù',vn:'một khoản tài sản'}
   ],
   patterns:[
     {s:'一笔 + 宝贵的 + (精神)财富',m:'Một tài sản (tinh thần) quý báu'},
     {s:'A + 成为 + 财富',m:'A trở thành của cải, vốn quý'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với tôi, những năm tháng gian nan ấy là một tài sản quý giá.',answer:'对我来说，那段艰难的岁月是一笔宝贵的财富。',answerPy:'Duì wǒ lái shuō, nà duàn jiānnán de suìyuè shì yì bǐ bǎoguì de cáifù.',
      note:'对……来说 = đối với … (ôn HSK 4).',pair:'对……来说'},
     {promptLang:'vi',prompt:'Tri thức là của cải mà không ai lấy đi được.',answer:'知识是谁也拿不走的财富。',answerPy:'Zhīshi shì shéi yě ná bu zǒu de cáifù.',
      note:'谁也 + phủ định = không ai … (ôn HSK 4).',pair:'谁也'}
   ]},

  {n:51,zh:'源泉',py:'yuánquán',pos:'Danh từ',vn:'nguồn, cội nguồn',hv:'nguyên tuyền',em:'⛲',lesson:1,
   explain:['Danh từ: mạch nước, nguồn nước; nghĩa bóng (thường dùng): nguồn gốc sinh ra sức mạnh, sáng tạo, niềm vui…: 力量的源泉, 动力和源泉, 生活是创作的源泉.','Văn viết, trang trọng. Gần 来源 (nguồn — trung tính, dùng cho thông tin, thu nhập: 收入来源).'],
   usage:'N + 的源泉 (力量 / 智慧 / 创作 / 快乐); 成为 + ……的动力和源泉.',
   collo:['动力和源泉','力量的源泉','智慧的源泉','创作的源泉'],
   ex_zh:'贫困的经历在有些人那儿可以成为财富，成为奋斗拼搏的动力和源泉。',ex_py:'Pínkùn de jīnglì zài yǒuxiē rén nàr kěyǐ chéngwéi cáifù, chéngwéi fèndòu pīnbó de dònglì hé yuánquán.',ex_vn:'Trải nghiệm nghèo khó, với một số người, có thể trở thành của cải, thành động lực và nguồn sức mạnh để phấn đấu.',
   exList:[
     {zh:'贫困的经历在有些人那儿可以成为财富，成为奋斗拼搏的动力和源泉。',py:'Pínkùn de jīnglì zài yǒuxiē rén nàr kěyǐ chéngwéi cáifù, chéngwéi fèndòu pīnbó de dònglì hé yuánquán.',vn:'Trải nghiệm nghèo khó, với một số người, có thể trở thành của cải, thành động lực và nguồn sức mạnh để phấn đấu.'},
     {zh:'生活是艺术创作的源泉。',py:'Shēnghuó shì yìshù chuàngzuò de yuánquán.',vn:'Cuộc sống là nguồn cội của sáng tác nghệ thuật.'},
     {zh:'家人的支持是我前进的力量源泉。',py:'Jiārén de zhīchí shì wǒ qiánjìn de lìliàng yuánquán.',vn:'Sự ủng hộ của gia đình là nguồn sức mạnh giúp tôi tiến lên.'}
   ],
   colloFull:[
     {zh:'动力和源泉',py:'dònglì hé yuánquán',vn:'động lực và nguồn sức mạnh'},
     {zh:'力量的源泉',py:'lìliàng de yuánquán',vn:'nguồn sức mạnh'},
     {zh:'智慧的源泉',py:'zhìhuì de yuánquán',vn:'nguồn trí tuệ'},
     {zh:'创作的源泉',py:'chuàngzuò de yuánquán',vn:'nguồn sáng tác'},
     {zh:'快乐的源泉',py:'kuàilè de yuánquán',vn:'nguồn niềm vui'}
   ],
   patterns:[
     {s:'A 是 + N + 的源泉',m:'A là nguồn của …'},
     {s:'成为 + ……的动力和源泉',m:'Trở thành động lực và nguồn sức mạnh của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc sách là nguồn tri thức, cũng là nguồn niềm vui của tôi.',answer:'读书是知识的源泉，也是我快乐的源泉。',answerPy:'Dú shū shì zhīshi de yuánquán, yě shì wǒ kuàilè de yuánquán.',
      note:'……，也是…… = …, cũng là … (ôn HSK 2).',pair:'也是'},
     {promptLang:'vi',prompt:'Tình yêu của mẹ là nguồn sức mạnh giúp tôi vượt qua khó khăn.',answer:'母亲的爱是帮助我克服困难的力量源泉。',answerPy:'Mǔqīn de ài shì bāngzhù wǒ kèfú kùnnan de lìliàng yuánquán.',
      note:'克服困难 = vượt qua khó khăn (ôn HSK 5); định ngữ dài + 的 + N.',pair:'克服'}
   ]}
];

var dialogData = [
  {scene:'课文 · 奇异的灯光',
   preQuiz:[
     {q:'这个读书人最喜欢做什么？',opts:['打猎','读书','旅行'],ans:1},
     {q:'历史文化的长期熏陶，使他变得怎么样？',opts:['思维敏捷，胸怀宽广','脾气古怪，不爱说话','身体强壮，力气很大'],ans:0},
     {q:'唯独让读书人发愁的是什么？',opts:['冬天太冷','夏天蚊子太多','家境贫乏，日子过得艰难'],ans:2},
     {q:'那个闷热的夏夜，他的脸上为什么痒痒的？',opts:['被蚊子咬了','汗珠顺着脸往下流','真的有蚂蚁在脸上爬'],ans:1},
     {q:'坐得太久以后，他是怎么让麻木的部位恢复知觉的？',opts:['出去跑了一圈','喝了一杯热茶','晃头、揉脖子、挪屁股，换个姿势'],ans:2},
     {q:'油灯为什么熄灭了？',opts:['灯油用完了','被风吹灭了','他不小心碰倒了'],ans:0},
     {q:'屋子里烦躁难耐时，他先做了什么？',opts:['给朋友写信','出去买灯油','默默地背诵刚读过的古诗'],ans:2},
     {q:'在田野中，什么吸引住了他？',opts:['满天的星星','一大群萤火虫','远处村子的灯光'],ans:1},
     {q:'他用什么做成了“灯笼”？',opts:['薄布做的布兜和萤火虫','纸和蜡烛','竹子和灯油'],ans:0},
     {q:'萤火虫做成的“灯”怎么样？',opts:['比油灯还亮','没有油灯亮，但看书还勉强可以','根本看不清书上的字'],ans:1},
     {q:'读书人最后成了什么样的人？',opts:['有名的商人','天才诗人','知名学者'],ans:2},
     {q:'作者认为真正可怕的是什么？',opts:['思想贫困、精神贫困、智慧贫困','生活贫困','没有过人的天赋'],ans:0}
   ],
   lines:[
    {sp:0,zh:'传说古代有个爱书如命的读书人，每当他捧起书本就像是走进了知识的海洋，天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。历史文化的长期熏陶，使他思维敏捷，胸怀宽广。冬季使人不堪忍受的严寒以及炎热夏天蚊子的骚扰都没有影响他读书的热情，唯独让他发愁的是家境贫乏，日子过得艰难，晚上看书别说蜡烛了，就是灯油也要节省着用。',
     py:'Chuánshuō gǔdài yǒu ge ài shū rú mìng de dúshūrén, měi dāng tā pěngqǐ shūběn jiù xiàng shì zǒujìnle zhīshi de hǎiyáng, tiānwén dìlǐ, Rújiā jīngdiǎn, zhuànjì sǎnwén, lìdài shīcí, dōu huì shǐ tā zháomí. Lìshǐ wénhuà de chángqī xūntáo, shǐ tā sīwéi mǐnjié, xiōnghuái kuānguǎng. Dōngjì shǐ rén bùkān rěnshòu de yánhán yǐjí yánrè xiàtiān wénzi de sāorǎo dōu méiyǒu yǐngxiǎng tā dú shū de rèqíng, wéidú ràng tā fāchóu de shì jiājìng pínfá, rìzi guò de jiānnán, wǎnshang kàn shū biéshuō làzhú le, jiùshì dēngyóu yě yào jiéshěngzhe yòng.',
     vn:'Tương truyền thời xưa có một người đọc sách yêu sách như mạng sống; mỗi khi cầm quyển sách lên, anh ta như bước vào biển cả tri thức — thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời, thứ gì cũng khiến anh say mê. Sự hun đúc lâu dài của lịch sử văn hóa khiến anh tư duy nhanh nhạy, tấm lòng rộng mở. Cái giá rét không chịu nổi của mùa đông cũng như sự quấy nhiễu của muỗi trong mùa hè nóng bức đều không làm giảm niềm say mê đọc sách của anh; điều duy nhất khiến anh rầu rĩ là gia cảnh nghèo túng, cuộc sống gian nan — buổi tối đọc sách, nói gì đến nến, ngay cả dầu đèn cũng phải dùng dè sẻn.'},
    {sp:0,zh:'又是一个闷热的夏夜，窗外阵阵热浪袭来，汗珠顺着脸往下流，脸上痒痒的，像有蚂蚁在爬，他用手擦了擦汗，依然沉醉在书本里。由于坐得太久，他的颈椎有些麻木，屁股酸痛，他晃了晃头，用手揉了揉麻木的脖子，挪了挪屁股，换个姿势，顿时麻木的部位恢复了知觉，他依旧沉浸在读书的快乐中。是啊，只要有书读，挨饿受冻他都不怕；只要有书陪伴，他就感觉幸福、美满，像是生活在天堂。',
     py:'Yòu shì yí ge mēnrè de xiàyè, chuāng wài zhènzhèn rèlàng xílái, hànzhū shùnzhe liǎn wǎng xià liú, liǎn shang yǎngyǎng de, xiàng yǒu mǎyǐ zài pá, tā yòng shǒu cāle cā hàn, yīrán chénzuì zài shūběn li. Yóuyú zuò de tài jiǔ, tā de jǐngzhuī yǒuxiē mámù, pìgu suāntòng, tā huàngle huàng tóu, yòng shǒu róule róu mámù de bózi, nuóle nuó pìgu, huàn ge zīshì, dùnshí mámù de bùwèi huīfùle zhījué, tā yījiù chénjìn zài dú shū de kuàilè zhōng. Shì a, zhǐyào yǒu shū dú, ái è shòu dòng tā dōu bú pà; zhǐyào yǒu shū péibàn, tā jiù gǎnjué xìngfú, měimǎn, xiàng shì shēnghuó zài tiāntáng.',
     vn:'Lại một đêm hè oi bức, ngoài cửa sổ từng đợt hơi nóng ập tới, những giọt mồ hôi chảy dọc theo gương mặt, mặt ngứa ngáy như có kiến bò; anh lấy tay lau lau mồ hôi, vẫn say sưa trong trang sách. Vì ngồi quá lâu, cổ anh hơi tê, mông ê ẩm; anh lắc lắc đầu, lấy tay xoa xoa cái cổ tê cứng, nhích mông một chút, đổi tư thế, lập tức chỗ bị tê có lại cảm giác, anh lại chìm đắm trong niềm vui đọc sách. Phải rồi, chỉ cần có sách đọc, chịu đói chịu rét anh cũng không sợ; chỉ cần có sách bầu bạn, anh liền thấy hạnh phúc, viên mãn, như đang sống ở thiên đường.'},
    {sp:0,zh:'忽然，油灯无力地跳了两下，无声地熄灭了，眼前顿时陷入了黑暗。糟了，一定是灯油没有了，他有些泄气。黑暗中他眯起双眼，极力使自己尽快适应眼前的黑暗。他拿起油灯在耳边摇了摇，灯油瓶空了。他放下灯，绝望地凝视着眼前的茫茫黑暗，不知道怎样打发这个漫漫长夜。',
     py:'Hūrán, yóudēng wúlì de tiàole liǎng xià, wúshēng de xīmiè le, yǎnqián dùnshí xiànrùle hēi\'àn. Zāo le, yídìng shì dēngyóu méiyǒu le, tā yǒuxiē xièqì. Hēi\'àn zhōng tā mīqǐ shuāngyǎn, jílì shǐ zìjǐ jǐnkuài shìyìng yǎnqián de hēi\'àn. Tā náqǐ yóudēng zài ěr biān yáole yáo, dēngyóu píng kōng le. Tā fàngxia dēng, juéwàng de níngshìzhe yǎnqián de mángmáng hēi\'àn, bù zhīdào zěnyàng dǎfa zhège mànmàn chángyè.',
     vn:'Bỗng nhiên, ngọn đèn dầu yếu ớt chập chờn hai cái rồi lặng lẽ tắt ngấm, trước mắt lập tức chìm vào bóng tối. Hỏng rồi, chắc chắn là hết dầu đèn, anh hơi nản lòng. Trong bóng tối, anh nheo hai mắt, cố hết sức để mình nhanh chóng quen với bóng tối trước mặt. Anh cầm đèn dầu lên lắc lắc bên tai — lọ dầu đã cạn. Anh đặt đèn xuống, tuyệt vọng nhìn chằm chằm vào màn đêm mịt mùng trước mặt, không biết làm sao cho qua đêm dài đằng đẵng này.'},
    {sp:0,zh:'屋子里闷热的空气像是凝固了，烦躁在他身体中蔓延开来，他努力克制着自己的情绪，默默地背诵着刚刚读过的古诗，在头脑中编织着诗中描绘的动人画面，可这种强制的办法没有效果，于是，他打开房门走入了沉沉夜色。',
     py:'Wūzi li mēnrè de kōngqì xiàng shì nínggù le, fánzào zài tā shēntǐ zhōng mànyán kāilái, tā nǔlì kèzhìzhe zìjǐ de qíngxù, mòmò de bèisòngzhe gānggāng dúguo de gǔshī, zài tóunǎo zhōng biānzhīzhe shī zhōng miáohuì de dòngrén huàmiàn, kě zhè zhǒng qiángzhì de bànfǎ méiyǒu xiàoguǒ, yúshì, tā dǎkāi fángmén zǒurùle chénchén yèsè.',
     vn:'Không khí oi bức trong phòng như đông cứng lại, sự bực bội lan khắp cơ thể anh; anh cố kìm nén cảm xúc, lặng lẽ đọc thầm bài thơ cổ vừa đọc xong, dệt nên trong đầu những bức tranh đẹp đẽ mà bài thơ miêu tả, nhưng cách ép buộc này chẳng có hiệu quả, thế là anh mở cửa bước vào màn đêm thăm thẳm.'},
    {sp:0,zh:'夏日的夜十分美丽，一闪一闪的星星镶嵌在夜空中，偶尔还会吹来一阵凉风。他漫步在田野中，欣赏着美丽的夜景，忽然他被眼前的情形吸引住了，只见一大群萤火虫在低空盘旋飞舞，来来回回地飞。萤火虫的尾巴都有亮光在闪烁，成为黑暗中唯一耀眼的光芒。',
     py:'Xiàrì de yè shífēn měilì, yì shǎn yì shǎn de xīngxing xiāngqiàn zài yèkōng zhōng, ǒu\'ěr hái huì chuīlái yí zhèn liángfēng. Tā mànbù zài tiányě zhōng, xīnshǎngzhe měilì de yèjǐng, hūrán tā bèi yǎnqián de qíngxing xīyǐn zhù le, zhǐ jiàn yí dà qún yínghuǒchóng zài dīkōng pánxuán fēiwǔ, láiláihuíhuí de fēi. Yínghuǒchóng de wěiba dōu yǒu liàngguāng zài shǎnshuò, chéngwéi hēi\'àn zhōng wéiyī yàoyǎn de guāngmáng.',
     vn:'Đêm hè rất đẹp, những ngôi sao lấp lánh đính trên bầu trời đêm, thỉnh thoảng lại có một làn gió mát thổi tới. Anh thong thả dạo bước giữa cánh đồng, ngắm cảnh đêm tươi đẹp; bỗng nhiên anh bị cảnh tượng trước mắt thu hút: chỉ thấy một đàn đom đóm lớn lượn vòng nhảy múa ở tầm thấp, bay qua bay lại. Đuôi đom đóm đều có ánh sáng nhấp nháy, trở thành thứ ánh sáng rực rỡ duy nhất trong bóng tối.'},
    {sp:0,zh:'他跟在萤火虫后面。忽然一只萤火虫飞到了眼前，他伸手一捞，把它握在了手心，摊开手掌，哇，萤火虫还老老实实地待在那里，尾部依旧闪着亮光，也许那亮光只能用毫米计算，可却还算明亮。瞬间，他头脑中迸发出一个想法：“如果将许多萤火虫集中在一起，不就成灯了吗？”他决定试一试。他找了个薄布做的布兜，抓了一些萤火虫放在里面，然后将袋口扎住，把口袋吊起来，一个“灯笼”就做成啦，虽然没有油灯亮，看书还是勉强可以的，从此，萤火虫做成的“灯”就夜夜陪伴着他。',
     py:'Tā gēn zài yínghuǒchóng hòumiàn. Hūrán yì zhī yínghuǒchóng fēidàole yǎnqián, tā shēnshǒu yì lāo, bǎ tā wò zài le shǒuxīn, tānkāi shǒuzhǎng, wa, yínghuǒchóng hái lǎolǎoshíshí de dāi zài nàlǐ, wěibù yījiù shǎnzhe liàngguāng, yěxǔ nà liàngguāng zhǐ néng yòng háomǐ jìsuàn, kě què hái suàn míngliàng. Shùnjiān, tā tóunǎo zhōng bèngfā chū yí ge xiǎngfǎ: "Rúguǒ jiāng xǔduō yínghuǒchóng jízhōng zài yìqǐ, bú jiù chéng dēng le ma?" Tā juédìng shì yi shì. Tā zhǎole ge báo bù zuò de bùdōu, zhuāle yìxiē yínghuǒchóng fàng zài lǐmiàn, ránhòu jiāng dàikǒu zāzhù, bǎ kǒudai diào qǐlái, yí ge "dēnglong" jiù zuòchéng la, suīrán méiyǒu yóudēng liàng, kàn shū háishi miǎnqiǎng kěyǐ de, cóngcǐ, yínghuǒchóng zuòchéng de "dēng" jiù yèyè péibànzhe tā.',
     vn:'Anh đi theo sau đàn đom đóm. Bỗng một con đom đóm bay đến trước mắt, anh đưa tay chụp một cái, nắm gọn nó trong lòng bàn tay; mở bàn tay ra — ôi chao, con đom đóm vẫn ngoan ngoãn nằm yên ở đó, phần đuôi vẫn nhấp nháy ánh sáng; có lẽ đốm sáng ấy chỉ tính được bằng milimét, nhưng vẫn còn khá sáng. Trong khoảnh khắc, trong đầu anh nảy ra một ý tưởng: "Nếu gom thật nhiều đom đóm lại một chỗ, chẳng phải sẽ thành cái đèn sao?" Anh quyết định thử xem. Anh tìm một cái túi làm bằng vải mỏng, bắt ít đom đóm bỏ vào trong, rồi buộc chặt miệng túi, treo túi lên — thế là một chiếc "đèn lồng" đã làm xong; tuy không sáng bằng đèn dầu, nhưng đọc sách thì vẫn tạm được. Từ đó, chiếc "đèn" làm bằng đom đóm đêm đêm bầu bạn cùng anh.'},
    {sp:0,zh:'他虽然不是天才，没有过人的天赋，但是日复一日的努力，使他的学识与日俱增，最后终于成为知名学者。',
     py:'Tā suīrán bú shì tiāncái, méiyǒu guòrén de tiānfù, dànshì rì fù yí rì de nǔlì, shǐ tā de xuéshí yǔrì-jùzēng, zuìhòu zhōngyú chéngwéi zhīmíng xuézhě.',
     vn:'Anh tuy không phải thiên tài, không có năng khiếu hơn người, nhưng sự nỗ lực ngày này qua ngày khác khiến học thức của anh ngày một tăng, cuối cùng trở thành một học giả nổi tiếng.'},
    {sp:0,zh:'生活贫困并不可怕，可怕的是思想贫困、精神贫困、智慧贫困。贫困的经历在有些人那儿可以成为财富，成为奋斗拼搏的动力和源泉。',
     py:'Shēnghuó pínkùn bìng bù kěpà, kěpà de shì sīxiǎng pínkùn, jīngshén pínkùn, zhìhuì pínkùn. Pínkùn de jīnglì zài yǒuxiē rén nàr kěyǐ chéngwéi cáifù, chéngwéi fèndòu pīnbó de dònglì hé yuánquán.',
     vn:'Cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tư tưởng, về tinh thần, về trí tuệ. Trải nghiệm nghèo khó, với một số người, có thể trở thành của cải, thành động lực và nguồn sức mạnh để phấn đấu, vươn lên.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 挨—受 lấy từ sách (tr. 66–67, 做一做: chọn 挨 hay 受); 贫困—贫乏, 克制—控制 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'挨 — 受',
   same:'Đều là động từ, đều có nghĩa "gặp phải, chịu đựng" (遭受、忍受) điều không hay; đều đi được với 批评: 挨／受了批评.',
   sameEx:{zh:'他脸上显出挨／受了批评的样子。',vn:'Trên mặt anh ta lộ ra vẻ vừa bị phê bình.'},
   items:[
     {word:'挨',points:[
       'Danh từ phía sau thường chỉ CÔNG CỤ mà người gây ra dùng: 身上挨了一脚, 挨了一顿棍子, 挨了一个耳光.',
       'Động từ phía sau thường chỉ hành động CỤ THỂ làm tổn hại thân thể, tinh thần: 挨打, 挨骂, 挨批, 挨咬.',
       'Trừ vài tính từ (挨饿, 挨冻), rất ít đi với tính từ. Khẩu ngữ.'
     ],ex:[{zh:'因为撒谎，他挨了父亲一顿打。',vn:'Vì nói dối, cậu ta bị bố đánh cho một trận.'},
          {zh:'只要有书读，挨饿受冻他都不怕。',vn:'Chỉ cần có sách đọc, chịu đói chịu rét anh ta cũng không sợ.'}]},
     {word:'受',points:[
       'Danh từ phía sau thường mang nghĩa tai họa, xui xẻo, tổn thất: 受灾, 受罪, 受损失, 受气.',
       'Đi được với động từ chỉ TRẠNG THÁI hoặc động từ NGHĨA TỐT: 受压迫, 受剥削, 受骗, 受埋怨, 受表扬, 受嘉奖.',
       'Đi được với một số tính từ: 受苦, 受累, 受冻, 受惊.'
     ],ex:[{zh:'这次地震中，人民的生命财产受到很大损失。',vn:'Trong trận động đất lần này, tính mạng và tài sản của nhân dân bị tổn thất rất lớn.'},
          {zh:'他在比赛中表现出色，受到了老师的表扬。',vn:'Cậu ấy thể hiện xuất sắc trong cuộc thi, được thầy khen.'}]}
   ],
   quiz:[
     {sentence:'他上课玩手机，又＿＿老师骂了。',options:['挨','受'],answer:0,
      why:'挨 + người + 骂: bị mắng — hành động cụ thể làm tổn hại tinh thần → 挨.'},
     {sentence:'她学习认真，多次＿＿到学校的表扬。',options:['挨','受'],answer:1,
      why:'Động từ nghĩa TỐT (表扬) chỉ đi với 受: 受到表扬. Không nói ×挨表扬.'},
     {sentence:'这场大雨让很多农民＿＿了灾。',options:['挨','受'],answer:1,
      why:'Danh từ chỉ tai họa (灾) → 受灾.'},
     {sentence:'小时候家里穷，他常常＿＿饿。',options:['挨','受'],answer:0,
      why:'挨饿 là tổ hợp cố định (một trong số ít tính từ đi với 挨); không nói ×受饿.'}
   ],
   sgk:{
     chung:{t:'都有遭受、忍受的意思。',vn:'Đều có nghĩa gặp phải, chịu đựng.',vd:'他脸上显出挨／受了批评的样子。',vdVn:'Trên mặt anh ta lộ ra vẻ vừa bị phê bình.'},
     khac:[
       {a:{t:'后边带的名词常常表示施事使用的工具。',vn:'Danh từ phía sau thường chỉ công cụ mà người gây ra hành động sử dụng.',vd:'身上挨了一脚／挨了一顿棍子／挨了一个耳光',vdVn:'Bị đá một cái / bị một trận đòn gậy / bị một cái tát.'},
        b:{t:'后边带的名词常常表示灾害、倒霉、损失等意思。',vn:'Danh từ phía sau thường mang nghĩa tai họa, xui xẻo, tổn thất.',vd:'受灾、受罪、受损失、受气',vdVn:'Bị thiên tai, chịu khổ sở, chịu tổn thất, bị ức hiếp (chịu bực tức).'}},
       {a:{t:'后边带的动词常常表示身心受到伤害的具体动作。',vn:'Động từ phía sau thường là hành động cụ thể làm tổn hại thân thể, tinh thần.',vd:'挨打、挨骂、挨批、挨咬',vdVn:'Bị đánh, bị mắng, bị phê bình, bị cắn.'},
        b:{t:'后边可以带表示状态或表示褒义的动词。',vn:'Phía sau có thể là động từ chỉ trạng thái hoặc động từ mang nghĩa tốt.',vd:'受压迫、受剥削、受骗、受埋怨、受表扬、受嘉奖',vdVn:'Bị áp bức, bị bóc lột, bị lừa, bị trách móc, được khen, được khen thưởng.'}},
       {a:{t:'除个别形容词外，后边很少带形容词。',vn:'Trừ vài tính từ cá biệt, phía sau rất ít đi với tính từ.',vd:'挨饿、挨冻',vdVn:'Chịu đói, chịu rét.'},
        b:{t:'后边可以带一部分形容词。',vn:'Phía sau có thể đi với một số tính từ.',vd:'受苦、受累、受冻、受惊',vdVn:'Chịu khổ, chịu vất vả, chịu rét, bị hoảng sợ.'}}
     ],
     deLam:'选择“挨”或“受”填空 — Chọn 挨 hay 受 điền vào chỗ trống',
     lamThu:[
       {s:'这次地震中，人民的生命财产＿＿到很大损失。',dap:[false,true],
        giai:'受. Phía sau là 损失 (tổn thất) — danh từ chỉ thiệt hại → 受到损失. 挨 không đi với 损失.'},
       {s:'记得儿时去野外玩儿常常＿＿蚊子咬。',dap:[true,false],
        giai:'挨. 挨 + (vật gây hại) + 咬: 咬 là hành động cụ thể làm tổn hại thân thể (sách: 挨咬).'},
       {s:'因为撒谎，他＿＿了父亲一顿打。',dap:[true,false],
        giai:'挨. 挨了 + người + 一顿打: bị đánh một trận — hành động cụ thể → 挨.'},
       {s:'您＿＿累，帮我照顾一下孩子好吗？',dap:[false,true],
        giai:'受. 累 là tính từ, và 受累 thuộc nhóm 受 + tính từ (受苦、受累、受冻、受惊); 您受累 là lời nhờ vả lịch sự: "phiền anh/chị vất vả một chút".'}
     ]
   }},

  {pair:'贫困 — 贫乏',
   same:'Đều là tính từ, đều có nét nghĩa "nghèo, thiếu thốn"; đều nói được về gia cảnh: 家境贫困／贫乏 (贫乏 văn viết hơn).',
   sameEx:{zh:'他家境贫困／贫乏，日子过得很艰难。',vn:'Gia cảnh anh ấy nghèo túng, cuộc sống rất gian nan.'},
   items:[
     {word:'贫困',points:[
       'Nhấn nghèo về KINH TẾ, đời sống khó khăn (thiếu tiền, thiếu ăn mặc).',
       'Hay làm định ngữ: 贫困地区, 贫困家庭, 贫困学生; đi với 摆脱 / 脱离: 摆脱贫困.',
       'Bài khoá dùng ví von: 思想贫困、精神贫困、智慧贫困 = nghèo nàn về tư tưởng, tinh thần, trí tuệ.'
     ],ex:[{zh:'这个奖学金是专门为贫困家庭的学生设立的。',vn:'Học bổng này được lập ra dành riêng cho học sinh gia đình nghèo.'}]},
     {word:'贫乏',points:[
       'Nhấn THIẾU, không phong phú — thường dùng cho thứ trừu tượng: 知识 / 经验 / 内容 / 语言 / 资源 + 贫乏.',
       'Trái nghĩa là 丰富 (知识丰富 ↔ 知识贫乏).',
       'Ít làm định ngữ cho người, nơi chốn: không nói ×贫乏地区, ×贫乏家庭.'
     ],ex:[{zh:'这篇作文内容贫乏，语言也不够生动。',vn:'Bài văn này nội dung nghèo nàn, lời văn cũng chưa đủ sinh động.'}]}
   ],
   quiz:[
     {sentence:'政府采取了很多措施帮助＿＿地区的人民。',options:['贫困','贫乏'],answer:0,
      why:'贫困地区 = vùng nghèo (kinh tế) — cụm cố định; không nói ×贫乏地区.'},
     {sentence:'他刚参加工作，经验还比较＿＿。',options:['贫困','贫乏'],answer:1,
      why:'Thiếu kinh nghiệm → 经验贫乏 (trái nghĩa 经验丰富).'},
     {sentence:'这个国家石油资源＿＿，主要依靠进口。',options:['贫困','贫乏'],answer:1,
      why:'资源贫乏 = tài nguyên nghèo nàn (thiếu, không phong phú).'},
     {sentence:'他出生在一个＿＿家庭，从小就懂得节约。',options:['贫困','贫乏'],answer:0,
      why:'Làm định ngữ cho 家庭, chỉ nghèo về kinh tế → 贫困家庭.'}
   ]},

  {pair:'克制 — 控制',
   same:'Đều là động từ, đều có nghĩa "kìm giữ, không để vượt quá mức"; đều đi với 情绪: 克制／控制自己的情绪.',
   sameEx:{zh:'为了不影响工作，他努力克制／控制自己的情绪。',vn:'Để không ảnh hưởng đến công việc, anh ấy cố kiềm chế cảm xúc của mình.'},
   items:[
     {word:'克制',points:[
       'Đối tượng chủ yếu là cảm xúc, ham muốn, hành động CỦA CHÍNH MÌNH: 克制情绪, 克制冲动, 克制自己.',
       'Làm được tính từ: 他很克制 (rất biết kiềm chế); cụm cố định 保持克制.',
       'Không dùng cho máy móc, số lượng hay người khác.'
     ],ex:[{zh:'看到这么感人的场面，她再也克制不住，哭了起来。',vn:'Thấy cảnh tượng cảm động như vậy, cô ấy không kìm được nữa, bật khóc.'}]},
     {word:'控制',points:[
       'Phạm vi rộng: kiểm soát người khác, sự vật, tình hình, số lượng: 控制局面, 控制温度, 控制人口, 控制体重.',
       'Còn nghĩa điều khiển máy móc: 电脑控制, 控制系统 (so 遥控, HSK 6 bài 11).',
       'Hay đi với 在……以内: 把费用控制在三千元以内.'
     ],ex:[{zh:'这次旅行的费用要控制在三千元以内。',vn:'Chi phí chuyến du lịch này phải kiểm soát trong vòng ba nghìn tệ.'}]}
   ],
   quiz:[
     {sentence:'这台机器由电脑＿＿，不需要人操作。',options:['克制','控制'],answer:1,
      why:'Điều khiển máy móc → 控制. 克制 chỉ dùng cho cảm xúc, hành vi của con người.'},
     {sentence:'他是个很＿＿的人，从来不在别人面前发脾气。',options:['克制','控制'],answer:0,
      why:'Làm tính từ (很 + ＿＿ + 的人) = biết kiềm chế → 克制.'},
     {sentence:'为了健康，你得＿＿一下体重了。',options:['克制','控制'],answer:1,
      why:'Kiểm soát một con số (体重) → 控制体重.'},
     {sentence:'双方都应该保持＿＿，不要让冲突升级。',options:['克制','控制'],answer:0,
      why:'保持克制 = giữ kiềm chế (cụm cố định).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'天文',hv:'thiên văn',vn:'thiên văn',note:'Trùng khít: 天文学 = thiên văn học, 天文台 = đài thiên văn.'},
    {zh:'儒家',hv:'Nho gia',vn:'Nho gia, đạo Nho',note:'Trùng khít: 儒家思想 = tư tưởng Nho gia.'},
    {zh:'传记',hv:'truyện ký',vn:'truyện ký, tiểu sử',note:'Tiếng Việt có "truyện ký"; 名人传记 dịch tự nhiên là "tiểu sử người nổi tiếng". 传 đọc zhuàn.'},
    {zh:'散文',hv:'tản văn',vn:'tản văn, văn xuôi',note:'Trùng khít: 散文集 = tập tản văn.'},
    {zh:'艰难',hv:'gian nan',vn:'gian nan',note:'Trùng khít: 艰难的岁月 = những năm tháng gian nan.'},
    {zh:'绝望',hv:'tuyệt vọng',vn:'tuyệt vọng',note:'Trùng khít: 感到绝望 = cảm thấy tuyệt vọng.'},
    {zh:'天堂',hv:'thiên đường',vn:'thiên đường',note:'Trùng khít: 购物天堂 = thiên đường mua sắm.'},
    {zh:'强制',hv:'cưỡng chế',vn:'cưỡng chế, ép buộc',note:'Trùng khít: 强制执行 = cưỡng chế thi hành.'},
    {zh:'天赋',hv:'thiên phú',vn:'năng khiếu bẩm sinh',note:'"Thiên phú" = trời phú: 很有天赋 = rất có năng khiếu.'},
    {zh:'美满',hv:'mỹ mãn',vn:'viên mãn, tốt đẹp',note:'Tiếng Việt "mỹ mãn" (kết quả mỹ mãn); 婚姻美满 dịch "hôn nhân viên mãn / hạnh phúc".'}
  ],
  idiom:[
    {zh:'囊萤照读',hv:'nang huỳnh chiếu độc',vn:'túi đom đóm soi sách',note:'Tên truyện gốc của bài khoá (囊 = túi, 萤 = đom đóm). Người Việt quen với điển tích "Xa Dận túi đom đóm" (车胤囊萤) — gương hiếu học thời xưa.'},
    {zh:'与日俱增',hv:'dữ nhật câu tăng',vn:'ngày một tăng',note:'Ôn HSK 6 bài 18: 学识与日俱增 = học thức ngày một tăng.'},
    {zh:'日复一日',hv:'nhật phục nhất nhật',vn:'ngày này qua ngày khác',note:'复 = lặp lại; 日复一日的努力 = sự nỗ lực bền bỉ ngày qua ngày.'},
    {zh:'爱书如命',hv:'ái thư như mệnh',vn:'yêu sách như mạng sống',note:'Mẫu "爱 + N + 如命" (yêu … như mạng): 爱财如命 = coi tiền như mạng.'},
    {zh:'挨饿受冻',hv:'ai ngạ thụ đống',vn:'chịu đói chịu rét',note:'挨 và 受 đều là "chịu" — xem phần phân biệt 挨—受 (挨饿, 受冻).'}
  ],
  trap:[
    {zh:'克制',hv:'khắc chế',vn:'kiềm chế (bản thân)',
     warn:'BẪY: "khắc chế" tiếng Việt thường là chế ngự ĐỐI THỦ (khắc chế đối phương). 克制 tiếng Trung = KIỀM CHẾ BẢN THÂN: 克制情绪 = kìm nén cảm xúc.'},
    {zh:'泄气',hv:'tiết khí',vn:'nản chí',
     warn:'BẪY: "tiết khí" tiếng Việt là 24 tiết trong năm (节气 jiéqì). 泄气 = xì hơi → NẢN LÒNG: 别泄气 = đừng nản.'},
    {zh:'情形',hv:'tình hình',vn:'cảnh tượng, tình huống',
     warn:'"Tình hình" tiếng Việt ≈ 情况. 情形 thiên về CẢNH TƯỢNG cụ thể trước mắt: 眼前的情形 = cảnh tượng trước mắt (không dịch "tình hình trước mắt").'},
    {zh:'知觉',hv:'tri giác',vn:'cảm giác',
     warn:'"Tri giác" tiếng Việt là thuật ngữ tâm lý học. 恢复知觉 = CÓ LẠI CẢM GIÁC / tỉnh lại; 失去知觉 = bất tỉnh — không dịch "mất tri giác".'},
    {zh:'贫乏',hv:'bần phạp',vn:'nghèo nàn, thiếu',
     warn:'Không có "bần phạp" trong tiếng Việt. 乏 = thiếu (như 缺乏): 知识贫乏 = kiến thức nghèo nàn, thiếu hụt.'},
    {zh:'胸怀',hv:'hung hoài',vn:'tấm lòng',
     warn:'"Hung" ở đây là NGỰC (胸), không phải "hung dữ" (凶). 胸怀宽广 = lòng dạ rộng lượng.'},
    {zh:'熏陶',hv:'huân đào',vn:'hun đúc',
     warn:'Không có "huân đào" trong tiếng Việt; hình ảnh: khói hun (熏) + nung gốm (陶) → HUN ĐÚC dần dần, luôn mang nghĩa tốt.'},
    {zh:'挨',hv:'ai',vn:'bị, chịu',
     warn:'Không liên quan đến "ai" (đại từ). 挨 ái = BỊ, CHỊU (挨打 = bị đánh); còn đọc āi = kề sát (挨着).'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'每当他捧起',right:'书本'},
  {left:'走进了知识的',right:'海洋'},
  {left:'天文地理、儒家',right:'经典'},
  {left:'历史文化的长期',right:'熏陶'},
  {left:'思维敏捷，',right:'胸怀宽广'},
  {left:'使人不堪忍受的',right:'严寒'},
  {left:'炎热夏天蚊子的',right:'骚扰'},
  {left:'家境贫乏，日子过得',right:'艰难'},
  {left:'麻木的部位恢复了',right:'知觉'},
  {left:'只要有书读，挨饿',right:'受冻'},
  {left:'油灯无声地',right:'熄灭了'},
  {left:'黑暗中他眯起',right:'双眼'},
  {left:'绝望地凝视着',right:'茫茫黑暗'},
  {left:'闷热的空气像是',right:'凝固了'},
  {left:'烦躁在他身体中',right:'蔓延开来'},
  {left:'努力克制着自己的',right:'情绪'},
  {left:'默默地背诵着',right:'古诗'},
  {left:'在头脑中编织着',right:'动人画面'},
  {left:'漫步在',right:'田野中'},
  {left:'黑暗中唯一耀眼的',right:'光芒'},
  {left:'他伸手一捞，摊开',right:'手掌'},
  {left:'头脑中迸发出',right:'一个想法'},
  {left:'薄布做的',right:'布兜'},
  {left:'没有过人的',right:'天赋'},
  {left:'奋斗拼搏的动力和',right:'源泉'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài một câu
// ══════════════════════════════════════════
var fillData = [
  {pre:'小女孩双手',blank:'捧',post:'着一束鲜花走上了舞台。',hint:'(bưng, nâng bằng hai tay)',ans:'捧'},
  {pre:'他从小就对',blank:'天文',post:'特别着迷，每天晚上都用望远镜看星星。',hint:'(thiên văn)',ans:'天文'},
  {pre:'孔子是',blank:'儒家',post:'学派的创始人。',hint:'(Nho gia)',ans:'儒家'},
  {pre:'这本',blank:'传记',post:'记录了这位科学家不平凡的一生。',hint:'(tiểu sử)',ans:'传记'},
  {pre:'朱自清的',blank:'散文',post:'《背影》感动了一代又一代的读者。',hint:'(tản văn)',ans:'散文'},
  {pre:'这座博物馆收藏了',blank:'历代',post:'名人的书法作品。',hint:'(các đời)',ans:'历代'},
  {pre:'他对古典音乐十分',blank:'着迷',post:'，每天都要听上几个小时。',hint:'(say mê)',ans:'着迷'},
  {pre:'在艺术的',blank:'熏陶',post:'下，她从小就喜欢画画儿。',hint:'(hun đúc)',ans:'熏陶'},
  {pre:'一个',blank:'胸怀',post:'宽广的人，不会为小事斤斤计较。',hint:'(tấm lòng)',ans:'胸怀'},
  {pre:'他',blank:'不堪',post:'忍受邻居的噪音，只好搬了家。',hint:'(không chịu nổi)',ans:'不堪'},
  {pre:'在',blank:'炎热',post:'的夏天，吃一块冰西瓜真是舒服极了。',hint:'(nóng nực)',ans:'炎热'},
  {pre:'为了不受',blank:'骚扰',post:'电话的打扰，我在手机上设置了拦截功能。',hint:'(làm phiền, quấy rối)',ans:'骚扰'},
  {pre:'只看电视不读书，知识就会越来越',blank:'贫乏',post:'。',hint:'(nghèo nàn)',ans:'贫乏'},
  {pre:'他们在最',blank:'艰难',post:'的时候也没有放弃希望。',hint:'(gian nan)',ans:'艰难'},
  {pre:'停电了，奶奶点起了一根',blank:'蜡烛',post:'。',hint:'(nến)',ans:'蜡烛'},
  {pre:'一群',blank:'蚂蚁',post:'正在搬运地上的饼干渣。',hint:'(kiến)',ans:'蚂蚁'},
  {pre:'长时间低头看手机，对',blank:'颈椎',post:'的伤害很大。',hint:'(đốt sống cổ)',ans:'颈椎'},
  {pre:'他困得直',blank:'揉',post:'眼睛。',hint:'(dụi)',ans:'揉'},
  {pre:'请把这个箱子往左边',blank:'挪',post:'一下。',hint:'(xê dịch)',ans:'挪'},
  {pre:'坐了一整天的车，我的',blank:'屁股',post:'都坐疼了。',hint:'(mông)',ans:'屁股'},
  {pre:'天太冷了，他的手指冻得失去了',blank:'知觉',post:'。',hint:'(cảm giác)',ans:'知觉'},
  {pre:'他小时候很调皮，经常',blank:'挨',post:'爸爸的骂。',hint:'(bị)',ans:'挨'},
  {pre:'祝你们婚姻',blank:'美满',post:'，白头到老！',hint:'(viên mãn)',ans:'美满'},
  {pre:'对小孩子来说，游乐园简直就是',blank:'天堂',post:'。',hint:'(thiên đường)',ans:'天堂'},
  {pre:'一阵风吹来，桌上的蜡烛',blank:'熄灭',post:'了。',hint:'(tắt)',ans:'熄灭'},
  {pre:'一次没考好不要',blank:'泄气',post:'，下次再努力。',hint:'(nản chí)',ans:'泄气'},
  {pre:'阳光太强了，他不由得',blank:'眯',post:'起了眼睛。',hint:'(nheo)',ans:'眯'},
  {pre:'即使在最困难的时候，他也从来没有',blank:'绝望',post:'过。',hint:'(tuyệt vọng)',ans:'绝望'},
  {pre:'水泥还没完全',blank:'凝固',post:'，大家先别在上面走。',hint:'(đông cứng)',ans:'凝固'},
  {pre:'大火迅速',blank:'蔓延',post:'开来，消防员花了好几个小时才把它扑灭。',hint:'(lan ra)',ans:'蔓延'},
  {pre:'她努力',blank:'克制',post:'着自己，没让眼泪流下来。',hint:'(kiềm chế)',ans:'克制'},
  {pre:'妈妈总是',blank:'默默',post:'地为家人付出，从不抱怨。',hint:'(âm thầm)',ans:'默默'},
  {pre:'老师要求我们明天',blank:'背诵',post:'这首古诗。',hint:'(đọc thuộc lòng)',ans:'背诵'},
  {pre:'奶奶用毛线给我',blank:'编织',post:'了一条围巾。',hint:'(đan)',ans:'编织'},
  {pre:'学校',blank:'强制',post:'规定学生上课时不能使用手机。',hint:'(bắt buộc)',ans:'强制'},
  {pre:'春天来了，',blank:'田野',post:'里开满了黄色的油菜花。',hint:'(cánh đồng)',ans:'田野'},
  {pre:'我到现在还记得第一次见到他时的',blank:'情形',post:'。',hint:'(cảnh tượng, tình huống)',ans:'情形'},
  {pre:'舞台上的灯光十分',blank:'耀眼',post:'，照得人睁不开眼睛。',hint:'(chói mắt)',ans:'耀眼'},
  {pre:'早上，太阳发出金色的',blank:'光芒',post:'。',hint:'(ánh sáng, hào quang)',ans:'光芒'},
  {pre:'他从河里',blank:'捞',post:'上来一条大鱼。',hint:'(vớt)',ans:'捞'},
  {pre:'他把手掌',blank:'摊',post:'开，里面是一颗漂亮的小石头。',hint:'(mở ra)',ans:'摊'},
  {pre:'看到妈妈做的生日蛋糕，他大叫：“',blank:'哇',post:'，真漂亮！”',hint:'(chà, ôi chao)',ans:'哇'},
  {pre:'这张纸只有零点一',blank:'毫米',post:'厚。',hint:'(mi-li-mét)',ans:'毫米'},
  {pre:'听了专家的讲座，同学们的头脑中',blank:'迸发',post:'出了许多新想法。',hint:'(nảy ra, bùng ra)',ans:'迸发'},
  {pre:'他把钥匙放在裤',blank:'兜',post:'里了。',hint:'(túi)',ans:'兜'},
  {pre:'过年的时候，家家户户都挂起了红',blank:'灯笼',post:'。',hint:'(đèn lồng)',ans:'灯笼'},
  {pre:'好消息！我们班得了第一名',blank:'啦',post:'！',hint:'(trợ từ: rồi đấy)',ans:'啦'},
  {pre:'这个孩子很有音乐',blank:'天赋',post:'，五岁就会弹钢琴了。',hint:'(năng khiếu)',ans:'天赋'},
  {pre:'政府帮助',blank:'贫困',post:'地区的农民发展旅游业。',hint:'(nghèo khó)',ans:'贫困'},
  {pre:'健康是人生最宝贵的',blank:'财富',post:'。',hint:'(của cải, tài sản)',ans:'财富'},
  {pre:'劳动是创造一切的',blank:'源泉',post:'。',hint:'(nguồn)',ans:'源泉'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (别说 · 来来回回 AABB) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['那个动画片','连大人','都','爱看','，','别说','小孩子','了','。'],ans:'那个动画片连大人都爱看，别说小孩子了。',audio:'那个动画片连大人都爱看，别说小孩子了。'},
  {words:['晚上看书','别说','蜡烛','了','，','就是','灯油','也要','节省着用','。'],ans:'晚上看书别说蜡烛了，就是灯油也要节省着用。',audio:'晚上看书别说蜡烛了，就是灯油也要节省着用。'},
  {words:['他','连','蛇','都','不怕','，','别说','这种小虫子','了','。'],ans:'他连蛇都不怕，别说这种小虫子了。',audio:'他连蛇都不怕，别说这种小虫子了。'},
  {words:['萤火虫','在低空','盘旋飞舞','，','来来回回','地','飞','。'],ans:'萤火虫在低空盘旋飞舞，来来回回地飞。',audio:'萤火虫在低空盘旋飞舞，来来回回地飞。'},
  {words:['他','办事','总是','拖拖拉拉','的','，','让人','着急','。'],ans:'他办事总是拖拖拉拉的，让人着急。',audio:'他办事总是拖拖拉拉的，让人着急。'},
  {words:['那时','大伙','天天','说说笑笑','、','打打闹闹','地','，','快活极了','。'],ans:'那时大伙天天说说笑笑、打打闹闹地，快活极了。',audio:'那时大伙天天说说笑笑、打打闹闹地，快活极了。'},
  {words:['每当','他','捧起','书本','，','就像是','走进了','知识的海洋','。'],ans:'每当他捧起书本，就像是走进了知识的海洋。',audio:'每当他捧起书本，就像是走进了知识的海洋。'},
  {words:['历史文化的','长期','熏陶','，','使他','思维敏捷','，','胸怀宽广','。'],ans:'历史文化的长期熏陶，使他思维敏捷，胸怀宽广。',audio:'历史文化的长期熏陶，使他思维敏捷，胸怀宽广。'},
  {words:['只要','有书读','，','挨饿受冻','他','都','不怕','。'],ans:'只要有书读，挨饿受冻他都不怕。',audio:'只要有书读，挨饿受冻他都不怕。'},
  {words:['他','努力','克制着','自己的情绪','，','默默地','背诵','古诗','。'],ans:'他努力克制着自己的情绪，默默地背诵古诗。',audio:'他努力克制着自己的情绪，默默地背诵古诗。'},
  {words:['瞬间','，','他','头脑中','迸发出','一个','想法','。'],ans:'瞬间，他头脑中迸发出一个想法。',audio:'瞬间，他头脑中迸发出一个想法。'},
  {words:['生活贫困','并不可怕','，','可怕的是','精神贫困','。'],ans:'生活贫困并不可怕，可怕的是精神贫困。',audio:'生活贫困并不可怕，可怕的是精神贫困。'},
  {words:['日复一日的','努力','，','使他的','学识','与日俱增','。'],ans:'日复一日的努力，使他的学识与日俱增。',audio:'日复一日的努力，使他的学识与日俱增。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这次地震中，人民的生命财产____到很大损失。',opts:['挨','受','捧','挪'],ans:1,
   exp:'受 + 损失: sau là danh từ chỉ tổn thất, tai họa → 受到损失 (做一做 ①). 挨 không đi với 损失.'},
  {wrong:'因为撒谎，他____了父亲一顿打。',opts:['挨','受','揉','摊'],ans:0,
   exp:'挨了 + người + 一顿打: bị đánh — hành động cụ thể làm tổn hại thân thể → 挨 (做一做 ③).'},
  {wrong:'您____累，帮我照顾一下孩子好吗？',opts:['捞','挨','挪','受'],ans:3,
   exp:'受累 thuộc nhóm 受 + tính từ (受苦、受累、受冻、受惊) — lời nhờ vả lịch sự (做一做 ④).'},
  {wrong:'他刚参加工作，经验还比较____。',opts:['贫困','艰难','贫乏','美满'],ans:2,
   exp:'经验贫乏 = thiếu kinh nghiệm (贫乏 = thiếu, không phong phú, trái nghĩa 丰富). 贫困 nói về nghèo kinh tế.'},
  {wrong:'这个奖学金是专门为____家庭的学生设立的。',opts:['贫困','贫乏','炎热','耀眼'],ans:0,
   exp:'贫困家庭 = gia đình nghèo (kinh tế); không nói ×贫乏家庭.'},
  {wrong:'为了不影响工作，他努力____自己的情绪。',opts:['强制','熏陶','编织','克制'],ans:3,
   exp:'克制 + 情绪 = kiềm chế cảm xúc (练习2 ⑤). 强制 là ép buộc (bằng quyền lực, quy định).'},
  {wrong:'这台机器由电脑____，不需要人操作。',opts:['克制','控制','熏陶','强制'],ans:1,
   exp:'Điều khiển máy móc → 控制. 克制 chỉ dùng cho cảm xúc, hành vi của chính con người.'},
  {wrong:'我认识的那点儿字，____写小说了，看小说都看不下来。',opts:['别说','就是','即使','虽然'],ans:0,
   exp:'别说 A 了，B 都…… = nói gì đến A, ngay cả B cũng … (Chú thích 1). Viết tiểu thuyết khó hơn đọc → đứng sau 别说.'},
  {wrong:'工厂管理很严，别说外人，____本厂的人也不能在车间乱跑。',opts:['虽然','因为','即使','只要'],ans:2,
   exp:'别说 A，即使 / 就是 B 也…… (Chú thích 1). 虽然 cần 但是; 只要 cần 就.'},
  {wrong:'他这个人办事就是____的，让人着急。',opts:['说说笑笑','拖拖拉拉','打打闹闹','来来回回'],ans:1,
   exp:'拖拖拉拉 = lề mề, dây dưa → khiến người ta sốt ruột (Chú thích 2 · 练一练 (1)).'},
  {wrong:'只见一大群萤火虫在低空盘旋飞舞，____地飞。',opts:['吵吵嚷嚷','拖拖拉拉','说说笑笑','来来回回'],ans:3,
   exp:'来来回回 + 地 + 飞 = bay qua bay lại (câu bài khoá, Chú thích 2).'},
  {wrong:'失败了没关系，不要____。',opts:['泄气','着迷','熄灭','骚扰'],ans:0,
   exp:'不要泄气 = đừng nản chí (练习2 ④).'},
  {wrong:'他放下灯，____地凝视着眼前的茫茫黑暗。',opts:['艰难','耀眼','绝望','美满'],ans:2,
   exp:'绝望地凝视 = tuyệt vọng nhìn chằm chằm (dầu đèn đã hết). Các tính từ khác không hợp nghĩa.'},
  {wrong:'萤火虫的亮光成为黑暗中唯一____的光芒。',opts:['耀眼','贫乏','炎热','艰难'],ans:0,
   exp:'耀眼的光芒 = ánh sáng chói lọi, rực rỡ.'},
  {wrong:'远处村子的灯光都____了，只剩下星星那微弱的光芒。',opts:['凝固','蔓延','熄灭','迸发'],ans:2,
   exp:'灯光熄灭 = đèn tắt (练习3 đoạn 2); vế sau "chỉ còn ánh sao" cho biết đèn đã tắt.'},
  {wrong:'凉风吹来，丝丝凉意在身体中____开来。',opts:['凝固','熄灭','编织','蔓延'],ans:3,
   exp:'蔓延开来 = lan tỏa ra (练习3 đoạn 2). 凝固 là đông cứng — ngược nghĩa.'},
  {wrong:'瞬间，他头脑中____出一个想法。',opts:['蔓延','凝固','迸发','熄灭'],ans:2,
   exp:'迸发出 + 想法 / 灵感 = bất chợt nảy ra ý tưởng; 瞬间 ôn HSK 6 bài 1.'},
  {wrong:'他虽然没有过人的____，但是日复一日的努力使他成为知名学者。',opts:['财富','天赋','源泉','知觉'],ans:1,
   exp:'过人的天赋 = năng khiếu hơn người; 虽然……但是…… đối lập "không có năng khiếu" với "nỗ lực".'},
  {wrong:'贫困的经历可以成为奋斗拼搏的动力和____。',opts:['天堂','情形','光芒','源泉'],ans:3,
   exp:'动力和源泉 = động lực và nguồn sức mạnh (câu bài khoá).'},
  {wrong:'屋子里闷热的空气像是____了。',opts:['熄灭','凝固','蔓延','迸发'],ans:1,
   exp:'空气像是凝固了 = không khí như đông cứng lại (ví von sự ngột ngạt).'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 26 + ôn từ HSK 6 bài 1–22 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Kỳ nghỉ hè năm nay nóng nực đến mức không chịu nổi, nói gì đến ra ngoài chơi, ngay cả đi siêu thị tôi cũng lười.',zh:'今年暑假炎热得让人不堪忍受，别说出去玩了，就是去超市我都懒得去。',py:'Jīnnián shǔjià yánrè de ràng rén bùkān rěnshòu, biéshuō chūqu wán le, jiùshì qù chāoshì wǒ dōu lǎnde qù.',goiY:['炎热','不堪','别说……就是……'],giai:'别说 A 了，就是 B 都 / 也…… = nói gì đến A, ngay cả B cũng … (Chú thích 1); "nóng đến mức không chịu nổi" → 炎热得让人不堪忍受 (Adj + 得 + bổ ngữ mức độ; 忍受 ôn bài 19).'},
  {vi:'Đừng vì một lần thi không tốt mà nản chí, trải nghiệm thất bại cũng có thể trở thành một tài sản quý giá.',zh:'别因为一次没考好就泄气，失败的经历也可以成为一笔宝贵的财富。',py:'Bié yīnwèi yí cì méi kǎohǎo jiù xièqì, shībài de jīnglì yě kěyǐ chéngwéi yì bǐ bǎoguì de cáifù.',goiY:['别因为……就……','泄气','财富'],giai:'别因为 A 就 B = đừng vì A mà B; "một tài sản quý giá" → 一笔宝贵的财富 (lượng từ 笔). Đừng dịch "nản chí" thành 失望 — 泄气 mới là "xuống tinh thần".'},
  {vi:'Hồi nhỏ gia cảnh anh ấy nghèo túng, thường xuyên phải chịu đói chịu rét, nhưng chưa bao giờ than phiền.',zh:'他小时候家境贫乏，常常挨饿受冻，可是从来没有抱怨过。',py:'Tā xiǎo shíhou jiājìng pínfá, chángcháng ái è shòu dòng, kěshì cónglái méiyǒu bàoyuànguo.',goiY:['贫乏','挨饿受冻','从来没有'],giai:'可是 nối vế chuyển ý; 从来没有 + V + 过 = chưa từng …; "chịu đói chịu rét" là cụm cố định 挨饿受冻 (挨 và 受 đều là "chịu").'},
  {vi:'Cho dù không có năng khiếu hơn người, chỉ cần chịu bỏ công sức, vốn kiến thức nghèo nàn cũng sẽ ngày một phong phú lên.',zh:'即使没有过人的天赋，只要肯下功夫，贫乏的知识也会一天天丰富起来。',py:'Jíshǐ méiyǒu guòrén de tiānfù, zhǐyào kěn xià gōngfu, pínfá de zhīshi yě huì yìtiāntiān fēngfù qǐlái.',goiY:['即使……也……','只要','天赋','贫乏'],giai:'即使 (giả thiết nhượng bộ) lồng 只要 (điều kiện), 也 đặt ở vế cuối trước động từ; 贫乏 ↔ 丰富 (trái nghĩa), Adj + 起来 = bắt đầu trở nên ….'},
  {vi:'Mỗi khi tôi gặp chuyện buồn, mẹ luôn âm thầm ủng hộ tôi, mẹ chính là nguồn sức mạnh giúp tôi tiến lên.',zh:'每当我遇到伤心的事，妈妈总是默默地支持我，她是我前进的力量源泉。',py:'Měi dāng wǒ yùdào shāngxīn de shì, māma zǒngshì mòmò de zhīchí wǒ, tā shì wǒ qiánjìn de lìliàng yuánquán.',goiY:['每当……','默默','源泉'],giai:'每当……（的时候）= mỗi khi …; "âm thầm ủng hộ" → 默默地支持; "nguồn sức mạnh" → 力量源泉 (không dịch 来源 — 来源 dùng cho thông tin, thu nhập).'},
  {vi:'Ở vùng núi nghèo ấy, nói gì đến máy tính, nhiều nhà ngay cả đèn điện cũng không có, buổi tối chỉ có thể thắp nến.',zh:'在那个贫困的山区，别说电脑了，很多人家连电灯都没有，晚上只能点蜡烛。',py:'Zài nàge pínkùn de shānqū, biéshuō diànnǎo le, hěn duō rénjiā lián diàndēng dōu méiyǒu, wǎnshang zhǐ néng diǎn làzhú.',goiY:['别说……了','连……都……','贫困','蜡烛'],giai:'别说 A 了，连 B 都…… (Chú thích 1): máy tính (đắt, hiếm) đặt sau 别说, đèn điện (tối thiểu) đặt sau 连; 贫困 (nghèo kinh tế) mới đi với 山区, không dùng 贫乏.'},
  {vi:'Tan học, chúng tôi cười cười nói nói dạo bước trên cánh đồng; tuy mệt rã rời nhưng ai nấy đều rất vui.',zh:'放学后，我们说说笑笑地漫步在田野中，虽然疲惫不堪，但大家都很快活。',py:'Fàngxué hòu, wǒmen shuōshuōxiàoxiào de mànbù zài tiányě zhōng, suīrán píbèi bùkān, dàn dàjiā dōu hěn kuàihuo.',goiY:['说说笑笑地','田野','虽然……但……','不堪'],giai:'AABB + 地 làm trạng ngữ (Chú thích 2): 说说笑笑地漫步; 疲惫不堪 = mệt rã rời (Adj + 不堪; 疲惫 ôn bài 14, 快活 ôn bài 11).'},
  {vi:'Nó làm bài tập lúc nào cũng lề mề, cứ ngồi một lát là lại xê xê cái ghế, dụi dụi mắt, thảo nào đến nửa đêm vẫn chưa làm xong.',zh:'他写作业总是拖拖拉拉的，坐一会儿就挪挪椅子、揉揉眼睛，难怪到半夜还没写完。',py:'Tā xiě zuòyè zǒngshì tuōtuōlālā de, zuò yíhuìr jiù nuónuo yǐzi, róurou yǎnjing, nánguài dào bànyè hái méi xiěwán.',goiY:['拖拖拉拉的','挪','揉','难怪'],giai:'AABB + 的 làm vị ngữ (拖拖拉拉的); 挪挪、揉揉 là lặp động từ đơn âm (làm một chút); 难怪 đứng đầu vế cuối nêu kết luận "thảo nào …".'},
  {vi:'Tôi vốn định lặng lẽ chịu đựng, nhưng thấy cậu ta lại đang chế giễu người khác, rốt cuộc không kìm được, cãi lại cậu ta mấy câu.',zh:'我本来想默默忍受，可是看到他又在嘲笑别人，终于克制不住，反驳了他几句。',py:'Wǒ běnlái xiǎng mòmò rěnshòu, kěshì kàndào tā yòu zài cháoxiào biérén, zhōngyú kèzhì bu zhù, fǎnbóle tā jǐ jù.',goiY:['本来……可是……','默默','克制不住','反驳'],giai:'本来……可是…… = vốn định … nhưng …; 克制不住 = không kìm được (bổ ngữ khả năng); 嘲笑, 反驳 ôn HSK 6 bài 1.'},
  {vi:'Những năm tháng gian nan ấy chẳng những không khiến anh tuyệt vọng, trái lại còn trở thành động lực và nguồn sức mạnh để anh phấn đấu; có lẽ đó chính là tài sản mà cái nghèo đã tặng cho anh.',zh:'那段艰难的岁月不但没有让他绝望，反而成了他奋斗的动力和源泉，这大概就是贫困给他的财富吧。',py:'Nà duàn jiānnán de suìyuè búdàn méiyǒu ràng tā juéwàng, fǎn\'ér chéngle tā fèndòu de dònglì hé yuánquán, zhè dàgài jiù shì pínkùn gěi tā de cáifù ba.',goiY:['不但没有……反而……','绝望','源泉','财富'],giai:'不但没有 A，反而 B = chẳng những không A mà trái lại B (kết quả ngược mong đợi); vế ba 这大概就是……吧 là lời bình suy đoán. 艰难的岁月 = năm tháng gian nan.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Mỗi khi cầm quyển sách lên, anh ta như bước vào biển cả tri thức, thơ từ các đời đều khiến anh say mê.',zh:'每当他捧起书本，就像走进了知识的海洋，历代诗词都会使他着迷。',py:'Měi dāng tā pěngqǐ shūběn, jiù xiàng zǒujìnle zhīshi de hǎiyáng, lìdài shīcí dōu huì shǐ tā zháomí.',goiY:['每当……就…… = mỗi khi … thì …','捧 = cầm (bằng hai tay)','历代 = các đời','着迷 = say mê'],giai:'每当……就…… chỉ việc lặp lại mỗi lần; 就像走进了知识的海洋 là phép ví von (比喻 — 篇章修辞 của bài): so sách với biển cả tri thức.'},
  {vi:'Sự hun đúc lâu dài của lịch sử văn hóa khiến anh không những tư duy nhanh nhạy mà còn có tấm lòng rộng mở.',zh:'历史文化的长期熏陶，使他不但思维敏捷，而且胸怀宽广。',py:'Lìshǐ wénhuà de chángqī xūntáo, shǐ tā búdàn sīwéi mǐnjié, érqiě xiōnghuái kuānguǎng.',goiY:['熏陶 = hun đúc','不但……而且…… = không những … mà còn …','胸怀 = tấm lòng'],giai:'Chủ ngữ là cụm danh từ dài (……的长期熏陶), vị ngữ 使 + người + ……: khi dịch nên nói "sự hun đúc … khiến anh …"; 思维 ôn bài 5, 敏捷 ôn bài 11.'},
  {vi:'Giá rét và sự quấy nhiễu của muỗi đều không ảnh hưởng được đến việc đọc sách của anh, điều duy nhất khiến anh rầu rĩ là gia cảnh nghèo túng.',zh:'严寒和蚊子的骚扰都影响不了他读书，唯独让他发愁的是家境贫乏。',py:'Yánhán hé wénzi de sāorǎo dōu yǐngxiǎng bu liǎo tā dú shū, wéidú ràng tā fāchóu de shì jiājìng pínfá.',goiY:['骚扰 = quấy nhiễu','唯独 = duy chỉ, riêng','贫乏 = nghèo túng'],giai:'影响不了 = không ảnh hưởng nổi (bổ ngữ khả năng); 唯独……的是…… = điều duy nhất … là … (唯独 ôn bài 6, 严寒 ôn bài 14).'},
  {vi:'Cuộc sống của anh ta gian nan, nói gì đến nến, ngay cả dầu đèn cũng không nỡ dùng nhiều.',zh:'他日子过得艰难，别说蜡烛了，就是灯油也舍不得多用。',py:'Tā rìzi guò de jiānnán, biéshuō làzhú le, jiùshì dēngyóu yě shěbude duō yòng.',goiY:['艰难 = gian nan','别说……了，就是……也…… = nói gì đến …, ngay cả … cũng …','舍不得 = không nỡ'],giai:'别说 A 了，就是 B 也…… (Chú thích 1): A (nến) là thứ đắt hơn, hiển nhiên không dùng nổi; B (dầu đèn) rẻ hơn mà vẫn phải tiết kiệm. Dịch "nói gì đến …, ngay cả … cũng …".'},
  {vi:'Vì ngồi quá lâu, cổ anh ta hơi tê, thế là anh xoa xoa cái cổ, nhích nhích mông.',zh:'由于坐得太久，他的颈椎有些麻木，于是揉了揉脖子，挪了挪屁股。',py:'Yóuyú zuò de tài jiǔ, tā de jǐngzhuī yǒuxiē mámù, yúshì róule róu bózi, nuóle nuó pìgu.',goiY:['由于……于是……','颈椎 = đốt sống cổ','揉了揉 = xoa xoa','挪了挪 = nhích nhích'],giai:'由于 (nguyên nhân) → 于是 (hành động tiếp theo); V了V = làm một chút (đã xảy ra); 颈椎 dịch tự nhiên là "cổ" thay vì "đốt sống cổ"; 麻木 ôn bài 9.'},
  {vi:'Chỉ cần có sách đọc, chịu đói chịu rét anh cũng không sợ; chỉ cần có sách bầu bạn, anh liền cảm thấy như đang sống ở thiên đường.',zh:'只要有书读，挨饿受冻他都不怕；只要有书陪伴，他就觉得像生活在天堂。',py:'Zhǐyào yǒu shū dú, ái è shòu dòng tā dōu bú pà; zhǐyào yǒu shū péibàn, tā jiù juéde xiàng shēnghuó zài tiāntáng.',goiY:['只要……就…… = chỉ cần … thì …','挨饿受冻 = chịu đói chịu rét','天堂 = thiên đường'],giai:'Hai câu 只要 song song, ngăn bằng dấu ；; tân ngữ 挨饿受冻 được đảo lên trước 他都不怕 để nhấn mạnh — tiếng Việt giữ trật tự "chịu đói chịu rét anh cũng không sợ".'},
  {vi:'Đèn dầu tắt rồi, anh hơi nản lòng, chỉ còn biết tuyệt vọng nhìn chằm chằm vào màn đêm mịt mùng trước mặt.',zh:'油灯熄灭以后，他有些泄气，只能绝望地凝视着眼前的茫茫黑暗。',py:'Yóudēng xīmiè yǐhòu, tā yǒuxiē xièqì, zhǐ néng juéwàng de níngshìzhe yǎnqián de mángmáng hēi\'àn.',goiY:['熄灭 = tắt','泄气 = nản lòng','绝望 = tuyệt vọng'],giai:'Chuỗi ba vế theo diễn biến: sự việc (灯灭) → tâm trạng (泄气) → hành động (凝视); 只能 dịch "chỉ còn biết"; 凝视 ôn bài 11.'},
  {vi:'Anh cố kìm nén cảm xúc bực bội, lặng lẽ đọc thầm thơ cổ, nhưng cách ép buộc này chẳng có chút hiệu quả nào.',zh:'他努力克制着烦躁的情绪，默默地背诵古诗，可这种强制的办法并没有效果。',py:'Tā nǔlì kèzhìzhe fánzào de qíngxù, mòmò de bèisòng gǔshī, kě zhè zhǒng qiángzhì de bànfǎ bìng méiyǒu xiàoguǒ.',goiY:['克制 = kìm nén','默默 = lặng lẽ','背诵 = đọc thuộc','强制 = ép buộc'],giai:'可 (= 可是) chuyển ý ở vế cuối; 并没有 nhấn mạnh phủ định (trái với mong đợi) — dịch "chẳng … chút nào".'},
  {vi:'Anh dạo bước trên cánh đồng, bỗng bị cảnh tượng trước mắt thu hút: một đàn đom đóm lớn đang bay qua bay lại, đuôi nhấp nháy thứ ánh sáng chói lọi.',zh:'他漫步在田野中，忽然被眼前的情形吸引住了：一大群萤火虫正来来回回地飞，尾巴闪烁着耀眼的光芒。',py:'Tā mànbù zài tiányě zhōng, hūrán bèi yǎnqián de qíngxing xīyǐn zhù le: yí dà qún yínghuǒchóng zhèng láiláihuíhuí de fēi, wěiba shǎnshuòzhe yàoyǎn de guāngmáng.',goiY:['情形 = cảnh tượng','来来回回地 = qua qua lại lại','耀眼 = chói lọi','光芒 = ánh sáng'],giai:'Dấu ： dẫn ra cảnh tượng giải thích cho 情形; AABB + 地 làm trạng ngữ (Chú thích 2) — dịch "bay qua bay lại"; 闪烁 ôn bài 17.'},
  {vi:'Anh tuy không có năng khiếu hơn người, nhưng sự nỗ lực ngày này qua ngày khác khiến học thức của anh ngày một tăng; có thể thấy, nghèo khó về vật chất không đáng sợ, đáng sợ là nghèo nàn về tinh thần.',zh:'他虽然没有过人的天赋，但日复一日的努力使他学识与日俱增；可见，生活贫困并不可怕，可怕的是精神贫困。',py:'Tā suīrán méiyǒu guòrén de tiānfù, dàn rì fù yí rì de nǔlì shǐ tā xuéshí yǔrì-jùzēng; kějiàn, shēnghuó pínkùn bìng bù kěpà, kěpà de shì jīngshén pínkùn.',goiY:['虽然……但…… = tuy … nhưng …','天赋 = năng khiếu','可见 = có thể thấy','贫困 = nghèo khó'],giai:'Hai ý lớn ngăn bằng ；: câu chuyện (虽然……但……) và bài học rút ra (可见……); ……并不可怕，可怕的是…… = … không đáng sợ, đáng sợ là …; 与日俱增 ôn bài 18.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 70): 缩写课文 400字左右
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:400,
  de:'这篇课文给我们讲述了一个克服困难、勤奋学习的故事，故事的主人公因家境贫寒，没钱买灯油，可又酷爱读书，因此想出了借用萤火虫的光芒来读书的办法，终于成为知名学者。故事告诉我们生活的贫困并不可怕，可怕的是思想贫困、精神贫困。请参考练习5，把课文缩写成400字左右的短文。',
  prompt:'Bài khoá kể cho chúng ta câu chuyện về một người vượt qua khó khăn, chăm chỉ học tập: nhân vật chính vì gia cảnh nghèo túng, không có tiền mua dầu đèn, nhưng lại cực kỳ yêu đọc sách, nên đã nghĩ ra cách mượn ánh sáng của đom đóm để đọc sách, cuối cùng trở thành học giả nổi tiếng. Câu chuyện cho chúng ta biết cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tư tưởng, về tinh thần. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành đoạn văn khoảng 400 chữ.',
  dan:[
    {hoi:'让读书人幸福的事情',goiY:'①……使他着迷 ②只要有……陪伴，就……'},
    {hoi:'让读书人发愁的事情',goiY:'家境贫困，灯油'},
    {hoi:'读书人为了克服困难采取的办法',goiY:'①克制、背诵、编织 ②漫步田野，发现萤火虫 ③制成萤火虫“灯笼”'},
    {hoi:'读书人最后的成就',goiY:'知名学者'},
    {hoi:'这个故事给我们的启示',goiY:'……并不可怕，可怕的是……'}
  ],
  tuNen:['着迷','熏陶','贫乏','别说……就是……','熄灭','克制','来来回回','迸发','天赋','源泉'],
  cauTruc:[
    {ten:'传说古代有个……', nhan:'Mở bài · giới thiệu nhân vật', vd:'传说古代有个爱书如命的读书人。', khi:'Mở bằng lối kể chuyện cổ, nêu ngay nét nổi bật nhất của nhân vật (爱书如命).'},
    {ten:'……都会使他着迷；只要有……陪伴，他就……', nhan:'Dòng 1 · niềm hạnh phúc', vd:'只要有书陪伴，他就感觉幸福、美满，挨饿受冻也不怕。', khi:'Kể những điều khiến nhân vật hạnh phúc (dòng 1 bảng 练习5).'},
    {ten:'唯独让他发愁的是……，别说……了，就是……也……', nhan:'Dòng 2 · điểm ngữ pháp 别说', vd:'唯独让他发愁的是家境贫乏，晚上看书别说蜡烛了，就是灯油也要节省着用。', khi:'Nêu khó khăn duy nhất, dùng 别说 để nhấn mức độ nghèo.'},
    {ten:'一个……的夜晚，……忽然……，于是……', nhan:'Dòng 3 · diễn biến', vd:'一个闷热的夏夜，油灯忽然熄灭了，于是他走出房门，漫步在田野中。', khi:'Kể chuỗi hành động theo thời gian bằng 忽然, 于是, 从此.'},
    {ten:'瞬间，他头脑中迸发出一个想法：……不就……了吗？', nhan:'Cao trào · ý tưởng', vd:'瞬间，他头脑中迸发出一个想法：把萤火虫集中在一起，不就成灯了吗？', khi:'Dùng câu hỏi tu từ 不就……了吗 để kể lại ý tưởng bất chợt.'},
    {ten:'虽然……，但是……，最后终于……', nhan:'Dòng 4 · thành tựu', vd:'他虽然没有过人的天赋，但是日复一日的努力使他最后终于成为知名学者。', khi:'Nêu kết quả cuối cùng, nhấn vai trò của sự nỗ lực.'},
    {ten:'……并不可怕，可怕的是……', nhan:'Dòng 5 · bài học (启示)', vd:'生活贫困并不可怕，可怕的是思想贫困、精神贫困。', khi:'Kết bài bằng câu khái quát bài học rút ra.'}
  ],
  checklist:[
    'Đã viết khoảng 400 chữ Hán chưa (320–540 chữ là đạt; không đếm dấu câu)?',
    'Có đủ năm ý theo bảng 练习5 và đúng thứ tự: niềm vui đọc sách → khó khăn (nghèo, dầu đèn) → cách vượt khó (克制、背诵、编织 → dạo cánh đồng → làm "đèn lồng") → thành tựu → bài học chưa?',
    'Phần "cách vượt khó" đã kể đủ ba bước ①②③ và có câu nảy ra ý tưởng (迸发出一个想法) chưa?',
    'Đã dùng 别说……就是……也…… và ít nhất một dạng AABB (来来回回, 说说笑笑…) — hai điểm ngữ pháp của bài — chưa?',
    'Đã dùng ít nhất 6 từ mới (着迷, 熏陶, 贫乏, 熄灭, 克制, 迸发, 天赋, 源泉…), kể bằng lời của mình — không chép nguyên đoạn dài của bài khoá — chưa?'
  ],
  model:{
    zh:'（题目：萤火虫做成的灯）传说古代有个爱书如命的读书人。天文地理、儒家经典、历代诗词都会使他着迷，历史文化的长期熏陶使他思维敏捷，胸怀宽广。只要有书陪伴，他就感觉幸福、美满，挨饿受冻也不怕。唯独让他发愁的是家境贫乏，晚上看书别说蜡烛了，就是灯油也要节省着用。一个闷热的夏夜，他正在读书，油灯忽然熄灭了，原来是灯油用完了。他有些泄气，只好在黑暗中努力克制着烦躁的情绪，默默地背诵刚读过的古诗，在头脑中编织诗中的画面。可是这种办法没有效果，于是他走出房门，漫步在田野中。忽然，他看见一大群萤火虫在低空来来回回地飞，尾巴闪着耀眼的光芒。他伸手捞住一只，摊开手掌一看，那亮光虽然很小，却还算明亮。瞬间，他头脑中迸发出一个想法：把许多萤火虫集中在一起，不就成灯了吗？他用薄布做了个布兜，把萤火虫放在里面，再把布兜吊起来，一个“灯笼”就做成了。虽然没有油灯亮，但是看书还是可以的。从此，萤火虫做成的“灯”夜夜陪伴着他。他虽然没有过人的天赋，但是日复一日的努力使他的学识与日俱增，最后终于成为知名学者。这个故事告诉我们：生活贫困并不可怕，可怕的是思想贫困、精神贫困。贫困的经历可以成为我们的财富，成为奋斗的动力和源泉。',
    py:'(Tímù: Yínghuǒchóng zuòchéng de dēng) Chuánshuō gǔdài yǒu ge ài shū rú mìng de dúshūrén. Tiānwén dìlǐ, Rújiā jīngdiǎn, lìdài shīcí dōu huì shǐ tā zháomí, lìshǐ wénhuà de chángqī xūntáo shǐ tā sīwéi mǐnjié, xiōnghuái kuānguǎng. Zhǐyào yǒu shū péibàn, tā jiù gǎnjué xìngfú, měimǎn, ái è shòu dòng yě bú pà. Wéidú ràng tā fāchóu de shì jiājìng pínfá, wǎnshang kàn shū biéshuō làzhú le, jiùshì dēngyóu yě yào jiéshěngzhe yòng. Yí ge mēnrè de xiàyè, tā zhèngzài dú shū, yóudēng hūrán xīmiè le, yuánlái shì dēngyóu yòngwán le. Tā yǒuxiē xièqì, zhǐhǎo zài hēi\'àn zhōng nǔlì kèzhìzhe fánzào de qíngxù, mòmò de bèisòng gāng dúguo de gǔshī, zài tóunǎo zhōng biānzhī shī zhōng de huàmiàn. Kěshì zhè zhǒng bànfǎ méiyǒu xiàoguǒ, yúshì tā zǒuchū fángmén, mànbù zài tiányě zhōng. Hūrán, tā kànjiàn yí dà qún yínghuǒchóng zài dīkōng láiláihuíhuí de fēi, wěiba shǎnzhe yàoyǎn de guāngmáng. Tā shēnshǒu lāozhù yì zhī, tānkāi shǒuzhǎng yí kàn, nà liàngguāng suīrán hěn xiǎo, què hái suàn míngliàng. Shùnjiān, tā tóunǎo zhōng bèngfā chū yí ge xiǎngfǎ: bǎ xǔduō yínghuǒchóng jízhōng zài yìqǐ, bú jiù chéng dēng le ma? Tā yòng báo bù zuòle ge bùdōu, bǎ yínghuǒchóng fàng zài lǐmiàn, zài bǎ bùdōu diào qǐlái, yí ge "dēnglong" jiù zuòchéng le. Suīrán méiyǒu yóudēng liàng, dànshì kàn shū háishi kěyǐ de. Cóngcǐ, yínghuǒchóng zuòchéng de "dēng" yèyè péibànzhe tā. Tā suīrán méiyǒu guòrén de tiānfù, dànshì rì fù yí rì de nǔlì shǐ tā de xuéshí yǔrì-jùzēng, zuìhòu zhōngyú chéngwéi zhīmíng xuézhě. Zhège gùshi gàosu wǒmen: shēnghuó pínkùn bìng bù kěpà, kěpà de shì sīxiǎng pínkùn, jīngshén pínkùn. Pínkùn de jīnglì kěyǐ chéngwéi wǒmen de cáifù, chéngwéi fèndòu de dònglì hé yuánquán.',
    vn:'(Nhan đề: Chiếc đèn làm bằng đom đóm) Tương truyền thời xưa có một người đọc sách yêu sách như mạng sống. Thiên văn địa lý, kinh điển Nho gia, thơ từ các đời, thứ gì cũng khiến anh say mê; sự hun đúc lâu dài của lịch sử văn hóa khiến anh tư duy nhanh nhạy, tấm lòng rộng mở. Chỉ cần có sách bầu bạn, anh liền thấy hạnh phúc, viên mãn, chịu đói chịu rét cũng không sợ. Điều duy nhất khiến anh rầu rĩ là gia cảnh nghèo túng: buổi tối đọc sách, nói gì đến nến, ngay cả dầu đèn cũng phải dùng dè sẻn. Một đêm hè oi bức, anh đang đọc sách thì đèn dầu bỗng tắt — hóa ra đã hết dầu. Anh hơi nản lòng, đành cố kìm nén sự bực bội trong bóng tối, lặng lẽ đọc thầm bài thơ cổ vừa đọc, tưởng tượng ra những cảnh trong bài thơ. Nhưng cách này không hiệu quả, thế là anh bước ra khỏi nhà, dạo bước trên cánh đồng. Bỗng anh thấy một đàn đom đóm lớn bay qua bay lại ở tầm thấp, đuôi lấp lánh ánh sáng chói lọi. Anh đưa tay chụp lấy một con, mở bàn tay ra nhìn: đốm sáng tuy nhỏ nhưng vẫn khá sáng. Trong khoảnh khắc, trong đầu anh nảy ra một ý: gom thật nhiều đom đóm lại một chỗ, chẳng phải sẽ thành cái đèn sao? Anh lấy vải mỏng làm một cái túi, bỏ đom đóm vào trong rồi treo túi lên, thế là một chiếc "đèn lồng" đã làm xong. Tuy không sáng bằng đèn dầu nhưng đọc sách vẫn được. Từ đó, chiếc "đèn" đom đóm đêm đêm bầu bạn cùng anh. Anh tuy không có năng khiếu hơn người, nhưng sự nỗ lực ngày này qua ngày khác khiến học thức của anh ngày một tăng, cuối cùng trở thành một học giả nổi tiếng. Câu chuyện cho chúng ta biết: cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tư tưởng, về tinh thần. Trải nghiệm nghèo khó có thể trở thành tài sản của chúng ta, thành động lực và nguồn sức mạnh để phấn đấu.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Bảng có năm dòng (điều khiến người đọc sách hạnh phúc · điều khiến anh rầu rĩ · cách anh vượt qua khó khăn · thành tựu cuối cùng · bài học của câu chuyện). Mỗi câu dưới đây là một dòng — bấm loa nghe câu hỏi, nhìn gợi ý, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 着迷 · 熏陶 · 贫乏 · 艰难 · 熄灭 · 泄气 · 克制 · 背诵 · 编织 · 田野 · 迸发 · 天赋 · 财富 · 源泉.',
  questions:[
    {q_zh:'让读书人幸福的事情',
     q_vn:'Những điều khiến người đọc sách hạnh phúc',
     hint:'①……使他着迷 ②只要有……陪伴，就……',
     sample:'让读书人最幸福的事情就是读书。天文地理、儒家经典、传记散文、历代诗词，都会使他着迷。只要有书陪伴，他就感觉幸福、美满，像是生活在天堂，就算挨饿受冻他也不怕。',
     sample_vn:'Điều khiến người đọc sách hạnh phúc nhất chính là đọc sách. Thiên văn địa lý, kinh điển Nho gia, truyện ký tản văn, thơ từ các đời, thứ gì cũng khiến anh say mê. Chỉ cần có sách bầu bạn, anh liền thấy hạnh phúc, viên mãn, như đang sống ở thiên đường, dù có chịu đói chịu rét anh cũng không sợ.',
     note:'Gợi ý ① liệt kê các loại sách bằng dấu 、 rồi kết bằng 都会使他着迷; gợi ý ② dùng khung 只要……，就…….'},
    {q_zh:'让读书人发愁的事情',
     q_vn:'Điều khiến người đọc sách rầu rĩ',
     hint:'家境贫困，灯油',
     sample:'唯独让他发愁的是家境贫困，日子过得很艰难。晚上看书别说蜡烛了，就是灯油也要节省着用。有一天晚上，灯油用完了，油灯熄灭了，他有些泄气。',
     sample_vn:'Điều duy nhất khiến anh rầu rĩ là gia cảnh nghèo khó, cuộc sống rất gian nan. Buổi tối đọc sách, nói gì đến nến, ngay cả dầu đèn cũng phải dùng dè sẻn. Có một tối dầu đèn cạn, đèn tắt, anh hơi nản lòng.',
     note:'Mở bằng 唯独让他发愁的是……; dùng 别说……了，就是……也…… (Chú thích 1) cho ý "dầu đèn".'},
    {q_zh:'读书人为了克服困难采取的办法',
     q_vn:'Cách người đọc sách làm để vượt qua khó khăn',
     hint:'①克制、背诵、编织 ②漫步田野，发现萤火虫 ③制成萤火虫“灯笼”',
     sample:'油灯熄灭以后，他先努力克制自己的情绪，默默地背诵古诗，在头脑中编织诗中的画面，可是没有效果。于是他走到田野中散步，发现一大群萤火虫在来来回回地飞，尾巴闪着耀眼的光芒。他头脑中迸发出一个想法，就用薄布做了个布兜，把萤火虫装在里面，做成了一个“灯笼”。',
     sample_vn:'Sau khi đèn dầu tắt, trước tiên anh cố kìm nén cảm xúc, lặng lẽ đọc thầm thơ cổ, tưởng tượng ra những cảnh trong bài thơ, nhưng không có hiệu quả. Thế là anh ra cánh đồng đi dạo, phát hiện một đàn đom đóm lớn đang bay qua bay lại, đuôi lấp lánh ánh sáng chói lọi. Trong đầu anh nảy ra một ý, liền lấy vải mỏng làm một cái túi, bỏ đom đóm vào trong, làm thành một chiếc "đèn lồng".',
     note:'Kể đủ ba bước theo thứ tự bằng 先……，可是……。于是……，……就……; nhớ dùng 来来回回地飞 (Chú thích 2) và 迸发出一个想法.'},
    {q_zh:'读书人最后的成就',
     q_vn:'Thành tựu cuối cùng của người đọc sách',
     hint:'知名学者',
     sample:'他虽然不是天才，没有过人的天赋，但是日复一日的努力使他的学识与日俱增，最后终于成为知名学者。',
     sample_vn:'Anh tuy không phải thiên tài, không có năng khiếu hơn người, nhưng sự nỗ lực ngày này qua ngày khác khiến học thức của anh ngày một tăng, cuối cùng trở thành một học giả nổi tiếng.',
     note:'Dùng 虽然……，但是……，最后终于…… để nhấn mạnh: thành công nhờ nỗ lực, không nhờ năng khiếu.'},
    {q_zh:'这个故事给我们的启示',
     q_vn:'Bài học câu chuyện mang lại cho chúng ta',
     hint:'……并不可怕，可怕的是……',
     sample:'这个故事告诉我们，生活贫困并不可怕，可怕的是思想贫困、精神贫困、智慧贫困。贫困的经历可以成为我们的财富，成为奋斗拼搏的动力和源泉。',
     sample_vn:'Câu chuyện cho chúng ta biết, cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tư tưởng, về tinh thần, về trí tuệ. Trải nghiệm nghèo khó có thể trở thành tài sản của chúng ta, thành động lực và nguồn sức mạnh để phấn đấu.',
     note:'Khung đối lập ……并不可怕，可怕的是……; có thể nói thêm một câu liên hệ bản thân (对我来说，……).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 26.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 26',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么又在看这本传记？'},
            {sp:'男',zh:'这位科学家的经历太让人着迷了，我已经看了三遍，每次都有新的收获。'}],
     q:'男的觉得这本书怎么样？',qvn:'Người đàn ông thấy cuốn sách này thế nào?',
     opts:['很有意思，让人着迷','内容太长了','有很多地方看不懂','不如小说好看'],ans:0,
     why:'太让人着迷了 + 看了三遍，每次都有新的收获 → rất hay, cuốn hút. Không có thông tin "dài" hay "khó hiểu".',
     words:['传记','着迷']},

    {n:2,
     lines:[{sp:'男',zh:'听说你们那儿昨天晚上停电了？'},
            {sp:'女',zh:'是啊，别说看电视了，连手机都没电了，我只好点了根蜡烛，早早就睡了。'}],
     q:'停电的时候女的做了什么？',qvn:'Lúc mất điện người phụ nữ đã làm gì?',
     opts:['看电视','给手机充电','出去散步','点蜡烛，早早睡了'],ans:3,
     why:'别说看电视了，连手机都没电了 → không xem TV, không dùng được điện thoại; 只好点了根蜡烛，早早就睡了.',
     words:['蜡烛']},

    {n:3,
     lines:[{sp:'女',zh:'这次比赛又输了，队员们都很泄气。'},
            {sp:'男',zh:'输了不要紧，关键是要找出原因。你去跟他们说，别动不动就灰心，下次还有机会。'}],
     q:'男的是什么态度？',qvn:'Người đàn ông có thái độ thế nào?',
     opts:['非常生气','鼓励队员不要泄气','打算换一批队员','觉得比赛不公平'],ans:1,
     why:'输了不要紧 + 别动不动就灰心，下次还有机会 → động viên, khích lệ. 动不动 ôn bài 22.',
     words:['泄气']},

    {n:4,
     lines:[{sp:'男',zh:'我儿子写作业总是拖拖拉拉的，一会儿挪挪椅子，一会儿揉揉眼睛。'},
            {sp:'女',zh:'可能是他对作业没兴趣。你别强制他，试试跟他一起定个学习计划吧。'}],
     q:'女的建议男的怎么做？',qvn:'Người phụ nữ khuyên người đàn ông làm gì?',
     opts:['好好批评儿子','给儿子买把新椅子','和儿子一起定计划','让儿子早点儿睡觉'],ans:2,
     why:'你别强制他 (đừng ép) + 试试跟他一起定个学习计划 → cùng con lập kế hoạch.',
     words:['挪','揉','强制']},

    {n:5,
     lines:[{sp:'女',zh:'你的脖子怎么了？我看你一直在揉。'},
            {sp:'男',zh:'最近天天低头看手机，颈椎有点儿疼，医生让我每天多活动活动。'}],
     q:'男的为什么脖子疼？',qvn:'Vì sao người đàn ông đau cổ?',
     opts:['睡觉的姿势不对','常常低头看手机','打球时受伤了','天气太冷了'],ans:1,
     why:'天天低头看手机，颈椎有点儿疼 — nguyên nhân nói thẳng. 颈椎 = đốt sống cổ.',
     words:['揉','颈椎']},

    {n:6,
     lines:[{sp:'男',zh:'这位老画家年轻的时候家里特别贫困，连纸都买不起。'},
            {sp:'女',zh:'可他一点儿也没泄气，就在地上用树枝画，一画就是十几年，最后成了著名画家。'}],
     q:'关于这位老画家，可以知道什么？',qvn:'Về vị họa sĩ già, có thể biết điều gì?',
     opts:['年轻时很有钱','天赋很高，没怎么努力','年轻时在国外学画','家里穷，但坚持练习'],ans:3,
     why:'家里特别贫困 + 一点儿也没泄气，用树枝画，一画就是十几年 → nhà nghèo nhưng kiên trì luyện tập.',
     words:['贫困','泄气']},

    {n:7,
     lines:[{sp:'女',zh:'上次去乡下，晚上田野里有好多萤火虫，一闪一闪的，漂亮极了！'},
            {sp:'男',zh:'真羡慕你！城里的灯光太亮了，现在很难看到萤火虫了。'}],
     q:'男的认为城里为什么很难看到萤火虫？',qvn:'Người đàn ông cho rằng vì sao trong thành phố khó thấy đom đóm?',
     opts:['城里的灯光太亮','城里没有田野','萤火虫只在冬天出现','城里人不喜欢萤火虫'],ans:0,
     why:'城里的灯光太亮了，现在很难看到萤火虫了 — nguyên nhân do người đàn ông nêu.',
     words:['田野']},

    {n:8,
     lines:[{sp:'男',zh:'我们常说“贫困”，其实贫困有很多种。生活贫困当然让人发愁，但它并不可怕，很多人正是在艰难的日子里学会了坚强，贫困的经历反而成了他们的财富。真正可怕的是精神贫困：一个人如果不读书、不思考，知识越来越贫乏，那么即使生活富裕，他的内心也是空虚的。'}],
     q:'说话人认为什么最可怕？',qvn:'Người nói cho rằng điều gì đáng sợ nhất?',
     opts:['生活贫困','日子艰难','精神贫困','没有财富'],ans:2,
     why:'真正可怕的是精神贫困 — câu then chốt. Sinh hoạt nghèo 并不可怕, trải nghiệm gian khó còn trở thành 财富. 富裕 ôn bài 20, 空虚 ôn bài 9.',
     words:['贫困','艰难','财富','贫乏']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân buồn bã vì lại thi trượt môn Toán.',
     a:{sp:'Bạn',zh:'我数学又没考及格，看来我根本学不好这门课。',vn:'Tớ lại trượt môn Toán rồi, xem ra tớ chẳng thể nào học nổi môn này.'},
     need:['Dùng 泄气','Động viên bạn và đề nghị giúp đỡ'],
     sample:'一次没考好不要泄气，失败的经历也是一种财富。咱们一起找找原因，下次一定能考好！',
     samplePy:'Yí cì méi kǎohǎo bú yào xièqì, shībài de jīnglì yě shì yì zhǒng cáifù. Zánmen yìqǐ zhǎozhao yuányīn, xià cì yídìng néng kǎohǎo!',
     sampleVn:'Một lần thi không tốt thì đừng nản, trải nghiệm thất bại cũng là một loại tài sản. Chúng mình cùng tìm nguyên nhân, lần sau nhất định sẽ thi tốt!',
     tip:'不要 / 别 + 泄气 (đừng nản); có thể dùng lại ý bài khoá: 失败 / 贫困的经历也是财富.'},

    {scene:'Trong buổi liên hoan lớp, một bạn nhờ em đàn một bài guitar — nhưng em hoàn toàn không biết nhạc.',
     a:{sp:'Bạn',zh:'听说你会弹吉他？给我们弹一首吧！',vn:'Nghe nói cậu biết chơi guitar? Đàn cho bọn mình một bài đi!'},
     need:['Dùng 别说……了，连……都……','Từ chối khéo léo'],
     sample:'我哪儿会呀！别说弹吉他了，我连五线谱都看不懂。你们还是找别人吧，我给大家唱首歌好了。',
     samplePy:'Wǒ nǎr huì ya! Biéshuō tán jítā le, wǒ lián wǔxiànpǔ dōu kàn bu dǒng. Nǐmen háishi zhǎo biérén ba, wǒ gěi dàjiā chàng shǒu gē hǎo le.',
     sampleVn:'Tớ đâu có biết! Nói gì đến đàn guitar, đến khuông nhạc tớ còn chẳng đọc được. Các cậu tìm người khác đi, tớ hát tặng mọi người một bài vậy.',
     tip:'别说 A 了 (việc khó hơn), 连 B 都…… (việc dễ hơn mà cũng không làm được) — Chú thích 1. 哪儿会呀 = đâu có biết (từ chối nhẹ nhàng).'},

    {scene:'Đã mười giờ tối, bố hỏi vì sao em làm bài tập mãi chưa xong.',
     a:{sp:'Bố',zh:'都十点了，作业怎么还没写完？',vn:'Mười giờ rồi, sao bài tập vẫn chưa làm xong?'},
     need:['Dùng một dạng AABB (拖拖拉拉 / 断断续续…)','Nhận lỗi và hứa sửa'],
     sample:'对不起，爸爸，我今天写作业有点儿拖拖拉拉的，老是看手机。以后我一定先写完作业再玩。',
     samplePy:'Duìbuqǐ, bàba, wǒ jīntiān xiě zuòyè yǒudiǎnr tuōtuōlālā de, lǎoshì kàn shǒujī. Yǐhòu wǒ yídìng xiān xiěwán zuòyè zài wán.',
     sampleVn:'Con xin lỗi bố, hôm nay con làm bài hơi lề mề, cứ xem điện thoại mãi. Sau này con nhất định làm xong bài tập rồi mới chơi.',
     tip:'AABB + 的 làm vị ngữ (拖拖拉拉的) — Chú thích 2; 先……再…… = … trước rồi mới ….'},

    {scene:'Thầy chủ nhiệm hỏi em đọc truyện 《奇异的灯光》 xong rút ra được điều gì.',
     a:{sp:'Thầy chủ nhiệm',zh:'读了《奇异的灯光》，你有什么收获？',vn:'Đọc xong "Ánh sáng kỳ lạ", em thu hoạch được gì?'},
     need:['Dùng ……并不可怕，可怕的是……','Dùng 贫困 hoặc 天赋'],
     sample:'我觉得生活贫困并不可怕，可怕的是精神贫困。那个读书人没有过人的天赋，却靠努力成了知名学者，我也要像他一样坚持下去。',
     samplePy:'Wǒ juéde shēnghuó pínkùn bìng bù kěpà, kěpà de shì jīngshén pínkùn. Nàge dúshūrén méiyǒu guòrén de tiānfù, què kào nǔlì chéngle zhīmíng xuézhě, wǒ yě yào xiàng tā yíyàng jiānchí xiàqu.',
     sampleVn:'Em thấy cuộc sống nghèo khó không đáng sợ, đáng sợ là nghèo nàn về tinh thần. Người đọc sách ấy không có năng khiếu hơn người, nhưng nhờ nỗ lực mà trở thành học giả nổi tiếng, em cũng muốn kiên trì giống như anh ấy.',
     tip:'……并不可怕，可怕的是…… (khung đối lập); 却 đứng sau chủ ngữ để chuyển ý; 像……一样 = giống như ….'},

    {scene:'Bạn cùng phòng đang rất tức vì bị người khác nói xấu sau lưng, định đi tìm người đó cãi nhau ngay.',
     a:{sp:'Bạn cùng phòng',zh:'他凭什么在背后说我坏话？我现在就去找他算账！',vn:'Hắn dựa vào đâu mà nói xấu tớ sau lưng? Tớ đi tìm hắn tính sổ ngay bây giờ!'},
     need:['Dùng 克制','Khuyên bạn bình tĩnh'],
     sample:'你先克制一下自己的情绪，冲动解决不了问题。等冷静下来，再好好跟他谈谈吧。',
     samplePy:'Nǐ xiān kèzhì yíxià zìjǐ de qíngxù, chōngdòng jiějué bu liǎo wèntí. Děng lěngjìng xiàlái, zài hǎohāo gēn tā tántan ba.',
     sampleVn:'Cậu kìm lại cảm xúc một chút đã, bốc đồng không giải quyết được vấn đề đâu. Đợi bình tĩnh lại rồi hãy nói chuyện tử tế với cậu ta.',
     tip:'克制 + 自己的情绪; 冲动 ôn HSK 6 bài 14; 等……再…… = đợi … rồi hãy ….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết bài cảm nhận (读后感) về truyện 《奇异的灯光》 nộp cho thầy giáo.',
     a:'读书人家境贫困，却以萤火虫为灯，勤学不辍，最终成为知名学者，令人深受启发。',b:'那个人家里穷得要命，就抓了点儿萤火虫当灯用，后来还真成了大学者，挺牛的。',better:'a',
     why:'Bài viết nộp thầy cần văn viết: 以……为……, 勤学不辍, 最终, 令人深受启发. Câu b (穷得要命, 挺牛的) là khẩu ngữ suồng sã.'},

    {scene:'Em nhắn tin cho bạn thân: nhà em đang mất điện.',
     a:'因电力故障，本户照明中断，现以蜡烛代替。',b:'我家停电了！黑乎乎的，只能点蜡烛，无聊死了。',better:'b',
     why:'Nhắn tin bạn thân dùng khẩu ngữ tự nhiên (黑乎乎的, 无聊死了). Câu a (因电力故障, 本户, 现以……代替) nghe như thông báo của công ty điện lực.'},

    {scene:'Hiệu trưởng phát biểu trong lễ trao học bổng cho học sinh có hoàn cảnh khó khăn.',
     a:'贫困并不可怕，希望同学们把艰难的经历化为奋斗的动力，努力成才。',b:'家里穷没啥，你们好好学就行了，别想那么多。',better:'a',
     why:'Phát biểu trang trọng cần câu văn chỉnh chu, giàu ý nghĩa: 化为奋斗的动力, 努力成才. Câu b (没啥, 别想那么多) quá tùy tiện, lại dễ khiến học sinh tự ái.'},

    {scene:'Em trai đang khóc vì bị điểm kém, em (chị / anh) an ủi.',
     a:'好啦好啦，别哭了，一次没考好有什么大不了的，下次我帮你复习。',b:'一次考试失利不足以说明问题，望你克制情绪，总结经验。',better:'a',
     why:'An ủi em nhỏ cần giọng thân mật, dịu dàng (好啦好啦, 有什么大不了的 — 大不了 ôn bài 6). Câu b (失利, 不足以, 望你) giống lời nhận xét trên giấy.'},

    {scene:'Phát thanh viên đọc bản tin thời sự về một vụ cháy rừng.',
     a:'火太大了，一下子就烧开了，好多树都没了。',b:'山火迅速蔓延，过火面积已超过一百公顷，消防部门正全力扑救。',better:'b',
     why:'Bản tin cần ngôn ngữ báo chí chính xác: 迅速蔓延, 过火面积, 全力扑救. Câu a là lời kể miệng, thiếu thông tin cụ thể.'},

    {scene:'Em khen món ăn mẹ vừa nấu trong bữa cơm tối.',
     a:'哇，妈，今天的菜太香了！',b:'此菜色香味俱全，令人赞叹不已。',better:'a',
     why:'Nói với mẹ trong bữa cơm cần tự nhiên, thân mật (哇……太香了). Câu b (此菜, 令人赞叹不已) như lời bình của nhà phê bình ẩm thực, nghe rất xa cách.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn từng dòng (câu hỏi + gợi ý), bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'让读书人幸福的事情', cue:'①……使他着迷 ②只要有……陪伴，就……', words:['捧','天文','儒家','传记','散文','历代','着迷','熏陶','胸怀','挨','美满','天堂']},
    {step:'让读书人发愁的事情', cue:'家境贫困，灯油', words:['不堪','炎热','骚扰','贫乏','艰难','蜡烛']},
    {step:'读书人为了克服困难采取的办法', cue:'①克制、背诵、编织 ②漫步田野，发现萤火虫 ③制成萤火虫“灯笼”', words:['蚂蚁','颈椎','揉','挪','屁股','知觉','熄灭','泄气','眯','绝望','凝固','蔓延','克制','默默','背诵','编织','强制','田野','情形','耀眼','光芒','捞','摊','哇','毫米','迸发','兜','灯笼','啦']},
    {step:'读书人最后的成就', cue:'知名学者', words:['天赋']},
    {step:'这个故事给我们的启示', cue:'……并不可怕，可怕的是……', words:['贫困','财富','源泉']}
  ],
  checklist: [
    'Có mở đầu giới thiệu nhân vật "爱书如命的读书人" và những thứ khiến anh say mê (……都会使他着迷) không?',
    'Có nói rõ khó khăn (家境贫困 / 贫乏) bằng câu 别说蜡烛了，就是灯油也要节省着用 không?',
    'Phần "cách vượt khó" đã kể đủ ba bước: 克制、背诵、编织 → 漫步田野，发现萤火虫 → 制成“灯笼” chưa?',
    'Có dùng được các từ 熄灭, 泄气, 迸发, 来来回回, 耀眼, 光芒, 天赋 không?',
    'Có kết lại bằng bài học ……并不可怕，可怕的是…… và kể bằng LỜI MÌNH (câu ngắn, rõ ý) không?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 66–70) — đáp án theo đáp án sách
// Gồm cả 篇章修辞 (修辞（3）比喻 · 练一练) của quyển 下
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“别说”完成句子（注释1 · 练一练）', vn:'Dùng 别说 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'那个动画片那么好看，连大人都爱看，＿＿。', tu:'别说', dap:'那个动画片那么好看，连大人都爱看，别说小孩子了。',
      giai:'连 B 都……，别说 A 了: người lớn còn mê (điều ít ai ngờ) → trẻ con thì khỏi phải nói.'},
     {s:'那么破的自行车，＿＿，白给也未必有人要。', tu:'别说', dap:'那么破的自行车，别说卖出去，白给也未必有人要。',
      giai:'别说 A，B 也……: bán được (khó hơn) thì khỏi nói, cho không (dễ hơn) cũng chưa chắc có người lấy. 未必 = chưa chắc.'},
     {s:'＿＿，就是在，他也不会见你。', tu:'别说', dap:'别说他不在，就是在，他也不会见你。',
      giai:'别说 A，就是 B 也……: anh ấy vắng nhà thì dĩ nhiên không gặp được; dù có ở nhà anh ấy cũng không gặp.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空（注释2 · 练一练）', vn:'Chọn từ thích hợp điền vào chỗ trống (Chú thích 2 · Luyện tập) — đáp án theo sách', tu:['说说笑笑','拖拖拉拉','吵吵嚷嚷','打打闹闹'],
   cau:[
     {s:'他这个人办事就是＿＿的，让人着急。', dap:['拖拖拉拉']},
     {s:'在饭馆，吃完饭＿＿争着付钱的准是中国人。', dap:['吵吵嚷嚷']},
     {s:'那时我们住一个宿舍，大伙天天＿＿、＿＿地，快活极了。', dap:['说说笑笑','打打闹闹']}
   ]},

  {kieu:'ab', de:'下列哪句没有使用比喻修辞手法（篇章修辞 · 修辞（3）比喻 · 练一练）', vn:'Tu từ văn bản · Tu từ (3) So sánh ví von (比喻) · Luyện tập: câu nào dưới đây KHÔNG dùng biện pháp tu từ so sánh ví von? (Sách giải không in đáp án phần này — đáp án theo nội dung.)',
   cau:[
     {s:'下列哪句没有使用比喻修辞手法？', opts:['母亲是大地，我就是小草；母亲是绿叶，我就是鲜花。','春天春天暖洋洋，果树开花满山岗，东坡桃花西坡李，杏花谢了梨花香。','我有一位不开口说话的老师，她就是字典。'], ans:1,
      giai:'Câu (2) chỉ tả thực cảnh mùa xuân (nắng ấm, cây ăn quả nở hoa khắp đồi, đào mận, hoa hạnh tàn thì hoa lê thơm) — không lấy sự vật này để ví sự vật khác → KHÔNG có 比喻. Câu (1) ví mẹ là 大地 / 绿叶, con là 小草 / 鲜花; câu (3) ví 字典 là "người thầy không biết nói" — đều là ẩn dụ dạng A 是 B. Lưu ý: tệp đáp án sách không có đáp án cho phần 练一练 này (đáp án ghi dưới mục 篇章修辞 thực chất là đáp án 练习1–4).'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'克制', chu:'制', ds:['控制','强制','限制','节制']},
   cau:[
     {tu:'炎热', chu:'热', dap:['热闹','热情','热心','热爱'], them:['酷热','闷热','热浪','热带','燥热','热天'],
      giai:'热 trong 炎热 = nóng (nhiệt độ cao): 酷热, 闷热 và 热浪 (đều có trong bài khoá), 热带 = vùng nhiệt đới. Đáp án sách mở rộng sang nghĩa bóng của 热 = sôi nổi, nhiệt tình (热闹, 热情, 热心, 热爱).'},
     {tu:'贫乏', chu:'乏', dap:['乏味','乏累','疲乏','不乏其人'], them:['缺乏','匮乏','不乏','空乏','乏善可陈'],
      giai:'乏 = thiếu (缺乏, 匮乏 = thiếu thốn; 不乏 = không thiếu; 乏味 = nhạt nhẽo, thiếu hương vị; 不乏其人 = không thiếu người như thế). Đáp án sách còn có 乏累, 疲乏 — ở đó 乏 = mệt (thiếu sức).'},
     {tu:'艰难', chu:'难', dap:['困难','难题','难关','难能可贵'], them:['难度','难处','为难','难点','疑难','难以'],
      giai:'难 = khó (困难; 难题 = bài toán khó; 难关 = cửa ải khó khăn; 难能可贵 = việc khó làm được nên càng đáng quý).'},
     {tu:'贫困', chu:'贫', dap:['贫寒','清贫','贫瘠','贫民'], them:['贫穷','贫苦','扶贫','脱贫','贫富','贫乏'],
      giai:'Trong sách chữ 贫 (chữ đầu) của 贫困 được đánh dấu. 贫 = nghèo (贫寒 = nghèo túng, 清贫 = nghèo mà thanh bạch, 贫民 = dân nghèo, 扶贫 = giúp người nghèo); 贫瘠 = (đất) cằn cỗi — 贫 = thiếu chất.'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'＿＿，搬到别的城市居住了。', tu:'不堪', dap:'他们不堪北京房价过高的困扰，搬到别的城市居住了。',
      giai:'不堪 + N + 的困扰 = không chịu nổi nỗi khổ vì …; vế sau nêu kết quả (chuyển sang thành phố khác sống).'},
     {s:'＿＿，才能体会到现在的幸福。', tu:'艰难', dap:'体验过以前艰难的日子，才能体会到现在的幸福。',
      giai:'艰难的日子 = những ngày gian khổ; vế trước là điều kiện, vế sau 才能 = mới có thể.'},
     {s:'他连蛇都不怕，＿＿。', tu:'别说', dap:'他连蛇都不怕，别说这种小虫子了。',
      giai:'连 B 都……，别说 A 了 (Chú thích 1): rắn còn không sợ thì côn trùng nhỏ khỏi phải nói.'},
     {s:'失败了没关系，＿＿。', tu:'泄气', dap:'失败了没关系，不要泄气。',
      giai:'不要 / 别 + 泄气 = đừng nản chí (lời khuyên).'},
     {s:'为了不影响工作，他努力＿＿。', tu:'克制', dap:'为了不影响工作，他努力克制自己的情绪。',
      giai:'努力克制 + 自己的情绪 = cố kiềm chế cảm xúc của mình.'},
     {s:'他总是＿＿，让我很感动。', tu:'默默', dap:'他总是默默为我付出，让我很感动。',
      giai:'默默 + (为 + ai) + V = âm thầm làm gì cho ai; 付出 = hy sinh, cống hiến.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 1)', tu:['历代','捧','绝望','传记','财富'],
   cau:[
     {s:'我爱读书，尤其是名人＿＿，每当我＿＿起书，就仿佛走进了＿＿人的生活。他们的人生经历告诉我在＿＿中也不要放弃，这成为我生命中一笔宝贵的精神＿＿。',
      dap:['传记','捧','历代','绝望','财富']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 2)', tu:['田野','蔓延','光芒','熄灭','知觉'],
   cau:[
     {s:'夏夜，漫步在＿＿中，远处村子的灯光都＿＿了，只剩下星星那微弱的＿＿。此刻，调动全身的＿＿去感受吧，凉风吹来，丝丝凉意在身体中＿＿开来，还有阵阵花香袭来，多么美好的夏夜啊！',
      dap:['田野','熄灭','光芒','知觉','蔓延']}
   ]},

  {kieu:'mp', de:'请说一说下列句子中比喻的用法', vn:'Hãy nói cách dùng phép so sánh ví von (比喻) trong các câu sau: dùng cái gì (用……) để ví cái gì (比喻……) — đáp án theo sách (sách ghi dạng 把 A 比作 B = 用 B 比喻 A)',
   cau:[
     {mau:'这是一种【像小钟儿似的】紫色的花，密密麻麻生长着。', khung:'用＿＿比喻＿＿。', dap:['小钟','花'],
      giai:'Đáp án sách: 把花比作小钟 (= 用小钟比喻花). Dấu hiệu so sánh: 像……似的 — bông hoa tím có hình dáng như chiếc chuông nhỏ.'},
     {mau:'树叶枯黄了，纷纷落下，【犹如一只只蝴蝶在翩翩起舞】。', khung:'用＿＿比喻＿＿。', dap:['蝴蝶','树叶'],
      giai:'Đáp án sách: 把树叶比作蝴蝶. Lá vàng rơi lả tả như từng con bướm đang múa lượn; từ so sánh 犹如 (= 好像, văn viết; ôn bài 13).'},
     {mau:'【童年是一幅画】，色彩绚丽，烂漫天真。', khung:'用＿＿比喻＿＿。', dap:['画','童年'],
      giai:'Đáp án sách: 把童年比作画. Ẩn dụ dạng A 是 B (không có từ so sánh): tuổi thơ rực rỡ sắc màu như một bức tranh.'},
     {mau:'老师，【您是茂盛的枝叶】，您用强有力的身躯呵护着我们这些花骨朵。', khung:'用＿＿比喻＿＿。', dap:['枝叶','老师'],
      giai:'Đáp án sách: 把老师比作枝叶 (học trò được ví là 花骨朵 = nụ hoa). Thầy cô che chở học trò như cành lá sum suê che chở nụ hoa.'}
   ]},

  {kieu:'kho', de:'看图片，熟悉下列名词（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (1): xem tranh, làm quen với các danh từ. Sách chỉ cho từ + câu ví dụ để làm quen — ở đây chuyển thành bài điền: điền danh từ vào câu ví dụ của sách', tu:['容器','橙','首饰','传单','生肖','棕色','粉色','磁带'],
   cau:[
     {s:'不管使用什么样的＿＿，只要能盛水就行。', dap:['容器']},
     {s:'我喜欢吃＿＿子，也喜欢＿＿色。', dap:['橙','橙']},
     {s:'各式各样的＿＿吸引了我们的目光。', dap:['首饰']},
     {s:'墙上贴满了各种海报，也有人在路上发＿＿。', dap:['传单']},
     {s:'在中国，＿＿是用来记录人们出生年份的十二种动物。', dap:['生肖']},
     {s:'草地上有一只＿＿的小狗。', dap:['棕色']},
     {s:'＿＿的花儿开遍田野。', dap:['粉色']},
     {s:'现在已经很少有人再用老式录音机和＿＿了。', dap:['磁带']}
   ]},

  {kieu:'kho', de:'阅读短文，熟悉下列文学方面的词语（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (2): đọc đoạn văn, làm quen với các từ về văn học (các từ gạch chân trong sách). Ở đây chuyển thành bài điền: điền từ vào đúng chỗ trong đoạn văn của sách', tu:['文艺','体裁','剧本','武侠','情节'],
   cau:[
     {s:'他是一名＿＿爱好者，尝试过各种不同＿＿的写作：小说、诗歌、散文、＿＿等。最近他写了一部＿＿小说，＿＿曲折，引人入胜。小说发表后受到了广泛好评。',
      dap:['文艺','体裁','剧本','武侠','情节']}
   ]}
];
