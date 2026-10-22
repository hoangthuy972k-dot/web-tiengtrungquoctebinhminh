// Đề thi thử HSK 4 – Đề số 2 (đề mẫu H41002 của Hanban).
// Cấu trúc: Nghe 45 câu (~30 phút), Đọc 40 câu, Viết 15 câu; tổng 100 câu, 105 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (theo tỉ lệ câu đúng), tổng 300, đạt từ 180.
// audio: [giây bắt đầu, giây kết thúc] từng câu trong file nghe (mỗi câu đọc 1 lần), dò bằng khoảng lặng (S\h4de\moc-hsk4.js).
// Sinh bằng S\h4de\gan-de-hsk4.js 2 — sửa dữ liệu ở de-2.json / vn-2.js rồi chạy lại.
window.EXAM_DATA = {
  id: 'hsk4-test-2',
  level: 'HSK 4',
  title: 'HSK 4 - Test 2',
  code: 'H41002',
  durationSec: 105 * 60,
  maxScore: 300,
  passScore: 180,
  img: '/exam/img/hsk4-test-2/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones', audio: '/audio/exam/hsk4-test-2.mp3', note: 'Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu chỉ đọc 1 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-text', intro: 'Nghe đoạn ngắn, phán đoán câu ★ đúng hay sai.',
          questions: [
            { n: 1, star: '签证已经办好了。', starVn: 'Visa đã làm xong rồi.', answer: false, audio: [125.6, 146.4], script: '明天就要去使馆办签证了，邀请信竟然还没寄到，这可怎么办？', scriptVn: 'Mai là phải đến đại sứ quán làm visa rồi, vậy mà thư mời vẫn chưa gửi đến, giờ biết làm sao đây? (Visa chưa làm xong.)' },
            { n: 2, star: '现在她也做妈妈了。', starVn: 'Bây giờ cô ấy cũng đã làm mẹ.', answer: true, audio: [155.8, 176.6], script: '女儿出生以后，我才知道做妈妈有多么不容易。因此，我更加理解我的父母了，也感谢他们这么多年来给我的爱。', scriptVn: 'Sau khi con gái chào đời, tôi mới biết làm mẹ vất vả đến nhường nào. Vì thế tôi càng hiểu bố mẹ mình hơn, và biết ơn tình yêu thương họ dành cho tôi suốt bao năm qua.' },
            { n: 3, star: '小王今天要加班。', starVn: 'Hôm nay Tiểu Vương phải tăng ca.', answer: true, audio: [186.1, 208.4], script: '小王，这份材料明天早上就要用，得请你翻译一下，晚上十点之前一定要完成，翻译好后打印一份给经理，辛苦你了。', scriptVn: 'Tiểu Vương, tài liệu này sáng mai phải dùng rồi, phiền cậu dịch giúp, trước mười giờ tối nhất định phải xong, dịch xong in một bản đưa giám đốc, vất vả cho cậu rồi.' },
            { n: 4, star: '节日是文化的一部分。', starVn: 'Ngày lễ tết là một phần của văn hóa.', answer: true, audio: [218.1, 237.2], script: '节日是文化的一部分，所以，如果想了解一个国家的文化，我们可以从了解这个国家的节日开始。', scriptVn: 'Ngày lễ tết là một phần của văn hóa, vì vậy nếu muốn tìm hiểu văn hóa của một đất nước, chúng ta có thể bắt đầu từ việc tìm hiểu các ngày lễ tết của nước đó.' },
            { n: 5, star: '王教授脾气很大。', starVn: 'Giáo sư Vương rất nóng tính.', answer: false, audio: [246.6, 265.8], script: '三十七岁的王教授，在我们学校很有名，不但会三种语言，而且会写小说，各方面都很优秀。', scriptVn: 'Giáo sư Vương 37 tuổi rất nổi tiếng ở trường chúng tôi, không những biết ba thứ tiếng mà còn viết tiểu thuyết, mặt nào cũng rất xuất sắc. (Không hề nói ông ấy nóng tính.)' },
            { n: 6, star: '真正的爱情不需要浪漫。', starVn: 'Tình yêu đích thực không cần lãng mạn.', answer: false, audio: [275.3, 300.1], script: '怎么样才能找到适合自己的人？两个人共同生活，不仅需要浪漫的爱情，更需要性格上互相吸引，最重要的是，两个人都要有对家的责任感。', scriptVn: 'Làm sao để tìm được người hợp với mình? Hai người sống chung không chỉ cần tình yêu lãng mạn, mà càng cần sự hòa hợp, cuốn hút nhau về tính cách; quan trọng nhất là cả hai đều phải có trách nhiệm với gia đình.' },
            { n: 7, star: '年轻人喜欢早上锻炼身体。', starVn: 'Người trẻ thích tập thể dục vào buổi sáng.', answer: false, audio: [309.5, 330.2], script: '只要注意一下，你会发现，早上的公园里、街道上，早起锻炼的人中，老年人很多而年轻人很少。', scriptVn: 'Chỉ cần để ý một chút, bạn sẽ thấy trong số những người dậy sớm tập thể dục ở công viên, trên phố vào buổi sáng, người già rất nhiều còn người trẻ rất ít.' },
            { n: 8, star: '小林正在找工作。', starVn: 'Tiểu Lâm đang tìm việc.', answer: false, audio: [339.6, 361.8], script: '小林，这次的招聘是由你负责吧？李教授介绍了他的一个学生，是个博士，条件还不错，这是他的申请材料，你看看。', scriptVn: 'Tiểu Lâm, đợt tuyển dụng lần này do cậu phụ trách phải không? Giáo sư Lý giới thiệu một học trò của ông, là tiến sĩ, điều kiện khá tốt, đây là hồ sơ xin việc của cậu ấy, cậu xem đi. (Tiểu Lâm là người tuyển, không phải người tìm việc.)' },
            { n: 9, star: '应该总结过去的经验。', starVn: 'Nên đúc kết kinh nghiệm của quá khứ.', answer: true, audio: [371.2, 393.5], script: '回忆过去，有苦也有甜，有伤心、难过也有幸福、愉快，有很多故事让人难以忘记，有很多经验值得我们总结。', scriptVn: 'Nhớ lại quá khứ, có đắng có ngọt, có đau buồn cũng có hạnh phúc, vui vẻ; có nhiều câu chuyện khiến người ta khó quên, có nhiều kinh nghiệm đáng để chúng ta đúc kết.' },
            { n: 10, star: '广告词应该简短。', starVn: 'Câu quảng cáo nên ngắn gọn.', answer: true, audio: [402.9, 423.4], script: '理想的广告词应该简短，一般六到十二个字比较合适，不应该太长，否则观众不易记住，也就流行不起来。', scriptVn: 'Câu quảng cáo lý tưởng nên ngắn gọn, thường từ sáu đến mười hai chữ là vừa, không nên quá dài, nếu không khán giả khó nhớ và cũng không phổ biến được.' }
          ]
        },
        {
          name: 'Phần 2', range: [11, 25], type: 'mc', intro: 'Nghe hội thoại ngắn, chọn đáp án đúng.',
          questions: [
            { n: 11, options: [{ zh: '正在做饭' }, { zh: '正在购物' }, { zh: '在擦窗户' }, { zh: '在收拾厨房' }], answer: 'A', audio: [469.2, 491.5], script: '男：妈，您的手机响了。\n女：肯定是你爸，你接一下，就说妈正在做午饭呢。\n问：关于女的，可以知道什么？', scriptVn: 'Nam: Mẹ ơi, điện thoại mẹ reo kìa. / Nữ: Chắc chắn là bố con, con nghe giúp mẹ, cứ nói mẹ đang nấu cơm trưa. / Hỏi: Về người nữ, có thể biết điều gì? (A đang nấu cơm · B đang mua sắm · C đang lau cửa sổ · D đang dọn bếp)' },
            { n: 12, options: [{ zh: '能力' }, { zh: '数量' }, { zh: '知识' }, { zh: '专业' }], answer: 'A', audio: [506.5, 528], script: '女：你看电视上的报道了吗？今年十个大学毕业生竞争一个工作。\n男：关键还是看能力，有能力的人不怕找不到好工作。\n问：男的认为什么是关键？', scriptVn: 'Nữ: Anh xem bản tin trên ti-vi chưa? Năm nay mười sinh viên tốt nghiệp tranh nhau một việc làm. / Nam: Mấu chốt vẫn là năng lực, người có năng lực không sợ không tìm được việc tốt. / Hỏi: Người nam cho rằng điều gì là mấu chốt? (A năng lực · B số lượng · C kiến thức · D chuyên ngành)' },
            { n: 13, options: [{ zh: '非常鲜' }, { zh: '很好喝' }, { zh: '太辣了' }, { zh: '太咸了' }], answer: 'D', audio: [542.9, 560.7], script: '男：我的天，这个西红柿汤你放了多少盐啊！\n女：我尝尝，呀，对不起，盐是太多了。\n问：汤的味道怎么样？', scriptVn: 'Nam: Trời ơi, món canh cà chua này em cho bao nhiêu muối thế! / Nữ: Để em nếm thử, ôi, xin lỗi, đúng là nhiều muối quá. / Hỏi: Vị của món canh thế nào? (A rất tươi ngon · B rất ngon · C cay quá · D mặn quá)' },
            { n: 14, options: [{ zh: '没兴趣' }, { zh: '票很贵' }, { zh: '票不好买' }, { zh: '喜欢打网球' }], answer: 'C', audio: [575.6, 593], script: '女：下星期首都体育馆有场羽毛球比赛，我们一起去看？\n男：票恐怕很难买到吧？\n问：男的主要是什么意思？', scriptVn: 'Nữ: Tuần sau ở Nhà thi đấu Thủ đô có trận đấu cầu lông, mình cùng đi xem nhé? / Nam: E là vé khó mua lắm nhỉ? / Hỏi: Ý chính của người nam là gì? (A không có hứng thú · B vé rất đắt · C vé khó mua · D thích chơi quần vợt)' },
            { n: 15, options: [{ zh: '换裤子' }, { zh: '戴帽子' }, { zh: '洗个澡' }, { zh: '散散步' }], answer: 'A', audio: [607.9, 628.2], script: '男：明天我穿这件衬衫怎么样？\n女：衬衫没问题，但是裤子要换一条黑色的，另外，你该理发了。\n问：女的让男的做什么？', scriptVn: 'Nam: Mai anh mặc chiếc áo sơ mi này thế nào? / Nữ: Áo sơ mi thì được, nhưng quần phải thay một chiếc màu đen, ngoài ra anh nên đi cắt tóc rồi. / Hỏi: Người nữ bảo người nam làm gì? (A thay quần · B đội mũ · C đi tắm · D đi dạo)' },
            { n: 16, options: [{ zh: '夫妻' }, { zh: '母子' }, { zh: '父女' }, { zh: '姐弟' }], answer: 'D', audio: [643.1, 661.9], script: '女：什么时候让我们见见你的女朋友？\n男：没问题，姐，我们正商量着下个周末请家里人一起吃个饭呢。\n问：说话人是什么关系？', scriptVn: 'Nữ: Bao giờ cho bọn chị gặp bạn gái em đây? / Nam: Không vấn đề gì, chị ạ, bọn em đang bàn cuối tuần sau mời cả nhà đi ăn một bữa. / Hỏi: Hai người nói chuyện có quan hệ gì? (A vợ chồng · B mẹ con · C bố con gái · D chị em trai)' },
            { n: 17, options: [{ zh: '今天上午' }, { zh: '明天下午' }, { zh: '明天晚上' }, { zh: '后天上午' }], answer: 'D', audio: [676.8, 698.3], script: '男：小张，原定后天上午的会改在明天下午两点了，你通知一下其他人。\n女：好的，经理，我现在就打电话。\n问：会议原来准备什么时候开？', scriptVn: 'Nam: Tiểu Trương, cuộc họp dự định sáng ngày kia đã đổi sang hai giờ chiều mai, cô báo cho mọi người nhé. / Nữ: Vâng, thưa giám đốc, tôi gọi điện ngay đây. / Hỏi: Cuộc họp lúc đầu định họp khi nào? (A sáng nay · B chiều mai · C tối mai · D sáng ngày kia)' },
            { n: 18, options: [{ zh: '太旧了' }, { zh: '是货梯' }, { zh: '电梯坏了' }, { zh: '他们去二层' }], answer: 'B', audio: [713.3, 730.1], script: '女：我们还是坐别的电梯吧，你看电梯门上写着“货梯”。\n男：好吧，去那边吧。\n问：他们为什么不坐这个电梯？', scriptVn: 'Nữ: Mình đi thang máy khác đi, anh xem trên cửa thang ghi "thang chở hàng" kìa. / Nam: Được, sang bên kia thôi. / Hỏi: Vì sao họ không đi thang máy này? (A cũ quá · B là thang chở hàng · C thang máy hỏng · D họ lên tầng hai)' },
            { n: 19, options: [{ zh: '送给邻居' }, { zh: '要多运动' }, { zh: '搬到院子里' }, { zh: '再多买几朵' }], answer: 'C', audio: [745.1, 765], script: '男：奇怪，这花儿才买来几天，怎么叶子就黄了？\n女：植物需要阳光，咱把它搬到院子里，可能会好些。\n问：女的有什么意见？', scriptVn: 'Nam: Lạ thật, chậu hoa này mới mua được mấy hôm, sao lá đã vàng rồi? / Nữ: Cây cần ánh nắng, mình chuyển nó ra sân, có lẽ sẽ khá hơn. / Hỏi: Người nữ có ý kiến gì? (A tặng hàng xóm · B phải vận động nhiều · C chuyển ra sân · D mua thêm mấy bông)' },
            { n: 20, options: [{ zh: '一刻钟' }, { zh: '20分钟' }, { zh: '40分钟' }, { zh: '一个小时' }], answer: 'B', audio: [780, 800.8], script: '女：师傅，我去火车站。大概要多长时间，半小时能到吗？\n男：现在不堵车，估计二十分钟就能到。\n问：去火车站需要多长时间？', scriptVn: 'Nữ: Bác tài, cho tôi ra ga tàu. Mất khoảng bao lâu, nửa tiếng có đến được không? / Nam: Giờ không tắc đường, chắc hai mươi phút là đến. / Hỏi: Đến ga tàu mất bao lâu? (A 15 phút · B 20 phút · C 40 phút · D một tiếng)' },
            { n: 21, options: [{ zh: '人与自然' }, { zh: '动物世界' }, { zh: '经济与法' }, { zh: '体育新闻' }], answer: 'B', audio: [814.6, 832], script: '男：你喜欢看这样的节目？\n女：对，《动物世界》很精彩啊，还可以丰富知识。你不喜欢？\n问：女的喜欢看什么节目？', scriptVn: 'Nam: Em thích xem chương trình kiểu này à? / Nữ: Ừ, "Thế giới động vật" rất hay mà, lại mở mang kiến thức. Anh không thích à? / Hỏi: Người nữ thích xem chương trình gì? (A Con người và thiên nhiên · B Thế giới động vật · C Kinh tế và pháp luật · D Tin thể thao)' },
            { n: 22, options: [{ zh: '饺子' }, { zh: '米饭' }, { zh: '面条' }, { zh: '面包' }], answer: 'A', audio: [846.9, 864.5], script: '女：我现在去菜市场买菜，你中午想吃点儿什么？\n男：随便，或者我们吃饺子好不好？\n问：男的中午想吃什么？', scriptVn: 'Nữ: Giờ em đi chợ mua thức ăn, trưa anh muốn ăn gì? / Nam: Gì cũng được, hay là mình ăn sủi cảo nhé? / Hỏi: Buổi trưa người nam muốn ăn gì? (A sủi cảo · B cơm · C mì · D bánh mì)' },
            { n: 23, options: [{ zh: '很顺利' }, { zh: '天气很热' }, { zh: '时间很紧张' }, { zh: '遇到些麻烦' }], answer: 'A', audio: [879.5, 898.4], script: '男：王校长，这次出差还顺利吧？\n女：挺顺利的，安排得很好，还顺便在北京玩儿了两天。\n问：这次出差，情况怎么样？', scriptVn: 'Nam: Hiệu trưởng Vương, chuyến công tác lần này suôn sẻ chứ ạ? / Nữ: Rất suôn sẻ, sắp xếp rất chu đáo, tôi còn tiện thể đi chơi ở Bắc Kinh hai ngày. / Hỏi: Chuyến công tác này thế nào? (A rất suôn sẻ · B trời rất nóng · C thời gian rất gấp · D gặp chút rắc rối)' },
            { n: 24, options: [{ zh: '商店' }, { zh: '宾馆' }, { zh: '教室' }, { zh: '办公室' }], answer: 'D', audio: [913.3, 934.3], script: '女：小刘，帮我把这两页材料传真给李记者，他下周的一篇报道里要用这些数字。\n男：好，他的传真号码是多少？\n问：对话最可能发生在哪儿？', scriptVn: 'Nữ: Tiểu Lưu, fax giúp tôi hai trang tài liệu này cho phóng viên Lý, bài phóng sự tuần sau của anh ấy cần dùng những số liệu này. / Nam: Vâng, số fax của anh ấy là bao nhiêu ạ? / Hỏi: Cuộc hội thoại có khả năng diễn ra ở đâu nhất? (A cửa hàng · B khách sạn · C lớp học · D văn phòng)' },
            { n: 25, options: [{ zh: '减肥' }, { zh: '爬山' }, { zh: '踢足球' }, { zh: '打篮球' }], answer: 'B', audio: [949.2, 969.7], script: '男：终于爬上来了，累死我了，这山太高了。\n女：看来你确实缺少锻炼，以后每天跟我一块儿跑步吧。\n问：他们最可能在做什么？', scriptVn: 'Nam: Cuối cùng cũng leo lên được rồi, mệt chết mất, núi này cao quá. / Nữ: Xem ra anh đúng là thiếu vận động, sau này ngày nào cũng chạy bộ với em đi. / Hỏi: Họ có khả năng đang làm gì nhất? (A giảm cân · B leo núi · C đá bóng · D chơi bóng rổ)' }
          ]
        },
        {
          name: 'Phần 3', range: [26, 35], type: 'mc', intro: 'Nghe hội thoại dài, chọn đáp án đúng.',
          questions: [
            { n: 26, options: [{ zh: '他是警察' }, { zh: '他是负责人' }, { zh: '他熟悉上海' }, { zh: '他放暑假了' }], answer: 'C', audio: [1030.5, 1067.7], script: '女：王律师，我有一个朋友想来上海做生意。\n男：好啊，上海这个城市大，市场也大，机会也多。\n女：可是我们对当地的情况都不太了解。\n男：可以问我啊，我在这儿工作快二十年了，我熟悉啊。\n问：男的为什么说可以问他？', scriptVn: 'Nữ: Luật sư Vương, tôi có một người bạn muốn đến Thượng Hải làm ăn. / Nam: Tốt quá, Thượng Hải là thành phố lớn, thị trường cũng lớn, cơ hội cũng nhiều. / Nữ: Nhưng chúng tôi không hiểu lắm tình hình ở đây. / Nam: Cứ hỏi tôi, tôi làm việc ở đây gần hai mươi năm rồi, tôi rành lắm. / Hỏi: Vì sao người nam nói có thể hỏi anh ấy? (A anh ấy là cảnh sát · B anh ấy là người phụ trách · C anh ấy thông thạo Thượng Hải · D anh ấy được nghỉ hè)' },
            { n: 27, options: [{ zh: '女的刚回来' }, { zh: '他们在机场' }, { zh: '男的很失望' }, { zh: '男的要去上班' }], answer: 'A', audio: [1081.8, 1111.8], script: '男：真抱歉，本来我该去火车站接你的。\n女：没关系，我打个车就回来了，很方便。你那篇材料写完没？\n男：差不多了，我再检查一遍，就可以交了。\n女：那你快写吧，写完早点儿休息。\n问：根据对话，可以知道什么？', scriptVn: 'Nam: Thật xin lỗi, đáng lẽ anh phải ra ga đón em. / Nữ: Không sao, em bắt taxi về rồi, tiện lắm. Bài viết của anh viết xong chưa? / Nam: Gần xong rồi, anh kiểm tra lại một lượt là nộp được. / Nữ: Thế anh mau viết đi, xong thì nghỉ sớm. / Hỏi: Theo đoạn hội thoại, có thể biết điều gì? (A người nữ vừa về · B họ đang ở sân bay · C người nam rất thất vọng · D người nam phải đi làm)' },
            { n: 28, options: [{ zh: '被批评了' }, { zh: '被人骗了' }, { zh: '赚了很多钱' }, { zh: '找到一百元' }], answer: 'D', audio: [1125.9, 1160.5], script: '女：今天打扫房间，你猜我找到什么了？\n男：看你这么兴奋，难道找到人民币了？笑什么？究竟是什么？\n女：你真聪明，我在咱们床底下找到一百块钱。\n男：那是我的，我昨天好像丢了一百。\n女：我不相信！它现在是我的。\n问：女的怎么了？', scriptVn: 'Nữ: Hôm nay dọn phòng, anh đoán xem em tìm thấy gì? / Nam: Thấy em phấn khởi thế này, chẳng lẽ tìm được tiền? Cười gì thế? Rốt cuộc là gì? / Nữ: Anh thông minh thật, em tìm thấy một trăm tệ dưới gầm giường mình. / Nam: Của anh đấy, hôm qua hình như anh mất một trăm. / Nữ: Em không tin! Giờ nó là của em. / Hỏi: Người nữ làm sao? (A bị phê bình · B bị lừa · C kiếm được nhiều tiền · D tìm thấy một trăm tệ)' },
            { n: 29, options: [{ zh: '银行' }, { zh: '洗手间' }, { zh: '小商店' }, { zh: '吸烟室' }], answer: 'C', audio: [1174.6, 1204.2], script: '男：请问，附近哪儿可以复印？\n女：图书馆一楼东边有几台自助复印机。\n男：除了那儿，还有其他地方吗？\n女：那你要去学校外面了，南门对面有个小商店，那儿也可以复印。\n问：根据对话，男的最可能去哪儿？', scriptVn: 'Nam: Xin hỏi gần đây chỗ nào photo được? / Nữ: Tầng một thư viện, phía đông có mấy máy photo tự phục vụ. / Nam: Ngoài chỗ đó ra còn chỗ nào khác không? / Nữ: Thế thì anh phải ra ngoài trường rồi, đối diện cổng nam có một cửa hàng nhỏ, ở đó cũng photo được. / Hỏi: Theo đoạn hội thoại, người nam có khả năng đi đâu nhất? (A ngân hàng · B nhà vệ sinh · C cửa hàng nhỏ · D phòng hút thuốc)' },
            { n: 30, options: [{ zh: '健康' }, { zh: '旅游' }, { zh: '饮食' }, { zh: '花费' }], answer: 'D', audio: [1218.3, 1243.5], script: '女：这个月家里一共花了五千多块。\n男：这么多？你不会是算错了吧？\n女：没算错。光买沙发和冰箱就花了四千多。\n男：明白了。下个月不会花这么多了。\n问：他们在谈什么？', scriptVn: 'Nữ: Tháng này nhà mình tiêu tổng cộng hơn năm nghìn tệ. / Nam: Nhiều thế? Em không tính nhầm đấy chứ? / Nữ: Không nhầm đâu. Chỉ riêng mua sô-pha với tủ lạnh đã hết hơn bốn nghìn rồi. / Nam: Hiểu rồi. Tháng sau sẽ không tiêu nhiều thế nữa. / Hỏi: Họ đang nói về chuyện gì? (A sức khỏe · B du lịch · C ăn uống · D chi tiêu)' },
            { n: 31, options: [{ zh: '收到短信了' }, { zh: '她今天结婚' }, { zh: '衣服很漂亮' }, { zh: '得到一个礼物' }], answer: 'D', audio: [1257.6, 1285.7], script: '男：小姐，您是今天第一个来我们超市的客人，我们准备了一个小礼物送给您。\n女：真的吗？谢谢你！太高兴了。\n男：这是我们超市送您的环保购物袋，祝您购物愉快。\n女：谢谢。\n问：女的为什么很高兴？', scriptVn: 'Nam: Thưa chị, chị là khách hàng đầu tiên đến siêu thị chúng tôi hôm nay, chúng tôi có chuẩn bị một món quà nhỏ tặng chị. / Nữ: Thật à? Cảm ơn anh! Vui quá. / Nam: Đây là túi mua sắm thân thiện môi trường siêu thị tặng chị, chúc chị mua sắm vui vẻ. / Nữ: Cảm ơn. / Hỏi: Vì sao người nữ rất vui? (A nhận được tin nhắn · B hôm nay cô ấy cưới · C quần áo rất đẹp · D được tặng một món quà)' },
            { n: 32, options: [{ zh: '4月' }, { zh: '5月' }, { zh: '8月' }, { zh: '10月' }], answer: 'C', audio: [1299.8, 1330], script: '女：你好，我想报名参加这个月的普通话水平考试。\n男：对不起，报名工作今天上午刚结束。\n女：啊，那下一次考试是什么时候？\n男：八月十五号，报名时间您可以上我们的网站查一下。\n问：下一次考试是几月？', scriptVn: 'Nữ: Chào anh, tôi muốn đăng ký kỳ thi năng lực tiếng phổ thông tháng này. / Nam: Xin lỗi, việc đăng ký vừa kết thúc sáng nay. / Nữ: Ôi, thế kỳ thi sau là khi nào ạ? / Nam: Ngày mười lăm tháng tám, thời gian đăng ký chị có thể lên trang web của chúng tôi tra. / Hỏi: Kỳ thi sau vào tháng mấy? (A tháng 4 · B tháng 5 · C tháng 8 · D tháng 10)' },
            { n: 33, options: [{ zh: '很勇敢' }, { zh: '很诚实' }, { zh: '很可爱' }, { zh: '很有礼貌' }], answer: 'B', audio: [1344.1, 1369.1], script: '男：您能给我们介绍一些您的成功经验吗？\n女：我觉得要重视平时的积累，要多向周围的人学习。\n男：那您觉得您最大的优点是什么呢？\n女：是诚实。\n问：女的觉得自己怎么样？', scriptVn: 'Nam: Chị có thể chia sẻ với chúng tôi một vài kinh nghiệm thành công không? / Nữ: Tôi nghĩ phải coi trọng sự tích lũy hằng ngày, phải học hỏi nhiều từ những người xung quanh. / Nam: Vậy chị thấy ưu điểm lớn nhất của mình là gì? / Nữ: Là trung thực. / Hỏi: Người nữ thấy mình thế nào? (A rất dũng cảm · B rất trung thực · C rất đáng yêu · D rất lễ phép)' },
            { n: 34, options: [{ zh: '他很热情' }, { zh: '他力气大' }, { zh: '他是研究生' }, { zh: '他文章写得好' }], answer: 'C', audio: [1383.2, 1414.5], script: '女：大学毕业后就没联系了，你现在在哪儿工作呢？\n男：毕业后在老家工作了一年，然后又考上了北京大学，读研究生。\n女：真厉害！是硕士了。你读什么专业？几年？\n男：教育学，三年。\n问：女的为什么说男的很厉害？', scriptVn: 'Nữ: Tốt nghiệp đại học xong là mất liên lạc luôn, giờ cậu làm ở đâu? / Nam: Tốt nghiệp xong tớ làm ở quê một năm, rồi thi đỗ Đại học Bắc Kinh, học nghiên cứu sinh. / Nữ: Giỏi thật! Thạc sĩ rồi. Cậu học chuyên ngành gì? Mấy năm? / Nam: Giáo dục học, ba năm. / Hỏi: Vì sao người nữ nói người nam rất giỏi? (A anh ấy rất nhiệt tình · B anh ấy khỏe · C anh ấy là nghiên cứu sinh · D anh ấy viết bài hay)' },
            { n: 35, options: [{ zh: '迟到' }, { zh: '赢不了' }, { zh: '会下雨' }, { zh: '不认识路' }], answer: 'A', audio: [1428.6, 1459], script: '男：油箱里剩的油不多了，看看哪儿有加油站。\n女：前面就有一个，大概有四五公里远。\n男：好，那我就放心了，刚才我还有点儿担心来不及呢。\n女：航班是十点的，来得及。\n问：男的刚才担心什么？', scriptVn: 'Nam: Trong bình còn ít xăng quá, xem chỗ nào có trạm xăng. / Nữ: Phía trước có một trạm, cách khoảng bốn năm cây số. / Nam: Tốt, thế thì anh yên tâm rồi, vừa nãy anh còn hơi lo không kịp. / Nữ: Chuyến bay lúc mười giờ, kịp mà. / Hỏi: Vừa nãy người nam lo điều gì? (A đến muộn · B không thắng được · C trời sẽ mưa · D không biết đường)' }
          ]
        },
        {
          name: 'Phần 4', range: [36, 45], type: 'mc', intro: 'Nghe đoạn văn, trả lời 2 câu hỏi.',
          groups: [
            { range: [36, 37], questions: [
              { n: 36, options: [{ zh: '很瘦' }, { zh: '个子矮' }, { zh: '十分骄傲' }, { zh: '爱好历史' }], answer: 'B', audio: [1473.1, 1512.5], script: '邓亚萍是中国的乒乓球运动员，但是她的身高只有一米五五，很多人认为她并不适合打乒乓球。可是她通过努力，改变了人们的这一看法。她十五岁成为亚洲第一，十六岁获得世界第一。\n问：关于邓亚萍，可以知道什么？', scriptVn: 'Đặng Á Bình là vận động viên bóng bàn Trung Quốc, nhưng chị chỉ cao 1m55, nhiều người cho rằng chị không hợp chơi bóng bàn. Thế nhưng bằng nỗ lực, chị đã thay đổi cách nhìn đó của mọi người. Mười lăm tuổi chị trở thành số một châu Á, mười sáu tuổi giành ngôi số một thế giới. / Hỏi 36: Về Đặng Á Bình, có thể biết điều gì? (A rất gầy · B dáng người thấp · C rất kiêu ngạo · D thích lịch sử)' },
              { n: 37, options: [{ zh: '15岁' }, { zh: '16岁' }, { zh: '25岁' }, { zh: '26岁' }], answer: 'A', audio: [1526.6, 1533.1], script: '问：邓亚萍什么时候获得亚洲第一？', scriptVn: 'Hỏi 37: Đặng Á Bình giành ngôi số một châu Á khi nào? (A 15 tuổi · B 16 tuổi · C 25 tuổi · D 26 tuổi)' }
            ] },
            { range: [38, 39], questions: [
              { n: 38, options: [{ zh: '老师' }, { zh: '班长' }, { zh: '校长' }, { zh: '院长' }], answer: 'B', audio: [1547.2, 1592], script: '同学们正在教室里学习，准备下星期的考试。班长忽然跑进来，大声说：“告诉大家一个好消息和一个坏消息。好消息是下星期不考试了！”同学们高兴得跳了起来，班长又说：“坏消息是下星期的考试，改到今天了。”\n问：消息是谁通知的？', scriptVn: 'Các bạn học sinh đang học trong lớp, chuẩn bị cho kỳ thi tuần sau. Lớp trưởng bỗng chạy vào, nói to: "Báo cho mọi người một tin tốt và một tin xấu. Tin tốt là tuần sau không thi nữa!" Cả lớp vui đến nhảy cẫng lên, lớp trưởng lại nói: "Tin xấu là kỳ thi tuần sau đổi sang hôm nay rồi." / Hỏi 38: Ai là người báo tin? (A thầy giáo · B lớp trưởng · C hiệu trưởng · D viện trưởng)' },
              { n: 39, options: [{ zh: '要考数学' }, { zh: '作业很多' }, { zh: '考试提前了' }, { zh: '考试成绩不好' }], answer: 'C', audio: [1606.1, 1610.5], script: '问：坏消息是什么？', scriptVn: 'Hỏi 39: Tin xấu là gì? (A phải thi toán · B bài tập rất nhiều · C kỳ thi bị đẩy lên sớm · D điểm thi không tốt)' }
            ] },
            { range: [40, 41], questions: [
              { n: 40, options: [{ zh: '游泳' }, { zh: '骑马' }, { zh: '表演' }, { zh: '画画儿' }], answer: 'C', audio: [1624.6, 1665.2], script: '他是一位著名的演员。有一次，一个地方举行一个比赛，看谁表演得更像他。参加的人有三四十个，他自己也报名参加了，但没有告诉任何人，结果他得的竟是第三名。他觉得这是他一生中最大的一个笑话。\n问：他参加的是什么比赛？', scriptVn: 'Ông ấy là một diễn viên nổi tiếng. Có lần, một địa phương tổ chức cuộc thi xem ai diễn giống ông nhất. Có ba bốn chục người tham gia, chính ông cũng đăng ký dự thi nhưng không nói với ai, kết quả ông chỉ được giải ba. Ông cho rằng đó là chuyện buồn cười nhất trong đời mình. / Hỏi 40: Ông ấy tham gia cuộc thi gì? (A bơi · B cưỡi ngựa · C biểu diễn · D vẽ tranh)' },
              { n: 41, options: [{ zh: '比赛很乱' }, { zh: '大家都很笨' }, { zh: '他们都很胖' }, { zh: '他没得第一名' }], answer: 'D', audio: [1679.4, 1684.5], script: '问：他为什么觉得很好笑？', scriptVn: 'Hỏi 41: Vì sao ông ấy thấy rất buồn cười? (A cuộc thi rất lộn xộn · B mọi người đều rất ngốc · C họ đều rất béo · D ông ấy không được giải nhất)' }
            ] },
            { range: [42, 43], questions: [
              { n: 42, options: [{ zh: '让人更成熟' }, { zh: '让皮肤湿润' }, { zh: '让空气湿润' }, { zh: '让人很凉快' }], answer: 'B', audio: [1698.6, 1740.7], script: '进入冬季，气候干燥，怎样才能保护皮肤，让别人看不出自己的年龄？我们的“水之印象”可以让您的皮肤在干燥的冬季喝饱水。我们现在正举办免费试用活动，很多人用过之后，都说效果非常好，您还在等什么？\n问：“水之印象”有什么作用？', scriptVn: 'Vào mùa đông, khí hậu hanh khô, làm sao để bảo vệ làn da, khiến người khác không đoán được tuổi của mình? Sản phẩm "Ấn tượng nước" của chúng tôi giúp làn da bạn được uống no nước trong mùa đông khô hanh. Hiện chúng tôi đang có chương trình dùng thử miễn phí, rất nhiều người dùng xong đều nói hiệu quả rất tốt, bạn còn chờ gì nữa? / Hỏi 42: "Ấn tượng nước" có tác dụng gì? (A giúp người ta chín chắn hơn · B giúp da ẩm mịn · C giúp không khí ẩm · D giúp người ta mát mẻ)' },
              { n: 43, options: [{ zh: '免费试用' }, { zh: '买一送一' }, { zh: '半价出售' }, { zh: '九折出售' }], answer: 'A', audio: [1754.9, 1760.1], script: '问：他们正在举办什么活动？', scriptVn: 'Hỏi 43: Họ đang tổ chức hoạt động gì? (A dùng thử miễn phí · B mua một tặng một · C bán nửa giá · D giảm giá 10%)' }
            ] },
            { range: [44, 45], questions: [
              { n: 44, options: [{ zh: '压力不大' }, { zh: '已按时完成' }, { zh: '质量有问题' }, { zh: '完成速度太慢' }], answer: 'B', audio: [1774.2, 1816.4], script: '我们的任务已经按计划全部完成了。这一段时间，尽管工作压力很大，中间也遇到了许多困难，但是因为有大家的支持，我们能够快速、积极地找到问题的原因，及时地解决问题，保质保量地完成任务。非常感谢大家对我的支持！\n问：关于这个任务，下列哪个正确？', scriptVn: 'Nhiệm vụ của chúng ta đã hoàn thành toàn bộ theo kế hoạch. Thời gian qua, tuy áp lực công việc rất lớn, giữa chừng còn gặp nhiều khó khăn, nhưng nhờ có sự ủng hộ của mọi người, chúng ta đã nhanh chóng, tích cực tìm ra nguyên nhân, kịp thời giải quyết vấn đề, hoàn thành nhiệm vụ đảm bảo cả chất lẫn lượng. Rất cảm ơn mọi người đã ủng hộ tôi! / Hỏi 44: Về nhiệm vụ này, câu nào đúng? (A áp lực không lớn · B đã hoàn thành đúng hạn · C chất lượng có vấn đề · D tốc độ hoàn thành quá chậm)' },
              { n: 45, options: [{ zh: '接受道歉' }, { zh: '感谢同事' }, { zh: '解释原因' }, { zh: '接受任务' }], answer: 'B', audio: [1830.6, 1835.3], script: '问：说话人正在做什么？', scriptVn: 'Hỏi 45: Người nói đang làm gì? (A nhận lời xin lỗi · B cảm ơn đồng nghiệp · C giải thích nguyên nhân · D nhận nhiệm vụ)' }
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
            { range: [46, 50], words: [{ k: 'A', zh: '冷静' }, { k: 'B', zh: '地址' }, { k: 'C', zh: '引起' }, { k: 'D', zh: '坚持', used: true }, { k: 'E', zh: '禁止' }, { k: 'F', zh: '消息' }], example: 'Ví dụ: 她每天都（ D ）走路上下班，所以身体一直很不错。', questions: [
              { n: 46, zh: '他从网站上看到了这个激动人心的（　）。', vn: 'Anh ấy đọc được tin tức đầy phấn khởi này trên trang web. — 消息: tin tức (danh từ đứng sau 的).', answer: 'F' },
              { n: 47, zh: '这儿写着“（　）停车”，他们只好把车停在那边了。', vn: 'Ở đây có ghi "Cấm đỗ xe", họ đành phải đỗ xe ở bên kia. — 禁止: cấm.', answer: 'E' },
              { n: 48, zh: '喂，告诉我你的（　），我准备给你寄几本书。', vn: 'A lô, cho tớ địa chỉ của cậu, tớ định gửi cho cậu mấy cuốn sách. — 地址: địa chỉ.', answer: 'B' },
              { n: 49, zh: '人与人之间如果缺少交流，可能就会（　）误会。', vn: 'Giữa người với người nếu thiếu giao tiếp, có thể sẽ gây ra hiểu lầm. — 引起: gây ra, dẫn đến.', answer: 'C' },
              { n: 50, zh: '问题越是复杂时，你越要（　），千万别着急。', vn: 'Vấn đề càng phức tạp, bạn càng phải bình tĩnh, tuyệt đối đừng vội. — 冷静: bình tĩnh; 越…越….', answer: 'A' }
            ] },
            { range: [51, 55], words: [{ k: 'A', zh: '填' }, { k: 'B', zh: '正式' }, { k: 'C', zh: '温度', used: true }, { k: 'D', zh: '酸' }, { k: 'E', zh: '广播' }, { k: 'F', zh: '肚子' }], example: 'Ví dụ: A：今天真冷啊，好像白天最高（ C ）才2℃。 B：刚才电视里说明天更冷。', questions: [
              { n: 51, zh: 'A：我的（　）在叫了，早上只吃了一小块儿蛋糕。\nB：饿了？我包里有巧克力，给你。', vn: 'A: Bụng tớ réo rồi, sáng chỉ ăn một miếng bánh ngọt nhỏ. / B: Đói à? Trong túi tớ có sô-cô-la, cho cậu này. — 肚子: bụng.', answer: 'F' },
              { n: 52, zh: 'A：这两瓶饮料有什么区别吗？\nB：左边这瓶有点儿（　），右边这瓶是甜的。', vn: 'A: Hai chai đồ uống này có gì khác nhau không? / B: Chai bên trái hơi chua, chai bên phải thì ngọt. — 酸: chua (đối với 甜: ngọt).', answer: 'D' },
              { n: 53, zh: 'A：快点儿，咱们的飞机就要起飞了。\nB：没事，（　）里说，国际航班都推迟起飞了，咱可以再逛逛。', vn: 'A: Nhanh lên, máy bay của chúng ta sắp cất cánh rồi. / B: Không sao, loa phát thanh nói các chuyến bay quốc tế đều hoãn rồi, mình còn đi dạo được. — 广播: loa phát thanh.', answer: 'E' },
              { n: 54, zh: 'A：最近怎么穿得这么（　）？很精神啊。\nB：我现在开始上班了，这是公司的规定。', vn: 'A: Dạo này sao ăn mặc trang trọng thế? Trông rất phong độ. / B: Giờ tớ bắt đầu đi làm rồi, đây là quy định của công ty. — 正式: trang trọng, chỉnh tề.', answer: 'B' },
              { n: 55, zh: 'A：你好，我想办一张信用卡。\nB：好的，先生，请您先（　）一下这张申请表。', vn: 'A: Chào chị, tôi muốn làm một thẻ tín dụng. / B: Vâng, thưa anh, mời anh điền vào tờ đơn đăng ký này trước. — 填: điền.', answer: 'A' }
            ] }
          ]
        },
        {
          name: 'Phần 2', range: [56, 65], type: 'order', intro: 'Sắp xếp ba câu A, B, C thành đoạn văn đúng. Bấm lần lượt các câu; bấm câu đã xếp để bỏ ra.',
          questions: [
            { n: 56, items: [{ k: 'A', zh: '做事情往往需要照顾大的方面' }, { k: 'B', zh: '而放弃掉“森林”' }, { k: 'C', zh: '换句话说，就是不要仅仅为了一棵“大树”' }], answer: 'ACB', vn: 'Làm việc thường cần chú ý đến đại cục, nói cách khác, đừng chỉ vì một "cái cây lớn" mà bỏ mất cả "khu rừng". — 换句话说 giải thích lại A; 为了…而… nối C với B.' },
            { n: 57, items: [{ k: 'A', zh: '于是大家都以为他是一个骄傲的人' }, { k: 'B', zh: '他从来不主动和别人说话' }, { k: 'C', zh: '其实他只是有点儿害羞' }], answer: 'BAC', vn: 'Anh ấy chưa bao giờ chủ động nói chuyện với người khác, thế là mọi người đều tưởng anh là người kiêu ngạo, thực ra anh chỉ hơi nhút nhát thôi. — 于是 nối kết quả, 其实 đính chính.' },
            { n: 58, items: [{ k: 'A', zh: '语法是语言学习中很重要的一部分' }, { k: 'B', zh: '却不是语言学习的全部' }, { k: 'C', zh: '文化在语言学习中也很重要' }], answer: 'ABC', vn: 'Ngữ pháp là một phần rất quan trọng trong việc học ngôn ngữ, nhưng lại không phải là toàn bộ; văn hóa trong việc học ngôn ngữ cũng rất quan trọng. — 却 chuyển ý sau A.' },
            { n: 59, items: [{ k: 'A', zh: '选择在电视上做广告' }, { k: 'B', zh: '扩大我们葡萄酒的影响力' }, { k: 'C', zh: '是因为它可以在较短的时间内' }], answer: 'ACB', vn: 'Chọn quảng cáo trên truyền hình là vì nó có thể trong thời gian khá ngắn mở rộng sức ảnh hưởng của rượu vang chúng ta. — …是因为…: sở dĩ… là vì….' },
            { n: 60, items: [{ k: 'A', zh: '这种树叶宽、厚的绿色植物' }, { k: 'B', zh: '也能给我们带来一个好的心情' }, { k: 'C', zh: '不仅可以使室内空气更新鲜' }], answer: 'ACB', vn: 'Loại cây xanh lá rộng, dày này không chỉ làm không khí trong phòng trong lành hơn mà còn mang lại cho chúng ta tâm trạng tốt. — 不仅…也…; A là chủ ngữ.' },
            { n: 61, items: [{ k: 'A', zh: '就受到人们的普遍欢迎' }, { k: 'B', zh: '当时的人们没想到它会给环境带来严重的污染' }, { k: 'C', zh: '100年前，塑料一出现' }], answer: 'CAB', vn: '100 năm trước, nhựa vừa xuất hiện đã được mọi người hoan nghênh rộng rãi, người thời đó không ngờ nó lại gây ô nhiễm nghiêm trọng cho môi trường. — 一…就…: vừa… đã….' },
            { n: 62, items: [{ k: 'A', zh: '首先要学会像扔垃圾一样把烦恼扔掉' }, { k: 'B', zh: '生活中总会有烦恼' }, { k: 'C', zh: '要想让自己轻松、愉快' }], answer: 'BCA', vn: 'Cuộc sống lúc nào cũng có phiền muộn, muốn bản thân được thoải mái, vui vẻ thì trước tiên phải học cách vứt bỏ phiền muộn như vứt rác. — 要想…首先要….' },
            { n: 63, items: [{ k: 'A', zh: '“明”由两个字组成' }, { k: 'B', zh: '左边的“日”代表太阳，而右边的“月”代表月亮' }, { k: 'C', zh: '所以“明”在汉语中表示有光亮的意思' }], answer: 'ABC', vn: 'Chữ "明" gồm hai chữ ghép lại, chữ "日" bên trái tượng trưng cho mặt trời, còn chữ "月" bên phải tượng trưng cho mặt trăng, vì thế "明" trong tiếng Hán mang nghĩa sáng sủa. — 所以 kết luận ở cuối.' },
            { n: 64, items: [{ k: 'A', zh: '河水不深，非常清' }, { k: 'B', zh: '我记得，以前村子的旁边有一条小河' }, { k: 'C', zh: '清得可以看见河底的水草和成群的小鱼' }], answer: 'BAC', vn: 'Tôi nhớ trước đây cạnh làng có một con sông nhỏ, nước sông không sâu, rất trong, trong đến mức nhìn thấy cả rong dưới đáy và từng đàn cá nhỏ. — 清得可以… nối tiếp 非常清.' },
            { n: 65, items: [{ k: 'A', zh: '可惜到现在仍然没有一个科学的说法' }, { k: 'B', zh: '有些人甚至专门写过这方面的书' }, { k: 'C', zh: '很多人都曾经试着对梦进行解释' }], answer: 'CBA', vn: 'Nhiều người từng thử giải thích giấc mơ, một số người thậm chí còn viết sách chuyên về lĩnh vực này, đáng tiếc đến nay vẫn chưa có một cách giải thích khoa học. — 甚至 tăng tiến, 可惜 kết lại.' }
          ]
        },
        {
          name: 'Phần 3', range: [66, 85], type: 'mc', intro: 'Đọc đoạn văn, chọn đáp án đúng.',
          groups: [
            { range: [66, 66], questions: [
              { n: 66, zh: '司机喝酒后不允许开车。因为无论对自己还是对其他人，这样做都是极其危险的。', star: '根据这段话，司机：', options: [{ zh: '很危险' }, { zh: '爱喝啤酒' }, { zh: '都很友好' }, { zh: '酒后不能开车' }], answer: 'D', vn: 'Tài xế không được lái xe sau khi uống rượu. Vì dù với bản thân hay với người khác, làm vậy đều cực kỳ nguy hiểm. ★ Theo đoạn văn, tài xế: A rất nguy hiểm · B thích uống bia · C đều rất thân thiện · D uống rượu rồi không được lái xe.' }
            ] },
            { range: [67, 67], questions: [
              { n: 67, zh: '最有用的人，不一定是最能说的人。上天给我们两只耳朵、一个嘴，就是让我们多听少说的。学会多听，说明一个人真正成熟了。', star: '这段话告诉我们：', options: [{ zh: '要多听' }, { zh: '要准时' }, { zh: '要多表扬别人' }, { zh: '要严格要求自己' }], answer: 'A', vn: 'Người có ích nhất chưa chắc là người nói giỏi nhất. Trời cho ta hai tai, một miệng là để ta nghe nhiều nói ít. Biết lắng nghe nhiều chứng tỏ một người đã thật sự trưởng thành. ★ Đoạn văn cho ta biết: A phải nghe nhiều · B phải đúng giờ · C phải khen người khác nhiều · D phải nghiêm khắc với bản thân.' }
            ] },
            { range: [68, 68], questions: [
              { n: 68, zh: '孩子从小就要养成管理自己的好习惯。管理自己不但指自己的事情自己做，更重要的是时间管理，让孩子会计划自己的时间，今天应该完成的事情就不能留到明天，不要总说“来不及了”。', star: '为什么有的孩子总说“来不及了”？', options: [{ zh: '太懒' }, { zh: '很孤单' }, { zh: '爱开玩笑' }, { zh: '不会管理时间' }], answer: 'D', vn: 'Trẻ em từ nhỏ phải hình thành thói quen tốt tự quản lý bản thân. Tự quản lý không chỉ là việc của mình tự làm, quan trọng hơn là quản lý thời gian, để trẻ biết lên kế hoạch thời gian, việc hôm nay phải xong thì không để sang ngày mai, đừng lúc nào cũng nói "không kịp rồi". ★ Vì sao có trẻ luôn nói "không kịp rồi"? A quá lười · B rất cô đơn · C thích đùa · D không biết quản lý thời gian.' }
            ] },
            { range: [69, 69], questions: [
              { n: 69, zh: '您看这个沙发怎么样？我们年底有活动，正在打折，比平时便宜了一千块。不过您放心，质量肯定不“打折”，这种沙发是今年最流行的，有很多种颜色可以选择，您可以考虑一下。', star: '这种沙发：', options: [{ zh: '不打折' }, { zh: '特别软' }, { zh: '样子很流行' }, { zh: '质量不合格' }], answer: 'C', vn: 'Anh/chị thấy chiếc sô-pha này thế nào? Cuối năm chúng tôi có chương trình khuyến mãi, đang giảm giá, rẻ hơn bình thường một nghìn tệ. Nhưng xin yên tâm, chất lượng chắc chắn không "giảm giá", loại sô-pha này là mốt nhất năm nay, có nhiều màu để chọn, anh/chị có thể cân nhắc. ★ Loại sô-pha này: A không giảm giá · B đặc biệt êm · C kiểu dáng rất thịnh hành · D chất lượng không đạt.' }
            ] },
            { range: [70, 70], questions: [
              { n: 70, zh: '当我觉得累的时候，我就找一个安静的地方，一边喝茶一边听音乐。弟弟正好和我相反，这种时候，他喜欢去热闹的地方，和别人一起唱歌、跳舞。', star: '弟弟累的时候：', options: [{ zh: '讨厌约会' }, { zh: '喜欢玩电脑' }, { zh: '会找我聊天' }, { zh: '会去唱歌跳舞' }], answer: 'D', vn: 'Khi thấy mệt, tôi tìm một nơi yên tĩnh, vừa uống trà vừa nghe nhạc. Em trai tôi thì ngược lại, những lúc như vậy nó thích đến chỗ náo nhiệt, cùng mọi người ca hát, nhảy múa. ★ Khi mệt, em trai: A ghét hẹn hò · B thích chơi máy tính · C sẽ tìm tôi trò chuyện · D sẽ đi hát, nhảy.' }
            ] },
            { range: [71, 71], questions: [
              { n: 71, zh: '只有动作没有感情的表演是没有生命力的，一个好的演员，想要拉近和观众的距离，就要学会用感情和观众进行对话与交流。', star: '表演要具有生命力，应该重视什么？', options: [{ zh: '生命' }, { zh: '感情' }, { zh: '动作' }, { zh: '感觉' }], answer: 'B', vn: 'Màn diễn chỉ có động tác mà không có cảm xúc thì không có sức sống. Một diễn viên giỏi muốn rút ngắn khoảng cách với khán giả thì phải học cách dùng tình cảm để đối thoại, giao lưu với khán giả. ★ Muốn màn diễn có sức sống, nên coi trọng điều gì? A sinh mệnh · B tình cảm · C động tác · D cảm giác.' }
            ] },
            { range: [72, 72], questions: [
              { n: 72, zh: '这是一家在当地非常有名的面馆儿，历史已经超过50年了。它一直只卖一种东西：牛肉面。由于面的味道很特别，在众多食客中名气很大。', star: '这家面馆儿：', options: [{ zh: '顾客不多' }, { zh: '只卖羊肉汤' }, { zh: '在全国很有名' }, { zh: '有半个世纪了' }], answer: 'D', vn: 'Đây là một quán mì rất nổi tiếng ở địa phương, đã có lịch sử hơn 50 năm. Quán chỉ bán duy nhất một món: mì bò. Vì hương vị mì rất đặc biệt nên quán rất có tiếng trong giới thực khách. ★ Quán mì này: A ít khách · B chỉ bán canh thịt dê · C nổi tiếng khắp cả nước · D đã có nửa thế kỷ.' }
            ] },
            { range: [73, 73], questions: [
              { n: 73, zh: '晚上，我刚刚躺下，就响起了敲门声。一猜就知道是和我一起租房的那个人又没带钥匙。他好像特别马虎，虽然每次都红着脸向我说抱歉、打扰了，可过不了几天，就又能听到他的敲门声了。', star: '敲门的那个人怎么了？', options: [{ zh: '生病了' }, { zh: '走错门了' }, { zh: '工作太忙' }, { zh: '忘拿钥匙了' }], answer: 'D', vn: 'Buổi tối, tôi vừa nằm xuống đã nghe tiếng gõ cửa. Đoán là biết ngay anh chàng thuê chung nhà với tôi lại quên mang chìa khóa. Anh ta có vẻ rất đãng trí, tuy lần nào cũng đỏ mặt xin lỗi tôi vì làm phiền, nhưng chẳng được mấy hôm lại nghe tiếng gõ cửa của anh ta. ★ Người gõ cửa bị làm sao? A bị ốm · B đi nhầm cửa · C công việc quá bận · D quên mang chìa khóa.' }
            ] },
            { range: [74, 74], questions: [
              { n: 74, zh: '同情是最美好的情感之一，然而同情并不是高高在上的关心，它应该是对别人经历的情感的理解、尊重和支持。', star: '这段话认为，同情：', options: [{ zh: '很无聊' }, { zh: '让人难受' }, { zh: '不是可怜' }, { zh: '是暂时的' }], answer: 'C', vn: 'Đồng cảm là một trong những tình cảm đẹp nhất, nhưng đồng cảm không phải là sự quan tâm từ trên cao nhìn xuống, mà nên là sự thấu hiểu, tôn trọng và ủng hộ đối với những cảm xúc người khác đã trải qua. ★ Đoạn văn cho rằng đồng cảm: A rất nhàm chán · B khiến người ta khó chịu · C không phải là thương hại · D chỉ là tạm thời.' }
            ] },
            { range: [75, 75], questions: [
              { n: 75, zh: '猜猜我奶奶给了我什么生日礼物？一个照相机！正好明天去海洋馆，我来给你们照相吧。', star: '奶奶给孙子买照相机，是因为：', options: [{ zh: '想鼓励他' }, { zh: '他过生日' }, { zh: '春节快到了' }, { zh: '要去海洋馆' }], answer: 'B', vn: 'Đoán xem bà tặng tớ quà sinh nhật gì? Một chiếc máy ảnh! Vừa hay mai đi thủy cung, để tớ chụp ảnh cho các cậu. ★ Bà mua máy ảnh cho cháu là vì: A muốn động viên cháu · B cháu đón sinh nhật · C sắp đến Tết · D sắp đi thủy cung.' }
            ] },
            { range: [76, 76], questions: [
              { n: 76, zh: '这座楼一共有28层，为了节约您的时间，3号、4号电梯17层以下不停，直接到17-28层，如果您要到1-16层，请乘坐西边的1号和2号电梯。', star: '1号电梯可以去哪层？', options: [{ zh: '16' }, { zh: '17' }, { zh: '18' }, { zh: '19' }], answer: 'A', vn: 'Tòa nhà này có tổng cộng 28 tầng, để tiết kiệm thời gian cho quý khách, thang máy số 3, số 4 không dừng dưới tầng 17 mà đi thẳng lên tầng 17–28; nếu quý khách lên tầng 1–16, xin đi thang máy số 1 và số 2 ở phía tây. ★ Thang máy số 1 có thể lên tầng mấy? A 16 · B 17 · C 18 · D 19.' }
            ] },
            { range: [77, 77], questions: [
              { n: 77, zh: '我姓李，是各位的导游。这是大家的护照和房卡，放下行李后请到这里集合，我们一会儿去吃饭。晚上有京剧，座位要提前联系，想看的现在报名。', star: '导游让大家报名去：', options: [{ zh: '参观' }, { zh: '吃饭' }, { zh: '看京剧' }, { zh: '参加演出' }], answer: 'C', vn: 'Tôi họ Lý, là hướng dẫn viên của các vị. Đây là hộ chiếu và thẻ phòng của mọi người, đặt hành lý xong xin tập trung ở đây, lát nữa chúng ta đi ăn. Buổi tối có Kinh kịch, chỗ ngồi phải liên hệ trước, ai muốn xem thì đăng ký ngay bây giờ. ★ Hướng dẫn viên bảo mọi người đăng ký đi: A tham quan · B ăn cơm · C xem Kinh kịch · D tham gia biểu diễn.' }
            ] },
            { range: [78, 78], questions: [
              { n: 78, zh: '经过他的努力，公司的生意越做越大，最近又在三个城市开了新的分公司。一切都在往好的方向发展，他也更有信心了。', star: '公司现在怎么样？', options: [{ zh: '收入减少' }, { zh: '发展很快' }, { zh: '主要制造家具' }, { zh: '不适应市场变化' }], answer: 'B', vn: 'Nhờ sự nỗ lực của anh ấy, việc kinh doanh của công ty ngày càng lớn, gần đây lại mở thêm chi nhánh mới ở ba thành phố. Mọi thứ đều đang phát triển theo hướng tốt, anh ấy cũng tự tin hơn. ★ Công ty hiện nay thế nào? A thu nhập giảm · B phát triển rất nhanh · C chủ yếu sản xuất đồ gỗ · D không thích nghi với biến động thị trường.' }
            ] },
            { range: [79, 79], questions: [
              { n: 79, zh: '我们对失败应该有正确的认识。偶尔的失败其实可以让我们清楚自己还有什么地方需要提高，这可以帮助我们走向最后的成功。', star: '“这”指的是：', options: [{ zh: '仔细' }, { zh: '认真' }, { zh: '失败' }, { zh: '准确的判断' }], answer: 'C', vn: 'Chúng ta nên có nhận thức đúng về thất bại. Thất bại đôi khi thực ra giúp ta biết rõ mình còn chỗ nào cần nâng cao, điều này có thể giúp ta tiến tới thành công cuối cùng. ★ "这" (điều này) chỉ: A tỉ mỉ · B nghiêm túc · C thất bại · D phán đoán chính xác.' }
            ] },
            { range: [80, 81], zh: '年轻人刚刚进入社会的时候，不要太急着赚钱，不要眼睛里只有工资和奖金。实际上，正确的做法应该是，在工作的前几年，重点要丰富自己的工作经验，学习与同事们交流的方法，积累专业的知识和技术，还有，要懂得什么是职业的态度等。这些比收入重要多了。', questions: [
              { n: 80, star: '什么更重要？', options: [{ zh: '经验' }, { zh: '友谊' }, { zh: '标准' }, { zh: '过程' }], answer: 'A', vn: 'Người trẻ khi mới bước vào xã hội đừng quá vội kiếm tiền, đừng chỉ chăm chăm vào lương và thưởng. Thực tế, cách làm đúng là trong mấy năm đầu đi làm, trọng tâm là làm phong phú kinh nghiệm làm việc, học cách giao tiếp với đồng nghiệp, tích lũy kiến thức và kỹ thuật chuyên môn, ngoài ra còn phải hiểu thế nào là thái độ chuyên nghiệp… Những điều này quan trọng hơn thu nhập nhiều. ★ Điều gì quan trọng hơn? A kinh nghiệm · B tình bạn · C tiêu chuẩn · D quá trình.' },
              { n: 81, star: '这段话主要提醒刚进入社会的年轻人：', options: [{ zh: '要有耐心' }, { zh: '要信任别人' }, { zh: '人都有缺点' }, { zh: '不要怀疑自己' }], answer: 'A', vn: '★ Đoạn văn chủ yếu nhắc người trẻ mới vào đời: A phải kiên nhẫn (đừng vội kiếm tiền) · B phải tin người khác · C ai cũng có khuyết điểm · D đừng nghi ngờ bản thân.' }
            ] },
            { range: [82, 83], zh: '《富爸爸，穷爸爸》讲了这样一个故事，作者的父亲和朋友的父亲对金钱的看法完全不同，这使他对金钱有了兴趣，最终，他接受了朋友的父亲的看法，也就是书中所说的“富爸爸”的看法：人们不应该为钱工作，而要让钱为我们工作。', questions: [
              { n: 82, star: '这本书中的穷爸爸是指：', options: [{ zh: '金钱' }, { zh: '工作' }, { zh: '作者的爸爸' }, { zh: '朋友的爸爸' }], answer: 'C', vn: 'Cuốn "Cha giàu, cha nghèo" kể câu chuyện thế này: bố của tác giả và bố của một người bạn có quan niệm về tiền bạc hoàn toàn khác nhau, điều đó khiến tác giả có hứng thú với tiền bạc; cuối cùng anh chấp nhận quan niệm của bố người bạn, tức quan niệm của "người cha giàu" trong sách: con người không nên làm việc vì tiền, mà phải để tiền làm việc cho mình. ★ "Người cha nghèo" trong cuốn sách này là: A tiền bạc · B công việc · C bố của tác giả · D bố của người bạn.' },
              { n: 83, star: '富爸爸对金钱的看法是：', options: [{ zh: '先赚再花' }, { zh: '钱并不重要' }, { zh: '钱让人快乐' }, { zh: '让钱为我们服务' }], answer: 'D', vn: '★ Quan niệm về tiền bạc của "người cha giàu" là: A kiếm trước tiêu sau · B tiền không quan trọng · C tiền mang lại niềm vui · D để tiền phục vụ chúng ta.' }
            ] },
            { range: [84, 85], zh: '中国南北距离约5500公里，因此南北气候有很大区别。南方很多地方的冬天一点儿也不冷，温度跟北方春天差不多，2月份的时候已经很暖和，可以只穿一件毛衣了，树开始长出新叶子，路边的花也开了，非常漂亮。所以很多北方人都喜欢这个时候出发去南方旅游。不过可惜的是，南方很多地方冬天都看不到雪，孩子们少了玩雪的快乐。', questions: [
              { n: 84, star: '南方很多地方，2月：', options: [{ zh: '树变绿了' }, { zh: '都是晴天' }, { zh: '逐渐变冷' }, { zh: '会突然下雪' }], answer: 'A', vn: 'Trung Quốc từ bắc xuống nam dài khoảng 5500 km, vì thế khí hậu hai miền khác nhau rất nhiều. Mùa đông ở nhiều nơi miền Nam chẳng lạnh chút nào, nhiệt độ gần bằng mùa xuân miền Bắc; tháng 2 đã rất ấm, chỉ cần mặc một chiếc áo len, cây bắt đầu ra lá non, hoa ven đường cũng nở, rất đẹp. Vì vậy nhiều người miền Bắc thích lúc này đi du lịch miền Nam. Có điều đáng tiếc là nhiều nơi ở miền Nam mùa đông không có tuyết, trẻ con mất đi niềm vui chơi tuyết. ★ Ở nhiều nơi miền Nam, tháng 2: A cây đã xanh · B toàn ngày nắng · C lạnh dần · D bỗng có tuyết.' },
              { n: 85, star: '这段话主要介绍什么？', options: [{ zh: '2月的天气' }, { zh: '南北的不同' }, { zh: '南方的冬天' }, { zh: '南方的风景' }], answer: 'C', vn: '★ Đoạn văn chủ yếu giới thiệu điều gì? A thời tiết tháng 2 · B sự khác nhau giữa hai miền · C mùa đông miền Nam · D phong cảnh miền Nam.' }
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
            { n: 86, words: ['好处', '抽烟', '对身体', '没有'], answer: '抽烟对身体没有好处。', vn: 'Hút thuốc không có lợi gì cho sức khỏe. — 对 + đối tượng + 没有好处.' },
            { n: 87, words: ['我', '陪叔叔', '去长城', '看看', '打算'], answer: '我打算陪叔叔去长城看看。', vn: 'Tôi định đưa chú đi Vạn Lý Trường Thành chơi. — 打算 + 陪 + người + 去 + nơi + 看看.' },
            { n: 88, words: ['个', '又脏又破', '那', '白色的盒子'], answer: '那个白色的盒子又脏又破。', vn: 'Cái hộp màu trắng kia vừa bẩn vừa rách. — 又…又….' },
            { n: 89, words: ['妹妹', '弹钢琴的声音', '吵醒了', '把爷爷'], answer: '妹妹弹钢琴的声音把爷爷吵醒了。', vn: 'Tiếng đàn piano của em gái làm ông tỉnh giấc. — Câu chữ 把: A 把 B 吵醒了.' },
            { n: 90, words: ['语言表达能力', '经常阅读报纸', '提高', '能'], answer: '经常阅读报纸能提高语言表达能力。', vn: 'Thường xuyên đọc báo có thể nâng cao khả năng diễn đạt ngôn ngữ.' },
            { n: 91, words: ['举行', '这次电影艺术节', '在北京', '也许', '会'], answer: '这次电影艺术节也许会在北京举行。', accept: ['也许这次电影艺术节会在北京举行。'], vn: 'Liên hoan phim lần này có lẽ sẽ được tổ chức ở Bắc Kinh. (Đáp án chấp nhận cả 也许 đứng đầu câu.)' },
            { n: 92, words: ['整理', '儿子的复习笔记', '得', '很详细'], answer: '儿子的复习笔记整理得很详细。', vn: 'Vở ghi ôn tập của con trai được sắp xếp rất chi tiết. — Bổ ngữ trạng thái: 整理得 + 很详细.' },
            { n: 93, words: ['请假休息', '重感冒', '让他', '不得不'], answer: '重感冒让他不得不请假休息。', vn: 'Cảm nặng khiến anh ấy đành phải xin nghỉ. — 让 + người + 不得不 + động từ.' },
            { n: 94, words: ['范围', '他说的问题', '今天讨论的', '超出了'], answer: '他说的问题超出了今天讨论的范围。', vn: 'Vấn đề anh ấy nói đã vượt ra ngoài phạm vi thảo luận hôm nay.' },
            { n: 95, words: ['告诉他', '答案', '你', '最好', '别'], answer: '你最好别告诉他答案。', accept: ['最好你别告诉他答案。'], vn: 'Tốt nhất là bạn đừng nói đáp án cho anh ấy. — 最好 + 别 + động từ.' }
          ]
        },
        {
          name: 'Phần 2', range: [96, 100], type: 'pic-write', intro: 'Nhìn tranh, dùng từ cho sẵn viết một câu.', example: 'Ví dụ: (乒乓球) 她很喜欢打乒乓球。',
          questions: [
            { n: 96, img: 'w96.jpg', word: '吃惊', answer: '她听了以后很吃惊。', accept: ['听到这个消息，她非常吃惊。', '她吃惊地张大了嘴。'], vn: 'Nghe xong cô ấy rất ngạc nhiên.' },
            { n: 97, img: 'w97.jpg', word: '汗', answer: '她出了许多汗。', accept: ['她跑完步出了许多汗。', '运动以后，她满头都是汗。'], vn: 'Cô ấy đổ rất nhiều mồ hôi.' },
            { n: 98, img: 'w98.jpg', word: '挂', answer: '他想把画挂在墙上。', accept: ['他正在往墙上挂一张画。', '这张画挂在这儿怎么样？'], vn: 'Anh ấy muốn treo bức tranh lên tường.' },
            { n: 99, img: 'w99.jpg', word: '香', answer: '这些花闻起来很香。', accept: ['这束花真香啊！', '她觉得这些花香极了。'], vn: 'Những bông hoa này ngửi rất thơm.' },
            { n: 100, img: 'w100.jpg', word: '杂志', answer: '他坐在沙发上看杂志。', accept: ['他一边喝咖啡一边看杂志。', '这本杂志很有意思。'], vn: 'Anh ấy ngồi trên sô-pha đọc tạp chí.' }
          ]
        }
      ]
    }
  ]
};
