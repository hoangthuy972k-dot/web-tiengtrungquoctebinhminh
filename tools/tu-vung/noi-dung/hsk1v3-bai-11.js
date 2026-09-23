// Noi dung TU MOI HSK1 3.0 bai 11 (chu de: sinh hoat trong ngay, hoc hanh, hoi dap).
module.exports = {
  '时候': {
    collo: [['什么时候', 'khi nào'], ['上课的时候', 'lúc vào học'],
            ['吃饭的时候', 'lúc ăn cơm'], ['工作的时候', 'lúc làm việc']],
    patterns: [['什么时候 + động từ', 'Hỏi thời điểm: 你什么时候回家？'],
               ['động từ + 的时候', 'Lúc làm gì: 吃饭的时候']]
  },
  '饭店': {
    collo: [['去饭店', 'đến nhà hàng'], ['在饭店吃饭', 'ăn cơm ở nhà hàng'],
            ['这个饭店', 'nhà hàng này'], ['饭店的菜', 'món của nhà hàng']],
    patterns: [['在 + 饭店 + 吃饭', 'Ăn cơm ở nhà hàng'],
               ['饭 + 店', 'Tiệm (店) cơm (饭) — cùng kiểu với 商店 · 书店']]
  },
  '知道': {
    collo: [['不知道', 'không biết'], ['知道他的名字', 'biết tên anh ấy'],
            ['你知道吗', 'bạn có biết không'], ['知道这件事', 'biết chuyện này']],
    patterns: [['知道 + mệnh đề', 'Biết một chuyện gì: 我知道他在哪儿'],
               ['知道 (biết một chuyện) ≠ 认识 (quen biết một người)']]
  },
  '正在': {
    collo: [['正在上课', 'đang trong tiết học'], ['正在吃饭', 'đang ăn cơm'],
            ['正在读书', 'đang đọc sách'], ['正在工作', 'đang làm việc']],
    patterns: [['Sub + 正在 + động từ', 'Đang làm gì ngay lúc này'],
               ['正在 đứng TRƯỚC động từ, không đứng cuối câu']]
  },
  '找': {
    collo: [['找朋友', 'tìm bạn'], ['找老师', 'tìm thầy'],
            ['找什么', 'tìm cái gì'], ['找我的书', 'tìm quyển sách của tôi']],
    patterns: [['找 + người / vật', 'Tìm ai, tìm cái gì'],
               ['找 có bộ 扌 (tay) bên trái — tìm bằng tay']]
  },
  '开车': {
    collo: [['会开车', 'biết lái xe'], ['开车去', 'lái xe đi'],
            ['不会开车', 'không biết lái xe'], ['开车上班', 'lái xe đi làm']],
    patterns: [['开 + 车', 'Lái xe — cụm cố định'],
               ['开车 + động từ', 'Lái xe đi làm gì: 开车上班']]
  },
  '车': {
    collo: [['开车', 'lái xe'], ['坐车', 'đi xe'],
            ['出租车', 'taxi'], ['车上', 'trên xe']],
    patterns: [['坐 / 开 + 车', 'Ngồi xe, lái xe'],
               ['车 là chữ tượng hình — nét ngang là trục và bánh xe']]
  },
  '在': {
    collo: [['正在上课', 'đang trong tiết học'], ['在家', 'ở nhà'],
            ['在读书', 'đang đọc sách'], ['在哪里', 'ở đâu']],
    patterns: [['Sub + 在 + động từ', '在 đứng trước động từ cũng chỉ việc ĐANG diễn ra'],
               ['在 + nơi chốn (ở đâu) và 在 + động từ (đang làm gì) — hai cách dùng']]
  },
  '读': {
    collo: [['读书', 'đọc sách'], ['读大学', 'học đại học'],
            ['读中文书', 'đọc sách tiếng Trung'], ['正在读', 'đang đọc']],
    patterns: [['读 + 书 / 大学', 'Đọc sách; học đại học'],
               ['读大学 — đang theo học ở bậc đại học']]
  },
  '大学': {
    collo: [['读大学', 'học đại học'], ['去大学', 'đến trường đại học'],
            ['大学的老师', 'giảng viên đại học'], ['中国大学', 'đại học Trung Quốc']],
    patterns: [['读 / 去 + 大学', 'Học đại học, đến trường đại học'],
               ['大 + 学', 'Trường (学) bậc lớn (大) — khác 学校 nói chung']]
  },
  '大学生': {
    collo: [['是大学生', 'là sinh viên'], ['中国大学生', 'sinh viên Trung Quốc'],
            ['大学生朋友', 'người bạn sinh viên'], ['很多大学生', 'rất nhiều sinh viên']],
    patterns: [['Sub + 是 + 大学生', 'Ai đó là sinh viên'],
               ['大学 + 生', 'Người học (生) ở đại học (大学)']]
  },
  '学': {
    collo: [['学中文', 'học tiếng Trung'], ['学医', 'học y'],
            ['学开车', 'học lái xe'], ['想学', 'muốn học']],
    patterns: [['学 + môn / kỹ năng', 'Học gì: 学中文 · 学开车'],
               ['学 (học một môn) và 学习 (việc học nói chung)']]
  },
  '医': {
    collo: [['学医', 'học y'], ['医生', 'bác sĩ'],
            ['医院', 'bệnh viện'], ['读医', 'theo ngành y']],
    patterns: [['学 + 医', 'Học ngành y'],
               ['医 nằm trong 医生 và 医院 — cùng một gốc nghĩa']]
  },
  '弟弟': {
    collo: [['我弟弟', 'em trai tôi'], ['两个弟弟', 'hai em trai'],
            ['弟弟的名字', 'tên của em trai'], ['弟弟的书', 'sách của em trai']],
    patterns: [['ai + 弟弟', 'Em trai của ai — người thân hay bỏ 的'],
               ['哥哥 (anh) ↔ 弟弟 (em trai) · 姐姐 (chị) ↔ 妹妹 (em gái)']]
  },
  '起床': {
    collo: [['几点起床', 'mấy giờ dậy'], ['早上起床', 'sáng dậy'],
            ['起床后', 'sau khi dậy'], ['不想起床', 'không muốn dậy']],
    patterns: [['thời gian + 起床', 'Mấy giờ ngủ dậy: 六点起床'],
               ['起 + 床', 'Rời (起) khỏi giường (床)']]
  },
  '睡觉': {
    collo: [['几点睡觉', 'mấy giờ đi ngủ'], ['想睡觉', 'muốn ngủ'],
            ['睡觉前', 'trước khi ngủ'], ['去睡觉', 'đi ngủ']],
    patterns: [['thời gian + 睡觉', 'Mấy giờ đi ngủ'],
               ['睡觉 (đi ngủ) ↔ 起床 (ngủ dậy)']]
  },
  '睡': {
    collo: [['睡觉', 'ngủ'], ['想睡', 'buồn ngủ'],
            ['睡一会儿', 'ngủ một lát'], ['不睡', 'không ngủ']],
    patterns: [['睡 + 觉', 'Ngủ một giấc — 睡觉 là cụm quen thuộc'],
               ['睡 có bộ 目 (mắt) bên trái — ngủ thì nhắm mắt']]
  },
  '那里': {
    collo: [['在那里', 'ở đằng kia'], ['去那里', 'đến đằng kia'],
            ['那里的饭店', 'nhà hàng đằng kia'], ['那里有', 'đằng kia có']],
    patterns: [['在 / 去 + 那里', 'Ở đằng kia, đi đằng kia'],
               ['那里 = 那儿 — hai cách nói cùng nghĩa']]
  },
  '哪里': {
    collo: [['在哪里', 'ở đâu'], ['去哪里', 'đi đâu'],
            ['哪里的', 'của nơi nào'], ['哪里有', 'ở đâu có']],
    patterns: [['在 / 去 + 哪里？', 'Hỏi vị trí, nơi đến'],
               ['哪里 = 哪儿 — 哪里 thiên văn viết hơn']]
  },
  '昨天': {
    collo: [['昨天晚上', 'tối qua'], ['昨天上午', 'sáng qua'],
            ['昨天去', 'hôm qua đi'], ['昨天没去', 'hôm qua không đi']],
    patterns: [['昨天 + Sub + động từ', 'Việc đã qua — động từ vẫn giữ nguyên hình thức'],
               ['昨天 · 今天 · 明天 — ba mốc thời gian đi liền một bộ']]
  },
  '问': {
    collo: [['问老师', 'hỏi thầy'], ['问什么', 'hỏi gì'],
            ['请问', 'xin hỏi'], ['问朋友', 'hỏi bạn']],
    patterns: [['问 + người', 'Hỏi ai: 问老师'],
               ['问 (hỏi) ≠ 说 (nói) — 问 luôn chờ câu trả lời']]
  },
  '对': {
    collo: [['对了', 'đúng rồi'], ['不对', 'không đúng'],
            ['很对', 'rất đúng'], ['对，我知道', 'đúng, tôi biết']],
    patterns: [['对 / 不对', 'Đúng — không đúng: câu đáp ngắn rất hay dùng'],
               ['对 cũng là câu đáp khi ai đó đoán trúng']]
  },
  '说': {
    collo: [['说中文', 'nói tiếng Trung'], ['说什么', 'nói gì'],
            ['会说', 'biết nói'], ['说中文的人', 'người nói tiếng Trung']],
    patterns: [['说 + ngôn ngữ', 'Nói thứ tiếng nào: 说中文'],
               ['说 (nói ra lời) ≠ 问 (hỏi, chờ trả lời)']]
  },
  '要': {
    collo: [['要一个', 'lấy một cái'], ['要什么', 'muốn gì'],
            ['不要', 'không cần'], ['要去', 'định đi']],
    patterns: [['要 + danh từ', 'Cần, lấy cái gì: 我要一个包子'],
               ['要 + động từ', 'Định làm gì: 我要去上课']]
  },
  '小朋友': {
    collo: [['那个小朋友', 'em bé kia'], ['小朋友们', 'các em nhỏ'],
            ['小朋友的名字', 'tên của em bé'], ['三个小朋友', 'ba em nhỏ']],
    patterns: [['số + 个 + 小朋友', 'Lượng từ của 小朋友 là 个'],
               ['小朋友 là cách người lớn gọi trẻ con, nghe rất thân mật']]
  }
};
