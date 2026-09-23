// Noi dung TU MOI HSK1 bai 7 (chu de: ngay thang, thu, di hoc, doc sach).
module.exports = {
  '请': {
    collo: [['请问', 'xin hỏi'], ['请说', 'mời nói'], ['请写', 'mời viết'], ['请读', 'mời đọc']],
    patterns: [['请 + động từ', 'Lời mời lịch sự: 请说 · 请写'],
               ['请问 đặt ở ĐẦU câu hỏi cho lễ phép']]
  },
  '问': {
    collo: [['请问', 'xin hỏi'], ['问老师', 'hỏi thầy'],
            ['问什么', 'hỏi gì'], ['问同学', 'hỏi bạn cùng lớp']],
    patterns: [['问 + người', 'Hỏi ai: 问老师'],
               ['问 (hỏi) ≠ 说 (nói) — 问 luôn chờ câu trả lời']]
  },
  '今天': {
    collo: [['今天几号', 'hôm nay ngày mấy'], ['今天星期几', 'hôm nay thứ mấy'],
            ['今天去学校', 'hôm nay đi học'], ['今天不去', 'hôm nay không đi']],
    patterns: [['今天 + Sub + động từ', 'Từ chỉ thời gian đứng TRƯỚC động từ'],
               ['今天 · 昨天 · 明天 — ba mốc thời gian đi liền một bộ']]
  },
  '号': {
    collo: [['几号', 'ngày mấy'], ['五号', 'ngày mùng năm'],
            ['今天几号', 'hôm nay ngày mấy'], ['十号', 'ngày mười']],
    patterns: [['số + 号', 'Ngày bao nhiêu: 五号 — ngày mùng 5'],
               ['号 dùng khi nói; văn viết dùng 日']]
  },
  '月': {
    collo: [['几月', 'tháng mấy'], ['五月', 'tháng năm'],
            ['六月十号', 'ngày mười tháng sáu'], ['今年五月', 'tháng năm năm nay']],
    patterns: [['số + 月 + số + 号', 'Thứ tự: lớn trước nhỏ sau — 六月十号'],
               ['Tiếng Trung nói năm → tháng → ngày, ngược với tiếng Việt']]
  },
  '星期': {
    collo: [['星期几', 'thứ mấy'], ['星期一', 'thứ hai'],
            ['星期三', 'thứ tư'], ['今天星期几', 'hôm nay thứ mấy']],
    patterns: [['星期 + số', 'Thứ trong tuần: 星期一 là THỨ HAI, không phải thứ nhất'],
               ['Chủ nhật gọi riêng là 星期天, không đánh số']]
  },
  '昨天': {
    collo: [['昨天去', 'hôm qua đi'], ['昨天不去', 'hôm qua không đi'],
            ['昨天星期几', 'hôm qua thứ mấy'], ['昨天看书', 'hôm qua đọc sách']],
    patterns: [['昨天 + Sub + động từ', 'Việc đã qua — tiếng Trung không đổi hình thức động từ'],
               ['昨 + 天', 'Ngày (天) hôm trước (昨)']]
  },
  '明天': {
    collo: [['明天去', 'ngày mai đi'], ['明天不去', 'ngày mai không đi'],
            ['明天星期几', 'mai thứ mấy'], ['明天看书', 'mai đọc sách']],
    patterns: [['明天 + Sub + động từ', 'Việc sắp tới — vẫn dùng động từ như thường'],
               ['明 + 天', 'Ngày (天) sáng sau (明)']]
  },
  '去': {
    collo: [['去学校', 'đi đến trường'], ['去中国', 'đi Trung Quốc'],
            ['不去', 'không đi'], ['明天去', 'mai đi']],
    patterns: [['去 + nơi chốn', 'Đi đến đâu: 去学校'],
               ['Sau 去 là NƠI CHỐN, không cần thêm giới từ']]
  },
  '学校': {
    collo: [['去学校', 'đến trường'], ['学校的老师', 'giáo viên của trường'],
            ['我的学校', 'trường của tôi'], ['中国学校', 'trường học Trung Quốc']],
    patterns: [['去 + 学校', 'Đi học, đến trường'],
               ['学 + 校', 'Nơi (校) để học (学)']]
  },
  '看': {
    collo: [['看书', 'đọc sách'], ['看什么', 'xem gì'],
            ['看汉字', 'nhìn chữ Hán'], ['不看', 'không xem']],
    patterns: [['看 + 书', 'Đọc sách — người Trung Quốc nói 看书, không nói 读书 khi đọc thầm'],
               ['看 (nhìn, xem bằng mắt) ≠ 读 (đọc thành tiếng)']]
  },
  '书': {
    collo: [['看书', 'đọc sách'], ['汉语书', 'sách tiếng Trung'],
            ['我的书', 'sách của tôi'], ['老师的书', 'sách của thầy']],
    patterns: [['看 + 书', 'Đọc sách'],
               ['汉语 + 书', 'Sách tiếng Trung — ghép thẳng, không cần 的']]
  }
};
