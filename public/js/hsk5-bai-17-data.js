// ══════════════════════════════════════════
// DATA — HSK5 Bài 17: 在最美好的时刻离开 (Rời đi vào thời khắc tốt đẹp nhất)
// Unit 6 修身养性 · Nguồn: HSK标准教程5上 (tr. 154–161) + 练习册 bài 17
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 33 từ của bảng 生词 + 3 专有名词 (tr. 154–156)
// ══════════════════════════════════════════
var vocabData = [
  {n:1, zh:'事物', py:'shìwù', pos:'Danh từ', vn:'sự vật, sự việc', hv:'sự vật', em:'🔍', lesson:1,
   explain:['Chỉ mọi vật và mọi hiện tượng tồn tại quanh ta — cách nói khái quát, thiên về văn viết.'],
   usage:'Hay đi với 新 / 美好的 / 周围的: 新事物, 美好的事物. Khẩu ngữ hằng ngày thường nói 东西 / 事情.',
   collo:['新事物', '美好的事物', '周围的事物', '对事物的记忆'],
   ex_zh:'我们对事物的记忆仅在高峰和结尾。', ex_py:'Wǒmen duì shìwù de jìyì jǐn zài gāofēng hé jiéwěi.', ex_vn:'Trí nhớ của chúng ta về sự vật chỉ nằm ở đỉnh cao và phần kết.',
   exList:[
     {zh:'我们对事物的记忆仅在高峰和结尾。', py:'Wǒmen duì shìwù de jìyì jǐn zài gāofēng hé jiéwěi.', vn:'Trí nhớ của chúng ta về sự vật chỉ nằm ở đỉnh cao và phần kết.'},
     {zh:'孩子们对新事物总是很好奇。', py:'Háizimen duì xīn shìwù zǒngshì hěn hàoqí.', vn:'Trẻ con luôn tò mò với những điều mới mẻ.'},
     {zh:'我们要学会发现身边美好的事物。', py:'Wǒmen yào xuéhuì fāxiàn shēnbiān měihǎo de shìwù.', vn:'Chúng ta phải học cách phát hiện những điều tốt đẹp quanh mình.'}
   ],
   colloFull:[
     {zh:'新事物', py:'xīn shìwù', vn:'cái mới, điều mới'},
     {zh:'美好的事物', py:'měihǎo de shìwù', vn:'những điều tốt đẹp'},
     {zh:'周围的事物', py:'zhōuwéi de shìwù', vn:'sự vật xung quanh'},
     {zh:'对事物的记忆', py:'duì shìwù de jìyì', vn:'trí nhớ về sự vật'},
     {zh:'接受新事物', py:'jiēshòu xīn shìwù', vn:'tiếp nhận cái mới'}
   ],
   patterns:[{s:'对 + 事物 + 的 + N', m:'… đối với sự vật (记忆 / 看法 / 态度)'}, {s:'接受 / 发现 + (新 / 美好的) + 事物', m:'Tiếp nhận / phát hiện cái mới, điều tốt đẹp'}],
   checkList:[
     {promptLang:'vi', prompt:'Ông nội tuy đã già nhưng càng ngày càng thích tiếp nhận cái mới.', answer:'爷爷虽然老了，但是越来越喜欢接受新事物。', answerPy:'Yéye suīrán lǎo le, dànshì yuè lái yuè xǐhuan jiēshòu xīn shìwù.', note:'新事物 = cái mới (nói khái quát), không nói 新东西 trong trường hợp này.', pair:'越来越'},
     {promptLang:'vi', prompt:'Chỉ cần để ý, bạn sẽ phát hiện ra rất nhiều điều tốt đẹp.', answer:'只要留心，你就会发现很多美好的事物。', answerPy:'Zhǐyào liúxīn, nǐ jiù huì fāxiàn hěn duō měihǎo de shìwù.', note:'美好的事物: định ngữ + 的 + 事物.', pair:'只要……就……'}
   ]},

  {n:2, zh:'高峰', py:'gāofēng', pos:'Danh từ', vn:'đỉnh cao, cao điểm', hv:'cao phong', em:'🏔️', lesson:1,
   explain:['Nghĩa gốc: đỉnh núi cao. Nghĩa bóng: giai đoạn, điểm cao nhất của sự việc; cũng chỉ giờ cao điểm (上下班高峰).'],
   usage:'Hay gặp: 高峰期, 上下班高峰, 事业的高峰, 达到高峰.',
   collo:['上下班高峰', '高峰期', '达到高峰', '事业的高峰'],
   ex_zh:'高峰之后，终点出现得越迅速，这件事留给我们的印象就越深刻。', ex_py:'Gāofēng zhīhòu, zhōngdiǎn chūxiàn de yuè xùnsù, zhè jiàn shì liú gěi wǒmen de yìnxiàng jiù yuè shēnkè.', ex_vn:'Sau đỉnh cao, điểm kết thúc đến càng nhanh thì ấn tượng việc đó để lại cho ta càng sâu sắc.',
   exList:[
     {zh:'高峰之后，终点出现得越迅速，这件事留给我们的印象就越深刻。', py:'Gāofēng zhīhòu, zhōngdiǎn chūxiàn de yuè xùnsù, zhè jiàn shì liú gěi wǒmen de yìnxiàng jiù yuè shēnkè.', vn:'Sau đỉnh cao, điểm kết thúc đến càng nhanh thì ấn tượng việc đó để lại cho ta càng sâu sắc.'},
     {zh:'上下班高峰的时候，地铁里挤得不得了。', py:'Shàng xià bān gāofēng de shíhou, dìtiě li jǐ de bùdéliǎo.', vn:'Giờ cao điểm đi làm, tan làm, tàu điện ngầm chen chúc kinh khủng.'},
     {zh:'三十岁那年，他的事业达到了高峰。', py:'Sānshí suì nà nián, tā de shìyè dádàole gāofēng.', vn:'Năm ba mươi tuổi, sự nghiệp của anh ấy đạt tới đỉnh cao.'}
   ],
   colloFull:[
     {zh:'上下班高峰', py:'shàng xià bān gāofēng', vn:'giờ cao điểm đi làm, tan làm'},
     {zh:'高峰期', py:'gāofēngqī', vn:'thời kỳ cao điểm'},
     {zh:'达到高峰', py:'dádào gāofēng', vn:'đạt tới đỉnh cao'},
     {zh:'事业的高峰', py:'shìyè de gāofēng', vn:'đỉnh cao sự nghiệp'},
     {zh:'登上高峰', py:'dēngshàng gāofēng', vn:'leo lên đỉnh cao'}
   ],
   patterns:[{s:'Sự việc + 达到(了)高峰', m:'… đạt tới đỉnh điểm'}, {s:'(上下班) 高峰 + 的时候', m:'Vào giờ cao điểm'}],
   checkList:[
     {promptLang:'vi', prompt:'Giờ cao điểm tan làm, ngay cả taxi cũng không gọi được.', answer:'下班高峰的时候，连出租车都打不到。', answerPy:'Xiàbān gāofēng de shíhou, lián chūzūchē dōu dǎ bu dào.', note:'下班高峰的时候: 高峰 làm thành phần chỉ thời gian.', pair:'连……都……'},
     {promptLang:'vi', prompt:'Chỉ cần tránh giờ cao điểm đi học, 20 phút là đến được trường.', answer:'只要避开上学高峰，二十分钟就能到学校。', answerPy:'Zhǐyào bìkāi shàngxué gāofēng, èrshí fēnzhōng jiù néng dào xuéxiào.', note:'避开高峰 = tránh giờ cao điểm.', pair:'只要……就……'}
   ]},

  {n:3, zh:'终点', py:'zhōngdiǎn', pos:'Danh từ', vn:'điểm cuối cùng, đích, điểm kết thúc', hv:'chung điểm', em:'🏁', lesson:1,
   explain:['Nơi kết thúc một chặng đường (bến cuối, vạch đích); nghĩa bóng: điểm kết thúc của sự việc.'],
   usage:'Trái nghĩa: 起点. Hay gặp: 终点站, 到达终点, 跑到终点.',
   collo:['到达终点', '终点站', '跑到终点', '从起点到终点'],
   ex_zh:'他第一个跑到了终点。', ex_py:'Tā dì-yī ge pǎodàole zhōngdiǎn.', ex_vn:'Anh ấy là người đầu tiên chạy về đích.',
   exList:[
     {zh:'他第一个跑到了终点。', py:'Tā dì-yī ge pǎodàole zhōngdiǎn.', vn:'Anh ấy là người đầu tiên chạy về đích.'},
     {zh:'这路公共汽车的终点站是火车站。', py:'Zhè lù gōnggòng qìchē de zhōngdiǎnzhàn shì huǒchēzhàn.', vn:'Bến cuối của tuyến xe buýt này là ga tàu hoả.'},
     {zh:'高峰之后，终点出现得越迅速，印象就越深刻。', py:'Gāofēng zhīhòu, zhōngdiǎn chūxiàn de yuè xùnsù, yìnxiàng jiù yuè shēnkè.', vn:'Sau đỉnh cao, điểm kết thúc đến càng nhanh thì ấn tượng càng sâu.'}
   ],
   colloFull:[
     {zh:'到达终点', py:'dàodá zhōngdiǎn', vn:'về tới đích'},
     {zh:'终点站', py:'zhōngdiǎnzhàn', vn:'bến cuối'},
     {zh:'跑到终点', py:'pǎodào zhōngdiǎn', vn:'chạy về đích'},
     {zh:'从起点到终点', py:'cóng qǐdiǎn dào zhōngdiǎn', vn:'từ điểm xuất phát đến đích'}
   ],
   patterns:[{s:'到达 / 跑到 + 终点', m:'Về tới đích'}, {s:'从起点到终点', m:'Từ điểm đầu đến điểm cuối'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy cậu ấy chạy chậm nhất, nhưng cuối cùng vẫn chạy về đích.', answer:'虽然他跑得最慢，但是最后还是跑到了终点。', answerPy:'Suīrán tā pǎo de zuì màn, dànshì zuìhòu háishi pǎodàole zhōngdiǎn.', note:'跑到了终点: động từ + bổ ngữ 到 + nơi chốn.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Cậu ấy vừa chạy về đích là ngồi phịch xuống đất.', answer:'他一跑到终点就坐在了地上。', answerPy:'Tā yì pǎodào zhōngdiǎn jiù zuò zài le dì shang.', note:'一 + V1 + 就 + V2: hai hành động nối liền nhau.', pair:'一……就……'}
   ]},

  {n:4, zh:'迅速', py:'xùnsù', pos:'Tính từ', vn:'nhanh chóng', hv:'tấn tốc', em:'⚡', lesson:1,
   explain:['Rất nhanh, nhấn vào tốc độ của hành động — thiên về văn viết.'],
   usage:'Làm trạng ngữ: 迅速(地) + V (迅速提高, 迅速采取措施); làm bổ ngữ: V + 得 + 很迅速.',
   collo:['迅速提高', '迅速出现', '迅速采取措施', '迅速做出反应'],
   ex_zh:'事情发生后，领导迅速采取了措施。', ex_py:'Shìqing fāshēng hòu, lǐngdǎo xùnsù cǎiqǔle cuòshī.', ex_vn:'Sự việc xảy ra xong, lãnh đạo nhanh chóng áp dụng biện pháp.',
   exList:[
     {zh:'事情发生后，领导迅速采取了措施。', py:'Shìqing fāshēng hòu, lǐngdǎo xùnsù cǎiqǔle cuòshī.', vn:'Sự việc xảy ra xong, lãnh đạo nhanh chóng áp dụng biện pháp.'},
     {zh:'这几年，他的汉语水平提高得很迅速。', py:'Zhè jǐ nián, tā de Hànyǔ shuǐpíng tígāo de hěn xùnsù.', vn:'Mấy năm nay, trình độ tiếng Trung của cậu ấy tiến bộ rất nhanh.'},
     {zh:'听到警报，大家迅速地离开了大楼。', py:'Tīngdào jǐngbào, dàjiā xùnsù de líkāile dàlóu.', vn:'Nghe thấy chuông báo động, mọi người nhanh chóng rời khỏi toà nhà.'}
   ],
   colloFull:[
     {zh:'迅速提高', py:'xùnsù tígāo', vn:'nâng cao nhanh chóng'},
     {zh:'迅速出现', py:'xùnsù chūxiàn', vn:'nhanh chóng xuất hiện'},
     {zh:'迅速采取措施', py:'xùnsù cǎiqǔ cuòshī', vn:'nhanh chóng áp dụng biện pháp'},
     {zh:'迅速做出反应', py:'xùnsù zuòchū fǎnyìng', vn:'phản ứng nhanh chóng'},
     {zh:'迅速产生', py:'xùnsù chǎnshēng', vn:'nhanh chóng nảy sinh'}
   ],
   patterns:[{s:'迅速(地) + V', m:'Làm gì một cách nhanh chóng'}, {s:'V + 得 + 很迅速', m:'Làm gì rất nhanh (bổ ngữ trình độ)'}],
   checkList:[
     {promptLang:'vi', prompt:'Vừa nhận được điện thoại, bác sĩ đã nhanh chóng chạy tới.', answer:'一接到电话，医生就迅速赶了过来。', answerPy:'Yì jiēdào diànhuà, yīshēng jiù xùnsù gǎnle guòlai.', note:'迅速 đứng sau 就, ngay trước động từ.', pair:'一……就……'},
     {promptLang:'vi', prompt:'Các bạn nhanh chóng dọn sạch phòng học.', answer:'同学们迅速地把教室打扫干净了。', answerPy:'Tóngxuémen xùnsù de bǎ jiàoshì dǎsǎo gānjìng le.', note:'迅速地 đứng trước cụm 把 + tân ngữ + động từ.', pair:'把'}
   ]},

  {n:5, zh:'深刻', py:'shēnkè', pos:'Tính từ', vn:'sâu sắc', hv:'thâm khắc', em:'💭', lesson:1,
   explain:['(Ấn tượng, cảm nhận, ký ức) sâu đậm, khó quên; (nhận thức, lời nói) đi vào bản chất.'],
   usage:'深刻的 + 印象 / 记忆 / 道理; 印象很深刻. Không nói 深的印象 — phải nói 很深的印象 hoặc 深刻的印象.',
   collo:['深刻的印象', '深刻的记忆', '深刻的道理', '留下深刻的印象'],
   ex_zh:'这次旅行给我留下了深刻的印象。', ex_py:'Zhè cì lǚxíng gěi wǒ liúxiàle shēnkè de yìnxiàng.', ex_vn:'Chuyến đi này để lại cho tôi ấn tượng sâu sắc.',
   exList:[
     {zh:'这次旅行给我留下了深刻的印象。', py:'Zhè cì lǚxíng gěi wǒ liúxiàle shēnkè de yìnxiàng.', vn:'Chuyến đi này để lại cho tôi ấn tượng sâu sắc.'},
     {zh:'这个故事告诉了我们一个深刻的道理。', py:'Zhège gùshi gàosule wǒmen yí ge shēnkè de dàolǐ.', vn:'Câu chuyện này cho chúng ta một bài học sâu sắc.'},
     {zh:'奶奶说过的一句话让我印象特别深刻。', py:'Nǎinai shuōguo de yí jù huà ràng wǒ yìnxiàng tèbié shēnkè.', vn:'Một câu bà từng nói khiến tôi ấn tượng đặc biệt sâu sắc.'}
   ],
   colloFull:[
     {zh:'深刻的印象', py:'shēnkè de yìnxiàng', vn:'ấn tượng sâu sắc'},
     {zh:'深刻的记忆', py:'shēnkè de jìyì', vn:'ký ức sâu đậm'},
     {zh:'深刻的道理', py:'shēnkè de dàolǐ', vn:'đạo lý sâu sắc'},
     {zh:'留下深刻的印象', py:'liúxià shēnkè de yìnxiàng', vn:'để lại ấn tượng sâu sắc'},
     {zh:'印象很深刻', py:'yìnxiàng hěn shēnkè', vn:'ấn tượng rất sâu'}
   ],
   patterns:[{s:'给 + người + 留下(了) + 深刻的印象', m:'Để lại cho ai ấn tượng sâu sắc'}, {s:'(对……) 印象 + 很 / 特别 + 深刻', m:'Ấn tượng rất sâu sắc (về …)'}],
   checkList:[
     {promptLang:'vi', prompt:'Chuyến đi này không chỉ rất vui, mà còn để lại cho tôi ấn tượng sâu sắc.', answer:'这次旅行不仅很愉快，也给我留下了深刻的印象。', answerPy:'Zhè cì lǚxíng bùjǐn hěn yúkuài, yě gěi wǒ liúxiàle shēnkè de yìnxiàng.', note:'给 + người + 留下 + 深刻的印象 — cụm cố định rất hay gặp.', pair:'不仅……也……'},
     {promptLang:'vi', prompt:'Tôi chưa từng có ấn tượng sâu sắc như vậy với một đám cưới.', answer:'我从来没对一个婚礼有过这么深刻的印象。', answerPy:'Wǒ cónglái méi duì yí ge hūnlǐ yǒuguo zhème shēnkè de yìnxiàng.', note:'这么 + 深刻 + 的 + 印象.', pair:'从来没……过'}
   ]},

  {n:6, zh:'戏剧', py:'xìjù', pos:'Danh từ', vn:'kịch, vở tuồng', hv:'hí kịch', em:'🎭', lesson:1,
   explain:['Nghệ thuật sân khấu nói chung (kịch nói, kinh kịch, ca kịch…), do diễn viên biểu diễn trên sân khấu.'],
   usage:'戏剧演出, 戏剧学院, 传统戏剧. Lượng từ cho buổi diễn: 一场戏剧演出.',
   collo:['戏剧演出', '一场戏剧', '戏剧学院', '传统戏剧'],
   ex_zh:'为了一场戏剧演出，我们会投入很多时间。', ex_py:'Wèile yì chǎng xìjù yǎnchū, wǒmen huì tóurù hěn duō shíjiān.', ex_vn:'Vì một buổi diễn kịch, chúng ta sẽ bỏ ra rất nhiều thời gian.',
   exList:[
     {zh:'为了一场戏剧演出，我们会投入很多时间。', py:'Wèile yì chǎng xìjù yǎnchū, wǒmen huì tóurù hěn duō shíjiān.', vn:'Vì một buổi diễn kịch, chúng ta sẽ bỏ ra rất nhiều thời gian.'},
     {zh:'姐姐在戏剧学院学表演。', py:'Jiějie zài xìjù xuéyuàn xué biǎoyǎn.', vn:'Chị gái học diễn xuất ở học viện sân khấu.'},
     {zh:'京剧是中国最有名的传统戏剧。', py:'Jīngjù shì Zhōngguó zuì yǒumíng de chuántǒng xìjù.', vn:'Kinh kịch là loại hình kịch truyền thống nổi tiếng nhất Trung Quốc.'}
   ],
   colloFull:[
     {zh:'戏剧演出', py:'xìjù yǎnchū', vn:'buổi diễn kịch'},
     {zh:'一场戏剧', py:'yì chǎng xìjù', vn:'một vở kịch'},
     {zh:'戏剧学院', py:'xìjù xuéyuàn', vn:'học viện sân khấu'},
     {zh:'传统戏剧', py:'chuántǒng xìjù', vn:'kịch truyền thống'},
     {zh:'戏剧节', py:'xìjùjié', vn:'liên hoan sân khấu'}
   ],
   patterns:[{s:'一场 + 戏剧演出', m:'Một buổi diễn kịch'}, {s:'传统 / 现代 + 戏剧', m:'Kịch truyền thống / hiện đại'}],
   checkList:[
     {promptLang:'vi', prompt:'Vở kịch này chúng tôi xem ở nhà hát lớn (nhấn mạnh nơi xem).', answer:'这场戏剧我们是在大剧院看的。', answerPy:'Zhè chǎng xìjù wǒmen shì zài dà jùyuàn kàn de.', note:'Lượng từ 场 cho một buổi diễn.', pair:'是……的'},
     {promptLang:'vi', prompt:'Ngay cả ông nội không thích xem ti vi cũng thích kịch truyền thống.', answer:'连不爱看电视的爷爷都喜欢传统戏剧。', answerPy:'Lián bú ài kàn diànshì de yéye dōu xǐhuan chuántǒng xìjù.', note:'传统戏剧: kịch truyền thống (kinh kịch, chèo…).', pair:'连……都……'}
   ]},

  {n:7, zh:'投入', py:'tóurù', pos:'Động từ / Danh từ / Tính từ', vn:'đưa vào, bỏ vốn; kinh phí đầu tư; say mê, nhập tâm', hv:'đầu nhập', em:'💰', lesson:1,
   explain:['Động từ: bỏ (thời gian, tiền, sức lực) vào một việc.', 'Danh từ: khoản tiền, vốn bỏ ra.', 'Tính từ: dồn hết tâm trí, say sưa (唱得很投入).'],
   usage:'投入 + 时间 / 资金 / 精力; 投入到……中; Tính từ: V + 得 + 很投入.',
   collo:['投入时间', '投入资金', '投入精力', '很投入'],
   ex_zh:'比如说为了一场戏剧演出，我们会投入很多时间。', ex_py:'Bǐrú shuō wèile yì chǎng xìjù yǎnchū, wǒmen huì tóurù hěn duō shíjiān.', ex_vn:'Chẳng hạn, vì một buổi diễn kịch, chúng ta sẽ bỏ ra rất nhiều thời gian.',
   exList:[
     {zh:'比如说为了一场戏剧演出，我们会投入很多时间。', py:'Bǐrú shuō wèile yì chǎng xìjù yǎnchū, wǒmen huì tóurù hěn duō shíjiān.', vn:'Chẳng hạn, vì một buổi diễn kịch, chúng ta sẽ bỏ ra rất nhiều thời gian.'},
     {zh:'她唱得特别投入，连眼睛都闭上了。', py:'Tā chàng de tèbié tóurù, lián yǎnjing dōu bìshang le.', vn:'Cô ấy hát say sưa đến mức nhắm cả mắt lại.'},
     {zh:'这个项目的投入很大，但是效果不太好。', py:'Zhège xiàngmù de tóurù hěn dà, dànshì xiàoguǒ bú tài hǎo.', vn:'Vốn bỏ vào dự án này rất lớn, nhưng hiệu quả không tốt lắm.'}
   ],
   colloFull:[
     {zh:'投入时间', py:'tóurù shíjiān', vn:'bỏ thời gian'},
     {zh:'投入资金', py:'tóurù zījīn', vn:'bỏ vốn'},
     {zh:'投入精力', py:'tóurù jīnglì', vn:'dồn sức lực, tâm sức'},
     {zh:'很投入', py:'hěn tóurù', vn:'rất say sưa, rất nhập tâm'},
     {zh:'投入到工作中', py:'tóurù dào gōngzuò zhōng', vn:'lao vào công việc'}
   ],
   patterns:[{s:'投入 + 时间 / 资金 / 精力', m:'Bỏ thời gian / vốn / tâm sức vào'}, {s:'V + 得 + 很投入', m:'Làm gì rất say sưa, nhập tâm'}],
   checkList:[
     {promptLang:'vi', prompt:'Để thi đỗ đại học, cậu ấy đã dồn toàn bộ thời gian vào việc học.', answer:'为了考上大学，他把所有的时间都投入到了学习中。', answerPy:'Wèile kǎoshàng dàxué, tā bǎ suǒyǒu de shíjiān dōu tóurù dàole xuéxí zhōng.', note:'把 + thời gian + 投入到 + việc + 中.', pair:'把'},
     {promptLang:'vi', prompt:'Tuy anh ấy đã bỏ vào rất nhiều tiền, nhưng việc kinh doanh vẫn chẳng khá lên.', answer:'虽然他投入了很多钱，但是生意还是没有好起来。', answerPy:'Suīrán tā tóurùle hěn duō qián, dànshì shēngyi háishi méiyǒu hǎo qilai.', note:'投入 + 了 + số lượng + tiền.', pair:'虽然……但是……'}
   ]},

  {n:8, zh:'服装', py:'fúzhuāng', pos:'Danh từ', vn:'trang phục', hv:'phục trang', em:'👗', lesson:1,
   explain:['Quần áo nói chung — cách nói khái quát, trang trọng hơn 衣服.'],
   usage:'服装店, 服装设计, 演出服装, 民族服装. Không dùng 件 đếm trực tiếp (nói 一件衣服, không nói 一件服装).',
   collo:['演出服装', '服装设计', '服装店', '民族服装'],
   ex_zh:'演员们正在准备演出服装。', ex_py:'Yǎnyuánmen zhèngzài zhǔnbèi yǎnchū fúzhuāng.', ex_vn:'Các diễn viên đang chuẩn bị trang phục biểu diễn.',
   exList:[
     {zh:'演员们正在准备演出服装。', py:'Yǎnyuánmen zhèngzài zhǔnbèi yǎnchū fúzhuāng.', vn:'Các diễn viên đang chuẩn bị trang phục biểu diễn.'},
     {zh:'她大学学的是服装设计。', py:'Tā dàxué xué de shì fúzhuāng shèjì.', vn:'Ở đại học cô ấy học thiết kế thời trang.'},
     {zh:'越南的民族服装叫“奥黛”。', py:'Yuènán de mínzú fúzhuāng jiào “àodài”.', vn:'Trang phục dân tộc của Việt Nam gọi là “áo dài”.'}
   ],
   colloFull:[
     {zh:'演出服装', py:'yǎnchū fúzhuāng', vn:'trang phục biểu diễn'},
     {zh:'服装设计', py:'fúzhuāng shèjì', vn:'thiết kế thời trang'},
     {zh:'服装店', py:'fúzhuāngdiàn', vn:'cửa hàng quần áo'},
     {zh:'民族服装', py:'mínzú fúzhuāng', vn:'trang phục dân tộc'},
     {zh:'准备服装', py:'zhǔnbèi fúzhuāng', vn:'chuẩn bị trang phục'}
   ],
   patterns:[{s:'服装 + 设计 / 店 / 公司', m:'Thiết kế / cửa hàng / công ty thời trang'}, {s:'民族 / 演出 / 传统 + 服装', m:'Trang phục dân tộc / biểu diễn / truyền thống'}],
   checkList:[
     {promptLang:'vi', prompt:'Trang phục biểu diễn là do các bạn tự may.', answer:'演出服装是同学们自己做的。', answerPy:'Yǎnchū fúzhuāng shì tóngxuémen zìjǐ zuò de.', note:'May quần áo nói 做衣服 / 做服装.', pair:'是……的'},
     {promptLang:'vi', prompt:'Trang phục biểu diễn bị em gái làm bẩn rồi.', answer:'演出服装被妹妹弄脏了。', answerPy:'Yǎnchū fúzhuāng bèi mèimei nòngzāng le.', note:'被 + người + 弄脏了: bổ ngữ kết quả sau động từ.', pair:'被'}
   ]},

  {n:9, zh:'化妆', py:'huà zhuāng', pos:'Động từ (ly hợp)', vn:'trang điểm, hoá trang', hv:'hoá trang', em:'💄', lesson:1,
   explain:['Dùng mỹ phẩm tô điểm khuôn mặt cho đẹp hơn, hoặc hoá trang thành nhân vật khi biểu diễn.'],
   usage:'Ly hợp từ: 化妆 / 化了妆 / 化个妆 / 化过妆. Không mang tân ngữ (không nói 化妆脸). 化妆品 = mỹ phẩm.',
   collo:['化妆品', '化了妆', '化淡妆', '给演员化妆'],
   ex_zh:'演出前，演员们要花很长时间化妆。', ex_py:'Yǎnchū qián, yǎnyuánmen yào huā hěn cháng shíjiān huà zhuāng.', ex_vn:'Trước buổi diễn, các diễn viên phải mất rất nhiều thời gian trang điểm.',
   exList:[
     {zh:'演出前，演员们要花很长时间化妆。', py:'Yǎnchū qián, yǎnyuánmen yào huā hěn cháng shíjiān huà zhuāng.', vn:'Trước buổi diễn, các diễn viên phải mất rất nhiều thời gian trang điểm.'},
     {zh:'她化了妆以后，我差点儿没认出来。', py:'Tā huàle zhuāng yǐhòu, wǒ chàdiǎnr méi rèn chulai.', vn:'Cô ấy trang điểm xong, tôi suýt nữa không nhận ra.'},
     {zh:'学生去学校最好不要化浓妆。', py:'Xuésheng qù xuéxiào zuìhǎo búyào huà nóng zhuāng.', vn:'Học sinh đi học tốt nhất đừng trang điểm đậm.'}
   ],
   colloFull:[
     {zh:'化妆品', py:'huàzhuāngpǐn', vn:'mỹ phẩm'},
     {zh:'化了妆', py:'huàle zhuāng', vn:'đã trang điểm'},
     {zh:'化淡妆', py:'huà dàn zhuāng', vn:'trang điểm nhẹ'},
     {zh:'给演员化妆', py:'gěi yǎnyuán huà zhuāng', vn:'trang điểm cho diễn viên'},
     {zh:'化浓妆', py:'huà nóng zhuāng', vn:'trang điểm đậm'}
   ],
   patterns:[{s:'给 + người + 化妆', m:'Trang điểm cho ai'}, {s:'化 + 了 / 过 / 淡 / 浓 + 妆', m:'Ly hợp từ: thành phần chen vào giữa'}],
   checkList:[
     {promptLang:'vi', prompt:'Chị gái vừa trang điểm xong là ra khỏi nhà ngay.', answer:'姐姐一化好妆就出门了。', answerPy:'Jiějie yí huàhǎo zhuāng jiù chūmén le.', note:'化好妆: bổ ngữ 好 chen giữa ly hợp từ.', pair:'一……就……'},
     {promptLang:'vi', prompt:'Mẹ tôi từ trước đến nay chưa từng trang điểm.', answer:'我妈妈从来没化过妆。', answerPy:'Wǒ māma cónglái méi huàguo zhuāng.', note:'过 chen giữa: 化过妆, không nói 化妆过.', pair:'从来没……过'}
   ]},

  {n:10, zh:'道具', py:'dàojù', pos:'Danh từ', vn:'đạo cụ', hv:'đạo cụ', em:'🎩', lesson:1,
   explain:['Các đồ vật dùng khi biểu diễn trên sân khấu hoặc khi quay phim (bàn ghế, dao kiếm giả, đèn…).'],
   usage:'准备道具, 演出道具, 舞台道具. Lượng từ: 件 / 个.',
   collo:['准备道具', '演出道具', '舞台道具', '一件道具'],
   ex_zh:'我们要准备服装、化妆、道具、舞台美术。', ex_py:'Wǒmen yào zhǔnbèi fúzhuāng, huà zhuāng, dàojù, wǔtái měishù.', ex_vn:'Chúng ta phải chuẩn bị trang phục, hoá trang, đạo cụ, mỹ thuật sân khấu.',
   exList:[
     {zh:'我们要准备服装、化妆、道具、舞台美术。', py:'Wǒmen yào zhǔnbèi fúzhuāng, huà zhuāng, dàojù, wǔtái měishù.', vn:'Chúng ta phải chuẩn bị trang phục, hoá trang, đạo cụ, mỹ thuật sân khấu.'},
     {zh:'这把刀是道具，不是真的。', py:'Zhè bǎ dāo shì dàojù, bú shì zhēn de.', vn:'Con dao này là đạo cụ, không phải thật.'},
     {zh:'演出结束后，大家一起把道具收好了。', py:'Yǎnchū jiéshù hòu, dàjiā yìqǐ bǎ dàojù shōuhǎo le.', vn:'Buổi diễn kết thúc, mọi người cùng nhau cất gọn đạo cụ.'}
   ],
   colloFull:[
     {zh:'准备道具', py:'zhǔnbèi dàojù', vn:'chuẩn bị đạo cụ'},
     {zh:'演出道具', py:'yǎnchū dàojù', vn:'đạo cụ biểu diễn'},
     {zh:'舞台道具', py:'wǔtái dàojù', vn:'đạo cụ sân khấu'},
     {zh:'一件道具', py:'yí jiàn dàojù', vn:'một món đạo cụ'},
     {zh:'道具组', py:'dàojùzǔ', vn:'tổ đạo cụ'}
   ],
   patterns:[{s:'准备 / 收好 + 道具', m:'Chuẩn bị / cất gọn đạo cụ'}],
   checkList:[
     {promptLang:'vi', prompt:'Các bạn đã cất hết đạo cụ vào trong hòm.', answer:'同学们把道具都放进了箱子里。', answerPy:'Tóngxuémen bǎ dàojù dōu fàngjìnle xiāngzi li.', note:'把 + 道具 + 放进 + nơi chốn.', pair:'把'},
     {promptLang:'vi', prompt:'Những đạo cụ này là do chính tay chúng tôi làm.', answer:'这些道具是我们自己动手做的。', answerPy:'Zhèxiē dàojù shì wǒmen zìjǐ dòngshǒu zuò de.', note:'自己动手 = tự tay làm.', pair:'是……的'}
   ]},

  {n:11, zh:'美术', py:'měishù', pos:'Danh từ', vn:'mỹ thuật, nghệ thuật tạo hình', hv:'mỹ thuật', em:'🎨', lesson:1,
   explain:['Nghệ thuật tạo hình: hội hoạ, điêu khắc, thiết kế… Cũng chỉ môn vẽ ở trường.'],
   usage:'美术课, 美术馆, 美术老师, 舞台美术 (mỹ thuật sân khấu: cảnh trí, ánh sáng…).',
   collo:['舞台美术', '美术课', '美术馆', '美术老师'],
   ex_zh:'周末我们去美术馆看了一个画展。', ex_py:'Zhōumò wǒmen qù měishùguǎn kànle yí ge huàzhǎn.', ex_vn:'Cuối tuần chúng tôi đến bảo tàng mỹ thuật xem một triển lãm tranh.',
   exList:[
     {zh:'周末我们去美术馆看了一个画展。', py:'Zhōumò wǒmen qù měishùguǎn kànle yí ge huàzhǎn.', vn:'Cuối tuần chúng tôi đến bảo tàng mỹ thuật xem một triển lãm tranh.'},
     {zh:'舞台美术做得好，演出的效果也会更好。', py:'Wǔtái měishù zuò de hǎo, yǎnchū de xiàoguǒ yě huì gèng hǎo.', vn:'Mỹ thuật sân khấu làm tốt thì hiệu quả buổi diễn cũng tốt hơn.'},
     {zh:'我最喜欢上美术课。', py:'Wǒ zuì xǐhuan shàng měishù kè.', vn:'Tôi thích nhất tiết mỹ thuật.'}
   ],
   colloFull:[
     {zh:'舞台美术', py:'wǔtái měishù', vn:'mỹ thuật sân khấu'},
     {zh:'美术课', py:'měishù kè', vn:'tiết mỹ thuật'},
     {zh:'美术馆', py:'měishùguǎn', vn:'bảo tàng mỹ thuật'},
     {zh:'美术老师', py:'měishù lǎoshī', vn:'thầy cô dạy mỹ thuật'},
     {zh:'美术作品', py:'měishù zuòpǐn', vn:'tác phẩm mỹ thuật'}
   ],
   patterns:[{s:'美术 + 课 / 馆 / 老师 / 作品', m:'Tiết / bảo tàng / thầy cô / tác phẩm mỹ thuật'}],
   checkList:[
     {promptLang:'vi', prompt:'Bức tranh của cậu ấy được thầy mỹ thuật gửi đi dự thi.', answer:'他的画被美术老师送去参加比赛了。', answerPy:'Tā de huà bèi měishù lǎoshī sòngqù cānjiā bǐsài le.', note:'美术老师: thầy cô dạy mỹ thuật.', pair:'被'},
     {promptLang:'vi', prompt:'Cậu ấy không chỉ học giỏi, môn mỹ thuật cũng học rất tốt.', answer:'他不仅学习好，美术也学得很好。', answerPy:'Tā bùjǐn xuéxí hǎo, měishù yě xué de hěn hǎo.', note:'美术 làm chủ đề đứng trước 也.', pair:'不仅……也……'}
   ]},

  {n:12, zh:'以', py:'yǐ', pos:'Liên từ (cũng là giới từ)', vn:'để, nhằm; (giới từ) dùng, lấy, bằng', hv:'dĩ', em:'🔗', lesson:1,
   explain:['Liên từ (văn viết): đứng đầu vế sau, vế sau chỉ MỤC ĐÍCH của vế trước — "để, nhằm".', 'Giới từ (văn viết): "dùng, lấy, bằng" — 以 + N + V, khuôn 以……为…… (lấy … làm …).'],
   usage:'Vế 1 (hành động)，以 + V (mục đích). Giới từ: 以 + N + V / 以……为……. Việc cụ thể hằng ngày dùng 用 (用筷子吃饭).',
   collo:['以创造良好的效果', '以适应社会的发展', '以……为……', '以英文名'],
   ex_zh:'我们准备服装、道具，以创造良好的效果。', ex_py:'Wǒmen zhǔnbèi fúzhuāng, dàojù, yǐ chuàngzào liánghǎo de xiàoguǒ.', ex_vn:'Chúng ta chuẩn bị trang phục, đạo cụ, để tạo ra hiệu quả tốt.',
   exList:[
     {zh:'我们准备服装、道具，以创造良好的效果。', py:'Wǒmen zhǔnbèi fúzhuāng, dàojù, yǐ chuàngzào liánghǎo de xiàoguǒ.', vn:'Chúng ta chuẩn bị trang phục, đạo cụ, để tạo ra hiệu quả tốt.'},
     {zh:'虽然我们已经老了，但还要坚持学习，以适应社会的发展。', py:'Suīrán wǒmen yǐjīng lǎo le, dàn hái yào jiānchí xuéxí, yǐ shìyìng shèhuì de fāzhǎn.', vn:'Tuy chúng tôi đã già, nhưng vẫn phải kiên trì học tập để thích ứng với sự phát triển của xã hội.'},
     {zh:'同年4月，微信以英文名WeChat正式进入国际市场。', py:'Tóngnián sì yuè, Wēixìn yǐ Yīngwénmíng WeChat zhèngshì jìnrù guójì shìchǎng.', vn:'Tháng 4 cùng năm, Weixin chính thức bước vào thị trường quốc tế với tên tiếng Anh WeChat.'}
   ],
   colloFull:[
     {zh:'以创造良好的效果', py:'yǐ chuàngzào liánghǎo de xiàoguǒ', vn:'để tạo ra hiệu quả tốt'},
     {zh:'以适应社会的发展', py:'yǐ shìyìng shèhuì de fāzhǎn', vn:'để thích ứng với sự phát triển xã hội'},
     {zh:'以……为……', py:'yǐ……wéi……', vn:'lấy … làm …'},
     {zh:'以英文名', py:'yǐ Yīngwénmíng', vn:'với tên tiếng Anh'},
     {zh:'以足球为工具', py:'yǐ zúqiú wéi gōngjù', vn:'lấy quả bóng làm dụng cụ'}
   ],
   patterns:[{s:'Vế 1，以 + V (mục đích)', m:'…, để / nhằm … (liên từ, văn viết)'}, {s:'以 + N + 为 + N', m:'Lấy … làm … (giới từ)'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy rất bận nhưng ngày nào anh ấy cũng tập thể dục, để giữ gìn sức khoẻ.', answer:'虽然很忙，但是他每天都锻炼身体，以保持健康。', answerPy:'Suīrán hěn máng, dànshì tā měi tiān dōu duànliàn shēntǐ, yǐ bǎochí jiànkāng.', note:'以 đứng đầu vế sau, sau nó là động từ chỉ mục đích.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Chúng tôi đã đưa cuộc họp lên sớm một tiếng, để tiết kiệm thời gian cho mọi người.', answer:'我们把会议提前了一个小时，以节省大家的时间。', answerPy:'Wǒmen bǎ huìyì tíqiánle yí ge xiǎoshí, yǐ jiéshěng dàjiā de shíjiān.', note:'Vế trước là hành động, vế sau 以 + mục đích.', pair:'把'}
   ]},

  {n:13, zh:'良好', py:'liánghǎo', pos:'Tính từ', vn:'tốt đẹp, tốt', hv:'lương hảo', em:'👍', lesson:1,
   explain:['Tốt, đáng hài lòng — trang trọng, hay dùng trong văn viết, chủ yếu làm định ngữ.'],
   usage:'良好的 + 习惯 / 效果 / 关系 / 基础 / 环境. Cũng làm vị ngữ: 情况良好. Khẩu ngữ thường nói 好.',
   collo:['良好的效果', '良好的习惯', '良好的关系', '良好的基础'],
   ex_zh:'我们要养成良好的学习习惯。', ex_py:'Wǒmen yào yǎngchéng liánghǎo de xuéxí xíguàn.', ex_vn:'Chúng ta phải hình thành thói quen học tập tốt.',
   exList:[
     {zh:'我们要养成良好的学习习惯。', py:'Wǒmen yào yǎngchéng liánghǎo de xuéxí xíguàn.', vn:'Chúng ta phải hình thành thói quen học tập tốt.'},
     {zh:'为了创造良好的效果，大家准备了一个月。', py:'Wèile chuàngzào liánghǎo de xiàoguǒ, dàjiā zhǔnbèile yí ge yuè.', vn:'Để tạo ra hiệu quả tốt, mọi người đã chuẩn bị suốt một tháng.'},
     {zh:'医生说他手术后的情况良好。', py:'Yīshēng shuō tā shǒushù hòu de qíngkuàng liánghǎo.', vn:'Bác sĩ nói tình trạng của anh ấy sau phẫu thuật tốt.'}
   ],
   colloFull:[
     {zh:'良好的效果', py:'liánghǎo de xiàoguǒ', vn:'hiệu quả tốt'},
     {zh:'良好的习惯', py:'liánghǎo de xíguàn', vn:'thói quen tốt'},
     {zh:'良好的关系', py:'liánghǎo de guānxi', vn:'quan hệ tốt đẹp'},
     {zh:'良好的基础', py:'liánghǎo de jīchǔ', vn:'nền tảng tốt'},
     {zh:'情况良好', py:'qíngkuàng liánghǎo', vn:'tình trạng tốt'}
   ],
   patterns:[{s:'良好的 + 习惯 / 效果 / 关系', m:'Thói quen / hiệu quả / quan hệ tốt'}, {s:'养成 + 良好的习惯', m:'Hình thành thói quen tốt'}],
   checkList:[
     {promptLang:'vi', prompt:'Chỉ cần có thói quen tốt, sức khoẻ sẽ ngày càng tốt.', answer:'只要有良好的习惯，身体就会越来越好。', answerPy:'Zhǐyào yǒu liánghǎo de xíguàn, shēntǐ jiù huì yuè lái yuè hǎo.', note:'良好的 + 习惯: định ngữ trang trọng.', pair:'只要……就……'},
     {promptLang:'vi', prompt:'Hai công ty không chỉ có hợp tác, mà còn giữ quan hệ tốt đẹp.', answer:'两家公司不仅有合作，也保持着良好的关系。', answerPy:'Liǎng jiā gōngsī bùjǐn yǒu hézuò, yě bǎochízhe liánghǎo de guānxi.', note:'保持良好的关系 = giữ quan hệ tốt đẹp.', pair:'不仅……也……'}
   ]},

  {n:14, zh:'争取', py:'zhēngqǔ', pos:'Động từ', vn:'cố gắng, tranh thủ, giành', hv:'tranh thủ', em:'🏆', lesson:1,
   explain:['Nỗ lực để giành lấy (thời gian, cơ hội, thắng lợi), hoặc cố gắng để đạt được một mục tiêu.'],
   usage:'争取 + N (时间 / 机会 / 胜利 / 项目) hoặc 争取 + V (考好 / 准时到 / 提前结束).',
   collo:['争取时间', '争取机会', '争取胜利', '争取考好'],
   ex_zh:'机会要靠自己去争取。', ex_py:'Jīhuì yào kào zìjǐ qù zhēngqǔ.', ex_vn:'Cơ hội phải dựa vào chính mình giành lấy.',
   exList:[
     {zh:'机会要靠自己去争取。', py:'Jīhuì yào kào zìjǐ qù zhēngqǔ.', vn:'Cơ hội phải dựa vào chính mình giành lấy.'},
     {zh:'我们要争取给观众留下一个好的印象。', py:'Wǒmen yào zhēngqǔ gěi guānzhòng liúxià yí ge hǎo de yìnxiàng.', vn:'Chúng ta phải cố gắng để lại cho khán giả một ấn tượng tốt.'},
     {zh:'这次期末考试我一定争取考好。', py:'Zhè cì qīmò kǎoshì wǒ yídìng zhēngqǔ kǎohǎo.', vn:'Kỳ thi cuối kỳ lần này tôi nhất định cố gắng thi tốt.'}
   ],
   colloFull:[
     {zh:'争取时间', py:'zhēngqǔ shíjiān', vn:'tranh thủ thời gian'},
     {zh:'争取机会', py:'zhēngqǔ jīhuì', vn:'giành cơ hội'},
     {zh:'争取胜利', py:'zhēngqǔ shènglì', vn:'giành thắng lợi'},
     {zh:'争取考好', py:'zhēngqǔ kǎohǎo', vn:'cố gắng thi tốt'},
     {zh:'争取准时到', py:'zhēngqǔ zhǔnshí dào', vn:'cố gắng đến đúng giờ'}
   ],
   patterns:[{s:'争取 + N (时间 / 机会 / 胜利)', m:'Giành lấy …'}, {s:'争取 + V (考好 / 准时到 / 提前结束)', m:'Cố gắng để làm được …'}],
   checkList:[
     {promptLang:'vi', prompt:'Chỉ cần mọi người cố gắng, chúng ta sẽ giành được thắng lợi.', answer:'只要大家努力，我们就能争取到胜利。', answerPy:'Zhǐyào dàjiā nǔlì, wǒmen jiù néng zhēngqǔ dào shènglì.', note:'争取到 = giành được (bổ ngữ kết quả 到).', pair:'只要……就……'},
     {promptLang:'vi', prompt:'Cơ hội này là do chính cậu ấy giành được.', answer:'这个机会是他自己争取来的。', answerPy:'Zhège jīhuì shì tā zìjǐ zhēngqǔ lái de.', note:'争取来的 = giành về được.', pair:'是……的'}
   ]},

  {n:15, zh:'忽视', py:'hūshì', pos:'Động từ', vn:'xem nhẹ, không chú ý, bỏ qua', hv:'hốt thị', em:'🙈', lesson:1,
   explain:['Không chú ý tới, không coi trọng — nhấn vào việc KHÔNG NGHĨ TỚI; có thể vô ý, cũng có thể cố ý.'],
   usage:'忽视 + N (问题 / 细节 / 健康 / 交流); 被(人)忽视; 不能忽视. Gần nghĩa 轻视 (coi thường) — xem phần Phân biệt từ.',
   collo:['忽视细节', '忽视健康', '不能忽视', '被人忽视'],
   ex_zh:'我们常常忽视结束退场时的准备。', ex_py:'Wǒmen chángcháng hūshì jiéshù tuìchǎng shí de zhǔnbèi.', ex_vn:'Chúng ta thường xem nhẹ việc chuẩn bị cho lúc kết thúc rời sân khấu.',
   exList:[
     {zh:'我们常常忽视结束退场时的准备。', py:'Wǒmen chángcháng hūshì jiéshù tuìchǎng shí de zhǔnbèi.', vn:'Chúng ta thường xem nhẹ việc chuẩn bị cho lúc kết thúc rời sân khấu.'},
     {zh:'他忙得忽视了去医院看病。', py:'Tā máng de hūshìle qù yīyuàn kàn bìng.', vn:'Anh ấy bận đến mức quên cả việc đi viện khám bệnh.'},
     {zh:'这是最容易被人忽视的细节。', py:'Zhè shì zuì róngyì bèi rén hūshì de xìjié.', vn:'Đây là chi tiết dễ bị người ta bỏ qua nhất.'}
   ],
   colloFull:[
     {zh:'忽视细节', py:'hūshì xìjié', vn:'bỏ qua chi tiết'},
     {zh:'忽视健康', py:'hūshì jiànkāng', vn:'xem nhẹ sức khoẻ'},
     {zh:'不能忽视', py:'bù néng hūshì', vn:'không thể xem nhẹ'},
     {zh:'被人忽视', py:'bèi rén hūshì', vn:'bị người ta bỏ qua'},
     {zh:'忽视问题', py:'hūshì wèntí', vn:'xem nhẹ vấn đề'}
   ],
   patterns:[{s:'忽视 + N', m:'Xem nhẹ, bỏ qua cái gì'}, {s:'……被(人)忽视', m:'… bị (người ta) bỏ qua'}],
   checkList:[
     {promptLang:'vi', prompt:'Vấn đề sức khoẻ tâm lý của học sinh thường bị bỏ qua.', answer:'学生的心理健康问题常常被忽视。', answerPy:'Xuésheng de xīnlǐ jiànkāng wèntí chángcháng bèi hūshì.', note:'被 + 忽视: câu bị động không cần nêu người làm.', pair:'被'},
     {promptLang:'vi', prompt:'Cậu ấy mải chơi game, ngay cả sức khoẻ cũng bỏ bê.', answer:'他只顾玩游戏，连身体健康都忽视了。', answerPy:'Tā zhǐ gù wán yóuxì, lián shēntǐ jiànkāng dōu hūshì le.', note:'只顾 + V = chỉ mải làm gì.', pair:'连……都……'}
   ]},

  {n:16, zh:'魅力', py:'mèilì', pos:'Danh từ', vn:'sức hấp dẫn, sức cuốn hút', hv:'mị lực', em:'✨', lesson:1,
   explain:['Sức cuốn hút khiến người khác yêu thích (của người, nơi chốn, tác phẩm).'],
   usage:'有魅力 / 很有魅力 / 充满魅力 / 魅力十足; ……的魅力 (城市的魅力, 个人魅力).',
   collo:['很有魅力', '个人魅力', '充满魅力', '城市的魅力'],
   ex_zh:'演出开始时人们认为很有魅力。', ex_py:'Yǎnchū kāishǐ shí rénmen rènwéi hěn yǒu mèilì.', ex_vn:'Lúc buổi diễn bắt đầu, người ta thấy nó rất cuốn hút.',
   exList:[
     {zh:'演出开始时人们认为很有魅力。', py:'Yǎnchū kāishǐ shí rénmen rènwéi hěn yǒu mèilì.', vn:'Lúc buổi diễn bắt đầu, người ta thấy nó rất cuốn hút.'},
     {zh:'这位老师上课很有魅力，学生们都喜欢他。', py:'Zhè wèi lǎoshī shàngkè hěn yǒu mèilì, xuéshengmen dōu xǐhuan tā.', vn:'Thầy giáo này giảng bài rất cuốn hút, học sinh đều thích thầy.'},
     {zh:'河内的魅力在于它的老街和美食。', py:'Hénèi de mèilì zàiyú tā de lǎojiē hé měishí.', vn:'Sức hấp dẫn của Hà Nội nằm ở phố cổ và ẩm thực.'}
   ],
   colloFull:[
     {zh:'很有魅力', py:'hěn yǒu mèilì', vn:'rất có sức hút'},
     {zh:'个人魅力', py:'gèrén mèilì', vn:'sức hút cá nhân'},
     {zh:'充满魅力', py:'chōngmǎn mèilì', vn:'đầy sức hấp dẫn'},
     {zh:'城市的魅力', py:'chéngshì de mèilì', vn:'sức hấp dẫn của thành phố'},
     {zh:'魅力十足', py:'mèilì shízú', vn:'hấp dẫn vô cùng'}
   ],
   patterns:[{s:'Chủ ngữ + 很有 / 非常有 + 魅力', m:'Rất có sức hấp dẫn'}, {s:'……的魅力 + 在于……', m:'Sức hấp dẫn của … nằm ở …'}],
   checkList:[
     {promptLang:'vi', prompt:'Thành phố này ngày càng có sức hấp dẫn.', answer:'这座城市越来越有魅力了。', answerPy:'Zhè zuò chéngshì yuè lái yuè yǒu mèilì le.', note:'有魅力 dùng như một tính từ, đi sau 越来越.', pair:'越来越'},
     {promptLang:'vi', prompt:'Tuy cô ấy không xinh lắm, nhưng rất có sức hút.', answer:'虽然她长得不太漂亮，但是很有魅力。', answerPy:'Suīrán tā zhǎng de bú tài piàoliang, dànshì hěn yǒu mèilì.', note:'很有魅力: 很 + 有 + danh từ trừu tượng.', pair:'虽然……但是……'}
   ]},

  {n:17, zh:'糟糕', py:'zāogāo', pos:'Tính từ', vn:'tồi tệ, hỏng bét', hv:'tao cao', em:'😣', lesson:1,
   explain:['Rất tệ, rất xấu (tình hình, kết quả, thời tiết…).', 'Dùng một mình như câu cảm thán: 糟糕！= Chết rồi! Hỏng rồi!'],
   usage:'糟糕的 + N (结局 / 天气 / 成绩); 很 / 太 / 真 + 糟糕; 糟糕！(cảm thán khi chợt phát hiện chuyện không hay).',
   collo:['糟糕的结局', '天气很糟糕', '糟糕的成绩', '真糟糕'],
   ex_zh:'糟糕的结局会给人留下难以忘记的坏印象。', ex_py:'Zāogāo de jiéjú huì gěi rén liúxià nányǐ wàngjì de huài yìnxiàng.', ex_vn:'Một kết cục tồi tệ sẽ để lại cho người ta ấn tượng xấu khó quên.',
   exList:[
     {zh:'糟糕的结局会给人留下难以忘记的坏印象。', py:'Zāogāo de jiéjú huì gěi rén liúxià nányǐ wàngjì de huài yìnxiàng.', vn:'Một kết cục tồi tệ sẽ để lại cho người ta ấn tượng xấu khó quên.'},
     {zh:'糟糕！我把钥匙忘在家里了。', py:'Zāogāo! Wǒ bǎ yàoshi wàng zài jiā li le.', vn:'Chết rồi! Tớ để quên chìa khoá ở nhà rồi.'},
     {zh:'今天的天气真糟糕，又刮风又下雨。', py:'Jīntiān de tiānqì zhēn zāogāo, yòu guā fēng yòu xià yǔ.', vn:'Thời tiết hôm nay tệ quá, vừa gió vừa mưa.'}
   ],
   colloFull:[
     {zh:'糟糕的结局', py:'zāogāo de jiéjú', vn:'kết cục tồi tệ'},
     {zh:'天气很糟糕', py:'tiānqì hěn zāogāo', vn:'thời tiết rất tệ'},
     {zh:'糟糕的成绩', py:'zāogāo de chéngjì', vn:'thành tích tồi tệ'},
     {zh:'真糟糕', py:'zhēn zāogāo', vn:'tệ thật'},
     {zh:'越来越糟糕', py:'yuè lái yuè zāogāo', vn:'càng ngày càng tệ'}
   ],
   patterns:[{s:'糟糕的 + N', m:'… tồi tệ'}, {s:'糟糕！+ chuyện vừa phát hiện', m:'Chết rồi! (câu cảm thán)'}],
   checkList:[
     {promptLang:'vi', prompt:'Chết rồi! Điện thoại bị tớ làm rơi vỡ rồi.', answer:'糟糕！手机被我摔坏了。', answerPy:'Zāogāo! Shǒujī bèi wǒ shuāihuài le.', note:'糟糕！đứng một mình đầu câu = Chết rồi!', pair:'被'},
     {promptLang:'vi', prompt:'Tình hình càng ngày càng tệ.', answer:'情况越来越糟糕了。', answerPy:'Qíngkuàng yuè lái yuè zāogāo le.', note:'糟糕 làm vị ngữ sau 越来越.', pair:'越来越'}
   ]},

  {n:18, zh:'婚礼', py:'hūnlǐ', pos:'Danh từ', vn:'lễ cưới, đám cưới', hv:'hôn lễ', em:'💒', lesson:1,
   explain:['Nghi lễ kết hôn, đám cưới.'],
   usage:'参加婚礼, 举行婚礼, 婚礼上. Lượng từ: 场 / 个.',
   collo:['参加婚礼', '举行婚礼', '婚礼上', '一场婚礼'],
   ex_zh:'有一次，我去参加一个婚礼。', ex_py:'Yǒu yí cì, wǒ qù cānjiā yí ge hūnlǐ.', ex_vn:'Có một lần, tôi đi dự một đám cưới.',
   exList:[
     {zh:'有一次，我去参加一个婚礼。', py:'Yǒu yí cì, wǒ qù cānjiā yí ge hūnlǐ.', vn:'Có một lần, tôi đi dự một đám cưới.'},
     {zh:'他们打算明年春天举行婚礼。', py:'Tāmen dǎsuàn míngnián chūntiān jǔxíng hūnlǐ.', vn:'Họ định tổ chức lễ cưới vào mùa xuân năm sau.'},
     {zh:'婚礼上，新郎感动得流泪了。', py:'Hūnlǐ shang, xīnláng gǎndòng de liúlèi le.', vn:'Trong lễ cưới, chú rể xúc động đến rơi nước mắt.'}
   ],
   colloFull:[
     {zh:'参加婚礼', py:'cānjiā hūnlǐ', vn:'dự đám cưới'},
     {zh:'举行婚礼', py:'jǔxíng hūnlǐ', vn:'tổ chức lễ cưới'},
     {zh:'婚礼上', py:'hūnlǐ shang', vn:'trong lễ cưới'},
     {zh:'一场婚礼', py:'yì chǎng hūnlǐ', vn:'một đám cưới'},
     {zh:'婚礼主持人', py:'hūnlǐ zhǔchírén', vn:'MC đám cưới'}
   ],
   patterns:[{s:'参加 / 举行 + 婚礼', m:'Dự / tổ chức lễ cưới'}, {s:'在婚礼上 + V', m:'Làm gì trong lễ cưới'}],
   checkList:[
     {promptLang:'vi', prompt:'Lễ cưới của họ được tổ chức ở quê.', answer:'他们的婚礼是在老家举行的。', answerPy:'Tāmen de hūnlǐ shì zài lǎojiā jǔxíng de.', note:'举行婚礼 = tổ chức lễ cưới.', pair:'是……的'},
     {promptLang:'vi', prompt:'Tôi chưa từng dự đám cưới của người Trung Quốc.', answer:'我从来没参加过中国人的婚礼。', answerPy:'Wǒ cónglái méi cānjiāguo Zhōngguórén de hūnlǐ.', note:'Dự đám cưới là 参加婚礼, không phải 参观婚礼.', pair:'从来没……过'}
   ]},

  {n:19, zh:'等于', py:'děngyú', pos:'Động từ', vn:'bằng; coi như là', hv:'đẳng vu', em:'🟰', lesson:1,
   explain:['Bằng (trong phép tính): 三加五等于八.', 'Nghĩa rộng: coi như là, chẳng khác gì (你不说话就等于同意了).'],
   usage:'A + 等于 + B; 不等于 (không có nghĩa là); 等于 + V (= coi như đã…).',
   collo:['三加五等于八', '几乎等于', '不等于', '等于没说'],
   ex_zh:'三个小时快乐减一个小时无聊等于两个小时快乐。', ex_py:'Sān ge xiǎoshí kuàilè jiǎn yí ge xiǎoshí wúliáo děngyú liǎng ge xiǎoshí kuàilè.', ex_vn:'Ba tiếng vui trừ một tiếng chán bằng hai tiếng vui.',
   exList:[
     {zh:'三个小时快乐减一个小时无聊等于两个小时快乐。', py:'Sān ge xiǎoshí kuàilè jiǎn yí ge xiǎoshí wúliáo děngyú liǎng ge xiǎoshí kuàilè.', vn:'Ba tiếng vui trừ một tiếng chán bằng hai tiếng vui.'},
     {zh:'成绩好不等于能力强。', py:'Chéngjì hǎo bù děngyú nénglì qiáng.', vn:'Điểm cao không có nghĩa là năng lực giỏi.'},
     {zh:'你说了半天，等于没说。', py:'Nǐ shuōle bàntiān, děngyú méi shuō.', vn:'Cậu nói cả buổi mà coi như chưa nói gì.'}
   ],
   colloFull:[
     {zh:'三加五等于八', py:'sān jiā wǔ děngyú bā', vn:'ba cộng năm bằng tám'},
     {zh:'几乎等于', py:'jīhū děngyú', vn:'gần như bằng'},
     {zh:'不等于', py:'bù děngyú', vn:'không bằng; không có nghĩa là'},
     {zh:'等于没说', py:'děngyú méi shuō', vn:'coi như chưa nói'},
     {zh:'等于零', py:'děngyú líng', vn:'bằng không'}
   ],
   patterns:[{s:'A + 加 / 减 + B + 等于 + C', m:'A cộng / trừ B bằng C'}, {s:'A + 不等于 + B', m:'A không có nghĩa là B'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy anh ấy rất giàu, nhưng có tiền không có nghĩa là hạnh phúc.', answer:'虽然他很有钱，但是有钱不等于幸福。', answerPy:'Suīrán tā hěn yǒu qián, dànshì yǒu qián bù děngyú xìngfú.', note:'不等于 = không có nghĩa là.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Chỉ cần cậu không phản đối thì coi như đã đồng ý.', answer:'只要你不反对，就等于同意了。', answerPy:'Zhǐyào nǐ bù fǎnduì, jiù děngyú tóngyì le.', note:'等于 + V = coi như đã làm gì.', pair:'只要……就……'}
   ]},

  {n:20, zh:'度过', py:'dùguò', pos:'Động từ', vn:'trải qua', hv:'độ quá', em:'🗓️', lesson:1,
   explain:['Sống qua, trải qua một quãng thời gian (kỳ nghỉ, tuổi thơ, khó khăn…).'],
   usage:'度过 + khoảng thời gian (童年 / 假期 / 周末 / 难关). Tân ngữ phải là thời gian, không phải sự việc cụ thể (không nói 度过考试).',
   collo:['度过童年', '度过周末', '愉快地度过', '度过难关'],
   ex_zh:'我愉快地度过了两个小时。', ex_py:'Wǒ yúkuài de dùguòle liǎng ge xiǎoshí.', ex_vn:'Tôi đã trải qua hai tiếng đồng hồ vui vẻ.',
   exList:[
     {zh:'我愉快地度过了两个小时。', py:'Wǒ yúkuài de dùguòle liǎng ge xiǎoshí.', vn:'Tôi đã trải qua hai tiếng đồng hồ vui vẻ.'},
     {zh:'我在外公外婆身边度过了美好的童年。', py:'Wǒ zài wàigōng wàipó shēnbiān dùguòle měihǎo de tóngnián.', vn:'Tôi đã trải qua tuổi thơ tươi đẹp bên ông bà ngoại.'},
     {zh:'在大家的帮助下，他终于度过了难关。', py:'Zài dàjiā de bāngzhù xià, tā zhōngyú dùguòle nánguān.', vn:'Nhờ sự giúp đỡ của mọi người, cuối cùng anh ấy đã vượt qua cửa ải khó khăn.'}
   ],
   colloFull:[
     {zh:'度过童年', py:'dùguò tóngnián', vn:'trải qua tuổi thơ'},
     {zh:'度过周末', py:'dùguò zhōumò', vn:'trải qua cuối tuần'},
     {zh:'愉快地度过', py:'yúkuài de dùguò', vn:'trải qua một cách vui vẻ'},
     {zh:'度过难关', py:'dùguò nánguān', vn:'vượt qua khó khăn'},
     {zh:'度过假期', py:'dùguò jiàqī', vn:'trải qua kỳ nghỉ'}
   ],
   patterns:[{s:'(愉快地) + 度过 + (了) + khoảng thời gian', m:'Trải qua … (một cách vui vẻ)'}, {s:'在……身边 / 在……里 + 度过……', m:'Trải qua … ở đâu, bên ai'}],
   checkList:[
     {promptLang:'vi', prompt:'Kỳ nghỉ hè này tôi trải qua ở nhà bà ngoại.', answer:'这个暑假我是在姥姥家度过的。', answerPy:'Zhège shǔjià wǒ shì zài lǎolao jiā dùguò de.', note:'Tân ngữ thời gian (这个暑假) đưa lên đầu câu.', pair:'是……的'},
     {promptLang:'vi', prompt:'Tôi chưa từng trải qua một cái Tết vui như vậy.', answer:'我从来没度过这么快乐的春节。', answerPy:'Wǒ cónglái méi dùguò zhème kuàilè de Chūnjié.', note:'度过 đã chứa 过 (qua) — không thêm 过 lần nữa sau nó.', pair:'从来没……过'}
   ]},

  {n:21, zh:'告别', py:'gàobié', pos:'Động từ', vn:'tạm biệt, từ biệt', hv:'cáo biệt', em:'👋', lesson:1,
   explain:['Chào để rời đi; từ biệt ai, nơi nào (có thể là lâu dài).', 'Nghĩa bóng: rời bỏ, chấm dứt (告别过去).'],
   usage:'跟 / 向 + người + 告别; 告别 + nơi chốn / quá khứ (告别家乡, 告别过去).',
   collo:['跟朋友告别', '向大家告别', '告别过去', '早早地告别'],
   ex_zh:'只在那里待一个小时，早早地告别。', ex_py:'Zhǐ zài nàli dāi yí ge xiǎoshí, zǎozǎo de gàobié.', ex_vn:'Chỉ ở đó một tiếng rồi sớm chào ra về.',
   exList:[
     {zh:'只在那里待一个小时，早早地告别。', py:'Zhǐ zài nàli dāi yí ge xiǎoshí, zǎozǎo de gàobié.', vn:'Chỉ ở đó một tiếng rồi sớm chào ra về.'},
     {zh:'毕业那天，我们一一向老师告别。', py:'Bìyè nà tiān, wǒmen yīyī xiàng lǎoshī gàobié.', vn:'Hôm tốt nghiệp, chúng tôi lần lượt chào từ biệt thầy cô.'},
     {zh:'她告别了家乡，一个人去城里打工。', py:'Tā gàobiéle jiāxiāng, yí ge rén qù chéng li dǎgōng.', vn:'Cô ấy từ biệt quê hương, một mình lên thành phố làm thuê.'}
   ],
   colloFull:[
     {zh:'跟朋友告别', py:'gēn péngyou gàobié', vn:'chào tạm biệt bạn bè'},
     {zh:'向大家告别', py:'xiàng dàjiā gàobié', vn:'chào từ biệt mọi người'},
     {zh:'告别过去', py:'gàobié guòqù', vn:'từ bỏ quá khứ'},
     {zh:'早早地告别', py:'zǎozǎo de gàobié', vn:'sớm chào ra về'},
     {zh:'告别家乡', py:'gàobié jiāxiāng', vn:'từ biệt quê hương'}
   ],
   patterns:[{s:'跟 / 向 + người + 告别', m:'Chào từ biệt ai'}, {s:'告别 + 家乡 / 过去 / 童年', m:'Từ biệt, rời xa …'}],
   checkList:[
     {promptLang:'vi', prompt:'Anh ấy vừa chào tạm biệt mọi người xong là lên tàu ngay.', answer:'他跟大家一告别，就上了火车。', answerPy:'Tā gēn dàjiā yí gàobié, jiù shàngle huǒchē.', note:'跟 + người + 告别: người đứng trước 告别, không đứng sau.', pair:'一……就……'},
     {promptLang:'vi', prompt:'Chúng tôi chào từ biệt thầy giáo ở cổng trường.', answer:'我们是在校门口跟老师告别的。', answerPy:'Wǒmen shì zài xiào ménkǒu gēn lǎoshī gàobié de.', note:'在 + nơi chốn + 跟 + người + 告别.', pair:'是……的'}
   ]},

  {n:22, zh:'平常', py:'píngcháng', pos:'Tính từ / Danh từ', vn:'bình thường; ngày thường', hv:'bình thường', em:'☕', lesson:1,
   explain:['Tính từ: bình thường, không có gì đặc biệt (lặp lại: 平平常常).', 'Danh từ: ngày thường, lúc bình thường (= 平时).'],
   usage:'Tính từ: 很平常 / 不平常的日子 / 平平常常. Danh từ: 平常 + (总是 / 一般)……; 像平常一样.',
   collo:['平常的日子', '不平常的一天', '像平常一样', '平平常常'],
   ex_zh:'他平常总是来得很早，今天却迟到了。', ex_py:'Tā píngcháng zǒngshì lái de hěn zǎo, jīntiān què chídào le.', ex_vn:'Ngày thường anh ấy luôn đến rất sớm, hôm nay lại đến muộn.',
   exList:[
     {zh:'他平常总是来得很早，今天却迟到了。', py:'Tā píngcháng zǒngshì lái de hěn zǎo, jīntiān què chídào le.', vn:'Ngày thường anh ấy luôn đến rất sớm, hôm nay lại đến muộn.'},
     {zh:'对小王来说，今天是一个不平常的日子。', py:'Duì Xiǎo Wáng lái shuō, jīntiān shì yí ge bù píngcháng de rìzi.', vn:'Với Tiểu Vương, hôm nay là một ngày không bình thường.'},
     {zh:'一部电影，开始虽然剧情平平常常，如果最后半个小时能使我们感动，我们依然会向别人推荐它。', py:'Yí bù diànyǐng, kāishǐ suīrán jùqíng píngpíngchángcháng, rúguǒ zuìhòu bàn ge xiǎoshí néng shǐ wǒmen gǎndòng, wǒmen yīrán huì xiàng biérén tuījiàn tā.', vn:'Một bộ phim, lúc đầu tuy tình tiết bình bình, nếu nửa tiếng cuối làm ta cảm động, ta vẫn sẽ giới thiệu nó cho người khác.'}
   ],
   colloFull:[
     {zh:'平常的日子', py:'píngcháng de rìzi', vn:'ngày bình thường'},
     {zh:'不平常的一天', py:'bù píngcháng de yì tiān', vn:'một ngày không bình thường'},
     {zh:'像平常一样', py:'xiàng píngcháng yíyàng', vn:'như mọi ngày'},
     {zh:'平平常常', py:'píngpíngchángcháng', vn:'bình bình, thường thường'},
     {zh:'很平常', py:'hěn píngcháng', vn:'rất bình thường'}
   ],
   patterns:[{s:'很平常 / 不平常的 + N', m:'(Không) bình thường — tính từ'}, {s:'Chủ ngữ + 平常 + 总是 / 一般 + V', m:'Ngày thường … — danh từ, = 平时'}],
   checkList:[
     {promptLang:'vi', prompt:'Ngày thường cậu ấy ngay cả sách cũng không đọc, sao hôm nay lại đi thư viện?', answer:'他平常连书都不看，今天怎么去图书馆了？', answerPy:'Tā píngcháng lián shū dōu bú kàn, jīntiān zěnme qù túshūguǎn le?', note:'平常 (danh từ) làm trạng ngữ thời gian, đứng sau chủ ngữ.', pair:'连……都……'},
     {promptLang:'vi', prompt:'Tuy công việc này rất bình thường, nhưng cậu cũng phải làm cho tốt.', answer:'虽然这份工作很平常，但是你也要认真做好。', answerPy:'Suīrán zhè fèn gōngzuò hěn píngcháng, dànshì nǐ yě yào rènzhēn zuòhǎo.', note:'很平常: 平常 là tính từ, đi sau 很 (平时 không dùng được).', pair:'虽然……但是……'}
   ]},

  {n:23, zh:'依然', py:'yīrán', pos:'Phó từ', vn:'vẫn, vẫn như cũ', hv:'y nhiên', em:'🔁', lesson:1,
   explain:['Vẫn như trước, không thay đổi — trang trọng hơn 还是 / 仍然, hay dùng trong văn viết.'],
   usage:'Chủ ngữ + 依然 + V / Adj. Hay đi với 虽然 / 尽管 ở vế trước.',
   collo:['依然美丽', '依然记得', '依然没变', '依然会'],
   ex_zh:'十几年过去了，她依然那么美丽。', ex_py:'Shí jǐ nián guòqu le, tā yīrán nàme měilì.', ex_vn:'Mười mấy năm trôi qua, cô ấy vẫn đẹp như vậy.',
   exList:[
     {zh:'十几年过去了，她依然那么美丽。', py:'Shí jǐ nián guòqu le, tā yīrán nàme měilì.', vn:'Mười mấy năm trôi qua, cô ấy vẫn đẹp như vậy.'},
     {zh:'如果结尾很感人，我们依然会向别人推荐这部电影。', py:'Rúguǒ jiéwěi hěn gǎnrén, wǒmen yīrán huì xiàng biérén tuījiàn zhè bù diànyǐng.', vn:'Nếu phần kết cảm động, ta vẫn sẽ giới thiệu bộ phim này cho người khác.'},
     {zh:'毕业十年了，我依然记得老师说过的话。', py:'Bìyè shí nián le, wǒ yīrán jìde lǎoshī shuōguo de huà.', vn:'Tốt nghiệp mười năm rồi, tôi vẫn nhớ những lời thầy từng nói.'}
   ],
   colloFull:[
     {zh:'依然美丽', py:'yīrán měilì', vn:'vẫn xinh đẹp'},
     {zh:'依然记得', py:'yīrán jìde', vn:'vẫn nhớ'},
     {zh:'依然没变', py:'yīrán méi biàn', vn:'vẫn không thay đổi'},
     {zh:'依然会', py:'yīrán huì', vn:'vẫn sẽ'},
     {zh:'依然如故', py:'yīrán rúgù', vn:'vẫn như xưa'}
   ],
   patterns:[{s:'Chủ ngữ + 依然 + V / Adj', m:'… vẫn …'}, {s:'虽然 / 尽管……，Chủ ngữ + 依然……', m:'Tuy … nhưng vẫn …'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy đã thất bại nhiều lần, nhưng cậu ấy vẫn không bỏ cuộc.', answer:'虽然失败了很多次，但是他依然没有放弃。', answerPy:'Suīrán shībàile hěn duō cì, dànshì tā yīrán méiyǒu fàngqì.', note:'依然 đứng sau chủ ngữ, trước phần phủ định 没有.', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Bị bố mẹ phê bình xong, ngày nào cậu ấy vẫn chơi game.', answer:'被父母批评了以后，他依然每天玩游戏。', answerPy:'Bèi fùmǔ pīpíngle yǐhòu, tā yīrán měi tiān wán yóuxì.', note:'依然 đứng trước cả trạng ngữ 每天.', pair:'被'}
   ]},

  {n:24, zh:'推荐', py:'tuījiàn', pos:'Động từ', vn:'giới thiệu, tiến cử', hv:'suy tiến', em:'📣', lesson:1,
   explain:['Giới thiệu người / vật tốt cho người khác để họ dùng, chọn (sách, phim, món ăn, người vào vị trí nào đó).'],
   usage:'向 / 给 + người + 推荐 + cái gì; 推荐 + người + 当 / 做 / 参加…….',
   collo:['推荐一本书', '向别人推荐', '推荐工作', '值得推荐'],
   ex_zh:'我们依然会向别人推荐它。', ex_py:'Wǒmen yīrán huì xiàng biérén tuījiàn tā.', ex_vn:'Chúng ta vẫn sẽ giới thiệu nó cho người khác.',
   exList:[
     {zh:'我们依然会向别人推荐它。', py:'Wǒmen yīrán huì xiàng biérén tuījiàn tā.', vn:'Chúng ta vẫn sẽ giới thiệu nó cho người khác.'},
     {zh:'老刘刚给我推荐了一份工作。', py:'Lǎo Liú gāng gěi wǒ tuījiànle yí fèn gōngzuò.', vn:'Lão Lưu vừa giới thiệu cho tôi một công việc.'},
     {zh:'你能给我推荐几本适合高中生看的书吗？', py:'Nǐ néng gěi wǒ tuījiàn jǐ běn shìhé gāozhōngshēng kàn de shū ma?', vn:'Cậu có thể giới thiệu cho tớ vài cuốn sách hợp với học sinh cấp ba không?'}
   ],
   colloFull:[
     {zh:'推荐一本书', py:'tuījiàn yì běn shū', vn:'giới thiệu một cuốn sách'},
     {zh:'向别人推荐', py:'xiàng biérén tuījiàn', vn:'giới thiệu cho người khác'},
     {zh:'推荐工作', py:'tuījiàn gōngzuò', vn:'giới thiệu việc làm'},
     {zh:'值得推荐', py:'zhíde tuījiàn', vn:'đáng giới thiệu'},
     {zh:'推荐信', py:'tuījiànxìn', vn:'thư giới thiệu'}
   ],
   patterns:[{s:'向 / 给 + người + 推荐 + N', m:'Giới thiệu cái gì cho ai'}, {s:'推荐 + người + 当 / 参加……', m:'Tiến cử ai làm / tham gia …'}],
   checkList:[
     {promptLang:'vi', prompt:'Cậu ấy được thầy giáo tiến cử tham gia cuộc thi.', answer:'他被老师推荐参加比赛。', answerPy:'Tā bèi lǎoshī tuījiàn cānjiā bǐsài.', note:'被 + người + 推荐 + V: được ai tiến cử làm gì.', pair:'被'},
     {promptLang:'vi', prompt:'Bộ phim này là bạn tôi giới thiệu cho tôi.', answer:'这部电影是朋友推荐给我的。', answerPy:'Zhè bù diànyǐng shì péngyou tuījiàn gěi wǒ de.', note:'推荐给 + người: người nhận đứng sau 给.', pair:'是……的'}
   ]},

  {n:25, zh:'淋漓尽致', py:'línlí jìnzhì', pos:'Thành ngữ', vn:'tinh tế, triệt để; (thể hiện) trọn vẹn, hết mức', hv:'lâm li tận trí', em:'🎆', lesson:1,
   explain:['Nghĩa gốc: (văn chương, lời nói) diễn đạt tường tận, thấu đáo. Nay: thể hiện, phát huy một điều gì đến mức trọn vẹn nhất.'],
   usage:'Thường làm bổ ngữ: 表现 / 发挥 / 体现 + 得 + 淋漓尽致; hay đi với câu 把. Văn viết.',
   collo:['表现得淋漓尽致', '发挥得淋漓尽致', '体现得淋漓尽致'],
   ex_zh:'如果在前半个小时就把剧情的创造力表现得淋漓尽致，结尾却非常普通……', ex_py:'Rúguǒ zài qián bàn ge xiǎoshí jiù bǎ jùqíng de chuàngzàolì biǎoxiàn de línlí jìnzhì, jiéwěi què fēicháng pǔtōng……', ex_vn:'Nếu ngay nửa tiếng đầu đã thể hiện hết mức sức sáng tạo của tình tiết, mà phần kết lại rất tầm thường…',
   exList:[
     {zh:'如果在前半个小时就把剧情的创造力表现得淋漓尽致，结尾却非常普通……', py:'Rúguǒ zài qián bàn ge xiǎoshí jiù bǎ jùqíng de chuàngzàolì biǎoxiàn de línlí jìnzhì, jiéwěi què fēicháng pǔtōng……', vn:'Nếu ngay nửa tiếng đầu đã thể hiện hết mức sức sáng tạo của tình tiết, mà phần kết lại rất tầm thường…'},
     {zh:'比赛中，他把自己的水平发挥得淋漓尽致。', py:'Bǐsài zhōng, tā bǎ zìjǐ de shuǐpíng fāhuī de línlí jìnzhì.', vn:'Trong trận đấu, anh ấy phát huy trình độ của mình đến mức tối đa.'},
     {zh:'这首歌把思念家乡的感情表现得淋漓尽致。', py:'Zhè shǒu gē bǎ sīniàn jiāxiāng de gǎnqíng biǎoxiàn de línlí jìnzhì.', vn:'Bài hát này thể hiện trọn vẹn tình cảm nhớ quê hương.'}
   ],
   colloFull:[
     {zh:'表现得淋漓尽致', py:'biǎoxiàn de línlí jìnzhì', vn:'thể hiện trọn vẹn'},
     {zh:'发挥得淋漓尽致', py:'fāhuī de línlí jìnzhì', vn:'phát huy hết mức'},
     {zh:'体现得淋漓尽致', py:'tǐxiàn de línlí jìnzhì', vn:'thể hiện rõ nét nhất'},
     {zh:'描写得淋漓尽致', py:'miáoxiě de línlí jìnzhì', vn:'miêu tả thấu đáo'}
   ],
   patterns:[{s:'把 + N + 表现 / 发挥 + 得 + 淋漓尽致', m:'Thể hiện / phát huy cái gì đến mức trọn vẹn nhất'}],
   checkList:[
     {promptLang:'vi', prompt:'Cô ấy đã diễn nhân vật này một cách trọn vẹn nhất.', answer:'她把这个角色表演得淋漓尽致。', answerPy:'Tā bǎ zhège juésè biǎoyǎn de línlí jìnzhì.', note:'淋漓尽致 làm bổ ngữ sau 得.', pair:'把'},
     {promptLang:'vi', prompt:'Tài năng của cậu ấy được phát huy đến mức tối đa.', answer:'他的才能被发挥得淋漓尽致。', answerPy:'Tā de cáinéng bèi fāhuī de línlí jìnzhì.', note:'被 + V + 得 + 淋漓尽致.', pair:'被'}
   ]},

  {n:26, zh:'评价', py:'píngjià', pos:'Động từ / Danh từ', vn:'đánh giá; sự đánh giá', hv:'bình giá', em:'⭐', lesson:1,
   explain:['Động từ: nhận xét, đánh giá tốt xấu, cao thấp của người, vật.', 'Danh từ: lời nhận xét, sự đánh giá.'],
   usage:'Danh từ: 对……的评价 + 很高 / 不好. Động từ: 评价 + N. Phân biệt với 评 (被评为: được bình chọn là).',
   collo:['评价很高', '对……的评价', '得到好的评价', '客观地评价'],
   ex_zh:'观众对这部电影的评价肯定不好。', ex_py:'Guānzhòng duì zhè bù diànyǐng de píngjià kěndìng bù hǎo.', ex_vn:'Đánh giá của khán giả về bộ phim này chắc chắn không tốt.',
   exList:[
     {zh:'观众对这部电影的评价肯定不好。', py:'Guānzhòng duì zhè bù diànyǐng de píngjià kěndìng bù hǎo.', vn:'Đánh giá của khán giả về bộ phim này chắc chắn không tốt.'},
     {zh:'大家对这位新老师的评价都很高。', py:'Dàjiā duì zhè wèi xīn lǎoshī de píngjià dōu hěn gāo.', vn:'Mọi người đều đánh giá rất cao cô giáo mới này.'},
     {zh:'我们应该客观地评价一个人，不能只看他的成绩。', py:'Wǒmen yīnggāi kèguān de píngjià yí ge rén, bù néng zhǐ kàn tā de chéngjì.', vn:'Chúng ta nên đánh giá một người một cách khách quan, không thể chỉ nhìn thành tích.'}
   ],
   colloFull:[
     {zh:'评价很高', py:'píngjià hěn gāo', vn:'đánh giá rất cao'},
     {zh:'对……的评价', py:'duì……de píngjià', vn:'sự đánh giá về …'},
     {zh:'得到好的评价', py:'dédào hǎo de píngjià', vn:'được đánh giá tốt'},
     {zh:'客观地评价', py:'kèguān de píngjià', vn:'đánh giá khách quan'},
     {zh:'评价别人', py:'píngjià biérén', vn:'đánh giá người khác'}
   ],
   patterns:[{s:'A + 对 + B + 的评价 + 很高 / 不好', m:'A đánh giá B cao / không tốt'}, {s:'(客观地) + 评价 + N', m:'Đánh giá cái gì (một cách khách quan)'}],
   checkList:[
     {promptLang:'vi', prompt:'Tôi chưa từng đánh giá người khác qua vẻ bề ngoài.', answer:'我从来没用外表评价过别人。', answerPy:'Wǒ cónglái méi yòng wàibiǎo píngjiàguo biérén.', note:'用 + tiêu chí + 评价 + người.', pair:'从来没……过'},
     {promptLang:'vi', prompt:'Mọi người đánh giá cô ấy ngày càng cao.', answer:'大家对她的评价越来越高。', answerPy:'Dàjiā duì tā de píngjià yuè lái yuè gāo.', note:'对 + người + 的评价 + 高: 评价 làm danh từ.', pair:'越来越'}
   ]},

  {n:27, zh:'烂', py:'làn', pos:'Tính từ', vn:'dở, tệ; thối rữa, rách nát', hv:'lạn', em:'🍎', lesson:1,
   explain:['Thối, hỏng (hoa quả); rách nát (quần áo).', 'Khẩu ngữ: rất dở, rất tệ (烂片 = phim dở).', 'Làm bổ ngữ: nhừ, nát (煮烂, 摔烂).'],
   usage:'烂 + N (烂苹果 / 烂衣服 / 烂片); V + 烂 (煮烂 / 摔烂).',
   collo:['烂苹果', '烂衣服', '烂片', '煮烂'],
   ex_zh:'观众甚至会说这是一部“烂片”。', ex_py:'Guānzhòng shènzhì huì shuō zhè shì yí bù “lànpiàn”.', ex_vn:'Khán giả thậm chí sẽ bảo đây là một bộ “phim dở”.',
   exList:[
     {zh:'观众甚至会说这是一部“烂片”。', py:'Guānzhòng shènzhì huì shuō zhè shì yí bù “lànpiàn”.', vn:'Khán giả thậm chí sẽ bảo đây là một bộ “phim dở”.'},
     {zh:'这个苹果烂了，别吃了。', py:'Zhège píngguǒ làn le, bié chī le.', vn:'Quả táo này thối rồi, đừng ăn nữa.'},
     {zh:'牛肉要多煮一会儿，煮烂了才好吃。', py:'Niúròu yào duō zhǔ yíhuìr, zhǔlànle cái hǎochī.', vn:'Thịt bò phải nấu thêm một lúc, nấu nhừ mới ngon.'}
   ],
   colloFull:[
     {zh:'烂苹果', py:'làn píngguǒ', vn:'táo thối'},
     {zh:'烂衣服', py:'làn yīfu', vn:'quần áo rách'},
     {zh:'烂片', py:'lànpiàn', vn:'phim dở'},
     {zh:'煮烂', py:'zhǔlàn', vn:'nấu nhừ'},
     {zh:'摔烂', py:'shuāilàn', vn:'đánh rơi vỡ nát'}
   ],
   patterns:[{s:'烂 + N', m:'… thối / rách / dở'}, {s:'V + 烂', m:'Làm cho nát, nhừ (bổ ngữ kết quả)'}],
   checkList:[
     {promptLang:'vi', prompt:'Mẹ vứt hết chỗ táo thối đi rồi.', answer:'妈妈把烂苹果都扔了。', answerPy:'Māma bǎ làn píngguǒ dōu rēng le.', note:'烂 làm định ngữ trực tiếp: 烂苹果.', pair:'把'},
     {promptLang:'vi', prompt:'Cái áo này bị con chó cắn rách rồi.', answer:'这件衣服被小狗咬烂了。', answerPy:'Zhè jiàn yīfu bèi xiǎogǒu yǎolàn le.', note:'咬烂: động từ + bổ ngữ kết quả 烂.', pair:'被'}
   ]},

  {n:28, zh:'主持', py:'zhǔchí', pos:'Động từ / Danh từ', vn:'chủ trì, dẫn (chương trình); người chủ trì', hv:'chủ trì', em:'🎤', lesson:1,
   explain:['Phụ trách, điều khiển (cuộc họp, chương trình, công việc).', 'Danh từ (khẩu ngữ): người dẫn chương trình — thường nói 主持人.'],
   usage:'主持 + 会议 / 节目 / 工作 / 项目; 由 + người + 主持; 主持人 = MC, người dẫn chương trình.',
   collo:['主持会议', '主持工作', '主持项目', '节目主持人'],
   ex_zh:'作为电视节目主持人，我在工作中常常会运用“峰终定律”。', ex_py:'Zuòwéi diànshì jiémù zhǔchírén, wǒ zài gōngzuò zhōng chángcháng huì yùnyòng “Fēngzhōng Dìnglǜ”.', ex_vn:'Là người dẫn chương trình truyền hình, trong công việc tôi thường vận dụng “quy luật cao điểm – điểm cuối”.',
   exList:[
     {zh:'作为电视节目主持人，我在工作中常常会运用“峰终定律”。', py:'Zuòwéi diànshì jiémù zhǔchírén, wǒ zài gōngzuò zhōng chángcháng huì yùnyòng “Fēngzhōng Dìnglǜ”.', vn:'Là người dẫn chương trình truyền hình, trong công việc tôi thường vận dụng “quy luật cao điểm – điểm cuối”.'},
     {zh:'今天的会议由王经理主持。', py:'Jīntiān de huìyì yóu Wáng jīnglǐ zhǔchí.', vn:'Cuộc họp hôm nay do giám đốc Vương chủ trì.'},
     {zh:'这次晚会是两个学生主持的。', py:'Zhè cì wǎnhuì shì liǎng ge xuésheng zhǔchí de.', vn:'Buổi dạ hội lần này do hai học sinh dẫn chương trình.'}
   ],
   colloFull:[
     {zh:'主持会议', py:'zhǔchí huìyì', vn:'chủ trì cuộc họp'},
     {zh:'主持工作', py:'zhǔchí gōngzuò', vn:'phụ trách công việc'},
     {zh:'主持项目', py:'zhǔchí xiàngmù', vn:'chủ trì dự án'},
     {zh:'节目主持人', py:'jiémù zhǔchírén', vn:'người dẫn chương trình'},
     {zh:'主持婚礼', py:'zhǔchí hūnlǐ', vn:'dẫn lễ cưới'}
   ],
   patterns:[{s:'由 + người + 主持', m:'Do ai chủ trì'}, {s:'主持 + 会议 / 节目 / 项目', m:'Chủ trì cuộc họp / dẫn chương trình / chủ trì dự án'}],
   checkList:[
     {promptLang:'vi', prompt:'Đám cưới của chị tôi là do anh họ tôi dẫn.', answer:'我姐姐的婚礼是我表哥主持的。', answerPy:'Wǒ jiějie de hūnlǐ shì wǒ biǎogē zhǔchí de.', note:'主持婚礼 = dẫn chương trình lễ cưới.', pair:'是……的'},
     {promptLang:'vi', prompt:'Cậu ấy không chỉ học giỏi, mà cũng biết dẫn chương trình.', answer:'他不仅学习好，也会主持节目。', answerPy:'Tā bùjǐn xuéxí hǎo, yě huì zhǔchí jiémù.', note:'主持节目 = dẫn chương trình.', pair:'不仅……也……'}
   ]},

  {n:29, zh:'运用', py:'yùnyòng', pos:'Động từ', vn:'vận dụng, áp dụng', hv:'vận dụng', em:'🛠️', lesson:1,
   explain:['Đem kiến thức, phương pháp, kỹ năng… ra dùng vào thực tế.'],
   usage:'运用 + 知识 / 方法 / 理论; 正确 / 灵活 / 成功 / 科学 / 广泛 + (地) + 运用; 把……运用到…….',
   collo:['灵活地运用', '正确运用', '运用知识', '广泛运用'],
   ex_zh:'学知识不能死记硬背，要懂得灵活地运用。', ex_py:'Xué zhīshi bù néng sǐjì-yìngbèi, yào dǒngde línghuó de yùnyòng.', ex_vn:'Học kiến thức không được học vẹt, phải biết vận dụng linh hoạt.',
   exList:[
     {zh:'学知识不能死记硬背，要懂得灵活地运用。', py:'Xué zhīshi bù néng sǐjì-yìngbèi, yào dǒngde línghuó de yùnyòng.', vn:'Học kiến thức không được học vẹt, phải biết vận dụng linh hoạt.'},
     {zh:'我在工作中常常会运用“峰终定律”。', py:'Wǒ zài gōngzuò zhōng chángcháng huì yùnyòng “Fēngzhōng Dìnglǜ”.', vn:'Trong công việc tôi thường vận dụng “quy luật cao điểm – điểm cuối”.'},
     {zh:'这种新技术已经被广泛运用到生活中了。', py:'Zhè zhǒng xīn jìshù yǐjīng bèi guǎngfàn yùnyòng dào shēnghuó zhōng le.', vn:'Công nghệ mới này đã được ứng dụng rộng rãi vào cuộc sống.'}
   ],
   colloFull:[
     {zh:'灵活地运用', py:'línghuó de yùnyòng', vn:'vận dụng linh hoạt'},
     {zh:'正确运用', py:'zhèngquè yùnyòng', vn:'vận dụng đúng'},
     {zh:'运用知识', py:'yùnyòng zhīshi', vn:'vận dụng kiến thức'},
     {zh:'广泛运用', py:'guǎngfàn yùnyòng', vn:'ứng dụng rộng rãi'},
     {zh:'成功地运用', py:'chénggōng de yùnyòng', vn:'vận dụng thành công'}
   ],
   patterns:[{s:'灵活 / 正确 / 科学 + (地) + 运用 + N', m:'Vận dụng … một cách linh hoạt / đúng / khoa học'}, {s:'把 + N + 运用到 + lĩnh vực + 中', m:'Đem cái gì áp dụng vào …'}],
   checkList:[
     {promptLang:'vi', prompt:'Cậu ấy đem kiến thức học trên lớp áp dụng vào cuộc sống.', answer:'他把课上学的知识运用到了生活中。', answerPy:'Tā bǎ kè shang xué de zhīshi yùnyòng dàole shēnghuó zhōng.', note:'把 + N + 运用到 + ……中.', pair:'把'},
     {promptLang:'vi', prompt:'Chỉ cần vận dụng đúng phương pháp, học tiếng Trung sẽ không khó.', answer:'只要方法运用得对，学汉语就不难。', answerPy:'Zhǐyào fāngfǎ yùnyòng de duì, xué Hànyǔ jiù bù nán.', note:'运用得对: bổ ngữ trình độ sau 运用.', pair:'只要……就……'}
   ]},

  {n:30, zh:'开幕式', py:'kāimùshì', pos:'Danh từ', vn:'lễ khai mạc', hv:'khai mạc thức', em:'🎉', lesson:1,
   explain:['Nghi lễ mở đầu một sự kiện lớn (hội nghị, đại hội thể thao, liên hoan). Trái nghĩa: 闭幕式 (lễ bế mạc).'],
   usage:'举行开幕式, 参加开幕式, 奥运会开幕式. 开幕 (khai mạc) là động từ; 式 = nghi thức.',
   collo:['举行开幕式', '参加开幕式', '奥运会开幕式', '开幕式和闭幕式'],
   ex_zh:'与开幕式相比，我们宁可把更多的精力集中在闭幕式上。', ex_py:'Yǔ kāimùshì xiāngbǐ, wǒmen nìngkě bǎ gèng duō de jīnglì jízhōng zài bìmùshì shang.', ex_vn:'So với lễ khai mạc, chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc.',
   exList:[
     {zh:'与开幕式相比，我们宁可把更多的精力集中在闭幕式上。', py:'Yǔ kāimùshì xiāngbǐ, wǒmen nìngkě bǎ gèng duō de jīnglì jízhōng zài bìmùshì shang.', vn:'So với lễ khai mạc, chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc.'},
     {zh:'运动会的开幕式将在下周一举行。', py:'Yùndònghuì de kāimùshì jiāng zài xià zhōuyī jǔxíng.', vn:'Lễ khai mạc hội thao sẽ được tổ chức vào thứ hai tuần sau.'},
     {zh:'2008年北京奥运会的开幕式给全世界留下了深刻的印象。', py:'Èr líng líng bā nián Běijīng Àoyùnhuì de kāimùshì gěi quán shìjiè liúxiàle shēnkè de yìnxiàng.', vn:'Lễ khai mạc Olympic Bắc Kinh 2008 để lại ấn tượng sâu sắc cho cả thế giới.'}
   ],
   colloFull:[
     {zh:'举行开幕式', py:'jǔxíng kāimùshì', vn:'tổ chức lễ khai mạc'},
     {zh:'参加开幕式', py:'cānjiā kāimùshì', vn:'dự lễ khai mạc'},
     {zh:'奥运会开幕式', py:'Àoyùnhuì kāimùshì', vn:'lễ khai mạc Olympic'},
     {zh:'开幕式和闭幕式', py:'kāimùshì hé bìmùshì', vn:'lễ khai mạc và lễ bế mạc'},
     {zh:'开幕式上', py:'kāimùshì shang', vn:'tại lễ khai mạc'}
   ],
   patterns:[{s:'举行 / 参加 + 开幕式', m:'Tổ chức / dự lễ khai mạc'}, {s:'在开幕式上 + V', m:'Làm gì tại lễ khai mạc'}],
   checkList:[
     {promptLang:'vi', prompt:'Lễ khai mạc được tổ chức ở nhà thi đấu của trường.', answer:'开幕式是在学校体育馆举行的。', answerPy:'Kāimùshì shì zài xuéxiào tǐyùguǎn jǔxíng de.', note:'举行 + 开幕式; nhấn nơi chốn bằng 是……的.', pair:'是……的'},
     {promptLang:'vi', prompt:'Tôi chưa từng xem lễ khai mạc Olympic tại chỗ.', answer:'我从来没在现场看过奥运会的开幕式。', answerPy:'Wǒ cónglái méi zài xiànchǎng kànguo Àoyùnhuì de kāimùshì.', note:'在现场 = tại chỗ, trực tiếp.', pair:'从来没……过'}
   ]},

  {n:31, zh:'宁可', py:'nìngkě', pos:'Phó từ', vn:'thà rằng, thà', hv:'ninh khả', em:'⚖️', lesson:1,
   explain:['Sau khi so sánh hai khả năng (thường đều có mặt không hay), chọn cái có lợi hơn, mình chấp nhận được hơn.'],
   usage:'宁可 A，也要 B (thà chịu A để được B) · 宁可 A，也不 B (thà A chứ không B). 宁 đọc nìng (thanh 4).',
   collo:['宁可……也要……', '宁可……也不……', '宁可自己累一点儿', '宁可多花点儿钱'],
   ex_zh:'作为母亲，她宁可自己累一点儿，也不想委屈了孩子。', ex_py:'Zuòwéi mǔqīn, tā nìngkě zìjǐ lèi yìdiǎnr, yě bù xiǎng wěiqu le háizi.', ex_vn:'Là mẹ, cô ấy thà mình vất vả một chút, chứ không muốn để con thiệt thòi.',
   exList:[
     {zh:'作为母亲，她宁可自己累一点儿，也不想委屈了孩子。', py:'Zuòwéi mǔqīn, tā nìngkě zìjǐ lèi yìdiǎnr, yě bù xiǎng wěiqu le háizi.', vn:'Là mẹ, cô ấy thà mình vất vả một chút, chứ không muốn để con thiệt thòi.'},
     {zh:'我宁可多花点儿钱，也要买一个质量好点儿的。', py:'Wǒ nìngkě duō huā diǎnr qián, yě yào mǎi yí ge zhìliàng hǎo diǎnr de.', vn:'Tôi thà tốn thêm chút tiền, cũng phải mua cái chất lượng tốt hơn.'},
     {zh:'为什么大家宁可挤成一团，也不去没人的那边？', py:'Wèi shénme dàjiā nìngkě jǐ chéng yì tuán, yě bú qù méi rén de nà biān?', vn:'Sao mọi người thà chen thành một đám, chứ không sang phía không có ai?'}
   ],
   colloFull:[
     {zh:'宁可……也要……', py:'nìngkě……yě yào……', vn:'thà … cũng phải …'},
     {zh:'宁可……也不……', py:'nìngkě……yě bù……', vn:'thà … chứ không …'},
     {zh:'宁可自己累一点儿', py:'nìngkě zìjǐ lèi yìdiǎnr', vn:'thà mình mệt một chút'},
     {zh:'宁可多花点儿钱', py:'nìngkě duō huā diǎnr qián', vn:'thà tốn thêm chút tiền'}
   ],
   patterns:[{s:'宁可 + A，也要 + B', m:'Thà chịu A để đạt được B'}, {s:'宁可 + A，也不 + B', m:'Thà A chứ không B'}],
   checkList:[
     {promptLang:'vi', prompt:'Tôi thà ngủ muộn một chút cũng phải làm xong bài tập.', answer:'我宁可晚点儿睡，也要把作业做完。', answerPy:'Wǒ nìngkě wǎn diǎnr shuì, yě yào bǎ zuòyè zuòwán.', note:'宁可 + cái phải chịu，也要 + điều muốn đạt.', pair:'把'},
     {promptLang:'vi', prompt:'Cậu ấy thà bị bố mắng chứ không chịu nói dối.', answer:'他宁可被爸爸骂，也不愿意说谎。', answerPy:'Tā nìngkě bèi bàba mà, yě bú yuànyì shuōhuǎng.', note:'宁可 + A，也不 + B: thà A chứ không B.', pair:'被'}
   ]},

  {n:32, zh:'集中', py:'jízhōng', pos:'Động từ / Tính từ', vn:'tập trung; chăm chú', hv:'tập trung', em:'🎯', lesson:1,
   explain:['Động từ: dồn (người, vật, sức lực, sự chú ý) về một chỗ.', 'Tính từ: tập trung, không phân tán (注意力很集中).'],
   usage:'集中 + 注意力 / 精力; 集中 + 在…… / 到…… / 起来; 注意力 + (不) + 集中.',
   collo:['集中注意力', '集中精力', '集中在', '集中起来'],
   ex_zh:'你复习时要集中注意力，效果才会好。', ex_py:'Nǐ fùxí shí yào jízhōng zhùyìlì, xiàoguǒ cái huì hǎo.', ex_vn:'Khi ôn bài em phải tập trung chú ý, hiệu quả mới tốt.',
   exList:[
     {zh:'你复习时要集中注意力，效果才会好。', py:'Nǐ fùxí shí yào jízhōng zhùyìlì, xiàoguǒ cái huì hǎo.', vn:'Khi ôn bài em phải tập trung chú ý, hiệu quả mới tốt.'},
     {zh:'我们宁可把更多的精力集中在闭幕式上。', py:'Wǒmen nìngkě bǎ gèng duō de jīnglì jízhōng zài bìmùshì shang.', vn:'Chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc.'},
     {zh:'晚上睡得太少，第二天上课注意力就不集中。', py:'Wǎnshang shuì de tài shǎo, dì-èr tiān shàngkè zhùyìlì jiù bù jízhōng.', vn:'Tối ngủ quá ít thì hôm sau lên lớp không tập trung được.'}
   ],
   colloFull:[
     {zh:'集中注意力', py:'jízhōng zhùyìlì', vn:'tập trung chú ý'},
     {zh:'集中精力', py:'jízhōng jīnglì', vn:'dồn tâm sức'},
     {zh:'集中在', py:'jízhōng zài', vn:'tập trung vào'},
     {zh:'集中起来', py:'jízhōng qilai', vn:'gom lại một chỗ'},
     {zh:'注意力不集中', py:'zhùyìlì bù jízhōng', vn:'không tập trung'}
   ],
   patterns:[{s:'把 + N + 集中 + 在 / 到 + ……', m:'Dồn cái gì vào …'}, {s:'注意力 + (很 / 不) + 集中', m:'(Không) tập trung — tính từ'}],
   checkList:[
     {promptLang:'vi', prompt:'Thầy giáo tập trung tất cả học sinh ở sân trường.', answer:'老师把所有的学生都集中到了操场上。', answerPy:'Lǎoshī bǎ suǒyǒu de xuésheng dōu jízhōng dàole cāochǎng shang.', note:'集中到 + nơi chốn.', pair:'把'},
     {promptLang:'vi', prompt:'Tôi hễ nghe nhạc là không tập trung được.', answer:'我一听音乐，注意力就不集中了。', answerPy:'Wǒ yì tīng yīnyuè, zhùyìlì jiù bù jízhōng le.', note:'集中 làm tính từ, phủ định bằng 不.', pair:'一……就……'}
   ]},

  {n:33, zh:'体会', py:'tǐhuì', pos:'Động từ / Danh từ', vn:'hiểu rõ, thấm thía; điều cảm nhận, nhận thức', hv:'thể hội', em:'💡', lesson:1,
   explain:['Động từ: hiểu sâu nhờ trải nghiệm của chính mình.', 'Danh từ: điều mình hiểu ra, cảm nhận có được qua trải nghiệm.'],
   usage:'体会 + 到 / 出 / 一下; 体会 + N (重要性, 心情, 辛苦); Danh từ: 最大的体会 / 深有体会.',
   collo:['体会到', '体会一下', '最大的体会', '深有体会'],
   ex_zh:'他们能从经验中体会这种做法的重要性。', ex_py:'Tāmen néng cóng jīngyàn zhōng tǐhuì zhè zhǒng zuòfǎ de zhòngyàoxìng.', ex_vn:'Họ có thể từ kinh nghiệm mà thấm thía tầm quan trọng của cách làm này.',
   exList:[
     {zh:'他们能从经验中体会这种做法的重要性。', py:'Tāmen néng cóng jīngyàn zhōng tǐhuì zhè zhǒng zuòfǎ de zhòngyàoxìng.', vn:'Họ có thể từ kinh nghiệm mà thấm thía tầm quan trọng của cách làm này.'},
     {zh:'我刚开始学滑雪的时候，最大的体会就是要放松。', py:'Wǒ gāng kāishǐ xué huáxuě de shíhou, zuì dà de tǐhuì jiù shì yào fàngsōng.', vn:'Lúc tôi mới học trượt tuyết, điều thấm thía nhất là phải thả lỏng.'},
     {zh:'当了父母以后，才能体会到父母的辛苦。', py:'Dāngle fùmǔ yǐhòu, cái néng tǐhuì dào fùmǔ de xīnkǔ.', vn:'Làm cha mẹ rồi mới hiểu được nỗi vất vả của cha mẹ.'}
   ],
   colloFull:[
     {zh:'体会到', py:'tǐhuì dào', vn:'hiểu ra được, thấm được'},
     {zh:'体会一下', py:'tǐhuì yíxià', vn:'trải nghiệm thử, cảm nhận thử'},
     {zh:'最大的体会', py:'zuì dà de tǐhuì', vn:'điều thấm thía nhất'},
     {zh:'深有体会', py:'shēn yǒu tǐhuì', vn:'thấm thía sâu sắc'},
     {zh:'体会出', py:'tǐhuì chū', vn:'nhận ra'}
   ],
   patterns:[{s:'体会 + 到 / 出 + N', m:'Hiểu ra, thấm được …'}, {s:'最大的体会 + 是 / 就是……', m:'Điều thấm thía nhất là …'}],
   checkList:[
     {promptLang:'vi', prompt:'Từ khi xa nhà, tôi càng ngày càng thấm thía hơi ấm gia đình.', answer:'离开家以后，我越来越体会到家的温暖。', answerPy:'Líkāi jiā yǐhòu, wǒ yuè lái yuè tǐhuì dào jiā de wēnnuǎn.', note:'体会到 + điều cảm nhận (ôn 温暖 — bài 2).', pair:'越来越'},
     {promptLang:'vi', prompt:'Trước đây tôi chưa từng thấm thía nỗi vất vả của việc kiếm tiền.', answer:'以前我从来没体会过挣钱的辛苦。', answerPy:'Yǐqián wǒ cónglái méi tǐhuìguo zhèng qián de xīnkǔ.', note:'体会过: 过 đứng ngay sau 体会 (ôn 挣 — bài 2).', pair:'从来没……过'}
   ]},

  {n:34, zh:'诺贝尔奖', py:'Nuòbèi’ěr Jiǎng', pos:'Danh từ riêng', vn:'giải Nô-ben', hv:'Nặc Bối Nhĩ tưởng', em:'🏅', lesson:1,
   explain:['Giải thưởng quốc tế mang tên nhà khoa học Thuỵ Điển Alfred Nobel, trao hằng năm cho các lĩnh vực vật lý, hoá học, y học, văn học, hoà bình và kinh tế.'],
   usage:'获得 / 得到 + 诺贝尔奖; 诺贝尔 + 文学奖 / 物理学奖 / 经济学奖.',
   collo:['获得诺贝尔奖', '诺贝尔文学奖', '诺贝尔奖得主'],
   ex_zh:'因为这个认知而获得诺贝尔奖的，是心理学家丹尼尔·卡内曼。', ex_py:'Yīnwèi zhège rènzhī ér huòdé Nuòbèi’ěr Jiǎng de, shì xīnlǐxuéjiā Dānní’ěr Kǎnèimàn.', ex_vn:'Người nhờ nhận thức này mà đoạt giải Nô-ben là nhà tâm lý học Daniel Kahneman.',
   exList:[
     {zh:'因为这个认知而获得诺贝尔奖的，是心理学家丹尼尔·卡内曼。', py:'Yīnwèi zhège rènzhī ér huòdé Nuòbèi’ěr Jiǎng de, shì xīnlǐxuéjiā Dānní’ěr Kǎnèimàn.', vn:'Người nhờ nhận thức này mà đoạt giải Nô-ben là nhà tâm lý học Daniel Kahneman.'},
     {zh:'2012年，中国作家莫言获得了诺贝尔文学奖。', py:'Èr líng yī èr nián, Zhōngguó zuòjiā Mò Yán huòdéle Nuòbèi’ěr wénxué jiǎng.', vn:'Năm 2012, nhà văn Trung Quốc Mạc Ngôn đoạt giải Nô-ben văn học.'}
   ],
   colloFull:[
     {zh:'获得诺贝尔奖', py:'huòdé Nuòbèi’ěr Jiǎng', vn:'đoạt giải Nô-ben'},
     {zh:'诺贝尔文学奖', py:'Nuòbèi’ěr wénxué jiǎng', vn:'giải Nô-ben văn học'},
     {zh:'诺贝尔奖得主', py:'Nuòbèi’ěr Jiǎng dézhǔ', vn:'người đoạt giải Nô-ben'}
   ],
   patterns:[{s:'获得 + 诺贝尔 + (lĩnh vực) + 奖', m:'Đoạt giải Nô-ben (ngành …)'}],
   checkList:[
     {promptLang:'vi', prompt:'Ông ấy đoạt giải Nô-ben vào năm 2002 (nhấn thời gian).', answer:'他是2002年获得诺贝尔奖的。', answerPy:'Tā shì èr líng líng èr nián huòdé Nuòbèi’ěr Jiǎng de.', note:'获得 + 诺贝尔奖: đoạt giải.', pair:'是……的'},
     {promptLang:'vi', prompt:'Người đoạt giải Nô-ben không phải bà tôi, mà là một nhà tâm lý học.', answer:'获得诺贝尔奖的不是我奶奶，而是一位心理学家。', answerPy:'Huòdé Nuòbèi’ěr Jiǎng de bú shì wǒ nǎinai, ér shì yí wèi xīnlǐxuéjiā.', note:'Cấu trúc 的-tự làm chủ ngữ: 获得诺贝尔奖的 (người đoạt giải).', pair:'不是……而是……'}
   ]},

  {n:35, zh:'丹尼尔·卡内曼', py:'Dānní’ěr Kǎnèimàn', pos:'Danh từ riêng', vn:'Daniel Kahneman', hv:'Đan Ni Nhĩ · Tạp Nội Mạn', em:'🧠', lesson:1,
   explain:['Nhà tâm lý học người Mỹ gốc Israel (1934–2024), đoạt giải Nô-ben kinh tế năm 2002; người đưa ra “quy luật cao điểm – điểm cuối”.'],
   usage:'Tên người nước ngoài phiên âm: giữa tên và họ có dấu chấm giữa (·). Gọi tắt theo họ: 卡内曼.',
   collo:['心理学家丹尼尔·卡内曼', '卡内曼提出', '卡内曼的研究'],
   ex_zh:'心理学家丹尼尔·卡内曼将这一现象命名为“峰终定律”。', ex_py:'Xīnlǐxuéjiā Dānní’ěr Kǎnèimàn jiāng zhè yí xiànxiàng mìngmíng wéi “Fēngzhōng Dìnglǜ”.', ex_vn:'Nhà tâm lý học Daniel Kahneman gọi hiện tượng này là “quy luật cao điểm – điểm cuối”.',
   exList:[
     {zh:'心理学家丹尼尔·卡内曼将这一现象命名为“峰终定律”。', py:'Xīnlǐxuéjiā Dānní’ěr Kǎnèimàn jiāng zhè yí xiànxiàng mìngmíng wéi “Fēngzhōng Dìnglǜ”.', vn:'Nhà tâm lý học Daniel Kahneman gọi hiện tượng này là “quy luật cao điểm – điểm cuối”.'},
     {zh:'丹尼尔·卡内曼是第一位获得诺贝尔经济学奖的心理学家。', py:'Dānní’ěr Kǎnèimàn shì dì-yī wèi huòdé Nuòbèi’ěr jīngjìxué jiǎng de xīnlǐxuéjiā.', vn:'Daniel Kahneman là nhà tâm lý học đầu tiên đoạt giải Nô-ben kinh tế.'}
   ],
   colloFull:[
     {zh:'心理学家丹尼尔·卡内曼', py:'xīnlǐxuéjiā Dānní’ěr Kǎnèimàn', vn:'nhà tâm lý học Daniel Kahneman'},
     {zh:'卡内曼提出', py:'Kǎnèimàn tíchū', vn:'Kahneman đưa ra'},
     {zh:'卡内曼的研究', py:'Kǎnèimàn de yánjiū', vn:'nghiên cứu của Kahneman'}
   ],
   patterns:[{s:'Chức danh + tên riêng (心理学家丹尼尔·卡内曼)', m:'Chức danh đứng TRƯỚC tên riêng — ngược với "Daniel Kahneman, nhà tâm lý học"'}],
   checkList:[
     {promptLang:'vi', prompt:'Quy luật này là do Kahneman đưa ra.', answer:'这个定律是卡内曼提出来的。', answerPy:'Zhège dìnglǜ shì Kǎnèimàn tí chulai de.', note:'提出(来) = đưa ra (quan điểm, quy luật).', pair:'是……的'},
     {promptLang:'vi', prompt:'Kahneman không chỉ là nhà tâm lý học, mà cũng nghiên cứu kinh tế học.', answer:'卡内曼不仅是心理学家，也研究经济学。', answerPy:'Kǎnèimàn bùjǐn shì xīnlǐxuéjiā, yě yánjiū jīngjìxué.', note:'Gọi tắt theo họ: 卡内曼.', pair:'不仅……也……'}
   ]},

  {n:36, zh:'峰终定律', py:'Fēngzhōng Dìnglǜ', pos:'Danh từ riêng', vn:'Quy luật cao điểm – điểm cuối (Peak–end rule)', hv:'phong chung định luật', em:'📈', lesson:1,
   explain:['Quy luật tâm lý: ta nhớ một trải nghiệm chủ yếu qua khoảnh khắc CAO ĐIỂM (峰) và lúc KẾT THÚC (终); quá trình ở giữa hầu như không ảnh hưởng tới trí nhớ.'],
   usage:'运用 / 了解 / 理解 + 峰终定律; 根据峰终定律，……. 峰 = 高峰, 终 = 终点, 定律 = định luật.',
   collo:['运用峰终定律', '了解峰终定律', '理解峰终定律'],
   ex_zh:'他将这一现象命名为“峰终定律”。', ex_py:'Tā jiāng zhè yí xiànxiàng mìngmíng wéi “Fēngzhōng Dìnglǜ”.', ex_vn:'Ông gọi hiện tượng này là “quy luật cao điểm – điểm cuối”.',
   exList:[
     {zh:'他将这一现象命名为“峰终定律”。', py:'Tā jiāng zhè yí xiànxiàng mìngmíng wéi “Fēngzhōng Dìnglǜ”.', vn:'Ông gọi hiện tượng này là “quy luật cao điểm – điểm cuối”.'},
     {zh:'根据峰终定律，一次旅行最后一天的心情最重要。', py:'Gēnjù Fēngzhōng Dìnglǜ, yí cì lǚxíng zuìhòu yì tiān de xīnqíng zuì zhòngyào.', vn:'Theo quy luật cao điểm – điểm cuối, tâm trạng ngày cuối của một chuyến đi là quan trọng nhất.'}
   ],
   colloFull:[
     {zh:'运用峰终定律', py:'yùnyòng Fēngzhōng Dìnglǜ', vn:'vận dụng quy luật cao điểm – điểm cuối'},
     {zh:'了解峰终定律', py:'liǎojiě Fēngzhōng Dìnglǜ', vn:'hiểu biết về quy luật này'},
     {zh:'理解峰终定律', py:'lǐjiě Fēngzhōng Dìnglǜ', vn:'hiểu quy luật này'},
     {zh:'根据峰终定律', py:'gēnjù Fēngzhōng Dìnglǜ', vn:'theo quy luật cao điểm – điểm cuối'}
   ],
   patterns:[{s:'根据 + 峰终定律，……', m:'Theo quy luật cao điểm – điểm cuối, …'}],
   checkList:[
     {promptLang:'vi', prompt:'Tuy nhiều người không biết quy luật cao điểm – điểm cuối, nhưng họ thường vận dụng nó trong cuộc sống.', answer:'虽然很多人不了解峰终定律，但是他们常常在生活中运用它。', answerPy:'Suīrán hěn duō rén bù liǎojiě Fēngzhōng Dìnglǜ, dànshì tāmen chángcháng zài shēnghuó zhōng yùnyòng tā.', note:'运用 + 峰终定律 (ôn 运用 cùng bài).', pair:'虽然……但是……'},
     {promptLang:'vi', prompt:'Theo quy luật cao điểm – điểm cuối, chỉ cần kết thúc tốt đẹp, khách hàng sẽ nhớ mãi.', answer:'根据峰终定律，只要结尾美好，顾客就会一直记得。', answerPy:'Gēnjù Fēngzhōng Dìnglǜ, zhǐyào jiéwěi měihǎo, gùkè jiù huì yìzhí jìde.', note:'根据……，…… đứng đầu câu.', pair:'只要……就……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 (tr. 154–156) — mỗi đoạn văn một dòng
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 在最美好的时刻离开',
  preQuiz:[
    {q:'奶奶说，人们应该在什么时候离开？',opts:['最美好的时候','最无聊的时候','最累的时候'],ans:0},
    {q:'因为这个认知而获得诺贝尔奖的是谁？',opts:['作者的奶奶','一位电视节目主持人','心理学家丹尼尔·卡内曼'],ans:2},
    {q:'根据“峰终定律”，我们对事物的记忆主要在哪儿？',opts:['事情的开始和经过','高峰和结尾','事情的经过'],ans:1},
    {q:'高峰之后，终点出现得越迅速，会怎么样？',opts:['留给我们的印象就越深刻','留给我们的印象就越模糊','事情就越糟糕'],ans:0},
    {q:'为了一场戏剧演出，人们常常忽视什么？',opts:['准备服装和道具','结束退场时的准备','舞台美术'],ans:1},
    {q:'糟糕的结局会给人留下什么？',opts:['很有魅力的印象','什么印象也没有','难以忘记的坏印象'],ans:2},
    {q:'在那个婚礼上，作者什么时候感到无聊？',opts:['最后一个小时','前三个小时','整个婚礼'],ans:0},
    {q:'哪一次聚会留给作者的印象更美好？',opts:['第一次，因为时间更长','第二次，只待一个小时就早早地告别','两次完全一样'],ans:1},
    {q:'一部电影开始很平常，最后半个小时很感人，观众会怎么做？',opts:['说这是一部“烂片”','再也不看电影了','依然会向别人推荐它'],ans:2},
    {q:'什么样的电影会被观众说成“烂片”？',opts:['开头精彩、结尾普通的电影','开头平常、结尾感人的电影','时间很短的电影'],ans:0},
    {q:'作者是做什么工作的？',opts:['心理学家','电视节目主持人','演员'],ans:1},
    {q:'做节目时，作者他们把更多的精力集中在哪儿？',opts:['开幕式上','节目中间','闭幕式上'],ans:2},
    {q:'很多人不了解“峰终定律”，但是他们能怎么样？',opts:['从经验中体会这种做法的重要性','在书上学到这个定律','完全不在乎结尾'],ans:0}
  ],
  lines:[
    {sp:0,zh:'我奶奶说过：“人们应该在最美好的时候离开。”因为这个认知而获得诺贝尔奖的，不是我奶奶，而是心理学家丹尼尔·卡内曼。他将这一现象命名为“峰终定律”：我们对事物的记忆仅在高峰和结尾，而事情的经过对记忆几乎没有影响。高峰之后，终点出现得越迅速，这件事留给我们的印象就越深刻。',
     py:'Wǒ nǎinai shuōguo: “Rénmen yīnggāi zài zuì měihǎo de shíhou líkāi.” Yīnwèi zhège rènzhī ér huòdé Nuòbèi’ěr Jiǎng de, bú shì wǒ nǎinai, ér shì xīnlǐxuéjiā Dānní’ěr·Kǎnèimàn. Tā jiāng zhè yí xiànxiàng mìngmíng wéi “Fēngzhōng Dìnglǜ”: wǒmen duì shìwù de jìyì jǐn zài gāofēng hé jiéwěi, ér shìqing de jīngguò duì jìyì jīhū méiyǒu yǐngxiǎng. Gāofēng zhīhòu, zhōngdiǎn chūxiàn de yuè xùnsù, zhè jiàn shì liú gěi wǒmen de yìnxiàng jiù yuè shēnkè.',
     vn:'Bà tôi từng nói: “Con người nên rời đi vào lúc tốt đẹp nhất.” Người nhờ nhận thức này mà đoạt giải Nô-ben không phải bà tôi, mà là nhà tâm lý học Daniel Kahneman. Ông gọi hiện tượng này là “quy luật cao điểm – điểm cuối”: trí nhớ của chúng ta về sự vật chỉ đọng lại ở đỉnh cao và phần kết, còn quá trình diễn ra sự việc hầu như không ảnh hưởng gì tới trí nhớ. Sau đỉnh cao, điểm kết thúc đến càng nhanh thì ấn tượng mà việc đó để lại cho ta càng sâu sắc.'},
    {sp:0,zh:'大部分人不理解这一定律。比如说为了一场戏剧演出，我们会投入很多时间，准备服装、化妆、道具、舞台美术，以创造良好的效果，争取给观众留下一个好的印象，却常常忽视结束退场时的准备。演出开始时人们认为很有魅力，但是糟糕的结局会给人留下难以忘记的坏印象。',
     py:'Dà bùfen rén bù lǐjiě zhè yí dìnglǜ. Bǐrú shuō wèile yì chǎng xìjù yǎnchū, wǒmen huì tóurù hěn duō shíjiān, zhǔnbèi fúzhuāng, huà zhuāng, dàojù, wǔtái měishù, yǐ chuàngzào liánghǎo de xiàoguǒ, zhēngqǔ gěi guānzhòng liúxià yí ge hǎo de yìnxiàng, què chángcháng hūshì jiéshù tuìchǎng shí de zhǔnbèi. Yǎnchū kāishǐ shí rénmen rènwéi hěn yǒu mèilì, dànshì zāogāo de jiéjú huì gěi rén liúxià nányǐ wàngjì de huài yìnxiàng.',
     vn:'Phần lớn mọi người không hiểu quy luật này. Chẳng hạn, vì một buổi diễn kịch, chúng ta bỏ ra rất nhiều thời gian chuẩn bị trang phục, hoá trang, đạo cụ, mỹ thuật sân khấu, để tạo ra hiệu quả tốt, cố gắng để lại cho khán giả một ấn tượng đẹp, nhưng lại thường xem nhẹ việc chuẩn bị cho lúc kết thúc, rời sân khấu. Lúc buổi diễn bắt đầu, người ta thấy rất cuốn hút, nhưng một cái kết tồi tệ sẽ để lại cho người xem ấn tượng xấu khó quên.'},
    {sp:0,zh:'有一次，我去参加一个婚礼，前三个小时感觉都很好，只在最后一个小时感到无聊。三个小时快乐减一个小时无聊等于两个小时快乐，也就是说，我愉快地度过了两个小时。但是，我的记忆并不是这样计算的。如果我参加另外一次活动，只在那里待一个小时，早早地告别，我却享受了满满60分钟的快乐。与第一次相比，第二次的聚会留给我的印象更为美好。',
     py:'Yǒu yí cì, wǒ qù cānjiā yí ge hūnlǐ, qián sān ge xiǎoshí gǎnjué dōu hěn hǎo, zhǐ zài zuìhòu yí ge xiǎoshí gǎndào wúliáo. Sān ge xiǎoshí kuàilè jiǎn yí ge xiǎoshí wúliáo děngyú liǎng ge xiǎoshí kuàilè, yě jiù shì shuō, wǒ yúkuài de dùguòle liǎng ge xiǎoshí. Dànshì, wǒ de jìyì bìng bú shì zhèyàng jìsuàn de. Rúguǒ wǒ cānjiā lìngwài yí cì huódòng, zhǐ zài nàli dāi yí ge xiǎoshí, zǎozǎo de gàobié, wǒ què xiǎngshòule mǎnmǎn liùshí fēnzhōng de kuàilè. Yǔ dì-yī cì xiāngbǐ, dì-èr cì de jùhuì liú gěi wǒ de yìnxiàng gèng wéi měihǎo.',
     vn:'Có một lần, tôi đi dự một đám cưới, ba tiếng đầu cảm thấy đều rất vui, chỉ đến tiếng cuối cùng mới thấy chán. Ba tiếng vui trừ một tiếng chán bằng hai tiếng vui, nghĩa là tôi đã trải qua hai tiếng đồng hồ vui vẻ. Thế nhưng trí nhớ của tôi lại không tính như vậy. Nếu tôi dự một hoạt động khác, chỉ ở đó một tiếng rồi sớm chào ra về, thì tôi lại được tận hưởng trọn vẹn 60 phút vui vẻ. So với lần đầu, buổi tụ họp lần thứ hai để lại cho tôi ấn tượng đẹp hơn.'},
    {sp:0,zh:'看电影也是如此。一部电影，开始虽然剧情平平常常，如果最后半个小时能使我们感动，我们依然会向别人推荐它。相反，如果在前半个小时就把剧情的创造力表现得淋漓尽致，结尾却非常普通，那么，观众对这部电影的评价就肯定不好，甚至会说这是一部“烂片”。',
     py:'Kàn diànyǐng yě shì rúcǐ. Yí bù diànyǐng, kāishǐ suīrán jùqíng píngpíngchángcháng, rúguǒ zuìhòu bàn ge xiǎoshí néng shǐ wǒmen gǎndòng, wǒmen yīrán huì xiàng biérén tuījiàn tā. Xiāngfǎn, rúguǒ zài qián bàn ge xiǎoshí jiù bǎ jùqíng de chuàngzàolì biǎoxiàn de línlí jìnzhì, jiéwěi què fēicháng pǔtōng, nàme, guānzhòng duì zhè bù diànyǐng de píngjià jiù kěndìng bù hǎo, shènzhì huì shuō zhè shì yí bù “lànpiàn”.',
     vn:'Xem phim cũng vậy. Một bộ phim, lúc đầu tuy tình tiết bình bình, nhưng nếu nửa tiếng cuối làm ta cảm động, ta vẫn sẽ giới thiệu nó cho người khác. Ngược lại, nếu ngay nửa tiếng đầu đã phô hết sức sáng tạo của cốt truyện, mà phần kết lại rất tầm thường, thì khán giả chắc chắn sẽ đánh giá bộ phim không tốt, thậm chí còn bảo đây là một bộ “phim dở”.'},
    {sp:0,zh:'作为电视节目主持人，我在工作中常常会运用“峰终定律”。例如，做节目时，与开幕式相比，我们宁可把更多的精力集中在闭幕式上，这样可以加强观众对节目的印象。虽然很多人并不了解“峰终定律”，但是，他们能从经验中体会这种做法的重要性。',
     py:'Zuòwéi diànshì jiémù zhǔchírén, wǒ zài gōngzuò zhōng chángcháng huì yùnyòng “Fēngzhōng Dìnglǜ”. Lìrú, zuò jiémù shí, yǔ kāimùshì xiāngbǐ, wǒmen nìngkě bǎ gèng duō de jīnglì jízhōng zài bìmùshì shang, zhèyàng kěyǐ jiāqiáng guānzhòng duì jiémù de yìnxiàng. Suīrán hěn duō rén bìng bù liǎojiě “Fēngzhōng Dìnglǜ”, dànshì, tāmen néng cóng jīngyàn zhōng tǐhuì zhè zhǒng zuòfǎ de zhòngyàoxìng.',
     vn:'Là người dẫn chương trình truyền hình, trong công việc tôi thường vận dụng “quy luật cao điểm – điểm cuối”. Ví dụ, khi làm chương trình, so với lễ khai mạc, chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc, như vậy sẽ làm khán giả nhớ chương trình sâu hơn. Tuy nhiều người không hề biết đến “quy luật cao điểm – điểm cuối”, nhưng họ có thể qua kinh nghiệm mà thấm thía tầm quan trọng của cách làm này.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — 忽视/轻视 lấy từ sách (tr. 158–159)
// + 平常/平时, 深刻/深 (lấy từ bài tập 2 của sách, tr. 159)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'忽视 — 轻视',
   same:'Đều là động từ, đều có nghĩa KHÔNG CHÚ Ý, KHÔNG COI TRỌNG; có câu thay nhau được, nhưng ý nhấn mạnh khác nhau.',
   sameEx:{zh:'他只注重理论，忽视／轻视实践，所以失败了。',vn:'Anh ấy chỉ chú trọng lý thuyết, xem nhẹ thực tiễn, nên đã thất bại.'},
   items:[
     {word:'忽视',points:[
       'Nhấn mạnh KHÔNG NGHĨ TỚI, không để ý tới.',
       'Thái độ có thể VÔ Ý, cũng có thể cố ý.',
       'Kết hợp: 忽视细节 / 忽视健康 / 忽视问题 / 忽视交流.'
     ],ex:[{zh:'他忙得忽视了去医院看病。',vn:'Anh ấy bận đến mức quên cả việc đi viện khám bệnh.'},
          {zh:'我们常常忽视结束退场时的准备。',vn:'Chúng ta thường xem nhẹ việc chuẩn bị cho lúc kết thúc, rời sân khấu.'}]},
     {word:'轻视',points:[
       'Nhấn mạnh COI THƯỜNG, xem không ra gì (看不起).',
       'Thái độ thường là CỐ Ý, có lựa chọn.',
       'Kết hợp: 轻视别人 / 轻视对手 / 不能轻视.'
     ],ex:[{zh:'你可别轻视他，他看起来很平常，其实很能干。',vn:'Cậu đừng coi thường anh ta, trông thì bình thường nhưng thật ra rất giỏi.'},
          {zh:'虽然这是一次小考，你也不能轻视，要好好复习。',vn:'Tuy đây chỉ là bài kiểm tra nhỏ, em cũng không được coi nhẹ, phải ôn cho tốt.'}]}
   ],
   quiz:[
     {sentence:'以前我们＿＿了教育问题，现在要赶上去。',options:['忽视','轻视'],answer:0,
      why:'Trước đây KHÔNG CHÚ Ý tới vấn đề giáo dục (không phải coi thường nó) → 忽视 (câu mẫu của sách).'},
     {sentence:'我们过多地看电视、玩手机，＿＿了家人之间的交流。',options:['忽视','轻视'],answer:0,
      why:'Mải xem TV, chơi điện thoại nên vô ý bỏ quên việc trò chuyện → 忽视 (vô ý).'},
     {sentence:'虽然这是一份平常的工作，你也不能＿＿，要认真做好。',options:['忽视','轻视'],answer:1,
      why:'Vì công việc "bình thường" mà coi thường nó → 轻视 (cố ý, xem không ra gì).'},
     {sentence:'你不要因为他是小孩子就＿＿他。',options:['忽视','轻视'],answer:1,
      why:'"Vì nó là trẻ con" mà coi thường → 轻视 (看不起, có lựa chọn).'}
   ],
   sgk:{
     chung:{t:'都表示不注意、不重视，在有些句子里可以换用，但强调的意思不同。',vn:'Đều chỉ sự không chú ý, không coi trọng; có câu dùng thay nhau được, nhưng ý nhấn mạnh khác nhau.',vd:'他只注重理论，忽视／轻视实践，所以失败了。',vdVn:'Anh ấy chỉ chú trọng lý thuyết, xem nhẹ thực tiễn, nên đã thất bại.'},
     khac:[
       {a:{t:'强调没有考虑到。',vn:'Nhấn mạnh việc không nghĩ tới.',vd:'他忙得忽视了去医院看病。',vdVn:'Anh ấy bận đến mức quên cả việc đi viện khám bệnh.'},
        b:{t:'强调看不起。',vn:'Nhấn mạnh sự coi thường.',vd:'你可别轻视他，他看起来很平常，其实很能干。',vdVn:'Cậu đừng coi thường anh ta, trông thì bình thường nhưng thật ra rất giỏi.'}},
       {a:{t:'态度上可能是无意的，也可能是有意的。',vn:'Về thái độ, có thể là vô ý, cũng có thể là cố ý.',vd:'我们常常忽视结束退场时的准备，演出开始时人们认为很有魅力，但是糟糕的结局会给人留下难以忘记的坏印象。',vdVn:'Chúng ta thường xem nhẹ việc chuẩn bị cho lúc kết thúc, rời sân khấu; lúc buổi diễn bắt đầu người ta thấy rất cuốn hút, nhưng cái kết tồi tệ sẽ để lại ấn tượng xấu khó quên.'},
        b:{t:'态度上一般是有意的或有选择性的。',vn:'Về thái độ, thường là cố ý hoặc có lựa chọn.',vd:'虽然这是一次小考，你也不能轻视，要好好复习。',vdVn:'Tuy đây chỉ là bài kiểm tra nhỏ, em cũng không được coi nhẹ, phải ôn cho tốt.'}}
     ],
     lamThu:[
       {s:'以前我们＿＿了教育问题，现在要赶上去。',dap:[true,false],mau:true,
        giai:'Không chú ý tới vấn đề giáo dục → 忽视 (câu mẫu của sách).'},
       {s:'我们过多地看电视、玩手机，＿＿了家人之间的交流。',dap:[true,false],
        giai:'Vô ý bỏ quên việc trò chuyện trong gia đình → 忽视.'},
       {s:'虽然这是一份平常的工作，你也不能＿＿，要认真做好。',dap:[false,true],
        giai:'Coi thường công việc vì nó bình thường → 轻视.'},
       {s:'你不要因为他是小孩子就＿＿他。',dap:[false,true],
        giai:'Coi thường người khác vì họ là trẻ con → 轻视 (看不起).'}
     ]
   }},

  {pair:'平常 — 平时',
   same:'Khi là DANH TỪ, cả hai đều có nghĩa "ngày thường, lúc bình thường", làm trạng ngữ thời gian.',
   sameEx:{zh:'他平常／平时总是来得很早，今天却迟到了。',vn:'Ngày thường anh ấy luôn đến rất sớm, hôm nay lại đến muộn.'},
   items:[
     {word:'平常',points:[
       'Vừa là DANH TỪ (ngày thường), vừa là TÍNH TỪ (bình thường, tầm thường).',
       'Làm tính từ: 很平常 / 不平常的日子 / 平平常常.',
       'Làm danh từ: 平常 + 总是 / 一般……; 像平常一样.'
     ],ex:[{zh:'这部电影很平常，我觉得没必要去看。',vn:'Bộ phim này rất bình thường, tôi thấy không cần đi xem.'},
          {zh:'对小王来说，今天是一个不平常的日子。',vn:'Với Tiểu Vương, hôm nay là một ngày không bình thường.'}]},
     {word:'平时',points:[
       'Chỉ là DANH TỪ: ngày thường, lúc thường (đối lập với dịp đặc biệt, lúc thi…).',
       'KHÔNG đứng sau 很 / 不, không làm định ngữ kiểu 平时的工作 với nghĩa "tầm thường".',
       'Rất hay gặp: 平时多练习 / 跟平时一样.'
     ],ex:[{zh:'平时多练习，考试前就不用这么紧张了。',vn:'Ngày thường luyện tập nhiều thì trước kỳ thi không cần căng thẳng thế.'},
          {zh:'他今天跟平时一样，七点就到了学校。',vn:'Hôm nay cậu ấy cũng như mọi ngày, bảy giờ đã đến trường.'}]}
   ],
   quiz:[
     {sentence:'这部电影很＿＿，我觉得没必要去看。',options:['平常','平时'],answer:0,
      why:'Đứng sau 很, nghĩa "bình thường, tầm thường" → chỉ 平常 (tính từ). 平时 là danh từ, không đi sau 很.'},
     {sentence:'＿＿多练习，考试前就不用这么紧张了。',options:['平常','平时'],answer:1,both:true,
      why:'Nghĩa "ngày thường" (danh từ) — cả hai đều đúng; 平时 hay dùng hơn khi đối lập với lúc thi.'},
     {sentence:'对小王来说，今天是一个不＿＿的日子。',options:['平常','平时'],answer:0,
      why:'不平常的日子 = ngày không bình thường → tính từ 平常. Không nói 不平时.'},
     {sentence:'对待这些孩子，要像＿＿一样。',options:['平常','平时'],answer:1,both:true,
      why:'像……一样 + danh từ thời gian → 像平常一样 / 像平时一样 đều được.'}
   ]},

  {pair:'深刻 — 深',
   same:'Đều có nghĩa "sâu"; khi nói về ẤN TƯỢNG, cả hai đều dùng được: 印象很深 / 印象很深刻.',
   sameEx:{zh:'他说的那句话，我印象很深／很深刻。',vn:'Câu anh ấy nói, tôi nhớ rất sâu.'},
   items:[
     {word:'深刻',points:[
       'Chỉ nghĩa TRỪU TƯỢNG: ấn tượng, đạo lý, nhận thức, ý nghĩa sâu sắc.',
       'Hai âm tiết, làm định ngữ trực tiếp: 深刻的印象 / 深刻的道理.',
       'Không dùng cho độ sâu vật lý (không nói 水很深刻).'
     ],ex:[{zh:'这次旅行给我留下了深刻的印象。',vn:'Chuyến đi này để lại cho tôi ấn tượng sâu sắc.'},
          {zh:'这个故事告诉了我们一个深刻的道理。',vn:'Câu chuyện này cho ta một bài học sâu sắc.'}]},
     {word:'深',points:[
       'Nghĩa CỤ THỂ (nước sâu, rừng sâu) và cả trừu tượng (印象很深, 感情很深).',
       'Một âm tiết: làm định ngữ phải có 很: 很深的印象 — không nói 深的印象.',
       'Còn chỉ màu đậm: 深蓝色.'
     ],ex:[{zh:'这条河很深，孩子们不能下去游泳。',vn:'Con sông này rất sâu, bọn trẻ không được xuống bơi.'},
          {zh:'他们俩的感情很深。',vn:'Tình cảm của hai người rất sâu nặng.'}]}
   ],
   quiz:[
     {sentence:'这次旅行给我留下了＿＿的印象。',options:['深','深刻'],answer:1,
      why:'Định ngữ trực tiếp + 的 → 深刻的印象. 深 phải thêm 很: 很深的印象 (bài tập 2 của sách).'},
     {sentence:'这条河很＿＿，孩子们不能下去游泳。',options:['深','深刻'],answer:0,
      why:'Độ sâu vật lý của nước → chỉ 深.'},
     {sentence:'这个故事告诉了我们一个＿＿的道理。',options:['深','深刻'],answer:1,
      why:'Đạo lý sâu sắc (trừu tượng) → 深刻的道理.'},
     {sentence:'奶奶说过的那句话，我印象特别＿＿。',options:['深','深刻'],answer:0,both:true,
      why:'Làm vị ngữ cho 印象 — 印象很深 / 印象很深刻 đều đúng.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'事物',hv:'sự vật',vn:'sự vật',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'戏剧',hv:'hí kịch',vn:'kịch, sân khấu',note:'"Hí" như "hí viện" (nhà hát), "kịch" như "kịch nói".'},
    {zh:'服装',hv:'phục trang',vn:'trang phục',note:'Đảo trật tự so với tiếng Việt: 服装 = phục trang = trang phục.'},
    {zh:'化妆',hv:'hoá trang',vn:'trang điểm, hoá trang',note:'Tiếng Việt "hoá trang" hẹp hơn (biểu diễn); 化妆 còn là trang điểm hằng ngày.'},
    {zh:'道具',hv:'đạo cụ',vn:'đạo cụ',note:'Trùng khít.'},
    {zh:'美术',hv:'mỹ thuật',vn:'mỹ thuật',note:'Trùng khít — 美术课 = tiết mỹ thuật.'},
    {zh:'婚礼',hv:'hôn lễ',vn:'lễ cưới',note:'Tiếng Việt cũng nói "hôn lễ" trong văn trang trọng.'},
    {zh:'主持',hv:'chủ trì',vn:'chủ trì, dẫn chương trình',note:'主持人 = người dẫn chương trình, MC.'},
    {zh:'运用',hv:'vận dụng',vn:'vận dụng',note:'Trùng khít.'},
    {zh:'开幕式',hv:'khai mạc thức',vn:'lễ khai mạc',note:'"Thức" = nghi thức, lễ. Trái nghĩa: 闭幕式 (bế mạc thức).'},
    {zh:'集中',hv:'tập trung',vn:'tập trung',note:'Trùng khít — 集中注意力 = tập trung chú ý.'},
    {zh:'深刻',hv:'thâm khắc',vn:'sâu sắc',note:'"Thâm" = sâu (thâm sâu), "khắc" = khắc vào → khắc sâu.'}
  ],
  idiom:[
    {zh:'淋漓尽致',hv:'lâm li tận trí',vn:'trọn vẹn, hết mức',note:'"Tận" = hết, "trí" = đến nơi → bày tỏ đến tận cùng. Chú ý: không phải "lâm li bi đát" của tiếng Việt!'},
    {zh:'峰终定律',hv:'phong chung định luật',vn:'quy luật cao điểm – điểm cuối',note:'峰 = 高峰 (đỉnh), 终 = 终点 (điểm cuối). Nhớ tên là nhớ luôn nội dung.'},
    {zh:'依然',hv:'y nhiên',vn:'vẫn, vẫn như cũ',note:'"Y" như "y nguyên", "y như cũ" → vẫn như trước.'},
    {zh:'宁可',hv:'ninh khả',vn:'thà, thà rằng',note:'Tiếng Việt cổ có "ninh khả" = thà rằng. Đi cặp: 宁可……也要 / 也不…….'},
    {zh:'死记硬背',hv:'tử ký ngạnh bối',vn:'học vẹt',note:'"Tử" = chết (cứng nhắc), "bối" = đọc thuộc lòng → học thuộc lòng máy móc.'}
  ],
  trap:[
    {zh:'争取',hv:'tranh thủ',vn:'cố gắng giành lấy',
     warn:'BẪY: tiếng Việt "tranh thủ" = tận dụng lúc rảnh (tranh thủ ăn cơm). 争取 = PHẤN ĐẤU GIÀNH LẤY: 争取机会, 争取考好.'},
    {zh:'烂',hv:'lạn',vn:'thối, nát, dở',
     warn:'Đừng nhầm với "xán lạn" (灿烂 = rực rỡ). 烂 đứng một mình là THỐI, NÁT, DỞ: 烂苹果, 烂片.'},
    {zh:'投入',hv:'đầu nhập',vn:'bỏ vào; say sưa',
     warn:'Không có nghĩa "đầu hàng" hay "nhập khẩu". 投入 = bỏ (thời gian, tiền) vào; tính từ = nhập tâm: 唱得很投入.'},
    {zh:'评价',hv:'bình giá',vn:'đánh giá',
     warn:'"Giá" ở đây không phải giá tiền! 评价 = nhận xét, đánh giá: 评价很高. Định giá tiền là 估价.'},
    {zh:'良好',hv:'lương hảo',vn:'tốt',
     warn:'"Lương" ở đây là "tốt" (lương thiện), không liên quan tiền lương (工资). 良好 = tốt, trang trọng.'},
    {zh:'体会',hv:'thể hội',vn:'thấm thía, cảm nhận',
     warn:'Không liên quan "hội họp". 体会 = tự mình trải qua mà hiểu ra: 体会到父母的辛苦.'},
    {zh:'魅力',hv:'mị lực',vn:'sức hấp dẫn',
     warn:'"Mị" tiếng Việt gợi nghĩa xấu (mê hoặc), nhưng 魅力 là KHEN: 很有魅力 = rất cuốn hút.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy theo bảng 词语搭配 của sách (tr. 158) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'争取',right:'胜利'},
  {left:'主持',right:'会议'},
  {left:'深刻的',right:'道理'},
  {left:'烂',right:'苹果'},
  {left:'迅速地',right:'做出反应'},
  {left:'灵活地',right:'运用'},
  {left:'集中',right:'注意力'},
  {left:'体会',right:'父母的辛苦'},
  {left:'举行',right:'婚礼'},
  {left:'投入',right:'资金'},
  {left:'舞台',right:'美术'},
  {left:'良好的',right:'习惯'},
  {left:'糟糕的',right:'结局'},
  {left:'愉快地',right:'度过周末'},
  {left:'向大家',right:'告别'},
  {left:'很有',right:'魅力'},
  {left:'奥运会',right:'开幕式'},
  {left:'忽视',right:'细节'},
  {left:'客观地',right:'评价'},
  {left:'演出',right:'道具'},
  {left:'死记',right:'硬背'},
  {left:'获得',right:'诺贝尔奖'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'心理学家丹尼尔·卡内曼将这一现象命名为“',blank:'峰终定律',post:'”。',hint:'(quy luật cao điểm – điểm cuối)',ans:'峰终定律'},
  {pre:'我们对',blank:'事物',post:'的记忆仅在高峰和结尾。',hint:'(sự vật)',ans:'事物'},
  {pre:'每天早上七点到九点是上班',blank:'高峰',post:'，路上特别堵。',hint:'(cao điểm)',ans:'高峰'},
  {pre:'他第一个跑到了',blank:'终点',post:'，大家都为他鼓掌。',hint:'(đích, điểm cuối)',ans:'终点'},
  {pre:'事情发生后，领导',blank:'迅速',post:'采取了措施。',hint:'(nhanh chóng)',ans:'迅速'},
  {pre:'这次旅行给我留下了',blank:'深刻',post:'的印象。',hint:'(sâu sắc)',ans:'深刻'},
  {pre:'京剧是中国最有名的传统',blank:'戏剧',post:'。',hint:'(kịch, sân khấu)',ans:'戏剧'},
  {pre:'为了这次演出，大家',blank:'投入',post:'了很多时间和精力。',hint:'(bỏ vào)',ans:'投入'},
  {pre:'越南的民族',blank:'服装',post:'叫“奥黛”。',hint:'(trang phục)',ans:'服装'},
  {pre:'演出前，演员们要花很长时间',blank:'化妆',post:'。',hint:'(hoá trang, trang điểm)',ans:'化妆'},
  {pre:'这把刀只是演出用的',blank:'道具',post:'，不是真的。',hint:'(đạo cụ)',ans:'道具'},
  {pre:'我最喜欢上',blank:'美术',post:'课，因为可以画画儿。',hint:'(mỹ thuật)',ans:'美术'},
  {pre:'我们要从小养成',blank:'良好',post:'的学习习惯。',hint:'(tốt — trang trọng)',ans:'良好'},
  {pre:'机会要靠自己去',blank:'争取',post:'。',hint:'(giành lấy)',ans:'争取'},
  {pre:'这是最容易被人',blank:'忽视',post:'的细节。',hint:'(bỏ qua, xem nhẹ)',ans:'忽视'},
  {pre:'这位老师上课很有',blank:'魅力',post:'，学生们都喜欢他。',hint:'(sức cuốn hút)',ans:'魅力'},
  {pre:'',blank:'糟糕',post:'！我把钥匙忘在家里了。',hint:'(Chết rồi! — câu cảm thán)',ans:'糟糕'},
  {pre:'他们打算明年春天举行',blank:'婚礼',post:'。',hint:'(lễ cưới)',ans:'婚礼'},
  {pre:'成绩好不',blank:'等于',post:'能力强。',hint:'(bằng; có nghĩa là)',ans:'等于'},
  {pre:'我在外公外婆身边',blank:'度过',post:'了美好的童年。',hint:'(trải qua)',ans:'度过'},
  {pre:'毕业那天，我们一一向老师',blank:'告别',post:'。',hint:'(chào từ biệt)',ans:'告别'},
  {pre:'他',blank:'平常',post:'总是来得很早，今天却迟到了。',hint:'(ngày thường)',ans:'平常'},
  {pre:'十几年过去了，她',blank:'依然',post:'那么美丽。',hint:'(vẫn)',ans:'依然'},
  {pre:'你能给我',blank:'推荐',post:'几本适合高中生看的书吗？',hint:'(giới thiệu)',ans:'推荐'},
  {pre:'比赛中，他把自己的水平发挥得',blank:'淋漓尽致',post:'。',hint:'(trọn vẹn, hết mức)',ans:'淋漓尽致'},
  {pre:'大家对这位新老师的',blank:'评价',post:'都很高。',hint:'(đánh giá)',ans:'评价'},
  {pre:'这个苹果',blank:'烂',post:'了，别吃了。',hint:'(thối, hỏng)',ans:'烂'},
  {pre:'今天的会议由王经理',blank:'主持',post:'。',hint:'(chủ trì)',ans:'主持'},
  {pre:'学知识不能死记硬背，要懂得灵活地',blank:'运用',post:'。',hint:'(vận dụng)',ans:'运用'},
  {pre:'运动会的',blank:'开幕式',post:'将在下周一举行。',hint:'(lễ khai mạc)',ans:'开幕式'},
  {pre:'我',blank:'宁可',post:'多花点儿钱，也要买一个质量好点儿的。',hint:'(thà)',ans:'宁可'},
  {pre:'你复习时要',blank:'集中',post:'注意力，效果才会好。',hint:'(tập trung)',ans:'集中'},
  {pre:'当了父母以后，才能',blank:'体会',post:'到父母的辛苦。',hint:'(thấm thía)',ans:'体会'},
  {pre:'因为这个认知而获得',blank:'诺贝尔奖',post:'的，是一位心理学家。',hint:'(giải Nô-ben)',ans:'诺贝尔奖'},
  {pre:'“峰终定律”是心理学家',blank:'丹尼尔·卡内曼',post:'提出来的。',hint:'(Daniel Kahneman)',ans:'丹尼尔·卡内曼'},
  {pre:'我们准备服装、道具，',blank:'以',post:'创造良好的效果。',hint:'(để, nhằm)',ans:'以'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (以 · 平常 · 宁可) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['我们','准备了','服装和道具','，','以','创造','良好的效果','。'],ans:'我们准备了服装和道具，以创造良好的效果。',audio:'我们准备了服装和道具，以创造良好的效果。'},
  {words:['他每天','坚持锻炼','，','以','保持健康','。'],ans:'他每天坚持锻炼，以保持健康。',audio:'他每天坚持锻炼，以保持健康。'},
  {words:['学生们','以','足球','为','比赛工具','。'],ans:'学生们以足球为比赛工具。',audio:'学生们以足球为比赛工具。'},
  {words:['他平常','总是','来得','很早','。'],ans:'他平常总是来得很早。',audio:'他平常总是来得很早。'},
  {words:['这部电影的','剧情','平平常常','，','没什么','特别的','。'],ans:'这部电影的剧情平平常常，没什么特别的。',audio:'这部电影的剧情平平常常，没什么特别的。'},
  {words:['我','宁可','自己累一点儿','，','也不想','麻烦别人','。'],ans:'我宁可自己累一点儿，也不想麻烦别人。',audio:'我宁可自己累一点儿，也不想麻烦别人。'},
  {words:['我宁可','多花点儿钱','，','也要','买','质量好的','。'],ans:'我宁可多花点儿钱，也要买质量好的。',audio:'我宁可多花点儿钱，也要买质量好的。'},
  {words:['终点','出现得','越迅速','，','印象','就','越深刻','。'],ans:'终点出现得越迅速，印象就越深刻。',audio:'终点出现得越迅速，印象就越深刻。'},
  {words:['这是','最容易','被人','忽视的','细节','。'],ans:'这是最容易被人忽视的细节。',audio:'这是最容易被人忽视的细节。'},
  {words:['老刘刚','给我','推荐了','一份','工作','。'],ans:'老刘刚给我推荐了一份工作。',audio:'老刘刚给我推荐了一份工作。'},
  {words:['他','要','给自己','争取','更多的时间','。'],ans:'他要给自己争取更多的时间。',audio:'他要给自己争取更多的时间。'},
  {words:['我们','把更多的精力','集中在','闭幕式上','。'],ans:'我们把更多的精力集中在闭幕式上。',audio:'我们把更多的精力集中在闭幕式上。'},
  {words:['我','愉快地','度过了','两个小时','。'],ans:'我愉快地度过了两个小时。',audio:'我愉快地度过了两个小时。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'以前我们____了教育问题，现在要赶上去。',opts:['忽视','轻视','评价','运用'],ans:0,
   exp:'Không chú ý tới (vô ý) → 忽视. 轻视 là coi thường (cố ý); 评价 (đánh giá), 运用 (vận dụng) sai nghĩa.'},
  {wrong:'你可别____他，他看起来很平常，其实很能干。',opts:['轻视','忽视','推荐','告别'],ans:0,
   exp:'"Trông bình thường nhưng thật ra rất giỏi" → đừng COI THƯỜNG anh ta → 轻视 (看不起).'},
  {wrong:'这部电影很____，我觉得没必要去看。',opts:['平常','平时','依然','良好'],ans:0,
   exp:'Sau 很 cần tính từ "bình thường, tầm thường" → 平常. 平时 chỉ là danh từ; 依然 là phó từ; 良好 nghĩa ngược (tốt).'},
  {wrong:'这次旅行给我留下了____的印象。',opts:['深刻','深','迅速','集中'],ans:0,
   exp:'深刻的印象 là cụm cố định. 深 một âm tiết phải thêm 很: 很深的印象.'},
  {wrong:'他被____为本校今年的十大“优秀毕业生”之一。',opts:['评','评价','运用','度过'],ans:0,
   exp:'被评为 = được bình chọn là (bài tập 2 của sách). 评价 là "đánh giá", không đi với 为.'},
  {wrong:'大家要迅速地熟悉新产品，____更好地向顾客推广。',opts:['以','用','把','被'],ans:0,
   exp:'Vế sau nêu MỤC ĐÍCH của vế trước → liên từ 以 (= để). 用 là giới từ "dùng" + công cụ.'},
  {wrong:'作为母亲，她____自己累一点儿，也不想委屈了孩子。',opts:['宁可','依然','平常','迅速'],ans:0,
   exp:'Cặp 宁可……也不…… = thà … chứ không ….'},
  {wrong:'成绩好不____能力强。',opts:['等于','度过','体会','集中'],ans:0,
   exp:'A 不等于 B = A không có nghĩa là B.'},
  {wrong:'这个暑假我是在奶奶家____的。',opts:['度过','过度','告别','等于'],ans:0,
   exp:'Trải qua một khoảng thời gian (暑假) → 度过. 过度 là "quá mức" (过度疲劳) — bẫy đảo chữ.'},
  {wrong:'他跟大家一____，就上了火车。',opts:['告别','度过','推荐','评价'],ans:0,
   exp:'跟 + người + 告别 = chào từ biệt ai.'},
  {wrong:'你复习时要____注意力，效果才会好。',opts:['集中','集合','投入','争取'],ans:0,
   exp:'集中注意力 = tập trung chú ý. 集合 là tập hợp người (集合队伍), không đi với 注意力.'},
  {wrong:'当了父母以后，才能____到父母的辛苦。',opts:['体会','忽视','运用','评价'],ans:0,
   exp:'体会到 + điều cảm nhận = thấm thía được.'},
  {wrong:'学知识不能死记硬背，要懂得灵活地____。',opts:['运用','体会','争取','主持'],ans:0,
   exp:'灵活地运用 = vận dụng linh hoạt (bảng 词语搭配 của sách).'},
  {wrong:'这次期末考试我一定____考好。',opts:['争取','推荐','依然','集中'],ans:0,
   exp:'争取 + V = cố gắng để làm được: 争取考好.'},
  {wrong:'为了这次演出，大家____了很多时间和精力。',opts:['投入','集中','度过','告别'],ans:0,
   exp:'Bỏ thời gian, tâm sức vào một việc → 投入. 度过 cần tân ngữ là khoảng thời gian cụ thể, không đi với 精力.'},
  {wrong:'糟糕的____会给人留下难以忘记的坏印象。',opts:['结局','魅力','道具','事物'],ans:0,
   exp:'Kết cục tồi tệ → 糟糕的结局. 魅力 là sức hút (nghĩa tốt), không đi với 糟糕.'},
  {wrong:'小明演讲时太紧张，把准备好的内容全忘了，结果很____。',opts:['糟糕','良好','深刻','平常'],ans:0,
   exp:'Quên sạch bài → kết quả tồi tệ → 糟糕.'},
  {wrong:'她唱得特别____，连眼睛都闭上了。',opts:['投入','集中','深刻','迅速'],ans:0,
   exp:'投入 làm tính từ = say sưa, nhập tâm: 唱得很投入.'},
  {wrong:'这件衣服太____了，不能再穿了。',opts:['烂','深刻','迅速','良好'],ans:0,
   exp:'Quần áo rách nát → 烂 (烂衣服).'},
  {wrong:'这家饭馆的菜很有特色，我____你去尝尝。',opts:['推荐','评价','主持','运用'],ans:0,
   exp:'Giới thiệu cho người khác thử → 推荐.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi thà tốn thêm chút tiền, cũng phải mua cái chất lượng tốt.',zh:'我宁可多花点儿钱，也要买质量好的。',py:'Wǒ nìngkě duō huā diǎnr qián, yě yào mǎi zhìliàng hǎo de.'},
  {vi:'Ngày thường cậu ấy luôn đến rất sớm, hôm nay lại đến muộn.',zh:'他平常总是来得很早，今天却迟到了。',py:'Tā píngcháng zǒngshì lái de hěn zǎo, jīntiān què chídào le.'},
  {vi:'Ngày nào cậu ấy cũng kiên trì tập luyện, để giành thắng lợi trong trận đấu.',zh:'他每天坚持训练，以争取比赛的胜利。',py:'Tā měi tiān jiānchí xùnliàn, yǐ zhēngqǔ bǐsài de shènglì.'},
  {vi:'Chuyến đi này để lại cho tôi ấn tượng sâu sắc.',zh:'这次旅行给我留下了深刻的印象。',py:'Zhè cì lǚxíng gěi wǒ liúxiàle shēnkè de yìnxiàng.'},
  {vi:'Đây là chi tiết dễ bị người ta bỏ qua nhất.',zh:'这是最容易被人忽视的细节。',py:'Zhè shì zuì róngyì bèi rén hūshì de xìjié.'},
  {vi:'Mười mấy năm trôi qua, cô ấy vẫn đẹp như vậy.',zh:'十几年过去了，她依然那么美丽。',py:'Shí jǐ nián guòqu le, tā yīrán nàme měilì.'},
  {vi:'Khi ôn bài phải tập trung chú ý.',zh:'复习的时候要集中注意力。',py:'Fùxí de shíhou yào jízhōng zhùyìlì.'},
  {vi:'Làm cha mẹ rồi mới thấm thía được nỗi vất vả của cha mẹ.',zh:'当了父母以后，才能体会到父母的辛苦。',py:'Dāngle fùmǔ yǐhòu, cái néng tǐhuì dào fùmǔ de xīnkǔ.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Trí nhớ của chúng ta về sự vật chỉ đọng lại ở đỉnh cao và phần kết.',zh:'我们对事物的记忆仅在高峰和结尾。',py:'Wǒmen duì shìwù de jìyì jǐn zài gāofēng hé jiéwěi.'},
  {vi:'Sau đỉnh cao, điểm kết thúc đến càng nhanh thì ấn tượng càng sâu sắc.',zh:'高峰之后，终点出现得越迅速，印象就越深刻。',py:'Gāofēng zhīhòu, zhōngdiǎn chūxiàn de yuè xùnsù, yìnxiàng jiù yuè shēnkè.'},
  {vi:'Chúng ta lại thường xem nhẹ việc chuẩn bị cho lúc kết thúc, rời sân khấu.',zh:'我们却常常忽视结束退场时的准备。',py:'Wǒmen què chángcháng hūshì jiéshù tuìchǎng shí de zhǔnbèi.'},
  {vi:'Một cái kết tồi tệ sẽ để lại cho người ta ấn tượng xấu khó quên.',zh:'糟糕的结局会给人留下难以忘记的坏印象。',py:'Zāogāo de jiéjú huì gěi rén liúxià nányǐ wàngjì de huài yìnxiàng.'},
  {vi:'So với lần đầu, buổi tụ họp lần thứ hai để lại cho tôi ấn tượng đẹp hơn.',zh:'与第一次相比，第二次的聚会留给我的印象更为美好。',py:'Yǔ dì-yī cì xiāngbǐ, dì-èr cì de jùhuì liú gěi wǒ de yìnxiàng gèng wéi měihǎo.'},
  {vi:'Nếu nửa tiếng cuối làm ta cảm động, ta vẫn sẽ giới thiệu nó cho người khác.',zh:'如果最后半个小时能使我们感动，我们依然会向别人推荐它。',py:'Rúguǒ zuìhòu bàn ge xiǎoshí néng shǐ wǒmen gǎndòng, wǒmen yīrán huì xiàng biérén tuījiàn tā.'},
  {vi:'Chúng tôi thà dồn nhiều tâm sức hơn vào lễ bế mạc.',zh:'我们宁可把更多的精力集中在闭幕式上。',py:'Wǒmen nìngkě bǎ gèng duō de jīnglì jízhōng zài bìmùshì shang.'},
  {vi:'Họ có thể qua kinh nghiệm mà thấm thía tầm quan trọng của cách làm này.',zh:'他们能从经验中体会这种做法的重要性。',py:'Tāmen néng cóng jīngyàn zhōng tǐhuì zhè zhǒng zuòfǎ de zhòngyàoxìng.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 婚礼)
// ══════════════════════════════════════════
var writingData = {
  words:['婚礼','深刻','平常','宁可','告别'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể về một đám cưới em đã dự.',
  outline:[
    'Câu mở: đám cưới của ai, để lại ấn tượng thế nào (dùng 婚礼, 深刻).',
    'Thân 1: một chi tiết đáng nhớ — người ấy ngày thường thế nào, hôm đó ra sao (dùng 平常).',
    'Thân 2: đám cưới kết thúc thế nào, lúc chào ra về (dùng 告别).',
    'Kết: em nghĩ một đám cưới đẹp nên như thế nào (dùng 宁可……也要……).'
  ],
  model:{
    zh:'去年我参加了表姐的婚礼，给我留下了深刻的印象。平常表姐是个很安静的人，那天却在婚礼上唱了一首歌，大家都很感动。婚礼时间不长，晚上八点就结束了。我们跟新人告别的时候，大家都还舍不得走。我觉得，婚礼宁可简单一点儿，也要让人记住最美好的时刻。',
    py:'Qùnián wǒ cānjiāle biǎojiě de hūnlǐ, gěi wǒ liúxiàle shēnkè de yìnxiàng. Píngcháng biǎojiě shì ge hěn ānjìng de rén, nà tiān què zài hūnlǐ shang chàngle yì shǒu gē, dàjiā dōu hěn gǎndòng. Hūnlǐ shíjiān bù cháng, wǎnshang bā diǎn jiù jiéshù le. Wǒmen gēn xīnrén gàobié de shíhou, dàjiā dōu hái shěbude zǒu. Wǒ juéde, hūnlǐ nìngkě jiǎndān yìdiǎnr, yě yào ràng rén jìzhù zuì měihǎo de shíkè.',
    vn:'Năm ngoái tôi dự đám cưới của chị họ, nó để lại cho tôi ấn tượng sâu sắc. Ngày thường chị họ tôi là người rất trầm lặng, vậy mà hôm đó chị lại hát một bài trong lễ cưới, ai cũng xúc động. Đám cưới không dài, tám giờ tối đã kết thúc. Lúc chúng tôi chào tạm biệt cô dâu chú rể, mọi người vẫn còn lưu luyến chưa muốn về. Tôi thấy, đám cưới thà đơn giản một chút, cũng phải để mọi người nhớ được khoảnh khắc đẹp nhất.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Câu có 宁可 đã có vế sau 也要 / 也不 chưa (không dùng 但是)?',
    '告别 có đúng dạng 跟 / 向 + người + 告别 không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你参加过的一个婚礼。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'婚礼', loai:'danh từ', cach:'参加婚礼 · 举行婚礼 · 在婚礼上',
     sai:[{re:'参观(了)?[^，。]{0,4}婚礼', sua:'参加婚礼', giai:'Dự đám cưới là 参加婚礼. 参观 là tham quan (bảo tàng, nhà máy).'},
          {re:'(做|开|办了一个)婚礼', sua:'举行婚礼', giai:'Tổ chức đám cưới nói 举行婚礼 (văn viết) — 办婚礼 chỉ dùng trong khẩu ngữ.', nhe:true}]},
    {tu:'深刻', loai:'tính từ', cach:'留下深刻的印象 · 印象很深刻 · 深刻的道理',
     sai:[{re:'(^|[^很非常特别])深的印象', sua:'深刻的印象 / 很深的印象', giai:'深 một âm tiết làm định ngữ phải có 很: 很深的印象; hoặc dùng 深刻的印象.'},
          {re:'深刻的?(河|水|湖|海)', sua:'很深的……', giai:'Độ sâu vật lý dùng 深. 深刻 chỉ dùng cho nghĩa trừu tượng (ấn tượng, đạo lý).'}]},
    {tu:'平常', loai:'tính từ / danh từ', cach:'平常 + 总是 / 一般…… · 很平常 · 不平常的日子',
     sai:[{re:'很平时', sua:'很平常', giai:'平时 chỉ là danh từ, không đứng sau 很. Nghĩa "bình thường" dùng 平常.'},
          {re:'平常的时候', sua:'平常 / 平时', giai:'平常 đã có nghĩa "lúc thường", không cần thêm 的时候.', nhe:true}]},
    {tu:'宁可', loai:'phó từ', cach:'宁可 A，也要 B · 宁可 A，也不 B',
     sai:[{re:'宁可[^。！？]*(但是|可是)', sua:'宁可……，也……', giai:'宁可 đi cặp với 也 (也要 / 也不), không đi với 但是.'},
          {re:'宁可[^，。！？]*[。！？]', sua:'宁可……，也要……', giai:'Câu có 宁可 thường cần vế sau 也要 / 也不 để nói rõ mình chọn gì.', nhe:true}]},
    {tu:'告别', loai:'động từ', cach:'跟 / 向 + người + 告别 · 告别 + nơi chốn / quá khứ',
     sai:[{re:'说告别', sua:'告别 / 说再见', giai:'告别 đã là động từ, không nói 说告别. Muốn nói "nói lời tạm biệt": 说再见.'},
          {re:'告别(了)?(老师|朋友|大家|新人|同学|父母)', sua:'跟 / 向 + người + 告别', giai:'Chào tạm biệt ai thường nói 跟 / 向 + người + 告别, tự nhiên hơn.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'宁可 A，也要 / 也不 B', nhan:'宁可', vd:'婚礼宁可简单一点儿，也要让人记住最美好的时刻。', khi:'Câu KẾT — nói rõ lựa chọn, quan điểm của mình.'},
    {ten:'给 + người + 留下(了) + 深刻的印象', nhan:'深刻', vd:'表姐的婚礼给我留下了深刻的印象。', khi:'Câu MỞ — giới thiệu sự việc đáng nhớ.'},
    {ten:'平常……，(那天)却……', nhan:'平常', vd:'平常表姐是个很安静的人，那天却在婚礼上唱了一首歌。', khi:'Tạo điểm nhấn: ngày thường thế này, hôm ấy lại khác hẳn.'},
    {ten:'跟 / 向 + người + 告别', nhan:'告别', vd:'我们跟新人告别的时候，大家都还舍不得走。', khi:'Kể lúc kết thúc buổi lễ.'},
    {ten:'与……相比，……更……', nhan:'相比', vd:'与中国的婚礼相比，越南的婚礼更热闹。', khi:'So sánh hai đám cưới / hai nền văn hoá.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然婚礼时间不长，但是大家都很开心。', khi:'Nêu mặt hạn chế rồi lật lại — thân đoạn.'},
    {ten:'……，以 + V (mục đích)', nhan:'以', vd:'新人准备了很多小礼物，以感谢来参加婚礼的朋友。', khi:'Giải thích mục đích một việc làm — giọng văn viết.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 của sách bài tập + câu bài khoá)
  sapXep:[
    {manh:['争取','他要','更多的时间','给自己'],
     dap:'他要给自己争取更多的时间。',
     vn:'Anh ấy muốn giành thêm nhiều thời gian cho bản thân.',
     giai:'Chủ ngữ + năng nguyện 要 → 给自己 (giới từ + đối tượng) → động từ 争取 → tân ngữ. Cụm 给 + người đứng TRƯỚC động từ.'},
    {manh:['推荐了','老刘','一份工作','刚给我'],
     dap:'老刘刚给我推荐了一份工作。',
     vn:'Lão Lưu vừa giới thiệu cho tôi một công việc.',
     giai:'Phó từ 刚 đứng sau chủ ngữ, trước cụm 给我; động từ 推荐了 + tân ngữ 一份工作.'},
    {manh:['被人忽视的','这是','细节','最容易'],
     dap:'这是最容易被人忽视的细节。',
     vn:'Đây là chi tiết dễ bị người ta bỏ qua nhất.',
     giai:'这是 + định ngữ dài (最容易被人忽视的) + danh từ trung tâm 细节.'},
    {manh:['深刻的印象','这次旅行','给我','留下了'],
     dap:'这次旅行给我留下了深刻的印象。',
     vn:'Chuyến đi này để lại cho tôi ấn tượng sâu sắc.',
     giai:'Mẫu cố định: A + 给 + người + 留下了 + 深刻的印象.'},
    {manh:['那么美丽','依然','她','十几年过去了，'],
     dap:'十几年过去了，她依然那么美丽。',
     vn:'Mười mấy năm trôi qua, cô ấy vẫn đẹp như vậy.',
     giai:'Phó từ 依然 đứng sau chủ ngữ 她, trước 那么 + tính từ (bài tập 3 của sách).'},
    {manh:['也要','宁可','多花点儿钱，','我','买质量好的'],
     dap:'我宁可多花点儿钱，也要买质量好的。',
     vn:'Tôi thà tốn thêm chút tiền, cũng phải mua cái chất lượng tốt.',
     giai:'Chủ ngữ + 宁可 + A，也要 + B.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 婚礼
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (婚礼 · 峰终定律). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 婚礼 · 深刻 · 平常 · 宁可 · 告别 · 依然 · 推荐 · 评价.',
  questions:[
    {q_zh:'你了解过或参加过中国人的婚礼吗？印象深刻的地方是什么？',
     q_vn:'Em đã tìm hiểu hay dự đám cưới người Trung Quốc chưa? Điều gì khiến em ấn tượng sâu sắc?',
     hint:'Nếu chưa dự: kể điều em biết qua phim, dùng 深刻 + 印象',
     sample:'我没参加过，但是在电视剧里看过。中国人的婚礼上到处都是红色，新娘穿红色的衣服，这给我留下了深刻的印象。',
     sample_vn:'Tôi chưa dự bao giờ, nhưng đã xem trong phim truyền hình. Đám cưới người Trung Quốc đâu đâu cũng màu đỏ, cô dâu mặc đồ đỏ, điều đó để lại cho tôi ấn tượng sâu sắc.',
     note:'Chưa từng dự thì nói thật và kể điều mình biết — đừng bịa. Người chấm HSKK đánh giá cách diễn đạt, không đánh giá trải nghiệm.'},
    {q_zh:'你们国家的婚礼和中国人的婚礼有哪些不同？',
     q_vn:'Đám cưới ở nước em khác đám cưới người Trung Quốc ở những điểm nào?',
     hint:'Nêu 1 điểm giống + 2 điểm khác, dùng 与……相比',
     sample:'越南和中国的婚礼都很热闹。与中国相比，越南的婚礼有“问名”“迎亲”这些仪式，新娘一般穿奥黛。',
     sample_vn:'Đám cưới Việt Nam và Trung Quốc đều rất náo nhiệt. So với Trung Quốc, đám cưới Việt Nam có các nghi lễ như dạm ngõ, đón dâu, cô dâu thường mặc áo dài.',
     note:'Bố cục "giống trước, khác sau" giúp câu trả lời mạch lạc.'},
    {q_zh:'你觉得什么样的婚礼能给人留下令人难忘的美好记忆？',
     q_vn:'Em thấy một đám cưới như thế nào mới để lại kỷ niệm đẹp khó quên?',
     hint:'Liên hệ "峰终定律" của bài, dùng 宁可……也要……',
     sample:'我觉得婚礼不用太长。宁可时间短一点儿，也要让最后的部分最感人，比如新人给父母鞠躬、感谢父母，这样大家会记得很清楚。',
     sample_vn:'Tôi thấy đám cưới không cần quá dài. Thà thời gian ngắn một chút, cũng phải để phần cuối cảm động nhất, ví dụ cô dâu chú rể cúi chào, cảm ơn bố mẹ, như vậy mọi người sẽ nhớ rất rõ.',
     note:'Vận dụng ý của bài khoá (cao điểm + điểm cuối) để câu trả lời có chiều sâu.'},
    {q_zh:'你同意“人们应该在最美好的时候离开”这句话吗？请举一个例子。',
     q_vn:'Em có đồng ý câu "con người nên rời đi vào lúc tốt đẹp nhất" không? Hãy nêu một ví dụ.',
     hint:'Đồng ý / không + ví dụ trong đời sống học sinh, dùng 依然 hoặc 告别',
     sample:'我同意。上次同学聚会，我们玩儿得最开心的时候就早早地告别了，到现在我依然觉得那次聚会特别美好。',
     sample_vn:'Tôi đồng ý. Lần họp lớp trước, chúng tôi chia tay sớm đúng lúc đang vui nhất, đến giờ tôi vẫn thấy buổi họp ấy đặc biệt đẹp.',
     note:'Ví dụ càng GẦN đời sống của em càng thuyết phục.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 17.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第17课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'这个胃药你晨起和入睡前各一次，一次两片。记住了吗？'},
            {sp:'男',zh:'好的，我明白了，谢谢大夫。'}],
     q:'胃药应该怎么吃？',qvn:'Thuốc dạ dày phải uống thế nào?',
     opts:['一天三次，一次一片','饭后吃，一次两片','只在早上吃一次','早晚各一次，一次两片'],ans:3,
     why:'晨起 (sáng ngủ dậy) và 入睡前 (trước khi ngủ) 各一次 = sáng tối mỗi lần một lượt; 一次两片 = mỗi lần hai viên.',
     words:[]},

    {n:2,
     lines:[{sp:'男',zh:'亮亮是不是感冒了？一直打喷嚏。'},
            {sp:'女',zh:'是，幼儿园这段时间感冒的小朋友特别多，肯定被传染上了。'}],
     q:'亮亮是怎么感冒的？',qvn:'Lượng Lượng bị cảm như thế nào?',
     opts:['晚上睡觉着凉了','穿得太少了','淋了雨','被别的小朋友传染了'],ans:3,
     why:'幼儿园感冒的小朋友特别多，肯定被传染上了 — bị các bạn ở nhà trẻ lây. 传染 là từ trong phần 扩展 (医务2) của bài.',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'老婆，我的腰带用最里面的洞眼也有点儿松了，你得帮我再打个洞了。'},
            {sp:'女',zh:'好的。看来，你这段时间减肥很有效果嘛。'}],
     q:'从对话中，可以知道男的什么？',qvn:'Qua đoạn hội thoại, có thể biết gì về người đàn ông?',
     opts:['瘦了','买了新腰带','胖了','刚开始减肥'],ans:0,
     why:'Thắt lưng cài lỗ trong cùng vẫn lỏng + 减肥很有效果 → anh ấy đã gầy đi.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'看你今天还是不怎么动筷子，是拔的那颗牙还疼吗？要不要给你做碗面条儿？'},
            {sp:'女',zh:'是还有点儿疼。看着什么都没胃口。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['想吃面条儿','牙已经不疼了','不想吃东西','要去医院拔牙'],ans:2,
     why:'看着什么都没胃口 = nhìn gì cũng không muốn ăn → cô ấy không muốn ăn gì, kể cả mì. Răng đã nhổ rồi (拔的那颗牙), vẫn còn đau.',
     words:[]},

    {n:5,
     lines:[{sp:'女',zh:'小刘怎么辞职了？'},
            {sp:'男',zh:'干我们这行业的，生活不规律，她孩子小，离不开人。'}],
     q:'关于小刘，可以知道什么？',qvn:'Về Tiểu Lưu, có thể biết điều gì?',
     opts:['工作不努力','找到了更好的工作','孩子还小，需要人照顾','身体不太好'],ans:2,
     why:'孩子小，离不开人 = con còn nhỏ, không thể thiếu người trông → nghỉ việc để chăm con.',
     words:[]},

    {n:6,
     lines:[{sp:'男',zh:'昨天的电影你觉得怎么样？'},
            {sp:'女',zh:'开头部分还挺精彩，但结尾部分太平常了，有点儿乏味。'}],
     q:'女的觉得电影怎么样？',qvn:'Người phụ nữ thấy bộ phim thế nào?',
     opts:['从头到尾都很精彩','开头很无聊','结尾很感人','结尾很一般'],ans:3,
     why:'结尾部分太平常了，有点儿乏味 → phần kết quá bình thường. Đúng như bài khoá: mở đầu hay mà kết tầm thường thì bị đánh giá thấp.',
     words:['平常']},

    {n:7,
     lines:[{sp:'男',zh:'准备什么时候登记呀？'},
            {sp:'女',zh:'就我生日那天吧，以后生日和结婚纪念日一块儿过，好记。'},
            {sp:'男',zh:'哟，那马上就要到了，要你妈过去陪陪你吗？'},
            {sp:'女',zh:'不用，等婚礼的时候您跟妈再过来吧。'}],
     q:'女的马上就要做什么了？',qvn:'Người phụ nữ sắp làm việc gì?',
     opts:['结婚登记','过生日','举行婚礼','去看妈妈'],ans:0,
     why:'登记 ở đây là đăng ký kết hôn, định làm đúng ngày sinh nhật (马上就要到了). 婚礼 thì để sau (等婚礼的时候) — bẫy.',
     words:['婚礼']},

    {n:8,
     lines:[{sp:'女',zh:'行李都准备好了吗？要我给你叫个车吗？'},
            {sp:'男',zh:'不用，一会儿公司刘秘书开车来接我。'},
            {sp:'女',zh:'你换好登机牌了吗？'},
            {sp:'男',zh:'换好了，昨晚就打印出来了。放心吧。'},
            {sp:'女',zh:'到了给我来个短信。'}],
     q:'他们现在最可能在哪儿？',qvn:'Họ hiện giờ nhiều khả năng đang ở đâu?',
     opts:['机场','公司','家里','火车站'],ans:2,
     why:'Còn đang chuẩn bị hành lý, chờ thư ký lái xe đến đón → đang ở nhà. 登机牌 gợi "sân bay" nhưng anh ấy chưa đi — bẫy.',
     words:[]}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Cả nhóm bạn bàn chuyến du lịch Hà Nội – Thành phố Hồ Chí Minh, bạn hỏi ý em.',
     a:{sp:'Bạn',zh:'这次旅行，你觉得我们是坐飞机去好还是坐火车去好？',vn:'Chuyến đi này, cậu thấy mình đi máy bay hay đi tàu thì hơn?'},
     need:['Dùng 宁可……也……','Nêu lý do lựa chọn'],
     sample:'我宁可多花点儿钱坐飞机，也不想在火车上坐三十多个小时。',
     samplePy:'Wǒ nìngkě duō huā diǎnr qián zuò fēijī, yě bù xiǎng zài huǒchē shang zuò sānshí duō ge xiǎoshí.',
     sampleVn:'Tớ thà tốn thêm chút tiền đi máy bay, chứ không muốn ngồi tàu hơn ba mươi tiếng.',
     tip:'宁可 đi cặp với 也 (也要 / 也不), không đi với 但是. Đây chính là bài 练一练 (3) của sách.'},

    {scene:'Bạn thấy em vừa đọc xong một cuốn tiểu thuyết đang nổi.',
     a:{sp:'Bạn',zh:'你觉得这本书怎么样？',vn:'Cậu thấy cuốn sách này thế nào?'},
     need:['Dùng 平常 (tính từ)','Nêu nhận xét cụ thể'],
     sample:'故事很平常，没什么特别的，结尾也不太感人，我不太推荐你看。',
     samplePy:'Gùshi hěn píngcháng, méi shénme tèbié de, jiéwěi yě bú tài gǎnrén, wǒ bú tài tuījiàn nǐ kàn.',
     sampleVn:'Câu chuyện rất bình thường, chẳng có gì đặc biệt, phần kết cũng không cảm động lắm, tớ không khuyên cậu đọc lắm.',
     tip:'平常 làm tính từ: đứng sau 很. Không nói 很平时.'},

    {scene:'Bạn cùng lớp ngạc nhiên vì em tự nấu cơm mang đi học.',
     a:{sp:'Bạn',zh:'你周末一般在外边吃饭吗？',vn:'Cuối tuần cậu thường ăn ngoài à?'},
     need:['Dùng 平常 (danh từ)','So sánh ngày thường với cuối tuần'],
     sample:'周末偶尔出去吃，平常我一般都是自己做饭吃。',
     samplePy:'Zhōumò ǒu\'ěr chūqu chī, píngcháng wǒ yìbān dōu shì zìjǐ zuò fàn chī.',
     sampleVn:'Cuối tuần thỉnh thoảng đi ăn ngoài, ngày thường tớ thường tự nấu cơm ăn.',
     tip:'平常 làm danh từ = 平时, đứng đầu câu hoặc sau chủ ngữ.'},

    {scene:'Bạn lo lắng vì tháng sau thi HSK 5.',
     a:{sp:'Bạn',zh:'下个月就要考HSK五级了，我好紧张啊！',vn:'Tháng sau thi HSK 5 rồi, tớ căng thẳng quá!'},
     need:['Dùng 以 (liên từ, chỉ mục đích)','Khuyên bạn một cách cụ thể'],
     sample:'别紧张，你每天做一套练习题，以熟悉考试的题型。',
     samplePy:'Bié jǐnzhāng, nǐ měi tiān zuò yí tào liànxítí, yǐ shúxī kǎoshì de tíxíng.',
     sampleVn:'Đừng căng thẳng, mỗi ngày cậu làm một đề luyện tập để quen với các dạng bài.',
     tip:'以 (liên từ) đứng đầu VẾ SAU, sau nó là mục đích. Đây là bài 练一练 (2) của sách.'},

    {scene:'Hôm qua em dự đám cưới anh họ, hôm nay bạn hỏi thăm.',
     a:{sp:'Bạn',zh:'昨天的婚礼怎么样？',vn:'Đám cưới hôm qua thế nào?'},
     need:['Dùng 深刻','Kể một chi tiết đáng nhớ'],
     sample:'婚礼不长，但是最后新郎新娘给父母鞠躬的那一刻给我留下了深刻的印象。',
     samplePy:'Hūnlǐ bù cháng, dànshì zuìhòu xīnláng xīnniáng gěi fùmǔ jūgōng de nà yí kè gěi wǒ liúxiàle shēnkè de yìnxiàng.',
     sampleVn:'Đám cưới không dài, nhưng khoảnh khắc cuối cùng cô dâu chú rể cúi chào bố mẹ đã để lại cho tớ ấn tượng sâu sắc.',
     tip:'Đúng tinh thần 峰终定律: người ta nhớ nhất phần KẾT. 给 + người + 留下 + 深刻的印象.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài bình phim đăng báo tường của trường.',
     a:'这电影太烂了，千万别看！',b:'这部电影开头很精彩，但结尾过于平常，令人失望。',better:'b',
     why:'Bài bình phim cần giọng VĂN VIẾT, có lý lẽ: 过于, 令人失望. Câu a là khẩu ngữ (烂, 千万别看), chỉ hợp khi nói với bạn.'},

    {scene:'Em nhắn tin cho bạn thân giới thiệu một quán ăn.',
     a:'这家店超好吃，推荐你去试试！',b:'本人诚恳地向您推荐此餐厅。',better:'a',
     why:'Với bạn thân, câu a tự nhiên, gần gũi. Câu b dùng 本人, 您, 此 — trang trọng như quảng cáo, nghe rất xa cách.'},

    {scene:'Báo cáo tổng kết hoạt động văn nghệ gửi thầy cô.',
     a:'我们投入了大量时间准备服装和道具，以创造良好的效果。',b:'我们花了好多时间弄衣服什么的，想让效果好点儿。',better:'a',
     why:'Báo cáo dùng giọng văn viết: 投入, 大量, 以, 良好. Câu b là khẩu ngữ (弄, 什么的, 好点儿).'},

    {scene:'Đến rạp thì em chợt phát hiện quên vé, em nói với bạn đi cùng.',
     a:'糟糕！我把票忘在家里了！',b:'非常遗憾，本人未携带门票。',better:'a',
     why:'糟糕！là câu cảm thán tự nhiên khi chợt phát hiện chuyện không hay. Câu b như văn bản hành chính — nói với bạn thì buồn cười.'},

    {scene:'Cô giáo chủ nhiệm viết nhận xét vào học bạ.',
     a:'这孩子挺聪明的，学得不错。',b:'该生学习认真，能灵活运用所学知识。',better:'b',
     why:'Học bạ là văn bản chính thức: 该生, 灵活运用, 所学知识. Câu a là lời nói chuyện thân mật.'},

    {scene:'Em là MC, nói lời kết thúc buổi văn nghệ của trường.',
     a:'好了，就这样吧，大家回家吧。',b:'今天的晚会到这里就结束了，感谢大家的参与，我们明年再见！',better:'b',
     why:'Lời kết của MC cần trang trọng, ấm áp — đúng tinh thần 峰终定律: kết thúc đẹp để khán giả nhớ lâu. Câu a cụt lủn, làm hỏng ấn tượng cả buổi.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 160)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Quy luật (峰终定律)', cue:'我奶奶说过……，心理学家卡内曼将这一现象命名为……', words:['诺贝尔奖','丹尼尔·卡内曼','峰终定律','事物','高峰','终点','迅速','深刻']},
    {step:'Chuẩn bị buổi diễn (准备演出)', cue:'为了一场戏剧演出，我们会……，却常常……', words:['戏剧','投入','服装','化妆','道具','美术','以','良好','争取','忽视','魅力','糟糕']},
    {step:'Dự đám cưới (参加活动)', cue:'有一次，我去参加一个婚礼……', words:['婚礼','等于','度过','告别']},
    {step:'Xem phim (看电影)', cue:'一部电影，开始虽然……，如果最后半个小时……', words:['平常','依然','推荐','淋漓尽致','评价','烂']},
    {step:'Làm chương trình (做节目)', cue:'作为电视节目主持人，我……', words:['主持','运用','开幕式','宁可','集中','体会']}
  ],
  checklist: [
    'Kể đủ năm phần của sách chưa: quy luật → buổi diễn → đám cưới → xem phim → làm chương trình?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có giải thích được “峰终定律” bằng lời mình (高峰 + 终点) không?',
    'Có dùng đúng 以 (để) khi kể buổi diễn và 宁可 khi kể làm chương trình không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 159) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['度过','集中','体会','推荐','运用','争取'],
   cau:[
     {s:'我刚开始学滑雪的时候，最大的＿＿就是要放松，越紧张越容易摔倒。', dap:['体会']},
     {s:'学知识不能死记硬背，要懂得灵活地＿＿。', dap:['运用']},
     {s:'你复习时要＿＿注意力，效果才会好。', dap:['集中']},
     {s:'一些现代营养学专家常常向大家＿＿“餐餐有蔬菜，每天有水果”。', dap:['推荐']},
     {s:'我在外公外婆身边＿＿了美好的童年。', dap:['度过']},
     {s:'机会要靠自己去＿＿。', dap:['争取']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'大家要迅速地熟悉新产品，＿＿更好地向顾客推广。', opts:['用','以'], ans:1, giai:'Vế sau nêu MỤC ĐÍCH của vế trước → liên từ 以 (= để). 用 là giới từ "dùng", phải có danh từ công cụ theo sau.'},
     {s:'这次旅行给我留下了＿＿的印象。', opts:['深','深刻'], ans:1, giai:'深刻的印象 là cụm cố định. 深 một âm tiết làm định ngữ phải có 很: 很深的印象.'},
     {s:'这部电影很＿＿，我觉得没必要去看。', opts:['平常','平时'], ans:0, giai:'Sau 很 cần tính từ → 平常 (bình thường, tầm thường). 平时 chỉ là danh từ.'},
     {s:'他被＿＿为本校今年的十大“优秀毕业生”之一。', opts:['评价','评'], ans:1, giai:'被评为 = được bình chọn là. 评价 là "đánh giá", không kết hợp với 为 kiểu này.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'事情A发生后，领导B采取了C措施，D积极应对。', tu:'迅速', ans:'B', giai:'迅速 làm trạng ngữ, đứng trước động từ 采取: 领导迅速采取了措施 (bảng 词语搭配: 迅速采取措施).'},
     {s:'A三加五B是C八D吗？', tu:'等于', ans:'C', giai:'是 + 等于 + 八: 三加五是等于八吗？— 等于 là động từ chính, nối hai vế của phép tính.'},
     {s:'十几年A过去了，B她C那么D美丽。', tu:'依然', ans:'C', giai:'Phó từ 依然 đứng sau chủ ngữ 她, trước 那么美丽.'},
     {s:'A我B多C花点儿钱，D也要买一个质量好点儿的。', tu:'宁可', ans:'B', giai:'宁可 đứng sau chủ ngữ 我, trước cụm 多花点儿钱; vế sau có 也要 đi cặp.'}
   ]}
];
