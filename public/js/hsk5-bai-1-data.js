// ══════════════════════════════════════════
// DATA — HSK5 Bài 1: 爱的细节 (Chi tiết của tình yêu)
// Unit 1 了解生活 · Nguồn: HSK标准教程5上 + bộ slide giáo viên chính thức
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'细节',py:'xìjié',pos:'Danh từ',vn:'chi tiết',hv:'tế tiết',em:'🔍',lesson:1,
   explain:['Phần nhỏ, vụn vặt của một sự việc — thứ dễ bị bỏ qua nhưng lại nói lên bản chất.'],
   usage:'Thường đi sau định ngữ: 电影的细节, 生活的细节. Động từ hay dùng: 注意/关注/描写 + 细节.',
   collo:['故事的细节','生活的细节','注意细节','描写细节'],
   ex_zh:'画画儿的时候我们要注意细节。',ex_py:'Huà huàr de shíhou wǒmen yào zhùyì xìjié.',ex_vn:'Khi vẽ tranh chúng ta phải chú ý đến chi tiết.',
   exList:[
     {zh:'画画儿的时候我们要注意细节。',py:'Huà huàr de shíhou wǒmen yào zhùyì xìjié.',vn:'Khi vẽ tranh chúng ta phải chú ý đến chi tiết.'},
     {zh:'每次我讲故事，儿子都对故事的细节很感兴趣。',py:'Měi cì wǒ jiǎng gùshi, érzi dōu duì gùshi de xìjié hěn gǎn xìngqù.',vn:'Mỗi lần tôi kể chuyện, con trai đều rất hứng thú với các chi tiết trong truyện.'},
     {zh:'真正的爱情就藏在生活的细节里。',py:'Zhēnzhèng de àiqíng jiù cáng zài shēnghuó de xìjié li.',vn:'Tình yêu thật sự nằm ngay trong những chi tiết của đời sống.'}
   ]},

  {n:2,zh:'电台',py:'diàntái',pos:'Danh từ',vn:'đài phát thanh',hv:'điện đài',em:'📻',lesson:1,
   explain:['Cơ quan phát sóng chương trình bằng âm thanh.'],
   usage:'Lượng từ dùng 家 hoặc 个: 一家电台. Ghép: 电台记者, 电台广播, 电台新闻.',
   collo:['一家电台','电台记者','电台广播','电台新闻'],
   ex_zh:'开车的时候我常听电台。',ex_py:'Kāichē de shíhou wǒ cháng tīng diàntái.',ex_vn:'Khi lái xe tôi thường nghe đài phát thanh.',
   exList:[
     {zh:'开车的时候我常听电台。',py:'Kāichē de shíhou wǒ cháng tīng diàntái.',vn:'Khi lái xe tôi thường nghe đài phát thanh.'},
     {zh:'他是一家电台的记者。',py:'Tā shì yì jiā diàntái de jìzhě.',vn:'Anh ấy là phóng viên của một đài phát thanh.'}
   ]},

  {n:3,zh:'恩爱',py:'ēn\'ài',pos:'Tính từ',vn:'(vợ chồng) đằm thắm, mặn nồng',hv:'ân ái',em:'💞',lesson:1,
   explain:['CHỈ dùng cho vợ chồng, không dùng cho bạn bè hay cha mẹ – con cái.'],
   usage:'很/非常/特别 + 恩爱. Cụm khẩu ngữ nổi tiếng: 秀恩爱 (khoe tình cảm nơi công cộng).',
   collo:['很恩爱','最恩爱的夫妻','秀恩爱'],
   ex_zh:'他们夫妻两个很恩爱。',ex_py:'Tāmen fūqī liǎng ge hěn ēn\'ài.',ex_vn:'Hai vợ chồng họ rất đằm thắm.',
   exList:[
     {zh:'他们夫妻两个很恩爱。',py:'Tāmen fūqī liǎng ge hěn ēn\'ài.',vn:'Hai vợ chồng họ rất đằm thắm.'},
     {zh:'电台要选出一对最恩爱的夫妻。',py:'Diàntái yào xuǎnchū yí duì zuì ēn\'ài de fūqī.',vn:'Đài phát thanh muốn chọn ra một cặp vợ chồng đằm thắm nhất.'}
   ]},

  {n:4,zh:'对比',py:'duìbǐ',pos:'Động từ',vn:'đối chiếu, so sánh',hv:'đối tỉ',em:'⚖️',lesson:1,
   explain:['Đặt hai thứ cạnh nhau để tìm ra chỗ khác nhau.'],
   usage:'Trạng ngữ hay dùng: 简单(地)/详细(地) + 对比. Cũng nói 进行对比, 对比一下.',
   collo:['对比一下','进行对比','详细地对比'],
   ex_zh:'妈妈，请你对比一下这两张照片，看看有什么不同。',ex_py:'Māma, qǐng nǐ duìbǐ yíxià zhè liǎng zhāng zhàopiàn, kànkan yǒu shénme bùtóng.',ex_vn:'Mẹ ơi, mẹ đối chiếu hai tấm ảnh này xem có gì khác nhau.',
   exList:[
     {zh:'妈妈，请你对比一下这两张照片，看看有什么不同。',py:'Māma, qǐng nǐ duìbǐ yíxià zhè liǎng zhāng zhàopiàn, kànkan yǒu shénme bùtóng.',vn:'Mẹ ơi, mẹ đối chiếu hai tấm ảnh này xem có gì khác nhau.'},
     {zh:'我详细地对比了这两个手机，最后决定买贵的那个。',py:'Wǒ xiángxì de duìbǐle zhè liǎng ge shǒujī, zuìhòu juédìng mǎi guì de nàge.',vn:'Tôi đối chiếu kỹ hai chiếc điện thoại này, cuối cùng quyết định mua chiếc đắt hơn.'}
   ]},

  {n:5,zh:'入围',py:'rùwéi',pos:'Động từ',vn:'lọt vào vòng trong',hv:'nhập vi',em:'🎯',lesson:1,
   explain:['Được chọn vào danh sách cuối cùng của một cuộc thi hay giải thưởng.'],
   usage:'Nội động từ, không mang tân ngữ: 三对夫妻入围 (KHÔNG nói 入围比赛).',
   collo:['……入围','入围名单'],
   ex_zh:'老师说这次中文比赛，我们班有三个同学入围。',ex_py:'Lǎoshī shuō zhè cì Zhōngwén bǐsài, wǒmen bān yǒu sān ge tóngxué rùwéi.',ex_vn:'Cô giáo nói cuộc thi tiếng Trung lần này lớp mình có ba bạn lọt vào vòng trong.',
   exList:[
     {zh:'老师说这次中文比赛，我们班有三个同学入围。',py:'Lǎoshī shuō zhè cì Zhōngwén bǐsài, wǒmen bān yǒu sān ge tóngxué rùwéi.',vn:'Cô giáo nói cuộc thi tiếng Trung lần này lớp mình có ba bạn lọt vào vòng trong.'},
     {zh:'对比后，有三对夫妻入围。',py:'Duìbǐ hòu, yǒu sān duì fūqī rùwéi.',vn:'Sau khi đối chiếu, có ba cặp vợ chồng lọt vào vòng trong.'}
   ]},

  {n:6,zh:'评委',py:'píngwěi',pos:'Danh từ',vn:'giám khảo',hv:'bình uỷ',em:'👨‍⚖️',lesson:1,
   explain:['Người chấm điểm trong cuộc thi. 评 (bình – đánh giá) + 委 (uỷ – uỷ viên).'],
   usage:'Đếm bằng 个 hoặc 位: 三个评委, 一位评委.',
   collo:['三个评委','评委们','担任评委'],
   ex_zh:'这次唱歌比赛有三个评委。',ex_py:'Zhè cì chànggē bǐsài yǒu sān ge píngwěi.',ex_vn:'Cuộc thi hát lần này có ba giám khảo.',
   exList:[
     {zh:'这次唱歌比赛有三个评委。',py:'Zhè cì chànggē bǐsài yǒu sān ge píngwěi.',vn:'Cuộc thi hát lần này có ba giám khảo.'},
     {zh:'她的故事十分感人，评委们听了都很感动。',py:'Tā de gùshi shífēn gǎnrén, píngwěimen tīngle dōu hěn gǎndòng.',vn:'Câu chuyện của cô rất cảm động, các giám khảo nghe xong đều xúc động.'}
   ]},

  {n:7,zh:'如何',py:'rúhé',pos:'Đại từ',vn:'như thế nào, ra sao',hv:'như hà',em:'❓',lesson:1,
   explain:['= 怎么 / 怎么样 nhưng thiên về VĂN VIẾT. Đây là điểm ngữ pháp trọng tâm của bài.'],
   usage:'Hỏi cách thức: 如何 + động từ. Đặt cuối câu để hỏi tình hình: ……如何?',
   collo:['如何解决','该如何','情况如何'],
   ex_zh:'我们明天举行会议，讨论这个问题该如何解决。',ex_py:'Wǒmen míngtiān jǔxíng huìyì, tǎolùn zhège wèntí gāi rúhé jiějué.',ex_vn:'Ngày mai chúng ta họp, bàn xem vấn đề này nên giải quyết như thế nào.',
   exList:[
     {zh:'我们明天举行会议，讨论这个问题该如何解决。',py:'Wǒmen míngtiān jǔxíng huìyì, tǎolùn zhège wèntí gāi rúhé jiějué.',vn:'Ngày mai chúng ta họp, bàn xem vấn đề này nên giải quyết như thế nào.'},
     {zh:'最近身体如何？',py:'Zuìjìn shēntǐ rúhé?',vn:'Dạo này sức khoẻ ra sao?'},
     {zh:'评委叫第一对夫妻说说他俩是如何恩爱的。',py:'Píngwěi jiào dì-yī duì fūqī shuōshuo tā liǎ shì rúhé ēn\'ài de.',vn:'Giám khảo bảo cặp vợ chồng thứ nhất kể xem hai người đằm thắm ra sao.'}
   ]},

  {n:8,zh:'瘫痪',py:'tānhuàn',pos:'Động từ',vn:'bị liệt',hv:'than hoán',em:'🦽',lesson:1,
   explain:['Cơ thể mất khả năng cử động do bệnh hoặc tai nạn.'],
   usage:'全身瘫痪 (liệt toàn thân), 半身瘫痪 (liệt nửa người).',
   collo:['全身瘫痪','半身瘫痪'],
   ex_zh:'前几年她全身瘫痪了。',ex_py:'Qián jǐ nián tā quánshēn tānhuàn le.',ex_vn:'Mấy năm trước cô ấy bị liệt toàn thân.',
   exList:[
     {zh:'前几年她全身瘫痪了。',py:'Qián jǐ nián tā quánshēn tānhuàn le.',vn:'Mấy năm trước cô ấy bị liệt toàn thân.'},
     {zh:'医生说她站起来的可能性很小。',py:'Yīshēng shuō tā zhàn qǐlái de kěnéngxìng hěn xiǎo.',vn:'Bác sĩ nói khả năng cô ấy đứng dậy được là rất nhỏ.'}
   ],
   hanzi:[
     {c:'瘫',p:'tān',type:'半包围结构',st:15,ord:'疒 (nạch) bao ngoài → 难 bên trong',rad:'疒 (nạch – bệnh tật)',mean:'liệt',
      tip:'Bộ 疒 (bệnh) + 难 (nan – khó) → căn BỆNH khiến việc cử động trở nên KHÓ = liệt.',w:'瘫痪 / 瘫软'},
     {c:'痪',p:'huàn',type:'半包围结构',st:15,ord:'疒 (nạch) bao ngoài → 奂 bên trong',rad:'疒 (nạch – bệnh tật)',mean:'liệt',
      tip:'Luôn đi cặp với 瘫, gần như không dùng một mình. Nhớ cả cụm 瘫痪 cho nhanh.',w:'瘫痪'}
   ]},

  {n:9,zh:'离婚',py:'líhūn',pos:'Động từ',vn:'ly hôn',hv:'ly hôn',em:'💔',lesson:1,
   explain:['Chấm dứt quan hệ vợ chồng về mặt pháp luật.'],
   usage:'LY HỢP TỪ — tách ra được: 离过婚, 离了婚, 跟他离婚. KHÔNG nói 离婚他.',
   collo:['跟……离婚','离过婚','办离婚手续'],
   ex_zh:'别人都觉得她的丈夫会跟她离婚。',ex_py:'Biérén dōu juéde tā de zhàngfu huì gēn tā líhūn.',ex_vn:'Ai cũng nghĩ chồng cô ấy sẽ ly hôn với cô.',
   exList:[
     {zh:'别人都觉得她的丈夫会跟她离婚。',py:'Biérén dōu juéde tā de zhàngfu huì gēn tā líhūn.',vn:'Ai cũng nghĩ chồng cô ấy sẽ ly hôn với cô.'},
     {zh:'他们结婚五年后离婚了。',py:'Tāmen jiéhūn wǔ nián hòu líhūn le.',vn:'Họ ly hôn sau năm năm kết hôn.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy đã ly hôn một lần rồi.',answer:'她离过一次婚。',answerPy:'Tā líguo yí cì hūn.',
      note:'Ly hợp từ: 次 chen vào GIỮA 离 và 婚, không nói 离婚过一次.'}
   ]},

  {n:10,zh:'自杀',py:'zìshā',pos:'Động từ',vn:'tự sát',hv:'tự sát',em:'⚠️',lesson:1,
   explain:['Tự kết thúc sinh mạng của mình.'],
   usage:'Nội động từ: 想过要自杀. Không mang tân ngữ.',
   collo:['想自杀','自杀行为'],
   ex_zh:'她也想过要自杀。',ex_py:'Tā yě xiǎngguo yào zìshā.',ex_vn:'Cô ấy cũng từng nghĩ đến chuyện tự sát.',
   exList:[
     {zh:'她也想过要自杀。',py:'Tā yě xiǎngguo yào zìshā.',vn:'Cô ấy cũng từng nghĩ đến chuyện tự sát.'}
   ]},

  {n:11,zh:'抱怨',py:'bàoyuàn',pos:'Động từ',vn:'than phiền, oán trách',hv:'bão oán',em:'😤',lesson:1,
   explain:['Nói ra sự không hài lòng của mình về người khác hoặc hoàn cảnh.'],
   usage:'Mang tân ngữ là NGƯỜI hoặc SỰ VIỆC: 抱怨别人, 抱怨餐厅的菜不好吃. Phủ định hay gặp: 从不抱怨.',
   collo:['抱怨别人','抱怨妻子','从不抱怨'],
   ex_zh:'他几年如一日地照顾她，从不抱怨。',ex_py:'Tā jǐ nián rú yí rì de zhàogù tā, cóng bù bàoyuàn.',ex_vn:'Anh ấy chăm sóc cô suốt mấy năm như một ngày, chưa bao giờ than phiền.',
   exList:[
     {zh:'他几年如一日地照顾她，从不抱怨。',py:'Tā jǐ nián rú yí rì de zhàogù tā, cóng bù bàoyuàn.',vn:'Anh ấy chăm sóc cô suốt mấy năm như một ngày, chưa bao giờ than phiền.'},
     {zh:'他总是抱怨餐厅的菜不好吃。',py:'Tā zǒngshì bàoyuàn cāntīng de cài bù hǎochī.',vn:'Anh ta lúc nào cũng than phiền đồ ăn nhà hàng không ngon.'}
   ]},

  {n:12,zh:'爱护',py:'àihù',pos:'Động từ',vn:'yêu quý giữ gìn',hv:'ái hộ',em:'🌱',lesson:1,
   explain:['Yêu thương và chăm chút, giữ cho không bị tổn hại.'],
   usage:'Tân ngữ thường là môi trường, cây cỏ, của công, học sinh: 爱护环境, 爱护公物.',
   collo:['爱护环境','爱护花草树木','爱护公物','爱护学生'],
   ex_zh:'在丈夫的爱护和努力下，她终于又站了起来。',ex_py:'Zài zhàngfu de àihù hé nǔlì xià, tā zhōngyú yòu zhànle qǐlái.',ex_vn:'Nhờ sự yêu thương chăm sóc và nỗ lực của chồng, cuối cùng cô đã đứng dậy được.',
   exList:[
     {zh:'我们要爱护环境，爱护花草树木。',py:'Wǒmen yào àihù huánjìng, àihù huācǎo shùmù.',vn:'Chúng ta phải giữ gìn môi trường, yêu quý cây cỏ.'},
     {zh:'在丈夫的爱护和努力下，她终于又站了起来。',py:'Zài zhàngfu de àihù hé nǔlì xià, tā zhōngyú yòu zhànle qǐlái.',vn:'Nhờ sự yêu thương chăm sóc và nỗ lực của chồng, cuối cùng cô đã đứng dậy được.'}
   ]},

  {n:13,zh:'婚姻',py:'hūnyīn',pos:'Danh từ',vn:'hôn nhân',hv:'hôn nhân',em:'💍',lesson:1,
   explain:['Quan hệ vợ chồng — nói về chế độ, đời sống chung, không phải hành động cưới.'],
   usage:'婚姻生活, 婚姻问题, 幸福的婚姻. Phân biệt với 结婚 (động từ – cưới).',
   collo:['婚姻生活','幸福的婚姻','婚姻问题'],
   ex_zh:'十几年的婚姻生活中，他们从来没吵过架。',ex_py:'Shí jǐ nián de hūnyīn shēnghuó zhōng, tāmen cónglái méi chǎoguo jià.',ex_vn:'Trong hơn mười năm đời sống hôn nhân, họ chưa từng cãi nhau.',
   exList:[
     {zh:'十几年的婚姻生活中，他们从来没吵过架。',py:'Shí jǐ nián de hūnyīn shēnghuó zhōng, tāmen cónglái méi chǎoguo jià.',vn:'Trong hơn mười năm đời sống hôn nhân, họ chưa từng cãi nhau.'}
   ]},

  {n:14,zh:'吵架',py:'chǎojià',pos:'Động từ',vn:'cãi nhau',hv:'sảo giá',em:'🗯️',lesson:1,
   explain:['Hai bên to tiếng với nhau vì bất đồng.'],
   usage:'LY HỢP TỪ: 吵过架, 吵了一架. Cấu trúc: A 和/跟 B 吵架.',
   collo:['A和B吵架','吵过架','跟……吵架'],
   ex_zh:'他跟他老婆每星期都要吵架。',ex_py:'Tā gēn tā lǎopo měi xīngqī dōu yào chǎojià.',ex_vn:'Anh ta tuần nào cũng cãi nhau với vợ.',
   exList:[
     {zh:'他跟他老婆每星期都要吵架。',py:'Tā gēn tā lǎopo měi xīngqī dōu yào chǎojià.',vn:'Anh ta tuần nào cũng cãi nhau với vợ.'},
     {zh:'因为工作没有按计划完成，小明和小刚还在吵架。',py:'Yīnwèi gōngzuò méiyǒu àn jìhuà wánchéng, Xiǎo Míng hé Xiǎo Gāng hái zài chǎojià.',vn:'Vì công việc không hoàn thành đúng kế hoạch, Tiểu Minh và Tiểu Cương vẫn đang cãi nhau.'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Họ chưa từng cãi nhau lần nào.',answer:'他们从来没吵过架。',answerPy:'Tāmen cónglái méi chǎoguo jià.',
      note:'Ly hợp từ: 过 chen vào GIỮA 吵 và 架.'}
   ]},

  {n:15,zh:'相敬如宾',py:'xiāng jìng rú bīn',pos:'Thành ngữ',vn:'tương kính như tân — vợ chồng tôn trọng nhau như khách quý',hv:'tương kính như tân',em:'🍵',lesson:1,
   explain:['Vợ chồng đối xử với nhau lễ độ, kính trọng, không suồng sã. Người Việt cũng nói "tương kính như tân" nên rất dễ nhớ.'],
   usage:'Làm vị ngữ, hay đi cặp với 相亲相爱.',
   collo:['相亲相爱、相敬如宾'],
   ex_zh:'爸爸和妈妈结婚十几年了，一直相亲相爱，相敬如宾。',ex_py:'Bàba hé māma jiéhūn shí jǐ nián le, yìzhí xiāng qīn xiāng ài, xiāng jìng rú bīn.',ex_vn:'Bố mẹ tôi cưới nhau hơn mười năm, luôn yêu thương và tôn trọng nhau như khách quý.',
   exList:[
     {zh:'爸爸和妈妈结婚十几年了，一直相亲相爱，相敬如宾。',py:'Bàba hé māma jiéhūn shí jǐ nián le, yìzhí xiāng qīn xiāng ài, xiāng jìng rú bīn.',vn:'Bố mẹ tôi cưới nhau hơn mười năm, luôn yêu thương và tôn trọng nhau như khách quý.'}
   ]},

  {n:16,zh:'暗暗',py:'àn\'àn',pos:'Phó từ',vn:'thầm, âm thầm',hv:'ám ám',em:'🤫',lesson:1,
   explain:['Làm trong lòng, không để lộ ra ngoài.'],
   usage:'Luôn đứng TRƯỚC động từ: 暗暗决定, 暗暗点头, 暗暗高兴.',
   collo:['暗暗决定','暗暗点头','暗暗下决心'],
   ex_zh:'评委们听了暗暗点头。',ex_py:'Píngwěimen tīngle àn\'àn diǎntóu.',ex_vn:'Các giám khảo nghe xong thầm gật đầu.',
   exList:[
     {zh:'评委们听了暗暗点头。',py:'Píngwěimen tīngle àn\'àn diǎntóu.',vn:'Các giám khảo nghe xong thầm gật đầu.'},
     {zh:'他暗暗决定明年一定要考上大学。',py:'Tā àn\'àn juédìng míngnián yídìng yào kǎoshàng dàxué.',vn:'Cậu ấy thầm quyết tâm năm sau nhất định phải đỗ đại học.'}
   ]},

  {n:17,zh:'轮',py:'lún',pos:'Động từ',vn:'đến lượt',hv:'luân',em:'🔄',lesson:1,
   explain:['Lần lượt theo thứ tự, hết người này đến người kia.'],
   usage:'Hay dùng dạng 轮到 + người/việc: 轮到我了.',
   collo:['轮到','轮流'],
   ex_zh:'今天轮到我打扫教室了。',ex_py:'Jīntiān lúndào wǒ dǎsǎo jiàoshì le.',ex_vn:'Hôm nay đến lượt tôi quét lớp.',
   exList:[
     {zh:'今天轮到我打扫教室了。',py:'Jīntiān lúndào wǒ dǎsǎo jiàoshì le.',vn:'Hôm nay đến lượt tôi quét lớp.'},
     {zh:'轮到第三对夫妻了，却很长时间不见人。',py:'Lúndào dì-sān duì fūqī le, què hěn cháng shíjiān bú jiàn rén.',vn:'Đến lượt cặp thứ ba thì mãi không thấy người đâu.'}
   ]},

  {n:18,zh:'不耐烦',py:'bú nàifán',pos:'Tính từ',vn:'sốt ruột, mất kiên nhẫn',hv:'bất nại phiền',em:'😖',lesson:1,
   explain:['Chờ lâu quá nên bực, không chịu đựng được nữa.'],
   usage:'有些/有点儿 + 不耐烦. Cũng nói 等得不耐烦了.',
   collo:['有些不耐烦','等得不耐烦'],
   ex_zh:'今天买火车票的人太多了，排队的时候我都有些不耐烦了。',ex_py:'Jīntiān mǎi huǒchēpiào de rén tài duō le, páiduì de shíhou wǒ dōu yǒuxiē bú nàifán le.',ex_vn:'Hôm nay người mua vé tàu đông quá, lúc xếp hàng tôi đã thấy hơi sốt ruột.',
   exList:[
     {zh:'今天买火车票的人太多了，排队的时候我都有些不耐烦了。',py:'Jīntiān mǎi huǒchēpiào de rén tài duō le, páiduì de shíhou wǒ dōu yǒuxiē bú nàifán le.',vn:'Hôm nay người mua vé tàu đông quá, lúc xếp hàng tôi đã thấy hơi sốt ruột.'},
     {zh:'评委们等得有些不耐烦。',py:'Píngwěimen děng de yǒuxiē bú nàifán.',vn:'Các giám khảo chờ đến mức hơi sốt ruột.'}
   ]},

  {n:19,zh:'靠',py:'kào',pos:'Động từ',vn:'tựa, dựa vào',hv:'kháo',em:'🪑',lesson:1,
   explain:['① Để một phần cơ thể tì lên người hoặc vật khác. ② Nghĩa mở rộng: nhờ vào, dựa vào.'],
   usage:'Cấu trúc hay gặp: 靠着/靠在 + nơi chốn. Đây là điểm ngữ pháp thứ hai của bài.',
   collo:['靠着桌子','靠在肩膀上','靠父母'],
   ex_zh:'男人的头靠在女人的肩膀上，睡着了。',ex_py:'Nánrén de tóu kào zài nǚrén de jiānbǎng shang, shuìzháo le.',ex_vn:'Đầu người đàn ông tựa lên vai người phụ nữ, ngủ thiếp đi.',
   exList:[
     {zh:'王老师喜欢靠着桌子讲课。',py:'Wáng lǎoshī xǐhuan kàozhe zhuōzi jiǎngkè.',vn:'Thầy Vương thích tựa vào bàn để giảng bài.'},
     {zh:'男人的头靠在女人的肩膀上，睡着了。',py:'Nánrén de tóu kào zài nǚrén de jiānbǎng shang, shuìzháo le.',vn:'Đầu người đàn ông tựa lên vai người phụ nữ, ngủ thiếp đi.'},
     {zh:'在家靠父母，出门靠朋友。',py:'Zài jiā kào fùmǔ, chūmén kào péngyou.',vn:'Ở nhà nhờ cha mẹ, ra ngoài nhờ bạn bè.'}
   ]},

  {n:20,zh:'肩膀',py:'jiānbǎng',pos:'Danh từ',vn:'vai',hv:'kiên bàng',em:'💪',lesson:1,
   explain:['Bộ phận nối cánh tay với thân người.'],
   usage:'Lượng từ 个: 一个肩膀. Hay gặp: 靠在……肩膀上.',
   collo:['靠在肩膀上','拍拍肩膀'],
   ex_zh:'她的右肩一直让丈夫的脑袋靠着。',ex_py:'Tā de yòu jiān yìzhí ràng zhàngfu de nǎodai kàozhe.',ex_vn:'Vai phải của cô luôn để đầu chồng tựa vào.',
   exList:[
     {zh:'她的右肩一直让丈夫的脑袋靠着。',py:'Tā de yòu jiān yìzhí ràng zhàngfu de nǎodai kàozhe.',vn:'Vai phải của cô luôn để đầu chồng tựa vào.'}
   ]},

  {n:21,zh:'喊',py:'hǎn',pos:'Động từ',vn:'gọi to, hét',hv:'hảm',em:'📣',lesson:1,
   explain:['Nói to để người khác nghe thấy, hoặc gọi ai đó.'],
   usage:'喊 + người: 喊他. 喊醒 (gọi cho tỉnh dậy) là bổ ngữ kết quả.',
   collo:['喊他','喊醒','大声喊'],
   ex_zh:'一个评委要上前喊醒那个男的。',ex_py:'Yí ge píngwěi yào shàngqián hǎnxǐng nàge nán de.',ex_vn:'Một giám khảo định tiến lên gọi người đàn ông đó dậy.',
   exList:[
     {zh:'一个评委要上前喊醒那个男的。',py:'Yí ge píngwěi yào shàngqián hǎnxǐng nàge nán de.',vn:'Một giám khảo định tiến lên gọi người đàn ông đó dậy.'}
   ]},

  {n:22,zh:'伸',py:'shēn',pos:'Động từ',vn:'duỗi, thò ra',hv:'thân',em:'🤚',lesson:1,
   explain:['Đưa một bộ phận cơ thể ra phía ngoài hoặc kéo dài ra.'],
   usage:'伸手, 伸出手指, 伸懒腰. Ngược với 弯 (cong lại).',
   collo:['伸手','伸出手指','伸懒腰'],
   ex_zh:'女的却伸出手指做了个小声的动作。',ex_py:'Nǚ de què shēnchū shǒuzhǐ zuòle ge xiǎoshēng de dòngzuò.',ex_vn:'Người phụ nữ lại đưa ngón tay lên ra hiệu nói khẽ.',
   exList:[
     {zh:'女的却伸出手指做了个小声的动作。',py:'Nǚ de què shēnchū shǒuzhǐ zuòle ge xiǎoshēng de dòngzuò.',vn:'Người phụ nữ lại đưa ngón tay lên ra hiệu nói khẽ.'}
   ]},

  {n:23,zh:'手指',py:'shǒuzhǐ',pos:'Danh từ',vn:'ngón tay',hv:'thủ chỉ',em:'👆',lesson:1,
   explain:['Năm ngón trên bàn tay.'],
   usage:'Lượng từ 根: 一根手指.',
   collo:['一根手指','伸出手指'],
   ex_zh:'她伸出手指做了个小声的动作。',ex_py:'Tā shēnchū shǒuzhǐ zuòle ge xiǎoshēng de dòngzuò.',ex_vn:'Cô ấy đưa ngón tay lên ra hiệu nói khẽ.',
   exList:[
     {zh:'她伸出手指做了个小声的动作。',py:'Tā shēnchū shǒuzhǐ zuòle ge xiǎoshēng de dòngzuò.',vn:'Cô ấy đưa ngón tay lên ra hiệu nói khẽ.'}
   ]},

  {n:24,zh:'歪歪扭扭',py:'wāiwāiniǔniǔ',pos:'Tính từ',vn:'nguệch ngoạc, xiêu vẹo',hv:'oai oai nữu nữu',em:'〰️',lesson:1,
   explain:['Không thẳng, không ngay ngắn — thường tả chữ viết hoặc đường đi.'],
   usage:'Làm trạng ngữ với 地: 歪歪扭扭地写. Từ láy bốn âm tiết AABB.',
   collo:['歪歪扭扭地写','字写得歪歪扭扭'],
   ex_zh:'她用左手歪歪扭扭写下一行字。',ex_py:'Tā yòng zuǒshǒu wāiwāiniǔniǔ xiěxià yì háng zì.',ex_vn:'Cô dùng tay trái viết nguệch ngoạc một dòng chữ.',
   exList:[
     {zh:'她用左手歪歪扭扭写下一行字。',py:'Tā yòng zuǒshǒu wāiwāiniǔniǔ xiěxià yì háng zì.',vn:'Cô dùng tay trái viết nguệch ngoạc một dòng chữ.'}
   ]},

  {n:25,zh:'递',py:'dì',pos:'Động từ',vn:'đưa, chuyền',hv:'đệ',em:'🤝',lesson:1,
   explain:['Chuyển vật gì đó sang tay người khác.'],
   usage:'递给 + người + vật: 递给评委一张纸条.',
   collo:['递给','传递'],
   ex_zh:'她写下一行字递给评委。',ex_py:'Tā xiěxià yì háng zì dì gěi píngwěi.',ex_vn:'Cô viết một dòng chữ rồi đưa cho giám khảo.',
   exList:[
     {zh:'她写下一行字递给评委。',py:'Tā xiěxià yì háng zì dì gěi píngwěi.',vn:'Cô viết một dòng chữ rồi đưa cho giám khảo.'},
     {zh:'请把那本书递给我。',py:'Qǐng bǎ nà běn shū dì gěi wǒ.',vn:'Làm ơn đưa quyển sách kia cho tôi.'}
   ],
   hanzi:[
     {c:'递',p:'dì',type:'半包围结构',st:10,ord:'弟 viết trước → 辶 (sước) viết sau cùng',rad:'辶 (sước – đi, di chuyển)',mean:'đưa, chuyền',
      tip:'Bộ 辶 (đi) + 弟 (đệ – em) → món đồ ĐI từ tay người này sang tay người kia = chuyền, đưa. Âm Hán–Việt "đệ" trùng luôn với 弟.',w:'递给 / 传递 / 快递'}
   ]},

  {n:26,zh:'脑袋',py:'nǎodai',pos:'Danh từ',vn:'cái đầu',hv:'não đại',em:'🧠',lesson:1,
   explain:['Cách nói khẩu ngữ của 头.'],
   usage:'Khẩu ngữ, thân mật. Văn viết dùng 头 hoặc 头部.',
   collo:['摇摇脑袋','脑袋靠着'],
   ex_zh:'她的右肩一直让丈夫的脑袋靠着。',ex_py:'Tā de yòu jiān yìzhí ràng zhàngfu de nǎodai kàozhe.',ex_vn:'Vai phải của cô luôn để đầu chồng tựa vào.',
   exList:[
     {zh:'她的右肩一直让丈夫的脑袋靠着。',py:'Tā de yòu jiān yìzhí ràng zhàngfu de nǎodai kàozhe.',vn:'Vai phải của cô luôn để đầu chồng tựa vào.'}
   ]},

  {n:27,zh:'女士',py:'nǚshì',pos:'Danh từ',vn:'quý bà, quý cô',hv:'nữ sĩ',em:'👩',lesson:1,
   explain:['Cách gọi lịch sự, trang trọng với phụ nữ.'],
   usage:'Đặt sau họ: 王女士. Mở đầu bài phát biểu: 女士们，先生们.',
   collo:['王女士','女士们，先生们'],
   ex_zh:'但是女士，我们得听你们夫妻俩的叙述啊！',ex_py:'Dànshì nǚshì, wǒmen děi tīng nǐmen fūqī liǎ de xùshù a!',ex_vn:'Nhưng thưa cô, chúng tôi phải nghe hai vợ chồng kể lại chứ!',
   exList:[
     {zh:'但是女士，我们得听你们夫妻俩的叙述啊！',py:'Dànshì nǚshì, wǒmen děi tīng nǐmen fūqī liǎ de xùshù a!',vn:'Nhưng thưa cô, chúng tôi phải nghe hai vợ chồng kể lại chứ!'}
   ]},

  {n:28,zh:'叙述',py:'xùshù',pos:'Động từ',vn:'kể lại, thuật lại',hv:'tự thuật',em:'🗣️',lesson:1,
   explain:['Kể lại sự việc theo trình tự — thiên về văn viết.'],
   usage:'叙述 + nội dung: 叙述故事/经过/内容. Cũng làm danh từ: 你们的叙述.',
   collo:['叙述故事','叙述经过','简单地叙述'],
   ex_zh:'你能不能简单地叙述一下那部电影的内容？',ex_py:'Nǐ néng bu néng jiǎndān de xùshù yíxià nà bù diànyǐng de nèiróng?',ex_vn:'Bạn có thể kể sơ qua nội dung bộ phim đó không?',
   exList:[
     {zh:'你能不能简单地叙述一下那部电影的内容？',py:'Nǐ néng bu néng jiǎndān de xùshù yíxià nà bù diànyǐng de nèiróng?',vn:'Bạn có thể kể sơ qua nội dung bộ phim đó không?'},
     {zh:'他向经理叙述了自己是如何解决这个问题的。',py:'Tā xiàng jīnglǐ xùshùle zìjǐ shì rúhé jiějué zhège wèntí de.',vn:'Anh ấy thuật lại với giám đốc mình đã giải quyết vấn đề này như thế nào.'}
   ]},

  {n:29,zh:'居然',py:'jūrán',pos:'Phó từ',vn:'lại, không ngờ lại',hv:'cư nhiên',em:'😲',lesson:1,
   explain:['Biểu thị ngoài dự liệu, không ngờ tới. Đây là điểm ngữ pháp thứ ba của bài.'],
   usage:'Đứng TRƯỚC động từ, sau chủ ngữ: 你居然也不会做. Mang sắc thái ngạc nhiên mạnh.',
   collo:['居然放弃','居然也不会','居然没有'],
   ex_zh:'这个女人为了不影响丈夫睡觉，居然放弃这次机会！',ex_py:'Zhège nǚrén wèile bù yǐngxiǎng zhàngfu shuìjiào, jūrán fàngqì zhè cì jīhuì!',ex_vn:'Người phụ nữ này vì không muốn ảnh hưởng đến giấc ngủ của chồng mà lại từ bỏ cơ hội này!',
   exList:[
     {zh:'这么简单的题，你居然也不会做？',py:'Zhème jiǎndān de tí, nǐ jūrán yě bú huì zuò?',vn:'Bài dễ thế này mà bạn lại không làm được à?'},
     {zh:'没想到居然在这儿碰到你！',py:'Méi xiǎngdào jūrán zài zhèr pèngdào nǐ!',vn:'Không ngờ lại gặp bạn ở đây!'},
     {zh:'她每天都努力复习，居然没有通过考试。',py:'Tā měi tiān dōu nǔlì fùxí, jūrán méiyǒu tōngguò kǎoshì.',vn:'Cô ấy ngày nào cũng ôn tập chăm chỉ, vậy mà lại không qua được kỳ thi.'}
   ]},

  {n:30,zh:'催',py:'cuī',pos:'Động từ',vn:'giục, thúc',hv:'thôi',em:'⏰',lesson:1,
   explain:['Thúc người khác làm nhanh lên.'],
   usage:'催 + người + làm gì: 催我走. 别催我 (đừng giục tôi).',
   collo:['催他们','别催我','催着'],
   ex_zh:'评委们还是决定先不催他们。',ex_py:'Píngwěimen háishi juédìng xiān bú cuī tāmen.',ex_vn:'Các giám khảo vẫn quyết định khoan giục họ.',
   exList:[
     {zh:'评委们还是决定先不催他们。',py:'Píngwěimen háishi juédìng xiān bú cuī tāmen.',vn:'Các giám khảo vẫn quyết định khoan giục họ.'},
     {zh:'妈妈一直催我早点儿睡觉。',py:'Māma yìzhí cuī wǒ zǎo diǎnr shuìjiào.',vn:'Mẹ cứ giục tôi đi ngủ sớm.'}
   ]},

  {n:31,zh:'等待',py:'děngdài',pos:'Động từ',vn:'chờ đợi',hv:'đẳng đãi',em:'⌛',lesson:1,
   explain:['= 等 nhưng trang trọng hơn, thiên về văn viết, đối tượng chờ thường trừu tượng.'],
   usage:'等待机会/结果/一段时间. Khẩu ngữ hằng ngày vẫn dùng 等.',
   collo:['等待机会','等待结果','耐心等待'],
   ex_zh:'评委们决定再等待一段时间。',ex_py:'Píngwěimen juédìng zài děngdài yí duàn shíjiān.',ex_vn:'Các giám khảo quyết định chờ thêm một lúc nữa.',
   exList:[
     {zh:'评委们决定再等待一段时间。',py:'Píngwěimen juédìng zài děngdài yí duàn shíjiān.',vn:'Các giám khảo quyết định chờ thêm một lúc nữa.'},
     {zh:'机会是留给耐心等待的人的。',py:'Jīhuì shì liú gěi nàixīn děngdài de rén de.',vn:'Cơ hội dành cho người biết kiên nhẫn chờ đợi.'}
   ]},

  {n:32,zh:'蚊子',py:'wénzi',pos:'Danh từ',vn:'con muỗi',hv:'văn tử',em:'🦟',lesson:1,
   explain:['Loài côn trùng hút máu, hay xuất hiện ban đêm.'],
   usage:'Lượng từ 只: 一只蚊子. 赶蚊子 (đuổi muỗi).',
   collo:['一只蚊子','赶蚊子','被蚊子叮'],
   ex_zh:'我家住一楼，蚊子多。',ex_py:'Wǒ jiā zhù yī lóu, wénzi duō.',ex_vn:'Nhà tôi ở tầng một, muỗi nhiều.',
   exList:[
     {zh:'我家住一楼，蚊子多。',py:'Wǒ jiā zhù yī lóu, wénzi duō.',vn:'Nhà tôi ở tầng một, muỗi nhiều.'}
   ]},

  {n:33,zh:'半夜',py:'bànyè',pos:'Danh từ',vn:'nửa đêm',hv:'bán dạ',em:'🌙',lesson:1,
   explain:['Khoảng giữa đêm, quanh 12 giờ.'],
   usage:'Làm trạng ngữ thời gian: 半夜醒了. 后半夜 (nửa đêm về sáng).',
   collo:['半夜醒来','后半夜','大半夜'],
   ex_zh:'昨晚半夜我被蚊子叮醒了。',ex_py:'Zuó wǎn bànyè wǒ bèi wénzi dīngxǐng le.',ex_vn:'Nửa đêm qua tôi bị muỗi đốt cho tỉnh dậy.',
   exList:[
     {zh:'昨晚半夜我被蚊子叮醒了。',py:'Zuó wǎn bànyè wǒ bèi wénzi dīngxǐng le.',vn:'Nửa đêm qua tôi bị muỗi đốt cho tỉnh dậy.'}
   ]},

  {n:34,zh:'叮',py:'dīng',pos:'Động từ',vn:'(muỗi, ong) đốt',hv:'đinh',em:'🪰',lesson:1,
   explain:['Côn trùng cắn hoặc chích vào da.'],
   usage:'Hay dùng trong câu bị động: 被蚊子叮 / 被蚊子叮醒.',
   collo:['被蚊子叮','叮了一口'],
   ex_zh:'我被蚊子叮醒了。',ex_py:'Wǒ bèi wénzi dīngxǐng le.',ex_vn:'Tôi bị muỗi đốt cho tỉnh dậy.',
   exList:[
     {zh:'我被蚊子叮醒了。',py:'Wǒ bèi wénzi dīngxǐng le.',vn:'Tôi bị muỗi đốt cho tỉnh dậy.'}
   ],
   hanzi:[
     {c:'叮',p:'dīng',type:'左右结构 · Trái-phải',st:5,ord:'口 (khẩu) trái → 丁 (đinh) phải',rad:'口 (khẩu – miệng)',mean:'đốt, chích',
      tip:'Bộ 口 (miệng) + 丁 (đinh, cũng là phần gợi âm) → dùng MIỆNG chích vào như cái ĐINH = đốt.',
      cf:'叮 dễ nhầm với 盯 (dīng – nhìn chăm chú, bộ 目 con mắt) và 钉 (dīng – cái đinh, bộ 钅kim loại)',w:'叮 / 叮咬'}
   ]},

  {n:35,zh:'老婆',py:'lǎopo',pos:'Danh từ',vn:'vợ',hv:'lão bà',em:'👩‍❤️‍👨',lesson:1,
   explain:['Cách gọi vợ thân mật trong khẩu ngữ.'],
   usage:'Khẩu ngữ. Trang trọng dùng 妻子, 爱人. Nam giới tự xưng vợ mình là 我老婆.',
   collo:['我老婆','老婆孩子'],
   ex_zh:'我怕我老婆再被吵醒。',ex_py:'Wǒ pà wǒ lǎopo zài bèi chǎoxǐng.',ex_vn:'Tôi sợ vợ tôi lại bị đánh thức.',
   exList:[
     {zh:'我怕我老婆再被吵醒。',py:'Wǒ pà wǒ lǎopo zài bèi chǎoxǐng.',vn:'Tôi sợ vợ tôi lại bị đánh thức.'}
   ]},

  {n:36,zh:'吵',py:'chǎo',pos:'Động từ / Tính từ',vn:'làm ồn; ồn ào',hv:'sảo',em:'🔊',lesson:1,
   explain:['① Tính từ: ồn. ② Động từ: làm ồn khiến ai đó bị ảnh hưởng — 吵醒 (làm ồn cho tỉnh dậy).'],
   usage:'这里太吵了 (ồn quá). 吵醒 + người (đánh thức bằng tiếng ồn).',
   collo:['太吵了','吵醒','吵着别人'],
   ex_zh:'我怕我老婆再被吵醒。',ex_py:'Wǒ pà wǒ lǎopo zài bèi chǎoxǐng.',ex_vn:'Tôi sợ vợ tôi lại bị đánh thức.',
   exList:[
     {zh:'我怕我老婆再被吵醒。',py:'Wǒ pà wǒ lǎopo zài bèi chǎoxǐng.',vn:'Tôi sợ vợ tôi lại bị đánh thức.'},
     {zh:'这里太吵了，我们换个地方说吧。',py:'Zhèlǐ tài chǎo le, wǒmen huàn ge dìfang shuō ba.',vn:'Ở đây ồn quá, mình đổi chỗ nói chuyện đi.'}
   ]},

  {n:37,zh:'项',py:'xiàng',pos:'Lượng từ',vn:'hạng mục, khoản',hv:'hạng',em:'📋',lesson:1,
   explain:['Dùng đếm những thứ được chia thành khoản, mục: giải thưởng, quy định, công việc.'],
   usage:'两项奖项, 一项工作, 三项规定.',
   collo:['两项奖项','一项工作','几项规定'],
   ex_zh:'电台增加了两项奖项。',ex_py:'Diàntái zēngjiāle liǎng xiàng jiǎngxiàng.',ex_vn:'Đài phát thanh tăng thêm hai hạng mục giải thưởng.',
   exList:[
     {zh:'电台增加了两项奖项。',py:'Diàntái zēngjiāle liǎng xiàng jiǎngxiàng.',vn:'Đài phát thanh tăng thêm hai hạng mục giải thưởng.'}
   ]},

  {n:38,zh:'患难与共',py:'huàn nàn yǔ gòng',pos:'Thành ngữ',vn:'hoạn nạn có nhau',hv:'hoạn nạn dữ cộng',em:'🤝',lesson:1,
   explain:['Cùng nhau chia sẻ lúc khó khăn hoạn nạn. Người Việt nói "hoạn nạn có nhau" — gần như y hệt.'],
   usage:'Làm định ngữ hoặc vị ngữ: 患难与共的夫妻.',
   collo:['患难与共的夫妻','和……患难与共'],
   ex_zh:'评委们将第一对夫妻评为“患难与共夫妻”。',ex_py:'Píngwěimen jiāng dì-yī duì fūqī píngwéi "huàn nàn yǔ gòng fūqī".',ex_vn:'Các giám khảo trao cho cặp thứ nhất danh hiệu "vợ chồng hoạn nạn có nhau".',
   exList:[
     {zh:'评委们将第一对夫妻评为“患难与共夫妻”。',py:'Píngwěimen jiāng dì-yī duì fūqī píngwéi "huàn nàn yǔ gòng fūqī".',vn:'Các giám khảo trao cho cặp thứ nhất danh hiệu "vợ chồng hoạn nạn có nhau".'}
   ]}
];

