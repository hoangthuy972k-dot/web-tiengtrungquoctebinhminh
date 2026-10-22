// ══════════════════════════════════════════
// DATA — HSK5 Bài 35: 植物会出汗 (Thực vật cũng đổ mồ hôi)
// Unit 12 亲近自然 · Nguồn: HSK标准教程5下 (tr. 148–155) + 练习册 bài 35
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'炎热',py:'yánrè',pos:'Tính từ',vn:'nóng bức, oi nồng',hv:'viêm nhiệt',em:'🥵',lesson:1,
   explain:['(Thời tiết) rất nóng, nóng gay gắt — mức độ mạnh hơn 热, mang sắc thái văn viết.','Thường làm định ngữ cho danh từ chỉ thời gian, thời tiết: 炎热的夏天, 炎热的天气, 炎热的中午.'],
   usage:'炎热 + 的 + 夏天 / 天气 / 季节 / 地区. Làm vị ngữ: 天气十分炎热. Không đi với đồ vật cụ thể (✗ 炎热的水 → 热水). Khẩu ngữ thường nói 很热 / 热死了.',
   collo:['炎热的夏天','天气炎热','炎热的中午','炎热地区'],
   ex_zh:'炎热的夏天，踢完一场球赛，每个队员都已经是汗如雨下。',ex_py:'Yánrè de xiàtiān, tīwán yì chǎng qiúsài, měi ge duìyuán dōu yǐjīng shì hàn rú yǔ xià.',ex_vn:'Mùa hè nóng bức, đá xong một trận bóng, cầu thủ nào cũng đã mồ hôi đầm đìa như mưa.',
   exList:[
     {zh:'炎热的夏天，踢完一场球赛，每个队员都已经是汗如雨下。',py:'Yánrè de xiàtiān, tīwán yì chǎng qiúsài, měi ge duìyuán dōu yǐjīng shì hàn rú yǔ xià.',vn:'Mùa hè nóng bức, đá xong một trận bóng, cầu thủ nào cũng đã mồ hôi đầm đìa như mưa.'},
     {zh:'天气越来越炎热，学校把体育课改到了早上。',py:'Tiānqì yuè lái yuè yánrè, xuéxiào bǎ tǐyùkè gǎidàole zǎoshang.',vn:'Trời ngày càng nóng bức, nhà trường đã đổi giờ thể dục sang buổi sáng.'},
     {zh:'炎热的中午，最好别在太阳下面运动。',py:'Yánrè de zhōngwǔ, zuìhǎo bié zài tàiyáng xiàmian yùndòng.',vn:'Buổi trưa oi nồng, tốt nhất đừng vận động dưới nắng.'}
   ],
   colloFull:[
     {zh:'炎热的夏天',py:'yánrè de xiàtiān',vn:'mùa hè nóng bức'},
     {zh:'天气炎热',py:'tiānqì yánrè',vn:'thời tiết nóng bức'},
     {zh:'炎热的中午',py:'yánrè de zhōngwǔ',vn:'buổi trưa oi nồng'},
     {zh:'炎热地区',py:'yánrè dìqū',vn:'vùng nóng'},
     {zh:'十分炎热',py:'shífēn yánrè',vn:'vô cùng nóng bức'}
   ],
   patterns:[
     {s:'炎热 + 的 + 夏天 / 天气 / 中午',m:'Mùa hè / thời tiết / buổi trưa nóng bức'},
     {s:'天气 + (十分 / 越来越) + 炎热',m:'Thời tiết (rất / ngày càng) nóng bức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời càng ngày càng nóng bức, học sinh đều không muốn ra ngoài.',answer:'天气越来越炎热，学生们都不想出去。',answerPy:'Tiānqì yuè lái yuè yánrè, xuéshengmen dōu bù xiǎng chūqu.',
      note:'越来越 + tính từ: 越来越炎热. Không thêm 很 sau 越来越.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy mùa hè ở đây rất nóng bức, nhưng buổi tối rất mát.',answer:'虽然这儿的夏天十分炎热，但是晚上很凉快。',answerPy:'Suīrán zhèr de xiàtiān shífēn yánrè, dànshì wǎnshang hěn liángkuai.',
      note:'炎热 làm vị ngữ, trước có phó từ mức độ 十分 / 非常.',pair:'虽然……但是……'}
   ]},

  {n:2,zh:'歇',py:'xiē',pos:'Động từ',vn:'nghỉ, nghỉ ngơi',hv:'hiết',em:'🪑',lesson:1,
   explain:['Nghỉ một lát cho đỡ mệt — nghĩa như 休息 nhưng là khẩu ngữ, thường là nghỉ ngắn.','Hay dùng lặp lại hoặc có bổ ngữ thời lượng: 歇一歇, 歇一会儿, 歇两天.'],
   usage:'Bảng 词语搭配 của sách: 歇 + 一会儿 / 两天. Dạng lặp: 歇一歇 / 歇歇. Nơi chốn đặt trước: 到树下歇一歇. Là động từ ly hợp nhẹ: 歇口气 (nghỉ lấy hơi). Văn trang trọng dùng 休息.',
   collo:['歇一会儿','歇两天','歇一歇','歇口气'],
   ex_zh:'如果这个时候，能到大树下歇一歇，喝口凉开水，那一定是件美事。',ex_py:'Rúguǒ zhège shíhou, néng dào dà shù xià xiē yi xiē, hē kǒu liáng kāishuǐ, nà yídìng shì jiàn měishì.',ex_vn:'Nếu lúc này được đến dưới gốc cây lớn nghỉ một lát, uống ngụm nước đun sôi để nguội, thì hẳn là một chuyện thú vị.',
   exList:[
     {zh:'如果这个时候，能到大树下歇一歇，喝口凉开水，那一定是件美事。',py:'Rúguǒ zhège shíhou, néng dào dà shù xià xiē yi xiē, hē kǒu liáng kāishuǐ, nà yídìng shì jiàn měishì.',vn:'Nếu lúc này được đến dưới gốc cây lớn nghỉ một lát, uống ngụm nước đun sôi để nguội, thì hẳn là một chuyện thú vị.'},
     {zh:'爬了两个小时山，大家都累了，咱们先歇一会儿吧。',py:'Pále liǎng ge xiǎoshí shān, dàjiā dōu lèi le, zánmen xiān xiē yíhuìr ba.',vn:'Leo núi hai tiếng rồi, ai cũng mệt, chúng ta nghỉ một lát đã.'},
     {zh:'你感冒还没好，在家歇两天再来上课吧。',py:'Nǐ gǎnmào hái méi hǎo, zài jiā xiē liǎng tiān zài lái shàngkè ba.',vn:'Em cảm còn chưa khỏi, ở nhà nghỉ vài hôm rồi hãy đi học.'}
   ],
   colloFull:[
     {zh:'歇一会儿',py:'xiē yíhuìr',vn:'nghỉ một lát'},
     {zh:'歇两天',py:'xiē liǎng tiān',vn:'nghỉ vài hôm'},
     {zh:'歇一歇',py:'xiē yi xiē',vn:'nghỉ một chút'},
     {zh:'歇口气',py:'xiē kǒu qì',vn:'nghỉ lấy hơi'},
     {zh:'到树下歇歇',py:'dào shù xià xiēxie',vn:'ra gốc cây nghỉ một chút'}
   ],
   patterns:[
     {s:'(到 + nơi chốn) + 歇一歇 / 歇歇',m:'(Đến đâu đó) nghỉ một chút'},
     {s:'歇 + 一会儿 / 两天 (bổ ngữ thời lượng)',m:'Nghỉ một lát / vài hôm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa chạy xong 800 mét là cậu ấy liền ra gốc cây nghỉ một lát.',answer:'他一跑完八百米就到树下歇了一会儿。',answerPy:'Tā yì pǎowán bābǎi mǐ jiù dào shù xià xiēle yíhuìr.',
      note:'一……就……: hai hành động nối tiếp ngay. 了 đặt sau 歇, trước bổ ngữ thời lượng 一会儿.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chỉ cần nghỉ vài hôm là sức khoẻ của bố sẽ hồi phục.',answer:'只要歇两天，爸爸的身体就会恢复。',answerPy:'Zhǐyào xiē liǎng tiān, bàba de shēntǐ jiù huì huīfù.',
      note:'歇两天 là cụm trong bảng 词语搭配. 只要……就……: chỉ cần điều kiện là có kết quả.',pair:'只要……就……'}
   ]},

  {n:3,zh:'开水',py:'kāishuǐ',pos:'Danh từ',vn:'nước sôi, nước đun sôi',hv:'khai thuỷ',em:'♨️',lesson:1,
   explain:['Nước đã đun sôi (có thể đang nóng hoặc để nguội). Người Trung Quốc có thói quen uống nước đun sôi thay nước lạnh.','凉开水 = nước đun sôi để nguội; 白开水 = nước lọc đun sôi (không pha gì).'],
   usage:'Bảng 词语搭配: 一壶 / 杯 / 瓶 + 开水. Động từ đi kèm: 烧开水 (đun nước), 倒开水 (rót nước), 喝开水. Chú ý: 开水 ≠ "nước khai" — 开 ở đây là "sôi" (水开了 = nước sôi rồi).',
   collo:['一壶开水','一杯开水','一瓶开水','凉开水'],
   ex_zh:'能到大树下歇一歇，喝口凉开水，吃个冰激凌，那一定是件美事。',ex_py:'Néng dào dà shù xià xiē yi xiē, hē kǒu liáng kāishuǐ, chī ge bīngjīlíng, nà yídìng shì jiàn měishì.',ex_vn:'Được ra gốc cây nghỉ một chút, uống ngụm nước đun sôi để nguội, ăn một cây kem, thì hẳn là chuyện thú vị.',
   exList:[
     {zh:'能到大树下歇一歇，喝口凉开水，吃个冰激凌，那一定是件美事。',py:'Néng dào dà shù xià xiē yi xiē, hē kǒu liáng kāishuǐ, chī ge bīngjīlíng, nà yídìng shì jiàn měishì.',vn:'Được ra gốc cây nghỉ một chút, uống ngụm nước đun sôi để nguội, ăn một cây kem, thì hẳn là chuyện thú vị.'},
     {zh:'妈妈烧了一壶开水，给我们泡茶。',py:'Māma shāole yì hú kāishuǐ, gěi wǒmen pào chá.',vn:'Mẹ đun một ấm nước sôi pha trà cho chúng tôi.'},
     {zh:'感冒的时候，要多喝点儿开水，多休息。',py:'Gǎnmào de shíhou, yào duō hē diǎnr kāishuǐ, duō xiūxi.',vn:'Khi bị cảm, phải uống nhiều nước đun sôi, nghỉ ngơi nhiều.'}
   ],
   colloFull:[
     {zh:'一壶开水',py:'yì hú kāishuǐ',vn:'một ấm nước sôi'},
     {zh:'一杯开水',py:'yì bēi kāishuǐ',vn:'một cốc nước sôi'},
     {zh:'一瓶开水',py:'yì píng kāishuǐ',vn:'một phích nước sôi'},
     {zh:'凉开水',py:'liáng kāishuǐ',vn:'nước đun sôi để nguội'},
     {zh:'烧开水',py:'shāo kāishuǐ',vn:'đun nước sôi'}
   ],
   patterns:[
     {s:'一壶 / 一杯 / 一瓶 + 开水',m:'Một ấm / cốc / phích nước sôi'},
     {s:'烧 / 倒 / 喝 + 开水',m:'Đun / rót / uống nước sôi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy đã uống hết sạch ấm nước sôi mẹ đun.',answer:'他把妈妈烧的那壶开水都喝完了。',answerPy:'Tā bǎ māma shāo de nà hú kāishuǐ dōu hēwán le.',
      note:'Câu 把: 把 + 那壶开水 + 喝完了 — tân ngữ xác định, động từ có bổ ngữ kết quả.',pair:'把'},
     {promptLang:'vi',prompt:'Đá bóng xong, cậu ấy mệt đến mức ngay cả cốc nước sôi cũng không muốn rót.',answer:'踢完球，他累得连一杯开水都不想倒。',answerPy:'Tīwán qiú, tā lèi de lián yì bēi kāishuǐ dōu bù xiǎng dào.',
      note:'连……都……: nhấn mạnh việc nhỏ nhất cũng không làm.',pair:'连……都……'}
   ]},

  {n:4,zh:'冰激凌',py:'bīngjīlíng',pos:'Danh từ',vn:'kem (ăn)',hv:'băng kích lăng',em:'🍦',lesson:1,
   explain:['Món kem lạnh làm từ sữa, đường… — từ phiên âm tiếng Anh "ice cream" (冰 = băng + 激凌 phiên âm).','Còn viết 冰淇淋 (bīngqílín). Lượng từ: 一个 / 一支 / 一盒 / 一个球.'],
   usage:'吃冰激凌, 买冰激凌, 一个 / 一盒 / 一支冰激凌. Sách bài tập (nghe câu 1) khuyên sau khi vận động không nên ăn kem: 可别吃冰激凌什么的.',
   collo:['吃冰激凌','一盒冰激凌','巧克力冰激凌','买个冰激凌'],
   ex_zh:'喝口凉开水，吃个冰激凌，放松放松肌肉，那一定是件美事。',ex_py:'Hē kǒu liáng kāishuǐ, chī ge bīngjīlíng, fàngsōng fàngsōng jīròu, nà yídìng shì jiàn měishì.',ex_vn:'Uống ngụm nước đun sôi để nguội, ăn một cây kem, thả lỏng cơ bắp, thì hẳn là một chuyện thú vị.',
   exList:[
     {zh:'喝口凉开水，吃个冰激凌，放松放松肌肉，那一定是件美事。',py:'Hē kǒu liáng kāishuǐ, chī ge bīngjīlíng, fàngsōng fàngsōng jīròu, nà yídìng shì jiàn měishì.',vn:'Uống ngụm nước đun sôi để nguội, ăn một cây kem, thả lỏng cơ bắp, thì hẳn là một chuyện thú vị.'},
     {zh:'喝点儿温开水，可别吃冰激凌什么的。',py:'Hē diǎnr wēn kāishuǐ, kě bié chī bīngjīlíng shénme de.',vn:'Uống chút nước ấm đi, đừng có ăn kem hay gì đó nhé.'},
     {zh:'妹妹最爱吃巧克力冰激凌，一次能吃两个。',py:'Mèimei zuì ài chī qiǎokèlì bīngjīlíng, yí cì néng chī liǎng ge.',vn:'Em gái thích nhất kem sô-cô-la, một lần ăn được hai cây.'}
   ],
   colloFull:[
     {zh:'吃冰激凌',py:'chī bīngjīlíng',vn:'ăn kem'},
     {zh:'一盒冰激凌',py:'yì hé bīngjīlíng',vn:'một hộp kem'},
     {zh:'巧克力冰激凌',py:'qiǎokèlì bīngjīlíng',vn:'kem sô-cô-la'},
     {zh:'买个冰激凌',py:'mǎi ge bīngjīlíng',vn:'mua một cây kem'}
   ],
   patterns:[
     {s:'吃 / 买 + (一)个 + 冰激凌',m:'Ăn / mua một cây kem'},
     {s:'别吃冰激凌什么的',m:'Đừng ăn kem hay những thứ tương tự'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng ăn loại kem ngon như thế này.',answer:'我从来没吃过这么好吃的冰激凌。',answerPy:'Wǒ cónglái méi chīguo zhème hǎochī de bīngjīlíng.',
      note:'从来没 + V + 过: chưa từng bao giờ. Không dùng 从来不 cho trải nghiệm trong quá khứ.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Cây kem của em gái bị con chó nhà mình ăn mất rồi.',answer:'妹妹的冰激凌被我们家的狗吃了。',answerPy:'Mèimei de bīngjīlíng bèi wǒmen jiā de gǒu chī le.',
      note:'Câu 被: vật chịu tác động (冰激凌) đứng đầu, 被 + tác nhân + V + 了.',pair:'被'}
   ]},

  {n:5,zh:'肌肉',py:'jīròu',pos:'Danh từ',vn:'bắp thịt, cơ bắp',hv:'cơ nhục',em:'💪',lesson:1,
   explain:['Mô cơ trong cơ thể người và động vật, co giãn giúp cơ thể cử động.','Thường nói về vận động, thể thao: 放松肌肉, 锻炼肌肉, 肌肉发达, 肌肉酸痛.'],
   usage:'放松 / 锻炼 / 拉伤 + 肌肉; 肌肉 + 发达 / 酸痛 / 紧张. Chỉ thịt để ăn thì dùng 肉, không dùng 肌肉.',
   collo:['放松肌肉','锻炼肌肉','肌肉发达','肌肉酸痛'],
   ex_zh:'吃个冰激凌，放松放松肌肉，缓解一下疲劳，可以很快恢复活力。',ex_py:'Chī ge bīngjīlíng, fàngsōng fàngsōng jīròu, huǎnjiě yíxià píláo, kěyǐ hěn kuài huīfù huólì.',ex_vn:'Ăn một cây kem, thả lỏng cơ bắp, giảm bớt mệt mỏi, có thể nhanh chóng lấy lại sức sống.',
   exList:[
     {zh:'吃个冰激凌，放松放松肌肉，缓解一下疲劳，可以很快恢复活力。',py:'Chī ge bīngjīlíng, fàngsōng fàngsōng jīròu, huǎnjiě yíxià píláo, kěyǐ hěn kuài huīfù huólì.',vn:'Ăn một cây kem, thả lỏng cơ bắp, giảm bớt mệt mỏi, có thể nhanh chóng lấy lại sức sống.'},
     {zh:'运动以前不做准备活动，很容易拉伤肌肉。',py:'Yùndòng yǐqián bú zuò zhǔnbèi huódòng, hěn róngyì lāshāng jīròu.',vn:'Trước khi vận động mà không khởi động thì rất dễ bị căng cơ.'},
     {zh:'哥哥每天去健身房，肌肉越来越发达了。',py:'Gēge měi tiān qù jiànshēnfáng, jīròu yuè lái yuè fādá le.',vn:'Anh trai ngày nào cũng đến phòng gym, cơ bắp ngày càng săn chắc.'}
   ],
   colloFull:[
     {zh:'放松肌肉',py:'fàngsōng jīròu',vn:'thả lỏng cơ bắp'},
     {zh:'锻炼肌肉',py:'duànliàn jīròu',vn:'rèn luyện cơ bắp'},
     {zh:'肌肉发达',py:'jīròu fādá',vn:'cơ bắp phát triển, vạm vỡ'},
     {zh:'肌肉酸痛',py:'jīròu suāntòng',vn:'cơ bắp đau nhức'},
     {zh:'拉伤肌肉',py:'lāshāng jīròu',vn:'bị căng cơ'}
   ],
   patterns:[
     {s:'放松 / 锻炼 / 拉伤 + 肌肉',m:'Thả lỏng / rèn luyện / làm căng cơ'},
     {s:'肌肉 + 发达 / 酸痛',m:'Cơ bắp vạm vỡ / đau nhức'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chạy bộ không những có thể rèn luyện cơ bắp mà còn giúp giảm căng thẳng.',answer:'跑步不仅可以锻炼肌肉，也能缓解压力。',answerPy:'Pǎobù bùjǐn kěyǐ duànliàn jīròu, yě néng huǎnjiě yālì.',
      note:'不仅……也……: tăng tiến. 锻炼肌肉 là kết hợp thường gặp.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Sau trận đấu, huấn luyện viên bảo mọi người thả lỏng cơ bắp.',answer:'比赛结束以后，教练让大家把肌肉放松一下。',answerPy:'Bǐsài jiéshù yǐhòu, jiàoliàn ràng dàjiā bǎ jīròu fàngsōng yíxià.',
      note:'把 + 肌肉 + 放松一下: câu 把 với động từ có 一下 phía sau.',pair:'把'}
   ]},

  {n:6,zh:'恢复',py:'huīfù',pos:'Động từ',vn:'hồi phục, khôi phục, lấy lại',hv:'khôi phục',em:'🔋',lesson:1,
   explain:['Trở lại trạng thái ban đầu (sức khoẻ, tinh thần, trật tự…): 身体恢复了, 恢复健康.','Làm cho trở lại như cũ, lấy lại cái đã mất: 恢复活力, 恢复秩序, 恢复联系.'],
   usage:'Bảng 词语搭配: 恢复 + 过来 / 得很快. Tân ngữ: 恢复健康 / 活力 / 体力 / 秩序 / 联系 / 正常. Chủ ngữ là người bệnh: 她恢复得怎么样? (sách bài tập nghe câu 3).',
   collo:['恢复过来','恢复得很快','恢复活力','恢复健康'],
   ex_zh:'缓解一下疲劳，那一定是件美事，可以很快恢复活力。',ex_py:'Huǎnjiě yíxià píláo, nà yídìng shì jiàn měishì, kěyǐ hěn kuài huīfù huólì.',ex_vn:'Giảm bớt mệt mỏi, thì hẳn là chuyện thú vị, có thể nhanh chóng lấy lại sức sống.',
   exList:[
     {zh:'缓解一下疲劳，那一定是件美事，可以很快恢复活力。',py:'Huǎnjiě yíxià píláo, nà yídìng shì jiàn měishì, kěyǐ hěn kuài huīfù huólì.',vn:'Giảm bớt mệt mỏi, thì hẳn là chuyện thú vị, có thể nhanh chóng lấy lại sức sống.'},
     {zh:'你昨天去看小兰了？她恢复得怎么样？',py:'Nǐ zuótiān qù kàn Xiǎolán le? Tā huīfù de zěnmeyàng?',vn:'Hôm qua cậu đi thăm Tiểu Lan à? Bạn ấy hồi phục thế nào rồi?'},
     {zh:'年轻人身体好，生病以后恢复得很快。',py:'Niánqīngrén shēntǐ hǎo, shēngbìng yǐhòu huīfù de hěn kuài.',vn:'Người trẻ khoẻ mạnh, ốm dậy hồi phục rất nhanh.'}
   ],
   colloFull:[
     {zh:'恢复过来',py:'huīfù guolai',vn:'hồi phục lại'},
     {zh:'恢复得很快',py:'huīfù de hěn kuài',vn:'hồi phục rất nhanh'},
     {zh:'恢复活力',py:'huīfù huólì',vn:'lấy lại sức sống'},
     {zh:'恢复健康',py:'huīfù jiànkāng',vn:'hồi phục sức khoẻ'},
     {zh:'恢复秩序',py:'huīfù zhìxù',vn:'khôi phục trật tự'}
   ],
   patterns:[
     {s:'恢复 + 过来 / 得很快',m:'Hồi phục lại / hồi phục rất nhanh'},
     {s:'恢复 + 健康 / 活力 / 秩序 / 联系',m:'Lấy lại sức khoẻ / sức sống / trật tự / liên lạc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi phẫu thuật, sức khoẻ của ông ngày càng hồi phục tốt.',answer:'做完手术以后，爷爷的身体恢复得越来越好了。',answerPy:'Zuòwán shǒushù yǐhòu, yéye de shēntǐ huīfù de yuè lái yuè hǎo le.',
      note:'Bổ ngữ trạng thái: 恢复 + 得 + 越来越好.',pair:'越来越'},
     {promptLang:'vi',prompt:'Cậu ấy là nghỉ cả một ngày mới hồi phục lại được đấy.',answer:'他是休息了一整天才恢复过来的。',answerPy:'Tā shì xiūxile yì zhěng tiān cái huīfù guolai de.',
      note:'恢复过来 (bảng 词语搭配); 是……的 nhấn mạnh cách thức / quá trình đã xảy ra; 才 nhấn mạnh muộn, khó khăn.',pair:'是……的'}
   ]},

  {n:7,zh:'湿润',py:'shīrùn',pos:'Tính từ',vn:'ẩm ướt, ẩm, ướt át (dễ chịu)',hv:'thấp nhuận',em:'💧',lesson:1,
   explain:['Có độ ẩm vừa phải, không khô — thường mang nghĩa tích cực, dễ chịu: 空气湿润, 气候湿润.','Còn tả mắt ngấn nước: 眼睛湿润了 (rơm rớm nước mắt).'],
   usage:'空气 / 气候 / 土地 / 皮肤 + 湿润; 湿润的空气. Khác 湿 (ướt, thường là trạng thái cụ thể: 衣服湿了) — 湿润 nói về độ ẩm vừa phải, văn viết hơn.',
   collo:['空气湿润','气候湿润','湿润的土地','眼睛湿润了'],
   ex_zh:'我们之所以能在大树下享受这种湿润荫凉，也是因为大树在“出汗”呢！',ex_py:'Wǒmen zhīsuǒyǐ néng zài dà shù xià xiǎngshòu zhè zhǒng shīrùn yìnliáng, yě shì yīnwèi dà shù zài "chū hàn" ne!',ex_vn:'Sở dĩ chúng ta được tận hưởng không khí ẩm mát, râm mát dưới gốc cây lớn cũng là vì cây đang "đổ mồ hôi" đấy!',
   exList:[
     {zh:'我们之所以能在大树下享受这种湿润荫凉，也是因为大树在“出汗”呢！',py:'Wǒmen zhīsuǒyǐ néng zài dà shù xià xiǎngshòu zhè zhǒng shīrùn yìnliáng, yě shì yīnwèi dà shù zài "chū hàn" ne!',vn:'Sở dĩ chúng ta được tận hưởng không khí ẩm mát, râm mát dưới gốc cây lớn cũng là vì cây đang "đổ mồ hôi" đấy!'},
     {zh:'南方的气候比较湿润，北方比较干燥。',py:'Nánfāng de qìhòu bǐjiào shīrùn, běifāng bǐjiào gānzào.',vn:'Khí hậu miền Nam khá ẩm, miền Bắc khá khô.'},
     {zh:'听完这个故事，妈妈的眼睛湿润了。',py:'Tīngwán zhège gùshi, māma de yǎnjing shīrùn le.',vn:'Nghe xong câu chuyện này, mắt mẹ rơm rớm nước.'}
   ],
   colloFull:[
     {zh:'空气湿润',py:'kōngqì shīrùn',vn:'không khí ẩm'},
     {zh:'气候湿润',py:'qìhòu shīrùn',vn:'khí hậu ẩm'},
     {zh:'湿润的土地',py:'shīrùn de tǔdì',vn:'đất ẩm'},
     {zh:'眼睛湿润了',py:'yǎnjing shīrùn le',vn:'mắt rơm rớm nước'},
     {zh:'保持皮肤湿润',py:'bǎochí pífū shīrùn',vn:'giữ ẩm cho da'}
   ],
   patterns:[
     {s:'空气 / 气候 / 土地 + 湿润',m:'Không khí / khí hậu / đất ẩm'},
     {s:'保持 + N + 湿润',m:'Giữ cho … ẩm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy không khí ở đây rất ẩm, nhưng mùa đông khá lạnh.',answer:'虽然这儿的空气很湿润，但是冬天比较冷。',answerPy:'Suīrán zhèr de kōngqì hěn shīrùn, dànshì dōngtiān bǐjiào lěng.',
      note:'湿润 làm vị ngữ với 很. 虽然……但是……: nhượng bộ — chuyển ý.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Sở dĩ khí hậu ở đây ẩm là vì gần biển.',answer:'这儿的气候之所以湿润，是因为离海很近。',answerPy:'Zhèr de qìhòu zhīsuǒyǐ shīrùn, shì yīnwèi lí hǎi hěn jìn.',
      note:'之所以……，是因为……: nêu kết quả trước, nguyên nhân sau (cấu trúc của bài khoá).',pair:'之所以……是因为……'}
   ]},

  {n:8,zh:'荫凉',py:'yìnliáng',pos:'Tính từ',vn:'râm mát',hv:'ấm lương',em:'🌳',lesson:1,
   explain:['Được bóng cây, bóng râm che nên mát mẻ, không bị nắng chiếu.','Còn dùng như danh từ chỉ chỗ râm mát: 找个荫凉 (tìm chỗ râm); cũng viết 阴凉 (yīnliáng).'],
   usage:'荫凉的地方, 树下很荫凉, 湿润荫凉 (bài khoá). Văn viết, hay đi với 大树 / 树下. Khẩu ngữ hay nói 凉快.',
   collo:['荫凉的地方','树下很荫凉','湿润荫凉','找个荫凉处'],
   ex_zh:'我们之所以能在大树下享受这种湿润荫凉，也是因为大树在“出汗”呢！',ex_py:'Wǒmen zhīsuǒyǐ néng zài dà shù xià xiǎngshòu zhè zhǒng shīrùn yìnliáng, yě shì yīnwèi dà shù zài "chū hàn" ne!',ex_vn:'Sở dĩ chúng ta được tận hưởng không khí ẩm mát, râm mát dưới gốc cây lớn cũng là vì cây đang "đổ mồ hôi" đấy!',
   exList:[
     {zh:'我们之所以能在大树下享受这种湿润荫凉，也是因为大树在“出汗”呢！',py:'Wǒmen zhīsuǒyǐ néng zài dà shù xià xiǎngshòu zhè zhǒng shīrùn yìnliáng, yě shì yīnwèi dà shù zài "chū hàn" ne!',vn:'Sở dĩ chúng ta được tận hưởng không khí ẩm mát, râm mát dưới gốc cây lớn cũng là vì cây đang "đổ mồ hôi" đấy!'},
     {zh:'太阳太晒了，我们找个荫凉的地方坐一会儿吧。',py:'Tàiyáng tài shài le, wǒmen zhǎo ge yìnliáng de dìfang zuò yíhuìr ba.',vn:'Nắng gắt quá, mình tìm chỗ râm mát ngồi một lát đi.'},
     {zh:'学校门口那棵老树下特别荫凉，放学后同学们都喜欢在那儿聊天。',py:'Xuéxiào ménkǒu nà kē lǎo shù xià tèbié yìnliáng, fàngxué hòu tóngxuémen dōu xǐhuan zài nàr liáotiān.',vn:'Dưới gốc cây cổ thụ ở cổng trường rất râm mát, tan học các bạn đều thích tán gẫu ở đó.'}
   ],
   colloFull:[
     {zh:'荫凉的地方',py:'yìnliáng de dìfang',vn:'chỗ râm mát'},
     {zh:'树下很荫凉',py:'shù xià hěn yìnliáng',vn:'dưới gốc cây rất mát'},
     {zh:'湿润荫凉',py:'shīrùn yìnliáng',vn:'ẩm mát, râm mát'},
     {zh:'找个荫凉处',py:'zhǎo ge yìnliáng chù',vn:'tìm một chỗ râm'}
   ],
   patterns:[
     {s:'荫凉 + 的 + 地方 / 树下',m:'Chỗ râm mát'},
     {s:'(大树下) + 很 / 特别 + 荫凉',m:'(Dưới gốc cây) rất râm mát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần tìm được chỗ râm mát là chúng ta sẽ đỡ nóng ngay.',answer:'只要找到一个荫凉的地方，我们就不会那么热了。',answerPy:'Zhǐyào zhǎodào yí ge yìnliáng de dìfang, wǒmen jiù bú huì nàme rè le.',
      note:'荫凉的地方 làm tân ngữ. 只要……就……: điều kiện đủ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Chúng tôi vừa ngồi xuống dưới gốc cây râm mát thì trời bắt đầu mưa.',answer:'我们一在荫凉的大树下坐下，就开始下雨了。',answerPy:'Wǒmen yí zài yìnliáng de dà shù xià zuòxia, jiù kāishǐ xià yǔ le.',
      note:'一……就……: hai việc xảy ra liền nhau.',pair:'一……就……'}
   ]},

  {n:9,zh:'指挥',py:'zhǐhuī',pos:'Động từ',vn:'chỉ huy, điều khiển, ra lệnh',hv:'chỉ huy',em:'👮',lesson:1,
   explain:['Ra lệnh, điều động người hoặc sự vật hành động theo ý mình: 指挥军队, 指挥交通.','Nghĩa bóng: một bộ phận điều khiển bộ phận khác — 大脑指挥身体 (bài khoá). Còn là danh từ: người chỉ huy dàn nhạc (乐队指挥).'],
   usage:'Bảng 词语搭配: 指挥 + 士兵 / 军队. Thường gặp: 指挥交通, 听指挥 (nghe theo chỉ huy), 指挥 + người + V (kiêm ngữ: 指挥身体出汗). Ảnh 热身 1 của sách: cảnh sát chỉ huy giao thông.',
   collo:['指挥士兵','指挥军队','指挥交通','听指挥'],
   ex_zh:'一旦温度上升，大脑就会指挥我们的身体赶快出汗。',ex_py:'Yídàn wēndù shàngshēng, dànǎo jiù huì zhǐhuī wǒmen de shēntǐ gǎnkuài chū hàn.',ex_vn:'Một khi nhiệt độ tăng lên, não sẽ ra lệnh cho cơ thể chúng ta mau chóng đổ mồ hôi.',
   exList:[
     {zh:'一旦温度上升，大脑就会指挥我们的身体赶快出汗。',py:'Yídàn wēndù shàngshēng, dànǎo jiù huì zhǐhuī wǒmen de shēntǐ gǎnkuài chū hàn.',vn:'Một khi nhiệt độ tăng lên, não sẽ ra lệnh cho cơ thể chúng ta mau chóng đổ mồ hôi.'},
     {zh:'老师，保证一切行动听指挥！',py:'Lǎoshī, bǎozhèng yíqiè xíngdòng tīng zhǐhuī!',vn:'Thưa thầy, bọn em đảm bảo mọi hành động đều nghe theo chỉ huy ạ!'},
     {zh:'早上八点，警察站在路口指挥交通。',py:'Zǎoshang bā diǎn, jǐngchá zhàn zài lùkǒu zhǐhuī jiāotōng.',vn:'Tám giờ sáng, cảnh sát đứng ở ngã tư điều khiển giao thông.'}
   ],
   colloFull:[
     {zh:'指挥士兵',py:'zhǐhuī shìbīng',vn:'chỉ huy binh lính'},
     {zh:'指挥军队',py:'zhǐhuī jūnduì',vn:'chỉ huy quân đội'},
     {zh:'指挥交通',py:'zhǐhuī jiāotōng',vn:'điều khiển giao thông'},
     {zh:'听指挥',py:'tīng zhǐhuī',vn:'nghe theo chỉ huy'},
     {zh:'乐队指挥',py:'yuèduì zhǐhuī',vn:'nhạc trưởng'}
   ],
   patterns:[
     {s:'指挥 + 士兵 / 军队 / 交通',m:'Chỉ huy binh lính / quân đội / điều khiển giao thông'},
     {s:'A + 指挥 + B + V',m:'A ra lệnh cho B làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiến sĩ đó đã được cử đi điều khiển giao thông.',answer:'那位战士被派去指挥交通了。',answerPy:'Nà wèi zhànshì bèi pàiqù zhǐhuī jiāotōng le.',
      note:'Câu 被 không có tác nhân: 被派去 + mục đích 指挥交通.',pair:'被'},
     {promptLang:'vi',prompt:'Hễ trời nóng lên là não sẽ ra lệnh cho cơ thể đổ mồ hôi.',answer:'天气一热，大脑就会指挥身体出汗。',answerPy:'Tiānqì yí rè, dànǎo jiù huì zhǐhuī shēntǐ chū hàn.',
      note:'一……就……: điều kiện vừa xuất hiện là có kết quả. 指挥 + 身体 + 出汗 (kiêm ngữ).',pair:'一……就……'}
   ]},

  {n:10,zh:'赶快',py:'gǎnkuài',pos:'Phó từ',vn:'mau, nhanh lên, vội',hv:'cản khoái',em:'🏃',lesson:1,
   explain:['Nắm chặt thời gian, đẩy nhanh tốc độ (抓紧时间、加快速度) — thường vì sắp muộn hoặc tình huống gấp.','Đứng TRƯỚC động từ; hay dùng trong câu cầu khiến, thúc giục: 你赶快……吧 / 得赶快…….'],
   usage:'赶快 + V: 赶快走, 赶快出汗, 赶快把……复印一下. Không đặt sau động từ (✗ 走赶快), không làm bổ ngữ (✗ 跑得赶快 → 跑得很快). Không dùng cho việc đã xảy ra với nghĩa "nhanh chóng" miêu tả (✗ 他赶快地吃完了 → dùng 很快).',
   collo:['赶快走','赶快回家','赶快出汗','赶快找房子'],
   ex_zh:'一旦温度上升，大脑就会指挥我们的身体赶快出汗。',ex_py:'Yídàn wēndù shàngshēng, dànǎo jiù huì zhǐhuī wǒmen de shēntǐ gǎnkuài chū hàn.',ex_vn:'Một khi nhiệt độ tăng lên, não sẽ ra lệnh cho cơ thể chúng ta mau chóng đổ mồ hôi.',
   exList:[
     {zh:'我下个月要搬家，得赶快找房子。',py:'Wǒ xià ge yuè yào bānjiā, děi gǎnkuài zhǎo fángzi.',vn:'Tháng sau tôi phải chuyển nhà, phải mau chóng tìm nhà thôi.'},
     {zh:'这份材料下午开会要用，你赶快把它复印一下。',py:'Zhè fèn cáiliào xiàwǔ kāihuì yào yòng, nǐ gǎnkuài bǎ tā fùyìn yíxià.',vn:'Tài liệu này chiều họp phải dùng, cậu mau đi photo nó đi.'},
     {zh:'一旦温度上升，大脑就会指挥我们的身体赶快出汗。',py:'Yídàn wēndù shàngshēng, dànǎo jiù huì zhǐhuī wǒmen de shēntǐ gǎnkuài chū hàn.',vn:'Một khi nhiệt độ tăng lên, não sẽ ra lệnh cho cơ thể chúng ta mau chóng đổ mồ hôi.'}
   ],
   colloFull:[
     {zh:'赶快走',py:'gǎnkuài zǒu',vn:'mau đi thôi'},
     {zh:'赶快回家',py:'gǎnkuài huí jiā',vn:'mau về nhà'},
     {zh:'赶快出汗',py:'gǎnkuài chū hàn',vn:'mau chóng đổ mồ hôi'},
     {zh:'赶快找房子',py:'gǎnkuài zhǎo fángzi',vn:'mau tìm nhà'},
     {zh:'赶快出发',py:'gǎnkuài chūfā',vn:'mau xuất phát'}
   ],
   patterns:[
     {s:'(S) + 赶快 + V (+ 吧)',m:'Mau … đi (thúc giục)'},
     {s:'得 / 要 + 赶快 + V',m:'Phải mau chóng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sắp đến giờ rồi, cậu mau thu dọn đồ đạc đi.',answer:'快到时间了，你赶快把东西收拾好吧。',answerPy:'Kuài dào shíjiān le, nǐ gǎnkuài bǎ dōngxi shōushi hǎo ba.',
      note:'赶快 đứng TRƯỚC 把: 赶快把东西收拾好. Không nói 把东西赶快收拾好 trong lời thúc giục thông thường.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần mau đi bệnh viện là sẽ không có vấn đề gì lớn.',answer:'只要赶快去医院，就不会有什么大问题。',answerPy:'Zhǐyào gǎnkuài qù yīyuàn, jiù bú huì yǒu shénme dà wèntí.',
      note:'赶快 + V đứng sau 只要.',pair:'只要……就……'}
   ]},

  {n:11,zh:'汗腺',py:'hànxiàn',pos:'Danh từ',vn:'tuyến mồ hôi',hv:'hãn tuyến',em:'💦',lesson:1,
   explain:['Tuyến nằm dưới da tiết ra mồ hôi, giúp cơ thể điều hoà nhiệt độ.','Từ chuyên môn (sinh học, y học); 汗 = mồ hôi, 腺 = tuyến.'],
   usage:'汗腺开始工作, 汗腺发达, 汗腺分泌汗水. Ít dùng trong khẩu ngữ hằng ngày, chủ yếu trong bài khoa học.',
   collo:['汗腺开始工作','汗腺发达','所有汗腺','汗腺分泌汗水'],
   ex_zh:'这时所有汗腺开始工作，汗水就从毛孔里冒了出来。',ex_py:'Zhè shí suǒyǒu hànxiàn kāishǐ gōngzuò, hànshuǐ jiù cóng máokǒng li màole chulai.',ex_vn:'Lúc này mọi tuyến mồ hôi bắt đầu làm việc, mồ hôi liền từ lỗ chân lông toát ra.',
   exList:[
     {zh:'这时所有汗腺开始工作，汗水就从毛孔里冒了出来。',py:'Zhè shí suǒyǒu hànxiàn kāishǐ gōngzuò, hànshuǐ jiù cóng máokǒng li màole chulai.',vn:'Lúc này mọi tuyến mồ hôi bắt đầu làm việc, mồ hôi liền từ lỗ chân lông toát ra.'},
     {zh:'狗的汗腺很少，所以热的时候它们靠伸舌头来降温。',py:'Gǒu de hànxiàn hěn shǎo, suǒyǐ rè de shíhou tāmen kào shēn shétou lái jiàngwēn.',vn:'Chó có rất ít tuyến mồ hôi, nên khi nóng chúng thè lưỡi để hạ nhiệt.'},
     {zh:'有的人汗腺比较发达，稍微一动就出汗。',py:'Yǒude rén hànxiàn bǐjiào fādá, shāowēi yí dòng jiù chū hàn.',vn:'Có người tuyến mồ hôi khá phát triển, hơi cử động một chút là ra mồ hôi.'}
   ],
   colloFull:[
     {zh:'汗腺开始工作',py:'hànxiàn kāishǐ gōngzuò',vn:'tuyến mồ hôi bắt đầu làm việc'},
     {zh:'汗腺发达',py:'hànxiàn fādá',vn:'tuyến mồ hôi phát triển'},
     {zh:'所有汗腺',py:'suǒyǒu hànxiàn',vn:'tất cả tuyến mồ hôi'},
     {zh:'汗腺分泌汗水',py:'hànxiàn fēnmì hànshuǐ',vn:'tuyến mồ hôi tiết ra mồ hôi'}
   ],
   patterns:[
     {s:'汗腺 + 开始工作 / 分泌汗水',m:'Tuyến mồ hôi bắt đầu hoạt động / tiết mồ hôi'},
     {s:'汗腺 + (比较) + 发达',m:'Tuyến mồ hôi (khá) phát triển'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hễ nhiệt độ tăng lên là tuyến mồ hôi sẽ bắt đầu làm việc.',answer:'温度一升高，汗腺就开始工作了。',answerPy:'Wēndù yì shēnggāo, hànxiàn jiù kāishǐ gōngzuò le.',
      note:'一……就……: điều kiện xuất hiện là kết quả xảy ra ngay.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Chó không những ít tuyến mồ hôi mà còn rất sợ nóng.',answer:'狗不仅汗腺少，也很怕热。',answerPy:'Gǒu bùjǐn hànxiàn shǎo, yě hěn pà rè.',
      note:'不仅……也……: nêu thêm một đặc điểm.',pair:'不仅……也……'}
   ]},

  {n:12,zh:'毛孔',py:'máokǒng',pos:'Danh từ',vn:'lỗ chân lông',hv:'mao khổng',em:'🔬',lesson:1,
   explain:['Những lỗ rất nhỏ trên da, nơi lông mọc ra và mồ hôi thoát ra.','毛 = lông, 孔 = lỗ. Hay gặp trong bài khoa học và quảng cáo mỹ phẩm: 毛孔粗大, 清洁毛孔.'],
   usage:'从毛孔里冒出来, 毛孔张开 / 收缩, 毛孔粗大. Đừng nhầm với 气孔 (khí khổng — lỗ thở trên lá cây, cũng có trong bài).',
   collo:['从毛孔里冒出来','毛孔张开','毛孔粗大','清洁毛孔'],
   ex_zh:'这时所有汗腺开始工作，汗水就从毛孔里冒了出来。',ex_py:'Zhè shí suǒyǒu hànxiàn kāishǐ gōngzuò, hànshuǐ jiù cóng máokǒng li màole chulai.',ex_vn:'Lúc này mọi tuyến mồ hôi bắt đầu làm việc, mồ hôi liền từ lỗ chân lông toát ra.',
   exList:[
     {zh:'这时所有汗腺开始工作，汗水就从毛孔里冒了出来。',py:'Zhè shí suǒyǒu hànxiàn kāishǐ gōngzuò, hànshuǐ jiù cóng máokǒng li màole chulai.',vn:'Lúc này mọi tuyến mồ hôi bắt đầu làm việc, mồ hôi liền từ lỗ chân lông toát ra.'},
     {zh:'洗热水澡的时候，毛孔会张开。',py:'Xǐ rèshuǐzǎo de shíhou, máokǒng huì zhāngkāi.',vn:'Khi tắm nước nóng, lỗ chân lông sẽ nở ra.'},
     {zh:'天冷的时候毛孔会收缩，所以我们不太出汗。',py:'Tiān lěng de shíhou máokǒng huì shōusuō, suǒyǐ wǒmen bú tài chū hàn.',vn:'Khi trời lạnh lỗ chân lông co lại, nên chúng ta ít ra mồ hôi.'}
   ],
   colloFull:[
     {zh:'从毛孔里冒出来',py:'cóng máokǒng li mào chulai',vn:'toát ra từ lỗ chân lông'},
     {zh:'毛孔张开',py:'máokǒng zhāngkāi',vn:'lỗ chân lông nở ra'},
     {zh:'毛孔粗大',py:'máokǒng cūdà',vn:'lỗ chân lông to'},
     {zh:'清洁毛孔',py:'qīngjié máokǒng',vn:'làm sạch lỗ chân lông'},
     {zh:'毛孔收缩',py:'máokǒng shōusuō',vn:'lỗ chân lông co lại'}
   ],
   patterns:[
     {s:'从 + 毛孔(里) + 冒出来',m:'Toát ra từ lỗ chân lông'},
     {s:'毛孔 + 张开 / 收缩',m:'Lỗ chân lông nở ra / co lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mồ hôi được toát ra từ lỗ chân lông.',answer:'汗水是从毛孔里冒出来的。',answerPy:'Hànshuǐ shì cóng máokǒng li mào chulai de.',
      note:'是……的 nhấn mạnh nơi chốn (从毛孔里).',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy lỗ chân lông rất nhỏ, nhưng tác dụng của chúng rất lớn.',answer:'虽然毛孔很小，但是它们的作用很大。',answerPy:'Suīrán máokǒng hěn xiǎo, dànshì tāmen de zuòyòng hěn dà.',
      note:'虽然……但是……: nhượng bộ — chuyển ý.',pair:'虽然……但是……'}
   ]},

  {n:13,zh:'冒',py:'mào',pos:'Động từ',vn:'bốc lên, toát ra, phả ra; bất chấp',hv:'mạo',em:'💨',lesson:1,
   explain:['(Khí, hơi, mồ hôi, khói…) từ bên trong bốc ra, trào ra ngoài: 冒汗, 冒烟, 冒热气, 冒出来.','Còn có nghĩa bất chấp (nguy hiểm, mưa gió): 冒雨, 冒着危险; và mạo danh (冒充 — ít gặp ở cấp này).'],
   usage:'冒 + 汗 / 烟 / 热气 / 泡; (从……里) 冒出来. Nghĩa "bất chấp": 冒 + 雨 / 雪 / 危险, thường có 着: 冒着大雨去上学.',
   collo:['冒汗','冒烟','冒出来','冒着大雨'],
   ex_zh:'大树出的“汗”，通常是从叶片的气孔里冒出来的。',ex_py:'Dà shù chū de "hàn", tōngcháng shì cóng yèpiàn de qìkǒng li mào chulai de.',ex_vn:'"Mồ hôi" của cây lớn thường toát ra từ khí khổng trên phiến lá.',
   exList:[
     {zh:'大树出的“汗”，通常是从叶片的气孔里冒出来的。',py:'Dà shù chū de "hàn", tōngcháng shì cóng yèpiàn de qìkǒng li mào chulai de.',vn:'"Mồ hôi" của cây lớn thường toát ra từ khí khổng trên phiến lá.'},
     {zh:'刚做好的包子还冒着热气呢，快趁热吃吧。',py:'Gāng zuòhǎo de bāozi hái màozhe rèqì ne, kuài chèn rè chī ba.',vn:'Bánh bao vừa làm xong còn bốc hơi nóng kìa, ăn nóng đi.'},
     {zh:'为了不迟到，他冒着大雨骑车去学校。',py:'Wèile bù chídào, tā màozhe dà yǔ qí chē qù xuéxiào.',vn:'Để không đến muộn, cậu ấy đội mưa to đạp xe đến trường.'}
   ],
   colloFull:[
     {zh:'冒汗',py:'mào hàn',vn:'toát mồ hôi'},
     {zh:'冒烟',py:'mào yān',vn:'bốc khói'},
     {zh:'冒出来',py:'mào chulai',vn:'toát ra, bốc ra'},
     {zh:'冒着大雨',py:'màozhe dà yǔ',vn:'đội mưa to'},
     {zh:'冒热气',py:'mào rèqì',vn:'bốc hơi nóng'}
   ],
   patterns:[
     {s:'(从……里) + 冒出来',m:'Toát ra / bốc ra (từ đâu đó)'},
     {s:'冒着 + 大雨 / 危险 + V',m:'Bất chấp mưa to / nguy hiểm mà làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căng thẳng đến mức ngay cả lòng bàn tay cũng toát mồ hôi.',answer:'他紧张得连手心都冒汗了。',answerPy:'Tā jǐnzhāng de lián shǒuxīn dōu mào hàn le.',
      note:'连……都……: nhấn mạnh mức độ. 冒汗 = toát mồ hôi.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cậu ấy là đội mưa to đến đây đấy.',answer:'他是冒着大雨来的。',answerPy:'Tā shì màozhe dà yǔ lái de.',
      note:'是……的 nhấn mạnh cách thức (冒着大雨) của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:14,zh:'片',py:'piàn',pos:'Danh từ / Lượng từ',vn:'tấm, mảnh, lát; (lượng từ) miếng, lát, vùng, tràng',hv:'phiến',em:'🍃',lesson:1,
   explain:['Danh từ: vật phẳng và mỏng, thường không lớn — 碎片 (mảnh vỡ), 叶片 (phiến lá), 照片, 药片.','Lượng từ: dùng cho vật thành miếng mỏng (一片面包 / 药), cho vùng diện tích lớn (一片草地 / 树林 / 天空), và cho âm thanh, cảnh sắc (一片欢呼声).'],
   usage:'Bảng 词语搭配: 一片 + 面包 / 西瓜 / 药 / 草地 / 树林 / 天空 / 欢笑声. Lặp: 一片片 = từng lá một, từng miếng một. Dạng 切成片 = thái lát.',
   collo:['一片面包','一片树林','一片欢笑声','叶片'],
   ex_zh:'大树出的“汗”，通常是从叶片的气孔里冒出来的。',ex_py:'Dà shù chū de "hàn", tōngcháng shì cóng yèpiàn de qìkǒng li mào chulai de.',ex_vn:'"Mồ hôi" của cây lớn thường toát ra từ khí khổng trên phiến lá.',
   exList:[
     {zh:'瓶子里装着满满的石头、玻璃碎片和沙子。',py:'Píngzi li zhuāngzhe mǎnmǎn de shítou, bōli suìpiàn hé shāzi.',vn:'Trong chai đựng đầy đá, mảnh thuỷ tinh vỡ và cát.'},
     {zh:'窗外有一棵大树，秋风中，叶子一片片地掉落下来。',py:'Chuāng wài yǒu yì kē dà shù, qiūfēng zhōng, yèzi yí piànpiàn de diàoluò xialai.',vn:'Ngoài cửa sổ có một cây lớn, trong gió thu, lá rụng xuống từng chiếc từng chiếc.'},
     {zh:'同学们听了，发出一片热烈的欢呼声。',py:'Tóngxuémen tīng le, fāchū yí piàn rèliè de huānhūshēng.',vn:'Các bạn nghe xong, reo hò vang dậy.'}
   ],
   colloFull:[
     {zh:'一片面包',py:'yí piàn miànbāo',vn:'một lát bánh mì'},
     {zh:'一片树林',py:'yí piàn shùlín',vn:'một cánh rừng'},
     {zh:'一片欢笑声',py:'yí piàn huānxiàoshēng',vn:'một tràng cười vui vẻ'},
     {zh:'叶片',py:'yèpiàn',vn:'phiến lá'},
     {zh:'一片药',py:'yí piàn yào',vn:'một viên thuốc (dẹt)'}
   ],
   patterns:[
     {s:'一片 + 面包 / 西瓜 / 药',m:'Một lát / miếng / viên (vật mỏng)'},
     {s:'一片 + 草地 / 树林 / 天空 / 欢笑声',m:'Một vùng / cánh / bầu / tràng (diện tích, âm thanh)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy sáng nay tôi chỉ ăn hai lát bánh mì, nhưng chẳng thấy đói chút nào.',answer:'虽然今天早上我只吃了两片面包，但是一点儿也不饿。',answerPy:'Suīrán jīntiān zǎoshang wǒ zhǐ chīle liǎng piàn miànbāo, dànshì yìdiǎnr yě bú è.',
      note:'片 làm lượng từ cho vật mỏng — bài 练一练 (2) của sách. 虽然……但是……: chuyển ý.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cánh rừng này bị một trận lửa lớn thiêu rụi rồi.',answer:'这片树林被一场大火烧掉了。',answerPy:'Zhè piàn shùlín bèi yì chǎng dà huǒ shāodiào le.',
      note:'片 dùng cho vùng diện tích lớn (树林). Câu 被 có tác nhân 一场大火.',pair:'被'}
   ]},

  {n:15,zh:'常识',py:'chángshí',pos:'Danh từ',vn:'kiến thức thông thường, lẽ thường',hv:'thường thức',em:'💡',lesson:1,
   explain:['Những hiểu biết cơ bản mà người bình thường đều nên có: 生活常识, 科学常识.','Cũng chỉ lẽ thường, điều ai cũng biết: 这是常识 = chuyện ai mà chẳng biết.'],
   usage:'生活 / 科学 / 安全 / 法律 + 常识; 缺乏常识 (thiếu hiểu biết cơ bản), 基本常识. Sách bài tập 书写 31: 植物用根吸收水分是大家都知道的常识.',
   collo:['生活常识','科学常识','缺乏常识','大家都知道的常识'],
   ex_zh:'我们都知道这样的常识——植物的根会吸收养分和水分。',ex_py:'Wǒmen dōu zhīdào zhèyàng de chángshí——zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn.',ex_vn:'Chúng ta đều biết điều thường thức này — rễ cây sẽ hút chất dinh dưỡng và nước.',
   exList:[
     {zh:'我们都知道这样的常识——植物的根会吸收养分和水分。',py:'Wǒmen dōu zhīdào zhèyàng de chángshí——zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn.',vn:'Chúng ta đều biết điều thường thức này — rễ cây sẽ hút chất dinh dưỡng và nước.'},
     {zh:'植物用根吸收水分是大家都知道的常识。',py:'Zhíwù yòng gēn xīshōu shuǐfèn shì dàjiā dōu zhīdào de chángshí.',vn:'Cây dùng rễ để hút nước là điều ai cũng biết.'},
     {zh:'学校每学期都给我们上一节安全常识课。',py:'Xuéxiào měi xuéqī dōu gěi wǒmen shàng yì jié ānquán chángshí kè.',vn:'Học kỳ nào trường cũng cho chúng tôi học một tiết kiến thức an toàn.'}
   ],
   colloFull:[
     {zh:'生活常识',py:'shēnghuó chángshí',vn:'kiến thức đời sống'},
     {zh:'科学常识',py:'kēxué chángshí',vn:'kiến thức khoa học phổ thông'},
     {zh:'缺乏常识',py:'quēfá chángshí',vn:'thiếu hiểu biết cơ bản'},
     {zh:'大家都知道的常识',py:'dàjiā dōu zhīdào de chángshí',vn:'điều ai cũng biết'},
     {zh:'安全常识',py:'ānquán chángshí',vn:'kiến thức an toàn'}
   ],
   patterns:[
     {s:'……是(大家都知道的)常识',m:'… là điều ai cũng biết'},
     {s:'生活 / 科学 / 安全 + 常识',m:'Kiến thức đời sống / khoa học / an toàn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả học sinh tiểu học cũng biết điều thường thức này.',answer:'这个常识连小学生都知道。',answerPy:'Zhège chángshí lián xiǎoxuéshēng dōu zhīdào.',
      note:'连……都……: tân ngữ 这个常识 đưa lên đầu câu làm chủ đề.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Đọc sách không những giúp thêm kiến thức đời sống mà còn giúp mở rộng tầm nhìn.',answer:'读书不仅能增加生活常识，也能开阔眼界。',answerPy:'Dú shū bùjǐn néng zēngjiā shēnghuó chángshí, yě néng kāikuò yǎnjiè.',
      note:'不仅……也……: tăng tiến. 增加 + 常识.',pair:'不仅……也……'}
   ]},

  {n:16,zh:'根',py:'gēn',pos:'Danh từ / Lượng từ',vn:'rễ (cây); gốc rễ; (lượng từ) cây, sợi, chiếc (vật dài)',hv:'căn',em:'🌱',lesson:1,
   explain:['Danh từ: rễ cây — phần nằm dưới đất, hút nước và dinh dưỡng: 树根, 植物的根.','Lượng từ cho vật dài, mảnh: 一根管子 / 绳子 / 头发 / 香蕉. Nghĩa bóng: gốc rễ, nguồn gốc (根源).'],
   usage:'植物的根, 树根, 扎根 (bén rễ). Bảng 词语搭配: 一根 / 支 + 管子. Phần 扩展 của sách xếp 根 vào nhóm từ chủ đề 植物.',
   collo:['植物的根','树根','一根管子','扎根'],
   ex_zh:'我们都知道这样的常识——植物的根会吸收养分和水分。',ex_py:'Wǒmen dōu zhīdào zhèyàng de chángshí——zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn.',ex_vn:'Chúng ta đều biết điều thường thức này — rễ cây sẽ hút chất dinh dưỡng và nước.',
   exList:[
     {zh:'我们都知道这样的常识——植物的根会吸收养分和水分。',py:'Wǒmen dōu zhīdào zhèyàng de chángshí——zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn.',vn:'Chúng ta đều biết điều thường thức này — rễ cây sẽ hút chất dinh dưỡng và nước.'},
     {zh:'仙人掌的根非常发达，一旦下雨就会大量吸收水分。',py:'Xiānrénzhǎng de gēn fēicháng fādá, yídàn xià yǔ jiù huì dàliàng xīshōu shuǐfèn.',vn:'Rễ xương rồng rất phát triển, hễ trời mưa là hút một lượng nước lớn.'},
     {zh:'请帮我拿一根管子来，我要给花浇水。',py:'Qǐng bāng wǒ ná yì gēn guǎnzi lái, wǒ yào gěi huā jiāo shuǐ.',vn:'Lấy giúp mình một cái ống, mình muốn tưới hoa.'}
   ],
   colloFull:[
     {zh:'植物的根',py:'zhíwù de gēn',vn:'rễ cây'},
     {zh:'树根',py:'shùgēn',vn:'rễ cây (cây gỗ)'},
     {zh:'一根管子',py:'yì gēn guǎnzi',vn:'một cái ống'},
     {zh:'扎根',py:'zhāgēn',vn:'bén rễ, cắm rễ'},
     {zh:'一根头发',py:'yì gēn tóufa',vn:'một sợi tóc'}
   ],
   patterns:[
     {s:'植物 / 大树 + 的 + 根',m:'Rễ của cây'},
     {s:'一根 + 管子 / 头发 / 绳子',m:'Một cái ống / sợi tóc / sợi dây (vật dài)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước mà rễ cây hút vào được đưa lên lá.',answer:'树根吸收的水分被送到了叶子上。',answerPy:'Shùgēn xīshōu de shuǐfèn bèi sòngdàole yèzi shang.',
      note:'Câu 被 không có tác nhân: 水分 + 被送到 + nơi chốn.',pair:'被'},
     {promptLang:'vi',prompt:'Rễ cây càng phát triển, cây càng lớn nhanh.',answer:'植物的根越发达，长得就越快。',answerPy:'Zhíwù de gēn yuè fādá, zhǎng de jiù yuè kuài.',
      note:'越……越……: hai mức độ tăng cùng nhau (cấu trúc 玻璃管越细，……就越高 của bài khoá).',pair:'越……越……'}
   ]},

  {n:17,zh:'吸收',py:'xīshōu',pos:'Động từ',vn:'hấp thụ, hút; tiếp thu; kết nạp',hv:'hấp thu',em:'🧽',lesson:1,
   explain:['Vật thể hút lấy chất từ bên ngoài vào bên trong: 根吸收水分, 身体吸收营养.','Nghĩa bóng: tiếp thu (kiến thức, kinh nghiệm có ích) — 吸收新知识; kết nạp (người vào tổ chức) — 吸收新会员.'],
   usage:'Bảng 词语搭配: 有效 / 直接 / 大量 / 完全 + 吸收. Tân ngữ: 水分 / 营养 / 养分 / 知识 / 经验. Phân biệt: 吸取 dùng cho 教训 / 经验 (rút ra bài học) — bài tập 2 của sách.',
   collo:['有效吸收','直接吸收','大量吸收','完全吸收'],
   ex_zh:'植物的根会吸收养分和水分。',ex_py:'Zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn.',ex_vn:'Rễ cây sẽ hút chất dinh dưỡng và nước.',
   exList:[
     {zh:'我们都知道这样的常识——植物的根会吸收养分和水分。',py:'Wǒmen dōu zhīdào zhèyàng de chángshí——zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn.',vn:'Chúng ta đều biết điều thường thức này — rễ cây sẽ hút chất dinh dưỡng và nước.'},
     {zh:'这种药吃了以后，身体能很快地完全吸收。',py:'Zhè zhǒng yào chīle yǐhòu, shēntǐ néng hěn kuài de wánquán xīshōu.',vn:'Loại thuốc này uống xong, cơ thể có thể hấp thụ hoàn toàn rất nhanh.'},
     {zh:'读书的时候，要学会吸收别人的好经验。',py:'Dú shū de shíhou, yào xuéhuì xīshōu biéren de hǎo jīngyàn.',vn:'Khi đọc sách, phải học cách tiếp thu kinh nghiệm hay của người khác.'}
   ],
   colloFull:[
     {zh:'有效吸收',py:'yǒuxiào xīshōu',vn:'hấp thụ hiệu quả'},
     {zh:'直接吸收',py:'zhíjiē xīshōu',vn:'hấp thụ trực tiếp'},
     {zh:'大量吸收',py:'dàliàng xīshōu',vn:'hấp thụ một lượng lớn'},
     {zh:'完全吸收',py:'wánquán xīshōu',vn:'hấp thụ hoàn toàn'},
     {zh:'吸收水分',py:'xīshōu shuǐfèn',vn:'hút nước'}
   ],
   patterns:[
     {s:'有效 / 直接 / 大量 / 完全 + 吸收',m:'Hấp thụ hiệu quả / trực tiếp / nhiều / hoàn toàn'},
     {s:'吸收 + 水分 / 营养 / 知识 / 经验',m:'Hút nước / hấp thụ dinh dưỡng / tiếp thu kiến thức, kinh nghiệm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nước mưa đều bị đất hút hết rồi.',answer:'雨水都被土地吸收了。',answerPy:'Yǔshuǐ dōu bèi tǔdì xīshōu le.',
      note:'Câu 被: 雨水 (vật chịu tác động) + 被 + 土地 + 吸收了.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần ăn uống hợp lý, cơ thể sẽ có thể hấp thụ đủ dinh dưỡng.',answer:'只要饮食合理，身体就能吸收足够的营养。',answerPy:'Zhǐyào yǐnshí hélǐ, shēntǐ jiù néng xīshōu zúgòu de yíngyǎng.',
      note:'吸收 + 营养. 合理 là từ của bài 29 (ôn xoáy ốc).',pair:'只要……就……'}
   ]},

  {n:18,zh:'控制',py:'kòngzhì',pos:'Động từ',vn:'khống chế, kiểm soát, điều khiển',hv:'khống chế',em:'🎛️',lesson:1,
   explain:['Nắm giữ, điều khiển để sự vật không vượt ra khỏi phạm vi nhất định: 控制情绪, 控制体重, 控制速度.','Làm chủ, chi phối: 控制局面, 植物控制这些成分 (bài khoá).'],
   usage:'控制 + 情绪 / 体重 / 时间 / 速度 / 数量; 控制住 / 控制不住; 失去控制. Phân biệt 限制 (hạn chế, đặt giới hạn: 限制人数 / 时间) — bài tập 2 của sách: 控制一下你的情绪.',
   collo:['控制情绪','控制体重','控制不住','控制时间'],
   ex_zh:'植物是怎么控制这些成分，把它们运输到十几米甚至上百米的树梢的呢？',ex_py:'Zhíwù shì zěnme kòngzhì zhèxiē chéngfèn, bǎ tāmen yùnshū dào shíjǐ mǐ shènzhì shàng bǎi mǐ de shùshāo de ne?',ex_vn:'Cây cối làm thế nào điều khiển những thành phần này, đưa chúng lên tận ngọn cây cao mười mấy mét, thậm chí hàng trăm mét?',
   exList:[
     {zh:'植物是怎么控制这些成分，把它们运输到十几米甚至上百米的树梢的呢？',py:'Zhíwù shì zěnme kòngzhì zhèxiē chéngfèn, bǎ tāmen yùnshū dào shíjǐ mǐ shènzhì shàng bǎi mǐ de shùshāo de ne?',vn:'Cây cối làm thế nào điều khiển những thành phần này, đưa chúng lên tận ngọn cây cao mười mấy mét, thậm chí hàng trăm mét?'},
     {zh:'孩子还小呢，你要控制一下自己的情绪，别吓着他。',py:'Háizi hái xiǎo ne, nǐ yào kòngzhì yíxià zìjǐ de qíngxù, bié xiàzhe tā.',vn:'Con còn nhỏ, chị phải kiềm chế cảm xúc một chút, đừng làm nó sợ.'},
     {zh:'为了控制体重，她每天晚上只吃一点儿水果。',py:'Wèile kòngzhì tǐzhòng, tā měi tiān wǎnshang zhǐ chī yìdiǎnr shuǐguǒ.',vn:'Để kiểm soát cân nặng, tối nào cô ấy cũng chỉ ăn chút hoa quả.'}
   ],
   colloFull:[
     {zh:'控制情绪',py:'kòngzhì qíngxù',vn:'kiềm chế cảm xúc'},
     {zh:'控制体重',py:'kòngzhì tǐzhòng',vn:'kiểm soát cân nặng'},
     {zh:'控制不住',py:'kòngzhì bu zhù',vn:'không kiềm chế được'},
     {zh:'控制时间',py:'kòngzhì shíjiān',vn:'kiểm soát thời gian'},
     {zh:'失去控制',py:'shīqù kòngzhì',vn:'mất kiểm soát'}
   ],
   patterns:[
     {s:'控制 + 情绪 / 体重 / 时间 / 速度',m:'Kiềm chế cảm xúc / kiểm soát cân nặng, thời gian, tốc độ'},
     {s:'控制得住 / 控制不住',m:'Kiềm chế được / không kiềm chế được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy tức đến mức ngay cả cảm xúc của mình cũng không kiềm chế nổi.',answer:'他气得连自己的情绪都控制不住了。',answerPy:'Tā qì de lián zìjǐ de qíngxù dōu kòngzhì bu zhù le.',
      note:'控制不住 (bổ ngữ khả năng phủ định) + 连……都…….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Phải kiểm soát thời gian chơi điện thoại, nếu không thị lực sẽ ngày càng kém.',answer:'要控制玩手机的时间，不然视力会越来越差。',answerPy:'Yào kòngzhì wán shǒujī de shíjiān, bùrán shìlì huì yuè lái yuè chà.',
      note:'控制 + 时间. 越来越 + tính từ.',pair:'越来越'}
   ]},

  {n:19,zh:'成分',py:'chéngfèn',pos:'Danh từ',vn:'thành phần',hv:'thành phần',em:'🧪',lesson:1,
   explain:['Các chất, các bộ phận cấu thành nên một vật: 营养成分, 化学成分, 药的成分.','Trong bài khoá chỉ các chất dinh dưỡng và nước mà rễ hút vào.'],
   usage:'营养 / 化学 / 主要 + 成分; 含有……成分. Chú ý: 分 đọc fèn (thanh 4) trong 成分, 水分, 养分 — không đọc fēn.',
   collo:['营养成分','化学成分','主要成分','含有……成分'],
   ex_zh:'植物是怎么控制这些成分，把它们运输到树梢的呢？',ex_py:'Zhíwù shì zěnme kòngzhì zhèxiē chéngfèn, bǎ tāmen yùnshū dào shùshāo de ne?',ex_vn:'Cây cối làm thế nào điều khiển những thành phần này, đưa chúng lên tận ngọn cây?',
   exList:[
     {zh:'植物是怎么控制这些成分，把它们运输到十几米甚至上百米的树梢的呢？',py:'Zhíwù shì zěnme kòngzhì zhèxiē chéngfèn, bǎ tāmen yùnshū dào shíjǐ mǐ shènzhì shàng bǎi mǐ de shùshāo de ne?',vn:'Cây cối làm thế nào điều khiển những thành phần này, đưa chúng lên tận ngọn cây cao mười mấy mét, thậm chí hàng trăm mét?'},
     {zh:'买饮料的时候，我会先看看它的营养成分。',py:'Mǎi yǐnliào de shíhou, wǒ huì xiān kànkan tā de yíngyǎng chéngfèn.',vn:'Khi mua đồ uống, tôi sẽ xem thành phần dinh dưỡng của nó trước.'},
     {zh:'这种药的主要成分是从植物里提取的。',py:'Zhè zhǒng yào de zhǔyào chéngfèn shì cóng zhíwù li tíqǔ de.',vn:'Thành phần chính của loại thuốc này được chiết xuất từ thực vật.'}
   ],
   colloFull:[
     {zh:'营养成分',py:'yíngyǎng chéngfèn',vn:'thành phần dinh dưỡng'},
     {zh:'化学成分',py:'huàxué chéngfèn',vn:'thành phần hoá học'},
     {zh:'主要成分',py:'zhǔyào chéngfèn',vn:'thành phần chính'},
     {zh:'含有……成分',py:'hányǒu …… chéngfèn',vn:'có chứa thành phần …'}
   ],
   patterns:[
     {s:'营养 / 化学 / 主要 + 成分',m:'Thành phần dinh dưỡng / hoá học / chính'},
     {s:'N + 含有 + ……成分',m:'… có chứa thành phần …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thành phần chính của loại thuốc này là được chiết xuất từ lá cây.',answer:'这种药的主要成分是从树叶里提取的。',answerPy:'Zhè zhǒng yào de zhǔyào chéngfèn shì cóng shùyè li tíqǔ de.',
      note:'是……的 nhấn mạnh nguồn gốc (从树叶里).',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy loại nước ngọt này rất ngon, nhưng thành phần đường quá nhiều.',answer:'虽然这种饮料很好喝，但是糖的成分太多了。',answerPy:'Suīrán zhè zhǒng yǐnliào hěn hǎohē, dànshì táng de chéngfèn tài duō le.',
      note:'成分 làm chủ ngữ. 虽然……但是……: chuyển ý.',pair:'虽然……但是……'}
   ]},

  {n:20,zh:'梢',py:'shāo',pos:'Danh từ',vn:'ngọn (cây), đầu mút (vật dài)',hv:'sao',em:'🌲',lesson:1,
   explain:['Phần đầu nhỏ, trên cùng của vật dài: 树梢 (ngọn cây), 眉梢 (đuôi lông mày), 辫梢 (đuôi tóc bím).','Thường dùng trong từ ghép, hiếm khi đứng một mình.'],
   usage:'树梢 là cách dùng thường gặp nhất. 爬到树梢, 挂在树梢上. Phân biệt 顶端 (đỉnh, đầu trên cùng — dùng rộng hơn).',
   collo:['树梢','爬到树梢','挂在树梢上','眉梢'],
   ex_zh:'把它们运输到十几米甚至上百米的树梢的呢？',ex_py:'Bǎ tāmen yùnshū dào shíjǐ mǐ shènzhì shàng bǎi mǐ de shùshāo de ne?',ex_vn:'Đưa chúng lên tận ngọn cây cao mười mấy mét, thậm chí hàng trăm mét?',
   exList:[
     {zh:'植物是怎么控制这些成分，把它们运输到十几米甚至上百米的树梢的呢？',py:'Zhíwù shì zěnme kòngzhì zhèxiē chéngfèn, bǎ tāmen yùnshū dào shíjǐ mǐ shènzhì shàng bǎi mǐ de shùshāo de ne?',vn:'Cây cối làm thế nào điều khiển những thành phần này, đưa chúng lên tận ngọn cây cao mười mấy mét, thậm chí hàng trăm mét?'},
     {zh:'一只小鸟站在树梢上唱歌。',py:'Yì zhī xiǎo niǎo zhàn zài shùshāo shang chàng gē.',vn:'Một chú chim nhỏ đậu trên ngọn cây hót líu lo.'},
     {zh:'月亮慢慢爬上了树梢。',py:'Yuèliang mànmàn páshàngle shùshāo.',vn:'Mặt trăng từ từ nhô lên khỏi ngọn cây.'}
   ],
   colloFull:[
     {zh:'树梢',py:'shùshāo',vn:'ngọn cây'},
     {zh:'爬到树梢',py:'pádào shùshāo',vn:'leo lên ngọn cây'},
     {zh:'挂在树梢上',py:'guà zài shùshāo shang',vn:'treo trên ngọn cây'},
     {zh:'眉梢',py:'méishāo',vn:'đuôi lông mày'}
   ],
   patterns:[
     {s:'(V) + 到 / 在 + 树梢(上)',m:'(Làm gì) lên / ở trên ngọn cây'},
     {s:'树梢 / 眉梢',m:'Ngọn cây / đuôi lông mày'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con mèo vừa thấy chó là liền leo lên ngọn cây.',answer:'小猫一看见狗，就爬到了树梢上。',answerPy:'Xiǎo māo yí kànjiàn gǒu, jiù pádàole shùshāo shang.',
      note:'一……就……; 爬到 + 树梢上 (bổ ngữ nơi chốn).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Diều của em trai bị gió thổi lên ngọn cây rồi.',answer:'弟弟的风筝被风吹到树梢上了。',answerPy:'Dìdi de fēngzheng bèi fēng chuīdào shùshāo shang le.',
      note:'Câu 被 + bổ ngữ nơi chốn 到树梢上.',pair:'被'}
   ]},

  {n:21,zh:'管子',py:'guǎnzi',pos:'Danh từ',vn:'ống, ống dẫn',hv:'quản tử',em:'🥤',lesson:1,
   explain:['Vật hình trụ rỗng ruột, dài, dùng để dẫn chất lỏng hoặc khí: 水管子, 玻璃管子.','Dạng rút gọn trong từ ghép: 管 — 玻璃管, 管道 (đường ống).'],
   usage:'Bảng 词语搭配: 一根 / 支 + 管子. 细管子 / 粗管子; 顺着管子 (dọc theo ống). Ảnh 热身 1 (2) của sách: ống nghiệm thuỷ tinh.',
   collo:['一根管子','一支管子','很细的管子','顺着管子'],
   ex_zh:'所谓“毛细作用”，简单来说，就是水会顺着很细很细的管子向上“爬”。',ex_py:'Suǒwèi "máoxì zuòyòng", jiǎndān lái shuō, jiù shì shuǐ huì shùnzhe hěn xì hěn xì de guǎnzi xiàng shàng "pá".',ex_vn:'Cái gọi là "hiện tượng mao dẫn", nói đơn giản, là nước sẽ "bò" lên theo những ống rất rất nhỏ.',
   exList:[
     {zh:'所谓“毛细作用”，简单来说，就是水会顺着很细很细的管子向上“爬”。',py:'Suǒwèi "máoxì zuòyòng", jiǎndān lái shuō, jiù shì shuǐ huì shùnzhe hěn xì hěn xì de guǎnzi xiàng shàng "pá".',vn:'Cái gọi là "hiện tượng mao dẫn", nói đơn giản, là nước sẽ "bò" lên theo những ống rất rất nhỏ.'},
     {zh:'厨房的水管子坏了，水流得满地都是。',py:'Chúfáng de shuǐ guǎnzi huài le, shuǐ liú de mǎn dì dōu shì.',vn:'Ống nước trong bếp hỏng rồi, nước chảy lênh láng khắp sàn.'},
     {zh:'老师拿出一根细细的玻璃管子，给我们做了一个实验。',py:'Lǎoshī náchū yì gēn xìxì de bōli guǎnzi, gěi wǒmen zuòle yí ge shíyàn.',vn:'Cô giáo lấy ra một ống thuỷ tinh nhỏ xíu, làm một thí nghiệm cho chúng tôi xem.'}
   ],
   colloFull:[
     {zh:'一根管子',py:'yì gēn guǎnzi',vn:'một cái ống'},
     {zh:'一支管子',py:'yì zhī guǎnzi',vn:'một cái ống'},
     {zh:'很细的管子',py:'hěn xì de guǎnzi',vn:'ống rất nhỏ'},
     {zh:'顺着管子',py:'shùnzhe guǎnzi',vn:'dọc theo ống'},
     {zh:'水管子',py:'shuǐ guǎnzi',vn:'ống nước'}
   ],
   patterns:[
     {s:'一根 / 一支 + 管子',m:'Một cái ống'},
     {s:'顺着 + 管子 + V',m:'Theo ống mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ống nước bị em trai làm hỏng rồi.',answer:'水管子被弟弟弄坏了。',answerPy:'Shuǐ guǎnzi bèi dìdi nònghuài le.',
      note:'被 + tác nhân + V + bổ ngữ kết quả 坏.',pair:'被'},
     {promptLang:'vi',prompt:'Ống càng nhỏ, nước leo lên càng cao.',answer:'管子越细，水爬得越高。',answerPy:'Guǎnzi yuè xì, shuǐ pá de yuè gāo.',
      note:'越……越……: cấu trúc của bài khoá (玻璃管越细，水爬升的高度就越高).',pair:'越……越……'}
   ]},

  {n:22,zh:'玻璃',py:'bōli',pos:'Danh từ',vn:'thuỷ tinh, kính',hv:'pha lê',em:'🪟',lesson:1,
   explain:['Vật liệu trong suốt, cứng, giòn, dễ vỡ, dùng làm cửa kính, cốc, chai…: 玻璃杯, 玻璃窗.','Âm Hán Việt "pha lê" — nhưng tiếng Trung 玻璃 chỉ thuỷ tinh / kính thông thường; "pha lê" cao cấp là 水晶.'],
   usage:'Bảng 词语搭配: 一块 + 玻璃. 玻璃杯 / 玻璃窗 / 玻璃管 / 玻璃碎片; 打碎玻璃. Chú ý 璃 đọc thanh nhẹ: bōli.',
   collo:['一块玻璃','玻璃管','玻璃窗','玻璃碎片'],
   ex_zh:'我们在家可以用一个比较细的玻璃管体验一下。',ex_py:'Wǒmen zài jiā kěyǐ yòng yí ge bǐjiào xì de bōliguǎn tǐyàn yíxià.',ex_vn:'Ở nhà chúng ta có thể dùng một ống thuỷ tinh khá nhỏ để thử nghiệm.',
   exList:[
     {zh:'我们在家可以用一个比较细的玻璃管体验一下。玻璃管越细，水爬升的高度就越高。',py:'Wǒmen zài jiā kěyǐ yòng yí ge bǐjiào xì de bōliguǎn tǐyàn yíxià. Bōliguǎn yuè xì, shuǐ páshēng de gāodù jiù yuè gāo.',vn:'Ở nhà chúng ta có thể dùng một ống thuỷ tinh khá nhỏ để thử. Ống thuỷ tinh càng nhỏ, nước leo lên càng cao.'},
     {zh:'瓶子里装着满满的石头、玻璃碎片和沙子。',py:'Píngzi li zhuāngzhe mǎnmǎn de shítou, bōli suìpiàn hé shāzi.',vn:'Trong chai đựng đầy đá, mảnh thuỷ tinh vỡ và cát.'},
     {zh:'踢球的时候，他不小心把教室的一块玻璃打碎了。',py:'Tī qiú de shíhou, tā bù xiǎoxīn bǎ jiàoshì de yí kuài bōli dǎsuì le.',vn:'Lúc đá bóng, cậu ấy không cẩn thận làm vỡ một tấm kính của lớp học.'}
   ],
   colloFull:[
     {zh:'一块玻璃',py:'yí kuài bōli',vn:'một tấm kính'},
     {zh:'玻璃管',py:'bōliguǎn',vn:'ống thuỷ tinh'},
     {zh:'玻璃窗',py:'bōlichuāng',vn:'cửa kính'},
     {zh:'玻璃碎片',py:'bōli suìpiàn',vn:'mảnh thuỷ tinh vỡ'},
     {zh:'玻璃杯',py:'bōlibēi',vn:'cốc thuỷ tinh'}
   ],
   patterns:[
     {s:'一块 + 玻璃',m:'Một tấm kính'},
     {s:'玻璃 + 杯 / 窗 / 管',m:'Cốc / cửa / ống thuỷ tinh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy không cẩn thận làm vỡ tấm kính cửa sổ.',answer:'他不小心把窗户上的玻璃打碎了。',answerPy:'Tā bù xiǎoxīn bǎ chuānghu shang de bōli dǎsuì le.',
      note:'把 + 玻璃 + 打碎了: câu 把 với bổ ngữ kết quả.',pair:'把'},
     {promptLang:'vi',prompt:'Tấm kính này là bị ai làm vỡ?',answer:'这块玻璃是被谁打碎的？',answerPy:'Zhè kuài bōli shì bèi shéi dǎsuì de?',
      note:'是……的 + 被: hỏi tác nhân của việc đã xảy ra. Lượng từ 块 (bảng 词语搭配).',pair:'是……的'}
   ]},

  {n:23,zh:'测验',py:'cèyàn',pos:'Động từ / Danh từ',vn:'kiểm tra, trắc nghiệm, đo thử',hv:'trắc nghiệm',em:'📝',lesson:1,
   explain:['Dùng dụng cụ hoặc phương pháp nhất định để kiểm tra, đo thử: 经过测验计算发现…….','Danh từ: bài kiểm tra (thường nhỏ hơn 考试) — 数学测验, 心理测验, 小测验.'],
   usage:'进行 + 测验; 心理 / 数学 / 小 + 测验; 测验 + 结果. Bài tập 1 của sách: 进行一项心理测验. Sách bài tập nghe câu 9: 你这次测验怎么样?',
   collo:['进行测验','心理测验','小测验','测验结果'],
   ex_zh:'经过测验计算发现，毛细作用根本无法把水分送到几十米高的地方。',ex_py:'Jīngguò cèyàn jìsuàn fāxiàn, máoxì zuòyòng gēnběn wúfǎ bǎ shuǐfèn sòngdào jǐshí mǐ gāo de dìfang.',ex_vn:'Qua đo đạc tính toán thì phát hiện, hiện tượng mao dẫn hoàn toàn không thể đưa nước lên nơi cao mấy chục mét.',
   exList:[
     {zh:'经过测验计算发现，以大树输送管道的尺寸产生的毛细作用，根本无法把水分送到几十米高的地方。',py:'Jīngguò cèyàn jìsuàn fāxiàn, yǐ dà shù shūsòng guǎndào de chǐcùn chǎnshēng de máoxì zuòyòng, gēnběn wúfǎ bǎ shuǐfèn sòngdào jǐshí mǐ gāo de dìfang.',vn:'Qua đo đạc tính toán thì phát hiện, hiện tượng mao dẫn sinh ra với kích cỡ đường ống vận chuyển của cây lớn hoàn toàn không thể đưa nước lên nơi cao mấy chục mét.'},
     {zh:'一位心理学家找来两个7岁的孩子进行一项心理测验。',py:'Yí wèi xīnlǐxuéjiā zhǎolái liǎng ge qī suì de háizi jìnxíng yí xiàng xīnlǐ cèyàn.',vn:'Một nhà tâm lý học tìm hai đứa trẻ 7 tuổi để tiến hành một bài trắc nghiệm tâm lý.'},
     {zh:'你这次测验怎么样？——不太好，很多题我都没复习。',py:'Nǐ zhè cì cèyàn zěnmeyàng? —— Bú tài hǎo, hěn duō tí wǒ dōu méi fùxí.',vn:'Bài kiểm tra lần này cậu làm thế nào? — Không tốt lắm, nhiều câu tớ chưa ôn.'}
   ],
   colloFull:[
     {zh:'进行测验',py:'jìnxíng cèyàn',vn:'tiến hành kiểm tra'},
     {zh:'心理测验',py:'xīnlǐ cèyàn',vn:'trắc nghiệm tâm lý'},
     {zh:'小测验',py:'xiǎo cèyàn',vn:'bài kiểm tra nhỏ'},
     {zh:'测验结果',py:'cèyàn jiéguǒ',vn:'kết quả kiểm tra'},
     {zh:'数学测验',py:'shùxué cèyàn',vn:'bài kiểm tra toán'}
   ],
   patterns:[
     {s:'进行 + (一项) + 测验',m:'Tiến hành (một cuộc) kiểm tra'},
     {s:'经过测验 + 发现……',m:'Qua kiểm tra thì phát hiện …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lần kiểm tra này tôi thi không tốt, vì chưa từng ôn phần từ mới bổ sung.',answer:'这次测验我考得不好，因为我从来没复习过补充生词。',answerPy:'Zhè cì cèyàn wǒ kǎo de bù hǎo, yīnwèi wǒ cónglái méi fùxíguo bǔchōng shēngcí.',
      note:'从来没……过: chưa từng. Nội dung lấy từ câu nghe 9 của sách bài tập.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Hễ có bài kiểm tra là em trai lại căng thẳng.',answer:'弟弟一有测验就紧张。',answerPy:'Dìdi yì yǒu cèyàn jiù jǐnzhāng.',
      note:'一……就……: hễ … là ….',pair:'一……就……'}
   ]},

  {n:24,zh:'根本',py:'gēnběn',pos:'Phó từ / Danh từ / Tính từ',vn:'hoàn toàn (không), căn bản, tuyệt nhiên; gốc rễ; cơ bản',hv:'căn bản',em:'🚫',lesson:1,
   explain:['Phó từ (nghĩa trong bảng 生词): từ đầu đến cuối, hoàn toàn — hay dùng trong câu PHỦ ĐỊNH: 根本不知道, 根本无法. Còn nghĩa triệt để: 根本解决了.','Danh từ: phần quan trọng nhất, gốc rễ (从根本上解决问题); tính từ: chủ yếu, quyết định (根本的问题, 根本利益).'],
   usage:'Phó từ: 根本 + 不 / 没 / 无法 + V (đứng trước từ phủ định). 根本就是 = rõ ràng là. Danh từ: 从根本上. Tính từ: 根本 + 的 + N. Phân biệt 基本 (cơ bản, đại thể: 基本完成 = gần xong).',
   collo:['根本不知道','根本无法','从根本上','根本的问题'],
   ex_zh:'经过测验计算发现，毛细作用根本无法把水分送到几十米高的地方。',ex_py:'Jīngguò cèyàn jìsuàn fāxiàn, máoxì zuòyòng gēnběn wúfǎ bǎ shuǐfèn sòngdào jǐshí mǐ gāo de dìfang.',ex_vn:'Qua đo đạc tính toán thì phát hiện, hiện tượng mao dẫn hoàn toàn không thể đưa nước lên nơi cao mấy chục mét.',
   exList:[
     {zh:'有时候我会梦见参加考试，可是却发现自己根本读不懂考试的题目。',py:'Yǒu shíhou wǒ huì mèngjiàn cānjiā kǎoshì, kěshì què fāxiàn zìjǐ gēnběn dú bu dǒng kǎoshì de tímù.',vn:'Có lúc tôi mơ thấy đi thi, nhưng lại thấy mình hoàn toàn không đọc hiểu đề thi.'},
     {zh:'这个办法只能救急，不能从根本上解决问题。',py:'Zhège bànfǎ zhǐ néng jiùjí, bù néng cóng gēnběn shang jiějué wèntí.',vn:'Cách này chỉ cứu vãn tạm thời, không thể giải quyết vấn đề từ gốc rễ.'},
     {zh:'胡说！我根本不认识他。',py:'Húshuō! Wǒ gēnběn bú rènshi tā.',vn:'Nói bậy! Tớ hoàn toàn không quen anh ta.'}
   ],
   colloFull:[
     {zh:'根本不知道',py:'gēnběn bù zhīdào',vn:'hoàn toàn không biết'},
     {zh:'根本无法',py:'gēnběn wúfǎ',vn:'hoàn toàn không thể'},
     {zh:'从根本上',py:'cóng gēnběn shang',vn:'từ gốc rễ'},
     {zh:'根本的问题',py:'gēnběn de wèntí',vn:'vấn đề căn bản'},
     {zh:'根本利益',py:'gēnběn lìyì',vn:'lợi ích căn bản'}
   ],
   patterns:[
     {s:'根本 + 不 / 没 / 无法 + V',m:'Hoàn toàn không …'},
     {s:'从根本上 + 解决 / 改变……',m:'Giải quyết / thay đổi … từ gốc rễ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi hoàn toàn chưa từng gặp người này.',answer:'我根本没见过这个人。',answerPy:'Wǒ gēnběn méi jiànguo zhège rén.',
      note:'根本 đứng TRƯỚC 没: 根本没 + V + 过. Không nói 没根本见过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chữ cậu ấy viết xấu đến mức ngay cả chính cậu ấy cũng hoàn toàn không đọc được.',answer:'他写的字连他自己都根本看不懂。',answerPy:'Tā xiě de zì lián tā zìjǐ dōu gēnběn kàn bu dǒng.',
      note:'连……都…… + 根本 + bổ ngữ khả năng phủ định.',pair:'连……都……'}
   ]},

  {n:25,zh:'枝干',py:'zhīgàn',pos:'Danh từ',vn:'cành và thân cây, cành cây',hv:'chi cán',em:'🌿',lesson:1,
   explain:['Cành (枝) và thân (干) của cây nói chung — phần gỗ trên mặt đất nâng đỡ lá.','Văn viết, hay gặp trong bài khoa học, văn miêu tả; khẩu ngữ nói 树枝 (cành cây), 树干 (thân cây).'],
   usage:'枝干顶端 (đầu ngọn cành), 粗壮的枝干, 树木的枝干. Chữ 干 ở đây đọc gàn (thân, cốt), không đọc gān (khô).',
   collo:['枝干顶端','粗壮的枝干','树木的枝干','枝干上的叶子'],
   ex_zh:'实际上，大树利用的是枝干顶端的那些叶片。',ex_py:'Shíjìshang, dà shù lìyòng de shì zhīgàn dǐngduān de nàxiē yèpiàn.',ex_vn:'Thực ra, cái mà cây lớn tận dụng là những phiến lá ở đầu ngọn cành.',
   exList:[
     {zh:'实际上，大树利用的是枝干顶端的那些叶片。',py:'Shíjìshang, dà shù lìyòng de shì zhīgàn dǐngduān de nàxiē yèpiàn.',vn:'Thực ra, cái mà cây lớn tận dụng là những phiến lá ở đầu ngọn cành.'},
     {zh:'这棵老树的枝干非常粗壮，三个人才能抱住。',py:'Zhè kē lǎo shù de zhīgàn fēicháng cūzhuàng, sān ge rén cái néng bàozhù.',vn:'Thân cành của cây cổ thụ này rất to khoẻ, ba người mới ôm xuể.'},
     {zh:'冬天叶子都掉光了，只剩下光秃秃的枝干。',py:'Dōngtiān yèzi dōu diàoguāng le, zhǐ shèngxia guāngtūtū de zhīgàn.',vn:'Mùa đông lá rụng hết, chỉ còn trơ lại cành cây trụi lủi.'}
   ],
   colloFull:[
     {zh:'枝干顶端',py:'zhīgàn dǐngduān',vn:'đầu ngọn cành'},
     {zh:'粗壮的枝干',py:'cūzhuàng de zhīgàn',vn:'thân cành to khoẻ'},
     {zh:'树木的枝干',py:'shùmù de zhīgàn',vn:'cành cây'},
     {zh:'枝干上的叶子',py:'zhīgàn shang de yèzi',vn:'lá trên cành'}
   ],
   patterns:[
     {s:'枝干 + 顶端 / 上',m:'Đầu ngọn / trên cành cây'},
     {s:'(树的)枝干 + 很 + 粗壮',m:'Cành cây rất to khoẻ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cành cây bị trận gió lớn tối qua thổi gãy rồi.',answer:'树的枝干被昨晚的大风吹断了。',answerPy:'Shù de zhīgàn bèi zuówǎn de dà fēng chuīduàn le.',
      note:'Câu 被 + bổ ngữ kết quả 断.',pair:'被'},
     {promptLang:'vi',prompt:'Cây này không những thân cành to khoẻ mà lá cũng rất nhiều.',answer:'这棵树不仅枝干粗壮，叶子也很多。',answerPy:'Zhè kē shù bùjǐn zhīgàn cūzhuàng, yèzi yě hěn duō.',
      note:'不仅……也……: nêu hai đặc điểm.',pair:'不仅……也……'}
   ]},

  {n:26,zh:'释放',py:'shìfàng',pos:'Động từ',vn:'thả ra, phóng thích; toả ra, giải phóng (năng lượng, khí)',hv:'thích phóng',em:'🌬️',lesson:1,
   explain:['Thả người đang bị giam giữ ra: 释放犯人 (phóng thích tù nhân).','Toả ra, giải phóng vật chất hoặc năng lượng chứa bên trong: 释放水汽, 释放氧气, 释放能量; nghĩa bóng: 释放压力 (giải toả áp lực).'],
   usage:'向……释放 + 水汽 / 氧气 / 热量; 释放压力. Phần 运用 của sách: 植物……释放出氧气. Văn viết, khoa học.',
   collo:['释放水汽','释放氧气','释放压力','释放能量'],
   ex_zh:'叶子通过不停地向空气中释放水汽，迫使树干中的水分自动前来补充。',ex_py:'Yèzi tōngguò bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng.',ex_vn:'Lá cây không ngừng toả hơi nước vào không khí, buộc nước trong thân cây tự động kéo lên bổ sung.',
   exList:[
     {zh:'叶子通过不停地向空气中释放水汽，迫使树干中的水分自动前来补充。',py:'Yèzi tōngguò bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng.',vn:'Lá cây không ngừng toả hơi nước vào không khí, buộc nước trong thân cây tự động kéo lên bổ sung.'},
     {zh:'植物利用光合作用，释放出氧气。',py:'Zhíwù lìyòng guānghé zuòyòng, shìfàng chū yǎngqì.',vn:'Thực vật nhờ quang hợp mà giải phóng ra khí ô-xy.'},
     {zh:'考试结束了，同学们去唱歌释放压力。',py:'Kǎoshì jiéshù le, tóngxuémen qù chàng gē shìfàng yālì.',vn:'Thi xong rồi, các bạn đi hát để xả áp lực.'}
   ],
   colloFull:[
     {zh:'释放水汽',py:'shìfàng shuǐqì',vn:'toả hơi nước'},
     {zh:'释放氧气',py:'shìfàng yǎngqì',vn:'giải phóng khí ô-xy'},
     {zh:'释放压力',py:'shìfàng yālì',vn:'giải toả áp lực'},
     {zh:'释放能量',py:'shìfàng néngliàng',vn:'giải phóng năng lượng'},
     {zh:'释放犯人',py:'shìfàng fànrén',vn:'phóng thích tù nhân'}
   ],
   patterns:[
     {s:'(向……) + 释放 + 水汽 / 氧气 / 能量',m:'Toả / giải phóng … (vào đâu)'},
     {s:'释放 + 压力',m:'Giải toả áp lực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần có ánh nắng, lá cây sẽ giải phóng ra khí ô-xy.',answer:'只要有阳光，叶子就会释放出氧气。',answerPy:'Zhǐyào yǒu yángguāng, yèzi jiù huì shìfàng chū yǎngqì.',
      note:'释放出 + 氧气. 只要……就……: điều kiện đủ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy áp lực học tập rất lớn, nhưng cậu ấy luôn biết cách giải toả áp lực.',answer:'虽然学习压力很大，但是他总是知道怎么释放压力。',answerPy:'Suīrán xuéxí yālì hěn dà, dànshì tā zǒngshì zhīdào zěnme shìfàng yālì.',
      note:'释放压力: nghĩa bóng "xả áp lực".',pair:'虽然……但是……'}
   ]},

  {n:27,zh:'自动',py:'zìdòng',pos:'Phó từ / Tính từ',vn:'tự động; tự (không cần tác động bên ngoài)',hv:'tự động',em:'🤖',lesson:1,
   explain:['Phó từ: tự mình hành động, không cần sức bên ngoài thúc đẩy: 水分自动前来补充, 门自动打开.','Tính từ (tự động hoá): máy móc tự vận hành, không cần người điều khiển — 自动售货机, 自动取票机, 全自动.'],
   usage:'Bảng 词语搭配: 自动 + 离开 / 辞职 / 打开 / 燃烧. Định ngữ: 自动 + 售货机 / 取票机 / 门. Phân biệt 主动 (chủ động — người tự giác làm vì ý muốn của mình): 他主动提出 (bài tập 2 của sách).',
   collo:['自动离开','自动辞职','自动打开','自动燃烧'],
   ex_zh:'叶子通过不停地向空气中释放水汽，迫使树干中的水分自动前来补充。',ex_py:'Yèzi tōngguò bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng.',ex_vn:'Lá cây không ngừng toả hơi nước vào không khí, buộc nước trong thân cây tự động kéo lên bổ sung.',
   exList:[
     {zh:'叶子通过不停地向空气中释放水汽，迫使树干中的水分自动前来补充。',py:'Yèzi tōngguò bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng.',vn:'Lá cây không ngừng toả hơi nước vào không khí, buộc nước trong thân cây tự động kéo lên bổ sung.'},
     {zh:'楼下新装了一台自动售货机。',py:'Lóu xià xīn zhuāngle yì tái zìdòng shòuhuòjī.',vn:'Dưới tầng mới lắp một máy bán hàng tự động.'},
     {zh:'办公室那台新复印机真不错，能自动换纸、自动换页。',py:'Bàngōngshì nà tái xīn fùyìnjī zhēn búcuò, néng zìdòng huàn zhǐ, zìdòng huàn yè.',vn:'Cái máy photo mới ở văn phòng tốt thật, có thể tự động thay giấy, tự động lật trang.'}
   ],
   colloFull:[
     {zh:'自动离开',py:'zìdòng líkāi',vn:'tự rời đi'},
     {zh:'自动辞职',py:'zìdòng cízhí',vn:'tự xin nghỉ việc'},
     {zh:'自动打开',py:'zìdòng dǎkāi',vn:'tự động mở'},
     {zh:'自动燃烧',py:'zìdòng ránshāo',vn:'tự bốc cháy'},
     {zh:'自动售货机',py:'zìdòng shòuhuòjī',vn:'máy bán hàng tự động'}
   ],
   patterns:[
     {s:'自动 + 离开 / 辞职 / 打开 / 燃烧',m:'Tự rời đi / tự nghỉ việc / tự mở / tự cháy'},
     {s:'自动 + 售货机 / 取票机 / 门',m:'Máy bán hàng / máy lấy vé / cửa tự động'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người vừa đến gần là cửa sẽ tự động mở.',answer:'人一走近，门就自动打开了。',answerPy:'Rén yì zǒujìn, mén jiù zìdòng dǎkāi le.',
      note:'自动打开 (bảng 词语搭配). 一……就……: hai việc liền nhau.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Vé tàu có thể lấy ở máy lấy vé tự động bên kia.',answer:'火车票可以在那边的自动取票机上取。',answerPy:'Huǒchēpiào kěyǐ zài nàbiān de zìdòng qǔpiàojī shang qǔ.',
      note:'自动 làm định ngữ: 自动取票机 (câu nghe 10 của sách bài tập). Ôn 是……的: 这张票是在自动取票机上取的.',pair:'是……的'}
   ]},

  {n:28,zh:'补充',py:'bǔchōng',pos:'Động từ',vn:'bổ sung, cung cấp thêm',hv:'bổ sung',em:'➕',lesson:1,
   explain:['Thêm vào chỗ còn thiếu hoặc đã hao hụt: 补充水分, 补充营养, 补充人员.','Nói thêm cho đầy đủ: 我补充一点 (tôi xin bổ sung một ý); làm định ngữ: 补充材料, 补充生词.'],
   usage:'Bảng 词语搭配: 补充 + 信息 / 营养 / 人员 / 资金. Định ngữ: 补充材料 / 补充生词 / 补充说明. Sách bài tập 书写 30: 这是他上次面试后交来的补充材料.',
   collo:['补充信息','补充营养','补充人员','补充资金'],
   ex_zh:'迫使树干中的水分自动前来补充，这样节节传递。',ex_py:'Pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng, zhèyàng jiéjié chuándì.',ex_vn:'Buộc nước trong thân cây tự động kéo lên bổ sung, cứ thế truyền dần từng đốt.',
   exList:[
     {zh:'叶子通过不停地向空气中释放水汽，迫使树干中的水分自动前来补充。',py:'Yèzi tōngguò bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng.',vn:'Lá cây không ngừng toả hơi nước vào không khí, buộc nước trong thân cây tự động kéo lên bổ sung.'},
     {zh:'运动以后要及时补充水分。',py:'Yùndòng yǐhòu yào jíshí bǔchōng shuǐfèn.',vn:'Sau khi vận động phải kịp thời bổ sung nước.'},
     {zh:'这是他上次面试后交来的补充材料。',py:'Zhè shì tā shàng cì miànshì hòu jiāolái de bǔchōng cáiliào.',vn:'Đây là tài liệu bổ sung anh ấy nộp sau lần phỏng vấn trước.'}
   ],
   colloFull:[
     {zh:'补充信息',py:'bǔchōng xìnxī',vn:'bổ sung thông tin'},
     {zh:'补充营养',py:'bǔchōng yíngyǎng',vn:'bổ sung dinh dưỡng'},
     {zh:'补充人员',py:'bǔchōng rényuán',vn:'bổ sung nhân sự'},
     {zh:'补充资金',py:'bǔchōng zījīn',vn:'bổ sung vốn'},
     {zh:'补充水分',py:'bǔchōng shuǐfèn',vn:'bổ sung nước'}
   ],
   patterns:[
     {s:'补充 + 信息 / 营养 / 人员 / 资金 / 水分',m:'Bổ sung thông tin / dinh dưỡng / nhân sự / vốn / nước'},
     {s:'补充 + 材料 / 生词 / 说明 (định ngữ)',m:'Tài liệu / từ mới / thuyết minh bổ sung'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đá bóng xong phải bổ sung nước ngay, nếu không cơ thể sẽ ngày càng mệt.',answer:'踢完球要马上补充水分，不然身体会越来越累。',answerPy:'Tīwán qiú yào mǎshàng bǔchōng shuǐfèn, bùrán shēntǐ huì yuè lái yuè lèi.',
      note:'补充 + 水分. 越来越 + tính từ.',pair:'越来越'},
     {promptLang:'vi',prompt:'Hãy bổ sung ý kiến của bạn vào bản kế hoạch.',answer:'请把你的意见补充到计划里。',answerPy:'Qǐng bǎ nǐ de yìjiàn bǔchōng dào jìhuà li.',
      note:'把 + tân ngữ + 补充到 + nơi chốn.',pair:'把'}
   ]},

  {n:29,zh:'抽',py:'chōu',pos:'Động từ',vn:'rút ra, hút, bơm; dành ra (thời gian)',hv:'trừu',em:'🚰',lesson:1,
   explain:['Rút một phần từ trong ra: 抽出一张纸; hút (chất lỏng, khí) bằng lực hút: 抽水, 把水分抽上来.','Dành ra (thời gian): 抽时间, 抽空; hút (thuốc): 抽烟; còn có nghĩa rút thăm: 抽签, 抽奖.'],
   usage:'抽 + 水 / 烟 / 时间 / 空 / 签; 把……抽上来 / 抽出来. Bài khoá dùng 把……给抽了上来 (给 trước động từ làm câu 把 khẩu ngữ hơn).',
   collo:['抽水','抽时间','抽出来','抽烟'],
   ex_zh:'这样节节传递，就像是把树根吸收的水分给抽了上来。',ex_py:'Zhèyàng jiéjié chuándì, jiù xiàng shì bǎ shùgēn xīshōu de shuǐfèn gěi chōule shanglai.',ex_vn:'Cứ truyền dần từng đốt như thế, giống như là hút nước mà rễ cây hấp thụ lên vậy.',
   exList:[
     {zh:'这样节节传递，就像是把树根吸收的水分给抽了上来。',py:'Zhèyàng jiéjié chuándì, jiù xiàng shì bǎ shùgēn xīshōu de shuǐfèn gěi chōule shanglai.',vn:'Cứ truyền dần từng đốt như thế, giống như là hút nước mà rễ cây hấp thụ lên vậy.'},
     {zh:'工作再忙，也要抽时间陪陪父母。',py:'Gōngzuò zài máng, yě yào chōu shíjiān péipei fùmǔ.',vn:'Công việc bận mấy cũng phải dành thời gian ở bên bố mẹ.'},
     {zh:'他从书包里抽出一本书递给我。',py:'Tā cóng shūbāo li chōuchū yì běn shū dì gěi wǒ.',vn:'Cậu ấy rút một quyển sách từ trong cặp đưa cho tôi.'}
   ],
   colloFull:[
     {zh:'抽水',py:'chōu shuǐ',vn:'bơm nước, hút nước'},
     {zh:'抽时间',py:'chōu shíjiān',vn:'dành thời gian'},
     {zh:'抽出来',py:'chōu chulai',vn:'rút ra'},
     {zh:'抽烟',py:'chōu yān',vn:'hút thuốc'},
     {zh:'把水分抽上来',py:'bǎ shuǐfèn chōu shanglai',vn:'hút nước lên'}
   ],
   patterns:[
     {s:'把 + N + (给) + 抽上来 / 抽出来',m:'Hút … lên / rút … ra'},
     {s:'抽 + 时间 / 空 + V',m:'Dành thời gian làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công nhân đã hút sạch nước trong hồ lên rồi.',answer:'工人把池子里的水都抽上来了。',answerPy:'Gōngrén bǎ chízi li de shuǐ dōu chōu shanglai le.',
      note:'Câu 把 + bổ ngữ xu hướng 上来 (như 把水分给抽了上来 của bài khoá).',pair:'把'},
     {promptLang:'vi',prompt:'Tuy học rất bận, nhưng tuần nào cậu ấy cũng dành thời gian chơi bóng.',answer:'虽然学习很忙，但是他每个星期都抽时间去打球。',answerPy:'Suīrán xuéxí hěn máng, dànshì tā měi ge xīngqī dōu chōu shíjiān qù dǎ qiú.',
      note:'抽时间 + V: dành thời gian để làm gì.',pair:'虽然……但是……'}
   ]},

  {n:30,zh:'蒸腾',py:'zhēngténg',pos:'Động từ',vn:'bốc hơi, thoát hơi nước',hv:'chưng đằng',em:'☁️',lesson:1,
   explain:['(Hơi nước, khí nóng) bốc lên cuồn cuộn: 热气蒸腾.','Thuật ngữ sinh học: 蒸腾作用 — sự thoát hơi nước qua lá cây; 蒸腾拉力 — lực kéo do thoát hơi nước tạo ra, giúp cây hút nước lên cao.'],
   usage:'蒸腾作用, 蒸腾拉力, 热气蒸腾. Chủ yếu gặp trong bài khoa học tự nhiên; khẩu ngữ ít dùng.',
   collo:['蒸腾作用','蒸腾拉力','热气蒸腾','水汽蒸腾'],
   ex_zh:'因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。',ex_py:'Yīnwèi gēn zhēngténg zuòyòng yǒuguān, zhè zhǒng tèshū de tíshēnglì jiù bèi chēngwéi "zhēngténg lālì".',ex_vn:'Vì có liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".',
   exList:[
     {zh:'因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。',py:'Yīnwèi gēn zhēngténg zuòyòng yǒuguān, zhè zhǒng tèshū de tíshēnglì jiù bèi chēngwéi "zhēngténg lālì".',vn:'Vì có liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".'},
     {zh:'以前大家都认为是毛细作用，但现在人们发现是蒸腾拉力在起作用。',py:'Yǐqián dàjiā dōu rènwéi shì máoxì zuòyòng, dàn xiànzài rénmen fāxiàn shì zhēngténg lālì zài qǐ zuòyòng.',vn:'Trước kia mọi người đều cho rằng là hiện tượng mao dẫn, nhưng nay người ta phát hiện là lực kéo thoát hơi nước đang phát huy tác dụng.'},
     {zh:'锅里的汤开了，热气蒸腾，整个厨房都是香味。',py:'Guō li de tāng kāi le, rèqì zhēngténg, zhěnggè chúfáng dōu shì xiāngwèi.',vn:'Nồi canh sôi rồi, hơi nóng bốc lên nghi ngút, cả bếp thơm lừng.'}
   ],
   colloFull:[
     {zh:'蒸腾作用',py:'zhēngténg zuòyòng',vn:'sự thoát hơi nước'},
     {zh:'蒸腾拉力',py:'zhēngténg lālì',vn:'lực kéo thoát hơi nước'},
     {zh:'热气蒸腾',py:'rèqì zhēngténg',vn:'hơi nóng bốc lên nghi ngút'},
     {zh:'水汽蒸腾',py:'shuǐqì zhēngténg',vn:'hơi nước bốc lên'}
   ],
   patterns:[
     {s:'蒸腾 + 作用 / 拉力',m:'Sự thoát hơi nước / lực kéo thoát hơi nước'},
     {s:'热气 / 水汽 + 蒸腾',m:'Hơi nóng / hơi nước bốc lên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lực kéo này được gọi là "lực kéo thoát hơi nước".',answer:'这种拉力被称为“蒸腾拉力”。',answerPy:'Zhè zhǒng lālì bèi chēngwéi "zhēngténg lālì".',
      note:'被称为 = được gọi là (câu 被 không có tác nhân, văn viết).',pair:'被'},
     {promptLang:'vi',prompt:'Trời càng nóng, sự thoát hơi nước của lá càng mạnh.',answer:'天气越热，叶子的蒸腾作用就越强。',answerPy:'Tiānqì yuè rè, yèzi de zhēngténg zuòyòng jiù yuè qiáng.',
      note:'越……越……: hai mức độ tăng cùng nhau.',pair:'越……越……'}
   ]},

  {n:31,zh:'特殊',py:'tèshū',pos:'Tính từ',vn:'đặc biệt, đặc thù, khác thường',hv:'đặc thù',em:'⭐',lesson:1,
   explain:['Khác với thông thường, không giống cái chung — thiên về văn viết: 特殊情况, 特殊的提升力.','Chỉ là TÍNH TỪ, không làm phó từ (khác 特别 — 特别 còn là phó từ "rất, vô cùng"). Xem phần 词语辨析 特殊—特别.'],
   usage:'特殊 + 情况 / 原因 / 要求 / 材料 / 待遇; 比较特殊, 很特殊. Không nói ✗ 特殊喜欢 / ✗ 特殊好 (phải dùng 特别).',
   collo:['特殊情况','特殊原因','特殊的要求','特殊材料'],
   ex_zh:'因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。',ex_py:'Yīnwèi gēn zhēngténg zuòyòng yǒuguān, zhè zhǒng tèshū de tíshēnglì jiù bèi chēngwéi "zhēngténg lālì".',ex_vn:'Vì có liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".',
   exList:[
     {zh:'因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。',py:'Yīnwèi gēn zhēngténg zuòyòng yǒuguān, zhè zhǒng tèshū de tíshēnglì jiù bèi chēngwéi "zhēngténg lālì".',vn:'Vì có liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".'},
     {zh:'这种情况比较特殊，我原来没见过。',py:'Zhè zhǒng qíngkuàng bǐjiào tèshū, wǒ yuánlái méi jiànguo.',vn:'Tình huống này khá đặc biệt, trước giờ tôi chưa gặp.'},
     {zh:'如果没有特殊原因，请不要请假。',py:'Rúguǒ méiyǒu tèshū yuányīn, qǐng bú yào qǐngjià.',vn:'Nếu không có lý do đặc biệt, xin đừng xin nghỉ.'}
   ],
   colloFull:[
     {zh:'特殊情况',py:'tèshū qíngkuàng',vn:'trường hợp đặc biệt'},
     {zh:'特殊原因',py:'tèshū yuányīn',vn:'lý do đặc biệt'},
     {zh:'特殊的要求',py:'tèshū de yāoqiú',vn:'yêu cầu đặc biệt'},
     {zh:'特殊材料',py:'tèshū cáiliào',vn:'vật liệu đặc biệt'}
   ],
   patterns:[
     {s:'特殊 + (的) + 情况 / 原因 / 要求',m:'Trường hợp / lý do / yêu cầu đặc biệt'},
     {s:'N + 比较 / 很 + 特殊',m:'… khá / rất đặc biệt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa từng gặp trường hợp đặc biệt như thế này.',answer:'我从来没遇到过这么特殊的情况。',answerPy:'Wǒ cónglái méi yùdàoguo zhème tèshū de qíngkuàng.',
      note:'特殊 làm định ngữ: 特殊的情况. 从来没……过: chưa từng.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Chỉ cần không có lý do đặc biệt, ngày mai 8 giờ chúng ta sẽ xuất phát.',answer:'只要没有特殊原因，明天八点我们就出发。',answerPy:'Zhǐyào méiyǒu tèshū yuányīn, míngtiān bā diǎn wǒmen jiù chūfā.',
      note:'特殊原因 là kết hợp cố định.',pair:'只要……就……'}
   ]},

  {n:32,zh:'内部',py:'nèibù',pos:'Danh từ',vn:'nội bộ, bên trong',hv:'nội bộ',em:'🏢',lesson:1,
   explain:['Phần bên trong của một vật: 大树内部, 机器内部, 身体内部.','Bên trong một tổ chức, tập thể (không để người ngoài biết): 公司内部的问题, 内部会议, 内部消息.'],
   usage:'N + 内部 / 内部 + 的 + N: 公司内部的问题, 内部资料. Đối lập với 外部. Bài tập 1 của sách: 这是我们公司内部的问题.',
   collo:['大树内部','公司内部','内部问题','内部会议'],
   ex_zh:'不过，这个大树内部的供水系统具体的运转状况是怎么样的，到目前还是个谜。',ex_py:'Búguò, zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, dào mùqián hái shì ge mí.',ex_vn:'Có điều, hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, đến nay vẫn là một bí ẩn.',
   exList:[
     {zh:'不过，这个大树内部的供水系统具体的运转状况是怎么样的，到目前还是个谜。',py:'Búguò, zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, dào mùqián hái shì ge mí.',vn:'Có điều, hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, đến nay vẫn là một bí ẩn.'},
     {zh:'这是我们公司内部的问题，我们自己来解决吧。',py:'Zhè shì wǒmen gōngsī nèibù de wèntí, wǒmen zìjǐ lái jiějué ba.',vn:'Đây là vấn đề nội bộ công ty chúng tôi, để chúng tôi tự giải quyết.'},
     {zh:'这份材料是内部资料，不能带出办公室。',py:'Zhè fèn cáiliào shì nèibù zīliào, bù néng dàichū bàngōngshì.',vn:'Tài liệu này là tài liệu nội bộ, không được mang ra khỏi văn phòng.'}
   ],
   colloFull:[
     {zh:'大树内部',py:'dà shù nèibù',vn:'bên trong cây lớn'},
     {zh:'公司内部',py:'gōngsī nèibù',vn:'nội bộ công ty'},
     {zh:'内部问题',py:'nèibù wèntí',vn:'vấn đề nội bộ'},
     {zh:'内部会议',py:'nèibù huìyì',vn:'cuộc họp nội bộ'},
     {zh:'内部资料',py:'nèibù zīliào',vn:'tài liệu nội bộ'}
   ],
   patterns:[
     {s:'N + 内部 (+ 的 + N)',m:'Bên trong / nội bộ của …'},
     {s:'内部 + 问题 / 会议 / 资料',m:'Vấn đề / cuộc họp / tài liệu nội bộ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vấn đề nội bộ lớp mình, chỉ cần mọi người bàn bạc là sẽ giải quyết được.',answer:'我们班内部的问题，只要大家商量一下就能解决。',answerPy:'Wǒmen bān nèibù de wèntí, zhǐyào dàjiā shāngliang yíxià jiù néng jiějué.',
      note:'内部 + 的 + 问题. 只要……就…….',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tin này là được truyền ra từ nội bộ công ty.',answer:'这个消息是从公司内部传出来的。',answerPy:'Zhège xiāoxi shì cóng gōngsī nèibù chuán chulai de.',
      note:'是……的 nhấn mạnh nguồn gốc (从公司内部).',pair:'是……的'}
   ]},

  {n:33,zh:'系统',py:'xìtǒng',pos:'Danh từ / Tính từ',vn:'hệ thống; có hệ thống',hv:'hệ thống',em:'⚙️',lesson:1,
   explain:['Danh từ: tổng thể gồm nhiều bộ phận liên kết theo trật tự nhất định: 供水系统, 电脑系统, 消化系统.','Tính từ: có hệ thống, bài bản — 系统地学习, 系统的知识.'],
   usage:'供水 / 电脑 / 交通 / 消化 + 系统; 给系统升级 (bài tập 1 của sách); 系统地 + V (tính từ làm trạng ngữ).',
   collo:['供水系统','电脑系统','系统升级','系统地学习'],
   ex_zh:'这个大树内部的供水系统具体的运转状况是怎么样的，到目前还是个谜。',ex_py:'Zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, dào mùqián hái shì ge mí.',ex_vn:'Hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, đến nay vẫn là một bí ẩn.',
   exList:[
     {zh:'这个大树内部的供水系统具体的运转状况是怎么样的，到目前还是个谜。',py:'Zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, dào mùqián hái shì ge mí.',vn:'Hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, đến nay vẫn là một bí ẩn.'},
     {zh:'你的电脑太慢了，应该去给系统做一下升级。',py:'Nǐ de diànnǎo tài màn le, yīnggāi qù gěi xìtǒng zuò yíxià shēngjí.',vn:'Máy tính của cậu chậm quá, nên đi nâng cấp hệ thống một chút.'},
     {zh:'要想学好汉语，就得系统地学习语法。',py:'Yào xiǎng xuéhǎo Hànyǔ, jiù děi xìtǒng de xuéxí yǔfǎ.',vn:'Muốn học tốt tiếng Trung thì phải học ngữ pháp một cách có hệ thống.'}
   ],
   colloFull:[
     {zh:'供水系统',py:'gōngshuǐ xìtǒng',vn:'hệ thống cấp nước'},
     {zh:'电脑系统',py:'diànnǎo xìtǒng',vn:'hệ điều hành máy tính'},
     {zh:'系统升级',py:'xìtǒng shēngjí',vn:'nâng cấp hệ thống'},
     {zh:'系统地学习',py:'xìtǒng de xuéxí',vn:'học có hệ thống'},
     {zh:'交通系统',py:'jiāotōng xìtǒng',vn:'hệ thống giao thông'}
   ],
   patterns:[
     {s:'供水 / 电脑 / 交通 + 系统',m:'Hệ thống cấp nước / máy tính / giao thông'},
     {s:'系统地 + 学习 / 研究',m:'Học / nghiên cứu một cách có hệ thống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hệ thống máy tính đã được nâng cấp rồi, chạy ngày càng nhanh.',answer:'电脑系统已经升级了，运行得越来越快了。',answerPy:'Diànnǎo xìtǒng yǐjīng shēngjí le, yùnxíng de yuè lái yuè kuài le.',
      note:'Bổ ngữ trạng thái + 越来越.',pair:'越来越'},
     {promptLang:'vi',prompt:'Kỹ thuật viên đã sửa xong hệ thống cấp nước của toà nhà.',answer:'技术人员把大楼的供水系统修好了。',answerPy:'Jìshù rényuán bǎ dàlóu de gōngshuǐ xìtǒng xiūhǎo le.',
      note:'把 + 供水系统 + 修好了.',pair:'把'}
   ]},

  {n:34,zh:'状况',py:'zhuàngkuàng',pos:'Danh từ',vn:'tình hình, tình trạng',hv:'trạng huống',em:'📊',lesson:1,
   explain:['Hình thức biểu hiện ra bên ngoài của sự vật, tình trạng cụ thể: 身体状况, 经济状况, 运转状况.','Văn viết, trang trọng hơn 情况; thường nói về trạng thái (tốt / xấu) của một đối tượng.'],
   usage:'身体 / 健康 / 经济 / 交通 / 运转 + 状况; 了解状况 (bài tập 3 của sách); 状况 + 良好 / 不好. So với 情况: 情况 dùng rộng hơn, còn chỉ "sự việc xảy ra" (有什么情况?), 状况 không dùng thế.',
   collo:['身体状况','经济状况','了解状况','运转状况'],
   ex_zh:'这个大树内部的供水系统具体的运转状况是怎么样的，到目前还是个谜。',ex_py:'Zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, dào mùqián hái shì ge mí.',ex_vn:'Hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, đến nay vẫn là một bí ẩn.',
   exList:[
     {zh:'这个大树内部的供水系统具体的运转状况是怎么样的，到目前还是个谜。',py:'Zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, dào mùqián hái shì ge mí.',vn:'Hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, đến nay vẫn là một bí ẩn.'},
     {zh:'医生问了问爷爷最近的身体状况。',py:'Yīshēng wènle wèn yéye zuìjìn de shēntǐ zhuàngkuàng.',vn:'Bác sĩ hỏi han tình trạng sức khoẻ gần đây của ông.'},
     {zh:'新经理来了以后，先花了一个月了解公司的状况。',py:'Xīn jīnglǐ láile yǐhòu, xiān huāle yí ge yuè liǎojiě gōngsī de zhuàngkuàng.',vn:'Giám đốc mới đến, trước tiên dành một tháng tìm hiểu tình hình công ty.'}
   ],
   colloFull:[
     {zh:'身体状况',py:'shēntǐ zhuàngkuàng',vn:'tình trạng sức khoẻ'},
     {zh:'经济状况',py:'jīngjì zhuàngkuàng',vn:'tình hình kinh tế'},
     {zh:'了解状况',py:'liǎojiě zhuàngkuàng',vn:'tìm hiểu tình hình'},
     {zh:'运转状况',py:'yùnzhuǎn zhuàngkuàng',vn:'tình trạng vận hành'},
     {zh:'状况良好',py:'zhuàngkuàng liánghǎo',vn:'tình trạng tốt'}
   ],
   patterns:[
     {s:'身体 / 经济 / 交通 + 状况',m:'Tình trạng sức khoẻ / tình hình kinh tế, giao thông'},
     {s:'了解 + ……的 + 状况',m:'Tìm hiểu tình hình của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tình trạng sức khoẻ của bà ngày càng tốt.',answer:'奶奶的身体状况越来越好了。',answerPy:'Nǎinai de shēntǐ zhuàngkuàng yuè lái yuè hǎo le.',
      note:'身体状况 + 越来越好.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy tình hình kinh tế gia đình không tốt, nhưng bố mẹ vẫn cho cậu ấy đi học.',answer:'虽然家里的经济状况不好，但是父母还是让他去上学。',answerPy:'Suīrán jiāli de jīngjì zhuàngkuàng bù hǎo, dànshì fùmǔ háishi ràng tā qù shàngxué.',
      note:'经济状况 là kết hợp thường gặp.',pair:'虽然……但是……'}
   ]},

  {n:35,zh:'秩序',py:'zhìxù',pos:'Danh từ',vn:'trật tự',hv:'trật tự',em:'🚦',lesson:1,
   explain:['Trạng thái ngăn nắp, có quy củ, mọi thứ diễn ra theo thứ tự: 交通秩序, 社会秩序, 比赛秩序.','Trong bài khoá dùng cho tự nhiên: 大树遵守的是一种什么样的秩序 — cây vận hành theo quy luật nào.'],
   usage:'Bảng 词语搭配: 遵守 / 破坏 + 秩序. Thêm: 维持秩序 (bài 29), 恢复秩序, 秩序良好 (bài tập 2 của sách). Phân biệt 规则 (quy tắc — điều khoản đặt ra để tuân theo: 比赛规则).',
   collo:['遵守秩序','破坏秩序','维持秩序','交通秩序'],
   ex_zh:'它们遵守的是一种什么样的秩序，为什么会产生如此巨大的拉力，到目前还是个谜。',ex_py:'Tāmen zūnshǒu de shì yì zhǒng shénmeyàng de zhìxù, wèi shénme huì chǎnshēng rúcǐ jùdà de lālì, dào mùqián hái shì ge mí.',ex_vn:'Chúng tuân theo một trật tự như thế nào, vì sao lại sinh ra lực kéo lớn như vậy, đến nay vẫn là một bí ẩn.',
   exList:[
     {zh:'它们遵守的是一种什么样的秩序，为什么会产生如此巨大的拉力，到目前还是个谜。',py:'Tāmen zūnshǒu de shì yì zhǒng shénmeyàng de zhìxù, wèi shénme huì chǎnshēng rúcǐ jùdà de lālì, dào mùqián hái shì ge mí.',vn:'Chúng tuân theo một trật tự như thế nào, vì sao lại sinh ra lực kéo lớn như vậy, đến nay vẫn là một bí ẩn.'},
     {zh:'目前人流量很大，请大家自觉遵守秩序，排队进站。',py:'Mùqián rénliúliàng hěn dà, qǐng dàjiā zìjué zūnshǒu zhìxù, páiduì jìn zhàn.',vn:'Hiện lượng người rất đông, đề nghị mọi người tự giác giữ trật tự, xếp hàng vào ga.'},
     {zh:'今天的比赛秩序良好，没有球迷闹事。',py:'Jīntiān de bǐsài zhìxù liánghǎo, méiyǒu qiúmí nàoshì.',vn:'Trận đấu hôm nay trật tự tốt, không có cổ động viên nào gây rối.'}
   ],
   colloFull:[
     {zh:'遵守秩序',py:'zūnshǒu zhìxù',vn:'giữ trật tự'},
     {zh:'破坏秩序',py:'pòhuài zhìxù',vn:'phá rối trật tự'},
     {zh:'维持秩序',py:'wéichí zhìxù',vn:'duy trì trật tự'},
     {zh:'交通秩序',py:'jiāotōng zhìxù',vn:'trật tự giao thông'},
     {zh:'秩序良好',py:'zhìxù liánghǎo',vn:'trật tự tốt'}
   ],
   patterns:[
     {s:'遵守 / 破坏 / 维持 / 恢复 + 秩序',m:'Giữ / phá / duy trì / khôi phục trật tự'},
     {s:'交通 / 社会 / 比赛 + 秩序',m:'Trật tự giao thông / xã hội / trận đấu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trật tự trong phòng thi đã bị mấy học sinh phá rối.',answer:'考场的秩序被几个学生破坏了。',answerPy:'Kǎochǎng de zhìxù bèi jǐ ge xuésheng pòhuài le.',
      note:'破坏秩序 (bảng 词语搭配) đổi thành câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người đều giữ trật tự, sẽ không ai bị thương.',answer:'只要大家都遵守秩序，就不会有人受伤。',answerPy:'Zhǐyào dàjiā dōu zūnshǒu zhìxù, jiù bú huì yǒu rén shòushāng.',
      note:'遵守秩序 (bảng 词语搭配).',pair:'只要……就……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — 植物会出汗 (604 chữ, tr. 148–150)
// Nguồn: 改编自《科学松鼠会》，作者：史军
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 植物会出汗',
  preQuiz:[
    {q:'课文开头，队员们在什么时候汗如雨下？',opts:['炎热的夏天踢完球赛以后','冬天跑完步以后','上完体育课以前'],ans:0},
    {q:'课文中没有提到哪种恢复活力的办法？',opts:['在大树下歇一歇','去游泳池游泳','吃个冰激凌'],ans:1},
    {q:'我们在大树下觉得湿润荫凉，是因为什么？',opts:['因为树下有河','因为树下有风','因为大树在“出汗”'],ans:2},
    {q:'人体温度上升时，谁指挥身体出汗？',opts:['大脑','汗腺','肌肉'],ans:0},
    {q:'人的汗水是从哪里冒出来的？',opts:['叶片的气孔','毛孔','汗腺的根'],ans:1},
    {q:'大树的“汗”通常从哪里冒出来？',opts:['树根','树干','叶片的气孔'],ans:2},
    {q:'大树“出汗”是为了什么？',opts:['运输养分','降低温度','吸引动物'],ans:0},
    {q:'植物的根会吸收什么？',opts:['阳光和空气','养分和水分','氧气和水汽'],ans:1},
    {q:'最初人们认为大树是通过什么来提水的？',opts:['蒸腾拉力','树根的力量','毛细作用'],ans:2},
    {q:'用玻璃管做实验会发现什么？',opts:['玻璃管越细，水爬得越高','玻璃管越粗，水爬得越高','水不会往上爬'],ans:0},
    {q:'测验计算发现，毛细作用能把水送到几十米高的地方吗？',opts:['能，很容易','根本无法做到','只有在夏天可以'],ans:1},
    {q:'大树实际上利用的是什么？',opts:['树根下面的土地','树干里的管子','枝干顶端的叶片'],ans:2},
    {q:'关于“蒸腾拉力”，下列哪项正确？',opts:['具体怎么运转到目前还是个谜','科学家已经完全研究清楚了','它和蒸腾作用没有关系'],ans:0}
  ],
  lines:[
    {sp:0,zh:'炎热的夏天，踢完一场球赛，每个队员都已经是汗如雨下。如果这个时候，能到大树下歇一歇，喝口凉开水，吃个冰激凌，放松放松肌肉，缓解一下疲劳，那一定是件美事，可以很快恢复活力。不过，你知道吗，我们之所以能在大树下享受这种湿润荫凉，也是因为大树在“出汗”呢！',
     py:'Yánrè de xiàtiān, tīwán yì chǎng qiúsài, měi ge duìyuán dōu yǐjīng shì hàn rú yǔ xià. Rúguǒ zhège shíhou, néng dào dà shù xià xiē yi xiē, hē kǒu liáng kāishuǐ, chī ge bīngjīlíng, fàngsōng fàngsōng jīròu, huǎnjiě yíxià píláo, nà yídìng shì jiàn měishì, kěyǐ hěn kuài huīfù huólì. Búguò, nǐ zhīdào ma, wǒmen zhīsuǒyǐ néng zài dà shù xià xiǎngshòu zhè zhǒng shīrùn yìnliáng, yě shì yīnwèi dà shù zài "chū hàn" ne!',
     vn:'Mùa hè nóng bức, đá xong một trận bóng, cầu thủ nào cũng đã mồ hôi đầm đìa như mưa. Nếu lúc này được đến dưới gốc cây lớn nghỉ một lát, uống ngụm nước đun sôi để nguội, ăn một cây kem, thả lỏng cơ bắp, giảm bớt mệt mỏi, thì hẳn là một chuyện thú vị, có thể nhanh chóng lấy lại sức sống. Có điều, bạn có biết không, sở dĩ chúng ta được tận hưởng sự ẩm mát, râm mát này dưới gốc cây lớn, cũng là vì cây lớn đang "đổ mồ hôi" đấy!'},
    {sp:0,zh:'人体要保持相对稳定的温度，一旦温度上升，大脑就会指挥我们的身体赶快出汗，这时所有汗腺开始工作，汗水就从毛孔里冒了出来。大树出的“汗”，通常是从叶片的气孔里冒出来的，不过，这种“出汗”可不是为了降低温度，而是为了运输养分。',
     py:'Réntǐ yào bǎochí xiāngduì wěndìng de wēndù, yídàn wēndù shàngshēng, dànǎo jiù huì zhǐhuī wǒmen de shēntǐ gǎnkuài chū hàn, zhè shí suǒyǒu hànxiàn kāishǐ gōngzuò, hànshuǐ jiù cóng máokǒng li màole chulai. Dà shù chū de "hàn", tōngcháng shì cóng yèpiàn de qìkǒng li mào chulai de, búguò, zhè zhǒng "chū hàn" kě bú shì wèile jiàngdī wēndù, ér shì wèile yùnshū yǎngfèn.',
     vn:'Cơ thể người phải giữ nhiệt độ tương đối ổn định; một khi nhiệt độ tăng lên, não sẽ ra lệnh cho cơ thể chúng ta mau chóng đổ mồ hôi, lúc này mọi tuyến mồ hôi bắt đầu làm việc, mồ hôi liền từ lỗ chân lông toát ra. "Mồ hôi" của cây lớn thường toát ra từ khí khổng trên phiến lá, có điều, kiểu "đổ mồ hôi" này không phải để hạ nhiệt độ, mà là để vận chuyển chất dinh dưỡng.'},
    {sp:0,zh:'我们都知道这样的常识——植物的根会吸收养分和水分，但是你有没有想过，植物是怎么控制这些成分，把它们运输到十几米甚至上百米的树梢的呢？',
     py:'Wǒmen dōu zhīdào zhèyàng de chángshí——zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn, dànshì nǐ yǒu méiyǒu xiǎngguo, zhíwù shì zěnme kòngzhì zhèxiē chéngfèn, bǎ tāmen yùnshū dào shíjǐ mǐ shènzhì shàng bǎi mǐ de shùshāo de ne?',
     vn:'Chúng ta đều biết điều thường thức này — rễ cây sẽ hút chất dinh dưỡng và nước; nhưng bạn đã bao giờ nghĩ xem, cây cối làm thế nào điều khiển những thành phần ấy, đưa chúng lên tận ngọn cây cao mười mấy mét, thậm chí hàng trăm mét chưa?'},
    {sp:0,zh:'最初人们认为大树是通过毛细作用来提水的。所谓“毛细作用”，简单来说，就是水会顺着很细很细的管子向上“爬”，我们在家可以用一个比较细的玻璃管体验一下。玻璃管越细，水爬升的高度就越高。可是，经过测验计算发现，以大树输送管道的尺寸产生的毛细作用，根本无法把水分送到几十米高的地方。',
     py:'Zuìchū rénmen rènwéi dà shù shì tōngguò máoxì zuòyòng lái tí shuǐ de. Suǒwèi "máoxì zuòyòng", jiǎndān lái shuō, jiù shì shuǐ huì shùnzhe hěn xì hěn xì de guǎnzi xiàng shàng "pá", wǒmen zài jiā kěyǐ yòng yí ge bǐjiào xì de bōliguǎn tǐyàn yíxià. Bōliguǎn yuè xì, shuǐ páshēng de gāodù jiù yuè gāo. Kěshì, jīngguò cèyàn jìsuàn fāxiàn, yǐ dà shù shūsòng guǎndào de chǐcùn chǎnshēng de máoxì zuòyòng, gēnběn wúfǎ bǎ shuǐfèn sòngdào jǐshí mǐ gāo de dìfang.',
     vn:'Ban đầu người ta cho rằng cây lớn đưa nước lên nhờ hiện tượng mao dẫn. Cái gọi là "hiện tượng mao dẫn", nói đơn giản, là nước sẽ "bò" lên theo những ống rất rất nhỏ; ở nhà chúng ta có thể dùng một ống thuỷ tinh khá nhỏ để thử. Ống thuỷ tinh càng nhỏ, nước leo lên càng cao. Thế nhưng, qua đo đạc tính toán thì phát hiện, hiện tượng mao dẫn sinh ra với kích cỡ đường ống vận chuyển của cây lớn hoàn toàn không thể đưa nước lên nơi cao mấy chục mét.'},
    {sp:0,zh:'实际上，大树利用的是枝干顶端的那些叶片。叶子通过不停地向空气中释放水汽，迫使树干中的水分自动前来补充，这样节节传递，就像是把树根吸收的水分给抽了上来。因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。不过，这个大树内部的供水系统具体的运转状况是怎么样的，它们遵守的是一种什么样的秩序，为什么会产生如此巨大的拉力，到目前还是个谜。',
     py:'Shíjìshang, dà shù lìyòng de shì zhīgàn dǐngduān de nàxiē yèpiàn. Yèzi tōngguò bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ shùgàn zhōng de shuǐfèn zìdòng qiánlái bǔchōng, zhèyàng jiéjié chuándì, jiù xiàng shì bǎ shùgēn xīshōu de shuǐfèn gěi chōule shanglai. Yīnwèi gēn zhēngténg zuòyòng yǒuguān, zhè zhǒng tèshū de tíshēnglì jiù bèi chēngwéi "zhēngténg lālì". Búguò, zhège dà shù nèibù de gōngshuǐ xìtǒng jùtǐ de yùnzhuǎn zhuàngkuàng shì zěnmeyàng de, tāmen zūnshǒu de shì yì zhǒng shénmeyàng de zhìxù, wèi shénme huì chǎnshēng rúcǐ jùdà de lālì, dào mùqián hái shì ge mí.',
     vn:'Thực ra, cái mà cây lớn tận dụng là những phiến lá ở đầu ngọn cành. Lá cây không ngừng toả hơi nước vào không khí, buộc nước trong thân cây tự động kéo lên bổ sung; cứ truyền dần từng đốt như thế, giống như là hút nước mà rễ cây hấp thụ lên vậy. Vì có liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước". Có điều, hệ thống cấp nước bên trong cây lớn cụ thể vận hành ra sao, chúng tuân theo một trật tự như thế nào, vì sao lại sinh ra lực kéo lớn như vậy, đến nay vẫn là một bí ẩn.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 特殊/特别 lấy từ sách (tr. 152–153)
// + 吸收/吸取, 自动/主动 (bài tập 2 của sách, tr. 153)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'特殊 — 特别',
   same:'Khi làm TÍNH TỪ, đều có nghĩa "khác với thông thường, không giống cái chung".',
   sameEx:{zh:'对我来说，他是一个特殊／特别的人。',vn:'Với tôi, anh ấy là một người đặc biệt.'},
   items:[
     {word:'特殊',points:[
       'Chỉ là TÍNH TỪ, thiên về VĂN VIẾT.',
       'Hay đi với danh từ trừu tượng: 特殊情况, 特殊原因, 特殊要求, 特殊的提升力.',
       'KHÔNG làm phó từ: không nói ✗ 特殊喜欢, ✗ 特殊舒服, ✗ 特殊是…….'
     ],ex:[{zh:'因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。',vn:'Vì liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".'},
          {zh:'如果没有特殊原因，请不要请假。',vn:'Nếu không có lý do đặc biệt, xin đừng xin nghỉ.'}]},
     {word:'特别',points:[
       'Tính từ dùng được cả KHẨU NGỮ lẫn văn viết: 她穿衣服总是很特别.',
       'Còn là PHÓ TỪ = 格外 (rất, vô cùng): 特别喜欢, 特别舒服.',
       '特别是…… = nhất là, đặc biệt là (= 尤其是): 我喜欢北京，特别是北京的秋天.'
     ],ex:[{zh:'她穿衣服总是很特别。',vn:'Cô ấy ăn mặc lúc nào cũng rất đặc biệt.'},
          {zh:'我特别喜欢学中文，尤其是汉字。',vn:'Tôi đặc biệt thích học tiếng Trung, nhất là chữ Hán.'}]}
   ],
   quiz:[
     {sentence:'治疗这种病需要一种＿＿的药。',options:['特殊','特别'],answer:0,both:true,
      why:'Làm tính từ bổ nghĩa cho 药 — cả 特殊 và 特别 đều được (câu mẫu có dấu ✓✓ của sách).'},
     {sentence:'我喜欢北京，＿＿是北京的秋天。',options:['特殊','特别'],answer:1,
      why:'特别是…… = nhất là (尤其是) — chỉ 特别 có cách dùng này.'},
     {sentence:'夏天运动后在大树下坐一会儿，喝口凉开水，＿＿舒服。',options:['特殊','特别'],answer:1,
      why:'Đứng trước tính từ 舒服 làm phó từ (= 格外) → chỉ 特别. 特殊 không làm phó từ.'},
     {sentence:'因为跟蒸腾作用有关，这种＿＿的提升力就被称为“蒸腾拉力”。',options:['特殊','特别'],answer:0,
      why:'Văn viết khoa học, bổ nghĩa cho danh từ trừu tượng 提升力 → 特殊 (câu bài khoá).'}
   ],
   sgk:{
     chung:{t:'做形容词时，都有和一般不一样的意思。',vn:'Khi làm tính từ, đều có nghĩa khác với thông thường.',vd:'对我来说，他是一个特殊／特别的人。',vdVn:'Với tôi, anh ấy là một người đặc biệt.'},
     khac:[
       {a:{t:'多用于书面语。',vn:'Thường dùng trong văn viết.',vd:'因为跟蒸腾作用有关，这种特殊的提升力就被称为“蒸腾拉力”。',vdVn:'Vì liên quan đến sự thoát hơi nước, lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".'},
        b:{t:'口语和书面语均可使用。',vn:'Dùng được cả trong khẩu ngữ lẫn văn viết.',vd:'她穿衣服总是很特别。',vdVn:'Cô ấy ăn mặc lúc nào cũng rất đặc biệt.'}},
       {a:{t:'没有这个用法。',vn:'Không có cách dùng này.'},
        b:{t:'还可做副词。意思是“格外”。',vn:'Còn làm được phó từ, nghĩa là "hết sức, đặc biệt" (格外).',vd:'我特别喜欢学中文，尤其是汉字。',vdVn:'Tôi đặc biệt thích học tiếng Trung, nhất là chữ Hán.'}}
     ],
     lamThu:[
       {s:'治疗这种病需要一种＿＿的药。',dap:[true,true],mau:true,
        giai:'Tính từ làm định ngữ cho 药 — cả hai đều được (câu mẫu của sách).'},
       {s:'这种情况比较＿＿，我原来没见过。',dap:[true,true],
        giai:'Tính từ làm vị ngữ, nghĩa "khác thường" — cả hai đều được; 特殊 trang trọng hơn (特殊情况 là cụm cố định).'},
       {s:'我喜欢北京，＿＿是北京的秋天。',dap:[false,true],
        giai:'特别是 = nhất là (尤其是) — 特殊 không có cách dùng này.'},
       {s:'夏天运动后在大树下坐一会儿，喝口凉开水，＿＿舒服。',dap:[false,true],
        giai:'Phó từ đứng trước tính từ 舒服 (= 格外舒服) → chỉ 特别.'}
     ]
   }},

  {pair:'吸收 — 吸取',
   same:'Đều là ĐỘNG TỪ, đều có nghĩa "lấy cái ở bên ngoài vào cho mình".',
   sameEx:{zh:'我们要多吸收／吸取别人的好经验。',vn:'Chúng ta nên tiếp thu nhiều kinh nghiệm hay của người khác.'},
   items:[
     {word:'吸收',points:[
       'Nghĩa gốc cụ thể: hút / hấp thụ vật chất — 吸收水分, 吸收营养, 吸收阳光.',
       'Nghĩa bóng: tiếp thu kiến thức, cái hay (吸收新知识); kết nạp người (吸收新会员).',
       'Đi với trạng ngữ 有效 / 直接 / 大量 / 完全 (bảng 词语搭配).'
     ],ex:[{zh:'植物的根会吸收养分和水分。',vn:'Rễ cây hút chất dinh dưỡng và nước.'},
          {zh:'这种营养很容易被身体吸收。',vn:'Chất dinh dưỡng này rất dễ được cơ thể hấp thụ.'}]},
     {word:'吸取',points:[
       'Chỉ dùng cho điều TRỪU TƯỢNG: rút ra (bài học, kinh nghiệm).',
       'Kết hợp cố định: 吸取教训, 吸取经验.',
       'Không dùng cho nước, dinh dưỡng: ✗ 吸取水分.'
     ],ex:[{zh:'这是你第几次错了？！怎么不吸取教训呢？',vn:'Đây là lần thứ mấy cậu sai rồi?! Sao không rút ra bài học?'},
          {zh:'我们要从失败中吸取经验。',vn:'Chúng ta phải rút kinh nghiệm từ thất bại.'}]}
   ],
   quiz:[
     {sentence:'这是你第几次错了？！怎么不＿＿教训呢？',options:['吸收','吸取'],answer:1,
      why:'吸取教训 = rút ra bài học — kết hợp cố định (bài tập 2 của sách).'},
     {sentence:'植物的根会＿＿养分和水分。',options:['吸收','吸取'],answer:0,
      why:'Hút vật chất cụ thể (水分, 养分) → 吸收.'},
     {sentence:'这种营养很容易被身体＿＿。',options:['吸收','吸取'],answer:0,
      why:'Cơ thể hấp thụ dinh dưỡng → 吸收.'},
     {sentence:'我们要多＿＿别人的好经验。',options:['吸收','吸取'],answer:0,both:true,
      why:'Với 经验 (kinh nghiệm) — cả 吸收经验 và 吸取经验 đều được.'}
   ]},

  {pair:'自动 — 主动',
   same:'Đều có nghĩa "tự mình làm, không cần người khác thúc ép".',
   sameEx:{zh:'下课后，他自动／主动留下来打扫教室。',vn:'Tan học, cậu ấy tự ở lại quét dọn lớp học.'},
   items:[
     {word:'自动',points:[
       'Nhấn mạnh KHÔNG CẦN TÁC ĐỘNG từ bên ngoài — dùng nhiều cho máy móc, sự vật tự nhiên: 门自动打开, 水分自动前来补充.',
       'Làm định ngữ: 自动售货机, 自动取票机 (tự động hoá).',
       'Với người: tự ý, tự nguyện (自动离开, 自动辞职).'
     ],ex:[{zh:'楼下新装了一台自动售货机。',vn:'Dưới tầng mới lắp một máy bán hàng tự động.'},
          {zh:'天一黑，路灯就自动亮了。',vn:'Trời vừa tối, đèn đường liền tự động sáng.'}]},
     {word:'主动',points:[
       'Chỉ dùng cho NGƯỜI (hoặc tổ chức): do ý thức, tự giác làm TRƯỚC, không đợi người khác bảo.',
       'Kết hợp: 主动提出, 主动帮助, 主动认错, 主动问; trái nghĩa với 被动.',
       'Không dùng cho máy móc: ✗ 主动售货机.'
     ],ex:[{zh:'是他主动提出要去参加这次比赛的。',vn:'Chính cậu ấy chủ động đề nghị tham gia cuộc thi lần này.'},
          {zh:'遇到不懂的问题，要主动问老师。',vn:'Gặp câu không hiểu thì phải chủ động hỏi thầy cô.'}]}
   ],
   quiz:[
     {sentence:'是他＿＿提出要去参加这次比赛的。',options:['自动','主动'],answer:1,
      why:'Người tự giác đề xuất trước (主动提出) → 主动 (bài tập 2 của sách).'},
     {sentence:'楼下新装了一台＿＿售货机。',options:['自动','主动'],answer:0,
      why:'Máy móc tự vận hành → 自动售货机 (bài tập 1 của sách).'},
     {sentence:'天一黑，路灯就＿＿亮了。',options:['自动','主动'],answer:0,
      why:'Sự vật tự xảy ra, không cần người tác động → 自动.'},
     {sentence:'遇到不懂的问题，要＿＿问老师。',options:['自动','主动'],answer:1,
      why:'Học sinh tự giác hỏi trước → 主动.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'恢复',hv:'khôi phục',vn:'hồi phục, khôi phục',note:'Trùng khít — 恢复健康 = hồi phục sức khoẻ.'},
    {zh:'指挥',hv:'chỉ huy',vn:'chỉ huy, điều khiển',note:'Trùng khít — 指挥交通 = điều khiển giao thông.'},
    {zh:'常识',hv:'thường thức',vn:'kiến thức thông thường',note:'"Thường thức" — hiểu biết thông thường; tiếng Việt cũng nói "thường thức khoa học".'},
    {zh:'吸收',hv:'hấp thu',vn:'hấp thụ',note:'Gần trùng — tiếng Việt nói "hấp thụ / hấp thu".'},
    {zh:'控制',hv:'khống chế',vn:'kiểm soát, kiềm chế',note:'Cùng gốc "khống chế", nhưng thường dịch là kiểm soát: 控制情绪 = kiềm chế cảm xúc.'},
    {zh:'成分',hv:'thành phần',vn:'thành phần',note:'Trùng khít — 营养成分 = thành phần dinh dưỡng.'},
    {zh:'自动',hv:'tự động',vn:'tự động',note:'Trùng khít — 自动售货机 = máy bán hàng tự động.'},
    {zh:'补充',hv:'bổ sung',vn:'bổ sung',note:'Trùng khít — 补充水分 = bổ sung nước.'},
    {zh:'特殊',hv:'đặc thù',vn:'đặc biệt, đặc thù',note:'Trùng khít — 特殊情况 = trường hợp đặc thù.'},
    {zh:'内部',hv:'nội bộ',vn:'nội bộ, bên trong',note:'Trùng khít — 公司内部 = nội bộ công ty.'},
    {zh:'系统',hv:'hệ thống',vn:'hệ thống',note:'Trùng khít — 供水系统 = hệ thống cấp nước.'},
    {zh:'秩序',hv:'trật tự',vn:'trật tự',note:'Trùng khít — 遵守秩序 = giữ trật tự.'},
    {zh:'汗腺',hv:'hãn tuyến',vn:'tuyến mồ hôi',note:'汗 = hãn (mồ hôi), 腺 = tuyến — ghép lại đúng như tiếng Việt "tuyến mồ hôi".'},
    {zh:'释放',hv:'thích phóng',vn:'phóng thích, giải phóng',note:'Đảo trật tự so với tiếng Việt: 释放 = "phóng thích". 释放氧气 = giải phóng ô-xy.'}
  ],
  idiom:[
    {zh:'汗如雨下',hv:'hãn như vũ hạ',vn:'mồ hôi đổ như mưa, mồ hôi đầm đìa',note:'Câu mở đầu bài khoá: 每个队员都已经是汗如雨下.'},
    {zh:'蜂拥而至',hv:'phong ủng nhi chí',vn:'kéo đến ùn ùn như ong vỡ tổ',note:'Phần 扩展 của sách: nhiều người ùa đến như bầy ong (蜜蜂).'},
    {zh:'气不打一处来',hv:'khí bất đả nhất xứ lai',vn:'tức sôi máu, giận không để đâu cho hết',note:'Câu nghe 6 của sách bài tập: 我就气不打一处来.'},
    {zh:'藏着掖着',hv:'tàng trước dịch trước',vn:'giấu giấu giếm giếm',note:'Câu nghe 8 của sách bài tập: 你就别藏着掖着了.'},
    {zh:'植树造林',hv:'thực thụ tạo lâm',vn:'trồng cây gây rừng',note:'Câu nghe 2: ngày 12/3 — Tết trồng cây của Trung Quốc.'}
  ],
  trap:[
    {zh:'根本',hv:'căn bản',vn:'hoàn toàn (không), tuyệt nhiên',
     warn:'BẪY: tiếng Việt "căn bản" = về cơ bản (≈ 基本). Phó từ 根本 thường đi với phủ định: 根本不知道 = hoàn toàn không biết, KHÔNG phải "về cơ bản không biết".'},
    {zh:'测验',hv:'trắc nghiệm',vn:'bài kiểm tra; đo thử',
     warn:'"Trắc nghiệm" tiếng Việt thường hiểu là thi chọn đáp án A/B/C/D. 测验 chỉ là bài kiểm tra / phép đo nói chung (数学测验, 心理测验).'},
    {zh:'玻璃',hv:'pha lê',vn:'thuỷ tinh, kính',
     warn:'"Pha lê" tiếng Việt là thuỷ tinh cao cấp (= 水晶). 玻璃 là kính cửa sổ, cốc thuỷ tinh bình thường.'},
    {zh:'开水',hv:'khai thuỷ',vn:'nước sôi, nước đun sôi',
     warn:'开 ở đây là "sôi" (水开了 = nước sôi rồi), không phải "mở". 凉开水 = nước đun sôi để nguội, không phải "nước lạnh".'},
    {zh:'抽',hv:'trừu',vn:'rút ra, hút, bơm',
     warn:'Đừng liên tưởng "trừu tượng" (抽象). 抽 là động tác cụ thể: 抽水 (bơm nước), 抽时间 (dành thời gian), 抽烟 (hút thuốc).'},
    {zh:'冒',hv:'mạo',vn:'bốc lên, toát ra; bất chấp',
     warn:'Không phải "mạo danh" hay "mạo muội". 冒汗 = toát mồ hôi, 冒烟 = bốc khói; "mạo hiểm" chỉ gần với 冒着危险.'},
    {zh:'片',hv:'phiến',vn:'tấm, lát, miếng; vùng',
     warn:'Không liên quan "phiến diện". 片 = vật mỏng dẹt (一片面包 = một lát bánh mì) hoặc một vùng rộng (一片树林 = một cánh rừng).'},
    {zh:'状况',hv:'trạng huống',vn:'tình trạng, tình hình',
     warn:'Tiếng Việt không dùng "trạng huống". Dịch là "tình trạng / tình hình": 身体状况 = tình trạng sức khoẻ.'},
    {zh:'荫凉',hv:'ấm lương',vn:'râm mát',
     warn:'荫 = bóng râm (như "bóng ấm"), 凉 = mát. Không phải "ấm áp". Còn viết 阴凉.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 152) + bài tập 3 + bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'缓解',right:'疲劳'},
  {left:'指挥',right:'军队'},
  {left:'补充',right:'营养'},
  {left:'遵守',right:'秩序'},
  {left:'大量',right:'吸收'},
  {left:'自动',right:'辞职'},
  {left:'歇',right:'一会儿'},
  {left:'恢复',right:'过来'},
  {left:'一壶',right:'开水'},
  {left:'一片',right:'草地'},
  {left:'一根',right:'管子'},
  {left:'一块',right:'玻璃'},
  {left:'控制',right:'情绪'},
  {left:'释放',right:'水汽'},
  {left:'身体',right:'状况'},
  {left:'供水',right:'系统'},
  {left:'公司',right:'内部'},
  {left:'生活',right:'常识'},
  {left:'营养',right:'成分'},
  {left:'特殊',right:'情况'},
  {left:'炎热的',right:'夏天'},
  {left:'放松',right:'肌肉'},
  {left:'进行',right:'测验'},
  {left:'蒸腾',right:'作用'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ — phủ đủ 35 từ mới
// ══════════════════════════════════════════
var fillData = [
  {pre:'这里的夏天十分',blank:'炎热',post:'，最高气温能达到四十度。',hint:'(nóng bức)',ans:'炎热'},
  {pre:'爬了两个小时山，大家都累了，咱们先',blank:'歇',post:'一会儿吧。',hint:'(nghỉ)',ans:'歇'},
  {pre:'感冒的时候，要多喝点儿',blank:'开水',post:'，多休息。',hint:'(nước đun sôi)',ans:'开水'},
  {pre:'运动完喝点儿温开水，可别吃',blank:'冰激凌',post:'什么的。',hint:'(kem)',ans:'冰激凌'},
  {pre:'运动以前不做准备活动，很容易拉伤',blank:'肌肉',post:'。',hint:'(cơ bắp)',ans:'肌肉'},
  {pre:'你昨天去看小兰了？她',blank:'恢复',post:'得怎么样？',hint:'(hồi phục)',ans:'恢复'},
  {pre:'南方的气候比较',blank:'湿润',post:'，北方比较干燥。',hint:'(ẩm)',ans:'湿润'},
  {pre:'太阳太晒了，我们找个',blank:'荫凉',post:'的地方坐一会儿吧。',hint:'(râm mát)',ans:'荫凉'},
  {pre:'早上八点，警察站在路口',blank:'指挥',post:'交通。',hint:'(điều khiển)',ans:'指挥'},
  {pre:'这份材料下午开会要用，你',blank:'赶快',post:'把它复印一下。',hint:'(mau)',ans:'赶快'},
  {pre:'这时所有',blank:'汗腺',post:'开始工作，汗水就从毛孔里冒了出来。',hint:'(tuyến mồ hôi)',ans:'汗腺'},
  {pre:'洗热水澡的时候，',blank:'毛孔',post:'会张开。',hint:'(lỗ chân lông)',ans:'毛孔'},
  {pre:'刚做好的包子还',blank:'冒',post:'着热气呢，快趁热吃吧。',hint:'(bốc lên)',ans:'冒'},
  {pre:'今天早上我只吃了两',blank:'片',post:'面包。',hint:'(lát)',ans:'片'},
  {pre:'植物用根吸收水分是大家都知道的',blank:'常识',post:'。',hint:'(điều thường thức)',ans:'常识'},
  {pre:'仙人掌的',blank:'根',post:'非常发达，一旦下雨就会大量吸收水分。',hint:'(rễ)',ans:'根'},
  {pre:'植物的根会',blank:'吸收',post:'养分和水分。',hint:'(hút)',ans:'吸收'},
  {pre:'孩子还小呢，你要',blank:'控制',post:'一下自己的情绪，别吓着他。',hint:'(kiềm chế)',ans:'控制'},
  {pre:'买饮料的时候，我会先看看它的营养',blank:'成分',post:'。',hint:'(thành phần)',ans:'成分'},
  {pre:'一只小鸟站在树',blank:'梢',post:'上唱歌。',hint:'(ngọn)',ans:'梢'},
  {pre:'水会顺着很细很细的',blank:'管子',post:'向上“爬”。',hint:'(ống)',ans:'管子'},
  {pre:'踢球的时候，他不小心把教室的一块',blank:'玻璃',post:'打碎了。',hint:'(kính)',ans:'玻璃'},
  {pre:'你这次',blank:'测验',post:'怎么样？——不太好，很多题我都没复习。',hint:'(bài kiểm tra)',ans:'测验'},
  {pre:'胡说！我',blank:'根本',post:'不认识他。',hint:'(hoàn toàn)',ans:'根本'},
  {pre:'冬天叶子都掉光了，只剩下光秃秃的',blank:'枝干',post:'。',hint:'(cành cây)',ans:'枝干'},
  {pre:'植物利用光合作用，',blank:'释放',post:'出氧气。',hint:'(giải phóng)',ans:'释放'},
  {pre:'办公室那台新复印机真不错，能',blank:'自动',post:'换纸、自动换页。',hint:'(tự động)',ans:'自动'},
  {pre:'运动以后要及时',blank:'补充',post:'水分。',hint:'(bổ sung)',ans:'补充'},
  {pre:'工作再忙，也要',blank:'抽',post:'时间陪陪父母。',hint:'(dành ra)',ans:'抽'},
  {pre:'因为跟',blank:'蒸腾',post:'作用有关，这种提升力被称为“蒸腾拉力”。',hint:'(thoát hơi nước)',ans:'蒸腾'},
  {pre:'如果没有',blank:'特殊',post:'原因，请不要请假。',hint:'(đặc biệt)',ans:'特殊'},
  {pre:'这份材料是',blank:'内部',post:'资料，不能带出办公室。',hint:'(nội bộ)',ans:'内部'},
  {pre:'要想学好汉语，就得',blank:'系统',post:'地学习语法。',hint:'(có hệ thống)',ans:'系统'},
  {pre:'医生问了问爷爷最近的身体',blank:'状况',post:'。',hint:'(tình trạng)',ans:'状况'},
  {pre:'目前人流量很大，请大家自觉遵守',blank:'秩序',post:'，排队进站。',hint:'(trật tự)',ans:'秩序'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (赶快 · 片 · 根本) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我下个月要搬家','，','得','赶快','找房子','。'],ans:'我下个月要搬家，得赶快找房子。',audio:'我下个月要搬家，得赶快找房子。'},
  {words:['一旦','温度上升','，','大脑','就会','指挥身体','赶快出汗','。'],ans:'一旦温度上升，大脑就会指挥身体赶快出汗。',audio:'一旦温度上升，大脑就会指挥身体赶快出汗。'},
  {words:['他看到要下雨了','，','赶快','把衣服','收了回来','。'],ans:'他看到要下雨了，赶快把衣服收了回来。',audio:'他看到要下雨了，赶快把衣服收了回来。'},
  {words:['请把','土豆','切成','片','。'],ans:'请把土豆切成片。',audio:'请把土豆切成片。'},
  {words:['秋风中','，','叶子','一片片地','掉落','下来','。'],ans:'秋风中，叶子一片片地掉落下来。',audio:'秋风中，叶子一片片地掉落下来。'},
  {words:['同学们听了','，','发出','一片','热烈的','欢呼声','。'],ans:'同学们听了，发出一片热烈的欢呼声。',audio:'同学们听了，发出一片热烈的欢呼声。'},
  {words:['其实','他是位盲人','，','根本','看不见','你的动作','。'],ans:'其实他是位盲人，根本看不见你的动作。',audio:'其实他是位盲人，根本看不见你的动作。'},
  {words:['毛细作用','根本','无法','把水分','送到','几十米高的地方','。'],ans:'毛细作用根本无法把水分送到几十米高的地方。',audio:'毛细作用根本无法把水分送到几十米高的地方。'},
  {words:['这个办法','不能','从根本上','解决','问题','。'],ans:'这个办法不能从根本上解决问题。',audio:'这个办法不能从根本上解决问题。'},
  {words:['玻璃管','越细','，','水','爬得','越高','。'],ans:'玻璃管越细，水爬得越高。',audio:'玻璃管越细，水爬得越高。'},
  {words:['植物的根','会','吸收','养分和水分','。'],ans:'植物的根会吸收养分和水分。',audio:'植物的根会吸收养分和水分。'},
  {words:['这种特殊的提升力','被称为','“蒸腾拉力”','。'],ans:'这种特殊的提升力被称为“蒸腾拉力”。',audio:'这种特殊的提升力被称为“蒸腾拉力”。'},
  {words:['我们','之所以','能在大树下','享受荫凉','，','是因为','大树在“出汗”','。'],ans:'我们之所以能在大树下享受荫凉，是因为大树在“出汗”。',audio:'我们之所以能在大树下享受荫凉，是因为大树在“出汗”。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这是你第几次错了？！怎么不____教训呢？',opts:['吸取','吸收','补充','控制'],ans:0,
   exp:'吸取教训 = rút ra bài học (kết hợp cố định) — bài tập 2 của sách. 吸收 dùng cho vật chất cụ thể (水分, 营养).'},
  {wrong:'植物的根会____养分和水分。',opts:['吸收','吸取','释放','补充'],ans:0,
   exp:'Hút vật chất cụ thể → 吸收. 吸取 chỉ đi với 教训 / 经验; 释放 là toả ra (ngược nghĩa).'},
  {wrong:'你太激动了，最好____一下你的情绪。',opts:['控制','限制','指挥','恢复'],ans:0,
   exp:'控制情绪 = kiềm chế cảm xúc. 限制 là đặt giới hạn (限制人数 / 时间) — bài tập 2 của sách.'},
  {wrong:'是他____提出要去参加这次比赛的。',opts:['主动','自动','赶快','根本'],ans:0,
   exp:'Người tự giác đề xuất trước → 主动提出. 自动 thiên về máy móc, sự vật tự vận hành — bài tập 2 của sách.'},
  {wrong:'今天的比赛____良好，没有球迷闹事。',opts:['秩序','规则','系统','成分'],ans:0,
   exp:'秩序良好 = trật tự tốt. 规则 là luật lệ (比赛规则), không nói 规则良好 — bài tập 2 của sách.'},
  {wrong:'我喜欢北京，____是北京的秋天。',opts:['特别','特殊','根本','赶快'],ans:0,
   exp:'特别是…… = nhất là (尤其是). 特殊 không có cách dùng này — phần 做一做 của sách.'},
  {wrong:'夏天运动后在大树下坐一会儿，喝口凉开水，____舒服。',opts:['特别','特殊','自动','根本'],ans:0,
   exp:'Phó từ đứng trước tính từ (= 格外舒服) → 特别. 特殊 chỉ là tính từ.'},
  {wrong:'一旦温度上升，大脑就会指挥我们的身体____出汗。',opts:['赶快','根本','特殊','自动'],ans:0,
   exp:'赶快 + V: mau chóng làm gì (câu bài khoá, 注释 1).'},
  {wrong:'瓶子里装着满满的石头、玻璃碎____和沙子。',opts:['片','根','块','管'],ans:0,
   exp:'碎片 = mảnh vỡ — 片 làm danh từ chỉ vật mỏng dẹt (注释 2).'},
  {wrong:'请帮我拿一____管子来。',opts:['根','片','块','壶'],ans:0,
   exp:'Vật dài, mảnh → lượng từ 根 / 支: 一根管子 (bảng 词语搭配).'},
  {wrong:'他不小心打碎了一____玻璃。',opts:['块','根','片','壶'],ans:0,
   exp:'一块玻璃 = một tấm kính (bảng 词语搭配, bài tập 3).'},
  {wrong:'妈妈烧了一____开水，给我们泡茶。',opts:['壶','片','根','块'],ans:0,
   exp:'一壶开水 = một ấm nước sôi (bảng 词语搭配, bài tập 3).'},
  {wrong:'这个办法只能救急，不能从____上解决问题。',opts:['根本','基本','特殊','内部'],ans:0,
   exp:'从根本上解决 = giải quyết từ gốc rễ (根本 danh từ — 注释 3).'},
  {wrong:'这项工作已经____完成了，只剩一点儿小问题。',opts:['基本','根本','自动','赶快'],ans:0,
   exp:'基本完成 = về cơ bản đã xong (vẫn còn chút việc). 根本完成 lại là "hoàn toàn xong", mâu thuẫn với 只剩一点儿小问题.'},
  {wrong:'叶子通过不停地向空气中____水汽，迫使树干中的水分前来补充。',opts:['释放','吸收','补充','抽'],ans:0,
   exp:'Lá toả hơi nước vào không khí → 释放水汽 (câu bài khoá).'},
  {wrong:'天一黑，路灯就____亮了。',opts:['自动','主动','赶快','根本'],ans:0,
   exp:'Sự vật tự vận hành, không cần người tác động → 自动.'},
  {wrong:'你的电脑太慢了，应该去给____做一下升级。',opts:['系统','秩序','状况','内部'],ans:0,
   exp:'给系统升级 = nâng cấp hệ thống (bài tập 1 của sách).'},
  {wrong:'警察站在路口____交通。',opts:['指挥','恢复','吸收','补充'],ans:0,
   exp:'指挥交通 = điều khiển giao thông (ảnh 热身 1 của sách).'},
  {wrong:'有时候，睡觉并不一定能缓解____。',opts:['疲劳','肌肉','常识','成分'],ans:0,
   exp:'缓解疲劳 = giảm mệt mỏi (bảng 词语搭配, bài tập 1 của sách).'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nếu cậu không kiềm chế được bản thân khỏi chơi điện thoại thì mau đưa nó cho mẹ giữ hộ đi.',zh:'如果你控制不住自己玩手机，就赶快把它交给妈妈保管吧。',py:'Rúguǒ nǐ kòngzhì bu zhù zìjǐ wán shǒujī, jiù gǎnkuài bǎ tā jiāo gěi māma bǎoguǎn ba.',goiY:['如果……就……','控制不住','赶快 + 把……'],giai:'赶快 là phó từ đứng TRƯỚC 把 và động từ (赶快把它交给……), không đặt sau động từ; 控制不住 = bổ ngữ khả năng "không kiềm chế được".'},
  {vi:'Học kỳ này cậu ấy gần như chẳng ôn bài gì cả, thảo nào bài kiểm tra lần này làm tệ như vậy.',zh:'他这学期根本没怎么复习，难怪这次测验考得这么差。',py:'Tā zhè xuéqī gēnběn méi zěnme fùxí, nánguài zhè cì cèyàn kǎo de zhème chà.',goiY:['根本没……','难怪','测验'],giai:'根本 + 没 / 不 là phó từ nhấn mạnh phủ định "hoàn toàn không"; nguyên nhân nói trước, 难怪 mở đầu vế kết quả.'},
  {vi:'Vì sáng chỉ ăn một lát bánh mì và uống một cốc nước đun sôi nên chưa đến mười giờ tớ đã đói rồi.',zh:'因为早上只吃了一片面包、喝了一杯开水，所以还不到十点我就饿了。',py:'Yīnwèi zǎoshang zhǐ chīle yí piàn miànbāo, hēle yì bēi kāishuǐ, suǒyǐ hái bú dào shí diǎn wǒ jiù è le.',goiY:['因为……所以……','一片面包','开水'],giai:'一片 + 面包 / 药: 片 là lượng từ cho vật mỏng; 开水 là nước đã đun sôi (có thể để nguội), không phải "nước đang sôi".'},
  {vi:'Trời oi bức thế này, thay vì tiếp tục đá bóng trên sân, chi bằng ra gốc cây nghỉ một lát, ăn cây kem.',zh:'天气这么炎热，与其在操场上继续踢球，不如去树下歇一会儿，吃个冰激凌。',py:'Tiānqì zhème yánrè, yǔqí zài cāochǎng shang jìxù tī qiú, bùrú qù shù xià xiē yíhuìr, chī ge bīngjīlíng.',goiY:['炎热','与其……不如……','歇','冰激凌'],giai:'与其 A 不如 B: bỏ A chọn B; 歇 = nghỉ (khẩu ngữ), hay đi với 一会儿 / 一歇; 炎热 chỉ thời tiết, không dùng cho đồ ăn.'},
  {vi:'Sau khi vận động mạnh, chỉ có kịp thời bổ sung nước và để cơ bắp được thả lỏng hoàn toàn thì thể lực mới hồi phục nhanh được.',zh:'剧烈运动以后，只有及时补充水分，让肌肉充分放松，体力才能尽快恢复。',py:'Jùliè yùndòng yǐhòu, zhǐyǒu jíshí bǔchōng shuǐfèn, ràng jīròu chōngfèn fàngsōng, tǐlì cái néng jǐnkuài huīfù.',goiY:['只有……才……','补充','肌肉','恢复'],giai:'只有……才…… nêu điều kiện bắt buộc, 才 đứng sau chủ ngữ vế cuối (体力才能……); 补充水分 = bổ sung nước, 恢复体力 = hồi phục thể lực.'},
  {vi:'Hiệu trưởng vừa tuyên bố lớp tớ giành chức vô địch, cả sân trường liền vang lên tiếng reo hò, kết quả là thầy cô mất mấy phút mới lập lại được trật tự.',zh:'校长一宣布我们班得了冠军，操场上就响起一片欢呼声，结果老师花了好几分钟才恢复秩序。',py:'Xiàozhǎng yì xuānbù wǒmen bān déle guànjūn, cāochǎng shang jiù xiǎngqǐ yí piàn huānhūshēng, jiéguǒ lǎoshī huāle hǎo jǐ fēnzhōng cái huīfù zhìxù.',goiY:['一……就……','一片欢呼声','结果','秩序'],giai:'一片 + 欢呼声 / 绿色: 片 dùng cho âm thanh, cảnh sắc bao trùm cả vùng — không dịch "một miếng"; 结果 dẫn ra kết quả thực tế đã xảy ra.'},
  {vi:'Một khi sức khoẻ có vấn đề thì phải mau đi khám bác sĩ, tuyệt đối đừng vì sợ lỡ việc học mà cố chịu đựng.',zh:'一旦身体状况出了问题，就要赶快去看医生，千万不能因为怕耽误学习而硬撑。',py:'Yídàn shēntǐ zhuàngkuàng chūle wèntí, jiù yào gǎnkuài qù kàn yīshēng, qiānwàn bù néng yīnwèi pà dānwu xuéxí ér yìng chēng.',goiY:['一旦……就……','状况','赶快','因为……而……'],giai:'要 + 赶快 + V: "phải mau…" (thúc giục vì tình thế gấp); 因为 A 而 B = "vì A mà B", 而 đứng trước động từ kết quả.'},
  {vi:'Mấu chốt để nâng cao thành tích không phải là thức khuya trước kỳ thi, mà là ngày thường chăm chỉ tiếp thu kiến thức trên lớp, như vậy mới giải quyết được vấn đề từ gốc rễ.',zh:'提高成绩的关键不是考前熬夜，而是平时认真吸收课堂上的知识，这样才能从根本上解决问题。',py:'Tígāo chéngjì de guānjiàn bú shì kǎo qián áoyè, ér shì píngshí rènzhēn xīshōu kètáng shang de zhīshi, zhèyàng cái néng cóng gēnběn shang jiějué wèntí.',goiY:['不是……而是……','熬夜','吸收','从根本上'],giai:'从根本上 + V = "từ gốc rễ, triệt để" (根本 là danh từ); 吸收 dùng cho kiến thức / dinh dưỡng, dịch "tiếp thu" — không dịch "hấp thụ" trong ngữ cảnh học tập.'},
  {vi:'Học ngữ pháp không thể chỉ dựa vào học vẹt, chỉ cần sắp xếp các quy tắc một cách có hệ thống, bổ sung thêm vài ví dụ đặc biệt là sẽ thấy nó hoàn toàn không khó đến thế.',zh:'学语法不能只靠死记硬背，只要有系统地整理规则，再补充一些特殊的例子，就会发现它根本没有那么难。',py:'Xué yǔfǎ bù néng zhǐ kào sǐjì-yìngbèi, zhǐyào yǒu xìtǒng de zhěnglǐ guīzé, zài bǔchōng yìxiē tèshū de lìzi, jiù huì fāxiàn tā gēnběn méiyǒu nàme nán.',goiY:['只要……就……','系统','特殊','根本没有'],giai:'只要……就…… nêu điều kiện đủ; 有系统地 + V = "một cách có hệ thống"; 根本没有那么难 = "hoàn toàn không khó đến thế".'},
  {vi:'Tuy bài tập nhiều nhưng ngày nào tớ cũng dành ra nửa tiếng để chạy bộ; vận động không chỉ giúp giải toả áp lực mà còn giúp lấy lại tinh thần, hiệu quả học tập ngược lại còn cao hơn.',zh:'虽然作业很多，但我每天还是会抽出半小时跑步；运动不但能释放压力，而且能恢复精神，学习效率反而更高了。',py:'Suīrán zuòyè hěn duō, dàn wǒ měi tiān háishi huì chōuchū bàn xiǎoshí pǎobù; yùndòng búdàn néng shìfàng yālì, érqiě néng huīfù jīngshén, xuéxí xiàolǜ fǎn\'ér gèng gāo le.',goiY:['抽出半小时','不但……而且……','释放压力','反而'],giai:'抽出 + thời gian = "dành ra, tranh thủ" (không dịch "rút ra"); 反而 chỉ kết quả trái với dự đoán: bớt thời gian học mà hiệu quả lại cao hơn.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Nếu mùa hè nóng bức đá bóng xong mà được vào nghỉ dưới bóng cây mát rượi thì thật không gì dễ chịu bằng.',zh:'如果炎热的夏天踢完球能到荫凉的大树下歇一歇，那真是再舒服不过了。',py:'Rúguǒ yánrè de xiàtiān tīwán qiú néng dào yīnliáng de dà shù xià xiē yi xiē, nà zhēn shì zài shūfu búguò le.',goiY:['如果……那…… = nếu… thì…','荫凉 = râm mát','歇一歇 = nghỉ một chút','再……不过了 = không gì… bằng'],giai:'再 + Adj + 不过了 là cách nói so sánh tuyệt đối "… nhất, không gì bằng"; 歇一歇 là động từ lặp lại, mang nghĩa "nghỉ một lát".'},
  {vi:'Sở dĩ chúng ta được hưởng bầu không khí ẩm mát dưới gốc cây là vì cây lớn cũng đang "đổ mồ hôi".',zh:'我们之所以能在大树下享受湿润荫凉，是因为大树也在“出汗”。',py:'Wǒmen zhīsuǒyǐ néng zài dà shù xià xiǎngshòu shīrùn yīnliáng, shì yīnwèi dà shù yě zài “chū hàn”.',goiY:['之所以……是因为…… = sở dĩ… là vì…','享受 = hưởng thụ','湿润 = ẩm ướt (dễ chịu)'],giai:'之所以 đặt sau chủ ngữ, nêu kết quả trước; 是因为 giải thích nguyên nhân — 湿润荫凉 dịch gộp "ẩm mát".'},
  {vi:'Một khi thân nhiệt tăng lên, não sẽ ra lệnh cho cơ thể mau đổ mồ hôi để hạ nhiệt.',zh:'一旦体温上升，大脑就会指挥身体赶快出汗来降低温度。',py:'Yídàn tǐwēn shàngshēng, dànǎo jiù huì zhǐhuī shēntǐ gǎnkuài chū hàn lái jiàngdī wēndù.',goiY:['一旦……就…… = một khi… thì…','指挥 = chỉ huy, ra lệnh','赶快 = mau chóng'],giai:'指挥 + đối tượng + V (câu kiêm ngữ) = "ra lệnh cho ai làm gì"; V1 + 来 + V2: V2 là mục đích của V1 (出汗来降低温度).'},
  {vi:'Khi người đổ mồ hôi, mọi tuyến mồ hôi đều bắt đầu làm việc, mồ hôi toát ra từ lỗ chân lông; còn "mồ hôi" của cây lại toát ra từ khí khổng trên phiến lá.',zh:'人出汗时所有汗腺都开始工作，汗水从毛孔里冒出来；而大树的“汗”却是从叶片的气孔里冒出来的。',py:'Rén chū hàn shí suǒyǒu hànxiàn dōu kāishǐ gōngzuò, hànshuǐ cóng máokǒng li mào chulai; ér dà shù de “hàn” què shì cóng yèpiàn de qìkǒng li mào chulai de.',goiY:['汗腺 = tuyến mồ hôi','毛孔 = lỗ chân lông','冒出来 = toát ra','却 = lại (đối lập)'],giai:'Dấu ； tách hai vế so sánh người – cây, 而……却…… nhấn mạnh sự khác biệt; 叶片 = N + 片 (phiến lá).'},
  {vi:'Cây lớn "đổ mồ hôi" không phải để hạ nhiệt độ mà là để vận chuyển chất dinh dưỡng và nước từ rễ lên tận ngọn cây.',zh:'大树“出汗”不是为了降低温度，而是为了把养分和水分从树根运输到树梢。',py:'Dà shù “chū hàn” bú shì wèile jiàngdī wēndù, ér shì wèile bǎ yǎngfèn hé shuǐfèn cóng shùgēn yùnshū dào shùshāo.',goiY:['不是……而是…… = không phải… mà là…','运输 = vận chuyển','树根 = rễ cây','树梢 = ngọn cây'],giai:'不是为了 A，而是为了 B: phủ định mục đích A, khẳng định mục đích B; 把 + O + 从 A 运输到 B = vận chuyển cái gì từ A đến B.'},
  {vi:'Rễ cây hút chất dinh dưỡng và nước, đó là kiến thức phổ thông; nhưng cây kiểm soát những thành phần này và đưa chúng lên tận ngọn bằng cách nào?',zh:'植物的根会吸收养分和水分，这是常识；可是植物是怎么控制这些成分并把它们送到树梢的呢？',py:'Zhíwù de gēn huì xīshōu yǎngfèn hé shuǐfèn, zhè shì chángshí; kěshì zhíwù shì zěnme kòngzhì zhèxiē chéngfèn bìng bǎ tāmen sòngdào shùshāo de ne?',goiY:['吸收 = hấp thụ','常识 = kiến thức phổ thông','控制 = kiểm soát','成分 = thành phần'],giai:'可是 chuyển từ điều ai cũng biết sang câu hỏi mới; 是怎么……的 nhấn mạnh cách thức — dịch "bằng cách nào".'},
  {vi:'Cái gọi là "hiện tượng mao dẫn" chính là nước sẽ "leo" lên theo những ống rất nhỏ; ống thuỷ tinh càng nhỏ thì nước leo càng cao.',zh:'所谓“毛细作用”，就是水会顺着很细的管子往上“爬”；玻璃管子越细，水爬升的高度就越高。',py:'Suǒwèi “máoxì zuòyòng”, jiù shì shuǐ huì shùnzhe hěn xì de guǎnzi wǎng shàng “pá”; bōli guǎnzi yuè xì, shuǐ páshēng de gāodù jiù yuè gāo.',goiY:['所谓……就是…… = cái gọi là… chính là…','管子 = ống','玻璃 = thuỷ tinh','越……越…… = càng… càng…'],giai:'所谓 A，就是 B dùng để giải thích một khái niệm; 越 A 越 B: B thay đổi theo A — 就 có thể đứng trước 越 thứ hai.'},
  {vi:'Ban đầu người ta cho rằng cây lớn hút nước nhờ hiện tượng mao dẫn, nhưng qua đo đạc tính toán thì thấy hiện tượng này hoàn toàn không thể đưa nước lên nơi cao mấy chục mét.',zh:'最初人们认为大树是靠毛细作用提水的，可是经过测验计算发现，它根本无法把水送到几十米高的地方。',py:'Zuìchū rénmen rènwéi dà shù shì kào máoxì zuòyòng tí shuǐ de, kěshì jīngguò cèyàn jìsuàn fāxiàn, tā gēnběn wúfǎ bǎ shuǐ sòngdào jǐ shí mǐ gāo de dìfang.',goiY:['最初 = lúc đầu','可是 = nhưng','测验 = đo thử, kiểm nghiệm','根本无法 = hoàn toàn không thể'],giai:'最初……可是…… đối lập nhận thức ban đầu với kết quả thực tế; 根本 + 无法 là phó từ nhấn mạnh "hoàn toàn không".'},
  {vi:'Phiến lá không ngừng thải hơi nước vào không khí, buộc nước trong cành và thân cây tự động dâng lên bù vào, nhờ đó nước mà rễ hút được "bị kéo" lên từng đoạn một.',zh:'叶片不停地向空气中释放水汽，迫使枝干里的水分自动前来补充，从而把树根吸收的水一节一节地“抽”了上来。',py:'Yèpiàn bù tíng de xiàng kōngqì zhōng shìfàng shuǐqì, pòshǐ zhīgàn li de shuǐfèn zìdòng qiánlái bǔchōng, cóng\'ér bǎ shùgēn xīshōu de shuǐ yì jié yì jié de “chōu” le shànglai.',goiY:['释放 = thải ra, toả ra','迫使 = buộc, ép','自动 = tự động','从而 = nhờ đó'],giai:'迫使 + đối tượng + V = "buộc ai/cái gì phải…"; 从而 dẫn ra kết quả cuối cùng, 抽上来 = hút/kéo lên (bổ ngữ xu hướng).'},
  {vi:'Lực nâng đặc biệt này có liên quan đến sự thoát hơi nước nên được gọi là "lực kéo thoát hơi nước"; nhưng hệ thống cấp nước bên trong cây tuân theo trật tự nào thì đến nay vẫn là một bí ẩn.',zh:'这种特殊的提升力跟蒸腾作用有关，所以叫“蒸腾拉力”；不过大树内部的供水系统遵守什么秩序，至今还是个谜。',py:'Zhè zhǒng tèshū de tíshēnglì gēn zhēngténg zuòyòng yǒuguān, suǒyǐ jiào “zhēngténg lālì”; búguò dà shù nèibù de gōngshuǐ xìtǒng zūnshǒu shénme zhìxù, zhìjīn hái shì ge mí.',goiY:['特殊 = đặc biệt','蒸腾 = thoát hơi nước','内部 = bên trong','系统 = hệ thống','秩序 = trật tự'],giai:'Vế sau 不过 là câu hỏi gián tiếp làm chủ ngữ (…遵守什么秩序) — dịch "tuân theo trật tự nào thì…"; 至今 = đến nay.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 我所知道的一种植物)
// ══════════════════════════════════════════
var writingData = {
  words:['特殊','根本','控制','吸收','补充'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "Một loài cây mà tôi biết", giới thiệu đặc điểm và cách sống của loài cây đó.',
  outline:[
    'Câu mở: giới thiệu tên loài cây và điểm đặc biệt của nó (dùng 特殊).',
    'Thân 1: môi trường sống khắc nghiệt — cây khác không sống nổi (dùng 根本).',
    'Thân 2: cây làm thế nào để giữ nước và lấy nước (dùng 控制, 吸收, 补充).',
    'Kết: cảm nghĩ của em về loài cây đó.'
  ],
  model:{
    zh:'我知道一种特殊的植物——仙人掌。它生长在干旱的沙漠里，那里常常几个月不下雨，一般的植物根本活不下去。仙人掌的叶子变成了小刺，能控制水分的蒸发；它的根非常发达，一下雨就能大量吸收水分，补充自己生长的需要。我觉得仙人掌就像一个坚强的人。',
    py:'Wǒ zhīdào yì zhǒng tèshū de zhíwù——xiānrénzhǎng. Tā shēngzhǎng zài gānhàn de shāmò li, nàli chángcháng jǐ ge yuè bú xià yǔ, yìbān de zhíwù gēnběn huó bu xiàqu. Xiānrénzhǎng de yèzi biànchéngle xiǎo cì, néng kòngzhì shuǐfèn de zhēngfā; tā de gēn fēicháng fādá, yí xià yǔ jiù néng dàliàng xīshōu shuǐfèn, bǔchōng zìjǐ shēngzhǎng de xūyào. Wǒ juéde xiānrénzhǎng jiù xiàng yí ge jiānqiáng de rén.',
    vn:'Tôi biết một loài cây đặc biệt — cây xương rồng. Nó sống trong sa mạc khô hạn, nơi đó thường mấy tháng liền không mưa, cây cối bình thường hoàn toàn không sống nổi. Lá xương rồng đã biến thành những chiếc gai nhỏ, có thể kiểm soát sự bốc hơi nước; rễ của nó rất phát triển, hễ trời mưa là có thể hút một lượng nước lớn, bổ sung cho nhu cầu sinh trưởng của mình. Tôi thấy cây xương rồng giống như một con người kiên cường.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '根本 có đứng TRƯỚC từ phủ định không (根本不 / 根本没 / 根本无法 — không viết 不根本)?',
    '特殊 chỉ làm tính từ (特殊的植物); muốn nói "rất, nhất là" thì dùng 特别 chưa?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，以“我所知道的一种植物”为题，介绍一种你了解的植物。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'特殊', loai:'tính từ', cach:'特殊 + 的 + N (特殊的植物 / 特殊情况) · N + 很 / 比较 + 特殊',
     sai:[{re:'特殊(喜欢|好|高兴|漂亮|舒服|感谢|重要)', sua:'特别 + tính từ / động từ', giai:'特殊 chỉ là tính từ, không làm phó từ. "Rất / đặc biệt …" dùng 特别: 特别喜欢, 特别舒服.'},
          {re:'特殊是', sua:'特别是 / 尤其是', giai:'"Nhất là …" là 特别是 / 尤其是, không nói 特殊是.'}]},
    {tu:'根本', loai:'phó từ', cach:'根本 + 不 / 没 / 无法 + V · 从根本上 + V',
     sai:[{re:'(不|没)根本', sua:'根本不 / 根本没', giai:'根本 đứng TRƯỚC từ phủ định: 根本不知道, 根本没见过.'},
          {re:'根本(能|会|可以)', sua:'根本不能 / 根本不会 / 根本无法', giai:'Phó từ 根本 với nghĩa "hoàn toàn" thường đi với phủ định; câu khẳng định dễ thành sai nghĩa.', nhe:true}]},
    {tu:'控制', loai:'động từ', cach:'控制 + 情绪 / 体重 / 水分 / 速度 · 控制不住',
     sai:[{re:'限制(情绪|自己的情绪|体重)', sua:'控制情绪 / 控制体重', giai:'Cảm xúc, cân nặng là thứ phải "kiềm chế, kiểm soát" → 控制. 限制 là đặt giới hạn (限制人数 / 时间).'},
          {re:'不控制住', sua:'控制不住', giai:'Bổ ngữ khả năng phủ định: V + 不 + 住 → 控制不住.'}]},
    {tu:'吸收', loai:'động từ', cach:'吸收 + 水分 / 营养 / 知识 · 大量 / 有效 + 吸收',
     sai:[{re:'吸收了?教训', sua:'吸取教训', giai:'Rút ra bài học là 吸取教训; 吸收 dùng cho vật chất (水分, 营养) hoặc kiến thức.'},
          {re:'吸取(水分|营养|养分)', sua:'吸收水分 / 营养', giai:'Nước, dinh dưỡng → 吸收. 吸取 chỉ đi với 教训 / 经验.'}]},
    {tu:'补充', loai:'động từ', cach:'补充 + 水分 / 营养 / 信息 · 补充材料',
     sai:[{re:'(增加|添加)补充', sua:'补充', giai:'补充 đã có nghĩa "thêm vào chỗ thiếu", không ghép thêm 增加 / 添加.'},
          {re:'补充[^，。]{0,2}(疲劳|休息)', sua:'缓解疲劳 / 好好休息', giai:'Không nói 补充疲劳; mệt thì 缓解疲劳, 恢复体力.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'赶快 + V', nhan:'赶快', vd:'天一热，大脑就指挥身体赶快出汗。', khi:'Kể một phản ứng nhanh, cấp bách.'},
    {ten:'一片 + N', nhan:'片', vd:'下过雨后，沙漠里出现了一片绿色。', khi:'Miêu tả cảnh (一片树林 / 草地 / 天空).'},
    {ten:'根本 + 不 / 没 / 无法 + V', nhan:'根本', vd:'一般的植物在沙漠里根本活不下去。', khi:'Nhấn mạnh "hoàn toàn không" — làm nổi bật điều kiện khắc nghiệt.'},
    {ten:'一旦……，就……', nhan:'一旦', vd:'一旦下雨，它的根就会大量吸收水分。', khi:'Nêu điều kiện — kết quả.'},
    {ten:'之所以……，是因为……', nhan:'之所以', vd:'仙人掌之所以能在沙漠里生长，是因为它很会控制水分。', khi:'Giải thích nguyên nhân (cấu trúc của bài khoá).'},
    {ten:'不是为了……，而是为了……', nhan:'而是', vd:'大树出汗不是为了降低温度，而是为了运输养分。', khi:'Đính chính một cách hiểu sai (ôn HSK 4).'},
    {ten:'越……越……', nhan:'越', vd:'天气越热，叶子释放的水汽就越多。', khi:'Hai mức độ tăng cùng nhau (ôn HSK 4).'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 của sách bài tập + câu bài khoá)
  sapXep:[
    {manh:['有可能','吃什么食物','缓解疲劳？'],
     dap:'吃什么食物有可能缓解疲劳？',
     vn:'Ăn thức ăn gì có thể giảm mệt mỏi?',
     giai:'Chủ ngữ là cụm động từ 吃什么食物 + 有可能 + 缓解疲劳. Câu 29 sách bài tập.'},
    {manh:['交来的','这是他','补充材料','上次面试后'],
     dap:'这是他上次面试后交来的补充材料。',
     vn:'Đây là tài liệu bổ sung anh ấy nộp sau lần phỏng vấn trước.',
     giai:'这是 + định ngữ dài (他上次面试后交来的) + 补充材料. Câu 30 sách bài tập.'},
    {manh:['是大家都知道的','植物用根','常识','吸收水分'],
     dap:'植物用根吸收水分是大家都知道的常识。',
     vn:'Cây dùng rễ để hút nước là điều ai cũng biết.',
     giai:'Chủ ngữ là cụm 植物用根吸收水分 + 是 + 大家都知道的常识. Câu 31 sách bài tập.'},
    {manh:['根本无法','毛细作用','把水分','送到树梢'],
     dap:'毛细作用根本无法把水分送到树梢。',
     vn:'Hiện tượng mao dẫn hoàn toàn không thể đưa nước lên ngọn cây.',
     giai:'根本无法 đứng trước câu 把: 根本无法 + 把水分 + 送到…….'},
    {manh:['赶快','大脑会','出汗','指挥身体'],
     dap:'大脑会指挥身体赶快出汗。',
     vn:'Não sẽ ra lệnh cho cơ thể mau chóng đổ mồ hôi.',
     giai:'指挥 + 身体 + 赶快出汗: 赶快 đứng trước động từ 出汗.'},
    {manh:['被称为','这种','特殊的提升力','“蒸腾拉力”'],
     dap:'这种特殊的提升力被称为“蒸腾拉力”。',
     vn:'Lực nâng đặc biệt này được gọi là "lực kéo thoát hơi nước".',
     giai:'Câu 被 không có tác nhân: chủ ngữ + 被称为 + tên gọi.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 植物的功能
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (植物的功能 · chức năng của thực vật). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 吸收 · 释放 · 特殊 · 根本 · 补充 · 恢复 · 荫凉 · 湿润.',
  questions:[
    {q_zh:'你喜欢什么样的植物？为什么？',
     q_vn:'Em thích loại cây nào? Vì sao?',
     hint:'Nêu tên cây + 1–2 đặc điểm, dùng 特殊 / 片',
     sample:'我喜欢竹子。竹子长得特别快，一片竹林又绿又荫凉，夏天在里面散步很舒服。而且竹子很特殊，中间是空的，却非常结实。',
     sample_vn:'Em thích cây tre. Tre mọc rất nhanh, một rừng tre vừa xanh vừa râm mát, mùa hè đi dạo trong đó rất dễ chịu. Hơn nữa tre rất đặc biệt, ruột rỗng mà lại rất chắc.',
     note:'Câu hỏi 1 của sách. Chú ý: 特别快 (phó từ) nhưng 很特殊 (tính từ).'},
    {q_zh:'在你的国家最常见或最有名的植物是什么？',
     q_vn:'Ở đất nước em, loài cây phổ biến hoặc nổi tiếng nhất là gì?',
     hint:'Giới thiệu cây (tre / sen / lúa…) và ý nghĩa của nó',
     sample:'在越南，最有名的植物是荷花和竹子。荷花生长在泥里，却非常干净美丽；竹子代表越南人坚强的性格，很多村子四周都种着一片片竹林。',
     sample_vn:'Ở Việt Nam, loài cây nổi tiếng nhất là hoa sen và cây tre. Sen mọc trong bùn mà vẫn rất sạch đẹp; tre tượng trưng cho tính cách kiên cường của người Việt, quanh nhiều làng quê đều trồng những rặng tre.',
     note:'Câu hỏi 2 của sách. 一片片竹林 — lặp lượng từ 片 để tả "từng rặng, khắp nơi".'},
    {q_zh:'在你的生活中，植物起了什么作用？',
     q_vn:'Trong cuộc sống của em, cây cối có tác dụng gì?',
     hint:'Nói 2–3 tác dụng, dùng 释放 / 吸收 / 荫凉',
     sample:'植物的作用很大。它们能吸收二氧化碳，释放出氧气；夏天大树下又湿润又荫凉；我们吃的米饭、水果也都来自植物。如果没有植物，我们根本无法生存。',
     sample_vn:'Cây cối có tác dụng rất lớn. Chúng hấp thụ khí CO2, giải phóng ô-xy; mùa hè dưới gốc cây vừa ẩm mát vừa râm; cơm, hoa quả chúng ta ăn cũng đều từ thực vật. Nếu không có cây, chúng ta hoàn toàn không thể sống được.',
     note:'Câu hỏi 3 của sách. Liệt kê bằng dấu chấm phẩy, kết bằng 根本无法 để nhấn mạnh.'},
    {q_zh:'夏天运动以后，你常常用什么办法降温？效果怎么样？',
     q_vn:'Mùa hè vận động xong, em thường hạ nhiệt bằng cách nào? Hiệu quả thế nào?',
     hint:'Theo bài 热身 2 của sách — nêu cách, ưu điểm, nhược điểm; dùng 歇 / 补充 / 恢复',
     sample:'我一般先到树下歇一会儿，喝点儿凉开水补充水分。这个办法对身体好，很快就能恢复体力。以前我喜欢吃冰激凌，虽然降温很快，但是对健康不利。',
     sample_vn:'Em thường ra gốc cây nghỉ một lát trước, uống chút nước đun sôi để nguội bổ sung nước. Cách này tốt cho sức khoẻ, rất nhanh lấy lại sức. Trước đây em thích ăn kem, tuy hạ nhiệt nhanh nhưng không tốt cho sức khoẻ.',
     note:'Nội dung bảng 热身 2 của sách (降温的办法 · 优点 · 缺点). Dùng 虽然……但是…… để nêu ưu–nhược.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 35.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第35课 听力',
  items: [
    {n:1,
     lines:[{sp:'男',zh:'天气太热了，踢个十分钟就快受不了了，我得去那棵树下面歇歇。'},
            {sp:'女',zh:'喝点儿温开水，可别吃冰激凌什么的。'}],
     q:'女的有什么建议？',qvn:'Người phụ nữ đưa ra lời khuyên gì?',
     opts:['去树下歇歇','吃个冰激凌','喝点儿温开水','别再踢球了'],ans:2,
     why:'Người nữ nói 喝点儿温开水，可别吃冰激凌. "去树下歇歇" là ý định của người nam — bẫy.',
     words:['歇','开水','冰激凌']},

    {n:2,
     lines:[{sp:'男',zh:'中国的植树节是哪天？'},
            {sp:'女',zh:'3月12号，这是孙中山先生逝世的日子，他一直提倡植树造林。'}],
     q:'中国的植树节为什么是3月12号？',qvn:'Vì sao Tết trồng cây của Trung Quốc là ngày 12/3?',
     opts:['那天天气最适合种树','那天是春天的第一天','那天是孙中山先生的生日','那天是孙中山先生逝世的日子'],ans:3,
     why:'这是孙中山先生逝世的日子 — ngày mất (逝世), không phải ngày sinh.',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'你昨天去看小兰了？她恢复得怎么样？'},
            {sp:'男',zh:'挺好的，再过两天就可以出院了。'}],
     q:'从对话中可以知道什么？',qvn:'Từ đoạn hội thoại có thể biết điều gì?',
     opts:['男的昨天没去看小兰','小兰恢复得挺好','小兰今天就出院','小兰的病越来越重'],ans:1,
     why:'她恢复得怎么样？——挺好的 → Tiểu Lan hồi phục tốt. 再过两天 mới xuất viện, không phải hôm nay.',
     words:['恢复']},

    {n:4,
     lines:[{sp:'男',zh:'办公室那台新复印机真不错！'},
            {sp:'女',zh:'是啊，能自动换纸、自动换页，还能自动装订呢！'}],
     q:'他们在谈论什么？',qvn:'Họ đang bàn về cái gì?',
     opts:['办公室','一本书','复印机','装订的方法'],ans:2,
     why:'那台新复印机真不错 — cả đoạn nói về máy photo; 换纸, 换页, 装订 là chức năng của máy.',
     words:['自动']},

    {n:5,
     lines:[{sp:'女',zh:'明天的活动很重要，你们都不要淘气啊！'},
            {sp:'男',zh:'老师，保证一切行动听指挥！'}],
     q:'男的是什么意思？',qvn:'Ý người nam là gì?',
     opts:['明天的活动不重要','他们明天不参加活动','他想当活动的指挥','他们会听老师的话'],ans:3,
     why:'保证一切行动听指挥 = đảm bảo mọi hành động nghe theo chỉ huy → sẽ nghe lời cô giáo.',
     words:['指挥']},

    {n:6,
     lines:[{sp:'男',zh:'孩子还小呢，你要控制一下自己的情绪，别吓着他。'},
            {sp:'女',zh:'每次看到他这样，我就气不打一处来。'}],
     q:'女的怎么了？',qvn:'Người phụ nữ làm sao?',
     opts:['很害怕','很难过','很生气','很累'],ans:2,
     why:'气不打一处来 = tức sôi máu; người nam cũng khuyên 控制一下自己的情绪.',
     words:['控制']},

    {n:7,
     lines:[{sp:'女',zh:'大树是通过毛细作用来提水的吗？'},
            {sp:'男',zh:'以前大家都认为是，但现在人们发现是蒸腾拉力在起作用。'},
            {sp:'女',zh:'那具体是怎么运转的呢？'},
            {sp:'男',zh:'这一点到目前还是个谜。'}],
     q:'关于蒸腾拉力，下列哪项正确？',qvn:'Về lực kéo thoát hơi nước, câu nào sau đây đúng?',
     opts:['它是毛细作用的一种','人们很早就发现了它','它具体怎么运转还是个谜','它对大树提水没有作用'],ans:2,
     why:'那具体是怎么运转的呢？——这一点到目前还是个谜. Đúng nội dung đoạn cuối bài khoá.',
     words:['蒸腾']},

    {n:8,
     lines:[{sp:'男',zh:'你跟小刘谈恋爱了？'},
            {sp:'女',zh:'胡说！我根本不认识他。'},
            {sp:'男',zh:'你就别藏着掖着了，我都没说是哪个小刘，你就说不认识。'},
            {sp:'女',zh:'反正不管哪个小刘，都不是我男朋友。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['她认识两个小刘','她正在跟小刘谈恋爱','她想认识小刘','她没有跟小刘谈恋爱'],ans:3,
     why:'不管哪个小刘，都不是我男朋友 → cô ấy khẳng định không yêu Tiểu Lưu nào cả.',
     words:['根本']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Em trai vẫn đang chơi game, trong khi vé tàu về quê ngày mai chưa đặt.',
     a:{sp:'Mẹ',zh:'你怎么还在玩儿游戏？火车票预定了吗？',vn:'Sao con vẫn còn chơi game? Vé tàu đặt chưa?'},
     need:['Dùng 赶快','Hứa sẽ làm ngay'],
     sample:'还没呢，我这就赶快在网上订。',
     samplePy:'Hái méi ne, wǒ zhè jiù gǎnkuài zài wǎngshang dìng.',
     sampleVn:'Chưa ạ, con đặt trên mạng ngay đây.',
     tip:'赶快 + V: làm ngay, gấp. Bài 练一练 (3) của 注释 1.'},

    {scene:'Em và bạn hẹn nhau đi xem phim, bạn vẫn đang chậm chạp chọn quần áo.',
     a:{sp:'Bạn',zh:'别急，我再换一件衣服。',vn:'Đừng vội, để mình thay thêm một bộ nữa.'},
     need:['Dùng 赶快','Nêu hậu quả nếu chậm'],
     sample:'你赶快换好衣服吧，要不该赶上堵车了，电影七点就开始了。',
     samplePy:'Nǐ gǎnkuài huànhǎo yīfu ba, yàobù gāi gǎnshang dǔchē le, diànyǐng qī diǎn jiù kāishǐ le.',
     sampleVn:'Cậu mau thay đồ đi, không thì lại gặp tắc đường đấy, bảy giờ phim đã chiếu rồi.',
     tip:'……赶快……，要不…… — thúc giục + hậu quả. Bài 练一练 (1) của 注释 1.'},

    {scene:'Em cùng mẹ nấu ăn, em nhận phần thái khoai tây.',
     a:{sp:'Mẹ',zh:'我来切菜吧，土豆怎么切？',vn:'Để mẹ thái rau, khoai tây thái thế nào?'},
     need:['Dùng 片 (danh từ)','Nói cách thái'],
     sample:'切成薄片吧，炒出来比较好吃。',
     samplePy:'Qiēchéng báo piàn ba, chǎo chulai bǐjiào hǎochī.',
     sampleVn:'Thái thành lát mỏng mẹ ạ, xào lên ngon hơn.',
     tip:'切成片 / 薄片 — 片 làm danh từ. Bài 练一练 (1) của 注释 2.'},

    {scene:'Bạn cùng phòng bị cảm, cầm hộp thuốc hỏi em cách uống.',
     a:{sp:'Bạn',zh:'这药怎么吃？',vn:'Thuốc này uống thế nào?'},
     need:['Dùng 片 (lượng từ)','Nói liều lượng'],
     sample:'一天三次，一次两片，饭后吃。',
     samplePy:'Yì tiān sān cì, yí cì liǎng piàn, fàn hòu chī.',
     sampleVn:'Ngày ba lần, mỗi lần hai viên, uống sau khi ăn.',
     tip:'一次 + số + 片: 片 làm lượng từ cho viên thuốc dẹt. Bài 练一练 (3) của 注释 2.'},

    {scene:'Bạn hỏi ý kiến em về lời của một người mà em thấy hoàn toàn vô lý.',
     a:{sp:'Bạn',zh:'你觉得他说的话有道理吗？',vn:'Cậu thấy lời anh ta nói có lý không?'},
     need:['Dùng 根本','Nêu lý do'],
     sample:'他说的根本没有道理，他连事情的经过都不了解。',
     samplePy:'Tā shuō de gēnběn méiyǒu dàolǐ, tā lián shìqing de jīngguò dōu bù liǎojiě.',
     sampleVn:'Anh ta nói hoàn toàn chẳng có lý gì, anh ta còn chẳng hiểu sự việc diễn ra thế nào.',
     tip:'根本 + 没有 / 不 — phủ định hoàn toàn. Bài 练一练 (1) của 注释 3.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Bài giới thiệu khoa học trong sách giáo khoa Sinh học.',
     a:'植物通过叶片释放水汽，产生蒸腾拉力，从而把根部吸收的水分运输到树梢。',b:'树叶一直往外冒水，就把下面的水给拉上去了。',better:'a',
     why:'Văn bản khoa học cần thuật ngữ chính xác, văn viết: 释放水汽, 蒸腾拉力, 从而, 运输. Câu b là lời giải thích miệng cho em nhỏ.'},

    {scene:'Đá bóng xong, em rủ bạn thân ra gốc cây nghỉ.',
     a:'累死了，走，到那棵树下歇一会儿！',b:'我们需要到荫凉处休息片刻，以便恢复体力。',better:'a',
     why:'Với bạn thân, câu a tự nhiên (累死了, 走, 歇一会儿). Câu b giống lời hướng dẫn trong tài liệu y tế (以便, 片刻, 恢复体力).'},

    {scene:'Loa thông báo ở nhà ga lúc đông khách.',
     a:'目前人流量很大，请大家自觉遵守秩序，排队进站。',b:'人太多了，大家别挤啊，排好队！',better:'a',
     why:'Thông báo công cộng dùng văn trang trọng: 目前, 人流量, 自觉遵守秩序. Câu b giống tiếng hô của một người đứng xếp hàng.'},

    {scene:'Em nhắc em trai đang mải chơi mà sắp muộn học.',
     a:'快七点了，赶快走吧，要迟到了！',b:'鉴于时间紧迫，建议你尽快出发。',better:'a',
     why:'Nói với em trong nhà, câu a ngắn gọn, tự nhiên. Câu b (鉴于, 紧迫, 建议) giống văn bản công vụ.'},

    {scene:'Bạn hỏi em có quen người mà bạn đồn là "người yêu" em không. Em muốn phủ nhận nhưng vẫn giữ lịch sự.',
     a:'没有的事，我跟他根本不熟。',b:'胡说八道！你脑子有问题吧！',better:'a',
     why:'Câu a phủ nhận dứt khoát (根本不熟) mà vẫn lịch sự. Câu b đúng ngữ pháp nhưng thô lỗ, dễ gây cãi nhau.'},

    {scene:'Nhãn trên hộp sữa ghi thông tin sản phẩm.',
     a:'本产品含有多种营养成分，易于吸收。',b:'这个牛奶里有好多有营养的东西，喝了很容易吸收。',better:'a',
     why:'Nhãn sản phẩm dùng văn viết ngắn gọn: 本产品, 含有, 营养成分, 易于. Câu b là khẩu ngữ, như lời người bán hàng giới thiệu.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 154)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Sau khi vận động (运动之后)', cue:'炎热的夏天，踢完球赛……如果能到大树下……，可以很快……', words:['炎热','歇','开水','冰激凌','肌肉','恢复']},
    {step:'Vì sao dưới gốc cây mát (大树下的湿润荫凉)', cue:'我们之所以能在大树下享受……，也是因为……', words:['湿润','荫凉']},
    {step:'Người đổ mồ hôi và cây "đổ mồ hôi" (人出汗与大树“出汗”)', cue:'一旦温度上升，大脑就会……；大树出的“汗”……，不是为了……，而是为了……', words:['指挥','赶快','汗腺','毛孔','冒','片']},
    {step:'Câu hỏi: nước lên ngọn cây bằng cách nào? (大树怎么“出汗” ①)', cue:'植物的根会……，但是植物是怎么……的呢？', words:['常识','根','吸收','控制','成分','梢']},
    {step:'Hiện tượng mao dẫn không giải thích được (大树怎么“出汗” ②)', cue:'最初人们认为……。可是，经过……发现，……根本无法……', words:['管子','玻璃','测验','根本']},
    {step:'Lực kéo thoát hơi nước — một bí ẩn (大树怎么“出汗” ③)', cue:'实际上，大树利用的是……。叶子……，这种……被称为……。不过，……到目前还是个谜。', words:['枝干','释放','自动','补充','抽','蒸腾','特殊','内部','系统','状况','秩序']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: sau khi vận động → người đổ mồ hôi và cây "đổ mồ hôi" → cây "đổ mồ hôi" như thế nào?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng các từ khoá sách cho: 歇, 肌肉, 恢复, 湿润, 指挥, 赶快, 片, 吸收, 控制, 管子, 根本, 自动, 特殊, 状况, 秩序 không?',
    'Có dùng đúng 赶快 (赶快出汗), 根本 (根本无法……) và các cấu trúc 之所以……是因为……, 不是为了……而是为了…… không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 153) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài này sách không có dạng 给括号里的词选择适当的位置)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['测验','根本','内部','疲劳','系统','自动'],
   cau:[
     {s:'有时候，睡觉并不一定能缓解＿＿。', dap:['疲劳']},
     {s:'你的电脑太慢了，应该去给＿＿做一下升级。', dap:['系统']},
     {s:'其实他是位盲人，＿＿看不见你的动作。', dap:['根本']},
     {s:'楼下新装了一台＿＿售货机。', dap:['自动']},
     {s:'一位心理学家找来两个7岁的孩子进行一项心理＿＿。', dap:['测验']},
     {s:'这是我们公司＿＿的问题，我们自己来解决吧。', dap:['内部']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'这是你第几次错了？！怎么不＿＿教训呢？', opts:['吸取','吸收'], ans:0, giai:'吸取教训 = rút ra bài học — kết hợp cố định. 吸收 dùng cho vật chất cụ thể (吸收水分 / 营养) hoặc kiến thức.'},
     {s:'你太激动了，最好＿＿一下你的情绪。', opts:['限制','控制'], ans:1, giai:'Cảm xúc cần được kiềm chế → 控制情绪. 限制 là đặt ra giới hạn về số lượng, phạm vi (限制人数, 限制时间).'},
     {s:'是他＿＿提出要去参加这次比赛的。', opts:['自动','主动'], ans:1, giai:'Người tự giác đề xuất trước, không cần ai bảo → 主动提出. 自动 thiên về máy móc, sự vật tự vận hành (自动售货机).'},
     {s:'今天的比赛＿＿良好，没有球迷闹事。', opts:['秩序','规则'], ans:0, giai:'秩序良好 = trật tự tốt (không ai gây rối). 规则 là luật lệ (比赛规则), không nói 规则良好.'}
   ]}
];
