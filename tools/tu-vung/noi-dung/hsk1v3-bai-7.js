// Noi dung TU MOI HSK1 3.0 bai 7 (chu de: gio giac, lich trong ngay, hen gap).
module.exports = {
  '现在': {
    collo: [['现在几点', 'bây giờ mấy giờ'], ['现在去', 'bây giờ đi'],
            ['现在上课', 'bây giờ vào học'], ['现在在家', 'bây giờ ở nhà']],
    patterns: [['现在 + Sub + động từ', 'Từ chỉ thời gian đứng đầu câu hoặc sau chủ ngữ'],
               ['现 + 在', 'Ngay (在) lúc này (现)']]
  },
  '点': {
    collo: [['几点', 'mấy giờ'], ['八点', 'tám giờ'],
            ['两点半', 'hai giờ rưỡi'], ['现在几点', 'bây giờ mấy giờ']],
    patterns: [['số + 点', 'Mấy giờ: 八点 — tám giờ'],
               ['Nói giờ thì không cần động từ 是: 现在八点']]
  },
  '早上': {
    collo: [['今天早上', 'sáng nay'], ['明天早上', 'sáng mai'],
            ['早上八点', 'tám giờ sáng'], ['早上上课', 'sáng đi học']],
    patterns: [['ngày + 早上', 'Ghép với 今天, 明天: 今天早上'],
               ['早上 · 上午 · 中午 · 下午 · 晚上 — năm buổi trong ngày']]
  },
  '上午': {
    collo: [['今天上午', 'sáng nay'], ['上午上课', 'buổi sáng có tiết'],
            ['上午八点', 'tám giờ sáng'], ['明天上午', 'sáng mai']],
    patterns: [['ngày + 上午', 'Buổi sáng của ngày nào'],
               ['早上 là sáng sớm; 上午 là cả buổi sáng đến trưa']]
  },
  '分': {
    collo: [['十分', 'mười phút'], ['八点十分', 'tám giờ mười'],
            ['几点几分', 'mấy giờ mấy phút'], ['五分', 'năm phút']],
    patterns: [['số + 点 + số + 分', 'Giờ trước, phút sau: 八点十分'],
               ['分 (phút trên đồng hồ) khác 分钟 (thời lượng)']]
  },
  '课': {
    collo: [['上课', 'vào học'], ['下课', 'tan học'],
            ['中文课', 'tiết tiếng Trung'], ['几点上课', 'mấy giờ vào học']],
    patterns: [['上 / 下 + 课', 'Vào học — tan học'],
               ['môn học + 课', 'Tiết môn gì: 中文课']]
  },
  '下午': {
    collo: [['今天下午', 'chiều nay'], ['明天下午', 'chiều mai'],
            ['下午去', 'chiều đi'], ['下午两点', 'hai giờ chiều']],
    patterns: [['ngày + 下午', 'Buổi chiều của ngày nào'],
               ['下 + 午', 'Sau (下) buổi trưa (午)']]
  },
  '见': {
    collo: [['明天见', 'mai gặp'], ['下午见', 'chiều gặp'],
            ['晚上见', 'tối gặp'], ['见老师', 'gặp thầy']],
    patterns: [['thời gian + 见', 'Lời tạm biệt hẹn gặp: 明天见！'],
               ['再见 cũng là 见 — nghĩa đen là gặp lại']]
  },
  '吧': {
    collo: [['我们去吧', 'chúng ta đi nhé'], ['好吧', 'thôi được'],
            ['你说吧', 'bạn nói đi'], ['休息吧', 'nghỉ đi']],
    patterns: [['câu + 吧', 'Làm dịu giọng, thành lời đề nghị: 我们去吧'],
               ['吧 (đề nghị nhẹ nhàng) ≠ 吗 (câu hỏi)']]
  },
  '电影院': {
    collo: [['去电影院', 'đi rạp chiếu phim'], ['在电影院', 'ở rạp chiếu phim'],
            ['电影院里', 'trong rạp'], ['那边的电影院', 'rạp đằng kia']],
    patterns: [['去 / 在 + 电影院', 'Đi rạp, ở rạp'],
               ['电影 + 院', 'Nhà (院) chiếu phim (电影)']]
  },
  '看': {
    collo: [['看电影', 'xem phim'], ['看什么', 'xem gì'],
            ['想看', 'muốn xem'], ['不看', 'không xem']],
    patterns: [['看 + 电影', 'Xem phim — luôn dùng động từ 看'],
               ['看 là nhìn bằng mắt: 看电影 · 看手机']]
  },
  '电影': {
    collo: [['看电影', 'xem phim'], ['中国电影', 'phim Trung Quốc'],
            ['好看的电影', 'bộ phim hay'], ['想看电影', 'muốn xem phim']],
    patterns: [['看 + 电影', 'Xem phim'],
               ['电影 · 电话 · 电脑 — ba từ đều bắt đầu bằng 电']]
  },
  '事': {
    collo: [['有事', 'có việc'], ['没事', 'không có việc gì'],
            ['什么事', 'chuyện gì'], ['家里有事', 'nhà có việc']],
    patterns: [['有 / 没 + 事', 'Có việc — không có việc'],
               ['没事 vừa là "không bận", vừa là "không sao đâu"']]
  },
  '上课': {
    collo: [['几点上课', 'mấy giờ vào học'], ['上午上课', 'sáng có tiết'],
            ['去上课', 'đi học'], ['不上课', 'không có tiết']],
    patterns: [['thời gian + 上课', 'Mấy giờ vào học: 八点上课'],
               ['上课 (vào học) ↔ 下课 (tan học)']]
  },
  '呢': {
    collo: [['你呢', 'còn bạn thì sao'], ['他呢', 'còn anh ấy thì sao'],
            ['明天呢', 'còn ngày mai thì sao'], ['我的手机呢', 'điện thoại của tôi đâu']],
    patterns: [['danh từ + 呢？', 'Hỏi lại cùng một chuyện, hoặc hỏi cái gì ở đâu'],
               ['我的手机呢？= Điện thoại của tôi đâu rồi?']]
  },
  '半': {
    collo: [['两点半', 'hai giờ rưỡi'], ['八点半', 'tám giờ rưỡi'],
            ['半个', 'nửa cái'], ['一半', 'một nửa']],
    patterns: [['số + 点 + 半', 'Mấy giờ rưỡi: 两点半'],
               ['半 đứng SAU 点: ✗ 半两点 → ✓ 两点半']]
  },
  '下课': {
    collo: [['几点下课', 'mấy giờ tan học'], ['下课休息', 'tan học rồi nghỉ'],
            ['下课回家', 'tan học về nhà'], ['还没下课', 'chưa tan học']],
    patterns: [['thời gian + 下课', 'Mấy giờ tan học'],
               ['下课 (tan học) ↔ 上课 (vào học)']]
  },
  '在': {
    collo: [['在家', 'ở nhà'], ['在学校', 'ở trường'],
            ['在电影院', 'ở rạp chiếu phim'], ['在哪儿', 'ở đâu']],
    patterns: [['Sub + 在 + nơi chốn', '在 làm ĐỘNG TỪ: 我在家'],
               ['Sub + 在 + nơi chốn + động từ', '在 làm GIỚI TỪ: 我在家看电影']]
  },
  '家': {
    collo: [['在家', 'ở nhà'], ['回家', 'về nhà'],
            ['家里', 'trong nhà'], ['我家', 'nhà tôi']],
    patterns: [['在 / 回 + 家', 'Ở nhà, về nhà — không cần giới từ'],
               ['家 vừa là ngôi nhà, vừa là gia đình']]
  },
  '里': {
    collo: [['家里', 'trong nhà'], ['电影院里', 'trong rạp'],
            ['店里', 'trong cửa hàng'], ['医院里', 'trong bệnh viện']],
    patterns: [['danh từ + 里', 'Bên trong cái gì: 家里 · 店里'],
               ['里 đứng SAU danh từ, ngược với tiếng Việt']]
  },
  '晚上': {
    collo: [['今天晚上', 'tối nay'], ['明天晚上', 'tối mai'],
            ['晚上看电影', 'tối xem phim'], ['晚上八点', 'tám giờ tối']],
    patterns: [['ngày + 晚上', 'Buổi tối của ngày nào: 今天晚上'],
               ['晚上 (buổi tối) và 晚饭 (bữa tối) dùng chung chữ 晚']]
  },
  '医院': {
    collo: [['去医院', 'đi bệnh viện'], ['在医院', 'ở bệnh viện'],
            ['医院里', 'trong bệnh viện'], ['在医院上班', 'làm việc ở bệnh viện']],
    patterns: [['去 / 在 + 医院', 'Đi bệnh viện, ở bệnh viện'],
               ['医 + 院', 'Khu nhà (院) chữa bệnh (医)']]
  },
  '上班': {
    collo: [['几点上班', 'mấy giờ đi làm'], ['在医院上班', 'làm việc ở bệnh viện'],
            ['去上班', 'đi làm'], ['不上班', 'không đi làm']],
    patterns: [['在 + nơi chốn + 上班', 'Làm việc ở đâu — nơi chốn đứng TRƯỚC'],
               ['上班 (đi làm) ↔ 下班 (tan làm)']]
  },
  '店': {
    collo: [['饭店', 'nhà hàng'], ['店里', 'trong cửa hàng'],
            ['那边的店', 'cửa hàng đằng kia'], ['去店里', 'đến cửa hàng']],
    patterns: [['loại + 店', 'Ghép thành tên cửa hàng: 饭店 — tiệm cơm'],
               ['店 chỉ nơi buôn bán, nhỏ hơn 超市']]
  },
  '菜': {
    collo: [['做菜', 'nấu món ăn'], ['中国菜', 'món Trung Quốc'],
            ['店里的菜', 'món của quán'], ['好吃的菜', 'món ngon']],
    patterns: [['做 + 菜', 'Nấu món ăn — dùng 做'],
               ['菜 vừa là rau, vừa là món ăn nói chung']]
  },
  '分钟': {
    collo: [['十分钟', 'mười phút'], ['几分钟', 'mấy phút'],
            ['五分钟', 'năm phút'], ['十分钟后', 'mười phút sau']],
    patterns: [['số + 分钟', 'Thời lượng bao nhiêu phút: 十分钟'],
               ['分钟 (kéo dài bao lâu) ≠ 分 (điểm phút trên đồng hồ)']]
  },
  '后': {
    collo: [['十分钟后', 'mười phút sau'], ['下课后', 'sau khi tan học'],
            ['上班后', 'sau khi đi làm'], ['八点后', 'sau tám giờ']],
    patterns: [['thời gian / động từ + 后', 'Sau khi …: 下课后'],
               ['后 luôn đứng SAU, không đứng trước']]
  }
};