// ══════════════════════════════════════════
// BÀI ĐỌC — 6 đoạn theo đúng cách chia của giáo trình
// ══════════════════════════════════════════
var dialogData = [
  {scene:'Đoạn 1 · Cuộc thi bắt đầu',
   preQuiz:[
     {q:'电台正在举行什么活动？',opts:['选最恩爱的夫妻','选最年轻的夫妻','选最有钱的夫妻'],ans:0},
     {q:'有几对夫妻入围？',opts:['三对','两对','五对'],ans:0}
   ],
   lines:[
    {sp:0,zh:'电台要选出一对最恩爱的夫妻。对比后，有三对夫妻入围。',py:'Diàntái yào xuǎnchū yí duì zuì ēn\'ài de fūqī. Duìbǐ hòu, yǒu sān duì fūqī rùwéi.',vn:'Đài phát thanh muốn chọn ra một cặp vợ chồng đằm thắm nhất. Sau khi đối chiếu, có ba cặp lọt vào vòng trong.'}
  ]},

  {scene:'Đoạn 2 · Cặp thứ nhất — người vợ bị liệt',
   preQuiz:[
     {q:'妻子前几年怎么了？',opts:['全身瘫痪了','出国了','换工作了'],ans:0},
     {q:'丈夫是怎么做的？',opts:['几年如一日地照顾她，从不抱怨','跟她离婚了','让别人照顾她'],ans:0}
   ],
   lines:[
    {sp:0,zh:'评委叫第一对夫妻说说他俩是如何恩爱的。妻子说，前几年她全身瘫痪了，医生说她站起来的可能性很小。',py:'Píngwěi jiào dì-yī duì fūqī shuōshuo tā liǎ shì rúhé ēn\'ài de. Qīzi shuō, qián jǐ nián tā quánshēn tānhuàn le, yīshēng shuō tā zhàn qǐlái de kěnéngxìng hěn xiǎo.',vn:'Giám khảo bảo cặp thứ nhất kể xem hai người đằm thắm ra sao. Người vợ nói, mấy năm trước cô bị liệt toàn thân, bác sĩ bảo khả năng đứng dậy được rất nhỏ.'},
    {sp:0,zh:'别人都觉得她的丈夫会跟她离婚，她也想过要自杀。但丈夫一直鼓励她，为她不知找了多少家医院，并且几年如一日地照顾她，从不抱怨。',py:'Biérén dōu juéde tā de zhàngfu huì gēn tā líhūn, tā yě xiǎngguo yào zìshā. Dàn zhàngfu yìzhí gǔlì tā, wèi tā bù zhī zhǎole duōshao jiā yīyuàn, bìngqiě jǐ nián rú yí rì de zhàogù tā, cóng bù bàoyuàn.',vn:'Ai cũng nghĩ chồng cô sẽ ly hôn, bản thân cô cũng từng nghĩ đến tự sát. Nhưng chồng luôn động viên cô, không biết đã tìm bao nhiêu bệnh viện cho cô, lại chăm sóc cô mấy năm như một ngày, chưa bao giờ than phiền.'},
    {sp:0,zh:'在丈夫的爱护和努力下，她终于又站了起来。她的故事十分感人，评委们听了都很感动。',py:'Zài zhàngfu de àihù hé nǔlì xià, tā zhōngyú yòu zhànle qǐlái. Tā de gùshi shífēn gǎnrén, píngwěimen tīngle dōu hěn gǎndòng.',vn:'Nhờ sự yêu thương và nỗ lực của chồng, cuối cùng cô đã đứng dậy được. Câu chuyện của cô rất cảm động, các giám khảo nghe xong đều xúc động.'}
  ]},

  {scene:'Đoạn 3 · Cặp thứ hai — mười mấy năm chưa từng cãi nhau',
   preQuiz:[
     {q:'第二对夫妻结婚多长时间了？',opts:['十几年','两三年','五年'],ans:0},
     {q:'他们的婚姻生活怎么样？',opts:['从来没吵过架，相敬如宾','经常吵架','刚刚离婚'],ans:0}
   ],
   lines:[
    {sp:0,zh:'随后进来的是第二对夫妻，他俩说，十几年的婚姻生活中，他们从来没为任何事红过脸、吵过架，一直相亲相爱、相敬如宾。评委们听了暗暗点头。',py:'Suíhòu jìnlái de shì dì-èr duì fūqī, tā liǎ shuō, shí jǐ nián de hūnyīn shēnghuó zhōng, tāmen cónglái méi wèi rènhé shì hóngguo liǎn, chǎoguo jià, yìzhí xiāng qīn xiāng ài, xiāng jìng rú bīn. Píngwěimen tīngle àn\'àn diǎntóu.',vn:'Tiếp đó là cặp thứ hai, hai người nói rằng trong hơn mười năm hôn nhân, họ chưa từng vì bất cứ chuyện gì mà đỏ mặt hay cãi nhau, luôn yêu thương và tôn trọng nhau như khách quý. Các giám khảo nghe xong thầm gật đầu.'}
  ]},

  {scene:'Đoạn 4 · Cặp thứ ba và mảnh giấy',
   preQuiz:[
     {q:'评委们走出来看到了什么？',opts:['男人的头靠在女人的肩膀上睡着了','两个人在吵架','两个人已经走了'],ans:0},
     {q:'女的为什么用左手写字？',opts:['右肩一直让丈夫的脑袋靠着','她是左撇子','她的右手受伤了'],ans:0},
     {q:'纸条上写的是什么？',opts:['别出声，他昨晚没睡好','我们不参加了','请等一下'],ans:0}
   ],
   lines:[
    {sp:0,zh:'轮到第三对夫妻了，却很长时间不见人。评委们等得有些不耐烦，就走出来看个究竟。只见第三对夫妻仍然坐在门口，男人的头靠在女人的肩膀上，睡着了。',py:'Lúndào dì-sān duì fūqī le, què hěn cháng shíjiān bú jiàn rén. Píngwěimen děng de yǒuxiē bú nàifán, jiù zǒu chūlái kàn ge jiūjìng. Zhǐ jiàn dì-sān duì fūqī réngrán zuò zài ménkǒu, nánrén de tóu kào zài nǚrén de jiānbǎng shang, shuìzháo le.',vn:'Đến lượt cặp thứ ba thì mãi không thấy người đâu. Các giám khảo chờ đến sốt ruột, bèn đi ra xem sao. Chỉ thấy cặp thứ ba vẫn ngồi ở cửa, đầu người chồng tựa lên vai vợ, ngủ thiếp đi.'},
    {sp:0,zh:'一个评委要上前喊醒那个男的，女的却伸出手指做了个小声的动作，然后小心地从包里拿出纸笔，用左手歪歪扭扭写下一行字递给评委，而她的右肩一直让丈夫的脑袋靠着。',py:'Yí ge píngwěi yào shàngqián hǎnxǐng nàge nán de, nǚ de què shēnchū shǒuzhǐ zuòle ge xiǎoshēng de dòngzuò, ránhòu xiǎoxīn de cóng bāo li náchū zhǐ bǐ, yòng zuǒshǒu wāiwāiniǔniǔ xiěxià yì háng zì dì gěi píngwěi, ér tā de yòu jiān yìzhí ràng zhàngfu de nǎodai kàozhe.',vn:'Một giám khảo định tiến lên gọi người chồng dậy, người vợ lại đưa ngón tay ra hiệu nói khẽ, rồi cẩn thận lấy giấy bút trong túi ra, dùng tay trái viết nguệch ngoạc một dòng chữ đưa cho giám khảo, còn vai phải vẫn để đầu chồng tựa vào.'},
    {sp:0,zh:'评委们看那纸条上面写着：别出声，他昨晚没睡好。一个评委提起笔在后面续写了一句话：但是女士，我们得听你们夫妻俩的叙述啊！又写：那我们就不参加了。',py:'Píngwěimen kàn nà zhǐtiáo shàngmiàn xiězhe: Bié chūshēng, tā zuó wǎn méi shuìhǎo. Yí ge píngwěi tíqǐ bǐ zài hòumiàn xùxiěle yí jù huà: Dànshì nǚshì, wǒmen děi tīng nǐmen fūqī liǎ de xùshù a! Yòu xiě: Nà wǒmen jiù bù cānjiā le.',vn:'Các giám khảo nhìn mảnh giấy, trên đó viết: Đừng lên tiếng, tối qua anh ấy ngủ không ngon. Một giám khảo cầm bút viết tiếp phía sau: Nhưng thưa cô, chúng tôi phải nghe hai vợ chồng kể lại chứ! Cô lại viết: Vậy chúng tôi không tham gia nữa.'}
  ]},

  {scene:'Đoạn 5 · Lý do bất ngờ',
   preQuiz:[
     {q:'大家为什么很吃惊？',opts:['女人为了丈夫睡觉居然放弃机会','女人生气走了','男人不会说话'],ans:0},
     {q:'男人昨晚做什么了？',opts:['后半夜为老婆赶蚊子','工作到很晚','跟朋友出去玩'],ans:0}
   ],
   lines:[
    {sp:0,zh:'大家很吃惊，这个女人为了不影响丈夫睡觉，居然放弃这次机会！但评委们还是决定先不催他们，而是再等待一段时间。',py:'Dàjiā hěn chījīng, zhège nǚrén wèile bù yǐngxiǎng zhàngfu shuìjiào, jūrán fàngqì zhè cì jīhuì! Dàn píngwěimen háishi juédìng xiān bú cuī tāmen, érshì zài děngdài yí duàn shíjiān.',vn:'Mọi người rất kinh ngạc, người phụ nữ này vì không muốn ảnh hưởng giấc ngủ của chồng mà lại từ bỏ cơ hội! Nhưng các giám khảo vẫn quyết định khoan giục họ, mà chờ thêm một lúc.'},
    {sp:0,zh:'过了一会儿，男人醒了。评委们问他怎么那么累。男人不好意思地笑笑说：“我家住一楼，蚊子多。昨晚半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。”',py:'Guòle yíhuìr, nánrén xǐng le. Píngwěimen wèn tā zěnme nàme lèi. Nánrén bù hǎoyìsi de xiàoxiao shuō: "Wǒ jiā zhù yī lóu, wénzi duō. Zuó wǎn bànyè wǒ bèi wénzi dīngxǐng le, wǒ pà wǒ lǎopo zài bèi chǎoxǐng, suǒyǐ hòu bànyè jiù zài wèi tā gǎn wénzi."',vn:'Một lát sau người chồng tỉnh dậy. Giám khảo hỏi sao anh mệt thế. Anh ngượng ngùng cười nói: "Nhà tôi ở tầng một, muỗi nhiều. Nửa đêm qua tôi bị muỗi đốt cho tỉnh, tôi sợ vợ lại bị đánh thức nên nửa đêm về sáng ngồi đuổi muỗi cho cô ấy."'}
  ]},

  {scene:'Đoạn 6 · Kết quả',
   preQuiz:[
     {q:'“最恩爱夫妻”奖给了哪对夫妻？',opts:['第三对','第一对','第二对'],ans:0},
     {q:'电台给第一对夫妻的称号是什么？',opts:['患难与共夫妻','相敬如宾夫妻','最恩爱夫妻'],ans:0}
   ],
   lines:[
    {sp:0,zh:'最后的结果是，电台增加了两项奖项，将第一对夫妻评为“患难与共夫妻”，将第二对夫妻评为“相敬如宾夫妻”，而真正的“最恩爱夫妻”奖，却给了第三对夫妻。',py:'Zuìhòu de jiéguǒ shì, diàntái zēngjiāle liǎng xiàng jiǎngxiàng, jiāng dì-yī duì fūqī píngwéi "huàn nàn yǔ gòng fūqī", jiāng dì-èr duì fūqī píngwéi "xiāng jìng rú bīn fūqī", ér zhēnzhèng de "zuì ēn\'ài fūqī" jiǎng, què gěile dì-sān duì fūqī.',vn:'Kết quả cuối cùng là đài tăng thêm hai hạng mục giải, trao cho cặp thứ nhất danh hiệu "vợ chồng hoạn nạn có nhau", cặp thứ hai "vợ chồng tương kính như tân", còn giải "vợ chồng đằm thắm nhất" thật sự thì lại trao cho cặp thứ ba.'}
  ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — phần riêng của HSK 5
// ══════════════════════════════════════════
var synonymData = [
  {pair:'如何 — 怎么',
   same:'Đều là đại từ, đều dùng để hỏi CÁCH THỨC. Ở chỗ hỏi cách thức thì thay cho nhau được.',
   sameEx:{zh:'只有知道如何／怎么停止的人，才知道如何／怎么高速前进。',vn:'Chỉ người biết dừng lại thế nào mới biết tiến nhanh ra sao.'},
   items:[
     {word:'如何',points:[
       'Thiên về VĂN VIẾT, trang trọng.',
       'KHÔNG dùng để hỏi nguyên nhân.',
       'Đặt CUỐI câu để hỏi tình hình hoặc xin ý kiến.'
     ],ex:[{zh:'该如何爱护我们的地球？',vn:'Nên gìn giữ trái đất của chúng ta như thế nào?'},
          {zh:'最近身体如何？',vn:'Dạo này sức khoẻ ra sao?'}]},
     {word:'怎么',points:[
       'Dùng được trong KHẨU NGỮ hằng ngày.',
       'Dùng được để hỏi NGUYÊN NHÂN.',
       'Đặt ĐẦU câu để tỏ ý ngạc nhiên.'
     ],ex:[{zh:'你今天是怎么来的？',vn:'Hôm nay bạn đến bằng cách nào?'},
          {zh:'今天怎么这么冷？',vn:'Hôm nay sao lạnh thế?'},
          {zh:'怎么，你不认识我了？！',vn:'Sao thế, cậu không nhận ra tớ à?!'}]}
   ],
   quiz:[
     {sentence:'他向经理叙述了自己是＿＿解决这个问题的。',options:['如何','怎么'],answer:0,both:true,
      why:'Câu thuật lại trong văn viết, dùng 如何 hợp hơn; 怎么 cũng đúng ngữ pháp nhưng khẩu ngữ hơn.'},
     {sentence:'你＿＿这么不耐烦？',options:['如何','怎么'],answer:1,
      why:'Hỏi NGUYÊN NHÂN — chỉ 怎么 làm được, 如何 không hỏi nguyên nhân.'},
     {sentence:'谁知道他们是＿＿吵起来的？',options:['如何','怎么'],answer:1,
      why:'Khẩu ngữ, hỏi nguyên nhân sự việc → 怎么.'},
     {sentence:'听说你去电台工作了？情况＿＿？',options:['如何','怎么'],answer:0,
      why:'Đặt CUỐI câu hỏi tình hình — chỉ 如何 dùng được ở vị trí này.'}
   ]},

  {pair:'等待 — 等',
   same:'Đều có nghĩa "chờ".',
   sameEx:{zh:'我在门口等待／等你。',vn:'Tôi chờ bạn ở cửa.'},
   items:[
     {word:'等待',points:[
       'Trang trọng, thiên về văn viết.',
       'Đối tượng thường TRỪU TƯỢNG: cơ hội, kết quả, thời cơ.',
       'Không dùng trong câu ngắn khẩu ngữ.'
     ],ex:[{zh:'机会是留给耐心等待的人的。',vn:'Cơ hội dành cho người biết kiên nhẫn chờ đợi.'}]},
     {word:'等',points:[
       'Khẩu ngữ hằng ngày.',
       'Đối tượng thường CỤ THỂ: người, xe, cơm.',
       'Dùng được một mình: 等一下！'
     ],ex:[{zh:'等一下，我马上就来。',vn:'Chờ chút, tôi đến ngay.'}]}
   ],
   quiz:[
     {sentence:'＿＿一下，我去拿伞。',options:['等待','等'],answer:1,why:'Khẩu ngữ, câu ngắn, đối tượng cụ thể → 等.'},
     {sentence:'他一直在＿＿一个合适的机会。',options:['等待','等'],answer:0,why:'Đối tượng trừu tượng (cơ hội), giọng văn trang trọng → 等待.'}
   ]},

  {pair:'抱怨 — 埋怨',
   same:'Đều là nói ra sự bất mãn.',
   sameEx:{zh:'他总是抱怨／埋怨天气不好。',vn:'Anh ta lúc nào cũng than phiền thời tiết xấu.'},
   items:[
     {word:'抱怨',points:[
       'Than phiền chung về hoàn cảnh, sự việc, người khác.',
       'Không nhất thiết có ai làm sai.'
     ],ex:[{zh:'他从不抱怨工作辛苦。',vn:'Anh ấy chưa bao giờ than phiền công việc vất vả.'}]},
     {word:'埋怨',points:[
       'TRÁCH cụ thể một người vì họ gây ra chuyện không hay.',
       'Có đối tượng để quy lỗi.'
     ],ex:[{zh:'别埋怨他了，他也不是故意的。',vn:'Đừng trách cậu ấy nữa, cậu ấy cũng không cố ý.'}]}
   ],
   quiz:[
     {sentence:'妈妈＿＿我回家太晚。',options:['抱怨','埋怨'],answer:1,why:'Trách cụ thể một người vì việc họ làm → 埋怨.'},
     {sentence:'他几年如一日地照顾妻子，从不＿＿。',options:['抱怨','埋怨'],answer:0,why:'Than phiền về hoàn cảnh nói chung, không quy lỗi ai → 抱怨.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT — tận dụng vốn từ Hán–Việt sẵn có
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'婚姻',hv:'hôn nhân',vn:'hôn nhân',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'离婚',hv:'ly hôn',vn:'ly hôn',note:'Trùng khít.'},
    {zh:'自杀',hv:'tự sát',vn:'tự sát',note:'Trùng khít.'},
    {zh:'细节',hv:'tế tiết',vn:'chi tiết',note:'“Tế” = nhỏ (như tế bào), “tiết” = đốt, khúc → khúc nhỏ = chi tiết.'},
    {zh:'电台',hv:'điện đài',vn:'đài phát thanh',note:'“Đài” trong đài truyền hình — nghe là đoán ra.'},
    {zh:'评委',hv:'bình uỷ',vn:'giám khảo',note:'“Bình” = bình chọn, “uỷ” = uỷ viên → uỷ viên chấm thi.'},
    {zh:'叙述',hv:'tự thuật',vn:'kể lại',note:'“Tự thuật” tiếng Việt cũng là kể lại chuyện mình.'},
    {zh:'等待',hv:'đẳng đãi',vn:'chờ đợi',note:'“Đãi” như trong “chờ đợi, đối đãi”.'},
    {zh:'爱护',hv:'ái hộ',vn:'yêu quý giữ gìn',note:'“Ái” = yêu, “hộ” = bảo hộ → yêu mà che chở.'}
  ],
  idiom:[
    {zh:'相敬如宾',hv:'tương kính như tân',vn:'vợ chồng kính trọng nhau như khách quý',note:'Thành ngữ Việt dùng y nguyên.'},
    {zh:'患难与共',hv:'hoạn nạn dữ cộng',vn:'hoạn nạn có nhau',note:'Tiếng Việt nói “hoạn nạn có nhau”.'}
  ],
  trap:[
    {zh:'老婆',hv:'lão bà',vn:'vợ',
     warn:'BẪY: “lão bà” trong tiếng Việt là bà già. Tiếng Trung 老婆 nghĩa là VỢ, và là cách gọi thân mật.'},
    {zh:'女士',hv:'nữ sĩ',vn:'quý bà, quý cô',
     warn:'BẪY: “nữ sĩ” tiếng Việt chỉ nhà văn nữ. 女士 tiếng Trung chỉ là cách gọi lịch sự với phụ nữ, như “Mrs./Ms.”.'},
    {zh:'脑袋',hv:'não đại',vn:'cái đầu',
     warn:'Không liên quan đến “não bộ” trang trọng — đây là từ khẩu ngữ, nghĩa là cái đầu.'},
    {zh:'对比',hv:'đối tỉ',vn:'đối chiếu, so sánh',
     warn:'Đừng dịch thành “đối phó”. 对比 là đặt cạnh nhau để so.'},
    {zh:'居然',hv:'cư nhiên',vn:'không ngờ lại',
     warn:'Âm Hán–Việt không gợi được nghĩa. Phải nhớ theo sắc thái: NGẠC NHIÊN, ngoài dự liệu.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ
// ══════════════════════════════════════════
// Ghép cụm — lấy đúng bảng 词语搭配 của giáo trình
var matchData = [
  {left:'注意',right:'细节'},
  {left:'爱护',right:'花草树木'},
  {left:'抱怨',right:'餐厅的菜不好吃'},
  {left:'详细地',right:'对比'},
  {left:'电台的',right:'记者'},
  {left:'暗暗',right:'点头'},
  {left:'轮到',right:'我了'},
  {left:'伸出',right:'手指'},
  {left:'靠在',right:'肩膀上'},
  {left:'被蚊子',right:'叮醒'},
  {left:'耐心',right:'等待'},
  {left:'简单地',right:'叙述'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'画画儿的时候我们要注意',blank:'细节',post:'。',hint:'(chi tiết)',ans:'细节'},
  {pre:'对比后，有三对夫妻',blank:'入围',post:'。',hint:'(lọt vào vòng trong)',ans:'入围'},
  {pre:'他几年如一日地照顾她，从不',blank:'抱怨',post:'。',hint:'(than phiền)',ans:'抱怨'},
  {pre:'评委们听了',blank:'暗暗',post:'点头。',hint:'(thầm)',ans:'暗暗'},
  {pre:'男人的头',blank:'靠',post:'在女人的肩膀上，睡着了。',hint:'(tựa)',ans:'靠'},
  {pre:'这个女人为了不影响丈夫睡觉，',blank:'居然',post:'放弃这次机会！',hint:'(không ngờ lại)',ans:'居然'},
  {pre:'今天',blank:'轮',post:'到我打扫教室了。',hint:'(đến lượt)',ans:'轮'},
  {pre:'昨晚半夜我被蚊子',blank:'叮',post:'醒了。',hint:'(muỗi đốt)',ans:'叮'},
  {pre:'这个问题该',blank:'如何',post:'解决？',hint:'(như thế nào — văn viết)',ans:'如何'},
  {pre:'机会是留给耐心',blank:'等待',post:'的人的。',hint:'(chờ đợi)',ans:'等待'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['电台','要','选出','一对','最恩爱的','夫妻','。'],ans:'电台要选出一对最恩爱的夫妻。',audio:'电台要选出一对最恩爱的夫妻。'},
  {words:['男人','的','头','靠','在','女人的肩膀上','。'],ans:'男人的头靠在女人的肩膀上。',audio:'男人的头靠在女人的肩膀上。'},
  {words:['她','居然','放弃','这次','机会','！'],ans:'她居然放弃这次机会！',audio:'她居然放弃这次机会！'},
  {words:['他','几年如一日','地','照顾','她','，','从不','抱怨','。'],ans:'他几年如一日地照顾她，从不抱怨。',audio:'他几年如一日地照顾她，从不抱怨。'},
  {words:['这个','问题','该','如何','解决','？'],ans:'这个问题该如何解决？',audio:'这个问题该如何解决？'},
  {words:['评委们','等','得','有些','不耐烦','。'],ans:'评委们等得有些不耐烦。',audio:'评委们等得有些不耐烦。'},
  {words:['她','伸出','手指','做','了','个','小声','的','动作','。'],ans:'她伸出手指做了个小声的动作。',audio:'她伸出手指做了个小声的动作。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'最近身体____？',opts:['如何','怎么','为什么','多少'],ans:0,
   exp:'Đặt CUỐI câu để hỏi tình hình — chỉ 如何 làm được. 怎么 không đứng cuối câu kiểu này.'},
  {wrong:'今天____这么冷？',opts:['怎么','如何','什么','哪儿'],ans:0,
   exp:'Hỏi NGUYÊN NHÂN — 如何 không dùng để hỏi nguyên nhân, chỉ 怎么 làm được.'},
  {wrong:'机会是留给耐心____的人的。',opts:['等待','等','等等','等到'],ans:0,
   exp:'Đối tượng trừu tượng (cơ hội) và giọng văn trang trọng → 等待. 等 quá khẩu ngữ cho câu này.'},
  {wrong:'妈妈____我回家太晚。',opts:['埋怨','抱怨','爱护','叙述'],ans:0,
   exp:'TRÁCH cụ thể một người vì việc họ làm → 埋怨. 抱怨 là than phiền chung, không quy lỗi ai.'},
  {wrong:'我们要____花草树木。',opts:['爱护','爱情','恩爱','抱怨'],ans:0,
   exp:'爱护 mang tân ngữ là môi trường, cây cỏ, của công. 爱情 là danh từ, không làm động từ được.'},
  {wrong:'他跟他老婆每星期都要____。',opts:['吵架','吵醒','喊醒','叮醒'],ans:0,
   exp:'Hai người to tiếng với nhau → 吵架. 吵醒 là làm ồn khiến ai đó tỉnh dậy, khác hẳn.'},
  {wrong:'这个女人为了不影响丈夫睡觉，____放弃这次机会！',opts:['居然','暗暗','一直','从来'],ans:0,
   exp:'Ngoài dự liệu, gây kinh ngạc → 居然. 暗暗 là làm thầm trong lòng, không mang nghĩa bất ngờ.'},
  {wrong:'她用左手____写下一行字。',opts:['歪歪扭扭','暗暗','简单','详细'],ans:0,
   exp:'Tả chữ viết không ngay ngắn → 歪歪扭扭. Các từ còn lại không tả được hình dáng nét chữ.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Khi vẽ tranh chúng ta phải chú ý đến chi tiết.',zh:'画画儿的时候我们要注意细节。',py:'Huà huàr de shíhou wǒmen yào zhùyì xìjié.'},
  {vi:'Hôm nay đến lượt tôi quét lớp.',zh:'今天轮到我打扫教室了。',py:'Jīntiān lúndào wǒ dǎsǎo jiàoshì le.'},
  {vi:'Dạo này sức khoẻ ra sao?',zh:'最近身体如何？',py:'Zuìjìn shēntǐ rúhé?'},
  {vi:'Bài dễ thế này mà bạn lại không làm được à?',zh:'这么简单的题，你居然也不会做？',py:'Zhème jiǎndān de tí, nǐ jūrán yě bú huì zuò?'},
  {vi:'Nửa đêm qua tôi bị muỗi đốt cho tỉnh dậy.',zh:'昨晚半夜我被蚊子叮醒了。',py:'Zuó wǎn bànyè wǒ bèi wénzi dīngxǐng le.'},
  {vi:'Bố mẹ tôi luôn tôn trọng nhau như khách quý.',zh:'我爸爸妈妈一直相敬如宾。',py:'Wǒ bàba māma yìzhí xiāng jìng rú bīn.'},
  {vi:'Anh ấy chưa bao giờ than phiền công việc vất vả.',zh:'他从不抱怨工作辛苦。',py:'Tā cóng bù bàoyuàn gōngzuò xīnkǔ.'},
  {vi:'Chúng ta phải giữ gìn môi trường, yêu quý cây cỏ.',zh:'我们要爱护环境，爱护花草树木。',py:'Wǒmen yào àihù huánjìng, àihù huācǎo shùmù.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Đài phát thanh muốn chọn ra một cặp vợ chồng đằm thắm nhất.',zh:'电台要选出一对最恩爱的夫妻。',py:'Diàntái yào xuǎnchū yí duì zuì ēn\'ài de fūqī.'},
  {vi:'Anh chăm sóc cô mấy năm như một ngày, chưa bao giờ than phiền.',zh:'他几年如一日地照顾她，从不抱怨。',py:'Tā jǐ nián rú yí rì de zhàogù tā, cóng bù bàoyuàn.'},
  {vi:'Các giám khảo nghe xong thầm gật đầu.',zh:'评委们听了暗暗点头。',py:'Píngwěimen tīngle àn\'àn diǎntóu.'},
  {vi:'Cô ấy lại từ bỏ cơ hội này!',zh:'她居然放弃这次机会！',py:'Tā jūrán fàngqì zhè cì jīhuì!'},
  {vi:'Vấn đề này nên giải quyết như thế nào?',zh:'这个问题该如何解决？',py:'Zhège wèntí gāi rúhé jiějué?'},
  {vi:'Các giám khảo chờ đến hơi sốt ruột.',zh:'评委们等得有些不耐烦。',py:'Píngwěimen děng de yǒuxiē bú nàifán.'},
  {vi:'Cô dùng tay trái viết nguệch ngoạc một dòng chữ đưa cho giám khảo.',zh:'她用左手歪歪扭扭写下一行字递给评委。',py:'Tā yòng zuǒshǒu wāiwāiniǔniǔ xiěxià yì háng zì dì gěi píngwěi.'},
  {vi:'Cơ hội dành cho người biết kiên nhẫn chờ đợi.',zh:'机会是留给耐心等待的人的。',py:'Jīhuì shì liú gěi nàixīn děngdài de rén de.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['恩爱','细节','抱怨','居然','相敬如宾'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về một cặp vợ chồng mà em biết.',
  outline:[
    'Câu mở: giới thiệu họ là ai, quan hệ thế nào.',
    'Thân: một CHI TIẾT nhỏ thể hiện tình cảm (dùng 细节).',
    'Chuyển: một chuyện bất ngờ (dùng 居然).',
    'Kết: nhận xét của em về hôn nhân của họ (dùng 相敬如宾 hoặc 恩爱).'
  ],
  model:{
    zh:'我的邻居是一对很恩爱的夫妻。他们结婚二十多年了，一直相敬如宾，从来没听他们吵过架。妻子身体不好，丈夫每天早上都为她做早饭，几年如一日，从不抱怨。有一次下大雨，丈夫居然走了两个小时去给她买药。我觉得真正的爱情就在这些小细节里。',
    py:'Wǒ de línjū shì yí duì hěn ēn\'ài de fūqī. Tāmen jiéhūn èrshí duō nián le, yìzhí xiāng jìng rú bīn, cónglái méi tīng tāmen chǎoguo jià. Qīzi shēntǐ bù hǎo, zhàngfu měi tiān zǎoshang dōu wèi tā zuò zǎofàn, jǐ nián rú yí rì, cóng bù bàoyuàn. Yǒu yí cì xià dàyǔ, zhàngfu jūrán zǒule liǎng ge xiǎoshí qù gěi tā mǎi yào. Wǒ juéde zhēnzhèng de àiqíng jiù zài zhèxiē xiǎo xìjié li.',
    vn:'Hàng xóm của tôi là một cặp vợ chồng rất đằm thắm. Họ cưới nhau hơn hai mươi năm, luôn tôn trọng nhau như khách quý, chưa bao giờ nghe họ cãi nhau. Người vợ sức khoẻ không tốt, người chồng sáng nào cũng nấu bữa sáng cho vợ, mấy năm như một ngày, chưa bao giờ than phiền. Có lần mưa to, người chồng lại đi bộ hai tiếng để mua thuốc cho vợ. Tôi thấy tình yêu thật sự nằm ngay trong những chi tiết nhỏ ấy.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có ít nhất một câu ghép (虽然…但是 / 因为…所以 / 不但…而且) chưa?',
    'Có dùng 了 / 过 đúng chỗ khi kể chuyện đã xảy ra chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，讲一对你认识的夫妻。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'恩爱', loai:'tính từ', cach:'一对恩爱的夫妻 · 夫妻俩很恩爱',
     sai:[{re:'恩爱(?=他|她|我|你|对方|妻子|丈夫|老婆|老公)', sua:'很爱……', giai:'恩爱 là TÍNH TỪ (vợ chồng đằm thắm), không mang tân ngữ. Muốn nói "yêu ai đó" thì dùng 爱.'}]},
    {tu:'细节', loai:'danh từ', cach:'生活中的细节 · 爱的细节 · 注意细节',
     sai:[{re:'(很|非常|十分|特别)细节', sua:'很细心 / 很注意细节', giai:'细节 là DANH TỪ (chi tiết), không đi sau 很. Muốn khen ai tỉ mỉ: 很细心 hoặc 很注意细节.'}]},
    {tu:'抱怨', loai:'động từ', cach:'从不抱怨 · 向/对 + người + 抱怨 + việc',
     sai:[{re:'抱怨给', sua:'向……抱怨', giai:'Không nói 抱怨给 ai. Than phiền với ai: 向/对 + người + 抱怨.'},
          {re:'抱怨(?=他|她|我|你)', sua:'对……有抱怨 / 向……抱怨', giai:'抱怨 thường không mang thẳng tân ngữ chỉ người; nói 向他抱怨 (than phiền với anh ấy) hoặc 抱怨他 + việc cụ thể.', nhe:true}]},
    {tu:'居然', loai:'phó từ', cach:'Chủ ngữ + 居然 + động từ (việc ngoài dự liệu)',
     sai:[{re:'居然(?=我们|你们|他们|她们|大家|我|你|他|她|丈夫|妻子|老婆|老公|爸爸|妈妈|朋友|邻居|同学|同事|老师|孩子)', sua:'他居然……', giai:'居然 là PHÓ TỪ nên đứng SAU chủ ngữ, trước động từ: 他居然…… chứ không 居然他…….'}]},
    {tu:'相敬如宾', loai:'thành ngữ (làm vị ngữ)', cach:'夫妻俩 + 一直 + 相敬如宾',
     sai:[{re:'(很|非常|十分|特别|太)相敬如宾', sua:'一直相敬如宾', giai:'Thành ngữ đã đủ nghĩa, không thêm 很/非常 phía trước. Có thể dùng 一直/始终 + 相敬如宾.'},
          {re:'相敬如宾(?=他|她|我|你|对方|妻子|丈夫)', sua:'互相尊重', giai:'相敬如宾 không mang tân ngữ (đã có nghĩa "tôn trọng NHAU"). Muốn nói tôn trọng ai: 尊重他.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'Chủ ngữ + 居然 + V', nhan:'居然', vd:'下大雨的时候，丈夫居然走了两个小时去给她买药。', khi:'Kể một việc NGOÀI DỰ LIỆU — tạo điểm nhấn cho câu chuyện.'},
    {ten:'……是如何……的', nhan:'如何', vd:'我问他们是如何保持恩爱的。', khi:'Hỏi/kể CÁCH THỨC, giọng văn viết.'},
    {ten:'靠在……上', nhan:'靠在', vd:'她累了，就把头靠在丈夫的肩膀上。', khi:'Tả một chi tiết nhỏ thể hiện tình cảm.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然生活不容易，但是他们从来不抱怨。', khi:'Nêu khó khăn rồi lật lại — thân đoạn.'},
    {ten:'从来 + 不/没(有)……过', nhan:'从来', vd:'二十年来，他们从来没吵过架。', khi:'Nhấn mạnh "chưa từng bao giờ".'},
    {ten:'不但……，而且……', nhan:'不但', vd:'他不但每天做早饭，而且从不抱怨。', khi:'Nối hai ý tăng tiến trong thân đoạn.'},
    {ten:'这件事让我明白了……', nhan:'让我明白', vd:'这件事让我明白，真正的爱就在细节里。', khi:'Câu KẾT — rút ra cảm nghĩ/bài học.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['一直','这对夫妻','相敬如宾','结婚以后'],
     dap:'这对夫妻结婚以后一直相敬如宾。', chap:['结婚以后这对夫妻一直相敬如宾。'],
     vn:'Cặp vợ chồng này từ sau khi cưới luôn tôn trọng nhau như khách.',
     giai:'Chủ ngữ 这对夫妻 → thời gian 结婚以后 → phó từ 一直 → vị ngữ 相敬如宾. Thời gian đứng TRƯỚC động từ (không đặt cuối câu như tiếng Việt).'},
    {manh:['忘了','居然','自己的生日','他'],
     dap:'他居然忘了自己的生日。',
     vn:'Anh ấy lại quên mất sinh nhật của chính mình.',
     giai:'居然 là phó từ: Chủ ngữ + 居然 + động từ. Không đặt 居然 trước chủ ngữ.'},
    {manh:['靠在','把头','她','丈夫的肩膀上'],
     dap:'她把头靠在丈夫的肩膀上。',
     vn:'Cô ấy tựa đầu lên vai chồng.',
     giai:'Câu 把 (HSK 3–4): Chủ ngữ + 把 + tân ngữ + động từ + 在 + nơi chốn. 靠在……上 là cấu trúc của bài.'},
    {manh:['恩爱的','想知道','评委','他们是如何'],
     dap:'评委想知道他们是如何恩爱的。',
     vn:'Ban giám khảo muốn biết họ đằm thắm như thế nào.',
     giai:'是 + 如何 + tính từ/động từ + 的: hỏi CÁCH THỨC theo lối văn viết. 如何 đứng ngay trước phần được hỏi.'},
    {manh:['抱怨过','从来','妻子','没有'],
     dap:'妻子从来没有抱怨过。',
     vn:'Người vợ chưa bao giờ than phiền.',
     giai:'从来 + 没(有) + V + 过 (HSK 3–4): nhấn mạnh chưa từng. 从来 luôn đứng trước 没有.'},
    {manh:['藏在','往往','爱的细节','生活的小事里'],
     dap:'爱的细节往往藏在生活的小事里。',
     vn:'Chi tiết của tình yêu thường ẩn trong những chuyện nhỏ của cuộc sống.',
     giai:'往往 là phó từ chỉ tần suất, đứng trước động từ 藏. V + 在 + nơi chốn làm bổ ngữ (藏在……里).'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 恩爱 · 细节 · 抱怨 · 居然 · 相敬如宾 · 患难与共.',
  questions:[
    {q_zh:'你觉得什么样的夫妻算恩爱？',
     q_vn:'Em thấy vợ chồng thế nào thì gọi là đằm thắm?',
     hint:'Dùng 我觉得…… + 恩爱',
     sample:'我觉得恩爱的夫妻不一定天天说“我爱你”，而是在生活的细节里互相照顾。',
     sample_vn:'Tôi thấy vợ chồng đằm thắm không nhất thiết ngày nào cũng nói “anh yêu em”, mà là chăm sóc nhau trong những chi tiết của đời sống.',
     note:'Câu này rất hay gặp ở phần thi nói HSKK — nên tập nói thành một đoạn 3–4 câu.'},
    {q_zh:'在你家，父母之间有哪些爱的细节？',
     q_vn:'Ở nhà em, giữa bố mẹ có những chi tiết yêu thương nào?',
     hint:'Kể một việc CỤ THỂ, dùng 细节',
     sample:'我爸爸每天早上都为妈妈做早饭，几年如一日，从不抱怨。这就是爱的细节。',
     sample_vn:'Bố tôi sáng nào cũng nấu bữa sáng cho mẹ, mấy năm như một ngày, chưa bao giờ than phiền. Đó chính là chi tiết của tình yêu.',
     note:'Kể việc cụ thể luôn ghi điểm cao hơn nói chung chung.'},
    {q_zh:'课文里三对夫妻，你最欣赏哪一对？为什么？',
     q_vn:'Trong ba cặp vợ chồng ở bài đọc, em thích cặp nào nhất? Vì sao?',
     hint:'Nêu ý kiến + lý do, dùng 因为……所以……',
     sample:'我最欣赏第三对。因为他们没有说一句话，但那些细节已经说明了一切。',
     sample_vn:'Tôi thích nhất cặp thứ ba. Vì họ không nói một lời nào, nhưng những chi tiết ấy đã nói lên tất cả.',
     note:'Phải có LÝ DO, chỉ nêu lựa chọn thì mất điểm.'},
    {q_zh:'你认为“相敬如宾”和“无话不说”，哪个对婚姻更重要？',
     q_vn:'Em cho rằng “tương kính như tân” và “nói với nhau mọi chuyện”, điều nào quan trọng hơn với hôn nhân?',
     hint:'So sánh hai vế, dùng 比……更……',
     sample:'我认为相敬如宾更重要。因为互相尊重了，才能一直患难与共地走下去。',
     sample_vn:'Tôi cho rằng tương kính như tân quan trọng hơn. Vì có tôn trọng nhau thì mới có thể hoạn nạn có nhau mà đi tiếp.',
     note:'Dạng câu hỏi so sánh — phải chọn hẳn một bên rồi bảo vệ, đừng trả lời “cả hai đều quan trọng”.'}
  ]
};

// Phần NGHE của bài này dùng file nghe của giáo trình (HSK标准教程5上).
// Khi nào có file mp3 thì khai báo listenData ở đây theo đúng khuôn của
// lesson-engine.js ({dictation, mc, audioParts}), rồi mở lại thẻ "Nghe"
// trong hsk5-bai-1.html. Hiện chưa có file nên thẻ này tạm ẩn.

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 1.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// Mục tiêu: nghe TRƯỚC khi nhìn chữ — đúng như phòng thi.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5上·练习册》第1课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你怎么这么累？昨天晚上太热了没睡好吧？'},
            {sp:'男',zh:'不是，半夜我被蚊子叮醒了，我怕我老婆再被吵醒，所以后半夜就在为她赶蚊子。'}],
     q:'男的昨晚为什么没睡好？',qvn:'Vì sao tối qua người đàn ông ngủ không ngon?',
     opts:['天气太热','在为老婆赶蚊子','孩子生病了','加班到很晚'],ans:1,
     why:'Người đàn ông nói rõ 后半夜就在为她赶蚊子 — nửa đêm về sáng ngồi đuổi muỗi cho vợ. Đáp án 天气太热 là điều người phụ nữ ĐOÁN, và đã bị phủ định bằng 不是.',
     words:['蚊子','叮','吵','老婆','半夜']},

    {n:2,
     lines:[{sp:'女',zh:'听说你们昨天大学同学聚会了？又见到陈兰了？'},
            {sp:'男',zh:'是啊。虽说离婚已经两年了，可是一见面，心里还是有种说不出的感觉……'}],
     q:'男的跟陈兰是什么关系？',qvn:'Người đàn ông và Trần Lan có quan hệ gì?',
     opts:['同事','前妻','妹妹','邻居'],ans:1,
     why:'Từ khoá là 离婚已经两年了 — đã ly hôn hai năm. Vậy Trần Lan là vợ cũ. Bẫy ở chỗ câu đầu nhắc 大学同学聚会, dễ chọn nhầm "bạn học".',
     words:['离婚']},

    {n:3,
     lines:[{sp:'男',zh:'今天菜怎么这么咸啊？'},
            {sp:'女',zh:'你每天回家就吃，什么家务活儿也不干，还说菜咸？'}],
     q:'女的是什么语气？',qvn:'Người phụ nữ nói với giọng điệu thế nào?',
     opts:['高兴','抱怨','害怕','吃惊'],ans:1,
     why:'Câu 什么家务活儿也不干，还说…… là mẫu câu TRÁCH MÓC điển hình. Dạng câu hỏi 语气 (giọng điệu) rất hay gặp ở HSK 5 — phải nghe THÁI ĐỘ chứ không chỉ nghe nội dung.',
     words:['抱怨']},

    {n:4,
     lines:[{sp:'女',zh:'大夫，你为什么要检查我的肩膀和胳膊呢？'},
            {sp:'男',zh:'手指麻木，不一定就是手指的问题，有关的部位都要检查。'}],
     q:'女的哪个地方不舒服？',qvn:'Người phụ nữ khó chịu ở chỗ nào?',
     opts:['肩膀','胳膊','手指','脖子'],ans:2,
     why:'Bác sĩ nói 手指麻木 — tê NGÓN TAY. Vai và cánh tay chỉ là chỗ bác sĩ kiểm tra THÊM. Đây là bẫy kinh điển: chỗ được nhắc nhiều nhất chưa chắc là đáp án.',
     words:['肩膀','手指']},

    {n:5,
     lines:[{sp:'男',zh:'高女士，请您简单地叙述一下以前的工作经历。'},
            {sp:'女',zh:'好的，我之前在一家电台工作……'}],
     q:'他们最有可能在干什么？',qvn:'Hai người nhiều khả năng đang làm gì?',
     opts:['看病','面试','上课','购物'],ans:1,
     why:'请您叙述一下以前的工作经历 = mời bà kể lại kinh nghiệm làm việc — đây là câu hỏi trong PHỎNG VẤN XIN VIỆC. Cách gọi 高女士 cũng cho thấy hoàn cảnh trang trọng.',
     words:['女士','叙述','电台']},

    {n:6,
     lines:[{sp:'女',zh:'你今天下午几点开会？'},
            {sp:'男',zh:'3点。'},
            {sp:'女',zh:'3点？现在都已经3点半了啊！'},
            {sp:'男',zh:'啊？我居然看错表了！'}],
     q:'男的怎么了？',qvn:'Người đàn ông bị sao?',
     opts:['忘了开会','看错时间了','走错地方了','没带手表'],ans:1,
     why:'我居然看错表了 — nhìn nhầm đồng hồ. 居然 ở đây lộ rõ thái độ NGOÀI DỰ LIỆU, đúng điểm ngữ pháp của bài.',
     words:['居然']},

    {n:7,
     lines:[{sp:'男',zh:'你觉得这两个哪个更好一些？'},
            {sp:'女',zh:'都挺好的，各有特点。'},
            {sp:'男',zh:'是啊，要是只有一个能得奖，就太可惜了。'},
            {sp:'女',zh:'我觉得我们可以建议增加一个奖项。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['选第一个','选第二个','多设一个奖','取消比赛'],ans:2,
     why:'建议增加一个奖项 = đề nghị thêm một hạng mục giải. Giống hệt kết bài đọc: 电台增加了两项奖项. Lượng từ 项 là từ mới của bài.',
     words:['项']},

    {n:8,
     lines:[{sp:'女',zh:'小刚，你打算什么时候带我回家见你父母？'},
            {sp:'男',zh:'我觉得现在还不是时候，过一段再说吧。'},
            {sp:'女',zh:'你想等到什么时候啊？我们交往也有大半年了……'},
            {sp:'男',zh:'你别烦我了！你知道我最近很忙，哪儿有时间静下心来想我们的事？'}],
     q:'说话的两个人是什么关系？',qvn:'Hai người đang nói chuyện có quan hệ gì?',
     opts:['同事','男女朋友','兄妹','师生'],ans:1,
     why:'带我回家见你父母 + 我们交往也有大半年了 — đang yêu nhau, chưa cưới. Nếu đã là vợ chồng thì không nói 交往.',
     words:['等待']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// Dạng được xếp ưu tiên CAO NHẤT cho luyện từ vựng: có ngữ cảnh thật,
// đáp án không cố định nhưng bị ràng buộc bởi yêu cầu.
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Sáng đến lớp, bạn thấy em mặt mũi phờ phạc.',
     a:{sp:'Bạn',zh:'你今天怎么这么累？',vn:'Hôm nay sao cậu mệt thế?'},
     need:['Dùng 居然','Nói một lý do CỤ THỂ, đừng nói chung chung'],
     sample:'昨晚半夜我居然被蚊子叮醒了，后半夜一直没睡好。',
     samplePy:'Zuó wǎn bànyè wǒ jūrán bèi wénzi dīngxǐng le, hòu bànyè yìzhí méi shuìhǎo.',
     sampleVn:'Nửa đêm qua tôi lại bị muỗi đốt cho tỉnh dậy, nửa đêm về sáng không ngủ được nữa.',
     tip:'居然 phải đứng SAU chủ ngữ. Nhiều bạn viết 居然我被蚊子叮醒了 — sai vị trí.'},

    {scene:'Cô giáo hỏi em về một cặp vợ chồng em quen.',
     a:{sp:'Cô',zh:'你觉得他们俩是什么样的夫妻？',vn:'Em thấy hai người họ là cặp vợ chồng thế nào?'},
     need:['Dùng 恩爱 hoặc 相敬如宾','Nêu một CHI TIẾT chứng minh'],
     sample:'他们很恩爱。丈夫每天早上都为妻子做早饭，几年如一日，从不抱怨。',
     samplePy:'Tāmen hěn ēn\'ài. Zhàngfu měi tiān zǎoshang dōu wèi qīzi zuò zǎofàn, jǐ nián rú yí rì, cóng bù bàoyuàn.',
     sampleVn:'Họ rất đằm thắm. Người chồng sáng nào cũng nấu bữa sáng cho vợ, mấy năm như một ngày, chưa bao giờ than phiền.',
     tip:'Nêu nhận xét rồi phải có DẪN CHỨNG — đây là thói quen bắt buộc ở HSK 5, cả phần nói lẫn phần viết.'},

    {scene:'Em đi phỏng vấn xin việc, nhà tuyển dụng hỏi.',
     a:{sp:'Nhà tuyển dụng',zh:'请您简单地叙述一下以前的工作经历。',vn:'Mời bạn kể sơ qua kinh nghiệm làm việc trước đây.'},
     need:['Dùng 叙述 hoặc 之前','Giữ giọng TRANG TRỌNG, đừng dùng khẩu ngữ'],
     sample:'好的。我之前在一家电台工作了三年，主要负责新闻采访。',
     samplePy:'Hǎo de. Wǒ zhīqián zài yì jiā diàntái gōngzuòle sān nián, zhǔyào fùzé xīnwén cǎifǎng.',
     sampleVn:'Vâng. Trước đây tôi làm ba năm ở một đài phát thanh, chủ yếu phụ trách phỏng vấn tin tức.',
     tip:'Hoàn cảnh trang trọng thì xưng 我 và dùng từ văn viết. Tránh 老婆, 脑袋 kiểu khẩu ngữ ở đây.'},

    {scene:'Bạn kể chuyện một người vợ bỏ cuộc thi để chồng được ngủ.',
     a:{sp:'Bạn',zh:'她为了不吵醒丈夫，放弃了比赛，你怎么看？',vn:'Cô ấy vì không muốn đánh thức chồng mà bỏ cuộc thi, cậu nghĩ sao?'},
     need:['Dùng 细节','Nêu rõ ý kiến của mình'],
     sample:'我觉得真正的爱情就在这些小细节里，比说一百句"我爱你"更有说服力。',
     samplePy:'Wǒ juéde zhēnzhèng de àiqíng jiù zài zhèxiē xiǎo xìjié li, bǐ shuō yì bǎi jù "wǒ ài nǐ" gèng yǒu shuōfúlì.',
     sampleVn:'Tôi thấy tình yêu thật sự nằm ngay trong những chi tiết nhỏ ấy, có sức thuyết phục hơn nói trăm câu "anh yêu em".',
     tip:'Câu hỏi 你怎么看 bắt buộc phải NÊU Ý KIẾN. Trả lời "cũng được" là mất điểm.'},

    {scene:'Em đến muộn, cả nhóm đã chờ rất lâu.',
     a:{sp:'Bạn',zh:'我们等了你快一个小时了！',vn:'Bọn tớ chờ cậu gần một tiếng rồi đấy!'},
     need:['Xin lỗi','Dùng 不耐烦 hoặc 等待 đúng chỗ'],
     sample:'真对不起，让你们等得这么不耐烦。路上堵车，我下次一定早点儿出发。',
     samplePy:'Zhēn duìbuqǐ, ràng nǐmen děng de zhème bú nàifán. Lù shang dǔchē, wǒ xià cì yídìng zǎo diǎnr chūfā.',
     sampleVn:'Thật xin lỗi, để mọi người chờ đến sốt ruột. Đường tắc, lần sau tôi nhất định đi sớm hơn.',
     tip:'不耐烦 tả TRẠNG THÁI của người chờ. Không nói 我不耐烦你们 — nó không mang tân ngữ kiểu đó.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体 (đặc trưng riêng của HSK 5)
// Lên HSK 5, bài tập không còn hỏi "câu nào ĐÚNG" mà hỏi
// "câu nào PHÙ HỢP HƠN với hoàn cảnh này". Cả hai câu đều đúng ngữ pháp.
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết báo cáo nộp cho giám đốc.',
     a:'这个问题该如何解决？',b:'这个问题该怎么解决？',better:'a',
     why:'Văn bản công ty là VĂN VIẾT. 如何 trang trọng, hợp với báo cáo. 怎么 không sai nhưng nghe như đang nói chuyện.'},

    {scene:'Em nhắn tin hỏi thăm bạn thân.',
     a:'最近身体如何？',b:'最近身体怎么样？',better:'b',
     why:'Nhắn cho bạn thân mà dùng 如何 thì nghe khách sáo, xa cách. Khẩu ngữ thân mật dùng 怎么样.'},

    {scene:'Em giới thiệu vợ mình với đối tác trong buổi họp.',
     a:'这是我老婆。',b:'这是我妻子。',better:'b',
     why:'老婆 là cách gọi THÂN MẬT trong nhà. Trước đối tác phải dùng 妻子. Đây là lỗi người Việt hay mắc vì sách dạy 老婆 trước.'},

    {scene:'Em kể chuyện vui với bạn cùng phòng.',
     a:'我老婆昨天又忘带钥匙了。',b:'我妻子昨天又忘带钥匙了。',better:'a',
     why:'Ngược lại: chuyện phiếm với bạn mà dùng 妻子 thì cứng nhắc. 老婆 mới tự nhiên.'},

    {scene:'Em viết một đoạn văn nộp cho cô giáo.',
     a:'他的脑袋靠在她肩膀上。',b:'他的头靠在她肩膀上。',better:'b',
     why:'脑袋 là khẩu ngữ. Bài viết nộp cô nên dùng 头. Hai từ cùng nghĩa nhưng khác NGỮ THỂ.'},

    {scene:'Em xin phép sếp nghỉ một buổi.',
     a:'我明天有事，不来了。',b:'不好意思，我明天有点儿事，想请一天假。',better:'b',
     why:'Câu a đúng ngữ pháp nhưng THIẾU LỄ ĐỘ — báo chứ không xin. Với cấp trên phải có 不好意思 + 想请假. HSK 5 chấm cả thái độ giao tiếp.'},

    {scene:'Cô giáo hỏi tình hình ôn thi của cả lớp trong cuộc họp phụ huynh.',
     a:'同学们最近复习得怎么样？',b:'同学们近期的复习情况如何？',better:'b',
     why:'Họp phụ huynh là hoàn cảnh trang trọng: 近期 + 情况如何 hợp hơn 最近 + 怎么样.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 (Cấp 3 · 交际性练习)
// Bài tập cuối của giáo trình: 用自己的话，复述课文内容
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập cuối trong giáo trình: <b>用自己的话，复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1 phút.',
  outline: [
    {step:'Mở', cue:'电台要选…… 有三对夫妻……', words:['电台','恩爱','对比','入围']},
    {step:'Cặp 1', cue:'妻子全身…… 丈夫一直……', words:['瘫痪','离婚','抱怨','爱护']},
    {step:'Cặp 2', cue:'十几年的婚姻生活中，他们从来……', words:['婚姻','吵架','相敬如宾','暗暗']},
    {step:'Cặp 3', cue:'轮到第三对时，评委们看到……', words:['轮','不耐烦','靠','肩膀','递']},
    {step:'Bất ngờ', cue:'原来男人昨晚……', words:['居然','蚊子','叮','老婆','吵']},
    {step:'Kết', cue:'最后电台增加了……', words:['项','患难与共']}
  ],
  checklist: [
    'Kể đủ sáu ý trên chưa, hay bỏ mất cặp nào?',
    'Có dùng được ít nhất 10 từ mới của bài không?',
    'Có dùng 居然 ở đúng chỗ bất ngờ không?',
    'Nói liền mạch khoảng 1 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// TỪ VỰNG — phần bổ sung theo format HSK 4 (bảng kết hợp từ, cấu trúc câu, luyện dịch)
// ══════════════════════════════════════════
var vocabExtra = {
  '细节': {
    colloFull: [
      {zh:'故事的细节', py:'gùshi de xìjié', vn:'chi tiết của câu chuyện'},
      {zh:'生活的细节', py:'shēnghuó de xìjié', vn:'chi tiết của cuộc sống'},
      {zh:'注意细节', py:'zhùyì xìjié', vn:'chú ý chi tiết'},
      {zh:'描写细节', py:'miáoxiě xìjié', vn:'miêu tả chi tiết'},
      {zh:'关注细节', py:'guānzhù xìjié', vn:'quan tâm đến chi tiết'}
    ],
    patterns: [
      {s:'注意 / 关注 / 描写 + 细节', m:'Chú ý / quan tâm / miêu tả chi tiết'},
      {s:'N + 的 + 细节', m:'Chi tiết của … (故事的细节, 生活的细节)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần bạn chú ý đến chi tiết thì sẽ không làm sai nhiều câu như vậy.', answer:'只要你注意细节，就不会做错那么多题。', answerPy:'Zhǐyào nǐ zhùyì xìjié, jiù bú huì zuòcuò nàme duō tí.',
       note:'注意细节 là cụm động–tân cố định; 只要 ở vế trước, 就 đứng trước động từ vế sau.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Câu chuyện này tuy ngắn nhưng các chi tiết rất cảm động.', answer:'这个故事虽然很短，但是细节很感人。', answerPy:'Zhège gùshi suīrán hěn duǎn, dànshì xìjié hěn gǎnrén.',
       note:'细节 làm chủ ngữ, vị ngữ là tính từ: 细节很感人.', pair:'虽然……但是……'}
    ]
  },

  '电台': {
    colloFull: [
      {zh:'一家电台', py:'yì jiā diàntái', vn:'một đài phát thanh'},
      {zh:'电台记者', py:'diàntái jìzhě', vn:'phóng viên đài phát thanh'},
      {zh:'电台广播', py:'diàntái guǎngbō', vn:'chương trình phát thanh'},
      {zh:'电台新闻', py:'diàntái xīnwén', vn:'tin tức trên đài'},
      {zh:'听电台', py:'tīng diàntái', vn:'nghe đài'}
    ],
    patterns: [
      {s:'Sub + 听 + 电台', m:'Ai đó nghe đài'},
      {s:'一家 / 一个 + 电台', m:'Lượng từ của 电台 là 家 hoặc 个'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Sáng nào ông tôi cũng vừa dậy là nghe đài.', answer:'我爷爷每天早上一起床就听电台。', answerPy:'Wǒ yéye měi tiān zǎoshang yì qǐchuáng jiù tīng diàntái.',
       note:'听电台 = nghe đài; 一 + động từ + 就: vừa … là ….', pair:'一……就……'},
      {promptLang:'vi', prompt:'Tin này là tôi nghe được trên đài phát thanh.', answer:'这个消息是我从电台听到的。', answerPy:'Zhège xiāoxi shì wǒ cóng diàntái tīngdào de.',
       note:'"Nghe trên đài" nói là 从电台听到, không dịch từng chữ thành 在电台上.', pair:'是……的'}
    ]
  },

  '恩爱': {
    colloFull: [
      {zh:'很恩爱', py:'hěn ēn\'ài', vn:'rất đằm thắm'},
      {zh:'最恩爱的夫妻', py:'zuì ēn\'ài de fūqī', vn:'cặp vợ chồng đằm thắm nhất'},
      {zh:'秀恩爱', py:'xiù ēn\'ài', vn:'khoe tình cảm'},
      {zh:'恩爱夫妻', py:'ēn\'ài fūqī', vn:'vợ chồng mặn nồng'}
    ],
    patterns: [
      {s:'夫妻 + 很 / 非常 + 恩爱', m:'Vợ chồng rất đằm thắm'},
      {s:'✗ 我和朋友很恩爱 → ✓ 我和朋友关系很好', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chú Vương và cô Vương nhà hàng xóm cưới nhau hai mươi năm rồi mà càng ngày càng đằm thắm.', answer:'邻居王叔叔和王阿姨结婚二十年了，越来越恩爱。', answerPy:'Línjū Wáng shūshu hé Wáng āyí jiéhūn èrshí nián le, yuè lái yuè ēn\'ài.',
       note:'恩爱 chỉ dùng cho vợ chồng; 越来越 + tính từ.', pair:'越来越……'},
      {promptLang:'vi', prompt:'Tuy họ hay cãi nhau nhưng thật ra rất đằm thắm.', answer:'他们虽然常常吵架，但是其实很恩爱。', answerPy:'Tāmen suīrán chángcháng chǎojià, dànshì qíshí hěn ēn\'ài.',
       note:'恩爱 đối lập với 吵架 — hai từ cùng bài.', pair:'虽然……但是……'}
    ]
  },

  '对比': {
    colloFull: [
      {zh:'对比一下', py:'duìbǐ yíxià', vn:'so sánh thử'},
      {zh:'进行对比', py:'jìnxíng duìbǐ', vn:'tiến hành đối chiếu'},
      {zh:'详细地对比', py:'xiángxì de duìbǐ', vn:'đối chiếu kỹ lưỡng'},
      {zh:'对比两张照片', py:'duìbǐ liǎng zhāng zhàopiàn', vn:'so hai tấm ảnh'}
    ],
    patterns: [
      {s:'把 A 和 B + 对比一下', m:'Đem A và B ra so sánh'},
      {s:'A 和 B + 进行对比', m:'Tiến hành đối chiếu A với B (văn viết)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bạn đem hai bài văn này ra so sánh một chút, xem bài nào viết hay hơn.', answer:'你把这两篇文章对比一下，看看哪篇写得更好。', answerPy:'Nǐ bǎ zhè liǎng piān wénzhāng duìbǐ yíxià, kànkan nǎ piān xiě de gèng hǎo.',
       note:'把 + tân ngữ + 对比一下: đưa hai thứ ra so sánh.', pair:'把'},
      {promptLang:'vi', prompt:'Vì mẹ đã so sánh kỹ giá ở ba cửa hàng nên mua được chiếc máy giặt rẻ nhất.', answer:'因为妈妈详细地对比了三家商店的价格，所以买到了最便宜的洗衣机。', answerPy:'Yīnwèi māma xiángxì de duìbǐle sān jiā shāngdiàn de jiàgé, suǒyǐ mǎidàole zuì piányi de xǐyījī.',
       note:'详细地 + 对比: trạng ngữ chỉ cách thức, cần có 地.', pair:'因为……所以……'}
    ]
  },

  '入围': {
    colloFull: [
      {zh:'……入围', py:'…… rùwéi', vn:'… lọt vào vòng trong'},
      {zh:'入围名单', py:'rùwéi míngdān', vn:'danh sách lọt vào vòng trong'},
      {zh:'三对夫妻入围', py:'sān duì fūqī rùwéi', vn:'ba cặp vợ chồng lọt vào vòng trong'},
      {zh:'没有入围', py:'méiyǒu rùwéi', vn:'không lọt vào vòng trong'}
    ],
    patterns: [
      {s:'Sub + 入围', m:'Ai đó lọt vào vòng trong (nội động từ)'},
      {s:'✗ 入围比赛 → ✓ 在比赛中入围', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Lần này không những tôi lọt vào vòng trong mà bạn cùng bàn của tôi cũng lọt vào.', answer:'这次不仅我入围了，我的同桌也入围了。', answerPy:'Zhè cì bùjǐn wǒ rùwéi le, wǒ de tóngzhuō yě rùwéi le.',
       note:'入围 là nội động từ, phía sau không mang tân ngữ.', pair:'不仅……也……'},
      {promptLang:'vi', prompt:'Tôi chưa từng lọt vào vòng trong ở cuộc thi nào cả.', answer:'我从来没在任何比赛中入围过。', answerPy:'Wǒ cónglái méi zài rènhé bǐsài zhōng rùwéiguo.',
       note:'Muốn nói "cuộc thi" phải đưa ra trước: 在比赛中入围, không nói 入围比赛.', pair:'从来没……过'}
    ]
  },

  '评委': {
    colloFull: [
      {zh:'三个评委', py:'sān ge píngwěi', vn:'ba giám khảo'},
      {zh:'评委们', py:'píngwěimen', vn:'các giám khảo'},
      {zh:'担任评委', py:'dānrèn píngwěi', vn:'làm giám khảo'},
      {zh:'一位评委', py:'yí wèi píngwěi', vn:'một vị giám khảo'},
      {zh:'评委打分', py:'píngwěi dǎfēn', vn:'giám khảo chấm điểm'}
    ],
    patterns: [
      {s:'担任 / 当 + 评委', m:'Làm giám khảo'},
      {s:'评委 + 给 + Sub + 打分', m:'Giám khảo chấm điểm cho ai'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cô giáo chúng tôi được mời làm giám khảo cuộc thi hát.', answer:'我们老师被邀请担任唱歌比赛的评委。', answerPy:'Wǒmen lǎoshī bèi yāoqǐng dānrèn chànggē bǐsài de píngwěi.',
       note:'担任 + 评委 = làm giám khảo; 被邀请 = được mời.', pair:'被'},
      {promptLang:'vi', prompt:'Cậu ấy hát hay quá, ngay cả giám khảo cũng vỗ tay.', answer:'他的歌唱得太好了，连评委都鼓掌了。', answerPy:'Tā de gē chàng de tài hǎo le, lián píngwěi dōu gǔzhǎng le.',
       note:'评委 là danh từ chỉ người, ở đây đứng sau 连 để nhấn mạnh.', pair:'连……都……'}
    ]
  },

  '如何': {
    colloFull: [
      {zh:'如何解决', py:'rúhé jiějué', vn:'giải quyết thế nào'},
      {zh:'该如何', py:'gāi rúhé', vn:'nên thế nào'},
      {zh:'情况如何', py:'qíngkuàng rúhé', vn:'tình hình ra sao'},
      {zh:'如何学习', py:'rúhé xuéxí', vn:'học như thế nào'},
      {zh:'不知如何是好', py:'bù zhī rúhé shì hǎo', vn:'không biết làm sao cho phải'}
    ],
    patterns: [
      {s:'如何 + V', m:'Làm (V) như thế nào — cách nói văn viết của 怎么'},
      {s:'N + 如何？', m:'… ra sao? — hỏi tình hình, = 怎么样'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Thầy giáo không những dạy chúng tôi kiến thức mà còn dạy chúng tôi học như thế nào.', answer:'老师不仅教我们知识，而且教我们如何学习。', answerPy:'Lǎoshī bùjǐn jiāo wǒmen zhīshi, érqiě jiāo wǒmen rúhé xuéxí.',
       note:'如何 + động từ: nói về cách thức, trang trọng hơn 怎么.', pair:'不仅……而且……'},
      {promptLang:'vi', prompt:'Tuy đã họp hai tiếng nhưng chúng tôi vẫn chưa biết nên giải quyết vấn đề này thế nào.', answer:'虽然开了两个小时的会，但是我们还不知道该如何解决这个问题。', answerPy:'Suīrán kāile liǎng ge xiǎoshí de huì, dànshì wǒmen hái bù zhīdào gāi rúhé jiějué zhège wèntí.',
       note:'该如何 + động từ = nên … thế nào.', pair:'虽然……但是……'}
    ]
  },

  '瘫痪': {
    colloFull: [
      {zh:'全身瘫痪', py:'quánshēn tānhuàn', vn:'liệt toàn thân'},
      {zh:'半身瘫痪', py:'bànshēn tānhuàn', vn:'liệt nửa người'},
      {zh:'交通瘫痪', py:'jiāotōng tānhuàn', vn:'giao thông tê liệt'},
      {zh:'瘫痪在床', py:'tānhuàn zài chuáng', vn:'liệt nằm trên giường'}
    ],
    patterns: [
      {s:'Sub + 全身 / 半身 + 瘫痪 + 了', m:'Ai đó bị liệt toàn thân / nửa người'},
      {s:'交通 / 系统 + 瘫痪', m:'Nghĩa bóng: giao thông, hệ thống bị tê liệt'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vì gặp một tai nạn giao thông nên ông ấy bị liệt nửa người.', answer:'因为出了一次交通事故，所以他半身瘫痪了。', answerPy:'Yīnwèi chūle yí cì jiāotōng shìgù, suǒyǐ tā bànshēn tānhuàn le.',
       note:'半身瘫痪 = liệt nửa người; 了 cuối câu chỉ sự thay đổi.', pair:'因为……所以……'},
      {promptLang:'vi', prompt:'Ở đây cứ mưa to là giao thông tê liệt.', answer:'这里一下大雨，交通就瘫痪。', answerPy:'Zhèlǐ yí xià dàyǔ, jiāotōng jiù tānhuàn.',
       note:'瘫痪 nghĩa bóng: giao thông, hệ thống ngừng hoạt động.', pair:'一……就……'}
    ]
  },

  '离婚': {
    colloFull: [
      {zh:'跟……离婚', py:'gēn…… líhūn', vn:'ly hôn với …'},
      {zh:'离过婚', py:'líguo hūn', vn:'đã từng ly hôn'},
      {zh:'办离婚手续', py:'bàn líhūn shǒuxù', vn:'làm thủ tục ly hôn'},
      {zh:'离了婚', py:'líle hūn', vn:'đã ly hôn'}
    ],
    patterns: [
      {s:'A + 跟 / 和 + B + 离婚', m:'A ly hôn với B'},
      {s:'✗ 离婚他 / 离婚过 → ✓ 跟他离婚 / 离过婚', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bố mẹ cậu ấy tuy đã ly hôn nhưng vẫn rất quan tâm đến cậu ấy.', answer:'他的父母虽然离婚了，但是还很关心他。', answerPy:'Tā de fùmǔ suīrán líhūn le, dànshì hái hěn guānxīn tā.',
       note:'离婚 là ly hợp từ, không mang tân ngữ trực tiếp.', pair:'虽然……但是……'}
    ]
  },

  '自杀': {
    colloFull: [
      {zh:'想自杀', py:'xiǎng zìshā', vn:'muốn tự sát'},
      {zh:'自杀行为', py:'zìshā xíngwéi', vn:'hành vi tự sát'},
      {zh:'想过要自杀', py:'xiǎngguo yào zìshā', vn:'từng nghĩ đến tự sát'},
      {zh:'防止自杀', py:'fángzhǐ zìshā', vn:'phòng ngừa tự sát'}
    ],
    patterns: [
      {s:'Sub + 想过 + (要) + 自杀', m:'Ai đó từng nghĩ đến chuyện tự sát'},
      {s:'✗ 自杀自己 → ✓ 自杀', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tuy cô ấy từng nghĩ đến tự sát nhưng chồng cô luôn động viên cô.', answer:'虽然她想过要自杀，但是丈夫一直鼓励她。', answerPy:'Suīrán tā xiǎngguo yào zìshā, dànshì zhàngfu yìzhí gǔlì tā.',
       note:'自杀 là nội động từ, không mang tân ngữ; 想过要自杀 = từng nghĩ đến tự sát.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Chỉ cần người nhà quan tâm và trò chuyện nhiều hơn thì rất nhiều hành vi tự sát có thể ngăn chặn được.', answer:'只要家人多关心、多沟通，很多自杀行为就能防止。', answerPy:'Zhǐyào jiārén duō guānxīn, duō gōutōng, hěn duō zìshā xíngwéi jiù néng fángzhǐ.',
       note:'自杀行为 = hành vi tự sát; 防止 + điều xấu = phòng ngừa.', pair:'只要……就……'}
    ]
  },

  '抱怨': {
    colloFull: [
      {zh:'抱怨别人', py:'bàoyuàn biérén', vn:'than phiền người khác'},
      {zh:'抱怨妻子', py:'bàoyuàn qīzi', vn:'trách móc vợ'},
      {zh:'从不抱怨', py:'cóng bù bàoyuàn', vn:'chưa bao giờ than phiền'},
      {zh:'抱怨天气', py:'bàoyuàn tiānqì', vn:'than thở về thời tiết'},
      {zh:'总是抱怨', py:'zǒngshì bàoyuàn', vn:'lúc nào cũng than phiền'}
    ],
    patterns: [
      {s:'Sub + 抱怨 + người / việc', m:'Than phiền về ai / việc gì'},
      {s:'Sub + 从不 / 从来不 + 抱怨', m:'Chưa bao giờ than phiền'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Em trai tôi không những không làm bài tập mà còn than bài tập quá nhiều.', answer:'我弟弟不仅不做作业，而且还抱怨作业太多。', answerPy:'Wǒ dìdi bùjǐn bú zuò zuòyè, érqiě hái bàoyuàn zuòyè tài duō.',
       note:'抱怨 có thể mang cả một mệnh đề làm tân ngữ: 抱怨作业太多.', pair:'不仅……而且……'},
      {promptLang:'vi', prompt:'Tuy ngày nào mẹ tôi đi làm cũng vất vả nhưng chưa từng than phiền.', answer:'我妈妈虽然每天工作都很辛苦，但是从来没抱怨过。', answerPy:'Wǒ māma suīrán měi tiān gōngzuò dōu hěn xīnkǔ, dànshì cónglái méi bàoyuànguo.',
       note:'从来没 + 抱怨 + 过 = chưa từng than phiền.', pair:'从来没……过'}
    ]
  },

  '爱护': {
    colloFull: [
      {zh:'爱护环境', py:'àihù huánjìng', vn:'giữ gìn môi trường'},
      {zh:'爱护花草树木', py:'àihù huācǎo shùmù', vn:'yêu quý cây cỏ'},
      {zh:'爱护公物', py:'àihù gōngwù', vn:'giữ gìn của công'},
      {zh:'爱护学生', py:'àihù xuésheng', vn:'yêu thương học sinh'},
      {zh:'爱护动物', py:'àihù dòngwù', vn:'bảo vệ động vật'}
    ],
    patterns: [
      {s:'Sub + 爱护 + N (环境 / 公物 / 学生…)', m:'Yêu quý, giữ gìn cái gì / ai'},
      {s:'在 + người + 的爱护下', m:'Dưới sự yêu thương chăm sóc của ai'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần mọi người đều giữ gìn của công thì trường chúng ta sẽ ngày càng đẹp hơn.', answer:'只要大家都爱护公物，我们的学校就会越来越漂亮。', answerPy:'Zhǐyào dàjiā dōu àihù gōngwù, wǒmen de xuéxiào jiù huì yuè lái yuè piàoliang.',
       note:'爱护公物 = giữ gìn tài sản chung, câu rất hay gặp ở trường học.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Cô chủ nhiệm lớp tôi vừa nghiêm khắc vừa rất thương yêu học sinh.', answer:'我们班主任既严格又很爱护学生。', answerPy:'Wǒmen bānzhǔrèn jì yángé yòu hěn àihù xuésheng.',
       note:'爱护学生 = thương yêu, chăm lo học sinh; 爱护 dùng được cho người.', pair:'既……又……'}
    ]
  },

  '婚姻': {
    colloFull: [
      {zh:'婚姻生活', py:'hūnyīn shēnghuó', vn:'đời sống hôn nhân'},
      {zh:'幸福的婚姻', py:'xìngfú de hūnyīn', vn:'cuộc hôn nhân hạnh phúc'},
      {zh:'婚姻问题', py:'hūnyīn wèntí', vn:'vấn đề hôn nhân'},
      {zh:'婚姻法', py:'hūnyīnfǎ', vn:'luật hôn nhân'}
    ],
    patterns: [
      {s:'……的 + 婚姻 / 婚姻 + 生活 / 问题', m:'婚姻 là danh từ: làm trung tâm ngữ hoặc định ngữ'},
      {s:'✗ 他们下个月婚姻 → ✓ 他们下个月结婚', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Một cuộc hôn nhân hạnh phúc không phải dựa vào tiền mà là dựa vào sự thấu hiểu lẫn nhau.', answer:'幸福的婚姻不是靠钱，而是靠互相理解。', answerPy:'Xìngfú de hūnyīn bú shì kào qián, ér shì kào hùxiāng lǐjiě.',
       note:'婚姻 là danh từ, khác 结婚 (động từ); 靠 = dựa vào.', pair:'不是……而是……'},
      {promptLang:'vi', prompt:'Bố mẹ tôi tuy đôi khi cãi nhau nhưng đời sống hôn nhân rất hạnh phúc.', answer:'我父母虽然有时候吵架，但是婚姻生活很幸福。', answerPy:'Wǒ fùmǔ suīrán yǒu shíhou chǎojià, dànshì hūnyīn shēnghuó hěn xìngfú.',
       note:'婚姻生活 = đời sống hôn nhân.', pair:'虽然……但是……'}
    ]
  },

  '吵架': {
    colloFull: [
      {zh:'A和B吵架', py:'A hé B chǎojià', vn:'A cãi nhau với B'},
      {zh:'吵过架', py:'chǎoguo jià', vn:'đã từng cãi nhau'},
      {zh:'跟……吵架', py:'gēn…… chǎojià', vn:'cãi nhau với …'},
      {zh:'吵了一架', py:'chǎole yí jià', vn:'cãi nhau một trận'}
    ],
    patterns: [
      {s:'A + 和 / 跟 + B + 吵架', m:'A cãi nhau với B'},
      {s:'✗ 吵架他 → ✓ 跟他吵架', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi bị tiếng cãi nhau của hàng xóm đánh thức.', answer:'我被邻居吵架的声音吵醒了。', answerPy:'Wǒ bèi línjū chǎojià de shēngyīn chǎoxǐng le.',
       note:'吵架 (cãi nhau) khác 吵醒 (làm ồn đánh thức): cùng chữ 吵 nhưng nghĩa khác.', pair:'被'}
    ]
  },

  '相敬如宾': {
    colloFull: [
      {zh:'相亲相爱、相敬如宾', py:'xiāng qīn xiāng ài, xiāng jìng rú bīn', vn:'yêu thương nhau, tôn trọng nhau như khách'},
      {zh:'夫妻相敬如宾', py:'fūqī xiāng jìng rú bīn', vn:'vợ chồng tương kính như tân'},
      {zh:'一直相敬如宾', py:'yìzhí xiāng jìng rú bīn', vn:'luôn tôn trọng nhau như khách'},
      {zh:'相敬如宾夫妻', py:'xiāng jìng rú bīn fūqī', vn:'cặp vợ chồng tương kính như tân'}
    ],
    patterns: [
      {s:'夫妻 + (一直) + 相敬如宾', m:'Vợ chồng (luôn) tôn trọng nhau như khách quý'},
      {s:'✗ 我和同学相敬如宾 → ✓ 我和同学互相尊重', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Ông bà tôi cưới nhau năm mươi năm, chưa từng to tiếng với nhau, luôn tôn trọng nhau như khách.', answer:'我爷爷奶奶结婚五十年，从来没红过脸，一直相敬如宾。', answerPy:'Wǒ yéye nǎinai jiéhūn wǔshí nián, cónglái méi hóngguo liǎn, yìzhí xiāng jìng rú bīn.',
       note:'相敬如宾 làm vị ngữ, chủ ngữ là một cặp vợ chồng.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Họ không những yêu thương nhau mà còn tôn trọng nhau như khách quý.', answer:'他们不仅相亲相爱，而且相敬如宾。', answerPy:'Tāmen bùjǐn xiāng qīn xiāng ài, érqiě xiāng jìng rú bīn.',
       note:'相敬如宾 hay đi cặp với 相亲相爱.', pair:'不仅……而且……'}
    ]
  },

  '暗暗': {
    colloFull: [
      {zh:'暗暗决定', py:'àn\'àn juédìng', vn:'thầm quyết định'},
      {zh:'暗暗点头', py:'àn\'àn diǎntóu', vn:'thầm gật đầu'},
      {zh:'暗暗下决心', py:'àn\'àn xià juéxīn', vn:'thầm hạ quyết tâm'},
      {zh:'暗暗高兴', py:'àn\'àn gāoxìng', vn:'thầm vui'},
      {zh:'暗暗吃惊', py:'àn\'àn chījīng', vn:'thầm kinh ngạc'}
    ],
    patterns: [
      {s:'Sub + 暗暗 + V / tính từ tâm lý', m:'Thầm làm gì / thầm cảm thấy gì'},
      {s:'✗ 他决定暗暗 → ✓ 他暗暗决定', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vừa nhìn thấy điểm thi, cậu ấy liền thầm hạ quyết tâm phải học chăm chỉ.', answer:'他一看到考试成绩，就暗暗下决心要努力学习。', answerPy:'Tā yí kàndào kǎoshì chéngjì, jiù àn\'àn xià juéxīn yào nǔlì xuéxí.',
       note:'暗暗 đứng trước động từ, sau 就.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Được cô giáo khen, cô ấy tuy không nói gì nhưng trong lòng thầm vui.', answer:'听到老师的表扬，她虽然没说什么，但是心里暗暗高兴。', answerPy:'Tīngdào lǎoshī de biǎoyáng, tā suīrán méi shuō shénme, dànshì xīnli àn\'àn gāoxìng.',
       note:'暗暗 + tính từ tâm lý: niềm vui giấu trong lòng.', pair:'虽然……但是……'}
    ]
  },

  '轮': {
    colloFull: [
      {zh:'轮到', py:'lúndào', vn:'đến lượt'},
      {zh:'轮流', py:'lúnliú', vn:'lần lượt, thay phiên'},
      {zh:'轮到我了', py:'lúndào wǒ le', vn:'đến lượt tôi rồi'},
      {zh:'轮到谁', py:'lúndào shéi', vn:'đến lượt ai'}
    ],
    patterns: [
      {s:'轮到 + người + (V) + 了', m:'Đến lượt ai (làm gì) rồi'},
      {s:'Sub (số nhiều) + 轮流 + V', m:'Thay phiên nhau làm gì'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vừa đến lượt tôi phát biểu thì chuông hết giờ reo.', answer:'一轮到我发言，下课铃就响了。', answerPy:'Yì lúndào wǒ fāyán, xiàkè líng jiù xiǎng le.',
       note:'轮到 + người + động từ: đến lượt ai làm gì.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Lớp tôi mọi người thay phiên nhau quét lớp, ngay cả lớp trưởng cũng không ngoại lệ.', answer:'我们班大家轮流打扫教室，连班长都不例外。', answerPy:'Wǒmen bān dàjiā lúnliú dǎsǎo jiàoshì, lián bānzhǎng dōu bú lìwài.',
       note:'轮流 = thay phiên nhau, chủ ngữ phải là số nhiều.', pair:'连……都……'}
    ]
  },

  '不耐烦': {
    colloFull: [
      {zh:'有些不耐烦', py:'yǒuxiē bú nàifán', vn:'hơi sốt ruột'},
      {zh:'等得不耐烦', py:'děng de bú nàifán', vn:'chờ đến sốt ruột'},
      {zh:'不耐烦地说', py:'bú nàifán de shuō', vn:'nói với vẻ mất kiên nhẫn'},
      {zh:'越来越不耐烦', py:'yuè lái yuè bú nàifán', vn:'càng lúc càng sốt ruột'}
    ],
    patterns: [
      {s:'Sub + 有点儿 / 有些 + 不耐烦', m:'Ai đó hơi sốt ruột'},
      {s:'V + 得 + 不耐烦', m:'Làm gì đến mức mất kiên nhẫn'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Xe buýt mãi không đến, mọi người chờ càng lúc càng sốt ruột.', answer:'公共汽车一直不来，大家等得越来越不耐烦了。', answerPy:'Gōnggòng qìchē yìzhí bù lái, dàjiā děng de yuè lái yuè bú nàifán le.',
       note:'V + 得 + 不耐烦; 不 đọc bú vì đứng trước thanh 4.', pair:'越来越……'},
      {promptLang:'vi', prompt:'Anh trai bị em gái hỏi đến mức mất kiên nhẫn.', answer:'哥哥被妹妹问得不耐烦了。', answerPy:'Gēge bèi mèimei wèn de bú nàifán le.',
       note:'被 + người + V + 得 + 不耐烦: bị ai làm cho mất kiên nhẫn.', pair:'被'}
    ]
  },

  '靠': {
    colloFull: [
      {zh:'靠着桌子', py:'kàozhe zhuōzi', vn:'tựa vào bàn'},
      {zh:'靠在肩膀上', py:'kào zài jiānbǎng shang', vn:'tựa lên vai'},
      {zh:'靠父母', py:'kào fùmǔ', vn:'dựa vào bố mẹ'},
      {zh:'靠自己', py:'kào zìjǐ', vn:'dựa vào bản thân'},
      {zh:'靠在墙上', py:'kào zài qiáng shang', vn:'tựa vào tường'}
    ],
    patterns: [
      {s:'靠着 / 靠在 + nơi chốn', m:'Tựa vào đâu (nghĩa gốc)'},
      {s:'靠 + người / cách thức + V', m:'Nhờ vào, dựa vào ai / cái gì (nghĩa mở rộng)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Anh ấy không dựa vào bố mẹ mà dựa vào chính mình để mua được nhà.', answer:'他不是靠父母，而是靠自己买到了房子。', answerPy:'Tā bú shì kào fùmǔ, ér shì kào zìjǐ mǎidàole fángzi.',
       note:'靠 + người = dựa vào ai (nghĩa mở rộng).', pair:'不是……而是……'},
      {promptLang:'vi', prompt:'Cậu ấy mệt quá, vừa dựa vào tường là ngủ luôn.', answer:'他太累了，一靠在墙上就睡着了。', answerPy:'Tā tài lèi le, yí kào zài qiáng shang jiù shuìzháo le.',
       note:'靠在 + nơi chốn + 上: nghĩa gốc là tựa vào.', pair:'一……就……'}
    ]
  },

  '肩膀': {
    colloFull: [
      {zh:'靠在肩膀上', py:'kào zài jiānbǎng shang', vn:'tựa lên vai'},
      {zh:'拍拍肩膀', py:'pāipai jiānbǎng', vn:'vỗ vai'},
      {zh:'肩膀疼', py:'jiānbǎng téng', vn:'đau vai'},
      {zh:'宽宽的肩膀', py:'kuānkuān de jiānbǎng', vn:'bờ vai rộng'}
    ],
    patterns: [
      {s:'靠在 + 某人的 + 肩膀上', m:'Tựa lên vai ai'},
      {s:'拍拍 + 某人的 + 肩膀', m:'Vỗ vai ai (động viên)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Em gái tựa đầu lên vai tôi rồi ngủ thiếp đi.', answer:'妹妹把头靠在我的肩膀上睡着了。', answerPy:'Mèimei bǎ tóu kào zài wǒ de jiānbǎng shang shuìzháo le.',
       note:'把 + 头 + 靠在 + … + 肩膀上: câu 把 với bổ ngữ nơi chốn.', pair:'把'},
      {promptLang:'vi', prompt:'Vì ngày nào cũng đeo cặp sách nặng nên vai tôi rất đau.', answer:'因为每天背很重的书包，所以我的肩膀很疼。', answerPy:'Yīnwèi měi tiān bēi hěn zhòng de shūbāo, suǒyǐ wǒ de jiānbǎng hěn téng.',
       note:'背 đọc bēi (đeo trên lưng); 肩膀疼 = đau vai.', pair:'因为……所以……'}
    ]
  },

  '喊': {
    colloFull: [
      {zh:'喊他', py:'hǎn tā', vn:'gọi anh ấy'},
      {zh:'喊醒', py:'hǎnxǐng', vn:'gọi dậy'},
      {zh:'大声喊', py:'dàshēng hǎn', vn:'gọi to, hét to'},
      {zh:'喊名字', py:'hǎn míngzi', vn:'gọi tên'},
      {zh:'喊救命', py:'hǎn jiùmìng', vn:'kêu cứu'}
    ],
    patterns: [
      {s:'喊 + người + (V)', m:'Gọi ai (làm gì): 喊他吃饭'},
      {s:'把 + người + 喊醒', m:'Gọi ai tỉnh dậy'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Sáng nay mẹ gọi ba lần mới gọi được tôi dậy.', answer:'今天早上妈妈喊了三次才把我喊醒。', answerPy:'Jīntiān zǎoshang māma hǎnle sān cì cái bǎ wǒ hǎnxǐng.',
       note:'喊醒 = gọi cho tỉnh (bổ ngữ kết quả); 才 nhấn mạnh khó khăn, muộn.', pair:'把'},
      {promptLang:'vi', prompt:'Tuy tôi gọi to tên cậu ấy nhưng cậu ấy không nghe thấy.', answer:'虽然我大声喊他的名字，但是他没听见。', answerPy:'Suīrán wǒ dàshēng hǎn tā de míngzi, dànshì tā méi tīngjiàn.',
       note:'大声喊 = gọi to; 喊 + tên / người.', pair:'虽然……但是……'}
    ]
  },

  '伸': {
    colloFull: [
      {zh:'伸手', py:'shēnshǒu', vn:'đưa tay ra'},
      {zh:'伸出手指', py:'shēnchū shǒuzhǐ', vn:'giơ ngón tay ra'},
      {zh:'伸懒腰', py:'shēn lǎnyāo', vn:'vươn vai'},
      {zh:'伸出舌头', py:'shēnchū shétou', vn:'thè lưỡi'},
      {zh:'伸腿', py:'shēn tuǐ', vn:'duỗi chân'}
    ],
    patterns: [
      {s:'伸 + (出) + bộ phận cơ thể', m:'Đưa / duỗi một bộ phận cơ thể ra'},
      {s:'把 + bộ phận cơ thể + 伸出来', m:'Đưa (tay, chân…) ra'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vừa ngủ dậy, cậu ấy liền vươn vai một cái.', answer:'他一起床就伸了个懒腰。', answerPy:'Tā yì qǐchuáng jiù shēnle ge lǎnyāo.',
       note:'伸懒腰 tách được: 伸了个懒腰.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Em đưa tay ra cho bác sĩ xem nào.', answer:'把手伸出来，让医生看看。', answerPy:'Bǎ shǒu shēn chūlái, ràng yīshēng kànkan.',
       note:'把 + 手 + 伸出来: bổ ngữ xu hướng 出来 đi sau 伸.', pair:'把'}
    ]
  },

  '手指': {
    colloFull: [
      {zh:'一根手指', py:'yì gēn shǒuzhǐ', vn:'một ngón tay'},
      {zh:'伸出手指', py:'shēnchū shǒuzhǐ', vn:'giơ ngón tay ra'},
      {zh:'手指受伤', py:'shǒuzhǐ shòushāng', vn:'ngón tay bị thương'},
      {zh:'十根手指', py:'shí gēn shǒuzhǐ', vn:'mười ngón tay'}
    ],
    patterns: [
      {s:'一 / 几 + 根 + 手指', m:'Lượng từ của 手指 là 根'},
      {s:'用 + 手指 + V', m:'Dùng ngón tay làm gì'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Lúc thái rau, ngón tay mẹ bị dao cắt trúng.', answer:'切菜的时候，妈妈的手指被刀切破了。', answerPy:'Qiē cài de shíhou, māma de shǒuzhǐ bèi dāo qiēpò le.',
       note:'手指 làm chủ ngữ của câu bị động 被.', pair:'被'},
      {promptLang:'vi', prompt:'Anh ấy lạnh đến mức ngay cả ngón tay cũng không cử động được.', answer:'他冷得连手指都动不了了。', answerPy:'Tā lěng de lián shǒuzhǐ dōu dòng bu liǎo le.',
       note:'连 + 手指 + 都: nhấn mạnh mức độ cực đoan.', pair:'连……都……'}
    ]
  },

  '歪歪扭扭': {
    colloFull: [
      {zh:'歪歪扭扭地写', py:'wāiwāiniǔniǔ de xiě', vn:'viết nguệch ngoạc'},
      {zh:'字写得歪歪扭扭', py:'zì xiě de wāiwāiniǔniǔ', vn:'chữ viết xiêu vẹo'},
      {zh:'歪歪扭扭的字', py:'wāiwāiniǔniǔ de zì', vn:'chữ nguệch ngoạc'},
      {zh:'歪歪扭扭的小路', py:'wāiwāiniǔniǔ de xiǎolù', vn:'con đường nhỏ ngoằn ngoèo'}
    ],
    patterns: [
      {s:'歪歪扭扭 + 地 + V', m:'Làm gì một cách xiêu vẹo (trạng ngữ)'},
      {s:'V + 得 + 歪歪扭扭', m:'(Viết, xếp…) đến mức xiêu vẹo (bổ ngữ)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hồi mới học chữ Hán, chữ tôi viết nguệch ngoạc, bây giờ càng ngày càng đẹp.', answer:'刚学汉字的时候，我的字写得歪歪扭扭，现在越来越好看了。', answerPy:'Gāng xué Hànzì de shíhou, wǒ de zì xiě de wāiwāiniǔniǔ, xiànzài yuè lái yuè hǎokàn le.',
       note:'V + 得 + 歪歪扭扭: làm bổ ngữ trạng thái.', pair:'越来越……'},
      {promptLang:'vi', prompt:'Vì tay phải bị thương nên cậu ấy chỉ có thể dùng tay trái viết nguệch ngoạc.', answer:'因为他的右手受伤了，所以只能用左手歪歪扭扭地写字。', answerPy:'Yīnwèi tā de yòushǒu shòushāng le, suǒyǐ zhǐ néng yòng zuǒshǒu wāiwāiniǔniǔ de xiě zì.',
       note:'歪歪扭扭 + 地 + 写: làm trạng ngữ trước động từ.', pair:'因为……所以……'}
    ]
  },

  '递': {
    colloFull: [
      {zh:'递给', py:'dì gěi', vn:'đưa cho'},
      {zh:'传递', py:'chuándì', vn:'truyền, chuyển'},
      {zh:'递给评委', py:'dì gěi píngwěi', vn:'đưa cho giám khảo'},
      {zh:'递纸条', py:'dì zhǐtiáo', vn:'chuyền mảnh giấy'},
      {zh:'传递信息', py:'chuándì xìnxī', vn:'truyền tin'}
    ],
    patterns: [
      {s:'递给 + người + vật', m:'Đưa vật gì cho ai'},
      {s:'把 + vật + 递给 + người', m:'Đưa vật gì cho ai (câu 把)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bạn đưa giúp tôi cái bút kia được không?', answer:'你能把那支笔递给我吗？', answerPy:'Nǐ néng bǎ nà zhī bǐ dì gěi wǒ ma?',
       note:'把 + vật + 递给 + người.', pair:'把'},
      {promptLang:'vi', prompt:'Trong giờ học cậu ta chuyền giấy cho bạn cùng bàn và bị cô giáo phát hiện.', answer:'他上课的时候给同桌递纸条，被老师发现了。', answerPy:'Tā shàngkè de shíhou gěi tóngzhuō dì zhǐtiáo, bèi lǎoshī fāxiàn le.',
       note:'给 + người + 递 + vật cũng đúng; 递纸条 = chuyền giấy.', pair:'被'}
    ]
  },

  '脑袋': {
    colloFull: [
      {zh:'摇摇脑袋', py:'yáoyao nǎodai', vn:'lắc đầu'},
      {zh:'脑袋靠着', py:'nǎodai kàozhe', vn:'đầu tựa vào'},
      {zh:'小脑袋', py:'xiǎo nǎodai', vn:'cái đầu nhỏ'},
      {zh:'脑袋疼', py:'nǎodai téng', vn:'đau đầu'}
    ],
    patterns: [
      {s:'摇摇 / 点点 + 脑袋', m:'Lắc / gật đầu (khẩu ngữ)'},
      {s:'脑袋 (khẩu ngữ) ↔ 头 (văn viết)', m:'Văn viết, nơi trang trọng dùng 头'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi vừa hỏi, cậu ấy liền lắc đầu, chẳng nói gì cả.', answer:'我一问他，他就摇摇脑袋，什么也不说。', answerPy:'Wǒ yí wèn tā, tā jiù yáoyao nǎodai, shénme yě bù shuō.',
       note:'摇摇脑袋 = lắc đầu, cách nói khẩu ngữ của 摇头.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Vì làm bài toán cả buổi tối nên đầu tôi đau quá.', answer:'因为做了一晚上的数学题，所以我的脑袋很疼。', answerPy:'Yīnwèi zuòle yì wǎnshang de shùxué tí, suǒyǐ wǒ de nǎodai hěn téng.',
       note:'脑袋疼 = 头疼, sắc thái khẩu ngữ.', pair:'因为……所以……'}
    ]
  },

  '女士': {
    colloFull: [
      {zh:'王女士', py:'Wáng nǚshì', vn:'bà Vương'},
      {zh:'女士们，先生们', py:'nǚshìmen, xiānshengmen', vn:'thưa quý bà, quý ông'},
      {zh:'这位女士', py:'zhè wèi nǚshì', vn:'vị nữ sĩ này'},
      {zh:'女士优先', py:'nǚshì yōuxiān', vn:'ưu tiên phụ nữ'}
    ],
    patterns: [
      {s:'Họ + 女士', m:'Gọi lịch sự người phụ nữ: 王女士, 李女士'},
      {s:'一位 / 这位 + 女士', m:'Lượng từ lịch sự là 位'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vị nữ sĩ đó là do giám đốc mời đến.', answer:'那位女士是经理请来的。', answerPy:'Nà wèi nǚshì shì jīnglǐ qǐnglái de.',
       note:'位 là lượng từ lịch sự, hợp với 女士.', pair:'是……的'},
      {promptLang:'vi', prompt:'Bà Lý không những là giáo viên mà còn là một nhà văn.', answer:'李女士不仅是老师，而且是一位作家。', answerPy:'Lǐ nǚshì bùjǐn shì lǎoshī, érqiě shì yí wèi zuòjiā.',
       note:'女士 đặt sau họ: 李女士.', pair:'不仅……而且……'}
    ]
  },

  '叙述': {
    colloFull: [
      {zh:'叙述故事', py:'xùshù gùshi', vn:'kể lại câu chuyện'},
      {zh:'叙述经过', py:'xùshù jīngguò', vn:'thuật lại diễn biến'},
      {zh:'简单地叙述', py:'jiǎndān de xùshù', vn:'kể sơ lược'},
      {zh:'叙述一下', py:'xùshù yíxià', vn:'kể lại một chút'},
      {zh:'他的叙述', py:'tā de xùshù', vn:'lời kể của anh ấy'}
    ],
    patterns: [
      {s:'叙述 + 故事 / 经过 / 内容', m:'Kể lại câu chuyện / diễn biến / nội dung'},
      {s:'简单地 / 详细地 + 叙述', m:'Kể sơ lược / kể chi tiết'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cảnh sát bảo anh ấy kể lại chi tiết một lượt diễn biến sự việc.', answer:'警察让他把事情的经过详细地叙述一遍。', answerPy:'Jǐngchá ràng tā bǎ shìqing de jīngguò xiángxì de xùshù yí biàn.',
       note:'把 + 经过 + 叙述一遍: kể lại một lượt.', pair:'把'},
      {promptLang:'vi', prompt:'Bạn có thể kể sơ qua bạn đã học giỏi tiếng Trung như thế nào không?', answer:'你能简单地叙述一下你是如何学好中文的吗？', answerPy:'Nǐ néng jiǎndān de xùshù yíxià nǐ shì rúhé xuéhǎo Zhōngwén de ma?',
       note:'叙述 + mệnh đề chứa 如何; 是……的 nhấn mạnh cách thức.', pair:'是……的'}
    ]
  },

  '居然': {
    colloFull: [
      {zh:'居然放弃', py:'jūrán fàngqì', vn:'lại từ bỏ'},
      {zh:'居然也不会', py:'jūrán yě bú huì', vn:'vậy mà cũng không biết'},
      {zh:'居然没有', py:'jūrán méiyǒu', vn:'vậy mà lại không'},
      {zh:'居然忘了', py:'jūrán wàng le', vn:'lại quên mất'},
      {zh:'居然是他', py:'jūrán shì tā', vn:'không ngờ lại là anh ấy'}
    ],
    patterns: [
      {s:'Sub + 居然 + V / Adj', m:'Ai đó lại làm gì (ngoài dự đoán, ngạc nhiên)'},
      {s:'✗ 居然他来了 → ✓ 他居然来了', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Bài dễ thế này, ngay cả em trai tôi cũng biết làm, vậy mà bạn lại không biết?', answer:'这么简单的题，连我弟弟都会做，你居然不会？', answerPy:'Zhème jiǎndān de tí, lián wǒ dìdi dōu huì zuò, nǐ jūrán bú huì?',
       note:'居然 đứng sau chủ ngữ, trước động từ, thể hiện sự ngạc nhiên.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Tuy cậu ấy chưa từng học nấu ăn nhưng lại nấu được cả một bàn đầy món.', answer:'他虽然从来没学过做饭，但是居然做了一桌子菜。', answerPy:'Tā suīrán cónglái méi xuéguo zuòfàn, dànshì jūrán zuòle yì zhuōzi cài.',
       note:'居然 nhấn mạnh kết quả trái với điều vế trước khiến ta dự đoán.', pair:'虽然……但是……'}
    ]
  },

  '催': {
    colloFull: [
      {zh:'催他们', py:'cuī tāmen', vn:'giục họ'},
      {zh:'别催我', py:'bié cuī wǒ', vn:'đừng giục tôi'},
      {zh:'催着', py:'cuīzhe', vn:'cứ giục'},
      {zh:'催我起床', py:'cuī wǒ qǐchuáng', vn:'giục tôi dậy'}
    ],
    patterns: [
      {s:'催 + người + V', m:'Giục ai làm gì'},
      {s:'Sub + 被 + người + 催', m:'Bị ai giục'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Sáng nào tôi cũng bị mẹ giục dậy.', answer:'我每天早上都被妈妈催着起床。', answerPy:'Wǒ měi tiān zǎoshang dōu bèi māma cuīzhe qǐchuáng.',
       note:'催着 + V: cứ giục làm gì; bị động 被 + người + 催.', pair:'被'},
      {promptLang:'vi', prompt:'Đừng giục tôi, chỉ cần bạn đợi thêm năm phút là tôi làm xong.', answer:'别催我，只要你再等五分钟，我就做完了。', answerPy:'Bié cuī wǒ, zhǐyào nǐ zài děng wǔ fēnzhōng, wǒ jiù zuòwán le.',
       note:'别催我 = đừng giục tôi; 催 mang tân ngữ chỉ người.', pair:'只要……就……'}
    ]
  },

  '等待': {
    colloFull: [
      {zh:'等待机会', py:'děngdài jīhuì', vn:'chờ đợi cơ hội'},
      {zh:'等待结果', py:'děngdài jiéguǒ', vn:'chờ đợi kết quả'},
      {zh:'耐心等待', py:'nàixīn děngdài', vn:'kiên nhẫn chờ đợi'},
      {zh:'等待一段时间', py:'děngdài yí duàn shíjiān', vn:'chờ một thời gian'}
    ],
    patterns: [
      {s:'等待 + 机会 / 结果 / 消息', m:'Chờ đợi (đối tượng thường trừu tượng)'},
      {s:'耐心 + (地) + 等待', m:'Kiên nhẫn chờ đợi'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần kiên nhẫn chờ đợi, cơ hội nhất định sẽ đến.', answer:'只要耐心等待，机会就一定会来。', answerPy:'Zhǐyào nàixīn děngdài, jīhuì jiù yídìng huì lái.',
       note:'耐心等待 = kiên nhẫn chờ đợi; 等待 trang trọng hơn 等.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Vì vẫn đang chờ kết quả thi nên mấy hôm nay cậu ấy ngủ không ngon.', answer:'因为还在等待考试结果，所以他这几天都睡不好。', answerPy:'Yīnwèi hái zài děngdài kǎoshì jiéguǒ, suǒyǐ tā zhè jǐ tiān dōu shuì bu hǎo.',
       note:'在 + 等待 + 结果: đang chờ đợi kết quả.', pair:'因为……所以……'}
    ]
  },

  '蚊子': {
    colloFull: [
      {zh:'一只蚊子', py:'yì zhī wénzi', vn:'một con muỗi'},
      {zh:'赶蚊子', py:'gǎn wénzi', vn:'đuổi muỗi'},
      {zh:'被蚊子叮', py:'bèi wénzi dīng', vn:'bị muỗi đốt'},
      {zh:'蚊子多', py:'wénzi duō', vn:'nhiều muỗi'},
      {zh:'打蚊子', py:'dǎ wénzi', vn:'đập muỗi'}
    ],
    patterns: [
      {s:'一 / 几 + 只 + 蚊子', m:'Lượng từ của 蚊子 là 只'},
      {s:'被 + 蚊子 + 叮 (了 / 醒)', m:'Bị muỗi đốt'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Mùa hè vừa đến là trong phòng có rất nhiều muỗi.', answer:'夏天一到，房间里就有很多蚊子。', answerPy:'Xiàtiān yí dào, fángjiān li jiù yǒu hěn duō wénzi.',
       note:'有很多蚊子 / 蚊子多 = nhiều muỗi.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Bố đã đuổi hết muỗi trong phòng ra ngoài.', answer:'爸爸把房间里的蚊子都赶出去了。', answerPy:'Bàba bǎ fángjiān li de wénzi dōu gǎn chūqù le.',
       note:'赶蚊子 = đuổi muỗi; 把 + 蚊子 + 赶出去.', pair:'把'}
    ]
  },

  '半夜': {
    colloFull: [
      {zh:'半夜醒来', py:'bànyè xǐnglái', vn:'nửa đêm tỉnh dậy'},
      {zh:'后半夜', py:'hòu bànyè', vn:'nửa đêm về sáng'},
      {zh:'大半夜', py:'dà bànyè', vn:'giữa đêm hôm'},
      {zh:'半夜十二点', py:'bànyè shí\'èr diǎn', vn:'mười hai giờ đêm'},
      {zh:'到半夜', py:'dào bànyè', vn:'đến nửa đêm'}
    ],
    patterns: [
      {s:'半夜 + V', m:'Nửa đêm làm gì (trạng ngữ thời gian đứng trước động từ)'},
      {s:'V + 到 + 半夜', m:'Làm gì đến tận nửa đêm'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vì mai thi nên tối qua anh tôi học đến tận nửa đêm.', answer:'因为明天考试，所以哥哥昨天晚上学习到半夜。', answerPy:'Yīnwèi míngtiān kǎoshì, suǒyǐ gēge zuótiān wǎnshang xuéxí dào bànyè.',
       note:'V + 到 + 半夜: kéo dài đến nửa đêm.', pair:'因为……所以……'},
      {promptLang:'vi', prompt:'Tôi chưa bao giờ nửa đêm dậy xem bóng đá.', answer:'我从来没半夜起来看过足球比赛。', answerPy:'Wǒ cónglái méi bànyè qǐlái kànguo zúqiú bǐsài.',
       note:'半夜 làm trạng ngữ, đứng trước động từ.', pair:'从来没……过'}
    ]
  },

  '叮': {
    colloFull: [
      {zh:'被蚊子叮', py:'bèi wénzi dīng', vn:'bị muỗi đốt'},
      {zh:'叮了一口', py:'dīngle yì kǒu', vn:'đốt một phát'},
      {zh:'叮醒', py:'dīngxǐng', vn:'đốt cho tỉnh dậy'},
      {zh:'叮了好几个包', py:'dīngle hǎo jǐ ge bāo', vn:'đốt mấy nốt sưng'}
    ],
    patterns: [
      {s:'被 + 蚊子 / 虫子 + 叮 + (了 + số lượng)', m:'Bị muỗi / côn trùng đốt'},
      {s:'叮 + 了 + 一口', m:'Đốt một phát'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hôm qua đi leo núi, chân tôi bị muỗi đốt mấy nốt.', answer:'昨天去爬山，我的腿被蚊子叮了好几个包。', answerPy:'Zuótiān qù páshān, wǒ de tuǐ bèi wénzi dīngle hǎo jǐ ge bāo.',
       note:'被 + 蚊子 + 叮 + 了 + số lượng; 包 ở đây là nốt sưng.', pair:'被'},
      {promptLang:'vi', prompt:'Em gái tôi rất sợ muỗi, hễ bị đốt là khóc.', answer:'我妹妹很怕蚊子，一被叮就哭。', answerPy:'Wǒ mèimei hěn pà wénzi, yí bèi dīng jiù kū.',
       note:'叮 thường dùng trong câu bị động; 一被叮就…: hễ bị đốt là ….', pair:'一……就……'}
    ]
  },

  '老婆': {
    colloFull: [
      {zh:'我老婆', py:'wǒ lǎopo', vn:'vợ tôi'},
      {zh:'老婆孩子', py:'lǎopo háizi', vn:'vợ con'},
      {zh:'他老婆', py:'tā lǎopo', vn:'vợ anh ấy'},
      {zh:'娶老婆', py:'qǔ lǎopo', vn:'lấy vợ'}
    ],
    patterns: [
      {s:'我 / 他 + 老婆', m:'Vợ tôi / vợ anh ấy (khẩu ngữ thân mật)'},
      {s:'老婆 (khẩu ngữ) ↔ 妻子 / 爱人 (trang trọng)', m:'Văn viết, nơi trang trọng dùng 妻子'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chú tôi không những yêu vợ mà còn rất thương con.', answer:'我叔叔不仅爱老婆，而且很疼孩子。', answerPy:'Wǒ shūshu bùjǐn ài lǎopo, érqiě hěn téng háizi.',
       note:'老婆 là khẩu ngữ, hợp với câu nói hằng ngày.', pair:'不仅……而且……'},
      {promptLang:'vi', prompt:'Anh ấy vừa tan làm là về nhà nấu cơm cho vợ.', answer:'他一下班就回家给老婆做饭。', answerPy:'Tā yí xiàbān jiù huí jiā gěi lǎopo zuòfàn.',
       note:'给 + 老婆 + V: làm gì cho vợ.', pair:'一……就……'}
    ]
  },

  '吵': {
    colloFull: [
      {zh:'太吵了', py:'tài chǎo le', vn:'ồn quá'},
      {zh:'吵醒', py:'chǎoxǐng', vn:'làm ồn đánh thức'},
      {zh:'吵着别人', py:'chǎozhe biérén', vn:'làm phiền người khác'},
      {zh:'吵得睡不着', py:'chǎo de shuì bu zháo', vn:'ồn đến không ngủ được'},
      {zh:'别吵', py:'bié chǎo', vn:'đừng làm ồn'}
    ],
    patterns: [
      {s:'把 / 被 + người + 吵醒', m:'Làm ai tỉnh giấc vì tiếng ồn / bị đánh thức'},
      {s:'N (nơi chốn) + 太 / 很 + 吵', m:'Nơi nào đó ồn ào (tính từ)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Nói nhỏ thôi, đừng làm em bé thức giấc.', answer:'小声点儿，别把孩子吵醒了。', answerPy:'Xiǎoshēng diǎnr, bié bǎ háizi chǎoxǐng le.',
       note:'把 + người + 吵醒: làm ai thức giấc vì tiếng ồn.', pair:'把'},
      {promptLang:'vi', prompt:'Quán cà phê này tuy đẹp nhưng ồn quá, không hợp để học bài.', answer:'这家咖啡馆虽然很漂亮，但是太吵了，不适合学习。', answerPy:'Zhè jiā kāfēiguǎn suīrán hěn piàoliang, dànshì tài chǎo le, bú shìhé xuéxí.',
       note:'吵 ở đây là tính từ: ồn ào.', pair:'虽然……但是……'}
    ]
  },

  '项': {
    colloFull: [
      {zh:'两项奖项', py:'liǎng xiàng jiǎngxiàng', vn:'hai hạng mục giải thưởng'},
      {zh:'一项工作', py:'yí xiàng gōngzuò', vn:'một công việc'},
      {zh:'几项规定', py:'jǐ xiàng guīdìng', vn:'vài quy định'},
      {zh:'一项任务', py:'yí xiàng rènwu', vn:'một nhiệm vụ'},
      {zh:'一项调查', py:'yí xiàng diàochá', vn:'một cuộc điều tra'}
    ],
    patterns: [
      {s:'Số + 项 + N (工作 / 规定 / 任务 / 调查…)', m:'Đếm khoản, mục, hạng mục'},
      {s:'✗ 一项书 → ✓ 一本书', m:''}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Trường tôi có một quy định mới: vừa vào giờ học là phải cất điện thoại đi.', answer:'我们学校有一项新规定：一上课就要把手机收起来。', answerPy:'Wǒmen xuéxiào yǒu yí xiàng xīn guīdìng: yí shàngkè jiù yào bǎ shǒujī shōu qǐlái.',
       note:'项 dùng để đếm quy định, công việc, nhiệm vụ.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Nhiệm vụ này tuy rất khó nhưng chúng tôi đã hoàn thành đúng hạn.', answer:'这项任务虽然很难，但是我们按时完成了。', answerPy:'Zhè xiàng rènwu suīrán hěn nán, dànshì wǒmen ànshí wánchéng le.',
       note:'这 + 项 + 任务: 项 đi với nhiệm vụ, công việc.', pair:'虽然……但是……'}
    ]
  },

  '患难与共': {
    colloFull: [
      {zh:'患难与共的夫妻', py:'huàn nàn yǔ gòng de fūqī', vn:'vợ chồng hoạn nạn có nhau'},
      {zh:'和……患难与共', py:'hé…… huàn nàn yǔ gòng', vn:'hoạn nạn có nhau với …'},
      {zh:'患难与共的朋友', py:'huàn nàn yǔ gòng de péngyou', vn:'người bạn hoạn nạn có nhau'},
      {zh:'患难与共夫妻', py:'huàn nàn yǔ gòng fūqī', vn:'(danh hiệu) vợ chồng hoạn nạn có nhau'}
    ],
    patterns: [
      {s:'患难与共 + 的 + N', m:'(Người) cùng nhau vượt qua hoạn nạn — làm định ngữ'},
      {s:'A + 和 + B + 患难与共', m:'A và B có nhau lúc hoạn nạn — làm vị ngữ'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chúng ta là bạn hoạn nạn có nhau, chỉ cần cậu gặp khó khăn thì tớ nhất định sẽ giúp.', answer:'我们是患难与共的朋友，只要你有困难，我就一定帮你。', answerPy:'Wǒmen shì huàn nàn yǔ gòng de péngyou, zhǐyào nǐ yǒu kùnnan, wǒ jiù yídìng bāng nǐ.',
       note:'患难与共的 + N: làm định ngữ.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Hai vợ chồng họ không những hoạn nạn có nhau mà còn rất đằm thắm.', answer:'他们夫妻不仅患难与共，而且很恩爱。', answerPy:'Tāmen fūqī bùjǐn huàn nàn yǔ gòng, érqiě hěn ēn\'ài.',
       note:'患难与共 làm vị ngữ, chủ ngữ là hai người trở lên.', pair:'不仅……而且……'}
    ]
  }
};
vocabData.forEach(function (v) {
  var x = vocabExtra[v.zh];
  if (!x) return;
  if (x.colloFull) v.colloFull = x.colloFull;
  if (x.patterns) v.patterns = x.patterns;
  if (x.checkList) v.checkList = (v.checkList || []).concat(x.checkList).slice(0, 2);
});

// ══════════════════════════════════════════
// LUYỆN TẬP — bổ sung cho bằng số câu của HSK 4 (điền 15 · sắp xếp 8 · chọn từ 10)
// ══════════════════════════════════════════
fillData.push(
  {pre:'这件事不是一两句话就能',blank:'叙述',post:'清楚的。',hint:'(kể lại, thuật lại)',ans:'叙述'},
  {pre:'妈妈一直',blank:'催',post:'我快点儿起床，不然就要迟到了。',hint:'(giục)',ans:'催'},
  {pre:'他们结婚二十年了，一直',blank:'相敬如宾',post:'，从来没吵过架。',hint:'(tôn trọng nhau như khách)',ans:'相敬如宾'},
  {pre:'请你把那本书',blank:'递',post:'给我，好吗？',hint:'(đưa, chuyển cho)',ans:'递'},
  {pre:'夫妻之间应该',blank:'患难与共',post:'，不管遇到什么困难都不离开对方。',hint:'(hoạn nạn có nhau)',ans:'患难与共'}
);
sortData.push(
  {words:['他们','被','评委','选为','最恩爱的','夫妻','。'],ans:'他们被评委选为最恩爱的夫妻。',audio:'他们被评委选为最恩爱的夫妻。'}
);
errorFixData.push(
  {wrong:'孩子们应该从小学会____小动物。',opts:['爱护','爱情','恩爱','婚姻'],ans:0,
   exp:'爱护 (yêu quý, bảo vệ) là động từ, mang được tân ngữ 小动物. 爱情 (tình yêu) và 婚姻 (hôn nhân) là danh từ; 恩爱 chỉ dùng cho vợ chồng và không mang tân ngữ.'},
  {wrong:'等了半个小时，他开始有点儿____了。',opts:['不耐烦','不得了','不客气','不要紧'],ans:0,
   exp:'不耐烦 (mất kiên nhẫn) hợp với tình huống chờ lâu và đi được sau 有点儿. 不得了 (ghê gớm, vô cùng) thường làm bổ ngữ: 高兴得不得了; 不客气, 不要紧 không hợp nghĩa.'}
);

// ══════════════════════════════════════════
// LUYỆN TẬP — phủ đủ 38 từ và các điểm ngữ pháp của bài
// ══════════════════════════════════════════
fillData.push(
  {pre:'爷爷每天早上一起床就听',blank:'电台',post:'的新闻节目。',hint:'(đài phát thanh)',ans:'电台'},
  {pre:'虽然他们结婚三十年了，但是还像年轻时一样',blank:'恩爱',post:'。',hint:'(vợ chồng mặn nồng)',ans:'恩爱'},
  {pre:'生了一场大病以后，爷爷的腿',blank:'瘫痪',post:'了，可是他一直很乐观。',hint:'(bị liệt)',ans:'瘫痪'},
  {pre:'他们虽然有时候意见不同，但是从来没想过要',blank:'离婚',post:'。',hint:'(ly hôn)',ans:'离婚'},
  {pre:'她生病以后曾经想过',blank:'自杀',post:'，是丈夫的爱让她重新有了生活的勇气。',hint:'(tự sát)',ans:'自杀'},
  {pre:'幸福的',blank:'婚姻',post:'不是靠运气，而是靠两个人一起努力。',hint:'(hôn nhân)',ans:'婚姻'},
  {pre:'他拍了拍我的',blank:'肩膀',post:'，说：“别担心，一切都会好起来的。”',hint:'(vai)',ans:'肩膀'},
  {pre:'外面有人在大声',blank:'喊',post:'我的名字。',hint:'(gọi to)',ans:'喊'},
  {pre:'妹妹才三岁，就会用',blank:'手指',post:'数到十了。',hint:'(ngón tay)',ans:'手指'},
  {pre:'这道题太难了，我想得',blank:'脑袋',post:'都疼了，还是不会做。',hint:'(cái đầu)',ans:'脑袋'},
  {pre:'这位',blank:'女士',post:'，请问您需要什么帮助？',hint:'(quý bà, quý cô — cách gọi lịch sự)',ans:'女士'},
  {pre:'夏天一到，',blank:'蚊子',post:'就越来越多了。',hint:'(con muỗi)',ans:'蚊子'},
  {pre:'他昨天学习到',blank:'半夜',post:'，所以今天上课的时候特别困。',hint:'(nửa đêm)',ans:'半夜'}
);
errorFixData.push(
  {wrong:'比赛结束后，三位____一起选出了第一名。',opts:['评委','记者','电台','作者'],ans:0,
   exp:'Người chấm và chọn ra người thắng trong cuộc thi là 评委 (giám khảo). 记者 (phóng viên) chỉ đưa tin; 电台 là đài phát thanh, không phải người nên không đi với 位; 作者 (tác giả) không liên quan đến cuộc thi.'},
  {wrong:'你把这两张照片____一下，就能发现它们的不同。',opts:['对比','比如','对待','比赛'],ans:0,
   exp:'Đặt hai thứ cạnh nhau để tìm chỗ khác → 对比 (đối chiếu), dùng được trong câu 把: 把A对比一下. 比如 là "ví dụ", không làm động từ; 对待 là "đối xử" (对待别人); 比赛 là "thi đấu", không mang nghĩa so sánh hai bức ảnh.'},
  {wrong:'楼下的音乐太____了，我连一个字都看不进去。',opts:['吵','吵架','喊','叮'],ans:0,
   exp:'吵 là tính từ "ồn ào", đứng được sau 太. 吵架 là động từ li hợp "cãi nhau", không nói 太吵架了; 喊 (gọi to) và 叮 (muỗi đốt) là động từ, không đi với 太……了 để tả âm thanh.'},
  {wrong:'这个月，他们完成了三____重要的任务。',opts:['项','位','张','本'],ans:0,
   exp:'项 là lượng từ cho công việc, nhiệm vụ, hạng mục: 一项任务, 一项工作. 位 dùng cho người (một cách lịch sự); 张 dùng cho vật phẳng (giấy, bàn); 本 dùng cho sách vở.'},
  {wrong:'他一到家就对妻子说：“____，我回来了！”',opts:['老婆','老公','女士','婚姻'],ans:0,
   exp:'Chồng gọi vợ thân mật trong khẩu ngữ → 老婆. 老公 là vợ gọi chồng, sai vai; 女士 là cách gọi lịch sự với người lạ, không dùng để gọi vợ; 婚姻 là danh từ "hôn nhân", không dùng để gọi người.'},
  {wrong:'她____出手，接过了妈妈递过来的书。',opts:['伸','递','喊','靠'],ans:0,
   exp:'Duỗi tay ra → 伸出手. 递 là "đưa vật cho người khác" (递书), không nói 递出手 với nghĩa này; 喊 là "gọi to"; 靠 là "tựa vào", đều không kết hợp với 出手 ở đây.'}
);
sortData.push(
  {words:['她瘫痪以后','是','如何','重新','站起来的','？'],ans:'她瘫痪以后是如何重新站起来的？',audio:'她瘫痪以后是如何重新站起来的？'},
  {words:['你们','的','婚姻生活','如何','？'],ans:'你们的婚姻生活如何？',audio:'你们的婚姻生活如何？'},
  {words:['孩子','把','脑袋','靠在','妈妈的','肩膀上','睡着了','。'],ans:'孩子把脑袋靠在妈妈的肩膀上睡着了。',audio:'孩子把脑袋靠在妈妈的肩膀上睡着了。'},
  {words:['他们结婚十几年','，','居然','从来','没','吵过','架','。'],ans:'他们结婚十几年，居然从来没吵过架。',audio:'他们结婚十几年，居然从来没吵过架。'},
  {words:['昨天半夜','，','我','居然','被','一只蚊子','叮醒了','。'],ans:'昨天半夜，我居然被一只蚊子叮醒了。',audio:'昨天半夜，我居然被一只蚊子叮醒了。'}
);
matchData.push(
  {left:'幸福的',right:'婚姻'},
  {left:'递给',right:'评委'},
  {left:'大声地',right:'喊'},
  {left:'摇了摇',right:'脑袋'},
  {left:'完成',right:'一项任务'},
  {left:'半夜',right:'被吵醒'}
);
