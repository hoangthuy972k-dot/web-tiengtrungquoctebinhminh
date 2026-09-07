// Đề thi thử HSK 2 – Đề số 3 (đề mẫu chính thức H21003 của Hanban).
window.EXAM_DATA = {
  id: 'hsk2-test-3',
  level: 'HSK 2',
  title: 'HSK 2 - Test 3',
  code: 'H21003',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-3/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-3.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: true, script: '今天是二十三号。', scriptVn: 'Hôm nay là ngày 23.' },
            { n: 2, img: 'l1-q2.jpg', answer: false, script: '她每天都去游泳。', scriptVn: 'Cô ấy ngày nào cũng đi bơi. (hình là chơi tennis)' },
            { n: 3, img: 'l1-q3.jpg', answer: true, script: '您说得太好了！', scriptVn: 'Ông nói hay quá!' },
            { n: 4, img: 'l1-q4.jpg', answer: true, script: '你生病了，要多喝水，多休息。', scriptVn: 'Em ốm rồi, phải uống nhiều nước, nghỉ ngơi nhiều.' },
            { n: 5, img: 'l1-q5.jpg', answer: true, script: '长时间看电脑，对眼睛不好。', scriptVn: 'Nhìn máy tính lâu không tốt cho mắt.' },
            { n: 6, img: 'l1-q6.jpg', answer: false, script: '中午朋友送了我两张电影票。', scriptVn: 'Buổi trưa bạn tặng tôi hai vé xem phim. (hình là thẻ ngân hàng)' },
            { n: 7, img: 'l1-q7.jpg', answer: false, script: '到了前面再向右走。', scriptVn: 'Đến phía trước rồi rẽ phải. (hình mũi tên rẽ trái)' },
            { n: 8, img: 'l1-q8.jpg', answer: true, script: '妻子喜欢吃早饭时看报纸。', scriptVn: 'Vợ tôi thích đọc báo khi ăn sáng.' },
            { n: 9, img: 'l1-q9.jpg', answer: false, script: '他这次没考好，所以不高兴。', scriptVn: 'Lần này cậu ấy thi không tốt nên không vui. (hình cậu bé cười với bài điểm A+)' },
            { n: 10, img: 'l1-q10.jpg', answer: false, script: '这鱼十块钱一斤，不错吧？', scriptVn: 'Cá này mười tệ một cân, được chứ? (hình là giỏ rau quả)' }
          ]
        },
        {
          name: 'Phần 2', range: [11, 20], type: 'pic-match',
          intro: 'Nghe hội thoại và chọn hình phù hợp (A–F).',
          groups: [
            {
              range: [11, 15], pics: { A: 'l2a-A.jpg', B: 'l2a-B.jpg', C: 'l2a-C.jpg', D: 'l2a-D.jpg', E: 'l2a-E.jpg', F: 'l2a-F.jpg' },
              example: 'Ví dụ: 男：你喜欢什么运动？ 女：我最喜欢踢足球。→ D',
              questions: [
                { n: 11, answer: 'A', script: '女：你也想吃？来，给你。\n男：你和狗说话，它能听懂吗？', scriptVn: 'Nữ: Mày cũng muốn ăn à? Đây, cho mày. / Nam: Em nói chuyện với chó, nó hiểu được không?' },
                { n: 12, answer: 'E', script: '男：等等我，你走得太快了！\n女：你太慢了。', scriptVn: 'Nam: Đợi tôi với, bạn đi nhanh quá! / Nữ: Bạn chậm quá.' },
                { n: 13, answer: 'F', script: '女：还冷吗？\n女：现在不冷了，谢谢妈妈。', scriptVn: 'Nữ: Còn lạnh không? / Nữ: Giờ hết lạnh rồi, cảm ơn mẹ.' },
                { n: 14, answer: 'B', script: '男：这些衣服你什么时候洗的？我怎么没看见。\n女：就是昨天下午。', scriptVn: 'Nam: Những quần áo này em giặt lúc nào? Sao anh không thấy. / Nữ: Chiều hôm qua đấy.' },
                { n: 15, answer: 'C', script: '女：你好！我的车出问题了，你们能来帮我看一下吗？\n男：好的，请告诉我您在哪儿。', scriptVn: 'Nữ: Xin chào! Xe tôi bị hỏng, các anh đến xem giúp được không? / Nam: Được, xin cho biết cô đang ở đâu.' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'A', script: '男：你在想什么呢？\n女：我？我在想下个月去哪儿旅游好呢。', scriptVn: 'Nam: Em đang nghĩ gì thế? / Nữ: Em à? Em đang nghĩ tháng sau đi du lịch ở đâu thì hay.' },
                { n: 17, answer: 'E', script: '女：喂，你到北京了吗？\n男：到了，我现在已经到饭店了，正想休息休息呢。', scriptVn: 'Nữ: Alô, anh đến Bắc Kinh chưa? / Nam: Đến rồi, giờ anh đã ở khách sạn, đang định nghỉ một chút.' },
                { n: 18, answer: 'D', script: '男：在哪儿呢？我怎么找不到？\n女：你看，就在那儿！', scriptVn: 'Nam: Ở đâu nhỉ? Sao anh không tìm thấy? / Nữ: Anh xem, ở ngay kia!' },
                { n: 19, answer: 'C', script: '女：先生您好，您想喝点儿什么？\n男：我要一杯咖啡，谢谢！', scriptVn: 'Nữ: Chào ông, ông muốn uống gì? / Nam: Cho tôi một cốc cà phê, cảm ơn!' },
                { n: 20, answer: 'B', script: '男：您女儿怎么星期六还去学校？\n女：她正在学习跳舞，每星期上一次课。', scriptVn: 'Nam: Sao thứ Bảy con gái chị vẫn đến trường? / Nữ: Nó đang học múa, mỗi tuần học một buổi.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '学习', py: 'xuéxí' }, { zh: '运动', py: 'yùndòng' }, { zh: '跳舞', py: 'tiàowǔ' }], answer: 'B', script: '女：外面天气很好，我们出去运动运动？\n男：好，打篮球怎么样？\n问：男的想做什么？', scriptVn: 'Nữ: Bên ngoài trời đẹp, mình ra ngoài vận động chút nhé? / Nam: Được, chơi bóng rổ thế nào? / Hỏi: Người nam muốn làm gì?' },
            { n: 22, options: [{ zh: '很贵', py: 'hěn guì' }, { zh: '很便宜', py: 'hěn piányi' }, { zh: '不好找', py: 'bù hǎo zhǎo' }], answer: 'A', script: '男：你在这个商店买过东西吗？\n女：买过一次。这儿的东西还不错，就是太贵了。\n问：这个商店的东西怎么样？', scriptVn: 'Nam: Cậu mua đồ ở cửa hàng này bao giờ chưa? / Nữ: Mua một lần rồi. Đồ ở đây khá tốt, chỉ là đắt quá. / Hỏi: Đồ ở cửa hàng này thế nào?' },
            { n: 23, options: [{ zh: '8点30分', py: 'bā diǎn sānshí fēn' }, { zh: '8点40分', py: 'bā diǎn sìshí fēn' }, { zh: '8点50分', py: 'bā diǎn wǔshí fēn' }], answer: 'B', script: '女：小李怎么还没来，都八点四十了。\n男：我已经给他打电话了，他说在出租车上，几分钟后就到。\n问：现在几点了？', scriptVn: 'Nữ: Sao Tiểu Lý vẫn chưa đến, tám giờ bốn mươi rồi. / Nam: Tôi gọi cho cậu ấy rồi, cậu ấy nói đang trên taxi, vài phút nữa đến. / Hỏi: Bây giờ là mấy giờ?' },
            { n: 24, options: [{ zh: '教室', py: 'jiàoshì' }, { zh: '商店', py: 'shāngdiàn' }, { zh: '医院', py: 'yīyuàn' }], answer: 'B', script: '男：小姐，这件衣服有大一点儿的吗？\n女：真对不起，这是最后一件了。\n问：说话人最可能在哪儿？', scriptVn: 'Nam: Cô ơi, chiếc áo này có cỡ lớn hơn không? / Nữ: Thật xin lỗi, đây là chiếc cuối cùng rồi. / Hỏi: Người nói có thể đang ở đâu?' },
            { n: 25, options: [{ zh: '他妹妹', py: 'tā mèimei' }, { zh: '他弟弟', py: 'tā dìdi' }, { zh: '他儿子', py: 'tā érzi' }], answer: 'C', script: '女：你今天买的东西真不少。\n男：明天是我儿子的生日，都是给他买的。\n问：明天是谁的生日？', scriptVn: 'Nữ: Hôm nay anh mua nhiều đồ thật. / Nam: Mai là sinh nhật con trai tôi, đều mua cho nó. / Hỏi: Mai là sinh nhật của ai?' },
            { n: 26, options: [{ zh: '菜', py: 'cài' }, { zh: '米饭', py: 'mǐfàn' }, { zh: '水果', py: 'shuǐguǒ' }], answer: 'A', script: '男：服务员，我们想再要一个菜。\n女：好的，您要什么菜？\n问：男的向服务员要什么？', scriptVn: 'Nam: Phục vụ, chúng tôi muốn gọi thêm một món. / Nữ: Vâng, ông muốn món gì? / Hỏi: Người nam gọi phục vụ lấy gì?' },
            { n: 27, options: [{ zh: '想唱歌', py: 'xiǎng chànggē' }, { zh: '想看电视', py: 'xiǎng kàn diànshì' }, { zh: '想看电影', py: 'xiǎng kàn diànyǐng' }], answer: 'C', script: '女：你给我打电话了？对不起，什么事？\n男：我想问你晚上去不去看电影？\n问：男的为什么给女的打电话？', scriptVn: 'Nữ: Anh gọi cho em à? Xin lỗi, có việc gì thế? / Nam: Anh muốn hỏi tối em có đi xem phim không? / Hỏi: Vì sao người nam gọi cho người nữ?' },
            { n: 28, options: [{ zh: '手机', py: 'shǒujī' }, { zh: '手表', py: 'shǒubiǎo' }, { zh: '自行车', py: 'zìxíngchē' }], answer: 'A', script: '男：你看见我的手机了吗？\n女：让我想想，你看是不是在床上？\n问：男的在找什么？', scriptVn: 'Nam: Em thấy điện thoại của anh không? / Nữ: Để em nghĩ xem, anh xem có ở trên giường không? / Hỏi: Người nam đang tìm gì?' },
            { n: 29, options: [{ zh: '姐姐', py: 'jiějie' }, { zh: '朋友', py: 'péngyou' }, { zh: '同学', py: 'tóngxué' }], answer: 'B', script: '女：你的车是什么时候买的？\n男：不是买的，去年我的一个朋友出国了，车就送给我了。\n问：车是谁送的？', scriptVn: 'Nữ: Xe của anh mua khi nào? / Nam: Không phải mua, năm ngoái một người bạn của tôi ra nước ngoài, tặng xe lại cho tôi. / Hỏi: Xe là ai tặng?' },
            { n: 30, options: [{ zh: '不想回家', py: 'bù xiǎng huí jiā' }, { zh: '不认识路', py: 'bú rènshi lù' }, { zh: '住得不远', py: 'zhù de bù yuǎn' }], answer: 'C', script: '男：今天太晚了，我送你回家吧。\n女：没关系，我家离这儿很近。\n问：女的是什么意思？', scriptVn: 'Nam: Hôm nay muộn quá, để tôi đưa bạn về. / Nữ: Không sao, nhà tôi cách đây rất gần. / Hỏi: Người nữ có ý gì?' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '不会说', py: 'bú huì shuō' }, { zh: '不太好', py: 'bú tài hǎo' }, { zh: '非常好', py: 'fēicháng hǎo' }], answer: 'C', script: '男：你们学校有两个外国学生？\n女：是，你怎么知道的？\n男：听我哥说的。他们会说汉语吗？\n女：他们的汉语都非常好，大家很喜欢他们。\n问：那两个外国学生的汉语怎么样？', scriptVn: 'Nam: Trường cậu có hai học sinh nước ngoài à? / Nữ: Đúng, sao cậu biết? / Nam: Nghe anh tôi nói. Họ biết nói tiếng Trung không? / Nữ: Tiếng Trung của họ đều rất tốt, mọi người rất quý họ. / Hỏi: Tiếng Trung của hai học sinh nước ngoài đó thế nào?' },
            { n: 32, options: [{ zh: '送她', py: 'sòng tā' }, { zh: '去北京', py: 'qù Běijīng' }, { zh: '叫她起床', py: 'jiào tā qǐchuáng' }], answer: 'A', script: '女：我明天去北京，上午的飞机，你能送我去机场吗？\n男：没问题，明天我休息。几点的飞机？\n女：上午九点二十的。谢谢你！\n男：不客气！再见。\n问：女的想请男的做什么？', scriptVn: 'Nữ: Mai tôi đi Bắc Kinh, chuyến bay buổi sáng, anh đưa tôi ra sân bay được không? / Nam: Không vấn đề, mai tôi nghỉ. Máy bay mấy giờ? / Nữ: Chín giờ hai mươi sáng. Cảm ơn anh! / Nam: Không có gì! Tạm biệt. / Hỏi: Người nữ muốn nhờ người nam làm gì?' },
            { n: 33, options: [{ zh: '多买些', py: 'duō mǎi xiē' }, { zh: '少买些', py: 'shǎo mǎi xiē' }, { zh: '别卖了', py: 'bié mài le' }], answer: 'B', script: '男：苹果很便宜，我们买一些吧？\n女：买，多吃水果对身体好。\n男：那多买几斤？\n女：别买太多，买几斤就可以了。\n问：女的是什么意思？', scriptVn: 'Nam: Táo rẻ lắm, mình mua ít nhé? / Nữ: Mua, ăn nhiều hoa quả tốt cho sức khoẻ. / Nam: Vậy mua thêm mấy cân? / Nữ: Đừng mua nhiều quá, vài cân là được. / Hỏi: Người nữ có ý gì?' },
            { n: 34, options: [{ zh: '生病了', py: 'shēngbìng le' }, { zh: '回答错了', py: 'huídá cuò le' }, { zh: '打错电话了', py: 'dǎ cuò diànhuà le' }], answer: 'C', script: '女：你好，请问张小姐在吗？\n男：你找谁？\n女：张欢，张小姐是在这儿工作吗？\n男：你打错了，我们这儿没有叫张欢的。\n问：女的怎么了？', scriptVn: 'Nữ: Xin chào, cho hỏi cô Trương có ở đó không? / Nam: Cô tìm ai? / Nữ: Trương Hoan, cô Trương làm việc ở đây phải không? / Nam: Cô gọi nhầm rồi, chỗ chúng tôi không có ai tên Trương Hoan. / Hỏi: Người nữ làm sao?' },
            { n: 35, options: [{ zh: '同学', py: 'tóngxué' }, { zh: '老师', py: 'lǎoshī' }, { zh: '医生', py: 'yīshēng' }], answer: 'A', script: '男：今天星期几？\n女：星期日。\n男：我的天！今天下午我同学要来。现在几点了？\n女：快两点了。\n问：今天下午谁要来？', scriptVn: 'Nam: Hôm nay thứ mấy? / Nữ: Chủ nhật. / Nam: Trời ơi! Chiều nay bạn học của anh sẽ đến. Giờ mấy giờ rồi? / Nữ: Sắp hai giờ. / Hỏi: Chiều nay ai sẽ đến?' }
          ]
        }
      ]
    },
    {
      id: 'read', name: 'Đọc', icon: 'book',
      parts: [
        {
          name: 'Phần 1', range: [36, 40], type: 'pic-match',
          intro: 'Chọn hình phù hợp với mỗi câu (A–F).',
          groups: [
            {
              range: [36, 40], pics: { A: 'r1-A.jpg', B: 'r1-B.jpg', C: 'r1-C.jpg', D: 'r1-D.jpg', E: 'r1-E.jpg', F: 'r1-F.jpg' },
              example: 'Ví dụ: 每个星期六，我都去打篮球。→ D',
              questions: [
                { n: 36, zh: '雨不下了，天晴了。', py: 'Yǔ bú xià le, tiān qíng le.', vn: 'Mưa tạnh rồi, trời quang rồi.', answer: 'F' },
                { n: 37, zh: '他给女朋友买了一个新手机。', py: 'Tā gěi nǚpéngyou mǎile yí ge xīn shǒujī.', vn: 'Anh ấy mua cho bạn gái một chiếc điện thoại mới.', answer: 'C' },
                { n: 38, zh: '准备好了吗？好，笑一笑。', py: 'Zhǔnbèi hǎo le ma? Hǎo, xiào yi xiào.', vn: 'Sẵn sàng chưa? Được, cười lên nào.', answer: 'B' },
                { n: 39, zh: '非常欢迎你来我们公司工作！', py: 'Fēicháng huānyíng nǐ lái wǒmen gōngsī gōngzuò!', vn: 'Rất hoan nghênh bạn đến làm việc ở công ty chúng tôi!', answer: 'E' },
                { n: 40, zh: '每天早上她都要慢跑一小时。', py: 'Měi tiān zǎoshang tā dōu yào màn pǎo yì xiǎoshí.', vn: 'Mỗi sáng cô ấy đều chạy bộ chậm một tiếng.', answer: 'A' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '一起', py: 'yìqǐ' }, { k: 'B', zh: '西瓜', py: 'xīguā' }, { k: 'C', zh: '题', py: 'tí' },
            { k: 'D', zh: '号', py: 'hào' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '雪', py: 'xuě' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '天阴了，可能要下（　）。', py: 'Tiān yīn le, kěnéng yào xià (　).', vn: 'Trời âm u rồi, có lẽ sắp có (tuyết).', answer: 'F' },
            { n: 42, zh: '我要睡觉了，那些（　）明天再做吧。', py: 'Wǒ yào shuìjiào le, nàxiē (　) míngtiān zài zuò ba.', vn: 'Tôi đi ngủ đây, những (bài) đó mai làm tiếp.', answer: 'C' },
            { n: 43, zh: '我希望能和你在（　）。', py: 'Wǒ xīwàng néng hé nǐ zài (　).', vn: 'Tôi mong được ở (bên nhau) cùng bạn.', answer: 'A' },
            { n: 44, zh: '我今年14岁，我的生日是6月7（　）。', py: 'Wǒ jīnnián shísì suì, wǒ de shēngrì shì liù yuè qī (　).', vn: 'Năm nay tôi 14 tuổi, sinh nhật tôi là (ngày) 7 tháng 6.', answer: 'D' },
            { n: 45, zh: '男：现在（　）多少钱一斤？\n女：我看看，这儿写着呢，5元一斤。', py: 'Nán: Xiànzài (　) duōshao qián yì jīn?\nNǚ: Wǒ kànkan, zhèr xiězhe ne, wǔ yuán yì jīn.', vn: 'Nam: Bây giờ (dưa hấu) bao nhiêu tiền một cân? / Nữ: Để tôi xem, đây có ghi, 5 tệ một cân.', answer: 'B' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '您请进，这就是我的家。这个房间是我和我丈夫的，旁边那个小的是孩子的房间。', py: 'Nín qǐng jìn, zhè jiù shì wǒ de jiā. Zhège fángjiān shì wǒ hé wǒ zhàngfu de, pángbiān nàge xiǎo de shì háizi de fángjiān.', vn: 'Mời ông vào, đây là nhà tôi. Phòng này là của tôi và chồng, phòng nhỏ bên cạnh là phòng của con.', star: '我们的房间比孩子的大。', starPy: 'Wǒmen de fángjiān bǐ háizi de dà.', starVn: 'Phòng của chúng tôi lớn hơn phòng của con.', answer: true },
            { n: 47, zh: '我爸爸不爱喝咖啡，他喜欢喝茶，每天上午都会喝几杯热茶。', py: 'Wǒ bàba bú ài hē kāfēi, tā xǐhuan hē chá, měi tiān shàngwǔ dōu huì hē jǐ bēi rè chá.', vn: 'Bố tôi không thích uống cà phê, ông thích uống trà, sáng nào cũng uống mấy chén trà nóng.', star: '爸爸觉得茶不好喝。', starPy: 'Bàba juéde chá bù hǎohē.', starVn: 'Bố thấy trà không ngon.', answer: false },
            { n: 48, zh: '他在火车站工作，每天都很忙，但他很少说累，他觉得能帮助人们是他最大的快乐。', py: 'Tā zài huǒchēzhàn gōngzuò, měi tiān dōu hěn máng, dàn tā hěn shǎo shuō lèi, tā juéde néng bāngzhù rénmen shì tā zuì dà de kuàilè.', vn: 'Anh ấy làm việc ở ga tàu, ngày nào cũng bận, nhưng rất ít khi kêu mệt, anh ấy thấy giúp được mọi người là niềm vui lớn nhất.', star: '他很喜欢他的工作。', starPy: 'Tā hěn xǐhuan tā de gōngzuò.', starVn: 'Anh ấy rất thích công việc của mình.', answer: true },
            { n: 49, zh: '这些桌子和椅子都是100多年前做的，所以比现在的要贵很多。', py: 'Zhèxiē zhuōzi hé yǐzi dōu shì yìbǎi duō nián qián zuò de, suǒyǐ bǐ xiànzài de yào guì hěn duō.', vn: 'Những bàn ghế này đều được làm hơn 100 năm trước, nên đắt hơn đồ bây giờ nhiều.', star: '这些桌子、椅子都很新。', starPy: 'Zhèxiē zhuōzi, yǐzi dōu hěn xīn.', starVn: 'Những bàn ghế này đều rất mới.', answer: false },
            { n: 50, zh: '他做的菜比我做的好吃，但是因为工作忙，他很少做。', py: 'Tā zuò de cài bǐ wǒ zuò de hǎochī, dànshì yīnwèi gōngzuò máng, tā hěn shǎo zuò.', vn: 'Món anh ấy nấu ngon hơn tôi nấu, nhưng vì bận việc nên anh ấy rất ít nấu.', star: '他不会做菜。', starPy: 'Tā bú huì zuò cài.', starVn: 'Anh ấy không biết nấu ăn.', answer: false }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '对不起，再给我一天时间？', py: 'Duìbuqǐ, zài gěi wǒ yì tiān shíjiān?', vn: 'Xin lỗi, cho tôi thêm một ngày nữa nhé?' },
                { k: 'B', zh: '王老师，你的电话。', py: 'Wáng lǎoshī, nǐ de diànhuà.', vn: 'Thầy Vương, điện thoại của thầy.' },
                { k: 'C', zh: '一个鸡蛋，喝了些牛奶。', py: 'Yí ge jīdàn, hēle xiē niúnǎi.', vn: 'Một quả trứng, uống chút sữa.' },
                { k: 'D', zh: '你出去的时候多穿些衣服。', py: 'Nǐ chūqù de shíhou duō chuān xiē yīfu.', vn: 'Lúc ra ngoài mặc thêm áo vào.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '这船是从上海开来的。', py: 'Zhè chuán shì cóng Shànghǎi kāi lái de.', vn: 'Con tàu này chạy từ Thượng Hải đến.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '它很大，能坐一千多人。', py: 'Tā hěn dà, néng zuò yìqiān duō rén.', vn: 'Nó rất lớn, chở được hơn một nghìn người.', answer: 'F' },
                { n: 52, zh: '今天真冷，有零下10℃吧？', py: 'Jīntiān zhēn lěng, yǒu líng xià shí dù ba?', vn: 'Hôm nay lạnh thật, chắc âm 10 độ nhỉ?', answer: 'D' },
                { n: 53, zh: '第一次来这儿？早上吃什么了？', py: 'Dì-yī cì lái zhèr? Zǎoshang chī shénme le?', vn: 'Lần đầu đến đây à? Sáng ăn gì rồi?', answer: 'C' },
                { n: 54, zh: '那本书你读完了吗？', py: 'Nà běn shū nǐ dú wán le ma?', vn: 'Cuốn sách đó bạn đọc xong chưa?', answer: 'A' },
                { n: 55, zh: '谢谢！是谁？', py: 'Xièxie! Shì shéi?', vn: 'Cảm ơn! Là ai vậy?', answer: 'B' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '这个名字很有意思。', py: 'Zhège míngzi hěn yǒu yìsi.', vn: 'Cái tên này rất thú vị.' },
                { k: 'B', zh: '太多了吧？这是药！', py: 'Tài duō le ba? Zhè shì yào!', vn: 'Nhiều quá nhỉ? Đây là thuốc đấy!' },
                { k: 'C', zh: '你姐姐真高，这么漂亮，她有男朋友了吗？', py: 'Nǐ jiějie zhēn gāo, zhème piàoliang, tā yǒu nán péngyou le ma?', vn: 'Chị bạn cao thật, đẹp thế, chị ấy có bạn trai chưa?' },
                { k: 'D', zh: '在门后面玩儿呢。', py: 'Zài mén hòumiàn wánr ne.', vn: 'Đang chơi sau cửa kìa.' },
                { k: 'E', zh: '您看了吗？没什么问题吧？', py: 'Nín kàn le ma? Méi shénme wèntí ba?', vn: 'Thầy xem chưa? Không có vấn đề gì chứ?' }
              ],
              questions: [
                { n: 56, zh: '这个字你写错了，是"白"，不是"百"。', py: 'Zhège zì nǐ xiě cuò le, shì "bái", bú shì "bǎi".', vn: 'Chữ này em viết sai rồi, là "白" chứ không phải "百".', answer: 'E' },
                { n: 57, zh: '你要给她介绍一个吗？', py: 'Nǐ yào gěi tā jièshào yí ge ma?', vn: 'Bạn muốn giới thiệu cho chị ấy một người à?', answer: 'C' },
                { n: 58, zh: '我的小猫呢？', py: 'Wǒ de xiǎomāo ne?', vn: 'Con mèo nhỏ của tôi đâu?', answer: 'D' },
                { n: 59, zh: '我爸爸姓刘，我妈妈姓杨，所以我叫刘杨。', py: 'Wǒ bàba xìng Liú, wǒ māma xìng Yáng, suǒyǐ wǒ jiào Liúyáng.', vn: 'Bố tôi họ Lưu, mẹ tôi họ Dương, nên tôi tên Lưu Dương.', answer: 'A' },
                { n: 60, zh: '医生说大人一天可以吃4次。', py: 'Yīshēng shuō dàren yì tiān kěyǐ chī sì cì.', vn: 'Bác sĩ nói người lớn một ngày có thể uống 4 lần.', answer: 'B' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
