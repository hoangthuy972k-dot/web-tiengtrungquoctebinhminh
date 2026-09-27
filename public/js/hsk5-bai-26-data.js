// ══════════════════════════════════════════
// DATA — HSK5 Bài 26: 你属于哪一种“忙”？ (Bạn thuộc kiểu "bận rộn" nào?)
// Unit 9 感受人生 · Nguồn: HSK标准教程5下 (tr. 71–78) + 练习册 bài 26
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'忙碌',py:'mánglù',pos:'Tính từ',vn:'bận rộn',hv:'mang lục',em:'⏳',lesson:1,
   explain:['Bận rộn, nhiều việc phải làm không ngơi tay — sắc thái văn viết hơn 忙.','Có thể lặp AABB để tăng mức độ: 忙忙碌碌 (tất bật).'],
   usage:'Làm định ngữ: 忙碌的一天 / 忙碌的人们; vị ngữ: 工作很忙碌; trạng ngữ: 忙碌地工作. Khác 忙: 忙 mang được tân ngữ (忙工作), 忙碌 thường không.',
   collo:['忙碌的一天','忙碌的人们','工作忙碌','忙忙碌碌'],
   ex_zh:'工作中的忙碌大概可以分为三种。',ex_py:'Gōngzuò zhōng de mánglù dàgài kěyǐ fēnwéi sān zhǒng.',ex_vn:'Sự bận rộn trong công việc đại khái có thể chia làm ba loại.',
   exList:[
     {zh:'工作中的忙碌大概可以分为三种。',py:'Gōngzuò zhōng de mánglù dàgài kěyǐ fēnwéi sān zhǒng.',vn:'Sự bận rộn trong công việc đại khái có thể chia làm ba loại.'},
     {zh:'忙碌的人们，请多给自己一点思考的时间吧。',py:'Mánglù de rénmen, qǐng duō gěi zìjǐ yìdiǎn sīkǎo de shíjiān ba.',vn:'Hỡi những con người bận rộn, hãy dành cho mình thêm chút thời gian suy nghĩ nhé.'},
     {zh:'高三的学生每天都很忙碌，连周末都要上课。',py:'Gāo sān de xuésheng měi tiān dōu hěn mánglù, lián zhōumò dōu yào shàngkè.',vn:'Học sinh lớp 12 ngày nào cũng bận rộn, ngay cả cuối tuần cũng phải đi học.'}
   ],
   colloFull:[
     {zh:'忙碌的一天',py:'mánglù de yì tiān',vn:'một ngày bận rộn'},
     {zh:'忙碌的人们',py:'mánglù de rénmen',vn:'những con người bận rộn'},
     {zh:'工作忙碌',py:'gōngzuò mánglù',vn:'công việc bận rộn'},
     {zh:'忙忙碌碌',py:'mángmáng-lùlù',vn:'tất bật, bận bịu'},
     {zh:'忙碌地工作',py:'mánglù de gōngzuò',vn:'làm việc bận rộn'}
   ],
   patterns:[
     {s:'忙碌的 + N (一天 / 生活 / 人们)',m:'… bận rộn'},
     {s:'忙忙碌碌地 + V',m:'Lặp AABB tăng mức độ: tất bật làm …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công việc rất bận rộn nhưng ngày nào bố cũng về nhà ăn tối.',answer:'虽然工作很忙碌，但是爸爸每天都回家吃晚饭。',answerPy:'Suīrán gōngzuò hěn mánglù, dànshì bàba měi tiān dōu huí jiā chī wǎnfàn.',
      note:'忙碌 làm vị ngữ, trước có 很. 虽然 ở vế trước, 但是 ở vế sau.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cuộc sống của cô ấy càng ngày càng bận rộn.',answer:'她的生活越来越忙碌了。',answerPy:'Tā de shēnghuó yuè lái yuè mánglù le.',
      note:'越来越 + tính từ + 了: sự thay đổi dần. Không thêm 很 sau 越来越.',pair:'越来越……'}
   ]},

  {n:2,zh:'被动',py:'bèidòng',pos:'Tính từ',vn:'bị động',hv:'bị động',em:'🪢',lesson:1,
   explain:['Không tự mình chủ động, phải do bên ngoài thúc đẩy mới làm. Trái nghĩa: 主动.','Trong ngữ pháp: 被动句 = câu bị động (câu 被).'],
   usage:'很被动 / 处于被动 / 被动地接受. Hay đứng sau 得 làm bổ ngữ trạng thái: 忙得很被动.',
   collo:['很被动','被动地接受','处于被动','被动句'],
   ex_zh:'第一种忙，忙得很被动，总是被事情追着、赶着。',ex_py:'Dì-yī zhǒng máng, máng de hěn bèidòng, zǒngshì bèi shìqing zhuīzhe, gǎnzhe.',ex_vn:'Loại bận thứ nhất là bận một cách bị động, lúc nào cũng bị công việc đuổi theo, dồn ép.',
   exList:[
     {zh:'第一种忙，忙得很被动，总是被事情追着、赶着。',py:'Dì-yī zhǒng máng, máng de hěn bèidòng, zǒngshì bèi shìqing zhuīzhe, gǎnzhe.',vn:'Loại bận thứ nhất là bận một cách bị động, lúc nào cũng bị công việc đuổi theo, dồn ép.'},
     {zh:'学习不能总是被动地接受，要主动去思考。',py:'Xuéxí bù néng zǒngshì bèidòng de jiēshòu, yào zhǔdòng qù sīkǎo.',vn:'Học không thể lúc nào cũng tiếp nhận thụ động, phải chủ động suy nghĩ.'},
     {zh:'我们没有提前准备，所以现在很被动。',py:'Wǒmen méiyǒu tíqián zhǔnbèi, suǒyǐ xiànzài hěn bèidòng.',vn:'Chúng tôi không chuẩn bị trước nên bây giờ rất bị động.'}
   ],
   colloFull:[
     {zh:'很被动',py:'hěn bèidòng',vn:'rất bị động'},
     {zh:'被动地接受',py:'bèidòng de jiēshòu',vn:'tiếp nhận một cách bị động'},
     {zh:'处于被动',py:'chǔyú bèidòng',vn:'ở thế bị động'},
     {zh:'被动句',py:'bèidòngjù',vn:'câu bị động'},
     {zh:'变被动为主动',py:'biàn bèidòng wéi zhǔdòng',vn:'biến bị động thành chủ động'}
   ],
   patterns:[
     {s:'V + 得 + 很被动',m:'làm … một cách bị động'},
     {s:'被动 ↔ 主动',m:'Cặp trái nghĩa trong bài: 忙得很被动 / 忙得很主动'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy luôn bị thầy giục nộp bài, học hành rất bị động.',answer:'他总是被老师催着交作业，学习很被动。',answerPy:'Tā zǒngshì bèi lǎoshī cuīzhe jiāo zuòyè, xuéxí hěn bèidòng.',
      note:'被 + người + V着: bị ai đó làm gì liên tục. Ôn 催 của bài khoá.',pair:'被'},
     {promptLang:'vi',prompt:'Nếu không chuẩn bị trước, bạn sẽ rất bị động.',answer:'如果不提前准备，你就会很被动。',answerPy:'Rúguǒ bù tíqián zhǔnbèi, nǐ jiù huì hěn bèidòng.',
      note:'如果……就……: giả thiết – kết quả. 被动 là tính từ nên đi được với 很.',pair:'如果……就……'}
   ]},

  {n:3,zh:'奴隶',py:'núlì',pos:'Danh từ',vn:'nô lệ',hv:'nô lệ',em:'⛓️',lesson:1,
   explain:['Người bị người khác chiếm hữu, mất tự do.','Nghĩa bóng: người bị một thứ gì đó chi phối hoàn toàn: 工作的奴隶, 金钱的奴隶.'],
   usage:'Hay dùng nghĩa bóng: 成了 / 变成 + N + 的奴隶. Đừng nhầm với 努力 (nǔlì — cố gắng).',
   collo:['工作的奴隶','金钱的奴隶','成了……的奴隶','手机的奴隶'],
   ex_zh:'人几乎成了工作的奴隶。',ex_py:'Rén jīhū chéngle gōngzuò de núlì.',ex_vn:'Con người gần như trở thành nô lệ của công việc.',
   exList:[
     {zh:'人几乎成了工作的奴隶。',py:'Rén jīhū chéngle gōngzuò de núlì.',vn:'Con người gần như trở thành nô lệ của công việc.'},
     {zh:'不要让自己变成手机的奴隶。',py:'Búyào ràng zìjǐ biànchéng shǒujī de núlì.',vn:'Đừng để bản thân biến thành nô lệ của điện thoại.'},
     {zh:'他为了钱什么都肯做，成了金钱的奴隶。',py:'Tā wèile qián shénme dōu kěn zuò, chéngle jīnqián de núlì.',vn:'Vì tiền anh ta việc gì cũng chịu làm, trở thành nô lệ của đồng tiền.'}
   ],
   colloFull:[
     {zh:'工作的奴隶',py:'gōngzuò de núlì',vn:'nô lệ của công việc'},
     {zh:'金钱的奴隶',py:'jīnqián de núlì',vn:'nô lệ của đồng tiền'},
     {zh:'成了……的奴隶',py:'chéngle……de núlì',vn:'trở thành nô lệ của …'},
     {zh:'手机的奴隶',py:'shǒujī de núlì',vn:'nô lệ của điện thoại'},
     {zh:'做时间的主人，不做时间的奴隶',py:'zuò shíjiān de zhǔrén, bú zuò shíjiān de núlì',vn:'làm chủ thời gian, không làm nô lệ của thời gian'}
   ],
   patterns:[
     {s:'成了 / 变成 + N + 的奴隶',m:'trở thành nô lệ của …'},
     {s:'奴隶 ↔ 主人',m:'Cặp đối lập trong bài: 工作的奴隶 / 工作的主人'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngay cả cuối tuần anh ấy cũng làm việc, gần như thành nô lệ của công việc.',answer:'他连周末都在工作，几乎成了工作的奴隶。',answerPy:'Tā lián zhōumò dōu zài gōngzuò, jīhū chéngle gōngzuò de núlì.',
      note:'连……都…… nhấn mạnh mức độ; 几乎 đứng trước động từ 成了.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Đừng để điện thoại biến bạn thành nô lệ.',answer:'别让手机把你变成奴隶。',answerPy:'Bié ràng shǒujī bǎ nǐ biànchéng núlì.',
      note:'把 + người + 变成 + N: biến ai thành gì (kết quả của hành động).',pair:'把'}
   ]},

  {n:4,zh:'虚伪',py:'xūwěi',pos:'Tính từ',vn:'giả dối, không thật',hv:'hư nguỵ',em:'🎭',lesson:1,
   explain:['Không thật lòng, bề ngoài một đằng bên trong một nẻo. Trái nghĩa: 真诚.'],
   usage:'很虚伪 / 虚伪的人 / 虚伪的笑容 / 虚伪的话. Nói về người, thái độ, lời nói; nghĩa chê khá nặng.',
   collo:['虚伪的人','虚伪的笑容','很虚伪','忙得有些虚伪'],
   ex_zh:'第三种忙，忙得有些虚伪。',ex_py:'Dì-sān zhǒng máng, máng de yǒuxiē xūwěi.',ex_vn:'Loại bận thứ ba là bận có phần giả tạo.',
   exList:[
     {zh:'第三种忙，忙得有些虚伪。',py:'Dì-sān zhǒng máng, máng de yǒuxiē xūwěi.',vn:'Loại bận thứ ba là bận có phần giả tạo.'},
     {zh:'我不喜欢虚伪的人，我更喜欢真诚的朋友。',py:'Wǒ bù xǐhuan xūwěi de rén, wǒ gèng xǐhuan zhēnchéng de péngyou.',vn:'Tôi không thích người giả dối, tôi thích những người bạn chân thành hơn.'},
     {zh:'他的笑容看起来有点儿虚伪。',py:'Tā de xiàoróng kàn qǐlai yǒudiǎnr xūwěi.',vn:'Nụ cười của anh ta trông hơi giả tạo.'}
   ],
   colloFull:[
     {zh:'虚伪的人',py:'xūwěi de rén',vn:'người giả dối'},
     {zh:'虚伪的笑容',py:'xūwěi de xiàoróng',vn:'nụ cười giả tạo'},
     {zh:'很虚伪',py:'hěn xūwěi',vn:'rất giả dối'},
     {zh:'忙得有些虚伪',py:'máng de yǒuxiē xūwěi',vn:'bận có phần giả tạo'},
     {zh:'虚伪的话',py:'xūwěi de huà',vn:'lời nói giả dối'}
   ],
   patterns:[
     {s:'虚伪 ↔ 真诚',m:'giả dối ↔ chân thành'},
     {s:'V + 得 + 有些虚伪',m:'… có phần giả tạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta tuy ngoài mặt đang cười nhưng thật ra rất giả dối.',answer:'他虽然表面上在笑，但是其实很虚伪。',answerPy:'Tā suīrán biǎomiàn shang zài xiào, dànshì qíshí hěn xūwěi.',
      note:'虚伪 là tính từ, làm vị ngữ sau 很. 虽然 đứng sau chủ ngữ cũng được.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ nói những lời giả dối.',answer:'我从来没说过虚伪的话。',answerPy:'Wǒ cónglái méi shuōguo xūwěi de huà.',
      note:'从来没 + V + 过: chưa từng bao giờ. 虚伪的话 = lời giả dối.',pair:'从来没……过'}
   ]},

  {n:5,zh:'思想',py:'sīxiǎng',pos:'Danh từ',vn:'ý nghĩ, tư tưởng',hv:'tư tưởng',em:'💭',lesson:1,
   explain:['Ý nghĩ, quan niệm trong đầu một người.','Tư tưởng — hệ thống quan điểm của một người, một trường phái: 孔子的思想.'],
   usage:'在……的思想中 / 思想开放 / 思想观念. Đừng nhầm với 思考 (động từ: suy nghĩ): ✗ 我在思想 → ✓ 我在思考.',
   collo:['思想开放','思想观念','在他的思想中','孔子的思想'],
   ex_zh:'在他们的思想中，已经把忙与成功、闲与失败联系到一起。',ex_py:'Zài tāmen de sīxiǎng zhōng, yǐjīng bǎ máng yǔ chénggōng, xián yǔ shībài liánxì dào yìqǐ.',ex_vn:'Trong suy nghĩ của họ đã gắn bận rộn với thành công, nhàn rỗi với thất bại.',
   exList:[
     {zh:'在他们的思想中，已经把忙与成功、闲与失败联系到一起。',py:'Zài tāmen de sīxiǎng zhōng, yǐjīng bǎ máng yǔ chénggōng, xián yǔ shībài liánxì dào yìqǐ.',vn:'Trong suy nghĩ của họ đã gắn bận rộn với thành công, nhàn rỗi với thất bại.'},
     {zh:'爷爷的思想很开放，愿意接受新东西。',py:'Yéye de sīxiǎng hěn kāifàng, yuànyì jiēshòu xīn dōngxi.',vn:'Ông có tư tưởng rất cởi mở, sẵn lòng tiếp nhận cái mới.'},
     {zh:'孔子的思想对中国文化影响很大。',py:'Kǒngzǐ de sīxiǎng duì Zhōngguó wénhuà yǐngxiǎng hěn dà.',vn:'Tư tưởng Khổng Tử ảnh hưởng rất lớn đến văn hoá Trung Quốc.'}
   ],
   colloFull:[
     {zh:'思想开放',py:'sīxiǎng kāifàng',vn:'tư tưởng cởi mở'},
     {zh:'思想观念',py:'sīxiǎng guānniàn',vn:'tư tưởng, quan niệm'},
     {zh:'在他的思想中',py:'zài tā de sīxiǎng zhōng',vn:'trong suy nghĩ của anh ấy'},
     {zh:'孔子的思想',py:'Kǒngzǐ de sīxiǎng',vn:'tư tưởng Khổng Tử'},
     {zh:'把思想强加给别人',py:'bǎ sīxiǎng qiángjiā gěi biérén',vn:'áp đặt suy nghĩ lên người khác'}
   ],
   patterns:[
     {s:'在 + người + 的思想中',m:'Trong suy nghĩ của …'},
     {s:'思想 (danh từ) ≠ 思考 (động từ)',m:'tư tưởng ≠ suy nghĩ (hành động)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin đừng áp đặt suy nghĩ của bạn lên tôi.',answer:'请不要把你的思想强加给我。',answerPy:'Qǐng búyào bǎ nǐ de sīxiǎng qiángjiā gěi wǒ.',
      note:'Câu 30 phần 书写 của sách bài tập. 把 + O + 强加给 + người.',pair:'把'},
     {promptLang:'vi',prompt:'Tư tưởng của người trẻ càng ngày càng cởi mở.',answer:'年轻人的思想越来越开放了。',answerPy:'Niánqīngrén de sīxiǎng yuè lái yuè kāifàng le.',
      note:'思想 là danh từ làm chủ ngữ; 开放 là tính từ đi với 越来越.',pair:'越来越……'}
   ]},

  {n:6,zh:'反省',py:'fǎnxǐng',pos:'Động từ',vn:'tự kiểm điểm, tự xét lại mình',hv:'phản tỉnh',em:'🪞',lesson:1,
   explain:['Nhìn lại, xem xét những gì chính mình đã nghĩ, đã làm để tìm ra sai sót. Chủ thể và đối tượng thường là chính mình.'],
   usage:'反省自己 / 时时反省 / 认真反省 / 深刻地反省. Hay đi đôi với 总结 (tổng kết). Chú ý 省 đọc xǐng (không đọc shěng như 省钱).',
   collo:['反省自己','时时反省','认真反省','反省和总结'],
   ex_zh:'时时反省、总结，却可以使我们不会在错误的道路上走得太远。',ex_py:'Shíshí fǎnxǐng, zǒngjié, què kěyǐ shǐ wǒmen bú huì zài cuòwù de dàolù shang zǒu de tài yuǎn.',ex_vn:'Thường xuyên tự kiểm điểm, tổng kết lại có thể giúp ta không đi quá xa trên con đường sai.',
   exList:[
     {zh:'时时反省、总结，却可以使我们不会在错误的道路上走得太远。',py:'Shíshí fǎnxǐng, zǒngjié, què kěyǐ shǐ wǒmen bú huì zài cuòwù de dàolù shang zǒu de tài yuǎn.',vn:'Thường xuyên tự kiểm điểm, tổng kết lại có thể giúp ta không đi quá xa trên con đường sai.'},
     {zh:'考试失败以后，我认真反省了自己的学习方法。',py:'Kǎoshì shībài yǐhòu, wǒ rènzhēn fǎnxǐngle zìjǐ de xuéxí fāngfǎ.',vn:'Sau khi thi trượt, tôi đã nghiêm túc xem lại phương pháp học của mình.'},
     {zh:'与其抱怨别人，不如先反省一下自己。',py:'Yǔqí bàoyuàn biérén, bùrú xiān fǎnxǐng yíxià zìjǐ.',vn:'Thay vì trách người khác, chi bằng tự xét lại mình trước.'}
   ],
   colloFull:[
     {zh:'反省自己',py:'fǎnxǐng zìjǐ',vn:'tự kiểm điểm bản thân'},
     {zh:'时时反省',py:'shíshí fǎnxǐng',vn:'thường xuyên tự kiểm điểm'},
     {zh:'认真反省',py:'rènzhēn fǎnxǐng',vn:'nghiêm túc tự kiểm điểm'},
     {zh:'反省和总结',py:'fǎnxǐng hé zǒngjié',vn:'tự kiểm điểm và tổng kết'},
     {zh:'深刻地反省',py:'shēnkè de fǎnxǐng',vn:'tự kiểm điểm sâu sắc'}
   ],
   patterns:[
     {s:'时时 / 认真 + 反省 + (自己)',m:'thường xuyên / nghiêm túc tự kiểm điểm'},
     {s:'反省 + 一下 / 了',m:'Động từ, mang được 一下, 了'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần thường xuyên tự kiểm điểm thì sẽ không đi quá xa trên con đường sai.',answer:'只要时时反省，就不会在错误的道路上走得太远。',answerPy:'Zhǐyào shíshí fǎnxǐng, jiù bú huì zài cuòwù de dàolù shang zǒu de tài yuǎn.',
      note:'Ý chính của bài khoá. 只要 nêu điều kiện, 就 đứng trước 不会.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Hễ phạm lỗi là anh ấy lại nghiêm túc tự kiểm điểm.',answer:'他一犯错误就会认真反省。',answerPy:'Tā yí fàn cuòwù jiù huì rènzhēn fǎnxǐng.',
      note:'一 + V + 就: hễ … là …. 一 trước thanh 4 đọc yí.',pair:'一……就……'}
   ]},

  {n:7,zh:'据说',py:'jùshuō',pos:'Động từ',vn:'nghe nói, nghe đồn',hv:'cứ thuyết',em:'👂',lesson:1,
   explain:['Theo lời người ta nói — dùng khi thông tin không do mình tận mắt thấy. Thường đứng đầu câu, sau có dấu phẩy, không có chủ ngữ.'],
   usage:'据说，…… / 据 + người + 说 (据老师说). ✗ 我据说…… → ✓ 我听说…… / 据说…….',
   collo:['据说，……','据老师说','据说这是真的','据他说'],
   ex_zh:'据说，曾经有一位很有个性、极爱冒险的大导演到南美丛林拍有关古代印加文明的纪录片。',ex_py:'Jùshuō, céngjīng yǒu yí wèi hěn yǒu gèxìng, jí ài màoxiǎn de dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',ex_vn:'Nghe nói từng có một đạo diễn lớn rất có cá tính, cực thích mạo hiểm, đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại.',
   exList:[
     {zh:'据说，曾经有一位很有个性、极爱冒险的大导演到南美丛林拍有关古代印加文明的纪录片。',py:'Jùshuō, céngjīng yǒu yí wèi hěn yǒu gèxìng, jí ài màoxiǎn de dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',vn:'Nghe nói từng có một đạo diễn lớn rất có cá tính, cực thích mạo hiểm, đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại.'},
     {zh:'据说这家饭馆的烤鸭特别好吃。',py:'Jùshuō zhè jiā fànguǎn de kǎoyā tèbié hǎochī.',vn:'Nghe nói vịt quay của quán này đặc biệt ngon.'},
     {zh:'据老师说，明天的考试推迟了。',py:'Jù lǎoshī shuō, míngtiān de kǎoshì tuīchí le.',vn:'Theo lời thầy nói, bài thi ngày mai đã hoãn lại.'}
   ],
   colloFull:[
     {zh:'据说，……',py:'jùshuō, ……',vn:'nghe nói, …'},
     {zh:'据老师说',py:'jù lǎoshī shuō',vn:'theo lời thầy nói'},
     {zh:'据说这是真的',py:'jùshuō zhè shì zhēn de',vn:'nghe nói chuyện này là thật'},
     {zh:'据他说',py:'jù tā shuō',vn:'theo lời anh ấy'},
     {zh:'据说很有名',py:'jùshuō hěn yǒumíng',vn:'nghe nói rất nổi tiếng'}
   ],
   patterns:[
     {s:'据说，+ câu',m:'Nghe nói … (đứng đầu câu, không có chủ ngữ)'},
     {s:'据 + người + 说',m:'Theo lời … nói'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghe nói ngay cả hiệu trưởng cũng sẽ đến xem.',answer:'据说连校长都会来看。',answerPy:'Jùshuō lián xiàozhǎng dōu huì lái kàn.',
      note:'据说 đứng đầu câu, phía sau là cả một câu hoàn chỉnh.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nghe nói bộ phim này là do một đạo diễn nổi tiếng quay.',answer:'据说这部电影是一位有名的导演拍的。',answerPy:'Jùshuō zhè bù diànyǐng shì yí wèi yǒumíng de dǎoyǎn pāi de.',
      note:'是……的 nhấn mạnh người thực hiện việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:8,zh:'个性',py:'gèxìng',pos:'Danh từ',vn:'cá tính',hv:'cá tính',em:'🌟',lesson:1,
   explain:['Tính cách riêng, nét riêng của một người (hay một vật) khác với người khác.'],
   usage:'很有个性 (khen: rất có cá tính) / 个性很强 / 个性鲜明 / 发展个性 / 尊重个性.',
   collo:['很有个性','个性很强','个性鲜明','发展个性'],
   ex_zh:'曾经有一位很有个性、极爱冒险的大导演。',ex_py:'Céngjīng yǒu yí wèi hěn yǒu gèxìng, jí ài màoxiǎn de dà dǎoyǎn.',ex_vn:'Từng có một đạo diễn lớn rất có cá tính, cực thích mạo hiểm.',
   exList:[
     {zh:'曾经有一位很有个性、极爱冒险的大导演。',py:'Céngjīng yǒu yí wèi hěn yǒu gèxìng, jí ài màoxiǎn de dà dǎoyǎn.',vn:'Từng có một đạo diễn lớn rất có cá tính, cực thích mạo hiểm.'},
     {zh:'她的穿着很有个性，大家一眼就能认出她。',py:'Tā de chuānzhuó hěn yǒu gèxìng, dàjiā yì yǎn jiù néng rènchū tā.',vn:'Cách ăn mặc của cô ấy rất cá tính, ai cũng nhận ra ngay.'},
     {zh:'每个孩子都有自己的个性，父母不应该拿他们作比较。',py:'Měi ge háizi dōu yǒu zìjǐ de gèxìng, fùmǔ bù yīnggāi ná tāmen zuò bǐjiào.',vn:'Mỗi đứa trẻ đều có cá tính riêng, bố mẹ không nên đem chúng ra so sánh.'}
   ],
   colloFull:[
     {zh:'很有个性',py:'hěn yǒu gèxìng',vn:'rất có cá tính'},
     {zh:'个性很强',py:'gèxìng hěn qiáng',vn:'cá tính rất mạnh'},
     {zh:'个性鲜明',py:'gèxìng xiānmíng',vn:'cá tính rõ nét'},
     {zh:'发展个性',py:'fāzhǎn gèxìng',vn:'phát triển cá tính'},
     {zh:'尊重孩子的个性',py:'zūnzhòng háizi de gèxìng',vn:'tôn trọng cá tính của trẻ'}
   ],
   patterns:[
     {s:'很 / 特别 + 有个性',m:'rất có cá tính'},
     {s:'个性 + 强 / 鲜明',m:'cá tính mạnh / rõ nét'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy không những xinh đẹp mà còn rất có cá tính.',answer:'她不仅漂亮，也很有个性。',answerPy:'Tā bùjǐn piàoliang, yě hěn yǒu gèxìng.',
      note:'有个性 là cụm động – tân, trước có thể thêm 很.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Thầy giáo này vì rất có cá tính nên được học sinh rất yêu mến.',answer:'这位老师因为很有个性，所以很受学生欢迎。',answerPy:'Zhè wèi lǎoshī yīnwèi hěn yǒu gèxìng, suǒyǐ hěn shòu xuésheng huānyíng.',
      note:'受 + người + 欢迎: được ai yêu mến.',pair:'因为……所以……'}
   ]},

  {n:9,zh:'冒险',py:'màoxiǎn',pos:'Động từ',vn:'mạo hiểm',hv:'mạo hiểm',em:'🧗',lesson:1,
   explain:['Làm việc biết là có nguy hiểm, không chắc thành công.','Cũng dùng như tính từ: 太冒险了, 有点儿冒险.'],
   usage:'Là động từ ly hợp: 冒很大的险. 爱冒险 / 冒险精神 / 冒险家.',
   collo:['爱冒险','冒险精神','有点儿冒险','冒很大的险'],
   ex_zh:'他是一位极爱冒险的大导演。',ex_py:'Tā shì yí wèi jí ài màoxiǎn de dà dǎoyǎn.',ex_vn:'Ông là một đạo diễn lớn cực kỳ thích mạo hiểm.',
   exList:[
     {zh:'他是一位极爱冒险的大导演。',py:'Tā shì yí wèi jí ài màoxiǎn de dà dǎoyǎn.',vn:'Ông là một đạo diễn lớn cực kỳ thích mạo hiểm.'},
     {zh:'一个人去原始丛林太冒险了。',py:'Yí ge rén qù yuánshǐ cónglín tài màoxiǎn le.',vn:'Một mình đi vào rừng nguyên sinh thì quá mạo hiểm.'},
     {zh:'年轻人应该有一点儿冒险精神。',py:'Niánqīngrén yīnggāi yǒu yìdiǎnr màoxiǎn jīngshén.',vn:'Người trẻ nên có một chút tinh thần mạo hiểm.'}
   ],
   colloFull:[
     {zh:'爱冒险',py:'ài màoxiǎn',vn:'thích mạo hiểm'},
     {zh:'冒险精神',py:'màoxiǎn jīngshén',vn:'tinh thần mạo hiểm'},
     {zh:'有点儿冒险',py:'yǒudiǎnr màoxiǎn',vn:'hơi mạo hiểm'},
     {zh:'冒很大的险',py:'mào hěn dà de xiǎn',vn:'mạo hiểm rất lớn'},
     {zh:'冒险家',py:'màoxiǎnjiā',vn:'nhà thám hiểm'}
   ],
   patterns:[
     {s:'冒 + (很大的) + 险',m:'Động từ ly hợp: chen thành phần vào giữa được'},
     {s:'太 / 有点儿 + 冒险 + (了)',m:'Dùng như tính từ: (quá / hơi) mạo hiểm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi mời Lưu Minh Thiên đến làm đạo diễn, thực ra là có chút mạo hiểm.',answer:'我找刘明天来当导演，其实是有点儿冒险的。',answerPy:'Wǒ zhǎo Liú Míngtiān lái dāng dǎoyǎn, qíshí shì yǒudiǎnr màoxiǎn de.',
      note:'Câu của bài tập SGK. 是……的 ở đây nhấn mạnh sự đánh giá.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tuy rất mạo hiểm nhưng anh ấy vẫn quyết định thử.',answer:'虽然很冒险，但是他还是决定试一试。',answerPy:'Suīrán hěn màoxiǎn, dànshì tā háishi juédìng shì yi shì.',
      note:'冒险 dùng như tính từ sau 很.',pair:'虽然……但是……'}
   ]},

  {n:10,zh:'丛林',py:'cónglín',pos:'Danh từ',vn:'rừng rậm, rừng cây',hv:'tùng lâm',em:'🌴',lesson:1,
   explain:['Rừng rậm, cây cối mọc dày đặc (thường ở vùng nhiệt đới).'],
   usage:'热带丛林 / 原始丛林 / 南美丛林 / 一片丛林 / 在丛林里 / 穿过丛林.',
   collo:['热带丛林','南美丛林','原始丛林','穿过丛林'],
   ex_zh:'大导演到南美丛林拍纪录片。',ex_py:'Dà dǎoyǎn dào Nánměi cónglín pāi jìlùpiàn.',ex_vn:'Vị đạo diễn lớn đến rừng rậm Nam Mỹ quay phim tài liệu.',
   exList:[
     {zh:'大导演到南美丛林拍纪录片。',py:'Dà dǎoyǎn dào Nánměi cónglín pāi jìlùpiàn.',vn:'Vị đạo diễn lớn đến rừng rậm Nam Mỹ quay phim tài liệu.'},
     {zh:'这些动物生活在热带丛林里。',py:'Zhèxiē dòngwù shēnghuó zài rèdài cónglín li.',vn:'Những loài động vật này sống trong rừng rậm nhiệt đới.'},
     {zh:'他们花了三天才穿过这片丛林。',py:'Tāmen huāle sān tiān cái chuānguò zhè piàn cónglín.',vn:'Họ mất ba ngày mới băng qua được khu rừng rậm này.'}
   ],
   colloFull:[
     {zh:'热带丛林',py:'rèdài cónglín',vn:'rừng rậm nhiệt đới'},
     {zh:'南美丛林',py:'Nánměi cónglín',vn:'rừng rậm Nam Mỹ'},
     {zh:'原始丛林',py:'yuánshǐ cónglín',vn:'rừng nguyên sinh'},
     {zh:'穿过丛林',py:'chuānguò cónglín',vn:'băng qua rừng rậm'},
     {zh:'一片丛林',py:'yí piàn cónglín',vn:'một khu rừng rậm'}
   ],
   patterns:[
     {s:'一片 + 丛林',m:'Lượng từ 片'},
     {s:'在 / 到 + 丛林 (里)',m:'ở / đến rừng rậm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Họ đã khuân hành lý vào rừng rậm.',answer:'他们把行李搬进了丛林。',answerPy:'Tāmen bǎ xíngli bānjìnle cónglín.',
      note:'把 + O + V进 + nơi chốn: kết quả là hành lý đã ở trong rừng.',pair:'把'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đến rừng rậm nhiệt đới.',answer:'我从来没去过热带丛林。',answerPy:'Wǒ cónglái méi qùguo rèdài cónglín.',
      note:'从来没 + V + 过: chưa từng.',pair:'从来没……过'}
   ]},

  {n:11,zh:'文明',py:'wénmíng',pos:'Danh từ / Tính từ',vn:'nền văn minh; văn minh',hv:'văn minh',em:'🏛️',lesson:1,
   explain:['Danh từ: nền văn minh — thành tựu văn hoá của một dân tộc, một thời đại: 古代文明.','Tính từ: văn minh, lịch sự: 文明礼貌, 文明城市.'],
   usage:'古代文明 / 印加文明 / 人类文明 / 文明古国 / 讲文明 (cư xử văn minh).',
   collo:['古代文明','印加文明','人类文明','讲文明'],
   ex_zh:'他们要拍有关古代印加文明的纪录片。',ex_py:'Tāmen yào pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',ex_vn:'Họ định quay phim tài liệu về nền văn minh Inca cổ đại.',
   exList:[
     {zh:'他们要拍有关古代印加文明的纪录片。',py:'Tāmen yào pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',vn:'Họ định quay phim tài liệu về nền văn minh Inca cổ đại.'},
     {zh:'中国是世界上文明古国之一。',py:'Zhōngguó shì shìjiè shang wénmíng gǔguó zhī yī.',vn:'Trung Quốc là một trong những nước có nền văn minh cổ trên thế giới.'},
     {zh:'在公共场所小声说话，这是文明的表现。',py:'Zài gōnggòng chǎngsuǒ xiǎoshēng shuōhuà, zhè shì wénmíng de biǎoxiàn.',vn:'Nói nhỏ ở nơi công cộng là biểu hiện của sự văn minh.'}
   ],
   colloFull:[
     {zh:'古代文明',py:'gǔdài wénmíng',vn:'văn minh cổ đại'},
     {zh:'印加文明',py:'Yìnjiā wénmíng',vn:'văn minh Inca'},
     {zh:'人类文明',py:'rénlèi wénmíng',vn:'nền văn minh nhân loại'},
     {zh:'讲文明',py:'jiǎng wénmíng',vn:'cư xử văn minh'},
     {zh:'文明古国',py:'wénmíng gǔguó',vn:'nước có nền văn minh cổ'}
   ],
   patterns:[
     {s:'古代 / 人类 / 印加 + 文明',m:'nền văn minh …'},
     {s:'讲文明、懂礼貌',m:'Nghĩa tính từ: cư xử văn minh, lễ phép'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nền văn minh này là do người Inca tạo ra.',answer:'这种文明是印加人创造的。',answerPy:'Zhè zhǒng wénmíng shì Yìnjiārén chuàngzào de.',
      note:'是 + người + V + 的: nhấn mạnh chủ thể.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chúng ta không chỉ phải học giỏi mà còn phải cư xử văn minh.',answer:'我们不仅要学习好，也要讲文明。',answerPy:'Wǒmen bùjǐn yào xuéxí hǎo, yě yào jiǎng wénmíng.',
      note:'讲文明 = cư xử văn minh (文明 dùng như tính từ / danh từ).',pair:'不仅……也……'}
   ]},

  {n:12,zh:'纪录',py:'jìlù',pos:'Danh từ / Động từ',vn:'tài liệu ghi tại chỗ; kỷ lục; ghi lại, ghi chép',hv:'kỷ lục',em:'🎥',lesson:1,
   explain:['Danh từ: tài liệu ghi lại tại chỗ → 纪录片 (phim tài liệu); cũng là "kỷ lục": 世界纪录, 打破纪录.','Động từ: ghi lại, ghi chép (nghĩa này nay thường viết 记录).'],
   usage:'Hay gặp nhất: 一部纪录片 / 拍纪录片 / 打破 (创造) 纪录. Ghi biên bản cuộc họp thường viết 记录.',
   collo:['纪录片','拍纪录片','打破纪录','世界纪录'],
   ex_zh:'大导演到南美丛林拍有关古代印加文明的纪录片。',ex_py:'Dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',ex_vn:'Vị đạo diễn lớn đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại.',
   exList:[
     {zh:'大导演到南美丛林拍有关古代印加文明的纪录片。',py:'Dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',vn:'Vị đạo diễn lớn đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại.'},
     {zh:'这部纪录片纪录了一个小村子十年的变化。',py:'Zhè bù jìlùpiàn jìlùle yí ge xiǎo cūnzi shí nián de biànhuà.',vn:'Bộ phim tài liệu này ghi lại sự thay đổi mười năm của một ngôi làng nhỏ.'},
     {zh:'他在比赛中打破了全国纪录。',py:'Tā zài bǐsài zhōng dǎpòle quánguó jìlù.',vn:'Anh ấy đã phá kỷ lục quốc gia trong cuộc thi.'}
   ],
   colloFull:[
     {zh:'纪录片',py:'jìlùpiàn',vn:'phim tài liệu'},
     {zh:'拍纪录片',py:'pāi jìlùpiàn',vn:'quay phim tài liệu'},
     {zh:'打破纪录',py:'dǎpò jìlù',vn:'phá kỷ lục'},
     {zh:'世界纪录',py:'shìjiè jìlù',vn:'kỷ lục thế giới'},
     {zh:'一部纪录片',py:'yí bù jìlùpiàn',vn:'một bộ phim tài liệu'}
   ],
   patterns:[
     {s:'一部 + 纪录片',m:'Lượng từ 部 (bảng 词语搭配 của sách)'},
     {s:'打破 / 创造 + 纪录',m:'phá / lập kỷ lục'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim tài liệu này do một đạo diễn rất có cá tính quay.',answer:'这部纪录片是一位很有个性的导演拍的。',answerPy:'Zhè bù jìlùpiàn shì yí wèi hěn yǒu gèxìng de dǎoyǎn pāi de.',
      note:'Lượng từ 部 cho phim. 是……的 nhấn mạnh người làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Kỷ lục thế giới đã bị anh ấy phá rồi.',answer:'世界纪录被他打破了。',answerPy:'Shìjiè jìlù bèi tā dǎpò le.',
      note:'被 + người + V + bổ ngữ kết quả (破).',pair:'被'}
   ]},

  {n:13,zh:'雇',py:'gù',pos:'Động từ',vn:'thuê, mướn',hv:'cố',em:'🤝',lesson:1,
   explain:['Bỏ tiền ra thuê người làm việc cho mình.'],
   usage:'雇 + người (+ 来 / 为 + người + V): 雇了20来个当地人为他带路; 雇人 / 雇保姆 / 雇司机; 被……雇来.',
   collo:['雇人','雇保姆','雇司机','雇了……来……'],
   ex_zh:'他雇了20来个当地人为他带路和搬运行李。',ex_py:'Tā gùle èrshí lái ge dāngdìrén wèi tā dài lù hé bānyùn xíngli.',ex_vn:'Ông thuê khoảng hai mươi người địa phương dẫn đường và khuân vác hành lý cho mình.',
   exList:[
     {zh:'他雇了20来个当地人为他带路和搬运行李。',py:'Tā gùle èrshí lái ge dāngdìrén wèi tā dài lù hé bānyùn xíngli.',vn:'Ông thuê khoảng hai mươi người địa phương dẫn đường và khuân vác hành lý cho mình.'},
     {zh:'这家公司最近又雇了几个新员工。',py:'Zhè jiā gōngsī zuìjìn yòu gùle jǐ ge xīn yuángōng.',vn:'Công ty này gần đây lại thuê thêm mấy nhân viên mới.'},
     {zh:'爸爸妈妈工作太忙，就雇了一位阿姨来照顾奶奶。',py:'Bàba māma gōngzuò tài máng, jiù gùle yí wèi āyí lái zhàogù nǎinai.',vn:'Bố mẹ bận quá nên đã thuê một cô giúp việc đến chăm bà.'}
   ],
   colloFull:[
     {zh:'雇人',py:'gù rén',vn:'thuê người'},
     {zh:'雇保姆',py:'gù bǎomǔ',vn:'thuê người giúp việc'},
     {zh:'雇司机',py:'gù sījī',vn:'thuê tài xế'},
     {zh:'雇了……来……',py:'gùle……lái……',vn:'thuê … đến (làm gì)'},
     {zh:'雇工',py:'gùgōng',vn:'người làm thuê'}
   ],
   patterns:[
     {s:'雇 + người + 来 / 为 + người + V',m:'Thuê ai (đến) làm việc gì (cho ai)'},
     {s:'……是 + người + 雇来的',m:'… là do ai thuê đến'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì bố mẹ rất bận nên đã thuê một cô giúp việc đến chăm bà.',answer:'因为爸爸妈妈很忙，所以雇了一位阿姨来照顾奶奶。',answerPy:'Yīnwèi bàba māma hěn máng, suǒyǐ gùle yí wèi āyí lái zhàogù nǎinai.',
      note:'雇 + người + 来 + V: thuê ai đến làm gì. 一位 đọc yí wèi.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Những công nhân này là do công ty thuê đến.',answer:'这些工人是公司雇来的。',answerPy:'Zhèxiē gōngrén shì gōngsī gùlai de.',
      note:'是……的 nhấn mạnh ai là người thuê.',pair:'是……的'}
   ]},

  {n:14,zh:'来',py:'lái',pos:'Trợ từ',vn:'khoảng, chừng (sau số)',hv:'lai',em:'🔢',lesson:1,
   explain:['Trợ từ, đứng sau số chẵn chục 十、百、千… hoặc sau số lượng từ, biểu thị số ước lượng: 20来个 = khoảng hai mươi (mấy).','Sau 一、二、三 tạo khung 一来……，二来……: một là …, hai là … (liệt kê lý do).'],
   usage:'Số chẵn chục + 来 + lượng từ + N: 20来个人, 一千来块钱. Số + lượng từ đo lường + 来 + tính từ: 5斤来重, 一米来长. 一来……，二来……: nêu lý do.',
   collo:['20来个人','一千来块钱','5斤来重','一来……，二来……'],
   ex_zh:'他雇了20来个当地人为他带路和搬运行李。',ex_py:'Tā gùle èrshí lái ge dāngdìrén wèi tā dài lù hé bānyùn xíngli.',ex_vn:'Ông thuê khoảng hai mươi người địa phương dẫn đường và khuân vác hành lý.',
   exList:[
     {zh:'他雇了20来个当地人为他带路和搬运行李。',py:'Tā gùle èrshí lái ge dāngdìrén wèi tā dài lù hé bānyùn xíngli.',vn:'Ông thuê khoảng hai mươi người địa phương dẫn đường và khuân vác hành lý.'},
     {zh:'按照老人教的方法，他几乎每天都能钓到5斤来重的大鱼。',py:'Ànzhào lǎorén jiāo de fāngfǎ, tā jīhū měi tiān dōu néng diàodào wǔ jīn lái zhòng de dà yú.',vn:'Theo cách ông lão dạy, gần như ngày nào anh ấy cũng câu được cá to nặng chừng 5 cân.'},
     {zh:'我对上海很有感情，一来上大学时在那里住过几年，二来我太太也是上海人。',py:'Wǒ duì Shànghǎi hěn yǒu gǎnqíng, yī lái shàng dàxué shí zài nàli zhùguo jǐ nián, èr lái wǒ tàitai yě shì Shànghǎirén.',vn:'Tôi rất có tình cảm với Thượng Hải, một là hồi đại học từng sống ở đó mấy năm, hai là vợ tôi cũng là người Thượng Hải.'}
   ],
   colloFull:[
     {zh:'20来个人',py:'èrshí lái ge rén',vn:'khoảng hai mươi người'},
     {zh:'一千来块钱',py:'yìqiān lái kuài qián',vn:'khoảng một nghìn tệ'},
     {zh:'5斤来重',py:'wǔ jīn lái zhòng',vn:'nặng chừng 5 cân'},
     {zh:'一来……，二来……',py:'yī lái……, èr lái……',vn:'một là …, hai là …'},
     {zh:'三十来岁',py:'sānshí lái suì',vn:'chừng ba mươi tuổi'}
   ],
   patterns:[
     {s:'十 / 百 / 千 + 来 + lượng từ + N',m:'Khoảng … (số ước lượng)'},
     {s:'一来……，二来……',m:'Một là …, hai là … (liệt kê lý do)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc áo sơ mi này khoảng một nghìn tệ, đắt hơn chiếc kia nhiều.',answer:'这件衬衫一千来块钱，比那件贵多了。',answerPy:'Zhè jiàn chènshān yìqiān lái kuài qián, bǐ nà jiàn guì duō le.',
      note:'一千来块 = khoảng một nghìn tệ: 来 đứng giữa số và lượng từ.',pair:'比'},
     {promptLang:'vi',prompt:'Trời càng ngày càng lạnh, hôm nay chỉ khoảng mười mấy độ.',answer:'天气越来越冷了，今天只有十来度。',answerPy:'Tiānqì yuè lái yuè lěng le, jīntiān zhǐ yǒu shí lái dù.',
      note:'十来度 = chừng mười mấy độ. Đừng nhầm 来 trong 越来越 với trợ từ 来.',pair:'越来越……'}
   ]},

  {n:15,zh:'批',py:'pī',pos:'Lượng từ',vn:'tốp, nhóm, đợt, lô',hv:'phê',em:'📦',lesson:1,
   explain:['Lượng từ dùng cho một nhóm người hoặc một lô hàng cùng đến, cùng đi một lúc: 一批学生, 一批货.'],
   usage:'一批 + 货 / 学生 / 游客 (bảng 词语搭配); 这批 / 那批 + N; 分批 (chia từng đợt); 大批 (hàng loạt).',
   collo:['一批货','一批学生','这批当地人','分批'],
   ex_zh:'这批当地人个个都表现出色。',ex_py:'Zhè pī dāngdìrén gègè dōu biǎoxiàn chūsè.',ex_vn:'Tốp người địa phương này ai nấy đều thể hiện xuất sắc.',
   exList:[
     {zh:'这批当地人个个都表现出色。',py:'Zhè pī dāngdìrén gègè dōu biǎoxiàn chūsè.',vn:'Tốp người địa phương này ai nấy đều thể hiện xuất sắc.'},
     {zh:'上海的那批货准备得怎么样了？',py:'Shànghǎi de nà pī huò zhǔnbèi de zěnmeyàng le?',vn:'Lô hàng Thượng Hải chuẩn bị đến đâu rồi?'},
     {zh:'学校今年又来了一批新老师。',py:'Xuéxiào jīnnián yòu láile yì pī xīn lǎoshī.',vn:'Năm nay trường lại có thêm một đợt giáo viên mới.'}
   ],
   colloFull:[
     {zh:'一批货',py:'yì pī huò',vn:'một lô hàng'},
     {zh:'一批学生',py:'yì pī xuésheng',vn:'một tốp học sinh'},
     {zh:'这批当地人',py:'zhè pī dāngdìrén',vn:'tốp người địa phương này'},
     {zh:'分批',py:'fēn pī',vn:'chia thành từng đợt'},
     {zh:'大批游客',py:'dàpī yóukè',vn:'hàng loạt du khách'}
   ],
   patterns:[
     {s:'一批 + 货 / 学生',m:'Một lô hàng / một tốp học sinh'},
     {s:'分批 + V',m:'Làm … theo từng đợt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hãy chuyển lô hàng này đến Thượng Hải.',answer:'请把这批货送到上海去。',answerPy:'Qǐng bǎ zhè pī huò sòngdào Shànghǎi qù.',
      note:'把 + 这批货 + 送到 + nơi chốn.',pair:'把'},
     {promptLang:'vi',prompt:'Lô hàng này bị khách trả lại rồi.',answer:'这批货被客人退回来了。',answerPy:'Zhè pī huò bèi kèrén tuì huílai le.',
      note:'被 + người + V + bổ ngữ xu hướng (回来).',pair:'被'}
   ]},

  {n:16,zh:'出色',py:'chūsè',pos:'Tính từ',vn:'xuất sắc',hv:'xuất sắc',em:'🏅',lesson:1,
   explain:['Đặc biệt tốt, vượt hẳn mức bình thường — thường nói về biểu hiện, thành tích, cách hoàn thành một việc.'],
   usage:'表现出色 / 出色地完成 / 出色的成绩 / 出色的人物 (bảng 搭配). So với 优秀: 出色 làm trạng ngữ được (出色地完成), nhấn vào kết quả một việc cụ thể; 优秀 nói phẩm chất chung (优秀学生).',
   collo:['表现出色','出色地完成','出色的成绩','出色的人物'],
   ex_zh:'这批当地人个个都表现出色。',ex_py:'Zhè pī dāngdìrén gègè dōu biǎoxiàn chūsè.',ex_vn:'Tốp người địa phương này ai nấy đều thể hiện xuất sắc.',
   exList:[
     {zh:'这批当地人个个都表现出色。',py:'Zhè pī dāngdìrén gègè dōu biǎoxiàn chūsè.',vn:'Tốp người địa phương này ai nấy đều thể hiện xuất sắc.'},
     {zh:'小丽出色地完成了比赛的各项动作，取得了第一名的好成绩。',py:'Xiǎo Lì chūsè de wánchéngle bǐsài de gè xiàng dòngzuò, qǔdéle dì-yī míng de hǎo chéngjì.',vn:'Tiểu Lệ hoàn thành xuất sắc mọi động tác của cuộc thi, giành thành tích hạng nhất.'},
     {zh:'马向阳在那儿当县长时，出色地完成了任务。',py:'Mǎ Xiàngyáng zài nàr dāng xiànzhǎng shí, chūsè de wánchéngle rènwu.',vn:'Khi làm huyện trưởng ở đó, Mã Hướng Dương đã hoàn thành xuất sắc nhiệm vụ.'}
   ],
   colloFull:[
     {zh:'表现出色',py:'biǎoxiàn chūsè',vn:'thể hiện xuất sắc'},
     {zh:'出色地完成',py:'chūsè de wánchéng',vn:'hoàn thành xuất sắc'},
     {zh:'出色的成绩',py:'chūsè de chéngjì',vn:'thành tích xuất sắc'},
     {zh:'出色的人物',py:'chūsè de rénwù',vn:'nhân vật xuất sắc'},
     {zh:'出色的医生',py:'chūsè de yīshēng',vn:'bác sĩ giỏi'}
   ],
   patterns:[
     {s:'出色地 + V (完成 / 发挥)',m:'Làm … một cách xuất sắc'},
     {s:'表现 + (得) + 出色',m:'Thể hiện xuất sắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cô ấy không những học giỏi mà trong cuộc thi hát cũng thể hiện rất xuất sắc.',answer:'她不仅学习好，在唱歌比赛中也表现得很出色。',answerPy:'Tā bùjǐn xuéxí hǎo, zài chànggē bǐsài zhōng yě biǎoxiàn de hěn chūsè.',
      note:'表现得很出色: 出色 làm bổ ngữ trạng thái sau 得.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Chỉ cần cố gắng, cậu nhất định sẽ hoàn thành xuất sắc nhiệm vụ lần này.',answer:'只要努力，你就一定能出色地完成这次任务。',answerPy:'Zhǐyào nǔlì, nǐ jiù yídìng néng chūsè de wánchéng zhè cì rènwu.',
      note:'出色地 + 完成: 出色 làm trạng ngữ, cần 地.',pair:'只要……就……'}
   ]},

  {n:17,zh:'健步如飞',py:'jiànbù-rúfēi',pos:'Thành ngữ',vn:'bước đi mạnh mẽ, thoăn thoắt',hv:'kiện bộ như phi',em:'🏃',lesson:1,
   explain:['Bước chân khoẻ và nhanh như bay — tả người đi bộ, leo núi rất nhanh nhẹn; hay dùng để khen người lớn tuổi vẫn khoẻ.'],
   usage:'Làm vị ngữ: 他健步如飞; sau 走起路来: 走起路来健步如飞; làm trạng ngữ: 健步如飞地 + V.',
   collo:['健步如飞','走起路来健步如飞','脚力过人，健步如飞'],
   ex_zh:'尽管他们背着重重的行李，但他们的脚力过人，健步如飞。',ex_py:'Jǐnguǎn tāmen bēizhe zhòngzhòng de xíngli, dàn tāmen de jiǎolì guòrén, jiànbù-rúfēi.',ex_vn:'Tuy phải cõng hành lý nặng trĩu, nhưng sức chân của họ hơn người, bước đi thoăn thoắt như bay.',
   exList:[
     {zh:'尽管他们背着重重的行李，但他们的脚力过人，健步如飞。',py:'Jǐnguǎn tāmen bēizhe zhòngzhòng de xíngli, dàn tāmen de jiǎolì guòrén, jiànbù-rúfēi.',vn:'Tuy phải cõng hành lý nặng trĩu, nhưng sức chân của họ hơn người, bước đi thoăn thoắt như bay.'},
     {zh:'爷爷七十多岁了，爬山的时候还健步如飞。',py:'Yéye qīshí duō suì le, pá shān de shíhou hái jiànbù-rúfēi.',vn:'Ông nội đã hơn bảy mươi tuổi mà leo núi vẫn nhanh thoăn thoắt.'}
   ],
   colloFull:[
     {zh:'健步如飞',py:'jiànbù-rúfēi',vn:'bước đi như bay'},
     {zh:'走起路来健步如飞',py:'zǒu qǐ lù lai jiànbù-rúfēi',vn:'đi đứng nhanh thoăn thoắt'},
     {zh:'脚力过人，健步如飞',py:'jiǎolì guòrén, jiànbù-rúfēi',vn:'sức chân hơn người, bước đi như bay'}
   ],
   patterns:[
     {s:'（主语）+ 健步如飞',m:'Ai đó đi nhanh thoăn thoắt'},
     {s:'走起路来 + 健步如飞',m:'Hễ đi là nhanh như bay'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy ông tôi đã hơn bảy mươi tuổi nhưng đi đứng vẫn nhanh thoăn thoắt.',answer:'虽然爷爷已经七十多岁了，但是走起路来还健步如飞。',answerPy:'Suīrán yéye yǐjīng qīshí duō suì le, dànshì zǒu qǐ lù lai hái jiànbù-rúfēi.',
      note:'走起路来 + 健步如飞: V起来 = hễ bắt đầu làm gì.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Anh ấy vừa nghe tin là chạy như bay về nhà.',answer:'他一听到这个消息，就健步如飞地跑回了家。',answerPy:'Tā yì tīngdào zhège xiāoxi, jiù jiànbù-rúfēi de pǎohuíle jiā.',
      note:'Thành ngữ làm trạng ngữ, sau có 地.',pair:'一……就……'}
   ]},

  {n:18,zh:'一连',py:'yìlián',pos:'Phó từ',vn:'liên tiếp, liền',hv:'nhất liên',em:'🔁',lesson:1,
   explain:['Biểu thị động tác hoặc tình huống lặp lại liên tục, không ngắt quãng. Phía sau luôn có từ chỉ số lượng: 一连三天, 一连问了三遍.'],
   usage:'一连 + số lượng + (V): 一连三天; 一连 + V + số lượng: 一连下了一个星期的雨. Không dùng 一连 khi không có số lượng.',
   collo:['一连三天','一连好几次','一连下了一个星期的雨','一连问了三遍'],
   ex_zh:'一连三天，他们都很顺利地实现了原定的计划。',ex_py:'Yìlián sān tiān, tāmen dōu hěn shùnlì de shíxiànle yuándìng de jìhuà.',ex_vn:'Ba ngày liền, họ đều thuận lợi hoàn thành kế hoạch đã định.',
   exList:[
     {zh:'一连三天，他们都很顺利地实现了原定的计划。',py:'Yìlián sān tiān, tāmen dōu hěn shùnlì de shíxiànle yuándìng de jìhuà.',vn:'Ba ngày liền, họ đều thuận lợi hoàn thành kế hoạch đã định.'},
     {zh:'一连下了一个星期的雨，衣服都干不了。',py:'Yìlián xiàle yí ge xīngqī de yǔ, yīfu dōu gān bu liǎo.',vn:'Mưa liền một tuần, quần áo chẳng khô được.'},
     {zh:'她一连问了三遍，我才听明白。',py:'Tā yìlián wènle sān biàn, wǒ cái tīng míngbai.',vn:'Cô ấy hỏi liền ba lần tôi mới nghe hiểu.'}
   ],
   colloFull:[
     {zh:'一连三天',py:'yìlián sān tiān',vn:'ba ngày liền'},
     {zh:'一连好几次',py:'yìlián hǎo jǐ cì',vn:'mấy lần liền'},
     {zh:'一连下了一个星期的雨',py:'yìlián xiàle yí ge xīngqī de yǔ',vn:'mưa liền một tuần'},
     {zh:'一连问了三遍',py:'yìlián wènle sān biàn',vn:'hỏi liền ba lần'}
   ],
   patterns:[
     {s:'一连 + số lượng (三天 / 好几次)',m:'… liền, liên tiếp'},
     {s:'一连 + V + 了 + số lượng',m:'Làm liên tiếp bao nhiêu lần / bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy ba ngày liền không đi học, ngay cả thầy giáo cũng sốt ruột.',answer:'他一连三天没来上课，连老师都着急了。',answerPy:'Tā yìlián sān tiān méi lái shàngkè, lián lǎoshī dōu zháojí le.',
      note:'一连 + 三天 đứng trước cụm động từ phủ định.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Cô ấy mấy lần liền đều bị thầy phê bình.',answer:'她一连好几次都被老师批评了。',answerPy:'Tā yìlián hǎo jǐ cì dōu bèi lǎoshī pīpíng le.',
      note:'一连好几次 + 都 + 被…….',pair:'被'}
   ]},

  {n:19,zh:'耽误',py:'dānwù',pos:'Động từ',vn:'làm chậm trễ, để lỡ',hv:'đam ngộ',em:'⏰',lesson:1,
   explain:['Vì chậm trễ, chần chừ hoặc có trở ngại mà làm lỡ việc, làm mất thời gian: 耽误时间, 耽误工作.'],
   usage:'耽误 + 工作 / 时间 / 孩子 / 生产 / 休息 / 约会 / 看病 (bảng 搭配). Khác 影响: 耽误 nhấn mạnh làm LỠ, làm CHẬM việc; 影响 là tác động nói chung (tốt hoặc xấu).',
   collo:['耽误时间','耽误工作','耽误孩子','耽误看病'],
   ex_zh:'一来，耽误了时间，日程就得重新安排。',ex_py:'Yī lái, dānwùle shíjiān, rìchéng jiù děi chóngxīn ānpái.',ex_vn:'Một là, lỡ mất thời gian thì lịch trình phải sắp xếp lại.',
   exList:[
     {zh:'一来，耽误了时间，日程就得重新安排。',py:'Yī lái, dānwùle shíjiān, rìchéng jiù děi chóngxīn ānpái.',vn:'Một là, lỡ mất thời gian thì lịch trình phải sắp xếp lại.'},
     {zh:'因为有大雾，飞机不能起飞。耽误了您的宝贵时间，非常抱歉！',py:'Yīnwèi yǒu dà wù, fēijī bù néng qǐfēi. Dānwùle nín de bǎoguì shíjiān, fēicháng bàoqiàn!',vn:'Vì có sương mù dày, máy bay không thể cất cánh. Làm mất thời gian quý báu của quý khách, chúng tôi vô cùng xin lỗi!'},
     {zh:'上海的那批货准备得怎么样了？时间可别耽误了。',py:'Shànghǎi de nà pī huò zhǔnbèi de zěnmeyàng le? Shíjiān kě bié dānwù le.',vn:'Lô hàng Thượng Hải chuẩn bị đến đâu rồi? Đừng để trễ hạn đấy.'}
   ],
   colloFull:[
     {zh:'耽误时间',py:'dānwù shíjiān',vn:'làm mất thời gian, làm chậm'},
     {zh:'耽误工作',py:'dānwù gōngzuò',vn:'làm lỡ việc'},
     {zh:'耽误孩子',py:'dānwù háizi',vn:'làm lỡ dở con cái'},
     {zh:'耽误看病',py:'dānwù kàn bìng',vn:'làm lỡ việc chữa bệnh'},
     {zh:'耽误约会',py:'dānwù yuēhuì',vn:'làm lỡ cuộc hẹn'}
   ],
   patterns:[
     {s:'耽误 + (了) + 时间 / 工作 / 学习',m:'Làm lỡ, làm chậm …'},
     {s:'别 / 不要 + 耽误了 + N',m:'Đừng để lỡ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Việc học của tôi bị trận ốm này làm lỡ dở.',answer:'我的学习被这场病耽误了。',answerPy:'Wǒ de xuéxí bèi zhè chǎng bìng dānwù le.',
      note:'被 + nguyên nhân + 耽误了.',pair:'被'},
     {promptLang:'vi',prompt:'Nếu bây giờ không đi khám thì sẽ lỡ việc chữa trị.',answer:'如果现在不去看病，就会耽误治疗。',answerPy:'Rúguǒ xiànzài bú qù kàn bìng, jiù huì dānwù zhìliáo.',
      note:'耽误 + 治疗 / 看病: làm lỡ việc chữa bệnh.',pair:'如果……就……'}
   ]},

  {n:20,zh:'至于',py:'zhìyú',pos:'Giới từ / Động từ',vn:'còn (về); đến mức',hv:'chí ư',em:'↪️',lesson:1,
   explain:['Giới từ: dùng trong khung “(A)……，至于(B)……” để chuyển sang nói thêm một việc khác — còn về ….','Động từ: đạt đến mức độ nào đó, hay dùng trong câu phản vấn / phủ định: 至于……吗？, 不至于.'],
   usage:'……，至于 + N / câu，……: còn về …; 不至于 + V: chưa đến mức; (你)至于 + V + 吗？: có đến mức … không? / 哪至于…….',
   collo:['至于这件事','不至于','至于……吗？','至于住在哪儿'],
   ex_zh:'至于这部影片的投资人，可是一位大人物，他可不敢得罪。',ex_py:'Zhìyú zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù, tā kě bù gǎn dézuì.',ex_vn:'Còn nhà đầu tư của bộ phim này thì đúng là một nhân vật lớn, ông ta không dám làm phật lòng.',
   exList:[
     {zh:'至于这部影片的投资人，可是一位大人物，他可不敢得罪。',py:'Zhìyú zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù, tā kě bù gǎn dézuì.',vn:'Còn nhà đầu tư của bộ phim này thì đúng là một nhân vật lớn, ông ta không dám làm phật lòng.'},
     {zh:'我只是和你开个玩笑，你至于生那么大的气吗？',py:'Wǒ zhǐshì hé nǐ kāi ge wánxiào, nǐ zhìyú shēng nàme dà de qì ma?',vn:'Tôi chỉ đùa với cậu thôi, có đến mức phải giận dữ thế không?'},
     {zh:'我只知道他是六班的学生，至于住在哪儿，我就不清楚了。',py:'Wǒ zhǐ zhīdào tā shì liù bān de xuésheng, zhìyú zhù zài nǎr, wǒ jiù bù qīngchu le.',vn:'Tôi chỉ biết cậu ấy là học sinh lớp 6, còn ở đâu thì tôi không rõ.'}
   ],
   colloFull:[
     {zh:'至于这件事',py:'zhìyú zhè jiàn shì',vn:'còn về việc này'},
     {zh:'不至于',py:'bú zhìyú',vn:'chưa đến mức'},
     {zh:'至于……吗？',py:'zhìyú……ma?',vn:'có đến mức … không?'},
     {zh:'至于住在哪儿',py:'zhìyú zhù zài nǎr',vn:'còn ở đâu thì …'},
     {zh:'哪至于',py:'nǎ zhìyú',vn:'đâu đến mức'}
   ],
   patterns:[
     {s:'A……，至于 B，……',m:'Nói về A xong, chuyển sang B: còn về B thì …'},
     {s:'不至于 / 至于……吗？',m:'Chưa đến mức … / Có đến mức … không?'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy thi không tốt lắm, nhưng cũng chưa đến mức trượt chứ.',answer:'虽然他考得不太好，但是也不至于不及格吧。',answerPy:'Suīrán tā kǎo de bú tài hǎo, dànshì yě bú zhìyú bù jígé ba.',
      note:'不至于 + V: chưa đến mức ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cậu chỉ bị cảm thôi, đâu đến mức ngay cả lên lớp cũng không được?',answer:'你只是感冒了，哪至于连课都上不了？',answerPy:'Nǐ zhǐshì gǎnmào le, nǎ zhìyú lián kè dōu shàng bu liǎo?',
      note:'哪至于…… là câu phản vấn: không đến mức ấy.',pair:'连……都……'}
   ]},

  {n:21,zh:'投资',py:'tóuzī',pos:'Động từ',vn:'đầu tư',hv:'đầu tư',em:'💰',lesson:1,
   explain:['Bỏ tiền (hoặc công sức) vào một việc để thu lợi về sau.','Cũng làm danh từ: khoản đầu tư. 投资人 / 投资者 = nhà đầu tư.'],
   usage:'投资 + lĩnh vực / 在……投资; 长期(地) / 纷纷 / 大胆(地) + 投资 (bảng 搭配); 投资人.',
   collo:['投资人','长期投资','大胆地投资','纷纷投资'],
   ex_zh:'二来，会因为费用增加而让投资人不高兴。',ex_py:'Èr lái, huì yīnwèi fèiyong zēngjiā ér ràng tóuzīrén bù gāoxìng.',ex_vn:'Hai là, chi phí tăng sẽ làm nhà đầu tư không vui.',
   exList:[
     {zh:'二来，会因为费用增加而让投资人不高兴。',py:'Èr lái, huì yīnwèi fèiyong zēngjiā ér ràng tóuzīrén bù gāoxìng.',vn:'Hai là, chi phí tăng sẽ làm nhà đầu tư không vui.'},
     {zh:'很多外国公司纷纷来这里投资。',py:'Hěn duō wàiguó gōngsī fēnfēn lái zhèlǐ tóuzī.',vn:'Nhiều công ty nước ngoài lần lượt đến đây đầu tư.'},
     {zh:'学习是对自己最好的投资。',py:'Xuéxí shì duì zìjǐ zuì hǎo de tóuzī.',vn:'Học tập là khoản đầu tư tốt nhất cho bản thân.'}
   ],
   colloFull:[
     {zh:'投资人',py:'tóuzīrén',vn:'nhà đầu tư'},
     {zh:'长期投资',py:'chángqī tóuzī',vn:'đầu tư dài hạn'},
     {zh:'大胆地投资',py:'dàdǎn de tóuzī',vn:'mạnh dạn đầu tư'},
     {zh:'纷纷投资',py:'fēnfēn tóuzī',vn:'lần lượt đầu tư'},
     {zh:'投资电影',py:'tóuzī diànyǐng',vn:'đầu tư làm phim'}
   ],
   patterns:[
     {s:'在 + nơi chốn + 投资 / 投资 + N',m:'Đầu tư ở … / đầu tư vào …'},
     {s:'对……的投资',m:'Khoản đầu tư cho … (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim này là do một doanh nghiệp lớn đầu tư.',answer:'这部电影是一家大企业投资的。',answerPy:'Zhè bù diànyǐng shì yì jiā dà qǐyè tóuzī de.',
      note:'是 + chủ thể + 投资的: nhấn mạnh ai đầu tư.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần có ý tưởng hay thì sẽ có người sẵn lòng đầu tư.',answer:'只要有好的想法，就会有人愿意投资。',answerPy:'Zhǐyào yǒu hǎo de xiǎngfǎ, jiù huì yǒu rén yuànyì tóuzī.',
      note:'愿意 + 投资.',pair:'只要……就……'}
   ]},

  {n:22,zh:'人物',py:'rénwù',pos:'Danh từ',vn:'nhân vật, người có vai vế',hv:'nhân vật',em:'🎩',lesson:1,
   explain:['Người có vai trò, địa vị hoặc nổi bật trong một lĩnh vực: 大人物, 重要人物, 历史人物.','Nhân vật trong tác phẩm văn học, phim ảnh.'],
   usage:'大人物 / 重要人物 / 历史人物 / 出色的人物 / 小说中的人物.',
   collo:['大人物','历史人物','重要人物','小说中的人物'],
   ex_zh:'这部影片的投资人，可是一位大人物。',ex_py:'Zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù.',ex_vn:'Nhà đầu tư của bộ phim này đúng là một nhân vật lớn.',
   exList:[
     {zh:'这部影片的投资人，可是一位大人物。',py:'Zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù.',vn:'Nhà đầu tư của bộ phim này đúng là một nhân vật lớn.'},
     {zh:'孔子是中国历史上非常重要的人物。',py:'Kǒngzǐ shì Zhōngguó lìshǐ shang fēicháng zhòngyào de rénwù.',vn:'Khổng Tử là nhân vật rất quan trọng trong lịch sử Trung Quốc.'},
     {zh:'这本小说里的人物写得特别生动。',py:'Zhè běn xiǎoshuō li de rénwù xiě de tèbié shēngdòng.',vn:'Nhân vật trong cuốn tiểu thuyết này được viết đặc biệt sinh động.'}
   ],
   colloFull:[
     {zh:'大人物',py:'dà rénwù',vn:'nhân vật lớn'},
     {zh:'历史人物',py:'lìshǐ rénwù',vn:'nhân vật lịch sử'},
     {zh:'重要人物',py:'zhòngyào rénwù',vn:'nhân vật quan trọng'},
     {zh:'小说中的人物',py:'xiǎoshuō zhōng de rénwù',vn:'nhân vật trong tiểu thuyết'},
     {zh:'出色的人物',py:'chūsè de rénwù',vn:'nhân vật xuất sắc'}
   ],
   patterns:[
     {s:'一位 + 大 / 重要 + 人物',m:'Một nhân vật lớn / quan trọng'},
     {s:'……中的人物',m:'Nhân vật trong (tác phẩm)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông ấy là một nhân vật lớn, ngay cả giám đốc cũng không dám làm ông ấy phật lòng.',answer:'他是一位大人物，连经理都不敢得罪他。',answerPy:'Tā shì yí wèi dà rénwù, lián jīnglǐ dōu bù gǎn dézuì tā.',
      note:'Lượng từ 位 cho người, lịch sự.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nhân vật trong bộ phim truyền hình này càng ngày càng được giới trẻ yêu thích.',answer:'这部电视剧里的人物越来越受年轻人欢迎了。',answerPy:'Zhè bù diànshìjù li de rénwù yuè lái yuè shòu niánqīngrén huānyíng le.',
      note:'受 + người + 欢迎: được ai yêu thích.',pair:'越来越……'}
   ]},

  {n:23,zh:'得罪',py:'dézuì',pos:'Động từ',vn:'làm phật lòng, xúc phạm',hv:'đắc tội',em:'😠',lesson:1,
   explain:['Làm cho người khác không vui, giận mình (thường vì lời nói, việc làm không khéo).'],
   usage:'得罪 + người; 把 + người + 得罪了; 不敢得罪 / 得罪不起 / 怕得罪人.',
   collo:['得罪人','得罪不起','不敢得罪','把他得罪了'],
   ex_zh:'至于这部影片的投资人，可是一位大人物，他可不敢得罪。',ex_py:'Zhìyú zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù, tā kě bù gǎn dézuì.',ex_vn:'Còn nhà đầu tư của bộ phim thì đúng là nhân vật lớn, ông ta không dám làm phật lòng.',
   exList:[
     {zh:'至于这部影片的投资人，可是一位大人物，他可不敢得罪。',py:'Zhìyú zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù, tā kě bù gǎn dézuì.',vn:'Còn nhà đầu tư của bộ phim thì đúng là nhân vật lớn, ông ta không dám làm phật lòng.'},
     {zh:'他说话太直，经常得罪人。',py:'Tā shuōhuà tài zhí, jīngcháng dézuì rén.',vn:'Anh ấy ăn nói quá thẳng, hay làm mất lòng người khác.'},
     {zh:'我昨天说错了一句话，把好朋友得罪了。',py:'Wǒ zuótiān shuōcuòle yí jù huà, bǎ hǎo péngyou dézuì le.',vn:'Hôm qua tôi lỡ nói sai một câu, làm bạn thân phật lòng mất rồi.'}
   ],
   colloFull:[
     {zh:'得罪人',py:'dézuì rén',vn:'làm mất lòng người'},
     {zh:'得罪不起',py:'dézuì bu qǐ',vn:'không thể đắc tội'},
     {zh:'不敢得罪',py:'bù gǎn dézuì',vn:'không dám làm phật lòng'},
     {zh:'把他得罪了',py:'bǎ tā dézuì le',vn:'làm anh ấy phật lòng mất rồi'},
     {zh:'怕得罪人',py:'pà dézuì rén',vn:'sợ làm mất lòng người'}
   ],
   patterns:[
     {s:'把 + người + 得罪了',m:'Lỡ làm ai phật lòng'},
     {s:'不敢 / 怕 + 得罪 + người',m:'Không dám / sợ làm ai phật lòng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi nói sai một câu, làm bạn thân phật lòng mất rồi.',answer:'我说错了一句话，把好朋友得罪了。',answerPy:'Wǒ shuōcuòle yí jù huà, bǎ hǎo péngyou dézuì le.',
      note:'把 + người + 得罪了: kết quả không mong muốn.',pair:'把'},
     {promptLang:'vi',prompt:'Anh ấy tuy nói chuyện thẳng nhưng chưa bao giờ làm mất lòng ai.',answer:'他虽然说话很直，但是从来没得罪过人。',answerPy:'Tā suīrán shuōhuà hěn zhí, dànshì cónglái méi dézuìguo rén.',
      note:'从来没 + 得罪 + 过 + 人.',pair:'从来没……过'}
   ]},

  {n:24,zh:'总算',py:'zǒngsuàn',pos:'Phó từ',vn:'cuối cùng (cũng); nói chung (cũng tạm)',hv:'tổng toán',em:'🏁',lesson:1,
   explain:['Sau một thời gian khá dài chờ đợi, cố gắng, điều mong muốn cuối cùng cũng thành hiện thực.','Còn biểu thị “nói chung cũng tạm được, cũng coi là”: 总算不错了.'],
   usage:'总算 + V + 了: 总算搞明白了, 总算干完了; 总算 + 有 / 不错 / 没有白来. Chỉ dùng cho kết quả MONG MUỐN (khác 终于).',
   collo:['总算搞明白了','总算干完了','总算不错了','总算有个……了'],
   ex_zh:'经过沟通，大导演总算搞明白了。',ex_py:'Jīngguò gōutōng, dà dǎoyǎn zǒngsuàn gǎo míngbai le.',ex_vn:'Qua trao đổi, vị đạo diễn lớn cuối cùng cũng hiểu ra.',
   exList:[
     {zh:'经过沟通，大导演总算搞明白了。',py:'Jīngguò gōutōng, dà dǎoyǎn zǒngsuàn gǎo míngbai le.',vn:'Qua trao đổi, vị đạo diễn lớn cuối cùng cũng hiểu ra.'},
     {zh:'总算把活儿干完了，可把我累坏了。',py:'Zǒngsuàn bǎ huór gànwán le, kě bǎ wǒ lèihuài le.',vn:'Cuối cùng cũng làm xong việc, mệt muốn chết.'},
     {zh:'虽然我对这家宾馆不太满意，但总算有个睡觉的地方了。',py:'Suīrán wǒ duì zhè jiā bīnguǎn bú tài mǎnyì, dàn zǒngsuàn yǒu ge shuìjiào de dìfang le.',vn:'Tuy tôi không hài lòng lắm với khách sạn này, nhưng dù sao cũng có chỗ ngủ rồi.'}
   ],
   colloFull:[
     {zh:'总算搞明白了',py:'zǒngsuàn gǎo míngbai le',vn:'cuối cùng cũng hiểu ra'},
     {zh:'总算干完了',py:'zǒngsuàn gànwán le',vn:'cuối cùng cũng làm xong'},
     {zh:'总算不错了',py:'zǒngsuàn búcuò le',vn:'thế cũng coi là khá rồi'},
     {zh:'总算有个……了',py:'zǒngsuàn yǒu ge……le',vn:'cuối cùng cũng có một … rồi'},
     {zh:'这趟总算没有白来',py:'zhè tàng zǒngsuàn méiyǒu bái lái',vn:'chuyến này cũng không uổng công'}
   ],
   patterns:[
     {s:'（经过……），总算 + V + 了',m:'Sau bao cố gắng, cuối cùng cũng …'},
     {s:'虽然……，但总算……',m:'Tuy …, nhưng dù sao cũng … (tạm được)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuối cùng cũng làm xong hết bài tập, mệt muốn chết.',answer:'总算把作业都做完了，可把我累坏了。',answerPy:'Zǒngsuàn bǎ zuòyè dōu zuòwán le, kě bǎ wǒ lèihuài le.',
      note:'总算 đứng trước cụm 把. 可把我累坏了 = mệt rã rời.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy khách sạn không tốt lắm nhưng dù sao cũng có chỗ ngủ rồi.',answer:'虽然宾馆不太好，但是总算有个睡觉的地方了。',answerPy:'Suīrán bīnguǎn bú tài hǎo, dànshì zǒngsuàn yǒu ge shuìjiào de dìfang le.',
      note:'Nghĩa 2 của 总算: nói chung cũng tạm được.',pair:'虽然……但是……'}
   ]},

  {n:25,zh:'搞',py:'gǎo',pos:'Động từ',vn:'làm, tạo ra',hv:'cảo',em:'🔧',lesson:1,
   explain:['Động từ khẩu ngữ, thay cho nhiều động từ cụ thể: làm, tổ chức, kiếm được, xử lý… Nghĩa cụ thể tuỳ theo từ đi sau: 搞明白 (làm cho rõ), 搞活动 (tổ chức hoạt động), 搞到票 (kiếm được vé).'],
   usage:'搞 + 错 / 成 / 出来 / 得准确 (bảng 搭配); 搞明白 / 搞清楚; 搞 + 活动 / 研究; 怎么搞的？ = sao lại ra thế?',
   collo:['搞明白','搞错','搞出来','怎么搞的'],
   ex_zh:'经过沟通，大导演总算搞明白了。',ex_py:'Jīngguò gōutōng, dà dǎoyǎn zǒngsuàn gǎo míngbai le.',ex_vn:'Qua trao đổi, vị đạo diễn lớn cuối cùng cũng hiểu ra.',
   exList:[
     {zh:'经过沟通，大导演总算搞明白了。',py:'Jīngguò gōutōng, dà dǎoyǎn zǒngsuàn gǎo míngbai le.',vn:'Qua trao đổi, vị đạo diễn lớn cuối cùng cũng hiểu ra.'},
     {zh:'你怎么搞的？不是说好了周末和小丽见面的吗？',py:'Nǐ zěnme gǎo de? Bú shì shuōhǎole zhōumò hé Xiǎo Lì jiànmiàn de ma?',vn:'Cậu làm sao thế? Chẳng phải đã hẹn cuối tuần gặp Tiểu Lệ rồi sao?'},
     {zh:'问题是我们怎样才能搞到他的签名。',py:'Wèntí shì wǒmen zěnyàng cái néng gǎodào tā de qiānmíng.',vn:'Vấn đề là chúng ta làm thế nào mới xin được chữ ký của anh ấy.'}
   ],
   colloFull:[
     {zh:'搞明白',py:'gǎo míngbai',vn:'làm cho rõ, hiểu ra'},
     {zh:'搞错',py:'gǎocuò',vn:'làm sai, nhầm'},
     {zh:'搞出来',py:'gǎo chūlai',vn:'làm ra được'},
     {zh:'怎么搞的',py:'zěnme gǎo de',vn:'sao lại ra thế'},
     {zh:'搞得准确',py:'gǎo de zhǔnquè',vn:'làm cho chính xác'},
     {zh:'搞活动',py:'gǎo huódòng',vn:'tổ chức hoạt động'}
   ],
   patterns:[
     {s:'搞 + 明白 / 清楚 / 错 / 成',m:'搞 + bổ ngữ kết quả'},
     {s:'你怎么搞的？',m:'Cậu làm sao thế? (trách nhẹ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi nhầm giờ, suýt nữa lỡ chuyến bay.',answer:'我把时间搞错了，差点儿耽误了飞机。',answerPy:'Wǒ bǎ shíjiān gǎocuò le, chàdiǎnr dānwùle fēijī.',
      note:'把 + 时间 + 搞错了. Ôn 耽误 của bài.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ có hỏi thầy mới hiểu rõ được vấn đề này.',answer:'只有问老师，才能把这个问题搞明白。',answerPy:'Zhǐyǒu wèn lǎoshī, cái néng bǎ zhège wèntí gǎo míngbai.',
      note:'搞明白 = làm cho hiểu rõ.',pair:'只有……才……'}
   ]},

  {n:26,zh:'习俗',py:'xísú',pos:'Danh từ',vn:'tập tục',hv:'tập tục',em:'🏮',lesson:1,
   explain:['Phong tục, thói quen hình thành từ lâu đời và được truyền lại trong một vùng, một dân tộc.'],
   usage:'一种习俗 / 当地的习俗 / 传统习俗 / 民间习俗 / 尊重习俗 / 自古就有……的习俗.',
   collo:['当地的习俗','传统习俗','尊重习俗','自古就有一种习俗'],
   ex_zh:'当地人自古就有一种习俗。',ex_py:'Dāngdìrén zìgǔ jiù yǒu yì zhǒng xísú.',ex_vn:'Người địa phương từ xưa đã có một tập tục.',
   exList:[
     {zh:'当地人自古就有一种习俗。',py:'Dāngdìrén zìgǔ jiù yǒu yì zhǒng xísú.',vn:'Người địa phương từ xưa đã có một tập tục.'},
     {zh:'春节贴春联是中国的传统习俗。',py:'Chūn Jié tiē chūnlián shì Zhōngguó de chuántǒng xísú.',vn:'Dán câu đối Tết là tập tục truyền thống của Trung Quốc.'},
     {zh:'到了别的国家，要尊重当地的习俗。',py:'Dàole bié de guójiā, yào zūnzhòng dāngdì de xísú.',vn:'Đến nước khác thì phải tôn trọng tập tục địa phương.'}
   ],
   colloFull:[
     {zh:'当地的习俗',py:'dāngdì de xísú',vn:'tập tục địa phương'},
     {zh:'传统习俗',py:'chuántǒng xísú',vn:'tập tục truyền thống'},
     {zh:'尊重习俗',py:'zūnzhòng xísú',vn:'tôn trọng tập tục'},
     {zh:'自古就有一种习俗',py:'zìgǔ jiù yǒu yì zhǒng xísú',vn:'từ xưa đã có một tập tục'},
     {zh:'民间习俗',py:'mínjiān xísú',vn:'tập tục dân gian'}
   ],
   patterns:[
     {s:'……是……的传统习俗',m:'… là tập tục truyền thống của …'},
     {s:'尊重 + 当地的习俗',m:'Tôn trọng tập tục địa phương'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tập tục này không chỉ Trung Quốc có, Việt Nam cũng có.',answer:'这种习俗不仅中国有，越南也有。',answerPy:'Zhè zhǒng xísú bùjǐn Zhōngguó yǒu, Yuènán yě yǒu.',
      note:'习俗 làm chủ đề đứng đầu câu.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ nghe nói đến tập tục này.',answer:'我从来没听说过这种习俗。',answerPy:'Wǒ cónglái méi tīngshuōguo zhè zhǒng xísú.',
      note:'Lượng từ 种 cho 习俗.',pair:'从来没……过'}
   ]},

  {n:27,zh:'灵魂',py:'línghún',pos:'Danh từ',vn:'linh hồn, tâm hồn',hv:'linh hồn',em:'🕊️',lesson:1,
   explain:['Linh hồn, phần tinh thần của con người (đối lập với thể xác 身体).','Nghĩa bóng: phần cốt lõi, quan trọng nhất: 他是球队的灵魂.'],
   usage:'我们的灵魂 / 灵魂和身体 / ……的灵魂 / 灵魂人物.',
   collo:['我们的灵魂','灵魂和身体','球队的灵魂','灵魂人物'],
   ex_zh:'那是为了让我们的灵魂，能够追得上我们赶了三天路的疲劳的身体。',ex_py:'Nà shì wèile ràng wǒmen de línghún, nénggòu zhuī de shàng wǒmen gǎnle sān tiān lù de píláo de shēntǐ.',ex_vn:'Đó là để linh hồn chúng tôi có thể theo kịp cơ thể mệt mỏi đã đi đường suốt ba ngày.',
   exList:[
     {zh:'那是为了让我们的灵魂，能够追得上我们赶了三天路的疲劳的身体。',py:'Nà shì wèile ràng wǒmen de línghún, nénggòu zhuī de shàng wǒmen gǎnle sān tiān lù de píláo de shēntǐ.',vn:'Đó là để linh hồn chúng tôi có thể theo kịp cơ thể mệt mỏi đã đi đường suốt ba ngày.'},
     {zh:'他是这支球队的灵魂，没有他就赢不了。',py:'Tā shì zhè zhī qiúduì de línghún, méiyǒu tā jiù yíng bu liǎo.',vn:'Anh ấy là linh hồn của đội bóng này, không có anh ấy thì không thắng nổi.'},
     {zh:'好书能让人的灵魂变得更丰富。',py:'Hǎo shū néng ràng rén de línghún biàn de gèng fēngfù.',vn:'Sách hay có thể làm tâm hồn con người phong phú hơn.'}
   ],
   colloFull:[
     {zh:'我们的灵魂',py:'wǒmen de línghún',vn:'linh hồn chúng ta'},
     {zh:'灵魂和身体',py:'línghún hé shēntǐ',vn:'tâm hồn và thể xác'},
     {zh:'球队的灵魂',py:'qiúduì de línghún',vn:'linh hồn của đội bóng'},
     {zh:'灵魂人物',py:'línghún rénwù',vn:'nhân vật linh hồn, trụ cột'},
     {zh:'追得上身体的灵魂',py:'zhuī de shàng shēntǐ de línghún',vn:'tâm hồn theo kịp thể xác'}
   ],
   patterns:[
     {s:'让灵魂追得上身体',m:'Để tâm hồn theo kịp cơ thể (ý chính bài khoá)'},
     {s:'……是……的灵魂',m:'… là linh hồn (phần cốt lõi) của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nghỉ ngơi là để tâm hồn theo kịp cơ thể.',answer:'休息是为了让灵魂追得上身体。',answerPy:'Xiūxi shì wèile ràng línghún zhuī de shàng shēntǐ.',
      note:'是为了 + mục đích. 追得上 = đuổi kịp (bổ ngữ khả năng).',pair:'为了'},
     {promptLang:'vi',prompt:'Anh ấy là linh hồn của đội bóng, chỉ cần có anh ấy là đội thắng được.',answer:'他是球队的灵魂，只要有他在，球队就能赢。',answerPy:'Tā shì qiúduì de línghún, zhǐyào yǒu tā zài, qiúduì jiù néng yíng.',
      note:'Nghĩa bóng: 灵魂 = người cốt cán.',pair:'只要……就……'}
   ]},

  {n:28,zh:'疲劳',py:'píláo',pos:'Tính từ',vn:'mệt mỏi, mệt nhọc',hv:'bì lao',em:'😩',lesson:1,
   explain:['Mệt mỏi vì làm việc, vận động quá nhiều hoặc quá lâu; sắc thái văn viết hơn 累.','Cũng dùng như danh từ: 消除疲劳 (xua tan mệt mỏi).'],
   usage:'疲劳的身体 / 感到疲劳 / 过度疲劳 / 消除疲劳 / 疲劳驾驶 (lái xe khi mệt).',
   collo:['疲劳的身体','感到疲劳','消除疲劳','疲劳驾驶'],
   ex_zh:'那是为了让我们的灵魂，能够追得上我们赶了三天路的疲劳的身体。',ex_py:'Nà shì wèile ràng wǒmen de línghún, nénggòu zhuī de shàng wǒmen gǎnle sān tiān lù de píláo de shēntǐ.',ex_vn:'Đó là để linh hồn chúng tôi có thể theo kịp cơ thể mệt mỏi đã đi đường suốt ba ngày.',
   exList:[
     {zh:'那是为了让我们的灵魂，能够追得上我们赶了三天路的疲劳的身体。',py:'Nà shì wèile ràng wǒmen de línghún, nénggòu zhuī de shàng wǒmen gǎnle sān tiān lù de píláo de shēntǐ.',vn:'Đó là để linh hồn chúng tôi có thể theo kịp cơ thể mệt mỏi đã đi đường suốt ba ngày.'},
     {zh:'连续工作了十个小时，他感到非常疲劳。',py:'Liánxù gōngzuòle shí ge xiǎoshí, tā gǎndào fēicháng píláo.',vn:'Làm việc liên tục mười tiếng, anh ấy cảm thấy vô cùng mệt mỏi.'},
     {zh:'洗个热水澡可以消除疲劳。',py:'Xǐ ge rèshuǐ zǎo kěyǐ xiāochú píláo.',vn:'Tắm nước nóng có thể xua tan mệt mỏi.'}
   ],
   colloFull:[
     {zh:'疲劳的身体',py:'píláo de shēntǐ',vn:'cơ thể mệt mỏi'},
     {zh:'感到疲劳',py:'gǎndào píláo',vn:'cảm thấy mệt mỏi'},
     {zh:'消除疲劳',py:'xiāochú píláo',vn:'xua tan mệt mỏi'},
     {zh:'疲劳驾驶',py:'píláo jiàshǐ',vn:'lái xe khi mệt'},
     {zh:'过度疲劳',py:'guòdù píláo',vn:'mệt mỏi quá độ'}
   ],
   patterns:[
     {s:'感到 / 觉得 + (很) 疲劳',m:'Cảm thấy mệt mỏi'},
     {s:'消除 + 疲劳',m:'Xua tan mệt mỏi (疲劳 dùng như danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhìn máy tính lâu, mắt sẽ càng ngày càng mỏi.',answer:'看电脑时间长了，眼睛会越来越疲劳。',answerPy:'Kàn diànnǎo shíjiān cháng le, yǎnjing huì yuè lái yuè píláo.',
      note:'越来越 + 疲劳, không thêm 很.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tuy rất mệt nhưng anh ấy vẫn kiên trì làm xong.',answer:'虽然很疲劳，但是他还是坚持做完了。',answerPy:'Suīrán hěn píláo, dànshì tā háishi jiānchí zuòwán le.',
      note:'疲劳 là tính từ, làm vị ngữ sau 很.',pair:'虽然……但是……'}
   ]},

  {n:29,zh:'哲理',py:'zhélǐ',pos:'Danh từ',vn:'triết lý',hv:'triết lý',em:'🦉',lesson:1,
   explain:['Đạo lý sâu sắc về cuộc sống, về con người và thế giới.'],
   usage:'富有哲理 / 很有哲理 / 充满哲理 / 人生哲理 / 哲理故事.',
   collo:['富有哲理','很有哲理','人生哲理','哲理故事'],
   ex_zh:'多么富有哲理的话！',ex_py:'Duōme fùyǒu zhélǐ de huà!',ex_vn:'Một câu nói giàu triết lý biết bao!',
   exList:[
     {zh:'多么富有哲理的话！',py:'Duōme fùyǒu zhélǐ de huà!',vn:'Một câu nói giàu triết lý biết bao!'},
     {zh:'这个小故事里包含着深刻的人生哲理。',py:'Zhège xiǎo gùshi li bāohánzhe shēnkè de rénshēng zhélǐ.',vn:'Câu chuyện nhỏ này chứa đựng triết lý nhân sinh sâu sắc.'},
     {zh:'爷爷说的话虽然简单，但是很有哲理。',py:'Yéye shuō de huà suīrán jiǎndān, dànshì hěn yǒu zhélǐ.',vn:'Lời ông nói tuy đơn giản nhưng rất có triết lý.'}
   ],
   colloFull:[
     {zh:'富有哲理',py:'fùyǒu zhélǐ',vn:'giàu triết lý'},
     {zh:'很有哲理',py:'hěn yǒu zhélǐ',vn:'rất có triết lý'},
     {zh:'人生哲理',py:'rénshēng zhélǐ',vn:'triết lý nhân sinh'},
     {zh:'哲理故事',py:'zhélǐ gùshi',vn:'câu chuyện triết lý'},
     {zh:'充满哲理',py:'chōngmǎn zhélǐ',vn:'đầy triết lý'}
   ],
   patterns:[
     {s:'富有 / 很有 + 哲理',m:'Giàu / rất có triết lý'},
     {s:'多么 + 富有哲理的 + N！',m:'Câu cảm thán: … giàu triết lý biết bao!'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lời ông nói tuy đơn giản nhưng rất có triết lý.',answer:'爷爷说的话虽然简单，但是很有哲理。',answerPy:'Yéye shuō de huà suīrán jiǎndān, dànshì hěn yǒu zhélǐ.',
      note:'很有哲理: 很 + 有 + danh từ trừu tượng.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Câu chuyện này không chỉ thú vị mà còn rất có triết lý.',answer:'这个故事不仅很有意思，而且很有哲理。',answerPy:'Zhège gùshi bùjǐn hěn yǒu yìsi, érqiě hěn yǒu zhélǐ.',
      note:'有意思 và 有哲理 song song.',pair:'不仅……而且……'}
   ]},

  {n:30,zh:'提倡',py:'tíchàng',pos:'Động từ',vn:'đề xướng, chủ trương, khuyến khích',hv:'đề xướng',em:'📣',lesson:1,
   explain:['Nêu ra một điều cho là tốt và khuyến khích mọi người làm theo.'],
   usage:'提倡 + 科学 / 戒烟 / 对话 / 节约 / 诚实 / 平等 (bảng 搭配); 大力 / 积极(地) + 提倡.',
   collo:['提倡节约','提倡戒烟','大力提倡','积极地提倡'],
   ex_zh:'在这个提倡和鼓励竞争的时代，我们常常只顾低头拉车。',ex_py:'Zài zhège tíchàng hé gǔlì jìngzhēng de shídài, wǒmen chángcháng zhǐ gù dī tóu lā chē.',ex_vn:'Trong thời đại đề cao và khuyến khích cạnh tranh này, chúng ta thường chỉ lo cúi đầu kéo xe.',
   exList:[
     {zh:'在这个提倡和鼓励竞争的时代，我们常常只顾低头拉车。',py:'Zài zhège tíchàng hé gǔlì jìngzhēng de shídài, wǒmen chángcháng zhǐ gù dī tóu lā chē.',vn:'Trong thời đại đề cao và khuyến khích cạnh tranh này, chúng ta thường chỉ lo cúi đầu kéo xe.'},
     {zh:'现在饭馆都提倡节约，不浪费食物。',py:'Xiànzài fànguǎn dōu tíchàng jiéyuē, bú làngfèi shíwù.',vn:'Bây giờ quán ăn nào cũng khuyến khích tiết kiệm, không lãng phí thức ăn.'},
     {zh:'学校大力提倡学生多读书、多运动。',py:'Xuéxiào dàlì tíchàng xuésheng duō dú shū, duō yùndòng.',vn:'Nhà trường ra sức khuyến khích học sinh đọc nhiều sách, vận động nhiều.'}
   ],
   colloFull:[
     {zh:'提倡节约',py:'tíchàng jiéyuē',vn:'khuyến khích tiết kiệm'},
     {zh:'提倡戒烟',py:'tíchàng jiè yān',vn:'khuyến khích bỏ thuốc'},
     {zh:'大力提倡',py:'dàlì tíchàng',vn:'ra sức đề xướng'},
     {zh:'积极地提倡',py:'jījí de tíchàng',vn:'tích cực đề xướng'},
     {zh:'提倡平等',py:'tíchàng píngděng',vn:'đề cao bình đẳng'}
   ],
   patterns:[
     {s:'提倡 + N / V (节约 / 戒烟)',m:'Khuyến khích, đề cao …'},
     {s:'大力 / 积极地 + 提倡',m:'Ra sức / tích cực đề xướng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà trường khuyến khích học sinh không chỉ học giỏi mà còn phải chăm vận động.',answer:'学校提倡学生不仅要学好，也要多运动。',answerPy:'Xuéxiào tíchàng xuésheng bùjǐn yào xuéhǎo, yě yào duō yùndòng.',
      note:'提倡 + người + V: khuyến khích ai làm gì.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Quán ăn khuyến khích “ăn sạch đĩa” càng ngày càng nhiều.',answer:'提倡“光盘”的饭馆越来越多了。',answerPy:'Tíchàng “guāngpán” de fànguǎn yuè lái yuè duō le.',
      note:'Cụm 提倡…… làm định ngữ cho 饭馆.',pair:'越来越……'}
   ]},

  {n:31,zh:'步骤',py:'bùzhòu',pos:'Danh từ',vn:'bước (trình tự)',hv:'bộ sậu',em:'🪜',lesson:1,
   explain:['Các bước, trình tự tiến hành một việc.'],
   usage:'重要的步骤 / 第一个步骤 / 按(照)步骤 / 分步骤进行 / 说明书上的步骤.',
   collo:['重要的步骤','按照步骤','分步骤进行','说明书上的步骤'],
   ex_zh:'我们常常只顾低头拉车，却少了抬头看路，少了思考、总结这一重要的步骤。',ex_py:'Wǒmen chángcháng zhǐ gù dī tóu lā chē, què shǎole tái tóu kàn lù, shǎole sīkǎo, zǒngjié zhè yí zhòngyào de bùzhòu.',ex_vn:'Chúng ta thường chỉ lo cúi đầu kéo xe, lại thiếu việc ngẩng đầu nhìn đường, thiếu bước quan trọng là suy nghĩ, tổng kết.',
   exList:[
     {zh:'我们常常只顾低头拉车，却少了抬头看路，少了思考、总结这一重要的步骤。',py:'Wǒmen chángcháng zhǐ gù dī tóu lā chē, què shǎole tái tóu kàn lù, shǎole sīkǎo, zǒngjié zhè yí zhòngyào de bùzhòu.',vn:'Chúng ta thường chỉ lo cúi đầu kéo xe, lại thiếu việc ngẩng đầu nhìn đường, thiếu bước quan trọng là suy nghĩ, tổng kết.'},
     {zh:'你是按说明书上的步骤安装的吗？',py:'Nǐ shì àn shuōmíngshū shang de bùzhòu ānzhuāng de ma?',vn:'Cậu có lắp theo các bước trong sách hướng dẫn không?'},
     {zh:'做实验要按照步骤一步一步来。',py:'Zuò shíyàn yào ànzhào bùzhòu yí bù yí bù lái.',vn:'Làm thí nghiệm phải theo các bước, từng bước một.'}
   ],
   colloFull:[
     {zh:'重要的步骤',py:'zhòngyào de bùzhòu',vn:'bước quan trọng'},
     {zh:'按照步骤',py:'ànzhào bùzhòu',vn:'theo các bước'},
     {zh:'分步骤进行',py:'fēn bùzhòu jìnxíng',vn:'tiến hành theo từng bước'},
     {zh:'说明书上的步骤',py:'shuōmíngshū shang de bùzhòu',vn:'các bước trong sách hướng dẫn'},
     {zh:'第一个步骤',py:'dì-yī ge bùzhòu',vn:'bước đầu tiên'}
   ],
   patterns:[
     {s:'按(照) + 步骤 + V',m:'Làm … theo các bước'},
     {s:'……这一重要的步骤',m:'Bước quan trọng là … (đồng vị ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi làm theo các bước trong sách hướng dẫn mà vẫn không lắp được.',answer:'我是按说明书上的步骤做的，可还是装不上。',answerPy:'Wǒ shì àn shuōmíngshū shang de bùzhòu zuò de, kě háishi zhuāng bu shàng.',
      note:'是……的 nhấn mạnh cách làm (按步骤).',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần làm theo các bước thì sẽ không sai.',answer:'只要按照步骤做，就不会出错。',answerPy:'Zhǐyào ànzhào bùzhòu zuò, jiù bú huì chūcuò.',
      note:'按照步骤 làm trạng ngữ trước động từ.',pair:'只要……就……'}
   ]},

  {n:32,zh:'闭关',py:'bìguān',pos:'Động từ',vn:'bế quan, tịnh cư',hv:'bế quan',em:'🚪',lesson:1,
   explain:['Nghĩa gốc: đóng cửa ải — 闭关锁国 (bế quan toả cảng).','Nghĩa trong bài: ở một mình một thời gian, không tiếp xúc với ai để suy nghĩ, học tập, tu luyện.'],
   usage:'进行闭关 / 为期一周的闭关 / 闭关一周 / 闭关读书 / 闭关锁国.',
   collo:['闭关一周','为期一周的闭关','闭关读书','闭关锁国'],
   ex_zh:'从20世纪80年代起，比尔·盖茨每年都要进行两次为期一周的“闭关”。',ex_py:'Cóng èrshí shìjì bāshí niándài qǐ, Bǐ\'ěr Gàicí měi nián dōu yào jìnxíng liǎng cì wéiqī yì zhōu de “bìguān”.',ex_vn:'Từ thập niên 80 của thế kỷ 20, mỗi năm Bill Gates đều “bế quan” hai lần, mỗi lần kéo dài một tuần.',
   exList:[
     {zh:'从20世纪80年代起，比尔·盖茨每年都要进行两次为期一周的“闭关”。',py:'Cóng èrshí shìjì bāshí niándài qǐ, Bǐ\'ěr Gàicí měi nián dōu yào jìnxíng liǎng cì wéiqī yì zhōu de “bìguān”.',vn:'Từ thập niên 80 của thế kỷ 20, mỗi năm Bill Gates đều “bế quan” hai lần, mỗi lần kéo dài một tuần.'},
     {zh:'考试前，哥哥决定闭关一周，好好复习。',py:'Kǎoshì qián, gēge juédìng bìguān yì zhōu, hǎohǎo fùxí.',vn:'Trước kỳ thi, anh trai quyết định “bế quan” một tuần để ôn tập cho tốt.'}
   ],
   colloFull:[
     {zh:'闭关一周',py:'bìguān yì zhōu',vn:'bế quan một tuần'},
     {zh:'为期一周的闭关',py:'wéiqī yì zhōu de bìguān',vn:'đợt bế quan kéo dài một tuần'},
     {zh:'闭关读书',py:'bìguān dú shū',vn:'đóng cửa đọc sách'},
     {zh:'闭关锁国',py:'bìguān suǒ guó',vn:'bế quan toả cảng'}
   ],
   patterns:[
     {s:'进行 + 为期 + thời gian + 的闭关',m:'Tiến hành đợt bế quan kéo dài …'},
     {s:'闭关 + thời gian',m:'Bế quan bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mỗi năm Bill Gates đều tự nhốt mình trong một căn nhà để “bế quan”.',answer:'比尔·盖茨每年都把自己关在一所房子里“闭关”。',answerPy:'Bǐ\'ěr Gàicí měi nián dōu bǎ zìjǐ guān zài yì suǒ fángzi li “bìguān”.',
      note:'把自己关在 + nơi chốn: câu 把 với bổ ngữ 在.',pair:'把'},
     {promptLang:'vi',prompt:'Trước kỳ thi anh tôi bế quan một tuần, ngay cả điện thoại cũng không xem.',answer:'考试前哥哥闭关了一周，连手机都不看。',answerPy:'Kǎoshì qián gēge bìguānle yì zhōu, lián shǒujī dōu bú kàn.',
      note:'闭关 + 了 + thời lượng.',pair:'连……都……'}
   ]},

  {n:33,zh:'一律',py:'yílǜ',pos:'Phó từ',vn:'nhất loạt, hết thảy',hv:'nhất luật',em:'🚫',lesson:1,
   explain:['Tất cả đều như nhau, không có ngoại lệ. Hay dùng trong quy định, thông báo — sắc thái trang trọng.'],
   usage:'一律 + (不 / 不准 / 免费 / 无效 / 打折…): 一律不见, 一律不准, 一律5折. Khác 都: 一律 nhấn mạnh “không trừ ai / cái gì”, chỉ dùng cho người / vật số nhiều, cả loại; không nói về trạng thái tự nhiên (✗ 大家一律很高兴).',
   collo:['一律不见','一律不准','一律免费','一律无效'],
   ex_zh:'包括家人在内的任何人他都一律不见。',ex_py:'Bāokuò jiārén zài nèi de rènhé rén tā dōu yílǜ bú jiàn.',ex_vn:'Bất kỳ ai, kể cả người nhà, ông ấy đều không gặp.',
   exList:[
     {zh:'包括家人在内的任何人他都一律不见。',py:'Bāokuò jiārén zài nèi de rènhé rén tā dōu yílǜ bú jiàn.',vn:'Bất kỳ ai, kể cả người nhà, ông ấy đều không gặp.'},
     {zh:'按规定，小动物一律不准带上飞机。',py:'Àn guīdìng, xiǎo dòngwù yílǜ bù zhǔn dàishang fēijī.',vn:'Theo quy định, động vật nhỏ nhất loạt không được mang lên máy bay.'},
     {zh:'用铅笔书写的答卷一律无效。',py:'Yòng qiānbǐ shūxiě de dájuàn yílǜ wúxiào.',vn:'Bài thi viết bằng bút chì đều không có hiệu lực.'}
   ],
   colloFull:[
     {zh:'一律不见',py:'yílǜ bú jiàn',vn:'không gặp bất kỳ ai'},
     {zh:'一律不准',py:'yílǜ bù zhǔn',vn:'nhất loạt không được phép'},
     {zh:'一律免费',py:'yílǜ miǎnfèi',vn:'đều miễn phí'},
     {zh:'一律无效',py:'yílǜ wúxiào',vn:'đều không có hiệu lực'},
     {zh:'一律五折',py:'yílǜ wǔ zhé',vn:'đồng loạt giảm 50%'}
   ],
   patterns:[
     {s:'（按规定），N + 一律 + 不准 / 不 + V',m:'Nhất loạt không được …'},
     {s:'任何人 + 都一律……',m:'Bất kỳ ai cũng đều … (không ngoại lệ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Điện thoại mang vào phòng thi đều bị thu hết.',answer:'带进考场的手机一律被收走了。',answerPy:'Dàijìn kǎochǎng de shǒujī yílǜ bèi shōuzǒu le.',
      note:'一律 đứng trước cụm 被.',pair:'被'},
     {promptLang:'vi',prompt:'Nếu đến muộn quá 15 phút thì nhất loạt không được vào phòng thi.',answer:'如果迟到超过十五分钟，就一律不准进考场。',answerPy:'Rúguǒ chídào chāoguò shíwǔ fēnzhōng, jiù yílǜ bù zhǔn jìn kǎochǎng.',
      note:'Giọng quy định: 一律不准.',pair:'如果……就……'}
   ]},

  {n:34,zh:'寂寞',py:'jìmò',pos:'Tính từ',vn:'cô đơn, cô độc',hv:'tịch mịch',em:'🌙',lesson:1,
   explain:['Cô đơn, buồn vì chỉ có một mình, không ai trò chuyện.','Còn tả nơi chốn vắng lặng, hiu quạnh.'],
   usage:'感到寂寞 / 寂寞的 + 朋友 / 年代 / 感觉 / 心情 (bảng 搭配); 令人寂寞难耐.',
   collo:['寂寞的心情','感到寂寞','寂寞难耐','寂寞的感觉'],
   ex_zh:'盖茨的这种令人寂寞难耐的“闭关”不只是一种休息方式。',ex_py:'Gàicí de zhè zhǒng lìng rén jìmò nánnài de “bìguān” bù zhǐ shì yì zhǒng xiūxi fāngshì.',ex_vn:'Kiểu “bế quan” cô đơn khó chịu nổi này của Gates không chỉ là một cách nghỉ ngơi.',
   exList:[
     {zh:'盖茨的这种令人寂寞难耐的“闭关”不只是一种休息方式。',py:'Gàicí de zhè zhǒng lìng rén jìmò nánnài de “bìguān” bù zhǐ shì yì zhǒng xiūxi fāngshì.',vn:'Kiểu “bế quan” cô đơn khó chịu nổi này của Gates không chỉ là một cách nghỉ ngơi.'},
     {zh:'她有些寂寞，想让我到她那儿陪她聊聊天。',py:'Tā yǒuxiē jìmò, xiǎng ràng wǒ dào tā nàr péi tā liáoliao tiān.',vn:'Cô ấy hơi cô đơn, muốn tôi đến chỗ cô ấy trò chuyện cùng.'},
     {zh:'一个人在国外留学，有时候会感到很寂寞。',py:'Yí ge rén zài guówài liúxué, yǒu shíhou huì gǎndào hěn jìmò.',vn:'Một mình du học ở nước ngoài, có lúc sẽ cảm thấy rất cô đơn.'}
   ],
   colloFull:[
     {zh:'寂寞的心情',py:'jìmò de xīnqíng',vn:'tâm trạng cô đơn'},
     {zh:'感到寂寞',py:'gǎndào jìmò',vn:'cảm thấy cô đơn'},
     {zh:'寂寞难耐',py:'jìmò nánnài',vn:'cô đơn khó chịu nổi'},
     {zh:'寂寞的感觉',py:'jìmò de gǎnjué',vn:'cảm giác cô đơn'},
     {zh:'寂寞的朋友',py:'jìmò de péngyou',vn:'người bạn cô đơn'}
   ],
   patterns:[
     {s:'感到 / 觉得 + (很) 寂寞',m:'Cảm thấy cô đơn'},
     {s:'令人 + 寂寞难耐',m:'Khiến người ta cô đơn khó chịu nổi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi con cái đi làm xa, bà càng ngày càng cô đơn.',answer:'孩子们去外地工作以后，奶奶越来越寂寞了。',answerPy:'Háizimen qù wàidì gōngzuò yǐhòu, nǎinai yuè lái yuè jìmò le.',
      note:'越来越 + 寂寞 + 了.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần có sách để đọc thì tôi không cảm thấy cô đơn.',answer:'只要有书看，我就不会感到寂寞。',answerPy:'Zhǐyào yǒu shū kàn, wǒ jiù bú huì gǎndào jìmò.',
      note:'感到 + 寂寞.',pair:'只要……就……'}
   ]},

  {n:35,zh:'效率',py:'xiàolǜ',pos:'Danh từ',vn:'năng suất, hiệu suất',hv:'hiệu suất',em:'⚡',lesson:1,
   explain:['Lượng công việc hoàn thành trong một đơn vị thời gian; mức độ hiệu quả khi làm việc, học tập.'],
   usage:'效率高 / 效率低 / 提高效率 / 高效率 / 工作效率 / 学习效率. Chú ý 率 đọc lǜ (không đọc shuài như 率领).',
   collo:['提高效率','工作效率','高效率','效率很低'],
   ex_zh:'盖茨的“闭关”更是一种高效率的工作方式。',ex_py:'Gàicí de “bìguān” gèng shì yì zhǒng gāo xiàolǜ de gōngzuò fāngshì.',ex_vn:'“Bế quan” của Gates càng là một cách làm việc hiệu suất cao.',
   exList:[
     {zh:'盖茨的“闭关”更是一种高效率的工作方式。',py:'Gàicí de “bìguān” gèng shì yì zhǒng gāo xiàolǜ de gōngzuò fāngshì.',vn:'“Bế quan” của Gates càng là một cách làm việc hiệu suất cao.'},
     {zh:'你要注意培养他的专注力，要提高效率。',py:'Nǐ yào zhùyì péiyǎng tā de zhuānzhùlì, yào tígāo xiàolǜ.',vn:'Anh phải chú ý rèn khả năng tập trung cho cháu, phải nâng cao hiệu suất.'},
     {zh:'晚上睡不好，第二天的学习效率就很低。',py:'Wǎnshang shuì bu hǎo, dì-èr tiān de xuéxí xiàolǜ jiù hěn dī.',vn:'Tối ngủ không ngon thì hiệu quả học tập hôm sau rất thấp.'}
   ],
   colloFull:[
     {zh:'提高效率',py:'tígāo xiàolǜ',vn:'nâng cao hiệu suất'},
     {zh:'工作效率',py:'gōngzuò xiàolǜ',vn:'hiệu suất công việc'},
     {zh:'高效率',py:'gāo xiàolǜ',vn:'hiệu suất cao'},
     {zh:'效率很低',py:'xiàolǜ hěn dī',vn:'hiệu suất rất thấp'},
     {zh:'学习效率',py:'xuéxí xiàolǜ',vn:'hiệu quả học tập'}
   ],
   patterns:[
     {s:'提高 + (工作 / 学习) + 效率',m:'Nâng cao hiệu suất …'},
     {s:'效率 + 高 / 低',m:'Hiệu suất cao / thấp (không nói 效率很好)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Làm việc có kế hoạch thì hiệu suất sẽ càng ngày càng cao.',answer:'做事有计划，效率就会越来越高。',answerPy:'Zuò shì yǒu jìhuà, xiàolǜ jiù huì yuè lái yuè gāo.',
      note:'效率 đi với 高 / 低.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Vừa chơi điện thoại vừa học thì hiệu quả học tập rất thấp.',answer:'一边玩手机一边学习，学习效率很低。',answerPy:'Yìbiān wán shǒujī yìbiān xuéxí, xuéxí xiàolǜ hěn dī.',
      note:'学习效率 = hiệu quả học tập.',pair:'一边……一边……'}
   ]},

  {n:36,zh:'印加',py:'Yìnjiā',pos:'Danh từ riêng',vn:'Inca (đế chế lớn nhất châu Mỹ trước Columbus)',hv:'Ấn Gia',em:'🏔️',lesson:1,
   explain:['Đế chế Inca — đế chế lớn nhất châu Mỹ trước khi Columbus đến, ở vùng núi Andes, Nam Mỹ (nay chủ yếu thuộc Peru). Di tích nổi tiếng: Machu Picchu (ảnh trong sách).'],
   usage:'印加文明 / 印加帝国 / 印加人.',
   collo:['印加文明','印加帝国','印加人'],
   ex_zh:'大导演到南美丛林拍有关古代印加文明的纪录片。',ex_py:'Dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',ex_vn:'Vị đạo diễn lớn đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại.',
   exList:[
     {zh:'大导演到南美丛林拍有关古代印加文明的纪录片。',py:'Dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn.',vn:'Vị đạo diễn lớn đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại.'},
     {zh:'我在书上看到过印加帝国的故事。',py:'Wǒ zài shū shang kàndàoguo Yìnjiā dìguó de gùshi.',vn:'Tôi từng đọc câu chuyện về đế chế Inca trong sách.'}
   ],
   colloFull:[
     {zh:'印加文明',py:'Yìnjiā wénmíng',vn:'văn minh Inca'},
     {zh:'印加帝国',py:'Yìnjiā dìguó',vn:'đế chế Inca'},
     {zh:'印加人',py:'Yìnjiārén',vn:'người Inca'}
   ],
   patterns:[
     {s:'有关 + 印加文明 + 的 + N',m:'… về văn minh Inca'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bộ phim tài liệu về văn minh Inca này là do ông ấy quay.',answer:'这部有关印加文明的纪录片是他拍的。',answerPy:'Zhè bù yǒuguān Yìnjiā wénmíng de jìlùpiàn shì tā pāi de.',
      note:'有关……的 + N: … về ….',pair:'是……的'},
     {promptLang:'vi',prompt:'Tôi chưa từng đến Nam Mỹ xem di tích Inca.',answer:'我从来没去南美看过印加古迹。',answerPy:'Wǒ cónglái méi qù Nánměi kànguo Yìnjiā gǔjì.',
      note:'Câu liên động: 过 đặt sau động từ cuối (看过).',pair:'从来没……过'}
   ]},

  {n:37,zh:'比尔·盖茨',py:'Bǐ\'ěr Gàicí',pos:'Danh từ riêng',vn:'Bill Gates',hv:'Tỉ Nhĩ Cái Từ',em:'💻',lesson:1,
   explain:['Bill Gates — người sáng lập hãng phần mềm Microsoft (微软), từng nhiều năm là người giàu nhất thế giới. Tên người nước ngoài phiên âm, giữa tên và họ có dấu chấm giữa “·”.'],
   usage:'Gọi đầy đủ 比尔·盖茨, gọi tắt bằng họ: 盖茨.',
   collo:['比尔·盖茨的“闭关”','微软创始人比尔·盖茨','盖茨'],
   ex_zh:'从20世纪80年代起，比尔·盖茨每年都要进行两次为期一周的“闭关”。',ex_py:'Cóng èrshí shìjì bāshí niándài qǐ, Bǐ\'ěr Gàicí měi nián dōu yào jìnxíng liǎng cì wéiqī yì zhōu de “bìguān”.',ex_vn:'Từ thập niên 80 của thế kỷ 20, mỗi năm Bill Gates đều “bế quan” hai lần, mỗi lần một tuần.',
   exList:[
     {zh:'从20世纪80年代起，比尔·盖茨每年都要进行两次为期一周的“闭关”。',py:'Cóng èrshí shìjì bāshí niándài qǐ, Bǐ\'ěr Gàicí měi nián dōu yào jìnxíng liǎng cì wéiqī yì zhōu de “bìguān”.',vn:'Từ thập niên 80 của thế kỷ 20, mỗi năm Bill Gates đều “bế quan” hai lần, mỗi lần một tuần.'},
     {zh:'比尔·盖茨是微软公司的创始人。',py:'Bǐ\'ěr Gàicí shì Wēiruǎn gōngsī de chuàngshǐrén.',vn:'Bill Gates là người sáng lập công ty Microsoft.'}
   ],
   colloFull:[
     {zh:'比尔·盖茨的“闭关”',py:'Bǐ\'ěr Gàicí de “bìguān”',vn:'việc “bế quan” của Bill Gates'},
     {zh:'微软创始人比尔·盖茨',py:'Wēiruǎn chuàngshǐrén Bǐ\'ěr Gàicí',vn:'Bill Gates, người sáng lập Microsoft'},
     {zh:'盖茨',py:'Gàicí',vn:'Gates (gọi tắt)'}
   ],
   patterns:[
     {s:'名 + · + 姓',m:'Tên người nước ngoài: tên trước, họ sau, giữa có “·”'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bill Gates không chỉ là doanh nhân mà còn là nhà từ thiện.',answer:'比尔·盖茨不仅是企业家，也是慈善家。',answerPy:'Bǐ\'ěr Gàicí bùjǐn shì qǐyèjiā, yě shì císhànjiā.',
      note:'不仅是……，也是……: hai thân phận song song.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Cách “bế quan” của Bill Gates được rất nhiều người học theo.',answer:'比尔·盖茨的“闭关”被很多人学习。',answerPy:'Bǐ\'ěr Gàicí de “bìguān” bèi hěn duō rén xuéxí.',
      note:'被 + 很多人 + V.',pair:'被'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 你属于哪一种“忙” (731 chữ, tr. 71–73)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene:'课文 · 你属于哪一种“忙”',
    preQuiz:[
      {q:'作者把工作中的忙碌分为几种？',opts:['三种','两种','四种'],ans:0},
      {q:'第一种忙的人，几乎成了什么？',opts:['工作的主人','工作的奴隶','成功的人'],ans:1},
      {q:'第三种忙的人为什么总是想办法让自己忙？',opts:['因为工作太多','因为老板要求','因为他们把忙与成功联系到一起'],ans:2},
      {q:'作者认为，时时反省、总结可以使我们怎么样？',opts:['不会在错误的道路上走得太远','马上找到正确的道路','不再忙碌'],ans:0},
      {q:'大导演去南美丛林做什么？',opts:['旅游','拍有关古代印加文明的纪录片','找投资人'],ans:1},
      {q:'大导演雇了多少当地人？',opts:['两个','二百来个','二十来个'],ans:2},
      {q:'前三天，当地人表现得怎么样？',opts:['个个都表现出色','走得很慢','常常休息'],ans:0},
      {q:'第四天，当地人做了什么？',opts:['一早就催大导演上路','拒绝行动','离开了丛林'],ans:1},
      {q:'大导演为什么非常着急？',opts:['当地人生病了','行李丢了','会耽误时间，还会让投资人不高兴'],ans:2},
      {q:'当地人自古有什么习俗？',opts:['每走上三天，便要休息一天','每天只走半天','晚上不赶路'],ans:0},
      {q:'当地人休息是为了什么？',opts:['让身体恢复力气','让灵魂追得上疲劳的身体','等待投资人'],ans:1},
      {q:'比尔·盖茨“闭关”的时候怎么做？',opts:['和家人一起去旅游','每天只工作半天','把自己关在房子里，任何人都不见'],ans:2}
    ],
    lines:[
      {
        sp:0,
        zh:'工作中的忙碌大概可以分为三种：第一种忙，忙得很被动，总是被事情追着、赶着，人几乎成了工作的奴隶；第二种忙，忙得很主动，忙而不乱，人是工作的主人；第三种忙，忙得有些虚伪，因为在他们的思想中，已经把忙与成功、闲与失败联系到一起，所以，这样的人总是想办法让自己忙。',
        py:'Gōngzuò zhōng de mánglù dàgài kěyǐ fēnwéi sān zhǒng: dì-yī zhǒng máng, máng de hěn bèidòng, zǒngshì bèi shìqing zhuīzhe, gǎnzhe, rén jīhū chéngle gōngzuò de núlì; dì-èr zhǒng máng, máng de hěn zhǔdòng, máng ér bú luàn, rén shì gōngzuò de zhǔrén; dì-sān zhǒng máng, máng de yǒuxiē xūwěi, yīnwèi zài tāmen de sīxiǎng zhōng, yǐjīng bǎ máng yǔ chénggōng, xián yǔ shībài liánxì dào yìqǐ, suǒyǐ, zhèyàng de rén zǒngshì xiǎng bànfǎ ràng zìjǐ máng.',
        vn:'Sự bận rộn trong công việc đại khái có thể chia làm ba loại: loại bận thứ nhất là bận một cách bị động, lúc nào cũng bị công việc đuổi theo, dồn ép, con người gần như trở thành nô lệ của công việc; loại bận thứ hai là bận một cách chủ động, bận mà không rối, con người là chủ nhân của công việc; loại bận thứ ba là bận có phần giả tạo, vì trong suy nghĩ của họ đã gắn bận rộn với thành công, nhàn rỗi với thất bại, cho nên những người này lúc nào cũng tìm cách làm cho mình bận.'
      },
      {
        sp:0,
        zh:'你属于哪种忙呢？',
        py:'Nǐ shǔyú nǎ zhǒng máng ne?',
        vn:'Bạn thuộc loại bận nào?'
      },
      {
        sp:0,
        zh:'我有一个体会：现实中，我们不一定知道正确的道路是什么，但时时反省、总结，却可以使我们不会在错误的道路上走得太远。',
        py:'Wǒ yǒu yí ge tǐhuì: xiànshí zhōng, wǒmen bù yídìng zhīdào zhèngquè de dàolù shì shénme, dàn shíshí fǎnxǐng, zǒngjié, què kěyǐ shǐ wǒmen bú huì zài cuòwù de dàolù shang zǒu de tài yuǎn.',
        vn:'Tôi có một điều tâm đắc: trong thực tế, chúng ta chưa chắc đã biết con đường đúng là gì, nhưng thường xuyên tự kiểm điểm, tổng kết thì lại có thể giúp ta không đi quá xa trên con đường sai.'
      },
      {
        sp:0,
        zh:'据说，曾经有一位很有个性、极爱冒险的大导演到南美丛林拍有关古代印加文明的纪录片。他雇了20来个当地人为他带路和搬运行李。这批当地人个个都表现出色，尽管他们背着重重的行李，但他们的脚力过人，健步如飞。一连三天，他们都很顺利地实现了原定的计划。到了第四天，大导演一早醒来就催着大家上路。然而，当地人却拒绝行动。大导演非常着急，一来，耽误了时间，日程就得重新安排；二来，会因为费用增加而让投资人不高兴，至于这部影片的投资人，可是一位大人物，他可不敢得罪。经过沟通，大导演总算搞明白了，当地人自古就有一种习俗：在赶路时，用尽全力地向前冲，但每走上三天，便要休息一天。当大导演进一步询问原因时，当地人的回答令他受益终生。',
        py:'Jùshuō, céngjīng yǒu yí wèi hěn yǒu gèxìng, jí ài màoxiǎn de dà dǎoyǎn dào Nánměi cónglín pāi yǒuguān gǔdài Yìnjiā wénmíng de jìlùpiàn. Tā gùle èrshí lái ge dāngdìrén wèi tā dài lù hé bānyùn xíngli. Zhè pī dāngdìrén gègè dōu biǎoxiàn chūsè, jǐnguǎn tāmen bēizhe zhòngzhòng de xíngli, dàn tāmen de jiǎolì guòrén, jiànbù-rúfēi. Yìlián sān tiān, tāmen dōu hěn shùnlì de shíxiànle yuándìng de jìhuà. Dàole dì-sì tiān, dà dǎoyǎn yìzǎo xǐnglai jiù cuīzhe dàjiā shàng lù. Rán\'ér, dāngdìrén què jùjué xíngdòng. Dà dǎoyǎn fēicháng zháojí, yī lái, dānwùle shíjiān, rìchéng jiù děi chóngxīn ānpái; èr lái, huì yīnwèi fèiyong zēngjiā ér ràng tóuzīrén bù gāoxìng, zhìyú zhè bù yǐngpiàn de tóuzīrén, kě shì yí wèi dà rénwù, tā kě bù gǎn dézuì. Jīngguò gōutōng, dà dǎoyǎn zǒngsuàn gǎo míngbai le, dāngdìrén zìgǔ jiù yǒu yì zhǒng xísú: zài gǎn lù shí, yòngjìn quánlì de xiàng qián chōng, dàn měi zǒushang sān tiān, biàn yào xiūxi yì tiān. Dāng dà dǎoyǎn jìnyíbù xúnwèn yuányīn shí, dāngdìrén de huídá lìng tā shòuyì zhōngshēng.',
        vn:'Nghe nói, từng có một đạo diễn lớn rất có cá tính, cực kỳ thích mạo hiểm, đến rừng rậm Nam Mỹ quay phim tài liệu về nền văn minh Inca cổ đại. Ông thuê khoảng hai mươi người địa phương dẫn đường và khuân vác hành lý cho mình. Tốp người địa phương này ai nấy đều thể hiện xuất sắc: tuy cõng hành lý nặng trĩu nhưng sức chân của họ hơn người, bước đi thoăn thoắt như bay. Ba ngày liền, họ đều thuận lợi hoàn thành kế hoạch đã định. Sang ngày thứ tư, vị đạo diễn lớn vừa thức dậy từ sáng sớm đã giục mọi người lên đường. Thế nhưng, những người địa phương lại từ chối đi. Vị đạo diễn vô cùng sốt ruột: một là, lỡ mất thời gian thì lịch trình phải sắp xếp lại; hai là, chi phí tăng sẽ làm nhà đầu tư không vui — mà nhà đầu tư của bộ phim này lại là một nhân vật lớn, ông không dám làm phật lòng. Qua trao đổi, vị đạo diễn cuối cùng cũng hiểu ra: người địa phương từ xưa đã có một tập tục — khi đi đường thì dốc hết sức lao về phía trước, nhưng cứ đi được ba ngày thì phải nghỉ một ngày. Khi vị đạo diễn hỏi kỹ thêm nguyên nhân, câu trả lời của người địa phương khiến ông được lợi suốt đời.'
      },
      {
        sp:0,
        zh:'“那是为了让我们的灵魂，能够追得上我们赶了三天路的疲劳的身体。”',
        py:'“Nà shì wèile ràng wǒmen de línghún, nénggòu zhuī de shàng wǒmen gǎnle sān tiān lù de píláo de shēntǐ.”',
        vn:'“Đó là để linh hồn của chúng tôi có thể theo kịp cơ thể mệt mỏi đã đi đường suốt ba ngày.”'
      },
      {
        sp:0,
        zh:'多么富有哲理的话！在这个提倡和鼓励竞争的时代，我们常常只顾低头拉车，却少了抬头看路，少了思考、总结这一重要的步骤。',
        py:'Duōme fùyǒu zhélǐ de huà! Zài zhège tíchàng hé gǔlì jìngzhēng de shídài, wǒmen chángcháng zhǐ gù dī tóu lā chē, què shǎole tái tóu kàn lù, shǎole sīkǎo, zǒngjié zhè yí zhòngyào de bùzhòu.',
        vn:'Một câu nói giàu triết lý biết bao! Trong thời đại đề cao và khuyến khích cạnh tranh này, chúng ta thường chỉ lo cúi đầu kéo xe, mà thiếu đi việc ngẩng đầu nhìn đường, thiếu đi bước quan trọng là suy nghĩ, tổng kết.'
      },
      {
        sp:0,
        zh:'从20世纪80年代起，比尔·盖茨每年都要进行两次为期一周的“闭关”。在这一周的时间里，他会把自己关在一所房子里，包括家人在内的任何人他都一律不见，使自己完全不受日常工作的打扰。盖茨的这种令人寂寞难耐的“闭关”不只是一种休息方式，更是一种高效率的工作方式。',
        py:'Cóng èrshí shìjì bāshí niándài qǐ, Bǐ\'ěr Gàicí měi nián dōu yào jìnxíng liǎng cì wéiqī yì zhōu de “bìguān”. Zài zhè yì zhōu de shíjiān li, tā huì bǎ zìjǐ guān zài yì suǒ fángzi li, bāokuò jiārén zài nèi de rènhé rén tā dōu yílǜ bú jiàn, shǐ zìjǐ wánquán bú shòu rìcháng gōngzuò de dǎrǎo. Gàicí de zhè zhǒng lìng rén jìmò nánnài de “bìguān” bù zhǐ shì yì zhǒng xiūxi fāngshì, gèng shì yì zhǒng gāo xiàolǜ de gōngzuò fāngshì.',
        vn:'Từ thập niên 80 của thế kỷ 20, mỗi năm Bill Gates đều tiến hành hai đợt “bế quan”, mỗi đợt kéo dài một tuần. Trong một tuần ấy, ông tự nhốt mình trong một căn nhà, bất kỳ ai, kể cả người nhà, ông đều không gặp, để bản thân hoàn toàn không bị công việc thường ngày quấy rầy. Kiểu “bế quan” khiến người ta cô đơn khó chịu nổi này của Gates không chỉ là một cách nghỉ ngơi, mà còn là một cách làm việc hiệu suất cao.'
      },
      {
        sp:0,
        zh:'忙碌的人们，请多给自己一点思考的时间吧。',
        py:'Mánglù de rénmen, qǐng duō gěi zìjǐ yìdiǎn sīkǎo de shíjiān ba.',
        vn:'Hỡi những con người bận rộn, hãy dành cho mình thêm chút thời gian để suy nghĩ nhé.'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 总算/终于 là cặp 词语辨析 của sách (tr. 76) + 2 cặp tự thêm (từ bài tập 2 của sách)
// ══════════════════════════════════════════
var synonymData = [
  {
    pair:'总算 — 终于',
    same:'Đều là phó từ, đều biểu thị sau một thời gian khá dài thay đổi hoặc chờ đợi thì một tình huống nào đó đã xuất hiện — “cuối cùng thì …”. Khi kết quả là điều mong muốn, phần lớn dùng được cả hai.',
    sameEx:{zh:'这青年后来努力学艺，总算／终于有了一点儿小名气。',vn:'Chàng trai ấy về sau chăm chỉ học nghề, cuối cùng cũng có chút tiếng tăm.'},
    items:[
      {
        word:'总算',
        points:[
          'Kết quả thường là điều MONG MUỐN, hàm ý nhẹ nhõm “cuối cùng cũng …”.',
          'Còn có nghĩa “nói chung cũng tạm được, dù sao cũng coi là”: 总算不错了.',
          'Mang sắc thái khẩu ngữ, cảm xúc của người nói.'
        ],
        ex:[
          {zh:'到北京的第二年，我总算找到了一份比较满意的工作。',vn:'Năm thứ hai ở Bắc Kinh, tôi cuối cùng cũng tìm được một công việc khá ưng ý.'},
          {zh:'他才学了半年外语，能说成这样，总算不错了。',vn:'Cậu ấy mới học ngoại ngữ nửa năm mà nói được thế này, cũng coi là khá rồi.'}
        ]
      },
      {
        word:'终于',
        points:[
          'Kết quả phần lớn là điều mong muốn, NHƯNG cũng có thể là điều không như ý: 终于还是发生了.',
          'Không có nghĩa “tạm được, cũng coi là”.',
          'Dùng được cả trong văn viết trang trọng.'
        ],
        ex:[
          {zh:'尽管他也很想去，但他终于还是放弃了留学的打算。',vn:'Tuy anh ấy cũng rất muốn đi, nhưng rốt cuộc vẫn từ bỏ ý định du học.'},
          {zh:'可让我担心的事终于还是发生了。',vn:'Thế mà chuyện tôi lo lắng cuối cùng vẫn xảy ra.'}
        ]
      }
    ],
    quiz:[
      {sentence:'他多次想告诉她，但＿＿没说出口。',options:['总算','终于'],answer:1,why:'Kết quả KHÔNG như ý (rốt cuộc vẫn không nói) → chỉ dùng 终于.'},
      {sentence:'可让我担心的事＿＿还是发生了。',options:['总算','终于'],answer:1,why:'Điều lo lắng xảy ra là không mong muốn → 终于. 总算 chỉ dùng cho điều mong muốn.'},
      {sentence:'整整一个星期没出门，我＿＿把这几本厚厚的书读完了。',options:['总算','终于'],answer:0,both:true,why:'Kết quả mong muốn sau thời gian dài → cả 总算 lẫn 终于 đều được.'},
      {sentence:'他才学了半年外语，能说成这样，＿＿不错了。',options:['总算','终于'],answer:0,why:'Nghĩa “nói chung cũng tạm được” → chỉ 总算.'}
    ],
    sgk:{
      chung:{t:'都是副词，都有表示经过较长时间的变化或等待以后出现了某种情况的意思。',vn:'Đều là phó từ, đều có nghĩa sau một thời gian khá dài thay đổi hoặc chờ đợi thì xuất hiện một tình huống nào đó.',vd:'这青年后来努力学艺，总算／终于有了一点儿小名气。',vdVn:'Chàng trai ấy về sau chăm chỉ học nghề, cuối cùng cũng có chút tiếng tăm.'},
      khac:[
        {
          a:{t:'事情的结果一般都是希望发生的情况。',vn:'Kết quả của sự việc thường là tình huống mong muốn xảy ra.',vd:'到北京的第二年，我总算找到了一份比较满意的工作。',vdVn:'Năm thứ hai ở Bắc Kinh, tôi cuối cùng cũng tìm được một công việc khá ưng ý.'},
          b:{t:'事情的结果多是希望发生的情况，但还可以是不如意的情况。',vn:'Kết quả phần nhiều là tình huống mong muốn, nhưng cũng có thể là tình huống không như ý.',vd:'尽管他也很想去，但他终于还是放弃了留学的打算。',vdVn:'Tuy anh ấy cũng rất muốn đi, nhưng rốt cuộc vẫn từ bỏ ý định du học.'}
        },
        {
          a:{t:'还可以表示大体上还过得去。',vn:'Còn có thể biểu thị nhìn chung cũng tạm được.',vd:'他才学了半年外语，能说成这样，总算不错了。',vdVn:'Cậu ấy mới học ngoại ngữ nửa năm mà nói được thế này, cũng coi là khá rồi.'},
          b:{t:'没有这个意思和用法。',vn:'Không có nghĩa và cách dùng này.'}
        }
      ],
      lamThu:[
        {s:'他多次想告诉她，但＿＿没说出口。',dap:[false,true],mau:true,giai:'Kết quả không như ý → chỉ 终于.'},
        {s:'可让我担心的事＿＿还是发生了。',dap:[false,true],giai:'Việc đáng lo xảy ra — không mong muốn → chỉ 终于.'},
        {s:'整整一个星期没出门，我＿＿把这几本厚厚的书读完了。',dap:[true,true],giai:'Đọc xong sách là điều mong muốn, sau thời gian dài → dùng được cả hai.'},
        {s:'听了李阳这些话后，妈妈＿＿有点放心了。',dap:[true,true],giai:'Mẹ yên tâm phần nào là điều mong muốn → cả hai đều được (总算 thêm sắc thái “dù sao cũng”).'}
      ]
    }
  },
  {
    pair:'耽误 — 影响',
    same:'Đều là động từ, đều có thể nói một việc gây ảnh hưởng xấu tới việc khác: 耽误工作 / 影响工作.',
    sameEx:{zh:'他生病了，耽误／影响了好几天的工作。',vn:'Anh ấy bị ốm, lỡ mất / ảnh hưởng mấy ngày công việc.'},
    items:[
      {
        word:'耽误',
        points:[
          'Nhấn mạnh làm LỠ, làm CHẬM: vì trễ nải, có trở ngại mà việc không làm được đúng lúc hoặc bị hỏng.',
          'Hay đi với 时间, 工作, 学习, 看病, 约会, 孩子 (bảng 搭配).',
          'Chỉ mang nghĩa xấu.'
        ],
        ex:[
          {zh:'因为有大雾，飞机不能起飞。耽误了您的宝贵时间，非常抱歉！',vn:'Vì sương mù dày, máy bay không thể cất cánh. Làm mất thời gian quý báu của quý khách, chúng tôi vô cùng xin lỗi!'},
          {zh:'上次路上堵车，耽误了很长时间。',vn:'Lần trước tắc đường, lỡ mất rất nhiều thời gian.'}
        ]
      },
      {
        word:'影响',
        points:[
          'Tác động đến người / việc khác nói chung — có thể TỐT hoặc XẤU.',
          'Còn làm danh từ: 受……的影响, 对……有影响.',
          'Không có nghĩa “làm lỡ thời gian” trực tiếp: nói 耽误时间 chứ ít nói 影响时间.'
        ],
        ex:[
          {zh:'父母的习惯对孩子影响很大。',vn:'Thói quen của bố mẹ ảnh hưởng rất lớn đến con cái.'},
          {zh:'晚上别玩手机了，会影响睡觉的。',vn:'Tối đừng chơi điện thoại nữa, sẽ ảnh hưởng đến giấc ngủ đấy.'}
        ]
      }
    ],
    quiz:[
      {sentence:'因为有大雾，飞机不能起飞。＿＿了您的宝贵时间，非常抱歉！',options:['耽误','影响'],answer:0,why:'Làm mất, làm lỡ THỜI GIAN → 耽误 (bài tập 2 của sách).'},
      {sentence:'这位老师对我的＿＿很大，我也想当老师。',options:['耽误','影响'],answer:1,why:'Tác động tốt, dùng như danh từ (对……的影响很大) → 影响.'},
      {sentence:'你别在这儿大声说话，＿＿别人学习。',options:['耽误','影响'],answer:1,why:'Làm phiền, tác động đến người khác → 影响.'},
      {sentence:'快走吧，别＿＿了上课！',options:['耽误','影响'],answer:0,why:'Sợ bị trễ, lỡ giờ học → 耽误.'}
    ]
  },
  {
    pair:'一律 — 都',
    same:'Đều là phó từ, đứng trước động từ, đều có nghĩa “tất cả, đều”.',
    sameEx:{zh:'小动物一律／都不准带上飞机。',vn:'Động vật nhỏ đều không được mang lên máy bay.'},
    items:[
      {
        word:'一律',
        points:[
          'Nhấn mạnh KHÔNG CÓ NGOẠI LỆ, như nhau hết — giọng quy định, thông báo, trang trọng.',
          'Hay đi với 不准 / 不 / 免费 / 无效 / 打折.',
          'Không dùng để tả trạng thái, cảm xúc tự nhiên: ✗ 同学们一律很高兴.'
        ],
        ex:[
          {zh:'为了保证病人的休息，午饭后一律不准探视。',vn:'Để bảo đảm bệnh nhân nghỉ ngơi, sau bữa trưa nhất loạt không được thăm.'},
          {zh:'包括家人在内的任何人他都一律不见。',vn:'Bất kỳ ai, kể cả người nhà, ông ấy đều không gặp.'}
        ]
      },
      {
        word:'都',
        points:[
          'Tổng quát “đều, cả” — dùng rộng rãi trong mọi phong cách, cả khẩu ngữ.',
          'Tả được trạng thái, cảm xúc: 大家都很高兴.',
          'Kết hợp 连……都, 一……都不, 都……了 (đã…).'
        ],
        ex:[
          {zh:'听到这个消息，同学们都很高兴。',vn:'Nghe tin này, các bạn đều rất vui.'},
          {zh:'我们班的同学都去过北京。',vn:'Các bạn lớp tôi đều từng đến Bắc Kinh.'}
        ]
      }
    ],
    quiz:[
      {sentence:'为了保证病人的休息，午饭后＿＿不准探视。',options:['一律','都'],answer:0,why:'Quy định của bệnh viện, không ngoại lệ → 一律 (bài tập 2 của sách).'},
      {sentence:'听到放假的消息，同学们＿＿很高兴。',options:['一律','都'],answer:1,why:'Tả cảm xúc tự nhiên → chỉ dùng 都.'},
      {sentence:'本店所有商品＿＿五折。',options:['一律','都'],answer:0,both:true,why:'Thông báo khuyến mãi: 一律 trang trọng, nhấn mạnh không ngoại lệ; 都 cũng được.'},
      {sentence:'他连饭＿＿没吃就走了。',options:['一律','都'],answer:1,why:'Khung cố định 连……都…… → chỉ 都.'}
    ]
  }
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'被动',hv:'bị động',vn:'bị động',note:'Trùng khít — trái nghĩa 主动 (chủ động).'},
    {zh:'奴隶',hv:'nô lệ',vn:'nô lệ',note:'Trùng khít. Đừng nhầm với 努力 (nǔlì — cố gắng) đọc gần giống.'},
    {zh:'虚伪',hv:'hư nguỵ',vn:'giả dối',note:'“Hư” = không thật (hư cấu), “nguỵ” = giả (nguỵ tạo).'},
    {zh:'思想',hv:'tư tưởng',vn:'tư tưởng, suy nghĩ',note:'Trùng khít.'},
    {zh:'冒险',hv:'mạo hiểm',vn:'mạo hiểm',note:'Trùng khít.'},
    {zh:'文明',hv:'văn minh',vn:'văn minh',note:'Trùng khít.'},
    {zh:'出色',hv:'xuất sắc',vn:'xuất sắc',note:'Trùng khít.'},
    {zh:'投资',hv:'đầu tư',vn:'đầu tư',note:'Trùng khít.'},
    {zh:'人物',hv:'nhân vật',vn:'nhân vật',note:'Trùng khít.'},
    {zh:'习俗',hv:'tập tục',vn:'tập tục',note:'Trùng khít.'},
    {zh:'灵魂',hv:'linh hồn',vn:'linh hồn',note:'Trùng khít.'},
    {zh:'哲理',hv:'triết lý',vn:'triết lý',note:'Trùng khít.'},
    {zh:'提倡',hv:'đề xướng',vn:'đề xướng, khuyến khích',note:'倡 đọc “xướng” như trong “xướng ca”.'},
    {zh:'效率',hv:'hiệu suất',vn:'hiệu suất, năng suất',note:'率 ở đây đọc lǜ, Hán–Việt “suất” (như 比率 tỉ suất).'},
    {zh:'闭关',hv:'bế quan',vn:'bế quan',note:'Trùng khít — tiếng Việt cũng nói “bế quan tu luyện”, “bế quan toả cảng” (闭关锁国).'}
  ],
  idiom:[
    {zh:'健步如飞',hv:'kiện bộ như phi',vn:'bước đi thoăn thoắt như bay',note:'“Kiện” = khoẻ (kiện khang), “bộ” = bước, “phi” = bay.'},
    {zh:'忙而不乱',hv:'mang nhi bất loạn',vn:'bận mà không rối',note:'“Mang” = bận (忙), “loạn” = rối.'},
    {zh:'受益终生',hv:'thụ ích chung sinh',vn:'được lợi suốt đời',note:'“Thụ” = nhận, “ích” = lợi ích, “chung sinh” = trọn đời.'},
    {zh:'寂寞难耐',hv:'tịch mịch nan nại',vn:'cô đơn khó chịu nổi',note:'“Nan” = khó, “nại” = chịu đựng (nhẫn nại).'}
  ],
  trap:[
    {zh:'丛林',hv:'tùng lâm',vn:'rừng rậm',warn:'BẪY: tiếng Việt “tùng lâm” thường chỉ chốn thiền môn, chùa chiền. 丛林 tiếng Trung trước hết là RỪNG RẬM: 热带丛林.'},
    {zh:'反省',hv:'phản tỉnh',vn:'tự kiểm điểm',warn:'“Phản” ở đây là QUAY LẠI (nhìn lại mình), không phải phản đối; “tỉnh” = xét (省 đọc xǐng, không đọc shěng như 省钱).'},
    {zh:'得罪',hv:'đắc tội',vn:'làm phật lòng',warn:'BẪY nhẹ: tiếng Việt “đắc tội” nghe nặng như phạm tội; 得罪 tiếng Trung thường chỉ là làm ai MẤT LÒNG, không vui.'},
    {zh:'纪录',hv:'kỷ lục',vn:'kỷ lục; tài liệu ghi lại',warn:'BẪY: 纪录片 là PHIM TÀI LIỆU, không phải “phim kỷ lục”.'},
    {zh:'总算',hv:'tổng toán',vn:'cuối cùng cũng',warn:'BẪY: không phải “tính tổng”. 总算 là phó từ: cuối cùng cũng …, dù sao cũng ….'},
    {zh:'据说',hv:'cứ thuyết',vn:'nghe nói',warn:'Âm Hán–Việt không gợi nghĩa: 据 = căn cứ vào, 说 = lời nói → theo lời người ta nói.'},
    {zh:'一律',hv:'nhất luật',vn:'nhất loạt',warn:'Không liên quan đến “luật pháp”: 一律 = tất cả như một, không ngoại lệ (tiếng Việt nói “nhất loạt”).'},
    {zh:'步骤',hv:'bộ sậu',vn:'các bước',warn:'“Bộ sậu” không có trong tiếng Việt hiện đại. 步 = bước, 骤 = (bước) gấp → trình tự các bước.'},
    {zh:'疲劳',hv:'bì lao',vn:'mệt mỏi',warn:'BẪY: “lao” ở đây là LAO LỰC (nhọc), không phải bệnh lao (结核). 疲劳 = mệt nhọc.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 75) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'提倡',right:'节约'},
  {left:'耽误',right:'看病'},
  {left:'寂寞的',right:'心情'},
  {left:'出色的',right:'成绩'},
  {left:'大力',right:'提倡'},
  {left:'长期',right:'投资'},
  {left:'算',right:'不清'},
  {left:'搞',right:'错'},
  {left:'一部',right:'纪录片'},
  {left:'一批',right:'货'},
  {left:'提高',right:'效率'},
  {left:'富有',right:'哲理'},
  {left:'疲劳的',right:'身体'},
  {left:'工作的',right:'奴隶'},
  {left:'古代',right:'文明'},
  {left:'当地的',right:'习俗'},
  {left:'时时',right:'反省'},
  {left:'很有',right:'个性'},
  {left:'热带',right:'丛林'},
  {left:'重要的',right:'步骤'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'高三的学生每天都很',blank:'忙碌',post:'，连周末都要上课。',hint:'(bận rộn)',ans:'忙碌'},
  {pre:'我们没有提前准备，所以现在很',blank:'被动',post:'。',hint:'(bị động)',ans:'被动'},
  {pre:'不要让自己变成手机的',blank:'奴隶',post:'。',hint:'(nô lệ)',ans:'奴隶'},
  {pre:'他嘴上说支持我，心里却不这么想，真',blank:'虚伪',post:'！',hint:'(giả dối)',ans:'虚伪'},
  {pre:'请不要把你的',blank:'思想',post:'强加给我。',hint:'(suy nghĩ, tư tưởng)',ans:'思想'},
  {pre:'考试失败以后，我认真',blank:'反省',post:'了自己的学习方法。',hint:'(tự kiểm điểm)',ans:'反省'},
  {pre:'',blank:'据说',post:'这家饭馆的烤鸭特别好吃，我们去尝尝吧。',hint:'(nghe nói)',ans:'据说'},
  {pre:'她的穿着很有',blank:'个性',post:'，大家一眼就能认出她。',hint:'(cá tính)',ans:'个性'},
  {pre:'一个人去原始丛林太',blank:'冒险',post:'了。',hint:'(mạo hiểm)',ans:'冒险'},
  {pre:'这些动物生活在热带',blank:'丛林',post:'里。',hint:'(rừng rậm)',ans:'丛林'},
  {pre:'中国是世界上的',blank:'文明',post:'古国之一。',hint:'(văn minh)',ans:'文明'},
  {pre:'学校带我们看了一部有关古代文明的',blank:'纪录',post:'片。',hint:'(tài liệu — phim tài liệu)',ans:'纪录'},
  {pre:'爸爸妈妈工作太忙，就',blank:'雇',post:'了一位阿姨来照顾奶奶。',hint:'(thuê)',ans:'雇'},
  {pre:'按照老人教的方法，他几乎每天都能钓到5斤',blank:'来',post:'重的大鱼。',hint:'(khoảng, chừng)',ans:'来'},
  {pre:'学校今年又来了一',blank:'批',post:'新老师。',hint:'(tốp, đợt — lượng từ)',ans:'批'},
  {pre:'爷爷七十多岁了，爬山的时候还',blank:'健步如飞',post:'。',hint:'(bước đi thoăn thoắt)',ans:'健步如飞'},
  {pre:'',blank:'一连',post:'下了一个星期的雨，衣服都干不了。',hint:'(liên tiếp, liền)',ans:'一连'},
  {pre:'很多外国公司纷纷来这里',blank:'投资',post:'。',hint:'(đầu tư)',ans:'投资'},
  {pre:'孔子是中国历史上非常重要的',blank:'人物',post:'。',hint:'(nhân vật)',ans:'人物'},
  {pre:'他说话太直，经常',blank:'得罪',post:'人。',hint:'(làm mất lòng)',ans:'得罪'},
  {pre:'问题是我们怎样才能',blank:'搞',post:'到他的签名。',hint:'(làm, kiếm — khẩu ngữ)',ans:'搞'},
  {pre:'到了别的国家，要尊重当地的',blank:'习俗',post:'。',hint:'(tập tục)',ans:'习俗'},
  {pre:'他是这支球队的',blank:'灵魂',post:'，没有他就赢不了。',hint:'(linh hồn)',ans:'灵魂'},
  {pre:'连续工作了十个小时，他感到非常',blank:'疲劳',post:'。',hint:'(mệt mỏi)',ans:'疲劳'},
  {pre:'爷爷说的话虽然简单，但是很有',blank:'哲理',post:'。',hint:'(triết lý)',ans:'哲理'},
  {pre:'现在饭馆都',blank:'提倡',post:'节约，不浪费食物。',hint:'(khuyến khích, đề xướng)',ans:'提倡'},
  {pre:'你是按说明书上的',blank:'步骤',post:'安装的吗？',hint:'(các bước)',ans:'步骤'},
  {pre:'考试前，哥哥决定',blank:'闭关',post:'一周，好好复习。',hint:'(bế quan)',ans:'闭关'},
  {pre:'她有些',blank:'寂寞',post:'，想让我到她那儿陪她聊聊天。',hint:'(cô đơn)',ans:'寂寞'},
  {pre:'晚上睡不好，第二天的学习',blank:'效率',post:'就很低。',hint:'(hiệu suất, hiệu quả)',ans:'效率'},
  {pre:'这批当地人个个都表现',blank:'出色',post:'。',hint:'(xuất sắc)',ans:'出色'},
  {pre:'经过沟通，大导演',blank:'总算',post:'搞明白了。',hint:'(cuối cùng cũng)',ans:'总算'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['他','雇了','20来个','当地人','为他','带路','。'],ans:'他雇了20来个当地人为他带路。',audio:'他雇了20来个当地人为他带路。'},
  {words:['这件衬衫','要','一千','来块钱','。'],ans:'这件衬衫要一千来块钱。',audio:'这件衬衫要一千来块钱。'},
  {words:['我只知道','他是六班的学生','，','至于','住在哪儿','，','我就不清楚了','。'],ans:'我只知道他是六班的学生，至于住在哪儿，我就不清楚了。',audio:'我只知道他是六班的学生，至于住在哪儿，我就不清楚了。'},
  {words:['你','至于','生','那么大的气','吗','？'],ans:'你至于生那么大的气吗？',audio:'你至于生那么大的气吗？'},
  {words:['经过','沟通','，','大导演','总算','搞明白了','。'],ans:'经过沟通，大导演总算搞明白了。',audio:'经过沟通，大导演总算搞明白了。'},
  {words:['总算','把','活儿','干完了','。'],ans:'总算把活儿干完了。',audio:'总算把活儿干完了。'},
  {words:['人','几乎','成了','工作的','奴隶','。'],ans:'人几乎成了工作的奴隶。',audio:'人几乎成了工作的奴隶。'},
  {words:['他','把自己','关在','一所','房子里','。'],ans:'他把自己关在一所房子里。',audio:'他把自己关在一所房子里。'},
  {words:['一连','三天','，','他们','都很顺利','。'],ans:'一连三天，他们都很顺利。',audio:'一连三天，他们都很顺利。'},
  {words:['时时','反省','可以','使我们','少走','弯路','。'],ans:'时时反省可以使我们少走弯路。',audio:'时时反省可以使我们少走弯路。'},
  {words:['任何人','他','都','一律','不见','。'],ans:'任何人他都一律不见。',audio:'任何人他都一律不见。'},
  {words:['忙碌的人们','，','请','多给自己','一点','思考的时间','吧','。'],ans:'忙碌的人们，请多给自己一点思考的时间吧。',audio:'忙碌的人们，请多给自己一点思考的时间吧。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {
    wrong:'因为有大雾，飞机不能起飞。____了您的宝贵时间，非常抱歉！',
    opts:['影响','耽误','推迟','延长'],
    ans:1,
    exp:'Làm lỡ, làm mất THỜI GIAN của ai → 耽误时间 (bài tập 2 của sách). 影响 là tác động nói chung, ít đi với 时间; 推迟 là hoãn (việc), 延长 là kéo dài — đều không đi với “thời gian quý báu của ngài”.'
  },
  {
    wrong:'我只知道他是六班的学生，____住在哪儿，我就不清楚了。',
    opts:['对于','至于','由于','甚至'],
    ans:1,
    exp:'Nói xong một việc, chuyển sang việc khác: “…，至于 + việc khác，…” (điểm ngữ pháp 2). 对于 là “đối với”, 由于 là “do”, 甚至 là “thậm chí”.'
  },
  {
    wrong:'我只是和你开个玩笑，你____生那么大的气吗？',
    opts:['至于','终于','关于','对于'],
    ans:0,
    exp:'至于 (động từ) + V + 吗？ = có đến mức … không? (câu phản vấn). 终于 là “cuối cùng”, 关于 / 对于 là giới từ.'
  },
  {
    wrong:'为了保证病人的休息，午饭后____不准探视。',
    opts:['一律','一共','一起','一直'],
    ans:0,
    exp:'Quy định áp dụng cho tất cả, không ngoại lệ → 一律不准 (bài tập 2 của sách). 一共 là tổng cộng, 一起 là cùng nhau, 一直 là luôn luôn.'
  },
  {
    wrong:'用铅笔书写的答卷____无效。',
    opts:['一律','一起','一向','一共'],
    ans:0,
    exp:'一律无效 = đều không có hiệu lực (câu 29 sách bài tập). 一向 là “xưa nay vẫn”, không hợp giọng quy định.'
  },
  {
    wrong:'他多次想告诉她，但____没说出口。',
    opts:['总算','终于','好像','刚才'],
    ans:1,
    exp:'Kết quả KHÔNG như ý (rốt cuộc không nói ra) → 终于. 总算 chỉ dùng cho kết quả mong muốn (词语辨析 của bài).'
  },
  {
    wrong:'到北京的第二年，我____找到了一份比较满意的工作。',
    opts:['总算','究竟','几乎','差点儿'],
    ans:0,
    exp:'Sau thời gian dài, điều mong muốn thành hiện thực → 总算. 究竟 dùng trong câu hỏi; 几乎 / 差点儿 là “suýt, gần như” — nghĩa ngược.'
  },
  {
    wrong:'马向阳在那儿当县长时，____地完成了任务。',
    opts:['优秀','出色','精彩','良好'],
    ans:1,
    exp:'Làm trạng ngữ + 地 + 完成 → 出色地完成 (bài tập 2 của sách). 优秀 nói phẩm chất chung (优秀学生), ít làm trạng ngữ; 精彩 tả tiết mục, trận đấu.'
  },
  {
    wrong:'你怎么____的？不是说好了周末和小丽见面的吗？',
    opts:['做','搞','办','造'],
    ans:1,
    exp:'怎么搞的？ là câu khẩu ngữ cố định: “Sao lại thế?” (bài tập 2 của sách). Không nói 怎么做的 với nghĩa trách móc này.'
  },
  {
    wrong:'大导演到南美丛林拍有关古代____文明的纪录片。',
    opts:['印加','埃及','希腊','罗马'],
    ans:0,
    exp:'Theo bài khoá: rừng rậm Nam Mỹ — văn minh Inca (印加). Ai Cập, Hy Lạp, La Mã không ở Nam Mỹ.'
  },
  {
    wrong:'从20世纪80年代起，____每年都要进行两次为期一周的“闭关”。',
    opts:['比尔·盖茨','爱因斯坦','孔子','哥伦布'],
    ans:0,
    exp:'Theo bài khoá: Bill Gates (比尔·盖茨) mỗi năm “bế quan” hai lần. Einstein, Khổng Tử, Columbus đều không sống ở thập niên 80.'
  },
  {
    wrong:'在他们的____中，已经把忙与成功、闲与失败联系到一起。',
    opts:['思考','思想','想念','想象'],
    ans:1,
    exp:'在……的思想中 = trong suy nghĩ, quan niệm của … → danh từ 思想. 思考 chủ yếu là động từ; 想念 là nhớ nhung; 想象 là tưởng tượng.'
  },
  {
    wrong:'他在比赛中打破了全国____。',
    opts:['记录','纪录','记忆','记者'],
    ans:1,
    exp:'Kỷ lục → 纪录 (打破纪录). 记录 là ghi chép, biên bản (xem bài 20).'
  },
  {
    wrong:'第一种忙，总是被事情追着、赶着，人几乎成了工作的____。',
    opts:['努力','奴隶','主人','能力'],
    ans:1,
    exp:'Bị công việc đuổi theo → thành NÔ LỆ của công việc (奴隶). 主人 là loại bận thứ hai. Đừng nhầm 奴隶 núlì với 努力 nǔlì.'
  },
  {
    wrong:'与其抱怨别人，不如先____一下自己。',
    opts:['反省','反对','反映','反应'],
    ans:0,
    exp:'Tự xét lại mình → 反省自己. 反对 là phản đối, 反映 là phản ánh, 反应 là phản ứng.'
  },
  {
    wrong:'上海的那____货准备得怎么样了？',
    opts:['批','张','条','场'],
    ans:0,
    exp:'Lô hàng → lượng từ 批 (一批货 — bảng 搭配, bài nghe 1 sách bài tập).'
  },
  {
    wrong:'盖茨的“闭关”更是一种高____的工作方式。',
    opts:['效率','效果','利率','比率'],
    ans:0,
    exp:'高效率 = hiệu suất cao. 效果 đi với 好 / 明显 (效果很好), không nói 高效果; 利率 là lãi suất; 比率 là tỉ lệ.'
  },
  {
    wrong:'现在饭馆都____节约，不浪费食物。',
    opts:['提倡','提供','提出','提前'],
    ans:0,
    exp:'Khuyến khích mọi người làm điều tốt → 提倡节约 (bài tập 1 của sách). 提供 là cung cấp, 提出 là đề ra (ý kiến), 提前 là làm sớm hơn.'
  },
  {
    wrong:'她一个人在国外生活，常常感到很____。',
    opts:['寂寞','安静','热闹','平静'],
    ans:0,
    exp:'Một mình nơi xa, không ai trò chuyện → 感到寂寞 (cô đơn). 安静 / 平静 tả không gian, tâm trạng yên; 热闹 là náo nhiệt — trái nghĩa.'
  }
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi thức khuya ôn bài liền ba ngày, kết quả đến ngày thứ tư lên lớp mệt đến mức không mở nổi mắt.',zh:'我一连三天熬夜复习，结果第四天上课时疲劳得睁不开眼。',py:'Wǒ yìlián sān tiān áoyè fùxí, jiéguǒ dì-sì tiān shàngkè shí píláo de zhēng bu kāi yǎn.',goiY:['一连','熬夜','疲劳','结果'],giai:'一连 + số lượng + thời gian = "liền, liên tiếp", đặt trước động từ; 结果 dẫn ra kết quả ở vế sau (thường là không như ý).'},
  {vi:'Tuy chỉ được khoảng sáu mươi điểm nhưng môn toán của tôi rốt cuộc cũng qua.',zh:'虽然只考了六十来分，但我的数学总算及格了。',py:'Suīrán zhǐ kǎole liùshí lái fēn, dàn wǒ de shùxué zǒngsuàn jígé le.',goiY:['虽然……但……','来','总算'],giai:'十 / 百 + 来 + lượng từ = số ước lượng "khoảng"; 总算 = rốt cuộc cũng (kết quả mong muốn, dù chưa hoàn hảo).'},
  {vi:'Chẳng qua là kỷ lục trong game bị người khác phá thôi mà, có đến mức buồn tới nỗi bỏ cả cơm không?',zh:'不就是游戏里的纪录被别人打破了吗，你至于难过得连饭都不吃吗？',py:'Bú jiù shì yóuxì li de jìlù bèi biérén dǎpòle ma, nǐ zhìyú nánguò de lián fàn dōu bù chī ma?',goiY:['纪录','至于……吗','连……都……'],giai:'你至于……吗？ là câu phản vấn = "có đến mức … không?", ý là không cần thiết; 连……都 nhấn mạnh trường hợp cực đoan.'},
  {vi:'Một là sẽ lỡ mất buổi học thêm, hai là chi phí cũng quá cao, nên tôi không định tham gia trại hè lần này.',zh:'一来会耽误补习课，二来费用也太高，所以我不打算参加这次夏令营。',py:'Yī lái huì dānwu bǔxí kè, èr lái fèiyong yě tài gāo, suǒyǐ wǒ bù dǎsuàn cānjiā zhè cì xiàlìngyíng.',goiY:['一来……二来……','耽误','所以'],giai:'一来……，二来…… liệt kê hai lý do, vế kết luận đặt sau với 所以; 耽误 = làm lỡ, làm chậm trễ (việc học, thời gian), khác 错过 (bỏ lỡ cơ hội).'},
  {vi:'Nghe nói cậu "học bá" ấy mỗi ngày chỉ học tám tiếng mà lúc nào cũng đứng nhất, đủ thấy hiệu quả quan trọng hơn thời gian.',zh:'据说那位学霸每天只学八个小时，却总是考第一，可见效率比时间更重要。',py:'Jùshuō nà wèi xuébà měi tiān zhǐ xué bā ge xiǎoshí, què zǒngshì kǎo dì-yī, kějiàn xiàolǜ bǐ shíjiān gèng zhòngyào.',goiY:['据说','却','可见','效率'],giai:'据说 = nghe nói (nguồn tin không rõ), đứng đầu câu; 可见 rút ra kết luận từ sự việc vừa kể.'},
  {vi:'Nếu lúc nào cũng thụ động chờ thầy cô giao việc, chúng ta sẽ trở thành nô lệ của bài tập chứ không phải người làm chủ việc học.',zh:'如果总是被动地等老师布置任务，我们就会变成作业的奴隶，而不是学习的主人。',py:'Rúguǒ zǒngshì bèidòng de děng lǎoshī bùzhì rènwu, wǒmen jiù huì biànchéng zuòyè de núlì, ér bú shì xuéxí de zhǔrén.',goiY:['如果……就……','被动','奴隶','而不是'],giai:'如果……就 là giả thiết – kết quả; 而不是 = "chứ không phải", đặt sau vế khẳng định để phủ định vế đối lập.'},
  {vi:'Chỉ khi coi việc tự xem xét lại mình là một bước không thể thiếu trong học tập, chúng ta mới không càng đi càng xa trên con đường sai.',zh:'只有把反省当成学习中必不可少的步骤，我们才不会在错误的道路上越走越远。',py:'Zhǐyǒu bǎ fǎnxǐng dàngchéng xuéxí zhōng bì bù kě shǎo de bùzhòu, wǒmen cái bú huì zài cuòwù de dàolù shang yuè zǒu yuè yuǎn.',goiY:['只有……才……','反省','步骤','越……越……'],giai:'只有……才 nêu điều kiện duy nhất (thiếu nó thì không được); 越走越远 = càng đi càng xa.'},
  {vi:'Anh họ tôi rất cá tính lại thích mạo hiểm, vừa tốt nghiệp đã sang Nam Mỹ du lịch; còn chuyện bố mẹ có đồng ý hay không thì anh ấy chẳng hề bận tâm.',zh:'表哥个性很强，又喜欢冒险，一毕业就去了南美旅行；至于父母同不同意，他根本不在乎。',py:'Biǎogē gèxìng hěn qiáng, yòu xǐhuan màoxiǎn, yí bìyè jiù qùle Nánměi lǚxíng; zhìyú fùmǔ tóng bu tóngyì, tā gēnběn bú zàihu.',goiY:['个性','冒险','至于'],giai:'至于 (giới từ) đứng đầu vế sau, chuyển sang một chuyện có liên quan = "còn về … thì"; ở đây không dịch là "đến mức".'},
  {vi:'Bất kể học lực tốt hay kém, cô chủ nhiệm đều yêu cầu tất cả có mặt ở trường trước bảy giờ sáng, vì cô chủ trương dùng nếp sinh hoạt điều độ để nâng cao hiệu quả.',zh:'不管成绩好坏，班主任一律要求大家早上七点前到校，因为她提倡用规律的作息来提高效率。',py:'Bùguǎn chéngjì hǎohuài, bānzhǔrèn yílǜ yāoqiú dàjiā zǎoshang qī diǎn qián dào xiào, yīnwèi tā tíchàng yòng guīlǜ de zuòxī lái tígāo xiàolǜ.',goiY:['不管……一律……','提倡','效率'],giai:'不管 + hai mặt đối lập (好坏) + 都 / 一律: kết quả không đổi; 一律 = nhất loạt, không có ngoại lệ.'},
  {vi:'Thay vì ngày nào cũng bận đến mức không có cả thời gian suy nghĩ, chi bằng thỉnh thoảng cho mình "bế quan" vài ngày; dù có hơi cô đơn, nó cũng giúp tâm hồn theo kịp cơ thể mệt mỏi.',zh:'与其每天忙得连思考的时间都没有，不如偶尔给自己“闭关”几天，哪怕有些寂寞，也能让灵魂追上疲劳的身体。',py:'Yǔqí měi tiān máng de lián sīkǎo de shíjiān dōu méiyǒu, bùrú ǒu\'ěr gěi zìjǐ "bìguān" jǐ tiān, nǎpà yǒuxiē jìmò, yě néng ràng línghún zhuīshang píláo de shēntǐ.',goiY:['与其……不如……','哪怕……也……','闭关','灵魂'],giai:'与其 A 不如 B: chọn B thay vì A; 哪怕……也 = dù (phải chịu chút thiệt) vẫn …, nhượng bộ giả định giống 即使.'}
];
var translateDataRev = [
  {vi:'Kiểu người thứ nhất bận một cách bị động, vì thế gần như đã trở thành nô lệ của công việc.',zh:'第一种人忙得很被动，因此几乎成了工作的奴隶。',py:'Dì-yī zhǒng rén máng de hěn bèidòng, yīncǐ jīhū chéngle gōngzuò de núlì.',goiY:['被动 = bị động','奴隶 = nô lệ','因此 = vì thế'],giai:'忙得很被动: bổ ngữ trạng thái V + 得 + mức độ; 因此 đứng đầu vế sau nêu kết quả, trang trọng hơn 所以.'},
  {vi:'Sự bận rộn của kiểu người thứ ba có phần giả tạo, vì trong suy nghĩ họ đã gắn bận rộn với thành công.',zh:'第三种人的忙碌有些虚伪，因为他们在思想上把忙和成功联系到了一起。',py:'Dì-sān zhǒng rén de mánglù yǒuxiē xūwěi, yīnwèi tāmen zài sīxiǎng shang bǎ máng hé chénggōng liánxì dàole yìqǐ.',goiY:['忙碌 = bận rộn','虚伪 = giả tạo','思想 = tư tưởng, suy nghĩ'],giai:'因为 ở vế sau giải thích nguyên nhân; 把 A 和 B 联系到一起 = gắn A với B.'},
  {vi:'Nghe nói có một đạo diễn lớn vì cực kỳ thích mạo hiểm nên đã đặc biệt tới rừng rậm Nam Mỹ quay một bộ phim tài liệu.',zh:'据说有位大导演因为极爱冒险，所以专门跑到南美丛林拍了一部纪录片。',py:'Jùshuō yǒu wèi dà dǎoyǎn yīnwèi jí ài màoxiǎn, suǒyǐ zhuānmén pǎodào Nánměi cónglín pāile yí bù jìlùpiàn.',goiY:['据说 = nghe nói','丛林 = rừng rậm','纪录片 = phim tài liệu'],giai:'因为……所以…… nguyên nhân – kết quả; 纪录片 viết với 纪 (ghi chép), không phải 记.'},
  {vi:'Ông thuê khoảng hai mươi người địa phương dẫn đường và khuân hành lý; dù hành lý rất nặng, nhóm người này ai nấy đều đi nhanh như bay.',zh:'他雇了20来个当地人带路和搬行李，尽管行李很重，这批人却个个健步如飞。',py:'Tā gùle èrshí lái ge dāngdìrén dài lù hé bān xíngli, jǐnguǎn xíngli hěn zhòng, zhè pī rén què gègè jiànbù-rúfēi.',goiY:['来 = khoảng (số ước lượng)','尽管……却…… = mặc dù … vẫn …','健步如飞 = đi nhanh như bay'],giai:'20来个 = "khoảng hai mươi", 来 đứng sau số chẵn chục và trước lượng từ; 尽管……却: nhượng bộ một sự thật, 却 đứng sau chủ ngữ vế sau.'},
  {vi:'Suốt ba ngày liền, nhóm người địa phương đều thể hiện rất xuất sắc, thế nhưng sang ngày thứ tư họ lại từ chối lên đường.',zh:'一连三天，这批当地人都表现得非常出色，可是到了第四天，他们却拒绝上路。',py:'Yìlián sān tiān, zhè pī dāngdìrén dōu biǎoxiàn de fēicháng chūsè, kěshì dàole dì-sì tiān, tāmen què jùjué shàng lù.',goiY:['一连 = liền, liên tiếp','出色 = xuất sắc','可是……却……'],giai:'可是 chuyển ý, 却 nhấn mạnh sự việc bất ngờ; 表现得 + tính từ = thể hiện (một cách) ….'},
  {vi:'Đạo diễn sốt ruột như vậy, một là vì bị lỡ mất thời gian, hai là sợ chi phí tăng khiến nhà đầu tư không vui.',zh:'导演之所以非常着急，一来是因为耽误了时间，二来是怕费用增加让投资人不高兴。',py:'Dǎoyǎn zhīsuǒyǐ fēicháng zháojí, yī lái shì yīnwèi dānwule shíjiān, èr lái shì pà fèiyong zēngjiā ràng tóuzīrén bù gāoxìng.',goiY:['之所以 = sở dĩ','一来……二来…… = một là … hai là …','耽误 = làm lỡ'],giai:'之所以 + kết quả, sau đó 一来是……，二来是…… liệt kê từng nguyên nhân; 投资人 = nhà đầu tư (người bỏ vốn).'},
  {vi:'Còn về nhà đầu tư của bộ phim thì đó là một nhân vật tầm cỡ, vì vậy đạo diễn dù thế nào cũng không dám làm phật lòng ông ta.',zh:'至于这部影片的投资人，那可是一位大人物，所以导演无论如何也不敢得罪他。',py:'Zhìyú zhè bù yǐngpiàn de tóuzīrén, nà kě shì yí wèi dà rénwù, suǒyǐ dǎoyǎn wúlùn rúhé yě bù gǎn dézuì tā.',goiY:['至于 = còn về','人物 = nhân vật','得罪 = làm mất lòng','无论如何'],giai:'至于 đứng đầu câu chuyển sang đề tài liên quan — "còn về …"; 无论如何也不 = dù thế nào cũng không.'},
  {vi:'Sau khi trao đổi, đạo diễn cuối cùng cũng vỡ lẽ: hóa ra người địa phương từ xưa đã có tập tục cứ đi ba ngày thì phải nghỉ một ngày.',zh:'经过沟通，导演总算搞明白了：原来当地人自古就有一种习俗，每走三天就要休息一天。',py:'Jīngguò gōutōng, dǎoyǎn zǒngsuàn gǎo míngbai le: yuánlái dāngdìrén zìgǔ jiù yǒu yì zhǒng xísú, měi zǒu sān tiān jiù yào xiūxi yì tiān.',goiY:['总算 = cuối cùng cũng','搞明白 = hiểu ra','习俗 = tập tục','原来 = hóa ra'],giai:'总算 + V + 了 = rốt cuộc cũng đạt được điều mong muốn sau một thời gian; 原来 = hóa ra (phát hiện ra sự thật).'},
  {vi:'Trong thời đại đề cao cạnh tranh này, chúng ta thường chỉ lo cúi đầu kéo xe mà quên ngẩng lên nhìn đường, càng thiếu đi bước quan trọng là suy nghĩ và tổng kết.',zh:'在这个提倡竞争的时代，我们常常只顾低头拉车，却忘了抬头看路，更少了思考和总结这一重要步骤。',py:'Zài zhège tíchàng jìngzhēng de shídài, wǒmen chángcháng zhǐ gù dītóu lā chē, què wàngle táitóu kàn lù, gèng shǎole sīkǎo hé zǒngjié zhè yí zhòngyào bùzhòu.',goiY:['提倡 = đề xướng, khuyến khích','只顾……却…… = chỉ lo … mà …','步骤 = bước'],giai:'低头拉车 / 抬头看路 là ẩn dụ: chỉ cắm cúi làm mà không nhìn phương hướng — dịch sát hình ảnh để giữ nghĩa bóng; 却 nối hai hành vi trái ngược.'},
  {vi:'Bill Gates mỗi năm đều "bế quan" hai lần, bất kể là ai ông cũng không gặp; kiểu bế quan cô độc ấy không chỉ là nghỉ ngơi mà còn là một cách làm việc hiệu quả cao.',zh:'比尔·盖茨每年都要闭关两次，任何人他都一律不见；这种寂寞的闭关不仅是休息，更是一种高效率的工作方式。',py:'Bǐ\'ěr Gàicí měi nián dōu yào bìguān liǎng cì, rènhé rén tā dōu yílǜ bú jiàn; zhè zhǒng jìmò de bìguān bùjǐn shì xiūxi, gèng shì yì zhǒng gāo xiàolǜ de gōngzuò fāngshì.',goiY:['闭关 = bế quan (ở riêng một thời gian)','一律 = đều, không ngoại lệ','不仅……更…… = không chỉ … mà còn …'],giai:'任何人他都一律不见: tân ngữ 任何人 đảo lên đầu để nhấn mạnh, đi với 都 / 一律; 不仅……更…… là tăng tiến, 更 nhấn mạnh vế sau quan trọng hơn.'}
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — 命题写作 “认真思考，轻松生活” (tr. 78)
// ══════════════════════════════════════════
var writingData = {
  words:['反省','效率','疲劳','提倡','总算'],
  prompt:'Dùng đủ 5 từ cho sẵn, viết một đoạn khoảng 80 chữ kể em đã đối mặt với một khó khăn trong học tập / cuộc sống như thế nào: lúc đầu ra sao, em đã suy nghĩ, tự kiểm điểm gì, thay đổi cách làm thế nào, và kết quả ra sao.',
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是“认真思考，轻松生活”。',
  outline:[
    'Câu mở: khó khăn em gặp — bận rộn, mệt mỏi mà kết quả không tốt (dùng 疲劳, 效率).',
    'Bước ngoặt: em dừng lại suy nghĩ, tự kiểm điểm (dùng 反省) — nói rõ em tự hỏi mình điều gì.',
    'Thay đổi cụ thể trong cách làm và kết quả sau một thời gian (dùng 总算).',
    'Kết: bài học rút ra — suy nghĩ kỹ giúp sống nhẹ nhàng hơn (dùng 提倡).'
  ],
  model:{
    zh:'上个学期，我每天学到半夜，身体很疲劳，学习效率却很低。后来，我开始每天晚上花十分钟反省一下：今天哪些事做得好，哪些做得不好。慢慢地，我学会了先做重要的事。现在我不再那么忙了，成绩总算提高了。老师一直提倡我们认真思考，我觉得这真的能让生活更轻松。',
    py:'Shàng ge xuéqī, wǒ měi tiān xué dào bànyè, shēntǐ hěn píláo, xuéxí xiàolǜ què hěn dī. Hòulái, wǒ kāishǐ měi tiān wǎnshang huā shí fēnzhōng fǎnxǐng yíxià: jīntiān nǎxiē shì zuò de hǎo, nǎxiē zuò de bù hǎo. Mànmàn de, wǒ xuéhuìle xiān zuò zhòngyào de shì. Xiànzài wǒ bú zài nàme máng le, chéngjì zǒngsuàn tígāo le. Lǎoshī yìzhí tíchàng wǒmen rènzhēn sīkǎo, wǒ juéde zhè zhēn de néng ràng shēnghuó gèng qīngsōng.',
    vn:'Học kỳ trước, ngày nào tôi cũng học đến nửa đêm, cơ thể rất mệt mỏi mà hiệu quả học tập lại rất thấp. Về sau, mỗi tối tôi bắt đầu dành mười phút tự xem lại: hôm nay việc gì làm tốt, việc gì làm chưa tốt. Dần dần, tôi học được cách làm việc quan trọng trước. Bây giờ tôi không còn bận rộn đến thế nữa, thành tích cuối cùng cũng tiến bộ. Thầy cô luôn khuyến khích chúng tôi suy nghĩ nghiêm túc, tôi thấy điều đó thật sự giúp cuộc sống nhẹ nhàng hơn.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có kể một khó khăn và một thay đổi CỤ THỂ của em, hay chỉ nói chung chung “suy nghĩ rất quan trọng”?',
    '效率 có đi với 高 / 低 (không viết 效率很好), 总算 có dùng cho kết quả TỐT không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  tuDung:[
    {
      tu:'反省',
      loai:'động từ',
      cach:'反省 + 自己 / 一下 · 时时 / 认真 + 反省 · 反省和总结',
      sai:[
        {re:'反省了?(别人|他们|老师|父母|同学)',sua:'反省自己 / 给……提意见',giai:'反省 là tự xét lại MÌNH. Muốn chỉ ra lỗi của người khác thì dùng 批评 / 给……提意见.'},
        {re:'(很|非常|特别)反省',sua:'认真反省 / 时时反省',giai:'反省 là động từ hành động, không đứng sau 很. Dùng 认真 / 时时 + 反省.',nhe:true}
      ]
    },
    {
      tu:'效率',
      loai:'danh từ',
      cach:'效率 + 高 / 低 · 提高效率 · 学习效率 / 工作效率 · 高效率',
      sai:[
        {re:'效率(很|非常|特别)?(好|坏|快|慢)',sua:'效率高 / 效率低',giai:'效率 đi với 高 / 低, không nói 效率很好, 效率很快.'},
        {re:'很效率',sua:'效率很高',giai:'效率 là danh từ, không đứng sau 很.',nhe:true}
      ]
    },
    {
      tu:'疲劳',
      loai:'tính từ',
      cach:'(身体) + 很疲劳 · 感到疲劳 · 疲劳的 + N · 消除疲劳',
      sai:[
        {re:'疲劳了?(我|他|她|身体|大家)',sua:'让……很疲劳 / ……感到疲劳',giai:'疲劳 là tính từ, không mang tân ngữ. “Làm tôi mệt” = 让我很疲劳.'},
        {re:'疲劳累|累疲劳',sua:'疲劳 hoặc 累',giai:'疲劳 và 累 cùng nghĩa, dùng một từ là đủ.',nhe:true}
      ]
    },
    {
      tu:'提倡',
      loai:'động từ',
      cach:'提倡 + việc tốt (节约 / 读书 / 思考) · 大力 / 积极地 + 提倡 · 提倡 + 大家 / 我们 + V',
      sai:[
        {re:'提倡(我|你|他|她)(明天|今天|马上)',sua:'要求 / 让 + người + V',giai:'提倡 là khuyến khích chung một việc tốt cho số đông; bảo một người cụ thể làm việc cụ thể thì dùng 要求 / 让.'},
        {re:'提倡(浪费|抽烟|迟到|熬夜)',sua:'反对 / 不提倡',giai:'提倡 chỉ dùng cho việc TỐT. Việc xấu thì 反对 / 不提倡.',nhe:true}
      ]
    },
    {
      tu:'总算',
      loai:'phó từ',
      cach:'(经过……，) 总算 + V + 了 · 虽然……，但总算……',
      sai:[
        {re:'总算(还是)?(失败|迟到|输|生病|发生)',sua:'终于 / 结果',giai:'总算 chỉ dùng cho kết quả MONG MUỐN. Kết quả xấu dùng 终于 (还是) / 结果.'},
        {re:'总算[^。，！]*吗',sua:'终于……了吗？',giai:'Câu hỏi “cuối cùng … chưa” dùng 终于……了吗, ít dùng 总算.',nhe:true}
      ]
    }
  ],
  cauTruc:[
    {ten:'……，……却……',nhan:'却',vd:'我学得很累，效率却很低。',khi:'Câu MỞ: tạo tương phản giữa công sức và kết quả (却, HSK 4).'},
    {ten:'一来……，二来……',nhan:'来',vd:'我决定早点儿睡，一来身体不那么疲劳，二来第二天效率更高。',khi:'Nêu hai lý do (điểm ngữ pháp 1 của bài).'},
    {ten:'每天 / 时时 + 反省一下 + ……',nhan:'反省',vd:'每天晚上我都会反省一下自己。',khi:'Nói thói quen tự kiểm điểm — bước ngoặt của đoạn văn.'},
    {ten:'……，至于……，……',nhan:'至于',vd:'先把重要的事做完，至于别的事，明天再说。',khi:'Chuyển sang nói việc khác (điểm ngữ pháp 2).'},
    {ten:'经过……，总算……了',nhan:'总算',vd:'经过一个月的努力，我的成绩总算提高了。',khi:'Kể kết quả tốt sau một thời gian cố gắng (điểm ngữ pháp 3).'},
    {ten:'与其……，不如……',nhan:'与其',vd:'与其天天熬夜，不如好好想想学习方法。',khi:'So sánh hai cách làm, chọn cách hợp lý hơn.'},
    {ten:'……能让 + N + 更 + tính từ',nhan:'让',vd:'认真思考能让生活更轻松。',khi:'Câu KẾT: nêu tác dụng, quay về đề bài.'}
  ],
  sapXep:[
    {manh:['身体很疲劳','学到半夜','我每天'],dap:'我每天学到半夜，身体很疲劳。',vn:'Ngày nào tôi cũng học đến nửa đêm, cơ thể rất mệt mỏi.',giai:'Chủ ngữ + 每天 + V到 + thời điểm; vế sau nói kết quả: 身体很疲劳.'},
    {manh:['效率','我学得很累','却很低'],dap:'我学得很累，效率却很低。',vn:'Tôi học rất vất vả mà hiệu quả lại rất thấp.',giai:'却 đứng sau chủ ngữ (效率) của vế sau, trước vị ngữ.'},
    {manh:['反省一下','我每天晚上','自己','都会'],dap:'我每天晚上都会反省一下自己。',vn:'Mỗi tối tôi đều tự xem lại bản thân một chút.',giai:'Chủ ngữ + thời gian + 都会 + 反省一下 + 自己.'},
    {manh:['提高了','我的','总算','成绩'],dap:'我的成绩总算提高了。',vn:'Thành tích của tôi cuối cùng cũng tiến bộ.',giai:'Phó từ 总算 đứng sau chủ ngữ, trước động từ.'},
    {manh:['认真思考','老师','提倡我们','一直'],dap:'老师一直提倡我们认真思考。',vn:'Thầy cô luôn khuyến khích chúng tôi suy nghĩ nghiêm túc.',giai:'提倡 + người + V: khuyến khích ai làm gì; 一直 đứng trước 提倡.'},
    {manh:['更轻松','认真思考','让生活','能'],dap:'认真思考能让生活更轻松。',vn:'Suy nghĩ nghiêm túc có thể giúp cuộc sống nhẹ nhàng hơn.',giai:'Chủ ngữ (认真思考) + 能 + 让 + N + 更 + tính từ.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 “学会思考” (tr. 78)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Ba câu đầu là <b>话题讨论</b> của sách (tr. 78: 学会思考), câu 4 mở rộng. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng từ mới: 反省 · 效率 · 疲劳 · 步骤 · 总算 · 一来……二来…….',
  questions:[
    {
      q_zh:'你是一个平时爱思考的人吗？当你遇到不顺利的情况时，你通常会怎么做？',
      q_vn:'Em có phải người hay suy nghĩ không? Khi gặp chuyện không thuận lợi, em thường làm gì?',
      hint:'Trả lời có / không, rồi kể cách em thường làm (dùng 反省, 先……再……)',
      sample:'我算是一个爱思考的人。遇到不顺利的事，我一般不马上着急，先安静下来反省一下，想想问题出在哪儿，再决定下一步怎么做。',
      sample_vn:'Tôi được coi là người hay suy nghĩ. Gặp chuyện không thuận lợi, tôi thường không sốt ruột ngay, trước hết bình tĩnh lại tự xem xét, nghĩ xem vấn đề nằm ở đâu, rồi mới quyết định bước tiếp theo làm thế nào.',
      note:'先……再…… (HSK 3) giúp kể các bước rõ ràng; 下一步 = bước tiếp theo.'
    },
    {
      q_zh:'请以学习或工作中一次经历为例，说说思考对你有哪些帮助。',
      q_vn:'Hãy lấy một trải nghiệm trong học tập hoặc công việc làm ví dụ, nói xem suy nghĩ đã giúp em những gì.',
      hint:'Kể MỘT lần cụ thể: trước — suy nghĩ — sau (dùng 总算, 效率)',
      sample:'高二的时候，我数学一直考不好，每天做很多题，可是效率很低。后来我反省了一下，发现自己总是不复习错题。改了方法以后，成绩总算提高了。',
      sample_vn:'Hồi lớp 11, môn toán của tôi thi mãi không tốt, ngày nào cũng làm rất nhiều bài mà hiệu quả rất thấp. Sau đó tôi tự xem xét lại, phát hiện mình luôn không ôn lại những bài làm sai. Đổi cách học rồi, điểm cuối cùng cũng tiến bộ.',
      note:'Đề yêu cầu “lấy một trải nghiệm làm ví dụ” — phải có câu chuyện cụ thể, không chỉ nói lý thuyết.'
    },
    {
      q_zh:'思考和行动，两者哪个更重要？你怎么看这个问题？',
      q_vn:'Suy nghĩ và hành động, cái nào quan trọng hơn? Em nhìn nhận vấn đề này thế nào?',
      hint:'Chọn quan điểm rõ ràng, dùng 一来……，二来…… nêu lý do',
      sample:'我觉得两者都重要，但应该先思考再行动。一来，想清楚了可以少走弯路；二来，行动的时候也更有信心。不过，只想不做也不行。',
      sample_vn:'Tôi thấy cả hai đều quan trọng, nhưng nên suy nghĩ trước rồi hành động. Một là, nghĩ rõ ràng rồi có thể bớt đi đường vòng; hai là, lúc hành động cũng tự tin hơn. Tuy vậy, chỉ nghĩ mà không làm cũng không được.',
      note:'Ôn điểm ngữ pháp 1: 一来……，二来…… để liệt kê lý do; 少走弯路 lấy từ phần 背景分析 của sách.'
    },
    {
      q_zh:'你属于课文里说的哪一种“忙”？为什么？',
      q_vn:'Em thuộc loại “bận” nào trong bài khoá? Vì sao?',
      hint:'Chọn một trong ba loại (被动 / 主动 / 虚伪), dẫn một ví dụ',
      sample:'说实话，我属于第一种忙。作业一多，我就被事情追着跑，很被动，每天都很疲劳。我希望以后能做工作的主人，忙而不乱。',
      sample_vn:'Nói thật, tôi thuộc loại bận thứ nhất. Hễ bài tập nhiều là tôi bị công việc đuổi chạy, rất bị động, ngày nào cũng mệt mỏi. Tôi hy vọng sau này có thể làm chủ công việc, bận mà không rối.',
      note:'Dùng lại cụm của bài khoá: 被事情追着, 工作的主人, 忙而不乱; 一……就…… (HSK 3).'
    }
  ]
};

// ══════════════════════════════════════════
// NGHE THEO ĐỀ — 练习册 bài 26, câu 1–8
// ══════════════════════════════════════════
var listenExamData = {
  intro:'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source:'Nguyên văn: 《HSK标准教程5·练习册》第26课 听力',
  items:[
    {
      n:1,
      lines:[{sp:'男',zh:'上海的那批货准备得怎么样了？时间可别耽误了。'},{sp:'女',zh:'您放心，小李他们这两天都在加班，保证按合同要求的日期发货。'}],
      q:'关于那批货，可以知道什么？',
      qvn:'Về lô hàng đó, có thể biết điều gì?',
      opts:['已经发货了','时间被耽误了','会按时发货','是小李订的'],
      ans:2,
      why:'保证按合同要求的日期发货 = đảm bảo giao hàng đúng ngày hợp đồng → sẽ giao đúng hạn. 别耽误了 chỉ là lời dặn, chưa bị trễ.',
      words:['批','耽误']
    },
    {
      n:2,
      lines:[{sp:'男',zh:'喂，你现在在宿舍吗？'},{sp:'女',zh:'我刚下课，正要去图书馆查一份资料，有什么事儿吗？'}],
      q:'女的现在准备做什么？',
      qvn:'Người phụ nữ bây giờ định làm gì?',
      opts:['去图书馆查资料','回宿舍休息','去教室上课','去找男的'],
      ans:0,
      why:'正要去图书馆查一份资料 = đang định đến thư viện tra tài liệu. 刚下课 — vừa tan học, nên không phải đi học.',
      words:[]
    },
    {
      n:3,
      lines:[{sp:'女',zh:'平时你要是能多关心一下孩子，他肯定也不至于考不及格吧？'},{sp:'男',zh:'这怎么能都怪我呢？你这当妈的也有责任啊。'}],
      q:'从他们的谈话中，可以知道什么？',
      qvn:'Từ cuộc nói chuyện, có thể biết điều gì?',
      opts:['男的很关心孩子','女的是孩子的老师','孩子考试没及格','孩子学习很好'],
      ans:2,
      why:'也不至于考不及格吧 = cũng chưa đến mức thi trượt → thực tế đứa trẻ đã thi trượt. 你这当妈的 → người nữ là MẸ, không phải cô giáo.',
      words:['至于']
    },
    {
      n:4,
      lines:[{sp:'男',zh:'总算弄好了，真把我累坏了。'},{sp:'女',zh:'快休息休息，没想到这么个小桌子安装起来还挺麻烦。'}],
      q:'关于男的，可以知道什么？',
      qvn:'Về người đàn ông, có thể biết điều gì?',
      opts:['把桌子弄坏了','觉得安装很简单','想请女的帮忙','累坏了'],
      ans:3,
      why:'真把我累坏了 = mệt rã rời. 总算弄好了 — cuối cùng cũng lắp xong, không làm hỏng bàn (bẫy chữ 坏).',
      words:['总算']
    },
    {
      n:5,
      lines:[{sp:'女',zh:'欢迎光临，本店五周年店庆，所有商品一律5折销售。'},{sp:'男',zh:'我想给孩子买双网球鞋，这种有42号的吗？'}],
      q:'从对话中可以知道什么？',
      qvn:'Từ đoạn hội thoại có thể biết điều gì?',
      opts:['所有商品都打五折','商店刚开业','没有42号的鞋','男的要给自己买鞋'],
      ans:0,
      why:'所有商品一律5折销售 = mọi mặt hàng đều giảm 50%. 五周年店庆 — kỷ niệm 5 năm, không phải mới khai trương; giày mua cho con.',
      words:['一律']
    },
    {
      n:6,
      lines:[{sp:'女',zh:'王总，这是您的机票，是往返的。'},{sp:'男',zh:'好的，谢谢。这两份合同我签过字了，你给销售部的刘经理送去吧。'}],
      q:'从对话中可以知道什么？',
      qvn:'Từ đoạn hội thoại có thể biết điều gì?',
      opts:['机票是单程的','男的签好了合同','女的是销售部经理','男的要去送合同'],
      ans:1,
      why:'这两份合同我签过字了 = hai bản hợp đồng tôi đã ký rồi. Vé là khứ hồi (往返); người mang hợp đồng đi là người NỮ.',
      words:[]
    },
    {
      n:7,
      lines:[{sp:'男',zh:'这个书架我怎么装不上呀？'},{sp:'女',zh:'你是按说明书上的步骤安装的吗？'},{sp:'男',zh:'是啊，有个零件我看不懂它装在哪儿，说明书上说得不清楚。'},{sp:'女',zh:'那你给卖家打个电话问问。'}],
      q:'男的为什么装不上书架？',
      qvn:'Vì sao người đàn ông không lắp được giá sách?',
      opts:['没有说明书','少了一个零件','说明书上写得不清楚','卖家不接电话'],
      ans:2,
      why:'说明书上说得不清楚 = sách hướng dẫn viết không rõ. Anh có đủ linh kiện, chỉ không hiểu lắp vào đâu.',
      words:['步骤']
    },
    {
      n:8,
      lines:[{sp:'男',zh:'你们家小雪的作业要做到几点？'},{sp:'女',zh:'吃晚饭前就完成了呀。现在学校不让留太多作业。'},{sp:'男',zh:'我们家小明每天都要做到十点钟。'},{sp:'女',zh:'那可不对，你要注意培养他的专注力，要提高效率。'}],
      q:'小明作业做到很晚，女的觉得是什么原因？',
      qvn:'Tiểu Minh làm bài tập đến rất muộn, người phụ nữ cho rằng nguyên nhân là gì?',
      opts:['作业太多','学校放学太晚','晚饭吃得太晚','做作业效率不高'],
      ans:3,
      why:'要注意培养他的专注力，要提高效率 → cô ấy cho rằng cháu thiếu tập trung, hiệu suất thấp. 学校不让留太多作业 — bài tập không nhiều, loại A.',
      words:['效率']
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
      scene:'Bạn thắc mắc vì sao dạo này em đi bộ đến trường mà không đi xe buýt.',
      a:{sp:'Bạn',zh:'你最近怎么天天走路上学？为什么不坐公交车呢？',vn:'Dạo này sao ngày nào cậu cũng đi bộ đi học thế? Sao không đi xe buýt?'},
      need:['Dùng 一来……，二来……'],
      sample:'一来走路可以锻炼身体，二来早上公交车太挤了，走路也只要二十来分钟。',
      samplePy:'Yī lái zǒu lù kěyǐ duànliàn shēntǐ, èr lái zǎoshang gōngjiāochē tài jǐ le, zǒu lù yě zhǐ yào èrshí lái fēnzhōng.',
      sampleVn:'Một là đi bộ rèn luyện được sức khoẻ, hai là buổi sáng xe buýt đông quá, đi bộ cũng chỉ mất chừng hai mươi phút.',
      tip:'一来……，二来…… liệt kê hai lý do (điểm ngữ pháp 1); 二十来分钟 = khoảng hai mươi phút — 来 chỉ số ước lượng.'
    },
    {
      scene:'Bạn hỏi em về thầy giáo mới và lịch thi, nhưng em chỉ biết một nửa.',
      a:{sp:'Bạn',zh:'新来的数学老师怎么样？什么时候期中考试？',vn:'Thầy toán mới thế nào? Bao giờ thi giữa kỳ?'},
      need:['Dùng 至于'],
      sample:'新老师讲课很清楚，也很有个性。至于什么时候考试，我也不太清楚，你问问班长吧。',
      samplePy:'Xīn lǎoshī jiǎngkè hěn qīngchu, yě hěn yǒu gèxìng. Zhìyú shénme shíhou kǎoshì, wǒ yě bú tài qīngchu, nǐ wènwen bānzhǎng ba.',
      sampleVn:'Thầy mới giảng rất dễ hiểu, cũng rất có cá tính. Còn khi nào thi thì mình cũng không rõ lắm, cậu hỏi lớp trưởng xem.',
      tip:'Trả lời ý đã biết trước, rồi dùng 至于 chuyển sang ý chưa biết (điểm ngữ pháp 2).'
    },
    {
      scene:'Mẹ hỏi bài tập nhóm em làm cả tháng nay đã xong chưa.',
      a:{sp:'Mẹ',zh:'你们那个小组作业做完了没有？都一个月了。',vn:'Bài tập nhóm của các con làm xong chưa? Đã một tháng rồi đấy.'},
      need:['Dùng 总算','Dùng 耽误'],
      sample:'总算做完了！前几天有个同学生病，耽误了好几天，还好最后按时交了。',
      samplePy:'Zǒngsuàn zuòwán le! Qián jǐ tiān yǒu ge tóngxué shēngbìng, dānwùle hǎo jǐ tiān, háihǎo zuìhòu ànshí jiāo le.',
      sampleVn:'Cuối cùng cũng xong rồi mẹ ạ! Mấy hôm trước có bạn bị ốm, lỡ mất mấy ngày, may mà cuối cùng vẫn nộp đúng hạn.',
      tip:'总算 thể hiện sự nhẹ nhõm sau thời gian dài (điểm ngữ pháp 3); 耽误了 + thời gian = lỡ mất ….'
    },
    {
      scene:'Bạn thân khoe ngày nào cũng thức học đến 2 giờ sáng nhưng điểm vẫn không lên.',
      a:{sp:'Bạn',zh:'我天天学到夜里两点，可成绩还是上不去，怎么办啊？',vn:'Ngày nào tớ cũng học đến 2 giờ sáng mà điểm vẫn không lên, làm sao bây giờ?'},
      need:['Dùng 疲劳','Dùng 效率'],
      sample:'你天天熬夜，身体太疲劳了，学习效率怎么会高呢？不如早点儿睡，早上再复习。',
      samplePy:'Nǐ tiāntiān áoyè, shēntǐ tài píláo le, xuéxí xiàolǜ zěnme huì gāo ne? Bùrú zǎo diǎnr shuì, zǎoshang zài fùxí.',
      sampleVn:'Cậu ngày nào cũng thức khuya, cơ thể mệt quá rồi, hiệu quả học sao mà cao được? Chi bằng ngủ sớm một chút, sáng dậy hẵng ôn.',
      tip:'效率 đi với 高 / 低; câu phản vấn 怎么会……呢 nhấn mạnh “không thể”.'
    },
    {
      scene:'Cả nhóm bị điểm thấp, một bạn cứ đổ lỗi cho đề khó và thầy chấm chặt.',
      a:{sp:'Bạn',zh:'这次考得这么差，都怪题太难，老师又太严格！',vn:'Lần này thi tệ thế, đều tại đề khó quá, thầy lại khắt khe quá!'},
      need:['Dùng 反省','Khuyên nhẹ nhàng'],
      sample:'别总怪别人了，我们先反省一下自己吧，是不是复习的步骤有问题？',
      samplePy:'Bié zǒng guài biérén le, wǒmen xiān fǎnxǐng yíxià zìjǐ ba, shì bu shì fùxí de bùzhòu yǒu wèntí?',
      sampleVn:'Đừng cứ trách người khác nữa, bọn mình tự xem lại bản thân trước đi, có phải các bước ôn tập có vấn đề không?',
      tip:'反省 + 自己: tự kiểm điểm — đúng tinh thần bài khoá “时时反省、总结”.'
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
      scene:'Loa thông báo ở sân bay.',
      a:'按规定，小动物一律不准带上飞机。',
      b:'小猫小狗什么的都别带上飞机啊。',
      better:'a',
      why:'Thông báo công cộng cần trang trọng: 按规定, 一律不准. Câu b là khẩu ngữ, như người nhà dặn nhau.'
    },
    {
      scene:'Em nhắn tin cho bạn thân sau khi làm xong đống bài tập.',
      a:'经过长时间的努力，本人已完成全部作业。',
      b:'作业总算写完了，累死我了！',
      better:'b',
      why:'Nhắn bạn thân: 总算……了 + 累死我了 tự nhiên, có cảm xúc. Câu a cứng như báo cáo.'
    },
    {
      scene:'Hãng hàng không gửi lời xin lỗi hành khách vì chuyến bay chậm.',
      a:'由于天气原因，航班延误，耽误了您的宝贵时间，我们深表歉意。',
      b:'不好意思啊，下雾了，飞机走不了，让你们等了半天。',
      better:'a',
      why:'Văn bản dịch vụ cần lịch sự, trang trọng: 由于, 您, 深表歉意. Câu b quá suồng sã.'
    },
    {
      scene:'Hiệu trưởng phát biểu trong lễ chào cờ.',
      a:'学校大力提倡同学们节约用水、用电。',
      b:'大家可别乱用水电啊，太浪费钱了。',
      better:'a',
      why:'Phát biểu trước toàn trường dùng văn viết: 大力提倡, 节约. Câu b giống lời bố mẹ nhắc con.'
    },
    {
      scene:'Em nhắn tin động viên bạn đang du học một mình.',
      a:'独自在异国求学，难免感到寂寞，望保重。',
      b:'一个人在国外肯定有点儿寂寞吧？想家了就给我打电话！',
      better:'b',
      why:'Tin nhắn bạn bè cần ấm áp, gần gũi: câu b tự nhiên. Câu a đúng nhưng như thư từ trang trọng (独自, 异国, 望保重).'
    },
    {
      scene:'Một người lạ hỏi em đường đến thư viện và giờ đóng cửa.',
      a:'关于图书馆闭馆时间的问题，本人无法提供准确信息。',
      b:'图书馆就在前面左边，至于几点关门，我就不太清楚了。',
      better:'b',
      why:'Chỉ đường cho người lạ: câu b lịch sự mà tự nhiên, dùng 至于 chuyển ý. Câu a cứng như văn bản hành chính (本人, 无法提供).'
    }
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI KHOÁ — bài tập 4 (tr. 77)
// ══════════════════════════════════════════
var retellData = {
  intro:'Bài tập 4 của giáo trình (tr. 77): <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, KHÔNG đọc thuộc lòng. Sách chia 3 ý (三种“忙” · 大导演的拍摄经历 · 比尔·盖茨的“闭关”); ở đây tách nhỏ thành 6 bước. Nhìn dàn ý và từ khoá, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline:[
    {step:'Ba loại “bận”',cue:'第一种忙很被动，人成了工作的奴隶；第二种忙很主动，人是工作的主人；第三种忙有些虚伪……',words:['忙碌','被动','奴隶','虚伪','思想']},
    {step:'Điều tâm đắc của tác giả',cue:'不一定知道正确的道路…… 时时反省、总结…… 不会在错误的道路上走得太远',words:['反省']},
    {step:'Đạo diễn vào rừng quay phim',cue:'据说有一位很有个性、爱冒险的大导演…… 拍印加文明的纪录片…… 雇了20来个当地人…… 一连三天都很顺利',words:['据说','个性','冒险','丛林','印加','文明','纪录','雇','来','批','出色','健步如飞','一连']},
    {step:'Ngày thứ tư người địa phương không đi',cue:'当地人拒绝行动…… 一来耽误时间，二来投资人不高兴…… 投资人是大人物，不敢得罪',words:['耽误','投资','至于','人物','得罪']},
    {step:'Tập tục và câu trả lời',cue:'经过沟通总算搞明白…… 每走三天休息一天…… 让灵魂追得上疲劳的身体…… 富有哲理',words:['总算','搞','习俗','灵魂','疲劳','哲理']},
    {step:'Việc “bế quan” của Bill Gates và lời kết',cue:'在提倡竞争的时代少了思考这一步骤…… 盖茨每年两次为期一周的“闭关”…… 任何人一律不见…… 寂寞，但效率高…… 多给自己一点思考的时间',words:['提倡','步骤','比尔·盖茨','闭关','一律','寂寞','效率']}
  ],
  checklist:[
    'Kể đủ sáu ý trên chưa, có bỏ mất câu trả lời “让灵魂追得上身体” không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 一来……二来……, 至于, 总算 — ba điểm ngữ pháp của bài — đúng chỗ không?',
    'Nói liền mạch khoảng 1–2 phút, hay còn ngắt quãng nhiều?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// BÀI TẬP SÁCH GIÁO KHOA (tr. 76–77) — bài 1, 2, 3
// ══════════════════════════════════════════
var sgkData = [
  {
    kieu:'kho',
    de:'选择合适的词语填空',
    vn:'Chọn từ thích hợp điền vào chỗ trống',
    tu:['寂寞','至于','耽误','提倡','一律','出色'],
    cau:[
      {s:'现在饭馆都＿＿节约，不浪费食物，“光盘”的意思就是把点的菜吃光。',dap:['提倡']},
      {s:'上次约刘经理见面，路上堵车，＿＿了很长时间，这次可别再出问题了。',dap:['耽误']},
      {s:'按规定，小动物＿＿不准带上飞机。',dap:['一律']},
      {s:'她有些＿＿，想让我到她那儿陪她聊聊天。',dap:['寂寞']},
      {s:'他顶住了压力，＿＿地发挥了自己的水平，打败了强敌。',dap:['出色']},
      {s:'你们两口子吵架归吵架，不＿＿要闹离婚吧？',dap:['至于']}
    ]
  },
  {
    kieu:'ab',
    de:'选择正确答案',
    vn:'Chọn đáp án đúng',
    cau:[
      {s:'为了保证病人的休息，午饭后＿＿不准探视（tànshì，thăm）。',opts:['一律','都'],ans:0,giai:'Quy định của bệnh viện, áp dụng cho mọi người không ngoại lệ → 一律不准. 都 thiếu sắc thái quy định; hơn nữa 都 thường cần chủ ngữ số nhiều đứng trước.'},
      {s:'你怎么＿＿的？不是说好了周末和小丽见面的吗？怎么又不去了？',opts:['搞','做'],ans:0,giai:'怎么搞的？ là câu khẩu ngữ cố định, trách nhẹ: “Sao lại ra thế?”. Không nói 怎么做的 với nghĩa này.'},
      {s:'因为有大雾，飞机不能起飞。＿＿了您的宝贵时间，非常抱歉！',opts:['耽误','影响'],ans:0,giai:'Làm lỡ, làm mất thời gian → 耽误时间. 影响 là tác động nói chung, không đi với 时间.'},
      {s:'马向阳在那儿当县长时，＿＿地完成了任务。',opts:['出色','优秀'],ans:0,giai:'Làm trạng ngữ + 地 + 完成 → 出色地完成. 优秀 tả phẩm chất chung (优秀的学生), ít làm trạng ngữ.'}
    ]
  },
  {
    kieu:'vitri',
    de:'给括号里的词选择适当的位置',
    vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
    cau:[
      {s:'看到房间满是灰尘，他发起A了愁，刚B坐了十C个D小时火车，实在没力气收拾了。',tu:'来',ans:'C',giai:'Trợ từ 来 đứng sau số chẵn chục, trước lượng từ: 十来个小时 = khoảng mười mấy tiếng (điểm ngữ pháp 1).'},
      {s:'我A找刘明天来B当导演，其实是C有点儿D的。',tu:'冒险',ans:'D',giai:'有点儿 + tính từ: 有点儿冒险; khung 是……的 bao lấy phần đánh giá → 其实是有点儿冒险的.'},
      {s:'A按学校B规定，缺课60节以上的学生C不允许D参加考试。',tu:'一律',ans:'C',giai:'Phó từ 一律 đứng sau chủ ngữ (缺课60节以上的学生), trước cụm động từ phủ định 不允许.'},
      {s:'小丽A地完成了B比赛的各项动作，C取得了第一名D的好成绩。',tu:'出色',ans:'A',giai:'出色 + 地 làm trạng ngữ trước động từ 完成: 出色地完成了…….'}
    ]
  }
];
