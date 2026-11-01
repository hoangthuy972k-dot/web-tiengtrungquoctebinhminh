// Đề thi thử HSK 4 – Đề số 1 (đề mẫu H41001 của Hanban).
// Cấu trúc: Nghe 45 câu (~30 phút), Đọc 40 câu, Viết 15 câu; tổng 100 câu, 105 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (theo tỉ lệ câu đúng), tổng 300, đạt từ 180.
// audio: [giây bắt đầu, giây kết thúc] từng câu trong file nghe (mỗi câu đọc 1 lần), dò bằng khoảng lặng (S\h4de\moc-hsk4.js).
// Sinh bằng S\h4de\gan-de-hsk4.js 1 — sửa dữ liệu ở de-1.json / vn-1.js rồi chạy lại.
window.EXAM_DATA = {
  id: 'hsk4-test-1',
  level: 'HSK 4',
  title: 'HSK 4 - Test 1',
  code: 'H41001',
  durationSec: 105 * 60,
  maxScore: 300,
  passScore: 180,
  img: '/exam/img/hsk4-test-1/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones', audio: '/audio/exam/hsk4-test-1.mp3', note: 'Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu chỉ đọc 1 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-text', intro: 'Nghe đoạn ngắn, phán đoán câu ★ đúng hay sai.',
          questions: [
            { n: 1, star: '今天天气不错。', starVn: 'Hôm nay thời tiết đẹp.', answer: true, audio: [128.8, 151.5], script: '喂？我们去树林里走走吧，今天的阳光多好啊，很暖和。好吧？图书馆门口儿见？', scriptVn: 'A lô? Chúng mình ra rừng cây đi dạo đi, hôm nay nắng đẹp quá, rất ấm áp. Được không? Gặp nhau ở cổng thư viện nhé?' },
            { n: 2, star: '他们俩经常聊天。', starVn: 'Hai người họ thường xuyên trò chuyện.', answer: false, audio: [160.6, 180.5], script: '我经常在电梯里遇到她，可能她也在这座大楼里上班。但是我们从来没有说过话，只是看着很熟悉。', scriptVn: 'Tôi thường gặp cô ấy trong thang máy, có lẽ cô ấy cũng làm việc trong tòa nhà này. Nhưng chúng tôi chưa bao giờ nói chuyện với nhau, chỉ là trông quen mặt thôi.' },
            { n: 3, star: '做西红柿鸡蛋汤很简单。', starVn: 'Nấu canh cà chua trứng rất đơn giản.', answer: true, audio: [189.7, 210.9], script: '西红柿鸡蛋汤的做法很简单，一点儿也不复杂，准备几个西红柿和鸡蛋就可以了，我保证你一次就能学会。', scriptVn: 'Cách nấu canh cà chua trứng rất đơn giản, chẳng phức tạp chút nào, chỉ cần chuẩn bị mấy quả cà chua và trứng là được, tôi đảm bảo bạn học một lần là biết.' },
            { n: 4, star: '他爱打篮球。', starVn: 'Anh ấy thích chơi bóng rổ.', answer: true, audio: [220.1, 244.5], script: '身高只有一米六零，他是世界上最著名的矮个子篮球运动员。他曾经说过：“篮球不只是让那些高个子打的，也是给那些喜欢它的人们打的。”', scriptVn: 'Chỉ cao 1m60, anh ấy là cầu thủ bóng rổ thấp bé nổi tiếng nhất thế giới. Anh từng nói: "Bóng rổ không chỉ dành cho người cao, mà còn dành cho tất cả những ai yêu thích nó."' },
            { n: 5, star: '小刘受到了表扬。', starVn: 'Tiểu Lưu được khen ngợi.', answer: true, audio: [253.5, 276.1], script: '小刘已经提前完成了全年任务，我希望你们各位也都能像小刘一样，希望你们加油！好，现在让我们一起鼓掌祝贺小刘！', scriptVn: 'Tiểu Lưu đã hoàn thành trước thời hạn nhiệm vụ cả năm, tôi mong các bạn cũng làm được như Tiểu Lưu, cố lên nhé! Nào, bây giờ chúng ta cùng vỗ tay chúc mừng Tiểu Lưu!' },
            { n: 6, star: '他刚下飞机。', starVn: 'Anh ấy vừa xuống máy bay.', answer: false, audio: [285.3, 307.5], script: '喂，是你啊，我今天去北京出差。我现在在机场，等我到了北京以后再给你打电话好吗？飞机马上就要起飞了。', scriptVn: 'A lô, là cậu à, hôm nay tớ đi công tác Bắc Kinh. Giờ tớ đang ở sân bay, đợi đến Bắc Kinh rồi tớ gọi lại cho cậu nhé? Máy bay sắp cất cánh rồi.' },
            { n: 7, star: '姐妹俩性格差不多。', starVn: 'Tính cách hai chị em gần giống nhau.', answer: false, audio: [316.7, 337.9], script: '虽然她俩是姐妹，性格却很不一样。姐姐非常安静，极少说话，妹妹正好相反，最喜欢和人聊天。', scriptVn: 'Tuy hai người là chị em nhưng tính cách lại rất khác nhau. Chị rất trầm, rất ít nói; em thì ngược lại, thích nhất là trò chuyện với người khác.' },
            { n: 8, star: '他想给老王一张演出票。', starVn: 'Anh ấy muốn đưa lão Vương một vé xem biểu diễn.', answer: true, audio: [347, 369.7], script: '老王，我今晚要加班，这张票浪费了就可惜了。你去看吧，听说这次演出邀请了许多著名的演员，很精彩的。', scriptVn: 'Lão Vương, tối nay tôi phải tăng ca, bỏ phí tấm vé này thì tiếc lắm. Anh đi xem đi, nghe nói buổi biểu diễn lần này mời nhiều diễn viên nổi tiếng, hay lắm đấy.' },
            { n: 9, star: '小张的调查结果写得很好。', starVn: 'Kết quả khảo sát của Tiểu Trương viết rất tốt.', answer: false, audio: [378.8, 400.7], script: '小张，你这份计划书写得不错，就按照这个计划去做市场调查吧。下个月我要看调查结果。', scriptVn: 'Tiểu Trương, bản kế hoạch này cậu viết khá tốt, cứ theo kế hoạch này mà đi khảo sát thị trường nhé. Tháng sau tôi muốn xem kết quả khảo sát. (Mới có kế hoạch, chưa có kết quả.)' },
            { n: 10, star: '女儿不同意打针。', starVn: 'Con gái không chịu tiêm.', answer: false, audio: [409.9, 430.1], script: '女儿发烧了，我带她去医院。大夫给她打了一针，三岁的女儿尽管很害怕打针，不过她没有哭。', scriptVn: 'Con gái bị sốt, tôi đưa cháu đi bệnh viện. Bác sĩ tiêm cho cháu một mũi, con gái ba tuổi tuy rất sợ tiêm nhưng không hề khóc.' }
          ]
        },
        {
          name: 'Phần 2', range: [11, 25], type: 'mc', intro: 'Nghe hội thoại ngắn, chọn đáp án đúng.',
          questions: [
            { n: 11, options: [{ zh: '银行对面' }, { zh: '银行右边' }, { zh: '车站附近' }, { zh: '使馆西边' }], answer: 'A', audio: [476.3, 497.1], script: '男：请问，附近有超市吗？\n女：前面那儿有个银行，银行对面有一个小超市。\n问：超市在哪儿？', scriptVn: 'Nam: Xin hỏi gần đây có siêu thị không? / Nữ: Phía trước có một ngân hàng, đối diện ngân hàng có một siêu thị nhỏ. / Hỏi: Siêu thị ở đâu? (A đối diện ngân hàng · B bên phải ngân hàng · C gần bến xe · D phía tây đại sứ quán)' },
            { n: 12, options: [{ zh: '请假' }, { zh: '唱歌' }, { zh: '散步' }, { zh: '买东西' }], answer: 'D', audio: [512, 530.6], script: '女：天都这么晚了，你还出去干什么？\n男：我们明天去上海旅游，我要去买一个轻一点儿的行李箱。\n问：男的现在要去做什么？', scriptVn: 'Nữ: Muộn thế này rồi, anh còn ra ngoài làm gì? / Nam: Mai bọn anh đi du lịch Thượng Hải, anh phải đi mua một cái vali nhẹ hơn chút. / Hỏi: Người nam bây giờ định đi làm gì? (A xin nghỉ · B hát · C đi dạo · D mua đồ)' },
            { n: 13, options: [{ zh: '不想吃饭' }, { zh: '需要鼓励' }, { zh: '放弃减肥' }, { zh: '继续运动' }], answer: 'C', audio: [545.7, 564.7], script: '男：怎么又买这么多饼干和巧克力，难道你不减肥了？\n女：减了一个月都没有瘦下来，我实在没有信心了。\n问：女的是什么意思？', scriptVn: 'Nam: Sao lại mua nhiều bánh quy với sô-cô-la thế, chẳng lẽ em không giảm cân nữa à? / Nữ: Giảm cả tháng mà chẳng gầy đi chút nào, em thật sự hết tự tin rồi. / Hỏi: Ý người nữ là gì? (A không muốn ăn cơm · B cần được động viên · C bỏ giảm cân · D tiếp tục tập luyện)' },
            { n: 14, options: [{ zh: '准备礼物' }, { zh: '打印材料' }, { zh: '收拾房间' }, { zh: '讨论问题' }], answer: 'B', audio: [579.7, 597.4], script: '女：明天几点到？八点来得及来不及？\n男：提前点儿吧？咱们还得负责打印会议材料呢。\n问：他们要提前做什么？', scriptVn: 'Nữ: Mai mấy giờ đến? Tám giờ có kịp không? / Nam: Đến sớm chút đi? Chúng ta còn phải lo in tài liệu cho cuộc họp nữa. / Hỏi: Họ phải đến sớm để làm gì? (A chuẩn bị quà · B in tài liệu · C dọn phòng · D thảo luận vấn đề)' },
            { n: 15, options: [{ zh: '很感动' }, { zh: '很突然' }, { zh: '很后悔' }, { zh: '很失望' }], answer: 'B', audio: [612.4, 631.4], script: '男：李老师，我下个月五号要结婚了。\n女：你是在开玩笑吧？你们才认识一个月呀。\n问：对于这个消息，女的觉得怎么样？', scriptVn: 'Nam: Cô Lý ơi, mùng năm tháng sau em cưới rồi. / Nữ: Em đùa đấy à? Hai đứa mới quen nhau có một tháng mà. / Hỏi: Người nữ thấy tin này thế nào? (A rất cảm động · B rất đột ngột · C rất hối hận · D rất thất vọng)' },
            { n: 16, options: [{ zh: '是新的' }, { zh: '刚修好' }, { zh: '质量不合格' }, { zh: '样子很流行' }], answer: 'A', audio: [646.4, 665.9], script: '女：啊，外面下雪了。起床，你快来看看。\n男：太好了！咱们去公园吧？试试你的新照相机，怎么样？\n问：这个照相机怎么样？', scriptVn: 'Nữ: A, ngoài trời có tuyết rồi. Dậy đi, anh mau ra xem này. / Nam: Tuyệt quá! Mình đi công viên nhé? Thử cái máy ảnh mới của em, thế nào? / Hỏi: Chiếc máy ảnh này thế nào? (A là máy mới · B vừa sửa xong · C chất lượng không đạt · D kiểu dáng rất thời thượng)' },
            { n: 17, options: [{ zh: '步行' }, { zh: '开车' }, { zh: '坐地铁' }, { zh: '打出租车' }], answer: 'B', audio: [681, 701], script: '男：我已经出发了，有点儿堵车，到学校大概要四十分钟。\n女：好的，你路上小心，慢慢开，别着急。\n问：男的怎么去学校？', scriptVn: 'Nam: Anh xuất phát rồi, hơi tắc đường, đến trường chắc mất khoảng bốn mươi phút. / Nữ: Vâng, anh đi đường cẩn thận, lái chậm thôi, đừng vội. / Hỏi: Người nam đến trường bằng cách nào? (A đi bộ · B lái xe · C đi tàu điện ngầm · D đi taxi)' },
            { n: 18, options: [{ zh: '结婚' }, { zh: '去旅游' }, { zh: '出国工作' }, { zh: '出国读书' }], answer: 'D', audio: [716.1, 733.1], script: '女：听说你准备出国读博士？\n男：是啊，已经申请了。如果顺利的话，下个月就可以出发了。\n问：男的打算做什么？', scriptVn: 'Nữ: Nghe nói anh định ra nước ngoài học tiến sĩ? / Nam: Ừ, nộp đơn rồi. Nếu thuận lợi thì tháng sau có thể lên đường. / Hỏi: Người nam định làm gì? (A kết hôn · B đi du lịch · C ra nước ngoài làm việc · D ra nước ngoài du học)' },
            { n: 19, options: [{ zh: '20块' }, { zh: '30块' }, { zh: '40块' }, { zh: '60块' }], answer: 'B', audio: [748.1, 765.9], script: '男：小姐，我女儿多少钱一张票？\n女：您好，您的六十，您孩子买儿童票，半价。\n问：女儿的票多少钱一张？', scriptVn: 'Nam: Cô ơi, vé của con gái tôi bao nhiêu tiền một vé? / Nữ: Chào anh, vé của anh sáu mươi, cháu mua vé trẻ em, nửa giá. / Hỏi: Vé của con gái bao nhiêu tiền? (A 20 tệ · B 30 tệ · C 40 tệ · D 60 tệ)' },
            { n: 20, options: [{ zh: '太旧了' }, { zh: '很奇怪' }, { zh: '有点儿长' }, { zh: '最好换一件' }], answer: 'D', audio: [781, 802.9], script: '女：今晚我穿这条裙子怎么样？今年最流行的。\n男：很漂亮，不过我觉得这种打扮参加正式的舞会可能还是不太合适。\n问：男的是什么意思？', scriptVn: 'Nữ: Tối nay em mặc chiếc váy này thế nào? Kiểu mốt nhất năm nay đấy. / Nam: Rất đẹp, nhưng anh thấy ăn mặc thế này đi dự vũ hội trang trọng có lẽ vẫn chưa hợp lắm. / Hỏi: Ý người nam là gì? (A cũ quá · B rất kỳ lạ · C hơi dài · D tốt nhất nên thay bộ khác)' },
            { n: 21, options: [{ zh: '气候' }, { zh: '文化' }, { zh: '风景' }, { zh: '职业' }], answer: 'A', audio: [818, 842.3], script: '男：来北方好几年了吧？你觉得北方和南方在气候上有什么区别？\n女：夏天都差不多，只是冬天北方比较干燥，而南方更湿润。\n问：他们在谈什么？', scriptVn: 'Nam: Em lên miền Bắc mấy năm rồi nhỉ? Em thấy khí hậu miền Bắc và miền Nam khác nhau thế nào? / Nữ: Mùa hè thì gần như nhau, chỉ là mùa đông miền Bắc khá hanh khô, còn miền Nam ẩm hơn. / Hỏi: Họ đang nói về chuyện gì? (A khí hậu · B văn hóa · C phong cảnh · D nghề nghiệp)' },
            { n: 22, options: [{ zh: '花园' }, { zh: '教室' }, { zh: '公司' }, { zh: '宾馆' }], answer: 'C', audio: [857.4, 875.2], script: '女：经理，您对新的办公室环境还满意吗？\n男：不错，谢谢。你可以带我去看看公司别的地方吗？\n问：说话人在哪里？', scriptVn: 'Nữ: Thưa giám đốc, ông có hài lòng với văn phòng mới không ạ? / Nam: Tốt lắm, cảm ơn. Cô có thể dẫn tôi đi xem những chỗ khác trong công ty không? / Hỏi: Người nói đang ở đâu? (A vườn hoa · B lớp học · C công ty · D khách sạn)' },
            { n: 23, options: [{ zh: '请客' }, { zh: '按时到' }, { zh: '别生气' }, { zh: '换一个航班' }], answer: 'B', audio: [890.2, 907.3], script: '男：明天的面试很重要，你千万不要迟到。\n女：我知道，你别担心了，我一定会准时到的。\n问：男的希望女的怎么样？', scriptVn: 'Nam: Buổi phỏng vấn ngày mai rất quan trọng, em nhất định đừng đến muộn. / Nữ: Em biết rồi, anh đừng lo, em nhất định sẽ đến đúng giờ. / Hỏi: Người nam mong người nữ thế nào? (A mời khách · B đến đúng giờ · C đừng giận · D đổi chuyến bay khác)' },
            { n: 24, options: [{ zh: '很穷' }, { zh: '很粗心' }, { zh: '不专业' }, { zh: '不友好' }], answer: 'B', audio: [922.3, 944.3], script: '女：你对小李的印象怎么样？\n男：他的优点是有礼貌，诚实，能吃苦，就是太马虎、太粗心了，不适合我们的工作。\n问：小李为什么被拒绝了？', scriptVn: 'Nữ: Anh thấy Tiểu Lý thế nào? / Nam: Ưu điểm của cậu ấy là lễ phép, thật thà, chịu khó, chỉ có điều quá qua loa, quá cẩu thả, không hợp với công việc của chúng ta. / Hỏi: Vì sao Tiểu Lý bị từ chối? (A rất nghèo · B rất cẩu thả · C không chuyên nghiệp · D không thân thiện)' },
            { n: 25, options: [{ zh: '父亲节' }, { zh: '花很便宜' }, { zh: '妈妈生病了' }, { zh: '朋友过生日' }], answer: 'A', audio: [959.4, 977.5], script: '男：怎么忽然想起买花了？要送谁啊？\n女：今天是父亲节，你不会忘了吧？快去买礼物吧。\n问：女的为什么买花？', scriptVn: 'Nam: Sao tự nhiên lại nghĩ đến mua hoa thế? Định tặng ai à? / Nữ: Hôm nay là Ngày của Cha, anh không quên đấy chứ? Mau đi mua quà đi. / Hỏi: Vì sao người nữ mua hoa? (A Ngày của Cha · B hoa rất rẻ · C mẹ bị ốm · D bạn tổ chức sinh nhật)' }
          ]
        },
        {
          name: 'Phần 3', range: [26, 35], type: 'mc', intro: 'Nghe hội thoại dài, chọn đáp án đúng.',
          questions: [
            { n: 26, options: [{ zh: '面条' }, { zh: '米饭' }, { zh: '饺子' }, { zh: '蛋糕' }], answer: 'C', audio: [1043.4, 1073], script: '女：打了一下午羽毛球，肚子有点儿饿了。\n男：稍等一会儿，饭马上就好。\n女：真香，今天吃什么？\n男：你鼻子真好，今晚我们吃饺子。\n问：他们今晚吃什么？', scriptVn: 'Nữ: Đánh cầu lông cả buổi chiều, hơi đói bụng rồi. / Nam: Đợi chút nhé, cơm sắp xong rồi. / Nữ: Thơm quá, hôm nay ăn gì thế? / Nam: Mũi em thính thật, tối nay mình ăn sủi cảo. / Hỏi: Tối nay họ ăn gì? (A mì · B cơm · C sủi cảo · D bánh ngọt)' },
            { n: 27, options: [{ zh: '亲戚' }, { zh: '同学' }, { zh: '师生' }, { zh: '同事' }], answer: 'B', audio: [1088, 1116.7], script: '男：小李，刚才跟你说话的那个女孩儿是谁啊？\n女：我大学同学，你认识？\n男：应该不认识，但是好像在哪儿见过。\n女：那你可能是在我的大学毕业照上见过吧。\n问：那个女孩儿和小李是什么关系？', scriptVn: 'Nam: Tiểu Lý, cô gái vừa nói chuyện với cậu là ai thế? / Nữ: Bạn học đại học của tớ, cậu quen à? / Nam: Chắc là không quen, nhưng hình như đã gặp ở đâu rồi. / Nữ: Thế chắc cậu đã thấy trong ảnh tốt nghiệp đại học của tớ. / Hỏi: Cô gái đó và Tiểu Lý có quan hệ gì? (A họ hàng · B bạn học · C thầy trò · D đồng nghiệp)' },
            { n: 28, options: [{ zh: '洗澡' }, { zh: '游泳' }, { zh: '爬山' }, { zh: '逛街' }], answer: 'B', audio: [1131.6, 1158.3], script: '女：你好，请问王师傅在家吗？\n男：他不在家，他游泳去了。\n女：那他什么时候回来呢？\n男：一会儿就回来了吧。\n女：好的，那我过一会儿再联系吧，打扰了，再见。\n问：王师傅做什么去了？', scriptVn: 'Nữ: Chào anh, xin hỏi bác Vương có nhà không ạ? / Nam: Ông ấy không có nhà, đi bơi rồi. / Nữ: Thế khi nào bác ấy về ạ? / Nam: Chắc lát nữa là về thôi. / Nữ: Vâng, vậy lát nữa cháu liên lạc lại, làm phiền anh, chào anh. / Hỏi: Bác Vương đi làm gì? (A tắm · B bơi · C leo núi · D dạo phố)' },
            { n: 29, options: [{ zh: '杂志' }, { zh: '地图' }, { zh: '护照' }, { zh: '笔记本' }], answer: 'A', audio: [1173.3, 1198.4], script: '男：上午刚借的那本杂志，怎么找不到了？\n女：哪本杂志？\n男：体育杂志，黄皮儿的，我就放在桌子上。\n女：不用到处找了，我刚看了一下，在沙发上呢。\n问：男的在找什么？', scriptVn: 'Nam: Cuốn tạp chí vừa mượn sáng nay sao tìm không thấy nhỉ? / Nữ: Cuốn tạp chí nào? / Nam: Tạp chí thể thao, bìa vàng, anh để ngay trên bàn mà. / Nữ: Không cần tìm khắp nơi nữa, em vừa thấy rồi, nó ở trên ghế sô-pha. / Hỏi: Người nam đang tìm gì? (A tạp chí · B bản đồ · C hộ chiếu · D sổ ghi chép)' },
            { n: 30, options: [{ zh: '路上' }, { zh: '饭店里' }, { zh: '邻居家' }, { zh: '公共汽车上' }], answer: 'B', audio: [1213.5, 1236.8], script: '女：先生，对不起，我们这儿不能抽烟。\n男：请问，附近有可以抽烟的地方吗？\n女：有，请直走，然后向左，那儿有一个吸烟室。\n男：谢谢。\n问：他们最可能在哪儿？', scriptVn: 'Nữ: Thưa anh, xin lỗi, ở đây không được hút thuốc. / Nam: Xin hỏi gần đây có chỗ nào hút thuốc được không? / Nữ: Có ạ, anh đi thẳng rồi rẽ trái, ở đó có phòng hút thuốc. / Nam: Cảm ơn. / Hỏi: Họ có khả năng đang ở đâu nhất? (A trên đường · B trong nhà hàng/khách sạn · C nhà hàng xóm · D trên xe buýt)' },
            { n: 31, options: [{ zh: '中午' }, { zh: '周末' }, { zh: '月底' }, { zh: '寒假前' }], answer: 'D', audio: [1251.9, 1278.2], script: '男：李教授，这几篇文章您什么时候要？\n女：不急，你自己安排，只要在寒假前交给我就行。\n男：没问题，我肯定会提前完成的。\n女：那样更好。\n问：李教授什么时候要那几篇文章？', scriptVn: 'Nam: Thưa giáo sư Lý, mấy bài viết này khi nào cô cần ạ? / Nữ: Không gấp, em tự sắp xếp, chỉ cần nộp cho cô trước kỳ nghỉ đông là được. / Nam: Không vấn đề gì, em chắc chắn sẽ làm xong sớm. / Nữ: Thế thì càng tốt. / Hỏi: Giáo sư Lý cần mấy bài viết đó khi nào? (A buổi trưa · B cuối tuần · C cuối tháng · D trước kỳ nghỉ đông)' },
            { n: 32, options: [{ zh: '校长' }, { zh: '服务员' }, { zh: '理发师' }, { zh: '医院护士' }], answer: 'B', audio: [1293.2, 1316.8], script: '女：先生，这是您的房卡，请拿好。\n男：谢谢！我的行李箱在哪儿取呢？\n女：我们一会儿会直接送到您的房间。\n男：谢谢！麻烦你们了。\n女：不客气。\n问：女的最可能是做什么的？', scriptVn: 'Nữ: Thưa anh, đây là thẻ phòng của anh, anh cầm lấy ạ. / Nam: Cảm ơn! Vali của tôi lấy ở đâu nhỉ? / Nữ: Lát nữa chúng tôi sẽ mang thẳng lên phòng anh. / Nam: Cảm ơn! Phiền các cô quá. / Nữ: Không có gì ạ. / Hỏi: Người nữ có khả năng làm nghề gì nhất? (A hiệu trưởng · B nhân viên phục vụ · C thợ cắt tóc · D y tá bệnh viện)' },
            { n: 33, options: [{ zh: '很软的' }, { zh: '离入口近的' }, { zh: '宽一点儿的' }, { zh: '窗户旁边的' }], answer: 'D', audio: [1332, 1356.4], script: '男：你好，我想要一个窗户旁边的座位，还有吗？\n女：我查一下。对不起，您乘坐的这个航班没有窗户边的座位了。\n男：好吧，没关系。\n女：给您票。\n问：男的想要什么样的座位？', scriptVn: 'Nam: Chào cô, tôi muốn một chỗ ngồi cạnh cửa sổ, còn không? / Nữ: Để tôi kiểm tra. Xin lỗi, chuyến bay của anh không còn chỗ cạnh cửa sổ nữa. / Nam: Thôi được, không sao. / Nữ: Vé của anh đây. / Hỏi: Người nam muốn chỗ ngồi như thế nào? (A rất êm · B gần lối vào · C rộng hơn một chút · D cạnh cửa sổ)' },
            { n: 34, options: [{ zh: '天黑了' }, { zh: '西瓜不好吃' }, { zh: '孙子去上课' }, { zh: '作业没写完' }], answer: 'D', audio: [1371.5, 1397.5], script: '女：把香蕉皮扔到垃圾桶里去，以后别随便扔东西。\n男：知道了，奶奶。\n女：数学作业写完了吗？\n男：没呢，我先出去玩儿一会儿，您在家休息吧。\n问：根据对话，可以知道什么？', scriptVn: 'Nữ: Vứt vỏ chuối vào thùng rác đi, sau này đừng vứt đồ bừa bãi nữa. / Nam: Cháu biết rồi, bà ạ. / Nữ: Bài tập toán làm xong chưa? / Nam: Chưa ạ, cháu ra ngoài chơi một lát đã, bà ở nhà nghỉ ngơi nhé. / Hỏi: Theo đoạn hội thoại, có thể biết điều gì? (A trời tối rồi · B dưa hấu không ngon · C cháu trai đi học · D bài tập chưa làm xong)' },
            { n: 35, options: [{ zh: '很不错' }, { zh: '力气太小' }, { zh: '仍然不会' }, { zh: '动作不漂亮' }], answer: 'A', audio: [1412.6, 1443.5], script: '男：你换球鞋干什么啊？又要出去啊？\n女：去打网球。我约了小王，她打网球很厉害，你敢和她打吗？\n男：当然敢。\n女：那一起去！看看你究竟是赢还是输。走吧，人多了还热闹。\n问：小王的网球打得怎么样？', scriptVn: 'Nam: Em thay giày thể thao làm gì thế? Lại ra ngoài à? / Nữ: Đi đánh quần vợt. Em hẹn Tiểu Vương rồi, cô ấy đánh giỏi lắm, anh có dám đấu với cô ấy không? / Nam: Dám chứ. / Nữ: Thế thì đi cùng! Xem rốt cuộc anh thắng hay thua. Đi thôi, đông người càng vui. / Hỏi: Tiểu Vương chơi quần vợt thế nào? (A rất giỏi · B sức yếu quá · C vẫn chưa biết chơi · D động tác không đẹp)' }
          ]
        },
        {
          name: 'Phần 4', range: [36, 45], type: 'mc', intro: 'Nghe đoạn văn, trả lời 2 câu hỏi.',
          groups: [
            { range: [36, 37], questions: [
              { n: 36, options: [{ zh: '记者' }, { zh: '租房的' }, { zh: '买房的' }, { zh: '卖房的' }], answer: 'D', audio: [1458.5, 1500.4], script: '这房子家具全，电视、空调、冰箱都有并且都很新；离火车站也很近，交通方便，离您公司也不远，您可以坐公共汽车甚至可以骑自行车上班，把身体也锻炼了；价格也比较便宜，真的很值得考虑。\n问：说话人最可能是做什么的？', scriptVn: 'Căn nhà này đầy đủ đồ đạc, ti-vi, điều hòa, tủ lạnh đều có và đều rất mới; lại rất gần ga tàu, giao thông thuận tiện, cách công ty anh cũng không xa, anh có thể đi xe buýt, thậm chí đạp xe đi làm, tiện rèn luyện sức khỏe; giá cũng khá rẻ, thật sự rất đáng cân nhắc. / Hỏi 36: Người nói có khả năng làm nghề gì nhất? (A phóng viên · B người thuê nhà · C người mua nhà · D người bán nhà)' },
              { n: 37, options: [{ zh: '很贵' }, { zh: '离机场近' }, { zh: '交通方便' }, { zh: '周围风景不错' }], answer: 'C', audio: [1515.4, 1522.3], script: '问：关于这房子，下列哪个正确？', scriptVn: 'Hỏi 37: Về căn nhà này, câu nào đúng? (A rất đắt · B gần sân bay · C giao thông thuận tiện · D phong cảnh xung quanh đẹp)' }
            ] },
            { range: [38, 39], questions: [
              { n: 38, options: [{ zh: '干净' }, { zh: '聪明' }, { zh: '有趣' }, { zh: '有耐心' }], answer: 'B', audio: [1537.2, 1572.4], script: '狗是一种聪明的动物，它能听懂人的话，明白人的心情，会和人产生感情。人们喜欢养狗，是因为在孤单的时候，狗会陪着他们，互相信任，互相照顾。\n问：根据这段话，狗有什么特点？', scriptVn: 'Chó là loài vật thông minh, nó hiểu được lời người, hiểu tâm trạng con người, có thể gắn bó tình cảm với người. Người ta thích nuôi chó là vì những lúc cô đơn, chó sẽ ở bên họ, tin tưởng nhau, chăm sóc nhau. / Hỏi 38: Theo đoạn văn, chó có đặc điểm gì? (A sạch sẽ · B thông minh · C thú vị · D kiên nhẫn)' },
              { n: 39, options: [{ zh: '可以更勇敢' }, { zh: '想减少危险' }, { zh: '会感到安全' }, { zh: '有时会孤单' }], answer: 'D', audio: [1587.4, 1592.6], script: '问：人们为什么喜欢狗？', scriptVn: 'Hỏi 39: Vì sao người ta thích chó? (A có thể dũng cảm hơn · B muốn giảm nguy hiểm · C sẽ cảm thấy an toàn · D có lúc cô đơn)' }
            ] },
            { range: [40, 41], questions: [
              { n: 40, options: [{ zh: '一本书' }, { zh: '一个报道' }, { zh: '一个广告' }, { zh: '一个电视节目' }], answer: 'D', audio: [1607.5, 1643.7], script: '这个节目我一直在看，它介绍了很多生活中的小知识，包括怎样选择牙膏，擦脸应该用什么毛巾，怎样远离皮肤病等等。很多以前我没有注意到的问题，现在通过它了解了不少。\n问：说话人在介绍什么？', scriptVn: 'Chương trình này tôi xem suốt, nó giới thiệu rất nhiều kiến thức nhỏ trong cuộc sống, như cách chọn kem đánh răng, lau mặt nên dùng khăn gì, làm sao tránh bệnh ngoài da… Nhiều điều trước đây tôi không để ý, giờ nhờ nó mà hiểu được khá nhiều. / Hỏi 40: Người nói đang giới thiệu cái gì? (A một cuốn sách · B một bài phóng sự · C một quảng cáo · D một chương trình truyền hình)' },
              { n: 41, options: [{ zh: '艺术' }, { zh: '生活' }, { zh: '国际' }, { zh: '法律' }], answer: 'B', audio: [1658.7, 1665], script: '问：说话人了解了哪方面的知识？', scriptVn: 'Hỏi 41: Người nói hiểu thêm kiến thức về mặt nào? (A nghệ thuật · B đời sống · C quốc tế · D pháp luật)' }
            ] },
            { range: [42, 43], questions: [
              { n: 42, options: [{ zh: '袜子' }, { zh: '食品' }, { zh: '饮料' }, { zh: '洗衣机' }], answer: 'A', audio: [1679.9, 1726.1], script: '昨天，妻子让我陪她去买一双袜子。进了商店，她先去看帽子，觉得有个帽子很可爱，就买了一个。然后她又买了一条裤子、一件衬衫，把她身上带的钱全花完后我们就回家了。回家以后，我吃惊地发现，竟然没有买袜子。\n问：他们计划买什么？', scriptVn: 'Hôm qua vợ bảo tôi đi cùng cô ấy mua một đôi tất. Vào cửa hàng, cô ấy xem mũ trước, thấy có cái mũ rất đáng yêu nên mua luôn. Sau đó lại mua một cái quần, một chiếc áo sơ mi, tiêu sạch số tiền mang theo rồi chúng tôi về nhà. Về đến nhà, tôi ngạc nhiên phát hiện: hóa ra chưa mua tất. / Hỏi 42: Họ định mua gì? (A tất · B thực phẩm · C đồ uống · D máy giặt)' },
              { n: 43, options: [{ zh: '丈夫' }, { zh: '导游' }, { zh: '司机' }, { zh: '售货员' }], answer: 'A', audio: [1741.1, 1745.6], script: '问：说话人是谁？', scriptVn: 'Hỏi 43: Người nói là ai? (A người chồng · B hướng dẫn viên · C tài xế · D nhân viên bán hàng)' }
            ] },
            { range: [44, 45], questions: [
              { n: 44, options: [{ zh: '更难过' }, { zh: '更紧张' }, { zh: '轻松许多' }, { zh: '觉得无聊' }], answer: 'C', audio: [1760.5, 1797.4], script: '哭不一定是坏事。遇到伤心事，哭一场就会感觉心里舒服多了；人们成功的时候，因为激动会哭；人们获得爱情和友谊的时候，因为感动也会哭。所以说，哭不一定是坏事。\n问：伤心时哭一哭会怎么样？', scriptVn: 'Khóc chưa chắc là chuyện xấu. Gặp chuyện buồn, khóc một trận sẽ thấy trong lòng dễ chịu hơn nhiều; khi thành công, người ta khóc vì xúc động; khi có được tình yêu và tình bạn, người ta cũng khóc vì cảm động. Vì vậy khóc chưa chắc là chuyện xấu. / Hỏi 44: Lúc buồn khóc một chút sẽ thế nào? (A buồn hơn · B căng thẳng hơn · C nhẹ nhõm hơn nhiều · D thấy chán)' },
              { n: 45, options: [{ zh: '要懂礼貌' }, { zh: '要有同情心' }, { zh: '要互相理解' }, { zh: '哭不一定不好' }], answer: 'D', audio: [1812.4, 1817.9], script: '问：这段话主要想告诉我们什么？', scriptVn: 'Hỏi 45: Đoạn văn chủ yếu muốn nói với chúng ta điều gì? (A phải lễ phép · B phải có lòng thương người · C phải hiểu nhau · D khóc chưa chắc đã không tốt)' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'read', name: 'Đọc', icon: 'book',
      parts: [
        {
          name: 'Phần 1', range: [46, 55], type: 'word-fill', intro: 'Chọn từ điền vào chỗ trống.',
          groups: [
            { range: [46, 50], words: [{ k: 'A', zh: '禁止' }, { k: 'B', zh: '海洋' }, { k: 'C', zh: '推迟' }, { k: 'D', zh: '坚持', used: true }, { k: 'E', zh: '顺便' }, { k: 'F', zh: '估计' }], example: 'Ví dụ: 她每天都（ D ）走路上下班，所以身体一直很不错。', questions: [
              { n: 46, zh: '你去买啤酒吗？（　）帮我买一盒牛奶吧。', vn: 'Cậu đi mua bia à? Tiện thể mua giúp tớ một hộp sữa nhé. — 顺便: tiện thể.', answer: 'E' },
              { n: 47, zh: '刚才听广播说明天可能会下大雨，足球比赛恐怕要（　）了。', vn: 'Vừa nghe đài nói mai có thể mưa to, trận bóng đá e là phải hoãn lại. — 推迟: hoãn, lùi lại.', answer: 'C' },
              { n: 48, zh: '飞机上（　）使用手机，飞行过程中手机也要关上。', vn: 'Trên máy bay cấm dùng điện thoại, trong suốt chuyến bay điện thoại cũng phải tắt. — 禁止: cấm.', answer: 'A' },
              { n: 49, zh: '明天就可以在网上查成绩了，我（　）这次考得不坏。', vn: 'Mai là tra được điểm trên mạng rồi, tôi đoán lần này thi không tệ. — 估计: đoán chừng.', answer: 'F' },
              { n: 50, zh: '地球上约71%的地方是蓝色的（　）。', vn: 'Khoảng 71% bề mặt Trái Đất là đại dương màu xanh. — 海洋: biển, đại dương (danh từ đứng sau 的).', answer: 'B' }
            ] },
            { range: [51, 55], words: [{ k: 'A', zh: '工具' }, { k: 'B', zh: '收' }, { k: 'C', zh: '温度', used: true }, { k: 'D', zh: '到底' }, { k: 'E', zh: '辛苦' }, { k: 'F', zh: '抱歉' }], example: 'Ví dụ: A：今天真冷啊，好像白天最高（ C ）才2℃。 B：刚才电视里说明天更冷。', questions: [
              { n: 51, zh: 'A：丽丽说再等她几分钟，她马上就来。\nB：她（　）在干什么呢，怎么这么慢？', vn: 'A: Lệ Lệ bảo đợi cô ấy vài phút, cô ấy đến ngay. / B: Rốt cuộc cô ấy đang làm gì thế, sao chậm vậy? — 到底: rốt cuộc (dùng trong câu hỏi).', answer: 'D' },
              { n: 52, zh: 'A：那个房间又脏又乱，星期六我去打扫、整理了一下。\nB：原来是你啊，（　）了，谢谢你！', vn: 'A: Căn phòng đó vừa bẩn vừa bừa, thứ Bảy tôi đã đi quét dọn, sắp xếp lại. / B: Hóa ra là cậu à, vất vả cho cậu rồi, cảm ơn nhé! — 辛苦了: vất vả rồi.', answer: 'E' },
              { n: 53, zh: 'A：我刚从会议室过来，怎么一个人也没有？\nB：对不起，今天的会议改到明天上午了，您没（　）到通知吗？', vn: 'A: Tôi vừa từ phòng họp sang, sao chẳng có ai cả? / B: Xin lỗi, cuộc họp hôm nay đổi sang sáng mai rồi, anh không nhận được thông báo à? — 收到: nhận được.', answer: 'B' },
              { n: 54, zh: 'A：语言是交流的（　），只记字典、词典里的字、词是不够的，要多听多说。\nB：对，这才是学习汉语的好方法。', vn: 'A: Ngôn ngữ là công cụ giao tiếp, chỉ nhớ chữ, từ trong từ điển là không đủ, phải nghe nhiều nói nhiều. / B: Đúng, đó mới là cách học tiếng Trung hay. — 工具: công cụ.', answer: 'A' },
              { n: 55, zh: 'A：真（　），我迟到了。\nB：没关系，表演还有5分钟才开始。', vn: 'A: Thật xin lỗi, tôi đến muộn. / B: Không sao, còn 5 phút nữa buổi biểu diễn mới bắt đầu. — 抱歉: xin lỗi, áy náy.', answer: 'F' }
            ] }
          ]
        },
        {
          name: 'Phần 2', range: [56, 65], type: 'order', intro: 'Sắp xếp ba câu A, B, C thành đoạn văn đúng. Bấm lần lượt các câu; bấm câu đã xếp để bỏ ra.',
          questions: [
            { n: 56, items: [{ k: 'A', zh: '它就长满了这面墙，叶子很厚，绿绿的' }, { k: 'B', zh: '这种植物在这个季节长得很快' }, { k: 'C', zh: '经过短短一个星期' }], answer: 'BCA', vn: 'Loại cây này vào mùa này lớn rất nhanh, chỉ qua một tuần ngắn ngủi nó đã phủ kín bức tường, lá rất dày, xanh mướt. — 经过…就…: nối thời gian với kết quả.' },
            { n: 57, items: [{ k: 'A', zh: '他很年轻' }, { k: 'B', zh: '比相同年龄的人更成熟' }, { k: 'C', zh: '可是遇到问题很冷静' }], answer: 'ACB', vn: 'Anh ấy còn rất trẻ, nhưng gặp chuyện rất bình tĩnh, chín chắn hơn người cùng tuổi. — 可是 nối sau câu chủ đề 他很年轻.' },
            { n: 58, items: [{ k: 'A', zh: '让被批评的人不觉得难受，而且能感觉到是在帮助他' }, { k: 'B', zh: '例如批评人的时候要考虑用正确的方法' }, { k: 'C', zh: '管理是一门艺术' }], answer: 'CBA', vn: 'Quản lý là một nghệ thuật, chẳng hạn khi phê bình người khác phải tính đến cách làm đúng, để người bị phê bình không thấy khó chịu mà còn cảm nhận được là mình đang được giúp đỡ. — 例如 nêu ví dụ cho câu chủ đề.' },
            { n: 59, items: [{ k: 'A', zh: '所以要想完全解决这个难题' }, { k: 'B', zh: '还需要找更好的办法' }, { k: 'C', zh: '这样做，只能暂时解决问题' }], answer: 'CAB', vn: 'Làm như vậy chỉ giải quyết được vấn đề tạm thời, vì thế muốn giải quyết triệt để vấn đề khó này thì còn cần tìm cách tốt hơn. — 所以要想…还需要….' },
            { n: 60, items: [{ k: 'A', zh: '所以这种游戏十分简单' }, { k: 'B', zh: '谁就赢了比赛' }, { k: 'C', zh: '谁在规定的时间内接到的球最多' }], answer: 'CBA', vn: 'Ai bắt được nhiều bóng nhất trong thời gian quy định thì người đó thắng, vì thế trò chơi này rất đơn giản. — 谁…谁就…: ai… thì người đó….' },
            { n: 61, items: [{ k: 'A', zh: '这个任务没有那么困难' }, { k: 'B', zh: '而关键是要清楚我们的主要目的，找到重点' }, { k: 'C', zh: '我的看法是' }], answer: 'CAB', vn: 'Theo tôi, nhiệm vụ này không khó đến thế, mà mấu chốt là phải rõ mục đích chính của chúng ta, tìm ra trọng điểm. — 我的看法是 mở đầu, 而 nối ý sau.' },
            { n: 62, items: [{ k: 'A', zh: '我儿子的个子长得非常快' }, { k: 'B', zh: '今年春天就有很多不能穿了' }, { k: 'C', zh: '去年春天打折的时候我给他买了几件衣服' }], answer: 'ACB', vn: 'Con trai tôi lớn rất nhanh, mùa xuân năm ngoái lúc giảm giá tôi mua cho nó mấy bộ quần áo, mùa xuân năm nay đã nhiều bộ không mặc vừa nữa.' },
            { n: 63, items: [{ k: 'A', zh: '到时候你安排他们在市里参观一下' }, { k: 'B', zh: '今年暑假，有几个外国留学生要来学习一周' }, { k: 'C', zh: '其他的一些活动也都由你来组织' }], answer: 'BAC', vn: 'Kỳ nghỉ hè năm nay có mấy lưu học sinh nước ngoài sẽ đến học một tuần, đến lúc đó cậu sắp xếp cho họ tham quan thành phố, một số hoạt động khác cũng do cậu tổ chức. — 到时候 chỉ lại thời điểm ở câu trước.' },
            { n: 64, items: [{ k: 'A', zh: '然而更多时候，留下的还是甜甜的回忆' }, { k: 'B', zh: '生活的味道是酸、甜、苦、辣、咸的' }, { k: 'C', zh: '其中的酸、苦、辣、咸是偶尔的不愉快' }], answer: 'BCA', vn: 'Hương vị cuộc sống có chua, ngọt, đắng, cay, mặn; trong đó chua, đắng, cay, mặn là những lúc không vui thỉnh thoảng gặp, nhưng phần nhiều thứ đọng lại vẫn là những kỷ niệm ngọt ngào. — 其中 → 然而.' },
            { n: 65, items: [{ k: 'A', zh: '有的父母对孩子的要求很严格' }, { k: 'B', zh: '认为应该给孩子更多自己选择的机会' }, { k: 'C', zh: '有的父母正好相反' }], answer: 'ACB', vn: 'Có những bố mẹ yêu cầu con rất nghiêm khắc, có những bố mẹ thì ngược lại, cho rằng nên cho con nhiều cơ hội tự lựa chọn hơn. — 有的…有的…正好相反.' }
          ]
        },
        {
          name: 'Phần 3', range: [66, 85], type: 'mc', intro: 'Đọc đoạn văn, chọn đáp án đúng.',
          groups: [
            { range: [66, 66], questions: [
              { n: 66, zh: '刷牙的时候，水太冷或者太热，都会给牙的健康带来不好的影响。研究发现，用35度的温水刷牙才是最合适的。', star: '刷牙时，我们应该：', options: [{ zh: '使用温水' }, { zh: '常换牙刷' }, { zh: '早晚各一次' }, { zh: '至少刷5分钟' }], answer: 'A', vn: 'Khi đánh răng, nước quá lạnh hoặc quá nóng đều ảnh hưởng không tốt đến răng. Nghiên cứu phát hiện đánh răng bằng nước ấm 35 độ là thích hợp nhất. ★ Khi đánh răng, chúng ta nên: A dùng nước ấm · B thường xuyên thay bàn chải · C sáng tối mỗi buổi một lần · D đánh ít nhất 5 phút.' }
            ] },
            { range: [67, 67], questions: [
              { n: 67, zh: '这种葡萄酒，不仅味道好，而且每个酒瓶也都像一件高级艺术品。很多人愿意出高价购买它，很多时候是被那些特别的酒瓶吸引了。', star: '这种葡萄酒：', options: [{ zh: '比较甜' }, { zh: '是艺术品' }, { zh: '酒瓶很特别' }, { zh: '是当地制造的' }], answer: 'C', vn: 'Loại rượu vang này không những ngon mà mỗi chai còn giống một tác phẩm nghệ thuật cao cấp. Nhiều người sẵn sàng trả giá cao để mua, nhiều khi là vì bị những chai rượu đặc biệt đó hấp dẫn. ★ Loại rượu vang này: A khá ngọt · B là tác phẩm nghệ thuật · C chai rượu rất đặc biệt · D được sản xuất tại địa phương.' }
            ] },
            { range: [68, 68], questions: [
              { n: 68, zh: '阅读能力好的人不但容易找到工作，而且工资也比较高。另外，阅读考试的分数往往还能反映一个国家的教育水平。', star: '阅读能力好的人一般：', options: [{ zh: '收入高' }, { zh: '烦恼少' }, { zh: '经历丰富' }, { zh: '年龄比较大' }], answer: 'A', vn: 'Người có khả năng đọc tốt không những dễ tìm việc mà lương cũng khá cao. Ngoài ra, điểm thi đọc hiểu thường còn phản ánh trình độ giáo dục của một quốc gia. ★ Người có khả năng đọc tốt thường: A thu nhập cao · B ít phiền não · C trải nghiệm phong phú · D tuổi khá lớn.' }
            ] },
            { range: [69, 69], questions: [
              { n: 69, zh: '有些人喜欢不停地换工作，他们总以为新工作一定比现在的好。实际上，一般情况下，完全适应一个新的工作需要一年时间，因此，经常换工作不一定好，根据自己的条件，把一份工作坚持做到最好才是正确的选择。', star: '有些人经常换工作是因为他们：', options: [{ zh: '极其努力' }, { zh: '非常得意' }, { zh: '工作不愉快' }, { zh: '相信新工作更好' }], answer: 'D', vn: 'Có người thích đổi việc liên tục, họ luôn cho rằng việc mới nhất định tốt hơn việc hiện tại. Thực ra, thông thường cần một năm mới thích nghi hoàn toàn với công việc mới, vì thế hay đổi việc chưa chắc đã tốt; tùy điều kiện của mình mà kiên trì làm thật tốt một công việc mới là lựa chọn đúng. ★ Có người hay đổi việc là vì họ: A cực kỳ chăm chỉ · B rất đắc ý · C làm việc không vui · D tin rằng việc mới tốt hơn.' }
            ] },
            { range: [70, 70], questions: [
              { n: 70, zh: '我喜欢读这份报纸，因为它的内容丰富，而且广告少，最重要的是，经济方面的新闻对我的工作很有帮助。', star: '他喜欢这份报纸的原因之一是：', options: [{ zh: '免费' }, { zh: '价格低' }, { zh: '广告少' }, { zh: '笑话多' }], answer: 'C', vn: 'Tôi thích đọc tờ báo này vì nội dung phong phú, lại ít quảng cáo; quan trọng nhất là tin kinh tế rất có ích cho công việc của tôi. ★ Một trong những lý do anh ấy thích tờ báo này là: A miễn phí · B giá rẻ · C ít quảng cáo · D nhiều truyện cười.' }
            ] },
            { range: [71, 71], questions: [
              { n: 71, zh: '医生提醒人们，在使用感冒药之前，一定要仔细阅读说明书。并且最好只选择一种感冒药，否则药物之间可能互相作用，会影响我们的健康。', star: '医生一共有几个提醒？', options: [{ zh: '一个' }, { zh: '两个' }, { zh: '3个' }, { zh: '4个' }], answer: 'B', vn: 'Bác sĩ nhắc mọi người trước khi dùng thuốc cảm nhất định phải đọc kỹ hướng dẫn sử dụng. Và tốt nhất chỉ chọn một loại thuốc cảm, nếu không các thuốc có thể tác động lẫn nhau, ảnh hưởng đến sức khỏe. ★ Bác sĩ nhắc tổng cộng mấy điều? A một · B hai · C ba · D bốn.' }
            ] },
            { range: [72, 72], questions: [
              { n: 72, zh: '在中国生活的三年使他在音乐方面有了很多新的想法，他把京剧的一些特点增加到自己的音乐中，取得了很好的效果。', star: '根据这段话，可以知道他：', options: [{ zh: '很热情' }, { zh: '会唱京剧' }, { zh: '受到京剧影响' }, { zh: '离开中国三年了' }], answer: 'C', vn: 'Ba năm sống ở Trung Quốc giúp anh ấy có nhiều ý tưởng âm nhạc mới, anh đưa một số nét đặc trưng của Kinh kịch vào âm nhạc của mình và đạt hiệu quả rất tốt. ★ Theo đoạn văn, có thể biết anh ấy: A rất nhiệt tình · B biết hát Kinh kịch · C chịu ảnh hưởng của Kinh kịch · D đã rời Trung Quốc ba năm.' }
            ] },
            { range: [73, 73], questions: [
              { n: 73, zh: '儿子小时候一说话就脸红，回答老师问题的时候声音也很小，我当时很替他担心。但随着年龄的增长，他逐渐成熟了，大学毕业后成了一名优秀的律师，真让人吃惊。', star: '“让人吃惊”的是儿子：', options: [{ zh: '当了律师' }, { zh: '变得很笨' }, { zh: '越来越帅' }, { zh: '赚了很多钱' }], answer: 'A', vn: 'Hồi nhỏ con trai tôi hễ nói là đỏ mặt, trả lời câu hỏi của thầy cô cũng rất nhỏ tiếng, lúc đó tôi rất lo cho nó. Nhưng càng lớn nó càng chín chắn, tốt nghiệp đại học trở thành một luật sư giỏi, thật khiến người ta kinh ngạc. ★ Điều "khiến người ta kinh ngạc" là con trai: A đã làm luật sư · B trở nên rất ngốc · C ngày càng đẹp trai · D kiếm được nhiều tiền.' }
            ] },
            { range: [74, 74], questions: [
              { n: 74, zh: '做生意时会遇到竞争带来的压力，但是大家的机会也是相同的。清楚地了解市场和顾客的需要，做一个符合市场发展需要的计划非常重要。', star: '做生意需要重视：', options: [{ zh: '节约' }, { zh: '反对意见' }, { zh: '积累经验' }, { zh: '了解市场需求' }], answer: 'D', vn: 'Làm ăn sẽ gặp áp lực do cạnh tranh, nhưng cơ hội của mọi người cũng như nhau. Hiểu rõ nhu cầu của thị trường và khách hàng, lập một kế hoạch phù hợp với nhu cầu phát triển của thị trường là rất quan trọng. ★ Làm ăn cần coi trọng: A tiết kiệm · B ý kiến phản đối · C tích lũy kinh nghiệm · D hiểu nhu cầu thị trường.' }
            ] },
            { range: [75, 75], questions: [
              { n: 75, zh: '原谅是一种美，我们常说要学会原谅别人，但也要试着原谅自己。我们都有缺点，不可能把每件事都做得很好。', star: '这段话主要说，我们应该：', options: [{ zh: '感谢别人' }, { zh: '尊重别人' }, { zh: '原谅自己' }, { zh: '成为优秀的人' }], answer: 'C', vn: 'Tha thứ là một nét đẹp, ta thường nói phải học cách tha thứ cho người khác, nhưng cũng phải thử tha thứ cho chính mình. Ai cũng có khuyết điểm, không thể làm việc gì cũng tốt. ★ Đoạn văn chủ yếu nói chúng ta nên: A cảm ơn người khác · B tôn trọng người khác · C tha thứ cho bản thân · D trở thành người xuất sắc.' }
            ] },
            { range: [76, 76], questions: [
              { n: 76, zh: '您好，我们翻译，每1000字150元人民币。这些信息在公司网站上都有详细的介绍，您有什么特别要求或任何不清楚的地方欢迎和我们联系。', star: '说话人正在做什么？', options: [{ zh: '总结' }, { zh: '招聘' }, { zh: '介绍' }, { zh: '道歉' }], answer: 'C', vn: 'Xin chào, dịch vụ dịch thuật của chúng tôi giá 150 tệ mỗi 1000 chữ. Các thông tin này đều được giới thiệu chi tiết trên trang web công ty, quý khách có yêu cầu đặc biệt hay chỗ nào chưa rõ xin cứ liên hệ với chúng tôi. ★ Người nói đang làm gì? A tổng kết · B tuyển dụng · C giới thiệu · D xin lỗi.' }
            ] },
            { range: [77, 77], questions: [
              { n: 77, zh: '大部分人每天晚上至少应该睡7个小时，但是这个标准并不适合每一个人，有些人即使只睡5个小时也很有精神。', star: '每天晚上睡7个小时适合：', options: [{ zh: '儿童' }, { zh: '胖子' }, { zh: '所有人' }, { zh: '大部分人' }], answer: 'D', vn: 'Phần lớn mọi người mỗi tối nên ngủ ít nhất 7 tiếng, nhưng tiêu chuẩn này không hợp với tất cả, có người dù chỉ ngủ 5 tiếng vẫn rất tỉnh táo. ★ Mỗi tối ngủ 7 tiếng phù hợp với: A trẻ em · B người béo · C tất cả mọi người · D phần lớn mọi người.' }
            ] },
            { range: [78, 78], questions: [
              { n: 78, zh: '很多时候孩子发脾气是为了得到一些好处，父母不能因为孩子发脾气就给他好处。如果我们不重视这个问题，他就容易养成发脾气的坏习惯。', star: '孩子发脾气主要是因为：', options: [{ zh: '缺少关心' }, { zh: '父母批评他' }, { zh: '想得到好处' }, { zh: '想引起别人注意' }], answer: 'C', vn: 'Nhiều khi trẻ nổi nóng là để được lợi, bố mẹ không thể vì con nổi nóng mà chiều theo. Nếu không coi trọng vấn đề này, trẻ sẽ dễ hình thành thói xấu hay nổi nóng. ★ Trẻ nổi nóng chủ yếu là vì: A thiếu quan tâm · B bố mẹ phê bình · C muốn được lợi · D muốn gây chú ý.' }
            ] },
            { range: [79, 79], questions: [
              { n: 79, zh: '什么是真正的朋友？有些人觉得就是能和自己一起快乐的人，其实朋友应该像镜子，能帮你看清自己的缺点；无论你成功或者失败，永远都支持你。', star: '这段话主要谈：', options: [{ zh: '谁能成功' }, { zh: '学会改变' }, { zh: '怎样支持朋友' }, { zh: '什么是真朋友' }], answer: 'D', vn: 'Thế nào là bạn thật sự? Có người cho rằng đó là người có thể cùng mình vui vẻ; thật ra bạn bè nên như tấm gương, giúp bạn nhìn rõ khuyết điểm của mình; dù bạn thành công hay thất bại, họ luôn ủng hộ bạn. ★ Đoạn văn chủ yếu bàn về: A ai có thể thành công · B học cách thay đổi · C làm sao ủng hộ bạn bè · D thế nào là bạn thật sự.' }
            ] },
            { range: [80, 81], zh: '世界上第一部无声电影出现的时候，吸引了成千上万的观众。有个女观众看到电影中有一辆马车向自己跑过来，害怕得离开了座位，跑得远远的，直到那辆马车在画面中不见了，她才回到座位上。有的观众看到电影里下雨的画面，把自己的雨伞也打了起来。现在我们都觉得挺好笑的，但是看电影在当时确实是个新鲜事儿。', questions: [
              { n: 80, star: '世界上第一部无声电影：', options: [{ zh: '很幽默' }, { zh: '不成功' }, { zh: '观众很多' }, { zh: '内容复杂' }], answer: 'C', vn: 'Khi bộ phim câm đầu tiên trên thế giới ra đời, nó thu hút hàng nghìn hàng vạn khán giả. Có một nữ khán giả thấy trong phim chiếc xe ngựa lao về phía mình, sợ đến mức rời ghế chạy thật xa, mãi đến khi chiếc xe ngựa biến khỏi màn hình mới quay về chỗ. Có khán giả thấy cảnh mưa trong phim liền giương cả ô của mình lên. Bây giờ ta thấy khá buồn cười, nhưng thời đó xem phim quả thật là chuyện mới lạ. ★ Bộ phim câm đầu tiên trên thế giới: A rất hài hước · B không thành công · C có rất nhiều khán giả · D nội dung phức tạp.' },
              { n: 81, star: '那个观众为什么要打伞？', options: [{ zh: '误会了' }, { zh: '下雨了' }, { zh: '风太大' }, { zh: '害怕马车' }], answer: 'A', vn: '★ Vì sao khán giả đó giương ô? A hiểu lầm (tưởng mưa thật) · B trời mưa · C gió quá to · D sợ xe ngựa.' }
            ] },
            { range: [82, 83], zh: '研究证明，女孩子们对衣服颜色的选择往往与她们的性格有关。喜欢穿白色衣服的女孩子们性格比较阳光，生活态度积极向上是她们的共同特点；而喜欢红色衣服的女孩子们性格比较浪漫，在爱情上也比较主动。', questions: [
              { n: 82, star: '喜欢穿白色衣服的女孩子在生活中：', options: [{ zh: '很懒' }, { zh: '很害羞' }, { zh: '很主动' }, { zh: '不幸福' }], answer: 'C', vn: 'Nghiên cứu chứng minh việc các cô gái chọn màu quần áo thường liên quan đến tính cách. Các cô gái thích mặc đồ trắng có tính cách khá tươi sáng, thái độ sống tích cực là điểm chung của họ; còn các cô gái thích đồ đỏ có tính cách khá lãng mạn, trong tình yêu cũng khá chủ động. ★ Cô gái thích mặc đồ trắng trong cuộc sống: A rất lười · B rất nhút nhát · C rất chủ động (tích cực) · D không hạnh phúc.' },
              { n: 83, star: '这段话主要讲了颜色和什么的关系？', options: [{ zh: '理想' }, { zh: '能力' }, { zh: '性格' }, { zh: '性别' }], answer: 'C', vn: '★ Đoạn văn chủ yếu nói về quan hệ giữa màu sắc và điều gì? A ước mơ · B năng lực · C tính cách · D giới tính.' }
            ] },
            { range: [84, 85], zh: '科学技术的发展确实给生活带来了许多方便，但也给我们增加了不少烦恼。最普遍的是，每个现代人头脑中都要记住很多密码：信用卡需要密码，电脑需要密码，电子信箱需要密码，有时候甚至连开门都需要密码。如果谁不小心忘记了这些密码，那麻烦可就大了。', questions: [
              { n: 84, star: '人们需要记住什么？', options: [{ zh: '友谊' }, { zh: '答案' }, { zh: '密码' }, { zh: '号码' }], answer: 'C', vn: 'Sự phát triển của khoa học kỹ thuật quả thật mang lại nhiều tiện lợi cho cuộc sống, nhưng cũng thêm cho ta không ít phiền phức. Phổ biến nhất là mỗi người hiện đại đều phải nhớ rất nhiều mật khẩu: thẻ tín dụng cần mật khẩu, máy tính cần mật khẩu, hộp thư điện tử cần mật khẩu, có khi đến mở cửa cũng cần mật khẩu. Ai không cẩn thận quên mất những mật khẩu này thì phiền to. ★ Mọi người cần nhớ gì? A tình bạn · B đáp án · C mật khẩu · D con số, số hiệu.' },
              { n: 85, star: '给人们带来烦恼的是：', options: [{ zh: '科学技术' }, { zh: '电子信箱' }, { zh: '工作压力' }, { zh: '环境污染' }], answer: 'A', vn: '★ Điều mang lại phiền phức cho con người là: A khoa học kỹ thuật · B hộp thư điện tử · C áp lực công việc · D ô nhiễm môi trường.' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'write', name: 'Viết', icon: 'pencil',
      parts: [
        {
          name: 'Phần 1', range: [86, 95], type: 'arrange', intro: 'Sắp xếp các từ thành câu. Bấm lần lượt các từ; bấm từ đã xếp để bỏ ra.', example: 'Ví dụ: 那座桥 800年的 历史 有 了 → 那座桥有800年的历史了。',
          questions: [
            { n: 86, words: ['会弹钢琴的人', '羡慕', '很', '她'], answer: '她很羡慕会弹钢琴的人。', accept: ['会弹钢琴的人很羡慕她。'], vn: 'Cô ấy rất ngưỡng mộ người biết chơi piano. (Đáp án cũng chấp nhận: Người biết chơi piano rất ngưỡng mộ cô ấy.)' },
            { n: 87, words: ['亚洲经济的', '正在', '逐渐', '提高', '增长速度'], answer: '亚洲经济的增长速度正在逐渐提高。', vn: 'Tốc độ tăng trưởng kinh tế châu Á đang dần dần tăng lên. — 正在 + 逐渐 + động từ.' },
            { n: 88, words: ['专为老年人', '提供的', '这椅子', '是'], answer: '这椅子是专为老年人提供的。', vn: 'Chiếc ghế này được làm riêng cho người cao tuổi. — 是…的 nhấn mạnh.' },
            { n: 89, words: ['中文', '很流利', '说得', '他的'], answer: '他的中文说得很流利。', vn: 'Anh ấy nói tiếng Trung rất lưu loát. — Bổ ngữ trạng thái: 说得 + 很流利.' },
            { n: 90, words: ['已经', '报名人数', '900', '超过了'], answer: '报名人数已经超过了900。', vn: 'Số người đăng ký đã vượt quá 900.' },
            { n: 91, words: ['请', '从小到大的顺序', '按', '排列', '这些数字'], answer: '请按从小到大的顺序排列这些数字。', accept: ['这些数字请按从小到大的顺序排列。'], vn: 'Hãy sắp xếp các con số này theo thứ tự từ nhỏ đến lớn. — 按 + thứ tự + động từ.' },
            { n: 92, words: ['作者', '很有名', '小说的', '那本'], answer: '那本小说的作者很有名。', vn: 'Tác giả của cuốn tiểu thuyết đó rất nổi tiếng.' },
            { n: 93, words: ['合格的警察', '最需要的', '一个', '是责任感'], answer: '一个合格的警察最需要的是责任感。', vn: 'Điều một cảnh sát đạt chuẩn cần nhất là tinh thần trách nhiệm. — 最需要的是…: điều cần nhất là….' },
            { n: 94, words: ['代表们', '结束', '会议', '决定'], answer: '代表们决定结束会议。', vn: 'Các đại biểu quyết định kết thúc hội nghị.' },
            { n: 95, words: ['对', '很熟悉', '我', '这个城市'], answer: '我对这个城市很熟悉。', accept: ['对这个城市我很熟悉。'], vn: 'Tôi rất quen thuộc thành phố này. — 对 + đối tượng + 很熟悉.' }
          ]
        },
        {
          name: 'Phần 2', range: [96, 100], type: 'pic-write', intro: 'Nhìn tranh, dùng từ cho sẵn viết một câu.', example: 'Ví dụ: (乒乓球) 她很喜欢打乒乓球。',
          questions: [
            { n: 96, img: 'w96.jpg', word: '日记', answer: '她每天都坚持写日记。', accept: ['她正在认真地写日记。', '她有写日记的好习惯。'], vn: 'Ngày nào cô ấy cũng kiên trì viết nhật ký.' },
            { n: 97, img: 'w97.jpg', word: '尝', answer: '你尝一尝？味道很好。', accept: ['这个饺子很好吃，你尝尝吧。', '我尝了一个，味道好极了。'], vn: 'Bạn nếm thử xem? Vị ngon lắm.' },
            { n: 98, img: 'w98.jpg', word: '破', answer: '鸡蛋被打破了。', accept: ['鸡蛋不小心被打破了。', '他把鸡蛋打破了。', '这个鸡蛋已经破了。'], vn: 'Quả trứng bị làm vỡ rồi.' },
            { n: 99, img: 'w99.jpg', word: '凉快', answer: '走在海边，感觉很凉快。', accept: ['海边的风很凉快，我们去散散步吧。', '今天不太热，海边很凉快。'], vn: 'Đi dạo bên bờ biển, cảm thấy rất mát mẻ.' },
            { n: 100, img: 'w100.jpg', word: '活泼', answer: '这个小女孩儿很活泼。', accept: ['这个孩子又活泼又可爱。', '她是一个很活泼的小姑娘。'], vn: 'Cô bé này rất hoạt bát.' }
          ]
        }
      ]
    }
  ]
};
