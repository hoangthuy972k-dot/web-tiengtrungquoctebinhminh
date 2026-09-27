// ══════════════════════════════════════════
// DATA — HSK6 Bài 19: 无阳光的深海世界 (Thế giới biển sâu không ánh mặt trời)
// 第五单元 美丽家园 · Nguồn: HSK标准教程6上 (tr. 197–206) + đáp án sách
// Bài khoá: 无阳光的深海世界 (892字) · 46 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'俗话',py:'súhuà',pos:'Danh từ',vn:'tục ngữ, câu nói dân gian',hv:'tục thoại',em:'🗣️',lesson:1,
   explain:['Câu nói dân gian lưu truyền rộng rãi, ngắn gọn, dễ hiểu, thường đúc kết kinh nghiệm sống.','Hay dùng để mở đầu, dẫn lời: 俗话说…… (tục ngữ có câu …). Gần nghĩa 俗语, 谚语 (谚语 trang trọng hơn).'],
   usage:'俗话说：“……”; 有句俗话 / 一句俗话; 正如俗话所说……. Dùng để dẫn chứng, mở bài nghị luận.',
   collo:['俗话说','一句俗话','正如俗话所说','老俗话'],
   ex_zh:'俗话说万物生长靠太阳。',ex_py:'Súhuà shuō wànwù shēngzhǎng kào tàiyáng.',ex_vn:'Tục ngữ có câu: vạn vật sinh trưởng nhờ mặt trời.',
   exList:[
     {zh:'俗话说万物生长靠太阳，没有阳光，就没有万物。',py:'Súhuà shuō wànwù shēngzhǎng kào tàiyáng, méiyǒu yángguāng, jiù méiyǒu wànwù.',vn:'Tục ngữ có câu: vạn vật sinh trưởng nhờ mặt trời; không có ánh mặt trời thì không có vạn vật.'},
     {zh:'俗话说：“独木不成林”，一个人的力量毕竟是有限的。',py:'Súhuà shuō: "Dú mù bù chéng lín", yí ge rén de lìliang bìjìng shì yǒuxiàn de.',vn:'Tục ngữ có câu "một cây làm chẳng nên non", sức một người suy cho cùng cũng có hạn.'},
     {zh:'俗话说“活到老，学到老”，爷爷七十岁了还在学用智能手机。',py:'Súhuà shuō "huó dào lǎo, xué dào lǎo", yéye qīshí suì le hái zài xué yòng zhìnéng shǒujī.',vn:'Tục ngữ có câu "sống đến già, học đến già", ông tôi bảy mươi tuổi rồi vẫn đang học dùng điện thoại thông minh.'}
   ],
   colloFull:[
     {zh:'俗话说',py:'súhuà shuō',vn:'tục ngữ có câu'},
     {zh:'一句俗话',py:'yí jù súhuà',vn:'một câu tục ngữ'},
     {zh:'正如俗话所说',py:'zhèngrú súhuà suǒ shuō',vn:'đúng như tục ngữ nói'},
     {zh:'老俗话',py:'lǎo súhuà',vn:'câu tục ngữ xưa'},
     {zh:'俗话讲',py:'súhuà jiǎng',vn:'tục ngữ nói'}
   ],
   patterns:[
     {s:'俗话说：“……”，……',m:'Tục ngữ có câu "…" (dẫn chứng rồi bàn tiếp)'},
     {s:'正如俗话所说，……',m:'Đúng như tục ngữ nói, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tục ngữ có câu "một cây làm chẳng nên non", vì thế chúng ta phải biết hợp tác với người khác.',answer:'俗话说“独木不成林”，因此我们要学会与别人合作。',answerPy:'Súhuà shuō "dú mù bù chéng lín", yīncǐ wǒmen yào xuéhuì yǔ biérén hézuò.',
      note:'因此: vì thế (nêu kết quả, văn viết hơn 所以); 与……合作 = hợp tác với ….',pair:'……，因此……'},
     {promptLang:'vi',prompt:'Người ta sở dĩ nói như vậy là vì câu tục ngữ này đúc kết kinh nghiệm của bao thế hệ.',answer:'人们之所以这样说，是因为这句俗话总结了几代人的经验。',answerPy:'Rénmen zhīsuǒyǐ zhèyàng shuō, shì yīnwèi zhè jù súhuà zǒngjiéle jǐ dài rén de jīngyàn.',
      note:'之所以……是因为……: sở dĩ … là vì … (nêu kết quả trước, nguyên nhân sau) — đúng cấu trúc câu đầu bài khoá.',pair:'之所以……是因为……'}
   ]},

  {n:2,zh:'历来',py:'lìlái',pos:'Phó từ',vn:'xưa nay, từ trước đến nay',hv:'lịch lai',em:'📜',lesson:1,
   explain:['Từ trước đến nay luôn như vậy (nhấn tính nhất quán lâu dài) — văn viết.','Chủ yếu dùng trong câu KHẲNG ĐỊNH, bổ nghĩa được trực tiếp cho động từ / tính từ hai âm tiết: 历来重视, 历来忠厚. Phân biệt với 从来 (hay dùng trong câu phủ định) — xem phần 词语辨析.'],
   usage:'历来 + 重视 / 提倡 / 主张 / 反对; ……历来如此; 历来 + 是 + N. Câu phủ định "xưa nay không …" thường dùng 从来不 / 从来没.',
   collo:['历来重视','历来提倡','历来如此','历来主张'],
   ex_zh:'历来植物生长离不开阳光。',ex_py:'Lìlái zhíwù shēngzhǎng lí bu kāi yángguāng.',ex_vn:'Xưa nay thực vật sinh trưởng không thể thiếu ánh mặt trời.',
   exList:[
     {zh:'人们之所以这样说，是因为历来植物生长离不开阳光。',py:'Rénmen zhīsuǒyǐ zhèyàng shuō, shì yīnwèi lìlái zhíwù shēngzhǎng lí bu kāi yángguāng.',vn:'Người ta sở dĩ nói vậy là vì xưa nay thực vật sinh trưởng không thể thiếu ánh mặt trời.'},
     {zh:'这所学校历来重视学生的综合素质，而并非只看考试成绩。',py:'Zhè suǒ xuéxiào lìlái zhòngshì xuésheng de zōnghé sùzhì, ér bìngfēi zhǐ kàn kǎoshì chéngjì.',vn:'Ngôi trường này xưa nay coi trọng tố chất toàn diện của học sinh, chứ không phải chỉ nhìn điểm thi.'},
     {zh:'我们家历来提倡节约，爷爷从来没有浪费过一粒米。',py:'Wǒmen jiā lìlái tíchàng jiéyuē, yéye cónglái méiyǒu làngfèiguo yí lì mǐ.',vn:'Nhà tôi xưa nay đề cao tiết kiệm, ông tôi chưa bao giờ lãng phí một hạt gạo.'}
   ],
   colloFull:[
     {zh:'历来重视',py:'lìlái zhòngshì',vn:'xưa nay coi trọng'},
     {zh:'历来提倡',py:'lìlái tíchàng',vn:'xưa nay đề cao'},
     {zh:'历来如此',py:'lìlái rúcǐ',vn:'xưa nay vẫn thế'},
     {zh:'历来主张',py:'lìlái zhǔzhāng',vn:'xưa nay chủ trương'},
     {zh:'历来的传统',py:'lìlái de chuántǒng',vn:'truyền thống từ xưa đến nay'}
   ],
   patterns:[
     {s:'历来 + 重视 / 提倡 / 主张 + N',m:'Xưa nay vẫn coi trọng / đề cao / chủ trương …'},
     {s:'……历来如此',m:'… xưa nay vẫn vậy'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trường chúng tôi xưa nay coi trọng giáo dục tố chất, không những quan tâm thành tích mà còn quan tâm sức khoẻ của học sinh.',answer:'我们学校历来重视素质教育，不仅关注成绩，而且关注学生的健康。',answerPy:'Wǒmen xuéxiào lìlái zhòngshì sùzhì jiàoyù, bùjǐn guānzhù chéngjì, érqiě guānzhù xuésheng de jiànkāng.',
      note:'不仅……而且……: không những … mà còn …; 素质 ôn bài 16.',pair:'不仅……而且……'},
     {promptLang:'vi',prompt:'Chuyện này xưa nay vẫn thế, cậu có phàn nàn thêm nữa cũng vô ích.',answer:'这件事历来如此，你再抱怨也没用。',answerPy:'Zhè jiàn shì lìlái rúcǐ, nǐ zài bàoyuàn yě méiyòng.',
      note:'再……也……: dù có … thêm nữa thì cũng ….',pair:'再……也……'}
   ]},

  {n:3,zh:'维持',py:'wéichí',pos:'Động từ',vn:'duy trì, giữ, giữ lại',hv:'duy trì',em:'⚖️',lesson:1,
   explain:['Giữ cho một trạng thái tiếp tục tồn tại, không thay đổi, không gián đoạn.','Tân ngữ thường là: 生命, 生活, 秩序, 现状, 关系, 平衡. Có khi mang sắc thái "chỉ giữ được ở mức tối thiểu": 勉强维持.'],
   usage:'维持 + 生命 / 生活 / 秩序 / 现状 / 平衡; 靠……维持生命; 勉强维持; 维持不下去.',
   collo:['维持生命','维持秩序','维持现状','勉强维持'],
   ex_zh:'动物又靠植物维持生命。',ex_py:'Dòngwù yòu kào zhíwù wéichí shēngmìng.',ex_vn:'Động vật lại dựa vào thực vật để duy trì sự sống.',
   exList:[
     {zh:'一些小动物靠过滤细菌维持生命。',py:'Yìxiē xiǎo dòngwù kào guòlǜ xìjūn wéichí shēngmìng.',vn:'Một số động vật nhỏ duy trì sự sống nhờ lọc vi khuẩn.'},
     {zh:'比赛开始前，几名保安在门口维持秩序。',py:'Bǐsài kāishǐ qián, jǐ míng bǎo\'ān zài ménkǒu wéichí zhìxù.',vn:'Trước khi trận đấu bắt đầu, mấy nhân viên bảo vệ giữ trật tự ở cổng.'},
     {zh:'那几年家里很困难，全靠妈妈一个人打工勉强维持生活。',py:'Nà jǐ nián jiāli hěn kùnnan, quán kào māma yí ge rén dǎgōng miǎnqiǎng wéichí shēnghuó.',vn:'Mấy năm đó nhà rất khó khăn, hoàn toàn nhờ một mình mẹ đi làm thuê gắng gượng duy trì cuộc sống.'}
   ],
   colloFull:[
     {zh:'维持生命',py:'wéichí shēngmìng',vn:'duy trì sự sống'},
     {zh:'维持秩序',py:'wéichí zhìxù',vn:'giữ trật tự'},
     {zh:'维持现状',py:'wéichí xiànzhuàng',vn:'giữ nguyên hiện trạng'},
     {zh:'勉强维持',py:'miǎnqiǎng wéichí',vn:'gắng gượng duy trì'},
     {zh:'维持平衡',py:'wéichí pínghéng',vn:'giữ thăng bằng, giữ cân bằng'}
   ],
   patterns:[
     {s:'靠 + N + 维持 + 生命 / 生活',m:'Dựa vào … để duy trì sự sống / cuộc sống'},
     {s:'维持 + 秩序 / 现状 / 平衡',m:'Giữ trật tự / hiện trạng / thăng bằng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không thay đổi phương pháp mà chỉ giữ nguyên hiện trạng thì thành tích của cậu khó mà nâng cao được.',answer:'如果不改变方法，只是维持现状，你的成绩就难以提高。',answerPy:'Rúguǒ bù gǎibiàn fāngfǎ, zhǐshì wéichí xiànzhuàng, nǐ de chéngjì jiù nányǐ tígāo.',
      note:'如果……就……: nếu … thì …; 难以 + V ôn bài 14; 现状 ôn bài 16.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Cho dù cửa hàng làm ăn không tốt, anh ấy vẫn cố duy trì, vì đây là tâm huyết của cha anh.',answer:'即便商店生意不好，他也努力维持着，因为这是父亲的心血。',answerPy:'Jíbiàn shāngdiàn shēngyi bù hǎo, tā yě nǔlì wéichízhe, yīnwèi zhè shì fùqin de xīnxuè.',
      note:'即便……也……: cho dù … cũng … (ôn bài 10).',pair:'即便……也……'}
   ]},

  {n:4,zh:'众所周知',py:'zhòngsuǒ-zhōuzhī',pos:'Thành ngữ',vn:'mọi người đều biết, ai cũng biết',hv:'chúng sở chu tri',em:'📢',lesson:1,
   explain:['Điều mà mọi người đều biết rõ (众 = mọi người, 所 = cái mà, 周知 = biết khắp).','Thường đứng đầu câu làm thành phần chen: 众所周知，……; hoặc làm định ngữ: 众所周知的事实 / 真理. Văn viết.'],
   usage:'众所周知，……; ……是众所周知的 + 事实 / 真理; ……，这是众所周知的.',
   collo:['众所周知','众所周知的事实','众所周知的真理','众所周知的原因'],
   ex_zh:'没有阳光，就没有万物，这是众所周知的真理。',ex_py:'Méiyǒu yángguāng, jiù méiyǒu wànwù, zhè shì zhòngsuǒ-zhōuzhī de zhēnlǐ.',ex_vn:'Không có ánh mặt trời thì không có vạn vật, đây là chân lý ai cũng biết.',
   exList:[
     {zh:'所以没有阳光，就没有万物，这是众所周知的真理。',py:'Suǒyǐ méiyǒu yángguāng, jiù méiyǒu wànwù, zhè shì zhòngsuǒ-zhōuzhī de zhēnlǐ.',vn:'Cho nên không có ánh mặt trời thì không có vạn vật, đây là chân lý ai cũng biết.'},
     {zh:'众所周知，吸烟有害健康，可他偏偏戒不了。',py:'Zhòngsuǒ-zhōuzhī, xīyān yǒuhài jiànkāng, kě tā piānpiān jiè bu liǎo.',vn:'Ai cũng biết hút thuốc có hại cho sức khoẻ, vậy mà anh ta cứ không bỏ được.'},
     {zh:'由于众所周知的原因，这次比赛不得不推迟举行。',py:'Yóuyú zhòngsuǒ-zhōuzhī de yuányīn, zhè cì bǐsài bùdébù tuīchí jǔxíng.',vn:'Vì những lý do mà ai cũng biết, trận đấu lần này buộc phải hoãn lại.'}
   ],
   colloFull:[
     {zh:'众所周知',py:'zhòngsuǒ-zhōuzhī',vn:'như mọi người đều biết'},
     {zh:'众所周知的事实',py:'zhòngsuǒ-zhōuzhī de shìshí',vn:'sự thật ai cũng biết'},
     {zh:'众所周知的真理',py:'zhòngsuǒ-zhōuzhī de zhēnlǐ',vn:'chân lý ai cũng biết'},
     {zh:'众所周知的原因',py:'zhòngsuǒ-zhōuzhī de yuányīn',vn:'lý do ai cũng biết'},
     {zh:'早已众所周知',py:'zǎoyǐ zhòngsuǒ-zhōuzhī',vn:'từ lâu ai cũng biết'}
   ],
   patterns:[
     {s:'众所周知，……',m:'Như mọi người đều biết, …'},
     {s:'……，这是众所周知的 + 事实 / 真理',m:'…, đây là sự thật / chân lý ai cũng biết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Như mọi người đều biết, Trung Quốc là một trong những nước đông dân nhất thế giới.',answer:'众所周知，中国是世界上人口最多的国家之一。',answerPy:'Zhòngsuǒ-zhōuzhī, Zhōngguó shì shìjiè shang rénkǒu zuì duō de guójiā zhī yī.',
      note:'……之一: một trong những …; 众所周知 đứng đầu câu, có dấu phẩy.',pair:'……之一'},
     {promptLang:'vi',prompt:'Ai cũng biết, thói quen tốt không phải một hai ngày là hình thành được.',answer:'众所周知，好习惯不是一两天就能养成的。',answerPy:'Zhòngsuǒ-zhōuzhī, hǎo xíguàn bú shì yì liǎng tiān jiù néng yǎngchéng de.',
      note:'不是……就能……的: câu 是……的 nhấn mạnh (phủ định); 养成习惯 = hình thành thói quen.',pair:'是……的'}
   ]},

  {n:5,zh:'真理',py:'zhēnlǐ',pos:'Danh từ',vn:'chân lý',hv:'chân lý',em:'💡',lesson:1,
   explain:['Nhận thức đúng đắn, phản ánh đúng quy luật khách quan của sự vật — "chân lý".','Hay đi với: 追求真理, 坚持真理, 普遍真理. Khác 道理 (lý lẽ, lẽ phải thông thường) và 真相 (sự thật của một sự việc cụ thể — từ 35).'],
   usage:'追求 / 坚持 / 探索 / 发现 + 真理; ……是（众所周知的）真理; 实践是检验真理的唯一标准.',
   collo:['追求真理','坚持真理','普遍真理','检验真理'],
   ex_zh:'这是众所周知的真理。',ex_py:'Zhè shì zhòngsuǒ-zhōuzhī de zhēnlǐ.',ex_vn:'Đây là chân lý ai cũng biết.',
   exList:[
     {zh:'这是众所周知的真理，可科学家们却对它提出了质疑。',py:'Zhè shì zhòngsuǒ-zhōuzhī de zhēnlǐ, kě kēxuéjiāmen què duì tā tíchūle zhìyí.',vn:'Đây là chân lý ai cũng biết, thế mà các nhà khoa học lại đặt nghi vấn về nó.'},
     {zh:'实践是检验真理的唯一标准。',py:'Shíjiàn shì jiǎnyàn zhēnlǐ de wéiyī biāozhǔn.',vn:'Thực tiễn là tiêu chuẩn duy nhất để kiểm nghiệm chân lý.'},
     {zh:'他一生追求真理，从来不向权威低头。',py:'Tā yìshēng zhuīqiú zhēnlǐ, cónglái bú xiàng quánwēi dītóu.',vn:'Cả đời ông theo đuổi chân lý, chưa bao giờ cúi đầu trước quyền uy.'}
   ],
   colloFull:[
     {zh:'追求真理',py:'zhuīqiú zhēnlǐ',vn:'theo đuổi chân lý'},
     {zh:'坚持真理',py:'jiānchí zhēnlǐ',vn:'kiên trì chân lý'},
     {zh:'普遍真理',py:'pǔbiàn zhēnlǐ',vn:'chân lý phổ biến'},
     {zh:'检验真理',py:'jiǎnyàn zhēnlǐ',vn:'kiểm nghiệm chân lý'},
     {zh:'探索真理',py:'tànsuǒ zhēnlǐ',vn:'tìm tòi chân lý'}
   ],
   patterns:[
     {s:'追求 / 坚持 / 探索 + 真理',m:'Theo đuổi / kiên trì / tìm tòi chân lý'},
     {s:'……是……的真理',m:'… là chân lý …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù gặp bao nhiêu khó khăn, nhà khoa học ấy vẫn kiên trì theo đuổi chân lý.',answer:'无论遇到多少困难，那位科学家都坚持追求真理。',answerPy:'Wúlùn yùdào duōshao kùnnan, nà wèi kēxuéjiā dōu jiānchí zhuīqiú zhēnlǐ.',
      note:'无论……都……: bất kể … đều ….',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Chân lý không phải do số đông quyết định, mà phải thông qua thực tiễn để kiểm nghiệm.',answer:'真理不是由多数人决定的，而是要通过实践来检验的。',answerPy:'Zhēnlǐ bú shì yóu duōshù rén juédìng de, ér shì yào tōngguò shíjiàn lái jiǎnyàn de.',
      note:'不是……而是……: không phải … mà là …; 由 + người + 决定 = do ai quyết định.',pair:'不是……而是……'}
   ]},

  {n:6,zh:'认定',py:'rèndìng',pos:'Động từ',vn:'nhận định, cho là, khẳng định',hv:'nhận định',em:'🎯',lesson:1,
   explain:['Xác định chắc chắn (sau khi nhận xét, phán đoán) rằng điều gì là như thế; tin chắc.','Cấu trúc: 认定 + mệnh đề; 把 / 将 A 认定为 B; A 被认定为 B (được công nhận là B). Sắc thái chắc chắn, dứt khoát hơn 认为.'],
   usage:'认定 + (mệnh đề); 把 / 将 A 认定为 B; A 被认定为 B; 一旦认定……就…….',
   collo:['早已认定','被认定为','认定目标','认定事实'],
   ex_zh:'科学家们的深海考察，却向人类早已认定为准则的定义提出了质疑。',ex_py:'Kēxuéjiāmen de shēnhǎi kǎochá, què xiàng rénlèi zǎoyǐ rèndìng wéi zhǔnzé de dìngyì tíchūle zhìyí.',ex_vn:'Cuộc khảo sát biển sâu của các nhà khoa học lại đặt nghi vấn với định nghĩa mà loài người từ lâu đã coi là chuẩn mực.',
   exList:[
     {zh:'然而科学家们的深海考察，却向人类早已认定为准则的定义提出了质疑。',py:'Rán\'ér kēxuéjiāmen de shēnhǎi kǎochá, què xiàng rénlèi zǎoyǐ rèndìng wéi zhǔnzé de dìngyì tíchūle zhìyí.',vn:'Thế nhưng cuộc khảo sát biển sâu của các nhà khoa học lại đặt nghi vấn với định nghĩa mà loài người từ lâu đã coi là chuẩn mực.'},
     {zh:'他一旦认定了目标，不管别人说什么，都会坚持下去。',py:'Tā yídàn rèndìngle mùbiāo, bùguǎn biérén shuō shénme, dōu huì jiānchí xiàqù.',vn:'Một khi anh ấy đã xác định mục tiêu thì bất kể người khác nói gì, anh ấy đều sẽ kiên trì đến cùng.'},
     {zh:'这座古城已被认定为世界文化遗产。',py:'Zhè zuò gǔchéng yǐ bèi rèndìng wéi shìjiè wénhuà yíchǎn.',vn:'Cổ thành này đã được công nhận là di sản văn hoá thế giới.'}
   ],
   colloFull:[
     {zh:'早已认定',py:'zǎoyǐ rèndìng',vn:'từ lâu đã khẳng định'},
     {zh:'被认定为',py:'bèi rèndìng wéi',vn:'được công nhận là'},
     {zh:'认定目标',py:'rèndìng mùbiāo',vn:'xác định mục tiêu'},
     {zh:'认定事实',py:'rèndìng shìshí',vn:'xác định sự thật'},
     {zh:'一口认定',py:'yìkǒu rèndìng',vn:'một mực cho rằng'}
   ],
   patterns:[
     {s:'把 / 将 A 认定为 B',m:'Xác định A là B'},
     {s:'一旦认定……，就……',m:'Một khi đã xác định …, thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi tìm được chứng cứ mới có thể khẳng định anh ta chính là người đã lấy chiếc điện thoại.',answer:'只有找到证据，才能认定他就是拿走手机的人。',answerPy:'Zhǐyǒu zhǎodào zhèngjù, cái néng rèndìng tā jiù shì názǒu shǒujī de rén.',
      note:'只有……才……: chỉ khi … mới … (điều kiện duy nhất).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Một khi đã xác định con đường mình muốn đi, cậu ấy tuyệt đối sẽ không bỏ dở giữa chừng.',answer:'一旦认定了自己要走的路，他就绝不会半途而废。',answerPy:'Yídàn rèndìngle zìjǐ yào zǒu de lù, tā jiù jué bú huì bàntú-érfèi.',
      note:'一旦……就……: một khi … thì …; 半途而废 = bỏ dở giữa chừng.',pair:'一旦……就……'}
   ]},

  {n:7,zh:'准则',py:'zhǔnzé',pos:'Danh từ',vn:'nguyên tắc, quy tắc, chuẩn mực',hv:'chuẩn tắc',em:'📏',lesson:1,
   explain:['Nguyên tắc, chuẩn mực để làm theo trong lời nói, hành động, hoặc làm căn cứ để phán đoán.','Hay gặp: 行为准则, 道德准则, 基本准则; 以……为准则. Văn viết, trang trọng hơn 规矩.'],
   usage:'行为 / 道德 / 基本 + 准则; 以 A 为准则; 遵守 / 违反 + 准则; 认定为准则.',
   collo:['行为准则','道德准则','基本准则','以……为准则'],
   ex_zh:'诚实守信是做人的基本准则。',ex_py:'Chéngshí shǒuxìn shì zuòrén de jīběn zhǔnzé.',ex_vn:'Trung thực, giữ chữ tín là nguyên tắc cơ bản của việc làm người.',
   exList:[
     {zh:'深海考察向人类早已认定为准则的定义提出了质疑。',py:'Shēnhǎi kǎochá xiàng rénlèi zǎoyǐ rèndìng wéi zhǔnzé de dìngyì tíchūle zhìyí.',vn:'Cuộc khảo sát biển sâu đặt nghi vấn với định nghĩa mà loài người từ lâu coi là chuẩn mực.'},
     {zh:'诚实守信是做人的基本准则。',py:'Chéngshí shǒuxìn shì zuòrén de jīběn zhǔnzé.',vn:'Trung thực, giữ chữ tín là nguyên tắc cơ bản của việc làm người.'},
     {zh:'每个员工都应该遵守公司的行为准则。',py:'Měi ge yuángōng dōu yīnggāi zūnshǒu gōngsī de xíngwéi zhǔnzé.',vn:'Mỗi nhân viên đều phải tuân thủ quy tắc ứng xử của công ty.'}
   ],
   colloFull:[
     {zh:'行为准则',py:'xíngwéi zhǔnzé',vn:'quy tắc ứng xử'},
     {zh:'道德准则',py:'dàodé zhǔnzé',vn:'chuẩn mực đạo đức'},
     {zh:'基本准则',py:'jīběn zhǔnzé',vn:'nguyên tắc cơ bản'},
     {zh:'以……为准则',py:'yǐ … wéi zhǔnzé',vn:'lấy … làm chuẩn mực'},
     {zh:'遵守准则',py:'zūnshǒu zhǔnzé',vn:'tuân thủ nguyên tắc'}
   ],
   patterns:[
     {s:'以 + N + 为准则',m:'Lấy … làm chuẩn mực (以……为…… ôn bài 11)'},
     {s:'……是……的基本准则',m:'… là nguyên tắc cơ bản của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi cả đời lấy câu "thà chịu thiệt chứ không lừa người" làm chuẩn mực làm người.',answer:'爷爷一辈子以“宁可吃亏，也不骗人”为做人的准则。',answerPy:'Yéye yíbèizi yǐ "nìngkě chīkuī, yě bú piàn rén" wéi zuòrén de zhǔnzé.',
      note:'以 A 为 B: lấy A làm B (ôn bài 11); 宁可……也不……: thà … chứ không ….',pair:'以……为……'},
     {promptLang:'vi',prompt:'Là học sinh, chúng ta không chỉ phải chăm học mà còn phải tuân thủ nội quy của nhà trường.',answer:'作为学生，我们不仅要努力学习，还要遵守学校的行为准则。',answerPy:'Zuòwéi xuésheng, wǒmen bùjǐn yào nǔlì xuéxí, hái yào zūnshǒu xuéxiào de xíngwéi zhǔnzé.',
      note:'作为 + thân phận: với tư cách là …; 不仅……还…….',pair:'作为……'}
   ]},

  {n:8,zh:'定义',py:'dìngyì',pos:'Danh từ',vn:'định nghĩa',hv:'định nghĩa',em:'📖',lesson:1,
   explain:['Lời mô tả ngắn gọn, chính xác về bản chất của một sự vật, khái niệm — "định nghĩa".','Còn dùng như động từ: 给……下定义 (định nghĩa cho …), 把 A 定义为 B, 重新定义…….'],
   usage:'……的定义; 下定义 / 给……下定义; 把 A 定义为 B; 传统的定义; 重新定义.',
   collo:['下定义','重新定义','传统的定义','科学定义'],
   ex_zh:'每个人给幸福下的定义都不一样。',ex_py:'Měi ge rén gěi xìngfú xià de dìngyì dōu bù yíyàng.',ex_vn:'Định nghĩa về hạnh phúc của mỗi người đều không giống nhau.',
   exList:[
     {zh:'深海考察向人类早已认定为准则的定义提出了质疑。',py:'Shēnhǎi kǎochá xiàng rénlèi zǎoyǐ rèndìng wéi zhǔnzé de dìngyì tíchūle zhìyí.',vn:'Cuộc khảo sát biển sâu đặt nghi vấn với định nghĩa mà loài người từ lâu đã coi là chuẩn mực.'},
     {zh:'什么是幸福？每个人给幸福下的定义都不一样。',py:'Shénme shì xìngfú? Měi ge rén gěi xìngfú xià de dìngyì dōu bù yíyàng.',vn:'Hạnh phúc là gì? Định nghĩa về hạnh phúc của mỗi người đều khác nhau.'},
     {zh:'智能手机的出现，重新定义了“电话”这个词。',py:'Zhìnéng shǒujī de chūxiàn, chóngxīn dìngyìle "diànhuà" zhège cí.',vn:'Sự ra đời của điện thoại thông minh đã định nghĩa lại từ "điện thoại".'}
   ],
   colloFull:[
     {zh:'下定义',py:'xià dìngyì',vn:'đưa ra định nghĩa'},
     {zh:'重新定义',py:'chóngxīn dìngyì',vn:'định nghĩa lại'},
     {zh:'传统的定义',py:'chuántǒng de dìngyì',vn:'định nghĩa truyền thống'},
     {zh:'科学定义',py:'kēxué dìngyì',vn:'định nghĩa khoa học'},
     {zh:'给……下定义',py:'gěi … xià dìngyì',vn:'định nghĩa cho …'}
   ],
   patterns:[
     {s:'给 + N + 下定义',m:'Định nghĩa cho …'},
     {s:'把 A 定义为 B',m:'Định nghĩa A là B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối với những người khác nhau, định nghĩa về "thành công" là không giống nhau.',answer:'对不同的人来说，“成功”的定义是不一样的。',answerPy:'Duì bù tóng de rén lái shuō, "chénggōng" de dìngyì shì bù yíyàng de.',
      note:'对……来说: đối với … mà nói (nêu góc nhìn).',pair:'对……来说'},
     {promptLang:'vi',prompt:'Phát hiện này không những thay đổi định nghĩa truyền thống, mà còn mở ra một hướng nghiên cứu mới.',answer:'这个发现不但改变了传统的定义，而且开辟了一个新的研究方向。',answerPy:'Zhège fāxiàn búdàn gǎibiànle chuántǒng de dìngyì, érqiě kāipìle yí ge xīn de yánjiū fāngxiàng.',
      note:'不但……而且……: không những … mà còn …; 开辟 = mở ra, khai phá.',pair:'不但……而且……'}
   ]},

  {n:9,zh:'潜水',py:'qiánshuǐ',pos:'Động từ',vn:'lặn',hv:'tiềm thuỷ',em:'🤿',lesson:1,
   explain:['Lặn xuống dưới mặt nước (bơi lặn, lặn biển, lặn thám hiểm).','Hay gặp: 潜水到 + nơi (潜水到海底), 去……潜水, 学潜水. Từ liên quan: 潜水员 (thợ lặn), 潜水艇 (tàu ngầm), 潜水服 (đồ lặn).'],
   usage:'潜水到 + nơi / độ sâu; 去 + nơi + 潜水; 潜水员 / 潜水服 / 潜水设备.',
   collo:['潜水到海底','去潜水','潜水员','潜水设备'],
   ex_zh:'潜水到几千米深海底的科学家发现了一个繁殖生命的场所。',ex_py:'Qiánshuǐ dào jǐ qiān mǐ shēn hǎidǐ de kēxuéjiā fāxiànle yí ge fánzhí shēngmìng de chǎngsuǒ.',ex_vn:'Các nhà khoa học lặn xuống đáy biển sâu mấy nghìn mét đã phát hiện một nơi sinh sôi sự sống.',
   exList:[
     {zh:'潜水到几千米深海底的科学家发现了一个繁殖生命的场所。',py:'Qiánshuǐ dào jǐ qiān mǐ shēn hǎidǐ de kēxuéjiā fāxiànle yí ge fánzhí shēngmìng de chǎngsuǒ.',vn:'Các nhà khoa học lặn xuống đáy biển sâu mấy nghìn mét đã phát hiện một nơi sinh sôi sự sống.'},
     {zh:'这个暑假，我们打算去海边学潜水。',py:'Zhège shǔjià, wǒmen dǎsuàn qù hǎibiān xué qiánshuǐ.',vn:'Kỳ nghỉ hè này, chúng tôi định ra biển học lặn.'},
     {zh:'潜水之前务必检查好设备，千万不能大意。',py:'Qiánshuǐ zhīqián wùbì jiǎnchá hǎo shèbèi, qiānwàn bù néng dàyi.',vn:'Trước khi lặn nhất thiết phải kiểm tra kỹ thiết bị, tuyệt đối không được chủ quan.'}
   ],
   colloFull:[
     {zh:'潜水到海底',py:'qiánshuǐ dào hǎidǐ',vn:'lặn xuống đáy biển'},
     {zh:'去潜水',py:'qù qiánshuǐ',vn:'đi lặn'},
     {zh:'潜水员',py:'qiánshuǐyuán',vn:'thợ lặn'},
     {zh:'潜水设备',py:'qiánshuǐ shèbèi',vn:'thiết bị lặn'},
     {zh:'学潜水',py:'xué qiánshuǐ',vn:'học lặn'}
   ],
   patterns:[
     {s:'潜水到 + độ sâu / địa điểm',m:'Lặn xuống tới …'},
     {s:'去 + địa điểm + 潜水',m:'Đi đâu đó để lặn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lặn biển tuy rất thú vị, nhưng trước khi lặn nhất định phải kiểm tra kỹ thiết bị.',answer:'潜水虽然很有意思，但是潜水之前一定要检查好设备。',answerPy:'Qiánshuǐ suīrán hěn yǒu yìsi, dànshì qiánshuǐ zhīqián yídìng yào jiǎnchá hǎo shèbèi.',
      note:'虽然……但是……: tuy … nhưng …; V + 好 = làm cho xong xuôi, kỹ càng.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chính vì lặn xuống đáy biển sâu mấy nghìn mét, các nhà khoa học mới phát hiện ra thế giới kỳ diệu này.',answer:'正是因为潜水到几千米深的海底，科学家们才发现了这个奇妙的世界。',answerPy:'Zhèng shì yīnwèi qiánshuǐ dào jǐ qiān mǐ shēn de hǎidǐ, kēxuéjiāmen cái fāxiànle zhège qímiào de shìjiè.',
      note:'正是因为……才……: chính vì … mới … (nhấn mạnh nguyên cớ).',pair:'正是因为……才……'}
   ]},

  {n:10,zh:'繁殖',py:'fánzhí',pos:'Động từ',vn:'sinh sôi nảy nở, sinh sản',hv:'phồn thực',em:'🐣',lesson:1,
   explain:['(Sinh vật) sinh ra thế hệ mới, tăng số lượng: sinh sản, sinh sôi.','Dùng cho động vật, thực vật, vi khuẩn; không dùng cho con người (người dùng 生育 / 生孩子). Hay gặp: 繁殖后代, 大量繁殖, 繁殖季节, 人工繁殖.'],
   usage:'繁殖 + 后代; 大量 / 迅速 + 繁殖; 繁殖能力 / 繁殖季节; ……得以繁殖.',
   collo:['繁殖后代','大量繁殖','繁殖季节','人工繁殖'],
   ex_zh:'某些细菌吸收温泉的热量得以繁殖。',ex_py:'Mǒuxiē xìjūn xīshōu wēnquán de rèliàng déyǐ fánzhí.',ex_vn:'Một số vi khuẩn hấp thụ nhiệt lượng của suối nước nóng mà sinh sôi được.',
   exList:[
     {zh:'某些细菌借硫化氢代谢变化，吸收温泉的热量得以繁殖。',py:'Mǒuxiē xìjūn jiè liúhuàqīng dàixiè biànhuà, xīshōu wēnquán de rèliàng déyǐ fánzhí.',vn:'Một số vi khuẩn nhờ hydro sunfua mà trao đổi chất, hấp thụ nhiệt lượng của suối nước nóng nên sinh sôi được.'},
     {zh:'红冠蠕虫没有嘴，没有眼，它们是怎么繁殖后代的呢？',py:'Hóngguān rúchóng méiyǒu zuǐ, méiyǒu yǎn, tāmen shì zěnme fánzhí hòudài de ne?',vn:'Giun ống mào đỏ không có miệng, không có mắt, chúng sinh sản đời sau bằng cách nào?'},
     {zh:'夏天气温高，食物放在外面，细菌很快就会大量繁殖。',py:'Xiàtiān qìwēn gāo, shíwù fàng zài wàimian, xìjūn hěn kuài jiù huì dàliàng fánzhí.',vn:'Mùa hè nhiệt độ cao, thức ăn để bên ngoài thì vi khuẩn sẽ nhanh chóng sinh sôi hàng loạt.'}
   ],
   colloFull:[
     {zh:'繁殖后代',py:'fánzhí hòudài',vn:'sinh sản đời sau'},
     {zh:'大量繁殖',py:'dàliàng fánzhí',vn:'sinh sôi hàng loạt'},
     {zh:'繁殖季节',py:'fánzhí jìjié',vn:'mùa sinh sản'},
     {zh:'人工繁殖',py:'réngōng fánzhí',vn:'nhân giống nhân tạo'},
     {zh:'繁殖能力',py:'fánzhí nénglì',vn:'khả năng sinh sản'}
   ],
   patterns:[
     {s:'繁殖 + 后代',m:'Sinh sản ra thế hệ sau'},
     {s:'……得以繁殖',m:'… nhờ đó mà sinh sôi được (得以 — điểm ngữ pháp 2)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ thành lập khu bảo tồn, loài chim quý hiếm này mới có thể sinh sôi nảy nở.',answer:'由于建立了保护区，这种珍稀鸟类才得以繁殖。',answerPy:'Yóuyú jiànlìle bǎohùqū, zhè zhǒng zhēnxī niǎolèi cái déyǐ fánzhí.',
      note:'由于……，……才……: nhờ / do … nên … mới …; 得以 + V (điểm ngữ pháp 2).',pair:'由于……才……'},
     {promptLang:'vi',prompt:'Chỉ cần nhiệt độ vừa lên cao, vi khuẩn trong thức ăn sẽ sinh sôi rất nhanh.',answer:'只要温度一高，食物里的细菌就会迅速繁殖。',answerPy:'Zhǐyào wēndù yì gāo, shíwù li de xìjūn jiù huì xùnsù fánzhí.',
      note:'只要……就……: chỉ cần … là …; 一 + tính từ = hễ vừa ….',pair:'只要……就……'}
   ]},

  {n:11,zh:'场所',py:'chǎngsuǒ',pos:'Danh từ',vn:'nơi, nơi chốn, địa điểm',hv:'trường sở',em:'🏛️',lesson:1,
   explain:['Nơi diễn ra một hoạt động nào đó — "địa điểm, nơi chốn" (văn viết, trang trọng hơn 地方).','Hay gặp: 公共场所, 活动场所, 娱乐场所, 工作场所; ……的场所.'],
   usage:'公共 / 娱乐 / 活动 / 工作 + 场所; ……的场所; 在公共场所 + V.',
   collo:['公共场所','活动场所','娱乐场所','繁殖生命的场所'],
   ex_zh:'科学家发现了一个繁殖生命的场所。',ex_py:'Kēxuéjiā fāxiànle yí ge fánzhí shēngmìng de chǎngsuǒ.',ex_vn:'Các nhà khoa học đã phát hiện một nơi sinh sôi sự sống.',
   exList:[
     {zh:'科学家在几千米深的海底发现了一个繁殖生命的场所。',py:'Kēxuéjiā zài jǐ qiān mǐ shēn de hǎidǐ fāxiànle yí ge fánzhí shēngmìng de chǎngsuǒ.',vn:'Các nhà khoa học đã phát hiện một nơi sinh sôi sự sống dưới đáy biển sâu mấy nghìn mét.'},
     {zh:'公共场所禁止吸烟，请大家自觉遵守。',py:'Gōnggòng chǎngsuǒ jìnzhǐ xīyān, qǐng dàjiā zìjué zūnshǒu.',vn:'Nơi công cộng cấm hút thuốc, mong mọi người tự giác chấp hành.'},
     {zh:'这个社区缺少老人的活动场所，大家只能在路边下棋。',py:'Zhège shèqū quēshǎo lǎorén de huódòng chǎngsuǒ, dàjiā zhǐ néng zài lùbiān xiàqí.',vn:'Khu dân cư này thiếu chỗ sinh hoạt cho người già, mọi người chỉ đành đánh cờ bên lề đường.'}
   ],
   colloFull:[
     {zh:'公共场所',py:'gōnggòng chǎngsuǒ',vn:'nơi công cộng'},
     {zh:'活动场所',py:'huódòng chǎngsuǒ',vn:'nơi sinh hoạt, vui chơi'},
     {zh:'娱乐场所',py:'yúlè chǎngsuǒ',vn:'nơi giải trí'},
     {zh:'繁殖生命的场所',py:'fánzhí shēngmìng de chǎngsuǒ',vn:'nơi sinh sôi sự sống'},
     {zh:'工作场所',py:'gōngzuò chǎngsuǒ',vn:'nơi làm việc'}
   ],
   patterns:[
     {s:'公共 / 活动 / 娱乐 + 场所',m:'Nơi công cộng / sinh hoạt / giải trí'},
     {s:'在 + 场所 + 禁止 / 不许 + V',m:'Ở nơi … cấm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở nơi công cộng, chúng ta nên nói nhỏ, kẻo làm phiền người khác.',answer:'在公共场所，我们应该小声说话，免得打扰别人。',answerPy:'Zài gōnggòng chǎngsuǒ, wǒmen yīnggāi xiǎoshēng shuōhuà, miǎnde dǎrǎo biérén.',
      note:'免得: kẻo, để khỏi (vế sau nêu điều không mong muốn — ôn bài 14).',pair:'免得'},
     {promptLang:'vi',prompt:'Thư viện không chỉ là nơi đọc sách, mà còn là nơi giao lưu của học sinh.',answer:'图书馆不仅是看书的地方，还是学生交流的场所。',answerPy:'Túshūguǎn bùjǐn shì kàn shū de dìfang, hái shì xuésheng jiāoliú de chǎngsuǒ.',
      note:'不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:12,zh:'古怪',py:'gǔguài',pos:'Tính từ',vn:'cổ quái, kỳ dị, quái lạ',hv:'cổ quái',em:'👽',lesson:1,
   explain:['Khác thường, kỳ lạ đến mức khó hiểu (hình dáng, tính cách, hành vi, âm thanh).','Hay gặp: 长相古怪, 脾气古怪, 神情古怪, 古怪的声音, 稀奇古怪. Sắc thái hơi tiêu cực hơn 奇怪 / 奇特.'],
   usage:'长相 / 脾气 / 性格 / 神情 + 古怪; 古怪的 + N; 稀奇古怪 (kỳ quái lạ lùng).',
   collo:['长相古怪','脾气古怪','古怪的声音','稀奇古怪'],
   ex_zh:'那里的生物长相古怪。',ex_py:'Nàli de shēngwù zhǎngxiàng gǔguài.',ex_vn:'Sinh vật ở đó hình dạng kỳ dị.',
   exList:[
     {zh:'那里的生物长相古怪，蛤、蚌、蟹、贝壳、红冠蠕虫等等，什么都有。',py:'Nàli de shēngwù zhǎngxiàng gǔguài, gé, bàng, xiè, bèiké, hóngguān rúchóng děngděng, shénme dōu yǒu.',vn:'Sinh vật ở đó hình dạng kỳ dị: sò, trai, cua, các loài có vỏ, giun ống mào đỏ…, cái gì cũng có.'},
     {zh:'那位老教授脾气有点儿古怪，但对学生却非常关心。',py:'Nà wèi lǎo jiàoshòu píqi yǒudiǎnr gǔguài, dàn duì xuésheng què fēicháng guānxīn.',vn:'Vị giáo sư già ấy tính khí hơi quái gở, nhưng lại rất quan tâm đến sinh viên.'},
     {zh:'半夜里，楼上传来一阵古怪的声音，把我吓了一跳。',py:'Bànyè li, lóu shang chuánlái yí zhèn gǔguài de shēngyīn, bǎ wǒ xiàle yí tiào.',vn:'Nửa đêm, trên lầu vọng xuống một tràng âm thanh kỳ quái, làm tôi giật cả mình.'}
   ],
   colloFull:[
     {zh:'长相古怪',py:'zhǎngxiàng gǔguài',vn:'hình dạng kỳ dị'},
     {zh:'脾气古怪',py:'píqi gǔguài',vn:'tính khí quái gở'},
     {zh:'古怪的声音',py:'gǔguài de shēngyīn',vn:'âm thanh kỳ quái'},
     {zh:'稀奇古怪',py:'xīqí-gǔguài',vn:'kỳ quái lạ lùng'},
     {zh:'神情古怪',py:'shénqíng gǔguài',vn:'vẻ mặt kỳ lạ'}
   ],
   patterns:[
     {s:'长相 / 脾气 / 神情 + 古怪',m:'Hình dạng / tính khí / vẻ mặt kỳ quặc'},
     {s:'稀奇古怪的 + N',m:'… kỳ quái, lạ lùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng thấy ông ấy tính khí kỳ quặc, thật ra ông ấy là người rất tốt bụng.',answer:'别看他脾气古怪，其实他是个非常善良的人。',answerPy:'Bié kàn tā píqi gǔguài, qíshí tā shì ge fēicháng shànliáng de rén.',
      note:'别看……，其实……: đừng thấy … mà tưởng, thật ra ….',pair:'别看……，其实……'},
     {promptLang:'vi',prompt:'Trong đầu cậu bé ấy lúc nào cũng đầy những câu hỏi kỳ quái lạ lùng, bố mẹ thường không trả lời được.',answer:'那个小男孩脑子里总是装满了稀奇古怪的问题，爸爸妈妈常常回答不出来。',answerPy:'Nàge xiǎo nánhái nǎozi li zǒngshì zhuāngmǎnle xīqí-gǔguài de wèntí, bàba māma chángcháng huídá bu chūlái.',
      note:'V + 不出来: bổ ngữ khả năng (không … ra được).',pair:'V + 不出来'}
   ]},

  {n:13,zh:'贝壳',py:'bèiké',pos:'Danh từ',vn:'vỏ sò, vỏ ốc; loài có vỏ',hv:'bối xác',em:'🐚',lesson:1,
   explain:['Lớp vỏ cứng bên ngoài của các loài nhuyễn thể (sò, hến, ốc…); trong bài chỉ chung các loài có vỏ.','Lượng từ: 一枚 / 一个 / 一只 贝壳. 壳 ở đây đọc ké; trong 地壳 (vỏ Trái Đất) đọc qiào.'],
   usage:'捡贝壳; 一枚贝壳; 贝壳 + 项链 / 工艺品; 用贝壳做…….',
   collo:['捡贝壳','一枚贝壳','贝壳项链','五颜六色的贝壳'],
   ex_zh:'孩子们在沙滩上捡了许多贝壳。',ex_py:'Háizimen zài shātān shang jiǎnle xǔduō bèiké.',ex_vn:'Bọn trẻ nhặt được rất nhiều vỏ sò trên bãi cát.',
   exList:[
     {zh:'那里的生物长相古怪，蛤、蚌、蟹、贝壳、红冠蠕虫等等，什么都有。',py:'Nàli de shēngwù zhǎngxiàng gǔguài, gé, bàng, xiè, bèiké, hóngguān rúchóng děngděng, shénme dōu yǒu.',vn:'Sinh vật ở đó hình dạng kỳ dị: sò, trai, cua, các loài có vỏ, giun ống mào đỏ…, cái gì cũng có.'},
     {zh:'退潮以后，孩子们在沙滩上捡了许多五颜六色的贝壳。',py:'Tuìcháo yǐhòu, háizimen zài shātān shang jiǎnle xǔduō wǔyán-liùsè de bèiké.',vn:'Sau khi thuỷ triều rút, bọn trẻ nhặt được rất nhiều vỏ sò đủ màu sắc trên bãi cát.'},
     {zh:'这条项链是用海边的小贝壳做成的，别提多漂亮了。',py:'Zhè tiáo xiàngliàn shì yòng hǎibiān de xiǎo bèiké zuòchéng de, biétí duō piàoliang le.',vn:'Sợi dây chuyền này làm từ những vỏ sò nhỏ ngoài biển, đẹp khỏi phải nói.'}
   ],
   colloFull:[
     {zh:'捡贝壳',py:'jiǎn bèiké',vn:'nhặt vỏ sò'},
     {zh:'一枚贝壳',py:'yì méi bèiké',vn:'một chiếc vỏ sò'},
     {zh:'贝壳项链',py:'bèiké xiàngliàn',vn:'dây chuyền vỏ sò'},
     {zh:'五颜六色的贝壳',py:'wǔyán-liùsè de bèiké',vn:'vỏ sò đủ màu sắc'},
     {zh:'贝壳工艺品',py:'bèiké gōngyìpǐn',vn:'đồ thủ công làm từ vỏ sò'}
   ],
   patterns:[
     {s:'在沙滩上捡贝壳',m:'Nhặt vỏ sò trên bãi cát'},
     {s:'用贝壳做（成）+ N',m:'Làm … bằng vỏ sò'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc vỏ sò này tuy không đáng tiền, nhưng đối với tôi lại vô cùng quý giá.',answer:'这枚贝壳虽然不值钱，但对我而言却非常珍贵。',answerPy:'Zhè méi bèiké suīrán bù zhíqián, dàn duì wǒ ér yán què fēicháng zhēnguì.',
      note:'对……而言: đối với … mà nói (ôn bài 8).',pair:'对……而言'},
     {promptLang:'vi',prompt:'Lần nào ra biển em gái tôi cũng nhặt cả một túi to vỏ sò mang về nhà.',answer:'每次去海边，妹妹都要捡一大袋贝壳带回家。',answerPy:'Měi cì qù hǎibiān, mèimei dōu yào jiǎn yí dà dài bèiké dài huí jiā.',
      note:'每次……都……: lần nào … cũng ….',pair:'每次……都……'}
   ]},

  {n:14,zh:'诧异',py:'chàyì',pos:'Tính từ',vn:'rất kinh ngạc, sửng sốt',hv:'sá dị',em:'😲',lesson:1,
   explain:['Cảm thấy rất lạ, kinh ngạc vì điều không ngờ tới — văn viết, mức độ mạnh hơn 奇怪.','Hay gặp: 深感诧异, 感到诧异, 令人诧异, 诧异地 + V (诧异地问), 诧异的目光.'],
   usage:'（深）感诧异; 令人诧异; 诧异地 + 问 / 看; 用诧异的目光 + V.',
   collo:['深感诧异','感到诧异','诧异地问','诧异的目光'],
   ex_zh:'科学家深感诧异。',ex_py:'Kēxuéjiā shēn gǎn chàyì.',ex_vn:'Các nhà khoa học vô cùng kinh ngạc.',
   exList:[
     {zh:'科学家深感诧异：在没有阳光，没有食物，压力又很大的海底，怎么会有这么多生物？',py:'Kēxuéjiā shēn gǎn chàyì: zài méiyǒu yángguāng, méiyǒu shíwù, yālì yòu hěn dà de hǎidǐ, zěnme huì yǒu zhème duō shēngwù?',vn:'Các nhà khoa học vô cùng kinh ngạc: ở đáy biển không có ánh mặt trời, không có thức ăn, áp suất lại rất lớn, sao lại có nhiều sinh vật đến thế?'},
     {zh:'看到平时最不爱学习的他竟然考了第一名，全班同学都很诧异。',py:'Kàndào píngshí zuì bú ài xuéxí de tā jìngrán kǎole dì-yī míng, quán bān tóngxué dōu hěn chàyì.',vn:'Thấy cậu ta — người thường ngày lười học nhất — lại đứng nhất, cả lớp đều sửng sốt.'},
     {zh:'听说我要辞职，同事们都用诧异的目光看着我。',py:'Tīngshuō wǒ yào cízhí, tóngshìmen dōu yòng chàyì de mùguāng kànzhe wǒ.',vn:'Nghe nói tôi định nghỉ việc, đồng nghiệp đều nhìn tôi bằng ánh mắt kinh ngạc.'}
   ],
   colloFull:[
     {zh:'深感诧异',py:'shēn gǎn chàyì',vn:'vô cùng kinh ngạc'},
     {zh:'感到诧异',py:'gǎndào chàyì',vn:'cảm thấy sửng sốt'},
     {zh:'诧异地问',py:'chàyì de wèn',vn:'kinh ngạc hỏi'},
     {zh:'诧异的目光',py:'chàyì de mùguāng',vn:'ánh mắt kinh ngạc'},
     {zh:'令人诧异',py:'lìng rén chàyì',vn:'khiến người ta sửng sốt'}
   ],
   patterns:[
     {s:'（深）感诧异：……',m:'Vô cùng kinh ngạc (rồi nêu điều khó hiểu)'},
     {s:'诧异地 + 问 / 看着',m:'Kinh ngạc hỏi / nhìn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điều khiến tôi kinh ngạc là, một đứa trẻ mới năm tuổi lại có thể đọc thuộc hơn một trăm bài thơ Đường.',answer:'令我诧异的是，一个才五岁的孩子竟然能背出一百多首唐诗。',answerPy:'Lìng wǒ chàyì de shì, yí ge cái wǔ suì de háizi jìngrán néng bèichū yìbǎi duō shǒu Tángshī.',
      note:'竟然: vậy mà, lại (ngoài dự đoán); 令我……的是 = điều khiến tôi … là.',pair:'竟然'},
     {promptLang:'vi',prompt:'Nghe nói tôi định nghỉ việc đi vòng quanh thế giới, đến cả bố mẹ vốn luôn ủng hộ tôi cũng vô cùng sửng sốt.',answer:'听说我要辞职去环游世界，连一向支持我的父母都深感诧异。',answerPy:'Tīngshuō wǒ yào cízhí qù huányóu shìjiè, lián yíxiàng zhīchí wǒ de fùmǔ dōu shēn gǎn chàyì.',
      note:'连……都……: đến … cũng …; 一向 = xưa nay (gần nghĩa 历来).',pair:'连……都……'}
   ]},

  {n:15,zh:'样品',py:'yàngpǐn',pos:'Danh từ',vn:'hàng mẫu, mẫu vật',hv:'dạng phẩm',em:'🧪',lesson:1,
   explain:['Vật được lấy ra làm mẫu để kiểm tra, nghiên cứu (mẫu vật) hoặc để giới thiệu cho khách xem (hàng mẫu).','Hay gặp: 取出样品, 带回样品, 采集样品, 检测样品, 免费样品. Gần nghĩa: 标本 (tiêu bản sinh vật), 样本 (mẫu thống kê).'],
   usage:'取出 / 带回 / 采集 + 样品; 对样品进行检测 / 分析; 免费样品.',
   collo:['取出样品','带回样品','检测样品','免费样品'],
   ex_zh:'科学家取出从深海带回的样品。',ex_py:'Kēxuéjiā qǔchū cóng shēnhǎi dàihuí de yàngpǐn.',ex_vn:'Các nhà khoa học lấy ra mẫu vật mang về từ biển sâu.',
   exList:[
     {zh:'回到地面后，科学家取出从深海带回的样品。',py:'Huídào dìmiàn hòu, kēxuéjiā qǔchū cóng shēnhǎi dàihuí de yàngpǐn.',vn:'Trở lại mặt đất, các nhà khoa học lấy ra mẫu vật mang về từ biển sâu.'},
     {zh:'工作人员采集了河水样品，准备送到实验室检测。',py:'Gōngzuò rényuán cǎijíle héshuǐ yàngpǐn, zhǔnbèi sòngdào shíyànshì jiǎncè.',vn:'Nhân viên đã thu thập mẫu nước sông, chuẩn bị gửi tới phòng thí nghiệm kiểm nghiệm.'},
     {zh:'这家公司先给我们寄来几份免费样品，满意了再下订单。',py:'Zhè jiā gōngsī xiān gěi wǒmen jìlái jǐ fèn miǎnfèi yàngpǐn, mǎnyìle zài xià dìngdān.',vn:'Công ty này gửi cho chúng tôi mấy mẫu miễn phí trước, hài lòng rồi mới đặt hàng.'}
   ],
   colloFull:[
     {zh:'取出样品',py:'qǔchū yàngpǐn',vn:'lấy mẫu ra'},
     {zh:'带回样品',py:'dàihuí yàngpǐn',vn:'mang mẫu về'},
     {zh:'检测样品',py:'jiǎncè yàngpǐn',vn:'kiểm nghiệm mẫu'},
     {zh:'免费样品',py:'miǎnfèi yàngpǐn',vn:'hàng mẫu miễn phí'},
     {zh:'采集样品',py:'cǎijí yàngpǐn',vn:'thu thập mẫu'}
   ],
   patterns:[
     {s:'采集 / 带回 / 取出 + 样品',m:'Thu thập / mang về / lấy ra mẫu vật'},
     {s:'对样品进行 + 检测 / 分析',m:'Tiến hành kiểm nghiệm / phân tích mẫu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Qua phân tích kỹ lưỡng mẫu vật, các nhà khoa học cuối cùng đã đưa ra được kết luận.',answer:'经过对样品的仔细分析，科学家们终于得出了结论。',answerPy:'Jīngguò duì yàngpǐn de zǐxì fēnxī, kēxuéjiāmen zhōngyú déchūle jiélùn.',
      note:'经过……，终于……: trải qua … cuối cùng …; 得出结论 = rút ra kết luận.',pair:'经过……，终于……'},
     {promptLang:'vi',prompt:'Để tiện cho khách hàng lựa chọn, cửa hàng đã bày tất cả hàng mẫu lên kệ.',answer:'为了便于顾客挑选，商店把所有样品都摆在了架子上。',answerPy:'Wèile biànyú gùkè tiāoxuǎn, shāngdiàn bǎ suǒyǒu yàngpǐn dōu bǎi zàile jiàzi shang.',
      note:'为了便于 + V: để tiện cho … (便于 ôn bài 13); câu chữ 把.',pair:'为了便于……'}
   ]},

  {n:16,zh:'刺',py:'cì',pos:'Động từ',vn:'đâm, chọc; kích thích (giác quan)',hv:'thích',em:'🌵',lesson:1,
   explain:['Nghĩa gốc: vật nhọn đâm vào, chọc vào (刺破, 刺伤).','Nghĩa mở rộng: kích thích mạnh giác quan gây khó chịu — 刺鼻 (hắc, xộc mũi), 刺眼 (chói mắt), 刺耳 (chói tai). Còn là danh từ: cái gai (鱼刺, 玫瑰的刺).'],
   usage:'刺 + 鼻 / 眼 / 耳; 刺 + 破 / 伤; 被 + N + 刺伤 / 刺破.',
   collo:['刺鼻','刺眼','刺耳','刺破'],
   ex_zh:'一股带有刺鼻臭蛋气味的硫化氢气体立即冲了出来。',ex_py:'Yì gǔ dàiyǒu cìbí chòu dàn qìwèi de liúhuàqīng qìtǐ lìjí chōngle chūlái.',ex_vn:'Một luồng khí hydro sunfua mang mùi trứng thối hắc mũi lập tức xộc ra.',
   exList:[
     {zh:'一股带有刺鼻臭蛋气味的硫化氢气体立即冲了出来。',py:'Yì gǔ dàiyǒu cìbí chòu dàn qìwèi de liúhuàqīng qìtǐ lìjí chōngle chūlái.',vn:'Một luồng khí hydro sunfua mang mùi trứng thối hắc mũi lập tức xộc ra.'},
     {zh:'中午的阳光太刺眼了，出门最好戴上太阳镜。',py:'Zhōngwǔ de yángguāng tài cìyǎn le, chūmén zuìhǎo dàishang tàiyángjìng.',vn:'Nắng buổi trưa chói mắt quá, ra ngoài tốt nhất nên đeo kính râm.'},
     {zh:'我不小心被玫瑰的刺刺破了手指。',py:'Wǒ bù xiǎoxīn bèi méigui de cì cìpòle shǒuzhǐ.',vn:'Tôi không cẩn thận bị gai hoa hồng đâm thủng ngón tay.'}
   ],
   colloFull:[
     {zh:'刺鼻',py:'cìbí',vn:'hắc, xộc mũi'},
     {zh:'刺眼',py:'cìyǎn',vn:'chói mắt'},
     {zh:'刺耳',py:'cì\'ěr',vn:'chói tai'},
     {zh:'刺破',py:'cìpò',vn:'đâm thủng'},
     {zh:'刺伤',py:'cìshāng',vn:'đâm bị thương'}
   ],
   patterns:[
     {s:'刺鼻的气味 / 刺眼的阳光 / 刺耳的声音',m:'Mùi hắc / nắng chói / tiếng chói tai'},
     {s:'被 + N + 刺破 / 刺伤',m:'Bị … đâm thủng / đâm bị thương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa mở cửa, một mùi hắc liền xộc ra, hoá ra trong nhà vừa sơn lại tường.',answer:'一打开门，一股刺鼻的气味就冲了出来，原来家里刚刷过墙。',answerPy:'Yì dǎkāi mén, yì gǔ cìbí de qìwèi jiù chōngle chūlái, yuánlái jiāli gāng shuāguo qiáng.',
      note:'一……就……: vừa … là …; 原来 = hoá ra.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tiếng còi xe chói tai quá, ồn đến mức tôi hoàn toàn không tập trung học được.',answer:'汽车喇叭声太刺耳了，吵得我根本没法集中精力学习。',answerPy:'Qìchē lǎbashēng tài cì\'ěr le, chǎo de wǒ gēnběn méi fǎ jízhōng jīnglì xuéxí.',
      note:'Adj + 得 + (kết quả): ồn đến mức …; 根本 + 没/不 = hoàn toàn không.',pair:'……得 + bổ ngữ trạng thái'}
   ]},

  {n:17,zh:'气味',py:'qìwèi',pos:'Danh từ',vn:'mùi',hv:'khí vị',em:'👃',lesson:1,
   explain:['Mùi — cảm giác do khứu giác nhận được (thơm hoặc hôi).','Lượng từ: 一股气味 (một luồng mùi). Hay gặp: 刺鼻的气味, 难闻的气味, 散发出气味. Thành ngữ 气味相投 = hợp tính nhau.'],
   usage:'一股 + (tính từ) + 气味; 带有 / 散发出 + 气味; 气味 + 难闻 / 刺鼻.',
   collo:['一股气味','刺鼻的气味','难闻的气味','散发出气味'],
   ex_zh:'冰箱里散发出一股难闻的气味。',ex_py:'Bīngxiāng li sànfā chū yì gǔ nánwén de qìwèi.',ex_vn:'Trong tủ lạnh bốc ra một mùi khó ngửi.',
   exList:[
     {zh:'科学家取出样品，一股带有刺鼻臭蛋气味的气体立即冲了出来。',py:'Kēxuéjiā qǔchū yàngpǐn, yì gǔ dàiyǒu cìbí chòu dàn qìwèi de qìtǐ lìjí chōngle chūlái.',vn:'Nhà khoa học lấy mẫu vật ra, một luồng khí mang mùi trứng thối hắc mũi lập tức xộc ra.'},
     {zh:'冰箱里不知道什么东西坏了，散发出一股难闻的气味。',py:'Bīngxiāng li bù zhīdào shénme dōngxi huài le, sànfā chū yì gǔ nánwén de qìwèi.',vn:'Không biết thứ gì trong tủ lạnh bị hỏng, bốc ra một mùi khó ngửi.'},
     {zh:'狗的鼻子特别灵，能分辨出上万种不同的气味。',py:'Gǒu de bízi tèbié líng, néng fēnbiàn chū shàng wàn zhǒng bù tóng de qìwèi.',vn:'Mũi chó cực kỳ thính, có thể phân biệt được hàng vạn mùi khác nhau.'}
   ],
   colloFull:[
     {zh:'一股气味',py:'yì gǔ qìwèi',vn:'một luồng mùi'},
     {zh:'刺鼻的气味',py:'cìbí de qìwèi',vn:'mùi hắc'},
     {zh:'难闻的气味',py:'nánwén de qìwèi',vn:'mùi khó ngửi'},
     {zh:'散发出气味',py:'sànfā chū qìwèi',vn:'toả ra mùi'},
     {zh:'气味相投',py:'qìwèi-xiāngtóu',vn:'hợp tính nhau'}
   ],
   patterns:[
     {s:'一股 + (tính từ) + 的气味',m:'Một luồng mùi …'},
     {s:'散发出 + 气味',m:'Toả ra mùi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùi này hắc quá, cậu mở cửa sổ ra đi, để tránh mọi người bị đau đầu.',answer:'这股气味太刺鼻了，你把窗户打开吧，以免大家头疼。',answerPy:'Zhè gǔ qìwèi tài cìbí le, nǐ bǎ chuānghu dǎkāi ba, yǐmiǎn dàjiā tóuténg.',
      note:'以免: để tránh (đứng đầu vế sau, nêu điều không mong muốn; gần nghĩa 免得).',pair:'以免'},
     {promptLang:'vi',prompt:'Chó có thể phân biệt hàng vạn mùi khác nhau, vì vậy thường được dùng để giúp cảnh sát phá án.',answer:'狗能分辨出上万种不同的气味，因此常常被用来帮助警察破案。',answerPy:'Gǒu néng fēnbiàn chū shàng wàn zhǒng bù tóng de qìwèi, yīncǐ chángcháng bèi yònglái bāngzhù jǐngchá pò\'àn.',
      note:'被用来 + V: được dùng để …; 因此 nêu kết quả.',pair:'被用来 + V'}
   ]},

  {n:18,zh:'恍然大悟',py:'huǎngrán-dàwù',pos:'Thành ngữ',vn:'bỗng nhiên tỉnh ngộ, chợt hiểu ra',hv:'hoảng nhiên đại ngộ',em:'😮',lesson:1,
   explain:['Bỗng nhiên hiểu ra điều trước đó còn mơ hồ, khó hiểu (恍然 = chợt, bỗng; 大悟 = hiểu ra hoàn toàn).','Làm vị ngữ, hay đi với 才 / 这才 / 顿时: 我这才恍然大悟; thường theo sau là 原来…… (hoá ra …). Không mang tân ngữ.'],
   usage:'（chủ ngữ）+ 恍然大悟; 这才 / 才 / 顿时 + 恍然大悟; ……，才恍然大悟，原来…….',
   collo:['恍然大悟','这才恍然大悟','顿时恍然大悟','恍然大悟地说'],
   ex_zh:'科学家恍然大悟，进而提出了这样的假说。',ex_py:'Kēxuéjiā huǎngrán-dàwù, jìn\'ér tíchūle zhèyàng de jiǎshuō.',ex_vn:'Các nhà khoa học chợt hiểu ra, từ đó đưa ra một giả thuyết như sau.',
   exList:[
     {zh:'一股带有刺鼻臭蛋气味的硫化氢气体冲了出来，科学家恍然大悟。',py:'Yì gǔ dàiyǒu cìbí chòu dàn qìwèi de liúhuàqīng qìtǐ chōngle chūlái, kēxuéjiā huǎngrán-dàwù.',vn:'Một luồng khí hydro sunfua mang mùi trứng thối hắc mũi xộc ra, các nhà khoa học chợt hiểu ra.'},
     {zh:'听了老师的解释，我才恍然大悟，原来这道题这么简单。',py:'Tīngle lǎoshī de jiěshì, wǒ cái huǎngrán-dàwù, yuánlái zhè dào tí zhème jiǎndān.',vn:'Nghe thầy giải thích, tôi mới vỡ lẽ, hoá ra bài này đơn giản vậy.'},
     {zh:'看到桌上的蛋糕，他顿时恍然大悟：今天是自己的生日！',py:'Kàndào zhuō shang de dàngāo, tā dùnshí huǎngrán-dàwù: jīntiān shì zìjǐ de shēngrì!',vn:'Nhìn thấy chiếc bánh kem trên bàn, anh ấy lập tức hiểu ra: hôm nay là sinh nhật mình!'}
   ],
   colloFull:[
     {zh:'恍然大悟',py:'huǎngrán-dàwù',vn:'bỗng nhiên hiểu ra'},
     {zh:'这才恍然大悟',py:'zhè cái huǎngrán-dàwù',vn:'giờ mới vỡ lẽ'},
     {zh:'顿时恍然大悟',py:'dùnshí huǎngrán-dàwù',vn:'lập tức hiểu ra'},
     {zh:'恍然大悟地说',py:'huǎngrán-dàwù de shuō',vn:'chợt hiểu ra mà nói'},
     {zh:'令人恍然大悟',py:'lìng rén huǎngrán-dàwù',vn:'khiến người ta vỡ lẽ'}
   ],
   patterns:[
     {s:'……，才 / 这才恍然大悟，原来……',m:'…, mới vỡ lẽ ra, hoá ra …'},
     {s:'顿时恍然大悟',m:'Lập tức hiểu ra (顿时 ôn bài 2)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mãi đến khi bước vào văn phòng, tôi mới vỡ lẽ, hoá ra hôm nay là sinh nhật mình.',answer:'直到走进办公室，我才恍然大悟，原来今天是我的生日。',answerPy:'Zhídào zǒujìn bàngōngshì, wǒ cái huǎngrán-dàwù, yuánlái jīntiān shì wǒ de shēngrì.',
      note:'直到……才……: mãi đến … mới … (câu trong 练习3 ②).',pair:'直到……才……'},
     {promptLang:'vi',prompt:'Nghe bố giải thích xong, cậu bé lập tức hiểu ra, thế là chạy đi xin lỗi bạn.',answer:'听了爸爸的解释，小男孩顿时恍然大悟，于是跑去向朋友道歉。',answerPy:'Tīngle bàba de jiěshì, xiǎo nánhái dùnshí huǎngrán-dàwù, yúshì pǎo qù xiàng péngyou dàoqiàn.',
      note:'顿时: lập tức (ôn bài 2); 于是: thế là; 向……道歉 = xin lỗi ai.',pair:'顿时'}
   ]},

  {n:19,zh:'进而',py:'jìn\'ér',pos:'Liên từ',vn:'sau đó, từ đó tiến thêm một bước',hv:'tiến nhi',em:'⏩',lesson:1,
   explain:['Liên từ, dùng ở phân câu SAU, biểu thị trên cơ sở đã có mà tiến thêm một bước — "rồi từ đó, tiến tới".','Văn viết. Vế trước là bước cơ sở, vế sau là bước cao hơn / tiếp theo: 先……，进而…… (điểm ngữ pháp 1).'],
   usage:'……，进而 + V; 先……，进而……; 首先……，进而……. Hai vế thường cùng chủ ngữ.',
   collo:['进而提出','进而促进','进而改造','进而找到'],
   ex_zh:'科学家恍然大悟，进而提出了这样的假说。',ex_py:'Kēxuéjiā huǎngrán-dàwù, jìn\'ér tíchūle zhèyàng de jiǎshuō.',ex_vn:'Các nhà khoa học chợt hiểu ra, từ đó đưa ra một giả thuyết như sau.',
   exList:[
     {zh:'科学家恍然大悟，进而提出了这样的假说。',py:'Kēxuéjiā huǎngrán-dàwù, jìn\'ér tíchūle zhèyàng de jiǎshuō.',vn:'Các nhà khoa học chợt hiểu ra, từ đó đưa ra một giả thuyết như sau.'},
     {zh:'想象有减轻心理压力，维持心理平衡，进而促进心理健康的作用。',py:'Xiǎngxiàng yǒu jiǎnqīng xīnlǐ yālì, wéichí xīnlǐ pínghéng, jìn\'ér cùjìn xīnlǐ jiànkāng de zuòyòng.',vn:'Trí tưởng tượng có tác dụng giảm áp lực tâm lý, duy trì cân bằng tâm lý, từ đó thúc đẩy sức khoẻ tâm lý.'},
     {zh:'通过调查研究发现问题，进而找到解决问题的方法。',py:'Tōngguò diàochá yánjiū fāxiàn wèntí, jìn\'ér zhǎodào jiějué wèntí de fāngfǎ.',vn:'Thông qua điều tra nghiên cứu để phát hiện vấn đề, rồi từ đó tìm ra cách giải quyết vấn đề.'}
   ],
   colloFull:[
     {zh:'进而提出',py:'jìn\'ér tíchū',vn:'từ đó đưa ra'},
     {zh:'进而促进',py:'jìn\'ér cùjìn',vn:'tiến tới thúc đẩy'},
     {zh:'进而改造',py:'jìn\'ér gǎizào',vn:'tiến tới cải tạo'},
     {zh:'进而找到',py:'jìn\'ér zhǎodào',vn:'từ đó tìm ra'},
     {zh:'先……，进而……',py:'xiān …, jìn\'ér …',vn:'trước …, rồi tiến tới …'}
   ],
   patterns:[
     {s:'先 + V1，进而 + V2',m:'Trước tiên …, rồi tiến thêm bước nữa …'},
     {s:'……，进而提出 / 促进 / 找到……',m:'…, từ đó đưa ra / thúc đẩy / tìm ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phương pháp giảng dạy mới trước tiên thử nghiệm ở một vài lớp, rồi tiến tới mở rộng ra toàn trường.',answer:'新的教学方法先在个别班级进行实验，进而在全校推广。',answerPy:'Xīn de jiàoxué fāngfǎ xiān zài gèbié bānjí jìnxíng shíyàn, jìn\'ér zài quánxiào tuīguǎng.',
      note:'先……，进而……: trước … rồi tiến tới … (练一练 (1) của sách).',pair:'先……，进而……'},
     {promptLang:'vi',prompt:'Phải hiểu rõ tư tưởng mà nguyên tác muốn biểu đạt trước, từ đó hiểu nguyên tác tốt hơn.',answer:'要先把原著表达的思想弄清楚，进而更好地理解原著。',answerPy:'Yào xiān bǎ yuánzhù biǎodá de sīxiǎng nòng qīngchu, jìn\'ér gèng hǎo de lǐjiě yuánzhù.',
      note:'把 + O + 弄清楚: làm rõ …; 进而 thay cho "在此基础上" (练一练 (2)).',pair:'把……弄清楚'}
   ]},

  {n:20,zh:'分裂',py:'fēnliè',pos:'Động từ',vn:'tách rời, chia, chia rẽ',hv:'phân liệt',em:'💥',lesson:1,
   explain:['Một chỉnh thể tách ra thành nhiều phần (nghĩa vật lý, sinh học: 细胞分裂, 地壳分裂).','Nghĩa trừu tượng: chia rẽ (tổ chức, quốc gia): 分裂国家, 反对分裂. Trái nghĩa: 统一, 团结.'],
   usage:'A + 分裂 + 成 / 为 + B; ……分裂而成的 + N; 细胞分裂; 反对分裂.',
   collo:['细胞分裂','分裂而成','分裂成两半','反对分裂'],
   ex_zh:'海水从地壳分裂而成的裂缝渗透到地下。',ex_py:'Hǎishuǐ cóng dìqiào fēnliè ér chéng de lièfèng shèntòu dào dìxià.',ex_vn:'Nước biển thấm xuống lòng đất qua những khe nứt do vỏ Trái Đất tách ra mà thành.',
   exList:[
     {zh:'当海水从地壳分裂而成的裂缝渗透到地下时，水里的硫酸盐转化成了硫化氢。',py:'Dāng hǎishuǐ cóng dìqiào fēnliè ér chéng de lièfèng shèntòu dào dìxià shí, shuǐ li de liúsuānyán zhuǎnhuà chéngle liúhuàqīng.',vn:'Khi nước biển thấm xuống lòng đất qua những khe nứt do vỏ Trái Đất tách ra, muối sunfat trong nước chuyển hoá thành hydro sunfua.'},
     {zh:'细胞不断分裂，生物体才能慢慢长大。',py:'Xìbāo búduàn fēnliè, shēngwùtǐ cái néng mànmàn zhǎngdà.',vn:'Tế bào không ngừng phân chia thì cơ thể sinh vật mới có thể lớn dần lên.'},
     {zh:'因为意见不统一，这个乐队最后分裂成了两个组合。',py:'Yīnwèi yìjiàn bù tǒngyī, zhège yuèduì zuìhòu fēnliè chéngle liǎng ge zǔhé.',vn:'Vì ý kiến không thống nhất, ban nhạc này cuối cùng tách thành hai nhóm.'}
   ],
   colloFull:[
     {zh:'细胞分裂',py:'xìbāo fēnliè',vn:'phân bào, tế bào phân chia'},
     {zh:'分裂而成',py:'fēnliè ér chéng',vn:'tách ra mà thành'},
     {zh:'分裂成两半',py:'fēnliè chéng liǎng bàn',vn:'tách làm đôi'},
     {zh:'反对分裂',py:'fǎnduì fēnliè',vn:'phản đối chia rẽ'},
     {zh:'分裂国家',py:'fēnliè guójiā',vn:'chia cắt đất nước'}
   ],
   patterns:[
     {s:'A + 分裂成 + B',m:'A tách ra thành B'},
     {s:'……分裂而成的 + N',m:'N hình thành do … tách ra'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đội bóng vốn rất đoàn kết, vậy mà vì một chuyện nhỏ lại chia thành hai phe.',answer:'本来很团结的球队，竟因为一件小事而分裂成了两派。',answerPy:'Běnlái hěn tuánjié de qiúduì, jìng yīnwèi yí jiàn xiǎoshì ér fēnliè chéngle liǎng pài.',
      note:'因为……而……: vì … mà … (văn viết); 竟 = vậy mà.',pair:'因为……而……'},
     {promptLang:'vi',prompt:'Trong nhóm cãi nhau càng dữ thì càng dễ chia rẽ.',answer:'小组里吵得越厉害，就越容易分裂。',answerPy:'Xiǎozǔ li chǎo de yuè lìhai, jiù yuè róngyì fēnliè.',
      note:'越……越……: càng … càng ….',pair:'越……越……'}
   ]},

  {n:21,zh:'渗透',py:'shèntòu',pos:'Động từ',vn:'thẩm thấu, ngấm vào, thấm',hv:'thẩm thấu',em:'💧',lesson:1,
   explain:['(Chất lỏng) từ từ thấm qua, ngấm vào vật khác: 雨水渗透到地下.','Nghĩa bóng: (tư tưởng, ảnh hưởng) từng bước thâm nhập vào: 渗透到生活的各个方面.'],
   usage:'渗透 + 到 / 进 + nơi; 渗透到……的各个方面; 相互渗透.',
   collo:['渗透到地下','渗透进来','渗透到各个方面','相互渗透'],
   ex_zh:'海水从裂缝渗透到地下。',ex_py:'Hǎishuǐ cóng lièfèng shèntòu dào dìxià.',ex_vn:'Nước biển thấm qua khe nứt xuống lòng đất.',
   exList:[
     {zh:'当海水从裂缝渗透到地下时，在高温和高压的作用下发生了变化。',py:'Dāng hǎishuǐ cóng lièfèng shèntòu dào dìxià shí, zài gāowēn hé gāoyā de zuòyòng xià fāshēngle biànhuà.',vn:'Khi nước biển thấm qua khe nứt xuống lòng đất, dưới tác dụng của nhiệt độ cao và áp suất cao, nó đã biến đổi.'},
     {zh:'雨下得太大，雨水从墙缝里渗透进来了。',py:'Yǔ xià de tài dà, yǔshuǐ cóng qiáng fèng li shèntòu jìnlái le.',vn:'Mưa to quá, nước mưa thấm vào qua khe tường.'},
     {zh:'如今，网络已经渗透到我们生活的各个方面。',py:'Rújīn, wǎngluò yǐjīng shèntòu dào wǒmen shēnghuó de gègè fāngmiàn.',vn:'Ngày nay, Internet đã thâm nhập vào mọi mặt cuộc sống của chúng ta.'}
   ],
   colloFull:[
     {zh:'渗透到地下',py:'shèntòu dào dìxià',vn:'ngấm xuống lòng đất'},
     {zh:'渗透进来',py:'shèntòu jìnlái',vn:'thấm vào'},
     {zh:'渗透到各个方面',py:'shèntòu dào gègè fāngmiàn',vn:'thâm nhập vào mọi mặt'},
     {zh:'相互渗透',py:'xiānghù shèntòu',vn:'thâm nhập lẫn nhau'},
     {zh:'慢慢渗透',py:'mànmàn shèntòu',vn:'thấm dần dần'}
   ],
   patterns:[
     {s:'(chất lỏng) + 从……渗透到 / 进……',m:'(Chất lỏng) thấm từ … vào …'},
     {s:'……渗透到……的各个方面',m:'… thâm nhập vào mọi mặt của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu hoá chất ngấm xuống lòng đất thì sẽ làm ô nhiễm nước ngầm, hậu quả khôn lường.',answer:'要是化学物质渗透到地下，就会污染地下水，后果不堪设想。',answerPy:'Yàoshi huàxué wùzhì shèntòu dào dìxià, jiù huì wūrǎn dìxiàshuǐ, hòuguǒ bùkān shèxiǎng.',
      note:'要是……就……: nếu … thì … (khẩu ngữ hơn 如果); 后果不堪设想 = hậu quả khôn lường.',pair:'要是……就……'},
     {promptLang:'vi',prompt:'Văn hoá truyền thống đã âm thầm thấm vào cuộc sống hằng ngày của người Trung Quốc.',answer:'传统文化已经不知不觉地渗透到了中国人的日常生活中。',answerPy:'Chuántǒng wénhuà yǐjīng bùzhī-bùjué de shèntòu dàole Zhōngguórén de rìcháng shēnghuó zhōng.',
      note:'不知不觉地 + V: một cách âm thầm, lúc nào không hay.',pair:'不知不觉地 + V'}
   ]},

  {n:22,zh:'细菌',py:'xìjūn',pos:'Danh từ',vn:'vi khuẩn, vi trùng',hv:'tế khuẩn',em:'🦠',lesson:1,
   explain:['Vi khuẩn — sinh vật đơn bào rất nhỏ, chỉ thấy được qua kính hiển vi; có loại có hại, có loại có ích.','Hay gặp: 细菌繁殖, 杀死细菌, 有害细菌, 耐高温细菌 (trong bài). Phân biệt với 病毒 (virus).'],
   usage:'细菌 + 繁殖 / 感染; 杀死 / 消灭 + 细菌; 有害 / 有益 + 细菌; 耐高温细菌.',
   collo:['细菌繁殖','杀死细菌','有害细菌','耐高温细菌'],
   ex_zh:'据悉，这种细菌能在250摄氏度的环境下生存。',ex_py:'Jùxī, zhè zhǒng xìjūn néng zài èrbǎi wǔshí shèshìdù de huánjìng xià shēngcún.',ex_vn:'Được biết, loại vi khuẩn này có thể sống trong môi trường 250 độ C.',
   exList:[
     {zh:'据悉，这种细菌忍受高温的本领远远超越了我们的想象。',py:'Jùxī, zhè zhǒng xìjūn rěnshòu gāowēn de běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng.',vn:'Được biết, khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta.'},
     {zh:'饭前一定要洗手，因为手上有很多看不见的细菌。',py:'Fàn qián yídìng yào xǐ shǒu, yīnwèi shǒu shang yǒu hěn duō kàn bu jiàn de xìjūn.',vn:'Trước khi ăn nhất định phải rửa tay, vì trên tay có rất nhiều vi khuẩn mắt thường không thấy.'},
     {zh:'高温能杀死大部分有害细菌，所以牛奶要加热后再喝。',py:'Gāowēn néng shāsǐ dà bùfen yǒuhài xìjūn, suǒyǐ niúnǎi yào jiārè hòu zài hē.',vn:'Nhiệt độ cao có thể diệt phần lớn vi khuẩn có hại, nên sữa phải đun nóng rồi mới uống.'}
   ],
   colloFull:[
     {zh:'细菌繁殖',py:'xìjūn fánzhí',vn:'vi khuẩn sinh sôi'},
     {zh:'杀死细菌',py:'shāsǐ xìjūn',vn:'diệt khuẩn'},
     {zh:'有害细菌',py:'yǒuhài xìjūn',vn:'vi khuẩn có hại'},
     {zh:'耐高温细菌',py:'nài gāowēn xìjūn',vn:'vi khuẩn chịu nhiệt cao'},
     {zh:'细菌感染',py:'xìjūn gǎnrǎn',vn:'nhiễm khuẩn'}
   ],
   patterns:[
     {s:'杀死 / 消灭 + 细菌',m:'Diệt khuẩn'},
     {s:'细菌 + 繁殖 / 感染',m:'Vi khuẩn sinh sôi / nhiễm khuẩn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không phải tất cả vi khuẩn đều có hại, có một số vi khuẩn còn có lợi cho sức khoẻ.',answer:'并不是所有的细菌都是有害的，有些细菌对健康还有好处。',answerPy:'Bìng bú shì suǒyǒu de xìjūn dōu shì yǒuhài de, yǒuxiē xìjūn duì jiànkāng hái yǒu hǎochu.',
      note:'并不是所有的……都……: không phải tất cả … đều … (phủ định một phần; 并非 ôn bài 7).',pair:'并不是所有的……都……'},
     {promptLang:'vi',prompt:'Vi khuẩn trên tay sẽ theo thức ăn vào cơ thể, vì vậy trước khi ăn nhất thiết phải rửa tay.',answer:'手上的细菌会随着食物进入身体，所以饭前务必洗手。',answerPy:'Shǒu shang de xìjūn huì suízhe shíwù jìnrù shēntǐ, suǒyǐ fàn qián wùbì xǐ shǒu.',
      note:'务必 + V: nhất thiết phải (ôn bài 12); 随着 = theo, cùng với.',pair:'务必'}
   ]},

  {n:23,zh:'过滤',py:'guòlǜ',pos:'Động từ',vn:'lọc',hv:'quá lự',em:'🫗',lesson:1,
   explain:['Cho chất lỏng / khí đi qua vật có lỗ nhỏ để giữ lại tạp chất: lọc.','Nghĩa bóng: sàng lọc thông tin: 过滤掉不良信息.'],
   usage:'过滤 + 海水 / 空气 / 杂质; 过滤掉 + N; 经过过滤; 过滤器 / 过滤网.',
   collo:['过滤海水','过滤掉杂质','过滤器','过滤信息'],
   ex_zh:'一些小动物靠过滤细菌维持生命。',ex_py:'Yìxiē xiǎo dòngwù kào guòlǜ xìjūn wéichí shēngmìng.',ex_vn:'Một số động vật nhỏ duy trì sự sống nhờ lọc vi khuẩn.',
   exList:[
     {zh:'红冠蠕虫仅靠伸出套管顶端的身体过滤海水中的食物。',py:'Hóngguān rúchóng jǐn kào shēnchū tàoguǎn dǐngduān de shēntǐ guòlǜ hǎishuǐ zhōng de shíwù.',vn:'Giun ống mào đỏ chỉ dựa vào phần thân thò ra ở đầu ống để lọc thức ăn trong nước biển.'},
     {zh:'自来水最好经过过滤再喝，这样更卫生。',py:'Zìláishuǐ zuìhǎo jīngguò guòlǜ zài hē, zhèyàng gèng wèishēng.',vn:'Nước máy tốt nhất nên qua lọc rồi mới uống, như vậy vệ sinh hơn.'},
     {zh:'这个软件能自动过滤掉垃圾短信。',py:'Zhège ruǎnjiàn néng zìdòng guòlǜ diào lājī duǎnxìn.',vn:'Phần mềm này có thể tự động lọc bỏ tin nhắn rác.'}
   ],
   colloFull:[
     {zh:'过滤海水',py:'guòlǜ hǎishuǐ',vn:'lọc nước biển'},
     {zh:'过滤掉杂质',py:'guòlǜ diào zázhì',vn:'lọc bỏ tạp chất'},
     {zh:'过滤器',py:'guòlǜqì',vn:'bộ lọc, máy lọc'},
     {zh:'过滤信息',py:'guòlǜ xìnxī',vn:'sàng lọc thông tin'},
     {zh:'经过过滤',py:'jīngguò guòlǜ',vn:'đã qua lọc'}
   ],
   patterns:[
     {s:'靠过滤 + N + 维持生命',m:'Sống nhờ lọc … (bài khoá)'},
     {s:'过滤掉 + 杂质 / 信息',m:'Lọc bỏ tạp chất / thông tin'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước giếng này phải qua lọc mới uống được, bằng không dễ bị đau bụng.',answer:'这口井里的水要经过过滤才能喝，否则容易拉肚子。',answerPy:'Zhè kǒu jǐng li de shuǐ yào jīngguò guòlǜ cái néng hē, fǒuzé róngyì lā dùzi.',
      note:'否则: bằng không, nếu không thì.',pair:'否则'},
     {promptLang:'vi',prompt:'Thông tin trên mạng quá nhiều, chúng ta phải học cách lọc bỏ những thông tin vô ích.',answer:'网上的信息太多了，我们要学会过滤掉没用的信息。',answerPy:'Wǎngshàng de xìnxī tài duō le, wǒmen yào xuéhuì guòlǜ diào méiyòng de xìnxī.',
      note:'学会 + V: học được cách …; V + 掉: bổ ngữ kết quả (bỏ đi).',pair:'V + 掉'}
   ]},

  {n:24,zh:'来源',py:'láiyuán',pos:'Danh từ',vn:'nguồn gốc, nguồn',hv:'lai nguyên',em:'🌊',lesson:1,
   explain:['Nơi bắt nguồn của sự vật: nguồn (thông tin, thu nhập, thức ăn, năng lượng…).','Còn dùng như động từ: 来源于 + N (bắt nguồn từ …). Hay gặp: 食物来源, 经济来源, 消息来源.'],
   usage:'……的来源; 食物 / 经济 / 收入 / 消息 + 来源; 来源于 + N.',
   collo:['食物来源','经济来源','消息来源','来源于'],
   ex_zh:'小动物又成了大动物的食物来源。',ex_py:'Xiǎo dòngwù yòu chéngle dà dòngwù de shíwù láiyuán.',ex_vn:'Động vật nhỏ lại trở thành nguồn thức ăn của động vật lớn.',
   exList:[
     {zh:'一些小动物靠过滤细菌维持生命，而小动物又成了大动物的食物来源。',py:'Yìxiē xiǎo dòngwù kào guòlǜ xìjūn wéichí shēngmìng, ér xiǎo dòngwù yòu chéngle dà dòngwù de shíwù láiyuán.',vn:'Một số động vật nhỏ duy trì sự sống nhờ lọc vi khuẩn, còn động vật nhỏ lại trở thành nguồn thức ăn của động vật lớn.'},
     {zh:'父亲失业以后，家里就没有了经济来源。',py:'Fùqin shīyè yǐhòu, jiāli jiù méiyǒule jīngjì láiyuán.',vn:'Sau khi bố mất việc, gia đình không còn nguồn thu nhập nữa.'},
     {zh:'这个成语来源于一个古代的故事。',py:'Zhège chéngyǔ láiyuán yú yí ge gǔdài de gùshi.',vn:'Thành ngữ này bắt nguồn từ một câu chuyện cổ.'}
   ],
   colloFull:[
     {zh:'食物来源',py:'shíwù láiyuán',vn:'nguồn thức ăn'},
     {zh:'经济来源',py:'jīngjì láiyuán',vn:'nguồn thu nhập'},
     {zh:'消息来源',py:'xiāoxi láiyuán',vn:'nguồn tin'},
     {zh:'来源于',py:'láiyuán yú',vn:'bắt nguồn từ'},
     {zh:'能量来源',py:'néngliàng láiyuán',vn:'nguồn năng lượng'}
   ],
   patterns:[
     {s:'A 成了 B 的食物来源',m:'A trở thành nguồn thức ăn của B'},
     {s:'……来源于 + N',m:'… bắt nguồn từ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nguồn của tin này không đáng tin cậy, trước khi được xác nhận thì tuyệt đối đừng chia sẻ lung tung.',answer:'这个消息的来源不可靠，在得到证实以前，千万别乱转发。',answerPy:'Zhège xiāoxi de láiyuán bù kěkào, zài dédào zhèngshí yǐqián, qiānwàn bié luàn zhuǎnfā.',
      note:'在……以前: trước khi …; 得到证实 ôn bài 16.',pair:'在……以前'},
     {promptLang:'vi',prompt:'Rất nhiều cảm hứng sáng tác của ông ấy bắt nguồn từ cuộc sống thời thơ ấu ở quê nhà.',answer:'他的很多创作灵感都来源于小时候在家乡的生活。',answerPy:'Tā de hěn duō chuàngzuò línggǎn dōu láiyuán yú xiǎoshíhou zài jiāxiāng de shēnghuó.',
      note:'来源于 + N: 于 = từ (văn viết, ôn bài 7).',pair:'……于 (ôn bài 7)'}
   ]},

  {n:25,zh:'合成',py:'héchéng',pos:'Động từ',vn:'tổng hợp, hợp thành',hv:'hợp thành',em:'⚗️',lesson:1,
   explain:['Hợp nhiều bộ phận / chất thành một chỉnh thể; trong hoá học là "tổng hợp" (tạo chất mới từ chất đơn giản).','Hay gặp: 化学合成 (trong bài), 人工合成, 合成材料, 合成照片; 由……合成.'],
   usage:'化学 / 人工 + 合成; 合成 + 材料 / 纤维 / 照片; 由 A 和 B 合成.',
   collo:['化学合成','人工合成','合成材料','合成照片'],
   ex_zh:'这种程序叫“化学合成”。',ex_py:'Zhè zhǒng chéngxù jiào "huàxué héchéng".',ex_vn:'Quá trình này gọi là "tổng hợp hoá học".',
   exList:[
     {zh:'它们靠来自地球内部的热能维持生命，这种程序叫“化学合成”。',py:'Tāmen kào láizì dìqiú nèibù de rènéng wéichí shēngmìng, zhè zhǒng chéngxù jiào "huàxué héchéng".',vn:'Chúng duy trì sự sống nhờ nhiệt năng từ lòng Trái Đất, quá trình này gọi là "tổng hợp hoá học".'},
     {zh:'这种衣服是用合成材料做的，价格便宜，但是不太透气。',py:'Zhè zhǒng yīfu shì yòng héchéng cáiliào zuò de, jiàgé piányi, dànshì bú tài tòuqì.',vn:'Loại áo này làm bằng vật liệu tổng hợp, giá rẻ nhưng không thoáng khí lắm.'},
     {zh:'这张照片是用电脑合成的，并不是真的。',py:'Zhè zhāng zhàopiàn shì yòng diànnǎo héchéng de, bìng bú shì zhēn de.',vn:'Bức ảnh này được ghép bằng máy tính, hoàn toàn không phải ảnh thật.'}
   ],
   colloFull:[
     {zh:'化学合成',py:'huàxué héchéng',vn:'tổng hợp hoá học'},
     {zh:'人工合成',py:'réngōng héchéng',vn:'tổng hợp nhân tạo'},
     {zh:'合成材料',py:'héchéng cáiliào',vn:'vật liệu tổng hợp'},
     {zh:'合成照片',py:'héchéng zhàopiàn',vn:'ghép ảnh; ảnh ghép'},
     {zh:'由……合成',py:'yóu … héchéng',vn:'do … hợp thành'}
   ],
   patterns:[
     {s:'由 A 和 B 合成（的）',m:'Do A và B hợp thành'},
     {s:'用电脑合成 + N',m:'Ghép … bằng máy tính'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức ảnh này trông rất thật, nhưng thực ra được ghép bằng máy tính.',answer:'这张照片看起来很真实，其实是用电脑合成的。',answerPy:'Zhè zhāng zhàopiàn kàn qǐlái hěn zhēnshí, qíshí shì yòng diànnǎo héchéng de.',
      note:'看起来……，其实……: trông thì …, thực ra ….',pair:'看起来……，其实……'},
     {promptLang:'vi',prompt:'Nước do hydro và oxy hợp thành, điều này ai cũng biết.',answer:'水是由氢和氧合成的，这是众所周知的。',answerPy:'Shuǐ shì yóu qīng hé yǎng héchéng de, zhè shì zhòngsuǒ-zhōuzhī de.',
      note:'是由……合成的: câu 是……的 nhấn mạnh thành phần; 众所周知 là từ của bài.',pair:'是由……的'}
   ]},

  {n:26,zh:'解放',py:'jiěfàng',pos:'Động từ',vn:'giải phóng, phóng thích',hv:'giải phóng',em:'🕊️',lesson:1,
   explain:['Giải thoát khỏi sự trói buộc, kìm kẹp (nghĩa chính trị: 解放全国, 解放军).','Nghĩa thường gặp: 解放思想 (giải phóng tư tưởng, không bị lối nghĩ cũ ràng buộc), 解放双手 (máy móc làm thay con người).'],
   usage:'解放 + 思想 / 双手 / 劳动力; 把……从……中解放出来; 得到解放.',
   collo:['解放思想','解放双手','从……中解放出来','得到解放'],
   ex_zh:'它启发人们，要解放思想。',ex_py:'Tā qǐfā rénmen, yào jiěfàng sīxiǎng.',ex_vn:'Nó gợi mở cho con người rằng phải giải phóng tư tưởng.',
   exList:[
     {zh:'它启发人们，要解放思想，迈向地球以外，探索生命存在的新路。',py:'Tā qǐfā rénmen, yào jiěfàng sīxiǎng, màixiàng dìqiú yǐwài, tànsuǒ shēngmìng cúnzài de xīn lù.',vn:'Nó gợi mở cho con người rằng phải giải phóng tư tưởng, vươn ra ngoài Trái Đất, tìm kiếm con đường mới về sự tồn tại của sự sống.'},
     {zh:'洗碗机把妈妈从繁重的家务中解放了出来。',py:'Xǐwǎnjī bǎ māma cóng fánzhòng de jiāwù zhōng jiěfàngle chūlái.',vn:'Máy rửa bát đã giải thoát mẹ khỏi việc nhà nặng nhọc.'},
     {zh:'考试终于结束了，我感觉自己彻底解放了！',py:'Kǎoshì zhōngyú jiéshù le, wǒ gǎnjué zìjǐ chèdǐ jiěfàng le!',vn:'Thi cuối cùng cũng xong rồi, tôi cảm thấy mình được giải phóng hoàn toàn!'}
   ],
   colloFull:[
     {zh:'解放思想',py:'jiěfàng sīxiǎng',vn:'giải phóng tư tưởng'},
     {zh:'解放双手',py:'jiěfàng shuāngshǒu',vn:'giải phóng đôi tay'},
     {zh:'从……中解放出来',py:'cóng … zhōng jiěfàng chūlái',vn:'giải thoát khỏi …'},
     {zh:'得到解放',py:'dédào jiěfàng',vn:'được giải phóng'},
     {zh:'彻底解放',py:'chèdǐ jiěfàng',vn:'giải phóng hoàn toàn'}
   ],
   patterns:[
     {s:'把 A 从 B 中解放出来',m:'Giải thoát A khỏi B'},
     {s:'解放思想，……',m:'Giải phóng tư tưởng, (dám nghĩ dám làm) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy móc vừa giải phóng đôi tay con người, vừa nâng cao hiệu suất làm việc.',answer:'机器既解放了人们的双手，又提高了工作效率。',answerPy:'Jīqì jì jiěfàngle rénmen de shuāngshǒu, yòu tígāole gōngzuò xiàolǜ.',
      note:'既……又……: vừa … vừa ….',pair:'既……又……'},
     {promptLang:'vi',prompt:'Muốn có phát hiện mới thì trước hết phải giải phóng tư tưởng.',answer:'要想有新的发现，就得先解放思想。',answerPy:'Yào xiǎng yǒu xīn de fāxiàn, jiù děi xiān jiěfàng sīxiǎng.',
      note:'要想……就得……: muốn … thì phải … (得 đọc děi).',pair:'要想……就得……'}
   ]},

  {n:27,zh:'迈',py:'mài',pos:'Động từ',vn:'bước, sải bước',hv:'mại',em:'🚶',lesson:1,
   explain:['Nhấc chân bước (bước dài): 迈步, 迈出一步, 迈过门槛.','Nghĩa bóng: tiến lên, hướng tới (văn viết): 迈向新时代, 迈向地球以外 (bài khoá), 迈出第一步.'],
   usage:'迈 + 步 / 腿; 迈出 + 第一步; 迈向 + 目标 / 未来 / 世界; 迈过 + N.',
   collo:['迈出第一步','迈向未来','迈开步子','迈向地球以外'],
   ex_zh:'要解放思想，迈向地球以外。',ex_py:'Yào jiěfàng sīxiǎng, màixiàng dìqiú yǐwài.',ex_vn:'Phải giải phóng tư tưởng, vươn ra ngoài Trái Đất.',
   exList:[
     {zh:'它启发人们，要解放思想，迈向地球以外，探索生命存在的新路。',py:'Tā qǐfā rénmen, yào jiěfàng sīxiǎng, màixiàng dìqiú yǐwài, tànsuǒ shēngmìng cúnzài de xīn lù.',vn:'Nó gợi mở cho con người rằng phải giải phóng tư tưởng, vươn ra ngoài Trái Đất, tìm con đường mới về sự tồn tại của sự sống.'},
     {zh:'万事开头难，只要勇敢地迈出第一步，后面就容易多了。',py:'Wànshì kāitóu nán, zhǐyào yǒnggǎn de màichū dì-yī bù, hòumian jiù róngyì duō le.',vn:'Vạn sự khởi đầu nan, chỉ cần dũng cảm bước bước đầu tiên, phía sau sẽ dễ hơn nhiều.'},
     {zh:'爷爷腿不好，迈个门槛都很吃力。',py:'Yéye tuǐ bù hǎo, mài ge ménkǎn dōu hěn chīlì.',vn:'Chân ông yếu, bước qua cái bậc cửa cũng thấy vất vả.'}
   ],
   colloFull:[
     {zh:'迈出第一步',py:'màichū dì-yī bù',vn:'bước bước đầu tiên'},
     {zh:'迈向未来',py:'màixiàng wèilái',vn:'tiến tới tương lai'},
     {zh:'迈开步子',py:'màikāi bùzi',vn:'sải bước'},
     {zh:'迈向地球以外',py:'màixiàng dìqiú yǐwài',vn:'vươn ra ngoài Trái Đất'},
     {zh:'迈过门槛',py:'màiguò ménkǎn',vn:'bước qua bậc cửa'}
   ],
   patterns:[
     {s:'迈出 + 第一步 / 关键的一步',m:'Bước bước đầu tiên / bước then chốt'},
     {s:'迈向 + 未来 / 世界 / 新时代',m:'Tiến tới tương lai / thế giới / thời đại mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất kể sau này gặp khó khăn gì, chúng ta đều phải dũng cảm bước bước đầu tiên này trước đã.',answer:'不管以后遇到什么困难，我们都要先勇敢地迈出这第一步。',answerPy:'Bùguǎn yǐhòu yùdào shénme kùnnan, wǒmen dōu yào xiān yǒnggǎn de màichū zhè dì-yī bù.',
      note:'不管……都……: bất kể … đều ….',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Cùng với sự phát triển của khoa học kỹ thuật, loài người đang từng bước tiến ra vũ trụ.',answer:'随着科技的发展，人类正一步步迈向太空。',answerPy:'Suízhe kējì de fāzhǎn, rénlèi zhèng yíbùbù màixiàng tàikōng.',
      note:'随着……: cùng với …; 一步步 = từng bước (lặp lượng từ, ôn bài 14).',pair:'随着……'}
   ]},

  {n:28,zh:'探索',py:'tànsuǒ',pos:'Động từ',vn:'thám hiểm, tìm kiếm, tìm tòi',hv:'thám sách',em:'🔭',lesson:1,
   explain:['Tìm tòi, khám phá những điều chưa biết (quy luật, bí ẩn, con đường mới) — nhấn quá trình nghiên cứu lâu dài.','Hay gặp: 探索宇宙, 探索奥秘, 探索新路, 不断探索. Gần nghĩa 探究 (đi sâu tìm hiểu nguyên nhân), 探险 (mạo hiểm thám hiểm).'],
   usage:'探索 + 奥秘 / 秘密 / 宇宙 / 新路 / 规律; 不断 / 积极 + 探索; 探索精神.',
   collo:['探索奥秘','探索宇宙','不断探索','探索精神'],
   ex_zh:'迈向地球以外，探索生命存在的新路。',ex_py:'Màixiàng dìqiú yǐwài, tànsuǒ shēngmìng cúnzài de xīn lù.',ex_vn:'Vươn ra ngoài Trái Đất, tìm kiếm con đường mới về sự tồn tại của sự sống.',
   exList:[
     {zh:'有人说，与其探索耐高温细菌的秘密，不如去探索金星上是否也有生物存在。',py:'Yǒu rén shuō, yǔqí tànsuǒ nài gāowēn xìjūn de mìmì, bùrú qù tànsuǒ Jīnxīng shang shìfǒu yě yǒu shēngwù cúnzài.',vn:'Có người nói, thay vì tìm hiểu bí mật của vi khuẩn chịu nhiệt, chi bằng đi khám phá xem trên sao Kim có sinh vật tồn tại hay không.'},
     {zh:'人类从来没有停止过探索宇宙的脚步。',py:'Rénlèi cónglái méiyǒu tíngzhǐguo tànsuǒ yǔzhòu de jiǎobù.',vn:'Loài người chưa bao giờ dừng bước khám phá vũ trụ.'},
     {zh:'科学研究需要不断探索的精神。',py:'Kēxué yánjiū xūyào búduàn tànsuǒ de jīngshén.',vn:'Nghiên cứu khoa học cần tinh thần không ngừng tìm tòi.'}
   ],
   colloFull:[
     {zh:'探索奥秘',py:'tànsuǒ àomì',vn:'khám phá bí ẩn'},
     {zh:'探索宇宙',py:'tànsuǒ yǔzhòu',vn:'khám phá vũ trụ'},
     {zh:'不断探索',py:'búduàn tànsuǒ',vn:'không ngừng tìm tòi'},
     {zh:'探索精神',py:'tànsuǒ jīngshén',vn:'tinh thần khám phá'},
     {zh:'探索新路',py:'tànsuǒ xīn lù',vn:'tìm con đường mới'}
   ],
   patterns:[
     {s:'探索 + 奥秘 / 宇宙 / 新路',m:'Khám phá bí ẩn / vũ trụ / con đường mới'},
     {s:'与其探索 A，不如探索 B',m:'Thay vì tìm tòi A, chi bằng tìm tòi B (bài khoá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì mất thời gian than phiền, chi bằng bắt tay tìm cách giải quyết vấn đề.',answer:'与其花时间抱怨，不如动手探索解决问题的办法。',answerPy:'Yǔqí huā shíjiān bàoyuàn, bùrú dòngshǒu tànsuǒ jiějué wèntí de bànfǎ.',
      note:'与其 A，不如 B: thay vì A, chi bằng B (cấu trúc trong bài khoá).',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Trẻ con trời sinh đã thích khám phá thế giới xung quanh, bố mẹ nên khuyến khích chứ không phải ngăn cản.',answer:'孩子天生就喜欢探索周围的世界，父母应该鼓励，而不是阻止。',answerPy:'Háizi tiānshēng jiù xǐhuan tànsuǒ zhōuwéi de shìjiè, fùmǔ yīnggāi gǔlì, ér bú shì zǔzhǐ.',
      note:'……，而不是……: … chứ không phải ….',pair:'……，而不是……'}
   ]},

  {n:29,zh:'据悉',py:'jùxī',pos:'Động từ',vn:'theo nguồn tin, được biết',hv:'cứ tất',em:'📰',lesson:1,
   explain:['"Theo những gì được biết" — dùng đầu câu để dẫn thông tin mà không nêu rõ nguồn; rất hay gặp trong tin tức, báo chí (văn viết).','Đứng đầu câu, sau có dấu phẩy: 据悉，……. Gần nghĩa: 据说 (khẩu ngữ, nghe nói), 据了解, 据报道 (theo báo chí).'],
   usage:'据悉，+ câu; 另据悉，……. Không có chủ ngữ, chỉ đứng đầu câu / đầu vế.',
   collo:['据悉','另据悉','据了解','据报道'],
   ex_zh:'据悉，这种细菌忍受高温的本领远远超越了我们的想象。',ex_py:'Jùxī, zhè zhǒng xìjūn rěnshòu gāowēn de běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng.',ex_vn:'Được biết, khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta.',
   exList:[
     {zh:'据悉，这种细菌能在250摄氏度的环境下生存。',py:'Jùxī, zhè zhǒng xìjūn néng zài èrbǎi wǔshí shèshìdù de huánjìng xià shēngcún.',vn:'Được biết, loại vi khuẩn này có thể sống trong môi trường 250 độ C.'},
     {zh:'据悉，今年入境旅游观光的人数已超过千万。',py:'Jùxī, jīnnián rùjìng lǚyóu guānguāng de rénshù yǐ chāoguò qiānwàn.',vn:'Theo nguồn tin, năm nay số người nhập cảnh du lịch tham quan đã vượt quá mười triệu.'},
     {zh:'据悉，这座新图书馆将于明年五月正式对外开放。',py:'Jùxī, zhè zuò xīn túshūguǎn jiāng yú míngnián wǔ yuè zhèngshì duìwài kāifàng.',vn:'Được biết, thư viện mới này sẽ chính thức mở cửa đón khách vào tháng Năm năm sau.'}
   ],
   colloFull:[
     {zh:'据悉',py:'jùxī',vn:'theo nguồn tin, được biết'},
     {zh:'另据悉',py:'lìng jùxī',vn:'ngoài ra, được biết'},
     {zh:'据了解',py:'jù liǎojiě',vn:'theo tìm hiểu'},
     {zh:'据报道',py:'jù bàodào',vn:'theo báo chí đưa tin'},
     {zh:'据说',py:'jùshuō',vn:'nghe nói'}
   ],
   patterns:[
     {s:'据悉，+ tin tức',m:'Theo nguồn tin, … (văn phong báo chí)'},
     {s:'据悉，……将于 + thời gian + V',m:'Được biết, … sẽ … vào …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Được biết, do thời tiết xấu, chuyến bay đi Bắc Kinh sẽ bị hoãn hai tiếng.',answer:'据悉，由于天气不好，飞往北京的航班将推迟两个小时。',answerPy:'Jùxī, yóuyú tiānqì bù hǎo, fēiwǎng Běijīng de hángbān jiāng tuīchí liǎng ge xiǎoshí.',
      note:'由于: do, bởi vì (văn viết); 将 = sẽ (văn viết).',pair:'由于……'},
     {promptLang:'vi',prompt:'Được biết, cuộc thi năm nay có hơn ba nghìn học sinh tham gia, gấp đôi năm ngoái.',answer:'据悉，今年的比赛有三千多名学生参加，是去年的两倍。',answerPy:'Jùxī, jīnnián de bǐsài yǒu sānqiān duō míng xuésheng cānjiā, shì qùnián de liǎng bèi.',
      note:'A 是 B 的 + 数 + 倍: A gấp … lần B.',pair:'……是……的……倍'}
   ]},

  {n:30,zh:'忍受',py:'rěnshòu',pos:'Động từ',vn:'chịu đựng',hv:'nhẫn thụ',em:'😣',lesson:1,
   explain:['Cố gắng chịu đựng (đau đớn, khó khăn, điều bất hạnh, sự đối xử bất công…).','Hay gặp: 忍受痛苦 / 高温 / 寂寞; 无法忍受, 难以忍受, 忍受不了. Khác 忍耐 (kìm nén không để cảm xúc bộc phát).'],
   usage:'忍受 + 痛苦 / 高温 / 寂寞 / 噪音; 无法 / 难以 + 忍受; 忍受不了 / 忍受得了.',
   collo:['忍受高温','忍受痛苦','无法忍受','忍受不了'],
   ex_zh:'这种细菌忍受高温的本领远远超越了我们的想象。',ex_py:'Zhè zhǒng xìjūn rěnshòu gāowēn de běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng.',ex_vn:'Khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta.',
   exList:[
     {zh:'据悉，这种细菌忍受高温的本领远远超越了我们的想象。',py:'Jùxī, zhè zhǒng xìjūn rěnshòu gāowēn de běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng.',vn:'Được biết, khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta.'},
     {zh:'邻居家的装修噪音让人难以忍受。',py:'Línjū jiā de zhuāngxiū zàoyīn ràng rén nányǐ rěnshòu.',vn:'Tiếng ồn sửa nhà của hàng xóm khiến người ta khó mà chịu nổi.'},
     {zh:'为了实现梦想，她忍受了几年孤独的训练生活。',py:'Wèile shíxiàn mèngxiǎng, tā rěnshòule jǐ nián gūdú de xùnliàn shēnghuó.',vn:'Để thực hiện ước mơ, cô ấy đã chịu đựng mấy năm tập luyện cô đơn.'}
   ],
   colloFull:[
     {zh:'忍受高温',py:'rěnshòu gāowēn',vn:'chịu nhiệt độ cao'},
     {zh:'忍受痛苦',py:'rěnshòu tòngkǔ',vn:'chịu đựng đau đớn'},
     {zh:'无法忍受',py:'wúfǎ rěnshòu',vn:'không thể chịu nổi'},
     {zh:'忍受不了',py:'rěnshòu bu liǎo',vn:'không chịu nổi'},
     {zh:'难以忍受',py:'nányǐ rěnshòu',vn:'khó mà chịu đựng'}
   ],
   patterns:[
     {s:'忍受 + 痛苦 / 高温 / 寂寞',m:'Chịu đựng đau đớn / nhiệt độ cao / cô đơn'},
     {s:'让人难以 / 无法忍受',m:'Khiến người ta khó / không thể chịu nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mấy chục năm nay, bà đã chịu đựng biết bao vất vả để nuôi ba người con khôn lớn.',answer:'几十年来，奶奶忍受了许多辛苦，把三个孩子养大成人。',answerPy:'Jǐshí nián lái, nǎinai rěnshòule xǔduō xīnkǔ, bǎ sān ge háizi yǎngdà chéngrén.',
      note:'几十年来: mấy chục năm nay (练习2 ②); 把 + O + 养大成人.',pair:'……来 (khoảng thời gian đến nay)'},
     {promptLang:'vi',prompt:'Nóng thế này tôi thật sự không chịu nổi nữa, chúng ta vào nhà bật điều hoà đi.',answer:'天这么热，我实在忍受不了了，咱们进屋开空调吧。',answerPy:'Tiān zhème rè, wǒ shízài rěnshòu bu liǎo le, zánmen jìn wū kāi kōngtiáo ba.',
      note:'V + 不了: bổ ngữ khả năng (không … nổi).',pair:'V + 不了'}
   ]},

  {n:31,zh:'超越',py:'chāoyuè',pos:'Động từ',vn:'vượt qua, hơn hẳn',hv:'siêu việt',em:'🚀',lesson:1,
   explain:['Vượt qua (giới hạn, trình độ, đối thủ, bản thân) — văn viết, trang trọng, trừu tượng hơn 超过.','Hay gặp: 超越自我, 超越想象, 超越局限, 超越前人. 超过 dùng rộng hơn, cả cho số lượng cụ thể (超过一百人).'],
   usage:'超越 + 自我 / 想象 / 极限 / 局限 / 前人; 远远超越……; 无法超越.',
   collo:['超越自我','超越想象','远远超越','超越局限'],
   ex_zh:'团结能使我们超越自身的局限。',ex_py:'Tuánjié néng shǐ wǒmen chāoyuè zìshēn de júxiàn.',ex_vn:'Đoàn kết giúp chúng ta vượt qua giới hạn của bản thân.',
   exList:[
     {zh:'这种细菌忍受高温的本领远远超越了我们的想象。',py:'Zhè zhǒng xìjūn rěnshòu gāowēn de běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng.',vn:'Khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta.'},
     {zh:'团结能使我们超越自身的局限，产生巨大的力量。',py:'Tuánjié néng shǐ wǒmen chāoyuè zìshēn de júxiàn, chǎnshēng jùdà de lìliang.',vn:'Đoàn kết giúp chúng ta vượt qua giới hạn của bản thân, tạo ra sức mạnh to lớn.'},
     {zh:'这位年轻的科学家希望有一天能超越前人，有新的发现。',py:'Zhè wèi niánqīng de kēxuéjiā xīwàng yǒu yì tiān néng chāoyuè qiánrén, yǒu xīn de fāxiàn.',vn:'Nhà khoa học trẻ này mong một ngày nào đó có thể vượt qua người đi trước, có những phát hiện mới.'}
   ],
   colloFull:[
     {zh:'超越自我',py:'chāoyuè zìwǒ',vn:'vượt qua chính mình'},
     {zh:'超越想象',py:'chāoyuè xiǎngxiàng',vn:'vượt ngoài tưởng tượng'},
     {zh:'远远超越',py:'yuǎnyuǎn chāoyuè',vn:'vượt xa'},
     {zh:'超越局限',py:'chāoyuè júxiàn',vn:'vượt qua giới hạn'},
     {zh:'超越前人',py:'chāoyuè qiánrén',vn:'vượt qua người đi trước'}
   ],
   patterns:[
     {s:'远远超越了 + 想象 / 预期',m:'Vượt xa tưởng tượng / dự tính'},
     {s:'超越 + 自我 / 局限 / 前人',m:'Vượt qua chính mình / giới hạn / người đi trước'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói danh hoạ Tề Bạch Thạch vẽ tôm mấy chục năm, bảy mươi tuổi thì đuổi kịp người xưa, rồi tiếp tục cố gắng và từ đó vượt qua người xưa.',answer:'据说，齐白石画虾数十年，七十岁时赶上了古人，后来继续努力，进而超越了古人。',answerPy:'Jùshuō, Qí Báishí huà xiā shù shí nián, qīshí suì shí gǎnshàngle gǔrén, hòulái jìxù nǔlì, jìn\'ér chāoyuèle gǔrén.',
      note:'进而: tiến thêm một bước (điểm ngữ pháp 1, 练一练 (3) của sách).',pair:'进而'},
     {promptLang:'vi',prompt:'Ý nghĩa của cuộc thi không nằm ở việc thắng người khác, mà nằm ở việc vượt qua chính mình.',answer:'比赛的意义不在于战胜别人，而在于超越自我。',answerPy:'Bǐsài de yìyì bú zàiyú zhànshèng biérén, ér zàiyú chāoyuè zìwǒ.',
      note:'不在于……而在于……: không nằm ở … mà nằm ở ….',pair:'不在于……而在于……'}
   ]},

  {n:32,zh:'摄氏度',py:'shèshìdù',pos:'Lượng từ',vn:'độ C',hv:'nhiếp thị độ',em:'🌡️',lesson:1,
   explain:['Đơn vị đo nhiệt độ theo thang Celsius, ký hiệu ℃: 250摄氏度 = 250℃.','Khẩu ngữ thường chỉ nói 度: 今天三十度. Ký hiệu "℃" đọc là 摄氏度; 零下五摄氏度 = âm 5 độ C.'],
   usage:'số + 摄氏度; 零下 + số + 摄氏度; 高于 / 低于 + số + 摄氏度.',
   collo:['250摄氏度','零下十摄氏度','高于40摄氏度','一百摄氏度'],
   ex_zh:'它们能在250摄氏度的环境下生存。',ex_py:'Tāmen néng zài èrbǎi wǔshí shèshìdù de huánjìng xià shēngcún.',ex_vn:'Chúng có thể sống trong môi trường 250 độ C.',
   exList:[
     {zh:'据悉，它们能在250摄氏度的环境下生存。',py:'Jùxī, tāmen néng zài èrbǎi wǔshí shèshìdù de huánjìng xià shēngcún.',vn:'Được biết, chúng có thể sống trong môi trường 250 độ C.'},
     {zh:'水在一百摄氏度时就会沸腾。',py:'Shuǐ zài yìbǎi shèshìdù shí jiù huì fèiténg.',vn:'Nước sẽ sôi ở 100 độ C.'},
     {zh:'哈尔滨的冬天，气温常常在零下二十摄氏度左右。',py:'Hā\'ěrbīn de dōngtiān, qìwēn chángcháng zài língxià èrshí shèshìdù zuǒyòu.',vn:'Mùa đông ở Cáp Nhĩ Tân, nhiệt độ thường vào khoảng âm 20 độ C.'}
   ],
   colloFull:[
     {zh:'250摄氏度',py:'èrbǎi wǔshí shèshìdù',vn:'250 độ C'},
     {zh:'零下十摄氏度',py:'língxià shí shèshìdù',vn:'âm 10 độ C'},
     {zh:'高于40摄氏度',py:'gāoyú sìshí shèshìdù',vn:'cao hơn 40 độ C'},
     {zh:'一百摄氏度',py:'yìbǎi shèshìdù',vn:'100 độ C'},
     {zh:'三十七摄氏度',py:'sānshíqī shèshìdù',vn:'37 độ C'}
   ],
   patterns:[
     {s:'在 + số + 摄氏度的环境下 + V',m:'(Sống / làm việc) trong môi trường … độ C'},
     {s:'高于 / 低于 + số + 摄氏度',m:'Cao hơn / thấp hơn … độ C'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi nhiệt độ cao hơn 40 độ C, phần lớn động vật và thực vật sẽ không thể sống được.',answer:'一旦温度高于40摄氏度，大部分植物和动物就无法成活。',answerPy:'Yídàn wēndù gāoyú sìshí shèshìdù, dà bùfen zhíwù hé dòngwù jiù wúfǎ chénghuó.',
      note:'一旦……就……: một khi … thì …; 高于 = cao hơn (văn viết).',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Hôm nay nhiệt độ thấp nhất là âm năm độ C, ra ngoài phải mặc thêm áo, nếu không sẽ bị cảm đấy.',answer:'今天最低气温是零下五摄氏度，出门要多穿点儿衣服，要不然会感冒的。',answerPy:'Jīntiān zuì dī qìwēn shì língxià wǔ shèshìdù, chūmén yào duō chuān diǎnr yīfu, yàobùrán huì gǎnmào de.',
      note:'要不然: nếu không thì (khẩu ngữ); 会……的 = chắc chắn sẽ ….',pair:'要不然'}
   ]},

  {n:33,zh:'丧失',py:'sàngshī',pos:'Động từ',vn:'mất đi, mất mát',hv:'táng thất',em:'💔',lesson:1,
   explain:['Mất đi (thứ vốn có, thường trừu tượng và quan trọng): 丧失生命 / 信心 / 能力 / 机会.','Văn viết, nghĩa nặng hơn 失去; tân ngữ thường là danh từ trừu tượng hai âm tiết. 丧 ở đây đọc sàng (khác 丧事 sāngshì = việc tang).'],
   usage:'丧失 + 生命 / 信心 / 能力 / 机会 / 记忆; 完全 / 逐渐 + 丧失.',
   collo:['丧失生命','丧失信心','丧失能力','丧失机会'],
   ex_zh:'高于65℃，多数细菌会丧失生命。',ex_py:'Gāoyú liùshíwǔ shèshìdù, duōshù xìjūn huì sàngshī shēngmìng.',ex_vn:'Cao hơn 65 độ C, đa số vi khuẩn sẽ chết.',
   exList:[
     {zh:'一般情况下，高于65℃，多数细菌会丧失生命。',py:'Yìbān qíngkuàng xià, gāoyú liùshíwǔ shèshìdù, duōshù xìjūn huì sàngshī shēngmìng.',vn:'Thông thường, cao hơn 65 độ C thì đa số vi khuẩn sẽ mất mạng.'},
     {zh:'失败了一次就丧失信心，这样是不可能成功的。',py:'Shībàile yí cì jiù sàngshī xìnxīn, zhèyàng shì bù kěnéng chénggōng de.',vn:'Thất bại một lần đã mất niềm tin thì không thể nào thành công được.'},
     {zh:'那场车祸以后，他暂时丧失了记忆。',py:'Nà chǎng chēhuò yǐhòu, tā zànshí sàngshīle jìyì.',vn:'Sau vụ tai nạn xe đó, anh ấy tạm thời mất trí nhớ.'}
   ],
   colloFull:[
     {zh:'丧失生命',py:'sàngshī shēngmìng',vn:'mất mạng, chết'},
     {zh:'丧失信心',py:'sàngshī xìnxīn',vn:'mất niềm tin'},
     {zh:'丧失能力',py:'sàngshī nénglì',vn:'mất khả năng'},
     {zh:'丧失机会',py:'sàngshī jīhuì',vn:'mất cơ hội'},
     {zh:'丧失记忆',py:'sàngshī jìyì',vn:'mất trí nhớ'}
   ],
   patterns:[
     {s:'丧失 + 生命 / 信心 / 能力',m:'Mất mạng / mất niềm tin / mất khả năng'},
     {s:'逐渐 / 完全 + 丧失……',m:'Dần dần / hoàn toàn mất …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cho dù thất bại rất nhiều lần, anh ấy cũng chưa bao giờ mất niềm tin.',answer:'即使失败了很多次，他也从来没有丧失过信心。',answerPy:'Jíshǐ shībàile hěn duō cì, tā yě cónglái méiyǒu sàngshīguo xìnxīn.',
      note:'即使……也……: cho dù … cũng …; 从来没有……过 (xem 历来—从来).',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Lâu ngày không luyện tập, dần dà cô ấy mất luôn khả năng nói tiếng Trung.',answer:'长时间不练习，久而久之，她就丧失了说汉语的能力。',answerPy:'Cháng shíjiān bú liànxí, jiǔ\'ér-jiǔzhī, tā jiù sàngshīle shuō Hànyǔ de nénglì.',
      note:'久而久之: lâu dần, dần dà.',pair:'久而久之'}
   ]},

  {n:34,zh:'偏偏',py:'piānpiān',pos:'Phó từ',vn:'lại, vẫn cứ; nhưng, riêng',hv:'thiên thiên',em:'😤',lesson:1,
   explain:['① Chủ quan CỐ Ý làm ngược với yêu cầu hoặc tình hình khách quan, thường đi với 要 / 不: 大家劝他别去，他偏偏要去.','② Sự thật TRÁI NGƯỢC với mong muốn, yêu cầu, lẽ thường — "trớ trêu thay, sao lại cứ …": 为什么偏偏这种细菌能够存活下来? (điểm ngữ pháp 3).'],
   usage:'偏偏 + 要 / 不 + V (cố ý làm ngược); ……，可 / 却偏偏……; 为什么偏偏 + N / V? Đứng sau chủ ngữ hoặc đầu vế.',
   collo:['偏偏要去','偏偏不听','为什么偏偏','偏偏这时候'],
   ex_zh:'为什么偏偏这种细菌能够存活下来？',ex_py:'Wèi shénme piānpiān zhè zhǒng xìjūn nénggòu cúnhuó xiàlái?',ex_vn:'Tại sao riêng loại vi khuẩn này lại sống sót được?',
   exList:[
     {zh:'高于65℃，多数细菌会丧失生命，可是，为什么偏偏这种细菌能够存活下来？',py:'Gāoyú liùshíwǔ shèshìdù, duōshù xìjūn huì sàngshī shēngmìng, kěshì, wèi shénme piānpiān zhè zhǒng xìjūn nénggòu cúnhuó xiàlái?',vn:'Cao hơn 65 độ C, đa số vi khuẩn sẽ chết, thế nhưng tại sao riêng loại vi khuẩn này lại sống sót được?'},
     {zh:'那里太危险了，大家都劝他不要去，他偏偏要去。',py:'Nàli tài wēixiǎn le, dàjiā dōu quàn tā bú yào qù, tā piānpiān yào qù.',vn:'Chỗ đó nguy hiểm quá, ai cũng khuyên anh ta đừng đi, vậy mà anh ta cứ nhất định đòi đi.'},
     {zh:'我正要出门，天偏偏下起了大雨。',py:'Wǒ zhèng yào chūmén, tiān piānpiān xià qǐle dàyǔ.',vn:'Tôi vừa định ra ngoài thì trời lại đổ mưa to.'}
   ],
   colloFull:[
     {zh:'偏偏要去',py:'piānpiān yào qù',vn:'cứ nhất định đòi đi'},
     {zh:'偏偏不听',py:'piānpiān bù tīng',vn:'cứ không chịu nghe'},
     {zh:'为什么偏偏',py:'wèi shénme piānpiān',vn:'sao lại cứ …, sao riêng …'},
     {zh:'偏偏这时候',py:'piānpiān zhè shíhou',vn:'trớ trêu đúng lúc này'},
     {zh:'可偏偏',py:'kě piānpiān',vn:'thế mà lại'}
   ],
   patterns:[
     {s:'（别人劝……），chủ ngữ + 偏偏 + 要 / 不 + V',m:'(Ai cũng khuyên …), vậy mà nó cứ nhất định … (cố ý làm ngược)'},
     {s:'……，可 / 却偏偏 + V',m:'…, trớ trêu thay lại … (trái mong muốn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi đã bảo nó đừng ăn đồ lạnh, nó cứ nhất định đòi ăn, kết quả là bị đau bụng.',answer:'我让他别吃冷的东西，他偏偏要吃，结果肚子疼了。',answerPy:'Wǒ ràng tā bié chī lěng de dōngxi, tā piānpiān yào chī, jiéguǒ dùzi téng le.',
      note:'偏偏要: cố ý làm ngược lời khuyên (cách dùng ①); 结果 nêu hậu quả.',pair:'……，结果……'},
     {promptLang:'vi',prompt:'Vé tàu đi miền Nam cũng mua rồi, khách sạn cũng đặt rồi, trớ trêu thay đúng lúc này lại đổ bệnh.',answer:'去南方旅游的火车票也买了，旅馆也订了，偏偏这时候生病了。',answerPy:'Qù nánfāng lǚyóu de huǒchēpiào yě mǎi le, lǚguǎn yě dìng le, piānpiān zhè shíhou shēngbìng le.',
      note:'A 也……了，B 也……了: liệt kê việc đã chuẩn bị; 偏偏 = trái mong muốn (cách dùng ②, 练一练 (2)).',pair:'A也……了，B也……了'}
   ]},

  {n:35,zh:'真相',py:'zhēnxiàng',pos:'Danh từ',vn:'sự thật, chân tướng',hv:'chân tướng',em:'🔍',lesson:1,
   explain:['Tình hình thật, bản chất thật của một sự việc (thường bị che giấu hoặc chưa rõ) — "chân tướng, sự thật".','Hay gặp: 探究真相, 查明真相, 了解真相, 真相大白 (sự thật được phơi bày). Khác 真理 (chân lý, quy luật khách quan).'],
   usage:'探究 / 查明 / 了解 / 说出 + 真相; 事情的真相; 真相大白.',
   collo:['探究真相','查明真相','事情的真相','真相大白'],
   ex_zh:'有人迫不及待地想探究其真相。',ex_py:'Yǒu rén pòbùjídài de xiǎng tànjiū qí zhēnxiàng.',ex_vn:'Có người nóng lòng muốn tìm hiểu chân tướng của nó.',
   exList:[
     {zh:'其中的奥秘到底是什么呢？有人迫不及待地想探究其真相。',py:'Qízhōng de àomì dàodǐ shì shénme ne? Yǒu rén pòbùjídài de xiǎng tànjiū qí zhēnxiàng.',vn:'Bí ẩn trong đó rốt cuộc là gì? Có người nóng lòng muốn tìm hiểu chân tướng của nó.'},
     {zh:'警察经过调查，终于查明了事情的真相。',py:'Jǐngchá jīngguò diàochá, zhōngyú chámíngle shìqing de zhēnxiàng.',vn:'Qua điều tra, cảnh sát cuối cùng đã làm rõ sự thật của sự việc.'},
     {zh:'不瞒你说，我一直不敢把真相告诉父母。',py:'Bù mán nǐ shuō, wǒ yìzhí bù gǎn bǎ zhēnxiàng gàosu fùmǔ.',vn:'Nói thật với cậu, tôi vẫn luôn không dám nói sự thật cho bố mẹ.'}
   ],
   colloFull:[
     {zh:'探究真相',py:'tànjiū zhēnxiàng',vn:'tìm hiểu chân tướng'},
     {zh:'查明真相',py:'chámíng zhēnxiàng',vn:'làm rõ sự thật'},
     {zh:'事情的真相',py:'shìqing de zhēnxiàng',vn:'sự thật của sự việc'},
     {zh:'真相大白',py:'zhēnxiàng-dàbái',vn:'sự thật được phơi bày'},
     {zh:'说出真相',py:'shuōchū zhēnxiàng',vn:'nói ra sự thật'}
   ],
   patterns:[
     {s:'查明 / 探究 + 真相',m:'Làm rõ / tìm hiểu sự thật'},
     {s:'把真相告诉 + người',m:'Nói sự thật cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ nghe lời một phía thì khó mà biết được sự thật của sự việc.',answer:'只听一方的话，难以了解事情的真相。',answerPy:'Zhǐ tīng yì fāng de huà, nányǐ liǎojiě shìqing de zhēnxiàng.',
      note:'难以 + V: khó mà … (ôn bài 14).',pair:'难以'},
     {promptLang:'vi',prompt:'Đợi đến khi sự thật được phơi bày, mọi người mới biết mình đã trách oan anh ấy.',answer:'等真相大白以后，大家才知道自己错怪了他。',answerPy:'Děng zhēnxiàng-dàbái yǐhòu, dàjiā cái zhīdào zìjǐ cuòguàile tā.',
      note:'等……以后，才……: đợi đến khi … mới …; 错怪 = trách oan.',pair:'等……以后，才……'}
   ]},

  {n:36,zh:'华丽',py:'huálì',pos:'Tính từ',vn:'tráng lệ, lộng lẫy, hoa lệ',hv:'hoa lệ',em:'✨',lesson:1,
   explain:['Đẹp đẽ rực rỡ, lộng lẫy (trang phục, kiến trúc, trang trí, câu chữ).','Hay gặp: 华丽的服装 / 宫殿, 华丽的辞藻 (lời văn hoa mỹ); trong bài: 强大而华丽的阵容. Có khi mang ý chê "hoa mỹ, màu mè".'],
   usage:'华丽的 + 服装 / 宫殿 / 舞台 / 辞藻; 强大而华丽; 装饰得很华丽.',
   collo:['华丽的阵容','华丽的服装','华丽的宫殿','华丽的辞藻'],
   ex_zh:'这些深海生物依然保持着它们强大而华丽的阵容。',ex_py:'Zhèxiē shēnhǎi shēngwù yīrán bǎochízhe tāmen qiángdà ér huálì de zhènróng.',ex_vn:'Những sinh vật biển sâu này vẫn giữ đội hình hùng hậu và lộng lẫy của chúng.',
   exList:[
     {zh:'不管人类怎么想，这些深海生物依然保持着它们强大而华丽的阵容。',py:'Bùguǎn rénlèi zěnme xiǎng, zhèxiē shēnhǎi shēngwù yīrán bǎochízhe tāmen qiángdà ér huálì de zhènróng.',vn:'Bất kể loài người nghĩ gì, những sinh vật biển sâu này vẫn giữ đội hình hùng hậu và lộng lẫy của chúng.'},
     {zh:'演员们穿着华丽的服装走上了舞台。',py:'Yǎnyuánmen chuānzhe huálì de fúzhuāng zǒushàngle wǔtái.',vn:'Các diễn viên khoác lên mình trang phục lộng lẫy bước lên sân khấu.'},
     {zh:'写文章不能只追求华丽的辞藻，更重要的是内容。',py:'Xiě wénzhāng bù néng zhǐ zhuīqiú huálì de cízǎo, gèng zhòngyào de shì nèiróng.',vn:'Viết văn không thể chỉ chạy theo lời lẽ hoa mỹ, quan trọng hơn là nội dung.'}
   ],
   colloFull:[
     {zh:'华丽的阵容',py:'huálì de zhènróng',vn:'đội hình lộng lẫy'},
     {zh:'华丽的服装',py:'huálì de fúzhuāng',vn:'trang phục lộng lẫy'},
     {zh:'华丽的宫殿',py:'huálì de gōngdiàn',vn:'cung điện tráng lệ'},
     {zh:'华丽的辞藻',py:'huálì de cízǎo',vn:'lời văn hoa mỹ'},
     {zh:'强大而华丽',py:'qiángdà ér huálì',vn:'hùng hậu mà lộng lẫy'}
   ],
   patterns:[
     {s:'华丽的 + 服装 / 宫殿 / 辞藻',m:'Trang phục / cung điện / lời văn lộng lẫy'},
     {s:'A 而 B (强大而华丽)',m:'Vừa A vừa B (而 nối hai tính từ, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn phòng tuy trang trí rất lộng lẫy, nhưng ở lại chẳng thoải mái chút nào.',answer:'房间虽然装饰得很华丽，住起来却一点儿也不舒服。',answerPy:'Fángjiān suīrán zhuāngshì de hěn huálì, zhù qǐlái què yìdiǎnr yě bù shūfu.',
      note:'虽然……却……: tuy … nhưng lại …; V + 起来 = khi … thì thấy.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Chiếc váy này lộng lẫy thì lộng lẫy thật, nhưng mặc đi học thì không hợp.',answer:'这条裙子华丽是华丽，可是穿去上学不合适。',answerPy:'Zhè tiáo qúnzi huálì shì huálì, kěshì chuān qù shàngxué bù héshì.',
      note:'A 是 A，可是……: … thì … thật, nhưng … (thừa nhận rồi chuyển ý).',pair:'A是A，可是……'}
   ]},

  {n:37,zh:'阵容',py:'zhènróng',pos:'Danh từ',vn:'thế trận, đội hình',hv:'trận dung',em:'🎖️',lesson:1,
   explain:['Nghĩa gốc: thế trận, dáng vẻ của một đội quân.','Nghĩa mở rộng: lực lượng, đội hình (của đội thể thao, dàn diễn viên, tập thể) — 阵容强大 / 豪华 / 整齐; trong bài dùng ví von "đoàn quân" sinh vật biển sâu.'],
   usage:'……的阵容; 阵容 + 强大 / 豪华 / 整齐; 演员阵容; 首发阵容; 调整阵容.',
   collo:['阵容强大','演员阵容','豪华阵容','首发阵容'],
   ex_zh:'这部电影的演员阵容非常强大。',ex_py:'Zhè bù diànyǐng de yǎnyuán zhènróng fēicháng qiángdà.',ex_vn:'Dàn diễn viên của bộ phim này rất hùng hậu.',
   exList:[
     {zh:'这些深海生物依然保持着它们强大而华丽的阵容，有条不紊地过着自己的日子。',py:'Zhèxiē shēnhǎi shēngwù yīrán bǎochízhe tāmen qiángdà ér huálì de zhènróng, yǒutiáo-bùwěn de guòzhe zìjǐ de rìzi.',vn:'Những sinh vật biển sâu này vẫn giữ đội hình hùng hậu và lộng lẫy của chúng, sống ngày tháng của mình một cách nề nếp.'},
     {zh:'这部电影的演员阵容非常强大，还没上映就很受关注。',py:'Zhè bù diànyǐng de yǎnyuán zhènróng fēicháng qiángdà, hái méi shàngyìng jiù hěn shòu guānzhù.',vn:'Dàn diễn viên của bộ phim này rất hùng hậu, chưa công chiếu đã được chú ý.'},
     {zh:'教练临时调整了首发阵容，结果我们队赢了。',py:'Jiàoliàn línshí tiáozhěngle shǒufā zhènróng, jiéguǒ wǒmen duì yíng le.',vn:'Huấn luyện viên điều chỉnh đội hình xuất phát vào phút chót, kết quả đội chúng tôi thắng.'}
   ],
   colloFull:[
     {zh:'阵容强大',py:'zhènróng qiángdà',vn:'đội hình hùng hậu'},
     {zh:'演员阵容',py:'yǎnyuán zhènróng',vn:'dàn diễn viên'},
     {zh:'豪华阵容',py:'háohuá zhènróng',vn:'đội hình "khủng", dàn sao'},
     {zh:'首发阵容',py:'shǒufā zhènróng',vn:'đội hình xuất phát'},
     {zh:'阵容整齐',py:'zhènróng zhěngqí',vn:'đội hình chỉnh tề'}
   ],
   patterns:[
     {s:'……的阵容 + 强大 / 豪华',m:'Đội hình … hùng hậu / "khủng"'},
     {s:'调整 + 阵容',m:'Điều chỉnh đội hình'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặc dù đội bóng có đội hình hùng hậu, nhưng nếu các cầu thủ không đoàn kết thì vẫn khó mà giành chiến thắng.',answer:'尽管球队阵容强大，可是如果队员们不团结，还是难以取胜。',answerPy:'Jǐnguǎn qiúduì zhènróng qiángdà, kěshì rúguǒ duìyuánmen bù tuánjié, háishi nányǐ qǔshèng.',
      note:'尽管……可是……: mặc dù … nhưng …; 难以 ôn bài 14.',pair:'尽管……可是……'},
     {promptLang:'vi',prompt:'Dàn diễn viên của đêm văn nghệ năm nay còn hùng hậu hơn cả năm ngoái.',answer:'今年晚会的演员阵容比去年还要强大。',answerPy:'Jīnnián wǎnhuì de yǎnyuán zhènróng bǐ qùnián hái yào qiángdà.',
      note:'A 比 B 还要 + adj: A còn … hơn cả B.',pair:'A比B还要……'}
   ]},

  {n:38,zh:'有条不紊',py:'yǒutiáo-bùwěn',pos:'Thành ngữ',vn:'gọn gàng ngăn nắp, có trật tự, đâu ra đấy',hv:'hữu điều bất vặn',em:'🗂️',lesson:1,
   explain:['Có thứ tự, có trật tự, không hề rối loạn (条 = thứ tự, 紊 = rối).','Dùng cho cách làm việc, lời nói, sự sắp xếp: 有条不紊地 + V (làm trạng ngữ), hoặc làm vị ngữ / bổ ngữ: 各项工作有条不紊, 安排得有条不紊.'],
   usage:'有条不紊地 + V (进行 / 处理 / 安排 / 过日子); ……（安排得）有条不紊.',
   collo:['有条不紊地进行','有条不紊地处理','有条不紊地过日子','安排得有条不紊'],
   ex_zh:'这些深海生物有条不紊地过着自己的日子。',ex_py:'Zhèxiē shēnhǎi shēngwù yǒutiáo-bùwěn de guòzhe zìjǐ de rìzi.',ex_vn:'Những sinh vật biển sâu này sống ngày tháng của mình một cách nề nếp.',
   exList:[
     {zh:'这些深海生物有条不紊地过着自己的日子，展现着它们独特的精彩。',py:'Zhèxiē shēnhǎi shēngwù yǒutiáo-bùwěn de guòzhe zìjǐ de rìzi, zhǎnxiànzhe tāmen dútè de jīngcǎi.',vn:'Những sinh vật biển sâu này sống ngày tháng của mình một cách nề nếp, phô bày nét đặc sắc riêng.'},
     {zh:'虽然工作很多，但她总能有条不紊地处理好每一件事。',py:'Suīrán gōngzuò hěn duō, dàn tā zǒng néng yǒutiáo-bùwěn de chǔlǐ hǎo měi yí jiàn shì.',vn:'Tuy việc rất nhiều nhưng cô ấy luôn xử lý mọi việc đâu ra đấy.'},
     {zh:'在校长的安排下，各项准备工作正有条不紊地进行着。',py:'Zài xiàozhǎng de ānpái xià, gè xiàng zhǔnbèi gōngzuò zhèng yǒutiáo-bùwěn de jìnxíngzhe.',vn:'Dưới sự sắp xếp của hiệu trưởng, mọi công tác chuẩn bị đang được tiến hành có trật tự.'}
   ],
   colloFull:[
     {zh:'有条不紊地进行',py:'yǒutiáo-bùwěn de jìnxíng',vn:'tiến hành có trật tự'},
     {zh:'有条不紊地处理',py:'yǒutiáo-bùwěn de chǔlǐ',vn:'xử lý đâu ra đấy'},
     {zh:'有条不紊地过日子',py:'yǒutiáo-bùwěn de guò rìzi',vn:'sống nề nếp'},
     {zh:'安排得有条不紊',py:'ānpái de yǒutiáo-bùwěn',vn:'sắp xếp đâu ra đấy'},
     {zh:'说话有条不紊',py:'shuōhuà yǒutiáo-bùwěn',vn:'nói năng mạch lạc'}
   ],
   patterns:[
     {s:'有条不紊地 + V',m:'… một cách có trật tự, đâu ra đấy'},
     {s:'各项工作 + 有条不紊地进行着',m:'Mọi công việc đang tiến hành có trật tự'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc có nhiều đến đâu, mẹ tôi cũng luôn sắp xếp mọi thứ đâu ra đấy.',answer:'事情再多，妈妈也总能把一切安排得有条不紊。',answerPy:'Shìqing zài duō, māma yě zǒng néng bǎ yíqiè ānpái de yǒutiáo-bùwěn.',
      note:'再……也……: dù … đến mấy cũng …; 把 + O + V得 + bổ ngữ.',pair:'把……V得……'},
     {promptLang:'vi',prompt:'Trước kỳ thi, cậu ấy chẳng hề hoảng hốt, mà ôn tập từng môn một cách có trật tự.',answer:'考试前，他一点儿也不慌，而是有条不紊地一门一门复习。',answerPy:'Kǎoshì qián, tā yìdiǎnr yě bù huāng, ér shì yǒutiáo-bùwěn de yì mén yì mén fùxí.',
      note:'一点儿也不……: chẳng … chút nào; 一门一门 = từng môn một (lặp lượng từ, ôn bài 14).',pair:'一点儿也不……'}
   ]},

  {n:39,zh:'展现',py:'zhǎnxiàn',pos:'Động từ',vn:'bày ra, hiện ra, thể hiện',hv:'triển hiện',em:'🎨',lesson:1,
   explain:['Hiện rõ ra, bày ra trước mắt (cảnh vật, sự vật): 展现在眼前.','Thể hiện, phô bày (tài năng, vẻ đẹp, phong cách): 展现才华, 展现魅力; trong bài: 展现着他们独特的精彩.'],
   usage:'……展现在 + nơi (眼前); 展现 + 才华 / 魅力 / 风采 / 精彩; 充分展现.',
   collo:['展现在眼前','展现才华','展现魅力','充分展现'],
   ex_zh:'它们展现着自己独特的精彩。',ex_py:'Tāmen zhǎnxiànzhe zìjǐ dútè de jīngcǎi.',ex_vn:'Chúng phô bày nét đặc sắc riêng của mình.',
   exList:[
     {zh:'这些深海生物有条不紊地过着自己的日子，展现着他们独特的精彩。',py:'Zhèxiē shēnhǎi shēngwù yǒutiáo-bùwěn de guòzhe zìjǐ de rìzi, zhǎnxiànzhe tāmen dútè de jīngcǎi.',vn:'Những sinh vật biển sâu này sống ngày tháng của mình một cách nề nếp, phô bày nét đặc sắc riêng.'},
     {zh:'走进办公室，鲜花和蛋糕展现在我眼前。',py:'Zǒujìn bàngōngshì, xiānhuā hé dàngāo zhǎnxiàn zài wǒ yǎnqián.',vn:'Bước vào văn phòng, hoa tươi và bánh kem hiện ra trước mắt tôi.'},
     {zh:'这次比赛给了年轻人一个展现才华的机会。',py:'Zhè cì bǐsài gěile niánqīngrén yí ge zhǎnxiàn cáihuá de jīhuì.',vn:'Cuộc thi lần này cho người trẻ một cơ hội thể hiện tài năng.'}
   ],
   colloFull:[
     {zh:'展现在眼前',py:'zhǎnxiàn zài yǎnqián',vn:'hiện ra trước mắt'},
     {zh:'展现才华',py:'zhǎnxiàn cáihuá',vn:'thể hiện tài năng'},
     {zh:'展现魅力',py:'zhǎnxiàn mèilì',vn:'thể hiện sức hút'},
     {zh:'充分展现',py:'chōngfèn zhǎnxiàn',vn:'thể hiện đầy đủ'},
     {zh:'展现风采',py:'zhǎnxiàn fēngcǎi',vn:'thể hiện phong thái'}
   ],
   patterns:[
     {s:'……展现在 + 眼前',m:'… hiện ra trước mắt'},
     {s:'展现 + 才华 / 魅力 / 精彩',m:'Thể hiện tài năng / sức hút / nét đặc sắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa leo lên tới đỉnh núi, một biển mây mênh mông đã hiện ra trước mắt chúng tôi.',answer:'刚爬上山顶，一片广阔的云海就展现在我们眼前了。',answerPy:'Gāng pá shàng shāndǐng, yí piàn guǎngkuò de yúnhǎi jiù zhǎnxiàn zài wǒmen yǎnqián le.',
      note:'刚……就……: vừa … đã …; 广阔 là từ của bài.',pair:'刚……就……'},
     {promptLang:'vi',prompt:'Cuộc thi này không chỉ là cơ hội thể hiện tài năng, mà cũng là cơ hội học hỏi lẫn nhau.',answer:'这次比赛不仅是展现才华的机会，也是互相学习的机会。',answerPy:'Zhè cì bǐsài bùjǐn shì zhǎnxiàn cáihuá de jīhuì, yě shì hùxiāng xuéxí de jīhuì.',
      note:'不仅……也……: không chỉ … mà cũng ….',pair:'不仅……也……'}
   ]},

  {n:40,zh:'丛',py:'cóng',pos:'Lượng từ',vn:'khóm, bụi, đám, chùm',hv:'tùng',em:'🌿',lesson:1,
   explain:['Lượng từ cho cây cỏ mọc sát nhau thành bụi, khóm, hoặc vật tụ lại thành đám: 一丛花, 一丛竹子.','Lặp lại 一丛丛 / 一丛一丛 = từng khóm từng bụi (nhấn nhiều — lặp lượng từ ôn bài 14). Còn là danh từ: 草丛 (bụi cỏ), 花丛, 树丛.'],
   usage:'一丛 + 花 / 草 / 竹子; 一丛丛 + N; 草丛 / 树丛 / 花丛.',
   collo:['一丛丛','一丛花','一丛竹子','草丛'],
   ex_zh:'一丛丛红冠蠕虫，把白色外套管固定在岩石上。',ex_py:'Yì cóngcóng hóngguān rúchóng, bǎ báisè wàitàoguǎn gùdìng zài yánshí shang.',ex_vn:'Từng cụm giun ống mào đỏ gắn chặt lớp ống vỏ màu trắng lên đá.',
   exList:[
     {zh:'一丛丛红冠蠕虫，把白色外套管固定在岩石上，保护着自己柔软的身体。',py:'Yì cóngcóng hóngguān rúchóng, bǎ báisè wàitàoguǎn gùdìng zài yánshí shang, bǎohùzhe zìjǐ róuruǎn de shēntǐ.',vn:'Từng cụm giun ống mào đỏ gắn chặt lớp ống vỏ màu trắng lên đá, bảo vệ thân mình mềm mại.'},
     {zh:'院子的角落里种着一丛竹子，风一吹沙沙作响。',py:'Yuànzi de jiǎoluò li zhòngzhe yì cóng zhúzi, fēng yì chuī shāshā zuò xiǎng.',vn:'Góc sân trồng một bụi tre, gió thổi là xào xạc.'},
     {zh:'小猫躲在草丛里，一动也不动。',py:'Xiǎo māo duǒ zài cǎocóng li, yí dòng yě bú dòng.',vn:'Chú mèo con nấp trong bụi cỏ, nằm im không nhúc nhích.'}
   ],
   colloFull:[
     {zh:'一丛丛',py:'yì cóngcóng',vn:'từng khóm từng bụi'},
     {zh:'一丛花',py:'yì cóng huā',vn:'một khóm hoa'},
     {zh:'一丛竹子',py:'yì cóng zhúzi',vn:'một bụi tre'},
     {zh:'草丛',py:'cǎocóng',vn:'bụi cỏ'},
     {zh:'花丛',py:'huācóng',vn:'khóm hoa'}
   ],
   patterns:[
     {s:'一丛 + 花 / 草 / 竹子',m:'Một khóm hoa / bụi cỏ / bụi tre'},
     {s:'一丛丛 + N',m:'Từng khóm từng bụi … (nhấn số lượng nhiều)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai bên đường mọc từng khóm hoa dại, đẹp khỏi phải nói.',answer:'路两边长着一丛丛野花，别提多美了。',answerPy:'Lù liǎngbiān zhǎngzhe yì cóngcóng yěhuā, biétí duō měi le.',
      note:'别提多……了: … khỏi phải nói (ôn bài 1); câu tồn hiện Nơi + V着 + N.',pair:'别提多……了'},
     {promptLang:'vi',prompt:'Nhìn kỹ thì sẽ phát hiện trong bụi cỏ có một chú thỏ con đang trốn.',answer:'仔细一看，就会发现草丛里躲着一只小兔子。',answerPy:'Zǐxì yí kàn, jiù huì fāxiàn cǎocóng li duǒzhe yì zhī xiǎo tùzi.',
      note:'Nơi + V着 + N: câu tồn hiện (ở đâu có cái gì đang …).',pair:'Nơi + V着 + N (câu tồn hiện)'}
   ]},

  {n:41,zh:'体积',py:'tǐjī',pos:'Danh từ',vn:'thể tích, kích thước',hv:'thể tích',em:'📦',lesson:1,
   explain:['Khoảng không gian mà một vật chiếm — "thể tích, khối, kích thước".','Hay gặp: 体积大 / 小, 体积庞大 (trong bài); phân biệt 面积 (diện tích), 重量 (trọng lượng).'],
   usage:'体积 + 大 / 小 / 庞大; ……的体积是……; 体积小，便于携带.',
   collo:['体积庞大','体积小','计算体积','体积和重量'],
   ex_zh:'体积庞大的巨蛤使人迷惑不解。',ex_py:'Tǐjī pángdà de jùgé shǐ rén míhuò bù jiě.',ex_vn:'Những con sò khổng lồ kích thước đồ sộ khiến người ta khó hiểu.',
   exList:[
     {zh:'体积庞大的巨蛤，造型奇特的白蚌，都使人迷惑不解。',py:'Tǐjī pángdà de jùgé, zàoxíng qítè de báibàng, dōu shǐ rén míhuò bù jiě.',vn:'Những con sò khổng lồ kích thước đồ sộ, những con trai trắng hình dáng kỳ lạ, đều khiến người ta khó hiểu.'},
     {zh:'这种新型电脑体积小，便于携带。',py:'Zhè zhǒng xīnxíng diànnǎo tǐjī xiǎo, biànyú xiédài.',vn:'Loại máy tính kiểu mới này nhỏ gọn, tiện mang theo.'},
     {zh:'冰的体积比同样重量的水要大一些。',py:'Bīng de tǐjī bǐ tóngyàng zhòngliàng de shuǐ yào dà yìxiē.',vn:'Thể tích của băng lớn hơn một chút so với nước cùng khối lượng.'}
   ],
   colloFull:[
     {zh:'体积庞大',py:'tǐjī pángdà',vn:'kích thước đồ sộ'},
     {zh:'体积小',py:'tǐjī xiǎo',vn:'nhỏ gọn'},
     {zh:'计算体积',py:'jìsuàn tǐjī',vn:'tính thể tích'},
     {zh:'体积和重量',py:'tǐjī hé zhòngliàng',vn:'thể tích và trọng lượng'},
     {zh:'缩小体积',py:'suōxiǎo tǐjī',vn:'thu nhỏ kích thước'}
   ],
   patterns:[
     {s:'体积 + 庞大 / 小',m:'Kích thước đồ sộ / nhỏ gọn'},
     {s:'体积小，便于 + V',m:'Nhỏ gọn, tiện cho … (便于 ôn bài 13)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy này chỉ to bằng một cuốn sách, vì vậy rất tiện mang theo.',answer:'这台机器的体积只有一本书那么大，所以非常便于携带。',answerPy:'Zhè tái jīqì de tǐjī zhǐyǒu yì běn shū nàme dà, suǒyǐ fēicháng biànyú xiédài.',
      note:'只有……那么 + adj: chỉ … cỡ …; 便于 + V ôn bài 13.',pair:'只有……那么……'},
     {promptLang:'vi',prompt:'Động vật có kích thước càng lớn thì cần càng nhiều thức ăn.',answer:'动物的体积越大，需要的食物就越多。',answerPy:'Dòngwù de tǐjī yuè dà, xūyào de shíwù jiù yuè duō.',
      note:'……越……，……就越……: càng … thì càng ….',pair:'越……就越……'}
   ]},

  {n:42,zh:'造型',py:'zàoxíng',pos:'Danh từ',vn:'kiểu dáng, hình dáng, sự tạo hình',hv:'tạo hình',em:'🗿',lesson:1,
   explain:['Hình dáng, kiểu dáng được tạo ra của một vật (đồ vật, công trình, nhân vật): 造型奇特, 造型美观.','Còn dùng như động từ "tạo hình": 人物造型, 造型师 (nhà tạo mẫu).'],
   usage:'造型 + 奇特 / 美观 / 独特 / 简单; ……的造型像……; 造型师.',
   collo:['造型奇特','造型美观','独特的造型','造型师'],
   ex_zh:'造型奇特的白蚌使人迷惑不解。',ex_py:'Zàoxíng qítè de báibàng shǐ rén míhuò bù jiě.',ex_vn:'Những con trai trắng hình dáng kỳ lạ khiến người ta khó hiểu.',
   exList:[
     {zh:'体积庞大的巨蛤，造型奇特的白蚌，它们的生理结构都使人迷惑不解。',py:'Tǐjī pángdà de jùgé, zàoxíng qítè de báibàng, tāmen de shēnglǐ jiégòu dōu shǐ rén míhuò bù jiě.',vn:'Sò khổng lồ kích thước đồ sộ, trai trắng hình dáng kỳ lạ — cấu tạo sinh lý của chúng đều khiến người ta khó hiểu.'},
     {zh:'这座大楼的造型像一只展翅的大鸟，吸引了很多游客。',py:'Zhè zuò dàlóu de zàoxíng xiàng yì zhī zhǎnchì de dà niǎo, xīyǐnle hěn duō yóukè.',vn:'Toà nhà này có hình dáng như một con chim lớn dang cánh, thu hút rất nhiều du khách.'},
     {zh:'这款手机造型美观，价格也不贵。',py:'Zhè kuǎn shǒujī zàoxíng měiguān, jiàgé yě bú guì.',vn:'Mẫu điện thoại này kiểu dáng đẹp, giá cũng không đắt.'}
   ],
   colloFull:[
     {zh:'造型奇特',py:'zàoxíng qítè',vn:'hình dáng kỳ lạ'},
     {zh:'造型美观',py:'zàoxíng měiguān',vn:'kiểu dáng đẹp'},
     {zh:'独特的造型',py:'dútè de zàoxíng',vn:'kiểu dáng độc đáo'},
     {zh:'造型师',py:'zàoxíngshī',vn:'nhà tạo mẫu'},
     {zh:'人物造型',py:'rénwù zàoxíng',vn:'tạo hình nhân vật'}
   ],
   patterns:[
     {s:'造型 + 奇特 / 美观 / 独特',m:'Kiểu dáng kỳ lạ / đẹp / độc đáo'},
     {s:'……的造型像……',m:'Hình dáng của … giống …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kiểu dáng chiếc cốc này giống hệt một quả táo, dễ thương vô cùng.',answer:'这个杯子的造型跟苹果一模一样，可爱极了。',answerPy:'Zhège bēizi de zàoxíng gēn píngguǒ yìmú-yíyàng, kě\'ài jí le.',
      note:'跟……一模一样: giống hệt …; adj + 极了 = … vô cùng.',pair:'跟……一模一样'},
     {promptLang:'vi',prompt:'Công trình này ngoài kiểu dáng độc đáo ra còn rất thân thiện với môi trường.',answer:'这座建筑除了造型独特以外，还非常环保。',answerPy:'Zhè zuò jiànzhù chúle zàoxíng dútè yǐwài, hái fēicháng huánbǎo.',
      note:'除了……以外，还……: ngoài … ra còn … (bổ sung).',pair:'除了……以外，还……'}
   ]},

  {n:43,zh:'迷惑',py:'míhuò',pos:'Tính từ',vn:'mê muội, mơ hồ, bối rối khó hiểu',hv:'mê hoặc',em:'🌀',lesson:1,
   explain:['Tính từ: bối rối, không hiểu nổi, mơ hồ không phân biệt được: 感到迷惑, 迷惑不解 (trong bài).','Động từ: làm cho mê muội, đánh lừa: 被表面现象迷惑. Lưu ý: tiếng Việt "mê hoặc" thường hiểu là "quyến rũ làm mê", hẹp hơn nghĩa của 迷惑.'],
   usage:'感到迷惑; 迷惑不解; 使人 / 让人 + 迷惑（不解）; 被……迷惑 (bị … đánh lừa).',
   collo:['迷惑不解','感到迷惑','使人迷惑','被表面现象迷惑'],
   ex_zh:'它们的门类归属，都使人迷惑不解。',ex_py:'Tāmen de ménlèi guīshǔ, dōu shǐ rén míhuò bù jiě.',ex_vn:'Việc chúng thuộc ngành loài nào cũng đều khiến người ta khó hiểu.',
   exList:[
     {zh:'它们的生理结构，食物基础，甚至它们的门类归属，都使人迷惑不解。',py:'Tāmen de shēnglǐ jiégòu, shíwù jīchǔ, shènzhì tāmen de ménlèi guīshǔ, dōu shǐ rén míhuò bù jiě.',vn:'Cấu tạo sinh lý, nguồn thức ăn cơ bản, thậm chí việc chúng thuộc ngành loài nào, đều khiến người ta khó hiểu.'},
     {zh:'看着这道奇怪的数学题，同学们都感到很迷惑。',py:'Kànzhe zhè dào qíguài de shùxué tí, tóngxuémen dōu gǎndào hěn míhuò.',vn:'Nhìn bài toán kỳ lạ này, các bạn học sinh đều thấy rất bối rối.'},
     {zh:'我们不能被表面现象迷惑，要看清问题的本质。',py:'Wǒmen bù néng bèi biǎomiàn xiànxiàng míhuò, yào kànqīng wèntí de běnzhì.',vn:'Chúng ta không được để hiện tượng bề ngoài đánh lừa, phải nhìn rõ bản chất của vấn đề.'}
   ],
   colloFull:[
     {zh:'迷惑不解',py:'míhuò bù jiě',vn:'bối rối không hiểu'},
     {zh:'感到迷惑',py:'gǎndào míhuò',vn:'cảm thấy mơ hồ'},
     {zh:'使人迷惑',py:'shǐ rén míhuò',vn:'khiến người ta khó hiểu'},
     {zh:'被表面现象迷惑',py:'bèi biǎomiàn xiànxiàng míhuò',vn:'bị hiện tượng bề ngoài đánh lừa'},
     {zh:'迷惑的眼神',py:'míhuò de yǎnshén',vn:'ánh mắt bối rối'}
   ],
   patterns:[
     {s:'……都使人 / 让人迷惑不解',m:'… đều khiến người ta khó hiểu'},
     {s:'被 + N + 迷惑',m:'Bị … đánh lừa, làm mê muội'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điều khiến các nhà khoa học khó hiểu là, loại vi khuẩn này lại có thể sống trong môi trường 250 độ C.',answer:'让科学家迷惑不解的是，这种细菌竟然能在250摄氏度的环境下生存。',answerPy:'Ràng kēxuéjiā míhuò bù jiě de shì, zhè zhǒng xìjūn jìngrán néng zài èrbǎi wǔshí shèshìdù de huánjìng xià shēngcún.',
      note:'让……的是，……: điều khiến … là …; 竟然 = lại (ngoài dự đoán).',pair:'让……的是'},
     {promptLang:'vi',prompt:'Đừng để quảng cáo đánh lừa, trước khi mua hãy so sánh thêm vài cửa hàng.',answer:'别被广告迷惑了，买之前要多比较几家。',answerPy:'Bié bèi guǎnggào míhuò le, mǎi zhīqián yào duō bǐjiào jǐ jiā.',
      note:'被 + N + V: câu bị động; 多 + V + số lượng = … thêm vài ….',pair:'被 + N + V'}
   ]},

  {n:44,zh:'广阔',py:'guǎngkuò',pos:'Tính từ',vn:'bao la, rộng lớn, mênh mông',hv:'quảng khoát',em:'🌌',lesson:1,
   explain:['Rộng lớn, bao la (không gian): 广阔的草原 / 海洋 / 天空.','Nghĩa bóng: (tiền đồ, tầm nhìn, triển vọng) rộng mở: 前景广阔, 视野广阔.'],
   usage:'广阔的 + 草原 / 海洋 / 天地 / 世界; 前景 / 视野 / 市场 + 广阔; 神秘而广阔.',
   collo:['广阔的海洋','广阔的天地','前景广阔','视野广阔'],
   ex_zh:'这片神秘而广阔的深海世界能为我们提供新的食物资源吗？',ex_py:'Zhè piàn shénmì ér guǎngkuò de shēnhǎi shìjiè néng wèi wǒmen tígōng xīn de shíwù zīyuán ma?',ex_vn:'Thế giới biển sâu huyền bí và bao la này có thể cung cấp cho chúng ta nguồn thức ăn mới không?',
   exList:[
     {zh:'这片神秘而广阔的深海世界能为我们提供新的食物资源吗？',py:'Zhè piàn shénmì ér guǎngkuò de shēnhǎi shìjiè néng wèi wǒmen tígōng xīn de shíwù zīyuán ma?',vn:'Thế giới biển sâu huyền bí và bao la này có thể cung cấp cho chúng ta nguồn thức ăn mới không?'},
     {zh:'站在山顶上，看着广阔的草原，我的心情一下子开朗了。',py:'Zhàn zài shāndǐng shang, kànzhe guǎngkuò de cǎoyuán, wǒ de xīnqíng yíxiàzi kāilǎng le.',vn:'Đứng trên đỉnh núi nhìn thảo nguyên bao la, lòng tôi bỗng chốc nhẹ nhõm hẳn.'},
     {zh:'人工智能这个行业发展前景十分广阔。',py:'Réngōng zhìnéng zhège hángyè fāzhǎn qiánjǐng shífēn guǎngkuò.',vn:'Ngành trí tuệ nhân tạo có triển vọng phát triển hết sức rộng mở.'}
   ],
   colloFull:[
     {zh:'广阔的海洋',py:'guǎngkuò de hǎiyáng',vn:'đại dương mênh mông'},
     {zh:'广阔的天地',py:'guǎngkuò de tiāndì',vn:'trời đất bao la'},
     {zh:'前景广阔',py:'qiánjǐng guǎngkuò',vn:'triển vọng rộng mở'},
     {zh:'视野广阔',py:'shìyě guǎngkuò',vn:'tầm nhìn rộng'},
     {zh:'广阔的草原',py:'guǎngkuò de cǎoyuán',vn:'thảo nguyên bao la'}
   ],
   patterns:[
     {s:'神秘而广阔的 + N',m:'… vừa huyền bí vừa bao la (而 nối hai tính từ)'},
     {s:'前景 / 视野 + 广阔',m:'Triển vọng / tầm nhìn rộng mở'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vùng này đất rộng người thưa, bốn bề đều là thảo nguyên bao la.',answer:'这个地方地广人稀，四周都是广阔的草原。',answerPy:'Zhège dìfang dìguǎng-rénxī, sìzhōu dōu shì guǎngkuò de cǎoyuán.',
      note:'地广人稀: đất rộng người thưa; 四周都是…… = bốn bề đều là ….',pair:'四周都是……'},
     {promptLang:'vi',prompt:'Học ngoại ngữ không chỉ giúp chúng ta tìm được việc tốt hơn, mà còn khiến tầm nhìn của chúng ta rộng mở hơn.',answer:'学外语不仅能帮助我们找到更好的工作，还能使我们的视野更加广阔。',answerPy:'Xué wàiyǔ bùjǐn néng bāngzhù wǒmen zhǎodào gèng hǎo de gōngzuò, hái néng shǐ wǒmen de shìyě gèngjiā guǎngkuò.',
      note:'使 + N + 更加 + adj: khiến … thêm ….',pair:'使……更加……'}
   ]},

  {n:45,zh:'奇妙',py:'qímiào',pos:'Tính từ',vn:'kỳ diệu, tuyệt diệu',hv:'kỳ diệu',em:'🪄',lesson:1,
   explain:['Lạ lùng, thú vị một cách tuyệt vời, khiến người ta thích thú và ngạc nhiên (sắc thái TÍCH CỰC).','Hay gặp: 奇妙的世界 / 感觉 / 变化, 大自然真奇妙. Khác 奇怪 (lạ, khó hiểu, trung tính) và 古怪 (quái lạ, hơi tiêu cực).'],
   usage:'奇妙的 + 世界 / 感觉 / 变化 / 旅程; ……真奇妙; 奇妙极了.',
   collo:['奇妙的世界','奇妙的感觉','奇妙的变化','奇妙的旅程'],
   ex_zh:'这片深海世界能成为奇妙的科学研究基地吗？',ex_py:'Zhè piàn shēnhǎi shìjiè néng chéngwéi qímiào de kēxué yánjiū jīdì ma?',ex_vn:'Thế giới biển sâu này có thể trở thành một căn cứ nghiên cứu khoa học kỳ diệu không?',
   exList:[
     {zh:'这篇文章给我们描述了一个奇妙的深海世界。',py:'Zhè piān wénzhāng gěi wǒmen miáoshùle yí ge qímiào de shēnhǎi shìjiè.',vn:'Bài văn này miêu tả cho chúng ta một thế giới biển sâu kỳ diệu.'},
     {zh:'大自然真奇妙，小小的种子能长成参天大树。',py:'Dàzìrán zhēn qímiào, xiǎoxiǎo de zhǒngzi néng zhǎngchéng cāntiān dà shù.',vn:'Thiên nhiên thật kỳ diệu, hạt giống nhỏ xíu có thể lớn thành cây đại thụ chọc trời.'},
     {zh:'第一次在海底潜水，那种感觉奇妙极了。',py:'Dì-yī cì zài hǎidǐ qiánshuǐ, nà zhǒng gǎnjué qímiào jí le.',vn:'Lần đầu lặn dưới đáy biển, cảm giác ấy kỳ diệu vô cùng.'}
   ],
   colloFull:[
     {zh:'奇妙的世界',py:'qímiào de shìjiè',vn:'thế giới kỳ diệu'},
     {zh:'奇妙的感觉',py:'qímiào de gǎnjué',vn:'cảm giác tuyệt diệu'},
     {zh:'奇妙的变化',py:'qímiào de biànhuà',vn:'biến đổi kỳ diệu'},
     {zh:'奇妙的旅程',py:'qímiào de lǚchéng',vn:'hành trình kỳ thú'},
     {zh:'大自然真奇妙',py:'dàzìrán zhēn qímiào',vn:'thiên nhiên thật kỳ diệu'}
   ],
   patterns:[
     {s:'奇妙的 + 世界 / 感觉 / 变化',m:'Thế giới / cảm giác / biến đổi kỳ diệu'},
     {s:'……真奇妙 / 奇妙极了',m:'… thật kỳ diệu / kỳ diệu vô cùng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần đầu tiên nhìn thấy tuyết, cảm giác ấy kỳ diệu đến mức tôi không biết phải tả thế nào.',answer:'第一次看到雪，那种感觉奇妙得让我不知道该怎么形容。',answerPy:'Dì-yī cì kàndào xuě, nà zhǒng gǎnjué qímiào de ràng wǒ bù zhīdào gāi zěnme xíngróng.',
      note:'adj + 得 + 让……: … đến mức khiến ….',pair:'……得让……'},
     {promptLang:'vi',prompt:'Thế giới đã kỳ diệu như vậy, chúng ta nên giữ lòng hiếu kỳ, không ngừng khám phá.',answer:'既然世界这么奇妙，我们就应该保持好奇心，不断去探索。',answerPy:'Jìrán shìjiè zhème qímiào, wǒmen jiù yīnggāi bǎochí hàoqíxīn, búduàn qù tànsuǒ.',
      note:'既然……就……: đã … thì …; 探索 là từ của bài.',pair:'既然……就……'}
   ]},

  {n:46,zh:'基地',py:'jīdì',pos:'Danh từ',vn:'căn cứ, cơ sở, nền tảng',hv:'cơ địa',em:'🏗️',lesson:1,
   explain:['Nơi làm căn cứ, cơ sở cho một hoạt động nào đó (nghiên cứu, huấn luyện, sản xuất, quân sự).','Hay gặp: 科学研究基地, 训练基地, 生产基地, 军事基地; 建立 / 成为 + ……基地.'],
   usage:'科研 / 训练 / 生产 / 教育 + 基地; 建立 / 成为 + ……基地.',
   collo:['研究基地','训练基地','生产基地','建立基地'],
   ex_zh:'这片深海世界能成为奇妙的科学研究基地吗？',ex_py:'Zhè piàn shēnhǎi shìjiè néng chéngwéi qímiào de kēxué yánjiū jīdì ma?',ex_vn:'Thế giới biển sâu này có thể trở thành một căn cứ nghiên cứu khoa học kỳ diệu không?',
   exList:[
     {zh:'这片神秘而广阔的深海世界，能成为奇妙的科学研究基地吗？',py:'Zhè piàn shénmì ér guǎngkuò de shēnhǎi shìjiè, néng chéngwéi qímiào de kēxué yánjiū jīdì ma?',vn:'Thế giới biển sâu huyền bí và bao la này có thể trở thành một căn cứ nghiên cứu khoa học kỳ diệu không?'},
     {zh:'国家队的运动员每年夏天都在这个基地集中训练。',py:'Guójiāduì de yùndòngyuán měi nián xiàtiān dōu zài zhège jīdì jízhōng xùnliàn.',vn:'Vận động viên đội tuyển quốc gia mùa hè năm nào cũng tập trung huấn luyện ở căn cứ này.'},
     {zh:'这个县已经成为全国最大的茶叶生产基地。',py:'Zhège xiàn yǐjīng chéngwéi quánguó zuì dà de cháyè shēngchǎn jīdì.',vn:'Huyện này đã trở thành cơ sở sản xuất chè lớn nhất cả nước.'}
   ],
   colloFull:[
     {zh:'研究基地',py:'yánjiū jīdì',vn:'căn cứ nghiên cứu'},
     {zh:'训练基地',py:'xùnliàn jīdì',vn:'trung tâm huấn luyện'},
     {zh:'生产基地',py:'shēngchǎn jīdì',vn:'cơ sở sản xuất'},
     {zh:'建立基地',py:'jiànlì jīdì',vn:'xây dựng căn cứ'},
     {zh:'军事基地',py:'jūnshì jīdì',vn:'căn cứ quân sự'}
   ],
   patterns:[
     {s:'成为 + ……基地',m:'Trở thành căn cứ / cơ sở …'},
     {s:'在基地 + 训练 / 研究',m:'Huấn luyện / nghiên cứu tại căn cứ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trải qua mười năm phát triển, thị trấn nhỏ này đã trở thành cơ sở sản xuất chè lớn nhất tỉnh.',answer:'经过十年的发展，这个小镇已经成为全省最大的茶叶生产基地。',answerPy:'Jīngguò shí nián de fāzhǎn, zhège xiǎozhèn yǐjīng chéngwéi quánshěng zuì dà de cháyè shēngchǎn jīdì.',
      note:'经过……: trải qua (quá trình) …; 成为 + N = trở thành ….',pair:'经过……'},
     {promptLang:'vi',prompt:'Nhà trường định xây một cơ sở thực hành, để học sinh làm thí nghiệm.',answer:'学校打算建立一个实践基地，以便学生做实验。',answerPy:'Xuéxiào dǎsuàn jiànlì yí ge shíjiàn jīdì, yǐbiàn xuésheng zuò shíyàn.',
      note:'以便: để (đầu vế sau nêu mục đích — ôn bài 16).',pair:'以便'}
   ]}
];

var dialogData = [
  {scene:'课文 · 无阳光的深海世界',
   preQuiz:[
     {q:'俗话说万物生长靠什么？',opts:['太阳','海水','细菌'],ans:0},
     {q:'课文说，动物靠什么维持生命？',opts:['阳光','海水','植物'],ans:2},
     {q:'科学家在几千米深的海底发现了什么？',opts:['一艘古代的沉船','一个繁殖生命的场所','大量的石油'],ans:1},
     {q:'科学家为什么深感诧异？',opts:['海底没有阳光和食物，压力又很大，却有很多生物','海底的水特别热','海底的生物都特别小'],ans:0},
     {q:'科学家取出样品时，冲出来的是什么气体？',opts:['氧气','二氧化碳','硫化氢'],ans:2},
     {q:'根据科学家的假说，某些细菌靠什么得以繁殖？',opts:['吸收阳光','吸收温泉的热量','吃小动物'],ans:1},
     {q:'深海里新的“食物链”是怎样构成的？',opts:['大动物吃植物','细菌吃小动物','小动物过滤细菌，大动物又吃小动物'],ans:2},
     {q:'“化学合成”是指生物靠什么维持生命？',opts:['来自地球内部的热能','阳光','植物'],ans:0},
     {q:'这种耐高温细菌能在多少摄氏度的环境下生存？',opts:['40℃','65℃','250℃'],ans:2},
     {q:'一般情况下，高于多少摄氏度，多数细菌会丧失生命？',opts:['40℃','65℃','250℃'],ans:1},
     {q:'红冠蠕虫靠什么获得食物？',opts:['用嘴吃小鱼','用伸出套管顶端的身体过滤海水中的食物','吸收阳光'],ans:1},
     {q:'课文最后提出了什么问题？',opts:['深海能否提供新的食物资源，成为科学研究基地','人类能不能住在海底','金星上有没有水'],ans:0}
   ],
   lines:[
    {sp:0,zh:'俗话说万物生长靠太阳。人们之所以这样说，是因为历来植物生长离不开阳光，而动物又靠植物维持生命，所以没有阳光，就没有万物，这是众所周知的真理。然而科学家们的深海考察，却向人类早已认定为准则的定义提出了质疑。',
     py:'Súhuà shuō wànwù shēngzhǎng kào tàiyáng. Rénmen zhīsuǒyǐ zhèyàng shuō, shì yīnwèi lìlái zhíwù shēngzhǎng lí bu kāi yángguāng, ér dòngwù yòu kào zhíwù wéichí shēngmìng, suǒyǐ méiyǒu yángguāng, jiù méiyǒu wànwù, zhè shì zhòngsuǒ-zhōuzhī de zhēnlǐ. Rán\'ér kēxuéjiāmen de shēnhǎi kǎochá, què xiàng rénlèi zǎoyǐ rèndìng wéi zhǔnzé de dìngyì tíchūle zhìyí.',
     vn:'Tục ngữ có câu: vạn vật sinh trưởng nhờ mặt trời. Người ta sở dĩ nói vậy là vì xưa nay thực vật sinh trưởng không thể thiếu ánh mặt trời, còn động vật lại dựa vào thực vật để duy trì sự sống; cho nên không có ánh mặt trời thì không có vạn vật — đây là chân lý ai cũng biết. Thế nhưng, cuộc khảo sát biển sâu của các nhà khoa học lại đặt ra nghi vấn đối với định nghĩa mà loài người từ lâu đã coi là chuẩn mực.'},
    {sp:0,zh:'潜水到几千米深海底的科学家发现了一个繁殖生命的场所，那里的生物长相古怪，蛤、蚌、蟹、贝壳、红冠蠕虫等等，什么都有。科学家深感诧异：在没有阳光，没有食物，压力又很大的海底，怎么会有这么多生物？它们靠什么生存呢？',
     py:'Qiánshuǐ dào jǐ qiān mǐ shēn hǎidǐ de kēxuéjiā fāxiànle yí ge fánzhí shēngmìng de chǎngsuǒ, nàli de shēngwù zhǎngxiàng gǔguài, gé, bàng, xiè, bèiké, hóngguān rúchóng děngděng, shénme dōu yǒu. Kēxuéjiā shēn gǎn chàyì: zài méiyǒu yángguāng, méiyǒu shíwù, yālì yòu hěn dà de hǎidǐ, zěnme huì yǒu zhème duō shēngwù? Tāmen kào shénme shēngcún ne?',
     vn:'Các nhà khoa học lặn xuống đáy biển sâu mấy nghìn mét đã phát hiện một nơi sinh sôi sự sống. Sinh vật ở đó hình dạng kỳ dị: sò, trai, cua, các loài có vỏ, giun ống mào đỏ…, cái gì cũng có. Các nhà khoa học vô cùng kinh ngạc: ở đáy biển không có ánh mặt trời, không có thức ăn, áp suất lại rất lớn, sao lại có nhiều sinh vật đến thế? Chúng dựa vào đâu để sinh tồn?'},
    {sp:0,zh:'回到地面后，科学家取出从深海带回的样品，一股带有刺鼻臭蛋气味的硫化氢气体立即冲了出来，科学家恍然大悟，进而提出了这样的假说——当海水从地壳分裂而成的裂缝渗透到地下时，在高温和高压的作用下，水里所含的硫酸盐转化成了硫化氢，某些细菌借硫化氢代谢变化，吸收温泉的热量得以繁殖。一些小动物靠过滤细菌维持生命，而小动物又成了大动物的食物来源，这样，就构成了一个新的“食物链”。它们靠来自地球内部的热能维持生命，这种程序叫“化学合成”，是生物科学史上的第一次发现。它告诉人类，在没有阳光的条件下，也可能有生命；它启发人们，要解放思想，迈向地球以外，探索生命存在的新路。',
     py:'Huídào dìmiàn hòu, kēxuéjiā qǔchū cóng shēnhǎi dàihuí de yàngpǐn, yì gǔ dàiyǒu cìbí chòu dàn qìwèi de liúhuàqīng qìtǐ lìjí chōngle chūlái, kēxuéjiā huǎngrán-dàwù, jìn\'ér tíchūle zhèyàng de jiǎshuō — dāng hǎishuǐ cóng dìqiào fēnliè ér chéng de lièfèng shèntòu dào dìxià shí, zài gāowēn hé gāoyā de zuòyòng xià, shuǐ li suǒ hán de liúsuānyán zhuǎnhuà chéngle liúhuàqīng, mǒuxiē xìjūn jiè liúhuàqīng dàixiè biànhuà, xīshōu wēnquán de rèliàng déyǐ fánzhí. Yìxiē xiǎo dòngwù kào guòlǜ xìjūn wéichí shēngmìng, ér xiǎo dòngwù yòu chéngle dà dòngwù de shíwù láiyuán, zhèyàng, jiù gòuchéngle yí ge xīn de "shíwùliàn". Tāmen kào láizì dìqiú nèibù de rènéng wéichí shēngmìng, zhè zhǒng chéngxù jiào "huàxué héchéng", shì shēngwù kēxué shǐ shang de dì-yī cì fāxiàn. Tā gàosu rénlèi, zài méiyǒu yángguāng de tiáojiàn xià, yě kěnéng yǒu shēngmìng; tā qǐfā rénmen, yào jiěfàng sīxiǎng, màixiàng dìqiú yǐwài, tànsuǒ shēngmìng cúnzài de xīn lù.',
     vn:'Trở lại mặt đất, các nhà khoa học lấy ra mẫu vật mang về từ biển sâu, một luồng khí hydro sunfua mang mùi trứng thối hắc mũi lập tức xộc ra. Các nhà khoa học chợt hiểu ra, từ đó đưa ra giả thuyết như sau: khi nước biển thấm xuống lòng đất qua những khe nứt do vỏ Trái Đất tách ra, dưới tác dụng của nhiệt độ cao và áp suất cao, muối sunfat chứa trong nước đã chuyển hoá thành hydro sunfua; một số vi khuẩn nhờ hydro sunfua mà trao đổi chất, hấp thụ nhiệt lượng của suối nước nóng nên sinh sôi được. Một số động vật nhỏ duy trì sự sống nhờ lọc vi khuẩn, còn động vật nhỏ lại trở thành nguồn thức ăn của động vật lớn; như vậy đã hình thành một "chuỗi thức ăn" mới. Chúng duy trì sự sống nhờ nhiệt năng đến từ lòng Trái Đất, quá trình này gọi là "tổng hợp hoá học" (hoá tổng hợp), là phát hiện đầu tiên trong lịch sử khoa học sinh học. Nó cho loài người biết: trong điều kiện không có ánh mặt trời vẫn có thể có sự sống; nó gợi mở cho con người rằng phải giải phóng tư tưởng, vươn ra ngoài Trái Đất, tìm kiếm con đường mới về sự tồn tại của sự sống.'},
    {sp:0,zh:'据悉，这种细菌忍受高温的本领远远超越了我们的想象，它们能在250摄氏度（250℃）的环境下生存。一般情况下，高于40℃，大部分植物和动物就无法成活；高于65℃，多数细菌会丧失生命，可是，为什么偏偏这种细菌能够存活下来？其中的奥秘到底是什么呢？有人迫不及待地想探究其真相，有人却说，与其把精力用来探索耐高温细菌生命存在的秘密，不如去探索高温和高压下的金星或其他星球上，是否也有生物存在。',
     py:'Jùxī, zhè zhǒng xìjūn rěnshòu gāowēn de běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng, tāmen néng zài èrbǎi wǔshí shèshìdù (250℃) de huánjìng xià shēngcún. Yìbān qíngkuàng xià, gāoyú sìshí shèshìdù, dà bùfen zhíwù hé dòngwù jiù wúfǎ chénghuó; gāoyú liùshíwǔ shèshìdù, duōshù xìjūn huì sàngshī shēngmìng, kěshì, wèi shénme piānpiān zhè zhǒng xìjūn nénggòu cúnhuó xiàlái? Qízhōng de àomì dàodǐ shì shénme ne? Yǒu rén pòbùjídài de xiǎng tànjiū qí zhēnxiàng, yǒu rén què shuō, yǔqí bǎ jīnglì yònglái tànsuǒ nài gāowēn xìjūn shēngmìng cúnzài de mìmì, bùrú qù tànsuǒ gāowēn hé gāoyā xià de Jīnxīng huò qítā xīngqiú shang, shìfǒu yě yǒu shēngwù cúnzài.',
     vn:'Được biết, khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta: chúng có thể sống trong môi trường 250 độ C (250℃). Thông thường, cao hơn 40℃ thì phần lớn thực vật và động vật không thể sống nổi; cao hơn 65℃ thì đa số vi khuẩn sẽ chết. Thế nhưng, tại sao riêng loại vi khuẩn này lại sống sót được? Bí ẩn trong đó rốt cuộc là gì? Có người nóng lòng muốn tìm hiểu chân tướng; lại có người nói, thay vì dồn sức tìm hiểu bí mật tồn tại của vi khuẩn chịu nhiệt, chi bằng đi khám phá xem trên sao Kim hay các hành tinh khác — nơi nhiệt độ cao, áp suất cao — có sinh vật tồn tại hay không.'},
    {sp:0,zh:'不管人类怎么想，这些深海生物依然保持着它们强大而华丽的阵容，有条不紊地过着自己的日子，展现着他们独特的精彩：一丛丛红冠蠕虫，把白色外套管固定在岩石上，保护着自己柔软的身体。它们没有嘴，没有眼，甚至消化系统也不存在，仅靠伸出套管顶端的身体过滤海水中的食物，它们是怎么繁殖后代的呢？体积庞大的巨蛤，造型奇特的白蚌，它们的生理结构，食物基础，甚至它们的门类归属，都使人迷惑不解。这片神秘而广阔的深海世界能为我们提供新的食物资源，成为奇妙的科学研究基地吗？',
     py:'Bùguǎn rénlèi zěnme xiǎng, zhèxiē shēnhǎi shēngwù yīrán bǎochízhe tāmen qiángdà ér huálì de zhènróng, yǒutiáo-bùwěn de guòzhe zìjǐ de rìzi, zhǎnxiànzhe tāmen dútè de jīngcǎi: yì cóngcóng hóngguān rúchóng, bǎ báisè wàitàoguǎn gùdìng zài yánshí shang, bǎohùzhe zìjǐ róuruǎn de shēntǐ. Tāmen méiyǒu zuǐ, méiyǒu yǎn, shènzhì xiāohuà xìtǒng yě bù cúnzài, jǐn kào shēnchū tàoguǎn dǐngduān de shēntǐ guòlǜ hǎishuǐ zhōng de shíwù, tāmen shì zěnme fánzhí hòudài de ne? Tǐjī pángdà de jùgé, zàoxíng qítè de báibàng, tāmen de shēnglǐ jiégòu, shíwù jīchǔ, shènzhì tāmen de ménlèi guīshǔ, dōu shǐ rén míhuò bù jiě. Zhè piàn shénmì ér guǎngkuò de shēnhǎi shìjiè néng wèi wǒmen tígōng xīn de shíwù zīyuán, chéngwéi qímiào de kēxué yánjiū jīdì ma?',
     vn:'Bất kể loài người nghĩ gì, những sinh vật biển sâu này vẫn giữ đội hình hùng hậu và lộng lẫy của chúng, sống ngày tháng của mình một cách nề nếp, phô bày nét đặc sắc riêng: từng cụm giun ống mào đỏ gắn chặt lớp ống vỏ màu trắng lên đá, bảo vệ thân mình mềm mại. Chúng không có miệng, không có mắt, thậm chí đến hệ tiêu hoá cũng không có, chỉ dựa vào phần thân thò ra ở đầu ống để lọc thức ăn trong nước biển — vậy chúng sinh sản đời sau bằng cách nào? Những con sò khổng lồ kích thước đồ sộ, những con trai trắng hình dáng kỳ lạ — cấu tạo sinh lý, nguồn thức ăn cơ bản, thậm chí việc chúng thuộc ngành loài nào — đều khiến người ta khó hiểu. Thế giới biển sâu huyền bí và bao la này liệu có thể cung cấp cho chúng ta nguồn thức ăn mới, trở thành một căn cứ nghiên cứu khoa học kỳ diệu không?'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 历来—从来 lấy từ sách (tr. 202–203, 做一做 theo đáp án sách); 超越—超过, 真理—真相 tự thêm (超越, 真理, 真相 là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'历来 — 从来',
   same:'Đều là phó từ, đều biểu thị từ quá khứ đến hiện tại luôn như vậy.',
   sameEx:{zh:'我跟他下棋历来／从来都要输的。',vn:'Tôi đánh cờ với anh ta xưa nay lần nào cũng thua.'},
   items:[
     {word:'历来',points:[
       'Thiên về VĂN VIẾT; KHÔNG dùng trong câu phủ định (không nói 历来不……).',
       'Bổ nghĩa được cho một ĐỘNG TỪ / TÍNH TỪ hai âm tiết đứng đơn lẻ: 历来忠厚, 历来稀少, 历来重视.',
       'Hay đi với 提倡, 重视, 主张, 反对, 如此.'
     ],ex:[{zh:'我们历来提倡艰苦朴素，反对铺张浪费。',vn:'Chúng ta xưa nay đề cao lối sống giản dị chịu khó, phản đối phô trương lãng phí.'},
          {zh:'这个人历来忠厚老实，可以信赖。',vn:'Người này xưa nay thật thà chất phác, có thể tin cậy.'}]},
     {word:'从来',points:[
       'Chủ yếu dùng trong câu PHỦ ĐỊNH: 从来不 + V; 从来没（有）+ V + 过.',
       'Dùng trong câu khẳng định thì bổ nghĩa cho CỤM động từ, cụm tính từ hoặc phân câu, thường kèm 就 / 都 (从来就是……); thường không bổ nghĩa cho một động từ / tính từ đơn lẻ.',
       'Dùng được cả khẩu ngữ lẫn văn viết.'
     ],ex:[{zh:'我从来不隐瞒自己的观点。',vn:'Tôi chưa bao giờ giấu quan điểm của mình.'},
          {zh:'川西平原从来就是物产丰富。',vn:'Đồng bằng Tây Tứ Xuyên xưa nay vẫn là nơi sản vật phong phú.'}]}
   ],
   quiz:[
     {sentence:'我＿＿没去过西藏，很想去看看。',options:['历来','从来'],answer:1,why:'Câu phủ định 没……过 → 从来. 历来 không dùng trong câu phủ định.'},
     {sentence:'这家老字号＿＿重视产品质量。',options:['历来','从来'],answer:0,why:'Câu khẳng định, bổ nghĩa trực tiếp cho động từ hai âm tiết 重视, văn viết → 历来.'},
     {sentence:'他＿＿不在别人背后说坏话。',options:['历来','从来'],answer:1,why:'从来不 + V (câu phủ định).'},
     {sentence:'我跟他下棋＿＿都要输的。',options:['历来','从来'],answer:0,both:true,why:'Câu khẳng định có 都 → cả hai đều được (câu ví dụ điểm chung của sách).'}
   ],
   sgk:{
     chung:{t:'都是副词，都表示从过去到现在都是如此。',vn:'Đều là phó từ, đều biểu thị từ quá khứ đến hiện tại luôn như vậy.',vd:'我跟他下棋历来／从来都要输的。',vdVn:'Tôi đánh cờ với anh ta xưa nay lần nào cũng thua.'},
     khac:[
       {a:{t:'多用于书面，不用于否定句。',vn:'Thường dùng trong văn viết, không dùng trong câu phủ định.',vd:'我们历来提倡艰苦朴素，反对铺张浪费。',vdVn:'Chúng ta xưa nay đề cao lối sống giản dị chịu khó, phản đối phô trương lãng phí.'},
        b:{t:'多用于否定句。',vn:'Thường dùng trong câu phủ định.',vd:'我从来不隐瞒自己的观点。',vdVn:'Tôi chưa bao giờ giấu quan điểm của mình.'}},
       {a:{t:'可修饰单个的双音节动词、形容词。',vn:'Có thể bổ nghĩa cho một động từ, tính từ hai âm tiết đứng đơn lẻ.',vd:'这个人历来忠厚老实，可以信赖。',vdVn:'Người này xưa nay thật thà chất phác, có thể tin cậy.'},
        b:{t:'用于肯定句时，修饰动词短语、形容词短语或小句，一般不修饰单个动词、形容词。',vn:'Khi dùng trong câu khẳng định thì bổ nghĩa cho cụm động từ, cụm tính từ hoặc phân câu, thường không bổ nghĩa cho một động từ, tính từ đơn lẻ.',vd:'川西平原从来就是物产丰富。',vdVn:'Đồng bằng Tây Tứ Xuyên xưa nay vẫn là nơi sản vật phong phú.'}}
     ],
     deLam:'选择“历来”或“从来”填空 — Chọn 历来 hoặc 从来 điền vào chỗ trống',
     lamThu:[
       {s:'爷爷＿＿没有浪费过一点儿粮食。',dap:[false,true],
        giai:'Câu phủ định 没有……过 → 从来 (đáp án sách). 历来 không dùng trong câu phủ định.'},
       {s:'中国西北地区雨量＿＿稀少。',dap:[true,false],
        giai:'Câu khẳng định, văn viết, bổ nghĩa trực tiếp cho tính từ hai âm tiết 稀少 → 历来 (đáp án sách).'},
       {s:'他＿＿心直口快，有什么说什么。',dap:[true,false],
        giai:'Câu khẳng định nói về tính cách xưa nay vẫn thế, bổ nghĩa trực tiếp cho 心直口快 → 历来 (đáp án sách).'},
       {s:'她总是无忧无虑，好像＿＿不知道什么叫烦恼。',dap:[false,true],
        giai:'从来不 + V: câu phủ định → 从来 (đáp án sách).'}
     ]
   }},

  {pair:'超越 — 超过',
   same:'Đều là động từ, đều có nghĩa vượt qua, vượt lên trên (một mức độ, một đối tượng).',
   sameEx:{zh:'他的成绩已经超越／超过了班里所有的同学。',vn:'Thành tích của cậu ấy đã vượt qua tất cả các bạn trong lớp.'},
   items:[
     {word:'超越',points:[
       'Văn viết, trang trọng; tân ngữ thường TRỪU TƯỢNG: 自我, 想象, 局限, 极限, 时代, 前人.',
       'Nhấn việc vượt lên một giới hạn, một trình độ cao hơn.',
       'Hầu như không đi với con số cụ thể (không nói 超越一百人).'
     ],ex:[{zh:'这种细菌忍受高温的本领远远超越了我们的想象。',vn:'Khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta.'},
          {zh:'团结能使我们超越自身的局限。',vn:'Đoàn kết giúp chúng ta vượt qua giới hạn của bản thân.'}]},
     {word:'超过',points:[
       'Dùng rộng, cả khẩu ngữ; hay đi với SỐ LƯỢNG, mức độ cụ thể: 超过一百人, 超过三个小时, 超过40℃.',
       'Còn nghĩa "vượt lên trước" khi di chuyển: 那辆车超过了我们.',
       'Hay nói 不超过…… = không quá ….'
     ],ex:[{zh:'今年入境旅游观光的人数已超过千万。',vn:'Số người nhập cảnh du lịch tham quan năm nay đã vượt quá mười triệu.'},
          {zh:'每天玩手机的时间最好不要超过一个小时。',vn:'Mỗi ngày thời gian dùng điện thoại tốt nhất không nên quá một tiếng.'}]}
   ],
   quiz:[
     {sentence:'参加这次活动的人数＿＿了五百。',options:['超越','超过'],answer:1,why:'Đi với con số cụ thể (五百) → 超过.'},
     {sentence:'运动员们不断挑战极限，＿＿自我。',options:['超越','超过'],answer:0,why:'超越自我 = vượt qua chính mình (tân ngữ trừu tượng, cụm cố định).'},
     {sentence:'前面那辆车开得太慢，我们很快就＿＿了它。',options:['超越','超过'],answer:1,why:'Vượt xe khi di chuyển (cụ thể, khẩu ngữ) → 超过.'},
     {sentence:'这部作品的艺术价值＿＿了它所在的时代。',options:['超越','超过'],answer:0,why:'Vượt lên trên thời đại (trừu tượng, văn viết) → 超越.'}
   ]},

  {pair:'真理 — 真相',
   same:'Đều là danh từ, đều liên quan đến điều "thật", "đúng", nhưng KHÔNG thay nhau được.',
   sameEx:{zh:'科学家追求真理，警察查明真相。',vn:'Nhà khoa học theo đuổi chân lý, cảnh sát làm rõ sự thật.'},
   items:[
     {word:'真理',points:[
       'Nhận thức đúng đắn phản ánh QUY LUẬT khách quan, mang tính phổ biến, lâu dài: 众所周知的真理.',
       'Hay đi với 追求, 坚持, 检验, 探索; 普遍真理.',
       'Không dùng cho một sự việc cụ thể (không nói 事故的真理).'
     ],ex:[{zh:'没有阳光，就没有万物，这是众所周知的真理。',vn:'Không có ánh mặt trời thì không có vạn vật, đây là chân lý ai cũng biết.'},
          {zh:'实践是检验真理的唯一标准。',vn:'Thực tiễn là tiêu chuẩn duy nhất để kiểm nghiệm chân lý.'}]},
     {word:'真相',points:[
       'Tình hình THẬT của một SỰ VIỆC CỤ THỂ, thường bị che giấu hoặc chưa rõ.',
       'Hay đi với 查明, 探究, 了解, 说出, 掩盖; 真相大白 (sự thật được phơi bày).',
       'Không mang tính quy luật chung.'
     ],ex:[{zh:'有人迫不及待地想探究其真相。',vn:'Có người nóng lòng muốn tìm hiểu chân tướng của nó.'},
          {zh:'警察终于查明了事情的真相。',vn:'Cảnh sát cuối cùng đã làm rõ sự thật của sự việc.'}]}
   ],
   quiz:[
     {sentence:'经过调查，这起交通事故的＿＿终于弄清楚了。',options:['真理','真相'],answer:1,why:'Sự thật của một vụ việc cụ thể → 真相.'},
     {sentence:'“实践是检验＿＿的唯一标准”这句话大家都很熟悉。',options:['真理','真相'],answer:0,why:'Chân lý mang tính quy luật → 真理.'},
     {sentence:'他怕妈妈担心，一直没把＿＿告诉她。',options:['真理','真相'],answer:1,why:'Giấu sự thật của một chuyện cụ thể → 真相.'},
     {sentence:'科学家们一生都在追求＿＿。',options:['真理','真相'],answer:0,why:'追求真理 = theo đuổi chân lý (cụm cố định).'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'真理',hv:'chân lý',vn:'chân lý',note:'Trùng khít. 追求真理 = theo đuổi chân lý.'},
    {zh:'定义',hv:'định nghĩa',vn:'định nghĩa',note:'Trùng khít; 下定义 = đưa ra định nghĩa.'},
    {zh:'渗透',hv:'thẩm thấu',vn:'thẩm thấu, ngấm vào',note:'Trùng khít, cả nghĩa bóng: 渗透到生活的各个方面 = thâm nhập vào mọi mặt đời sống.'},
    {zh:'解放',hv:'giải phóng',vn:'giải phóng',note:'Trùng khít; 解放思想 = giải phóng tư tưởng.'},
    {zh:'华丽',hv:'hoa lệ',vn:'lộng lẫy, tráng lệ',note:'Trùng khít — "hoa lệ" như "thành phố hoa lệ".'},
    {zh:'造型',hv:'tạo hình',vn:'kiểu dáng, tạo hình',note:'Trùng khít; tiếng Trung hay dùng như danh từ: 造型奇特 = hình dáng kỳ lạ.'},
    {zh:'体积',hv:'thể tích',vn:'thể tích, kích thước',note:'Trùng khít.'},
    {zh:'奇妙',hv:'kỳ diệu',vn:'kỳ diệu',note:'Trùng khít, sắc thái khen.'},
    {zh:'真相',hv:'chân tướng',vn:'sự thật, chân tướng',note:'Trùng khít: "chân tướng sự việc" = 事情的真相.'},
    {zh:'繁殖',hv:'phồn thực',vn:'sinh sôi, sinh sản',note:'"Phồn thực" (tín ngưỡng phồn thực) = sinh sôi nảy nở — cùng gốc.'},
    {zh:'细菌',hv:'tế khuẩn',vn:'vi khuẩn',note:'细 = nhỏ (tế), 菌 = khuẩn → "vi khuẩn".'},
    {zh:'分裂',hv:'phân liệt',vn:'tách ra, chia rẽ',note:'"Phân liệt" (tâm thần phân liệt) — nghĩa gốc là tách rời; 细胞分裂 = phân bào.'},
    {zh:'探索',hv:'thám sách',vn:'thám hiểm, tìm tòi',note:'"Thám sách" không dùng, nhưng 探 (thám) + 索 (tìm, như 搜索) gợi đúng nghĩa "khám phá, tìm tòi".'}
  ],
  idiom:[
    {zh:'众所周知',hv:'chúng sở chu tri',vn:'ai cũng biết',note:'众 = mọi người (quần chúng), 周 = khắp (chu toàn), 知 = biết → điều mọi người đều biết.'},
    {zh:'恍然大悟',hv:'hoảng nhiên đại ngộ',vn:'chợt vỡ lẽ',note:'恍然 = chợt, bỗng; 悟 = ngộ (giác ngộ) → bỗng hiểu ra hoàn toàn.'},
    {zh:'有条不紊',hv:'hữu điều bất vặn',vn:'đâu ra đấy, có trật tự',note:'条 = thứ tự (điều), 紊 = rối → có thứ tự, không rối.'},
    {zh:'迫不及待',hv:'bách bất cập đãi',vn:'nóng lòng, không chờ nổi',note:'迫 = bức bách, 不及待 = không kịp chờ → trong bài: 迫不及待地想探究其真相.'},
    {zh:'迷惑不解',hv:'mê hoặc bất giải',vn:'bối rối không hiểu nổi',note:'不解 = không hiểu → 都使人迷惑不解 = đều khiến người ta khó hiểu.'}
  ],
  trap:[
    {zh:'迷惑',hv:'mê hoặc',vn:'bối rối, khó hiểu; đánh lừa',
     warn:'Tiếng Việt "mê hoặc" = quyến rũ làm say mê (giọng hát mê hoặc lòng người). 迷惑 trong bài là "bối rối, không hiểu nổi" (迷惑不解) hoặc "đánh lừa" (被表面现象迷惑). Muốn nói "quyến rũ" dùng 迷人 / 吸引人.'},
    {zh:'超越',hv:'siêu việt',vn:'vượt qua',
     warn:'"Siêu việt" tiếng Việt là tính từ khen (tài năng siêu việt). 超越 là ĐỘNG TỪ "vượt qua": 超越自我, 超越想象. "Tài năng siêu việt" tiếng Trung là 才能卓越.'},
    {zh:'基地',hv:'cơ địa',vn:'căn cứ, cơ sở',
     warn:'"Cơ địa" tiếng Việt chỉ thể trạng cơ thể (cơ địa dị ứng)! 基地 = căn cứ, cơ sở: 训练基地, 研究基地, 生产基地.'},
    {zh:'场所',hv:'trường sở',vn:'nơi chốn, địa điểm',
     warn:'Không liên quan "trường học". 场所 = nơi chốn: 公共场所 = nơi công cộng.'},
    {zh:'阵容',hv:'trận dung',vn:'đội hình, dàn (diễn viên…)',
     warn:'Không phải "dung mạo" gì cả; nghĩa hay dùng là đội hình, lực lượng: 演员阵容 = dàn diễn viên, 首发阵容 = đội hình xuất phát.'},
    {zh:'丧失',hv:'táng thất',vn:'mất đi',
     warn:'丧 ở đây đọc sàng (mất), không đọc sāng (tang — 丧事). 丧失 + 生命 / 信心 / 能力 = mất mạng / mất niềm tin / mất khả năng.'},
    {zh:'据悉',hv:'cứ tất',vn:'được biết, theo nguồn tin',
     warn:'悉 = biết rõ (như 熟悉, 知悉), KHÔNG phải "tất cả". 据悉 = theo những gì được biết (văn phong báo chí).'}
  ]
};


// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'维持',right:'生命'},
  {left:'众所周知的',right:'真理'},
  {left:'早已认定为',right:'准则'},
  {left:'繁殖生命的',right:'场所'},
  {left:'长相',right:'古怪'},
  {left:'深感',right:'诧异'},
  {left:'带回',right:'样品'},
  {left:'刺鼻的',right:'气味'},
  {left:'恍然',right:'大悟'},
  {left:'提出',right:'假说'},
  {left:'渗透到',right:'地下'},
  {left:'过滤',right:'细菌'},
  {left:'食物',right:'来源'},
  {left:'化学',right:'合成'},
  {left:'解放',right:'思想'},
  {left:'迈向',right:'地球以外'},
  {left:'忍受',right:'高温'},
  {left:'超越',right:'想象'},
  {left:'探究',right:'真相'},
  {left:'华丽的',right:'阵容'},
  {left:'体积',right:'庞大'},
  {left:'造型',right:'奇特'},
  {left:'迷惑',right:'不解'},
  {left:'科学研究',right:'基地'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'正如',blank:'俗话',post:'所说：“一分耕耘，一分收获。”你付出了努力，就一定会有回报。',hint:'(tục ngữ)',ans:'俗话'},
  {pre:'比赛开始前，几名志愿者在门口',blank:'维持',post:'秩序，让观众有条不紊地进场。',hint:'(duy trì, giữ)',ans:'维持'},
  {pre:'实践是检验',blank:'真理',post:'的唯一标准。',hint:'(chân lý)',ans:'真理'},
  {pre:'没有证据，你不能随便',blank:'认定',post:'他就是拿走手机的人。',hint:'(khẳng định, cho là)',ans:'认定'},
  {pre:'每个人给“幸福”下的',blank:'定义',post:'都不一样。',hint:'(định nghĩa)',ans:'定义'},
  {pre:'这个暑假我们去海南学',blank:'潜水',post:'，在海底看到了五颜六色的鱼。',hint:'(lặn)',ans:'潜水'},
  {pre:'夏天气温高，细菌',blank:'繁殖',post:'得特别快，剩菜最好放进冰箱。',hint:'(sinh sôi)',ans:'繁殖'},
  {pre:'图书馆、电影院等公共',blank:'场所',post:'禁止吸烟。',hint:'(nơi chốn)',ans:'场所'},
  {pre:'退潮以后，孩子们在沙滩上捡了一大袋',blank:'贝壳',post:'，别提多开心了。',hint:'(vỏ sò)',ans:'贝壳'},
  {pre:'工作人员采集了河水',blank:'样品',post:'，准备送到实验室检测。',hint:'(mẫu vật)',ans:'样品'},
  {pre:'中午的阳光太',blank:'刺',post:'眼了，出门最好戴上太阳镜。',hint:'(chói, kích thích)',ans:'刺'},
  {pre:'冰箱里散发出一股难闻的',blank:'气味',post:'，原来是鸡蛋坏了。',hint:'(mùi)',ans:'气味'},
  {pre:'细胞不断',blank:'分裂',post:'，生物体才能慢慢长大。',hint:'(phân chia)',ans:'分裂'},
  {pre:'雨下得太大，雨水从墙缝里',blank:'渗透',post:'进来了。',hint:'(thấm)',ans:'渗透'},
  {pre:'饭前务必洗手，因为手上有很多看不见的',blank:'细菌',post:'。',hint:'(vi khuẩn)',ans:'细菌'},
  {pre:'自来水最好经过',blank:'过滤',post:'再喝，这样更卫生。',hint:'(lọc)',ans:'过滤'},
  {pre:'父亲失业以后，家里就失去了经济',blank:'来源',post:'。',hint:'(nguồn)',ans:'来源'},
  {pre:'这张照片是用电脑',blank:'合成',post:'的，并非真实的画面。',hint:'(ghép, tổng hợp)',ans:'合成'},
  {pre:'洗碗机把妈妈从繁重的家务中',blank:'解放',post:'了出来。',hint:'(giải phóng)',ans:'解放'},
  {pre:'万事开头难，只要勇敢地',blank:'迈',post:'出第一步，后面就容易多了。',hint:'(bước)',ans:'迈'},
  {pre:'',blank:'据悉',post:'，这座新图书馆将于明年五月正式对外开放。',hint:'(được biết, theo nguồn tin)',ans:'据悉'},
  {pre:'水在一百',blank:'摄氏度',post:'时就会沸腾。',hint:'(độ C)',ans:'摄氏度'},
  {pre:'失败了一次就',blank:'丧失',post:'信心，这样怎么能成功呢？',hint:'(mất đi)',ans:'丧失'},
  {pre:'警察经过调查，终于查明了事情的',blank:'真相',post:'。',hint:'(sự thật)',ans:'真相'},
  {pre:'这部电影的演员',blank:'阵容',post:'非常强大，还没上映就很受关注。',hint:'(đội hình, dàn)',ans:'阵容'},
  {pre:'这次比赛给了年轻人一个',blank:'展现',post:'才华的机会。',hint:'(thể hiện)',ans:'展现'},
  {pre:'院子的角落里种着一',blank:'丛',post:'竹子，风一吹沙沙作响。',hint:'(khóm, bụi)',ans:'丛'},
  {pre:'这种新型电脑',blank:'体积',post:'小，便于携带。',hint:'(thể tích, kích thước)',ans:'体积'},
  {pre:'这座大楼的',blank:'造型',post:'像一只展翅的大鸟，吸引了很多游客。',hint:'(kiểu dáng)',ans:'造型'},
  {pre:'这个县已经成为全国最大的茶叶生产',blank:'基地',post:'。',hint:'(căn cứ, cơ sở)',ans:'基地'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (进而 · 得以 · 偏偏) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['科学家','恍然大悟','，','进而','提出了','这样的','假说','。'],ans:'科学家恍然大悟，进而提出了这样的假说。',audio:'科学家恍然大悟，进而提出了这样的假说。'},
  {words:['新的教学方法','先在个别班级','进行实验','，','进而','在全校','推广','。'],ans:'新的教学方法先在个别班级进行实验，进而在全校推广。',audio:'新的教学方法先在个别班级进行实验，进而在全校推广。'},
  {words:['通过调查研究','发现问题','，','进而','找到','解决问题的方法','。'],ans:'通过调查研究发现问题，进而找到解决问题的方法。',audio:'通过调查研究发现问题，进而找到解决问题的方法。'},
  {words:['某些细菌','吸收','温泉的热量','得以','繁殖','。'],ans:'某些细菌吸收温泉的热量得以繁殖。',audio:'某些细菌吸收温泉的热量得以繁殖。'},
  {words:['只有','不断努力','，','梦想','才能','得以','实现','。'],ans:'只有不断努力，梦想才能得以实现。',audio:'只有不断努力，梦想才能得以实现。'},
  {words:['长寿的一生','使他','得以','见证','中国历史上的','伟大年代','。'],ans:'长寿的一生使他得以见证中国历史上的伟大年代。',audio:'长寿的一生使他得以见证中国历史上的伟大年代。'},
  {words:['大家','都劝他','不要去','，','他','偏偏','要去','。'],ans:'大家都劝他不要去，他偏偏要去。',audio:'大家都劝他不要去，他偏偏要去。'},
  {words:['为什么','偏偏','这种细菌','能够','存活下来','？'],ans:'为什么偏偏这种细菌能够存活下来？',audio:'为什么偏偏这种细菌能够存活下来？'},
  {words:['经过讨论','，','大家的意见','都统一了','，','可','偏偏','他','不同意','。'],ans:'经过讨论，大家的意见都统一了，可偏偏他不同意。',audio:'经过讨论，大家的意见都统一了，可偏偏他不同意。'},
  {words:['老校长','历来','重视','学生们的','素质教育','。'],ans:'老校长历来重视学生们的素质教育。',audio:'老校长历来重视学生们的素质教育。'},
  {words:['爷爷','从来','没有','浪费过','一点儿','粮食','。'],ans:'爷爷从来没有浪费过一点儿粮食。',audio:'爷爷从来没有浪费过一点儿粮食。'},
  {words:['据悉','，','今年','入境旅游观光的','人数','已超过','千万','。'],ans:'据悉，今年入境旅游观光的人数已超过千万。',audio:'据悉，今年入境旅游观光的人数已超过千万。'},
  {words:['与其','花时间','抱怨','，','不如','动手','解决问题','。'],ans:'与其花时间抱怨，不如动手解决问题。',audio:'与其花时间抱怨，不如动手解决问题。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我们学校____重视学生的综合素质，而不是只看考试成绩。',opts:['从来','原来','后来','历来'],ans:3,
   exp:'历来 + động từ hai âm tiết (重视) trong câu khẳng định, văn viết (词语辨析). 从来 chủ yếu dùng trong câu phủ định; 原来 = hoá ra / vốn dĩ; 后来 = về sau (cùng nhóm 来 ở 练习1).'},
  {wrong:'____，吸烟有害健康，可他偏偏戒不了。',opts:['恍然大悟','众所周知','迫不及待','半途而废'],ans:1,
   exp:'众所周知 đứng đầu câu = như ai cũng biết. 恍然大悟 = chợt vỡ lẽ; 迫不及待 = nóng lòng; 半途而废 = bỏ dở giữa chừng.'},
  {wrong:'诚实守信是做人的基本____。',opts:['准时','准确','准则','准许'],ans:2,
   exp:'基本准则 = nguyên tắc cơ bản. 准时 = đúng giờ; 准确 = chính xác; 准许 = cho phép — đều không phải danh từ chỉ chuẩn mực.'},
  {wrong:'那位老教授脾气有点儿____，但对学生却非常关心。',opts:['奇妙','华丽','广阔','古怪'],ans:3,
   exp:'脾气古怪 = tính khí quái gở (hơi tiêu cực, hợp với 但 chuyển ý). 奇妙 = kỳ diệu (khen, không tả tính khí); 华丽 = lộng lẫy; 广阔 = bao la.'},
  {wrong:'平时最不爱学习的他竟然考了第一名，全班同学都很____。',opts:['诧异','满意','得意','同意'],ans:0,
   exp:'竟然 báo hiệu điều ngoài dự đoán → mọi người 诧异 (sửng sốt). 满意 = hài lòng; 得意 = đắc ý (người đạt được mới đắc ý); 同意 = đồng ý.'},
  {wrong:'听了老师的解释，我才____，原来这道题这么简单。',opts:['众所周知','半途而废','恍然大悟','有条不紊'],ans:2,
   exp:'……才恍然大悟，原来…… = mới vỡ lẽ, hoá ra …. Các thành ngữ còn lại không mang nghĩa "hiểu ra".'},
  {wrong:'通过调查研究发现问题，____找到解决问题的方法。',opts:['然而','进而','反而','何况'],ans:1,
   exp:'进而 = từ đó tiến thêm một bước (điểm ngữ pháp 1, 练习4 ②). 然而 = thế nhưng (chuyển ý); 反而 = trái lại; 何况 = huống hồ.'},
  {wrong:'人类从来没有停止过____宇宙的脚步。',opts:['探望','探听','打探','探索'],ans:3,
   exp:'探索宇宙 = khám phá vũ trụ. 探望 = thăm (người ốm, người thân); 探听 / 打探 = dò hỏi tin tức.'},
  {wrong:'邻居家的装修噪音让人难以____。',opts:['享受','忍受','感受','遭受'],ans:1,
   exp:'难以忍受 = khó mà chịu nổi. 享受 = hưởng thụ (ngược nghĩa); 感受 = cảm nhận; 遭受 = gặp phải (cần tân ngữ: 遭受损失). 难以 ôn bài 14.'},
  {wrong:'比赛的意义不在于战胜别人，而在于____自我。',opts:['超越','超过','越过','穿越'],ans:0,
   exp:'超越自我 = vượt qua chính mình (cụm cố định, tân ngữ trừu tượng). 超过 dùng cho số lượng / vượt xe; 越过 = vượt qua (địa hình: 越过高山); 穿越 = xuyên qua.'},
  {wrong:'大家都劝他别去，他____要去，谁也拦不住。',opts:['果然','反正','偏偏','难怪'],ans:2,
   exp:'偏偏要 = cố ý làm ngược lời khuyên (điểm ngữ pháp 3, cách dùng ①). 果然 = quả nhiên; 反正 = dù sao; 难怪 = thảo nào.'},
  {wrong:'演员们穿着____的服装走上了舞台。',opts:['华丽','奇妙','广阔','深刻'],ans:0,
   exp:'华丽的服装 = trang phục lộng lẫy. 奇妙 = kỳ diệu (thế giới, cảm giác); 广阔 = bao la (không gian); 深刻 = sâu sắc (ấn tượng, bài học).'},
  {wrong:'虽然工作很多，但她总能____地处理好每一件事。',opts:['迫不及待','有条不紊','恍然大悟','众所周知'],ans:1,
   exp:'有条不紊地 + V = làm … đâu ra đấy (练习2 ⑥). 迫不及待地 = nóng lòng (không hợp nghĩa "xử lý tốt mọi việc"); hai thành ngữ còn lại không làm trạng ngữ kiểu này.'},
  {wrong:'它们的生理结构、食物基础，都使人____不解。',opts:['迷人','迷路','着迷','迷惑'],ans:3,
   exp:'迷惑不解 = bối rối khó hiểu (bài khoá). 迷人 = quyến rũ; 迷路 = lạc đường; 着迷 = say mê.'},
  {wrong:'人工智能这个行业发展前景十分____。',opts:['宽敞','广泛','广阔','广大'],ans:2,
   exp:'前景广阔 = triển vọng rộng mở. 宽敞 = rộng rãi (nhà cửa); 广泛 = rộng rãi, phổ biến (兴趣广泛); 广大 = đông đảo, rộng lớn (广大群众).'},
  {wrong:'大自然真____，小小的种子能长成参天大树。',opts:['奇妙','古怪','诧异','迷惑'],ans:0,
   exp:'大自然真奇妙 = thiên nhiên thật kỳ diệu (khen). 古怪 = quái lạ (tiêu cực); 诧异, 迷惑 tả cảm giác của người, không tả thiên nhiên.'},
  {wrong:'幸亏列车上有位经验丰富的医生，病人才____清醒过来。',opts:['可以','得以','难以','以便'],ans:1,
   exp:'得以 + V = nhờ (điều kiện đó) mà có thể … (điểm ngữ pháp 2, ví dụ (3) của sách). 难以 = khó mà (ngược nghĩa); 以便 = để (đầu vế sau nêu mục đích); 可以 không mang ý "nhờ đó mà được".'},
  {wrong:'我____不隐瞒自己的观点，有什么就说什么。',opts:['历来','本来','原来','从来'],ans:3,
   exp:'Câu phủ định 不隐瞒 → 从来不 (词语辨析). 历来 không dùng trong câu phủ định; 本来 / 原来 = vốn dĩ, không mang nghĩa "xưa nay luôn".'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–18 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cậu ấy xưa nay coi trọng việc học, vậy mà lần này lại để quên bài tập tiếng Anh ở nhà.',zh:'他历来重视学习，可这次偏偏把英语作业忘在了家里。',py:'Tā lìlái zhòngshì xuéxí, kě zhè cì piānpiān bǎ Yīngyǔ zuòyè wàng zàile jiāli.',goiY:['历来','可……偏偏……'],giai:'历来 + động từ hai âm tiết trong câu khẳng định; 偏偏 = trớ trêu lại (sự thật trái với lẽ thường) — nhấn "đúng lần này lại …".'},
  {vi:'Chúng ta nhất thiết phải làm rõ sự thật của vấn đề trước, rồi từ đó mới đưa ra phương án giải quyết.',zh:'我们务必先查明问题的真相，进而提出解决的方案。',py:'Wǒmen wùbì xiān chámíng wèntí de zhēnxiàng, jìn\'ér tíchū jiějué de fāng\'àn.',goiY:['务必','先……进而……','真相'],giai:'先……，进而……: bước sau xây trên bước trước; 务必 (bài 12) = nhất thiết phải; 查明真相 = làm rõ sự thật.'},
  {vi:'Nhờ sự giúp đỡ của thầy cô, ước mơ lặn xuống khám phá biển sâu của cô ấy cuối cùng cũng được thực hiện.',zh:'在老师们的帮助下，她潜水探索深海的梦想终于得以实现。',py:'Zài lǎoshīmen de bāngzhù xià, tā qiánshuǐ tànsuǒ shēnhǎi de mèngxiǎng zhōngyú déyǐ shíxiàn.',goiY:['在……下','潜水','探索','得以'],giai:'在……的帮助下 nêu điều kiện; 得以 + V (实现) = nhờ điều kiện đó mà được …; không dịch "được" bằng 被.'},
  {vi:'Ai cũng biết thức khuya có hại cho sức khoẻ, vậy mà không ít học sinh cứ nhất định chơi điện thoại đến nửa đêm, thật là quá không biết quý trọng cơ thể.',zh:'众所周知，熬夜有害健康，可是不少学生偏偏要玩手机玩到半夜，未免太不爱惜身体了。',py:'Zhòngsuǒ-zhōuzhī, áoyè yǒuhài jiànkāng, kěshì bù shǎo xuésheng piānpiān yào wán shǒujī wán dào bànyè, wèimiǎn tài bú àixī shēntǐ le.',goiY:['众所周知','可是……偏偏要……','未免'],giai:'偏偏要 = cố ý làm ngược (cách dùng ①); 未免 (bài 4) = thật là hơi … (nhận xét phê bình nhẹ nhàng).'},
  {vi:'Chỉ cần nhiệt độ vượt quá 40 độ C, vi khuẩn trong thức ăn sẽ sinh sôi rất nhanh, vì vậy đồ ăn thừa phải cho vào tủ lạnh, kẻo bị hỏng.',zh:'只要气温超过40摄氏度，食物里的细菌就会迅速繁殖，所以剩菜要放进冰箱，免得变质。',py:'Zhǐyào qìwēn chāoguò sìshí shèshìdù, shíwù li de xìjūn jiù huì xùnsù fánzhí, suǒyǐ shèngcài yào fàngjìn bīngxiāng, miǎnde biànzhì.',goiY:['只要……就……','摄氏度','繁殖','免得'],giai:'只要……就…… = điều kiện đủ; 免得 (bài 14) đứng đầu vế cuối nêu điều muốn tránh; 超过 + con số (không dùng 超越).'},
  {vi:'Thay vì cả ngày ở lì trong nhà chơi game, chi bằng bước ra ngoài khám phá thế giới bao la này.',zh:'与其整天待在家里玩游戏，不如走出去探索这个广阔的世界。',py:'Yǔqí zhěngtiān dāi zài jiāli wán yóuxì, bùrú zǒu chūqù tànsuǒ zhège guǎngkuò de shìjiè.',goiY:['与其……不如……','探索','广阔'],giai:'与其 A，不如 B: bỏ A chọn B (cấu trúc trong bài khoá); "bao la" = 广阔, không dùng 宽敞 (chỉ nhà cửa rộng rãi).'},
  {vi:'Dù thất bại bao nhiêu lần, cậu cũng đừng mất niềm tin, cùng lắm thì làm lại từ đầu, biết đâu lần sau sẽ vượt qua được chính mình.',zh:'不管失败多少次，你都不要丧失信心，大不了从头再来，说不定下次就能超越自我。',py:'Bùguǎn shībài duōshao cì, nǐ dōu bú yào sàngshī xìnxīn, dàbuliǎo cóngtóu zài lái, shuōbudìng xià cì jiù néng chāoyuè zìwǒ.',goiY:['不管……都……','丧失','大不了','超越'],giai:'不管……都…… = bất kể … đều; 大不了 (bài 6) = cùng lắm thì; 超越自我 = vượt qua chính mình (không nói 超过自我).'},
  {vi:'Thấy cả lớp đều kinh ngạc nhìn mình, cậu ấy lập tức vỡ lẽ ra, hoá ra mình đã mặc ngược áo.',zh:'看到全班同学都诧异地看着自己，他顿时恍然大悟，原来自己把衣服穿反了。',py:'Kàndào quán bān tóngxué dōu chàyì de kànzhe zìjǐ, tā dùnshí huǎngrán-dàwù, yuánlái zìjǐ bǎ yīfu chuānfǎn le.',goiY:['诧异地','顿时','恍然大悟','原来……'],giai:'顿时 (bài 2) + 恍然大悟 = lập tức vỡ lẽ; 原来 dẫn ra điều vừa hiểu ra; 诧异地 + V làm trạng ngữ, nhớ 地.'},
  {vi:'Được biết, nhờ các tình nguyện viên kiên trì làm sạch bãi biển suốt ba năm, loài rùa biển quý hiếm này mới có thể sinh sôi trở lại ở đây.',zh:'据悉，由于志愿者们坚持清理海滩三年，这种珍稀的海龟才得以在这里重新繁殖。',py:'Jùxī, yóuyú zhìyuànzhěmen jiānchí qīnglǐ hǎitān sān nián, zhè zhǒng zhēnxī de hǎiguī cái déyǐ zài zhèli chóngxīn fánzhí.',goiY:['据悉','由于……才……','得以','繁殖'],giai:'据悉 đứng đầu câu (văn phong tin tức); 由于……才得以…… = nhờ … mới có thể …; 得以 đứng ngay trước cụm động từ (在这里重新繁殖).'},
  {vi:'Bố mẹ vốn cho rằng làm nghiên cứu khoa học chẳng có tiền đồ gì, nhưng sau khi tham quan căn cứ nghiên cứu biển sâu, họ không những không phản đối nữa, mà ngược lại còn ủng hộ tôi theo đuổi chân lý.',zh:'父母本来认定搞科研没什么前途，可是参观了深海研究基地以后，他们不但不再反对，反而支持我去追求真理。',py:'Fùmǔ běnlái rèndìng gǎo kēyán méi shénme qiántú, kěshì cānguānle shēnhǎi yánjiū jīdì yǐhòu, tāmen búdàn bú zài fǎnduì, fǎn\'ér zhīchí wǒ qù zhuīqiú zhēnlǐ.',goiY:['认定','不但不……反而……','基地','真理'],giai:'不但不……反而……: vế sau trái hẳn dự đoán; 认定 = khăng khăng cho rằng (chắc chắn hơn 认为); 追求真理 = theo đuổi chân lý.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Tục ngữ nói vạn vật sinh trưởng nhờ mặt trời; sở dĩ nói vậy là vì thực vật không thể thiếu ánh mặt trời, còn động vật lại dựa vào thực vật để duy trì sự sống.',zh:'俗话说万物生长靠太阳，之所以这样说，是因为植物离不开阳光，而动物又靠植物维持生命。',py:'Súhuà shuō wànwù shēngzhǎng kào tàiyáng, zhīsuǒyǐ zhèyàng shuō, shì yīnwèi zhíwù lí bu kāi yángguāng, ér dòngwù yòu kào zhíwù wéichí shēngmìng.',goiY:['俗话 = tục ngữ','之所以……是因为…… = sở dĩ … là vì …','维持生命 = duy trì sự sống'],giai:'之所以……是因为…… nêu kết quả trước, nguyên nhân sau; 而 nối hai vế bổ sung — dịch "còn"; 离不开 dịch "không thể thiếu" thay vì "không rời được".'},
  {vi:'Không có ánh mặt trời thì không có vạn vật — đây vốn là chân lý ai cũng biết, vậy mà cuộc khảo sát biển sâu lại đặt nghi vấn với nó.',zh:'没有阳光就没有万物，这本来是众所周知的真理，可深海考察却对它提出了质疑。',py:'Méiyǒu yángguāng jiù méiyǒu wànwù, zhè běnlái shì zhòngsuǒ-zhōuzhī de zhēnlǐ, kě shēnhǎi kǎochá què duì tā tíchūle zhìyí.',goiY:['众所周知 = ai cũng biết','真理 = chân lý','可……却…… = vậy mà … lại','提出了质疑 = đã đặt nghi vấn'],giai:'本来 = vốn (trước đây vẫn thế); 可……却…… tạo đối lập hai lần — dịch "vậy mà … lại" cho tự nhiên.'},
  {vi:'Các nhà khoa học lặn xuống biển sâu không khỏi kinh ngạc: đáy biển không có ánh mặt trời và thức ăn, sao lại có nhiều sinh vật hình dạng kỳ dị đến vậy?',zh:'潜水到深海的科学家不由得感到诧异：没有阳光和食物的海底，怎么会有这么多长相古怪的生物？',py:'Qiánshuǐ dào shēnhǎi de kēxuéjiā bùyóude gǎndào chàyì: méiyǒu yángguāng hé shíwù de hǎidǐ, zěnme huì yǒu zhème duō zhǎngxiàng gǔguài de shēngwù?',goiY:['不由得 = không khỏi','诧异 = kinh ngạc','长相古怪 = hình dạng kỳ dị','怎么会……？ = sao lại …?'],giai:'不由得 (bài 2) = không kìm được mà …; dấu hai chấm dẫn nội dung của sự kinh ngạc; 怎么会……？ là câu hỏi tu từ bày tỏ ngạc nhiên.'},
  {vi:'Từ mẫu vật xộc ra một mùi hắc, các nhà khoa học chợt vỡ lẽ, rồi từ đó đưa ra một giả thuyết táo bạo.',zh:'样品中冲出一股刺鼻的气味，科学家恍然大悟，进而提出了一个大胆的假说。',py:'Yàngpǐn zhōng chōngchū yì gǔ cìbí de qìwèi, kēxuéjiā huǎngrán-dàwù, jìn\'ér tíchūle yí ge dàdǎn de jiǎshuō.',goiY:['刺鼻 = hắc mũi','恍然大悟 = chợt vỡ lẽ','进而 = rồi từ đó'],giai:'进而 nối bước tiếp theo xây trên vế trước — dịch "rồi từ đó / tiến tới", không dịch đơn giản là "và".'},
  {vi:'Nước biển thấm xuống lòng đất qua những khe nứt do vỏ Trái Đất tách ra; dưới tác dụng của nhiệt độ cao và áp suất cao, muối sunfat đã chuyển hoá thành hydro sunfua.',zh:'海水从地壳分裂而成的裂缝渗透到地下，在高温和高压的作用下，硫酸盐转化成了硫化氢。',py:'Hǎishuǐ cóng dìqiào fēnliè ér chéng de lièfèng shèntòu dào dìxià, zài gāowēn hé gāoyā de zuòyòng xià, liúsuānyán zhuǎnhuà chéngle liúhuàqīng.',goiY:['分裂而成 = tách ra mà thành','渗透 = thấm','在……的作用下 = dưới tác dụng của …'],giai:'Định ngữ dài 地壳分裂而成的 dịch ra sau danh từ: "khe nứt do vỏ Trái Đất tách ra"; 地壳 đọc dìqiào.'},
  {vi:'Một số vi khuẩn nhờ hydro sunfua hấp thụ nhiệt lượng của suối nước nóng mà sinh sôi được, còn động vật nhỏ lại duy trì sự sống nhờ lọc những vi khuẩn này.',zh:'某些细菌借硫化氢吸收温泉的热量得以繁殖，而小动物又靠过滤这些细菌维持生命。',py:'Mǒuxiē xìjūn jiè liúhuàqīng xīshōu wēnquán de rèliàng déyǐ fánzhí, ér xiǎo dòngwù yòu kào guòlǜ zhèxiē xìjūn wéichí shēngmìng.',goiY:['借 = nhờ vào','得以繁殖 = nhờ đó mà sinh sôi được','过滤 = lọc','维持 = duy trì'],giai:'得以 không dịch thành "được phép"; dịch "(nhờ đó) mà … được"; 而……又…… = còn … lại … (nối hai mắt xích của chuỗi thức ăn).'},
  {vi:'Phát hiện này gợi mở cho con người: thay vì khư khư giữ định nghĩa cũ, chi bằng giải phóng tư tưởng, vươn ra ngoài Trái Đất để khám phá sự sống.',zh:'这个发现启发人们，与其固守旧的定义，不如解放思想，迈向地球以外去探索生命。',py:'Zhège fāxiàn qǐfā rénmen, yǔqí gùshǒu jiù de dìngyì, bùrú jiěfàng sīxiǎng, màixiàng dìqiú yǐwài qù tànsuǒ shēngmìng.',goiY:['与其……不如…… = thay vì … chi bằng …','定义 = định nghĩa','解放思想 = giải phóng tư tưởng','迈向 = vươn tới'],giai:'与其 A，不如 B: người nói chọn B; 固守 = khư khư giữ; 迈向……去 + V = tiến tới … để ….'},
  {vi:'Được biết, loại vi khuẩn này chịu được nhiệt độ cao tới 250 độ C; điều đó đủ cho thấy khả năng của nó vượt xa trí tưởng tượng của chúng ta.',zh:'据悉，这种细菌能忍受250摄氏度的高温，这足以说明其本领远远超越了我们的想象。',py:'Jùxī, zhè zhǒng xìjūn néng rěnshòu èrbǎi wǔshí shèshìdù de gāowēn, zhè zúyǐ shuōmíng qí běnlǐng yuǎnyuǎn chāoyuèle wǒmen de xiǎngxiàng.',goiY:['据悉 = được biết','忍受 = chịu đựng','足以 = đủ để','超越 = vượt'],giai:'足以说明 (bài 16) = đủ để cho thấy; 其 = của nó (văn viết); 远远超越 dịch "vượt xa".'},
  {vi:'Trên 65℃ đa số vi khuẩn đều chết, vậy tại sao riêng loại vi khuẩn này lại sống sót được? Sự thật trong đó đến nay vẫn khó mà giải thích.',zh:'高于65℃时，多数细菌都会丧失生命，为什么偏偏这种细菌能存活下来？其中的真相至今仍难以解释。',py:'Gāoyú liùshíwǔ shèshìdù shí, duōshù xìjūn dōu huì sàngshī shēngmìng, wèi shénme piānpiān zhè zhǒng xìjūn néng cúnhuó xiàlái? Qízhōng de zhēnxiàng zhìjīn réng nányǐ jiěshì.',goiY:['丧失生命 = mất mạng, chết','偏偏 = riêng … lại','真相 = sự thật','难以 = khó mà'],giai:'为什么偏偏…… = sao riêng … lại … (trái lẽ thường); 丧失生命 dịch gọn "chết"; 难以 (bài 14) + V.'},
  {vi:'Bất kể loài người nghĩ gì, những sinh vật biển sâu này vẫn giữ đội hình hùng hậu và lộng lẫy, sống ngày tháng một cách nề nếp, phô bày nét đặc sắc riêng.',zh:'不管人类怎么想，这些深海生物依然保持着强大而华丽的阵容，有条不紊地过着日子，展现着独特的精彩。',py:'Bùguǎn rénlèi zěnme xiǎng, zhèxiē shēnhǎi shēngwù yīrán bǎochízhe qiángdà ér huálì de zhènróng, yǒutiáo-bùwěn de guòzhe rìzi, zhǎnxiànzhe dútè de jīngcǎi.',goiY:['不管……依然…… = bất kể … vẫn …','华丽 = lộng lẫy','阵容 = đội hình','有条不紊 = nề nếp','展现 = phô bày'],giai:'Ba vế song song với 着 (保持着, 过着, 展现着) — tiếng Việt giữ nhịp liệt kê; 强大而华丽 dịch "hùng hậu và lộng lẫy".'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 205): 缩写 bài khoá ~400 chữ, tham khảo bảng 练习5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'这篇文章给我们描述了一个奇妙的深海世界，在没有阳光、压力很大的海底，生活着一群奇特的生物，它们靠什么生存，它们有什么奇特的本领。还有什么人类未知的领域。请参考练习5把课文缩写成400字左右的短文。',
  prompt:'Bài văn miêu tả cho chúng ta một thế giới biển sâu kỳ diệu: dưới đáy biển không có ánh mặt trời, áp suất rất lớn, có một nhóm sinh vật kỳ lạ đang sinh sống — chúng dựa vào đâu để sinh tồn, chúng có bản lĩnh đặc biệt gì, và còn những lĩnh vực nào loài người chưa biết. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn khoảng 400 chữ.',
  dan:[
    {hoi:'为什么说万物生长靠太阳？',goiY:'①植物…… ②动物……'},
    {hoi:'几千米深的海底有生物吗？',goiY:'①科学家发现……场所 ②那里的生物……'},
    {hoi:'深海的生物靠什么生存？',goiY:'假说：当……时，在……作用下，……转化成了……，……借……变化，吸收……得以……'},
    {hoi:'描述一下深海耐高温细菌忍受高温的本领。',goiY:'①这种细菌…… ②大部分植物和动物…… ③多数细菌'},
    {hoi:'深海中的生物还有什么使人迷惑不解的问题？',goiY:'①红冠蠕虫：…… ②巨蛤、白蚌：……'}
  ],
  tuNen:['俗话','众所周知','诧异','恍然大悟','进而','得以','据悉','偏偏','迷惑不解','有条不紊'],
  cauTruc:[
    {ten:'俗话说……。人们之所以……，是因为……', nhan:'Mở bài · dẫn tục ngữ', vd:'俗话说万物生长靠太阳。人们之所以这样说，是因为植物生长离不开阳光，而动物又靠植物维持生命。', khi:'Trả lời dòng 1 của bảng (①植物…… ②动物……).'},
    {ten:'然而，……却……', nhan:'Chuyển ý · nêu điều bất ngờ', vd:'然而，科学家们的深海考察却对这个众所周知的真理提出了质疑。', khi:'Nối "chân lý cũ" sang phát hiện dưới đáy biển.'},
    {ten:'……发现了……，那里……。……深感诧异：……？', nhan:'Kể phát hiện + câu hỏi', vd:'潜水到几千米深海底的科学家发现了一个繁殖生命的场所，那里的生物长相古怪。', khi:'Trả lời dòng 2 (①科学家发现……场所 ②那里的生物……).'},
    {ten:'……恍然大悟，进而提出……：当……时，在……作用下，……', nhan:'Trình bày giả thuyết', vd:'科学家恍然大悟，进而提出了一个假说：当海水渗透到地下时，在高温和高压的作用下，硫酸盐转化成了硫化氢……', khi:'Trả lời dòng 3 — giữ đúng khung gợi ý 当……时，在……作用下，……转化成了……，……借……变化，吸收……得以…….'},
    {ten:'据悉，……。一般情况下，……；……。为什么偏偏……？', nhan:'So sánh để làm nổi bật', vd:'一般情况下，高于40摄氏度，大部分植物和动物就无法成活，为什么偏偏这种细菌能够存活下来？', khi:'Trả lời dòng 4: nêu con số 250℃ rồi so với 40℃, 65℃, kết bằng câu hỏi 偏偏.'},
    {ten:'……还有许多使人迷惑不解的问题：……；不管……，……依然……', nhan:'Kết bài · câu hỏi mở', vd:'不管人类怎么想，这些深海生物依然有条不紊地生活着。', khi:'Trả lời dòng 5, khép lại bằng triển vọng (食物资源 / 研究基地).'}
  ],
  checklist:[
    'Đủ khoảng 400 chữ Hán chưa (khoảng 360–470, không đếm dấu câu và chữ số)?',
    'Có đủ 5 ý theo đúng thứ tự bảng bài tập 5 (vì sao cần mặt trời — đáy biển có sinh vật — giả thuyết sinh tồn — khả năng chịu nhiệt của vi khuẩn — những câu hỏi chưa có lời giải) chưa?',
    'Ý 3 có giữ đúng khung giả thuyết 当……时，在……作用下，……转化成了……，……借……，吸收……得以…… không?',
    'Đã dùng đủ 3 điểm ngữ pháp của bài (进而 / 得以 / 偏偏) và ít nhất 6 từ mới chưa?',
    'Có viết bằng lời của mình, bỏ bớt chi tiết phụ (tên từng loài, chú thích hoá học) thay vì chép nguyên bài khoá không? Các con số 40℃, 65℃, 250℃ có chính xác không?'
  ],
  model:{
    zh:'俗话说万物生长靠太阳。人们之所以这样说，是因为历来植物生长离不开阳光，而动物又靠植物维持生命。没有阳光，就没有万物，这是众所周知的真理。然而，科学家们的深海考察却对它提出了质疑。潜水到几千米深海底的科学家发现了一个繁殖生命的场所，那里的生物长相古怪，种类繁多。科学家深感诧异：在没有阳光和食物、压力又很大的海底，怎么会有这么多生物呢？科学家从带回的样品中闻到了刺鼻的硫化氢气味，他们恍然大悟，进而提出了一个假说：当海水从地壳的裂缝渗透到地下时，在高温和高压的作用下，水里的硫酸盐转化成了硫化氢，某些细菌借硫化氢代谢变化，吸收温泉的热量得以繁殖。小动物靠过滤细菌维持生命，又成了大动物的食物，这样就构成了一个新的食物链。据悉，这种细菌能在250摄氏度的环境下生存。一般情况下，高于40℃，大部分植物和动物就无法成活；高于65℃，多数细菌会丧失生命。为什么偏偏这种细菌能够存活下来呢？深海里还有许多使人迷惑不解的问题：红冠蠕虫没有嘴，没有眼，仅靠身体过滤海水中的食物，它们是怎么繁殖后代的？巨蛤和白蚌的生理结构、门类归属又是怎样的？不管人类怎么想，这些深海生物依然有条不紊地生活着。这片神秘而广阔的深海世界，也许能成为奇妙的科学研究基地。',
    py:'Súhuà shuō wànwù shēngzhǎng kào tàiyáng. Rénmen zhīsuǒyǐ zhèyàng shuō, shì yīnwèi lìlái zhíwù shēngzhǎng lí bu kāi yángguāng, ér dòngwù yòu kào zhíwù wéichí shēngmìng. Méiyǒu yángguāng, jiù méiyǒu wànwù, zhè shì zhòngsuǒ-zhōuzhī de zhēnlǐ. Rán\'ér, kēxuéjiāmen de shēnhǎi kǎochá què duì tā tíchūle zhìyí. Qiánshuǐ dào jǐ qiān mǐ shēn hǎidǐ de kēxuéjiā fāxiànle yí ge fánzhí shēngmìng de chǎngsuǒ, nàli de shēngwù zhǎngxiàng gǔguài, zhǒnglèi fánduō. Kēxuéjiā shēn gǎn chàyì: zài méiyǒu yángguāng hé shíwù, yālì yòu hěn dà de hǎidǐ, zěnme huì yǒu zhème duō shēngwù ne? Kēxuéjiā cóng dàihuí de yàngpǐn zhōng wéndàole cìbí de liúhuàqīng qìwèi, tāmen huǎngrán-dàwù, jìn\'ér tíchūle yí ge jiǎshuō: dāng hǎishuǐ cóng dìqiào de lièfèng shèntòu dào dìxià shí, zài gāowēn hé gāoyā de zuòyòng xià, shuǐ li de liúsuānyán zhuǎnhuà chéngle liúhuàqīng, mǒuxiē xìjūn jiè liúhuàqīng dàixiè biànhuà, xīshōu wēnquán de rèliàng déyǐ fánzhí. Xiǎo dòngwù kào guòlǜ xìjūn wéichí shēngmìng, yòu chéngle dà dòngwù de shíwù, zhèyàng jiù gòuchéngle yí ge xīn de shíwùliàn. Jùxī, zhè zhǒng xìjūn néng zài èrbǎi wǔshí shèshìdù de huánjìng xià shēngcún. Yìbān qíngkuàng xià, gāoyú sìshí shèshìdù, dà bùfen zhíwù hé dòngwù jiù wúfǎ chénghuó; gāoyú liùshíwǔ shèshìdù, duōshù xìjūn huì sàngshī shēngmìng. Wèi shénme piānpiān zhè zhǒng xìjūn nénggòu cúnhuó xiàlái ne? Shēnhǎi li hái yǒu xǔduō shǐ rén míhuò bù jiě de wèntí: hóngguān rúchóng méiyǒu zuǐ, méiyǒu yǎn, jǐn kào shēntǐ guòlǜ hǎishuǐ zhōng de shíwù, tāmen shì zěnme fánzhí hòudài de? Jùgé hé báibàng de shēnglǐ jiégòu, ménlèi guīshǔ yòu shì zěnyàng de? Bùguǎn rénlèi zěnme xiǎng, zhèxiē shēnhǎi shēngwù yīrán yǒutiáo-bùwěn de shēnghuózhe. Zhè piàn shénmì ér guǎngkuò de shēnhǎi shìjiè, yěxǔ néng chéngwéi qímiào de kēxué yánjiū jīdì.',
    vn:'Tục ngữ có câu: vạn vật sinh trưởng nhờ mặt trời. Người ta sở dĩ nói vậy là vì xưa nay thực vật sinh trưởng không thể thiếu ánh mặt trời, còn động vật lại dựa vào thực vật để duy trì sự sống. Không có ánh mặt trời thì không có vạn vật — đây là chân lý ai cũng biết. Thế nhưng, cuộc khảo sát biển sâu của các nhà khoa học lại đặt nghi vấn với chân lý ấy. Các nhà khoa học lặn xuống đáy biển sâu mấy nghìn mét đã phát hiện một nơi sinh sôi sự sống; sinh vật ở đó hình dạng kỳ dị, chủng loại phong phú. Các nhà khoa học vô cùng kinh ngạc: ở đáy biển không có ánh mặt trời và thức ăn, áp suất lại rất lớn, sao lại có nhiều sinh vật như vậy? Các nhà khoa học ngửi thấy mùi hydro sunfua hắc mũi từ mẫu vật mang về; họ chợt vỡ lẽ, rồi từ đó đưa ra một giả thuyết: khi nước biển thấm xuống lòng đất qua các khe nứt của vỏ Trái Đất, dưới tác dụng của nhiệt độ cao và áp suất cao, muối sunfat trong nước chuyển hoá thành hydro sunfua; một số vi khuẩn nhờ hydro sunfua mà trao đổi chất, hấp thụ nhiệt lượng của suối nước nóng nên sinh sôi được. Động vật nhỏ duy trì sự sống nhờ lọc vi khuẩn, rồi lại trở thành thức ăn của động vật lớn, thế là hình thành một chuỗi thức ăn mới. Được biết, loại vi khuẩn này có thể sống trong môi trường 250 độ C. Thông thường, trên 40 độ C thì phần lớn thực vật và động vật không sống nổi; trên 65 độ C thì đa số vi khuẩn sẽ chết. Tại sao riêng loại vi khuẩn này lại sống sót được? Dưới biển sâu còn nhiều câu hỏi khiến người ta khó hiểu: giun ống mào đỏ không có miệng, không có mắt, chỉ dựa vào thân mình để lọc thức ăn trong nước biển, vậy chúng sinh sản bằng cách nào? Cấu tạo sinh lý và việc xếp loài của sò khổng lồ, trai trắng lại ra sao? Bất kể loài người nghĩ gì, những sinh vật biển sâu này vẫn sống một cách nề nếp. Thế giới biển sâu huyền bí và bao la này có lẽ sẽ trở thành một căn cứ nghiên cứu khoa học kỳ diệu.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (dựa vào gợi ý, trình bày ngắn gọn nội dung chính của bài khoá). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'为什么说万物生长靠太阳？',
     q_vn:'Vì sao nói vạn vật sinh trưởng nhờ mặt trời?',
     hint:'①植物…… ②动物……',
     sample:'因为历来植物生长离不开阳光，而动物又靠植物维持生命。所以没有阳光，就没有万物，这是众所周知的真理。',
     sample_vn:'Vì xưa nay thực vật sinh trưởng không thể thiếu ánh mặt trời, còn động vật lại dựa vào thực vật để duy trì sự sống. Cho nên không có ánh mặt trời thì không có vạn vật — đây là chân lý ai cũng biết.',
     note:'Hai ý ① ② nối bằng 而……又……; kết bằng 所以……，这是众所周知的真理.'},
    {q_zh:'几千米深的海底有生物吗？',
     q_vn:'Đáy biển sâu mấy nghìn mét có sinh vật không?',
     hint:'①科学家发现……场所 ②那里的生物……',
     sample:'有。潜水到几千米深海底的科学家发现了一个繁殖生命的场所。那里的生物长相古怪，蛤、蚌、蟹、贝壳、红冠蠕虫等等，什么都有。',
     sample_vn:'Có. Các nhà khoa học lặn xuống đáy biển sâu mấy nghìn mét đã phát hiện một nơi sinh sôi sự sống. Sinh vật ở đó hình dạng kỳ dị: sò, trai, cua, các loài có vỏ, giun ống mào đỏ…, cái gì cũng có.',
     note:'Trả lời thẳng 有 rồi mới dẫn chứng; liệt kê bằng dấu 、 và kết 等等，什么都有.'},
    {q_zh:'深海的生物靠什么生存？',
     q_vn:'Sinh vật biển sâu dựa vào đâu để sinh tồn?',
     hint:'假说：当……时，在……作用下，……转化成了……，……借……变化，吸收……得以……',
     sample:'科学家提出了这样的假说：当海水从地壳分裂而成的裂缝渗透到地下时，在高温和高压的作用下，水里的硫酸盐转化成了硫化氢，某些细菌借硫化氢代谢变化，吸收温泉的热量得以繁殖。小动物靠过滤细菌维持生命，大动物又吃小动物，这样就构成了一个新的食物链。',
     sample_vn:'Các nhà khoa học đưa ra giả thuyết: khi nước biển thấm xuống lòng đất qua những khe nứt do vỏ Trái Đất tách ra, dưới tác dụng của nhiệt độ cao và áp suất cao, muối sunfat trong nước chuyển hoá thành hydro sunfua; một số vi khuẩn nhờ hydro sunfua mà trao đổi chất, hấp thụ nhiệt lượng của suối nước nóng nên sinh sôi được. Động vật nhỏ sống nhờ lọc vi khuẩn, động vật lớn lại ăn động vật nhỏ, thế là hình thành một chuỗi thức ăn mới.',
     note:'Giữ đúng khung gợi ý; 得以 + V (điểm ngữ pháp 2); có thể thêm câu về 食物链 cho trọn ý.'},
    {q_zh:'描述一下深海耐高温细菌忍受高温的本领。',
     q_vn:'Hãy miêu tả khả năng chịu nhiệt của vi khuẩn chịu nhiệt ở biển sâu.',
     hint:'①这种细菌…… ②大部分植物和动物…… ③多数细菌',
     sample:'据悉，这种细菌忍受高温的本领远远超越了我们的想象，它们能在250摄氏度的环境下生存。一般情况下，高于40摄氏度，大部分植物和动物就无法成活；高于65摄氏度，多数细菌会丧失生命。',
     sample_vn:'Được biết, khả năng chịu nhiệt cao của loại vi khuẩn này vượt xa trí tưởng tượng của chúng ta, chúng có thể sống trong môi trường 250 độ C. Thông thường, trên 40 độ C thì phần lớn thực vật và động vật không sống nổi; trên 65 độ C thì đa số vi khuẩn sẽ chết.',
     note:'Nêu con số của vi khuẩn này trước, rồi so sánh với ② và ③ (dùng dấu ；); có thể kết bằng câu hỏi 为什么偏偏…….'},
    {q_zh:'深海中的生物还有什么使人迷惑不解的问题？',
     q_vn:'Sinh vật biển sâu còn những câu hỏi nào khiến người ta khó hiểu?',
     hint:'①红冠蠕虫：…… ②巨蛤、白蚌：……',
     sample:'红冠蠕虫没有嘴，没有眼，甚至没有消化系统，仅靠伸出套管顶端的身体过滤海水中的食物，它们是怎么繁殖后代的呢？还有体积庞大的巨蛤和造型奇特的白蚌，它们的生理结构、食物基础，甚至门类归属，都使人迷惑不解。',
     sample_vn:'Giun ống mào đỏ không có miệng, không có mắt, thậm chí không có hệ tiêu hoá, chỉ dựa vào phần thân thò ra ở đầu ống để lọc thức ăn trong nước biển — vậy chúng sinh sản bằng cách nào? Còn sò khổng lồ kích thước đồ sộ và trai trắng hình dáng kỳ lạ, cấu tạo sinh lý, nguồn thức ăn, thậm chí việc chúng thuộc ngành loài nào đều khiến người ta khó hiểu.',
     note:'Hai loài, mỗi loài một câu hỏi; dùng 甚至 để tăng tiến và kết bằng 都使人迷惑不解.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 19',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你暑假去海南玩得怎么样？'},
            {sp:'男',zh:'别提多开心了！我第一次学潜水，在海底看到了好多五颜六色的鱼，还捡了一大袋贝壳。'}],
     q:'男的暑假做了什么？',qvn:'Kỳ nghỉ hè người đàn ông đã làm gì?',
     opts:['在海南学了潜水','在家里养鱼','去北方看雪','在海边卖贝壳'],ans:0,
     why:'我第一次学潜水 → học lặn ở Hải Nam. Anh ấy nhặt vỏ sò (捡贝壳) chứ không bán.',
     words:['潜水','贝壳']},

    {n:2,
     lines:[{sp:'男',zh:'冰箱里怎么有一股刺鼻的气味？'},
            {sp:'女',zh:'可能是那盒鸡蛋坏了。夏天气温高，细菌繁殖得快，剩菜剩饭最好早点儿吃完。'}],
     q:'冰箱里为什么有难闻的气味？',qvn:'Vì sao trong tủ lạnh có mùi khó ngửi?',
     opts:['冰箱坏了','鸡蛋可能坏了','刚放了鲜花','有人放了香水'],ans:1,
     why:'可能是那盒鸡蛋坏了 → trứng có thể đã hỏng; 细菌繁殖得快 là lý do đồ ăn dễ hỏng vào mùa hè.',
     words:['刺','气味','细菌','繁殖']},

    {n:3,
     lines:[{sp:'女',zh:'你怎么突然对海洋生物这么感兴趣了？'},
            {sp:'男',zh:'我看了一部纪录片，讲的是没有阳光的深海世界。那里的生物长相古怪，我看完深感诧异，就想好好探索一下。'}],
     q:'男的为什么对海洋生物感兴趣？',qvn:'Vì sao người đàn ông quan tâm đến sinh vật biển?',
     opts:['老师布置了作业','他从小住在海边','看了一部关于深海的纪录片','他的父母是科学家'],ans:2,
     why:'我看了一部纪录片，讲的是……深海世界 → xem phim tài liệu về biển sâu nên thấy hứng thú.',
     words:['古怪','诧异','探索']},

    {n:4,
     lines:[{sp:'男',zh:'这次物理考试你怎么考得这么好？'},
            {sp:'女',zh:'以前我总是死记硬背，后来老师让我先把原理弄清楚，进而举一反三，成绩就慢慢提高了。'}],
     q:'女的成绩为什么提高了？',qvn:'Vì sao thành tích của người phụ nữ tiến bộ?',
     opts:['她每天都死记硬背','她请了家教','考试题目很简单','她改变了学习方法'],ans:3,
     why:'以前……死记硬背，后来……先把原理弄清楚，进而举一反三 → đổi cách học: hiểu nguyên lý trước, từ đó suy ra những cái khác.',
     words:['进而']},

    {n:5,
     lines:[{sp:'女',zh:'你不是说周末要去爬山吗？怎么没去？'},
            {sp:'男',zh:'别提了，车票也买了，东西也准备好了，偏偏周六一大早下起了大雨。'}],
     q:'男的为什么没去爬山？',qvn:'Vì sao người đàn ông không đi leo núi?',
     opts:['车票没买到','下大雨了','他生病了','朋友不去了'],ans:1,
     why:'车票也买了……偏偏……下起了大雨 → mọi thứ đã chuẩn bị xong, trớ trêu trời lại mưa to (偏偏 cách dùng ②).',
     words:['偏偏']},

    {n:6,
     lines:[{sp:'男',zh:'据悉，今年报名参加学校科技节的人数超过了三百，比去年多了一倍。'},
            {sp:'女',zh:'是啊，学校今年还专门建了一个科学实验基地，同学们可以在那里自由探索，积极性当然高了。'}],
     q:'关于今年的科技节，可以知道什么？',qvn:'Về lễ hội khoa học kỹ thuật năm nay, có thể biết điều gì?',
     opts:['报名的人比去年少','实验基地还没建好','同学们不太积极','报名的人数超过三百'],ans:3,
     why:'人数超过了三百，比去年多了一倍 → hơn ba trăm người, gấp đôi năm ngoái; căn cứ thí nghiệm đã xây xong (建了).',
     words:['据悉','基地','探索']},

    {n:7,
     lines:[{sp:'女',zh:'众所周知，大部分生物都离不开阳光。然而，科学家在几千米深的海底发现，某些细菌能靠地球内部的热能维持生命，而小动物又以这些细菌为食。这告诉我们，在没有阳光的条件下，也可能存在生命。'}],
     q:'这段话主要告诉我们什么？',qvn:'Đoạn văn chủ yếu cho chúng ta biết điều gì?',
     opts:['没有阳光也可能有生命','深海里没有任何生物','细菌都怕高温','所有动物都靠阳光生存'],ans:0,
     why:'Câu kết 在没有阳光的条件下，也可能存在生命 là ý chính; 然而 phản bác quan niệm "mọi sinh vật đều cần ánh nắng".',
     words:['众所周知','维持','细菌']},

    {n:8,
     lines:[{sp:'男',zh:'有人说，与其研究深海里的耐高温细菌，不如去探索金星上是否有生物存在。其实这两者并不矛盾：了解深海细菌忍受高温的本领，正好可以帮助我们判断，在高温高压的其他星球上，生命能否得以生存。'}],
     q:'说话人认为研究深海细菌有什么意义？',qvn:'Người nói cho rằng nghiên cứu vi khuẩn biển sâu có ý nghĩa gì?',
     opts:['可以找到新的食物','可以治疗疾病','可以帮助判断其他星球上能否有生命','没有什么意义'],ans:2,
     why:'……正好可以帮助我们判断，在……其他星球上，生命能否得以生存 → giúp phán đoán sự sống trên hành tinh khác. 并不矛盾 bác bỏ ý "chẳng có ý nghĩa".',
     words:['探索','忍受','得以']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn hỏi vì sao cuối tuần em không đi biển như đã hẹn.',
     a:{sp:'Bạn',zh:'你不是说这个周末去海边吗？怎么还在家？',vn:'Cậu bảo cuối tuần này đi biển cơ mà? Sao vẫn ở nhà thế?'},
     need:['Dùng 偏偏'],
     sample:'票也买了，酒店也订了，偏偏这时候我发烧了，只好在家休息。',
     samplePy:'Piào yě mǎi le, jiǔdiàn yě dìng le, piānpiān zhè shíhou wǒ fāshāo le, zhǐhǎo zài jiā xiūxi.',
     sampleVn:'Vé cũng mua rồi, khách sạn cũng đặt rồi, trớ trêu đúng lúc này tớ lại sốt, đành ở nhà nghỉ.',
     tip:'A也……了，B也……了，偏偏……: liệt kê việc đã chuẩn bị rồi nêu điều trái mong muốn (偏偏 cách dùng ②).'},

    {scene:'Em gái hỏi vì sao môn Toán của em tiến bộ nhanh.',
     a:{sp:'Em gái',zh:'姐姐，你的数学怎么进步得这么快？',vn:'Chị ơi, sao môn Toán của chị tiến bộ nhanh thế?'},
     need:['Dùng 先……，进而……'],
     sample:'我先把基本的公式弄明白，进而多做练习，慢慢就找到了解题的规律。',
     samplePy:'Wǒ xiān bǎ jīběn de gōngshì nòng míngbai, jìn\'ér duō zuò liànxí, mànmàn jiù zhǎodàole jiě tí de guīlǜ.',
     sampleVn:'Chị hiểu rõ các công thức cơ bản trước, rồi từ đó làm nhiều bài tập, dần dần tìm ra quy luật giải bài.',
     tip:'先……，进而……: bước sau xây trên bước trước (điểm ngữ pháp 1).'},

    {scene:'Thầy hỏi thí nghiệm khoa học của nhóm em có cần giúp gì không.',
     a:{sp:'Thầy giáo',zh:'你们小组的科学实验进行得怎么样？需要帮忙吗？',vn:'Thí nghiệm khoa học của nhóm em tiến hành thế nào rồi? Có cần giúp gì không?'},
     need:['Dùng 得以','Dùng 基地 hoặc 样品'],
     sample:'多亏学校让我们使用实验基地，我们的实验才得以顺利进行，下个星期就能出结果了。',
     samplePy:'Duōkuī xuéxiào ràng wǒmen shǐyòng shíyàn jīdì, wǒmen de shíyàn cái déyǐ shùnlì jìnxíng, xià ge xīngqī jiù néng chū jiéguǒ le.',
     sampleVn:'Nhờ nhà trường cho chúng em dùng khu thí nghiệm, thí nghiệm của chúng em mới tiến hành suôn sẻ được, tuần sau là có kết quả ạ.',
     tip:'多亏……，……才得以……: nhờ … mới có thể … (得以 = điểm ngữ pháp 2).'},

    {scene:'Bạn khẳng định "không có ánh nắng thì sinh vật nào cũng chết". Em phản bác.',
     a:{sp:'Bạn',zh:'没有阳光，任何生物都活不了，对吧？',vn:'Không có ánh nắng thì sinh vật nào cũng không sống nổi, đúng không?'},
     need:['Dùng 众所周知','Dùng 然而 hoặc 却'],
     sample:'众所周知，大部分生物离不开阳光，然而科学家却在深海里发现了不靠阳光生存的细菌。',
     samplePy:'Zhòngsuǒ-zhōuzhī, dà bùfen shēngwù lí bu kāi yángguāng, rán\'ér kēxuéjiā què zài shēnhǎi li fāxiànle bú kào yángguāng shēngcún de xìjūn.',
     sampleVn:'Ai cũng biết phần lớn sinh vật không thể thiếu ánh nắng, thế nhưng các nhà khoa học lại phát hiện dưới biển sâu có vi khuẩn sống không cần ánh nắng.',
     tip:'众所周知 + 然而……却……: nêu điều ai cũng biết rồi phản bác bằng phát hiện mới.'},

    {scene:'Bạn rủ em cuối tuần đi xem phim tài liệu về biển sâu.',
     a:{sp:'Bạn',zh:'周末有部关于深海的纪录片，你想去看吗？',vn:'Cuối tuần có bộ phim tài liệu về biển sâu, cậu muốn đi xem không?'},
     need:['Dùng 与其……不如……','Dùng 奇妙 hoặc 探索'],
     sample:'当然想！与其在家玩手机，不如去看看那个奇妙的深海世界。',
     samplePy:'Dāngrán xiǎng! Yǔqí zài jiā wán shǒujī, bùrú qù kànkan nàge qímiào de shēnhǎi shìjiè.',
     sampleVn:'Muốn chứ! Thay vì ở nhà chơi điện thoại, chi bằng đi xem thế giới biển sâu kỳ diệu ấy.',
     tip:'与其 A，不如 B: thay vì A, chi bằng B (cấu trúc trong bài khoá).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Phát thanh viên đọc bản tin thời sự.',
     a:'据悉，今年入境旅游观光的人数已超过千万。',b:'听说啊，今年来中国旅游的外国人可多了，一千多万呢！',better:'a',
     why:'Bản tin dùng văn phong báo chí: 据悉, 入境旅游观光, 已超过. Câu b (听说啊, 可多了, 呢) là lời kể chuyện với bạn bè.'},

    {scene:'Nhắn tin kể với bạn thân về chuyến học lặn.',
     a:'昨天我学潜水了，海底太美了，我都舍不得上来！',b:'本人昨日参加潜水活动，海底景色十分奇妙。',better:'a',
     why:'Với bạn thân, lời kể tự nhiên, có cảm xúc (太美了, 舍不得上来). Câu b (本人, 昨日) giống báo cáo hoạt động.'},

    {scene:'Viết báo cáo khoa học về giun ống mào đỏ.',
     a:'那些虫子长得怪怪的，没嘴没眼，也不知道怎么生孩子。',b:'红冠蠕虫无口无眼，亦无消化系统，其繁殖方式尚待进一步研究。',better:'b',
     why:'Báo cáo khoa học cần thuật ngữ và văn viết: 无……亦无……, 其繁殖方式, 尚待研究. Câu a (怪怪的, 生孩子) là khẩu ngữ, dùng từ không chính xác.'},

    {scene:'Giải thích cho em trai lớp 3 vì sao cần mặt trời.',
     a:'植物要晒太阳才能长大，动物又吃植物，所以没有太阳就什么都没有啦。',b:'历来植物生长离不开阳光，而动物又靠植物维持生命，此乃众所周知之真理。',better:'a',
     why:'Nói với trẻ nhỏ cần giản dị, dễ hiểu. Câu b (历来, 维持生命, 此乃……之……) quá trang trọng, em nhỏ khó hiểu.'},

    {scene:'Phát biểu khai mạc hội thảo khoa học về biển sâu.',
     a:'这次深海考察向人类早已认定的准则提出了质疑，启发我们解放思想，进一步探索生命存在的新路。',b:'这次去深海可好玩了，我们发现了好多怪东西！',better:'a',
     why:'Phát biểu hội thảo cần trang trọng, chính xác: 考察, 认定, 准则, 提出质疑, 探索. Câu b chỉ hợp khi kể chuyện với bạn.'},

    {scene:'Nói với bố mẹ vì sao về nhà muộn.',
     a:'鉴于今日交通状况不佳，本人未能按时返家，特此说明。',b:'爸，妈，路上堵车堵得太厉害了，所以回来晚了，你们别担心。',better:'b',
     why:'Nói với bố mẹ dùng lời thân mật. Câu a (鉴于, 本人, 特此说明) như công văn, nghe rất xa cách — thậm chí buồn cười.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据提示，简述课文主要内容</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'为什么说万物生长靠太阳？', cue:'①植物…… ②动物……', words:['俗话','历来','维持','众所周知','真理','认定','准则','定义']},
    {step:'几千米深的海底有生物吗？', cue:'①科学家发现……场所 ②那里的生物……', words:['潜水','繁殖','场所','古怪','贝壳','诧异']},
    {step:'深海的生物靠什么生存？', cue:'假说：当……时，在……作用下，……转化成了……，……借……变化，吸收……得以……', words:['样品','刺','气味','恍然大悟','进而','分裂','渗透','细菌','过滤','来源','合成','解放','迈','探索']},
    {step:'描述一下深海耐高温细菌忍受高温的本领。', cue:'①这种细菌…… ②大部分植物和动物…… ③多数细菌', words:['据悉','忍受','超越','摄氏度','丧失','偏偏','真相']},
    {step:'深海中的生物还有什么使人迷惑不解的问题？', cue:'①红冠蠕虫：…… ②巨蛤、白蚌：……', words:['华丽','阵容','有条不紊','展现','丛','体积','造型','迷惑','广阔','奇妙','基地']}
  ],
  checklist: [
    'Kể đủ 5 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có nói đủ hai vế: thực vật cần ánh nắng — động vật cần thực vật, và kết "không có ánh nắng thì không có vạn vật" không?',
    'Ý 3 có kể được giả thuyết theo đúng khung 当……时，在……作用下，……转化成了……，……得以…… và nhắc tới chuỗi thức ăn mới không?',
    'Ý 4 có nêu chính xác ba con số 250℃ – 40℃ – 65℃ và dùng 偏偏 để đặt câu hỏi không?',
    'Ý 5 có nêu được câu hỏi về giun ống mào đỏ (không miệng, không mắt, sinh sản thế nào) và về sò khổng lồ, trai trắng không?'
  ]
};


// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 201–206) — đáp án theo đáp án sách
// (练习2 và 练一练 của 进而 / 得以 / 偏偏 không có trong đáp án sách → câu tham khảo;
//  热身 (nhận biết tên sinh vật, nhóm từ 疑/地/裂/探) và 扩展2 词汇 (chỉ bảng 搭配 để làm quen) không có bài tập → bỏ qua)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'历来', chu:'来', ds:['从来','本来','原来','后来']},
   cau:[
     {tu:'维持', chu:'持', dap:['持续','持久','坚持','主持'], them:['支持','保持','扶持','持之以恒','坚持不懈'],
      giai:'持 = giữ, nắm giữ, duy trì (维持 = giữ cho tiếp tục; 坚持 = giữ vững; 持续 / 持久 = giữ lâu dài; 主持 = nắm giữ, điều khiển — chủ trì).'},
     {tu:'准则', chu:'则', dap:['规则','法则','条则','原则'], them:['守则','细则','总则','通则'],
      giai:'则 = quy tắc, phép tắc, chuẩn mực (规则 = quy tắc; 原则 = nguyên tắc; 守则 = nội quy). Lưu ý: trong 否则 / 然则, 则 là liên từ "thì" — khác nghĩa, không tính.'},
     {tu:'场所', chu:'场', dap:['场地','场景','广场','商场'], them:['市场','操场','机场','会场','现场','剧场','球场'],
      giai:'场 = nơi, bãi rộng dùng cho một hoạt động (场所 = nơi chốn; 广场 = quảng trường; 商场 = trung tâm thương mại; 操场 = sân tập).'},
     {tu:'广阔', chu:'广', dap:['广大','广告','广播','宽广'], them:['广泛','推广','广场','广义','深广'],
      giai:'广 = rộng, rộng khắp (广阔 = rộng lớn; 宽广 = rộng rãi; 广泛 = rộng khắp; 广播 / 广告 = truyền đi rộng rãi).'}
   ]},

  {kieu:'gx', de:'用所给词语完成句子', vn:'Dùng từ cho sẵn hoàn thành câu (sách không in đáp án — dưới đây là câu gợi ý, em viết khác mà đúng từ, đúng nghĩa vẫn được)',
   cau:[
     {s:'先提出计划，＿＿。', tu:'进而', dap:'先提出计划，进而制定出具体的实施步骤。',
      giai:'先……，进而……: bước sau (制定具体步骤) dựa trên bước trước (提出计划).'},
     {s:'几十年来，＿＿。', tu:'忍受', dap:'几十年来，他一直忍受着病痛的折磨，却从来没有放弃过工作。',
      giai:'忍受 + 痛苦 / 折磨 = chịu đựng; 几十年来 hợp với 一直……着 (kéo dài đến nay).'},
     {s:'星期天他来找我，＿＿。', tu:'偏偏', dap:'星期天他来找我，偏偏我不在家。',
      giai:'偏偏 (cách dùng ②): sự việc trái với mong muốn — anh ấy đến tìm đúng lúc tôi vắng nhà.'},
     {s:'这个地方＿＿。', tu:'广阔', dap:'这个地方地域广阔，物产丰富。',
      giai:'地域 / 土地 / 草原 + 广阔 = rộng lớn; ghép thêm vế 物产丰富 cho câu trọn ý.'},
     {s:'＿＿闻名世界。', tu:'众所周知', dap:'众所周知，中国的万里长城闻名世界。',
      giai:'众所周知 đứng đầu câu, sau có dấu phẩy; nội dung sau nó phải là điều ai cũng biết.'},
     {s:'各项工作＿＿。', tu:'有条不紊', dap:'各项工作都在有条不紊地进行着。',
      giai:'有条不紊地 + V (进行 / 开展) = tiến hành có trật tự; làm trạng ngữ nhớ dùng 地.'}
   ]},

  {kieu:'gx', de:'用“进而”“得以”改写句子（注释1–2 · 练一练）', vn:'Dùng 进而, 得以 viết lại câu (Chú thích 1–2 · Luyện tập). Sách không in đáp án — dưới đây là câu gợi ý.',
   cau:[
     {s:'新的教学方法要先在个别班级进行实验，之后在全校推广。', tu:'进而', dap:'新的教学方法要先在个别班级进行实验，进而在全校推广。',
      giai:'之后 → 进而: nhấn bước sau (mở rộng toàn trường) được xây trên kết quả bước trước (thử nghiệm).'},
     {s:'要先把原著表达的思想弄清楚，在此基础上，很好地去理解原著。', tu:'进而', dap:'要先把原著表达的思想弄清楚，进而更好地理解原著。',
      giai:'在此基础上 chính là nghĩa của 进而 → thay bằng 进而, câu gọn hơn.'},
     {s:'据说，著名画家齐白石画虾数十年，到了七十岁时赶上了古人的水平，后来继续努力，超越了古人。', tu:'进而', dap:'据说，著名画家齐白石画虾数十年，到了七十岁时赶上了古人的水平，后来继续努力，进而超越了古人。',
      giai:'Từ "đuổi kịp" (赶上) tiến thêm một bước thành "vượt qua" (超越) → dùng 进而.'},
     {s:'长寿的一生使他有机会见证中国历史上的伟大年代。', tu:'得以', dap:'长寿的一生使他得以见证中国历史上的伟大年代。',
      giai:'有机会 + V → 得以 + V: nhờ điều kiện (sống lâu) mà có thể chứng kiến.'},
     {s:'大机器代替了手工工场，科学技术在生产上才能广泛运用。', tu:'得以', dap:'大机器代替了手工工场，科学技术在生产上才得以广泛运用。',
      giai:'才能 → 才得以: vế trước là điều kiện, vế sau là kết quả đạt được nhờ điều kiện đó.'},
     {s:'这个联欢会，希望孩子们能唱的唱，能跳的跳，能写的写，能画的画，就是要让所有孩子的特长都能够发挥出来。', tu:'得以', dap:'这个联欢会，希望孩子们能唱的唱，能跳的跳，能写的写，能画的画，就是要让所有孩子的特长都得以发挥。',
      giai:'能够发挥出来 → 得以发挥: kết quả mong đợi nhờ buổi liên hoan tạo điều kiện; 得以 + động từ hai âm tiết.'}
   ]},

  {kieu:'gx', de:'用“偏偏”完成句子（注释3 · 练一练）', vn:'Dùng 偏偏 hoàn thành câu (Chú thích 3 · Luyện tập). Sách không in đáp án — dưới đây là câu gợi ý.',
   cau:[
     {s:'他从小就喜欢画画儿，也有绘画的天赋，没想到＿＿。', tu:'偏偏', dap:'他从小就喜欢画画儿，也有绘画的天赋，没想到父母偏偏不让他学画画儿。',
      giai:'偏偏不让 = cố ý làm ngược với mong muốn / điều kiện khách quan (cách dùng ①, đi với 不).'},
     {s:'去南方旅游的火车票也买了，旅馆也订了，＿＿。', tu:'偏偏', dap:'去南方旅游的火车票也买了，旅馆也订了，偏偏这时候公司让我去出差。',
      giai:'Mọi thứ đã chuẩn bị xong, sự thật lại trái với mong muốn (cách dùng ②).'},
     {s:'跟他说好有急事要联系，可他＿＿。', tu:'偏偏', dap:'跟他说好有急事要联系，可他偏偏把手机关了。',
      giai:'可 + chủ ngữ + 偏偏……: đã hẹn giữ liên lạc mà anh ta lại tắt máy — trái với yêu cầu đã thống nhất.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['俗话','历来','超越','真理','众所周知'],
   cau:[
     {s:'＿＿说：“独木不成林”，这句话告诉我们团结的重要性。＿＿，一根筷子很容易折断，可一把筷子就很难折断了，团结能使我们＿＿自身的局限，产生巨大的力量，所以“团结力量大”成为＿＿人们都认可的＿＿。',
      dap:['俗话','众所周知','超越','历来','真理']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['诧异','偏偏','展现','古怪','恍然大悟'],
   cau:[
     {s:'今天是周末，可经理＿＿让我去加班，我满肚子不乐意，却也没有办法。在公司门口，居然遇到了几个同事，我很＿＿，问：“周末怎么还有这么多人来上班？”而他们看到我，神情都有些＿＿。直到走进办公室，鲜花和蛋糕＿＿在我眼前，经理和同事们唱起了生日歌，我才＿＿，原来今天是我的生日，他们为我准备了一个特别的生日晚会。',
      dap:['偏偏','诧异','古怪','展现','恍然大悟']}
   ]},

  {kieu:'vitri', de:'为括号里的词语选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc (đáp án sách: ① D ② C ③ D ④ B ⑤ A)',
   cau:[
     {s:'A只有B不断努力，C梦想才能D实现。', tu:'得以', ans:'D',
      giai:'只有……，梦想才能得以实现: 得以 đứng ngay trước động từ 实现, sau động từ năng nguyện 才能.'},
     {s:'通过A调查研究B发现问题，C找到D解决问题的方法。', tu:'进而', ans:'C',
      giai:'进而 là liên từ, đứng đầu vế sau (trước 找到): phát hiện vấn đề → từ đó tìm ra cách giải quyết.'},
     {s:'经过讨论，A大家的意见B都统一了，C可D他不同意。', tu:'偏偏', ans:'D',
      giai:'可偏偏他不同意: 偏偏 đứng sau 可, trước chủ ngữ 他 — nhấn "riêng anh ta lại không đồng ý".'},
     {s:'A老校长B重视C学生们的D素质教育。', tu:'历来', ans:'B',
      giai:'历来 là phó từ, đứng sau chủ ngữ 老校长, trước động từ hai âm tiết 重视.'},
     {s:'A今年B入境旅游观光的C人数已超过D千万。', tu:'据悉', ans:'A',
      giai:'据悉 luôn đứng đầu câu để dẫn nguồn tin (văn phong báo chí).'}
   ]},

  {kieu:'bc', de:'病句类型：歧义句 · 例句', vn:'Loại câu sai: câu mơ hồ, đa nghĩa (歧义句) — các câu ví dụ trong sách (tr. 205–206), kèm phân tích của sách. Một câu bình thường chỉ diễn đạt một ý; nếu hiểu được theo hai cách trở lên thì là câu mơ hồ. Tìm chỗ gây hai nghĩa rồi sửa.',
   cau:[
     {s:'上面通知说，让您本周五前去汇报。', sai:'本周五前去汇报', loai:'歧义句',
      dap:'上面通知说，让您本周五以前去汇报。／上面通知说，让您本周五去汇报。',
      giai:'"前" có thể là phương vị từ (trước thứ Sáu) hoặc động từ nghĩa "前往" (đi đến — tức đi báo cáo đúng thứ Sáu). Sửa: 以前 (trước thứ Sáu) hoặc bỏ 前 (đúng thứ Sáu).'},
     {s:'那时候我们同在一个城市，我还租了他一套房子呢。', sai:'租了他一套房子', loai:'歧义句',
      dap:'那时候我们同在一个城市，我还跟他租了一套房子呢。／那时候我们同在一个城市，我还租给了他一套房子呢。',
      giai:'租 vừa là "thuê" vừa là "cho thuê" → không rõ ai thuê của ai. Thêm 跟他 (thuê của anh ấy) hoặc dùng 租给 (cho anh ấy thuê).'},
     {s:'几个海归投资的垃圾发电厂很快将要建成投产。', sai:'几个海归投资的垃圾发电厂', loai:'歧义句',
      dap:'几个海归投资的一座垃圾发电厂很快将要建成投产。／海归投资的几个垃圾发电厂很快将要建成投产。',
      giai:'"几个" có thể bổ nghĩa cho 海归 (mấy người du học trở về) hoặc cho 垃圾发电厂 (mấy nhà máy) → đặt số lượng từ sát danh từ nó bổ nghĩa.'},
     {s:'医生看到我们非常焦急，连忙把病人的病情告诉我们。', sai:'医生看到我们非常焦急', loai:'歧义句',
      dap:'医生看到我们非常焦急的样子，连忙把病人的病情告诉我们。／医生非常焦急，看到我们，连忙把病人的病情告诉我们。',
      giai:'Ngắt khác nhau cho hai nghĩa: "bác sĩ thấy / chúng tôi rất sốt ruột" hay "bác sĩ thấy chúng tôi / (bác sĩ) rất sốt ruột". Thêm 的样子 hoặc tách câu.'},
     {s:'我们打败了师大女篮得到了冠军。', sai:'打败了师大女篮得到了冠军', loai:'歧义句',
      dap:'我们打败了师大女篮，得到了冠军。／我们打败了，师大女篮得到了冠军。',
      giai:'Không có dấu ngắt nên hiểu được hai cách: chúng tôi thắng đội bóng rổ nữ ĐH Sư phạm và giành chức vô địch, hay chúng tôi thua còn đội nữ Sư phạm vô địch. Thêm dấu phẩy đúng chỗ.'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议（扩展1 · 练一练）', vn:'Chỉ ra lỗi sai của các câu sau và đề xuất cách sửa (câu mơ hồ 歧义句 — mỗi câu có hai cách sửa theo hai nghĩa, đáp án sách).',
   cau:[
     {s:'他背着爸爸和我买下了那栋房子。', sai:'背着爸爸和我', loai:'歧义句',
      dap:'背着爸爸，他和我买下了那栋房子。／背着爸爸和我，他买下了那栋房子。',
      giai:'"背着" ai không rõ: giấu bố (anh ấy cùng tôi mua) hay giấu cả bố lẫn tôi (một mình anh ấy mua) → tách bằng dấu phẩy để rõ nghĩa.'},
     {s:'这个精致的玩具将作为今晚最受欢迎的客人的礼品送给他。', sai:'今晚最受欢迎的客人的礼品', loai:'歧义句',
      dap:'这个精致的玩具将作为礼品送给今晚最受欢迎的客人。／这个精致的玩具将作为今晚最受欢迎的礼品送给客人。',
      giai:'"最受欢迎的" bổ nghĩa cho 客人 hay cho 礼品 không rõ → đặt định ngữ sát danh từ mà nó bổ nghĩa.'},
     {s:'我的车没有锁，在教室门口放着呢，你去骑吧。', sai:'没有锁', loai:'歧义句',
      dap:'我的车没有上锁，在教室门口放着呢，你去骑吧。／我的车没有安锁，在教室门口放着呢，你去骑吧。',
      giai:'锁 vừa là động từ (khoá lại) vừa là danh từ (cái khoá) → 没有锁 = chưa khoá / không có khoá. Dùng 上锁 hoặc 安锁 cho rõ.'},
     {s:'我看见她很高兴，就和她聊了起来。', sai:'我看见她很高兴', loai:'歧义句',
      dap:'看见她，我很高兴，就和她聊了起来。／她看上去很高兴，我就和她聊了起来。',
      giai:'Ai vui không rõ: "tôi" vui vì gặp cô ấy, hay thấy cô ấy đang vui → tách câu cho rõ chủ thể của 高兴.'},
     {s:'他借了我两本书还没还呢。', sai:'借了我两本书', loai:'歧义句',
      dap:'他向我借的两本书还没还呢。／他借给我两本书，我还没还呢。',
      giai:'借 vừa là "mượn" vừa là "cho mượn" → 借了我 không rõ ai mượn ai. Dùng 向我借 (mượn của tôi) hoặc 借给我 (cho tôi mượn).'}
   ]}
];
