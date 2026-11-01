// Đề thi thử HSK 3 – Đề số 1 (đề mẫu chính thức H31001 của Hanban).
// Cấu trúc: 3 phần thi (Nghe 40 câu, Đọc 30 câu, Viết 10 câu), tổng 80 câu, 90 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 300, đạt từ 180.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
  id: 'hsk3-test-1',
  level: 'HSK 3',
  title: 'HSK 3 - Test 1',
  code: 'H31001',
  durationSec: 90 * 60,
  maxScore: 300,
  passScore: 180,
  img: '/exam/img/hsk3-test-1/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk3-test-1.mp3',
      note: 'Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'pic-match',
          intro: 'Nghe hội thoại và chọn hình phù hợp.',
          groups: [
            {
              range: [1, 5], pics: { A: 'l1a-A.png', B: 'l1a-B.png', C: 'l1a-C.png', D: 'l1a-D.png', E: 'l1a-E.png', F: 'l1a-F.png' },
              example: 'Ví dụ: 男：喂，请问张经理在吗？ 女：他正在开会，您半个小时以后再打，好吗？→ D',
              questions: [
                { n: 1, answer: 'B', audio: [104.2, 136.1], script: '女：你一直看手表，有什么着急的事情吗？\n男：我九点前必须回到办公室，经理有事情找我，再见。', scriptVn: 'Nữ: Anh cứ nhìn đồng hồ mãi, có việc gì gấp à? / Nam: Trước chín giờ tôi phải về văn phòng, giám đốc có việc tìm tôi, tạm biệt.' },
                { n: 2, answer: 'C', audio: [140.9, 164.2], script: '男：你想什么呢？要出去吗？\n女：明天同学结婚，我在想穿哪双鞋好呢。', scriptVn: 'Nam: Em đang nghĩ gì thế? Định ra ngoài à? / Nữ: Mai bạn học em cưới, em đang nghĩ nên đi đôi giày nào.' },
                { n: 3, answer: 'E', audio: [169.3, 193.5], script: '女：你每天都骑自行车上下班？\n男：是，我骑了四个月了，一共瘦了六斤。', scriptVn: 'Nữ: Ngày nào anh cũng đạp xe đi làm à? / Nam: Ừ, tôi đạp bốn tháng rồi, gầy đi tổng cộng sáu cân (3 kg).' },
                { n: 4, answer: 'F', audio: [198.6, 221.1], script: '男：真的不需要吃药吗？\n女：不需要，回去多喝水，休息两天就好了。', scriptVn: 'Nam: Thật sự không cần uống thuốc sao? / Nữ: Không cần, về nhà uống nhiều nước, nghỉ hai ngày là khỏi.' },
                { n: 5, answer: 'A', audio: [226, 259.6], script: '女：你看，上次出现的问题，我已经解决了。\n男：好极了！只是你要注意身体，我记得你有一个多星期没去跑步了。', scriptVn: 'Nữ: Anh xem, vấn đề lần trước em đã giải quyết xong rồi. / Nam: Tuyệt quá! Chỉ là em phải chú ý sức khỏe, anh nhớ là hơn một tuần rồi em không đi chạy bộ.' }
              ]
            },
            {
              range: [6, 10], pics: { A: 'l1b-A.png', B: 'l1b-B.png', C: 'l1b-C.png', D: 'l1b-D.png', E: 'l1b-E.png' },
              questions: [
                { n: 6, answer: 'B', audio: [270.9, 296.5], script: '男：他总是哭，有什么办法可以让他不哭吗？\n女：给他一块儿糖，或者和他做游戏。', scriptVn: 'Nam: Thằng bé cứ khóc mãi, có cách nào làm nó nín không? / Nữ: Cho nó một viên kẹo, hoặc chơi trò chơi với nó.' },
                { n: 7, answer: 'C', audio: [301.6, 325.8], script: '女：这个电子词典的作用大不大？\n男：很大，我做练习的时候，它很有帮助。', scriptVn: 'Nữ: Cuốn từ điển điện tử này có tác dụng nhiều không? / Nam: Rất nhiều, lúc anh làm bài tập nó giúp ích lắm.' },
                { n: 8, answer: 'A', audio: [330.6, 363.7], script: '男：眼镜，帽子，地图，啤酒，一个也不能少。\n女：好了，准备得很认真，我相信你已经准备好了。', scriptVn: 'Nam: Kính, mũ, bản đồ, bia, không thiếu thứ nào được. / Nữ: Được rồi, chuẩn bị rất kỹ, em tin là anh đã chuẩn bị xong.' },
                { n: 9, answer: 'D', audio: [368.6, 393.4], script: '女：我做饭，你洗盘子和碗，怎么样？\n男：那还是我做饭吧，我愿意做饭。', scriptVn: 'Nữ: Em nấu cơm, anh rửa đĩa bát, được không? / Nam: Thế thì để anh nấu cơm, anh thích nấu ăn hơn.' },
                { n: 10, answer: 'E', audio: [399, 422.4], script: '男：告诉我你想看什么节目。\n女：没什么好看的，我还是读我的书吧。', scriptVn: 'Nam: Nói anh nghe em muốn xem chương trình gì. / Nữ: Chẳng có gì hay, em đọc sách của em thì hơn.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [11, 20], type: 'judge-text',
          intro: 'Nghe đoạn văn, phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 11, star: '北京话和普通话是相同的。', answer: false, audio: [520.3, 557.1], script: '我以前以为北京话就是普通话，到北京两年后，我才发现不是这样的。', scriptVn: 'Trước đây tôi tưởng tiếng Bắc Kinh chính là tiếng phổ thông, đến Bắc Kinh hai năm sau tôi mới phát hiện không phải như vậy.', starVn: 'Tiếng Bắc Kinh và tiếng phổ thông giống nhau.' },
            { n: 12, star: '会议室在8层。', answer: true, audio: [563.9, 607.4], script: '你明天到办公室找我，我在七零七；如果我不在，你就上八楼，到八零三会议室找我，我可能在那儿开会。', scriptVn: 'Mai anh đến văn phòng tìm tôi, tôi ở phòng 707; nếu tôi không có ở đó thì anh lên tầng tám, đến phòng họp 803 tìm tôi, có thể tôi đang họp ở đó.', starVn: 'Phòng họp ở tầng 8.' },
            { n: 13, star: '他已经到了。', answer: false, audio: [614.1, 646], script: '我已经从图书馆出来了，那几本书都还了，你们等我一会儿，我很快就到。', scriptVn: 'Tôi đã ra khỏi thư viện rồi, mấy cuốn sách đó trả hết rồi, các cậu đợi tôi một lát, tôi sẽ đến ngay.', starVn: 'Anh ấy đã đến rồi.' },
            { n: 14, star: '这是辆旧车。', answer: true, audio: [652.8, 681.8], script: '这辆车现在能卖十万块钱吧，我两年前买的时候花了二十多万。', scriptVn: 'Chiếc xe này bây giờ bán được khoảng một trăm nghìn tệ, hai năm trước lúc tôi mua mất hơn hai trăm nghìn.', starVn: 'Đây là một chiếc xe cũ.' },
            { n: 15, star: '小孩子爱吃蛋糕。', answer: true, audio: [688.6, 745.5], script: '有些人不喜欢吃蛋糕，是因为太甜了；有些人不喜欢吃蛋糕，是因为害怕长胖。但小孩子看见蛋糕是不会客气的，他们认为蛋糕越甜越好吃。', scriptVn: 'Có người không thích ăn bánh ga-tô vì quá ngọt; có người không thích vì sợ béo. Nhưng trẻ con thấy bánh ga-tô thì chẳng khách sáo đâu, chúng cho rằng bánh càng ngọt càng ngon.', starVn: 'Trẻ con thích ăn bánh ga-tô.' },
            { n: 16, star: '他在北京玩了很多地方。', answer: false, audio: [752.3, 797], script: '我这次来北京，只能住三天，所以我只能选择一两个最有名的地方去看看，以后有机会再去别的地方。', scriptVn: 'Lần này tôi đến Bắc Kinh chỉ ở được ba ngày, nên chỉ chọn được một hai nơi nổi tiếng nhất để đi xem, sau này có dịp sẽ đi những nơi khác.', starVn: 'Anh ấy đã đi chơi rất nhiều nơi ở Bắc Kinh.' },
            { n: 17, star: '周明坐火车时喜欢看报纸。', answer: true, audio: [803.8, 844.6], script: '每次坐火车前，周明都会去超市买一些东西，除了面包、水果，他还要买一些报纸。', scriptVn: 'Mỗi lần trước khi đi tàu hỏa, Chu Minh đều ra siêu thị mua ít đồ, ngoài bánh mì, hoa quả, anh ấy còn mua thêm mấy tờ báo.', starVn: 'Chu Minh thích đọc báo khi đi tàu hỏa.' },
            { n: 18, star: '他喜欢音乐，也喜欢运动。', answer: true, audio: [851.3, 890.9], script: '他有很多爱好，唱歌、画画儿、踢足球、玩儿音乐，什么都会，而且水平也都特别高。', scriptVn: 'Anh ấy có nhiều sở thích: hát, vẽ tranh, đá bóng, chơi nhạc, cái gì cũng biết, mà trình độ cái nào cũng rất cao.', starVn: 'Anh ấy thích âm nhạc, cũng thích thể thao.' },
            { n: 19, star: '她对自己的工作没兴趣。', answer: false, audio: [897.6, 935.3], script: '她每天到办公室的第一件事就是打开电脑，看电子邮件，然后才开始别的工作。', scriptVn: 'Việc đầu tiên mỗi ngày khi cô ấy đến văn phòng là mở máy tính, đọc thư điện tử, sau đó mới bắt đầu các việc khác.', starVn: 'Cô ấy không có hứng thú với công việc của mình.' },
            { n: 20, star: '他们在买空调。', answer: false, audio: [941.9, 980.8], script: '您先看看这种颜色的怎么样？这种手机很便宜，只要两千多块钱。它还可以照相，现在卖得很不错。', scriptVn: 'Anh xem thử màu này thế nào? Loại điện thoại này rất rẻ, chỉ hơn hai nghìn tệ. Nó còn chụp ảnh được, bây giờ bán rất chạy.', starVn: 'Họ đang mua điều hòa.' }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '迟到了' }, { zh: '生病了' }, { zh: '生气了' }], answer: 'B', audio: [1044, 1080.1], script: '女：大家都很关心您的身体，现在好些了吗？\n男：没事，不用担心。就是感冒发烧，很快就会好的。\n问：男的怎么了？', scriptVn: 'Nữ: Mọi người đều rất quan tâm sức khỏe của ông, bây giờ đỡ hơn chưa? / Nam: Không sao, đừng lo. Chỉ bị cảm sốt thôi, sẽ khỏi nhanh thôi. / Hỏi: Người đàn ông bị làm sao? (A đến muộn · B bị ốm · C tức giận)' },
            { n: 22, options: [{ zh: '教室' }, { zh: '机场' }, { zh: '宾馆' }], answer: 'C', audio: [1090.4, 1121.2], script: '男：服务员，我房间里的灯坏了。\n女：好的，先生，我马上让人来换一个。\n问：他们最可能在哪里？', scriptVn: 'Nam: Phục vụ ơi, đèn trong phòng tôi hỏng rồi. / Nữ: Vâng thưa anh, tôi cho người đến thay ngay. / Hỏi: Họ có khả năng đang ở đâu nhất? (A lớp học · B sân bay · C khách sạn)' },
            { n: 23, options: [{ zh: '有两只' }, { zh: '爱跳舞' }, { zh: '是新来的' }], answer: 'C', audio: [1131.5, 1167.6], script: '女：真奇怪，动物园里今天怎么这么安静？\n男：大家都在那边儿看新来的大熊猫呢。\n问：关于大熊猫，可以知道什么？', scriptVn: 'Nữ: Lạ thật, sao hôm nay vườn thú yên tĩnh thế? / Nam: Mọi người đều đang ở đằng kia xem con gấu trúc mới đến. / Hỏi: Về con gấu trúc, có thể biết điều gì? (A có hai con · B thích nhảy múa · C mới được đưa đến)' },
            { n: 24, options: [{ zh: '一次' }, { zh: '两次' }, { zh: '三次' }], answer: 'C', audio: [1178, 1211.1], script: '男：又下雪了！今年下过几次雪了？\n女：已经下过两次了，这是第三次了。\n问：今年下了几次雪了？', scriptVn: 'Nam: Lại có tuyết rồi! Năm nay tuyết rơi mấy lần rồi? / Nữ: Đã rơi hai lần rồi, đây là lần thứ ba. / Hỏi: Năm nay tuyết đã rơi mấy lần? (A một · B hai · C ba lần)' },
            { n: 25, options: [{ zh: '商店' }, { zh: '书店' }, { zh: '学校东门' }], answer: 'B', audio: [1221.5, 1261.7], script: '女：我现在就在学校西门，但我没找到你说的书店。\n男：你再向南走两百米就能看到了，我就在书店门口等你。\n问：女的要去哪儿？', scriptVn: 'Nữ: Em đang ở ngay cổng tây của trường, nhưng không tìm thấy hiệu sách anh nói. / Nam: Em đi tiếp về phía nam hai trăm mét là thấy, anh đợi em ở cửa hiệu sách. / Hỏi: Người phụ nữ muốn đi đâu? (A cửa hàng · B hiệu sách · C cổng đông của trường)' },
            { n: 26, options: [{ zh: '汉语' }, { zh: '历史' }, { zh: '数学' }], answer: 'C', audio: [1272.1, 1309.8], script: '男：我看您对中国历史很了解，您是教历史的吗？\n女：不是，我是教数学的，但我对历史很有兴趣。\n问：女的是教什么的？', scriptVn: 'Nam: Tôi thấy cô rất am hiểu lịch sử Trung Quốc, cô dạy lịch sử phải không? / Nữ: Không, tôi dạy toán, nhưng tôi rất hứng thú với lịch sử. / Hỏi: Người phụ nữ dạy môn gì? (A tiếng Hán · B lịch sử · C toán)' },
            { n: 27, options: [{ zh: '喜欢看球赛' }, { zh: '喜欢打篮球' }, { zh: '喜欢参加比赛' }], answer: 'A', audio: [1320.3, 1350.7], script: '女：你喜欢踢足球吗？\n男：我很少踢足球，但是我喜欢看足球比赛。\n问：男的主要是什么意思？', scriptVn: 'Nữ: Anh có thích đá bóng không? / Nam: Anh ít khi đá bóng, nhưng anh thích xem các trận bóng đá. / Hỏi: Ý chính của người đàn ông là gì? (A thích xem thi đấu bóng · B thích chơi bóng rổ · C thích tham gia thi đấu)' },
            { n: 28, options: [{ zh: '买个新的' }, { zh: '买个贵的' }, { zh: '先借一个' }], answer: 'A', audio: [1361.1, 1394.6], script: '男：这个冰箱太旧了，我们买个新的吧。\n女：同意，去年我就跟你说应该换一个新的了。\n问：女的希望怎么样？', scriptVn: 'Nam: Cái tủ lạnh này cũ quá rồi, mình mua cái mới đi. / Nữ: Đồng ý, năm ngoái em đã nói với anh là nên thay cái mới rồi. / Hỏi: Người phụ nữ mong muốn thế nào? (A mua cái mới · B mua cái đắt · C mượn tạm một cái)' },
            { n: 29, options: [{ zh: '上网' }, { zh: '爬山' }, { zh: '游泳' }], answer: 'B', audio: [1404.9, 1443.6], script: '女：休息一下吧，我现在腿也疼，脚也疼。上来的时候我怎么没觉得这么累。\n男：上山容易下山难，你不知道？\n问：他们做什么了？', scriptVn: 'Nữ: Nghỉ một chút đi, giờ em đau cả chân cả bàn chân. Lúc đi lên sao em không thấy mệt thế này. / Nam: Lên núi dễ, xuống núi khó, em không biết à? / Hỏi: Họ đã làm gì? (A lên mạng · B leo núi · C bơi)' },
            { n: 30, options: [{ zh: '国外' }, { zh: '飞机上' }, { zh: '老地方' }], answer: 'C', audio: [1454.1, 1488.6], script: '男：我明天早上的飞机，今天中午有时间见个面吗？\n女：好的，那我们还是老地方见。\n问：他们打算在哪儿见面？', scriptVn: 'Nam: Sáng mai anh bay rồi, trưa nay em có thời gian gặp nhau không? / Nữ: Được, vậy mình vẫn gặp ở chỗ cũ nhé. / Hỏi: Họ định gặp nhau ở đâu? (A nước ngoài · B trên máy bay · C chỗ cũ)' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 40], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '习惯' }, { zh: '天气' }, { zh: '文化' }], answer: 'B', audio: [1567.8, 1615.1], script: '男：刚才天气多好啊，突然就刮起大风了。\n女：北方的秋天就是这样的。\n男：你是南方人，你们那儿这个季节怎么样？\n女：也刮风，但没有这么大。\n问：他们在说什么？', scriptVn: 'Nam: Vừa nãy trời đẹp thế, bỗng dưng nổi gió to. / Nữ: Mùa thu ở miền bắc là như vậy đấy. / Nam: Em là người miền nam, mùa này ở chỗ em thế nào? / Nữ: Cũng có gió, nhưng không to thế này. / Hỏi: Họ đang nói về gì? (A thói quen · B thời tiết · C văn hóa)' },
            { n: 32, options: [{ zh: '夫妻' }, { zh: '妈妈和儿子' }, { zh: '爸爸和女儿' }], answer: 'B', audio: [1625.6, 1666.3], script: '女：你准备了几双筷子？\n男：三双啊。\n女：再拿两双，你爷爷奶奶一会儿就过来，我们一起吃。\n男：好，妈，碗在哪儿呢？\n问：说话人最可能是什么关系？', scriptVn: 'Nữ: Con chuẩn bị mấy đôi đũa? / Nam: Ba đôi ạ. / Nữ: Lấy thêm hai đôi, lát nữa ông bà nội con sang, cả nhà ăn cùng. / Nam: Vâng, mẹ ơi, bát ở đâu ạ? / Hỏi: Hai người có khả năng là quan hệ gì nhất? (A vợ chồng · B mẹ và con trai · C bố và con gái)' },
            { n: 33, options: [{ zh: '很矮' }, { zh: '很大' }, { zh: '黄色的' }], answer: 'B', audio: [1676.8, 1721.5], script: '男：我帮您拿行李吧。\n女：好的，谢谢你。那个蓝色的是我的。\n男：哪个是您的？\n女：右边那个最大的，蓝色的，上面有我的名字。\n问：那个行李箱是什么样的？', scriptVn: 'Nam: Để tôi xách hành lý giúp chị. / Nữ: Được, cảm ơn cậu. Cái màu xanh kia là của tôi. / Nam: Cái nào là của chị? / Nữ: Cái to nhất bên phải, màu xanh, trên có tên tôi. / Hỏi: Chiếc vali đó trông thế nào? (A rất thấp · B rất to · C màu vàng)' },
            { n: 34, options: [{ zh: '多云' }, { zh: '很热' }, { zh: '更冷' }], answer: 'C', audio: [1732, 1782.7], script: '女：明天是晴天还是阴天？\n男：晴天，比今天冷。\n女：那没关系，我不怕冷，我明天要穿我的新裙子。\n男：你决定了？好，我看你明天敢不敢穿。\n问：明天天气怎么样？', scriptVn: 'Nữ: Mai trời nắng hay âm u? / Nam: Trời nắng, lạnh hơn hôm nay. / Nữ: Thế thì không sao, em không sợ lạnh, mai em sẽ mặc váy mới. / Nam: Em quyết rồi à? Được, để xem mai em có dám mặc không. / Hỏi: Thời tiết ngày mai thế nào? (A nhiều mây · B rất nóng · C lạnh hơn)' },
            { n: 35, options: [{ zh: '邻居的' }, { zh: '客人的' }, { zh: '校长的' }], answer: 'A', audio: [1793.2, 1839.6], script: '男：李老师，您有两个孩子？\n女：不，我只有一个女儿。\n男：那照片上的这个女孩儿是谁？\n女：那是我们邻居的女儿，我女儿的好朋友。\n问：那个女孩儿是谁的孩子？', scriptVn: 'Nam: Cô Lý, cô có hai con ạ? / Nữ: Không, tôi chỉ có một con gái. / Nam: Vậy cô bé trong ảnh này là ai? / Nữ: Đó là con gái nhà hàng xóm, bạn thân của con gái tôi. / Hỏi: Cô bé đó là con của ai? (A của hàng xóm · B của khách · C của hiệu trưởng)' },
            { n: 36, options: [{ zh: '夏天来了' }, { zh: '月亮出来了' }, { zh: '天黑得早了' }], answer: 'C', audio: [1850.1, 1909.4], script: '女：现在天“短”了。\n男：天“短”了是什么意思？我没听懂。\n女：就是说白天的时间短了，天黑的时间早了，明白了？\n男：我明白了，就是晚上的时间长了，白天的时间短了。\n问：天“短”了表示什么意思？', scriptVn: 'Nữ: Bây giờ ngày "ngắn" lại rồi. / Nam: Ngày "ngắn" lại là ý gì? Anh nghe không hiểu. / Nữ: Tức là ban ngày ngắn lại, trời tối sớm hơn, hiểu chưa? / Nam: Anh hiểu rồi, tức là ban đêm dài ra, ban ngày ngắn lại. / Hỏi: "Ngày ngắn lại" nghĩa là gì? (A mùa hè đến · B trăng lên · C trời tối sớm hơn)' },
            { n: 37, options: [{ zh: '在二层' }, { zh: '影响不大' }, { zh: '已经结束了' }], answer: 'A', audio: [1919.9, 1975.1], script: '男：小姐，请问表演什么时候开始？\n女：下午两点半。\n男：谢谢，现在可以进去了吗？\n女：当然可以，我先看一下您的票，好，您向左走，坐电梯上二层。\n问：关于表演，下面哪个是对的？', scriptVn: 'Nam: Cô ơi, cho hỏi buổi biểu diễn mấy giờ bắt đầu? / Nữ: Hai giờ rưỡi chiều. / Nam: Cảm ơn, bây giờ vào được chưa? / Nữ: Tất nhiên rồi, tôi xem vé của anh trước đã, được rồi, anh rẽ trái, đi thang máy lên tầng hai. / Hỏi: Về buổi biểu diễn, câu nào đúng? (A ở tầng hai · B ảnh hưởng không lớn · C đã kết thúc)' },
            { n: 38, options: [{ zh: '不要离开' }, { zh: '给她写信' }, { zh: '有更好的成绩' }], answer: 'C', audio: [1985.6, 2022.3], script: '女：听说你要去国外读书？\n男：是，下周五的飞机。\n女：那祝你在新的一年里学习更上一层楼。\n男：谢谢您！\n问：女的希望男的怎么样？', scriptVn: 'Nữ: Nghe nói em sắp đi du học? / Nam: Vâng, chuyến bay thứ Sáu tuần sau ạ. / Nữ: Vậy chúc em năm mới học hành tiến bộ hơn nữa. / Nam: Cảm ơn cô ạ! / Hỏi: Người phụ nữ mong người đàn ông thế nào? (A đừng rời đi · B viết thư cho cô · C có thành tích tốt hơn)' },
            { n: 39, options: [{ zh: '衬衫里' }, { zh: '洗手间' }, { zh: '椅子上' }], answer: 'A', audio: [2032.8, 2077.3], script: '男：我的护照在你包里吗？\n女：没有啊，只有我的。你的放哪儿了？\n男：奇怪，我记得给你了。\n女：你看看，在你自己的衬衫里呢。\n问：护照是在哪儿找到的？', scriptVn: 'Nam: Hộ chiếu của anh có trong túi em không? / Nữ: Không có, chỉ có của em. Anh để của anh ở đâu? / Nam: Lạ thật, anh nhớ là đưa em rồi. / Nữ: Anh xem này, nó ở trong áo sơ mi của anh đấy. / Hỏi: Hộ chiếu được tìm thấy ở đâu? (A trong áo sơ mi · B nhà vệ sinh · C trên ghế)' },
            { n: 40, options: [{ zh: '在洗澡' }, { zh: '在睡觉' }, { zh: '在看新闻' }], answer: 'A', audio: [2088, 2145.5], script: '女：你在忙什么呢？刚才打你的手机你也不接。\n男：对不起，我刚洗了个澡，没听见，有什么事吗？\n女：我想问问你公司里的一些事情。\n男：你等一下，我去把电视的声音关小一些。\n问：男的刚才为什么没接电话？', scriptVn: 'Nữ: Anh đang bận gì thế? Vừa nãy gọi di động anh cũng không nghe. / Nam: Xin lỗi, anh vừa tắm nên không nghe thấy, có việc gì à? / Nữ: Em muốn hỏi anh vài chuyện ở công ty. / Nam: Em đợi chút, anh đi vặn nhỏ tiếng ti vi. / Hỏi: Vừa nãy vì sao người đàn ông không nghe điện thoại? (A đang tắm · B đang ngủ · C đang xem thời sự)' }
          ]
        }
      ]
    },
    {
      id: 'read', name: 'Đọc', icon: 'book',
      parts: [
        {
          name: 'Phần 1', range: [41, 50], type: 'sent-match',
          intro: 'Chọn câu ở trên có liên quan (câu đáp / câu ghép) với mỗi câu bên dưới.',
          groups: [
            {
              range: [41, 45],
              options: [
                { k: 'A', zh: '太好了！需要我帮忙吗？', vn: 'Tốt quá! Có cần mình giúp không?' },
                { k: 'B', zh: '今天把我饿坏了，还有什么吃的吗？', vn: 'Hôm nay mình đói lả rồi, còn gì ăn không?' },
                { k: 'C', zh: '你最好再检查一下，看还有没有问题。', vn: 'Tốt nhất con nên kiểm tra lại, xem còn sai chỗ nào không.' },
                { k: 'D', zh: '没问题，你就放心吧。', vn: 'Không vấn đề, cậu cứ yên tâm.' },
                { k: 'E', zh: '当然。我们先坐公共汽车，然后换地铁。', vn: 'Tất nhiên. Chúng ta đi xe buýt trước, sau đó đổi sang tàu điện ngầm.', used: true },
                { k: 'F', zh: '这条裤子你花了多少钱？', vn: 'Cái quần này cậu mua hết bao nhiêu tiền?' }
              ],
              example: 'Ví dụ: 你知道怎么去那儿吗？→ E',
              questions: [
                { n: 41, zh: '我的作业早就完成了。', vn: 'Bài tập của con làm xong từ lâu rồi.', answer: 'C' },
                { n: 42, zh: '你先来个苹果，我去给你做碗面条儿。', vn: 'Cậu ăn tạm quả táo trước, mình đi nấu cho cậu bát mì.', answer: 'B' },
                { n: 43, zh: '我终于有了自己的大房子了，明天就可以搬家了。', vn: 'Cuối cùng mình đã có căn nhà to của riêng mình, ngày mai là chuyển nhà được rồi.', answer: 'A' },
                { n: 44, zh: '这几天我不在家，小狗就请你帮我照顾了。', vn: 'Mấy ngày này mình không ở nhà, nhờ cậu chăm sóc con chó giúp mình nhé.', answer: 'D' },
                { n: 45, zh: '姐姐给我买的，我也不太清楚。', vn: 'Chị gái mua cho mình, mình cũng không rõ lắm.', answer: 'F' }
              ]
            },
            {
              range: [46, 50],
              options: [
                { k: 'A', zh: '银行马上就要关门了。', vn: 'Ngân hàng sắp đóng cửa rồi.' },
                { k: 'B', zh: '那是我叔叔的儿子，一岁多了。', vn: 'Đó là con trai của chú mình, hơn một tuổi rồi.' },
                { k: 'C', zh: '把菜单儿给我，我们喝杯绿茶吧？', vn: 'Đưa thực đơn cho mình, chúng ta uống cốc trà xanh nhé?' },
                { k: 'D', zh: '我的几个同事周末想去北京玩儿，但他们都不会开车。', vn: 'Mấy đồng nghiệp của mình cuối tuần muốn đi Bắc Kinh chơi, nhưng họ đều không biết lái xe.' },
                { k: 'E', zh: '昨天的雨下得非常大，我没带伞。', vn: 'Hôm qua mưa rất to, mình không mang ô.' }
              ],
              questions: [
                { n: 46, zh: '这个小孩儿胖胖的，真可爱。', vn: 'Đứa bé này mũm mĩm, đáng yêu thật.', answer: 'B' },
                { n: 47, zh: '我哥是司机，我问问他，看他有没有时间。', vn: 'Anh mình là tài xế, để mình hỏi xem anh ấy có thời gian không.', answer: 'D' },
                { n: 48, zh: '你怎么又生病了？', vn: 'Sao cậu lại ốm nữa rồi?', answer: 'E' },
                { n: 49, zh: '没关系，我明天去也可以。', vn: 'Không sao, mai mình đi cũng được.', answer: 'A' },
                { n: 50, zh: '好的，我也有些渴了。', vn: 'Được, mình cũng hơi khát rồi.', answer: 'C' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [51, 60], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          groups: [
            {
              range: [51, 55],
              words: [
                { k: 'A', zh: '其实' }, { k: 'B', zh: '感冒' }, { k: 'C', zh: '附近' },
                { k: 'D', zh: '舒服' }, { k: 'E', zh: '声音', used: true }, { k: 'F', zh: '把' }
              ],
              example: 'Ví dụ: 她说话的（ E ）多好听啊！',
              questions: [
                { n: 51, zh: '电影马上就要开始了，（　）手机关了吧。', vn: 'Phim sắp chiếu rồi, (hãy) tắt điện thoại đi. — 把 + tân ngữ + động từ.', answer: 'F' },
                { n: 52, zh: '他很高，这张桌子太低，坐着很不（　）。', vn: 'Anh ấy rất cao, cái bàn này thấp quá, ngồi rất không (thoải mái).', answer: 'D' },
                { n: 53, zh: '您可以选择火车站（　）的宾馆，住那儿会更方便。', vn: 'Ông có thể chọn khách sạn (gần) ga tàu, ở đó sẽ tiện hơn.', answer: 'C' },
                { n: 54, zh: '天气冷，你多穿点儿衣服，小心（　）。', vn: 'Trời lạnh, con mặc thêm áo vào, cẩn thận (bị cảm).', answer: 'B' },
                { n: 55, zh: '对一个女人来说，漂亮、聪明都很重要，但（　）更重要的是快乐。', vn: 'Đối với một người phụ nữ, xinh đẹp, thông minh đều quan trọng, nhưng (thật ra) quan trọng hơn là vui vẻ.', answer: 'A' }
              ]
            },
            {
              range: [56, 60],
              words: [
                { k: 'A', zh: '刻' }, { k: 'B', zh: '一直' }, { k: 'C', zh: '节' },
                { k: 'D', zh: '爱好', used: true }, { k: 'E', zh: '被' }, { k: 'F', zh: '打扫' }
              ],
              example: 'Ví dụ: A：你有什么（ D ）？ B：我喜欢体育。',
              questions: [
                { n: 56, zh: 'A：请问，现在是十一点吗？\nB：现在十一点十五了，您的表慢了一（　）。', vn: 'A: Xin hỏi, bây giờ là mười một giờ phải không? / B: Bây giờ mười một giờ mười lăm rồi, đồng hồ của ông chậm mất một (khắc = 15 phút).', answer: 'A' },
                { n: 57, zh: 'A：最近怎么（　）没看见他？\nB：他去旅游了，可能这个周末才能回来。', vn: 'A: Dạo này sao (mãi) không thấy anh ấy? / B: Anh ấy đi du lịch rồi, có lẽ cuối tuần này mới về được.', answer: 'B' },
                { n: 58, zh: 'A：牛奶呢？\nB：一定是（　）猫喝了。', vn: 'A: Sữa đâu rồi? / B: Chắc chắn là (bị) mèo uống rồi.', answer: 'E' },
                { n: 59, zh: 'A：你家的厨房真干净！\nB：当然了，为了欢迎你，我已经（　）了两个多小时了。', vn: 'A: Bếp nhà cậu sạch thật! / B: Tất nhiên, để đón cậu mình đã (dọn dẹp) hơn hai tiếng đồng hồ rồi.', answer: 'F' },
                { n: 60, zh: 'A：买这么多鲜花，今天是谁的生日啊？\nB：今天是9月10日，教师（　）！这是为老师准备的。', vn: 'A: Mua nhiều hoa tươi thế, hôm nay sinh nhật ai à? / B: Hôm nay là ngày 10 tháng 9, (ngày Nhà giáo)! Đây là hoa chuẩn bị cho thầy cô.', answer: 'C' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [61, 70], type: 'mc',
          intro: 'Đọc đoạn văn và chọn đáp án đúng cho câu hỏi ★.',
          questions: [
            { n: 61, zh: '人们常说：今天工作不努力，明天努力找工作。', star: '这句话的意思主要是：', options: [{ zh: '要努力工作' }, { zh: '明天会更好' }, { zh: '时间过得太快' }], answer: 'A', vn: 'Người ta thường nói: hôm nay làm việc không chăm chỉ, ngày mai phải chăm chỉ tìm việc. ★ Ý chính của câu này là: A phải làm việc chăm chỉ · B ngày mai sẽ tốt hơn · C thời gian trôi quá nhanh.' },
            { n: 62, zh: '请大家把黑板上的这些词写在本子上，回家后用这些词语写一个小故事，别忘了，最少写100字。', star: '说话人最可能是做什么的？', options: [{ zh: '老师' }, { zh: '学生' }, { zh: '经理' }], answer: 'A', vn: 'Các em hãy chép những từ trên bảng vào vở, về nhà dùng các từ này viết một câu chuyện nhỏ, đừng quên, viết ít nhất 100 chữ. ★ Người nói có khả năng làm nghề gì nhất? A giáo viên · B học sinh · C giám đốc.' },
            { n: 63, zh: '我对这儿很满意，虽然没有花园，但是离河边很近，那里有草地，有大树，还有鸟；虽然冬天天气很冷，但是空气新鲜，而且房间里一点儿也不冷。', star: '使他觉得满意的是：', options: [{ zh: '没有花园' }, { zh: '房间很大' }, { zh: '离河很近' }], answer: 'C', vn: 'Tôi rất hài lòng với nơi này, tuy không có vườn hoa nhưng rất gần bờ sông, ở đó có bãi cỏ, có cây to, còn có chim; tuy mùa đông trời rất lạnh nhưng không khí trong lành, hơn nữa trong phòng không lạnh chút nào. ★ Điều khiến anh ấy hài lòng là: A không có vườn hoa · B phòng rất rộng · C gần sông.' },
            { n: 64, zh: '昨天晚上睡得太晚，今天起床时已经8点多了，我刷了牙，洗了脸，就出来了，差点儿忘了关门。到了公司，会议已经开始了。没办法，我只能站在外面等休息时间。', star: '他今天早上：', options: [{ zh: '没复习' }, { zh: '迟到了' }, { zh: '忘了关门' }], answer: 'B', vn: 'Tối qua ngủ muộn quá, sáng nay dậy đã hơn 8 giờ, tôi đánh răng rửa mặt rồi ra khỏi nhà, suýt nữa quên đóng cửa. Đến công ty thì cuộc họp đã bắt đầu. Hết cách, tôi đành đứng ngoài chờ giờ nghỉ. ★ Sáng nay anh ấy: A không ôn bài · B đến muộn · C quên đóng cửa (chỉ "suýt quên").' },
            { n: 65, zh: '我去年春节去过一次上海，今年再去的时候，发现那里的变化非常大。经过那条街道时，我几乎不认识了。', star: '根据这段话，可以知道：', options: [{ zh: '现在是春节' }, { zh: '上海变化很大' }, { zh: '上海人很热情' }], answer: 'B', vn: 'Tết năm ngoái tôi đã đến Thượng Hải một lần, năm nay đến lại thì thấy nơi đó thay đổi rất nhiều. Đi qua con phố đó mà tôi gần như không nhận ra. ★ Theo đoạn văn có thể biết: A bây giờ là Tết · B Thượng Hải thay đổi rất nhiều · C người Thượng Hải rất nhiệt tình.' },
            { n: 66, zh: '世界真的很小，我昨天才发现，你给小张介绍的男朋友是我妻子以前的同事。', star: '小张的男朋友是我妻子：', options: [{ zh: '以前的同事' }, { zh: '以前的丈夫' }, { zh: '以前的男朋友' }], answer: 'A', vn: 'Thế giới thật nhỏ, hôm qua tôi mới phát hiện người bạn trai mà anh giới thiệu cho Tiểu Trương là đồng nghiệp cũ của vợ tôi. ★ Bạn trai của Tiểu Trương là … của vợ tôi: A đồng nghiệp cũ · B chồng cũ · C bạn trai cũ.' },
            { n: 67, zh: '下班后，在路上遇到一个老同学。好久没见面，我们就在公司旁边那个咖啡馆里坐了坐，一边喝咖啡一边说了些过去的事，所以回来晚了。', star: '根据这段话，可以知道：', options: [{ zh: '他回到家了' }, { zh: '他正在喝咖啡' }, { zh: '咖啡馆在公园旁边' }], answer: 'A', vn: 'Tan làm, trên đường tôi gặp một người bạn học cũ. Lâu lắm không gặp nên chúng tôi vào quán cà phê cạnh công ty ngồi một lát, vừa uống cà phê vừa kể chuyện ngày xưa, vì thế về muộn. ★ Theo đoạn văn có thể biết: A anh ấy đã về đến nhà · B anh ấy đang uống cà phê · C quán cà phê ở cạnh công viên.' },
            { n: 68, zh: '小刘是一位小学老师，教三年级的数学，他虽然很年轻，但是课讲得很好，同学们都很喜欢他。', star: '学生为什么喜欢刘老师？', options: [{ zh: '很年轻' }, { zh: '课讲得好' }, { zh: '对学生要求高' }], answer: 'B', vn: 'Tiểu Lưu là giáo viên tiểu học, dạy toán lớp ba, tuy còn rất trẻ nhưng giảng bài rất hay, học sinh đều rất quý thầy. ★ Vì sao học sinh thích thầy Lưu? A rất trẻ · B giảng bài hay · C yêu cầu học sinh cao.' },
            { n: 69, zh: '今天12号了，晚上陈阿姨要来家里，家里有菜，有鱼，还有些羊肉，但是没有水果了，你去买些香蕉、葡萄吧，再买个西瓜？', star: '家里需要买什么？', options: [{ zh: '鸡蛋' }, { zh: '水果' }, { zh: '果汁' }], answer: 'B', vn: 'Hôm nay ngày 12 rồi, tối nay dì Trần sẽ đến nhà, nhà có rau, có cá, còn ít thịt dê, nhưng hết hoa quả rồi, con đi mua ít chuối, nho nhé, mua thêm quả dưa hấu? ★ Nhà cần mua gì? A trứng gà · B hoa quả · C nước ép.' },
            { n: 70, zh: '有人问我长得像谁，这个问题不太好回答。家里人一般觉得我的鼻子和耳朵像我爸爸，眼睛像我妈妈。', star: '关于他，下面哪个是对的？', options: [{ zh: '头发很长' }, { zh: '不像妈妈' }, { zh: '鼻子像爸爸' }], answer: 'C', vn: 'Có người hỏi tôi giống ai, câu hỏi này không dễ trả lời. Người nhà thường thấy mũi và tai tôi giống bố, mắt giống mẹ. ★ Về anh ấy, câu nào đúng? A tóc rất dài · B không giống mẹ · C mũi giống bố.' }
          ]
        }
      ]
    },
    {
      id: 'write', name: 'Viết', icon: 'pencil',
      parts: [
        {
          name: 'Phần 1', range: [71, 75], type: 'arrange',
          intro: 'Bấm lần lượt các từ để sắp xếp thành câu hoàn chỉnh. Bấm vào từ đã xếp để bỏ ra.',
          example: 'Ví dụ: 小船 上 一 河 条 有 → 河上有一条小船。',
          questions: [
            { n: 71, words: ['弟弟', '笑了', '高兴', '地'], answer: '弟弟高兴地笑了。', vn: 'Em trai vui vẻ cười. — Trạng ngữ + 地 + động từ.' },
            { n: 72, words: ['简单', '上午', '的', '考试', '比较'], answer: '上午的考试比较简单。', vn: 'Bài thi buổi sáng tương đối dễ.' },
            { n: 73, words: ['越来越好', '变得', '这个', '城市的环境', '了'], answer: '这个城市的环境变得越来越好了。', vn: 'Môi trường của thành phố này ngày càng tốt hơn.' },
            { n: 74, words: ['送给他', '那位', '医生', '一个礼物'], answer: '那位医生送给他一个礼物。', vn: 'Vị bác sĩ đó tặng anh ấy một món quà.' },
            { n: 75, words: ['其他', '班的成绩', '有', '也', '很大', '提高'], answer: '其他班的成绩也有很大提高。', vn: 'Thành tích của các lớp khác cũng tiến bộ rất nhiều.' }
          ]
        },
        {
          name: 'Phần 2', range: [76, 80], type: 'write',
          intro: 'Nhìn pinyin, viết chữ Hán thích hợp vào chỗ trống.',
          example: 'Ví dụ: 没（关 guān）系，别难过，高兴点儿。',
          questions: [
            { n: 76, pre: '医院离这儿很远，我们坐', py: 'chū', post: '租车去吧。', answer: '出', vn: 'Bệnh viện cách đây rất xa, chúng ta đi taxi (出租车) đi.' },
            { n: 77, pre: '一', py: 'yuán', post: '是10角，一角是10分。', answer: '元', vn: 'Một tệ (元) là 10 hào, một hào là 10 xu.' },
            { n: 78, pre: '我不认识他，你知道他姓什么、', py: 'jiào', post: '什么吗？', answer: '叫', vn: 'Tôi không quen anh ấy, bạn có biết anh ấy họ gì, tên (叫) gì không?' },
            { n: 79, pre: '', py: 'Zhōng', post: '间穿红裙子的一定是他妹妹。', answer: '中', vn: 'Người mặc váy đỏ ở giữa (中间) chắc chắn là em gái anh ấy.' },
            { n: 80, pre: '我已经饱了，不想吃', py: 'mǐ', post: '饭了。', answer: '米', vn: 'Tôi no rồi, không muốn ăn cơm (米饭) nữa.' }
          ]
        }
      ]
    }
  ]
};
