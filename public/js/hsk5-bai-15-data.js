// ══════════════════════════════════════════
// DATA — HSK5 Bài 15: 纸上谈兵 (Đánh trận trên giấy)
// Unit 5 放眼世界 · Nguồn: HSK标准教程5上 (tr. 135–143) + 练习册 bài 15
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 39 từ của bảng 生词 + 6 专有名词 (tr. 135–137)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'纸上谈兵',py:'zhǐshàng tánbīng',pos:'Thành ngữ',vn:'bàn chuyện đánh giặc trên giấy (lý luận suông)',hv:'chỉ thượng đàm binh',em:'📜',lesson:1,
   explain:['Nghĩa đen: bàn chuyện dùng binh trên giấy. Nghĩa bóng: chỉ biết nói lý thuyết suông, không giải quyết được vấn đề thực tế.','Xuất xứ: chuyện Triệu Quát thời Chiến Quốc — thuộc lòng binh thư nhưng ra trận thì đại bại.'],
   usage:'Làm vị ngữ (这不是纸上谈兵嘛), tân ngữ (只会纸上谈兵) hoặc định ngữ (纸上谈兵的人). Luôn mang ý chê.',
   collo:['只会纸上谈兵','纸上谈兵的人','不能纸上谈兵','成语“纸上谈兵”'],
   ex_zh:'这就是成语“纸上谈兵”的故事。',ex_py:'Zhè jiù shì chéngyǔ “zhǐshàng tánbīng” de gùshi.',ex_vn:'Đây chính là câu chuyện của thành ngữ “đánh trận trên giấy”.',
   exList:[
     {zh:'这就是成语“纸上谈兵”的故事。',py:'Zhè jiù shì chéngyǔ “zhǐshàng tánbīng” de gùshi.',vn:'Đây chính là câu chuyện của thành ngữ “đánh trận trên giấy”.'},
     {zh:'现在我们完全不了解对方的情况，怎么拿方案啊？这不是纸上谈兵嘛！',py:'Xiànzài wǒmen wánquán bù liǎojiě duìfāng de qíngkuàng, zěnme ná fāng\'àn a? Zhè bú shì zhǐshàng tánbīng ma!',vn:'Bây giờ mình hoàn toàn không nắm tình hình bên kia, đưa phương án kiểu gì? Thế chẳng phải là bàn suông trên giấy sao!'},
     {zh:'学开车不能纸上谈兵，一定要多上路练习。',py:'Xué kāichē bù néng zhǐshàng tánbīng, yídìng yào duō shàng lù liànxí.',vn:'Học lái xe không thể chỉ nói lý thuyết, nhất định phải ra đường tập nhiều.'}
   ],
   colloFull:[
     {zh:'只会纸上谈兵',py:'zhǐ huì zhǐshàng tánbīng',vn:'chỉ biết nói lý thuyết suông'},
     {zh:'纸上谈兵的人',py:'zhǐshàng tánbīng de rén',vn:'người chỉ giỏi bàn suông'},
     {zh:'不能纸上谈兵',py:'bù néng zhǐshàng tánbīng',vn:'không thể chỉ bàn trên giấy'},
     {zh:'成语“纸上谈兵”',py:'chéngyǔ “zhǐshàng tánbīng”',vn:'thành ngữ “đánh trận trên giấy”'},
     {zh:'这不是纸上谈兵嘛',py:'zhè bú shì zhǐshàng tánbīng ma',vn:'thế chẳng phải là bàn suông sao'}
   ],
   patterns:[
     {s:'Sub + 只会 + 纸上谈兵',m:'Ai đó chỉ biết nói lý thuyết suông'},
     {s:'这(不)是纸上谈兵(嘛)',m:'Thế (chẳng phải) là bàn suông trên giấy (sao)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Kế hoạch của anh ấy tuy nghe rất hay, nhưng thực ra chỉ là bàn suông trên giấy.',answer:'他的计划虽然听起来很好，但是其实只是纸上谈兵。',answerPy:'Tā de jìhuà suīrán tīng qilai hěn hǎo, dànshì qíshí zhǐ shì zhǐshàng tánbīng.',
      note:'纸上谈兵 làm tân ngữ sau 是; 听起来 (nghe ra thì) — ôn bổ ngữ xu hướng nghĩa mở rộng.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần thực hành nhiều, cậu sẽ không trở thành người chỉ biết bàn suông.',answer:'只要多实践，你就不会变成纸上谈兵的人。',answerPy:'Zhǐyào duō shíjiàn, nǐ jiù bú huì biànchéng zhǐshàng tánbīng de rén.',
      note:'纸上谈兵 làm định ngữ: 纸上谈兵的人.',pair:'只要……就……'}
   ]},

  {n:2,zh:'军事',py:'jūnshì',pos:'Danh từ',vn:'việc quân, quân sự',hv:'quân sự',em:'🎖️',lesson:1,
   explain:['Những việc liên quan đến quân đội và chiến tranh.'],
   usage:'Hay làm định ngữ trực tiếp, không cần 的: 军事理论, 军事力量, 军事家.',
   collo:['军事理论','军事家','军事力量','谈论军事'],
   ex_zh:'跟别人谈论起军事来，没有人说得过他。',ex_py:'Gēn biéren tánlùn qǐ jūnshì lai, méiyǒu rén shuō de guò tā.',ex_vn:'Bàn chuyện quân sự với người khác, không ai nói lại được anh ta.',
   exList:[
     {zh:'跟别人谈论起军事来，没有人说得过他。',py:'Gēn biéren tánlùn qǐ jūnshì lai, méiyǒu rén shuō de guò tā.',vn:'Bàn chuyện quân sự với người khác, không ai nói lại được anh ta.'},
     {zh:'他对这种军事理论有很深的理解。',py:'Tā duì zhè zhǒng jūnshì lǐlùn yǒu hěn shēn de lǐjiě.',vn:'Anh ấy hiểu rất sâu loại lý luận quân sự này.'},
     {zh:'汉朝和唐朝经济条件好，军事力量强。',py:'Hàncháo hé Tángcháo jīngjì tiáojiàn hǎo, jūnshì lìliang qiáng.',vn:'Nhà Hán và nhà Đường kinh tế khá giả, sức mạnh quân sự lớn.'}
   ],
   colloFull:[
     {zh:'军事理论',py:'jūnshì lǐlùn',vn:'lý luận quân sự'},
     {zh:'军事家',py:'jūnshìjiā',vn:'nhà quân sự'},
     {zh:'军事力量',py:'jūnshì lìliang',vn:'sức mạnh quân sự'},
     {zh:'谈论军事',py:'tánlùn jūnshì',vn:'bàn chuyện quân sự'},
     {zh:'军事题材',py:'jūnshì tícái',vn:'đề tài quân sự'}
   ],
   patterns:[
     {s:'军事 + N',m:'… quân sự (军事理论, 军事力量) — làm định ngữ không cần 的'},
     {s:'谈论起军事来',m:'Hễ bàn đến chuyện quân sự thì… (V + 起 + O + 来)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai tôi từ nhỏ đã rất hứng thú với quân sự, không chỉ đọc nhiều sách mà cũng hay xem phim chiến tranh.',answer:'哥哥从小就对军事很感兴趣，不仅读了很多书，也常看战争电影。',answerPy:'Gēge cóngxiǎo jiù duì jūnshì hěn gǎn xìngqù, bùjǐn dúle hěn duō shū, yě cháng kàn zhànzhēng diànyǐng.',
      note:'对 + 军事 + 感兴趣.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Sức mạnh quân sự của nước này ngày càng lớn.',answer:'这个国家的军事力量越来越强了。',answerPy:'Zhège guójiā de jūnshì lìliang yuè lái yuè qiáng le.',
      note:'军事力量 + 强 / 弱.',pair:'越来越'}
   ]},

  {n:3,zh:'敌人',py:'dírén',pos:'Danh từ',vn:'quân địch, kẻ thù',hv:'địch nhân',em:'⚔️',lesson:1,
   explain:['Kẻ thù, phía đối địch trong chiến tranh hoặc trong tranh đấu.','Sách ghi 敌(人): trong văn viết, thành ngữ có thể dùng một mình 敌 — 敌强我弱, 天下无敌.'],
   usage:'Câu thường dùng 敌人 (打败敌人, 迷惑敌人); văn viết cô đọng dùng 敌 (敌强我弱).',
   collo:['打败敌人','敌强我弱','天下无敌','迷惑敌人'],
   ex_zh:'赵括自以为天下无敌，连父亲也不放在眼里。',ex_py:'Zhào Kuò zì yǐwéi tiānxià wúdí, lián fùqīn yě bú fàng zài yǎn li.',ex_vn:'Triệu Quát tự cho mình thiên hạ vô địch, ngay cả cha cũng chẳng coi ra gì.',
   exList:[
     {zh:'赵括自以为天下无敌，连父亲也不放在眼里。',py:'Zhào Kuò zì yǐwéi tiānxià wúdí, lián fùqīn yě bú fàng zài yǎn li.',vn:'Triệu Quát tự cho mình thiên hạ vô địch, ngay cả cha cũng chẳng coi ra gì.'},
     {zh:'花木兰替父参军并打败敌人，从而闻名天下。',py:'Huā Mùlán tì fù cānjūn bìng dǎbài dírén, cóng\'ér wénmíng tiānxià.',vn:'Hoa Mộc Lan thay cha tòng quân và đánh bại quân địch, nhờ đó nổi danh thiên hạ.'},
     {zh:'用兵最重要的是运用各种方法迷惑敌人。',py:'Yòngbīng zuì zhòngyào de shì yùnyòng gè zhǒng fāngfǎ míhuò dírén.',vn:'Dùng binh quan trọng nhất là vận dụng đủ mọi cách để đánh lừa quân địch.'}
   ],
   colloFull:[
     {zh:'打败敌人',py:'dǎbài dírén',vn:'đánh bại kẻ thù'},
     {zh:'敌强我弱',py:'dí qiáng wǒ ruò',vn:'địch mạnh ta yếu'},
     {zh:'天下无敌',py:'tiānxià wúdí',vn:'thiên hạ vô địch'},
     {zh:'迷惑敌人',py:'míhuò dírén',vn:'đánh lừa quân địch'},
     {zh:'最大的敌人',py:'zuì dà de dírén',vn:'kẻ thù lớn nhất'}
   ],
   patterns:[
     {s:'打败 / 迷惑 + 敌人',m:'Đánh bại / đánh lừa kẻ địch'},
     {s:'敌 + Adj + 我 + Adj',m:'Địch … ta … (so sánh lực lượng, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quân địch đã bị chúng ta đánh bại rồi.',answer:'敌人被我们打败了。',answerPy:'Dírén bèi wǒmen dǎbài le.',
      note:'敌人 làm chủ ngữ của câu bị động.',pair:'被'},
     {promptLang:'vi',prompt:'Ngay cả kẻ địch cũng rất khâm phục vị tướng quân này.',answer:'连敌人都很佩服这位将军。',answerPy:'Lián dírén dōu hěn pèifú zhè wèi jiāngjūn.',
      note:'将军 là từ bài 7 — ôn lại.',pair:'连……都……'}
   ]},

  {n:4,zh:'理论',py:'lǐlùn',pos:'Danh từ',vn:'lý luận, lý thuyết',hv:'lý luận',em:'📘',lesson:1,
   explain:['Hệ thống kiến thức, nguyên lý được khái quát từ thực tiễn — đối lập với 实际/实践 (thực tế).'],
   usage:'对……理论很了解; 理论联系实际 (lý thuyết gắn với thực tế); 空谈理论 (nói suông lý thuyết).',
   collo:['军事理论','理论联系实际','空谈理论','理论知识'],
   ex_zh:'他死搬兵书上的理论，主动进攻秦军。',ex_py:'Tā sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn.',ex_vn:'Hắn rập khuôn lý thuyết trong binh thư, chủ động tấn công quân Tần.',
   exList:[
     {zh:'他死搬兵书上的理论，主动进攻秦军。',py:'Tā sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn.',vn:'Hắn rập khuôn lý thuyết trong binh thư, chủ động tấn công quân Tần.'},
     {zh:'做事一定要注意理论联系实际。',py:'Zuòshì yídìng yào zhùyì lǐlùn liánxì shíjì.',vn:'Làm việc nhất định phải chú ý gắn lý thuyết với thực tế.'},
     {zh:'脱离实际空谈理论往往解决不了问题。',py:'Tuōlí shíjì kōngtán lǐlùn wǎngwǎng jiějué bu liǎo wèntí.',vn:'Xa rời thực tế mà nói suông lý thuyết thường không giải quyết được vấn đề.'}
   ],
   colloFull:[
     {zh:'军事理论',py:'jūnshì lǐlùn',vn:'lý luận quân sự'},
     {zh:'理论联系实际',py:'lǐlùn liánxì shíjì',vn:'lý thuyết gắn liền thực tế'},
     {zh:'空谈理论',py:'kōngtán lǐlùn',vn:'nói suông lý thuyết'},
     {zh:'理论知识',py:'lǐlùn zhīshi',vn:'kiến thức lý thuyết'},
     {zh:'兵书上的理论',py:'bīngshū shang de lǐlùn',vn:'lý thuyết trong binh thư'}
   ],
   patterns:[
     {s:'对 + 理论 + 很了解',m:'Hiểu rõ về lý thuyết'},
     {s:'理论 + 联系 + 实际',m:'Lý thuyết gắn liền thực tế'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy anh ấy hiểu rất rõ lý thuyết, nhưng không có kinh nghiệm thực tế.',answer:'虽然他对理论很了解，但是没有实际经验。',answerPy:'Suīrán tā duì lǐlùn hěn liǎojiě, dànshì méiyǒu shíjì jīngyàn.',
      note:'Đối lập 理论 ↔ 实际 — ý chính của cả bài.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần gắn lý thuyết với thực tế, thì có thể giải quyết vấn đề.',answer:'只要把理论和实际联系起来，就能解决问题。',answerPy:'Zhǐyào bǎ lǐlùn hé shíjì liánxì qilai, jiù néng jiějué wèntí.',
      note:'Lồng câu 把 + 联系起来.',pair:'只要……就……'}
   ]},

  {n:5,zh:'作战',py:'zuòzhàn',pos:'Động từ',vn:'đánh trận, chiến đấu',hv:'tác chiến',em:'🛡️',lesson:1,
   explain:['Đánh nhau trong chiến tranh, tham gia chiến đấu.'],
   usage:'Động từ không mang tân ngữ: 带兵作战, 英勇作战; hay làm định ngữ: 作战经验, 作战方案.',
   collo:['作战经验','作战方案','带兵作战','英勇作战'],
   ex_zh:'他没有实际作战的经验，想法很不符合实际。',ex_py:'Tā méiyǒu shíjì zuòzhàn de jīngyàn, xiǎngfǎ hěn bù fúhé shíjì.',ex_vn:'Anh ta không có kinh nghiệm đánh trận thực tế, suy nghĩ rất không hợp thực tế.',
   exList:[
     {zh:'他没有实际作战的经验，想法很不符合实际。',py:'Tā méiyǒu shíjì zuòzhàn de jīngyàn, xiǎngfǎ hěn bù fúhé shíjì.',vn:'Anh ta không có kinh nghiệm đánh trận thực tế, suy nghĩ rất không hợp thực tế.'},
     {zh:'赵括完全改变了廉颇的作战方案。',py:'Zhào Kuò wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',vn:'Triệu Quát thay đổi hoàn toàn phương án tác chiến của Liêm Pha.'},
     {zh:'他还没有独立带兵作战的资格。',py:'Tā hái méiyǒu dúlì dài bīng zuòzhàn de zīgé.',vn:'Anh ta chưa có tư cách một mình cầm quân đánh trận.'}
   ],
   colloFull:[
     {zh:'作战经验',py:'zuòzhàn jīngyàn',vn:'kinh nghiệm chiến đấu'},
     {zh:'作战方案',py:'zuòzhàn fāng\'àn',vn:'phương án tác chiến'},
     {zh:'带兵作战',py:'dài bīng zuòzhàn',vn:'cầm quân đánh trận'},
     {zh:'英勇作战',py:'yīngyǒng zuòzhàn',vn:'chiến đấu anh dũng'},
     {zh:'作战能力',py:'zuòzhàn nénglì',vn:'năng lực chiến đấu'}
   ],
   patterns:[
     {s:'带兵 + 作战',m:'Cầm quân đánh trận'},
     {s:'作战 + 经验 / 方案',m:'Kinh nghiệm / phương án tác chiến (làm định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy chưa từng cầm quân đánh trận.',answer:'他从来没带兵作战过。',answerPy:'Tā cónglái méi dài bīng zuòzhàn guo.',
      note:'过 đặt sau cả cụm 带兵作战.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Phương án tác chiến của Liêm Pha bị Triệu Quát thay đổi hoàn toàn.',answer:'廉颇的作战方案被赵括完全改变了。',answerPy:'Lián Pō de zuòzhàn fāng\'àn bèi Zhào Kuò wánquán gǎibiàn le.',
      note:'作战方案 làm chủ ngữ câu 被.',pair:'被'}
   ]},

  {n:6,zh:'毛病',py:'máobing',pos:'Danh từ',vn:'khuyết điểm, tật xấu; chỗ hỏng',hv:'mao bệnh',em:'🔧',lesson:1,
   explain:['Tật xấu, khuyết điểm trong tính cách, thói quen, cách làm việc.','Chỗ hỏng, trục trặc của máy móc, đồ vật.'],
   usage:'有 / 出 / 改 / 克服 + 毛病. Dùng được cho cả người và đồ vật (车出了毛病); 缺点 không nói máy móc hỏng.',
   collo:['改毛病','出毛病','克服毛病','老毛病'],
   ex_zh:'儿子的毛病是只会讲大道理，缺乏实际锻炼。',ex_py:'Érzi de máobing shì zhǐ huì jiǎng dà dàolǐ, quēfá shíjì duànliàn.',ex_vn:'Tật của con trai là chỉ biết nói lý lẽ to tát, thiếu rèn luyện thực tế.',
   exList:[
     {zh:'儿子的毛病是只会讲大道理，缺乏实际锻炼。',py:'Érzi de máobing shì zhǐ huì jiǎng dà dàolǐ, quēfá shíjì duànliàn.',vn:'Tật của con trai là chỉ biết nói lý lẽ to tát, thiếu rèn luyện thực tế.'},
     {zh:'师傅，最近我这车出了点儿毛病，空调总是不太凉。',py:'Shīfu, zuìjìn wǒ zhè chē chūle diǎnr máobing, kōngtiáo zǒngshì bú tài liáng.',vn:'Bác thợ ơi, dạo này xe tôi bị trục trặc, điều hoà cứ không mát lắm.'},
     {zh:'睡懒觉的老毛病他终于改掉了。',py:'Shuì lǎnjiào de lǎo máobing tā zhōngyú gǎidiào le.',vn:'Tật ngủ nướng cũ, cuối cùng anh ấy cũng bỏ được.'}
   ],
   colloFull:[
     {zh:'改毛病',py:'gǎi máobing',vn:'sửa tật xấu'},
     {zh:'出毛病',py:'chū máobing',vn:'bị trục trặc'},
     {zh:'克服毛病',py:'kèfú máobing',vn:'khắc phục khuyết điểm'},
     {zh:'老毛病',py:'lǎo máobing',vn:'tật cũ'},
     {zh:'毛病多',py:'máobing duō',vn:'lắm tật'}
   ],
   patterns:[
     {s:'Sub + 的毛病是……',m:'Tật của ai đó là…'},
     {s:'N (đồ vật) + 出(了)毛病',m:'Đồ vật bị trục trặc, hỏng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy đã sửa được tật cũ này.',answer:'他把这个老毛病改掉了。',answerPy:'Tā bǎ zhège lǎo máobing gǎidiào le.',
      note:'改掉 + 毛病: bổ ngữ kết quả 掉 (bỏ hẳn).',pair:'把'},
     {promptLang:'vi',prompt:'Chiếc điện thoại này ngày càng hay trục trặc.',answer:'这部手机的毛病越来越多了。',answerPy:'Zhè bù shǒujī de máobing yuè lái yuè duō le.',
      note:'毛病 + 多: lắm trục trặc (bảng 词语搭配).',pair:'越来越'}
   ]},

  {n:7,zh:'道理',py:'dàolǐ',pos:'Danh từ',vn:'lý lẽ, đạo lý',hv:'đạo lý',em:'💬',lesson:1,
   explain:['Lẽ phải, lý lẽ làm người, làm việc.','Nguyên lý, quy luật của sự vật.'],
   usage:'讲道理 (nói lý / biết điều), 有道理 (có lý), 做人的道理. 大道理 = lý lẽ to tát chung chung (hơi chê). Khác 理论 (lý thuyết có hệ thống).',
   collo:['讲道理','有道理','做人的道理','大道理'],
   ex_zh:'父母给我讲了许多做人的道理，对我的影响很大。',ex_py:'Fùmǔ gěi wǒ jiǎngle xǔduō zuòrén de dàolǐ, duì wǒ de yǐngxiǎng hěn dà.',ex_vn:'Bố mẹ giảng cho tôi rất nhiều đạo lý làm người, ảnh hưởng tới tôi rất lớn.',
   exList:[
     {zh:'父母给我讲了许多做人的道理，对我的影响很大。',py:'Fùmǔ gěi wǒ jiǎngle xǔduō zuòrén de dàolǐ, duì wǒ de yǐngxiǎng hěn dà.',vn:'Bố mẹ giảng cho tôi rất nhiều đạo lý làm người, ảnh hưởng tới tôi rất lớn.'},
     {zh:'儿子的毛病是只会讲大道理。',py:'Érzi de máobing shì zhǐ huì jiǎng dà dàolǐ.',vn:'Tật của con trai là chỉ biết nói lý lẽ to tát.'},
     {zh:'你说的很有道理，我听你的。',py:'Nǐ shuō de hěn yǒu dàolǐ, wǒ tīng nǐ de.',vn:'Cậu nói rất có lý, tớ nghe cậu.'}
   ],
   colloFull:[
     {zh:'讲道理',py:'jiǎng dàolǐ',vn:'nói lý lẽ; biết điều'},
     {zh:'有道理',py:'yǒu dàolǐ',vn:'có lý'},
     {zh:'做人的道理',py:'zuòrén de dàolǐ',vn:'đạo lý làm người'},
     {zh:'大道理',py:'dà dàolǐ',vn:'lý lẽ to tát'},
     {zh:'明白这个道理',py:'míngbai zhège dàolǐ',vn:'hiểu đạo lý này'}
   ],
   patterns:[
     {s:'Sub + 说得 / 说的 + (很)有道理',m:'Ai đó nói (rất) có lý'},
     {s:'给 + người + 讲道理',m:'Giảng giải lý lẽ cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả em trai tôi cũng hiểu đạo lý này.',answer:'连弟弟都懂这个道理。',answerPy:'Lián dìdi dōu dǒng zhège dàolǐ.',
      note:'懂 / 明白 + 道理.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Đạo lý này là bà ngoại dạy tôi.',answer:'这个道理是姥姥教给我的。',answerPy:'Zhège dàolǐ shì lǎolao jiāo gěi wǒ de.',
      note:'姥姥 là từ bài 2 — ôn lại.',pair:'是……的'}
   ]},

  {n:8,zh:'迟早',py:'chízǎo',pos:'Phó từ',vn:'sớm muộn, trước sau gì',hv:'trì tảo',em:'⏰',lesson:1,
   explain:['Sớm hay muộn, trước sau gì việc đó cũng sẽ xảy ra.'],
   usage:'Đứng trước động từ, thường đi với 会 / 要 / 都会: 迟早会……, 迟早都会……. Làm định ngữ: 迟早的事.',
   collo:['迟早会','迟早都会','迟早要','迟早的事'],
   ex_zh:'如果让他当了大将，迟早会害了赵国。',ex_py:'Rúguǒ ràng tā dāngle dàjiàng, chízǎo huì hài le Zhàoguó.',ex_vn:'Nếu để nó làm đại tướng, sớm muộn gì cũng hại nước Triệu.',
   exList:[
     {zh:'如果让他当了大将，迟早会害了赵国。',py:'Rúguǒ ràng tā dāngle dàjiàng, chízǎo huì hài le Zhàoguó.',vn:'Nếu để nó làm đại tướng, sớm muộn gì cũng hại nước Triệu.'},
     {zh:'随着网络技术的发展，这些问题迟早都会得到解决。',py:'Suízhe wǎngluò jìshù de fāzhǎn, zhèxiē wèntí chízǎo dōu huì dédào jiějué.',vn:'Cùng với sự phát triển của công nghệ mạng, những vấn đề này sớm muộn đều sẽ được giải quyết.'},
     {zh:'这件事迟早是要解决的。',py:'Zhè jiàn shì chízǎo shì yào jiějué de.',vn:'Chuyện này trước sau gì cũng phải giải quyết.'}
   ],
   colloFull:[
     {zh:'迟早会',py:'chízǎo huì',vn:'sớm muộn sẽ'},
     {zh:'迟早都会',py:'chízǎo dōu huì',vn:'sớm muộn đều sẽ'},
     {zh:'迟早要',py:'chízǎo yào',vn:'trước sau gì cũng phải'},
     {zh:'迟早的事',py:'chízǎo de shì',vn:'chuyện sớm muộn'},
     {zh:'迟早会明白',py:'chízǎo huì míngbai',vn:'sớm muộn sẽ hiểu'}
   ],
   patterns:[
     {s:'Sub + 迟早 + 会 / 要 + V',m:'Trước sau gì ai/việc gì cũng sẽ…'},
     {s:'……是迟早的事',m:'… là chuyện sớm muộn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mỗi ngày kiên trì luyện tập, sớm muộn gì cậu cũng sẽ nói lưu loát.',answer:'只要你每天坚持练习，迟早会说得很流利。',answerPy:'Zhǐyào nǐ měi tiān jiānchí liànxí, chízǎo huì shuō de hěn liúlì.',
      note:'迟早 đứng trước 会.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Bí mật này sớm muộn gì cũng sẽ bị người khác phát hiện.',answer:'这个秘密迟早会被别人发现。',answerPy:'Zhège mìmì chízǎo huì bèi biéren fāxiàn.',
      note:'迟早 + 会 + 被: phó từ, động từ năng nguyện đứng trước 被.',pair:'被'}
   ]},

  {n:9,zh:'军队',py:'jūnduì',pos:'Danh từ',vn:'quân đội',hv:'quân đội',em:'🪖',lesson:1,
   explain:['Lực lượng vũ trang có tổ chức của một nước.'],
   usage:'Lượng từ: 一支军队. 派军队, 带领军队; 参加军队 (nhập ngũ).',
   collo:['秦国军队','派军队','带领军队','一支军队'],
   ex_zh:'这一年正好秦国军队来打赵国。',ex_py:'Zhè yì nián zhènghǎo Qínguó jūnduì lái dǎ Zhàoguó.',ex_vn:'Đúng năm ấy quân đội nước Tần đến đánh nước Triệu.',
   exList:[
     {zh:'这一年正好秦国军队来打赵国。',py:'Zhè yì nián zhènghǎo Qínguó jūnduì lái dǎ Zhàoguó.',vn:'Đúng năm ấy quân đội nước Tần đến đánh nước Triệu.'},
     {zh:'将军带领军队打败了敌人。',py:'Jiāngjūn dàilǐng jūnduì dǎbàile dírén.',vn:'Tướng quân dẫn quân đánh bại kẻ thù.'},
     {zh:'他十八岁就参加了军队。',py:'Tā shíbā suì jiù cānjiāle jūnduì.',vn:'Anh ấy mười tám tuổi đã nhập ngũ.'}
   ],
   colloFull:[
     {zh:'秦国军队',py:'Qínguó jūnduì',vn:'quân đội nước Tần'},
     {zh:'派军队',py:'pài jūnduì',vn:'phái quân đội'},
     {zh:'带领军队',py:'dàilǐng jūnduì',vn:'dẫn dắt quân đội'},
     {zh:'一支军队',py:'yì zhī jūnduì',vn:'một đạo quân'},
     {zh:'参加军队',py:'cānjiā jūnduì',vn:'gia nhập quân đội'}
   ],
   patterns:[
     {s:'一支 + 军队',m:'Một đạo quân (lượng từ 支)'},
     {s:'派 / 带领 + 军队',m:'Phái / dẫn quân'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quân đội nước Triệu bị quân Tần đánh bại.',answer:'赵国的军队被秦军打败了。',answerPy:'Zhàoguó de jūnduì bèi Qín jūn dǎbài le.',
      note:'秦军 = 秦国的军队 (cách viết gọn).',pair:'被'},
     {promptLang:'vi',prompt:'Quân đội vừa đến, kẻ địch liền bỏ chạy.',answer:'军队一到，敌人就逃跑了。',answerPy:'Jūnduì yí dào, dírén jiù táopǎo le.',
      note:'一 đọc yí trước thanh 4 (到).',pair:'一……就……'}
   ]},

  {n:10,zh:'派',py:'pài',pos:'Động từ',vn:'phái đi, cử đi',hv:'phái',em:'📤',lesson:1,
   explain:['Giao nhiệm vụ, cử người đi làm một việc gì đó.'],
   usage:'派 + người + (去/到 + nơi) + V (câu kiêm ngữ). Bị động: 被派到……. Khác 让 (bảo/để): 派 là cử đi làm nhiệm vụ.',
   collo:['派人','派他去','被派到','派代表'],
   ex_zh:'赵国派老将廉颇带20万大军迎战。',ex_py:'Zhàoguó pài lǎojiàng Lián Pō dài èrshí wàn dàjūn yíngzhàn.',ex_vn:'Nước Triệu cử lão tướng Liêm Pha dẫn 20 vạn đại quân nghênh chiến.',
   exList:[
     {zh:'赵国派老将廉颇带20万大军迎战。',py:'Zhàoguó pài lǎojiàng Lián Pō dài èrshí wàn dàjūn yíngzhàn.',vn:'Nước Triệu cử lão tướng Liêm Pha dẫn 20 vạn đại quân nghênh chiến.'},
     {zh:'他派赵括去换回廉颇。',py:'Tā pài Zhào Kuò qù huànhuí Lián Pō.',vn:'Ông ta cử Triệu Quát đi thay Liêm Pha về.'},
     {zh:'他被派到上海分公司去任总经理了。',py:'Tā bèi pài dào Shànghǎi fēngōngsī qù rèn zǒngjīnglǐ le.',vn:'Anh ấy được cử đến chi nhánh Thượng Hải làm tổng giám đốc rồi.'}
   ],
   colloFull:[
     {zh:'派人',py:'pài rén',vn:'cử người'},
     {zh:'派他去',py:'pài tā qù',vn:'cử anh ấy đi'},
     {zh:'被派到',py:'bèi pài dào',vn:'được cử đến'},
     {zh:'派代表',py:'pài dàibiǎo',vn:'cử đại diện'},
     {zh:'派车',py:'pài chē',vn:'điều xe'}
   ],
   patterns:[
     {s:'派 + người + 去 + V',m:'Cử ai đi làm gì'},
     {s:'被派到 + nơi + (去) + V',m:'Được cử đến đâu (làm gì)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy được cử đến chi nhánh Thượng Hải rồi.',answer:'他被派到上海分公司了。',answerPy:'Tā bèi pài dào Shànghǎi fēngōngsī le.',
      note:'被派到 + nơi chốn.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi là do công ty cử đến.',answer:'我是公司派来的。',answerPy:'Wǒ shì gōngsī pài lai de.',
      note:'是……的 nhấn mạnh người thực hiện.',pair:'是……的'}
   ]},

  {n:11,zh:'弱',py:'ruò',pos:'Tính từ',vn:'yếu, kém',hv:'nhược',em:'🥀',lesson:1,
   explain:['Sức lực, thế lực nhỏ, kém — trái nghĩa với 强.'],
   usage:'敌强我弱; 身体弱; A 比 B 弱; 由强变弱. Hay đi cặp với 强.',
   collo:['敌强我弱','身体弱','能力弱','比对方弱'],
   ex_zh:'廉颇根据敌强我弱的形势，命令士兵们坚守阵地。',ex_py:'Lián Pō gēnjù dí qiáng wǒ ruò de xíngshì, mìnglìng shìbīngmen jiānshǒu zhèndì.',ex_vn:'Liêm Pha dựa vào thế địch mạnh ta yếu, ra lệnh cho binh lính giữ vững trận địa.',
   exList:[
     {zh:'廉颇根据敌强我弱的形势，命令士兵们坚守阵地。',py:'Lián Pō gēnjù dí qiáng wǒ ruò de xíngshì, mìnglìng shìbīngmen jiānshǒu zhèndì.',vn:'Liêm Pha dựa vào thế địch mạnh ta yếu, ra lệnh cho binh lính giữ vững trận địa.'},
     {zh:'她从小身体就比较弱。',py:'Tā cóngxiǎo shēntǐ jiù bǐjiào ruò.',vn:'Cô ấy từ nhỏ sức khoẻ đã khá yếu.'},
     {zh:'我们队的实力比对方弱一点儿。',py:'Wǒmen duì de shílì bǐ duìfāng ruò yìdiǎnr.',vn:'Thực lực đội chúng tôi yếu hơn đối phương một chút.'}
   ],
   colloFull:[
     {zh:'敌强我弱',py:'dí qiáng wǒ ruò',vn:'địch mạnh ta yếu'},
     {zh:'身体弱',py:'shēntǐ ruò',vn:'sức khoẻ yếu'},
     {zh:'能力弱',py:'nénglì ruò',vn:'năng lực kém'},
     {zh:'比对方弱',py:'bǐ duìfāng ruò',vn:'yếu hơn đối phương'},
     {zh:'由强变弱',py:'yóu qiáng biàn ruò',vn:'từ mạnh chuyển thành yếu'}
   ],
   patterns:[
     {s:'A + 比 + B + 弱',m:'A yếu hơn B'},
     {s:'敌强我弱',m:'Địch mạnh ta yếu (văn viết, 4 chữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tín hiệu điện thoại ngày càng yếu.',answer:'手机信号越来越弱了。',answerPy:'Shǒujī xìnhào yuè lái yuè ruò le.',
      note:'越来越 + tính từ + 了.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy đội chúng tôi khá yếu, nhưng mọi người đều không bỏ cuộc.',answer:'虽然我们队比较弱，但是大家都没有放弃。',answerPy:'Suīrán wǒmen duì bǐjiào ruò, dànshì dàjiā dōu méiyǒu fàngqì.',
      note:'弱 làm vị ngữ.',pair:'虽然……但是……'}
   ]},

  {n:12,zh:'形势',py:'xíngshì',pos:'Danh từ',vn:'tình hình, cục diện',hv:'hình thế',em:'📊',lesson:1,
   explain:['Tình hình phát triển của sự việc (thường là việc lớn: chiến tranh, kinh tế, quốc tế).'],
   usage:'形势 + 好转 / 紧张 / 严重 / 危险 / 乐观 (bảng 词语搭配); 根据……的形势.',
   collo:['敌强我弱的形势','形势好转','形势紧张','形势严重'],
   ex_zh:'现在的形势是敌强我弱，我们要做的就是坚守阵地。',ex_py:'Xiànzài de xíngshì shì dí qiáng wǒ ruò, wǒmen yào zuò de jiù shì jiānshǒu zhèndì.',ex_vn:'Tình thế bây giờ là địch mạnh ta yếu, việc chúng ta cần làm là giữ vững trận địa.',
   exList:[
     {zh:'现在的形势是敌强我弱，我们要做的就是坚守阵地。',py:'Xiànzài de xíngshì shì dí qiáng wǒ ruò, wǒmen yào zuò de jiù shì jiānshǒu zhèndì.',vn:'Tình thế bây giờ là địch mạnh ta yếu, việc chúng ta cần làm là giữ vững trận địa.'},
     {zh:'经过大家的努力，公司的形势开始好转了。',py:'Jīngguò dàjiā de nǔlì, gōngsī de xíngshì kāishǐ hǎozhuǎn le.',vn:'Nhờ mọi người cố gắng, tình hình công ty bắt đầu chuyển biến tốt.'},
     {zh:'廉颇根据敌强我弱的形势，命令士兵们坚守阵地。',py:'Lián Pō gēnjù dí qiáng wǒ ruò de xíngshì, mìnglìng shìbīngmen jiānshǒu zhèndì.',vn:'Liêm Pha dựa vào thế địch mạnh ta yếu, ra lệnh cho binh lính giữ vững trận địa.'}
   ],
   colloFull:[
     {zh:'敌强我弱的形势',py:'dí qiáng wǒ ruò de xíngshì',vn:'thế địch mạnh ta yếu'},
     {zh:'形势好转',py:'xíngshì hǎozhuǎn',vn:'tình hình chuyển biến tốt'},
     {zh:'形势紧张',py:'xíngshì jǐnzhāng',vn:'tình hình căng thẳng'},
     {zh:'形势严重',py:'xíngshì yánzhòng',vn:'tình hình nghiêm trọng'},
     {zh:'国际形势',py:'guójì xíngshì',vn:'tình hình quốc tế'}
   ],
   patterns:[
     {s:'形势 + 好转 / 紧张 / 严重',m:'Tình hình chuyển tốt / căng thẳng / nghiêm trọng'},
     {s:'根据 + ……的形势 + V',m:'Căn cứ vào tình hình… mà làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tình hình ngày càng căng thẳng.',answer:'形势越来越紧张了。',answerPy:'Xíngshì yuè lái yuè jǐnzhāng le.',
      note:'形势 + 紧张.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tình hình vừa chuyển biến tốt, mọi người liền yên tâm.',answer:'形势一好转，大家就放心了。',answerPy:'Xíngshì yì hǎozhuǎn, dàjiā jiù fàngxīn le.',
      note:'一 đọc yì trước thanh 3 (好).',pair:'一……就……'}
   ]},

  {n:13,zh:'命令',py:'mìnglìng',pos:'Động từ / Danh từ',vn:'ra lệnh; mệnh lệnh',hv:'mệnh lệnh',em:'📢',lesson:1,
   explain:['Động từ: cấp trên bảo cấp dưới phải làm gì.','Danh từ: lời, văn bản ra lệnh.'],
   usage:'Động từ: 命令 + người + V (câu kiêm ngữ). Danh từ: 下命令, 执行命令, 服从命令, 接到命令.',
   collo:['命令士兵','下命令','执行命令','服从命令'],
   ex_zh:'廉颇命令士兵们坚守阵地，绝对不可主动出战。',ex_py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.',ex_vn:'Liêm Pha ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.',
   exList:[
     {zh:'廉颇命令士兵们坚守阵地，绝对不可主动出战。',py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.',vn:'Liêm Pha ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.'},
     {zh:'将军下了命令，士兵们马上出发了。',py:'Jiāngjūn xiàle mìnglìng, shìbīngmen mǎshàng chūfā le.',vn:'Tướng quân ra lệnh, binh lính lập tức xuất phát.'},
     {zh:'军人必须服从命令。',py:'Jūnrén bìxū fúcóng mìnglìng.',vn:'Quân nhân phải phục tùng mệnh lệnh.'}
   ],
   colloFull:[
     {zh:'命令士兵',py:'mìnglìng shìbīng',vn:'ra lệnh cho binh lính'},
     {zh:'下命令',py:'xià mìnglìng',vn:'ban lệnh'},
     {zh:'执行命令',py:'zhíxíng mìnglìng',vn:'thi hành mệnh lệnh'},
     {zh:'服从命令',py:'fúcóng mìnglìng',vn:'phục tùng mệnh lệnh'},
     {zh:'接到命令',py:'jiēdào mìnglìng',vn:'nhận được lệnh'}
   ],
   patterns:[
     {s:'命令 + người + V',m:'Ra lệnh cho ai làm gì'},
     {s:'下 / 执行 / 服从 + 命令',m:'Ban / thi hành / phục tùng mệnh lệnh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lệnh vừa ban xuống, quân đội liền xuất phát.',answer:'命令一下，军队就出发了。',answerPy:'Mìnglìng yí xià, jūnduì jiù chūfā le.',
      note:'下命令 → 命令一下.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Mệnh lệnh này là do tướng quân ban ra.',answer:'这个命令是将军下的。',answerPy:'Zhège mìnglìng shì jiāngjūn xià de.',
      note:'是……的 nhấn mạnh người ban lệnh.',pair:'是……的'}
   ]},

  {n:14,zh:'守',py:'shǒu',pos:'Động từ',vn:'phòng thủ, trấn giữ; tuân thủ',hv:'thủ',em:'🏰',lesson:1,
   explain:['Canh giữ, phòng thủ một nơi (守城, 守阵地).','Tuân theo quy tắc, lời hứa (守规矩, 守信用).'],
   usage:'坚守 = kiên quyết giữ; 守住 = giữ được; 守在 + nơi chốn. Trái nghĩa 攻 / 进攻.',
   collo:['坚守阵地','守城','守规矩','守信用'],
   ex_zh:'廉颇命令士兵们坚守阵地。',ex_py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì.',ex_vn:'Liêm Pha ra lệnh cho binh lính kiên quyết giữ trận địa.',
   exList:[
     {zh:'廉颇命令士兵们坚守阵地。',py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì.',vn:'Liêm Pha ra lệnh cho binh lính kiên quyết giữ trận địa.'},
     {zh:'几个士兵守在城门口。',py:'Jǐ ge shìbīng shǒu zài chéng ménkǒu.',vn:'Mấy người lính canh ở cổng thành.'},
     {zh:'做人要守信用，答应别人的事一定要做到。',py:'Zuòrén yào shǒu xìnyòng, dāying biéren de shì yídìng yào zuòdào.',vn:'Làm người phải giữ chữ tín, đã hứa với ai thì nhất định phải làm được.'}
   ],
   colloFull:[
     {zh:'坚守阵地',py:'jiānshǒu zhèndì',vn:'kiên quyết giữ trận địa'},
     {zh:'守城',py:'shǒu chéng',vn:'giữ thành'},
     {zh:'守规矩',py:'shǒu guīju',vn:'giữ quy củ'},
     {zh:'守信用',py:'shǒu xìnyòng',vn:'giữ chữ tín'},
     {zh:'守在门口',py:'shǒu zài ménkǒu',vn:'canh ở cửa'}
   ],
   patterns:[
     {s:'(坚)守 + 阵地 / 城',m:'(Kiên quyết) giữ trận địa / thành'},
     {s:'守 + 规矩 / 信用',m:'Tuân thủ quy củ / giữ chữ tín'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần giữ được trận địa, quân địch sẽ không vào được.',answer:'只要守住阵地，敌人就进不来。',answerPy:'Zhǐyào shǒuzhù zhèndì, dírén jiù jìn bu lái.',
      note:'守住: bổ ngữ kết quả 住 (giữ chắc).',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Ngay cả quy tắc đơn giản nhất anh ta cũng không tuân thủ.',answer:'他连最简单的规矩都不守。',answerPy:'Tā lián zuì jiǎndān de guīju dōu bù shǒu.',
      note:'守 + 规矩 = tuân thủ quy tắc.',pair:'连……都……'}
   ]},

  {n:15,zh:'阵地',py:'zhèndì',pos:'Danh từ',vn:'trận địa, mặt trận',hv:'trận địa',em:'🚩',lesson:1,
   explain:['Nơi quân đội bố trí để chiến đấu.','Nghĩa bóng: lĩnh vực hoạt động (文化阵地).'],
   usage:'坚守 / 守住 / 离开 / 占领 + 阵地.',
   collo:['坚守阵地','守住阵地','离开阵地','占领阵地'],
   ex_zh:'廉颇命令士兵们坚守阵地，绝对不可主动出战。',ex_py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.',ex_vn:'Liêm Pha ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.',
   exList:[
     {zh:'廉颇命令士兵们坚守阵地，绝对不可主动出战。',py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.',vn:'Liêm Pha ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.'},
     {zh:'士兵们守住了阵地。',py:'Shìbīngmen shǒuzhùle zhèndì.',vn:'Binh lính đã giữ được trận địa.'},
     {zh:'没有命令，谁也不能离开阵地。',py:'Méiyǒu mìnglìng, shéi yě bù néng líkāi zhèndì.',vn:'Không có lệnh thì ai cũng không được rời trận địa.'}
   ],
   colloFull:[
     {zh:'坚守阵地',py:'jiānshǒu zhèndì',vn:'kiên quyết giữ trận địa'},
     {zh:'守住阵地',py:'shǒuzhù zhèndì',vn:'giữ được trận địa'},
     {zh:'离开阵地',py:'líkāi zhèndì',vn:'rời trận địa'},
     {zh:'占领阵地',py:'zhànlǐng zhèndì',vn:'chiếm trận địa'},
     {zh:'文化阵地',py:'wénhuà zhèndì',vn:'mặt trận văn hoá'}
   ],
   patterns:[
     {s:'坚守 / 守住 + 阵地',m:'Giữ vững trận địa'},
     {s:'离开 / 占领 + 阵地',m:'Rời / chiếm trận địa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trận địa bị quân địch chiếm mất rồi.',answer:'阵地被敌人占领了。',answerPy:'Zhèndì bèi dírén zhànlǐng le.',
      note:'阵地 làm chủ ngữ câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Tuy quân địch tấn công nhiều lần, nhưng binh lính vẫn giữ được trận địa.',answer:'虽然敌人多次进攻，但是士兵们还是守住了阵地。',answerPy:'Suīrán dírén duō cì jìngōng, dànshì shìbīngmen háishi shǒuzhùle zhèndì.',
      note:'守住 + 阵地.',pair:'虽然……但是……'}
   ]},

  {n:16,zh:'绝对',py:'juéduì',pos:'Tính từ / Phó từ',vn:'tuyệt đối; nhất định',hv:'tuyệt đối',em:'💯',lesson:1,
   explain:['Phó từ: chắc chắn hoàn toàn, nhấn mạnh thái độ khẳng định (绝对不可, 绝对没问题).','Tính từ: không có điều kiện, không có giới hạn (绝对的优势).'],
   usage:'绝对 + (不/没/会) + V/Adj. Khác 完全 (hoàn toàn — nói mức độ trọn vẹn: 完全了解, 完全改变): 绝对 nhấn mạnh sự chắc chắn của phán đoán.',
   collo:['绝对不可','绝对没问题','绝对不会','绝对的优势'],
   ex_zh:'命令士兵们坚守阵地，绝对不可主动出战。',ex_py:'Mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.',ex_vn:'Ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.',
   exList:[
     {zh:'命令士兵们坚守阵地，绝对不可主动出战。',py:'Mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.',vn:'Ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.'},
     {zh:'我相信这样的安排他是绝对不会同意的。',py:'Wǒ xiāngxìn zhèyàng de ānpái tā shì juéduì bú huì tóngyì de.',vn:'Tôi tin sắp xếp như thế này anh ấy chắc chắn sẽ không đồng ý.'},
     {zh:'放心吧，这件事交给我，绝对没问题。',py:'Fàngxīn ba, zhè jiàn shì jiāo gěi wǒ, juéduì méi wèntí.',vn:'Yên tâm đi, việc này giao cho tôi, chắc chắn không vấn đề gì.'}
   ],
   colloFull:[
     {zh:'绝对不可',py:'juéduì bù kě',vn:'tuyệt đối không được'},
     {zh:'绝对没问题',py:'juéduì méi wèntí',vn:'chắc chắn không có vấn đề'},
     {zh:'绝对不会',py:'juéduì bú huì',vn:'tuyệt đối sẽ không'},
     {zh:'绝对的优势',py:'juéduì de yōushì',vn:'ưu thế tuyệt đối'},
     {zh:'绝对安全',py:'juéduì ānquán',vn:'an toàn tuyệt đối'}
   ],
   patterns:[
     {s:'绝对 + 不 / 没 + V',m:'Tuyệt đối không…'},
     {s:'绝对的 + N',m:'… tuyệt đối (绝对的优势)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tin anh ấy tuyệt đối sẽ không đồng ý.',answer:'我相信他是绝对不会同意的。',answerPy:'Wǒ xiāngxìn tā shì juéduì bú huì tóngyì de.',
      note:'是……的 bao quanh phán đoán, tăng sự khẳng định (câu SGK).',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần làm theo cách này thì chắc chắn không có vấn đề.',answer:'只要按这个方法做，就绝对没问题。',answerPy:'Zhǐyào àn zhège fāngfǎ zuò, jiù juéduì méi wèntí.',
      note:'绝对 đứng sau 就.',pair:'只要……就……'}
   ]},

  {n:17,zh:'主动',py:'zhǔdòng',pos:'Tính từ',vn:'chủ động',hv:'chủ động',em:'🙋',lesson:1,
   explain:['Tự mình làm trước, không đợi người khác thúc giục — trái nghĩa 被动.'],
   usage:'主动(地) + V: 主动出战, 主动帮助, 主动提出 (bảng 词语搭配). Làm vị ngữ: 他很主动.',
   collo:['主动出战','主动进攻','主动帮助','主动提出'],
   ex_zh:'赵括死搬兵书上的理论，主动进攻秦军。',ex_py:'Zhào Kuò sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn.',ex_vn:'Triệu Quát rập khuôn lý thuyết binh thư, chủ động tấn công quân Tần.',
   exList:[
     {zh:'赵括死搬兵书上的理论，主动进攻秦军。',py:'Zhào Kuò sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn.',vn:'Triệu Quát rập khuôn lý thuyết binh thư, chủ động tấn công quân Tần.'},
     {zh:'我们为什么不主动去跟他们竞争呢？',py:'Wǒmen wèi shénme bù zhǔdòng qù gēn tāmen jìngzhēng ne?',vn:'Sao chúng ta không chủ động cạnh tranh với họ?'},
     {zh:'遇到问题，他总是主动向老师请教。',py:'Yùdào wèntí, tā zǒngshì zhǔdòng xiàng lǎoshī qǐngjiào.',vn:'Gặp vấn đề, cậu ấy luôn chủ động hỏi thầy.'}
   ],
   colloFull:[
     {zh:'主动出战',py:'zhǔdòng chūzhàn',vn:'chủ động ra đánh'},
     {zh:'主动进攻',py:'zhǔdòng jìngōng',vn:'chủ động tấn công'},
     {zh:'主动帮助',py:'zhǔdòng bāngzhù',vn:'chủ động giúp đỡ'},
     {zh:'主动提出',py:'zhǔdòng tíchū',vn:'chủ động đề xuất'},
     {zh:'主动联系',py:'zhǔdòng liánxì',vn:'chủ động liên lạc'}
   ],
   patterns:[
     {s:'主动(地) + V',m:'Chủ động làm gì'},
     {s:'Sub + 很主动',m:'Ai đó rất chủ động'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chưa bao giờ chủ động giúp đỡ người khác.',answer:'他从来没主动帮助过别人。',answerPy:'Tā cónglái méi zhǔdòng bāngzhùguo biéren.',
      note:'过 đứng ngay sau động từ 帮助.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Vừa thấy bạn mới, cô ấy liền chủ động chào hỏi.',answer:'她一看见新同学，就主动跟他打招呼。',answerPy:'Tā yí kànjiàn xīn tóngxué, jiù zhǔdòng gēn tā dǎ zhāohu.',
      note:'主动 đứng trước cụm 跟 + người + V.',pair:'一……就……'}
   ]},

  {n:18,zh:'挑战',py:'tiǎozhàn',pos:'Động từ / Danh từ',vn:'khiêu chiến, thách thức; sự thử thách',hv:'khiêu chiến',em:'🥊',lesson:1,
   explain:['Động từ: kích đối phương ra đánh; thách thức ai/điều gì.','Danh từ: việc khó, thử thách phải vượt qua.'],
   usage:'向 + ai + 挑战; 挑战 + 自己 / 极限; 接受 / 面对 + 挑战; 挑战性 = tính thử thách.',
   collo:['多次挑战','接受挑战','面对挑战','挑战自己'],
   ex_zh:'秦军多次挑战，骂他是胆小鬼，他还是不出兵。',ex_py:'Qín jūn duō cì tiǎozhàn, mà tā shì dǎnxiǎoguǐ, tā háishi bù chū bīng.',ex_vn:'Quân Tần nhiều lần khiêu chiến, chửi ông là kẻ hèn nhát, ông vẫn không xuất binh.',
   exList:[
     {zh:'秦军多次挑战，骂他是胆小鬼，他还是不出兵。',py:'Qín jūn duō cì tiǎozhàn, mà tā shì dǎnxiǎoguǐ, tā háishi bù chū bīng.',vn:'Quân Tần nhiều lần khiêu chiến, chửi ông là kẻ hèn nhát, ông vẫn không xuất binh.'},
     {zh:'这次夏令营是一个挑战，看看你是不是真的可以独立了。',py:'Zhè cì xiàlìngyíng shì yí ge tiǎozhàn, kànkan nǐ shì bu shì zhēn de kěyǐ dúlì le.',vn:'Trại hè lần này là một thử thách, xem con có thật sự tự lập được chưa.'},
     {zh:'跳伞运动以自身的惊险和挑战性，被世人称为“勇敢者的运动”。',py:'Tiàosǎn yùndòng yǐ zìshēn de jīngxiǎn hé tiǎozhànxìng, bèi shìrén chēngwéi “yǒnggǎnzhě de yùndòng”.',vn:'Nhảy dù nhờ sự mạo hiểm và tính thử thách của nó mà được người đời gọi là “môn thể thao của người dũng cảm”.'}
   ],
   colloFull:[
     {zh:'多次挑战',py:'duō cì tiǎozhàn',vn:'khiêu chiến nhiều lần'},
     {zh:'接受挑战',py:'jiēshòu tiǎozhàn',vn:'nhận lời thách thức'},
     {zh:'面对挑战',py:'miànduì tiǎozhàn',vn:'đối mặt thử thách'},
     {zh:'挑战自己',py:'tiǎozhàn zìjǐ',vn:'thử thách bản thân'},
     {zh:'挑战性',py:'tiǎozhànxìng',vn:'tính thử thách'}
   ],
   patterns:[
     {s:'接受 / 面对 + 挑战',m:'Nhận / đối mặt thử thách (danh từ)'},
     {s:'挑战 + 自己',m:'Thử thách bản thân (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công việc ngày càng có tính thử thách.',answer:'工作越来越有挑战性了。',answerPy:'Gōngzuò yuè lái yuè yǒu tiǎozhànxìng le.',
      note:'有挑战性 = có tính thử thách.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tuy kỳ thi HSK 5 là một thử thách, nhưng tôi không sợ.',answer:'虽然HSK五级考试是一个挑战，但是我不怕。',answerPy:'Suīrán HSK wǔ jí kǎoshì shì yí ge tiǎozhàn, dànshì wǒ bú pà.',
      note:'挑战 làm danh từ: 一个挑战.',pair:'虽然……但是……'}
   ]},

  {n:19,zh:'骂',py:'mà',pos:'Động từ',vn:'chửi, mắng',hv:'mạ',em:'😡',lesson:1,
   explain:['Dùng lời thô, gay gắt để xúc phạm hoặc trách mắng người khác.'],
   usage:'骂 + người; 骂 + người + 是 + N (mắng ai là…); 挨骂 = bị mắng; 骂了一顿 = mắng cho một trận.',
   collo:['骂人','挨骂','骂他是胆小鬼','被老师骂'],
   ex_zh:'秦军多次挑战，骂他是胆小鬼。',ex_py:'Qín jūn duō cì tiǎozhàn, mà tā shì dǎnxiǎoguǐ.',ex_vn:'Quân Tần nhiều lần khiêu chiến, chửi ông là kẻ hèn nhát.',
   exList:[
     {zh:'秦军多次挑战，骂他是胆小鬼。',py:'Qín jūn duō cì tiǎozhàn, mà tā shì dǎnxiǎoguǐ.',vn:'Quân Tần nhiều lần khiêu chiến, chửi ông là kẻ hèn nhát.'},
     {zh:'小朋友们骂我是胆小鬼，不跟我玩儿。',py:'Xiǎopéngyǒumen mà wǒ shì dǎnxiǎoguǐ, bù gēn wǒ wánr.',vn:'Các bạn nhỏ chửi con là đồ nhát gan, không chơi với con.'},
     {zh:'为什么每次老张骂你，你都不出声？',py:'Wèi shénme měi cì Lǎo Zhāng mà nǐ, nǐ dōu bù chū shēng?',vn:'Sao lần nào ông Trương mắng cậu, cậu cũng không lên tiếng?'}
   ],
   colloFull:[
     {zh:'骂人',py:'mà rén',vn:'chửi người'},
     {zh:'挨骂',py:'ái mà',vn:'bị mắng'},
     {zh:'骂他是胆小鬼',py:'mà tā shì dǎnxiǎoguǐ',vn:'chửi ông là kẻ hèn nhát'},
     {zh:'被老师骂',py:'bèi lǎoshī mà',vn:'bị thầy mắng'},
     {zh:'骂了一顿',py:'màle yí dùn',vn:'mắng một trận'}
   ],
   patterns:[
     {s:'骂 + người + 是 + N',m:'Chửi ai là …'},
     {s:'被 + người + 骂(了一顿)',m:'Bị ai mắng (một trận)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua em trai bị bố mắng một trận.',answer:'昨天弟弟被爸爸骂了一顿。',answerPy:'Zuótiān dìdi bèi bàba màle yí dùn.',
      note:'一顿: lượng từ cho trận mắng, bữa ăn.',pair:'被'},
     {promptLang:'vi',prompt:'Mẹ tôi chưa bao giờ mắng tôi.',answer:'妈妈从来没骂过我。',answerPy:'Māma cónglái méi màguo wǒ.',
      note:'过 ngay sau 骂, trước tân ngữ.',pair:'从来没……过'}
   ]},

  {n:20,zh:'胆小鬼',py:'dǎnxiǎoguǐ',pos:'Danh từ',vn:'kẻ hèn nhát, đồ nhát gan',hv:'đảm tiểu quỷ',em:'🙈',lesson:1,
   explain:['Người nhát gan, cái gì cũng sợ (khẩu ngữ, mang ý chê).'],
   usage:'是个胆小鬼; 骂 / 叫 + người + 胆小鬼. 胆小 = nhát gan (tính từ); 鬼 ở đây chỉ người có tật xấu (懒鬼, 酒鬼).',
   collo:['骂他是胆小鬼','真是个胆小鬼','不是胆小鬼','被叫作胆小鬼'],
   ex_zh:'秦军骂他是胆小鬼，他还是不出兵。',ex_py:'Qín jūn mà tā shì dǎnxiǎoguǐ, tā háishi bù chū bīng.',ex_vn:'Quân Tần chửi ông là kẻ hèn nhát, ông vẫn không xuất binh.',
   exList:[
     {zh:'秦军骂他是胆小鬼，他还是不出兵。',py:'Qín jūn mà tā shì dǎnxiǎoguǐ, tā háishi bù chū bīng.',vn:'Quân Tần chửi ông là kẻ hèn nhát, ông vẫn không xuất binh.'},
     {zh:'小朋友们骂我是胆小鬼，不跟我玩儿。',py:'Xiǎopéngyǒumen mà wǒ shì dǎnxiǎoguǐ, bù gēn wǒ wánr.',vn:'Các bạn nhỏ chửi con là đồ nhát gan, không chơi với con.'},
     {zh:'我不是胆小鬼，我只是不想冒险。',py:'Wǒ bú shì dǎnxiǎoguǐ, wǒ zhǐshì bù xiǎng màoxiǎn.',vn:'Tớ không phải đồ nhát gan, tớ chỉ không muốn mạo hiểm.'}
   ],
   colloFull:[
     {zh:'骂他是胆小鬼',py:'mà tā shì dǎnxiǎoguǐ',vn:'chửi ông là kẻ hèn nhát'},
     {zh:'真是个胆小鬼',py:'zhēn shì ge dǎnxiǎoguǐ',vn:'đúng là đồ nhát gan'},
     {zh:'不是胆小鬼',py:'bú shì dǎnxiǎoguǐ',vn:'không phải kẻ nhát gan'},
     {zh:'被叫作胆小鬼',py:'bèi jiàozuò dǎnxiǎoguǐ',vn:'bị gọi là đồ nhát gan'},
     {zh:'胆小鬼才逃跑',py:'dǎnxiǎoguǐ cái táopǎo',vn:'chỉ kẻ hèn mới bỏ chạy'}
   ],
   patterns:[
     {s:'骂 / 叫 + người + 胆小鬼',m:'Chửi / gọi ai là đồ nhát gan'},
     {s:'(真)是个胆小鬼',m:'(Đúng) là đồ nhát gan'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ngay cả con chó nhỏ cũng sợ, đúng là đồ nhát gan!',answer:'你连小狗都怕，真是个胆小鬼！',answerPy:'Nǐ lián xiǎo gǒu dōu pà, zhēn shì ge dǎnxiǎoguǐ!',
      note:'是个 + N: 个 đọc nhẹ.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Anh ấy bị bạn bè gọi là đồ nhát gan.',answer:'他被朋友们叫作胆小鬼。',answerPy:'Tā bèi péngyoumen jiàozuò dǎnxiǎoguǐ.',
      note:'叫作 = gọi là.',pair:'被'}
   ]},

  {n:21,zh:'胜利',py:'shènglì',pos:'Động từ / Danh từ',vn:'thắng lợi',hv:'thắng lợi',em:'🏆',lesson:1,
   explain:['Đạt được mục đích đã định (thường là công việc lớn) — làm trạng ngữ: 胜利地完成.','Đánh bại đối phương trong chiến tranh, thi đấu: 取得胜利, 胜利者.'],
   usage:'取得胜利; 胜利(地) + V; 胜利者. KHÔNG làm bổ ngữ (không nói 办得很胜利) — muốn nói “làm rất thành công” thì dùng 成功.',
   collo:['取得胜利','胜利地完成','胜利者','最后的胜利'],
   ex_zh:'渐渐地，秦军无法快速取得胜利，粮食也快没了。',ex_py:'Jiànjiàn de, Qín jūn wúfǎ kuàisù qǔdé shènglì, liángshi yě kuài méi le.',ex_vn:'Dần dần, quân Tần không thể nhanh chóng giành thắng lợi, lương thực cũng sắp hết.',
   exList:[
     {zh:'渐渐地，秦军无法快速取得胜利，粮食也快没了。',py:'Jiànjiàn de, Qín jūn wúfǎ kuàisù qǔdé shènglì, liángshi yě kuài méi le.',vn:'Dần dần, quân Tần không thể nhanh chóng giành thắng lợi, lương thực cũng sắp hết.'},
     {zh:'经过一年多的努力，我们胜利地完成了调查工作。',py:'Jīngguò yì nián duō de nǔlì, wǒmen shènglì de wánchéngle diàochá gōngzuò.',vn:'Sau hơn một năm nỗ lực, chúng tôi đã hoàn thành thắng lợi công tác điều tra.'},
     {zh:'谁坚持到最后，谁就是这场比赛的胜利者。',py:'Shéi jiānchí dào zuìhòu, shéi jiù shì zhè chǎng bǐsài de shènglìzhě.',vn:'Ai kiên trì đến cuối, người đó là người chiến thắng của trận đấu này.'}
   ],
   colloFull:[
     {zh:'取得胜利',py:'qǔdé shènglì',vn:'giành thắng lợi'},
     {zh:'胜利地完成',py:'shènglì de wánchéng',vn:'hoàn thành thắng lợi'},
     {zh:'胜利者',py:'shènglìzhě',vn:'người chiến thắng'},
     {zh:'最后的胜利',py:'zuìhòu de shènglì',vn:'thắng lợi cuối cùng'},
     {zh:'战争的胜利',py:'zhànzhēng de shènglì',vn:'thắng lợi của cuộc chiến'}
   ],
   patterns:[
     {s:'取得 + 胜利',m:'Giành được thắng lợi'},
     {s:'胜利(地) + 完成 / 举办',m:'Hoàn thành / tổ chức thắng lợi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì đến cùng, chúng ta sẽ giành được thắng lợi.',answer:'只要坚持到最后，我们就能取得胜利。',answerPy:'Zhǐyào jiānchí dào zuìhòu, wǒmen jiù néng qǔdé shènglì.',
      note:'取得 + 胜利.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Trận thắng này không chỉ thuộc về các cầu thủ, mà cũng thuộc về mỗi cổ động viên.',answer:'这场胜利不仅属于队员，也属于每一位球迷。',answerPy:'Zhè chǎng shènglì bùjǐn shǔyú duìyuán, yě shǔyú měi yí wèi qiúmí.',
      note:'胜利 làm danh từ: 这场胜利.',pair:'不仅……也……'}
   ]},

  {n:22,zh:'调',py:'diào',pos:'Động từ',vn:'điều động, thuyên chuyển',hv:'điệu',em:'🔄',lesson:1,
   explain:['Chuyển người hoặc vật từ nơi này sang nơi khác (điều động công tác). Sách ghi 调(动): dạng hai âm tiết là 调动 (调动工作).','Chú ý: 调 còn đọc tiáo (空调, 调整) — nghĩa khác hẳn.'],
   usage:'调 + người + 到 / 回 + nơi: 把廉颇调回去, 被调到北京工作. 调动工作 = chuyển công tác.',
   collo:['调回去','调到北京','调动工作','被调走'],
   ex_zh:'必须想办法叫赵国把廉颇调回去。',ex_py:'Bìxū xiǎng bànfǎ jiào Zhàoguó bǎ Lián Pō diào huíqu.',ex_vn:'Phải nghĩ cách khiến nước Triệu điều Liêm Pha về.',
   exList:[
     {zh:'必须想办法叫赵国把廉颇调回去。',py:'Bìxū xiǎng bànfǎ jiào Zhàoguó bǎ Lián Pō diào huíqu.',vn:'Phải nghĩ cách khiến nước Triệu điều Liêm Pha về.'},
     {zh:'爸爸下个月要调到北京工作了。',py:'Bàba xià ge yuè yào diàodào Běijīng gōngzuò le.',vn:'Tháng sau bố sẽ được điều lên Bắc Kinh công tác.'},
     {zh:'他想调动工作，离家近一点儿。',py:'Tā xiǎng diàodòng gōngzuò, lí jiā jìn yìdiǎnr.',vn:'Anh ấy muốn chuyển công tác cho gần nhà một chút.'}
   ],
   colloFull:[
     {zh:'调回去',py:'diào huíqu',vn:'điều về'},
     {zh:'调到北京',py:'diàodào Běijīng',vn:'điều đến Bắc Kinh'},
     {zh:'调动工作',py:'diàodòng gōngzuò',vn:'chuyển công tác'},
     {zh:'被调走',py:'bèi diàozǒu',vn:'bị điều đi'},
     {zh:'调人',py:'diào rén',vn:'điều người'}
   ],
   patterns:[
     {s:'把 + người + 调 + 到 / 回 + nơi',m:'Điều ai đến / về đâu'},
     {s:'被调到 + nơi + 工作',m:'Bị / được điều đến đâu làm việc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty đã điều anh ấy sang phòng thị trường.',answer:'公司把他调到市场部了。',answerPy:'Gōngsī bǎ tā diàodào shìchǎngbù le.',
      note:'把 + người + 调到 + nơi.',pair:'把'},
     {promptLang:'vi',prompt:'Thầy Vương bị điều sang trường khác rồi.',answer:'王老师被调到别的学校去了。',answerPy:'Wáng lǎoshī bèi diàodào bié de xuéxiào qù le.',
      note:'被调到……去了.',pair:'被'}
   ]},

  {n:23,zh:'散布',py:'sànbù',pos:'Động từ',vn:'gieo rắc, tung (tin), phân tán',hv:'tán bố',em:'📣',lesson:1,
   explain:['Truyền đi khắp nơi — thường là điều xấu, không đúng sự thật (散布谣言).','Phân tán ra nhiều nơi (散布在各地).'],
   usage:'散布 + 谣言 / 消息 / 病毒; 四处散布. Mang sắc thái tiêu cực khi nói về tin tức.',
   collo:['散布谣言','四处散布','散布消息','散布在各地'],
   ex_zh:'他们在赵国四处散布谣言，说秦军最怕赵括。',ex_py:'Tāmen zài Zhàoguó sìchù sànbù yáoyán, shuō Qín jūn zuì pà Zhào Kuò.',ex_vn:'Họ tung tin đồn khắp nước Triệu, nói quân Tần sợ nhất Triệu Quát.',
   exList:[
     {zh:'他们在赵国四处散布谣言，说秦军最怕赵括。',py:'Tāmen zài Zhàoguó sìchù sànbù yáoyán, shuō Qín jūn zuì pà Zhào Kuò.',vn:'Họ tung tin đồn khắp nước Triệu, nói quân Tần sợ nhất Triệu Quát.'},
     {zh:'在网上散布谣言是违法的。',py:'Zài wǎng shang sànbù yáoyán shì wéifǎ de.',vn:'Tung tin đồn trên mạng là phạm pháp.'},
     {zh:'这种植物散布在山区各地。',py:'Zhè zhǒng zhíwù sànbù zài shānqū gè dì.',vn:'Loài thực vật này mọc rải rác khắp vùng núi.'}
   ],
   colloFull:[
     {zh:'散布谣言',py:'sànbù yáoyán',vn:'tung tin đồn'},
     {zh:'四处散布',py:'sìchù sànbù',vn:'tung ra khắp nơi'},
     {zh:'散布消息',py:'sànbù xiāoxi',vn:'tung tin'},
     {zh:'散布在各地',py:'sànbù zài gè dì',vn:'phân tán khắp nơi'},
     {zh:'散布病毒',py:'sànbù bìngdú',vn:'phát tán virus'}
   ],
   patterns:[
     {s:'散布 + 谣言 / 消息',m:'Tung tin đồn / tin tức'},
     {s:'散布在 + nơi',m:'Rải rác ở…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tin đồn này là do ai tung ra?',answer:'这个谣言是谁散布的？',answerPy:'Zhège yáoyán shì shéi sànbù de?',
      note:'是……的 hỏi người thực hiện.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tin này bị kẻ xấu tung lên mạng.',answer:'这个消息被坏人散布到了网上。',answerPy:'Zhège xiāoxi bèi huàirén sànbù dàole wǎng shang.',
      note:'散布到 + nơi.',pair:'被'}
   ]},

  {n:24,zh:'谣言',py:'yáoyán',pos:'Danh từ',vn:'tin đồn (nhảm)',hv:'dao ngôn',em:'🗣️',lesson:1,
   explain:['Lời đồn không có căn cứ, không đúng sự thật.'],
   usage:'散布 / 听信 / 相信 / 制造 + 谣言. Khác 传说 (truyền thuyết) và 消息 (tin tức nói chung).',
   collo:['散布谣言','听信谣言','相信谣言','制造谣言'],
   ex_zh:'听到外面的那些谣言，赵王果然上当了。',ex_py:'Tīngdào wàimiàn de nàxiē yáoyán, Zhào wáng guǒrán shàngdàng le.',ex_vn:'Nghe những tin đồn bên ngoài, vua Triệu quả nhiên mắc lừa.',
   exList:[
     {zh:'听到外面的那些谣言，赵王果然上当了。',py:'Tīngdào wàimiàn de nàxiē yáoyán, Zhào wáng guǒrán shàngdàng le.',vn:'Nghe những tin đồn bên ngoài, vua Triệu quả nhiên mắc lừa.'},
     {zh:'不要相信网上的谣言。',py:'Búyào xiāngxìn wǎng shang de yáoyán.',vn:'Đừng tin những tin đồn trên mạng.'},
     {zh:'这只是谣言，大家别当真。',py:'Zhè zhǐ shì yáoyán, dàjiā bié dàngzhēn.',vn:'Đây chỉ là tin đồn, mọi người đừng tưởng thật.'}
   ],
   colloFull:[
     {zh:'散布谣言',py:'sànbù yáoyán',vn:'tung tin đồn'},
     {zh:'听信谣言',py:'tīngxìn yáoyán',vn:'nghe theo tin đồn'},
     {zh:'相信谣言',py:'xiāngxìn yáoyán',vn:'tin vào tin đồn'},
     {zh:'制造谣言',py:'zhìzào yáoyán',vn:'bịa ra tin đồn'},
     {zh:'谣言四起',py:'yáoyán sì qǐ',vn:'tin đồn nổi lên khắp nơi'}
   ],
   patterns:[
     {s:'散布 / 相信 + 谣言',m:'Tung / tin tin đồn'},
     {s:'这只是谣言',m:'Đây chỉ là tin đồn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tin đồn trên mạng ngày càng nhiều.',answer:'网上的谣言越来越多了。',answerPy:'Wǎng shang de yáoyán yuè lái yuè duō le.',
      note:'谣言 làm chủ ngữ.',pair:'越来越'},
     {promptLang:'vi',prompt:'Tin đồn vừa lan ra, mọi người liền hoảng.',answer:'谣言一传开，大家就慌了。',answerPy:'Yáoyán yì chuánkāi, dàjiā jiù huāng le.',
      note:'传开 = lan ra (bổ ngữ 开).',pair:'一……就……'}
   ]},

  {n:25,zh:'上当',py:'shàng dàng',pos:'Động từ',vn:'bị lừa, mắc lừa',hv:'thượng đáng',em:'🎣',lesson:1,
   explain:['Bị người khác lừa gạt mà chịu thiệt.'],
   usage:'Ly hợp từ: 上当了, 上了……的当, 上了个大当, 上过当. Không mang tân ngữ trực tiếp (không nói 上当他).',
   collo:['果然上当了','上了他的当','上了个大当','容易上当'],
   ex_zh:'赵王听到外面的那些谣言，果然上当了。',ex_py:'Zhào wáng tīngdào wàimiàn de nàxiē yáoyán, guǒrán shàngdàng le.',ex_vn:'Vua Triệu nghe những tin đồn bên ngoài, quả nhiên mắc lừa.',
   exList:[
     {zh:'赵王听到外面的那些谣言，果然上当了。',py:'Zhào wáng tīngdào wàimiàn de nàxiē yáoyán, guǒrán shàngdàng le.',vn:'Vua Triệu nghe những tin đồn bên ngoài, quả nhiên mắc lừa.'},
     {zh:'太倒霉了！这次真是上了个大当！',py:'Tài dǎoméi le! Zhè cì zhēn shì shàngle ge dà dàng!',vn:'Xui quá! Lần này đúng là bị lừa một vố to!'},
     {zh:'买东西要多比较，别上当。',py:'Mǎi dōngxi yào duō bǐjiào, bié shàngdàng.',vn:'Mua đồ phải so sánh nhiều, đừng để bị lừa.'}
   ],
   colloFull:[
     {zh:'果然上当了',py:'guǒrán shàng dàng le',vn:'quả nhiên mắc lừa'},
     {zh:'上了他的当',py:'shàngle tā de dàng',vn:'bị hắn lừa'},
     {zh:'上了个大当',py:'shàngle ge dà dàng',vn:'bị một vố lừa lớn'},
     {zh:'容易上当',py:'róngyì shàng dàng',vn:'dễ bị lừa'},
     {zh:'别上当',py:'bié shàng dàng',vn:'đừng mắc lừa'}
   ],
   patterns:[
     {s:'Sub + 上当了',m:'Ai đó mắc lừa rồi'},
     {s:'上了 + người + 的当',m:'Bị ai lừa (ly hợp từ tách ra)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ tôi rất cẩn thận, chưa bao giờ bị lừa.',answer:'妈妈很小心，从来没上过当。',answerPy:'Māma hěn xiǎoxīn, cónglái méi shàngguo dàng.',
      note:'Ly hợp từ: 过 chen vào giữa — 上过当.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Ngay cả người thông minh như anh ấy cũng mắc lừa.',answer:'连他这么聪明的人都上当了。',answerPy:'Lián tā zhème cōngming de rén dōu shàngdàng le.',
      note:'上当 không mang tân ngữ.',pair:'连……都……'}
   ]},

  {n:26,zh:'再三',py:'zàisān',pos:'Phó từ',vn:'nhiều lần, hết lần này đến lần khác',hv:'tái tam',em:'🔁',lesson:1,
   explain:['Một lần rồi lại một lần (一次又一次).'],
   usage:'再三 + V (再三阻止, 再三邀请); hoặc V + 再三 khi động từ không mang tân ngữ (考虑再三, 犹豫再三).',
   collo:['再三阻止','再三邀请','考虑再三','再三强调'],
   ex_zh:'赵括的母亲再三阻止赵王任命儿子为大将。',ex_py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.',ex_vn:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.',
   exList:[
     {zh:'赵括的母亲再三阻止赵王任命儿子为大将。',py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.',vn:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.'},
     {zh:'我实在没时间，可他再三邀请，出于礼貌，我只好答应了。',py:'Wǒ shízài méi shíjiān, kě tā zàisān yāoqǐng, chūyú lǐmào, wǒ zhǐhǎo dāying le.',vn:'Tôi thật sự không có thời gian, nhưng anh ấy mời đi mời lại, vì phép lịch sự tôi đành nhận lời.'},
     {zh:'朋友请他做公司的总经理，他考虑再三，最后还是客气地拒绝了。',py:'Péngyou qǐng tā zuò gōngsī de zǒngjīnglǐ, tā kǎolǜ zàisān, zuìhòu háishi kèqi de jùjué le.',vn:'Bạn mời anh ấy làm tổng giám đốc công ty, anh cân nhắc nhiều lần, cuối cùng vẫn lịch sự từ chối.'}
   ],
   colloFull:[
     {zh:'再三阻止',py:'zàisān zǔzhǐ',vn:'nhiều lần ngăn cản'},
     {zh:'再三邀请',py:'zàisān yāoqǐng',vn:'mời đi mời lại'},
     {zh:'考虑再三',py:'kǎolǜ zàisān',vn:'cân nhắc nhiều lần'},
     {zh:'再三强调',py:'zàisān qiángdiào',vn:'nhấn mạnh nhiều lần'},
     {zh:'再三请求',py:'zàisān qǐngqiú',vn:'khẩn cầu nhiều lần'}
   ],
   patterns:[
     {s:'再三 + V',m:'Làm gì nhiều lần (再三阻止)'},
     {s:'V + 再三',m:'Động từ không tân ngữ + 再三 (考虑再三)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy mẹ đã nhắc nhiều lần, nhưng em trai vẫn quên mang chìa khoá.',answer:'虽然妈妈再三提醒，但是弟弟还是忘了带钥匙。',answerPy:'Suīrán māma zàisān tíxǐng, dànshì dìdi háishi wàngle dài yàoshi.',
      note:'再三 đứng trước động từ 提醒.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Được bạn bè mời đi mời lại, cuối cùng anh ấy đồng ý.',answer:'被朋友再三邀请，他最后答应了。',answerPy:'Bèi péngyou zàisān yāoqǐng, tā zuìhòu dāying le.',
      note:'被 + người + 再三 + V.',pair:'被'}
   ]},

  {n:27,zh:'阻止',py:'zǔzhǐ',pos:'Động từ',vn:'ngăn cản, cản trở',hv:'trở chỉ',em:'✋',lesson:1,
   explain:['Làm cho người khác không thể tiếp tục hành động, hoặc làm cho sự việc không xảy ra.'],
   usage:'阻止 + người + V; 阻止 + sự việc; bị động: 被……阻止了. 阻止不了 = không ngăn được.',
   collo:['再三阻止','阻止战争','被朋友阻止','阻止他去'],
   ex_zh:'赵括的母亲再三阻止赵王任命儿子为大将。',ex_py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.',ex_vn:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.',
   exList:[
     {zh:'赵括的母亲再三阻止赵王任命儿子为大将。',py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.',vn:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.'},
     {zh:'我见朋友的小孩怎么也打不开房门，就想帮他，却被朋友阻止了。',py:'Wǒ jiàn péngyou de xiǎohái zěnme yě dǎ bu kāi fángmén, jiù xiǎng bāng tā, què bèi péngyou zǔzhǐ le.',vn:'Thấy con của bạn mở mãi không được cửa phòng, tôi định giúp thì bị bạn ngăn lại.'},
     {zh:'之前我就再三地阻止你，你不听我的，能怪谁呢？',py:'Zhīqián wǒ jiù zàisān de zǔzhǐ nǐ, nǐ bù tīng wǒ de, néng guài shéi ne?',vn:'Trước đó tôi đã can cậu mấy lần, cậu không nghe, giờ trách ai được?'}
   ],
   colloFull:[
     {zh:'再三阻止',py:'zàisān zǔzhǐ',vn:'nhiều lần ngăn cản'},
     {zh:'阻止战争',py:'zǔzhǐ zhànzhēng',vn:'ngăn chặn chiến tranh'},
     {zh:'被朋友阻止',py:'bèi péngyou zǔzhǐ',vn:'bị bạn ngăn lại'},
     {zh:'阻止他去',py:'zǔzhǐ tā qù',vn:'ngăn anh ấy đi'},
     {zh:'阻止不了',py:'zǔzhǐ bu liǎo',vn:'không ngăn được'}
   ],
   patterns:[
     {s:'阻止 + người + V',m:'Ngăn ai làm gì'},
     {s:'被 + người + 阻止(了)',m:'Bị ai ngăn lại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi muốn đi, nhưng bị bố ngăn lại.',answer:'我想去，却被爸爸阻止了。',answerPy:'Wǒ xiǎng qù, què bèi bàba zǔzhǐ le.',
      note:'却 = nhưng lại (văn viết).',pair:'被'},
     {promptLang:'vi',prompt:'Ngay cả mẹ cũng không ngăn được anh ấy.',answer:'连妈妈都阻止不了他。',answerPy:'Lián māma dōu zǔzhǐ bu liǎo tā.',
      note:'V + 不了: bổ ngữ khả năng.',pair:'连……都……'}
   ]},

  {n:28,zh:'任命',py:'rènmìng',pos:'Động từ',vn:'bổ nhiệm',hv:'nhiệm mệnh',em:'📜',lesson:1,
   explain:['Chính thức giao cho ai một chức vụ.'],
   usage:'任命 + người + 为 + chức vụ (为 đọc wéi). Bị động: 被任命为……. Danh từ ghép: 任命书.',
   collo:['任命他为大将','被任命为经理','正式任命','任命书'],
   ex_zh:'赵括的母亲再三阻止赵王任命儿子为大将。',ex_py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.',ex_vn:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.',
   exList:[
     {zh:'赵括的母亲再三阻止赵王任命儿子为大将。',py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.',vn:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.'},
     {zh:'他被任命为公司的总经理。',py:'Tā bèi rènmìng wéi gōngsī de zǒngjīnglǐ.',vn:'Anh ấy được bổ nhiệm làm tổng giám đốc công ty.'},
     {zh:'学校正式任命李老师为校长。',py:'Xuéxiào zhèngshì rènmìng Lǐ lǎoshī wéi xiàozhǎng.',vn:'Nhà trường chính thức bổ nhiệm thầy Lý làm hiệu trưởng.'}
   ],
   colloFull:[
     {zh:'任命他为大将',py:'rènmìng tā wéi dàjiàng',vn:'bổ nhiệm anh ta làm đại tướng'},
     {zh:'被任命为经理',py:'bèi rènmìng wéi jīnglǐ',vn:'được bổ nhiệm làm giám đốc'},
     {zh:'正式任命',py:'zhèngshì rènmìng',vn:'chính thức bổ nhiệm'},
     {zh:'任命书',py:'rènmìngshū',vn:'quyết định bổ nhiệm'},
     {zh:'任命新校长',py:'rènmìng xīn xiàozhǎng',vn:'bổ nhiệm hiệu trưởng mới'}
   ],
   patterns:[
     {s:'任命 + người + 为 + chức vụ',m:'Bổ nhiệm ai làm chức gì'},
     {s:'被任命为 + chức vụ',m:'Được bổ nhiệm làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy được bổ nhiệm làm giám đốc rồi.',answer:'他被任命为经理了。',answerPy:'Tā bèi rènmìng wéi jīnglǐ le.',
      note:'为 đọc wéi.',pair:'被'},
     {promptLang:'vi',prompt:'Hiệu trưởng mới là tháng trước được bổ nhiệm.',answer:'新校长是上个月被任命的。',answerPy:'Xīn xiàozhǎng shì shàng ge yuè bèi rènmìng de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'}
   ]},

  {n:29,zh:'独立',py:'dúlì',pos:'Động từ',vn:'độc lập, tự lập',hv:'độc lập',em:'🧍',lesson:1,
   explain:['Tự mình làm, không dựa vào người khác.','(Nước) có chủ quyền, không lệ thuộc.'],
   usage:'Làm vị ngữ (孩子独立了), trạng ngữ (独立(地) + 生活 / 完成 / 思考) hoặc định ngữ (独立的国家).',
   collo:['独立生活','独立完成','独立思考','独立带兵作战'],
   ex_zh:'他还没有独立带兵作战的资格。',ex_py:'Tā hái méiyǒu dúlì dài bīng zuòzhàn de zīgé.',ex_vn:'Anh ta chưa có tư cách một mình cầm quân đánh trận.',
   exList:[
     {zh:'他还没有独立带兵作战的资格。',py:'Tā hái méiyǒu dúlì dài bīng zuòzhàn de zīgé.',vn:'Anh ta chưa có tư cách một mình cầm quân đánh trận.'},
     {zh:'家长应尽量创造一个能让孩子独立生活和学习的环境。',py:'Jiāzhǎng yīng jǐnliàng chuàngzào yí ge néng ràng háizi dúlì shēnghuó hé xuéxí de huánjìng.',vn:'Phụ huynh nên cố gắng tạo một môi trường để con có thể tự lập sinh hoạt và học tập.'},
     {zh:'上大学以后，我学会了独立生活。',py:'Shàng dàxué yǐhòu, wǒ xuéhuìle dúlì shēnghuó.',vn:'Lên đại học, tôi đã học được cách sống tự lập.'}
   ],
   colloFull:[
     {zh:'独立生活',py:'dúlì shēnghuó',vn:'sống tự lập'},
     {zh:'独立完成',py:'dúlì wánchéng',vn:'tự mình hoàn thành'},
     {zh:'独立思考',py:'dúlì sīkǎo',vn:'tư duy độc lập'},
     {zh:'独立带兵作战',py:'dúlì dài bīng zuòzhàn',vn:'một mình cầm quân đánh trận'},
     {zh:'独立的国家',py:'dúlì de guójiā',vn:'quốc gia độc lập'}
   ],
   patterns:[
     {s:'独立(地) + V',m:'Tự mình làm gì (独立完成)'},
     {s:'Sub + 独立了',m:'Ai đó đã tự lập'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con gái càng ngày càng tự lập.',answer:'女儿越来越独立了。',answerPy:'Nǚ\'ér yuè lái yuè dúlì le.',
      note:'独立 làm vị ngữ.',pair:'越来越'},
     {promptLang:'vi',prompt:'Cậu ấy tự mình làm xong hết bài tập.',answer:'他独立把作业都做完了。',answerPy:'Tā dúlì bǎ zuòyè dōu zuòwán le.',
      note:'Trạng ngữ 独立 đứng trước cụm 把.',pair:'把'}
   ]},

  {n:30,zh:'资格',py:'zīgé',pos:'Danh từ',vn:'tư cách, đủ điều kiện',hv:'tư cách',em:'🎫',lesson:1,
   explain:['Điều kiện, thân phận cần có để làm một việc gì đó.'],
   usage:'有 / 没有 + 资格 + V; 具备 / 取消 + 资格; ……的资格. Đừng nhầm với 性格 (tính cách).',
   collo:['没有资格','具备资格','参赛资格','取消资格'],
   ex_zh:'他还没有独立带兵作战的资格。',ex_py:'Tā hái méiyǒu dúlì dài bīng zuòzhàn de zīgé.',ex_vn:'Anh ta chưa có tư cách một mình cầm quân đánh trận.',
   exList:[
     {zh:'他还没有独立带兵作战的资格。',py:'Tā hái méiyǒu dúlì dài bīng zuòzhàn de zīgé.',vn:'Anh ta chưa có tư cách một mình cầm quân đánh trận.'},
     {zh:'谁都没有资格轻视别人。',py:'Shéi dōu méiyǒu zīgé qīngshì biéren.',vn:'Không ai có tư cách coi thường người khác.'},
     {zh:'我跟你一样，没有参加会议的资格。',py:'Wǒ gēn nǐ yíyàng, méiyǒu cānjiā huìyì de zīgé.',vn:'Tôi cũng như anh, không có tư cách dự họp.'}
   ],
   colloFull:[
     {zh:'没有资格',py:'méiyǒu zīgé',vn:'không có tư cách'},
     {zh:'具备资格',py:'jùbèi zīgé',vn:'có đủ tư cách'},
     {zh:'参赛资格',py:'cānsài zīgé',vn:'tư cách dự thi'},
     {zh:'取消资格',py:'qǔxiāo zīgé',vn:'huỷ tư cách'},
     {zh:'有资格参加',py:'yǒu zīgé cānjiā',vn:'đủ tư cách tham gia'}
   ],
   patterns:[
     {s:'(没)有资格 + V',m:'(Không) có tư cách làm gì'},
     {s:'V + 的资格',m:'Tư cách để làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần đủ 18 tuổi là có tư cách tham gia.',answer:'只要满十八岁，就有资格参加。',answerPy:'Zhǐyào mǎn shíbā suì, jiù yǒu zīgé cānjiā.',
      note:'有资格 + V.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Anh ta bị huỷ tư cách thi đấu.',answer:'他被取消了比赛资格。',answerPy:'Tā bèi qǔxiāole bǐsài zīgé.',
      note:'取消 + 资格.',pair:'被'}
   ]},

  {n:31,zh:'糊涂',py:'hútu',pos:'Tính từ',vn:'đần độn, hồ đồ, lú lẫn',hv:'hồ đồ',em:'😵',lesson:1,
   explain:['Không hiểu lẽ phải, đầu óc không minh mẫn; nhầm lẫn.'],
   usage:'糊涂的 + 孩子 / 领导 / 话 / 看法 / 脑子 (bảng 词语搭配); 犯糊涂 = nhất thời hồ đồ. Lặp lại: 糊里糊涂.',
   collo:['糊涂的赵王','脑子真糊涂','犯糊涂','糊涂的看法'],
   ex_zh:'可是，糊涂的赵王哪里听得进去！',ex_py:'Kěshì, hútu de Zhào wáng nǎli tīng de jìnqù!',ex_vn:'Nhưng ông vua Triệu hồ đồ nào có chịu nghe!',
   exList:[
     {zh:'可是，糊涂的赵王哪里听得进去！',py:'Kěshì, hútu de Zhào wáng nǎli tīng de jìnqù!',vn:'Nhưng ông vua Triệu hồ đồ nào có chịu nghe!'},
     {zh:'你这脑子可真糊涂，银行卡的密码怎么能忘了呢？',py:'Nǐ zhè nǎozi kě zhēn hútu, yínhángkǎ de mìmǎ zěnme néng wàngle ne?',vn:'Cái đầu cậu đúng là lú, mật khẩu thẻ ngân hàng sao lại quên được?'},
     {zh:'我一时糊涂，做错了事。',py:'Wǒ yìshí hútu, zuòcuòle shì.',vn:'Tôi nhất thời hồ đồ nên làm sai.'}
   ],
   colloFull:[
     {zh:'糊涂的赵王',py:'hútu de Zhào wáng',vn:'vua Triệu hồ đồ'},
     {zh:'脑子真糊涂',py:'nǎozi zhēn hútu',vn:'đầu óc thật lú lẫn'},
     {zh:'犯糊涂',py:'fàn hútu',vn:'nhất thời hồ đồ'},
     {zh:'糊涂的看法',py:'hútu de kànfǎ',vn:'cách nhìn hồ đồ'},
     {zh:'一时糊涂',py:'yìshí hútu',vn:'hồ đồ nhất thời'}
   ],
   patterns:[
     {s:'Sub + (真)糊涂',m:'Ai đó (thật) hồ đồ'},
     {s:'糊涂的 + N',m:'… hồ đồ (糊涂的赵王)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ngoại tuổi càng cao, càng hay lú lẫn.',answer:'姥爷年纪越来越大，也越来越糊涂了。',answerPy:'Lǎoye niánjì yuè lái yuè dà, yě yuè lái yuè hútu le.',
      note:'姥爷 — họ hàng bên ngoại, ôn bài 2.',pair:'越来越'},
     {promptLang:'vi',prompt:'Cậu lú quá, ngay cả tên mình cũng viết sai!',answer:'你真糊涂，连自己的名字都写错了！',answerPy:'Nǐ zhēn hútu, lián zìjǐ de míngzi dōu xiěcuò le!',
      note:'糊涂 làm vị ngữ.',pair:'连……都……'}
   ]},

  {n:32,zh:'公元',py:'gōngyuán',pos:'Danh từ',vn:'công nguyên',hv:'công nguyên',em:'📅',lesson:1,
   explain:['Cách tính năm lấy năm sinh của Chúa Giê-su làm năm đầu (公元元年).'],
   usage:'公元 + năm; 公元前 + năm = trước Công nguyên. Số năm đọc từng chữ số: 260年 = èr liù líng nián.',
   collo:['公元前260年','公元2008年','公元前','公元元年'],
   ex_zh:'公元前260年，赵括带兵出战。',ex_py:'Gōngyuán qián èr liù líng nián, Zhào Kuò dài bīng chūzhàn.',ex_vn:'Năm 260 trước Công nguyên, Triệu Quát cầm quân ra trận.',
   exList:[
     {zh:'公元前260年，赵括带兵出战。',py:'Gōngyuán qián èr liù líng nián, Zhào Kuò dài bīng chūzhàn.',vn:'Năm 260 trước Công nguyên, Triệu Quát cầm quân ra trận.'},
     {zh:'北京在公元2008年举办了奥运会。',py:'Běijīng zài gōngyuán èr líng líng bā nián jǔbànle Àoyùnhuì.',vn:'Bắc Kinh tổ chức Thế vận hội vào năm 2008.'},
     {zh:'战国时期是从公元前475年到公元前221年。',py:'Zhànguó shíqī shì cóng gōngyuán qián sì qī wǔ nián dào gōngyuán qián èr èr yī nián.',vn:'Thời Chiến Quốc kéo dài từ năm 475 đến năm 221 trước Công nguyên.'}
   ],
   colloFull:[
     {zh:'公元前260年',py:'gōngyuán qián èr liù líng nián',vn:'năm 260 trước Công nguyên'},
     {zh:'公元2008年',py:'gōngyuán èr líng líng bā nián',vn:'năm 2008 Công nguyên'},
     {zh:'公元前',py:'gōngyuán qián',vn:'trước Công nguyên'},
     {zh:'公元元年',py:'gōngyuán yuánnián',vn:'năm đầu Công nguyên'},
     {zh:'公元纪年',py:'gōngyuán jìnián',vn:'cách tính năm Công nguyên'}
   ],
   patterns:[
     {s:'公元(前) + năm',m:'Năm … (trước) Công nguyên'},
     {s:'从公元前…年到公元前…年',m:'Từ năm … đến năm … trước Công nguyên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc chiến này xảy ra vào năm 260 trước Công nguyên.',answer:'这场战争是公元前260年发生的。',answerPy:'Zhè chǎng zhànzhēng shì gōngyuán qián èr liù líng nián fāshēng de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Trung Quốc không chỉ dùng lịch Công nguyên mà cũng dùng âm lịch.',answer:'中国不仅用公元纪年，也用农历。',answerPy:'Zhōngguó bùjǐn yòng gōngyuán jìnián, yě yòng nónglì.',
      note:'农历 = âm lịch.',pair:'不仅……也……'}
   ]},

  {n:33,zh:'盲目',py:'mángmù',pos:'Tính từ',vn:'mù quáng',hv:'manh mục',em:'🕶️',lesson:1,
   explain:['(Làm) mà không suy xét, không có hiểu biết rõ ràng — như người mù đi đường. 盲 = mù (盲人, bài 7).'],
   usage:'盲目 + V: 盲目自信, 盲目相信, 盲目跟风, 盲目乐观. Mang ý chê.',
   collo:['盲目自信','盲目相信','盲目跟风','盲目乐观'],
   ex_zh:'一直盲目自信、轻视秦军的他完全改变了廉颇的作战方案。',ex_py:'Yìzhí mángmù zìxìn, qīngshì Qín jūn de tā wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',ex_vn:'Hắn — kẻ luôn tự tin mù quáng, coi thường quân Tần — đã thay đổi hoàn toàn phương án tác chiến của Liêm Pha.',
   exList:[
     {zh:'一直盲目自信、轻视秦军的他完全改变了廉颇的作战方案。',py:'Yìzhí mángmù zìxìn, qīngshì Qín jūn de tā wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',vn:'Hắn — kẻ luôn tự tin mù quáng, coi thường quân Tần — đã thay đổi hoàn toàn phương án tác chiến của Liêm Pha.'},
     {zh:'买东西不要盲目跟风。',py:'Mǎi dōngxi búyào mángmù gēnfēng.',vn:'Mua đồ đừng chạy theo trào lưu một cách mù quáng.'},
     {zh:'不要盲目相信网上的消息。',py:'Búyào mángmù xiāngxìn wǎng shang de xiāoxi.',vn:'Đừng tin mù quáng tin tức trên mạng.'}
   ],
   colloFull:[
     {zh:'盲目自信',py:'mángmù zìxìn',vn:'tự tin mù quáng'},
     {zh:'盲目相信',py:'mángmù xiāngxìn',vn:'tin mù quáng'},
     {zh:'盲目跟风',py:'mángmù gēnfēng',vn:'chạy theo trào lưu mù quáng'},
     {zh:'盲目乐观',py:'mángmù lèguān',vn:'lạc quan mù quáng'},
     {zh:'盲目地学习',py:'mángmù de xuéxí',vn:'học một cách mù quáng'}
   ],
   patterns:[
     {s:'盲目 + V',m:'Làm gì một cách mù quáng'},
     {s:'不要 + 盲目 + V',m:'Đừng mù quáng…'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta bị chính sự tự tin mù quáng của mình hại.',answer:'他被自己的盲目自信害了。',answerPy:'Tā bèi zìjǐ de mángmù zìxìn hài le.',
      note:'盲目自信 làm danh ngữ sau 被.',pair:'被'},
     {promptLang:'vi',prompt:'Ngày càng nhiều người trẻ chạy theo trào lưu một cách mù quáng.',answer:'越来越多的年轻人盲目跟风。',answerPy:'Yuè lái yuè duō de niánqīngrén mángmù gēnfēng.',
      note:'越来越多的 + N.',pair:'越来越'}
   ]},

  {n:34,zh:'轻视',py:'qīngshì',pos:'Động từ',vn:'khinh thường, xem thường',hv:'khinh thị',em:'🙄',lesson:1,
   explain:['Không coi trọng, coi nhẹ người hoặc việc — trái nghĩa 重视.'],
   usage:'轻视 + 对方 / 科学 / 成果 / 工作 / 知识 (bảng 词语搭配). Bị động: 被人轻视.',
   collo:['轻视对方','轻视别人','轻视知识','轻视秦军'],
   ex_zh:'一直盲目自信、轻视秦军的他完全改变了廉颇的作战方案。',ex_py:'Yìzhí mángmù zìxìn, qīngshì Qín jūn de tā wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',ex_vn:'Hắn — kẻ luôn tự tin mù quáng, coi thường quân Tần — đã thay đổi hoàn toàn phương án tác chiến của Liêm Pha.',
   exList:[
     {zh:'一直盲目自信、轻视秦军的他完全改变了廉颇的作战方案。',py:'Yìzhí mángmù zìxìn, qīngshì Qín jūn de tā wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',vn:'Hắn — kẻ luôn tự tin mù quáng, coi thường quân Tần — đã thay đổi hoàn toàn phương án tác chiến của Liêm Pha.'},
     {zh:'谁都没有资格轻视别人。',py:'Shéi dōu méiyǒu zīgé qīngshì biéren.',vn:'Không ai có tư cách coi thường người khác.'},
     {zh:'比赛的时候千万不能轻视对方。',py:'Bǐsài de shíhou qiānwàn bù néng qīngshì duìfāng.',vn:'Khi thi đấu tuyệt đối không được coi thường đối phương.'}
   ],
   colloFull:[
     {zh:'轻视对方',py:'qīngshì duìfāng',vn:'coi thường đối phương'},
     {zh:'轻视别人',py:'qīngshì biéren',vn:'coi thường người khác'},
     {zh:'轻视知识',py:'qīngshì zhīshi',vn:'xem nhẹ tri thức'},
     {zh:'轻视秦军',py:'qīngshì Qín jūn',vn:'coi thường quân Tần'},
     {zh:'被人轻视',py:'bèi rén qīngshì',vn:'bị người ta coi thường'}
   ],
   patterns:[
     {s:'轻视 + đối tượng',m:'Coi thường ai / cái gì'},
     {s:'被(人)轻视',m:'Bị (người ta) coi thường'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy từ nhỏ đã bị người khác coi thường.',answer:'他从小就被别人轻视。',answerPy:'Tā cóngxiǎo jiù bèi biéren qīngshì.',
      note:'从小就 + 被.',pair:'被'},
     {promptLang:'vi',prompt:'Tuy đối thủ khá yếu, nhưng chúng ta cũng không được coi thường họ.',answer:'虽然对方比较弱，但是我们也不能轻视他们。',answerPy:'Suīrán duìfāng bǐjiào ruò, dànshì wǒmen yě bù néng qīngshì tāmen.',
      note:'Chính bài học của Triệu Quát.',pair:'虽然……但是……'}
   ]},

  {n:35,zh:'方案',py:'fāng\'àn',pos:'Danh từ',vn:'kế hoạch, phương án',hv:'phương án',em:'🗂️',lesson:1,
   explain:['Kế hoạch làm việc cụ thể, chi tiết đã được tính toán.'],
   usage:'提出 / 拿出 / 改变 / 通过 + 方案; 作战方案, 解决方案. Lượng từ: 一个 / 一套方案.',
   collo:['作战方案','改变方案','提出方案','解决方案'],
   ex_zh:'赵括完全改变了廉颇的作战方案。',ex_py:'Zhào Kuò wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',ex_vn:'Triệu Quát thay đổi hoàn toàn phương án tác chiến của Liêm Pha.',
   exList:[
     {zh:'赵括完全改变了廉颇的作战方案。',py:'Zhào Kuò wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn.',vn:'Triệu Quát thay đổi hoàn toàn phương án tác chiến của Liêm Pha.'},
     {zh:'我觉得还不如先拿出一个有利于我们自己的方案。',py:'Wǒ juéde hái bùrú xiān náchū yí ge yǒulì yú wǒmen zìjǐ de fāng\'àn.',vn:'Tôi thấy chi bằng đưa ra trước một phương án có lợi cho chính chúng ta.'},
     {zh:'这个方案大家都同意了。',py:'Zhège fāng\'àn dàjiā dōu tóngyì le.',vn:'Phương án này mọi người đều đồng ý rồi.'}
   ],
   colloFull:[
     {zh:'作战方案',py:'zuòzhàn fāng\'àn',vn:'phương án tác chiến'},
     {zh:'改变方案',py:'gǎibiàn fāng\'àn',vn:'thay đổi phương án'},
     {zh:'提出方案',py:'tíchū fāng\'àn',vn:'đưa ra phương án'},
     {zh:'解决方案',py:'jiějué fāng\'àn',vn:'phương án giải quyết'},
     {zh:'拿出方案',py:'náchū fāng\'àn',vn:'đưa ra phương án'}
   ],
   patterns:[
     {s:'提出 / 拿出 + 方案',m:'Đưa ra phương án'},
     {s:'……的 + 方案',m:'Phương án … (作战的方案, 解决问题的方案)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ta đã thay đổi hoàn toàn phương án.',answer:'他把方案完全改变了。',answerPy:'Tā bǎ fāng\'àn wánquán gǎibiàn le.',
      note:'把 + 方案 + 改变了.',pair:'把'},
     {promptLang:'vi',prompt:'Phương án của tôi được giám đốc chấp nhận rồi.',answer:'我的方案被经理接受了。',answerPy:'Wǒ de fāng\'àn bèi jīnglǐ jiēshòu le.',
      note:'方案 làm chủ ngữ câu 被.',pair:'被'}
   ]},

  {n:36,zh:'进攻',py:'jìngōng',pos:'Động từ',vn:'tấn công, công kích',hv:'tiến công',em:'🏹',lesson:1,
   explain:['Chủ động đánh vào đối phương — trái nghĩa 防守 / 守.'],
   usage:'进攻 + đối phương; 主动进攻; 发起 / 停止 + 进攻. Dùng cả trong thi đấu thể thao.',
   collo:['主动进攻','进攻秦军','发起进攻','停止进攻'],
   ex_zh:'赵括死搬兵书上的理论，主动进攻秦军。',ex_py:'Zhào Kuò sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn.',ex_vn:'Triệu Quát rập khuôn lý thuyết binh thư, chủ động tấn công quân Tần.',
   exList:[
     {zh:'赵括死搬兵书上的理论，主动进攻秦军。',py:'Zhào Kuò sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn.',vn:'Triệu Quát rập khuôn lý thuyết binh thư, chủ động tấn công quân Tần.'},
     {zh:'足球比赛中，他们一直在进攻。',py:'Zúqiú bǐsài zhōng, tāmen yìzhí zài jìngōng.',vn:'Trong trận bóng đá, họ liên tục tấn công.'},
     {zh:'天一亮，军队就发起了进攻。',py:'Tiān yí liàng, jūnduì jiù fāqǐle jìngōng.',vn:'Trời vừa sáng, quân đội đã phát động tấn công.'}
   ],
   colloFull:[
     {zh:'主动进攻',py:'zhǔdòng jìngōng',vn:'chủ động tấn công'},
     {zh:'进攻秦军',py:'jìngōng Qín jūn',vn:'tấn công quân Tần'},
     {zh:'发起进攻',py:'fāqǐ jìngōng',vn:'phát động tấn công'},
     {zh:'停止进攻',py:'tíngzhǐ jìngōng',vn:'ngừng tấn công'},
     {zh:'进攻的机会',py:'jìngōng de jīhuì',vn:'cơ hội tấn công'}
   ],
   patterns:[
     {s:'进攻 + đối phương',m:'Tấn công ai'},
     {s:'发起 / 停止 + 进攻',m:'Phát động / ngừng tấn công'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời vừa sáng, quân đội liền phát động tấn công.',answer:'天一亮，军队就发起了进攻。',answerPy:'Tiān yí liàng, jūnduì jiù fāqǐle jìngōng.',
      note:'一 đọc yí trước thanh 4 (亮).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy quân địch tấn công rất nhiều lần, nhưng đều không giành được thắng lợi.',answer:'虽然敌人进攻了很多次，但是都没有取得胜利。',answerPy:'Suīrán dírén jìngōngle hěn duō cì, dànshì dōu méiyǒu qǔdé shènglì.',
      note:'进攻了 + số lần.',pair:'虽然……但是……'}
   ]},

  {n:37,zh:'宝贵',py:'bǎoguì',pos:'Tính từ',vn:'quý báu, quý giá',hv:'bảo quý',em:'💎',lesson:1,
   explain:['Rất có giá trị, rất đáng quý (thường nói điều trừu tượng: sinh mạng, thời gian, kinh nghiệm).'],
   usage:'宝贵的 + 机会 / 生命 / 经验 / 意见 / 时间 (bảng 词语搭配). Làm vị ngữ: ……是宝贵的.',
   collo:['宝贵的生命','宝贵的时间','宝贵的经验','宝贵的意见','宝贵的机会'],
   ex_zh:'数十万赵军全部被杀，丢掉了宝贵的生命。',ex_py:'Shù shí wàn Zhào jūn quánbù bèi shā, diūdiàole bǎoguì de shēngmìng.',ex_vn:'Mấy chục vạn quân Triệu bị giết sạch, mất đi sinh mạng quý giá.',
   exList:[
     {zh:'数十万赵军全部被杀，丢掉了宝贵的生命。',py:'Shù shí wàn Zhào jūn quánbù bèi shā, diūdiàole bǎoguì de shēngmìng.',vn:'Mấy chục vạn quân Triệu bị giết sạch, mất đi sinh mạng quý giá.'},
     {zh:'任何经验都是宝贵的，但并不是任何时候都是有效的。',py:'Rènhé jīngyàn dōu shì bǎoguì de, dàn bìng bú shì rènhé shíhou dōu shì yǒuxiào de.',vn:'Kinh nghiệm nào cũng quý, nhưng không phải lúc nào cũng hiệu quả.'},
     {zh:'谢谢您提出的宝贵意见。',py:'Xièxie nín tíchū de bǎoguì yìjiàn.',vn:'Cảm ơn những ý kiến quý báu mà ông đã đưa ra.'}
   ],
   colloFull:[
     {zh:'宝贵的生命',py:'bǎoguì de shēngmìng',vn:'sinh mạng quý giá'},
     {zh:'宝贵的时间',py:'bǎoguì de shíjiān',vn:'thời gian quý báu'},
     {zh:'宝贵的经验',py:'bǎoguì de jīngyàn',vn:'kinh nghiệm quý báu'},
     {zh:'宝贵的意见',py:'bǎoguì de yìjiàn',vn:'ý kiến quý báu'},
     {zh:'宝贵的机会',py:'bǎoguì de jīhuì',vn:'cơ hội quý giá'}
   ],
   patterns:[
     {s:'宝贵的 + N',m:'… quý báu'},
     {s:'……是宝贵的',m:'… là quý giá'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thời gian là thứ quý báu nhất.',answer:'时间是最宝贵的。',answerPy:'Shíjiān shì zuì bǎoguì de.',
      note:'是 + Adj + 的 khẳng định tính chất.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chuyến đi này không chỉ vui, mà cũng cho tôi nhiều kinh nghiệm quý báu.',answer:'这次旅行不仅很开心，也让我得到了很多宝贵的经验。',answerPy:'Zhè cì lǚxíng bùjǐn hěn kāixīn, yě ràng wǒ dédàole hěn duō bǎoguì de jīngyàn.',
      note:'宝贵的 + 经验.',pair:'不仅……也……'}
   ]},

  {n:38,zh:'讽刺',py:'fěngcì',pos:'Động từ',vn:'châm biếm, mỉa mai',hv:'phúng thích',em:'🎭',lesson:1,
   explain:['Dùng lời nói, câu chuyện, hình tượng để chỉ trích, chế giễu một cách bóng gió.'],
   usage:'讽刺 + người / hiện tượng; 讽刺小说 / 讽刺的语气 (làm định ngữ).',
   collo:['讽刺那些人','讽刺小说','讽刺的语气','被人讽刺'],
   ex_zh:'现在常用这个成语讽刺那些只会空谈理论的人。',ex_py:'Xiànzài cháng yòng zhège chéngyǔ fěngcì nàxiē zhǐ huì kōngtán lǐlùn de rén.',ex_vn:'Ngày nay thường dùng thành ngữ này để châm biếm những người chỉ biết nói suông lý thuyết.',
   exList:[
     {zh:'现在常用这个成语讽刺那些只会空谈理论的人。',py:'Xiànzài cháng yòng zhège chéngyǔ fěngcì nàxiē zhǐ huì kōngtán lǐlùn de rén.',vn:'Ngày nay thường dùng thành ngữ này để châm biếm những người chỉ biết nói suông lý thuyết.'},
     {zh:'这个故事讽刺的是那些不懂得灵活变通的人。',py:'Zhège gùshi fěngcì de shì nàxiē bù dǒngde línghuó biàntōng de rén.',vn:'Câu chuyện này châm biếm những người không biết linh hoạt xoay xở.'},
     {zh:'他用讽刺的语气说：“你可真聪明啊！”',py:'Tā yòng fěngcì de yǔqì shuō: “Nǐ kě zhēn cōngming a!”',vn:'Anh ta nói bằng giọng mỉa mai: “Cậu đúng là thông minh quá!”'}
   ],
   colloFull:[
     {zh:'讽刺那些人',py:'fěngcì nàxiē rén',vn:'châm biếm những người đó'},
     {zh:'讽刺小说',py:'fěngcì xiǎoshuō',vn:'tiểu thuyết trào phúng'},
     {zh:'讽刺的语气',py:'fěngcì de yǔqì',vn:'giọng mỉa mai'},
     {zh:'被人讽刺',py:'bèi rén fěngcì',vn:'bị người ta châm chọc'},
     {zh:'讽刺社会现象',py:'fěngcì shèhuì xiànxiàng',vn:'châm biếm hiện tượng xã hội'}
   ],
   patterns:[
     {s:'用 + ……(来) + 讽刺 + N',m:'Dùng … để châm biếm …'},
     {s:'……讽刺的是……',m:'Điều … châm biếm là …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này không chỉ buồn cười, mà cũng châm biếm nhiều hiện tượng xã hội.',answer:'这部电影不仅很好笑，也讽刺了很多社会现象。',answerPy:'Zhè bù diànyǐng bùjǐn hěn hǎoxiào, yě fěngcìle hěn duō shèhuì xiànxiàng.',
      note:'讽刺 + 现象.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Câu chuyện này là châm biếm những người chỉ biết nói suông.',answer:'这个故事是讽刺那些只会空谈的人的。',answerPy:'Zhège gùshi shì fěngcì nàxiē zhǐ huì kōngtán de rén de.',
      note:'是……的 nhấn mạnh mục đích của câu chuyện.',pair:'是……的'}
   ]},

  {n:39,zh:'灵活',py:'línghuó',pos:'Tính từ',vn:'linh hoạt, nhạy bén',hv:'linh hoạt',em:'🤸',lesson:1,
   explain:['(Cơ thể) nhanh nhẹn; (đầu óc, cách làm) biết thay đổi theo tình hình, không cứng nhắc.'],
   usage:'做事 / 脑子 / 手脚 + 灵活; 灵活(地) + 运用 / 处理; 灵活变通.',
   collo:['灵活变通','做事灵活','脑子灵活','灵活运用'],
   ex_zh:'提醒大家做事一定要灵活，要注意理论联系实际。',ex_py:'Tíxǐng dàjiā zuòshì yídìng yào línghuó, yào zhùyì lǐlùn liánxì shíjì.',ex_vn:'Nhắc mọi người làm việc nhất định phải linh hoạt, phải chú ý gắn lý thuyết với thực tế.',
   exList:[
     {zh:'提醒大家做事一定要灵活，要注意理论联系实际。',py:'Tíxǐng dàjiā zuòshì yídìng yào línghuó, yào zhùyì lǐlùn liánxì shíjì.',vn:'Nhắc mọi người làm việc nhất định phải linh hoạt, phải chú ý gắn lý thuyết với thực tế.'},
     {zh:'这个故事讽刺的是那些不懂得灵活变通的人。',py:'Zhège gùshi fěngcì de shì nàxiē bù dǒngde línghuó biàntōng de rén.',vn:'Câu chuyện này châm biếm những người không biết linh hoạt xoay xở.'},
     {zh:'学了语法以后，要学会灵活运用。',py:'Xuéle yǔfǎ yǐhòu, yào xuéhuì línghuó yùnyòng.',vn:'Học ngữ pháp xong phải biết vận dụng linh hoạt.'}
   ],
   colloFull:[
     {zh:'灵活变通',py:'línghuó biàntōng',vn:'linh hoạt xoay xở'},
     {zh:'做事灵活',py:'zuòshì línghuó',vn:'làm việc linh hoạt'},
     {zh:'脑子灵活',py:'nǎozi línghuó',vn:'đầu óc nhanh nhạy'},
     {zh:'灵活运用',py:'línghuó yùnyòng',vn:'vận dụng linh hoạt'},
     {zh:'灵活的方法',py:'línghuó de fāngfǎ',vn:'cách làm linh hoạt'}
   ],
   patterns:[
     {s:'做事 / 脑子 + (很)灵活',m:'Làm việc / đầu óc (rất) linh hoạt'},
     {s:'灵活(地) + 运用',m:'Vận dụng linh hoạt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sau khi tập thể dục, ông ngoại ngày càng nhanh nhẹn.',answer:'锻炼以后，姥爷的身体越来越灵活了。',answerPy:'Duànliàn yǐhòu, lǎoye de shēntǐ yuè lái yuè línghuó le.',
      note:'身体灵活 = cơ thể nhanh nhẹn.',pair:'越来越'},
     {promptLang:'vi',prompt:'Chỉ cần vận dụng linh hoạt thì có thể nhớ được từ mới.',answer:'只要灵活运用，就能记住生词。',answerPy:'Zhǐyào línghuó yùnyòng, jiù néng jìzhù shēngcí.',
      note:'灵活 làm trạng ngữ trước 运用.',pair:'只要……就……'}
   ]},

  {n:40,zh:'战国',py:'Zhànguó',pos:'Danh từ riêng',vn:'thời Chiến Quốc (475 TCN – 221 TCN)',hv:'Chiến Quốc',em:'🏯',lesson:1,
   explain:['Thời kỳ lịch sử Trung Quốc (475 TCN – 221 TCN): bảy nước lớn (Tần, Sở, Tề, Yên, Hàn, Triệu, Nguỵ) đánh nhau liên miên, cuối cùng nước Tần thống nhất Trung Quốc.'],
   usage:'战国时期 (thời Chiến Quốc), 战国末期 (cuối thời Chiến Quốc).',
   collo:['战国时期','战国末期','战国七雄'],
   ex_zh:'两千七百多年前的战国末期，赵国名将赵奢有个儿子叫赵括。',ex_py:'Liǎngqiān qībǎi duō nián qián de Zhànguó mòqī, Zhàoguó míngjiàng Zhào Shē yǒu ge érzi jiào Zhào Kuò.',ex_vn:'Cuối thời Chiến Quốc hơn hai nghìn bảy trăm năm trước, danh tướng nước Triệu là Triệu Xa có một người con trai tên là Triệu Quát.',
   exList:[
     {zh:'两千七百多年前的战国末期，赵国名将赵奢有个儿子叫赵括。',py:'Liǎngqiān qībǎi duō nián qián de Zhànguó mòqī, Zhàoguó míngjiàng Zhào Shē yǒu ge érzi jiào Zhào Kuò.',vn:'Cuối thời Chiến Quốc hơn hai nghìn bảy trăm năm trước, danh tướng nước Triệu là Triệu Xa có một người con trai tên là Triệu Quát.'},
     {zh:'战国时期，各个国家之间的竞争非常激烈。',py:'Zhànguó shíqī, gè ge guójiā zhījiān de jìngzhēng fēicháng jīliè.',vn:'Thời Chiến Quốc, sự cạnh tranh giữa các nước vô cùng khốc liệt.'}
   ],
   colloFull:[
     {zh:'战国时期',py:'Zhànguó shíqī',vn:'thời Chiến Quốc'},
     {zh:'战国末期',py:'Zhànguó mòqī',vn:'cuối thời Chiến Quốc'},
     {zh:'战国七雄',py:'Zhànguó qī xióng',vn:'bảy nước mạnh thời Chiến Quốc'}
   ],
   patterns:[
     {s:'战国 + 时期 / 末期',m:'Thời / cuối thời Chiến Quốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện “đánh trận trên giấy” là xảy ra vào thời Chiến Quốc.',answer:'“纸上谈兵”的故事是在战国时期发生的。',answerPy:'“Zhǐshàng tánbīng” de gùshi shì zài Zhànguó shíqī fāshēng de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'},
     {promptLang:'vi',prompt:'Cuối thời Chiến Quốc, nước Tần ngày càng mạnh.',answer:'战国末期，秦国越来越强大了。',answerPy:'Zhànguó mòqī, Qínguó yuè lái yuè qiángdà le.',
      note:'Câu phần 热身 của sách: 秦国渐渐强大.',pair:'越来越'}
   ]},

  {n:41,zh:'赵国',py:'Zhàoguó',pos:'Danh từ riêng',vn:'nước Triệu',hv:'Triệu quốc',em:'🏰',lesson:1,
   explain:['Một trong bảy nước lớn thời Chiến Quốc, nằm ở phía bắc (vùng Hà Bắc, Sơn Tây ngày nay).'],
   usage:'赵国 + 名将 / 军队; 赵军 = quân Triệu (cách viết gọn).',
   collo:['赵国名将','赵国军队','打败赵国'],
   ex_zh:'秦人想在短期内打败赵国。',ex_py:'Qínrén xiǎng zài duǎnqī nèi dǎbài Zhàoguó.',ex_vn:'Người Tần muốn đánh bại nước Triệu trong thời gian ngắn.',
   exList:[
     {zh:'秦人想在短期内打败赵国。',py:'Qínrén xiǎng zài duǎnqī nèi dǎbài Zhàoguó.',vn:'Người Tần muốn đánh bại nước Triệu trong thời gian ngắn.'},
     {zh:'他们在赵国四处散布谣言。',py:'Tāmen zài Zhàoguó sìchù sànbù yáoyán.',vn:'Họ tung tin đồn khắp nước Triệu.'}
   ],
   colloFull:[
     {zh:'赵国名将',py:'Zhàoguó míngjiàng',vn:'danh tướng nước Triệu'},
     {zh:'赵国军队',py:'Zhàoguó jūnduì',vn:'quân đội nước Triệu'},
     {zh:'打败赵国',py:'dǎbài Zhàoguó',vn:'đánh bại nước Triệu'}
   ],
   patterns:[
     {s:'赵国 + 名将 / 军队',m:'Danh tướng / quân đội nước Triệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quân đội nước Triệu bị quân Tần đánh bại.',answer:'赵国的军队被秦军打败了。',answerPy:'Zhàoguó de jūnduì bèi Qín jūn dǎbài le.',
      note:'赵国的军队 = 赵军.',pair:'被'},
     {promptLang:'vi',prompt:'Nước Triệu không chỉ có Liêm Pha mà cũng có Triệu Xa.',answer:'赵国不仅有廉颇，也有赵奢。',answerPy:'Zhàoguó bùjǐn yǒu Lián Pō, yě yǒu Zhào Shē.',
      note:'不仅……也…… nối hai nhân vật.',pair:'不仅……也……'}
   ]},

  {n:42,zh:'赵奢',py:'Zhào Shē',pos:'Danh từ riêng',vn:'Triệu Xa (danh tướng nước Triệu, cha của Triệu Quát)',hv:'Triệu Xa',em:'🎖️',lesson:1,
   explain:['Danh tướng nước Triệu thời Chiến Quốc, cha của Triệu Quát. Ông sớm nhận ra con mình chỉ giỏi lý thuyết.'],
   usage:'Tên người: họ 赵 + tên 奢. Chú ý chữ 奢 (xa — trong 奢侈 xa xỉ).',
   collo:['名将赵奢','父亲赵奢','赵奢去世'],
   ex_zh:'就是父亲赵奢也难不住他。',ex_py:'Jiùshì fùqīn Zhào Shē yě nán bu zhù tā.',ex_vn:'Ngay cả cha là Triệu Xa cũng không làm khó được hắn.',
   exList:[
     {zh:'就是父亲赵奢也难不住他。',py:'Jiùshì fùqīn Zhào Shē yě nán bu zhù tā.',vn:'Ngay cả cha là Triệu Xa cũng không làm khó được hắn.'},
     {zh:'几年后，赵奢去世了。',py:'Jǐ nián hòu, Zhào Shē qùshì le.',vn:'Vài năm sau, Triệu Xa qua đời.'}
   ],
   colloFull:[
     {zh:'名将赵奢',py:'míngjiàng Zhào Shē',vn:'danh tướng Triệu Xa'},
     {zh:'父亲赵奢',py:'fùqīn Zhào Shē',vn:'người cha Triệu Xa'},
     {zh:'赵奢去世',py:'Zhào Shē qùshì',vn:'Triệu Xa qua đời'}
   ],
   patterns:[
     {s:'名将 + 赵奢',m:'Danh tướng Triệu Xa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả Triệu Xa cũng không nói lại được con trai mình.',answer:'连赵奢都说不过自己的儿子。',answerPy:'Lián Zhào Shē dōu shuō bu guò zìjǐ de érzi.',
      note:'Ôn điểm ngữ pháp V + 不过 của bài.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy Triệu Xa không nói lại con, nhưng ông biết con mình không làm được đại tướng.',answer:'虽然赵奢说不过儿子，但是他知道儿子当不了大将。',answerPy:'Suīrán Zhào Shē shuō bu guò érzi, dànshì tā zhīdào érzi dāng bu liǎo dàjiàng.',
      note:'说不过 / 当不了: bổ ngữ khả năng.',pair:'虽然……但是……'}
   ]},

  {n:43,zh:'赵括',py:'Zhào Kuò',pos:'Danh từ riêng',vn:'Triệu Quát (con Triệu Xa, nhân vật “đánh trận trên giấy”)',hv:'Triệu Quát',em:'📚',lesson:1,
   explain:['Con trai Triệu Xa, thuộc làu binh thư nhưng không có kinh nghiệm thực chiến; năm 260 TCN cầm quân đánh Tần và đại bại ở Trường Bình.'],
   usage:'Tên người: 赵 + 括 (kuò — trong 包括). Nhân vật gắn với thành ngữ 纸上谈兵.',
   collo:['赵括带兵出战','赵括之死','像赵括一样'],
   ex_zh:'赵括因此很骄傲，自以为天下无敌。',ex_py:'Zhào Kuò yīncǐ hěn jiāo\'ào, zì yǐwéi tiānxià wúdí.',ex_vn:'Triệu Quát vì thế rất kiêu ngạo, tự cho mình thiên hạ vô địch.',
   exList:[
     {zh:'赵括因此很骄傲，自以为天下无敌。',py:'Zhào Kuò yīncǐ hěn jiāo\'ào, zì yǐwéi tiānxià wúdí.',vn:'Triệu Quát vì thế rất kiêu ngạo, tự cho mình thiên hạ vô địch.'},
     {zh:'公元前260年，赵括带兵出战。',py:'Gōngyuán qián èr liù líng nián, Zhào Kuò dài bīng chūzhàn.',vn:'Năm 260 trước Công nguyên, Triệu Quát cầm quân ra trận.'}
   ],
   colloFull:[
     {zh:'赵括带兵出战',py:'Zhào Kuò dài bīng chūzhàn',vn:'Triệu Quát cầm quân ra trận'},
     {zh:'赵括之死',py:'Zhào Kuò zhī sǐ',vn:'cái chết của Triệu Quát'},
     {zh:'像赵括一样',py:'xiàng Zhào Kuò yíyàng',vn:'giống như Triệu Quát'}
   ],
   patterns:[
     {s:'像赵括一样 + V',m:'Giống như Triệu Quát mà …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Triệu Quát bị vua Triệu bổ nhiệm làm đại tướng.',answer:'赵括被赵王任命为大将。',answerPy:'Zhào Kuò bèi Zhào wáng rènmìng wéi dàjiàng.',
      note:'被任命为 + chức vụ.',pair:'被'},
     {promptLang:'vi',prompt:'Triệu Quát kiêu ngạo đến mức ngay cả cha mình cũng không coi ra gì.',answer:'赵括连父亲都不放在眼里。',answerPy:'Zhào Kuò lián fùqīn dōu bú fàng zài yǎn li.',
      note:'不放在眼里 = chẳng coi ra gì.',pair:'连……都……'}
   ]},

  {n:44,zh:'秦国',py:'Qínguó',pos:'Danh từ riêng',vn:'nước Tần',hv:'Tần quốc',em:'🐉',lesson:1,
   explain:['Nước lớn ở phía tây thời Chiến Quốc, ngày càng mạnh, năm 221 TCN đánh bại sáu nước còn lại và thống nhất Trung Quốc.'],
   usage:'秦国 + 军队; 秦军 = quân Tần; 秦人 = người Tần.',
   collo:['秦国军队','秦国强大','秦国统一中国'],
   ex_zh:'战国末期，秦国渐渐强大，最后打败其他六国，统一了中国。',ex_py:'Zhànguó mòqī, Qínguó jiànjiàn qiángdà, zuìhòu dǎbài qítā liù guó, tǒngyīle Zhōngguó.',ex_vn:'Cuối thời Chiến Quốc, nước Tần dần hùng mạnh, cuối cùng đánh bại sáu nước khác, thống nhất Trung Quốc.',
   exList:[
     {zh:'战国末期，秦国渐渐强大，最后打败其他六国，统一了中国。',py:'Zhànguó mòqī, Qínguó jiànjiàn qiángdà, zuìhòu dǎbài qítā liù guó, tǒngyīle Zhōngguó.',vn:'Cuối thời Chiến Quốc, nước Tần dần hùng mạnh, cuối cùng đánh bại sáu nước khác, thống nhất Trung Quốc.'},
     {zh:'这一年正好秦国军队来打赵国。',py:'Zhè yì nián zhènghǎo Qínguó jūnduì lái dǎ Zhàoguó.',vn:'Đúng năm ấy quân đội nước Tần đến đánh nước Triệu.'}
   ],
   colloFull:[
     {zh:'秦国军队',py:'Qínguó jūnduì',vn:'quân đội nước Tần'},
     {zh:'秦国强大',py:'Qínguó qiángdà',vn:'nước Tần hùng mạnh'},
     {zh:'秦国统一中国',py:'Qínguó tǒngyī Zhōngguó',vn:'nước Tần thống nhất Trung Quốc'}
   ],
   patterns:[
     {s:'秦国 + 军队 (= 秦军)',m:'Quân đội nước Tần'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Quân Tần nhiều lần khiêu chiến, Liêm Pha vẫn không xuất binh.',answer:'虽然秦军多次挑战，但是廉颇还是不出兵。',answerPy:'Suīrán Qín jūn duō cì tiǎozhàn, dànshì Lián Pō háishi bù chū bīng.',
      note:'秦军 = 秦国军队.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Trung Quốc là do nước Tần thống nhất.',answer:'中国是秦国统一的。',answerPy:'Zhōngguó shì Qínguó tǒngyī de.',
      note:'是……的 nhấn mạnh chủ thể.',pair:'是……的'}
   ]},

  {n:45,zh:'廉颇',py:'Lián Pō',pos:'Danh từ riêng',vn:'Liêm Pha (lão tướng nước Triệu)',hv:'Liêm Pha',em:'🛡️',lesson:1,
   explain:['Lão tướng nổi tiếng của nước Triệu, giỏi dùng binh; ông cho quân giữ vững trận địa, không ra đánh, khiến quân Tần không làm gì được.'],
   usage:'Tên người: họ 廉 + tên 颇. 老将廉颇 = lão tướng Liêm Pha.',
   collo:['老将廉颇','换回廉颇','廉颇的作战方案'],
   ex_zh:'赵国派老将廉颇带20万大军迎战。',ex_py:'Zhàoguó pài lǎojiàng Lián Pō dài èrshí wàn dàjūn yíngzhàn.',ex_vn:'Nước Triệu cử lão tướng Liêm Pha dẫn 20 vạn đại quân nghênh chiến.',
   exList:[
     {zh:'赵国派老将廉颇带20万大军迎战。',py:'Zhàoguó pài lǎojiàng Lián Pō dài èrshí wàn dàjūn yíngzhàn.',vn:'Nước Triệu cử lão tướng Liêm Pha dẫn 20 vạn đại quân nghênh chiến.'},
     {zh:'秦人深知廉颇善于用兵。',py:'Qínrén shēn zhī Lián Pō shànyú yòngbīng.',vn:'Người Tần biết rõ Liêm Pha giỏi dùng binh.'}
   ],
   colloFull:[
     {zh:'老将廉颇',py:'lǎojiàng Lián Pō',vn:'lão tướng Liêm Pha'},
     {zh:'换回廉颇',py:'huànhuí Lián Pō',vn:'thay Liêm Pha về'},
     {zh:'廉颇的作战方案',py:'Lián Pō de zuòzhàn fāng\'àn',vn:'phương án tác chiến của Liêm Pha'}
   ],
   patterns:[
     {s:'廉颇 + 善于用兵',m:'Liêm Pha giỏi dùng binh (善于 — bài 7)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Liêm Pha bị vua Triệu gọi về.',answer:'廉颇被赵王调回去了。',answerPy:'Lián Pō bèi Zhào wáng diào huíqu le.',
      note:'调回去 — từ mới 调 của bài.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần Liêm Pha còn giữ trận địa, quân Tần sẽ không thắng được.',answer:'只要廉颇还在守阵地，秦军就胜不了。',answerPy:'Zhǐyào Lián Pō hái zài shǒu zhèndì, Qín jūn jiù shèng bu liǎo.',
      note:'胜不了 = không thắng nổi.',pair:'只要……就……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 纸上谈兵 (639 chữ, tr. 135–137)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene:'课文 · 纸上谈兵',
    preQuiz:[
      {q:'赵括从小读了很多什么书？',opts:['兵书','历史书','小说'],ans:0},
      {q:'跟别人谈论军事的时候，赵括怎么样？',opts:['常常说不过别人','没有人说得过他','不愿意说话'],ans:1},
      {q:'赵奢觉得儿子的毛病是什么？',opts:['身体太弱','不爱读书','只会讲大道理，缺乏实际锻炼'],ans:2},
      {q:'赵奢认为，如果让赵括当大将，会怎么样？',opts:['迟早会害了赵国','一定能打败秦国','会成为名将'],ans:0},
      {q:'秦国军队来打赵国时，赵国派谁去迎战？',opts:['赵括','老将廉颇','赵奢'],ans:1},
      {q:'廉颇根据什么形势命令士兵们坚守阵地？',opts:['敌弱我强','双方一样强','敌强我弱'],ans:2},
      {q:'秦军多次挑战，骂廉颇是胆小鬼，廉颇怎么做？',opts:['还是不出兵','主动出战','派赵括出战'],ans:0},
      {q:'秦人为什么要在赵国散布谣言？',opts:['想跟赵国和好','想让赵国把廉颇调回去','想让赵王高兴'],ans:1},
      {q:'谣言说秦军最怕谁？',opts:['廉颇','赵王','赵括'],ans:2},
      {q:'赵王听到谣言时，心里正在想什么？',opts:['正因廉颇闭门不战而生气','正想派廉颇进攻','正在担心赵括'],ans:0},
      {q:'赵括的母亲为什么再三阻止赵王任命儿子？',opts:['儿子年纪太小','儿子还没有独立带兵作战的资格','儿子身体不好'],ans:1},
      {q:'赵括带兵出战的结果怎么样？',opts:['打败了秦军','和秦军打成了平手','数十万赵军全部被杀'],ans:2},
      {q:'现在人们常用“纸上谈兵”讽刺什么样的人？',opts:['只会空谈理论的人','胆子很小的人','不爱读书的人'],ans:0}
    ],
    lines:[
      {
        sp:0,
        zh:'两千七百多年前的战国末期，赵国名将赵奢有个儿子叫赵括，他从小读了不少兵书，跟别人谈论起军事来，没有人说得过他，就是父亲赵奢也难不住他。赵括因此很骄傲，自以为天下无敌，连父亲也不放在眼里。',
        py:'Liǎngqiān qībǎi duō nián qián de Zhànguó mòqī, Zhàoguó míngjiàng Zhào Shē yǒu ge érzi jiào Zhào Kuò, tā cóngxiǎo dúle bù shǎo bīngshū, gēn biéren tánlùn qǐ jūnshì lai, méiyǒu rén shuō de guò tā, jiùshì fùqīn Zhào Shē yě nán bu zhù tā. Zhào Kuò yīncǐ hěn jiāo\'ào, zì yǐwéi tiānxià wúdí, lián fùqīn yě bú fàng zài yǎn li.',
        vn:'Cuối thời Chiến Quốc, hơn hai nghìn bảy trăm năm trước, danh tướng nước Triệu là Triệu Xa có một người con trai tên là Triệu Quát. Hắn từ nhỏ đã đọc không ít binh thư, hễ bàn chuyện quân sự với người khác thì không ai nói lại được hắn, ngay cả cha là Triệu Xa cũng không làm khó được hắn. Vì thế Triệu Quát rất kiêu ngạo, tự cho mình thiên hạ vô địch, ngay cả cha cũng chẳng coi ra gì.'
      },
      {
        sp:0,
        zh:'但是赵奢心里明白，自己的儿子虽然对军事理论都很了解，但是没有实际作战的经验，想法很不符合实际。他曾经偷偷对妻子说：“儿子的毛病是只会讲大道理，缺乏实际锻炼，不能当大将。如果让他当了大将，迟早会害了赵国。”',
        py:'Dànshì Zhào Shē xīnli míngbai, zìjǐ de érzi suīrán duì jūnshì lǐlùn dōu hěn liǎojiě, dànshì méiyǒu shíjì zuòzhàn de jīngyàn, xiǎngfǎ hěn bù fúhé shíjì. Tā céngjīng tōutōu duì qīzi shuō: “Érzi de máobing shì zhǐ huì jiǎng dà dàolǐ, quēfá shíjì duànliàn, bù néng dāng dàjiàng. Rúguǒ ràng tā dāngle dàjiàng, chízǎo huì hài le Zhàoguó.”',
        vn:'Nhưng trong lòng Triệu Xa hiểu rõ: con trai mình tuy rất am hiểu lý luận quân sự, nhưng không có kinh nghiệm đánh trận thực tế, suy nghĩ rất không hợp với thực tế. Ông từng lén nói với vợ: “Tật của con mình là chỉ biết nói lý lẽ to tát, thiếu rèn luyện thực tế, không làm đại tướng được. Nếu để nó làm đại tướng, sớm muộn gì cũng hại nước Triệu.”'
      },
      {
        sp:0,
        zh:'几年后，赵奢去世了。这一年正好秦国军队来打赵国，赵国派老将廉颇带20万大军迎战。廉颇根据敌强我弱的形势，命令士兵们坚守阵地，绝对不可主动出战。秦军多次挑战，骂他是胆小鬼，他还是不出兵。这个办法果然非常有效，成功地把秦军拦在了国门之外。渐渐地，秦军无法快速取得胜利，粮食也快没了，有些坚持不住了。',
        py:'Jǐ nián hòu, Zhào Shē qùshì le. Zhè yì nián zhènghǎo Qínguó jūnduì lái dǎ Zhàoguó, Zhàoguó pài lǎojiàng Lián Pō dài èrshí wàn dàjūn yíngzhàn. Lián Pō gēnjù dí qiáng wǒ ruò de xíngshì, mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn. Qín jūn duō cì tiǎozhàn, mà tā shì dǎnxiǎoguǐ, tā háishi bù chū bīng. Zhège bànfǎ guǒrán fēicháng yǒuxiào, chénggōng de bǎ Qín jūn lán zàile guómén zhī wài. Jiànjiàn de, Qín jūn wúfǎ kuàisù qǔdé shènglì, liángshi yě kuài méi le, yǒuxiē jiānchí bu zhù le.',
        vn:'Vài năm sau, Triệu Xa qua đời. Đúng năm ấy quân đội nước Tần đến đánh nước Triệu, nước Triệu cử lão tướng Liêm Pha dẫn 20 vạn đại quân nghênh chiến. Liêm Pha dựa vào thế địch mạnh ta yếu, ra lệnh cho binh lính kiên quyết giữ trận địa, tuyệt đối không được chủ động ra đánh. Quân Tần nhiều lần khiêu chiến, chửi ông là kẻ hèn nhát, ông vẫn không xuất binh. Cách này quả nhiên rất hiệu quả, chặn được quân Tần ở ngoài cửa ngõ đất nước. Dần dần, quân Tần không thể nhanh chóng giành thắng lợi, lương thực cũng sắp cạn, có phần không cầm cự nổi nữa.'
      },
      {
        sp:0,
        zh:'秦人深知廉颇善于用兵，如果想在短期内打败赵国，必须想办法叫赵国把廉颇调回去。于是，他们在赵国四处散布谣言，说秦军最怕赵括，别的人都不放在眼里。',
        py:'Qínrén shēn zhī Lián Pō shànyú yòngbīng, rúguǒ xiǎng zài duǎnqī nèi dǎbài Zhàoguó, bìxū xiǎng bànfǎ jiào Zhàoguó bǎ Lián Pō diào huíqu. Yúshì, tāmen zài Zhàoguó sìchù sànbù yáoyán, shuō Qín jūn zuì pà Zhào Kuò, bié de rén dōu bú fàng zài yǎn li.',
        vn:'Người Tần biết rõ Liêm Pha giỏi dùng binh, nếu muốn đánh bại nước Triệu trong thời gian ngắn thì phải nghĩ cách khiến nước Triệu điều Liêm Pha về. Thế là họ tung tin đồn khắp nước Triệu, nói quân Tần sợ nhất Triệu Quát, còn những người khác thì chẳng coi ra gì.'
      },
      {
        sp:0,
        zh:'这时，赵王正因廉颇闭门不战而生气呢，听到外面的那些谣言，果然上当了，他派赵括去换回廉颇。赵括的母亲再三阻止赵王任命儿子为大将，说他还没有独立带兵作战的资格。可是，糊涂的赵王哪里听得进去！',
        py:'Zhè shí, Zhào wáng zhèng yīn Lián Pō bì mén bú zhàn ér shēngqì ne, tīngdào wàimiàn de nàxiē yáoyán, guǒrán shàngdàng le, tā pài Zhào Kuò qù huànhuí Lián Pō. Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng, shuō tā hái méiyǒu dúlì dài bīng zuòzhàn de zīgé. Kěshì, hútu de Zhào wáng nǎli tīng de jìnqù!',
        vn:'Lúc này vua Triệu đang giận vì Liêm Pha đóng cửa không đánh, nghe những tin đồn bên ngoài thì quả nhiên mắc lừa, liền cử Triệu Quát đi thay Liêm Pha về. Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng, nói rằng nó chưa có tư cách một mình cầm quân đánh trận. Thế nhưng ông vua hồ đồ ấy nào có chịu nghe!'
      },
      {
        sp:0,
        zh:'公元前260年，赵括带兵出战。一直盲目自信、轻视秦军的他完全改变了廉颇的作战方案，死搬兵书上的理论，主动进攻秦军，结果数十万赵军全部被杀，丢掉了宝贵的生命。',
        py:'Gōngyuán qián èr liù líng nián, Zhào Kuò dài bīng chūzhàn. Yìzhí mángmù zìxìn, qīngshì Qín jūn de tā wánquán gǎibiànle Lián Pō de zuòzhàn fāng\'àn, sǐ bān bīngshū shang de lǐlùn, zhǔdòng jìngōng Qín jūn, jiéguǒ shù shí wàn Zhào jūn quánbù bèi shā, diūdiàole bǎoguì de shēngmìng.',
        vn:'Năm 260 trước Công nguyên, Triệu Quát cầm quân ra trận. Vốn luôn tự tin mù quáng, coi thường quân Tần, hắn thay đổi hoàn toàn phương án tác chiến của Liêm Pha, rập khuôn lý thuyết trong binh thư, chủ động tấn công quân Tần. Kết quả mấy chục vạn quân Triệu bị giết sạch, mất đi sinh mạng quý giá.'
      },
      {
        sp:0,
        zh:'这就是成语“纸上谈兵”的故事。现在常用这个成语讽刺那些只会空谈理论的人，提醒大家做事一定要灵活，要注意理论联系实际。',
        py:'Zhè jiù shì chéngyǔ “zhǐshàng tánbīng” de gùshi. Xiànzài cháng yòng zhège chéngyǔ fěngcì nàxiē zhǐ huì kōngtán lǐlùn de rén, tíxǐng dàjiā zuòshì yídìng yào línghuó, yào zhùyì lǐlùn liánxì shíjì.',
        vn:'Đó chính là câu chuyện của thành ngữ “đánh trận trên giấy”. Ngày nay người ta thường dùng thành ngữ này để châm biếm những người chỉ biết nói suông lý thuyết, nhắc nhở mọi người làm việc nhất định phải linh hoạt, phải chú ý gắn lý thuyết với thực tế.'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 胜利/成功 là cặp 词语辨析 của sách (tr. 140) + 2 cặp tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {
    pair:'胜利 — 成功',
    same:'Đều là động từ, đều chỉ việc ĐẠT ĐƯỢC MỤC ĐÍCH đã dự tính. Làm trạng ngữ cho một việc lớn thì thay cho nhau được.',
    sameEx:{zh:'北京胜利／成功地举办了2008年夏季奥运会。',vn:'Bắc Kinh đã tổ chức thắng lợi / thành công Thế vận hội mùa hè năm 2008.'},
    items:[
      {
        word:'胜利',
        points:[
          'Công việc lớn đạt mục đích → thường làm TRẠNG NGỮ: 胜利地完成.',
          'Còn có nghĩa ĐÁNH BẠI ĐỐI PHƯƠNG trong chiến tranh, thi đấu: 取得胜利, 胜利者.',
          'KHÔNG có nghĩa “khiến người ta hài lòng”, KHÔNG làm bổ ngữ: không nói 开得很胜利.'
        ],
        ex:[
          {zh:'经过一年多的努力，我们胜利地完成了调查工作。',vn:'Sau hơn một năm nỗ lực, chúng tôi đã hoàn thành thắng lợi công tác điều tra.'},
          {zh:'谁坚持到最后，谁就是这场比赛的胜利者。',vn:'Ai kiên trì đến cuối, người đó là người chiến thắng của trận đấu này.'}
        ]
      },
      {
        word:'成功',
        points:[
          'Dùng cho công việc, sự nghiệp và cả mọi việc khác (thí nghiệm, thuyết phục, buổi họp…).',
          'Làm trạng ngữ (成功地说服) hoặc vị ngữ (实验成功了).',
          'Còn là TÍNH TỪ “thành công, đáng hài lòng”, làm BỔ NGỮ được: 拍得很成功. Không có nghĩa đánh bại đối phương.'
        ],
        ex:[
          {zh:'经过艰苦的努力，实验终于成功了。',vn:'Trải qua nỗ lực gian khổ, thí nghiệm cuối cùng đã thành công.'},
          {zh:'这部电视剧拍得很成功，在全国播出后，受到观众的喜爱。',vn:'Bộ phim truyền hình này quay rất thành công, phát sóng toàn quốc xong được khán giả yêu thích.'}
        ]
      }
    ],
    quiz:[
      {
        sentence:'这项实验如果研究＿＿，将给成千上万的病人带来希望。',
        options:['胜利','成功'],
        answer:1,
        why:'Nghiên cứu, thí nghiệm không phải chiến tranh hay thi đấu; 研究成功 — 成功 làm bổ ngữ kết quả → chỉ 成功.'
      },
      {
        sentence:'得民心者才会赢得这场战争的＿＿。',
        options:['胜利','成功'],
        answer:0,
        why:'Chiến tranh, đánh bại đối phương → 战争的胜利. 成功 không mang nghĩa đánh bại đối phương.'
      },
      {
        sentence:'她＿＿地说服了丈夫放弃了搬家的打算。',
        options:['胜利','成功'],
        answer:1,
        why:'Thuyết phục chồng là chuyện gia đình, không phải công việc lớn hay chiến đấu → 成功地说服.'
      },
      {sentence:'座谈会开得很＿＿，大家交换了意见，增进了理解。',options:['胜利','成功'],answer:1,why:'Làm BỔ NGỮ sau 开得很, nghĩa “đáng hài lòng” → chỉ 成功.'}
    ],
    sgk:{
      chung:{
        t:'都是动词，都表示达到预想的目的。',
        vn:'Đều là động từ, đều biểu thị đạt được mục đích đã dự tính.',
        vd:'北京胜利／成功地举办了2008年夏季奥运会。',
        vdVn:'Bắc Kinh đã tổ chức thắng lợi / thành công Thế vận hội mùa hè năm 2008.'
      },
      khac:[
        {
          a:{
            t:'表示工作等达到预想的目的时，一般做状语。',
            vn:'Khi nói công việc… đạt mục đích dự tính, thường làm trạng ngữ.',
            vd:'经过一年多的努力，我们胜利地完成了调查工作。',
            vdVn:'Sau hơn một năm nỗ lực, chúng tôi đã hoàn thành thắng lợi công tác điều tra.'
          },
          b:{
            t:'不仅用于工作、事业方面，还可用于其他方面。可以做状语，也可以做谓语。',
            vn:'Không chỉ dùng cho công việc, sự nghiệp mà còn dùng cho các mặt khác. Có thể làm trạng ngữ, cũng có thể làm vị ngữ.',
            vd:'经过艰苦的努力，实验终于成功了。',
            vdVn:'Trải qua nỗ lực gian khổ, thí nghiệm cuối cùng đã thành công.'
          }
        },
        {
          a:{
            t:'还有在战争或比赛中打败对方的意思。',
            vn:'Còn có nghĩa đánh bại đối phương trong chiến tranh hoặc thi đấu.',
            vd:'谁坚持到最后，谁就是这场比赛的胜利者。',
            vdVn:'Ai kiên trì đến cuối, người đó là người chiến thắng của trận đấu này.'
          },
          b:{t:'没有打败对方的意思。',vn:'Không có nghĩa đánh bại đối phương.'}
        },
        {
          a:{t:'没有让人满意的意思，不能做补语。',vn:'Không có nghĩa khiến người ta hài lòng, không làm bổ ngữ được.'},
          b:{
            t:'是形容词，有让人满意的意思，可做补语。',
            vn:'Là tính từ, có nghĩa khiến người ta hài lòng, có thể làm bổ ngữ.',
            vd:'这部电视剧拍得很成功，在全国播出后，受到观众的喜爱。',
            vdVn:'Bộ phim truyền hình này quay rất thành công, phát sóng toàn quốc xong được khán giả yêu thích.'
          }
        }
      ],
      lamThu:[
        {s:'这项实验如果研究＿＿，将给成千上万的病人带来希望。',dap:[false,true],mau:true,giai:'Thí nghiệm không phải chiến tranh; 研究成功 — làm bổ ngữ → chỉ 成功.'},
        {s:'得民心者才会赢得这场战争的＿＿。',dap:[true,false],giai:'Chiến tranh — đánh bại đối phương → chỉ 胜利.'},
        {s:'她＿＿地说服了丈夫放弃了搬家的打算。',dap:[false,true],giai:'Việc thuyết phục trong gia đình, không phải công việc lớn → 成功地说服.'},
        {s:'座谈会开得很＿＿，大家交换了意见，增进了理解。',dap:[false,true],giai:'Làm bổ ngữ, nghĩa đáng hài lòng → chỉ 成功.'}
      ]
    }
  },
  {
    pair:'道理 — 理论',
    same:'Đều là danh từ, đều nói về cái “lý” giải thích vì sao sự việc như vậy. Nhưng một bên là lẽ sống đời thường, một bên là tri thức có hệ thống.',
    sameEx:{zh:'书上讲的道理／理论，他都懂。',vn:'Những lý lẽ / lý thuyết trong sách, cậu ấy đều hiểu.'},
    items:[
      {
        word:'道理',
        points:[
          'Lẽ phải, lý lẽ đời thường, cách làm người — gần gũi, khẩu ngữ.',
          'Đi với 讲, 有, 懂, 明白: 讲道理, 很有道理, 做人的道理.',
          '有道理 = có lý (khen người nói đúng).'
        ],
        ex:[{zh:'父母给我讲了许多做人的道理。',vn:'Bố mẹ giảng cho tôi rất nhiều đạo lý làm người.'},{zh:'你说的很有道理。',vn:'Cậu nói rất có lý.'}]
      },
      {
        word:'理论',
        points:[
          'Hệ thống tri thức khái quát, có tính khoa học — trang trọng, học thuật.',
          'Đi với 军事, 科学, 研究; đối lập với 实际: 理论联系实际.',
          'Không nói 很有理论 / 讲理论 theo nghĩa “có lý, biết điều”.'
        ],
        ex:[
          {zh:'赵括对军事理论都很了解。',vn:'Triệu Quát rất am hiểu lý luận quân sự.'},
          {zh:'做事一定要注意理论联系实际。',vn:'Làm việc nhất định phải chú ý gắn lý thuyết với thực tế.'}
        ]
      }
    ],
    quiz:[
      {sentence:'父母给我讲了许多做人的＿＿，对我的影响很大。',options:['道理','理论'],answer:0,why:'做人的道理 — lẽ sống, cách làm người → 道理 (câu 练习 2 của sách).'},
      {sentence:'赵括读了很多兵书，对军事＿＿很了解。',options:['道理','理论'],answer:1,why:'军事理论 — tri thức quân sự có hệ thống.'},
      {sentence:'你说的很有＿＿，我同意你的看法。',options:['道理','理论'],answer:0,why:'有道理 = có lý; không nói 有理论.'},
      {sentence:'做事一定要注意＿＿联系实际。',options:['道理','理论'],answer:1,why:'理论联系实际 là cụm cố định: lý thuyết đi đôi với thực tế.'}
    ]
  },
  {
    pair:'毛病 — 缺点',
    same:'Đều là danh từ, đều chỉ CHỖ CHƯA TỐT của một người. Nói khuyết điểm tính cách thì thay nhau được.',
    sameEx:{zh:'他最大的毛病／缺点是太骄傲。',vn:'Khuyết điểm lớn nhất của anh ấy là quá kiêu ngạo.'},
    items:[
      {
        word:'毛病',
        points:[
          'Dùng cho NGƯỜI (tật xấu, thói quen xấu) và cho MÁY MÓC, ĐỒ VẬT (trục trặc): 车出了毛病.',
          'Khẩu ngữ; còn chỉ bệnh vặt: 胃有毛病.',
          'Hay đi với 出, 改, 老: 出毛病, 改毛病, 老毛病.'
        ],
        ex:[
          {zh:'师傅，最近我这车出了点儿毛病。',vn:'Bác thợ ơi, dạo này xe tôi bị trục trặc.'},
          {zh:'睡懒觉的老毛病他终于改掉了。',vn:'Tật ngủ nướng cũ, cuối cùng anh ấy cũng bỏ được.'}
        ]
      },
      {
        word:'缺点',
        points:[
          'Chỗ chưa hoàn thiện, yếu kém — đi cặp với 优点 (ưu điểm).',
          'KHÔNG dùng cho máy móc hỏng (không nói 车出了缺点).',
          'Dùng được cho phương án, sản phẩm: 这个方案的缺点是……'
        ],
        ex:[{zh:'每个人都有优点和缺点。',vn:'Ai cũng có ưu điểm và khuyết điểm.'},{zh:'这个方案的缺点是花钱太多。',vn:'Nhược điểm của phương án này là tốn quá nhiều tiền.'}]
      }
    ],
    quiz:[
      {
        sentence:'师傅，最近我这车出了点儿＿＿，空调总是不太凉。',
        options:['毛病','缺点'],
        answer:0,
        why:'Xe bị trục trặc → 出毛病. 缺点 không dùng cho máy móc hỏng (câu 练习 2 của sách).'
      },
      {sentence:'每个人都有优点和＿＿。',options:['毛病','缺点'],answer:1,why:'Đi cặp với 优点 → 缺点.'},
      {sentence:'他最大的＿＿是太骄傲。',options:['毛病','缺点'],answer:0,both:true,why:'Khuyết điểm tính cách của người — cả hai đều được.'},
      {sentence:'睡懒觉的老＿＿他终于改掉了。',options:['毛病','缺点'],answer:0,why:'老毛病 = tật cũ, thói xấu lâu năm — cụm cố định.'}
    ]
  }
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'军事',hv:'quân sự',vn:'quân sự',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'军队',hv:'quân đội',vn:'quân đội',note:'Trùng khít.'},
    {zh:'理论',hv:'lý luận',vn:'lý luận, lý thuyết',note:'Trùng khít.'},
    {zh:'作战',hv:'tác chiến',vn:'đánh trận',note:'“Tác chiến” tiếng Việt cũng là chiến đấu.'},
    {zh:'命令',hv:'mệnh lệnh',vn:'ra lệnh; mệnh lệnh',note:'Trùng khít — nhưng tiếng Trung còn dùng làm ĐỘNG TỪ: 命令士兵….'},
    {zh:'阵地',hv:'trận địa',vn:'trận địa',note:'Trùng khít.'},
    {zh:'绝对',hv:'tuyệt đối',vn:'tuyệt đối',note:'Trùng khít.'},
    {zh:'主动',hv:'chủ động',vn:'chủ động',note:'Trùng khít; trái nghĩa 被动 (bị động).'},
    {zh:'胜利',hv:'thắng lợi',vn:'thắng lợi',note:'Trùng khít.'},
    {zh:'独立',hv:'độc lập',vn:'độc lập, tự lập',note:'Trùng khít; nói người thì dịch “tự lập”.'},
    {zh:'公元',hv:'công nguyên',vn:'Công nguyên',note:'Trùng khít; 公元前 = trước Công nguyên.'},
    {zh:'方案',hv:'phương án',vn:'phương án',note:'Trùng khít.'},
    {zh:'进攻',hv:'tiến công',vn:'tấn công',note:'“Tiến công” — tiến lên mà đánh.'},
    {zh:'灵活',hv:'linh hoạt',vn:'linh hoạt',note:'Trùng khít.'},
    {zh:'糊涂',hv:'hồ đồ',vn:'hồ đồ, lú lẫn',note:'Trùng khít — tiếng Việt cũng nói “hồ đồ”.'},
    {zh:'盲目',hv:'manh mục',vn:'mù quáng',note:'“Manh” = mù (như 盲人 bài 7), “mục” = mắt → mắt mù → làm mà không nhìn, mù quáng.'},
    {zh:'讽刺',hv:'phúng thích',vn:'châm biếm',note:'“Phúng” như trong “trào phúng”, “thích” = đâm → lời nói đâm chọc.'},
    {zh:'任命',hv:'nhiệm mệnh',vn:'bổ nhiệm',note:'“Nhiệm” như “nhiệm vụ, bổ nhiệm”; “mệnh” = lệnh.'}
  ],
  idiom:[
    {zh:'纸上谈兵',hv:'chỉ thượng đàm binh',vn:'đánh trận trên giấy, bàn suông',note:'“Chỉ” = giấy, “đàm binh” = bàn chuyện binh → chỉ giỏi lý thuyết.'},
    {zh:'天下无敌',hv:'thiên hạ vô địch',vn:'thiên hạ vô địch',note:'Tiếng Việt dùng y hệt.'},
    {zh:'敌强我弱',hv:'địch cường ngã nhược',vn:'địch mạnh ta yếu',note:'“Cường” = mạnh, “nhược” = yếu (như “nhược điểm”).'},
    {zh:'闭门不战',hv:'bế môn bất chiến',vn:'đóng cửa không đánh',note:'“Bế môn” = đóng cửa (như “bế quan toả cảng”).'}
  ],
  trap:[
    {
      zh:'散布',
      hv:'tán bố',
      vn:'tung (tin đồn), gieo rắc',
      warn:'BẪY ĐỒNG ÂM: 散布 và 散步 (tản bộ, đi dạo) cùng đọc sànbù! 散布谣言 là tung tin đồn, 散步 mới là đi dạo.'
    },
    {zh:'毛病',hv:'mao bệnh',vn:'tật xấu; chỗ hỏng',warn:'BẪY: “mao bệnh” không phải bệnh về lông. Dùng cả cho máy móc: 车出毛病了 = xe bị trục trặc.'},
    {zh:'上当',hv:'thượng đáng',vn:'mắc lừa',warn:'BẪY: đọc Hán–Việt chẳng gợi nghĩa. Đây là ly hợp từ: 上了他的当 = bị hắn lừa.'},
    {zh:'道理',hv:'đạo lý',vn:'lý lẽ, lẽ phải',warn:'Tiếng Việt “đạo lý” nghiêng về đạo đức; tiếng Trung 道理 rộng hơn: 你说的有道理 = cậu nói CÓ LÝ.'},
    {zh:'胆小鬼',hv:'đảm tiểu quỷ',vn:'đồ nhát gan',warn:'BẪY: không phải con quỷ! 胆小 = gan nhỏ (nhát), 鬼 chỉ người có tật (酒鬼 bợm rượu, 懒鬼 đồ lười).'},
    {zh:'调',hv:'điệu',vn:'điều động',warn:'BẪY ĐA ÂM: đọc diào = điều động (调回去); đọc tiáo = điều chỉnh (空调, 调整). Bài này đọc diào.'},
    {zh:'迟早',hv:'trì tảo',vn:'sớm muộn',warn:'Chú ý TRẬT TỰ: tiếng Trung “trì tảo” = muộn–sớm, tiếng Việt nói ngược lại “sớm muộn”.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 139), bài tập 3 (tr. 141) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'轻视',right:'对方'},
  {left:'善于',right:'总结'},
  {left:'糊涂的',right:'脑子'},
  {left:'宝贵的',right:'经验'},
  {left:'独立地',right:'生活'},
  {left:'主动地',right:'帮助'},
  {left:'形势',right:'紧张'},
  {left:'克服',right:'毛病'},
  {left:'下',right:'命令'},
  {left:'具备',right:'资格'},
  {left:'阻止',right:'战争'},
  {left:'抽象的',right:'道理'},
  {left:'散布',right:'谣言'},
  {left:'坚守',right:'阵地'},
  {left:'取得',right:'胜利'},
  {left:'军事',right:'力量'},
  {left:'作战',right:'方案'},
  {left:'考虑',right:'再三'},
  {left:'上了个',right:'大当'},
  {left:'讽刺',right:'社会现象'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'现在我们完全不了解对方的情况，就拿方案，这不是',blank:'纸上谈兵',post:'嘛！',hint:'(bàn suông trên giấy)',ans:'纸上谈兵'},
  {pre:'赵括从小读了不少兵书，对',blank:'军事',post:'理论很了解。',hint:'(quân sự)',ans:'军事'},
  {pre:'花木兰替父参军并打败',blank:'敌人',post:'，从而闻名天下。',hint:'(kẻ địch)',ans:'敌人'},
  {pre:'现在常用这个成语讽刺那些只会空谈',blank:'理论',post:'的人。',hint:'(lý thuyết)',ans:'理论'},
  {pre:'他虽然读了很多兵书，但是没有实际',blank:'作战',post:'的经验。',hint:'(đánh trận)',ans:'作战'},
  {pre:'儿子的',blank:'毛病',post:'是只会讲大道理，缺乏实际锻炼。',hint:'(tật xấu)',ans:'毛病'},
  {pre:'你说的很有',blank:'道理',post:'，我听你的。',hint:'(lý lẽ)',ans:'道理'},
  {pre:'如果让他当了大将，',blank:'迟早',post:'会害了赵国。',hint:'(sớm muộn)',ans:'迟早'},
  {pre:'这一年正好秦国',blank:'军队',post:'来打赵国。',hint:'(quân đội)',ans:'军队'},
  {pre:'公司',blank:'派',post:'他去上海分公司当总经理。',hint:'(cử đi)',ans:'派'},
  {pre:'我们队的实力比对方',blank:'弱',post:'一点儿，大家要更加努力。',hint:'(yếu)',ans:'弱'},
  {pre:'经过大家的努力，公司的',blank:'形势',post:'开始好转了。',hint:'(tình hình)',ans:'形势'},
  {pre:'将军下了',blank:'命令',post:'，士兵们马上出发了。',hint:'(mệnh lệnh)',ans:'命令'},
  {pre:'几个士兵',blank:'守',post:'在城门口，谁也进不去。',hint:'(canh giữ)',ans:'守'},
  {pre:'没有命令，谁也不能离开',blank:'阵地',post:'。',hint:'(trận địa)',ans:'阵地'},
  {pre:'这次夏令营是一个',blank:'挑战',post:'，看看你是不是真的可以独立了。',hint:'(thử thách)',ans:'挑战'},
  {pre:'为什么每次老张',blank:'骂',post:'你，你都不出声？',hint:'(mắng)',ans:'骂'},
  {pre:'你连一只小狗都怕，真是个',blank:'胆小鬼',post:'！',hint:'(đồ nhát gan)',ans:'胆小鬼'},
  {pre:'在网上',blank:'散布',post:'谣言是违法的。',hint:'(tung, phát tán)',ans:'散布'},
  {pre:'不要相信网上的',blank:'谣言',post:'，要多看正式的新闻。',hint:'(tin đồn)',ans:'谣言'},
  {pre:'买东西要多比较，别',blank:'上当',post:'。',hint:'(mắc lừa)',ans:'上当'},
  {pre:'朋友请他做总经理，他考虑',blank:'再三',post:'，最后还是拒绝了。',hint:'(nhiều lần)',ans:'再三'},
  {pre:'学校正式',blank:'任命',post:'李老师为校长。',hint:'(bổ nhiệm)',ans:'任命'},
  {pre:'谁都没有',blank:'资格',post:'轻视别人。',hint:'(tư cách)',ans:'资格'},
  {pre:'',blank:'公元',post:'前260年，赵括带兵出战。',hint:'(Công nguyên)',ans:'公元'},
  {pre:'买东西不要',blank:'盲目',post:'跟风，要想想自己是不是真的需要。',hint:'(mù quáng)',ans:'盲目'},
  {pre:'这个',blank:'方案',post:'大家都同意了，下周就开始实行。',hint:'(phương án)',ans:'方案'},
  {pre:'天一亮，军队就发起了',blank:'进攻',post:'。',hint:'(tấn công)',ans:'进攻'},
  {pre:'这个故事',blank:'讽刺',post:'的是那些不懂得灵活变通的人。',hint:'(châm biếm)',ans:'讽刺'},
  {pre:'学了语法以后，要学会',blank:'灵活',post:'运用。',hint:'(linh hoạt)',ans:'灵活'},
  {pre:'“纸上谈兵”的故事发生在',blank:'战国',post:'末期。',hint:'(thời Chiến Quốc)',ans:'战国'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['跟他','谈论','军事','，','没有人','说得过','他','。'],ans:'跟他谈论军事，没有人说得过他。',audio:'跟他谈论军事，没有人说得过他。'},
  {words:['年轻人','记忆力好','，','这一点','我','比不过','你们','。'],ans:'年轻人记忆力好，这一点我比不过你们。',audio:'年轻人记忆力好，这一点我比不过你们。',alt:['年轻人记忆力好，我这一点比不过你们。']},
  {words:['我们的','产品','在价格上','竞争不过','他们','。'],ans:'我们的产品在价格上竞争不过他们。',audio:'我们的产品在价格上竞争不过他们。',alt:['在价格上我们的产品竞争不过他们。']},
  {words:['这些','问题','迟早','会','得到','解决','。'],ans:'这些问题迟早会得到解决。',audio:'这些问题迟早会得到解决。'},
  {words:['如果','不','努力','，','你','迟早','会','后悔','的','。'],ans:'如果不努力，你迟早会后悔的。',audio:'如果不努力，你迟早会后悔的。'},
  {words:['母亲','再三','阻止','赵王','任命','儿子','为','大将','。'],ans:'母亲再三阻止赵王任命儿子为大将。',audio:'母亲再三阻止赵王任命儿子为大将。'},
  {words:['他','考虑','再三','，','最后','还是','拒绝了','。'],ans:'他考虑再三，最后还是拒绝了。',audio:'他考虑再三，最后还是拒绝了。'},
  {words:['廉颇','命令','士兵们','坚守','阵地','。'],ans:'廉颇命令士兵们坚守阵地。',audio:'廉颇命令士兵们坚守阵地。'},
  {words:['秦军','多次','挑战','，','骂他','是','胆小鬼','。'],ans:'秦军多次挑战，骂他是胆小鬼。',audio:'秦军多次挑战，骂他是胆小鬼。'},
  {words:['他们','在赵国','四处','散布','谣言','。'],ans:'他们在赵国四处散布谣言。',audio:'他们在赵国四处散布谣言。'},
  {words:['谁','都','没有','资格','轻视','别人','。'],ans:'谁都没有资格轻视别人。',audio:'谁都没有资格轻视别人。'},
  {words:['赵王','听到','谣言','，','果然','上当','了','。'],ans:'赵王听到谣言，果然上当了。',audio:'赵王听到谣言，果然上当了。'},
  {words:['这个故事','讽刺的是','那些','不懂得','灵活变通','的人','。'],ans:'这个故事讽刺的是那些不懂得灵活变通的人。',audio:'这个故事讽刺的是那些不懂得灵活变通的人。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {
    wrong:'我相信这样的安排他是____不会同意的。',
    opts:['完全','绝对','已经','曾经'],
    ans:1,
    exp:'Nhấn mạnh phán đoán chắc chắn 100% → 绝对不会 (câu 练习 2 của sách). 完全 nói mức độ trọn vẹn (完全了解, 完全改变); 已经, 曾经 là phó từ thời gian, không hợp nghĩa.'
  },
  {
    wrong:'遇到问题，他总是____向老师请教，从来不等老师来问他。',
    opts:['主动','被动','盲目','糊涂'],
    ans:0,
    exp:'Tự mình làm trước, không đợi người khác → 主动. 被动 ngược nghĩa; 盲目, 糊涂 mang ý chê, không hợp với 总是向老师请教.'
  },
  {
    wrong:'谁坚持到最后，谁就是这场比赛的____者。',
    opts:['成功','胜利','主动','独立'],
    ans:1,
    exp:'Đánh bại đối phương trong thi đấu → 胜利者 (người chiến thắng). 成功 không có nghĩa đánh bại đối phương; 主动, 独立 không ghép với 者 ở đây.'
  },
  {
    wrong:'秦人必须想办法叫赵国把廉颇____回去。',
    opts:['调','搬','骂','守'],
    ans:0,
    exp:'调回去 = điều (người) về, chuyển vị trí công tác. 搬 dùng cho đồ vật, dọn nhà; 骂 là chửi; 守 là canh giữ — đều không đi với 回去 theo nghĩa này.'
  },
  {
    wrong:'我想帮那个小孩开门，却被朋友____了。',
    opts:['停止','防止','禁止','阻止'],
    ans:3,
    exp:'Ngăn một người đang định làm gì → 阻止 (câu 练习 1 của sách). 停止 là tự dừng lại; 防止 là đề phòng việc xấu; 禁止 là cấm theo quy định (禁止吸烟).'
  },
  {
    wrong:'家长应尽量创造一个能让孩子____生活和学习的环境。',
    opts:['绝对','独立','主动','宝贵'],
    ans:1,
    exp:'独立生活 = sống tự lập (bảng 词语搭配). 主动生活 không phải cách nói; 绝对, 宝贵 không hợp nghĩa.'
  },
  {
    wrong:'你这脑子可真____，银行卡的密码怎么能忘了呢？',
    opts:['灵活','聪明','糊涂','宝贵'],
    ans:2,
    exp:'Quên mật khẩu → chê đầu óc lú lẫn → 糊涂. 灵活, 聪明 là khen — trái với vế sau; 宝贵 không tả đầu óc.'
  },
  {
    wrong:'比赛的时候千万不能____对方，哪怕对方比我们弱。',
    opts:['重视','讽刺','挑战','轻视'],
    ans:3,
    exp:'哪怕对方比我们弱 — dù đối thủ yếu cũng đừng coi thường → 轻视. 重视 ngược nghĩa (不能重视 vô lý); 讽刺, 挑战 không hợp ngữ cảnh.'
  },
  {
    wrong:'任何经验都是____的，但并不是任何时候都是有效的。',
    opts:['宝贵','糊涂','盲目','弱'],
    ans:0,
    exp:'Kinh nghiệm là thứ quý giá → 宝贵 (câu 练习 1 của sách). Ba từ còn lại không tả 经验.'
  },
  {
    wrong:'两千多年前，____名将赵奢有个儿子叫赵括。',
    opts:['秦国','赵国','汉朝','唐朝'],
    ans:1,
    exp:'Triệu Xa là danh tướng nước Triệu → 赵国. Nhà Hán, nhà Đường ra đời sau thời Chiến Quốc.'
  },
  {
    wrong:'赵括的父亲____心里明白，儿子只会讲大道理。',
    opts:['廉颇','赵王','赵奢','秦王'],
    ans:2,
    exp:'Cha của Triệu Quát là Triệu Xa (赵奢). Liêm Pha là lão tướng khác; vua Triệu là người bổ nhiệm Triệu Quát.'
  },
  {
    wrong:'____从小读了不少兵书，跟别人谈论起军事来，没有人说得过他。',
    opts:['廉颇','赵括','赵奢','花木兰'],
    ans:1,
    exp:'Người thuộc làu binh thư, không ai nói lại được là Triệu Quát (赵括) — nhân vật chính của thành ngữ 纸上谈兵.'
  },
  {
    wrong:'战国末期，____渐渐强大，最后打败其他六国，统一了中国。',
    opts:['赵国','齐国','秦国','燕国'],
    ans:2,
    exp:'Nước thống nhất Trung Quốc năm 221 TCN là nước Tần → 秦国 (phần 热身 của sách).'
  },
  {
    wrong:'赵国派老将____带20万大军迎战，他命令士兵们坚守阵地。',
    opts:['赵括','廉颇','赵奢','李广'],
    ans:1,
    exp:'Lão tướng giữ vững trận địa là Liêm Pha (廉颇). 李广 là tướng thời Tây Hán (bài 7).'
  },
  {
    wrong:'这项实验如果研究____，将给成千上万的病人带来希望。',
    opts:['成功','胜利','主动','独立'],
    ans:0,
    exp:'研究成功 — 成功 làm bổ ngữ, dùng cho thí nghiệm; 胜利 chỉ dùng cho chiến tranh, thi đấu hoặc việc lớn làm trạng ngữ (词语辨析 của bài).'
  },
  {
    wrong:'师傅，最近我这车出了点儿____，空调总是不太凉。',
    opts:['缺点','毛病','道理','资格'],
    ans:1,
    exp:'Máy móc trục trặc → 出毛病. 缺点 không dùng cho máy hỏng; 道理, 资格 không hợp nghĩa (câu 练习 2 của sách).'
  },
  {
    wrong:'父母给我讲了许多做人的____，对我的影响很大。',
    opts:['理论','道理','方案','形势'],
    ans:1,
    exp:'做人的道理 = đạo lý làm người → 道理. 理论 là hệ thống tri thức khoa học (câu 练习 2 của sách).'
  },
  {
    wrong:'跟别人谈论起军事来，没有人说得____他。',
    opts:['过','完','到','起'],
    ans:0,
    exp:'V + 得/不 + 过 = hơn được / không hơn được ai (điểm ngữ pháp 1 của bài): 说得过他 = nói thắng được hắn.'
  }
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Không ai nói lại được anh ấy.',zh:'没有人说得过他。',py:'Méiyǒu rén shuō de guò tā.'},
  {vi:'Nếu không chịu khó học, sớm muộn gì cậu cũng sẽ hối hận.',zh:'如果不努力学习，你迟早会后悔的。',py:'Rúguǒ bù nǔlì xuéxí, nǐ chízǎo huì hòuhuǐ de.'},
  {vi:'Anh ấy mời tôi đi mời lại, tôi đành nhận lời.',zh:'他再三邀请我，我只好答应了。',py:'Tā zàisān yāoqǐng wǒ, wǒ zhǐhǎo dāying le.'},
  {vi:'Đừng tin những tin đồn trên mạng.',zh:'不要相信网上的谣言。',py:'Búyào xiāngxìn wǎng shang de yáoyán.'},
  {vi:'Không ai có tư cách coi thường người khác.',zh:'谁都没有资格轻视别人。',py:'Shéi dōu méiyǒu zīgé qīngshì biéren.'},
  {vi:'Học ngữ pháp phải biết vận dụng linh hoạt.',zh:'学语法要学会灵活运用。',py:'Xué yǔfǎ yào xuéhuì línghuó yùnyòng.'},
  {vi:'Xe của tôi bị trục trặc rồi.',zh:'我的车出毛病了。',py:'Wǒ de chē chū máobing le.'},
  {vi:'Làm việc phải chú ý gắn lý thuyết với thực tế.',zh:'做事要注意理论联系实际。',py:'Zuòshì yào zhùyì lǐlùn liánxì shíjì.'}
];
var translateDataRev = [
  {
    vi:'Triệu Quát tự cho mình thiên hạ vô địch, ngay cả cha cũng chẳng coi ra gì.',
    zh:'赵括自以为天下无敌，连父亲也不放在眼里。',
    py:'Zhào Kuò zì yǐwéi tiānxià wúdí, lián fùqīn yě bú fàng zài yǎn li.'
  },
  {
    vi:'Tật của con trai là chỉ biết nói lý lẽ to tát, thiếu rèn luyện thực tế.',
    zh:'儿子的毛病是只会讲大道理，缺乏实际锻炼。',
    py:'Érzi de máobing shì zhǐ huì jiǎng dà dàolǐ, quēfá shíjì duànliàn.'
  },
  {
    vi:'Nếu để nó làm đại tướng, sớm muộn gì cũng hại nước Triệu.',
    zh:'如果让他当了大将，迟早会害了赵国。',
    py:'Rúguǒ ràng tā dāngle dàjiàng, chízǎo huì hài le Zhàoguó.'
  },
  {
    vi:'Liêm Pha ra lệnh cho binh lính giữ vững trận địa, tuyệt đối không được chủ động ra đánh.',
    zh:'廉颇命令士兵们坚守阵地，绝对不可主动出战。',
    py:'Lián Pō mìnglìng shìbīngmen jiānshǒu zhèndì, juéduì bù kě zhǔdòng chūzhàn.'
  },
  {
    vi:'Quân Tần nhiều lần khiêu chiến, chửi ông là kẻ hèn nhát, ông vẫn không xuất binh.',
    zh:'秦军多次挑战，骂他是胆小鬼，他还是不出兵。',
    py:'Qín jūn duō cì tiǎozhàn, mà tā shì dǎnxiǎoguǐ, tā háishi bù chū bīng.'
  },
  {
    vi:'Vua Triệu nghe những tin đồn bên ngoài, quả nhiên mắc lừa.',
    zh:'赵王听到外面的那些谣言，果然上当了。',
    py:'Zhào wáng tīngdào wàimiàn de nàxiē yáoyán, guǒrán shàngdàng le.'
  },
  {
    vi:'Mẹ Triệu Quát nhiều lần can ngăn vua Triệu bổ nhiệm con mình làm đại tướng.',
    zh:'赵括的母亲再三阻止赵王任命儿子为大将。',
    py:'Zhào Kuò de mǔqīn zàisān zǔzhǐ Zhào wáng rènmìng érzi wéi dàjiàng.'
  },
  {
    vi:'Ngày nay người ta thường dùng thành ngữ này để châm biếm những người chỉ biết nói suông lý thuyết.',
    zh:'现在常用这个成语讽刺那些只会空谈理论的人。',
    py:'Xiànzài cháng yòng zhège chéngyǔ fěngcì nàxiē zhǐ huì kōngtán lǐlùn de rén.'
  }
];

// ══════════════════════════════════════════
// LUYỆN VIẾT
// ══════════════════════════════════════════
var writingData = {
  words:['理论','盲目','轻视','迟早','灵活'],
  prompt:'Dùng đủ 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nói về bài học em rút ra từ câu chuyện Triệu Quát, có liên hệ một chuyện “chỉ giỏi lý thuyết” mà em từng gặp.',
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你从赵括之死想到的。',
  outline:[
    'Câu mở: tóm tắt Triệu Quát — thuộc lý thuyết nhưng thiếu kinh nghiệm thực tế (dùng 理论).',
    'Nguyên nhân thất bại: tự tin mù quáng, coi thường đối thủ (dùng 盲目, 轻视).',
    'Liên hệ bản thân: một chuyện học tập / đời sống CỤ THỂ, rút ra quy luật (dùng 迟早).',
    'Kết: bài học — làm việc phải linh hoạt, lý thuyết gắn với thực tế (dùng 灵活).'
  ],
  model:{
    zh:'赵括读了很多兵书，对军事理论很了解，可是他盲目自信，又轻视对手，结果打了败仗。我学游泳的时候也一样，看了很多视频，以为自己都会了，一下水就害怕了。我明白了：只会纸上谈兵，迟早会失败。做事一定要灵活，要多实践。',
    py:'Zhào Kuò dúle hěn duō bīngshū, duì jūnshì lǐlùn hěn liǎojiě, kěshì tā mángmù zìxìn, yòu qīngshì duìshǒu, jiéguǒ dǎle bàizhàng. Wǒ xué yóuyǒng de shíhou yě yíyàng, kànle hěn duō shìpín, yǐwéi zìjǐ dōu huì le, yí xià shuǐ jiù hàipà le. Wǒ míngbai le: zhǐ huì zhǐshàng tánbīng, chízǎo huì shībài. Zuòshì yídìng yào línghuó, yào duō shíjiàn.',
    vn:'Triệu Quát đọc rất nhiều binh thư, rất am hiểu lý luận quân sự, nhưng hắn tự tin mù quáng, lại coi thường đối thủ, kết quả là thua trận. Hồi tôi học bơi cũng vậy: xem rất nhiều video, tưởng mình biết hết rồi, vừa xuống nước đã sợ. Tôi hiểu ra rằng: chỉ biết bàn suông trên giấy thì sớm muộn cũng thất bại. Làm việc nhất định phải linh hoạt, phải thực hành nhiều.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có kể một chuyện CỤ THỂ của em, hay chỉ chép lại câu chuyện Triệu Quát?',
    '迟早 có đứng SAU chủ ngữ và đi với 会 không (你迟早会……)?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  tuDung:[
    {
      tu:'理论',
      loai:'danh từ',
      cach:'对……理论很了解 · 空谈理论 · 理论联系实际',
      sai:[
        {re:'(很|非常|真)?有理论',sua:'很有道理',giai:'“Có lý” là 有道理. 理论 là lý thuyết có hệ thống, không nói 很有理论.'},
        {re:'讲理论',sua:'讲道理 / 空谈理论',giai:'“Nói lý lẽ, biết điều” là 讲道理; muốn chê “chỉ nói lý thuyết” thì dùng 空谈理论.',nhe:true}
      ]
    },
    {
      tu:'盲目',
      loai:'tính từ (hay làm trạng ngữ)',
      cach:'盲目 + V: 盲目自信 · 盲目相信 · 盲目跟风',
      sai:[
        {re:'盲目的(?=[自相跟学乐买做])',sua:'盲目(地) + V',giai:'Đứng trước động từ làm trạng ngữ thì dùng 地 hoặc bỏ trống (盲目自信), không dùng 的.'},
        {re:'眼睛盲目|盲目的人',sua:'盲人 / 看不见',giai:'盲目 là “mù quáng” (nghĩa bóng). Người mù, mắt không thấy là 盲人 (bài 7).',nhe:true}
      ]
    },
    {
      tu:'轻视',
      loai:'động từ',
      cach:'轻视 + đối tượng: 轻视对手 · 轻视别人 · 被人轻视',
      sai:[
        {re:'轻视(地|的)(看|说|笑)',sua:'看不起地看 → 轻视 + tân ngữ',giai:'轻视 là động từ mang tân ngữ (轻视对手), không làm trạng ngữ kiểu 轻视地看.'},
        {re:'看不起轻视|轻视看不起',sua:'轻视 hoặc 看不起',giai:'Hai từ cùng nghĩa, dùng một là đủ.',nhe:true}
      ]
    },
    {
      tu:'迟早',
      loai:'phó từ',
      cach:'Sub + 迟早 + 会 / 要 + V',
      sai:[
        {re:'迟早(我|你|他|她|我们|他们|大家)',sua:'你迟早会……',giai:'迟早 là PHÓ TỪ, đứng SAU chủ ngữ: 你迟早会成功 — không đặt trước chủ ngữ.'},
        {re:'迟早(失败|成功|明白|后悔|发现)',sua:'迟早会……',giai:'迟早 thường đi với 会 / 要: 迟早会失败. Thiếu 会 câu nghe cụt.',nhe:true}
      ]
    },
    {
      tu:'灵活',
      loai:'tính từ',
      cach:'做事(要)灵活 · 灵活(地)运用 · 灵活变通',
      sai:[
        {re:'灵活的(运用|处理|使用|做)',sua:'灵活地……',giai:'Làm trạng ngữ trước động từ phải dùng 地: 灵活地运用.'},
        {re:'(很|非常)灵活地(?![运处使做])',sua:'……很灵活。',giai:'Làm vị ngữ cuối câu thì không thêm 地: 他做事很灵活.',nhe:true}
      ]
    }
  ],
  cauTruc:[
    {ten:'Sub + 对……很了解，可是……',nhan:'对……了解',vd:'赵括对军事理论很了解，可是没有实际经验。',khi:'Câu mở: nêu mặt mạnh rồi lật lại mặt yếu.'},
    {ten:'……，结果……',nhan:'结果',vd:'他盲目自信，结果打了败仗。',khi:'Nêu hậu quả của việc làm sai.'},
    {ten:'以为……，一……就……',nhan:'以为',vd:'我以为自己都会了，一下水就害怕了。',khi:'Kể chuyện bản thân: tưởng là… hoá ra… (HSK 4).'},
    {ten:'Sub + 迟早会 + V',nhan:'迟早',vd:'只会纸上谈兵，迟早会失败。',khi:'Rút ra quy luật từ câu chuyện.'},
    {ten:'V + 得过 / 不过 + người',nhan:'过',vd:'光看视频，我怎么也比不过天天练习的同学。',khi:'So sánh hơn thua giữa lý thuyết và thực hành.'},
    {ten:'虽然……，但是……',nhan:'虽然',vd:'虽然理论很重要，但是实践更重要。',khi:'Cân nhắc hai mặt — thân đoạn.'},
    {ten:'做事一定要……，要……',nhan:'一定要',vd:'做事一定要灵活，要理论联系实际。',khi:'Câu KẾT: nêu bài học.'}
  ],
  sapXep:[
    {
      manh:['很了解','赵括','军事理论','对'],
      dap:'赵括对军事理论很了解。',
      vn:'Triệu Quát rất am hiểu lý luận quân sự.',
      giai:'对 + đối tượng đứng TRƯỚC 很了解: Sub + 对 + N + 很了解.'
    },
    {
      manh:['又','他','轻视对手','盲目自信'],
      dap:'他盲目自信，又轻视对手。',
      vn:'Hắn tự tin mù quáng, lại coi thường đối thủ.',
      giai:'盲目 là trạng ngữ đứng trước 自信; 又 nối thêm khuyết điểm thứ hai, đứng trước động từ 轻视.'
    },
    {
      manh:['迟早会','只会纸上谈兵','失败'],
      dap:'只会纸上谈兵，迟早会失败。',
      vn:'Chỉ biết bàn suông trên giấy thì sớm muộn sẽ thất bại.',
      giai:'Vế điều kiện đứng trước; 迟早会 + V ở vế sau.'
    },
    {
      manh:['要注意','做事','理论联系实际','一定要灵活'],
      dap:'做事一定要灵活，要注意理论联系实际。',
      vn:'Làm việc nhất định phải linh hoạt, phải chú ý gắn lý thuyết với thực tế.',
      giai:'Câu cuối bài khoá: 做事 làm chủ đề, hai vế 要…… song song.'
    },
    {
      manh:['比不过','这一点','我','你们'],
      dap:'这一点我比不过你们。',
      chap:['我这一点比不过你们。'],
      vn:'Điểm này tôi không bằng các bạn.',
      giai:'V + 不过 + người: 比不过你们. 这一点 làm chủ đề đứng đầu câu.'
    },
    {
      manh:['参加比赛','他','邀请我','再三'],
      dap:'他再三邀请我参加比赛。',
      vn:'Anh ấy mời đi mời lại tôi tham gia cuộc thi.',
      giai:'再三 là phó từ, đứng trước động từ 邀请: Sub + 再三 + 邀请 + người + V.'
    }
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 (tr. 143)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Ba câu đầu là <b>话题讨论</b> của sách (tr. 143: 理论与实际的关系), câu 4 mở rộng. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng từ mới: 理论 · 盲目 · 轻视 · 迟早 · 灵活 · 纸上谈兵.',
  questions:[
    {
      q_zh:'赵括算不算一位出色的军事家？你认为赵括的死是什么原因造成的？',
      q_vn:'Triệu Quát có được coi là nhà quân sự xuất sắc không? Theo em, cái chết của Triệu Quát do nguyên nhân gì?',
      hint:'Trả lời đủ HAI vế, dùng 理论, 盲目, 轻视',
      sample:'我觉得赵括不算出色的军事家。他虽然对军事理论很了解，但是没有实际作战的经验。他的死是他盲目自信、轻视秦军造成的。',
      sample_vn:'Tôi thấy Triệu Quát không phải nhà quân sự xuất sắc. Hắn tuy rất am hiểu lý luận quân sự nhưng không có kinh nghiệm đánh trận thực tế. Cái chết của hắn là do tự tin mù quáng, coi thường quân Tần gây ra.',
      note:'Câu hỏi hai vế — trả lời thiếu một vế là mất điểm. ……是……造成的 là khung câu nêu nguyên nhân rất gọn.'
    },
    {
      q_zh:'赵括的死给你最大的启发是什么？',
      q_vn:'Cái chết của Triệu Quát cho em bài học lớn nhất là gì?',
      hint:'Dùng 灵活, 理论联系实际, 迟早',
      sample:'最大的启发是：做事一定要灵活，要理论联系实际。只会纸上谈兵的人，迟早会失败。',
      sample_vn:'Bài học lớn nhất là: làm việc nhất định phải linh hoạt, phải gắn lý thuyết với thực tế. Người chỉ biết bàn suông trên giấy, sớm muộn sẽ thất bại.',
      note:'Mở bằng 最大的启发是…… rồi nêu thẳng bài học — không vòng vo.'
    },
    {
      q_zh:'请举一个生活中类似的例子，并说说我们在生活中应该注意什么。',
      q_vn:'Hãy nêu một ví dụ tương tự trong cuộc sống, và nói xem trong cuộc sống chúng ta nên chú ý điều gì.',
      hint:'Kể một chuyện CỤ THỂ, dùng 以为……，结果……',
      sample:'我表哥学开车的时候，把交通规则背得很熟，以为自己一定没问题，结果一上路就紧张得不得了。所以我们学东西一定要多实践。',
      sample_vn:'Anh họ tôi hồi học lái xe học thuộc làu luật giao thông, tưởng mình chắc chắn không vấn đề gì, kết quả vừa ra đường đã căng thẳng kinh khủng. Vì vậy học cái gì chúng ta cũng phải thực hành nhiều.',
      note:'Ôn 不得了 (bài 2) và câu 把. Ví dụ cụ thể luôn được điểm cao hơn nói chung chung.'
    },
    {
      q_zh:'你觉得学汉语的时候，语法和说话哪个更重要？为什么？',
      q_vn:'Em thấy khi học tiếng Trung, ngữ pháp và luyện nói cái nào quan trọng hơn? Vì sao?',
      hint:'Chọn hẳn một bên, dùng 虽然……但是…… và 只要……就……',
      sample:'我觉得说话更重要。虽然语法也很重要，但是如果不开口说，学过的东西迟早会忘。只要多跟别人聊天儿，就能说得越来越流利。',
      sample_vn:'Tôi thấy luyện nói quan trọng hơn. Tuy ngữ pháp cũng quan trọng, nhưng nếu không mở miệng nói thì những gì đã học sớm muộn sẽ quên. Chỉ cần nói chuyện với người khác nhiều là sẽ nói ngày càng lưu loát.',
      note:'Dạng câu hỏi ý kiến — chọn hẳn một bên rồi bảo vệ, đừng nói “cả hai đều quan trọng”.'
    }
  ]
};

// ══════════════════════════════════════════
// NGHE THEO ĐỀ — 练习册 bài 15, câu 1–8
// ══════════════════════════════════════════
var listenExamData = {
  intro:'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source:'Nguyên văn: 《HSK标准教程5·练习册》第15课 听力',
  items:[
    {
      n:1,
      lines:[{sp:'女',zh:'老板派咱儿子去完成这次的任务不是好事吗？你为什么这么不高兴？'},{sp:'男',zh:'儿子的毛病是只会讲大道理，缺乏实际锻炼。如果让他去，八成儿会把事情弄糟。'}],
      q:'对于儿子去完成这次任务，父亲的态度是什么？',
      qvn:'Với việc con trai đi làm nhiệm vụ lần này, thái độ của người cha thế nào?',
      opts:['非常支持','担心他会把事情弄糟','觉得很骄傲','无所谓'],
      ans:1,
      why:'八成儿会把事情弄糟 = nhiều khả năng sẽ làm hỏng việc → lo lắng. Câu nói của ông cha giống hệt lời Triệu Xa trong bài khoá.',
      words:['派','毛病','道理']
    },
    {
      n:2,
      lines:[{sp:'男',zh:'你为什么不想去幼儿园呢？'},{sp:'女',zh:'小朋友们骂我是胆小鬼，不跟我玩儿。'}],
      q:'女孩儿为什么不愿意去幼儿园？',
      qvn:'Vì sao bé gái không muốn đi nhà trẻ?',
      opts:['不喜欢老师','身体不舒服','想在家看电视','小朋友不跟她玩儿'],
      ans:3,
      why:'不跟我玩儿 — các bạn không chơi với bé (vì chửi bé là đồ nhát gan).',
      words:['骂','胆小鬼']
    },
    {
      n:3,
      lines:[{sp:'女',zh:'这次夏令营是一个挑战，看看你是不是真的可以独立了。'},{sp:'男',zh:'您放心吧，我一定没问题。'}],
      q:'他们最可能是什么关系？',
      qvn:'Họ nhiều khả năng là quan hệ gì?',
      opts:['母子','同事','邻居','夫妻'],
      ans:0,
      why:'Người nữ lo con đi trại hè có tự lập được không; người nam xưng 您 → mẹ và con trai.',
      words:['挑战','独立']
    },
    {
      n:4,
      lines:[{sp:'男',zh:'今天的会议有什么重要内容？'},{sp:'女',zh:'我跟你一样，没有参加会议的资格。'}],
      q:'女的是什么意思？',
      qvn:'Người phụ nữ có ý gì?',
      opts:['会议不重要','她参加了会议','她也不知道会议内容','会议取消了'],
      ans:2,
      why:'Cô cũng không có tư cách dự họp như anh → cô cũng không biết nội dung.',
      words:['资格']
    },
    {
      n:5,
      lines:[{sp:'女',zh:'这孩子整天这么没脑子，以后可怎么办哪？'},{sp:'男',zh:'没关系，长大了慢慢就会懂事了。'}],
      q:'女的觉得孩子怎么样？',
      qvn:'Người phụ nữ thấy đứa trẻ thế nào?',
      opts:['很聪明','太糊涂','很懂事','很独立'],
      ans:1,
      why:'没脑子 = không có đầu óc, hay quên, hồ đồ → 太糊涂. 懂事 là ý của người đàn ông (sau này sẽ hiểu chuyện) — bẫy đổi người nói.',
      words:['糊涂']
    },
    {
      n:6,
      lines:[{sp:'男',zh:'战国时期，各个国家之间的竞争非常激烈。'},{sp:'女',zh:'其实哪个时代都一样，那时候人才也是关键。'}],
      q:'女的想说明什么？',
      qvn:'Người phụ nữ muốn nói rõ điều gì?',
      opts:['战国时期竞争最激烈','现在没有竞争','人才在任何时代都很重要','那时候没有人才'],
      ans:2,
      why:'哪个时代都一样 + 人才也是关键 → thời nào nhân tài cũng quan trọng.',
      words:['战国']
    },
    {
      n:7,
      lines:[{sp:'女',zh:'老王不在你们公司工作了吗？'},{sp:'男',zh:'他被派到上海分公司去任总经理了。'},{sp:'女',zh:'原来是升官了啊！'},{sp:'男',zh:'是啊，干了这么多年，也该轮到他了。'}],
      q:'关于老王，可以知道什么？',
      qvn:'Về ông Vương, có thể biết điều gì?',
      opts:['辞职了','被公司开除了','去上海旅游了','升职了'],
      ans:3,
      why:'被派到上海分公司去任总经理 + 升官了 → được thăng chức. Không phải nghỉ việc dù 不在你们公司工作了.',
      words:['派']
    },
    {
      n:8,
      lines:[{sp:'男',zh:'太倒霉了！这次真是上了个大当！'},{sp:'女',zh:'之前我就再三地阻止你，你不听我的，能怪谁呢？'},{sp:'男',zh:'是啊，早知道听你的就好了。'},{sp:'女',zh:'现在后悔也晚了。'}],
      q:'男的怎么了？',
      qvn:'Người đàn ông bị làm sao?',
      opts:['生病了','上当了','迷路了','丢了工作'],
      ans:1,
      why:'上了个大当 = bị lừa một vố lớn (ly hợp từ 上当 tách ra).',
      words:['上当','再三','阻止']
    }
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG
// ══════════════════════════════════════════
var situationData = {
  intro:'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items:[
    {
      scene:'Bạn cùng đội khoe đã đọc hết sách hướng dẫn chơi bóng rổ nên chắc chắn thắng.',
      a:{sp:'Bạn',zh:'篮球书我都看完了，明天的比赛我们肯定赢！',vn:'Sách bóng rổ tớ đọc hết rồi, trận mai bọn mình chắc chắn thắng!'},
      need:['Dùng 纸上谈兵','Khuyên bạn đi luyện tập thực tế'],
      sample:'光看书可不行，这不是纸上谈兵嘛！咱们今天下午还是去球场练练吧。',
      samplePy:'Guāng kàn shū kě bù xíng, zhè bú shì zhǐshàng tánbīng ma! Zánmen jīntiān xiàwǔ háishi qù qiúchǎng liànlian ba.',
      sampleVn:'Chỉ đọc sách thì không được đâu, thế chẳng phải bàn suông trên giấy sao! Chiều nay bọn mình ra sân tập đi.',
      tip:'这不是……嘛 = thế chẳng phải là… sao — câu phản vấn, giống câu trong 练习册.'
    },
    {
      scene:'Em trai sợ đi trại hè một mình.',
      a:{sp:'Em trai',zh:'我不想一个人去夏令营，我害怕。',vn:'Em không muốn đi trại hè một mình, em sợ.'},
      need:['Dùng 挑战','Dùng 独立'],
      sample:'别怕，这是一个挑战，也是学会独立生活的好机会。',
      samplePy:'Bié pà, zhè shì yí ge tiǎozhàn, yě shì xuéhuì dúlì shēnghuó de hǎo jīhuì.',
      sampleVn:'Đừng sợ, đây là một thử thách, cũng là cơ hội tốt để học cách sống tự lập.',
      tip:'挑战 làm danh từ: 一个挑战. 独立 làm trạng ngữ: 独立生活.'
    },
    {
      scene:'Bạn thân bị lừa mua điện thoại giả trên mạng.',
      a:{sp:'Bạn',zh:'我在网上买的手机是假的，气死我了！',vn:'Cái điện thoại tớ mua trên mạng là hàng giả, tức chết đi được!'},
      need:['Dùng 上当','Dùng 盲目 để khuyên bạn'],
      sample:'你又上当了？以后别盲目相信网上那些便宜的广告。',
      samplePy:'Nǐ yòu shàngdàng le? Yǐhòu bié mángmù xiāngxìn wǎng shang nàxiē piányi de guǎnggào.',
      sampleVn:'Cậu lại bị lừa à? Sau này đừng tin mù quáng mấy quảng cáo rẻ trên mạng nữa.',
      tip:'上当 không mang tân ngữ. 盲目 + 相信: tin mù quáng.'
    },
    {
      scene:'Cô giáo hỏi ý kiến cả lớp về kế hoạch đi dã ngoại.',
      a:{sp:'Cô',zh:'大家对这个方案有什么意见？',vn:'Các em có ý kiến gì về phương án này không?'},
      need:['Dùng 方案','Dùng 虽然……但是…… (HSK 4)'],
      sample:'老师，虽然这个方案很好，但是路上要花的时间太多，我建议再改一改。',
      samplePy:'Lǎoshī, suīrán zhège fāng\'àn hěn hǎo, dànshì lù shang yào huā de shíjiān tài duō, wǒ jiànyì zài gǎi yi gǎi.',
      sampleVn:'Thưa cô, tuy phương án này rất hay, nhưng thời gian đi đường nhiều quá, em đề nghị sửa lại một chút ạ.',
      tip:'Góp ý với thầy cô: khen trước, góp ý sau, dùng 建议 cho lịch sự.'
    },
    {
      scene:'Bạn thách em đấu cờ, bảo em chắc chắn thua.',
      a:{sp:'Bạn',zh:'你下棋肯定下不过我，敢不敢跟我比一比？',vn:'Cậu chơi cờ chắc chắn không thắng nổi tớ, có dám đấu với tớ không?'},
      need:['Dùng V + 得过 / 不过','Nhận lời thách đấu'],
      sample:'谁说我下不过你？比就比，你可别轻视我！',
      samplePy:'Shéi shuō wǒ xià bu guò nǐ? Bǐ jiù bǐ, nǐ kě bié qīngshì wǒ!',
      sampleVn:'Ai bảo tớ không thắng nổi cậu? Đấu thì đấu, cậu đừng có coi thường tớ!',
      tip:'V + 不过 + người = không hơn được ai (điểm ngữ pháp 1). 比就比 = đấu thì đấu (khẩu ngữ).'
    }
  ]
};

// ══════════════════════════════════════════
// CHỌN VĂN PHONG
// ══════════════════════════════════════════
var registerData = {
  intro:'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items:[
    {
      scene:'Em viết bài giới thiệu lịch sử cho bảng tin của lớp.',
      a:'公元前260年，赵国军队被秦军打败，数十万士兵失去了生命。',
      b:'两千多年前赵国跟秦国打仗，输得可惨了。',
      better:'a',
      why:'Bài viết lịch sử là văn viết: có mốc 公元前, dùng 失去了生命. Câu b là khẩu ngữ (可惨了), hợp khi kể chuyện với bạn.'
    },
    {
      scene:'Em nhắn tin trêu bạn thân sợ ma.',
      a:'你真是个胆小鬼！',
      b:'你是一位缺乏勇气的人。',
      better:'a',
      why:'Nhắn tin trêu bạn thân: 胆小鬼 khẩu ngữ, thân mật. Câu b trang trọng, nghe như lời phê bình nghiêm túc.'
    },
    {
      scene:'Thầy giáo viết nhận xét vào sổ liên lạc.',
      a:'该生理论知识扎实，但缺乏实际运用的能力。',
      b:'这孩子光会背书，一用就不行。',
      better:'a',
      why:'Nhận xét chính thức: 该生, 缺乏…能力 trang trọng, khách quan. Câu b là lời nói miệng, hơi chê.'
    },
    {
      scene:'Bạn cùng nhóm đưa ra một kế hoạch không thực tế, em góp ý.',
      a:'你这计划有点儿纸上谈兵啊，咱们再想想？',
      b:'你的方案完全脱离实际，属于纸上谈兵。',
      better:'a',
      why:'Góp ý với bạn: 有点儿 + câu hỏi 再想想？ làm lời nói mềm, giữ hoà khí. Câu b đúng nhưng nặng nề như văn bản phê bình.'
    },
    {
      scene:'Người dẫn chương trình thời sự đưa tin.',
      a:'有人在网上散布谣言，警方已经开始调查。',
      b:'有人在网上瞎说，警察正查着呢。',
      better:'a',
      why:'Tin thời sự là văn phong trang trọng: 散布谣言, 警方. 瞎说, 正查着呢 là khẩu ngữ.'
    },
    {
      scene:'Em từ chối lời mời của một người bạn sau khi đã suy nghĩ kỹ.',
      a:'我不去。',
      b:'我考虑再三，还是决定不去了，真不好意思。',
      better:'b',
      why:'Từ chối cần lịch sự: 考虑再三 cho thấy em đã suy nghĩ kỹ, thêm 真不好意思. Câu a đúng nhưng cộc lốc.'
    }
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI KHOÁ — bài tập 4 (tr. 142)
// ══════════════════════════════════════════
var retellData = {
  intro:'Bài tập 4 của giáo trình (tr. 142): <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, KHÔNG đọc thuộc lòng. Sách chia 4 ý (赵括的军事才能 · 廉颇的战术 · 赵王上当 · 赵括之死); ở đây tách nhỏ thành 7 bước. Nhìn dàn ý và từ khoá, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline:[
    {step:'Tài quân sự của Triệu Quát',cue:'战国末期，赵奢的儿子赵括…… 没有人说得过他…… 骄傲，天下无敌',words:['战国','赵国','赵奢','赵括','军事','理论']},
    {step:'Nỗi lo của Triệu Xa',cue:'没有实际作战的经验…… 儿子的毛病是…… 迟早会……',words:['作战','毛病','道理','迟早']},
    {
      step:'Chiến thuật của Liêm Pha',
      cue:'秦国军队来打赵国…… 根据敌强我弱的形势，命令…… 秦军多次挑战，骂他……',
      words:['秦国','军队','派','廉颇','弱','形势','命令','守','阵地','绝对','主动','挑战','骂','胆小鬼','胜利']
    },
    {step:'Kế ly gián của nước Tần',cue:'秦人想叫赵国把廉颇调回去…… 四处散布谣言……',words:['调','散布','谣言']},
    {step:'Vua Triệu mắc lừa',cue:'赵王果然上当了…… 母亲再三阻止…… 糊涂的赵王……',words:['上当','再三','阻止','任命','独立','资格','糊涂']},
    {step:'Cái chết của Triệu Quát',cue:'公元前260年…… 盲目自信、轻视秦军…… 丢掉了宝贵的生命',words:['公元','盲目','轻视','方案','进攻','宝贵']},
    {step:'Ý nghĩa thành ngữ',cue:'这就是成语“纸上谈兵”…… 讽刺…… 提醒大家……',words:['纸上谈兵','讽刺','灵活']}
  ],
  checklist:[
    'Kể đủ bảy ý trên chưa, có bỏ mất đoạn người Tần tung tin đồn không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 说得过 / 说不过, 迟早, 再三 — ba điểm ngữ pháp của bài — đúng vị trí không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// BÀI TẬP SÁCH GIÁO KHOA (tr. 141) — bài 1, 2
// ══════════════════════════════════════════
var sgkData = [
  {
    kieu:'kho',
    de:'选择合适的词语填空',
    vn:'Chọn từ thích hợp điền vào chỗ trống',
    tu:['宝贵','阻止','善于','独立','挑战','糊涂'],
    cau:[
      {s:'我见朋友的小孩怎么也打不开房门，就想帮他，却被朋友＿＿了。',dap:['阻止']},
      {s:'任何经验都是＿＿的，但并不是任何时候都是有效的。',dap:['宝贵']},
      {s:'社会上的成功人士，有不少都＿＿记住别人的名字。',dap:['善于']},
      {s:'你这脑子可真＿＿，银行卡的密码怎么能忘了呢？',dap:['糊涂']},
      {s:'跳伞运动以自身的惊险和＿＿性，被世人称为“勇敢者的运动”。',dap:['挑战']},
      {s:'家长应尽量创造一个能让孩子＿＿生活和学习的环境。',dap:['独立']}
    ]
  },
  {
    kieu:'ab',
    de:'选择正确答案',
    vn:'Chọn đáp án đúng',
    cau:[
      {
        s:'我＿＿以为这一生我只能做一个普普通通的工人了。',
        opts:['曾经','已经'],
        ans:0,
        giai:'Nói một suy nghĩ TỪNG có trong quá khứ, nay đã khác → 曾经 (曾经以为 = đã từng nghĩ). 已经 nhấn mạnh việc đã xong, không hợp với 以为 ở đây.'
      },
      {s:'师傅，最近我这车出了点儿＿＿，空调总是不太凉。',opts:['缺点','毛病'],ans:1,giai:'Máy móc trục trặc → 出毛病. 缺点 chỉ chỗ chưa tốt, không dùng cho xe hỏng.'},
      {s:'父母给我讲了许多做人的＿＿，对我的影响很大。',opts:['理论','道理'],ans:1,giai:'讲 + 做人的道理 = giảng đạo lý làm người. 理论 là hệ thống tri thức khoa học.'},
      {
        s:'我相信这样的安排他是＿＿不会同意的。',
        opts:['绝对','完全'],
        ans:0,
        giai:'Khẳng định chắc chắn một phán đoán (是……的) → 绝对不会. 完全 nói mức độ trọn vẹn (完全同意, 完全了解), không dùng để nhấn mạnh độ chắc chắn.'
      }
    ]
  }
];
