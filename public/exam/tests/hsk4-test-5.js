// Đề thi thử HSK 4 – Đề số 5 (đề mẫu H41005 của Hanban).
// Cấu trúc: Nghe 45 câu (~30 phút), Đọc 40 câu, Viết 15 câu; tổng 100 câu, 105 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (theo tỉ lệ câu đúng), tổng 300, đạt từ 180.
// audio: [giây bắt đầu, giây kết thúc] từng câu trong file nghe (mỗi câu đọc 1 lần), dò bằng khoảng lặng (S\h4de\moc-hsk4.js).
// Sinh bằng S\h4de\gan-de-hsk4.js 5 — sửa dữ liệu ở de-5.json / vn-5.js rồi chạy lại.
window.EXAM_DATA = {
  id: 'hsk4-test-5',
  level: 'HSK 4',
  title: 'HSK 4 - Test 5',
  code: 'H41005',
  durationSec: 105 * 60,
  maxScore: 300,
  passScore: 180,
  img: '/exam/img/hsk4-test-5/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones', audio: '/audio/exam/hsk4-test-5.mp3', note: 'Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu chỉ đọc 1 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-text', intro: 'Nghe đoạn ngắn, phán đoán câu ★ đúng hay sai.',
          questions: [
            { n: 1, star: '很多学生希望出国留学。', starVn: 'Nhiều sinh viên mong được đi du học.', answer: true, audio: [127.4, 157.2], script: '在接受调查的学生中，有超过百分之八十的人希望自己能有机会出国留学，但只有大约百分之二十的人已经开始申请国外学校。', scriptVn: 'Trong số sinh viên được khảo sát, hơn 80% mong mình có cơ hội đi du học, nhưng chỉ khoảng 20% đã bắt đầu nộp đơn vào trường nước ngoài.' },
            { n: 2, star: '他想参加网球比赛。', starVn: 'Anh ấy muốn tham gia thi đấu quần vợt.', answer: false, audio: [166.2, 187.3], script: '你别跟我开玩笑了，我从来没学过游泳，怎么去比赛啊？你去问问小王吧，他每个周末都去游泳。', scriptVn: 'Cậu đừng đùa tớ nữa, tớ chưa từng học bơi bao giờ, thi thế nào được? Cậu đi hỏi Tiểu Vương xem, cuối tuần nào cậu ấy cũng đi bơi. (Nói về thi bơi, không phải quần vợt.)' },
            { n: 3, star: '年轻人应该相信自己。', starVn: 'Người trẻ nên tin vào bản thân.', answer: true, audio: [196.4, 222.5], script: '年轻就是健康，年轻就是美丽。不要太担心胖瘦，也不要太关心自己长得是不是漂亮，是不是帅，年轻人最重要的是要对自己有信心。', scriptVn: 'Tuổi trẻ là sức khỏe, tuổi trẻ là vẻ đẹp. Đừng quá lo béo hay gầy, cũng đừng quá bận tâm mình có xinh, có đẹp trai hay không; điều quan trọng nhất với người trẻ là phải tự tin vào bản thân.' },
            { n: 4, star: '他们要坐地铁。', starVn: 'Họ sẽ đi tàu điện ngầm.', answer: false, audio: [231.4, 251.7], script: '姐，咱们弄错方向了，去西边的公共汽车应该在对面坐。正好前边有个天桥，我们从那儿过马路吧。', scriptVn: 'Chị ơi, mình đi nhầm hướng rồi, xe buýt đi về phía tây phải bắt ở bên kia đường. Vừa hay phía trước có cầu vượt, mình qua đường ở đó đi. (Họ đi xe buýt, không phải tàu điện ngầm.)' },
            { n: 5, star: '阳光的作用很大。', starVn: 'Ánh nắng có tác dụng rất lớn.', answer: true, audio: [260.7, 282.7], script: '我喜欢阳光，因为阳光给了万物生命。因为有了阳光，花园里的小草更绿了；因为有了阳光，天空下的海洋更蓝了。', scriptVn: 'Tôi thích ánh nắng, vì ánh nắng đem lại sự sống cho vạn vật. Nhờ có ánh nắng, cỏ trong vườn xanh hơn; nhờ có ánh nắng, biển dưới bầu trời xanh hơn.' },
            { n: 6, star: '第一印象不容易忘记。', starVn: 'Ấn tượng đầu tiên không dễ quên.', answer: true, audio: [291.8, 310.1], script: '第一印象是指在第一次见面时给别人留下的印象，第一印象往往是最深的，而且很难改变。', scriptVn: 'Ấn tượng đầu tiên là ấn tượng ta để lại cho người khác trong lần gặp đầu tiên; ấn tượng đầu tiên thường là sâu sắc nhất, hơn nữa rất khó thay đổi.' },
            { n: 7, star: '没能力的人没有责任心。', starVn: 'Người không có năng lực thì không có tinh thần trách nhiệm.', answer: false, audio: [319.1, 339.7], script: '有能力的人可以把复杂的事情变简单，而没能力的人却经常把简单的事情变复杂。这就是这两种人的区别。', scriptVn: 'Người có năng lực có thể biến việc phức tạp thành đơn giản, còn người không có năng lực lại thường biến việc đơn giản thành phức tạp. Đó chính là sự khác biệt giữa hai kiểu người này. (Không nói gì đến tinh thần trách nhiệm.)' },
            { n: 8, star: '好书越来越少。', starVn: 'Sách hay ngày càng ít.', answer: false, audio: [348.8, 372.7], script: '我从小就非常喜欢读书。长大后，发现身边的图书越来越多，而时间是有限的，所以，不仅要会读书，还要会选择其中的好书来阅读。', scriptVn: 'Từ nhỏ tôi đã rất thích đọc sách. Lớn lên, tôi thấy sách quanh mình ngày càng nhiều, mà thời gian thì có hạn, vì vậy không chỉ phải biết đọc sách mà còn phải biết chọn sách hay trong số đó để đọc. (Sách ngày càng nhiều, không phải sách hay ngày càng ít.)' },
            { n: 9, star: '很多人仍然爱看报纸。', starVn: 'Nhiều người vẫn thích đọc báo giấy.', answer: false, audio: [381.7, 401.1], script: '越来越多的人选择上网看新闻，因为这样很方便，网站的报道更及时，内容也更详细、丰富。', scriptVn: 'Ngày càng nhiều người chọn lên mạng đọc tin tức, vì như vậy rất tiện, tin trên các trang web kịp thời hơn, nội dung cũng chi tiết, phong phú hơn.' },
            { n: 10, star: '她不愿意用宾馆的毛巾。', starVn: 'Cô ấy không muốn dùng khăn của khách sạn.', answer: true, audio: [410, 433.5], script: '虽然还有一部分宾馆会向客人提供免费的毛巾、牙膏和牙刷，但是每次出差，她都会自己带这些东西，很少用宾馆里的。', scriptVn: 'Tuy vẫn còn một số khách sạn cung cấp miễn phí khăn mặt, kem đánh răng và bàn chải cho khách, nhưng mỗi lần đi công tác cô ấy đều tự mang những thứ này, rất ít khi dùng đồ của khách sạn.' }
          ]
        },
        {
          name: 'Phần 2', range: [11, 25], type: 'mc', intro: 'Nghe hội thoại ngắn, chọn đáp án đúng.',
          questions: [
            { n: 11, options: [{ zh: '医生' }, { zh: '护士' }, { zh: '老师' }, { zh: '售货员' }], answer: 'C', audio: [480.1, 502.8], script: '男：你钢琴弹得真好。\n女：我以前是钢琴老师，专门教儿童弹钢琴。\n问：女的原来的职业是什么？', scriptVn: 'Nam: Chị chơi piano hay thật. / Nữ: Trước đây tôi là giáo viên piano, chuyên dạy trẻ em chơi đàn. / Hỏi: Nghề trước đây của người nữ là gì? (A bác sĩ · B y tá · C giáo viên · D nhân viên bán hàng)' },
            { n: 12, options: [{ zh: '聪明' }, { zh: '勇敢' }, { zh: '活泼可爱' }, { zh: '个子矮的' }], answer: 'C', audio: [518.5, 538.1], script: '女：小李，我给你介绍个女朋友吧，说说你有什么条件。\n男：我，我喜欢活泼可爱的女孩子。\n问：男的觉得哪种女孩子比较好？', scriptVn: 'Nữ: Tiểu Lý, để chị giới thiệu bạn gái cho em nhé, nói xem em có yêu cầu gì. / Nam: Em… em thích cô gái hoạt bát, đáng yêu. / Hỏi: Người nam thấy kiểu cô gái nào tốt hơn? (A thông minh · B dũng cảm · C hoạt bát đáng yêu · D dáng thấp)' },
            { n: 13, options: [{ zh: '早上7：40' }, { zh: '上午8点半' }, { zh: '14：20' }, { zh: '19：35' }], answer: 'A', audio: [553.9, 575.4], script: '男：王教授，您明天早上几点到？我去火车站接您。\n女：辛苦你了，我明天早上七点四十到北京。\n问：女的明天几点到北京？', scriptVn: 'Nam: Thưa giáo sư Vương, sáng mai mấy giờ thầy đến ạ? Em ra ga tàu đón thầy. / Nữ: Vất vả cho em rồi, sáng mai bảy giờ bốn mươi tôi đến Bắc Kinh. / Hỏi: Ngày mai mấy giờ người nữ đến Bắc Kinh? (A 7:40 sáng · B 8 giờ rưỡi sáng · C 14:20 · D 19:35)' },
            { n: 14, options: [{ zh: '喝酒了' }, { zh: '发烧了' }, { zh: '不敢开车' }, { zh: '车开得不好' }], answer: 'D', audio: [590.9, 609.1], script: '女：刚才太危险了，那辆车怎么回事？\n男：不知道，突然加速，估计是新手，刚学会开车。\n问：那辆车的司机怎么了？', scriptVn: 'Nữ: Vừa rồi nguy hiểm quá, chiếc xe kia bị sao thế? / Nam: Không biết, tự nhiên tăng tốc, chắc là tay mơ, vừa mới biết lái. / Hỏi: Tài xế chiếc xe đó làm sao? (A uống rượu · B bị sốt · C không dám lái · D lái xe không giỏi)' },
            { n: 15, options: [{ zh: '父亲' }, { zh: '母亲' }, { zh: '丈夫' }, { zh: '孩子' }], answer: 'B', audio: [624.7, 643.3], script: '男：今天是母亲节，记得给妈妈打个电话。\n女：谢谢您的提醒，差点儿忘记了，我现在就打。\n问：女的准备给谁打电话？', scriptVn: 'Nam: Hôm nay là Ngày của Mẹ, nhớ gọi điện cho mẹ nhé. / Nữ: Cảm ơn anh đã nhắc, suýt nữa thì quên, em gọi ngay đây. / Hỏi: Người nữ định gọi điện cho ai? (A bố · B mẹ · C chồng · D con)' },
            { n: 16, options: [{ zh: '很不满意' }, { zh: '在办签证' }, { zh: '在收传真' }, { zh: '材料改完了' }], answer: 'D', audio: [658.9, 679.8], script: '女：校长，这份材料我已经按照您的要求改好了。\n男：谢谢你，先放我办公桌上吧，你再帮我发一份传真。\n问：关于女的，可以知道什么？', scriptVn: 'Nữ: Thưa hiệu trưởng, tài liệu này tôi đã sửa xong theo yêu cầu của thầy. / Nam: Cảm ơn cô, cứ để lên bàn làm việc của tôi, cô gửi giúp tôi một bản fax nữa nhé. / Hỏi: Về người nữ, có thể biết điều gì? (A rất không hài lòng · B đang làm visa · C đang nhận fax · D tài liệu đã sửa xong)' },
            { n: 17, options: [{ zh: '要请客' }, { zh: '要加班' }, { zh: '有约会' }, { zh: '要收拾行李' }], answer: 'B', audio: [695.4, 715], script: '男：真抱歉，明天我得加班，不能陪你去购物了。\n女：既然这样，只好安排在下周了，没关系。\n问：男的为什么不去购物了？', scriptVn: 'Nam: Thật xin lỗi, mai anh phải tăng ca, không đi mua sắm cùng em được. / Nữ: Đã vậy thì đành để tuần sau, không sao đâu. / Hỏi: Vì sao người nam không đi mua sắm nữa? (A phải mời khách · B phải tăng ca · C có hẹn · D phải thu dọn hành lý)' },
            { n: 18, options: [{ zh: '信没寄出' }, { zh: '弟弟还没醒' }, { zh: '打不开信箱' }, { zh: '没见到阿姨' }], answer: 'C', audio: [730.8, 754.2], script: '女：你叔叔刚打电话来说给你发了个电子邮件，让你查收。\n男：我正在收呢，真奇怪，一直说我的密码有错，没错啊。\n问：男的为什么感到奇怪？', scriptVn: 'Nữ: Chú cậu vừa gọi điện bảo đã gửi cho cậu một email, bảo cậu kiểm tra. / Nam: Tớ đang mở đây, lạ thật, cứ báo mật khẩu của tớ sai, có sai đâu. / Hỏi: Vì sao người nam thấy lạ? (A thư chưa gửi đi · B em trai chưa dậy · C không mở được hộp thư · D không gặp được cô/dì)' },
            { n: 19, options: [{ zh: '流泪了' }, { zh: '吃饱了' }, { zh: '觉得太辣' }, { zh: '认为可惜' }], answer: 'C', audio: [769.9, 787.9], script: '男：这个酸菜鱼如果能再辣点儿就更好了。\n女：再辣点儿？你真行！我眼泪都快要辣出来了。\n问：女的怎么了？', scriptVn: 'Nam: Món cá dưa chua này nếu cay thêm chút nữa thì càng ngon. / Nữ: Cay thêm nữa á? Anh giỏi thật đấy! Em cay đến sắp chảy nước mắt rồi. / Hỏi: Người nữ làm sao? (A khóc rồi · B no rồi · C thấy cay quá · D thấy tiếc)' },
            { n: 20, options: [{ zh: '散散步' }, { zh: '别迟到' }, { zh: '休息一下' }, { zh: '再跑一会儿' }], answer: 'D', audio: [803.7, 821.5], script: '女：我实在跑不动了，你让我休息一会儿吧。\n男：你才跑了十分钟，要坚持，至少再跑十分钟。\n问：男的是什么意思？', scriptVn: 'Nữ: Em thật sự chạy không nổi nữa, cho em nghỉ một lát đi. / Nam: Em mới chạy có mười phút, phải kiên trì, ít nhất chạy thêm mười phút nữa. / Hỏi: Ý người nam là gì? (A đi dạo · B đừng đến muộn · C nghỉ một chút · D chạy thêm một lúc nữa)' },
            { n: 21, options: [{ zh: '他们在理发' }, { zh: '他俩是夫妻' }, { zh: '男的想请假' }, { zh: '男的在报名' }], answer: 'D', audio: [837.2, 856.8], script: '男：小姐，这是我的报名表，是交给您吗？\n女：对。请等一下，请在这儿填一下您的联系电话。\n问：根据对话，可以知道什么？', scriptVn: 'Nam: Chị ơi, đây là phiếu đăng ký của tôi, nộp cho chị phải không? / Nữ: Đúng rồi. Anh đợi chút, anh điền số điện thoại liên lạc vào đây nhé. / Hỏi: Theo đoạn hội thoại, có thể biết điều gì? (A họ đang cắt tóc · B hai người là vợ chồng · C người nam muốn xin nghỉ · D người nam đang đăng ký)' },
            { n: 22, options: [{ zh: '5月' }, { zh: '6月' }, { zh: '11月' }, { zh: '12月' }], answer: 'A', audio: [872.5, 892], script: '女：你们今天讨论得怎么样？有结果吗？\n男：大家都同意把招聘会推迟到五月十二号。\n问：大家希望什么时候举行招聘会？', scriptVn: 'Nữ: Hôm nay các anh thảo luận thế nào? Có kết quả chưa? / Nam: Mọi người đều đồng ý lùi hội chợ tuyển dụng đến ngày 12 tháng 5. / Hỏi: Mọi người muốn tổ chức hội chợ tuyển dụng khi nào? (A tháng 5 · B tháng 6 · C tháng 11 · D tháng 12)' },
            { n: 23, options: [{ zh: '擦桌子' }, { zh: '搬饮料' }, { zh: '修家具' }, { zh: '整理房间' }], answer: 'B', audio: [907.7, 924.3], script: '男：那箱饮料可不轻，还是我来搬吧。\n女：麻烦你了，还得请你帮忙，谢谢你。\n问：男的在帮女的做什么？', scriptVn: 'Nam: Thùng nước ngọt đó không nhẹ đâu, để anh bê cho. / Nữ: Phiền anh quá, lại phải nhờ anh giúp, cảm ơn anh. / Hỏi: Người nam đang giúp người nữ làm gì? (A lau bàn · B bê đồ uống · C sửa đồ đạc · D dọn phòng)' },
            { n: 24, options: [{ zh: '他认识路' }, { zh: '他很准时' }, { zh: '他上网查查' }, { zh: '他们一起去' }], answer: 'C', audio: [939.9, 962.9], script: '女：你知道怎么去世界公园吗？我明天要去那儿附近办点儿事。\n男：我对那儿也不太熟悉，不过网上有地图，我帮你查查。\n问：男的是什么意思？', scriptVn: 'Nữ: Anh có biết đi công viên Thế Giới thế nào không? Mai tôi phải qua gần đó làm chút việc. / Nam: Tôi cũng không rành chỗ đó lắm, nhưng trên mạng có bản đồ, để tôi tra giúp chị. / Hỏi: Ý người nam là gì? (A anh ấy biết đường · B anh ấy rất đúng giờ · C anh ấy lên mạng tra thử · D họ đi cùng nhau)' },
            { n: 25, options: [{ zh: '嘴' }, { zh: '牙' }, { zh: '头' }, { zh: '耳朵' }], answer: 'B', audio: [978.4, 997.4], script: '男：大夫，我的牙最近疼得厉害，不知道是怎么回事。\n女：你先躺这儿，好，张开嘴我看看。\n问：男的哪里不舒服？', scriptVn: 'Nam: Thưa bác sĩ, dạo này răng tôi đau dữ quá, không biết bị làm sao. / Nữ: Anh nằm xuống đây trước, được rồi, há miệng ra tôi xem. / Hỏi: Người nam khó chịu ở đâu? (A miệng · B răng · C đầu · D tai)' }
          ]
        },
        {
          name: 'Phần 3', range: [26, 35], type: 'mc', intro: 'Nghe hội thoại dài, chọn đáp án đúng.',
          questions: [
            { n: 26, options: [{ zh: '道歉' }, { zh: '写总结' }, { zh: '翻译文章' }, { zh: '感谢女的' }], answer: 'B', audio: [1063.1, 1090.8], script: '女：今天怎么这么安静呀？\n男：刚刚经理让我写篇总结，我正考虑怎么写呢。\n女：总结？哪方面的？\n男：快到年底了，市场方面的。\n问：经理让男的做什么？', scriptVn: 'Nữ: Hôm nay sao yên tĩnh thế? / Nam: Giám đốc vừa bảo anh viết một bản tổng kết, anh đang nghĩ xem viết thế nào. / Nữ: Tổng kết à? Về mảng nào? / Nam: Sắp cuối năm rồi, mảng thị trường. / Hỏi: Giám đốc bảo người nam làm gì? (A xin lỗi · B viết tổng kết · C dịch bài · D cảm ơn người nữ)' },
            { n: 27, options: [{ zh: '白' }, { zh: '黑' }, { zh: '黄' }, { zh: '红' }], answer: 'D', audio: [1105.7, 1131.2], script: '男：奶奶，我去打羽毛球了，再见。\n女：等一下，你把那个塑料袋拿下去扔垃圾桶里。\n男：是那个红色的吗？\n女：对，就是洗衣机旁边那个。\n问：那个塑料袋是什么颜色的？', scriptVn: 'Nam: Bà ơi, cháu đi đánh cầu lông đây, cháu chào bà. / Nữ: Đợi đã, cháu cầm cái túi ni-lông kia xuống vứt vào thùng rác nhé. / Nam: Cái màu đỏ ạ? / Nữ: Ừ, chính là cái cạnh máy giặt ấy. / Hỏi: Cái túi ni-lông đó màu gì? (A trắng · B đen · C vàng · D đỏ)' },
            { n: 28, options: [{ zh: '学中文' }, { zh: '别有压力' }, { zh: '别打扰孩子' }, { zh: '让孩子决定' }], answer: 'D', audio: [1146.1, 1171.6], script: '女：刘师傅，您孩子要上大学了吧？\n男：我正想找你呢，你说让他报个什么专业好呢？国际关系？\n女：这主要还得看孩子自己的意见。\n男：也对，那我回去再和他商量商量。\n问：女的是什么看法？', scriptVn: 'Nữ: Bác Lưu, con bác sắp vào đại học rồi nhỉ? / Nam: Tôi đang định tìm cô đây, cô bảo cho nó đăng ký ngành gì thì tốt? Quan hệ quốc tế nhé? / Nữ: Cái này chủ yếu vẫn phải xem ý kiến của cháu. / Nam: Cũng đúng, vậy tôi về bàn thêm với nó. / Hỏi: Người nữ có quan điểm gì? (A học tiếng Trung · B đừng áp lực · C đừng làm phiền con · D để con tự quyết định)' },
            { n: 29, options: [{ zh: '考试场地' }, { zh: '周围环境' }, { zh: '银行地址' }, { zh: '参观人数' }], answer: 'A', audio: [1186.4, 1212.2], script: '男：明天的考试有多少人参加？\n女：大约三百人。\n男：这儿的座位恐怕不够吧？要不要考虑换到旁边的那个教室？\n女：不用。这个大教室实际上能坐四百人。\n问：他们在谈什么？', scriptVn: 'Nam: Kỳ thi ngày mai có bao nhiêu người tham gia? / Nữ: Khoảng ba trăm người. / Nam: Ở đây e là không đủ chỗ ngồi nhỉ? Có nên tính đổi sang phòng học bên cạnh không? / Nữ: Không cần. Phòng học lớn này thực ra ngồi được bốn trăm người. / Hỏi: Họ đang nói về chuyện gì? (A địa điểm thi · B môi trường xung quanh · C địa chỉ ngân hàng · D số người tham quan)' },
            { n: 30, options: [{ zh: '超市' }, { zh: '商店' }, { zh: '饭馆儿' }, { zh: '大使馆' }], answer: 'C', audio: [1227.1, 1249.1], script: '女：好了吗？你今天吃得不多。\n男：本来我也不饿。出门前我吃了块儿巧克力蛋糕。\n女：好吧，剩下的我们带走？\n男：当然，不能浪费。\n问：他们最可能在哪儿？', scriptVn: 'Nữ: Xong chưa? Hôm nay anh ăn ít thế. / Nam: Vốn dĩ anh cũng không đói. Trước khi ra ngoài anh ăn một miếng bánh sô-cô-la rồi. / Nữ: Thôi được, phần còn lại mình mang về nhé? / Nam: Tất nhiên, không được lãng phí. / Hỏi: Họ có khả năng đang ở đâu nhất? (A siêu thị · B cửa hàng · C quán ăn · D đại sứ quán)' },
            { n: 31, options: [{ zh: '不难' }, { zh: '很轻松' }, { zh: '时间短' }, { zh: '不太正式' }], answer: 'A', audio: [1264.1, 1290.8], script: '男：下午的面试怎么样？顺利吗？\n女：还行，他们问的问题都挺容易的。就是当时有点儿紧张。\n男：什么时候可以知道结果？\n女：明天或者后天吧，他们会打电话通知。\n问：女的觉得面试怎么样？', scriptVn: 'Nam: Buổi phỏng vấn chiều nay thế nào? Suôn sẻ chứ? / Nữ: Cũng được, câu họ hỏi đều khá dễ. Chỉ là lúc đó hơi hồi hộp. / Nam: Khi nào thì biết kết quả? / Nữ: Mai hoặc ngày kia, họ sẽ gọi điện báo. / Hỏi: Người nữ thấy buổi phỏng vấn thế nào? (A không khó · B rất thoải mái · C thời gian ngắn · D không trang trọng lắm)' },
            { n: 32, options: [{ zh: '很热' }, { zh: '很凉快' }, { zh: '刮大风了' }, { zh: '要下雨了' }], answer: 'B', audio: [1305.9, 1329.2], script: '女：工作半天了，起来活动活动。\n男：好，坐久了确实有些难受。\n女：今天天气不错，外面很凉快，我们去楼下走走？\n男：行，我顺便买本杂志。\n问：今天天气怎么样？', scriptVn: 'Nữ: Làm việc cả buổi rồi, đứng dậy vận động chút đi. / Nam: Ừ, ngồi lâu đúng là hơi khó chịu. / Nữ: Hôm nay thời tiết đẹp, ngoài trời rất mát, mình xuống dưới đi dạo nhé? / Nam: Được, tiện thể anh mua quyển tạp chí. / Hỏi: Hôm nay thời tiết thế nào? (A rất nóng · B rất mát · C có gió to · D sắp mưa)' },
            { n: 33, options: [{ zh: '去跳舞' }, { zh: '去爬山' }, { zh: '当警察' }, { zh: '去他那儿玩儿' }], answer: 'D', audio: [1344.3, 1371.9], script: '男：有空的时候欢迎你来我这儿玩儿。\n女：好的，不过暂时可能去不了，最近事情多。\n男：没问题。你最近忙什么呢？\n女：快放暑假了，学校要组织老师们去东南亚旅游。\n问：男的邀请女的做什么？', scriptVn: 'Nam: Lúc nào rảnh mời em đến chỗ anh chơi nhé. / Nữ: Vâng, nhưng tạm thời chắc em chưa đi được, dạo này nhiều việc. / Nam: Không sao. Dạo này em bận gì thế? / Nữ: Sắp nghỉ hè rồi, trường tổ chức cho giáo viên đi du lịch Đông Nam Á. / Hỏi: Người nam mời người nữ làm gì? (A đi nhảy · B đi leo núi · C làm cảnh sát · D đến chỗ anh ấy chơi)' },
            { n: 34, options: [{ zh: '长城' }, { zh: '洗手间' }, { zh: '停车场' }, { zh: '足球场' }], answer: 'C', audio: [1386.8, 1408.5], script: '女：先生，这里禁止停车。\n男：这里不是停车场吗？\n女：不是，停车场在那边，离这儿不远。\n男：好，我马上开走。谢谢你。\n女：不客气。\n问：男的要去哪儿？', scriptVn: 'Nữ: Thưa anh, ở đây cấm đỗ xe. / Nam: Đây không phải bãi đỗ xe à? / Nữ: Không phải, bãi đỗ xe ở đằng kia, cách đây không xa. / Nam: Được, tôi lái đi ngay. Cảm ơn chị. / Nữ: Không có gì. / Hỏi: Người nam sẽ đi đâu? (A Trường Thành · B nhà vệ sinh · C bãi đỗ xe · D sân bóng đá)' },
            { n: 35, options: [{ zh: '要仔细' }, { zh: '复习重点' }, { zh: '加快速度' }, { zh: '多做练习' }], answer: 'B', audio: [1423.5, 1448.5], script: '男：复习得怎么样了？\n女：材料这么厚，我估计看不完了。\n男：来得及，复习要注意方法，要复习重点内容。\n女：只好这样了，这些语法知识太难了。\n问：男的认为应该怎么复习？', scriptVn: 'Nam: Ôn tập thế nào rồi? / Nữ: Tài liệu dày thế này, em đoán là đọc không hết. / Nam: Kịp mà, ôn tập phải chú ý phương pháp, phải ôn nội dung trọng điểm. / Nữ: Đành vậy thôi, mấy kiến thức ngữ pháp này khó quá. / Hỏi: Người nam cho rằng nên ôn tập thế nào? (A phải cẩn thận · B ôn trọng điểm · C tăng tốc độ · D làm nhiều bài tập)' }
          ]
        },
        {
          name: 'Phần 4', range: [36, 45], type: 'mc', intro: 'Nghe đoạn văn, trả lời 2 câu hỏi.',
          groups: [
            { range: [36, 37], questions: [
              { n: 36, options: [{ zh: '感动' }, { zh: '爱情' }, { zh: '受不了孤单' }, { zh: '两个人很合适' }], answer: 'B', audio: [1463.4, 1496.9], script: '提到结婚，人们会很自然地想起爱情。爱情确实是结婚的重要原因，但仅有爱情是不够的。两个人还应该互相支持，互相信任。只有这样才能很好地生活在一起。\n问：结婚的重要原因是什么？', scriptVn: 'Nhắc đến kết hôn, người ta rất tự nhiên nghĩ đến tình yêu. Tình yêu đúng là lý do quan trọng để kết hôn, nhưng chỉ có tình yêu thôi thì chưa đủ. Hai người còn phải ủng hộ nhau, tin tưởng nhau. Chỉ như vậy mới có thể sống tốt với nhau. / Hỏi 36: Lý do quan trọng để kết hôn là gì? (A cảm động · B tình yêu · C không chịu nổi cô đơn · D hai người rất hợp nhau)' },
              { n: 37, options: [{ zh: '不要害羞' }, { zh: '不要解释' }, { zh: '减少误会' }, { zh: '互相支持、信任' }], answer: 'D', audio: [1512.1, 1519.5], script: '问：两个人怎样才能很好地一起生活？', scriptVn: 'Hỏi 37: Hai người làm thế nào mới sống tốt với nhau được? (A đừng ngại ngùng · B đừng giải thích · C giảm hiểu lầm · D ủng hộ, tin tưởng nhau)' }
            ] },
            { range: [38, 39], questions: [
              { n: 38, options: [{ zh: '钱丢了' }, { zh: '打针了' }, { zh: '爸爸生病了' }, { zh: '被爷爷批评了' }], answer: 'A', audio: [1534.8, 1587.1], script: '有个人看见一个孩子在路边哭，就问他为什么哭。孩子说刚才不小心丢了十块钱。见孩子那么难过，那个人就拿出十块钱送给他。没想到孩子哭得更难过了。那个人很奇怪，就问：“我刚才不是给你十块钱了吗？为什么还哭呢？”孩子回答：“如果没丢那十块钱，我现在已经有二十块了。”\n问：那个孩子为什么哭？', scriptVn: 'Có người thấy một đứa trẻ khóc bên đường liền hỏi vì sao cháu khóc. Đứa trẻ nói vừa rồi không cẩn thận làm mất mười đồng. Thấy đứa trẻ buồn như vậy, người đó lấy ra mười đồng cho nó. Không ngờ đứa trẻ khóc càng thảm hơn. Người đó rất lạ, bèn hỏi: "Chẳng phải chú vừa cho cháu mười đồng rồi sao? Sao còn khóc?" Đứa trẻ đáp: "Nếu không mất mười đồng kia thì bây giờ cháu đã có hai mươi đồng rồi." / Hỏi 38: Đứa trẻ đó vì sao khóc? (A mất tiền · B bị tiêm · C bố bị ốm · D bị ông phê bình)' },
              { n: 39, options: [{ zh: '10块' }, { zh: '20块' }, { zh: '30块' }, { zh: '100块' }], answer: 'A', audio: [1602.2, 1608.6], script: '问：那个孩子现在有多少钱？', scriptVn: 'Hỏi 39: Bây giờ đứa trẻ đó có bao nhiêu tiền? (A 10 đồng · B 20 đồng · C 30 đồng · D 100 đồng)' }
            ] },
            { range: [40, 41], questions: [
              { n: 40, options: [{ zh: '很诚实' }, { zh: '做事马虎' }, { zh: '会讲笑话' }, { zh: '有时觉得无聊' }], answer: 'C', audio: [1623.6, 1664], script: '幽默是一种让人羡慕的能力，有这种能力的人能在任何事情中发现有趣的东西，再无聊的事经过他们的嘴都可能变成笑话，甚至让人笑得肚子疼。一个有幽默感的人不管走到哪里，都会给别人带去愉快的心情，所以总是受到大家的欢迎。\n问：幽默的人怎么样？', scriptVn: 'Hài hước là một năng lực khiến người khác ngưỡng mộ. Người có năng lực này có thể phát hiện điều thú vị trong bất cứ chuyện gì; chuyện nhàm chán đến mấy qua miệng họ cũng có thể thành chuyện cười, thậm chí khiến người ta cười đau cả bụng. Người có óc hài hước dù đi đến đâu cũng đem lại tâm trạng vui vẻ cho người khác, vì thế luôn được mọi người yêu mến. / Hỏi 40: Người hài hước thế nào? (A rất thật thà · B làm việc cẩu thả · C biết kể chuyện cười · D có lúc thấy nhàm chán)' },
              { n: 41, options: [{ zh: '使人快乐' }, { zh: '十分礼貌' }, { zh: '遇事冷静' }, { zh: '能给人安全感' }], answer: 'A', audio: [1679.2, 1684.8], script: '问：幽默的人为什么受欢迎？', scriptVn: 'Hỏi 41: Vì sao người hài hước được yêu mến? (A khiến người khác vui vẻ · B rất lễ phép · C gặp chuyện bình tĩnh · D đem lại cảm giác an toàn)' }
            ] },
            { range: [42, 43], questions: [
              { n: 42, options: [{ zh: '后悔' }, { zh: '得意' }, { zh: '紧张' }, { zh: '激动' }], answer: 'A', audio: [1699.9, 1736.3], script: '许多人都有过后悔的经历，其实，只要我们按照自己的想法去做了，就没什么后悔的，因为我们不可能把所有的事情全部做对。另外，让我们走向成功的，往往是我们从过去做错的事情中得到的经验。\n问：许多人都有过怎样的经历？', scriptVn: 'Nhiều người từng có trải nghiệm hối hận. Thực ra, chỉ cần chúng ta đã làm theo suy nghĩ của mình thì chẳng có gì phải hối hận, vì chúng ta không thể làm đúng tất cả mọi việc. Ngoài ra, thứ giúp ta đi đến thành công thường là kinh nghiệm rút ra từ những việc làm sai trong quá khứ. / Hỏi 42: Nhiều người từng có trải nghiệm thế nào? (A hối hận · B đắc ý · C căng thẳng · D xúc động)' },
              { n: 43, options: [{ zh: '理想' }, { zh: '努力工作' }, { zh: '正确的方法' }, { zh: '失败的经验' }], answer: 'D', audio: [1751.4, 1757.5], script: '问：什么能帮助我们走向成功？', scriptVn: 'Hỏi 43: Điều gì có thể giúp chúng ta đi đến thành công? (A lý tưởng · B làm việc chăm chỉ · C phương pháp đúng · D kinh nghiệm thất bại)' }
            ] },
            { range: [44, 45], questions: [
              { n: 44, options: [{ zh: '导游' }, { zh: '校长' }, { zh: '记者' }, { zh: '服务员' }], answer: 'B', audio: [1772.8, 1808.9], script: '今天，你们终于完成了大学四年的学习任务，马上就要开始新的生活了。我代表学校向同学们表示祝贺！祝你们在今后取得更大的成绩，也希望你们以后有时间多回学校来看看。\n问：说话人最可能是谁？', scriptVn: 'Hôm nay, các em cuối cùng đã hoàn thành bốn năm học đại học, sắp bắt đầu một cuộc sống mới. Tôi thay mặt nhà trường xin chúc mừng các em! Chúc các em sau này đạt thành tích lớn hơn, cũng mong các em sau này có thời gian thì về thăm trường nhiều hơn. / Hỏi 44: Người nói có khả năng là ai nhất? (A hướng dẫn viên · B hiệu trưởng · C phóng viên · D nhân viên phục vụ)' },
              { n: 45, options: [{ zh: '访问' }, { zh: '开学' }, { zh: '毕业' }, { zh: '放寒假' }], answer: 'C', audio: [1824.2, 1830.8], script: '问：这段话最可能是在什么时候说的？', scriptVn: 'Hỏi 45: Đoạn nói này có khả năng được nói vào lúc nào nhất? (A chuyến thăm · B khai giảng · C tốt nghiệp · D nghỉ đông)' }
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
            { range: [46, 50], words: [{ k: 'A', zh: '举办' }, { k: 'B', zh: '可是' }, { k: 'C', zh: '味道' }, { k: 'D', zh: '坚持', used: true }, { k: 'E', zh: '食品' }, { k: 'F', zh: '流行' }], example: 'Ví dụ: 她每天都（ D ）走路上下班，所以身体一直很不错。', questions: [
              { n: 46, zh: '这种裙子最近很（　），我也想去买一条。', vn: 'Loại váy này dạo này rất thịnh hành, tôi cũng muốn đi mua một chiếc. — 流行: thịnh hành, mốt.', answer: 'F' },
              { n: 47, zh: '我本来已经打算放弃了，（　）他的话让我改变了主意。', vn: 'Vốn dĩ tôi đã định bỏ cuộc, nhưng lời anh ấy đã khiến tôi đổi ý. — 本来…可是…: vốn dĩ… nhưng….', answer: 'B' },
              { n: 48, zh: '春节时，最受欢迎的（　）是饺子，尤其是在中国北方。', vn: 'Dịp Tết, món ăn được ưa chuộng nhất là sủi cảo, nhất là ở miền Bắc Trung Quốc. — 食品: thực phẩm, món ăn.', answer: 'E' },
              { n: 49, zh: '有人说，友谊就像酒一样，时间越长，（　）越好。', vn: 'Có người nói tình bạn giống như rượu, thời gian càng lâu, hương vị càng ngon. — 味道: mùi vị.', answer: 'C' },
              { n: 50, zh: '这次演出活动（　）得非常成功，吸引了不少当地的观众。', vn: 'Buổi biểu diễn lần này được tổ chức rất thành công, thu hút không ít khán giả địa phương. — 举办: tổ chức (+得 bổ ngữ).', answer: 'A' }
            ] },
            { range: [51, 55], words: [{ k: 'A', zh: '主动' }, { k: 'B', zh: '重新' }, { k: 'C', zh: '温度', used: true }, { k: 'D', zh: '来不及' }, { k: 'E', zh: '严重' }, { k: 'F', zh: '大概' }], example: 'Ví dụ: A：今天真冷啊，好像白天最高（ C ）才2℃。 B：刚才电视里说明天更冷。', questions: [
              { n: 51, zh: 'A：这个地方真大啊，咱们再去那边逛逛吧。\nB：估计（　）了，集合时间马上就到了。', vn: 'A: Chỗ này rộng thật, chúng mình sang bên kia dạo thêm đi. / B: Chắc không kịp rồi, sắp đến giờ tập trung rồi. — 来不及: không kịp.', answer: 'D' },
              { n: 52, zh: 'A：你们学校的硕士和博士研究生一共有多少人？\nB：准确数字我不太清楚，（　）有三四千吧。', vn: 'A: Trường các anh có tổng cộng bao nhiêu nghiên cứu sinh thạc sĩ và tiến sĩ? / B: Con số chính xác tôi không rõ lắm, khoảng ba bốn nghìn người. — 大概: khoảng, chừng.', answer: 'F' },
              { n: 53, zh: 'A：你来看看，这些表格的顺序不对吧？\nB：对不起，是我粗心。我（　）打印一份给您吧。', vn: 'A: Cậu xem này, thứ tự mấy bảng biểu này sai rồi phải không? / B: Xin lỗi, là tôi cẩu thả. Tôi in lại một bản cho anh nhé. — 重新: làm lại (từ đầu).', answer: 'B' },
              { n: 54, zh: 'A：机会不会自己跑到你面前的，要（　）点儿。\nB：您放心，我会再试一次的，就算被拒绝了，也不后悔。', vn: 'A: Cơ hội sẽ không tự chạy đến trước mặt em đâu, phải chủ động một chút. / B: Thầy yên tâm, em sẽ thử lại lần nữa, dù có bị từ chối cũng không hối hận. — 主动: chủ động.', answer: 'A' },
              { n: 55, zh: 'A：我的感冒更（　）了，我想明天请一天假。\nB：没问题。你最好去医院看一下，吃点儿药也许就好了。', vn: 'A: Cảm của tôi nặng hơn rồi, mai tôi muốn xin nghỉ một ngày. / B: Không vấn đề gì. Tốt nhất anh nên đi bệnh viện khám, uống chút thuốc có lẽ sẽ khỏi. — 严重: nghiêm trọng, nặng.', answer: 'E' }
            ] }
          ]
        },
        {
          name: 'Phần 2', range: [56, 65], type: 'order', intro: 'Sắp xếp ba câu A, B, C thành đoạn văn đúng. Bấm lần lượt các câu; bấm câu đã xếp để bỏ ra.',
          questions: [
            { n: 56, items: [{ k: 'A', zh: '因此养成一个好习惯需要坚持' }, { k: 'B', zh: '习惯不是一天之内养成的' }, { k: 'C', zh: '而改掉一个坏习惯也需要坚持' }], answer: 'BAC', vn: 'Thói quen không phải hình thành trong một ngày, vì vậy hình thành một thói quen tốt cần kiên trì, mà bỏ một thói quen xấu cũng cần kiên trì. — 因此 nối sau câu chủ đề; 而…也… nối ý song song.' },
            { n: 57, items: [{ k: 'A', zh: '没想到竟然得了第一名' }, { k: 'B', zh: '她本来只是抱着试试的态度去参加比赛' }, { k: 'C', zh: '这让她又吃惊又高兴' }], answer: 'BAC', vn: 'Cô ấy vốn chỉ mang tâm lý thử xem sao khi đi thi, không ngờ lại đoạt giải nhất, điều này khiến cô vừa ngạc nhiên vừa vui mừng. — 本来… → 没想到竟然… → 这让….' },
            { n: 58, items: [{ k: 'A', zh: '“地球一小时”活动是从2007年开始的' }, { k: 'B', zh: '它还希望引起人们对气候变暖问题的关注' }, { k: 'C', zh: '除了提醒人们节约用电以外' }], answer: 'ACB', vn: 'Hoạt động "Giờ Trái Đất" bắt đầu từ năm 2007, ngoài việc nhắc mọi người tiết kiệm điện, nó còn mong thu hút sự quan tâm của mọi người đến vấn đề khí hậu ấm lên. — 除了…以外，还….' },
            { n: 59, items: [{ k: 'A', zh: '他们也会感到很幸福' }, { k: 'B', zh: '即使只是陪他们吃吃饭、聊聊天' }, { k: 'C', zh: '有空你应该多回家看看爸妈' }], answer: 'CBA', vn: 'Có thời gian thì bạn nên về nhà thăm bố mẹ nhiều hơn, dù chỉ là ăn bữa cơm, trò chuyện với họ, họ cũng sẽ cảm thấy rất hạnh phúc. — 即使…也…: dù… cũng….' },
            { n: 60, items: [{ k: 'A', zh: '这个公司的工资虽然不算很高' }, { k: 'B', zh: '但是奖金很多' }, { k: 'C', zh: '所以总的来说收入还不错' }], answer: 'ABC', vn: 'Lương ở công ty này tuy không tính là cao, nhưng tiền thưởng rất nhiều, nên nhìn chung thu nhập cũng khá. — 虽然…但是…所以….' },
            { n: 61, items: [{ k: 'A', zh: '后来这成了一个笑话，大家经常拿来开玩笑' }, { k: 'B', zh: '飞机起飞时，我一直抱着前面的椅子不放' }, { k: 'C', zh: '我第一次乘坐飞机的时候心里害怕极了' }], answer: 'CBA', vn: 'Lần đầu tiên tôi đi máy bay, trong lòng sợ vô cùng; lúc máy bay cất cánh, tôi cứ ôm chặt ghế phía trước không buông. Về sau chuyện này thành một câu chuyện cười, mọi người thường lấy ra trêu. — 第一次… → 起飞时… → 后来….' },
            { n: 62, items: [{ k: 'A', zh: '甚至有人说那只是一种感觉，没有标准' }, { k: 'B', zh: '成熟的标准到底是什么' }, { k: 'C', zh: '不同人给出的答案各不相同' }], answer: 'BCA', vn: 'Tiêu chuẩn của sự trưởng thành rốt cuộc là gì? Mỗi người đưa ra một câu trả lời khác nhau, thậm chí có người nói đó chỉ là một cảm giác, không có tiêu chuẩn. — Câu hỏi → các câu trả lời → 甚至 đẩy ý lên.' },
            { n: 63, items: [{ k: 'A', zh: '全长约6300公里，比黄河长800多公里' }, { k: 'B', zh: '长江，是中国第一大河' }, { k: 'C', zh: '它们都是中国的“母亲河”' }], answer: 'BAC', vn: 'Trường Giang là con sông lớn nhất Trung Quốc, dài khoảng 6300 km, dài hơn Hoàng Hà hơn 800 km; cả hai đều là "sông mẹ" của Trung Quốc. — Nêu chủ ngữ 长江 trước, 它们 chỉ cả hai sông.' },
            { n: 64, items: [{ k: 'A', zh: '音乐是他们5个人的共同爱好' }, { k: 'B', zh: '中国很多年轻人都喜欢“五月天”' }, { k: 'C', zh: '它是由5个热情的大男生组成的' }], answer: 'BCA', vn: 'Nhiều bạn trẻ Trung Quốc thích ban nhạc "Ngũ Nguyệt Thiên" (Mayday), ban nhạc gồm 5 chàng trai nhiệt huyết, âm nhạc là sở thích chung của cả 5 người. — 它 chỉ 五月天; 他们5个人 nối với 5个男生.' },
            { n: 65, items: [{ k: 'A', zh: '这台笔记本电脑的价格是2500元' }, { k: 'B', zh: '而且上网速度也很快' }, { k: 'C', zh: '它的特点是很小、很轻' }], answer: 'ACB', vn: 'Chiếc máy tính xách tay này giá 2500 tệ, đặc điểm của nó là rất nhỏ, rất nhẹ, hơn nữa tốc độ lên mạng cũng rất nhanh. — 而且 bổ sung ý sau 它的特点.' }
          ]
        },
        {
          name: 'Phần 3', range: [66, 85], type: 'mc', intro: 'Đọc đoạn văn, chọn đáp án đúng.',
          groups: [
            { range: [66, 66], questions: [
              { n: 66, zh: '首都体育馆今天晚上有活动，等活动结束的时候人肯定很多，你和女儿还是提前一点儿出发吧，我怕会堵车。', star: '提前出发是为了：', options: [{ zh: '参加活动' }, { zh: '观看表演' }, { zh: '错开堵车' }, { zh: '去接儿子' }], answer: 'C', vn: 'Tối nay nhà thi đấu Thủ Đô có sự kiện, lúc sự kiện kết thúc chắc chắn rất đông người, anh với con gái nên xuất phát sớm một chút, em sợ tắc đường. ★ Xuất phát sớm là để: A tham gia sự kiện · B xem biểu diễn · C tránh tắc đường · D đi đón con trai.' }
            ] },
            { range: [67, 67], questions: [
              { n: 67, zh: '在教育孩子时，我们应该少批评、多鼓励。孩子在受到表扬时，往往会对自己更有信心，对学习的兴趣也会更大，成绩当然会提高。', star: '应该怎样教育孩子？', options: [{ zh: '不能批评' }, { zh: '要多鼓励' }, { zh: '重视成绩' }, { zh: '信任孩子' }], answer: 'B', vn: 'Khi dạy con, chúng ta nên phê bình ít, khích lệ nhiều. Khi được khen, trẻ thường tự tin hơn vào bản thân, hứng thú học tập cũng lớn hơn, thành tích tất nhiên sẽ tăng lên. ★ Nên dạy trẻ thế nào? A không được phê bình · B phải khích lệ nhiều · C coi trọng thành tích · D tin tưởng con.' }
            ] },
            { range: [68, 68], questions: [
              { n: 68, zh: '大家都说：便宜没好货，好货不便宜。其实不一定都是这样的。有的时候，质量很好的东西也会很便宜。例如，春天来了，冬天的衣服就会打折，质量很好，也很便宜，花很少的钱就可以买到。', star: '根据这段话，质量很好的东西：', options: [{ zh: '当然很贵' }, { zh: '不会打折' }, { zh: '不受顾客欢迎' }, { zh: '有时候也便宜' }], answer: 'D', vn: 'Mọi người đều nói: của rẻ là của ôi, hàng tốt không rẻ. Thực ra không hẳn lúc nào cũng vậy. Có lúc đồ chất lượng rất tốt cũng rất rẻ. Ví dụ, mùa xuân đến, quần áo mùa đông sẽ giảm giá, chất lượng rất tốt mà cũng rất rẻ, bỏ ít tiền là mua được. ★ Theo đoạn văn, đồ chất lượng tốt: A tất nhiên rất đắt · B không giảm giá · C không được khách hàng ưa chuộng · D có lúc cũng rẻ.' }
            ] },
            { range: [69, 69], questions: [
              { n: 69, zh: '一群性格各不相同的年轻人，几个酸甜苦辣的爱情故事，一段经历了半个世纪的美好回忆。由孙俪等著名演员主演，电视剧《血色浪漫》，星期日晚上8点，欢迎您继续收看。', star: '这段话最可能是：', options: [{ zh: '广告' }, { zh: '京剧' }, { zh: '小说' }, { zh: '日记' }], answer: 'A', vn: 'Một nhóm bạn trẻ tính cách khác nhau, vài câu chuyện tình yêu đủ vị chua ngọt đắng cay, một hồi ức đẹp trải qua nửa thế kỷ. Do các diễn viên nổi tiếng như Tôn Lệ đóng chính, phim truyền hình "Huyết sắc lãng mạn", 8 giờ tối Chủ nhật, mời quý vị tiếp tục đón xem. ★ Đoạn văn này có khả năng nhất là: A quảng cáo · B Kinh kịch · C tiểu thuyết · D nhật ký.' }
            ] },
            { range: [70, 70], questions: [
              { n: 70, zh: '昨天的放弃决定了今天的选择，今天的选择决定了明天的生活。只有懂得放弃和学会选择的人，才能赢得精彩的生活。', star: '这段话告诉我们，学会放弃：', options: [{ zh: '值得原谅' }, { zh: '是个缺点' }, { zh: '能减少竞争' }, { zh: '会有更多选择' }], answer: 'D', vn: 'Sự từ bỏ hôm qua quyết định lựa chọn hôm nay, lựa chọn hôm nay quyết định cuộc sống ngày mai. Chỉ những người hiểu cách từ bỏ và biết lựa chọn mới giành được một cuộc sống tươi đẹp. ★ Đoạn văn cho biết, biết từ bỏ thì: A đáng được tha thứ · B là một khuyết điểm · C giảm được cạnh tranh · D sẽ có nhiều lựa chọn hơn.' }
            ] },
            { range: [71, 71], questions: [
              { n: 71, zh: '小刘，这方面的问题我也不太懂，不过我有一个亲戚是律师，我给你他的电话号码，有什么问题，你可以直接问他。', star: '小刘想了解哪方面的情况？', options: [{ zh: '艺术' }, { zh: '汉语' }, { zh: '法律' }, { zh: '语言' }], answer: 'C', vn: 'Tiểu Lưu à, vấn đề mảng này tôi cũng không rành lắm, nhưng tôi có một người họ hàng là luật sư, tôi cho cậu số điện thoại của anh ấy, có gì cậu cứ hỏi thẳng anh ấy. ★ Tiểu Lưu muốn tìm hiểu về mảng nào? A nghệ thuật · B tiếng Trung · C pháp luật · D ngôn ngữ.' }
            ] },
            { range: [72, 72], questions: [
              { n: 72, zh: '森林里有一种植物，它开的花比普通的花大很多，并且特别香。这种植物会用它的香味吸引来一些小动物，然后把它们吃掉。', star: '这种植物：', options: [{ zh: '花很香' }, { zh: '花很漂亮' }, { zh: '夏天才开' }, { zh: '没有叶子' }], answer: 'A', vn: 'Trong rừng có một loài thực vật, hoa của nó to hơn hoa bình thường rất nhiều và đặc biệt thơm. Loài cây này dùng hương thơm dụ một số con vật nhỏ đến rồi ăn chúng. ★ Loài thực vật này: A hoa rất thơm · B hoa rất đẹp · C mùa hè mới nở · D không có lá.' }
            ] },
            { range: [73, 73], questions: [
              { n: 73, zh: '你有一个苹果，我有一个香蕉，把我的给你，把你的给我，每个人仍仅有一个水果；你有一个想法，我有一个想法，把我的告诉你，把你的告诉我，每个人就有了两个想法。', star: '这段话的主要意思是：', options: [{ zh: '要关心别人' }, { zh: '要多吃水果' }, { zh: '交流很重要' }, { zh: '做事情要耐心' }], answer: 'C', vn: 'Bạn có một quả táo, tôi có một quả chuối, tôi đưa của tôi cho bạn, bạn đưa của bạn cho tôi, mỗi người vẫn chỉ có một quả; bạn có một ý tưởng, tôi có một ý tưởng, tôi nói của tôi cho bạn, bạn nói của bạn cho tôi, mỗi người sẽ có hai ý tưởng. ★ Ý chính của đoạn văn là: A phải quan tâm người khác · B phải ăn nhiều hoa quả · C giao lưu rất quan trọng · D làm việc phải kiên nhẫn.' }
            ] },
            { range: [74, 74], questions: [
              { n: 74, zh: '他这些年做生意赚了不少钱，还拿出很大一部分去帮助那些经济有困难的人，所以获得了大家的尊重。', star: '他为什么获得了尊重？', options: [{ zh: '年龄大' }, { zh: '脾气好' }, { zh: '他是富人' }, { zh: '帮助穷人' }], answer: 'D', vn: 'Mấy năm nay anh ấy làm ăn kiếm được không ít tiền, còn bỏ ra một phần rất lớn để giúp những người khó khăn về kinh tế, vì vậy được mọi người kính trọng. ★ Vì sao anh ấy được kính trọng? A tuổi cao · B tính tình tốt · C anh ấy là người giàu · D giúp người nghèo.' }
            ] },
            { range: [75, 75], questions: [
              { n: 75, zh: '当我们与别人见面握手时，注意要按顺序一个一个来。如果你与一个人握手的时候，用另外一只手去和其他人握手，那是极其不礼貌的。', star: '握手时要注意：', options: [{ zh: '力气要大' }, { zh: '动作要慢' }, { zh: '按顺序来' }, { zh: '不要戴帽子' }], answer: 'C', vn: 'Khi gặp và bắt tay người khác, cần chú ý bắt tay lần lượt từng người. Nếu đang bắt tay một người mà lại dùng tay kia bắt tay người khác thì cực kỳ bất lịch sự. ★ Khi bắt tay cần chú ý: A phải dùng lực mạnh · B động tác phải chậm · C làm theo thứ tự · D không được đội mũ.' }
            ] },
            { range: [76, 76], questions: [
              { n: 76, zh: '社会的发展不能光看经济的增长，还要重视环境的保护。环境如果被污染了，经济的增长也无法为我们带来美好的生活。', star: '这段话主要谈经济增长和什么的关系？', options: [{ zh: '历史文化' }, { zh: '技术水平' }, { zh: '环境保护' }, { zh: '农村管理' }], answer: 'C', vn: 'Sự phát triển của xã hội không thể chỉ nhìn vào tăng trưởng kinh tế, mà còn phải coi trọng bảo vệ môi trường. Nếu môi trường bị ô nhiễm, tăng trưởng kinh tế cũng không thể mang lại cho chúng ta cuộc sống tốt đẹp. ★ Đoạn văn chủ yếu bàn về quan hệ giữa tăng trưởng kinh tế và điều gì? A lịch sử văn hóa · B trình độ kỹ thuật · C bảo vệ môi trường · D quản lý nông thôn.' }
            ] },
            { range: [77, 77], questions: [
              { n: 77, zh: '这个省的大部分地方都是山，高度一般在4000米以上。因为太高，空气比别的地方少，刚到这里的人会感觉身体不舒服，但过一段时间之后，就会逐渐适应。', star: '刚到这里的人为什么感觉不舒服？', options: [{ zh: '空气少' }, { zh: '阴天多' }, { zh: '气温低' }, { zh: '天气干燥' }], answer: 'A', vn: 'Phần lớn tỉnh này là núi, độ cao thường trên 4000 mét. Vì quá cao nên không khí ít hơn nơi khác, người mới đến sẽ thấy khó chịu trong người, nhưng sau một thời gian sẽ dần dần thích nghi. ★ Vì sao người mới đến thấy khó chịu? A không khí ít · B nhiều ngày âm u · C nhiệt độ thấp · D thời tiết hanh khô.' }
            ] },
            { range: [78, 78], questions: [
              { n: 78, zh: '新闻报道中使用数字的目的是，通过它们来说明问题。所以这些数字必须是准确的，只有这样，才能证明报道的“真”，才是对读者负责。', star: '新闻报道中的数字：', options: [{ zh: '不易理解' }, { zh: '使用随便' }, { zh: '让人失望' }, { zh: '不能出错' }], answer: 'D', vn: 'Mục đích dùng con số trong bản tin là để thông qua chúng làm rõ vấn đề. Vì vậy những con số này phải chính xác, chỉ như vậy mới chứng minh được tính "chân thực" của bản tin, mới là có trách nhiệm với độc giả. ★ Con số trong bản tin: A khó hiểu · B dùng tùy tiện · C khiến người ta thất vọng · D không được sai.' }
            ] },
            { range: [79, 79], questions: [
              { n: 79, zh: '“熟悉的地方没有风景”是说对自己越熟悉的东西，往往越没有新鲜感，也就很难发现它的美丽之处。所以生活中不缺少美，缺少发现美的眼睛。', star: '对熟悉的东西，我们往往：', options: [{ zh: '很有感情' }, { zh: '无法判断' }, { zh: '会有些怀疑' }, { zh: '缺少新鲜感' }], answer: 'D', vn: '"Nơi quen thuộc không có phong cảnh" nghĩa là thứ gì càng quen với mình thì càng ít cảm giác mới mẻ, cũng khó phát hiện ra vẻ đẹp của nó. Vì vậy cuộc sống không thiếu cái đẹp, chỉ thiếu đôi mắt phát hiện cái đẹp. ★ Với những thứ quen thuộc, chúng ta thường: A rất có tình cảm · B không thể phán đoán · C hơi nghi ngờ · D thiếu cảm giác mới mẻ.' }
            ] },
            { range: [80, 81], zh: '说话虽然是生活中最普通的事，却不简单，有许多地方值得注意：着急的事，要慢慢地说；别人的事，要小心地说；伤心的事，不要见人就说；讨厌的事，要对事不对人地说；现在的事，做了再说；以后的事，以后再说；而不能肯定的事、没发生过的事，千万不要乱说。', questions: [
              { n: 80, star: '遇到伤心的事，应该：', options: [{ zh: '和同事说' }, { zh: '别到处说' }, { zh: '多和朋友说' }, { zh: '别让邻居知道' }], answer: 'B', vn: 'Nói chuyện tuy là việc bình thường nhất trong cuộc sống nhưng không hề đơn giản, có nhiều điều đáng chú ý: việc gấp thì nói chậm rãi; việc của người khác thì nói cẩn thận; chuyện buồn thì đừng gặp ai cũng kể; chuyện đáng ghét thì nói về việc chứ đừng nhắm vào người; chuyện hiện tại thì làm rồi hãy nói; chuyện sau này thì để sau này hãy nói; còn chuyện chưa chắc chắn, chuyện chưa xảy ra thì tuyệt đối đừng nói bừa. ★ Gặp chuyện buồn thì nên: A kể với đồng nghiệp · B đừng đi kể khắp nơi · C kể nhiều với bạn bè · D đừng để hàng xóm biết.' },
              { n: 81, star: '将来的事，应该怎么说？', options: [{ zh: '马上说' }, { zh: '将来说' }, { zh: '认真地说' }, { zh: '积极地说' }], answer: 'B', vn: '★ Chuyện tương lai thì nên nói thế nào? A nói ngay · B để tương lai hãy nói · C nói nghiêm túc · D nói tích cực.' }
            ] },
            { range: [82, 83], zh: '如果你想减肥，那么必须做到两点：一是少吃东西，二是多运动。少吃不代表不吃，而是要科学地吃。关键是要多运动，但是也不需要每天都运动，一周运动两到三次，每次运动一个小时也就差不多了。骑自行车、打篮球、跑步等都是很好的减肥运动。要想减肥成功，一定要坚持，不能怕累，否则很难有效果。', questions: [
              { n: 82, star: '关于减肥，最重要的是：', options: [{ zh: '多锻炼' }, { zh: '有计划' }, { zh: '每天都运动' }, { zh: '不要有烦恼' }], answer: 'A', vn: 'Nếu bạn muốn giảm cân thì phải làm được hai điều: một là ăn ít, hai là vận động nhiều. Ăn ít không có nghĩa là không ăn, mà phải ăn khoa học. Mấu chốt là vận động nhiều, nhưng cũng không cần ngày nào cũng tập, mỗi tuần tập hai đến ba lần, mỗi lần một tiếng là tạm đủ. Đạp xe, chơi bóng rổ, chạy bộ… đều là những môn giảm cân rất tốt. Muốn giảm cân thành công nhất định phải kiên trì, không được sợ mệt, nếu không rất khó có hiệu quả. ★ Về giảm cân, điều quan trọng nhất là: A rèn luyện nhiều · B có kế hoạch · C ngày nào cũng tập · D đừng có phiền muộn.' },
              { n: 83, star: '如果想减肥成功，一定要：', options: [{ zh: '简单' }, { zh: '快乐' }, { zh: '坚持' }, { zh: '热闹' }], answer: 'C', vn: '★ Muốn giảm cân thành công thì nhất định phải: A đơn giản · B vui vẻ · C kiên trì · D náo nhiệt.' }
            ] },
            { range: [84, 85], zh: '很多人问哪个季节去丽江旅游比较好，总的来说，丽江一年四季人都不少，情况稍微好一点儿的时候是每年12月到第二年3月。这段时间来丽江的话，无论交通还是吃、住都是最便宜的。天气方面，这个时候比较冷，气温在-5℃到18℃，早晚温差比较大。风景的话，主要是雪景，白天都是蓝天白云，照出的照片质量会非常高。', questions: [
              { n: 84, star: '去丽江旅游，什么时候比较好？', options: [{ zh: '2月' }, { zh: '6月' }, { zh: '9月' }, { zh: '11月' }], answer: 'A', vn: 'Nhiều người hỏi mùa nào đi du lịch Lệ Giang thì tốt, nhìn chung Lệ Giang bốn mùa đều đông người, lúc đỡ hơn một chút là từ tháng 12 đến tháng 3 năm sau. Đến Lệ Giang trong thời gian này thì cả đi lại lẫn ăn ở đều rẻ nhất. Về thời tiết, lúc này khá lạnh, nhiệt độ từ -5℃ đến 18℃, chênh lệch nhiệt độ sáng tối khá lớn. Về phong cảnh, chủ yếu là cảnh tuyết, ban ngày trời xanh mây trắng, ảnh chụp ra chất lượng rất cao. ★ Đi du lịch Lệ Giang lúc nào thì tốt? A tháng 2 · B tháng 6 · C tháng 9 · D tháng 11.' },
              { n: 85, star: '关于丽江，下列哪个正确？', options: [{ zh: '交通不便' }, { zh: '游客很多' }, { zh: '少数民族多' }, { zh: '不适合照相' }], answer: 'B', vn: '★ Về Lệ Giang, câu nào đúng? A giao thông bất tiện · B khách du lịch rất đông · C nhiều dân tộc thiểu số · D không hợp để chụp ảnh.' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'write', name: 'Viết', icon: 'pencil',
      parts: [
        {
          name: 'Phần 1', range: [86, 95], type: 'arrange', intro: 'Sắp xếp các từ thành câu. Bấm lần lượt các từ; bấm từ đã xếp để bỏ ra.', example: 'Ví dụ: 那座桥 800 年的 历史 有 了 → 那座桥有800年的历史了。',
          questions: [
            { n: 86, words: ['你', '关了', '把窗户', '吗'], answer: '你把窗户关了吗？', vn: 'Cậu đóng cửa sổ chưa? — Câu chữ 把: 把 + tân ngữ + động từ + 了.' },
            { n: 87, words: ['拉近', '了', '人与人之间的', '手机', '距离'], answer: '手机拉近了人与人之间的距离。', vn: 'Điện thoại di động đã kéo gần khoảng cách giữa người với người.' },
            { n: 88, words: ['去年秋天', '我孙子', '出生', '是', '的'], answer: '我孙子是去年秋天出生的。', vn: 'Cháu trai tôi sinh vào mùa thu năm ngoái. — 是…的 nhấn mạnh thời gian.' },
            { n: 89, words: ['打针', '好', '比吃药', '效果'], answer: '打针比吃药效果好。', accept: ['打针效果比吃药好。'], vn: 'Tiêm hiệu quả hơn uống thuốc. — So sánh: A + 比 + B + tính từ. (Cũng chấp nhận: 打针效果比吃药好。)' },
            { n: 90, words: ['这个城市', '出租车的数量', '决定', '增加'], answer: '这个城市决定增加出租车的数量。', vn: 'Thành phố này quyết định tăng số lượng taxi. — 决定 + động từ + tân ngữ.' },
            { n: 91, words: ['非常', '大', '影响范围', '这场降水', '的'], answer: '这场降水的影响范围非常大。', vn: 'Phạm vi ảnh hưởng của trận mưa này rất lớn.' },
            { n: 92, words: ['工具书', '是', '一本', '现代汉语词典'], answer: '现代汉语词典是一本工具书。', vn: 'Từ điển Hán ngữ hiện đại là một cuốn sách công cụ (sách tra cứu).' },
            { n: 93, words: ['哥哥', '睡不着觉', '得', '兴奋'], answer: '哥哥兴奋得睡不着觉。', vn: 'Anh trai phấn khích đến mức không ngủ được. — Bổ ngữ trạng thái: tính từ + 得 + kết quả.' },
            { n: 94, words: ['好处', '抽烟对你', '没有', '一点儿'], answer: '抽烟对你没有一点儿好处。', accept: ['抽烟对你一点儿好处没有。'], vn: 'Hút thuốc chẳng có chút lợi ích nào cho bạn. — 没有一点儿 + danh từ = 一点儿 + danh từ + 没有: không có chút… nào.' },
            { n: 95, words: ['完全', '国家的', '这么做', '符合', '法律规定'], answer: '这么做完全符合国家的法律规定。', vn: 'Làm như vậy hoàn toàn phù hợp với quy định pháp luật của nhà nước. — 符合 + quy định/yêu cầu.' }
          ]
        },
        {
          name: 'Phần 2', range: [96, 100], type: 'pic-write', intro: 'Nhìn tranh, dùng từ cho sẵn viết một câu.', example: 'Ví dụ: (乒乓球) 她很喜欢打乒乓球。',
          questions: [
            { n: 96, img: 'w96.jpg', word: '消息', answer: '这个消息让他非常高兴。', accept: ['听到这个好消息，他高兴极了。', '他在网上看到了一个好消息。'], vn: 'Tin này khiến anh ấy vô cùng vui mừng.' },
            { n: 97, img: 'w97.jpg', word: '猜', answer: '你猜我给你带什么了。', accept: ['你猜猜这是什么礼物？', '他让女朋友猜猜他手里拿着什么。'], vn: 'Em đoán xem anh mang gì cho em nào.' },
            { n: 98, img: 'w98.jpg', word: '信用卡', answer: '那家商场能用信用卡吧？', accept: ['她用信用卡买了很多衣服。', '我想用信用卡付钱。'], vn: 'Trung tâm thương mại đó dùng được thẻ tín dụng chứ?' },
            { n: 99, img: 'w99.jpg', word: '沙发', answer: '这个沙发很舒服。', accept: ['她躺在沙发上休息。', '这个红色的沙发又大又舒服。'], vn: 'Chiếc ghế sô-pha này rất thoải mái.' },
            { n: 100, img: 'w100.jpg', word: '困', answer: '昨晚没睡好，现在有点儿困了。', accept: ['工作了一天，他觉得很困。', '他困得一直想睡觉。'], vn: 'Tối qua ngủ không ngon, bây giờ hơi buồn ngủ rồi.' }
          ]
        }
      ]
    }
  ]
};
