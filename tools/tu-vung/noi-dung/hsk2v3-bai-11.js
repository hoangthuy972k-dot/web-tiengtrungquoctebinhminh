// Noi dung TU MOI HSK2 3.0 bai 11 (chu de: om dau, thoi quen, hieu thuoc).
module.exports = {
  '头': {
    collo: [['头疼', 'đau đầu'], ['我的头', 'đầu tôi'],
            ['经常头疼', 'hay đau đầu'], ['头不舒服', 'đầu khó chịu']],
    patterns: [['头 + 疼', 'Đau đầu — nói về chỗ nào đau thì đặt chỗ đó trước'],
               ['头 là chữ tượng hình — hai chấm trên là tóc']]
  },
  '疼': {
    collo: [['头疼', 'đau đầu'], ['很疼', 'rất đau'],
            ['不疼', 'không đau'], ['疼得很', 'đau lắm']],
    patterns: [['bộ phận + 疼', 'Chỗ nào đau: 头疼 · 手疼'],
               ['疼 có bộ 疒 (bệnh) bao ngoài — chữ chỉ bệnh đều có bộ này']]
  },
  '经常': {
    collo: [['经常去', 'thường đi'], ['经常运动', 'thường tập thể thao'],
            ['经常头疼', 'hay đau đầu'], ['不经常', 'không thường xuyên']],
    patterns: [['Sub + 经常 + động từ', 'Ai đó thường xuyên làm gì'],
               ['经常 đứng SAU chủ ngữ, TRƯỚC động từ']]
  },
  '动': {
    collo: [['动一动', 'cử động một chút'], ['别动', 'đừng cử động'],
            ['多动', 'vận động nhiều'], ['运动', 'vận động']],
    patterns: [['动 + 一 + 动', 'Cử động một chút — dạng lặp động từ'],
               ['动 nằm trong 运动 — cùng một chữ']]
  },
  '着': {
    collo: [['坐着', 'đang ngồi'], ['笑着说', 'vừa cười vừa nói'],
            ['拿着', 'đang cầm'], ['站着', 'đang đứng']],
    patterns: [['động từ + 着', 'Trạng thái đang duy trì: 他坐着看书'],
               ['V1 + 着 + V2', 'Vừa làm A vừa làm B: 笑着说']]
  },
  '路上': {
    collo: [['在路上', 'trên đường'], ['路上的人', 'người trên đường'],
            ['回家的路上', 'trên đường về nhà'], ['路上小心', 'đi đường cẩn thận']],
    patterns: [['在 + 路上', 'Trên đường — lúc đang đi'],
               ['路 + 上', 'Trên (上) đường (路) — 上 đứng sau danh từ']]
  },
  '慢': {
    collo: [['很慢', 'rất chậm'], ['慢一点儿', 'chậm hơn chút'],
            ['走得很慢', 'đi rất chậm'], ['慢慢地吃', 'ăn từ từ']],
    patterns: [['động từ + 得 + 慢', 'Làm gì đó chậm: 他走得很慢'],
               ['慢 ↔ 快', 'Chậm ↔ nhanh']]
  },
  '进': {
    collo: [['进来', 'vào đây'], ['进去', 'vào đó'],
            ['进教室', 'vào phòng học'], ['请进', 'mời vào']],
    patterns: [['请 + 进', 'Mời vào — câu lịch sự đón khách'],
               ['进来 (gần mình) ↔ 进去 (xa mình)']]
  },
  '药': {
    collo: [['吃药', 'uống thuốc'], ['买药', 'mua thuốc'],
            ['一些药', 'một ít thuốc'], ['药店的药', 'thuốc của hiệu thuốc']],
    patterns: [['吃 + 药', 'Uống thuốc — tiếng Trung nói 吃药, không nói 喝药'],
               ['药 có bộ 艹 (cỏ) ở trên — thuốc xưa làm từ cây cỏ']]
  },
  '身体': {
    collo: [['好身体', 'sức khoẻ tốt'], ['身体不舒服', 'người khó chịu'],
            ['我的身体', 'sức khoẻ của tôi'], ['爷爷的身体', 'sức khoẻ của ông']],
    patterns: [['ai + 身体 + 怎么样？', 'Hỏi thăm sức khoẻ: 你爸爸身体怎么样？'],
               ['身 + 体', 'Thân (身) thể (体) — hai chữ cùng nghĩa ghép lại']]
  },
  '时': {
    collo: [['小时', 'tiếng đồng hồ'], ['有时', 'có lúc'],
            ['上课时', 'lúc học'], ['吃饭时', 'lúc ăn cơm']],
    patterns: [['động từ + 时', 'Lúc làm gì — cách nói ngắn của 的时候'],
               ['时 nằm trong 小时 · 有时 · 时候 — cùng một chữ']]
  },
  '最': {
    collo: [['最好', 'tốt nhất'], ['最喜欢', 'thích nhất'],
            ['最贵', 'đắt nhất'], ['最近的药店', 'hiệu thuốc gần nhất']],
    patterns: [['最 + tính từ / động từ', 'Nhất — mức cao nhất: 我最喜欢中国菜'],
               ['很 < 非常 < 最 — ba mức từ thấp lên cao']]
  },
  '药店': {
    collo: [['去药店', 'đi hiệu thuốc'], ['在药店买药', 'mua thuốc ở hiệu thuốc'],
            ['最近的药店', 'hiệu thuốc gần nhất'], ['药店门口', 'cổng hiệu thuốc']],
    patterns: [['去 / 在 + 药店', 'Đi, ở hiệu thuốc'],
               ['药 + 店', 'Tiệm (店) bán thuốc (药) — cùng kiểu 书店 · 饭店']]
  }
};
