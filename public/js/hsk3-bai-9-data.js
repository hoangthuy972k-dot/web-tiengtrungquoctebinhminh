// ══════════════════════════════════════════
// DATA — HSK3 Bài 9: 她的汉语说得跟中国人一样好 (Cô ấy nói tiếng Trung hay như người Trung Quốc vậy)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'中文',py:'Zhōngwén',pos:'Danh từ',vn:'tiếng Trung Quốc',em:'🇨🇳',lesson:1,
   explain:['Ngôn ngữ và chữ viết của Trung Quốc, đồng nghĩa gần với 汉语.'],
   usage:'Danh từ; thường dùng với 说/学: 说中文, 学中文.',
   collo:['说中文','学中文','中文老师'],
   ex_zh:'马可，你的中文越说越好了！',ex_py:'Mǎkě, nǐ de Zhōngwén yuè shuō yuè hǎo le!',ex_vn:'Marco, tiếng Trung của cậu ngày càng nói giỏi rồi!',
   exList:[
     {zh:'马可，你的中文越说越好了！',py:'Mǎkě, nǐ de Zhōngwén yuè shuō yuè hǎo le!',vn:'Marco, tiếng Trung của cậu ngày càng nói giỏi rồi!'},
     {zh:'你说得真好，几乎跟中国人一样！',py:'Nǐ shuō de zhēn hǎo, jīhū gēn Zhōngguórén yíyàng!',vn:'Bạn nói hay thật đấy, hầu như giống người Trung Quốc luôn!'},
     {zh:'我们的中文老师说英语说得跟美国人一样好。',py:'Wǒmen de Zhōngwén lǎoshī shuō Yīngyǔ shuō de gēn Měiguórén yíyàng hǎo.',vn:'Giáo viên tiếng Trung của chúng tôi nói tiếng Anh cũng giỏi như người Mỹ vậy.'},
   ],
   hanzi:[
     {c:'文',p:'wén',type:'独体字 · Chữ đơn (tượng hình)',st:4,ord:'nét liền, hình hoa văn',rad:'文 (văn)',mean:'chữ viết, văn tự',
      tip:'Chữ tượng hình mô phỏng hoa văn trên thân người xưa → mở rộng nghĩa CHỮ VIẾT, VĂN TỰ.',
      cf:'齐 (qí – "ngang bằng", không có bộ 文")',w:'中文 / 文字 / 文化'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiếng Trung của bạn ngày càng nói giỏi rồi!',answer:'你的中文越说越好了！',answerPy:'Nǐ de Zhōngwén yuè shuō yuè hǎo le!',
      note:'越说越好 = 越A越B diễn tả mức độ tăng dần (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn chăm chỉ học tiếng Trung thì sẽ nói được như người Trung Quốc.',answer:'只要你努力学中文，就能说得跟中国人一样。',answerPy:'Zhǐyào nǐ nǔlì xué Zhōngwén, jiù néng shuō de gēn Zhōngguórén yíyàng.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 努力 đã học ở Bài 4).'},
   ]},

  {n:2,zh:'班',py:'bān',pos:'Danh từ',vn:'lớp',em:'🏫',lesson:1,
   explain:['Nhóm học sinh học cùng nhau trong một lớp học.'],
   usage:'Danh từ; đi cùng số từ + 班: 我们班 (lớp chúng tôi), 一班 (lớp 1).',
   collo:['我们班','一班','同班'],
   ex_zh:'我们班李静说得更好。',ex_py:'Wǒmen bān Lǐ Jìng shuō de gèng hǎo.',ex_vn:'Lý Tĩnh lớp mình nói còn giỏi hơn.',
   exList:[
     {zh:'我们班李静说得更好。',py:'Wǒmen bān Lǐ Jìng shuō de gèng hǎo.',vn:'Lý Tĩnh lớp mình nói còn giỏi hơn.'},
     {zh:'这次中文比赛的第一是您班的学生吗？',py:'Zhè cì Zhōngwén bǐsài de dì-yī shì nín bān de xuésheng ma?',vn:'Người đứng đầu cuộc thi tiếng Trung lần này có phải học sinh lớp cô không?'},
     {zh:'参赛的同学每人最少讲3分钟。',py:'Cānsài de tóngxué měi rén zuìshǎo jiǎng sān fēnzhōng.',vn:'Học sinh dự thi mỗi người nói ít nhất 3 phút.'},
   ],
   hanzi:[
     {c:'班',p:'bān',type:'左右结构 · Trái-phải',st:10,ord:'王 trái → 刂 giữa → 王 phải',rad:'王 (ngọc)',mean:'lớp, nhóm',
      tip:'Hai chữ 王(ngọc) hai bên + 刂(dao) ở giữa → hình ảnh CẮT một khối ngọc thành từng PHẦN, mở rộng nghĩa LỚP, NHÓM.',
      cf:'斑 (bān – "đốm màu", có thêm nét trên")',w:'我们班 / 上班 / 班级'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người đứng ở giữa kia là lớp trưởng của lớp chúng tôi.',answer:'站在中间的那个人是我们班的班长。',answerPy:'Zhàn zài zhōngjiān de nàge rén shì wǒmen bān de bānzhǎng.',
      note:'站在中间 diễn tả vị trí (ôn lại 站/中间 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn học tiếng Trung tốt thì hãy chăm đi học trên lớp.',answer:'如果你想学好中文，就要认真去班里上课。',answerPy:'Rúguǒ nǐ xiǎng xuéhǎo Zhōngwén, jiù yào rènzhēn qù bān lǐ shàngkè.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 认真 đã học ở Bài 4).'},
   ]},

  {n:3,zh:'一样',py:'yíyàng',pos:'Tính từ',vn:'giống nhau, như nhau',em:'⚖️',lesson:1,
   explain:['Không có sự khác biệt giữa hai đối tượng khi so sánh.'],
   usage:'Cấu trúc so sánh bằng: A + 跟 + B + 一样 (+ tính từ); phủ định: A + 跟 + B + 不一样.',
   collo:['跟……一样','不一样','一样好'],
   ex_zh:'她的汉语说得跟中国人一样好。',ex_py:'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.',ex_vn:'Tiếng Trung cô ấy nói hay như người Trung Quốc vậy.',
   exList:[
     {zh:'她的汉语说得跟中国人一样好。',py:'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.',vn:'Tiếng Trung cô ấy nói hay như người Trung Quốc vậy.'},
     {zh:'这辆车的颜色跟那辆车不一样。',py:'Zhè liàng chē de yánsè gēn nà liàng chē bù yíyàng.',vn:'Màu xe này khác với xe kia.'},
     {zh:'跟"了解"的"解"一样，但是做姓的时候读"解xiè"。',py:'Gēn "liǎojiě" de "jiě" yíyàng, dànshì zuò xìng de shíhou dú "Xiè".',vn:'Giống chữ "giải" trong "liễu giải", nhưng khi làm họ thì đọc là "Xiè".'},
   ],
   hanzi:[
     {c:'样',p:'yàng',type:'左右结构 · Trái-phải',st:10,ord:'木 trái → 羊 phải',rad:'木 (mộc – gỗ)',mean:'dáng vẻ, kiểu',
      tip:'木(gỗ, ý chỉ khuôn mẫu) + 羊(dê, vật thường dùng làm chuẩn) → KHUÔN MẪU, DÁNG VẺ; 一样 = cùng một khuôn mẫu = GIỐNG NHAU.',
      cf:'洋 (yáng – "đại dương", có bộ 氵")',w:'一样 / 不一样 / 怎么样'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc quần này màu sắc giống với chiếc kia.',answer:'这条裤子的颜色跟那条一样。',answerPy:'Zhè tiáo kùzi de yánsè gēn nà tiáo yíyàng.',
      note:'A跟B一样 diễn tả so sánh bằng (ôn lại 裤子 đã học ở Bài 3).'},
     {promptLang:'vi',prompt:'Tuy hai chiếc áo sơ mi này giá tiền giống nhau nhưng chất lượng khác nhau.',answer:'虽然这两件衬衫价钱一样，但是质量不一样。',answerPy:'Suīrán zhè liǎng jiàn chènshān jiàqián yíyàng, dànshì zhìliàng bù yíyàng.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 衬衫 đã học ở Bài 3).'},
   ]},

  {n:4,zh:'最后',py:'zuìhòu',pos:'Danh từ',vn:'cuối cùng',em:'🏁',lesson:2,
   explain:['Thời điểm hoặc vị trí sau chót, không còn gì tiếp theo.'],
   usage:'Danh từ, làm định ngữ trước danh từ: 最后 + [danh từ] (最后一块).',
   collo:['最后一块','最后一次','到最后'],
   ex_zh:'这是最后一块。',ex_py:'Zhè shì zuìhòu yí kuài.',ex_vn:'Đây là miếng cuối cùng thôi.',
   exList:[
     {zh:'这是最后一块。',py:'Zhè shì zuìhòu yí kuài.',vn:'Đây là miếng cuối cùng thôi.'},
     {zh:'对不起，这是最后一次，以后一定不迟到了。',py:'Duìbuqǐ, zhè shì zuìhòu yí cì, yǐhòu yídìng bù chídào le.',vn:'Xin lỗi, đây là lần cuối cùng, sau này nhất định không đến muộn nữa.'},
     {zh:'我们班的学生最后拿了第一。',py:'Wǒmen bān de xuésheng zuìhòu nále dì-yī.',vn:'Học sinh lớp chúng tôi cuối cùng đã giành hạng nhất.'},
   ],
   hanzi:[
     {c:'后',p:'hòu',type:'半包围结构 · Bán bao vây',st:6,ord:'⺈+幺(biến thể) bao ngoài → 口 trong',rad:'彳 (xích – bước chân)',mean:'sau, phía sau',
      tip:'Hình tượng người bước chậm phía sau đoàn người → PHÍA SAU; 最后 = vị trí sau cùng.',
      cf:'厚 (hòu – "dày", không có bộ 彳")',w:'最后 / 后边 / 以后'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đây là miếng bánh kem cuối cùng.',answer:'这是最后一块蛋糕。',answerPy:'Zhè shì zuìhòu yí kuài dàngāo.',
      note:'最后 + lượng từ + danh từ (ôn lại 蛋糕 đã học ở Bài 4).'},
     {promptLang:'vi',prompt:'Nếu bạn không nỗ lực thì cuối cùng sẽ hối hận.',answer:'如果你不努力，最后就会后悔。',answerPy:'Rúguǒ nǐ bù nǔlì, zuìhòu jiù huì hòuhuǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 努力 đã học ở Bài 4).'},
   ]},

  {n:5,zh:'放心',py:'fàngxīn',pos:'Động từ',vn:'yên tâm',em:'😌',lesson:2,
   explain:['Không còn lo lắng, cảm thấy an tâm.'],
   usage:'Động từ ly hợp; thường dùng ở dạng mệnh lệnh: 放心吧, 你放心.',
   collo:['你放心','放心吧','不放心'],
   ex_zh:'你放心，我一定不会变胖。',ex_py:'Nǐ fàngxīn, wǒ yídìng bú huì biàn pàng.',ex_vn:'Bạn yên tâm, mình chắc chắn không béo lên đâu.',
   exList:[
     {zh:'你放心，我一定不会变胖。',py:'Nǐ fàngxīn, wǒ yídìng bú huì biàn pàng.',vn:'Bạn yên tâm, mình chắc chắn không béo lên đâu.'},
     {zh:'你一定没问题，不用担心。',py:'Nǐ yídìng méi wèntí, búyòng dānxīn.',vn:'Bạn chắc chắn không có vấn đề gì, không cần lo lắng.'},
     {zh:'你放心，我对这儿比较了解。',py:'Nǐ fàngxīn, wǒ duì zhèr bǐjiào liǎojiě.',vn:'Bạn yên tâm, tôi khá rành chỗ này.'},
   ],
   hanzi:[
     {c:'放',p:'fàng',type:'左右结构 · Trái-phải',st:8,ord:'方 trái → 攵 phải',rad:'攵 (phốc – gõ nhẹ)',mean:'thả, đặt; buông',
      tip:'方(phương hướng) + 攵(tác động) → BUÔNG theo một hướng; 放心 = buông bỏ lo lắng trong lòng = YÊN TÂM.',
      cf:'纺 (fǎng – "kéo sợi", có bộ 纟")',w:'放心 / 放着 / 放在'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn yên tâm, tôi chắc chắn không đến muộn đâu.',answer:'你放心，我一定不会迟到。',answerPy:'Nǐ fàngxīn, wǒ yídìng bú huì chídào.',
      note:'放心 dùng dạng mệnh lệnh (ôn lại 迟到 đã học ở Bài 7).'},
     {promptLang:'vi',prompt:'Chỉ cần bạn khỏe mạnh thì cha mẹ sẽ yên tâm.',answer:'只要你健康，爸妈就会放心。',answerPy:'Zhǐyào nǐ jiànkāng, bàmā jiù huì fàngxīn.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 健康 đã học ở Bài 8).'},
   ]},

  {n:6,zh:'一定',py:'yídìng',pos:'Phó từ',vn:'nhất định, chắc chắn',em:'✅',lesson:2,
   explain:['Diễn tả sự khẳng định chắc chắn về một việc.'],
   usage:'Phó từ, đứng trước động từ: 一定 + V.',
   collo:['一定会','一定能','一定不会'],
   ex_zh:'你放心，我一定不会变胖。',ex_py:'Nǐ fàngxīn, wǒ yídìng bú huì biàn pàng.',ex_vn:'Bạn yên tâm, mình chắc chắn không béo lên đâu.',
   exList:[
     {zh:'你放心，我一定不会变胖。',py:'Nǐ fàngxīn, wǒ yídìng bú huì biàn pàng.',vn:'Bạn yên tâm, mình chắc chắn không béo lên đâu.'},
     {zh:'一定能参加，一点儿影响也没有。',py:'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.',vn:'Chắc chắn tham gia được, không ảnh hưởng gì cả.'},
     {zh:'谢谢老师，我一定努力，下次考试还拿第一。',py:'Xièxie lǎoshī, wǒ yídìng nǔlì, xià cì kǎoshì hái ná dì-yī.',vn:'Cảm ơn thầy/cô, em nhất định sẽ cố gắng, lần thi sau vẫn giành hạng nhất.'},
   ],
   hanzi:[
     {c:'定',p:'dìng',type:'上下结构 · Trên-dưới',st:8,ord:'宀 trên → 疋 dưới',rad:'宀 (miên – mái nhà)',mean:'ổn định, chắc chắn',
      tip:'宀(mái nhà) + 疋(bước chân dừng lại) → dừng chân yên vị trong nhà = ỔN ĐỊNH, CHẮC CHẮN.',
      cf:'空 (kōng – "trống rỗng", có bộ 穴")',w:'一定 / 决定 / 定了'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hoạt động của lớp cuối tuần này tôi chắc chắn tham gia được, không có gì phiền phức cả.',answer:'这周末的班级活动我一定能参加，一点儿麻烦也没有。',answerPy:'Zhè zhōumò de bānjí huódòng wǒ yídìng néng cānjiā, yìdiǎnr máfan yě méiyǒu.',
      note:'一点儿……也没有 diễn tả hoàn toàn không có gì (ôn lại 参加 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn nỗ lực thì nhất định sẽ thành công.',answer:'如果你努力，就一定会成功。',answerPy:'Rúguǒ nǐ nǔlì, jiù yídìng huì chénggōng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'担心',py:'dānxīn',pos:'Động từ',vn:'lo lắng',em:'😟',lesson:3,
   explain:['Cảm thấy bất an, lo ngại về điều gì đó.'],
   usage:'Động từ, mang tân ngữ trực tiếp hoặc đứng độc lập; thường dùng dạng phủ định mệnh lệnh: 不用担心, 别担心.',
   collo:['不用担心','别担心','担心你'],
   ex_zh:'不用担心，有我呢，我对这儿比较了解。',ex_py:'Bú yòng dānxīn, yǒu wǒ ne, wǒ duì zhèr bǐjiào liǎojiě.',ex_vn:'Không cần lo, có mình đây mà, mình khá rành chỗ này.',
   exList:[
     {zh:'不用担心，有我呢，我对这儿比较了解。',py:'Bú yòng dānxīn, yǒu wǒ ne, wǒ duì zhèr bǐjiào liǎojiě.',vn:'Không cần lo, có mình đây mà, mình khá rành chỗ này.'},
     {zh:'你一定没问题，不用担心。',py:'Nǐ yídìng méi wèntí, búyòng dānxīn.',vn:'Bạn chắc chắn không có vấn đề gì, không cần lo lắng.'},
     {zh:'如果你担心，就给妈妈打个电话问问吧。',py:'Rúguǒ nǐ dānxīn, jiù gěi māma dǎ ge diànhuà wènwen ba.',vn:'Nếu bạn lo lắng thì gọi điện hỏi mẹ thử xem.'},
   ],
   hanzi:[
     {c:'担',p:'dān',type:'左右结构 · Trái-phải',st:8,ord:'扌 trái → 旦 phải',rad:'扌 (thủ – tay)',mean:'gánh vác, gánh',
      tip:'扌(tay) + 旦(bình minh, gánh nặng đầu ngày) → dùng tay GÁNH VÁC; 担心 = "gánh" nỗi lo trong lòng = LO LẮNG.',
      cf:'但 (dàn – "nhưng", có 亻 thay vì 扌")',w:'担心 / 担子 / 承担'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng lo, có tôi ở đây mà.',answer:'不用担心，有我呢。',answerPy:'Búyòng dānxīn, yǒu wǒ ne.',
      note:'不用 + V diễn tả không cần thiết (ôn lại 不用 đã học ở Bài 5).'},
     {promptLang:'vi',prompt:'Vì con đường khó đi nên mẹ tôi rất lo lắng.',answer:'因为路很难走，所以我妈妈很担心。',answerPy:'Yīnwèi lù hěn nán zǒu, suǒyǐ wǒ māma hěn dānxīn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:8,zh:'比较',py:'bǐjiào',pos:'Phó từ',vn:'tương đối, khá',em:'📊',lesson:3,
   explain:['Diễn tả mức độ tương đối, không phải cực đoan nhất.'],
   usage:'Phó từ, đứng trước tính từ/động từ: 比较 + Adj/V (比较了解, 比较难).',
   collo:['比较了解','比较难','比较喜欢'],
   ex_zh:'我对这儿比较了解。',ex_py:'Wǒ duì zhèr bǐjiào liǎojiě.',ex_vn:'Tôi khá rành chỗ này.',
   exList:[
     {zh:'我对这儿比较了解。',py:'Wǒ duì zhèr bǐjiào liǎojiě.',vn:'Tôi khá rành chỗ này.'},
     {zh:'这件事比较难，你再给我几天时间。',py:'Zhè jiàn shì bǐjiào nán, nǐ zài gěi wǒ jǐ tiān shíjiān.',vn:'Việc này khá khó, bạn cho tôi thêm vài ngày nữa.'},
     {zh:'那时候我是长头发，也比较瘦。',py:'Nàshíhou wǒ shì cháng tóufa, yě bǐjiào shòu.',vn:'Lúc đó tôi để tóc dài, cũng khá gầy.'},
   ],
   hanzi:[
     {c:'较',p:'jiào',type:'左右结构 · Trái-phải',st:10,ord:'车 trái → 交 phải',rad:'车 (xa – xe)',mean:'so sánh',
      tip:'车(xe, ý chỉ đặt cạnh nhau đo lường) + 交(giao nhau) → ĐẶT CẠNH NHAU để SO SÁNH.',
      cf:'校 (xiào – "trường học", có bộ 木")',w:'比较 / 比较好'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy khá hiểu rõ tình hình lớp học của chúng tôi.',answer:'他对我们班的情况比较了解。',answerPy:'Tā duì wǒmen bān de qíngkuàng bǐjiào liǎojiě.',
      note:'比较 + động từ tâm lý diễn tả mức độ tương đối.'},
     {promptLang:'vi',prompt:'Tuy con đường ở giữa khó đi nhưng phong cảnh rất đẹp.',answer:'虽然中间这条路比较难走，但是风景很漂亮。',answerPy:'Suīrán zhōngjiān zhè tiáo lù bǐjiào nán zǒu, dànshì fēngjǐng hěn piàoliang.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 中间 sẽ học ngay bên dưới).'},
   ]},

  {n:9,zh:'了解',py:'liǎojiě',pos:'Động từ',vn:'hiểu rõ',em:'📖',lesson:3,
   explain:['Biết rõ, nắm vững thông tin về ai/việc gì đó.'],
   usage:'Động từ, mang tân ngữ trực tiếp hoặc đi cùng 对: 对……了解.',
   collo:['比较了解','了解情况','不了解'],
   ex_zh:'我对这儿比较了解。',ex_py:'Wǒ duì zhèr bǐjiào liǎojiě.',ex_vn:'Tôi khá rành chỗ này.',
   exList:[
     {zh:'我对这儿比较了解。',py:'Wǒ duì zhèr bǐjiào liǎojiě.',vn:'Tôi khá rành chỗ này.'},
     {zh:'不是，跟"了解"的"解"一样。',py:'Bú shì, gēn "liǎojiě" de "jiě" yíyàng.',vn:'Không phải, giống chữ "giải" trong "liễu giải".'},
     {zh:'我很了解他，他每天都在这儿吃饭。',py:'Wǒ hěn liǎojiě tā, tā měitiān dōu zài zhèr chīfàn.',vn:'Tôi rất hiểu anh ấy, ngày nào anh ấy cũng ăn cơm ở đây.'},
   ],
   hanzi:[
     {c:'解',p:'jiě',type:'左右结构 · Trái-phải',st:13,ord:'角 trái → 刀+牛 phải',rad:'角 (giác – sừng)',mean:'giải, hiểu',
      tip:'刀(dao) + 牛(trâu) + 角(sừng) → hình ảnh dùng dao MỔ XẺ con trâu → GIẢI, mở rộng thành HIỂU RÕ.',
      cf:'蟹 (xiè – "con cua", có bộ 虫")',w:'了解 / 解决 / 解释'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn hiểu rõ tình hình thì sẽ biết cách xử lý.',answer:'只要你了解情况，就会知道怎么办。',answerPy:'Zhǐyào nǐ liǎojiě qíngkuàng, jiù huì zhīdào zěnme bàn.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
     {promptLang:'vi',prompt:'Vì tôi không hiểu rõ con đường này nên hơi lo lắng.',answer:'因为我不了解这条路，所以有点儿担心。',answerPy:'Yīnwèi wǒ bù liǎojiě zhè tiáo lù, suǒyǐ yǒudiǎnr dānxīn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả (ôn lại 担心 vừa học trong bài này).'},
   ]},

  {n:10,zh:'先',py:'xiān',pos:'Phó từ',vn:'trước, trước hết',em:'1️⃣',lesson:3,
   explain:['Làm việc gì đó trước các việc khác về mặt thời gian hoặc thứ tự.'],
   usage:'Phó từ, đứng trước động từ: 先 + V, thường đi cùng 再 diễn tả thứ tự: 先……再……',
   collo:['先休息','先……再……','先看看'],
   ex_zh:'那我们先休息一下，一会儿再爬。',ex_py:'Nà wǒmen xiān xiūxi yíxià, yíhuìr zài pá.',ex_vn:'Vậy chúng ta nghỉ một chút đã, lát nữa leo tiếp.',
   exList:[
     {zh:'那我们先休息一下，一会儿再爬。',py:'Nà wǒmen xiān xiūxi yíxià, yíhuìr zài pá.',vn:'Vậy chúng ta nghỉ một chút đã, lát nữa leo tiếp.'},
     {zh:'那先去路边小商店买把伞吧。',py:'Nà xiān qù lùbiān xiǎo shāngdiàn mǎi bǎ sǎn ba.',vn:'Vậy trước tiên đi cửa hàng nhỏ ven đường mua cái ô đi.'},
     {zh:'我先看看，一会儿再决定。',py:'Wǒ xiān kànkan, yíhuìr zài juédìng.',vn:'Tôi xem trước đã, lát nữa quyết định sau.'},
   ],
   hanzi:[
     {c:'先',p:'xiān',type:'上下结构 · Trên-dưới',st:6,ord:'土(biến thể) trên → 儿 dưới',rad:'儿 (nhân đi)',mean:'trước, trước hết',
      tip:'Chữ cổ mô phỏng bàn chân đi TRƯỚC người khác → nghĩa TRƯỚC, TRƯỚC HẾT.',
      cf:'洗 (xǐ – "rửa", có bộ 氵")',w:'先……再…… / 先生 / 首先'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta nghỉ một chút trước đã, lát nữa leo tiếp.',answer:'我们先休息一下，一会儿再爬。',answerPy:'Wǒmen xiān xiūxi yíxià, yíhuìr zài pá.',
      note:'先……再…… diễn tả thứ tự hành động trước sau (ôn lại 一会儿 đã học ở Bài 8).'},
     {promptLang:'vi',prompt:'Nếu bạn không chắc chắn thì cứ hỏi trước đã.',answer:'如果你不确定，就先问问吧。',answerPy:'Rúguǒ nǐ bú quèdìng, jiù xiān wènwen ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'中间',py:'zhōngjiān',pos:'Danh từ',vn:'giữa, chính giữa',em:'↔️',lesson:3,
   explain:['Vị trí ở giữa hai điểm hoặc trong một khoảng không gian/thời gian.'],
   usage:'Danh từ chỉ nơi chốn; đứng độc lập hoặc làm định ngữ: 中间这条路.',
   collo:['从中间','中间这个','在中间'],
   ex_zh:'一会儿我们可以从中间这条路上去。',ex_py:'Yíhuìr wǒmen kěyǐ cóng zhōngjiān zhè tiáo lù shàngqu.',ex_vn:'Lát nữa chúng ta có thể đi lên từ con đường ở giữa này.',
   exList:[
     {zh:'一会儿我们可以从中间这条路上去。',py:'Yíhuìr wǒmen kěyǐ cóng zhōngjiān zhè tiáo lù shàngqu.',vn:'Lát nữa chúng ta có thể đi lên từ con đường ở giữa này.'},
     {zh:'中间这个是我们班周老师。',py:'Zhōngjiān zhège shì wǒmen bān Zhōu lǎoshī.',vn:'Người ở giữa này là cô Chu, giáo viên lớp chúng tôi.'},
     {zh:'站在中间的那个男孩儿是我的同班同学。',py:'Zhàn zài zhōngjiān de nàge nánháir shì wǒ de tóngbān tóngxué.',vn:'Bạn nam đứng giữa kia là bạn cùng lớp với tôi.'},
   ],
   hanzi:[
     {c:'间',p:'jiān',type:'半包围结构 · Bán bao vây',st:7,ord:'门 bao ngoài → 日 trong',rad:'门 (môn – cửa)',mean:'khoảng giữa',
      tip:'门(cánh cửa) + 日(mặt trời, ánh sáng lọt qua khe cửa) → khoảng KHÔNG GIAN GIỮA hai cánh cửa = GIỮA.',
      cf:'问 (wèn – "hỏi", có bộ 口 thay vì 日")',w:'中间 / 房间 / 时间'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta có thể đi lên từ con đường ở giữa.',answer:'我们可以从中间这条路上去。',answerPy:'Wǒmen kěyǐ cóng zhōngjiān zhè tiáo lù shàngqu.',
      note:'从 + nơi chốn diễn tả điểm xuất phát.'},
     {promptLang:'vi',prompt:'Tuy vị trí ngồi ở giữa khá đắt nhưng nhìn rất rõ.',answer:'虽然坐在中间的位置比较贵，但是看得很清楚。',answerPy:'Suīrán zuò zài zhōngjiān de wèizhi bǐjiào guì, dànshì kàn de hěn qīngchu.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 比较 vừa học trong bài này).'},
   ]},

  {n:12,zh:'参加',py:'cānjiā',pos:'Động từ',vn:'tham gia',em:'🙋',lesson:4,
   explain:['Cùng góp mặt, tham dự vào một hoạt động.'],
   usage:'Động từ, mang tân ngữ trực tiếp: 参加 + [hoạt động] (参加比赛).',
   collo:['参加比赛','参加考试','不能参加'],
   ex_zh:'下个月的篮球比赛，你能参加吗？',ex_py:'Xià ge yuè de lánqiú bǐsài, nǐ néng cānjiā ma?',ex_vn:'Trận bóng rổ tháng sau, cậu tham gia được không?',
   exList:[
     {zh:'下个月的篮球比赛，你能参加吗？',py:'Xià ge yuè de lánqiú bǐsài, nǐ néng cānjiā ma?',vn:'Trận bóng rổ tháng sau, cậu tham gia được không?'},
     {zh:'一定能参加，一点儿影响也没有。',py:'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.',vn:'Chắc chắn tham gia được, không ảnh hưởng gì cả.'},
     {zh:'跟上次一样，参赛的同学每人最少讲3分钟。',py:'Gēn shàng cì yíyàng, cānsài de tóngxué měi rén zuìshǎo jiǎng sān fēnzhōng.',vn:'Giống lần trước, học sinh dự thi mỗi người nói ít nhất 3 phút.'},
   ],
   hanzi:[
     {c:'参',p:'cān',type:'上下结构 · Trên-dưới',st:8,ord:'厶+大 trên → 彡 dưới',rad:'厶 (khư)',mean:'tham dự',
      tip:'Chữ cổ mô phỏng người quỳ dâng lễ vật → nghĩa DÂNG, GÓP MẶT, mở rộng thành THAM GIA.',
      cf:'惨 (cǎn – "thảm thương", có bộ 忄")',w:'参加 / 参观'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuộc thi hùng biện tiếng Trung ngày mai, Lý Tĩnh chắc chắn sẽ tham gia, không hề căng thẳng chút nào.',answer:'明天的汉语演讲比赛，李静一定会参加，一点儿紧张也没有。',answerPy:'Míngtiān de Hànyǔ yǎnjiǎng bǐsài, Lǐ Jìng yídìng huì cānjiā, yìdiǎnr jǐnzhāng yě méiyǒu.',
      note:'一点儿……也没有 diễn tả hoàn toàn không có gì.'},
     {promptLang:'vi',prompt:'Trận thi đấu bóng rổ tháng sau, cô ấy nhất định sẽ tham gia.',answer:'下个月的篮球比赛，她一定会参加。',answerPy:'Xià ge yuè de lánqiú bǐsài, tā yídìng huì cānjiā.',
      note:'一定 + V diễn tả sự chắc chắn (ôn lại 一定 vừa học trong bài này).'},
   ]},

  {n:13,zh:'影响',py:'yǐngxiǎng',pos:'Danh từ',vn:'ảnh hưởng',em:'📉',lesson:4,
   explain:['Tác động làm thay đổi điều gì đó; cũng dùng như động từ.'],
   usage:'Danh từ/động từ; thường dùng dạng phủ định: 没有影响, 一点儿影响也没有.',
   collo:['有影响','没有影响','影响很大'],
   ex_zh:'一定能参加，一点儿影响也没有。',ex_py:'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.',ex_vn:'Chắc chắn tham gia được, không ảnh hưởng gì cả.',
   exList:[
     {zh:'一定能参加，一点儿影响也没有。',py:'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.',vn:'Chắc chắn tham gia được, không ảnh hưởng gì cả.'},
     {zh:'这件事对我的工作影响不小。',py:'Zhè jiàn shì duì wǒ de gōngzuò yǐngxiǎng bù xiǎo.',vn:'Việc này đối với công việc của tôi có ảnh hưởng không nhỏ.'},
     {zh:'少玩儿一会儿电子游戏吧，别影响了学习。',py:'Shǎo wánr yíhuìr diànzǐ yóuxì ba, bié yǐngxiǎngle xuéxí.',vn:'Chơi game điện tử ít lại một chút đi, đừng để ảnh hưởng đến việc học.'},
   ],
   hanzi:[
     {c:'影',p:'yǐng',type:'左右结构 · Trái-phải',st:15,ord:'景 trái → 彡 phải',rad:'彡 (sam – lông, đường nét)',mean:'bóng, hình ảnh',
      tip:'景(cảnh vật) + 彡(đường nét, ánh sáng) → BÓNG của cảnh vật hắt lên = HÌNH ẢNH; 影响 = tác động như "cái bóng đi theo" = ẢNH HƯỞNG.',
      cf:'景 (jǐng – "cảnh vật", không có bộ 彡")',w:'影响 / 电影 / 阴影'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trận mưa lớn này ảnh hưởng không nhỏ đến việc chúng tôi leo núi.',answer:'这场大雨对我们爬山的计划影响不小。',answerPy:'Zhè chǎng dàyǔ duì wǒmen páshān de jìhuà yǐngxiǎng bù xiǎo.',
      note:'对……有/没有影响 diễn tả mức độ tác động.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn nghỉ ngơi tốt thì sẽ không ảnh hưởng đến trận thi đấu.',answer:'只要你休息好，就不会影响比赛。',answerPy:'Zhǐyào nǐ xiūxi hǎo, jiù bú huì yǐngxiǎng bǐsài.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 比赛 đã học ở Bài 4).'},
   ]},

  {n:14,zh:'大山',py:'Dàshān',pos:'Danh từ riêng',vn:'Đại Sơn (tên người)',em:'🧑',lesson:1,
   explain:['Tên riêng của một nhân vật nam trong bài hội thoại.'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['大山说','跟大山一起','大山问'],
   ex_zh:'马可，你的中文越说越好了！',ex_py:'Mǎkě, nǐ de Zhōngwén yuè shuō yuè hǎo le!',ex_vn:'Marco, tiếng Trung của cậu ngày càng nói giỏi rồi!',
   exList:[
     {zh:'马可，你的中文越说越好了！',py:'Mǎkě, nǐ de Zhōngwén yuè shuō yuè hǎo le!',vn:'Marco, tiếng Trung của cậu ngày càng nói giỏi rồi!'},
     {zh:'李静？我怎么没听说过这个名字？',py:'Lǐ Jìng? Wǒ zěnme méi tīngshuōguo zhège míngzi?',vn:'Lý Tĩnh? Sao mình chưa nghe tên này bao giờ?'},
   ],
   hanzi:[
     {c:'山',p:'shān',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'nét liền, hình ba đỉnh núi',rad:'山 (sơn – núi)',mean:'núi',
      tip:'Chữ tượng hình mô phỏng ba đỉnh NÚI nhấp nhô → NÚI; 大山 dùng làm tên người ngụ ý mạnh mẽ, vững chãi.',
      cf:'出 (chū – "ra ngoài", hình dáng khác hẳn dù nét gần giống")',w:'大山 / 爬山 / 山上'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đại Sơn nói tiếng Trung của Marco ngày càng giỏi.',answer:'大山说马可的中文越说越好。',answerPy:'Dàshān shuō Mǎkě de Zhōngwén yuè shuō yuè hǎo.',
      note:'越A越B diễn tả mức độ tăng dần (ôn lại 中文 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Đại Sơn chưa từng nghe tên Lý Tĩnh bao giờ.',answer:'大山没听说过李静这个名字。',answerPy:'Dàshān méi tīngshuōguo Lǐ Jìng zhège míngzi.',
      note:'V+过 diễn tả kinh nghiệm (ở đây dạng phủ định 没……过).'},
   ]},

  {n:15,zh:'李静',py:'Lǐ Jìng',pos:'Danh từ riêng',vn:'Lý Tĩnh (tên người)',em:'👩‍🏫',lesson:1,
   explain:['Tên riêng của giáo viên tiếng Trung được nhắc đến trong bài hội thoại.'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   collo:['李静老师','是李静','李静说'],
   ex_zh:'她是我们的汉语老师。',ex_py:'Tā shì wǒmen de Hànyǔ lǎoshī.',ex_vn:'Cô ấy là giáo viên tiếng Trung của bọn mình.',
   exList:[
     {zh:'她是我们的汉语老师。',py:'Tā shì wǒmen de Hànyǔ lǎoshī.',vn:'Cô ấy là giáo viên tiếng Trung của bọn mình.'},
     {zh:'她的汉语说得跟中国人一样好。',py:'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.',vn:'Tiếng Trung cô ấy nói hay như người Trung Quốc vậy.'},
   ],
   hanzi:[
     {c:'静',p:'jìng',type:'左右结构 · Trái-phải',st:14,ord:'青 trái → 争 phải',rad:'青 (thanh – xanh)',mean:'yên tĩnh',
      tip:'青(trong lành) + 争(dừng tranh giành) → YÊN TĨNH, TRONG LÀNH; dùng làm tên người ngụ ý điềm đạm.',
      cf:'净 (jìng – "sạch sẽ", có bộ 冫")',w:'李静 / 安静'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Giáo viên tiếng Trung của chúng tôi, Lý Tĩnh, nói tiếng Anh cũng giỏi như người Mỹ vậy.',answer:'我们的汉语老师李静说英语说得跟美国人一样好。',answerPy:'Wǒmen de Hànyǔ lǎoshī Lǐ Jìng shuō Yīngyǔ shuō de gēn Měiguórén yíyàng hǎo.',
      note:'A跟B一样(+tính từ) diễn tả so sánh bằng (ôn lại 一样 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn học tốt tiếng Trung thì nên hỏi cô Lý Tĩnh.',answer:'如果你想学好中文，就应该问问李静老师。',answerPy:'Rúguǒ nǐ xiǎng xuéhǎo Zhōngwén, jiù yīnggāi wènwen Lǐ Jìng lǎoshī.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},
];

const wuData = [
  {img:'🐼',label:'一样',py:'yíyàng',letter:'A'},
  {img:'🎂',label:'最后',py:'zuìhòu',letter:'B'},
  {img:'😟',label:'担心',py:'dānxīn',letter:'C'},
  {img:'🏀',label:'参加',py:'cānjiā',letter:'D'},
  {img:'📖',label:'了解',py:'liǎojiě',letter:'E'},
  {img:'😌',label:'放心',py:'fàngxīn',letter:'F'},
];

var dialogData = [
  {scene:'在教室 · Trong lớp học',
   preQuiz:[
     {q:'马可觉得谁的汉语说得最好？',opts:['李静','大山','马可自己'],ans:0},
     {q:'李静的汉语说得怎么样？',opts:['跟中国人一样好','一般般','不太好'],ans:0},
     {q:'李静是谁？',opts:['他们的汉语老师','新同学','马可的朋友'],ans:0},
   ],
   lines:[
     {sp:0,zh:'马可，你的中文越说越好了！',py:'Mǎkě, nǐ de Zhōngwén yuè shuō yuè hǎo le!',vn:'Marco, tiếng Trung của cậu ngày càng nói giỏi rồi!'},
     {sp:1,zh:'哪里哪里，我们班李静说得更好。',py:'Nǎli nǎli, wǒmen bān Lǐ Jìng shuō de gèng hǎo.',vn:'Đâu có đâu, Lý Tĩnh lớp mình nói còn giỏi hơn.'},
     {sp:0,zh:'怎么好？',py:'Zěnme hǎo?',vn:'Giỏi thế nào?'},
     {sp:1,zh:'她的汉语说得跟中国人一样好。',py:'Tā de Hànyǔ shuō de gēn Zhōngguórén yíyàng hǎo.',vn:'Tiếng Trung cô ấy nói hay như người Trung Quốc vậy.'},
     {sp:0,zh:'李静？我怎么没听说过这个名字？',py:'Lǐ Jìng? Wǒ zěnme méi tīngshuōguo zhège míngzi?',vn:'Lý Tĩnh? Sao mình chưa nghe tên này bao giờ?'},
     {sp:1,zh:'她是我们的汉语老师。',py:'Tā shì wǒmen de Hànyǔ lǎoshī.',vn:'Cô ấy là giáo viên tiếng Trung của bọn mình.'},
   ]},
  {scene:'在蛋糕店 · Ở cửa hàng bánh kem',
   preQuiz:[
     {q:'小刚吃了几块蛋糕？',opts:['三块','两块','四块'],ans:0},
     {q:'小丽担心小刚会怎么样？',opts:['越吃越胖','肚子疼','不消化'],ans:0},
     {q:'小刚为什么说自己不会变胖？',opts:['家里人都很瘦，吃不胖','每天运动','不喜欢吃甜的'],ans:0},
   ],
   lines:[
     {sp:1,zh:'别吃了，你已经吃了三块蛋糕了。',py:'Bié chī le, nǐ yǐjīng chīle sān kuài dàngāo le.',vn:'Đừng ăn nữa, bạn ăn ba miếng bánh kem rồi đấy.'},
     {sp:0,zh:'这是最后一块。',py:'Zhè shì zuìhòu yí kuài.',vn:'Đây là miếng cuối cùng thôi.'},
     {sp:1,zh:'你总是吃甜的东西，会越吃越胖。',py:'Nǐ zǒngshì chī tián de dōngxi, huì yuè chī yuè pàng.',vn:'Bạn cứ ăn đồ ngọt mãi, càng ăn sẽ càng béo đấy.'},
     {sp:0,zh:'你放心，我一定不会变胖。',py:'Nǐ fàngxīn, wǒ yídìng bú huì biàn pàng.',vn:'Bạn yên tâm, mình chắc chắn không béo lên đâu.'},
     {sp:1,zh:'为什么？',py:'Wèi shénme?',vn:'Tại sao?'},
     {sp:0,zh:'我们家的人都很瘦，吃不胖。',py:'Wǒmen jiā de rén dōu hěn shòu, chī bú pàng.',vn:'Người nhà mình đều gầy, ăn không béo được.'},
   ]},
  {scene:'在山上 · Ở trên núi',
   preQuiz:[
     {q:'小丽为什么害怕？',opts:['山越高，路越难走','有蛇','天黑了'],ans:0},
     {q:'小刚对这座山怎么样？',opts:['比较了解','完全不了解','第一次来'],ans:0},
     {q:'他们决定怎么做？',opts:['先休息一下，一会儿再爬','马上下山','原路返回'],ans:0},
   ],
   lines:[
     {sp:1,zh:'我有点儿害怕。',py:'Wǒ yǒudiǎnr hàipà.',vn:'Mình hơi sợ.'},
     {sp:0,zh:'怎么了？',py:'Zěnme le?',vn:'Sao thế?'},
     {sp:1,zh:'山越高，路越难走。我也越爬越冷。',py:'Shān yuè gāo, lù yuè nán zǒu. Wǒ yě yuè pá yuè lěng.',vn:'Núi càng cao, đường càng khó đi. Mình cũng càng leo càng lạnh.'},
     {sp:0,zh:'不用担心，有我呢，我对这儿比较了解。',py:'Bú yòng dānxīn, yǒu wǒ ne, wǒ duì zhèr bǐjiào liǎojiě.',vn:'Không cần lo, có mình đây mà, mình khá rành chỗ này.'},
     {sp:1,zh:'那我们先休息一下，一会儿再爬。',py:'Nà wǒmen xiān xiūxi yíxià, yíhuìr zài pá.',vn:'Vậy chúng ta nghỉ một chút đã, lát nữa leo tiếp.'},
     {sp:0,zh:'好，一会儿我们可以从中间这条路上去。',py:'Hǎo, yíhuìr wǒmen kěyǐ cóng zhōngjiān zhè tiáo lù shàngqu.',vn:'Được, lát nữa chúng ta có thể đi lên từ con đường ở giữa này.'},
   ]},
  {scene:'在小明家 · Tại nhà bạn Minh',
   preQuiz:[
     {q:'小明的眼睛怎么了？',opts:['跟大熊猫一样，因为没休息好','受伤了','近视了'],ans:0},
     {q:'医生让小明怎么做？',opts:['多休息','吃药','做手术'],ans:0},
     {q:'小明能参加下个月的篮球比赛吗？',opts:['一定能参加','不能参加','还不确定'],ans:0},
   ],
   lines:[
     {sp:0,zh:'小明，你的眼睛怎么跟大熊猫一样了？',py:'Xiǎomíng, nǐ de yǎnjing zěnme gēn dà xióngmāo yíyàng le?',vn:'Tiểu Minh, sao mắt cậu giống gấu trúc thế?'},
     {sp:1,zh:'我这几天脚疼，没休息好。',py:'Wǒ zhè jǐ tiān jiǎo téng, méi xiūxi hǎo.',vn:'Mấy hôm nay mình đau chân, ngủ không ngon.'},
     {sp:0,zh:'去医院了吗？医生说什么？',py:'Qù yīyuàn le ma? Yīshēng shuō shénme?',vn:'Đi bệnh viện chưa? Bác sĩ nói sao?'},
     {sp:1,zh:'他让我多休息。休息得越多，好得越快。',py:'Tā ràng wǒ duō xiūxi. Xiūxi de yuè duō, hǎo de yuè kuài.',vn:'Bác sĩ bảo mình nghỉ ngơi nhiều. Nghỉ càng nhiều thì khỏi càng nhanh.'},
     {sp:0,zh:'下个月的篮球比赛，你能参加吗？',py:'Xià ge yuè de lánqiú bǐsài, nǐ néng cānjiā ma?',vn:'Trận bóng rổ tháng sau, cậu tham gia được không?'},
     {sp:1,zh:'一定能参加，一点儿影响也没有。',py:'Yídìng néng cānjiā, yìdiǎnr yǐngxiǎng yě méiyǒu.',vn:'Chắc chắn tham gia được, không ảnh hưởng gì cả.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'越说',right:'越好'},
  {left:'最后',right:'一块'},
  {left:'不会',right:'变胖'},
  {left:'越爬',right:'越冷'},
  {left:'比较',right:'了解'},
  {left:'从中间',right:'上去'},
  {left:'一点儿',right:'影响也没有'},
  {left:'因为他家的人都很瘦，',right:'所以吃不胖。'},
  {left:'虽然山很高，',right:'但是路上风景很漂亮。'},
  {left:'如果你不放心，',right:'就跟我一起去吧。'},
  {left:'只要你多休息，',right:'就会好得越快。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'李静老师教的',blank:'中文',post:'语法很清楚。',hint:'(tiếng Trung Quốc)',ans:'中文'},
  {pre:'马可不是我们',blank:'班',post:'的学生。',hint:'(lớp)',ans:'班'},
  {pre:'这次考试的成绩跟上次',blank:'一样',post:'好。',hint:'(giống nhau, như nhau)',ans:'一样'},
  {pre:'这个学期',blank:'最后',post:'一次考试就是下星期。',hint:'(cuối cùng)',ans:'最后'},
  {pre:'妈妈，你',blank:'放心',post:'，我一定按时回家。',hint:'(yên tâm)',ans:'放心'},
  {pre:'我',blank:'一定',post:'不会变胖。',hint:'(nhất định)',ans:'一定'},
  {pre:'妈妈总是',blank:'担心',post:'我一个人在外面不安全。',hint:'(lo lắng)',ans:'担心'},
  {pre:'李静老师觉得这次考试',blank:'比较',post:'简单。',hint:'(tương đối, khá)',ans:'比较'},
  {pre:'大山对中国文化很',blank:'了解',post:'。',hint:'(hiểu rõ)',ans:'了解'},
  {pre:'那我们',blank:'先',post:'休息一下。',hint:'(trước, trước hết)',ans:'先'},
  {pre:'照片',blank:'中间',post:'的那个人是我爸爸。',hint:'(giữa)',ans:'中间'},
  {pre:'学校的乒乓球比赛，你打算',blank:'参加',post:'吗？',hint:'(tham gia)',ans:'参加'},
  {pre:'一点儿',blank:'影响',post:'也没有。',hint:'(ảnh hưởng)',ans:'影响'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['同学们','的','中文','越','学','越','好','。'],ans:'同学们的中文越学越好。',audio:'同学们的中文越学越好。'},
  {words:['李静','写字','写得','跟','老师','一样','漂亮','。'],ans:'李静写字写得跟老师一样漂亮。',audio:'李静写字写得跟老师一样漂亮。'},
  {words:['你','总是','吃','甜','的','东西','，','会','越','吃','越','胖','。'],ans:'你总是吃甜的东西，会越吃越胖。',audio:'你总是吃甜的东西，会越吃越胖。'},
  {words:['山','越','高','，','路','越','难走','。'],ans:'山越高，路越难走。',audio:'山越高，路越难走。'},
  {words:['因为','他家','的','人','都','很瘦','，','所以','吃','不','胖','。'],ans:'因为他家的人都很瘦，所以吃不胖。',audio:'因为他家的人都很瘦，所以吃不胖。'},
  {words:['虽然','山','很高','，','但是','路上','风景','很漂亮','。'],ans:'虽然山很高，但是路上风景很漂亮。',audio:'虽然山很高，但是路上风景很漂亮。'},
  {words:['如果','你','不','放心','，','就','跟','我','一起','去','吧','。'],ans:'如果你不放心，就跟我一起去吧。',audio:'如果你不放心，就跟我一起去吧。'},
  {words:['小刚','一定','会','参加','篮球','比赛','，','一点儿','问题','也','没有','。'],ans:'小刚一定会参加篮球比赛，一点儿问题也没有。',audio:'小刚一定会参加篮球比赛，一点儿问题也没有。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'雨下越大越。',
   opts:['雨越下越大。','雨下越大越。','越雨下越大。','雨越大越下。'],ans:0,
   exp:'Cấu trúc 越A越B: 越 phải đặt ngay trước mỗi động từ/tính từ (越下越大), không tách rời khỏi vế của nó.'},
  {wrong:'这个蛋糕的味道妈妈做的一样好吃跟。',
   opts:['这个蛋糕的味道跟妈妈做的一样好吃。','这个蛋糕的味道妈妈做的一样好吃跟。','这个蛋糕的味道跟一样妈妈做的好吃。','这个蛋糕的味道跟妈妈做的好吃一样。'],ans:0,
   exp:'Cấu trúc A跟B一样(+tính từ): 跟+B phải đứng ngay trước 一样, tính từ bổ nghĩa đặt sau 一样.'},
  {wrong:'这件衬衫的颜色那件不一样跟。',
   opts:['这件衬衫的颜色跟那件不一样。','这件衬衫的颜色那件不一样跟。','这件衬衫的颜色跟那件一样不。','这件衬衫不一样的颜色跟那件。'],ans:0,
   exp:'Phủ định của 一样 là thêm 不 vào TRƯỚC 一样 (不一样); giới từ 跟 vẫn đứng trước danh từ so sánh, không đặt cuối câu.'},
  {wrong:'休息越多，好越快。',
   opts:['休息得越多，好得越快。','休息越多，好越快。','休息得越多，好越多快。','越休息多，越好快。'],ans:0,
   exp:'Khi động từ/tính từ mang bổ ngữ trình độ (休息得, 好得), phải giữ 得 trước khi thêm 越……越……'},
  {wrong:'我一定不忘记会。',
   opts:['我一定不会忘记。','我一定不忘记会。','我不一定会忘记。','我会一定不忘记。'],ans:0,
   exp:'会 (trợ động từ khả năng) phải đứng ngay trước động từ chính (忘记), không đặt sau động từ.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'李静的汉语说得怎么样？她是谁？',
     q_vn:'Tiếng Trung của Lý Tĩnh nói thế nào? Cô ấy là ai?',
     hint:'跟中国人一样好，是他们的汉语老师',
     sample:'李静的汉语说得跟中国人一样好，她是马可他们的汉语老师。',
     sample_vn:'Tiếng Trung của Lý Tĩnh nói hay như người Trung Quốc, cô ấy là giáo viên tiếng Trung của Marco.',
     note:'A跟B一样(+tính từ) diễn tả so sánh bằng (điểm ngữ pháp bài này).'},
    {q_zh:'小刚吃了几块蛋糕？他担心自己会变胖吗？为什么？',
     q_vn:'Tiểu Cương ăn mấy miếng bánh kem? Anh ấy có lo béo lên không? Vì sao?',
     hint:'三块，不担心，因为家里人都很瘦',
     sample:'小刚已经吃了三块蛋糕，但是他不担心会变胖，因为他们家的人都很瘦，吃不胖。',
     sample_vn:'Tiểu Cương đã ăn ba miếng bánh kem rồi, nhưng anh ấy không lo béo lên, vì người nhà anh ấy đều gầy, ăn không béo được.',
     note:'因为……所以…… (rút gọn) giải thích lý do.'},
    {q_zh:'小丽为什么害怕？小刚怎么安慰她？',
     q_vn:'Vì sao Tiểu Lệ sợ? Tiểu Cương an ủi cô ấy thế nào?',
     hint:'山越高路越难走，小刚说他比较了解这儿',
     sample:'小丽害怕是因为山越高，路越难走，她越爬越冷，小刚说不用担心，他对这儿比较了解。',
     sample_vn:'Tiểu Lệ sợ vì núi càng cao, đường càng khó đi, cô ấy càng leo càng lạnh, Tiểu Cương nói đừng lo, anh ấy khá rành chỗ này.',
     note:'越A越B diễn tả B thay đổi theo A (điểm ngữ pháp bài này).'},
    {q_zh:'小明为什么眼睛跟熊猫一样？他能参加篮球比赛吗？',
     q_vn:'Vì sao mắt Tiểu Minh giống gấu trúc? Anh ấy tham gia được trận bóng rổ không?',
     hint:'脚疼没休息好，一定能参加',
     sample:'小明因为脚疼没休息好，所以眼睛跟熊猫一样，但是他说一定能参加篮球比赛，没有影响。',
     sample_vn:'Tiểu Minh vì đau chân không ngủ ngon nên mắt giống gấu trúc, nhưng anh ấy nói chắc chắn tham gia được trận bóng rổ, không bị ảnh hưởng gì.',
     note:'一点儿……也没有 diễn tả hoàn toàn không có gì.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Con trai tôi nói tiếng Trung ngày càng lưu loát rồi.', zh:'我儿子的中文说得越来越流利了。', py:'Wǒ érzi de Zhōngwén shuō de yuè lái yuè liúlì le.'},
  {vi:'Đôi giày này giá cả giống với đôi kia.', zh:'这双鞋的价钱跟那双一样。', py:'Zhè shuāng xié de jiàqián gēn nà shuāng yíyàng.'},
  {vi:'Đây là quả táo cuối cùng trong tủ lạnh.', zh:'这是冰箱里最后一个苹果。', py:'Zhè shì bīngxiāng lǐ zuìhòu yí ge píngguǒ.'},
  {vi:'Bạn yên tâm, kỳ thi lần này sẽ không khó đâu.', zh:'你放心，这次考试不会很难。', py:'Nǐ fàngxīn, zhè cì kǎoshì bú huì hěn nán.'},
  {vi:'Vì thời tiết không tốt nên thầy cô hơi lo lắng về sự an toàn khi chúng tôi leo núi.', zh:'因为天气不好，所以老师有点儿担心我们爬山的安全。', py:'Yīnwèi tiānqì bù hǎo, suǒyǐ lǎoshī yǒudiǎnr dānxīn wǒmen páshān de ānquán.'},
  {vi:'Tuy anh ấy mới đến nhưng đã khá hiểu rõ tình hình ở đây.', zh:'虽然他刚来，但是对这儿已经比较了解了。', py:'Suīrán tā gāng lái, dànshì duì zhèr yǐjīng bǐjiào liǎojiě le.'},
  {vi:'Họ quyết định ăn cơm trước, rồi mới đi leo núi.', zh:'他们决定先吃饭，再去爬山。', py:'Tāmen juédìng xiān chīfàn, zài qù páshān.'},
  {vi:'Hoạt động leo núi lần này, Đại Sơn chắc chắn sẽ tham gia, không có gì nguy hiểm cả.', zh:'这次爬山活动，大山一定会参加，一点儿危险也没有。', py:'Zhè cì páshān huódòng, Dàshān yídìng huì cānjiā, yìdiǎnr wēixiǎn yě méiyǒu.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì người nhà anh ấy đều gầy nên anh ấy ăn không béo được.', zh:'因为他家的人都很瘦，所以他吃不胖。', py:'Yīnwèi tā jiā de rén dōu hěn shòu, suǒyǐ tā chī bú pàng.'},
  {vi:'Núi càng cao, không khí càng lạnh.', zh:'山越高，空气越冷。', py:'Shān yuè gāo, kōngqì yuè lěng.'},
  {vi:'Tuy con đường ở giữa khó đi nhưng phong cảnh rất đẹp.', zh:'虽然中间这条路难走，但是风景很漂亮。', py:'Suīrán zhōngjiān zhè tiáo lù nán zǒu, dànshì fēngjǐng hěn piàoliang.'},
  {vi:'Nếu bạn không yên tâm thì cùng tôi đi kiểm tra một lần nữa.', zh:'如果你不放心，就跟我再检查一次吧。', py:'Rúguǒ nǐ bú fàngxīn, jiù gēn wǒ zài jiǎnchá yí cì ba.'},
  {vi:'Chỉ cần bạn nghỉ ngơi nhiều thì sẽ khỏi nhanh hơn.', zh:'只要你多休息，就会好得更快。', py:'Zhǐyào nǐ duō xiūxi, jiù huì hǎo de gèng kuài.'},
  {vi:'Buổi biểu diễn văn nghệ của trường tháng sau, Tiểu Minh chắc chắn sẽ tham gia.', zh:'下个月学校的文艺演出，小明一定会参加。', py:'Xià ge yuè xuéxiào de wényì yǎnchū, Xiǎomíng yídìng huì cānjiā.'},
  {vi:'Giấc ngủ không đủ ảnh hưởng không nhỏ đến sức khỏe của Tiểu Minh.', zh:'睡眠不够对小明的身体影响不小。', py:'Shuìmián bú gòu duì Xiǎomíng de shēntǐ yǐngxiǎng bù xiǎo.'},
  {vi:'Giáo viên tiếng Trung của chúng tôi nói tiếng Anh cũng giỏi như người Mỹ vậy.', zh:'我们的汉语老师说英语说得跟美国人一样好。', py:'Wǒmen de Hànyǔ lǎoshī shuō Yīngyǔ shuō de gēn Měiguórén yíyàng hǎo.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 9)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-9/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'大明，', blank:'你看我的眼睛是不是跟熊猫一样了', post:'？',
       py:'Dàmíng, nǐ kàn wǒ de yǎnjing shì bu shì gēn xióngmāo yíyàng le?', vn:'Đại Minh, bạn xem mắt tôi có giống gấu trúc không?'},
      {speaker:'男', pre:'怎么，昨天又没睡好？', blank:'别总想工作的事，好好休息', post:'。',
       py:'Zěnme, zuótiān yòu méi shuìhǎo? Bié zǒng xiǎng gōngzuò de shì, hǎohāo xiūxi.', vn:'Sao vậy, hôm qua lại ngủ không ngon à? Đừng cứ nghĩ về công việc mãi, nghỉ ngơi cho tốt đi.'},
    ]},
    {num:2, lines:[
      {speaker:'男', pre:'方老师，', blank:'这次中文比赛的第一是您班的学生吗', post:'？',
       py:'Fāng lǎoshī, zhè cì Zhōngwén bǐsài de dì-yī shì nín bān de xuésheng ma?', vn:'Cô Phương, người đứng đầu cuộc thi tiếng Trung lần này có phải học sinh lớp cô không?'},
      {speaker:'女', pre:'是，', blank:'这个小男孩儿叫天天，他第一次参赛就拿了第一', post:'。',
       py:'Shì, zhège xiǎo nánháir jiào Tiāntiān, tā dì-yī cì cānsài jiù nále dì-yī.', vn:'Đúng vậy, cậu bé này tên Thiên Thiên, lần đầu dự thi đã giành hạng nhất.'},
    ]},
    {num:3, lines:[
      {speaker:'女1', pre:'', blank:'这山怎么越爬越高啊？还有多远', post:'？',
       py:'Zhè shān zěnme yuè pá yuè gāo a? Hái yǒu duō yuǎn?', vn:'Sao ngọn núi này càng leo càng cao vậy? Còn xa không?'},
      {speaker:'女2', pre:'我对这儿比较了解，', blank:'再爬一个小时就到了。先休息会儿吧', post:'。',
       py:'Wǒ duì zhèr bǐjiào liǎojiě, zài pá yí ge xiǎoshí jiù dào le. Xiān xiūxi huìr ba.', vn:'Tôi khá rành chỗ này, leo thêm một tiếng nữa là đến rồi. Nghỉ một chút đã.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'你说得真好，几乎跟中国人一样', post:'！',
       py:'Nǐ shuō de zhēn hǎo, jīhū gēn Zhōngguórén yíyàng!', vn:'Bạn nói hay thật đấy, hầu như giống người Trung Quốc luôn!'},
      {speaker:'女', pre:'', blank:'哪里哪里，大家说得都很好', post:'。',
       py:'Nǎli nǎli, dàjiā shuō de dōu hěn hǎo.', vn:'Đâu có đâu, mọi người đều nói giỏi cả.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'方方，', blank:'这是你们班的照片吗', post:'？',
       py:'Fāngfāng, zhè shì nǐmen bān de zhàopiàn ma?', vn:'Phương Phương, đây là ảnh lớp con à?'},
      {speaker:'女', pre:'对，爸，我来给你介绍一下，', blank:'中间这个是我们班周老师，周老师旁边这个男孩儿叫山山，他上课总是迟到', post:'。',
       py:'Duì, bà, wǒ lái gěi nǐ jièshào yíxià, zhōngjiān zhège shì wǒmen bān Zhōu lǎoshī, Zhōu lǎoshī pángbiān zhège nánháir jiào Shānshān, tā shàngkè zǒngshì chídào.', vn:'Đúng vậy bố, con giới thiệu cho bố nhé, người ở giữa là cô Chu lớp con, bên cạnh cô Chu là bạn Sơn Sơn, bạn ấy vào lớp luôn đến muộn.'},
    ]},
    {num:6, lines:[
      {pre:'十二月的南方，房间里跟房间外一样冷，', blank:'所以回家了大家也要穿很多衣服', post:'。',
       py:'Shí\'èr yuè de nánfāng, fángjiān lǐ gēn fángjiān wài yíyàng lěng, suǒyǐ huí jiā le dàjiā yě yào chuān hěn duō yīfu.', vn:'Miền Nam tháng 12, trong phòng lạnh như ngoài phòng, nên về nhà mọi người vẫn phải mặc nhiều áo.'},
    ]},
    {num:7, lines:[
      {pre:'这本书写得真不错，', blank:'越看越有意思，你也看看吧', post:'。',
       py:'Zhè běn shū xiě de zhēn búcuò, yuè kàn yuè yǒu yìsi, nǐ yě kànkan ba.', vn:'Cuốn sách này viết hay thật, càng đọc càng thú vị, bạn cũng đọc thử đi.'},
    ]},
    {num:8, lines:[
      {pre:'雪越下越大，', blank:'外边的房子、树和路都变白了', post:'。',
       py:'Xuě yuè xià yuè dà, wàibian de fángzi, shù hé lù dōu biàn bái le.', vn:'Tuyết càng rơi càng to, nhà cửa, cây cối và đường sá bên ngoài đều trắng xóa cả.'},
    ]},
    {num:9, lines:[
      {pre:'我昨天新买的手机跟以前的不太一样，', blank:'你来帮我看看怎么用，可以吗', post:'？',
       py:'Wǒ zuótiān xīn mǎi de shǒujī gēn yǐqián de bú tài yíyàng, nǐ lái bāng wǒ kànkan zěnme yòng, kěyǐ ma?', vn:'Điện thoại tôi mới mua hôm qua khác với cái trước nhiều, bạn qua giúp tôi xem dùng thế nào được không?'},
    ]},
    {num:10, lines:[
      {pre:'我喜欢手表，', blank:'周月也跟我一样，但是她更喜欢大一点儿的', post:'。',
       py:'Wǒ xǐhuan shǒubiǎo, Zhōuyuè yě gēn wǒ yíyàng, dànshì tā gèng xǐhuan dà yìdiǎnr de.', vn:'Tôi thích đồng hồ đeo tay, Chu Nguyệt cũng giống tôi, nhưng cô ấy thích loại to hơn một chút.'},
    ]},
  ],
  mc: [
    {num:11, options:['变胖了','变瘦了','头发变长了'], ans:0,
     lines:[
       {speaker:'男', pre:'这是什么时候的照片？', blank:'照片上的你跟现在不太一样', post:'。', py:'Zhè shì shénme shíhou de zhàopiàn? Zhàopiàn shang de nǐ gēn xiànzài bú tài yíyàng.', vn:'Đây là ảnh chụp lúc nào vậy? Bạn trong ảnh khác bây giờ nhiều đấy.'},
       {speaker:'女', pre:'是去年夏天的，', blank:'那时候我是长头发，也比较瘦', post:'。', py:'Shì qùnián xiàtiān de, nàshíhou wǒ shì cháng tóufa, yě bǐjiào shòu.', vn:'Đó là ảnh mùa hè năm ngoái, lúc đó tôi để tóc dài, cũng khá gầy.'},
     ],
     explain:'男：这是什么时候的照片？照片上的你跟现在不太一样。女：是去年夏天的，那时候我是长头发，也比较瘦。问：女的现在怎么样？ → 变胖了。'},
    {num:12, options:['学得不太好','不用努力了','考了第一'], ans:2,
     lines:[
       {speaker:'男', pre:'小方，', blank:'我真为你高兴，希望你越学越好', post:'。', py:'Xiǎofāng, wǒ zhēn wèi nǐ gāoxìng, xīwàng nǐ yuè xué yuè hǎo.', vn:'Tiểu Phương, cô thật sự vui cho em, hy vọng em học ngày càng giỏi.'},
       {speaker:'女', pre:'谢谢老师，', blank:'我一定努力，下次考试还拿第一', post:'。', py:'Xièxie lǎoshī, wǒ yídìng nǔlì, xià cì kǎoshì hái ná dì-yī.', vn:'Cảm ơn cô, em nhất định sẽ cố gắng, lần thi sau vẫn giành hạng nhất.'},
     ],
     explain:'男：小方，我真为你高兴，希望你越学越好。女：谢谢老师，我一定努力，下次考试还拿第一。问：关于女的，可以知道什么？ → 考了第一。'},
    {num:13, options:['比饭馆的好吃','特别好吃','没有饭馆的好吃'], ans:1,
     lines:[
       {speaker:'男', pre:'妈，', blank:'你的鱼越做越好，跟饭馆的一样好吃', post:'。', py:'Mā, nǐ de yú yuè zuò yuè hǎo, gēn fànguǎn de yíyàng hǎochī.', vn:'Mẹ ơi, cá mẹ nấu ngày càng ngon, ngon như ngoài quán vậy.'},
       {speaker:'女', pre:'那你多吃点儿，', blank:'以后我每个星期都给你做一次，怎么样', post:'？', py:'Nà nǐ duō chī diǎnr, yǐhòu wǒ měi ge xīngqī dōu gěi nǐ zuò yí cì, zěnmeyàng?', vn:'Vậy con ăn thêm chút đi, sau này mỗi tuần mẹ đều nấu cho con một lần, được không?'},
     ],
     explain:'男：妈，你的鱼越做越好，跟饭馆的一样好吃。女：那你多吃点儿，以后我每个星期都给你做一次，怎么样？问：女的做鱼做得怎么样？ → 特别好吃。'},
    {num:14, options:['便宜的','大的','小的'], ans:1,
     lines:[
       {speaker:'女', pre:'您好，', blank:'来一个西瓜，要甜点儿的，不要太大的', post:'。', py:'Nín hǎo, lái yí ge xīguā, yào tián diǎnr de, bú yào tài dà de.', vn:'Chào anh, cho một quả dưa hấu, muốn ngọt một chút, không cần to quá.'},
       {speaker:'男', pre:'现在西瓜便宜，', blank:'给您来个大的吧，西瓜越大越甜', post:'。', py:'Xiànzài xīguā piányi, gěi nín lái ge dà de ba, xīguā yuè dà yuè tián.', vn:'Bây giờ dưa hấu rẻ, cho chị quả to đi, dưa hấu càng to càng ngọt.'},
     ],
     explain:'女：您好，来一个西瓜，要甜点儿的，不要太大的。男：现在西瓜便宜，给您来个大的吧，西瓜越大越甜。问：什么样的西瓜比较甜？ → 大的。'},
    {num:15, options:['特别有意思','很容易','很难'], ans:2,
     lines:[
       {speaker:'男', pre:'你汉语只学了不到半年，说得这么好。', blank:'以前你不是不想学吗', post:'？', py:'Nǐ Hànyǔ zhǐ xuéle bú dào bàn nián, shuō de zhème hǎo. Yǐqián nǐ bú shì bù xiǎng xué ma?', vn:'Bạn học tiếng Trung chưa đến nửa năm mà nói giỏi thế. Trước đây bạn chẳng phải không muốn học sao?'},
       {speaker:'女', pre:'其实汉语跟我以前想的一点儿也不一样，', blank:'越学越有意思，也不觉得难了', post:'。', py:'Qíshí Hànyǔ gēn wǒ yǐqián xiǎng de yìdiǎnr yě bù yíyàng, yuè xué yuè yǒu yìsi, yě bù juéde nán le.', vn:'Thực ra tiếng Trung khác hẳn những gì tôi từng nghĩ, càng học càng thú vị, cũng không thấy khó nữa.'},
     ],
     explain:'男：你汉语只学了不到半年，说得这么好。以前你不是不想学吗？女：其实汉语跟我以前想的一点儿也不一样，越学越有意思，也不觉得难了。问：女的以前觉得汉语怎么样？ → 很难。'},
    {num:16, options:['每人最少讲3分钟','只要回答一个问题','没有问题'], ans:0,
     lines:[
       {speaker:'女', pre:'老师，', blank:'上次比赛每个人要讲3分钟，这次呢', post:'？', py:'Lǎoshī, shàng cì bǐsài měi ge rén yào jiǎng sān fēnzhōng, zhè cì ne?', vn:'Thầy ơi, lần thi trước mỗi người phải nói 3 phút, lần này thì sao ạ?'},
       {speaker:'男', pre:'', blank:'跟上次一样，参赛的同学每人最少讲3分钟', post:'。', py:'Gēn shàng cì yíyàng, cānsài de tóngxué měi rén zuìshǎo jiǎng sān fēnzhōng.', vn:'Giống lần trước, học sinh dự thi mỗi người nói ít nhất 3 phút.'},
       {speaker:'女', pre:'', blank:'还要回答老师的问题吗', post:'？', py:'Hái yào huídá lǎoshī de wèntí ma?', vn:'Còn phải trả lời câu hỏi của thầy cô nữa không ạ?'},
       {speaker:'男', pre:'对，三个老师每人问一个问题。', blank:'你一定没问题，不用担心', post:'。', py:'Duì, sān ge lǎoshī měi rén wèn yí ge wèntí. Nǐ yídìng méi wèntí, búyòng dānxīn.', vn:'Đúng vậy, ba thầy cô mỗi người hỏi một câu. Em chắc chắn không có vấn đề gì, không cần lo lắng.'},
     ],
     explain:'女：老师，上次比赛每个人要讲3分钟，这次呢？男：跟上次一样，参赛的同学每人最少讲3分钟。女：还要回答老师的问题吗？男：对，三个老师每人问一个问题。你一定没问题，不用担心。问：关于这次比赛，可以知道什么？ → 每人最少讲3分钟。'},
    {num:17, options:['周','谢','解'], ans:2,
     lines:[
       {speaker:'女', pre:'你好，', blank:'我叫周月。你叫什么名字', post:'？', py:'Nǐ hǎo, wǒ jiào Zhōuyuè. Nǐ jiào shénme míngzi?', vn:'Chào bạn, mình tên Chu Nguyệt. Bạn tên gì?'},
       {speaker:'男', pre:'', blank:'我叫解东', post:'。', py:'Wǒ jiào Xiè Dōng.', vn:'Mình tên Giải Đông.'},
       {speaker:'女', pre:'你姓什么？', blank:'是"谢谢"的"谢"吗', post:'？', py:'Nǐ xìng shénme? Shì "xièxie" de "xiè" ma?', vn:'Bạn họ gì? Có phải chữ "tạ" trong "cảm tạ" không?'},
       {speaker:'男', pre:'不是，', blank:'跟"了解"的"解"一样，但是做姓的时候读"解xiè"', post:'。', py:'Bú shì, gēn "liǎojiě" de "jiě" yíyàng, dànshì zuò xìng de shíhou dú "Xiè".', vn:'Không phải, giống chữ "giải" trong "liễu giải", nhưng khi làm họ thì đọc là "Xiè".'},
     ],
     explain:'女：你好，我叫周月。你叫什么名字？男：我叫解东。女：你姓什么？是"谢谢"的"谢"吗？男：不是，跟"了解"的"解"一样，但是做姓的时候读"解xiè"。问：男的姓什么？ → 解。'},
    {num:18, options:['买伞','叫出租车','找朋友'], ans:0,
     lines:[
       {speaker:'男', pre:'刚才是大晴天，', blank:'现在怎么下雨了，还越下越大', post:'。', py:'Gāngcái shì dà qíngtiān, xiànzài zěnme xiàyǔ le, hái yuè xià yuè dà.', vn:'Lúc nãy còn nắng đẹp, sao giờ lại mưa rồi, còn càng mưa càng to.'},
       {speaker:'女', pre:'夏天天气变得快，', blank:'我们坐出租车回家吧', post:'。', py:'Xiàtiān tiānqì biàn de kuài, wǒmen zuò chūzūchē huí jiā ba.', vn:'Mùa hè thời tiết thay đổi nhanh, chúng ta đi taxi về nhà đi.'},
       {speaker:'男', pre:'大家想得都跟你一样，', blank:'你看，你叫得到车吗', post:'？', py:'Dàjiā xiǎng de dōu gēn nǐ yíyàng, nǐ kàn, nǐ jiào de dào chē ma?', vn:'Ai cũng nghĩ giống bạn cả, bạn xem, bạn gọi được xe không?'},
       {speaker:'女', pre:'', blank:'那先去路边小商店买把伞吧', post:'。', py:'Nà xiān qù lùbiān xiǎo shāngdiàn mǎi bǎ sǎn ba.', vn:'Vậy trước tiên đi cửa hàng nhỏ ven đường mua cái ô đi.'},
     ],
     explain:'男：刚才是大晴天，现在怎么下雨了，还越下越大。女：夏天天气变得快，我们坐出租车回家吧。男：大家想得都跟你一样，你看，你叫得到车吗？女：那先去路边小商店买把伞吧。问：他们现在要去做什么？ → 买伞。'},
    {num:19, options:['山下下雪了','山上有雪','山路好走'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你们去爬山了？怎么样？一定很累吧', post:'？', py:'Nǐmen qù páshān le? Zěnmeyàng? Yídìng hěn lèi ba?', vn:'Các bạn đi leo núi rồi à? Thế nào? Chắc mệt lắm nhỉ?'},
       {speaker:'女', pre:'越高的地方越冷，山路也越难走，但是特别漂亮。', blank:'虽然已经是春天了，可是山上跟山下一点儿也不一样，还都是白的', post:'。', py:'Yuè gāo de dìfang yuè lěng, shānlù yě yuè nán zǒu, dànshì tèbié piàoliang. Suīrán yǐjīng shì chūntiān le, kěshì shān shang gēn shān xià yìdiǎnr yě bù yíyàng, hái dōu shì bái de.', vn:'Chỗ càng cao càng lạnh, đường núi cũng càng khó đi, nhưng đẹp lắm. Tuy đã là mùa xuân rồi, nhưng trên núi và dưới núi khác hẳn nhau, trên đó vẫn toàn màu trắng.'},
       {speaker:'男', pre:'', blank:'我越听越想去看看，下次你们也带我一起去吧', post:'。', py:'Wǒ yuè tīng yuè xiǎng qù kànkan, xià cì nǐmen yě dài wǒ yìqǐ qù ba.', vn:'Mình càng nghe càng muốn đi xem thử, lần sau các bạn cho mình đi cùng nhé.'},
       {speaker:'女', pre:'好，', blank:'下次去一定告诉你', post:'。', py:'Hǎo, xià cì qù yídìng gàosu nǐ.', vn:'Được, lần sau đi nhất định sẽ báo bạn.'},
     ],
     explain:'男：你们去爬山了？怎么样？一定很累吧？女：越高的地方越冷，山路也越难走，但是特别漂亮。虽然已经是春天了，可是山上跟山下一点儿也不一样，还都是白的。男：我越听越想去看看，下次你们也带我一起去吧。女：好，下次去一定告诉你。问：关于这次爬山，可以知道什么？ → 山上有雪。'},
    {num:20, options:['喝热的','不喝热的','喝饮料'], ans:0,
     lines:[
       {speaker:'男', pre:'天气真热，', blank:'我们喝点儿东西吧，给你饮料', post:'。', py:'Tiānqì zhēn rè, wǒmen hē diǎnr dōngxi ba, gěi nǐ yǐnliào.', vn:'Trời nóng thật, chúng ta uống chút gì đi, cho bạn đồ uống này.'},
       {speaker:'女', pre:'谢谢，', blank:'我带了热茶', post:'。', py:'Xièxie, wǒ dàile rè chá.', vn:'Cảm ơn, mình mang trà nóng rồi.'},
       {speaker:'男', pre:'夏天喝热茶，', blank:'那不是越喝越热吗', post:'？', py:'Xiàtiān hē rè chá, nà bú shì yuè hē yuè rè ma?', vn:'Mùa hè uống trà nóng, chẳng phải càng uống càng nóng sao?'},
       {speaker:'女', pre:'中国人跟你们不太一样，天气越热，', blank:'我们越想喝点儿热的，比较舒服', post:'。', py:'Zhōngguórén gēn nǐmen bú tài yíyàng, tiānqì yuè rè, wǒmen yuè xiǎng hē diǎnr rè de, bǐjiào shūfu.', vn:'Người Trung Quốc khác các bạn, trời càng nóng, chúng tôi càng muốn uống chút gì nóng, thấy dễ chịu hơn.'},
     ],
     explain:'男：天气真热，我们喝点儿东西吧，给你饮料。女：谢谢，我带了热茶。男：夏天喝热茶，那不是越喝越热吗？女：中国人跟你们不太一样，天气越热，我们越想喝点儿热的，比较舒服。问：天气热的时候，女的喝什么？ → 喝热的。'},
  ],
};
