// Đề thi thử HSK 4 – Đề số 6 (đề mẫu H41332 của Hanban).
// Cấu trúc: Nghe 45 câu (~30 phút), Đọc 40 câu, Viết 15 câu; tổng 100 câu, 105 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (theo tỉ lệ câu đúng), tổng 300, đạt từ 180.
// audio: [giây bắt đầu, giây kết thúc] từng câu trong file nghe (mỗi câu đọc 1 lần), dò bằng khoảng lặng (S\h4de\moc-hsk4.js).
// Đề không có 听力材料 (lời nghe): phần Nghe chỉ dịch câu ★ (starVn) và các phương án (vn); noScript: true.
// Sinh bằng S\h4de\gan-de-6.js 6 — sửa dữ liệu ở de-6.json / vn-6.js rồi chạy lại.
window.EXAM_DATA = {
  id: 'hsk4-test-6',
  level: 'HSK 4',
  title: 'HSK 4 - Test 6',
  code: 'H41332',
  noScript: true,
  durationSec: 105 * 60,
  maxScore: 300,
  passScore: 180,
  img: '/exam/img/hsk4-test-6/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones', audio: '/audio/exam/hsk4-test-6.mp3', note: 'Bấm 🔊 cạnh mỗi câu để nghe riêng câu đó (mỗi câu chỉ đọc 1 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-text', intro: 'Nghe đoạn ngắn, phán đoán câu ★ đúng hay sai.',
          questions: [
            { n: 1, star: '李经理不在办公室。', starVn: 'Giám đốc Lý không có ở văn phòng.', answer: true, audio: [123.3, 146], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 2, star: '他让小高写邀请信。', starVn: 'Anh ấy bảo Tiểu Cao viết thư mời.', answer: false, audio: [155.3, 173.9], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 3, star: '他俩从小就认识。', starVn: 'Hai người họ quen nhau từ nhỏ.', answer: false, audio: [183.3, 203.6], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 4, star: '叔叔现在还爱打篮球。', starVn: 'Bây giờ chú vẫn còn thích chơi bóng rổ.', answer: true, audio: [213, 236.3], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 5, star: '日记是他生活的一部分。', starVn: 'Nhật ký là một phần trong cuộc sống của anh ấy.', answer: true, audio: [245.6, 269.3], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 6, star: '他正在排队买票。', starVn: 'Anh ấy đang xếp hàng mua vé.', answer: false, audio: [278.6, 299.1], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 7, star: '他希望大家给他发短信。', starVn: 'Anh ấy mong mọi người gửi tin nhắn cho mình.', answer: false, audio: [308.5, 324.4], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 8, star: '生气时别急着做决定。', starVn: 'Khi tức giận đừng vội đưa ra quyết định.', answer: true, audio: [333.6, 350], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 9, star: '妻子觉得房子很便宜。', starVn: 'Người vợ thấy căn nhà rất rẻ.', answer: false, audio: [359.3, 377.3], vn: 'Đề này không kèm lời nghe (听力材料).' },
            { n: 10, star: '手机上网让生活更方便了。', starVn: 'Lên mạng bằng điện thoại khiến cuộc sống tiện lợi hơn.', answer: true, audio: [386.7, 408.1], vn: 'Đề này không kèm lời nghe (听力材料).' }
          ]
        },
        {
          name: 'Phần 2', range: [11, 25], type: 'mc', intro: 'Nghe hội thoại ngắn, chọn đáp án đúng.',
          questions: [
            { n: 11, options: [{ zh: '饺子' }, { zh: '羊肉' }, { zh: '面包' }, { zh: '饼干' }], answer: 'C', audio: [454.2, 476.9], vn: 'A sủi cảo · B thịt cừu · C bánh mì · D bánh quy' },
            { n: 12, options: [{ zh: '警察' }, { zh: '律师' }, { zh: '司机' }, { zh: '售货员' }], answer: 'C', audio: [492.3, 508.8], vn: 'A cảnh sát · B luật sư · C tài xế · D nhân viên bán hàng' },
            { n: 13, options: [{ zh: '要准时' }, { zh: '椅子不够' }, { zh: '会议推迟了' }, { zh: '不能换座位' }], answer: 'D', audio: [524.4, 541.1], vn: 'A phải đúng giờ · B không đủ ghế · C cuộc họp bị hoãn · D không được đổi chỗ ngồi' },
            { n: 14, options: [{ zh: '变瘦了' }, { zh: '发工资了' }, { zh: '生意谈成了' }, { zh: '签证办好了' }], answer: 'C', audio: [556.5, 571.7], vn: 'A gầy đi · B được phát lương · C bàn xong vụ làm ăn · D làm xong visa' },
            { n: 15, options: [{ zh: '约会' }, { zh: '取钱' }, { zh: '改密码' }, { zh: '买信封' }], answer: 'B', audio: [587.2, 606.2], vn: 'A hẹn hò · B rút tiền · C đổi mật khẩu · D mua phong bì' },
            { n: 16, options: [{ zh: '邮局' }, { zh: '教室' }, { zh: '地铁站' }, { zh: '卫生间' }], answer: 'D', audio: [621.6, 638.5], vn: 'A bưu điện · B phòng học · C ga tàu điện ngầm · D nhà vệ sinh' },
            { n: 17, options: [{ zh: '家具旧了' }, { zh: '裤子脏了' }, { zh: '眼镜破了' }, { zh: '镜子放低了' }], answer: 'D', audio: [654, 669.4], vn: 'A đồ đạc trong nhà cũ rồi · B quần bẩn rồi · C kính vỡ rồi · D gương treo thấp quá' },
            { n: 18, options: [{ zh: '洗碗' }, { zh: '扔垃圾' }, { zh: '拿毛巾' }, { zh: '打扫厨房' }], answer: 'C', audio: [684.8, 701.9], vn: 'A rửa bát · B đổ rác · C lấy khăn · D dọn bếp' },
            { n: 19, options: [{ zh: '很愉快' }, { zh: '很难过' }, { zh: '很伤心' }, { zh: '很紧张' }], answer: 'A', audio: [717.3, 733.8], vn: 'A rất vui vẻ · B rất buồn · C rất đau lòng · D rất căng thẳng' },
            { n: 20, options: [{ zh: '王教授' }, { zh: '李校长' }, { zh: '他孙女儿' }, { zh: '一位护士' }], answer: 'A', audio: [749.2, 768.6], vn: 'A giáo sư Vương · B hiệu trưởng Lý · C cháu gái ông ấy · D một cô y tá' },
            { n: 21, options: [{ zh: '5毛' }, { zh: '15元' }, { zh: '21元' }, { zh: '35元' }], answer: 'B', audio: [784, 808.8], vn: 'A 5 hào · B 15 tệ · C 21 tệ · D 35 tệ' },
            { n: 22, options: [{ zh: '眼睛疼' }, { zh: '被骗了' }, { zh: '昨晚没睡' }, { zh: '遇到了困难' }], answer: 'C', audio: [824.4, 840.3], vn: 'A đau mắt · B bị lừa · C tối qua không ngủ · D gặp khó khăn' },
            { n: 23, options: [{ zh: '脱袜子' }, { zh: '开空调' }, { zh: '擦桌子' }, { zh: '修理冰箱' }], answer: 'B', audio: [855.6, 873.1], vn: 'A cởi tất · B bật điều hòa · C lau bàn · D sửa tủ lạnh' },
            { n: 24, options: [{ zh: '事情解决了' }, { zh: '客人很吃惊' }, { zh: '任务没完成' }, { zh: '男的想请假' }], answer: 'A', audio: [888.5, 907.8], vn: 'A việc đã giải quyết xong · B khách rất ngạc nhiên · C nhiệm vụ chưa hoàn thành · D người nam muốn xin nghỉ' },
            { n: 25, options: [{ zh: '发烧了' }, { zh: '专业不符' }, { zh: '觉得辛苦' }, { zh: '要照顾母亲' }], answer: 'D', audio: [923.2, 942], vn: 'A bị sốt · B không đúng chuyên ngành · C thấy vất vả · D phải chăm sóc mẹ' }
          ]
        },
        {
          name: 'Phần 3', range: [26, 35], type: 'mc', intro: 'Nghe hội thoại dài, chọn đáp án đúng.',
          questions: [
            { n: 26, options: [{ zh: '做汤' }, { zh: '做蛋糕' }, { zh: '民族文化' }, { zh: '儿童音乐' }], answer: 'B', audio: [1004, 1036.6], vn: 'A nấu canh · B làm bánh ga-tô · C văn hóa dân tộc · D âm nhạc thiếu nhi' },
            { n: 27, options: [{ zh: '价格高' }, { zh: '不干净' }, { zh: '换货麻烦' }, { zh: '号码不合适' }], answer: 'D', audio: [1052, 1081.1], vn: 'A giá cao · B không sạch · C đổi hàng phiền phức · D cỡ (số) không vừa' },
            { n: 28, options: [{ zh: '别着急' }, { zh: '别粗心' }, { zh: '多练习' }, { zh: '别去深水区' }], answer: 'D', audio: [1096.4, 1120.3], vn: 'A đừng vội · B đừng cẩu thả · C luyện tập nhiều · D đừng ra chỗ nước sâu' },
            { n: 29, options: [{ zh: '迟到了' }, { zh: '要加班' }, { zh: '早上有课' }, { zh: '放暑假了' }], answer: 'C', audio: [1135.8, 1161.9], vn: 'A đến muộn · B phải tăng ca · C buổi sáng có tiết học · D được nghỉ hè rồi' },
            { n: 30, options: [{ zh: '年底' }, { zh: '出发前' }, { zh: '旅行回来' }, { zh: '儿子生日时' }], answer: 'D', audio: [1177.3, 1203.4], vn: 'A cuối năm · B trước khi xuất phát · C đi du lịch về · D vào sinh nhật con trai' },
            { n: 31, options: [{ zh: '饭店' }, { zh: '海洋馆' }, { zh: '动物园' }, { zh: '大使馆' }], answer: 'B', audio: [1218.9, 1239], vn: 'A khách sạn/nhà hàng · B thủy cung · C sở thú · D đại sứ quán' },
            { n: 32, options: [{ zh: '少吃辣' }, { zh: '去打针' }, { zh: '多喝水' }, { zh: '别总躺着' }], answer: 'A', audio: [1254.4, 1278.9], vn: 'A ăn ít đồ cay · B đi tiêm · C uống nhiều nước · D đừng nằm suốt' },
            { n: 33, options: [{ zh: '阴天' }, { zh: '降温了' }, { zh: '变暖了' }, { zh: '常刮风' }], answer: 'C', audio: [1294.3, 1320.3], vn: 'A trời âm u · B trời trở lạnh · C trời ấm lên · D hay có gió' },
            { n: 34, options: [{ zh: '预习' }, { zh: '填表格' }, { zh: '收拾房间' }, { zh: '整理材料' }], answer: 'A', audio: [1335.6, 1355.6], vn: 'A xem trước bài · B điền biểu mẫu · C dọn phòng · D sắp xếp tài liệu' },
            { n: 35, options: [{ zh: '腿长' }, { zh: '聪明' }, { zh: '有基础' }, { zh: '经常总结' }], answer: 'C', audio: [1371.1, 1394.6], vn: 'A chân dài · B thông minh · C có nền tảng · D thường xuyên tổng kết' }
          ]
        },
        {
          name: 'Phần 4', range: [36, 45], type: 'mc', intro: 'Nghe đoạn văn, trả lời 2 câu hỏi.',
          groups: [
            { range: [36, 37], questions: [
              { n: 36, options: [{ zh: '同事' }, { zh: '邻居' }, { zh: '房东' }, { zh: '服务员' }], answer: 'A', audio: [1410, 1452.4], vn: 'A đồng nghiệp · B hàng xóm · C chủ nhà · D nhân viên phục vụ' },
              { n: 37, options: [{ zh: '没零钱了' }, { zh: '输了比赛' }, { zh: '认错人了' }, { zh: '丢了钥匙' }], answer: 'C', audio: [1467.9, 1472.3], vn: 'A hết tiền lẻ · B thua trận đấu · C nhận nhầm người · D mất chìa khóa' }
            ] },
            { range: [38, 39], questions: [
              { n: 38, options: [{ zh: '只吃水果' }, { zh: '适合女性' }, { zh: '不能喝啤酒' }, { zh: '多吃巧克力' }], answer: 'A', audio: [1487.8, 1530.6], vn: 'A chỉ ăn hoa quả · B hợp với phụ nữ · C không được uống bia · D ăn nhiều sô-cô-la' },
              { n: 39, options: [{ zh: '很新鲜' }, { zh: '过程长' }, { zh: '不起作用' }, { zh: '对身体不好' }], answer: 'D', audio: [1546.1, 1552.1], vn: 'A rất tươi · B quá trình dài · C không có tác dụng · D không tốt cho sức khỏe' }
            ] },
            { range: [40, 41], questions: [
              { n: 40, options: [{ zh: '能打折' }, { zh: '送饮料' }, { zh: '能看表演' }, { zh: '存包免费' }], answer: 'A', audio: [1567.5, 1600.4], vn: 'A được giảm giá · B tặng đồ uống · C được xem biểu diễn · D gửi túi miễn phí' },
              { n: 41, options: [{ zh: '是导游' }, { zh: '年龄小' }, { zh: '很马虎' }, { zh: '在理发店工作' }], answer: 'D', audio: [1615.8, 1621.6], vn: 'A là hướng dẫn viên · B tuổi còn nhỏ · C rất cẩu thả · D làm ở tiệm cắt tóc' }
            ] },
            { range: [42, 43], questions: [
              { n: 42, options: [{ zh: '医院北边' }, { zh: '学校对面' }, { zh: '烤鸭店西边' }, { zh: '火车站旁边' }], answer: 'B', audio: [1637, 1672.7], vn: 'A phía bắc bệnh viện · B đối diện trường học · C phía tây quán vịt quay · D cạnh ga tàu hỏa' },
              { n: 43, options: [{ zh: '爱购物' }, { zh: '要去出差' }, { zh: '喜欢散步' }, { zh: '开了家餐厅' }], answer: 'B', audio: [1688.2, 1694.6], vn: 'A thích mua sắm · B sắp đi công tác · C thích đi dạo · D đã mở một nhà hàng' }
            ] },
            { range: [44, 45], questions: [
              { n: 44, options: [{ zh: '要有耐心' }, { zh: '人各有特点' }, { zh: '理想很重要' }, { zh: '植物需要阳光' }], answer: 'B', audio: [1710, 1747.4], vn: 'A phải kiên nhẫn · B mỗi người có nét riêng · C lý tưởng rất quan trọng · D cây cần ánh nắng' },
              { n: 45, options: [{ zh: '少考试' }, { zh: '多调查' }, { zh: '降低标准' }, { zh: '方法要多样' }], answer: 'D', audio: [1762.9, 1770.1], vn: 'A thi ít đi · B điều tra nhiều hơn · C hạ thấp tiêu chuẩn · D phương pháp phải đa dạng' }
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
            { range: [46, 50], words: [{ k: 'A', zh: '重' }, { k: 'B', zh: '首先' }, { k: 'C', zh: '观众' }, { k: 'D', zh: '坚持', used: true }, { k: 'E', zh: '擦' }, { k: 'F', zh: '地点' }], example: 'Ví dụ: 她每天都（ D ）走路上下班，所以身体一直很不错。', questions: [
              { n: 46, zh: '爷爷，为什么橡皮能（　）掉铅笔写的字？', vn: 'Ông ơi, sao cục tẩy lại xóa được chữ viết bằng bút chì ạ? — 擦掉: lau/tẩy sạch (擦 + bổ ngữ kết quả 掉).', answer: 'E' },
              { n: 47, zh: '这部电影非常感人，很多（　）都被感动得哭了。', vn: 'Bộ phim này rất cảm động, nhiều khán giả xúc động đến bật khóc. — 观众: khán giả.', answer: 'C' },
              { n: 48, zh: '不管别人怎么说，（　）你要对自己有信心才行。', vn: 'Dù người khác nói gì, trước hết bạn phải tự tin vào bản thân mới được. — 首先: trước hết, đầu tiên.', answer: 'B' },
              { n: 49, zh: '这次聚会的（　）是小李选的，时间也是他定的。', vn: 'Địa điểm buổi họp mặt lần này do Tiểu Lý chọn, thời gian cũng do cậu ấy quyết. — 地点: địa điểm (song song với 时间).', answer: 'F' },
              { n: 50, zh: '谢谢，不用了，这个行李箱一点儿都不（　），里面都是衣服。', vn: 'Cảm ơn, không cần đâu, cái vali này chẳng nặng chút nào, bên trong toàn là quần áo. — 一点儿都不 + tính từ: chẳng… chút nào; 重: nặng.', answer: 'A' }
            ] },
            { range: [51, 55], words: [{ k: 'A', zh: '难受' }, { k: 'B', zh: '郊区' }, { k: 'C', zh: '温度', used: true }, { k: 'D', zh: '流行' }, { k: 'E', zh: '香' }, { k: 'F', zh: '恐怕' }], example: 'Ví dụ: A：今天真冷啊，好像白天最高（ C ）才2℃。 B：刚才电视里说明天更冷。', questions: [
              { n: 51, zh: 'A：家里的果汁够吗？要不要再买几瓶？\nB：要是明天来的人多，（　）会不够，再买两瓶吧。', vn: 'A: Nước hoa quả ở nhà có đủ không? Có cần mua thêm mấy chai không? / B: Nếu mai nhiều người đến thì e là không đủ, mua thêm hai chai nữa đi. — 恐怕: e rằng, sợ là.', answer: 'F' },
              { n: 52, zh: 'A：听说公司明年要搬到（　），到时候我又得重新租房子了。\nB：这个消息准确吗？我怎么不知道？', vn: 'A: Nghe nói sang năm công ty sẽ chuyển ra ngoại ô, đến lúc đó tôi lại phải thuê nhà mới rồi. / B: Tin này có chính xác không? Sao tôi không biết nhỉ? — 郊区: ngoại ô.', answer: 'B' },
              { n: 53, zh: 'A：你稍微开慢点儿，我有点儿（　）。\nB：你怎么了？实在不行，我们在路边停下来休息会儿。', vn: 'A: Anh lái chậm lại một chút, em hơi khó chịu. / B: Em sao thế? Nếu thật sự không chịu được thì mình dừng bên đường nghỉ một lát. — 有点儿 + 难受: hơi khó chịu (trong người).', answer: 'A' },
              { n: 54, zh: 'A：面条儿做好了，快来吃吧。\nB：真（　）啊，我最喜欢吃你做的西红柿鸡蛋面了。', vn: 'A: Mì nấu xong rồi, mau lại ăn đi. / B: Thơm quá, em thích nhất món mì cà chua trứng anh nấu. — 香: thơm.', answer: 'E' },
              { n: 55, zh: 'A：姐，你觉得这条蓝色的裙子怎么样？\nB：挺好的，今年（　）蓝色，而且夏天穿这样的裙子也凉快。', vn: 'A: Chị ơi, chị thấy chiếc váy màu xanh này thế nào? / B: Đẹp đấy, năm nay đang thịnh hành màu xanh, hơn nữa mùa hè mặc váy thế này cũng mát. — 流行: thịnh hành, đang là mốt.', answer: 'D' }
            ] }
          ]
        },
        {
          name: 'Phần 2', range: [56, 65], type: 'order', intro: 'Sắp xếp ba câu A, B, C thành đoạn văn đúng. Bấm lần lượt các câu; bấm câu đã xếp để bỏ ra.',
          questions: [
            { n: 56, items: [{ k: 'A', zh: '意思是希望朋友之间的友好关系' }, { k: 'B', zh: '能够一直继续下去，越久越好' }, { k: 'C', zh: '人们常说“友谊地久天长”' }], answer: 'CAB', vn: 'Người ta thường nói "tình bạn dài lâu như trời đất", ý là mong tình cảm tốt đẹp giữa bạn bè có thể kéo dài mãi, càng lâu càng tốt. — C nêu câu nói, A giải thích (意思是…), B nói tiếp vế sau.' },
            { n: 57, items: [{ k: 'A', zh: '只要找出文中的关键信息' }, { k: 'B', zh: '就可以在短时间内了解文章的大意' }, { k: 'C', zh: '做到快速阅读其实不难，简单来说' }], answer: 'CAB', vn: 'Đọc nhanh thực ra không khó, nói đơn giản là chỉ cần tìm ra thông tin then chốt trong bài là có thể nắm được ý chính của bài trong thời gian ngắn. — 简单来说 dẫn vào cặp 只要…就….' },
            { n: 58, items: [{ k: 'A', zh: '请不要在园区内抽烟，谢谢' }, { k: 'B', zh: '欢迎大家来到国家森林公园' }, { k: 'C', zh: '为了保证您和他人的安全' }], answer: 'BCA', vn: 'Chào mừng mọi người đến với Công viên rừng quốc gia. Để đảm bảo an toàn cho quý khách và người khác, xin đừng hút thuốc trong khu công viên, xin cảm ơn. — Lời chào (B) → 为了… (C) → lời đề nghị (A).' },
            { n: 59, items: [{ k: 'A', zh: '如果你不能勇敢地走出第一步' }, { k: 'B', zh: '所以，千万不要因为害怕失败而不敢开始' }, { k: 'C', zh: '就永远没有机会获得成功' }], answer: 'ACB', vn: 'Nếu bạn không thể dũng cảm bước bước đầu tiên thì sẽ mãi mãi không có cơ hội thành công. Vì vậy, đừng bao giờ vì sợ thất bại mà không dám bắt đầu. — 如果…就…; 所以 rút ra kết luận.' },
            { n: 60, items: [{ k: 'A', zh: '不过这里以前比较安静' }, { k: 'B', zh: '我对这里当然熟悉了，我家原来就住这儿附近' }, { k: 'C', zh: '不像现在这么热闹' }], answer: 'BAC', vn: 'Tất nhiên tôi rất quen chỗ này, trước đây nhà tôi ở ngay gần đây. Có điều trước kia nơi này khá yên tĩnh, không náo nhiệt như bây giờ. — 不过 chuyển ý; C nói tiếp A.' },
            { n: 61, items: [{ k: 'A', zh: '就是有时语法上会有点儿小错误' }, { k: 'B', zh: '他的中文说得很流利' }, { k: 'C', zh: '但我们交流起来完全没问题' }], answer: 'BAC', vn: 'Anh ấy nói tiếng Trung rất lưu loát, chỉ là đôi khi có chút lỗi nhỏ về ngữ pháp, nhưng chúng tôi giao tiếp hoàn toàn không có vấn đề gì. — 就是: chỉ là (nhượng bộ nhẹ); 但 quay lại ý chính.' },
            { n: 62, items: [{ k: 'A', zh: '这样到时候你才不会手忙脚乱' }, { k: 'B', zh: '无论干什么事情' }, { k: 'C', zh: '最好都能提前做好计划' }], answer: 'BCA', vn: 'Dù làm việc gì, tốt nhất đều nên lên kế hoạch trước, như vậy đến lúc đó bạn mới không bị luống cuống. — 无论…都…; 这样…才… nêu kết quả.' },
            { n: 63, items: [{ k: 'A', zh: '意思是希望孩子能健健康康地长大' }, { k: 'B', zh: '“虎头鞋”因其前半部分像老虎头而得名' }, { k: 'C', zh: '有些地方父母会给一岁左右的孩子穿上这种鞋' }], answer: 'BCA', vn: '"Giày đầu hổ" có tên như vậy vì phần mũi giày giống đầu con hổ. Ở một số nơi, bố mẹ cho trẻ khoảng một tuổi đi loại giày này, ý là mong con lớn lên khỏe mạnh. — B giới thiệu, C nói phong tục (这种鞋), A giải thích ý nghĩa.' },
            { n: 64, items: [{ k: 'A', zh: '4年的留学生活很快就要结束了' }, { k: 'B', zh: '相信这些都会成为我日后的美好回忆' }, { k: 'C', zh: '我在这里经历了很多，也学到了很多' }], answer: 'ACB', vn: 'Bốn năm du học sắp kết thúc rồi, ở đây tôi đã trải qua nhiều điều, cũng học được rất nhiều. Tôi tin tất cả sẽ trở thành những kỷ niệm đẹp của tôi sau này. — 这些 ở B chỉ những điều nói ở C.' },
            { n: 65, items: [{ k: 'A', zh: '我们还是把它推到里面去吧' }, { k: 'B', zh: '把这个地方空出来' }, { k: 'C', zh: '沙发太大了，放这儿容易堵着门，进出不方便' }], answer: 'CAB', vn: 'Ghế sô-pha to quá, để đây dễ chắn cửa, ra vào bất tiện. Chúng ta đẩy nó vào trong đi, để trống chỗ này ra. — 它 ở A chỉ 沙发 ở C.' }
          ]
        },
        {
          name: 'Phần 3', range: [66, 85], type: 'mc', intro: 'Đọc đoạn văn, chọn đáp án đúng.',
          groups: [
            { range: [66, 66], questions: [
              { n: 66, zh: '各位乘客，大家好，感谢大家乘坐此次航班，我们的飞机将于20分钟后降落在北京首都国际机场。', star: '飞机：', options: [{ zh: '晚点了' }, { zh: '要降落了' }, { zh: '由北京出发' }, { zh: '刚起飞不久' }], answer: 'B', vn: 'Kính chào quý hành khách, cảm ơn quý khách đã đi chuyến bay này, máy bay của chúng ta sẽ hạ cánh xuống sân bay quốc tế Thủ đô Bắc Kinh sau 20 phút nữa. ★ Máy bay: A bị trễ giờ · B sắp hạ cánh · C xuất phát từ Bắc Kinh · D vừa cất cánh không lâu.' }
            ] },
            { range: [67, 67], questions: [
              { n: 67, zh: '上午来应聘的那个小伙子是学电子技术的，成绩很优秀，通过面试时和他的对话，感觉他的性格也不错，我觉得他挺适合这份工作的。', star: '他觉得那个小伙子怎么样？', options: [{ zh: '很帅' }, { zh: '不诚实' }, { zh: '性格好' }, { zh: '能力一般' }], answer: 'C', vn: 'Cậu thanh niên đến ứng tuyển sáng nay học ngành kỹ thuật điện tử, thành tích rất xuất sắc; qua cuộc trò chuyện lúc phỏng vấn, tôi thấy tính cách cậu ấy cũng tốt, tôi thấy cậu ấy khá hợp với công việc này. ★ Anh ấy thấy chàng trai đó thế nào? A rất đẹp trai · B không trung thực · C tính cách tốt · D năng lực bình thường.' }
            ] },
            { range: [68, 68], questions: [
              { n: 68, zh: '生活中有这样两种人：一种总是看别人怎么生活，另一种喜欢生活给别人看。其实，每个人有每个人的生活，不用羡慕他人，也用不着向别人证明什么，只要用心走好自己的路，幸福就在前方。', star: '根据这段话，我们应该：', options: [{ zh: '学会拒绝' }, { zh: '少发脾气' }, { zh: '保护自己' }, { zh: '过好自己的生活' }], answer: 'D', vn: 'Trong cuộc sống có hai kiểu người: một kiểu luôn nhìn xem người khác sống thế nào, kiểu kia thích sống cho người khác xem. Thực ra mỗi người có cuộc sống của riêng mình, không cần ngưỡng mộ người khác, cũng chẳng cần chứng minh điều gì với ai, chỉ cần dụng tâm đi tốt con đường của mình thì hạnh phúc ở ngay phía trước. ★ Theo đoạn văn, chúng ta nên: A học cách từ chối · B bớt nổi nóng · C bảo vệ bản thân · D sống tốt cuộc sống của mình.' }
            ] },
            { range: [69, 69], questions: [
              { n: 69, zh: '除了正式的名字，中国人一般都有个小名。往往孩子还没出生，父母就已经起好了小名。小名一般都比较好听好记，而且多数是两个相同的字，例如“乐乐”“笑笑”“聪聪”等。', star: '小名往往：', options: [{ zh: '比较好记' }, { zh: '都很浪漫' }, { zh: '不受重视' }, { zh: '是一种玩笑' }], answer: 'A', vn: 'Ngoài tên chính thức, người Trung Quốc thường có một tên ở nhà. Nhiều khi con chưa chào đời, bố mẹ đã đặt sẵn tên ở nhà. Tên ở nhà thường dễ nghe dễ nhớ, phần lớn gồm hai chữ giống nhau, ví dụ "Lạc Lạc", "Tiếu Tiếu", "Thông Thông"… ★ Tên ở nhà thường: A khá dễ nhớ · B đều rất lãng mạn · C không được coi trọng · D là một trò đùa.' }
            ] },
            { range: [70, 70], questions: [
              { n: 70, zh: '我叫张远，今天上午在图书馆丢了一张饭卡，卡上有我的姓名和学号。如果有同学看见了我的饭卡，请速与我联系，非常感谢。', star: '他写这段话的目的是：', options: [{ zh: '道歉' }, { zh: '找回饭卡' }, { zh: '通知朋友' }, { zh: '申请奖学金' }], answer: 'B', vn: 'Tôi là Trương Viễn, sáng nay tôi đánh rơi một thẻ ăn ở thư viện, trên thẻ có họ tên và mã số sinh viên của tôi. Bạn nào nhìn thấy thẻ ăn của tôi xin liên hệ ngay với tôi, cảm ơn rất nhiều. ★ Mục đích anh ấy viết đoạn này là: A xin lỗi · B tìm lại thẻ ăn · C báo cho bạn bè · D xin học bổng.' }
            ] },
            { range: [71, 71], questions: [
              { n: 71, zh: '时间是无价的，一个人再怎么有钱，也买不到时间。知识忘了可以重新学，钱花光了可以再赚，可是时间过去了就永远回不来了。', star: '这段话主要想告诉我们：', options: [{ zh: '要勇敢' }, { zh: '知识很重要' }, { zh: '要管理好钱' }, { zh: '不要浪费时间' }], answer: 'D', vn: 'Thời gian là vô giá, một người dù giàu đến đâu cũng không mua được thời gian. Kiến thức quên có thể học lại, tiền tiêu hết có thể kiếm lại, nhưng thời gian đã trôi qua thì mãi mãi không quay lại. ★ Đoạn văn chủ yếu muốn nói với chúng ta: A phải dũng cảm · B kiến thức rất quan trọng · C phải quản lý tốt tiền bạc · D đừng lãng phí thời gian.' }
            ] },
            { range: [72, 72], questions: [
              { n: 72, zh: '很多网站上都说，刷牙时在牙膏上加点儿盐，坚持一段时间，就能使牙变白。我打算试试，看看这个方法究竟有没有效。', star: '“这个方法”指的是：', options: [{ zh: '吃7分饱' }, { zh: '自备塑料袋' }, { zh: '皮肤增白法' }, { zh: '牙膏里加盐' }], answer: 'D', vn: 'Nhiều trang web nói rằng khi đánh răng cho thêm chút muối vào kem đánh răng, kiên trì một thời gian thì răng sẽ trắng ra. Tôi định thử xem rốt cuộc cách này có hiệu quả không. ★ "Cách này" chỉ: A ăn no bảy phần · B tự mang túi ni-lông · C cách làm trắng da · D cho muối vào kem đánh răng.' }
            ] },
            { range: [73, 73], questions: [
              { n: 73, zh: '山东省烟台市是中国著名的“苹果之都”。由于气候等自然条件较好，那儿的苹果个儿大，味道香甜，颜色也漂亮，吸引了很多人前去购买。', star: '烟台：', options: [{ zh: '空气差' }, { zh: '常下雪' }, { zh: '苹果很有名' }, { zh: '到处是葡萄树' }], answer: 'C', vn: 'Thành phố Yên Đài tỉnh Sơn Đông là "thủ phủ táo" nổi tiếng của Trung Quốc. Nhờ khí hậu và các điều kiện tự nhiên khá tốt, táo ở đó quả to, vị thơm ngọt, màu cũng đẹp, thu hút nhiều người đến mua. ★ Yên Đài: A không khí kém · B hay có tuyết · C táo rất nổi tiếng · D khắp nơi là cây nho.' }
            ] },
            { range: [74, 74], questions: [
              { n: 74, zh: '很多人习惯在早上锻炼身体，但室外锻炼并不是越早越好，尤其是冬天，日出前温度较低，并不适合运动。医生建议：冬季锻炼最好选在日出后，而且运动量不要太大，可以跑跑步、打打羽毛球等。', star: '冬季锻炼最好：', options: [{ zh: '在室内' }, { zh: '穿厚点儿' }, { zh: '日出后进行' }, { zh: '别超过半小时' }], answer: 'C', vn: 'Nhiều người quen tập thể dục buổi sáng, nhưng tập ngoài trời không phải càng sớm càng tốt, nhất là mùa đông, trước khi mặt trời mọc nhiệt độ khá thấp, không thích hợp vận động. Bác sĩ khuyên: mùa đông tốt nhất nên tập sau khi mặt trời mọc, lượng vận động cũng đừng quá lớn, có thể chạy bộ, đánh cầu lông… ★ Mùa đông tập thể dục tốt nhất: A trong nhà · B mặc dày một chút · C tập sau khi mặt trời mọc · D đừng quá nửa tiếng.' }
            ] },
            { range: [75, 75], questions: [
              { n: 75, zh: '这是本介绍最新科学发现和研究的杂志，它的语言简单易懂，而且十分幽默。像我这种对科学完全不感兴趣的人，读起来竟然也会觉得很有趣。', star: '那本杂志：', options: [{ zh: '页数很多' }, { zh: '很有意思' }, { zh: '很难理解' }, { zh: '是关于艺术的' }], answer: 'B', vn: 'Đây là cuốn tạp chí giới thiệu những phát hiện và nghiên cứu khoa học mới nhất, ngôn ngữ đơn giản dễ hiểu, lại rất hài hước. Người hoàn toàn không hứng thú với khoa học như tôi mà đọc vào cũng thấy rất thú vị. ★ Cuốn tạp chí đó: A rất nhiều trang · B rất thú vị · C rất khó hiểu · D nói về nghệ thuật.' }
            ] },
            { range: [76, 76], questions: [
              { n: 76, zh: '有些人对自己要求非常严格，不允许自己出现任何错误。虽然对自己要求高是好事，但谁都会有缺点，我们应该学会接受自己的缺点，并想办法把它们改掉。', star: '这段话告诉我们，要：', options: [{ zh: '有礼貌' }, { zh: '接受批评' }, { zh: '正确认识缺点' }, { zh: '学会原谅别人' }], answer: 'C', vn: 'Có người đòi hỏi bản thân rất nghiêm khắc, không cho phép mình mắc bất kỳ sai sót nào. Đòi hỏi cao ở bản thân tuy là điều tốt, nhưng ai cũng có khuyết điểm, chúng ta nên học cách chấp nhận khuyết điểm của mình và tìm cách sửa chúng. ★ Đoạn văn cho ta biết cần: A lễ phép · B chấp nhận phê bình · C nhìn nhận đúng khuyết điểm · D học cách tha thứ cho người khác.' }
            ] },
            { range: [77, 77], questions: [
              { n: 77, zh: '今天的晚会太精彩了，特别是那些外国留学生表演的中国功夫，动作既标准又好看，非常棒。以后如果还有这样的晚会，一定要告诉我啊。', star: '他认为功夫表演：', options: [{ zh: '好极了' }, { zh: '让人失望' }, { zh: '不太合格' }, { zh: '让人很放松' }], answer: 'A', vn: 'Buổi dạ hội hôm nay đặc sắc quá, nhất là màn võ thuật Trung Quốc do các du học sinh nước ngoài biểu diễn, động tác vừa chuẩn vừa đẹp, tuyệt lắm. Sau này nếu còn dạ hội như vậy nhất định phải báo cho tôi nhé. ★ Anh ấy cho rằng màn biểu diễn võ thuật: A tuyệt vời · B khiến người ta thất vọng · C không đạt lắm · D khiến người ta thư giãn.' }
            ] },
            { range: [78, 78], questions: [
              { n: 78, zh: '“责任感”指的是一种对工作负责的态度。一个人即使能力再高，经验再丰富，如果缺少责任感，也很难获得别人的尊重。', star: '责任感能使人：', options: [{ zh: '赢得尊重' }, { zh: '获得支持' }, { zh: '变得自信' }, { zh: '得到鼓励' }], answer: 'A', vn: '"Tinh thần trách nhiệm" là thái độ có trách nhiệm với công việc. Một người dù năng lực cao đến mấy, kinh nghiệm phong phú đến mấy, nếu thiếu tinh thần trách nhiệm thì cũng khó nhận được sự tôn trọng của người khác. ★ Tinh thần trách nhiệm giúp con người: A giành được sự tôn trọng · B nhận được sự ủng hộ · C trở nên tự tin · D được khích lệ.' }
            ] },
            { range: [79, 79], questions: [
              { n: 79, zh: '我叔叔以前是记者，因为职业的关系，他几乎走遍了亚洲所有的国家，看到了很多美景，也认识了许多朋友，后来他把自己的经历写成了一本书。', star: '他叔叔：', options: [{ zh: '力气很大' }, { zh: '爱看小说' }, { zh: '体育很好' }, { zh: '去过很多国家' }], answer: 'D', vn: 'Chú tôi trước đây là phóng viên, vì tính chất nghề nghiệp, chú gần như đã đi khắp các nước châu Á, được ngắm nhiều cảnh đẹp, cũng quen rất nhiều bạn bè; sau này chú viết những trải nghiệm của mình thành một cuốn sách. ★ Chú của anh ấy: A rất khỏe · B thích đọc tiểu thuyết · C giỏi thể thao · D đã đi nhiều nước.' }
            ] },
            { range: [80, 81], zh: '很晚了，5岁的女儿还在看电视。我对她说：“再看10分钟就去洗脸睡觉。”她不高兴地说：“10分钟太短了。”于是我说：“那就600秒，够长了吧？”女儿听后开心地说：“够了够了，妈妈真好。”', questions: [
              { n: 80, star: '她让女儿：', options: [{ zh: '洗澡' }, { zh: '快去睡' }, { zh: '早点儿起床' }, { zh: '弹会儿钢琴' }], answer: 'B', vn: 'Đã muộn rồi mà cô con gái 5 tuổi vẫn còn xem ti vi. Tôi bảo con: "Xem thêm 10 phút nữa rồi đi rửa mặt đi ngủ." Con không vui, nói: "10 phút ngắn quá." Thế là tôi nói: "Vậy thì 600 giây, đủ dài rồi chứ?" Con nghe xong vui vẻ nói: "Đủ rồi, đủ rồi, mẹ tốt quá." ★ Người mẹ bảo con gái: A tắm · B mau đi ngủ · C dậy sớm một chút · D đánh đàn piano một lúc.' },
              { n: 81, star: '女儿为什么后来又高兴了？', options: [{ zh: '鱼做好了' }, { zh: '收到礼物了' }, { zh: '受到表扬了' }, { zh: '以为时间增加了' }], answer: 'D', vn: '★ Vì sao sau đó con gái lại vui? A cá nấu xong rồi · B nhận được quà · C được khen · D tưởng thời gian được tăng thêm (600 giây thực ra chính là 10 phút).' }
            ] },
            { range: [82, 83], zh: '现在全世界大约80多个国家有高速公路。高速公路一般能适应每小时120公里或者更高的速度，其发展情况往往可以看出一个国家的交通及经济发展水平。高速公路既有优点也有缺点，优点是行车速度快，安全方便，可以减少铁路等方面的交通压力；缺点是对环境影响大、收费高。', questions: [
              { n: 82, star: '通过高速公路，可以判断该国的：', options: [{ zh: '经济水平' }, { zh: '教育情况' }, { zh: '汽车数量' }, { zh: '环境质量' }], answer: 'A', vn: 'Hiện nay trên thế giới có khoảng hơn 80 quốc gia có đường cao tốc. Đường cao tốc thường cho phép chạy 120 km/giờ hoặc nhanh hơn; tình hình phát triển của nó thường cho thấy trình độ phát triển giao thông và kinh tế của một nước. Đường cao tốc có cả ưu lẫn nhược điểm: ưu điểm là xe chạy nhanh, an toàn, tiện lợi, có thể giảm áp lực giao thông cho đường sắt…; nhược điểm là ảnh hưởng lớn đến môi trường, thu phí cao. ★ Qua đường cao tốc có thể đánh giá … của nước đó: A trình độ kinh tế · B tình hình giáo dục · C số lượng ô tô · D chất lượng môi trường.' },
              { n: 83, star: '高速公路有什么优点？', options: [{ zh: '不堵车' }, { zh: '污染小' }, { zh: '行车快且方便' }, { zh: '周围收费站少' }], answer: 'C', vn: '★ Đường cao tốc có ưu điểm gì? A không tắc đường · B ít ô nhiễm · C xe chạy nhanh và tiện lợi · D xung quanh ít trạm thu phí.' }
            ] },
            { range: [84, 85], zh: '虽然我们常说要按规定做事，但有句话叫“规定是死的，人是活的”。它提醒我们，当“规定”和“经验”不能解决问题时，应该改变自己的态度和想法，试着走走以前从来没走过的路，也许这样就能找到解决问题的方法了。', questions: [
              { n: 84, star: '“人是活的”这里“活”指的是：', options: [{ zh: '富有热情' }, { zh: '懂得改变' }, { zh: '有同情心' }, { zh: '感情丰富' }], answer: 'B', vn: 'Tuy chúng ta thường nói phải làm việc theo quy định, nhưng có câu "quy định là cứng, con người là sống" (người phải linh hoạt). Câu này nhắc ta rằng khi "quy định" và "kinh nghiệm" không giải quyết được vấn đề thì nên thay đổi thái độ và cách nghĩ của mình, thử đi những con đường trước giờ chưa từng đi, có lẽ như vậy sẽ tìm ra cách giải quyết. ★ Chữ "活" trong "人是活的" chỉ: A giàu nhiệt huyết · B biết thay đổi · C có lòng cảm thông · D giàu tình cảm.' },
              { n: 85, star: '根据这段话，规定：', options: [{ zh: '可以被打破' }, { zh: '越详细越好' }, { zh: '要符合法律' }, { zh: '不能太复杂' }], answer: 'A', vn: '★ Theo đoạn văn, quy định: A có thể bị phá vỡ · B càng chi tiết càng tốt · C phải phù hợp pháp luật · D không được quá phức tạp.' }
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
            { n: 86, words: ['不错', '这台', '质量', '洗衣机的'], answer: '这台洗衣机的质量不错。', vn: 'Chất lượng của chiếc máy giặt này khá tốt. — Cụm 这台洗衣机的质量 làm chủ ngữ, 不错 làm vị ngữ.' },
            { n: 87, words: ['著名的', '是', '她丈夫', '京剧演员'], answer: '她丈夫是著名的京剧演员。', accept: ['著名的京剧演员是她丈夫。'], vn: 'Chồng cô ấy là diễn viên Kinh kịch nổi tiếng. — Câu 是: A 是 B.' },
            { n: 88, words: ['我', '客厅', '把', '收拾', '好了'], answer: '我把客厅收拾好了。', vn: 'Tôi đã dọn dẹp xong phòng khách. — Câu 把: 把 + tân ngữ + động từ + 好了.' },
            { n: 89, words: ['两', '公里', '大概有', '加油站离这儿'], answer: '加油站离这儿大概有两公里。', vn: 'Trạm xăng cách đây khoảng hai cây số. — A 离 B + (大概)有 + khoảng cách.' },
            { n: 90, words: ['发生', '在', '这个故事', '上个世纪末'], answer: '这个故事发生在上个世纪末。', vn: 'Câu chuyện này xảy ra vào cuối thế kỷ trước. — Động từ + 在 + thời gian.' },
            { n: 91, words: ['意见和看法', '谈了', '大家', '都', '自己的'], answer: '大家都谈了自己的意见和看法。', vn: 'Mọi người đều đã nói lên ý kiến và quan điểm của mình. — 都 đứng trước động từ 谈了.' },
            { n: 92, words: ['要', '好习惯', '的', '养成', '节约用水'], answer: '要养成节约用水的好习惯。', vn: 'Phải hình thành thói quen tốt là tiết kiệm nước. — 养成 + … + 的习惯.' },
            { n: 93, words: ['普通话', '他的', '说得', '不太标准'], answer: '他的普通话说得不太标准。', vn: 'Tiếng phổ thông của anh ấy nói không chuẩn lắm. — Bổ ngữ trạng thái: 说得 + 不太标准.' },
            { n: 94, words: ['出发还', '吗', '你现在', '来得及'], answer: '你现在出发还来得及吗？', vn: 'Bây giờ cậu xuất phát thì còn kịp không? — 来得及: kịp; 吗 ở cuối câu hỏi.' },
            { n: 95, words: ['排好队', '按照', '顺序', '请同学们'], answer: '请同学们按照顺序排好队。', vn: 'Mời các em xếp hàng theo thứ tự. — 按照 + 顺序 + động từ.' }
          ]
        },
        {
          name: 'Phần 2', range: [96, 100], type: 'pic-write', intro: 'Nhìn tranh, dùng từ cho sẵn viết một câu.', example: 'Ví dụ: (乒乓球) 她很喜欢打乒乓球。',
          questions: [
            { n: 96, img: 'w96.jpg', word: '包子', answer: '这家店的包子非常好吃。', accept: ['妈妈做的包子又大又好吃。', '我早饭吃了三个包子。'], vn: 'Bánh bao của quán này rất ngon.' },
            { n: 97, img: 'w97.jpg', word: '到底', answer: '答案到底是什么呢？', accept: ['她在想：这道题的答案到底是什么？', '他到底什么时候回来呢？'], vn: 'Rốt cuộc đáp án là gì nhỉ?' },
            { n: 98, img: 'w98.jpg', word: '毕业', answer: '祝贺你顺利毕业！', accept: ['他今年大学毕业了。', '毕业的时候，校长和他握了握手。'], vn: 'Chúc mừng bạn tốt nghiệp suôn sẻ!' },
            { n: 99, img: 'w99.jpg', word: '抱', answer: '你怎么抱这么多书？我来帮你吧。', accept: ['她抱着很多书去图书馆。', '她抱着一大堆书，笑得很开心。'], vn: 'Sao bạn ôm nhiều sách thế? Để mình giúp bạn nhé.' },
            { n: 100, img: 'w100.jpg', word: '长城', answer: '下周末我准备去爬长城。', accept: ['长城是中国最有名的地方之一。', '我去年和朋友一起去爬了长城。'], vn: 'Cuối tuần sau tôi định đi leo Vạn Lý Trường Thành.' }
          ]
        }
      ]
    }
  ]
};
