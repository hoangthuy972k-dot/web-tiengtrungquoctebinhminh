// Noi dung TU MOI bai 13 HSK4 (chu de: van hoa Trung Hoa — kinh kich, dua, tra).
module.exports = {
  '京剧': {
    collo: [['听京剧', 'nghe Kinh kịch'], ['唱京剧', 'hát Kinh kịch'],
            ['京剧演员', 'diễn viên Kinh kịch'], ['喜欢京剧', 'thích Kinh kịch'],
            ['京剧表演', 'màn diễn Kinh kịch']],
    patterns: [['唱 / 听 + 京剧', 'Hát / nghe Kinh kịch'],
               ['京 + 剧', 'Kịch (剧) của Bắc Kinh (京) — ghép nghĩa dễ nhớ']]
  },
  '演员': {
    collo: [['京剧演员', 'diễn viên Kinh kịch'], ['有名的演员', 'diễn viên nổi tiếng'],
            ['专业的演员', 'diễn viên chuyên nghiệp'], ['当演员', 'làm diễn viên'],
            ['一位演员', 'một diễn viên']],
    patterns: [['当 + 演员', 'Làm diễn viên'],
               ['演 + 员', 'Người (员) biểu diễn (演) — cùng kiểu với 售货员 bài 6']]
  },
  '观众': {
    collo: [['吸引观众', 'thu hút khán giả'], ['受观众喜爱', 'được khán giả yêu thích'],
            ['不同年龄的观众', 'khán giả các độ tuổi'], ['观众很多', 'rất đông khán giả'],
            ['当地的观众', 'khán giả địa phương']],
    patterns: [['受 + 观众 + 喜爱 / 欢迎', 'Được khán giả yêu thích'],
               ['观众 ≠ 听众', '观众 là người XEM; 听众 là người NGHE']]
  },
  '厚': {
    collo: [['很厚的书', 'quyển sách rất dày'], ['厚衣服', 'áo dày'],
            ['深厚的感情', 'tình cảm sâu nặng'], ['厚厚的', 'dày cộm'],
            ['不太厚', 'không dày lắm']],
    patterns: [['厚 ↔ 薄', 'Dày ↔ mỏng'],
               ['深厚 + 感情', 'Tình cảm sâu nặng — nghĩa mở rộng của 厚']]
  },
  '演出': {
    collo: [['上台演出', 'lên sân khấu biểu diễn'], ['看演出', 'xem biểu diễn'],
            ['一场演出', 'một buổi diễn'], ['演出很成功', 'buổi diễn rất thành công'],
            ['参加演出', 'tham gia biểu diễn']],
    patterns: [['上台 + 演出 (động từ)', 'Lên sân khấu biểu diễn'],
               ['一 + 场 + 演出 (danh từ)', 'Một buổi biểu diễn']]
  },
  '大概': {
    collo: [['大概会同意', 'có lẽ sẽ đồng ý'], ['大概60年', 'khoảng 60 năm'],
            ['大概的想法', 'ý tưởng đại khái'], ['大概知道', 'đại khái biết'],
            ['大概下午到', 'chắc chiều đến']],
    patterns: [['大概 + số lượng', 'Khoảng chừng bao nhiêu'],
               ['大概 + 会 + V', 'Có lẽ sẽ … — phỏng đoán']]
  },
  '来自': {
    collo: [['来自美国', 'đến từ Mỹ'], ['来自不同的国家', 'đến từ các nước khác nhau'],
            ['来自生活', 'bắt nguồn từ cuộc sống'], ['来自各国的学生', 'sinh viên các nước'],
            ['来自哪里', 'đến từ đâu']],
    patterns: [['Sub + 来自 + nơi chốn', 'Ai đó đến từ đâu'],
               ['✗ 来自从美国 → ✓ 来自美国', '来自 đã gồm nghĩa "từ", không thêm 从']]
  },
  '遍': {
    collo: [['看了一遍', 'xem một lượt'], ['一遍一遍地练习', 'luyện đi luyện lại'],
            ['再检查一遍', 'kiểm tra lại một lượt'], ['看了好几遍', 'xem mấy lượt'],
            ['读三遍', 'đọc ba lượt']],
    patterns: [['V + 了 + số + 遍', 'Làm gì mấy lượt, từ đầu đến cuối'],
               ['遍 ≠ 次', '遍 nhấn TRỌN VẸN từ đầu đến cuối; 次 chỉ đếm số lần']]
  },
  '偶尔': {
    collo: [['偶尔加班', 'thỉnh thoảng tăng ca'], ['偶尔去看看', 'thỉnh thoảng ghé xem'],
            ['偶尔也会', 'đôi khi cũng sẽ'], ['偶尔出现', 'thỉnh thoảng xuất hiện'],
            ['只是偶尔', 'chỉ thỉnh thoảng thôi']],
    patterns: [['Sub + 偶尔 + V', 'Ai đó thỉnh thoảng làm gì'],
               ['偶尔 ↔ 经常', 'Thỉnh thoảng ↔ thường xuyên']]
  },
  '吃惊': {
    collo: [['大吃一惊', 'giật cả mình'], ['让人吃惊', 'khiến người ta kinh ngạc'],
            ['别吃惊', 'đừng ngạc nhiên'], ['感到吃惊', 'cảm thấy kinh ngạc'],
            ['吃惊的消息', 'tin gây sốc']],
    patterns: [['让 / 令 + 人 + 吃惊', 'Khiến người ta kinh ngạc'],
               ['大吃一惊', '吃惊 là từ ly hợp: 吃了一惊, 大吃一惊']]
  },
  '基础': {
    collo: [['打好基础', 'xây nền tảng tốt'], ['有基础', 'có nền tảng'],
            ['基础知识', 'kiến thức cơ bản'], ['音乐基础', 'nền tảng âm nhạc'],
            ['在……基础上', 'trên cơ sở…']],
    patterns: [['有 / 打好 + 基础', 'Có / xây vững nền tảng'],
               ['在 + N + 的基础上', 'Trên cơ sở cái gì']]
  },
  '表演': {
    collo: [['精彩的表演', 'màn trình diễn đặc sắc'], ['表演艺术', 'nghệ thuật biểu diễn'],
            ['表演中国功夫', 'biểu diễn võ Trung Quốc'], ['上台表演', 'lên sân khấu diễn'],
            ['表演得很好', 'diễn rất hay']],
    patterns: [['表演 + N (động từ)', 'Biểu diễn tiết mục gì'],
               ['表演 ≈ 演出', '表演 nhấn kỹ năng diễn; 演出 nhấn buổi diễn']]
  },
  '正常': {
    collo: [['很正常', 'rất bình thường'], ['正常交流', 'giao tiếp bình thường'],
            ['身体正常', 'cơ thể bình thường'], ['正常情况下', 'trong điều kiện bình thường'],
            ['不太正常', 'không bình thường lắm']],
    patterns: [['……是很正常的', '… là chuyện rất bình thường'],
               ['正常 ↔ 不正常', 'Bình thường ↔ bất thường']]
  },
  '申请': {
    collo: [['申请留学', 'xin đi du học'], ['申请举办活动', 'xin tổ chức hoạt động'],
            ['申请材料', 'hồ sơ đăng ký'], ['申请国外学校', 'nộp đơn vào trường nước ngoài'],
            ['申请成功', 'đăng ký thành công']],
    patterns: [['申请 + V / N', 'Xin, đăng ký làm gì'],
               ['申请 khác 要求: 申请 là xin phép cấp trên, 要求 là đòi hỏi']]
  },
  '有趣': {
    collo: [['有趣的故事', 'câu chuyện thú vị'], ['觉得很有趣', 'thấy rất thú vị'],
            ['办得有趣', 'tổ chức thú vị'], ['非常有趣', 'vô cùng lý thú'],
            ['有趣的人', 'người thú vị']],
    patterns: [['有趣的 + N', '… thú vị'],
               ['有 + 趣', 'Có (有) hứng thú (趣) — ghép nghĩa dễ nhớ']]
  },
  '开心': {
    collo: [['玩儿得很开心', 'chơi rất vui'], ['开心地笑', 'cười vui vẻ'],
            ['过得开心', 'sống vui vẻ'], ['不开心', 'không vui'],
            ['让人开心', 'khiến người ta vui']],
    patterns: [['V + 得 + 开心', 'Làm gì một cách vui vẻ'],
               ['开心 ≈ 愉快 (bài 8)', '开心 thiên khẩu ngữ hơn']]
  },
  '继续': {
    collo: [['继续进行', 'tiếp tục tiến hành'], ['继续由你负责', 'tiếp tục do bạn phụ trách'],
            ['继续留下', 'tiếp tục ở lại'], ['继续学习', 'tiếp tục học'],
            ['继续努力', 'tiếp tục cố gắng']],
    patterns: [['继续 + V', 'Tiếp tục làm gì'],
               ['✗ 继续了一个小时 → ✓ 继续了一个小时地做', '继续 cần động từ theo sau']]
  },
  '由': {
    collo: [['由你负责', 'do bạn phụ trách'], ['由王经理负责', 'do giám đốc Vương phụ trách'],
            ['由他决定', 'do anh ấy quyết định'], ['由我来写', 'để tôi viết'],
            ['由大家讨论', 'do mọi người bàn']],
    patterns: [['由 + ai + V', 'Do ai đó làm việc gì (chỉ người thực hiện)'],
               ['由 ≠ 被', '由 nêu ai làm; 被 nêu ai chịu tác động']]
  },
  '讨论': {
    collo: [['开会讨论', 'họp bàn'], ['讨论问题', 'thảo luận vấn đề'],
            ['跟大家讨论', 'bàn với mọi người'], ['讨论一下', 'bàn một chút'],
            ['热烈讨论', 'thảo luận sôi nổi']],
    patterns: [['跟 + ai + 讨论 + N', 'Thảo luận với ai về việc gì'],
               ['讨论 ≈ 商量 (bài 12)', '讨论 nhiều người, chính thức; 商量 ít người, riêng tư']]
  },
  '大约': {
    collo: [['大约半个小时', 'khoảng nửa tiếng'], ['大约3000年', 'khoảng 3000 năm'],
            ['大约20%的人', 'khoảng 20% số người'], ['大约有', 'khoảng chừng có'],
            ['大约五点到', 'chừng 5 giờ đến']],
    patterns: [['大约 + số lượng', 'Khoảng chừng bao nhiêu'],
               ['大约 ≈ 大概', '大约 chỉ dùng cho SỐ LƯỢNG; 大概 còn dùng để phỏng đoán']]
  },
  '餐厅': {
    collo: [['一家餐厅', 'một nhà hàng'], ['在餐厅吃饭', 'ăn ở nhà hàng'],
            ['中国餐厅', 'nhà hàng Trung Quốc'], ['学校的餐厅', 'nhà ăn của trường'],
            ['餐厅很干净', 'nhà hàng rất sạch']],
    patterns: [['một + 家 + 餐厅', 'Lượng từ 家 cho cửa hàng, công ty'],
               ['餐厅 ≈ 饭馆', '餐厅 sang hơn, cũng chỉ nhà ăn trong trường']]
  },
  '纸袋': {
    collo: [['一个纸袋', 'một túi giấy'], ['放进纸袋', 'cho vào túi giấy'],
            ['放筷子的纸袋', 'túi giấy đựng đũa'], ['塑料袋', 'túi nilon'],
            ['用纸袋装', 'đựng bằng túi giấy']],
    patterns: [['纸 + 袋', 'Túi (袋) bằng giấy (纸)'],
               ['把 + N + 放进 + 纸袋 + 里', 'Cho cái gì vào túi']]
  },
  '互联网': {
    collo: [['通过互联网', 'thông qua Internet'], ['在互联网上', 'trên mạng Internet'],
            ['互联网的发展', 'sự phát triển của Internet'], ['用互联网', 'dùng Internet'],
            ['互联网调查', 'khảo sát qua mạng']],
    patterns: [['在 + 互联网 + 上 + V', 'Làm gì trên mạng'],
               ['通过 + 互联网', 'Nhờ Internet — 通过 là từ bài 9']]
  },
  '进行': {
    collo: [['进行调查', 'tiến hành khảo sát'], ['继续进行', 'tiếp tục tiến hành'],
            ['进行交流', 'tiến hành trao đổi'], ['正在进行', 'đang tiến hành'],
            ['进行讨论', 'tiến hành thảo luận']],
    patterns: [['进行 + danh từ hai âm tiết', '进行调查 ✓ / 进行吃 ✗ — sau 进行 phải là từ song âm'],
               ['进行 dùng cho việc chính thức, kéo dài']]
  },
  '错误': {
    collo: [['犯错误', 'phạm sai lầm'], ['改正错误', 'sửa lỗi'],
            ['错误的方法', 'cách làm sai'], ['错误的选择', 'lựa chọn sai lầm'],
            ['语法错误', 'lỗi ngữ pháp']],
    patterns: [['犯 / 改正 + 错误 (danh từ)', 'Phạm / sửa lỗi'],
               ['错误的 + N (tính từ)', '… sai lầm']]
  },
  '随着': {
    collo: [['随着社会的发展', 'cùng với sự phát triển xã hội'], ['随着年龄的增长', 'theo tuổi tác'],
            ['随着时间', 'theo thời gian'], ['随着经济的发展', 'cùng sự phát triển kinh tế'],
            ['随着认识的加深', 'cùng với hiểu biết sâu thêm']],
    patterns: [['随着 + N + 的 + 变化，Sub + V', 'Cùng với sự thay đổi của …, thì …'],
               ['✗ 随着他来了 → ✓ 随着社会的发展', '随着 dẫn QUÁ TRÌNH, không dẫn người']]
  },
  '十分': {
    collo: [['十分重要', 'vô cùng quan trọng'], ['十分满意', 'rất hài lòng'],
            ['十分普遍', 'rất phổ biến'], ['十分感谢', 'vô cùng cảm ơn'],
            ['十分困难', 'vô cùng khó khăn']],
    patterns: [['十分 + Adj', 'Rất, vô cùng — 十分 thiên văn viết hơn 非常'],
               ['✗ 十分喜欢他 → ✓ 非常喜欢他', '十分 chủ yếu đi với tính từ']]
  },
  '普遍': {
    collo: [['十分普遍', 'rất phổ biến'], ['越来越普遍', 'ngày càng phổ biến'],
            ['普遍的现象', 'hiện tượng phổ biến'], ['非常普遍', 'vô cùng phổ biến'],
            ['普遍的习惯', 'thói quen phổ biến']],
    patterns: [['N + 很 / 十分 + 普遍', 'Cái gì đó rất phổ biến'],
               ['普遍 ≈ 常见', '普遍 nhấn diện rộng; 常见 nhấn hay gặp']]
  },
  '部分': {
    collo: [['一部分', 'một phần'], ['大部分人', 'đa số mọi người'],
            ['前一部分', 'phần đầu'], ['不可缺少的部分', 'phần không thể thiếu'],
            ['第二部分', 'phần thứ hai']],
    patterns: [['大 / 一 + 部分 + N', 'Đa số / một phần cái gì'],
               ['部分 ↔ 全部 (bài 12)', 'Một phần ↔ toàn bộ']]
  },
  '稍微': {
    collo: [['稍微有点儿苦', 'hơi đắng một chút'], ['稍微休息一下', 'nghỉ một chút'],
            ['稍微等一会儿', 'đợi một lát'], ['稍微大一点儿', 'to hơn một chút'],
            ['稍微改一下', 'sửa một chút']],
    patterns: [['稍微 + Adj / V + 一点儿 / 一下', 'Hơi… một chút — vế sau bắt buộc có 一点儿/一下'],
               ['✗ 稍微苦 → ✓ 稍微有点儿苦', '稍微 không đứng một mình trước tính từ']]
  },
  '苦': {
    collo: [['有点儿苦', 'hơi đắng'], ['味道很苦', 'vị rất đắng'],
            ['苦咖啡', 'cà phê đắng'], ['生活很苦', 'cuộc sống vất vả'],
            ['良药苦口', 'thuốc đắng dã tật']],
    patterns: [['N + 味道 + 苦', 'Cái gì đó vị đắng — 味道 là từ bài 5'],
               ['苦 (đắng) và 苦 (khổ) cùng một chữ']]
  },
  '省': {
    collo: [['广东省', 'tỉnh Quảng Đông'], ['这个省', 'tỉnh này'],
            ['省会城市', 'thành phố tỉnh lỵ'], ['来自云南省', 'đến từ tỉnh Vân Nam'],
            ['每个省', 'mỗi tỉnh']],
    patterns: [['tên + 省', 'Tỉnh nào: 广东省, 云南省'],
               ['省 → 市 → 区', 'Tỉnh → thành phố → quận']]
  }
};
