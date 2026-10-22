// Noi dung TU MOI HSK1 3.0 bai 12 (chu de: thoi tiet, om dau, uong thuoc).
module.exports = {
  '天气': {
    collo: [['今天的天气', 'thời tiết hôm nay'], ['天气怎么样', 'thời tiết thế nào'],
            ['这里的天气', 'thời tiết ở đây'], ['好天气', 'thời tiết đẹp']],
    patterns: [['天气 + 怎么样？', 'Hỏi thời tiết: 今天天气怎么样？'],
               ['天 + 气', 'Khí trời (气) của bầu trời (天)']]
  },
  '这里': {
    collo: [['在这里', 'ở đây'], ['这里的天气', 'thời tiết ở đây'],
            ['来这里', 'đến đây'], ['这里有', 'ở đây có']],
    patterns: [['在 / 来 + 这里', 'Ở đây, đến đây'],
               ['这里 = 这儿 — 这里 thiên văn viết hơn']]
  },
  '天': {
    collo: [['三天', 'ba ngày'], ['几天', 'mấy ngày'],
            ['一天', 'một ngày'], ['两天', 'hai ngày']],
    patterns: [['số + 天', 'Bao nhiêu ngày: 三天 — 天 tự làm lượng từ'],
               ['✗ 三个天 → ✓ 三天', '天 · 年 · 岁 đều không cần thêm 个']]
  },
  '下雨': {
    collo: [['今天下雨', 'hôm nay mưa'], ['不下雨', 'không mưa'],
            ['下雨了', 'mưa rồi'], ['明天下雨', 'mai mưa']],
    patterns: [['下雨 + 了', 'Mưa rồi — 了 cho thấy trời vừa đổi'],
               ['下雨 không cần chủ ngữ: 下雨了 ✓']]
  },
  '了': {
    collo: [['下雨了', 'mưa rồi'], ['冷了', 'lạnh rồi'],
            ['生病了', 'ốm rồi'], ['来了', 'đến rồi']],
    patterns: [['câu + 了', 'Chỉ sự thay đổi: 下雨了 — trước chưa mưa, nay mưa rồi'],
               ['了 đặt CUỐI câu, mang nghĩa trước chưa vậy nay đã vậy']]
  },
  '雨': {
    collo: [['下雨', 'mưa'], ['大雨', 'mưa to'],
            ['小雨', 'mưa nhỏ'], ['下大雨', 'trời mưa to']],
    patterns: [['下 + 雨', 'Trời mưa — dùng động từ 下'],
               ['雨 là chữ tượng hình — bốn chấm là hạt mưa rơi']]
  },
  '有点儿': {
    collo: [['有点儿冷', 'hơi lạnh'], ['有点儿热', 'hơi nóng'],
            ['有点儿贵', 'hơi đắt'], ['有点儿忙', 'hơi bận']],
    patterns: [['有点儿 + tính từ', 'Hơi … — mang ý KHÔNG hài lòng: 有点儿冷'],
               ['有点儿 đứng TRƯỚC tính từ; 一点儿 đứng SAU: 有点儿冷 / 冷一点儿']]
  },
  '觉得': {
    collo: [['觉得冷', 'thấy lạnh'], ['觉得好', 'thấy tốt'],
            ['我觉得', 'tôi thấy rằng'], ['不觉得', 'không thấy']],
    patterns: [['Sub + 觉得 + mệnh đề', 'Ai đó cảm thấy …: 我觉得有点儿冷'],
               ['觉得 dùng để nêu cảm nhận, ý kiến của mình']]
  },
  '冷': {
    collo: [['很冷', 'rất lạnh'], ['有点儿冷', 'hơi lạnh'],
            ['太冷了', 'lạnh quá'], ['不冷', 'không lạnh']],
    patterns: [['很 / 太 + 冷', 'Lạnh — nói về thời tiết'],
               ['冷 có bộ 冫 (hai chấm băng) bên trái']]
  },
  '下': {
    collo: [['下雨', 'mưa'], ['下雪', 'tuyết rơi'],
            ['桌子下', 'dưới bàn'], ['下课', 'tan học']],
    patterns: [['下 + 雨 / 雪', 'Trời mưa, trời tuyết'],
               ['下 vừa là rơi xuống, vừa là phía dưới']]
  },
  '雪': {
    collo: [['下雪', 'tuyết rơi'], ['大雪', 'tuyết lớn'],
            ['下雪了', 'tuyết rơi rồi'], ['看雪', 'ngắm tuyết']],
    patterns: [['下 + 雪', 'Trời đổ tuyết — dùng động từ 下'],
               ['下雨 · 下雪 — cùng một cách nói về thời tiết']]
  },
  '来': {
    collo: [['来这里', 'đến đây'], ['来公司', 'tới công ty'],
            ['不来', 'không đến'], ['来了', 'đến rồi']],
    patterns: [['来 + nơi chốn', 'Đến đâu — lại gần người nói'],
               ['来 (lại gần) ↔ 去 (rời xa) — nhìn từ chỗ người nói']]
  },
  '公司': {
    collo: [['去公司', 'đến công ty'], ['在公司', 'ở công ty'],
            ['公司的人', 'người của công ty'], ['来公司', 'tới công ty']],
    patterns: [['去 / 在 + 公司', 'Đi công ty, ở công ty'],
               ['公 + 司', 'Nơi làm việc chung — cùng kiểu với 商店 · 书店']]
  },
  '生病': {
    collo: [['生病了', 'ốm rồi'], ['没生病', 'không ốm'],
            ['生病的孩子', 'đứa trẻ bị ốm'], ['生病的时候', 'lúc bị ốm']],
    patterns: [['Sub + 生病 + 了', 'Ai đó bị ốm rồi'],
               ['生病 (bị ốm) → 看病 (đi khám) → 吃药 (uống thuốc)']]
  },
  '看病': {
    collo: [['去医院看病', 'đi bệnh viện khám'], ['看病的人', 'người đi khám'],
            ['给他看病', 'khám cho anh ấy'], ['来看病', 'đến khám']],
    patterns: [['去 + 医院 + 看病', 'Đi bệnh viện khám bệnh'],
               ['看病 dùng cho cả người bệnh lẫn bác sĩ']]
  },
  '病': {
    collo: [['生病', 'bị ốm'], ['看病', 'khám bệnh'],
            ['病人', 'bệnh nhân'], ['他的病', 'bệnh của anh ấy']],
    patterns: [['生 / 看 + 病', 'Bị ốm, khám bệnh'],
               ['病 nằm trong 生病 · 看病 · 病人 — cùng một gốc nghĩa']]
  },
  '一点儿': {
    collo: [['一点儿水', 'một chút nước'], ['吃一点儿', 'ăn một chút'],
            ['冷一点儿', 'lạnh hơn chút'], ['喝一点儿热水', 'uống chút nước nóng']],
    patterns: [['一点儿 + danh từ', 'Một chút cái gì: 一点儿水'],
               ['tính từ + 一点儿', 'Hơn một chút: 冷一点儿']]
  },
  '药': {
    collo: [['吃药', 'uống thuốc'], ['买药', 'mua thuốc'],
            ['一些药', 'một ít thuốc'], ['医生的药', 'thuốc của bác sĩ']],
    patterns: [['吃 + 药', 'Uống thuốc — tiếng Trung nói 吃药, không nói 喝药'],
               ['药 có bộ 艹 (cỏ) ở trên — thuốc xưa làm từ cây cỏ']]
  },
  '回': {
    collo: [['回家', 'về nhà'], ['回公司', 'về công ty'],
            ['回学校', 'về trường'], ['回来', 'quay về']],
    patterns: [['回 + nơi chốn', 'Về đâu: 回家 — không cần giới từ'],
               ['回 (về chỗ cũ) ≠ 去 (đi đến một nơi)']]
  },
  '再': {
    collo: [['再来', 'lại đến'], ['再说', 'nói lại'],
            ['再见', 'tạm biệt'], ['再吃一点儿', 'ăn thêm một chút']],
    patterns: [['再 + động từ', 'Làm lại lần nữa: 再来 · 再说'],
               ['再见 nghĩa đen là gặp (见) lại (再)']]
  },
  '喝': {
    collo: [['喝水', 'uống nước'], ['喝热水', 'uống nước nóng'],
            ['喝牛奶', 'uống sữa'], ['想喝', 'muốn uống']],
    patterns: [['喝 + đồ uống', 'Uống cái gì: 喝水'],
               ['喝 (uống) ≠ 吃 (ăn) — nhưng thuốc thì nói 吃药']]
  },
  '热': {
    collo: [['很热', 'rất nóng'], ['有点儿热', 'hơi nóng'],
            ['热水', 'nước nóng'], ['太热了', 'nóng quá']],
    patterns: [['很 / 太 + 热', 'Nóng — nói về thời tiết hoặc đồ vật'],
               ['热 ↔ 冷', 'Nóng ↔ lạnh']]
  },
  '水': {
    collo: [['喝水', 'uống nước'], ['热水', 'nước nóng'],
            ['一点儿水', 'một chút nước'], ['一杯水', 'một cốc nước']],
    patterns: [['喝 + 水', 'Uống nước'],
               ['水 là chữ tượng hình — nét giữa là dòng chảy']]
  }
};
