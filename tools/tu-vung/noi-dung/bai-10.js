// Noi dung TU MOI bai 10 HSK4 (chu de: nghe nghiep, hanh phuc, dieu kien song).
module.exports = {
  '礼拜天': {
    collo: [['这个礼拜天', 'chủ nhật này'], ['礼拜天有空儿', 'chủ nhật rảnh'],
            ['礼拜天陪我', 'chủ nhật đi cùng tôi'], ['上个礼拜天', 'chủ nhật tuần trước'],
            ['礼拜天去看父母', 'chủ nhật đi thăm bố mẹ']],
    patterns: [['礼拜天 ≈ 星期天', '礼拜天 thiên khẩu ngữ, 星期天 trung tính'],
               ['这个 / 上个 + 礼拜天', 'Chủ nhật này / tuần trước']]
  },
  '空儿': {
    collo: [['有空儿', 'có thời gian rảnh'], ['没空儿', 'không rảnh'],
            ['哪天有空儿', 'hôm nào rảnh'], ['有空儿的时候', 'lúc rảnh rỗi'],
            ['抽空儿', 'tranh thủ chút thời gian']],
    patterns: [['有 / 没 + 空儿', 'Có / không có thời gian rảnh'],
               ['空儿 (kòngr) ≠ 空 (kōng)', 'kòngr là chỗ trống, thời gian rảnh']]
  },
  '母亲': {
    collo: [['照顾母亲', 'chăm sóc mẹ'], ['在母亲面前', 'trước mặt mẹ'],
            ['母亲和儿子', 'mẹ và con trai'], ['我的母亲', 'mẹ tôi'],
            ['母亲节', 'ngày của mẹ']],
    patterns: [['母亲 ≈ 妈妈', '母亲 trang trọng, dùng khi viết; 妈妈 dùng khi gọi'],
               ['在 + ai + 面前', 'Trước mặt ai']]
  },
  '不过': {
    collo: [['不过现在', 'nhưng bây giờ'], ['不过是', 'chỉ là'],
            ['不过50公斤', 'chưa tới 50 cân'], ['……，不过……', '…, nhưng…'],
            ['不过我觉得', 'nhưng tôi thấy']],
    patterns: [['mệnh đề 1，不过 + mệnh đề 2 (liên từ)', '…, nhưng … — nhẹ hơn 但是'],
               ['不过 + số lượng (phó từ)', 'Chỉ, chưa tới bao nhiêu']]
  },
  '永远': {
    collo: [['永远不会', 'mãi mãi sẽ không'], ['永远长不大', 'mãi không lớn'],
            ['永远都不', 'vĩnh viễn không'], ['永远记住', 'nhớ mãi'],
            ['永远在一起', 'mãi bên nhau']],
    patterns: [['永远 + 不 / 都不 + V', 'Vĩnh viễn không …'],
               ['✗ 永远的朋友很好 → ✓ 我们永远是朋友', '永远 là phó từ, đứng trước vị ngữ']]
  },
  '方向': {
    collo: [['努力的方向', 'phương hướng nỗ lực'], ['有了方向', 'đã có hướng đi'],
            ['正确的方向', 'hướng đi đúng'], ['方向不对', 'sai hướng'],
            ['朝这个方向', 'theo hướng này']],
    patterns: [['V + 的 + 方向', 'Phương hướng để làm gì'],
               ['方向 + 对 / 不对', 'Hướng đúng / sai']]
  },
  '优秀': {
    collo: [['优秀的学生', 'học sinh xuất sắc'], ['非常优秀', 'vô cùng xuất sắc'],
            ['那么优秀', 'xuất sắc đến vậy'], ['优秀的翻译', 'phiên dịch giỏi'],
            ['成绩优秀', 'thành tích xuất sắc']],
    patterns: [['优秀的 + N (người)', 'Người xuất sắc — thường dùng cho người'],
               ['优秀 ≈ 好', '优秀 mạnh hơn, mang tính đánh giá chính thức']]
  },
  '硕士': {
    collo: [['读硕士', 'học thạc sĩ'], ['硕士毕业', 'tốt nghiệp thạc sĩ'],
            ['硕士学位', 'bằng thạc sĩ'], ['考硕士', 'thi cao học'],
            ['硕士研究生', 'học viên cao học']],
    patterns: [['读 / 考 + 硕士', 'Học / thi cao học'],
               ['学士 → 硕士 → 博士', 'Cử nhân → thạc sĩ → tiến sĩ']]
  },
  '翻译': {
    collo: [['当翻译', 'làm phiên dịch'], ['做翻译工作', 'làm công việc dịch'],
            ['翻译成中文', 'dịch sang tiếng Trung'], ['一位翻译', 'một phiên dịch viên'],
            ['翻译文章', 'dịch bài viết']],
    patterns: [['把 + N + 翻译成 + ngôn ngữ (động từ)', 'Dịch cái gì sang tiếng nào'],
               ['当 + 翻译 (danh từ)', 'Làm nghề phiên dịch']]
  },
  '确实': {
    collo: [['确实不错', 'quả thực khá tốt'], ['确实是', 'đúng là'],
            ['确实比以前好', 'quả thực tốt hơn trước'], ['确实很难', 'thật sự rất khó'],
            ['确实有道理', 'quả có lý']],
    patterns: [['Sub + 确实 + V / Adj', 'Ai đó quả thực … (xác nhận điều người khác nói)'],
               ['确实 ≈ 实在', '确实 xác nhận sự thật; 实在 nhấn mức độ']]
  },
  '兴奋': {
    collo: [['感到兴奋', 'cảm thấy phấn khởi'], ['很兴奋', 'rất hào hứng'],
            ['兴奋地拉着', 'hào hứng kéo tay'], ['兴奋得睡不着', 'phấn khích đến mất ngủ'],
            ['太兴奋了', 'phấn khích quá']],
    patterns: [['兴奋 + 得 + kết quả', 'Phấn khích đến mức nào'],
               ['兴奋地 + V', 'Hào hứng làm gì']]
  },
  '拉': {
    collo: [['拉着手', 'nắm tay'], ['拉着我去', 'kéo tôi đi'],
            ['拉近距离', 'kéo gần khoảng cách'], ['拉开门', 'kéo cửa ra'],
            ['拉他一把', 'kéo anh ta một tay']],
    patterns: [['拉 + 着 + ai + V', 'Kéo tay ai đi làm gì'],
               ['拉近 + 距离', 'Kéo gần khoảng cách — 距离 là từ bài 8']]
  },
  '建议': {
    collo: [['听听你的建议', 'nghe ý kiến của bạn'], ['有什么建议', 'có đề xuất gì'],
            ['提建议', 'đưa ra kiến nghị'], ['建议你去', 'khuyên bạn nên đi'],
            ['接受建议', 'tiếp nhận góp ý']],
    patterns: [['建议 + ai + V (động từ)', 'Đề nghị, khuyên ai làm gì'],
               ['提 / 听 + 建议 (danh từ)', 'Đưa ra / lắng nghe góp ý']]
  },
  '职业': {
    collo: [['选择职业', 'chọn nghề nghiệp'], ['每种职业', 'mỗi nghề'],
            ['职业的特点', 'đặc điểm nghề nghiệp'], ['理想的职业', 'nghề lý tưởng'],
            ['换职业', 'đổi nghề']],
    patterns: [['选择 + 职业', 'Chọn nghề nghiệp'],
               ['职业 ≠ 工作', '职业 là nghề cả đời; 工作 là công việc cụ thể']]
  },
  '关键': {
    collo: [['关键是', 'mấu chốt là'], ['是……的关键', 'là điểm then chốt của…'],
            ['关键问题', 'vấn đề then chốt'], ['最关键', 'then chốt nhất'],
            ['兴趣才是关键', 'hứng thú mới là mấu chốt']],
    patterns: [['……的关键 + 是 + …', 'Mấu chốt của việc gì là …'],
               ['关键 + 是 + mệnh đề', 'Điều quan trọng là …']]
  },
  '将来': {
    collo: [['将来的打算', 'dự định tương lai'], ['对将来', 'đối với tương lai'],
            ['将来会更好', 'tương lai sẽ tốt hơn'], ['为了将来', 'vì tương lai'],
            ['将来的发展', 'sự phát triển sau này']],
    patterns: [['将来 + Sub + V', 'Sau này ai đó sẽ làm gì'],
               ['将来 ≠ 未来', '将来 gần và cụ thể hơn; dùng cho dự định cá nhân']]
  },
  '发展': {
    collo: [['经济发展', 'kinh tế phát triển'], ['更好的发展', 'sự phát triển tốt hơn'],
            ['发展得很快', 'phát triển rất nhanh'], ['公司的发展', 'sự phát triển của công ty'],
            ['发展自己', 'phát triển bản thân']],
    patterns: [['Sub + 发展 + 得 + Adj (động từ)', 'Cái gì phát triển thế nào'],
               ['……的 + 发展 (danh từ)', 'Sự phát triển của cái gì']]
  },
  '躺': {
    collo: [['躺在床上', 'nằm trên giường'], ['躺在沙发上', 'nằm trên sô pha'],
            ['躺下', 'nằm xuống'], ['躺着看书', 'nằm đọc sách'],
            ['躺一会儿', 'nằm một lát']],
    patterns: [['躺 + 在 + nơi chốn + 上', 'Nằm trên cái gì'],
               ['躺着 + V', 'Vừa nằm vừa làm gì — 着 chỉ trạng thái kéo dài']]
  },
  '困': {
    collo: [['很困', 'rất buồn ngủ'], ['困了', 'buồn ngủ rồi'],
            ['困的时候', 'lúc buồn ngủ'], ['一点儿也不困', 'chẳng buồn ngủ chút nào'],
            ['困得睁不开眼', 'buồn ngủ díp mắt']],
    patterns: [['Sub + 很 / 有点儿 + 困', 'Ai đó rất / hơi buồn ngủ'],
               ['困 ≠ 累', '困 là buồn ngủ; 累 là mệt']]
  },
  '经济': {
    collo: [['经济发展', 'phát triển kinh tế'], ['经济条件', 'điều kiện kinh tế'],
            ['经济压力', 'áp lực kinh tế'], ['经济不错', 'kinh tế khá'],
            ['家里的经济', 'kinh tế gia đình']],
    patterns: [['经济 + 条件 / 压力 / 发展', 'Điều kiện, áp lực, phát triển kinh tế'],
               ['经济 + 好 / 不好', 'Kinh tế khá / khó khăn']]
  },
  '条件': {
    collo: [['经济条件', 'điều kiện kinh tế'], ['工作条件', 'điều kiện làm việc'],
            ['条件越好', 'điều kiện càng tốt'], ['符合条件', 'đủ điều kiện'],
            ['生活条件', 'điều kiện sống']],
    patterns: [['符合 + 条件', 'Đủ điều kiện — 符合 là từ bài 3'],
               ['条件 + 好 / 不好', 'Điều kiện tốt / kém']]
  },
  '富': {
    collo: [['富人', 'người giàu'], ['很富', 'rất giàu'],
            ['富有的人', 'người giàu có'], ['变富了', 'trở nên giàu'],
            ['富和穷', 'giàu và nghèo']],
    patterns: [['富 ↔ 穷', 'Giàu ↔ nghèo'],
               ['富 + 人', 'Người giàu — 富人 / 穷人']]
  },
  '穷': {
    collo: [['穷人', 'người nghèo'], ['家里很穷', 'nhà rất nghèo'],
            ['穷得很', 'nghèo lắm'], ['以前穷', 'trước đây nghèo'],
            ['穷人却很快乐', 'người nghèo lại rất vui']],
    patterns: [['Sub + 很 + 穷', 'Ai đó rất nghèo'],
               ['穷 ↔ 富', 'Nghèo ↔ giàu']]
  },
  '等': {
    collo: [['……等', '…vân vân'], ['等等', 'vân vân'],
            ['时间、感情等', 'thời gian, tình cảm, v.v.'], ['材料、现金等', 'hồ sơ, tiền mặt, v.v.'],
            ['书、报纸等', 'sách, báo, v.v.']],
    patterns: [['A、B、C + 等', 'A, B, C, v.v. — đặt CUỐI danh sách'],
               ['等 (děng, vân vân) ≠ 等 (děng, chờ đợi)']]
  },
  '由于': {
    collo: [['由于种种原因', 'vì nhiều nguyên nhân'], ['由于缺钱', 'vì thiếu tiền'],
            ['由于工作需要', 'do yêu cầu công việc'], ['由于天气不好', 'do thời tiết xấu'],
            ['由于……所以……', 'do… nên…']],
    patterns: [['由于 + nguyên nhân，所以 / 因此 + kết quả', 'Do … nên …'],
               ['由于 ≈ 因为', '由于 thiên văn viết, chỉ đứng ở vế TRƯỚC']]
  },
  '比如': {
    collo: [['比如说', 'ví dụ như'], ['比如一块橡皮', 'chẳng hạn một cục tẩy'],
            ['……，比如……', '…, ví dụ…'], ['比如这件事', 'chẳng hạn chuyện này'],
            ['很多，比如', 'rất nhiều, ví dụ như']],
    patterns: [['……，比如 + N', '…, ví dụ như …'],
               ['比如 ≈ 例如', '比如 thiên khẩu ngữ, 例如 (bài 6) thiên văn viết']]
  },
  '橡皮': {
    collo: [['一块橡皮', 'một cục tẩy'], ['买块橡皮', 'mua cục tẩy'],
            ['借橡皮', 'mượn tẩy'], ['忘带橡皮', 'quên mang tẩy'],
            ['用橡皮擦', 'dùng tẩy để xóa']],
    patterns: [['một + 块 + 橡皮', 'Lượng từ 块 cho vật nhỏ dạng khối'],
               ['橡 + 皮', 'Cao su (橡) da (皮) — cục tẩy cao su']]
  },
  '糖': {
    collo: [['一块糖', 'một viên kẹo'], ['吃糖', 'ăn kẹo'],
            ['买糖', 'mua kẹo'], ['不放糖', 'không cho đường'],
            ['糖很甜', 'kẹo rất ngọt']],
    patterns: [['một + 块 + 糖', 'Một viên kẹo — cùng lượng từ với 橡皮'],
               ['糖 vừa là "kẹo" vừa là "đường"']]
  },
  '低': {
    collo: [['工资低', 'lương thấp'], ['分出高低', 'phân cao thấp'],
            ['幸福感的高低', 'mức độ hạnh phúc'], ['价格低', 'giá thấp'],
            ['声音低', 'giọng nhỏ']],
    patterns: [['低 ↔ 高', 'Thấp ↔ cao'],
               ['分出 + 高低', 'Phân định hơn kém']]
  },
  '答案': {
    collo: [['标准答案', 'đáp án chuẩn'], ['正确的答案', 'đáp án đúng'],
            ['没有标准答案', 'không có đáp án chuẩn'], ['找答案', 'tìm đáp án'],
            ['一个答案', 'một đáp án']],
    patterns: [['标准 / 正确的 + 答案', 'Đáp án chuẩn, đáp án đúng'],
               ['答案 ≠ 回答', '答案 là kết quả; 回答 là hành động trả lời']]
  }
};
