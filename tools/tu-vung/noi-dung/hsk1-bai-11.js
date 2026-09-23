// Noi dung TU MOI HSK1 bai 11 (chu de: gio giac, sinh hoat trong ngay).
module.exports = {
  '现在': {
    collo: [['现在几点', 'bây giờ mấy giờ'], ['现在去', 'bây giờ đi'],
            ['现在在家', 'bây giờ ở nhà'], ['现在吃饭', 'bây giờ ăn cơm']],
    patterns: [['现在 + Sub + động từ', 'Từ chỉ thời gian đứng đầu câu hoặc sau chủ ngữ'],
               ['现 + 在', 'Ngay (在) lúc này (现)']]
  },
  '点': {
    collo: [['几点', 'mấy giờ'], ['六点', 'sáu giờ'],
            ['十点', 'mười giờ'], ['现在几点', 'bây giờ mấy giờ']],
    patterns: [['số + 点', 'Mấy giờ: 六点 — sáu giờ'],
               ['Nói giờ thì không cần động từ 是: 现在六点']]
  },
  '分': {
    collo: [['十分', 'mười phút'], ['六点十分', 'sáu giờ mười'],
            ['几点几分', 'mấy giờ mấy phút'], ['五分', 'năm phút']],
    patterns: [['số + 点 + số + 分', 'Giờ trước, phút sau: 六点十分'],
               ['分 (phút trong đồng hồ) khác 分钟 (thời lượng, bài 14)']]
  },
  '中午': {
    collo: [['中午吃饭', 'trưa ăn cơm'], ['今天中午', 'trưa nay'],
            ['明天中午', 'trưa mai'], ['中午回家', 'trưa về nhà']],
    patterns: [['ngày + 中午', 'Ghép với 今天, 明天: 今天中午'],
               ['中 + 午', 'Chính (中) giữa trưa (午)']]
  },
  '吃饭': {
    collo: [['去吃饭', 'đi ăn cơm'], ['中午吃饭', 'trưa ăn cơm'],
            ['在家吃饭', 'ăn cơm ở nhà'], ['想吃饭', 'muốn ăn cơm']],
    patterns: [['在 + nơi chốn + 吃饭', 'Ăn cơm ở đâu'],
               ['吃饭 là ăn bữa nói chung; 吃米饭 là ăn đúng món cơm']]
  },
  '时候': {
    collo: [['什么时候', 'khi nào'], ['吃饭的时候', 'lúc ăn cơm'],
            ['看书的时候', 'lúc đọc sách'], ['工作的时候', 'lúc làm việc']],
    patterns: [['什么时候 + động từ', 'Hỏi thời điểm: 你什么时候回家？'],
               ['động từ + 的时候', 'Lúc làm gì: 吃饭的时候']]
  },
  '回': {
    collo: [['回家', 'về nhà'], ['回学校', 'về trường'],
            ['回中国', 'về Trung Quốc'], ['什么时候回', 'khi nào về']],
    patterns: [['回 + nơi chốn', 'Về đâu: 回家 — không cần thêm giới từ'],
               ['回 (về chỗ cũ) ≠ 去 (đi đến một nơi)']]
  },
  '我们': {
    collo: [['我们的老师', 'giáo viên của chúng tôi'], ['我们家', 'nhà chúng tôi'],
            ['我们去', 'chúng ta đi'], ['我们的学校', 'trường của chúng tôi']],
    patterns: [['我 + 们', '们 là đuôi số nhiều: 我们 · 你们'],
               ['我们 · 你们 · 他们 — bộ ba đại từ số nhiều']]
  },
  '电影': {
    collo: [['看电影', 'xem phim'], ['中国电影', 'phim Trung Quốc'],
            ['好看的电影', 'bộ phim hay'], ['想看电影', 'muốn xem phim']],
    patterns: [['看 + 电影', 'Xem phim — dùng động từ 看'],
               ['电影 và 电脑 đều bắt đầu bằng chữ 电']]
  },
  '住': {
    collo: [['住在中国', 'sống ở Trung Quốc'], ['住这儿', 'ở đây'],
            ['住在学校', 'ở trong trường'], ['住哪儿', 'ở chỗ nào']],
    patterns: [['住 + 在 + nơi chốn', 'Ở tại đâu — chỗ sinh sống lâu dài: 住在中国'],
               ['住 (sống lâu dài) ≠ 在 (có mặt lúc này)']]
  },
  '前': {
    collo: [['吃饭前', 'trước khi ăn'], ['回家前', 'trước khi về nhà'],
            ['工作前', 'trước khi làm việc'], ['六点前', 'trước sáu giờ']],
    patterns: [['động từ + 前', 'Trước khi làm gì: 吃饭前'],
               ['前 (trước khi, thời gian) và 前面 (phía trước, nơi chốn)']]
  }
};
