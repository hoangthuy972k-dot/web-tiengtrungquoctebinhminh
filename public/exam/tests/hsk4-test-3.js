// Đề thi thử HSK 4 – Đề số 3 (đề mẫu H41003 của Hanban).
// Cấu trúc: Nghe 45 câu (~30 phút), Đọc 40 câu, Viết 15 câu; tổng 100 câu, 105 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (theo tỉ lệ câu đúng), tổng 300, đạt từ 180.
// audio: [giây bắt đầu, giây kết thúc] từng câu trong file nghe (mỗi câu đọc 1 lần), dò bằng khoảng lặng (S\h4de\moc-hsk4.js).
// Sinh bằng S\h4de\gan-de-hsk4.js 3 — sửa dữ liệu ở de-3.json / vn-3.js rồi chạy lại.
window.EXAM_DATA = {
  id: 'hsk4-test-3',
  level: 'HSK 4',
  title: 'HSK 4 - Test 3',
  code: 'H41003',
  durationSec: 105 * 60,
  maxScore: 300,
  passScore: 180,
  img: '/exam/img/hsk4-test-3/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones', audio: '/audio/exam/hsk4-test-3.mp3', note: 'Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu chỉ đọc 1 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-text', intro: 'Nghe đoạn ngắn, phán đoán câu ★ đúng hay sai.',
          questions: [
            { n: 1, star: '他想买蛋糕。', starVn: 'Anh ấy muốn mua bánh ngọt.', answer: true, audio: [130.9, 155.1], script: '对不起，先生，那种蛋糕已经卖完了，不过，您可以尝一下这种饼干，味道也很不错。', scriptVn: 'Xin lỗi anh, loại bánh ngọt đó bán hết rồi, nhưng anh có thể nếm thử loại bánh quy này, vị cũng rất ngon.' },
            { n: 2, star: '他现在住的地方很安静。', starVn: 'Chỗ anh ấy đang ở rất yên tĩnh.', answer: true, audio: [163.2, 184.6], script: '我挺喜欢现在住的地方，很安静。不像以前住的地方，虽然交通方便，但是周围很吵。', scriptVn: 'Tôi khá thích chỗ ở hiện nay, rất yên tĩnh. Không giống chỗ ở trước đây, tuy giao thông thuận tiện nhưng xung quanh rất ồn.' },
            { n: 3, star: '大学生不愿意去农村工作。', starVn: 'Sinh viên không muốn về nông thôn làm việc.', answer: false, audio: [192.9, 219.2], script: '虽然很多大学生毕业后希望留在大城市工作，但也有不少大学生选择去农村，因为在那里也有许多好的发展机会。', scriptVn: 'Tuy nhiều sinh viên tốt nghiệp xong muốn ở lại thành phố lớn làm việc, nhưng cũng có không ít sinh viên chọn về nông thôn, vì ở đó cũng có nhiều cơ hội phát triển tốt.' },
            { n: 4, star: '会议室在二层。', starVn: 'Phòng họp ở tầng hai.', answer: false, audio: [227.5, 246.6], script: '您是要去会议室吗？那不用上楼，会议室就在一层。您往前走，就在电梯左边。', scriptVn: 'Anh định đến phòng họp phải không? Vậy không cần lên lầu đâu, phòng họp ở ngay tầng một. Anh đi thẳng về phía trước, nó ở ngay bên trái thang máy.' },
            { n: 5, star: '参观时间是一小时。', starVn: 'Thời gian tham quan là một tiếng.', answer: true, audio: [254.8, 277.1], script: '现在是九点半，请大家注意：一小时后我们还在这个入口集合，参观过程中请大家注意安全。', scriptVn: 'Bây giờ là chín giờ rưỡi, mọi người chú ý: một tiếng nữa chúng ta lại tập trung ở lối vào này, trong lúc tham quan mọi người nhớ chú ý an toàn.' },
            { n: 6, star: '超市提供免费塑料袋。', starVn: 'Siêu thị phát túi ni-lông miễn phí.', answer: false, audio: [285.3, 308.5], script: '因为塑料袋会给环境带来污染，所以现在超市不再免费提供塑料袋，有需要的顾客，可以向超市购买。', scriptVn: 'Vì túi ni-lông gây ô nhiễm môi trường nên bây giờ siêu thị không còn phát túi ni-lông miễn phí nữa, khách hàng nào cần thì có thể mua của siêu thị.' },
            { n: 7, star: '海洋里的植物很少。', starVn: 'Thực vật dưới biển rất ít.', answer: false, audio: [316.7, 339.5], script: '和森林一样，在海洋里，也生长着很多种植物，它们与海洋里的动物，共同组成了一个美丽的海底世界。', scriptVn: 'Cũng như rừng, dưới biển cũng có rất nhiều loài thực vật sinh sống, chúng cùng với các loài động vật dưới biển tạo nên một thế giới đáy biển tuyệt đẹp.' },
            { n: 8, star: '他的职业是演员。', starVn: 'Nghề của anh ấy là diễn viên.', answer: false, audio: [347.6, 371.3], script: '我父亲是医生，母亲是演员。我的性格很像我父亲，我的理想就是做一个像父亲那样的医生。', scriptVn: 'Bố tôi là bác sĩ, mẹ tôi là diễn viên. Tính cách tôi rất giống bố, ước mơ của tôi là trở thành một bác sĩ như bố.' },
            { n: 9, star: '他下周回来。', starVn: 'Anh ấy tuần sau về.', answer: true, audio: [379.5, 404.8], script: '张记者，我刚刚接到通知，明天要出差，恐怕没时间和您见面了。很抱歉，等我回来以后再跟您联系，我下周一回来。', scriptVn: 'Phóng viên Trương, tôi vừa nhận được thông báo mai phải đi công tác, e là không có thời gian gặp anh rồi. Thật xin lỗi, đợi tôi về rồi sẽ liên lạc lại với anh, thứ Hai tuần sau tôi về.' },
            { n: 10, star: '习惯很难改变。', starVn: 'Thói quen rất khó thay đổi.', answer: true, audio: [413, 433.5], script: '习惯是不容易改变的，因此，在孩子小的时候，父母要帮他们养成好的生活、学习习惯。', scriptVn: 'Thói quen không dễ thay đổi, vì vậy khi con còn nhỏ, bố mẹ phải giúp con hình thành thói quen sinh hoạt và học tập tốt.' }
          ]
        },
        {
          name: 'Phần 2', range: [11, 25], type: 'mc', intro: 'Nghe hội thoại ngắn, chọn đáp án đúng.',
          questions: [
            { n: 11, options: [{ zh: '迟到了' }, { zh: '不能上网了' }, { zh: '房子不租了' }, { zh: '打错电话了' }], answer: 'C', audio: [478, 509.3], script: '男：喂，你好，我在网上看到你们的广告，你有房子要出租是吗？\n女：实在对不起，那个房子暂时不租了，对不起。\n问：女的为什么表示抱歉？', scriptVn: 'Nam: A lô, chào chị, tôi thấy quảng cáo của chị trên mạng, chị có nhà cho thuê phải không? / Nữ: Thật xin lỗi, căn nhà đó tạm thời không cho thuê nữa, xin lỗi anh. / Hỏi: Vì sao người nữ xin lỗi? (A đến muộn · B không lên mạng được · C không cho thuê nhà nữa · D gọi nhầm số)' },
            { n: 12, options: [{ zh: '加班' }, { zh: '出差' }, { zh: '休息' }, { zh: '购物' }], answer: 'C', audio: [523, 543.9], script: '女：明天周末了，你有什么安排吗？\n男：我刚出差回来，有点儿累，就想在家里休息休息。\n问：男的周末准备做什么？', scriptVn: 'Nữ: Mai là cuối tuần rồi, anh có kế hoạch gì không? / Nam: Anh vừa đi công tác về, hơi mệt, chỉ muốn ở nhà nghỉ ngơi thôi. / Hỏi: Cuối tuần người nam định làm gì? (A tăng ca · B đi công tác · C nghỉ ngơi · D mua sắm)' },
            { n: 13, options: [{ zh: '做汤' }, { zh: '做凉菜' }, { zh: '做饮料' }, { zh: '加点儿盐' }], answer: 'B', audio: [557.6, 572.3], script: '男：这几个西红柿怎么吃？\n女：就加点儿糖，做个凉菜吧。\n问：女的打算怎么吃？', scriptVn: 'Nam: Mấy quả cà chua này ăn thế nào? / Nữ: Cho thêm chút đường, làm món trộn nguội đi. / Hỏi: Người nữ định ăn thế nào? (A nấu canh · B làm món nguội · C làm đồ uống · D cho thêm chút muối)' },
            { n: 14, options: [{ zh: '教师' }, { zh: '大夫' }, { zh: '律师' }, { zh: '售货员' }], answer: 'A', audio: [586, 612.5], script: '女：真羡慕你，除了平时的节假日，还有一个寒假和一个暑假。\n男：当时选择这个职业，没考虑到这些，我只是喜欢和孩子们在一起。\n问：男的最可能是做什么的？', scriptVn: 'Nữ: Thật ghen tị với anh, ngoài các ngày lễ bình thường còn có cả nghỉ đông và nghỉ hè. / Nam: Hồi chọn nghề này tôi đâu có tính đến mấy chuyện đó, tôi chỉ thích ở bên bọn trẻ thôi. / Hỏi: Người nam có khả năng làm nghề gì nhất? (A giáo viên · B bác sĩ · C luật sư · D nhân viên bán hàng)' },
            { n: 15, options: [{ zh: '太远' }, { zh: '菜贵' }, { zh: '菜好吃' }, { zh: '菜很咸' }], answer: 'C', audio: [626.2, 652.5], script: '男：那个饭店离咱们家也太远了，我们就在附近吃吧。\n女：不算太远。它的菜做得很好吃，而且价格也不贵。\n问：女的觉得那家饭店怎么样？', scriptVn: 'Nam: Nhà hàng đó xa nhà mình quá, mình ăn ở gần đây thôi. / Nữ: Cũng không xa lắm. Món ăn ở đó nấu rất ngon, mà giá cũng không đắt. / Hỏi: Người nữ thấy nhà hàng đó thế nào? (A quá xa · B món ăn đắt · C món ăn ngon · D món ăn rất mặn)' },
            { n: 16, options: [{ zh: '10分钟' }, { zh: '半个小时' }, { zh: '一个小时' }, { zh: '一个半小时' }], answer: 'B', audio: [666.3, 688.5], script: '女：导游刚才说还要多久才能到长城？\n男：还有半小时就到了，我本来以为还得一个小时呢。\n问：到长城还要多长时间？', scriptVn: 'Nữ: Hướng dẫn viên vừa nói còn bao lâu nữa mới đến Vạn Lý Trường Thành? / Nam: Còn nửa tiếng nữa là đến, anh cứ tưởng còn phải một tiếng cơ. / Hỏi: Còn bao lâu nữa đến Trường Thành? (A 10 phút · B nửa tiếng · C một tiếng · D một tiếng rưỡi)' },
            { n: 17, options: [{ zh: '帅的' }, { zh: '耐心的' }, { zh: '诚实的' }, { zh: '幽默的' }], answer: 'D', audio: [702.3, 723.9], script: '男：你为什么不喜欢小王？他不是挺成熟的吗？\n女：可是他一点儿也不幽默，约会的时候真无聊。\n问：女的喜欢什么样的人？', scriptVn: 'Nam: Sao em không thích Tiểu Vương? Cậu ấy chẳng phải khá chín chắn sao? / Nữ: Nhưng anh ấy chẳng hài hước chút nào, hẹn hò chán lắm. / Hỏi: Người nữ thích người như thế nào? (A đẹp trai · B kiên nhẫn · C thật thà · D hài hước)' },
            { n: 18, options: [{ zh: '要办签证' }, { zh: '是位翻译' }, { zh: '要办护照' }, { zh: '在使馆工作' }], answer: 'A', audio: [737.7, 762.7], script: '女：小王，我要去办签证，需要准备哪些材料？\n男：我也不是很清楚，我有大使馆的号码，您给他们打个电话问问？\n问：关于女的，可以知道什么？', scriptVn: 'Nữ: Tiểu Vương, tôi định đi làm visa, cần chuẩn bị những giấy tờ gì? / Nam: Tôi cũng không rõ lắm, tôi có số điện thoại của đại sứ quán, chị gọi hỏi họ xem? / Hỏi: Về người nữ, có thể biết điều gì? (A sắp đi làm visa · B là phiên dịch · C sắp đi làm hộ chiếu · D làm việc ở sứ quán)' },
            { n: 19, options: [{ zh: '艺术' }, { zh: '经济' }, { zh: '法律' }, { zh: '语言' }], answer: 'C', audio: [776.5, 795.2], script: '男：你怎么懂这么多法律知识？\n女：我研究生读的就是法律专业啊，你不知道？\n问：女的熟悉哪方面的知识？', scriptVn: 'Nam: Sao chị biết nhiều kiến thức pháp luật thế? / Nữ: Tôi học thạc sĩ chuyên ngành luật mà, anh không biết à? / Hỏi: Người nữ am hiểu kiến thức về lĩnh vực nào? (A nghệ thuật · B kinh tế · C pháp luật · D ngôn ngữ)' },
            { n: 20, options: [{ zh: '兴奋' }, { zh: '吃惊' }, { zh: '轻松' }, { zh: '着急' }], answer: 'D', audio: [808.9, 832.3], script: '女：怎么样？那个技术上的问题解决了吧？\n男：我以为今天能顺利解决，但是情况比我想的复杂得多，怎么办呢？\n问：男的现在心情怎么样？', scriptVn: 'Nữ: Thế nào rồi? Vấn đề kỹ thuật kia giải quyết xong rồi chứ? / Nam: Anh tưởng hôm nay giải quyết suôn sẻ được, nhưng tình hình phức tạp hơn anh nghĩ nhiều, làm sao bây giờ? / Hỏi: Tâm trạng người nam bây giờ thế nào? (A phấn khích · B ngạc nhiên · C thoải mái · D sốt ruột)' },
            { n: 21, options: [{ zh: '开会' }, { zh: '报名' }, { zh: '上课' }, { zh: '看电影' }], answer: 'A', audio: [846.1, 868.7], script: '男：以上是这次活动的计划，看看大家还有什么意见。\n女：我觉得安排得很好，由你来组织我们都很放心。\n问：他们最可能在做什么？', scriptVn: 'Nam: Trên đây là kế hoạch của hoạt động lần này, mọi người xem còn ý kiến gì không. / Nữ: Tôi thấy sắp xếp rất tốt, anh đứng ra tổ chức thì chúng tôi đều yên tâm. / Hỏi: Họ có khả năng đang làm gì nhất? (A họp · B đăng ký · C lên lớp · D xem phim)' },
            { n: 22, options: [{ zh: '饿了' }, { zh: '感冒了' }, { zh: '流鼻血了' }, { zh: '压力太大' }], answer: 'C', audio: [882.4, 901.4], script: '女：你的鼻子怎么流血了？快用纸擦擦。\n男：我还不习惯北方的气候，估计是天气太干燥。\n问：男的怎么了？', scriptVn: 'Nữ: Mũi anh sao lại chảy máu thế? Mau lấy giấy lau đi. / Nam: Anh vẫn chưa quen khí hậu miền Bắc, chắc là do thời tiết hanh khô quá. / Hỏi: Người nam bị làm sao? (A đói rồi · B bị cảm · C chảy máu mũi · D áp lực quá lớn)' },
            { n: 23, options: [{ zh: '来得及' }, { zh: '来不及了' }, { zh: '速度太慢了' }, { zh: '航班推迟了' }], answer: 'A', audio: [915.1, 935.3], script: '男：只剩下十五分钟，今天恐怕要迟到了。\n女：别担心，现在不堵车，十五分钟肯定够。\n问：女的主要是什么意思？', scriptVn: 'Nam: Chỉ còn mười lăm phút, hôm nay e là bị muộn rồi. / Nữ: Đừng lo, bây giờ không tắc đường, mười lăm phút chắc chắn đủ. / Hỏi: Ý chính của người nữ là gì? (A vẫn kịp · B không kịp nữa rồi · C tốc độ quá chậm · D chuyến bay bị hoãn)' },
            { n: 24, options: [{ zh: '司机' }, { zh: '经理' }, { zh: '小李' }, { zh: '护士' }], answer: 'C', audio: [949.3, 972.8], script: '女：经理，我想把这个任务交给小李，您看合适不合适？\n男：他有能力也有责任心，虽然经验不多，但可以让他试试。\n问：谁缺少经验？', scriptVn: 'Nữ: Thưa giám đốc, tôi muốn giao nhiệm vụ này cho Tiểu Lý, anh xem có thích hợp không? / Nam: Cậu ấy có năng lực, cũng có tinh thần trách nhiệm, tuy kinh nghiệm chưa nhiều nhưng có thể để cậu ấy thử xem. / Hỏi: Ai thiếu kinh nghiệm? (A tài xế · B giám đốc · C Tiểu Lý · D y tá)' },
            { n: 25, options: [{ zh: '不成功' }, { zh: '让人失望' }, { zh: '比较一般' }, { zh: '很吸引人' }], answer: 'D', audio: [986.5, 1003], script: '男：昨天下午的演出怎么样？\n女：你没有和我一起去看真是太可惜了。\n问：女的觉得表演怎么样？', scriptVn: 'Nam: Buổi biểu diễn chiều qua thế nào? / Nữ: Anh không đi xem cùng em thật là tiếc quá. / Hỏi: Người nữ thấy buổi biểu diễn thế nào? (A không thành công · B khiến người ta thất vọng · C khá bình thường · D rất hấp dẫn)' }
          ]
        },
        {
          name: 'Phần 3', range: [26, 35], type: 'mc', intro: 'Nghe hội thoại dài, chọn đáp án đúng.',
          questions: [
            { n: 26, options: [{ zh: '同事' }, { zh: '邻居' }, { zh: '夫妻' }, { zh: '亲戚' }], answer: 'A', audio: [1064.6, 1096.2], script: '女：你一个人对着手机笑什么？\n男：我妹刚发来一个笑话，你看看，笑死我了。\n女：这么好笑？那你也给我发一个。\n男：好的，我给咱办公室的同事都发一遍。\n问：他们是什么关系？', scriptVn: 'Nữ: Anh ngồi một mình nhìn điện thoại cười gì thế? / Nam: Em gái anh vừa gửi một câu chuyện cười, em xem đi, anh cười chết mất. / Nữ: Buồn cười thế cơ à? Thế anh gửi cho em một cái với. / Nam: Được, anh gửi cho tất cả đồng nghiệp trong văn phòng mình một lượt. / Hỏi: Họ có quan hệ gì? (A đồng nghiệp · B hàng xóm · C vợ chồng · D họ hàng)' },
            { n: 27, options: [{ zh: '历史' }, { zh: '长度' }, { zh: '风景' }, { zh: '经过的省市' }], answer: 'D', audio: [1109.8, 1138.6], script: '男：姐，您这儿有中国地图吗？\n女：没有，你要地图做什么？\n男：我想看看长江都经过了哪些省市，你知道吗？\n女：真笨！上网一查不就知道了吗？\n男：那不一样。\n问：男的想了解长江的什么？', scriptVn: 'Nam: Chị ơi, chỗ chị có bản đồ Trung Quốc không? / Nữ: Không có, em cần bản đồ làm gì? / Nam: Em muốn xem sông Trường Giang chảy qua những tỉnh thành nào, chị biết không? / Nữ: Ngốc thật! Lên mạng tra một cái là biết ngay chứ gì? / Nam: Thế thì khác. / Hỏi: Người nam muốn tìm hiểu điều gì về sông Trường Giang? (A lịch sử · B chiều dài · C phong cảnh · D các tỉnh thành chảy qua)' },
            { n: 28, options: [{ zh: '太累' }, { zh: '得意' }, { zh: '感动' }, { zh: '怀疑' }], answer: 'A', audio: [1152.3, 1179], script: '女：我们去对面的商店看看吧。\n男：我真的受不了你了，你到底还要逛多久？\n女：我们才逛了一个小时。\n男：时间过得真慢，和你逛街比上班还辛苦。\n问：男的现在是什么感觉？', scriptVn: 'Nữ: Mình sang cửa hàng đối diện xem đi. / Nam: Anh chịu hết nổi em rồi, rốt cuộc em còn định đi dạo bao lâu nữa? / Nữ: Mình mới đi có một tiếng thôi mà. / Nam: Thời gian trôi chậm thật, đi dạo phố với em còn vất vả hơn đi làm. / Hỏi: Người nam bây giờ cảm thấy thế nào? (A quá mệt · B đắc ý · C cảm động · D nghi ngờ)' },
            { n: 29, options: [{ zh: '在读博士' }, { zh: '在读硕士' }, { zh: '在找工作' }, { zh: '想出国留学' }], answer: 'A', audio: [1192.6, 1220], script: '男：见到你真高兴！你已经硕士毕业了吧？\n女：是的，我去年就毕业了。\n男：那你现在在哪儿工作呢？\n女：我还没参加工作呢，毕业后直接读博士了。\n问：关于女的，可以知道什么？', scriptVn: 'Nam: Gặp cậu vui quá! Cậu tốt nghiệp thạc sĩ rồi nhỉ? / Nữ: Ừ, tớ tốt nghiệp từ năm ngoái rồi. / Nam: Thế giờ cậu làm việc ở đâu? / Nữ: Tớ vẫn chưa đi làm, tốt nghiệp xong học thẳng lên tiến sĩ luôn. / Hỏi: Về người nữ, có thể biết điều gì? (A đang học tiến sĩ · B đang học thạc sĩ · C đang tìm việc · D muốn đi du học)' },
            { n: 30, options: [{ zh: '8：00' }, { zh: '8：30' }, { zh: '9：00' }, { zh: '9：30' }], answer: 'D', audio: [1233.7, 1256], script: '女：你好，我是前台。\n男：你好，我住八零七。楼下现在还有早饭吗？\n女：对不起，早饭提供到九点。\n男：明白了。谢谢你。\n问：现在最可能是几点？', scriptVn: 'Nữ: Xin chào, tôi là lễ tân. / Nam: Chào cô, tôi ở phòng 807. Dưới tầng bây giờ còn bữa sáng không? / Nữ: Xin lỗi anh, bữa sáng chỉ phục vụ đến chín giờ. / Nam: Tôi hiểu rồi. Cảm ơn cô. / Hỏi: Bây giờ có khả năng là mấy giờ nhất? (A 8:00 · B 8:30 · C 9:00 · D 9:30)' },
            { n: 31, options: [{ zh: '想减肥' }, { zh: '想聊天' }, { zh: '停电了' }, { zh: '电梯坏了' }], answer: 'A', audio: [1269.8, 1299], script: '男：我们爬到六层了，可以了吧？\n女：不行，要爬到十四层，这样才有效果。\n男：啊，可是我现在就没力气了。\n女：想减肥就要坚持！我们先休息休息再爬。\n问：他们为什么爬楼梯？', scriptVn: 'Nam: Mình leo đến tầng sáu rồi, được rồi chứ? / Nữ: Không được, phải leo đến tầng mười bốn thì mới có hiệu quả. / Nam: Hả, nhưng giờ anh đã hết sức rồi. / Nữ: Muốn giảm cân thì phải kiên trì! Mình nghỉ một lát rồi leo tiếp. / Hỏi: Vì sao họ leo cầu thang? (A muốn giảm cân · B muốn trò chuyện · C mất điện · D thang máy hỏng)' },
            { n: 32, options: [{ zh: '家里' }, { zh: '商场' }, { zh: '教室' }, { zh: '银行' }], answer: 'B', audio: [1312.7, 1340], script: '女：咱家的洗衣机坏了，商场正好打折，我们顺便买一台吧。\n男：今天买的东西太多了，钱不够了，下次再说？\n女：我带着信用卡呢，给你。\n男：好吧。\n问：他们现在在哪儿？', scriptVn: 'Nữ: Máy giặt nhà mình hỏng rồi, trung tâm thương mại đang giảm giá, mình tiện mua luôn một cái nhé. / Nam: Hôm nay mua nhiều đồ quá, không đủ tiền rồi, để lần sau? / Nữ: Em có mang thẻ tín dụng đây, đưa anh này. / Nam: Thôi được. / Hỏi: Họ đang ở đâu? (A ở nhà · B trung tâm thương mại · C lớp học · D ngân hàng)' },
            { n: 33, options: [{ zh: '2500' }, { zh: '3000' }, { zh: '3200' }, { zh: '3500' }], answer: 'D', audio: [1353.7, 1379.1], script: '男：你看，这个怎么样？图书馆招聘人。\n女：在哪儿？我看看。\n男：好像挺适合你的。\n女：三千五？工资还挺高，那我先发个电子邮件吧。\n问：这个工作的工资是多少？', scriptVn: 'Nam: Em xem này, cái này thế nào? Thư viện tuyển người. / Nữ: Đâu? Để em xem. / Nam: Hình như khá hợp với em đấy. / Nữ: Ba nghìn rưỡi? Lương cũng khá cao, vậy em gửi email trước đã. / Hỏi: Lương của công việc này là bao nhiêu? (A 2500 · B 3000 · C 3200 · D 3500)' },
            { n: 34, options: [{ zh: '请不了假' }, { zh: '害怕打针' }, { zh: '讨厌吃药' }, { zh: '肚子不疼了' }], answer: 'B', audio: [1392.9, 1421.3], script: '女：你的咳嗽怎么一直没好？去医院看看吧。\n男：不去，不是很严重，吃点药就行了。\n女：关键是你吃了药也没好呀。\n男：不去。我跟你说，其实我是怕打针。\n问：男的为什么不去医院？', scriptVn: 'Nữ: Sao anh ho mãi không khỏi thế? Đi bệnh viện khám đi. / Nam: Không đi đâu, không nghiêm trọng lắm, uống ít thuốc là được. / Nữ: Vấn đề là anh uống thuốc rồi mà vẫn chưa khỏi đấy. / Nam: Không đi. Nói thật với em, anh sợ tiêm. / Hỏi: Vì sao người nam không đi bệnh viện? (A không xin nghỉ được · B sợ tiêm · C ghét uống thuốc · D hết đau bụng rồi)' },
            { n: 35, options: [{ zh: '同意' }, { zh: '原谅' }, { zh: '太麻烦' }, { zh: '十分满意' }], answer: 'A', audio: [1435.1, 1457.4], script: '男：这些塑料盒子还有用吗？\n女：没用了。\n男：没用的东西就放垃圾桶里，别到处乱扔。\n女：好吧，那我现在把房间整理一下。\n问：女的是什么态度？', scriptVn: 'Nam: Mấy cái hộp nhựa này còn dùng không? / Nữ: Không dùng nữa. / Nam: Đồ không dùng nữa thì bỏ vào thùng rác, đừng vứt lung tung. / Nữ: Được rồi, vậy bây giờ em dọn dẹp lại phòng. / Hỏi: Thái độ của người nữ thế nào? (A đồng ý · B tha thứ · C quá phiền phức · D vô cùng hài lòng)' }
          ]
        },
        {
          name: 'Phần 4', range: [36, 45], type: 'mc', intro: 'Nghe đoạn văn, trả lời 2 câu hỏi.',
          groups: [
            { range: [36, 37], questions: [
              { n: 36, options: [{ zh: '不要骄傲' }, { zh: '买件大衣' }, { zh: '要努力工作' }, { zh: '别忘了过去' }], answer: 'B', audio: [1471, 1526.3], script: '有个人出名之前，穿得很随便。朋友对他说，应该买件漂亮的大衣。他笑着回答：“我本来就没有名，穿得再漂亮也没有人会认识。”几年后，出了名的他穿得仍然很随便。朋友又提醒他，快去做件漂亮的大衣。他还是笑着回答：“现在即使穿得更随便些，同样也会有人认识我。”\n问：朋友对他说什么了？', scriptVn: 'Có một người trước khi nổi tiếng ăn mặc rất xuề xòa. Bạn anh bảo nên mua một chiếc áo khoác đẹp. Anh cười đáp: "Tôi vốn chẳng có tiếng tăm gì, ăn mặc đẹp mấy cũng chẳng ai biết tôi." Vài năm sau, khi đã nổi tiếng, anh vẫn ăn mặc xuề xòa. Bạn lại nhắc anh mau đi may một chiếc áo khoác đẹp. Anh vẫn cười đáp: "Bây giờ dù có ăn mặc xuề xòa hơn nữa thì người ta vẫn nhận ra tôi." / Hỏi 36: Người bạn đã nói gì với anh ấy? (A đừng kiêu ngạo · B mua một chiếc áo khoác · C phải làm việc chăm chỉ · D đừng quên quá khứ)' },
              { n: 37, options: [{ zh: '很活泼' }, { zh: '后来很穷' }, { zh: '喜欢弹钢琴' }, { zh: '成为了名人' }], answer: 'D', audio: [1540, 1545.7], script: '问：关于那个人，可以知道什么？', scriptVn: 'Hỏi 37: Về người đó, có thể biết điều gì? (A rất hoạt bát · B về sau rất nghèo · C thích chơi piano · D đã trở thành người nổi tiếng)' }
            ] },
            { range: [38, 39], questions: [
              { n: 38, options: [{ zh: '星期三' }, { zh: '星期四' }, { zh: '星期五' }, { zh: '星期六' }], answer: 'D', audio: [1559.3, 1598.6], script: '各位观众，大家晚上好。欢迎大家在星期六晚上，准时收看我们的《人与自然》节目。在今天的节目里，我们主要向大家介绍亚洲虎。今天我们还请来了国内著名的动物学教授，王教授，来给我们介绍这方面的知识。\n问：今天星期几？', scriptVn: 'Kính chào quý khán giả, chúc mọi người buổi tối tốt lành. Hoan nghênh quý vị đúng giờ theo dõi chương trình "Con người và Thiên nhiên" của chúng tôi vào tối thứ Bảy. Trong chương trình hôm nay, chúng tôi chủ yếu giới thiệu với quý vị về loài hổ châu Á. Hôm nay chúng tôi còn mời được một giáo sư động vật học nổi tiếng trong nước là giáo sư Vương đến giới thiệu kiến thức về lĩnh vực này. / Hỏi 38: Hôm nay là thứ mấy? (A thứ Tư · B thứ Năm · C thứ Sáu · D thứ Bảy)' },
              { n: 39, options: [{ zh: '亚洲' }, { zh: '地球' }, { zh: '老虎' }, { zh: '狮子' }], answer: 'C', audio: [1612.3, 1618.3], script: '问：今天的节目主要介绍什么？', scriptVn: 'Hỏi 39: Chương trình hôm nay chủ yếu giới thiệu gì? (A châu Á · B Trái Đất · C hổ · D sư tử)' }
            ] },
            { range: [40, 41], questions: [
              { n: 40, options: [{ zh: '爱情' }, { zh: '烦恼' }, { zh: '友谊' }, { zh: '好心情' }], answer: 'D', audio: [1631.9, 1671.8], script: '阳光能给我们带来好的心情。当你心情不好的时候，如果天也在下雨，你的脾气很容易变得更坏。相反，如果天气很好，有阳光，你就容易看到事情好的方面，心情也就会变得好起来。\n问：阳光能给我们带来什么？', scriptVn: 'Ánh nắng có thể mang lại cho chúng ta tâm trạng tốt. Khi tâm trạng bạn không tốt mà trời lại đang mưa thì bạn rất dễ cáu hơn. Ngược lại, nếu trời đẹp, có nắng, bạn sẽ dễ nhìn thấy mặt tốt của sự việc, tâm trạng cũng sẽ tốt lên. / Hỏi 40: Ánh nắng có thể mang lại cho chúng ta điều gì? (A tình yêu · B phiền muộn · C tình bạn · D tâm trạng tốt)' },
              { n: 41, options: [{ zh: '环境污染' }, { zh: '天气情况' }, { zh: '身体健康' }, { zh: '阳光影响心情' }], answer: 'D', audio: [1685.6, 1690.5], script: '问：这段话主要谈什么？', scriptVn: 'Hỏi 41: Đoạn văn chủ yếu nói về điều gì? (A ô nhiễm môi trường · B tình hình thời tiết · C sức khỏe · D ánh nắng ảnh hưởng đến tâm trạng)' }
            ] },
            { range: [42, 43], questions: [
              { n: 42, options: [{ zh: '主动买票' }, { zh: '准备下车' }, { zh: '带好行李' }, { zh: '禁止抽烟' }], answer: 'B', audio: [1704.2, 1741.6], script: '在乘坐地铁和公共汽车等交通工具时，经常可以听到这样的广播：“下一站就要到了，请下车的乘客提前做好准备。”按照广播的提醒到车门旁边等着下车，既方便了自己，也方便了他人。\n问：广播提醒乘客什么？', scriptVn: 'Khi đi tàu điện ngầm, xe buýt và các phương tiện giao thông khác, ta thường nghe thấy thông báo thế này: "Sắp đến điểm dừng tiếp theo, hành khách nào xuống xe xin chuẩn bị trước." Làm theo lời nhắc, ra đứng cạnh cửa xe chờ xuống, vừa tiện cho mình lại vừa tiện cho người khác. / Hỏi 42: Loa thông báo nhắc hành khách điều gì? (A chủ động mua vé · B chuẩn bị xuống xe · C mang theo đủ hành lý · D cấm hút thuốc)' },
              { n: 43, options: [{ zh: '船上' }, { zh: '飞机上' }, { zh: '出租车上' }, { zh: '公共汽车上' }], answer: 'D', audio: [1755.3, 1760.7], script: '问：在哪儿能听到这样的广播？', scriptVn: 'Hỏi 43: Có thể nghe thấy thông báo như vậy ở đâu? (A trên tàu thủy · B trên máy bay · C trên taxi · D trên xe buýt)' }
            ] },
            { range: [44, 45], questions: [
              { n: 44, options: [{ zh: '很浪漫' }, { zh: '值得同情' }, { zh: '特别有趣' }, { zh: '内容丰富' }], answer: 'A', audio: [1774.4, 1815.1], script: '很多女孩子羡慕小说里浪漫、复杂的爱情，认为经历了酸甜苦辣的爱情才算是深厚的。其实，更值得我们重视和尊重的，正是实际生活中简单的爱情。有时候，简单就是最大的幸福。\n问：女孩子为什么喜欢小说里的爱情？', scriptVn: 'Nhiều cô gái ngưỡng mộ những mối tình lãng mạn, phức tạp trong tiểu thuyết, cho rằng tình yêu phải trải qua đủ ngọt bùi đắng cay mới là sâu đậm. Thật ra, điều đáng để ta coi trọng và trân trọng hơn chính là tình yêu giản dị trong cuộc sống thực. Có khi giản dị lại chính là hạnh phúc lớn nhất. / Hỏi 44: Vì sao các cô gái thích tình yêu trong tiểu thuyết? (A rất lãng mạn · B đáng thương cảm · C đặc biệt thú vị · D nội dung phong phú)' },
              { n: 45, options: [{ zh: '精彩的' }, { zh: '简单的' }, { zh: '相互信任的' }, { zh: '勇敢去爱的' }], answer: 'B', audio: [1828.8, 1836.1], script: '问：说话人认为什么样的爱情才是幸福的？', scriptVn: 'Hỏi 45: Người nói cho rằng tình yêu như thế nào mới là hạnh phúc? (A đặc sắc · B giản dị · C tin tưởng lẫn nhau · D dũng cảm yêu)' }
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
            { range: [46, 50], words: [{ k: 'A', zh: '食品' }, { k: 'B', zh: '粗心' }, { k: 'C', zh: '礼貌' }, { k: 'D', zh: '坚持', used: true }, { k: 'E', zh: '挂' }, { k: 'F', zh: '完全' }], example: 'Ví dụ: 她每天都（ D ）走路上下班，所以身体一直很不错。', questions: [
              { n: 46, zh: '她要求在洗手间的墙上（　）一面大镜子。', vn: 'Cô ấy yêu cầu treo một tấm gương lớn trên tường nhà vệ sinh. — 挂: treo.', answer: 'E' },
              { n: 47, zh: '他弟弟不但聪明，而且很懂（　），给客人们留下了非常好的印象。', vn: 'Em trai anh ấy không những thông minh mà còn rất lễ phép, để lại ấn tượng rất tốt cho khách. — 懂礼貌: biết lễ phép.', answer: 'C' },
              { n: 48, zh: '不管做什么事情，都应该认真、仔细，不能太马虎、太（　）。', vn: 'Dù làm việc gì cũng phải nghiêm túc, cẩn thận, không được quá qua loa, quá cẩu thả. — 粗心: cẩu thả, sơ ý (đi cặp với 马虎).', answer: 'B' },
              { n: 49, zh: '小姐，这边都是（　），毛巾、牙膏什么的在那边，右边。', vn: 'Cô ơi, bên này toàn là thực phẩm, khăn mặt, kem đánh răng các thứ ở bên kia, phía bên phải. — 食品: thực phẩm.', answer: 'A' },
              { n: 50, zh: '市场调查结果和他们想的几乎（　）相反，他们不得不改变原来的计划。', vn: 'Kết quả khảo sát thị trường gần như hoàn toàn trái ngược với điều họ nghĩ, họ đành phải thay đổi kế hoạch ban đầu. — 完全相反: hoàn toàn trái ngược.', answer: 'F' }
            ] },
            { range: [51, 55], words: [{ k: 'A', zh: '最好' }, { k: 'B', zh: '继续' }, { k: 'C', zh: '温度', used: true }, { k: 'D', zh: '热闹' }, { k: 'E', zh: '作者' }, { k: 'F', zh: '商量' }], example: 'Ví dụ: A：今天真冷啊，好像白天最高（ C ）才2℃。 B：刚才电视里说明天更冷。', questions: [
              { n: 51, zh: 'A：那篇文章的（　）是谁？\nB：我忘了他叫什么名字了，只记得他姓李。', vn: 'A: Tác giả bài viết đó là ai? / B: Tôi quên tên anh ấy rồi, chỉ nhớ là họ Lý. — 作者: tác giả.', answer: 'E' },
              { n: 52, zh: 'A：外面有好多人，停了好多辆车，特别（　）。\nB：今天老王的女儿结婚，我们也去祝贺一下吧。', vn: 'A: Ngoài kia đông người quá, đỗ bao nhiêu là xe, náo nhiệt lắm. / B: Hôm nay con gái lão Vương cưới, chúng ta cũng đi chúc mừng đi. — 热闹: náo nhiệt.', answer: 'D' },
              { n: 53, zh: 'A：咱们把沙发往窗户那儿抬一下，这样看电视更舒服些。\nB：别开玩笑了，我们俩抬不动，（　）等你爸爸回来再弄。', vn: 'A: Mình khiêng ghế sô-pha dịch về phía cửa sổ một chút, như vậy xem ti-vi thoải mái hơn. / B: Đừng đùa, hai đứa mình khiêng không nổi đâu, tốt nhất đợi bố cậu về rồi làm. — 最好: tốt nhất là.', answer: 'A' },
              { n: 54, zh: 'A：所有的困难都是暂时的，要有信心，我相信你会成功的。\nB：感谢您的支持和鼓励，我一定会（　）努力。', vn: 'A: Mọi khó khăn đều chỉ là tạm thời, phải có niềm tin, tôi tin cậu sẽ thành công. / B: Cảm ơn sự ủng hộ và động viên của anh, tôi nhất định sẽ tiếp tục cố gắng. — 继续: tiếp tục.', answer: 'B' },
              { n: 55, zh: 'A：这事你跟她（　）了吗？\nB：还没，她最近在忙公司的事情，我怕打扰她。', vn: 'A: Chuyện này cậu bàn với cô ấy chưa? / B: Chưa, dạo này cô ấy đang bận việc công ty, tôi sợ làm phiền cô ấy. — 跟…商量: bàn bạc với ai.', answer: 'F' }
            ] }
          ]
        },
        {
          name: 'Phần 2', range: [56, 65], type: 'order', intro: 'Sắp xếp ba câu A, B, C thành đoạn văn đúng. Bấm lần lượt các câu; bấm câu đã xếp để bỏ ra.',
          questions: [
            { n: 56, items: [{ k: 'A', zh: '带来一天的好心情' }, { k: 'B', zh: '一个笑话' }, { k: 'C', zh: '也许就能带走我们的烦恼' }], answer: 'BCA', vn: 'Một câu chuyện cười có khi mang đi được phiền muộn của chúng ta, đem lại tâm trạng vui vẻ cả ngày. — 一个笑话 là chủ ngữ, đứng đầu.' },
            { n: 57, items: [{ k: 'A', zh: '就可以变得越来越优秀' }, { k: 'B', zh: '但只要能发现自己的缺点并及时去改' }, { k: 'C', zh: '每个人都有缺点' }], answer: 'CBA', vn: 'Ai cũng có khuyết điểm, nhưng chỉ cần phát hiện ra khuyết điểm của mình và kịp thời sửa thì có thể ngày càng trở nên xuất sắc. — 只要…就….' },
            { n: 58, items: [{ k: 'A', zh: '平时，儿子总是在学校上课' }, { k: 'B', zh: '只有放了假，才有可能和我们一块儿去旅游' }, { k: 'C', zh: '学习很紧张，很少有时间出去玩儿' }], answer: 'ACB', vn: 'Ngày thường con trai tôi lúc nào cũng lên lớp ở trường, học hành rất căng thẳng, ít khi có thời gian đi chơi, chỉ khi được nghỉ mới có thể đi du lịch cùng chúng tôi. — 只有…才….' },
            { n: 59, items: [{ k: 'A', zh: '因为无论成功还是失败，努力过的人都应获得掌声' }, { k: 'B', zh: '当然，也不要忘了鼓励那些失败的人' }, { k: 'C', zh: '我们要为那些通过自己努力获得成功的人鼓掌' }], answer: 'CBA', vn: 'Chúng ta phải vỗ tay cho những người thành công nhờ nỗ lực của bản thân; đương nhiên cũng đừng quên động viên những người thất bại, vì dù thành công hay thất bại, người đã nỗ lực đều xứng đáng nhận được tràng pháo tay. — 当然 bổ sung ý, 因为 giải thích ở cuối.' },
            { n: 60, items: [{ k: 'A', zh: '所以对我来说，年龄只是一个数字' }, { k: 'B', zh: '我的理解是，重要的是要有永远年轻的心' }, { k: 'C', zh: '我从来不关心它' }], answer: 'BAC', vn: 'Theo tôi hiểu, điều quan trọng là phải có một trái tim mãi trẻ trung, vì vậy với tôi, tuổi tác chỉ là một con số, tôi chưa bao giờ bận tâm đến nó. — 它 ở C chỉ 年龄 ở A.' },
            { n: 61, items: [{ k: 'A', zh: '在原有的基础上，增加了一部分文化交流的内容' }, { k: 'B', zh: '王校长，根据您的要求' }, { k: 'C', zh: '我把这篇报道稍微改了一下' }], answer: 'BCA', vn: 'Thưa hiệu trưởng Vương, theo yêu cầu của thầy, tôi đã sửa bài phóng sự này một chút, trên cơ sở cũ bổ sung thêm một phần nội dung về giao lưu văn hóa. — Lời gọi 王校长 đứng đầu.' },
            { n: 62, items: [{ k: 'A', zh: '放弃并不代表认输，而是代表新的开始' }, { k: 'B', zh: '因此，为了获得更多' }, { k: 'C', zh: '需要主动丢掉一些不重要的东西' }], answer: 'ABC', vn: 'Từ bỏ không có nghĩa là chịu thua, mà là một khởi đầu mới. Vì vậy, để có được nhiều hơn, cần chủ động vứt bỏ một số thứ không quan trọng. — 因此 nêu kết luận; 为了… + 需要….' },
            { n: 63, items: [{ k: 'A', zh: '人就容易梦到什么内容' }, { k: 'B', zh: '例如，一个人脚冷时就可能会梦见在雪地里行走' }, { k: 'C', zh: '晚上睡觉时，身体感觉到什么' }], answer: 'CAB', vn: 'Khi ngủ ban đêm, cơ thể cảm nhận được gì thì người ta dễ mơ thấy nội dung đó. Ví dụ, một người khi bị lạnh chân có thể sẽ mơ thấy mình đi trên tuyết. — 什么…什么… hô ứng; 例如 đứng cuối.' },
            { n: 64, items: [{ k: 'A', zh: '我打算毕业以后' }, { k: 'B', zh: '为将来自己做生意积累一些管理经验' }, { k: 'C', zh: '先在叔叔开的公司里干一段时间' }], answer: 'ACB', vn: 'Tôi dự định tốt nghiệp xong sẽ làm ở công ty của chú một thời gian trước, để tích lũy chút kinh nghiệm quản lý cho việc tự kinh doanh sau này. — 先… rồi 为… nêu mục đích.' },
            { n: 65, items: [{ k: 'A', zh: '她是我的同学，从小就想成为一名警察' }, { k: 'B', zh: '现在她决定，一定要找一个警察做丈夫' }, { k: 'C', zh: '然而由于种种原因，她没能当上警察' }], answer: 'ACB', vn: 'Cô ấy là bạn học của tôi, từ nhỏ đã muốn trở thành cảnh sát. Thế nhưng vì nhiều lý do, cô ấy đã không làm được cảnh sát. Bây giờ cô ấy quyết định nhất định phải tìm một anh cảnh sát làm chồng. — 然而 chuyển ý.' }
          ]
        },
        {
          name: 'Phần 3', range: [66, 85], type: 'mc', intro: 'Đọc đoạn văn, chọn đáp án đúng.',
          groups: [
            { range: [66, 66], questions: [
              { n: 66, zh: '老人总是喜欢往回看，回忆总结自己过去的经历；而年轻人却相反，他们喜欢向前看，也容易接受新鲜事情。', star: '和老年人相比，年轻人：', options: [{ zh: '更节约' }, { zh: '拒绝变化' }, { zh: '关心将来' }, { zh: '缺少竞争力' }], answer: 'C', vn: 'Người già luôn thích nhìn lại phía sau, hồi tưởng và tổng kết những gì mình đã trải qua; còn người trẻ thì ngược lại, họ thích nhìn về phía trước, cũng dễ tiếp nhận cái mới. ★ So với người già, người trẻ: A tiết kiệm hơn · B từ chối thay đổi · C quan tâm đến tương lai · D thiếu sức cạnh tranh.' }
            ] },
            { range: [67, 67], questions: [
              { n: 67, zh: '一个人成熟不成熟，不是看年龄的大小，而是要看他遇到问题时，能不能及时发现，并且准确地找到解决问题的方法。', star: '成熟的人有什么特点？', options: [{ zh: '年龄大' }, { zh: '会解决问题' }, { zh: '不会做错事' }, { zh: '不会遇到问题' }], answer: 'B', vn: 'Một người chín chắn hay không không phải xem tuổi lớn hay nhỏ, mà phải xem khi gặp vấn đề, họ có kịp thời phát hiện và tìm ra chính xác cách giải quyết hay không. ★ Người chín chắn có đặc điểm gì? A tuổi lớn · B biết giải quyết vấn đề · C không làm sai · D không gặp vấn đề.' }
            ] },
            { range: [68, 68], questions: [
              { n: 68, zh: '这个公司专门制造各种各样的筷子。他们的筷子用不同的材料做成，颜色也都不一样，质量很好。买来不仅可以自己用，还可以当礼物送给别人，顾客们都很喜欢。', star: '这个公司制造的筷子：', options: [{ zh: '很便宜' }, { zh: '很普通' }, { zh: '质量不错' }, { zh: '数量很少' }], answer: 'C', vn: 'Công ty này chuyên sản xuất đủ loại đũa. Đũa của họ làm từ những chất liệu khác nhau, màu sắc cũng khác nhau, chất lượng rất tốt. Mua về không chỉ để tự dùng mà còn có thể làm quà tặng người khác, khách hàng đều rất thích. ★ Đũa do công ty này sản xuất: A rất rẻ · B rất bình thường · C chất lượng tốt · D số lượng rất ít.' }
            ] },
            { range: [69, 69], questions: [
              { n: 69, zh: '既然你不喜欢新闻专业，那就再考虑考虑其他专业吧，中文、国际关系什么的，妈和你爸都不反对。但是为了将来不后悔，不要这么快做决定，至少应该去了解一下这个专业，也许最后你会改变主意的。', star: '根据这段话，可以知道他：', options: [{ zh: '后悔了' }, { zh: '很生气' }, { zh: '想换专业' }, { zh: '成绩不合格' }], answer: 'C', vn: 'Nếu con đã không thích ngành báo chí thì cứ cân nhắc thêm các ngành khác, như tiếng Trung, quan hệ quốc tế chẳng hạn, bố mẹ đều không phản đối. Nhưng để sau này không hối hận, đừng quyết định vội thế, ít nhất cũng nên tìm hiểu ngành này một chút, biết đâu cuối cùng con lại đổi ý. ★ Theo đoạn văn, có thể biết người con: A đã hối hận · B rất tức giận · C muốn đổi ngành · D thành tích không đạt.' }
            ] },
            { range: [70, 70], questions: [
              { n: 70, zh: '要获得别人的尊重，必须先尊重别人。任何人心里都希望获得尊重，受到尊重的人往往会变得更友好、更容易交流。', star: '怎样获得别人的尊重？', options: [{ zh: '尊重别人' }, { zh: '多与人交流' }, { zh: '多表扬别人' }, { zh: '严格要求自己' }], answer: 'A', vn: 'Muốn được người khác tôn trọng thì trước hết phải tôn trọng người khác. Ai trong lòng cũng mong được tôn trọng, người được tôn trọng thường trở nên thân thiện hơn, dễ giao tiếp hơn. ★ Làm thế nào để được người khác tôn trọng? A tôn trọng người khác · B giao tiếp nhiều với mọi người · C khen ngợi người khác nhiều · D nghiêm khắc với bản thân.' }
            ] },
            { range: [71, 71], questions: [
              { n: 71, zh: '有不少人都喜欢按照流行的标准来穿衣服、打扮自己。其实，是不是流行不重要，真正适合自己的才是最好的。', star: '年轻人应该穿什么样的衣服？', options: [{ zh: '正式的' }, { zh: '高级的' }, { zh: '适合自己的' }, { zh: '人们普遍接受的' }], answer: 'C', vn: 'Có không ít người thích ăn mặc, trang điểm theo tiêu chuẩn thời thượng. Thật ra có hợp mốt hay không không quan trọng, thứ thật sự hợp với mình mới là tốt nhất. ★ Người trẻ nên mặc quần áo như thế nào? A trang trọng · B cao cấp · C hợp với bản thân · D được mọi người chấp nhận rộng rãi.' }
            ] },
            { range: [72, 72], questions: [
              { n: 72, zh: '森林对环境有很好的保护作用。因为森林里的植物可以留住更多的水，使空气变得湿润，还可以影响地球的温度。', star: '森林对保护环境有什么作用？', options: [{ zh: '减少降雨' }, { zh: '降低气温' }, { zh: '使空气湿润' }, { zh: '使降雪受到限制' }], answer: 'C', vn: 'Rừng có tác dụng bảo vệ môi trường rất tốt. Vì thực vật trong rừng giữ được nhiều nước hơn, làm không khí trở nên ẩm hơn, còn có thể ảnh hưởng đến nhiệt độ của Trái Đất. ★ Rừng có tác dụng gì trong việc bảo vệ môi trường? A giảm lượng mưa · B hạ nhiệt độ · C làm không khí ẩm · D hạn chế tuyết rơi.' }
            ] },
            { range: [73, 73], questions: [
              { n: 73, zh: '网球爱好者都知道，选择厚一点儿的网球袜确实更好。第一，它能很好地吸汗，尤其适合那些容易出汗的人。第二，在紧张的运动过程中，厚的网球袜能更好地保护你的脚。', star: '这段话主要讲了选择厚网球袜的：', options: [{ zh: '条件' }, { zh: '原因' }, { zh: '办法' }, { zh: '重点' }], answer: 'B', vn: 'Người yêu quần vợt đều biết chọn tất quần vợt dày một chút quả thật tốt hơn. Thứ nhất, nó thấm mồ hôi rất tốt, đặc biệt hợp với người dễ ra mồ hôi. Thứ hai, trong lúc vận động căng thẳng, tất dày bảo vệ chân bạn tốt hơn. ★ Đoạn văn chủ yếu nói về … của việc chọn tất quần vợt dày: A điều kiện · B lý do · C cách làm · D trọng điểm.' }
            ] },
            { range: [74, 74], questions: [
              { n: 74, zh: '3月7日上午，我在体育馆打羽毛球时，丢了一个咖啡色书包，里面有笔记本电脑、钥匙和几本杂志，请拿到包的人与我联系。非常感谢。', star: '这个人写这段话的目的是：', options: [{ zh: '还书' }, { zh: '找他的包' }, { zh: '表示道歉' }, { zh: '重新申请奖学金' }], answer: 'B', vn: 'Sáng ngày 7 tháng 3, khi đang chơi cầu lông ở nhà thi đấu, tôi đánh rơi một chiếc ba lô màu nâu, bên trong có máy tính xách tay, chìa khóa và mấy cuốn tạp chí, ai nhặt được xin liên hệ với tôi. Xin cảm ơn. ★ Mục đích người này viết đoạn văn là: A trả sách · B tìm lại túi của mình · C xin lỗi · D xin lại học bổng.' }
            ] },
            { range: [75, 75], questions: [
              { n: 75, zh: '当地少数民族朋友不仅主动邀请我们去他们家做客，还教我们骑马、唱民歌，那儿的人可爱极了。', star: '我们在当地：', options: [{ zh: '学习骑马' }, { zh: '偶尔去散步' }, { zh: '邀请朋友做客' }, { zh: '参加跳舞比赛' }], answer: 'A', vn: 'Những người bạn dân tộc thiểu số ở địa phương không những chủ động mời chúng tôi đến nhà chơi mà còn dạy chúng tôi cưỡi ngựa, hát dân ca, người ở đó dễ mến vô cùng. ★ Ở địa phương, chúng tôi: A học cưỡi ngựa · B thỉnh thoảng đi dạo · C mời bạn bè đến nhà · D tham gia thi nhảy.' }
            ] },
            { range: [76, 76], questions: [
              { n: 76, zh: '有一个人去公司面试时，顺手把地上的香蕉皮扔进了垃圾桶，正好被路过的经理看见了，因此他得到了工作。', star: '经理觉得那个人怎么样？', options: [{ zh: '很奇怪' }, { zh: '很冷静' }, { zh: '极其可怜' }, { zh: '有好的习惯' }], answer: 'D', vn: 'Có một người đến công ty phỏng vấn, tiện tay nhặt vỏ chuối dưới đất vứt vào thùng rác, đúng lúc giám đốc đi ngang qua trông thấy, nhờ vậy anh ta được nhận vào làm. ★ Giám đốc thấy người đó thế nào? A rất kỳ lạ · B rất bình tĩnh · C vô cùng đáng thương · D có thói quen tốt.' }
            ] },
            { range: [77, 77], questions: [
              { n: 77, zh: '现在火车的速度非常快，有时乘坐火车甚至比乘坐飞机更节约时间，因为一般来说，去火车站比去机场的距离要近得多。', star: '与飞机比，火车的优点有：', options: [{ zh: '更干净' }, { zh: '座位更软' }, { zh: '速度更快' }, { zh: '火车站比机场近' }], answer: 'D', vn: 'Bây giờ tàu hỏa chạy rất nhanh, có khi đi tàu còn tiết kiệm thời gian hơn đi máy bay, vì thông thường quãng đường đến ga tàu gần hơn nhiều so với đến sân bay. ★ So với máy bay, ưu điểm của tàu hỏa là: A sạch hơn · B ghế êm hơn · C tốc độ nhanh hơn · D ga tàu gần hơn sân bay.' }
            ] },
            { range: [78, 78], questions: [
              { n: 78, zh: '人脑不是电脑，所以密码不能太复杂，不过也不能太简单，否则不安全。想要密码安全，最好不要用手机号码、生日等。', star: '用手机号码做密码：', options: [{ zh: '太复杂' }, { zh: '不安全' }, { zh: '会引起误会' }, { zh: '很浪费时间' }], answer: 'B', vn: 'Não người không phải máy tính, vì vậy mật khẩu không được quá phức tạp, nhưng cũng không được quá đơn giản, nếu không sẽ không an toàn. Muốn mật khẩu an toàn thì tốt nhất đừng dùng số điện thoại, ngày sinh… ★ Dùng số điện thoại làm mật khẩu: A quá phức tạp · B không an toàn · C gây hiểu lầm · D rất tốn thời gian.' }
            ] },
            { range: [79, 79], questions: [
              { n: 79, zh: '黄河是中国第二大河，从中国西部流向东部，全长5464公里，被人们叫做“母亲河”。从地图上看，它就像一个大大的“几”字。', star: '关于黄河，可以知道：', options: [{ zh: '很窄' }, { zh: '有很多座桥' }, { zh: '从西流向东' }, { zh: '大约一万多公里' }], answer: 'C', vn: 'Hoàng Hà là con sông lớn thứ hai của Trung Quốc, chảy từ miền Tây sang miền Đông, dài 5464 km, được gọi là "sông mẹ". Nhìn trên bản đồ, nó giống hệt một chữ "几" thật lớn. ★ Về Hoàng Hà, có thể biết: A rất hẹp · B có nhiều cây cầu · C chảy từ tây sang đông · D dài khoảng hơn một vạn km.' }
            ] },
            { range: [80, 81], zh: '教育孩子要使用正确的方法。首先，不要用“懒”“笨”“粗心”这种词批评孩子，这样很容易让他们相信自己就是那样的，于是限制了他们正常的发展。其次，即使是出于教育的目的，也千万不能骗孩子，因为儿童缺少判断能力，看到父母骗人，他们也会学着说假话。', questions: [
              { n: 80, star: '批评孩子懒、笨、粗心，会让孩子：', options: [{ zh: '说假话' }, { zh: '缺少判断力' }, { zh: '发展受到限制' }, { zh: '不敢相信任何人' }], answer: 'C', vn: 'Giáo dục con cái phải dùng phương pháp đúng. Thứ nhất, đừng dùng những từ như "lười", "ngốc", "cẩu thả" để phê bình con, như vậy rất dễ khiến trẻ tin rằng mình đúng là như thế, từ đó hạn chế sự phát triển bình thường của trẻ. Thứ hai, dù vì mục đích giáo dục cũng tuyệt đối không được lừa trẻ, vì trẻ con thiếu khả năng phán đoán, thấy bố mẹ nói dối thì chúng cũng sẽ học theo nói dối. ★ Phê bình con lười, ngốc, cẩu thả sẽ khiến trẻ: A nói dối · B thiếu khả năng phán đoán · C bị hạn chế phát triển · D không dám tin ai.' },
              { n: 81, star: '这段话主要讲怎样正确：', options: [{ zh: '批评孩子' }, { zh: '教育孩子' }, { zh: '照顾孩子' }, { zh: '帮助孩子' }], answer: 'B', vn: '★ Đoạn văn chủ yếu nói về cách … đúng đắn: A phê bình con · B giáo dục con · C chăm sóc con · D giúp đỡ con.' }
            ] },
            { range: [82, 83], zh: '医生对一个很胖的人说如果他每天跑8公里，跑300天，差不多就能减34公斤。300天后，医生接到那个人的电话，说他已经减了34公斤，但他因此也有了个难题，“什么难题？”医生问。那人说：“我现在已经离家2400公里了。”', questions: [
              { n: 82, star: '那个人每天跑步是因为：', options: [{ zh: '太胖了' }, { zh: '想赢比赛' }, { zh: '想赚更多的钱' }, { zh: '想引起别人注意' }], answer: 'A', vn: 'Bác sĩ nói với một người rất béo rằng nếu mỗi ngày anh ta chạy 8 km, chạy 300 ngày thì sẽ giảm được khoảng 34 kg. 300 ngày sau, bác sĩ nhận được điện thoại của người đó, nói anh ta đã giảm được 34 kg, nhưng cũng vì thế mà gặp một chuyện khó xử. "Chuyện gì vậy?" bác sĩ hỏi. Người đó đáp: "Bây giờ tôi đã cách nhà 2400 km rồi." ★ Người đó chạy bộ mỗi ngày là vì: A quá béo · B muốn thắng cuộc thi · C muốn kiếm nhiều tiền hơn · D muốn gây chú ý.' },
              { n: 83, star: '300天后，那个人的难题是什么？', options: [{ zh: '没成功' }, { zh: '太瘦了' }, { zh: '离家太远' }, { zh: '不适应家里的生活' }], answer: 'C', vn: '★ 300 ngày sau, chuyện khó xử của người đó là gì? A không thành công · B gầy quá · C cách nhà quá xa · D không quen cuộc sống ở nhà.' }
            ] },
            { range: [84, 85], zh: '科学研究证明，颜色会影响人的心情，不同的颜色会给人带来不同的感情变化。红色会让人变得热情，使人兴奋；黄色和白色让人觉得心情愉快，给人带来快乐；黑色却容易让人感到伤心难过；人们在看到蓝色时会觉得很舒服，会变得安静下来；绿色会让我们的眼睛得到休息，对我们的身体也有好处。', questions: [
              { n: 84, star: '根据这段话，哪种颜色会让人觉得难受？', options: [{ zh: '白色' }, { zh: '黑色' }, { zh: '黄色' }, { zh: '蓝色' }], answer: 'B', vn: 'Nghiên cứu khoa học chứng minh màu sắc ảnh hưởng đến tâm trạng con người, các màu khác nhau mang lại những thay đổi cảm xúc khác nhau. Màu đỏ khiến người ta nhiệt tình, hưng phấn; màu vàng và màu trắng khiến người ta thấy vui vẻ, mang lại niềm vui; màu đen lại dễ khiến người ta buồn bã; khi nhìn màu xanh lam, người ta thấy dễ chịu và trở nên bình tĩnh; màu xanh lá giúp mắt được nghỉ ngơi, cũng tốt cho cơ thể. ★ Theo đoạn văn, màu nào khiến người ta thấy khó chịu? A trắng · B đen · C vàng · D xanh lam.' },
              { n: 85, star: '这段话主要谈颜色：', options: [{ zh: '的区别' }, { zh: '的故事' }, { zh: '对眼睛的好处' }, { zh: '与心情的关系' }], answer: 'D', vn: '★ Đoạn văn chủ yếu nói về … của màu sắc: A sự khác biệt · B câu chuyện · C lợi ích đối với mắt · D mối quan hệ với tâm trạng.' }
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
            { n: 86, words: ['爷爷', '非常', '感兴趣', '对', '京剧'], answer: '爷爷对京剧非常感兴趣。', vn: 'Ông nội rất thích Kinh kịch. — 对 + đối tượng + 感兴趣: có hứng thú với….' },
            { n: 87, words: ['请', '那张表格', '把', '两份', '打印'], answer: '请把那张表格打印两份。', vn: 'Làm ơn in tờ biểu mẫu đó ra hai bản. — Câu 把: 把 + tân ngữ + động từ + số lượng.' },
            { n: 88, words: ['很详细', '这个传真机的', '写', '得', '说明书'], answer: '这个传真机的说明书写得很详细。', vn: 'Sách hướng dẫn của chiếc máy fax này viết rất chi tiết. — Bổ ngữ trạng thái: 写得 + 很详细.' },
            { n: 89, words: ['2009年7月8号', '我孙子', '是', '出生的'], answer: '我孙子是2009年7月8号出生的。', vn: 'Cháu trai tôi sinh ngày 8 tháng 7 năm 2009. — 是…的 nhấn mạnh thời gian.' },
            { n: 90, words: ['亿元', '许多家饭店的', '都超过了', '年收入'], answer: '许多家饭店的年收入都超过了亿元。', vn: 'Doanh thu hằng năm của nhiều nhà hàng đều đã vượt quá một trăm triệu tệ. — 亿元: trăm triệu tệ.' },
            { n: 91, words: ['保证', '我', '完成', '按时', '任务'], answer: '我保证按时完成任务。', vn: 'Tôi cam đoan sẽ hoàn thành nhiệm vụ đúng hạn. — 保证 + cả cụm động từ phía sau.' },
            { n: 92, words: ['这个', '没有', '语法错误', '句子'], answer: '这个句子没有语法错误。', vn: 'Câu này không có lỗi ngữ pháp.' },
            { n: 93, words: ['马上', '结束了', '就要', '这场足球赛'], answer: '这场足球赛马上就要结束了。', accept: ['马上这场足球赛就要结束了。'], vn: 'Trận bóng đá này sắp kết thúc rồi. — 马上就要…了: sắp… rồi. (Đáp án cũng chấp nhận: 马上这场足球赛就要结束了。)' },
            { n: 94, words: ['不知道', '难道你', '连这个规定', '都'], answer: '难道你连这个规定都不知道？', vn: 'Chẳng lẽ đến quy định này mà bạn cũng không biết? — 难道…？; 连…都….' },
            { n: 95, words: ['顺利', '祝', '你们', '这次访问', '一切'], answer: '祝你们这次访问一切顺利。', vn: 'Chúc các bạn chuyến thăm lần này mọi việc thuận lợi. — 祝 + người + lời chúc.' }
          ]
        },
        {
          name: 'Phần 2', range: [96, 100], type: 'pic-write', intro: 'Nhìn tranh, dùng từ cho sẵn viết một câu.', example: 'Ví dụ: (乒乓球) 她很喜欢打乒乓球。',
          questions: [
            { n: 96, img: 'w96.jpg', word: '收拾', answer: '她每天都要收拾房间。', accept: ['她正在收拾房间。', '她把房间收拾得很干净。'], vn: 'Ngày nào cô ấy cũng phải dọn dẹp phòng.' },
            { n: 97, img: 'w97.jpg', word: '理发', answer: '他喜欢去那儿理发。', accept: ['理发师正在给他理发。', '他正在理发店理发。'], vn: 'Anh ấy thích đến đó cắt tóc.' },
            { n: 98, img: 'w98.jpg', word: '困', answer: '困了就休息一下吧。', accept: ['她太困了，一直在打哈欠。', '昨天睡得太晚，今天我很困。'], vn: 'Buồn ngủ thì nghỉ một lát đi.' },
            { n: 99, img: 'w99.jpg', word: '激动', answer: '这个消息让他非常激动。', accept: ['听到这个好消息，他激动极了。', '他激动地给朋友打电话。'], vn: 'Tin này khiến anh ấy vô cùng xúc động.' },
            { n: 100, img: 'w100.jpg', word: '讨论', answer: '他们正在讨论那个计划。', accept: ['他们在认真地讨论工作。', '两位工程师正在讨论图纸。'], vn: 'Họ đang thảo luận kế hoạch đó.' }
          ]
        }
      ]
    }
  ]
};
