// ══════════════════════════════════════════
// DATA — HSK6 Bài 38: 慧眼捕捉商机。("Tuệ nhãn" nắm bắt thời cơ)
// 第十单元 热点追踪 · Nguồn: HSK标准教程6下 (tr. 187–197)
// Bài khoá: 慧眼捕捉商机 (1519 chữ) — 独具慧眼，寻找机遇 · 从竞争对手的产品缺陷中捕捉商机 · 从市场的潜在需求中寻找商机
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'屡次',py:'lǚcì',pos:'Phó từ',vn:'nhiều lần, hết lần này đến lần khác',hv:'lũ thứ',em:'🔁',lesson:1,
   explain:['Phó từ, văn viết: hành động lặp lại nhiều lần, lần này đến lần khác (≈ 多次, 一次又一次). Đứng trước động từ: 屡次创业, 屡次失败, 屡次获奖.','Thường dùng cho sự việc ĐÃ xảy ra, hay đi với 却 / 但 để nêu đối lập: 屡次创业，却屡次惨遭失败. Không đứng sau động từ (không nói *失败屡次). Đây là điểm ngữ pháp 1 của bài.'],
   usage:'S + 屡次 + V (việc đã xảy ra); 屡次……，却屡次……; 屡次在……中 + V.',
   collo:['屡次创业','屡次失败','屡次提醒','屡次获奖'],
   ex_zh:'屡次创业，却屡次惨遭失败',ex_py:'lǚcì chuàngyè, què lǚcì cǎn zāo shībài',ex_vn:'Nhiều lần khởi nghiệp nhưng lần nào cũng thất bại thảm hại',
   exList:[
     {zh:'屡次创业，却屡次惨遭失败的人总想知道，创业有窍门吗？',py:'Lǚcì chuàngyè, què lǚcì cǎn zāo shībài de rén zǒng xiǎng zhīdào, chuàngyè yǒu qiàomén ma?',vn:'Những người khởi nghiệp nhiều lần mà lần nào cũng thất bại thảm hại luôn muốn biết: khởi nghiệp có bí quyết không?'},
     {zh:'这里的水果无论是产量还是品质，都屡次在全国评比中名列前茅。',py:'Zhèlǐ de shuǐguǒ wúlùn shì chǎnliàng háishi pǐnzhì, dōu lǚcì zài quánguó píngbǐ zhōng míngliè-qiánmáo.',vn:'Hoa quả ở đây dù là sản lượng hay chất lượng đều nhiều lần đứng đầu trong các kỳ bình chọn toàn quốc.'},
     {zh:'妈妈屡次提醒我改掉马虎的毛病，可我就是改不了。',py:'Māma lǚcì tíxǐng wǒ gǎidiào mǎhu de máobìng, kě wǒ jiù shì gǎi bu liǎo.',vn:'Mẹ đã nhắc tôi nhiều lần phải bỏ tật cẩu thả, nhưng tôi cứ không sửa được.'}
   ],
   colloFull:[
     {zh:'屡次创业',py:'lǚcì chuàngyè',vn:'nhiều lần khởi nghiệp'},
     {zh:'屡次失败',py:'lǚcì shībài',vn:'thất bại nhiều lần'},
     {zh:'屡次提醒',py:'lǚcì tíxǐng',vn:'nhắc nhở nhiều lần'},
     {zh:'屡次获奖',py:'lǚcì huòjiǎng',vn:'nhiều lần đoạt giải'},
     {zh:'屡次出现',py:'lǚcì chūxiàn',vn:'xuất hiện nhiều lần'}
   ],
   patterns:[
     {s:'S + 屡次 + V',m:'Ai đó đã … nhiều lần (việc đã xảy ra)'},
     {s:'屡次……，却 / 但……',m:'Nhiều lần … nhưng (kết quả trái ngược)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy thất bại nhiều lần, nhưng chưa bao giờ nản lòng.',answer:'虽然他屡次失败，但是从来没有灰心过。',answerPy:'Suīrán tā lǚcì shībài, dànshì cónglái méiyǒu huīxīnguo.',
      note:'虽然……但是…… (ôn HSK 4); 从来没有 + V过 = chưa từng.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Bài hát này nhiều lần xuất hiện trên bảng xếp hạng, không ai là không biết.',answer:'这首歌屡次出现在排行榜上，没有人不知道。',answerPy:'Zhè shǒu gē lǚcì chūxiàn zài páihángbǎng shang, méiyǒu rén bù zhīdào.',
      note:'没有人不…… = phủ định kép, ai cũng … (ôn HSK 5).',pair:'没有……不……'}
   ]},

  {n:2,zh:'依据',py:'yījù',pos:'Giới từ / Danh từ / Động từ',vn:'căn cứ, dựa vào; căn cứ, cơ sở',hv:'y cứ',em:'📐',lesson:1,
   explain:['Giới từ: 依据 + N + V = dựa vào … mà làm …: 依据市场规则捕捉商业机会; 依据专家的鉴定. Văn viết, trang trọng hơn 根据.','Danh từ: căn cứ, cơ sở (法律依据, 科学依据, 以……为依据); động từ: 依据市场需求 (dựa theo nhu cầu thị trường). Đây là điểm ngữ pháp 2 của bài.'],
   usage:'依据 + N + V; 以 + N + 为依据; 有 / 没有 / 提供 + 依据; 法律 / 科学 / 理论 + 依据.',
   collo:['依据市场需求','法律依据','科学依据','以……为依据'],
   ex_zh:'要依据市场规则捕捉商业机会',ex_py:'yào yījù shìchǎng guīzé bǔzhuō shāngyè jīhuì',ex_vn:'Phải dựa vào quy luật thị trường để nắm bắt cơ hội kinh doanh',
   exList:[
     {zh:'窍门就是创业不可盲目，要依据市场规则捕捉商业机会。',py:'Qiàomén jiù shì chuàngyè bù kě mángmù, yào yījù shìchǎng guīzé bǔzhuō shāngyè jīhuì.',vn:'Bí quyết chính là khởi nghiệp không được mù quáng, phải dựa vào quy luật thị trường để nắm bắt cơ hội kinh doanh.'},
     {zh:'你们这样做有法律依据吗？',py:'Nǐmen zhèyàng zuò yǒu fǎlǜ yījù ma?',vn:'Các anh làm như vậy có căn cứ pháp luật không?'},
     {zh:'江崎公司以成年人的消费需求为依据设计产品。',py:'Jiāngqí gōngsī yǐ chéngniánrén de xiāofèi xūqiú wéi yījù shèjì chǎnpǐn.',vn:'Công ty Ezaki lấy nhu cầu tiêu dùng của người lớn làm căn cứ để thiết kế sản phẩm.'}
   ],
   colloFull:[
     {zh:'依据市场需求',py:'yījù shìchǎng xūqiú',vn:'dựa theo nhu cầu thị trường'},
     {zh:'法律依据',py:'fǎlǜ yījù',vn:'căn cứ pháp luật'},
     {zh:'科学依据',py:'kēxué yījù',vn:'cơ sở khoa học'},
     {zh:'以……为依据',py:'yǐ……wéi yījù',vn:'lấy … làm căn cứ'},
     {zh:'依据专家的鉴定',py:'yījù zhuānjiā de jiàndìng',vn:'căn cứ vào giám định của chuyên gia'}
   ],
   patterns:[
     {s:'依据 + N，S + V',m:'Căn cứ vào N, (ai đó) làm …'},
     {s:'以 + N + 为依据',m:'Lấy N làm căn cứ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn cứ vào kết quả điều tra, chúng tôi đã điều chỉnh kế hoạch.',answer:'依据调查结果，我们调整了计划。',answerPy:'Yījù diàochá jiéguǒ, wǒmen tiáozhěngle jìhuà.',
      note:'依据 + N đặt đầu câu làm trạng ngữ; V + 了 + tân ngữ (ôn HSK 3–4).',pair:'V + 了'},
     {promptLang:'vi',prompt:'Nói chuyện phải có căn cứ, không được nói bừa.',answer:'说话要有依据，不能乱说。',answerPy:'Shuōhuà yào yǒu yījù, bù néng luàn shuō.',
      note:'乱 + V = làm bừa (ôn HSK 4); 不能 + V (cấm đoán).',pair:'乱 + V'}
   ]},

  {n:3,zh:'罐',py:'guàn',pos:'Danh từ',vn:'hộp, lon, hũ, vại',hv:'quán',em:'🥫',lesson:1,
   explain:['Đồ đựng hình trụ, miệng tương đối nhỏ, bằng sắt tây, sành, thuỷ tinh: 铁罐, 玻璃罐, 茶叶罐. Cũng làm lượng từ: 一罐可乐, 两罐啤酒.','Trong bài: 罐装 = đóng hộp, đóng lon (罐装八宝粥 = cháo bát bảo đóng lon); 罐头 = đồ hộp.'],
   usage:'số + 罐 + đồ uống / thực phẩm; 罐装 + N; 罐头 (đồ hộp).',
   collo:['罐装八宝粥','一罐可乐','玻璃罐','罐头食品'],
   ex_zh:'罐装八宝粥',ex_py:'guànzhuāng bābǎozhōu',ex_vn:'Cháo bát bảo đóng lon',
   exList:[
     {zh:'1992年戚石川兄弟发明的罐装八宝粥受到了市场热捧。',py:'Yījiǔjiǔ\'èr nián Qī Shíchuān xiōngdì fāmíng de guànzhuāng bābǎozhōu shòudàole shìchǎng rèpěng.',vn:'Món cháo bát bảo đóng lon do anh em Thích Thạch Xuyên phát minh năm 1992 đã được thị trường đón nhận nồng nhiệt.'},
     {zh:'天太热了，他一口气喝了两罐可乐。',py:'Tiān tài rè le, tā yìkǒuqì hēle liǎng guàn kělè.',vn:'Trời nóng quá, cậu ấy uống một hơi hết hai lon Coca.'},
     {zh:'奶奶把自己做的辣酱装在玻璃罐里，送给邻居尝尝。',py:'Nǎinai bǎ zìjǐ zuò de làjiàng zhuāng zài bōliguàn li, sòng gěi línjū chángchang.',vn:'Bà cho tương ớt tự làm vào hũ thuỷ tinh, đem biếu hàng xóm nếm thử.'}
   ],
   colloFull:[
     {zh:'罐装八宝粥',py:'guànzhuāng bābǎozhōu',vn:'cháo bát bảo đóng lon'},
     {zh:'一罐可乐',py:'yí guàn kělè',vn:'một lon Coca'},
     {zh:'玻璃罐',py:'bōliguàn',vn:'hũ thuỷ tinh'},
     {zh:'罐头食品',py:'guàntou shípǐn',vn:'thực phẩm đóng hộp'},
     {zh:'茶叶罐',py:'cháyèguàn',vn:'hộp đựng trà'}
   ],
   patterns:[
     {s:'số + 罐 + N',m:'… lon / hộp / hũ …'},
     {s:'罐装 + N',m:'N đóng lon, đóng hộp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong tủ lạnh chỉ còn hai lon nước ngọt thôi.',answer:'冰箱里只剩下两罐饮料了。',answerPy:'Bīngxiāng li zhǐ shèngxia liǎng guàn yǐnliào le.',
      note:'只 + V + 了 (chỉ còn); 剩下 (ôn HSK 4).',pair:'只……了'},
     {promptLang:'vi',prompt:'Đồ hộp tuy tiện lợi nhưng không nên ăn thường xuyên.',answer:'罐头食品虽然方便，但是不宜经常吃。',answerPy:'Guàntou shípǐn suīrán fāngbiàn, dànshì bùyí jīngcháng chī.',
      note:'不宜 = không nên (văn viết, ôn HSK 5).',pair:'不宜……'}
   ]},

  {n:4,zh:'数额',py:'shù\'é',pos:'Danh từ',vn:'mức, số lượng (tiền), khoản',hv:'số ngạch',em:'💰',lesson:1,
   explain:['Con số nhất định (thường là tiền): 数额可观 (khoản tiền đáng kể), 数额巨大, 贷款数额. Văn viết, hay dùng trong kinh tế, pháp luật.','Hay đi với tính từ đánh giá lớn nhỏ: 可观 / 巨大 / 不小 / 有限. Không dùng để đếm người, vật thông thường (không nói *学生的数额 — dùng 人数 / 数量).'],
   usage:'数额 + 可观 / 巨大 / 不大; 数额可观的 + 财富 / 收入; 超过 / 达到 + ……数额.',
   collo:['数额可观','数额巨大','贷款数额','超过规定数额'],
   ex_zh:'数额可观的财富',ex_py:'shù\'é kěguān de cáifù',ex_vn:'Khối của cải có giá trị đáng kể',
   exList:[
     {zh:'这些发明都给创业者带来了数额可观的财富。',py:'Zhèxiē fāmíng dōu gěi chuàngyèzhě dàiláile shù\'é kěguān de cáifù.',vn:'Những phát minh này đều mang lại cho người khởi nghiệp khối của cải đáng kể.'},
     {zh:'这笔贷款的数额太大，银行需要进一步审核。',py:'Zhè bǐ dàikuǎn de shù\'é tài dà, yínháng xūyào jìnyíbù shěnhé.',vn:'Khoản vay này quá lớn, ngân hàng cần thẩm định thêm.'},
     {zh:'出国时携带的现金不能超过规定数额。',py:'Chūguó shí xiédài de xiànjīn bù néng chāoguò guīdìng shù\'é.',vn:'Tiền mặt mang theo khi xuất cảnh không được vượt quá mức quy định.'}
   ],
   colloFull:[
     {zh:'数额可观',py:'shù\'é kěguān',vn:'khoản tiền đáng kể'},
     {zh:'数额巨大',py:'shù\'é jùdà',vn:'số lượng khổng lồ'},
     {zh:'贷款数额',py:'dàikuǎn shù\'é',vn:'mức vay'},
     {zh:'超过规定数额',py:'chāoguò guīdìng shù\'é',vn:'vượt quá mức quy định'},
     {zh:'奖金数额',py:'jiǎngjīn shù\'é',vn:'mức tiền thưởng'}
   ],
   patterns:[
     {s:'数额 + 可观 / 巨大',m:'khoản (tiền) đáng kể / rất lớn'},
     {s:'……的数额 + 超过 / 达到……',m:'mức … vượt quá / đạt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mức tiền thưởng năm nay cao hơn năm ngoái nhiều.',answer:'今年奖金的数额比去年高多了。',answerPy:'Jīnnián jiǎngjīn de shù\'é bǐ qùnián gāo duō le.',
      note:'A 比 B + Adj + 多了 (so sánh, ôn HSK 3–4).',pair:'A比B……多了'},
     {promptLang:'vi',prompt:'Chỉ cần số tiền không vượt quá quy định thì không cần khai báo.',answer:'只要数额不超过规定，就不用申报。',answerPy:'Zhǐyào shù\'é bù chāoguò guīdìng, jiù búyòng shēnbào.',
      note:'只要……就…… (ôn HSK 4).',pair:'只要……就……'}
   ]},

  {n:5,zh:'永恒',py:'yǒnghéng',pos:'Tính từ',vn:'vĩnh hằng, vĩnh viễn, bất diệt',hv:'vĩnh hằng',em:'♾️',lesson:1,
   explain:['Tồn tại mãi mãi, không bao giờ thay đổi: 永恒的真理, 永恒的爱情, 永恒的主题. Văn viết, trang trọng.','Chủ yếu làm định ngữ (永恒的 + N) hoặc vị ngữ sau 是: 友谊是永恒的. Gần 永远 nhưng 永远 là PHÓ TỪ (永远记住), còn 永恒 là TÍNH TỪ (không nói *永恒记住).'],
   usage:'永恒的 + 真理 / 主题 / 爱 / 记忆; ……是永恒的; 永恒不变.',
   collo:['永恒的真理','永恒的主题','永恒的爱','永恒的记忆'],
   ex_zh:'这是一条永恒的真理',ex_py:'zhè shì yì tiáo yǒnghéng de zhēnlǐ',ex_vn:'Đây là một chân lý vĩnh hằng',
   exList:[
     {zh:'创业必须依据市场需求，这是一条永恒的真理。',py:'Chuàngyè bìxū yījù shìchǎng xūqiú, zhè shì yì tiáo yǒnghéng de zhēnlǐ.',vn:'Khởi nghiệp phải dựa vào nhu cầu thị trường, đây là một chân lý vĩnh hằng.'},
     {zh:'爱情和亲情是文学作品中永恒的主题。',py:'Àiqíng hé qīnqíng shì wénxué zuòpǐn zhōng yǒnghéng de zhǔtí.',vn:'Tình yêu và tình thân là chủ đề muôn thuở trong tác phẩm văn học.'},
     {zh:'世界上没有永恒不变的东西，一切都在发展变化。',py:'Shìjiè shang méiyǒu yǒnghéng bú biàn de dōngxi, yíqiè dōu zài fāzhǎn biànhuà.',vn:'Trên đời không có thứ gì mãi mãi không đổi, mọi thứ đều đang phát triển, biến đổi.'}
   ],
   colloFull:[
     {zh:'永恒的真理',py:'yǒnghéng de zhēnlǐ',vn:'chân lý vĩnh hằng'},
     {zh:'永恒的主题',py:'yǒnghéng de zhǔtí',vn:'chủ đề muôn thuở'},
     {zh:'永恒的爱',py:'yǒnghéng de ài',vn:'tình yêu vĩnh cửu'},
     {zh:'永恒的记忆',py:'yǒnghéng de jìyì',vn:'ký ức mãi mãi'},
     {zh:'永恒不变',py:'yǒnghéng bú biàn',vn:'mãi mãi không đổi'}
   ],
   patterns:[
     {s:'永恒的 + N',m:'N vĩnh hằng, muôn thuở'},
     {s:'……是永恒的',m:'… là mãi mãi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tình bạn giữa chúng ta là mãi mãi, dù ở đâu tớ cũng sẽ không quên cậu.',answer:'我们之间的友谊是永恒的，无论在哪儿我都不会忘记你。',answerPy:'Wǒmen zhījiān de yǒuyì shì yǒnghéng de, wúlùn zài nǎr wǒ dōu bú huì wàngjì nǐ.',
      note:'无论……都…… (ôn HSK 4).',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Không có thị trường nào là mãi mãi, doanh nghiệp phải không ngừng đổi mới.',answer:'没有永恒的市场，企业必须不断创新。',answerPy:'Méiyǒu yǒnghéng de shìchǎng, qǐyè bìxū búduàn chuàngxīn.',
      note:'不断 + V = không ngừng (ôn HSK 5); 必须 + V.',pair:'不断 + V'}
   ]},

  {n:6,zh:'遵循',py:'zūnxún',pos:'Động từ',vn:'tuân theo, theo',hv:'tuân tuần',em:'🧭',lesson:1,
   explain:['Làm theo (nguyên tắc, quy luật, phương châm…): 遵循规则, 遵循规律, 遵循原则. Văn viết, đối tượng thường TRỪU TƯỢNG.','So với 遵守 (tuân thủ luật lệ, kỷ luật, giờ giấc cụ thể: 遵守交通规则, 遵守时间): 遵循 thiên về quy luật, nguyên tắc, đường lối lớn; không nói *遵循时间.'],
   usage:'遵循 + 规则 / 规律 / 原则 / 方针 / 传统.',
   collo:['遵循规则','遵循自然规律','遵循原则','遵循传统'],
   ex_zh:'只要遵循这条规则',ex_py:'zhǐyào zūnxún zhè tiáo guīzé',ex_vn:'Chỉ cần tuân theo quy tắc này',
   exList:[
     {zh:'只要遵循这条规则，就没有不成功的道理。',py:'Zhǐyào zūnxún zhè tiáo guīzé, jiù méiyǒu bù chénggōng de dàolǐ.',vn:'Chỉ cần tuân theo quy tắc này thì không có lý nào lại không thành công.'},
     {zh:'种庄稼必须遵循自然规律，不能急于求成。',py:'Zhòng zhuāngjia bìxū zūnxún zìrán guīlǜ, bù néng jíyú-qiúchéng.',vn:'Trồng trọt phải theo quy luật tự nhiên, không được nóng vội.'},
     {zh:'这次比赛遵循公平、公开的原则。',py:'Zhè cì bǐsài zūnxún gōngpíng, gōngkāi de yuánzé.',vn:'Cuộc thi lần này tuân theo nguyên tắc công bằng, công khai.'}
   ],
   colloFull:[
     {zh:'遵循规则',py:'zūnxún guīzé',vn:'tuân theo quy tắc'},
     {zh:'遵循自然规律',py:'zūnxún zìrán guīlǜ',vn:'tuân theo quy luật tự nhiên'},
     {zh:'遵循原则',py:'zūnxún yuánzé',vn:'tuân theo nguyên tắc'},
     {zh:'遵循传统',py:'zūnxún chuántǒng',vn:'làm theo truyền thống'},
     {zh:'遵循市场规律',py:'zūnxún shìchǎng guīlǜ',vn:'tuân theo quy luật thị trường'}
   ],
   patterns:[
     {s:'遵循 + 规律 / 原则 / 规则',m:'tuân theo quy luật / nguyên tắc / quy tắc'},
     {s:'只要遵循……，就……',m:'Chỉ cần theo … thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học ngoại ngữ phải theo nguyên tắc từ dễ đến khó.',answer:'学外语要遵循由易到难的原则。',answerPy:'Xué wàiyǔ yào zūnxún yóu yì dào nán de yuánzé.',
      note:'由……到…… = từ … đến … (ôn HSK 5).',pair:'由……到……'},
     {promptLang:'vi',prompt:'Nếu không tuân theo quy luật thị trường, doanh nghiệp sớm muộn gì cũng sẽ thất bại.',answer:'如果不遵循市场规律，企业早晚会失败的。',answerPy:'Rúguǒ bù zūnxún shìchǎng guīlǜ, qǐyè zǎowǎn huì shībài de.',
      note:'会……的 khẳng định khả năng (ôn HSK 4); 早晚 = sớm muộn.',pair:'会……的'}
   ]},

  {n:7,zh:'不屑',py:'búxiè',pos:'Động từ',vn:'cho rằng không đáng (làm), chẳng thèm, coi thường',hv:'bất tiết',em:'🙄',lesson:1,
   explain:['Cho rằng không đáng làm, coi thường nên không muốn làm: 不屑做, 不屑于 + V, 不屑一顾 (chẳng thèm nhìn — ôn bài 33). Thường mang sắc thái kiêu ngạo, khinh miệt.','Còn làm định ngữ / trạng ngữ tả thái độ: 不屑的表情, 不屑地笑了笑. Chú ý biến điệu: 不 đứng trước 屑 (thanh 4) đọc bú → búxiè.'],
   usage:'不屑 + V (做 / 理 / 回答); 不屑于 + V; 不屑一顾; 不屑的 + 表情 / 眼神.',
   collo:['不屑做的生意','不屑一顾','不屑的表情','不屑于回答'],
   ex_zh:'别人不屑做的生意',ex_py:'biérén búxiè zuò de shēngyi',ex_vn:'Việc làm ăn người khác chẳng thèm làm',
   exList:[
     {zh:'别人没发现，或是不屑做的生意，往往孕育着机会。',py:'Biérén méi fāxiàn, huò shì búxiè zuò de shēngyi, wǎngwǎng yùnyùzhe jīhuì.',vn:'Những việc làm ăn người khác chưa phát hiện ra, hoặc chẳng thèm làm, thường lại ẩn chứa cơ hội.'},
     {zh:'对于这种无聊的问题，他连回答都不屑。',py:'Duìyú zhè zhǒng wúliáo de wèntí, tā lián huídá dōu búxiè.',vn:'Với loại câu hỏi vô vị này, anh ta đến trả lời cũng chẳng thèm.'},
     {zh:'看到我的画，他露出了不屑的表情，这让我很难过。',py:'Kàndào wǒ de huà, tā lùchūle búxiè de biǎoqíng, zhè ràng wǒ hěn nánguò.',vn:'Nhìn thấy tranh của tôi, anh ta lộ vẻ mặt khinh khỉnh, điều đó khiến tôi rất buồn.'}
   ],
   colloFull:[
     {zh:'不屑做的生意',py:'búxiè zuò de shēngyi',vn:'việc làm ăn chẳng thèm làm'},
     {zh:'不屑一顾',py:'búxiè-yígù',vn:'chẳng thèm nhìn tới'},
     {zh:'不屑的表情',py:'búxiè de biǎoqíng',vn:'vẻ mặt khinh khỉnh'},
     {zh:'不屑于回答',py:'búxiè yú huídá',vn:'chẳng thèm trả lời'},
     {zh:'不屑地笑了笑',py:'búxiè de xiàole xiào',vn:'cười khẩy'}
   ],
   patterns:[
     {s:'不屑 + V',m:'chẳng thèm làm …'},
     {s:'连……都不屑',m:'đến … cũng chẳng thèm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta chẳng thèm làm việc nhỏ, kết quả là việc lớn cũng không làm nên.',answer:'他不屑做小事，结果大事也做不成。',answerPy:'Tā búxiè zuò xiǎoshì, jiéguǒ dàshì yě zuò bu chéng.',
      note:'V + 不成 = bổ ngữ khả năng phủ định (ôn HSK 4); 结果 nối kết quả.',pair:'V不成'},
     {promptLang:'vi',prompt:'Đừng coi thường người khác, ai cũng có sở trường của mình.',answer:'别对别人不屑一顾，每个人都有自己的专长。',answerPy:'Bié duì biérén búxiè-yígù, měi ge rén dōu yǒu zìjǐ de zhuāncháng.',
      note:'每……都…… (ôn HSK 3–4); 专长 là từ của bài.',pair:'每……都……'}
   ]},

  {n:8,zh:'孕育',py:'yùnyù',pos:'Động từ',vn:'thai nghén; chứa đựng, ấp ủ, sản sinh ra',hv:'dựng dục',em:'🌱',lesson:1,
   explain:['Nghĩa gốc: mang thai và sinh nở. Nghĩa thường dùng (bóng): trong sự vật cũ đã có mầm mống của sự vật mới, rồi dần sinh ra: 孕育着机会 / 希望 / 危机.','Hay dùng dạng 孕育着 + N (trừu tượng) hoặc 孕育了 + N: 黄河孕育了中华文明. Văn viết.'],
   usage:'孕育着 + 机会 / 希望 / 生命; ……孕育了……文明 / 文化.',
   collo:['孕育着机会','孕育着希望','孕育生命','孕育了文明'],
   ex_zh:'往往孕育着机会',ex_py:'wǎngwǎng yùnyùzhe jīhuì',ex_vn:'Thường ẩn chứa cơ hội',
   exList:[
     {zh:'别人不屑做的生意，往往孕育着机会。',py:'Biérén búxiè zuò de shēngyi, wǎngwǎng yùnyùzhe jīhuì.',vn:'Việc làm ăn người khác chẳng thèm làm thường ẩn chứa cơ hội.'},
     {zh:'黄河孕育了古老的中华文明。',py:'Huáng Hé yùnyùle gǔlǎo de Zhōnghuá wénmíng.',vn:'Hoàng Hà đã sản sinh ra nền văn minh Trung Hoa cổ xưa.'},
     {zh:'每一次失败中都孕育着成功的希望。',py:'Měi yí cì shībài zhōng dōu yùnyùzhe chénggōng de xīwàng.',vn:'Trong mỗi lần thất bại đều ấp ủ hy vọng thành công.'}
   ],
   colloFull:[
     {zh:'孕育着机会',py:'yùnyùzhe jīhuì',vn:'ẩn chứa cơ hội'},
     {zh:'孕育着希望',py:'yùnyùzhe xīwàng',vn:'ấp ủ hy vọng'},
     {zh:'孕育生命',py:'yùnyù shēngmìng',vn:'thai nghén sự sống'},
     {zh:'孕育了文明',py:'yùnyùle wénmíng',vn:'sản sinh ra nền văn minh'},
     {zh:'孕育着危机',py:'yùnyùzhe wēijī',vn:'tiềm ẩn khủng hoảng'}
   ],
   patterns:[
     {s:'A + 孕育着 + B',m:'Trong A chứa đựng (mầm mống) B'},
     {s:'A + 孕育了 + B',m:'A đã sinh ra, nuôi dưỡng B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong nguy cơ thường ẩn chứa cơ hội, mấu chốt là cậu có nhìn ra hay không.',answer:'危机中往往孕育着机会，关键是你能不能看到。',answerPy:'Wēijī zhōng wǎngwǎng yùnyùzhe jīhuì, guānjiàn shì nǐ néng bu néng kàndào.',
      note:'关键是 + câu hỏi chính phản (能不能), ôn HSK 5.',pair:'关键是……'},
     {promptLang:'vi',prompt:'Sông Hồng đã nuôi dưỡng nền văn minh lúa nước của Việt Nam.',answer:'红河孕育了越南的稻作文明。',answerPy:'Hóng Hé yùnyùle Yuènán de dàozuò wénmíng.',
      note:'V + 了 + tân ngữ (hành động đã hoàn thành).',pair:'V + 了'}
   ]},

  {n:9,zh:'博览会',py:'bólǎnhuì',pos:'Danh từ',vn:'hội chợ, cuộc triển lãm (quy mô lớn)',hv:'bác lãm hội',em:'🏛️',lesson:1,
   explain:['Cuộc triển lãm quy mô lớn trưng bày sản phẩm của nhiều ngành, nhiều nước: 世界博览会 (Expo, gọi tắt 世博会), 新产品博览会, 汽车博览会.','Động từ đi kèm: 举办 / 参加 / 参观 + 博览会; "tại hội chợ" = 在博览会上.'],
   usage:'举办 / 参加 / 参观 + 博览会; 在……博览会上; 世界 / 国际 / 汽车 + 博览会.',
   collo:['新产品博览会','世界博览会','举办博览会','参观博览会'],
   ex_zh:'在新产品博览会上',ex_py:'zài xīn chǎnpǐn bólǎnhuì shang',ex_vn:'Tại hội chợ sản phẩm mới',
   exList:[
     {zh:'在新产品博览会上，王先生看到了一台叫作“电池分析修复仪”的小机器。',py:'Zài xīn chǎnpǐn bólǎnhuì shang, Wáng xiānsheng kàndàole yì tái jiàozuò “diànchí fēnxī xiūfùyí” de xiǎo jīqì.',vn:'Tại hội chợ sản phẩm mới, ông Vương nhìn thấy một cỗ máy nhỏ gọi là "máy phân tích, phục hồi pin".'},
     {zh:'2010年的世界博览会是在上海举办的。',py:'Èr líng yī líng nián de Shìjiè Bólǎnhuì shì zài Shànghǎi jǔbàn de.',vn:'Triển lãm thế giới (Expo) năm 2010 được tổ chức ở Thượng Hải.'},
     {zh:'这次国际汽车博览会吸引了几十万观众。',py:'Zhè cì guójì qìchē bólǎnhuì xīyǐnle jǐ shí wàn guānzhòng.',vn:'Triển lãm ô tô quốc tế lần này đã thu hút mấy trăm nghìn khách tham quan.'}
   ],
   colloFull:[
     {zh:'新产品博览会',py:'xīn chǎnpǐn bólǎnhuì',vn:'hội chợ sản phẩm mới'},
     {zh:'世界博览会',py:'Shìjiè Bólǎnhuì',vn:'Triển lãm thế giới (Expo)'},
     {zh:'举办博览会',py:'jǔbàn bólǎnhuì',vn:'tổ chức hội chợ'},
     {zh:'参观博览会',py:'cānguān bólǎnhuì',vn:'tham quan triển lãm'},
     {zh:'国际汽车博览会',py:'guójì qìchē bólǎnhuì',vn:'triển lãm ô tô quốc tế'}
   ],
   patterns:[
     {s:'在 + ……博览会上',m:'tại hội chợ …'},
     {s:'……博览会是在……举办的',m:'Hội chợ … được tổ chức ở … (是……的 nhấn mạnh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty chúng tôi đã ký được mấy đơn hàng lớn tại hội chợ.',answer:'我们公司在博览会上签了几个大订单。',answerPy:'Wǒmen gōngsī zài bólǎnhuì shang qiānle jǐ ge dà dìngdān.',
      note:'在……上 chỉ phạm vi, sự kiện; 几 + lượng từ = mấy.',pair:'在……上'},
     {promptLang:'vi',prompt:'Triển lãm thế giới năm ấy được tổ chức ở đâu?',answer:'那年的世界博览会是在哪儿举办的？',answerPy:'Nà nián de Shìjiè Bólǎnhuì shì zài nǎr jǔbàn de?',
      note:'是……的 nhấn mạnh nơi chốn của việc đã xảy ra (ôn HSK 3).',pair:'是……的'}
   ]},

  {n:10,zh:'耐用',py:'nàiyòng',pos:'Tính từ',vn:'bền, dùng được lâu',hv:'nại dụng',em:'🔋',lesson:1,
   explain:['(Đồ vật) dùng được lâu, không dễ hỏng: 结实耐用, 经久耐用, 耐用消费品 (hàng tiêu dùng lâu bền như tủ lạnh, ô tô).','耐 = chịu được: 耐用 (dùng lâu), 耐心, 耐热, 耐穿 (mặc bền). Không dùng cho người (người khoẻ → 结实).'],
   usage:'(很 / 不 / 比较) 耐用; 结实耐用; 经久耐用; 耐用消费品.',
   collo:['结实耐用','经久耐用','没有那么耐用','耐用消费品'],
   ex_zh:'电池却没有那么耐用',ex_py:'diànchí què méiyǒu nàme nàiyòng',ex_vn:'Pin lại không bền đến thế',
   exList:[
     {zh:'事实上大家的电池却没有那么耐用，往往用一年就坏了。',py:'Shìshí shang dàjiā de diànchí què méiyǒu nàme nàiyòng, wǎngwǎng yòng yì nián jiù huài le.',vn:'Thực tế pin của mọi người lại không bền đến thế, thường dùng một năm là hỏng.'},
     {zh:'这种背包又轻又耐用，很受学生欢迎。',py:'Zhè zhǒng bēibāo yòu qīng yòu nàiyòng, hěn shòu xuésheng huānyíng.',vn:'Loại ba lô này vừa nhẹ vừa bền, rất được học sinh ưa chuộng.'},
     {zh:'买家具不能只看外观，还得看是不是经久耐用。',py:'Mǎi jiājù bù néng zhǐ kàn wàiguān, hái děi kàn shì bu shì jīngjiǔ nàiyòng.',vn:'Mua đồ nội thất không thể chỉ nhìn bề ngoài, còn phải xem có dùng được lâu bền không.'}
   ],
   colloFull:[
     {zh:'结实耐用',py:'jiēshi nàiyòng',vn:'chắc chắn, bền'},
     {zh:'经久耐用',py:'jīngjiǔ nàiyòng',vn:'dùng lâu bền'},
     {zh:'没有那么耐用',py:'méiyǒu nàme nàiyòng',vn:'không bền đến thế'},
     {zh:'耐用消费品',py:'nàiyòng xiāofèipǐn',vn:'hàng tiêu dùng lâu bền'},
     {zh:'非常耐用',py:'fēicháng nàiyòng',vn:'rất bền'}
   ],
   patterns:[
     {s:'又 + Adj + 又耐用',m:'vừa … vừa bền'},
     {s:'A 没有 B 那么耐用',m:'A không bền bằng B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đôi giày này vừa rẻ vừa bền, tôi đã đi ba năm rồi.',answer:'这双鞋又便宜又耐用，我已经穿了三年了。',answerPy:'Zhè shuāng xié yòu piányi yòu nàiyòng, wǒ yǐjīng chuānle sān nián le.',
      note:'又……又……; V了 + thời lượng + 了 (vẫn đang tiếp diễn, ôn HSK 4).',pair:'又……又……'},
     {promptLang:'vi',prompt:'Điện thoại kiểu mới tuy đẹp nhưng không bền bằng kiểu cũ.',answer:'新款手机虽然好看，但没有旧款那么耐用。',answerPy:'Xīnkuǎn shǒujī suīrán hǎokàn, dàn méiyǒu jiùkuǎn nàme nàiyòng.',
      note:'A 没有 B 那么 + Adj (so sánh kém, ôn HSK 3–4).',pair:'A没有B那么……'}
   ]},

  {n:11,zh:'魔术',py:'móshù',pos:'Danh từ',vn:'ảo thuật',hv:'ma thuật',em:'🎩',lesson:1,
   explain:['Tiết mục biểu diễn dùng động tác nhanh, đạo cụ đặc biệt khiến vật xuất hiện, biến mất, biến đổi kỳ lạ: 变魔术 (làm ảo thuật), 魔术师 (nhà ảo thuật).','Hay dùng để ví việc gì đó thần kỳ: 像变魔术一样. Động từ đi kèm là 变 / 表演, không dùng 做.'],
   usage:'变 / 表演 + 魔术; 魔术师; 像变魔术一样 + V.',
   collo:['变魔术','魔术师','表演魔术','像变魔术一样'],
   ex_zh:'像变魔术一样修好电池',ex_py:'xiàng biàn móshù yíyàng xiūhǎo diànchí',ex_vn:'Sửa pin như làm ảo thuật',
   exList:[
     {zh:'王先生买下了这台能够像变魔术一样修好电池的机器。',py:'Wáng xiānsheng mǎixiàle zhè tái nénggòu xiàng biàn móshù yíyàng xiūhǎo diànchí de jīqì.',vn:'Ông Vương đã mua cỗ máy có thể sửa pin như làm ảo thuật này.'},
     {zh:'晚会上，一位魔术师给大家表演了好几个精彩的魔术。',py:'Wǎnhuì shang, yí wèi móshùshī gěi dàjiā biǎoyǎnle hǎo jǐ ge jīngcǎi de móshù.',vn:'Tại buổi dạ hội, một nhà ảo thuật đã biểu diễn cho mọi người mấy tiết mục ảo thuật đặc sắc.'},
     {zh:'妈妈像变魔术一样，不到半小时就做好了一桌子菜。',py:'Māma xiàng biàn móshù yíyàng, bú dào bàn xiǎoshí jiù zuòhǎole yì zhuōzi cài.',vn:'Mẹ như làm ảo thuật, chưa đến nửa tiếng đã nấu xong cả một bàn thức ăn.'}
   ],
   colloFull:[
     {zh:'变魔术',py:'biàn móshù',vn:'làm ảo thuật'},
     {zh:'魔术师',py:'móshùshī',vn:'nhà ảo thuật'},
     {zh:'表演魔术',py:'biǎoyǎn móshù',vn:'biểu diễn ảo thuật'},
     {zh:'像变魔术一样',py:'xiàng biàn móshù yíyàng',vn:'như làm ảo thuật'},
     {zh:'魔术表演',py:'móshù biǎoyǎn',vn:'màn ảo thuật'}
   ],
   patterns:[
     {s:'像变魔术一样 + V',m:'… như làm ảo thuật (nhanh, thần kỳ)'},
     {s:'给 + người + 变 / 表演 + 魔术',m:'làm ảo thuật cho ai xem'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chú ấy làm ảo thuật cho bọn trẻ xem, đứa nào cũng cười.',answer:'叔叔给孩子们变魔术，孩子们都笑了。',answerPy:'Shūshu gěi háizimen biàn móshù, háizimen dōu xiào le.',
      note:'给 + người + V (ôn HSK 3).',pair:'给……V'},
     {promptLang:'vi',prompt:'Căn phòng bừa bộn qua tay cô ấy, như làm ảo thuật mà trở nên sạch bong.',answer:'乱七八糟的房间经过她的手，像变魔术一样变得干干净净。',answerPy:'Luànqībāzāo de fángjiān jīngguò tā de shǒu, xiàng biàn móshù yíyàng biàn de gāngānjìngjìng.',
      note:'像……一样 (so sánh, ôn HSK 3); 变得 + tính từ lặp AABB.',pair:'像……一样'}
   ]},

  {n:12,zh:'扣',py:'kòu',pos:'Động từ',vn:'trừ đi, khấu trừ; cài (cúc)',hv:'khấu',em:'➖',lesson:1,
   explain:['Trừ bớt một phần từ tổng số: 扣钱, 扣工资, 扣分, 扣掉租金和税金. Hay đi với bổ ngữ 掉 / 除 / 了.','Nghĩa khác: cài, móc (扣扣子 = cài cúc — 纽扣儿 bài 21); úp lên (把碗扣在桌子上); giữ lại (扣留).'],
   usage:'扣 + 钱 / 工资 / 分; 扣掉 / 扣除 + chi phí; 被扣了 + số lượng.',
   collo:['扣掉租金','扣工资','扣分','扣扣子'],
   ex_zh:'扣掉场地租金和税金',ex_py:'kòudiào chǎngdì zūjīn hé shuìjīn',ex_vn:'Trừ đi tiền thuê mặt bằng và tiền thuế',
   exList:[
     {zh:'扣掉场地租金和税金，他的月收入上万。',py:'Kòudiào chǎngdì zūjīn hé shuìjīn, tā de yuè shōurù shàng wàn.',vn:'Trừ đi tiền thuê mặt bằng và tiền thuế, thu nhập mỗi tháng của anh ấy vẫn trên một vạn.'},
     {zh:'上班迟到三次要扣工资。',py:'Shàngbān chídào sān cì yào kòu gōngzī.',vn:'Đi làm muộn ba lần sẽ bị trừ lương.'},
     {zh:'作文里错别字太多，被老师扣了五分。',py:'Zuòwén li cuòbiézì tài duō, bèi lǎoshī kòule wǔ fēn.',vn:'Bài văn sai chính tả quá nhiều, bị thầy trừ năm điểm.'}
   ],
   colloFull:[
     {zh:'扣掉租金',py:'kòudiào zūjīn',vn:'trừ tiền thuê'},
     {zh:'扣工资',py:'kòu gōngzī',vn:'trừ lương'},
     {zh:'扣分',py:'kòu fēn',vn:'trừ điểm'},
     {zh:'扣扣子',py:'kòu kòuzi',vn:'cài cúc'},
     {zh:'扣除费用',py:'kòuchú fèiyong',vn:'khấu trừ chi phí'}
   ],
   patterns:[
     {s:'扣掉 / 扣除 + chi phí，……',m:'Trừ đi chi phí thì …'},
     {s:'被 + (người) + 扣了 + số lượng',m:'bị (ai) trừ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trừ tiền nhà và tiền ăn đi, mỗi tháng tôi chẳng còn lại mấy đồng.',answer:'扣掉房租和饭钱，我每个月剩不下几个钱。',answerPy:'Kòudiào fángzū hé fànqián, wǒ měi ge yuè shèng bu xià jǐ ge qián.',
      note:'剩不下 = bổ ngữ khả năng phủ định; 几个钱 = chẳng bao nhiêu tiền (khẩu ngữ).',pair:'V不下'},
     {promptLang:'vi',prompt:'Nếu lần sau còn đến muộn thì sẽ bị trừ lương đấy.',answer:'如果下次再迟到，就要被扣工资了。',answerPy:'Rúguǒ xià cì zài chídào, jiù yào bèi kòu gōngzī le.',
      note:'要……了 (sắp); câu bị động 被 (ôn HSK 4).',pair:'要……了'}
   ]},

  {n:13,zh:'季度',py:'jìdù',pos:'Danh từ',vn:'quý (ba tháng)',hv:'quý độ',em:'📊',lesson:1,
   explain:['Đơn vị thời gian ba tháng, một năm có bốn quý: 第一季度, 上个季度, 两个季度. Hay dùng trong kinh tế, tài chính, báo cáo.','Lượng từ 个: 两个季度; làm định ngữ: 季度报告, 季度奖金.'],
   usage:'第 + số + 季度; 上 / 下 + 个季度; 季度 + 报告 / 奖金 / 目标.',
   collo:['两个季度','第一季度','上个季度','季度报告'],
   ex_zh:'不到两个季度',ex_py:'bú dào liǎng ge jìdù',ex_vn:'Chưa đến hai quý',
   exList:[
     {zh:'不到两个季度，他就轻松收回了本钱。',py:'Bú dào liǎng ge jìdù, tā jiù qīngsōng shōuhuíle běnqián.',vn:'Chưa đến hai quý, anh ấy đã dễ dàng thu hồi vốn.'},
     {zh:'今年第一季度，公司的销售额比去年增长了百分之二十。',py:'Jīnnián dì-yī jìdù, gōngsī de xiāoshòu\'é bǐ qùnián zēngzhǎngle bǎi fēn zhī èrshí.',vn:'Quý một năm nay, doanh thu của công ty tăng 20% so với năm ngoái.'},
     {zh:'经理让我在周五之前交上个季度的财务报告。',py:'Jīnglǐ ràng wǒ zài zhōuwǔ zhīqián jiāo shàng ge jìdù de cáiwù bàogào.',vn:'Giám đốc bảo tôi nộp báo cáo tài chính quý trước trước thứ Sáu.'}
   ],
   colloFull:[
     {zh:'两个季度',py:'liǎng ge jìdù',vn:'hai quý'},
     {zh:'第一季度',py:'dì-yī jìdù',vn:'quý một'},
     {zh:'上个季度',py:'shàng ge jìdù',vn:'quý trước'},
     {zh:'季度报告',py:'jìdù bàogào',vn:'báo cáo quý'},
     {zh:'季度奖金',py:'jìdù jiǎngjīn',vn:'thưởng quý'}
   ],
   patterns:[
     {s:'第 + số + 季度',m:'quý thứ …'},
     {s:'不到 + số + 个季度（就）……',m:'chưa đến … quý đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Doanh thu quý này cao hơn quý trước một chút.',answer:'这个季度的销售额比上个季度高一些。',answerPy:'Zhège jìdù de xiāoshòu\'é bǐ shàng ge jìdù gāo yìxiē.',
      note:'A 比 B + Adj + 一些 (ôn HSK 3).',pair:'A比B……一些'},
     {promptLang:'vi',prompt:'Chưa đến hai quý, cửa hàng mới đã bắt đầu có lãi.',answer:'不到两个季度，新店就开始赚钱了。',answerPy:'Bú dào liǎng ge jìdù, xīn diàn jiù kāishǐ zhuàn qián le.',
      note:'不到…… + 就…… (sớm hơn dự tính, ôn HSK 4).',pair:'不到……就……'}
   ]},

  {n:14,zh:'本钱',py:'běnqián',pos:'Danh từ',vn:'tiền vốn; vốn liếng',hv:'bản tiền',em:'💵',lesson:1,
   explain:['Tiền dùng để kinh doanh, sinh lời: 收回本钱 (thu hồi vốn), 下本钱 (bỏ vốn), 做生意要有本钱. Khẩu ngữ hơn 资本.','Nghĩa bóng: điều kiện, vốn quý để làm việc gì: 身体是革命的本钱 (sức khoẻ là vốn quý), 年轻就是本钱.'],
   usage:'收回 / 赔了 / 下 + 本钱; ……是……的本钱.',
   collo:['收回本钱','赔了本钱','下本钱','身体是本钱'],
   ex_zh:'轻松收回了本钱',ex_py:'qīngsōng shōuhuíle běnqián',ex_vn:'Dễ dàng thu hồi vốn',
   exList:[
     {zh:'不到两个季度，他就轻松收回了本钱。',py:'Bú dào liǎng ge jìdù, tā jiù qīngsōng shōuhuíle běnqián.',vn:'Chưa đến hai quý, anh ấy đã dễ dàng thu hồi vốn.'},
     {zh:'他第一次做生意就赔了本钱，可是一点儿也没灰心。',py:'Tā dì-yī cì zuò shēngyi jiù péile běnqián, kěshì yìdiǎnr yě méi huīxīn.',vn:'Lần đầu làm ăn anh ấy đã lỗ vốn, nhưng chẳng hề nản lòng.'},
     {zh:'身体是革命的本钱，工作再忙也要注意休息。',py:'Shēntǐ shì gémìng de běnqián, gōngzuò zài máng yě yào zhùyì xiūxi.',vn:'Sức khoẻ là vốn quý, công việc bận đến mấy cũng phải chú ý nghỉ ngơi.'}
   ],
   colloFull:[
     {zh:'收回本钱',py:'shōuhuí běnqián',vn:'thu hồi vốn'},
     {zh:'赔了本钱',py:'péile běnqián',vn:'lỗ vốn'},
     {zh:'下本钱',py:'xià běnqián',vn:'bỏ vốn'},
     {zh:'身体是本钱',py:'shēntǐ shì běnqián',vn:'sức khoẻ là vốn quý'},
     {zh:'做生意的本钱',py:'zuò shēngyi de běnqián',vn:'vốn làm ăn'}
   ],
   patterns:[
     {s:'收回 / 赔了 + 本钱',m:'thu hồi / lỗ vốn'},
     {s:'A 是 B 的本钱',m:'A là vốn quý (điều kiện) để B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm ăn không có vốn thì không được, nhưng chỉ có vốn thôi cũng không đủ.',answer:'做生意没有本钱不行，但光有本钱也不够。',answerPy:'Zuò shēngyi méiyǒu běnqián bù xíng, dàn guāng yǒu běnqián yě bú gòu.',
      note:'光 = chỉ (khẩu ngữ, ôn HSK 5).',pair:'光……也……'},
     {promptLang:'vi',prompt:'Công việc bận đến mấy cũng phải tập thể dục, vì sức khoẻ là vốn quý nhất.',answer:'工作再忙也要锻炼身体，因为身体是最重要的本钱。',answerPy:'Gōngzuò zài máng yě yào duànliàn shēntǐ, yīnwèi shēntǐ shì zuì zhòngyào de běnqián.',
      note:'再……也…… (nhượng bộ, ôn HSK 5).',pair:'再……也……'}
   ]},

  {n:15,zh:'通货膨胀',py:'tōnghuò péngzhàng',pos:'Danh từ',vn:'lạm phát',hv:'thông hoá bành trướng',em:'📈',lesson:1,
   explain:['Thuật ngữ kinh tế: tiền phát hành vượt quá nhu cầu, làm đồng tiền mất giá, giá cả tăng lên liên tục. Nói tắt là 通胀.','Hay đi với: 出现 / 发生 / 控制 / 抑制 + 通货膨胀; 受通货膨胀的影响. Trái nghĩa: 通货紧缩 (giảm phát).'],
   usage:'碰上 / 出现 / 控制 + 通货膨胀; 受通货膨胀的影响; 通货膨胀率.',
   collo:['碰上通货膨胀','控制通货膨胀','受通货膨胀的影响','通货膨胀率'],
   ex_zh:'即使碰上通货膨胀',ex_py:'jíshǐ pèngshang tōnghuò péngzhàng',ex_vn:'Cho dù gặp phải lạm phát',
   exList:[
     {zh:'类似这样的生意，即使碰上通货膨胀，也不会对他产生丝毫影响。',py:'Lèisì zhèyàng de shēngyi, jíshǐ pèngshang tōnghuò péngzhàng, yě bú huì duì tā chǎnshēng sīháo yǐngxiǎng.',vn:'Việc làm ăn kiểu này, cho dù gặp phải lạm phát cũng chẳng ảnh hưởng mảy may đến anh ấy.'},
     {zh:'受通货膨胀的影响，今年很多商品都涨价了。',py:'Shòu tōnghuò péngzhàng de yǐngxiǎng, jīnnián hěn duō shāngpǐn dōu zhǎngjià le.',vn:'Do ảnh hưởng của lạm phát, năm nay rất nhiều mặt hàng đều tăng giá.'},
     {zh:'政府采取了一系列措施来控制通货膨胀。',py:'Zhèngfǔ cǎiqǔle yíxìliè cuòshī lái kòngzhì tōnghuò péngzhàng.',vn:'Chính phủ đã áp dụng một loạt biện pháp để kiềm chế lạm phát.'}
   ],
   colloFull:[
     {zh:'碰上通货膨胀',py:'pèngshang tōnghuò péngzhàng',vn:'gặp phải lạm phát'},
     {zh:'控制通货膨胀',py:'kòngzhì tōnghuò péngzhàng',vn:'kiềm chế lạm phát'},
     {zh:'受通货膨胀的影响',py:'shòu tōnghuò péngzhàng de yǐngxiǎng',vn:'chịu ảnh hưởng của lạm phát'},
     {zh:'通货膨胀率',py:'tōnghuò péngzhànglǜ',vn:'tỷ lệ lạm phát'},
     {zh:'严重的通货膨胀',py:'yánzhòng de tōnghuò péngzhàng',vn:'lạm phát nghiêm trọng'}
   ],
   patterns:[
     {s:'受 + 通货膨胀的影响，……',m:'Do ảnh hưởng của lạm phát, …'},
     {s:'即使碰上通货膨胀，也……',m:'Cho dù gặp lạm phát cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu lạm phát nghiêm trọng, tiền để dành trong ngân hàng sẽ ngày càng mất giá.',answer:'如果通货膨胀严重，存在银行的钱会越来越不值钱。',answerPy:'Rúguǒ tōnghuò péngzhàng yánzhòng, cún zài yínháng de qián huì yuè lái yuè bù zhíqián.',
      note:'越来越 + Adj (ôn HSK 3); 值钱 = có giá.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tuy chịu ảnh hưởng của lạm phát, nhưng doanh thu của cửa hàng vẫn tăng.',answer:'虽然受到了通货膨胀的影响，但商店的收入还是增长了。',answerPy:'Suīrán shòudàole tōnghuò péngzhàng de yǐngxiǎng, dàn shāngdiàn de shōurù háishi zēngzhǎng le.',
      note:'受到……的影响; 还是 = vẫn (ôn HSK 4).',pair:'受到……的影响'}
   ]},

  {n:16,zh:'平庸',py:'píngyōng',pos:'Tính từ',vn:'tầm thường, xoàng, bình thường',hv:'bình dung',em:'😐',lesson:1,
   explain:['Bình thường, không có gì nổi bật, không có tài năng (mang nghĩa CHÊ): 思维平庸, 平庸的人, 才能平庸. Văn viết.','Khác 平凡 (bình dị — trung tính, có khi là khen: 平凡的岗位上做出不平凡的成绩): 平庸 luôn mang ý chê. Ôn cụm 不甘平庸 (tên 第二单元 quyển 上).'],
   usage:'思维 / 才能 / 作品 + 平庸; 平庸的 + 人 / 作品; 不甘平庸.',
   collo:['思维平庸','平庸的人','不甘平庸','平庸的作品'],
   ex_zh:'如果你思维平庸',ex_py:'rúguǒ nǐ sīwéi píngyōng',ex_vn:'Nếu tư duy của bạn tầm thường',
   exList:[
     {zh:'如果你思维平庸，就发现不了商机。',py:'Rúguǒ nǐ sīwéi píngyōng, jiù fāxiàn bu liǎo shāngjī.',vn:'Nếu tư duy của bạn tầm thường thì không phát hiện ra được cơ hội kinh doanh.'},
     {zh:'他不甘平庸，三十岁辞职开始了自己的创业之路。',py:'Tā bùgān píngyōng, sānshí suì cízhí kāishǐle zìjǐ de chuàngyè zhī lù.',vn:'Anh ấy không cam chịu tầm thường, ba mươi tuổi nghỉ việc bắt đầu con đường khởi nghiệp của mình.'},
     {zh:'这部电影情节平庸，没有什么新意。',py:'Zhè bù diànyǐng qíngjié píngyōng, méiyǒu shénme xīnyì.',vn:'Bộ phim này tình tiết xoàng, chẳng có gì mới mẻ.'}
   ],
   colloFull:[
     {zh:'思维平庸',py:'sīwéi píngyōng',vn:'tư duy tầm thường'},
     {zh:'平庸的人',py:'píngyōng de rén',vn:'người tầm thường'},
     {zh:'不甘平庸',py:'bùgān píngyōng',vn:'không cam chịu tầm thường'},
     {zh:'平庸的作品',py:'píngyōng de zuòpǐn',vn:'tác phẩm xoàng'},
     {zh:'才能平庸',py:'cáinéng píngyōng',vn:'tài năng bình thường'}
   ],
   patterns:[
     {s:'N + 平庸',m:'N tầm thường, xoàng'},
     {s:'不甘（于）平庸',m:'không cam chịu tầm thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không muốn sống một cuộc đời tầm thường, tôi muốn thử những điều mới.',answer:'我不想过平庸的生活，我想尝试新的东西。',answerPy:'Wǒ bù xiǎng guò píngyōng de shēnghuó, wǒ xiǎng chángshì xīn de dōngxi.',
      note:'过……的生活 (sống cuộc sống …); 尝试 (ôn HSK 5).',pair:'过……的生活'},
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết này tuy nổi tiếng nhưng tôi thấy khá xoàng.',answer:'这本小说虽然很有名，但我觉得挺平庸的。',answerPy:'Zhè běn xiǎoshuō suīrán hěn yǒumíng, dàn wǒ juéde tǐng píngyōng de.',
      note:'挺……的 = khá … (khẩu ngữ, ôn HSK 4).',pair:'挺……的'}
   ]},

  {n:17,zh:'捏',py:'niē',pos:'Động từ',vn:'nhón, nhặt, cầm (bằng đầu ngón tay); nặn; nắm giữ',hv:'niết',em:'🤏',lesson:1,
   explain:['Dùng ngón cái và các ngón khác kẹp, cầm vật: 捏着一根针, 捏鼻子. Còn có nghĩa nặn (bằng tay): 捏饺子, 捏泥人.','Nghĩa bóng: nắm chắc trong tay, khống chế: 市场就捏在你的手里. Thành ngữ: 捏一把汗 (toát mồ hôi lo lắng thay).'],
   usage:'捏 + 着 + vật nhỏ; 捏 + 饺子 / 泥人; ……捏在……手里; 捏一把汗.',
   collo:['捏在手里','捏鼻子','捏饺子','捏一把汗'],
   ex_zh:'市场就捏在你的手里',ex_py:'shìchǎng jiù niē zài nǐ de shǒu li',ex_vn:'Thị trường sẽ nằm trong tay bạn',
   exList:[
     {zh:'只要你勤劳，市场就捏在你的手里。',py:'Zhǐyào nǐ qínláo, shìchǎng jiù niē zài nǐ de shǒu li.',vn:'Chỉ cần bạn chăm chỉ, thị trường sẽ nằm gọn trong tay bạn.'},
     {zh:'垃圾站臭得很，路过的人都捏着鼻子快步走过。',py:'Lājīzhàn chòu de hěn, lùguò de rén dōu niēzhe bízi kuàibù zǒuguò.',vn:'Trạm rác hôi lắm, người đi qua đều bịt mũi rảo bước.'},
     {zh:'看他在高空走钢丝，大家都替他捏了一把汗。',py:'Kàn tā zài gāokōng zǒu gāngsī, dàjiā dōu tì tā niēle yì bǎ hàn.',vn:'Nhìn anh ấy đi trên dây thép trên cao, ai cũng toát mồ hôi lo thay.'}
   ],
   colloFull:[
     {zh:'捏在手里',py:'niē zài shǒu li',vn:'nắm trong tay'},
     {zh:'捏鼻子',py:'niē bízi',vn:'bịt mũi'},
     {zh:'捏饺子',py:'niē jiǎozi',vn:'nặn sủi cảo'},
     {zh:'捏一把汗',py:'niē yì bǎ hàn',vn:'toát mồ hôi lo lắng'},
     {zh:'捏泥人',py:'niē nírén',vn:'nặn tượng đất'}
   ],
   patterns:[
     {s:'……捏在 + 某人 + 手里',m:'… nằm trong tay ai (bị ai nắm giữ)'},
     {s:'替 + 某人 + 捏一把汗',m:'lo toát mồ hôi thay cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngày Tết, cả nhà cùng ngồi quanh bàn nặn sủi cảo.',answer:'过年的时候，全家人围坐在桌子旁边捏饺子。',answerPy:'Guònián de shíhou, quánjiārén wéizuò zài zhuōzi pángbiān niē jiǎozi.',
      note:'……的时候 (ôn HSK 2–3); V + 在 + nơi chốn.',pair:'……的时候'},
     {promptLang:'vi',prompt:'Trận đấu gay cấn quá, khán giả đều toát mồ hôi lo cho đội chủ nhà.',answer:'比赛太紧张了，观众都替主队捏了一把汗。',answerPy:'Bǐsài tài jǐnzhāng le, guānzhòng dōu tì zhǔduì niēle yì bǎ hàn.',
      note:'太……了; 替 + người + V (ôn HSK 4).',pair:'替……V'}
   ]},

  {n:18,zh:'环节',py:'huánjié',pos:'Danh từ',vn:'khâu, mắt xích',hv:'hoàn tiết',em:'⛓️',lesson:1,
   explain:['Một bộ phận (khâu) liên quan chặt chẽ với các bộ phận khác trong cả một quá trình: 薄弱环节 (khâu yếu), 关键环节, 生产环节, 每一个环节.','Hay dùng trong quản lý, sản xuất, tổ chức sự kiện: 这个环节出了问题 = khâu này có vấn đề.'],
   usage:'薄弱 / 关键 / 重要 + 环节; 生产 / 销售 + 环节; 每一个环节都……',
   collo:['薄弱环节','关键环节','生产环节','每一个环节'],
   ex_zh:'营销的薄弱环节',ex_py:'yíngxiāo de bóruò huánjié',ex_vn:'Khâu yếu trong tiếp thị',
   exList:[
     {zh:'研究竞争对手，从中找出其产品的弱点及营销的薄弱环节，是捕捉商机的有效方法之一。',py:'Yánjiū jìngzhēng duìshǒu, cóngzhōng zhǎochū qí chǎnpǐn de ruòdiǎn jí yíngxiāo de bóruò huánjié, shì bǔzhuō shāngjī de yǒuxiào fāngfǎ zhī yī.',vn:'Nghiên cứu đối thủ cạnh tranh, từ đó tìm ra điểm yếu trong sản phẩm và khâu yếu trong tiếp thị của họ, là một trong những cách hiệu quả để nắm bắt cơ hội kinh doanh.'},
     {zh:'生产中的每一个环节都不能马虎。',py:'Shēngchǎn zhōng de měi yí ge huánjié dōu bù néng mǎhu.',vn:'Mỗi khâu trong sản xuất đều không được cẩu thả.'},
     {zh:'晚会的最后一个环节是抽奖，大家都很期待。',py:'Wǎnhuì de zuìhòu yí ge huánjié shì chōujiǎng, dàjiā dōu hěn qīdài.',vn:'Tiết mục cuối cùng của buổi dạ hội là bốc thăm trúng thưởng, ai cũng rất mong chờ.'}
   ],
   colloFull:[
     {zh:'薄弱环节',py:'bóruò huánjié',vn:'khâu yếu'},
     {zh:'关键环节',py:'guānjiàn huánjié',vn:'khâu then chốt'},
     {zh:'生产环节',py:'shēngchǎn huánjié',vn:'khâu sản xuất'},
     {zh:'每一个环节',py:'měi yí ge huánjié',vn:'mỗi một khâu'},
     {zh:'销售环节',py:'xiāoshòu huánjié',vn:'khâu bán hàng'}
   ],
   patterns:[
     {s:'……的薄弱 / 关键环节',m:'khâu yếu / then chốt của …'},
     {s:'每一个环节都 + 不能 / 要……',m:'mỗi khâu đều (không được / phải) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần một khâu có vấn đề là cả kế hoạch có thể thất bại.',answer:'只要一个环节出了问题，整个计划就可能失败。',answerPy:'Zhǐyào yí ge huánjié chūle wèntí, zhěnggè jìhuà jiù kěnéng shībài.',
      note:'只要……就…… (ôn HSK 4); 出问题 = xảy ra sự cố.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Kiểm tra chất lượng là khâu then chốt nhất trong sản xuất.',answer:'质量检查是生产中最关键的环节。',answerPy:'Zhìliàng jiǎnchá shì shēngchǎn zhōng zuì guānjiàn de huánjié.',
      note:'最 + Adj + 的 + N (so sánh bậc nhất).',pair:'最……的'}
   ]},

  {n:19,zh:'兴旺',py:'xīngwàng',pos:'Tính từ',vn:'thịnh vượng, phát đạt, hưng thịnh',hv:'hưng vượng',em:'🌞',lesson:1,
   explain:['(Sự nghiệp, thị trường, gia đình…) phát triển mạnh, ngày càng tốt lên: 市场兴旺, 生意兴旺, 人丁兴旺 (nhà đông con cháu). Văn viết; gần nghĩa 兴隆 (bài 21, chủ yếu nói buôn bán).','Hay đi với 日渐 / 日益 / 越来越: 日渐兴旺 (ngày càng phát đạt).'],
   usage:'生意 / 市场 / 事业 / 家业 + 兴旺; 日渐 / 日益 + 兴旺; 兴旺发达.',
   collo:['日渐兴旺','生意兴旺','兴旺发达','人丁兴旺'],
   ex_zh:'日渐兴旺的日本泡泡糖市场',ex_py:'rìjiàn xīngwàng de Rìběn pàopàotáng shìchǎng',ex_vn:'Thị trường kẹo cao su thổi bóng Nhật Bản ngày càng phát đạt',
   exList:[
     {zh:'当年，日渐兴旺的日本泡泡糖市场大部分被劳特垄断。',py:'Dāngnián, rìjiàn xīngwàng de Rìběn pàopàotáng shìchǎng dà bùfen bèi Láotè lǒngduàn.',vn:'Hồi ấy, thị trường kẹo cao su thổi bóng ngày càng phát đạt của Nhật Bản phần lớn bị Lotte lũng đoạn.'},
     {zh:'祝您生意兴旺，财源广进！',py:'Zhù nín shēngyi xīngwàng, cáiyuán guǎng jìn!',vn:'Chúc anh buôn may bán đắt, tiền vào như nước!'},
     {zh:'旅游业的兴旺带动了当地经济的发展。',py:'Lǚyóuyè de xīngwàng dàidòngle dāngdì jīngjì de fāzhǎn.',vn:'Sự phát đạt của ngành du lịch đã kéo theo sự phát triển kinh tế địa phương.'}
   ],
   colloFull:[
     {zh:'日渐兴旺',py:'rìjiàn xīngwàng',vn:'ngày càng phát đạt'},
     {zh:'生意兴旺',py:'shēngyi xīngwàng',vn:'buôn bán phát đạt'},
     {zh:'兴旺发达',py:'xīngwàng fādá',vn:'thịnh vượng phát đạt'},
     {zh:'人丁兴旺',py:'réndīng xīngwàng',vn:'đông con nhiều cháu'},
     {zh:'市场兴旺',py:'shìchǎng xīngwàng',vn:'thị trường sôi động'}
   ],
   patterns:[
     {s:'日渐 / 日益 + 兴旺',m:'ngày càng thịnh vượng'},
     {s:'祝 + 某人 + 生意兴旺',m:'Chúc ai buôn bán phát đạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có đường cao tốc, làng này ngày càng phát đạt.',answer:'自从有了高速公路，这个村子日渐兴旺。',answerPy:'Zìcóng yǒule gāosù gōnglù, zhège cūnzi rìjiàn xīngwàng.',
      note:'自从……（以后）= từ khi … (ôn HSK 4).',pair:'自从……'},
     {promptLang:'vi',prompt:'Ngày khai trương, bạn bè đến chúc anh ấy làm ăn phát đạt.',answer:'开业那天，朋友们都来祝他生意兴旺。',answerPy:'Kāiyè nà tiān, péngyoumen dōu lái zhù tā shēngyi xīngwàng.',
      note:'祝 + người + lời chúc (ôn HSK 3); 来 + V (mục đích).',pair:'祝……'}
   ]},

  {n:20,zh:'垄断',py:'lǒngduàn',pos:'Động từ',vn:'lũng đoạn, độc quyền',hv:'lũng đoạn',em:'🏰',lesson:1,
   explain:['Nắm giữ độc chiếm (thị trường, nguồn hàng…) để thao túng và thu lợi: 垄断市场, 垄断价格, 被……垄断. Thuật ngữ kinh tế, văn viết.','Còn làm danh từ / định ngữ: 反垄断 (chống độc quyền), 垄断企业, 形成垄断.'],
   usage:'垄断 + 市场 / 价格 / 资源; 被 + ……垄断; 形成 / 打破 + 垄断.',
   collo:['垄断市场','被……垄断','打破垄断','垄断企业'],
   ex_zh:'大部分被劳特垄断',ex_py:'dà bùfen bèi Láotè lǒngduàn',ex_vn:'Phần lớn bị Lotte lũng đoạn',
   exList:[
     {zh:'日本泡泡糖市场大部分被劳特垄断，别的公司很难进入。',py:'Rìběn pàopàotáng shìchǎng dà bùfen bèi Láotè lǒngduàn, bié de gōngsī hěn nán jìnrù.',vn:'Thị trường kẹo cao su thổi bóng của Nhật phần lớn bị Lotte độc quyền, công ty khác rất khó chen chân.'},
     {zh:'新公司的加入打破了这个行业的垄断。',py:'Xīn gōngsī de jiārù dǎpòle zhège hángyè de lǒngduàn.',vn:'Sự tham gia của công ty mới đã phá vỡ thế độc quyền của ngành này.'},
     {zh:'很多国家都有法律禁止企业垄断价格。',py:'Hěn duō guójiā dōu yǒu fǎlǜ jìnzhǐ qǐyè lǒngduàn jiàgé.',vn:'Nhiều nước đều có luật cấm doanh nghiệp thao túng độc quyền giá cả.'}
   ],
   colloFull:[
     {zh:'垄断市场',py:'lǒngduàn shìchǎng',vn:'độc quyền thị trường'},
     {zh:'被……垄断',py:'bèi……lǒngduàn',vn:'bị … lũng đoạn'},
     {zh:'打破垄断',py:'dǎpò lǒngduàn',vn:'phá thế độc quyền'},
     {zh:'垄断企业',py:'lǒngduàn qǐyè',vn:'doanh nghiệp độc quyền'},
     {zh:'垄断价格',py:'lǒngduàn jiàgé',vn:'thao túng giá cả'}
   ],
   patterns:[
     {s:'A 被 B 垄断',m:'A bị B độc quyền, lũng đoạn'},
     {s:'打破 + ……的垄断',m:'phá vỡ thế độc quyền của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu thị trường bị một công ty độc quyền, người tiêu dùng sẽ chịu thiệt.',answer:'如果市场被一家公司垄断，消费者就会吃亏。',answerPy:'Rúguǒ shìchǎng bèi yì jiā gōngsī lǒngduàn, xiāofèizhě jiù huì chīkuī.',
      note:'Câu bị động 被 (ôn HSK 4); 吃亏 = chịu thiệt (ôn HSK 5).',pair:'被……'},
     {promptLang:'vi',prompt:'Muốn phá thế độc quyền thì phải có sản phẩm tốt hơn.',answer:'要想打破垄断，就得有更好的产品。',answerPy:'Yào xiǎng dǎpò lǒngduàn, jiù děi yǒu gèng hǎo de chǎnpǐn.',
      note:'要想……，就得…… (điều kiện, ôn HSK 5).',pair:'要想……就得……'}
   ]},

  {n:21,zh:'扩充',py:'kuòchōng',pos:'Động từ',vn:'mở rộng, tăng thêm, bổ sung',hv:'khuếch sung',em:'➕',lesson:1,
   explain:['Làm cho quy mô, số lượng, nội dung lớn thêm, đầy đủ thêm: 扩充业务, 扩充设备, 扩充人员, 扩充内容.','So với 扩大 (mở rộng phạm vi, quy mô — dùng rộng hơn: 扩大面积, 扩大影响): 扩充 nhấn "bổ sung cho đầy đủ hơn", tân ngữ thường là 业务 / 设备 / 人员 / 实力 / 内容.'],
   usage:'扩充 + 业务 / 设备 / 人员 / 实力 / 内容; (规模) + 扩充.',
   collo:['扩充业务','扩充设备','扩充人员','扩充实力'],
   ex_zh:'江崎公司想扩充这方面的业务',ex_py:'Jiāngqí gōngsī xiǎng kuòchōng zhè fāngmiàn de yèwù',ex_vn:'Công ty Ezaki muốn mở rộng mảng kinh doanh này',
   exList:[
     {zh:'江崎公司想扩充这方面的业务，于是专门成立了团队。',py:'Jiāngqí gōngsī xiǎng kuòchōng zhè fāngmiàn de yèwù, yúshì zhuānmén chénglìle tuánduì.',vn:'Công ty Ezaki muốn mở rộng mảng kinh doanh này, thế là lập riêng một đội.'},
     {zh:'公司规模扩充，发展前景值得期待。',py:'Gōngsī guīmó kuòchōng, fāzhǎn qiánjǐng zhídé qīdài.',vn:'Quy mô công ty được mở rộng, triển vọng phát triển rất đáng mong đợi.'},
     {zh:'为了扩充实力，这家企业又引进了一批新设备。',py:'Wèile kuòchōng shílì, zhè jiā qǐyè yòu yǐnjìnle yì pī xīn shèbèi.',vn:'Để tăng thêm thực lực, doanh nghiệp này lại nhập về một lô thiết bị mới.'}
   ],
   colloFull:[
     {zh:'扩充业务',py:'kuòchōng yèwù',vn:'mở rộng nghiệp vụ'},
     {zh:'扩充设备',py:'kuòchōng shèbèi',vn:'bổ sung thiết bị'},
     {zh:'扩充人员',py:'kuòchōng rényuán',vn:'tăng thêm nhân sự'},
     {zh:'扩充实力',py:'kuòchōng shílì',vn:'tăng thêm thực lực'},
     {zh:'规模扩充',py:'guīmó kuòchōng',vn:'quy mô mở rộng'}
   ],
   patterns:[
     {s:'扩充 + 业务 / 设备 / 人员',m:'mở rộng, bổ sung …'},
     {s:'为了扩充……，……',m:'Để mở rộng …, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thư viện trường dự định năm nay bổ sung thêm năm nghìn cuốn sách.',answer:'学校图书馆打算今年扩充五千本图书。',answerPy:'Xuéxiào túshūguǎn dǎsuan jīnnián kuòchōng wǔqiān běn túshū.',
      note:'打算 + V (dự định, ôn HSK 3).',pair:'打算……'},
     {promptLang:'vi',prompt:'Theo sự phát triển của nghiệp vụ, công ty cần tăng thêm nhân sự.',answer:'随着业务的发展，公司需要扩充人员。',answerPy:'Suízhe yèwù de fāzhǎn, gōngsī xūyào kuòchōng rényuán.',
      note:'随着…… = cùng với, theo (ôn HSK 4).',pair:'随着……'}
   ]},

  {n:22,zh:'掏',py:'tāo',pos:'Động từ',vn:'lấy ra, rút ra, móc (từ trong túi…)',hv:'đào',em:'👛',lesson:1,
   explain:['Thò tay vào trong (túi, ví…) lấy đồ ra: 掏钱, 掏出手机, 从口袋里掏出…. Khẩu ngữ.','Nghĩa khác: moi, khoét (掏耳朵 = ngoáy tai); 掏钱 còn có nghĩa bóng "bỏ tiền ra trả": 这顿饭我掏钱.'],
   usage:'掏 + 钱 / 钥匙 / 手机; 从……里掏出……; 掏腰包 (bỏ tiền túi).',
   collo:['掏硬币','掏钱','掏出手机','掏腰包'],
   ex_zh:'买时得掏10日元硬币',ex_py:'mǎi shí děi tāo shí rìyuán yìngbì',ex_vn:'Lúc mua phải móc đồng xu 10 yên',
   exList:[
     {zh:'劳特产品售价110日元，买时得掏10日元硬币，不方便购买者。',py:'Láotè chǎnpǐn shòujià yìbǎi yīshí rìyuán, mǎi shí děi tāo shí rìyuán yìngbì, bù fāngbiàn gòumǎizhě.',vn:'Sản phẩm Lotte giá 110 yên, lúc mua phải móc đồng xu 10 yên, bất tiện cho người mua.'},
     {zh:'他从口袋里掏出手机，给妈妈打了个电话。',py:'Tā cóng kǒudai li tāochū shǒujī, gěi māma dǎle ge diànhuà.',vn:'Cậu ấy rút điện thoại trong túi ra gọi cho mẹ.'},
     {zh:'这次聚会的费用都是他自己掏腰包。',py:'Zhè cì jùhuì de fèiyong dōu shì tā zìjǐ tāo yāobāo.',vn:'Chi phí buổi tụ tập lần này đều là anh ấy tự bỏ tiền túi.'}
   ],
   colloFull:[
     {zh:'掏硬币',py:'tāo yìngbì',vn:'móc đồng xu'},
     {zh:'掏钱',py:'tāo qián',vn:'bỏ tiền ra, rút tiền'},
     {zh:'掏出手机',py:'tāochū shǒujī',vn:'rút điện thoại ra'},
     {zh:'掏腰包',py:'tāo yāobāo',vn:'bỏ tiền túi'},
     {zh:'从口袋里掏出',py:'cóng kǒudai li tāochū',vn:'móc từ trong túi ra'}
   ],
   patterns:[
     {s:'从 + 地方 + 里掏出 + N',m:'rút / móc N từ trong … ra'},
     {s:'（自己）掏腰包',m:'tự bỏ tiền túi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông lão móc ra một tấm ảnh cũ trong túi, đưa cho tôi xem.',answer:'老人从口袋里掏出一张旧照片，递给我看。',answerPy:'Lǎorén cóng kǒudai li tāochū yì zhāng jiù zhàopiàn, dì gěi wǒ kàn.',
      note:'V + 出 (bổ ngữ xu hướng, ôn HSK 4); 递给 + người.',pair:'V出'},
     {promptLang:'vi',prompt:'Hôm nay tôi mời, cậu đừng rút tiền ra.',answer:'今天我请客，你别掏钱。',answerPy:'Jīntiān wǒ qǐngkè, nǐ bié tāo qián.',
      note:'别 + V (khuyên ngăn, ôn HSK 2).',pair:'别……'}
   ]},

  {n:23,zh:'布局',py:'bùjú',pos:'Động từ / Danh từ',vn:'sắp đặt, bố trí; bố cục, cách bố trí',hv:'bố cục',em:'♟️',lesson:1,
   explain:['Động từ: sắp xếp, bố trí toàn diện (chiến lược, thị trường…): 大胆布局, 提前布局, 在……布局. Trong kinh doanh = "đi nước cờ", triển khai kế hoạch.','Danh từ: cách sắp xếp tổng thể (nhà cửa, văn chương, thành phố): 房间布局, 城市布局, 文章的布局 (bố cục bài văn).'],
   usage:'大胆 / 提前 + 布局; 在 + thị trường + 布局; 房间 / 城市 / 文章 + 的布局.',
   collo:['大胆布局','提前布局','房间布局','文章的布局'],
   ex_zh:'江崎公司大胆布局',ex_py:'Jiāngqí gōngsī dàdǎn bùjú',ex_vn:'Công ty Ezaki mạnh dạn bố trí chiến lược',
   exList:[
     {zh:'于是江崎公司大胆布局，以成年人的消费需求为依据设计产品。',py:'Yúshì Jiāngqí gōngsī dàdǎn bùjú, yǐ chéngniánrén de xiāofèi xūqiú wéi yījù shèjì chǎnpǐn.',vn:'Thế là công ty Ezaki mạnh dạn đi nước cờ mới, lấy nhu cầu tiêu dùng của người lớn làm căn cứ để thiết kế sản phẩm.'},
     {zh:'这套房子的布局很合理，每个房间都很明亮。',py:'Zhè tào fángzi de bùjú hěn hélǐ, měi ge fángjiān dōu hěn míngliàng.',vn:'Cách bố trí căn nhà này rất hợp lý, phòng nào cũng sáng sủa.'},
     {zh:'写作文之前，要先想好文章的布局。',py:'Xiě zuòwén zhīqián, yào xiān xiǎnghǎo wénzhāng de bùjú.',vn:'Trước khi viết bài văn, phải nghĩ kỹ bố cục trước.'}
   ],
   colloFull:[
     {zh:'大胆布局',py:'dàdǎn bùjú',vn:'mạnh dạn bố trí'},
     {zh:'提前布局',py:'tíqián bùjú',vn:'bố trí trước'},
     {zh:'房间布局',py:'fángjiān bùjú',vn:'cách bố trí phòng'},
     {zh:'文章的布局',py:'wénzhāng de bùjú',vn:'bố cục bài văn'},
     {zh:'城市布局',py:'chéngshì bùjú',vn:'quy hoạch thành phố'}
   ],
   patterns:[
     {s:'（在 + 领域）+ 大胆 / 提前 + 布局',m:'mạnh dạn / sớm bố trí chiến lược (ở lĩnh vực …)'},
     {s:'……的布局 + 合理 / 紧凑',m:'bố cục của … hợp lý / chặt chẽ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều công ty đã bắt đầu sớm bố trí chiến lược ở thị trường Đông Nam Á.',answer:'很多公司已经开始在东南亚市场提前布局了。',answerPy:'Hěn duō gōngsī yǐjīng kāishǐ zài Dōngnányà shìchǎng tíqián bùjú le.',
      note:'已经……了 (ôn HSK 2–3); 在 + nơi + V.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Bài văn này tuy ý hay nhưng bố cục hơi lộn xộn.',answer:'这篇文章虽然想法很好，但布局有点儿乱。',answerPy:'Zhè piān wénzhāng suīrán xiǎngfǎ hěn hǎo, dàn bùjú yǒudiǎnr luàn.',
      note:'有点儿 + Adj (không hài lòng, ôn HSK 3).',pair:'有点儿……'}
   ]},

  {n:24,zh:'拟定',py:'nǐdìng',pos:'Động từ',vn:'định ra, vạch ra, soạn thảo',hv:'nghĩ định',em:'📝',lesson:1,
   explain:['Soạn ra, định ra (kế hoạch, phương án, văn bản) — thường là bản thảo, chưa chính thức: 拟定计划, 拟定方案, 拟定合同, 拟定策略. Văn viết, dùng trong công việc.','拟 = dự tính, phác thảo (草拟 = soạn thảo); so với 制定 (chế định — ban hành chính thức: 制定法律), 拟定 thiên về khâu soạn thảo.'],
   usage:'拟定 + 计划 / 方案 / 策略 / 合同 / 提纲.',
   collo:['拟定策略','拟定计划','拟定方案','拟定合同'],
   ex_zh:'又拟定了相应的市场营销策略',ex_py:'yòu nǐdìngle xiāngyìng de shìchǎng yíngxiāo cèlüè',ex_vn:'Lại vạch ra chiến lược tiếp thị tương ứng',
   exList:[
     {zh:'江崎公司又拟定了相应的市场营销策略。',py:'Jiāngqí gōngsī yòu nǐdìngle xiāngyìng de shìchǎng yíngxiāo cèlüè.',vn:'Công ty Ezaki lại vạch ra chiến lược tiếp thị thị trường tương ứng.'},
     {zh:'经理让我先拟定一个活动方案，明天开会讨论。',py:'Jīnglǐ ràng wǒ xiān nǐdìng yí ge huódòng fāng\'àn, míngtiān kāihuì tǎolùn.',vn:'Giám đốc bảo tôi soạn trước một phương án hoạt động, mai họp thảo luận.'},
     {zh:'写论文以前，最好先拟定一个详细的提纲。',py:'Xiě lùnwén yǐqián, zuìhǎo xiān nǐdìng yí ge xiángxì de tígāng.',vn:'Trước khi viết luận văn, tốt nhất nên lập trước một dàn ý chi tiết.'}
   ],
   colloFull:[
     {zh:'拟定策略',py:'nǐdìng cèlüè',vn:'vạch ra chiến lược'},
     {zh:'拟定计划',py:'nǐdìng jìhuà',vn:'định ra kế hoạch'},
     {zh:'拟定方案',py:'nǐdìng fāng\'àn',vn:'soạn phương án'},
     {zh:'拟定合同',py:'nǐdìng hétong',vn:'soạn thảo hợp đồng'},
     {zh:'拟定提纲',py:'nǐdìng tígāng',vn:'lập dàn ý'}
   ],
   patterns:[
     {s:'（先）拟定 + 一个 + 计划 / 方案',m:'(trước hết) soạn ra một kế hoạch / phương án'},
     {s:'拟定 + 相应的 + 策略',m:'vạch ra chiến lược tương ứng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước kỳ thi, tốt nhất nên lập ra một kế hoạch ôn tập hợp lý.',answer:'考试之前，最好拟定一个合理的复习计划。',answerPy:'Kǎoshì zhīqián, zuìhǎo nǐdìng yí ge hélǐ de fùxí jìhuà.',
      note:'最好 + V = tốt nhất là (ôn HSK 4).',pair:'最好……'},
     {promptLang:'vi',prompt:'Hợp đồng đã soạn xong rồi, mời anh xem qua một chút.',answer:'合同已经拟定好了，请您过目一下。',answerPy:'Hétong yǐjīng nǐdìng hǎo le, qǐng nín guòmù yíxià.',
      note:'V + 好 (bổ ngữ kết quả, xong xuôi); 过目 = xem qua (lịch sự).',pair:'V好'}
   ]},

  {n:25,zh:'策略',py:'cèlüè',pos:'Danh từ',vn:'sách lược, chiến lược, cách làm',hv:'sách lược',em:'🎯',lesson:1,
   explain:['Phương châm, cách thức hành động đề ra theo tình hình để đạt mục tiêu: 营销策略, 市场策略, 竞争策略. Chú ý pinyin: 略 = lüè (có ü).','So với 战略 (chiến lược — tầm lớn, lâu dài, toàn cục; bài 23): 策略 cụ thể hơn, linh hoạt hơn, có thể điều chỉnh theo tình hình: 调整策略. Còn làm tính từ: 说话要讲究策略 (khéo léo).'],
   usage:'制定 / 拟定 / 调整 + 策略; 营销 / 市场 / 竞争 + 策略; 讲究策略.',
   collo:['营销策略','调整策略','拟定策略','讲究策略'],
   ex_zh:'相应的市场营销策略',ex_py:'xiāngyìng de shìchǎng yíngxiāo cèlüè',ex_vn:'Chiến lược tiếp thị thị trường tương ứng',
   exList:[
     {zh:'江崎公司又拟定了相应的市场营销策略。',py:'Jiāngqí gōngsī yòu nǐdìngle xiāngyìng de shìchǎng yíngxiāo cèlüè.',vn:'Công ty Ezaki lại vạch ra chiến lược tiếp thị tương ứng.'},
     {zh:'我们及时调整营销策略，终于赢得了客户的认可。',py:'Wǒmen jíshí tiáozhěng yíngxiāo cèlüè, zhōngyú yíngdéle kèhù de rènkě.',vn:'Chúng tôi kịp thời điều chỉnh chiến lược tiếp thị, cuối cùng đã giành được sự công nhận của khách hàng.'},
     {zh:'批评别人要讲究策略，不然容易伤人。',py:'Pīpíng biérén yào jiǎngjiu cèlüè, bùrán róngyì shāng rén.',vn:'Phê bình người khác phải khéo léo, nếu không dễ làm người ta tổn thương.'}
   ],
   colloFull:[
     {zh:'营销策略',py:'yíngxiāo cèlüè',vn:'chiến lược tiếp thị'},
     {zh:'调整策略',py:'tiáozhěng cèlüè',vn:'điều chỉnh sách lược'},
     {zh:'拟定策略',py:'nǐdìng cèlüè',vn:'vạch ra sách lược'},
     {zh:'讲究策略',py:'jiǎngjiu cèlüè',vn:'chú ý cách làm khéo léo'},
     {zh:'竞争策略',py:'jìngzhēng cèlüè',vn:'chiến lược cạnh tranh'}
   ],
   patterns:[
     {s:'调整 / 拟定 + ……策略',m:'điều chỉnh / vạch ra chiến lược …'},
     {s:'V + 要讲究策略',m:'làm … phải có sách lược, khéo léo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu chiến lược không đúng thì cố gắng thế nào cũng vô ích.',answer:'如果策略不对，再怎么努力也没用。',answerPy:'Rúguǒ cèlüè bú duì, zài zěnme nǔlì yě méi yòng.',
      note:'再怎么……也…… (nhượng bộ tuyệt đối, ôn HSK 5).',pair:'再怎么……也……'},
     {promptLang:'vi',prompt:'Nhờ điều chỉnh chiến lược kịp thời, doanh số tháng này bắt đầu tăng trở lại.',answer:'由于及时调整了策略，这个月的销售业绩开始回升了。',answerPy:'Yóuyú jíshí tiáozhěngle cèlüè, zhège yuè de xiāoshòu yèjì kāishǐ huíshēng le.',
      note:'由于…… (nguyên nhân, văn viết, ôn HSK 4).',pair:'由于……'}
   ]},

  {n:26,zh:'咀嚼',py:'jǔjué',pos:'Động từ',vn:'nhai; nghiền ngẫm',hv:'trớ tước',em:'😬',lesson:1,
   explain:['Dùng răng nghiền nát thức ăn: 细细咀嚼, 充分咀嚼, 咀嚼后. Văn viết, trang trọng hơn 嚼 (jiáo — khẩu ngữ). Chú ý: 嚼 trong 咀嚼 đọc jué.','Nghĩa bóng: suy ngẫm kỹ (lời nói, câu văn): 咀嚼这句话的含义 (nghiền ngẫm ý nghĩa câu nói).'],
   usage:'细细 / 慢慢 / 充分 + 咀嚼; 咀嚼 + 食物; 咀嚼 + 含义 / 味道 (nghĩa bóng).',
   collo:['咀嚼后','细细咀嚼','充分咀嚼','咀嚼食物'],
   ex_zh:'交际用泡泡糖，咀嚼后，可清洁口腔',ex_py:'jiāojì yòng pàopàotáng, jǔjué hòu, kě qīngjié kǒuqiāng',ex_vn:'Kẹo cao su dùng khi giao tiếp, nhai xong có thể làm sạch khoang miệng',
   exList:[
     {zh:'交际用泡泡糖，咀嚼后，可清洁口腔，消除口腔异味。',py:'Jiāojì yòng pàopàotáng, jǔjué hòu, kě qīngjié kǒuqiāng, xiāochú kǒuqiāng yìwèi.',vn:'Kẹo cao su dùng khi giao tiếp, nhai xong có thể làm sạch khoang miệng, khử mùi hôi miệng.'},
     {zh:'医生说，吃饭时要充分咀嚼，这样有利于消化。',py:'Yīshēng shuō, chī fàn shí yào chōngfèn jǔjué, zhèyàng yǒulìyú xiāohuà.',vn:'Bác sĩ nói khi ăn phải nhai kỹ, như vậy có lợi cho tiêu hoá.'},
     {zh:'这首诗值得我们细细咀嚼。',py:'Zhè shǒu shī zhídé wǒmen xìxì jǔjué.',vn:'Bài thơ này đáng để chúng ta nghiền ngẫm kỹ.'}
   ],
   colloFull:[
     {zh:'咀嚼后',py:'jǔjué hòu',vn:'sau khi nhai'},
     {zh:'细细咀嚼',py:'xìxì jǔjué',vn:'nhai kỹ; nghiền ngẫm kỹ'},
     {zh:'充分咀嚼',py:'chōngfèn jǔjué',vn:'nhai kỹ'},
     {zh:'咀嚼食物',py:'jǔjué shíwù',vn:'nhai thức ăn'},
     {zh:'咀嚼含义',py:'jǔjué hányì',vn:'nghiền ngẫm hàm ý'}
   ],
   patterns:[
     {s:'（慢慢 / 充分）咀嚼 + 食物',m:'nhai (chậm / kỹ) thức ăn'},
     {s:'……值得 + 细细咀嚼',m:'… đáng để nghiền ngẫm kỹ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ăn quá nhanh, không nhai kỹ thì dễ bị đau dạ dày.',answer:'吃得太快，不充分咀嚼，就容易胃疼。',answerPy:'Chī de tài kuài, bù chōngfèn jǔjué, jiù róngyì wèi téng.',
      note:'V + 得 + 太 + Adj (bổ ngữ trạng thái, ôn HSK 3); 容易 + V.',pair:'V得……'},
     {promptLang:'vi',prompt:'Câu nói của thầy, tôi nghiền ngẫm rất lâu mới hiểu.',answer:'老师的那句话，我咀嚼了很久才明白。',answerPy:'Lǎoshī de nà jù huà, wǒ jǔjuéle hěn jiǔ cái míngbai.',
      note:'……才…… (muộn, khó khăn mới đạt, ôn HSK 4); tân ngữ đưa lên đầu câu.',pair:'……才……'}
   ]},

  {n:27,zh:'可口',py:'kěkǒu',pos:'Tính từ',vn:'ngon miệng, hợp khẩu vị',hv:'khả khẩu',em:'😋',lesson:1,
   explain:['(Đồ ăn, thức uống) ngon, hợp khẩu vị: 饭菜可口, 可口的点心, 香甜可口. Văn viết hơn 好吃.','Thường làm vị ngữ hoặc định ngữ; hay ghép thành cụm bốn chữ: 香甜可口, 清凉可口, 美味可口. Tên Coca-Cola tiếng Trung là 可口可乐.'],
   usage:'饭菜 / 点心 + 可口; 可口的 + đồ ăn; 香甜可口 / 清凉可口.',
   collo:['产品可口','饭菜可口','香甜可口','可口的点心'],
   ex_zh:'在产品可口的同时',ex_py:'zài chǎnpǐn kěkǒu de tóngshí',ex_vn:'Trong khi sản phẩm ngon miệng',
   exList:[
     {zh:'在产品可口的同时，精心设计包装和造型。',py:'Zài chǎnpǐn kěkǒu de tóngshí, jīngxīn shèjì bāozhuāng hé zàoxíng.',vn:'Vừa đảm bảo sản phẩm ngon miệng, vừa dày công thiết kế bao bì và kiểu dáng.'},
     {zh:'这家饭馆的菜又便宜又可口，每天都有很多人排队。',py:'Zhè jiā fànguǎn de cài yòu piányi yòu kěkǒu, měi tiān dōu yǒu hěn duō rén páiduì.',vn:'Món ăn ở quán này vừa rẻ vừa ngon, ngày nào cũng rất nhiều người xếp hàng.'},
     {zh:'夏天喝一碗清凉可口的绿豆汤，真舒服！',py:'Xiàtiān hē yì wǎn qīngliáng kěkǒu de lǜdòutāng, zhēn shūfu!',vn:'Mùa hè uống một bát chè đậu xanh mát lạnh ngon miệng, thật dễ chịu!'}
   ],
   colloFull:[
     {zh:'产品可口',py:'chǎnpǐn kěkǒu',vn:'sản phẩm ngon miệng'},
     {zh:'饭菜可口',py:'fàncài kěkǒu',vn:'cơm canh ngon miệng'},
     {zh:'香甜可口',py:'xiāngtián kěkǒu',vn:'thơm ngọt ngon miệng'},
     {zh:'可口的点心',py:'kěkǒu de diǎnxin',vn:'bánh ngọt ngon miệng'},
     {zh:'清凉可口',py:'qīngliáng kěkǒu',vn:'mát lạnh ngon miệng'}
   ],
   patterns:[
     {s:'N + 又 + Adj + 又可口',m:'N vừa … vừa ngon'},
     {s:'在……可口的同时，……',m:'vừa đảm bảo ngon miệng, vừa …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món ăn mẹ nấu tuy đơn giản nhưng rất hợp khẩu vị.',answer:'妈妈做的菜虽然简单，但是非常可口。',answerPy:'Māma zuò de cài suīrán jiǎndān, dànshì fēicháng kěkǒu.',
      note:'虽然……但是…… (ôn HSK 4).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Món bánh này không những ngon miệng mà giá cũng rất rẻ.',answer:'这种点心不但可口，而且价格也很便宜。',answerPy:'Zhè zhǒng diǎnxin búdàn kěkǒu, érqiě jiàgé yě hěn piányi.',
      note:'不但……而且…… (ôn HSK 3–4).',pair:'不但……而且……'}
   ]},

  {n:28,zh:'物美价廉',py:'wùměi-jiàlián',pos:'Thành ngữ',vn:'hàng tốt giá rẻ',hv:'vật mỹ giá liêm',em:'🏷️',lesson:1,
   explain:['Hàng hoá chất lượng tốt mà giá lại rẻ (物 = hàng, 美 = đẹp / tốt, 价 = giá, 廉 = rẻ). Thành ngữ bốn chữ, văn viết, dùng nhiều trong quảng cáo, thương mại.','Làm vị ngữ (商品物美价廉) hoặc định ngữ (物美价廉的商品). Không thêm 很 phía trước.'],
   usage:'商品 / 产品 + 物美价廉; 物美价廉的 + 商品 / 小店.',
   collo:['产品物美价廉','物美价廉的商品','物美价廉的小店','以物美价廉著称'],
   ex_zh:'江崎的产品物美价廉',ex_py:'Jiāngqí de chǎnpǐn wùměi-jiàlián',ex_vn:'Sản phẩm của Ezaki hàng tốt giá rẻ',
   exList:[
     {zh:'江崎的产品物美价廉，风味独特。',py:'Jiāngqí de chǎnpǐn wùměi-jiàlián, fēngwèi dútè.',vn:'Sản phẩm của Ezaki hàng tốt giá rẻ, hương vị độc đáo.'},
     {zh:'由于商品物美价廉，这家店吸引了很多顾客。',py:'Yóuyú shāngpǐn wùměi-jiàlián, zhè jiā diàn xīyǐnle hěn duō gùkè.',vn:'Vì hàng tốt giá rẻ, cửa hàng này đã thu hút rất nhiều khách.'},
     {zh:'学校附近有一家物美价廉的小饭馆，学生们都爱去。',py:'Xuéxiào fùjìn yǒu yì jiā wùměi-jiàlián de xiǎo fànguǎn, xuéshengmen dōu ài qù.',vn:'Gần trường có một quán ăn nhỏ ngon bổ rẻ, học sinh đều thích đến.'}
   ],
   colloFull:[
     {zh:'产品物美价廉',py:'chǎnpǐn wùměi-jiàlián',vn:'sản phẩm tốt mà rẻ'},
     {zh:'物美价廉的商品',py:'wùměi-jiàlián de shāngpǐn',vn:'hàng hoá tốt mà rẻ'},
     {zh:'物美价廉的小店',py:'wùměi-jiàlián de xiǎodiàn',vn:'cửa hàng nhỏ ngon bổ rẻ'},
     {zh:'以物美价廉著称',py:'yǐ wùměi-jiàlián zhùchēng',vn:'nổi tiếng nhờ hàng tốt giá rẻ'},
     {zh:'真是物美价廉',py:'zhēn shì wùměi-jiàlián',vn:'đúng là hàng tốt giá rẻ'}
   ],
   patterns:[
     {s:'N + 物美价廉',m:'N hàng tốt giá rẻ'},
     {s:'物美价廉的 + N',m:'N ngon bổ rẻ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần hàng tốt giá rẻ thì không lo không có khách.',answer:'只要物美价廉，就不愁没有顾客。',answerPy:'Zhǐyào wùměi-jiàlián, jiù bù chóu méiyǒu gùkè.',
      note:'不愁 = không lo (khẩu ngữ); 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chiếc xe đạp này mới hai trăm tệ, đúng là hàng tốt giá rẻ.',answer:'这辆自行车才两百块，真是物美价廉。',answerPy:'Zhè liàng zìxíngchē cái liǎngbǎi kuài, zhēn shì wùměi-jiàlián.',
      note:'才 + số lượng = chỉ mới (ít, ôn HSK 4).',pair:'才 + số lượng'}
   ]},

  {n:29,zh:'风味',py:'fēngwèi',pos:'Danh từ',vn:'mùi vị, hương vị (đặc trưng)',hv:'phong vị',em:'🍜',lesson:1,
   explain:['Hương vị đặc sắc riêng (của món ăn, địa phương): 风味独特, 地方风味, 风味小吃 (món ăn vặt đặc sản).','Nghĩa rộng: nét đặc sắc riêng của sự vật, văn chương: 这首诗很有民歌风味. Khác 味道 (mùi vị nói chung): 风味 nhấn "đặc trưng riêng".'],
   usage:'风味 + 独特; 地方 / 家乡 + 风味; 风味 + 小吃 / 菜; 很有……风味.',
   collo:['风味独特','风味小吃','地方风味','家乡风味'],
   ex_zh:'风味独特',ex_py:'fēngwèi dútè',ex_vn:'Hương vị độc đáo',
   exList:[
     {zh:'江崎的产品物美价廉，风味独特。',py:'Jiāngqí de chǎnpǐn wùměi-jiàlián, fēngwèi dútè.',vn:'Sản phẩm của Ezaki hàng tốt giá rẻ, hương vị độc đáo.'},
     {zh:'来河内一定要尝尝这里的风味小吃。',py:'Lái Hénèi yídìng yào chángchang zhèlǐ de fēngwèi xiǎochī.',vn:'Đến Hà Nội nhất định phải nếm thử các món ăn vặt đặc sản ở đây.'},
     {zh:'这家饭馆的菜很有家乡风味，让我想起了妈妈做的饭。',py:'Zhè jiā fànguǎn de cài hěn yǒu jiāxiāng fēngwèi, ràng wǒ xiǎngqǐle māma zuò de fàn.',vn:'Món ăn ở quán này rất có hương vị quê nhà, khiến tôi nhớ đến cơm mẹ nấu.'}
   ],
   colloFull:[
     {zh:'风味独特',py:'fēngwèi dútè',vn:'hương vị độc đáo'},
     {zh:'风味小吃',py:'fēngwèi xiǎochī',vn:'món ăn vặt đặc sản'},
     {zh:'地方风味',py:'dìfāng fēngwèi',vn:'hương vị địa phương'},
     {zh:'家乡风味',py:'jiāxiāng fēngwèi',vn:'hương vị quê nhà'},
     {zh:'很有特色的风味',py:'hěn yǒu tèsè de fēngwèi',vn:'hương vị rất đặc sắc'}
   ],
   patterns:[
     {s:'N + 风味独特',m:'N có hương vị độc đáo'},
     {s:'很有 + ……风味',m:'rất đậm hương vị …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món phở này hương vị độc đáo, du khách nước ngoài ai cũng thích.',answer:'这种河粉风味独特，外国游客都很喜欢。',answerPy:'Zhè zhǒng héfěn fēngwèi dútè, wàiguó yóukè dōu hěn xǐhuan.',
      note:'都 + V (tổng quát, ôn HSK 2).',pair:'都……'},
     {promptLang:'vi',prompt:'Mỗi khi xa nhà, tôi lại đặc biệt nhớ hương vị quê hương.',answer:'每当离开家的时候，我就特别想念家乡的风味。',answerPy:'Měi dāng líkāi jiā de shíhou, wǒ jiù tèbié xiǎngniàn jiāxiāng de fēngwèi.',
      note:'每当……的时候，就…… (mỗi khi, ôn HSK 5).',pair:'每当……就……'}
   ]},

  {n:30,zh:'吹捧',py:'chuīpěng',pos:'Động từ',vn:'tâng bốc, thổi phồng, bợ đỡ',hv:'xuy phủng',em:'🎺',lesson:1,
   explain:['Khen ngợi quá mức, thổi phồng (người hoặc sản phẩm) — mang nghĩa CHÊ: 广告吹捧, 互相吹捧, 吹捧上司.','Ghép từ 吹 (thổi — 吹牛 = khoác lác) + 捧 (nâng — bài 26: 捧 hai tay nâng). Khác 称赞 / 表扬 (khen đúng mức, tích cực).'],
   usage:'靠广告吹捧; 互相吹捧; 吹捧 + 某人 / 产品; 被吹捧得……',
   collo:['广告吹捧','互相吹捧','吹捧上司','被吹捧'],
   ex_zh:'不靠广告吹捧',ex_py:'bú kào guǎnggào chuīpěng',ex_vn:'Không dựa vào quảng cáo thổi phồng',
   exList:[
     {zh:'不靠广告吹捧，品尝后，消费者购买踊跃。',py:'Bú kào guǎnggào chuīpěng, pǐncháng hòu, xiāofèizhě gòumǎi yǒngyuè.',vn:'Không nhờ quảng cáo thổi phồng, người tiêu dùng nếm thử xong là đua nhau mua.'},
     {zh:'他们俩总是互相吹捧，其实谁也没什么真本事。',py:'Tāmen liǎ zǒngshì hùxiāng chuīpěng, qíshí shéi yě méi shénme zhēn běnshi.',vn:'Hai người họ lúc nào cũng tâng bốc lẫn nhau, thật ra chẳng ai có bản lĩnh thật sự.'},
     {zh:'这款产品被网上吹捧得太厉害了，我反而不敢买了。',py:'Zhè kuǎn chǎnpǐn bèi wǎngshàng chuīpěng de tài lìhai le, wǒ fǎn\'ér bù gǎn mǎi le.',vn:'Sản phẩm này bị trên mạng thổi phồng quá mức, tôi lại chẳng dám mua nữa.'}
   ],
   colloFull:[
     {zh:'广告吹捧',py:'guǎnggào chuīpěng',vn:'quảng cáo thổi phồng'},
     {zh:'互相吹捧',py:'hùxiāng chuīpěng',vn:'tâng bốc lẫn nhau'},
     {zh:'吹捧上司',py:'chuīpěng shàngsi',vn:'bợ đỡ cấp trên'},
     {zh:'被吹捧',py:'bèi chuīpěng',vn:'bị thổi phồng'},
     {zh:'不靠吹捧',py:'bú kào chuīpěng',vn:'không dựa vào tâng bốc'}
   ],
   patterns:[
     {s:'不靠 + 吹捧，靠……',m:'không dựa vào tâng bốc mà dựa vào …'},
     {s:'被 + ……吹捧得 + Adj',m:'bị … thổi phồng đến mức …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sản phẩm tốt không cần thổi phồng, người tiêu dùng tự khắc sẽ biết.',answer:'好产品不需要吹捧，消费者自然会知道。',answerPy:'Hǎo chǎnpǐn bù xūyào chuīpěng, xiāofèizhě zìrán huì zhīdào.',
      note:'自然 = tự khắc, đương nhiên (ôn HSK 4).',pair:'自然……'},
     {promptLang:'vi',prompt:'Anh ta chỉ biết bợ đỡ cấp trên chứ không chịu làm việc thực tế.',answer:'他只会吹捧上司，不肯做实事。',answerPy:'Tā zhǐ huì chuīpěng shàngsi, bù kěn zuò shíshì.',
      note:'只会…… (chỉ biết); 不肯 = không chịu (ôn HSK 5).',pair:'不肯……'}
   ]},

  {n:31,zh:'品尝',py:'pǐncháng',pos:'Động từ',vn:'nếm, thử, thưởng thức',hv:'phẩm thường',em:'🍷',lesson:1,
   explain:['Nếm thử cẩn thận để phân biệt hương vị: 品尝美食, 品尝新茶, 请……品尝. Văn viết, trang trọng hơn 尝 / 尝尝.','Nghĩa bóng: nếm trải (cảm giác): 品尝成功的喜悦 (nếm trải niềm vui thành công), 品尝失败的滋味.'],
   usage:'品尝 + 美食 / 小吃 / 新茶; 请 + 某人 + 品尝; 品尝 + 喜悦 / 滋味 (bóng).',
   collo:['品尝美食','免费品尝','品尝后','品尝成功的喜悦'],
   ex_zh:'品尝后，消费者购买踊跃',ex_py:'pǐncháng hòu, xiāofèizhě gòumǎi yǒngyuè',ex_vn:'Nếm thử xong, người tiêu dùng đua nhau mua',
   exList:[
     {zh:'不靠广告吹捧，品尝后，消费者购买踊跃。',py:'Bú kào guǎnggào chuīpěng, pǐncháng hòu, xiāofèizhě gòumǎi yǒngyuè.',vn:'Không nhờ quảng cáo thổi phồng, nếm thử xong là người tiêu dùng đua nhau mua.'},
     {zh:'超市门口正在举办新产品免费品尝活动。',py:'Chāoshì ménkǒu zhèngzài jǔbàn xīn chǎnpǐn miǎnfèi pǐncháng huódòng.',vn:'Trước cửa siêu thị đang tổ chức hoạt động nếm thử miễn phí sản phẩm mới.'},
     {zh:'经过三年的努力，他终于品尝到了成功的喜悦。',py:'Jīngguò sān nián de nǔlì, tā zhōngyú pǐncháng dàole chénggōng de xǐyuè.',vn:'Trải qua ba năm nỗ lực, cuối cùng anh ấy đã được nếm trải niềm vui thành công.'}
   ],
   colloFull:[
     {zh:'品尝美食',py:'pǐncháng měishí',vn:'thưởng thức món ngon'},
     {zh:'免费品尝',py:'miǎnfèi pǐncháng',vn:'nếm thử miễn phí'},
     {zh:'品尝后',py:'pǐncháng hòu',vn:'sau khi nếm thử'},
     {zh:'品尝成功的喜悦',py:'pǐncháng chénggōng de xǐyuè',vn:'nếm trải niềm vui thành công'},
     {zh:'请大家品尝',py:'qǐng dàjiā pǐncháng',vn:'mời mọi người thưởng thức'}
   ],
   patterns:[
     {s:'请 + 某人 + 品尝 + N',m:'Mời ai thưởng thức N'},
     {s:'品尝到 + ……的喜悦 / 滋味',m:'nếm trải được niềm vui / mùi vị của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là trà mới hái năm nay, mời thầy thưởng thức.',answer:'这是今年刚采的新茶，请老师品尝。',answerPy:'Zhè shì jīnnián gāng cǎi de xīnchá, qǐng lǎoshī pǐncháng.',
      note:'刚 + V (vừa mới, ôn HSK 3); 请 + người + V (mời lịch sự).',pair:'请……V'},
     {promptLang:'vi',prompt:'Chỉ có trải qua thất bại thì mới nếm trải được niềm vui thành công thật sự.',answer:'只有经历过失败，才能品尝到成功真正的喜悦。',answerPy:'Zhǐyǒu jīnglìguo shībài, cái néng pǐncháng dào chénggōng zhēnzhèng de xǐyuè.',
      note:'只有……才…… (điều kiện duy nhất, ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:32,zh:'踊跃',py:'yǒngyuè',pos:'Tính từ',vn:'nô nức, tấp nập, hăng hái (tham gia)',hv:'dũng dược',em:'🙋',lesson:1,
   explain:['Hăng hái, tích cực tranh nhau (tham gia, phát biểu, mua…): 购买踊跃, 踊跃参加, 踊跃发言, 踊跃报名.','Làm vị ngữ (购买踊跃) hoặc trạng ngữ đứng trước động từ (踊跃参加). Chủ thể thường là nhiều người, không dùng cho một cá nhân (không nói *他很踊跃).'],
   usage:'踊跃 + 参加 / 发言 / 报名 / 捐款; (购买 / 报名) + 踊跃.',
   collo:['购买踊跃','踊跃参加','踊跃发言','踊跃报名'],
   ex_zh:'消费者购买踊跃',ex_py:'xiāofèizhě gòumǎi yǒngyuè',ex_vn:'Người tiêu dùng đua nhau mua',
   exList:[
     {zh:'品尝后，消费者购买踊跃，市场需求呈井喷式爆发。',py:'Pǐncháng hòu, xiāofèizhě gòumǎi yǒngyuè, shìchǎng xūqiú chéng jǐngpēnshì bàofā.',vn:'Nếm thử xong, người tiêu dùng đua nhau mua, nhu cầu thị trường bùng nổ như giếng dầu phun.'},
     {zh:'老师提出问题后，同学们踊跃发言。',py:'Lǎoshī tíchū wèntí hòu, tóngxuémen yǒngyuè fāyán.',vn:'Thầy vừa nêu câu hỏi, các bạn học sinh đã hăng hái phát biểu.'},
     {zh:'希望大家踊跃报名参加这次志愿者活动。',py:'Xīwàng dàjiā yǒngyuè bàomíng cānjiā zhè cì zhìyuànzhě huódòng.',vn:'Mong mọi người hăng hái đăng ký tham gia hoạt động tình nguyện lần này.'}
   ],
   colloFull:[
     {zh:'购买踊跃',py:'gòumǎi yǒngyuè',vn:'đua nhau mua'},
     {zh:'踊跃参加',py:'yǒngyuè cānjiā',vn:'hăng hái tham gia'},
     {zh:'踊跃发言',py:'yǒngyuè fāyán',vn:'hăng hái phát biểu'},
     {zh:'踊跃报名',py:'yǒngyuè bàomíng',vn:'nô nức đăng ký'},
     {zh:'踊跃捐款',py:'yǒngyuè juānkuǎn',vn:'hăng hái quyên góp'}
   ],
   patterns:[
     {s:'（大家）踊跃 + V',m:'(mọi người) hăng hái làm …'},
     {s:'V + 踊跃',m:'(việc) … diễn ra sôi nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau trận lũ, người dân cả nước hăng hái quyên góp giúp vùng bị thiên tai.',answer:'洪水过后，全国人民踊跃捐款，帮助灾区。',answerPy:'Hóngshuǐ guòhòu, quánguó rénmín yǒngyuè juānkuǎn, bāngzhù zāiqū.',
      note:'……过后 = sau khi …; 洪水 ôn bài 33.',pair:'……过后'},
     {promptLang:'vi',prompt:'Cuộc thi lần này học sinh đăng ký rất sôi nổi, vượt xa dự tính.',answer:'这次比赛学生报名非常踊跃，远远超过了预料。',answerPy:'Zhè cì bǐsài xuésheng bàomíng fēicháng yǒngyuè, yuǎnyuǎn chāoguòle yùliào.',
      note:'远远 + V (bài 23); 预料 (bài 23).',pair:'远远……'}
   ]},

  {n:33,zh:'井',py:'jǐng',pos:'Danh từ',vn:'giếng (nước, dầu…)',hv:'tỉnh',em:'🕳️',lesson:1,
   explain:['Cái hố đào sâu xuống đất để lấy nước, dầu, khí…: 水井, 油井, 打井 (đào giếng). Lượng từ: 口 (一口井).','Trong bài: 井喷 = giếng dầu phun trào → 井喷式爆发 / 增长 (bùng nổ / tăng vọt như giếng phun). Thành ngữ: 井底之蛙 (ếch ngồi đáy giếng).'],
   usage:'一口井; 打 / 挖 + 井; 井喷式 + 爆发 / 增长; 井底之蛙.',
   collo:['井喷式爆发','一口井','打井','井底之蛙'],
   ex_zh:'市场需求呈井喷式爆发',ex_py:'shìchǎng xūqiú chéng jǐngpēnshì bàofā',ex_vn:'Nhu cầu thị trường bùng nổ như giếng phun',
   exList:[
     {zh:'市场需求呈井喷式爆发，财务收入也呈井喷式增长。',py:'Shìchǎng xūqiú chéng jǐngpēnshì bàofā, cáiwù shōurù yě chéng jǐngpēnshì zēngzhǎng.',vn:'Nhu cầu thị trường bùng nổ như giếng phun, thu nhập tài chính cũng tăng vọt như giếng phun.'},
     {zh:'以前村里人吃水都靠村口那口老井。',py:'Yǐqián cūn li rén chī shuǐ dōu kào cūnkǒu nà kǒu lǎo jǐng.',vn:'Trước đây người trong làng ăn uống đều nhờ vào cái giếng cổ ở đầu làng.'},
     {zh:'只有多读书、多出去看看，才不会成为井底之蛙。',py:'Zhǐyǒu duō dú shū, duō chūqu kànkan, cái bú huì chéngwéi jǐngdǐzhīwā.',vn:'Chỉ có đọc nhiều sách, đi ra ngoài nhiều thì mới không thành ếch ngồi đáy giếng.'}
   ],
   colloFull:[
     {zh:'井喷式爆发',py:'jǐngpēnshì bàofā',vn:'bùng nổ như giếng phun'},
     {zh:'一口井',py:'yì kǒu jǐng',vn:'một cái giếng'},
     {zh:'打井',py:'dǎ jǐng',vn:'đào giếng'},
     {zh:'井底之蛙',py:'jǐngdǐzhīwā',vn:'ếch ngồi đáy giếng'},
     {zh:'油井',py:'yóujǐng',vn:'giếng dầu'}
   ],
   patterns:[
     {s:'呈 + 井喷式 + 爆发 / 增长',m:'bùng nổ / tăng vọt (như giếng phun)'},
     {s:'一口 + （老）井',m:'một cái giếng (cũ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi video được đăng lên mạng, lượng đặt hàng tăng vọt.',answer:'视频发到网上以后，订单呈井喷式增长。',answerPy:'Shìpín fā dào wǎngshang yǐhòu, dìngdān chéng jǐngpēnshì zēngzhǎng.',
      note:'呈 + …… (thể hiện ra, văn viết); 视频 ôn bài 29.',pair:'呈……'},
     {promptLang:'vi',prompt:'Đừng làm ếch ngồi đáy giếng, thế giới bên ngoài lớn lắm.',answer:'别做井底之蛙，外面的世界大着呢。',answerPy:'Bié zuò jǐngdǐzhīwā, wàimian de shìjiè dàzhe ne.',
      note:'Adj + 着呢 = … lắm (khẩu ngữ, ôn HSK 5).',pair:'……着呢'}
   ]},

  {n:34,zh:'财务',py:'cáiwù',pos:'Danh từ',vn:'tài vụ, tài chính (của đơn vị)',hv:'tài vụ',em:'🧾',lesson:1,
   explain:['Công việc quản lý tiền bạc, thu chi, sổ sách của một cơ quan, doanh nghiệp: 财务收入, 财务报告, 财务部, 财务状况.','Thường làm định ngữ đứng trước danh từ: 财务 + 人员 / 制度 / 管理 / 问题. Khác 财政 (tài chính quốc gia, nhà nước).'],
   usage:'财务 + 收入 / 状况 / 报告 / 部 / 人员; 管理财务.',
   collo:['财务收入','财务报告','财务部','财务状况'],
   ex_zh:'财务收入也呈井喷式增长',ex_py:'cáiwù shōurù yě chéng jǐngpēnshì zēngzhǎng',ex_vn:'Thu nhập tài chính cũng tăng vọt',
   exList:[
     {zh:'市场需求呈井喷式爆发，财务收入也呈井喷式增长。',py:'Shìchǎng xūqiú chéng jǐngpēnshì bàofā, cáiwù shōurù yě chéng jǐngpēnshì zēngzhǎng.',vn:'Nhu cầu thị trường bùng nổ, thu nhập tài chính cũng tăng vọt.'},
     {zh:'上个季度，公司财务收入出现大幅度下滑。',py:'Shàng ge jìdù, gōngsī cáiwù shōurù chūxiàn dà fúdù xiàhuá.',vn:'Quý trước, thu nhập tài chính của công ty sụt giảm mạnh.'},
     {zh:'报销的发票要交到财务部。',py:'Bàoxiāo de fāpiào yào jiāo dào cáiwùbù.',vn:'Hoá đơn thanh toán phải nộp lên phòng tài vụ.'}
   ],
   colloFull:[
     {zh:'财务收入',py:'cáiwù shōurù',vn:'thu nhập tài chính'},
     {zh:'财务报告',py:'cáiwù bàogào',vn:'báo cáo tài chính'},
     {zh:'财务部',py:'cáiwùbù',vn:'phòng tài vụ'},
     {zh:'财务状况',py:'cáiwù zhuàngkuàng',vn:'tình hình tài chính'},
     {zh:'财务人员',py:'cáiwù rényuán',vn:'nhân viên kế toán tài vụ'}
   ],
   patterns:[
     {s:'公司 / 单位 + 的财务 + 状况 / 收入',m:'tình hình / thu nhập tài chính của …'},
     {s:'交到 + 财务部',m:'nộp lên phòng tài vụ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tình hình tài chính công ty năm nay tốt hơn năm ngoái nhiều.',answer:'公司今年的财务状况比去年好多了。',answerPy:'Gōngsī jīnnián de cáiwù zhuàngkuàng bǐ qùnián hǎo duō le.',
      note:'A 比 B + Adj + 多了 (ôn HSK 3–4).',pair:'A比B……多了'},
     {promptLang:'vi',prompt:'Chị tôi làm việc ở phòng tài vụ, ngày nào cũng tiếp xúc với số liệu.',answer:'我姐姐在财务部工作，每天都跟数字打交道。',answerPy:'Wǒ jiějie zài cáiwùbù gōngzuò, měi tiān dōu gēn shùzì dǎ jiāodao.',
      note:'跟……打交道 = tiếp xúc, làm việc với (ôn HSK 5).',pair:'跟……打交道'}
   ]},

  {n:35,zh:'局部',py:'júbù',pos:'Danh từ',vn:'bộ phận, một phần, cục bộ',hv:'cục bộ',em:'🧩',lesson:1,
   explain:['Một phần của tổng thể (đối lập với 全局 / 整体 = toàn bộ): 局部改进, 局部地区, 局部麻醉 (gây tê cục bộ).','Hay làm định ngữ / trạng ngữ: 局部 + N; 做些局部改进 (cải tiến một phần). Thành ngữ tương phản: 只见局部，不见整体.'],
   usage:'局部 + 改进 / 地区 / 调整; 对……做局部改进; 局部和整体.',
   collo:['局部改进','局部地区','局部调整','局部麻醉'],
   ex_zh:'对产品的不足做些局部改进',ex_py:'duì chǎnpǐn de bùzú zuò xiē júbù gǎijìn',ex_vn:'Cải tiến từng phần đối với chỗ chưa tốt của sản phẩm',
   exList:[
     {zh:'对产品的不足做些局部改进，就有可能得到消费者的认可。',py:'Duì chǎnpǐn de bùzú zuò xiē júbù gǎijìn, jiù yǒu kěnéng dédào xiāofèizhě de rènkě.',vn:'Cải tiến từng phần những chỗ chưa tốt của sản phẩm thì có thể được người tiêu dùng công nhận.'},
     {zh:'明天北方局部地区有大雨。',py:'Míngtiān běifāng júbù dìqū yǒu dàyǔ.',vn:'Ngày mai một số khu vực phía bắc có mưa to.'},
     {zh:'看问题不能只看局部，还要看整体。',py:'Kàn wèntí bù néng zhǐ kàn júbù, hái yào kàn zhěngtǐ.',vn:'Nhìn vấn đề không thể chỉ nhìn một phần, còn phải nhìn tổng thể.'}
   ],
   colloFull:[
     {zh:'局部改进',py:'júbù gǎijìn',vn:'cải tiến từng phần'},
     {zh:'局部地区',py:'júbù dìqū',vn:'một số khu vực'},
     {zh:'局部调整',py:'júbù tiáozhěng',vn:'điều chỉnh cục bộ'},
     {zh:'局部麻醉',py:'júbù mázuì',vn:'gây tê cục bộ'},
     {zh:'局部和整体',py:'júbù hé zhěngtǐ',vn:'bộ phận và tổng thể'}
   ],
   patterns:[
     {s:'对 + N + 做（些）局部改进 / 调整',m:'cải tiến / điều chỉnh một phần N'},
     {s:'不能只看局部，还要看整体',m:'không chỉ nhìn bộ phận mà phải nhìn tổng thể'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch này về cơ bản là được, chỉ cần điều chỉnh một phần.',answer:'这个计划基本上可以，只需要做些局部调整。',answerPy:'Zhège jìhuà jīběn shang kěyǐ, zhǐ xūyào zuò xiē júbù tiáozhěng.',
      note:'基本上 = về cơ bản (ôn HSK 4); 只需要 + V.',pair:'基本上……'},
     {promptLang:'vi',prompt:'Ca phẫu thuật nhỏ này chỉ cần gây tê cục bộ.',answer:'这个小手术只需要局部麻醉。',answerPy:'Zhège xiǎo shǒushù zhǐ xūyào júbù mázuì.',
      note:'只 + V (chỉ cần); 麻醉 là từ trong phần 扩展 của bài.',pair:'只……'}
   ]},

  {n:36,zh:'关照',py:'guānzhào',pos:'Động từ',vn:'quan tâm, chăm sóc, chiếu cố',hv:'quan chiếu',em:'🤝',lesson:1,
   explain:['Quan tâm, giúp đỡ, chiếu cố: 多多关照 (xin chiếu cố nhiều — câu xã giao khi mới gặp, mới vào làm), 关照老人, 谢谢您的关照.','Trong kinh doanh: khách hàng 关照 = ủng hộ, mua hàng của mình: 消费者会慷慨地关照你. Nghĩa khác: dặn dò, nhắn (他关照我早点儿回来).'],
   usage:'请（您）多多关照; 关照 + 某人; 谢谢……的关照; 慷慨地关照.',
   collo:['多多关照','慷慨地关照','谢谢关照','关照老人'],
   ex_zh:'消费者愈是会慷慨地关照你',ex_py:'xiāofèizhě yù shì huì kāngkǎi de guānzhào nǐ',ex_vn:'Người tiêu dùng càng hào phóng ủng hộ bạn',
   exList:[
     {zh:'你愈是为消费者考虑得周全，消费者愈是会慷慨地关照你。',py:'Nǐ yù shì wèi xiāofèizhě kǎolǜ de zhōuquán, xiāofèizhě yù shì huì kāngkǎi de guānzhào nǐ.',vn:'Bạn càng suy nghĩ chu đáo cho người tiêu dùng, người tiêu dùng càng hào phóng ủng hộ bạn.'},
     {zh:'我是新来的，以后请大家多多关照。',py:'Wǒ shì xīn lái de, yǐhòu qǐng dàjiā duōduō guānzhào.',vn:'Tôi là người mới đến, sau này mong mọi người chiếu cố nhiều.'},
     {zh:'邻居们平时都很关照这位独居的老人。',py:'Línjūmen píngshí dōu hěn guānzhào zhè wèi dújū de lǎorén.',vn:'Hàng xóm bình thường đều rất quan tâm đến cụ già sống một mình này.'}
   ],
   colloFull:[
     {zh:'多多关照',py:'duōduō guānzhào',vn:'chiếu cố nhiều'},
     {zh:'慷慨地关照',py:'kāngkǎi de guānzhào',vn:'hào phóng ủng hộ'},
     {zh:'谢谢关照',py:'xièxie guānzhào',vn:'cảm ơn đã quan tâm'},
     {zh:'关照老人',py:'guānzhào lǎorén',vn:'chăm sóc người già'},
     {zh:'特别关照',py:'tèbié guānzhào',vn:'đặc biệt quan tâm'}
   ],
   patterns:[
     {s:'请 + 大家 / 您 + 多多关照',m:'Mong mọi người / anh chiếu cố nhiều'},
     {s:'谢谢 + 某人 + 的关照',m:'Cảm ơn sự quan tâm của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời gian qua cảm ơn anh đã quan tâm, giúp đỡ tôi rất nhiều.',answer:'这段时间谢谢您对我的关照和帮助。',answerPy:'Zhè duàn shíjiān xièxie nín duì wǒ de guānzhào hé bāngzhù.',
      note:'对 + người + 的 + N (định ngữ, ôn HSK 4).',pair:'对……的……'},
     {promptLang:'vi',prompt:'Con trai tôi lần đầu xa nhà, mong thầy quan tâm cháu nhiều hơn.',answer:'我儿子第一次离开家，希望老师多关照关照他。',answerPy:'Wǒ érzi dì-yī cì líkāi jiā, xīwàng lǎoshī duō guānzhào guānzhào tā.',
      note:'Động từ song âm lặp ABAB (关照关照) cho nhẹ nhàng (ôn HSK 4).',pair:'ABAB'}
   ]},

  {n:37,zh:'观光',py:'guānguāng',pos:'Động từ',vn:'tham quan, du lịch',hv:'quan quang',em:'🗺️',lesson:1,
   explain:['Đi tham quan phong cảnh, di tích, cảnh vật ở nơi khác: 观光旅游, 观光区, 观光客 (du khách), 观光车.','Văn viết hơn 参观 / 旅游; hay làm định ngữ: 观光 + 区 / 客 / 团 / 电梯 (thang máy ngắm cảnh).'],
   usage:'观光 + 区 / 客 / 团 / 车; 来……观光; 游览观光.',
   collo:['观光区','观光客','观光旅游','游览观光'],
   ex_zh:'在台湾某游览观光区',ex_py:'zài Táiwān mǒu yóulǎn guānguāngqū',ex_vn:'Tại một khu tham quan du lịch ở Đài Loan',
   exList:[
     {zh:'在台湾某游览观光区，一台流动彩印车吸引了大家的目光。',py:'Zài Táiwān mǒu yóulǎn guānguāngqū, yì tái liúdòng cǎiyìnchē xīyǐnle dàjiā de mùguāng.',vn:'Tại một khu tham quan du lịch ở Đài Loan, một chiếc xe in ảnh màu lưu động đã thu hút ánh nhìn của mọi người.'},
     {zh:'兄弟俩发现，对照观光客的需求，传统彩色冲印做法太过陈旧。',py:'Xiōngdì liǎ fāxiàn, duìzhào guānguāngkè de xūqiú, chuántǒng cǎisè chōngyìn zuòfǎ tài guò chénjiù.',vn:'Hai anh em phát hiện, so với nhu cầu của du khách, cách in tráng ảnh màu truyền thống quá lỗi thời.'},
     {zh:'每年都有很多外国人来下龙湾观光。',py:'Měi nián dōu yǒu hěn duō wàiguórén lái Xiàlóng Wān guānguāng.',vn:'Năm nào cũng có rất nhiều người nước ngoài đến vịnh Hạ Long tham quan.'}
   ],
   colloFull:[
     {zh:'观光区',py:'guānguāngqū',vn:'khu tham quan'},
     {zh:'观光客',py:'guānguāngkè',vn:'du khách'},
     {zh:'观光旅游',py:'guānguāng lǚyóu',vn:'du lịch tham quan'},
     {zh:'游览观光',py:'yóulǎn guānguāng',vn:'du ngoạn tham quan'},
     {zh:'观光电梯',py:'guānguāng diàntī',vn:'thang máy ngắm cảnh'}
   ],
   patterns:[
     {s:'来 + nơi chốn + 观光',m:'đến … tham quan'},
     {s:'观光 + 区 / 客 / 团',m:'khu / khách / đoàn tham quan'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để thu hút du khách, thành phố đã mở thêm mấy tuyến xe buýt tham quan.',answer:'为了吸引观光客，城市又开通了几条观光巴士线路。',answerPy:'Wèile xīyǐn guānguāngkè, chéngshì yòu kāitōngle jǐ tiáo guānguāng bāshì xiànlù.',
      note:'为了…… (mục đích, ôn HSK 3); 又 + V + 了 (lại thêm).',pair:'为了……'},
     {promptLang:'vi',prompt:'Đoàn tham quan này đến từ Hàn Quốc, họ sẽ ở Huế ba ngày.',answer:'这个观光团来自韩国，他们要在顺化待三天。',answerPy:'Zhège guānguāngtuán láizì Hánguó, tāmen yào zài Shùnhuà dāi sān tiān.',
      note:'来自 = đến từ (văn viết, ôn HSK 4); 待 dāi = ở lại.',pair:'来自……'}
   ]},

  {n:38,zh:'就近',py:'jiùjìn',pos:'Phó từ',vn:'ở gần đó, lân cận, không phải đi xa',hv:'tựu cận',em:'📍',lesson:1,
   explain:['Phó từ: ngay ở gần, không cần đi xa; đứng TRƯỚC cụm động từ, tả hành động: 就近冲印照片, 就近买菜, 就近入学 (học trường gần nhà).','Không làm chủ ngữ, tân ngữ của giới từ, không bổ nghĩa cho danh từ (không nói *在就近, *就近的公园) — những chỗ đó dùng 附近 (xem 词语辨析).'],
   usage:'就近 + V (买 / 看病 / 入学 / 冲印); 就近 + 找 / 选 + 一个…….',
   collo:['就近冲印照片','就近买菜','就近入学','就近看病'],
   ex_zh:'游客可以在这儿就近冲印照片',ex_py:'yóukè kěyǐ zài zhèr jiùjìn chōngyìn zhàopiàn',ex_vn:'Du khách có thể in tráng ảnh ngay tại chỗ',
   exList:[
     {zh:'游客可以在这儿就近冲印照片，作为独一无二的旅游留念。',py:'Yóukè kěyǐ zài zhèr jiùjìn chōngyìn zhàopiàn, zuòwéi dúyī-wú\'èr de lǚyóu liúniàn.',vn:'Du khách có thể in tráng ảnh ngay tại chỗ, làm kỷ niệm du lịch độc nhất vô nhị.'},
     {zh:'天气寒冷，大超市离得又远，她就近在路边买了点儿菜回来。',py:'Tiānqì hánlěng, dà chāoshì lí de yòu yuǎn, tā jiùjìn zài lùbiān mǎile diǎnr cài huílai.',vn:'Trời lạnh, siêu thị lớn lại xa, cô ấy mua tạm ít rau ở ven đường gần đó rồi về.'},
     {zh:'为了方便接送，他们就近给孩子找了一所私立学校。',py:'Wèile fāngbiàn jiēsòng, tāmen jiùjìn gěi háizi zhǎole yì suǒ sīlì xuéxiào.',vn:'Để tiện đưa đón, họ tìm cho con một trường tư thục ở gần.'}
   ],
   colloFull:[
     {zh:'就近冲印照片',py:'jiùjìn chōngyìn zhàopiàn',vn:'in tráng ảnh ngay tại chỗ'},
     {zh:'就近买菜',py:'jiùjìn mǎi cài',vn:'mua rau ở gần'},
     {zh:'就近入学',py:'jiùjìn rùxué',vn:'học trường gần nhà'},
     {zh:'就近看病',py:'jiùjìn kànbìng',vn:'khám bệnh ở gần'},
     {zh:'就近找一家',py:'jiùjìn zhǎo yì jiā',vn:'tìm một chỗ gần đó'}
   ],
   patterns:[
     {s:'就近 + V',m:'làm … ngay ở gần (không đi xa)'},
     {s:'就近 + 在 / 给…… + V',m:'tiện ở gần mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xe sắp hết xăng rồi, mình tìm một trạm xăng gần đây đổ xăng nhé.',answer:'车快没油了，咱们就近找个加油站加油吧。',answerPy:'Chē kuài méi yóu le, zánmen jiùjìn zhǎo ge jiāyóuzhàn jiā yóu ba.',
      note:'快……了 (sắp, ôn HSK 3); 吧 đề nghị.',pair:'快……了'},
     {promptLang:'vi',prompt:'Người già đi lại bất tiện, tốt nhất nên khám bệnh ở bệnh viện gần nhà.',answer:'老人行动不方便，最好就近看病。',answerPy:'Lǎorén xíngdòng bù fāngbiàn, zuìhǎo jiùjìn kànbìng.',
      note:'最好 + V (ôn HSK 4); 就近 đứng trước động từ.',pair:'最好……'}
   ]},

  {n:39,zh:'肖像',py:'xiàoxiàng',pos:'Danh từ',vn:'chân dung, ảnh (người)',hv:'tiêu tượng',em:'🖼️',lesson:1,
   explain:['Tranh vẽ hoặc ảnh chụp hình người (thường là nửa người trở lên): 肖像画, 人物肖像, 画肖像. Văn viết. Chú ý: 肖 đọc xiào (thanh 4).','Thuật ngữ pháp lý: 肖像权 (quyền hình ảnh cá nhân) — dùng ảnh người khác không xin phép là xâm phạm 肖像权.'],
   usage:'画 / 印 / 拍 + 肖像; 肖像画; 人物肖像; 肖像权.',
   collo:['印肖像','肖像画','人物肖像','肖像权'],
   ex_zh:'把喜欢的图案、肖像印在纪念品上',ex_py:'bǎ xǐhuan de tú\'àn, xiàoxiàng yìn zài jìniànpǐn shang',ex_vn:'In hoa văn, chân dung yêu thích lên đồ lưu niệm',
   exList:[
     {zh:'游客可以把喜欢的图案、肖像印在纪念品和纺织品上。',py:'Yóukè kěyǐ bǎ xǐhuan de tú\'àn, xiàoxiàng yìn zài jìniànpǐn hé fǎngzhīpǐn shang.',vn:'Du khách có thể in hoa văn, chân dung mình thích lên đồ lưu niệm và hàng dệt.'},
     {zh:'客厅的墙上挂着一幅爷爷的肖像画。',py:'Kètīng de qiáng shang guàzhe yì fú yéye de xiàoxiànghuà.',vn:'Trên tường phòng khách treo một bức tranh chân dung ông nội.'},
     {zh:'未经允许使用别人的照片做广告，是侵犯肖像权的行为。',py:'Wèi jīng yǔnxǔ shǐyòng biérén de zhàopiàn zuò guǎnggào, shì qīnfàn xiàoxiàngquán de xíngwéi.',vn:'Chưa được phép mà dùng ảnh người khác để quảng cáo là hành vi xâm phạm quyền hình ảnh.'}
   ],
   colloFull:[
     {zh:'印肖像',py:'yìn xiàoxiàng',vn:'in chân dung'},
     {zh:'肖像画',py:'xiàoxiànghuà',vn:'tranh chân dung'},
     {zh:'人物肖像',py:'rénwù xiàoxiàng',vn:'chân dung nhân vật'},
     {zh:'肖像权',py:'xiàoxiàngquán',vn:'quyền hình ảnh cá nhân'},
     {zh:'画肖像',py:'huà xiàoxiàng',vn:'vẽ chân dung'}
   ],
   patterns:[
     {s:'把 + 肖像 + 印在……上',m:'in chân dung lên …'},
     {s:'给 + 某人 + 画肖像',m:'vẽ chân dung cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở phố cổ có mấy hoạ sĩ chuyên vẽ chân dung cho khách du lịch.',answer:'老街上有几位画家专门给游客画肖像。',answerPy:'Lǎojiē shang yǒu jǐ wèi huàjiā zhuānmén gěi yóukè huà xiàoxiàng.',
      note:'专门 + V = chuyên (ôn HSK 4); 给 + người + V.',pair:'专门……'},
     {promptLang:'vi',prompt:'Anh ấy in chân dung của cả nhà lên áo phông.',answer:'他把全家人的肖像印在了T恤上。',answerPy:'Tā bǎ quánjiārén de xiàoxiàng yìn zàile T xù shang.',
      note:'Câu 把 + V + 在 + nơi chốn (ôn HSK 4).',pair:'把……V在……'}
   ]},

  {n:40,zh:'纺织',py:'fǎngzhī',pos:'Động từ',vn:'dệt, dệt may',hv:'phưởng chức',em:'🧵',lesson:1,
   explain:['Kéo sợi (纺) và dệt vải (织) — chỉ ngành / công việc dệt nói chung: 纺织品 (hàng dệt), 纺织厂, 纺织业, 纺织工人.','Thường làm định ngữ trong các danh từ ghép; ít dùng như động từ đơn lẻ với tân ngữ cụ thể (dệt một tấm vải → 织布). So với 编织 (đan, bện — bài 26).'],
   usage:'纺织 + 品 / 厂 / 业 / 工人; 纺织 + 技术 / 机器.',
   collo:['纺织品','纺织厂','纺织业','纺织工人'],
   ex_zh:'印在纪念品和纺织品上',ex_py:'yìn zài jìniànpǐn hé fǎngzhīpǐn shang',ex_vn:'In lên đồ lưu niệm và hàng dệt',
   exList:[
     {zh:'可以把喜欢的图案、肖像印在纪念品和纺织品上。',py:'Kěyǐ bǎ xǐhuan de tú\'àn, xiàoxiàng yìn zài jìniànpǐn hé fǎngzhīpǐn shang.',vn:'Có thể in hoa văn, chân dung yêu thích lên đồ lưu niệm và hàng dệt.'},
     {zh:'纺织业是越南重要的出口产业之一。',py:'Fǎngzhīyè shì Yuènán zhòngyào de chūkǒu chǎnyè zhī yī.',vn:'Dệt may là một trong những ngành xuất khẩu quan trọng của Việt Nam.'},
     {zh:'她妈妈在纺织厂工作了二十多年。',py:'Tā māma zài fǎngzhīchǎng gōngzuòle èrshí duō nián.',vn:'Mẹ cô ấy đã làm ở nhà máy dệt hơn hai mươi năm.'}
   ],
   colloFull:[
     {zh:'纺织品',py:'fǎngzhīpǐn',vn:'hàng dệt'},
     {zh:'纺织厂',py:'fǎngzhīchǎng',vn:'nhà máy dệt'},
     {zh:'纺织业',py:'fǎngzhīyè',vn:'ngành dệt may'},
     {zh:'纺织工人',py:'fǎngzhī gōngrén',vn:'công nhân dệt'},
     {zh:'纺织技术',py:'fǎngzhī jìshù',vn:'kỹ thuật dệt'}
   ],
   patterns:[
     {s:'纺织 + 品 / 厂 / 业',m:'hàng / nhà máy / ngành dệt'},
     {s:'……是……的产业之一',m:'… là một trong những ngành …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nam Định từng là trung tâm dệt may nổi tiếng của Việt Nam.',answer:'南定曾经是越南有名的纺织中心。',answerPy:'Nándìng céngjīng shì Yuènán yǒumíng de fǎngzhī zhōngxīn.',
      note:'曾经 = từng (ôn HSK 4).',pair:'曾经……'},
     {promptLang:'vi',prompt:'Hàng dệt xuất khẩu của công ty này chủ yếu bán sang châu Âu.',answer:'这家公司出口的纺织品主要卖到欧洲。',answerPy:'Zhè jiā gōngsī chūkǒu de fǎngzhīpǐn zhǔyào mài dào Ōuzhōu.',
      note:'主要 + V (chủ yếu); V + 到 + nơi chốn.',pair:'V到……'}
   ]},

  {n:41,zh:'留念',py:'liúniàn',pos:'Động từ / Danh từ',vn:'giữ làm lưu niệm, làm kỷ niệm',hv:'lưu niệm',em:'📸',lesson:1,
   explain:['Giữ lại (vật, ảnh) để làm kỷ niệm: 合影留念 (chụp ảnh chung làm kỷ niệm), 拍照留念, 送给……留念.','Trong bài dùng như danh từ: 作为独一无二的旅游留念 (làm kỷ niệm du lịch độc nhất vô nhị). Khác 纪念 (tưởng niệm, kỷ niệm — rộng hơn: 纪念日, 纪念品).'],
   usage:'合影 / 拍照 + 留念; 作为……留念; 送给 + 某人 + 留念.',
   collo:['合影留念','拍照留念','旅游留念','作为留念'],
   ex_zh:'作为独一无二的旅游留念',ex_py:'zuòwéi dúyī-wú\'èr de lǚyóu liúniàn',ex_vn:'Làm kỷ niệm du lịch độc nhất vô nhị',
   exList:[
     {zh:'游客可以把照片印在纪念品上，作为独一无二的旅游留念。',py:'Yóukè kěyǐ bǎ zhàopiàn yìn zài jìniànpǐn shang, zuòwéi dúyī-wú\'èr de lǚyóu liúniàn.',vn:'Du khách có thể in ảnh lên đồ lưu niệm, làm kỷ niệm du lịch độc nhất vô nhị.'},
     {zh:'毕业典礼结束后，全班同学在校门口合影留念。',py:'Bìyè diǎnlǐ jiéshù hòu, quán bān tóngxué zài xiàoménkǒu héyǐng liúniàn.',vn:'Lễ tốt nghiệp kết thúc, cả lớp chụp ảnh chung ở cổng trường làm kỷ niệm.'},
     {zh:'临走前，老师送给每个学生一本书留念。',py:'Lín zǒu qián, lǎoshī sòng gěi měi ge xuésheng yì běn shū liúniàn.',vn:'Trước lúc đi, thầy tặng mỗi học sinh một cuốn sách làm kỷ niệm.'}
   ],
   colloFull:[
     {zh:'合影留念',py:'héyǐng liúniàn',vn:'chụp ảnh chung làm kỷ niệm'},
     {zh:'拍照留念',py:'pāizhào liúniàn',vn:'chụp ảnh lưu niệm'},
     {zh:'旅游留念',py:'lǚyóu liúniàn',vn:'kỷ niệm du lịch'},
     {zh:'作为留念',py:'zuòwéi liúniàn',vn:'làm kỷ niệm'},
     {zh:'送给你留念',py:'sòng gěi nǐ liúniàn',vn:'tặng bạn làm kỷ niệm'}
   ],
   patterns:[
     {s:'（在……）合影留念',m:'chụp ảnh chung (ở …) làm kỷ niệm'},
     {s:'送给 + 某人 + N + 留念',m:'tặng ai N làm kỷ niệm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đến Văn Miếu, chúng tôi chụp mấy tấm ảnh làm kỷ niệm.',answer:'到了文庙，我们拍了几张照片留念。',answerPy:'Dàole Wénmiào, wǒmen pāile jǐ zhāng zhàopiàn liúniàn.',
      note:'Câu liên động: V1 (拍照片) + V2 (留念) — mục đích.',pair:'连动句'},
     {promptLang:'vi',prompt:'Chiếc bút này tặng cậu làm kỷ niệm, đừng quên tớ nhé.',answer:'这支笔送给你留念，别忘了我啊。',answerPy:'Zhè zhī bǐ sòng gěi nǐ liúniàn, bié wàngle wǒ a.',
      note:'别 + V + 了 (đừng …, ôn HSK 3).',pair:'别……了'}
   ]},

  {n:42,zh:'对照',py:'duìzhào',pos:'Động từ',vn:'so sánh, đối chiếu',hv:'đối chiếu',em:'🔍',lesson:1,
   explain:['Đặt hai thứ cạnh nhau để so sánh, kiểm tra: 对照原文, 对照答案, 对照检查. Cũng có nghĩa "xét theo (tiêu chuẩn, nhu cầu)": 对照观光客的需求.','Làm định ngữ: 中英对照 (song ngữ Trung – Anh), 对照表. Gần 比较 nhưng 对照 nhấn việc đặt cạnh nhau để khớp, soát.'],
   usage:'对照 + 原文 / 答案 / 标准 / 需求; 对照检查; ……对照（版）.',
   collo:['对照原文','对照答案','对照检查','对照观光客的需求'],
   ex_zh:'对照观光客的需求',ex_py:'duìzhào guānguāngkè de xūqiú',ex_vn:'Đối chiếu với nhu cầu của du khách',
   exList:[
     {zh:'兄弟俩发现，对照观光客的需求，传统彩色冲印做法太过陈旧。',py:'Xiōngdì liǎ fāxiàn, duìzhào guānguāngkè de xūqiú, chuántǒng cǎisè chōngyìn zuòfǎ tài guò chénjiù.',vn:'Hai anh em phát hiện ra, đối chiếu với nhu cầu của du khách, cách in tráng ảnh màu truyền thống quá lỗi thời.'},
     {zh:'做完练习后，请对照答案检查一下。',py:'Zuòwán liànxí hòu, qǐng duìzhào dá\'àn jiǎnchá yíxià.',vn:'Làm xong bài tập, hãy đối chiếu đáp án kiểm tra lại.'},
     {zh:'这本书是中越对照的，很适合学生阅读。',py:'Zhè běn shū shì Zhōng-Yuè duìzhào de, hěn shìhé xuésheng yuèdú.',vn:'Cuốn sách này là song ngữ Trung – Việt, rất hợp cho học sinh đọc.'}
   ],
   colloFull:[
     {zh:'对照原文',py:'duìzhào yuánwén',vn:'đối chiếu nguyên văn'},
     {zh:'对照答案',py:'duìzhào dá\'àn',vn:'đối chiếu đáp án'},
     {zh:'对照检查',py:'duìzhào jiǎnchá',vn:'đối chiếu kiểm tra'},
     {zh:'对照观光客的需求',py:'duìzhào guānguāngkè de xūqiú',vn:'đối chiếu với nhu cầu của du khách'},
     {zh:'中越对照',py:'Zhōng-Yuè duìzhào',vn:'song ngữ Trung – Việt'}
   ],
   patterns:[
     {s:'对照 + N + V（检查 / 修改）',m:'đối chiếu N mà kiểm tra / sửa'},
     {s:'对照 + ……的需求 / 标准，……',m:'xét theo nhu cầu / tiêu chuẩn …, thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dịch xong, cậu nên đối chiếu nguyên văn đọc lại một lượt.',answer:'翻译完以后，你最好对照原文再看一遍。',answerPy:'Fānyì wán yǐhòu, nǐ zuìhǎo duìzhào yuánwén zài kàn yí biàn.',
      note:'V完 (bổ ngữ kết quả); 再 + V + 一遍.',pair:'V完'},
     {promptLang:'vi',prompt:'Đối chiếu với tiêu chuẩn mới, sản phẩm của chúng ta vẫn còn không ít chỗ chưa đạt.',answer:'对照新标准，我们的产品还有不少不足之处。',answerPy:'Duìzhào xīn biāozhǔn, wǒmen de chǎnpǐn hái yǒu bù shǎo bùzú zhī chù.',
      note:'不足之处 = chỗ chưa tốt (văn viết, ôn HSK 5).',pair:'……之处'}
   ]},

  {n:43,zh:'齐心协力',py:'qíxīn-xiélì',pos:'Thành ngữ',vn:'đồng tâm hiệp lực, đồng lòng góp sức',hv:'tề tâm hiệp lực',em:'🤜',lesson:1,
   explain:['Mọi người cùng một lòng, cùng góp sức làm một việc (齐心 = cùng lòng, 协力 = hợp sức). Thành ngữ bốn chữ, sắc thái tích cực.','Thường làm vị ngữ hoặc trạng ngữ trước động từ: 大家齐心协力, 齐心协力完成任务; chủ ngữ phải là nhiều người (兄弟俩, 全班, 大家).'],
   usage:'大家 / 全体 / 兄弟俩 + 齐心协力; 齐心协力 + V (完成 / 克服 / 建设…).',
   collo:['兄弟俩齐心协力','大家齐心协力','齐心协力完成任务','齐心协力克服困难'],
   ex_zh:'于是兄弟俩齐心协力',ex_py:'yúshì xiōngdì liǎ qíxīn-xiélì',ex_vn:'Thế là hai anh em đồng tâm hiệp lực',
   exList:[
     {zh:'于是兄弟俩齐心协力，发挥各自的专长，发明了流动彩印车。',py:'Yúshì xiōngdì liǎ qíxīn-xiélì, fāhuī gèzì de zhuāncháng, fāmíngle liúdòng cǎiyìnchē.',vn:'Thế là hai anh em đồng tâm hiệp lực, phát huy sở trường của mỗi người, phát minh ra xe in ảnh màu lưu động.'},
     {zh:'希望大家齐心协力，圆满完成这项艰巨的任务。',py:'Xīwàng dàjiā qíxīn-xiélì, yuánmǎn wánchéng zhè xiàng jiānjù de rènwu.',vn:'Mong mọi người đồng tâm hiệp lực, hoàn thành trọn vẹn nhiệm vụ gian khổ này.'},
     {zh:'只要全班同学齐心协力，就没有克服不了的困难。',py:'Zhǐyào quán bān tóngxué qíxīn-xiélì, jiù méiyǒu kèfú bu liǎo de kùnnan.',vn:'Chỉ cần cả lớp đồng lòng góp sức thì không có khó khăn nào không vượt qua được.'}
   ],
   colloFull:[
     {zh:'兄弟俩齐心协力',py:'xiōngdì liǎ qíxīn-xiélì',vn:'hai anh em đồng tâm hiệp lực'},
     {zh:'大家齐心协力',py:'dàjiā qíxīn-xiélì',vn:'mọi người đồng lòng'},
     {zh:'齐心协力完成任务',py:'qíxīn-xiélì wánchéng rènwu',vn:'đồng lòng hoàn thành nhiệm vụ'},
     {zh:'齐心协力克服困难',py:'qíxīn-xiélì kèfú kùnnan',vn:'đồng lòng vượt khó'},
     {zh:'全体员工齐心协力',py:'quántǐ yuángōng qíxīn-xiélì',vn:'toàn thể nhân viên đồng lòng'}
   ],
   patterns:[
     {s:'（大家）齐心协力 + V',m:'(mọi người) đồng lòng làm …'},
     {s:'只要齐心协力，就……',m:'Chỉ cần đồng lòng thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ cả làng đồng tâm hiệp lực, con đường mới chỉ trong một tháng đã làm xong.',answer:'由于全村人齐心协力，新路只用了一个月就修好了。',answerPy:'Yóuyú quán cūn rén qíxīn-xiélì, xīn lù zhǐ yòngle yí ge yuè jiù xiūhǎo le.',
      note:'由于……; 只 + V + thời lượng + 就…… (nhanh).',pair:'只……就……'},
     {promptLang:'vi',prompt:'Chỉ cần chúng ta đồng lòng góp sức, nhất định sẽ thắng trận đấu này.',answer:'只要我们齐心协力，就一定能赢得这场比赛。',answerPy:'Zhǐyào wǒmen qíxīn-xiélì, jiù yídìng néng yíngdé zhè chǎng bǐsài.',
      note:'只要……就…… (ôn HSK 4); 赢得 + N.',pair:'只要……就……'}
   ]},

  {n:44,zh:'专长',py:'zhuāncháng',pos:'Danh từ',vn:'sở trường, chuyên môn, tay nghề riêng',hv:'chuyên trường',em:'🛠️',lesson:1,
   explain:['Kiến thức, kỹ năng chuyên môn mà một người (hoặc đơn vị) đặc biệt giỏi: 发挥专长, 各有专长, 学有专长. Chú ý: 长 đọc cháng (dài / giỏi), không đọc zhǎng.','Gần 特长 (năng khiếu đặc biệt — 特长生); 专长 thiên về chuyên môn nghề nghiệp.'],
   usage:'发挥 + （各自的）专长; 各有 + 专长; 学有专长; 专长是…….',
   collo:['发挥专长','各自的专长','各有专长','学有专长'],
   ex_zh:'发挥各自的专长',ex_py:'fāhuī gèzì de zhuāncháng',ex_vn:'Phát huy sở trường của mỗi người',
   exList:[
     {zh:'兄弟俩齐心协力，发挥各自的专长，发明了流动彩印车。',py:'Xiōngdì liǎ qíxīn-xiélì, fāhuī gèzì de zhuāncháng, fāmíngle liúdòng cǎiyìnchē.',vn:'Hai anh em đồng lòng, phát huy sở trường của mỗi người, phát minh ra xe in ảnh lưu động.'},
     {zh:'我们及时调整营销策略，发挥公司的专长，终于赢得了客户的认可。',py:'Wǒmen jíshí tiáozhěng yíngxiāo cèlüè, fāhuī gōngsī de zhuāncháng, zhōngyú yíngdéle kèhù de rènkě.',vn:'Chúng tôi kịp thời điều chỉnh chiến lược tiếp thị, phát huy thế mạnh của công ty, cuối cùng giành được sự công nhận của khách hàng.'},
     {zh:'小组里的同学各有专长，有的会画画儿，有的会写文章。',py:'Xiǎozǔ li de tóngxué gè yǒu zhuāncháng, yǒude huì huà huàr, yǒude huì xiě wénzhāng.',vn:'Các bạn trong nhóm mỗi người một sở trường, có bạn giỏi vẽ, có bạn giỏi viết.'}
   ],
   colloFull:[
     {zh:'发挥专长',py:'fāhuī zhuāncháng',vn:'phát huy sở trường'},
     {zh:'各自的专长',py:'gèzì de zhuāncháng',vn:'sở trường riêng của mỗi người'},
     {zh:'各有专长',py:'gè yǒu zhuāncháng',vn:'mỗi người một sở trường'},
     {zh:'学有专长',py:'xué yǒu zhuāncháng',vn:'học có chuyên môn'},
     {zh:'专业专长',py:'zhuānyè zhuāncháng',vn:'chuyên môn nghề nghiệp'}
   ],
   patterns:[
     {s:'发挥 + 某人 + 的专长',m:'phát huy sở trường của ai'},
     {s:'各有专长，有的……，有的……',m:'mỗi người một sở trường, người thì …, người thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chọn nghề tốt nhất nên chọn công việc có thể phát huy sở trường của mình.',answer:'选择职业，最好选能发挥自己专长的工作。',answerPy:'Xuǎnzé zhíyè, zuìhǎo xuǎn néng fāhuī zìjǐ zhuāncháng de gōngzuò.',
      note:'最好 + V (ôn HSK 4); định ngữ dài 能发挥……的.',pair:'最好……'},
     {promptLang:'vi',prompt:'Sở trường của cô ấy là thiết kế, còn tôi giỏi tiếp thị.',answer:'她的专长是设计，而我擅长营销。',answerPy:'Tā de zhuāncháng shì shèjì, ér wǒ shàncháng yíngxiāo.',
      note:'而 nối hai vế đối chiếu (ôn HSK 5); 擅长 (ôn HSK 5).',pair:'而……'}
   ]},

  {n:45,zh:'资本',py:'zīběn',pos:'Danh từ',vn:'tư bản, vốn; vốn liếng',hv:'tư bản',em:'🏦',lesson:1,
   explain:['Tiền, tài sản bỏ vào kinh doanh để sinh lời: 以……做资本, 投入资本, 资本市场. Văn viết, thuật ngữ kinh tế (khẩu ngữ hay dùng 本钱).','Nghĩa bóng: điều kiện để mưu cầu lợi ích, để tự hào: 年轻是最大的资本; 骄傲的资本 (vốn liếng để kiêu ngạo).'],
   usage:'以 + số tiền + 做资本; 投入 / 积累 + 资本; ……的资本.',
   collo:['以50万台币做资本','积累资本','投入资本','骄傲的资本'],
   ex_zh:'以50万台币做资本',ex_py:'yǐ wǔshí wàn táibì zuò zīběn',ex_vn:'Lấy 500 nghìn Đài tệ làm vốn',
   exList:[
     {zh:'兄弟俩以50万台币做资本，发明了这辆流动彩印车。',py:'Xiōngdì liǎ yǐ wǔshí wàn táibì zuò zīběn, fāmíngle zhè liàng liúdòng cǎiyìnchē.',vn:'Hai anh em lấy 500 nghìn Đài tệ làm vốn, phát minh ra chiếc xe in ảnh lưu động này.'},
     {zh:'不管你最初有多少资本，只要勤奋努力，就能收回本钱。',py:'Bùguǎn nǐ zuìchū yǒu duōshao zīběn, zhǐyào qínfèn nǔlì, jiù néng shōuhuí běnqián.',vn:'Bất kể lúc đầu bạn có bao nhiêu vốn, chỉ cần siêng năng cố gắng là thu hồi được vốn.'},
     {zh:'年轻就是你最大的资本，失败了还可以重新再来。',py:'Niánqīng jiù shì nǐ zuì dà de zīběn, shībàile hái kěyǐ chóngxīn zài lái.',vn:'Tuổi trẻ chính là vốn liếng lớn nhất của bạn, thất bại rồi vẫn có thể làm lại từ đầu.'}
   ],
   colloFull:[
     {zh:'以50万台币做资本',py:'yǐ wǔshí wàn táibì zuò zīběn',vn:'lấy 500 nghìn Đài tệ làm vốn'},
     {zh:'积累资本',py:'jīlěi zīběn',vn:'tích luỹ vốn'},
     {zh:'投入资本',py:'tóurù zīběn',vn:'bỏ vốn vào'},
     {zh:'骄傲的资本',py:'jiāo\'ào de zīběn',vn:'vốn liếng để kiêu ngạo'},
     {zh:'最大的资本',py:'zuì dà de zīběn',vn:'vốn liếng lớn nhất'}
   ],
   patterns:[
     {s:'以 + tiền + 做资本，V……',m:'lấy … làm vốn để …'},
     {s:'A 是 + 某人 + 最大的资本',m:'A là vốn liếng lớn nhất của ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy lấy tiền tiết kiệm mấy năm làm vốn, mở một quán cà phê nhỏ.',answer:'他以几年的积蓄做资本，开了一家小咖啡馆。',answerPy:'Tā yǐ jǐ nián de jīxù zuò zīběn, kāile yì jiā xiǎo kāfēiguǎn.',
      note:'以 A 做 B = lấy A làm B (văn viết, ôn HSK 5).',pair:'以……做……'},
     {promptLang:'vi',prompt:'Điểm cao không phải vốn liếng để kiêu ngạo, còn phải cố gắng hơn nữa.',answer:'成绩好不是骄傲的资本，还要再接再厉。',answerPy:'Chéngjì hǎo bú shì jiāo\'ào de zīběn, hái yào zàijiē-zàilì.',
      note:'再接再厉 ôn bài 35.',pair:'再接再厉'}
   ]},

  {n:46,zh:'以往',py:'yǐwǎng',pos:'Danh từ',vn:'ngày trước, trước kia, trước đây',hv:'dĩ vãng',em:'⏪',lesson:1,
   explain:['Khoảng thời gian trước đây (văn viết, ≈ 以前 / 过去): 以往的经验, 跟以往不同, 不像以往. Làm định ngữ, trạng ngữ hoặc tân ngữ của giới từ.','Khác 以前 ở chỗ 以往 không đứng sau cụm từ chỉ mốc (không nói *三年以往, phải nói 三年以前); hay dùng 比以往 + Adj: 比以往更…….'],
   usage:'以往的 + N; 跟 / 和 + 以往 + 不同 / 一样; 不像以往; 比以往 + 更…….',
   collo:['不像以往','跟以往不同','以往的经验','比以往更'],
   ex_zh:'不像以往，要等上好几天',ex_py:'bú xiàng yǐwǎng, yào děngshang hǎo jǐ tiān',ex_vn:'Không như trước kia, phải đợi mấy ngày liền',
   exList:[
     {zh:'它最大的优势就是方便快捷，不像以往，要等上好几天。',py:'Tā zuì dà de yōushì jiù shì fāngbiàn kuàijié, bú xiàng yǐwǎng, yào děngshang hǎo jǐ tiān.',vn:'Ưu thế lớn nhất của nó là tiện lợi nhanh chóng, không như trước kia phải đợi đến mấy ngày.'},
     {zh:'跟以往不同的是，这学期我们修改了课程内容。',py:'Gēn yǐwǎng bù tóng de shì, zhè xuéqī wǒmen xiūgǎile kèchéng nèiróng.',vn:'Điểm khác với trước đây là học kỳ này chúng tôi đã sửa đổi nội dung chương trình.'},
     {zh:'今年的春节比以往更热闹。',py:'Jīnnián de Chūnjié bǐ yǐwǎng gèng rènao.',vn:'Tết năm nay náo nhiệt hơn mọi năm.'}
   ],
   colloFull:[
     {zh:'不像以往',py:'bú xiàng yǐwǎng',vn:'không như trước kia'},
     {zh:'跟以往不同',py:'gēn yǐwǎng bù tóng',vn:'khác với trước đây'},
     {zh:'以往的经验',py:'yǐwǎng de jīngyàn',vn:'kinh nghiệm trước đây'},
     {zh:'比以往更',py:'bǐ yǐwǎng gèng',vn:'hơn hẳn trước đây'},
     {zh:'和以往一样',py:'hé yǐwǎng yíyàng',vn:'giống như mọi khi'}
   ],
   patterns:[
     {s:'跟以往不同的是，……',m:'Điểm khác với trước đây là …'},
     {s:'比以往 + 更 + Adj',m:'… hơn so với trước kia'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giống như mọi khi, sáng nay ông tôi vẫn dậy lúc năm giờ.',answer:'和以往一样，爷爷今天早上还是五点就起床了。',answerPy:'Hé yǐwǎng yíyàng, yéye jīntiān zǎoshang háishi wǔ diǎn jiù qǐchuáng le.',
      note:'和……一样 (ôn HSK 3); 就 nhấn sớm.',pair:'和……一样'},
     {promptLang:'vi',prompt:'Dựa vào kinh nghiệm trước đây, tháng này là mùa ế hàng.',answer:'根据以往的经验，这个月是淡季。',answerPy:'Gēnjù yǐwǎng de jīngyàn, zhège yuè shì dànjì.',
      note:'根据…… (ôn HSK 4); 淡季 là từ của bài.',pair:'根据……'}
   ]},

  {n:47,zh:'淡季',py:'dànjì',pos:'Danh từ',vn:'mùa ế hàng, mùa vắng khách, trái mùa',hv:'đạm quý',em:'🍂',lesson:1,
   explain:['Thời kỳ buôn bán ế ẩm, ít khách hoặc sản vật ít (đối lập 旺季 = mùa cao điểm): 旅游淡季, 销售淡季, 进入淡季.','Hay dùng trong du lịch, kinh doanh: 淡季打折 (giảm giá mùa vắng), 淡季不淡 (mùa vắng mà không vắng).'],
   usage:'旅游 / 销售 + 淡季; 进入 + 淡季; 淡季 + 打折 / 优惠; 淡季和旺季.',
   collo:['旅游淡季','销售淡季','进入淡季','淡季打折'],
   ex_zh:'旅游淡季',ex_py:'lǚyóu dànjì',ex_vn:'Mùa vắng khách du lịch',
   exList:[
     {zh:'旅游淡季，彩印车还可以为学生的制服印制高品质的图案。',py:'Lǚyóu dànjì, cǎiyìnchē hái kěyǐ wèi xuésheng de zhìfú yìnzhì gāo pǐnzhì de tú\'àn.',vn:'Mùa vắng khách du lịch, xe in ảnh còn có thể in hoa văn chất lượng cao lên đồng phục học sinh.'},
     {zh:'一方面由于进入销售淡季，一方面受通货膨胀的影响，公司收入下滑。',py:'Yì fāngmiàn yóuyú jìnrù xiāoshòu dànjì, yì fāngmiàn shòu tōnghuò péngzhàng de yǐngxiǎng, gōngsī shōurù xiàhuá.',vn:'Một mặt do bước vào mùa bán ế, mặt khác chịu ảnh hưởng lạm phát, thu nhập công ty sụt giảm.'},
     {zh:'淡季去旅游不但人少，机票和酒店也便宜得多。',py:'Dànjì qù lǚyóu búdàn rén shǎo, jīpiào hé jiǔdiàn yě piányi de duō.',vn:'Đi du lịch mùa thấp điểm không những ít người mà vé máy bay và khách sạn cũng rẻ hơn nhiều.'}
   ],
   colloFull:[
     {zh:'旅游淡季',py:'lǚyóu dànjì',vn:'mùa vắng khách du lịch'},
     {zh:'销售淡季',py:'xiāoshòu dànjì',vn:'mùa bán ế'},
     {zh:'进入淡季',py:'jìnrù dànjì',vn:'bước vào mùa vắng'},
     {zh:'淡季打折',py:'dànjì dǎzhé',vn:'giảm giá mùa vắng'},
     {zh:'淡季和旺季',py:'dànjì hé wàngjì',vn:'mùa thấp điểm và cao điểm'}
   ],
   patterns:[
     {s:'……淡季，（还）可以……',m:'Mùa vắng thì (còn) có thể …'},
     {s:'由于进入淡季，……',m:'Do bước vào mùa ế, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa vắng khách khách sạn thường giảm giá, vì thế chúng tôi chọn đi tháng Mười một.',answer:'淡季的时候酒店常常打折，所以我们选择十一月去。',answerPy:'Dànjì de shíhou jiǔdiàn chángcháng dǎzhé, suǒyǐ wǒmen xuǎnzé shíyī yuè qù.',
      note:'……的时候; 所以 nối kết quả (ôn HSK 3).',pair:'所以……'},
     {promptLang:'vi',prompt:'Dù là mùa ế hàng, doanh thu của cửa hàng họ vẫn rất khá.',answer:'即使是淡季，他们店的销售额也很不错。',answerPy:'Jíshǐ shì dànjì, tāmen diàn de xiāoshòu\'é yě hěn búcuò.',
      note:'即使……也…… (giả thiết nhượng bộ, ôn HSK 5).',pair:'即使……也……'}
   ]},

  {n:48,zh:'制服',py:'zhìfú',pos:'Danh từ',vn:'đồng phục',hv:'chế phục',em:'👔',lesson:1,
   explain:['Quần áo may theo kiểu thống nhất của một cơ quan, trường học, ngành nghề: 学生制服, 穿制服, 统一制服. Văn viết hơn 校服 (đồng phục học sinh — khẩu ngữ).','Lượng từ 套 / 件: 一套制服. Chú ý: 制服 còn là động từ "khuất phục, chế ngự" (制服歹徒) — nghĩa khác, không nhầm.'],
   usage:'穿 + 制服; 学生 / 工作 + 制服; 统一的制服; 一套制服.',
   collo:['学生的制服','穿制服','统一制服','工作制服'],
   ex_zh:'为学生的制服印制高品质的图案',ex_py:'wèi xuésheng de zhìfú yìnzhì gāo pǐnzhì de tú\'àn',ex_vn:'In hoa văn chất lượng cao lên đồng phục học sinh',
   exList:[
     {zh:'旅游淡季，彩印车还可以为学生的制服、不同规格的运动服印制高品质的图案。',py:'Lǚyóu dànjì, cǎiyìnchē hái kěyǐ wèi xuésheng de zhìfú, bù tóng guīgé de yùndòngfú yìnzhì gāo pǐnzhì de tú\'àn.',vn:'Mùa vắng khách, xe in còn có thể in hoa văn chất lượng cao lên đồng phục học sinh, quần áo thể thao các cỡ.'},
     {zh:'这家公司要求员工上班时必须穿统一的制服。',py:'Zhè jiā gōngsī yāoqiú yuángōng shàngbān shí bìxū chuān tǒngyī de zhìfú.',vn:'Công ty này yêu cầu nhân viên khi đi làm phải mặc đồng phục thống nhất.'},
     {zh:'他穿上警察制服，显得特别精神。',py:'Tā chuānshang jǐngchá zhìfú, xiǎnde tèbié jīngshen.',vn:'Anh ấy mặc đồng phục cảnh sát vào trông đặc biệt oai phong.'}
   ],
   colloFull:[
     {zh:'学生的制服',py:'xuésheng de zhìfú',vn:'đồng phục học sinh'},
     {zh:'穿制服',py:'chuān zhìfú',vn:'mặc đồng phục'},
     {zh:'统一制服',py:'tǒngyī zhìfú',vn:'đồng phục thống nhất'},
     {zh:'工作制服',py:'gōngzuò zhìfú',vn:'đồng phục làm việc'},
     {zh:'一套制服',py:'yí tào zhìfú',vn:'một bộ đồng phục'}
   ],
   patterns:[
     {s:'穿（上）+ ……制服',m:'mặc (vào) đồng phục …'},
     {s:'为 + ……的制服 + V',m:'làm … cho đồng phục …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thứ Hai hằng tuần, học sinh đều phải mặc đồng phục đến trường.',answer:'每周一，学生都要穿制服上学。',answerPy:'Měi zhōuyī, xuésheng dōu yào chuān zhìfú shàngxué.',
      note:'每……都…… (ôn HSK 3–4); câu liên động 穿制服上学.',pair:'每……都……'},
     {promptLang:'vi',prompt:'Bộ đồng phục này tuy không đẹp lắm nhưng rất bền.',answer:'这套制服虽然不太好看，但是很耐用。',answerPy:'Zhè tào zhìfú suīrán bú tài hǎokàn, dànshì hěn nàiyòng.',
      note:'不太 + Adj (ôn HSK 2–3); 耐用 là từ của bài.',pair:'不太……'}
   ]},

  {n:49,zh:'规格',py:'guīgé',pos:'Danh từ',vn:'quy cách, tiêu chuẩn, kích cỡ',hv:'quy cách',em:'📏',lesson:1,
   explain:['Tiêu chuẩn quy định về kích thước, chất lượng, kiểu dáng của sản phẩm: 不同规格, 规格齐全, 产品规格.','Nghĩa rộng: tiêu chuẩn, điều kiện (của sự kiện, lễ tiếp đón): 接待规格很高 (tiếp đón theo nghi thức cao).'],
   usage:'不同 / 各种 + 规格; 规格 + 齐全 / 统一; 符合 + 规格; 接待规格.',
   collo:['不同规格','规格齐全','符合规格','接待规格'],
   ex_zh:'不同规格的运动服',ex_py:'bù tóng guīgé de yùndòngfú',ex_vn:'Quần áo thể thao các quy cách khác nhau',
   exList:[
     {zh:'彩印车还可以为不同规格的运动服印制高品质的图案。',py:'Cǎiyìnchē hái kěyǐ wèi bù tóng guīgé de yùndòngfú yìnzhì gāo pǐnzhì de tú\'àn.',vn:'Xe in còn có thể in hoa văn chất lượng cao lên quần áo thể thao đủ các cỡ.'},
     {zh:'这家店的鞋子规格齐全，大人小孩都能买到合适的。',py:'Zhè jiā diàn de xiézi guīgé qíquán, dàrén xiǎohái dōu néng mǎidào héshì de.',vn:'Giày ở cửa hàng này đủ các cỡ, người lớn trẻ con đều mua được đôi vừa.'},
     {zh:'这批零件不符合规格，全部退回工厂。',py:'Zhè pī língjiàn bù fúhé guīgé, quánbù tuìhuí gōngchǎng.',vn:'Lô linh kiện này không đúng quy cách, trả lại hết cho nhà máy.'}
   ],
   colloFull:[
     {zh:'不同规格',py:'bù tóng guīgé',vn:'quy cách khác nhau'},
     {zh:'规格齐全',py:'guīgé qíquán',vn:'đầy đủ các cỡ'},
     {zh:'符合规格',py:'fúhé guīgé',vn:'đúng quy cách'},
     {zh:'接待规格',py:'jiēdài guīgé',vn:'nghi thức tiếp đón'},
     {zh:'产品规格',py:'chǎnpǐn guīgé',vn:'quy cách sản phẩm'}
   ],
   patterns:[
     {s:'不同规格的 + N',m:'N đủ các quy cách, kích cỡ'},
     {s:'（不）符合 + 规格',m:'(không) đúng quy cách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần sản phẩm đúng quy cách, chúng tôi sẽ đặt hàng lâu dài.',answer:'只要产品符合规格，我们就长期订货。',answerPy:'Zhǐyào chǎnpǐn fúhé guīgé, wǒmen jiù chángqī dìnghuò.',
      note:'只要……就…… (ôn HSK 4); 符合 + tiêu chuẩn.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Cửa hàng này bán đủ loại, đủ cỡ, nên khách rất đông.',answer:'这家店的商品种类多，规格齐全，所以顾客很多。',answerPy:'Zhè jiā diàn de shāngpǐn zhǒnglèi duō, guīgé qíquán, suǒyǐ gùkè hěn duō.',
      note:'齐全 ôn bài 33; 所以 nối kết quả.',pair:'所以……'}
   ]},

  {n:50,zh:'递增',py:'dìzēng',pos:'Động từ',vn:'tăng dần, tăng lũy tiến',hv:'đệ tăng',em:'📶',lesson:1,
   explain:['Tăng lên dần dần theo từng bước, từng thời kỳ: 逐年递增 (tăng dần từng năm), 呈递增趋势, 以……的速度递增. Văn viết, hay dùng với số liệu.','递 = lần lượt, theo thứ tự (递减 = giảm dần). Ôn bài 35: 递增 là 1 trong các từ "thêm" chữ 增 của 练习1.'],
   usage:'逐年 / 逐月 + 递增; 呈递增趋势; 以 + tỷ lệ + 的速度递增.',
   collo:['呈递增趋势','逐年递增','按比例递增','递增和递减'],
   ex_zh:'收益也呈递增趋势',ex_py:'shōuyì yě chéng dìzēng qūshì',ex_vn:'Thu nhập cũng có xu hướng tăng dần',
   exList:[
     {zh:'彩印车很快就有了知名度，收益也呈递增趋势。',py:'Cǎiyìnchē hěn kuài jiù yǒule zhīmíngdù, shōuyì yě chéng dìzēng qūshì.',vn:'Xe in ảnh nhanh chóng có tiếng tăm, thu nhập cũng có xu hướng tăng dần.'},
     {zh:'近年来，来越南旅游的外国游客人数逐年递增。',py:'Jìnnián lái, lái Yuènán lǚyóu de wàiguó yóukè rénshù zhúnián dìzēng.',vn:'Những năm gần đây, số du khách nước ngoài đến Việt Nam du lịch tăng dần qua từng năm.'},
     {zh:'这套练习题的难度是递增的，最后几道最难。',py:'Zhè tào liànxítí de nándù shì dìzēng de, zuìhòu jǐ dào zuì nán.',vn:'Độ khó của bộ bài tập này tăng dần, mấy câu cuối là khó nhất.'}
   ],
   colloFull:[
     {zh:'呈递增趋势',py:'chéng dìzēng qūshì',vn:'có xu hướng tăng dần'},
     {zh:'逐年递增',py:'zhúnián dìzēng',vn:'tăng dần qua từng năm'},
     {zh:'按比例递增',py:'àn bǐlì dìzēng',vn:'tăng theo tỷ lệ'},
     {zh:'递增和递减',py:'dìzēng hé dìjiǎn',vn:'tăng dần và giảm dần'},
     {zh:'难度递增',py:'nándù dìzēng',vn:'độ khó tăng dần'}
   ],
   patterns:[
     {s:'N + 呈递增趋势',m:'N có xu hướng tăng dần'},
     {s:'N + 逐年 / 逐月 + 递增',m:'N tăng dần theo từng năm / tháng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Theo sự phát triển của kinh tế, thu nhập của người dân tăng dần từng năm.',answer:'随着经济的发展，居民的收入逐年递增。',answerPy:'Suízhe jīngjì de fāzhǎn, jūmín de shōurù zhúnián dìzēng.',
      note:'随着…… (ôn HSK 4); 居民 ôn bài 30; 逐年 ôn bài 31.',pair:'随着……'},
     {promptLang:'vi',prompt:'Số liệu cho thấy lượng bán online có xu hướng tăng dần.',answer:'数据显示，网上的销售量呈递增趋势。',answerPy:'Shùjù xiǎnshì, wǎngshang de xiāoshòuliàng chéng dìzēng qūshì.',
      note:'数据显示 + mệnh đề = số liệu cho thấy (văn viết, ôn HSK 5).',pair:'数据显示……'}
   ]},

  {n:51,zh:'周期',py:'zhōuqī',pos:'Danh từ',vn:'chu kỳ; khoảng thời gian (để hoàn thành)',hv:'chu kỳ',em:'🔄',lesson:1,
   explain:['Khoảng thời gian một hiện tượng lặp lại một vòng: 生长周期, 月亮的周期. Trong kinh doanh: thời gian để hoàn thành một việc: 很短的周期就收回了成本 (thời gian thu hồi vốn rất ngắn).','Hay đi với 长 / 短: 周期长, 周期短; 缩短周期 (rút ngắn chu kỳ).'],
   usage:'……的周期; 周期 + 长 / 短; 缩短 / 延长 + 周期; 生产 / 生长 + 周期.',
   collo:['很短的周期','生长周期','缩短周期','生产周期'],
   ex_zh:'很短的周期就收回了成本',ex_py:'hěn duǎn de zhōuqī jiù shōuhuíle chéngběn',ex_vn:'Chỉ một thời gian rất ngắn đã thu hồi vốn',
   exList:[
     {zh:'彩印车的收益呈递增趋势，很短的周期就收回了成本。',py:'Cǎiyìnchē de shōuyì chéng dìzēng qūshì, hěn duǎn de zhōuqī jiù shōuhuíle chéngběn.',vn:'Thu nhập của xe in ảnh tăng dần, chỉ trong một thời gian rất ngắn đã thu hồi vốn.'},
     {zh:'这种蔬菜的生长周期短，一年可以种好几次。',py:'Zhè zhǒng shūcài de shēngzhǎng zhōuqī duǎn, yì nián kěyǐ zhòng hǎo jǐ cì.',vn:'Loại rau này chu kỳ sinh trưởng ngắn, một năm có thể trồng mấy lứa.'},
     {zh:'引进新机器以后，生产周期缩短了一半。',py:'Yǐnjìn xīn jīqì yǐhòu, shēngchǎn zhōuqī suōduǎnle yíbàn.',vn:'Sau khi nhập máy móc mới, chu kỳ sản xuất rút ngắn một nửa.'}
   ],
   colloFull:[
     {zh:'很短的周期',py:'hěn duǎn de zhōuqī',vn:'thời gian rất ngắn'},
     {zh:'生长周期',py:'shēngzhǎng zhōuqī',vn:'chu kỳ sinh trưởng'},
     {zh:'缩短周期',py:'suōduǎn zhōuqī',vn:'rút ngắn chu kỳ'},
     {zh:'生产周期',py:'shēngchǎn zhōuqī',vn:'chu kỳ sản xuất'},
     {zh:'周期很长',py:'zhōuqī hěn cháng',vn:'chu kỳ rất dài'}
   ],
   patterns:[
     {s:'……的周期 + 长 / 短',m:'chu kỳ của … dài / ngắn'},
     {s:'很短的周期（内）就……',m:'trong thời gian rất ngắn đã …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dự án này có chu kỳ đầu tư dài, nhưng lợi nhuận rất ổn định.',answer:'这个项目投资周期长，但是收益很稳定。',answerPy:'Zhège xiàngmù tóuzī zhōuqī cháng, dànshì shōuyì hěn wěndìng.',
      note:'收益 ôn bài 29; câu chủ vị làm vị ngữ (项目 + 周期长).',pair:'主谓谓语句'},
     {promptLang:'vi',prompt:'Muốn rút ngắn chu kỳ sản xuất thì phải cải tiến kỹ thuật.',answer:'要想缩短生产周期，就得改进技术。',answerPy:'Yào xiǎng suōduǎn shēngchǎn zhōuqī, jiù děi gǎijìn jìshù.',
      note:'要想……，就得…… (điều kiện, ôn HSK 5).',pair:'要想……就得……'}
   ]},

  {n:52,zh:'赌博',py:'dǔbó',pos:'Động từ',vn:'đánh bạc, cờ bạc',hv:'đổ bác',em:'🎲',lesson:1,
   explain:['Dùng tiền, đồ vật đặt cược để thắng thua (bằng bài, xúc xắc…) — hành vi xấu, bị cấm ở nhiều nơi: 参与赌博, 禁止赌博, 戒赌 (bỏ cờ bạc).','Nghĩa bóng: làm việc may rủi, liều lĩnh, không có căn cứ: 创业不是赌博; 这简直是拿生命赌博.'],
   usage:'参与 / 禁止 + 赌博; ……不是赌博; 拿…… + 赌博 (liều lĩnh đem … ra cược).',
   collo:['创业不是赌博','禁止赌博','参与赌博','拿……赌博'],
   ex_zh:'创业不是赌博',ex_py:'chuàngyè bú shì dǔbó',ex_vn:'Khởi nghiệp không phải là đánh bạc',
   exList:[
     {zh:'可见，创业不是赌博，创业不能靠空想。',py:'Kějiàn, chuàngyè bú shì dǔbó, chuàngyè bù néng kào kōngxiǎng.',vn:'Có thể thấy, khởi nghiệp không phải là đánh bạc, khởi nghiệp không thể dựa vào nghĩ viển vông.'},
     {zh:'他因为赌博欠了一大笔钱，家里人都很失望。',py:'Tā yīnwèi dǔbó qiànle yí dà bǐ qián, jiālǐrén dōu hěn shīwàng.',vn:'Anh ta vì cờ bạc mà nợ một khoản tiền lớn, người nhà ai cũng thất vọng.'},
     {zh:'酒后开车简直是拿生命赌博。',py:'Jiǔ hòu kāichē jiǎnzhí shì ná shēngmìng dǔbó.',vn:'Uống rượu rồi lái xe đúng là đem tính mạng ra đánh cược.'}
   ],
   colloFull:[
     {zh:'创业不是赌博',py:'chuàngyè bú shì dǔbó',vn:'khởi nghiệp không phải đánh bạc'},
     {zh:'禁止赌博',py:'jìnzhǐ dǔbó',vn:'cấm cờ bạc'},
     {zh:'参与赌博',py:'cānyù dǔbó',vn:'tham gia cờ bạc'},
     {zh:'拿……赌博',py:'ná……dǔbó',vn:'đem … ra đánh cược'},
     {zh:'因为赌博欠钱',py:'yīnwèi dǔbó qiàn qián',vn:'nợ tiền vì cờ bạc'}
   ],
   patterns:[
     {s:'A 不是赌博',m:'A không phải chuyện may rủi'},
     {s:'拿 + N + 赌博',m:'đem N ra đánh cược (liều lĩnh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đầu tư phải có kế hoạch, nếu không thì chẳng khác gì đánh bạc.',answer:'投资要有计划，不然就跟赌博差不多了。',answerPy:'Tóuzī yào yǒu jìhuà, bùrán jiù gēn dǔbó chàbuduō le.',
      note:'不然 = nếu không thì (ôn HSK 4); 跟……差不多.',pair:'不然……'},
     {promptLang:'vi',prompt:'Pháp luật nghiêm cấm mọi hình thức đánh bạc trên mạng.',answer:'法律严禁任何形式的网络赌博。',answerPy:'Fǎlǜ yánjìn rènhé xíngshì de wǎngluò dǔbó.',
      note:'严禁 = nghiêm cấm (văn viết); 任何……的…… (ôn HSK 4).',pair:'任何……'}
   ]},

  {n:53,zh:'空想',py:'kōngxiǎng',pos:'Động từ / Danh từ',vn:'nghĩ viển vông, suy nghĩ viển vông; ảo tưởng',hv:'không tưởng',em:'💭',lesson:1,
   explain:['Nghĩ những điều thoát ly thực tế, không có căn cứ: 靠空想, 不要空想, 空想家. Mang nghĩa CHÊ.','Danh từ: ý nghĩ viển vông (那只是一个空想); định ngữ: 空想社会主义 (chủ nghĩa xã hội không tưởng). Đối lập: 实干 (làm thực).'],
   usage:'靠 + 空想; 不能 / 不要 + 空想; 只是 + 空想; 空想 + 家.',
   collo:['靠空想','不能空想','只是空想','空想家'],
   ex_zh:'创业不能靠空想',ex_py:'chuàngyè bù néng kào kōngxiǎng',ex_vn:'Khởi nghiệp không thể dựa vào nghĩ viển vông',
   exList:[
     {zh:'创业不是赌博，创业不能靠空想。',py:'Chuàngyè bú shì dǔbó, chuàngyè bù néng kào kōngxiǎng.',vn:'Khởi nghiệp không phải đánh bạc, khởi nghiệp không thể dựa vào nghĩ viển vông.'},
     {zh:'与其整天空想，不如马上行动起来。',py:'Yǔqí zhěngtiān kōngxiǎng, bùrú mǎshàng xíngdòng qilai.',vn:'Thay vì cả ngày nghĩ viển vông, chi bằng lập tức bắt tay vào làm.'},
     {zh:'没有计划的梦想只是空想。',py:'Méiyǒu jìhuà de mèngxiǎng zhǐ shì kōngxiǎng.',vn:'Ước mơ không có kế hoạch chỉ là ảo tưởng.'}
   ],
   colloFull:[
     {zh:'靠空想',py:'kào kōngxiǎng',vn:'dựa vào nghĩ viển vông'},
     {zh:'不能空想',py:'bù néng kōngxiǎng',vn:'không được mơ tưởng viển vông'},
     {zh:'只是空想',py:'zhǐ shì kōngxiǎng',vn:'chỉ là ảo tưởng'},
     {zh:'空想家',py:'kōngxiǎngjiā',vn:'kẻ mơ mộng hão'},
     {zh:'整天空想',py:'zhěngtiān kōngxiǎng',vn:'cả ngày mơ mộng hão'}
   ],
   patterns:[
     {s:'……不能靠空想',m:'… không thể dựa vào tưởng tượng viển vông'},
     {s:'与其空想，不如……',m:'thay vì mơ mộng, chi bằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành công không đến từ mơ mộng hão huyền, mà đến từ nỗ lực mỗi ngày.',answer:'成功不是来自空想，而是来自每天的努力。',answerPy:'Chénggōng bú shì láizì kōngxiǎng, ér shì láizì měi tiān de nǔlì.',
      note:'不是……而是…… (ôn HSK 4–5).',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Nếu chỉ nghĩ mà không làm thì kế hoạch hay đến mấy cũng chỉ là ảo tưởng.',answer:'如果只想不做，再好的计划也只是空想。',answerPy:'Rúguǒ zhǐ xiǎng bú zuò, zài hǎo de jìhuà yě zhǐ shì kōngxiǎng.',
      note:'再 + Adj + 的 + N + 也…… (dù … đến mấy cũng, ôn HSK 5).',pair:'再……也……'}
   ]}
];


// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn (mỗi đoạn một dòng; ba tiểu mục và bốn loại kẹo tách riêng)
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 慧眼捕捉商机',
   preQuiz:[
     {q:'课文认为创业的窍门是什么？',opts:['多借钱，多投资','不可盲目，要依据市场规则捕捉商机','多做广告宣传'],ans:1},
     {q:'罐装八宝粥是谁发明的？',opts:['吉列先生','安藤百福','戚石川兄弟'],ans:2},
     {q:'手机电池的正常寿命是多少年？',opts:['5至6年','1年','10年'],ans:0},
     {q:'王先生在哪儿看到了“电池分析修复仪”？',opts:['商场的柜台','美国的工厂','新产品博览会上'],ans:2},
     {q:'王先生多长时间收回了本钱？',opts:['一个月','不到两个季度','一年多'],ans:1},
     {q:'当年日本泡泡糖市场大部分被谁垄断？',opts:['劳特','江崎公司','美国公司'],ans:0},
     {q:'下面哪一项不是劳特产品的不足？',opts:['口味单一','外观老旧','价格太贵'],ans:2},
     {q:'江崎公司以什么为依据设计产品？',opts:['成年人的消费需求','儿童的口味','广告公司的建议'],ans:0},
     {q:'体育用泡泡糖有什么作用？',opts:['消除司机的困倦','内含多种维生素，有利于消除疲劳','改变人的不良情绪'],ans:1},
     {q:'流动彩印车的发明者是谁？',opts:['一对摄影师夫妻','周家两兄弟','台湾一家旅游公司'],ans:1},
     {q:'流动彩印车最大的优势是什么？',opts:['价格便宜','照片质量最高','方便快捷'],ans:2},
     {q:'课文最后认为经营者必备的素质是什么？',opts:['能准确预测市场的潜在需求，具有超前意识','有很多资本','敢于冒险赌博'],ans:0}
   ],
   lines:[
    {sp:0,zh:'屡次创业，却屡次惨遭失败的人总想知道，创业有窍门吗？当然有，窍门就是创业不可盲目，要依据市场规则捕捉商业机会。1903年吉列先生发明的可替换刮胡刀、1958年安藤百福发明的方便面、1992年戚石川兄弟发明的罐装八宝粥，都受到了市场热捧，并给创业者带来了数额可观的财富，成功的案例告诉我们：创业必须依据市场需求，这是一条永恒的真理，只要遵循这条规则，就没有不成功的道理。',
     py:'Lǚcì chuàngyè, què lǚcì cǎn zāo shībài de rén zǒng xiǎng zhīdào, chuàngyè yǒu qiàomén ma? Dāngrán yǒu, qiàomén jiù shì chuàngyè bù kě mángmù, yào yījù shìchǎng guīzé bǔzhuō shāngyè jīhuì. Yījiǔlíngsān nián Jílié xiānsheng fāmíng de kě tìhuàn guāhúdāo, yījiǔwǔbā nián Āntēng Bǎifú fāmíng de fāngbiànmiàn, yījiǔjiǔ\'èr nián Qī Shíchuān xiōngdì fāmíng de guànzhuāng bābǎozhōu, dōu shòudàole shìchǎng rèpěng, bìng gěi chuàngyèzhě dàiláile shù\'é kěguān de cáifù, chénggōng de ànlì gàosu wǒmen: chuàngyè bìxū yījù shìchǎng xūqiú, zhè shì yì tiáo yǒnghéng de zhēnlǐ, zhǐyào zūnxún zhè tiáo guīzé, jiù méiyǒu bù chénggōng de dàolǐ.',
     vn:'Những người nhiều lần khởi nghiệp mà lần nào cũng thất bại thảm hại luôn muốn biết: khởi nghiệp có bí quyết không? Tất nhiên là có, bí quyết chính là khởi nghiệp không được mù quáng, phải dựa vào quy luật thị trường để nắm bắt cơ hội kinh doanh. Dao cạo râu thay được lưỡi do ông Gillette phát minh năm 1903, mì ăn liền do Momofuku Ando (An Đằng Bách Phúc) phát minh năm 1958, cháo bát bảo đóng lon do anh em Thích Thạch Xuyên phát minh năm 1992 đều được thị trường săn đón nồng nhiệt và mang lại cho người khởi nghiệp khối của cải đáng kể. Những ví dụ thành công cho chúng ta biết: khởi nghiệp phải dựa vào nhu cầu thị trường, đây là một chân lý vĩnh hằng; chỉ cần tuân theo quy tắc này thì không có lý nào lại không thành công.'},
    {sp:0,zh:'独具慧眼，寻找机遇',
     py:'Dújù huìyǎn, xúnzhǎo jīyù',
     vn:'Con mắt tinh tường, tìm kiếm cơ hội'},
    {sp:0,zh:'市场需求无处不在，却往往易被忽视，别人没发现，或是不屑做的生意，往往孕育着机会。譬如，在新产品博览会上，王先生看到了一台叫作“电池分析修复仪”的小机器，它是用来修复手机电池的。手机电池的正常寿命是5至6年，事实上大家的电池却没有那么耐用，往往用一年就坏了，换新电池又很贵。而所谓坏了，只是化学物质沉淀到了绝缘层，美国人发现在一定条件下，能够将其还原成初始状态，于是发明了这种机器。王先生花4万元买下了这台能够像变魔术一样修好电池的机器。之后，在商场租了柜台，修一块电池收费50～70元，扣掉场地租金和税金，月收入上万，不到两个季度就轻松收回了本钱。类似这样的生意，即使碰上通货膨胀，也不会对他产生丝毫影响。可是，如果你没有眼光，就看不到商机；如果你思维平庸，就发现不了商机；只要你勤劳，市场就捏在你的手里。',
     py:'Shìchǎng xūqiú wú chù bú zài, què wǎngwǎng yì bèi hūshì, biérén méi fāxiàn, huò shì búxiè zuò de shēngyi, wǎngwǎng yùnyùzhe jīhuì. Pìrú, zài xīn chǎnpǐn bólǎnhuì shang, Wáng xiānsheng kàndàole yì tái jiàozuò “diànchí fēnxī xiūfùyí” de xiǎo jīqì, tā shì yònglái xiūfù shǒujī diànchí de. Shǒujī diànchí de zhèngcháng shòumìng shì wǔ zhì liù nián, shìshí shang dàjiā de diànchí què méiyǒu nàme nàiyòng, wǎngwǎng yòng yì nián jiù huài le, huàn xīn diànchí yòu hěn guì. Ér suǒwèi huài le, zhǐshì huàxué wùzhì chéndiàn dàole juéyuáncéng, Měiguórén fāxiàn zài yídìng tiáojiàn xià, nénggòu jiāng qí huányuán chéng chūshǐ zhuàngtài, yúshì fāmíngle zhè zhǒng jīqì. Wáng xiānsheng huā sì wàn yuán mǎixiàle zhè tái nénggòu xiàng biàn móshù yíyàng xiūhǎo diànchí de jīqì. Zhīhòu, zài shāngchǎng zūle guìtái, xiū yí kuài diànchí shōufèi wǔshí dào qīshí yuán, kòudiào chǎngdì zūjīn hé shuìjīn, yuè shōurù shàng wàn, bú dào liǎng ge jìdù jiù qīngsōng shōuhuíle běnqián. Lèisì zhèyàng de shēngyi, jíshǐ pèngshang tōnghuò péngzhàng, yě bú huì duì tā chǎnshēng sīháo yǐngxiǎng. Kěshì, rúguǒ nǐ méiyǒu yǎnguāng, jiù kàn bu dào shāngjī; rúguǒ nǐ sīwéi píngyōng, jiù fāxiàn bu liǎo shāngjī; zhǐyào nǐ qínláo, shìchǎng jiù niē zài nǐ de shǒu li.',
     vn:'Nhu cầu thị trường có ở khắp nơi, nhưng thường lại dễ bị bỏ qua; những việc làm ăn người khác chưa phát hiện ra hoặc chẳng thèm làm thường lại ẩn chứa cơ hội. Chẳng hạn, tại một hội chợ sản phẩm mới, ông Vương nhìn thấy một cỗ máy nhỏ gọi là "máy phân tích, phục hồi pin", dùng để phục hồi pin điện thoại di động. Tuổi thọ bình thường của pin điện thoại là 5 đến 6 năm, nhưng thực tế pin của mọi người lại không bền đến thế, thường dùng một năm là hỏng, mà thay pin mới thì lại đắt. Còn cái gọi là "hỏng" ấy chỉ là chất hoá học lắng đọng lên lớp cách điện; người Mỹ phát hiện rằng trong điều kiện nhất định có thể khôi phục nó về trạng thái ban đầu, thế là phát minh ra loại máy này. Ông Vương bỏ ra 40 nghìn tệ mua cỗ máy có thể sửa pin như làm ảo thuật ấy. Sau đó, ông thuê một quầy hàng trong trung tâm thương mại, sửa mỗi viên pin thu 50–70 tệ; trừ tiền thuê mặt bằng và tiền thuế, thu nhập mỗi tháng trên một vạn tệ, chưa đến hai quý đã dễ dàng thu hồi vốn. Việc làm ăn kiểu này, cho dù gặp phải lạm phát cũng không hề ảnh hưởng đến ông. Thế nhưng, nếu bạn không có con mắt nhìn xa thì sẽ không thấy được cơ hội kinh doanh; nếu tư duy của bạn tầm thường thì sẽ không phát hiện ra cơ hội kinh doanh; chỉ cần bạn chăm chỉ, thị trường sẽ nằm gọn trong tay bạn.'},
    {sp:0,zh:'从竞争对手的产品缺陷中捕捉商机',
     py:'Cóng jìngzhēng duìshǒu de chǎnpǐn quēxiàn zhōng bǔzhuō shāngjī',
     vn:'Nắm bắt cơ hội kinh doanh từ khiếm khuyết trong sản phẩm của đối thủ cạnh tranh'},
    {sp:0,zh:'研究竞争对手，从中找出其产品的弱点及营销的薄弱环节，是捕捉商机的有效方法之一。',
     py:'Yánjiū jìngzhēng duìshǒu, cóngzhōng zhǎochū qí chǎnpǐn de ruòdiǎn jí yíngxiāo de bóruò huánjié, shì bǔzhuō shāngjī de yǒuxiào fāngfǎ zhī yī.',
     vn:'Nghiên cứu đối thủ cạnh tranh, từ đó tìm ra điểm yếu trong sản phẩm và khâu yếu trong tiếp thị của họ, là một trong những cách hiệu quả để nắm bắt cơ hội kinh doanh.'},
    {sp:0,zh:'当年，日渐兴旺的日本泡泡糖市场大部分被劳特垄断，江崎公司想扩充这方面的业务，于是专门成立了团队，研究劳特的产品，以寻找市场缝隙。研究结果发现劳特产品有四个不足：一，成年人的泡泡糖市场正在扩大，劳特的眼光仍停留在儿童身上；二，劳特的产品口味单一，而消费者的需求正在日益多样化；三，劳特泡泡糖外观老旧，缺乏新式样；四，劳特产品售价110日元，买时得掏10日元硬币，不方便购买者。于是江崎公司大胆布局，以成年人的消费需求为依据设计产品，又拟定了相应的市场营销策略，不久，推出四种功能型泡泡糖：',
     py:'Dāngnián, rìjiàn xīngwàng de Rìběn pàopàotáng shìchǎng dà bùfen bèi Láotè lǒngduàn, Jiāngqí gōngsī xiǎng kuòchōng zhè fāngmiàn de yèwù, yúshì zhuānmén chénglìle tuánduì, yánjiū Láotè de chǎnpǐn, yǐ xúnzhǎo shìchǎng fèngxì. Yánjiū jiéguǒ fāxiàn Láotè chǎnpǐn yǒu sì ge bùzú: yī, chéngniánrén de pàopàotáng shìchǎng zhèngzài kuòdà, Láotè de yǎnguāng réng tíngliú zài értóng shēnshang; èr, Láotè de chǎnpǐn kǒuwèi dānyī, ér xiāofèizhě de xūqiú zhèngzài rìyì duōyànghuà; sān, Láotè pàopàotáng wàiguān lǎojiù, quēfá xīn shìyàng; sì, Láotè chǎnpǐn shòujià yìbǎi yīshí rìyuán, mǎi shí děi tāo shí rìyuán yìngbì, bù fāngbiàn gòumǎizhě. Yúshì Jiāngqí gōngsī dàdǎn bùjú, yǐ chéngniánrén de xiāofèi xūqiú wéi yījù shèjì chǎnpǐn, yòu nǐdìngle xiāngyìng de shìchǎng yíngxiāo cèlüè, bùjiǔ, tuīchū sì zhǒng gōngnéngxíng pàopàotáng:',
     vn:'Hồi ấy, thị trường kẹo cao su thổi bóng ngày càng phát đạt của Nhật Bản phần lớn bị Lotte lũng đoạn; công ty Ezaki muốn mở rộng mảng kinh doanh này, thế là lập riêng một đội nghiên cứu sản phẩm của Lotte để tìm kẽ hở thị trường. Kết quả nghiên cứu phát hiện sản phẩm của Lotte có bốn điểm chưa tốt: một, thị trường kẹo cao su của người lớn đang mở rộng, nhưng Lotte vẫn chỉ chăm chăm nhìn vào trẻ em; hai, sản phẩm của Lotte chỉ có một mùi vị, trong khi nhu cầu của người tiêu dùng ngày càng đa dạng; ba, kẹo cao su Lotte bề ngoài cũ kỹ, thiếu mẫu mã mới; bốn, sản phẩm Lotte giá 110 yên, lúc mua phải móc đồng xu 10 yên, bất tiện cho người mua. Thế là công ty Ezaki mạnh dạn đi nước cờ mới, lấy nhu cầu tiêu dùng của người lớn làm căn cứ để thiết kế sản phẩm, lại vạch ra chiến lược tiếp thị thị trường tương ứng; chẳng bao lâu, họ tung ra bốn loại kẹo cao su theo công dụng: (劳特 = Lotte, 江崎 = Ezaki Glico — hai hãng bánh kẹo lớn ở Nhật Bản.)'},
    {sp:0,zh:'1.司机用泡泡糖，以强烈的刺激消除司机的困倦。',
     py:'Yī, sījī yòng pàopàotáng, yǐ qiángliè de cìjī xiāochú sījī de kùnjuàn.',
     vn:'1. Kẹo cao su dành cho tài xế: dùng vị kích thích mạnh để xua tan cơn buồn ngủ của tài xế.'},
    {sp:0,zh:'2.交际用泡泡糖，咀嚼后，可清洁口腔，消除口腔异味。',
     py:'Èr, jiāojì yòng pàopàotáng, jǔjué hòu, kě qīngjié kǒuqiāng, xiāochú kǒuqiāng yìwèi.',
     vn:'2. Kẹo cao su dùng khi giao tiếp: nhai xong có thể làm sạch khoang miệng, khử mùi hôi miệng.'},
    {sp:0,zh:'3.体育用泡泡糖，内含多种维生素，有利于消除疲劳。',
     py:'Sān, tǐyù yòng pàopàotáng, nèi hán duō zhǒng wéishēngsù, yǒulìyú xiāochú píláo.',
     vn:'3. Kẹo cao su dùng khi chơi thể thao: bên trong chứa nhiều loại vitamin, có lợi cho việc xua tan mệt mỏi.'},
    {sp:0,zh:'4.轻松型泡泡糖，通过添加叶绿素，改变人的不良情绪。',
     py:'Sì, qīngsōngxíng pàopàotáng, tōngguò tiānjiā yèlǜsù, gǎibiàn rén de bùliáng qíngxù.',
     vn:'4. Kẹo cao su loại thư giãn: nhờ thêm diệp lục tố mà cải thiện tâm trạng xấu của con người.'},
    {sp:0,zh:'在产品可口的同时，精心设计包装和造型，定价分50和100日元两种。江崎的产品物美价廉，风味独特。不靠广告吹捧，品尝后，消费者购买踊跃，市场需求呈井喷式爆发，财务收入也呈井喷式增长。这就是市场，只要你细心研究市场，细心研究消费者的需求，细心研究市场产品的优劣，对产品的不足做些局部改进，就有可能得到消费者的认可；你愈是为消费者考虑得周全，消费者愈是会慷慨地关照你。',
     py:'Zài chǎnpǐn kěkǒu de tóngshí, jīngxīn shèjì bāozhuāng hé zàoxíng, dìngjià fēn wǔshí hé yìbǎi rìyuán liǎng zhǒng. Jiāngqí de chǎnpǐn wùměi-jiàlián, fēngwèi dútè. Bú kào guǎnggào chuīpěng, pǐncháng hòu, xiāofèizhě gòumǎi yǒngyuè, shìchǎng xūqiú chéng jǐngpēnshì bàofā, cáiwù shōurù yě chéng jǐngpēnshì zēngzhǎng. Zhè jiù shì shìchǎng, zhǐyào nǐ xìxīn yánjiū shìchǎng, xìxīn yánjiū xiāofèizhě de xūqiú, xìxīn yánjiū shìchǎng chǎnpǐn de yōuliè, duì chǎnpǐn de bùzú zuò xiē júbù gǎijìn, jiù yǒu kěnéng dédào xiāofèizhě de rènkě; nǐ yù shì wèi xiāofèizhě kǎolǜ de zhōuquán, xiāofèizhě yù shì huì kāngkǎi de guānzhào nǐ.',
     vn:'Vừa đảm bảo sản phẩm ngon miệng, vừa dày công thiết kế bao bì và kiểu dáng, định giá thành hai mức 50 và 100 yên. Sản phẩm của Ezaki hàng tốt giá rẻ, hương vị độc đáo. Không nhờ quảng cáo thổi phồng, người tiêu dùng nếm thử xong là đua nhau mua, nhu cầu thị trường bùng nổ như giếng dầu phun, thu nhập tài chính cũng tăng vọt như giếng phun. Thị trường là như vậy đấy: chỉ cần bạn tỉ mỉ nghiên cứu thị trường, tỉ mỉ nghiên cứu nhu cầu người tiêu dùng, tỉ mỉ nghiên cứu ưu nhược điểm của sản phẩm trên thị trường, cải tiến từng phần những chỗ chưa tốt của sản phẩm, thì có thể được người tiêu dùng công nhận; bạn càng suy nghĩ chu đáo cho người tiêu dùng, người tiêu dùng càng hào phóng ủng hộ bạn.'},
    {sp:0,zh:'从市场的潜在需求中寻找商机',
     py:'Cóng shìchǎng de qiánzài xūqiú zhōng xúnzhǎo shāngjī',
     vn:'Tìm kiếm cơ hội kinh doanh từ nhu cầu tiềm ẩn của thị trường'},
    {sp:0,zh:'在台湾某游览观光区，一台流动彩印车吸引了大家的目光，游客可以在这儿就近冲印照片，可以把喜欢的图案、肖像印在纪念品和纺织品上，作为独一无二的旅游留念。',
     py:'Zài Táiwān mǒu yóulǎn guānguāngqū, yì tái liúdòng cǎiyìnchē xīyǐnle dàjiā de mùguāng, yóukè kěyǐ zài zhèr jiùjìn chōngyìn zhàopiàn, kěyǐ bǎ xǐhuan de tú\'àn, xiàoxiàng yìn zài jìniànpǐn hé fǎngzhīpǐn shang, zuòwéi dúyī-wú\'èr de lǚyóu liúniàn.',
     vn:'Tại một khu tham quan du lịch ở Đài Loan, một chiếc xe in ảnh màu lưu động đã thu hút ánh nhìn của mọi người: du khách có thể in tráng ảnh ngay tại chỗ, có thể in hoa văn, chân dung mình thích lên đồ lưu niệm và hàng dệt, làm kỷ niệm du lịch độc nhất vô nhị.'},
    {sp:0,zh:'流动彩印车的发明者是周家两兄弟，哥哥是汽车维修工，弟弟是摄影发烧友。台湾经济转型，旅游业成了台湾经济的支柱产业。兄弟俩发现，对照观光客的需求，传统彩色冲印做法太过陈旧，哪个游客能为冲洗照片等好几天？于是兄弟俩齐心协力，发挥各自的专长，以50万台币做资本，发明了这辆相当于一个小型专业冲印部的流动彩印车。',
     py:'Liúdòng cǎiyìnchē de fāmíngzhě shì Zhōu jiā liǎng xiōngdì, gēge shì qìchē wéixiūgōng, dìdi shì shèyǐng fāshāoyǒu. Táiwān jīngjì zhuǎnxíng, lǚyóuyè chéngle Táiwān jīngjì de zhīzhù chǎnyè. Xiōngdì liǎ fāxiàn, duìzhào guānguāngkè de xūqiú, chuántǒng cǎisè chōngyìn zuòfǎ tài guò chénjiù, nǎge yóukè néng wèi chōngxǐ zhàopiàn děng hǎo jǐ tiān? Yúshì xiōngdì liǎ qíxīn-xiélì, fāhuī gèzì de zhuāncháng, yǐ wǔshí wàn táibì zuò zīběn, fāmíngle zhè liàng xiāngdāngyú yí ge xiǎoxíng zhuānyè chōngyìnbù de liúdòng cǎiyìnchē.',
     vn:'Người phát minh ra xe in ảnh màu lưu động là hai anh em nhà họ Chu: anh là thợ sửa ô tô, em là người mê nhiếp ảnh. Kinh tế Đài Loan chuyển đổi, du lịch trở thành ngành trụ cột của kinh tế Đài Loan. Hai anh em phát hiện ra, đối chiếu với nhu cầu của du khách thì cách in tráng ảnh màu truyền thống quá lỗi thời — du khách nào chịu đợi mấy ngày liền chỉ để rửa ảnh? Thế là hai anh em đồng tâm hiệp lực, phát huy sở trường của mỗi người, lấy 500 nghìn Đài tệ làm vốn, phát minh ra chiếc xe in ảnh màu lưu động tương đương một tiệm in tráng ảnh chuyên nghiệp cỡ nhỏ.'},
    {sp:0,zh:'流动彩印车一出现就大受欢迎，每逢周末、节假日以及人多的场合简直就忙不过来，它最大的优势就是方便快捷，不像以往，要等上好几天。旅游淡季，彩印车还可以为学生的制服、不同规格的运动服印制高品质的图案。彩印车很快就有了知名度，收益也呈递增趋势，很短的周期就收回了成本。',
     py:'Liúdòng cǎiyìnchē yì chūxiàn jiù dà shòu huānyíng, měi féng zhōumò, jiéjiàrì yǐjí rén duō de chǎnghé jiǎnzhí jiù máng bu guòlái, tā zuì dà de yōushì jiù shì fāngbiàn kuàijié, bú xiàng yǐwǎng, yào děngshang hǎo jǐ tiān. Lǚyóu dànjì, cǎiyìnchē hái kěyǐ wèi xuésheng de zhìfú, bù tóng guīgé de yùndòngfú yìnzhì gāo pǐnzhì de tú\'àn. Cǎiyìnchē hěn kuài jiù yǒule zhīmíngdù, shōuyì yě chéng dìzēng qūshì, hěn duǎn de zhōuqī jiù shōuhuíle chéngběn.',
     vn:'Xe in ảnh màu lưu động vừa xuất hiện đã được hoan nghênh nhiệt liệt; mỗi dịp cuối tuần, ngày lễ và những nơi đông người thì bận không xuể. Ưu thế lớn nhất của nó là tiện lợi nhanh chóng, không như trước kia phải đợi đến mấy ngày. Mùa vắng khách du lịch, xe in còn có thể in hoa văn chất lượng cao lên đồng phục học sinh, quần áo thể thao đủ các cỡ. Xe in ảnh nhanh chóng có tiếng tăm, thu nhập cũng có xu hướng tăng dần, chỉ trong thời gian rất ngắn đã thu hồi vốn.'},
    {sp:0,zh:'可见，创业不是赌博，创业不能靠空想，能够准确预测市场的潜在需求，具有超前意识，是经营者必备的素质。',
     py:'Kějiàn, chuàngyè bú shì dǔbó, chuàngyè bù néng kào kōngxiǎng, nénggòu zhǔnquè yùcè shìchǎng de qiánzài xūqiú, jùyǒu chāoqián yìshi, shì jīngyíngzhě bìbèi de sùzhì.',
     vn:'Có thể thấy, khởi nghiệp không phải là đánh bạc, khởi nghiệp không thể dựa vào suy nghĩ viển vông; có thể dự đoán chính xác nhu cầu tiềm ẩn của thị trường, có ý thức đi trước thời đại, là tố chất mà người kinh doanh phải có. (Chuyển thể từ 《经商就这几道》, biên soạn: Vương Vịnh Tinh.)'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 就近—附近 lấy từ sách (tr. 192–193, 做一做 theo đáp án sách); 依据—根据, 扩充—扩大 tự thêm (依据, 扩充 là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'就近 — 附近',
   same:'Đều có nghĩa "ở gần một nơi nào đó" (靠近某地).',
   sameEx:{zh:'蔬菜、肉类等副食品就近／附近都能买到。',vn:'Rau, thịt… và các loại thực phẩm phụ đều mua được ở gần.'},
   items:[
     {word:'就近',points:[
       'PHÓ TỪ: ở gần, không phải đi xa; đứng TRƯỚC cụm động từ, tả hành động: 就近找个加油站, 就近入学, 就近冲印照片.',
       'KHÔNG làm chủ ngữ, KHÔNG làm tân ngữ của giới từ (không nói *在就近, *就近有超市).',
       'KHÔNG bổ nghĩa cho danh từ (không nói *就近的公园).'
     ],ex:[{zh:'我这车快没油了，咱们就近找个加油站加油吧。',vn:'Xe tôi sắp hết xăng rồi, mình tìm trạm xăng nào gần đây đổ xăng đi.'},
          {zh:'游客可以在这儿就近冲印照片。',vn:'Du khách có thể in tráng ảnh ngay tại chỗ.'}]},
     {word:'附近',points:[
       'DANH TỪ: vùng lân cận; làm chủ ngữ hoặc tân ngữ của giới từ: 附近有很多家超市; 他家就在附近.',
       'TÍNH TỪ: gần nơi nào đó, bổ nghĩa cho danh từ: 附近的居民, 学校附近的书店.',
       'Tả một tình hình, trạng thái (ở đâu có gì), không đứng ngay trước động từ làm trạng ngữ như 就近.'
     ],ex:[{zh:'他家就在附近，几分钟就到了。',vn:'Nhà anh ấy ở ngay gần đây, mấy phút là tới.'},
          {zh:'有饭馆在路边乱倒垃圾，附近的居民对此表示不满。',vn:'Có quán ăn đổ rác bừa bãi ven đường, cư dân quanh đó tỏ ra bất bình.'}]}
   ],
   quiz:[
     {sentence:'学校＿＿有一家很大的书店。',options:['就近','附近'],answer:1,
      why:'Làm chủ ngữ chỉ nơi chốn (学校附近 + 有……) → danh từ 附近.'},
     {sentence:'天太晚了，我们＿＿找个旅馆住下吧。',options:['就近','附近'],answer:0,
      why:'Đứng trước cụm động từ 找个旅馆, tả hành động → phó từ 就近.'},
     {sentence:'＿＿的居民都说这个公园晚上太吵了。',options:['就近','附近'],answer:1,
      why:'Bổ nghĩa cho danh từ 居民 (……的居民) → chỉ 附近 làm được.'},
     {sentence:'老人看病不方便，最好＿＿在社区医院看。',options:['就近','附近'],answer:0,
      why:'Trạng ngữ trước động từ (在社区医院看) → 就近.'}
   ],
   sgk:{
     chung:{t:'都有“靠近某地”的意思。',vn:'Đều có nghĩa "gần một nơi nào đó".',vd:'蔬菜、肉类等副食品就近／附近都能买到。',vdVn:'Rau, thịt… và thực phẩm phụ đều mua được ở gần.'},
     khac:[
       {a:{t:'副词，在附近，不到远处去。用在动词短语前。用于描述动作和行为。不能做主语和介词宾语。',vn:'Phó từ, ở gần, không đi xa. Dùng trước cụm động từ, để miêu tả động tác và hành vi. Không làm chủ ngữ và tân ngữ của giới từ.',vd:'我这车快没油了，咱们就近找个加油站加油吧。',vdVn:'Xe tôi sắp hết xăng rồi, mình tìm trạm xăng gần đây đổ đi.'},
        b:{t:'名词，附近的地方。可做主语或介词宾语。用于描述一种情况或状态。',vn:'Danh từ, nơi ở gần. Có thể làm chủ ngữ hoặc tân ngữ của giới từ. Dùng để miêu tả một tình hình hay trạng thái.',vd:'① 他家就在附近，几分钟就到了。② 附近有很多家超市。',vdVn:'① Nhà anh ấy ở ngay gần đây, mấy phút là tới. ② Gần đây có rất nhiều siêu thị.'}},
       {a:{t:'不能修饰名词。',vn:'Không thể bổ nghĩa cho danh từ.',vd:''},
        b:{t:'形容词，靠近某地的。可修饰名词。',vn:'Tính từ, gần một nơi nào đó. Có thể bổ nghĩa cho danh từ.',vd:'有饭馆在路边乱倒垃圾，附近的居民对此表示不满。',vdVn:'Có quán ăn đổ rác bừa bãi ven đường, cư dân quanh đó tỏ ra bất bình.'}}
     ],
     deLam:'选择“就近”或“附近”填空 — Chọn 就近 hay 附近 điền vào chỗ trống',
     lamThu:[
       {s:'车在半路突然出现故障，幸好修理厂就在＿＿，及时排除了故障。',dap:[false,true],
        giai:'附近 (đáp án sách): đứng sau giới từ 在 làm tân ngữ → cần danh từ 附近; 就近 là phó từ, không làm tân ngữ của giới từ.'},
       {s:'天气寒冷，大超市离得又远，她＿＿在路边买了点儿菜回来。',dap:[true,false],
        giai:'就近 (đáp án sách): đứng trước cụm động từ 在路边买了点儿菜, tả hành động "tiện chỗ gần mà mua".'},
       {s:'我习惯了每天去小区＿＿的公园散步，一天不去就浑身不舒服。',dap:[false,true],
        giai:'附近 (đáp án sách): 小区附近的公园 — bổ nghĩa cho danh từ 公园; 就近 không bổ nghĩa cho danh từ.'},
       {s:'为了方便接送，他们＿＿给孩子找了一所私立学校。',dap:[true,false],
        giai:'就近 (đáp án sách): phó từ đứng trước cụm động từ 给孩子找了一所学校 — chọn trường gần cho tiện đưa đón.'}
     ]
   }},

  {pair:'依据 — 根据',
   same:'Đều dùng được như giới từ, danh từ, động từ với nghĩa "căn cứ vào; căn cứ".',
   sameEx:{zh:'我们要依据／根据市场需求设计产品。',vn:'Chúng ta phải căn cứ vào nhu cầu thị trường để thiết kế sản phẩm.'},
   items:[
     {word:'依据',points:[
       'Văn viết, trang trọng; hay dùng trong văn bản pháp luật, khoa học, báo chí: 法律依据, 科学依据, 依据专家的鉴定.',
       'Đối tượng thường trừu tượng, nghiêm túc: 依据规则 / 原则 / 法律 / 需求.',
       'Cụm cố định: 以……为依据 (lấy … làm căn cứ).'
     ],ex:[{zh:'创业必须依据市场需求，这是一条永恒的真理。',vn:'Khởi nghiệp phải dựa vào nhu cầu thị trường, đây là chân lý vĩnh hằng.'}]},
     {word:'根据',points:[
       'Dùng cả khẩu ngữ lẫn văn viết, phạm vi rất rộng: 根据天气预报, 根据我的经验, 根据调查.',
       'Hay đứng đầu câu: 根据……，……; từ ghép 根据地 (căn cứ địa).',
       'Trong giao tiếp hằng ngày thường dùng 根据 hơn 依据.'
     ],ex:[{zh:'根据天气预报，明天会下大雨。',vn:'Theo dự báo thời tiết, ngày mai sẽ mưa to.'}]}
   ],
   quiz:[
     {sentence:'＿＿天气预报，明天会下大雨。',options:['依据','根据'],answer:1,
      why:'Lời nói hằng ngày, thông tin thông thường → 根据 tự nhiên hơn; 依据天气预报 nghe quá trang trọng.'},
     {sentence:'你们这样处理有法律＿＿吗？',options:['依据','根据'],answer:0,both:true,
      why:'法律依据 là cụm quen dùng trong văn pháp luật (ví dụ của sách); 法律根据 cũng nói được nhưng ít hơn.'},
     {sentence:'＿＿我的经验，这道菜要多放点儿糖才好吃。',options:['依据','根据'],answer:1,
      why:'Kinh nghiệm cá nhân, khẩu ngữ → 根据.'},
     {sentence:'江崎公司以成年人的消费需求为＿＿设计产品。',options:['依据','根据'],answer:0,both:true,
      why:'Câu bài khoá: 以……为依据 (văn viết); 以……为根据 cũng có nhưng sách dùng 依据.'}
   ]},

  {pair:'扩充 — 扩大',
   same:'Đều là động từ, nghĩa làm cho lớn thêm, nhiều thêm: 扩充／扩大业务.',
   sameEx:{zh:'江崎公司想扩充／扩大这方面的业务。',vn:'Công ty Ezaki muốn mở rộng mảng kinh doanh này.'},
   items:[
     {word:'扩充',points:[
       'Nhấn "bổ sung thêm cho đầy đủ, dồi dào hơn": 扩充设备, 扩充人员, 扩充内容, 扩充实力.',
       'Tân ngữ thường là thứ có thể thêm vào từng phần (người, đồ vật, sách, nội dung).',
       'Văn viết.'
     ],ex:[{zh:'图书馆今年扩充了五千本新书。',vn:'Năm nay thư viện bổ sung thêm năm nghìn cuốn sách mới.'}]},
     {word:'扩大',points:[
       'Nhấn "mở rộng phạm vi, quy mô, diện tích": 扩大面积, 扩大范围, 扩大生产, 扩大影响.',
       'Dùng rộng, cả khẩu ngữ; dùng được cho thứ trừu tượng (影响, 差距) và kết quả tự thay đổi (市场正在扩大).',
       'Trái nghĩa: 缩小.'
     ],ex:[{zh:'成年人的泡泡糖市场正在扩大。',vn:'Thị trường kẹo cao su của người lớn đang mở rộng.'}]}
   ],
   quiz:[
     {sentence:'这件事的影响正在不断＿＿。',options:['扩充','扩大'],answer:1,
      why:'Ảnh hưởng (trừu tượng, tự lan rộng) → 扩大影响; không nói *扩充影响.'},
     {sentence:'为了提高服务质量，医院又＿＿了一批医护人员。',options:['扩充','扩大'],answer:0,
      why:'Bổ sung thêm nhân sự → 扩充人员.'},
     {sentence:'这座城市的面积比十年前＿＿了一倍。',options:['扩充','扩大'],answer:1,
      why:'Diện tích, phạm vi → 扩大.'},
     {sentence:'课本修订后，每课都＿＿了不少练习内容。',options:['扩充','扩大'],answer:0,
      why:'Thêm nội dung cho phong phú → 扩充内容.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'永恒',hv:'vĩnh hằng',vn:'vĩnh hằng, mãi mãi',note:'Trùng khít: 永恒的真理 = chân lý vĩnh hằng.'},
    {zh:'垄断',hv:'lũng đoạn',vn:'lũng đoạn, độc quyền',note:'Trùng khít: 垄断市场 = lũng đoạn thị trường.'},
    {zh:'策略',hv:'sách lược',vn:'sách lược, chiến lược',note:'Trùng khít; chú ý pinyin cèlüè (có ü).'},
    {zh:'可口',hv:'khả khẩu',vn:'ngon miệng',note:'Tiếng Việt cũng nói "khả khẩu" = hợp khẩu vị.'},
    {zh:'风味',hv:'phong vị',vn:'hương vị đặc trưng',note:'"Phong vị" tiếng Việt = hương vị, nét riêng (phong vị Tết).'},
    {zh:'局部',hv:'cục bộ',vn:'một phần, cục bộ',note:'Trùng khít: 局部地区 = khu vực cục bộ; 局部麻醉 = gây tê cục bộ.'},
    {zh:'财务',hv:'tài vụ',vn:'tài vụ, tài chính',note:'Trùng khít: 财务部 = phòng tài vụ.'},
    {zh:'资本',hv:'tư bản',vn:'vốn, tư bản',note:'"Tư bản" tiếng Việt = vốn (chủ nghĩa tư bản); 资本 = vốn kinh doanh.'},
    {zh:'周期',hv:'chu kỳ',vn:'chu kỳ',note:'Trùng khít.'},
    {zh:'规格',hv:'quy cách',vn:'quy cách, kích cỡ',note:'Trùng khít: 不符合规格 = không đúng quy cách.'},
    {zh:'空想',hv:'không tưởng',vn:'viển vông',note:'Tiếng Việt "không tưởng" = viển vông (chủ nghĩa xã hội không tưởng = 空想社会主义).'},
    {zh:'留念',hv:'lưu niệm',vn:'làm kỷ niệm',note:'Trùng khít: 合影留念 = chụp ảnh lưu niệm.'},
    {zh:'对照',hv:'đối chiếu',vn:'đối chiếu, so sánh',note:'Trùng khít.'},
    {zh:'兴旺',hv:'hưng vượng',vn:'thịnh vượng, phát đạt',note:'Tiếng Việt có "hưng vượng" (ít dùng) = thịnh vượng.'},
    {zh:'扩充',hv:'khuếch sung',vn:'mở rộng, bổ sung',note:'"Khuếch" như khuếch trương, "sung" như bổ sung → mở rộng thêm.'},
    {zh:'季度',hv:'quý độ',vn:'quý (3 tháng)',note:'"Quý" = ba tháng: 第一季度 = quý một.'}
  ],
  idiom:[
    {zh:'物美价廉',hv:'vật mỹ giá liêm',vn:'hàng tốt giá rẻ',note:'"Liêm" (廉) = rẻ (liêm giá = giá rẻ), không phải "liêm khiết" ở đây.'},
    {zh:'齐心协力',hv:'tề tâm hiệp lực',vn:'đồng tâm hiệp lực',note:'Tiếng Việt quen nói "đồng tâm hiệp lực" (同心协力) — nghĩa y hệt.'},
    {zh:'通货膨胀',hv:'thông hoá bành trướng',vn:'lạm phát',note:'"Thông hoá" = tiền lưu thông, "bành trướng" = phình ra → tiền phình ra = LẠM PHÁT.'},
    {zh:'独一无二',hv:'độc nhất vô nhị',vn:'độc nhất vô nhị',note:'Tiếng Việt dùng y nguyên.'},
    {zh:'无处不在',hv:'vô xứ bất tại',vn:'có ở khắp nơi',note:'"Không nơi nào không có" → có mặt khắp nơi.'},
    {zh:'独具慧眼',hv:'độc cụ tuệ nhãn',vn:'có con mắt tinh tường',note:'"Tuệ nhãn" = con mắt trí tuệ, nhìn thấy điều người khác không thấy (tên bài: 慧眼捕捉商机).'}
  ],
  trap:[
    {zh:'魔术',hv:'ma thuật',vn:'ảo thuật',
     warn:'BẪY: "ma thuật" tiếng Việt = phép phù thuỷ; 魔术 tiếng Trung là ẢO THUẬT biểu diễn (变魔术 = làm ảo thuật).'},
    {zh:'关照',hv:'quan chiếu',vn:'quan tâm, chiếu cố',
     warn:'Không dịch "quan chiếu". 请多多关照 = mong được chiếu cố nhiều; khách hàng 关照你 = ủng hộ bạn.'},
    {zh:'专长',hv:'chuyên trường',vn:'sở trường, chuyên môn',
     warn:'长 đọc cháng (giỏi), không phải zhǎng. Dịch "sở trường", không nói "chuyên trường".'},
    {zh:'不屑',hv:'bất tiết',vn:'chẳng thèm, coi thường',
     warn:'"Bất tiết" vô nghĩa với người Việt. 不屑做 = CHẲNG THÈM LÀM (vì coi thường). Đọc búxiè (biến điệu).'},
    {zh:'孕育',hv:'dựng dục',vn:'thai nghén, ấp ủ',
     warn:'Không dịch "dựng dục"; nghĩa bóng hay gặp: 孕育着机会 = ẨN CHỨA cơ hội.'},
    {zh:'平庸',hv:'bình dung',vn:'tầm thường',
     warn:'Không nhầm với 平凡 (bình thường, bình dị — có khi là khen). 平庸 luôn CHÊ: tầm thường, xoàng.'},
    {zh:'淡季',hv:'đạm quý',vn:'mùa vắng khách',
     warn:'淡 = nhạt → mùa "nhạt" khách = MÙA THẤP ĐIỂM; trái nghĩa 旺季 (mùa cao điểm).'},
    {zh:'环节',hv:'hoàn tiết',vn:'khâu, mắt xích',
     warn:'"Hoàn tiết" không dùng; 环 = vòng, 节 = đốt → một mắt xích trong chuỗi = KHÂU (薄弱环节 = khâu yếu).'},
    {zh:'吹捧',hv:'xuy phủng',vn:'tâng bốc',
     warn:'吹 = thổi, 捧 = nâng → "thổi và nâng" = TÂNG BỐC, THỔI PHỒNG (nghĩa chê).'},
    {zh:'肖像',hv:'tiêu tượng',vn:'chân dung',
     warn:'肖 đọc xiào (thanh 4) trong 肖像; dịch "chân dung", 肖像权 = quyền hình ảnh cá nhân.'},
    {zh:'踊跃',hv:'dũng dược',vn:'hăng hái, nô nức',
     warn:'Không phải "dũng cảm nhảy"; 踊跃参加 = HĂNG HÁI tham gia (nhiều người tranh nhau).'},
    {zh:'以往',hv:'dĩ vãng',vn:'trước kia',
     warn:'"Dĩ vãng" tiếng Việt là danh từ văn chương (chìm vào dĩ vãng); 以往 dùng như 以前: 不像以往 = không như trước kia.'},
    {zh:'观光',hv:'quan quang',vn:'tham quan',
     warn:'Tiếng Việt không nói "quan quang"; 观光客 = DU KHÁCH, 观光区 = khu tham quan.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'屡次惨遭',right:'失败'},
  {left:'捕捉商业',right:'机会'},
  {left:'受到了市场',right:'热捧'},
  {left:'数额',right:'可观'},
  {left:'一条永恒的',right:'真理'},
  {left:'遵循这条',right:'规则'},
  {left:'往往孕育着',right:'机会'},
  {left:'新产品',right:'博览会'},
  {left:'扣掉场地租金和',right:'税金'},
  {left:'轻松收回了',right:'本钱'},
  {left:'即使碰上',right:'通货膨胀'},
  {left:'如果你思维',right:'平庸'},
  {left:'营销的薄弱',right:'环节'},
  {left:'大部分被劳特',right:'垄断'},
  {left:'以寻找市场',right:'缝隙'},
  {left:'劳特的产品口味',right:'单一'},
  {left:'拟定了相应的市场营销',right:'策略'},
  {left:'江崎的产品物美',right:'价廉'},
  {left:'风味',right:'独特'},
  {left:'消费者购买',right:'踊跃'},
  {left:'市场需求呈井喷式',right:'爆发'},
  {left:'对产品的不足做些局部',right:'改进'},
  {left:'作为独一无二的旅游',right:'留念'},
  {left:'兄弟俩齐心',right:'协力'},
  {left:'发挥各自的',right:'专长'},
  {left:'收益也呈递增',right:'趋势'},
  {left:'具有超前',right:'意识'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — mỗi từ của bài ít nhất một câu (fill + chọn từ)
// ══════════════════════════════════════════
var fillData = [
  {pre:'这位运动员',blank:'屡次',post:'在国际比赛中获得冠军，是全国人民的骄傲。',hint:'(nhiều lần)',ans:'屡次'},
  {pre:'夏天，冰箱里总放着几',blank:'罐',post:'啤酒和可乐。',hint:'(lon)',ans:'罐'},
  {pre:'这笔奖学金的',blank:'数额',post:'虽然不大，但对我来说意义重大。',hint:'(khoản, mức tiền)',ans:'数额'},
  {pre:'母爱是文学作品中',blank:'永恒',post:'的主题。',hint:'(vĩnh hằng, muôn thuở)',ans:'永恒'},
  {pre:'他觉得这份工作太简单，',blank:'不屑',post:'去做，结果一直找不到工作。',hint:'(chẳng thèm)',ans:'不屑'},
  {pre:'下个月，河内将举办一场国际旅游',blank:'博览会',post:'。',hint:'(hội chợ, triển lãm)',ans:'博览会'},
  {pre:'哥哥在晚会上给大家变了一个',blank:'魔术',post:'，大家都看呆了。',hint:'(ảo thuật)',ans:'魔术'},
  {pre:'这次作文我写错了三个字，被老师',blank:'扣',post:'了两分。',hint:'(trừ)',ans:'扣'},
  {pre:'公司要求每个部门在',blank:'季度',post:'末交一份工作报告。',hint:'(quý)',ans:'季度'},
  {pre:'做生意第一年他就赔光了',blank:'本钱',post:'，只好重新找工作。',hint:'(tiền vốn)',ans:'本钱'},
  {pre:'受',blank:'通货膨胀',post:'的影响，今年的房租又涨了。',hint:'(lạm phát)',ans:'通货膨胀'},
  {pre:'妈妈把面团',blank:'捏',post:'成了一个个可爱的小兔子。',hint:'(nặn)',ans:'捏'},
  {pre:'质量检查是生产中最重要的一个',blank:'环节',post:'。',hint:'(khâu)',ans:'环节'},
  {pre:'自从开通了高速公路，这个小镇的旅游业越来越',blank:'兴旺',post:'了。',hint:'(thịnh vượng)',ans:'兴旺'},
  {pre:'他从口袋里',blank:'掏',post:'出一张纸条递给了我。',hint:'(móc ra, rút ra)',ans:'掏'},
  {pre:'这套房子',blank:'布局',post:'合理，住起来很舒服。',hint:'(cách bố trí)',ans:'布局'},
  {pre:'吃饭时要细细',blank:'咀嚼',post:'，不要狼吞虎咽。',hint:'(nhai)',ans:'咀嚼'},
  {pre:'妈妈做的饭菜又香又',blank:'可口',post:'，我每次都要吃两碗。',hint:'(ngon miệng)',ans:'可口'},
  {pre:'学校门口那家小吃店',blank:'物美价廉',post:'，很受学生欢迎。',hint:'(hàng tốt giá rẻ)',ans:'物美价廉'},
  {pre:'来越南旅游，一定要尝尝各地的',blank:'风味',post:'小吃。',hint:'(hương vị đặc sản)',ans:'风味'},
  {pre:'好产品靠的是质量，而不是广告',blank:'吹捧',post:'。',hint:'(thổi phồng)',ans:'吹捧'},
  {pre:'以前村里只有一口',blank:'井',post:'，全村人都靠它吃水。',hint:'(giếng)',ans:'井'},
  {pre:'报销的发票请交到',blank:'财务',post:'部。',hint:'(tài vụ)',ans:'财务'},
  {pre:'每年都有大批外国游客来下龙湾',blank:'观光',post:'。',hint:'(tham quan)',ans:'观光'},
  {pre:'这位画家专门给人画',blank:'肖像',post:'，一幅要画好几天。',hint:'(chân dung)',ans:'肖像'},
  {pre:'越南的',blank:'纺织',post:'品出口到世界上很多国家。',hint:'(dệt may)',ans:'纺织'},
  {pre:'毕业那天，全班同学在校门口合影',blank:'留念',post:'。',hint:'(làm kỷ niệm)',ans:'留念'},
  {pre:'只要大家',blank:'齐心协力',post:'，就没有克服不了的困难。',hint:'(đồng tâm hiệp lực)',ans:'齐心协力'},
  {pre:'他的',blank:'专长',post:'是电脑编程，在公司里很受重视。',hint:'(sở trường)',ans:'专长'},
  {pre:'他以十万元做',blank:'资本',post:'，开了一家小书店。',hint:'(vốn)',ans:'资本'},
  {pre:'旅游',blank:'淡季',post:'的时候，机票和酒店都便宜得多。',hint:'(mùa vắng khách)',ans:'淡季'},
  {pre:'这所学校要求学生每周一穿',blank:'制服',post:'上学。',hint:'(đồng phục)',ans:'制服'},
  {pre:'这种水稻的生长',blank:'周期',post:'比较短，一年可以种三季。',hint:'(chu kỳ)',ans:'周期'},
  {pre:'他因为',blank:'赌博',post:'欠了很多钱，家里人都很失望。',hint:'(cờ bạc)',ans:'赌博'},
  {pre:'与其整天',blank:'空想',post:'，不如马上行动起来。',hint:'(nghĩ viển vông)',ans:'空想'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (屡次 · 依据 · 反复) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['他','屡次','在比赛中','获得','冠军','。'],ans:'他屡次在比赛中获得冠军。',audio:'他屡次在比赛中获得冠军。'},
  {words:['妈妈','屡次','提醒我','改掉','马虎的毛病','。'],ans:'妈妈屡次提醒我改掉马虎的毛病。',audio:'妈妈屡次提醒我改掉马虎的毛病。'},
  {words:['虽然','屡次','尝试失败','，','他却','从来没想过','放弃','。'],ans:'虽然屡次尝试失败，他却从来没想过放弃。',audio:'虽然屡次尝试失败，他却从来没想过放弃。'},
  {words:['我们','要','依据','不同的场合','变换','交际方式','。'],ans:'我们要依据不同的场合变换交际方式。',audio:'我们要依据不同的场合变换交际方式。'},
  {words:['你们','这样做','有','法律依据','吗','？'],ans:'你们这样做有法律依据吗？',audio:'你们这样做有法律依据吗？'},
  {words:['江崎公司','以','成年人的消费需求','为依据','设计产品','。'],ans:'江崎公司以成年人的消费需求为依据设计产品。',audio:'江崎公司以成年人的消费需求为依据设计产品。'},
  {words:['细心研究市场','，','细心研究','消费者的需求','。'],ans:'细心研究市场，细心研究消费者的需求。',audio:'细心研究市场，细心研究消费者的需求。'},
  {words:['沉默啊','！','沉默啊','！','不在沉默中爆发','，','就在沉默中灭亡','。'],ans:'沉默啊！沉默啊！不在沉默中爆发，就在沉默中灭亡。',audio:'沉默啊！沉默啊！不在沉默中爆发，就在沉默中灭亡。'},
  {words:['风雪','一天比一天','大','，','人们的干劲','一天比一天','猛','。'],ans:'风雪一天比一天大，人们的干劲一天比一天猛。',audio:'风雪一天比一天大，人们的干劲一天比一天猛。'},
  {words:['只要','遵循','这条规则','，','就','没有','不成功的道理','。'],ans:'只要遵循这条规则，就没有不成功的道理。',audio:'只要遵循这条规则，就没有不成功的道理。'},
  {words:['你','愈是','为消费者','考虑得周全','，','消费者','愈是会','关照你','。'],ans:'你愈是为消费者考虑得周全，消费者愈是会关照你。',audio:'你愈是为消费者考虑得周全，消费者愈是会关照你。'},
  {words:['创业','不是','赌博','，','创业','不能','靠空想','。'],ans:'创业不是赌博，创业不能靠空想。',audio:'创业不是赌博，创业不能靠空想。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'我们要____不同的场合，变换我们的交际方式。',opts:['依据','依靠','依赖','依然'],ans:0,
   exp:'依据 + N + V = căn cứ vào … mà … (练一练 (1) của sách). 依靠 = dựa vào (sức người, chỗ dựa); 依赖 = ỷ lại (bài 23); 依然 = vẫn.'},
  {wrong:'做任何事情都要____客观规律，不能想怎么做就怎么做。',opts:['遵守','服从','遵循','跟随'],ans:2,
   exp:'遵循规律 = tuân theo quy luật (đối tượng trừu tượng). 遵守 đi với 纪律 / 法律 / 时间; 服从 = phục tùng (mệnh lệnh); 跟随 = đi theo (người).'},
  {wrong:'危机之中往往____着新的机会。',opts:['培养','孕育','养育','生育'],ans:1,
   exp:'孕育着机会 = ẩn chứa (mầm mống) cơ hội — nghĩa bóng. 培养 = bồi dưỡng (nhân tài, thói quen); 养育 = nuôi nấng (con cái); 生育 = sinh đẻ.'},
  {wrong:'这种塑料盒子又轻又____，用了好几年都没坏。',opts:['耐心','热心','耐烦','耐用'],ans:3,
   exp:'耐用 = bền (dùng mấy năm không hỏng). 耐心 = kiên nhẫn; 热心 = nhiệt tình; 耐烦 chủ yếu dùng trong 不耐烦.'},
  {wrong:'为了____业务，公司今年又招聘了二十名员工。',opts:['扩散','补充','扩充','充满'],ans:2,
   exp:'扩充业务 = mở rộng nghiệp vụ. 扩散 = lan rộng (bệnh, tin đồn); 补充 = bù vào chỗ thiếu (补充业务 không phải cách nói quen); 充满 = tràn đầy.'},
  {wrong:'会议开始前，秘书已经____好了会议日程。',opts:['拟定','决定','肯定','固定'],ans:0,
   exp:'拟定日程 / 方案 = soạn ra (bản dự thảo). 决定 = quyết định; 肯定 = khẳng định; 固定 = cố định.'},
  {wrong:'销量下滑以后，他们及时调整了营销____。',opts:['谋略','战术','政策','策略'],ans:3,
   exp:'营销策略 = chiến lược tiếp thị (câu 练习3 của sách). 政策 = chính sách (nhà nước); 战术 = chiến thuật (quân sự, thi đấu); 谋略 = mưu lược (tài của người).'},
  {wrong:'欢迎大家____我们店新推出的越南咖啡。',opts:['品味','品尝','尝试','品质'],ans:1,
   exp:'品尝 + đồ ăn uống = nếm thử, thưởng thức. 品味 thiên về thưởng thức nghệ thuật, cuộc sống / "gu"; 尝试 = thử làm việc gì; 品质 = phẩm chất.'},
  {wrong:'老师话音刚落，同学们就____举手发言。',opts:['跳跃','踊跃','活跃','飞跃'],ans:1,
   exp:'踊跃 + 发言 / 参加 = hăng hái (trạng ngữ trước động từ). 活跃 thường làm vị ngữ (气氛很活跃); 跳跃 = nhảy; 飞跃 = nhảy vọt (phát triển).'},
  {wrong:'这次手术只需要____麻醉，病人不用太担心。',opts:['部分','全身','局面','局部'],ans:3,
   exp:'局部麻醉 = gây tê cục bộ (只需要 → chỉ một phần cơ thể). 全身麻醉 = gây mê toàn thân (trái ý 只需要…不用担心); 局面 = cục diện; 部分 không đi với 麻醉.'},
  {wrong:'我是新来的，以后请大家多多____。',opts:['关照','关心','关注','关怀'],ans:0,
   exp:'请多多关照 = mong được chiếu cố nhiều (câu xã giao cố định khi mới gặp). 关注 = chú ý theo dõi; 关怀 = quan tâm (trang trọng, bề trên với bề dưới — bài 21).'},
  {wrong:'天太晚了，咱们____找个饭馆吃点儿东西吧。',opts:['附近','最近','就近','接近'],ans:2,
   exp:'就近 là phó từ đứng trước cụm động từ (就近找个饭馆). 附近 là danh từ / tính từ, không làm trạng ngữ trước động từ (词语辨析 của bài); 最近 = gần đây (thời gian); 接近 = tiếp cận.'},
  {wrong:'做完练习以后，请____答案检查一遍。',opts:['对比','对待','照顾','对照'],ans:3,
   exp:'对照答案 = đối chiếu đáp án. 对比 = so sánh tương phản hai sự vật; 对待 = đối xử; 照顾 = chăm sóc.'},
  {wrong:'跟____不同的是，今年的运动会增加了很多新项目。',opts:['往往','以往','以后','来往'],ans:1,
   exp:'跟以往不同的是…… = điểm khác với trước đây là … (练习2 của sách). 往往 = thường thường; 以后 = sau này (mâu thuẫn với 增加了); 来往 = qua lại.'},
  {wrong:'这批零件的尺寸不符合____，必须全部退回。',opts:['规格','规矩','风格','格式'],ans:0,
   exp:'不符合规格 = không đúng quy cách (kích thước, chất lượng sản phẩm). 规矩 = phép tắc (lễ nghĩa); 风格 = phong cách; 格式 = định dạng (văn bản).'},
  {wrong:'近年来，报名参加HSK考试的人数逐年____。',opts:['递交','增添','递增','增进'],ans:2,
   exp:'逐年递增 = tăng dần từng năm (số liệu). 递交 = trao, nộp; 增添 = thêm (niềm vui, không khí — bài 35); 增进 = tăng cường (tình cảm, hiểu biết).'},
  {wrong:'这部小说情节____，读起来没有一点儿意思。',opts:['平凡','平安','平静','平庸'],ans:3,
   exp:'平庸 = tầm thường, xoàng (luôn là CHÊ — hợp với 没有一点儿意思). 平凡 = bình dị (trung tính, có khi khen); 平安 = bình an; 平静 = yên tĩnh.'},
  {wrong:'这家公司几乎____了全国的手机市场。',opts:['独立','垄断','判断','中断'],ans:1,
   exp:'垄断市场 = độc quyền thị trường. 独立 = độc lập; 判断 = phán đoán; 中断 = gián đoạn (bài 24).'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 38 + ôn từ HSK 6 bài 21–35 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tuy anh ấy nhiều lần khởi nghiệp thất bại, nhưng chưa bao giờ nản lòng, vì anh ấy tin rằng trong thất bại luôn ẩn chứa cơ hội.',zh:'虽然他屡次创业失败，但从来没有灰心过，因为他相信失败中总是孕育着机会。',py:'Suīrán tā lǚcì chuàngyè shībài, dàn cónglái méiyǒu huīxīnguo, yīnwèi tā xiāngxìn shībài zhōng zǒngshì yùnyùzhe jīhuì.',goiY:['虽然……但……','屡次','从来没有……过','孕育着'],giai:'Ba vế: nhượng bộ (虽然……但……) → nguyên nhân (因为). 屡次 đứng trước động từ, chỉ việc đã lặp lại nhiều lần (điểm ngữ pháp 1); 孕育着机会 = ẩn chứa cơ hội (nghĩa bóng).'},
  {vi:'Chỉ cần dựa vào nhu cầu thị trường để thiết kế sản phẩm, thì cho dù gặp phải lạm phát, doanh nghiệp cũng sẽ không bị ảnh hưởng quá lớn.',zh:'只要依据市场需求设计产品，即使碰上通货膨胀，企业也不会受到太大的影响。',py:'Zhǐyào yījù shìchǎng xūqiú shèjì chǎnpǐn, jíshǐ pèngshang tōnghuò péngzhàng, qǐyè yě bú huì shòudào tài dà de yǐngxiǎng.',goiY:['只要……','依据','即使……也……','通货膨胀'],giai:'依据 là giới từ: 依据 + N + V (điểm ngữ pháp 2). Câu lồng hai quan hệ: điều kiện (只要) + giả thiết nhượng bộ (即使……也……); 碰上 = gặp phải.'},
  {vi:'Đối chiếu với nhu cầu của du khách, cách làm trước kia quá lỗi thời, thế là hai anh em đồng tâm hiệp lực, phát huy sở trường của mỗi người.',zh:'对照游客的需求，以往的做法太过陈旧，于是兄弟俩齐心协力，发挥各自的专长。',py:'Duìzhào yóukè de xūqiú, yǐwǎng de zuòfǎ tài guò chénjiù, yúshì xiōngdì liǎ qíxīn-xiélì, fāhuī gèzì de zhuāncháng.',goiY:['对照','以往','陈旧','齐心协力','专长'],giai:'对照 + N đầu câu = xét theo, đối chiếu với; 以往的 + N = … trước kia; 陈旧 ôn bài 23. 于是 nối kết quả. 专长 đọc zhuāncháng.'},
  {vi:'Quán ăn nhỏ ấy hàng ngon giá rẻ, hương vị độc đáo; tuy chưa bao giờ dựa vào quảng cáo thổi phồng, nhưng làm ăn lại vô cùng phát đạt.',zh:'那家小饭馆物美价廉，风味独特，虽然从不靠广告吹捧，生意却十分兴旺。',py:'Nà jiā xiǎo fànguǎn wùměi-jiàlián, fēngwèi dútè, suīrán cóng bú kào guǎnggào chuīpěng, shēngyi què shífēn xīngwàng.',goiY:['物美价廉','风味独特','虽然……却……','吹捧','兴旺'],giai:'虽然 A，(chủ ngữ) 却 B — 却 đứng SAU chủ ngữ 生意. 物美价廉 làm vị ngữ, không thêm 很. 兴旺 = phát đạt (gần 兴隆 bài 21).'},
  {vi:'Bạn càng suy nghĩ chu đáo cho khách hàng, khách hàng càng sẵn lòng ủng hộ bạn; đây là một chân lý vĩnh hằng.',zh:'你愈是为顾客考虑得周全，顾客愈是愿意关照你，这是一条永恒的真理。',py:'Nǐ yù shì wèi gùkè kǎolǜ de zhōuquán, gùkè yù shì yuànyì guānzhào nǐ, zhè shì yì tiáo yǒnghéng de zhēnlǐ.',goiY:['愈是……，愈是……','关照','永恒'],giai:'愈……愈…… (bài 35) với hai chủ ngữ khác nhau: mỗi vế một chủ ngữ, 愈是 đứng sau chủ ngữ. 关照 ở đây = ủng hộ (khách hàng mua hàng của mình). 一条 → yì tiáo.'},
  {vi:'Mùa vắng khách du lịch, xe in ảnh còn có thể in hoa văn lên đồng phục học sinh, vì thế thu nhập có xu hướng tăng dần.',zh:'旅游淡季，彩印车还可以为学生的制服印图案，因此收益呈递增趋势。',py:'Lǚyóu dànjì, cǎiyìnchē hái kěyǐ wèi xuésheng de zhìfú yìn tú\'àn, yīncǐ shōuyì chéng dìzēng qūshì.',goiY:['淡季','为……V','制服','因此','递增'],giai:'Mốc thời gian (旅游淡季) đứng đầu câu; 为 + đối tượng + V = làm gì cho …; 收益 ôn bài 29; 呈……趋势 = có xu hướng … (văn viết).'},
  {vi:'Khởi nghiệp không phải đánh bạc, cũng không thể dựa vào suy nghĩ viển vông; thay vì cả ngày mơ mộng, chi bằng nghiêm túc nghiên cứu thị trường.',zh:'创业不是赌博，也不能靠空想，与其整天做梦，不如认真研究市场。',py:'Chuàngyè bú shì dǔbó, yě bù néng kào kōngxiǎng, yǔqí zhěngtiān zuòmèng, bùrú rènzhēn yánjiū shìchǎng.',goiY:['赌博','靠空想','与其……不如……'],giai:'与其 A，不如 B = thay vì A chi bằng B (ôn HSK 5). Hai vế đầu là phủ định song song (不是……，也不能……). 不是 → bú shì.'},
  {vi:'Công ty bỏ ra một khoản vốn đáng kể để mở rộng nghiệp vụ, chưa đến hai quý đã thu hồi được vốn.',zh:'公司投入了数额可观的资本来扩充业务，不到两个季度就收回了本钱。',py:'Gōngsī tóurùle shù\'é kěguān de zīběn lái kuòchōng yèwù, bú dào liǎng ge jìdù jiù shōuhuíle běnqián.',goiY:['数额可观','资本','扩充','不到……就……','季度','本钱'],giai:'V + 来 + V = làm … để … (mục đích); 不到 + thời gian + 就…… = chưa đến … đã … (nhanh hơn dự tính). 资本 (văn viết) và 本钱 (khẩu ngữ) đều là vốn.'},
  {vi:'Nếu không tìm ra khâu yếu của đối thủ cạnh tranh, thì chiến lược có hay đến mấy cũng khó mà phá vỡ thế độc quyền của họ.',zh:'如果找不出竞争对手的薄弱环节，策略再好也很难打破他们的垄断。',py:'Rúguǒ zhǎo bu chū jìngzhēng duìshǒu de bóruò huánjié, cèlüè zài hǎo yě hěn nán dǎpò tāmen de lǒngduàn.',goiY:['如果……','找不出','环节','再……也……','垄断'],giai:'找不出 = bổ ngữ khả năng phủ định; 再 + Adj + 也 = dù … đến mấy cũng (ôn HSK 5); 打破垄断 = phá thế độc quyền. 策略 đọc cèlüè.'},
  {vi:'Quần áo thể thao ở cửa hàng này đủ các cỡ, lại ở ngay gần trường, học sinh có thể mua ngay gần đó mà không phải đi xa.',zh:'这家店的运动服规格齐全，又在学校附近，学生们可以就近购买，不用跑远路。',py:'Zhè jiā diàn de yùndòngfú guīgé qíquán, yòu zài xuéxiào fùjìn, xuéshengmen kěyǐ jiùjìn gòumǎi, búyòng pǎo yuǎn lù.',goiY:['规格齐全','附近','就近','不用'],giai:'Phân biệt (词语辨析 của bài): 在学校附近 — 附近 là danh từ, làm tân ngữ của 在; 就近购买 — 就近 là phó từ, đứng trước động từ. 齐全 ôn bài 33; 不用 → búyòng.'}
];

// Chiều Trung → Việt — bám ý bài khoá
var translateDataRev = [
  {vi:'Những người nhiều lần khởi nghiệp nhưng lần nào cũng thất bại thảm hại luôn muốn biết: khởi nghiệp có bí quyết không?',zh:'屡次创业，却屡次惨遭失败的人总想知道，创业有窍门吗？',py:'Lǚcì chuàngyè, què lǚcì cǎn zāo shībài de rén zǒng xiǎng zhīdào, chuàngyè yǒu qiàomén ma?',goiY:['屡次 = nhiều lần','惨遭 = gặp phải (điều thảm hại)','窍门 = bí quyết, mẹo'],giai:'Cả cụm 屡次创业，却屡次惨遭失败的 là định ngữ dài cho 人 — dịch tiếng Việt đưa ra sau: "những người …". 却 nêu đối lập.'},
  {vi:'Nhu cầu thị trường có ở khắp nơi nhưng thường dễ bị bỏ qua; những việc làm ăn mà người khác chẳng thèm làm thường lại ẩn chứa cơ hội.',zh:'市场需求无处不在，却往往易被忽视，别人不屑做的生意，往往孕育着机会。',py:'Shìchǎng xūqiú wú chù bú zài, què wǎngwǎng yì bèi hūshì, biérén búxiè zuò de shēngyi, wǎngwǎng yùnyùzhe jīhuì.',goiY:['无处不在 = có ở khắp nơi','易被忽视 = dễ bị bỏ qua','不屑 = chẳng thèm','孕育 = ẩn chứa'],giai:'易 = 容易 (văn viết); 不屑做的生意 = việc làm ăn (người ta) chẳng thèm làm — 不屑 hàm ý coi thường.'},
  {vi:'Ông Vương thuê một quầy hàng trong trung tâm thương mại; trừ đi tiền thuê mặt bằng và tiền thuế, thu nhập mỗi tháng vẫn trên một vạn tệ.',zh:'王先生在商场租了柜台，扣掉场地租金和税金，月收入上万。',py:'Wáng xiānsheng zài shāngchǎng zūle guìtái, kòudiào chǎngdì zūjīn hé shuìjīn, yuè shōurù shàng wàn.',goiY:['柜台 = quầy hàng','扣掉 = trừ đi','上万 = trên một vạn'],giai:'扣掉…… là vế điều kiện ngầm ("sau khi trừ …"); 上 + số = vượt quá, trên (上万, 上百).'},
  {vi:'Nếu tư duy của bạn tầm thường thì sẽ không phát hiện ra cơ hội kinh doanh; chỉ cần bạn chăm chỉ, thị trường sẽ nằm trong tay bạn.',zh:'如果你思维平庸，就发现不了商机；只要你勤劳，市场就捏在你的手里。',py:'Rúguǒ nǐ sīwéi píngyōng, jiù fāxiàn bu liǎo shāngjī; zhǐyào nǐ qínláo, shìchǎng jiù niē zài nǐ de shǒu li.',goiY:['平庸 = tầm thường','商机 = cơ hội kinh doanh','捏在手里 = nắm trong tay'],giai:'Hai vế giả thiết song song (如果……就……；只要……就……). 捏 nghĩa gốc là nhón, cầm bằng đầu ngón tay → nắm chắc.'},
  {vi:'Nghiên cứu đối thủ cạnh tranh, từ đó tìm ra điểm yếu trong sản phẩm và khâu yếu trong tiếp thị của họ, là một trong những cách hiệu quả để nắm bắt cơ hội kinh doanh.',zh:'研究竞争对手，从中找出其产品的弱点及营销的薄弱环节，是捕捉商机的有效方法之一。',py:'Yánjiū jìngzhēng duìshǒu, cóngzhōng zhǎochū qí chǎnpǐn de ruòdiǎn jí yíngxiāo de bóruò huánjié, shì bǔzhuō shāngjī de yǒuxiào fāngfǎ zhī yī.',goiY:['从中 = từ đó','其 = của họ (văn viết)','薄弱环节 = khâu yếu','之一 = một trong những'],giai:'Chủ ngữ là cả cụm động từ dài (研究……环节), vị ngữ 是……之一. 及 = và (văn viết).'},
  {vi:'Công ty Ezaki mạnh dạn đi nước cờ mới, lấy nhu cầu tiêu dùng của người lớn làm căn cứ để thiết kế sản phẩm, lại vạch ra chiến lược tiếp thị tương ứng.',zh:'江崎公司大胆布局，以成年人的消费需求为依据设计产品，又拟定了相应的营销策略。',py:'Jiāngqí gōngsī dàdǎn bùjú, yǐ chéngniánrén de xiāofèi xūqiú wéi yījù shèjì chǎnpǐn, yòu nǐdìngle xiāngyìng de yíngxiāo cèlüè.',goiY:['布局 = bố trí chiến lược','以……为依据 = lấy … làm căn cứ','拟定 = vạch ra','策略 = chiến lược'],giai:'以 A 为依据 + V = lấy A làm căn cứ để … (依据 danh từ — điểm ngữ pháp 2). 相应 ôn bài 21.'},
  {vi:'Sản phẩm của Ezaki hàng tốt giá rẻ; nếm thử xong, người tiêu dùng đua nhau mua, thu nhập tài chính tăng vọt như giếng phun.',zh:'江崎的产品物美价廉，品尝后，消费者购买踊跃，财务收入呈井喷式增长。',py:'Jiāngqí de chǎnpǐn wùměi-jiàlián, pǐncháng hòu, xiāofèizhě gòumǎi yǒngyuè, cáiwù shōurù chéng jǐngpēnshì zēngzhǎng.',goiY:['物美价廉 = hàng tốt giá rẻ','品尝 = nếm thử','踊跃 = nô nức','井喷式 = vọt lên như giếng phun'],giai:'购买踊跃 = mua (một cách) nô nức — tính từ đứng sau làm vị ngữ; 呈……增长 = thể hiện sự tăng trưởng ….'},
  {vi:'Du khách có thể in tráng ảnh ngay tại chỗ, in chân dung mình thích lên hàng dệt làm kỷ niệm du lịch.',zh:'游客可以在这儿就近冲印照片，把喜欢的肖像印在纺织品上，作为旅游留念。',py:'Yóukè kěyǐ zài zhèr jiùjìn chōngyìn zhàopiàn, bǎ xǐhuan de xiàoxiàng yìn zài fǎngzhīpǐn shang, zuòwéi lǚyóu liúniàn.',goiY:['就近 = ngay ở gần','冲印 = in tráng (ảnh)','肖像 = chân dung','留念 = làm kỷ niệm'],giai:'Câu 把 + V + 在 + nơi chốn; 作为…… = làm (vai trò) ….'},
  {vi:'Ưu thế lớn nhất của xe in ảnh lưu động là tiện lợi, nhanh chóng, không như trước kia phải đợi đến mấy ngày.',zh:'流动彩印车最大的优势就是方便快捷，不像以往，要等上好几天。',py:'Liúdòng cǎiyìnchē zuì dà de yōushì jiù shì fāngbiàn kuàijié, bú xiàng yǐwǎng, yào děngshang hǎo jǐ tiān.',goiY:['优势 = ưu thế','快捷 = nhanh chóng','以往 = trước kia','等上好几天 = đợi đến mấy ngày'],giai:'不像以往 = không như trước kia; V + 上 + thời lượng nhấn mạnh "lâu đến mức …"; 好几 = khá nhiều.'},
  {vi:'Có thể dự đoán chính xác nhu cầu tiềm ẩn của thị trường, có ý thức đi trước thời đại, là tố chất mà người kinh doanh bắt buộc phải có.',zh:'能够准确预测市场的潜在需求，具有超前意识，是经营者必备的素质。',py:'Nénggòu zhǔnquè yùcè shìchǎng de qiánzài xūqiú, jùyǒu chāoqián yìshi, shì jīngyíngzhě bìbèi de sùzhì.',goiY:['预测 = dự đoán','潜在 = tiềm ẩn','超前意识 = ý thức đi trước','必备 = bắt buộc phải có'],giai:'Chủ ngữ là hai cụm động từ song song (能够……，具有……); 预测 ôn bài 23; 必备的 + N = … không thể thiếu.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 196): tóm tắt (缩写) bài khoá khoảng 400 chữ, tham khảo bài tập 5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'本课通过几个典型案例告诉我们在创业时如何依据市场规则捕捉商机。市场需求无处不在，别人没发现，或是不屑做的生意，往往孕育着机会。研究竞争对手，从中找出其产品的弱点及营销的薄弱环节，也是捕捉商机的有效方法之一。能够准确预测市场的潜在需求，具有超前意识，也是经营者必备的素质。请参考练习5，把课文缩写成400字左右的短文。',
  prompt:'Bài học qua mấy ví dụ tiêu biểu cho chúng ta biết khi khởi nghiệp làm thế nào để dựa vào quy luật thị trường mà nắm bắt cơ hội kinh doanh. Nhu cầu thị trường có ở khắp nơi, những việc làm ăn người khác chưa phát hiện ra hoặc chẳng thèm làm thường ẩn chứa cơ hội. Nghiên cứu đối thủ cạnh tranh, từ đó tìm ra điểm yếu trong sản phẩm và khâu yếu trong tiếp thị của họ, cũng là một trong những cách hiệu quả để nắm bắt cơ hội. Có thể dự đoán chính xác nhu cầu tiềm ẩn của thị trường, có ý thức đi trước, cũng là tố chất người kinh doanh phải có. Hãy tham khảo bài tập 5, tóm tắt bài khoá thành đoạn văn khoảng 400 chữ.',
  dan:[
    {hoi:'创业有什么窍门？请举例说明。',goiY:'①不可盲目，依据市场规则　②刮胡子刀，方便面，罐装八宝粥'},
    {hoi:'王先生是怎样独具慧眼，寻找商机的？',goiY:'①手机电池正常寿命……，往往用一年……，换新电池……，美国人发明了……　②王先生买下……，租柜台……，月收入……，轻松收回……　③如果你没有眼光，……，如果你思维平庸，……'},
    {hoi:'江崎公司怎样从竞争对手的产品缺陷中捕捉商机？',goiY:'①劳特产品的不足：眼光仍停留在儿童身上，口味单一，外观老旧，售价不方便购买者　②江崎公司：推出四种功能型泡泡糖，精心设计包装和造型，定价方便购买者，消费者购买……，财务收入……　③只要你细心研究……，就会得到……'},
    {hoi:'周家兄弟怎样从市场的潜在需求中寻找商机的？',goiY:'①流动彩印车的功能：冲印照片，把……印在纺织品上　②流动彩印车的由来：发明者；哥哥是……，弟弟是……；他们发现……；发挥各自专长，发明……　③流动彩印车大受欢迎：方便快捷；旅游淡季，还可以……；有了知名度，收益……'}
  ],
  tuNen:['屡次','依据','孕育','不屑','物美价廉','踊跃','齐心协力','专长','递增','空想'],
  cauTruc:[
    {ten:'……的窍门就是……，要依据……', nhan:'Mở bài — nêu luận điểm', vd:'创业的窍门就是不可盲目，要依据市场规则捕捉商机。', khi:'Câu chủ đề của cả bài tóm tắt; dùng điểm ngữ pháp 依据 (giới từ).'},
    {ten:'A、B、C，都因为……而……', nhan:'Gom ví dụ', vd:'刮胡刀、方便面、罐装八宝粥，都因为符合市场需求而大获成功。', khi:'Gom ba ví dụ thành một câu liệt kê, không kể chi tiết từng cái.'},
    {ten:'发现…… → 于是…… → 结果……', nhan:'Tóm mỗi câu chuyện', vd:'劳特的产品口味单一，于是江崎公司推出四种功能型泡泡糖，结果财务收入呈井喷式增长。', khi:'Mỗi đoạn thân bài (王先生 · 江崎 · 周家兄弟) tóm theo trình tự vấn đề – cách làm – kết quả.'},
    {ten:'从……中（也能）捕捉 / 寻找商机', nhan:'Câu chuyển đoạn', vd:'研究竞争对手的产品缺陷，也能捕捉商机。', khi:'Mở đầu mỗi đoạn bằng cách làm chính (lấy từ tiêu đề nhỏ của bài khoá), dùng 也 để nối mạch.'},
    {ten:'如果……，就……；如果……，就……', nhan:'Phép lặp (反复)', vd:'如果你没有眼光，就看不到商机；如果你思维平庸，就发现不了商机。', khi:'Giữ phép 反复 của bài (篇章修辞) để nhấn mạnh ý, nhưng chỉ một hai chỗ, không lặp thừa.'},
    {ten:'可见，……', nhan:'Kết bài', vd:'可见，创业不能靠空想，要能准确预测市场的潜在需求。', khi:'Rút ra kết luận chung như đoạn cuối bài khoá.'}
  ],
  checklist:[
    'Bài tóm tắt có khoảng 400 chữ Hán (khoảng 350–460) chưa?',
    'Có đủ bốn phần theo bảng bài tập 5: bí quyết khởi nghiệp + ví dụ; ông Vương; công ty Ezaki; anh em họ Chu chưa?',
    'Mỗi câu chuyện đã tóm được "phát hiện nhu cầu / điểm yếu → cách làm → kết quả" bằng lời mình, không chép nguyên đoạn dài chưa?',
    'Đã dùng 屡次, 依据 (hai điểm ngữ pháp) và ít nhất 6 từ mới (孕育, 不屑, 物美价廉, 踊跃, 齐心协力, 专长…) chưa?',
    'Có giữ ít nhất một chỗ dùng phép 反复 và kết bài bằng 可见，…… chưa?'
  ],
  model:{
    zh:'慧眼捕捉商机\n屡次创业却屡次失败的人总想知道创业的窍门。窍门就是创业不可盲目，要依据市场规则捕捉商机。可替换刮胡刀、方便面、罐装八宝粥，都因为符合市场需求而大获成功。\n市场需求无处不在，别人没发现或是不屑做的生意，往往孕育着机会。手机电池往往用一年就坏了，美国人发明了修复电池的机器，王先生花四万元买下它，在商场租了柜台，月收入上万，不到两个季度就轻松收回了本钱。如果你没有眼光，就看不到商机；如果你思维平庸，就发现不了商机。\n研究竞争对手的产品缺陷，也能捕捉商机。当年劳特垄断了日本泡泡糖市场，可是它的眼光仍停留在儿童身上，口味单一，外观老旧，售价也不方便购买者。江崎公司以成年人的需求为依据，推出四种功能型泡泡糖，定价方便购买者。产品物美价廉，消费者购买踊跃，财务收入呈井喷式增长。只要你细心研究市场，就会得到消费者的认可。\n从市场的潜在需求中也能寻找商机。周家兄弟发现游客不愿为冲洗照片等好几天，于是齐心协力，发挥各自的专长，发明了流动彩印车，游客可以就近冲印照片。彩印车方便快捷，旅游淡季还能为学生的制服印图案，收益呈递增趋势。\n可见，创业不能靠空想，能准确预测市场的潜在需求，才能抓住商机。',
    py:'Huìyǎn Bǔzhuō Shāngjī\nLǚcì chuàngyè què lǚcì shībài de rén zǒng xiǎng zhīdào chuàngyè de qiàomén. Qiàomén jiù shì chuàngyè bù kě mángmù, yào yījù shìchǎng guīzé bǔzhuō shāngjī. Kě tìhuàn guāhúdāo, fāngbiànmiàn, guànzhuāng bābǎozhōu, dōu yīnwèi fúhé shìchǎng xūqiú ér dà huò chénggōng.\nShìchǎng xūqiú wú chù bú zài, biérén méi fāxiàn huò shì búxiè zuò de shēngyi, wǎngwǎng yùnyùzhe jīhuì. Shǒujī diànchí wǎngwǎng yòng yì nián jiù huài le, Měiguórén fāmíngle xiūfù diànchí de jīqì, Wáng xiānsheng huā sì wàn yuán mǎixià tā, zài shāngchǎng zūle guìtái, yuè shōurù shàng wàn, bú dào liǎng ge jìdù jiù qīngsōng shōuhuíle běnqián. Rúguǒ nǐ méiyǒu yǎnguāng, jiù kàn bu dào shāngjī; rúguǒ nǐ sīwéi píngyōng, jiù fāxiàn bu liǎo shāngjī.\nYánjiū jìngzhēng duìshǒu de chǎnpǐn quēxiàn, yě néng bǔzhuō shāngjī. Dāngnián Láotè lǒngduànle Rìběn pàopàotáng shìchǎng, kěshì tā de yǎnguāng réng tíngliú zài értóng shēnshang, kǒuwèi dānyī, wàiguān lǎojiù, shòujià yě bù fāngbiàn gòumǎizhě. Jiāngqí gōngsī yǐ chéngniánrén de xūqiú wéi yījù, tuīchū sì zhǒng gōngnéngxíng pàopàotáng, dìngjià fāngbiàn gòumǎizhě. Chǎnpǐn wùměi-jiàlián, xiāofèizhě gòumǎi yǒngyuè, cáiwù shōurù chéng jǐngpēnshì zēngzhǎng. Zhǐyào nǐ xìxīn yánjiū shìchǎng, jiù huì dédào xiāofèizhě de rènkě.\nCóng shìchǎng de qiánzài xūqiú zhōng yě néng xúnzhǎo shāngjī. Zhōu jiā xiōngdì fāxiàn yóukè bú yuàn wèi chōngxǐ zhàopiàn děng hǎo jǐ tiān, yúshì qíxīn-xiélì, fāhuī gèzì de zhuāncháng, fāmíngle liúdòng cǎiyìnchē, yóukè kěyǐ jiùjìn chōngyìn zhàopiàn. Cǎiyìnchē fāngbiàn kuàijié, lǚyóu dànjì hái néng wèi xuésheng de zhìfú yìn tú\'àn, shōuyì chéng dìzēng qūshì.\nKějiàn, chuàngyè bù néng kào kōngxiǎng, néng zhǔnquè yùcè shìchǎng de qiánzài xūqiú, cái néng zhuāzhù shāngjī.',
    vn:'"Tuệ nhãn" nắm bắt thời cơ\nNhững người khởi nghiệp nhiều lần mà lần nào cũng thất bại luôn muốn biết bí quyết khởi nghiệp. Bí quyết chính là khởi nghiệp không được mù quáng, phải dựa vào quy luật thị trường để nắm bắt cơ hội. Dao cạo râu thay được lưỡi, mì ăn liền, cháo bát bảo đóng lon đều thành công lớn vì phù hợp nhu cầu thị trường.\nNhu cầu thị trường có ở khắp nơi; những việc làm ăn người khác chưa phát hiện ra hoặc chẳng thèm làm thường ẩn chứa cơ hội. Pin điện thoại thường dùng một năm là hỏng; người Mỹ phát minh ra máy phục hồi pin, ông Vương bỏ bốn vạn tệ mua về, thuê quầy trong trung tâm thương mại, thu nhập mỗi tháng trên một vạn, chưa đến hai quý đã dễ dàng thu hồi vốn. Nếu bạn không có con mắt nhìn xa thì không thấy được cơ hội; nếu tư duy tầm thường thì không phát hiện ra cơ hội.\nNghiên cứu khiếm khuyết trong sản phẩm của đối thủ cũng có thể nắm bắt cơ hội. Hồi ấy Lotte độc quyền thị trường kẹo cao su Nhật Bản, nhưng họ vẫn chỉ nhìn vào trẻ em, mùi vị đơn điệu, bề ngoài cũ kỹ, giá bán cũng bất tiện cho người mua. Công ty Ezaki lấy nhu cầu của người lớn làm căn cứ, tung ra bốn loại kẹo cao su theo công dụng, định giá thuận tiện cho người mua. Sản phẩm tốt mà rẻ, người tiêu dùng đua nhau mua, thu nhập tăng vọt như giếng phun. Chỉ cần tỉ mỉ nghiên cứu thị trường là sẽ được người tiêu dùng công nhận.\nTừ nhu cầu tiềm ẩn của thị trường cũng có thể tìm ra cơ hội. Anh em nhà họ Chu phát hiện du khách không muốn đợi mấy ngày chỉ để rửa ảnh, thế là đồng tâm hiệp lực, phát huy sở trường của mỗi người, phát minh ra xe in ảnh lưu động, du khách có thể in ảnh ngay tại chỗ. Xe in tiện lợi nhanh chóng, mùa vắng khách còn in hoa văn lên đồng phục học sinh, thu nhập có xu hướng tăng dần.\nCó thể thấy, khởi nghiệp không thể dựa vào suy nghĩ viển vông; phải dự đoán chính xác nhu cầu tiềm ẩn của thị trường mới nắm được cơ hội.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容 (4 dòng)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (4 dòng: bí quyết khởi nghiệp · ông Vương · công ty Ezaki · anh em họ Chu). Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, nhìn gợi ý, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 屡次 · 依据 · 不屑 · 孕育 · 耐用 · 季度 · 本钱 · 平庸 · 垄断 · 物美价廉 · 踊跃 · 就近 · 齐心协力 · 专长 · 淡季 · 递增.',
  questions:[
    {q_zh:'创业有什么窍门？请举例说明。',
     q_vn:'Khởi nghiệp có bí quyết gì? Hãy nêu ví dụ minh hoạ.',
     hint:'①不可盲目，依据市场规则　②刮胡子刀，方便面，罐装八宝粥',
     sample:'创业当然有窍门，窍门就是不可盲目，要依据市场规则捕捉商机。比如吉列先生发明的刮胡子刀、安藤百福发明的方便面、戚石川兄弟发明的罐装八宝粥，都受到了市场热捧，给创业者带来了数额可观的财富。',
     sample_vn:'Khởi nghiệp đương nhiên có bí quyết, đó là không được mù quáng, phải dựa vào quy luật thị trường để nắm bắt cơ hội. Chẳng hạn dao cạo râu do ông Gillette phát minh, mì ăn liền do Momofuku Ando phát minh, cháo bát bảo đóng lon do anh em Thích Thạch Xuyên phát minh đều được thị trường săn đón, mang lại cho người khởi nghiệp khối của cải đáng kể.',
     note:'Trả lời thẳng trước (窍门就是……), rồi 比如 + ba ví dụ; dùng 依据 (điểm ngữ pháp 2) và 数额可观.'},
    {q_zh:'王先生是怎样独具慧眼，寻找商机的？',
     q_vn:'Ông Vương đã dùng con mắt tinh tường tìm ra cơ hội kinh doanh như thế nào?',
     hint:'①手机电池正常寿命……，往往用一年……，换新电池……，美国人发明了……　②王先生买下……，租柜台……，月收入……，轻松收回……　③如果你没有眼光，……，如果你思维平庸，……',
     sample:'手机电池的正常寿命是5至6年，可是往往用一年就坏了，换新电池又很贵。美国人发明了一种能修复电池的机器。王先生在博览会上看到后，花4万元买下了它，在商场租了柜台，月收入上万，不到两个季度就轻松收回了本钱。如果你没有眼光，就看不到商机；如果你思维平庸，就发现不了商机。',
     sample_vn:'Tuổi thọ bình thường của pin điện thoại là 5–6 năm, nhưng thường dùng một năm là hỏng, thay pin mới lại đắt. Người Mỹ phát minh ra một loại máy có thể phục hồi pin. Ông Vương thấy nó ở hội chợ, bỏ 40 nghìn tệ mua về, thuê quầy trong trung tâm thương mại, thu nhập mỗi tháng trên một vạn, chưa đến hai quý đã dễ dàng thu hồi vốn. Nếu bạn không có con mắt nhìn xa thì không thấy cơ hội; nếu tư duy tầm thường thì không phát hiện ra cơ hội.',
     note:'Đi đúng ba ý: vấn đề (电池不耐用) → cách làm (买下、租柜台) → kết quả (收回本钱); kết bằng câu 反复 如果……，就……；如果……，就…….'},
    {q_zh:'江崎公司怎样从竞争对手的产品缺陷中捕捉商机？',
     q_vn:'Công ty Ezaki đã nắm bắt cơ hội từ khiếm khuyết trong sản phẩm của đối thủ như thế nào?',
     hint:'①劳特产品的不足：眼光仍停留在儿童身上，口味单一，外观老旧，售价不方便购买者　②江崎公司：推出四种功能型泡泡糖，精心设计包装和造型，定价方便购买者，消费者购买……，财务收入……　③只要你细心研究……，就会得到……',
     sample:'当年日本泡泡糖市场大部分被劳特垄断。江崎公司研究后发现，劳特产品有四个不足：眼光仍停留在儿童身上，口味单一，外观老旧，售价也不方便购买者。于是江崎公司推出了四种功能型泡泡糖，精心设计包装和造型，定价分50和100日元两种，方便购买者。结果消费者购买踊跃，财务收入呈井喷式增长。所以，只要你细心研究市场，就会得到消费者的认可。',
     sample_vn:'Hồi ấy thị trường kẹo cao su Nhật phần lớn bị Lotte độc quyền. Công ty Ezaki nghiên cứu và phát hiện sản phẩm Lotte có bốn điểm chưa tốt: chỉ nhìn vào trẻ em, mùi vị đơn điệu, bề ngoài cũ kỹ, giá bán bất tiện cho người mua. Thế là Ezaki tung ra bốn loại kẹo cao su theo công dụng, dày công thiết kế bao bì và kiểu dáng, định giá hai mức 50 và 100 yên cho tiện người mua. Kết quả người tiêu dùng đua nhau mua, thu nhập tăng vọt như giếng phun. Vì vậy, chỉ cần tỉ mỉ nghiên cứu thị trường là sẽ được người tiêu dùng công nhận.',
     note:'Liệt kê bốn điểm yếu bằng dấu phẩy, không cần 一、二、三; dùng 于是 → 结果 → 所以 để nối mạch.'},
    {q_zh:'周家兄弟怎样从市场的潜在需求中寻找商机的？',
     q_vn:'Anh em nhà họ Chu đã tìm ra cơ hội từ nhu cầu tiềm ẩn của thị trường như thế nào?',
     hint:'①流动彩印车的功能：冲印照片，把……印在纺织品上　②流动彩印车的由来：发明者；哥哥是……，弟弟是……；他们发现……；发挥各自专长，发明……　③流动彩印车大受欢迎：方便快捷；旅游淡季，还可以……；有了知名度，收益……',
     sample:'在台湾的观光区，流动彩印车可以让游客就近冲印照片，还能把喜欢的图案、肖像印在纺织品上。它的发明者是周家两兄弟，哥哥是汽车维修工，弟弟是摄影发烧友。他们发现传统冲印要等好几天，太过陈旧，于是齐心协力，发挥各自专长，发明了流动彩印车。彩印车方便快捷，大受欢迎；旅游淡季，还可以为学生的制服印图案。它很快就有了知名度，收益呈递增趋势。',
     sample_vn:'Ở khu tham quan tại Đài Loan, xe in ảnh lưu động giúp du khách in ảnh ngay tại chỗ, còn in được hoa văn, chân dung yêu thích lên hàng dệt. Người phát minh là hai anh em nhà họ Chu: anh là thợ sửa ô tô, em mê nhiếp ảnh. Họ thấy cách in tráng truyền thống phải đợi mấy ngày, quá lỗi thời, thế là đồng lòng, phát huy sở trường của mỗi người, phát minh ra xe in ảnh lưu động. Xe in tiện lợi nhanh chóng, rất được ưa chuộng; mùa vắng khách còn in hoa văn lên đồng phục học sinh. Nó nhanh chóng nổi tiếng, thu nhập tăng dần.',
     note:'Theo đúng thứ tự gợi ý: 功能 → 由来 → 大受欢迎; nhớ phân biệt 就近 (phó từ, trước động từ) với 附近.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 38.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 38',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你这个手机用了三年了吧？电池还行吗？'},
            {sp:'男',zh:'早就不耐用了，充一次电用不了半天。我打算就近找家维修店换块电池。'}],
     q:'男的打算怎么做？',qvn:'Người đàn ông định làm gì?',
     opts:['买一部新手机','换一块电池','把手机送给别人','去很远的大商场'],ans:1,
     why:'我打算就近找家维修店换块电池 → định thay pin ở tiệm sửa gần đó. Pin 不耐用 (không bền) chứ không phải mua máy mới.',
     words:['耐用','就近']},

    {n:2,
     lines:[{sp:'男',zh:'这家小饭馆的菜真不错，价格也不贵。'},
            {sp:'女',zh:'是啊，物美价廉，风味独特，所以每天中午都有很多人排队。'}],
     q:'关于这家饭馆，可以知道什么？',qvn:'Về quán ăn này, có thể biết điều gì?',
     opts:['菜很贵','环境很好','服务员很热情','生意很好，常有人排队'],ans:3,
     why:'物美价廉……每天中午都有很多人排队 → làm ăn tốt, luôn có người xếp hàng. Món ăn KHÔNG đắt.',
     words:['物美价廉','风味']},

    {n:3,
     lines:[{sp:'女',zh:'听说你们公司上个季度收入下滑了？'},
            {sp:'男',zh:'是啊，一方面进入了淡季，一方面受通货膨胀的影响。好在我们及时调整了策略，这个月开始回升了。'}],
     q:'这个月公司的情况怎么样？',qvn:'Tháng này tình hình công ty thế nào?',
     opts:['收入开始回升','收入继续下滑','刚进入淡季','公司要关门了'],ans:0,
     why:'这个月开始回升了 → tháng này thu nhập bắt đầu tăng lại. Sụt giảm là chuyện của quý trước.',
     words:['季度','淡季','通货膨胀','策略']},

    {n:4,
     lines:[{sp:'男',zh:'小李这次又没通过面试，这已经是第五次了。'},
            {sp:'女',zh:'他屡次失败，却一点儿也不灰心，我相信他早晚会成功的。'}],
     q:'女的觉得小李怎么样？',qvn:'Người phụ nữ thấy Tiểu Lý thế nào?',
     opts:['应该换个工作','运气太差','很有毅力，早晚会成功','面试准备得不够'],ans:2,
     why:'屡次失败，却一点儿也不灰心……早晚会成功的 → cô ấy tin Tiểu Lý kiên trì và sớm muộn sẽ thành công.',
     words:['屡次']},

    {n:5,
     lines:[{sp:'女',zh:'你怎么不参加这次的创业大赛？'},
            {sp:'男',zh:'我还没想好做什么项目。创业可不是赌博，不能靠空想，我得先好好研究一下市场需求。'}],
     q:'男的为什么不参加比赛？',qvn:'Vì sao người đàn ông không tham gia cuộc thi?',
     opts:['他对创业没兴趣','他没有资本','他觉得比赛太难','他还没想好项目，要先研究市场'],ans:3,
     why:'我还没想好做什么项目……得先好好研究一下市场需求 → chưa nghĩ ra dự án, muốn nghiên cứu thị trường trước.',
     words:['赌博','空想']},

    {n:6,
     lines:[{sp:'男',zh:'经理，新来的小王和小张合作得怎么样？'},
            {sp:'女',zh:'挺好的。一个擅长设计，一个擅长营销，两个人发挥各自的专长，齐心协力，这次的方案做得特别漂亮。'}],
     q:'关于小王和小张，下列哪项正确？',qvn:'Về Tiểu Vương và Tiểu Trương, điều nào dưới đây đúng?',
     opts:['合作得很好','都擅长设计','意见不合','方案还没做完'],ans:0,
     why:'挺好的……齐心协力，这次的方案做得特别漂亮 → hai người hợp tác rất tốt; mỗi người giỏi một mảng.',
     words:['专长','齐心协力']},

    {n:7,
     lines:[{sp:'女',zh:'你们这家店开了才半年，就已经收回本钱了？'},
            {sp:'男',zh:'对。我们以往也开过店，但都失败了。这次我们先对照顾客的需求做了调查，所以收益一直呈递增趋势。'}],
     q:'男的这次开店和以往有什么不同？',qvn:'Lần mở cửa hàng này của người đàn ông khác trước kia ở điểm nào?',
     opts:['店开得更大','价格更便宜','先调查了顾客的需求','请了更多员工'],ans:2,
     why:'这次我们先对照顾客的需求做了调查 → lần này điều tra nhu cầu khách hàng trước.',
     words:['本钱','以往','对照','递增']},

    {n:8,
     lines:[{sp:'男',zh:'很多人以为创业靠的是运气，其实不然。成功的创业者往往都有一双慧眼：他们能发现别人没发现或是不屑做的生意，能从竞争对手的产品缺陷中找到机会，还能准确预测市场的潜在需求。所以说，创业不是赌博，只要依据市场需求，就能捕捉到商机。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn nói chủ yếu muốn cho chúng ta biết điều gì?',
     opts:['创业主要靠运气','创业要依据市场需求，用慧眼捕捉商机','创业需要很多资本','竞争对手越少越好'],ans:1,
     why:'Câu kết 创业不是赌博，只要依据市场需求，就能捕捉到商机 là ý chính; ý "靠运气" bị bác bỏ (其实不然).',
     words:['不屑','赌博','依据']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG GIAO TIẾP
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn người Trung Quốc sang Hà Nội chơi, hỏi em có món gì vừa ngon vừa rẻ.',
     a:{sp:'Bạn',zh:'河内有什么好吃又便宜的东西吗？',vn:'Hà Nội có món gì vừa ngon vừa rẻ không?'},
     need:['Dùng 物美价廉','Dùng 风味'],
     sample:'你一定要尝尝河内的烤肉米线，物美价廉，风味独特，一碗才三四万越南盾。',
     samplePy:'Nǐ yídìng yào chángchang Hénèi de kǎoròu mǐxiàn, wùměi-jiàlián, fēngwèi dútè, yì wǎn cái sān-sì wàn Yuènándùn.',
     sampleVn:'Cậu nhất định phải nếm thử bún chả Hà Nội, ngon bổ rẻ, hương vị độc đáo, một bát chỉ ba bốn chục nghìn đồng.',
     tip:'Giới thiệu món ăn: tên món → đánh giá (物美价廉, 风味独特) → giá cụ thể (才 + số tiền = chỉ có …).'},

    {scene:'Ngày đầu em đi thực tập ở một công ty, trưởng phòng giới thiệu em với mọi người.',
     a:{sp:'Trưởng phòng',zh:'这是新来的实习生，大家欢迎！',vn:'Đây là thực tập sinh mới đến, mọi người chào đón nào!'},
     need:['Dùng 专长','Dùng 关照'],
     sample:'大家好，我叫阿明，我的专长是平面设计。我刚来，很多地方还不懂，请大家多多关照！',
     samplePy:'Dàjiā hǎo, wǒ jiào Ā Míng, wǒ de zhuāncháng shì píngmiàn shèjì. Wǒ gāng lái, hěn duō dìfang hái bù dǒng, qǐng dàjiā duōduō guānzhào!',
     sampleVn:'Chào mọi người, em là Minh, sở trường của em là thiết kế đồ hoạ. Em mới đến, nhiều chỗ còn chưa biết, mong mọi người chiếu cố nhiều ạ!',
     tip:'Tự giới thiệu nơi làm việc: tên → sở trường (专长) → khiêm tốn (很多地方还不懂) → 请多多关照 (câu xã giao cố định).'},

    {scene:'Bạn thân định dồn hết tiền tiết kiệm mở quán trà sữa vì "thấy ai cũng làm giàu".',
     a:{sp:'Bạn',zh:'我要把所有的钱都拿出来开奶茶店，别人都赚了大钱！',vn:'Tớ sẽ bỏ hết tiền ra mở quán trà sữa, người khác đều kiếm bộn rồi!'},
     need:['Dùng 依据','Dùng 空想 hoặc 赌博'],
     sample:'创业可不是赌博啊！你得先依据市场需求做个调查，看看附近已经有几家奶茶店了，不能只靠空想。',
     samplePy:'Chuàngyè kě bú shì dǔbó a! Nǐ děi xiān yījù shìchǎng xūqiú zuò ge diàochá, kànkan fùjìn yǐjīng yǒu jǐ jiā nǎichádiàn le, bù néng zhǐ kào kōngxiǎng.',
     sampleVn:'Khởi nghiệp đâu phải đánh bạc! Cậu phải dựa vào nhu cầu thị trường làm một cuộc khảo sát trước, xem quanh đây đã có mấy quán trà sữa rồi, không thể chỉ dựa vào tưởng tượng.',
     tip:'Khuyên can: phủ định mạnh (可不是……啊) → đề xuất cụ thể (得先……) → nhắc lại lý lẽ (不能只靠……).'},

    {scene:'Em là lớp trưởng, cô chủ nhiệm nhờ em kêu gọi cả lớp tham gia quyên góp sách cho trẻ em vùng cao.',
     a:{sp:'Cô chủ nhiệm',zh:'你跟同学们说说这次捐书活动吧。',vn:'Em nói với các bạn về hoạt động quyên góp sách lần này nhé.'},
     need:['Dùng 踊跃','Dùng 齐心协力'],
     sample:'同学们，这周五我们要给山区的孩子捐书，希望大家踊跃参加。只要我们齐心协力，孩子们就能读到更多的好书。',
     samplePy:'Tóngxuémen, zhè zhōuwǔ wǒmen yào gěi shānqū de háizi juān shū, xīwàng dàjiā yǒngyuè cānjiā. Zhǐyào wǒmen qíxīn-xiélì, háizimen jiù néng dúdào gèng duō de hǎo shū.',
     sampleVn:'Các bạn ơi, thứ Sáu này chúng ta sẽ quyên góp sách cho các em vùng cao, mong mọi người hăng hái tham gia. Chỉ cần chúng ta đồng lòng góp sức, các em sẽ được đọc nhiều sách hay hơn.',
     tip:'Lời kêu gọi: thông tin (khi nào, làm gì) → 希望大家踊跃…… → 只要……就…… nêu ý nghĩa.'},

    {scene:'Trời đang mưa, mẹ định đi siêu thị lớn ở xa chỉ để mua mấy quả trứng.',
     a:{sp:'Mẹ',zh:'家里没鸡蛋了，我去大超市买点儿。',vn:'Nhà hết trứng rồi, mẹ ra siêu thị lớn mua một ít.'},
     need:['Dùng 就近','Dùng 附近 đúng chức năng (danh từ)'],
     sample:'妈，外面下着雨呢，大超市那么远，您就近在小区附近的小店买吧，我帮您去。',
     samplePy:'Mā, wàimian xiàzhe yǔ ne, dà chāoshì nàme yuǎn, nín jiùjìn zài xiǎoqū fùjìn de xiǎodiàn mǎi ba, wǒ bāng nín qù.',
     sampleVn:'Mẹ ơi, ngoài trời đang mưa mà siêu thị lớn xa thế, mẹ mua tạm ở tiệm nhỏ gần khu nhà mình thôi, để con đi giúp mẹ.',
     tip:'就近 (phó từ) đứng trước cụm động từ 在……买; 小区附近的小店 — 附近 làm định ngữ cho 小店 (词语辨析 của bài).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết thư xin việc gửi phòng nhân sự của một công ty.',
     a:'我特别会做设计，你们要不要我？',b:'本人擅长平面设计，希望能有机会发挥专长，为贵公司服务。',better:'b',
     why:'Thư xin việc cần văn viết lịch sự: 本人, 擅长, 发挥专长, 贵公司. Câu a (你们要不要我？) quá suồng sã.'},

    {scene:'Em nhắn tin rủ bạn thân đi ăn ở quán mới mở.',
     a:'那家店物美价廉，风味独特，值得品尝。',b:'那家店又便宜又好吃，走，一起去尝尝！',better:'b',
     why:'Nhắn tin bạn bè dùng khẩu ngữ tự nhiên (又便宜又好吃, 走, 尝尝). Câu a nghe như lời quảng cáo trên báo.'},

    {scene:'Trưởng phòng báo cáo kết quả kinh doanh quý III trong cuộc họp toàn công ty.',
     a:'第三季度，公司财务收入呈递增趋势，同比增长百分之十五。',b:'这三个月咱们赚的钱越来越多了，比去年多了不少。',better:'a',
     why:'Báo cáo chính thức dùng thuật ngữ, số liệu (季度, 财务收入, 呈递增趋势, 同比增长). Câu b hợp khi nói chuyện phiếm.'},

    {scene:'Nhân viên đứng quầy mời khách qua đường nếm thử bánh trong siêu thị.',
     a:'欢迎免费品尝，不好吃不要钱！',b:'敬请各位顾客对本产品进行品尝。',better:'a',
     why:'Lời mời trực tiếp ở quầy cần ngắn gọn, thân thiện, dễ nghe. Câu b (敬请……进行品尝) là văn bản, nói ra nghe rất cứng.'},

    {scene:'Thầy hiệu trưởng phát biểu khai mạc ngày hội khởi nghiệp của học sinh.',
     a:'希望同学们大胆创新，依据市场需求，用慧眼捕捉商机。',b:'大家好好干，看准了就上！',better:'a',
     why:'Phát biểu trang trọng dùng văn viết, cụm bốn chữ (大胆创新, 捕捉商机) và 依据. Câu b hợp nói riêng với bạn bè.'},

    {scene:'Bạn thân cứ mơ làm tỷ phú mà chẳng chịu làm gì, em muốn nhắc bạn.',
     a:'你别光做梦了，先干点儿实事吧！',b:'创业不能靠空想，经营者必须具有超前意识和必备的素质。',better:'a',
     why:'Khuyên bạn thân nên nói thẳng, khẩu ngữ (别光……了, 干点儿实事). Câu b như đang giảng bài, xa cách.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Bảng có 4 dòng: bí quyết khởi nghiệp → ông Vương → công ty Ezaki → anh em họ Chu. Bấm ghi âm rồi kể khoảng 3 phút.',
  outline: [
    {step:'创业有什么窍门？请举例说明。', cue:'①不可盲目，依据市场规则　②刮胡子刀，方便面，罐装八宝粥', words:['屡次','依据','罐','数额','永恒','遵循']},
    {step:'王先生是怎样独具慧眼，寻找商机的？', cue:'①手机电池正常寿命……，往往用一年……，换新电池……，美国人发明了……　②王先生买下……，租柜台……，月收入……，轻松收回……　③如果你没有眼光，……，如果你思维平庸，……', words:['不屑','孕育','博览会','耐用','魔术','扣','季度','本钱','通货膨胀','平庸','捏']},
    {step:'江崎公司怎样从竞争对手的产品缺陷中捕捉商机？', cue:'①劳特产品的不足：眼光仍停留在儿童身上，口味单一，外观老旧，售价不方便购买者　②江崎公司：推出四种功能型泡泡糖，精心设计包装和造型，定价方便购买者，消费者购买……，财务收入……　③只要你细心研究……，就会得到……', words:['环节','兴旺','垄断','扩充','掏','布局','拟定','策略','咀嚼','可口','物美价廉','风味','吹捧','品尝','踊跃','井','财务','局部','关照']},
    {step:'周家兄弟怎样从市场的潜在需求中寻找商机的？', cue:'①流动彩印车的功能：冲印照片，把……印在纺织品上　②流动彩印车的由来：发明者；哥哥是……，弟弟是……；他们发现……；发挥各自专长，发明……　③流动彩印车大受欢迎：方便快捷；旅游淡季，还可以……；有了知名度，收益……', words:['观光','就近','肖像','纺织','留念','对照','齐心协力','专长','资本','以往','淡季','制服','规格','递增','周期','赌博','空想']}
  ],
  checklist: [
    'Kể đủ 4 ý theo đúng thứ tự bảng chưa (bí quyết + ví dụ → ông Vương → Ezaki → anh em họ Chu)?',
    'Ý 1 có nêu được bí quyết (不可盲目，依据市场规则) và đủ ba ví dụ (刮胡子刀, 方便面, 罐装八宝粥) không?',
    'Ý 2 và ý 3 có đi theo chuỗi "vấn đề → cách làm → kết quả" (收回本钱 / 财务收入呈井喷式增长) không?',
    'Ý 4 có nói được cả chức năng, lai lịch và lý do xe in ảnh được ưa chuộng không?',
    'Có dùng 屡次, 依据 và một câu 反复 (如果……，就……；如果……，就……) và kể bằng LỜI MÌNH không?'
  ]
};

// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 191–197) — đáp án theo đáp án sách
// (热身 không đưa vào; 练习5 đã thành luyện nói / kể lại / luyện viết;
//  注释2 · 练一练 "给依据选择适当的位置" → vitri;
//  篇章修辞 · 修辞(10) 反复 · 练一练 "下列哪句没有使用反复修辞手法" → ab (sách KHÔNG in đáp án phần này — đáp án tham khảo);
//  练习4 của bài này là 划出语段中使用反复的句子或短语 (không phải 模仿造句) → ab (sách KHÔNG in đáp án — đáp án tham khảo);
//  扩展 · 词汇 (1) 医学词语 选词填空 → kho (đáp án sách); (2) 金融词语 chỉ để làm quen → kho điền vào đoạn văn; bài này không có phần 病句)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'gx', dapSgk:true, de:'用“屡次”完成句子（注释1 · 练一练）', vn:'Dùng 屡次 hoàn thành câu (Chú thích 1 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'关于亲情的主题，在他的日记中＿＿。', tu:'屡次', dap:'关于亲情的主题，在他的日记中屡次出现。',
      giai:'屡次出现 = xuất hiện nhiều lần. 屡次 đứng trước động từ, chỉ việc đã lặp lại nhiều lần (trong nhật ký đã viết).'},
     {s:'从开始这个课题至今，他＿＿，却一点儿也没有灰心。', tu:'屡次', dap:'从开始这个课题至今，他屡次失败，却一点儿也没有灰心。',
      giai:'屡次失败 + 却…… = thất bại nhiều lần nhưng … — đúng mô hình câu bài khoá 屡次创业，却屡次惨遭失败.'},
     {s:'妈妈＿＿我，改掉马虎的毛病，可我就是改不了。', tu:'屡次', dap:'妈妈屡次提醒我，改掉马虎的毛病，可我就是改不了。',
      giai:'屡次提醒 = nhắc nhở nhiều lần (việc đã xảy ra); 可我就是改不了 = nhưng tôi cứ không sửa được.'}
   ]},

  {kieu:'vitri', de:'给“依据”选择适当的位置（注释2 · 练一练）', vn:'Chọn vị trí thích hợp cho "依据" (Chú thích 2 · Luyện tập) — đáp án theo sách: (1) A　(2) C　(3) C',
   cau:[
     {s:'我们要A不同的B场合，C不同的交际对象，变换我们D的交际方式。', tu:'依据', ans:'A',
      giai:'依据 là GIỚI TỪ: 依据 + 不同的场合、不同的交际对象 + 变换…… = căn cứ vào hoàn cảnh, đối tượng giao tiếp khác nhau mà thay đổi cách giao tiếp. Giới từ đứng trước cả cụm danh từ.'},
     {s:'白鹤梁水文题刻奉献给我们的是一份A珍贵的历代长江枯水水文统计表，为B后来的水利工程建设，提供了确切可靠的科学C，其D科学价值和应用价值不可估量。', tu:'依据', ans:'C',
      giai:'依据 là DANH TỪ: 提供了确切可靠的科学依据 = cung cấp căn cứ khoa học chính xác, đáng tin cậy — làm trung tâm ngữ của định ngữ 确切可靠的科学.'},
     {s:'汉语不难学，不仅因为汉语的词在构造上有A着“词不离字”的特点，而且有些B汉字的字义也可以C字形推知一二，词义也可以从其所组成的字的意义D来推断。', tu:'依据', ans:'C',
      giai:'依据 là GIỚI TỪ: 可以依据字形推知一二 = có thể căn cứ vào hình chữ mà đoán ra phần nào nghĩa. Vị trí D đã có 从……来推断 nên không cần 依据.'}
   ]},

  {kieu:'ab', de:'篇章修辞 · 修辞（10）反复 · 练一练：下列哪句没有使用反复修辞手法', vn:'Tu từ văn bản · Tu từ (10) PHÉP LẶP (反复 — để làm nổi bật một ý, nhấn mạnh một cảm xúc, cố ý dùng lặp lại một từ ngữ hoặc câu). Luyện tập: câu nào dưới đây KHÔNG dùng phép lặp? — sách không in đáp án phần này, đây là đáp án tham khảo: (3)',
   cau:[
     {s:'下列哪句没有使用反复修辞手法？',
      opts:[
        '如果我拥有一片绿洲，我就用我的汗水去开垦它；如果我拥有一片绿洲，我就用我的诚心去改造它；如果我拥有一片绿洲，我就用我的智慧去播种它。',
        '终于自由啦！终于自由啦！感谢全能的上帝，我们终于自由啦！',
        '车到山前必有路，有路必有丰田车。'
      ],
      ans:2,
      giai:'Đáp án tham khảo: (3). Câu (1) lặp vế 如果我拥有一片绿洲 ba lần (lặp cách quãng — 间隔反复); câu (2) lặp 终于自由啦 ba lần (hai lần liền nhau — 连续反复). Câu (3) là câu quảng cáo chế từ tục ngữ 车到山前必有路: cuối vế trước (路) làm đầu vế sau (有路……) — đó là phép 顶真 (liên hoàn), không phải lặp để nhấn mạnh một ý.'}
   ]},

  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'依据', chu:'据', ds:['根据','据说','论据','证据']},
   cau:[
     {tu:'数额', chu:'数', dap:['数学','数目','数量','数日'], them:['数字','人数','次数','岁数','分数','数据'],
      giai:'数 (shù) = con số, số lượng (数目 = số mục, 数量 = số lượng, 数学 = toán học — môn về con số; 数日 = vài ngày, 数 ở đây = "vài, mấy"); 人数 = số người, 次数 = số lần, 数据 = số liệu.'},
     {tu:'遵循', chu:'遵', dap:['遵守','遵命','遵照','遵行'], them:['遵从','遵纪守法','遵医嘱','遵嘱'],
      giai:'遵 = tuân theo, làm theo (遵守 = tuân thủ, 遵命 = tuân lệnh, 遵照 = làm theo, 遵行 = tuân theo mà thực hiện; 遵从 = nghe theo, 遵纪守法 = tuân thủ kỷ luật và pháp luật, 遵医嘱 = theo lời dặn của bác sĩ).'},
     {tu:'孕育', chu:'育', dap:['养育','培育','体育','抚育'], them:['教育','生育','发育','保育','德育','智育'],
      giai:'育 = nuôi dưỡng, dạy dỗ, sinh ra (养育 = nuôi nấng, 培育 = vun trồng, 抚育 = nuôi dưỡng chăm sóc; 体育 = thể dục — giáo dục thể chất); 教育 = giáo dục, 发育 = phát triển (cơ thể), 德育 / 智育 = giáo dục đạo đức / trí tuệ.'},
     {tu:'扩充', chu:'扩', dap:['扩大','扩展','扩建','扩散'], them:['扩张','扩招','扩写','扩宽','扩音器'],
      giai:'扩 = mở rộng ra (扩大 = mở rộng, 扩展 = phát triển rộng ra, 扩建 = xây mở rộng, 扩散 = lan rộng); 扩张 = bành trướng, 扩招 = mở rộng tuyển sinh, 扩写 = viết mở rộng (ngược với 缩写 của phần 写一写).'}
   ]},

  {kieu:'gx', dapSgk:true, de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu (bài tập 2) — đáp án theo sách',
   cau:[
     {s:'虽然每次尝试都失败了，他却从来没想过放弃。', tu:'屡次', dap:'虽然屡次尝试失败，他却从来没想过放弃。',
      giai:'每次……都失败了 → 屡次尝试失败: 屡次 thay cho "lần nào cũng", đứng trước động từ (điểm ngữ pháp 1).'},
     {s:'这些问题各不相同，我们要按照不同情况分别处理。', tu:'依据', dap:'这些问题各不相同，我们要依据不同情况分别处理。',
      giai:'按照 → 依据: giới từ "căn cứ vào", văn viết (điểm ngữ pháp 2).'},
     {s:'公司规模越来越大，发展前景值得期待。', tu:'扩充', dap:'公司规模扩充，发展前景值得期待。',
      giai:'越来越大 → 扩充 (mở rộng thêm). 前景 ôn bài 23.'},
     {s:'由于商品质量好、价格低，这家店吸引了很多顾客。', tu:'物美价廉', dap:'由于商品物美价廉，这家店吸引了很多顾客。',
      giai:'质量好、价格低 → 物美价廉 (hàng tốt giá rẻ) — thành ngữ bốn chữ làm vị ngữ.'},
     {s:'希望大家共同努力，圆满完成这项艰巨的任务。', tu:'齐心协力', dap:'希望大家齐心协力，圆满完成这项艰巨的任务。',
      giai:'共同努力 → 齐心协力 (đồng tâm hiệp lực). 圆满 ôn bài 25.'},
     {s:'跟以前不同的是，这学期我们修改了课程内容。', tu:'以往', dap:'跟以往不同的是，这学期我们修改了课程内容。',
      giai:'以前 → 以往 (trước kia — văn viết hơn): 跟以往不同的是…….'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 1)',
   tu:['数额','空想','永恒','资本','依据'],
   cau:[
     {s:'对创业者来说，创业不能靠＿＿，要＿＿市场需求。不管你最初有多少＿＿，只要勤奋努力，善于发现商机，不但能快速收回本钱，还能获得＿＿可观的财富。这是一条＿＿的真理。',
      dap:['空想','依据','资本','数额','永恒']}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (bài tập 3 · đoạn 2)',
   tu:['专长','财务','通货膨胀','季度','策略'],
   cau:[
     {s:'上个＿＿，一方面由于进入销售淡季，一方面受＿＿的影响，公司＿＿收入出现大幅度下滑。我们及时调整营销＿＿，发挥公司的＿＿，终于赢得了客户的认可，这个月销售业绩开始回升。',
      dap:['季度','通货膨胀','财务','策略','专长']}
   ]},

  {kieu:'ab', de:'请划出下列语段中使用反复修辞方法的句子或短语', vn:'Gạch chân câu hoặc cụm từ dùng phép LẶP (反复) trong các đoạn sau (bài tập 4) — ở đây chọn cụm được lặp lại. Sách không in đáp án bài này, đây là đáp án tham khảo.',
   cau:[
     {s:'雪降落下来了，像柳絮一般的雪，像芦花一般的雪，像蒲公英的带绒毛的种子在风中飞，雪降落下来了。',
      opts:['柳絮','雪降落下来了','在风中飞','蒲公英'],
      ans:1,
      giai:'雪降落下来了 mở đầu và kết thúc đoạn (lặp đầu – cuối), nhấn mạnh cảnh tuyết rơi. Ngoài ra 像……一般的雪 cũng lặp hai lần (lặp cách quãng).'},
     {s:'沉默啊！沉默啊！不在沉默中爆发，就在沉默中灭亡。',
      opts:['爆发','灭亡','不在……就在……','沉默啊'],
      ans:3,
      giai:'沉默啊！沉默啊！ lặp liền nhau (连续反复), 沉默 xuất hiện bốn lần — dồn nén cảm xúc phẫn nộ (câu nổi tiếng của Lỗ Tấn).'},
     {s:'南国的红豆啊，红得活泼，像泉水的叮咚，让人清爽。南国的红豆啊，红得艳丽，像朝阳的初生，让人神往。',
      opts:['南国的红豆啊','红得活泼','泉水的叮咚','让人神往'],
      ans:0,
      giai:'南国的红豆啊 lặp ở đầu hai câu (lặp cách quãng); cả khung 红得……，像……，让人…… cũng lặp lại, tạo nhịp điệu như thơ.'},
     {s:'风雪一天比一天大，人们的干劲一天比一天猛，砍下的毛竹一天比一天堆得高，架在两座高山之间的毛竹，也一天比一天往上长。',
      opts:['风雪','干劲','一天比一天','往上长'],
      ans:2,
      giai:'一天比一天 lặp bốn lần, nhấn mạnh mọi thứ đều tăng dần theo từng ngày (gió tuyết, khí thế, cây tre).'}
   ]},

  {kieu:'kho', de:'熟悉下列医学方面的词语，并选词填空（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (1): làm quen với các từ về y học và chọn từ điền vào chỗ trống — đáp án theo sách. 残疾 cánjí = tàn tật · 化验 huàyàn = xét nghiệm · 解剖 jiěpōu = giải phẫu · 麻醉 mázuì = gây mê, gây tê · 脉搏 màibó = mạch đập · 瘫痪 tānhuàn = bại liệt · 按摩 ànmó = xoa bóp · 隔离 gélí = cách ly',
   tu:['残疾','化验','解剖','麻醉','脉搏','瘫痪','按摩','隔离'],
   cau:[
     {s:'经过＿＿大便，医生终于找到了他腹泻的原因。',dap:['化验']},
     {s:'最近他常常腰疼，大夫给他＿＿以后，他感觉舒服多了。',dap:['按摩']},
     {s:'由于这种疾病传染性很强，所以需要把病人＿＿开来。',dap:['隔离']},
     {s:'全社会都要关爱＿＿人，在各方面多给他们提供方便。',dap:['残疾']},
     {s:'那头大象死后，动物园的工作人员对它进行了＿＿，发现它的胃里有很多塑料制品。',dap:['解剖']},
     {s:'你刚刚剧烈运动过，＿＿很快，所以休息一会再来测量吧。',dap:['脉搏']},
     {s:'在大的手术前都需要＿＿，这不但可以减轻病人痛苦，也方便大夫手术。',dap:['麻醉']},
     {s:'在车祸中，他腰部受到重伤，两腿失去知觉，从此＿＿在床了。',dap:['瘫痪']}
   ]},

  {kieu:'kho', de:'阅读语段，熟悉下列金融方面的词语（扩展 · 词汇）', vn:'Mở rộng · Từ vựng (2): đọc đoạn văn, làm quen với các từ về tài chính (các từ gạch chân trong sách). Ở đây chuyển thành bài điền: điền từ vào đúng chỗ trong đoạn văn của sách. 债券 zhàiquàn = trái phiếu · 基金 jījīn = quỹ · 统筹兼顾 tǒngchóu-jiāngù = tính toán tổng thể, lo chu toàn mọi mặt · 成交 chéngjiāo = khớp lệnh, giao dịch thành · 分红 fēnhóng = chia cổ tức',
   tu:['债券','基金','统筹兼顾','成交','分红'],
   cau:[
     {s:'在投资＿＿、＿＿等金融产品时，要注意＿＿，分散风险。有的投资者追求高利润，总想在利润最高点卖出，这容易导致错过最佳＿＿时机，增加损失。有的投资者只关注年终＿＿，平时不怎么交易，这也会造成利润减少。',
      dap:['债券','基金','统筹兼顾','成交','分红']}
   ]}
];
