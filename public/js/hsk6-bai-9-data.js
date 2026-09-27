// ══════════════════════════════════════════
// DATA — HSK6 Bài 9: 不用手机的日子 (Một ngày không sử dụng điện thoại di động)
// 第三单元 多彩社会 · Nguồn: HSK标准教程6上 (tr. 96–106)
// Bài khoá: 不用手机的日子 (844 chữ) — 改编自《北京晚报》文章《不用手机的一天》，作者：珠珠侠
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'正经',py:'zhèngjing',pos:'Tính từ',vn:'đứng đắn, nghiêm chỉnh, chính đáng',hv:'chính kinh',em:'🧐',lesson:1,
   explain:['Đứng đắn, nghiêm túc (thái độ, cử chỉ): 假装正经 = giả vờ nghiêm túc.','Còn nghĩa chính đáng, đàng hoàng: 正经事 (việc nghiêm túc), 正经工作 (công việc đàng hoàng).'],
   usage:'假装正经 · 一本正经 (nghiêm trang, thường hơi mỉa) · 正经事 / 正经工作. Khẩu ngữ đọc zhèngjing (经 thanh nhẹ).',
   collo:['假装正经','正经事','一本正经','正经工作'],
   ex_zh:'开会时老板火了：“别假装正经了，我知道你们都在玩儿手机。”',ex_py:'Kāihuì shí lǎobǎn huǒ le: “Bié jiǎzhuāng zhèngjing le, wǒ zhīdào nǐmen dōu zài wánr shǒujī.”',ex_vn:'Lúc họp sếp nổi nóng: "Đừng giả vờ nghiêm túc nữa, tôi biết các cậu đều đang nghịch điện thoại."',
   exList:[
     {zh:'开会时老板火了：“别假装正经了，我知道你们都在玩儿手机。”',py:'Kāihuì shí lǎobǎn huǒ le: “Bié jiǎzhuāng zhèngjing le, wǒ zhīdào nǐmen dōu zài wánr shǒujī.”',vn:'Lúc họp sếp nổi nóng: "Đừng giả vờ nghiêm túc nữa, tôi biết các cậu đều đang nghịch điện thoại."'},
     {zh:'别开玩笑了，咱们说点儿正经事吧。',py:'Bié kāi wánxiào le, zánmen shuō diǎnr zhèngjing shì ba.',vn:'Đừng đùa nữa, chúng ta nói chuyện nghiêm túc đi.'},
     {zh:'他一本正经地讲了个笑话，大家都笑得要命。',py:'Tā yìběn-zhèngjīng de jiǎngle ge xiàohua, dàjiā dōu xiào de yào mìng.',vn:'Anh ấy làm mặt nghiêm trang kể một câu chuyện cười, mọi người cười muốn chết.'}
   ],
   colloFull:[
     {zh:'假装正经',py:'jiǎzhuāng zhèngjing',vn:'giả vờ nghiêm túc'},
     {zh:'正经事',py:'zhèngjing shì',vn:'việc nghiêm túc, việc đàng hoàng'},
     {zh:'一本正经',py:'yìběn-zhèngjīng',vn:'nghiêm trang, ra vẻ nghiêm túc'},
     {zh:'正经工作',py:'zhèngjing gōngzuò',vn:'công việc đàng hoàng'},
     {zh:'不正经',py:'bú zhèngjing',vn:'không đứng đắn'}
   ],
   patterns:[
     {s:'假装 / 一本 + 正经',m:'Ra vẻ nghiêm túc'},
     {s:'正经 + N (事 / 工作)',m:'Việc / công việc đàng hoàng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thay vì ngày nào cũng chơi game, chi bằng tìm một công việc đàng hoàng.',answer:'与其天天玩儿游戏，不如找一份正经工作。',answerPy:'Yǔqí tiāntiān wánr yóuxì, bùrú zhǎo yí fèn zhèngjing gōngzuò.',
      note:'与其 A 不如 B: người nói chọn B; lượng từ của 工作 là 份.',pair:'与其……不如……'},
     {promptLang:'vi',prompt:'Anh ấy tuy bình thường hay đùa, nhưng lúc làm việc thì rất nghiêm túc.',answer:'他虽然平时爱开玩笑，但是工作的时候很正经。',answerPy:'Tā suīrán píngshí ài kāi wánxiào, dànshì gōngzuò de shíhou hěn zhèngjing.',
      note:'虽然……但是…… nhượng bộ – chuyển ý; 正经 làm vị ngữ, có thể có 很.',pair:'虽然……但是……'}
   ]},

  {n:2,zh:'玩意儿',py:'wányìr',pos:'Danh từ',vn:'đồ chơi; đồ vật, cái thứ (khẩu ngữ)',hv:'ngoạn ý nhi',em:'🧸',lesson:1,
   explain:['Nghĩa gốc: đồ chơi (小孩儿的玩意儿).','Khẩu ngữ: chỉ đồ vật, "cái thứ đó", thường hàm ý coi nhẹ, bực bội: 那玩意儿就那么好玩儿?'],
   usage:'Khẩu ngữ, hay dùng 那玩意儿 / 这玩意儿 / 什么玩意儿. Không dùng trong văn viết trang trọng.',
   collo:['那玩意儿','小玩意儿','什么玩意儿'],
   ex_zh:'我知道你们都在玩儿手机，那玩意儿就那么好玩儿？',ex_py:'Wǒ zhīdào nǐmen dōu zài wánr shǒujī, nà wányìr jiù nàme hǎowánr?',ex_vn:'Tôi biết các cậu đều đang nghịch điện thoại, cái thứ đó hay ho đến thế sao?',
   exList:[
     {zh:'我知道你们都在玩儿手机，那玩意儿就那么好玩儿？',py:'Wǒ zhīdào nǐmen dōu zài wánr shǒujī, nà wányìr jiù nàme hǎowánr?',vn:'Tôi biết các cậu đều đang nghịch điện thoại, cái thứ đó hay ho đến thế sao?'},
     {zh:'爷爷用木头给孙子做了很多小玩意儿。',py:'Yéye yòng mùtou gěi sūnzi zuòle hěn duō xiǎo wányìr.',vn:'Ông dùng gỗ làm cho cháu trai rất nhiều đồ chơi nhỏ.'},
     {zh:'这是什么玩意儿？看起来既像手机又像手表。',py:'Zhè shì shénme wányìr? Kàn qǐlái jì xiàng shǒujī yòu xiàng shǒubiǎo.',vn:'Cái thứ gì đây? Nhìn vừa giống điện thoại vừa giống đồng hồ.'}
   ],
   colloFull:[
     {zh:'那玩意儿',py:'nà wányìr',vn:'cái thứ đó'},
     {zh:'小玩意儿',py:'xiǎo wányìr',vn:'đồ chơi nhỏ, đồ lặt vặt'},
     {zh:'什么玩意儿',py:'shénme wányìr',vn:'cái thứ gì thế (bực bội)'},
     {zh:'新鲜玩意儿',py:'xīnxiān wányìr',vn:'thứ mới lạ'}
   ],
   patterns:[
     {s:'这 / 那 + 玩意儿',m:'Cái thứ này / đó (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng thấy cái thứ đó nhỏ, công dụng của nó lớn lắm đấy.',answer:'别看那玩意儿小，用处可大了。',answerPy:'Bié kàn nà wányìr xiǎo, yòngchu kě dà le.',
      note:'别看…… = đừng thấy… (mà coi thường); 可 + Adj + 了 nhấn mạnh.',pair:'别看……'},
     {promptLang:'vi',prompt:'Loại đồ chơi nhỏ này càng mới lạ thì bọn trẻ càng thích.',answer:'这种小玩意儿越新鲜，孩子们越喜欢。',answerPy:'Zhè zhǒng xiǎo wányìr yuè xīnxiān, háizimen yuè xǐhuan.',
      note:'越 A 越 B: B thay đổi theo A; hai 越 đứng sau chủ ngữ của từng vế.',pair:'越……越……'}
   ]},

  {n:3,zh:'憋',py:'biē',pos:'Động từ',vn:'kìm nén, nén; bức bí',hv:'biệt',em:'😤',lesson:1,
   explain:['Cố nén không cho thoát ra: 憋气 (nín thở), 憋着不说 (nén lại không nói).','Cảm giác bức bí vì bị dồn nén: 心里憋得慌; 脸憋得通红 (mặt đỏ bừng vì nén).'],
   usage:'憋 + 着 / 在心里; 憋得 + trạng thái (憋得通红, 憋得难受); 憋不住 = không nén nổi.',
   collo:['憋得通红','憋着不说','憋不住','憋气'],
   ex_zh:'我脸憋得通红，说：“一对年轻人边开车边拿手机拍照……”',ex_py:'Wǒ liǎn biē de tōnghóng, shuō: “Yí duì niánqīngrén biān kāichē biān ná shǒujī pāizhào……”',ex_vn:'Mặt tôi đỏ bừng, nói: "Có một đôi thanh niên vừa lái xe vừa cầm điện thoại chụp ảnh…"',
   exList:[
     {zh:'我脸憋得通红，说：“一对年轻人边开车边拿手机拍照……”',py:'Wǒ liǎn biē de tōnghóng, shuō: “Yí duì niánqīngrén biān kāichē biān ná shǒujī pāizhào……”',vn:'Mặt tôi đỏ bừng, nói: "Có một đôi thanh niên vừa lái xe vừa cầm điện thoại chụp ảnh…"'},
     {zh:'有什么话就说出来，别总憋在心里。',py:'Yǒu shénme huà jiù shuō chūlái, bié zǒng biē zài xīnli.',vn:'Có gì thì nói ra, đừng cứ nén trong lòng.'},
     {zh:'他讲的笑话太好笑了，我实在憋不住笑出了声。',py:'Tā jiǎng de xiàohua tài hǎoxiào le, wǒ shízài biē bu zhù xiàochūle shēng.',vn:'Chuyện cười anh ấy kể buồn cười quá, tôi thật sự không nhịn được bật cười thành tiếng.'}
   ],
   colloFull:[
     {zh:'憋得通红',py:'biē de tōnghóng',vn:'(mặt) đỏ bừng vì nén'},
     {zh:'憋着不说',py:'biēzhe bù shuō',vn:'nén lại không nói'},
     {zh:'憋不住',py:'biē bu zhù',vn:'không nén nổi'},
     {zh:'憋气',py:'biēqì',vn:'nín thở; bực bội'},
     {zh:'憋在心里',py:'biē zài xīnli',vn:'nén trong lòng'}
   ],
   patterns:[
     {s:'憋 + 得 + trạng thái',m:'Nén đến mức…'},
     {s:'憋不住 + V',m:'Không nén nổi mà…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy nén cười đến mức mặt đỏ bừng.',answer:'他憋笑憋得脸都红了。',answerPy:'Tā biē xiào biē de liǎn dōu hóng le.',
      note:'Động từ có tân ngữ + bổ ngữ trạng thái thì lặp động từ: 憋笑憋得…….',pair:'V + O + V + 得……'},
     {promptLang:'vi',prompt:'Nếu có ấm ức thì cứ nói ra, nếu không sẽ nén đến phát bệnh đấy.',answer:'如果有委屈就说出来，否则会憋出病来的。',answerPy:'Rúguǒ yǒu wěiqu jiù shuō chūlái, fǒuzé huì biēchū bìng lái de.',
      note:'否则 = nếu không thì; 憋出病来 = nén đến sinh bệnh (V + 出 + O + 来).',pair:'……，否则……'}
   ]},

  {n:4,zh:'报警',py:'bào jǐng',pos:'Động từ',vn:'báo cảnh sát',hv:'báo cảnh',em:'🚨',lesson:1,
   explain:['Báo cho cảnh sát / cơ quan chức năng khi có nguy hiểm, vụ việc: 打110报警.','Động từ ly hợp: 报了警, 报过警; không mang tân ngữ phía sau.'],
   usage:'打电话报警 / 立即报警 / 向警方报警. Tách được: 报了警, 连警都没报.',
   collo:['立即报警','打电话报警','报了警','向警方报警'],
   ex_zh:'一对年轻人把桥撞坏了，没报警，先下车拍照发微信。',ex_py:'Yí duì niánqīngrén bǎ qiáo zhuànghuài le, méi bào jǐng, xiān xià chē pāizhào fā Wēixìn.',ex_vn:'Một đôi thanh niên đâm hỏng cây cầu, không báo cảnh sát mà xuống xe chụp ảnh đăng WeChat trước.',
   exList:[
     {zh:'一对年轻人把桥撞坏了，没报警，先下车拍照发微信。',py:'Yí duì niánqīngrén bǎ qiáo zhuànghuài le, méi bào jǐng, xiān xià chē pāizhào fā Wēixìn.',vn:'Một đôi thanh niên đâm hỏng cây cầu, không báo cảnh sát mà xuống xe chụp ảnh đăng WeChat trước.'},
     {zh:'发现家里被偷了，她马上打电话报了警。',py:'Fāxiàn jiā li bèi tōu le, tā mǎshàng dǎ diànhuà bàole jǐng.',vn:'Phát hiện nhà bị trộm, cô ấy lập tức gọi điện báo cảnh sát.'},
     {zh:'遇到危险时，一定要立即报警，不要自己冒险。',py:'Yùdào wēixiǎn shí, yídìng yào lìjí bào jǐng, bú yào zìjǐ màoxiǎn.',vn:'Khi gặp nguy hiểm nhất định phải báo cảnh sát ngay, đừng tự mình mạo hiểm.'}
   ],
   colloFull:[
     {zh:'立即报警',py:'lìjí bào jǐng',vn:'báo cảnh sát ngay'},
     {zh:'打电话报警',py:'dǎ diànhuà bào jǐng',vn:'gọi điện báo cảnh sát'},
     {zh:'报了警',py:'bàole jǐng',vn:'đã báo cảnh sát'},
     {zh:'向警方报警',py:'xiàng jǐngfāng bào jǐng',vn:'báo với phía cảnh sát'},
     {zh:'报警电话',py:'bào jǐng diànhuà',vn:'số điện thoại báo cảnh sát'}
   ],
   patterns:[
     {s:'打电话 / 向警方 + 报警',m:'Báo cảnh sát'},
     {s:'报了警 (động từ ly hợp)',m:'Đã báo cảnh sát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi phát hiện có người bị thương, phải báo cảnh sát ngay.',answer:'一旦发现有人受伤，就要立即报警。',answerPy:'Yídàn fāxiàn yǒu rén shòushāng, jiù yào lìjí bào jǐng.',
      note:'一旦 + điều kiện, 就 + việc phải làm ngay.',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Ví của anh ấy bị trộm, nhưng anh ấy đến báo cảnh sát cũng không báo.',answer:'他的钱包被偷了，可是他连警都没报。',answerPy:'Tā de qiánbāo bèi tōu le, kěshì tā lián jǐng dōu méi bào.',
      note:'报警 là động từ ly hợp nên tách được: 连警都没报.',pair:'连……都……'}
   ]},

  {n:5,zh:'绑架',py:'bǎngjià',pos:'Động từ',vn:'bắt cóc; (nghĩa bóng) trói buộc, khống chế',hv:'bảng giá',em:'🪢',lesson:1,
   explain:['Nghĩa gốc: bắt cóc người (để đòi tiền chuộc…).','Nghĩa bóng: bị một thứ gì khống chế, trói buộc: 让手机给绑架了 = bị điện thoại "bắt cóc".'],
   usage:'绑架 + người; bị động: 被 / 让 + N + (给) + 绑架了. Nghĩa bóng hay gặp: 被手机绑架, 被网络绑架.',
   collo:['被手机绑架','绑架案','绑架孩子'],
   ex_zh:'老板一摆手：“你们呀，都让手机给绑架了。”',ex_py:'Lǎobǎn yì bǎi shǒu: “Nǐmen ya, dōu ràng shǒujī gěi bǎngjià le.”',ex_vn:'Sếp xua tay: "Các cậu ấy à, đều bị điện thoại bắt cóc cả rồi."',
   exList:[
     {zh:'老板一摆手：“你们呀，都让手机给绑架了。”',py:'Lǎobǎn yì bǎi shǒu: “Nǐmen ya, dōu ràng shǒujī gěi bǎngjià le.”',vn:'Sếp xua tay: "Các cậu ấy à, đều bị điện thoại bắt cóc cả rồi."'},
     {zh:'警察很快救出了被绑架的孩子。',py:'Jǐngchá hěn kuài jiùchūle bèi bǎngjià de háizi.',vn:'Cảnh sát nhanh chóng cứu được đứa trẻ bị bắt cóc.'},
     {zh:'很多年轻人被手机绑架了，吃饭、走路都离不开它。',py:'Hěn duō niánqīngrén bèi shǒujī bǎngjià le, chīfàn, zǒulù dōu lí bu kāi tā.',vn:'Rất nhiều bạn trẻ bị điện thoại "bắt cóc", ăn cơm, đi đường đều không rời được nó.'}
   ],
   colloFull:[
     {zh:'被手机绑架',py:'bèi shǒujī bǎngjià',vn:'bị điện thoại trói buộc'},
     {zh:'绑架案',py:'bǎngjià\'àn',vn:'vụ bắt cóc'},
     {zh:'绑架孩子',py:'bǎngjià háizi',vn:'bắt cóc trẻ em'},
     {zh:'让……给绑架了',py:'ràng……gěi bǎngjià le',vn:'bị … bắt cóc (khẩu ngữ)'}
   ],
   patterns:[
     {s:'被 / 让 + N + (给) + 绑架了',m:'Bị … bắt cóc / trói buộc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy bị điện thoại trói buộc rồi, đến lúc ăn cơm cũng xem điện thoại.',answer:'他被手机绑架了，连吃饭的时候都在看手机。',answerPy:'Tā bèi shǒujī bǎngjià le, lián chīfàn de shíhou dōu zài kàn shǒujī.',
      note:'Câu bị động 被 + tác nhân + V + 了; 连……都…… nhấn mạnh mức độ.',pair:'被字句'},
     {promptLang:'vi',prompt:'Cảnh sát đã bắt được kẻ bắt cóc, đứa trẻ cuối cùng cũng được cứu ra.',answer:'警察抓住了绑架者，孩子终于被救出来了。',answerPy:'Jǐngchá zhuāzhùle bǎngjiàzhě, háizi zhōngyú bèi jiù chūlái le.',
      note:'救出来: bổ ngữ xu hướng kép 出来 chỉ kết quả "ra được".',pair:'V + 出来'}
   ]},

  {n:6,zh:'受罪',py:'shòu zuì',pos:'Động từ',vn:'chịu khổ, khổ sở, bị giày vò',hv:'thụ tội',em:'😣',lesson:1,
   explain:['Chịu đựng khổ sở, vất vả, khó chịu (không phải "chịu tội" theo pháp luật).','Động từ ly hợp: 受了不少罪, 受什么罪, 何必受这个罪.'],
   usage:'Khẩu ngữ: 这不是受罪吗? / 让孩子受罪 / 活受罪 (khổ sở như chịu tội).',
   collo:['受了不少罪','不受罪吗','让……受罪','活受罪'],
   ex_zh:'你们都让手机给绑架了，这么过日子，不受罪吗？',ex_py:'Nǐmen dōu ràng shǒujī gěi bǎngjià le, zhème guò rìzi, bú shòu zuì ma?',ex_vn:'Các cậu đều bị điện thoại bắt cóc cả rồi, sống thế này không khổ sao?',
   exList:[
     {zh:'你们都让手机给绑架了，这么过日子，不受罪吗？',py:'Nǐmen dōu ràng shǒujī gěi bǎngjià le, zhème guò rìzi, bú shòu zuì ma?',vn:'Các cậu đều bị điện thoại bắt cóc cả rồi, sống thế này không khổ sao?'},
     {zh:'这么热的天还穿西装开会，真是活受罪。',py:'Zhème rè de tiān hái chuān xīzhuāng kāihuì, zhēn shì huó shòu zuì.',vn:'Trời nóng thế này mà còn mặc vest đi họp, đúng là khổ sở.'},
     {zh:'生病的那几天，他受了不少罪。',py:'Shēngbìng de nà jǐ tiān, tā shòule bù shǎo zuì.',vn:'Mấy hôm ốm đó, anh ấy chịu không ít khổ sở.'}
   ],
   colloFull:[
     {zh:'受了不少罪',py:'shòule bù shǎo zuì',vn:'chịu không ít khổ'},
     {zh:'不受罪吗',py:'bú shòu zuì ma',vn:'chẳng khổ sao'},
     {zh:'让……受罪',py:'ràng……shòu zuì',vn:'làm … khổ sở'},
     {zh:'活受罪',py:'huó shòu zuì',vn:'khổ sở (như sống mà chịu tội)'},
     {zh:'受什么罪',py:'shòu shénme zuì',vn:'chịu khổ làm gì'}
   ],
   patterns:[
     {s:'受 + 了 + 不少 / 很多 + 罪',m:'Chịu nhiều khổ sở'},
     {s:'这不是受罪吗？',m:'Thế chẳng phải tự chuốc khổ sao?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã không thích thì đừng miễn cưỡng, cần gì phải chịu khổ như vậy?',answer:'既然不喜欢就别勉强了，何必受这个罪呢？',answerPy:'Jìrán bù xǐhuan jiù bié miǎnqiǎng le, hébì shòu zhège zuì ne?',
      note:'既然……就…… suy ra lời khuyên; 何必……呢 = cần gì phải…; 勉强 ôn bài 5.',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Để con không phải chịu khổ, bố mẹ vất vả làm việc từ sáng đến tối.',answer:'为了不让孩子受罪，父母从早到晚辛苦地工作。',answerPy:'Wèile bú ràng háizi shòu zuì, fùmǔ cóng zǎo dào wǎn xīnkǔ de gōngzuò.',
      note:'为了 + mục đích đặt ở đầu câu; 不让 + người + V.',pair:'为了……，……'}
   ]},

  {n:7,zh:'吼',py:'hǒu',pos:'Động từ',vn:'gào to, quát, thét lên; (thú) gầm',hv:'hống',em:'🗣️',lesson:1,
   explain:['Người la to, quát lớn vì tức giận / kích động: 大吼一声.','Thú dữ gầm (狮子吼); gió, sóng gào thét.'],
   usage:'冲 + người + 吼 = quát ai; 大吼 / 吼了一声 / 别吼了.',
   collo:['大吼一声','冲……吼','别吼了'],
   ex_zh:'老板大吼：“有病就得治！”',ex_py:'Lǎobǎn dà hǒu: “Yǒu bìng jiù děi zhì!”',ex_vn:'Sếp quát lớn: "Có bệnh thì phải chữa!"',
   exList:[
     {zh:'老板大吼：“有病就得治！”',py:'Lǎobǎn dà hǒu: “Yǒu bìng jiù děi zhì!”',vn:'Sếp quát lớn: "Có bệnh thì phải chữa!"'},
     {zh:'有话好好说，别冲孩子吼。',py:'Yǒu huà hǎohāo shuō, bié chòng háizi hǒu.',vn:'Có gì thì nói tử tế, đừng quát con.'},
     {zh:'远处传来狮子的吼声，大家都吓得要命。',py:'Yuǎnchù chuánlái shīzi de hǒushēng, dàjiā dōu xià de yào mìng.',vn:'Từ xa vọng lại tiếng sư tử gầm, mọi người sợ chết khiếp.'}
   ],
   colloFull:[
     {zh:'大吼一声',py:'dà hǒu yì shēng',vn:'quát lớn một tiếng'},
     {zh:'冲……吼',py:'chòng……hǒu',vn:'quát vào ai'},
     {zh:'别吼了',py:'bié hǒu le',vn:'đừng quát nữa'},
     {zh:'吼声',py:'hǒushēng',vn:'tiếng gầm, tiếng quát'}
   ],
   patterns:[
     {s:'冲 + người + 吼',m:'Quát vào ai'},
     {s:'大吼一声',m:'Quát lớn một tiếng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù tức giận đến đâu cũng không nên quát bố mẹ.',answer:'无论多生气，也不应该冲父母吼。',answerPy:'Wúlùn duō shēngqì, yě bù yīnggāi chòng fùmǔ hǒu.',
      note:'无论 + 多 + Adj, 也 / 都 …: dù… đến đâu cũng…',pair:'无论……也……'},
     {promptLang:'vi',prompt:'Bố vừa quát lên một tiếng, cả nhà lập tức im phăng phắc.',answer:'爸爸大吼一声，全家顿时鸦雀无声。',answerPy:'Bàba dà hǒu yì shēng, quánjiā dùnshí yāquè-wúshēng.',
      note:'顿时 (bài 2) = lập tức, ngay lúc đó; 鸦雀无声 (bài 1) = im phăng phắc.',pair:'顿时'}
   ]},

  {n:8,zh:'智能',py:'zhìnéng',pos:'Tính từ',vn:'thông minh (thiết bị); trí tuệ, trí năng',hv:'trí năng',em:'📱',lesson:1,
   explain:['Có khả năng xử lý tự động như con người — dùng cho máy móc, thiết bị: 智能手机, 智能家居.','Danh từ: trí tuệ và năng lực (人工智能 = trí tuệ nhân tạo).'],
   usage:'智能 + N (thiết bị); không dùng để khen người (người thông minh = 聪明).',
   collo:['智能手机','人工智能','智能家居','智能机器人'],
   ex_zh:'老板说的没错，特别是有了智能手机，我就成了手机的奴隶。',ex_py:'Lǎobǎn shuō de méi cuò, tèbié shì yǒule zhìnéng shǒujī, wǒ jiù chéngle shǒujī de núlì.',ex_vn:'Sếp nói không sai, nhất là từ khi có điện thoại thông minh, tôi đã thành nô lệ của điện thoại.',
   exList:[
     {zh:'老板说的没错，特别是有了智能手机，我就成了手机的奴隶。',py:'Lǎobǎn shuō de méi cuò, tèbié shì yǒule zhìnéng shǒujī, wǒ jiù chéngle shǒujī de núlì.',vn:'Sếp nói không sai, nhất là từ khi có điện thoại thông minh, tôi đã thành nô lệ của điện thoại.'},
     {zh:'人工智能的发展给生活带来了很多方便。',py:'Réngōng zhìnéng de fāzhǎn gěi shēnghuó dàiláile hěn duō fāngbiàn.',vn:'Sự phát triển của trí tuệ nhân tạo mang lại nhiều tiện lợi cho cuộc sống.'},
     {zh:'这台智能机器人会扫地，还会讲故事。',py:'Zhè tái zhìnéng jīqìrén huì sǎodì, hái huì jiǎng gùshi.',vn:'Con robot thông minh này biết quét nhà, còn biết kể chuyện.'}
   ],
   colloFull:[
     {zh:'智能手机',py:'zhìnéng shǒujī',vn:'điện thoại thông minh'},
     {zh:'人工智能',py:'réngōng zhìnéng',vn:'trí tuệ nhân tạo'},
     {zh:'智能家居',py:'zhìnéng jiājū',vn:'nhà thông minh'},
     {zh:'智能机器人',py:'zhìnéng jīqìrén',vn:'robot thông minh'},
     {zh:'智能化',py:'zhìnénghuà',vn:'thông minh hóa'}
   ],
   patterns:[
     {s:'智能 + N (thiết bị)',m:'Thiết bị thông minh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điện thoại thông minh không những tiện lợi mà còn rất dễ khiến người ta nghiện.',answer:'智能手机不但方便，而且很容易让人上瘾。',answerPy:'Zhìnéng shǒujī búdàn fāngbiàn, érqiě hěn róngyì ràng rén shàngyǐn.',
      note:'不但……而且…… tăng tiến; 上瘾 = nghiện.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Ngay cả ông tôi cũng đã biết dùng điện thoại thông minh rồi.',answer:'连我爷爷都学会用智能手机了。',answerPy:'Lián wǒ yéye dōu xuéhuì yòng zhìnéng shǒujī le.',
      note:'连 + trường hợp cực đoan + 都: ngay cả… cũng….',pair:'连……都……'}
   ]},

  {n:9,zh:'奴隶',py:'núlì',pos:'Danh từ',vn:'nô lệ',hv:'nô lệ',em:'⛓️',lesson:1,
   explain:['Nghĩa gốc: người bị người khác chiếm hữu, mất tự do.','Nghĩa bóng: người bị một thứ khống chế hoàn toàn: 手机的奴隶, 金钱的奴隶.'],
   usage:'成了 / 做 / 成为 + ……的奴隶; 不做……的奴隶. Tiếng Việt "nô lệ" dùng y hệt.',
   collo:['手机的奴隶','成了……的奴隶','金钱的奴隶'],
   ex_zh:'特别是有了智能手机，我就成了手机的奴隶。',ex_py:'Tèbié shì yǒule zhìnéng shǒujī, wǒ jiù chéngle shǒujī de núlì.',ex_vn:'Nhất là từ khi có điện thoại thông minh, tôi đã thành nô lệ của điện thoại.',
   exList:[
     {zh:'特别是有了智能手机，我就成了手机的奴隶。',py:'Tèbié shì yǒule zhìnéng shǒujī, wǒ jiù chéngle shǒujī de núlì.',vn:'Nhất là từ khi có điện thoại thông minh, tôi đã thành nô lệ của điện thoại.'},
     {zh:'我们应该做金钱的主人，而不是金钱的奴隶。',py:'Wǒmen yīnggāi zuò jīnqián de zhǔrén, ér bú shì jīnqián de núlì.',vn:'Chúng ta nên làm chủ đồng tiền, chứ không phải làm nô lệ cho đồng tiền.'},
     {zh:'为了不做时间的奴隶，他每天都认真规划自己的时间。',py:'Wèile bú zuò shíjiān de núlì, tā měi tiān dōu rènzhēn guīhuà zìjǐ de shíjiān.',vn:'Để không làm nô lệ của thời gian, ngày nào anh ấy cũng nghiêm túc lên kế hoạch thời gian của mình.'}
   ],
   colloFull:[
     {zh:'手机的奴隶',py:'shǒujī de núlì',vn:'nô lệ của điện thoại'},
     {zh:'成了……的奴隶',py:'chéngle……de núlì',vn:'trở thành nô lệ của…'},
     {zh:'金钱的奴隶',py:'jīnqián de núlì',vn:'nô lệ đồng tiền'},
     {zh:'做……的奴隶',py:'zuò……de núlì',vn:'làm nô lệ cho…'}
   ],
   patterns:[
     {s:'成了 / 做 + N + 的奴隶',m:'Thành nô lệ của…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta nên làm chủ điện thoại, chứ không phải làm nô lệ cho điện thoại.',answer:'我们应该做手机的主人，而不是做手机的奴隶。',answerPy:'Wǒmen yīnggāi zuò shǒujī de zhǔrén, ér bú shì zuò shǒujī de núlì.',
      note:'A，而不是 B: khẳng định A, phủ định B.',pair:'……，而不是……'},
     {promptLang:'vi',prompt:'Nếu không kiểm soát bản thân, chúng ta sẽ trở thành nô lệ của trò chơi điện tử.',answer:'要是不控制自己，我们就会成为游戏的奴隶。',answerPy:'Yàoshi bú kòngzhì zìjǐ, wǒmen jiù huì chéngwéi yóuxì de núlì.',
      note:'要是……就…… nêu giả thiết – kết quả (khẩu ngữ của 如果).',pair:'要是……就……'}
   ]},

  {n:10,zh:'麻木',py:'mámù',pos:'Tính từ',vn:'tê dại; (nghĩa bóng) thờ ơ, lãnh đạm, chai sạn',hv:'ma mộc',em:'🥶',lesson:1,
   explain:['Nghĩa gốc: tay chân tê, mất cảm giác (腿麻木了).','Nghĩa bóng: phản ứng chậm, thờ ơ, không còn cảm xúc với mọi thứ: 对什么都麻木了.'],
   usage:'对 + N + 麻木; 变得麻木; 麻木不仁 (thờ ơ vô cảm).',
   collo:['对什么都麻木了','手脚麻木','变得麻木','麻木不仁'],
   ex_zh:'我就成了手机的奴隶，对什么都麻木了，心里只有手机。',ex_py:'Wǒ jiù chéngle shǒujī de núlì, duì shénme dōu mámù le, xīnli zhǐ yǒu shǒujī.',ex_vn:'Tôi thành nô lệ của điện thoại, thờ ơ với mọi thứ, trong lòng chỉ có điện thoại.',
   exList:[
     {zh:'我就成了手机的奴隶，对什么都麻木了，心里只有手机。',py:'Wǒ jiù chéngle shǒujī de núlì, duì shénme dōu mámù le, xīnli zhǐ yǒu shǒujī.',vn:'Tôi thành nô lệ của điện thoại, thờ ơ với mọi thứ, trong lòng chỉ có điện thoại.'},
     {zh:'在雪地里站了半天，我的手脚都冻得麻木了。',py:'Zài xuědì li zhànle bàntiān, wǒ de shǒujiǎo dōu dòng de mámù le.',vn:'Đứng trên tuyết cả buổi, tay chân tôi đều cóng đến tê dại.'},
     {zh:'看多了这样的新闻，人们好像已经变得麻木了。',py:'Kàn duōle zhèyàng de xīnwén, rénmen hǎoxiàng yǐjīng biàn de mámù le.',vn:'Xem nhiều tin tức kiểu này, mọi người dường như đã trở nên chai sạn.'}
   ],
   colloFull:[
     {zh:'对什么都麻木了',py:'duì shénme dōu mámù le',vn:'thờ ơ với mọi thứ'},
     {zh:'手脚麻木',py:'shǒujiǎo mámù',vn:'tay chân tê dại'},
     {zh:'变得麻木',py:'biàn de mámù',vn:'trở nên chai sạn'},
     {zh:'麻木不仁',py:'mámù bù rén',vn:'thờ ơ, vô cảm'},
     {zh:'感觉麻木',py:'gǎnjué mámù',vn:'mất cảm giác'}
   ],
   patterns:[
     {s:'对 + N + 麻木',m:'Thờ ơ, chai sạn với…'},
     {s:'冻 / 坐 + 得 + 麻木',m:'Cóng / ngồi đến tê'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngồi xem điện thoại lâu quá, chân tôi tê cả rồi.',answer:'看手机坐得太久了，我的腿都麻木了。',answerPy:'Kàn shǒujī zuò de tài jiǔ le, wǒ de tuǐ dōu mámù le.',
      note:'V + 得 + 太…… là bổ ngữ trạng thái; 都 nhấn mạnh "cả… rồi".',pair:'V + 得 + 太……了'},
     {promptLang:'vi',prompt:'Chỉ cần còn biết quan tâm đến người khác, chúng ta sẽ không trở nên vô cảm.',answer:'只要还懂得关心别人，我们就不会变得麻木。',answerPy:'Zhǐyào hái dǒngde guānxīn biérén, wǒmen jiù bú huì biàn de mámù.',
      note:'只要 + điều kiện đủ, 就 + kết quả.',pair:'只要……就……'}
   ]},

  {n:11,zh:'狼吞虎咽',py:'lángtūn-hǔyàn',pos:'Thành ngữ',vn:'ăn ngấu nghiến, nuốt lấy nuốt để',hv:'lang thôn hổ yết',em:'🍜',lesson:1,
   explain:['Ăn như sói nuốt, hổ nuốt → ăn rất nhanh, rất vội, nuốt chửng.','Thường làm trạng ngữ (狼吞虎咽地吃) hoặc vị ngữ (他吃饭总是狼吞虎咽的).'],
   usage:'狼吞虎咽地 + 吃 / 吃完; 吃得狼吞虎咽. Chỉ dùng cho việc ăn. Trái nghĩa: 细嚼慢咽.',
   collo:['狼吞虎咽地吃','狼吞虎咽吃完','吃得狼吞虎咽'],
   ex_zh:'吃饭前先拍照；狼吞虎咽吃完，又埋头看微信。',ex_py:'Chīfàn qián xiān pāizhào; lángtūn-hǔyàn chīwán, yòu máitóu kàn Wēixìn.',ex_vn:'Trước khi ăn thì chụp ảnh; ăn ngấu nghiến xong lại cắm cúi xem WeChat.',
   exList:[
     {zh:'吃饭前先拍照；狼吞虎咽吃完，又埋头看微信。',py:'Chīfàn qián xiān pāizhào; lángtūn-hǔyàn chīwán, yòu máitóu kàn Wēixìn.',vn:'Trước khi ăn thì chụp ảnh; ăn ngấu nghiến xong lại cắm cúi xem WeChat.'},
     {zh:'他饿坏了，端起碗就狼吞虎咽地吃了起来。',py:'Tā èhuài le, duānqǐ wǎn jiù lángtūn-hǔyàn de chīle qǐlái.',vn:'Cậu ấy đói lả, bưng bát lên là ăn ngấu nghiến.'},
     {zh:'医生说，吃饭狼吞虎咽对胃不好。',py:'Yīshēng shuō, chīfàn lángtūn-hǔyàn duì wèi bù hǎo.',vn:'Bác sĩ nói ăn vội vàng không tốt cho dạ dày.'}
   ],
   colloFull:[
     {zh:'狼吞虎咽地吃',py:'lángtūn-hǔyàn de chī',vn:'ăn ngấu nghiến'},
     {zh:'狼吞虎咽吃完',py:'lángtūn-hǔyàn chīwán',vn:'ăn vội cho xong'},
     {zh:'吃得狼吞虎咽',py:'chī de lángtūn-hǔyàn',vn:'ăn ngấu nghiến'},
     {zh:'细嚼慢咽',py:'xìjiáo-mànyàn',vn:'(trái nghĩa) nhai kỹ nuốt chậm'}
   ],
   patterns:[
     {s:'狼吞虎咽地 + 吃',m:'Ăn ngấu nghiến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù bận đến mấy cũng đừng ăn vội vàng như thế.',answer:'即使再忙，也别这样狼吞虎咽的。',answerPy:'Jíshǐ zài máng, yě bié zhèyàng lángtūn-hǔyàn de.',
      note:'即使 + 再 + Adj, 也……: dù… đến mấy cũng….',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Cậu ấy ăn ngấu nghiến xong là chạy ra ngoài chơi bóng.',answer:'他狼吞虎咽地吃完饭，就跑出去打球了。',answerPy:'Tā lángtūn-hǔyàn de chīwán fàn, jiù pǎo chūqu dǎ qiú le.',
      note:'V + 完 + O, 就 + V: làm xong việc này là làm ngay việc kia.',pair:'V完……就……'}
   ]},

  {n:12,zh:'伺候',py:'cìhou',pos:'Động từ',vn:'phục dịch, hầu hạ, chăm sóc',hv:'tứ hậu',em:'🤲',lesson:1,
   explain:['Ở bên cạnh chăm sóc, phục vụ (người già, người bệnh): 伺候老人.','Trong bài dùng hài hước: 把手机它老人家伺候得好好的 = hầu hạ "cụ" điện thoại chu đáo.'],
   usage:'伺候 + người; 把……伺候得好好的; 难伺候 = khó chiều. Khẩu ngữ; trung tính hơn thì nói 照顾.',
   collo:['伺候老人','伺候得好好的','难伺候'],
   ex_zh:'睡觉之前先给手机充电……把手机它老人家伺候得好好的。',ex_py:'Shuìjiào zhīqián xiān gěi shǒujī chōngdiàn……bǎ shǒujī tā lǎorénjia cìhou de hǎohāo de.',ex_vn:'Trước khi ngủ thì sạc pin cho điện thoại trước… hầu hạ "cụ" điện thoại chu đáo.',
   exList:[
     {zh:'睡觉之前先给手机充电……把手机它老人家伺候得好好的。',py:'Shuìjiào zhīqián xiān gěi shǒujī chōngdiàn……bǎ shǒujī tā lǎorénjia cìhou de hǎohāo de.',vn:'Trước khi ngủ thì sạc pin cho điện thoại trước… hầu hạ "cụ" điện thoại chu đáo.'},
     {zh:'奶奶病了，妈妈每天在医院伺候她。',py:'Nǎinai bìng le, māma měi tiān zài yīyuàn cìhou tā.',vn:'Bà ốm, ngày nào mẹ cũng ở bệnh viện chăm sóc bà.'},
     {zh:'这位顾客要求特别多，真难伺候。',py:'Zhè wèi gùkè yāoqiú tèbié duō, zhēn nán cìhou.',vn:'Vị khách này đòi hỏi nhiều quá, thật khó chiều.'}
   ],
   colloFull:[
     {zh:'伺候老人',py:'cìhou lǎorén',vn:'chăm sóc người già'},
     {zh:'伺候得好好的',py:'cìhou de hǎohāo de',vn:'hầu hạ chu đáo'},
     {zh:'难伺候',py:'nán cìhou',vn:'khó chiều'},
     {zh:'伺候病人',py:'cìhou bìngrén',vn:'chăm người bệnh'}
   ],
   patterns:[
     {s:'把 + N + 伺候得好好的',m:'Hầu hạ … chu đáo'},
     {s:'难伺候',m:'Khó chiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chăm con mèo này chu đáo đến mức nó béo ra rồi.',answer:'我把这只猫伺候得好好的，它都长胖了。',answerPy:'Wǒ bǎ zhè zhī māo cìhou de hǎohāo de, tā dōu zhǎngpàng le.',
      note:'把 + O + V + 得 + trạng thái: câu 把 có bổ ngữ trạng thái.',pair:'把字句'},
     {promptLang:'vi',prompt:'Tuy ông nội tính khí không tốt, rất khó chiều, nhưng bố chưa bao giờ phàn nàn.',answer:'尽管爷爷脾气不好，很难伺候，爸爸却从来不埋怨。',answerPy:'Jǐnguǎn yéye píqi bù hǎo, hěn nán cìhou, bàba què cónglái bù mányuàn.',
      note:'尽管……却…… nhượng bộ; 却 đứng sau chủ ngữ vế sau. 埋怨 ôn bài 2.',pair:'尽管……却……'}
   ]},

  {n:13,zh:'眨',py:'zhǎ',pos:'Động từ',vn:'nháy, chớp (mắt)',hv:'trát',em:'😉',lesson:1,
   explain:['Mắt nhắm mở nhanh: 眨眼 (chớp mắt), 眨眨眼 (nháy mắt ra hiệu).','一眨眼 = chớp mắt một cái → thời gian rất ngắn.'],
   usage:'冲 + người + 眨眨眼 (nháy mắt với ai); 眼睛都不眨一下 (không chớp mắt); 一眨眼 (的工夫).',
   collo:['眨眨眼','冲他眨眼','一眨眼','眼睛都不眨一下'],
   ex_zh:'我冲他眨眨眼，说：“那你也拿出手机，咱们手机上聊吧！”',ex_py:'Wǒ chòng tā zhǎzha yǎn, shuō: “Nà nǐ yě náchū shǒujī, zánmen shǒujī shang liáo ba!”',ex_vn:'Tôi nháy mắt với cậu ấy, nói: "Vậy cậu cũng lấy điện thoại ra, bọn mình nói chuyện trên điện thoại đi!"',
   exList:[
     {zh:'我冲他眨眨眼，说：“那你也拿出手机，咱们手机上聊吧！”',py:'Wǒ chòng tā zhǎzha yǎn, shuō: “Nà nǐ yě náchū shǒujī, zánmen shǒujī shang liáo ba!”',vn:'Tôi nháy mắt với cậu ấy, nói: "Vậy cậu cũng lấy điện thoại ra, bọn mình nói chuyện trên điện thoại đi!"'},
     {zh:'一眨眼，暑假就过去了。',py:'Yì zhǎyǎn, shǔjià jiù guòqu le.',vn:'Chớp mắt một cái, kỳ nghỉ hè đã qua rồi.'},
     {zh:'他盯着屏幕，眼睛都不眨一下。',py:'Tā dīngzhe píngmù, yǎnjing dōu bù zhǎ yíxià.',vn:'Cậu ấy dán mắt vào màn hình, mắt không chớp lấy một cái.'}
   ],
   colloFull:[
     {zh:'眨眨眼',py:'zhǎzha yǎn',vn:'nháy mắt'},
     {zh:'冲他眨眼',py:'chòng tā zhǎ yǎn',vn:'nháy mắt với anh ấy'},
     {zh:'一眨眼',py:'yì zhǎyǎn',vn:'chớp mắt một cái'},
     {zh:'眼睛都不眨一下',py:'yǎnjing dōu bù zhǎ yíxià',vn:'mắt không chớp lấy một cái'}
   ],
   patterns:[
     {s:'冲 + người + 眨眨眼',m:'Nháy mắt với ai'},
     {s:'一眨眼，……就……',m:'Chớp mắt một cái đã…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chớp mắt một cái, chúng tôi đã tốt nghiệp được ba năm rồi.',answer:'一眨眼，我们已经毕业三年了。',answerPy:'Yì zhǎyǎn, wǒmen yǐjīng bìyè sān nián le.',
      note:'已经 + V + thời lượng + 了: đã… được bao lâu (动词 không mang tân ngữ: 毕业三年).',pair:'已经……了'},
     {promptLang:'vi',prompt:'Mẹ nháy mắt với tôi, ý bảo tôi đừng nói nữa.',answer:'妈妈冲我眨了眨眼，意思是让我别再说了。',answerPy:'Māma chòng wǒ zhǎle zhǎ yǎn, yìsi shì ràng wǒ bié zài shuō le.',
      note:'Câu kiêm ngữ 让 + người + V; động từ lặp có 了: 眨了眨眼.',pair:'让 + người + V'}
   ]},

  {n:14,zh:'索性',py:'suǒxìng',pos:'Phó từ',vn:'dứt khoát, thẳng thừng, (đã vậy thì) … luôn',hv:'sách tính',em:'✂️',lesson:1,
   explain:['Biểu thị làm luôn một cách dứt khoát (thường sau khi thấy cách khác không được): 找不着，索性不找了.','CHỈ là phó từ, đứng trước động từ; không làm vị ngữ, không đi với 很.'],
   usage:'Vế trước nêu tình huống, vế sau 索性 + V. Không nói 很索性 (khác 干脆).',
   collo:['索性不找了','索性这礼拜就开始','索性不去了'],
   ex_zh:'何不尝试一下一周关机一天？说干就干，索性这礼拜就开始。',ex_py:'Hébù chángshì yíxià yì zhōu guānjī yì tiān? Shuō gàn jiù gàn, suǒxìng zhè lǐbài jiù kāishǐ.',ex_vn:'Sao không thử mỗi tuần tắt máy một ngày? Nói là làm, dứt khoát bắt đầu ngay tuần này.',
   exList:[
     {zh:'何不尝试一下一周关机一天？说干就干，索性这礼拜就开始。',py:'Hébù chángshì yíxià yì zhōu guānjī yì tiān? Shuō gàn jiù gàn, suǒxìng zhè lǐbài jiù kāishǐ.',vn:'Sao không thử mỗi tuần tắt máy một ngày? Nói là làm, dứt khoát bắt đầu ngay tuần này.'},
     {zh:'找了好几个地方都没找着，索性不找了。',py:'Zhǎole hǎo jǐ ge dìfang dōu méi zhǎozháo, suǒxìng bù zhǎo le.',vn:'Tìm mấy chỗ đều không thấy, thôi dứt khoát không tìm nữa.'},
     {zh:'雨越下越大，我们索性在咖啡馆多坐一会儿。',py:'Yǔ yuè xià yuè dà, wǒmen suǒxìng zài kāfēiguǎn duō zuò yíhuìr.',vn:'Mưa càng lúc càng to, chúng tôi dứt khoát ngồi thêm một lúc ở quán cà phê.'}
   ],
   colloFull:[
     {zh:'索性不找了',py:'suǒxìng bù zhǎo le',vn:'thôi không tìm nữa'},
     {zh:'索性这礼拜就开始',py:'suǒxìng zhè lǐbài jiù kāishǐ',vn:'dứt khoát bắt đầu ngay tuần này'},
     {zh:'索性不去了',py:'suǒxìng bú qù le',vn:'thôi dứt khoát không đi nữa'},
     {zh:'索性说出来',py:'suǒxìng shuō chūlái',vn:'nói thẳng ra luôn'}
   ],
   patterns:[
     {s:'……，索性 + V',m:'(Đã vậy thì) làm luôn…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đã muộn thế này rồi thì cậu dứt khoát ngủ lại nhà tớ đi.',answer:'既然已经这么晚了，你索性就住在我家吧。',answerPy:'Jìrán yǐjīng zhème wǎn le, nǐ suǒxìng jiù zhù zài wǒ jiā ba.',
      note:'既然 + sự thật, (索性) 就 + đề nghị.',pair:'既然……就……'},
     {promptLang:'vi',prompt:'Chờ mãi xe buýt cũng không đến, tôi dứt khoát đi bộ về nhà.',answer:'等了半天公交车也没来，我索性走回家了。',answerPy:'Děngle bàntiān gōngjiāochē yě méi lái, wǒ suǒxìng zǒu huí jiā le.',
      note:'V + 了 + 半天 = làm mãi, làm cả buổi; 也没…… = vẫn không….',pair:'V + 了 + 半天'}
   ]},

  {n:15,zh:'作息',py:'zuòxī',pos:'Động từ',vn:'làm việc và nghỉ ngơi; giờ giấc sinh hoạt',hv:'tác tức',em:'⏰',lesson:1,
   explain:['作 = làm việc, 息 = nghỉ ngơi → sinh hoạt, làm và nghỉ.','Hay dùng với danh từ: 作息时间 (thời gian biểu), 作息规律 (giờ giấc điều độ).'],
   usage:'作息时间 / 按时作息 / 作息不规律. Thường không mang tân ngữ.',
   collo:['作息时间','按时作息','作息不规律'],
   ex_zh:'周日，我按小学生的作息时间七点起床。',ex_py:'Zhōurì, wǒ àn xiǎoxuéshēng de zuòxī shíjiān qī diǎn qǐchuáng.',ex_vn:'Chủ nhật, tôi theo thời gian biểu của học sinh tiểu học, bảy giờ dậy.',
   exList:[
     {zh:'周日，我按小学生的作息时间七点起床。',py:'Zhōurì, wǒ àn xiǎoxuéshēng de zuòxī shíjiān qī diǎn qǐchuáng.',vn:'Chủ nhật, tôi theo thời gian biểu của học sinh tiểu học, bảy giờ dậy.'},
     {zh:'考试前也要按时作息，千万别熬夜。',py:'Kǎoshì qián yě yào ànshí zuòxī, qiānwàn bié áoyè.',vn:'Trước kỳ thi cũng phải sinh hoạt đúng giờ, tuyệt đối đừng thức khuya.'},
     {zh:'他工作太忙，作息很不规律，身体越来越差。',py:'Tā gōngzuò tài máng, zuòxī hěn bù guīlǜ, shēntǐ yuè lái yuè chà.',vn:'Anh ấy công việc quá bận, giờ giấc rất thất thường, sức khỏe ngày càng kém.'}
   ],
   colloFull:[
     {zh:'作息时间',py:'zuòxī shíjiān',vn:'thời gian biểu'},
     {zh:'按时作息',py:'ànshí zuòxī',vn:'sinh hoạt đúng giờ'},
     {zh:'作息不规律',py:'zuòxī bù guīlǜ',vn:'giờ giấc thất thường'},
     {zh:'作息时间表',py:'zuòxī shíjiānbiǎo',vn:'bảng thời gian biểu'},
     {zh:'调整作息',py:'tiáozhěng zuòxī',vn:'điều chỉnh giờ giấc'}
   ],
   patterns:[
     {s:'按……的作息时间 + V',m:'Theo thời gian biểu của…'},
     {s:'作息 + (不)规律',m:'Giờ giấc (không) điều độ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có sinh hoạt điều độ thì sức khỏe mới tốt được.',answer:'只有作息规律，身体才能好。',answerPy:'Zhǐyǒu zuòxī guīlǜ, shēntǐ cái néng hǎo.',
      note:'只有 + điều kiện duy nhất, 才 + kết quả.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Kỳ nghỉ vừa bắt đầu, giờ giấc của em trai đã đảo lộn hoàn toàn.',answer:'假期刚开始，弟弟的作息就完全颠倒了。',answerPy:'Jiàqī gāng kāishǐ, dìdi de zuòxī jiù wánquán diāndǎo le.',
      note:'刚……就…… = vừa… đã…; 颠倒 ôn bài 5.',pair:'刚……就……'}
   ]},

  {n:16,zh:'着手',py:'zhuóshǒu',pos:'Động từ',vn:'bắt tay vào (làm), bắt đầu làm',hv:'trước thủ',em:'🛠️',lesson:1,
   explain:['Bắt đầu làm một việc (thường là việc có kế hoạch): 着手准备, 着手调查.','着 đọc zhuó (như 着想), không đọc zháo / zhe.'],
   usage:'着手 + V (động từ song âm tiết): 着手准备 / 着手制定 / 着手安置; 从……着手. Văn viết hơn 开始.',
   collo:['着手准备','着手安置','着手制定计划','着手调查'],
   ex_zh:'我七点起床，之后，先着手安置我的手机。',ex_py:'Wǒ qī diǎn qǐchuáng, zhīhòu, xiān zhuóshǒu ānzhì wǒ de shǒujī.',ex_vn:'Tôi dậy lúc bảy giờ, sau đó trước tiên bắt tay vào thu xếp chiếc điện thoại của mình.',
   exList:[
     {zh:'我七点起床，之后，先着手安置我的手机。',py:'Wǒ qī diǎn qǐchuáng, zhīhòu, xiān zhuóshǒu ānzhì wǒ de shǒujī.',vn:'Tôi dậy lúc bảy giờ, sau đó trước tiên bắt tay vào thu xếp chiếc điện thoại của mình.'},
     {zh:'很多单位在年底就着手制定第二年的计划了。',py:'Hěn duō dānwèi zài niándǐ jiù zhuóshǒu zhìdìng dì-èr nián de jìhuà le.',vn:'Nhiều cơ quan từ cuối năm đã bắt tay vào lập kế hoạch cho năm sau.'},
     {zh:'离高考还有一年，他已经着手准备了。',py:'Lí gāokǎo hái yǒu yì nián, tā yǐjīng zhuóshǒu zhǔnbèi le.',vn:'Còn một năm nữa mới thi đại học, cậu ấy đã bắt tay vào chuẩn bị rồi.'}
   ],
   colloFull:[
     {zh:'着手准备',py:'zhuóshǒu zhǔnbèi',vn:'bắt tay chuẩn bị'},
     {zh:'着手安置',py:'zhuóshǒu ānzhì',vn:'bắt tay thu xếp'},
     {zh:'着手制定计划',py:'zhuóshǒu zhìdìng jìhuà',vn:'bắt tay lập kế hoạch'},
     {zh:'着手调查',py:'zhuóshǒu diàochá',vn:'bắt tay điều tra'},
     {zh:'从小事着手',py:'cóng xiǎoshì zhuóshǒu',vn:'bắt đầu từ việc nhỏ'}
   ],
   patterns:[
     {s:'着手 + V (2 âm tiết)',m:'Bắt tay vào làm…'},
     {s:'从 + N + 着手',m:'Bắt đầu từ…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Muốn thay đổi thói quen thì nên bắt đầu từ những việc nhỏ.',answer:'要想改变习惯，就应该从小事着手。',answerPy:'Yào xiǎng gǎibiàn xíguàn, jiù yīnggāi cóng xiǎoshì zhuóshǒu.',
      note:'要想 + mục tiêu, 就 + điều cần làm.',pair:'要想……就……'},
     {promptLang:'vi',prompt:'Vừa nhận được nhiệm vụ, anh ấy liền bắt tay vào điều tra.',answer:'一接到任务，他就着手调查了。',answerPy:'Yì jiēdào rènwu, tā jiù zhuóshǒu diàochá le.',
      note:'一……就…… nối hai việc xảy ra liền nhau.',pair:'一……就……'}
   ]},

  {n:17,zh:'安置',py:'ānzhì',pos:'Động từ',vn:'thu xếp, bố trí, sắp đặt (vào chỗ thích hợp)',hv:'an trí',em:'📦',lesson:1,
   explain:['Đặt người / vật vào vị trí thích hợp, ổn thỏa: 安置行李, 安置手机.','Với người: bố trí chỗ ở, việc làm (安置灾民).'],
   usage:'安置 + N; 把 + N + 安置好 / 安置在 + nơi chốn.',
   collo:['安置手机','安置行李','把……安置好','安置灾民'],
   ex_zh:'之后，先着手安置我的手机。',ex_py:'Zhīhòu, xiān zhuóshǒu ānzhì wǒ de shǒujī.',ex_vn:'Sau đó, trước tiên tôi bắt tay vào thu xếp chiếc điện thoại của mình.',
   exList:[
     {zh:'之后，先着手安置我的手机。',py:'Zhīhòu, xiān zhuóshǒu ānzhì wǒ de shǒujī.',vn:'Sau đó, trước tiên tôi bắt tay vào thu xếp chiếc điện thoại của mình.'},
     {zh:'到了酒店，我们先把行李安置好，再出去吃饭。',py:'Dàole jiǔdiàn, wǒmen xiān bǎ xíngli ānzhì hǎo, zài chūqu chīfàn.',vn:'Đến khách sạn, chúng tôi sắp xếp hành lý ổn thỏa rồi mới ra ngoài ăn.'},
     {zh:'地震以后，政府很快安置了受灾的群众。',py:'Dìzhèn yǐhòu, zhèngfǔ hěn kuài ānzhìle shòuzāi de qúnzhòng.',vn:'Sau động đất, chính quyền nhanh chóng bố trí chỗ ở cho người dân bị nạn.'}
   ],
   colloFull:[
     {zh:'安置手机',py:'ānzhì shǒujī',vn:'cất xếp điện thoại'},
     {zh:'安置行李',py:'ānzhì xíngli',vn:'sắp xếp hành lý'},
     {zh:'把……安置好',py:'bǎ……ānzhì hǎo',vn:'thu xếp … ổn thỏa'},
     {zh:'安置灾民',py:'ānzhì zāimín',vn:'bố trí chỗ ở cho nạn nhân thiên tai'}
   ],
   patterns:[
     {s:'把 + N + 安置好 / 安置在……',m:'Thu xếp … ổn thỏa / vào …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi đi du lịch, cô ấy gửi con mèo ở nhà hàng xóm.',answer:'去旅行之前，她先把猫安置在邻居家里了。',answerPy:'Qù lǚxíng zhīqián, tā xiān bǎ māo ānzhì zài línjū jiā li le.',
      note:'把 + O + V + 在 + nơi chốn: đặt vật vào đâu.',pair:'把 + O + V + 在……'},
     {promptLang:'vi',prompt:'Không thu xếp ổn thỏa cho con, bố mẹ làm sao yên tâm đi làm được?',answer:'不把孩子安置好，父母怎么能放心去上班呢？',answerPy:'Bù bǎ háizi ānzhì hǎo, fùmǔ zěnme néng fàngxīn qù shàngbān ne?',
      note:'Phủ định đặt trước 把 (不把……); 怎么能……呢 là câu hỏi tu từ.',pair:'怎么能……呢？'}
   ]},

  {n:18,zh:'防止',py:'fángzhǐ',pos:'Động từ',vn:'đề phòng, ngăn ngừa (điều xấu)',hv:'phòng chỉ',em:'🛡️',lesson:1,
   explain:['Phòng trước để điều xấu không xảy ra: 防止事故, 防止感冒.','Tân ngữ luôn là việc XẤU, không mong muốn.'],
   usage:'为了防止 + việc xấu, ……; 防止 + N / cụm V. Thường ở vế mục đích.',
   collo:['防止意志薄弱','防止事故发生','防止感冒','有效防止'],
   ex_zh:'为了防止自己意志薄弱，我找来个精致的盒子，把手机层层包好。',ex_py:'Wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ zhǎolái ge jīngzhì de hézi, bǎ shǒujī céngcéng bāohǎo.',ex_vn:'Để phòng bản thân ý chí yếu đuối, tôi tìm một chiếc hộp tinh xảo, gói điện thoại lại từng lớp.',
   exList:[
     {zh:'为了防止自己意志薄弱，我找来个精致的盒子，把手机层层包好。',py:'Wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ zhǎolái ge jīngzhì de hézi, bǎ shǒujī céngcéng bāohǎo.',vn:'Để phòng bản thân ý chí yếu đuối, tôi tìm một chiếc hộp tinh xảo, gói điện thoại lại từng lớp.'},
     {zh:'为了防止事故发生，工厂每个月都进行安全检查。',py:'Wèile fángzhǐ shìgù fāshēng, gōngchǎng měi ge yuè dōu jìnxíng ānquán jiǎnchá.',vn:'Để ngăn ngừa tai nạn xảy ra, tháng nào nhà máy cũng kiểm tra an toàn.'},
     {zh:'天气变化大，要多穿衣服，防止感冒。',py:'Tiānqì biànhuà dà, yào duō chuān yīfu, fángzhǐ gǎnmào.',vn:'Thời tiết thay đổi nhiều, phải mặc thêm áo để phòng cảm.'}
   ],
   colloFull:[
     {zh:'防止意志薄弱',py:'fángzhǐ yìzhì bóruò',vn:'phòng ý chí yếu đuối'},
     {zh:'防止事故发生',py:'fángzhǐ shìgù fāshēng',vn:'ngăn tai nạn xảy ra'},
     {zh:'防止感冒',py:'fángzhǐ gǎnmào',vn:'phòng cảm'},
     {zh:'有效防止',py:'yǒuxiào fángzhǐ',vn:'ngăn ngừa hiệu quả'},
     {zh:'防止浪费',py:'fángzhǐ làngfèi',vn:'chống lãng phí'}
   ],
   patterns:[
     {s:'为了防止 + việc xấu，……',m:'Để phòng ngừa…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để phòng quên, tôi ghi tất cả việc cần làm vào sổ.',answer:'为了防止忘记，我把要做的事情都写在了本子上。',answerPy:'Wèile fángzhǐ wàngjì, wǒ bǎ yào zuò de shìqing dōu xiě zài le běnzi shang.',
      note:'为了 + mục đích ở vế trước; 把……写在……上.',pair:'为了……，……'},
     {promptLang:'vi',prompt:'Khi đi đường đừng xem điện thoại, như vậy có thể phòng xảy ra sự cố.',answer:'走路时别看手机，这样可以防止发生意外。',answerPy:'Zǒulù shí bié kàn shǒujī, zhèyàng kěyǐ fángzhǐ fāshēng yìwài.',
      note:'这样 ở đầu vế sau chỉ lại cả việc vừa nêu ("làm như vậy thì…").',pair:'……，这样可以……'}
   ]},

  {n:19,zh:'薄弱',py:'bóruò',pos:'Tính từ',vn:'yếu kém, yếu đuối, non yếu',hv:'bạc nhược',em:'🪫',lesson:1,
   explain:['Không mạnh, không vững: 意志薄弱 (ý chí yếu), 基础薄弱 (nền tảng yếu).','Thường dùng cho cái trừu tượng (ý chí, nền tảng, khâu), không dùng cho cơ thể (người yếu = 虚弱 / 瘦弱).'],
   usage:'意志 / 基础 / 力量 / 环节 + 薄弱; 薄弱环节 = khâu yếu. 薄 ở đây đọc bó.',
   collo:['意志薄弱','基础薄弱','薄弱环节','力量薄弱'],
   ex_zh:'为了防止自己意志薄弱，我找来个精致的盒子。',ex_py:'Wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ zhǎolái ge jīngzhì de hézi.',ex_vn:'Để phòng mình ý chí yếu đuối, tôi tìm một chiếc hộp tinh xảo.',
   exList:[
     {zh:'为了防止自己意志薄弱，我找来个精致的盒子。',py:'Wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ zhǎolái ge jīngzhì de hézi.',vn:'Để phòng mình ý chí yếu đuối, tôi tìm một chiếc hộp tinh xảo.'},
     {zh:'我的数学基础比较薄弱，得多下功夫。',py:'Wǒ de shùxué jīchǔ bǐjiào bóruò, děi duō xià gōngfu.',vn:'Nền tảng toán của tôi khá yếu, phải bỏ nhiều công sức hơn.'},
     {zh:'老师帮我们找出了复习中的薄弱环节。',py:'Lǎoshī bāng wǒmen zhǎochūle fùxí zhōng de bóruò huánjié.',vn:'Cô giáo giúp chúng tôi tìm ra những khâu yếu trong ôn tập.'}
   ],
   colloFull:[
     {zh:'意志薄弱',py:'yìzhì bóruò',vn:'ý chí yếu đuối'},
     {zh:'基础薄弱',py:'jīchǔ bóruò',vn:'nền tảng yếu'},
     {zh:'薄弱环节',py:'bóruò huánjié',vn:'khâu yếu'},
     {zh:'力量薄弱',py:'lìliang bóruò',vn:'lực lượng yếu'},
     {zh:'加强薄弱科目',py:'jiāqiáng bóruò kēmù',vn:'tăng cường môn học yếu'}
   ],
   patterns:[
     {s:'N (意志 / 基础) + 薄弱',m:'… yếu kém'},
     {s:'薄弱环节',m:'Khâu yếu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nền tảng tiếng Anh của cậu ấy tuy yếu, nhưng cậu ấy tiến bộ rất nhanh.',answer:'他的英语基础虽然薄弱，但是进步得很快。',answerPy:'Tā de Yīngyǔ jīchǔ suīrán bóruò, dànshì jìnbù de hěn kuài.',
      note:'虽然 có thể đứng sau chủ ngữ; vế sau 但是 chuyển ý.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Người ý chí yếu thì rất dễ bị điện thoại "bắt cóc".',answer:'意志薄弱的人很容易被手机绑架。',answerPy:'Yìzhì bóruò de rén hěn róngyì bèi shǒujī bǎngjià.',
      note:'Cụm chủ – vị 意志薄弱 làm định ngữ + 的 + 人; vế sau là câu bị động 被.',pair:'被字句'}
   ]},

  {n:20,zh:'精致',py:'jīngzhì',pos:'Tính từ',vn:'tinh xảo, tinh tế, đẹp đẽ',hv:'tinh trí',em:'🎁',lesson:1,
   explain:['(Đồ vật) được làm tỉ mỉ, khéo léo, đẹp: 精致的盒子, 做工精致.','Dùng cho đồ vật, món ăn, trang trí; không dùng khen tính cách con người.'],
   usage:'精致的 + N; 做工 / 包装 + 精致; 小巧精致.',
   collo:['精致的盒子','做工精致','包装精致','小巧精致'],
   ex_zh:'我找来个精致的盒子，把手机层层包好。',ex_py:'Wǒ zhǎolái ge jīngzhì de hézi, bǎ shǒujī céngcéng bāohǎo.',ex_vn:'Tôi tìm một chiếc hộp tinh xảo, gói điện thoại lại từng lớp.',
   exList:[
     {zh:'我找来个精致的盒子，把手机层层包好。',py:'Wǒ zhǎolái ge jīngzhì de hézi, bǎ shǒujī céngcéng bāohǎo.',vn:'Tôi tìm một chiếc hộp tinh xảo, gói điện thoại lại từng lớp.'},
     {zh:'这家店的点心不但好吃，而且做得非常精致。',py:'Zhè jiā diàn de diǎnxin búdàn hǎochī, érqiě zuò de fēicháng jīngzhì.',vn:'Bánh của tiệm này không những ngon mà còn làm rất tinh xảo.'},
     {zh:'这个小巧精致的手机壳是朋友送给我的生日礼物。',py:'Zhège xiǎoqiǎo jīngzhì de shǒujīké shì péngyou sòng gěi wǒ de shēngrì lǐwù.',vn:'Chiếc ốp điện thoại nhỏ xinh tinh xảo này là quà sinh nhật bạn tặng tôi.'}
   ],
   colloFull:[
     {zh:'精致的盒子',py:'jīngzhì de hézi',vn:'chiếc hộp tinh xảo'},
     {zh:'做工精致',py:'zuògōng jīngzhì',vn:'gia công tinh xảo'},
     {zh:'包装精致',py:'bāozhuāng jīngzhì',vn:'bao bì đẹp'},
     {zh:'小巧精致',py:'xiǎoqiǎo jīngzhì',vn:'nhỏ xinh tinh xảo'},
     {zh:'精致的点心',py:'jīngzhì de diǎnxin',vn:'bánh ngọt tinh tế'}
   ],
   patterns:[
     {s:'精致的 + N',m:'… tinh xảo'},
     {s:'做工 / 包装 + 精致',m:'Gia công / bao bì tinh xảo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món quà này gói tinh xảo như vậy, chắc chắn không rẻ.',answer:'这件礼物包装得这么精致，肯定不便宜。',answerPy:'Zhè jiàn lǐwù bāozhuāng de zhème jīngzhì, kěndìng bù piányi.',
      note:'V + 得 + 这么 + Adj: bổ ngữ trạng thái; vế sau suy đoán bằng 肯定.',pair:'V + 得 + 这么……'},
     {promptLang:'vi',prompt:'Chiếc bình hoa này không chỉ tinh xảo mà còn rất có giá trị.',answer:'这个花瓶不仅精致，而且很有价值。',answerPy:'Zhège huāpíng bùjǐn jīngzhì, érqiě hěn yǒu jiàzhí.',
      note:'不仅……而且…… tăng tiến (văn viết hơn 不但).',pair:'不仅……而且……'}
   ]},

  {n:21,zh:'庄重',py:'zhuāngzhòng',pos:'Tính từ',vn:'trang trọng, nghiêm trang',hv:'trang trọng',em:'🎩',lesson:1,
   explain:['(Lời nói, cử chỉ, trang phục, không khí) nghiêm túc, trịnh trọng, không tùy tiện.','Trong bài dùng hài hước: 庄重地放在盒子里 — cất điện thoại trịnh trọng như làm lễ.'],
   usage:'庄重地 + V; 穿着 / 态度 / 场合 + 庄重. Gần nghĩa 郑重 (bài 1): 郑重 nhấn vào thái độ nghiêm túc khi nói, hứa.',
   collo:['庄重地放在','穿着庄重','庄重的场合','态度庄重'],
   ex_zh:'我把手机层层包好，庄重地放在盒子里，收到衣柜最里面。',ex_py:'Wǒ bǎ shǒujī céngcéng bāohǎo, zhuāngzhòng de fàng zài hézi li, shōudào yīguì zuì lǐmiàn.',ex_vn:'Tôi gói điện thoại từng lớp, trịnh trọng đặt vào hộp, cất vào tận trong cùng tủ quần áo.',
   exList:[
     {zh:'我把手机层层包好，庄重地放在盒子里，收到衣柜最里面。',py:'Wǒ bǎ shǒujī céngcéng bāohǎo, zhuāngzhòng de fàng zài hézi li, shōudào yīguì zuì lǐmiàn.',vn:'Tôi gói điện thoại từng lớp, trịnh trọng đặt vào hộp, cất vào tận trong cùng tủ quần áo.'},
     {zh:'参加毕业典礼要穿得庄重一点儿。',py:'Cānjiā bìyè diǎnlǐ yào chuān de zhuāngzhòng yìdiǎnr.',vn:'Dự lễ tốt nghiệp phải ăn mặc trang trọng một chút.'},
     {zh:'在这样庄重的场合，你别开玩笑了。',py:'Zài zhèyàng zhuāngzhòng de chǎnghé, nǐ bié kāi wánxiào le.',vn:'Ở một dịp trang trọng như thế này, cậu đừng đùa nữa.'}
   ],
   colloFull:[
     {zh:'庄重地放在',py:'zhuāngzhòng de fàng zài',vn:'trịnh trọng đặt vào'},
     {zh:'穿着庄重',py:'chuānzhuó zhuāngzhòng',vn:'ăn mặc trang trọng'},
     {zh:'庄重的场合',py:'zhuāngzhòng de chǎnghé',vn:'dịp trang trọng'},
     {zh:'态度庄重',py:'tàidu zhuāngzhòng',vn:'thái độ nghiêm trang'}
   ],
   patterns:[
     {s:'庄重地 + V',m:'Trịnh trọng làm gì'},
     {s:'庄重的场合',m:'Dịp / nơi trang trọng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dịp trang trọng như vậy, cậu sao có thể mặc quần đùi mà đi được?',answer:'这么庄重的场合，你怎么能穿短裤去呢？',answerPy:'Zhème zhuāngzhòng de chǎnghé, nǐ zěnme néng chuān duǎnkù qù ne?',
      note:'怎么能……呢 là câu hỏi tu từ = không thể….',pair:'怎么能……呢？'},
     {promptLang:'vi',prompt:'Hiệu trưởng trịnh trọng trao giấy khen cho từng học sinh.',answer:'校长庄重地把奖状发给了每一个学生。',answerPy:'Xiàozhǎng zhuāngzhòng de bǎ jiǎngzhuàng fā gěi le měi yí ge xuésheng.',
      note:'Trạng ngữ 庄重地 đứng trước 把; 把 + O + V + 给 + người.',pair:'把 + O + V + 给……'}
   ]},

  {n:22,zh:'分散',py:'fēnsàn',pos:'Động từ',vn:'phân tán, làm phân tán; rải rác',hv:'phân tán',em:'🌀',lesson:1,
   explain:['Động từ: làm cho không tập trung — 分散注意力 (đánh lạc hướng sự chú ý).','Tính từ: rải rác, không tập trung một chỗ (住得很分散).'],
   usage:'分散注意力 / 分散精力; 比较分散. Trái nghĩa: 集中.',
   collo:['分散注意力','分散精力','住得很分散'],
   ex_zh:'为了分散注意力，我决定去公园锻炼我那僵硬的四肢。',ex_py:'Wèile fēnsàn zhùyìlì, wǒ juédìng qù gōngyuán duànliàn wǒ nà jiāngyìng de sìzhī.',ex_vn:'Để đánh lạc hướng sự chú ý, tôi quyết định ra công viên vận động tứ chi cứng đờ của mình.',
   exList:[
     {zh:'为了分散注意力，我决定去公园锻炼我那僵硬的四肢。',py:'Wèile fēnsàn zhùyìlì, wǒ juédìng qù gōngyuán duànliàn wǒ nà jiāngyìng de sìzhī.',vn:'Để đánh lạc hướng sự chú ý, tôi quyết định ra công viên vận động tứ chi cứng đờ của mình.'},
     {zh:'学习时把手机放远一点儿，免得分散精力。',py:'Xuéxí shí bǎ shǒujī fàng yuǎn yìdiǎnr, miǎnde fēnsàn jīnglì.',vn:'Khi học hãy để điện thoại xa ra một chút, để khỏi phân tán tinh thần.'},
     {zh:'我们班同学住得很分散，聚一次不容易。',py:'Wǒmen bān tóngxué zhù de hěn fēnsàn, jù yí cì bù róngyì.',vn:'Bạn cùng lớp tôi ở rải rác khắp nơi, tụ tập một lần không dễ.'}
   ],
   colloFull:[
     {zh:'分散注意力',py:'fēnsàn zhùyìlì',vn:'đánh lạc hướng / phân tán sự chú ý'},
     {zh:'分散精力',py:'fēnsàn jīnglì',vn:'phân tán tinh thần, sức lực'},
     {zh:'住得很分散',py:'zhù de hěn fēnsàn',vn:'ở rải rác'},
     {zh:'力量分散',py:'lìliang fēnsàn',vn:'lực lượng phân tán'}
   ],
   patterns:[
     {s:'分散 + 注意力 / 精力',m:'Làm phân tán sự chú ý / sức lực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa làm bài tập vừa nghe nhạc sẽ làm phân tán sự chú ý.',answer:'一边写作业一边听音乐，会分散注意力。',answerPy:'Yìbiān xiě zuòyè yìbiān tīng yīnyuè, huì fēnsàn zhùyìlì.',
      note:'一边 A 一边 B: hai hành động diễn ra cùng lúc.',pair:'一边……一边……'},
     {promptLang:'vi',prompt:'Cất điện thoại đi, kẻo phân tán sự chú ý.',answer:'把手机收起来吧，免得分散注意力。',answerPy:'Bǎ shǒujī shōu qǐlái ba, miǎnde fēnsàn zhùyìlì.',
      note:'免得 = kẻo, để khỏi — đứng đầu vế sau, nêu điều muốn tránh.',pair:'免得'}
   ]},

  {n:23,zh:'僵硬',py:'jiāngyìng',pos:'Tính từ',vn:'cứng đờ; cứng nhắc',hv:'cương ngạnh',em:'🧊',lesson:1,
   explain:['(Tay chân, cơ thể) cứng, không cử động linh hoạt được: 四肢僵硬.','Nghĩa bóng: cứng nhắc, thiếu linh hoạt (态度僵硬, 气氛僵硬).'],
   usage:'身体 / 四肢 / 表情 + 僵硬; 变得僵硬; 冻得僵硬.',
   collo:['僵硬的四肢','表情僵硬','冻得僵硬','动作僵硬'],
   ex_zh:'我决定去公园锻炼我那僵硬的四肢。',ex_py:'Wǒ juédìng qù gōngyuán duànliàn wǒ nà jiāngyìng de sìzhī.',ex_vn:'Tôi quyết định ra công viên vận động tứ chi cứng đờ của mình.',
   exList:[
     {zh:'我决定去公园锻炼我那僵硬的四肢。',py:'Wǒ juédìng qù gōngyuán duànliàn wǒ nà jiāngyìng de sìzhī.',vn:'Tôi quyết định ra công viên vận động tứ chi cứng đờ của mình.'},
     {zh:'在电脑前坐了一整天，我的脖子都僵硬了。',py:'Zài diànnǎo qián zuòle yì zhěng tiān, wǒ de bózi dōu jiāngyìng le.',vn:'Ngồi trước máy tính cả ngày, cổ tôi cứng đờ cả rồi.'},
     {zh:'第一次上台表演，他紧张得表情都僵硬了。',py:'Dì-yī cì shàng tái biǎoyǎn, tā jǐnzhāng de biǎoqíng dōu jiāngyìng le.',vn:'Lần đầu lên sân khấu biểu diễn, cậu ấy căng thẳng đến mức nét mặt cứng đờ.'}
   ],
   colloFull:[
     {zh:'僵硬的四肢',py:'jiāngyìng de sìzhī',vn:'tứ chi cứng đờ'},
     {zh:'表情僵硬',py:'biǎoqíng jiāngyìng',vn:'nét mặt cứng đờ'},
     {zh:'冻得僵硬',py:'dòng de jiāngyìng',vn:'cóng cứng'},
     {zh:'动作僵硬',py:'dòngzuò jiāngyìng',vn:'động tác cứng nhắc'},
     {zh:'脖子僵硬',py:'bózi jiāngyìng',vn:'cứng cổ'}
   ],
   patterns:[
     {s:'N (bộ phận cơ thể) + 僵硬',m:'… cứng đờ'},
     {s:'Adj / V + 得 + (N) + 僵硬',m:'… đến mức cứng đờ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngồi lâu quá, cả người tôi cứng đờ, phải đứng dậy vận động một chút.',answer:'坐得太久了，我浑身僵硬，得站起来活动活动。',answerPy:'Zuò de tài jiǔ le, wǒ húnshēn jiāngyìng, děi zhàn qǐlái huódòng huódòng.',
      note:'Động từ song âm tiết lặp ABAB (活动活动) = làm một chút; 浑身 ôn bài 3.',pair:'lặp động từ ABAB'},
     {promptLang:'vi',prompt:'Trời lạnh đến mức ngón tay tôi cứng đờ, đến bút cũng cầm không nổi.',answer:'天冷得我手指都僵硬了，连笔都拿不住。',answerPy:'Tiān lěng de wǒ shǒuzhǐ dōu jiāngyìng le, lián bǐ dōu ná bu zhù.',
      note:'连……都…… + bổ ngữ khả năng phủ định 拿不住.',pair:'连……都……'}
   ]},

  {n:24,zh:'四肢',py:'sìzhī',pos:'Danh từ',vn:'tứ chi, tay chân',hv:'tứ chi',em:'🤸',lesson:1,
   explain:['Hai tay và hai chân của người (hoặc bốn chân của động vật).','Văn viết hơn 手脚; hay gặp: 活动四肢, 四肢无力, 四肢发达.'],
   usage:'活动 / 锻炼 + 四肢; 四肢无力 (rã rời) / 四肢发达.',
   collo:['锻炼四肢','活动活动四肢','四肢无力','四肢发达'],
   ex_zh:'早上6:00起床，先活动活动四肢，然后做一顿营养丰富的早餐。',ex_py:'Zǎoshang liù diǎn qǐchuáng, xiān huódòng huódòng sìzhī, ránhòu zuò yí dùn yíngyǎng fēngfù de zǎocān.',ex_vn:'Sáng 6 giờ dậy, trước tiên vận động tay chân một chút, sau đó làm một bữa sáng giàu dinh dưỡng.',
   exList:[
     {zh:'早上6:00起床，先活动活动四肢，然后做一顿营养丰富的早餐。',py:'Zǎoshang liù diǎn qǐchuáng, xiān huódòng huódòng sìzhī, ránhòu zuò yí dùn yíngyǎng fēngfù de zǎocān.',vn:'Sáng 6 giờ dậy, trước tiên vận động tay chân một chút, sau đó làm một bữa sáng giàu dinh dưỡng.'},
     {zh:'发烧的时候，我觉得四肢无力，什么都不想做。',py:'Fāshāo de shíhou, wǒ juéde sìzhī wúlì, shénme dōu bù xiǎng zuò.',vn:'Lúc sốt, tôi thấy tay chân rã rời, chẳng muốn làm gì.'},
     {zh:'别以为运动员都是四肢发达、头脑简单。',py:'Bié yǐwéi yùndòngyuán dōu shì sìzhī fādá, tóunǎo jiǎndān.',vn:'Đừng tưởng vận động viên đều là "tay chân phát triển, đầu óc đơn giản".'}
   ],
   colloFull:[
     {zh:'锻炼四肢',py:'duànliàn sìzhī',vn:'rèn luyện tay chân'},
     {zh:'活动活动四肢',py:'huódòng huódòng sìzhī',vn:'vận động tay chân một chút'},
     {zh:'四肢无力',py:'sìzhī wúlì',vn:'tay chân rã rời'},
     {zh:'四肢发达',py:'sìzhī fādá',vn:'tay chân phát triển'},
     {zh:'四肢僵硬',py:'sìzhī jiāngyìng',vn:'tay chân cứng đờ'}
   ],
   patterns:[
     {s:'活动 / 锻炼 + 四肢',m:'Vận động tay chân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học một tiếng rồi thì nên đứng dậy vận động tay chân một chút.',answer:'学了一个小时以后，应该站起来活动活动四肢。',answerPy:'Xuéle yí ge xiǎoshí yǐhòu, yīnggāi zhàn qǐlái huódòng huódòng sìzhī.',
      note:'V + 了 + thời lượng + 以后; động từ lặp ABAB = làm một chút.',pair:'V + 了 + thời lượng'},
     {promptLang:'vi',prompt:'Tuy tay chân rã rời, nhưng cậu ấy vẫn kiên trì chạy đến đích.',answer:'尽管四肢无力，他还是坚持跑到了终点。',answerPy:'Jǐnguǎn sìzhī wúlì, tā háishi jiānchí pǎodàole zhōngdiǎn.',
      note:'尽管……还是…… = tuy… vẫn….',pair:'尽管……还是……'}
   ]},

  {n:25,zh:'特长',py:'tècháng',pos:'Danh từ',vn:'sở trường, năng khiếu',hv:'đặc trường',em:'🌟',lesson:1,
   explain:['Kỹ năng, năng lực đặc biệt giỏi của một người: 跳舞是我的特长.','Gần nghĩa 拿手 (bài 1) nhưng 特长 là danh từ, còn 拿手 là tính từ (拿手菜).'],
   usage:'……是我的特长; 发挥特长; 有什么特长? 特长生 = học sinh năng khiếu.',
   collo:['发挥特长','有什么特长','特长生','没有特长'],
   ex_zh:'跳舞是我的特长，我兴高采烈地跳起了摇滚。',ex_py:'Tiàowǔ shì wǒ de tècháng, wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn.',ex_vn:'Nhảy là sở trường của tôi, tôi hớn hở nhảy điệu rock.',
   exList:[
     {zh:'跳舞是我的特长，我兴高采烈地跳起了摇滚。',py:'Tiàowǔ shì wǒ de tècháng, wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn.',vn:'Nhảy là sở trường của tôi, tôi hớn hở nhảy điệu rock.'},
     {zh:'面试的时候，经理问我有什么特长。',py:'Miànshì de shíhou, jīnglǐ wèn wǒ yǒu shénme tècháng.',vn:'Lúc phỏng vấn, giám đốc hỏi tôi có sở trường gì.'},
     {zh:'学校应该让每个学生都有机会发挥自己的特长。',py:'Xuéxiào yīnggāi ràng měi ge xuésheng dōu yǒu jīhuì fāhuī zìjǐ de tècháng.',vn:'Nhà trường nên để mỗi học sinh đều có cơ hội phát huy sở trường của mình.'}
   ],
   colloFull:[
     {zh:'发挥特长',py:'fāhuī tècháng',vn:'phát huy sở trường'},
     {zh:'有什么特长',py:'yǒu shénme tècháng',vn:'có sở trường gì'},
     {zh:'特长生',py:'tèchángshēng',vn:'học sinh năng khiếu'},
     {zh:'没有特长',py:'méiyǒu tècháng',vn:'không có sở trường'},
     {zh:'兴趣特长',py:'xìngqù tècháng',vn:'sở thích và năng khiếu'}
   ],
   patterns:[
     {s:'…… + 是我的特长',m:'… là sở trường của tôi'},
     {s:'发挥 + (自己的) + 特长',m:'Phát huy sở trường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vẽ tranh là sở trường của cô ấy, vì vậy lớp giao việc làm báo tường cho cô ấy.',answer:'画画儿是她的特长，所以班里把出黑板报的任务交给了她。',answerPy:'Huà huàr shì tā de tècháng, suǒyǐ bān li bǎ chū hēibǎnbào de rènwu jiāo gěi le tā.',
      note:'所以 nêu kết quả; 把 + nhiệm vụ + 交给 + người.',pair:'……，所以……'},
     {promptLang:'vi',prompt:'Chỉ cần phát huy được sở trường của mình, ai cũng có cơ hội thành công.',answer:'只要能发挥自己的特长，每个人就都有机会成功。',answerPy:'Zhǐyào néng fāhuī zìjǐ de tècháng, měi ge rén jiù dōu yǒu jīhuì chénggōng.',
      note:'只要……就……; 就 đứng sau chủ ngữ 每个人, trước 都.',pair:'只要……就……'}
   ]},

  {n:26,zh:'兴高采烈',py:'xìnggāo-cǎiliè',pos:'Thành ngữ',vn:'hớn hở, phấn khởi, vui mừng hăng hái',hv:'hứng cao thái liệt',em:'🥳',lesson:1,
   explain:['兴 = hứng thú, 采 = tinh thần: hứng thú dâng cao, tinh thần sôi nổi → vô cùng vui vẻ, phấn khởi.','Thường làm trạng ngữ: 兴高采烈地 + V; cũng làm vị ngữ: 大家都兴高采烈的.'],
   usage:'兴高采烈地 + V (跳 / 讨论 / 出发). 兴 đọc xìng (thanh 4), không phải xīng.',
   collo:['兴高采烈地跳','兴高采烈地讨论','兴高采烈地出发'],
   ex_zh:'跳舞是我的特长，我兴高采烈地跳起了摇滚。',ex_py:'Tiàowǔ shì wǒ de tècháng, wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn.',ex_vn:'Nhảy là sở trường của tôi, tôi hớn hở nhảy điệu rock.',
   exList:[
     {zh:'跳舞是我的特长，我兴高采烈地跳起了摇滚。',py:'Tiàowǔ shì wǒ de tècháng, wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn.',vn:'Nhảy là sở trường của tôi, tôi hớn hở nhảy điệu rock.'},
     {zh:'放假前一天，同学们兴高采烈地讨论着假期计划。',py:'Fàngjià qián yì tiān, tóngxuémen xìnggāo-cǎiliè de tǎolùnzhe jiàqī jìhuà.',vn:'Trước ngày nghỉ một hôm, các bạn hớn hở bàn về kế hoạch kỳ nghỉ.'},
     {zh:'孩子们兴高采烈地出发去春游了。',py:'Háizimen xìnggāo-cǎiliè de chūfā qù chūnyóu le.',vn:'Bọn trẻ hớn hở lên đường đi dã ngoại mùa xuân.'}
   ],
   colloFull:[
     {zh:'兴高采烈地跳',py:'xìnggāo-cǎiliè de tiào',vn:'hớn hở nhảy'},
     {zh:'兴高采烈地讨论',py:'xìnggāo-cǎiliè de tǎolùn',vn:'hăng hái bàn luận'},
     {zh:'兴高采烈地出发',py:'xìnggāo-cǎiliè de chūfā',vn:'hớn hở lên đường'},
     {zh:'显得兴高采烈',py:'xiǎnde xìnggāo-cǎiliè',vn:'trông rất phấn khởi'}
   ],
   patterns:[
     {s:'兴高采烈地 + V',m:'Hớn hở làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nghe nói được đi du lịch, bọn trẻ đã hớn hở đi thu dọn hành lý.',answer:'一听说要去旅行，孩子们就兴高采烈地去收拾行李了。',answerPy:'Yì tīngshuō yào qù lǚxíng, háizimen jiù xìnggāo-cǎiliè de qù shōushi xíngli le.',
      note:'一……就…… nối hai việc liền nhau; trạng ngữ 兴高采烈地 đứng trước cụm động từ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Mọi người đều hớn hở, chỉ có cậu ấy là buồn bã không vui.',answer:'大家都兴高采烈的，唯独他闷闷不乐。',answerPy:'Dàjiā dōu xìnggāo-cǎiliè de, wéidú tā mènmèn bú lè.',
      note:'唯独 (bài 6) = chỉ riêng, nêu ngoại lệ duy nhất.',pair:'唯独'}
   ]},

  {n:27,zh:'摇滚',py:'yáogǔn',pos:'Danh từ',vn:'nhạc rock',hv:'dao cổn',em:'🎸',lesson:1,
   explain:['Viết tắt của 摇滚乐 (nhạc rock and roll), nhịp mạnh, sôi động.','Cũng chỉ điệu nhảy theo nhạc rock: 跳摇滚.'],
   usage:'听 / 唱 / 跳 + 摇滚; 摇滚乐 / 摇滚歌手 / 摇滚乐队.',
   collo:['跳起了摇滚','摇滚乐','摇滚歌手','摇滚乐队'],
   ex_zh:'我兴高采烈地跳起了摇滚，既能娱乐身心，又能锻炼身体。',ex_py:'Wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn, jì néng yúlè shēnxīn, yòu néng duànliàn shēntǐ.',ex_vn:'Tôi hớn hở nhảy điệu rock, vừa giải trí thân tâm, vừa rèn luyện cơ thể.',
   exList:[
     {zh:'我兴高采烈地跳起了摇滚，既能娱乐身心，又能锻炼身体。',py:'Wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn, jì néng yúlè shēnxīn, yòu néng duànliàn shēntǐ.',vn:'Tôi hớn hở nhảy điệu rock, vừa giải trí thân tâm, vừa rèn luyện cơ thể.'},
     {zh:'我哥哥特别喜欢摇滚乐，房间里贴满了摇滚歌手的照片。',py:'Wǒ gēge tèbié xǐhuan yáogǔnyuè, fángjiān li tiēmǎnle yáogǔn gēshǒu de zhàopiàn.',vn:'Anh tôi rất thích nhạc rock, trong phòng dán đầy ảnh ca sĩ rock.'},
     {zh:'他们几个同学组了一个摇滚乐队。',py:'Tāmen jǐ ge tóngxué zǔle yí ge yáogǔn yuèduì.',vn:'Mấy bạn học đó lập một ban nhạc rock.'}
   ],
   colloFull:[
     {zh:'跳起了摇滚',py:'tiàoqǐle yáogǔn',vn:'nhảy điệu rock'},
     {zh:'摇滚乐',py:'yáogǔnyuè',vn:'nhạc rock'},
     {zh:'摇滚歌手',py:'yáogǔn gēshǒu',vn:'ca sĩ rock'},
     {zh:'摇滚乐队',py:'yáogǔn yuèduì',vn:'ban nhạc rock'}
   ],
   patterns:[
     {s:'听 / 唱 / 跳 + 摇滚',m:'Nghe / hát / nhảy nhạc rock'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sở dĩ ông không thích nhạc rock là vì ông thấy nó quá ồn.',answer:'爷爷之所以不喜欢摇滚乐，是因为他觉得太吵了。',answerPy:'Yéye zhīsuǒyǐ bù xǐhuan yáogǔnyuè, shì yīnwèi tā juéde tài chǎo le.',
      note:'之所以 + kết quả, 是因为 + nguyên nhân (nhấn mạnh nguyên nhân).',pair:'之所以……是因为……'},
     {promptLang:'vi',prompt:'Vừa nghe thấy nhạc rock, cậu ấy đã không nhịn được mà nhảy theo.',answer:'一听到摇滚乐，他就忍不住跟着跳了起来。',answerPy:'Yì tīngdào yáogǔnyuè, tā jiù rěn bu zhù gēnzhe tiàole qǐlái.',
      note:'V + 起来 = bắt đầu (làm gì); 了 đặt giữa: 跳了起来.',pair:'V + 起来'}
   ]},

  {n:28,zh:'一举两得',py:'yìjǔ-liǎngdé',pos:'Thành ngữ',vn:'một công đôi việc, một mũi tên trúng hai đích',hv:'nhất cử lưỡng đắc',em:'🏹',lesson:1,
   explain:['Làm một việc mà được hai cái lợi.','Thường đứng cuối câu, sau khi đã nêu hai cái lợi: 既……又……，一举两得.'],
   usage:'既 A 又 B，一举两得; 真是一举两得; 一举两得的办法. Gần nghĩa 一箭双雕.',
   collo:['真是一举两得','一举两得的办法','可谓一举两得'],
   ex_zh:'我跳起了摇滚，既能娱乐身心，又能锻炼身体，一举两得。',ex_py:'Wǒ tiàoqǐle yáogǔn, jì néng yúlè shēnxīn, yòu néng duànliàn shēntǐ, yìjǔ-liǎngdé.',ex_vn:'Tôi nhảy điệu rock, vừa giải trí thân tâm, vừa rèn luyện cơ thể, một công đôi việc.',
   exList:[
     {zh:'我跳起了摇滚，既能娱乐身心，又能锻炼身体，一举两得。',py:'Wǒ tiàoqǐle yáogǔn, jì néng yúlè shēnxīn, yòu néng duànliàn shēntǐ, yìjǔ-liǎngdé.',vn:'Tôi nhảy điệu rock, vừa giải trí thân tâm, vừa rèn luyện cơ thể, một công đôi việc.'},
     {zh:'骑自行车上学既省钱又锻炼身体，真是一举两得。',py:'Qí zìxíngchē shàngxué jì shěng qián yòu duànliàn shēntǐ, zhēn shì yìjǔ-liǎngdé.',vn:'Đạp xe đi học vừa tiết kiệm tiền vừa rèn luyện sức khỏe, đúng là một công đôi việc.'},
     {zh:'给外国朋友当导游，既能练口语，又能交朋友，是个一举两得的好办法。',py:'Gěi wàiguó péngyou dāng dǎoyóu, jì néng liàn kǒuyǔ, yòu néng jiāo péngyou, shì ge yìjǔ-liǎngdé de hǎo bànfǎ.',vn:'Làm hướng dẫn viên cho bạn nước ngoài vừa luyện được khẩu ngữ, vừa kết bạn được, là một cách hay một công đôi việc.'}
   ],
   colloFull:[
     {zh:'真是一举两得',py:'zhēn shì yìjǔ-liǎngdé',vn:'đúng là một công đôi việc'},
     {zh:'一举两得的办法',py:'yìjǔ-liǎngdé de bànfǎ',vn:'cách làm một công đôi việc'},
     {zh:'可谓一举两得',py:'kěwèi yìjǔ-liǎngdé',vn:'có thể nói là một công đôi việc'},
     {zh:'一举多得',py:'yìjǔ-duōdé',vn:'một công nhiều việc'}
   ],
   patterns:[
     {s:'既 A 又 B，一举两得',m:'Vừa A vừa B, một công đôi việc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đọc báo tiếng Trung vừa có thể biết tin tức, lại vừa học được từ mới, một công đôi việc.',answer:'看中文报纸既能了解新闻，又能学到生词，一举两得。',answerPy:'Kàn Zhōngwén bàozhǐ jì néng liǎojiě xīnwén, yòu néng xuédào shēngcí, yìjǔ-liǎngdé.',
      note:'既……又…… nối hai lợi ích song song, 一举两得 tổng kết ở cuối.',pair:'既……又……'},
     {promptLang:'vi',prompt:'Giúp mẹ làm việc nhà không những đỡ được mẹ mà còn rèn luyện được bản thân, thật là một công đôi việc.',answer:'帮妈妈做家务不但能帮妈妈的忙，而且能锻炼自己，真是一举两得。',answerPy:'Bāng māma zuò jiāwù búdàn néng bāng māma de máng, érqiě néng duànliàn zìjǐ, zhēn shì yìjǔ-liǎngdé.',
      note:'不但……而且……; 帮忙 là động từ ly hợp: 帮妈妈的忙.',pair:'不但……而且……'}
   ]},

  {n:29,zh:'冷落',py:'lěngluò',pos:'Động từ',vn:'đối xử lạnh nhạt, bỏ rơi, hờ hững',hv:'lãnh lạc',em:'🥀',lesson:1,
   explain:['Đối xử lạnh nhạt, không quan tâm đến ai / cái gì: 冷落客人, 被冷落.','Tính từ: vắng vẻ, hiu quạnh (门前冷落).'],
   usage:'冷落 + người / vật; 被冷落了; 受到冷落. Trong bài: điện thoại "bị bỏ rơi" nửa ngày (nhân hóa).',
   collo:['被冷落','冷落客人','受到冷落'],
   ex_zh:'跳完舞，我往家走，突然想起被冷落了半天儿的手机。',ex_py:'Tiàowán wǔ, wǒ wǎng jiā zǒu, tūrán xiǎngqǐ bèi lěngluòle bàntiānr de shǒujī.',ex_vn:'Nhảy xong, tôi đi về nhà, bỗng nhớ đến chiếc điện thoại bị bỏ rơi nửa ngày.',
   exList:[
     {zh:'跳完舞，我往家走，突然想起被冷落了半天儿的手机。',py:'Tiàowán wǔ, wǒ wǎng jiā zǒu, tūrán xiǎngqǐ bèi lěngluòle bàntiānr de shǒujī.',vn:'Nhảy xong, tôi đi về nhà, bỗng nhớ đến chiếc điện thoại bị bỏ rơi nửa ngày.'},
     {zh:'主人只顾着看手机，把客人冷落在一边。',py:'Zhǔrén zhǐ gùzhe kàn shǒujī, bǎ kèrén lěngluò zài yìbiān.',vn:'Chủ nhà chỉ lo xem điện thoại, bỏ mặc khách một bên.'},
     {zh:'有了弟弟以后，姐姐觉得自己受到了冷落。',py:'Yǒule dìdi yǐhòu, jiějie juéde zìjǐ shòudàole lěngluò.',vn:'Từ khi có em trai, chị gái cảm thấy mình bị lạnh nhạt.'}
   ],
   colloFull:[
     {zh:'被冷落',py:'bèi lěngluò',vn:'bị bỏ rơi, bị lạnh nhạt'},
     {zh:'冷落客人',py:'lěngluò kèrén',vn:'lạnh nhạt với khách'},
     {zh:'受到冷落',py:'shòudào lěngluò',vn:'bị đối xử lạnh nhạt'},
     {zh:'把……冷落在一边',py:'bǎ……lěngluò zài yìbiān',vn:'bỏ mặc … một bên'}
   ],
   patterns:[
     {s:'被 / 受到 + 冷落',m:'Bị lạnh nhạt'},
     {s:'把 + người + 冷落在一边',m:'Bỏ mặc ai một bên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng vì chỉ lo chơi điện thoại mà bỏ mặc bạn bè một bên.',answer:'别因为只顾玩儿手机，就把朋友冷落在一边。',answerPy:'Bié yīnwèi zhǐ gù wánr shǒujī, jiù bǎ péngyou lěngluò zài yìbiān.',
      note:'别因为 A 就 B = đừng vì A mà B.',pair:'别因为……就……'},
     {promptLang:'vi',prompt:'Bị bỏ xó một thời gian, cuốn sách tiếng Trung đó phủ đầy bụi.',answer:'被冷落了一段时间以后，那本汉语书上落满了灰。',answerPy:'Bèi lěngluòle yí duàn shíjiān yǐhòu, nà běn Hànyǔ shū shang luòmǎnle huī.',
      note:'被 + V + 了 + thời lượng (tác nhân được lược bỏ).',pair:'被字句'}
   ]},

  {n:30,zh:'踏实',py:'tāshi',pos:'Tính từ',vn:'yên tâm, vững dạ; (làm việc) chắc chắn, chăm chỉ',hv:'đạp thực',em:'😌',lesson:1,
   explain:['(Tâm trạng) yên ổn, không lo lắng: 心里踏实了许多.','(Thái độ làm việc) cẩn thận, chắc chắn, không qua loa: 工作很踏实.'],
   usage:'心里 + 踏实; 睡不踏实; 踏踏实实地 + V (làm việc chắc chắn). Đọc tāshi (实 thanh nhẹ).',
   collo:['心里踏实','睡不踏实','踏踏实实地工作','学得很踏实'],
   ex_zh:'打开衣柜，手机还在，我心里踏实了许多。',ex_py:'Dǎkāi yīguì, shǒujī hái zài, wǒ xīnli tāshile xǔduō.',ex_vn:'Mở tủ quần áo, điện thoại vẫn còn, lòng tôi yên tâm hơn nhiều.',
   exList:[
     {zh:'打开衣柜，手机还在，我心里踏实了许多。',py:'Dǎkāi yīguì, shǒujī hái zài, wǒ xīnli tāshile xǔduō.',vn:'Mở tủ quần áo, điện thoại vẫn còn, lòng tôi yên tâm hơn nhiều.'},
     {zh:'考试的事没准备好，我晚上一直睡不踏实。',py:'Kǎoshì de shì méi zhǔnbèi hǎo, wǒ wǎnshang yìzhí shuì bu tāshi.',vn:'Chưa chuẩn bị xong cho kỳ thi, buổi tối tôi ngủ mãi không yên.'},
     {zh:'他学习很踏实，每一步都打好了基础。',py:'Tā xuéxí hěn tāshi, měi yí bù dōu dǎhǎole jīchǔ.',vn:'Cậu ấy học rất chắc chắn, bước nào cũng xây nền tảng vững.'}
   ],
   colloFull:[
     {zh:'心里踏实',py:'xīnli tāshi',vn:'trong lòng yên tâm'},
     {zh:'睡不踏实',py:'shuì bu tāshi',vn:'ngủ không yên'},
     {zh:'踏踏实实地工作',py:'tātāshíshí de gōngzuò',vn:'làm việc chăm chỉ, chắc chắn'},
     {zh:'学得很踏实',py:'xué de hěn tāshi',vn:'học rất chắc chắn'}
   ],
   patterns:[
     {s:'心里 + 踏实 + (了许多)',m:'Trong lòng yên tâm (hơn nhiều)'},
     {s:'踏踏实实地 + V',m:'Làm … một cách chắc chắn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi ôn xong tất cả các bài, trong lòng tôi mới yên tâm.',answer:'只有把所有的课都复习完了，我心里才踏实。',answerPy:'Zhǐyǒu bǎ suǒyǒu de kè dōu fùxí wán le, wǒ xīnli cái tāshi.',
      note:'只有 + điều kiện duy nhất, 才 + kết quả; 才 đứng sau chủ ngữ.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Làm việc phải chăm chỉ chắc chắn, đừng lúc nào cũng nghĩ đến đường tắt.',answer:'做事要踏踏实实的，别总想着走捷径。',answerPy:'Zuòshì yào tātāshíshí de, bié zǒng xiǎngzhe zǒu jiéjìng.',
      note:'Tính từ song âm tiết láy AABB (踏踏实实) để nhấn mạnh, thường có 的 theo sau.',pair:'láy AABB'}
   ]},

  {n:31,zh:'空虚',py:'kōngxū',pos:'Tính từ',vn:'trống rỗng, trống trải',hv:'không hư',em:'🕳️',lesson:1,
   explain:['(Tâm hồn, cuộc sống) trống trải, không có gì làm chỗ dựa: 心里很空虚.','Dùng như danh từ: 心中的空虚 (sự trống rỗng trong lòng), 弥补空虚.'],
   usage:'心里 / 生活 / 精神 + 空虚; 感到空虚; 弥补 / 填补 + 空虚.',
   collo:['心里空虚','感到空虚','弥补空虚','精神空虚'],
   ex_zh:'五个小时没碰它，我心空虚得要命。',ex_py:'Wǔ ge xiǎoshí méi pèng tā, wǒ xīn kōngxū de yào mìng.',ex_vn:'Năm tiếng không đụng đến nó, lòng tôi trống rỗng kinh khủng.',
   exList:[
     {zh:'五个小时没碰它，我心空虚得要命。',py:'Wǔ ge xiǎoshí méi pèng tā, wǒ xīn kōngxū de yào mìng.',vn:'Năm tiếng không đụng đến nó, lòng tôi trống rỗng kinh khủng.'},
     {zh:'退休以后，爷爷一下子闲下来，常常感到很空虚。',py:'Tuìxiū yǐhòu, yéye yíxiàzi xián xiàlái, chángcháng gǎndào hěn kōngxū.',vn:'Sau khi nghỉ hưu, ông bỗng chốc rảnh rỗi, thường cảm thấy trống trải.'},
     {zh:'有的人靠玩儿游戏来弥补精神上的空虚。',py:'Yǒu de rén kào wánr yóuxì lái míbǔ jīngshén shang de kōngxū.',vn:'Có người dựa vào chơi game để bù đắp sự trống rỗng về tinh thần.'}
   ],
   colloFull:[
     {zh:'心里空虚',py:'xīnli kōngxū',vn:'trong lòng trống rỗng'},
     {zh:'感到空虚',py:'gǎndào kōngxū',vn:'cảm thấy trống trải'},
     {zh:'弥补空虚',py:'míbǔ kōngxū',vn:'bù đắp sự trống rỗng'},
     {zh:'精神空虚',py:'jīngshén kōngxū',vn:'tinh thần trống rỗng'}
   ],
   patterns:[
     {s:'心里 / 生活 + 空虚',m:'Trống rỗng, trống trải'},
     {s:'弥补 / 填补 + (心中的) 空虚',m:'Bù đắp sự trống rỗng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng không có việc gì làm, trong lòng càng trống rỗng.',answer:'越是没事做，心里就越空虚。',answerPy:'Yuè shì méi shì zuò, xīnli jiù yuè kōngxū.',
      note:'越（是）A，（就）越 B: B tăng theo A.',pair:'越……越……'},
     {promptLang:'vi',prompt:'Anh ấy tuy rất giàu, nhưng tinh thần lại vô cùng trống rỗng.',answer:'他虽然很有钱，精神上却非常空虚。',answerPy:'Tā suīrán hěn yǒu qián, jīngshén shang què fēicháng kōngxū.',
      note:'虽然……却……: 却 đứng sau chủ ngữ / trạng ngữ vế sau.',pair:'虽然……却……'}
   ]},

  {n:32,zh:'要命',py:'yào mìng',pos:'Động từ',vn:'chết người; (bổ ngữ) cực kỳ, vô cùng; (than) chết thật',hv:'yếu mệnh',em:'😵',lesson:1,
   explain:['Nghĩa gốc: lấy mạng, nguy hiểm đến tính mạng.','Làm bổ ngữ chỉ mức độ cực điểm: Adj / V + 得 + 要命 (累得要命, 紧张得要命); còn là lời than: 真要命!'],
   usage:'Adj / V tâm lý + 得 + 要命 (khẩu ngữ). Không nói 很累得要命, không nói 要命得累.',
   collo:['空虚得要命','紧张得要命','累得要命','真要命'],
   ex_zh:'考试时，我紧张得要命，手心里都是汗。',ex_py:'Kǎoshì shí, wǒ jǐnzhāng de yào mìng, shǒuxīn li dōu shì hàn.',ex_vn:'Lúc thi, tôi căng thẳng kinh khủng, lòng bàn tay toàn mồ hôi.',
   exList:[
     {zh:'考试时，我紧张得要命，手心里都是汗。',py:'Kǎoshì shí, wǒ jǐnzhāng de yào mìng, shǒuxīn li dōu shì hàn.',vn:'Lúc thi, tôi căng thẳng kinh khủng, lòng bàn tay toàn mồ hôi.'},
     {zh:'五个小时没碰它，我心空虚得要命。',py:'Wǔ ge xiǎoshí méi pèng tā, wǒ xīn kōngxū de yào mìng.',vn:'Năm tiếng không đụng đến nó, lòng tôi trống rỗng kinh khủng.'},
     {zh:'真要命，我把作业忘在家里了！',py:'Zhēn yào mìng, wǒ bǎ zuòyè wàng zài jiā li le!',vn:'Chết thật, tớ để quên bài tập ở nhà rồi!'}
   ],
   colloFull:[
     {zh:'空虚得要命',py:'kōngxū de yào mìng',vn:'trống rỗng kinh khủng'},
     {zh:'紧张得要命',py:'jǐnzhāng de yào mìng',vn:'căng thẳng kinh khủng'},
     {zh:'累得要命',py:'lèi de yào mìng',vn:'mệt chết đi được'},
     {zh:'真要命',py:'zhēn yào mìng',vn:'chết thật'},
     {zh:'疼得要命',py:'téng de yào mìng',vn:'đau chết đi được'}
   ],
   patterns:[
     {s:'Adj / V + 得 + 要命',m:'… kinh khủng, … chết đi được'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Leo núi cả ngày, chân tôi đau chết đi được.',answer:'爬了一整天山，我的腿疼得要命。',answerPy:'Pále yì zhěng tiān shān, wǒ de tuǐ téng de yào mìng.',
      note:'V + 了 + thời lượng + O (爬了一整天山).',pair:'V + 了 + thời lượng + O'},
     {promptLang:'vi',prompt:'Lần nào trước khi thi, bạn ấy cũng căng thẳng kinh khủng, ăn không ngon, ngủ không được.',answer:'每次考试之前，她都紧张得要命，吃不好，睡不着。',answerPy:'Měi cì kǎoshì zhīqián, tā dōu jǐnzhāng de yào mìng, chī bu hǎo, shuì bu zháo.',
      note:'Bổ ngữ khả năng phủ định 吃不好 / 睡不着.',pair:'bổ ngữ khả năng'}
   ]},

  {n:33,zh:'粥',py:'zhōu',pos:'Danh từ',vn:'cháo',hv:'chúc',em:'🥣',lesson:1,
   explain:['Món cháo nấu từ gạo (hoặc ngũ cốc) với nhiều nước.','Động từ đi kèm: 熬粥 / 煮粥 (nấu cháo), 喝粥 (ăn cháo — tiếng Trung dùng 喝).'],
   usage:'熬 / 煮 + 粥; 喝粥. Lượng từ: 一碗粥.',
   collo:['熬粥','喝粥','一碗粥','小米粥'],
   ex_zh:'我决定用熬粥这件最消耗时间的事来弥补心中的空虚。',ex_py:'Wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū.',ex_vn:'Tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng.',
   exList:[
     {zh:'我决定用熬粥这件最消耗时间的事来弥补心中的空虚。',py:'Wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū.',vn:'Tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng.'},
     {zh:'我感冒了，妈妈给我熬了一碗热粥。',py:'Wǒ gǎnmào le, māma gěi wǒ áole yì wǎn rè zhōu.',vn:'Tôi bị cảm, mẹ nấu cho tôi một bát cháo nóng.'},
     {zh:'很多中国北方人早饭喜欢喝小米粥。',py:'Hěn duō Zhōngguó běifāngrén zǎofàn xǐhuan hē xiǎomǐzhōu.',vn:'Nhiều người miền Bắc Trung Quốc thích ăn cháo kê vào bữa sáng.'}
   ],
   colloFull:[
     {zh:'熬粥',py:'áo zhōu',vn:'nấu cháo'},
     {zh:'喝粥',py:'hē zhōu',vn:'ăn cháo'},
     {zh:'一碗粥',py:'yì wǎn zhōu',vn:'một bát cháo'},
     {zh:'小米粥',py:'xiǎomǐzhōu',vn:'cháo kê'},
     {zh:'粥的香气',py:'zhōu de xiāngqì',vn:'mùi thơm của cháo'}
   ],
   patterns:[
     {s:'熬 / 煮 + 粥',m:'Nấu cháo'},
     {s:'喝 + 粥',m:'Ăn cháo (dùng 喝)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nấu cháo tuy tốn thời gian, nhưng rất tốt cho sức khỏe.',answer:'熬粥虽然很花时间，但是对身体很好。',answerPy:'Áo zhōu suīrán hěn huā shíjiān, dànshì duì shēntǐ hěn hǎo.',
      note:'Cụm động từ 熬粥 làm chủ ngữ; 对……好 = tốt cho….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Mỗi khi tôi ốm, bà đều nấu cho tôi một bát cháo.',answer:'每当我生病的时候，奶奶都会给我熬一碗粥。',answerPy:'Měi dāng wǒ shēngbìng de shíhou, nǎinai dōu huì gěi wǒ áo yì wǎn zhōu.',
      note:'每当……的时候，都…… = mỗi khi… đều….',pair:'每当……的时候'}
   ]},

  {n:34,zh:'消耗',py:'xiāohào',pos:'Động từ',vn:'tiêu hao, tiêu tốn',hv:'tiêu hao',em:'🔋',lesson:1,
   explain:['Làm cho (thời gian, sức lực, năng lượng, vật chất) dần dần mất đi: 消耗时间, 消耗体力.','Danh từ: sự tiêu hao (能源消耗).'],
   usage:'消耗 + 时间 / 体力 / 精力 / 能量; 最消耗时间的事. Gần nghĩa 耗费 (bài 4).',
   collo:['消耗时间','消耗体力','消耗能量','最消耗时间的事'],
   ex_zh:'我决定用熬粥这件最消耗时间的事来弥补心中的空虚。',ex_py:'Wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū.',ex_vn:'Tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng.',
   exList:[
     {zh:'我决定用熬粥这件最消耗时间的事来弥补心中的空虚。',py:'Wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū.',vn:'Tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng.'},
     {zh:'跑步能消耗大量的能量，对减肥很有帮助。',py:'Pǎobù néng xiāohào dàliàng de néngliàng, duì jiǎnféi hěn yǒu bāngzhù.',vn:'Chạy bộ tiêu hao lượng lớn năng lượng, rất có ích cho việc giảm cân.'},
     {zh:'玩儿手机游戏特别消耗电量，一会儿就没电了。',py:'Wánr shǒujī yóuxì tèbié xiāohào diànliàng, yíhuìr jiù méi diàn le.',vn:'Chơi game trên điện thoại rất tốn pin, một lúc là hết pin.'}
   ],
   colloFull:[
     {zh:'消耗时间',py:'xiāohào shíjiān',vn:'tốn thời gian'},
     {zh:'消耗体力',py:'xiāohào tǐlì',vn:'tiêu hao thể lực'},
     {zh:'消耗能量',py:'xiāohào néngliàng',vn:'tiêu hao năng lượng'},
     {zh:'最消耗时间的事',py:'zuì xiāohào shíjiān de shì',vn:'việc tốn thời gian nhất'},
     {zh:'消耗电量',py:'xiāohào diànliàng',vn:'tốn pin'}
   ],
   patterns:[
     {s:'消耗 + 时间 / 体力 / 能量',m:'Tiêu hao …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bơi lội không những tiêu hao nhiều thể lực mà còn rèn luyện được tay chân.',answer:'游泳不但消耗很多体力，而且能锻炼四肢。',answerPy:'Yóuyǒng búdàn xiāohào hěn duō tǐlì, érqiě néng duànliàn sìzhī.',
      note:'不但……而且……; hai vế cùng chủ ngữ 游泳.',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Làm những việc vô nghĩa này chỉ tiêu tốn thời gian mà thôi.',answer:'做这些没有意义的事，只是消耗时间而已。',answerPy:'Zuò zhèxiē méiyǒu yìyì de shì, zhǐshì xiāohào shíjiān éryǐ.',
      note:'只是……而已 (bài 5) = chỉ… mà thôi.',pair:'只是……而已'}
   ]},

  {n:35,zh:'弥补',py:'míbǔ',pos:'Động từ',vn:'bù đắp, bù lại',hv:'di bổ',em:'🩹',lesson:1,
   explain:['Bù vào chỗ thiếu hụt, thiệt hại: 弥补损失, 弥补不足.','Tân ngữ thường trừu tượng: 损失, 不足, 缺点, 空虚, 过错.'],
   usage:'弥补 + 损失 / 不足 / 空虚; 用 A 来弥补 B; 无法弥补. Khác 补充 (bổ sung thêm cho đủ).',
   collo:['弥补空虚','弥补损失','弥补不足','无法弥补'],
   ex_zh:'我决定用熬粥这件最消耗时间的事来弥补心中的空虚。',ex_py:'Wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū.',ex_vn:'Tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng.',
   exList:[
     {zh:'我决定用熬粥这件最消耗时间的事来弥补心中的空虚。',py:'Wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū.',vn:'Tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng.'},
     {zh:'他想用努力学习来弥补以前浪费的时间。',py:'Tā xiǎng yòng nǔlì xuéxí lái míbǔ yǐqián làngfèi de shíjiān.',vn:'Cậu ấy muốn dùng việc học chăm chỉ để bù lại thời gian đã lãng phí trước đây.'},
     {zh:'这次的错误给公司造成了无法弥补的损失。',py:'Zhè cì de cuòwù gěi gōngsī zàochéngle wúfǎ míbǔ de sǔnshī.',vn:'Sai lầm lần này gây cho công ty tổn thất không thể bù đắp.'}
   ],
   colloFull:[
     {zh:'弥补空虚',py:'míbǔ kōngxū',vn:'bù đắp sự trống rỗng'},
     {zh:'弥补损失',py:'míbǔ sǔnshī',vn:'bù đắp tổn thất'},
     {zh:'弥补不足',py:'míbǔ bùzú',vn:'bù chỗ thiếu sót'},
     {zh:'无法弥补',py:'wúfǎ míbǔ',vn:'không thể bù đắp'},
     {zh:'用……来弥补',py:'yòng……lái míbǔ',vn:'dùng … để bù đắp'}
   ],
   patterns:[
     {s:'用 A 来弥补 B',m:'Dùng A để bù đắp B'},
     {s:'无法弥补的 + N',m:'… không thể bù đắp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu đã làm sai thì phải nghĩ cách bù đắp, chứ không phải che giấu.',answer:'如果做错了，就应该想办法弥补，而不是掩饰。',answerPy:'Rúguǒ zuòcuò le, jiù yīnggāi xiǎng bànfǎ míbǔ, ér bú shì yǎnshì.',
      note:'如果……就……; 掩饰 ôn bài 2.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Nền tảng của cậu ấy tuy yếu, nhưng cậu ấy dùng sự chăm chỉ để bù lại chỗ thiếu.',answer:'他虽然基础薄弱，但是用勤奋弥补了不足。',answerPy:'Tā suīrán jīchǔ bóruò, dànshì yòng qínfèn míbǔle bùzú.',
      note:'用 + phương tiện + V: dùng… để….',pair:'用……（来）+ V'}
   ]},

  {n:36,zh:'沸腾',py:'fèiténg',pos:'Động từ',vn:'sôi sùng sục; (nghĩa bóng) sôi sục, náo nhiệt',hv:'phí đằng',em:'♨️',lesson:1,
   explain:['Chất lỏng sôi mạnh: 沸腾的水 (nước sôi sùng sục).','Nghĩa bóng: cảm xúc, không khí sôi sục (全场沸腾了, 热血沸腾).'],
   usage:'沸腾的 + 水 / 油; 全场 / 人群 + 沸腾了; 热血沸腾.',
   collo:['沸腾的水','全场沸腾','热血沸腾'],
   ex_zh:'看着雪白的米在沸腾的水中翻滚。',ex_py:'Kànzhe xuěbái de mǐ zài fèiténg de shuǐ zhōng fāngǔn.',ex_vn:'Nhìn những hạt gạo trắng tinh cuộn lên trong nước sôi sùng sục.',
   exList:[
     {zh:'看着雪白的米在沸腾的水中翻滚。',py:'Kànzhe xuěbái de mǐ zài fèiténg de shuǐ zhōng fāngǔn.',vn:'Nhìn những hạt gạo trắng tinh cuộn lên trong nước sôi sùng sục.'},
     {zh:'水沸腾以后，再把面条放进去。',py:'Shuǐ fèiténg yǐhòu, zài bǎ miàntiáo fàng jìnqu.',vn:'Nước sôi rồi mới cho mì vào.'},
     {zh:'比赛最后一秒进了球，全场顿时沸腾了。',py:'Bǐsài zuìhòu yì miǎo jìnle qiú, quán chǎng dùnshí fèiténg le.',vn:'Giây cuối cùng của trận đấu ghi được bàn, cả sân lập tức sôi sục.'}
   ],
   colloFull:[
     {zh:'沸腾的水',py:'fèiténg de shuǐ',vn:'nước sôi sùng sục'},
     {zh:'全场沸腾',py:'quán chǎng fèiténg',vn:'cả sân sôi sục'},
     {zh:'热血沸腾',py:'rèxuè fèiténg',vn:'máu nóng sục sôi'},
     {zh:'水沸腾了',py:'shuǐ fèiténg le',vn:'nước sôi rồi'}
   ],
   patterns:[
     {s:'沸腾的 + 水',m:'Nước sôi sùng sục'},
     {s:'全场 / 人群 + 沸腾了',m:'Cả sân / đám đông sôi sục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đợi nước sôi rồi hẵng cho gạo vào, như vậy cháo nấu ra mới ngon.',answer:'等水沸腾了再下米，这样熬出来的粥才好喝。',answerPy:'Děng shuǐ fèiténg le zài xià mǐ, zhèyàng áo chūlái de zhōu cái hǎohē.',
      note:'等 A 再 B = đợi A xong rồi mới B.',pair:'等……再……'},
     {promptLang:'vi',prompt:'Ca sĩ vừa bước lên sân khấu, cả hội trường đã sôi sục.',answer:'歌手一走上舞台，全场就沸腾了。',answerPy:'Gēshǒu yì zǒushàng wǔtái, quán chǎng jiù fèiténg le.',
      note:'一……就…… nối hai sự việc xảy ra liền nhau, khác chủ ngữ.',pair:'一……就……'}
   ]},

  {n:37,zh:'弥漫',py:'mímàn',pos:'Động từ',vn:'bao phủ, lan khắp, tỏa khắp',hv:'di mạn',em:'🌫️',lesson:1,
   explain:['(Khói, sương, mùi, không khí) tràn ngập, lan khắp một không gian.','Hay gặp: 弥漫着香气 / 烟雾 / 大雾; cũng dùng cho bầu không khí: 弥漫着紧张的气氛.'],
   usage:'Nơi chốn + 弥漫着 + mùi / khói / sương; 大雾弥漫. Chủ yếu văn viết.',
   collo:['弥漫着香气','弥漫着粥的香气','大雾弥漫','烟雾弥漫'],
   ex_zh:'屋子里渐渐弥漫着粥的香气，屋外竟然传来了鸟的叫声。',ex_py:'Wūzi li jiànjiàn mímànzhe zhōu de xiāngqì, wū wài jìngrán chuánláile niǎo de jiàoshēng.',ex_vn:'Trong phòng dần tỏa khắp mùi thơm của cháo, ngoài nhà bỗng vọng vào tiếng chim hót.',
   exList:[
     {zh:'屋子里渐渐弥漫着粥的香气，屋外竟然传来了鸟的叫声。',py:'Wūzi li jiànjiàn mímànzhe zhōu de xiāngqì, wū wài jìngrán chuánláile niǎo de jiàoshēng.',vn:'Trong phòng dần tỏa khắp mùi thơm của cháo, ngoài nhà bỗng vọng vào tiếng chim hót.'},
     {zh:'早上大雾弥漫，很多航班都推迟了。',py:'Zǎoshang dàwù mímàn, hěn duō hángbān dōu tuīchí le.',vn:'Buổi sáng sương mù dày đặc, nhiều chuyến bay bị hoãn.'},
     {zh:'考场里弥漫着紧张的气氛。',py:'Kǎochǎng li mímànzhe jǐnzhāng de qìfēn.',vn:'Trong phòng thi tràn ngập bầu không khí căng thẳng.'}
   ],
   colloFull:[
     {zh:'弥漫着香气',py:'mímànzhe xiāngqì',vn:'tỏa khắp mùi thơm'},
     {zh:'弥漫着粥的香气',py:'mímànzhe zhōu de xiāngqì',vn:'tỏa mùi thơm của cháo'},
     {zh:'大雾弥漫',py:'dàwù mímàn',vn:'sương mù dày đặc'},
     {zh:'烟雾弥漫',py:'yānwù mímàn',vn:'khói mù mịt'},
     {zh:'弥漫着紧张的气氛',py:'mímànzhe jǐnzhāng de qìfēn',vn:'tràn ngập không khí căng thẳng'}
   ],
   patterns:[
     {s:'Nơi chốn + 弥漫着 + N',m:'Ở đâu tràn ngập…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tết đến rồi, khắp nơi đều tràn ngập không khí vui tươi.',answer:'春节到了，到处都弥漫着欢乐的气氛。',answerPy:'Chūnjié dào le, dàochù dōu mímànzhe huānlè de qìfēn.',
      note:'V + 着 biểu thị trạng thái kéo dài; câu tồn hiện: nơi chốn + V着 + N.',pair:'câu tồn hiện V + 着'},
     {promptLang:'vi',prompt:'Vừa mở cửa, cả căn phòng đã tỏa khắp mùi thơm của bánh trung thu.',answer:'一打开门，整个屋子就弥漫着月饼的香味。',answerPy:'Yì dǎkāi mén, zhěnggè wūzi jiù mímànzhe yuèbing de xiāngwèi.',
      note:'一……就……; 月饼 ôn bài 3.',pair:'一……就……'}
   ]},

  {n:38,zh:'往常',py:'wǎngcháng',pos:'Danh từ',vn:'thường ngày, mọi khi',hv:'vãng thường',em:'📅',lesson:1,
   explain:['Chỉ khoảng thời gian trước đây, lúc bình thường — luôn ngầm so sánh với hiện tại khác thường.','Hay dùng: 要在往常 (nếu là mọi khi), 和往常一样, 比往常…….'],
   usage:'和 / 跟往常一样; 比往常 + Adj; 要在往常，……. Không dùng cho tương lai.',
   collo:['要在往常','和往常一样','比往常早','往常这里很少堵车'],
   ex_zh:'要在往常，我一定早待不住了。',ex_py:'Yào zài wǎngcháng, wǒ yídìng zǎo dāi bu zhù le.',ex_vn:'Nếu là mọi khi, chắc chắn tôi đã ngồi không yên từ lâu rồi.',
   exList:[
     {zh:'要在往常，我一定早待不住了。',py:'Yào zài wǎngcháng, wǒ yídìng zǎo dāi bu zhù le.',vn:'Nếu là mọi khi, chắc chắn tôi đã ngồi không yên từ lâu rồi.'},
     {zh:'今天不知道怎么了，堵得这么厉害，往常这里很少堵车。',py:'Jīntiān bù zhīdào zěnme le, dǔ de zhème lìhai, wǎngcháng zhèli hěn shǎo dǔchē.',vn:'Hôm nay không biết làm sao mà tắc dữ vậy, mọi khi chỗ này hiếm khi tắc đường.'},
     {zh:'今天他比往常早起了一个小时。',py:'Jīntiān tā bǐ wǎngcháng zǎo qǐle yí ge xiǎoshí.',vn:'Hôm nay cậu ấy dậy sớm hơn mọi khi một tiếng.'}
   ],
   colloFull:[
     {zh:'要在往常',py:'yào zài wǎngcháng',vn:'nếu là mọi khi'},
     {zh:'和往常一样',py:'hé wǎngcháng yíyàng',vn:'giống như mọi khi'},
     {zh:'比往常早',py:'bǐ wǎngcháng zǎo',vn:'sớm hơn mọi khi'},
     {zh:'往常这里很少堵车',py:'wǎngcháng zhèli hěn shǎo dǔchē',vn:'mọi khi ở đây ít tắc đường'},
     {zh:'一如往常',py:'yìrú wǎngcháng',vn:'vẫn như mọi khi'}
   ],
   patterns:[
     {s:'要在往常，……',m:'Nếu là mọi khi thì…'},
     {s:'和往常一样 / 比往常 + Adj',m:'Như mọi khi / … hơn mọi khi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giống như mọi khi, ông ăn tối xong là đi dạo trong công viên.',answer:'和往常一样，爷爷吃完晚饭就去公园散步。',answerPy:'Hé wǎngcháng yíyàng, yéye chīwán wǎnfàn jiù qù gōngyuán sànbù.',
      note:'和……一样 đứng đầu câu làm trạng ngữ.',pair:'和……一样'},
     {promptLang:'vi',prompt:'Nếu là mọi khi, giờ này cậu ấy đã về đến nhà từ lâu rồi.',answer:'要在往常，这个时候他早就到家了。',answerPy:'Yào zài wǎngcháng, zhège shíhou tā zǎojiù dào jiā le.',
      note:'早就……了 = đã… từ lâu rồi.',pair:'早就……了'}
   ]},

  {n:39,zh:'侦探',py:'zhēntàn',pos:'Danh từ',vn:'trinh thám, thám tử',hv:'trinh thám',em:'🕵️',lesson:1,
   explain:['Danh từ: người chuyên điều tra, phá án (thám tử); 侦探小说 = tiểu thuyết trinh thám.','Động từ: dò la, điều tra bí mật (ít dùng hơn).'],
   usage:'侦探小说 / 侦探片 / 私人侦探; 大侦探 + tên (大侦探福尔摩斯).',
   collo:['侦探小说','某某侦探','私人侦探','大侦探'],
   ex_zh:'要在往常，我一定惦记着某某侦探的案件是不是有了突破。',ex_py:'Yào zài wǎngcháng, wǒ yídìng diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò.',ex_vn:'Nếu là mọi khi, chắc chắn tôi cứ canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa.',
   exList:[
     {zh:'要在往常，我一定惦记着某某侦探的案件是不是有了突破。',py:'Yào zài wǎngcháng, wǒ yídìng diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò.',vn:'Nếu là mọi khi, chắc chắn tôi cứ canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa.'},
     {zh:'我从小就爱看侦探小说，最喜欢福尔摩斯。',py:'Wǒ cóngxiǎo jiù ài kàn zhēntàn xiǎoshuō, zuì xǐhuan Fú\'ěrmósī.',vn:'Từ nhỏ tôi đã thích đọc tiểu thuyết trinh thám, thích nhất Sherlock Holmes.'},
     {zh:'他们派出一位非常有经验的侦探，很快就抓住了那两个人。',py:'Tāmen pàichū yí wèi fēicháng yǒu jīngyàn de zhēntàn, hěn kuài jiù zhuāzhùle nà liǎng ge rén.',vn:'Họ cử một thám tử rất giàu kinh nghiệm, rất nhanh đã bắt được hai người đó.'}
   ],
   colloFull:[
     {zh:'侦探小说',py:'zhēntàn xiǎoshuō',vn:'tiểu thuyết trinh thám'},
     {zh:'某某侦探',py:'mǒumǒu zhēntàn',vn:'thám tử nọ'},
     {zh:'私人侦探',py:'sīrén zhēntàn',vn:'thám tử tư'},
     {zh:'大侦探',py:'dà zhēntàn',vn:'đại thám tử'},
     {zh:'有经验的侦探',py:'yǒu jīngyàn de zhēntàn',vn:'thám tử giàu kinh nghiệm'}
   ],
   patterns:[
     {s:'侦探 + 小说 / 片',m:'Tiểu thuyết / phim trinh thám'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết trinh thám này hay quá, tôi đọc một mạch đến hai giờ sáng.',answer:'这本侦探小说太精彩了，我一口气看到了凌晨两点。',answerPy:'Zhè běn zhēntàn xiǎoshuō tài jīngcǎi le, wǒ yìkǒuqì kàndàole língchén liǎng diǎn.',
      note:'一口气 + V = làm một mạch; V + 到 + thời điểm.',pair:'一口气 + V'},
     {promptLang:'vi',prompt:'Không chỉ cảnh sát, ngay cả thám tử tư cũng đang điều tra vụ án này.',answer:'不仅警察，连私人侦探也在调查这个案件。',answerPy:'Bùjǐn jǐngchá, lián sīrén zhēntàn yě zài diàochá zhège ànjiàn.',
      note:'不仅 A，连 B 也…… = không chỉ A, ngay cả B cũng….',pair:'不仅……连……也……'}
   ]},

  {n:40,zh:'案件',py:'ànjiàn',pos:'Danh từ',vn:'vụ án',hv:'án kiện',em:'📁',lesson:1,
   explain:['Vụ việc liên quan đến pháp luật, cần điều tra, xét xử: 刑事案件, 盗窃案件.','Lượng từ: 一起 / 一个 / 一桩; động từ đi kèm: 发生, 调查, 侦破 (phá án).'],
   usage:'发生了一起案件; 调查 / 侦破 + 案件; 案件有了突破.',
   collo:['一起案件','调查案件','案件有了突破','侦破案件'],
   ex_zh:'我惦记着某某侦探的案件是不是有了突破。',ex_py:'Wǒ diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò.',ex_vn:'Tôi canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa.',
   exList:[
     {zh:'我惦记着某某侦探的案件是不是有了突破。',py:'Wǒ diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò.',vn:'Tôi canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa.'},
     {zh:'上个月，这里发生了一起令人震惊的案件。',py:'Shàng ge yuè, zhèli fāshēngle yì qǐ lìng rén zhènjīng de ànjiàn.',vn:'Tháng trước, ở đây xảy ra một vụ án gây chấn động.'},
     {zh:'经过半年的调查，警方终于侦破了这起案件。',py:'Jīngguò bàn nián de diàochá, jǐngfāng zhōngyú zhēnpòle zhè qǐ ànjiàn.',vn:'Sau nửa năm điều tra, cảnh sát cuối cùng đã phá được vụ án này.'}
   ],
   colloFull:[
     {zh:'一起案件',py:'yì qǐ ànjiàn',vn:'một vụ án'},
     {zh:'调查案件',py:'diàochá ànjiàn',vn:'điều tra vụ án'},
     {zh:'案件有了突破',py:'ànjiàn yǒule tūpò',vn:'vụ án có đột phá'},
     {zh:'侦破案件',py:'zhēnpò ànjiàn',vn:'phá án'},
     {zh:'盗窃案件',py:'dàoqiè ànjiàn',vn:'vụ trộm cắp'}
   ],
   patterns:[
     {s:'发生了一起 + … + 的案件',m:'Xảy ra một vụ án…'},
     {s:'侦破 / 调查 + 案件',m:'Phá / điều tra vụ án'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ những bức ảnh người dân cung cấp, vụ án này rất nhanh đã được phá.',answer:'多亏了市民提供的照片，这起案件很快就破了。',answerPy:'Duōkuīle shìmín tígōng de zhàopiàn, zhè qǐ ànjiàn hěn kuài jiù pò le.',
      note:'多亏 + nguyên nhân tốt = may nhờ có…',pair:'多亏……'},
     {promptLang:'vi',prompt:'Vụ án này tuy đã xảy ra mười năm, nhưng đến nay vẫn chưa phá được.',answer:'这起案件虽然已经发生十年了，但是至今还没有侦破。',answerPy:'Zhè qǐ ànjiàn suīrán yǐjīng fāshēng shí nián le, dànshì zhìjīn hái méiyǒu zhēnpò.',
      note:'至今 = cho đến nay; 还没有 + V = vẫn chưa.',pair:'至今还没……'}
   ]},

  {n:41,zh:'突破',py:'tūpò',pos:'Động từ',vn:'đột phá, vượt qua',hv:'đột phá',em:'💥',lesson:1,
   explain:['Vượt qua giới hạn, khó khăn, kỷ lục: 突破难关, 突破纪录.','Danh từ: bước đột phá (有了突破, 重大突破).'],
   usage:'突破 + 难关 / 纪录 / 自己; 有了突破 / 取得突破.',
   collo:['有了突破','突破纪录','突破自己','取得重大突破'],
   ex_zh:'我惦记着某某侦探的案件是不是有了突破。',ex_py:'Wǒ diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò.',ex_vn:'Tôi canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa.',
   exList:[
     {zh:'我惦记着某某侦探的案件是不是有了突破。',py:'Wǒ diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò.',vn:'Tôi canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa.'},
     {zh:'这位运动员又一次突破了世界纪录。',py:'Zhè wèi yùndòngyuán yòu yí cì tūpòle shìjiè jìlù.',vn:'Vận động viên này lại một lần nữa phá kỷ lục thế giới.'},
     {zh:'经过多年研究，科学家们终于取得了重大突破。',py:'Jīngguò duō nián yánjiū, kēxuéjiāmen zhōngyú qǔdéle zhòngdà tūpò.',vn:'Sau nhiều năm nghiên cứu, các nhà khoa học cuối cùng đã đạt được bước đột phá lớn.'}
   ],
   colloFull:[
     {zh:'有了突破',py:'yǒule tūpò',vn:'có bước đột phá'},
     {zh:'突破纪录',py:'tūpò jìlù',vn:'phá kỷ lục'},
     {zh:'突破自己',py:'tūpò zìjǐ',vn:'vượt qua chính mình'},
     {zh:'取得重大突破',py:'qǔdé zhòngdà tūpò',vn:'đạt đột phá lớn'},
     {zh:'突破难关',py:'tūpò nánguān',vn:'vượt qua cửa ải khó'}
   ],
   patterns:[
     {s:'突破 + 纪录 / 难关 / 自己',m:'Phá / vượt qua …'},
     {s:'有了 / 取得 + 突破',m:'Có / đạt được đột phá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì luyện tập, em nhất định có thể vượt qua chính mình.',answer:'只要坚持练习，你一定能突破自己。',answerPy:'Zhǐyào jiānchí liànxí, nǐ yídìng néng tūpò zìjǐ.',
      note:'只要 + điều kiện đủ; vế sau có thể dùng 一定能 thay cho 就.',pair:'只要……（就）……'},
     {promptLang:'vi',prompt:'Sau ba năm cố gắng, điểm tiếng Trung của cô ấy cuối cùng đã có bước đột phá.',answer:'经过三年的努力，她的汉语成绩终于有了突破。',answerPy:'Jīngguò sān nián de nǔlì, tā de Hànyǔ chéngjì zhōngyú yǒule tūpò.',
      note:'经过 + quá trình, 终于 + kết quả.',pair:'经过……，终于……'}
   ]},

  {n:42,zh:'震惊',py:'zhènjīng',pos:'Động từ',vn:'làm kinh ngạc, gây chấn động; kinh ngạc',hv:'chấn kinh',em:'😱',lesson:1,
   explain:['Động từ: làm cho rất nhiều người kinh ngạc (震惊世界, 震惊全国).','Tính từ: vô cùng kinh ngạc (感到震惊, 令人震惊).'],
   usage:'震惊 + 世界 / 全国; 令人震惊的 + N; 对……感到震惊. Mức độ mạnh hơn 吃惊 nhiều.',
   collo:['震惊世界','令人震惊','感到震惊','震惊世界的发现'],
   ex_zh:'我惦记着科学家是否有了震惊世界的发现。',ex_py:'Wǒ diànjìzhe kēxuéjiā shìfǒu yǒule zhènjīng shìjiè de fāxiàn.',ex_vn:'Tôi canh cánh không biết các nhà khoa học đã có phát hiện chấn động thế giới hay chưa.',
   exList:[
     {zh:'我惦记着科学家是否有了震惊世界的发现。',py:'Wǒ diànjìzhe kēxuéjiā shìfǒu yǒule zhènjīng shìjiè de fāxiàn.',vn:'Tôi canh cánh không biết các nhà khoa học đã có phát hiện chấn động thế giới hay chưa.'},
     {zh:'听到这个消息，全班同学都感到很震惊。',py:'Tīngdào zhège xiāoxi, quán bān tóngxué dōu gǎndào hěn zhènjīng.',vn:'Nghe tin này, cả lớp đều vô cùng kinh ngạc.'},
     {zh:'这部电影的结局令人震惊，谁都没想到凶手是他。',py:'Zhè bù diànyǐng de jiéjú lìng rén zhènjīng, shéi dōu méi xiǎngdào xiōngshǒu shì tā.',vn:'Kết thúc bộ phim gây sốc, không ai ngờ hung thủ là anh ta.'}
   ],
   colloFull:[
     {zh:'震惊世界',py:'zhènjīng shìjiè',vn:'chấn động thế giới'},
     {zh:'令人震惊',py:'lìng rén zhènjīng',vn:'khiến người ta kinh ngạc'},
     {zh:'感到震惊',py:'gǎndào zhènjīng',vn:'cảm thấy kinh ngạc'},
     {zh:'震惊世界的发现',py:'zhènjīng shìjiè de fāxiàn',vn:'phát hiện chấn động thế giới'},
     {zh:'震惊全国',py:'zhènjīng quánguó',vn:'chấn động cả nước'}
   ],
   patterns:[
     {s:'令人震惊的 + N',m:'… gây chấn động'},
     {s:'对……感到震惊',m:'Kinh ngạc về…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Không ai ngờ, một học sinh cấp ba lại có phát hiện chấn động thế giới như vậy.',answer:'谁都没想到，一个高中生竟然有了这样震惊世界的发现。',answerPy:'Shéi dōu méi xiǎngdào, yí ge gāozhōngshēng jìngrán yǒule zhèyàng zhènjīng shìjiè de fāxiàn.',
      note:'竟然 = vậy mà, không ngờ lại (ngoài dự đoán).',pair:'竟然'},
     {promptLang:'vi',prompt:'Nghe nói cậu ấy thôi học, tôi cảm thấy vô cùng kinh ngạc.',answer:'听说他退学了，我感到非常震惊。',answerPy:'Tīngshuō tā tuìxué le, wǒ gǎndào fēicháng zhènjīng.',
      note:'感到 + tính từ cảm xúc; 听说 + mệnh đề.',pair:'感到 + Adj'}
   ]},

  {n:43,zh:'彩票',py:'cǎipiào',pos:'Danh từ',vn:'vé số, xổ số',hv:'thái phiếu',em:'🎫',lesson:1,
   explain:['Vé số in số, mua để dự thưởng: 买彩票, 中彩票.','彩 ở đây = giải thưởng (中彩 = trúng giải); 大奖 = giải lớn, giải độc đắc.'],
   usage:'买 / 中 (zhòng) + 彩票; 彩票大奖 / 开奖. Lượng từ: 一张彩票.',
   collo:['买彩票','中彩票','彩票大奖','一张彩票'],
   ex_zh:'要在往常，我一定惦记着彩票大奖开了没有。',ex_py:'Yào zài wǎngcháng, wǒ yídìng diànjìzhe cǎipiào dàjiǎng kāile méiyǒu.',ex_vn:'Nếu là mọi khi, chắc chắn tôi canh cánh không biết giải độc đắc xổ số đã mở thưởng chưa.',
   exList:[
     {zh:'要在往常，我一定惦记着彩票大奖开了没有。',py:'Yào zài wǎngcháng, wǒ yídìng diànjìzhe cǎipiào dàjiǎng kāile méiyǒu.',vn:'Nếu là mọi khi, chắc chắn tôi canh cánh không biết giải độc đắc xổ số đã mở thưởng chưa.'},
     {zh:'他每个星期都买一张彩票，可是从来没中过。',py:'Tā měi ge xīngqī dōu mǎi yì zhāng cǎipiào, kěshì cónglái méi zhòngguo.',vn:'Tuần nào anh ấy cũng mua một tờ vé số, nhưng chưa bao giờ trúng.'},
     {zh:'靠买彩票发财的想法太不现实了。',py:'Kào mǎi cǎipiào fācái de xiǎngfǎ tài bú xiànshí le.',vn:'Ý nghĩ làm giàu nhờ mua vé số thật quá phi thực tế.'}
   ],
   colloFull:[
     {zh:'买彩票',py:'mǎi cǎipiào',vn:'mua vé số'},
     {zh:'中彩票',py:'zhòng cǎipiào',vn:'trúng xổ số'},
     {zh:'彩票大奖',py:'cǎipiào dàjiǎng',vn:'giải độc đắc'},
     {zh:'一张彩票',py:'yì zhāng cǎipiào',vn:'một tờ vé số'}
   ],
   patterns:[
     {s:'买 / 中 + 彩票',m:'Mua / trúng vé số'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Dù có trúng xổ số, anh ấy cũng không định nghỉ việc.',answer:'即使中了彩票，他也不打算辞职。',answerPy:'Jíshǐ zhòngle cǎipiào, tā yě bù dǎsuàn cízhí.',
      note:'即使 + giả thiết, 也 + kết quả không đổi.',pair:'即使……也……'},
     {promptLang:'vi',prompt:'Thay vì trông vào việc trúng số, chi bằng chăm chỉ làm việc một cách chắc chắn.',answer:'与其指望中彩票，不如踏踏实实地工作。',answerPy:'Yǔqí zhǐwàng zhòng cǎipiào, bùrú tātāshíshí de gōngzuò.',
      note:'与其 A 不如 B: chọn B; 踏踏实实地 làm trạng ngữ.',pair:'与其……不如……'}
   ]},

  {n:44,zh:'恐怖',py:'kǒngbù',pos:'Tính từ',vn:'khủng khiếp, kinh hoàng, rùng rợn',hv:'khủng bố',em:'👻',lesson:1,
   explain:['Gây sợ hãi tột độ: 恐怖电影 (phim kinh dị), 恐怖的声音.','恐怖袭击 = tấn công khủng bố (chỉ lúc này mới trùng nghĩa "khủng bố" tiếng Việt).'],
   usage:'恐怖 + 电影 / 故事 / 气氛; 太恐怖了 (khẩu ngữ: ghê quá!). Phim kinh dị = 恐怖片.',
   collo:['恐怖电影','恐怖袭击','恐怖的气氛','太恐怖了'],
   ex_zh:'前两天的恐怖袭击到底是谁干的……',ex_py:'Qián liǎng tiān de kǒngbù xíjī dàodǐ shì shéi gàn de……',ex_vn:'Vụ tấn công khủng bố mấy hôm trước rốt cuộc là ai làm…',
   exList:[
     {zh:'前两天的恐怖袭击到底是谁干的……',py:'Qián liǎng tiān de kǒngbù xíjī dàodǐ shì shéi gàn de……',vn:'Vụ tấn công khủng bố mấy hôm trước rốt cuộc là ai làm…'},
     {zh:'我胆子小，从来不敢一个人看恐怖电影。',py:'Wǒ dǎnzi xiǎo, cónglái bù gǎn yí ge rén kàn kǒngbù diànyǐng.',vn:'Tôi nhát gan, chưa bao giờ dám xem phim kinh dị một mình.'},
     {zh:'考试只剩下十分钟，我还有一半没写，太恐怖了！',py:'Kǎoshì zhǐ shèngxià shí fēnzhōng, wǒ hái yǒu yíbàn méi xiě, tài kǒngbù le!',vn:'Giờ thi chỉ còn mười phút, tôi còn một nửa chưa viết, kinh khủng quá!'}
   ],
   colloFull:[
     {zh:'恐怖电影',py:'kǒngbù diànyǐng',vn:'phim kinh dị'},
     {zh:'恐怖袭击',py:'kǒngbù xíjī',vn:'tấn công khủng bố'},
     {zh:'恐怖的气氛',py:'kǒngbù de qìfēn',vn:'bầu không khí rùng rợn'},
     {zh:'太恐怖了',py:'tài kǒngbù le',vn:'ghê quá, kinh khủng quá'},
     {zh:'恐怖故事',py:'kǒngbù gùshi',vn:'chuyện rùng rợn'}
   ],
   patterns:[
     {s:'恐怖 + 电影 / 故事',m:'Phim / truyện kinh dị'},
     {s:'太恐怖了！',m:'Kinh khủng quá! (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim kinh dị này dọa tôi cả đêm không ngủ được.',answer:'这部恐怖电影吓得我一整夜都没睡着。',answerPy:'Zhè bù kǒngbù diànyǐng xià de wǒ yì zhěng yè dōu méi shuìzháo.',
      note:'V + 得 + cả một câu (吓得我……): bổ ngữ trạng thái chỉ kết quả.',pair:'V + 得 + câu'},
     {promptLang:'vi',prompt:'Đã biết là phim kinh dị rồi, sao cậu còn xem một mình?',answer:'既然知道是恐怖电影，你为什么还一个人看？',answerPy:'Jìrán zhīdào shì kǒngbù diànyǐng, nǐ wèi shénme hái yí ge rén kàn?',
      note:'既然 + sự thật đã biết, vế sau hỏi vặn / đưa kết luận.',pair:'既然……'}
   ]},

  {n:45,zh:'袭击',py:'xíjī',pos:'Động từ',vn:'tập kích, đột kích, tấn công bất ngờ',hv:'tập kích',em:'⚡',lesson:1,
   explain:['Tấn công bất ngờ khi đối phương không đề phòng.','Mở rộng: thiên tai ập tới (台风袭击了沿海地区); danh từ: 遭到袭击, 恐怖袭击.'],
   usage:'袭击 + đối tượng; 遭到 / 受到 + 袭击; 台风 / 寒流 + 袭击 + nơi chốn.',
   collo:['恐怖袭击','遭到袭击','台风袭击','突然袭击'],
   ex_zh:'前两天的恐怖袭击到底是谁干的……',ex_py:'Qián liǎng tiān de kǒngbù xíjī dàodǐ shì shéi gàn de……',ex_vn:'Vụ tấn công khủng bố mấy hôm trước rốt cuộc là ai làm…',
   exList:[
     {zh:'前两天的恐怖袭击到底是谁干的……',py:'Qián liǎng tiān de kǒngbù xíjī dàodǐ shì shéi gàn de……',vn:'Vụ tấn công khủng bố mấy hôm trước rốt cuộc là ai làm…'},
     {zh:'昨天晚上，台风袭击了沿海地区。',py:'Zuótiān wǎnshang, táifēng xíjīle yánhǎi dìqū.',vn:'Tối qua, bão đổ bộ vào vùng ven biển.'},
     {zh:'在野外要小心，免得遭到野兽的袭击。',py:'Zài yěwài yào xiǎoxīn, miǎnde zāodào yěshòu de xíjī.',vn:'Ở ngoài hoang dã phải cẩn thận, kẻo bị thú dữ tấn công.'}
   ],
   colloFull:[
     {zh:'恐怖袭击',py:'kǒngbù xíjī',vn:'tấn công khủng bố'},
     {zh:'遭到袭击',py:'zāodào xíjī',vn:'bị tấn công'},
     {zh:'台风袭击',py:'táifēng xíjī',vn:'bão đổ bộ'},
     {zh:'突然袭击',py:'tūrán xíjī',vn:'tấn công bất ngờ'},
     {zh:'寒流袭击',py:'hánliú xíjī',vn:'đợt rét tràn về'}
   ],
   patterns:[
     {s:'遭到 + (N 的) + 袭击',m:'Bị … tấn công'},
     {s:'台风 / 寒流 + 袭击 + nơi chốn',m:'Bão / rét ập vào…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một đợt rét bất ngờ tràn về chỗ chúng tôi, may mà tôi mặc nhiều áo.',answer:'寒流突然袭击了我们这儿，幸亏我穿得多。',answerPy:'Hánliú tūrán xíjīle wǒmen zhèr, xìngkuī wǒ chuān de duō.',
      note:'幸亏 = may mà, nhờ có điều kiện thuận lợi mà tránh được hậu quả xấu.',pair:'幸亏'},
     {promptLang:'vi',prompt:'Tuy bị bão tấn công, nhưng thành phố rất nhanh đã trở lại bình thường.',answer:'虽然遭到了台风的袭击，但是城市很快就恢复了正常。',answerPy:'Suīrán zāodàole táifēng de xíjī, dànshì chéngshì hěn kuài jiù huīfùle zhèngcháng.',
      note:'遭到 + N 的袭击: dạng bị động bằng động từ 遭到.',pair:'虽然……但是……'}
   ]},

  {n:46,zh:'干扰',py:'gānrǎo',pos:'Động từ',vn:'quấy nhiễu, làm phiền, gây nhiễu',hv:'can nhiễu',em:'📵',lesson:1,
   explain:['Làm ảnh hưởng, gây trở ngại cho việc người khác đang làm: 干扰别人学习.','Dùng như danh từ: sự quấy nhiễu (没有手机的干扰, 受到干扰).'],
   usage:'干扰 + người / việc; 受到 / 不受 + 干扰; 没有……的干扰. 干 đọc gān.',
   collo:['没有手机的干扰','干扰别人','不受干扰','受到干扰'],
   ex_zh:'没有手机的干扰，生活这么安宁，我突然有了一种回归生活的欣慰。',ex_py:'Méiyǒu shǒujī de gānrǎo, shēnghuó zhème ānníng, wǒ tūrán yǒule yì zhǒng huíguī shēnghuó de xīnwèi.',ex_vn:'Không có điện thoại quấy nhiễu, cuộc sống yên bình đến thế, tôi bỗng có một niềm an ủi như được trở về với cuộc sống.',
   exList:[
     {zh:'没有手机的干扰，生活这么安宁，我突然有了一种回归生活的欣慰。',py:'Méiyǒu shǒujī de gānrǎo, shēnghuó zhème ānníng, wǒ tūrán yǒule yì zhǒng huíguī shēnghuó de xīnwèi.',vn:'Không có điện thoại quấy nhiễu, cuộc sống yên bình đến thế, tôi bỗng có một niềm an ủi như được trở về với cuộc sống.'},
     {zh:'别人在学习的时候，请不要大声说话干扰他们。',py:'Biérén zài xuéxí de shíhou, qǐng bú yào dàshēng shuōhuà gānrǎo tāmen.',vn:'Khi người khác đang học, xin đừng nói to làm phiền họ.'},
     {zh:'在没人干扰的情况下，我的写作进度会很快。',py:'Zài méi rén gānrǎo de qíngkuàng xià, wǒ de xiězuò jìndù huì hěn kuài.',vn:'Khi không có ai quấy rầy, tiến độ viết của tôi sẽ rất nhanh.'}
   ],
   colloFull:[
     {zh:'没有手机的干扰',py:'méiyǒu shǒujī de gānrǎo',vn:'không có sự quấy nhiễu của điện thoại'},
     {zh:'干扰别人',py:'gānrǎo biérén',vn:'làm phiền người khác'},
     {zh:'不受干扰',py:'bú shòu gānrǎo',vn:'không bị quấy nhiễu'},
     {zh:'受到干扰',py:'shòudào gānrǎo',vn:'bị quấy nhiễu'},
     {zh:'信号干扰',py:'xìnhào gānrǎo',vn:'nhiễu sóng'}
   ],
   patterns:[
     {s:'没有 + N + 的干扰',m:'Không có sự quấy nhiễu của…'},
     {s:'(不)受 + 干扰',m:'(Không) bị quấy nhiễu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để không bị làm phiền, cậu ấy tắt điện thoại trước rồi mới bắt đầu làm bài.',answer:'为了不受干扰，他先关了手机，然后才开始做题。',answerPy:'Wèile bú shòu gānrǎo, tā xiān guānle shǒujī, ránhòu cái kāishǐ zuò tí.',
      note:'先……然后（才）…… sắp xếp trình tự hành động.',pair:'先……然后……'},
     {promptLang:'vi',prompt:'Chỉ khi không có tiếng ồn quấy nhiễu, tôi mới tập trung được.',answer:'只有没有噪音的干扰，我才能集中注意力。',answerPy:'Zhǐyǒu méiyǒu zàoyīn de gānrǎo, wǒ cái néng jízhōng zhùyìlì.',
      note:'只有……才…… điều kiện duy nhất.',pair:'只有……才……'}
   ]},

  {n:47,zh:'安宁',py:'ānníng',pos:'Tính từ',vn:'yên tĩnh, thanh bình, yên ổn',hv:'an ninh',em:'🕊️',lesson:1,
   explain:['(Cuộc sống, nơi chốn) yên ổn, không bị quấy rầy: 生活安宁.','(Tâm trạng) bình yên: 心里不安宁 = trong lòng không yên.'],
   usage:'生活 / 社会 / 心里 + 安宁; 不得安宁 (không được yên). BẪY: không phải "an ninh" (安全 / 治安).',
   collo:['生活安宁','安宁的日子','不得安宁','心里不安宁'],
   ex_zh:'没有手机的干扰，生活这么安宁。',ex_py:'Méiyǒu shǒujī de gānrǎo, shēnghuó zhème ānníng.',ex_vn:'Không có điện thoại quấy nhiễu, cuộc sống yên bình đến thế.',
   exList:[
     {zh:'没有手机的干扰，生活这么安宁。',py:'Méiyǒu shǒujī de gānrǎo, shēnghuó zhème ānníng.',vn:'Không có điện thoại quấy nhiễu, cuộc sống yên bình đến thế.'},
     {zh:'邻居家天天装修，吵得我们不得安宁。',py:'Línjū jiā tiāntiān zhuāngxiū, chǎo de wǒmen bù dé ānníng.',vn:'Nhà hàng xóm ngày nào cũng sửa nhà, ồn đến mức chúng tôi không được yên.'},
     {zh:'退休以后，爷爷奶奶在乡下过着安宁的日子。',py:'Tuìxiū yǐhòu, yéye nǎinai zài xiāngxia guòzhe ānníng de rìzi.',vn:'Sau khi nghỉ hưu, ông bà sống những ngày thanh bình ở quê.'}
   ],
   colloFull:[
     {zh:'生活安宁',py:'shēnghuó ānníng',vn:'cuộc sống yên bình'},
     {zh:'安宁的日子',py:'ānníng de rìzi',vn:'những ngày thanh bình'},
     {zh:'不得安宁',py:'bù dé ānníng',vn:'không được yên'},
     {zh:'心里不安宁',py:'xīnli bù ānníng',vn:'trong lòng không yên'}
   ],
   patterns:[
     {s:'生活 / 心里 + 安宁',m:'Cuộc sống / lòng yên bình'},
     {s:'……得 + người + 不得安宁',m:'… khiến ai không được yên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện đó ngày nào chưa giải quyết, lòng tôi ngày ấy chưa yên.',answer:'那件事一天不解决，我心里就一天不安宁。',answerPy:'Nà jiàn shì yì tiān bù jiějué, wǒ xīnli jiù yì tiān bù ānníng.',
      note:'一天不 A，就一天不 B: chừng nào A chưa xảy ra thì B cũng chưa.',pair:'一天不……就一天不……'},
     {promptLang:'vi',prompt:'Tôi thà sống những ngày yên bình ở quê, chứ không muốn ở thành phố ồn ào.',answer:'我宁可在乡下过安宁的日子，也不愿意住在吵闹的城市里。',answerPy:'Wǒ nìngkě zài xiāngxia guò ānníng de rìzi, yě bú yuànyì zhù zài chǎonào de chéngshì li.',
      note:'宁可 A 也不 B = thà A chứ không B.',pair:'宁可……也不……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 97–99), mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 不用手机的日子',
   preQuiz:[
     {q:'老板为什么在开会时发火？',opts:['大家都在玩儿手机','大家都迟到了','会议室太吵了'],ans:0},
     {q:'“我”在手机上看了一条什么新闻？',opts:['老板的新闻','一对年轻人边开车边拍照，把桥撞坏了','一个侦探破了案'],ans:1},
     {q:'那对年轻人撞坏了桥以后，先做了什么？',opts:['马上报警','下车拍照发微信','开车逃走了'],ans:1},
     {q:'同事说离不开手机是什么？',opts:['一种好习惯','一种精神病','一种新的工作方式'],ans:1},
     {q:'老板最后作出了什么决定？',opts:['以后开会谁都不许带手机','以后不开会了','给每人买一部新手机'],ans:0},
     {q:'为什么说“我”成了手机的奴隶？',opts:['“我”每天用手机工作','“我”心里只有手机，对什么都麻木了','“我”的手机坏了'],ans:1},
     {q:'阿毛跟“我”说话时，“我”怎么回答？',opts:['马上放下了手机','让他也拿出手机，在手机上聊','生气地走了'],ans:1},
     {q:'“我”决定尝试什么？',opts:['换一部新手机','一周关机一天','每天只看一次微信'],ans:1},
     {q:'为了防止自己意志薄弱，“我”怎么安置手机？',opts:['交给阿毛保管','把手机包好放进盒子，收到衣柜最里面','扔进了垃圾桶'],ans:1},
     {q:'“我”去公园做了什么？',opts:['跑步','跳摇滚','唱歌'],ans:1},
     {q:'回到家看到手机还在，“我”觉得怎么样？',opts:['心里踏实了许多','很失望','很生气'],ans:0},
     {q:'“我”用什么事来弥补心中的空虚？',opts:['看书','熬粥','打扫房间'],ans:1},
     {q:'没有手机的干扰，“我”有了什么感受？',opts:['非常无聊','一种回归生活的欣慰','很害怕'],ans:1}
   ],
   lines:[
    {sp:0,zh:'开会时老板火了：“别假装正经了，我知道你们都在玩儿手机，那玩意儿就那么好玩儿？”',
     py:'Kāihuì shí lǎobǎn huǒ le: “Bié jiǎzhuāng zhèngjing le, wǒ zhīdào nǐmen dōu zài wánr shǒujī, nà wányìr jiù nàme hǎowánr?”',
     vn:'Lúc họp, sếp nổi nóng: "Đừng giả vờ nghiêm túc nữa, tôi biết các cậu đều đang nghịch điện thoại, cái thứ đó hay ho đến thế sao?"'},
    {sp:0,zh:'老板指着我：“你说说，看了什么？比我说话还有意思？”',
     py:'Lǎobǎn zhǐzhe wǒ: “Nǐ shuōshuo, kànle shénme? Bǐ wǒ shuōhuà hái yǒu yìsi?”',
     vn:'Sếp chỉ vào tôi: "Cậu nói xem, đã xem cái gì? Còn thú vị hơn tôi nói à?"'},
    {sp:0,zh:'我脸憋得通红，说：“一对年轻人边开车边拿手机拍照，把桥撞坏了，没报警，先下车拍照发微信。要不要转发给您？”',
     py:'Wǒ liǎn biē de tōnghóng, shuō: “Yí duì niánqīngrén biān kāichē biān ná shǒujī pāizhào, bǎ qiáo zhuànghuài le, méi bào jǐng, xiān xià chē pāizhào fā Wēixìn. Yào bu yào zhuǎnfā gěi nín?”',
     vn:'Mặt tôi đỏ bừng, nói: "Có một đôi thanh niên vừa lái xe vừa cầm điện thoại chụp ảnh, đâm hỏng cả cây cầu, không báo cảnh sát mà xuống xe chụp ảnh đăng WeChat trước. Có cần em chuyển tiếp cho sếp không ạ?"'},
    {sp:0,zh:'老板一摆手：“你们呀，都让手机给绑架了，这么过日子，不受罪吗？”',
     py:'Lǎobǎn yì bǎi shǒu: “Nǐmen ya, dōu ràng shǒujī gěi bǎngjià le, zhème guò rìzi, bú shòu zuì ma?”',
     vn:'Sếp xua tay: "Các cậu ấy à, đều bị điện thoại bắt cóc cả rồi, sống thế này không khổ sao?"'},
    {sp:0,zh:'一同事举手：“老板，刚搜索了一下，离不开手机也是一种精神病。”',
     py:'Yì tóngshì jǔ shǒu: “Lǎobǎn, gāng sōusuǒle yíxià, lí bu kāi shǒujī yě shì yì zhǒng jīngshénbìng.”',
     vn:'Một đồng nghiệp giơ tay: "Sếp ơi, em vừa tìm trên mạng một chút, không rời được điện thoại cũng là một loại bệnh tâm thần."'},
    {sp:0,zh:'老板大吼：“有病就得治！”，随后黑着脸扔下一句话：“以后开会谁都不许带手机！”',
     py:'Lǎobǎn dà hǒu: “Yǒu bìng jiù děi zhì!”, suíhòu hēizhe liǎn rēngxià yí jù huà: “Yǐhòu kāihuì shéi dōu bù xǔ dài shǒujī!”',
     vn:'Sếp quát lớn: "Có bệnh thì phải chữa!", rồi sầm mặt buông lại một câu: "Từ nay họp hành ai cũng không được mang điện thoại!"'},
    {sp:0,zh:'老板说的没错，特别是有了智能手机，我就成了手机的奴隶，对什么都麻木了，心里只有手机：三分钟看一次新闻；十分钟发一次微信；吃饭前先拍照；狼吞虎咽吃完，又埋头看微信；睡觉之前先给手机充电……把手机它老人家伺候得好好的。有一次阿毛对我说：“我跟你说话呢，你干吗老看手机？”。我冲他眨眨眼，说：“那你也拿出手机，咱们手机上聊吧，保证不分心！”',
     py:'Lǎobǎn shuō de méi cuò, tèbié shì yǒule zhìnéng shǒujī, wǒ jiù chéngle shǒujī de núlì, duì shénme dōu mámù le, xīnli zhǐ yǒu shǒujī: sān fēnzhōng kàn yí cì xīnwén; shí fēnzhōng fā yí cì Wēixìn; chīfàn qián xiān pāizhào; lángtūn-hǔyàn chīwán, yòu máitóu kàn Wēixìn; shuìjiào zhīqián xiān gěi shǒujī chōngdiàn……bǎ shǒujī tā lǎorénjia cìhou de hǎohāo de. Yǒu yí cì Āmáo duì wǒ shuō: “Wǒ gēn nǐ shuōhuà ne, nǐ gànmá lǎo kàn shǒujī?”. Wǒ chòng tā zhǎzha yǎn, shuō: “Nà nǐ yě náchū shǒujī, zánmen shǒujī shang liáo ba, bǎozhèng bù fēnxīn!”',
     vn:'Sếp nói không sai, nhất là từ khi có điện thoại thông minh, tôi đã thành nô lệ của điện thoại, thờ ơ với mọi thứ, trong lòng chỉ có điện thoại: ba phút xem tin tức một lần; mười phút gửi WeChat một lần; trước khi ăn thì chụp ảnh; ăn ngấu nghiến xong lại cắm cúi xem WeChat; trước khi ngủ thì sạc pin cho điện thoại trước… hầu hạ "cụ" điện thoại thật chu đáo. Có lần A Mao nói với tôi: "Tớ đang nói chuyện với cậu đấy, sao cậu cứ nhìn điện thoại thế?". Tôi nháy mắt với cậu ấy, nói: "Vậy cậu cũng lấy điện thoại ra, bọn mình nói chuyện trên điện thoại đi, đảm bảo không phân tâm!"'},
    {sp:0,zh:'离开了手机，难道会死吗？何不尝试一下一周关机一天？说干就干，索性这礼拜就开始。',
     py:'Líkāile shǒujī, nándào huì sǐ ma? Hébù chángshì yíxià yì zhōu guānjī yì tiān? Shuō gàn jiù gàn, suǒxìng zhè lǐbài jiù kāishǐ.',
     vn:'Rời điện thoại ra, chẳng lẽ sẽ chết sao? Sao không thử mỗi tuần tắt máy một ngày? Nói là làm, dứt khoát bắt đầu ngay tuần này.'},
    {sp:0,zh:'周日，我按小学生的作息时间七点起床，之后，先着手安置我的手机。为了防止自己意志薄弱，我找来个精致的盒子，把手机层层包好，庄重地放在盒子里，收到衣柜最里面。为了分散注意力，我决定去公园锻炼我那僵硬的四肢，因为迷上智能手机以后，我已经好久不锻炼了。',
     py:'Zhōurì, wǒ àn xiǎoxuéshēng de zuòxī shíjiān qī diǎn qǐchuáng, zhīhòu, xiān zhuóshǒu ānzhì wǒ de shǒujī. Wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ zhǎolái ge jīngzhì de hézi, bǎ shǒujī céngcéng bāohǎo, zhuāngzhòng de fàng zài hézi li, shōudào yīguì zuì lǐmiàn. Wèile fēnsàn zhùyìlì, wǒ juédìng qù gōngyuán duànliàn wǒ nà jiāngyìng de sìzhī, yīnwèi míshang zhìnéng shǒujī yǐhòu, wǒ yǐjīng hǎojiǔ bú duànliàn le.',
     vn:'Chủ nhật, tôi theo thời gian biểu của học sinh tiểu học, bảy giờ dậy, sau đó trước tiên bắt tay vào thu xếp chiếc điện thoại. Để phòng bản thân ý chí yếu đuối, tôi tìm một chiếc hộp tinh xảo, gói điện thoại lại từng lớp, trịnh trọng đặt vào hộp, cất vào tận trong cùng tủ quần áo. Để đánh lạc hướng sự chú ý, tôi quyết định ra công viên vận động tứ chi cứng đờ của mình, vì từ khi mê điện thoại thông minh, tôi đã lâu lắm không tập thể dục.'},
    {sp:0,zh:'公园里唱的跳的都有。跳舞是我的特长，我兴高采烈地跳起了摇滚，既能娱乐身心，又能锻炼身体，一举两得。',
     py:'Gōngyuán li chàng de tiào de dōu yǒu. Tiàowǔ shì wǒ de tècháng, wǒ xìnggāo-cǎiliè de tiàoqǐle yáogǔn, jì néng yúlè shēnxīn, yòu néng duànliàn shēntǐ, yìjǔ-liǎngdé.',
     vn:'Trong công viên người hát kẻ nhảy đủ cả. Nhảy là sở trường của tôi, tôi hớn hở nhảy điệu rock, vừa giải trí thân tâm, vừa rèn luyện cơ thể, một công đôi việc.'},
    {sp:0,zh:'跳完舞，我往家走，突然想起被冷落了半天儿的手机，急忙赶回家，打开衣柜，手机还在，我心里踏实了许多。五个小时没碰它，我心空虚得要命，我决定用熬粥这件最消耗时间的事来弥补心中的空虚。烧水，下米，看着雪白的米在沸腾的水中翻滚，屋子里渐渐弥漫着粥的香气，屋外竟然传来了鸟的叫声，我的心慢慢静了下来。要在往常，我一定早待不住了，惦记着某某侦探的案件是不是有了突破，科学家是否有了震惊世界的发现，彩票大奖开了没有，前两天的恐怖袭击到底是谁干的……',
     py:'Tiàowán wǔ, wǒ wǎng jiā zǒu, tūrán xiǎngqǐ bèi lěngluòle bàntiānr de shǒujī, jímáng gǎnhuí jiā, dǎkāi yīguì, shǒujī hái zài, wǒ xīnli tāshile xǔduō. Wǔ ge xiǎoshí méi pèng tā, wǒ xīn kōngxū de yào mìng, wǒ juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ xīnzhōng de kōngxū. Shāo shuǐ, xià mǐ, kànzhe xuěbái de mǐ zài fèiténg de shuǐ zhōng fāngǔn, wūzi li jiànjiàn mímànzhe zhōu de xiāngqì, wū wài jìngrán chuánláile niǎo de jiàoshēng, wǒ de xīn mànmàn jìngle xiàlái. Yào zài wǎngcháng, wǒ yídìng zǎo dāi bu zhù le, diànjìzhe mǒumǒu zhēntàn de ànjiàn shì bu shì yǒule tūpò, kēxuéjiā shìfǒu yǒule zhènjīng shìjiè de fāxiàn, cǎipiào dàjiǎng kāile méiyǒu, qián liǎng tiān de kǒngbù xíjī dàodǐ shì shéi gàn de……',
     vn:'Nhảy xong, tôi đi về nhà, bỗng nhớ đến chiếc điện thoại bị bỏ rơi nửa ngày, vội vàng chạy về, mở tủ quần áo, điện thoại vẫn còn, lòng tôi yên tâm hơn nhiều. Năm tiếng không đụng đến nó, lòng tôi trống rỗng kinh khủng, tôi quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp sự trống rỗng trong lòng. Đun nước, cho gạo vào, nhìn những hạt gạo trắng tinh cuộn lên trong nước sôi sùng sục, trong phòng dần tỏa khắp mùi thơm của cháo, ngoài nhà vậy mà vọng vào tiếng chim hót, lòng tôi dần lắng xuống. Nếu là mọi khi, chắc chắn tôi đã ngồi không yên từ lâu, cứ canh cánh không biết vụ án của thám tử nọ đã có bước đột phá chưa, các nhà khoa học đã có phát hiện chấn động thế giới nào chưa, giải độc đắc xổ số đã mở thưởng chưa, vụ tấn công khủng bố mấy hôm trước rốt cuộc là ai làm…'},
    {sp:0,zh:'没有手机的干扰，生活这么安宁，我突然有了一种回归生活的欣慰。',
     py:'Méiyǒu shǒujī de gānrǎo, shēnghuó zhème ānníng, wǒ tūrán yǒule yì zhǒng huíguī shēnghuó de xīnwèi.',
     vn:'Không có điện thoại quấy nhiễu, cuộc sống yên bình đến thế, tôi bỗng có một niềm an ủi như được trở về với cuộc sống.'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 索性—干脆 lấy từ sách (tr. 101–102, 做一做: 判断正误); 防止—预防, 往常—平时 soạn thêm
// ══════════════════════════════════════════
var synonymData = [
  {pair:'索性 — 干脆',
   same:'Khi làm PHÓ TỪ, cách dùng về cơ bản giống nhau: biểu thị nói năng, làm việc rất thẳng, dứt khoát, không cân nhắc nhiều ("… luôn cho xong").',
   sameEx:{zh:'这鞋子太旧了，索性／干脆扔掉吧。',vn:'Đôi giày này cũ quá rồi, vứt luôn đi.'},
   items:[
     {word:'索性',points:[
       'CHỈ là phó từ, đứng trước động từ.',
       'Thường dùng khi thấy tình hình đã như vậy thì làm luôn cho dứt khoát (找不着，索性不找了).',
       'Không làm vị ngữ, không đi với 很, không làm trạng ngữ có 地, không làm bổ ngữ.'
     ],ex:[{zh:'找了好几个地方都没找着，索性不找了。',vn:'Tìm mấy chỗ đều không thấy, thôi dứt khoát không tìm nữa.'}]},
     {word:'干脆',points:[
       'Phó từ: giống 索性 (干脆扔掉吧).',
       'Còn là TÍNH TỪ, nghĩa là nhanh nhẹn, dứt khoát, không lằng nhằng (= 爽快).',
       'Làm được vị ngữ (他很干脆), trạng ngữ (干脆地拒绝), bổ ngữ (回答得很干脆), định ngữ (干脆的人).'
     ],ex:[{zh:'这个人说话做事很干脆，一点儿也不拖泥带水。',vn:'Người này nói năng làm việc rất dứt khoát, không chút lề mề.'}]}
   ],
   quiz:[
     {sentence:'这件衣服太旧了，＿＿扔掉吧。',options:['索性','干脆'],answer:0,both:true,
      why:'Phó từ đứng trước động từ (扔掉) — cả hai đều dùng được.'},
     {sentence:'他回答得很＿＿，一点儿也不犹豫。',options:['索性','干脆'],answer:1,
      why:'Làm bổ ngữ sau 得, có 很 → là tính từ → chỉ 干脆.'},
     {sentence:'她是个＿＿的人，从来不拖泥带水。',options:['索性','干脆'],answer:1,
      why:'Làm định ngữ trước danh từ (tính từ) → chỉ 干脆. 索性 chỉ là phó từ.'},
     {sentence:'等了半天车也没来，我们＿＿走回去吧。',options:['索性','干脆'],answer:0,both:true,
      why:'Phó từ trước động từ, nghĩa "đã vậy thì làm luôn" — cả hai đều được.'}
   ],
   sgk:{
     chung:{t:'做副词时，用法基本相同。表示说话、做事很直接，没有过多地考虑。',vn:'Khi làm phó từ, cách dùng về cơ bản giống nhau. Biểu thị nói năng, làm việc rất thẳng, không cân nhắc nhiều.',vd:'这鞋子太旧了，索性／干脆扔掉吧。',vdVn:'Đôi giày này cũ quá rồi, vứt luôn đi.'},
     khac:[
       {a:{t:'没有右边这个用法。',vn:'Không có cách dùng như bên phải.'},
        b:{t:'除了副词用法外，还可以做形容词，可以做谓语，表示“爽快”的意思。',vn:'Ngoài cách dùng phó từ, còn có thể làm tính từ, làm vị ngữ, mang nghĩa "nhanh nhẹn, dứt khoát" (爽快).',vd:'这个人说话做事很干脆，一点儿也不拖泥带水。',vdVn:'Người này nói năng làm việc rất dứt khoát, không chút lề mề.'}}
     ],
     deLam:'判断正误 — Tích vào cột đúng (√) hay sai (×) cho từng câu',
     cot:['√ đúng','× sai'],
     lamThu:[
       {s:'他觉得这门课没有用，索性不去上课了。',dap:[true,false],
        giai:'索性 là phó từ đứng trước động từ (不去上课): thấy môn học vô ích nên dứt khoát không đi học nữa — đúng.'},
       {s:'你干脆点儿行吗？别总是犹犹豫豫的。',dap:[true,false],
        giai:'干脆 làm tính từ, làm vị ngữ (干脆点儿 = dứt khoát lên) — chỉ 干脆 có cách dùng này, câu đúng.'},
       {s:'我做事一直都很索性，从来不琢磨来琢磨去。',dap:[false,true],
        giai:'索性 chỉ là phó từ, không làm vị ngữ, không đi với 很 → sai; phải nói 我做事一直都很干脆.'},
       {s:'他很干脆地拒绝了我，一点儿余地都没有。',dap:[true,false],
        giai:'干脆 là tính từ, 很干脆地 làm trạng ngữ cho 拒绝 — đúng.'}
     ]
   }},

  {pair:'防止 — 预防',
   same:'Đều là động từ, đều nghĩa là "phòng trước để điều xấu không xảy ra"; tân ngữ đều là việc xấu.',
   sameEx:{zh:'天冷了，出门多穿点儿衣服，防止／预防感冒。',vn:'Trời lạnh rồi, ra ngoài mặc thêm áo để phòng cảm.'},
   items:[
     {word:'防止',points:[
       'Nhấn vào NGĂN CHẶN việc xấu xảy ra hoặc lan rộng, thường là nguy cơ ngay trước mắt.',
       'Tân ngữ hay là cụm động từ / sự việc: 防止事故发生, 防止意志薄弱, 防止浪费.',
       'Không tạo từ ghép như 预防针, không làm định ngữ trước danh từ.'
     ],ex:[{zh:'为了防止自己意志薄弱，我把手机收到衣柜最里面。',vn:'Để phòng mình yếu lòng, tôi cất điện thoại vào tận trong cùng tủ quần áo.'}]},
     {word:'预防',points:[
       'Nhấn vào PHÒNG TỪ TRƯỚC, có biện pháp chuẩn bị sẵn (thường là bệnh tật, thiên tai, hỏa hoạn).',
       'Tạo từ: 预防针 (mũi tiêm phòng), 预防措施 (biện pháp phòng ngừa).',
       'Làm được định ngữ, chủ ngữ: 预防工作, 预防为主.'
     ],ex:[{zh:'打预防针可以预防很多疾病。',vn:'Tiêm phòng có thể phòng được nhiều bệnh.'}]}
   ],
   quiz:[
     {sentence:'冬天到了，大家要注意＿＿感冒。',options:['防止','预防'],answer:1,both:true,
      why:'Phòng bệnh — cả hai đều dùng được; 预防 tự nhiên hơn khi nói về bệnh.'},
     {sentence:'孩子出生以后要按时打＿＿针。',options:['防止','预防'],answer:1,
      why:'预防针 là từ cố định (mũi tiêm phòng) → chỉ 预防.'},
     {sentence:'为了＿＿自己意志薄弱，我把手机锁进了抽屉。',options:['防止','预防'],answer:0,
      why:'Ngăn một điều xấu có thể xảy ra ngay (bản thân yếu lòng) → 防止, như câu trong bài khoá.'},
     {sentence:'＿＿工作做得好，很多疾病都可以避免。',options:['防止','预防'],answer:1,
      why:'Làm định ngữ trước danh từ (预防工作) → chỉ 预防.'}
   ]},

  {pair:'往常 — 平时',
   same:'Đều là danh từ chỉ thời gian, đều chỉ "lúc bình thường, thường ngày".',
   sameEx:{zh:'今天路上很堵，往常／平时这里很少堵车。',vn:'Hôm nay đường tắc lắm, mọi khi ở đây ít tắc đường.'},
   items:[
     {word:'往常',points:[
       'Chỉ QUÁ KHỨ, luôn ngầm so sánh với một lần hiện tại khác thường (今天……，往常……).',
       'Hay đi với 和往常一样, 要在往常, 比往常.',
       'Không dùng cho lời khuyên, kế hoạch hướng về tương lai.'
     ],ex:[{zh:'今天他比往常早起了一个小时。',vn:'Hôm nay cậu ấy dậy sớm hơn mọi khi một tiếng.'}]},
     {word:'平时',points:[
       'Chỉ lúc bình thường nói chung (quá khứ, hiện tại, tương lai đều được), đối lập với lúc đặc biệt (考试时, 节假日).',
       'Dùng được trong lời khuyên, thói quen hiện tại: 平时要多练习, 你平时喜欢做什么?'
     ],ex:[{zh:'平时多练习，考试时就不会紧张了。',vn:'Ngày thường chịu khó luyện tập thì lúc thi sẽ không căng thẳng.'}]}
   ],
   quiz:[
     {sentence:'＿＿多努力，考试时才不会紧张。',options:['往常','平时'],answer:1,
      why:'Lời khuyên chung hướng tới tương lai → 平时.'},
     {sentence:'今天路上很堵，＿＿这里很少堵车。',options:['往常','平时'],answer:0,both:true,
      why:'So sánh hôm nay với mọi khi — 往常 hợp nhất; 平时 cũng dùng được.'},
     {sentence:'和＿＿一样，爷爷吃完晚饭就去散步了。',options:['往常','平时'],answer:0,
      why:'和往常一样 là cụm cố định (như mọi khi), kể lại một lần cụ thể.'},
     {sentence:'你＿＿喜欢做什么？',options:['往常','平时'],answer:1,
      why:'Hỏi thói quen chung ở hiện tại → 平时; 往常 chỉ dùng khi so với một lần khác thường.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'奴隶',hv:'nô lệ',vn:'nô lệ',note:'Trùng khít, cả nghĩa bóng "nô lệ của điện thoại".'},
    {zh:'四肢',hv:'tứ chi',vn:'tay chân',note:'Trùng khít.'},
    {zh:'突破',hv:'đột phá',vn:'đột phá, vượt qua',note:'Trùng khít.'},
    {zh:'侦探',hv:'trinh thám',vn:'thám tử; trinh thám',note:'Trùng khít: 侦探小说 = tiểu thuyết trinh thám.'},
    {zh:'消耗',hv:'tiêu hao',vn:'tiêu hao, tốn',note:'Trùng khít.'},
    {zh:'分散',hv:'phân tán',vn:'phân tán',note:'Trùng khít: 分散注意力 = phân tán sự chú ý.'},
    {zh:'庄重',hv:'trang trọng',vn:'trang trọng',note:'Trùng khít.'},
    {zh:'袭击',hv:'tập kích',vn:'tập kích, tấn công bất ngờ',note:'Trùng khít; tiếng Trung dùng rộng hơn cho bão, rét (台风袭击).'},
    {zh:'薄弱',hv:'bạc nhược',vn:'yếu kém',note:'Gần khớp: "ý chí bạc nhược" = 意志薄弱; 基础薄弱 dịch "nền tảng yếu".'},
    {zh:'智能',hv:'trí năng',vn:'thông minh (thiết bị)',note:'"Trí" = trí tuệ, "năng" = năng lực → 智能手机 = điện thoại thông minh.'},
    {zh:'案件',hv:'án kiện',vn:'vụ án',note:'"Án" = vụ án; 件 là lượng từ ghép vào → vụ việc.'}
  ],
  idiom:[
    {zh:'狼吞虎咽',hv:'lang thôn hổ yết',vn:'ăn ngấu nghiến',note:'"Lang" = sói, "hổ" = cọp, "thôn / yết" = nuốt → nuốt như sói như hổ.'},
    {zh:'兴高采烈',hv:'hứng cao thái liệt',vn:'hớn hở, phấn khởi',note:'"Hứng" dâng cao, "thái" (tinh thần) sôi nổi; 兴 đọc xìng.'},
    {zh:'一举两得',hv:'nhất cử lưỡng đắc',vn:'một công đôi việc',note:'Một cử chỉ được hai cái lợi; tiếng Việt quen nói "nhất cử lưỡng tiện".'}
  ],
  trap:[
    {zh:'安宁',hv:'an ninh',vn:'yên bình, thanh bình',
     warn:'BẪY: "an ninh" tiếng Việt là security (治安 / 安全). 安宁 tiếng Trung là YÊN BÌNH: 生活安宁 = cuộc sống yên bình.'},
    {zh:'恐怖',hv:'khủng bố',vn:'khủng khiếp, rùng rợn',
     warn:'"Khủng bố" tiếng Việt chủ yếu là terrorism. 恐怖 là tính từ "đáng sợ": 恐怖电影 = phim kinh dị; chỉ 恐怖袭击 / 恐怖分子 mới là khủng bố.'},
    {zh:'正经',hv:'chính kinh',vn:'đứng đắn, nghiêm túc',
     warn:'Không liên quan đến "kinh sách". 正经 = đứng đắn, nghiêm túc: 假装正经 = giả vờ nghiêm túc; 正经事 = việc đàng hoàng.'},
    {zh:'受罪',hv:'thụ tội',vn:'chịu khổ',
     warn:'Không phải "chịu tội" trước pháp luật! 受罪 chỉ là chịu khổ sở, khó chịu: 这么热还穿西装，真受罪.'},
    {zh:'特长',hv:'đặc trường',vn:'sở trường',
     warn:'Không có từ "đặc trường" trong tiếng Việt; 特 = đặc biệt, 长 = sở trường (như "sở trường") → năng khiếu, sở trường.'},
    {zh:'空虚',hv:'không hư',vn:'trống rỗng',
     warn:'"Hư" ở đây là trống (hư không), không phải "hư hỏng". 心里空虚 = trong lòng trống rỗng.'},
    {zh:'要命',hv:'yếu mệnh',vn:'cực kỳ; chết thật',
     warn:'"Yếu" ở đây là 要 = đòi, lấy (không phải yếu đuối); làm bổ ngữ 累得要命 = mệt chết đi được.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — cụm từ trong bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'假装',right:'正经'},
  {left:'脸憋得',right:'通红'},
  {left:'让手机给',right:'绑架了'},
  {left:'大',right:'吼'},
  {left:'智能',right:'手机'},
  {left:'手机的',right:'奴隶'},
  {left:'狼吞虎咽',right:'吃完'},
  {left:'冲他',right:'眨眨眼'},
  {left:'作息',right:'时间'},
  {left:'着手',right:'安置'},
  {left:'意志',right:'薄弱'},
  {left:'精致的',right:'盒子'},
  {left:'庄重地',right:'放在盒子里'},
  {left:'分散',right:'注意力'},
  {left:'僵硬的',right:'四肢'},
  {left:'跳起了',right:'摇滚'},
  {left:'一举',right:'两得'},
  {left:'心里',right:'踏实'},
  {left:'空虚得',right:'要命'},
  {left:'熬',right:'粥'},
  {left:'消耗',right:'时间'},
  {left:'弥补',right:'空虚'},
  {left:'沸腾的',right:'水'},
  {left:'弥漫着',right:'香气'},
  {left:'震惊',right:'世界'},
  {left:'恐怖',right:'袭击'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'别开玩笑了，咱们说点儿',blank:'正经',post:'事吧。',hint:'(nghiêm túc, đàng hoàng)',ans:'正经'},
  {pre:'我知道你们都在玩儿手机，那',blank:'玩意儿',post:'就那么好玩儿？',hint:'(cái thứ — khẩu ngữ)',ans:'玩意儿'},
  {pre:'有什么话就说出来，别总',blank:'憋',post:'在心里。',hint:'(nén)',ans:'憋'},
  {pre:'发现家里被偷了，她马上打电话',blank:'报警',post:'。',hint:'(báo cảnh sát)',ans:'报警'},
  {pre:'你们呀，都让手机给',blank:'绑架',post:'了。',hint:'(bắt cóc, trói buộc)',ans:'绑架'},
  {pre:'这么热的天还穿西装开会，真是活',blank:'受罪',post:'。',hint:'(chịu khổ)',ans:'受罪'},
  {pre:'老板大',blank:'吼',post:'：“有病就得治！”',hint:'(quát)',ans:'吼'},
  {pre:'特别是有了',blank:'智能',post:'手机，我就成了手机的奴隶。',hint:'(thông minh — thiết bị)',ans:'智能'},
  {pre:'我们应该做金钱的主人，而不是金钱的',blank:'奴隶',post:'。',hint:'(nô lệ)',ans:'奴隶'},
  {pre:'在雪地里站了半天，我的手脚都冻得',blank:'麻木',post:'了。',hint:'(tê dại)',ans:'麻木'},
  {pre:'他饿坏了，端起碗就',blank:'狼吞虎咽',post:'地吃了起来。',hint:'(ăn ngấu nghiến)',ans:'狼吞虎咽'},
  {pre:'这位顾客要求特别多，真难',blank:'伺候',post:'。',hint:'(hầu hạ, chiều)',ans:'伺候'},
  {pre:'一',blank:'眨',post:'眼，暑假就过去了。',hint:'(chớp)',ans:'眨'},
  {pre:'雨越下越大，我们',blank:'索性',post:'在咖啡馆多坐一会儿。',hint:'(dứt khoát … luôn)',ans:'索性'},
  {pre:'考试前也要按时',blank:'作息',post:'，千万别熬夜。',hint:'(sinh hoạt, làm – nghỉ)',ans:'作息'},
  {pre:'离高考还有一年，他已经',blank:'着手',post:'准备了。',hint:'(bắt tay vào)',ans:'着手'},
  {pre:'到了酒店，我们先把行李',blank:'安置',post:'好，再出去吃饭。',hint:'(thu xếp)',ans:'安置'},
  {pre:'天气变化大，要多穿衣服，',blank:'防止',post:'感冒。',hint:'(phòng ngừa)',ans:'防止'},
  {pre:'老师帮我们找出了复习中的',blank:'薄弱',post:'环节。',hint:'(yếu)',ans:'薄弱'},
  {pre:'这家店的点心不但好吃，而且做得非常',blank:'精致',post:'。',hint:'(tinh xảo)',ans:'精致'},
  {pre:'在这样',blank:'庄重',post:'的场合，你别开玩笑了。',hint:'(trang trọng)',ans:'庄重'},
  {pre:'学习时把手机放远一点儿，免得',blank:'分散',post:'精力。',hint:'(phân tán)',ans:'分散'},
  {pre:'第一次上台表演，他紧张得表情都',blank:'僵硬',post:'了。',hint:'(cứng đờ)',ans:'僵硬'},
  {pre:'发烧的时候，我觉得',blank:'四肢',post:'无力，什么都不想做。',hint:'(tay chân)',ans:'四肢'},
  {pre:'面试的时候，经理问我有什么',blank:'特长',post:'。',hint:'(sở trường)',ans:'特长'},
  {pre:'孩子们',blank:'兴高采烈',post:'地出发去春游了。',hint:'(hớn hở)',ans:'兴高采烈'},
  {pre:'他们几个同学组了一个',blank:'摇滚',post:'乐队。',hint:'(nhạc rock)',ans:'摇滚'},
  {pre:'给外国朋友当导游，既能练口语，又能交朋友，真是',blank:'一举两得',post:'。',hint:'(một công đôi việc)',ans:'一举两得'},
  {pre:'有了弟弟以后，姐姐觉得自己受到了',blank:'冷落',post:'。',hint:'(sự lạnh nhạt)',ans:'冷落'},
  {pre:'考试的事没准备好，我晚上一直睡不',blank:'踏实',post:'。',hint:'(yên, yên tâm)',ans:'踏实'},
  {pre:'退休以后，爷爷一下子闲下来，常常感到很',blank:'空虚',post:'。',hint:'(trống trải)',ans:'空虚'},
  {pre:'考试时，我紧张得',blank:'要命',post:'，手心里都是汗。',hint:'(… kinh khủng)',ans:'要命'},
  {pre:'我感冒了，妈妈给我熬了一碗热',blank:'粥',post:'。',hint:'(cháo)',ans:'粥'},
  {pre:'玩儿手机游戏特别',blank:'消耗',post:'电量，一会儿就没电了。',hint:'(tiêu hao, tốn)',ans:'消耗'},
  {pre:'这次的错误给公司造成了无法',blank:'弥补',post:'的损失。',hint:'(bù đắp)',ans:'弥补'},
  {pre:'比赛最后一秒进了球，全场顿时',blank:'沸腾',post:'了。',hint:'(sôi sục)',ans:'沸腾'},
  {pre:'考场里',blank:'弥漫',post:'着紧张的气氛。',hint:'(bao trùm, lan khắp)',ans:'弥漫'},
  {pre:'今天他比',blank:'往常',post:'早起了一个小时。',hint:'(mọi khi)',ans:'往常'},
  {pre:'我从小就爱看',blank:'侦探',post:'小说。',hint:'(trinh thám)',ans:'侦探'},
  {pre:'经过半年的调查，警方终于侦破了这起',blank:'案件',post:'。',hint:'(vụ án)',ans:'案件'},
  {pre:'这位运动员又一次',blank:'突破',post:'了世界纪录。',hint:'(phá, vượt qua)',ans:'突破'},
  {pre:'科学家是否有了',blank:'震惊',post:'世界的发现？',hint:'(chấn động)',ans:'震惊'},
  {pre:'他每个星期都买一张',blank:'彩票',post:'，可是从来没中过。',hint:'(vé số)',ans:'彩票'},
  {pre:'我胆子小，从来不敢一个人看',blank:'恐怖',post:'电影。',hint:'(kinh dị)',ans:'恐怖'},
  {pre:'在野外要小心，免得遭到野兽的',blank:'袭击',post:'。',hint:'(tấn công)',ans:'袭击'},
  {pre:'在没人',blank:'干扰',post:'的情况下，我的写作进度会很快。',hint:'(quấy rầy)',ans:'干扰'},
  {pre:'邻居家天天装修，吵得我们不得',blank:'安宁',post:'。',hint:'(yên ổn)',ans:'安宁'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (通红·雪白 · 说A就A · ……得要命) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我','脸','憋得','通红','。'],ans:'我脸憋得通红。',audio:'我脸憋得通红。'},
  {words:['雪白的','米','在','沸腾的','水中','翻滚','。'],ans:'雪白的米在沸腾的水中翻滚。',audio:'雪白的米在沸腾的水中翻滚。'},
  {words:['小猫的','肚子','吃得','滚圆滚圆的','。'],ans:'小猫的肚子吃得滚圆滚圆的。',audio:'小猫的肚子吃得滚圆滚圆的。'},
  {words:['说干','就干','，','索性','这礼拜','就','开始','。'],ans:'说干就干，索性这礼拜就开始。',audio:'说干就干，索性这礼拜就开始。'},
  {words:['六月下旬','，','天气','说热','就热','了','。'],ans:'六月下旬，天气说热就热了。',audio:'六月下旬，天气说热就热了。'},
  {words:['她的','脾气','不好','，','说生气','就生气','。'],ans:'她的脾气不好，说生气就生气。',audio:'她的脾气不好，说生气就生气。'},
  {words:['五个小时','没碰它','，','我','心','空虚得','要命','。'],ans:'五个小时没碰它，我心空虚得要命。',audio:'五个小时没碰它，我心空虚得要命。'},
  {words:['考试时','，','我','紧张得','要命','。'],ans:'考试时，我紧张得要命。',audio:'考试时，我紧张得要命。'},
  {words:['为了','分散','注意力','，','我','决定','去公园','锻炼','。'],ans:'为了分散注意力，我决定去公园锻炼。',audio:'为了分散注意力，我决定去公园锻炼。'},
  {words:['我','兴高采烈地','跳起了','摇滚','。'],ans:'我兴高采烈地跳起了摇滚。',audio:'我兴高采烈地跳起了摇滚。'},
  {words:['没有','手机的','干扰','，','生活','这么','安宁','。'],ans:'没有手机的干扰，生活这么安宁。',audio:'没有手机的干扰，生活这么安宁。'},
  {words:['我','按','小学生的','作息时间','七点','起床','。'],ans:'我按小学生的作息时间七点起床。',audio:'我按小学生的作息时间七点起床。'},
  {words:['手机','还在','，','我','心里','踏实了','许多','。'],ans:'手机还在，我心里踏实了许多。',audio:'手机还在，我心里踏实了许多。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'为了____自己意志薄弱，我把手机交给了妈妈。',opts:['防止','弥补','安置','冷落'],ans:0,
   exp:'Phòng trước một điều xấu (yếu lòng) → 为了防止……. 弥补 là bù đắp cái đã thiếu; 安置 là thu xếp đồ vật / người; 冷落 là lạnh nhạt với ai.'},
  {wrong:'他的数学基础比较____，需要多做练习。',opts:['薄弱','精致','僵硬','空虚'],ans:0,
   exp:'基础薄弱 = nền tảng yếu. 精致 là tinh xảo (đồ vật); 僵硬 là cứng đờ (cơ thể); 空虚 là trống rỗng (tâm hồn).'},
  {wrong:'这个盒子做得非常____，我舍不得扔掉。',opts:['精致','庄重','踏实','安宁'],ans:0,
   exp:'Đồ vật làm tỉ mỉ, đẹp → 精致. 庄重 là trang trọng (thái độ, trang phục); 踏实 là yên tâm / chắc chắn; 安宁 là yên bình (cuộc sống).'},
  {wrong:'参加毕业典礼要穿得____一点儿。',opts:['庄重','麻木','空虚','薄弱'],ans:0,
   exp:'Ăn mặc nghiêm trang trong dịp trọng thể → 穿得庄重. 麻木 là tê / thờ ơ; 空虚 là trống rỗng; 薄弱 là yếu kém — đều không dùng cho trang phục.'},
  {wrong:'在电脑前坐了一整天，我的脖子都____了。',opts:['僵硬','薄弱','空虚','沸腾'],ans:0,
   exp:'Cổ cứng đờ vì ngồi lâu → 僵硬. 薄弱 dùng cho ý chí, nền tảng; 空虚 cho tâm hồn; 沸腾 là sôi.'},
  {wrong:'跳舞是她的____，她从五岁就开始学了。',opts:['特长','四肢','作息','玩意儿'],ans:0,
   exp:'……是她的特长 = … là sở trường của cô ấy. 四肢 là tay chân; 作息 là giờ giấc; 玩意儿 là đồ chơi, cái thứ.'},
  {wrong:'骑车上学既省钱又锻炼身体，真是____。',opts:['一举两得','狼吞虎咽','兴高采烈','麻木不仁'],ans:0,
   exp:'既……又…… nêu hai cái lợi → kết bằng 一举两得. 狼吞虎咽 là ăn ngấu nghiến; 兴高采烈 là hớn hở; 麻木不仁 là thờ ơ vô cảm.'},
  {wrong:'看到手机还在，我心里____了许多。',opts:['踏实','空虚','麻木','正经'],ans:0,
   exp:'Thấy điện thoại vẫn còn → yên tâm: 心里踏实了许多. 空虚 ngược nghĩa (trống rỗng); 麻木 là thờ ơ; 正经 là nghiêm túc.'},
  {wrong:'跑步能____大量的能量。',opts:['消耗','弥补','干扰','突破'],ans:0,
   exp:'消耗能量 = tiêu hao năng lượng. 弥补 là bù đắp; 干扰 là quấy nhiễu; 突破 là vượt qua — không đi với 能量.'},
  {wrong:'他想用努力学习来____以前浪费的时间。',opts:['弥补','消耗','防止','分散'],ans:0,
   exp:'用 A 来弥补 B = dùng A để bù đắp B. 消耗 là tiêu tốn (ngược nghĩa); 防止 là phòng ngừa; 分散 là phân tán.'},
  {wrong:'早上大雾____，很多航班都推迟了。',opts:['弥漫','沸腾','分散','袭击'],ans:0,
   exp:'Sương mù dày đặc khắp nơi → 大雾弥漫. 沸腾 là sôi; 分散 là phân tán; 袭击 là tấn công (dùng cho bão, rét chứ không cho sương mù).'},
  {wrong:'经过多年研究，科学家们终于取得了重大____。',opts:['突破','震惊','案件','袭击'],ans:0,
   exp:'取得重大突破 = đạt được bước đột phá lớn. 震惊 là kinh ngạc; 案件 là vụ án; 袭击 là cuộc tấn công.'},
  {wrong:'听到他退学的消息，全班同学都感到很____，谁也没想到。',opts:['震惊','安宁','沸腾','踏实'],ans:0,
   exp:'Tin bất ngờ → 感到很震惊 (rất kinh ngạc), khớp với 谁也没想到. 安宁, 踏实 là yên ổn (ngược ý); 沸腾 không đi với 感到.'},
  {wrong:'昨天晚上，台风____了沿海地区。',opts:['袭击','突破','干扰','冷落'],ans:0,
   exp:'台风袭击 + nơi chốn = bão đổ bộ vào…. 突破 là vượt qua; 干扰 là quấy nhiễu; 冷落 là lạnh nhạt.'},
  {wrong:'别人在学习的时候，请不要大声说话____他们。',opts:['干扰','冷落','伺候','绑架'],ans:0,
   exp:'Nói to làm phiền người đang học → 干扰. 冷落 là bỏ mặc; 伺候 là hầu hạ; 绑架 là bắt cóc.'},
  {wrong:'主人只顾着看手机，把客人____在一边。',opts:['冷落','安置','干扰','伺候'],ans:0,
   exp:'Chỉ lo xem điện thoại, bỏ mặc khách → 把客人冷落在一边. 安置 là sắp xếp chỗ ổn thỏa (nghĩa tốt); 干扰, 伺候 không hợp nghĩa.'},
  {wrong:'奶奶病了，妈妈每天在医院____她。',opts:['伺候','着手','安置','绑架'],ans:0,
   exp:'Chăm sóc người bệnh → 伺候. 着手 là bắt tay vào (việc); 安置 là bố trí chỗ; 绑架 là bắt cóc.'},
  {wrong:'真____，我把作业忘在家里了！',opts:['要命','受罪','正经','空虚'],ans:0,
   exp:'Lời than "chết thật!" → 真要命. 受罪 là chịu khổ (không dùng làm lời than kiểu này); 正经, 空虚 là tính từ không hợp nghĩa.'},
  {wrong:'有话好好说，别冲孩子____。',opts:['吼','眨','憋','报警'],ans:0,
   exp:'冲 + người + 吼 = quát vào ai. 眨 là chớp mắt; 憋 là nén; 报警 là báo cảnh sát.'},
  {wrong:'找了好几个地方都没找着，____不找了。',opts:['索性','往常','正经','庄重'],ans:0,
   exp:'Tìm mãi không thấy nên dứt khoát thôi → 索性不找了 (câu 练习2 ③). 往常 là mọi khi; 正经, 庄重 là tính từ.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, dùng từ bài 9 + ôn từ HSK 6 bài 1–6 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Nhìn điện thoại lâu quá, mắt tôi mỏi chết đi được, cổ cũng cứng đờ.',zh:'看手机看得太久了，我的眼睛累得要命，脖子也僵硬了。',py:'Kàn shǒujī kàn de tài jiǔ le, wǒ de yǎnjing lèi de yào mìng, bózi yě jiāngyìng le.',goiY:['……得要命','僵硬','也'],giai:'Adj + 得要命 chỉ mức độ cực điểm, đã có 要命 thì không thêm 很; động từ có tân ngữ + bổ ngữ trạng thái phải lặp động từ: 看手机看得太久了.'},
  {vi:'Em trai muốn học guitar, nói là làm, dứt khoát xóa hết game, ngày hôm sau đã bắt tay vào tìm thầy.',zh:'弟弟想学吉他，说干就干，索性把游戏都删了，第二天就着手找老师。',py:'Dìdi xiǎng xué jítā, shuō gàn jiù gàn, suǒxìng bǎ yóuxì dōu shān le, dì-èr tiān jiù zhuóshǒu zhǎo lǎoshī.',goiY:['说干就干','索性','着手'],giai:'说干就干 = nói là làm (nhanh, dứt khoát); 索性 đứng trước cụm 把 + động từ; "bắt tay vào" = 着手 + V, 着 đọc zhuó.'},
  {vi:'Để phòng mình ý chí yếu, trước kỳ thi tôi đưa điện thoại cho mẹ giữ.',zh:'为了防止自己意志薄弱，考试前我把手机交给妈妈保管了。',py:'Wèile fángzhǐ zìjǐ yìzhì bóruò, kǎoshì qián wǒ bǎ shǒujī jiāo gěi māma bǎoguǎn le.',goiY:['为了防止','意志薄弱','把……交给'],giai:'为了防止 + việc xấu nêu mục đích ở vế trước; "đưa cho ai giữ" = 把……交给……保管 — câu 把 cần phần sau động từ, không nói 我把手机交.'},
  {vi:'Tuy điện thoại thông minh có thể giúp chúng ta thư giãn, nhưng nếu ngày nào cũng chơi đến nửa đêm thì sẽ thành nô lệ của nó.',zh:'虽然智能手机能帮我们放松，但是如果天天玩儿到半夜，就会成为它的奴隶。',py:'Suīrán zhìnéng shǒujī néng bāng wǒmen fàngsōng, dànshì rúguǒ tiāntiān wánr dào bànyè, jiù huì chéngwéi tā de núlì.',goiY:['虽然……但是……','如果……就……','智能','奴隶'],giai:'Câu ba vế: 虽然……但是…… (nhượng bộ) lồng 如果……就…… (giả thiết); "thành nô lệ của" = 成为……的奴隶.'},
  {vi:'Đi bộ đến trường vừa tiết kiệm được tiền, lại vừa rèn luyện được tay chân, đúng là một công đôi việc.',zh:'走路上学既能省钱，又能锻炼四肢，真是一举两得。',py:'Zǒulù shàngxué jì néng shěng qián, yòu néng duànliàn sìzhī, zhēn shì yìjǔ-liǎngdé.',goiY:['既……又……','四肢','一举两得'],giai:'既……又…… nối hai lợi ích song song rồi kết bằng 一举两得; đừng dịch "một công đôi việc" từng chữ thành 一个工作两个事.'},
  {vi:'Khi học đừng để điện thoại bên cạnh, kẻo bị quấy nhiễu, phân tán sự chú ý.',zh:'学习时别把手机放在身边，免得受到干扰，分散注意力。',py:'Xuéxí shí bié bǎ shǒujī fàng zài shēnbiān, miǎnde shòudào gānrǎo, fēnsàn zhùyìlì.',goiY:['免得','干扰','分散注意力'],giai:'免得 = kẻo, để khỏi — đứng đầu vế sau, nêu hậu quả muốn tránh; "bị quấy nhiễu" = 受到干扰, không dịch 被干扰 khi không nêu tác nhân.'},
  {vi:'Mọi khi cứ đến cuối tuần là tôi ở lì trong phòng, nhưng hôm nay tôi lại hớn hở cùng bố mẹ ra công viên nhảy.',zh:'往常一到周末我就待在房间里，今天却兴高采烈地跟爸妈去公园跳舞了。',py:'Wǎngcháng yí dào zhōumò wǒ jiù dāi zài fángjiān li, jīntiān què xìnggāo-cǎiliè de gēn bà mā qù gōngyuán tiàowǔ le.',goiY:['往常','一……就……','却','兴高采烈'],giai:'往常 đối lập với 今天 (mọi khi… hôm nay lại…); 却 đứng sau chủ ngữ / trạng ngữ thời gian, trước động từ, không đứng đầu câu như "nhưng".'},
  {vi:'Để thoát khỏi sự phụ thuộc vào điện thoại, tôi thử mỗi tuần tắt máy một ngày, không ngờ trong lòng lại yên tâm hơn mọi khi nhiều.',zh:'为了摆脱对手机的依赖，我尝试每周关机一天，没想到心里反而比往常踏实多了。',py:'Wèile bǎituō duì shǒujī de yīlài, wǒ chángshì měi zhōu guānjī yì tiān, méi xiǎngdào xīnli fǎn\'ér bǐ wǎngcháng tāshi duō le.',goiY:['摆脱','尝试','比往常……多了','踏实'],giai:'没想到……反而…… = không ngờ lại (kết quả trái dự đoán); so với mọi khi = 比往常 + Adj + 多了. 摆脱, 尝试 ôn bài 4.'},
  {vi:'Hôm đó tuy bị thầy phê bình đến đỏ bừng mặt, nhưng cậu ấy chẳng những không nản lòng mà ngược lại còn lập tức bắt tay vào bù đắp những thiếu sót trước kia.',zh:'那天他虽然被老师批评得满脸通红，但是不但没有灰心，反而马上着手弥补以前的不足。',py:'Nà tiān tā suīrán bèi lǎoshī pīpíng de mǎnliǎn tōnghóng, dànshì búdàn méiyǒu huīxīn, fǎn\'ér mǎshàng zhuóshǒu míbǔ yǐqián de bùzú.',goiY:['满脸通红','不但没有……反而……','着手','弥补'],giai:'不但没有 A，反而 B = chẳng những không A mà ngược lại B (trái kỳ vọng); 通红 là tính từ trạng thái, đứng sau 得 không thêm 很.'},
  {vi:'Nếu ngày nào cậu cũng ăn ngấu nghiến xong lại cắm mặt vào điện thoại, thì không những dạ dày sẽ có vấn đề, mà ngay cả với người nhà cậu cũng sẽ trở nên thờ ơ.',zh:'如果你天天狼吞虎咽地吃完饭又埋头看手机，那么不但胃会出问题，连对家人都会变得麻木。',py:'Rúguǒ nǐ tiāntiān lángtūn-hǔyàn de chīwán fàn yòu máitóu kàn shǒujī, nàme búdàn wèi huì chū wèntí, lián duì jiārén dōu huì biàn de mámù.',goiY:['如果……那么……','狼吞虎咽','不但……连……都……','麻木'],giai:'Câu ba tầng: 如果……那么 (giả thiết) + 不但……连……都 (tăng tiến đến mức cực đoan); "thờ ơ với ai" = 对……麻木, 对 đứng sau 连.'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Sếp phát hiện mọi người đều đang nghịch điện thoại, tức điên lên, quát lớn một tiếng: "Từ nay họp hành ai cũng không được mang điện thoại!"',zh:'老板发现大家都在玩儿手机，气得要命，大吼一声：“以后开会谁都不许带手机！”',py:'Lǎobǎn fāxiàn dàjiā dōu zài wánr shǒujī, qì de yào mìng, dà hǒu yì shēng: “Yǐhòu kāihuì shéi dōu bù xǔ dài shǒujī!”',goiY:['气得要命 = tức điên lên','大吼一声 = quát lớn một tiếng','谁都不许 = không ai được'],giai:'气得要命 dịch "tức điên / tức chết đi được", không dịch "muốn chết"; 谁都 + phủ định = không ai….'},
  {vi:'Bị sếp gọi tên, mặt tôi đỏ bừng, đành nói mình đang xem tin một đôi thanh niên không báo cảnh sát mà chụp ảnh trước.',zh:'被老板点了名，我的脸憋得通红，只好说自己在看一对年轻人没报警先拍照的新闻。',py:'Bèi lǎobǎn diǎnle míng, wǒ de liǎn biē de tōnghóng, zhǐhǎo shuō zìjǐ zài kàn yí duì niánqīngrén méi bào jǐng xiān pāizhào de xīnwén.',goiY:['点了名 = bị gọi tên','憋得通红 = đỏ bừng (vì nén)','报警 = báo cảnh sát'],giai:'被老板点了名 là câu bị động: "bị sếp gọi tên"; 通红 là tính từ trạng thái nên dịch "đỏ bừng", không cần thêm "rất". Định ngữ dài 一对年轻人……的新闻 dịch ra sau: "tin một đôi thanh niên…".'},
  {vi:'Từ khi có điện thoại thông minh, tôi thờ ơ với mọi thứ, trong lòng chỉ có điện thoại, quả thực đã thành nô lệ của nó.',zh:'有了智能手机以后，我对什么都麻木了，心里只有手机，简直成了它的奴隶。',py:'Yǒule zhìnéng shǒujī yǐhòu, wǒ duì shénme dōu mámù le, xīnli zhǐ yǒu shǒujī, jiǎnzhí chéngle tā de núlì.',goiY:['麻木 = thờ ơ, chai sạn','简直 = quả thực, gần như','奴隶 = nô lệ'],giai:'对什么都麻木了: 什么 + 都 = mọi thứ; 麻木 nghĩa bóng dịch "thờ ơ", không dịch "tê".'},
  {vi:'Tôi ăn cơm lúc nào cũng ngấu nghiến, ăn xong lại cắm cúi xem WeChat, trước khi ngủ còn phải hầu hạ điện thoại thật chu đáo.',zh:'我吃饭总是狼吞虎咽的，吃完又埋头看微信，睡觉前还要把手机伺候得好好的。',py:'Wǒ chīfàn zǒngshì lángtūn-hǔyàn de, chīwán yòu máitóu kàn Wēixìn, shuìjiào qián hái yào bǎ shǒujī cìhou de hǎohāo de.',goiY:['狼吞虎咽 = ăn ngấu nghiến','埋头 = cắm cúi','伺候 = hầu hạ'],giai:'Ba vế liệt kê theo thời gian (吃饭 → 吃完 → 睡觉前) nối bằng 又, 还; 伺候得好好的 dịch "hầu hạ chu đáo" để giữ giọng hài hước.'},
  {vi:'Rời điện thoại chẳng lẽ sẽ chết sao? Tôi quyết định nói là làm, dứt khoát ngay tuần này bắt tay thử mỗi tuần tắt máy một ngày.',zh:'离开手机难道会死吗？我决定说干就干，索性这个星期就着手尝试一周关机一天。',py:'Líkāi shǒujī nándào huì sǐ ma? Wǒ juédìng shuō gàn jiù gàn, suǒxìng zhège xīngqī jiù zhuóshǒu chángshì yì zhōu guānjī yì tiān.',goiY:['难道……吗 = chẳng lẽ… sao','说干就干 = nói là làm','索性 = dứt khoát'],giai:'难道……吗 là câu hỏi tu từ (ý: không chết được đâu); 说干就干 dịch gọn "nói là làm".'},
  {vi:'Để phòng bản thân ý chí yếu đuối, tôi gói điện thoại từng lớp, trịnh trọng đặt vào một chiếc hộp tinh xảo.',zh:'为了防止自己意志薄弱，我把手机层层包好，庄重地放进一个精致的盒子里。',py:'Wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ bǎ shǒujī céngcéng bāohǎo, zhuāngzhòng de fàngjìn yí ge jīngzhì de hézi li.',goiY:['防止 = đề phòng','意志薄弱 = ý chí yếu đuối','庄重地 = trịnh trọng','精致 = tinh xảo'],giai:'为了防止…… là vế mục đích; 层层 = từng lớp (lượng từ lặp). 庄重地放进 giữ nét hài hước: cất điện thoại như làm lễ.'},
  {vi:'Nhảy là sở trường của tôi, nhảy rock ở công viên vừa giải trí thân tâm, vừa vận động được tay chân cứng đờ, đúng là một công đôi việc.',zh:'跳舞是我的特长，在公园里跳摇滚既能娱乐身心，又能锻炼僵硬的四肢，真是一举两得。',py:'Tiàowǔ shì wǒ de tècháng, zài gōngyuán li tiào yáogǔn jì néng yúlè shēnxīn, yòu néng duànliàn jiāngyìng de sìzhī, zhēn shì yìjǔ-liǎngdé.',goiY:['特长 = sở trường','既……又…… = vừa… vừa…','一举两得 = một công đôi việc'],giai:'Chủ ngữ của 既……又…… là cả cụm 在公园里跳摇滚; 娱乐身心 dịch "giải trí thân tâm / thư giãn tinh thần".'},
  {vi:'Điện thoại bị bỏ rơi nửa ngày, tôi vội vàng chạy về nhà, thấy nó vẫn còn trong tủ quần áo, lòng mới yên tâm hơn nhiều.',zh:'手机被冷落了半天，我急忙赶回家，看到它还在衣柜里，心里才踏实了许多。',py:'Shǒujī bèi lěngluòle bàntiān, wǒ jímáng gǎnhuí jiā, kàndào tā hái zài yīguì li, xīnli cái tāshile xǔduō.',goiY:['被冷落 = bị bỏ rơi','急忙 = vội vàng','踏实 = yên tâm'],giai:'才 ở vế cuối = "mới" (đến lúc đó mới yên tâm); 踏实了许多 = yên tâm hơn nhiều, không dịch "chắc chắn".'},
  {vi:'Năm tiếng không đụng đến điện thoại, lòng tôi trống rỗng kinh khủng, thế là quyết định dùng việc nấu cháo — việc tốn thời gian nhất — để bù đắp.',zh:'五个小时没碰手机，我心里空虚得要命，于是决定用熬粥这件最消耗时间的事来弥补。',py:'Wǔ ge xiǎoshí méi pèng shǒujī, wǒ xīnli kōngxū de yào mìng, yúshì juédìng yòng áo zhōu zhè jiàn zuì xiāohào shíjiān de shì lái míbǔ.',goiY:['空虚得要命 = trống rỗng kinh khủng','于是 = thế là','用……来弥补 = dùng… để bù đắp'],giai:'于是 nối hành động là hệ quả của vế trước; cụm đồng vị 熬粥这件最消耗时间的事 dịch tách "việc nấu cháo — việc tốn thời gian nhất".'},
  {vi:'Nếu là mọi khi, chắc chắn tôi sẽ canh cánh không biết vụ án của thám tử đã có đột phá chưa; nhưng hôm nay không có điện thoại quấy nhiễu, cuộc sống lại yên bình đến thế.',zh:'要在往常，我一定惦记着侦探的案件有没有突破；可是今天没有手机的干扰，生活竟然这么安宁。',py:'Yào zài wǎngcháng, wǒ yídìng diànjìzhe zhēntàn de ànjiàn yǒu méiyǒu tūpò; kěshì jīntiān méiyǒu shǒujī de gānrǎo, shēnghuó jìngrán zhème ānníng.',goiY:['要在往常 = nếu là mọi khi','惦记 = canh cánh, nhớ mong','竟然 = không ngờ lại','安宁 = yên bình'],giai:'要在往常 nêu giả định trái với hiện tại, đối lập với 可是今天; 安宁 dịch "yên bình", KHÔNG dịch "an ninh". 惦记 ôn bài 3.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 104): bài văn "如何离开手机" ≥ 300 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk',
  soChu:300,
  de:'有人说“手机、电脑等高科技产品已经控制了人们的生活”，你是否也像这篇课文所描述的那样成了它们的奴隶？要想改变这种状况，你有什么好的建议吗？请以“如何离开手机”为题，结合自己的实际写一篇不少于300字的文章。',
  prompt:'Có người nói "điện thoại, máy tính và các sản phẩm công nghệ cao đã khống chế cuộc sống của con người". Em có giống như bài khoá miêu tả, đã trở thành nô lệ của chúng không? Muốn thay đổi tình trạng này, em có kiến nghị gì hay? Hãy lấy "Làm thế nào để rời xa điện thoại" làm đề bài, kết hợp với thực tế của bản thân, viết một bài văn không ít hơn 300 chữ.',
  dan:[
    {hoi:'你是否也像课文所描述的那样成了手机、电脑的奴隶？',goiY:'①我每天用手机做什么：看新闻、发微信、拍照、玩儿游戏…… ②离开手机时的感受：心里空虚得要命……（参考练习5第3行）'},
    {hoi:'手机控制了生活，带来了哪些问题？',goiY:'①身体：作息不规律、四肢僵硬…… ②学习：分散注意力…… ③家人朋友：对什么都麻木了，冷落了……'},
    {hoi:'要想改变这种状况，你有什么好的建议？',goiY:'①说干就干，着手安置手机：为了防止意志薄弱，……（参考练习5第4行） ②培养别的爱好：既……又……，一举两得（参考练习5第5行） ③多和家人面对面聊天'},
    {hoi:'离开手机以后，生活有什么变化？（结尾）',goiY:'①没有手机的干扰，生活……，心里…… ②总结：不是……，而是……'}
  ],
  tuNen:['奴隶','麻木','说干就干','索性','着手','防止','意志薄弱','分散注意力','一举两得','……得要命'],
  cauTruc:[
    {ten:'以前，我也是……的奴隶', nhan:'奴隶', vd:'以前，我也是手机的奴隶，一天到晚离不开它。', khi:'MỞ BÀI: thừa nhận thực tế của bản thân (đề yêu cầu 结合自己的实际).'},
    {ten:'要想改变……，必须……', nhan:'要想', vd:'要想改变这种状况，必须自己着手。', khi:'Câu CHUYỂN sang phần kiến nghị.'},
    {ten:'第一……；第二……；第三……', nhan:'第一', vd:'第一，说干就干；第二，培养别的爱好；第三，多和家人聊天。', khi:'Liệt kê các kiến nghị rõ ràng, mạch lạc.'},
    {ten:'为了防止……，可以……', nhan:'防止', vd:'为了防止意志薄弱，可以把手机交给父母保管。', khi:'Nêu biện pháp cụ thể kèm mục đích.'},
    {ten:'既……又……，一举两得', nhan:'一举两得', vd:'去公园跳舞既能娱乐身心，又能锻炼身体，一举两得。', khi:'Nêu lợi ích kép của một hoạt động thay cho điện thoại.'},
    {ten:'……，别提多……了', nhan:'别提多', vd:'一家人边吃边聊，别提多开心了。', khi:'Miêu tả niềm vui khi rời điện thoại (ôn ngữ pháp bài 1).'},
    {ten:'不是……，而是……', nhan:'不是……而是', vd:'不是我们离不开手机，而是我们还没有尝试离开它。', khi:'KẾT BÀI: câu chốt ý, gây ấn tượng.'}
  ],
  checklist:[
    'Bài có đúng đề 如何离开手机 và có liên hệ thực tế của bản thân (mình đã từng / đang là "nô lệ" của điện thoại thế nào) chưa?',
    'Có nêu được ít nhất 2 hậu quả của việc lệ thuộc điện thoại (sức khỏe, học tập, quan hệ gia đình…) chưa?',
    'Có đưa ra ít nhất 3 kiến nghị cụ thể, sắp xếp bằng 第一……第二……第三…… chưa?',
    'Đã dùng được ít nhất 5 từ / cấu trúc của bài (奴隶, 麻木, 说干就干, 索性, 防止, 一举两得, ……得要命…) chưa?',
    'Bài có ít nhất 300 chữ Hán (không đếm dấu câu), có mở bài – thân bài – kết bài rõ ràng chưa?'
  ],
  model:{
    zh:'以前，我也是手机的奴隶。早上一睁眼就看新闻，上课时偷偷发微信，吃饭前先拍照，晚上躺在床上还要玩儿到半夜。时间长了，我对什么都麻木了，作息很不规律，四肢也变得僵硬，还常常冷落了家人。有一次妈妈跟我说话，我连头都没抬。只要离开手机半天，我心里就空虚得要命。后来我意识到，要想改变这种状况，必须自己着手。我的建议有三个：第一，说干就干，不要总等“明天”。为了防止意志薄弱，可以把手机交给父母保管，或者索性关机，放进抽屉里。第二，培养别的爱好，分散注意力。比如去公园跑步、跳舞，既能娱乐身心，又能锻炼身体，一举两得。第三，和家人朋友面对面地聊天，而不是在手机上聊。吃饭的时候大家都把手机放在一边，一家人边吃边聊，别提多开心了。现在，我每周关机一天。没有手机的干扰，生活安宁了，心里也踏实了许多。我发现，不是我们离不开手机，而是我们还没有尝试离开它。',
    py:'Yǐqián, wǒ yě shì shǒujī de núlì. Zǎoshang yì zhēng yǎn jiù kàn xīnwén, shàngkè shí tōutōu fā Wēixìn, chīfàn qián xiān pāizhào, wǎnshang tǎng zài chuáng shang hái yào wánr dào bànyè. Shíjiān cháng le, wǒ duì shénme dōu mámù le, zuòxī hěn bù guīlǜ, sìzhī yě biàn de jiāngyìng, hái chángcháng lěngluòle jiārén. Yǒu yí cì māma gēn wǒ shuōhuà, wǒ lián tóu dōu méi tái. Zhǐyào líkāi shǒujī bàntiān, wǒ xīnli jiù kōngxū de yào mìng. Hòulái wǒ yìshí dào, yào xiǎng gǎibiàn zhè zhǒng zhuàngkuàng, bìxū zìjǐ zhuóshǒu. Wǒ de jiànyì yǒu sān ge: dì-yī, shuō gàn jiù gàn, bú yào zǒng děng “míngtiān”. Wèile fángzhǐ yìzhì bóruò, kěyǐ bǎ shǒujī jiāo gěi fùmǔ bǎoguǎn, huòzhě suǒxìng guānjī, fàngjìn chōuti li. Dì-èr, péiyǎng bié de àihào, fēnsàn zhùyìlì. Bǐrú qù gōngyuán pǎobù, tiàowǔ, jì néng yúlè shēnxīn, yòu néng duànliàn shēntǐ, yìjǔ-liǎngdé. Dì-sān, hé jiārén péngyou miànduìmiàn de liáotiān, ér bú shì zài shǒujī shang liáo. Chīfàn de shíhou dàjiā dōu bǎ shǒujī fàng zài yìbiān, yì jiā rén biān chī biān liáo, biétí duō kāixīn le. Xiànzài, wǒ měi zhōu guānjī yì tiān. Méiyǒu shǒujī de gānrǎo, shēnghuó ānníng le, xīnli yě tāshile xǔduō. Wǒ fāxiàn, bú shì wǒmen lí bu kāi shǒujī, ér shì wǒmen hái méiyǒu chángshì líkāi tā.',
    vn:'Trước đây, tôi cũng là nô lệ của điện thoại. Sáng vừa mở mắt đã xem tin tức, trong giờ học lén gửi WeChat, trước khi ăn thì chụp ảnh, tối nằm trên giường còn chơi đến nửa đêm. Lâu dần, tôi thờ ơ với mọi thứ, giờ giấc thất thường, tay chân cũng trở nên cứng đờ, lại thường bỏ mặc người nhà. Có lần mẹ nói chuyện với tôi, tôi đến đầu cũng không ngẩng lên. Chỉ cần rời điện thoại nửa ngày là lòng tôi đã trống rỗng kinh khủng. Về sau tôi nhận ra, muốn thay đổi tình trạng này thì phải tự mình bắt tay vào làm. Tôi có ba kiến nghị: Thứ nhất, nói là làm, đừng cứ chờ "ngày mai". Để phòng ý chí yếu đuối, có thể đưa điện thoại cho bố mẹ giữ, hoặc dứt khoát tắt máy, cất vào ngăn kéo. Thứ hai, nuôi dưỡng sở thích khác để phân tán sự chú ý. Ví dụ ra công viên chạy bộ, nhảy, vừa giải trí thân tâm, vừa rèn luyện cơ thể, một công đôi việc. Thứ ba, trò chuyện trực tiếp với người nhà, bạn bè, chứ không phải nói chuyện trên điện thoại. Lúc ăn cơm mọi người đều để điện thoại sang một bên, cả nhà vừa ăn vừa trò chuyện, vui không kể xiết. Giờ đây, mỗi tuần tôi tắt máy một ngày. Không có điện thoại quấy nhiễu, cuộc sống yên bình hơn, lòng cũng yên tâm hơn nhiều. Tôi nhận ra rằng, không phải chúng ta không rời được điện thoại, mà là chúng ta chưa thử rời xa nó mà thôi.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b>. Mỗi câu hỏi là một dòng của bảng — bấm loa nghe câu hỏi, nhìn gợi ý bên phải, <b>tự ghi âm câu trả lời của mình trước</b> rồi mới mở câu mẫu. Cố dùng từ mới: 奴隶 · 麻木 · 安置 · 防止 · 一举两得 · 踏实 · 往常.',
  questions:[
    {q_zh:'公司老板为什么开会时发火？',
     q_vn:'Vì sao sếp công ty nổi giận trong cuộc họp?',
     hint:'（Sách để trống — tự trả lời: 大家都在…… · 假装正经 · 那玩意儿就那么好玩儿？）',
     sample:'因为开会的时候大家都在偷偷玩儿手机，还假装正经。老板很生气，说：“那玩意儿就那么好玩儿？比我说话还有意思？”',
     sample_vn:'Vì lúc họp mọi người đều lén nghịch điện thoại mà còn giả vờ nghiêm túc. Sếp rất tức, nói: "Cái thứ đó hay ho đến thế sao? Còn thú vị hơn tôi nói à?"',
     note:'Ô gợi ý trong sách để trống — trả lời bằng 因为…… và dẫn lại lời sếp; nhớ dùng 假装正经, 那玩意儿.'},
    {q_zh:'开会时，“我”在手机上看什么？',
     q_vn:'Trong cuộc họp, "tôi" xem gì trên điện thoại?',
     hint:'一对年轻人……',
     sample:'“我”在看一条新闻：一对年轻人边开车边拿手机拍照，把桥撞坏了。他们没报警，而是先下车拍照发微信。',
     sample_vn:'"Tôi" đang xem một tin: một đôi thanh niên vừa lái xe vừa cầm điện thoại chụp ảnh, đâm hỏng cây cầu. Họ không báo cảnh sát mà xuống xe chụp ảnh đăng WeChat trước.',
     note:'Dùng 边……边…… và câu 把 (把桥撞坏了); 没……，而是…… làm nổi bật sự vô lý của đôi thanh niên.'},
    {q_zh:'为什么说“我”成了手机的奴隶？',
     q_vn:'Vì sao nói "tôi" đã thành nô lệ của điện thoại?',
     hint:'①看新闻 ②发微信 ③拍照 ④充电 ……',
     sample:'因为“我”心里只有手机，对什么都麻木了：三分钟看一次新闻，十分钟发一次微信，吃饭前先拍照，狼吞虎咽吃完又埋头看微信，睡觉之前先给手机充电，把手机伺候得好好的。',
     sample_vn:'Vì trong lòng "tôi" chỉ có điện thoại, thờ ơ với mọi thứ: ba phút xem tin một lần, mười phút gửi WeChat một lần, trước khi ăn thì chụp ảnh, ăn ngấu nghiến xong lại cắm cúi xem WeChat, trước khi ngủ thì sạc pin cho điện thoại, hầu hạ điện thoại chu đáo.',
     note:'Liệt kê đủ 4 gợi ý theo mẫu "thời lượng + V + 一次 + O" (三分钟看一次新闻); kết bằng 伺候得好好的.'},
    {q_zh:'为了关机一天，“我”怎样安置自己的手机？',
     q_vn:'Để tắt máy một ngày, "tôi" đã thu xếp điện thoại của mình thế nào?',
     hint:'包好、放在、收到',
     sample:'为了防止自己意志薄弱，“我”找来一个精致的盒子，把手机层层包好，庄重地放在盒子里，然后收到衣柜最里面。',
     sample_vn:'Để phòng bản thân ý chí yếu đuối, "tôi" tìm một chiếc hộp tinh xảo, gói điện thoại từng lớp, trịnh trọng đặt vào hộp rồi cất vào tận trong cùng tủ quần áo.',
     note:'Ba động từ gợi ý đi theo thứ tự hành động: 包好 → 放在 → 收到; mở đầu bằng 为了防止…….'},
    {q_zh:'“我”如何出门锻炼的？',
     q_vn:'"Tôi" ra ngoài vận động như thế nào?',
     hint:'公园、跳舞、既……又……',
     sample:'为了分散注意力，“我”去公园锻炼。跳舞是“我”的特长，“我”兴高采烈地跳起了摇滚，既能娱乐身心，又能锻炼身体，一举两得。',
     sample_vn:'Để đánh lạc hướng sự chú ý, "tôi" ra công viên vận động. Nhảy là sở trường của "tôi", "tôi" hớn hở nhảy điệu rock, vừa giải trí thân tâm, vừa rèn luyện cơ thể, một công đôi việc.',
     note:'既……又…… nêu hai lợi ích rồi chốt bằng 一举两得.'},
    {q_zh:'回家后，“我”又做了什么？',
     q_vn:'Về nhà, "tôi" lại làm gì?',
     hint:'打开、熬粥、往常……',
     sample:'回家后，“我”先打开衣柜，看到手机还在，心里踏实了许多。然后“我”熬粥来弥补心中的空虚。要在往常，“我”一定早就待不住了，可是今天没有手机的干扰，生活这么安宁。',
     sample_vn:'Về nhà, "tôi" mở tủ quần áo trước, thấy điện thoại vẫn còn, lòng yên tâm hơn nhiều. Sau đó "tôi" nấu cháo để bù đắp sự trống rỗng trong lòng. Nếu là mọi khi, chắc chắn "tôi" đã ngồi không yên từ lâu, nhưng hôm nay không có điện thoại quấy nhiễu, cuộc sống yên bình đến thế.',
     note:'Khung 先……然后…… kể trình tự; 要在往常……，可是今天…… đối chiếu mọi khi và hôm nay.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (hội thoại ngắn + đoạn nói)
// Sách HSK 6 không có sách bài tập nghe: tự soạn theo chủ đề bài 9.
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 9',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'我跟你说话呢，你干吗老看手机？'},
            {sp:'男',zh:'不好意思，我在看一个案件的新闻，听说今天有了突破。'}],
     q:'男的在看什么？',qvn:'Người đàn ông đang xem gì?',
     opts:['一部电影','一个案件的新闻','朋友发的微信','天气预报'],ans:1,
     why:'Anh ấy nói 我在看一个案件的新闻 — tin về một vụ án vừa có đột phá (有了突破).',
     words:['案件','突破']},

    {n:2,
     lines:[{sp:'男',zh:'今天路上怎么这么堵？'},
            {sp:'女',zh:'不知道，往常这个时候很少堵车，可能前面出事故了。'}],
     q:'关于这条路，可以知道什么？',qvn:'Về con đường này, có thể biết điều gì?',
     opts:['往常经常堵车','往常这个时候车不多','前面正在修路','女的每天走这条路'],ans:1,
     why:'往常这个时候很少堵车 = mọi khi giờ này ít tắc → thường ngày giờ này xe không nhiều. 可能出事故了 chỉ là phỏng đoán, không nói sửa đường.',
     words:['往常']},

    {n:3,
     lines:[{sp:'女',zh:'听说你周末把手机关了一整天？感觉怎么样？'},
            {sp:'男',zh:'刚开始心里空虚得要命，后来去公园跑了跑步，反而觉得挺踏实的。'}],
     q:'男的关机以后感觉怎么样？',qvn:'Người đàn ông cảm thấy thế nào sau khi tắt máy?',
     opts:['一直很难受','开始很空虚，后来踏实了','一点儿感觉都没有','非常生气'],ans:1,
     why:'刚开始……空虚得要命，后来……反而觉得挺踏实的 — cảm giác thay đổi theo hai giai đoạn. Nghe được 后来……反而 là chọn đúng.',
     words:['空虚','要命','踏实']},

    {n:4,
     lines:[{sp:'男',zh:'你跳舞跳得真好，学了多久了？'},
            {sp:'女',zh:'跳舞是我的特长，从小就学。既能锻炼身体，又能交朋友，一举两得。'}],
     q:'女的觉得跳舞有什么好处？',qvn:'Người phụ nữ thấy nhảy có lợi ích gì?',
     opts:['能挣钱','能锻炼身体，还能交朋友','能减肥','能参加比赛'],ans:1,
     why:'既能锻炼身体，又能交朋友 = hai cái lợi → 一举两得. Các phương án khác không được nhắc tới.',
     words:['特长','一举两得']},

    {n:5,
     lines:[{sp:'女',zh:'你怎么吃得这么快？慢点儿！'},
            {sp:'男',zh:'上课要迟到了，我只能狼吞虎咽了。'}],
     q:'男的为什么吃得很快？',qvn:'Vì sao người đàn ông ăn rất nhanh?',
     opts:['饭不好吃','他太饿了','上课快迟到了','他要去看比赛'],ans:2,
     why:'上课要迟到了 → sắp muộn học nên đành ăn ngấu nghiến (狼吞虎咽). "Đói quá" là bẫy vì 狼吞虎咽 thường gắn với đói.',
     words:['狼吞虎咽']},

    {n:6,
     lines:[{sp:'男',zh:'我一直想学游泳，可是总找不到时间。'},
            {sp:'女',zh:'那还等什么？说干就干，明天就着手吧，我带你去游泳馆。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['游泳很危险','明天就开始学','等有时间再学','她不会游泳'],ans:1,
     why:'说干就干 = nói là làm; 明天就着手吧 = ngày mai bắt tay vào luôn → khuyên bắt đầu ngay ngày mai.',
     words:['着手']},

    {n:7,
     lines:[{sp:'女',zh:'楼上邻居天天装修，吵得我不得安宁。'},
            {sp:'男',zh:'要不你跟他们好好说说，让他们晚上别干了。'}],
     q:'女的遇到了什么问题？',qvn:'Người phụ nữ gặp phải vấn đề gì?',
     opts:['邻居总是吵架','楼上装修太吵了','房子太小了','她的工作太多'],ans:1,
     why:'楼上邻居天天装修，吵得我不得安宁 → tiếng sửa nhà quá ồn. 吵 ở đây là "ồn", không phải "cãi nhau" (吵架) — bẫy của phương án A.',
     words:['安宁']},

    {n:8,
     lines:[{sp:'女',zh:'现在很多人离不开智能手机，吃饭时拍照，走路时看微信，睡觉前还要看一会儿新闻。时间长了，有的人对身边的人和事都变得麻木了。专家建议，每周可以尝试关机一天，把手机安置在看不见的地方，去运动、看书或者和家人聊天。这样既能减少手机的干扰，又能让生活变得更加安宁。'}],
     q:'专家建议人们怎么做？',qvn:'Chuyên gia khuyên mọi người làm gì?',
     opts:['换一部新手机','每周关机一天','只在睡觉前看手机','多在手机上看书'],ans:1,
     why:'Câu then chốt: 专家建议，每周可以尝试关机一天. Các phương án khác chỉ là chi tiết nhiễu (看书 là làm sau khi tắt máy, không phải đọc trên điện thoại).',
     words:['智能','麻木','安置','干扰','安宁']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn thân hỏi vì sao dạo này em hay tắt điện thoại.',
     a:{sp:'Bạn',zh:'你最近怎么总是关机？找你都找不到。',vn:'Dạo này sao cậu cứ tắt máy thế? Tìm cậu mãi không được.'},
     need:['Dùng 为了防止……','Giải thích lý do tắt máy'],
     sample:'不好意思，为了防止自己意志薄弱，我学习的时候就把手机关了。',
     samplePy:'Bù hǎoyìsi, wèile fángzhǐ zìjǐ yìzhì bóruò, wǒ xuéxí de shíhou jiù bǎ shǒujī guān le.',
     sampleVn:'Xin lỗi nhé, để phòng mình yếu lòng, lúc học tớ tắt điện thoại luôn.',
     tip:'Mở đầu bằng 不好意思 cho lịch sự, rồi nêu mục đích bằng 为了防止…….'},

    {scene:'Mẹ thấy em ngồi xem điện thoại cả buổi sáng.',
     a:{sp:'Mẹ',zh:'你都坐了一上午了，不累吗？',vn:'Con ngồi cả buổi sáng rồi, không mỏi à?'},
     need:['Dùng ……得要命','Nói mình sẽ đi vận động'],
     sample:'累得要命，脖子都僵硬了，我这就去公园活动活动四肢。',
     samplePy:'Lèi de yào mìng, bózi dōu jiāngyìng le, wǒ zhè jiù qù gōngyuán huódòng huódòng sìzhī.',
     sampleVn:'Mỏi chết đi được, cổ cứng đờ cả rồi, con đi công viên vận động tay chân một chút ngay đây.',
     tip:'Adj + 得要命 là khẩu ngữ, rất hợp khi nói với người nhà; 这就…… = ngay bây giờ.'},

    {scene:'Bạn rủ em đi leo núi ngay chiều nay.',
     a:{sp:'Bạn',zh:'今天天气这么好，我们下午去爬山吧！',vn:'Hôm nay trời đẹp thế, chiều nay mình đi leo núi đi!'},
     need:['Dùng 说A就A','Đồng ý ngay'],
     sample:'好啊，说走就走，我现在就去准备！',
     samplePy:'Hǎo a, shuō zǒu jiù zǒu, wǒ xiànzài jiù qù zhǔnbèi!',
     sampleVn:'Được đấy, nói đi là đi, tớ đi chuẩn bị ngay đây!',
     tip:'说走就走 / 说干就干: hai chữ A phải giống hệt nhau, biểu thị làm ngay lập tức.'},

    {scene:'Bạn hỏi em cách để vừa giảm cân vừa học được kỹ năng mới.',
     a:{sp:'Bạn',zh:'我想减肥，又想学点儿新东西，有什么好办法吗？',vn:'Tớ muốn giảm cân mà cũng muốn học cái gì mới, có cách nào hay không?'},
     need:['Dùng 既……又……','Dùng 一举两得'],
     sample:'你可以去学跳舞，既能减肥，又能学会一门新本事，一举两得。',
     samplePy:'Nǐ kěyǐ qù xué tiàowǔ, jì néng jiǎnféi, yòu néng xuéhuì yì mén xīn běnshi, yìjǔ-liǎngdé.',
     sampleVn:'Cậu có thể đi học nhảy, vừa giảm cân được, vừa học được một kỹ năng mới, một công đôi việc.',
     tip:'Nêu hai lợi ích bằng 既……又…… rồi mới chốt 一举两得 — đúng như câu trong bài khoá.'},

    {scene:'Thầy giáo hỏi cảm nhận của em sau một ngày không dùng điện thoại.',
     a:{sp:'Thầy',zh:'不用手机的一天，你有什么感受？',vn:'Một ngày không dùng điện thoại, em có cảm nhận gì?'},
     need:['Dùng 要在往常','Dùng 安宁 hoặc 踏实'],
     sample:'要在往常，我一定早就待不住了。可是今天没有手机的干扰，我觉得生活特别安宁，心里也很踏实。',
     samplePy:'Yào zài wǎngcháng, wǒ yídìng zǎojiù dāi bu zhù le. Kěshì jīntiān méiyǒu shǒujī de gānrǎo, wǒ juéde shēnghuó tèbié ānníng, xīnli yě hěn tāshi.',
     sampleVn:'Nếu là mọi khi, chắc chắn em đã ngồi không yên từ lâu rồi. Nhưng hôm nay không có điện thoại quấy nhiễu, em thấy cuộc sống rất yên bình, trong lòng cũng rất thanh thản.',
     tip:'要在往常 + 可是今天 tạo thế đối lập mọi khi – hôm nay, giống đoạn cuối bài khoá.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Lên HSK 6, chọn đúng văn phong (khẩu ngữ hay văn viết, thân mật hay trang trọng) quan trọng không kém ngữ pháp.',
  items: [
    {scene:'Em viết bài văn "如何离开手机" nộp cho cô giáo.',
     a:'手机那玩意儿太好玩儿了，我老放不下。',b:'智能手机给我们带来了很多乐趣，因此很多人离不开它。',better:'b',
     why:'那玩意儿, 老 là khẩu ngữ, 那玩意儿 còn mang ý coi nhẹ; bài văn cần văn viết: 智能手机, 因此.'},

    {scene:'Em than với bạn thân sau buổi tập thể dục.',
     a:'累死了，累得要命！',b:'我感到极度疲劳。',better:'a',
     why:'累得要命 là khẩu ngữ tự nhiên khi than với bạn; 极度疲劳 là văn viết, nghe như báo cáo y tế.'},

    {scene:'Phát thanh viên đưa tin trên truyền hình.',
     a:'据报道，昨天该市发生了一起案件，警方已介入调查。',b:'听说昨天那儿出了个案子，警察正在查呢。',better:'a',
     why:'Bản tin dùng văn viết trang trọng: 据报道, 该市, 一起案件, 警方; câu b là lời kể khẩu ngữ (听说, 案子, 呢).'},

    {scene:'Em nhờ bố cất điện thoại giúp để ôn thi.',
     a:'爸，您帮我把手机收起来吧，我怕自己管不住。',b:'请您代为保管本人手机，以防止本人意志薄弱。',better:'a',
     why:'Nói với bố dùng khẩu ngữ thân mật (爸, 管不住); 代为保管, 本人 là văn bản hành chính, nói với người nhà nghe rất buồn cười.'},

    {scene:'Em phát biểu trong buổi chào cờ về chủ đề sống lành mạnh.',
     a:'同学们，合理安排作息时间，才能拥有健康的身体。',b:'大家别老熬夜玩儿手机了啊，身体要紧！',better:'a',
     why:'Phát biểu trước toàn trường cần trang trọng: 合理安排作息时间, 拥有; câu b hợp khi nhắc bạn bè.'},

    {scene:'Em nhắn tin cho bạn về quyết định bỏ game.',
     a:'这游戏太浪费时间了，我索性删了。',b:'鉴于该游戏耗时过多，本人决定予以删除。',better:'a',
     why:'Tin nhắn cho bạn dùng khẩu ngữ: 这游戏, 索性删了; 鉴于, 予以 là công văn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách (6 dòng)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> — kể lại bài khoá bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi, gợi ý và các từ khoá bên dưới, bấm ghi âm rồi kể khoảng 1–2 phút.',
  outline: [
    {step:'公司老板为什么开会时发火？', cue:'（Sách để trống — tự kể: 大家都在玩儿手机 · 假装正经 · 那玩意儿就那么好玩儿？）', words:['正经','玩意儿']},
    {step:'开会时，“我”在手机上看什么？', cue:'一对年轻人……', words:['憋','报警','绑架','受罪','吼']},
    {step:'为什么说“我”成了手机的奴隶？', cue:'①看新闻 ②发微信 ③拍照 ④充电 ……', words:['智能','奴隶','麻木','狼吞虎咽','伺候','眨']},
    {step:'为了关机一天，“我”怎样安置自己的手机？', cue:'包好、放在、收到', words:['索性','作息','着手','安置','防止','薄弱','精致','庄重']},
    {step:'“我”如何出门锻炼的？', cue:'公园、跳舞、既……又……', words:['分散','僵硬','四肢','特长','兴高采烈','摇滚','一举两得']},
    {step:'回家后，“我”又做了什么？', cue:'打开、熬粥、往常……', words:['冷落','踏实','空虚','要命','粥','消耗','弥补','沸腾','弥漫','往常','侦探','案件','突破','震惊','彩票','恐怖','袭击','干扰','安宁']}
  ],
  checklist: [
    'Đã kể được vì sao sếp nổi giận và quyết định "họp không được mang điện thoại" chưa?',
    'Có kể được tin "tôi" xem (đôi thanh niên đâm hỏng cầu, không báo cảnh sát mà chụp ảnh) chưa?',
    'Có nêu đủ các biểu hiện "nô lệ điện thoại" (xem tin, WeChat, chụp ảnh, sạc pin) chưa?',
    'Có kể theo đúng trình tự ngày tắt máy: cất điện thoại → ra công viên nhảy → về nhà nấu cháo → cảm giác yên bình chưa?',
    'Có dùng được ít nhất 6 từ mới (奴隶, 麻木, 安置, 防止, 一举两得, 踏实, 空虚, 往常…) và kể bằng lời của mình chưa?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, tr. 102–106) — đáp án theo sách đáp án
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu)',
   vd:{tu:'受罪', chu:'受', ds:['受伤','受累','受骗','受气']},
   cau:[
     {tu:'智能', chu:'智', dap:['智力','智慧','智商','理智'], them:['机智','才智','明智','智者','益智','智能化'],
      giai:'智 = trí tuệ, sự khôn ngoan: 智力 trí lực, 智慧 trí tuệ, 智商 chỉ số IQ, 理智 lý trí, 明智 sáng suốt.'},
     {tu:'安置', chu:'安', dap:['安心','安全','安静','安装'], them:['安放','安排','安顿','安定','安稳','平安'],
      giai:'安 = yên ổn, và (động từ) đặt để cho yên chỗ: 安装 lắp đặt, 安放 đặt để, 安顿 thu xếp ổn thỏa; 安心, 安全, 安静 mang nghĩa yên ổn.'},
     {tu:'防止', chu:'防', dap:['防范','防备','提防','预防'], them:['防守','防御','防火','防晒','防盗','消防'],
      giai:'防 = phòng, đề phòng, phòng bị: 预防 phòng ngừa, 提防 đề phòng (người), 防火 phòng cháy, 防晒 chống nắng.'},
     {tu:'精致', chu:'精', dap:['精心','精细','精彩','精明'], them:['精美','精确','精密','精巧','精品','精选'],
      giai:'精 = tinh, kỹ lưỡng, tinh tế, xuất sắc: 精心 dốc lòng, 精细 tỉ mỉ, 精彩 đặc sắc, 精明 tinh tường, 精美 tinh xảo đẹp đẽ.'}
   ]},
  {kieu:'gx', de:'用所给词语或结构改写句子', vn:'Dùng từ hoặc cấu trúc cho sẵn để viết lại câu', dapSgk:true,
   cau:[
     {s:'她的脾气不好，经常不知道为什么突然就生气了。', tu:'说A就A', dap:'她的脾气不好，说生气就生气。',
      giai:'说 + A + 就 + A: sự việc xảy ra rất nhanh, bất ngờ — thay cho 经常……突然就…….'},
     {s:'这么做不但能增加公司的利润，还能方便用户。', tu:'既……又……', dap:'这么做既能增加公司的利润，又能方便用户。',
      giai:'不但……还…… (tăng tiến) đổi thành 既……又…… (hai mặt song song).'},
     {s:'找了好几个地方都没找着，干脆不找了。', tu:'索性', dap:'找了好几个地方都没找着，索性不找了。',
      giai:'干脆 dùng như phó từ thì thay bằng 索性 được (xem 词语辨析).'},
     {s:'很多单位在年底就开始制定第二年的计划了。', tu:'着手', dap:'很多单位在年底就着手制定第二年的计划了。',
      giai:'着手 + V (制定) = bắt tay vào làm, văn viết hơn 开始.'},
     {s:'今天不知道怎么了，堵得这么厉害，以前这里很少堵车。', tu:'往常', dap:'今天不知道怎么了，堵得这么厉害，往常这里很少堵车。',
      giai:'往常 đối lập với 今天 (hôm nay khác thường) — thay cho 以前.'},
     {s:'考试时，我非常紧张，手心里都是汗。', tu:'……得要命', dap:'考试时，我紧张得要命，手心里都是汗。',
      giai:'非常 + Adj đổi thành Adj + 得要命 (bỏ 非常).'}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ①)', tu:['案件','报警','绑架','震惊','侦探'],
   cau:[
     {s:'上个月，这里发生了一起令人＿＿的＿＿，两个年轻人＿＿了他们的同学，然后向同学的父母要一大笔钱。受害孩子的家人＿＿以后，警察迅速开展工作，他们派出一位非常有经验的＿＿，很快就抓住了那两个年轻人，救出了他们的同学。',
      dap:['震惊','案件','绑架','报警','侦探']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn ②)', tu:['着手','作息','干扰','四肢','狼吞虎咽'],
   cau:[
     {s:'我的＿＿时间是这样的：早上6:00起床，先活动活动＿＿，然后做一顿营养丰富的早餐，我吃饭从来不＿＿，享受了美味的早餐后，我＿＿写我的新书，在没人＿＿的情况下，我的写作进度会很快，写着写着一天的时光不知不觉就过去了。',
      dap:['作息','四肢','狼吞虎咽','着手','干扰']}
   ]},
  {kieu:'mp', de:'阅读语段，模仿造句', vn:'Đọc đoạn văn, bắt chước đặt câu (phần gạch chân trong sách để trong 【】)',
   cau:[
     {mau:'离开了手机，【难道】会死吗？【何不】尝试一下一周关机一天？【说干就干】，索性这礼拜【就】开始。',
      khung:'丢了工作，难道＿＿吗？何不＿＿？说干就干，＿＿就＿＿。',
      dap:['就活不下去了','趁这个机会学点儿新本事','索性明天','去报名'],
      giai:'Chuỗi 难道……吗 (hỏi tu từ phủ định nỗi lo) → 何不…… (sao không…, đề xuất) → 说干就干，……就…… (hành động ngay). Câu mẫu: 丢了工作，难道就活不下去了吗？何不趁这个机会学点儿新本事？说干就干，索性明天就去报名。'},
     {mau:'跳舞【是我的特长】，我兴高采烈地跳起了摇滚，【既】能娱乐身心，【又】能锻炼身体，一举两得。',
      khung:'＿＿是我的特长，我＿＿，既＿＿，又＿＿。',
      dap:['画画儿','每个周末都去公园写生','能放松心情','能把美丽的风景留在纸上'],
      giai:'Khung: sở trường + hoạt động cụ thể + 既……又…… nêu hai cái lợi. Câu mẫu: 画画儿是我的特长，我每个周末都去公园写生，既能放松心情，又能把美丽的风景留在纸上。'}
   ]},
  {kieu:'bc', de:'指出下列句子的错误，并提出修改建议', vn:'Chỉ ra lỗi sai của các câu sau và đề xuất cách sửa (病句类型：搭配不当 — kết hợp từ không phù hợp)',
   cau:[
     {s:'这里有“庐山第一景”之称，一年四季泉水叮咚、鸟语花香、青松翠柏、云蒸雾绕。', sai:'青松翠柏', loai:'主谓搭配不当',
      dap:'这里有“庐山第一景”之称，一年四季泉水叮咚、鸟语花香、松柏常青、云蒸雾绕。',
      giai:'一年四季 + … cần các cụm miêu tả trạng thái kiểu chủ – vị (泉水 + 叮咚, 云蒸 + 雾绕); 青松翠柏 chỉ là cụm danh từ, không nói lên "bốn mùa thế nào" → sửa thành chủ – vị 松柏常青 (tùng bách xanh quanh năm).'},
     {s:'老板很赏识李朝阳温文尔雅的风度和丰富的知识，对他十分器重。', sai:'赏识李朝阳温文尔雅的风度和丰富的知识', loai:'动宾搭配不当',
      dap:'李朝阳有着温文尔雅的风度和丰富的知识，老板很赏识他，对他十分器重。',
      giai:'赏识 (đánh giá cao, trọng dụng) có tân ngữ là NGƯỜI (赏识他), không đi với 风度, 知识 → tách câu: 李朝阳有着……，老板很赏识他.'},
     {s:'他相信，凭着自己聪明能干的双手，一定能养活自己。', sai:'聪明能干', loai:'定语搭配不当',
      dap:'他相信，凭着自己勤劳能干的双手，一定能养活自己。',
      giai:'聪明 dùng cho người, đầu óc; không làm định ngữ cho 双手 (đôi tay) → đổi thành 勤劳 (cần cù).'},
     {s:'妈妈对于我不太信任，老把我当成孩子。', sai:'对于', loai:'介词和宾语搭配不当',
      dap:'妈妈对我不太信任，老把我当成孩子。',
      giai:'Nói về thái độ đối với một NGƯỜI (信任 ai) thì dùng 对, không dùng 对于.'},
     {s:'快过春节了，人们把自己的家打扫得又干净又整齐。', sai:'打扫得又干净又整齐', loai:'动词和补语搭配不当',
      dap:'快过春节了，人们把自己的家打扫得干干净净。',
      giai:'打扫 (quét dọn) chỉ đem lại kết quả 干净; "ngăn nắp" (整齐) là kết quả của 收拾 / 整理 → bỏ 整齐, dùng 干干净净.'}
   ]}
];
