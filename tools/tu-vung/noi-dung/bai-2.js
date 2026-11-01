// Noi dung TU MOI bai 2 HSK4 — 搭配 (ket hop tu) va 句型 (cau truc cau).
// Pinyin cua cot giua do cong cu py.js ghep tu tu dien bai hoc, khong go tay.
// Chi dung tu trong pham vi HSK 1-4; tu cua bai 1 duoc dung lai co y (on xoay vong).
module.exports = {
  '适应': {
    collo: [['适应生活', 'thích nghi với cuộc sống'], ['适应环境', 'thích nghi với môi trường'],
            ['慢慢适应', 'dần dần thích nghi'], ['不适应', 'không thích nghi, chưa quen'],
            ['适应新工作', 'thích nghi với công việc mới']],
    patterns: [['Sub + 适应 + N', 'Ai đó thích nghi với cái gì'],
               ['对 + N + 不适应', 'Chưa quen với cái gì']]
  },
  '交': {
    collo: [['交朋友', 'kết bạn'], ['交新朋友', 'kết bạn mới'], ['新交的朋友', 'người bạn mới quen'],
            ['交到朋友', 'kết được bạn'], ['跟他交朋友', 'kết bạn với anh ấy']],
    patterns: [['Sub + 交 + (新)朋友', 'Ai đó kết bạn (mới)'],
               ['跟 + ai + 交朋友', 'Kết bạn với ai đó']]
  },
  '平时': {
    collo: [['平时很忙', 'ngày thường rất bận'], ['平时工作', 'công việc thường ngày'],
            ['平时的生活', 'cuộc sống thường ngày'], ['跟平时一样', 'giống như mọi khi'],
            ['平时不出去', 'ngày thường không ra ngoài']],
    patterns: [['平时 + Sub + V', 'Ngày thường ai đó làm gì'],
               ['平时……，但/可是……', 'Ngày thường thì… nhưng…']]
  },
  '逛': {
    collo: [['逛街', 'đi dạo phố'], ['逛公园', 'đi dạo công viên'], ['逛商场', 'đi dạo trung tâm thương mại'],
            ['逛书店', 'đi dạo hiệu sách'], ['出去逛逛', 'ra ngoài dạo một chút']],
    patterns: [['Sub + 逛 + nơi chốn', 'Ai đó đi dạo ở đâu'],
               ['出去 + 逛逛', 'Ra ngoài dạo một lát (động từ lặp = làm nhẹ đi)']]
  },
  '短信': {
    collo: [['发短信', 'gửi tin nhắn'], ['收到短信', 'nhận được tin nhắn'], ['一条短信', 'một tin nhắn'],
            ['幽默短信', 'tin nhắn hài hước'], ['给他发短信', 'nhắn tin cho anh ấy']],
    patterns: [['给 + ai + 发短信', 'Nhắn tin cho ai'],
               ['收到 + (ai 的) 短信', 'Nhận được tin nhắn (của ai)']]
  },
  '正好': {
    collo: [['来得正好', 'đến rất đúng lúc'], ['正好一起去', 'đúng dịp cùng đi luôn'],
            ['正好有空', 'vừa hay đang rảnh'], ['正好遇到', 'vừa đúng lúc gặp được'],
            ['正好二十块', 'vừa đúng hai mươi tệ']],
    patterns: [['正好 + V (phó từ)', 'Đúng dịp làm gì'],
               ['V + 得正好', 'Làm việc gì đó rất đúng lúc']]
  },
  '聚会': {
    collo: [['同学聚会', 'họp lớp'], ['朋友聚会', 'họp mặt bạn bè'], ['参加聚会', 'tham gia buổi họp mặt'],
            ['聚会的时间', 'thời gian buổi họp mặt'], ['来参加聚会', 'đến dự buổi họp mặt']],
    patterns: [['参加 + 聚会', 'Tham dự buổi họp mặt'],
               ['同学/朋友 + 聚会', 'Buổi họp lớp / họp mặt bạn bè']]
  },
  '联系': {
    collo: [['跟他联系', 'liên lạc với anh ấy'], ['联系一下', 'liên hệ một chút'],
            ['常常联系', 'thường xuyên liên lạc'], ['没联系了', 'không còn liên lạc nữa'],
            ['保持联系', 'giữ liên lạc']],
    patterns: [['跟/和 + ai + 联系', 'Liên lạc với ai'],
               ['好久没 + 联系 + 了', 'Lâu rồi không liên lạc']]
  },
  '差不多': {
    collo: [['差不多一半', 'gần một nửa'], ['差不多一样', 'gần như giống nhau'],
            ['性格差不多', 'tính cách gần giống nhau'], ['差不多高', 'cao gần bằng nhau'],
            ['差不多了', 'gần xong rồi']],
    patterns: [['A 跟 B 差不多', 'A với B gần như nhau'],
               ['差不多 + số lượng', 'Khoảng chừng bao nhiêu']]
  },
  '专门': {
    collo: [['专门去', 'đặc biệt đi'], ['专门为你', 'đặc biệt vì bạn'], ['专门来看你', 'cố ý đến thăm bạn'],
            ['专门回来', 'đặc biệt trở về'], ['专门留时间', 'dành riêng thời gian']],
    patterns: [['专门 + V', 'Đặc biệt / cố ý làm gì'],
               ['专门为 + ai + V', 'Đặc biệt vì ai mà làm gì']]
  },
  '毕业': {
    collo: [['毕业后', 'sau khi tốt nghiệp'], ['大学毕业', 'tốt nghiệp đại học'],
            ['刚毕业', 'vừa mới tốt nghiệp'], ['毕业十年了', 'tốt nghiệp mười năm rồi'],
            ['从大学毕业', 'tốt nghiệp từ trường đại học']],
    patterns: [['从 + trường + 毕业', 'Tốt nghiệp từ trường nào'],
               ['✗ 毕业大学 → ✓ 从大学毕业', '毕业 là từ ly hợp, không mang tân ngữ theo sau']]
  },
  '麻烦': {
    collo: [['麻烦你', 'phiền bạn'], ['麻烦别人', 'làm phiền người khác'], ['很麻烦', 'rất phiền phức'],
            ['太麻烦了', 'phiền quá'], ['不麻烦你了', 'không làm phiền bạn nữa']],
    patterns: [['麻烦 + ai + V', 'Phiền ai làm gì (lời nhờ vả lịch sự)'],
               ['N + 很/太 + 麻烦', 'Việc gì đó rất / quá phiền phức']]
  },
  '好像': {
    collo: [['好像见过', 'hình như đã từng gặp'], ['好像不认识', 'hình như không quen'],
            ['好像回到', 'dường như quay lại'], ['好像忘了', 'hình như quên mất'],
            ['好像是', 'hình như là']],
    patterns: [['Sub + 好像 + V/Adj', 'Hình như ai đó thế nào'],
               ['好像 + … + 一样', 'Giống như … vậy']]
  },
  '重新': {
    collo: [['重新开始', 'bắt đầu lại'], ['重新回到', 'quay trở lại'], ['重新认识', 'làm quen lại'],
            ['重新考虑', 'cân nhắc lại'], ['重新做', 'làm lại']],
    patterns: [['重新 + V', 'Làm lại việc gì từ đầu'],
               ['✗ 重新一次 → ✓ 重新 + V', '重新 là phó từ, phải đứng trước động từ']]
  },
  '尽管': {
    collo: [['尽管很忙', 'mặc dù rất bận'], ['尽管这样', 'mặc dù vậy'],
            ['尽管……但是……', 'mặc dù… nhưng…'], ['尽管……可是……', 'mặc dù… nhưng…'],
            ['尽管……还是……', 'mặc dù… vẫn…']],
    patterns: [['尽管 + mệnh đề 1，但是/还是 + mệnh đề 2', 'Mặc dù … nhưng vẫn …'],
               ['✗ 尽管……所以…… → ✓ 尽管……但是……', '尽管 hô ứng với 但是/可是/还是, không dùng với 所以']]
  },
  '真正': {
    collo: [['真正的朋友', 'người bạn chân chính'], ['真正的友谊', 'tình bạn chân chính'],
            ['真正的原因', 'nguyên nhân thật sự'], ['真正了解', 'thật sự hiểu rõ'],
            ['真正喜欢', 'thật lòng yêu thích']],
    patterns: [['真正的 + N', '… chân chính, … thật sự'],
               ['真正 + V', 'Thật sự làm gì']]
  },
  '友谊': {
    collo: [['真正的友谊', 'tình bạn chân chính'], ['我们的友谊', 'tình bạn của chúng tôi'],
            ['珍惜友谊', 'trân trọng tình bạn'], ['同学的友谊', 'tình bạn học'],
            ['友谊很重要', 'tình bạn rất quan trọng']],
    patterns: [['(真正的) 友谊', 'Tình bạn (chân chính)'],
               ['珍惜 + 友谊', 'Trân trọng tình bạn']]
  },
  '丰富': {
    collo: [['丰富生活', 'làm phong phú cuộc sống'], ['丰富的经验', 'kinh nghiệm phong phú'],
            ['经验丰富', 'giàu kinh nghiệm'], ['内容丰富', 'nội dung phong phú'],
            ['生活很丰富', 'cuộc sống rất phong phú']],
    patterns: [['Sub + 丰富 + N (động từ)', 'Làm phong phú thêm cái gì'],
               ['N + 很丰富 (tính từ)', 'Cái gì đó rất phong phú']]
  },
  '无聊': {
    collo: [['很无聊', 'rất chán'], ['太无聊了', 'chán quá'], ['觉得无聊', 'cảm thấy buồn chán'],
            ['无聊的时候', 'lúc buồn chán'], ['无聊的电影', 'bộ phim nhạt nhẽo']],
    patterns: [['Sub + 觉得 + 无聊', 'Ai đó thấy chán'],
               ['太 + 无聊 + 了', 'Chán quá đi mất']]
  },
  '讨厌': {
    collo: [['讨厌他', 'ghét anh ta'], ['很讨厌', 'rất đáng ghét'], ['让人讨厌', 'khiến người ta khó chịu'],
            ['讨厌下雨', 'ghét trời mưa'], ['最讨厌', 'ghét nhất']],
    patterns: [['Sub + 讨厌 + N/V', 'Ai đó ghét cái gì / việc gì'],
               ['让人 + 讨厌', 'Khiến người khác khó chịu']]
  },
  '却': {
    collo: [['却很难', 'nhưng lại rất khó'], ['却没有', 'nhưng lại không có'],
            ['却不知道', 'nhưng lại không biết'], ['但是却', 'thế nhưng lại'],
            ['想去却没时间', 'muốn đi nhưng lại không có thời gian']],
    patterns: [['mệnh đề 1，Sub + 却 + V', '…, nhưng lại …'],
               ['✗ 却他不来 → ✓ 他却不来', '却 đứng sau chủ ngữ, trước động từ']]
  },
  '周围': {
    collo: [['周围的人', 'những người xung quanh'], ['周围的环境', 'môi trường xung quanh'],
            ['学校周围', 'xung quanh trường học'], ['周围很安静', 'xung quanh rất yên tĩnh'],
            ['在……周围', 'ở xung quanh…']],
    patterns: [['nơi chốn + 周围', 'Xung quanh nơi nào'],
               ['周围的 + N', '… ở xung quanh']]
  },
  '交流': {
    collo: [['跟他交流', 'trao đổi với anh ấy'], ['互相交流', 'trao đổi với nhau'],
            ['交流经验', 'trao đổi kinh nghiệm'], ['交流一下', 'trao đổi một chút'],
            ['语言交流', 'giao tiếp ngôn ngữ']],
    patterns: [['跟/和 + ai + 交流', 'Giao lưu, trao đổi với ai'],
               ['交流 + N', 'Trao đổi về cái gì']]
  },
  '理解': {
    collo: [['互相理解', 'hiểu nhau'], ['理解你', 'hiểu cho bạn'], ['不理解', 'không hiểu'],
            ['理解错了', 'hiểu nhầm rồi'], ['不同的理解', 'cách hiểu khác nhau']],
    patterns: [['Sub + 理解 + ai / điều gì', 'Ai đó hiểu ai / hiểu điều gì'],
               ['互相 + 理解', 'Hiểu cho nhau']]
  },
  '镜子': {
    collo: [['照镜子', 'soi gương'], ['一面镜子', 'một tấm gương'], ['像镜子一样', 'giống như tấm gương'],
            ['镜子里', 'trong gương'], ['看镜子', 'nhìn vào gương']],
    patterns: [['照 + 镜子', 'Soi gương'],
               ['像 + 镜子 + 一样', 'Giống như tấm gương vậy']]
  },
  '而': {
    collo: [['而我', 'còn tôi thì'], ['而不是', 'chứ không phải là'], ['而女人', 'còn phụ nữ thì'],
            ['……，而……', '…, trong khi đó…'], ['不是……，而是……', 'không phải… mà là…']],
    patterns: [['mệnh đề 1，而 + mệnh đề 2', '…, trong khi đó / mà …'],
               ['不是 A，而是 B', 'Không phải A, mà là B']]
  },
  '当': {
    collo: [['当……的时候', 'khi…'], ['当我们', 'khi chúng ta'], ['当他回来时', 'khi anh ấy trở về'],
            ['当你需要', 'khi bạn cần'], ['当时', 'lúc đó']],
    patterns: [['当 + mệnh đề + 的时候', 'Khi …'],
               ['✗ 当我来，他走了 → ✓ 当我来的时候，他走了', '当 phải đi kèm 的时候 / 时']]
  },
  '困难': {
    collo: [['遇到困难', 'gặp khó khăn'], ['有困难', 'có khó khăn'], ['解决困难', 'giải quyết khó khăn'],
            ['很困难', 'rất khó khăn'], ['生活困难', 'cuộc sống khó khăn']],
    patterns: [['遇到 + 困难', 'Gặp khó khăn'],
               ['解决 + 困难', 'Giải quyết khó khăn']]
  },
  '及时': {
    collo: [['及时帮助', 'kịp thời giúp đỡ'], ['及时告诉', 'kịp thời báo cho'],
            ['来得及时', 'đến rất kịp lúc'], ['及时去医院', 'kịp thời đến bệnh viện'],
            ['及时解决', 'kịp thời giải quyết']],
    patterns: [['及时 + V', 'Kịp thời làm gì'],
               ['V + 得及时', 'Làm việc gì đó rất kịp thời']]
  },
  '陪': {
    collo: [['陪你去', 'đi cùng bạn'], ['陪着你', 'ở bên cạnh bạn'], ['陪在你身边', 'ở bên cạnh bạn'],
            ['陪妈妈', 'ở bên mẹ'], ['陪我聊天儿', 'trò chuyện cùng tôi']],
    patterns: [['陪 + ai + V', 'Đi cùng / ở bên ai làm gì'],
               ['陪 + ai + 在 + nơi chốn', 'Ở bên ai tại đâu']]
  }
};
