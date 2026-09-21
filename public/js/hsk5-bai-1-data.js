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
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài. Bấm 🔊 nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 恩爱 · 细节 · 抱怨 · 居然 · 相敬如宾 · 患难与共.',
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
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm 🔊 nghe, ' +
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
