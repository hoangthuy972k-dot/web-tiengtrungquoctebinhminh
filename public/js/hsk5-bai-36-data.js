// ══════════════════════════════════════════
// DATA — HSK5 Bài 36: 老舍与养花 (Lão Xá và hoa)
// Unit 12 亲近自然 · Nguồn: HSK标准教程5下 (tr. 156–163) + 练习册 bài 36
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 37 từ của bảng 生词 + 1 专有名词 (tr. 156–158)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'养',py:'yǎng',pos:'Động từ',vn:'nuôi, trồng, chăm (hoa, cây, vật nuôi)',hv:'dưỡng',em:'🪴',lesson:1,
   explain:['Chăm sóc cho người, động vật hay cây cối sống và lớn lên: 养花 (trồng hoa), 养狗 (nuôi chó), 养鱼 (nuôi cá). Với hoa cảnh người Trung Quốc nói 养花 chứ ít nói 种花 khi nhấn mạnh việc chăm sóc lâu dài.','Còn có nghĩa "nuôi (gia đình)": 养家 (nuôi gia đình), 养活自己 (tự nuôi sống mình); và "dưỡng, giữ gìn": 养成习惯 (hình thành thói quen), 养病 (dưỡng bệnh).'],
   usage:'养 + 花 / 草 / 狗 / 猫 / 鱼; 养活 + đối tượng (làm cho sống được / nuôi sống); 养成 + 习惯; 养家.',
   collo:['养花','养狗','养活','养成习惯'],
   ex_zh:'作家老舍先生爱花，他养的花很多，满满摆了一院子。',ex_py:'Zuòjiā Lǎo Shě xiānsheng ài huā, tā yǎng de huā hěn duō, mǎnmǎn bǎile yí yuànzi.',ex_vn:'Nhà văn Lão Xá yêu hoa, ông trồng rất nhiều hoa, bày kín cả một sân.',
   exList:[
     {zh:'作家老舍先生爱花，他养的花很多，满满摆了一院子。',py:'Zuòjiā Lǎo Shě xiānsheng ài huā, tā yǎng de huā hěn duō, mǎnmǎn bǎile yí yuànzi.',vn:'Nhà văn Lão Xá yêu hoa, ông trồng rất nhiều hoa, bày kín cả một sân.'},
     {zh:'想把南方的名花养活并非易事。',py:'Xiǎng bǎ nánfāng de mínghuā yǎnghuó bìngfēi yì shì.',vn:'Muốn trồng cho sống được những loài hoa nổi tiếng của phương Nam chẳng phải chuyện dễ.'},
     {zh:'我从小就养成了每天读书的习惯。',py:'Wǒ cóngxiǎo jiù yǎngchéngle měi tiān dú shū de xíguàn.',vn:'Từ nhỏ tôi đã hình thành thói quen đọc sách mỗi ngày.'}
   ],
   colloFull:[
     {zh:'养花',py:'yǎng huā',vn:'trồng hoa, chơi hoa'},
     {zh:'养狗',py:'yǎng gǒu',vn:'nuôi chó'},
     {zh:'养活',py:'yǎnghuó',vn:'nuôi sống; trồng cho sống được'},
     {zh:'养成习惯',py:'yǎngchéng xíguàn',vn:'hình thành thói quen'},
     {zh:'养家',py:'yǎng jiā',vn:'nuôi gia đình'}
   ],
   patterns:[
     {s:'养 + 花 / 草 / 狗 / 鱼', m:'Trồng, nuôi (cây cảnh, vật nuôi)'},
     {s:'把 + N + 养活', m:'Làm cho (cây, con vật) sống được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoa mà ông nội tôi trồng càng ngày càng nhiều.',answer:'我爷爷养的花越来越多了。',answerPy:'Wǒ yéye yǎng de huā yuè lái yuè duō le.',
      note:'养的花: cụm định ngữ "hoa (do ai) trồng"; 越来越 + tính từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tôi đã trồng sống được chậu hoa mà bạn tặng rồi.',answer:'我把你送的那盆花养活了。',answerPy:'Wǒ bǎ nǐ sòng de nà pén huā yǎnghuó le.',
      note:'Câu 把 + động từ + bổ ngữ kết quả 活.',pair:'把'}
   ]},

  {n:2,zh:'除非',py:'chúfēi',pos:'Liên từ / Giới từ',vn:'trừ phi, chỉ khi; ngoại trừ',hv:'trừ phi',em:'🚧',lesson:1,
   explain:['Liên từ: nêu ĐIỀU KIỆN DUY NHẤT, tương đương 只有. Hay đi với 否则 / 不然 / 要不 (nếu không thì…) hoặc 才: 除非……否则……; 除非……才…….','Giới từ: "ngoại trừ, không tính", tương đương 除了: 这种机器，除非李阳，没人修得好. (Xem 注释 1.)'],
   usage:'除非 + điều kiện, 否则 / 不然 + kết quả; 除非 + điều kiện, (主语) 才 + kết quả; 除非 + N, 没人 / 谁也不…….',
   collo:['除非……否则……','除非……才……','除非……不然……','除非下雨'],
   ex_zh:'可除非是那些好种易活、自己会奋斗的花草，否则他是不养的。',ex_py:'Kě chúfēi shì nàxiē hǎo zhòng yì huó, zìjǐ huì fèndòu de huācǎo, fǒuzé tā shì bù yǎng de.',ex_vn:'Nhưng trừ phi là những loài hoa cỏ dễ trồng dễ sống, tự biết "phấn đấu", còn không thì ông không trồng.',
   exList:[
     {zh:'可除非是那些好种易活、自己会奋斗的花草，否则他是不养的。',py:'Kě chúfēi shì nàxiē hǎo zhòng yì huó, zìjǐ huì fèndòu de huācǎo, fǒuzé tā shì bù yǎng de.',vn:'Nhưng trừ phi là những loài hoa cỏ dễ trồng dễ sống, tự biết "phấn đấu", còn không thì ông không trồng.'},
     {zh:'除非急需一大笔钱，我才会考虑卖了这房子。',py:'Chúfēi jíxū yí dà bǐ qián, wǒ cái huì kǎolǜ màile zhè fángzi.',vn:'Chỉ khi cần gấp một khoản tiền lớn, tôi mới tính đến chuyện bán căn nhà này.'},
     {zh:'除非你每天坚持练习，不然口语是提高不了的。',py:'Chúfēi nǐ měi tiān jiānchí liànxí, bùrán kǒuyǔ shì tígāo bu liǎo de.',vn:'Trừ phi bạn kiên trì luyện tập mỗi ngày, nếu không thì khẩu ngữ không thể tiến bộ được.'}
   ],
   colloFull:[
     {zh:'除非……否则……',py:'chúfēi…… fǒuzé……',vn:'trừ phi …, nếu không thì …'},
     {zh:'除非……才……',py:'chúfēi…… cái……',vn:'chỉ khi … mới …'},
     {zh:'除非……不然……',py:'chúfēi…… bùrán……',vn:'trừ phi …, bằng không …'},
     {zh:'除非下雨',py:'chúfēi xià yǔ',vn:'trừ khi trời mưa'},
     {zh:'除非特殊情况',py:'chúfēi tèshū qíngkuàng',vn:'trừ trường hợp đặc biệt'}
   ],
   patterns:[
     {s:'除非 + điều kiện，否则 / 不然 + kết quả', m:'Trừ phi …, nếu không thì … (điều kiện duy nhất)'},
     {s:'除非 + điều kiện，Sub + 才 + V', m:'Chỉ khi … thì mới …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trừ phi trời mưa, nếu không thì sáng nào anh ấy cũng chạy bộ.',answer:'除非下雨，否则他每天早上都去跑步。',answerPy:'Chúfēi xià yǔ, fǒuzé tā měi tiān zǎoshang dōu qù pǎobù.',
      note:'除非 + điều kiện, 否则 + kết quả; ôn 每……都…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chỉ khi thầy giáo giải thích lại một lần nữa, tôi mới hiểu được.',answer:'除非老师再解释一遍，我才能听懂。',answerPy:'Chúfēi lǎoshī zài jiěshì yí biàn, wǒ cái néng tīngdǒng.',
      note:'除非……才…… = 只有……才…… (ôn HSK 4).',pair:'只有……才……'}
   ]},

  {n:3,zh:'奋斗',py:'fèndòu',pos:'Động từ',vn:'phấn đấu, cố gắng',hv:'phấn đấu',em:'💪',lesson:1,
   explain:['Dốc sức làm việc để đạt một mục tiêu: 为理想而奋斗 (phấn đấu vì lý tưởng), 奋斗目标 (mục tiêu phấn đấu).','Trong bài, 自己会奋斗的花草 là cách nói nhân hoá — loài hoa cỏ "tự biết phấn đấu", tức là sức sống mạnh, không cần chăm nhiều.'],
   usage:'为 + mục tiêu + (而) 奋斗; 奋斗 + 目标 / 精神 / 过程; 努力奋斗; 艰苦奋斗.',
   collo:['努力奋斗','为理想而奋斗','奋斗目标','艰苦奋斗'],
   ex_zh:'除非是那些好种易活、自己会奋斗的花草，否则他是不养的。',ex_py:'Chúfēi shì nàxiē hǎo zhòng yì huó, zìjǐ huì fèndòu de huācǎo, fǒuzé tā shì bù yǎng de.',ex_vn:'Trừ phi là những loài hoa cỏ dễ trồng dễ sống, tự biết phấn đấu, còn không thì ông không trồng.',
   exList:[
     {zh:'除非是那些好种易活、自己会奋斗的花草，否则他是不养的。',py:'Chúfēi shì nàxiē hǎo zhòng yì huó, zìjǐ huì fèndòu de huācǎo, fǒuzé tā shì bù yǎng de.',vn:'Trừ phi là những loài hoa cỏ dễ trồng dễ sống, tự biết phấn đấu, còn không thì ông không trồng.'},
     {zh:'为了考上理想的大学，他每天都在努力奋斗。',py:'Wèile kǎoshang lǐxiǎng de dàxué, tā měi tiān dōu zài nǔlì fèndòu.',vn:'Để thi đỗ trường đại học mơ ước, ngày nào cậu ấy cũng đang nỗ lực phấn đấu.'},
     {zh:'年轻人应该有自己的奋斗目标。',py:'Niánqīngrén yīnggāi yǒu zìjǐ de fèndòu mùbiāo.',vn:'Người trẻ nên có mục tiêu phấn đấu của riêng mình.'}
   ],
   colloFull:[
     {zh:'努力奋斗',py:'nǔlì fèndòu',vn:'nỗ lực phấn đấu'},
     {zh:'为理想而奋斗',py:'wèi lǐxiǎng ér fèndòu',vn:'phấn đấu vì lý tưởng'},
     {zh:'奋斗目标',py:'fèndòu mùbiāo',vn:'mục tiêu phấn đấu'},
     {zh:'艰苦奋斗',py:'jiānkǔ fèndòu',vn:'phấn đấu gian khổ'},
     {zh:'奋斗精神',py:'fèndòu jīngshén',vn:'tinh thần phấn đấu'}
   ],
   patterns:[
     {s:'为 + N + (而) 奋斗', m:'Phấn đấu vì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cuộc sống rất vất vả, nhưng anh ấy chưa bao giờ ngừng phấn đấu.',answer:'虽然生活很辛苦，但是他从来没有停止过奋斗。',answerPy:'Suīrán shēnghuó hěn xīnkǔ, dànshì tā cónglái méiyǒu tíngzhǐguo fèndòu.',
      note:'虽然……但是……; 从来没(有)……过.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần nỗ lực phấn đấu thì nhất định sẽ thành công.',answer:'只要努力奋斗，就一定会成功。',answerPy:'Zhǐyào nǔlì fèndòu, jiù yídìng huì chénggōng.',
      note:'只要……就……: điều kiện đủ; 一定 đọc yídìng.',pair:'只要……就……'}
   ]},

  {n:4,zh:'乐趣',py:'lèqù',pos:'Danh từ',vn:'niềm vui, thú vui',hv:'lạc thú',em:'😊',lesson:1,
   explain:['Niềm vui, cái thú có được khi làm một việc gì đó: 生活乐趣 (thú vui cuộc sống), 读书的乐趣 (niềm vui đọc sách).','Thường đi với 有 / 充满 / 享受 / 找到 / 带来; mẫu hay gặp: 把……当作一种乐趣 (coi … là một thú vui).'],
   usage:'有 / 没有 + 乐趣; 充满乐趣; 享受 / 找到 + ……的乐趣; 把 A 当作一种乐趣; 给 + ai + 带来乐趣.',
   collo:['生活乐趣','充满乐趣','享受乐趣','读书的乐趣'],
   ex_zh:'老舍把养花当作一种生活乐趣。',ex_py:'Lǎo Shě bǎ yǎng huā dàngzuò yì zhǒng shēnghuó lèqù.',ex_vn:'Lão Xá coi việc trồng hoa là một thú vui trong cuộc sống.',
   exList:[
     {zh:'老舍把养花当作一种生活乐趣。',py:'Lǎo Shě bǎ yǎng huā dàngzuò yì zhǒng shēnghuó lèqù.',vn:'Lão Xá coi việc trồng hoa là một thú vui trong cuộc sống.'},
     {zh:'学汉语虽然不容易，但是也充满了乐趣。',py:'Xué Hànyǔ suīrán bù róngyì, dànshì yě chōngmǎnle lèqù.',vn:'Học tiếng Trung tuy không dễ nhưng cũng đầy niềm vui.'},
     {zh:'爷爷退休以后，在钓鱼中找到了新的乐趣。',py:'Yéye tuìxiū yǐhòu, zài diào yú zhōng zhǎodàole xīn de lèqù.',vn:'Sau khi nghỉ hưu, ông nội tìm được niềm vui mới trong việc câu cá.'}
   ],
   colloFull:[
     {zh:'生活乐趣',py:'shēnghuó lèqù',vn:'thú vui cuộc sống'},
     {zh:'充满乐趣',py:'chōngmǎn lèqù',vn:'đầy niềm vui'},
     {zh:'享受乐趣',py:'xiǎngshòu lèqù',vn:'tận hưởng niềm vui'},
     {zh:'读书的乐趣',py:'dú shū de lèqù',vn:'niềm vui đọc sách'},
     {zh:'找到乐趣',py:'zhǎodào lèqù',vn:'tìm được niềm vui'}
   ],
   patterns:[
     {s:'把 + V + 当作一种乐趣', m:'Coi việc … là một thú vui'},
     {s:'✗ 很乐趣 → ✓ 很有乐趣', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ tôi coi việc nấu ăn là một thú vui.',answer:'我妈妈把做饭当作一种乐趣。',answerPy:'Wǒ māma bǎ zuò fàn dàngzuò yì zhǒng lèqù.',
      note:'把 A 当作 B: coi A là B.',pair:'把'},
     {promptLang:'vi',prompt:'Leo núi không những rèn luyện sức khỏe mà cũng mang lại cho chúng ta rất nhiều niềm vui.',answer:'爬山不仅能锻炼身体，也能给我们带来很多乐趣。',answerPy:'Pá shān bùjǐn néng duànliàn shēntǐ, yě néng gěi wǒmen dàilái hěn duō lèqù.',
      note:'给 + ai + 带来乐趣; 不仅……也…….',pair:'不仅……也……'}
   ]},

  {n:5,zh:'在乎',py:'zàihu',pos:'Động từ',vn:'để ý đến, quan tâm đến, để tâm',hv:'tại hồ',em:'🤔',lesson:1,
   explain:['Để ý, coi trọng, để tâm đến (thường dùng trong câu phủ định hoặc câu hỏi): 不在乎 (không bận tâm), 满不在乎 (hoàn toàn chẳng để tâm).','Khẩu ngữ, gần nghĩa 在意. Tân ngữ có thể là danh từ, cụm chủ-vị: 他不在乎花开得大小好坏.'],
   usage:'(不) 在乎 + N / cụm từ; 满不在乎; 最在乎的人 / 事; 在乎别人的看法.',
   collo:['不在乎','满不在乎','在乎别人的看法','最在乎的人'],
   ex_zh:'他不在乎花开得大小好坏，只要开花，他就高兴。',ex_py:'Tā bú zàihu huā kāi de dàxiǎo hǎohuài, zhǐyào kāi huā, tā jiù gāoxìng.',ex_vn:'Ông không để tâm hoa nở to hay nhỏ, đẹp hay xấu, chỉ cần hoa nở là ông vui.',
   exList:[
     {zh:'他不在乎花开得大小好坏，只要开花，他就高兴。',py:'Tā bú zàihu huā kāi de dàxiǎo hǎohuài, zhǐyào kāi huā, tā jiù gāoxìng.',vn:'Ông không để tâm hoa nở to hay nhỏ, đẹp hay xấu, chỉ cần hoa nở là ông vui.'},
     {zh:'她是我生命中唯一在乎的人。',py:'Tā shì wǒ shēngmìng zhōng wéiyī zàihu de rén.',vn:'Cô ấy là người duy nhất tôi quan tâm trong cuộc đời mình.'},
     {zh:'老李对儿子面试没被录取的事显得满不在乎。',py:'Lǎo Lǐ duì érzi miànshì méi bèi lùqǔ de shì xiǎnde mǎn bú zàihu.',vn:'Ông Lý tỏ ra hoàn toàn không để tâm đến chuyện con trai phỏng vấn không được nhận.'}
   ],
   colloFull:[
     {zh:'不在乎',py:'bú zàihu',vn:'không bận tâm'},
     {zh:'满不在乎',py:'mǎn bú zàihu',vn:'hoàn toàn chẳng để tâm'},
     {zh:'在乎别人的看法',py:'zàihu biérén de kànfǎ',vn:'để ý cách nhìn của người khác'},
     {zh:'最在乎的人',py:'zuì zàihu de rén',vn:'người mình quan tâm nhất'}
   ],
   patterns:[
     {s:'(不) 在乎 + N / cụm chủ-vị', m:'(Không) để tâm đến …'},
     {s:'对 + N + 满不在乎', m:'Hoàn toàn không để tâm đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chưa bao giờ để ý người khác nói anh ấy thế nào.',answer:'他从来不在乎别人怎么说他。',answerPy:'Tā cónglái bú zàihu biérén zěnme shuō tā.',
      note:'从来不 + V: chưa bao giờ / không bao giờ (thói quen).',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chỉ cần cả nhà vui vẻ, tôi không để tâm đến quà đắt hay rẻ.',answer:'只要全家人高兴，我不在乎礼物贵不贵。',answerPy:'Zhǐyào quánjiā rén gāoxìng, wǒ bú zàihu lǐwù guì bu guì.',
      note:'在乎 + cụm chính phản (贵不贵).',pair:'只要……就……'}
   ]},

  {n:6,zh:'朵',py:'duǒ',pos:'Lượng từ',vn:'đóa, bông (hoa); đám (mây)',hv:'đóa',em:'🌸',lesson:1,
   explain:['Lượng từ cho hoa và mây: 一朵花 (một bông hoa), 几朵白云 (mấy đám mây trắng).','Còn làm thành tố danh từ: 花朵 (bông hoa, hoa nói chung). Trong bài: 瞧瞧这棵，看看那朵 — 朵 thay cho 花.'],
   usage:'一 / 几 + 朵 + 花 / 云; 花朵; 这朵 / 那朵.',
   collo:['一朵花','一朵云','几朵白云','花朵'],
   ex_zh:'瞧瞧这棵，看看那朵，有时拿起剪刀给它们剪剪枝。',ex_py:'Qiáoqiao zhè kē, kànkan nà duǒ, yǒushí náqǐ jiǎndāo gěi tāmen jiǎnjian zhī.',ex_vn:'Ngắm cây này, xem bông kia, có lúc cầm kéo lên tỉa cành cho chúng.',
   exList:[
     {zh:'瞧瞧这棵，看看那朵，有时拿起剪刀给它们剪剪枝。',py:'Qiáoqiao zhè kē, kànkan nà duǒ, yǒushí náqǐ jiǎndāo gěi tāmen jiǎnjian zhī.',vn:'Ngắm cây này, xem bông kia, có lúc cầm kéo lên tỉa cành cho chúng.'},
     {zh:'他用剪刀剪出了一朵美丽的花。',py:'Tā yòng jiǎndāo jiǎnchūle yì duǒ měilì de huā.',vn:'Anh ấy dùng kéo cắt ra một bông hoa thật đẹp.'},
     {zh:'蓝蓝的天上飘着几朵白云。',py:'Lánlán de tiān shang piāozhe jǐ duǒ báiyún.',vn:'Trên bầu trời xanh ngắt lững lờ mấy đám mây trắng.'}
   ],
   colloFull:[
     {zh:'一朵花',py:'yì duǒ huā',vn:'một bông hoa'},
     {zh:'一朵云',py:'yì duǒ yún',vn:'một đám mây'},
     {zh:'几朵白云',py:'jǐ duǒ báiyún',vn:'mấy đám mây trắng'},
     {zh:'花朵',py:'huāduǒ',vn:'bông hoa'}
   ],
   patterns:[
     {s:'数词 + 朵 + 花 / 云', m:'Đếm hoa, mây'},
     {s:'✗ 一个花 → ✓ 一朵花', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bông hoa này là do em gái tôi tự tay trồng.',answer:'这朵花是我妹妹亲手种的。',answerPy:'Zhè duǒ huā shì wǒ mèimei qīnshǒu zhòng de.',
      note:'是……的 nhấn mạnh người làm; 种 đọc zhòng (trồng).',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy tặng cô ấy một bông hoa hồng, cô ấy vừa nhìn thấy liền cười.',answer:'他送给她一朵玫瑰花，她一看见就笑了。',answerPy:'Tā sòng gěi tā yì duǒ méiguihuā, tā yí kànjiàn jiù xiào le.',
      note:'一……就……; 一 trước thanh 4 đọc yí.',pair:'一……就……'}
   ]},

  {n:7,zh:'剪刀',py:'jiǎndāo',pos:'Danh từ',vn:'cái kéo',hv:'tiễn đao',em:'✂️',lesson:1,
   explain:['Dụng cụ gồm hai lưỡi để cắt giấy, vải, cành cây…; lượng từ 把: 一把剪刀.','剪 (cắt bằng kéo) + 刀 (dao). Động từ 剪 dùng riêng: 剪枝 (tỉa cành), 剪头发 (cắt tóc), 剪纸 (cắt giấy).'],
   usage:'一把剪刀; 用剪刀 + 剪 + N; 拿起剪刀.',
   collo:['一把剪刀','用剪刀剪','拿起剪刀','剪刀和纸'],
   ex_zh:'有时拿起剪刀给它们剪剪枝。',ex_py:'Yǒushí náqǐ jiǎndāo gěi tāmen jiǎnjian zhī.',ex_vn:'Có lúc cầm kéo lên tỉa cành cho chúng.',
   exList:[
     {zh:'有时拿起剪刀给它们剪剪枝。',py:'Yǒushí náqǐ jiǎndāo gěi tāmen jiǎnjian zhī.',vn:'Có lúc cầm kéo lên tỉa cành cho chúng.'},
     {zh:'这个袋子很结实，用手撕不开，去拿把剪刀。',py:'Zhège dàizi hěn jiēshi, yòng shǒu sī bu kāi, qù ná bǎ jiǎndāo.',vn:'Cái túi này rất chắc, xé bằng tay không ra, đi lấy cái kéo đi.'},
     {zh:'小孩子用剪刀的时候，大人一定要在旁边看着。',py:'Xiǎo háizi yòng jiǎndāo de shíhou, dàren yídìng yào zài pángbiān kànzhe.',vn:'Lúc trẻ nhỏ dùng kéo, người lớn nhất định phải ở bên cạnh trông chừng.'}
   ],
   colloFull:[
     {zh:'一把剪刀',py:'yì bǎ jiǎndāo',vn:'một cái kéo'},
     {zh:'用剪刀剪',py:'yòng jiǎndāo jiǎn',vn:'cắt bằng kéo'},
     {zh:'拿起剪刀',py:'náqǐ jiǎndāo',vn:'cầm kéo lên'},
     {zh:'剪刀和纸',py:'jiǎndāo hé zhǐ',vn:'kéo và giấy'}
   ],
   patterns:[
     {s:'用剪刀 + 剪 + N', m:'Dùng kéo cắt …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái kéo bị em trai tôi làm hỏng rồi.',answer:'剪刀被我弟弟弄坏了。',answerPy:'Jiǎndāo bèi wǒ dìdi nònghuài le.',
      note:'Câu bị động 被 + người làm + V + bổ ngữ kết quả.',pair:'被'},
     {promptLang:'vi',prompt:'Bạn đặt cái kéo lên bàn đi.',answer:'你把剪刀放在桌子上吧。',answerPy:'Nǐ bǎ jiǎndāo fàng zài zhuōzi shang ba.',
      note:'把 + O + 放在 + nơi chốn.',pair:'把'}
   ]},

  {n:8,zh:'捡',py:'jiǎn',pos:'Động từ',vn:'nhặt, lượm',hv:'kiểm',em:'🫳',lesson:1,
   explain:['Nhặt đồ vật từ dưới đất lên: 捡石头 (nhặt đá), 捡垃圾 (nhặt rác), 捡到钱包 (nhặt được ví).','Chú ý chữ: 捡 (bộ thủ 扌, jiǎn — nhặt) khác 检 (bộ 木, 检查 — kiểm tra) và 剪 (jiǎn — cắt).'],
   usage:'捡 + N (石头 / 垃圾 / 钱包); 捡起来; 捡到 + N; 蹲下捡…….',
   collo:['捡石头','捡垃圾','捡起来','捡到钱包'],
   ex_zh:'有时蹲下捡几块小石头放在花盆里做点儿装饰。',ex_py:'Yǒushí dūnxia jiǎn jǐ kuài xiǎo shítou fàng zài huāpén li zuò diǎnr zhuāngshì.',ex_vn:'Có lúc ngồi xổm xuống nhặt mấy viên đá nhỏ đặt vào chậu hoa để trang trí chút ít.',
   exList:[
     {zh:'有时蹲下捡几块小石头放在花盆里做点儿装饰。',py:'Yǒushí dūnxia jiǎn jǐ kuài xiǎo shítou fàng zài huāpén li zuò diǎnr zhuāngshì.',vn:'Có lúc ngồi xổm xuống nhặt mấy viên đá nhỏ đặt vào chậu hoa để trang trí chút ít.'},
     {zh:'我在路上捡到了一个钱包，马上交给了警察。',py:'Wǒ zài lù shang jiǎndàole yí ge qiánbāo, mǎshàng jiāo gěile jǐngchá.',vn:'Tôi nhặt được một chiếc ví trên đường, liền nộp ngay cho cảnh sát.'},
     {zh:'周末我们班去公园捡垃圾，保护环境。',py:'Zhōumò wǒmen bān qù gōngyuán jiǎn lājī, bǎohù huánjìng.',vn:'Cuối tuần lớp chúng tôi đi công viên nhặt rác, bảo vệ môi trường.'}
   ],
   colloFull:[
     {zh:'捡石头',py:'jiǎn shítou',vn:'nhặt đá'},
     {zh:'捡垃圾',py:'jiǎn lājī',vn:'nhặt rác'},
     {zh:'捡起来',py:'jiǎn qilai',vn:'nhặt lên'},
     {zh:'捡到钱包',py:'jiǎndào qiánbāo',vn:'nhặt được ví'}
   ],
   patterns:[
     {s:'把 + N + 捡起来', m:'Nhặt … lên'},
     {s:'捡到 + N', m:'Nhặt được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn nhặt tờ giấy dưới đất lên đi.',answer:'你把地上的纸捡起来吧。',answerPy:'Nǐ bǎ dì shang de zhǐ jiǎn qilai ba.',
      note:'把 + O + 捡起来 (bổ ngữ xu hướng).',pair:'把'},
     {promptLang:'vi',prompt:'Chiếc điện thoại này là tôi nhặt được ở thư viện.',answer:'这个手机是我在图书馆捡到的。',answerPy:'Zhège shǒujī shì wǒ zài túshūguǎn jiǎndào de.',
      note:'是……的 nhấn mạnh nơi chốn.',pair:'是……的'}
   ]},

  {n:9,zh:'装饰',py:'zhuāngshì',pos:'Danh từ / Động từ',vn:'sự trang hoàng, đồ trang trí; trang trí',hv:'trang sức',em:'🎀',lesson:1,
   explain:['Danh từ: đồ trang trí, sự trang hoàng — 做点儿装饰 (trang trí chút ít), 圣诞装饰 (đồ trang trí Giáng sinh).','Động từ: trang trí, làm đẹp cho nơi chốn / đồ vật — 装饰房间, 装饰街道. BẪY Hán Việt: "trang sức" tiếng Việt là đồ đeo (nhẫn, vòng) — tiếng Trung là 首饰.'],
   usage:'装饰 + 房间 / 街道 / 教室; 用 + N + 装饰; 做装饰; 装饰品 (đồ trang trí).',
   collo:['做装饰','装饰房间','装饰街道','装饰品'],
   ex_zh:'有时蹲下捡几块小石头放在花盆里做点儿装饰。',ex_py:'Yǒushí dūnxia jiǎn jǐ kuài xiǎo shítou fàng zài huāpén li zuò diǎnr zhuāngshì.',ex_vn:'Có lúc ngồi xổm nhặt mấy viên đá nhỏ đặt vào chậu hoa để trang trí.',
   exList:[
     {zh:'有时蹲下捡几块小石头放在花盆里做点儿装饰。',py:'Yǒushí dūnxia jiǎn jǐ kuài xiǎo shítou fàng zài huāpén li zuò diǎnr zhuāngshì.',vn:'Có lúc ngồi xổm nhặt mấy viên đá nhỏ đặt vào chậu hoa để trang trí.'},
     {zh:'新年快到了，我们用彩灯把教室装饰得很漂亮。',py:'Xīnnián kuài dào le, wǒmen yòng cǎidēng bǎ jiàoshì zhuāngshì de hěn piàoliang.',vn:'Sắp đến năm mới, chúng tôi dùng đèn màu trang trí lớp học rất đẹp.'},
     {zh:'国庆节前，街道都被装饰了一番。',py:'Guóqìng Jié qián, jiēdào dōu bèi zhuāngshìle yì fān.',vn:'Trước Quốc khánh, các con phố đều được trang hoàng một lượt.'}
   ],
   colloFull:[
     {zh:'做装饰',py:'zuò zhuāngshì',vn:'để trang trí'},
     {zh:'装饰房间',py:'zhuāngshì fángjiān',vn:'trang trí phòng'},
     {zh:'装饰街道',py:'zhuāngshì jiēdào',vn:'trang hoàng đường phố'},
     {zh:'装饰品',py:'zhuāngshìpǐn',vn:'đồ trang trí'}
   ],
   patterns:[
     {s:'用 + A + 装饰 + B', m:'Dùng A trang trí B'},
     {s:'把 + N + 装饰得 + Adj', m:'Trang trí … thế nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi dùng hoa trang trí phòng khách rất đẹp.',answer:'我们用鲜花把客厅装饰得很漂亮。',answerPy:'Wǒmen yòng xiānhuā bǎ kètīng zhuāngshì de hěn piàoliang.',
      note:'把 + O + V + 得 + bổ ngữ trạng thái.',pair:'把'},
     {promptLang:'vi',prompt:'Căn phòng này tuy nhỏ nhưng được trang trí rất ấm cúng.',answer:'这个房间虽然很小，但是装饰得很温馨。',answerPy:'Zhège fángjiān suīrán hěn xiǎo, dànshì zhuāngshì de hěn wēnxīn.',
      note:'虽然……但是……; 温馨 = ấm cúng.',pair:'虽然……但是……'}
   ]},

  {n:10,zh:'结合',py:'jiéhé',pos:'Động từ',vn:'kết hợp',hv:'kết hợp',em:'🔗',lesson:1,
   explain:['Làm cho hai hay nhiều thứ gắn với nhau, bổ sung cho nhau: 理论和实践结合 (lý thuyết kết hợp thực tiễn), 脑力和体力很好地结合.','Hay dùng 结合 + 实际 / 情况 (căn cứ vào, gắn với thực tế): 这项规定是结合了我校的实际情况而制定的.'],
   usage:'A 和 B + 结合; 把 A 和 B 结合起来; 结合 + 实际 / 情况 / 特点; 结合在一起.',
   collo:['结合实际','理论和实践结合','结合起来','结合在一起'],
   ex_zh:'就这样脑力和体力很好地结合，身心也得到放松。',ex_py:'Jiù zhèyàng nǎolì hé tǐlì hěn hǎo de jiéhé, shēnxīn yě dédào fàngsōng.',ex_vn:'Cứ như thế trí lực và thể lực được kết hợp rất tốt, thân tâm cũng được thư giãn.',
   exList:[
     {zh:'就这样脑力和体力很好地结合，身心也得到放松。',py:'Jiù zhèyàng nǎolì hé tǐlì hěn hǎo de jiéhé, shēnxīn yě dédào fàngsōng.',vn:'Cứ như thế trí lực và thể lực được kết hợp rất tốt, thân tâm cũng được thư giãn.'},
     {zh:'这项规定是结合了我校的实际情况而制定的。',py:'Zhè xiàng guīdìng shì jiéhéle wǒ xiào de shíjì qíngkuàng ér zhìdìng de.',vn:'Quy định này được đặt ra có kết hợp với tình hình thực tế của trường ta.'},
     {zh:'学语言要把听、说、读、写结合起来。',py:'Xué yǔyán yào bǎ tīng, shuō, dú, xiě jiéhé qilai.',vn:'Học ngoại ngữ phải kết hợp nghe, nói, đọc, viết với nhau.'}
   ],
   colloFull:[
     {zh:'结合实际',py:'jiéhé shíjì',vn:'gắn với thực tế'},
     {zh:'理论和实践结合',py:'lǐlùn hé shíjiàn jiéhé',vn:'lý thuyết kết hợp thực tiễn'},
     {zh:'结合起来',py:'jiéhé qilai',vn:'kết hợp lại'},
     {zh:'结合在一起',py:'jiéhé zài yìqǐ',vn:'kết hợp với nhau'}
   ],
   patterns:[
     {s:'把 A 和 B 结合起来', m:'Kết hợp A với B'},
     {s:'结合 + 实际情况 / 特点', m:'Căn cứ vào, gắn với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy giáo luôn kết hợp kiến thức trong sách với cuộc sống.',answer:'老师总是把书上的知识和生活结合起来。',answerPy:'Lǎoshī zǒngshì bǎ shū shang de zhīshi hé shēnghuó jiéhé qilai.',
      note:'把 A 和 B 结合起来.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần kết hợp học tập với nghỉ ngơi thì sẽ không thấy mệt.',answer:'只要把学习和休息结合好，就不会觉得累。',answerPy:'Zhǐyào bǎ xuéxí hé xiūxi jiéhé hǎo, jiù bú huì juéde lèi.',
      note:'只要……就……; 不会 đọc bú huì.',pair:'只要……就……'}
   ]},

  {n:11,zh:'暴雨',py:'bàoyǔ',pos:'Danh từ',vn:'mưa xối xả, mưa to',hv:'bạo vũ',em:'⛈️',lesson:1,
   explain:['Mưa rất to và dữ dội trong thời gian ngắn: 下暴雨, 一场暴雨.','Thành ngữ trong bài: 狂风暴雨 (gió to mưa lớn, mưa bão). Lượng từ: 场 (一场暴雨).'],
   usage:'下暴雨; 一场暴雨; 狂风暴雨; 暴雨过后; 赶上暴雨.',
   collo:['下暴雨','一场暴雨','狂风暴雨','暴雨过后'],
   ex_zh:'一年夏天，下了暴雨，邻居家的墙倒了。',ex_py:'Yì nián xiàtiān, xiàle bàoyǔ, línjū jiā de qiáng dǎo le.',ex_vn:'Một mùa hè nọ, trời đổ mưa lớn, bức tường nhà hàng xóm đổ sập.',
   exList:[
     {zh:'一年夏天，下了暴雨，邻居家的墙倒了。',py:'Yì nián xiàtiān, xiàle bàoyǔ, línjū jiā de qiáng dǎo le.',vn:'Một mùa hè nọ, trời đổ mưa lớn, bức tường nhà hàng xóm đổ sập.'},
     {zh:'有时赶上狂风暴雨，情况紧急，他就得劳驾全家人抢救花草。',py:'Yǒushí gǎnshang kuángfēng bàoyǔ, qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',vn:'Có lúc gặp phải mưa to gió lớn, tình hình khẩn cấp, ông phải phiền cả nhà cứu hoa cỏ.'},
     {zh:'一场暴雨过后，空气变得特别新鲜。',py:'Yì cháng bàoyǔ guòhòu, kōngqì biàn de tèbié xīnxiān.',vn:'Sau một trận mưa lớn, không khí trở nên đặc biệt trong lành.'}
   ],
   colloFull:[
     {zh:'下暴雨',py:'xià bàoyǔ',vn:'mưa to'},
     {zh:'一场暴雨',py:'yì cháng bàoyǔ',vn:'một trận mưa lớn'},
     {zh:'狂风暴雨',py:'kuángfēng bàoyǔ',vn:'mưa to gió lớn'},
     {zh:'暴雨过后',py:'bàoyǔ guòhòu',vn:'sau cơn mưa lớn'}
   ],
   patterns:[
     {s:'下了一场暴雨', m:'Đổ một trận mưa lớn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì trời mưa to, trận đấu bóng đá hôm nay bị hủy rồi.',answer:'因为下暴雨，今天的足球比赛被取消了。',answerPy:'Yīnwèi xià bàoyǔ, jīntiān de zúqiú bǐsài bèi qǔxiāo le.',
      note:'Câu bị động 被取消.',pair:'被'},
     {promptLang:'vi',prompt:'Mưa càng lúc càng to, chúng tôi đành ở nhà.',answer:'雨越下越大，我们只好待在家里。',answerPy:'Yǔ yuè xià yuè dà, wǒmen zhǐhǎo dāi zài jiā li.',
      note:'越 V 越 Adj; 只好 = đành.',pair:'越……越……'}
   ]},

  {n:12,zh:'紧急',py:'jǐnjí',pos:'Tính từ',vn:'khẩn cấp, cấp bách',hv:'khẩn cấp',em:'🚨',lesson:1,
   explain:['Rất gấp, cần xử lý ngay, không thể chậm trễ: 情况紧急, 紧急会议 (họp khẩn), 紧急电话.','Làm trạng ngữ trước động từ (bảng 搭配 của sách): 紧急集合 / 出发 / 通知 / 处理 / 降落 / 宣布.'],
   usage:'情况 / 任务 + 紧急; 紧急 + 会议 / 情况 / 电话; 紧急 + 集合 / 通知 / 处理 / 降落.',
   collo:['情况紧急','紧急通知','紧急处理','紧急集合'],
   ex_zh:'有时赶上狂风暴雨，情况紧急，他就得劳驾全家人抢救花草。',ex_py:'Yǒushí gǎnshang kuángfēng bàoyǔ, qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',ex_vn:'Có lúc gặp mưa to gió lớn, tình hình khẩn cấp, ông phải phiền cả nhà cứu hoa cỏ.',
   exList:[
     {zh:'有时赶上狂风暴雨，情况紧急，他就得劳驾全家人抢救花草。',py:'Yǒushí gǎnshang kuángfēng bàoyǔ, qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',vn:'Có lúc gặp mưa to gió lớn, tình hình khẩn cấp, ông phải phiền cả nhà cứu hoa cỏ.'},
     {zh:'快下班的时候来了个病人，情况紧急，医生又做了两个小时的手术。',py:'Kuài xiàbān de shíhou láile ge bìngrén, qíngkuàng jǐnjí, yīshēng yòu zuòle liǎng ge xiǎoshí de shǒushù.',vn:'Lúc sắp tan ca thì có một bệnh nhân đến, tình hình khẩn cấp, bác sĩ lại mổ thêm hai tiếng.'},
     {zh:'因为天气原因，飞机不得不紧急降落。',py:'Yīnwèi tiānqì yuányīn, fēijī bù dé bù jǐnjí jiàngluò.',vn:'Vì lý do thời tiết, máy bay buộc phải hạ cánh khẩn cấp.'}
   ],
   colloFull:[
     {zh:'情况紧急',py:'qíngkuàng jǐnjí',vn:'tình hình khẩn cấp'},
     {zh:'紧急通知',py:'jǐnjí tōngzhī',vn:'thông báo khẩn'},
     {zh:'紧急处理',py:'jǐnjí chǔlǐ',vn:'xử lý khẩn cấp'},
     {zh:'紧急集合',py:'jǐnjí jíhé',vn:'tập trung khẩn cấp'},
     {zh:'紧急降落',py:'jǐnjí jiàngluò',vn:'hạ cánh khẩn cấp'}
   ],
   patterns:[
     {s:'紧急 + V (集合 / 通知 / 处理)', m:'Làm gì đó một cách khẩn cấp'},
     {s:'情况 + 紧急', m:'Tình hình khẩn cấp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trường vừa ra thông báo khẩn: ngày mai được nghỉ vì bão.',answer:'学校刚发了紧急通知：因为台风，明天放假。',answerPy:'Xuéxiào gāng fāle jǐnjí tōngzhī: yīnwèi táifēng, míngtiān fàngjià.',
      note:'Ôn 台风 (bão); 刚 + V = vừa mới.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Tình hình khẩn cấp quá, chúng ta phải xử lý vấn đề này trước đã.',answer:'情况太紧急了，我们得先把这个问题处理了。',answerPy:'Qíngkuàng tài jǐnjí le, wǒmen děi xiān bǎ zhège wèntí chǔlǐ le.',
      note:'把 + O + 处理了; 得 đọc děi (phải).',pair:'把'}
   ]},

  {n:13,zh:'劳驾',py:'láojià',pos:'Động từ',vn:'làm phiền, cảm phiền',hv:'lao giá',em:'🙏',lesson:1,
   explain:['Lời lịch sự khi nhờ người khác làm việc gì hoặc xin nhường đường: 劳驾，请让一下 (phiền anh tránh một chút).','Trong bài: 劳驾全家人抢救花草 — "phiền đến" cả nhà (bắt cả nhà phải giúp). Gần nghĩa 麻烦, nhưng 劳驾 mang sắc thái khẩu ngữ phương Bắc, lịch sự.'],
   usage:'劳驾 + (您 / 你) + V; 劳驾，请……; 劳驾 + ai + làm gì.',
   collo:['劳驾您','劳驾，让一下','劳驾全家人','劳驾帮个忙'],
   ex_zh:'情况紧急，他就得劳驾全家人抢救花草。',ex_py:'Qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',ex_vn:'Tình hình khẩn cấp, ông phải phiền cả nhà ra cứu hoa cỏ.',
   exList:[
     {zh:'情况紧急，他就得劳驾全家人抢救花草。',py:'Qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',vn:'Tình hình khẩn cấp, ông phải phiền cả nhà ra cứu hoa cỏ.'},
     {zh:'劳驾，请让一下，我要下车。',py:'Láojià, qǐng ràng yíxià, wǒ yào xià chē.',vn:'Làm phiền, xin tránh một chút, tôi muốn xuống xe.'},
     {zh:'劳驾您帮我把这个箱子搬上去，好吗？',py:'Láojià nín bāng wǒ bǎ zhège xiāngzi bān shangqu, hǎo ma?',vn:'Phiền ông giúp tôi khiêng cái thùng này lên được không ạ?'}
   ],
   colloFull:[
     {zh:'劳驾您',py:'láojià nín',vn:'làm phiền ông / bà'},
     {zh:'劳驾，让一下',py:'láojià, ràng yíxià',vn:'phiền tránh một chút'},
     {zh:'劳驾全家人',py:'láojià quánjiā rén',vn:'phiền cả nhà'},
     {zh:'劳驾帮个忙',py:'láojià bāng ge máng',vn:'phiền giúp một tay'}
   ],
   patterns:[
     {s:'劳驾 + (您) + V……', m:'Phiền (ông/bà) làm giúp …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm phiền, bạn có thể giúp tôi chụp một tấm ảnh không?',answer:'劳驾，你能帮我拍一张照片吗？',answerPy:'Láojià, nǐ néng bāng wǒ pāi yì zhāng zhàopiàn ma?',
      note:'劳驾 mở đầu lời nhờ lịch sự.',pair:'能 + V'},
     {promptLang:'vi',prompt:'Phiền ông chuyển chậu hoa này vào trong nhà giúp tôi.',answer:'劳驾您帮我把这盆花搬到屋里去。',answerPy:'Láojià nín bāng wǒ bǎ zhè pén huā bāndào wū li qu.',
      note:'把 + O + 搬到 + nơi chốn + 去.',pair:'把'}
   ]},

  {n:14,zh:'抢救',py:'qiǎngjiù',pos:'Động từ',vn:'cứu, cấp cứu, cứu vãn',hv:'thương cứu',em:'🆘',lesson:1,
   explain:['Cứu gấp trong tình huống nguy cấp: 抢救病人 (cấp cứu bệnh nhân), 抢救花草 (cứu hoa cỏ khỏi mưa bão).','抢 (tranh thủ, gấp gáp) + 救 (cứu) — nhấn mạnh phải làm NHANH. Danh từ đi kèm: 抢救室 (phòng cấp cứu); 抢救无效 (cấp cứu không thành).'],
   usage:'抢救 + 病人 / 生命 / 财产 / 文物; 抢救及时; 经过抢救; 抢救无效.',
   collo:['抢救病人','抢救花草','经过抢救','抢救及时'],
   ex_zh:'情况紧急，他就得劳驾全家人抢救花草。',ex_py:'Qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',ex_vn:'Tình hình khẩn cấp, ông phải phiền cả nhà ra cứu hoa cỏ.',
   exList:[
     {zh:'情况紧急，他就得劳驾全家人抢救花草。',py:'Qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo.',vn:'Tình hình khẩn cấp, ông phải phiền cả nhà ra cứu hoa cỏ.'},
     {zh:'经过医生们的全力抢救，病人终于脱离了危险。',py:'Jīngguò yīshēngmen de quánlì qiǎngjiù, bìngrén zhōngyú tuōlíle wēixiǎn.',vn:'Nhờ các bác sĩ dốc toàn lực cấp cứu, bệnh nhân cuối cùng đã qua cơn nguy hiểm.'},
     {zh:'因为抢救及时，这些古书被保留了下来。',py:'Yīnwèi qiǎngjiù jíshí, zhèxiē gǔshū bèi bǎoliúle xialai.',vn:'Nhờ cứu kịp thời, những cuốn sách cổ này đã được giữ lại.'}
   ],
   colloFull:[
     {zh:'抢救病人',py:'qiǎngjiù bìngrén',vn:'cấp cứu bệnh nhân'},
     {zh:'抢救花草',py:'qiǎngjiù huācǎo',vn:'cứu hoa cỏ'},
     {zh:'经过抢救',py:'jīngguò qiǎngjiù',vn:'qua cấp cứu'},
     {zh:'抢救及时',py:'qiǎngjiù jíshí',vn:'cứu kịp thời'},
     {zh:'抢救室',py:'qiǎngjiùshì',vn:'phòng cấp cứu'}
   ],
   patterns:[
     {s:'经过 + (ai 的) + 抢救，……', m:'Nhờ được cấp cứu, …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người bị thương đã được đưa vào phòng cấp cứu.',answer:'受伤的人已经被送进抢救室了。',answerPy:'Shòushāng de rén yǐjīng bèi sòngjìn qiǎngjiùshì le.',
      note:'Câu 被 + V + bổ ngữ xu hướng 进.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần cấp cứu kịp thời thì bệnh nhân sẽ không nguy hiểm.',answer:'只要抢救及时，病人就不会有危险。',answerPy:'Zhǐyào qiǎngjiù jíshí, bìngrén jiù bú huì yǒu wēixiǎn.',
      note:'只要……就…….',pair:'只要……就……'}
   ]},

  {n:15,zh:'腰',py:'yāo',pos:'Danh từ',vn:'eo, chỗ thắt lưng, lưng',hv:'yêu',em:'🧍',lesson:1,
   explain:['Phần cơ thể giữa ngực và hông: 腰疼 (đau lưng), 弯腰 (cúi lưng), 腰带 (thắt lưng).','Thành ngữ trong bài: 腰酸腿疼 (lưng mỏi chân đau) — mệt rã rời. Khẩu ngữ: 累得腰都直不起来了 (mệt đến mức không thẳng lưng lên được).'],
   usage:'腰疼 / 腰酸; 弯腰; 直不起腰; 腰酸腿疼; 伸伸腰.',
   collo:['腰酸腿疼','弯腰','腰疼','直不起腰'],
   ex_zh:'几百盆花，要很快地抢到屋里去，累得腰酸腿疼，热汗直流。',ex_py:'Jǐ bǎi pén huā, yào hěn kuài de qiǎngdào wū li qu, lèi de yāo suān tuǐ téng, rè hàn zhí liú.',ex_vn:'Mấy trăm chậu hoa phải nhanh chóng khẩn trương đưa vào nhà, mệt đến lưng mỏi chân đau, mồ hôi chảy ròng ròng.',
   exList:[
     {zh:'几百盆花，要很快地抢到屋里去，累得腰酸腿疼，热汗直流。',py:'Jǐ bǎi pén huā, yào hěn kuài de qiǎngdào wū li qu, lèi de yāo suān tuǐ téng, rè hàn zhí liú.',vn:'Mấy trăm chậu hoa phải nhanh chóng khẩn trương đưa vào nhà, mệt đến lưng mỏi chân đau, mồ hôi chảy ròng ròng.'},
     {zh:'他又做了个两小时的手术，累得腰都直不起来了。',py:'Tā yòu zuòle ge liǎng xiǎoshí de shǒushù, lèi de yāo dōu zhí bu qǐlái le.',vn:'Anh ấy lại mổ thêm ca hai tiếng, mệt đến mức lưng cũng không thẳng lên được nữa.'},
     {zh:'坐久了要站起来伸伸腰，不然腰会疼。',py:'Zuò jiǔ le yào zhàn qilai shēnshen yāo, bùrán yāo huì téng.',vn:'Ngồi lâu phải đứng dậy vươn vai duỗi lưng, nếu không sẽ đau lưng.'}
   ],
   colloFull:[
     {zh:'腰酸腿疼',py:'yāo suān tuǐ téng',vn:'lưng mỏi chân đau'},
     {zh:'弯腰',py:'wān yāo',vn:'cúi lưng, khom lưng'},
     {zh:'腰疼',py:'yāo téng',vn:'đau lưng'},
     {zh:'直不起腰',py:'zhí bu qǐ yāo',vn:'không thẳng lưng lên được'}
   ],
   patterns:[
     {s:'累得 + 腰酸腿疼 / 腰都直不起来', m:'Mệt đến mức lưng mỏi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngồi trước máy tính cả ngày, lưng tôi càng ngày càng đau.',answer:'在电脑前坐了一整天，我的腰越来越疼了。',answerPy:'Zài diànnǎo qián zuòle yì zhěng tiān, wǒ de yāo yuè lái yuè téng le.',
      note:'越来越 + tính từ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Anh ấy cúi xuống nhặt quả bóng lên.',answer:'他弯下腰把球捡了起来。',answerPy:'Tā wānxia yāo bǎ qiú jiǎnle qilai.',
      note:'把 + O + 捡了起来; ôn từ 捡.',pair:'把'}
   ]},

  {n:16,zh:'直',py:'zhí',pos:'Phó từ',vn:'thẳng; liên tục, không ngừng',hv:'trực',em:'➡️',lesson:1,
   explain:['Phó từ (注释 2): (1) thẳng, trực tiếp — 直达北京 (đi thẳng tới Bắc Kinh), 直走 (đi thẳng), 直到今天; (2) (động tác) liên tục không ngừng — 热汗直流 (mồ hôi chảy ròng), 气得直发抖 (tức đến run bắn), 直摇头 (lắc đầu lia lịa).','Sau 直 thường là động từ ĐƠN ÂM TIẾT: 直流, 直响, 直哭, 直笑. Còn là tính từ "thẳng": 这条路很直.'],
   usage:'直 + V đơn âm (流 / 哭 / 笑 / 响 / 摇头); 直达 + nơi chốn; 直到 + thời gian; 直走.',
   collo:['热汗直流','直达','直到今天','直摇头'],
   ex_zh:'累得腰酸腿疼，热汗直流。',ex_py:'Lèi de yāo suān tuǐ téng, rè hàn zhí liú.',ex_vn:'Mệt đến lưng mỏi chân đau, mồ hôi chảy ròng ròng.',
   exList:[
     {zh:'累得腰酸腿疼，热汗直流。',py:'Lèi de yāo suān tuǐ téng, rè hàn zhí liú.',vn:'Mệt đến lưng mỏi chân đau, mồ hôi chảy ròng ròng.'},
     {zh:'这趟车可以直达北京，非常方便。',py:'Zhè tàng chē kěyǐ zhídá Běijīng, fēicháng fāngbiàn.',vn:'Chuyến xe này có thể đi thẳng tới Bắc Kinh, rất tiện.'},
     {zh:'父亲听说儿子卖了房子，气得直发抖。',py:'Fùqīn tīngshuō érzi màile fángzi, qì de zhí fādǒu.',vn:'Người cha nghe nói con trai bán nhà, tức đến run bắn cả người.'}
   ],
   colloFull:[
     {zh:'热汗直流',py:'rè hàn zhí liú',vn:'mồ hôi chảy ròng ròng'},
     {zh:'直达',py:'zhídá',vn:'đi thẳng tới'},
     {zh:'直到今天',py:'zhídào jīntiān',vn:'cho đến tận hôm nay'},
     {zh:'直摇头',py:'zhí yáo tóu',vn:'lắc đầu lia lịa'},
     {zh:'直走',py:'zhí zǒu',vn:'đi thẳng'}
   ],
   patterns:[
     {s:'Adj / V + 得 + 直 + V đơn âm', m:'… đến mức cứ … mãi (liên tục)'},
     {s:'直 + 达 / 走 / 到', m:'Thẳng, trực tiếp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này buồn cười quá, mọi người nghe xong cứ cười mãi.',answer:'这个故事太好笑了，大家听了直笑。',answerPy:'Zhège gùshi tài hǎoxiào le, dàjiā tīngle zhí xiào.',
      note:'直 + V đơn âm tiết: liên tục không ngừng.',pair:'太……了'},
     {promptLang:'vi',prompt:'Mãi đến hôm nay, tôi vẫn không hiểu vì sao hồi đó anh ấy lại giận như vậy.',answer:'直到今天，我也不明白他当时为什么发那么大脾气。',answerPy:'Zhídào jīntiān, wǒ yě bù míngbai tā dāngshí wèi shénme fā nàme dà píqi.',
      note:'直到 + thời gian: cho đến tận …; câu của sách.',pair:'为什么'}
   ]},

  {n:17,zh:'不然',py:'bùrán',pos:'Liên từ',vn:'nếu không thì, bằng không',hv:'bất nhiên',em:'↩️',lesson:1,
   explain:['Nối hai vế: nếu không làm như vế trước thì sẽ xảy ra kết quả vế sau. Tương đương 否则 / 要不然 / 要不: 快走吧，不然要迟到了.','Hay dùng sau 除非……: 除非……，不然……. Trong câu hỏi phản vấn (bài khoá): 任何事都要有付出，不然怎么会有回报？'],
   usage:'Vế 1，不然 + (Sub) + kết quả; 除非……，不然……; 不然的话…….',
   collo:['不然会迟到','不然的话','除非……不然……','不然怎么……'],
   ex_zh:'在他看来，任何事都要有付出，不然怎么会有回报？',ex_py:'Zài tā kànlái, rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào?',ex_vn:'Theo ông, việc gì cũng phải bỏ công sức ra, nếu không thì sao có được đền đáp?',
   exList:[
     {zh:'在他看来，任何事都要有付出，不然怎么会有回报？',py:'Zài tā kànlái, rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào?',vn:'Theo ông, việc gì cũng phải bỏ công sức ra, nếu không thì sao có được đền đáp?'},
     {zh:'多亏了这条铁路，不然这么多煤炭怎么运出去？',py:'Duōkuīle zhè tiáo tiělù, bùrán zhème duō méitàn zěnme yùn chuqu?',vn:'May mà có tuyến đường sắt này, nếu không thì chừng ấy than đá làm sao chở ra ngoài được?'},
     {zh:'快点儿走吧，不然我们就赶不上最后一班车了。',py:'Kuài diǎnr zǒu ba, bùrán wǒmen jiù gǎn bu shàng zuìhòu yì bān chē le.',vn:'Đi nhanh lên, không thì chúng ta sẽ không kịp chuyến xe cuối cùng.'}
   ],
   colloFull:[
     {zh:'不然会迟到',py:'bùrán huì chídào',vn:'nếu không sẽ muộn'},
     {zh:'不然的话',py:'bùrán dehuà',vn:'nếu không thì'},
     {zh:'除非……不然……',py:'chúfēi…… bùrán……',vn:'trừ phi …, nếu không …'},
     {zh:'不然怎么……',py:'bùrán zěnme……',vn:'nếu không thì sao …'}
   ],
   patterns:[
     {s:'A，不然 B', m:'Phải A, nếu không thì B (kết quả xấu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mang ô theo đi, nếu không lát nữa trời mưa sẽ bị ướt.',answer:'带上伞吧，不然一会儿下雨会被淋湿的。',answerPy:'Dàishang sǎn ba, bùrán yíhuìr xià yǔ huì bèi línshī de.',
      note:'不然 + kết quả xấu; 被淋湿 (bị mưa làm ướt).',pair:'被'},
     {promptLang:'vi',prompt:'May mà bạn nhắc tôi, nếu không tôi đã quên sạch rồi.',answer:'幸亏你提醒了我，不然我早就忘了。',answerPy:'Xìngkuī nǐ tíxǐngle wǒ, bùrán wǒ zǎo jiù wàng le.',
      note:'幸亏……，不然……: may mà …, nếu không thì ….',pair:'幸亏……不然……'}
   ]},

  {n:18,zh:'回报',py:'huíbào',pos:'Động từ / Danh từ',vn:'báo đáp, đền đáp; sự đền đáp',hv:'hồi báo',em:'🎁',lesson:1,
   explain:['Động từ: đáp lại ơn nghĩa, công sức của người khác — 回报父母 (báo đáp cha mẹ), 回报社会 (đền đáp xã hội).','Danh từ: kết quả tốt nhận được sau khi bỏ công sức — 有付出才有回报 (có bỏ công mới có đền đáp), 得到回报.'],
   usage:'回报 + 父母 / 社会 / 老师; 得到回报; 有付出才有回报; 不求回报.',
   collo:['回报父母','回报社会','得到回报','不求回报'],
   ex_zh:'任何事都要有付出，不然怎么会有回报？',ex_py:'Rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào?',ex_vn:'Việc gì cũng phải bỏ công sức, nếu không thì sao có được đền đáp?',
   exList:[
     {zh:'任何事都要有付出，不然怎么会有回报？',py:'Rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào?',vn:'Việc gì cũng phải bỏ công sức, nếu không thì sao có được đền đáp?'},
     {zh:'我一定要好好学习，将来回报父母。',py:'Wǒ yídìng yào hǎohāo xuéxí, jiānglái huíbào fùmǔ.',vn:'Tôi nhất định phải học thật tốt, sau này báo đáp cha mẹ.'},
     {zh:'她做志愿者从来不求回报。',py:'Tā zuò zhìyuànzhě cónglái bù qiú huíbào.',vn:'Cô ấy làm tình nguyện viên chưa bao giờ mong được đền đáp.'}
   ],
   colloFull:[
     {zh:'回报父母',py:'huíbào fùmǔ',vn:'báo đáp cha mẹ'},
     {zh:'回报社会',py:'huíbào shèhuì',vn:'đền đáp xã hội'},
     {zh:'得到回报',py:'dédào huíbào',vn:'được đền đáp'},
     {zh:'不求回报',py:'bù qiú huíbào',vn:'không cầu đền đáp'}
   ],
   patterns:[
     {s:'有付出，才有回报', m:'Có bỏ công mới có thành quả'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có nỗ lực bỏ công sức thì mới có được đền đáp.',answer:'只有努力付出，才能得到回报。',answerPy:'Zhǐyǒu nǔlì fùchū, cái néng dédào huíbào.',
      note:'只有……才……: điều kiện cần.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Sự cố gắng của anh ấy cuối cùng đã được đền đáp.',answer:'他的努力终于得到了回报。',answerPy:'Tā de nǔlì zhōngyú dédàole huíbào.',
      note:'得到回报 — danh từ 回报 làm tân ngữ.',pair:'终于'}
   ]},

  {n:19,zh:'真理',py:'zhēnlǐ',pos:'Danh từ',vn:'chân lý',hv:'chân lý',em:'💡',lesson:1,
   explain:['Lẽ phải, quy luật đúng đắn phản ánh đúng sự thật: 这是生活的真理 (đây là chân lý của cuộc sống).','Hay đi với 追求 (theo đuổi), 坚持 (giữ vững), 发现 (phát hiện): 追求真理. Trùng khít Hán Việt.'],
   usage:'生活的真理; 追求 / 坚持 / 发现 + 真理; 是真理.',
   collo:['生活的真理','追求真理','坚持真理','发现真理'],
   ex_zh:'任何事都要有付出，不然怎么会有回报？这是生活的真理。',ex_py:'Rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào? Zhè shì shēnghuó de zhēnlǐ.',ex_vn:'Việc gì cũng phải bỏ công sức, nếu không sao có được đền đáp? Đây là chân lý của cuộc sống.',
   exList:[
     {zh:'任何事都要有付出，不然怎么会有回报？这是生活的真理。',py:'Rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào? Zhè shì shēnghuó de zhēnlǐ.',vn:'Việc gì cũng phải bỏ công sức, nếu không sao có được đền đáp? Đây là chân lý của cuộc sống.'},
     {zh:'科学家们一生都在追求真理。',py:'Kēxuéjiāmen yìshēng dōu zài zhuīqiú zhēnlǐ.',vn:'Các nhà khoa học cả đời đều theo đuổi chân lý.'},
     {zh:'“实践是检验真理的唯一标准”这句话你听说过吗？',py:'“Shíjiàn shì jiǎnyàn zhēnlǐ de wéiyī biāozhǔn” zhè jù huà nǐ tīngshuōguo ma?',vn:'Bạn đã từng nghe câu “Thực tiễn là tiêu chuẩn duy nhất để kiểm nghiệm chân lý” chưa?'}
   ],
   colloFull:[
     {zh:'生活的真理',py:'shēnghuó de zhēnlǐ',vn:'chân lý cuộc sống'},
     {zh:'追求真理',py:'zhuīqiú zhēnlǐ',vn:'theo đuổi chân lý'},
     {zh:'坚持真理',py:'jiānchí zhēnlǐ',vn:'giữ vững chân lý'},
     {zh:'发现真理',py:'fāxiàn zhēnlǐ',vn:'phát hiện chân lý'}
   ],
   patterns:[
     {s:'……，这是 + N + 的真理', m:'… đây là chân lý của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu nói này tuy rất đơn giản, nhưng lại là chân lý của cuộc sống.',answer:'这句话虽然很简单，但却是生活的真理。',answerPy:'Zhè jù huà suīrán hěn jiǎndān, dàn què shì shēnghuó de zhēnlǐ.',
      note:'虽然……但(是)却……: nhấn mạnh sự đối lập.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chân lý đôi khi nằm trong tay số ít người.',answer:'真理有时候是在少数人手里的。',answerPy:'Zhēnlǐ yǒu shíhou shì zài shǎoshù rén shǒu li de.',
      note:'是……的 khẳng định nhận định.',pair:'是……的'}
   ]},

  {n:20,zh:'浇',py:'jiāo',pos:'Động từ',vn:'tưới, dội, đổ (nước)',hv:'kiêu',em:'🚿',lesson:1,
   explain:['Cho nước chảy lên cây, lên vật gì: 浇水 (tưới nước), 浇花 (tưới hoa), 浇地 (tưới ruộng).','Mưa làm ướt người cũng dùng 浇: 被雨浇透了 (bị mưa dội ướt sũng).'],
   usage:'浇 + 水 / 花 / 地 / 菜; 给 + cây + 浇水; 被雨浇湿.',
   collo:['浇水','浇花','给花浇水','多浇水'],
   ex_zh:'有的花喜干，就别多浇水。',ex_py:'Yǒu de huā xǐ gān, jiù bié duō jiāo shuǐ.',ex_vn:'Có loài hoa ưa khô thì đừng tưới nhiều nước.',
   exList:[
     {zh:'有的花喜干，就别多浇水。',py:'Yǒu de huā xǐ gān, jiù bié duō jiāo shuǐ.',vn:'Có loài hoa ưa khô thì đừng tưới nhiều nước.'},
     {zh:'我出差的时候，麻烦你帮我给花浇浇水。',py:'Wǒ chūchāi de shíhou, máfan nǐ bāng wǒ gěi huā jiāojiao shuǐ.',vn:'Lúc tôi đi công tác, phiền bạn tưới giúp tôi mấy chậu hoa.'},
     {zh:'他忘了带伞，被大雨浇得全身都湿了。',py:'Tā wàngle dài sǎn, bèi dàyǔ jiāo de quánshēn dōu shī le.',vn:'Anh ấy quên mang ô, bị mưa to dội ướt khắp người.'}
   ],
   colloFull:[
     {zh:'浇水',py:'jiāo shuǐ',vn:'tưới nước'},
     {zh:'浇花',py:'jiāo huā',vn:'tưới hoa'},
     {zh:'给花浇水',py:'gěi huā jiāo shuǐ',vn:'tưới nước cho hoa'},
     {zh:'多浇水',py:'duō jiāo shuǐ',vn:'tưới nhiều nước'}
   ],
   patterns:[
     {s:'给 + N + 浇水', m:'Tưới nước cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sáng nào bà nội cũng tưới hoa một lần.',answer:'奶奶每天早上都给花浇一次水。',answerPy:'Nǎinai měi tiān zǎoshang dōu gěi huā jiāo yí cì shuǐ.',
      note:'Bổ ngữ động lượng 一次 chen giữa 浇 và 水.',pair:'每……都……'},
     {promptLang:'vi',prompt:'Nếu tưới quá nhiều nước thì hoa sẽ chết.',answer:'如果浇水浇得太多，花就会死。',answerPy:'Rúguǒ jiāo shuǐ jiāo de tài duō, huā jiù huì sǐ.',
      note:'V + O + V + 得 + bổ ngữ trạng thái (lặp động từ).',pair:'如果……就……'}
   ]},

  {n:21,zh:'潮湿',py:'cháoshī',pos:'Tính từ',vn:'ẩm ướt, ẩm thấp',hv:'triều thấp',em:'💧',lesson:1,
   explain:['Chứa nhiều hơi nước, ẩm (thường là trạng thái không dễ chịu): 潮湿的环境, 天气潮湿, 衣服很潮湿.','Phân biệt với 湿润 (ẩm dịu, dễ chịu, mắt rưng rưng): 空气湿润 (không khí ẩm dịu), 眼圈湿润了 (vành mắt rưng rưng) — bài tập 2 của sách.'],
   usage:'潮湿的 + 空气 / 气候 / 环境 / 海风 / 路面 / 台阶 / 屋子 / 衣服; 天气 + 潮湿.',
   collo:['潮湿的环境','潮湿的空气','潮湿的气候','天气潮湿'],
   ex_zh:'有的花喜欢潮湿的环境，就别放在太阳地里。',ex_py:'Yǒu de huā xǐhuan cháoshī de huánjìng, jiù bié fàng zài tàiyáng dì li.',ex_vn:'Có loài hoa ưa môi trường ẩm ướt thì đừng để ngoài nắng.',
   exList:[
     {zh:'有的花喜欢潮湿的环境，就别放在太阳地里。',py:'Yǒu de huā xǐhuan cháoshī de huánjìng, jiù bié fàng zài tàiyáng dì li.',vn:'Có loài hoa ưa môi trường ẩm ướt thì đừng để ngoài nắng.'},
     {zh:'河内的春天天气很潮湿，衣服总是晒不干。',py:'Hénèi de chūntiān tiānqì hěn cháoshī, yīfu zǒngshì shài bu gān.',vn:'Mùa xuân ở Hà Nội thời tiết rất nồm ẩm, quần áo phơi mãi không khô.'},
     {zh:'下过雨以后，潮湿的台阶很滑，走路要小心。',py:'Xiàguo yǔ yǐhòu, cháoshī de táijiē hěn huá, zǒu lù yào xiǎoxīn.',vn:'Sau khi mưa, bậc thềm ẩm ướt rất trơn, đi đường phải cẩn thận.'}
   ],
   colloFull:[
     {zh:'潮湿的环境',py:'cháoshī de huánjìng',vn:'môi trường ẩm ướt'},
     {zh:'潮湿的空气',py:'cháoshī de kōngqì',vn:'không khí ẩm ướt'},
     {zh:'潮湿的气候',py:'cháoshī de qìhòu',vn:'khí hậu ẩm thấp'},
     {zh:'天气潮湿',py:'tiānqì cháoshī',vn:'thời tiết ẩm ướt'},
     {zh:'潮湿的衣服',py:'cháoshī de yīfu',vn:'quần áo ẩm'}
   ],
   patterns:[
     {s:'潮湿的 + N (空气 / 气候 / 屋子…)', m:'… ẩm ướt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khí hậu miền Nam càng ngày càng ẩm ướt.',answer:'南方的气候越来越潮湿了。',answerPy:'Nánfāng de qìhòu yuè lái yuè cháoshī le.',
      note:'越来越 + tính từ + 了.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Căn phòng ẩm quá, đồ đạc đều bị mốc rồi.',answer:'屋子太潮湿了，东西都发霉了。',answerPy:'Wūzi tài cháoshī le, dōngxi dōu fāméi le.',
      note:'太……了; 发霉 = bị mốc.',pair:'太……了'}
   ]},

  {n:22,zh:'施肥',py:'shī féi',pos:'Động từ (li hợp)',vn:'bón phân',hv:'thi phì',em:'🌱',lesson:1,
   explain:['Bón phân cho cây: 给花施肥 (bón phân cho hoa). 施 = thi hành, dùng; 肥 = phân bón (化肥 — phân hoá học).','Là động từ li hợp: chen được thành phần vào giữa — 施了一次肥, 施过肥. Trong bài: 给花换盆剪枝施肥的活儿.'],
   usage:'给 + cây + 施肥; 施肥 + 浇水; 施一次肥; 按时施肥.',
   collo:['给花施肥','浇水施肥','按时施肥','施一次肥'],
   ex_zh:'给花换盆剪枝施肥的活儿他越做越熟练。',ex_py:'Gěi huā huàn pén jiǎn zhī shī féi de huór tā yuè zuò yuè shúliàn.',ex_vn:'Những việc thay chậu, tỉa cành, bón phân cho hoa ông càng làm càng thuần thục.',
   exList:[
     {zh:'给花换盆剪枝施肥的活儿他越做越熟练。',py:'Gěi huā huàn pén jiǎn zhī shī féi de huór tā yuè zuò yuè shúliàn.',vn:'Những việc thay chậu, tỉa cành, bón phân cho hoa ông càng làm càng thuần thục.'},
     {zh:'春天到了，农民们忙着给庄稼施肥。',py:'Chūntiān dào le, nóngmínmen mángzhe gěi zhuāngjia shī féi.',vn:'Mùa xuân đến, nông dân tất bật bón phân cho hoa màu.'},
     {zh:'这盆花一个月施一次肥就够了，施多了反而不好。',py:'Zhè pén huā yí ge yuè shī yí cì féi jiù gòu le, shīduōle fǎn\'ér bù hǎo.',vn:'Chậu hoa này mỗi tháng bón phân một lần là đủ, bón nhiều ngược lại không tốt.'}
   ],
   colloFull:[
     {zh:'给花施肥',py:'gěi huā shī féi',vn:'bón phân cho hoa'},
     {zh:'浇水施肥',py:'jiāo shuǐ shī féi',vn:'tưới nước bón phân'},
     {zh:'按时施肥',py:'ànshí shī féi',vn:'bón phân đúng hạn'},
     {zh:'施一次肥',py:'shī yí cì féi',vn:'bón phân một lần'}
   ],
   patterns:[
     {s:'给 + N + 施肥', m:'Bón phân cho …'},
     {s:'✗ 施肥花 → ✓ 给花施肥', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội vừa tưới nước vừa bón phân cho rau.',answer:'爷爷一边浇水，一边给菜施肥。',answerPy:'Yéye yìbiān jiāo shuǐ, yìbiān gěi cài shī féi.',
      note:'一边……一边……; 施肥 là li hợp, đối tượng đưa ra trước bằng 给.',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Hoa này tôi đã bón phân rồi, không cần bón nữa.',answer:'这盆花我已经施过肥了，不用再施了。',answerPy:'Zhè pén huā wǒ yǐjīng shīguo féi le, búyòng zài shī le.',
      note:'Li hợp: 施过肥 (过 chen giữa).',pair:'已经……了'}
   ]},

  {n:23,zh:'熟练',py:'shúliàn',pos:'Tính từ',vn:'thuần thục, thông thạo',hv:'thục luyện',em:'🎯',lesson:1,
   explain:['Làm nhiều nên thạo, nhanh và chính xác: 动作熟练, 技术熟练, 熟练地使用电脑.','Làm trạng ngữ với 地 (bảng 搭配 của sách): 熟练地 + 读 / 模仿 / 使用 / 计算 / 控制. Trong bài: 越做越熟练.'],
   usage:'动作 / 技术 + 熟练; 熟练地 + V; 越做越熟练; 熟练掌握.',
   collo:['动作熟练','熟练地使用','熟练掌握','越做越熟练'],
   ex_zh:'给花换盆剪枝施肥的活儿他越做越熟练。',ex_py:'Gěi huā huàn pén jiǎn zhī shī féi de huór tā yuè zuò yuè shúliàn.',ex_vn:'Việc thay chậu, tỉa cành, bón phân cho hoa ông càng làm càng thuần thục.',
   exList:[
     {zh:'给花换盆剪枝施肥的活儿他越做越熟练。',py:'Gěi huā huàn pén jiǎn zhī shī féi de huór tā yuè zuò yuè shúliàn.',vn:'Việc thay chậu, tỉa cành, bón phân cho hoa ông càng làm càng thuần thục.'},
     {zh:'我觉得你们的动作好像还不太熟练，还得多练习练习。',py:'Wǒ juéde nǐmen de dòngzuò hǎoxiàng hái bú tài shúliàn, hái děi duō liànxí liànxí.',vn:'Tôi thấy động tác của các bạn hình như vẫn chưa thạo lắm, còn phải luyện tập nhiều hơn.'},
     {zh:'学了三年，她已经能熟练地使用汉语了。',py:'Xuéle sān nián, tā yǐjīng néng shúliàn de shǐyòng Hànyǔ le.',vn:'Học ba năm, cô ấy đã có thể dùng tiếng Trung thành thạo.'}
   ],
   colloFull:[
     {zh:'动作熟练',py:'dòngzuò shúliàn',vn:'động tác thuần thục'},
     {zh:'熟练地使用',py:'shúliàn de shǐyòng',vn:'sử dụng thành thạo'},
     {zh:'熟练掌握',py:'shúliàn zhǎngwò',vn:'nắm vững thành thạo'},
     {zh:'越做越熟练',py:'yuè zuò yuè shúliàn',vn:'càng làm càng thạo'},
     {zh:'技术熟练',py:'jìshù shúliàn',vn:'kỹ thuật thuần thục'}
   ],
   patterns:[
     {s:'熟练地 + V', m:'Làm … một cách thành thạo'},
     {s:'越 + V + 越熟练', m:'Càng làm càng thạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món này mẹ tôi càng nấu càng thạo.',answer:'这道菜我妈妈越做越熟练了。',answerPy:'Zhè dào cài wǒ māma yuè zuò yuè shúliàn le.',
      note:'越……越……: mức độ tăng theo hành động.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Chỉ cần luyện tập mỗi ngày, bạn sẽ gõ chữ Hán thành thạo.',answer:'只要每天练习，你就能熟练地打汉字了。',answerPy:'Zhǐyào měi tiān liànxí, nǐ jiù néng shúliàn de dǎ Hànzì le.',
      note:'熟练地 + V; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:24,zh:'应付',py:'yìngfu',pos:'Động từ',vn:'ứng phó, đối phó; làm chiếu lệ',hv:'ứng phó',em:'🛡️',lesson:1,
   explain:['Dùng biện pháp thích hợp để đối phó với người / việc: 应付考试 (đối phó kỳ thi), 花生病长虫他也知道如何应付了. Bổ ngữ hay gặp: 应付得了 / 应付不了 / 应付过去.','Còn có nghĩa làm qua loa, chiếu lệ cho xong (khác 处理 — xem 词语辨析): 他学习完全是在应付老师.'],
   usage:'应付 + 情况 / 考试 / 工作 / 检查 / 比赛 / 领导; 应付得了 / 不了; 应付过去; 如何应付.',
   collo:['应付考试','应付不了','应付过去','如何应付'],
   ex_zh:'花生病长虫他也知道如何应付了。',ex_py:'Huā shēngbìng zhǎng chóng tā yě zhīdào rúhé yìngfu le.',ex_vn:'Hoa bị bệnh, có sâu, ông cũng biết cách xử trí rồi.',
   exList:[
     {zh:'花生病长虫他也知道如何应付了。',py:'Huā shēngbìng zhǎng chóng tā yě zhīdào rúhé yìngfu le.',vn:'Hoa bị bệnh, có sâu, ông cũng biết cách xử trí rồi.'},
     {zh:'一个星期的迎来送往，她已经有点儿应付不了了。',py:'Yí ge xīngqī de yínglái sòngwǎng, tā yǐjīng yǒudiǎnr yìngfu bu liǎo le.',vn:'Một tuần liền đón khách tiễn khách, cô ấy đã hơi không kham nổi nữa rồi.'},
     {zh:'熟练工种，天天干，我闭着眼睛都能应付。',py:'Shúliàn gōngzhǒng, tiāntiān gàn, wǒ bìzhe yǎnjing dōu néng yìngfu.',vn:'Việc quen tay, ngày nào cũng làm, tôi nhắm mắt cũng xoay xở được.'}
   ],
   colloFull:[
     {zh:'应付考试',py:'yìngfu kǎoshì',vn:'đối phó kỳ thi'},
     {zh:'应付不了',py:'yìngfu bu liǎo',vn:'không đối phó nổi'},
     {zh:'应付过去',py:'yìngfu guoqu',vn:'đối phó cho qua'},
     {zh:'如何应付',py:'rúhé yìngfu',vn:'đối phó thế nào'},
     {zh:'应付比赛',py:'yìngfu bǐsài',vn:'đối phó trận đấu'}
   ],
   patterns:[
     {s:'应付得了 / 应付不了', m:'Đối phó được / không đối phó nổi'},
     {s:'在应付 + ai', m:'Làm chiếu lệ cho xong với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhiều bài tập như vậy, một mình tôi không kham nổi.',answer:'这么多作业，我一个人应付不了。',answerPy:'Zhème duō zuòyè, wǒ yí ge rén yìngfu bu liǎo.',
      note:'Bổ ngữ khả năng 不了.',pair:'V + 不了'},
     {promptLang:'vi',prompt:'Bạn học không nghiêm túc, hoàn toàn là đang đối phó cho xong với bố mẹ.',answer:'你学习不认真，完全是在应付父母。',answerPy:'Nǐ xuéxí bú rènzhēn, wánquán shì zài yìngfu fùmǔ.',
      note:'应付 nghĩa "làm chiếu lệ"; 在 + V: đang.',pair:'是……'}
   ]},

  {n:25,zh:'鲜艳',py:'xiānyàn',pos:'Tính từ',vn:'tươi đẹp, rực rỡ (màu sắc)',hv:'tiên diễm',em:'🌺',lesson:1,
   explain:['Màu sắc tươi và đẹp, nổi bật: 鲜艳的花朵, 颜色鲜艳.','Theo bảng 搭配 của sách: 鲜艳的 + 花朵 / 颜色 / 色彩 / 图案. Chỉ nói về màu sắc, không nói người: ✗ 她很鲜艳 → 她穿得很鲜艳.'],
   usage:'鲜艳的 + 花朵 / 颜色 / 色彩 / 图案 / 服装; 颜色 + 鲜艳; 穿得很鲜艳.',
   collo:['鲜艳的花朵','颜色鲜艳','鲜艳的色彩','鲜艳的图案'],
   ex_zh:'看着院子里那鲜艳的花朵，老舍自豪地说……',ex_py:'Kànzhe yuànzi li nà xiānyàn de huāduǒ, Lǎo Shě zìháo de shuō……',ex_vn:'Nhìn những bông hoa rực rỡ trong sân, Lão Xá tự hào nói …',
   exList:[
     {zh:'看着院子里那鲜艳的花朵，老舍自豪地说……',py:'Kànzhe yuànzi li nà xiānyàn de huāduǒ, Lǎo Shě zìháo de shuō……',vn:'Nhìn những bông hoa rực rỡ trong sân, Lão Xá tự hào nói …'},
     {zh:'这次演出需要设计色彩鲜艳的服装。',py:'Zhè cì yǎnchū xūyào shèjì sècǎi xiānyàn de fúzhuāng.',vn:'Buổi biểu diễn lần này cần thiết kế trang phục có màu sắc tươi sáng.'},
     {zh:'小孩子一般都喜欢颜色鲜艳的玩具。',py:'Xiǎo háizi yìbān dōu xǐhuan yánsè xiānyàn de wánjù.',vn:'Trẻ nhỏ thường đều thích đồ chơi màu sắc rực rỡ.'}
   ],
   colloFull:[
     {zh:'鲜艳的花朵',py:'xiānyàn de huāduǒ',vn:'bông hoa rực rỡ'},
     {zh:'颜色鲜艳',py:'yánsè xiānyàn',vn:'màu sắc tươi sáng'},
     {zh:'鲜艳的色彩',py:'xiānyàn de sècǎi',vn:'màu sắc rực rỡ'},
     {zh:'鲜艳的图案',py:'xiānyàn de tú\'àn',vn:'hoa văn rực rỡ'},
     {zh:'服装鲜艳',py:'fúzhuāng xiānyàn',vn:'trang phục sặc sỡ'}
   ],
   patterns:[
     {s:'颜色 / 色彩 + 鲜艳', m:'Màu sắc tươi sáng'},
     {s:'✗ 她很鲜艳 → ✓ 她穿得很鲜艳', m:''}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy thích mặc quần áo màu sắc rực rỡ, trông rất có sức sống.',answer:'她喜欢穿颜色鲜艳的衣服，看起来很有活力。',answerPy:'Tā xǐhuan chuān yánsè xiānyàn de yīfu, kàn qilai hěn yǒu huólì.',
      note:'看起来 + tính từ; ôn 活力 (bài 30).',pair:'看起来'},
     {promptLang:'vi',prompt:'Hoa trong vườn càng ngày càng rực rỡ.',answer:'花园里的花越来越鲜艳了。',answerPy:'Huāyuán li de huā yuè lái yuè xiānyàn le.',
      note:'越来越 + tính từ.',pair:'越来越……'}
   ]},

  {n:26,zh:'自豪',py:'zìháo',pos:'Tính từ',vn:'tự hào, hãnh diện',hv:'tự hào',em:'😌',lesson:1,
   explain:['Cảm thấy vinh dự, hãnh diện vì thành tích của mình hay của người / tập thể có quan hệ với mình — sắc thái TÍCH CỰC: 为祖国感到自豪 (tự hào về Tổ quốc), 自豪地说.','Phân biệt với 骄傲: 骄傲 còn có nghĩa XẤU "kiêu ngạo, tự cao" (bài tập 2 của sách: 李岩骄傲得不得了).'],
   usage:'为 / 对 + N + 感到自豪; 自豪地 + V; 让 + ai + 自豪; 非常自豪.',
   collo:['感到自豪','自豪地说','为……感到自豪','非常自豪'],
   ex_zh:'看着院子里那鲜艳的花朵，老舍自豪地说：“不是乱吹，这就是知识啊！”',ex_py:'Kànzhe yuànzi li nà xiānyàn de huāduǒ, Lǎo Shě zìháo de shuō: “Bú shì luàn chuī, zhè jiù shì zhīshi a!”',ex_vn:'Nhìn những bông hoa rực rỡ trong sân, Lão Xá tự hào nói: “Không phải khoác lác đâu, đây chính là tri thức đấy!”',
   exList:[
     {zh:'看着院子里那鲜艳的花朵，老舍自豪地说：“不是乱吹，这就是知识啊！”',py:'Kànzhe yuànzi li nà xiānyàn de huāduǒ, Lǎo Shě zìháo de shuō: “Bú shì luàn chuī, zhè jiù shì zhīshi a!”',vn:'Nhìn những bông hoa rực rỡ trong sân, Lão Xá tự hào nói: “Không phải khoác lác đâu, đây chính là tri thức đấy!”'},
     {zh:'我们的产品改善了许多人的生活，这是我们非常自豪的事情。',py:'Wǒmen de chǎnpǐn gǎishànle xǔduō rén de shēnghuó, zhè shì wǒmen fēicháng zìháo de shìqing.',vn:'Sản phẩm của chúng tôi đã cải thiện cuộc sống của rất nhiều người, đây là điều chúng tôi rất tự hào.'},
     {zh:'妹妹考上了大学，全家人都为她感到自豪。',py:'Mèimei kǎoshangle dàxué, quánjiā rén dōu wèi tā gǎndào zìháo.',vn:'Em gái thi đỗ đại học, cả nhà đều tự hào về em ấy.'}
   ],
   colloFull:[
     {zh:'感到自豪',py:'gǎndào zìháo',vn:'cảm thấy tự hào'},
     {zh:'自豪地说',py:'zìháo de shuō',vn:'tự hào nói'},
     {zh:'为……感到自豪',py:'wèi…… gǎndào zìháo',vn:'tự hào về …'},
     {zh:'非常自豪',py:'fēicháng zìháo',vn:'rất tự hào'}
   ],
   patterns:[
     {s:'为 + N + 感到自豪', m:'Tự hào về …'},
     {s:'自豪地 + V', m:'Làm gì với vẻ tự hào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Là người Việt Nam, tôi tự hào về quê hương mình.',answer:'作为越南人，我为自己的家乡感到自豪。',answerPy:'Zuòwéi Yuènánrén, wǒ wèi zìjǐ de jiāxiāng gǎndào zìháo.',
      note:'作为 + thân phận; 为……感到自豪.',pair:'作为……'},
     {promptLang:'vi',prompt:'Con trai được giải nhất, bố mẹ cậu ấy tự hào đến mức cười mãi.',answer:'儿子得了第一名，他的父母自豪得直笑。',answerPy:'Érzi déle dì-yī míng, tā de fùmǔ zìháo de zhí xiào.',
      note:'Adj + 得 + 直 + V (ôn điểm 直 của bài).',pair:'……得……'}
   ]},

  {n:27,zh:'吹',py:'chuī',pos:'Động từ',vn:'khoe khoang, khoác lác; thổi',hv:'xuy',em:'🎺',lesson:1,
   explain:['Nghĩa trong bài (khẩu ngữ): nói khoác, khoe khoang — 不是乱吹 (không phải khoác lác bừa đâu), 别吹了 (đừng khoác lác nữa), 吹牛 (nói phét).','Nghĩa gốc: thổi — 吹风 (hóng gió), 吹蜡烛 (thổi nến), 风吹 (gió thổi).'],
   usage:'乱吹; 吹牛; 别吹了; 吹 + 蜡烛 / 口哨; 风吹 + N.',
   collo:['乱吹','吹牛','别吹了','吹蜡烛'],
   ex_zh:'“不是乱吹，这就是知识啊！多得些知识，一定不是坏事。”',ex_py:'“Bú shì luàn chuī, zhè jiù shì zhīshi a! Duō dé xiē zhīshi, yídìng bú shì huàishì.”',ex_vn:'“Không phải khoác lác đâu, đây chính là tri thức đấy! Có thêm chút tri thức nhất định không phải chuyện xấu.”',
   exList:[
     {zh:'“不是乱吹，这就是知识啊！多得些知识，一定不是坏事。”',py:'“Bú shì luàn chuī, zhè jiù shì zhīshi a! Duō dé xiē zhīshi, yídìng bú shì huàishì.”',vn:'“Không phải khoác lác đâu, đây chính là tri thức đấy! Có thêm chút tri thức nhất định không phải chuyện xấu.”'},
     {zh:'你别吹了，上次考试你才考了六十分。',py:'Nǐ bié chuī le, shàng cì kǎoshì nǐ cái kǎole liùshí fēn.',vn:'Cậu đừng khoác lác nữa, lần thi trước cậu mới được có 60 điểm.'},
     {zh:'过生日的时候，大家一起唱歌，我吹灭了蜡烛。',py:'Guò shēngrì de shíhou, dàjiā yìqǐ chàng gē, wǒ chuīmièle làzhú.',vn:'Lúc sinh nhật, mọi người cùng hát, tôi thổi tắt nến.'}
   ],
   colloFull:[
     {zh:'乱吹',py:'luàn chuī',vn:'khoác lác bừa'},
     {zh:'吹牛',py:'chuī niú',vn:'nói phét, khoác lác'},
     {zh:'别吹了',py:'bié chuī le',vn:'đừng khoác lác nữa'},
     {zh:'吹蜡烛',py:'chuī làzhú',vn:'thổi nến'}
   ],
   patterns:[
     {s:'不是乱吹，……', m:'Không phải nói khoác đâu, … (khẳng định điều mình nói là thật)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không phải tôi khoác lác đâu, món này tôi nhắm mắt cũng nấu được.',answer:'不是我乱吹，这道菜我闭着眼睛都能做。',answerPy:'Bú shì wǒ luàn chuī, zhè dào cài wǒ bìzhe yǎnjing dōu néng zuò.',
      note:'V + 着 + … 都能 …: làm trong trạng thái … cũng làm được.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Anh ta thích khoác lác nhất, lời anh ta nói bạn đừng tin.',answer:'他最喜欢吹牛了，他的话你别相信。',answerPy:'Tā zuì xǐhuan chuī niú le, tā de huà nǐ bié xiāngxìn.',
      note:'最……了 nhấn mạnh; 别 + V: đừng.',pair:'最……了'}
   ]},

  {n:28,zh:'爱心',py:'àixīn',pos:'Danh từ',vn:'lòng yêu thương, lòng trắc ẩn',hv:'ái tâm',em:'❤️',lesson:1,
   explain:['Tấm lòng yêu thương, quan tâm đến người khác, loài vật, cây cỏ: 很有爱心 (rất giàu lòng yêu thương), 献爱心 (góp tấm lòng — thường là quyên góp).','Hay làm định ngữ: 爱心活动 (hoạt động thiện nguyện), 爱心人士 (nhà hảo tâm).'],
   usage:'有 / 很有 + 爱心; 献爱心; 充满爱心; 爱心 + 活动 / 人士.',
   collo:['很有爱心','献爱心','充满爱心','爱心活动'],
   ex_zh:'老舍很有爱心，更懂得快乐要分享。',ex_py:'Lǎo Shě hěn yǒu àixīn, gèng dǒngde kuàilè yào fēnxiǎng.',ex_vn:'Lão Xá rất giàu lòng yêu thương, lại càng hiểu rằng niềm vui phải được sẻ chia.',
   exList:[
     {zh:'老舍很有爱心，更懂得快乐要分享。',py:'Lǎo Shě hěn yǒu àixīn, gèng dǒngde kuàilè yào fēnxiǎng.',vn:'Lão Xá rất giàu lòng yêu thương, lại càng hiểu rằng niềm vui phải được sẻ chia.'},
     {zh:'学校组织了一次爱心活动，为山区的孩子捐书。',py:'Xuéxiào zǔzhīle yí cì àixīn huódòng, wèi shānqū de háizi juān shū.',vn:'Trường tổ chức một hoạt động thiện nguyện, quyên góp sách cho trẻ em vùng núi.'},
     {zh:'她很有爱心，常常照顾路边的流浪猫。',py:'Tā hěn yǒu àixīn, chángcháng zhàogù lùbiān de liúlàng māo.',vn:'Cô ấy rất có lòng yêu thương, thường chăm sóc mèo hoang bên đường.'}
   ],
   colloFull:[
     {zh:'很有爱心',py:'hěn yǒu àixīn',vn:'rất giàu lòng yêu thương'},
     {zh:'献爱心',py:'xiàn àixīn',vn:'góp tấm lòng (thiện nguyện)'},
     {zh:'充满爱心',py:'chōngmǎn àixīn',vn:'tràn đầy yêu thương'},
     {zh:'爱心活动',py:'àixīn huódòng',vn:'hoạt động thiện nguyện'}
   ],
   patterns:[
     {s:'很有爱心 (✗ 很爱心)', m:'Rất giàu lòng yêu thương — 爱心 là danh từ, cần 有'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô giáo chúng tôi không những giỏi chuyên môn mà cũng rất giàu lòng yêu thương.',answer:'我们老师不仅业务好，也很有爱心。',answerPy:'Wǒmen lǎoshī bùjǐn yèwù hǎo, yě hěn yǒu àixīn.',
      note:'不仅……也……; 很有 + danh từ.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Món quà này được làm bằng tấm lòng của các bạn nhỏ.',answer:'这份礼物是小朋友们用爱心做成的。',answerPy:'Zhè fèn lǐwù shì xiǎopéngyoumen yòng àixīn zuòchéng de.',
      note:'是……的 nhấn mạnh cách thức.',pair:'是……的'}
   ]},

  {n:29,zh:'分享',py:'fēnxiǎng',pos:'Động từ',vn:'chia sẻ',hv:'phân hưởng',em:'🤝',lesson:1,
   explain:['Cùng người khác hưởng niềm vui, thành quả, kinh nghiệm…: 分享快乐 (chia sẻ niềm vui), 分享经验 (chia sẻ kinh nghiệm).','Mẫu hay dùng: 和 / 跟 + ai + 分享 + N; 把 + N + 分享给 + ai. Trong bài: 快乐要分享.'],
   usage:'分享 + 快乐 / 经验 / 成果 / 照片; 和 + ai + 分享; 把 + N + 分享给 + ai.',
   collo:['分享快乐','分享经验','和朋友分享','分享给大家'],
   ex_zh:'老舍很有爱心，更懂得快乐要分享。',ex_py:'Lǎo Shě hěn yǒu àixīn, gèng dǒngde kuàilè yào fēnxiǎng.',ex_vn:'Lão Xá rất giàu lòng yêu thương, lại càng hiểu rằng niềm vui phải được sẻ chia.',
   exList:[
     {zh:'老舍很有爱心，更懂得快乐要分享。',py:'Lǎo Shě hěn yǒu àixīn, gèng dǒngde kuàilè yào fēnxiǎng.',vn:'Lão Xá rất giàu lòng yêu thương, lại càng hiểu rằng niềm vui phải được sẻ chia.'},
     {zh:'请你和大家分享一下你学汉语的经验。',py:'Qǐng nǐ hé dàjiā fēnxiǎng yíxià nǐ xué Hànyǔ de jīngyàn.',vn:'Mời bạn chia sẻ với mọi người kinh nghiệm học tiếng Trung của mình.'},
     {zh:'她把旅行的照片分享给了班里的同学。',py:'Tā bǎ lǚxíng de zhàopiàn fēnxiǎng gěile bān li de tóngxué.',vn:'Cô ấy chia sẻ ảnh chuyến du lịch cho các bạn trong lớp.'}
   ],
   colloFull:[
     {zh:'分享快乐',py:'fēnxiǎng kuàilè',vn:'chia sẻ niềm vui'},
     {zh:'分享经验',py:'fēnxiǎng jīngyàn',vn:'chia sẻ kinh nghiệm'},
     {zh:'和朋友分享',py:'hé péngyou fēnxiǎng',vn:'chia sẻ với bạn bè'},
     {zh:'分享给大家',py:'fēnxiǎng gěi dàjiā',vn:'chia sẻ cho mọi người'}
   ],
   patterns:[
     {s:'和 / 跟 + ai + 分享 + N', m:'Chia sẻ … với ai'},
     {s:'把 + N + 分享给 + ai', m:'Chia sẻ … cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi muốn chia sẻ tin vui này với bố mẹ ngay.',answer:'我想马上把这个好消息分享给爸爸妈妈。',answerPy:'Wǒ xiǎng mǎshàng bǎ zhège hǎo xiāoxi fēnxiǎng gěi bàba māma.',
      note:'把 + O + 分享给 + ai.',pair:'把'},
     {promptLang:'vi',prompt:'Niềm vui càng chia sẻ càng nhiều.',answer:'快乐越分享越多。',answerPy:'Kuàilè yuè fēnxiǎng yuè duō.',
      note:'越……越…….',pair:'越……越……'}
   ]},

  {n:30,zh:'昙花',py:'tánhuā',pos:'Danh từ',vn:'hoa quỳnh',hv:'đàm hoa',em:'🌼',lesson:1,
   explain:['Hoa quỳnh — loài hoa trắng, thơm, thường nở về đêm và tàn chỉ sau vài giờ, nên rất quý: 昙花开放 (hoa quỳnh nở).','Thành ngữ: 昙花一现 (hoa quỳnh sớm nở tối tàn) — ví sự việc, con người xuất hiện chốc lát rồi biến mất.'],
   usage:'昙花 + 开放 / 开了; 一盆昙花; 昙花一现.',
   collo:['昙花开放','一盆昙花','昙花一现','赏昙花'],
   ex_zh:'每到昙花开放的时候，他就约上几位朋友来家里赏花庆祝。',ex_py:'Měi dào tánhuā kāifàng de shíhou, tā jiù yuēshang jǐ wèi péngyou lái jiā li shǎng huā qìngzhù.',ex_vn:'Mỗi khi hoa quỳnh nở, ông lại hẹn mấy người bạn đến nhà ngắm hoa ăn mừng.',
   exList:[
     {zh:'每到昙花开放的时候，他就约上几位朋友来家里赏花庆祝。',py:'Měi dào tánhuā kāifàng de shíhou, tā jiù yuēshang jǐ wèi péngyou lái jiā li shǎng huā qìngzhù.',vn:'Mỗi khi hoa quỳnh nở, ông lại hẹn mấy người bạn đến nhà ngắm hoa ăn mừng.'},
     {zh:'昙花一般在晚上开，几个小时以后就谢了。',py:'Tánhuā yìbān zài wǎnshang kāi, jǐ ge xiǎoshí yǐhòu jiù xiè le.',vn:'Hoa quỳnh thường nở vào buổi tối, vài tiếng sau là tàn.'},
     {zh:'他的成功只是昙花一现，很快就被人忘记了。',py:'Tā de chénggōng zhǐ shì tánhuā yí xiàn, hěn kuài jiù bèi rén wàngjì le.',vn:'Thành công của anh ta chỉ sớm nở tối tàn, rất nhanh đã bị người ta quên lãng.'}
   ],
   colloFull:[
     {zh:'昙花开放',py:'tánhuā kāifàng',vn:'hoa quỳnh nở'},
     {zh:'一盆昙花',py:'yì pén tánhuā',vn:'một chậu hoa quỳnh'},
     {zh:'昙花一现',py:'tánhuā yí xiàn',vn:'sớm nở tối tàn'},
     {zh:'赏昙花',py:'shǎng tánhuā',vn:'ngắm hoa quỳnh'}
   ],
   patterns:[
     {s:'每到昙花开放的时候，……就……', m:'Mỗi khi hoa quỳnh nở thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi khi hoa quỳnh nở, cả nhà chúng tôi đều thức để ngắm.',answer:'每到昙花开的时候，我们全家都不睡觉，一起看花。',answerPy:'Měi dào tánhuā kāi de shíhou, wǒmen quánjiā dōu bú shuìjiào, yìqǐ kàn huā.',
      note:'每到……的时候，都……: mỗi khi … đều ….',pair:'每……都……'},
     {promptLang:'vi',prompt:'Chậu hoa quỳnh này là bà nội để lại cho tôi.',answer:'这盆昙花是奶奶留给我的。',answerPy:'Zhè pén tánhuā shì nǎinai liú gěi wǒ de.',
      note:'是……的 nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:31,zh:'庆祝',py:'qìngzhù',pos:'Động từ',vn:'chúc mừng, ăn mừng, kỷ niệm',hv:'khánh chúc',em:'🎉',lesson:1,
   explain:['Tổ chức hoạt động vui mừng nhân một sự kiện, ngày lễ: 庆祝生日, 庆祝国庆节, 庆祝胜利.','Làm định ngữ: 庆祝活动 (hoạt động kỷ niệm), 庆祝会. Khác 祝贺 (chúc mừng AI đó): 祝贺你! — không nói ✗ 庆祝你.'],
   usage:'庆祝 + 生日 / 节日 / 胜利 / 成功; 庆祝活动; 为 + ai / việc + 庆祝; 赏花庆祝.',
   collo:['庆祝生日','庆祝活动','庆祝胜利','庆祝国庆节'],
   ex_zh:'每到昙花开放的时候，他就约上几位朋友来家里赏花庆祝。',ex_py:'Měi dào tánhuā kāifàng de shíhou, tā jiù yuēshang jǐ wèi péngyou lái jiā li shǎng huā qìngzhù.',ex_vn:'Mỗi khi hoa quỳnh nở, ông lại hẹn mấy người bạn đến nhà ngắm hoa ăn mừng.',
   exList:[
     {zh:'每到昙花开放的时候，他就约上几位朋友来家里赏花庆祝。',py:'Měi dào tánhuā kāifàng de shíhou, tā jiù yuēshang jǐ wèi péngyou lái jiā li shǎng huā qìngzhù.',vn:'Mỗi khi hoa quỳnh nở, ông lại hẹn mấy người bạn đến nhà ngắm hoa ăn mừng.'},
     {zh:'国庆节期间，本市会举行大规模的庆祝活动。',py:'Guóqìng Jié qījiān, běn shì huì jǔxíng dà guīmó de qìngzhù huódòng.',vn:'Trong dịp Quốc khánh, thành phố sẽ tổ chức các hoạt động kỷ niệm quy mô lớn.'},
     {zh:'我们班赢了比赛，大家决定晚上去吃火锅庆祝一下。',py:'Wǒmen bān yíngle bǐsài, dàjiā juédìng wǎnshang qù chī huǒguō qìngzhù yíxià.',vn:'Lớp chúng tôi thắng cuộc thi, mọi người quyết định tối nay đi ăn lẩu ăn mừng.'}
   ],
   colloFull:[
     {zh:'庆祝生日',py:'qìngzhù shēngrì',vn:'mừng sinh nhật'},
     {zh:'庆祝活动',py:'qìngzhù huódòng',vn:'hoạt động kỷ niệm'},
     {zh:'庆祝胜利',py:'qìngzhù shènglì',vn:'ăn mừng chiến thắng'},
     {zh:'庆祝国庆节',py:'qìngzhù Guóqìng Jié',vn:'kỷ niệm Quốc khánh'}
   ],
   patterns:[
     {s:'庆祝 + sự kiện (✗ 庆祝 + người)', m:'Ăn mừng việc gì; chúc mừng người dùng 祝贺'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để mừng sinh nhật mẹ, tôi và bố đã chuẩn bị một bữa tối.',answer:'为了庆祝妈妈的生日，我和爸爸准备了一顿晚饭。',answerPy:'Wèile qìngzhù māma de shēngrì, wǒ hé bàba zhǔnbèile yí dùn wǎnfàn.',
      note:'为了 + mục đích; 一顿 đọc yí dùn.',pair:'为了……'},
     {promptLang:'vi',prompt:'Chúng tôi vừa hát vừa nhảy, ăn mừng chiến thắng.',answer:'我们一边唱歌一边跳舞，庆祝胜利。',answerPy:'Wǒmen yìbiān chàng gē yìbiān tiàowǔ, qìngzhù shènglì.',
      note:'一边……一边…….',pair:'一边……一边……'}
   ]},

  {n:32,zh:'保留',py:'bǎoliú',pos:'Động từ',vn:'giữ lại, để lại, bảo lưu',hv:'bảo lưu',em:'📦',lesson:1,
   explain:['Giữ lại, không bỏ đi, không thay đổi: 保留传统 (giữ gìn truyền thống), 保留文件, 保留下来.','Còn có nghĩa "giữ lại chưa nói ra / chưa đồng ý": 保留意见 (bảo lưu ý kiến). 毫无保留 = không giữ lại chút nào, hết lòng — trong bài: 他会毫无保留地送给朋友们.'],
   usage:'保留 + 资格 / 意见 / 权利 / 传统 / 身份 / 文件 / 风俗; 保留下来 / 下去; 毫无保留地 + V.',
   collo:['保留意见','保留传统','保留下来','毫无保留'],
   ex_zh:'花分根了，一棵分为几棵，他会毫无保留地送给朋友们。',ex_py:'Huā fēn gēn le, yì kē fēnwéi jǐ kē, tā huì háo wú bǎoliú de sòng gěi péngyoumen.',ex_vn:'Hoa tách rễ, một cây chia thành mấy cây, ông sẽ tặng hết cho bạn bè, không giữ lại chút nào.',
   exList:[
     {zh:'花分根了，一棵分为几棵，他会毫无保留地送给朋友们。',py:'Huā fēn gēn le, yì kē fēnwéi jǐ kē, tā huì háo wú bǎoliú de sòng gěi péngyoumen.',vn:'Hoa tách rễ, một cây chia thành mấy cây, ông sẽ tặng hết cho bạn bè, không giữ lại chút nào.'},
     {zh:'对于他们这种做法，我保留自己的意见。',py:'Duìyú tāmen zhè zhǒng zuòfǎ, wǒ bǎoliú zìjǐ de yìjiàn.',vn:'Đối với cách làm này của họ, tôi bảo lưu ý kiến của mình.'},
     {zh:'这个村子还保留着很多古老的风俗。',py:'Zhège cūnzi hái bǎoliúzhe hěn duō gǔlǎo de fēngsú.',vn:'Ngôi làng này vẫn còn giữ lại nhiều phong tục cổ xưa.'}
   ],
   colloFull:[
     {zh:'保留意见',py:'bǎoliú yìjiàn',vn:'bảo lưu ý kiến'},
     {zh:'保留传统',py:'bǎoliú chuántǒng',vn:'giữ gìn truyền thống'},
     {zh:'保留下来',py:'bǎoliú xialai',vn:'giữ lại được'},
     {zh:'毫无保留',py:'háo wú bǎoliú',vn:'không giữ lại chút nào'},
     {zh:'保留资格',py:'bǎoliú zīgé',vn:'bảo lưu tư cách'}
   ],
   patterns:[
     {s:'保留 + 下来 / 下去', m:'Giữ lại (từ trước đến nay) / tiếp tục giữ'},
     {s:'毫无保留地 + V', m:'Làm gì hết lòng, không giữ lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Những ngôi nhà cổ này đã được giữ lại từ hơn một trăm năm trước.',answer:'这些老房子是从一百多年前保留下来的。',answerPy:'Zhèxiē lǎo fángzi shì cóng yìbǎi duō nián qián bǎoliú xialai de.',
      note:'是……的; bổ ngữ xu hướng 下来 (từ quá khứ đến nay).',pair:'是……的'},
     {promptLang:'vi',prompt:'Thầy giáo truyền lại hết kinh nghiệm của mình cho học sinh, không giữ lại chút nào.',answer:'老师把自己的经验毫无保留地教给了学生。',answerPy:'Lǎoshī bǎ zìjǐ de jīngyàn háo wú bǎoliú de jiāo gěile xuésheng.',
      note:'把 + O + 毫无保留地 + V + 给 + ai.',pair:'把'}
   ]},

  {n:33,zh:'菊花',py:'júhuā',pos:'Danh từ',vn:'hoa cúc, cây hoa cúc',hv:'cúc hoa',em:'🌼',lesson:1,
   explain:['Hoa cúc — loài hoa nở vào mùa thu, nhiều màu; người Trung Quốc xưa coi là biểu tượng của sự thanh cao.','Còn dùng làm trà: 菊花茶 (trà hoa cúc). Lượng từ: 棵 (cây), 朵 (bông), 盆 (chậu).'],
   usage:'一棵 / 一盆 / 一朵 + 菊花; 菊花茶; 菊花开了; 种菊花.',
   collo:['一盆菊花','菊花茶','菊花开了','种菊花'],
   ex_zh:'邻居家的墙倒了，菊花被砸死了一百多棵。',ex_py:'Línjū jiā de qiáng dǎo le, júhuā bèi zásǐle yìbǎi duō kē.',ex_vn:'Bức tường nhà hàng xóm đổ, hơn một trăm cây hoa cúc bị đè chết.',
   exList:[
     {zh:'邻居家的墙倒了，菊花被砸死了一百多棵。',py:'Línjū jiā de qiáng dǎo le, júhuā bèi zásǐle yìbǎi duō kē.',vn:'Bức tường nhà hàng xóm đổ, hơn một trăm cây hoa cúc bị đè chết.'},
     {zh:'秋天到了，公园里的菊花都开了。',py:'Qiūtiān dào le, gōngyuán li de júhuā dōu kāi le.',vn:'Mùa thu đến rồi, hoa cúc trong công viên đều đã nở.'},
     {zh:'天气热的时候，妈妈常常给我们泡菊花茶喝。',py:'Tiānqì rè de shíhou, māma chángcháng gěi wǒmen pào júhuāchá hē.',vn:'Lúc trời nóng, mẹ thường pha trà hoa cúc cho chúng tôi uống.'}
   ],
   colloFull:[
     {zh:'一盆菊花',py:'yì pén júhuā',vn:'một chậu hoa cúc'},
     {zh:'菊花茶',py:'júhuāchá',vn:'trà hoa cúc'},
     {zh:'菊花开了',py:'júhuā kāi le',vn:'hoa cúc nở rồi'},
     {zh:'种菊花',py:'zhòng júhuā',vn:'trồng hoa cúc'}
   ],
   patterns:[
     {s:'一棵 / 一盆 / 一朵 + 菊花', m:'Lượng từ đi với hoa cúc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoa cúc bà nội trồng bị mưa to làm gãy hết rồi.',answer:'奶奶种的菊花都被暴雨打断了。',answerPy:'Nǎinai zhòng de júhuā dōu bèi bàoyǔ dǎduàn le.',
      note:'Câu 被 + tác nhân (暴雨) + V + bổ ngữ kết quả.',pair:'被'},
     {promptLang:'vi',prompt:'Hoa cúc không những đẹp mà còn có thể pha trà.',answer:'菊花不仅好看，还能泡茶。',answerPy:'Júhuā bùjǐn hǎokàn, hái néng pào chá.',
      note:'不仅……还…….',pair:'不仅……也……'}
   ]},

  {n:34,zh:'砸',py:'zá',pos:'Động từ',vn:'đè nát, đập, nện; làm hỏng',hv:'tạp',em:'🔨',lesson:1,
   explain:['Vật nặng rơi xuống / đập mạnh vào làm vỡ, làm hỏng: 砸死 (đè chết), 砸坏 (đập hỏng), 砸碎 (đập vỡ), 被石头砸了.','Khẩu ngữ: làm hỏng việc, thất bại — 搞砸了 (làm hỏng bét), 考砸了 (thi hỏng).'],
   usage:'砸 + 死 / 坏 / 碎 / 伤; 被 + N + 砸 + bổ ngữ; 搞砸 / 考砸 / 演砸.',
   collo:['砸死','砸坏','被砸伤','搞砸了'],
   ex_zh:'一年夏天，下了暴雨，邻居家的墙倒了，菊花被砸死了一百多棵。',ex_py:'Yì nián xiàtiān, xiàle bàoyǔ, línjū jiā de qiáng dǎo le, júhuā bèi zásǐle yìbǎi duō kē.',ex_vn:'Một mùa hè nọ, trời mưa lớn, tường nhà hàng xóm đổ, hơn một trăm cây hoa cúc bị đè chết.',
   exList:[
     {zh:'一年夏天，下了暴雨，邻居家的墙倒了，菊花被砸死了一百多棵。',py:'Yì nián xiàtiān, xiàle bàoyǔ, línjū jiā de qiáng dǎo le, júhuā bèi zásǐle yìbǎi duō kē.',vn:'Một mùa hè nọ, trời mưa lớn, tường nhà hàng xóm đổ, hơn một trăm cây hoa cúc bị đè chết.'},
     {zh:'这次真是搞砸了！',py:'Zhè cì zhēn shì gǎozá le!',vn:'Lần này đúng là làm hỏng bét rồi!'},
     {zh:'树上掉下来一个苹果，正好砸在他的头上。',py:'Shù shang diào xialai yí ge píngguǒ, zhènghǎo zá zài tā de tóu shang.',vn:'Trên cây rơi xuống một quả táo, vừa hay đập trúng đầu anh ấy.'}
   ],
   colloFull:[
     {zh:'砸死',py:'zásǐ',vn:'đè chết'},
     {zh:'砸坏',py:'záhuài',vn:'đập hỏng'},
     {zh:'被砸伤',py:'bèi záshāng',vn:'bị đập bị thương'},
     {zh:'搞砸了',py:'gǎozá le',vn:'làm hỏng bét rồi'}
   ],
   patterns:[
     {s:'N + 被 + (tác nhân) + 砸 + 死 / 坏 / 伤', m:'Bị vật nặng đè / đập …'},
     {s:'V + 砸了 (搞砸 / 考砸)', m:'Làm hỏng, thất bại (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc xe đỗ dưới gốc cây bị cành cây rơi xuống đập hỏng rồi.',answer:'停在树下的车被掉下来的树枝砸坏了。',answerPy:'Tíng zài shù xià de chē bèi diào xialai de shùzhī záhuài le.',
      note:'Câu 被 + tác nhân + 砸坏.',pair:'被'},
     {promptLang:'vi',prompt:'Lần trước tôi thi hỏng, lần này tôi nhất định phải cố gắng.',answer:'上次我考砸了，这次我一定要努力。',answerPy:'Shàng cì wǒ kǎozá le, zhè cì wǒ yídìng yào nǔlì.',
      note:'考砸 (khẩu ngữ) = thi hỏng.',pair:'一定要'}
   ]},

  {n:35,zh:'悲伤',py:'bēishāng',pos:'Tính từ',vn:'đau khổ, buồn phiền, bi thương',hv:'bi thương',em:'😢',lesson:1,
   explain:['Sách in 悲(伤) bēi(shāng): dùng 悲 đơn lẻ trong văn viết, thành ngữ (有喜有悲 — có vui có buồn, 悲喜交加), còn dạng đầy đủ là 悲伤 (đau buồn, thương xót).','悲伤 mạnh hơn 难过 / 伤心, văn viết hơn: 悲伤的故事, 感到悲伤, 悲伤地哭了.'],
   usage:'感到悲伤; 悲伤的 + 故事 / 音乐 / 心情; 悲伤地 + V; 有喜有悲.',
   collo:['感到悲伤','悲伤的故事','有喜有悲','悲伤的心情'],
   ex_zh:'“有喜有悲，有笑有泪”，这是老舍对养花、对生活的体验。',ex_py:'“Yǒu xǐ yǒu bēi, yǒu xiào yǒu lèi”, zhè shì Lǎo Shě duì yǎng huā, duì shēnghuó de tǐyàn.',ex_vn:'“Có vui có buồn, có cười có nước mắt” — đó là trải nghiệm của Lão Xá về việc trồng hoa, về cuộc sống.',
   exList:[
     {zh:'“有喜有悲，有笑有泪”，这是老舍对养花、对生活的体验。',py:'“Yǒu xǐ yǒu bēi, yǒu xiào yǒu lèi”, zhè shì Lǎo Shě duì yǎng huā, duì shēnghuó de tǐyàn.',vn:'“Có vui có buồn, có cười có nước mắt” — đó là trải nghiệm của Lão Xá về việc trồng hoa, về cuộc sống.'},
     {zh:'生活总是有成功也有失败，有悲伤也有幸福，别这么灰心。',py:'Shēnghuó zǒngshì yǒu chénggōng yě yǒu shībài, yǒu bēishāng yě yǒu xìngfú, bié zhème huīxīn.',vn:'Cuộc sống lúc nào cũng có thành công và thất bại, có buồn đau và hạnh phúc, đừng nản lòng như thế.'},
     {zh:'听到这个悲伤的消息，大家都哭了。',py:'Tīngdào zhège bēishāng de xiāoxi, dàjiā dōu kū le.',vn:'Nghe tin buồn này, mọi người đều khóc.'}
   ],
   colloFull:[
     {zh:'感到悲伤',py:'gǎndào bēishāng',vn:'cảm thấy đau buồn'},
     {zh:'悲伤的故事',py:'bēishāng de gùshi',vn:'câu chuyện buồn'},
     {zh:'有喜有悲',py:'yǒu xǐ yǒu bēi',vn:'có vui có buồn'},
     {zh:'悲伤的心情',py:'bēishāng de xīnqíng',vn:'tâm trạng đau buồn'}
   ],
   patterns:[
     {s:'有 A 有 B (有喜有悲 / 有笑有泪)', m:'Có A có B — nêu hai mặt đối lập'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này buồn quá, đến bố tôi cũng khóc.',answer:'这部电影太悲伤了，连我爸爸都哭了。',answerPy:'Zhè bù diànyǐng tài bēishāng le, lián wǒ bàba dōu kū le.',
      note:'连……都…… nhấn mạnh.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy trong lòng rất đau buồn, nhưng cô ấy vẫn mỉm cười với mọi người.',answer:'虽然心里很悲伤，但是她还是对大家笑了笑。',answerPy:'Suīrán xīnli hěn bēishāng, dànshì tā háishi duì dàjiā xiàole xiào.',
      note:'虽然……但是……还是…….',pair:'虽然……但是……'}
   ]},

  {n:36,zh:'反正',py:'fǎnzhèng',pos:'Phó từ',vn:'dù sao, dù thế nào đi nữa (cũng)',hv:'phản chính',em:'🤷',lesson:1,
   explain:['Phó từ (注释 3): (1) dù tình huống khác nhau thế nào, kết quả vẫn không đổi — hay đi sau 不管 / 无论 hoặc sau câu dạng "A không A": 感谢我不感谢，反正我要感谢它们.','(2) Ngữ khí kiên quyết, khẳng định (dù sao thì …), hay nêu lý do: 算了，反正不是什么要紧事. Đứng trước chủ ngữ hoặc sau chủ ngữ đều được.'],
   usage:'不管 / 无论……，反正……; A 不 A，反正……; 反正 + lý do, (cho nên) ……; 反正我不去.',
   collo:['反正我不去','不管……反正……','反正没事','反正要……'],
   ex_zh:'我不知道花草们受我的照顾，感谢我不感谢，反正我要感谢它们。',ex_py:'Wǒ bù zhīdào huācǎomen shòu wǒ de zhàogù, gǎnxiè wǒ bù gǎnxiè, fǎnzhèng wǒ yào gǎnxiè tāmen.',ex_vn:'Tôi không biết hoa cỏ được tôi chăm sóc có cảm ơn tôi hay không, dù sao thì tôi cũng phải cảm ơn chúng.',
   exList:[
     {zh:'我不知道花草们受我的照顾，感谢我不感谢，反正我要感谢它们。',py:'Wǒ bù zhīdào huācǎomen shòu wǒ de zhàogù, gǎnxiè wǒ bù gǎnxiè, fǎnzhèng wǒ yào gǎnxiè tāmen.',vn:'Tôi không biết hoa cỏ được tôi chăm sóc có cảm ơn tôi hay không, dù sao thì tôi cũng phải cảm ơn chúng.'},
     {zh:'不管你们谁去，反正我不会去。',py:'Bùguǎn nǐmen shéi qù, fǎnzhèng wǒ bú huì qù.',vn:'Dù các cậu ai đi, dù sao tôi cũng sẽ không đi.'},
     {zh:'算了，反正不是什么要紧事，还是别打扰他们了。',py:'Suàn le, fǎnzhèng bú shì shénme yàojǐn shì, háishi bié dǎrǎo tāmen le.',vn:'Thôi, dù sao cũng chẳng phải việc gì gấp, đừng làm phiền họ nữa.'}
   ],
   colloFull:[
     {zh:'反正我不去',py:'fǎnzhèng wǒ bú qù',vn:'dù sao tôi cũng không đi'},
     {zh:'不管……反正……',py:'bùguǎn…… fǎnzhèng……',vn:'bất kể …, dù sao …'},
     {zh:'反正没事',py:'fǎnzhèng méi shì',vn:'đằng nào cũng rảnh'},
     {zh:'反正要……',py:'fǎnzhèng yào……',vn:'đằng nào cũng phải …'}
   ],
   patterns:[
     {s:'不管 / 无论……，反正……', m:'Dù … thế nào, dù sao cũng …'},
     {s:'反正 + lý do，……', m:'Đằng nào cũng …, (nên) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù trời có mưa hay không, dù sao tôi cũng phải đi học.',answer:'不管下不下雨，反正我都得去上学。',answerPy:'Bùguǎn xià bu xià yǔ, fǎnzhèng wǒ dōu děi qù shàngxué.',
      note:'不管……都……: ôn HSK 4; 反正 nhấn kết quả không đổi.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Đằng nào hôm nay cũng rảnh, chúng ta đi dạo phố đi.',answer:'反正今天没事，我们去逛街吧。',answerPy:'Fǎnzhèng jīntiān méi shì, wǒmen qù guàngjiē ba.',
      note:'反正 + lý do, đề nghị ở vế sau.',pair:'吧'}
   ]},

  {n:37,zh:'热爱',py:'rè\'ài',pos:'Động từ',vn:'yêu tha thiết, say mê',hv:'nhiệt ái',em:'💚',lesson:1,
   explain:['Yêu thương sâu sắc, nồng nhiệt (mức độ mạnh hơn 喜欢, 爱): 热爱生活, 热爱大自然, 热爱祖国, 热爱工作.','Còn làm danh từ: 对……的热爱 (tình yêu đối với …) — bài khoá: 老舍先生对大自然的热爱，对生活的热爱.'],
   usage:'热爱 + 生活 / 大自然 / 祖国 / 工作 / 和平; 对 + N + 的热爱.',
   collo:['热爱生活','热爱大自然','热爱祖国','对……的热爱'],
   ex_zh:'从中我们不难看出老舍先生对大自然的热爱，对生活的热爱。',ex_py:'Cóngzhōng wǒmen bù nán kànchū Lǎo Shě xiānsheng duì dà zìrán de rè\'ài, duì shēnghuó de rè\'ài.',ex_vn:'Qua đó chúng ta không khó nhận ra tình yêu của Lão Xá đối với thiên nhiên, đối với cuộc sống.',
   exList:[
     {zh:'从中我们不难看出老舍先生对大自然的热爱，对生活的热爱。',py:'Cóngzhōng wǒmen bù nán kànchū Lǎo Shě xiānsheng duì dà zìrán de rè\'ài, duì shēnghuó de rè\'ài.',vn:'Qua đó chúng ta không khó nhận ra tình yêu của Lão Xá đối với thiên nhiên, đối với cuộc sống.'},
     {zh:'老舍一生酷爱养花，是一个热爱生活、热爱大自然的人。',py:'Lǎo Shě yìshēng kù\'ài yǎng huā, shì yí ge rè\'ài shēnghuó, rè\'ài dà zìrán de rén.',vn:'Lão Xá cả đời mê trồng hoa, là một người yêu tha thiết cuộc sống và thiên nhiên.'},
     {zh:'他非常热爱自己的工作，从来不觉得累。',py:'Tā fēicháng rè\'ài zìjǐ de gōngzuò, cónglái bù juéde lèi.',vn:'Anh ấy rất say mê công việc của mình, chưa bao giờ thấy mệt.'}
   ],
   colloFull:[
     {zh:'热爱生活',py:'rè\'ài shēnghuó',vn:'yêu cuộc sống'},
     {zh:'热爱大自然',py:'rè\'ài dà zìrán',vn:'yêu thiên nhiên'},
     {zh:'热爱祖国',py:'rè\'ài zǔguó',vn:'yêu Tổ quốc'},
     {zh:'对……的热爱',py:'duì…… de rè\'ài',vn:'tình yêu đối với …'}
   ],
   patterns:[
     {s:'热爱 + N (trừu tượng / lớn lao)', m:'Yêu tha thiết …'},
     {s:'对 + N + 的热爱', m:'Tình yêu đối với … (danh từ hoá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người yêu cuộc sống thì dù gặp khó khăn cũng không nản lòng.',answer:'热爱生活的人，即使遇到困难也不会灰心。',answerPy:'Rè\'ài shēnghuó de rén, jíshǐ yùdào kùnnan yě bú huì huīxīn.',
      note:'即使……也……: dù … cũng ….',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Tình yêu của ông ấy với âm nhạc càng ngày càng sâu đậm.',answer:'他对音乐的热爱越来越深了。',answerPy:'Tā duì yīnyuè de rè\'ài yuè lái yuè shēn le.',
      note:'对……的热爱 làm chủ ngữ; 越来越.',pair:'越来越……'}
   ]},

  {n:38,zh:'老舍',py:'Lǎo Shě',pos:'Danh từ riêng',vn:'Lão Xá (1899–1966), bút danh của nhà văn Trung Quốc Thư Khánh Xuân',hv:'Lão Xá',em:'✍️',lesson:1,
   explain:['Nhà văn hiện đại nổi tiếng của Trung Quốc, người Bắc Kinh, được gọi là "bậc thầy ngôn ngữ" (语言大师). Tác phẩm tiêu biểu: 《骆驼祥子》 (Tường Lạc Đà), 《茶馆》 (Quán trà), 《四世同堂》 (Tứ thế đồng đường).','Ông cả đời mê trồng hoa và viết bài tản văn 《养花》 — nguồn của bài khoá này. Ở Bắc Kinh có 老舍茶馆 (quán trà Lão Xá) mang tên ông (bài nghe số 8).'],
   usage:'老舍先生; 老舍的作品 / 文章; 老舍茶馆.',
   collo:['老舍先生','老舍的作品','老舍茶馆'],
   ex_zh:'作家老舍先生爱花，他养的花很多。',ex_py:'Zuòjiā Lǎo Shě xiānsheng ài huā, tā yǎng de huā hěn duō.',ex_vn:'Nhà văn Lão Xá yêu hoa, ông trồng rất nhiều hoa.',
   exList:[
     {zh:'作家老舍先生爱花，他养的花很多。',py:'Zuòjiā Lǎo Shě xiānsheng ài huā, tā yǎng de huā hěn duō.',vn:'Nhà văn Lão Xá yêu hoa, ông trồng rất nhiều hoa.'},
     {zh:'老舍，中国现代著名作家、杰出的语言大师，北京人。',py:'Lǎo Shě, Zhōngguó xiàndài zhùmíng zuòjiā, jiéchū de yǔyán dàshī, Běijīngrén.',vn:'Lão Xá — nhà văn hiện đại nổi tiếng của Trung Quốc, bậc thầy ngôn ngữ kiệt xuất, người Bắc Kinh.'},
     {zh:'北京有个老舍茶馆，是以他的名字命名的。',py:'Běijīng yǒu ge Lǎo Shě Cháguǎn, shì yǐ tā de míngzi mìngmíng de.',vn:'Ở Bắc Kinh có quán trà Lão Xá, được đặt theo tên ông.'}
   ],
   colloFull:[
     {zh:'老舍先生',py:'Lǎo Shě xiānsheng',vn:'ông Lão Xá'},
     {zh:'老舍的作品',py:'Lǎo Shě de zuòpǐn',vn:'tác phẩm của Lão Xá'},
     {zh:'老舍茶馆',py:'Lǎo Shě Cháguǎn',vn:'quán trà Lão Xá'}
   ],
   patterns:[{s:'老舍 + 先生', m:'Cách gọi tôn trọng nhà văn: ông Lão Xá'}],
   checkList:[
     {promptLang:'vi',prompt:'Bài văn này là do Lão Xá viết.',answer:'这篇文章是老舍写的。',answerPy:'Zhè piān wénzhāng shì Lǎo Shě xiě de.',
      note:'是……的 nhấn mạnh tác giả.',pair:'是……的'},
     {promptLang:'vi',prompt:'Lão Xá không những thích viết văn, mà cũng rất thích trồng hoa.',answer:'老舍不仅喜欢写作，也很喜欢养花。',answerPy:'Lǎo Shě bùjǐn xǐhuan xiězuò, yě hěn xǐhuan yǎng huā.',
      note:'不仅……也…….',pair:'不仅……也……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — 老舍与养花 (799字), tr. 156–158
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 老舍与养花',
  preQuiz:[
    {q:'老舍先生养的花多不多？',opts:['很多，满满摆了一院子','不多，只有几盆','一盆也没有'],ans:0},
    {q:'老舍先生养什么样的花？',opts:['南方的名花','好种易活、自己会奋斗的花草','又贵又难养的花'],ans:1},
    {q:'老舍为什么不养南方的名花？',opts:['因为他不喜欢南方的花','因为南方的花太贵了','因为北京的气候不太适合，养活不容易'],ans:2},
    {q:'老舍把养花当作什么？',opts:['一种生活乐趣','一种工作','一种负担'],ans:0},
    {q:'老舍工作的时候，经常做什么？',opts:['一直写，从不休息','写几十个字，就到院中去看看花','把花搬到屋里来'],ans:1},
    {q:'养花对老舍的写作有什么好处？',opts:['让他的书卖得更好','让他认识了很多作家','脑力和体力很好地结合，身心得到放松'],ans:2},
    {q:'赶上狂风暴雨的时候，老舍怎么办？',opts:['劳驾全家人抢救花草','自己一个人把花搬进屋','不管花草'],ans:0},
    {q:'老舍对搬花这件辛苦的事是什么态度？',opts:['常常抱怨','并不抱怨，认为有付出才有回报','不再养花了'],ans:1},
    {q:'关于养花的经验，下列哪项正确？',opts:['所有的花都要多浇水','所有的花都要放在太阳地里','喜欢潮湿环境的花别放在太阳地里'],ans:2},
    {q:'每到昙花开放的时候，老舍会做什么？',opts:['约几位朋友来家里赏花庆祝','把昙花卖掉','一个人看花'],ans:0},
    {q:'花分根以后，老舍怎么做？',opts:['自己留着','毫无保留地送给朋友们','卖给邻居'],ans:1},
    {q:'老舍为什么有一段时间看不到笑容？',opts:['他的书没写完','朋友拿走了他的花','暴雨中菊花被砸死了一百多棵'],ans:2},
    {q:'从这篇课文中，我们可以看出老舍是一个什么样的人？',opts:['热爱大自然、热爱生活的人','只喜欢工作的人','不懂养花的人'],ans:0}
  ],
  lines:[
    {sp:0,zh:'作家老舍先生爱花，他养的花很多，满满摆了一院子。可除非是那些好种易活、自己会奋斗的花草，否则他是不养的。因为他知道北京的气候对养花来说，不算很好，想把南方的名花养活并非易事。',
     py:'Zuòjiā Lǎo Shě xiānsheng ài huā, tā yǎng de huā hěn duō, mǎnmǎn bǎile yí yuànzi. Kě chúfēi shì nàxiē hǎo zhòng yì huó, zìjǐ huì fèndòu de huācǎo, fǒuzé tā shì bù yǎng de. Yīnwèi tā zhīdào Běijīng de qìhòu duì yǎng huā lái shuō, bú suàn hěn hǎo, xiǎng bǎ nánfāng de mínghuā yǎnghuó bìngfēi yì shì.',
     vn:'Nhà văn Lão Xá yêu hoa, ông trồng rất nhiều hoa, bày kín cả một sân. Nhưng trừ phi là những loài hoa cỏ dễ trồng dễ sống, tự biết "phấn đấu", còn không thì ông không trồng. Bởi ông biết khí hậu Bắc Kinh đối với việc trồng hoa không được tốt lắm, muốn trồng cho sống được những loài hoa nổi tiếng của phương Nam chẳng phải chuyện dễ.'},
    {sp:0,zh:'老舍把养花当作一种生活乐趣。他不在乎花开得大小好坏，只要开花，他就高兴。每天老舍像好朋友似的照管着花草。工作的时候，经常写几十个字，就到院中去转转，瞧瞧这棵，看看那朵，有时拿起剪刀给它们剪剪枝，有时蹲下捡几块小石头放在花盆里做点儿装饰，然后回到屋中再写一会儿，然后再出去，就这样脑力和体力很好地结合，身心也得到放松。',
     py:'Lǎo Shě bǎ yǎng huā dàngzuò yì zhǒng shēnghuó lèqù. Tā bú zàihu huā kāi de dàxiǎo hǎohuài, zhǐyào kāi huā, tā jiù gāoxìng. Měi tiān Lǎo Shě xiàng hǎo péngyou shìde zhàoguǎnzhe huācǎo. Gōngzuò de shíhou, jīngcháng xiě jǐ shí ge zì, jiù dào yuàn zhōng qù zhuànzhuan, qiáoqiao zhè kē, kànkan nà duǒ, yǒushí náqǐ jiǎndāo gěi tāmen jiǎnjian zhī, yǒushí dūnxia jiǎn jǐ kuài xiǎo shítou fàng zài huāpén li zuò diǎnr zhuāngshì, ránhòu huídào wū zhōng zài xiě yíhuìr, ránhòu zài chūqu, jiù zhèyàng nǎolì hé tǐlì hěn hǎo de jiéhé, shēnxīn yě dédào fàngsōng.',
     vn:'Lão Xá coi việc trồng hoa là một thú vui trong cuộc sống. Ông không để tâm hoa nở to hay nhỏ, đẹp hay xấu, chỉ cần hoa nở là ông vui. Ngày nào Lão Xá cũng chăm nom hoa cỏ như với bạn thân. Lúc làm việc, ông thường viết được vài chục chữ lại ra sân đi dạo một vòng, ngắm cây này, xem bông kia, có lúc cầm kéo lên tỉa cành cho chúng, có lúc ngồi xổm xuống nhặt mấy viên đá nhỏ đặt vào chậu hoa để trang trí chút ít, rồi trở vào nhà viết thêm một lúc, rồi lại ra ngoài; cứ như thế trí lực và thể lực được kết hợp rất tốt, thân tâm cũng được thư giãn.'},
    {sp:0,zh:'写作是件艰苦的工作，养花也是如此。有时赶上狂风暴雨，情况紧急，他就得劳驾全家人抢救花草。几百盆花，要很快地抢到屋里去，累得腰酸腿疼，热汗直流。第二天，天气好了，又得一盆盆地搬出去。可是，他并不抱怨，在他看来，任何事都要有付出，不然怎么会有回报？这是生活的真理。',
     py:'Xiězuò shì jiàn jiānkǔ de gōngzuò, yǎng huā yě shì rúcǐ. Yǒushí gǎnshang kuángfēng bàoyǔ, qíngkuàng jǐnjí, tā jiù děi láojià quánjiā rén qiǎngjiù huācǎo. Jǐ bǎi pén huā, yào hěn kuài de qiǎngdào wū li qu, lèi de yāo suān tuǐ téng, rè hàn zhí liú. Dì-èr tiān, tiānqì hǎo le, yòu děi yì pénpén de bān chuqu. Kěshì, tā bìng bú bàoyuàn, zài tā kànlái, rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào? Zhè shì shēnghuó de zhēnlǐ.',
     vn:'Viết văn là một công việc vất vả, trồng hoa cũng vậy. Có lúc gặp phải mưa to gió lớn, tình hình khẩn cấp, ông phải phiền cả nhà ra cứu hoa cỏ. Mấy trăm chậu hoa phải nhanh chóng khẩn trương đưa vào nhà, mệt đến lưng mỏi chân đau, mồ hôi chảy ròng ròng. Hôm sau trời đẹp, lại phải bê từng chậu từng chậu ra ngoài. Thế nhưng ông không hề than phiền; theo ông, việc gì cũng phải bỏ công sức ra, nếu không thì sao có được đền đáp? Đó là chân lý của cuộc sống.'},
    {sp:0,zh:'一来二去，他慢慢地总结出一些养花的经验：有的花喜干，就别多浇水；有的花喜欢潮湿的环境，就别放在太阳地里。给花换盆剪枝施肥的活儿他越做越熟练，花生病长虫他也知道如何应付了。看着院子里那鲜艳的花朵，老舍自豪地说，“不是乱吹，这就是知识啊！多得些知识，一定不是坏事。”',
     py:'Yì lái èr qù, tā mànmàn de zǒngjié chū yìxiē yǎng huā de jīngyàn: yǒu de huā xǐ gān, jiù bié duō jiāo shuǐ; yǒu de huā xǐhuan cháoshī de huánjìng, jiù bié fàng zài tàiyáng dì li. Gěi huā huàn pén jiǎn zhī shī féi de huór tā yuè zuò yuè shúliàn, huā shēngbìng zhǎng chóng tā yě zhīdào rúhé yìngfu le. Kànzhe yuànzi li nà xiānyàn de huāduǒ, Lǎo Shě zìháo de shuō, “Bú shì luàn chuī, zhè jiù shì zhīshi a! Duō dé xiē zhīshi, yídìng bú shì huàishì.”',
     vn:'Qua lại nhiều lần, ông dần dần đúc kết được một số kinh nghiệm trồng hoa: có loài hoa ưa khô thì đừng tưới nhiều nước; có loài ưa môi trường ẩm ướt thì đừng để ngoài nắng. Những việc thay chậu, tỉa cành, bón phân cho hoa ông càng làm càng thuần thục; hoa bị bệnh, có sâu ông cũng biết cách xử trí. Nhìn những bông hoa rực rỡ trong sân, Lão Xá tự hào nói: “Không phải khoác lác đâu, đây chính là tri thức đấy! Có thêm chút tri thức nhất định không phải chuyện xấu.”'},
    {sp:0,zh:'老舍很有爱心，更懂得快乐要分享。每到昙花开放的时候，他就约上几位朋友来家里赏花庆祝。花分根了，一棵分为几棵，他会毫无保留地送给朋友们。看着友人高兴地拿走自己的劳动果实，老舍心里十分欢喜。有一次，送牛奶的小伙子进门就夸“好香”！这让老舍先生感到格外高兴。',
     py:'Lǎo Shě hěn yǒu àixīn, gèng dǒngde kuàilè yào fēnxiǎng. Měi dào tánhuā kāifàng de shíhou, tā jiù yuēshang jǐ wèi péngyou lái jiā li shǎng huā qìngzhù. Huā fēn gēn le, yì kē fēnwéi jǐ kē, tā huì háo wú bǎoliú de sòng gěi péngyoumen. Kànzhe yǒurén gāoxìng de názǒu zìjǐ de láodòng guǒshí, Lǎo Shě xīnli shífēn huānxǐ. Yǒu yí cì, sòng niúnǎi de xiǎohuǒzi jìn mén jiù kuā “hǎo xiāng”! Zhè ràng Lǎo Shě xiānsheng gǎndào géwài gāoxìng.',
     vn:'Lão Xá rất giàu lòng yêu thương, lại càng hiểu rằng niềm vui phải được sẻ chia. Mỗi khi hoa quỳnh nở, ông lại hẹn mấy người bạn đến nhà ngắm hoa ăn mừng. Hoa tách rễ, một cây chia thành mấy cây, ông sẽ tặng hết cho bạn bè, không giữ lại chút nào. Nhìn bạn bè vui vẻ mang đi thành quả lao động của mình, trong lòng Lão Xá vô cùng vui sướng. Có một lần, cậu thanh niên giao sữa vừa bước vào cửa đã khen “thơm quá”! Điều đó khiến ông Lão Xá cảm thấy đặc biệt vui.'},
    {sp:0,zh:'当然，也有伤心的时候。一年夏天，下了暴雨，邻居家的墙倒了，菊花被砸死了一百多棵，这下可把老舍难受坏了，一连几天人们都看不到他脸上的笑容。',
     py:'Dāngrán, yě yǒu shāngxīn de shíhou. Yì nián xiàtiān, xiàle bàoyǔ, línjū jiā de qiáng dǎo le, júhuā bèi zásǐle yìbǎi duō kē, zhè xià kě bǎ Lǎo Shě nánshòu huài le, yìlián jǐ tiān rénmen dōu kàn bu dào tā liǎn shang de xiàoróng.',
     vn:'Tất nhiên, cũng có lúc đau lòng. Một mùa hè nọ, trời đổ mưa lớn, bức tường nhà hàng xóm đổ sập, hơn một trăm cây hoa cúc bị đè chết; lần này thì Lão Xá buồn khổ vô cùng, liền mấy ngày người ta không thấy nụ cười trên mặt ông.'},
    {sp:0,zh:'“有喜有悲，有笑有泪”，这是老舍对养花、对生活的体验。“我不知道花草们受我的照顾，感谢我不感谢，反正我要感谢它们。”老舍在自己的文章中这样写道。从中我们不难看出老舍先生对大自然的热爱，对生活的热爱。',
     py:'“Yǒu xǐ yǒu bēi, yǒu xiào yǒu lèi”, zhè shì Lǎo Shě duì yǎng huā, duì shēnghuó de tǐyàn. “Wǒ bù zhīdào huācǎomen shòu wǒ de zhàogù, gǎnxiè wǒ bù gǎnxiè, fǎnzhèng wǒ yào gǎnxiè tāmen.” Lǎo Shě zài zìjǐ de wénzhāng zhōng zhèyàng xiědào. Cóngzhōng wǒmen bù nán kànchū Lǎo Shě xiānsheng duì dà zìrán de rè\'ài, duì shēnghuó de rè\'ài.',
     vn:'“Có vui có buồn, có cười có nước mắt” — đó là trải nghiệm của Lão Xá về việc trồng hoa, về cuộc sống. “Tôi không biết hoa cỏ được tôi chăm sóc có cảm ơn tôi hay không, dù sao thì tôi cũng phải cảm ơn chúng.” Lão Xá đã viết như vậy trong bài văn của mình. Qua đó, chúng ta không khó nhận ra tình yêu của ông đối với thiên nhiên, đối với cuộc sống.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 应付/处理 lấy từ sách (tr. 160–161)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'应付 — 处理',
   same:'Đều là động từ, đều có nghĩa "dùng biện pháp, cách thức để đối phó với người hoặc việc".',
   sameEx:{zh:'依我看，以他现有的经验应付／处理不了目前的工作。',vn:'Theo tôi, với kinh nghiệm hiện có, anh ấy không đảm đương nổi công việc hiện tại.'},
   items:[
     {word:'应付',points:[
       'Nhấn mạnh dùng cách thích hợp để ĐỐI PHÓ, xoay xở với người / việc: 应付他们, 应付考试, 应付得了 / 应付不了.',
       'Còn có nghĩa XẤU: làm qua loa, chiếu lệ cho xong — 完全是在应付父母和老师.',
       'Không có nghĩa sắp xếp đồ vật hay bán hạ giá.'
     ],ex:[{zh:'他们会想方设法说服你，你准备好怎么应付他们了吗？',vn:'Họ sẽ tìm đủ mọi cách thuyết phục bạn, bạn đã chuẩn bị cách đối phó với họ chưa?'},
          {zh:'小林学习不认真，完全是在应付父母和老师。',vn:'Tiểu Lâm học không nghiêm túc, hoàn toàn là làm chiếu lệ cho bố mẹ và thầy cô.'}]},
     {word:'处理',points:[
       'Nhấn mạnh GIẢI QUYẾT vấn đề: 处理问题, 处理好关系.',
       'Còn có nghĩa sắp xếp, xử lý đồ vật (vứt, bán, cho): 快把旧纸箱处理了吧.',
       'Còn có nghĩa BÁN HẠ GIÁ: 减价处理, 处理品 (hàng thanh lý).'
     ],ex:[{zh:'严重的环境污染使人们深思该如何处理好人与自然的关系。',vn:'Ô nhiễm môi trường nghiêm trọng khiến con người suy ngẫm nên xử lý tốt mối quan hệ giữa con người và tự nhiên thế nào.'},
          {zh:'这批过季的衣服尽快减价处理吧。',vn:'Lô quần áo trái mùa này nhanh chóng giảm giá thanh lý đi.'}]}
   ],
   quiz:[
     {sentence:'一个星期的迎来送往，她已经有点儿＿＿不了了。',options:['应付','处理'],answer:0,
      why:'Đón khách tiễn khách cả tuần, không "đối phó / kham" nổi nữa → 应付 (câu mẫu của sách).'},
     {sentence:'洗衣机的包装纸箱，既占地方又没什么用，快＿＿了吧。',options:['应付','处理'],answer:1,
      why:'Sắp xếp, dọn bỏ đồ vật → chỉ 处理.'},
     {sentence:'小林学习不认真，完全是在＿＿父母和老师。',options:['应付','处理'],answer:0,
      why:'Làm qua loa, chiếu lệ → chỉ 应付.'},
     {sentence:'这批过季的衣服尽快减价＿＿吧。',options:['应付','处理'],answer:1,
      why:'Bán hạ giá → 减价处理; 应付 không có nghĩa này.'}
   ],
   sgk:{
     chung:{t:'都是动词，都有对人、对事采取措施、办法的意思。',vn:'Đều là động từ, đều có nghĩa dùng biện pháp, cách thức để đối phó với người, với việc.',vd:'依我看，以他现有的经验应付／处理不了目前的工作。',vdVn:'Theo tôi, với kinh nghiệm hiện có, anh ấy không đảm đương nổi công việc hiện tại.'},
     khac:[
       {a:{t:'侧重表示采取适当的办法来对待人或事。',vn:'Nhấn mạnh dùng cách thích hợp để đối đãi với người hoặc việc.',vd:'他们会想方设法说服你，你准备好怎么应付他们了吗？',vdVn:'Họ sẽ tìm đủ mọi cách thuyết phục bạn, bạn đã chuẩn bị cách đối phó với họ chưa?'},
        b:{t:'侧重强调解决问题。',vn:'Nhấn mạnh việc giải quyết vấn đề.',vd:'严重的环境污染使人们深思该如何处理好人与自然的关系。',vdVn:'Ô nhiễm môi trường nghiêm trọng khiến con người suy ngẫm nên xử lý tốt quan hệ giữa con người và tự nhiên thế nào.'}},
       {a:{t:'还有办事不认真、不负责，只求表面过得去的意思。',vn:'Còn có nghĩa làm việc không nghiêm túc, thiếu trách nhiệm, chỉ cầu bề ngoài tạm được.',vd:'小林学习不认真，完全是在应付父母和老师。',vdVn:'Tiểu Lâm học không nghiêm túc, hoàn toàn là làm chiếu lệ cho bố mẹ và thầy cô.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}},
       {a:{t:'没有这个意思。',vn:'Không có nghĩa này.'},
        b:{t:'还有安排、处置事物的意思。',vn:'Còn có nghĩa sắp xếp, xử trí đồ vật.',vd:'洗衣机的包装纸箱，既占地方又没什么用，快处理了吧。',vdVn:'Thùng giấy đựng máy giặt vừa chiếm chỗ lại chẳng dùng làm gì, mau dọn đi thôi.'}},
       {a:{t:'没有这个意思。',vn:'Không có nghĩa này.'},
        b:{t:'还有减价出售的意思。',vn:'Còn có nghĩa giảm giá bán ra (thanh lý).',vd:'这批过季的衣服尽快减价处理吧。',vdVn:'Lô quần áo trái mùa này nhanh chóng giảm giá thanh lý đi.'}}
     ],
     lamThu:[
       {s:'一个星期的迎来送往，她已经有点儿＿＿不了了。',dap:[true,false],mau:true,
        giai:'Không kham nổi việc tiếp khách → 应付不了 (câu mẫu của sách).'},
       {s:'他实在说不出什么，只好随口说：“不怎么习惯。”总算＿＿过去了。',dap:[true,false],
        giai:'Nói bừa một câu cho qua chuyện → 应付过去 (nghĩa "chỉ cầu bề ngoài tạm được"). 处理 không đi với 过去 theo nghĩa này.'},
       {s:'放心吧，海关手续的事我一个人能＿＿。',dap:[true,true],
        giai:'Nghĩa chung "lo liệu, giải quyết được việc" → cả 应付 (xoay xở được) và 处理 (giải quyết được) đều dùng được.'},
       {s:'我非常尊敬他，但同时也觉得他是个不好＿＿的人。',dap:[true,false],
        giai:'Tân ngữ là NGƯỜI, "người khó đối phó / khó chiều" → 不好应付的人. 处理 + người lại mang nghĩa "xử phạt".'}
     ]
   }},

  {pair:'自豪 — 骄傲',
   same:'Đều là tính từ, đều có nghĩa "tự hào, hãnh diện" vì bản thân hoặc người / tập thể có liên quan với mình: 为……感到自豪／骄傲.',
   sameEx:{zh:'妹妹考上了大学，全家人都为她感到自豪／骄傲。',vn:'Em gái thi đỗ đại học, cả nhà đều tự hào về em ấy.'},
   items:[
     {word:'自豪',points:[
       'Chỉ mang nghĩa TÍCH CỰC: tự hào, hãnh diện.',
       'Hay dùng trong văn viết, lời phát biểu: 自豪地说, 自豪感 (niềm tự hào).',
       'Không dùng để phê bình người khác.'
     ],ex:[{zh:'看着院子里那鲜艳的花朵，老舍自豪地说……',vn:'Nhìn những bông hoa rực rỡ trong sân, Lão Xá tự hào nói …'},
          {zh:'我们的产品改善了许多人的生活，这是我们非常自豪的事情。',vn:'Sản phẩm của chúng tôi cải thiện cuộc sống của rất nhiều người, đó là điều chúng tôi rất tự hào.'}]},
     {word:'骄傲',points:[
       'Ngoài nghĩa tốt (tự hào), còn có nghĩa XẤU: kiêu ngạo, tự cao, coi thường người khác.',
       'Làm danh từ được: 你是我们的骄傲 (bạn là niềm tự hào của chúng tôi).',
       'Lời khuyên hay gặp: 别骄傲 / 不要骄傲 (đừng kiêu ngạo).'
     ],ex:[{zh:'一连取得两场胜利，李岩骄傲得不得了，以为冠军非他莫属了。',vn:'Thắng liền hai trận, Lý Nham kiêu ngạo vô cùng, tưởng chức vô địch chắc chắn thuộc về mình.'},
          {zh:'你考得很好，但是千万不要骄傲。',vn:'Bạn thi rất tốt, nhưng tuyệt đối đừng kiêu ngạo.'}]}
   ],
   quiz:[
     {sentence:'一连取得两场胜利，李岩＿＿得不得了，以为冠军非他莫属了。',options:['自豪','骄傲'],answer:1,
      why:'Nghĩa XẤU "kiêu ngạo" (tưởng chắc vô địch) → chỉ 骄傲 (bài tập 2 của sách).'},
     {sentence:'看着院子里那鲜艳的花朵，老舍＿＿地说：“这就是知识啊！”',options:['自豪','骄傲'],answer:0,both:true,
      why:'Nghĩa tốt, tự hào về thành quả → cả hai đều được; câu của bài khoá dùng 自豪.'},
     {sentence:'你取得了好成绩，但是千万不要＿＿。',options:['自豪','骄傲'],answer:1,
      why:'Lời khuyên "đừng kiêu ngạo" → 骄傲. Không ai khuyên "đừng tự hào".'},
     {sentence:'你是我们全家的＿＿！',options:['自豪','骄傲'],answer:1,
      why:'Làm danh từ "niềm tự hào" sau 的 → 骄傲 (自豪 phải nói 自豪感).'}
   ]},

  {pair:'保留 — 保存',
   same:'Đều là động từ, đều có nghĩa "giữ lại, không để mất đi".',
   sameEx:{zh:'这些老照片一直被保留／保存到现在。',vn:'Những tấm ảnh cũ này vẫn được giữ lại cho đến bây giờ.'},
   items:[
     {word:'保留',points:[
       'Nhấn mạnh giữ NGUYÊN như cũ, không thay đổi, không bỏ đi: 保留传统, 保留风俗, 保留下来.',
       'Còn có nghĩa "tạm giữ lại, chưa nói ra / chưa chấp nhận": 保留意见, 保留观点, 保留资格.',
       'Cụm cố định: 毫无保留 (hết lòng, không giữ lại chút nào).'
     ],ex:[{zh:'对于他们这种做法，我保留自己的意见。',vn:'Đối với cách làm này của họ, tôi bảo lưu ý kiến của mình.'},
          {zh:'他会毫无保留地送给朋友们。',vn:'Ông sẽ tặng hết cho bạn bè, không giữ lại chút nào.'}]},
     {word:'保存',points:[
       'Nhấn mạnh CẤT GIỮ, bảo quản cho khỏi hỏng, khỏi mất: 保存食物, 保存文件 (lưu tệp), 保存得很好.',
       'Dùng cho vật cụ thể, dữ liệu; hay đi với 在 + nơi: 保存在冰箱里.',
       'Không dùng với 意见, 观点.'
     ],ex:[{zh:'规模这么大，居然保存得这么好，真了不起！',vn:'Quy mô lớn như vậy mà vẫn được bảo tồn tốt đến thế, thật đáng nể!'},
          {zh:'写完作文别忘了保存文件。',vn:'Viết xong bài văn đừng quên lưu tệp.'}]}
   ],
   quiz:[
     {sentence:'对于他们这种做法，我＿＿自己的意见。',options:['保留','保存'],answer:0,
      why:'保留意见 = bảo lưu ý kiến (bài tập 2 của sách). 保存 không đi với 意见.'},
     {sentence:'牛奶打开以后要＿＿在冰箱里。',options:['保留','保存'],answer:1,
      why:'Bảo quản thực phẩm cho khỏi hỏng → 保存.'},
     {sentence:'这个村子还＿＿着很多古老的风俗。',options:['保留','保存'],answer:0,
      why:'Giữ nguyên phong tục, truyền thống → 保留风俗.'},
     {sentence:'电脑突然关机了，我还没来得及＿＿文件。',options:['保留','保存'],answer:1,
      why:'Lưu tệp trên máy tính → 保存文件.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'奋斗',hv:'phấn đấu',vn:'phấn đấu',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'结合',hv:'kết hợp',vn:'kết hợp',note:'Trùng khít.'},
    {zh:'紧急',hv:'khẩn cấp',vn:'khẩn cấp',note:'Trùng khít: 紧急通知 = thông báo khẩn.'},
    {zh:'真理',hv:'chân lý',vn:'chân lý',note:'Trùng khít.'},
    {zh:'自豪',hv:'tự hào',vn:'tự hào',note:'Trùng khít: 感到自豪 = cảm thấy tự hào.'},
    {zh:'保留',hv:'bảo lưu',vn:'bảo lưu, giữ lại',note:'Trùng khít: 保留意见 = bảo lưu ý kiến.'},
    {zh:'悲伤',hv:'bi thương',vn:'đau buồn, bi thương',note:'Trùng khít.'},
    {zh:'菊花',hv:'cúc hoa',vn:'hoa cúc',note:'Tiếng Việt đảo trật tự: cúc hoa → hoa cúc.'},
    {zh:'暴雨',hv:'bạo vũ',vn:'mưa lớn, mưa xối xả',note:'"Bạo" = dữ dội (bạo lực), "vũ" = mưa (vũ lượng) → mưa dữ dội.'},
    {zh:'熟练',hv:'thục luyện',vn:'thuần thục, thành thạo',note:'Tiếng Việt nói "thuần thục" / "thành thạo" — cùng chữ 熟 (thục).'},
    {zh:'抢救',hv:'thương cứu',vn:'cấp cứu, cứu gấp',note:'Chữ 救 = cứu; 抢 nhấn mạnh tranh thủ, gấp rút.'},
    {zh:'热爱',hv:'nhiệt ái',vn:'yêu tha thiết',note:'热 = nhiệt (nồng nhiệt) + 爱 = ái (yêu) → yêu nồng nhiệt.'},
    {zh:'庆祝',hv:'khánh chúc',vn:'chúc mừng, ăn mừng',note:'"Khánh" như quốc khánh (国庆); "chúc" như chúc mừng.'}
  ],
  idiom:[
    {zh:'狂风暴雨',hv:'cuồng phong bạo vũ',vn:'mưa to gió lớn, mưa bão',note:'Trong bài: 有时赶上狂风暴雨，情况紧急…….'},
    {zh:'一来二去',hv:'nhất lai nhị khứ',vn:'qua lại nhiều lần, lâu dần',note:'Trong bài: 一来二去，他慢慢地总结出一些养花的经验.'},
    {zh:'昙花一现',hv:'đàm hoa nhất hiện',vn:'sớm nở tối tàn',note:'Hoa quỳnh nở chốc lát rồi tàn — ví điều gì xuất hiện rồi mất rất nhanh.'},
    {zh:'毫无保留',hv:'hào vô bảo lưu',vn:'không giữ lại chút nào, hết lòng',note:'Trong bài: 他会毫无保留地送给朋友们.'},
    {zh:'有喜有悲',hv:'hữu hỷ hữu bi',vn:'có vui có buồn',note:'Trong bài: 有喜有悲，有笑有泪 — tổng kết trải nghiệm trồng hoa và cuộc sống.'}
  ],
  trap:[
    {zh:'装饰',hv:'trang sức',vn:'trang trí, đồ trang trí',
     warn:'BẪY LỚN: "trang sức" tiếng Việt là nhẫn, vòng, dây chuyền (tiếng Trung: 首饰). 装饰 là TRANG TRÍ: 装饰房间 = trang trí phòng.'},
    {zh:'乐趣',hv:'lạc thú',vn:'niềm vui, thú vui',
     warn:'"Lạc thú" tiếng Việt dễ mang sắc thái hưởng lạc, ăn chơi. 乐趣 trung tính, tích cực: 读书的乐趣 = niềm vui đọc sách.'},
    {zh:'应付',hv:'ứng phó',vn:'ứng phó; làm chiếu lệ',
     warn:'"Ứng phó" tiếng Việt là nghĩa tốt/trung tính. 应付 còn có nghĩa XẤU "làm qua loa cho xong": 他是在应付老师 = nó làm chiếu lệ với thầy.'},
    {zh:'劳驾',hv:'lao giá',vn:'làm phiền, cảm phiền',
     warn:'"Lao giá" không dùng trong tiếng Việt. 劳驾 là lời nhờ vả lịch sự = "phiền anh/chị …".'},
    {zh:'在乎',hv:'tại hồ',vn:'để ý, bận tâm',
     warn:'Đọc Hán Việt "tại hồ" chẳng gợi nghĩa gì. Nhớ cụm 不在乎 = chẳng bận tâm, 满不在乎 = hoàn toàn bất cần.'},
    {zh:'反正',hv:'phản chính',vn:'dù sao, đằng nào cũng',
     warn:'"Phản chính" trong tiếng Việt (bỏ tà theo chính) khác hẳn. 反正 là phó từ "dù sao thì …": 反正我不去.'},
    {zh:'分享',hv:'phân hưởng',vn:'chia sẻ',
     warn:'Tiếng Việt không nói "phân hưởng" mà nói "chia sẻ". Chú ý: 分享 chủ yếu là chia sẻ niềm vui, thành quả, kinh nghiệm.'},
    {zh:'吹',hv:'xuy',vn:'thổi; khoác lác',
     warn:'Nghĩa trong bài không phải "thổi" mà là KHOÁC LÁC: 不是乱吹 = không phải nói khoác; 吹牛 = nói phét.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 160) + bài tập 3 của sách (tr. 162)
// ══════════════════════════════════════════
var matchData = [
  {left:'结合',right:'实际'},
  {left:'应付',right:'挑战'},
  {left:'装饰',right:'街道'},
  {left:'保留',right:'观点'},
  {left:'气候',right:'潮湿'},
  {left:'服装',right:'鲜艳'},
  {left:'情况',right:'紧急'},
  {left:'动作',right:'熟练'},
  {left:'鲜艳的',right:'图案'},
  {left:'潮湿的',right:'台阶'},
  {left:'紧急',right:'集合'},
  {left:'熟练地',right:'使用'},
  {left:'一朵',right:'花'},
  {left:'一把',right:'剪刀'},
  {left:'抢救',right:'病人'},
  {left:'庆祝',right:'胜利'},
  {left:'分享',right:'经验'},
  {left:'热爱',right:'大自然'},
  {left:'追求',right:'真理'},
  {left:'回报',right:'社会'},
  {left:'捡',right:'石头'},
  {left:'为理想而',right:'奋斗'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — đủ 38 từ của bài
// ══════════════════════════════════════════
var fillData = [
  {pre:'作家老舍先生爱花，他',blank:'养',post:'的花很多，满满摆了一院子。',hint:'(trồng, nuôi)',ans:'养'},
  {pre:'可',blank:'除非',post:'是那些好种易活的花草，否则他是不养的。',hint:'(trừ phi)',ans:'除非'},
  {pre:'为了考上理想的大学，他每天都在努力',blank:'奋斗',post:'。',hint:'(phấn đấu)',ans:'奋斗'},
  {pre:'老舍把养花当作一种生活',blank:'乐趣',post:'。',hint:'(thú vui)',ans:'乐趣'},
  {pre:'老李对儿子面试没被录取的事显得满不',blank:'在乎',post:'。',hint:'(để tâm)',ans:'在乎'},
  {pre:'他用剪刀剪出了一',blank:'朵',post:'美丽的花。',hint:'(bông — lượng từ)',ans:'朵'},
  {pre:'这个袋子很结实，用手撕不开，去拿把',blank:'剪刀',post:'。',hint:'(cái kéo)',ans:'剪刀'},
  {pre:'有时蹲下',blank:'捡',post:'几块小石头放在花盆里。',hint:'(nhặt)',ans:'捡'},
  {pre:'新年快到了，我们用彩灯把教室',blank:'装饰',post:'得很漂亮。',hint:'(trang trí)',ans:'装饰'},
  {pre:'这项规定是',blank:'结合',post:'了我校的实际情况而制定的。',hint:'(kết hợp, gắn với)',ans:'结合'},
  {pre:'一年夏天，下了',blank:'暴雨',post:'，邻居家的墙倒了。',hint:'(mưa lớn)',ans:'暴雨'},
  {pre:'因为天气原因，飞机不得不',blank:'紧急',post:'降落。',hint:'(khẩn cấp)',ans:'紧急'},
  {pre:'情况紧急，他就得',blank:'劳驾',post:'全家人抢救花草。',hint:'(làm phiền)',ans:'劳驾'},
  {pre:'经过医生们的全力',blank:'抢救',post:'，病人终于脱离了危险。',hint:'(cấp cứu)',ans:'抢救'},
  {pre:'又做了个两小时的手术，累得我',blank:'腰',post:'都直不起来了。',hint:'(lưng)',ans:'腰'},
  {pre:'父亲听说儿子卖了房子，气得',blank:'直',post:'发抖。',hint:'(liên tục, cứ)',ans:'直'},
  {pre:'多亏了这条铁路，',blank:'不然',post:'这么多煤炭怎么运出去？',hint:'(nếu không thì)',ans:'不然'},
  {pre:'任何事都要有付出，不然怎么会有',blank:'回报',post:'？',hint:'(sự đền đáp)',ans:'回报'},
  {pre:'科学家们一生都在追求',blank:'真理',post:'。',hint:'(chân lý)',ans:'真理'},
  {pre:'有的花喜干，就别多',blank:'浇',post:'水。',hint:'(tưới)',ans:'浇'},
  {pre:'有的花喜欢',blank:'潮湿',post:'的环境，就别放在太阳地里。',hint:'(ẩm ướt)',ans:'潮湿'},
  {pre:'春天到了，农民们忙着给庄稼',blank:'施肥',post:'。',hint:'(bón phân)',ans:'施肥'},
  {pre:'我觉得你们的动作好像还不太',blank:'熟练',post:'，还得多练习练习。',hint:'(thuần thục)',ans:'熟练'},
  {pre:'一个星期的迎来送往，她已经有点儿',blank:'应付',post:'不了了。',hint:'(đối phó, kham)',ans:'应付'},
  {pre:'这次演出需要设计色彩',blank:'鲜艳',post:'的服装。',hint:'(tươi sáng, rực rỡ)',ans:'鲜艳'},
  {pre:'我们的产品改善了许多人的生活，这是我们非常',blank:'自豪',post:'的事情。',hint:'(tự hào)',ans:'自豪'},
  {pre:'你别',blank:'吹',post:'了，上次考试你才考了六十分。',hint:'(khoác lác)',ans:'吹'},
  {pre:'她很有',blank:'爱心',post:'，常常照顾路边的流浪猫。',hint:'(lòng yêu thương)',ans:'爱心'},
  {pre:'请你和大家',blank:'分享',post:'一下你学汉语的经验。',hint:'(chia sẻ)',ans:'分享'},
  {pre:'每到',blank:'昙花',post:'开放的时候，他就约上几位朋友来家里赏花。',hint:'(hoa quỳnh)',ans:'昙花'},
  {pre:'国庆节期间，本市会举行大规模的',blank:'庆祝',post:'活动。',hint:'(kỷ niệm, ăn mừng)',ans:'庆祝'},
  {pre:'对于他们这种做法，我',blank:'保留',post:'自己的意见。',hint:'(bảo lưu)',ans:'保留'},
  {pre:'秋天到了，公园里的',blank:'菊花',post:'都开了。',hint:'(hoa cúc)',ans:'菊花'},
  {pre:'树上掉下来一个苹果，正好',blank:'砸',post:'在他的头上。',hint:'(đập trúng)',ans:'砸'},
  {pre:'听到这个',blank:'悲伤',post:'的消息，大家都哭了。',hint:'(đau buồn)',ans:'悲伤'},
  {pre:'不管你们谁去，',blank:'反正',post:'我不会去。',hint:'(dù sao)',ans:'反正'},
  {pre:'老舍是一个',blank:'热爱',post:'生活、热爱大自然的人。',hint:'(yêu tha thiết)',ans:'热爱'},
  {pre:'北京有个',blank:'老舍',post:'茶馆，是以他的名字命名的。',hint:'(Lão Xá)',ans:'老舍'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (除非 · 直 · 反正) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['除非','急需','一大笔钱','，','我','才会考虑','卖了这房子','。'],ans:'除非急需一大笔钱，我才会考虑卖了这房子。',audio:'除非急需一大笔钱，我才会考虑卖了这房子。'},
  {words:['除非你','每天坚持练习','，','不然','口语','是提高不了的','。'],ans:'除非你每天坚持练习，不然口语是提高不了的。',audio:'除非你每天坚持练习，不然口语是提高不了的。'},
  {words:['这种机器','，','除非李阳','，','没人','修得好','。'],ans:'这种机器，除非李阳，没人修得好。',audio:'这种机器，除非李阳，没人修得好。'},
  {words:['这趟车','可以','直达','北京','。'],ans:'这趟车可以直达北京。',audio:'这趟车可以直达北京。'},
  {words:['父亲','听说','儿子卖了房子','，','气得','直','发抖','。'],ans:'父亲听说儿子卖了房子，气得直发抖。',audio:'父亲听说儿子卖了房子，气得直发抖。'},
  {words:['他','朝我','直','摇头','，','我','故意装作','没看见','。'],ans:'他朝我直摇头，我故意装作没看见。',audio:'他朝我直摇头，我故意装作没看见。'},
  {words:['不管','你们','谁去','，','反正','我','不会去','。'],ans:'不管你们谁去，反正我不会去。',audio:'不管你们谁去，反正我不会去。'},
  {words:['算了','，','反正','不是','什么','要紧事','。'],ans:'算了，反正不是什么要紧事。',audio:'算了，反正不是什么要紧事。'},
  {words:['你','别再说了','，','反正','我','是不会','考虑的','。'],ans:'你别再说了，反正我是不会考虑的。',audio:'你别再说了，反正我是不会考虑的。'},
  {words:['老舍','把','养花','当作','一种','生活乐趣','。'],ans:'老舍把养花当作一种生活乐趣。',audio:'老舍把养花当作一种生活乐趣。'},
  {words:['给花','换盆剪枝的','活儿','他','越做','越熟练','。'],ans:'给花换盆剪枝的活儿他越做越熟练。',audio:'给花换盆剪枝的活儿他越做越熟练。'},
  {words:['菊花','被','砸死了','一百多棵','。'],ans:'菊花被砸死了一百多棵。',audio:'菊花被砸死了一百多棵。'},
  {words:['老舍','很有','爱心','，','更懂得','快乐','要分享','。'],ans:'老舍很有爱心，更懂得快乐要分享。',audio:'老舍很有爱心，更懂得快乐要分享。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'一连取得两场胜利，李岩____得不得了，以为冠军非他莫属了。',opts:['自豪','骄傲','热爱','鲜艳'],ans:1,
   exp:'Nghĩa XẤU "kiêu ngạo, tự cao" → 骄傲 (bài tập 2 của sách). 自豪 chỉ mang nghĩa tốt.'},
  {wrong:'对于他们这种做法，我____自己的意见。',opts:['保存','保留','分享','结合'],ans:1,
   exp:'保留意见 = bảo lưu ý kiến (bài tập 2 của sách). 保存 là cất giữ đồ vật, dữ liệu.'},
  {wrong:'看到五星红旗在赛场上升起，我的眼圈____了。',opts:['潮湿','湿润','鲜艳','紧急'],ans:1,
   exp:'Mắt rưng rưng vì xúc động → 湿润 (bài tập 2 của sách). 潮湿 dùng cho không khí, khí hậu, đồ vật bị ẩm.'},
  {wrong:'他是个工作狂，生活中____工作还是工作。',opts:['除非','除了','不然','反正'],ans:1,
   exp:'"Ngoài … ra (chỉ còn) …" → 除了……还是…… (bài tập 2 của sách). 除非 nêu điều kiện duy nhất.'},
  {wrong:'洗衣机的包装纸箱，既占地方又没什么用，快____了吧。',opts:['应付','处理','保留','装饰'],ans:1,
   exp:'Sắp xếp, dọn bỏ đồ vật → 处理 (词语辨析 của sách). 应付 không có nghĩa này.'},
  {wrong:'小林学习不认真，完全是在____父母和老师。',opts:['处理','应付','回报','劳驾'],ans:1,
   exp:'Làm qua loa, chiếu lệ cho xong → 应付.'},
  {wrong:'我非常尊敬他，但同时也觉得他是个不好____的人。',opts:['应付','处理','在乎','分享'],ans:0,
   exp:'"Người khó đối phó / khó chiều" → 不好应付的人 (做一做 của sách).'},
  {wrong:'____是那些好种易活的花草，否则他是不养的。',opts:['除非','除了','不然','反正'],ans:0,
   exp:'Vế sau có 否则 → vế trước dùng 除非 (điều kiện duy nhất) — 注释 1.'},
  {wrong:'我不知道花草们感谢我不感谢，____我要感谢它们。',opts:['反正','不然','除非','直'],ans:0,
   exp:'Câu dạng "A không A" + kết quả không đổi → 反正 (注释 3).'},
  {wrong:'几百盆花要很快地抢到屋里去，累得腰酸腿疼，热汗____流。',opts:['直','反正','紧急','熟练'],ans:0,
   exp:'直 + V đơn âm: liên tục không ngừng — 热汗直流 (注释 2).'},
  {wrong:'快点儿走吧，____我们就赶不上最后一班车了。',opts:['不然','除非','反正','在乎'],ans:0,
   exp:'"Nếu không thì" (kết quả xấu) → 不然.'},
  {wrong:'我们班赢了比赛，大家决定晚上去吃火锅____一下。',opts:['庆祝','祝贺','分享','回报'],ans:0,
   exp:'Ăn mừng một sự kiện → 庆祝. 祝贺 là chúc mừng một NGƯỜI (祝贺你).'},
  {wrong:'她把旅行的照片____给了班里的同学。',opts:['分享','保留','庆祝','装饰'],ans:0,
   exp:'把 + N + 分享给 + ai = chia sẻ … cho ai.'},
  {wrong:'学了三年，她已经能____地使用汉语了。',opts:['熟练','鲜艳','潮湿','紧急'],ans:0,
   exp:'熟练地 + V: làm gì một cách thành thạo (bảng 搭配 của sách).'},
  {wrong:'经过医生们的全力____，病人终于脱离了危险。',opts:['抢救','回报','应付','结合'],ans:0,
   exp:'经过抢救 = qua cấp cứu; nói về bệnh nhân nguy kịch.'},
  {wrong:'只有努力付出，才能得到____。',opts:['回报','真理','乐趣','爱心'],ans:0,
   exp:'有付出才有回报 — câu chân lý của bài khoá.'},
  {wrong:'学语言要把听、说、读、写____起来。',opts:['结合','装饰','保留','浇'],ans:0,
   exp:'把 A 和 B 结合起来 = kết hợp A với B.'},
  {wrong:'这个袋子很结实，用手撕不开，去拿把____。',opts:['剪刀','菊花','腰','朵'],ans:0,
   exp:'Xé không ra thì dùng kéo; lượng từ 把 đi với 剪刀 (扩展 của sách).'},
  {wrong:'他的成功只是____一现，很快就被人忘记了。',opts:['昙花','菊花','暴雨','真理'],ans:0,
   exp:'Thành ngữ 昙花一现 = sớm nở tối tàn.'},
  {wrong:'树上掉下来一个苹果，正好____在他的头上。',opts:['砸','捡','浇','吹'],ans:0,
   exp:'Vật nặng rơi trúng → 砸.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Trừ phi trời mưa, nếu không thì cuối tuần nào chúng tôi cũng đi leo núi.',zh:'除非下雨，否则我们每个周末都去爬山。',py:'Chúfēi xià yǔ, fǒuzé wǒmen měi ge zhōumò dōu qù pá shān.'},
  {vi:'Chỉ khi thầy giáo đồng ý, chúng tôi mới có thể về sớm.',zh:'除非老师同意，我们才能早点儿回家。',py:'Chúfēi lǎoshī tóngyì, wǒmen cái néng zǎo diǎnr huí jiā.'},
  {vi:'Chuyến tàu này đi thẳng tới Hà Nội, rất tiện.',zh:'这趟火车直达河内，非常方便。',py:'Zhè tàng huǒchē zhídá Hénèi, fēicháng fāngbiàn.'},
  {vi:'Em trai nghe chuyện cười này, cười mãi không thôi.',zh:'弟弟听了这个笑话，直笑。',py:'Dìdi tīngle zhège xiàohua, zhí xiào.'},
  {vi:'Dù bạn có tin hay không, dù sao tôi cũng không nói dối.',zh:'不管你信不信，反正我没说谎。',py:'Bùguǎn nǐ xìn bu xìn, fǎnzhèng wǒ méi shuōhuǎng.'},
  {vi:'Đằng nào hôm nay cũng không có bài tập, chúng ta đi xem phim đi.',zh:'反正今天没有作业，我们去看电影吧。',py:'Fǎnzhèng jīntiān méiyǒu zuòyè, wǒmen qù kàn diànyǐng ba.'},
  {vi:'Ông nội coi việc trồng hoa là một thú vui trong cuộc sống.',zh:'爷爷把养花当作一种生活乐趣。',py:'Yéye bǎ yǎng huā dàngzuò yì zhǒng shēnghuó lèqù.'},
  {vi:'Chúng ta nên yêu thiên nhiên, bảo vệ môi trường.',zh:'我们应该热爱大自然，保护环境。',py:'Wǒmen yīnggāi rè\'ài dà zìrán, bǎohù huánjìng.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Nhà văn Lão Xá yêu hoa, ông trồng rất nhiều hoa, bày kín cả một sân.',zh:'作家老舍先生爱花，他养的花很多，满满摆了一院子。',py:'Zuòjiā Lǎo Shě xiānsheng ài huā, tā yǎng de huā hěn duō, mǎnmǎn bǎile yí yuànzi.'},
  {vi:'Lão Xá coi việc trồng hoa là một thú vui trong cuộc sống.',zh:'老舍把养花当作一种生活乐趣。',py:'Lǎo Shě bǎ yǎng huā dàngzuò yì zhǒng shēnghuó lèqù.'},
  {vi:'Ông không để tâm hoa nở to hay nhỏ, đẹp hay xấu, chỉ cần hoa nở là ông vui.',zh:'他不在乎花开得大小好坏，只要开花，他就高兴。',py:'Tā bú zàihu huā kāi de dàxiǎo hǎohuài, zhǐyào kāi huā, tā jiù gāoxìng.'},
  {vi:'Mấy trăm chậu hoa phải nhanh chóng đưa vào nhà, mệt đến lưng mỏi chân đau, mồ hôi chảy ròng ròng.',zh:'几百盆花，要很快地抢到屋里去，累得腰酸腿疼，热汗直流。',py:'Jǐ bǎi pén huā, yào hěn kuài de qiǎngdào wū li qu, lèi de yāo suān tuǐ téng, rè hàn zhí liú.'},
  {vi:'Việc gì cũng phải bỏ công sức ra, nếu không thì sao có được đền đáp?',zh:'任何事都要有付出，不然怎么会有回报？',py:'Rènhé shì dōu yào yǒu fùchū, bùrán zěnme huì yǒu huíbào?'},
  {vi:'Lão Xá rất giàu lòng yêu thương, lại càng hiểu rằng niềm vui phải được sẻ chia.',zh:'老舍很有爱心，更懂得快乐要分享。',py:'Lǎo Shě hěn yǒu àixīn, gèng dǒngde kuàilè yào fēnxiǎng.'},
  {vi:'Hoa tách rễ, một cây chia thành mấy cây, ông sẽ tặng hết cho bạn bè, không giữ lại chút nào.',zh:'花分根了，一棵分为几棵，他会毫无保留地送给朋友们。',py:'Huā fēn gēn le, yì kē fēnwéi jǐ kē, tā huì háo wú bǎoliú de sòng gěi péngyoumen.'},
  {vi:'Tôi không biết hoa cỏ có cảm ơn tôi hay không, dù sao thì tôi cũng phải cảm ơn chúng.',zh:'我不知道花草们感谢我不感谢，反正我要感谢它们。',py:'Wǒ bù zhīdào huācǎomen gǎnxiè wǒ bù gǎnxiè, fǎnzhèng wǒ yào gǎnxiè tāmen.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 人与自然)
// ══════════════════════════════════════════
var writingData = {
  words:['热爱','乐趣','鲜艳','除非','保留'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "Con người và thiên nhiên" (人与自然): tình cảm của em với thiên nhiên và vì sao phải bảo vệ nó.',
  outline:[
    'Câu mở: nêu tình cảm của em với thiên nhiên (dùng 热爱).',
    'Thân 1: một hoạt động gần gũi thiên nhiên em thích và cảm nhận của em (dùng 乐趣, 鲜艳).',
    'Thân 2: thực trạng môi trường bị phá hoại, điều kiện để giữ gìn thiên nhiên (dùng 除非……否则……, 保留).',
    'Kết: khái quát quan hệ giữa con người và thiên nhiên.'
  ],
  model:{
    zh:'我从小就热爱大自然。周末，我常常和家人去郊区爬山，这是我生活中最大的乐趣。山上有鲜艳的花朵和清新的空气，让我的身心得到放松。可是现在很多人乱扔垃圾，破坏环境。除非大家一起保护自然，否则这些美丽的风景就保留不下来了。人是自然的一部分，爱护自然就是爱护我们自己。',
    py:'Wǒ cóngxiǎo jiù rè\'ài dà zìrán. Zhōumò, wǒ chángcháng hé jiārén qù jiāoqū pá shān, zhè shì wǒ shēnghuó zhōng zuì dà de lèqù. Shān shang yǒu xiānyàn de huāduǒ hé qīngxīn de kōngqì, ràng wǒ de shēnxīn dédào fàngsōng. Kěshì xiànzài hěn duō rén luàn rēng lājī, pòhuài huánjìng. Chúfēi dàjiā yìqǐ bǎohù zìrán, fǒuzé zhèxiē měilì de fēngjǐng jiù bǎoliú bu xiàlái le. Rén shì zìrán de yí bùfen, àihù zìrán jiù shì àihù wǒmen zìjǐ.',
    vn:'Từ nhỏ tôi đã yêu thiên nhiên tha thiết. Cuối tuần, tôi thường cùng gia đình ra ngoại ô leo núi, đó là niềm vui lớn nhất trong cuộc sống của tôi. Trên núi có những bông hoa rực rỡ và không khí trong lành, khiến thân tâm tôi được thư giãn. Nhưng bây giờ nhiều người vứt rác bừa bãi, phá hoại môi trường. Trừ phi mọi người cùng nhau bảo vệ thiên nhiên, nếu không những phong cảnh đẹp này sẽ không giữ lại được. Con người là một phần của thiên nhiên, yêu quý thiên nhiên chính là yêu quý chính chúng ta.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '除非 đã đi cùng 否则 / 不然 / 才 chưa (không viết 除非……，就……)?',
    '鲜艳 có đang tả MÀU SẮC (hoa, quần áo, tranh) không — không dùng để tả người, âm thanh?',
    'Có nêu được cả tình cảm với thiên nhiên lẫn lý do phải bảo vệ nó không?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈人与自然。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'热爱', loai:'động từ', cach:'热爱 + 生活 / 大自然 / 祖国 / 工作 · 对……的热爱',
     sai:[{re:'热爱(吃|玩|睡|看电视|打游戏)', sua:'喜欢 + V', giai:'热爱 là tình yêu lớn lao với đối tượng trừu tượng (生活, 大自然, 祖国, 工作); sở thích nhỏ hằng ngày dùng 喜欢.'},
          {re:'热爱于', sua:'热爱 + N', giai:'热爱 mang tân ngữ trực tiếp, không thêm 于.'}]},
    {tu:'乐趣', loai:'danh từ', cach:'有乐趣 · 充满乐趣 · ……的乐趣 · 把……当作一种乐趣',
     sai:[{re:'(很|非常|十分|特别)乐趣', sua:'很有乐趣', giai:'乐趣 là danh từ, không đứng sau phó từ mức độ; phải nói 很有乐趣 / 充满乐趣.'}]},
    {tu:'鲜艳', loai:'tính từ', cach:'鲜艳的 + 花朵 / 颜色 / 色彩 / 服装 · 颜色鲜艳',
     sai:[{re:'(她|他|人|女孩儿?)(长得)?(很|非常|特别)鲜艳', sua:'穿得很鲜艳 / 很漂亮', giai:'鲜艳 chỉ tả MÀU SẮC, không tả người. Tả người dùng 漂亮, hoặc nói 穿得很鲜艳.'},
          {re:'鲜艳的(声音|味道|音乐|空气)', sua:'好听的声音 / 清新的空气', giai:'鲜艳 chỉ dùng cho màu sắc nhìn thấy được.'}]},
    {tu:'除非', loai:'liên từ', cach:'除非……，否则 / 不然…… · 除非……，(Sub) 才……',
     sai:[{re:'除非[^，。！？]*，(我|你|他|她|我们|大家|人们)?就', sua:'除非……，否则…… / 除非……，才……', giai:'除非 đi với 否则 / 不然 (nếu không thì) hoặc 才 (mới); không đi với 就 như 只要.'}]},
    {tu:'保留', loai:'động từ', cach:'保留 + 传统 / 风俗 / 意见 · 保留下来 · 毫无保留',
     sai:[{re:'保留(食物|牛奶|在冰箱|文件)', sua:'保存 + 食物 / 文件', giai:'Cất giữ đồ ăn, lưu tệp cho khỏi hỏng / mất dùng 保存; 保留 là giữ nguyên, không bỏ đi (truyền thống, phong cảnh, ý kiến).'},
          {re:'保护下来', sua:'保留下来', giai:'"Giữ lại được" (từ trước đến nay) là 保留下来; 保护 là bảo vệ.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'除非……，否则 / 不然……', nhan:'除非', vd:'除非大家一起保护自然，否则美丽的风景就会消失。', khi:'Nêu điều kiện DUY NHẤT để giữ gìn thiên nhiên.'},
    {ten:'反正……', nhan:'反正', vd:'不管别人怎么做，反正我不会乱扔垃圾。', khi:'Bày tỏ thái độ kiên quyết của bản thân.'},
    {ten:'把 A 当作 B', nhan:'当作', vd:'我把爬山当作一种生活乐趣。', khi:'Nói về sở thích gần gũi thiên nhiên.'},
    {ten:'……得 + 直 + V', nhan:'直', vd:'看到那么美的风景，大家高兴得直叫。', khi:'Miêu tả cảm xúc mạnh, sinh động.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要每个人都做一点儿，环境就会越来越好。', khi:'Câu KẾT — kêu gọi hành động.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'大自然不仅给我们食物，也给我们快乐。', khi:'Nêu hai điều thiên nhiên mang lại.'},
    {ten:'对……的热爱', nhan:'热爱', vd:'从小事中可以看出他对大自然的热爱。', khi:'Danh từ hoá tình cảm — câu khái quát.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['唯一在乎的人','她是','生命中','我'],
     dap:'她是我生命中唯一在乎的人。',
     vn:'Cô ấy là người duy nhất tôi quan tâm trong đời.',
     giai:'Câu 29 sách bài tập. 她是 + (我生命中唯一在乎的) + 人: định ngữ dài đứng trước 人.'},
    {manh:['色彩鲜艳的','这次演出','服装','需要设计'],
     dap:'这次演出需要设计色彩鲜艳的服装。',
     vn:'Buổi biểu diễn lần này cần thiết kế trang phục có màu sắc tươi sáng.',
     giai:'Câu 30 sách bài tập. Chủ ngữ 这次演出 → 需要设计 → tân ngữ 色彩鲜艳的服装.'},
    {manh:['一朵美丽的花','他','剪出了','用剪刀'],
     dap:'他用剪刀剪出了一朵美丽的花。',
     vn:'Anh ấy dùng kéo cắt ra một bông hoa đẹp.',
     giai:'Câu 31 sách bài tập. Chủ ngữ → 用剪刀 (công cụ) → 剪出了 → 一朵美丽的花.'},
    {manh:['当作','老舍','一种生活乐趣','把养花'],
     dap:'老舍把养花当作一种生活乐趣。',
     vn:'Lão Xá coi việc trồng hoa là một thú vui trong cuộc sống.',
     giai:'Câu của bài khoá: Chủ ngữ + 把 A + 当作 + B.'},
    {manh:['否则','除非下雨','每天都去跑步','他'],
     dap:'除非下雨，否则他每天都去跑步。',
     vn:'Trừ phi trời mưa, nếu không thì ngày nào anh ấy cũng đi chạy bộ.',
     giai:'除非 + điều kiện đứng đầu, 否则 mở vế kết quả; chủ ngữ 他 đứng sau 否则.'},
    {manh:['被暴雨','菊花','一百多棵','砸死了'],
     dap:'菊花被暴雨砸死了一百多棵。',
     vn:'Hơn một trăm cây hoa cúc bị mưa lớn làm dập chết.',
     giai:'Câu 被 (ôn HSK 3–4): đối tượng + 被 + tác nhân + V + bổ ngữ + số lượng.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 人与自然
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (人与自然 — con người và thiên nhiên). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 热爱 · 乐趣 · 鲜艳 · 潮湿 · 暴雨 · 除非 · 反正 · 分享 · 保留.',
  questions:[
    {q_zh:'描述一个给你留下深刻印象的自然景观，说说你的感受。',
     q_vn:'Hãy miêu tả một cảnh quan thiên nhiên để lại ấn tượng sâu sắc cho em, nói cảm nhận của em.',
     hint:'Nói tên nơi, cảnh vật (dùng 鲜艳), cảm nhận (dùng 直 hoặc 身心得到放松)',
     sample:'去年夏天我去了下龙湾。那里的海水特别蓝，山也很美，到处都是鲜艳的花。我站在船上，高兴得直拍照，身心都得到了放松。',
     sample_vn:'Mùa hè năm ngoái em đã đến vịnh Hạ Long. Nước biển ở đó đặc biệt xanh, núi cũng rất đẹp, khắp nơi là hoa rực rỡ. Em đứng trên thuyền, vui đến mức chụp ảnh liên tục, thân tâm đều được thư giãn.',
     note:'描述 = miêu tả: nói cụ thể nơi chốn, màu sắc, âm thanh; 感受 = cảm nhận của bản thân.'},
    {q_zh:'有人说，大自然和人类就像母子一样，你同意这种说法吗？',
     q_vn:'Có người nói thiên nhiên và con người giống như mẹ và con, em có đồng ý với cách nói này không?',
     hint:'Trả lời thẳng 同意 / 不同意, giải thích bằng 不仅……也……',
     sample:'我同意。大自然不仅给了我们空气、水和食物，也给了我们很多乐趣。就像妈妈照顾孩子一样，大自然一直在照顾我们。',
     sample_vn:'Em đồng ý. Thiên nhiên không chỉ cho chúng ta không khí, nước và thức ăn, mà còn cho chúng ta rất nhiều niềm vui. Giống như mẹ chăm sóc con, thiên nhiên luôn chăm sóc chúng ta.',
     note:'Câu hỏi 你同意吗 → mở đầu bằng 我同意 / 我不太同意, rồi đưa lý do.'},
    {q_zh:'有人认为人类应该尊重大自然，也有人认为人类可以征服大自然，你同意哪种观点？',
     q_vn:'Có người cho rằng con người nên tôn trọng thiên nhiên, cũng có người cho rằng con người có thể chinh phục thiên nhiên; em đồng ý với quan điểm nào?',
     hint:'Chọn một quan điểm, dùng 除非……否则…… và ví dụ 暴雨 / 洪水',
     sample:'我认为人类应该尊重大自然。人类的力量是有限的，暴雨、台风来了，我们只能想办法应付。除非我们保护好环境，否则大自然会“惩罚”我们。',
     sample_vn:'Em cho rằng con người nên tôn trọng thiên nhiên. Sức mạnh của con người có hạn, mưa lớn, bão đến thì chúng ta chỉ có thể tìm cách ứng phó. Trừ phi chúng ta bảo vệ tốt môi trường, nếu không thiên nhiên sẽ "trừng phạt" chúng ta.',
     note:'征服 (zhēngfú) = chinh phục. Câu hỏi chọn quan điểm → 我同意第一种观点 / 我认为…….'},
    {q_zh:'你养过花或者小动物吗？说说你的经验和乐趣。',
     q_vn:'Em đã từng trồng hoa hay nuôi con vật nhỏ nào chưa? Kể về kinh nghiệm và niềm vui của em.',
     hint:'Kể một kinh nghiệm (dùng 浇水 / 潮湿), một niềm vui (dùng 乐趣, 分享)',
     sample:'我养过一盆小花。我发现它不喜欢太潮湿的环境，所以不能天天浇水。每次开花的时候，我都拍照片和朋友分享，这是我最大的乐趣。',
     sample_vn:'Em từng trồng một chậu hoa nhỏ. Em phát hiện nó không thích môi trường quá ẩm, nên không thể ngày nào cũng tưới. Mỗi lần hoa nở, em đều chụp ảnh chia sẻ với bạn bè, đó là niềm vui lớn nhất của em.',
     note:'Liên hệ bài khoá: kinh nghiệm trồng hoa của Lão Xá (有的花喜干，就别多浇水).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 36.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第36课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'您写作的过程中会休息吗？'},
            {sp:'男',zh:'会。我经常写一会儿就到院子里转转，给花草剪剪枝，捡几块漂亮的小石头。这样脑力和体力可以很好地结合，身心得到放松。'}],
     q:'男的为什么要给花草剪枝？',qvn:'Vì sao người đàn ông tỉa cành cho hoa cỏ?',
     opts:['为了卖花挣钱','因为花草长得太乱了','为了收集小石头','为了休息，放松身心'],ans:3,
     why:'这样脑力和体力可以很好地结合，身心得到放松 → tỉa cành là cách nghỉ ngơi, thư giãn giữa lúc viết.',
     words:['剪刀','捡','结合']},

    {n:2,
     lines:[{sp:'男',zh:'你的花养得这么好，总结过经验吗？'},
            {sp:'女',zh:'有的花喜干，就别多浇水；有的花喜欢潮湿的环境，就别放在太阳地里。'}],
     q:'女的认为养花最重要的是什么？',qvn:'Người phụ nữ cho rằng điều quan trọng nhất khi trồng hoa là gì?',
     opts:['多浇水','多晒太阳','了解花的习性','经常施肥'],ans:2,
     why:'Loài ưa khô thì ít tưới, loài ưa ẩm thì tránh nắng → phải hiểu đặc tính (习性) của từng loài hoa.',
     words:['养','浇','潮湿']},

    {n:3,
     lines:[{sp:'女',zh:'你怎么看起来这么累啊？'},
            {sp:'男',zh:'马上快下班的时候来了个病人，情况紧急，又做了个两小时的手术，累得我腰都直不起来了。'}],
     q:'男的怎么了？',qvn:'Người đàn ông bị làm sao?',
     opts:['生病了','累得腰疼','被病人批评了','下班太早了'],ans:1,
     why:'累得我腰都直不起来了 → mệt đến mức không thẳng lưng lên được, tức là mỏi lưng, đau lưng.',
     words:['紧急','腰','直']},

    {n:4,
     lines:[{sp:'男',zh:'这次真是搞砸了！'},
            {sp:'女',zh:'生活总是有成功也有失败，有悲伤也有幸福，别这么灰心。'}],
     q:'女的是什么语气？',qvn:'Người phụ nữ nói với giọng điệu gì?',
     opts:['批评','安慰','怀疑','生气'],ans:1,
     why:'别这么灰心 (đừng nản lòng như thế) → lời an ủi, động viên.',
     words:['砸','悲伤']},

    {n:5,
     lines:[{sp:'女',zh:'明天的比赛你准备好了吗？'},
            {sp:'男',zh:'熟练工种，天天干，我闭着眼睛都能应付，放心吧！'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['他很有把握','他还没准备好','他想闭上眼睛休息','他不想参加比赛'],ans:0,
     why:'闭着眼睛都能应付，放心吧 → việc quá quen tay, anh ấy rất tự tin, nắm chắc phần thắng.',
     words:['熟练','应付']},

    {n:6,
     lines:[{sp:'男',zh:'你靠扫大街挣钱，不觉得丢脸吗？'},
            {sp:'女',zh:'我不偷不抢，靠自己劳动养活自己，有什么丢脸的？'}],
     q:'女的的钱是怎么来的？',qvn:'Tiền của người phụ nữ từ đâu mà có?',
     opts:['父母给的','偷来的','扫大街挣的','抢来的'],ans:2,
     why:'你靠扫大街挣钱 — 靠自己劳动养活自己 → tiền do quét đường kiếm được. (Ôn 扩展: 偷, 抢.)',
     words:['养']},

    {n:7,
     lines:[{sp:'女',zh:'听说老舍先生特别爱花？'},
            {sp:'男',zh:'对，他养的花很多，满满摆了一院子。'},
            {sp:'女',zh:'他都喜欢什么花？'},
            {sp:'男',zh:'好种易活、自己会奋斗的。因为他说北京的气候不适合养花，想把南方的名花养活并非易事。'}],
     q:'老舍先生喜欢什么花？',qvn:'Ông Lão Xá thích loại hoa nào?',
     opts:['南方的名花','好种易活的花','颜色鲜艳的花','价格很贵的花'],ans:1,
     why:'好种易活、自己会奋斗的 → loài hoa dễ trồng dễ sống; hoa danh tiếng phương Nam thì khó trồng ở Bắc Kinh.',
     words:['老舍','养','奋斗']},

    {n:8,
     lines:[{sp:'男',zh:'北京有个老舍茶馆，是不是老舍先生开的店？'},
            {sp:'女',zh:'不是，是以他的名字命名的。'},
            {sp:'男',zh:'你去过吗？怎么样？'},
            {sp:'女',zh:'很好，有便宜的大碗茶、各种北京传统风味小吃，还有京剧、相声表演什么的。'}],
     q:'关于老舍茶馆，下列哪项正确？',qvn:'Về quán trà Lão Xá, điều nào sau đây đúng?',
     opts:['是老舍先生开的','有京剧、相声表演','茶很贵','只卖茶，不卖小吃'],ans:1,
     why:'还有京剧、相声表演什么的 → có biểu diễn Kinh kịch, tấu nói. Quán chỉ mang tên ông, trà lại rẻ (便宜的大碗茶), có cả đồ ăn vặt.',
     words:['老舍']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn rủ em cuối tuần đi xem phim, nhưng em sắp thi.',
     a:{sp:'Bạn',zh:'这个周末你陪我去看场电影，行吗？',vn:'Cuối tuần này cậu đi xem phim với mình được không?'},
     need:['Dùng 除非','Đặt điều kiện để em đồng ý đi'],
     sample:'除非你先陪我复习完数学，否则我是不会去的。',
     samplePy:'Chúfēi nǐ xiān péi wǒ fùxí wán shùxué, fǒuzé wǒ shì bú huì qù de.',
     sampleVn:'Trừ phi cậu ôn xong môn Toán với mình trước, nếu không thì mình không đi đâu.',
     tip:'Bài 练一练 của sách: 想让我答应你，除非……. 除非 + 否则 / 才.'},

    {scene:'Chị gái chê chiếc áo em mới mua.',
     a:{sp:'Chị gái',zh:'这是今年最流行的颜色？你真没眼力。',vn:'Đây là màu thịnh hành nhất năm nay à? Em đúng là chẳng có mắt nhìn.'},
     need:['Dùng 反正','Khẳng định em vẫn thích chiếc áo'],
     sample:'流行不流行我不管，反正我喜欢，穿着也舒服。',
     samplePy:'Liúxíng bu liúxíng wǒ bù guǎn, fǎnzhèng wǒ xǐhuan, chuānzhe yě shūfu.',
     sampleVn:'Thịnh hành hay không em mặc kệ, dù sao em thích, mặc cũng thoải mái.',
     tip:'反正 nêu kết quả không đổi dù tình huống khác nhau (注释 3); ôn 不管.'},

    {scene:'Bạn hỏi em hôm qua đi leo núi có mệt không.',
     a:{sp:'Bạn',zh:'昨天爬山累不累？',vn:'Hôm qua leo núi có mệt không?'},
     need:['Dùng 直','Tả em mệt / đổ mồ hôi thế nào'],
     sample:'太累了！爬到山顶的时候，我热汗直流，腿也直发抖。',
     samplePy:'Tài lèi le! Pádào shāndǐng de shíhou, wǒ rè hàn zhí liú, tuǐ yě zhí fādǒu.',
     sampleVn:'Mệt lắm! Lúc leo lên đến đỉnh, mồ hôi chảy ròng ròng, chân cũng run lẩy bẩy.',
     tip:'直 + V đơn âm tiết: liên tục không ngừng (热汗直流 — câu của bài khoá).'},

    {scene:'Em đi du lịch một tuần, nhờ hàng xóm trông giúp chậu hoa.',
     a:{sp:'Hàng xóm',zh:'你的花要怎么照顾啊？我可没养过花。',vn:'Hoa của cháu phải chăm thế nào? Bác chưa trồng hoa bao giờ đâu.'},
     need:['Dùng 浇 và 潮湿','Hướng dẫn cách chăm hoa'],
     sample:'这盆花喜欢潮湿的环境，您每天给它浇一次水就行，别放在太阳地里。',
     samplePy:'Zhè pén huā xǐhuan cháoshī de huánjìng, nín měi tiān gěi tā jiāo yí cì shuǐ jiù xíng, bié fàng zài tàiyáng dì li.',
     sampleVn:'Chậu hoa này ưa môi trường ẩm, mỗi ngày bác tưới cho nó một lần là được, đừng để ngoài nắng.',
     tip:'Dùng lại kinh nghiệm trồng hoa của Lão Xá; 给 + N + 浇水.'},

    {scene:'Lớp em thắng giải bóng rổ của trường, lớp trưởng hỏi ý kiến.',
     a:{sp:'Lớp trưởng',zh:'我们赢了！大家说怎么办？',vn:'Chúng ta thắng rồi! Mọi người nói nên làm gì đây?'},
     need:['Dùng 庆祝 và 分享','Đề xuất một hoạt động'],
     sample:'我们晚上一起去吃火锅庆祝一下吧！再把比赛的照片分享给老师和家长。',
     samplePy:'Wǒmen wǎnshang yìqǐ qù chī huǒguō qìngzhù yíxià ba! Zài bǎ bǐsài de zhàopiàn fēnxiǎng gěi lǎoshī hé jiāzhǎng.',
     sampleVn:'Tối nay chúng ta cùng đi ăn lẩu ăn mừng đi! Rồi chia sẻ ảnh trận đấu cho thầy cô và phụ huynh.',
     tip:'庆祝 + 一下; 把 + N + 分享给 + ai.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Trên xe buýt đông người, em muốn nhờ một bác lớn tuổi tránh đường để xuống xe.',
     a:'劳驾，请让一下，我下车。',b:'让开，我要下车！',better:'a',
     why:'Nhờ người lạ, nhất là người lớn tuổi, cần lịch sự: 劳驾，请让一下. Câu b cộc lốc, dễ gây khó chịu.'},

    {scene:'Em viết bài giới thiệu nhà văn Lão Xá cho báo tường của trường.',
     a:'老舍一生酷爱养花，是一个热爱生活、热爱大自然的人。',b:'老舍特喜欢种花，觉得生活挺好玩儿的。',better:'a',
     why:'Bài viết giới thiệu cần văn phong trang trọng: 一生酷爱, 热爱生活. Câu b (特, 挺好玩儿的) quá khẩu ngữ.'},

    {scene:'Bạn thân khoe điểm thi cao, em trêu bạn.',
     a:'你别吹了，不就是比我多考了两分吗？',b:'请您不要过于骄傲，您的成绩仅比我高两分。',better:'a',
     why:'Nói đùa với bạn thân dùng khẩu ngữ tự nhiên: 别吹了, 不就是……吗. Câu b dùng 您, 过于, 仅 — trang trọng đến mức lạ lùng.'},

    {scene:'Trung tâm khí tượng phát thông báo trên truyền hình.',
     a:'今天下午将有暴雨，请市民做好防范准备，尽量减少外出。',b:'下午要下大雨了，大家别出门啊！',better:'a',
     why:'Thông báo chính thức: 将有暴雨, 做好防范准备, 尽量减少外出. Câu b giống lời nhắc trong gia đình.'},

    {scene:'Em nhắn tin cho mẹ lúc mẹ đi vắng.',
     a:'妈，我已经给阳台上的花浇过水了，您放心吧！',b:'母亲大人：阳台花卉已按时浇灌完毕，特此告知。',better:'a',
     why:'Nhắn tin cho mẹ nói tự nhiên, thân mật. Câu b (花卉, 浇灌完毕, 特此告知) như công văn, nghe buồn cười.'},

    {scene:'Người dẫn chương trình phát biểu trong lễ kỷ niệm của trường.',
     a:'今天，我们在这里隆重庆祝学校成立五十周年。',b:'今天咱们一块儿给学校过个五十岁生日吧。',better:'a',
     why:'Lễ kỷ niệm trang trọng: 隆重庆祝……周年. Câu b (咱们一块儿, 过个生日) chỉ hợp khi nói vui.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 162)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Sách chia 5 phần: 老舍先生养什么样的花 → 养花的乐趣与辛苦 → 养花的经验 → 分享养花的快乐 → 为什么感谢花草. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Lão Xá trồng hoa gì', cue:'老舍爱花，养的花很多；可除非是……的花草，否则……；因为北京的气候……', words:['老舍','养','除非','奋斗']},
    {step:'Niềm vui trồng hoa', cue:'老舍把养花当作……；他不在乎……；写几十个字就到院中……剪枝、捡石头做装饰……脑力和体力……', words:['乐趣','在乎','剪刀','捡','装饰','结合']},
    {step:'Nỗi vất vả', cue:'有时赶上狂风暴雨，情况……，劳驾全家人……，累得……热汗……；他并不抱怨：有付出才有……', words:['暴雨','紧急','劳驾','抢救','腰','直','不然','回报','真理']},
    {step:'Kinh nghiệm trồng hoa', cue:'有的花喜干，就别多……；有的花喜欢……的环境……；换盆剪枝施肥越做越……；看着鲜艳的花朵，老舍……地说……', words:['浇','潮湿','施肥','熟练','应付','鲜艳','自豪','吹']},
    {step:'Sẻ chia niềm vui', cue:'老舍很有……，懂得快乐要……；昙花开放时约朋友……；花分根了，他……地送给朋友；送牛奶的小伙子夸……', words:['爱心','分享','昙花','庆祝','保留']},
    {step:'Có vui có buồn', cue:'暴雨中邻居家的墙倒了，菊花被……；“有喜有悲，有笑有泪”；“……反正我要感谢它们”；对大自然的……', words:['菊花','砸','悲伤','反正','热爱']}
  ],
  checklist: [
    'Kể đủ năm phần của sách chưa: loài hoa Lão Xá trồng → niềm vui và nỗi vất vả → kinh nghiệm → sẻ chia → vì sao cảm ơn hoa cỏ?',
    'Có dùng được các từ khoá của sách không: 种 (zhòng), 剪枝, 喜干, 浇水, 换盆, 长虫, 赏花, 劳动果实, 夸, 有喜有悲?',
    'Có dùng đúng 除非……否则…… khi nói về loài hoa ông trồng không?',
    'Có giải thích được vì sao trồng hoa giúp Lão Xá kết hợp trí lực và thể lực không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 161–162) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['熟练','结合','不然','自豪','庆祝','在乎'],
   cau:[
     {s:'我们的产品改善了许多人的生活，这是我们非常＿＿的事情。', dap:['自豪']},
     {s:'这项规定是＿＿了我校的实际情况而制定的。', dap:['结合']},
     {s:'老李对儿子面试没被录取的事显得满不＿＿。', dap:['在乎']},
     {s:'国庆节期间，本市会举行大规模的＿＿活动。', dap:['庆祝']},
     {s:'多亏了这条铁路，＿＿这么多煤炭怎么运出去？', dap:['不然']},
     {s:'我觉得你们的动作好像还不太＿＿，还得多练习练习。', dap:['熟练']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'一连取得两场胜利，李岩＿＿得不得了，以为冠军非他莫属了。', opts:['自豪','骄傲'], ans:1, giai:'Thắng hai trận đã tưởng chắc chắn vô địch → thái độ KIÊU NGẠO, nghĩa xấu → 骄傲. 自豪 chỉ mang nghĩa tốt (tự hào chính đáng).'},
     {s:'对于他们这种做法，我＿＿自己的意见。', opts:['保留','保存'], ans:0, giai:'保留意见 = bảo lưu ý kiến (giữ lại, chưa nói ra / chưa đồng ý). 保存 là cất giữ đồ vật, dữ liệu cho khỏi hỏng, mất.'},
     {s:'看到五星红旗在赛场上升起，我的眼圈＿＿了。', opts:['潮湿','湿润'], ans:1, giai:'Mắt rưng rưng vì xúc động → 眼圈湿润了. 潮湿 dùng cho không khí, khí hậu, quần áo, nhà cửa bị ẩm.'},
     {s:'他是个工作狂，生活中＿＿工作还是工作。', opts:['除非','除了'], ans:1, giai:'Mẫu 除了 A 还是 A: "ngoài công việc ra vẫn là công việc". 除非 nêu điều kiện duy nhất, phải đi với 否则 / 才.'}
   ]}
];
