// ══════════════════════════════════════════
// DATA — HSK6 Bài 11: 我不在时，猫在干什么？ (Các chú mèo làm gì khi tôi đi vắng?)
// 第三单元 多彩社会 · Nguồn: HSK标准教程6上 (tr. 116–125) + đáp án sách
// Bài khoá: 我不在时，猫在干什么 (845字) · 46 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'流浪',py:'liúlàng',pos:'Động từ',vn:'lưu lạc, lang thang',hv:'lưu lãng',em:'🐈',lesson:1,
   explain:['Không có nơi ở cố định, sống lang thang khắp nơi.','Hay làm định ngữ cho động vật bị bỏ rơi: 流浪猫, 流浪狗; với người: 流浪汉, 四处流浪. Không mang tân ngữ.'],
   usage:'在 + nơi + 流浪 / 四处流浪; làm định ngữ: 流浪猫, 流浪狗, 流浪汉; 流浪史 = quá khứ lang thang.',
   collo:['流浪猫','流浪狗','四处流浪','流浪汉'],
   ex_zh:'大黄原本是只流浪猫。',ex_py:'Dàhuáng yuánběn shì zhī liúlàng māo.',ex_vn:'Đại Hoàng vốn là một con mèo hoang.',
   exList:[
     {zh:'大黄原本是只流浪猫，那天淋着大雨来钱小奇家拜访。',py:'Dàhuáng yuánběn shì zhī liúlàng māo, nà tiān línzhe dàyǔ lái Qián Xiǎoqí jiā bàifǎng.',vn:'Đại Hoàng vốn là một con mèo hoang, hôm ấy dầm mưa to đến "thăm" nhà Tiền Tiểu Kỳ.'},
     {zh:'小区里的流浪狗越来越多，居民们成立了一个救助小组。',py:'Xiǎoqū li de liúlàng gǒu yuè lái yuè duō, jūmínmen chénglìle yí ge jiùzhù xiǎozǔ.',vn:'Chó hoang trong khu dân cư ngày càng nhiều, cư dân đã lập ra một nhóm cứu trợ.'},
     {zh:'他年轻时四处流浪，见过不少世面。',py:'Tā niánqīng shí sìchù liúlàng, jiànguo bùshǎo shìmiàn.',vn:'Hồi trẻ ông ấy lang bạt khắp nơi, đã từng trải không ít.'}
   ],
   colloFull:[
     {zh:'流浪猫',py:'liúlàng māo',vn:'mèo hoang'},
     {zh:'流浪狗',py:'liúlàng gǒu',vn:'chó hoang'},
     {zh:'四处流浪',py:'sìchù liúlàng',vn:'lang bạt khắp nơi'},
     {zh:'流浪汉',py:'liúlànghàn',vn:'người lang thang, vô gia cư'},
     {zh:'流浪史',py:'liúlàng shǐ',vn:'quá khứ lang thang'}
   ],
   patterns:[
     {s:'流浪 + 猫 / 狗 / 汉',m:'… hoang, … lang thang (làm định ngữ)'},
     {s:'在 + nơi / 四处 + 流浪',m:'Lang thang ở … / khắp nơi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi nhận nuôi con mèo hoang này, ngày nào em gái tôi cũng vội vàng về nhà.',answer:'自从收养了这只流浪猫，妹妹每天都急着回家。',answerPy:'Zìcóng shōuyǎngle zhè zhī liúlàng māo, mèimei měi tiān dōu jízhe huí jiā.',
      note:'自从……: kể từ khi …; 急着 + V: vội vàng làm gì.',pair:'自从……'},
     {promptLang:'vi',prompt:'Con chó hoang ấy không những không cắn người mà còn rất ngoan.',answer:'那只流浪狗不但不咬人，而且很乖。',answerPy:'Nà zhī liúlàng gǒu búdàn bù yǎo rén, érqiě hěn guāi.',
      note:'不但……而且……: không những … mà còn … (tăng tiến).',pair:'不但……而且……'}
   ]},

  {n:2,zh:'淋',py:'lín',pos:'Động từ',vn:'dầm (mưa), dội, rưới',hv:'lâm',em:'🌧️',lesson:1,
   explain:['(Mưa, nước) xối, dội lên người hoặc vật; bị dầm mưa.','Hay gặp 淋雨, 被雨淋湿, 淋着雨; còn nghĩa rưới (chất lỏng) lên: 把酱汁淋在菜上.'],
   usage:'淋 + 雨 (li hợp: 淋了雨); 被(雨)淋 + 湿 / 透; 淋着雨 + V; 把 + chất lỏng + 淋在 + …上.',
   collo:['淋雨','淋湿','淋着大雨','淋透了'],
   ex_zh:'我忘了带伞，全身都被雨淋透了。',ex_py:'Wǒ wàngle dài sǎn, quánshēn dōu bèi yǔ líntòu le.',ex_vn:'Tôi quên mang ô, cả người ướt sũng vì mưa.',
   exList:[
     {zh:'那天，大黄淋着大雨来钱小奇家拜访，下完雨就不走了。',py:'Nà tiān, Dàhuáng línzhe dàyǔ lái Qián Xiǎoqí jiā bàifǎng, xiàwán yǔ jiù bù zǒu le.',vn:'Hôm ấy Đại Hoàng dầm mưa to đến "thăm" nhà Tiền Tiểu Kỳ, mưa tạnh rồi cũng không đi nữa.'},
     {zh:'我忘了带伞，从学校走回家，全身都被雨淋透了。',py:'Wǒ wàngle dài sǎn, cóng xuéxiào zǒu huí jiā, quánshēn dōu bèi yǔ líntòu le.',vn:'Tôi quên mang ô, đi bộ từ trường về nhà, cả người ướt sũng vì mưa.'},
     {zh:'把热油淋在鱼上，香味一下子就出来了。',py:'Bǎ rè yóu lín zài yú shang, xiāngwèi yíxiàzi jiù chūlái le.',vn:'Rưới dầu nóng lên cá, mùi thơm lập tức bốc lên.'}
   ],
   colloFull:[
     {zh:'淋雨',py:'lín yǔ',vn:'dầm mưa'},
     {zh:'淋湿',py:'línshī',vn:'bị (mưa) làm ướt'},
     {zh:'淋着大雨',py:'línzhe dàyǔ',vn:'dầm mưa to'},
     {zh:'淋透了',py:'líntòu le',vn:'ướt sũng'},
     {zh:'淋在……上',py:'lín zài……shang',vn:'rưới lên …'}
   ],
   patterns:[
     {s:'被雨 + 淋 + 湿 / 透',m:'Bị mưa làm ướt / ướt sũng (câu bị động)'},
     {s:'淋着雨 + V',m:'Dầm mưa mà làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua cậu ấy dầm mưa, hôm nay quả nhiên bị cảm.',answer:'他昨天淋了雨，今天果然感冒了。',answerPy:'Tā zuótiān línle yǔ, jīntiān guǒrán gǎnmào le.',
      note:'果然 = quả nhiên (đúng như dự đoán); 淋雨 là động từ li hợp nên nói 淋了雨.',pair:'果然'},
     {promptLang:'vi',prompt:'Đừng để quần áo bị mưa làm ướt, mau mang vào đi.',answer:'别让衣服被雨淋湿了，快拿进来吧。',answerPy:'Bié ràng yīfu bèi yǔ línshī le, kuài ná jìnlái ba.',
      note:'被 + tác nhân (雨) + V + bổ ngữ kết quả (湿); 拿进来 = bổ ngữ xu hướng kép.',pair:'被 (câu bị động)'}
   ]},

  {n:3,zh:'拜访',py:'bàifǎng',pos:'Động từ',vn:'thăm hỏi, thăm viếng',hv:'bái phỏng',em:'🚪',lesson:1,
   explain:['Đến thăm hỏi ai đó — cách nói lịch sự, tỏ ý tôn trọng người được thăm.','Tân ngữ là người (拜访老师, 拜访客户); trong bài dùng hài hước cho con mèo hoang "đến thăm" nhà.'],
   usage:'拜访 + người; 到 / 来 + nơi + 拜访; 登门拜访; 专程拜访.',
   collo:['拜访客户','登门拜访','拜访老师','专程拜访'],
   ex_zh:'春节期间，我们专程去拜访了小学时的班主任。',ex_py:'Chūnjié qījiān, wǒmen zhuānchéng qù bàifǎngle xiǎoxué shí de bānzhǔrèn.',ex_vn:'Dịp Tết, chúng tôi cất công đi thăm cô chủ nhiệm hồi tiểu học.',
   exList:[
     {zh:'大黄来钱小奇家拜访，下完雨就不走了。',py:'Dàhuáng lái Qián Xiǎoqí jiā bàifǎng, xiàwán yǔ jiù bù zǒu le.',vn:'Đại Hoàng đến "thăm" nhà Tiền Tiểu Kỳ, mưa tạnh rồi cũng không chịu đi.'},
     {zh:'春节期间，我们专程去拜访了小学时的班主任。',py:'Chūnjié qījiān, wǒmen zhuānchéng qù bàifǎngle xiǎoxué shí de bānzhǔrèn.',vn:'Dịp Tết, chúng tôi cất công đi thăm cô chủ nhiệm hồi tiểu học.'},
     {zh:'明天上午，经理要去拜访几位重要客户。',py:'Míngtiān shàngwǔ, jīnglǐ yào qù bàifǎng jǐ wèi zhòngyào kèhù.',vn:'Sáng mai giám đốc sẽ đi thăm mấy khách hàng quan trọng.'}
   ],
   colloFull:[
     {zh:'拜访客户',py:'bàifǎng kèhù',vn:'thăm khách hàng'},
     {zh:'登门拜访',py:'dēngmén bàifǎng',vn:'đến tận nhà thăm hỏi'},
     {zh:'拜访老师',py:'bàifǎng lǎoshī',vn:'thăm thầy cô'},
     {zh:'专程拜访',py:'zhuānchéng bàifǎng',vn:'cất công đến thăm'},
     {zh:'拜访亲友',py:'bàifǎng qīnyǒu',vn:'thăm họ hàng, bạn bè'}
   ],
   patterns:[
     {s:'去 / 来 + 拜访 + người',m:'Đi / đến thăm ai'},
     {s:'到 + nơi + 拜访',m:'Đến nơi nào thăm hỏi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi đến thăm khách hàng, tốt nhất là gọi điện hẹn trước.',answer:'拜访客户之前，最好先打电话约一下。',answerPy:'Bàifǎng kèhù zhīqián, zuìhǎo xiān dǎ diànhuà yuē yíxià.',
      note:'……之前 = trước khi …; 最好 = tốt nhất là.',pair:'……之前'},
     {promptLang:'vi',prompt:'Thầy Vương tuy đã nghỉ hưu nhưng học sinh cũ vẫn thường đến thăm thầy.',answer:'王老师虽然退休了，但以前的学生还常常来拜访他。',answerPy:'Wáng lǎoshī suīrán tuìxiū le, dàn yǐqián de xuésheng hái chángcháng lái bàifǎng tā.',
      note:'虽然……但……: tuy … nhưng …; 还 = vẫn.',pair:'虽然……但……'}
   ]},

  {n:4,zh:'见多识广',py:'jiànduō-shíguǎng',pos:'Thành ngữ',vn:'thấy nhiều biết rộng, từng trải',hv:'kiến đa thức quảng',em:'🧭',lesson:1,
   explain:['Thấy nhiều, biết rộng: từng trải, hiểu biết phong phú.','Làm vị ngữ hoặc định ngữ (见多识广的人); trong bài nhân hoá con mèo từng đi lang thang nên "từng trải".'],
   usage:'见多识广 + 的 + người / vật; chủ ngữ + 见多识广; hay đi sau 游历过很多地方, 走南闯北.',
   collo:['见多识广的人','见多识广的老人','显得见多识广','走南闯北'],
   ex_zh:'见多识广的大黄虽有流浪史，却很有教养。',ex_py:'Jiànduō-shíguǎng de Dàhuáng suī yǒu liúlàng shǐ, què hěn yǒu jiàoyǎng.',ex_vn:'Đại Hoàng từng trải tuy có quá khứ lang thang nhưng lại rất có giáo dục.',
   exList:[
     {zh:'见多识广的大黄虽有流浪史，却很有教养。',py:'Jiànduō-shíguǎng de Dàhuáng suī yǒu liúlàng shǐ, què hěn yǒu jiàoyǎng.',vn:'Đại Hoàng từng trải tuy có quá khứ lang thang nhưng lại rất có giáo dục.'},
     {zh:'他游历过很多国家，见多识广，什么问题都难不倒他。',py:'Tā yóulìguo hěn duō guójiā, jiànduō-shíguǎng, shénme wèntí dōu nán bu dǎo tā.',vn:'Anh ấy đã đi qua nhiều nước, hiểu biết rộng, câu hỏi nào cũng không làm khó được anh ấy.'},
     {zh:'爷爷年轻时走南闯北，是个见多识广的人。',py:'Yéye niánqīng shí zǒunán-chuǎngběi, shì ge jiànduō-shíguǎng de rén.',vn:'Hồi trẻ ông nội đi khắp nam bắc, là người rất từng trải.'}
   ],
   colloFull:[
     {zh:'见多识广的人',py:'jiànduō-shíguǎng de rén',vn:'người từng trải'},
     {zh:'见多识广的老人',py:'jiànduō-shíguǎng de lǎorén',vn:'cụ già từng trải'},
     {zh:'显得见多识广',py:'xiǎnde jiànduō-shíguǎng',vn:'tỏ ra hiểu biết rộng'},
     {zh:'走南闯北',py:'zǒunán-chuǎngběi',vn:'đi khắp nam bắc (nên biết rộng)'},
     {zh:'见多识广的导游',py:'jiànduō-shíguǎng de dǎoyóu',vn:'hướng dẫn viên từng trải'}
   ],
   patterns:[
     {s:'见多识广 + 的 + N',m:'… từng trải, hiểu biết rộng'},
     {s:'……过很多……，见多识广',m:'Đã đi / đọc nhiều nên hiểu rộng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng coi thường cậu ấy, cậu ấy đã đọc rất nhiều sách, hiểu biết rộng lắm.',answer:'你别小看他，他读过很多书，见多识广。',answerPy:'Nǐ bié xiǎokàn tā, tā dúguo hěn duō shū, jiànduō-shíguǎng.',
      note:'V + 过 = đã từng; 小看 = coi thường.',pair:'V + 过'},
     {promptLang:'vi',prompt:'Con người đi càng nhiều nơi thì càng hiểu biết rộng.',answer:'人走的地方越多，就越见多识广。',answerPy:'Rén zǒu de dìfang yuè duō, jiù yuè jiànduō-shíguǎng.',
      note:'越……越……: càng … càng …; vế sau có thể thêm 就.',pair:'越……越……'}
   ]},

  {n:5,zh:'教养',py:'jiàoyǎng',pos:'Danh từ',vn:'sự giáo dục, sự có văn hoá',hv:'giáo dưỡng',em:'🎩',lesson:1,
   explain:['Sự có giáo dục, có văn hoá, lễ độ — thể hiện qua cách cư xử do được dạy dỗ tốt.','Hay dùng 有教养 / 没有教养 / 缺乏教养; làm động từ 教养 = dạy dỗ, nuôi nấng (教养子女) thì ít gặp hơn.'],
   usage:'(很) 有 / 没有 / 缺乏 + 教养; 一个人的教养; 家庭教养.',
   collo:['很有教养','没有教养','缺乏教养','家庭教养'],
   ex_zh:'这孩子说话有礼貌，一看就很有教养。',ex_py:'Zhè háizi shuōhuà yǒu lǐmào, yí kàn jiù hěn yǒu jiàoyǎng.',ex_vn:'Đứa trẻ này ăn nói lễ phép, nhìn là biết được dạy dỗ tử tế.',
   exList:[
     {zh:'大黄虽有流浪史，却很有教养。',py:'Dàhuáng suī yǒu liúlàng shǐ, què hěn yǒu jiàoyǎng.',vn:'Đại Hoàng tuy có quá khứ lang thang nhưng lại rất "có giáo dục".'},
     {zh:'这孩子说话有礼貌，一看就很有教养。',py:'Zhè háizi shuōhuà yǒu lǐmào, yí kàn jiù hěn yǒu jiàoyǎng.',vn:'Đứa trẻ này ăn nói lễ phép, nhìn là biết được dạy dỗ tử tế.'},
     {zh:'在公共场所大声打电话，是缺乏教养的表现。',py:'Zài gōnggòng chǎngsuǒ dàshēng dǎ diànhuà, shì quēfá jiàoyǎng de biǎoxiàn.',vn:'Nói điện thoại ầm ĩ ở nơi công cộng là biểu hiện của sự thiếu giáo dục.'}
   ],
   colloFull:[
     {zh:'很有教养',py:'hěn yǒu jiàoyǎng',vn:'rất có giáo dục'},
     {zh:'没有教养',py:'méiyǒu jiàoyǎng',vn:'vô giáo dục'},
     {zh:'缺乏教养',py:'quēfá jiàoyǎng',vn:'thiếu giáo dục'},
     {zh:'家庭教养',py:'jiātíng jiàoyǎng',vn:'sự giáo dục trong gia đình'},
     {zh:'教养子女',py:'jiàoyǎng zǐnǚ',vn:'dạy dỗ con cái'}
   ],
   patterns:[
     {s:'(很) 有 / 没有 + 教养',m:'Có / không có giáo dục'},
     {s:'……是缺乏教养的表现',m:'… là biểu hiện của sự thiếu giáo dục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một người có giáo dục hay không, cứ nhìn cách anh ta đối xử với người phục vụ là biết.',answer:'一个人有没有教养，看他怎么对待服务员就知道了。',answerPy:'Yí ge rén yǒu méiyǒu jiàoyǎng, kàn tā zěnme duìdài fúwùyuán jiù zhīdào le.',
      note:'有没有 + N: câu hỏi chính phản làm chủ ngữ; 对待 = đối xử.',pair:'有没有…… (chính phản)'},
     {promptLang:'vi',prompt:'Anh ấy lớn lên ở nông thôn, rất lễ phép, rất có giáo dục.',answer:'他是在农村长大的，很有礼貌，很有教养。',answerPy:'Tā shì zài nóngcūn zhǎngdà de, hěn yǒu lǐmào, hěn yǒu jiàoyǎng.',
      note:'是……的 nhấn mạnh nơi chốn của việc đã xảy ra (在农村长大).',pair:'是……的'}
   ]},

  {n:6,zh:'懒惰',py:'lǎnduò',pos:'Tính từ',vn:'lười biếng',hv:'lãn đọa',em:'🦥',lesson:1,
   explain:['Lười biếng, không thích làm việc, không chịu khó (sắc thái văn viết hơn 懒).','Trái nghĩa với 勤劳 (bài 1), 勤快; dùng cho người, trong bài nhân hoá cho con mèo.'],
   usage:'很 / 太 + 懒惰; 懒惰 + 的 + N; 既不懒惰，也不……; dùng như danh từ: 克服懒惰.',
   collo:['懒惰的人','既不懒惰','克服懒惰','懒惰成性'],
   ex_zh:'它既不懒惰，也不嘴馋。',ex_py:'Tā jì bù lǎnduò, yě bù zuǐchán.',ex_vn:'Nó không lười biếng, cũng chẳng tham ăn.',
   exList:[
     {zh:'大黄既不懒惰，也不嘴馋，天天趴在窗台上晒太阳。',py:'Dàhuáng jì bù lǎnduò, yě bù zuǐchán, tiāntiān pā zài chuāngtái shang shài tàiyáng.',vn:'Đại Hoàng không lười cũng chẳng tham ăn, ngày ngày nằm dài trên bậu cửa sổ phơi nắng.'},
     {zh:'他不是笨，而是太懒惰了，从来不肯多花一分钟复习。',py:'Tā bú shì bèn, ér shì tài lǎnduò le, cónglái bù kěn duō huā yì fēnzhōng fùxí.',vn:'Cậu ấy không phải dốt mà là quá lười, chưa bao giờ chịu bỏ thêm một phút ôn bài.'},
     {zh:'勤劳能致富，懒惰只会让人越来越穷。',py:'Qínláo néng zhìfù, lǎnduò zhǐ huì ràng rén yuè lái yuè qióng.',vn:'Cần cù thì có thể làm giàu, lười biếng chỉ khiến người ta ngày càng nghèo.'}
   ],
   colloFull:[
     {zh:'懒惰的人',py:'lǎnduò de rén',vn:'người lười biếng'},
     {zh:'既不懒惰',py:'jì bù lǎnduò',vn:'chẳng lười biếng'},
     {zh:'克服懒惰',py:'kèfú lǎnduò',vn:'khắc phục tính lười'},
     {zh:'懒惰成性',py:'lǎnduò chéng xìng',vn:'lười thành tật'},
     {zh:'懒惰的习惯',py:'lǎnduò de xíguàn',vn:'thói lười biếng'}
   ],
   patterns:[
     {s:'既不懒惰，也不……',m:'Không lười, cũng không …'},
     {s:'不是……，而是太懒惰了',m:'Không phải … mà là quá lười'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy không phải không có năng lực mà là quá lười.',answer:'他不是没有能力，而是太懒惰了。',answerPy:'Tā bú shì méiyǒu nénglì, ér shì tài lǎnduò le.',
      note:'不是……而是……: phủ định nguyên nhân sai, khẳng định nguyên nhân đúng.',pair:'不是……而是……'},
     {promptLang:'vi',prompt:'Chỉ cần khắc phục được tính lười, thành tích của em chắc chắn sẽ tiến bộ.',answer:'只要克服了懒惰，你的成绩就一定会提高。',answerPy:'Zhǐyào kèfúle lǎnduò, nǐ de chéngjì jiù yídìng huì tígāo.',
      note:'只要……就……: chỉ cần … thì …; 懒惰 dùng như danh từ làm tân ngữ của 克服.',pair:'只要……就……'}
   ]},

  {n:7,zh:'馋',py:'chán',pos:'Tính từ',vn:'thèm ăn, tham ăn',hv:'sàm',em:'🤤',lesson:1,
   explain:['Thèm ăn, tham ăn — thấy đồ ngon là muốn ăn (hay nói 嘴馋).','Còn nghĩa thèm muốn, ao ước thứ người khác có (眼馋); dùng được cho người và con vật.'],
   usage:'嘴馋 / 很馋; 馋 + 得 + kết quả (馋得流口水); 眼馋; 馋猫 (chỉ người háu ăn).',
   collo:['嘴馋','馋猫','眼馋','馋得流口水'],
   ex_zh:'看着桌上的烤鸭，弟弟馋得直流口水。',ex_py:'Kànzhe zhuō shang de kǎoyā, dìdi chán de zhí liú kǒushuǐ.',ex_vn:'Nhìn con vịt quay trên bàn, em trai thèm đến chảy nước miếng.',
   exList:[
     {zh:'它既不懒惰，也不嘴馋。',py:'Tā jì bù lǎnduò, yě bù zuǐchán.',vn:'Nó chẳng lười, cũng không tham ăn.'},
     {zh:'看着桌上的烤鸭，弟弟馋得直流口水。',py:'Kànzhe zhuō shang de kǎoyā, dìdi chán de zhí liú kǒushuǐ.',vn:'Nhìn con vịt quay trên bàn, em trai thèm đến chảy nước miếng.'},
     {zh:'你这只小馋猫，刚吃完饭又要吃零食了？',py:'Nǐ zhè zhī xiǎo chánmāo, gāng chīwán fàn yòu yào chī língshí le?',vn:'Đồ mèo tham ăn nhà con, vừa ăn cơm xong lại đòi ăn vặt à?'}
   ],
   colloFull:[
     {zh:'嘴馋',py:'zuǐchán',vn:'tham ăn'},
     {zh:'馋猫',py:'chánmāo',vn:'mèo tham ăn (người háu ăn)'},
     {zh:'眼馋',py:'yǎnchán',vn:'thèm thuồng, thèm muốn'},
     {zh:'馋得流口水',py:'chán de liú kǒushuǐ',vn:'thèm chảy nước miếng'},
     {zh:'解馋',py:'jiěchán',vn:'đã cơn thèm'}
   ],
   patterns:[
     {s:'馋 + 得 + kết quả',m:'Thèm đến mức …'},
     {s:'嘴馋 / 眼馋',m:'Tham ăn / thèm muốn (khi thấy người khác có)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món sườn chua ngọt mẹ nấu thơm đến mức cả nhà đều thèm.',answer:'妈妈做的糖醋排骨香得全家人都馋了。',answerPy:'Māma zuò de tángcù páigǔ xiāng de quán jiā rén dōu chán le.',
      note:'Adj + 得 + bổ ngữ trạng thái: thơm đến mức ….',pair:'Adj + 得 + bổ ngữ'},
     {promptLang:'vi',prompt:'Thấy bạn mua điện thoại mới, cậu ấy thèm lắm, nhưng biết nhà không khá giả nên chẳng nói gì.',answer:'看到同学买了新手机，他很眼馋，可是知道家里不富裕，就什么也没说。',answerPy:'Kàndào tóngxué mǎile xīn shǒujī, tā hěn yǎnchán, kěshì zhīdào jiā li bú fùyù, jiù shénme yě méi shuō.',
      note:'什么也没 + V: chẳng … gì cả (đại từ nghi vấn phiếm chỉ).',pair:'什么也没……'}
   ]},

  {n:8,zh:'趴',py:'pā',pos:'Động từ',vn:'nằm sấp, nằm phục',hv:'bát',em:'🐾',lesson:1,
   explain:['Nằm sấp (bụng áp xuống); với động vật là nằm phục xuống.','Còn nghĩa cúi người tựa lên vật gì (趴在桌子上睡觉). Hay đi với 趴在 + nơi.'],
   usage:'趴在 + 地上 / 桌子上 / 窗台上; 趴着 + V; 趴下.',
   collo:['趴在窗台上','趴在桌子上','趴下','趴着睡'],
   ex_zh:'大黄天天趴在窗台上晒太阳。',ex_py:'Dàhuáng tiāntiān pā zài chuāngtái shang shài tàiyáng.',ex_vn:'Ngày nào Đại Hoàng cũng nằm dài trên bậu cửa sổ phơi nắng.',
   exList:[
     {zh:'大黄天天趴在窗台上晒太阳，一副知足常乐的样子。',py:'Dàhuáng tiāntiān pā zài chuāngtái shang shài tàiyáng, yí fù zhīzú-chánglè de yàngzi.',vn:'Ngày nào Đại Hoàng cũng nằm dài trên bậu cửa sổ phơi nắng, ra dáng biết đủ nên luôn vui.'},
     {zh:'他太困了，趴在桌子上就睡着了。',py:'Tā tài kùn le, pā zài zhuōzi shang jiù shuìzháo le.',vn:'Cậu ấy buồn ngủ quá, gục xuống bàn là ngủ luôn.'},
     {zh:'小王压不住火气，突然用拳头打丈夫的肩膀，然后，又把脸趴在他的肩上，哭了起来。',py:'Xiǎo Wáng yā bu zhù huǒqì, tūrán yòng quántou dǎ zhàngfu de jiānbǎng, ránhòu, yòu bǎ liǎn pā zài tā de jiān shang, kūle qǐlái.',vn:'Tiểu Vương không nén được cơn giận, bỗng đấm vào vai chồng, rồi lại gục mặt lên vai anh mà khóc.'}
   ],
   colloFull:[
     {zh:'趴在窗台上',py:'pā zài chuāngtái shang',vn:'nằm trên bậu cửa sổ'},
     {zh:'趴在桌子上',py:'pā zài zhuōzi shang',vn:'gục xuống bàn'},
     {zh:'趴下',py:'pāxià',vn:'nằm sấp xuống'},
     {zh:'趴着睡',py:'pāzhe shuì',vn:'nằm sấp ngủ'},
     {zh:'趴在地上',py:'pā zài dì shang',vn:'nằm rạp xuống đất'}
   ],
   patterns:[
     {s:'趴在 + nơi + (V)',m:'Nằm sấp / gục ở đâu (làm gì)'},
     {s:'趴着 + V',m:'Nằm sấp mà làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe tiếng sấm, con chó liền nằm rạp dưới gầm giường không dám ra.',answer:'一听到打雷，小狗就趴在床底下不敢出来。',answerPy:'Yì tīngdào dǎléi, xiǎogǒu jiù pā zài chuáng dǐxia bù gǎn chūlái.',
      note:'一……就……: vừa … liền …; 趴在 + nơi chốn.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Bác sĩ bảo đừng nằm sấp ngủ, như vậy không tốt cho sức khoẻ.',answer:'医生说别趴着睡觉，这样对身体不好。',answerPy:'Yīshēng shuō bié pāzhe shuìjiào, zhèyàng duì shēntǐ bù hǎo.',
      note:'对……不好: không tốt cho …; V1着 + V2: làm V2 trong tư thế V1.',pair:'对……不好'}
   ]},

  {n:9,zh:'知足常乐',py:'zhīzú-chánglè',pos:'Thành ngữ',vn:'biết đủ thì luôn vui',hv:'tri túc thường lạc',em:'😌',lesson:1,
   explain:['Biết đủ thì luôn vui: bằng lòng với những gì mình có nên lúc nào cũng vui vẻ.','Làm vị ngữ, định ngữ (知足常乐的心态) hoặc tân ngữ (懂得知足常乐).'],
   usage:'一副知足常乐的样子; 知足常乐的心态; 懂得知足常乐.',
   collo:['一副知足常乐的样子','知足常乐的心态','懂得知足常乐','知足常乐的人'],
   ex_zh:'奶奶常说，知足常乐，别总跟别人比。',ex_py:'Nǎinai cháng shuō, zhīzú-chánglè, bié zǒng gēn biérén bǐ.',ex_vn:'Bà thường bảo: biết đủ là vui, đừng lúc nào cũng so với người khác.',
   exList:[
     {zh:'大黄天天趴在窗台上晒太阳，一副知足常乐的样子。',py:'Dàhuáng tiāntiān pā zài chuāngtái shang shài tàiyáng, yí fù zhīzú-chánglè de yàngzi.',vn:'Đại Hoàng ngày ngày nằm trên bậu cửa sổ phơi nắng, ra dáng biết đủ nên luôn vui.'},
     {zh:'奶奶常说，知足常乐，别总跟别人比。',py:'Nǎinai cháng shuō, zhīzú-chánglè, bié zǒng gēn biérén bǐ.',vn:'Bà thường bảo: biết đủ là vui, đừng lúc nào cũng so với người khác.'},
     {zh:'他收入不高，可是有着知足常乐的心态，每天都过得很开心。',py:'Tā shōurù bù gāo, kěshì yǒuzhe zhīzú-chánglè de xīntài, měi tiān dōu guò de hěn kāixīn.',vn:'Thu nhập anh ấy không cao nhưng có tâm thế biết đủ, ngày nào cũng sống rất vui.'}
   ],
   colloFull:[
     {zh:'一副知足常乐的样子',py:'yí fù zhīzú-chánglè de yàngzi',vn:'dáng vẻ biết đủ, vui vẻ'},
     {zh:'知足常乐的心态',py:'zhīzú-chánglè de xīntài',vn:'tâm thế biết đủ'},
     {zh:'懂得知足常乐',py:'dǒngde zhīzú-chánglè',vn:'hiểu rằng biết đủ là vui'},
     {zh:'知足常乐的人',py:'zhīzú-chánglè de rén',vn:'người biết đủ'},
     {zh:'知足者常乐',py:'zhīzú zhě cháng lè',vn:'người biết đủ thì luôn vui'}
   ],
   patterns:[
     {s:'一副 + ……的样子',m:'Ra vẻ, ra dáng …'},
     {s:'有着 + 知足常乐的心态',m:'Có tâm thế biết đủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy nhà không giàu nhưng cả nhà họ đều biết đủ, sống rất vui vẻ.',answer:'他们家虽然不富裕，但全家人都知足常乐，过得很快活。',answerPy:'Tāmen jiā suīrán bú fùyù, dàn quán jiā rén dōu zhīzú-chánglè, guò de hěn kuàihuo.',
      note:'虽然……但……; V + 得 + 很 + Adj: bổ ngữ trạng thái (过得很快活).',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Biết đủ là vui không có nghĩa là không cần cố gắng.',answer:'知足常乐并不意味着不需要努力。',answerPy:'Zhīzú-chánglè bìng bú yìwèizhe bù xūyào nǔlì.',
      note:'并不 + V: nhấn mạnh phủ định (bác bỏ suy nghĩ sai); 意味着 = có nghĩa là.',pair:'并不……'}
   ]},

  {n:10,zh:'恭敬',py:'gōngjìng',pos:'Tính từ',vn:'kính cẩn, cung kính',hv:'cung kính',em:'🙇',lesson:1,
   explain:['Kính cẩn, lễ phép với người trên hoặc khách (cả thái độ lẫn cử chỉ).','Dạng lặp 恭恭敬敬 (AABB) làm trạng ngữ + 地; hay đi với 对……很恭敬.'],
   usage:'对 + người + 很恭敬; 恭恭敬敬地 + V; 恭敬地 + 鞠躬 / 递上 / 站着.',
   collo:['恭恭敬敬地','对长辈很恭敬','恭敬地鞠躬','恭敬地递上'],
   ex_zh:'他恭恭敬敬地向老师鞠了一躬。',ex_py:'Tā gōnggōngjìngjìng de xiàng lǎoshī jūle yì gōng.',ex_vn:'Cậu ấy cung kính cúi chào thầy giáo.',
   exList:[
     {zh:'每次钱小奇出门回来，它都恭恭敬敬地在门口迎接。',py:'Měi cì Qián Xiǎoqí chūmén huílái, tā dōu gōnggōngjìngjìng de zài ménkǒu yíngjiē.',vn:'Mỗi lần Tiền Tiểu Kỳ ra ngoài về, nó đều cung kính ra cửa đón.'},
     {zh:'他恭恭敬敬地向老师鞠了一躬。',py:'Tā gōnggōngjìngjìng de xiàng lǎoshī jūle yì gōng.',vn:'Cậu ấy cung kính cúi chào thầy giáo.'},
     {zh:'这个孩子对长辈一直很恭敬，大家都夸他有教养。',py:'Zhège háizi duì zhǎngbèi yìzhí hěn gōngjìng, dàjiā dōu kuā tā yǒu jiàoyǎng.',vn:'Đứa trẻ này luôn kính trọng người lớn, ai cũng khen cháu có giáo dục.'}
   ],
   colloFull:[
     {zh:'恭恭敬敬地',py:'gōnggōngjìngjìng de',vn:'một cách cung kính'},
     {zh:'对长辈很恭敬',py:'duì zhǎngbèi hěn gōngjìng',vn:'kính trọng người trên'},
     {zh:'恭敬地鞠躬',py:'gōngjìng de jūgōng',vn:'kính cẩn cúi chào'},
     {zh:'恭敬地递上',py:'gōngjìng de dìshàng',vn:'kính cẩn đưa lên'},
     {zh:'恭敬不如从命',py:'gōngjìng bùrú cóngmìng',vn:'cung kính không bằng tuân mệnh (xin nhận lời)'}
   ],
   patterns:[
     {s:'恭恭敬敬地 + V',m:'Kính cẩn làm gì (lặp AABB làm trạng ngữ)'},
     {s:'对 + người + 很恭敬',m:'Kính trọng ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi lần gặp thầy hiệu trưởng, cậu ấy đều cung kính chào hỏi.',answer:'每次见到校长，他都恭恭敬敬地打招呼。',answerPy:'Měi cì jiàndào xiàozhǎng, tā dōu gōnggōngjìngjìng de dǎ zhāohu.',
      note:'每次……都……: lần nào … cũng …; tính từ lặp AABB + 地 làm trạng ngữ.',pair:'每次……都……'},
     {promptLang:'vi',prompt:'Anh ta trước mặt thì kính cẩn với giám đốc, sau lưng lại nói xấu.',answer:'他当面对经理很恭敬，背后却说经理的坏话。',answerPy:'Tā dāngmiàn duì jīnglǐ hěn gōngjìng, bèihòu què shuō jīnglǐ de huàihuà.',
      note:'当面 (bài 1) ↔ 背后; 却 nối hai vế trái ngược.',pair:'……却……'}
   ]},

  {n:11,zh:'君子',py:'jūnzǐ',pos:'Danh từ',vn:'quân tử',hv:'quân tử',em:'🎖️',lesson:1,
   explain:['Người quân tử: người có phẩm chất đạo đức cao, cư xử đàng hoàng (trái với 小人).','Hay gặp: 君子风度, 正人君子, 像个君子似的; tục ngữ 君子一言，驷马难追. Trong bài ví con mèo lịch thiệp như quân tử.'],
   usage:'君子风度; 正人君子; 像个君子(似的); 君子一言，驷马难追.',
   collo:['君子风度','正人君子','像个君子','君子之交'],
   ex_zh:'它都恭恭敬敬地在门口迎接，不失君子风度。',ex_py:'Tā dōu gōnggōngjìngjìng de zài ménkǒu yíngjiē, bù shī jūnzǐ fēngdù.',ex_vn:'Nó đều cung kính ra cửa đón, không mất phong độ quân tử.',
   exList:[
     {zh:'它都恭恭敬敬地在门口迎接，不失君子风度。',py:'Tā dōu gōnggōngjìngjìng de zài ménkǒu yíngjiē, bù shī jūnzǐ fēngdù.',vn:'Nó đều cung kính ra cửa đón, không mất phong độ quân tử.'},
     {zh:'虽然它没有主人，但看起来很有教养，像个君子似的。',py:'Suīrán tā méiyǒu zhǔrén, dàn kàn qǐlái hěn yǒu jiàoyǎng, xiàng ge jūnzǐ shìde.',vn:'Tuy nó không có chủ nhưng trông rất có giáo dục, cứ như một quân tử.'},
     {zh:'君子一言，驷马难追，答应你的事我一定做到。',py:'Jūnzǐ yì yán, sìmǎ nán zhuī, dāying nǐ de shì wǒ yídìng zuòdào.',vn:'Lời quân tử nói ra như đinh đóng cột, việc đã hứa với cậu tớ nhất định làm được.'}
   ],
   colloFull:[
     {zh:'君子风度',py:'jūnzǐ fēngdù',vn:'phong độ quân tử'},
     {zh:'正人君子',py:'zhèngrén jūnzǐ',vn:'chính nhân quân tử'},
     {zh:'像个君子',py:'xiàng ge jūnzǐ',vn:'như một quân tử'},
     {zh:'君子之交',py:'jūnzǐ zhī jiāo',vn:'tình bạn quân tử'},
     {zh:'君子一言，驷马难追',py:'jūnzǐ yì yán, sìmǎ nán zhuī',vn:'lời quân tử như đinh đóng cột'}
   ],
   patterns:[
     {s:'像个君子似的',m:'Cứ như một quân tử'},
     {s:'不失 + 君子风度',m:'Không mất phong độ quân tử'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù thua trận, cậu ấy vẫn bắt tay đối thủ, rất có phong độ quân tử.',answer:'即使输了比赛，他也跟对手握手，很有君子风度。',answerPy:'Jíshǐ shūle bǐsài, tā yě gēn duìshǒu wòshǒu, hěn yǒu jūnzǐ fēngdù.',
      note:'即使……也……: cho dù … cũng …; 风度 ôn bài 1.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Anh ta trông như chính nhân quân tử, không ngờ lại lừa cả bạn bè.',answer:'他看起来像个正人君子，没想到竟然欺骗朋友。',answerPy:'Tā kàn qǐlái xiàng ge zhèngrén jūnzǐ, méi xiǎngdào jìngrán qīpiàn péngyou.',
      note:'没想到……竟然……: không ngờ … lại …; 欺骗 ôn bài 3.',pair:'没想到……竟然……'}
   ]},

  {n:12,zh:'嗅觉',py:'xiùjué',pos:'Danh từ',vn:'khứu giác',hv:'khứu giác',em:'👃',lesson:1,
   explain:['Khứu giác: cảm giác về mùi do mũi nhận biết.','Hay đi với 灵敏 / 敏锐; nghĩa bóng: sự nhạy bén (商业嗅觉, 新闻嗅觉 = khả năng "đánh hơi").'],
   usage:'嗅觉 + 灵敏 / 敏锐 / 迟钝; 狗的嗅觉; 失去嗅觉; 商业嗅觉.',
   collo:['嗅觉灵敏','失去嗅觉','商业嗅觉','新闻嗅觉'],
   ex_zh:'白白是个男孩儿，嗅觉灵敏，动作敏捷。',ex_py:'Báibái shì ge nánháir, xiùjué língmǐn, dòngzuò mǐnjié.',ex_vn:'Bạch Bạch là "cậu con trai", khứu giác nhạy, động tác nhanh nhẹn.',
   exList:[
     {zh:'白白是个男孩儿，嗅觉灵敏，动作敏捷。',py:'Báibái shì ge nánháir, xiùjué língmǐn, dòngzuò mǐnjié.',vn:'Bạch Bạch là "cậu con trai", khứu giác nhạy, động tác nhanh nhẹn.'},
     {zh:'狗的嗅觉比人灵敏得多，所以常被用来寻找失踪的人。',py:'Gǒu de xiùjué bǐ rén língmǐn de duō, suǒyǐ cháng bèi yònglái xúnzhǎo shīzōng de rén.',vn:'Khứu giác của chó nhạy hơn người nhiều, nên thường được dùng để tìm người mất tích.'},
     {zh:'感冒的时候，我几乎失去了嗅觉，吃什么都没味道。',py:'Gǎnmào de shíhou, wǒ jīhū shīqùle xiùjué, chī shénme dōu méi wèidao.',vn:'Lúc bị cảm, tôi gần như mất khứu giác, ăn gì cũng chẳng thấy mùi vị.'}
   ],
   colloFull:[
     {zh:'嗅觉灵敏',py:'xiùjué língmǐn',vn:'khứu giác nhạy'},
     {zh:'失去嗅觉',py:'shīqù xiùjué',vn:'mất khứu giác'},
     {zh:'商业嗅觉',py:'shāngyè xiùjué',vn:'sự nhạy bén kinh doanh'},
     {zh:'新闻嗅觉',py:'xīnwén xiùjué',vn:'khả năng "đánh hơi" tin tức'},
     {zh:'嗅觉迟钝',py:'xiùjué chídùn',vn:'khứu giác kém nhạy'}
   ],
   patterns:[
     {s:'A 的嗅觉 + 比 + B + 灵敏得多',m:'Khứu giác của A nhạy hơn B nhiều'},
     {s:'有 + 灵敏的 + 商业 / 新闻 + 嗅觉',m:'Nhạy bén (nghĩa bóng)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khứu giác của mèo nhạy đến mức cách mấy phòng vẫn ngửi thấy mùi cá.',answer:'猫的嗅觉灵敏得隔着几个房间都能闻到鱼的味道。',answerPy:'Māo de xiùjué língmǐn de gézhe jǐ ge fángjiān dōu néng wéndào yú de wèidao.',
      note:'Adj + 得 + bổ ngữ mức độ (灵敏得……都能……).',pair:'Adj + 得 + bổ ngữ'},
     {promptLang:'vi',prompt:'Chính vì có sự nhạy bén kinh doanh nên anh ấy mới thành công.',answer:'正是因为有灵敏的商业嗅觉，他才取得了成功。',answerPy:'Zhèng shì yīnwèi yǒu língmǐn de shāngyè xiùjué, tā cái qǔdéle chénggōng.',
      note:'正是因为……才……: chính vì … mới … (nhấn mạnh nguyên nhân).',pair:'正是因为……才……'}
   ]},

  {n:13,zh:'灵敏',py:'língmǐn',pos:'Tính từ',vn:'nhạy bén, nhạy',hv:'linh mẫn',em:'📡',lesson:1,
   explain:['Phản ứng nhanh và chính xác trước kích thích bên ngoài (giác quan, máy móc, thiết bị).','Hay đi với 嗅觉 / 反应 / 仪器 / 耳朵; khác 敏捷 (động tác, tư duy nhanh nhẹn) — xem phần Phân biệt từ.'],
   usage:'嗅觉 / 反应 / 仪器 + 灵敏; 灵敏度 (độ nhạy); 非常 / 十分 + 灵敏.',
   collo:['嗅觉灵敏','反应灵敏','灵敏度','仪器灵敏'],
   ex_zh:'这台仪器非常灵敏，一点儿微小的变化都能测出来。',ex_py:'Zhè tái yíqì fēicháng língmǐn, yìdiǎnr wēixiǎo de biànhuà dōu néng cè chūlái.',ex_vn:'Chiếc máy này rất nhạy, chút thay đổi nhỏ nhất cũng đo được.',
   exList:[
     {zh:'白白嗅觉灵敏，动作敏捷，快活而好动。',py:'Báibái xiùjué língmǐn, dòngzuò mǐnjié, kuàihuo ér hàodòng.',vn:'Bạch Bạch khứu giác nhạy, động tác nhanh nhẹn, vui vẻ và hiếu động.'},
     {zh:'这台仪器非常灵敏，一点儿微小的变化都能测出来。',py:'Zhè tái yíqì fēicháng língmǐn, yìdiǎnr wēixiǎo de biànhuà dōu néng cè chūlái.',vn:'Chiếc máy này rất nhạy, chút thay đổi nhỏ nhất cũng đo được.'},
     {zh:'守门员反应很灵敏，球一过来就接住了。',py:'Shǒuményuán fǎnyìng hěn língmǐn, qiú yí guòlái jiù jiēzhù le.',vn:'Thủ môn phản xạ rất nhạy, bóng vừa tới là bắt được ngay.'}
   ],
   colloFull:[
     {zh:'嗅觉灵敏',py:'xiùjué língmǐn',vn:'khứu giác nhạy'},
     {zh:'反应灵敏',py:'fǎnyìng língmǐn',vn:'phản xạ nhạy'},
     {zh:'灵敏度',py:'língmǐndù',vn:'độ nhạy'},
     {zh:'仪器灵敏',py:'yíqì língmǐn',vn:'máy đo nhạy'},
     {zh:'耳朵灵敏',py:'ěrduo língmǐn',vn:'tai thính'}
   ],
   patterns:[
     {s:'N (giác quan / máy) + 灵敏',m:'… nhạy'},
     {s:'灵敏得 + 连……都……',m:'Nhạy đến mức ngay cả … cũng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc camera này nhạy đến nỗi một chút động tĩnh cũng ghi lại được.',answer:'这个摄像头灵敏得连一点儿动静都能录下来。',answerPy:'Zhège shèxiàngtóu língmǐn de lián yìdiǎnr dòngjing dōu néng lù xiàlái.',
      note:'连……都……: ngay cả … cũng …; 录下来: bổ ngữ xu hướng chỉ kết quả lưu lại.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Người già phản ứng không nhạy bằng người trẻ, lái xe phải cẩn thận hơn.',answer:'老人的反应没有年轻人那么灵敏，开车要更小心。',answerPy:'Lǎorén de fǎnyìng méiyǒu niánqīngrén nàme língmǐn, kāichē yào gèng xiǎoxīn.',
      note:'A 没有 B 那么 + Adj: A không … bằng B.',pair:'A 没有 B 那么……'}
   ]},

  {n:14,zh:'敏捷',py:'mǐnjié',pos:'Tính từ',vn:'nhanh nhẹn',hv:'mẫn tiệp',em:'⚡',lesson:1,
   explain:['(Động tác, tư duy) nhanh nhẹn, linh hoạt.','Hay đi với 动作 / 身手 / 思维 / 行动; khác 灵敏 (giác quan, máy móc nhạy).'],
   usage:'动作 / 思维 / 行动 + 敏捷; 敏捷地 + V; 身手敏捷.',
   collo:['动作敏捷','思维敏捷','身手敏捷','敏捷地跳'],
   ex_zh:'猫动作敏捷，一下子就跳上了柜子。',ex_py:'Māo dòngzuò mǐnjié, yíxiàzi jiù tiàoshàngle guìzi.',ex_vn:'Mèo động tác nhanh nhẹn, thoắt cái đã nhảy lên tủ.',
   exList:[
     {zh:'白白是个男孩儿，嗅觉灵敏，动作敏捷。',py:'Báibái shì ge nánháir, xiùjué língmǐn, dòngzuò mǐnjié.',vn:'Bạch Bạch là "cậu con trai", khứu giác nhạy, động tác nhanh nhẹn.'},
     {zh:'猫动作敏捷，一下子就跳上了柜子。',py:'Māo dòngzuò mǐnjié, yíxiàzi jiù tiàoshàngle guìzi.',vn:'Mèo động tác nhanh nhẹn, thoắt cái đã nhảy lên tủ.'},
     {zh:'这位老教授八十多岁了，思维依然很敏捷。',py:'Zhè wèi lǎo jiàoshòu bāshí duō suì le, sīwéi yīrán hěn mǐnjié.',vn:'Vị giáo sư già đã hơn tám mươi tuổi mà tư duy vẫn rất nhanh nhạy.'}
   ],
   colloFull:[
     {zh:'动作敏捷',py:'dòngzuò mǐnjié',vn:'động tác nhanh nhẹn'},
     {zh:'思维敏捷',py:'sīwéi mǐnjié',vn:'tư duy nhanh nhạy'},
     {zh:'身手敏捷',py:'shēnshǒu mǐnjié',vn:'thân thủ nhanh nhẹn'},
     {zh:'敏捷地跳',py:'mǐnjié de tiào',vn:'nhảy thoăn thoắt'},
     {zh:'行动敏捷',py:'xíngdòng mǐnjié',vn:'hành động nhanh nhẹn'}
   ],
   patterns:[
     {s:'动作 / 思维 + 敏捷',m:'Động tác / tư duy nhanh nhẹn'},
     {s:'敏捷地 + V',m:'Nhanh nhẹn làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tuy đã bảy mươi tuổi nhưng động tác vẫn nhanh nhẹn như thanh niên.',answer:'爷爷虽然七十岁了，但动作仍然像年轻人一样敏捷。',answerPy:'Yéye suīrán qīshí suì le, dàn dòngzuò réngrán xiàng niánqīngrén yíyàng mǐnjié.',
      note:'像……一样 + Adj: … như …; 仍然 = vẫn.',pair:'像……一样'},
     {promptLang:'vi',prompt:'Con mèo nhanh nhẹn nhảy qua tường, trong nháy mắt đã không thấy đâu.',answer:'那只猫敏捷地跳过了墙，转眼就不见了。',answerPy:'Nà zhī māo mǐnjié de tiàoguòle qiáng, zhuǎnyǎn jiù bú jiàn le.',
      note:'Adj + 地 + V; 跳过 = bổ ngữ xu hướng (nhảy qua).',pair:'V + 过 (bổ ngữ xu hướng)'}
   ]},

  {n:15,zh:'快活',py:'kuàihuo',pos:'Tính từ',vn:'vui vẻ, sung sướng',hv:'khoái hoạt',em:'😸',lesson:1,
   explain:['Vui vẻ, sung sướng, thoải mái (sắc thái khẩu ngữ).','Hay làm vị ngữ (很快活), bổ ngữ (过得很快活); có dạng lặp 快快活活.'],
   usage:'快活而好动; 过得很快活; 快快活活地 + V; 日子快活.',
   collo:['快活而好动','过得很快活','快快活活地','快活的日子'],
   ex_zh:'退休以后，爷爷每天养花钓鱼，日子过得很快活。',ex_py:'Tuìxiū yǐhòu, yéye měi tiān yǎng huā diào yú, rìzi guò de hěn kuàihuo.',ex_vn:'Sau khi nghỉ hưu, ngày nào ông cũng trồng hoa câu cá, sống rất vui vẻ.',
   exList:[
     {zh:'白白动作敏捷，快活而好动。',py:'Báibái dòngzuò mǐnjié, kuàihuo ér hàodòng.',vn:'Bạch Bạch động tác nhanh nhẹn, vui vẻ và hiếu động.'},
     {zh:'退休以后，爷爷每天养花钓鱼，日子过得很快活。',py:'Tuìxiū yǐhòu, yéye měi tiān yǎng huā diào yú, rìzi guò de hěn kuàihuo.',vn:'Sau khi nghỉ hưu, ngày nào ông cũng trồng hoa câu cá, sống rất vui vẻ.'},
     {zh:'放假了，孩子们快快活活地在院子里玩儿。',py:'Fàngjià le, háizimen kuàikuài-huóhuó de zài yuànzi li wánr.',vn:'Được nghỉ rồi, lũ trẻ vui vẻ chơi đùa trong sân.'}
   ],
   colloFull:[
     {zh:'快活而好动',py:'kuàihuo ér hàodòng',vn:'vui vẻ và hiếu động'},
     {zh:'过得很快活',py:'guò de hěn kuàihuo',vn:'sống rất vui vẻ'},
     {zh:'快快活活地',py:'kuàikuài-huóhuó de',vn:'vui vui vẻ vẻ'},
     {zh:'快活的日子',py:'kuàihuo de rìzi',vn:'những ngày vui vẻ'},
     {zh:'心里快活',py:'xīnli kuàihuo',vn:'trong lòng vui sướng'}
   ],
   patterns:[
     {s:'Adj + 而 + Adj (快活而好动)',m:'… và … (而 nối hai tính từ, văn viết)'},
     {s:'V + 得 + 很快活',m:'Làm gì / sống rất vui vẻ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi nuôi con chó con, ông nội ngày nào cũng vui hơn hẳn.',answer:'自从养了小狗，爷爷每天都快活多了。',answerPy:'Zìcóng yǎngle xiǎogǒu, yéye měi tiān dōu kuàihuo duō le.',
      note:'Adj + 多了: … hơn hẳn (so với trước).',pair:'Adj + 多了'},
     {promptLang:'vi',prompt:'Thi xong, chúng tôi vui vẻ rủ nhau đi xem một bộ phim.',answer:'考完试以后，我们快快活活地去看了一场电影。',answerPy:'Kǎowán shì yǐhòu, wǒmen kuàikuài-huóhuó de qù kànle yì chǎng diànyǐng.',
      note:'……以后: sau khi …; tính từ lặp AABB + 地 làm trạng ngữ.',pair:'……以后'}
   ]},

  {n:16,zh:'扑',py:'pū',pos:'Động từ',vn:'bổ nhào, vồ, lao tới',hv:'phác',em:'🐈‍⬛',lesson:1,
   explain:['Lao mạnh thân mình về phía trước, bổ nhào vào, vồ lấy.','Hay đi với bổ ngữ xu hướng: 扑上来, 扑过来, 扑向, 扑到……怀里; còn nghĩa (mùi) xộc vào: 香味扑鼻.'],
   usage:'扑 + 上来 / 过来 / 过去; 扑向 + đối tượng; 扑到 + 怀里 / 身上; 扑鼻 (而来).',
   collo:['扑上来','扑过来','扑到怀里','香味扑鼻'],
   ex_zh:'孩子一见到妈妈，就扑到了她的怀里。',ex_py:'Háizi yí jiàndào māma, jiù pūdàole tā de huái li.',ex_vn:'Đứa bé vừa thấy mẹ đã nhào vào lòng mẹ.',
   exList:[
     {zh:'钱小奇一回家，它就扑上来，亲热地撞主人的腿。',py:'Qián Xiǎoqí yì huí jiā, tā jiù pū shànglái, qīnrè de zhuàng zhǔrén de tuǐ.',vn:'Tiền Tiểu Kỳ vừa về nhà, nó đã nhào tới, thân thiết cọ vào chân chủ.'},
     {zh:'孩子一见到妈妈，就扑到了她的怀里。',py:'Háizi yí jiàndào māma, jiù pūdàole tā de huái li.',vn:'Đứa bé vừa thấy mẹ đã nhào vào lòng mẹ.'},
     {zh:'一走进厨房，饭菜的香味就扑鼻而来。',py:'Yì zǒujìn chúfáng, fàncài de xiāngwèi jiù pūbí ér lái.',vn:'Vừa bước vào bếp, mùi thơm của cơm canh đã xộc vào mũi.'}
   ],
   colloFull:[
     {zh:'扑上来',py:'pū shànglái',vn:'nhào tới'},
     {zh:'扑过来',py:'pū guòlái',vn:'lao tới'},
     {zh:'扑到怀里',py:'pūdào huái li',vn:'nhào vào lòng'},
     {zh:'香味扑鼻',py:'xiāngwèi pūbí',vn:'mùi thơm xộc vào mũi'},
     {zh:'扑向',py:'pūxiàng',vn:'lao về phía'}
   ],
   patterns:[
     {s:'扑 + 上来 / 过来',m:'Nhào tới (bổ ngữ xu hướng)'},
     {s:'扑到 + ……怀里',m:'Nhào vào lòng ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi vừa mở cửa, con chó liền nhào tới, mừng rỡ vẫy đuôi.',answer:'我刚一开门，小狗就扑过来，高兴地摇着尾巴。',answerPy:'Wǒ gāng yì kāimén, xiǎogǒu jiù pū guòlái, gāoxìng de yáozhe wěiba.',
      note:'(刚)一……就……: vừa … liền …; 扑过来 = bổ ngữ xu hướng hướng về người nói.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Con mèo lao về phía con chuột, nhưng vẫn để nó chạy thoát.',answer:'猫向老鼠扑过去，可还是让它跑掉了。',answerPy:'Māo xiàng lǎoshǔ pū guòqù, kě háishi ràng tā pǎodiào le.',
      note:'向 + đối tượng + V: hướng về …; 跑掉 = chạy mất.',pair:'向 + N + V'}
   ]},

  {n:17,zh:'亲热',py:'qīnrè',pos:'Tính từ',vn:'thân mật, thắm thiết',hv:'thân nhiệt',em:'🤗',lesson:1,
   explain:['Thân mật, thân thiết, nhiệt tình — thể hiện ra bằng lời nói, cử chỉ.','Hay làm trạng ngữ (亲热地 + V), dạng lặp 亲亲热热. Chú ý: không phải "thân nhiệt" (nhiệt độ cơ thể = 体温).'],
   usage:'亲热地 + 叫 / 拉着 / 撞 / 跟着; 对 + người + 很亲热; 亲亲热热.',
   collo:['亲热地叫','亲热地拉着','显得很亲热','亲热劲儿'],
   ex_zh:'一见面，她就亲热地拉着我的手问长问短。',ex_py:'Yí jiànmiàn, tā jiù qīnrè de lāzhe wǒ de shǒu wèncháng-wènduǎn.',ex_vn:'Vừa gặp mặt, cô ấy đã thân mật nắm tay tôi hỏi han đủ điều.',
   exList:[
     {zh:'它就扑上来，亲热地撞主人的腿。',py:'Tā jiù pū shànglái, qīnrè de zhuàng zhǔrén de tuǐ.',vn:'Nó liền nhào tới, thân thiết cọ vào chân chủ.'},
     {zh:'一见面，她就亲热地拉着我的手问长问短。',py:'Yí jiànmiàn, tā jiù qīnrè de lāzhe wǒ de shǒu wèncháng-wènduǎn.',vn:'Vừa gặp mặt, cô ấy đã thân mật nắm tay tôi hỏi han đủ điều.'},
     {zh:'看见我，那只小狗亲热地跟在我身边。',py:'Kànjiàn wǒ, nà zhī xiǎogǒu qīnrè de gēn zài wǒ shēnbiān.',vn:'Thấy tôi, con chó nhỏ quấn quýt đi theo bên cạnh.'}
   ],
   colloFull:[
     {zh:'亲热地叫',py:'qīnrè de jiào',vn:'gọi thân mật'},
     {zh:'亲热地拉着',py:'qīnrè de lāzhe',vn:'thân mật nắm lấy'},
     {zh:'显得很亲热',py:'xiǎnde hěn qīnrè',vn:'tỏ ra rất thân mật'},
     {zh:'亲热劲儿',py:'qīnrè jìnr',vn:'vẻ thân thiết'},
     {zh:'亲亲热热',py:'qīnqīn-rèrè',vn:'thân thân mật mật'}
   ],
   patterns:[
     {s:'亲热地 + V',m:'Thân mật làm gì'},
     {s:'对 + người + 很亲热',m:'Rất thân mật với ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai người trước mặt người khác thì rất thân mật, thật ra quan hệ chẳng tốt chút nào.',answer:'他们俩在别人面前很亲热，其实关系并不好。',answerPy:'Tāmen liǎ zài biérén miànqián hěn qīnrè, qíshí guānxi bìng bù hǎo.',
      note:'其实 = thật ra (sự thật trái với vẻ ngoài); 并不 nhấn mạnh phủ định.',pair:'其实……'},
     {promptLang:'vi',prompt:'Tuy là lần đầu gặp mặt, bà vẫn thân mật gọi tôi là "cháu ngoan".',answer:'虽然是第一次见面，奶奶还是亲热地叫我“好孩子”。',answerPy:'Suīrán shì dì-yī cì jiànmiàn, nǎinai háishi qīnrè de jiào wǒ "hǎo háizi".',
      note:'虽然……还是……: tuy … vẫn ….',pair:'虽然……还是……'}
   ]},

  {n:18,zh:'统统',py:'tǒngtǒng',pos:'Phó từ',vn:'toàn bộ, tất cả',hv:'thống thống',em:'📦',lesson:1,
   explain:['Phó từ: hành động bao trùm toàn bộ đối tượng, không sót cái nào (= 毫无例外地, 一个不剩地). Dùng nhiều trong khẩu ngữ; cũng nói 通通.','Đứng trước động từ; đối tượng thường được nêu ra trước (bằng 把 hoặc làm chủ ngữ) — xem điểm ngữ pháp 1.'],
   usage:'把 + đối tượng + 统统 + V; đối tượng (chủ ngữ) + 统统 + V / 不……; 统统 + 与……无缘.',
   collo:['统统闻一遍','统统拿走','统统卖掉','统统不要'],
   ex_zh:'这回我也想把放假的时间统统用来打工。',ex_py:'Zhè huí wǒ yě xiǎng bǎ fàngjià de shíjiān tǒngtǒng yònglái dǎgōng.',ex_vn:'Lần này tôi cũng muốn dùng hết thời gian nghỉ để đi làm thêm.',
   exList:[
     {zh:'它还要把钱小奇和他带回来的东西统统闻一遍。',py:'Tā hái yào bǎ Qián Xiǎoqí hé tā dài huílái de dōngxi tǒngtǒng wén yí biàn.',vn:'Nó còn phải ngửi một lượt hết cả Tiền Tiểu Kỳ lẫn đồ anh mang về.'},
     {zh:'我把随身携带着的DV小摄像机、录音机以及照相机统统从包里取了出来。',py:'Wǒ bǎ suíshēn xiédàizhe de DV xiǎo shèxiàngjī, lùyīnjī yǐjí zhàoxiàngjī tǒngtǒng cóng bāo li qǔle chūlái.',vn:'Tôi lấy hết máy quay DV nhỏ, máy ghi âm và máy ảnh mang theo người ra khỏi túi.'},
     {zh:'这回我也想把放假的时间统统用来打工。',py:'Zhè huí wǒ yě xiǎng bǎ fàngjià de shíjiān tǒngtǒng yònglái dǎgōng.',vn:'Lần này tôi cũng muốn dùng hết thời gian nghỉ để đi làm thêm.'}
   ],
   colloFull:[
     {zh:'统统闻一遍',py:'tǒngtǒng wén yí biàn',vn:'ngửi hết một lượt'},
     {zh:'统统拿走',py:'tǒngtǒng názǒu',vn:'lấy đi hết'},
     {zh:'统统卖掉',py:'tǒngtǒng màidiào',vn:'bán sạch'},
     {zh:'统统不要',py:'tǒngtǒng bú yào',vn:'không cần tất cả'},
     {zh:'统统与他无缘',py:'tǒngtǒng yǔ tā wúyuán',vn:'đều chẳng dính dáng gì tới anh ấy'}
   ],
   patterns:[
     {s:'把 + N + 统统 + V',m:'Làm … toàn bộ N, không sót'},
     {s:'N + 统统 + V / 不……',m:'N tất cả đều …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi chuyển nhà, cô ấy đem hết quần áo cũ tặng cho người khác.',answer:'搬家之前，她把旧衣服统统送给了别人。',answerPy:'Bānjiā zhīqián, tā bǎ jiù yīfu tǒngtǒng sònggěile biérén.',
      note:'Câu 把: 把 + tân ngữ + 统统 + V + 给 + người; 统统 đứng sau cụm 把, trước động từ.',pair:'Câu 把'},
     {promptLang:'vi',prompt:'Mấy chiếc bánh trên bàn bị em trai tôi ăn sạch rồi.',answer:'桌子上的几块蛋糕统统被弟弟吃光了。',answerPy:'Zhuōzi shang de jǐ kuài dàngāo tǒngtǒng bèi dìdi chīguāng le.',
      note:'Câu 被: N + 统统 + 被 + người + V + 光; 统统 đứng trước 被.',pair:'Câu 被'}
   ]},

  {n:19,zh:'迷人',py:'mírén',pos:'Tính từ',vn:'đẹp, có sức quyến rũ',hv:'mê nhân',em:'✨',lesson:1,
   explain:['Có sức hấp dẫn, làm người ta say mê (cảnh sắc, nụ cười, giọng hát, con người).','Hay đi với 风景 / 景色 / 微笑 / 夜景; có thể làm bổ ngữ: 梳理得漂亮而迷人.'],
   usage:'迷人的 + 风景 / 微笑 / 声音; V得 + 漂亮而迷人; 十分迷人; 美得迷人.',
   collo:['迷人的风景','迷人的微笑','漂亮而迷人','十分迷人'],
   ex_zh:'下龙湾的风景十分迷人，每年吸引着大量游客。',ex_py:'Xiàlóng Wān de fēngjǐng shífēn mírén, měi nián xīyǐnzhe dàliàng yóukè.',ex_vn:'Phong cảnh vịnh Hạ Long vô cùng quyến rũ, năm nào cũng thu hút rất nhiều du khách.',
   exList:[
     {zh:'喜儿每天都在整理自己的毛发，把自己梳理得漂亮而迷人。',py:'Xǐ\'ér měi tiān dōu zài zhěnglǐ zìjǐ de máofà, bǎ zìjǐ shūlǐ de piàoliang ér mírén.',vn:'Hỷ Nhi ngày nào cũng chải chuốt bộ lông, sửa soạn cho mình thật xinh đẹp, quyến rũ.'},
     {zh:'下龙湾的风景十分迷人，每年吸引着大量游客。',py:'Xiàlóng Wān de fēngjǐng shífēn mírén, měi nián xīyǐnzhe dàliàng yóukè.',vn:'Phong cảnh vịnh Hạ Long vô cùng quyến rũ, năm nào cũng thu hút rất nhiều du khách.'},
     {zh:'她那迷人的微笑让人一见难忘。',py:'Tā nà mírén de wēixiào ràng rén yí jiàn nán wàng.',vn:'Nụ cười quyến rũ của cô ấy khiến người ta gặp một lần là khó quên.'}
   ],
   colloFull:[
     {zh:'迷人的风景',py:'mírén de fēngjǐng',vn:'phong cảnh quyến rũ'},
     {zh:'迷人的微笑',py:'mírén de wēixiào',vn:'nụ cười quyến rũ'},
     {zh:'漂亮而迷人',py:'piàoliang ér mírén',vn:'xinh đẹp mà quyến rũ'},
     {zh:'十分迷人',py:'shífēn mírén',vn:'vô cùng cuốn hút'},
     {zh:'迷人的夜景',py:'mírén de yèjǐng',vn:'cảnh đêm mê hoặc'}
   ],
   patterns:[
     {s:'迷人的 + N',m:'… quyến rũ, cuốn hút'},
     {s:'把 + A + V得 + 漂亮而迷人',m:'Làm cho A xinh đẹp, quyến rũ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồ Tây lúc hoàng hôn đẹp mê người, khiến chúng tôi chẳng nỡ rời đi.',answer:'黄昏时的西湖美得迷人，让我们舍不得离开。',answerPy:'Huánghūn shí de Xī Hú měi de mírén, ràng wǒmen shěbude líkāi.',
      note:'Câu kiêm ngữ 让 + người + V; 舍不得 = không nỡ.',pair:'让 + người + V'},
     {promptLang:'vi',prompt:'Ở đây không chỉ phong cảnh quyến rũ mà con người cũng rất nhiệt tình.',answer:'这里不仅风景迷人，而且人也很热情。',answerPy:'Zhèlǐ bùjǐn fēngjǐng mírén, érqiě rén yě hěn rèqíng.',
      note:'不仅……而且……: không chỉ … mà còn ….',pair:'不仅……而且……'}
   ]},

  {n:20,zh:'模范',py:'mófàn',pos:'Tính từ',vn:'mẫu mực, gương mẫu',hv:'mô phạm',em:'🏅',lesson:1,
   explain:['Tính từ: đáng làm gương, mẫu mực — đứng trước danh từ chỉ người, đơn vị (模范饲养员, 模范丈夫).','Danh từ: người gương mẫu, tấm gương (劳动模范 = chiến sĩ thi đua).'],
   usage:'模范 + N (người / đơn vị): 模范饲养员, 模范学生, 模范家庭; 劳动模范; 起模范作用.',
   collo:['模范饲养员','劳动模范','模范作用','模范丈夫'],
   ex_zh:'钱小奇是个模范饲养员。',ex_py:'Qián Xiǎoqí shì ge mófàn sìyǎngyuán.',ex_vn:'Tiền Tiểu Kỳ là một "người nuôi mèo mẫu mực".',
   exList:[
     {zh:'钱小奇是个模范饲养员，每天早起第一件事就是伺候猫。',py:'Qián Xiǎoqí shì ge mófàn sìyǎngyuán, měi tiān zǎo qǐ dì-yī jiàn shì jiù shì cìhou māo.',vn:'Tiền Tiểu Kỳ là người nuôi mèo mẫu mực, sáng nào dậy việc đầu tiên cũng là chăm mèo.'},
     {zh:'她爷爷年轻时被评为全国劳动模范。',py:'Tā yéye niánqīng shí bèi píngwéi quánguó láodòng mófàn.',vn:'Ông cô ấy hồi trẻ được bình chọn là chiến sĩ thi đua toàn quốc.'},
     {zh:'班长在学习上一直起着模范作用。',py:'Bānzhǎng zài xuéxí shang yìzhí qǐzhe mófàn zuòyòng.',vn:'Lớp trưởng luôn làm gương trong học tập.'}
   ],
   colloFull:[
     {zh:'模范饲养员',py:'mófàn sìyǎngyuán',vn:'người chăm nuôi mẫu mực'},
     {zh:'劳动模范',py:'láodòng mófàn',vn:'chiến sĩ thi đua'},
     {zh:'模范作用',py:'mófàn zuòyòng',vn:'vai trò gương mẫu'},
     {zh:'模范丈夫',py:'mófàn zhàngfu',vn:'người chồng mẫu mực'},
     {zh:'模范学生',py:'mófàn xuésheng',vn:'học sinh gương mẫu'}
   ],
   patterns:[
     {s:'模范 + N (người)',m:'… mẫu mực, gương mẫu'},
     {s:'起(着) + 模范作用',m:'Đóng vai trò làm gương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Là lớp trưởng, cậu ấy phải làm gương về mọi mặt.',answer:'作为班长，他在各方面都要起模范作用。',answerPy:'Zuòwéi bānzhǎng, tā zài gè fāngmiàn dōu yào qǐ mófàn zuòyòng.',
      note:'作为 + thân phận: với tư cách là …; 在……方面: về mặt ….',pair:'作为……'},
     {promptLang:'vi',prompt:'Anh ấy không chỉ là nhân viên gương mẫu mà còn là người chồng mẫu mực.',answer:'他不仅是模范员工，还是模范丈夫。',answerPy:'Tā bùjǐn shì mófàn yuángōng, hái shì mófàn zhàngfu.',
      note:'不仅……还……: không chỉ … mà còn ….',pair:'不仅……还……'}
   ]},

  {n:21,zh:'饲养',py:'sìyǎng',pos:'Động từ',vn:'chăn nuôi, nuôi',hv:'tự dưỡng',em:'🥣',lesson:1,
   explain:['Nuôi động vật: cho ăn, chăm sóc động vật, gia súc, gia cầm.','Văn viết hơn 养; tân ngữ chỉ là động vật (饲养家禽, 饲养宠物), không dùng cho người hay cây. 饲养员 = người chăm nuôi động vật.'],
   usage:'饲养 + động vật; 饲养员; 人工饲养; 饲养方法 / 技术.',
   collo:['饲养宠物','饲养员','人工饲养','饲养家禽'],
   ex_zh:'我们人类一旦决定饲养一种动物，就要对它负责到底。',ex_py:'Wǒmen rénlèi yídàn juédìng sìyǎng yì zhǒng dòngwù, jiù yào duì tā fùzé dàodǐ.',ex_vn:'Con người chúng ta một khi đã quyết định nuôi một con vật thì phải có trách nhiệm với nó đến cùng.',
   exList:[
     {zh:'动物园的饲养员每天都要给熊猫准备新鲜的竹子。',py:'Dòngwùyuán de sìyǎngyuán měi tiān dōu yào gěi xióngmāo zhǔnbèi xīnxiān de zhúzi.',vn:'Người chăm thú ở vườn thú ngày nào cũng phải chuẩn bị tre tươi cho gấu trúc.'},
     {zh:'我们人类一旦决定饲养一种动物，就要对它负责到底。',py:'Wǒmen rénlèi yídàn juédìng sìyǎng yì zhǒng dòngwù, jiù yào duì tā fùzé dàodǐ.',vn:'Con người chúng ta một khi đã quyết định nuôi một con vật thì phải có trách nhiệm với nó đến cùng.'},
     {zh:'这种鸟很难人工饲养。',py:'Zhè zhǒng niǎo hěn nán réngōng sìyǎng.',vn:'Loài chim này rất khó nuôi nhân tạo.'}
   ],
   colloFull:[
     {zh:'饲养宠物',py:'sìyǎng chǒngwù',vn:'nuôi thú cưng'},
     {zh:'饲养员',py:'sìyǎngyuán',vn:'người chăm nuôi (động vật)'},
     {zh:'人工饲养',py:'réngōng sìyǎng',vn:'nuôi nhân tạo'},
     {zh:'饲养家禽',py:'sìyǎng jiāqín',vn:'nuôi gia cầm'},
     {zh:'饲养方法',py:'sìyǎng fāngfǎ',vn:'cách nuôi'}
   ],
   patterns:[
     {s:'饲养 + động vật',m:'Nuôi (động vật) — văn viết'},
     {s:'一旦饲养……，就要对……负责',m:'Một khi nuôi … thì phải chịu trách nhiệm với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi đã nuôi thú cưng thì không được tuỳ tiện vứt bỏ nó.',answer:'一旦饲养了宠物，就不能随便把它扔掉。',answerPy:'Yídàn sìyǎngle chǒngwù, jiù bù néng suíbiàn bǎ tā rēngdiào.',
      note:'一旦……就……: một khi … thì …; 扔掉 = vứt đi.',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Nuôi mèo không đơn giản như em tưởng đâu.',answer:'饲养猫并不像你想的那么简单。',answerPy:'Sìyǎng māo bìng bú xiàng nǐ xiǎng de nàme jiǎndān.',
      note:'不像……那么 + Adj: không … như …; 并 nhấn mạnh phủ định.',pair:'不像……那么……'}
   ]},

  {n:22,zh:'清洁',py:'qīngjié',pos:'Động từ',vn:'lau chùi, quét dọn',hv:'thanh khiết',em:'🧽',lesson:1,
   explain:['Động từ: làm cho sạch, lau dọn (清洁猫舍, 清洁房间) — văn viết hơn 打扫.','Tính từ: sạch sẽ (保持清洁); từ ghép: 清洁工 (công nhân vệ sinh), 清洁剂 (chất tẩy rửa).'],
   usage:'清洁 + nơi / đồ vật; 清洁工; 保持 + N + 清洁; 清洁卫生.',
   collo:['清洁猫舍','清洁工','保持清洁','清洁卫生'],
   ex_zh:'请大家保持教室清洁，不要乱扔垃圾。',ex_py:'Qǐng dàjiā bǎochí jiàoshì qīngjié, búyào luàn rēng lājī.',ex_vn:'Mọi người hãy giữ lớp học sạch sẽ, đừng vứt rác bừa bãi.',
   exList:[
     {zh:'每天早起第一件事就是伺候猫：清洁猫舍，喂水，喂饭。',py:'Měi tiān zǎo qǐ dì-yī jiàn shì jiù shì cìhou māo: qīngjié māoshè, wèi shuǐ, wèi fàn.',vn:'Sáng nào dậy việc đầu tiên cũng là chăm mèo: dọn chuồng mèo, cho uống nước, cho ăn.'},
     {zh:'清洁工人天不亮就开始打扫街道了。',py:'Qīngjié gōngrén tiān bú liàng jiù kāishǐ dǎsǎo jiēdào le.',vn:'Công nhân vệ sinh từ lúc trời chưa sáng đã bắt đầu quét đường.'},
     {zh:'请大家保持教室清洁，不要乱扔垃圾。',py:'Qǐng dàjiā bǎochí jiàoshì qīngjié, búyào luàn rēng lājī.',vn:'Mọi người hãy giữ lớp học sạch sẽ, đừng vứt rác bừa bãi.'}
   ],
   colloFull:[
     {zh:'清洁猫舍',py:'qīngjié māoshè',vn:'dọn chuồng mèo'},
     {zh:'清洁工',py:'qīngjiégōng',vn:'công nhân vệ sinh'},
     {zh:'保持清洁',py:'bǎochí qīngjié',vn:'giữ sạch sẽ'},
     {zh:'清洁卫生',py:'qīngjié wèishēng',vn:'vệ sinh sạch sẽ'},
     {zh:'清洁剂',py:'qīngjiéjì',vn:'chất tẩy rửa'}
   ],
   patterns:[
     {s:'清洁 + nơi / vật',m:'Lau dọn … (văn viết)'},
     {s:'保持 + N + 清洁',m:'Giữ … sạch sẽ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi khách đến, chúng tôi phải dọn sạch cả căn nhà một lượt.',answer:'客人来之前，我们得把整个房子清洁一遍。',answerPy:'Kèrén lái zhīqián, wǒmen děi bǎ zhěnggè fángzi qīngjié yí biàn.',
      note:'得 (děi) + V = phải; 把 + N + V + 一遍.',pair:'得 (děi) + V'},
     {promptLang:'vi',prompt:'Để giữ nhà bếp sạch sẽ, ngày nào mẹ cũng lau bếp.',answer:'为了保持厨房清洁，妈妈每天都擦灶台。',answerPy:'Wèile bǎochí chúfáng qīngjié, māma měi tiān dōu cā zàotái.',
      note:'为了 + mục đích, vế sau nêu hành động.',pair:'为了……'}
   ]},

  {n:23,zh:'喂',py:'wèi',pos:'Động từ',vn:'cho ăn, đút',hv:'uy',em:'🍼',lesson:1,
   explain:['Cho (người, động vật) ăn uống: 喂饭, 喂奶, 喂猫; đút cho ăn.','Còn nghĩa nuôi (động vật): 喂鸡, 喂猪. Chú ý: 喂 (wéi / wèi) còn là thán từ "a lô" khi nghe điện thoại.'],
   usage:'喂 + 饭 / 水 / 奶; 喂 + người / động vật (+ V + thức ăn); 给 + động vật + 喂 + thức ăn.',
   collo:['喂水','喂饭','喂猫','喂奶'],
   ex_zh:'奶奶每天早上都去院子里喂鸡。',ex_py:'Nǎinai měi tiān zǎoshang dōu qù yuànzi li wèi jī.',ex_vn:'Sáng nào bà cũng ra sân cho gà ăn.',
   exList:[
     {zh:'清洁猫舍，喂水，喂饭。',py:'Qīngjié māoshè, wèi shuǐ, wèi fàn.',vn:'Dọn chuồng mèo, cho uống nước, cho ăn.'},
     {zh:'奶奶每天早上都去院子里喂鸡。',py:'Nǎinai měi tiān zǎoshang dōu qù yuànzi li wèi jī.',vn:'Sáng nào bà cũng ra sân cho gà ăn.'},
     {zh:'孩子病了，妈妈一口一口地喂他喝粥。',py:'Háizi bìng le, māma yì kǒu yì kǒu de wèi tā hē zhōu.',vn:'Con ốm, mẹ đút cho con từng thìa cháo.'}
   ],
   colloFull:[
     {zh:'喂水',py:'wèi shuǐ',vn:'cho uống nước'},
     {zh:'喂饭',py:'wèi fàn',vn:'cho ăn, đút cơm'},
     {zh:'喂猫',py:'wèi māo',vn:'cho mèo ăn'},
     {zh:'喂奶',py:'wèi nǎi',vn:'cho bú'},
     {zh:'喂鸡',py:'wèi jī',vn:'cho gà ăn'}
   ],
   patterns:[
     {s:'喂 + người / động vật + (V + thức ăn)',m:'Cho ai / con gì ăn'},
     {s:'给 + động vật + 喂 + thức ăn',m:'Cho con gì ăn thứ gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong thời gian tôi đi công tác, phiền cậu cho mèo ăn giúp tôi nhé.',answer:'我出差的时候，麻烦你帮我喂一下猫吧。',answerPy:'Wǒ chūchāi de shíhou, máfan nǐ bāng wǒ wèi yíxià māo ba.',
      note:'……的时候: khi …; 麻烦你 + V: phiền bạn ….',pair:'……的时候'},
     {promptLang:'vi',prompt:'Đừng cho chó ăn sô-cô-la, nếu không nó sẽ bị ốm.',answer:'别给狗喂巧克力，否则它会生病的。',answerPy:'Bié gěi gǒu wèi qiǎokèlì, fǒuzé tā huì shēngbìng de.',
      note:'……，否则……: …, nếu không thì …; 会……的 khẳng định khả năng.',pair:'……否则……'}
   ]},

  {n:24,zh:'繁忙',py:'fánmáng',pos:'Tính từ',vn:'bận rộn',hv:'phồn mang',em:'🏙️',lesson:1,
   explain:['Bận rộn, nhiều việc không ngớt (văn viết hơn 忙).','Chủ ngữ thường là 工作 / 交通 / 业务 / 港口, ít dùng trực tiếp với người (nói 他工作很繁忙, không nói 他很繁忙).'],
   usage:'工作 / 交通 / 业务 + 繁忙; 繁忙的 + N; 虽然工作繁忙，但…….',
   collo:['工作繁忙','交通繁忙','繁忙的港口','繁忙的一天'],
   ex_zh:'上下班时间，这条路交通十分繁忙。',ex_py:'Shàng-xiàbān shíjiān, zhè tiáo lù jiāotōng shífēn fánmáng.',ex_vn:'Giờ đi làm và tan tầm, giao thông trên con đường này rất đông đúc.',
   exList:[
     {zh:'他虽然工作繁忙，但每天最急切盼望的就是回家开门的那一刻。',py:'Tā suīrán gōngzuò fánmáng, dàn měi tiān zuì jíqiè pànwàng de jiù shì huí jiā kāimén de nà yí kè.',vn:'Tuy công việc bận rộn, nhưng điều anh háo hức mong đợi nhất mỗi ngày chính là khoảnh khắc về nhà mở cửa.'},
     {zh:'上下班时间，这条路交通十分繁忙。',py:'Shàng-xiàbān shíjiān, zhè tiáo lù jiāotōng shífēn fánmáng.',vn:'Giờ đi làm và tan tầm, giao thông trên con đường này rất đông đúc.'},
     {zh:'海防是越南北方最繁忙的港口之一。',py:'Hǎifáng shì Yuènán běifāng zuì fánmáng de gǎngkǒu zhī yī.',vn:'Hải Phòng là một trong những cảng tấp nập nhất miền Bắc Việt Nam.'}
   ],
   colloFull:[
     {zh:'工作繁忙',py:'gōngzuò fánmáng',vn:'công việc bận rộn'},
     {zh:'交通繁忙',py:'jiāotōng fánmáng',vn:'giao thông đông đúc'},
     {zh:'繁忙的港口',py:'fánmáng de gǎngkǒu',vn:'bến cảng tấp nập'},
     {zh:'繁忙的一天',py:'fánmáng de yì tiān',vn:'một ngày bận rộn'},
     {zh:'业务繁忙',py:'yèwù fánmáng',vn:'nghiệp vụ bận rộn'}
   ],
   patterns:[
     {s:'N (工作 / 交通) + 繁忙',m:'… bận rộn, tấp nập'},
     {s:'虽然工作繁忙，但……',m:'Tuy công việc bận rộn nhưng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù công việc bận rộn đến đâu, bố vẫn về nhà ăn tối cùng cả nhà.',answer:'不管工作多么繁忙，爸爸都会回家和我们一起吃晚饭。',answerPy:'Bùguǎn gōngzuò duōme fánmáng, bàba dōu huì huí jiā hé wǒmen yìqǐ chī wǎnfàn.',
      note:'不管 + 多么 + Adj，都……: dù … đến đâu cũng ….',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Kỳ thi cuối kỳ sắp đến, việc học của chúng tôi ngày càng bận rộn.',answer:'期末考试快到了，我们的学习越来越繁忙了。',answerPy:'Qīmò kǎoshì kuài dào le, wǒmen de xuéxí yuè lái yuè fánmáng le.',
      note:'快……了: sắp …; 越来越 + Adj: ngày càng ….',pair:'快……了'}
   ]},

  {n:25,zh:'急切',py:'jíqiè',pos:'Tính từ',vn:'háo hức, thiết tha, nôn nóng',hv:'cấp thiết',em:'⏳',lesson:1,
   explain:['Tính từ: tâm trạng nóng lòng, háo hức, thiết tha muốn điều gì đó xảy ra ngay (心情迫切).','Làm trạng ngữ (急切地盼望), định ngữ (急切的心情); khác 急忙 (phó từ, hành động vội vàng) — xem phần Phân biệt từ. Chú ý: không giống "cấp thiết" (= 迫切需要) trong tiếng Việt.'],
   usage:'急切地 + 盼望 / 等待 / 想知道; 急切的 + 心情 / 表情 / 目光; 最急切盼望的就是…….',
   collo:['急切地盼望','急切的心情','急切地等待','急切的表情'],
   ex_zh:'大家急切地盼望试验成功。',ex_py:'Dàjiā jíqiè de pànwàng shìyàn chénggōng.',ex_vn:'Mọi người nóng lòng mong thí nghiệm thành công.',
   exList:[
     {zh:'他每天最急切盼望的就是回家开门的那一刻。',py:'Tā měi tiān zuì jíqiè pànwàng de jiù shì huí jiā kāimén de nà yí kè.',vn:'Điều anh háo hức mong đợi nhất mỗi ngày chính là khoảnh khắc về nhà mở cửa.'},
     {zh:'大家急切地盼望试验成功。',py:'Dàjiā jíqiè de pànwàng shìyàn chénggōng.',vn:'Mọi người nóng lòng mong thí nghiệm thành công.'},
     {zh:'你急切的心情我们都能理解，但凡事都要慢慢来。',py:'Nǐ jíqiè de xīnqíng wǒmen dōu néng lǐjiě, dàn fánshì dōu yào mànmàn lái.',vn:'Tâm trạng nóng lòng của bạn chúng tôi đều hiểu, nhưng việc gì cũng phải từ từ.'}
   ],
   colloFull:[
     {zh:'急切地盼望',py:'jíqiè de pànwàng',vn:'nóng lòng mong đợi'},
     {zh:'急切的心情',py:'jíqiè de xīnqíng',vn:'tâm trạng nôn nóng'},
     {zh:'急切地等待',py:'jíqiè de děngdài',vn:'sốt ruột chờ đợi'},
     {zh:'急切的表情',py:'jíqiè de biǎoqíng',vn:'vẻ mặt nôn nóng'},
     {zh:'急切地想知道',py:'jíqiè de xiǎng zhīdào',vn:'nóng lòng muốn biết'}
   ],
   patterns:[
     {s:'急切地 + 盼望 / 等待',m:'Nóng lòng mong / chờ'},
     {s:'急切的 + 心情 / 表情',m:'Tâm trạng / vẻ mặt nôn nóng (急切 đi được với danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kết quả thi có rồi, các bạn nóng lòng muốn biết điểm của mình.',answer:'考试结果出来了，同学们急切地想知道自己的分数。',answerPy:'Kǎoshì jiéguǒ chūlái le, tóngxuémen jíqiè de xiǎng zhīdào zìjǐ de fēnshù.',
      note:'出来 = bổ ngữ xu hướng chỉ kết quả xuất hiện; 急切地 + 想 + V.',pair:'V + 出来'},
     {promptLang:'vi',prompt:'Điều bà mong mỏi nhất là Tết cả nhà được đoàn tụ.',answer:'奶奶最急切盼望的就是春节时全家团圆。',answerPy:'Nǎinai zuì jíqiè pànwàng de jiù shì Chūnjié shí quán jiā tuányuán.',
      note:'……的就是……: câu nhấn mạnh (điều … nhất chính là …); 团圆 ôn bài 2.',pair:'……的就是……'}
   ]},

  {n:26,zh:'例外',py:'lìwài',pos:'Danh từ',vn:'ngoại lệ',hv:'lệ ngoại',em:'🚫',lesson:1,
   explain:['Danh từ: trường hợp nằm ngoài quy luật, quy định chung — ngoại lệ.','Còn làm động từ: 不能例外 (không được ngoại lệ). Hay gặp: 毫无例外, 没有例外, ……也不例外.'],
   usage:'毫无例外地 + V; 没有例外; ……也不例外; 例外情况; 谁也不能例外.',
   collo:['毫无例外','也不例外','例外情况','不能例外'],
   ex_zh:'每个人都应该遵守学校纪律，谁也不能例外。',ex_py:'Měi ge rén dōu yīnggāi zūnshǒu xuéxiào jìlǜ, shéi yě bù néng lìwài.',ex_vn:'Ai cũng phải tuân thủ kỷ luật nhà trường, không ai được ngoại lệ.',
   exList:[
     {zh:'喜儿则毫无例外地站在远处，用凝视表达着它深沉的热情。',py:'Xǐ\'ér zé háowú lìwài de zhàn zài yuǎnchù, yòng níngshì biǎodázhe tā shēnchén de rèqíng.',vn:'Còn Hỷ Nhi thì lần nào cũng đứng ở đằng xa, dùng ánh nhìn chăm chú bày tỏ tình cảm sâu lắng của nó.'},
     {zh:'每个人都应该遵守学校纪律，谁也不能例外。',py:'Měi ge rén dōu yīnggāi zūnshǒu xuéxiào jìlǜ, shéi yě bù néng lìwài.',vn:'Ai cũng phải tuân thủ kỷ luật nhà trường, không ai được ngoại lệ.'},
     {zh:'大家都喜欢放假，我也不例外。',py:'Dàjiā dōu xǐhuan fàngjià, wǒ yě bú lìwài.',vn:'Ai cũng thích được nghỉ, tôi cũng không ngoại lệ.'}
   ],
   colloFull:[
     {zh:'毫无例外',py:'háowú lìwài',vn:'không có ngoại lệ nào'},
     {zh:'也不例外',py:'yě bú lìwài',vn:'cũng không ngoại lệ'},
     {zh:'例外情况',py:'lìwài qíngkuàng',vn:'trường hợp ngoại lệ'},
     {zh:'不能例外',py:'bù néng lìwài',vn:'không được ngoại lệ'},
     {zh:'没有例外',py:'méiyǒu lìwài',vn:'không có ngoại lệ'}
   ],
   patterns:[
     {s:'毫无例外地 + V',m:'Lần nào cũng …, không trừ lần nào'},
     {s:'……，A 也不例外',m:'…, A cũng không ngoại lệ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quy định này áp dụng cho tất cả mọi người, ngay cả giám đốc cũng không ngoại lệ.',answer:'这个规定适用于所有人，连经理也不例外。',answerPy:'Zhège guīdìng shìyòng yú suǒyǒu rén, lián jīnglǐ yě bú lìwài.',
      note:'连……也……: ngay cả … cũng …; 适用于 = áp dụng cho.',pair:'连……也……'},
     {promptLang:'vi',prompt:'Lần thi nào cậu ấy cũng không ngoại lệ đứng nhất lớp.',answer:'每次考试，他都毫无例外地考全班第一。',answerPy:'Měi cì kǎoshì, tā dōu háowú lìwài de kǎo quán bān dì-yī.',
      note:'每次……都……; 毫无 (bài 4) + 例外 = không có ngoại lệ nào.',pair:'每次……都……'}
   ]},

  {n:27,zh:'凝视',py:'níngshì',pos:'Động từ',vn:'nhìn chăm chú, nhìn chằm chằm',hv:'ngưng thị',em:'👀',lesson:1,
   explain:['Nhìn chằm chằm, nhìn chăm chú rất lâu vào một điểm (văn viết).','Trong bài dùng như danh từ: 用凝视表达热情 (dùng ánh nhìn chăm chú để bày tỏ); khác 监视 (theo dõi để kiểm soát).'],
   usage:'凝视 + người / vật / 远方; 凝视着; 深情地 / 默默地 + 凝视.',
   collo:['凝视远方','凝视着','深情地凝视','默默地凝视'],
   ex_zh:'她站在窗前，久久地凝视着远方。',ex_py:'Tā zhàn zài chuāng qián, jiǔjiǔ de níngshìzhe yuǎnfāng.',ex_vn:'Cô ấy đứng trước cửa sổ, nhìn đăm đăm về phía xa hồi lâu.',
   exList:[
     {zh:'喜儿用凝视表达着它深沉的热情。',py:'Xǐ\'ér yòng níngshì biǎodázhe tā shēnchén de rèqíng.',vn:'Hỷ Nhi dùng ánh nhìn chăm chú để bày tỏ tình cảm sâu lắng của nó.'},
     {zh:'她站在窗前，久久地凝视着远方。',py:'Tā zhàn zài chuāng qián, jiǔjiǔ de níngshìzhe yuǎnfāng.',vn:'Cô ấy đứng trước cửa sổ, nhìn đăm đăm về phía xa hồi lâu.'},
     {zh:'母猫趴在沙发上凝视着它的孩子们，眼神中充满了母爱。',py:'Mǔ māo pā zài shāfā shang níngshìzhe tā de háizimen, yǎnshén zhōng chōngmǎnle mǔ\'ài.',vn:'Mèo mẹ nằm trên sofa chăm chú nhìn đàn con, ánh mắt tràn đầy tình mẹ.'}
   ],
   colloFull:[
     {zh:'凝视远方',py:'níngshì yuǎnfāng',vn:'nhìn đăm đăm về phía xa'},
     {zh:'凝视着',py:'níngshìzhe',vn:'đang nhìn chăm chú'},
     {zh:'深情地凝视',py:'shēnqíng de níngshì',vn:'nhìn đắm đuối'},
     {zh:'默默地凝视',py:'mòmò de níngshì',vn:'lặng lẽ nhìn'},
     {zh:'久久凝视',py:'jiǔjiǔ níngshì',vn:'nhìn hồi lâu'}
   ],
   patterns:[
     {s:'凝视着 + đối tượng',m:'Nhìn chăm chú vào …'},
     {s:'用凝视表达 + tình cảm',m:'Dùng ánh nhìn để bày tỏ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy lặng lẽ nhìn tấm ảnh cũ, hồi lâu không nói một lời.',answer:'他默默地凝视着那张旧照片，半天没说一句话。',answerPy:'Tā mòmò de níngshìzhe nà zhāng jiù zhàopiàn, bàntiān méi shuō yí jù huà.',
      note:'V + 着: trạng thái kéo dài; 半天 = hồi lâu.',pair:'V + 着'},
     {promptLang:'vi',prompt:'Con mèo nhìn chằm chằm vào con cá trong bể, như thể đang nghĩ cách bắt nó.',answer:'猫凝视着鱼缸里的鱼，好像在想办法抓它。',answerPy:'Māo níngshìzhe yúgāng li de yú, hǎoxiàng zài xiǎng bànfǎ zhuā tā.',
      note:'好像 = hình như, như thể; 在 + V: đang ….',pair:'好像……'}
   ]},

  {n:28,zh:'深沉',py:'shēnchén',pos:'Tính từ',vn:'sâu lắng, sâu kín, trầm',hv:'thâm trầm',em:'🌊',lesson:1,
   explain:['(Tình cảm, suy nghĩ) sâu sắc, kín đáo, không bộc lộ ra ngoài.','Còn dùng cho giọng nói trầm (声音深沉), tính cách trầm tĩnh (性格深沉), màu sắc đậm.'],
   usage:'深沉的 + 爱 / 热情 / 感情; 声音深沉; 性格深沉; 父爱很深沉.',
   collo:['深沉的热情','深沉的爱','声音深沉','性格深沉'],
   ex_zh:'父爱往往是深沉的，不常挂在嘴边。',ex_py:'Fù\'ài wǎngwǎng shì shēnchén de, bù cháng guà zài zuǐ biān.',ex_vn:'Tình cha thường sâu lắng, không hay nói ra miệng.',
   exList:[
     {zh:'喜儿站在远处，用凝视表达着它深沉的热情。',py:'Xǐ\'ér zhàn zài yuǎnchù, yòng níngshì biǎodázhe tā shēnchén de rèqíng.',vn:'Hỷ Nhi đứng đằng xa, dùng ánh nhìn chăm chú bày tỏ tình cảm sâu lắng của mình.'},
     {zh:'父爱往往是深沉的，不常挂在嘴边。',py:'Fù\'ài wǎngwǎng shì shēnchén de, bù cháng guà zài zuǐ biān.',vn:'Tình cha thường sâu lắng, không hay nói ra miệng.'},
     {zh:'他的声音深沉而有力，很适合朗读诗歌。',py:'Tā de shēngyīn shēnchén ér yǒulì, hěn shìhé lǎngdú shīgē.',vn:'Giọng anh ấy trầm mà khoẻ, rất hợp để ngâm thơ.'}
   ],
   colloFull:[
     {zh:'深沉的热情',py:'shēnchén de rèqíng',vn:'tình cảm nồng nhiệt mà kín đáo'},
     {zh:'深沉的爱',py:'shēnchén de ài',vn:'tình yêu sâu lắng'},
     {zh:'声音深沉',py:'shēngyīn shēnchén',vn:'giọng trầm'},
     {zh:'性格深沉',py:'xìnggé shēnchén',vn:'tính cách trầm tĩnh'},
     {zh:'深沉的父爱',py:'shēnchén de fù\'ài',vn:'tình cha sâu lắng'}
   ],
   patterns:[
     {s:'深沉的 + tình cảm',m:'Tình cảm sâu lắng, kín đáo'},
     {s:'N + 深沉而 + Adj',m:'… trầm và … (而 nối hai tính từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bố tuy ít nói nhưng tình yêu bố dành cho chúng tôi rất sâu lắng.',answer:'爸爸虽然话不多，但他对我们的爱很深沉。',answerPy:'Bàba suīrán huà bù duō, dàn tā duì wǒmen de ài hěn shēnchén.',
      note:'对……的爱: tình yêu dành cho …; 虽然……但…….',pair:'对……的……'},
     {promptLang:'vi',prompt:'Càng lớn, tôi càng thấm thía tình mẹ sâu lắng.',answer:'我越长大，越能体会到深沉的母爱。',answerPy:'Wǒ yuè zhǎngdà, yuè néng tǐhuì dào shēnchén de mǔ\'ài.',
      note:'越……越……: càng … càng …; 体会到 = thấm thía, cảm nhận được.',pair:'越……越……'}
   ]},

  {n:29,zh:'监视',py:'jiānshì',pos:'Động từ',vn:'theo dõi, giám sát',hv:'giám thị',em:'📹',lesson:1,
   explain:['Theo dõi, quan sát chặt chẽ (từ bên cạnh hay từ xa) để nắm tình hình — thường để kiểm soát, đề phòng.','Tân ngữ: người, hành động, tình hình (监视敌人, 监视猫的一举一动). Chú ý: "giám thị" coi thi trong tiếng Việt là 监考.'],
   usage:'监视 + 一举一动 / 行动 / 情况; 受到 / 被 + 监视; 监视器; 24小时监视.',
   collo:['监视一举一动','受到监视','监视器','监视敌人'],
   ex_zh:'他在家里安了个摄像头，监视猫的一举一动。',ex_py:'Tā zài jiā li ānle ge shèxiàngtóu, jiānshì māo de yì jǔ yí dòng.',ex_vn:'Anh lắp một cái camera trong nhà để theo dõi mọi cử động của lũ mèo.',
   exList:[
     {zh:'为了弄清楚这事，他在家里安了个摄像头，监视猫的一举一动。',py:'Wèile nòng qīngchu zhè shì, tā zài jiā li ānle ge shèxiàngtóu, jiānshì māo de yì jǔ yí dòng.',vn:'Để làm rõ chuyện này, anh lắp một cái camera trong nhà, theo dõi mọi cử động của lũ mèo.'},
     {zh:'小区门口装了监视器，陌生人进出都能看得清清楚楚。',py:'Xiǎoqū ménkǒu zhuāngle jiānshìqì, mòshēngrén jìnchū dōu néng kàn de qīngqīngchǔchǔ.',vn:'Cổng khu dân cư có lắp camera giám sát, người lạ ra vào đều thấy rõ mồn một.'},
     {zh:'父母不应该监视孩子的手机，而应该多跟孩子沟通。',py:'Fùmǔ bù yīnggāi jiānshì háizi de shǒujī, ér yīnggāi duō gēn háizi gōutōng.',vn:'Cha mẹ không nên theo dõi điện thoại của con mà nên trò chuyện với con nhiều hơn.'}
   ],
   colloFull:[
     {zh:'监视一举一动',py:'jiānshì yì jǔ yí dòng',vn:'theo dõi mọi cử động'},
     {zh:'受到监视',py:'shòudào jiānshì',vn:'bị giám sát'},
     {zh:'监视器',py:'jiānshìqì',vn:'camera / thiết bị giám sát'},
     {zh:'监视敌人',py:'jiānshì dírén',vn:'theo dõi quân địch'},
     {zh:'24小时监视',py:'èrshísì xiǎoshí jiānshì',vn:'giám sát 24 giờ'}
   ],
   patterns:[
     {s:'监视 + ……的一举一动',m:'Theo dõi mọi cử động của …'},
     {s:'受到 / 被 + 监视',m:'Bị giám sát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta cứ thấy mình đang bị người khác theo dõi, nên đi đâu cũng rất cẩn thận.',answer:'他总觉得自己被人监视着，所以去哪儿都很小心。',answerPy:'Tā zǒng juéde zìjǐ bèi rén jiānshìzhe, suǒyǐ qù nǎr dōu hěn xiǎoxīn.',
      note:'Đại từ nghi vấn + 都 (去哪儿都……) = đi đâu cũng …; 被 + người + V + 着.',pair:'去哪儿都……'},
     {promptLang:'vi',prompt:'Cha mẹ không phải muốn giám sát con, mà là lo cho sự an toàn của con.',answer:'父母不是想监视孩子，而是担心孩子的安全。',answerPy:'Fùmǔ bú shì xiǎng jiānshì háizi, ér shì dānxīn háizi de ānquán.',
      note:'不是……而是……: không phải … mà là ….',pair:'不是……而是……'}
   ]},

  {n:30,zh:'举动',py:'jǔdòng',pos:'Danh từ',vn:'động tác, hành động, cử chỉ',hv:'cử động',em:'🕺',lesson:1,
   explain:['Hành động, cử chỉ, cách hành xử của người (hoặc con vật).','Hay gặp 一举一动 (mọi cử chỉ hành động), 奇怪的举动, 大胆的举动. Tiếng Việt "cử động" chỉ động tác cơ thể; 举动 thiên về hành vi, việc làm.'],
   usage:'一举一动; 奇怪 / 反常 / 大胆的 + 举动; 这一举动; ……的举动 + 让 + người + ……',
   collo:['一举一动','奇怪的举动','反常的举动','大胆的举动'],
   ex_zh:'他这个大胆的举动让大家都吃了一惊。',ex_py:'Tā zhège dàdǎn de jǔdòng ràng dàjiā dōu chīle yì jīng.',ex_vn:'Hành động táo bạo này của anh ấy khiến mọi người đều giật mình.',
   exList:[
     {zh:'摄像头能监视猫的一举一动。',py:'Shèxiàngtóu néng jiānshì māo de yì jǔ yí dòng.',vn:'Camera có thể theo dõi mọi cử động của lũ mèo.'},
     {zh:'他这个大胆的举动让大家都吃了一惊。',py:'Tā zhège dàdǎn de jǔdòng ràng dàjiā dōu chīle yì jīng.',vn:'Hành động táo bạo này của anh ấy khiến mọi người đều giật mình.'},
     {zh:'最近孩子有些反常的举动，父母得多留神。',py:'Zuìjìn háizi yǒuxiē fǎncháng de jǔdòng, fùmǔ děi duō liúshén.',vn:'Gần đây đứa trẻ có vài hành động khác thường, cha mẹ phải để ý hơn.'}
   ],
   colloFull:[
     {zh:'一举一动',py:'yì jǔ yí dòng',vn:'mọi cử chỉ hành động'},
     {zh:'奇怪的举动',py:'qíguài de jǔdòng',vn:'hành động kỳ lạ'},
     {zh:'反常的举动',py:'fǎncháng de jǔdòng',vn:'hành động khác thường'},
     {zh:'大胆的举动',py:'dàdǎn de jǔdòng',vn:'hành động táo bạo'},
     {zh:'这一举动',py:'zhè yì jǔdòng',vn:'hành động này'}
   ],
   patterns:[
     {s:'……的一举一动',m:'Mọi cử chỉ, hành động của …'},
     {s:'……的举动 + 让 + người + ……',m:'Hành động … khiến ai …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hành động của anh ấy tuy nhỏ nhưng khiến mọi người rất cảm động.',answer:'他的举动虽然很小，却让大家非常感动。',answerPy:'Tā de jǔdòng suīrán hěn xiǎo, què ràng dàjiā fēicháng gǎndòng.',
      note:'虽然……却……: tuy … nhưng lại …; 让 + người + cảm xúc.',pair:'虽然……却……'},
     {promptLang:'vi',prompt:'Mỗi cử chỉ hành động của giáo viên đều sẽ ảnh hưởng đến học sinh.',answer:'老师的一举一动都会影响学生。',answerPy:'Lǎoshī de yì jǔ yí dòng dōu huì yǐngxiǎng xuésheng.',
      note:'会 + V: sẽ (khả năng); 一举一动 làm chủ ngữ, có 都 đi kèm.',pair:'会 + V'}
   ]},

  {n:31,zh:'缺陷',py:'quēxiàn',pos:'Danh từ',vn:'chỗ thiếu sót, khiếm khuyết, nhược điểm',hv:'khuyết hãm',em:'🔧',lesson:1,
   explain:['Chỗ thiếu sót, khiếm khuyết, chỗ chưa hoàn thiện (của sản phẩm, thiết kế, cơ thể, tính cách).','Hay đi với 有 / 存在 / 弥补 / 发现 + 缺陷; 先天缺陷, 设计缺陷. Nặng và cụ thể hơn 缺点.'],
   usage:'有 / 存在 + 缺陷; 发现 / 弥补 + 缺陷; 设计缺陷; 先天缺陷.',
   collo:['有缺陷','存在缺陷','弥补缺陷','设计缺陷'],
   ex_zh:'这批手机存在设计缺陷，厂家已经全部召回了。',ex_py:'Zhè pī shǒujī cúnzài shèjì quēxiàn, chǎngjiā yǐjīng quánbù zhàohuí le.',ex_vn:'Lô điện thoại này có lỗi thiết kế, nhà sản xuất đã thu hồi toàn bộ.',
   exList:[
     {zh:'他发现这个不能移动的摄像头有缺陷，拍下的很多镜头都是空的。',py:'Tā fāxiàn zhège bù néng yídòng de shèxiàngtóu yǒu quēxiàn, pāixià de hěn duō jìngtóu dōu shì kōng de.',vn:'Anh phát hiện cái camera không di chuyển được này có nhược điểm, nhiều cảnh quay được đều trống trơn.'},
     {zh:'这批手机存在设计缺陷，厂家已经全部召回了。',py:'Zhè pī shǒujī cúnzài shèjì quēxiàn, chǎngjiā yǐjīng quánbù zhàohuí le.',vn:'Lô điện thoại này có lỗi thiết kế, nhà sản xuất đã thu hồi toàn bộ.'},
     {zh:'每个人都有缺陷，重要的是学会接受自己。',py:'Měi ge rén dōu yǒu quēxiàn, zhòngyào de shì xuéhuì jiēshòu zìjǐ.',vn:'Ai cũng có khiếm khuyết, điều quan trọng là học cách chấp nhận bản thân.'}
   ],
   colloFull:[
     {zh:'有缺陷',py:'yǒu quēxiàn',vn:'có khiếm khuyết'},
     {zh:'存在缺陷',py:'cúnzài quēxiàn',vn:'tồn tại thiếu sót'},
     {zh:'弥补缺陷',py:'míbǔ quēxiàn',vn:'bù đắp thiếu sót'},
     {zh:'设计缺陷',py:'shèjì quēxiàn',vn:'lỗi thiết kế'},
     {zh:'先天缺陷',py:'xiāntiān quēxiàn',vn:'khuyết tật bẩm sinh'}
   ],
   patterns:[
     {s:'N + 有 / 存在 + 缺陷',m:'… có thiếu sót, nhược điểm'},
     {s:'弥补 + ……的缺陷',m:'Bù đắp thiếu sót của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phương án này tuy có vài thiếu sót, nhưng nhìn chung vẫn khả thi.',answer:'这个方案虽然有一些缺陷，但总的来说还是可行的。',answerPy:'Zhège fāng\'àn suīrán yǒu yìxiē quēxiàn, dàn zǒng de lái shuō háishi kěxíng de.',
      note:'总的来说 = nhìn chung; 是……的 khẳng định nhận định.',pair:'总的来说'},
     {promptLang:'vi',prompt:'Để bù đắp thiếu sót này, các kỹ sư đã sửa thiết kế ba lần.',answer:'为了弥补这个缺陷，工程师们把设计修改了三次。',answerPy:'Wèile míbǔ zhège quēxiàn, gōngchéngshīmen bǎ shèjì xiūgǎile sān cì.',
      note:'把 + N + V + 了 + số lần; 为了 + mục đích.',pair:'把 + N + V + 了 + số lần'}
   ]},

  {n:32,zh:'镜头',py:'jìngtóu',pos:'Danh từ',vn:'ống kính; cảnh quay, pô ảnh',hv:'kính đầu',em:'🎥',lesson:1,
   explain:['Ống kính (của máy ảnh, camera): 摄像头的镜头, 对着镜头.','Cảnh quay, khuôn hình, pô ảnh (một đoạn phim / một tấm hình): 拍下的很多镜头都是空的, 精彩镜头.'],
   usage:'对着镜头; 镜头前; 拍下……镜头; 精彩 / 感人 + 镜头; 特写镜头.',
   collo:['对着镜头','精彩镜头','镜头前','特写镜头'],
   ex_zh:'她一站在镜头前就紧张得说不出话来。',ex_py:'Tā yí zhàn zài jìngtóu qián jiù jǐnzhāng de shuō bu chū huà lái.',ex_vn:'Cô ấy cứ đứng trước ống kính là căng thẳng đến mức không nói nên lời.',
   exList:[
     {zh:'拍下的很多镜头都是空的。',py:'Pāixià de hěn duō jìngtóu dōu shì kōng de.',vn:'Nhiều cảnh quay được đều trống trơn.'},
     {zh:'她一站在镜头前就紧张得说不出话来。',py:'Tā yí zhàn zài jìngtóu qián jiù jǐnzhāng de shuō bu chū huà lái.',vn:'Cô ấy cứ đứng trước ống kính là căng thẳng đến mức không nói nên lời.'},
     {zh:'这部电影里最感人的镜头，是父亲在车站送别女儿。',py:'Zhè bù diànyǐng li zuì gǎnrén de jìngtóu, shì fùqīn zài chēzhàn sòngbié nǚ\'ér.',vn:'Cảnh cảm động nhất trong bộ phim này là người cha tiễn con gái ở nhà ga.'}
   ],
   colloFull:[
     {zh:'对着镜头',py:'duìzhe jìngtóu',vn:'hướng vào ống kính'},
     {zh:'精彩镜头',py:'jīngcǎi jìngtóu',vn:'cảnh quay đặc sắc'},
     {zh:'镜头前',py:'jìngtóu qián',vn:'trước ống kính'},
     {zh:'特写镜头',py:'tèxiě jìngtóu',vn:'cảnh cận (cận cảnh)'},
     {zh:'拍下镜头',py:'pāixià jìngtóu',vn:'quay / chụp lại cảnh'}
   ],
   patterns:[
     {s:'对着镜头 + V',m:'Hướng vào ống kính làm gì'},
     {s:'……的镜头',m:'Cảnh quay …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cảnh này được quay lại đúng lúc con mèo nhảy lên bàn.',answer:'这个镜头是在猫跳上桌子的那一刻拍下来的。',answerPy:'Zhège jìngtóu shì zài māo tiàoshàng zhuōzi de nà yí kè pāi xiàlái de.',
      note:'是……的 nhấn mạnh thời điểm của việc đã xảy ra; 拍下来 = quay / chụp lại.',pair:'是……的'},
     {promptLang:'vi',prompt:'Trước ống kính, cậu ấy lúc nào cũng cười rất tự nhiên.',answer:'在镜头前，他总是笑得很自然。',answerPy:'Zài jìngtóu qián, tā zǒngshì xiào de hěn zìrán.',
      note:'V + 得 + bổ ngữ trạng thái (笑得很自然).',pair:'V + 得 + bổ ngữ'}
   ]},

  {n:33,zh:'自力更生',py:'zìlì-gēngshēng',pos:'Thành ngữ',vn:'tự lực cánh sinh',hv:'tự lực cánh sinh',em:'💪',lesson:1,
   explain:['Dựa vào sức mình để làm việc, gây dựng, không trông chờ người khác.','Làm vị ngữ, trạng ngữ (自力更生 + V) hoặc tân ngữ (坚持自力更生). Trong bài: tự tay lắp cả một bộ thiết bị.'],
   usage:'自力更生 + V (自力更生安装……); 坚持 / 靠 + 自力更生; 自力更生，艰苦奋斗.',
   collo:['自力更生安装','坚持自力更生','靠自力更生','自力更生的精神'],
   ex_zh:'任何事情都要自力更生，不要总依靠别人。',ex_py:'Rènhé shìqing dōu yào zìlì-gēngshēng, búyào zǒng yīkào biérén.',ex_vn:'Việc gì cũng phải tự lực, đừng lúc nào cũng dựa vào người khác.',
   exList:[
     {zh:'他增加了设备，并决定自力更生安装一套尖端玩意儿。',py:'Tā zēngjiāle shèbèi, bìng juédìng zìlì-gēngshēng ānzhuāng yí tào jiānduān wányìr.',vn:'Anh bổ sung thiết bị và quyết định tự tay lắp một bộ "đồ chơi" tối tân.'},
     {zh:'任何事情都要自力更生，不要总依靠别人。',py:'Rènhé shìqing dōu yào zìlì-gēngshēng, búyào zǒng yīkào biérén.',vn:'Việc gì cũng phải tự lực, đừng lúc nào cũng dựa vào người khác.'},
     {zh:'这个小山村靠自力更生修了一条公路。',py:'Zhège xiǎo shāncūn kào zìlì-gēngshēng xiūle yì tiáo gōnglù.',vn:'Ngôi làng miền núi nhỏ này tự lực cánh sinh làm được một con đường.'}
   ],
   colloFull:[
     {zh:'自力更生安装',py:'zìlì-gēngshēng ānzhuāng',vn:'tự lắp đặt lấy'},
     {zh:'坚持自力更生',py:'jiānchí zìlì-gēngshēng',vn:'kiên trì tự lực'},
     {zh:'靠自力更生',py:'kào zìlì-gēngshēng',vn:'dựa vào sức mình'},
     {zh:'自力更生的精神',py:'zìlì-gēngshēng de jīngshén',vn:'tinh thần tự lực'},
     {zh:'自力更生，艰苦奋斗',py:'zìlì-gēngshēng, jiānkǔ fèndòu',vn:'tự lực cánh sinh, gian khổ phấn đấu'}
   ],
   patterns:[
     {s:'自力更生 + V',m:'Tự sức mình làm gì'},
     {s:'靠 + 自力更生 + V',m:'Dựa vào sức mình mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tốt nghiệp đại học xong, cậu ấy quyết định tự lực, không xin tiền bố mẹ nữa.',answer:'大学毕业以后，他决定自力更生，不再向父母要钱了。',answerPy:'Dàxué bìyè yǐhòu, tā juédìng zìlì-gēngshēng, bú zài xiàng fùmǔ yào qián le.',
      note:'不再……了: không … nữa; 向 + người + 要钱.',pair:'不再……了'},
     {promptLang:'vi',prompt:'Chỉ có tự lực cánh sinh, chúng ta mới thật sự đứng vững được.',answer:'只有自力更生，我们才能真正站稳脚跟。',answerPy:'Zhǐyǒu zìlì-gēngshēng, wǒmen cái néng zhēnzhèng zhànwěn jiǎogēn.',
      note:'只有……才……: chỉ có … mới … (điều kiện duy nhất).',pair:'只有……才……'}
   ]},

  {n:34,zh:'尖端',py:'jiānduān',pos:'Tính từ',vn:'tiên tiến nhất, tối tân',hv:'tiêm đoan',em:'🚀',lesson:1,
   explain:['Tính từ: (khoa học, kỹ thuật) tiên tiến nhất, trình độ cao nhất: 尖端技术, 尖端产品.','Danh từ: đầu nhọn của vật. Trong bài: 一套尖端玩意儿 = một bộ "đồ chơi" công nghệ tối tân (giọng đùa).'],
   usage:'尖端 + 技术 / 科技 / 产品 / 设备; 世界尖端水平.',
   collo:['尖端技术','尖端科技','尖端产品','尖端设备'],
   ex_zh:'这家公司掌握了很多尖端技术。',ex_py:'Zhè jiā gōngsī zhǎngwòle hěn duō jiānduān jìshù.',ex_vn:'Công ty này nắm trong tay nhiều công nghệ tiên tiến nhất.',
   exList:[
     {zh:'他决定自力更生安装一套尖端玩意儿。',py:'Tā juédìng zìlì-gēngshēng ānzhuāng yí tào jiānduān wányìr.',vn:'Anh quyết định tự tay lắp một bộ "đồ chơi" tối tân.'},
     {zh:'这家公司掌握了很多尖端技术。',py:'Zhè jiā gōngsī zhǎngwòle hěn duō jiānduān jìshù.',vn:'Công ty này nắm trong tay nhiều công nghệ tiên tiến nhất.'},
     {zh:'这所大学的实验室里都是世界尖端的设备。',py:'Zhè suǒ dàxué de shíyànshì li dōu shì shìjiè jiānduān de shèbèi.',vn:'Phòng thí nghiệm của trường đại học này toàn là thiết bị tiên tiến nhất thế giới.'}
   ],
   colloFull:[
     {zh:'尖端技术',py:'jiānduān jìshù',vn:'công nghệ tiên tiến nhất'},
     {zh:'尖端科技',py:'jiānduān kējì',vn:'khoa học kỹ thuật mũi nhọn'},
     {zh:'尖端产品',py:'jiānduān chǎnpǐn',vn:'sản phẩm tối tân'},
     {zh:'尖端设备',py:'jiānduān shèbèi',vn:'thiết bị hiện đại nhất'},
     {zh:'尖端玩意儿',py:'jiānduān wányìr',vn:'món đồ tối tân'}
   ],
   patterns:[
     {s:'尖端 + 技术 / 产品 / 设备',m:'… tiên tiến nhất, tối tân'},
     {s:'世界尖端 + 的 + N',m:'… hàng đầu thế giới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn làm ra sản phẩm tối tân thì phải bỏ rất nhiều thời gian nghiên cứu.',answer:'要想做出尖端产品，就得花大量时间钻研。',answerPy:'Yào xiǎng zuòchū jiānduān chǎnpǐn, jiù děi huā dàliàng shíjiān zuānyán.',
      note:'要想……就得……: muốn … thì phải ….',pair:'要想……就得……'},
     {promptLang:'vi',prompt:'Nhờ công nghệ tiên tiến nhất, bác sĩ có thể phát hiện bệnh sớm hơn.',answer:'借助尖端技术，医生可以更早地发现疾病。',answerPy:'Jièzhù jiānduān jìshù, yīshēng kěyǐ gèng zǎo de fāxiàn jíbìng.',
      note:'借助 (bài 5) = nhờ vào (công cụ, phương tiện); 更 + Adj + 地 + V.',pair:'借助……'}
   ]},

  {n:35,zh:'钻研',py:'zuānyán',pos:'Động từ',vn:'nghiên cứu kỹ lưỡng, miệt mài tìm hiểu',hv:'toản nghiên',em:'🔬',lesson:1,
   explain:['Đào sâu nghiên cứu, miệt mài tìm hiểu kỹ một vấn đề, một môn học, một kỹ thuật.','Tân ngữ: 业务, 技术, 学问, 问题; hay đi với 刻苦 / 认真 / 深入. Chú ý: đọc zuān (thanh 1), không đọc zuàn.'],
   usage:'钻研 + 技术 / 业务 / 学问; 刻苦钻研; 边钻研边 + V; 钻研精神.',
   collo:['刻苦钻研','钻研技术','钻研业务','钻研精神'],
   ex_zh:'他边钻研边安装，经过三个多月的努力，终于把设备装好了。',ex_py:'Tā biān zuānyán biān ānzhuāng, jīngguò sān ge duō yuè de nǔlì, zhōngyú bǎ shèbèi zhuānghǎo le.',ex_vn:'Anh vừa nghiên cứu vừa lắp, sau hơn ba tháng nỗ lực cuối cùng đã lắp xong thiết bị.',
   exList:[
     {zh:'他边钻研边安装，经过三个多月的努力，终于把设备装好了。',py:'Tā biān zuānyán biān ānzhuāng, jīngguò sān ge duō yuè de nǔlì, zhōngyú bǎ shèbèi zhuānghǎo le.',vn:'Anh vừa nghiên cứu vừa lắp, sau hơn ba tháng nỗ lực cuối cùng đã lắp xong thiết bị.'},
     {zh:'王师傅刻苦钻研技术，成了厂里的技术骨干。',py:'Wáng shīfu kèkǔ zuānyán jìshù, chéngle chǎng li de jìshù gǔgàn.',vn:'Bác Vương miệt mài nghiên cứu kỹ thuật, trở thành cán bộ kỹ thuật nòng cốt của nhà máy.'},
     {zh:'遇到难题，他总是钻研到深夜。',py:'Yùdào nántí, tā zǒngshì zuānyán dào shēnyè.',vn:'Gặp bài khó, cậu ấy luôn miệt mài nghiên cứu đến tận khuya.'}
   ],
   colloFull:[
     {zh:'刻苦钻研',py:'kèkǔ zuānyán',vn:'miệt mài nghiên cứu'},
     {zh:'钻研技术',py:'zuānyán jìshù',vn:'nghiên cứu kỹ thuật'},
     {zh:'钻研业务',py:'zuānyán yèwù',vn:'trau dồi nghiệp vụ'},
     {zh:'钻研精神',py:'zuānyán jīngshén',vn:'tinh thần nghiên cứu'},
     {zh:'深入钻研',py:'shēnrù zuānyán',vn:'nghiên cứu sâu'}
   ],
   patterns:[
     {s:'边钻研边 + V',m:'Vừa nghiên cứu vừa làm'},
     {s:'刻苦 / 认真 + 钻研 + N',m:'Miệt mài nghiên cứu …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần chịu khó nghiên cứu, bài khó mấy cũng giải được.',answer:'只要肯钻研，再难的题也能解出来。',answerPy:'Zhǐyào kěn zuānyán, zài nán de tí yě néng jiě chūlái.',
      note:'再 + Adj + 的 + N + 也……: … khó mấy cũng …; 只要……(就)…….',pair:'再……也……'},
     {promptLang:'vi',prompt:'Sau nhiều năm miệt mài nghiên cứu, cô ấy đã trở thành chuyên gia trong lĩnh vực này.',answer:'经过多年的刻苦钻研，她成了这个领域的专家。',answerPy:'Jīngguò duō nián de kèkǔ zuānyán, tā chéngle zhège lǐngyù de zhuānjiā.',
      note:'经过 + quá trình, vế sau nêu kết quả.',pair:'经过……'}
   ]},

  {n:36,zh:'动态',py:'dòngtài',pos:'Danh từ',vn:'động thái, trạng thái vận động; tình hình mới',hv:'động thái',em:'📈',lesson:1,
   explain:['Trạng thái đang vận động, biến đổi; cách hành động, hoạt động (对猫的动态进行抓拍 = chụp bắt khoảnh khắc mèo cử động).','Còn nghĩa: tình hình mới, tin mới (最新动态, 发动态 = đăng trạng thái lên mạng xã hội). Trái nghĩa 静态.'],
   usage:'……的动态; 最新动态; 关注 / 掌握 + 动态; 发动态; 动态图片.',
   collo:['最新动态','关注动态','掌握动态','发动态'],
   ex_zh:'投资者要随时关注市场的最新动态。',ex_py:'Tóuzīzhě yào suíshí guānzhù shìchǎng de zuìxīn dòngtài.',ex_vn:'Nhà đầu tư phải luôn theo dõi tình hình mới nhất của thị trường.',
   exList:[
     {zh:'安装好的设备能够对猫的动态进行抓拍并储存下图像。',py:'Ānzhuānghǎo de shèbèi nénggòu duì māo de dòngtài jìnxíng zhuāpāi bìng chǔcún xià túxiàng.',vn:'Thiết bị lắp xong có thể chụp bắt những cử động của mèo và lưu lại hình ảnh.'},
     {zh:'投资者要随时关注市场的最新动态。',py:'Tóuzīzhě yào suíshí guānzhù shìchǎng de zuìxīn dòngtài.',vn:'Nhà đầu tư phải luôn theo dõi tình hình mới nhất của thị trường.'},
     {zh:'她每天都在朋友圈发动态。',py:'Tā měi tiān dōu zài péngyouquān fā dòngtài.',vn:'Ngày nào cô ấy cũng đăng trạng thái lên mạng xã hội.'}
   ],
   colloFull:[
     {zh:'最新动态',py:'zuìxīn dòngtài',vn:'tình hình mới nhất'},
     {zh:'关注动态',py:'guānzhù dòngtài',vn:'theo dõi tình hình'},
     {zh:'掌握动态',py:'zhǎngwò dòngtài',vn:'nắm bắt động thái'},
     {zh:'发动态',py:'fā dòngtài',vn:'đăng trạng thái (mạng xã hội)'},
     {zh:'动态图片',py:'dòngtài túpiàn',vn:'ảnh động'}
   ],
   patterns:[
     {s:'对 + ……的动态 + 进行 + V',m:'Tiến hành … đối với động thái của … (văn viết)'},
     {s:'关注 / 掌握 + 最新动态',m:'Theo dõi / nắm bắt tình hình mới'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi lên đại học, cậu ấy rất ít đăng trạng thái lên mạng.',answer:'自从上了大学，他就很少在网上发动态了。',answerPy:'Zìcóng shàngle dàxué, tā jiù hěn shǎo zài wǎng shang fā dòngtài le.',
      note:'自从……就……: từ khi … thì …; 了 cuối câu chỉ sự thay đổi.',pair:'自从……就……'},
     {promptLang:'vi',prompt:'Nhà trường sẽ kịp thời thông báo tình hình mới nhất về kỳ thi.',answer:'学校会及时通知考试的最新动态。',answerPy:'Xuéxiào huì jíshí tōngzhī kǎoshì de zuìxīn dòngtài.',
      note:'会 + V: sẽ; 及时 = kịp thời (khác 即时 = ngay tức thì).',pair:'会 + V'}
   ]},

  {n:37,zh:'储存',py:'chǔcún',pos:'Động từ',vn:'lưu lại, dự trữ, lưu trữ',hv:'trữ tồn',em:'💾',lesson:1,
   explain:['Cất giữ, tích trữ để dùng sau (lương thực, nước, năng lượng); lưu trữ (dữ liệu, hình ảnh).','Hay đi với bổ ngữ 下 / 起来: 储存下图像, 储存起来. Gần nghĩa 保存, 存储.'],
   usage:'储存 + 粮食 / 水 / 数据 / 图像; 储存下来 / 起来; 储存空间; 储存在 + nơi.',
   collo:['储存图像','储存粮食','储存空间','储存起来'],
   ex_zh:'手机的储存空间不够了，得删掉一些照片。',ex_py:'Shǒujī de chǔcún kōngjiān bú gòu le, děi shāndiào yìxiē zhàopiàn.',ex_vn:'Bộ nhớ điện thoại không đủ nữa, phải xoá bớt ảnh.',
   exList:[
     {zh:'设备不仅能抓拍猫的动态，还能储存下图像。',py:'Shèbèi bùjǐn néng zhuāpāi māo de dòngtài, hái néng chǔcún xià túxiàng.',vn:'Thiết bị không chỉ chụp bắt được cử động của mèo mà còn lưu lại hình ảnh.'},
     {zh:'手机的储存空间不够了，得删掉一些照片。',py:'Shǒujī de chǔcún kōngjiān bú gòu le, děi shāndiào yìxiē zhàopiàn.',vn:'Bộ nhớ điện thoại không đủ nữa, phải xoá bớt ảnh.'},
     {zh:'松鼠秋天会把食物储存起来，准备过冬。',py:'Sōngshǔ qiūtiān huì bǎ shíwù chǔcún qǐlái, zhǔnbèi guòdōng.',vn:'Mùa thu sóc sẽ tích trữ thức ăn để chuẩn bị qua đông.'}
   ],
   colloFull:[
     {zh:'储存图像',py:'chǔcún túxiàng',vn:'lưu trữ hình ảnh'},
     {zh:'储存粮食',py:'chǔcún liángshi',vn:'dự trữ lương thực'},
     {zh:'储存空间',py:'chǔcún kōngjiān',vn:'dung lượng lưu trữ'},
     {zh:'储存起来',py:'chǔcún qǐlái',vn:'cất giữ lại'},
     {zh:'储存数据',py:'chǔcún shùjù',vn:'lưu dữ liệu'}
   ],
   patterns:[
     {s:'把 + N + 储存起来 / 下来',m:'Cất giữ, lưu lại …'},
     {s:'储存 + 数据 / 图像',m:'Lưu trữ dữ liệu / hình ảnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để phòng mất điện, tốt nhất nên lưu dữ liệu quan trọng vào ổ cứng.',answer:'为了防止停电，最好把重要的数据储存在硬盘里。',answerPy:'Wèile fángzhǐ tíngdiàn, zuìhǎo bǎ zhòngyào de shùjù chǔcún zài yìngpán li.',
      note:'把 + N + V + 在 + nơi: đặt / lưu N vào đâu.',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Loại khoai lang này có thể cất giữ mấy tháng liền mà không hỏng.',answer:'这种红薯可以储存好几个月都不坏。',answerPy:'Zhè zhǒng hóngshǔ kěyǐ chǔcún hǎo jǐ ge yuè dōu bú huài.',
      note:'好几 + lượng từ = khá nhiều, mấy …; 都 nhấn mạnh.',pair:'好几 + lượng từ'}
   ]},

  {n:38,zh:'遥控',py:'yáokòng',pos:'Động từ',vn:'điều khiển từ xa',hv:'dao khống',em:'🎮',lesson:1,
   explain:['Điều khiển máy móc, thiết bị từ xa (qua sóng vô tuyến, mạng Internet).','Làm động từ (遥控摄像头) hoặc định ngữ (遥控飞机; 遥控器 = cái điều khiển từ xa).'],
   usage:'遥控 + thiết bị; 通过……遥控……; 遥控器; 遥控飞机 / 汽车; 远程遥控.',
   collo:['遥控器','遥控飞机','远程遥控','遥控摄像头'],
   ex_zh:'电视的遥控器又找不到了。',ex_py:'Diànshì de yáokòngqì yòu zhǎo bu dào le.',ex_vn:'Lại không tìm thấy cái điều khiển tivi rồi.',
   exList:[
     {zh:'钱小奇在外面时还能通过互联网遥控摄像头。',py:'Qián Xiǎoqí zài wàimiàn shí hái néng tōngguò hùliánwǎng yáokòng shèxiàngtóu.',vn:'Khi ở ngoài, Tiền Tiểu Kỳ còn có thể điều khiển camera từ xa qua Internet.'},
     {zh:'电视的遥控器又找不到了。',py:'Diànshì de yáokòngqì yòu zhǎo bu dào le.',vn:'Lại không tìm thấy cái điều khiển tivi rồi.'},
     {zh:'弟弟过生日时，爸爸送了他一架遥控飞机。',py:'Dìdi guò shēngrì shí, bàba sòngle tā yí jià yáokòng fēijī.',vn:'Sinh nhật em trai, bố tặng em một chiếc máy bay điều khiển từ xa.'}
   ],
   colloFull:[
     {zh:'遥控器',py:'yáokòngqì',vn:'cái điều khiển từ xa'},
     {zh:'遥控飞机',py:'yáokòng fēijī',vn:'máy bay điều khiển từ xa'},
     {zh:'远程遥控',py:'yuǎnchéng yáokòng',vn:'điều khiển từ xa (qua mạng)'},
     {zh:'遥控摄像头',py:'yáokòng shèxiàngtóu',vn:'điều khiển camera từ xa'},
     {zh:'遥控汽车',py:'yáokòng qìchē',vn:'ô tô điều khiển'}
   ],
   patterns:[
     {s:'通过 + phương tiện + 遥控 + thiết bị',m:'Điều khiển … từ xa qua …'},
     {s:'遥控 + N',m:'… điều khiển từ xa (định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bây giờ chỉ cần có một chiếc điện thoại là điều khiển từ xa được điều hoà ở nhà.',answer:'现在只要有一部手机，就能遥控家里的空调。',answerPy:'Xiànzài zhǐyào yǒu yí bù shǒujī, jiù néng yáokòng jiā li de kōngtiáo.',
      note:'只要……就……: chỉ cần … là ….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nhờ camera điều khiển từ xa, tôi ở văn phòng cũng nhìn thấy được mèo ở nhà.',answer:'通过遥控摄像头，我在办公室也能看到家里的猫。',answerPy:'Tōngguò yáokòng shèxiàngtóu, wǒ zài bàngōngshì yě néng kàndào jiā li de māo.',
      note:'通过 + phương tiện: thông qua, nhờ …; 也能 = cũng có thể.',pair:'通过……'}
   ]},

  {n:39,zh:'即时',py:'jíshí',pos:'Phó từ',vn:'ngay lập tức, tức thời',hv:'tức thời',em:'⏱️',lesson:1,
   explain:['Phó từ: ngay lập tức, tức thì (= 立即, 立刻) — văn viết. Sách đánh dấu * (từ vượt đề cương).','Hay dùng trong công nghệ: 即时监控, 即时发送, 即时通讯 (nhắn tin tức thời). Phân biệt 及时 (kịp thời, đúng lúc).'],
   usage:'即时 + 发送 / 监控 / 翻译 / 更新; 进行即时监控; 即时通讯.',
   collo:['即时监控','即时发送','即时翻译','即时通讯'],
   ex_zh:'这款软件可以即时翻译二十多种语言。',ex_py:'Zhè kuǎn ruǎnjiàn kěyǐ jíshí fānyì èrshí duō zhǒng yǔyán.',ex_vn:'Phần mềm này có thể dịch tức thì hơn hai mươi thứ tiếng.',
   exList:[
     {zh:'他还能通过互联网对家里的猫进行即时监控。',py:'Tā hái néng tōngguò hùliánwǎng duì jiā li de māo jìnxíng jíshí jiānkòng.',vn:'Anh còn có thể giám sát tức thời lũ mèo ở nhà qua Internet.'},
     {zh:'系统把拍下的照片即时发到他的邮箱里“报警”。',py:'Xìtǒng bǎ pāixià de zhàopiàn jíshí fādào tā de yóuxiāng li "bàojǐng".',vn:'Hệ thống gửi ngay ảnh chụp được vào hộp thư của anh để "báo động".'},
     {zh:'这款软件可以即时翻译二十多种语言。',py:'Zhè kuǎn ruǎnjiàn kěyǐ jíshí fānyì èrshí duō zhǒng yǔyán.',vn:'Phần mềm này có thể dịch tức thì hơn hai mươi thứ tiếng.'}
   ],
   colloFull:[
     {zh:'即时监控',py:'jíshí jiānkòng',vn:'giám sát tức thời'},
     {zh:'即时发送',py:'jíshí fāsòng',vn:'gửi ngay lập tức'},
     {zh:'即时翻译',py:'jíshí fānyì',vn:'dịch tức thì'},
     {zh:'即时通讯',py:'jíshí tōngxùn',vn:'nhắn tin tức thời'},
     {zh:'即时更新',py:'jíshí gēngxīn',vn:'cập nhật tức thì'}
   ],
   patterns:[
     {s:'即时 + V (发送 / 监控 / 更新)',m:'… ngay lập tức, tức thì'},
     {s:'对 + N + 进行 + 即时监控',m:'Giám sát N theo thời gian thực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ có tin mới, hệ thống sẽ ngay lập tức gửi đến điện thoại của bạn.',answer:'一有新消息，系统就会即时发送到你的手机上。',answerPy:'Yì yǒu xīn xiāoxi, xìtǒng jiù huì jíshí fāsòng dào nǐ de shǒujī shang.',
      note:'一……就……: hễ … là …; 即时 đứng trước động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Nhờ camera, bố mẹ có thể nắm ngay tình hình của con ở nhà trẻ.',answer:'通过摄像头，父母可以即时了解孩子在幼儿园的情况。',answerPy:'Tōngguò shèxiàngtóu, fùmǔ kěyǐ jíshí liǎojiě háizi zài yòu\'éryuán de qíngkuàng.',
      note:'通过 + phương tiện; 即时了解 = biết ngay (tức thời).',pair:'通过……'}
   ]},

  {n:40,zh:'操纵',py:'cāozòng',pos:'Động từ',vn:'điều khiển; thao túng',hv:'thao túng',em:'🕹️',lesson:1,
   explain:['Điều khiển, vận hành máy móc, thiết bị (操纵机器, 操纵方向盘, 操纵摄像头).','Nghĩa xấu: thao túng, giật dây người hay sự việc bằng thủ đoạn (操纵市场, 幕后操纵). Tiếng Việt "thao túng" chỉ có nghĩa xấu này — xem phần Phân biệt từ 操纵 — 操作.'],
   usage:'操纵 + 机器 / 飞机 / 摄像头; 操纵 + 市场 / 价格 (nghĩa xấu); 幕后操纵; 被……操纵.',
   collo:['操纵机器','操纵摄像头','幕后操纵','操纵市场'],
   ex_zh:'飞行员熟练地操纵着飞机，平稳地降落了。',ex_py:'Fēixíngyuán shúliàn de cāozòngzhe fēijī, píngwěn de jiàngluò le.',ex_vn:'Phi công điều khiển máy bay thuần thục, hạ cánh êm ái.',
   exList:[
     {zh:'他能通过操纵、移动摄像头，跟踪到家里的任何一个角落。',py:'Tā néng tōngguò cāozòng, yídòng shèxiàngtóu, gēnzōng dào jiā li de rènhé yí ge jiǎoluò.',vn:'Anh có thể điều khiển, di chuyển camera để theo dõi đến mọi góc trong nhà.'},
     {zh:'飞行员熟练地操纵着飞机，平稳地降落了。',py:'Fēixíngyuán shúliàn de cāozòngzhe fēijī, píngwěn de jiàngluò le.',vn:'Phi công điều khiển máy bay thuần thục, hạ cánh êm ái.'},
     {zh:'警方发现，有人在幕后操纵股票价格。',py:'Jǐngfāng fāxiàn, yǒu rén zài mùhòu cāozòng gǔpiào jiàgé.',vn:'Cảnh sát phát hiện có người đứng sau giật dây thao túng giá cổ phiếu.'}
   ],
   colloFull:[
     {zh:'操纵机器',py:'cāozòng jīqì',vn:'điều khiển máy móc'},
     {zh:'操纵摄像头',py:'cāozòng shèxiàngtóu',vn:'điều khiển camera'},
     {zh:'幕后操纵',py:'mùhòu cāozòng',vn:'giật dây sau hậu trường'},
     {zh:'操纵市场',py:'cāozòng shìchǎng',vn:'thao túng thị trường'},
     {zh:'操纵方向盘',py:'cāozòng fāngxiàngpán',vn:'cầm lái'}
   ],
   patterns:[
     {s:'操纵 + máy móc',m:'Điều khiển máy (nghĩa trung tính)'},
     {s:'在幕后操纵 + ……',m:'Giật dây, thao túng … (nghĩa xấu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cỗ máy này rất phức tạp, không phải ai cũng điều khiển được.',answer:'这台机器很复杂，并不是谁都能操纵的。',answerPy:'Zhè tái jīqì hěn fùzá, bìng bú shì shéi dōu néng cāozòng de.',
      note:'谁都 + V: ai cũng … (đại từ phiếm chỉ); 并不是 nhấn mạnh phủ định.',pair:'谁都……'},
     {promptLang:'vi',prompt:'Đừng để người khác thao túng suy nghĩ của mình.',answer:'别让别人操纵你的想法。',answerPy:'Bié ràng biérén cāozòng nǐ de xiǎngfǎ.',
      note:'别让 + người + V: đừng để ai làm gì (câu kiêm ngữ phủ định).',pair:'别让……'}
   ]},

  {n:41,zh:'跟踪',py:'gēnzōng',pos:'Động từ',vn:'theo dõi, bám theo',hv:'cân tung',em:'🕵️',lesson:1,
   explain:['Bám theo sát phía sau (người, vật) để theo dõi hành tung.','Còn nghĩa theo dõi liên tục một sự việc, một quá trình (跟踪报道, 跟踪调查); trong bài: camera quay theo tới mọi góc nhà.'],
   usage:'跟踪 + người / mục tiêu; 被人跟踪; 跟踪到 + nơi; 跟踪报道 / 调查 / 服务.',
   collo:['被人跟踪','跟踪报道','跟踪调查','跟踪目标'],
   ex_zh:'记者对这件事进行了跟踪报道。',ex_py:'Jìzhě duì zhè jiàn shì jìnxíngle gēnzōng bàodào.',ex_vn:'Phóng viên đã đưa tin theo dõi liên tục về sự việc này.',
   exList:[
     {zh:'同时能通过操纵、移动摄像头，跟踪到家里的任何一个角落。',py:'Tóngshí néng tōngguò cāozòng, yídòng shèxiàngtóu, gēnzōng dào jiā li de rènhé yí ge jiǎoluò.',vn:'Đồng thời có thể điều khiển, di chuyển camera để theo dõi tới mọi góc nhà.'},
     {zh:'她觉得有人在跟踪她，赶紧走进了一家商店。',py:'Tā juéde yǒu rén zài gēnzōng tā, gǎnjǐn zǒujìnle yì jiā shāngdiàn.',vn:'Cô ấy thấy có người bám theo mình, vội bước vào một cửa hàng.'},
     {zh:'记者对这件事进行了跟踪报道。',py:'Jìzhě duì zhè jiàn shì jìnxíngle gēnzōng bàodào.',vn:'Phóng viên đã đưa tin theo dõi liên tục về sự việc này.'}
   ],
   colloFull:[
     {zh:'被人跟踪',py:'bèi rén gēnzōng',vn:'bị người bám theo'},
     {zh:'跟踪报道',py:'gēnzōng bàodào',vn:'đưa tin theo dõi'},
     {zh:'跟踪调查',py:'gēnzōng diàochá',vn:'điều tra theo dõi'},
     {zh:'跟踪目标',py:'gēnzōng mùbiāo',vn:'bám theo mục tiêu'},
     {zh:'跟踪服务',py:'gēnzōng fúwù',vn:'dịch vụ chăm sóc theo dõi'}
   ],
   patterns:[
     {s:'跟踪 + 到 + nơi',m:'Theo dõi, bám theo đến …'},
     {s:'对 + sự việc + 进行跟踪 + 报道 / 调查',m:'Đưa tin / điều tra theo dõi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ định vị GPS, bố mẹ có thể theo dõi được con đang ở đâu.',answer:'通过GPS定位，父母可以跟踪到孩子在哪儿。',answerPy:'Tōngguò GPS dìngwèi, fùmǔ kěyǐ gēnzōng dào háizi zài nǎr.',
      note:'通过 + phương tiện; 跟踪到 = theo dõi được.',pair:'通过……'},
     {promptLang:'vi',prompt:'Nếu phát hiện bị người lạ bám theo, phải lập tức gọi cảnh sát.',answer:'如果发现被陌生人跟踪，要马上报警。',answerPy:'Rúguǒ fāxiàn bèi mòshēngrén gēnzōng, yào mǎshàng bàojǐng.',
      note:'如果……(就)……: nếu … thì …; 被 + người + V.',pair:'如果……'}
   ]},

  {n:42,zh:'角落',py:'jiǎoluò',pos:'Danh từ',vn:'góc, xó xỉnh',hv:'giác lạc',em:'📐',lesson:1,
   explain:['Góc (chỗ hai bức tường giáp nhau), chỗ khuất ít người để ý.','Nghĩa rộng: mọi nơi, mọi chốn (世界的每一个角落).'],
   usage:'……的角落里; 任何一个角落; 每一个角落; 被遗忘的角落.',
   collo:['任何一个角落','每一个角落','角落里','被遗忘的角落'],
   ex_zh:'我在房间的角落里找到了那本丢失的书。',ex_py:'Wǒ zài fángjiān de jiǎoluò li zhǎodàole nà běn diūshī de shū.',ex_vn:'Tôi tìm thấy cuốn sách bị mất ở một góc phòng.',
   exList:[
     {zh:'摄像头能跟踪到家里的任何一个角落。',py:'Shèxiàngtóu néng gēnzōng dào jiā li de rènhé yí ge jiǎoluò.',vn:'Camera có thể theo tới mọi góc trong nhà.'},
     {zh:'我在房间的角落里找到了那本丢失的书。',py:'Wǒ zài fángjiān de jiǎoluò li zhǎodàole nà běn diūshī de shū.',vn:'Tôi tìm thấy cuốn sách bị mất ở một góc phòng.'},
     {zh:'他的歌声传到了世界的每一个角落。',py:'Tā de gēshēng chuándàole shìjiè de měi yí ge jiǎoluò.',vn:'Tiếng hát của anh ấy vang tới mọi nơi trên thế giới.'}
   ],
   colloFull:[
     {zh:'任何一个角落',py:'rènhé yí ge jiǎoluò',vn:'bất kỳ góc nào'},
     {zh:'每一个角落',py:'měi yí ge jiǎoluò',vn:'mọi ngóc ngách'},
     {zh:'角落里',py:'jiǎoluò li',vn:'trong góc'},
     {zh:'被遗忘的角落',py:'bèi yíwàng de jiǎoluò',vn:'góc bị lãng quên'},
     {zh:'屋子的角落',py:'wūzi de jiǎoluò',vn:'góc nhà'}
   ],
   patterns:[
     {s:'在 + ……的角落里',m:'Ở góc …'},
     {s:'任何 / 每一个 + 角落',m:'Mọi ngóc ngách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ đã tìm khắp mọi ngóc ngách trong nhà mà vẫn không thấy chìa khoá.',answer:'妈妈把家里的每一个角落都找遍了，还是没找到钥匙。',answerPy:'Māma bǎ jiā li de měi yí ge jiǎoluò dōu zhǎobiàn le, háishi méi zhǎodào yàoshi.',
      note:'V + 遍 = làm khắp (bổ ngữ kết quả); 还是没…… = vẫn chưa ….',pair:'V + 遍'},
     {promptLang:'vi',prompt:'Dù ở góc nào của thế giới, Internet cũng có thể kết nối chúng ta với nhau.',answer:'无论在世界的哪个角落，互联网都能把我们联系在一起。',answerPy:'Wúlùn zài shìjiè de nǎge jiǎoluò, hùliánwǎng dōu néng bǎ wǒmen liánxì zài yìqǐ.',
      note:'无论 + đại từ nghi vấn (哪个)……，都……: dù … nào cũng ….',pair:'无论……都……'}
   ]},

  {n:43,zh:'误差',py:'wùchā',pos:'Danh từ',vn:'sai số, độ sai lệch',hv:'ngộ sai',em:'📏',lesson:1,
   explain:['Sai số: chênh lệch giữa kết quả đo / tính toán và giá trị thật.','Hay đi với 有 / 存在 / 减少 + 误差; 误差很小, 误差不超过……, 时间误差. Khác 错误 (cái sai, lỗi).'],
   usage:'误差 + 很小 / 不到 / 不超过 + số; 时间误差; 减少 / 控制 + 误差; 有误差.',
   collo:['时间误差','误差很小','减少误差','误差不超过'],
   ex_zh:'这块手表很准，一个月的误差不超过一秒。',ex_py:'Zhè kuài shǒubiǎo hěn zhǔn, yí ge yuè de wùchā bù chāoguò yì miǎo.',ex_vn:'Chiếc đồng hồ này rất chính xác, sai số một tháng không quá một giây.',
   exList:[
     {zh:'它每天下午两点左右吃饭喝水，时间误差平均不到5分钟。',py:'Tā měi tiān xiàwǔ liǎng diǎn zuǒyòu chīfàn hē shuǐ, shíjiān wùchā píngjūn bú dào wǔ fēnzhōng.',vn:'Ngày nào nó cũng ăn uống vào khoảng hai giờ chiều, sai lệch thời gian trung bình chưa đến 5 phút.'},
     {zh:'这块手表很准，一个月的误差不超过一秒。',py:'Zhè kuài shǒubiǎo hěn zhǔn, yí ge yuè de wùchā bù chāoguò yì miǎo.',vn:'Chiếc đồng hồ này rất chính xác, sai số một tháng không quá một giây.'},
     {zh:'做实验时要多测几次，以减少误差。',py:'Zuò shíyàn shí yào duō cè jǐ cì, yǐ jiǎnshǎo wùchā.',vn:'Khi làm thí nghiệm nên đo vài lần để giảm sai số.'}
   ],
   colloFull:[
     {zh:'时间误差',py:'shíjiān wùchā',vn:'sai lệch thời gian'},
     {zh:'误差很小',py:'wùchā hěn xiǎo',vn:'sai số rất nhỏ'},
     {zh:'减少误差',py:'jiǎnshǎo wùchā',vn:'giảm sai số'},
     {zh:'误差不超过',py:'wùchā bù chāoguò',vn:'sai số không vượt quá'},
     {zh:'存在误差',py:'cúnzài wùchā',vn:'có sai số'}
   ],
   patterns:[
     {s:'误差 + 不到 / 不超过 + số lượng',m:'Sai số chưa đến / không quá …'},
     {s:'……，以减少误差',m:'…, để giảm sai số (以 = để, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dự báo thời tiết tuy có sai số, nhưng nhìn chung vẫn khá chính xác.',answer:'天气预报虽然有误差，但总体上还是比较准确的。',answerPy:'Tiānqì yùbào suīrán yǒu wùchā, dàn zǒngtǐ shang háishi bǐjiào zhǔnquè de.',
      note:'虽然……但……还是……; 总体上 = nhìn chung.',pair:'虽然……但……'},
     {promptLang:'vi',prompt:'Chiếc máy này đo rất chuẩn, sai số nhỏ đến mức gần như có thể bỏ qua.',answer:'这台仪器测得很准，误差小得几乎可以忽略。',answerPy:'Zhè tái yíqì cè de hěn zhǔn, wùchā xiǎo de jīhū kěyǐ hūlüè.',
      note:'Adj + 得 + bổ ngữ mức độ; 忽略 ôn bài 1.',pair:'Adj + 得 + bổ ngữ'}
   ]},

  {n:44,zh:'踪迹',py:'zōngjì',pos:'Danh từ',vn:'tung tích, vết tích, dấu vết',hv:'tung tích',em:'👣',lesson:1,
   explain:['Dấu vết, hành tung để lại khi hành động, đi lại (của người, động vật).','Hay đi với 发现 / 寻找 / 了解 + 踪迹; 不见踪迹, 毫无踪迹 (biệt tăm).'],
   usage:'……的踪迹; 发现 / 寻找 / 了解 + 踪迹; 不见踪迹; 毫无踪迹.',
   collo:['猫的踪迹','发现踪迹','不见踪迹','寻找踪迹'],
   ex_zh:'科学家在这片森林里发现了老虎的踪迹。',ex_py:'Kēxuéjiā zài zhè piàn sēnlín li fāxiànle lǎohǔ de zōngjì.',ex_vn:'Các nhà khoa học đã phát hiện dấu vết của hổ trong khu rừng này.',
   exList:[
     {zh:'这套系统除了帮钱小奇了解了猫的踪迹以外，还帮过他不少忙。',py:'Zhè tào xìtǒng chúle bāng Qián Xiǎoqí liǎojiěle māo de zōngjì yǐwài, hái bāngguo tā bùshǎo máng.',vn:'Hệ thống này ngoài việc giúp Tiền Tiểu Kỳ nắm được hành tung của mèo, còn giúp anh không ít việc.'},
     {zh:'科学家在这片森林里发现了老虎的踪迹。',py:'Kēxuéjiā zài zhè piàn sēnlín li fāxiànle lǎohǔ de zōngjì.',vn:'Các nhà khoa học đã phát hiện dấu vết của hổ trong khu rừng này.'},
     {zh:'小偷早就逃得不见踪迹了。',py:'Xiǎotōu zǎo jiù táo de bú jiàn zōngjì le.',vn:'Tên trộm đã chạy mất tăm từ lâu.'}
   ],
   colloFull:[
     {zh:'猫的踪迹',py:'māo de zōngjì',vn:'hành tung của mèo'},
     {zh:'发现踪迹',py:'fāxiàn zōngjì',vn:'phát hiện dấu vết'},
     {zh:'不见踪迹',py:'bú jiàn zōngjì',vn:'biệt tăm'},
     {zh:'寻找踪迹',py:'xúnzhǎo zōngjì',vn:'tìm dấu vết'},
     {zh:'毫无踪迹',py:'háowú zōngjì',vn:'không chút dấu vết'}
   ],
   patterns:[
     {s:'发现 / 寻找 + ……的踪迹',m:'Phát hiện / tìm dấu vết của …'},
     {s:'V + 得 + 不见踪迹',m:'… đến mất tăm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngoài việc tìm dấu vết của con chó bị lạc, họ còn dán thông báo tìm chó khắp nơi.',answer:'除了寻找走失的小狗的踪迹以外，他们还到处贴了寻狗启事。',answerPy:'Chúle xúnzhǎo zǒushī de xiǎogǒu de zōngjì yǐwài, tāmen hái dàochù tiēle xún gǒu qǐshì.',
      note:'除了……以外，还……: ngoài … ra còn … (bổ sung).',pair:'除了……以外，还……'},
     {promptLang:'vi',prompt:'Cảnh sát tìm suốt ba ngày mà vẫn chưa thấy tung tích của anh ta.',answer:'警察找了整整三天，还是没有发现他的踪迹。',answerPy:'Jǐngchá zhǎole zhěngzhěng sān tiān, háishi méiyǒu fāxiàn tā de zōngjì.',
      note:'V + 了 + thời lượng (整整三天 = trọn ba ngày).',pair:'V + 了 + thời lượng'}
   ]},

  {n:45,zh:'动静',py:'dòngjing',pos:'Danh từ',vn:'tiếng động, động tĩnh',hv:'động tĩnh',em:'🔔',lesson:1,
   explain:['Tiếng động (do người, vật hoạt động phát ra).','Nghĩa rộng: tình hình, động tĩnh, dấu hiệu hoạt động (有什么动静). Chú ý: 静 đọc thanh nhẹ (dòngjing).'],
   usage:'有 / 没有 + 动静; 稍有动静; 一点儿动静也没有; 听到动静.',
   collo:['稍有动静','没有动静','一点儿动静','听到动静'],
   ex_zh:'屋子里静悄悄的，一点儿动静也没有。',ex_py:'Wūzi li jìngqiāoqiāo de, yìdiǎnr dòngjing yě méiyǒu.',ex_vn:'Trong nhà im ắng, chẳng có chút động tĩnh nào.',
   exList:[
     {zh:'如今，只要家里稍有动静，操作系统就能将图像记录下来。',py:'Rújīn, zhǐyào jiā li shāo yǒu dòngjing, cāozuò xìtǒng jiù néng jiāng túxiàng jìlù xiàlái.',vn:'Giờ đây, chỉ cần trong nhà có chút động tĩnh, hệ thống vận hành sẽ ghi lại hình ảnh.'},
     {zh:'屋子里静悄悄的，一点儿动静也没有。',py:'Wūzi li jìngqiāoqiāo de, yìdiǎnr dòngjing yě méiyǒu.',vn:'Trong nhà im ắng, chẳng có chút động tĩnh nào.'},
     {zh:'我给他发了好几条消息，到现在还没有动静。',py:'Wǒ gěi tā fāle hǎo jǐ tiáo xiāoxi, dào xiànzài hái méiyǒu dòngjing.',vn:'Tôi nhắn cho cậu ấy mấy tin rồi, đến giờ vẫn bặt vô âm tín.'}
   ],
   colloFull:[
     {zh:'稍有动静',py:'shāo yǒu dòngjing',vn:'hơi có động tĩnh'},
     {zh:'没有动静',py:'méiyǒu dòngjing',vn:'không có động tĩnh'},
     {zh:'一点儿动静',py:'yìdiǎnr dòngjing',vn:'chút tiếng động'},
     {zh:'听到动静',py:'tīngdào dòngjing',vn:'nghe thấy tiếng động'},
     {zh:'动静很大',py:'dòngjing hěn dà',vn:'ầm ĩ, rùm beng'}
   ],
   patterns:[
     {s:'只要 + 稍有动静，就……',m:'Chỉ cần có chút động tĩnh là …'},
     {s:'一点儿动静也没有',m:'Chẳng có chút động tĩnh nào'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con chó rất cảnh giác, ngoài sân hễ có tiếng động là nó sủa ngay.',answer:'小狗很警觉，院子里一有动静，它就叫起来。',answerPy:'Xiǎogǒu hěn jǐngjué, yuànzi li yì yǒu dòngjing, tā jiù jiào qǐlái.',
      note:'一……就……: hễ … là …; 叫起来 = bắt đầu sủa.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Hồ sơ nộp đã một tháng rồi mà đến giờ vẫn chẳng có động tĩnh gì.',answer:'申请已经交了一个月了，可是到现在一点儿动静也没有。',answerPy:'Shēnqǐng yǐjīng jiāole yí ge yuè le, kěshì dào xiànzài yìdiǎnr dòngjing yě méiyǒu.',
      note:'一点儿 + N + 也没有: không có chút … nào.',pair:'一点儿……也没有'}
   ]},

  {n:46,zh:'操作',py:'cāozuò',pos:'Động từ',vn:'thao tác, vận hành, điều hành',hv:'thao tác',em:'🖱️',lesson:1,
   explain:['Làm việc, vận hành theo quy trình, kỹ thuật nhất định (操作电脑, 操作机器).','Làm danh từ: thao tác, cách vận hành (操作简单, 操作系统 = hệ điều hành / hệ thống vận hành). Khác 操纵 (điều khiển; có nghĩa xấu thao túng).'],
   usage:'操作 + 机器 / 电脑; 操作系统; 操作方法 / 规程; 操作简单; 实际操作.',
   collo:['操作系统','操作简单','操作方法','实际操作'],
   ex_zh:'这款手机操作简单，老年人也能很快学会。',ex_py:'Zhè kuǎn shǒujī cāozuò jiǎndān, lǎoniánrén yě néng hěn kuài xuéhuì.',ex_vn:'Chiếc điện thoại này thao tác đơn giản, người già cũng học được nhanh.',
   exList:[
     {zh:'只要家里稍有动静，操作系统就能将图像记录下来。',py:'Zhǐyào jiā li shāo yǒu dòngjing, cāozuò xìtǒng jiù néng jiāng túxiàng jìlù xiàlái.',vn:'Chỉ cần trong nhà có chút động tĩnh, hệ thống vận hành sẽ ghi lại hình ảnh.'},
     {zh:'这款手机操作简单，老年人也能很快学会。',py:'Zhè kuǎn shǒujī cāozuò jiǎndān, lǎoniánrén yě néng hěn kuài xuéhuì.',vn:'Chiếc điện thoại này thao tác đơn giản, người già cũng học được nhanh.'},
     {zh:'操作机器之前，一定要先看清楚说明书。',py:'Cāozuò jīqì zhīqián, yídìng yào xiān kàn qīngchu shuōmíngshū.',vn:'Trước khi vận hành máy, nhất định phải đọc kỹ sách hướng dẫn.'}
   ],
   colloFull:[
     {zh:'操作系统',py:'cāozuò xìtǒng',vn:'hệ điều hành / hệ thống vận hành'},
     {zh:'操作简单',py:'cāozuò jiǎndān',vn:'thao tác đơn giản'},
     {zh:'操作方法',py:'cāozuò fāngfǎ',vn:'cách thao tác'},
     {zh:'实际操作',py:'shíjì cāozuò',vn:'thực hành'},
     {zh:'操作机器',py:'cāozuò jīqì',vn:'vận hành máy'}
   ],
   patterns:[
     {s:'操作 + máy móc / thiết bị',m:'Vận hành, thao tác …'},
     {s:'N + 操作 + 简单 / 方便',m:'… thao tác đơn giản / tiện lợi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc máy này tuy thao tác đơn giản, nhưng dùng sai vẫn rất nguy hiểm.',answer:'这台机器虽然操作简单，但用错了还是很危险。',answerPy:'Zhè tái jīqì suīrán cāozuò jiǎndān, dàn yòngcuòle háishi hěn wēixiǎn.',
      note:'虽然……但……还是……: tuy … nhưng vẫn ….',pair:'虽然……但……还是……'},
     {promptLang:'vi',prompt:'Bài thi thực hành yêu cầu học sinh tự tay thao tác trên máy tính.',answer:'实际操作考试要求学生亲手操作电脑。',answerPy:'Shíjì cāozuò kǎoshì yāoqiú xuésheng qīnshǒu cāozuò diànnǎo.',
      note:'要求 + người + V (câu kiêm ngữ); 亲手 = tự tay.',pair:'要求 + người + V'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — chép nguyên văn sách (tr. 117–119), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 我不在时，猫在干什么',
   preQuiz:[
     {q:'钱小奇养了几只猫？',opts:['两只','三只','四只'],ans:1},
     {q:'大黄原来是一只什么样的猫？',opts:['流浪猫','朋友送的猫','宠物店买的猫'],ans:0},
     {q:'大黄每天常做什么？',opts:['在门口抓老鼠','趴在窗台上晒太阳','到处找东西吃'],ans:1},
     {q:'钱小奇回家时，白白会怎么做？',opts:['扑上来亲热地撞主人的腿','站在远处看着主人','躲在角落里睡觉'],ans:0},
     {q:'喜儿每天大部分时间在做什么？',opts:['睡觉','整理自己的毛发','在门口等主人'],ans:1},
     {q:'钱小奇每天早起第一件事是什么？',opts:['上网','伺候猫','去上班'],ans:1},
     {q:'主人回家时，喜儿怎样表达自己的热情？',opts:['扑到主人怀里','站在远处凝视主人','跑到门口迎接'],ans:1},
     {q:'钱小奇为什么在家里安摄像头？',opts:['为了防小偷','想弄清楚自己不在家时猫在做什么','想拍猫的照片发到网上'],ans:1},
     {q:'第一个摄像头有什么缺陷？',opts:['不能移动，拍下的很多镜头是空的','声音太大','价格太贵'],ans:0},
     {q:'钱小奇是怎样得到新设备的？',opts:['请专家来安装','自力更生，边钻研边安装','朋友送给他的'],ans:1},
     {q:'分析数据后，钱小奇发现猫大多数时间在干什么？',opts:['玩耍','睡觉','吃东西'],ans:1},
     {q:'大黄和白白是怎样迎接主人的？',opts:['一直守在门口等他','听到脚步声和钥匙响后才跑到门口','从来不迎接'],ans:1},
     {q:'这套系统还帮钱小奇做过什么？',opts:['找到了掉在桌子下的钱包','抓住了小偷','按时给猫喂饭'],ans:0}
   ],
   lines:[
    {sp:0,zh:'钱小奇养了3只猫。大黄原本是只流浪猫，那天，淋着大雨来钱小奇家拜访，下完雨就不走了。见多识广的大黄虽有流浪史，却很有教养，它既不懒惰，也不嘴馋，天天趴在窗台上晒太阳，一副知足常乐的样子。每次钱小奇出门回来，它都恭恭敬敬地在门口迎接，不失君子风度。白白是个男孩儿，嗅觉灵敏，动作敏捷，快活而好动。钱小奇一回家，它就扑上来，亲热地撞主人的腿，还要把钱小奇和他带回来的东西统统闻一遍。喜儿是个人见人爱的女孩儿，每天大部分时间都在整理自己的毛发，把自己梳理得漂亮而迷人。',
     py:'Qián Xiǎoqí yǎngle sān zhī māo. Dàhuáng yuánběn shì zhī liúlàng māo, nà tiān, línzhe dàyǔ lái Qián Xiǎoqí jiā bàifǎng, xiàwán yǔ jiù bù zǒu le. Jiànduō-shíguǎng de Dàhuáng suī yǒu liúlàng shǐ, què hěn yǒu jiàoyǎng, tā jì bù lǎnduò, yě bù zuǐchán, tiāntiān pā zài chuāngtái shang shài tàiyáng, yí fù zhīzú-chánglè de yàngzi. Měi cì Qián Xiǎoqí chūmén huílái, tā dōu gōnggōngjìngjìng de zài ménkǒu yíngjiē, bù shī jūnzǐ fēngdù. Báibái shì ge nánháir, xiùjué língmǐn, dòngzuò mǐnjié, kuàihuo ér hàodòng. Qián Xiǎoqí yì huí jiā, tā jiù pū shànglái, qīnrè de zhuàng zhǔrén de tuǐ, hái yào bǎ Qián Xiǎoqí hé tā dài huílái de dōngxi tǒngtǒng wén yí biàn. Xǐ\'ér shì ge rénjiàn-rén\'ài de nǚháir, měi tiān dà bùfen shíjiān dōu zài zhěnglǐ zìjǐ de máofà, bǎ zìjǐ shūlǐ de piàoliang ér mírén.',
     vn:'Tiền Tiểu Kỳ nuôi 3 con mèo. Đại Hoàng vốn là một con mèo hoang, hôm ấy nó dầm mưa to đến "thăm" nhà Tiền Tiểu Kỳ, mưa tạnh rồi thì ở luôn không đi nữa. Đại Hoàng từng trải, tuy có quá khứ lang thang nhưng lại rất có giáo dục: nó chẳng lười biếng, cũng không tham ăn, ngày ngày nằm dài trên bậu cửa sổ phơi nắng, ra dáng biết đủ nên lúc nào cũng vui. Mỗi lần Tiền Tiểu Kỳ ra ngoài về, nó đều cung kính ra cửa đón, không mất phong độ quân tử. Bạch Bạch là "cậu con trai", khứu giác nhạy, động tác nhanh nhẹn, vui vẻ và hiếu động. Tiền Tiểu Kỳ vừa về đến nhà, nó liền nhào tới, thân thiết cọ vào chân chủ, còn phải ngửi hết một lượt cả Tiền Tiểu Kỳ lẫn đồ anh mang về. Hỷ Nhi là "cô con gái" ai gặp cũng quý, mỗi ngày phần lớn thời gian nó đều chải chuốt bộ lông của mình, sửa soạn cho mình thật xinh đẹp, quyến rũ.'},
    {sp:0,zh:'钱小奇是个模范饲养员，每天早起第一件事就是伺候猫：清洁猫舍，喂水，喂饭。他虽然工作繁忙，但每天最急切盼望的就是回家开门的那一刻——大黄和白白在门口等候他，喜儿则毫无例外地站在远处，用凝视表达着它深沉的热情。',
     py:'Qián Xiǎoqí shì ge mófàn sìyǎngyuán, měi tiān zǎo qǐ dì-yī jiàn shì jiù shì cìhou māo: qīngjié māoshè, wèi shuǐ, wèi fàn. Tā suīrán gōngzuò fánmáng, dàn měi tiān zuì jíqiè pànwàng de jiù shì huí jiā kāimén de nà yí kè — Dàhuáng hé Báibái zài ménkǒu děnghòu tā, Xǐ\'ér zé háowú lìwài de zhàn zài yuǎnchù, yòng níngshì biǎodázhe tā shēnchén de rèqíng.',
     vn:'Tiền Tiểu Kỳ là một người nuôi mèo mẫu mực, sáng nào thức dậy việc đầu tiên cũng là chăm sóc mèo: dọn chuồng, cho uống nước, cho ăn. Tuy công việc bận rộn, nhưng điều anh háo hức mong chờ nhất mỗi ngày chính là khoảnh khắc về nhà mở cửa — Đại Hoàng và Bạch Bạch đợi anh ở cửa, còn Hỷ Nhi thì lần nào cũng như lần nào, đứng ở đằng xa, dùng ánh nhìn chăm chú bày tỏ tình cảm nồng nhiệt mà sâu kín của mình.'},
    {sp:0,zh:'钱小奇很好奇，自己不在家时猫在做什么？那么长时间，猫们多无聊，会不会忧郁得生病？为了弄清楚这事，他在家里安了个摄像头，监视猫的一举一动。很快，他发现这个不能移动的摄像头有缺陷，拍下的很多镜头都是空的，于是，他增加了设备，并决定自力更生安装一套尖端玩意儿。他边钻研边安装，经过三个多月的努力，安装好的设备不仅能够对猫的动态进行抓拍并储存下图像，钱小奇在外面时还能通过互联网遥控摄像头，对家里的猫进行即时监控，同时能通过操纵、移动摄像头，跟踪到家里的任何一个角落。',
     py:'Qián Xiǎoqí hěn hàoqí, zìjǐ bú zài jiā shí māo zài zuò shénme? Nàme cháng shíjiān, māomen duō wúliáo, huì bu huì yōuyù de shēngbìng? Wèile nòng qīngchu zhè shì, tā zài jiā li ānle ge shèxiàngtóu, jiānshì māo de yì jǔ yí dòng. Hěn kuài, tā fāxiàn zhège bù néng yídòng de shèxiàngtóu yǒu quēxiàn, pāixià de hěn duō jìngtóu dōu shì kōng de, yúshì, tā zēngjiāle shèbèi, bìng juédìng zìlì-gēngshēng ānzhuāng yí tào jiānduān wányìr. Tā biān zuānyán biān ānzhuāng, jīngguò sān ge duō yuè de nǔlì, ānzhuānghǎo de shèbèi bùjǐn nénggòu duì māo de dòngtài jìnxíng zhuāpāi bìng chǔcún xià túxiàng, Qián Xiǎoqí zài wàimiàn shí hái néng tōngguò hùliánwǎng yáokòng shèxiàngtóu, duì jiā li de māo jìnxíng jíshí jiānkòng, tóngshí néng tōngguò cāozòng, yídòng shèxiàngtóu, gēnzōng dào jiā li de rènhé yí ge jiǎoluò.',
     vn:'Tiền Tiểu Kỳ rất tò mò: lúc mình không ở nhà, lũ mèo làm gì? Thời gian dài như vậy, lũ mèo buồn chán biết bao, liệu có buồn bã đến sinh bệnh không? Để làm rõ chuyện này, anh lắp một cái camera trong nhà, theo dõi mọi cử động của lũ mèo. Chẳng bao lâu, anh phát hiện cái camera không di chuyển được này có nhược điểm, nhiều cảnh quay được đều trống trơn, thế là anh bổ sung thêm thiết bị và quyết định tự lực lắp đặt một bộ "đồ chơi" tối tân. Anh vừa mày mò nghiên cứu vừa lắp, sau hơn ba tháng nỗ lực, bộ thiết bị lắp xong không chỉ chụp bắt được các cử động của mèo và lưu lại hình ảnh, mà khi ở bên ngoài, Tiền Tiểu Kỳ còn có thể điều khiển camera từ xa qua Internet để giám sát tức thời lũ mèo ở nhà, đồng thời có thể điều khiển, di chuyển camera để theo dõi tới bất kỳ góc nào trong nhà.'},
    {sp:0,zh:'通过对大量数据和图片进行分析，钱小奇发现，这三只猫大多数时间都在睡觉。除了睡觉，猫们的行动很有规律，以其中一只猫为例，它每天下午两点左右吃饭喝水，时间误差平均不到5分钟。更有趣的是，每次回家时，守在门口的大黄和白白也不是长时间在门口等他，而是在屋里该干吗干吗，听到主人的脚步声和钥匙响后，才会跑到门口来迎接。',
     py:'Tōngguò duì dàliàng shùjù hé túpiàn jìnxíng fēnxī, Qián Xiǎoqí fāxiàn, zhè sān zhī māo dàduōshù shíjiān dōu zài shuìjiào. Chúle shuìjiào, māomen de xíngdòng hěn yǒu guīlǜ, yǐ qízhōng yì zhī māo wéi lì, tā měi tiān xiàwǔ liǎng diǎn zuǒyòu chīfàn hē shuǐ, shíjiān wùchā píngjūn bú dào wǔ fēnzhōng. Gèng yǒuqù de shì, měi cì huí jiā shí, shǒu zài ménkǒu de Dàhuáng hé Báibái yě bú shì cháng shíjiān zài ménkǒu děng tā, ér shì zài wū li gāi gànmá gànmá, tīngdào zhǔrén de jiǎobùshēng hé yàoshi xiǎng hòu, cái huì pǎodào ménkǒu lái yíngjiē.',
     vn:'Qua phân tích một lượng lớn dữ liệu và hình ảnh, Tiền Tiểu Kỳ phát hiện ba con mèo này phần lớn thời gian đều ngủ. Ngoài ngủ ra, hoạt động của lũ mèo rất có quy luật: lấy một con làm ví dụ, ngày nào nó cũng ăn uống vào khoảng hai giờ chiều, sai lệch thời gian trung bình chưa đến 5 phút. Thú vị hơn nữa là mỗi lần anh về nhà, Đại Hoàng và Bạch Bạch — hai chú mèo "đón ở cửa" — cũng không phải chờ anh ở cửa suốt, mà ở trong nhà ai làm việc nấy, nghe thấy tiếng bước chân và tiếng chìa khoá lách cách của chủ rồi mới chạy ra cửa đón.'},
    {sp:0,zh:'这套系统除了帮钱小奇了解了猫的踪迹以外，还帮过钱小奇不少忙。一次，他在办公室上网遥控摄像头，找到了掉在家里桌子下的钱包。如今，只要家里稍有动静，操作系统就能将图像记录下来，并把拍下的照片即时发到他的邮箱里“报警”。',
     py:'Zhè tào xìtǒng chúle bāng Qián Xiǎoqí liǎojiěle māo de zōngjì yǐwài, hái bāngguo Qián Xiǎoqí bùshǎo máng. Yí cì, tā zài bàngōngshì shàngwǎng yáokòng shèxiàngtóu, zhǎodàole diào zài jiā li zhuōzi xià de qiánbāo. Rújīn, zhǐyào jiā li shāo yǒu dòngjing, cāozuò xìtǒng jiù néng jiāng túxiàng jìlù xiàlái, bìng bǎ pāixià de zhàopiàn jíshí fādào tā de yóuxiāng li "bàojǐng".',
     vn:'Hệ thống này ngoài việc giúp Tiền Tiểu Kỳ nắm được hành tung của lũ mèo, còn giúp anh không ít việc. Có lần, anh ở văn phòng lên mạng điều khiển camera từ xa, tìm thấy chiếc ví rơi dưới gầm bàn ở nhà. Giờ đây, chỉ cần trong nhà có chút động tĩnh, hệ thống vận hành sẽ ghi lại hình ảnh, rồi gửi ngay ảnh chụp được vào hộp thư của anh để "báo động".'},
    {sp:0,zh:'这是一套多么有用的远程遥控家庭安全机器人啊。',
     py:'Zhè shì yí tào duōme yǒuyòng de yuǎnchéng yáokòng jiātíng ānquán jīqìrén a.',
     vn:'Đây quả là một bộ "rô-bốt an ninh gia đình" điều khiển từ xa hữu ích biết bao!'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 急切—急忙 lấy từ sách (tr. 121, 做一做 theo đáp án sách); 灵敏—敏捷, 操纵—操作 tự thêm (đều là từ của bài)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'急切 — 急忙',
   same:'Về nghĩa đều biểu thị sự nóng vội, sốt ruột, nhưng thường KHÔNG thay thế cho nhau được.',
   sameEx:{zh:'听到妈妈生病的消息，他心情十分急切，急忙赶回了家。',vn:'Nghe tin mẹ ốm, anh ấy nóng ruột vô cùng, vội vã chạy về nhà.'},
   items:[
     {word:'急切',points:[
       'Tính từ: chỉ TÂM TRẠNG nóng lòng, thiết tha (心情迫切).',
       'Làm trạng ngữ + 地 trước động từ tâm lý: 急切地盼望 / 等待 / 想知道.',
       'Đứng trước danh từ được: 急切的心情, 急切的表情.'
     ],ex:[{zh:'大家急切地盼望试验成功。',vn:'Mọi người nóng lòng mong thí nghiệm thành công.'},
          {zh:'你急切的心情我们都能理解，但凡事都要慢慢来。',vn:'Tâm trạng nóng lòng của bạn chúng tôi đều hiểu, nhưng việc gì cũng phải từ từ.'}]},
     {word:'急忙',points:[
       'Phó từ: chỉ HÀNH ĐỘNG vội vã, hấp tấp vì đang gấp.',
       'Đứng ngay trước động từ hành động: 急忙穿上, 急忙出发, 急忙进行抢救.',
       'Không đứng trước danh từ (không nói 急忙的表情); có dạng lặp 急急忙忙.'
     ],ex:[{zh:'听说公司有要紧事，他急忙穿上衣服跑出门去。',vn:'Nghe nói công ty có việc gấp, anh ấy vội mặc quần áo chạy ra ngoài.'},
          {zh:'一接到命令我们就急忙出发了。',vn:'Vừa nhận lệnh, chúng tôi vội vàng xuất phát ngay.'}]}
   ],
   quiz:[
     {sentence:'听说孩子发烧了，妈妈＿＿请假回家。',options:['急切','急忙'],answer:1,why:'Hành động vội vã (请假回家) → phó từ 急忙 đứng trước động từ.'},
     {sentence:'考试结束了，大家都＿＿地等着成绩公布。',options:['急切','急忙'],answer:0,why:'Tâm trạng nóng lòng chờ đợi → 急切地等着.'},
     {sentence:'看到他＿＿的眼神，我知道他有话要说。',options:['急切','急忙'],answer:0,why:'Trước danh từ (……的眼神) chỉ dùng tính từ 急切; 急忙 không làm định ngữ.'},
     {sentence:'快迟到了，他＿＿吃了几口面包就跑出了门。',options:['急切','急忙'],answer:1,why:'Làm vội một hành động (吃了几口面包) → 急忙.'}
   ],
   sgk:{
     chung:{t:'意思上都表示着急，但一般不能换用。',vn:'Về nghĩa đều biểu thị sự nóng vội, nhưng thường không thay thế cho nhau được.',vd:''},
     khac:[
       {a:{t:'形容词，表示心情迫切。',vn:'Tính từ, biểu thị tâm trạng nóng lòng, thiết tha.',vd:'大家急切地盼望试验成功。',vdVn:'Mọi người nóng lòng mong thí nghiệm thành công.'},
        b:{t:'副词，表示因为着急而行动匆忙。',vn:'Phó từ, biểu thị vì sốt ruột mà hành động vội vã.',vd:'听说公司有要紧事，他急忙穿上衣服跑出门去。',vdVn:'Nghe nói công ty có việc gấp, anh ấy vội mặc quần áo chạy ra ngoài.'}},
       {a:{t:'后边可以加名词。',vn:'Phía sau có thể thêm danh từ.',vd:'你急切的心情我们都能理解，但凡事都要慢慢来。',vdVn:'Tâm trạng nóng lòng của bạn chúng tôi đều hiểu, nhưng việc gì cũng phải từ từ.'},
        b:{t:'后边只能是动词，不能加名词。',vn:'Phía sau chỉ có thể là động từ, không thêm danh từ.',vd:''}}
     ],
     lamThu:[
       {s:'一听说是急诊病人，大夫＿＿进行抢救。',dap:[false,true],
        giai:'Hành động vội vàng cấp cứu → phó từ 急忙 + động từ 进行抢救.'},
       {s:'妈妈＿＿地盼望孩子早点儿放假回家。',dap:[true,false],
        giai:'盼望 là động từ tâm lý, chỉ tâm trạng nóng lòng → 急切地盼望.'},
       {s:'她＿＿的表情引起了我的注意。',dap:[true,false],
        giai:'Đứng trước danh từ 表情 (có 的) → chỉ dùng tính từ 急切; 急忙 không đi với danh từ.'},
       {s:'一接到命令我们就＿＿出发了，没来得及跟大家告别。',dap:[false,true],
        giai:'Hành động xuất phát vội vã, không kịp chào ai → 急忙出发.'}
     ]
   }},

  {pair:'灵敏 — 敏捷',
   same:'Đều là tính từ, đều có nghĩa "nhanh, nhạy"; đều có chữ 敏.',
   sameEx:{zh:'这只猫嗅觉灵敏，动作敏捷。',vn:'Con mèo này khứu giác nhạy, động tác nhanh nhẹn.'},
   items:[
     {word:'灵敏',points:[
       'Nhấn mạnh khả năng CẢM NHẬN, PHẢN ỨNG nhạy trước kích thích bên ngoài.',
       'Chủ ngữ: giác quan (嗅觉, 耳朵), phản ứng (反应), máy móc (仪器, 传感器).',
       'Có danh từ 灵敏度 (độ nhạy).'
     ],ex:[{zh:'狗的嗅觉比人灵敏得多。',vn:'Khứu giác của chó nhạy hơn người nhiều.'},
          {zh:'这台仪器非常灵敏。',vn:'Chiếc máy này rất nhạy.'}]},
     {word:'敏捷',points:[
       'Nhấn mạnh ĐỘNG TÁC, HÀNH ĐỘNG, TƯ DUY nhanh nhẹn.',
       'Chủ ngữ: 动作, 身手, 行动, 思维 — không dùng cho giác quan hay máy móc.',
       'Làm trạng ngữ được: 敏捷地跳过去.'
     ],ex:[{zh:'猫动作敏捷，一下子就跳上了柜子。',vn:'Mèo động tác nhanh nhẹn, thoắt cái đã nhảy lên tủ.'},
          {zh:'老教授八十多岁了，思维依然很敏捷。',vn:'Giáo sư già đã ngoài tám mươi mà tư duy vẫn rất nhanh nhạy.'}]}
   ],
   quiz:[
     {sentence:'警犬的嗅觉非常＿＿，很快就找到了线索。',options:['灵敏','敏捷'],answer:0,why:'Giác quan (嗅觉) → 灵敏.'},
     {sentence:'他身手＿＿，一下子就爬上了树。',options:['灵敏','敏捷'],answer:1,why:'身手 (động tác, thân thủ) → 敏捷.'},
     {sentence:'这个传感器很＿＿，温度稍有变化就会报警。',options:['灵敏','敏捷'],answer:0,why:'Thiết bị cảm biến phản ứng nhạy → 灵敏.'},
     {sentence:'这位辩手思维＿＿，回答问题又快又准。',options:['灵敏','敏捷'],answer:1,why:'Tư duy nhanh nhạy → cụm quen dùng 思维敏捷.'}
   ]},

  {pair:'操纵 — 操作',
   same:'Đều là động từ, đều có thể chỉ việc dùng tay điều khiển, vận hành máy móc, thiết bị.',
   sameEx:{zh:'他正在学习怎样操纵／操作这台机器。',vn:'Anh ấy đang học cách vận hành chiếc máy này.'},
   items:[
     {word:'操纵',points:[
       'Nhấn mạnh ĐIỀU KHIỂN để máy / vật chuyển động theo ý mình (操纵飞机, 操纵方向盘, 操纵摄像头).',
       'Có nghĩa xấu: thao túng, giật dây người hoặc sự việc (操纵市场, 幕后操纵).',
       'Tân ngữ có thể là người: 被人操纵.'
     ],ex:[{zh:'飞行员熟练地操纵着飞机。',vn:'Phi công điều khiển máy bay thuần thục.'},
          {zh:'有人在幕后操纵股票价格。',vn:'Có người đứng sau giật dây thao túng giá cổ phiếu.'}]},
     {word:'操作',points:[
       'Nhấn mạnh làm việc theo QUY TRÌNH, KỸ THUẬT nhất định (操作电脑, 操作规程).',
       'Làm danh từ được: 操作简单, 操作系统, 实际操作.',
       'Không có nghĩa xấu, không mang tân ngữ chỉ người.'
     ],ex:[{zh:'这款手机操作简单。',vn:'Chiếc điện thoại này thao tác đơn giản.'},
          {zh:'只要家里稍有动静，操作系统就能将图像记录下来。',vn:'Chỉ cần trong nhà có chút động tĩnh, hệ thống vận hành sẽ ghi lại hình ảnh.'}]}
   ],
   quiz:[
     {sentence:'这款软件＿＿简单，一学就会。',options:['操纵','操作'],answer:1,why:'Làm danh từ chỉ cách thao tác → 操作简单.'},
     {sentence:'调查发现，有人在背后＿＿比赛结果。',options:['操纵','操作'],answer:0,why:'Nghĩa xấu "thao túng, giật dây" → chỉ dùng 操纵.'},
     {sentence:'请严格按照＿＿规程使用机器。',options:['操纵','操作'],answer:1,why:'操作规程 = quy trình thao tác (cụm cố định).'},
     {sentence:'他坐在驾驶室里，熟练地＿＿着方向盘。',options:['操纵','操作'],answer:0,why:'Điều khiển để vật chuyển động theo ý mình → 操纵方向盘.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'君子',hv:'quân tử',vn:'quân tử',note:'Trùng khít. 君子风度 = phong độ quân tử.'},
    {zh:'嗅觉',hv:'khứu giác',vn:'khứu giác',note:'Trùng khít.'},
    {zh:'恭敬',hv:'cung kính',vn:'cung kính, kính cẩn',note:'Trùng khít; dạng lặp 恭恭敬敬 = cung cung kính kính.'},
    {zh:'动态',hv:'động thái',vn:'động thái, tình hình mới',note:'Trùng khít; 发动态 còn là "đăng trạng thái" trên mạng.'},
    {zh:'操作',hv:'thao tác',vn:'thao tác, vận hành',note:'Trùng khít. 操作系统 = hệ điều hành.'},
    {zh:'踪迹',hv:'tung tích',vn:'tung tích, dấu vết',note:'Trùng khít.'},
    {zh:'动静',hv:'động tĩnh',vn:'động tĩnh, tiếng động',note:'Trùng khít: "chẳng có động tĩnh gì" = 一点儿动静也没有.'},
    {zh:'模范',hv:'mô phạm',vn:'gương mẫu, mẫu mực',note:'Như "nhà giáo mô phạm"; 劳动模范 = chiến sĩ thi đua.'},
    {zh:'深沉',hv:'thâm trầm',vn:'sâu lắng, kín đáo; trầm',note:'Gần "thâm trầm" (sâu sắc, kín đáo) trong tiếng Việt.'},
    {zh:'例外',hv:'lệ ngoại',vn:'ngoại lệ',note:'Đảo trật tự so với tiếng Việt "ngoại lệ".'},
    {zh:'储存',hv:'trữ tồn',vn:'tồn trữ, lưu trữ',note:'Đảo trật tự so với "tồn trữ"; nhớ chữ 储 = trữ (dự trữ).'}
  ],
  idiom:[
    {zh:'自力更生',hv:'tự lực cánh sinh',vn:'tự lực cánh sinh',note:'Trùng khít — thành ngữ quen thuộc trong tiếng Việt.'},
    {zh:'知足常乐',hv:'tri túc thường lạc',vn:'biết đủ thì luôn vui',note:'Gần câu "biết đủ là đủ".'},
    {zh:'见多识广',hv:'kiến đa thức quảng',vn:'thấy nhiều biết rộng',note:'Kiến = thấy, thức = biết, quảng = rộng.'},
    {zh:'一举一动',hv:'nhất cử nhất động',vn:'mọi cử chỉ hành động',note:'Trùng khít: "theo dõi nhất cử nhất động" = 监视一举一动.'}
  ],
  trap:[
    {zh:'亲热',hv:'thân nhiệt',vn:'thân mật, thắm thiết',
     warn:'BẪY: "thân nhiệt" tiếng Việt là nhiệt độ cơ thể (= 体温). 亲热 là thân mật, quấn quýt: 亲热地撞主人的腿.'},
    {zh:'清洁',hv:'thanh khiết',vn:'lau dọn; sạch sẽ',
     warn:'"Thanh khiết" tiếng Việt là trong sạch, tinh khiết (tâm hồn). 清洁 tiếng Trung là lau dọn, vệ sinh: 清洁猫舍, 清洁工.'},
    {zh:'监视',hv:'giám thị',vn:'theo dõi, giám sát',
     warn:'"Giám thị" tiếng Việt là người coi thi (= 监考). 监视 là theo dõi chặt chẽ: 监视猫的一举一动.'},
    {zh:'急切',hv:'cấp thiết',vn:'nóng lòng, háo hức',
     warn:'"Cấp thiết" tiếng Việt là cần kíp, bức thiết (= 迫切需要). 急切 chỉ TÂM TRẠNG nóng lòng: 急切地盼望.'},
    {zh:'操纵',hv:'thao túng',vn:'điều khiển; thao túng',
     warn:'"Thao túng" tiếng Việt chỉ có nghĩa xấu. 操纵 còn nghĩa trung tính là điều khiển máy: 操纵摄像头, 操纵飞机.'},
    {zh:'教养',hv:'giáo dưỡng',vn:'sự có giáo dục',
     warn:'Không liên quan "trường giáo dưỡng". 很有教养 = rất có giáo dục, lễ độ; 没有教养 = vô giáo dục.'},
    {zh:'举动',hv:'cử động',vn:'hành động, hành vi',
     warn:'"Cử động" tiếng Việt là động tác cơ thể (cử động tay chân). 举动 là hành vi, việc làm: 大胆的举动 = hành động táo bạo.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'流浪',right:'猫'},
  {left:'淋着',right:'大雨'},
  {left:'拜访',right:'客户'},
  {left:'很有',right:'教养'},
  {left:'嗅觉',right:'灵敏'},
  {left:'动作',right:'敏捷'},
  {left:'快活而',right:'好动'},
  {left:'不失',right:'君子风度'},
  {left:'模范',right:'饲养员'},
  {left:'清洁',right:'猫舍'},
  {left:'工作',right:'繁忙'},
  {left:'急切地',right:'盼望'},
  {left:'毫无',right:'例外'},
  {left:'深沉的',right:'热情'},
  {left:'监视',right:'一举一动'},
  {left:'设计',right:'缺陷'},
  {left:'尖端',right:'技术'},
  {left:'刻苦',right:'钻研'},
  {left:'储存',right:'图像'},
  {left:'即时',right:'监控'},
  {left:'时间',right:'误差'},
  {left:'稍有',right:'动静'},
  {left:'操作',right:'系统'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'这只小猫原来是只',blank:'流浪',post:'猫，后来被我们收养了。',hint:'(lang thang, hoang)',ans:'流浪'},
  {pre:'我没带伞，回家路上全身都被雨',blank:'淋',post:'湿了。',hint:'(dầm, xối)',ans:'淋'},
  {pre:'春节期间，我们专程去',blank:'拜访',post:'了几位退休的老教师。',hint:'(thăm hỏi)',ans:'拜访'},
  {pre:'爷爷年轻时走南闯北，',blank:'见多识广',post:'，什么问题都难不倒他。',hint:'(thấy nhiều biết rộng)',ans:'见多识广'},
  {pre:'这孩子说话有礼貌，一看就很有',blank:'教养',post:'。',hint:'(giáo dục, lễ độ)',ans:'教养'},
  {pre:'他不是笨，而是太',blank:'懒惰',post:'了，从来不肯多花时间复习。',hint:'(lười biếng)',ans:'懒惰'},
  {pre:'看到桌上的蛋糕，妹妹',blank:'馋',post:'得直流口水。',hint:'(thèm ăn)',ans:'馋'},
  {pre:'小猫',blank:'趴',post:'在窗台上晒太阳，一动也不动。',hint:'(nằm sấp, nằm dài)',ans:'趴'},
  {pre:'奶奶常说，',blank:'知足常乐',post:'，别总跟别人比。',hint:'(biết đủ thì luôn vui)',ans:'知足常乐'},
  {pre:'这个孩子对长辈一直很',blank:'恭敬',post:'，大家都夸他懂事。',hint:'(kính cẩn)',ans:'恭敬'},
  {pre:'输了比赛还主动跟对手握手，他真有',blank:'君子',post:'风度。',hint:'(quân tử)',ans:'君子'},
  {pre:'狗的',blank:'嗅觉',post:'比人灵敏得多，常被用来寻找失踪的人。',hint:'(khứu giác)',ans:'嗅觉'},
  {pre:'这台仪器非常',blank:'灵敏',post:'，一点儿微小的变化都能测出来。',hint:'(nhạy)',ans:'灵敏'},
  {pre:'猫动作',blank:'敏捷',post:'，一下子就跳上了柜子。',hint:'(nhanh nhẹn)',ans:'敏捷'},
  {pre:'退休以后，爷爷每天养花钓鱼，日子过得很',blank:'快活',post:'。',hint:'(vui vẻ)',ans:'快活'},
  {pre:'我一开门，小狗就',blank:'扑',post:'了过来。',hint:'(nhào tới)',ans:'扑'},
  {pre:'一见面，她就',blank:'亲热',post:'地拉着我的手问长问短。',hint:'(thân mật)',ans:'亲热'},
  {pre:'搬家之前，她把旧衣服',blank:'统统',post:'送给了别人。',hint:'(toàn bộ, tất cả)',ans:'统统'},
  {pre:'下龙湾的风景十分',blank:'迷人',post:'，每年吸引着大量游客。',hint:'(quyến rũ)',ans:'迷人'},
  {pre:'作为班长，他在各方面都起着',blank:'模范',post:'作用。',hint:'(gương mẫu)',ans:'模范'},
  {pre:'我们一旦决定',blank:'饲养',post:'一种动物，就要对它负责到底。',hint:'(nuôi)',ans:'饲养'},
  {pre:'请大家保持教室',blank:'清洁',post:'，不要乱扔垃圾。',hint:'(sạch sẽ)',ans:'清洁'},
  {pre:'我出差的时候，麻烦你帮我',blank:'喂',post:'一下猫吧。',hint:'(cho ăn)',ans:'喂'},
  {pre:'上下班时间，这条路交通十分',blank:'繁忙',post:'。',hint:'(bận rộn, tấp nập)',ans:'繁忙'},
  {pre:'成绩快公布了，大家都',blank:'急切',post:'地等待着。',hint:'(nóng lòng)',ans:'急切'},
  {pre:'每个人都应该遵守学校纪律，谁也不能',blank:'例外',post:'。',hint:'(ngoại lệ)',ans:'例外'},
  {pre:'她站在窗前，久久地',blank:'凝视',post:'着远方。',hint:'(nhìn chăm chú)',ans:'凝视'},
  {pre:'父爱往往是',blank:'深沉',post:'的，不常挂在嘴边。',hint:'(sâu lắng)',ans:'深沉'},
  {pre:'他发现这个摄像头有',blank:'缺陷',post:'，拍下的很多镜头都是空的。',hint:'(nhược điểm, thiếu sót)',ans:'缺陷'},
  {pre:'这块手表很准，一个月的',blank:'误差',post:'不超过一秒。',hint:'(sai số)',ans:'误差'},
  {pre:'屋子里静悄悄的，一点儿',blank:'动静',post:'也没有。',hint:'(động tĩnh)',ans:'动静'},
  {pre:'这款手机',blank:'操作',post:'简单，老年人也能很快学会。',hint:'(thao tác)',ans:'操作'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (统统 · 以……为…… · 该干吗干吗) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['搬家之前','，','她','把旧衣服','统统','送给了','别人','。'],ans:'搬家之前，她把旧衣服统统送给了别人。',audio:'搬家之前，她把旧衣服统统送给了别人。'},
  {words:['它','还要','把','主人带回来的东西','统统','闻一遍','。'],ans:'它还要把主人带回来的东西统统闻一遍。',audio:'它还要把主人带回来的东西统统闻一遍。'},
  {words:['什么','电影院、酒吧','，','统统','与他','无缘','。'],ans:'什么电影院、酒吧，统统与他无缘。',audio:'什么电影院、酒吧，统统与他无缘。'},
  {words:['以','其中一只猫','为','例','，','它每天下午两点左右','吃饭喝水','。'],ans:'以其中一只猫为例，它每天下午两点左右吃饭喝水。',audio:'以其中一只猫为例，它每天下午两点左右吃饭喝水。'},
  {words:['今天的晚会','以','学生','为主','，','老师','为辅','。'],ans:'今天的晚会以学生为主，老师为辅。',audio:'今天的晚会以学生为主，老师为辅。'},
  {words:['考试','不要','以','难倒学生','为','目的','。'],ans:'考试不要以难倒学生为目的。',audio:'考试不要以难倒学生为目的。'},
  {words:['到点了','，','该走','就','走','，','别等她了','。'],ans:'到点了，该走就走，别等她了。',audio:'到点了，该走就走，别等她了。'},
  {words:['大黄和白白','在屋里','该干吗','干吗','。'],ans:'大黄和白白在屋里该干吗干吗。',audio:'大黄和白白在屋里该干吗干吗。'},
  {words:['哭、着急','都不管用','，','该什么结果','还是','什么结果','。'],ans:'哭、着急都不管用，该什么结果还是什么结果。',audio:'哭、着急都不管用，该什么结果还是什么结果。'},
  {words:['钱小奇','每天','最急切','盼望的','就是','回家开门的那一刻','。'],ans:'钱小奇每天最急切盼望的就是回家开门的那一刻。',audio:'钱小奇每天最急切盼望的就是回家开门的那一刻。'},
  {words:['他','决定','自力更生','安装','一套','尖端玩意儿','。'],ans:'他决定自力更生安装一套尖端玩意儿。',audio:'他决定自力更生安装一套尖端玩意儿。'},
  {words:['只要','家里','稍有动静','，','系统','就能','将图像记录下来','。'],ans:'只要家里稍有动静，系统就能将图像记录下来。',audio:'只要家里稍有动静，系统就能将图像记录下来。'},
  {words:['时间误差','平均','不到','5分钟','。'],ans:'时间误差平均不到5分钟。',audio:'时间误差平均不到5分钟。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'为了弄清楚猫在做什么，他安了个摄像头，____猫的一举一动。',opts:['监视','凝视','重视','注视'],ans:0,
   exp:'Theo dõi để nắm hành động → 监视 (+ 一举一动). 凝视, 注视 = nhìn chăm chú (không có ý giám sát, kiểm soát); 重视 = coi trọng.'},
  {wrong:'最近孩子有些反常的____，父母得多留神。',opts:['举动','举办','运动','行驶'],ans:0,
   exp:'反常的 + danh từ chỉ hành vi → 举动. 举办 = tổ chức (động từ); 运动 = thể thao, vận động; 行驶 = (xe) chạy.'},
  {wrong:'这部电影里最感人的____，是父亲在车站送别女儿。',opts:['镜头','镜子','片头','念头'],ans:0,
   exp:'Một cảnh trong phim → 镜头. 镜子 = cái gương; 片头 = đoạn mở đầu phim (không phải "cảnh cảm động nhất"); 念头 = ý nghĩ.'},
  {wrong:'任何事情都要____，不要总依靠别人。',opts:['自力更生','知足常乐','见多识广','自言自语'],ans:0,
   exp:'Đối lập với 依靠别人 → 自力更生 (tự lực). 知足常乐 = biết đủ là vui; 见多识广 = từng trải; 自言自语 = nói một mình.'},
  {wrong:'这家公司掌握了很多____技术，在国际上很有竞争力。',opts:['尖端','尖锐','顶端','极端'],ans:0,
   exp:'尖端技术 = công nghệ tiên tiến nhất. 尖锐 = sắc bén, gay gắt (矛盾尖锐); 顶端 = đỉnh, chóp (vị trí); 极端 = cực đoan.'},
  {wrong:'王师傅刻苦____技术，成了厂里的技术骨干。',opts:['钻研','研制','钻进','调研'],ans:0,
   exp:'刻苦钻研 + 技术 = miệt mài nghiên cứu kỹ thuật. 研制 = nghiên cứu chế tạo (sản phẩm mới); 钻进 = chui vào; 调研 = khảo sát điều tra.'},
  {wrong:'投资者要随时关注市场的最新____。',opts:['动态','动静','动作','动力'],ans:0,
   exp:'最新动态 = tình hình mới nhất. 动静 = tiếng động; 动作 = động tác; 动力 = động lực — không đi với 最新 và 市场 theo nghĩa này.'},
  {wrong:'手机的____空间不够了，得删掉一些照片。',opts:['储存','储蓄','保存','存款'],ans:0,
   exp:'储存空间 = dung lượng lưu trữ (cụm cố định). 储蓄 = tiết kiệm tiền; 保存 = bảo quản (không nói 保存空间); 存款 = tiền gửi.'},
  {wrong:'他在外面时也能通过互联网____家里的摄像头。',opts:['遥控','遥远','调控','失控'],ans:0,
   exp:'Điều khiển thiết bị từ xa → 遥控. 遥远 là tính từ "xa xôi"; 调控 = điều tiết (调控经济); 失控 = mất kiểm soát.'},
  {wrong:'一有新消息，系统就会____发送到你的手机上。',opts:['即时','暂时','临时','平时'],ans:0,
   exp:'即时 = ngay tức thì. 暂时 = tạm thời; 临时 = lâm thời, đột xuất; 平时 = ngày thường — đều không diễn tả "gửi ngay".'},
  {wrong:'飞行员熟练地____着飞机，平稳地降落了。',opts:['操纵','操作','操心','操练'],ans:0,
   exp:'Điều khiển để máy bay chuyển động theo ý → 操纵 (xem Phân biệt 操纵 — 操作). 操作 thiên về làm theo quy trình; 操心 = lo lắng; 操练 = luyện tập (quân sự).'},
  {wrong:'她觉得有人在____她，赶紧走进了一家商店。',opts:['跟踪','跟随','追求','陪伴'],ans:0,
   exp:'Lén bám theo để theo dõi → 跟踪. 跟随 = đi theo (công khai); 追求 = theo đuổi; 陪伴 = đi cùng, bầu bạn — đều không có ý đáng sợ.'},
  {wrong:'妈妈把家里的每一个____都找遍了，还是没找到钥匙。',opts:['角落','角度','落后','部位'],ans:0,
   exp:'每一个角落 = mọi ngóc ngách. 角度 = góc độ; 落后 = lạc hậu; 部位 (bài 4) = bộ phận (cơ thể).'},
  {wrong:'通过摄像头，他终于了解了猫在家里的____。',opts:['踪迹','奇迹','古迹','事迹'],ans:0,
   exp:'Hành tung, dấu vết đi lại → 踪迹. 奇迹 = kỳ tích; 古迹 = di tích cổ; 事迹 = việc làm đáng nêu gương của người.'},
  {wrong:'妈妈____地盼望孩子早点儿放假回家。',opts:['急切','急忙','匆忙','赶紧'],ans:0,
   exp:'盼望 là động từ tâm lý → cần tính từ chỉ tâm trạng 急切地 (做一做 ② của sách). 急忙, 匆忙, 赶紧 chỉ hành động vội.'},
  {wrong:'一接到命令我们就____出发了，没来得及跟大家告别。',opts:['急忙','急切','迫切','热切'],ans:0,
   exp:'Hành động vội vã → phó từ 急忙 (做一做 ④). 急切, 迫切, 热切 chỉ tâm trạng, không hợp với 出发.'},
  {wrong:'警犬的嗅觉非常____，很快就找到了线索。',opts:['灵敏','敏捷','灵活','机灵'],ans:0,
   exp:'Giác quan nhạy → 嗅觉灵敏. 敏捷 dùng cho động tác, tư duy; 灵活 = linh hoạt; 机灵 = lanh lợi (người, con vật), không đi với 嗅觉.'},
  {wrong:'他把从超市带回来的东西____放进了冰箱。',opts:['统统','通常','一共','总共'],ans:0,
   exp:'统统 = tất cả, không sót, đứng trước động từ. 通常 = thường thường; 一共, 总共 đi với con số (一共三十块).'},
  {wrong:'这款软件____简单，一学就会。',opts:['操作','操纵','动作','工作'],ans:0,
   exp:'操作简单 = thao tác đơn giản (操作 làm danh từ). 操纵 không làm danh từ theo cách này; 动作 = động tác cơ thể; 工作 = công việc.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–6 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Cậu ấy đem hết đống truyện tranh cũ không dùng nữa tặng em trai, rồi bắt đầu chuyên tâm nghiền ngẫm môn toán.',zh:'他把没用的旧漫画书统统送给了弟弟，然后开始专心钻研数学。',py:'Tā bǎ méi yòng de jiù mànhuàshū tǒngtǒng sònggěile dìdi, ránhòu kāishǐ zhuānxīn zuānyán shùxué.',goiY:['把……统统……','钻研','然后'],giai:'统统 đứng sau cụm 把 + tân ngữ, ngay trước động từ (统统送给了); "chuyên tâm nghiền ngẫm" = 专心钻研, không dịch là 研究 vì 钻研 nhấn mạnh sự miệt mài.'},
  {vi:'Tuy việc học lớp 12 rất bận rộn, nhưng tối nào cậu ấy cũng dành nửa tiếng cho con chó hoang mình nhận nuôi ăn.',zh:'虽然高三的学习很繁忙，但他每天晚上还是会花半个小时喂他收养的流浪狗。',py:'Suīrán gāosān de xuéxí hěn fánmáng, dàn tā měi tiān wǎnshang háishi huì huā bàn ge xiǎoshí wèi tā shōuyǎng de liúlàng gǒu.',goiY:['虽然……但……还是……','繁忙','喂','流浪'],giai:'虽然……但……还是…… nhấn mạnh "dù vậy vẫn"; 繁忙 dùng cho việc (学习很繁忙), không nói 他很繁忙. "Chó hoang" = 流浪狗, không dịch 野狗 (chó rừng, chó dại).'},
  {vi:'Thi xong rồi thì cất hết tài liệu ôn tập đi, việc gì cần làm thì cứ làm, trong lòng có nóng ruột mấy cũng chẳng ích gì.',zh:'考试已经结束了，把复习资料统统收起来，该干吗干吗吧，心情再急切也没用。',py:'Kǎoshì yǐjīng jiéshù le, bǎ fùxí zīliào tǒngtǒng shōu qǐlái, gāi gànmá gànmá ba, xīnqíng zài jíqiè yě méi yòng.',goiY:['统统','该干吗干吗','再……也……','急切'],giai:'该干吗干吗 = cứ sinh hoạt như thường (khẩu ngữ, điểm ngữ pháp 3); 再 + Adj + 也…… = có … mấy cũng …; 急切 chỉ tâm trạng nóng lòng.'},
  {vi:'Anh ấy tuy đã đi qua rất nhiều nước, hiểu biết rộng, nhưng chưa bao giờ khoe khoang trước mặt bạn bè, rất có giáo dục.',zh:'他虽然游历过很多国家，见多识广，却从来不在朋友面前炫耀，非常有教养。',py:'Tā suīrán yóulìguo hěn duō guójiā, jiànduō-shíguǎng, què cónglái bú zài péngyou miànqián xuànyào, fēicháng yǒu jiàoyǎng.',goiY:['虽然……却……','见多识广','炫耀','教养'],giai:'虽然……却……: 却 đứng sau chủ ngữ (ở đây chủ ngữ đã lược), trước trạng ngữ 从来不; 炫耀 ôn bài 3; "rất có giáo dục" = 很有教养, không dịch 很有教育.'},
  {vi:'Dạ hội mừng năm mới năm nay lấy học sinh làm chính, giáo viên làm phụ; lớp nào cũng phải có tiết mục, không lớp nào được ngoại lệ, ai nấy đều nóng lòng mong đến ngày đó.',zh:'今年的元旦晚会以学生为主，老师为辅，每个班都要出节目，谁也不能例外，大家都急切地盼望着那一天。',py:'Jīnnián de Yuándàn wǎnhuì yǐ xuésheng wéi zhǔ, lǎoshī wéi fǔ, měi ge bān dōu yào chū jiémù, shéi yě bù néng lìwài, dàjiā dōu jíqiè de pànwàngzhe nà yì tiān.',goiY:['以……为主，……为辅','例外','急切'],giai:'Hai cụm 以……为…… dùng liền nhau thì lược 以 thứ hai (老师为辅); 谁也不能例外 = không ai được ngoại lệ; 急切地盼望 = nóng lòng mong đợi.'},
  {vi:'Từ khi lắp camera điều khiển từ xa, chỉ cần trong nhà có chút động tĩnh là mẹ nhận được ảnh ngay, nên với bà ở nhà một mình mẹ cũng yên tâm hơn nhiều.',zh:'自从装了遥控摄像头，只要家里稍有动静，妈妈就能即时收到照片，对独自在家的奶奶也放心多了。',py:'Zìcóng zhuāngle yáokòng shèxiàngtóu, zhǐyào jiā li shāo yǒu dòngjing, māma jiù néng jíshí shōudào zhàopiàn, duì dúzì zài jiā de nǎinai yě fàngxīn duō le.',goiY:['自从……','只要……就……','动静','即时'],giai:'Ba vế: 自从 (mốc thời gian) → 只要……就…… (điều kiện – kết quả) → kết luận; 稍有动静 = có chút động tĩnh; 即时 = ngay tức thì (khác 及时 = kịp thời).'},
  {vi:'Lấy môn Ngữ văn làm ví dụ, chỉ cần mỗi ngày em nghiền ngẫm một bài văn mẫu, chép lại hết những câu hay, chưa đến một học kỳ trình độ viết sẽ tiến bộ rõ rệt.',zh:'以语文为例，只要你每天钻研一篇范文，把好句子统统记下来，不到一个学期，写作水平就会明显提高。',py:'Yǐ yǔwén wéi lì, zhǐyào nǐ měi tiān zuānyán yì piān fànwén, bǎ hǎo jùzi tǒngtǒng jì xiàlái, bú dào yí ge xuéqī, xiězuò shuǐpíng jiù huì míngxiǎn tígāo.',goiY:['以……为例','只要……就……','钻研','统统'],giai:'以……为例 (văn viết) = lấy … làm ví dụ, đặt đầu câu; 只要 ở vế điều kiện, 就 ở vế kết quả cuối câu; 统统记下来 = chép lại hết.'},
  {vi:'Mèo nhà tôi không những khứu giác nhạy, động tác nhanh nhẹn, mà hễ thấy tôi về là nhào tới, thân thiết cọ vào chân tôi.',zh:'我家的猫不但嗅觉灵敏、动作敏捷，而且一看见我回来就扑过来，亲热地蹭我的腿。',py:'Wǒ jiā de māo búdàn xiùjué língmǐn, dòngzuò mǐnjié, érqiě yí kànjiàn wǒ huílái jiù pū guòlái, qīnrè de cèng wǒ de tuǐ.',goiY:['不但……而且……','灵敏','敏捷','一……就……'],giai:'嗅觉 đi với 灵敏, 动作 đi với 敏捷 — không đảo; 一……就…… lồng trong vế 而且; 亲热地 + V làm trạng ngữ.'},
  {vi:'Thay vì theo dõi, bám sát mọi cử chỉ của con, cha mẹ chi bằng tôn trọng quyền riêng tư của con, nếu không con chỉ càng ngày càng phản cảm.',zh:'父母与其监视、跟踪孩子的一举一动，不如尊重他们的隐私，否则孩子只会越来越反感。',py:'Fùmǔ yǔqí jiānshì, gēnzōng háizi de yì jǔ yí dòng, bùrú zūnzhòng tāmen de yǐnsī, fǒuzé háizi zhǐ huì yuè lái yuè fǎngǎn.',goiY:['与其……不如……','监视','跟踪','隐私'],giai:'与其 A 不如 B: người nói chọn B; 否则 = nếu không thì (vế hậu quả). 隐私, 反感 ôn bài 5; "theo dõi" ở đây là 监视 (kiểm soát), không phải 关注.'},
  {vi:'Nhà tôi ngày thường ai làm việc nấy, nhưng một khi có người gặp khó khăn, mọi người đều gác hết việc trong tay lại để giúp đỡ, không ai ngoại lệ.',zh:'我们家平时该干吗干吗，可一旦有人遇到困难，大家都会把手头的事统统放下来帮忙，谁也不例外。',py:'Wǒmen jiā píngshí gāi gànmá gànmá, kě yídàn yǒu rén yùdào kùnnan, dàjiā dōu huì bǎ shǒutóu de shì tǒngtǒng fàng xiàlái bāngmáng, shéi yě bú lìwài.',goiY:['该干吗干吗','一旦……都……','统统','例外'],giai:'该干吗干吗 (ngày thường) đối lập với 一旦…… (tình huống đặc biệt) qua 可; 把……统统放下来 = gác hết lại; câu cuối 谁也不例外 nhấn mạnh "không ai".'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Đại Hoàng vốn là mèo hoang, hôm ấy dầm mưa to đến "thăm", mưa tạnh rồi thì ở lì không chịu đi nữa.',zh:'大黄原本是只流浪猫，那天淋着大雨来拜访，下完雨就再也不走了。',py:'Dàhuáng yuánběn shì zhī liúlàng māo, nà tiān línzhe dàyǔ lái bàifǎng, xiàwán yǔ jiù zài yě bù zǒu le.',goiY:['流浪 = lang thang, hoang','淋着大雨 = dầm mưa to','拜访 = thăm (cách nói trang trọng)'],giai:'拜访 dùng cho con mèo là cách nói hài hước — nên dịch để trong ngoặc kép "thăm"; 再也不……了 = không … nữa (dứt khoát).'},
  {vi:'Đại Hoàng tuy có quá khứ lang thang nhưng lại rất có giáo dục, không lười biếng cũng chẳng tham ăn.',zh:'大黄虽然有流浪史，却很有教养，既不懒惰，也不嘴馋。',py:'Dàhuáng suīrán yǒu liúlàng shǐ, què hěn yǒu jiàoyǎng, jì bù lǎnduò, yě bù zuǐchán.',goiY:['虽然……却…… = tuy … nhưng lại …','既不……也不…… = không … cũng không …','嘴馋 = tham ăn'],giai:'流浪史 dịch "quá khứ lang thang", không dịch "lịch sử lưu lạc"; 教养 = sự có giáo dục (không phải "giáo dưỡng").'},
  {vi:'Tiền Tiểu Kỳ vừa về nhà, Bạch Bạch đã nhào tới, còn đòi ngửi hết một lượt những thứ anh mang về.',zh:'钱小奇一回家，白白就扑上来，还要把他带回来的东西统统闻一遍。',py:'Qián Xiǎoqí yì huí jiā, Báibái jiù pū shànglái, hái yào bǎ tā dài huílái de dōngxi tǒngtǒng wén yí biàn.',goiY:['一……就…… = vừa … là …','扑上来 = nhào tới','统统 = tất cả, hết thảy'],giai:'Tên riêng dịch theo âm Hán Việt (钱小奇 = Tiền Tiểu Kỳ, 白白 = Bạch Bạch); 统统闻一遍 = ngửi hết một lượt, không sót thứ gì.'},
  {vi:'Tuy công việc bận rộn, nhưng điều anh nóng lòng mong đợi nhất mỗi ngày chính là khoảnh khắc về nhà mở cửa.',zh:'他虽然工作繁忙，但每天最急切盼望的，就是回家开门的那一刻。',py:'Tā suīrán gōngzuò fánmáng, dàn měi tiān zuì jíqiè pànwàng de, jiù shì huí jiā kāimén de nà yí kè.',goiY:['繁忙 = bận rộn','急切 = nóng lòng, háo hức','……的，就是…… = điều … chính là …'],giai:'Cấu trúc nhấn mạnh "(điều) … nhất chính là …"; 急切 dịch "nóng lòng / háo hức", không dịch "cấp thiết".'},
  {vi:'Còn Hỷ Nhi thì lần nào cũng đứng ở đằng xa, dùng ánh mắt chăm chú bày tỏ tình cảm nồng nhiệt mà kín đáo của mình.',zh:'喜儿则毫无例外地站在远处，用凝视表达着它深沉的热情。',py:'Xǐ\'ér zé háowú lìwài de zhàn zài yuǎnchù, yòng níngshì biǎodázhe tā shēnchén de rèqíng.',goiY:['则 = còn … thì (đối chiếu)','毫无例外 = không có ngoại lệ','凝视 = nhìn chăm chú','深沉 = sâu lắng, kín đáo'],giai:'毫无例外地 dịch tự nhiên là "lần nào cũng"; 用凝视表达 → "dùng ánh nhìn chăm chú để bày tỏ"; 深沉的热情 = tình cảm nồng nhiệt mà sâu kín.'},
  {vi:'Để biết lũ mèo làm gì, anh lắp một cái camera, nhưng chẳng bao lâu phát hiện nó có nhược điểm, nhiều cảnh quay được đều trống trơn.',zh:'为了弄清楚猫在做什么，他安了个摄像头，可很快发现它有缺陷，拍下的很多镜头都是空的。',py:'Wèile nòng qīngchu māo zài zuò shénme, tā ānle ge shèxiàngtóu, kě hěn kuài fāxiàn tā yǒu quēxiàn, pāixià de hěn duō jìngtóu dōu shì kōng de.',goiY:['为了…… = để …','缺陷 = nhược điểm, thiếu sót','镜头 = cảnh quay'],giai:'Ba vế: mục đích (为了) → hành động → chuyển ý (可); 镜头 ở đây là "cảnh quay" chứ không phải "ống kính"; 空的 = trống trơn (không có mèo).'},
  {vi:'Thế là anh quyết định tự lực cánh sinh, vừa mày mò nghiên cứu vừa lắp, sau hơn ba tháng nỗ lực, cuối cùng đã lắp xong một bộ thiết bị tối tân.',zh:'于是他决定自力更生，边钻研边安装，经过三个多月的努力，终于装好了一套尖端设备。',py:'Yúshì tā juédìng zìlì-gēngshēng, biān zuānyán biān ānzhuāng, jīngguò sān ge duō yuè de nǔlì, zhōngyú zhuānghǎole yí tào jiānduān shèbèi.',goiY:['自力更生 = tự lực cánh sinh','边……边…… = vừa … vừa …','尖端 = tối tân, tiên tiến nhất'],giai:'边 A 边 B = vừa A vừa B; 经过…… nêu quá trình, 终于 nêu kết quả; 尖端设备 = thiết bị tối tân (không dịch "đầu nhọn").'},
  {vi:'Bộ thiết bị này không chỉ chụp bắt và lưu lại hình ảnh cử động của mèo, mà còn có thể điều khiển camera từ xa qua Internet để giám sát mèo tức thời.',zh:'这套设备不仅能抓拍并储存猫的动态图像，还能通过互联网遥控摄像头，对猫进行即时监控。',py:'Zhè tào shèbèi bùjǐn néng zhuāpāi bìng chǔcún māo de dòngtài túxiàng, hái néng tōngguò hùliánwǎng yáokòng shèxiàngtóu, duì māo jìnxíng jíshí jiānkòng.',goiY:['不仅……还…… = không chỉ … mà còn …','储存 = lưu trữ','遥控 = điều khiển từ xa','即时 = tức thời'],giai:'对 + N + 进行 + V (văn viết) dịch gọn là "V + N" (giám sát mèo); 动态图像 = hình ảnh cử động, không dịch "ảnh động thái".'},
  {vi:'Lấy một con mèo làm ví dụ, ngày nào nó cũng ăn uống vào khoảng hai giờ, sai lệch thời gian trung bình chưa tới năm phút, đủ thấy hành động của mèo rất có quy luật.',zh:'以其中一只猫为例，它每天两点左右吃饭喝水，时间误差平均不到五分钟，可见猫的举动很有规律。',py:'Yǐ qízhōng yì zhī māo wéi lì, tā měi tiān liǎng diǎn zuǒyòu chīfàn hē shuǐ, shíjiān wùchā píngjūn bú dào wǔ fēnzhōng, kějiàn māo de jǔdòng hěn yǒu guīlǜ.',goiY:['以……为例 = lấy … làm ví dụ','误差 = sai số, sai lệch','可见 = đủ thấy','举动 = hành động'],giai:'以……为例 đặt đầu câu dẫn ví dụ; 可见 rút ra kết luận từ ví dụ; 误差 dịch "sai lệch / sai số".'},
  {vi:'Đại Hoàng và Bạch Bạch không phải lúc nào cũng canh ở cửa, mà ở trong nhà ai làm việc nấy, nghe thấy động tĩnh rồi mới cung kính ra đón chủ.',zh:'大黄和白白并不是一直守在门口，而是在屋里该干吗干吗，听到动静后才恭恭敬敬地去迎接主人。',py:'Dàhuáng hé Báibái bìng bú shì yìzhí shǒu zài ménkǒu, ér shì zài wū li gāi gànmá gànmá, tīngdào dòngjing hòu cái gōnggōngjìngjìng de qù yíngjiē zhǔrén.',goiY:['不是……而是…… = không phải … mà là …','该干吗干吗 = việc ai nấy làm','动静 = động tĩnh','恭恭敬敬 = cung kính'],giai:'该干吗干吗 dịch "việc ai nấy làm / cứ làm việc của mình"; ……后才…… = sau khi … mới …; 并 nhấn mạnh phủ định điều người ta tưởng.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 124): 缩写 bài khoá ~300 chữ, tham khảo bảng 练习5
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:300,
  de:'你养过猫吗？你想过人不在家时猫在做什么吗？这篇课文给我们介绍了钱小奇家几只可爱的猫，描述了主人与猫之间的感情，同时告诉我们主人不在家时猫在做什么。请参考练习5，把课文缩写成300字左右的短文。',
  prompt:'Em đã từng nuôi mèo chưa? Em có bao giờ nghĩ khi người vắng nhà thì mèo làm gì không? Bài khoá giới thiệu với chúng ta mấy chú mèo đáng yêu nhà Tiền Tiểu Kỳ, miêu tả tình cảm giữa chủ và mèo, đồng thời cho chúng ta biết khi chủ vắng nhà thì mèo làm gì. Hãy tham khảo bài tập 5, viết tóm tắt bài khoá thành một đoạn văn ngắn khoảng 300 chữ.',
  dan:[
    {hoi:'描述一下钱小奇家的三只猫。',goiY:'①大黄 ②白白 ③喜儿'},
    {hoi:'钱小奇跟三只猫的感情怎么样？',goiY:'①钱小奇对待猫 ②猫对待钱小奇'},
    {hoi:'为了弄清楚主人不在时，猫在做什么，钱小奇采取了什么措施？',goiY:'①安摄像头 ②增加设备'},
    {hoi:'主人不在时，猫到底在干吗？',goiY:'①睡觉 ②有规律'},
    {hoi:'这套系统还帮过钱小奇什么忙？',goiY:'找到了……'}
  ],
  tuNen:['流浪','见多识广','统统','模范','急切','凝视','自力更生','以……为例','该干吗干吗','动静'],
  cauTruc:[
    {ten:'……是……，……，……', nhan:'Tả nhân vật', vd:'大黄原本是只流浪猫，见多识广，很有教养。', khi:'Ý 1: mỗi con mèo 1–2 câu, chọn 2–3 tính từ của bài.'},
    {ten:'……虽然……，但最……的就是……', nhan:'虽然……但 / ……的就是……', vd:'他工作虽然繁忙，但最急切盼望的就是回家开门的那一刻。', khi:'Ý 2: tình cảm của chủ với mèo.'},
    {ten:'A……，B……，C 则……', nhan:'则 (đối chiếu)', vd:'大黄和白白在门口等他，喜儿则站在远处凝视着他。', khi:'Ý 2: tình cảm của mèo với chủ — đặt con mèo "khác biệt" sau 则.'},
    {ten:'……，于是……；后来……，就……', nhan:'于是 / 后来', vd:'他很想知道猫在做什么，于是安了个摄像头。后来他发现摄像头有缺陷，就增加了设备。', khi:'Ý 3: kể các biện pháp theo trình tự thời gian.'},
    {ten:'通过……，他发现……；以……为例，……', nhan:'以……为例', vd:'通过分析，他发现猫大多数时间都在睡觉。以其中一只猫为例，……', khi:'Ý 4: nêu kết quả rồi đưa ví dụ cụ thể (điểm ngữ pháp 2).'},
    {ten:'并不是……，而是该干吗干吗', nhan:'该干吗干吗', vd:'大黄和白白并不是一直在门口等他，而是在屋里该干吗干吗。', khi:'Ý 4: chi tiết thú vị nhất — dùng đúng điểm ngữ pháp 3.'},
    {ten:'……还……；如今只要……，就……', nhan:'还 / 如今', vd:'这套系统还帮他找到了钱包。如今家里稍有动静，系统就会即时“报警”。', khi:'Ý 5: kết bài bằng công dụng khác của hệ thống.'}
  ],
  checklist:[
    'Đã viết đủ khoảng 300 chữ Hán chưa (không đếm dấu câu)?',
    'Có đủ 5 ý theo bảng bài tập 5: ba chú mèo — tình cảm chủ và mèo — biện pháp — mèo làm gì — hệ thống giúp gì chưa?',
    'Đã dùng ít nhất 6 từ / cấu trúc của bài (流浪, 统统, 急切, 自力更生, 以……为例, 该干吗干吗…) chưa?',
    'Có viết bằng lời của mình (tóm tắt ngắn gọn), không chép nguyên các câu dài của bài khoá chưa?',
    'Các ý đã nối với nhau bằng từ nối (于是, 后来, 通过……, 原来, 如今) cho mạch lạc chưa?'
  ],
  model:{
    zh:'钱小奇养了三只猫。大黄原本是只流浪猫，见多识广，很有教养，总是恭恭敬敬地迎接主人。白白是个男孩儿，嗅觉灵敏，动作敏捷，主人一回家，它就扑上来，把主人带回来的东西统统闻一遍。喜儿是个女孩儿，每天都把自己梳理得漂亮而迷人。钱小奇是个模范饲养员，每天早起第一件事就是伺候猫。他工作虽然繁忙，但最急切盼望的就是回家开门的那一刻。猫们也很爱他：大黄和白白在门口等他，喜儿则站在远处凝视着他。他很想知道自己不在家时猫在做什么，于是安了个摄像头。后来他发现摄像头有缺陷，就增加了设备，自力更生安装了一套尖端系统，还能通过互联网遥控摄像头。通过分析，他发现猫大多数时间都在睡觉，行动也很有规律。以其中一只猫为例，它每天下午两点左右吃饭喝水。原来，大黄和白白并不是一直在门口等他，而是在屋里该干吗干吗。这套系统还帮他找到了掉在桌子下的钱包。如今家里稍有动静，系统就会即时“报警”。',
    py:'Qián Xiǎoqí yǎngle sān zhī māo. Dàhuáng yuánběn shì zhī liúlàng māo, jiànduō-shíguǎng, hěn yǒu jiàoyǎng, zǒngshì gōnggōngjìngjìng de yíngjiē zhǔrén. Báibái shì ge nánháir, xiùjué língmǐn, dòngzuò mǐnjié, zhǔrén yì huí jiā, tā jiù pū shànglái, bǎ zhǔrén dài huílái de dōngxi tǒngtǒng wén yí biàn. Xǐ\'ér shì ge nǚháir, měi tiān dōu bǎ zìjǐ shūlǐ de piàoliang ér mírén. Qián Xiǎoqí shì ge mófàn sìyǎngyuán, měi tiān zǎo qǐ dì-yī jiàn shì jiù shì cìhou māo. Tā gōngzuò suīrán fánmáng, dàn zuì jíqiè pànwàng de jiù shì huí jiā kāimén de nà yí kè. Māomen yě hěn ài tā: Dàhuáng hé Báibái zài ménkǒu děng tā, Xǐ\'ér zé zhàn zài yuǎnchù níngshìzhe tā. Tā hěn xiǎng zhīdào zìjǐ bú zài jiā shí māo zài zuò shénme, yúshì ānle ge shèxiàngtóu. Hòulái tā fāxiàn shèxiàngtóu yǒu quēxiàn, jiù zēngjiāle shèbèi, zìlì-gēngshēng ānzhuāngle yí tào jiānduān xìtǒng, hái néng tōngguò hùliánwǎng yáokòng shèxiàngtóu. Tōngguò fēnxī, tā fāxiàn māo dàduōshù shíjiān dōu zài shuìjiào, xíngdòng yě hěn yǒu guīlǜ. Yǐ qízhōng yì zhī māo wéi lì, tā měi tiān xiàwǔ liǎng diǎn zuǒyòu chīfàn hē shuǐ. Yuánlái, Dàhuáng hé Báibái bìng bú shì yìzhí zài ménkǒu děng tā, ér shì zài wū li gāi gànmá gànmá. Zhè tào xìtǒng hái bāng tā zhǎodàole diào zài zhuōzi xià de qiánbāo. Rújīn jiā li shāo yǒu dòngjing, xìtǒng jiù huì jíshí "bàojǐng".',
    vn:'Tiền Tiểu Kỳ nuôi ba con mèo. Đại Hoàng vốn là mèo hoang, từng trải, rất có giáo dục, lúc nào cũng cung kính đón chủ. Bạch Bạch là "cậu con trai", khứu giác nhạy, động tác nhanh nhẹn, chủ vừa về đến nhà là nó nhào tới, ngửi hết một lượt những thứ chủ mang về. Hỷ Nhi là "cô con gái", ngày nào cũng chải chuốt cho mình thật xinh đẹp, quyến rũ. Tiền Tiểu Kỳ là một người nuôi mèo mẫu mực, sáng nào dậy việc đầu tiên cũng là chăm mèo. Tuy công việc bận rộn, nhưng điều anh nóng lòng mong đợi nhất là khoảnh khắc về nhà mở cửa. Lũ mèo cũng rất yêu anh: Đại Hoàng và Bạch Bạch đợi anh ở cửa, còn Hỷ Nhi thì đứng đằng xa chăm chú nhìn anh. Anh rất muốn biết khi mình vắng nhà thì mèo làm gì, thế là lắp một cái camera. Về sau anh phát hiện camera có nhược điểm, bèn bổ sung thiết bị, tự lực lắp một bộ hệ thống tối tân, còn có thể điều khiển camera từ xa qua Internet. Qua phân tích, anh phát hiện mèo phần lớn thời gian đều ngủ, hoạt động cũng rất có quy luật. Lấy một con làm ví dụ, ngày nào nó cũng ăn uống vào khoảng hai giờ chiều. Hoá ra Đại Hoàng và Bạch Bạch không phải lúc nào cũng đợi anh ở cửa, mà ở trong nhà ai làm việc nấy. Hệ thống này còn giúp anh tìm thấy chiếc ví rơi dưới gầm bàn. Giờ đây chỉ cần trong nhà có chút động tĩnh, hệ thống sẽ lập tức "báo động".'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng, cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'描述一下钱小奇家的三只猫。',
     q_vn:'Hãy miêu tả ba chú mèo nhà Tiền Tiểu Kỳ.',
     hint:'①大黄 ②白白 ③喜儿',
     sample:'大黄原本是只流浪猫，见多识广，很有教养，天天趴在窗台上晒太阳。白白是个男孩儿，嗅觉灵敏，动作敏捷，快活而好动。喜儿是个人见人爱的女孩儿，每天都把自己梳理得漂亮而迷人。',
     sample_vn:'Đại Hoàng vốn là mèo hoang, từng trải, rất có giáo dục, ngày ngày nằm trên bậu cửa sổ phơi nắng. Bạch Bạch là "cậu con trai", khứu giác nhạy, động tác nhanh nhẹn, vui vẻ và hiếu động. Hỷ Nhi là "cô con gái" ai gặp cũng quý, ngày nào cũng chải chuốt cho mình thật xinh đẹp, quyến rũ.',
     note:'Mỗi con mèo một câu: 是 + xuất thân / giới tính + 2–3 tính từ của bài. Dùng 而 nối hai tính từ (快活而好动, 漂亮而迷人).'},
    {q_zh:'钱小奇跟三只猫的感情怎么样？',
     q_vn:'Tình cảm giữa Tiền Tiểu Kỳ và ba chú mèo thế nào?',
     hint:'①钱小奇对待猫 ②猫对待钱小奇',
     sample:'钱小奇是个模范饲养员，每天早起第一件事就是伺候猫，工作再忙，他最急切盼望的也是回家开门的那一刻。猫们也很爱他：大黄恭恭敬敬地在门口迎接，白白亲热地扑上来，喜儿则站在远处，用凝视表达深沉的热情。',
     sample_vn:'Tiền Tiểu Kỳ là người nuôi mèo mẫu mực, sáng nào dậy việc đầu tiên cũng là chăm mèo; công việc bận mấy, điều anh nóng lòng mong đợi nhất vẫn là khoảnh khắc về nhà mở cửa. Lũ mèo cũng rất yêu anh: Đại Hoàng cung kính ra cửa đón, Bạch Bạch thân thiết nhào tới, còn Hỷ Nhi thì đứng đằng xa, dùng ánh nhìn chăm chú bày tỏ tình cảm sâu lắng.',
     note:'Hai chiều tình cảm: chủ → mèo (模范饲养员, 急切盼望), mèo → chủ (恭恭敬敬, 亲热, 凝视). Dùng 则 để đối chiếu Hỷ Nhi với hai con kia.'},
    {q_zh:'为了弄清楚主人不在时，猫在做什么，钱小奇采取了什么措施？',
     q_vn:'Để làm rõ khi chủ vắng nhà thì mèo làm gì, Tiền Tiểu Kỳ đã dùng biện pháp gì?',
     hint:'①安摄像头 ②增加设备',
     sample:'他先在家里安了个摄像头，监视猫的一举一动。后来发现这个摄像头不能移动，有缺陷，于是他增加了设备，自力更生安装了一套尖端玩意儿，不但能抓拍、储存图像，还能通过互联网遥控摄像头，对猫进行即时监控。',
     sample_vn:'Trước tiên anh lắp một cái camera trong nhà, theo dõi mọi cử động của mèo. Sau đó phát hiện camera này không di chuyển được, có nhược điểm, thế là anh bổ sung thiết bị, tự lực lắp một bộ "đồ chơi" tối tân, không những chụp bắt, lưu được hình ảnh mà còn điều khiển camera từ xa qua Internet, giám sát mèo tức thời.',
     note:'Kể theo trình tự 先……后来……于是……; từ khoá: 监视, 缺陷, 自力更生, 遥控, 即时.'},
    {q_zh:'主人不在时，猫到底在干吗？',
     q_vn:'Khi chủ vắng nhà, rốt cuộc mèo làm gì?',
     hint:'①睡觉 ②有规律',
     sample:'通过分析数据和图片，钱小奇发现猫大多数时间都在睡觉。除了睡觉，它们的行动很有规律，以其中一只猫为例，它每天下午两点左右吃饭喝水，时间误差平均不到5分钟。大黄和白白也不是一直在门口等主人，而是在屋里该干吗干吗。',
     sample_vn:'Qua phân tích dữ liệu và hình ảnh, Tiền Tiểu Kỳ phát hiện mèo phần lớn thời gian đều ngủ. Ngoài ngủ ra, hoạt động của chúng rất có quy luật: lấy một con làm ví dụ, ngày nào nó cũng ăn uống vào khoảng hai giờ chiều, sai lệch trung bình chưa đến 5 phút. Đại Hoàng và Bạch Bạch cũng không phải lúc nào cũng đợi chủ ở cửa, mà ở trong nhà ai làm việc nấy.',
     note:'Hai ý: 睡觉 + 有规律; nêu ví dụ bằng 以……为例 và chi tiết 该干吗干吗 — hai điểm ngữ pháp của bài.'},
    {q_zh:'这套系统还帮过钱小奇什么忙？',
     q_vn:'Hệ thống này còn giúp Tiền Tiểu Kỳ việc gì?',
     hint:'找到了……',
     sample:'有一次，钱小奇在办公室上网遥控摄像头，找到了掉在家里桌子下的钱包。如今，只要家里稍有动静，系统就能把图像记录下来，并即时发到他的邮箱里“报警”。',
     sample_vn:'Có lần, Tiền Tiểu Kỳ ở văn phòng lên mạng điều khiển camera, tìm thấy chiếc ví rơi dưới gầm bàn ở nhà. Giờ đây chỉ cần trong nhà có chút động tĩnh, hệ thống sẽ ghi lại hình ảnh và gửi ngay vào hộp thư của anh để "báo động".',
     note:'Dùng đúng gợi ý 找到了……; thêm ý 稍有动静 → 即时“报警” để câu trả lời trọn vẹn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 11',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你家这只猫怎么这么瘦？'},
            {sp:'男',zh:'它以前是只流浪猫，上个月淋着大雨跑到我家门口，我就把它留下来了。'}],
     q:'男的家的猫原来是什么样的？',qvn:'Con mèo nhà người đàn ông trước kia là mèo thế nào?',
     opts:['流浪猫','朋友送的猫','宠物店买的猫','邻居家的猫'],ans:0,
     why:'它以前是只流浪猫 — nói thẳng xuất thân. 淋着大雨跑到我家门口 giống chi tiết Đại Hoàng trong bài khoá.',
     words:['流浪','淋']},

    {n:2,
     lines:[{sp:'男',zh:'你家那只小猫真可爱，一看见你就扑过来。'},
            {sp:'女',zh:'是啊，它嗅觉特别灵敏，我还没开门，它就知道我回来了。'}],
     q:'关于那只小猫，可以知道什么？',qvn:'Về con mèo nhỏ đó, có thể biết điều gì?',
     opts:['很懒惰','嗅觉很灵敏','不喜欢主人','总是在睡觉'],ans:1,
     why:'它嗅觉特别灵敏 — nghe được từ khoá là chọn ngay. 一看见你就扑过来 cho thấy nó rất quấn chủ, nên "不喜欢主人" sai.',
     words:['扑','嗅觉','灵敏']},

    {n:3,
     lines:[{sp:'女',zh:'听说你在家里装了个摄像头？'},
            {sp:'男',zh:'对，想看看我不在家时猫在干什么。可这个摄像头不能移动，拍下的镜头一大半都是空的。'}],
     q:'男的对摄像头有什么不满？',qvn:'Người đàn ông không hài lòng gì về camera?',
     opts:['价格太贵','不能移动','声音太大','操作太复杂'],ans:1,
     why:'可 + 这个摄像头不能移动 — ý chính nằm sau từ chuyển ý 可. Hệ quả: 镜头一大半都是空的.',
     words:['镜头']},

    {n:4,
     lines:[{sp:'男',zh:'你这套设备是在哪儿买的？挺尖端的嘛。'},
            {sp:'女',zh:'哪儿买得到啊，是我自己边钻研边安装的，花了我整整三个月。'}],
     q:'这套设备是怎么来的？',qvn:'Bộ thiết bị này có được bằng cách nào?',
     opts:['在网上买的','朋友送的','女的自己安装的','请专家装的'],ans:2,
     why:'哪儿买得到啊 là câu hỏi tu từ = không mua được; 是我自己边钻研边安装的 → tự lắp (tự lực cánh sinh).',
     words:['尖端','钻研']},

    {n:5,
     lines:[{sp:'女',zh:'你在办公室也能知道家里的情况？'},
            {sp:'男',zh:'当然，我可以用手机遥控摄像头，家里稍有动静，照片就会即时发到我的邮箱。'}],
     q:'男的是怎样了解家里情况的？',qvn:'Người đàn ông nắm tình hình ở nhà bằng cách nào?',
     opts:['请邻居帮忙看','打电话问家人','用手机遥控摄像头','每天中午回家看'],ans:2,
     why:'我可以用手机遥控摄像头 — cách làm được nói rõ; 稍有动静……即时发到邮箱 bổ sung chi tiết.',
     words:['遥控','动静','即时']},

    {n:6,
     lines:[{sp:'男',zh:'分析完这几个月的录像，你有什么发现？'},
            {sp:'女',zh:'猫的行动特别有规律。以大黄为例，它每天两点左右吃饭，误差不到五分钟。'}],
     q:'女的发现了什么？',qvn:'Người phụ nữ phát hiện ra điều gì?',
     opts:['猫一整天都在玩儿','猫的行动很有规律','大黄不爱吃饭','猫常常跑出去'],ans:1,
     why:'猫的行动特别有规律 là kết luận; 以大黄为例 là ví dụ minh hoạ — mẫu 以……为例 của bài.',
     words:['误差']},

    {n:7,
     lines:[{sp:'男',zh:'很多人以为，主人不在家时，猫会一直守在门口等主人回来。其实不然，它们大多数时间都在睡觉，醒着的时候就该干吗干吗，只有听到主人的脚步声，才会跑到门口迎接。'}],
     q:'根据这段话，主人不在家时猫大多在做什么？',qvn:'Theo đoạn nói, khi chủ vắng nhà mèo phần lớn làm gì?',
     opts:['一直守在门口','大多数时间在睡觉','到处找主人','急切地等主人回来'],ans:1,
     why:'很多人以为…… 其实不然 — ý đúng nằm sau 其实不然: 大多数时间都在睡觉. Phương án 1 là điều "nhiều người tưởng" nên sai.',
     words:[]},

    {n:8,
     lines:[{sp:'女',zh:'你工作那么忙，还养三只猫，不累吗？'},
            {sp:'男',zh:'累是累，可每天最急切盼望的就是回家开门的那一刻，一看到它们，什么烦恼都统统忘了。'}],
     q:'男的养猫有什么感受？',qvn:'Người đàn ông nuôi mèo có cảm nhận gì?',
     opts:['觉得很麻烦','后悔养了三只','虽然累但很快乐','想送走两只'],ans:2,
     why:'累是累，可…… = mệt thì mệt thật, nhưng … → nhượng bộ rồi khẳng định niềm vui; 烦恼都统统忘了 = quên hết phiền muộn.',
     words:['急切','统统']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp hỏi em đã dọn đồ trong ngăn bàn trước khi đổi phòng học chưa.',
     a:{sp:'Bạn',zh:'明天要换教室了，你抽屉里的东西都拿走了吗？',vn:'Mai đổi phòng học rồi, đồ trong ngăn bàn cậu mang đi hết chưa?'},
     need:['Dùng 统统','Nói rõ đã mang đồ đi đâu'],
     sample:'早就统统拿回宿舍了，一本书都没留下。',
     samplePy:'Zǎo jiù tǒngtǒng ná huí sùshè le, yì běn shū dōu méi liúxià.',
     sampleVn:'Mang hết về ký túc xá từ lâu rồi, không để lại quyển sách nào.',
     tip:'统统 đứng ngay trước động từ; thêm 一……都没…… để nhấn mạnh không sót thứ gì.'},

    {scene:'Cô giáo hỏi lớp em định sắp xếp tiết mục văn nghệ thế nào.',
     a:{sp:'Cô giáo',zh:'这次文艺演出，你们班准备怎么安排节目？',vn:'Buổi văn nghệ lần này, lớp em định sắp xếp tiết mục thế nào?'},
     need:['Dùng 以……为主','Nêu thêm phần phụ'],
     sample:'老师，我们班的节目以合唱为主，另外再准备一个小品。',
     samplePy:'Lǎoshī, wǒmen bān de jiémù yǐ héchàng wéi zhǔ, lìngwài zài zhǔnbèi yí ge xiǎopǐn.',
     sampleVn:'Thưa cô, tiết mục của lớp em lấy hợp xướng làm chính, ngoài ra chuẩn bị thêm một tiểu phẩm ạ.',
     tip:'以 A 为主 = lấy A làm chính (sắc thái trang trọng, hợp khi nói với thầy cô).'},

    {scene:'Bạn thân cứ lo lắng mãi về kết quả kỳ thi vừa xong.',
     a:{sp:'Bạn',zh:'考完试我一直睡不着，老想着自己考得怎么样。',vn:'Thi xong tớ cứ mất ngủ, lúc nào cũng nghĩ mình làm bài thế nào.'},
     need:['Dùng 该干吗干吗 hoặc 该 + V + 就 + V','Khuyên bạn thả lỏng'],
     sample:'考都考完了，着急也没用，该吃就吃，该睡就睡，该干吗干吗吧！',
     samplePy:'Kǎo dōu kǎowán le, zháojí yě méi yòng, gāi chī jiù chī, gāi shuì jiù shuì, gāi gànmá gànmá ba!',
     sampleVn:'Thi thì cũng thi xong rồi, sốt ruột cũng chẳng ích gì, ăn thì cứ ăn, ngủ thì cứ ngủ, việc gì cứ làm việc nấy đi!',
     tip:'Lặp 该 + V + 就 + V để khuyên "cứ sinh hoạt như bình thường"; V + 都 + V + 完了 = đã … xong rồi.'},

    {scene:'Cô hàng xóm thắc mắc vì sao nhà em lắp camera.',
     a:{sp:'Cô hàng xóm',zh:'你们家怎么在屋里装了摄像头啊？',vn:'Sao nhà cháu lại lắp camera trong nhà thế?'},
     need:['Dùng 遥控 hoặc 即时','Nêu mục đích bằng 为了'],
     sample:'为了照顾家里的猫，我们装了能遥控的摄像头，我在学校也能即时看到它们。',
     samplePy:'Wèile zhàogù jiā li de māo, wǒmen zhuāngle néng yáokòng de shèxiàngtóu, wǒ zài xuéxiào yě néng jíshí kàndào tāmen.',
     sampleVn:'Để trông nom mấy con mèo ở nhà, nhà cháu lắp camera điều khiển từ xa được, cháu ở trường cũng xem ngay được chúng ạ.',
     tip:'为了 + mục đích đặt đầu câu; 能遥控的摄像头 = camera điều khiển từ xa được (cụm định ngữ).'},

    {scene:'Bạn nhờ em trông mèo giúp mấy ngày nghỉ lễ.',
     a:{sp:'Bạn',zh:'国庆节我要回老家，你能帮我照顾几天猫吗？',vn:'Nghỉ lễ Quốc khánh tớ về quê, cậu trông mèo giúp tớ mấy ngày được không?'},
     need:['Dùng 喂 và 清洁','Nhận lời, hỏi thêm một chi tiết'],
     sample:'没问题，我每天去喂它，顺便把猫舍清洁一下。它一天吃几顿？',
     samplePy:'Méi wèntí, wǒ měi tiān qù wèi tā, shùnbiàn bǎ māoshè qīngjié yíxià. Tā yì tiān chī jǐ dùn?',
     sampleVn:'Không vấn đề, ngày nào tớ cũng qua cho nó ăn, tiện thể dọn chuồng luôn. Nó một ngày ăn mấy bữa?',
     tip:'喂 + động vật; 把 + nơi + 清洁一下; 顺便 = tiện thể.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Em viết báo cáo khoa học về thói quen sinh hoạt của mèo.',
     a:'我拿一只猫举个例子吧，它天天两点吃饭。',b:'以其中一只猫为例，它每天下午两点左右进食。',better:'b',
     why:'以……为例, 进食 là văn viết, hợp báo cáo; 拿……举个例子, 天天 là khẩu ngữ.'},

    {scene:'Em khuyên bạn thân đừng lo lắng sau kỳ thi.',
     a:'考完了就别想了，该干吗干吗去！',b:'考试已经结束，建议你恢复正常的学习和生活。',better:'a',
     why:'Với bạn thân, 该干吗干吗 thân mật, tự nhiên; câu b giống lời khuyên trong thông báo chính thức, nghe xa cách.'},

    {scene:'Em giới thiệu sản phẩm camera trong bài thuyết trình môn Tin học.',
     a:'这款摄像头支持远程遥控和即时监控，操作非常简单。',b:'这玩意儿挺尖端的，用手机就能看家里，可好玩儿了。',better:'a',
     why:'玩意儿, 可好玩儿了 là khẩu ngữ; thuyết trình cần thuật ngữ: 远程遥控, 即时监控, 操作简单.'},

    {scene:'Em nhắn tin nhờ bạn cùng phòng cho mèo ăn.',
     a:'麻烦你帮我喂一下猫，猫粮在柜子里。',b:'烦请代为饲养本人之宠物，饲料存放于柜内。',better:'a',
     why:'Câu b quá văn vẻ (烦请, 代为, 本人之, 于); giữa bạn cùng phòng nói 麻烦你帮我喂一下猫 là đủ. 饲养 cũng trang trọng hơn 喂.'},

    {scene:'Em viết thư cảm ơn thầy giáo cũ nhân Ngày Nhà giáo.',
     a:'您一直是我们心中的模范，您深沉的爱让我们终生难忘。',b:'老师您太棒了，我们都超喜欢您！',better:'a',
     why:'Thư cảm ơn thầy cô cần trang trọng: 模范, 深沉的爱, 终生难忘. Câu b dùng 超 (khẩu ngữ tuổi teen), hợp nói miệng hơn.'},

    {scene:'Em kể với bạn chuyện con mèo nhà mình.',
     a:'我家的猫馋得很，一闻到鱼味儿就扑过来。',b:'我家的猫食欲旺盛，嗅到鱼类气味即迅速扑来。',better:'a',
     why:'Kể chuyện với bạn dùng khẩu ngữ (馋得很, 鱼味儿, 一……就……); câu b giống văn bản khoa học (食欲旺盛, 即, 迅速).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2 phút.',
  outline: [
    {step:'描述一下钱小奇家的三只猫。', cue:'①大黄 ②白白 ③喜儿', words:['流浪','见多识广','教养','懒惰','馋','趴','知足常乐','恭敬','君子','嗅觉','灵敏','敏捷','快活','扑','亲热','统统','迷人']},
    {step:'钱小奇跟三只猫的感情怎么样？', cue:'①钱小奇对待猫 ②猫对待钱小奇', words:['模范','饲养','清洁','喂','繁忙','急切','例外','凝视','深沉']},
    {step:'为了弄清楚主人不在时，猫在做什么，钱小奇采取了什么措施？', cue:'①安摄像头 ②增加设备', words:['监视','举动','缺陷','镜头','自力更生','尖端','钻研','动态','储存','遥控','即时','操纵','跟踪','角落']},
    {step:'主人不在时，猫到底在干吗？', cue:'①睡觉 ②有规律', words:['误差']},
    {step:'这套系统还帮过钱小奇什么忙？', cue:'找到了……', words:['踪迹','遥控','动静','操作','即时']}
  ],
  checklist: [
    'Kể đủ 5 ý theo đúng thứ tự bảng chưa?',
    'Ý 1 có tả đủ ba con mèo, mỗi con ít nhất 2 đặc điểm (见多识广, 嗅觉灵敏, 漂亮而迷人…) không?',
    'Ý 3 có kể đúng trình tự: 安摄像头 → 发现缺陷 → 增加设备, 自力更生 không?',
    'Ý 4 có dùng được 以……为例 và 该干吗干吗 không?',
    'Có kể bằng LỜI MÌNH (câu ngắn, rõ ý), hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 122–125) — đáp án theo đáp án sách
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'拜访', chu:'拜', ds:['拜会','拜见','拜望','拜年']},
   cau:[
     {tu:'灵敏', chu:'灵', dap:['灵活','灵巧','灵验','机灵'], them:['灵便','灵通','失灵','心灵手巧'],
      giai:'灵 ở đây nghĩa là nhanh nhạy, linh hoạt, hiệu nghiệm (消息灵通 = tin tức nhanh nhạy; 刹车失灵 = phanh không ăn).'},
     {tu:'亲热', chu:'热', dap:['热闹','热烈','热情','炎热'], them:['热心','热爱','热切','火热','闷热','酷热'],
      giai:'热 trong 亲热 là nồng nhiệt, nhiệt tình (热情, 热烈, 热心); đáp án sách có cả 炎热 — nghĩa gốc "nóng".'},
     {tu:'镜头', chu:'头', dap:['头脑','头部','石头','烟头'], them:['木头','骨头','枕头','念头','砖头','馒头'],
      giai:'头 trong 镜头 là hậu tố danh từ (như 石头, 木头 — đọc nhẹ tou); đáp án sách còn có 头 = đầu (头脑, 头部) và "đầu mẩu" (烟头).'},
     {tu:'误差', chu:'误', dap:['误解','误会','误导','错误'], them:['失误','误区','误用','口误','笔误','误伤'],
      giai:'误 = sai, nhầm, lỗi (误解 = hiểu nhầm, 口误 = lỡ lời, 笔误 = viết nhầm).'}
   ]},

  {kieu:'gx', de:'用所给词语或结构完成句子', vn:'Dùng từ hoặc cấu trúc cho sẵn hoàn thành câu (sách không in đáp án — đây là câu gợi ý)',
   cau:[
     {s:'我不喜欢的东西＿＿。', tu:'统统', dap:'我不喜欢的东西统统送给了别人。',
      giai:'Đối tượng (我不喜欢的东西) đứng đầu câu làm chủ đề, 统统 đứng ngay trước động từ: bao trùm tất cả, không sót.'},
     {s:'他的心情一点儿都没受这个坏消息的影响，＿＿。', tu:'该 + V + O + V + O', dap:'他的心情一点儿都没受这个坏消息的影响，该吃饭吃饭，该睡觉睡觉。',
      giai:'Mẫu 该 + V + O + V + O (该吃饭吃饭) = mọi việc vẫn như thường, không gì thay đổi được.'},
     {s:'上个周末我＿＿，我们聊得很高兴。', tu:'拜访', dap:'上个周末我去拜访了高中时的班主任，我们聊得很高兴。',
      giai:'去 + 拜访 + người (thăm hỏi người trên, cách nói lịch sự).'},
     {s:'每个人都应该遵守学校纪律，＿＿。', tu:'例外', dap:'每个人都应该遵守学校纪律，谁也不能例外。',
      giai:'谁也不能例外 = không ai được ngoại lệ — hô ứng với 每个人都…….'},
     {s:'任何事情都＿＿，不要总依靠别人。', tu:'自力更生', dap:'任何事情都要自力更生，不要总依靠别人。',
      giai:'要 + 自力更生: phải tự lực; đối lập với vế sau 依靠别人.'},
     {s:'他游历过很多国家，＿＿。', tu:'见多识广', dap:'他游历过很多国家，见多识广，什么问题都难不倒他。',
      giai:'Vế trước là nguyên nhân (đi nhiều), 见多识广 là kết quả; có thể thêm vế minh hoạ 什么……都…….'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['敏捷','流浪','亲热','饲养','教养'],
   cau:[
     {s:'昨天，我在小区里遇到一只＿＿狗，金色的毛发，动作＿＿，看见我，＿＿地跟在我身边。虽然它没有主人，但看起来很有＿＿，像个君子似的。我心里想：这么帅气的狗，主人怎么忍心扔掉呢？我们人类一旦决定＿＿一种动物，就要对它负责到底。',
      dap:['流浪','敏捷','亲热','教养','饲养']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['统统','快活','凝视','扑','趴'],
   cau:[
     {s:'最近，家里的母猫生了几只小猫，小家伙们＿＿而好动。我一回家，它们就＿＿过来，跟我玩耍。而母猫则＿＿在沙发上＿＿着它的孩子们，眼神中充满了母爱。现在我每天最热切盼望的就是早点儿回家看看它们，别的事情＿＿都不重要。',
      dap:['快活','扑','趴','凝视','统统']}
   ]},

  {kieu:'ab', de:'把下列分句按叙述的次序排列成完整的句子', vn:'Sắp xếp các vế câu theo trình tự kể thành câu hoàn chỉnh — chọn thứ tự đúng (đáp án sách)',
   cau:[
     {s:'A. 小王压不住火气　B. 然后，又把脸趴在他的肩上　C. 突然用拳头打丈夫的肩膀　D. 哭了起来',
      opts:['A C B D：小王压不住火气，突然用拳头打丈夫的肩膀，然后，又把脸趴在他的肩上，哭了起来。','A B C D：小王压不住火气，然后，又把脸趴在他的肩上，突然用拳头打丈夫的肩膀，哭了起来。'],
      ans:0, giai:'Đáp án sách: A C B D. Nguyên nhân (压不住火气) → hành động đầu tiên (突然……打) → 然后，又…… (hành động tiếp theo) → kết quả (哭了起来). 然后 và 又 cho biết vế B đứng sau C.'},
     {s:'A. 山上住着个种树的老爷爷　B. 他的胡子很长　C. 听说在很远很远的地方有一座山　D. 白头发白眉毛白胡子　E. 一直拖到地上',
      opts:['A C D B E：山上住着个种树的老爷爷，听说在很远很远的地方有一座山，白头发白眉毛白胡子，他的胡子很长，一直拖到地上。','C A D B E：听说在很远很远的地方有一座山，山上住着个种树的老爷爷，白头发白眉毛白胡子，他的胡子很长，一直拖到地上。'],
      ans:1, giai:'Đáp án sách: C A D B E. Đi từ xa đến gần: nơi chốn (有一座山) → người (山上住着……) → ngoại hình chung (白头发白眉毛白胡子) → chi tiết (胡子很长) → 一直拖到地上 nối tiếp 胡子. Vế A mở đầu bằng 山上 nên phải đứng sau C (câu nhắc tới 一座山).'}
   ]},

  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议', vn:'Chỉ ra lỗi sai của các câu sau và đề xuất cách sửa (病句类型：表意不明 — ý diễn đạt không rõ, chủ yếu do đại từ chỉ không rõ)',
   cau:[
     {s:'我一定说服妈妈和你一同去，这样你在路上就有个伴儿了。', sai:'说服妈妈和你一同去', loai:'表意不明',
      dap:'我一定说服妈妈让她和你一同去，这样你在路上就有个伴儿了。',
      giai:'Nội dung "thuyết phục" không rõ: có thể là để mẹ đi cùng bạn, cũng có thể là để mẹ cho "tôi" đi cùng bạn. Sửa: 说服妈妈让她和你一同去 (hoặc 说服妈妈让我和你一同去).'},
     {s:'今天师傅在班会上表扬了自己，但是我觉得还需要继续努力。', sai:'表扬了自己', loai:'指代不明',
      dap:'今天师傅在班会上表扬了我，但是我觉得自己还需要继续努力。',
      giai:'"自己" có thể chỉ sư phụ, cũng có thể chỉ "tôi". Sửa: 表扬了我……我觉得自己还需要继续努力 (hoặc 表扬了他自己，但是我觉得他还需要继续努力).'},
     {s:'小张和小王商量好了，他请他看电影，他请他吃饭。', sai:'他请他看电影，他请他吃饭', loai:'指代不明',
      dap:'小张和小王商量好了，小张请小王看电影，小王请小张吃饭。',
      giai:'Bốn chữ "他" không rõ chỉ ai. Thay bằng tên: 小张请小王看电影，小王请小张吃饭 (hoặc ngược lại).'},
     {s:'对学生会提出的建议，我举双手赞成。', sai:'对学生会提出的建议', loai:'表意不明',
      dap:'对于学生会提出的建议，我举双手赞成。',
      giai:'Quan hệ giữa "学生会" và "建议" không rõ: có thể 学生会 là bên đưa ra đề nghị (对 đi với 建议), cũng có thể là nơi nhận đề nghị (对 đi với 学生会). Sửa: 对于学生会提出的建议…… hoặc 对于您向学生会提出的建议…….'},
     {s:'我看见小李和他女朋友有说有笑地走过来，肩上背着双肩包。', sai:'肩上背着双肩包', loai:'指代不明（主语不明）',
      dap:'我看见小李和他女朋友有说有笑地走过来，小李肩上背着双肩包。',
      giai:'Vế "肩上背着双肩包" không rõ chủ ngữ: Tiểu Lý, bạn gái hay cả hai. Bổ sung chủ ngữ: 小李肩上…… / 他女朋友肩上…… / 他们肩上都…….'}
   ]}
];
